# Tony.Style

Business card, CV, personal blog, petproject playground

[![Feature-Sliced Design][shields-fsd-image]](https://feature-sliced.design/)
![Tests: no](https://img.shields.io/badge/tests-no-red?style=flat-square)
![Coverage: 146%](https://img.shields.io/badge/coverage-146%25-green?style=flat-square)
![Build: sometimes](https://img.shields.io/badge/build-sometimes-yellow?style=flat-square)

# Getting started

Prerequisites

- Node.js 18
- Yarn v1

Commands

| Command        | Action                                          |
|----------------|-------------------------------------------------|
| `yarn install` | Install dependencies and link monorepo packages |
| `yarn develop` | Start local dev server                          |
| `yarn format`  | Reformat code                                   |
| `yarn lint`    | Lint code                                       |
| `yarn test`    | Run test cases                                  |
| `yarn build`   | Build project                                   |
| `yarn serve`   | Preview build locally                           |
| `yarn clean`   | Cleanup cache and build directories             |

# Boring technical details

Project is monorepo with simple hierarchy: `tonystyle` depends on all secondary packages.

### Whole project

- [node.js v18](https://nodejs.org/en/)
- package management [yarn v1](https://classic.yarnpkg.com/)
- monorepo management: [nx](https://nx.dev/) and [lerna](https://lerna.js.org/)

### [tonystyle](./packages/tonystyle)

Main package, application entry point

- structured and organized with [Feature-Sliced Design](https://feature-sliced.design/)
- rendered by [react](https://reactjs.org/)
- controlled by [effector](https://effector.dev/)
- styled with [stitches](https://stitches.dev/)
- built via [vite](https://vitejs.dev/)

### [effector-browser-api](./packages/effector-browser-api)

Effector wrapper for media queries matching

### [effector-ssr-helpers](./packages/effector-ssr-helpers)

Wrappers for handling side-effects in effector

### [graphql-static-server](./packages/graphql-static-server)

Server for delivering static data as graphql

### [react-ssr-helpers](./packages/react-ssr-helpers)

React utilities for SSR-related conditional rendering and side-effect handling

# Development

If you have any suggestions, feel free to open discussion, create pull request or call me in the middle of the night. No
rules, no linters, no cry.

[shields-fsd-image]: https://img.shields.io/badge/Feature--Sliced-Design-FFF?logoWidth=20&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwSURBVHgB7dKxCQAACAPBxP13VnsLCxEEcxs8CT1hyHAFn+UwoaF1luhslXKW3MkJjdwgCeNkJQsAAAAASUVORK5CYII=
