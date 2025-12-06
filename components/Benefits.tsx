import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current?.children;
            if (cards) {
                Array.from(cards).forEach((card, i) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                        },
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: "power2.out"
                    });
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="benefits" ref={sectionRef} className="py-32 relative bg-obsidian border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Excelência Técnica</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">O Padrão <span className="text-gold-gradient">Ouro</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        O que o mercado cobra R$ 2.500,00, nós entregamos com mais qualidade através de nossa tecnologia proprietária.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(250px,auto)]">
                    {/* Main Feature - Design */}
                    <div className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-10 relative overflow-hidden group hover:border-gold-500/20">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-600/10 transition-colors duration-500"></div>
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-gold-400 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fas fa-paint-brush text-2xl"></i>
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-4">Design High-End Personalizado</h3>
                                <p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed">
                                    Esqueça templates genéricos. Nossa IA adapta layouts baseados nos vencedores do Awwwards. Cada pixel é posicionado para transmitir autoridade.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                    <i className="fas fa-check-circle text-gold-500"></i> 
                                    <span className="text-sm text-gray-300">Identidade Visual Coesa</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                    <i className="fas fa-check-circle text-gold-500"></i> 
                                    <span className="text-sm text-gray-300">Tipografia Otimizada</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                    <i className="fas fa-check-circle text-gold-500"></i> 
                                    <span className="text-sm text-gray-300">Imagens Licenciadas</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature - Domain */}
                    <div className="glass-card rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-gold-500/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] transition-opacity opacity-0 group-hover:opacity-100"></div>
                        <i className="fas fa-globe text-3xl text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity"></i>
                        <h3 className="text-xl font-bold text-white mb-2">Domínio Grátis</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Seu nome .com ou .com.br incluso por 1 ano. Propriedade total sua.</p>
                    </div>

                    {/* Feature - Speed */}
                    <div className="glass-card rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-gold-500/20">
                         <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] transition-opacity opacity-0 group-hover:opacity-100"></div>
                        <i className="fas fa-rocket text-3xl text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity"></i>
                        <h3 className="text-xl font-bold text-white mb-2">Hospedagem Veloz</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Servidores CDN globais. Carregamento instantâneo para não perder clientes.</p>
                    </div>

                    {/* Feature - Copywriting */}
                    <div className="md:col-span-3 glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group hover:border-gold-500/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/10 via-transparent to-transparent opacity-50"></div>
                        
                        <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-[10px] font-bold uppercase tracking-wider">
                                    Neuromarketing
                                </span>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-4">Copywriting Persuasivo Incluso</h3>
                            <p className="text-gray-400 leading-relaxed max-w-2xl text-sm">
                                Não escrevemos textos; escrevemos cartas de vendas. Usamos gatilhos mentais (Escassez, Autoridade, Prova Social) para transformar visitantes frios em clientes apaixonados.
                            </p>
                        </div>
                        
                        <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
                             <div className="px-8 py-6 bg-black/40 border border-white/5 rounded-xl backdrop-blur-md flex flex-col items-center justify-center gap-2 group-hover:border-gold-500/20 transition-colors">
                                <span className="text-gold-400 font-mono text-3xl font-bold">+12%</span>
                                <span className="text-gray-500 text-xs uppercase tracking-widest">Taxa de Conversão</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;