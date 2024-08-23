import React from 'react';
import '../../styles/topBar.css';

const TopBar = () => {
  return (
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
            <img src="/assets/logo.jpg" alt="EcoShop" />
            <span>EcoShop</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Procurar" />
            <button>Buscar</button>
          </div>
          <div className="cart">
            <div className="cart-info">
              <img src="/assets/carrinho.png" alt="Carrinho" className="icon" />
              <div className="cart-details">
                <span className="cart-label">Carrinho:</span>
                <span className="cart-total">R$ 66,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;