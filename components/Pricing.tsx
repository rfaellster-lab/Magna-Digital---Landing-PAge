import React from 'react';
import { getWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px]"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="glass-panel rounded-3xl p-1 border border-gold-500/50 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
                    <div className="bg-black/80 rounded-[20px] p-8 md:p-12 text-center relative overflow-hidden">
                        
                        <div className="absolute top-6 right-6">
                            <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg animate-pulse">
                                VAGAS RESTANTES: 03
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">O Pacote <span className="text-gold-500">Imperial</span></h2>
                        <p className="text-gray-400 mb-8">Tudo o que você precisa. Nada do que não precisa.</p>

                        <div className="flex justify-center items-end gap-4 mb-8">
                            <span className="text-gray-500 text-xl decoration-red-500 line-through decoration-2">R$ 1.299,00</span>
                            <div className="flex flex-col items-start">
                                <span className="text-6xl md:text-7xl font-serif font-bold text-white tracking-tighter">R$249<span className="text-2xl text-gold-500">,90</span></span>
                                <span className="text-xs text-gold-400 uppercase tracking-widest">Pagamento Único</span>
                            </div>
                        </div>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                        <ul className="text-left space-y-4 max-w-md mx-auto mb-10">
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-check-circle text-gold-500 mr-3 text-xl"></i>
                                <span>Landing Page de Alta Conversão (Single Page)</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-check-circle text-gold-500 mr-3 text-xl"></i>
                                <span>Domínio .com ou .com.br (1 Ano Grátis)</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-check-circle text-gold-500 mr-3 text-xl"></i>
                                <span>Copywriting Estratégico & Vendas</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-check-circle text-gold-500 mr-3 text-xl"></i>
                                <span>Integração WhatsApp & CRM</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-check-circle text-gold-500 mr-3 text-xl"></i>
                                <span>Certificado de Segurança SSL</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-mobile-alt text-gold-500 mr-3 text-xl pl-1"></i>
                                <span>100% Responsivo (Mobile First)</span>
                            </li>
                        </ul>

                        <a 
                            href={getWhatsAppLink(WA_MESSAGES.PRICING)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold text-xl py-5 rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all transform hover:scale-[1.02] active:scale-95"
                        >
                            REIVINDICAR MINHA AUTORIDADE
                        </a>
                        
                        <p className="mt-4 text-xs text-gray-500 flex justify-center items-center gap-2">
                            <i className="fas fa-lock"></i> Compra Segura & Garantia de 7 dias
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;