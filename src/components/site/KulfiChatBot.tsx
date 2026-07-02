import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Volume2, VolumeX, Loader2, ExternalLink } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  audioBase64?: string | null;
  whatsappUrl?: string | null;
};

export default function KulfiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial greeting when opened for the first time
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: language === "en" 
            ? "Hi! I'm Kulfi Sakhi AI 💛 I can help you explore our menu, check offers, or plan party/catering orders. How can I help you today?"
            : "Namaste! Main Kulfi Sakhi AI hoon 💛 Main aapko menu, offers aur party/catering ke liye help kar sakti hoon. Kahiye, main aapki kya madad karoon?",
        }
      ]);
    }
  }, [isOpen, language, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const playAudio = (base64Data: string) => {
    if (!voiceEnabled) return;
    try {
      const audio = new Audio(`data:audio/mp3;base64,${base64Data}`);
      audio.play();
    } catch (e) {
      console.error("Failed to play audio", e);
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          language: language,
          history: messages.map(m => ({ role: m.role, content: m.content })),
          enable_tts: voiceEnabled
        }),
      });

      if (!response.ok) throw new Error("API failed");
      
      const data = await response.json();
      
      const assistantMsg: Message = {
        role: "assistant",
        content: data.reply,
        audioBase64: data.audio_base64,
        whatsappUrl: data.whatsapp_url,
      };
      
      setMessages((prev) => [...prev, assistantMsg]);
      
      if (data.audio_base64 && voiceEnabled) {
        playAudio(data.audio_base64);
      }
      
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Sorry, I'm having a little trouble right now. Please try again or contact us on WhatsApp."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex w-[350px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/20">
                  <img src="/cb-avatar.jpg" alt="Kulfi Sakhi AI" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Kulfi+Sakhi&background=ffffff&color=000000'; }} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight">Kulfi Sakhi AI</h3>
                  <p className="text-xs text-primary-foreground/80">Online & ready to help 🍦</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className="rounded-full p-1.5 hover:bg-white/20 transition-colors"
                  title={voiceEnabled ? "Mute voice" : "Enable voice"}
                >
                  {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex border-b border-border bg-secondary/30 p-2">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${language === "en" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-background/50"}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`flex-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${language === "hi" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-background/50"}`}
              >
                हिन्दी
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex h-[350px] flex-col gap-4 overflow-y-auto p-4 scrollbar-thin">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-none" : "bg-secondary text-secondary-foreground rounded-bl-none"}`}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    {msg.role === "assistant" && msg.audioBase64 && (
                      <button onClick={() => playAudio(msg.audioBase64!)} className="mt-2 flex items-center gap-1 text-xs opacity-70 hover:opacity-100">
                        <Volume2 className="h-3 w-3" /> Replay voice
                      </button>
                    )}
                    {msg.role === "assistant" && msg.whatsappUrl && (
                      <a href={msg.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-green-500 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-green-600">
                        Contact on WhatsApp <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] items-center gap-2 rounded-2xl rounded-bl-none bg-secondary px-4 py-2.5 text-sm text-secondary-foreground">
                    <Loader2 className="h-4 w-4 animate-spin opacity-50" />
                    <span className="opacity-70">Sakhi is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && !isLoading && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {["Bestsellers", "Today's Offers", "Party Order", "Under ₹100"].map((text) => (
                  <button
                    key={text}
                    onClick={() => handleQuickReply(text)}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Sakhi something..."
                className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
        aria-label="Open Kulfi Sakhi AI Chatbot"
      >
        <div className="absolute -inset-1 rounded-full bg-primary/20 animate-ping group-hover:hidden" />
        {isOpen ? <X className="h-6 w-6" /> : (
            <div className="h-full w-full overflow-hidden rounded-full p-0.5">
                <img src="/cb-avatar.jpg" alt="AI Assistant" className="h-full w-full rounded-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=KS&background=ffffff&color=000000'; }} />
            </div>
        )}
      </button>
    </div>
  );
}
