import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'
import App from './App'

const queryClient = new QueryClient()

const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    walletConnect({
      projectId: '204ef6df53447b48a9ee176786b9eff5',
      metadata: {
        name: 'Wagmi V2 Test',
        description: 'Testing WalletConnect v2',
        url: 'http://localhost:3000',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
      },
    }),
    coinbaseWallet({
      appName: 'Wagmi V2 Test',
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
