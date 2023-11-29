# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Classe-FS17 - Progetto Team1

Creazione di un e-commerce ideato da noi.


# Membri:

- Stefano Sala
- Eno Mario Piselli
- Bjorn Agbalog
- Adolfo Gomez
- Stefan Petrea


# Bacheca:

<https://trello.com/b/63wQYW9E/progetto-team-1>


# Presentazione

Creazione di un e-commerce specializzato nella vendita di bevande alcoliche d'alta qualità.

# Branch Naming:

- atom-component/”nome componente atomo”
- component/”nome componente”
- bugfix/”nome componente da fixare”
- docu/”nome file modificato”
- style/”nome componente”
- feature/”nome componente JS”
- refactor/"nome componente"


# Commit Naming:

- component: - in caso di creazione componente
- style: - in caso di modifiche o creazioni solo su CSS
- fix: - per bug fixing
- docs: - in caso di modifica documentazione
- feat: - in caso di creazione feature
- refactor: - in caso di refactor del codice quando non c'è un bug


# Class Naming:

- In inglese
- atom-nome componente
- contenitore-nome componente


# Component Naming:

- “nome componente” (atom)
- header/footer-”nome componente”
- “nome pagina”-”nome componente”