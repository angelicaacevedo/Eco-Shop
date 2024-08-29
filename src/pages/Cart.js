import React from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../styles/cart.css';

const Cart = () => {
  return (
    <div id="root">
      <TopBar />
      <main>
        <section className="cart">
          <h2>Seu Carrinho</h2>
          <div id="cart-items"></div>
          <div id="total-price"></div>
          <button id="checkout-button">Finalizar Compra</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;