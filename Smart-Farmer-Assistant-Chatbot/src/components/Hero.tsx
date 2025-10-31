import React from 'react';

interface HeroProps {
  onOpenChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6904466a8521017a84638402_1761887908359_cf90e30b.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
              Your AI Farm Advisor,
              <span className="text-green-400"> 24/7</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Get instant, personalized advice on crops, soil health, weather, and fertilizers powered by AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={onOpenChat}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Start Chatting Now
              </button>
              <button 
                onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
              >
                View Dashboard
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <p className="text-3xl font-bold text-green-400 mb-1">24/7</p>
                <p className="text-sm text-gray-200">AI Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <p className="text-3xl font-bold text-green-400 mb-1">12+</p>
                <p className="text-sm text-gray-200">Crop Types</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <p className="text-3xl font-bold text-green-400 mb-1">4</p>
                <p className="text-sm text-gray-200">Languages</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <p className="text-3xl font-bold text-green-400 mb-1">Real-time</p>
                <p className="text-sm text-gray-200">Data</p>
              </div>
            </div>
          </div>

          {/* Right Content - Chat Preview */}
          <div className="hidden lg:block animate-slideUp">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
                <h3 className="font-bold text-lg">AI Farm Advisor</h3>
                <p className="text-sm opacity-90">Online now</p>
              </div>
              <div className="p-6 space-y-4 h-96 overflow-hidden">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-3 max-w-xs">
                    <p className="text-sm text-gray-800">Hello! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-green-600 text-white rounded-2xl rounded-br-none px-4 py-3 max-w-xs">
                    <p className="text-sm">What crops should I plant this season?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-3 max-w-xs">
                    <p className="text-sm text-gray-800">Based on your location and soil type, I recommend Tomatoes, Wheat, or Rice...</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <button 
                  onClick={onOpenChat}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all"
                >
                  Try It Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
