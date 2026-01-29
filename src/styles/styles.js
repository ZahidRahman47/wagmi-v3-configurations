export const styles = {
    page: {
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden", // 🔒 final safety lock
        boxSizing: "border-box",
        background: `
        radial-gradient(circle at top, rgba(0,255,255,0.08), transparent 40%),
        linear-gradient(135deg, #070916, #0d1b2a, #120720)
      `,
        fontFamily: '"Inter", system-ui, sans-serif',
        padding: "96px 16px 16px",
    },

    marketGrid: {
        display: "grid",
        width: "100%",
        boxSizing: "border-box",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // ✅ responsive
        gap: 16,
        marginTop: 32,
        padding: 8,
    },

    marketCard: {
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        padding: "20px 18px 18px",
        borderRadius: 20,
        background: `
          linear-gradient(
            180deg,
            rgba(25,35,70,0.85),
            rgba(10,18,38,0.95)
          )
        `,
        border: "1px solid rgba(0,255,255,0.2)",
        boxShadow: `
          0 8px 30px rgba(0,0,0,0.45),
          inset 0 0 0 1px rgba(0,255,255,0.08)
        `,
        backdropFilter: "blur(14px)",
        color: "#e6f1ff",
        overflow: "hidden",
        transition: "all 0.25s ease",
    },
    marketGlow: {
        position: "absolute",
        inset: 0,
        background:
            "radial-gradient(circle at top left, rgba(0,255,255,0.18), transparent 40%)",
        pointerEvents: "none",
    },

    question: {
        margin: 0,
        marginBottom: 12,
        fontSize: 17,
        fontWeight: 800,
        lineHeight: 1.35,
        letterSpacing: "0.015em",
        color: "#ffffff",
    },
    statusRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },

    statusBadge: {
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        background: "rgba(0,255,255,0.18)",
        color: "#7ffcff",
        border: "1px solid rgba(0,255,255,0.35)",
    },

    metaSmall: {
        fontSize: 12,
        opacity: 0.75,
    },
    volumeRow: {
        marginTop: 6,
        fontSize: 14,
        fontWeight: 700,
        color: "#9afcff",
    },
    options: {
        marginTop: 14,
        display: "grid",
        gap: 10,
    },

    optionBlock: {
        display: "grid",
        gap: 6,
    },

    optionHeader: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
        fontWeight: 600,
    },

    optionBar: {
        height: 6,
        borderRadius: 999,
        background: "rgba(255,255,255,0.08)",
        overflow: "hidden",
    },
    topPick: {
        marginTop: 16,
        padding: "10px 12px",
        borderRadius: 12,
        background:
            "linear-gradient(135deg, rgba(255,170,0,0.25), rgba(255,90,0,0.25))",
        fontSize: 13,
        fontWeight: 800,
        textAlign: "center",
        color: "#ffd28a",
        boxShadow: "0 0 18px rgba(255,170,0,0.4)",
    },

    optionFill: {
        height: "100%",
        borderRadius: 999,
        background:
            "linear-gradient(90deg, rgba(0,255,255,0.9), rgba(120,140,255,0.9))",
        boxShadow: "0 0 10px rgba(0,255,255,0.5)",
    },


    card: {
        width: "100%",
        maxWidth: 420, // prevents overflow on desktop
        boxSizing: "border-box",
        padding: 24,
        margin: "0 auto",
        borderRadius: 18,
        background: "rgba(10, 20, 40, 0.75)",
        backdropFilter: "blur(14px)",
        color: "#e6f1ff",
        border: "1px solid rgba(0,255,255,0.15)",
    },
    buttons: {
        display: "grid",
        gridAutoRows: "auto",
        rowGap: 14,          // 👈 guaranteed vertical space
        width: "100%",
    },

    button: {
        width: "100%",
        boxSizing: "border-box",
        padding: "14px 18px",
        borderRadius: 14,
        border: "1px solid rgba(0,255,255,0.3)",
        cursor: "pointer",
        margin: 4,          // 👈 prevents collapse from defaults
        background: `
          linear-gradient(
            135deg,
            rgba(0,255,255,0.95),
            rgba(120,140,255,0.95)
          )
        `,
        color: "#050b14",
        fontWeight: 700,
        letterSpacing: "0.03em",
        transition: "all 0.25s ease",
    },

    buttonWallet: {
        width: "100%",
        boxSizing: "border-box",
        padding: "12px 16px",
        borderRadius: 12,
        margin: 4,
        border: "1px solid rgba(0,255,255,0.25)",
        cursor: "pointer",
        background: `
        linear-gradient(
          135deg,
          rgba(0,255,255,0.9),
          rgba(120,140,255,0.9)
        )
      `,
        color: "#050b14",
        fontWeight: 600,
    },

    connectedBox: {
        width: "100%",
        boxSizing: "border-box",
        padding: 16,
        borderRadius: 12,
        background: "rgba(0,0,0,0.45)",
        marginBottom: 16,
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid rgba(0,255,255,0.15)",
        fontFamily: "monospace",
    },

    modalOverlay: {
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    },

    modal: {
        width: "90%",
        maxWidth: 360,
        boxSizing: "border-box",
        padding: 24,
        borderRadius: 16,
        background: "rgba(10, 20, 40, 0.9)",
        border: "1px solid rgba(0,255,255,0.2)",
    },
}
