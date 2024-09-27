# React Password Input Playground

This repository was created for one of the Lace Tech Talks.

It tries to show different variations of password inputs that could be implemented in our applications and works as a sandbox to test potential memory leaks exposing the password.

[Watch the Tech talk](https://around.co/playback/24efb388-9831-4f45-9542-6aac2bc8b2d4?sharedKey=ee355d87-de3e-40f1-af87-7b3e0bca7f05) (requires access rights)

> [!NOTE]
> Related issues:
>
> - https://github.com/facebook/react/issues/23214
> - https://github.com/facebook/react/issues/17581
> - https://issues.chromium.org/issues/40109482

There are 2 branches: `main` and `react17` (current Lace)

> [!IMPORTANT]
> This not as complex as the real-world application could be. If you have better proposals or examples worth sharing, please contribute. :)

## How to run

If you have `corepack` enabled you should be able to start the app in 2 simple steps.

1. `pnpm install`
2. `pnpm dev`

## Bootstrapped using Vite with React template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
