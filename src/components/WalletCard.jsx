import { styles } from "../styles/styles"

export default function WalletCard({
    isConnected,
    shortAddress,
    onFetch,
    onConnect,
    onDisconnect,
}) {
    return (
        <div style={styles.card}>
            {!isConnected ? (
                <>
                    <h1>Welcome</h1>
                    <div >
                        <button style={styles.button} onClick={onFetch}>
                            Fetch rain data
                        </button>
                        <button style={styles.buttonWallet} onClick={onConnect}>
                            Connect Wallet
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div style={styles.connectedBox}>
                        <span>Connected</span>
                        <strong>{shortAddress}</strong>
                    </div>
                    <button style={styles.buttonWallet} onClick={onDisconnect}>Disconnect</button>
                </>
            )}
        </div>
    )
}
