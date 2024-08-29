import React from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../styles/supermarket.css';

const Supermarket = () => {
  return (
    <div id="root">
      <TopBar />
      <main>
        <section className="filter-category">
          <h2>Categorias</h2>
          <ul id="category-list"></ul>
        </section>
        <section className="product-list">
          <h2>Produtos Disponíveis</h2>
          <div id="product-list" className="products"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Supermarket;