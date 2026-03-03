import { useTheme } from "./ThemeContext";

export default function SettingsPanel({ licenseKey, setLicenseKey, onClose }) {
  const { dark, toggle, t } = useTheme();

  return (
    <div style={{
      position: "absolute",
      bottom: 70,
      left: 56,
      width: 268,
      background: t.settingsBg,
      border: `1px solid ${t.settingsBorder}`,
      borderRadius: 14,
      padding: "18px 18px 20px",
      zIndex: 50,
      boxShadow: dark ? "0 16px 48px rgba(0,0,0,0.55)" : "0 16px 48px rgba(0,0,0,0.12)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: t.textPrimary, letterSpacing: "-0.2px" }}>
          Settings
        </h3>
        <button onClick={onClose} style={{
          background: "none", border: "none", cursor: "pointer",
          color: t.textMuted, fontSize: 20, lineHeight: 1, padding: 0,
        }}>×</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
        <input
          type="text"
          placeholder="License key"
          value={licenseKey}
          onChange={(e) => setLicenseKey(e.target.value)}
          style={{
            flex: 1,
            background: t.settingsInputBg,
            border: `1px solid ${t.settingsInputBorder}`,
            borderRadius: 8, padding: "8px 12px",
            fontSize: 12.5, color: t.settingsInputText,
            outline: "none", fontFamily: "inherit",
          }}
        />
        <span style={{ fontSize: 12.5, color: t.textMuted, cursor: "pointer", fontWeight: 500 }}>Edit</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={t.textSecondary} strokeWidth={2}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span style={{ fontSize: 13, color: t.textSecondary, fontWeight: 500 }}>Dark mode</span>
        </div>
        <div
          onClick={toggle}
          style={{
            width: 44, height: 25, borderRadius: 13,
            background: dark ? t.toggleOn : t.toggleOff,
            position: "relative", cursor: "pointer",
            transition: "background 0.2s", flexShrink: 0,
          }}
        >
          <div style={{
            width: 19, height: 19, borderRadius: "50%",
            background: "#fff",
            position: "absolute", top: 3,
            left: dark ? 22 : 3,
            transition: "left 0.2s",
            boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
          }} />
        </div>
      </div>
    </div>
  );
}
