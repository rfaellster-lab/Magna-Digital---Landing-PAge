import React, { useEffect, useState } from 'react';

const names = ["Ricardo M.", "Ana Paula S.", "TechSolutions Ltda", "Dr. Fernando C.", "Marcos V.", "Júlia B.", "Agência Volt"];
const cities = ["São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte", "Porto Alegre", "Brasília", "Campinas"];

const SocialProof: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({ name: '', city: '' });

    useEffect(() => {
        const showNotification = () => {
            const name = names[Math.floor(Math.random() * names.length)];
            const city = cities[Math.floor(Math.random() * cities.length)];
            setData({ name, city });
            setVisible(true);

            setTimeout(() => {
                setVisible(false);
            }, 5000); // Hide after 5 seconds
        };

        // Initial delay
        const initialTimeout = setTimeout(() => {
            showNotification();
        }, 5000);

        // Loop
        const interval = setInterval(() => {
            showNotification();
        }, Math.random() * (45000 - 15000) + 15000); // Random between 15s and 45s

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div 
            className={`fixed bottom-24 left-6 bg-white/10 backdrop-blur-md border border-gold-500/30 p-4 rounded-lg shadow-2xl z-40 flex items-center gap-4 transition-all duration-500 transform ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
            }`}
        >
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                <i className="fas fa-check"></i>
            </div>
            <div>
                <p className="text-xs text-gold-400 font-bold">NOVA ADESÃO</p>
                <p className="text-sm text-white font-medium">{data.name} de {data.city}</p>
                <p className="text-xs text-gray-400">Acabou de garantir o plano.</p>
            </div>
        </div>
    );
};

export default SocialProof;