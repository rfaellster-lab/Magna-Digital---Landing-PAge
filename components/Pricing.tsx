import React from 'react';
import { getWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';
import MagneticWrapper from './MagneticWrapper';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-32 relative overflow-hidden flex items-center justify-center bg-obsidian border-t border-white/5">
             <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-[120px]"></div>

            <div className="max-w-4xl w-full mx-auto px-4 relative z-10">
                {/* Tech Card Container */}
                <div className="relative group perspective-1000">
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-gold-500/50 via-gold-500/10 to-gold-500/50 rounded-[22px] blur-sm opacity-50 group-hover:opacity-80 transition duration-700"></div>
                    
                    <div className="relative bg-[#080808] rounded-[20px] p-8 md:p-14 text-center border border-white/5 overflow-hidden backdrop-blur-xl">
                        
                        {/* Shimmer Effect overlay */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
                        
                        <div className="absolute top-8 right-8">
                            <div className="bg-red-950/40 border border-red-500/30 text-red-400 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                                </span>
                                3 VAGAS RESTANTES
                            </div>
                        </div>

                        <div className="mb-8">
                            <span className="text-gold-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">Oferta Exclusiva</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">Pacote <span className="text-gold-gradient">Imperial</span></h2>
                        </div>
                        
                        <div className="flex justify-center items-end gap-6 mb-12 py-8 border-y border-white/5 bg-white/[0.02]">
                             <div className="text-right pb-4">
                                 <p className="text-gray-600 text-sm font-medium line-through mb-0 decoration-red-900/50 decoration-2">De R$ 1.299</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-7xl md:text-9xl font-serif font-bold text-white tracking-tighter drop-shadow-[0_0_30px_rgba(212,175,55,0.15)] leading-none">
                                    <span className="text-2xl align-top text-gray-500 mr-1 font-sans font-light mt-4 inline-block">R$</span>249<span className="text-3xl text-gold-500 font-sans font-light">,90</span>
                                </span>
                                <span className="text-[10px] text-gold-500/60 uppercase tracking-[0.3em] mt-4 border border-gold-500/10 px-4 py-1.5 rounded-full bg-gold-500/5">Pagamento Único</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 text-left max-w-2xl mx-auto mb-14">
                            <li className="flex items-center text-gray-300 group/item">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 group-hover/item:bg-gold-500/20 transition-colors border border-gold-500/10">
                                    <i className="fas fa-check text-gold-500 text-[10px]"></i>
                                </div>
                                <span className="text-sm font-light">Landing Page High-End</span>
                            </li>
                            <li className="flex items-center text-gray-300 group/item">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 group-hover/item:bg-gold-500/20 transition-colors border border-gold-500/10">
                                    <i className="fas fa-check text-gold-500 text-[10px]"></i>
                                </div>
                                <span className="text-sm font-light">Domínio Incluso (1 Ano)</span>
                            </li>
                             <li className="flex items-center text-gray-300 group/item">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 group-hover/item:bg-gold-500/20 transition-colors border border-gold-500/10">
                                    <i className="fas fa-check text-gold-500 text-[10px]"></i>
                                </div>
                                <span className="text-sm font-light">Copywriting Persuasivo</span>
                            </li>
                             <li className="flex items-center text-gray-300 group/item">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 group-hover/item:bg-gold-500/20 transition-colors border border-gold-500/10">
                                    <i className="fas fa-check text-gold-500 text-[10px]"></i>
                                </div>
                                <span className="text-sm font-light">Hospedagem Premium</span>
                            </li>
                             <li className="flex items-center text-gray-300 group/item">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 group-hover/item:bg-gold-500/20 transition-colors border border-gold-500/10">
                                    <i className="fas fa-check text-gold-500 text-[10px]"></i>
                                </div>
                                <span className="text-sm font-light">Botão WhatsApp Flutuante</span>
                            </li>
                             <li className="flex items-center text-gray-300 group/item">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 group-hover/item:bg-gold-500/20 transition-colors border border-gold-500/10">
                                    <i className="fas fa-check text-gold-500 text-[10px]"></i>
                                </div>
                                <span className="text-sm font-light">Design Responsivo Mobile</span>
                            </li>
                        </div>

                        <MagneticWrapper>
                            <a 
                                href={getWhatsAppLink(WA_MESSAGES.PRICING)} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full block bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-extrabold text-xl py-6 rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all transform hover:scale-[1.01] active:scale-95 overflow-hidden group/btn"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    REIVINDICAR MINHA AUTORIDADE <i className="fas fa-arrow-right"></i>
                                </span>
                            </a>
                        </MagneticWrapper>
                        
                        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/5 pt-6">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <i className="fas fa-lock text-gold-500"></i> Ambiente 100% Seguro
                            </p>
                             <div className="flex gap-4 text-gray-600 text-2xl opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                                <i className="fab fa-cc-visa hover:text-white"></i>
                                <i className="fab fa-cc-mastercard hover:text-white"></i>
                                <i className="fab fa-pix hover:text-white"></i>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;