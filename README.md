# Front-End Assignment - Kiratech

## Project Overview
This project is a Vue 3 front-end application developed for a Kiratech assignment. It is built using modern tools and libraries such as Vue 3, Pinia, Vue Router, and Tailwind CSS. The project leverages Vite for fast builds and development, along with TypeScript for type safety.

---

## Scripts
Below are the available npm scripts:

### `npm run dev`
Starts the development server using Vite.
- Open your browser and navigate to `http://localhost:3000` to preview the app.

### `npm run build`
Builds the project for production. The output will be located in the `dist` directory.
- This script also performs type-checking before building the app.

### `npm run type-check`
Runs TypeScript type-checking to ensure type safety.
- Uses `vue-tsc` to validate `.vue` and `.ts` files.

### `npm run deploy`
Deploys the production build to GitHub Pages.
- Uses the `gh-pages` package to publish the `dist` directory.

---

## Dependencies
### Core Dependencies:
- **`vue`**: The Vue 3 framework for building user interfaces.
- **`pinia`**: State management for Vue.
- **`vue-router`**: For managing application routing.
- **`moment`**: A library for date and time manipulation.

### Development Dependencies:
- **`@vitejs/plugin-vue`**: Vite plugin for Vue 3.
- **`@tailwindcss/postcss`**: PostCSS plugin for Tailwind CSS integration.
- **`autoprefixer`**: Automatically adds vendor prefixes to CSS.
- **`tailwindcss`**: A utility-first CSS framework for rapid UI development.
- **`eslint`**: Linting tool for maintaining code quality.
- **`typescript`**: Adds static typing to JavaScript.
- **`vite`**: Build tool for fast front-end development.
- **`vue-tsc`**: Type-checking for Vue components.
- **`gh-pages`**: Tool for deploying projects to GitHub Pages.

---

## File Structure
Here is a general structure of the project:
```
├── src
│   ├── assets         # Static assets (images, CSS, etc.)
│   ├── components     # Vue components
│   ├── router         # Vue Router configuration
│   ├── store          # Pinia stores
│   ├── views          # Page-level components
│   └── main.ts        # Application entry point
├── public             # Public assets (served directly)
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── package.json       # Project dependencies and scripts
```

---

## Tailwind CSS Configuration
The project is configured to use Tailwind CSS with PostCSS. Make sure to include the following in your main CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### PostCSS Configuration (`postcss.config.js`):
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

### Tailwind CSS Configuration (`tailwind.config.js`):
```javascript
module.exports = {
  content: ['./src/**/*.{html,vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Deployment
The application can be deployed to GitHub Pages using the `npm run deploy` command.

### Steps for Deployment:
1. Run `npm run build` to create a production build.
2. Run `npm run deploy` to publish the `dist` folder to GitHub Pages.

---

## Development Environment
- **Node.js Version**: Ensure you are using Node.js 16 or later.
- **Package Manager**: Use npm or yarn to manage dependencies.


