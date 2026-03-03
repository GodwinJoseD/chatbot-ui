import { useTheme } from "./ThemeContext";

export default function InputBar({ input, setInput, onSend, isLoading, deepThinking, setDeepThinking, searchWeb, setSearchWeb }) {
  const { t } = useTheme();

  return (
    <div style={{ padding: "10px 18px 14px", flexShrink: 0 }}>
      <div style={{
        background: t.inputBg,
        borderRadius: 14,
        border: `1px solid ${t.inputBorder}`,
        padding: "11px 16px 10px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        marginBottom: 10,
      }}>
        <textarea
          rows={1}
          placeholder="Ask me anything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); onSend(input); } }}
          style={{
            width: "100%", background: "transparent", border: "none", outline: "none",
            resize: "none", color: t.textPrimary, fontSize: 13.5, fontFamily: "inherit",
            lineHeight: 1.5,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 30, height: 30, borderRadius: "50%", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: t.iconColor, fontSize: 22, lineHeight: 1, flexShrink: 0,
        }}>+</div>

        <Chip label="Deep Thinking" active={deepThinking} onClick={() => setDeepThinking(!deepThinking)} t={t} />
        <Chip label="Search the web" active={searchWeb} onClick={() => setSearchWeb(!searchWeb)} t={t} />

        <div style={{ marginLeft: "auto", flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, boxShadow: "0 2px 10px rgba(79,172,254,0.45)",
          }}>🤖</div>
        </div>
      </div>
      </div>

    </div>
  );
}

function Chip({ label, active, onClick, t }) {
  return (
    <button onClick={onClick} style={{
      padding: "6px 16px", borderRadius: 20,
      border: `1px solid ${active ? "#3b72f0" : t.chipBorder}`,
      background: active ? "rgba(59,114,240,0.14)" : t.chipBg,
      color: active ? "#3b72f0" : t.chipText,
      fontSize: 12.5, cursor: "pointer", fontWeight: 500,
      backdropFilter: "blur(8px)",
      transition: "all 0.15s",
    }}>
      {label}
    </button>
  );
}
