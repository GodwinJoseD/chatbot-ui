import { useTheme } from "./ThemeContext";
import { useState } from "react";

export default function Sidebar({ onSettingsClick, panelOpen, setPanelOpen }) {
  const { t } = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [editingChatId, setEditingChatId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const [chats] = useState([
    { id: 1, name: "ISO Certified Companies" },
    { id: 2, name: "ISO Certified Comp" },
  ]);

  const [projects] = useState([
    { id: 1, name: "Existing Project" },
    { id: 2, name: "Existing Project" },
    { id: 3, name: "ISO Certified Companies" },
    { id: 4, name: "Existing Project" },
  ]);

  const handlePlusClick = () => setPanelOpen((prev) => !prev);
  const handleNewChat = () => console.log("New chat created");
  const startEditing = (chat) => { setEditingChatId(chat.id); setEditingValue(chat.name); };

  if (!panelOpen) {
    return (
      <div style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "space-between",
        height: "100%", padding: "8px 0 16px",
        width: 52,
        transition: "width 0.25s ease",
      }}>
        <div style={{ paddingTop: "68px", display: "flex", flexDirection: "column", gap: "20px" }}>

          <div style={{ width: 36, height: 36, borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.iconColor }}>
            <svg width="23" height="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
              <rect x="3" y="3" width="18" height="18" rx="2.5" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </div>

          <div onClick={handlePlusClick} style={{ width: 36, height: 36, borderRadius: 50, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: t.plusiconBg, color: t.plusIconColor }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>

          <div style={{ width: 36, height: 36, borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.iconColor }}>
            <svg width="23" height="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </div>
        </div>

        <div onClick={onSettingsClick} style={{ cursor: "pointer" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: t.iconColor }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v-.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      height: "100%",
      width: 263,
      padding: "12px 10px 16px",
      color: t.textColor || "#fff",
      overflowY: "auto", overflowX: "hidden",
      gap: 10,
    }}>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div onClick={handlePlusClick} style={{ width: 13, height: 13, borderRadius: "50%", cursor: "pointer" }} />
            <div style={{ width: 13, height: 13, borderRadius: "50%" }} />
          </div>
          <div onClick={handlePlusClick} style={{ opacity: 0.6, cursor: "pointer" }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
              <rect x="3" y="3" width="18" height="18" rx="2.5" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </div>
        </div>
        <button onClick={handleNewChat} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 10, padding: "9px 12px", color: t.textColor || "#fff", cursor: "pointer", fontSize: 14, fontWeight: 500, width: "100%", textAlign: "left" }}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Chat
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "8px 12px" }}>
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ opacity: 0.5, flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search the chats"
            style={{ background: "none", border: "none", outline: "none", color: t.textColor || "#fff", fontSize: 13, width: "100%", opacity: searchValue ? 1 : 0.5 }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, opacity: 0.85 }}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Project
          </div>

          {projects.map((proj) => (
            <div key={proj.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, opacity: 0.85 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ flexShrink: 0 }}>
                  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                </svg>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{proj.name}</span>
              </div>
              <div style={{ opacity: 0.4, fontSize: 16, letterSpacing: 1, flexShrink: 0 }}>···</div>
            </div>
          ))}

          <div style={{ padding: "5px 8px", fontSize: 12, opacity: 0.5, cursor: "pointer" }}>See All</div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "2px 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ fontSize: 11, opacity: 0.4, padding: "2px 8px", marginBottom: 2 }}>Chats</div>

          {chats.map((chat) => (
            <div key={chat.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, background: editingChatId === chat.id ? "rgba(255,255,255,0.07)" : "transparent" }}>
              {editingChatId === chat.id ? (
                <div style={{ display: "flex", alignItems: "center", gap: 6, width: "100%" }}>
                  <input
                    autoFocus
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    onBlur={() => setEditingChatId(null)}
                    style={{ background: "rgba(255,255,255,0.08)", border: "none", outline: "none", color: t.textColor || "#fff", fontSize: 13, borderRadius: 6, padding: "3px 7px", flex: 1, minWidth: 0 }}
                  />
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              ) : (
                <>
                  <span style={{ opacity: 0.85, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{chat.name}</span>
                  <div onClick={() => startEditing(chat)} style={{ opacity: 0.4, fontSize: 16, letterSpacing: 1, flexShrink: 0 }}>···</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div onClick={onSettingsClick} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 10, cursor: "pointer", opacity: 0.7 }}>
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ color: t.iconColor, flexShrink: 0 }}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v-.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <span style={{ fontSize: 14, color: t.textColor || "#fff" }}>Settings</span>
      </div>
    </div>
  );
}