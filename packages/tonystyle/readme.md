# @tonystyle/tonystyle

Main package, SSR application

[![Feature-Sliced Design][shields-fsd-image]](https://feature-sliced.design/)

## Usage

### Prerequisites

Node.js 16+

Yarn

### Scripts

`yarn` to install dependencies

`yarn develop` to start

`yarn build` to build

Check other scripts in [package.json](./package.json)

## Structure

Based on [Feature-Sliced Design](https://feature-sliced.design/) methodology, but slightly changed to match Gatsby requirements. Here's the list of changes:
- `app` directory is omitted, cause Gatsby handles all SPA/SSR initialization processes
- [`pages`](./src/pages) is application route map, and every route is just component re-exported from [`templates`](./src/pages-flat)
- [`pages-flat`](./src/pages-flat) is flat directory with all pages realization

[shields-fsd-image]: https://img.shields.io/badge/Feature--Sliced-Design-F92672?logoWidth=32&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7dfhCYMwEAXgd8UBHKHdoCOkI3SEblInaUfoCO0GbtCMkA3i5YeQH2I8OHIB/UAEeaiYx0koMhg6wVjHh8eeEVfgD0O0+xKaS0vwEuQHIvLQFGUclDUxiG6C/AhlqQNPGDrmQOrAA4Y61BV4jnzyC7U74PkFLvmFJjowoJ6AhRf4YruRP2FYC/CK9ny6zg/k/PrwijIOBSmT5Ys/uiY68Bbkw4aMz+75Q/OijIOyY2NiTroxuRcHi1BagrMg30OZeQknPcrQWNgGlSgAAAAASUVORK5CYII=
