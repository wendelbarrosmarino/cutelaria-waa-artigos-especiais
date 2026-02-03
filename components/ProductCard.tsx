import React, { useState } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Constructing a direct message for this specific product
  const message = encodeURIComponent(`Olá! Gostaria de mais detalhes sobre a faca: ${product.name} - Valor: R$ ${product.price.toFixed(2).replace('.', ',')}`);
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

            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-brand-gold hover:bg-yellow-500 text-stone-900 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-[0_0_15px_rgba(234,179,8,0.4)] transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.897.001-6.627 5.396-12.023 12.023-12.023 3.21 0 6.228 1.25 8.497 3.52 2.269 2.269 3.52 5.286 3.52 8.496 0 6.626-5.397 12.022-12.023 12.022-2.024-.002-4.047-.529-5.877-1.545l-6.24 1.59zm6.339-3.962l.343.204c1.64.975 3.523 1.488 5.432 1.49 5.864 0 10.636-4.772 10.636-10.636 0-2.842-1.107-5.513-3.116-7.525C17.683 1.56 15.011.455 12.164.455 6.301.455 1.529 5.228 1.53 11.092c.001 1.954.536 3.822 1.541 5.462l.223.364-1.055 3.855 3.962-1.036zm10.155-5.809c-.279-.139-1.65-.813-1.905-.907-.255-.093-.441-.139-.628.141-.186.278-.721.906-.883 1.092-.163.187-.326.21-.605.07-.279-.138-1.176-.433-2.241-1.382-.828-.737-1.387-1.649-1.55-1.928-.162-.278-.018-.429.122-.568.127-.127.28-.326.419-.488.139-.163.186-.279.279-.465.093-.186.047-.349-.023-.488-.07-.139-.628-1.513-.86-2.071-.225-.537-.453-.464-.629-.464-.162-.002-.348-.002-.534-.002-.186 0-.488.07-.744.349-.255.279-.976.953-.976 2.325 0 1.372 1.001 2.698 1.14 2.884.14.186 1.968 3.004 4.767 4.212.666.288 1.185.46 1.591.589.669.213 1.28.183 1.764.111.536-.08 1.65-.674 1.883-1.325.232-.651.232-1.209.162-1.325-.07-.116-.255-.186-.534-.325z" /></svg>
                <span className="uppercase tracking-widest text-sm">Encomendar pelo WhatsApp</span>
              </a>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand();
                }}
                className="bg-stone-800 hover:bg-stone-700 text-white border border-stone-600 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span className="uppercase tracking-widest text-sm">Voltar para o Catálogo</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;