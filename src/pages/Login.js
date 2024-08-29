import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import TopBarSimplicity from '../components/partials/TopBarSimplicity';
import Footer from '../components/partials/Footer';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login realizado com sucesso!');
      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div id="root">
      <TopBarSimplicity />
      <main>
        <div className="login-container">
          <h1>Login</h1>
          <form id="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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