import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { useEffect } from 'react';

export const CartDrawer = () => {
    const {
        cart,
        isCartOpen,
        setCartOpen,
        removeItem,
        updateQuantity,
        cartTotal
    } = useCart();
    const { t } = useLanguage();

    const navigate = useNavigate();

    // Disable body scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isCartOpen]);

    const handleCheckout = () => {
        setCartOpen(false);
        navigate('/checkout');
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 backdrop-blur-sm",
                    isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setCartOpen(false)}
            />

            {/* Drawer */}
            <div
                className={clsx(
                    "fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out",
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="h-full flex flex-col">

                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
                        <h2 className="text-xl font-serif font-bold text-primary flex items-center gap-2">
                            <ShoppingBag size={20} />
                            {t('cart.title')}
                        </h2>
                        <button
                            onClick={() => setCartOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                        {cart.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-400">
                                <ShoppingBag size={48} className="opacity-20" />
                                <p>{t('cart.empty')}</p>
                                <Button variant="outline" onClick={() => setCartOpen(false)}>
                                    {t('home.view_all')}
                                </Button>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 animate-fade-in">
                                    <div className="w-20 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium text-primary line-clamp-1">{item.name}</h3>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {item.selectedSize} | {item.selectedColor}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-gray-200 rounded-md">
                                                <button
                                                    className="p-1 hover:bg-gray-50 text-gray-500"
                                                    onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                <button
                                                    className="p-1 hover:bg-gray-50 text-gray-500"
                                                    onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="font-medium text-primary">
                                                    {(item.price * item.quantity).toFixed(2)}€
                                                </span>
                                                <button
                                                    onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {cart.length > 0 && (
                        <div className="px-6 py-6 border-t border-gray-100 bg-gray-50">
                            <div className="flex justify-between items-center mb-4 text-lg font-bold text-primary">
                                <span>{t('cart.subtotal')}</span>
                                <span>{cartTotal.toFixed(2)}€</span>
                            </div>
                            <p className="text-xs text-center text-gray-500 mb-4">
                                {t('cart.shipping_calc')}
                            </p>
                            <Button
                                className="w-full py-4 text-lg shadow-xl hover:scale-[1.02] transition-transform"
                                onClick={handleCheckout}
                            >
                                {t('cart.checkout')}
                            </Button>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};
