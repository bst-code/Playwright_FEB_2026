# Framework Analysis - Playwright_FEB_2026/Framework_UI

## 1. Project Overview

This framework is a Playwright-based UI automation project using Page Object Model (POM) patterns and custom fixtures. It covers:
- login flows (`LoginPage`)
- home navigation (`HomePage`)
- product CRUD actions (`ProductPage`)
- reusable utility methods (`playwrightGenerics` / `BasePage`)
- test data in JSON
- environment-based URL selection in `playwright.config.ts`

## 2. Directory Structure

- `Fixture/`: custom `testBase.ts` defining the `pageManager` fixture.
- `pages/`: POM classes and `PageManager` for lazy instantiation.
  - `BasePage.ts` extends generic utilities.
  - `LoginPage.ts`, `HomePage.ts`, `ProductPage.ts` with locators/actions.
- `tests/`: spec files (`ProductsFeature.spec.ts`) and hooks (`hooks.ts`).
- `utills/`: shared `playwrightGenerics.ts` with helper methods (click, hover, screenshot, alerts, dropdowns, navigation, element state)
- `testDatas/`: `data.json` sample test data.
- `types/`: typed interfaces for test data.
- `playwright.config.ts`: test settings, baseURL from `.env`, video+trace configs.

## 3. POM Design Validation

### What is good
- Pages encapsulate locators and interactions.
- Page classes inherit `BasePage` and shared generic methods.
- `PageManager` handles object construction with lazy initialization.
- Tests use `pageManager` fixture to avoid direct page class initialization.
- Config separate from tests and supports multiple environments (`QA`, `STG`, default).

### What's improved
- added typed test data via `types/testDataTypes.ts`
- replaced hardcoded wait (`waitForTimeout`) with explicit `waitForLoadState('networkidle')` in hooks
- improved error handling in login method
- fullyParallel enabled in config for speed

## 4. Major Features Implemented

- Reusable selectors and actions:
  - `enterText`, `clearText`, `clickElement`, `hoverElement`, etc.
  - dropdown selects by label, index, value.
  - dialog handling for alert/confirm/prompt.
  - screenshot capture by page/element.
  - navigation controls (back/forward/refresh/close/getTitle/getUrl).
- Utility `waitForElementState` for `visible`, `hidden`, `enabled`, `disabled`, `editable`.

## 5. Improvements Recommendations

1. Use stable selectors (`data-testid`) instead of text-based locators.
2. Centralize selectors in one place (page locators) with constant naming.
3. Add a `global` utility for reports and screenshots on failure.
4. Add unit tests for helpers (`playwrightGenerics`) with Jest or Playwright test.
5. Add explicit README and contribution guidelines.
6. Add logging wrapper instead of console logs.

## 6. How to Run

1. set environment variables in `.env` (ENV=QA/STG or default)
2. `npm install`
3. `npx playwright test`

## 7. Notes

- `tests/hooks.ts` uses `beforeEach` to navigate to `/login` and `afterEach` to wait for page load.
- Data model in JSON is now consistent with TypeScript via `TestData` interface (was previously nested under `Data` incorrectly).
- If you want, I can also add `loadData()` helper to keep JSON strong typed and avoid `any`.
