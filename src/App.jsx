import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';

// Providers
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Layout
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { ScrollToTop } from './components/ui/ScrollToTop'; // Helper I'll create inline or just use generic ScrollRestoration from v6

// Pages
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <ScrollToTop />
              <Header />
              <CartDrawer />

              <main className="flex-grow pt-[72px]"> {/* Padding for fixed header */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/category/:categoryId" element={<Catalog />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
