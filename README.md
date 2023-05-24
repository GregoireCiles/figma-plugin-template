# Figma Plugin React Template

This template contains the react example as shown on
[Figma Docs](https://www.figma.com/plugin-docs/intro/), with some structural changes and extra
tooling.

## Quickstart

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose
  `manifest.json` file from this repo.

⭐ To change the UI of your plugin (the react code), start editing [app.tsx](./src/app/app.tsx).  
⭐ To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## Toolings

This repo is using:

- React + Vite + esbuild
- TypeScript
- Prettier
- TailwindCSS
- SASS
