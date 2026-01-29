// src/components/MarketGrid.jsx
import { styles } from "../styles/styles"
import MarketCard from "./MarketCard"

export default function MarketGrid({ rains, loading }) {
  if (loading) return <p style={{color:"white"}}>Loading markets…</p>

  return (
    <div style={styles.marketGrid}>
      {rains.map(pool => (
        <MarketCard key={pool._id} pool={pool} />
      ))}
    </div>
  )
}
