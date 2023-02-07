# Tony.Style

Business card, CV, personal blog, petproject playground

[![Feature-Sliced Design][shields-fsd-image]](https://feature-sliced.design/)

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

[//]: # (TODO built with construction crane)

### [effector-browser-api](./packages/effector-browser-api)

Effector wrapper for media queries matching

### [effector-ssr-helpers](./packages/effector-ssr-helpers)

[//]: # (TODO write something good)

### [graphql-static-server](./packages/graphql-static-server)

[//]: # (TODO write something good)

### [react-ssr-helpers](./packages/react-ssr-helpers)

[//]: # (TODO write something good)

# Development

If you have any suggestions, feel free to open discussion, create pull request or call me in the middle of the night. No
rules, no linters, no cry.

[shields-fsd-image]: https://img.shields.io/badge/Feature--Sliced-Design-FFF?logoWidth=32&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7dfhCYMwEAXgd8UBHKHdoCOkI3SEblInaUfoCO0GbtCMkA3i5YeQH2I8OHIB/UAEeaiYx0koMhg6wVjHh8eeEVfgD0O0+xKaS0vwEuQHIvLQFGUclDUxiG6C/AhlqQNPGDrmQOrAA4Y61BV4jnzyC7U74PkFLvmFJjowoJ6AhRf4YruRP2FYC/CK9ny6zg/k/PrwijIOBSmT5Ys/uiY68Bbkw4aMz+75Q/OijIOyY2NiTroxuRcHi1BagrMg30OZeQknPcrQWNgGlSgAAAAASUVORK5CYII=
