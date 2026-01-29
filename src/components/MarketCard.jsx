import { styles } from "../styles/styles"

export default function MarketCard({ pool }) {
    return (
        <div style={styles.marketCard} onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)"
            e.currentTarget.style.boxShadow =
                "0 14px 36px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,255,255,0.2)"
        }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow =
                    "0 6px 24px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(0,255,255,0.08)"
            }}>
            <div style={styles.marketGlow} />
            <h4 style={styles.question}>{pool.question}</h4>

            <div style={styles.statusRow}>
                <span style={styles.statusBadge}>{pool.status}</span>
                <span style={styles.metaSmall}>
                    👥 {pool.participantCount}
                </span>
            </div>
            <div style={styles.statusRow}>
                <span>Id: </span>
                <span style={styles.statusBadge}>{pool._id}</span>

            </div>
            <p style={styles.meta}>Participants: {pool.participantCount}</p>
            <p style={styles.volumeRow}>
                💰 ${(pool.totalVolumeUSD / 1e6).toLocaleString()}
            </p>

            <div style={styles.options}>
                {pool.options.map(opt => (
                    <div key={opt._id} style={styles.optionBlock}>
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
                ))}
            </div>


            <div style={styles.topPick}>
                🔥 Top Pick: {pool.topOption?.optionName}
            </div>
            <div style={{marginTop:"12px"}}>
                <button style={styles.button}> Place Trade</button>
            </div>
        </div>
    )
}
