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
    background: `
      radial-gradient(circle at top, rgba(0,255,255,0.08), transparent 40%),
      linear-gradient(135deg, #070916, #0d1b2a, #120720)
    `,
    fontFamily: '"Inter", system-ui, sans-serif',
  },

  card: {
    width: 360,
    padding: 32,
    borderRadius: 18,
    background: 'rgba(10, 20, 40, 0.75)',
    backdropFilter: 'blur(14px)',
    color: '#e6f1ff',
    border: '1px solid rgba(0,255,255,0.15)',
    boxShadow: `
      0 0 0 1px rgba(0,255,255,0.08),
      0 20px 40px rgba(0,0,0,0.6),
      inset 0 0 20px rgba(0,255,255,0.05)
    `,
  },

  title: {
    margin: 0,
    fontSize: 24,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },

  subtitle: {
    opacity: 0.6,
    marginBottom: 24,
    fontSize: 14,
  },

  buttons: {
    display: 'grid',
    gap: 12,
  },

  button: {
    padding: '12px 16px',
    borderRadius: 12,
    border: '1px solid rgba(0,255,255,0.25)',
    cursor: 'pointer',
    background: `
      linear-gradient(
        135deg,
        rgba(0,255,255,0.9),
        rgba(120,140,255,0.9)
      )
    `,
    color: '#050b14',
    fontWeight: 600,
    letterSpacing: '0.03em',
    boxShadow: `
      0 0 12px rgba(0,255,255,0.35),
      inset 0 0 8px rgba(255,255,255,0.25)
    `,
  },

  connectedBox: {
    padding: 16,
    borderRadius: 12,
    background: 'rgba(0,0,0,0.45)',
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid rgba(0,255,255,0.15)',
    fontFamily: 'monospace',
    boxShadow: 'inset 0 0 10px rgba(0,255,255,0.08)',
  },

  disconnect: {
    width: '100%',
    padding: 12,
    borderRadius: 12,
    background: 'linear-gradient(135deg, #ff4d4f, #ff7a7a)',
    border: 'none',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '0.04em',
    boxShadow: '0 0 12px rgba(255,80,80,0.5)',
  },

  status: {
    marginTop: 16,
    opacity: 0.75,
    fontSize: 13,
    fontFamily: 'monospace',
  },

  error: {
    marginTop: 16,
    color: '#ff6b6b',
    fontSize: 13,
    fontFamily: 'monospace',
  },
}

export default App
