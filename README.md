# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Naga Digital Resume

  Minimal React + Vite frontend with a TypeScript Express backend.

  ## Run locally

  In one terminal:

  ```sh
  npm run dev
  ```

  In a second terminal:

  ```sh
  npm --prefix backend run dev
  ```

  Open `http://localhost:5173`. Vite proxies `/api` requests to Express on port 3000.

  ## Build

  ```sh
  npm run build
  npm --prefix backend run build
  ```

