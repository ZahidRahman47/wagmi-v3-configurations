// src/components/WalletModal.jsx
import { styles } from "../styles/styles"

export default function WalletModal({ connectors, onSelect, onClose }) {
    return (
        <div style={styles.modalOverlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {connectors.map(connector => (
                    <div style={styles.buttons}>
                        <button
                            key={connector.uid}
                            onClick={() => onSelect(connector)}
                            style={styles.button}
                        >
                            {connector.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
