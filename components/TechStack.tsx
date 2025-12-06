import React from 'react';

const TechStack: React.FC = () => {
    return (
        <section className="py-10 border-y border-white/5 bg-black/50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">Tecnologia compatível com</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <i className="fab fa-google text-4xl hover:text-white transition-colors"></i>
                    <i className="fab fa-aws text-4xl hover:text-white transition-colors"></i>
                    <i className="fab fa-meta text-4xl hover:text-white transition-colors"></i>
                    <i className="fab fa-stripe text-4xl hover:text-white transition-colors"></i>
                    <i className="fab fa-wordpress text-4xl hover:text-white transition-colors"></i>
                </div>
            </div>
        </section>
    );
};

export default TechStack;