import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Dashboard from './Dashboard';
import CropsSection from './CropsSection';
import KnowledgeBase from './KnowledgeBase';
import Footer from './Footer';
import ChatInterface from './ChatInterface';

const AppLayout: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenChat={() => setIsChatOpen(true)} />
      
      <main className="pt-16">
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        
        <div id="dashboard">
          <Dashboard />
        </div>
        
        <Features />
        
        <div id="crops">
          <CropsSection />
        </div>
        
        <div id="knowledge">
          <KnowledgeBase />
        </div>
      </main>
      
      <Footer />
      
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-2xl hover:from-green-700 hover:to-green-800 transition-all hover:scale-110 z-40 animate-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AppLayout;
