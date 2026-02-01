import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-12 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif text-2xl text-stone-600 font-bold mb-4 opacity-50">CUTELARIA WAA</h3>
        <p className="text-stone-500 mb-8 max-w-md mx-auto">
          Facas artesanais de alta performance. Design exclusivo para colecionadores e aventureiros.
        </p>
        
        <p className="text-stone-700 text-xs">
          &copy; {new Date().getFullYear()} Cutelaria WAA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;