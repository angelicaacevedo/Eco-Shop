import React from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div>
      <TopBar />
      <main>
        <div className="contact-container">
          <h1>Entre em Contato</h1>
          <form id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;