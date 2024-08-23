import React from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../Styles/auth.css';

const Register = () => {
  return (
    <div>
      <TopBar />
      <main>
        <div className="register-container">
          <h1>Cadastro</h1>
          <form id="register-form">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirmar Senha:</label>
              <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;