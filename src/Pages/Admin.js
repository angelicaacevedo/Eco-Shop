import React from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../styles/admin.css';

const Admin = () => {
  return (
    <div>
      <TopBar />
      <main>
        <div className="admin-container">
          <h1>Painel do Administrador</h1>
          <form id="product-form">
            <div className="form-group">
              <label htmlFor="product-name">Nome do Produto:</label>
              <input type="text" id="product-name" name="product-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="product-price">Preço:</label>
              <input type="number" id="product-price" name="product-price" step="0.01" required />
            </div>
            <div className="form-group">
              <label htmlFor="product-category">Categoria:</label>
              <input type="text" id="product-category" name="product-category" required />
            </div>
            <div className="form-group">
              <label htmlFor="product-image">URL da Imagem:</label>
              <input type="url" id="product-image" name="product-image" required />
            </div>
            <button type="submit">Cadastrar Produto</button>
          </form>
          <div id="product-list"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;