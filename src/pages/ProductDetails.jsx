import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import clsx from 'clsx';

export const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : '');
    const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0] : '');

    if (!product) {
        return <div className="text-center py-20">Producto no encontrado</div>;
    }

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* Images */}
                <div className="space-y-4">
                    <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Pseudo gallery */}
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <img src={product.image} alt="detail 1" className="h-full w-full object-cover" />
                        </div>
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <img src={product.image} alt="detail 2" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
                    <p className="text-2xl text-gray-900 font-medium mb-8">
                        {product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                    </p>

                    <div className="prose prose-sm text-gray-600 mb-8">
                        <p>{product.description}</p>
                        <ul className="list-disc pl-4 mt-2 space-y-1">
                            <li>Envío gratuito en pedidos superiores a 50€</li>
                            <li>Devoluciones gratuitas en 30 días</li>
                            <li>Fabricado en España</li>
                        </ul>
                    </div>

                    <div className="space-y-6 flex-1">
                        {/* Color Selector */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Color: {selectedColor}</h3>
                            <div className="flex space-x-3">
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={clsx(
                                            "h-8 w-8 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                                            selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""
                                        )}
                                        style={{ backgroundColor: color === 'Blanco' ? '#fff' : color === 'Beige' ? '#E8DEC4' : color === 'Verde Oliva' ? '#556b2f' : 'gray' }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Tamaño</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={clsx(
                                            "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1",
                                            selectedSize === size ? "border-primary ring-1 ring-primary text-primary" : "border-gray-200 text-gray-900"
                                        )}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8">
                            <Button
                                size="lg"
                                className="w-full"
                                onClick={() => addToCart(product, selectedSize, selectedColor)}
                            >
                                Añadir a la cesta - {product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related */}
            <div className="mt-24 border-t border-gray-200 pt-16">
                <h2 className="text-2xl font-serif font-bold mb-8">También te podría gustar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};
