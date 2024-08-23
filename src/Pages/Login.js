import React from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../Styles/auth.css';

const Login = () => {
  return (
    <div>
      <TopBar />
      <main>
        <div className="login-container">
          <h1>Login</h1>
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Entrar</button>
          </form>
          <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;