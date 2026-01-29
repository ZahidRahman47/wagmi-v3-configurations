import { useState } from "react"
import { styles } from "../styles/styles"
import { parseUnits } from "viem"
import { useSendTransaction } from "wagmi"

export default function MarketCard({ pool, rain }) {
    const [selectedOption, setSelectedOption] = useState(null)
    const [amount, setAmount] = useState("")
    const [rawTx, setRawTx] = useState(null)
    const [building, setBuilding] = useState(false)
    const [buildError, setBuildError] = useState(null)

    const { sendTransaction, isPending } = useSendTransaction()

    const handleBuildTrade = async () => {
        setBuildError(null)

        if (selectedOption === null) {
            setBuildError("Please select an option")
            return
        }

        if (!amount || Number(amount) <= 0) {
            setBuildError("Enter a valid amount")
            return
        }

        if (!pool?.contractAddress) {
            setBuildError("Market contract address missing")
            return
        }

        if (!pool?.token?.tokenDecimals) {
            setBuildError("Token decimals missing")
            return
        }

        setBuilding(true)

        try {
            const tx = await rain.buildBuyOptionRawTx({
                marketContractAddress: pool.contractAddress,
                selectedOption,
                buyAmountInWei: parseUnits(amount, pool.token.tokenDecimals),
            })

            setRawTx(tx)
        } catch (err) {
            console.error(err)
            setBuildError(err?.message || "Failed to build transaction")
        } finally {
            setBuilding(false)
        }
    }

    const handleSign = () => {
        if (!rawTx) return
        sendTransaction(rawTx)
    }

    return (
        <div style={styles.marketCard}>
            <div style={styles.marketGlow} />

            <h4 style={styles.question}>{pool.question}</h4>

            <div style={styles.statusRow}>
                <span style={styles.statusBadge}>{pool.status}</span>
                <span style={styles.metaSmall}>👥 {pool.participantCount}</span>
            </div>

            <p style={styles.meta}>Participants: {pool.participantCount}</p>

            <p style={styles.volumeRow}>
                💰 ${(pool.totalVolumeUSD / 1e6).toLocaleString()}
            </p>

            <div style={styles.options}>
                {pool.options.map((opt, index) => {
                    const isSelected = selectedOption === index

                    return (
                        <div
                            key={opt._id}
                            onClick={() => setSelectedOption(index)}
                            style={{
                                ...styles.optionBlock,
                                border: isSelected
                                  ? "2px solid #00ffff"
                                  : "1px solid rgba(255,255,255,0.12)",
                                background: isSelected
                                  ? "linear-gradient(135deg, rgba(0,255,255,0.15), rgba(0,255,255,0.05))"
                                  : "transparent",
                                boxShadow: isSelected
                                  ? "0 0 15px rgba(0,255,255,0.5), 0 0 25px rgba(0,255,255,0.2) inset"
                                  : "none",
                                borderRadius: "16px", // ✅ more rounded
                                padding: "10px", // optional, to give more space inside
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                              }}
                              onMouseEnter={(e) => {
                                if (!isSelected) e.currentTarget.style.background = "rgba(0,255,255,0.02)";
                              }}
                              onMouseLeave={(e) => {
                                if (!isSelected) e.currentTarget.style.background = "transparent";
                              }}
                              
                        >
                            <div style={styles.optionHeader}>
                                <span>{opt.optionName}</span>
                                <span>{opt.percentage.toFixed(1)}%</span>
                            </div>

                            <div style={styles.optionBar}>
                                <div
                                    style={{
                                        ...styles.optionFill,
                                        width: `${opt.percentage}%`,
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            <input
                type="number"
                placeholder="Amount in ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "12px",
                    borderRadius: "8px",
                    background: "#0b1220",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.12)",
                }}
            />

            {buildError && (
                <div style={{ color: "#ff6b6b", marginTop: "10px", fontSize: "13px" }}>
                    ⚠️ {buildError}
                </div>
            )}

            <div style={{ marginTop: "14px" }}>
                {!rawTx ? (
                    <button
                        style={styles.button}
                        onClick={handleBuildTrade}
                        disabled={building}
                    >
                        {building ? "Preparing Trade..." : "Place Trade"}
                    </button>
                ) : (
                    <button
                        style={styles.button}
                        onClick={handleSign}
                        disabled={isPending}
                    >
                        {isPending ? "Waiting for Signature..." : "Sign Transaction"}
                    </button>
                )}
            </div>

            {rawTx && (
                <div style={styles.topPick}>
                    🧾 SDK Raw Transaction
                    <pre
                        style={{
                            marginTop: "8px",
                            fontSize: "11px",
                            maxHeight: "160px",
                            overflow: "auto",
                            background: "rgba(0,0,0,0.45)",
                            padding: "8px",
                            borderRadius: "6px",
                            wordBreak: "break-all",
                        }}
                    >
                        {JSON.stringify(rawTx, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    )
}
