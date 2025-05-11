import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2959226/pexels-photo-2959226.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Runners at sunrise in Pune" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Run Together.<br />Grow Stronger.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          StrideTribe is Pune's most passionate running community. Join the movement.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#signup"
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors transform hover:scale-105 transition-transform duration-200"
          >
            Sign Up For The Next Run
          </a>
          
          <a
            href="https://chat.whatsapp.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <MessageCircle size={20} className="mr-2" />
            Join WhatsApp Group
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;