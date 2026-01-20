import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilters } from '../components/product/ProductFilters';
import { SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clsx } from 'clsx';

export const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const { t, language } = useLanguage();

    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');

    useEffect(() => {
        let result = products;

        if (categoryParam) {
            result = result.filter(p => p.category === categoryParam);
        }

        if (searchParam) {
            const query = searchParam.toLowerCase();
            result = result.filter(p =>
                p[`name_${language}`]?.toLowerCase().includes(query) ||
                p[`desc_${language}`]?.toLowerCase().includes(query)
            );
        }

        setFilteredProducts(result);
    }, [categoryParam, searchParam, language]);

    const handleFilterChange = (newFilters) => {
        // Create a new URLSearchParams object from the current one to preserve other params if needed
        const newParams = new URLSearchParams(searchParams);

        // Handle category filter
        if (newFilters.category && newFilters.category.length > 0) {
            // Just take the last selected category for now as we are single-select in url effectively
            newParams.set('category', newFilters.category[newFilters.category.length - 1]);
        } else {
            newParams.delete('category');
        }

        // We generally want to keep search if it exists, or maybe clear it?
        // For now let's keep it independent or clear it if category is explicitly changed via filter.
        // But typically filter change implies refinement.

        setSearchParams(newParams);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-primary mb-4 md:mb-0">
                        {searchParam
                            ? `${t('search_results_for') || 'Resultados para'} "${searchParam}"`
                            : categoryParam
                                ? categories.find(c => c.id === categoryParam)?.[`label_${language}`]
                                : t('nav.catalog')}
                    </h1>

                    <button
                        className="md:hidden flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 rounded-sm"
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                    >
                        <SlidersHorizontal size={16} />
                        Filtros
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className={clsx(
                        "w-full md:w-64 flex-shrink-0 md:block",
                        mobileFiltersOpen ? "block" : "hidden"
                    )}>
                        <ProductFilters
                            activeFilters={{ category: categoryParam ? [categoryParam] : [] }}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24 text-gray-500">
                                <p>{language === 'es' ? 'No se encontraron productos.' : 'No products found.'}</p>
                                <button
                                    onClick={() => setSearchParams({})}
                                    className="mt-4 text-accent hover:underline"
                                >
                                    {language === 'es' ? 'Ver todos los productos' : 'View all products'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};
