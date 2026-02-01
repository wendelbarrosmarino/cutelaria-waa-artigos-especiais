import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  return (
    <section id="catalogo" className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-12 border-b border-stone-800 pb-4">
        <h2 className="font-serif text-3xl text-stone-100 font-bold">
          Catálogo Disponível
        </h2>
        <span className="text-brand-gold text-sm font-bold bg-stone-800 px-3 py-1 rounded-full border border-stone-700">
          {PRODUCTS.length} Peças Únicas
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;