import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => setDark((v) => !v);

  const t = dark
    ? {
        appBg: "linear-gradient(180deg,#2c2018 0%,#3a3028 15%,#4a4540 35%,#3d4a55 60%,#2a3a48 80%,#1e2e3a 100%)",
        sidebarBg: "rgba(30,32,38,0.72)",
        windowBg: "rgba(30,32,38,0.72)",
        windowBorder: "rgba(255,255,255,0.08)",
        cardBg: "rgba(42,44,52,0.85)",
        cardBorder: "rgba(255,255,255,0.08)",
        cardShadow: "none",
        userBubbleBg: "#3b72f0",
        inputBg: "rgba(42,44,52,0.7)",
        inputBorder: "rgba(255,255,255,0.1)",
        inputPlaceholder: "rgba(255,255,255,0.3)",
        sourcesBg: "rgba(30,32,38,0.88)",
        sourcesBorder: "rgba(255,255,255,0.08)",
        settingsBg: "rgba(28,30,36,0.97)",
        settingsBorder: "rgba(255,255,255,0.1)",
        settingsInputBg: "rgba(255,255,255,0.07)",
        settingsInputText: "rgba(255,255,255,0.4)",
        settingsInputBorder: "rgba(255,255,255,0.08)",
        chipBg: "rgba(42,44,52,0.8)",
        chipBorder: "rgba(255,255,255,0.15)",
        chipText: "rgba(255,255,255,0.65)",
        sourcesBtnBorder: "rgba(255,255,255,0.2)",
        sourcesBtnText: "rgba(255,255,255,0.92)",
        textPrimary: "rgba(255,255,255,0.92)",
        textSecondary: "rgba(255,255,255,0.72)",
        textMuted: "rgba(255,255,255,0.92)",
        textDisclaimer: "rgba(255,255,255,0.38)",
        iconColor: "rgba(255,255,255,0.92)",
        plusIconColor:"rgba(255,255,255,0.4)",
        iconBg: "rgba(255,255,255,0.08)",
        divider: "rgba(255,255,255,0.07)",
        scrollbarThumb: "rgba(255,255,255,0.18)",
        modalOverlay: "rgba(0,0,0,0.6)",
        modalBg: "#1e2026",
        modalBorder: "rgba(255,255,255,0.1)",
        modalCardBg: "rgba(42,44,52,0.9)",
        modalCardBorder: "rgba(255,255,255,0.08)",
        avatarBg: "rgba(255,255,255,0.12)",
        toggleOn: "#3b72f0",
        toggleOff: "rgba(255,255,255,0.15)",
      }
    : {
        appBg: "linear-gradient(180deg,#f0c8a0 0%,#e8d0c0 10%,#d8dce8 30%,#c8d8e8 50%,#d0dce8 70%,#c8d4e4 100%)",
        sidebarBg: "rgba(255,255,255,0.78)",
        windowBg: "rgba(255,255,255,0.62)",
        windowBorder: "rgba(255,255,255,0.5)",
        cardBg: "rgba(255,255,255,0.78)",
        cardBorder: "rgba(0,0,0,0.06)",
        cardShadow: "0 2px 16px rgba(0,0,0,0.06)",
        userBubbleBg: "#3b72f0",
        inputBg: "rgba(255,255,255,0.55)",
        inputBorder: "rgba(0,0,0,0.08)",
        inputPlaceholder: "rgba(0,0,0,0.3)",
        sourcesBg: "rgba(255,255,255,0.78)",
        sourcesBorder: "rgba(0,0,0,0.06)",
        settingsBg: "rgba(255,255,255,0.96)",
        settingsBorder: "rgba(0,0,0,0.1)",
        settingsInputBg: "rgba(0,0,0,0.05)",
        settingsInputText: "rgba(0,0,0,0.4)",
        settingsInputBorder: "rgba(0,0,0,0.08)",
        chipBg: "rgba(255,255,255,0.7)",
        chipBorder: "rgba(0,0,0,0.12)",
        chipText: "rgba(0,0,0,0.6)",
        sourcesBtnBorder: "rgba(0,0,0,0.2)",
        sourcesBtnText: "rgba(0,0,0,0.6)",
        textPrimary: "rgba(0,0,0,0.88)",
        textSecondary: "rgba(0,0,0,0.65)",
        textMuted: "rgba(0,0,0,0.38)",
        textDisclaimer: "rgba(0,0,0,0.4)",
        plusIconColor:"rgba(0,0,0,0.45)",
        iconColor: "rgba(0,0,0,0.45)",
        iconBg: "rgba(0,0,0,0.06)",
        divider: "rgba(0,0,0,0.07)",
        scrollbarThumb: "rgba(0,0,0,0.15)",
        modalOverlay: "rgba(0,0,0,0.4)",
        modalBg: "#ffffff",
        modalBorder: "rgba(0,0,0,0.1)",
        modalCardBg: "rgba(0,0,0,0.04)",
        modalCardBorder: "rgba(0,0,0,0.08)",
        avatarBg: "rgba(0,0,0,0.1)",
        toggleOn: "#3b72f0",
        toggleOff: "rgba(0,0,0,0.15)",
      };

  return (
    <ThemeContext.Provider value={{ dark, toggle, t }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
