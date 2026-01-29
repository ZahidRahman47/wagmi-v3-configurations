import { useMemo, useState } from "react"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { Rain } from "@rainprotocolsdk/sdk"
import { styles } from "./styles/styles"

import WalletCard from "./components/WalletCard"
import MarketGrid from "./components/MarketGrid"
import WalletModal from "./components/WalletModal"

export default function App() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const [rains, setRains] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const rain = useMemo(() => new Rain(), [])

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : ""

  const handlegetRains = async () => {
    setLoading(true)
    const res = await rain.getPublicMarkets({
      limit: 10,
      offset: 1,
      status: "Live",
    })
    setRains(res.data.pools)
    setLoading(false)
  }

  return (
    <div style={styles.page}>
      <WalletCard
        isConnected={isConnected}
        shortAddress={shortAddress}
        onFetch={handlegetRains}
        onConnect={() => setIsModalOpen(true)}
        onDisconnect={disconnect}
      />

      <MarketGrid rains={rains} loading={loading} rain={rain} />


      {isModalOpen && (
        <WalletModal
          connectors={connectors}
          onSelect={(c) => {
            connect({ connector: c })
            setIsModalOpen(false)
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}
