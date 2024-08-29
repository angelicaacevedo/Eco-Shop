import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { FaShoppingCart } from 'react-icons/fa';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../styles/supermarket.css';

const Supermarket = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedCartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;
  
    setCart(storedCart);
    setCartTotal(storedCartTotal);
  
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'Produtos'));
      const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    };
  
    fetchProducts();
  }, []);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'Produtos'));
      const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    setCartTotal(total);
  }, [cart]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  
    const updatedTotal = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(updatedTotal);
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('cartTotal', updatedTotal.toFixed(2));
  
    alert(`${product.name} foi adicionado ao carrinho!`);
  };
  

  return (
    <div id="root">
      <TopBar cartTotal={cartTotal} />
      <main>
        <section className="filter-category">
          <h2>Categorias</h2>
          <ul id="category-list">
            {products.map(product => (
              <li key={product.id}>{product.category}</li>
            ))}
          </ul>
        </section>
        <section className="product-list">
          <h2>Produtos Disponíveis</h2>
          <div id="product-list" className="products">
            {products.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>R${product.price.toFixed(2)}</p>
                  <p>Categoria: {product.category}</p>
                  <button 
                    className="add-to-cart" 
                    onClick={() => addToCart(product)}
                    title="Adicionar ao Carrinho"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Supermarket;
