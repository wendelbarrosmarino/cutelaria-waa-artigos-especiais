import React, { useState } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Constructing a direct message for this specific product
  const message = encodeURIComponent(`Olá, tenho interesse na faca "${product.name}" (R$ ${product.price.toFixed(2).replace('.', ',')}). Ainda está disponível?`);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const imageSrc = product.image ? product.image : `https://picsum.photos/seed/${product.imageSeed}/500/500`;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div className="bg-stone-800 rounded-lg overflow-hidden border border-stone-700 shadow-xl hover:shadow-brand-gold/20 transition-all duration-300 flex flex-col h-full group">
        {/* Image Container */}
        <div
          className="relative h-64 overflow-hidden bg-stone-900 cursor-zoom-in group"
          onClick={toggleExpand}
        >
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="font-serif text-[25px] text-white font-bold leading-tight drop-shadow-md">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          {/* Price & Dimensions */}
          <div className="mb-4">
            <span className="block text-3xl font-bold text-brand-gold mb-1">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs text-stone-400 font-mono border border-stone-600 px-2 py-1 rounded inline-block bg-stone-900">
              {product.dimensions}
            </span>
          </div>

          {/* Description */}
          <p className="text-stone-300 text-sm italic mb-4 border-l-2 border-brand-accent pl-3">
            "{product.description}"
          </p>

          {/* Features List */}
          <ul className="text-stone-400 text-sm space-y-2 mb-6 flex-grow">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-brand-gold mt-1">❖</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-stone-700 hover:bg-brand-gold hover:text-stone-900 text-white font-bold py-3 px-4 rounded text-center transition-colors duration-300 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
          >
            <span>Encomendar Agora</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* Modal for Expanded Image */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fadeIn"
          onClick={toggleExpand}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">

            <div className="relative">
              <img
                src={imageSrc}
                alt={product.name}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl mb-6 cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
              {product.isSold && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600/90 text-white px-8 py-4 rounded-lg border-4 border-white shadow-xl rotate-[-15deg] pointer-events-none z-10 w-max">
                  <span className="text-4xl font-bold uppercase tracking-widest">Vendida</span>
                </div>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
              className="bg-stone-800 hover:bg-brand-gold hover:text-stone-900 text-white border border-stone-600 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span className="uppercase tracking-widest text-sm">Voltar para o Catálogo</span>
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;