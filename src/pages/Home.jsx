import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import { categories, products } from '../data/products';
import { ShieldCheck, Truck, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Home = () => {
    const { t, language } = useLanguage();

    // Get Best Sellers
    const bestSellers = products.filter(p => p.bestseller).slice(0, 4);

    return (
        <div className="animate-fade-in">

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
                        alt="Hero Bedding"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                        {t('home.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        {t('home.hero.subtitle')}
                    </p>
                    <div className="pt-8 flex justify-center gap-4">
                        <Link to="/catalog">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 border-none font-medium px-8 py-4 text-lg shadow-xl">
                                {t('home.hero.cta')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h2 className="text-3xl font-serif font-bold text-center mb-16 text-primary">{t('home.collections.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <Link key={cat.id} to={`/catalog?category=${cat.id}`} className="group relative h-96 overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                            <img
                                src={cat.image}
                                alt={cat[`label_${language}`]}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <h3 className="text-2xl font-serif font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {cat[`label_${language}`]}
                                </h3>
                                <span className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 border-b border-white pb-1">
                                    {t('home.explore')}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Best Sellers */}
            <section className="bg-stone-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-2">{t('home.bestsellers.title')}</h2>
                            <p className="text-secondary">{t('home.bestsellers.subtitle')}</p>
                        </div>
                        <Link to="/catalog" className="hidden md:block text-primary font-medium hover:text-accent transition-colors border-b border-primary hover:border-accent pb-0.5">
                            {t('home.view_all')}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/catalog">
                            <Button variant="outline">{t('home.view_all')}</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4 px-4">
                        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                            <Star className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary">{t('value.quality.title')}</h3>
                        <p className="text-secondary leading-relaxed">
                            {t('value.quality.desc')}
                        </p>
                    </div>
                    <div className="space-y-4 px-4 border-l-0 md:border-l border-r-0 md:border-r border-gray-100">
                        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary">{t('value.secure.title')}</h3>
                        <p className="text-secondary leading-relaxed">
                            {t('value.secure.desc')}
                        </p>
                    </div>
                    <div className="space-y-4 px-4">
                        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary">{t('value.shipping.title')}</h3>
                        <p className="text-secondary leading-relaxed">
                            {t('value.shipping.desc')}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};
