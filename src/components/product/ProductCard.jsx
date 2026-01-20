import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { t } = useLanguage();

    const handleQuickAdd = (e) => {
        e.preventDefault();
        // Default to first size/color if available or just open details
        // For now, let's just add to cart with defaults or prompt
        // Ideally this opens a quick view or modal. 
        // Simplified: Add first variant
        if (product.sizes && product.sizes.length > 0 && product.colors && product.colors.length > 0) {
            addToCart(product, product.sizes[0], product.colors[0]);
        }
    };

    return (
        <Link to={`/product/${product.id}`} className="group block relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-red-500 transition-colors">
                        <Heart size={18} />
                    </button>
                </div>

                {/* Quick Add Overlay on Desktop */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 hidden lg:block">
                    <Button
                        variant="primary"
                        className="w-full text-sm py-2 shadow-lg"
                        onClick={handleQuickAdd}
                    >
                        {t('product.add')}
                    </Button>
                </div>
            </div>

            <div className="mt-4 space-y-1">
                <h3 className="text-gray-900 font-medium text-lg leading-snug group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm capitalize">{product.category}</p>
                <p className="text-gray-900 font-semibold mt-1">
                    {product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                </p>
            </div>
        </Link>
    );
};
