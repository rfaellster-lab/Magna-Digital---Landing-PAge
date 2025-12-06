import React from 'react';

// Use a variable for the custom element to bypass TypeScript IntrinsicElements check
const ImgComparisonSlider = 'img-comparison-slider' as any;

const BeforeAfter: React.FC = () => {
    return (
        <section className="py-24 relative bg-black">
            <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Transformação Digital</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">A Evolução do <span className="text-gold-gradient">Padrão</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Veja a diferença brutal entre um site comum e uma plataforma projetada para autoridade máxima.
                    </p>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-gold-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] mx-auto max-w-5xl aspect-[16/9] group">
                    <ImgComparisonSlider className="focus:outline-none w-full h-full">
                        <img 
                            slot="first" 
                            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1776&auto=format&fit=crop" 
                            alt="Site Comum Antigo" 
                            className="w-full h-full object-cover grayscale opacity-50"
                        />
                        <div slot="second" className="w-full h-full relative">
                            <img 
                                src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1770&auto=format&fit=crop" 
                                alt="Site MagnaWeb Luxury" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 right-8 text-right">
                                <h4 className="text-white font-serif text-2xl">Magna Private</h4>
                                <p className="text-gold-400 text-sm">Ultra High-End Design</p>
                            </div>
                        </div>
                        <div slot="handle" className="w-12 h-12 rounded-full bg-black border-2 border-gold-500 flex items-center justify-center text-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.6)] cursor-grab active:cursor-grabbing">
                            <i className="fas fa-arrows-alt-h text-lg"></i>
                        </div>
                    </ImgComparisonSlider>
                    
                    <div className="absolute top-6 left-6 bg-black/80 backdrop-blur px-4 py-2 rounded border border-white/10 text-gray-400 text-xs font-bold uppercase pointer-events-none">
                        Padrão Mercado
                    </div>
                    <div className="absolute top-6 right-6 bg-gold-600/20 backdrop-blur px-4 py-2 rounded border border-gold-500/50 text-gold-400 text-xs font-bold uppercase pointer-events-none shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        Padrão Elite
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;