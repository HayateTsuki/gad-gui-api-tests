# Playwright test automation project

UI/API/Integration automation tests based on specification

## Test application

GAD🦎 - Application for learning testing GUI and API
(https://github.com/jaktestowac/gad-gui-api-demo)

### Functionality

- GUI
- API
- Tools

## Framework

- Playwright
- Documentation
- Scripts

### Tools

- VS Code
- Node.js
- GIT

### Static code analysis

- Prettier
- ESLint
- Husky

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

Run all tests with tags:

```
npx playwright test --grep "@GAD-R01-02"
```

Run all tests without tags:

```
npx playwright test --grep-invert "@GAD-R01"
```

For more usage cases look in `package.json` scripts section.
