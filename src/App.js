import {
    useAccount,
    useConnect,
    useDisconnect,
  } from 'wagmi'
  
  function App() {
    const { address, isConnected } = useAccount()
    const { connect, connectors, error, isPending } = useConnect()
    const { disconnect } = useDisconnect()
  
    return (
      <div style={{ padding: 40 }}>
        <h2>Wagmi v2 Wallet Test</h2>
  
        {isConnected ? (
          <>
            <p>Connected: {address}</p>
            <button onClick={() => disconnect()}>Disconnect</button>
          </>
        ) : (
          connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              style={{ display: 'block', marginBottom: 10 }}
            >
              Connect with {connector.name}
            </button>
          ))
        )}
  
        {isPending && <p>Connecting…</p>}
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </div>
    )
  }
  
  export default App
  