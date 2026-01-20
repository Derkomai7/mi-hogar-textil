import { X } from 'lucide-react';
import { useState } from 'react';
import { categories } from '../../data/products';
import { Button } from '../ui/Button';
import clsx from 'clsx';

export const ProductFilters = ({ activeFilters, onFilterChange, className }) => {
    // activeFilters is an object like { category: [], priceRange: [0, 500] }

    const handleCategoryChange = (catId) => {
        // Toggle logic
        const currentCats = activeFilters.category || [];
        const newCats = currentCats.includes(catId)
            ? currentCats.filter(c => c !== catId)
            : [...currentCats, catId];

        onFilterChange({ ...activeFilters, category: newCats });
    };

    return (
        <div className={clsx("space-y-8", className)}>
            {/* Categories */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Categorías</h4>
                <div className="space-y-2">
                    {categories.map(cat => (
                        <label key={cat.id} className="flex items-center space-x-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={(activeFilters.category || []).includes(cat.id)}
                                onChange={() => handleCategoryChange(cat.id)}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span className="text-gray-600 group-hover:text-primary transition-colors">{cat.label_es}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price - Simplified for now */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Precio</h4>
                <div className="space-y-2 text-sm text-gray-600">
                    {/* Stub for slider or ranges */}
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded border-gray-300" /> <span>0€ - 50€</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded border-gray-300" /> <span>50€ - 100€</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded border-gray-300" /> <span>100€ +</span></label>
                </div>
            </div>
        </div>
    );
};
