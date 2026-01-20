import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-primary">BELENGINES</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Vistiendo tu hogar con elegancia y confort desde 1990.
                            Calidad premium en cada hilo.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                {/* TikTok icon not in lucide defaults everywhere, using Twitter as placeholder or generic */}
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t('footer.about')}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-primary">Nuestra Historia</a></li>
                            <li><a href="#" className="hover:text-primary">Sostenibilidad</a></li>
                            <li><a href="#" className="hover:text-primary">Blog</a></li>
                            <li><a href="#" className="hover:text-primary">Trabaja con nosotros</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t('footer.legal')}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-primary">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-primary">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-primary">Política de Cookies</a></li>
                            <li><a href="#" className="hover:text-primary">Envíos y Devoluciones</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Newsletter</h4>
                        <p className="text-sm text-gray-500 mb-4">Suscríbete para recibir novedades y ofertas exclusivas.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="flex-1 min-w-0 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                            >
                                OK
                            </button>
                        </form>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} BELENGINES. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
