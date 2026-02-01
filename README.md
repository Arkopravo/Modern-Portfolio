## Modern Portfolio

A minimal personal portfolio built with React + Vite and Tailwind CSS. This repository contains a lightweight, fast development setup with HMR, an accessible UI, and a small component structure to showcase projects, skills, and contact information.

## Features

- Fast development with Vite and React
- Tailwind CSS for utility-first styling
- Responsive sections: hero, about, projects, skills, contact
- Light/dark theme toggle and subtle background effects
- Accessible toast notifications using Radix UI

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Radix UI (toast)
- Lucide icons

## Quick Start

Prerequisites: Node.js 16+ and npm

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

Linting

```bash
npm run lint
```

## Project Structure

- `index.html` — app entry
- `src/` — source files
	- `main.jsx` — app bootstrap and router
	- `App.jsx` — top-level layout
	- `components/` — UI sections and shared components
	- `pages/` — route pages (Home, NotFound)
	- `assets/` — images and static assets
- `public/` — static files (served at root)
- `vite.config.js` — Vite configuration
- `package.json` — scripts and dependencies

## Deployment

This project builds a static site. Deploy the contents of the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.). For GitHub Pages, you can use a deployment action or serve the `dist` folder from a branch configured in repo settings.

## Customization

- Replace images in `public/` and `src/assets/`.
- Update copy in `src/pages` and `src/components` to match your content.
- Add new projects to the `public/projects/` folder and update the `ProjectsSection` component.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a PR or issue.

## Author

Arkopravo — personalize this README with your contact links (Twitter, LinkedIn, email).

## License

This project currently has no license file. Add a `LICENSE` (for example, MIT) if you want to make usage terms explicit.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
