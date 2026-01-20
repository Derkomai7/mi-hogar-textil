import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilters } from '../components/product/ProductFilters';
import { Filter } from 'lucide-react';

export const Catalog = () => {
    const { categoryId } = useParams();
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState({
        category: categoryId ? [categoryId] : [],
        priceRange: []
    });

    // Derived state for filtered products
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Category filter
            if (activeFilters.category.length > 0 && !activeFilters.category.includes(product.category)) {
                return false;
            }
            return true;
        });
    }, [activeFilters]);

    // Update filters if URL param changes
    useMemo(() => {
        if (categoryId) {
            setActiveFilters(prev => ({ ...prev, category: [categoryId] }));
        } else {
            // If no categoryId, we might want to clear category filter ONLY if we navigated from category page to full catalog
            // But for simplicity let's just keep manual filters if they click "Catalog"
        }
    }, [categoryId]);


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-serif font-bold capitalize">
                        {categoryId ? categoryId : 'Catálogo Completo'}
                    </h1>
                    <p className="text-gray-500 mt-2">{filteredProducts.length} productos encontrados</p>
                </div>

                {/* Mobile Filter Toggle */}
                <button
                    className="lg:hidden flex items-center space-x-2 text-gray-900 font-medium"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <Filter size={20} />
                    <span>Filtros</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
                    <ProductFilters
                        activeFilters={activeFilters}
                        onFilterChange={setActiveFilters}
                    />
                </aside>

                {/* Grid */}
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No se encontraron productos con estos filtros.
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};
