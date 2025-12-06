import React, { useEffect, useState } from 'react';
import { getWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${
                scrolled ? 'bg-black/90 glass-panel' : 'glass-panel'
            }`} 
            id="navbar"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <span className="font-serif text-2xl font-bold text-gold-gradient tracking-widest">
                            MAGNA<span className="text-white text-xs block font-sans tracking-[0.3em] font-light">DIGITAL</span>
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#benefits" className="text-gray-300 hover:text-gold-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Diferenciais</a>
                            <a href="#portfolio" className="text-gray-300 hover:text-gold-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfólio</a>
                            <a href="#pricing" className="text-gray-300 hover:text-gold-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Investimento</a>
                            <a 
                                href={getWhatsAppLink(WA_MESSAGES.NAVBAR)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gold-500 hover:bg-gold-300 text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                            >
                                SOLICITAR AGORA
                            </a>
                        </div>
                    </div>
                    {/* Mobile menu button could go here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;