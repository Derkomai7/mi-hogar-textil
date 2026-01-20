import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Landmark, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
    const [paymentMethod, setPaymentMethod] = useState('card'); // card, bizum, transfer
    const [loading, setLoading] = useState(false);

    // Form states (simplified)
    const [address, setAddress] = useState({ name: '', street: '', city: '', zip: '' });

    if (items.length === 0 && step !== 3) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Tu cesta está vacía</h2>
                <Button onClick={() => navigate('/catalog')}>Volver a la tienda</Button>
            </div>
        );
    }

    const handleCreateOrder = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate processing
        await new Promise(r => setTimeout(r, 2000));
        // Usually validation here
        setStep(3);
        clearCart();
        setLoading(false);
        window.scrollTo(0, 0);
    };

    if (step === 3) {
        return (
            <div className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
                <div className="animate-bounce inline-flex items-center justify-center p-4 bg-green-100 rounded-full text-green-600 mb-4">
                    <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">¡Pedido Confirmado!</h2>
                <p className="text-gray-600">Gracias por tu compra. Te hemos enviado un email con los detalles del pedido.</p>
                <div className="pt-8">
                    <Button onClick={() => navigate('/')} variant="outline">Volver al inicio</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-serif font-bold mb-8">Tramitar Pedido</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Form */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Step 1: Shipping */}
                    <div className={clsx("transition-opacity", step !== 1 && "opacity-50 pointer-events-none")}>
                        <h2 className="text-xl font-semibold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm mr-3">1</span>
                            Dirección de Envío
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Nombre completo" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                            <input type="text" placeholder="Calle y número" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                            <input type="text" placeholder="Ciudad" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                            <input type="text" placeholder="Código Postal" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                            <input type="text" placeholder="Teléfono" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                        </div>

                    </div>

                    {/* Step 2: Payment */}
                    <div className={clsx("transition-opacity", step === 1 ? "opacity-50 pointer-events-none" : "")}>
                        <h2 className="text-xl font-semibold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm mr-3">2</span>
                            Método de Pago
                        </h2>

                        {/* Method Selection */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <button
                                onClick={() => setPaymentMethod('transfer')}
                                className={clsx("p-4 border rounded-lg flex flex-col items-center justify-center text-center space-y-2 hover:border-primary transition-colors", paymentMethod === 'transfer' ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-gray-200')}
                            >
                                <Landmark size={24} />
                                <span className="font-medium text-sm">Transferencia</span>
                            </button>
                            <button
                                onClick={() => setPaymentMethod('bizum')}
                                className={clsx("p-4 border rounded-lg flex flex-col items-center justify-center text-center space-y-2 hover:border-primary transition-colors", paymentMethod === 'bizum' ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-gray-200')}
                            >
                                <Smartphone size={24} />
                                <span className="font-medium text-sm">Bizum</span>
                            </button>
                            <button
                                onClick={() => setPaymentMethod('card')}
                                className={clsx("p-4 border rounded-lg flex flex-col items-center justify-center text-center space-y-2 hover:border-primary transition-colors", paymentMethod === 'card' ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-gray-200')}
                            >
                                <CreditCard size={24} />
                                <span className="font-medium text-sm">Tarjeta</span>
                            </button>
                        </div>

                        {/* Method Details */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            {paymentMethod === 'transfer' && (
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600">Realiza la transferencia a la siguiente cuenta. El pedido se enviará una vez recibido el pago.</p>
                                    <div className="bg-white p-4 rounded border font-mono text-sm">ES91 2100 0000 0000 1234 5678</div>
                                    <p className="text-xs text-gray-500">Beneficiario: Mi Hogar Textil S.L.</p>
                                </div>
                            )}
                            {paymentMethod === 'bizum' && (
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Teléfono móvil asociado a Bizum</label>
                                    <input type="tel" placeholder="+34 600 00 00 00" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                                    <p className="text-xs text-gray-500">Recibirás una solicitud de pago en tu app.</p>
                                </div>
                            )}
                            {paymentMethod === 'card' && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
                                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Caducidad</label>
                                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">CVC</label>
                                            <input type="text" placeholder="123" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                {/* Sidebar - Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                        <h3 className="text-lg font-semibold mb-4">Resumen del Pedido</h3>
                        <div className="space-y-4 mb-6">
                            {items.map(item => (
                                <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between text-sm">
                                    <span className="text-gray-600">{item.quantity}x {item.name} ({item.selectedSize})</span>
                                    <span className="font-medium">{(item.price * item.quantity).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Subtotal</span>
                                <span>{cartTotal.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Envío</span>
                                <span className="text-green-600">Gratis</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold pt-2">
                                <span>Total</span>
                                <span>{cartTotal.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            {step === 1 ? (
                                <Button className="w-full" onClick={() => setStep(2)}>
                                    Continuar a Pago
                                </Button>
                            ) : (
                                <Button className="w-full" onClick={handleCreateOrder} disabled={loading}>
                                    {loading ? 'Procesando...' : `Pagar ${cartTotal.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
