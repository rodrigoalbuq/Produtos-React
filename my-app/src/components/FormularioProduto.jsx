import React, { useState } from 'react';
import '../styles/FormularioProduto.css';

const FormularioProduto = ({ onAdicionarProduto }) => {
    const [formData, setFormData] = useState({
        nome: '',
        preco: '',
        descricao: '',
        imagem: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Limpar erro do campo quando o usuário começar a digitar
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nome.trim()) {
            newErrors.nome = 'Nome do produto é obrigatório';
        }

        if (!formData.preco.trim()) {
            newErrors.preco = 'Preço é obrigatório';
        } else if (isNaN(formData.preco) || parseFloat(formData.preco) <= 0) {
            newErrors.preco = 'Preço deve ser um número válido maior que 0';
        }

        if (!formData.descricao.trim()) {
            newErrors.descricao = 'Descrição é obrigatória';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const novoProduto = {
                id: Date.now(), // ID simples baseado em quando ocorreu
                nome: formData.nome.trim(),
                preco: parseFloat(formData.preco),
                descricao: formData.descricao.trim(),
                imagem: formData.imagem.trim() || null
            };

            onAdicionarProduto(novoProduto);

            // Limpar formulário após envio
            setFormData({
                nome: '',
                preco: '',
                descricao: '',
                imagem: ''
            });

            alert('Produto adicionado com sucesso!');
        }
    };

    return (
        <div className="formulario-container">
            <h2>Adicionar Novo Produto</h2>
            <form onSubmit={handleSubmit} className="formulario-produto">
                <div className="campo-grupo">
                    <label htmlFor="nome">Nome do Produto *</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className={errors.nome ? 'error' : ''}
                        placeholder="Digite o nome do produto"
                    />
                    {errors.nome && <span className="error-message">{errors.nome}</span>}
                </div>

                <div className="campo-grupo">
                    <label htmlFor="preco">Preço *</label>
                    <input
                        type="number"
                        id="preco"
                        name="preco"
                        value={formData.preco}
                        onChange={handleChange}
                        step="0.01"
                        min="0"
                        className={errors.preco ? 'error' : ''}
                        placeholder="0.00"
                    />
                    {errors.preco && <span className="error-message">{errors.preco}</span>}
                </div>

                <div className="campo-grupo">
                    <label htmlFor="descricao">Descrição *</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        rows="4"
                        className={errors.descricao ? 'error' : ''}
                        placeholder="Descreva o produto"
                    />
                    {errors.descricao && <span className="error-message">{errors.descricao}</span>}
                </div>

                <div className="campo-grupo">
                    <label htmlFor="imagem">URL da Imagem (opcional)</label>
                    <input
                        type="url"
                        id="imagem"
                        name="imagem"
                        value={formData.imagem}
                        onChange={handleChange}
                        placeholder="https://exemplo.com/imagem.jpg"
                    />
                </div>

                <button type="submit" className="btn-adicionar">
                    Adicionar Produto
                </button>
            </form>
        </div>
    );
};

export default FormularioProduto;