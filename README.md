# Playwright test automation project

UI/API/Integration automation tests using Playwright framework

## Test application

GAD🦎 - Application for learning testing GUI and API
(https://github.com/jaktestowac/gad-gui-api-demo)

### Tests objectives

- e2e - UI and API
- integration

### Framework

- Playwright

### Technologies

- Node.js
- TypeScript

### Tools

- Prettier
- ESLint

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- setup husky with: `npx husky install`

## Use

Run all tests:

```
npx playwright test
```

For more usage cases look in `package.json` scripts section.
