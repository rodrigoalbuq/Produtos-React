import React, { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import FormularioProduto from '../components/FormularioProduto';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import '../styles/CatalogoProdutos.css';

const CatalogoProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Dados mockados para simular uma API
  const produtosMockados = [
    {
      id: 1,
      nome: 'Smartphone Samsung Galaxy S23',
      preco: 2899.99,
      descricao: 'Smartphone Android com 128GB de armazenamento, câmera tripla de 50MP e tela AMOLED de 6.1 polegadas.',
      imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      nome: 'Notebook Dell Inspiron 15',
      preco: 3499.99,
      descricao: 'Notebook com processador Intel Core i7, 16GB RAM, SSD 512GB e placa de vídeo dedicada.',
      imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      nome: 'Fone de Ouvido Sony WH-1000XM4',
      preco: 1299.99,
      descricao: 'Fone de ouvido bluetooth com cancelamento de ruído ativo, bateria de 30 horas e qualidade de áudio premium.',
      imagem: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      nome: 'Smart TV LG 55" 4K',
      preco: 2199.99,
      descricao: 'Smart TV LED 4K com 55 polegadas, HDR, WebOS e controle por voz integrado.',
      imagem: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      nome: 'Câmera Canon EOS R6',
      preco: 8999.99,
      descricao: 'Câmera mirrorless full-frame com 20.1MP, gravação de vídeo 4K e estabilização de imagem.',
      imagem: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      nome: 'Tablet iPad Air',
      preco: 4299.99,
      descricao: 'Tablet com tela Liquid Retina de 10.9 polegadas, chip M1 e compatibilidade com Apple Pencil.',
      imagem: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop'
    },
    {
      id: 7,
      nome: 'PlayStation 5',
      preco: 4499.99,
      descricao: 'Console de videogame com SSD ultra-rápido, controle DualSense e ray tracing para jogos 4K.',
      imagem: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=200&fit=crop'
    },
    {
      id: 8,
      nome: 'Apple MacBook Pro M3',
      preco: 12999.99,
      descricao: 'Notebook premium com chip M3, tela Retina 14", 16GB RAM e SSD 512GB para profissionais.',
      imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop'
    },
    {
      id: 9,
      nome: 'Smartwatch Apple Watch Series 9',
      preco: 2799.99,
      descricao: 'Relógio inteligente com GPS, monitor de saúde, resistente à água e tela Always-On.',
      imagem: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=300&h=200&fit=crop'
    },
    {
      id: 10,
      nome: 'Mouse Gamer Logitech G Pro X',
      preco: 399.99,
      descricao: 'Mouse gamer sem fio com sensor HERO 25K, 25.600 DPI e design ambidestro para eSports.',
      imagem: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop'
    },
    {
      id: 11,
      nome: 'Teclado Mecânico Keychron K2',
      preco: 649.99,
      descricao: 'Teclado mecânico sem fio com switches Blue, RGB, layout 75% e compatível com Mac/PC.',
      imagem: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop'
    },
    {
      id: 12,
      nome: 'Monitor LG UltraWide 34"',
      preco: 2199.99,
      descricao: 'Monitor ultrawide QHD 3440x1440, IPS, 144Hz, ideal para produtividade e gaming.',
      imagem: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop'
    },
    {
      id: 13,
      nome: 'Echo Dot 5ª Geração',
      preco: 299.99,
      descricao: 'Smart speaker com Alexa, controle de casa inteligente e qualidade de som melhorada.',
      imagem: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=300&h=200&fit=crop'
    },
    {
      id: 14,
      nome: 'Drone DJI Mini 3',
      preco: 3499.99,
      descricao: 'Drone compacto com câmera 4K, gimbal 3 eixos, 38 minutos de voo e controle remoto.',
      imagem: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=200&fit=crop'
    },
    {
      id: 15,
      nome: 'Caixa de Som JBL Charge 5',
      preco: 749.99,
      descricao: 'Caixa de som portátil bluetooth, à prova d\'água, 20h de bateria e powerbank USB.',
      imagem: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop'
    },
    {
      id: 16,
      nome: 'GoPro Hero 12 Black',
      preco: 2299.99,
      descricao: 'Câmera de ação 5.3K com estabilização HyperSmooth, resistente à água e controle por voz.',
      imagem: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop'
    },
    {
      id: 17,
      nome: 'SSD Samsung 980 PRO 1TB',
      preco: 899.99,
      descricao: 'SSD NVMe M.2 de alta performance com 7.000 MB/s de leitura para PCs e consoles.',
      imagem: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop'
    },
    {
      id: 18,
      nome: 'Roteador Wi-Fi 6 TP-Link',
      preco: 599.99,
      descricao: 'Roteador dual-band AX1800 com Wi-Fi 6, cobertura para casas grandes e controle por app.',
      imagem: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=300&h=200&fit=crop'
    }
  ];

  // Simular carregamento inicial dos produtos
  useEffect(() => {
    const carregarProdutos = async () => {
      setIsLoading(true);
      
      // Simular delay de uma requisição API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setProdutos(produtosMockados);
      setIsLoading(false);
    };

    carregarProdutos();
  }, []);

  const handleAdicionarProduto = (novoProduto) => {
    setProdutos(prevProdutos => [...prevProdutos, novoProduto]);
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>Carregando produtos...</h2>
        <p>Por favor, aguarde enquanto buscamos os melhores produtos para você.</p>
      </div>
    );
  }

  return (
    <div className="catalogo-container">
      <header className="catalogo-header">
        <Logo />
        <h1>Catálogo de Produtos</h1>
        <p>Descubra nossa seleção de produtos incríveis</p>
        <button 
          onClick={toggleForm} 
          className="btn-toggle-form"
        >
          {showForm ? 'Ocultar Formulário' : 'Adicionar Produto'}
        </button>
      </header>

      {showForm && (
        <FormularioProduto 
          onAdicionarProduto={handleAdicionarProduto}
        />
      )}

      <div className="produtos-info">
        <h2>Produtos Disponíveis ({produtos.length})</h2>
      </div>

      <div className="produtos-grid">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <ProdutoCard 
              key={produto.id} 
              produto={produto} 
            />
          ))
        ) : (
          <div className="no-products">
            <h3>Nenhum produto encontrado</h3>
            <p>Adicione alguns produtos para começar!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CatalogoProdutos;