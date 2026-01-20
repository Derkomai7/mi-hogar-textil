import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('mht_cart');
        return saved ? JSON.parse(saved) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('mht_cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (product, size, color) => {
        setItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
            );

            if (existingItemIndex >= 0) {
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += 1;
                return newItems;
            } else {
                return [...prevItems, {
                    ...product,
                    selectedSize: size,
                    selectedColor: color,
                    quantity: 1
                }];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id, size, color) => {
        setItems(prevItems => prevItems.filter(
            item => !(item.id === id && item.selectedSize === size && item.selectedColor === color)
        ));
    };

    const updateQuantity = (id, size, color, delta) => {
        setItems(prevItems => prevItems.map(item => {
            if (item.id === id && item.selectedSize === size && item.selectedColor === color) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart: items,
            addItem: addToCart,
            removeItem: removeFromCart,
            updateQuantity,
            clearCart,
            isCartOpen,
            setCartOpen: setIsCartOpen,
            cartTotal,
            totalItems: cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
