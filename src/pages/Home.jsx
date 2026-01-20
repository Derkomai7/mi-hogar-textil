import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import { products, categories } from '../data/products';
import { useLanguage } from '../contexts/LanguageContext';

export const Home = () => {
    const { t } = useLanguage();
    const bestSellers = products.filter(p => p.bestseller).slice(0, 4);

    return (
        <div className="space-y-16 pb-16">

            {/* Hero Section */}
            <section className="relative h-[80vh] bg-gray-900 flex items-center justify-center text-center px-4 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=2000"
                    alt="Hero Bedding"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Descubre la esencia del <br /> <span className="text-accent italic">confort</span> y la <span className="text-accent italic">elegancia</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Textiles de hogar diseñados para transformar tus espacios en santuarios de paz y estilo.
                    </p>
                    <div className="pt-4">
                        <Link to="/catalog">
                            <Button size="lg" variant="primary" className="bg-white text-gray-900 hover:bg-gray-100 border-none">
                                Ver Colección 2024
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Nuestras Colecciones</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link key={cat.id} to={`/category/${cat.id}`} className="group relative h-96 overflow-hidden rounded-lg">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-xl font-medium">{cat.label_es}</h3>
                                <span className="flex items-center text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Explorar <ArrowRight size={16} className="ml-2" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Best Sellers */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="flex justify-between items-end mb-8 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-serif font-bold">Best Sellers</h2>
                        <p className="text-gray-500 mt-2">Los favoritos de nuestros clientes</p>
                    </div>
                    <Link to="/catalog" className="hidden sm:flex items-center text-primary font-medium hover:underline">
                        Ver todo <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                    {bestSellers.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link to="/catalog">
                        <Button variant="outline">Ver todo el catálogo</Button>
                    </Link>
                </div>
            </section>

            {/* Brand Values */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Calidad Premium</h3>
                        <p className="text-gray-500">Materiales seleccionados cuidadosamente para garantizar la máxima durabilidad y confort.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Pago Seguro</h3>
                        <p className="text-gray-500">Tus datos están protegidos con los estándares de seguridad más altos.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Envío Rápido</h3>
                        <p className="text-gray-500">Recibe tu pedido en 24/48 horas en toda la península.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};
