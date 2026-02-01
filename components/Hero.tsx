import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-stone-900 py-16 md:py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/background-knife.png')] bg-cover bg-center opacity-20 grayscale"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <img
          src="/Logo.jpg"
          alt="Cutelaria WAA Logo"
          className="mx-auto h-32 md:h-48 object-contain mb-8 drop-shadow-2xl"
        />
        <h2 className="font-serif text-4xl md:text-6xl text-stone-100 font-bold mb-6">
          Arte em <span className="text-brand-gold">Cutelaria</span> & <span className="text-brand-accent">Tradição</span>
        </h2>

        <p className="max-w-6xl mx-auto text-[12px] md:text-[45px] leading-tight text-stone-400 mb-8">
          Interessados(as) em <span className="text-stone-200 font-bold underline decoration-brand-gold decoration-4">presentear</span> ou para uso próprio com <span className="text-stone-200 font-bold underline decoration-brand-accent decoration-4">estilo</span>?
          Adquira uma linha de peças de cutelaria para churrasco, camping, dia a dia ou coleção. Somente peças novas.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="text-stone-500 py-3 px-8 border border-stone-700 rounded flex items-center justify-center gap-2 cursor-default">
            <span>Envios para todo o Acre, ver frete</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;