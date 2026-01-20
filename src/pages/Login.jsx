import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email);
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm max-w-md w-full animate-fade-in-up">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-primary mb-2">{t('auth.welcome')}</h1>
                    <p className="text-gray-500">{t('auth.register_prompt')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('auth.email')}</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all"
                            placeholder="user@example.com"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-gray-700">{t('auth.password')}</label>
                            <a href="#" className="text-xs text-accent hover:underline">{t('auth.forgot')}</a>
                        </div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                        {t('auth.login_btn')}
                    </Button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">O continúa con</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="p-2 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600">
                            Google
                        </button>
                        <button type="button" className="p-2 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600">
                            Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
