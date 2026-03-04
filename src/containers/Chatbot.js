
import { useState, useRef, useCallback } from "react";

const MOCK_SOURCES = [
  { title: "Website", url: "https://website.com",        excerpt: "10 companies were found with ISO certification for cutting tools materials made of steel in Texas." },
  { title: "Website", url: "https://website.com",        excerpt: "10 companies were found with ISO certification for cutting tools materials made of steel in Texas." },
  { title: "Website", url: "https://websitelongurl....", excerpt: "10 companies were found with ISO certification for cutting tools materials made of steel in Texas." },
];

let _id = 0;
const uid = () => `msg_${++_id}_${Date.now()}`;

const MODELS = [
  { id: "ultra-light", label: "Ultra Light", sub: "Llama 3 8B Instruct" },
  { id: "light",       label: "Light",       sub: "Llama 3 8B Instruct" },
  { id: "mid",         label: "Mid",         sub: "Llama 3 8B Instruct" },
  { id: "high",        label: "High",        sub: "Llama 3 8B Instruct" },
];

export { MODELS };

export function useChatbot() {
  const [messages, setMessages] = useState([
    {
      id: uid(), role: "assistant",
      title: "ISO Certified Companies Cutting Tools Materials Made of Steel Near Me",
      content: "10 companies were found with ISO certification for cutting tools materials made of steel in Texas. The closest to the location you specified is company A and the furthest is company B. Companies C, D and E also manufacture equipment out of fiberglass.",
      sources: MOCK_SOURCES,
      timestamp: new Date(),
    },
    {
      id: uid(), role: "user",
      content: "ISO Certified Companies Cutting Tools Materials Made of Steel Near Me",
      files: [{ name: "File Name", type: "File" }],
      timestamp: new Date(),
    },
  ]);

  const [input, setInput]               = useState("");
  const [isLoading, setIsLoading]       = useState(false);
  const [deepThinking, setDeepThinking] = useState(false);
  const [searchWeb, setSearchWeb]       = useState(false);
  const [activeSources, setActiveSources] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [licenseKey, setLicenseKey]     = useState("");
  const [modelModalOpen, setModelModalOpen] = useState(false);
  const [selectedModel, setSelectedModel]   = useState("light");
  const [currentModel, setCurrentModel]     = useState("ultra-light");

  const abortRef = useRef(null);

  const sendMessage = useCallback(async (text, files = []) => {
    const trimmed = (text || input).trim();
    if (!trimmed && files.length === 0) return;

    const userMsg = {
      id: uid(), role: "user",
      content: trimmed,
      files: files.length > 0 ? files : undefined,
      timestamp: new Date(),
    };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setIsLoading(true);

    try {

      await new Promise((r) => setTimeout(r, 900));
      setMessages((p) => [...p, {
        id: uid(), role: "assistant",
        title: "Response to: " + trimmed.slice(0, 48),
        content: "10 companies were found with ISO certification for cutting tools materials made of steel in Texas. The closest to the location you specified is company A and the furthest is company B.",
        sources: MOCK_SOURCES,
        timestamp: new Date(),
      }]);
    } catch (err) {
      if (err.name !== "AbortError") {
        setMessages((p) => [...p, { id: uid(), role: "assistant", content: "Something went wrong. Please try again.", timestamp: new Date() }]);
      }
    } finally {
      setIsLoading(false);
    }
  }, [input]);

  const cancelRequest = useCallback(() => { abortRef.current?.abort(); setIsLoading(false); }, []);
  const clearChat     = useCallback(() => { setMessages([]); setActiveSources(null); }, []);

  const confirmModelUpdate = useCallback(() => {
    setCurrentModel(selectedModel);
    setModelModalOpen(false);
  }, [selectedModel]);

  const activeSourcesData = messages.find((m) => m.id === activeSources)?.sources ?? null;

  return {
    messages, input, setInput, isLoading, sendMessage, cancelRequest, clearChat,
    deepThinking, setDeepThinking, searchWeb, setSearchWeb,
    activeSources, setActiveSources, activeSourcesData,
    settingsOpen, setSettingsOpen, licenseKey, setLicenseKey,
    modelModalOpen, setModelModalOpen, selectedModel, setSelectedModel,
    currentModel, confirmModelUpdate,
  };
}
