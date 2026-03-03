import { useTheme } from "./ThemeContext";

export default function SourcesPanel({ sources, onClose }) {
  const { t } = useTheme();
  if (!sources) return null;

  return (
    <div style={{
      width: 280, flexShrink: 0,
      background: t.sourcesBg,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderLeft: `1px solid ${t.sourcesBorder}`,
      display: "flex", flexDirection: "column",
      overflow: "hidden",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 18px 12px",
        borderBottom: `1px solid ${t.divider}`, flexShrink: 0,
      }}>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: t.textPrimary, letterSpacing: "-0.2px" }}>
          Sources
        </h3>
        <button onClick={onClose} style={{
          background: "none", border: "none", cursor: "pointer",
          color: t.textMuted, fontSize: 20, lineHeight: 1, padding: 0,
        }}>×</button>
      </div>

      <div style={{ overflowY: "auto", flex: 1 }}>
        {sources.map((src, i) => (
          <div key={i} style={{ padding: "14px 18px", borderBottom: `1px solid ${t.divider}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: t.avatarBg, flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: t.textPrimary }}>{src.title}</div>
                <div style={{ fontSize: 11, color: t.textMuted }}>{src.url}</div>
              </div>
            </div>
            <p style={{ margin: "0 0 4px", fontSize: 12.5, fontWeight: 700, color: t.textPrimary, lineHeight: 1.4 }}>
              10 companies were found with ISO
            </p>
            <p style={{ margin: 0, fontSize: 12.5, color: t.textSecondary, lineHeight: 1.55 }}>
              {src.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
