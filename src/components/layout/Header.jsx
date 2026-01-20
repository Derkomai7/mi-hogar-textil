import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { clsx } from 'clsx';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { totalItems, setCartOpen } = useCart();
    const { isAuthenticated, logout } = useAuth();
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-serif font-bold text-primary tracking-tight">
                        BELENGINES
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium text-primary hover:text-accent transition-colors uppercase tracking-wide">
                            {t('nav.home')}
                        </Link>
                        <Link to="/catalog" className="text-sm font-medium text-primary hover:text-accent transition-colors uppercase tracking-wide">
                            {t('nav.catalog')}
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-6">
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="text-sm font-medium text-primary hover:text-accent transition-colors"
                        >
                            {language === 'es' ? 'EN' : 'ES'}
                        </button>

                        {/* Account */}
                        {isAuthenticated ? (
                            <button onClick={logout} className="hidden md:block text-sm font-medium text-primary hover:text-accent">
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" className="text-primary hover:text-accent">
                                <User size={20} />
                            </Link>
                        )}

                        {/* Cart */}
                        <button
                            className="relative text-primary hover:text-accent transition-colors"
                            onClick={() => setCartOpen(true)}
                        >
                            <ShoppingBag size={20} />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={clsx(
                "fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden pt-24 px-6",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <nav className="flex flex-col space-y-6">
                    <Link to="/" className="text-xl font-serif text-primary">
                        {t('nav.home')}
                    </Link>
                    <Link to="/catalog" className="text-xl font-serif text-primary">
                        {t('nav.catalog')}
                    </Link>
                    {isAuthenticated ? (
                        <button onClick={logout} className="text-left text-xl font-serif text-primary">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="text-xl font-serif text-primary">
                            {t('nav.login')}
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};
