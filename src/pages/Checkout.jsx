import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle, CreditCard, Building2, Smartphone, ArrowLeft } from 'lucide-react';
import { clsx } from 'clsx';

export const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const { isAuthenticated } = useAuth();
    const { t, language } = useLanguage();
    const navigate = useNavigate();

    const [step, setStep] = useState(1); // 1: Address, 2: Payment, 3: Confirmation
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isLoading, setIsLoading] = useState(false);

    // Redirect if cart is empty (unless we just finished)
    useEffect(() => {
        if (cart.length === 0 && step !== 3) {
            navigate('/catalog');
        }
    }, [cart, step, navigate]);

    const handleNextStep = (e) => {
        e.preventDefault();
        if (step === 1) setStep(2);
    };

    const handlePlaceOrder = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep(3);
            clearCart();
        }, 2000);
    };

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
                <p className="text-xl mb-4">{t('checkout.empty')}</p>
                <Link to="/catalog"><Button>{t('checkout.back_shop')}</Button></Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-serif font-bold text-center mb-12 text-primary">{t('checkout.title')}</h1>

                {step === 3 ? (
                    // Success Step
                    <div className="bg-white p-12 rounded-lg shadow-sm text-center animate-fade-in">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">{t('checkout.success.title')}</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            {t('checkout.success.desc')}
                        </p>
                        <Link to="/">
                            <Button size="lg">{t('checkout.return')}</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Column: Form Steps */}
                        <div className="md:col-span-2 space-y-6">

                            {/* Step 1: Address */}
                            <div className={clsx("bg-white p-6 rounded-lg shadow-sm transition-opacity duration-300", step !== 1 && "opacity-50 pointer-events-none")}>
                                <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                                    <span className={clsx("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold", step >= 1 ? "bg-primary text-white" : "bg-gray-100 text-gray-500")}>1</span>
                                    {t('checkout.step1')}
                                </h2>
                                {step === 1 && (
                                    <form id="address-form" onSubmit={handleNextStep} className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                                        <input required type="text" placeholder="Nombre" className="p-3 border rounded-sm" />
                                        <input required type="text" placeholder="Apellidos" className="p-3 border rounded-sm" />
                                        <input required type="text" placeholder="Dirección" className="md:col-span-2 p-3 border rounded-sm" />
                                        <input required type="text" placeholder="Ciudad" className="p-3 border rounded-sm" />
                                        <input required type="text" placeholder="Código Postal" className="p-3 border rounded-sm" />
                                        <input required type="tel" placeholder="Teléfono" className="md:col-span-2 p-3 border rounded-sm" />
                                        <div className="md:col-span-2 mt-4 text-right">
                                            <Button type="submit">{t('checkout.pay')}</Button>
                                        </div>
                                    </form>
                                )}
                            </div>

                            {/* Step 2: Payment */}
                            <div className={clsx("bg-white p-6 rounded-lg shadow-sm transition-opacity duration-300", step !== 2 && "opacity-50 pointer-events-none")}>
                                <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                                    <span className={clsx("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold", step >= 2 ? "bg-primary text-white" : "bg-gray-100 text-gray-500")}>2</span>
                                    {t('checkout.step2')}
                                </h2>
                                {step === 2 && (
                                    <div className="space-y-4 animate-fade-in">
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <button
                                                onClick={() => setPaymentMethod('card')}
                                                className={clsx("p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors", paymentMethod === 'card' ? "border-primary bg-stone-50" : "hover:border-gray-300")}
                                            >
                                                <CreditCard size={24} />
                                                <span className="text-xs font-medium">Tarjeta</span>
                                            </button>
                                            <button
                                                onClick={() => setPaymentMethod('bizum')}
                                                className={clsx("p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors", paymentMethod === 'bizum' ? "border-primary bg-stone-50" : "hover:border-gray-300")}
                                            >
                                                <Smartphone size={24} />
                                                <span className="text-xs font-medium">Bizum</span>
                                            </button>
                                            <button
                                                onClick={() => setPaymentMethod('transfer')}
                                                className={clsx("p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors", paymentMethod === 'transfer' ? "border-primary bg-stone-50" : "hover:border-gray-300")}
                                            >
                                                <Building2 size={24} />
                                                <span className="text-xs font-medium">Transferencia</span>
                                            </button>
                                        </div>

                                        {paymentMethod === 'card' && (
                                            <div className="space-y-4 p-4 bg-gray-50 rounded-md">
                                                <input type="text" placeholder="Número de Tarjeta" className="w-full p-3 border rounded-sm" />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <input type="text" placeholder="MM/AA" className="p-3 border rounded-sm" />
                                                    <input type="text" placeholder="CVC" className="p-3 border rounded-sm" />
                                                </div>
                                            </div>
                                        )}

                                        {paymentMethod === 'bizum' && (
                                            <div className="p-4 bg-gray-50 rounded-md text-sm text-gray-600">
                                                Introduce tu número de móvil para recibir la solicitud de pago.
                                                <input type="tel" placeholder="+34 600 000 000" className="w-full mt-2 p-3 border rounded-sm" />
                                            </div>
                                        )}

                                        <div className="flex justify-between items-center mt-6">
                                            <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-primary flex items-center gap-1">
                                                <ArrowLeft size={16} /> Atrás
                                            </button>
                                            <Button onClick={handlePlaceOrder} isLoading={isLoading}>
                                                {t('checkout.pay')} {cartTotal.toFixed(2)}€
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="md:col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                                <h3 className="font-serif font-bold text-lg mb-4">{t('checkout.summary')}</h3>
                                <div className="space-y-4 text-sm text-gray-600 mb-6 max-h-64 overflow-y-auto">
                                    {cart.map((item) => (
                                        <div key={item.id + item.selectedSize} className="flex justify-between">
                                            <span>{item.quantity}x {item.name}</span>
                                            <span>{(item.price * item.quantity).toFixed(2)}€</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between font-bold text-xl pt-4 border-t border-gray-100">
                                    <span>{t('checkout.total')}</span>
                                    <span>{cartTotal.toFixed(2)}€</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
