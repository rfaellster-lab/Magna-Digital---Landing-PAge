import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(4 * 60 * 60); // 4 hours in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) return 4 * 60 * 60; // Reset loop
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        
        const pad = (n: number) => n.toString().padStart(2, '0');
        return `${pad(h)}:${pad(m)}:${pad(s)}`;
    };

    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <span className="font-serif text-3xl font-bold text-white tracking-widest">MAGNA</span>
                        <p className="text-gray-500 text-sm mt-2 max-w-xs">Elevando o padrão da web, um pixel de cada vez.</p>
                    </div>
                    
                    <div className="bg-white/5 border border-gold-500/30 px-6 py-4 rounded-lg flex flex-col items-center">
                        <span className="text-xs text-gold-400 uppercase tracking-widest mb-1">A oferta expira em</span>
                        <div className="text-2xl font-mono text-white" id="countdown">
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2024 Magna Digital. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold-500 transition-colors">Termos</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Suporte</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;