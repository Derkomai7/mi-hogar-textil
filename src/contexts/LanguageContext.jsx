import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('mht_lang') || 'es';
    });

    useEffect(() => {
        localStorage.setItem('mht_lang', language);
    }, [language]);

    const translations = {
        es: {
            // Nav
            'nav.home': 'Inicio',
            'nav.catalog': 'Catálogo',
            'nav.login': 'Iniciar Sesión',

            // Categories
            'cat.cama': 'Cama',
            'cat.bano': 'Baño',
            'cat.salon': 'Salón',
            'cat.ropa': 'Ropa de Casa',

            // Home
            'home.hero.title': 'Elegancia que viste tu hogar',
            'home.hero.subtitle': 'Descubre nuestra nueva colección de textiles diseñados para el confort absoluto.',
            'home.hero.cta': 'Ver Nueva Colección',
            'home.collections.title': 'Nuestras Colecciones',
            'home.explore': 'Explorar',
            'home.bestsellers.title': 'Más Vendidos',
            'home.bestsellers.subtitle': 'Los favoritos de nuestros clientes',
            'home.view_all': 'Ver todo',

            // Values
            'value.quality.title': 'Calidad Premium',
            'value.quality.desc': 'Materiales seleccionados cuidadosamente para garantizar la máxima durabilidad y confort.',
            'value.secure.title': 'Pago Seguro',
            'value.secure.desc': 'Tus datos están protegidos con los estándares de seguridad más altos.',
            'value.shipping.title': 'Envío Rápido',
            'value.shipping.desc': 'Recibe tu pedido en 24/48 horas en toda la península.',

            // Product
            'product.add': 'Añadir a la cesta',
            'product.size': 'Tamaño',
            'product.color': 'Color',
            'product.related': 'También te podría gustar',
            'product.details': 'Detalles',

            // Cart
            'cart.title': 'Tu Cesta',
            'cart.empty': 'Tu cesta está vacía',
            'cart.checkout': 'Tramitar Pedido',
            'cart.subtotal': 'Subtotal',
            'cart.shipping_calc': 'Gastos de envío calculados en el checkout.',

            // Checkout
            'checkout.title': 'Tramitar Pedido',
            'checkout.step1': 'Dirección de Envío',
            'checkout.step2': 'Método de Pago',
            'checkout.summary': 'Resumen del Pedido',
            'checkout.total': 'Total',
            'checkout.pay': 'Pagar',
            'checkout.success.title': '¡Pedido Confirmado!',
            'checkout.success.desc': 'Gracias por tu compra. Te hemos enviado un email con los detalles del pedido.',
            'checkout.return': 'Volver al inicio',
            'checkout.empty': 'Tu cesta está vacía',
            'checkout.back_shop': 'Volver a la tienda',

            // Auth
            'auth.welcome': 'Bienvenido de nuevo',
            'auth.register_prompt': 'O regístrate si aún no tienes cuenta.',
            'auth.email': 'Email',
            'auth.password': 'Contraseña',
            'auth.login_btn': 'Iniciar Sesión',
            'auth.remember': 'Recordarme',
            'auth.forgot': '¿Olvidaste tu contraseña?',

            // Footer
            'footer.brand_desc': 'Vistiendo tu hogar con elegancia y confort desde 1990. Calidad premium en cada hilo.',
            'footer.about': 'Sobre Nosotros',
            'footer.legal': 'Legal',
            'footer.newsletter.title': 'Newsletter',
            'footer.newsletter.desc': 'Suscríbete para recibir novedades y ofertas exclusivas.',
            'footer.rights': 'Todos los derechos reservados.',
        },
        en: {
            // Nav
            'nav.home': 'Home',
            'nav.catalog': 'Shop',
            'nav.login': 'Login',

            // Categories
            'cat.cama': 'Bedding',
            'cat.bano': 'Bath',
            'cat.salon': 'Living',
            'cat.ropa': 'Loungewear',

            // Home
            'home.hero.title': 'Elegance for your home',
            'home.hero.subtitle': 'Discover our new collection of textiles designed for absolute comfort.',
            'home.hero.cta': 'View New Collection',
            'home.collections.title': 'Our Collections',
            'home.explore': 'Explore',
            'home.bestsellers.title': 'Best Sellers',
            'home.bestsellers.subtitle': 'Our customers favorites',
            'home.view_all': 'View all',

            // Values
            'value.quality.title': 'Premium Quality',
            'value.quality.desc': 'Materials carefully selected to ensure maximum durability and comfort.',
            'value.secure.title': 'Secure Payment',
            'value.secure.desc': 'Your data is protected with the highest security standards.',
            'value.shipping.title': 'Fast Shipping',
            'value.shipping.desc': 'Receive your order in 24/48 hours.',

            // Product
            'product.add': 'Add to Cart',
            'product.size': 'Size',
            'product.color': 'Color',
            'product.related': 'You might also like',
            'product.details': 'Details',

            // Cart
            'cart.title': 'Your Cart',
            'cart.empty': 'Your cart is empty',
            'cart.checkout': 'Checkout',
            'cart.subtotal': 'Subtotal',
            'cart.shipping_calc': 'Shipping calculated at checkout.',

            // Checkout
            'checkout.title': 'Checkout',
            'checkout.step1': 'Shipping Address',
            'checkout.step2': 'Payment Method',
            'checkout.summary': 'Order Summary',
            'checkout.total': 'Total',
            'checkout.pay': 'Pay',
            'checkout.success.title': 'Order Confirmed!',
            'checkout.success.desc': 'Thanks for your purchase. We sent you an email with the order details.',
            'checkout.return': 'Back to Home',
            'checkout.empty': 'Your cart is empty',
            'checkout.back_shop': 'Back to Shop',

            // Auth
            'auth.welcome': 'Welcome back',
            'auth.register_prompt': 'Or register if you don\'t have an account.',
            'auth.email': 'Email',
            'auth.password': 'Password',
            'auth.login_btn': 'Login',
            'auth.remember': 'Remember me',
            'auth.forgot': 'Forgot password?',

            // Footer
            'footer.brand_desc': 'Dressing your home with elegance and comfort since 1990. Premium quality in every thread.',
            'footer.about': 'About Us',
            'footer.legal': 'Legal',
            'footer.newsletter.title': 'Newsletter',
            'footer.newsletter.desc': 'Subscribe to receive news and exclusive offers.',
            'footer.rights': 'All rights reserved.',
        }
    };

    const t = (key) => {
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
