import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import './Admin.css';

const Admin = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsCollection = await db.collection('Produtos').orderBy('createdAt', 'desc').get();
    setProducts(productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('Produtos').add({
        name: productName,
        price: parseFloat(productPrice),
        category: productCategory,
        image: productImage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert('Produto cadastrado com sucesso!');
      fetchProducts();
      setProductName('');
      setProductPrice('');
      setProductCategory('');
      setProductImage('');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await db.collection('Produtos').doc(id).delete();
      fetchProducts();
    } catch (error) {
      console.error('Erro ao remover produto:', error);
    }
  };

  const handleEdit = (product) => {
    setProductName(product.name);
    setProductPrice(product.price);
    setProductCategory(product.category);
    setProductImage(product.image);
    handleDelete(product.id);
  };

  return (
    <div className="admin-container">
      <h1>Painel do Administrador</h1>
      <form id="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product-name">Nome do Produto:</label>
          <input type="text" id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="product-price">Preço:</label>
          <input type="number" id="product-price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} step="0.01" required />
        </div>
        <div className="form-group">
          <label htmlFor="product-category">Categoria:</label>
          <input type="text" id="product-category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="product-image">URL da Imagem:</label>
          <input type="url" id="product-image" value={productImage} onChange={(e) => setProductImage(e.target.value)} required />
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
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => handleDelete(product.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;