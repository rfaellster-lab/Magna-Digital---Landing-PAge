import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-24 bg-charcoal relative clip-diagonal pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-white">Curadoria de <span className="italic text-gold-500">Obras</span></h2>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-gray-500 text-sm">Drag to explore -&gt;</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&h=800" alt="Advocacia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <p className="text-gold-400 text-xs uppercase tracking-widest mb-2">Advocacia & Lei</p>
                            <h3 className="text-2xl font-serif text-white">Ricardo & Associados</h3>
                            <p className="text-gray-300 text-sm mt-2">Aumento de 200% em leads qualificados.</p>
                        </div>
                    </div>

                    <div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer mt-12 md:mt-0"> 
                        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&h=800" alt="Estética" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <p className="text-gold-400 text-xs uppercase tracking-widest mb-2">Saúde & Beleza</p>
                            <h3 className="text-2xl font-serif text-white">Lumina Aesthetics</h3>
                            <p className="text-gray-300 text-sm mt-2">Agenda lotada em 15 dias.</p>
                        </div>
                    </div>

                    <div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&h=800" alt="Tech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <p className="text-gold-400 text-xs uppercase tracking-widest mb-2">SaaS & Tech</p>
                            <h3 className="text-2xl font-serif text-white">NexFlow System</h3>
                            <p className="text-gray-300 text-sm mt-2">Design Dark Mode futurista.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;