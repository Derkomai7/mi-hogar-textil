import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import clsx from 'clsx';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { cartCount, setIsCartOpen } = useCart();
    const { user } = useAuth();
    const { t, language, toggleLanguage } = useLanguage();
    const location = useLocation();

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
    }, [location.pathname]);

    return (
        <header
            className={clsx(
                'fixed w-full z-50 transition-all duration-300 border-b',
                isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-200 py-2 shadow-sm' : 'bg-white border-transparent py-4'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 -ml-2 text-gray-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-serif font-bold text-primary tracking-tight">
                        Mi Hogar <span className="text-accent">Textil</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary uppercase tracking-wide">
                            {t('nav.home')}
                        </Link>
                        <Link to="/catalog" className="text-sm font-medium text-gray-700 hover:text-primary uppercase tracking-wide">
                            {t('nav.catalog')}
                        </Link>
                        <Link to="/category/cama" className="text-sm font-medium text-gray-500 hover:text-primary">
                            {t('Cama')}
                        </Link>
                        <Link to="/category/bano" className="text-sm font-medium text-gray-500 hover:text-primary">
                            {t('Baño')}
                        </Link>
                        <Link to="/category/salon" className="text-sm font-medium text-gray-500 hover:text-primary">
                            {t('Salón')}
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">

                        {/* Search (Icon only for now) */}
                        <button className="p-2 text-gray-500 hover:text-primary hidden sm:block">
                            <Search size={20} />
                        </button>

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-primary"
                        >
                            <Globe size={18} />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        {/* User */}
                        <Link to="/login" className="p-2 text-gray-500 hover:text-primary">
                            <User size={20} className={clsx(user && 'fill-current text-primary')} />
                        </Link>

                        {/* Favorites (hidden on mobile small) */}
                        <button className="p-2 text-gray-500 hover:text-primary hidden sm:block">
                            <Heart size={20} />
                        </button>

                        {/* Cart */}
                        <button
                            className="relative p-2 text-gray-500 hover:text-primary"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
                    <Link to="/" className="text-base font-medium text-gray-900 border-b border-gray-50 pb-2">
                        {t('nav.home')}
                    </Link>
                    <Link to="/catalog" className="text-base font-medium text-gray-900 border-b border-gray-50 pb-2">
                        {t('nav.catalog')}
                    </Link>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <Link to="/category/cama" className="text-sm text-gray-600">Cama</Link>
                        <Link to="/category/bano" className="text-sm text-gray-600">Baño</Link>
                        <Link to="/category/salon" className="text-sm text-gray-600">Salón</Link>
                        <Link to="/category/ropa" className="text-sm text-gray-600">Ropa</Link>
                    </div>
                </div>
            )}
        </header>
    );
};
