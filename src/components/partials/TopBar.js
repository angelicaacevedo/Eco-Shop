import React from 'react';
import '../../styles/topBar.css';

const TopBar = ({ cartTotal }) => (
  <div className="top-bar">
    <div className="container">
      <div className="top-row">
        <div className="location">
          <span>Campinas-São Paulo</span>
        </div>
        <div className="user-options">
          <a href="/register">Cadastrar</a> / <a href="/login">Entrar</a>
        </div>
      </div>
      <div className="bottom-row">
        <div className="logo">
          <img src="Assets/logo.jpg" alt="EcoShop" />
          <span>EcoShop</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Procurar" />
          <button>Buscar</button>
        </div>
        <div className="cart">
          <div className="cart-info">
            <img src="Assets/carrinho.png" alt="Carrinho" className="icon" />
            <div className="cart-details">
              <span className="cart-label">Carrinho:</span>
              <span className="cart-total">R$ {cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-bar">
      <div className="container">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/supermarket">Mercado</a></li>
            <li><a href="/cart">Carrinho</a></li>
            <li><a href="/contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default TopBar;
