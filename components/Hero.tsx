import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { getWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            
            tl.from(textRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            })
            .from(imageRef.current, {
                x: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.8");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div ref={textRef} className="gsap-hero-text">
                    <div className="inline-block px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/5 backdrop-blur-sm mb-6">
                        <span className="text-gold-300 text-xs font-bold tracking-widest uppercase">Oferta Premium Limitada</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                        Sua Presença <br />
                        <span className="text-gold-gradient italic">Elevada à Elite.</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg font-light">
                        Não vendemos apenas sites. Construímos impérios digitais. Design premiado, copy persuasiva e domínio incluso. Tudo implementado em tempo recorde.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                            href={getWhatsAppLink(WA_MESSAGES.HERO)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gold-500 text-black font-bold text-lg rounded-none overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-pulse-gold flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                GARANTIR MINHA VAGA <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                        <a href="#portfolio" className="px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-all backdrop-blur-sm flex items-center justify-center">
                            Ver Obras Primas
                        </a>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex -space-x-2">
                            <img className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Cliente" />
                            <img className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Cliente" />
                            <img className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="Cliente" />
                        </div>
                        <p>+500 Projetos Entregues</p>
                    </div>
                </div>

                <div ref={imageRef} className="relative h-[600px] w-full flex items-center justify-center perspective-1000 gsap-hero-image">
                    <div className="absolute w-[400px] h-[400px] border border-gold-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                    
                    <div className="relative w-full max-w-md aspect-[4/3] glass-panel rounded-xl transform rotate-y-12 rotate-x-6 shadow-2xl overflow-hidden border border-white/10 group">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        
                        <div className="absolute -right-8 top-10 bg-black/80 backdrop-blur-md border border-gold-500/30 p-4 rounded-lg shadow-xl animate-float z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Conversão</p>
                                    <p className="text-white font-bold">+ 340%</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -left-8 bottom-20 bg-black/80 backdrop-blur-md border border-gold-500/30 p-4 rounded-lg shadow-xl animate-float-delayed z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                                    <i className="fas fa-crown"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Status</p>
                                    <p className="text-white font-bold">Premium</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;