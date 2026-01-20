import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, Truck, ShieldCheck } from 'lucide-react';
import { products, categories } from '../data/products';
import { Button } from '../components/ui/Button';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { clsx } from 'clsx';

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const { addItem, setCartOpen } = useCart();
    const { t, language } = useLanguage();

    useEffect(() => {
        // Helper to find product by id (convert string id from url to number)
        const found = products.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
            setSize(found.sizes[0]);
            setColor(found.colors[0]);
        }
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Producto no encontrado</p>
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem({
            ...product,
            selectedSize: size,
            selectedColor: color,
            name: product[`name_${language}`] // Localized name
        });
        setCartOpen(true);
    };

    // Get related products (same category, excluding current)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Images */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product[`name_${language}`]}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <span className="text-sm text-accent font-medium tracking-wider uppercase mb-2 block">
                                {categories.find(c => c.id === product.category)?.[`label_${language}`]}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                                {product[`name_${language}`]}
                            </h1>
                            <p className="text-2xl font-light text-secondary">
                                {product.price.toFixed(2)}€
                            </p>
                        </div>

                        <div className="prose prose-stone text-gray-500">
                            <p>{product[`desc_${language}`]}</p>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-gray-100">
                            {/* Sizes */}
                            <div>
                                <span className="block text-sm font-medium text-primary mb-3">
                                    {t('product.size')}
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={clsx(
                                                "min-w-[3rem] h-10 px-3 rounded-md border text-sm font-medium transition-all",
                                                size === s
                                                    ? "border-primary bg-primary text-white"
                                                    : "border-gray-200 text-gray-600 hover:border-gray-400"
                                            )}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Colors */}
                            <div>
                                <span className="block text-sm font-medium text-primary mb-3">
                                    {t('product.color')}
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    {product.colors.map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => setColor(c)}
                                            className={clsx(
                                                "px-4 py-2 rounded-md border text-sm font-medium transition-all",
                                                color === c
                                                    ? "border-primary bg-primary text-white"
                                                    : "border-gray-200 text-gray-600 hover:border-gray-400"
                                            )}
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                {t('product.add')}
                            </Button>
                        </div>

                        {/* Meta info */}
                        <div className="grid grid-cols-2 gap-4 pt-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Truck size={18} />
                                <span>{t('value.shipping.desc')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18} />
                                <span>Garantía de calidad</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-24">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-8">{t('product.related')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map(p => (
                                <div key={p.id} className="group relative">
                                    <Link to={`/product/${p.id}`} className="block overflow-hidden rounded-lg bg-gray-100 mb-4 aspect-[3/4]">
                                        <img
                                            src={p.image}
                                            alt={p[`name_${language}`]}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </Link>
                                    <h3 className="text-lg font-medium text-primary">
                                        <Link to={`/product/${p.id}`}>{p[`name_${language}`]}</Link>
                                    </h3>
                                    <p className="text-secondary">{p.price.toFixed(2)}€</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
