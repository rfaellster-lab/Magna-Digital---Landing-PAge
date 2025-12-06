import React, { useEffect, useState } from 'react';
import { getWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

const ExitIntentModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY < 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasTriggered]);

    const closeModal = () => setIsVisible(false);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-[#1a1a1a] border border-gold-500/50 p-8 rounded-2xl max-w-lg text-center relative transform scale-100 animate-[scaleUp_0.3s_ease-out] shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <button 
                    onClick={closeModal} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>
                
                <div className="mb-6 inline-block p-3 bg-red-500/10 rounded-full">
                     <i className="fas fa-exclamation-triangle text-3xl text-red-500"></i>
                </div>

                <h3 className="text-2xl font-serif text-white mb-4">Espere! Não perca sua vaga.</h3>
                <p className="text-gray-400 mb-6">
                    Restam apenas <span className="text-gold-500 font-bold">2 vagas</span> com o valor promocional de R$ 249,90. Amanhã o preço volta para R$ 1.299.
                </p>
                
                <a 
                    href={getWhatsAppLink(WA_MESSAGES.PRICING)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gold-500 hover:bg-gold-300 text-black font-bold py-3 rounded-lg transition-all transform hover:scale-105"
                >
                    QUERO APROVEITAR AGORA
                </a>
                
                <p className="mt-4 text-xs text-gray-500">
                    *Aplicamos efeitos de neuro-design neste projeto. Seu cliente não vai apenas ver seu site, ele vai senti-lo.
                </p>
            </div>
        </div>
    );
};

export default ExitIntentModal;