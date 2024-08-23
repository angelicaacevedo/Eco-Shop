import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.push(cart);
      localStorage.setItem('orders', JSON.stringify(orders));
      alert('Compra finalizada com sucesso!');
      localStorage.removeItem('cart');
      setCart([]);
    } else {
      alert('Seu carrinho está vazio!');
    }
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <main>
      <section className="cart">
        <h2>Seu Carrinho</h2>
        <div id="cart-items">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="item-info">
                <h3>{product.name}</h3>
                <p>R${product.price.toFixed(2)}</p>
                <button className="remove-from-cart" onClick={() => removeFromCart(index)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
        <div id="total-price">Total: R${total.toFixed(2)}</div>
        <button id="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
      </section>
    </main>
  );
};

export default Cart;