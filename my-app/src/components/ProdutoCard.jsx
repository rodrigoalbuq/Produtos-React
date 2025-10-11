import React from 'react';
import '../styles/ProdutoCard.css';

const ProdutoCard = ({ produto }) => {
    const { nome, preco, imagem, descricao } = produto;

    return (
        <div className="produto-card">
            <div className="produto-imagem">
                <img
                    src={imagem || '/placeholder-product.jpg'}
                    alt={nome}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Produto';
                    }}
                />
            </div>
            <div className="produto-info">
                <h3 className="produto-nome">{nome}</h3>
                <p className="produto-preco">R$ {parseFloat(preco).toFixed(2)}</p>
                <p className="produto-descricao">{descricao}</p>
                <button className="btn-detalhes">Ver Detalhes</button> {/* Para fins visuais, botão sem funcionalidade no momento para futuras implementações */}
            </div>
        </div>
    );
};

export default ProdutoCard;