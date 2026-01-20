import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within a AuthProvider');
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for token in localStorage on mount
        const token = localStorage.getItem('mht_token');
        if (token) {
            // Simulate validating token
            setUser({ name: 'Usuario Demo', email: 'user@demo.com' });
            setIsAuthenticated(true);
        }
    }, []);

    const login = (email, password) => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const fakeToken = 'abc-123-token';
                localStorage.setItem('mht_token', fakeToken);
                setUser({ name: 'Usuario Demo', email: email });
                setIsAuthenticated(true);
                resolve(true);
            }, 500);
        });
    };

    const logout = () => {
        localStorage.removeItem('mht_token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
