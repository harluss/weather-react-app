# Fierce Mild - Some Weather App

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/harluss/weather-react-app/CI?logo=GitHub)
![Codecov](https://img.shields.io/codecov/c/github/harluss/weather-react-app?logo=Codecov)
[![GitHub Workflow Status](https://api.netlify.com/api/v1/badges/4eaf7a51-63bc-475d-a8d3-b00726d7df6d/deploy-status)](https://app.netlify.com/sites/fiercemild/deploys)

This is a React/Serverless Function app.

Main purpose of this project is to start learning React by creating simple Weather App, setting up git-hooks, tests, CI/CD with GitHub Actions and Netlify hosting.

### Features

- React with hooks
- Git-hooks with husky and lint-staged
  - pre-commit: linting with ESLint and Prettier
  - pre-push: tests
- Tests with React Testing Library and Jest
- Styled Components
- Custom hook for fetching data with Axios
- Netlify serverless function to call external weather API
- Netlify deployment
- CI workflow with GitHub Actions (lint, test, build)

### Setup

Install packages with:

```
yarn
```

Run locally with Netlify function:

```
yarn netlify
```

#### NOTE:

[OpenWeather](https://openweathermap.org/api) API key required for the serverless function to fetch data - check `.env.sample`.
