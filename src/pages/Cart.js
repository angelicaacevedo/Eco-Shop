import React, { useState, useEffect } from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../styles/cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Recupera os itens do carrinho e o total do localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedCartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;

    setCart(storedCart);
    setCartTotal(storedCartTotal);
  }, []);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Carrinho vazio');
      return;
    }

    // Limpa o carrinho
    setCart([]);
    setCartTotal(0);
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTotal');

    // Exibe uma mensagem de sucesso
    alert('Compra efetuada com sucesso!');
  };

  return (
    <div id="root">
      <TopBar cartTotal={cartTotal} />
      <main>
        <section className="cart">
          <h2>Seu Carrinho</h2>
          <div id="cart-items">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>R$ {item.price.toFixed(2)}</p>
                    <p>Categoria: {item.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
          </div>
          <div id="total-price">
            <h3>Total: R$ {cartTotal.toFixed(2)}</h3>
          </div>
          <button id="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
