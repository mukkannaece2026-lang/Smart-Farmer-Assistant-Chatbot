import React, { useState } from 'react';

interface HeaderProps {
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenChat }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">Smart Farmer AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
            <a href="#dashboard" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Dashboard</a>
            <a href="#crops" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Crops</a>
            <a href="#knowledge" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Knowledge</a>
            <button 
              onClick={onOpenChat}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
            >
              Chat Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fadeIn">
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">Home</a>
              <a href="#dashboard" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">Dashboard</a>
              <a href="#crops" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">Crops</a>
              <a href="#knowledge" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">Knowledge</a>
              <button 
                onClick={onOpenChat}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all mt-2"
              >
                Chat Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
