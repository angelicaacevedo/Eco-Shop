import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Supermarket from './pages/Supermarket';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/admin" component={<Admin />} />
        <Route path="/cart" component={<Cart />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={<Register />} />
        <Route path="/supermarket" component={<Supermarket />} />
        <Route path="*" component={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;