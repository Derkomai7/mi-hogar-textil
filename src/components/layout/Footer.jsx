import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-stone-100 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-primary">BELENGINES</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {t('footer.brand_desc')}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif font-bold text-primary mb-6">{t('home.collections.title')}</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/catalog?category=cama" className="hover:text-accent transition-colors">{t('cat.cama')}</Link></li>
                            <li><Link to="/catalog?category=bano" className="hover:text-accent transition-colors">{t('cat.bano')}</Link></li>
                            <li><Link to="/catalog?category=salon" className="hover:text-accent transition-colors">{t('cat.salon')}</Link></li>
                            <li><Link to="/catalog?category=ropa" className="hover:text-accent transition-colors">{t('cat.ropa')}</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-serif font-bold text-primary mb-6">{t('footer.about')}</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="#" className="hover:text-accent transition-colors">{t('footer.about')}</Link></li>
                            <li><Link to="#" className="hover:text-accent transition-colors">Contact</Link></li>
                            <li><Link to="#" className="hover:text-accent transition-colors">FAQ</Link></li>
                            <li><Link to="#" className="hover:text-accent transition-colors">{t('footer.legal')}</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif font-bold text-primary mb-6">{t('footer.newsletter.title')}</h4>
                        <p className="text-sm text-gray-500 mb-4">
                            {t('footer.newsletter.desc')}
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-white border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-accent rounded-sm"
                            />
                            <button className="bg-primary text-white p-2 hover:bg-secondary transition-colors rounded-sm">
                                <Mail size={18} />
                            </button>
                        </form>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} BELENGINES. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};
