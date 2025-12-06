import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax on images
            gsap.utils.toArray('.image-reveal-container').forEach((container: any) => {
                const img = container.querySelector('img');
                if (img) {
                    gsap.to(img, {
                        y: "10%", // Subtle parallax
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top bottom", 
                            end: "bottom top", 
                            scrub: true 
                        }
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="portfolio" ref={sectionRef} className="py-32 bg-charcoal relative clip-diagonal pb-48 border-t border-white/5">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Selected Works</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Curadoria de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">Obras</span></h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-4 text-gray-500 text-sm font-light">
                            <span>Explore a excelência</span>
                            <div className="w-20 h-[1px] bg-gray-800"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Case 1: Law/Corporate High End */}
                    <div className="group relative rounded-2xl overflow-hidden cursor-pointer image-reveal-container border border-white/5 hover:border-gold-500/50 transition-all duration-500 h-[550px] shadow-2xl">
                        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                            alt="Advocacia Premium" 
                            className="image-reveal-img h-[120%] w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                        />
                        
                        <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-8 h-[2px] bg-gold-500 mb-6 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-gold-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Advocacia & Lei</p>
                            <h3 className="text-2xl font-serif text-white mb-3">Ricardo & Associados</h3>
                            <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                                Landing page com autoridade visual. Tons escuros, serifa clássica e conversão focada em high-ticket.
                            </p>
                        </div>
                    </div>

                    {/* Case 2: Aesthetic Luxury */}
                    <div className="group relative rounded-2xl overflow-hidden cursor-pointer image-reveal-container border border-white/5 hover:border-gold-500/50 transition-all duration-500 h-[550px] shadow-2xl mt-0 md:mt-16"> 
                        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                            alt="Estética Luxo" 
                            className="image-reveal-img h-[120%] w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                        />
                         <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-8 h-[2px] bg-gold-500 mb-6 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-gold-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Saúde & Beleza</p>
                            <h3 className="text-2xl font-serif text-white mb-3">Lumina Aesthetics</h3>
                            <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                                Minimalismo bege e dourado. Foco na pureza da imagem e agendamento instantâneo.
                            </p>
                        </div>
                    </div>

                    {/* Case 3: Tech/SaaS */}
                    <div className="group relative rounded-2xl overflow-hidden cursor-pointer image-reveal-container border border-white/5 hover:border-gold-500/50 transition-all duration-500 h-[550px] shadow-2xl">
                        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                            alt="Tech Future" 
                            className="image-reveal-img h-[120%] w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-8 h-[2px] bg-gold-500 mb-6 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-gold-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">SaaS & Tech</p>
                            <h3 className="text-2xl font-serif text-white mb-3">NexFlow System</h3>
                            <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                                Design futurista, gradientes neon e glassmorphism. A face da tecnologia moderna.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;