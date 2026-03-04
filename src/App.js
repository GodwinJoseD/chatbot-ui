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
const [sidebarOpen, setSidebarOpen] = useState(false);
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
  width: sidebarOpen ? 280 : 52,
  flexShrink: 0,
  background: t.sidebarBg,
  padding: "10px 8px",
  position: "relative", zIndex: 2,
  display: "flex", flexDirection: "column",
  transition: "width 0.25s cubic-bezier(.25,.8,.25,1)",
  overflow: "hidden",
}}>
  <Sidebar
    onSettingsClick={() => bot.setSettingsOpen(!bot.settingsOpen)}
    panelOpen={sidebarOpen}
    setPanelOpen={setSidebarOpen}
  />
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
            setModelModalOpen={bot.setModelModalOpen}
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


function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 18;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      background: `url(${bg}) center/cover fixed`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <div style={{
        width: 920, height: 640,
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        background: "rgba(30, 30, 40, 0.55)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
      }}>

        <div style={{
          position: "absolute", top: 16, left: 16,
          display: "flex", gap: 7,
        }}>
          <div style={{ width: 13, height: 13, borderRadius: "50%"}} />
          <div style={{ width: 13, height: 13, borderRadius: "50%"}} />
          <div style={{ width: 13, height: 13, borderRadius: "50%" }} />
        </div>
        <div style={{
          animation: "floatRobot 3s ease-in-out infinite",
          marginBottom: 32,
        }}>
          <img
            src={robotLoadingImage}
            alt="Loading"
            style={{ width: 150, height: 150, objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
          />
        </div>
        <div style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.75)",
          letterSpacing: "0.04em",
          marginBottom: 16,
          fontWeight: 400,
        }}>
          Downloading Consciousness
        </div>

        <div style={{
          width: 220,
          height: 4,
          background: "rgba(255,255,255,0.12)",
          borderRadius: 99,
          overflow: "hidden",
        }}>
          <div style={{
            width: `${Math.min(progress, 100)}%`,
            height: "100%",
            background: "linear-gradient(90deg, #3B82F6, #60a5fa)",
            borderRadius: 99,
            transition: "width 0.15s ease",
            boxShadow: "0 0 10px rgba(59,130,246,0.6)",
          }} />
        </div>

        <style>{`
          @keyframes floatRobot {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
          }
        `}</style>
      </div>
    </div>
  );
}


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? <LoadingScreen /> : <ChatApp />}
    </ThemeProvider>
  );
}