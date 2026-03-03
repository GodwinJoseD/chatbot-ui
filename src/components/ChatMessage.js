import { useTheme } from "./ThemeContext";

const CopyIcon = ({ color }) => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export function AssistantMessage({ message, onSourcesClick }) {
  const { t } = useTheme();
  return (
    <div>
      <div style={{
        background: t.cardBg,
        border: `1px solid ${t.cardBorder}`,
        borderRadius: 14,
        padding: "18px 20px",
        boxShadow: t.cardShadow,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}>
        {message.title && (
          <h2 style={{
            margin: "0 0 10px 0", fontSize: 16.5, fontWeight: 600,
            color: t.textPrimary, lineHeight: 1.4, letterSpacing: "-0.2px",
          }}>
            {message.title}
          </h2>
        )}
        <p style={{ margin: 0, fontSize: 13.5, color: t.textSecondary, lineHeight: 1.65 }}>
          {message.content}
        </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 2px 0" }}>
        <div style={{ cursor: "pointer", lineHeight: 0 }}>
          <CopyIcon color={t.textMuted} />
        </div>
        {message.sources && (
          <button
            onClick={() => onSourcesClick && onSourcesClick(message.id)}
            style={{
              padding: "5px 16px", borderRadius: 20,
              border: `1px solid ${t.sourcesBtnBorder}`,
              background: t.sourcesBg,
              color: t.sourcesBtnText,
              fontSize: 12.5, cursor: "pointer", fontWeight: 500,
            }}
          >
            Sources
          </button>
        )}
      </div>
      </div>

    </div>
  );
}

export function UserMessage({ message }) {
  const { t } = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <div style={{
        background: t.userBubbleBg,
        borderRadius: 14,
        padding: "16px 20px",
        maxWidth: "88%",
      }}>
        <p style={{ margin: 0, fontSize: 13.5, color: "#fff", lineHeight: 1.6, fontWeight: 500 }}>
          {message.content}
        </p>

        {message.files?.map((f, i) => (
          <div key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            marginTop: 12,
            background: "rgba(255,255,255,0.18)",
            borderRadius: 10, padding: "8px 14px",
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: "rgba(255,255,255,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#fff" }}>{f.name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{f.type}</div>
            </div>
          </div>
        ))}
              <div style={{ cursor: "pointer", lineHeight: 0, marginTop: 6, marginRight: 2 }}>
        <CopyIcon color={t.textMuted} />
      </div>
      </div>
    </div>
  );
}
