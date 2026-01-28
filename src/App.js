import {
  useAccount,
  useConnect,
  useDisconnect,
} from 'wagmi'

function App() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, error, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : ''

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Connect Wallet</h1>
        <p style={styles.subtitle}>
          Securely connect your wallet to continue
        </p>

        {isConnected ? (
          <>
            <div style={styles.connectedBox}>
              <span>Connected as</span>
              <strong>{shortAddress}</strong>
            </div>

            <button
              style={styles.disconnect}
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </>
        ) : (
          <div style={styles.buttons}>
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => connect({ connector })}
                disabled={isPending}
                style={{
                  ...styles.button,
                  opacity: isPending ? 0.6 : 1,
                }}
              >
                {connector.name}
              </button>
            ))}
          </div>
        )}

        {isPending && <p style={styles.status}>Connecting…</p>}
        {error && <p style={styles.error}>{error.message}</p>}
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f0c19, #602b63, #94243e)',
    fontFamily: 'Inter, sans-serif',
  },
  card: {
    width: 360,
    padding: 32,
    borderRadius: 16,
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(12px)',
    color: '#fff',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  },
  title: {
    margin: 0,
    fontSize: 24,
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: 24,
  },
  buttons: {
    display: 'grid',
    gap: 12,
  },
  button: {
    padding: '12px 16px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #7F7FD5, #86A8E7)',
    color: '#000',
    fontWeight: 600,
  },
  connectedBox: {
    padding: 16,
    borderRadius: 12,
    background: 'rgba(0,0,0,0.3)',
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  disconnect: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    background: '#ff4d4f',
    border: 'none',
    fontWeight: 600,
    cursor: 'pointer',
  },
  status: {
    marginTop: 16,
    opacity: 0.8,
  },
  error: {
    marginTop: 16,
    color: '#ff6b6b',
  },
}

export default App
