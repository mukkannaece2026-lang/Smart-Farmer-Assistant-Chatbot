import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your Smart Farmer Assistant. How can I help you today?", isUser: false, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('English');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    'Crop Advice',
    'Soil Test',
    'Weather Forecast',
    'Fertilizer Guide'
  ];

  const getBotResponse = (userMsg: string): string => {
    const msg = userMsg.toLowerCase();
    if (msg.includes('crop') || msg.includes('plant')) {
      return "Based on your location and current season, I recommend Tomatoes, Wheat, or Rice. These crops are well-suited for your soil type. Would you like detailed planting instructions?";
    } else if (msg.includes('soil')) {
      return "Your soil pH is 6.5 (slightly acidic) with moderate nitrogen levels. I recommend adding organic compost and testing again in 2 weeks. Would you like fertilizer recommendations?";
    } else if (msg.includes('weather')) {
      return "Today: Partly cloudy, 28°C, 65% humidity. Rain expected in 3 days (15mm). Good conditions for irrigation. Next 7 days look favorable for most crops.";
    } else if (msg.includes('fertilizer')) {
      return "For your current crops, I suggest NPK 10-26-26 at 50kg/acre. Apply during early growth stage. Organic alternatives: Vermicompost (2 tons/acre) or Neem cake (200kg/acre).";
    }
    return "I can help with crop selection, soil health, weather updates, and fertilizer recommendations. What would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMsg: Message = {
      text: input,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(input),
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    handleSend();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">AI Farm Advisor</h2>
            <p className="text-sm opacity-90">Online - Instant responses</p>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white bg-opacity-20 rounded-lg px-3 py-1 text-sm"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Telugu</option>
            </select>
            <button onClick={onClose} className="text-2xl hover:bg-white hover:bg-opacity-20 rounded-lg w-8 h-8">×</button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} timestamp={msg.timestamp} />
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 rounded-bl-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 bg-white border-t flex gap-2 overflow-x-auto">
          {quickActions.map((action) => (
            <button
              key={action}
              onClick={() => handleQuickAction(action)}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors whitespace-nowrap"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t rounded-b-2xl">
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about farming..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg px-6 py-2 font-medium hover:from-green-700 hover:to-green-800 transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
