export const WHATSAPP_NUMBER = "5511980470203";

export const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const WA_MESSAGES = {
    NAVBAR: "Olá! Gostaria de solicitar um orçamento para o MagnaWeb.",
    HERO: "Olá! Quero garantir minha vaga na oferta Premium da MagnaWeb.",
    PRICING: "Olá! Estou pronto para reivindicar minha autoridade digital com o Pacote Imperial.",
    GENERAL: "Olá! Gostaria de mais informações sobre a MagnaWeb."
};