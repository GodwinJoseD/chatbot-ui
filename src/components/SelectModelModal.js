import { useTheme } from "./ThemeContext";

export default function SelectModelModal({
  currentModel,
  selectedModel,
  setSelectedModel,
  onConfirm,
  onCancel,
}) {
  const { dark, t } = useTheme();

  const modalBg = dark ? "rgba(30,30,35,0.85)" : "rgba(255,255,255,0.85)";
  const borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const textPrimary = dark ? "#fff" : "#000";
  const textSecondary = dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";
  const textMuted = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
  const buttonBg = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const buttonBgHover = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const buttonSelectedBg = "rgba(59,130,246,0.8)";
  const buttonSelectedBorder = "rgba(59,130,246,0.6)";
  const insetShadow = dark
    ? "-4px -4px 20px 0px rgba(255,255,255,0.08) inset, 4px 4px 20px 0px rgba(255,255,255,0.08) inset"
    : "-4px -4px 20px 0px rgba(0,0,0,0.08) inset, 4px 4px 20px 0px rgba(0,0,0,0.08) inset";

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: dark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}>
      <div style={{
        width: 420,
        maxHeight: "80vh",
        background: modalBg,
        backdropFilter: "blur(34px)",
        WebkitBackdropFilter: "blur(34px)",
        border: `1px solid ${borderColor}`,
        borderRadius: 18,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "24px",
        gap: 20,
      }}>

        <div style={{
          color: textPrimary,
          fontSize: 18,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          Select Model
          <div style={{
            width: 18, height: 18,
            borderRadius: "50%",
            border: `1.5px solid ${dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
          }}>
            ?
          </div>
        </div>

        <div style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          paddingRight: 8,
        }}>

          <div>
            <div style={{
              color: textSecondary,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              Base Models
              <div style={{
                width: 16, height: 16,
                borderRadius: "50%",
                border: `1.5px solid ${dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
              }}>
                ?
              </div>
            </div>

            {[
              { id: "ultra-light", name: "Ultra Light", desc: "Llama 3.1B (latest)" },
              { id: "light", name: "Light", desc: "Llama 8.1B (beta)" },
              { id: "mid", name: "Mid", desc: "Llama 3 70B (latest)" },
              { id: "high", name: "High", desc: "Llama 3 405B (latest)" },
            ].map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  marginBottom: 10,
                  background: selectedModel === model.id ? buttonSelectedBg : buttonBg,
                  backdropFilter: "blur(10px)",
                  border: selectedModel === model.id
                    ? `1px solid ${buttonSelectedBorder}`
                    : `1px solid ${borderColor}`,
                  borderRadius: 12,
                  color: textPrimary,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
                onMouseEnter={(e) => {
                  if (selectedModel !== model.id) {
                    e.target.style.background = buttonBgHover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedModel !== model.id) {
                    e.target.style.background = buttonBg;
                  }
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 500 }}>{model.name}</div>
                <div style={{ fontSize: 11, color: textMuted }}>{model.desc}</div>
              </button>
            ))}
          </div>

          <div>
            <div style={{
              color: textSecondary,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              Bonus Models
              <div style={{
                width: 16, height: 16,
                borderRadius: "50%",
                border: `1.5px solid ${dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
              }}>
                ?
              </div>
            </div>

            {[
              { id: "bonus-1", name: "Bonus Model", desc: "Llama 3.8B (instruct)" },
              { id: "bonus-2", name: "Bonus Model", desc: "Llama 3.8B (instruct)" },
            ].map((model) => (
              <div
                key={model.id}
                style={{
                  padding: "12px 16px",
                  marginBottom: 10,
                  background: buttonBg,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${borderColor}`,
                  borderRadius: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: textPrimary }}>
                    {model.name}
                  </div>
                  <div style={{ fontSize: 11, color: textMuted }}>{model.desc}</div>
                </div>
                <button
                  style={{
                    padding: "6px 14px",
                    background: buttonSelectedBg,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${buttonSelectedBorder}`,
                    borderRadius: 8,
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(59,130,246,1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = buttonSelectedBg;
                  }}
                >
                  Activate
                </button>
              </div>
            ))}
          </div>

          <div>
            <div style={{
              color: textSecondary,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              Pansophy Pro
              <div style={{
                width: 16, height: 16,
                borderRadius: "50%",
                border: `1.5px solid ${dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
              }}>
                ?
              </div>
            </div>

            <div style={{
              padding: "12px 16px",
              background: buttonBg,
              backdropFilter: "blur(10px)",
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: textPrimary }}>
                  Mid
                </div>
                <div style={{ fontSize: 11, color: textMuted }}>Llama 3.8B (instruct)</div>
              </div>
              <button
                style={{
                  padding: "6px 14px",
                  background: buttonSelectedBg,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${buttonSelectedBorder}`,
                  borderRadius: 8,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(59,130,246,1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = buttonSelectedBg;
                }}
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>

        <div style={{
          display: "flex",
          gap: 12,
          justifyContent: "flex-end",
        }}>
          <button
            onClick={onCancel}
            style={{
              padding: "10px 20px",
              background: buttonBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 10,
              color: textPrimary,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = buttonBgHover;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = buttonBg;
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "10px 20px",
              background: buttonSelectedBg,
              border: `1px solid ${buttonSelectedBorder}`,
              borderRadius: 10,
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(59,130,246,1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = buttonSelectedBg;
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}