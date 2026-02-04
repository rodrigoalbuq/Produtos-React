# TechStore – Catálogo de Produtos (React + Vite)

Aplicação web de catálogo de produtos com dados mockados, carregamento com spinner, componentes reutilizáveis e formulário para adicionar novos itens. Construída com React 19 e Vite 7.

## Visão Geral
- Lista produtos de eletrônicos com imagem, preço e descrição.
- Simula carregamento inicial (delay) antes de exibir os itens.
- Permite adicionar novos produtos via formulário com validação.
- Fallback de imagem quando a URL não carrega.
- Layout com `Logo` e `Footer` estilizados.

## Tecnologias
- React 19, React DOM
- Vite 7
- ESLint (JS + React Hooks + React Refresh)

## Pré-requisitos
- Node.js 18+ (LTS recomendado)
- npm 9+ ou pnpm/yarn

## Instalação e Uso
```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento
npm run dev
# Acesse a URL mostrada no terminal (ex.: http://localhost:5173)

# Build de produção
npm run build

# Visualizar build local
npm run preview
```

## Scripts disponíveis
- `dev`: inicia o Vite em modo desenvolvimento.
- `build`: gera os artefatos de produção.
- `preview`: serve o build localmente para inspeção.
- `lint`: roda o ESLint nos arquivos do projeto.

## Estrutura do Projeto
```
my-app/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx
    main.jsx
    assets/
      images/
    components/
      Footer.jsx
      FormularioProduto.jsx
      Logo.jsx
      ProdutoCard.jsx
    pages/
      CatalogoProdutos.jsx
    styles/
      CatalogoProdutos.css
      Footer.css
      FormularioProduto.css
      Logo.css
      ProdutoCard.css
```

## Componentes e Páginas
- `pages/CatalogoProdutos.jsx`: controla estado de `produtos`, simula carregamento, alterna exibição do formulário e renderiza a grade de cards.
- `components/FormularioProduto.jsx`: formulário com validação para `nome`, `preco`, `descricao` e `imagem` (opcional). Dispara `onAdicionarProduto(novoProduto)` ao enviar.
- `components/ProdutoCard.jsx`: exibe nome, preço formatado, descrição e imagem com `onError` para fallback.
- `components/Logo.jsx`: componente de branding (ícone SVG + textos).
- `components/Footer.jsx`: rodapé com links e redes sociais.

## Fluxo de Adição de Produtos
1. Clique em “Adicionar Produto” no topo do catálogo.
2. Preencha os campos obrigatórios.
3. Envie o formulário; o produto é adicionado à lista atual.
4. A imagem é opcional. Se faltar ou falhar, um placeholder será exibido.

## Personalização
- Editar dados mockados em `pages/CatalogoProdutos.jsx` (array `produtosMockados`).
- Ajustar estilos em `src/styles/*.css`.
- Substituir imagens em `src/assets/images/` ou usar URLs externas.

## Deploy
- Gere o build com `npm run build`.
- Sirva a pasta `dist/` em qualquer servidor de arquivos estáticos (Nginx, Apache, Vercel, Netlify, etc.).

## Próximos Passos (sugestões)
- Integrar com uma API real (CRUD de produtos).
- Persistir produtos adicionados (LocalStorage/IndexedDB/Backend).
- Busca e filtros por categorias, preço e texto.
- Página de detalhes do produto e carrinho.

---
Feito com React + Vite.  
Autor: Rodrigo Albuquerque.
