import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const ProductCard = ({ product }) => {
    const { addItem } = useCart();
    const { language, t } = useLanguage();

    const handleQuickAdd = (e) => {
        e.preventDefault();
        // Default to first variant if quick adding
        addItem({
            ...product,
            selectedSize: product.sizes[0],
            selectedColor: product.colors[0],
            name: product[`name_${language}`] // Ensure name is localized in cart
        });
    };

    return (
        <div className="group relative">
            <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-lg bg-gray-100 mb-4 aspect-[3/4]">
                <img
                    src={product.image}
                    alt={product[`name_${language}`]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                        onClick={handleQuickAdd}
                        className="w-full shadow-lg bg-white text-primary hover:bg-gray-50 border-none"
                    >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        {t('product.add')}
                    </Button>
                </div>
            </Link>

            <div>
                <h3 className="text-lg font-medium text-primary mb-1">
                    <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
                        {product[`name_${language}`]}
                    </Link>
                </h3>
                <p className="text-secondary font-light">
                    {product.price.toFixed(2)}€
                </p>
            </div>
        </div>
    );
};
