import { useTheme } from "../components/ThemeContext";

export default function TitleBar() {
  const { t } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 16px",
        borderBottom: `1px solid ${t.titlebarBorder}`,
        flexShrink: 0,
      }}
    >
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
      <div style={{ marginLeft: 12, color: t.iconColor, fontSize: 17, cursor: "pointer", lineHeight: 1 }}>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
        </svg>
      </div>
    </div>
  );
}
