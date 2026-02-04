# Produtos React

Aplicação React (Vite) localizada em `my-app`

## Rodando localmente

```bash
cd my-app
npm install
npm run dev
```

## Build

```bash
cd my-app
npm run build
```

Os arquivos estáticos serão gerados em `my-app/dist`.

## Deploy no GitHub Pages

- O workflow em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila e publica automaticamente ao fazer push na branch `main`.
- O `vite.config.js` define `base: '/Produtos-React/'` para servir corretamente os assets no Pages.
- A página publicada ficará em: https://rodrigoalbuq.github.io/Produtos-React/
  - Após o primeiro deploy, o link acima ficará ativo.

### Passos para ativar o Pages

1. No GitHub, acesse Settings → Pages.
2. Em "Build and deployment", selecione "Source: GitHub Actions".
3. Salve. A cada push na `main`, o workflow fará o deploy.

## Estrutura

- `my-app/` — código-fonte da aplicação
  - `src/` — componentes, páginas e estilos
  - `index.html`, `vite.config.js`, `package.json`

## Documentação da aplicação

Veja instruções detalhadas em [my-app/README.md](my-app/README.md).
