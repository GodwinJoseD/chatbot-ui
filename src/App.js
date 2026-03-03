import { useRef, useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { useChatbot } from "./containers/Chatbot";
import Sidebar from "./components/SideBar";
import { AssistantMessage, UserMessage } from "./components/ChatMessage";
import InputBar from "./components/InputBar";
import SourcesPanel from "./components/SourcesPanel";
import SettingsPanel from "./components/SettingPanel";
import SelectModelModal from "./components/SelectModelModal";
import bg from "./assets/background.jpg";
import robotLoadingImage from "./assets/RobotLoading.png";   

function ChatApp() {
  const { dark, t } = useTheme();
  const bot = useChatbot();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [bot.messages]);

  return (
    <div style={{
        minHeight: "100vh",
        width: "100%",
        background: `url(${bg}) center/cover fixed`, 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}>

      <div style={{
        width: 920, height: 640,
        borderRadius: 18,
        display: "flex",
        position: "relative",
        overflow: "hidden",
        boxShadow: dark
          ? "0 40px 100px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.06)"
          : "0 40px 100px rgba(0,0,0,0.2), 0 0 0 0.5px rgba(255,255,255,0.4)",
      }}>

        <div style={{
          width: 52, flexShrink: 0,
          background: t.sidebarBg,
          padding: "10px 8px",
          position: "relative", zIndex: 2,
          display: "flex", flexDirection: "column",
        }}>
          <Sidebar onSettingsClick={() => bot.setSettingsOpen(!bot.settingsOpen)} />
        </div>

        <div style={{
          flex: 1,
          background: t.windowBg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${t.windowBorder}`,
          borderRadius: "0 18px 18px 0",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}>
          <div style={{
            flex: 1, overflowY: "auto",
            padding: "22px 22px 8px",
            display: "flex", flexDirection: "column", gap: 18,
          }}>
            {bot.messages.map((msg) =>
              msg.role === "assistant"
                ? <AssistantMessage key={msg.id} message={msg}
                    onSourcesClick={(id) => bot.setActiveSources(bot.activeSources === id ? null : id)} />
                : <UserMessage key={msg.id} message={msg} />
            )}
            {bot.isLoading && (
              <div style={{ color: t.textMuted, fontSize: 13 }}>Thinking…</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <InputBar
            input={bot.input} setInput={bot.setInput}
            onSend={bot.sendMessage} isLoading={bot.isLoading}
            deepThinking={bot.deepThinking} setDeepThinking={bot.setDeepThinking}
            searchWeb={bot.searchWeb} setSearchWeb={bot.setSearchWeb}
          />
        </div>

        {bot.activeSources && (
          <SourcesPanel
            sources={bot.activeSourcesData}
            onClose={() => bot.setActiveSources(null)}
          />
        )}

        {bot.settingsOpen && (
          <SettingsPanel
            licenseKey={bot.licenseKey} setLicenseKey={bot.setLicenseKey}
            onClose={() => bot.setSettingsOpen(false)}
          />
        )}

        {bot.modelModalOpen && (
          <SelectModelModal
            currentModel={bot.currentModel}
            selectedModel={bot.selectedModel}
            setSelectedModel={bot.setSelectedModel}
            onConfirm={bot.confirmModelUpdate}
            onCancel={() => bot.setModelModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}


/* 🔥 Loading Screen Component */
function LoadingScreen() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(20,20,30,0.85)",
      backdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      color: "#fff"
    }}>
      <img
        src={robotLoadingImage}
        alt="Loading"
        style={{
          width: 120,
          marginBottom: 30,
          animation: "float 3s ease-in-out infinite"
        }}
      />

      <div style={{ marginBottom: 12, fontSize: 15, opacity: 0.8 }}>
        Downloading Consciousness
      </div>

      <div style={{
        width: 260,
        height: 6,
        background: "rgba(255,255,255,0.2)",
        borderRadius: 10,
        overflow: "hidden"
      }}>
        <div style={{
          width: "60%",
          height: "100%",
          background: "#3B82F6",
          borderRadius: 10,
          transition: "width 1s linear"
        }} />
      </div>
    </div>
  );
}


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏳ loading duration (adjust if needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? <LoadingScreen /> : <ChatApp />}
    </ThemeProvider>
  );
}