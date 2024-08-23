import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <main>
      <div className="contact-container">
        <h1>Entre em Contato</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto:</label>
            <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;