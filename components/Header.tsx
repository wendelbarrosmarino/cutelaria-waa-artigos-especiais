import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark/95 backdrop-blur-md border-b border-stone-800 sticky top-0 z-40 shadow-2xl">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">


        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium text-stone-400">
            <li className="hover:text-brand-gold transition-colors cursor-pointer">Sobre</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;