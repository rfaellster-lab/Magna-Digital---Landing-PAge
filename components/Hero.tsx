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
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out"
            })
            .from(imageRef.current, {
                x: 60,
                opacity: 0,
                duration: 1.4,
                ease: "power3.out"
            }, "-=1.0");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:py-0">
            {/* Rich detailed background */}
            <div className="absolute inset-0 bg-tech-grid opacity-20 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0 pointer-events-none"></div>
            
            {/* Ambient Lighting - Refined */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                 <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gold-600/10 rounded-full blur-[150px]"></div>
                 <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                
                {/* Text Content - Fixed Mobile Z-Index and Spacing */}
                <div ref={textRef} className="gsap-hero-text relative z-20 order-1">
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-400/20 rounded-full bg-gold-400/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                        </span>
                        <span className="text-gold-200 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">Oferta Premium Limitada</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8 text-white tracking-tight">
                        Sua Presença <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-400 to-gold-600 italic">Elevada à Elite.</span>
                    </h1>
                    
                    {/* Background protection for mobile readability */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-black/40 blur-xl lg:hidden -z-10 rounded-full"></div>
                        <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-lg font-light border-l border-gold-500/30 pl-6">
                            Construímos impérios digitais com tecnologia proprietária e design de luxo. Design premiado, copy persuasiva e domínio incluso. <strong className="text-white font-medium">Implementado em tempo recorde.</strong>
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                        <a 
                            href={getWhatsAppLink(WA_MESSAGES.HERO)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gradient-to-br from-gold-500 to-gold-700 text-black font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center border border-white/10"
                        >
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                            <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                GARANTIR MINHA VAGA <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-sm"></i>
                            </span>
                        </a>
                        <a href="#portfolio" className="px-8 py-4 bg-white/5 border border-white/5 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center rounded-lg hover:border-gold-500/30 group">
                            Ver Obras Primas
                        </a>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-6 text-sm text-gray-500 border-t border-white/5 pt-6">
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Cliente" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Cliente" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="Cliente" />
                        </div>
                        <div>
                            <p className="text-white font-bold tracking-wide">5.0/5.0</p>
                            <div className="flex text-gold-400 text-[10px] gap-0.5">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                        </div>
                        <p className="text-gray-600 text-xs ml-auto uppercase tracking-wider">+500 Projetos</p>
                    </div>
                </div>

                {/* Hero Image - Fixed Layout Collapsing */}
                <div ref={imageRef} className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center perspective-1000 gsap-hero-image order-2 mt-10 lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 to-transparent rounded-full blur-[80px]"></div>
                    
                    <div className="relative w-full max-w-[450px] aspect-[4/5] glass-panel rounded-2xl transform rotate-y-6 lg:rotate-y-12 rotate-x-6 shadow-2xl overflow-hidden border border-white/10 group bg-black transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
                        {/* High Tech Dashboard Mockup */}
                        <img src="https://images.unsplash.com/photo-1642132652859-3ef5a9290aa8?q=80&w=2060&auto=format&fit=crop" alt="Dashboard Elite" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        
                        {/* Floating UI Elements */}
                        <div className="absolute -right-6 lg:-right-12 top-20 bg-black/80 backdrop-blur-xl border border-gold-500/20 p-5 rounded-xl shadow-2xl animate-float z-20 w-56 lg:w-64">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-gray-400 text-[10px] uppercase tracking-wider">Performance</span>
                                <span className="text-green-400 text-xs font-bold font-mono">+124%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gold-500 w-[85%] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                            </div>
                        </div>

                        <div className="absolute -left-6 lg:-left-12 bottom-32 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float-delayed z-20 flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 border border-gold-500/20">
                                <i className="fas fa-gem text-lg"></i>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Status</p>
                                <p className="text-white font-serif text-lg tracking-wide">Elite Tier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-scroll"></div>
            </div>
        </section>
    );
};

export default Hero;