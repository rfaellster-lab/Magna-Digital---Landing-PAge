import React, { useState, useRef } from 'react';
import gsap from 'gsap';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            gsap.fromTo(contentRef.current, 
                { height: 0, opacity: 0 }, 
                { height: 'auto', opacity: 1, duration: 0.3 }
            );
        } else {
             // Optional: Animate close if needed, but simple conditional rendering handles it well or standard css transition
        }
    };

    return (
        <div className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
            <button 
                onClick={toggleOpen}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
                <span className="font-medium text-white">{question}</span>
                <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'} text-gold-500 transition-transform`}></i>
            </button>
            {isOpen && (
                <div ref={contentRef} className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ: React.FC = () => {
    return (
        <section className="py-20 bg-charcoal">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-serif text-white mb-10 text-center">Perguntas da <span className="text-gold-500">Elite</span></h2>
                
                <div className="space-y-4">
                    <FAQItem 
                        question="Como conseguem esse preço (R$ 249,90)?" 
                        answer='Nossa "mágica" é a eficiência. Desenvolvemos uma tecnologia proprietária baseada em IA que automatiza 90% do processo de codificação braçal. O que um desenvolvedor leva 20 horas, fazemos em 2. Repassamos essa economia para você para ganhar no volume e na construção de nossa marca.' 
                    />
                    <FAQItem 
                        question="O domínio é meu mesmo?" 
                        answer="Absolutamente. Registramos o domínio em seu nome/CPF. Você tem total propriedade intelectual e administrativa sobre ele." 
                    />
                    <FAQItem 
                        question="Qual o prazo de entrega?" 
                        answer="Após o preenchimento do briefing, entregamos a primeira versão em até 3 dias úteis. A velocidade é um dos nossos pilares de luxo." 
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;