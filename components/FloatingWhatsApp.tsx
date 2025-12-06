import React from 'react';
import { getWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

const FloatingWhatsApp: React.FC = () => {
    return (
        <a 
            href={getWhatsAppLink(WA_MESSAGES.FLOATING)}
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group magnetic-btn"
            aria-label="Falar com Especialista"
        >
            <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300">
                <i className="fab fa-whatsapp text-white text-3xl"></i>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center animate-bounce">
                    <span className="text-[10px] font-bold text-white">1</span>
                </div>
            </div>
            <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                Falar com Especialista
            </div>
        </a>
    );
};

export default FloatingWhatsApp;