# Playwright Login Tests

This project is part of my QA Automation learning journey.

A simple Playwright automation project created to learn UI test automation with Playwright, TypeScript and the Page Object Model (POM).

## Technologies

- Playwright
- TypeScript
- Node.js

## Running the project

```bash
npm install
npx playwright test
```

## Notes

- The login test is provided as an example and is skipped by default (`test.skip`).
- Placeholder credentials are used to avoid exposing sensitive information.

## Learning Goals

- Understand the Playwright project structure
- Learn the Playwright API
- Write UI tests with assertions
- Apply the Page Object Model (POM)
- Build clean and maintainable test code

## Planned Improvements

- Store test credentials using environment variables (`.env`)
- Add negative login test scenarios
- Improve assertions with more stable locators
- Expand test coverage