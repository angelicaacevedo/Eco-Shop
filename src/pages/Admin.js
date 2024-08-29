import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import TopBarSimplicity from '../components/partials/TopBarSimplicity';
import Footer from '../components/partials/Footer';
import '../styles/admin.css';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'Produtos'));
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);

        // Salvar os produtos no localStorage
        localStorage.setItem('products', JSON.stringify(productsList));
    };

    fetchProducts();
}, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
        const newProduct = {
            name: productName,
            price: parseFloat(productPrice),
            category: productCategory,
            image: productImage,
            createdAt: serverTimestamp()
        };
        await addDoc(collection(db, 'Produtos'), newProduct);
        alert('Produto cadastrado com sucesso!');
        
        // Limpar os campos
        setProductName('');
        setProductPrice('');
        setProductCategory('');
        setProductImage('');
        
        // Atualizar a lista de produtos no localStorage
        const productsList = [...products, newProduct];
        localStorage.setItem('products', JSON.stringify(productsList));
        setProducts(productsList);
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        alert('Erro ao cadastrar produto.');
    }
};


  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, 'Produtos', id));
      const querySnapshot = await getDocs(collection(db, 'Produtos'));
      const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    } catch (error) {
      console.error('Erro ao remover produto:', error);
    }
  };

  return (
    <div>
      <TopBarSimplicity />
      <main>
        <div className="admin-container">
          <h1>Painel do Administrador</h1>
          <form id="product-form" onSubmit={handleAddProduct}>
            <div className="form-group">
              <label htmlFor="product-name">Nome do Produto:</label>
              <input type="text" id="product-name" name="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="product-price">Preço:</label>
              <input type="number" id="product-price" name="product-price" step="0.01" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="product-category">Categoria:</label>
              <input type="text" id="product-category" name="product-category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="product-image">URL da Imagem:</label>
              <input type="url" id="product-image" name="product-image" value={productImage} onChange={(e) => setProductImage(e.target.value)} required />
            </div>
            <button type="submit">Cadastrar Produto</button>
          </form>
          <div id="product-list">
            {products.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>R${product.price.toFixed(2)}</p>
                  <p>Categoria: {product.category}</p>
                  <button onClick={() => handleDeleteProduct(product.id)}>Remover</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;