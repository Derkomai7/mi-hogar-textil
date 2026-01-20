import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};

export const LanguageProvider = ({ children }) => {
    // Try to get from localStorage or default to 'es'
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('mht_lang') || 'es';
    });

    useEffect(() => {
        localStorage.setItem('mht_lang', language);
    }, [language]);

    const t = (key) => {
        // Simple translation map (expand as needed or move to a separate file)
        const translations = {
            es: {
                'nav.home': 'Inicio',
                'nav.catalog': 'Catálogo',
                'nav.search': 'Buscar...',
                'nav.login': 'Iniciar Sesión',
                'cart.title': 'Tu Cesta',
                'cart.empty': 'Tu cesta está vacía',
                'cart.checkout': 'Tramitar Pedido',
                'product.add': 'Añadir a la cesta',
                'footer.about': 'Sobre Nosotros',
                'footer.legal': 'Legal',
            },
            en: {
                'nav.home': 'Home',
                'nav.catalog': 'Shop',
                'nav.search': 'Search...',
                'nav.login': 'Login',
                'cart.title': 'Your Cart',
                'cart.empty': 'Your cart is empty',
                'cart.checkout': 'Checkout',
                'product.add': 'Add to Cart',
                'footer.about': 'About Us',
                'footer.legal': 'Legal',
            }
        };
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
