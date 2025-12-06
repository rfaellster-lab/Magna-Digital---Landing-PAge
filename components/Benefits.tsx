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
                            start: "top 85%",
                        },
                        y: 50,
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
        <section id="benefits" ref={sectionRef} className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">O Padrão <span className="text-gold-gradient">Ouro</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">O que o mercado cobra R$ 2.500,00, nós entregamos com mais qualidade através de nossa tecnologia proprietária.</p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    <div className="md:col-span-2 row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <i className="fas fa-paint-brush text-4xl text-gold-400 mb-6"></i>
                        <h3 className="text-2xl font-serif text-white mb-4">Design High-End Personalizado</h3>
                        <p className="text-gray-400 mb-6">Esqueça templates genéricos. Nossa IA adapta layouts baseados nos vencedores do Awwwards. Cada pixel é posicionado para transmitir autoridade e luxo.</p>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-center gap-2"><i className="fas fa-check text-gold-500"></i> Identidade Visual Coesa</li>
                            <li className="flex items-center gap-2"><i className="fas fa-check text-gold-500"></i> Tipografia Otimizada</li>
                            <li className="flex items-center gap-2"><i className="fas fa-check text-gold-500"></i> Imagens Licenciadas</li>
                        </ul>
                    </div>

                    <div className="glass-card rounded-2xl p-8 flex flex-col justify-center border-l-4 border-gold-500">
                        <i className="fas fa-globe text-3xl text-white mb-4"></i>
                        <h3 className="text-xl font-bold text-white">Domínio Grátis</h3>
                        <p className="text-sm text-gray-400 mt-2">Seu nome .com ou .com.br incluso por 1 ano. Sem taxas ocultas.</p>
                    </div>

                    <div className="glass-card rounded-2xl p-8 flex flex-col justify-center">
                        <i className="fas fa-rocket text-3xl text-white mb-4"></i>
                        <h3 className="text-xl font-bold text-white">Hospedagem Veloz</h3>
                        <p className="text-sm text-gray-400 mt-2">Servidores CDN globais. Carregamento em milissegundos.</p>
                    </div>

                    <div className="md:col-span-3 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/20 to-transparent opacity-50"></div>
                        <div className="flex-1 relative z-10">
                            <h3 className="text-2xl font-serif text-white mb-2">Copywriting Persuasivo Incluso</h3>
                            <p className="text-gray-400">Não escrevemos textos; escrevemos cartas de vendas. Usamos gatilhos mentais (Escassez, Autoridade, Prova Social) para transformar visitantes em clientes pagantes.</p>
                        </div>
                        <div className="flex-shrink-0 relative z-10">
                             <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                                <span className="text-gold-400 font-mono text-sm">Conversion_Rate: <span className="text-white">High</span></span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;