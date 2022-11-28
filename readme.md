# Tony.Style

Business card, CV, personal blog, petproject playground

[![Feature-Sliced Design][shields-fsd-image]](https://feature-sliced.design/)

# Structure

Project is monorepo with packages managed by [yarn](https://classic.yarnpkg.com/) and [nx](https://nx.dev/)

Package list

- [tonystyle](./packages/tonystyle) (main package, application entry point, organized
  with [FSD](https://feature-sliced.design/))
- [effector-media-query](./packages/effector-media-query) (effector wrapper for media queries matching)
- [mdi-icons](./packages/mdi-icons) (custom SVG icons, compatible with `@mdi/react`)
- [background-pattern](./packages/background-pattern)

Hierarchy is simple: `tonystyle` is dependent on all secondary packages.

# Tech stack

Whole project

- [node.js v18](https://nodejs.org/en/)
- package management [yarn v1](https://classic.yarnpkg.com/)
- monorepo management: [nx](https://nx.dev/)

Application

- rendered by [react](https://reactjs.org/)
- controlled by [effector](https://effector.dev/)
- styled with [stitches](https://stitches.dev/)
- built by [gatsby](https://gatsbyjs.com/)

# Getting started

Prerequisites

- Node.js 18
- Yarn v1

Commands

| Command        | Action                                          |
|----------------|-------------------------------------------------|
| `yarn install` | Install dependencies and link monorepo packages |
| `nx develop`   | Start local dev server                          |
| `nx format`    | Reformat code                                   |
| `nx lint`      | Lint code                                       |
| `nx lint`      | Run test cases                                  |
| `nx build`     | Build project                                   |
| `nx serve`     | Preview build locally                           |
| `nx clean`     | Cleanup cache and build directories             |

[shields-fsd-image]: https://img.shields.io/badge/Feature--Sliced-Design-FFF?logoWidth=32&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7dfhCYMwEAXgd8UBHKHdoCOkI3SEblInaUfoCO0GbtCMkA3i5YeQH2I8OHIB/UAEeaiYx0koMhg6wVjHh8eeEVfgD0O0+xKaS0vwEuQHIvLQFGUclDUxiG6C/AhlqQNPGDrmQOrAA4Y61BV4jnzyC7U74PkFLvmFJjowoJ6AhRf4YruRP2FYC/CK9ny6zg/k/PrwijIOBSmT5Ys/uiY68Bbkw4aMz+75Q/OijIOyY2NiTroxuRcHi1BagrMg30OZeQknPcrQWNgGlSgAAAAASUVORK5CYII=
