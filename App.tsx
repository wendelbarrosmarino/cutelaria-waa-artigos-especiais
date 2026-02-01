import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-stone-900 font-sans text-stone-200 selection:bg-brand-gold selection:text-stone-900">
      <Header />
      <main>
        <Hero />
        <ProductList />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;