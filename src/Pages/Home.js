import React from 'react';
import TopBar from '../components/partials/TopBar';
import Footer from '../components/partials/Footer';
import '../Styles/styles.css';

const Home = () => {
  return (
    <div>
      <TopBar />
      <main>
        <section className="apresentacao">
          <h1>Bem-vindo à EcoShop!</h1>
          <p>Somos uma cooperativa dedicada a fornecer produtos orgânicos de alta qualidade diretamente para você. Nosso compromisso é com a saúde, sustentabilidade e o apoio aos agricultores locais.</p>
          <p>Explore nossa variedade de frutas, vegetais, carnes, peixes, bebidas e muito mais. Junte-se a nós em nossa missão de promover um estilo de vida saudável e sustentável.</p>
        </section>
        <section className="categorias-populares">
          <div className="section-header">
            <h2>Categorias Populares</h2>
            <a href="#">Ver todos →</a>
          </div>
          <div className="categories">
            <div className="category">
              <img src="/assets/frutas.png" alt="Frutas" />
              <span>Frutas</span>
            </div>
            <div className="category">
              <img src="/assets/vegetais.png" alt="Vegetais" />
              <span>Vegetais</span>
            </div>
            <div className="category">
              <img src="/assets/carne_peixe.png" alt="Carne e Peixes" />
              <span>Carne e Peixes</span>
            </div>
            <div className="category">
              <img src="/assets/bebidas.png" alt="Bebidas" />
              <span>Bebidas</span>
            </div>
            <div className="category">
              <img src="/assets/outros.png" alt="Outros" />
              <span>Outros</span>
            </div>
          </div>
        </section>
        <section className="produtos-populares">
          <div className="section-header">
            <h2>Produtos Populares</h2>
            <a href="#">Ver todos →</a>
          </div>
          <div className="products" id="products-container">
            {/* Aqui você pode mapear os produtos populares */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;