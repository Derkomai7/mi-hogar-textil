import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useEffect } from 'react';

export const CartDrawer = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        items,
        updateQuantity,
        removeFromCart,
        cartTotal
    } = useCart();

    const { t } = useLanguage();

    // Disable body scroll when open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isCartOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
                    isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div
                className={clsx(
                    "fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 flex flex-col",
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">{t('cart.title')}</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 text-gray-500 hover:text-gray-900"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {items.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <p>{t('cart.empty')}</p>
                            <Button variant="outline" className="mt-4" onClick={() => setIsCartOpen(false)}>
                                Ver Catálogo
                            </Button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-4">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>{item.name}</h3>
                                            <p>{(item.price * item.quantity).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{item.selectedColor} | {item.selectedSize}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex items-center space-x-2 border rounded-md">
                                            <button
                                                className="p-1 hover:bg-gray-100 disabled:opacity-50"
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-4 text-center">{item.quantity}</span>
                                            <button
                                                className="p-1 hover:bg-gray-100"
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)}
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                            className="font-medium text-red-500 hover:text-red-600"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-gray-200 p-4 space-y-4">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>{cartTotal.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Gastos de envío calculados en el checkout.</p>
                        <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                            <Button className="w-full">{t('cart.checkout')}</Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};
