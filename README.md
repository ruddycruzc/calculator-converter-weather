# Calculator Converter Weather

A modern Angular 21 application that combines a calculator, a currency converter and a weather dashboard into a single responsive interface.

This project is being developed as part of the Full Stack Java Bootcamp, adapting the original Vue 3 requirements to Angular 21 while following modern Angular architecture and best practices.

---

## Overview

Calculator Converter Weather is a single-page application designed to demonstrate Angular development using a feature-based architecture, reusable services, Angular Signals and external REST APIs.

The application integrates three core functionalities into one interface:

* Basic Calculator
* Currency Converter
* Weather Information

The project is built with scalability, maintainability and clean architecture in mind, making it suitable both as a bootcamp assignment and as a portfolio project.

---

## Features

### Calculator

* Addition
* Subtraction
* Multiplication
* Division
* Decimal numbers
* Clear Entry (CE)
* Error handling
* Keyboard-style interface

### Currency Converter

* Euro (€)
* US Dollar ($)
* Japanese Yen (¥)
* Real-time exchange rates
* External API integration

### Weather

* Current temperature
* Weather conditions
* Dynamic weather image based on StateSky
* Asturias or national information

### Memory

* M+
* MR
* MC
* Persistent storage using localStorage
* Angular Signals state management

---

## Technologies

<p align="left">

<img src="https://skillicons.dev/icons?i=angular,typescript,tailwind,css,html,nodejs,npm,git,github,vscode" />

</p>

| Technology      | Purpose                  |
| --------------- | ------------------------ |
| Angular 21      | Frontend Framework       |
| TypeScript      | Programming Language     |
| Tailwind CSS    | Utility-first styling    |
| CSS             | Custom component styling |
| Angular Signals | State management         |
| HttpClient      | REST API communication   |
| localStorage    | Memory persistence       |
| Git             | Version control          |
| GitHub          | Repository hosting       |
| Playwright      | End-to-End Testing       |
| Angular Testing | Unit Testing             |

---

## External APIs

### Currency API

* CurrencyFreaks API

Used to retrieve real-time exchange rates.

### Weather API

* El Tiempo API

Used to display weather information and weather state images.

---

## Architecture

The project follows a feature-based architecture inspired by enterprise Angular applications.

```text
src/
└── app
    ├── core
    │   ├── constants
    │   ├── models
    │   ├── services
    │   └── utils
    │
    ├── features
    │   ├── calculator
    │   ├── converter
    │   ├── weather
    │   └── memory
    │
    ├── shared
    │   ├── components
    │   ├── directives
    │   └── pipes
    │
    ├── layout
    │
    ├── app.routes.ts
    └── app.config.ts
```

---

## Project Structure

```
core
```

Contains application-wide services, models, constants and utilities.

```
features
```

Contains each functional module of the application.

```
shared
```

Reusable UI components, directives and pipes.

```
layout
```

Application layout and page composition.

---

## State Management

Instead of Pinia (required in the original Vue version), this Angular implementation uses:

* Angular Signals
* Dependency Injection
* MemoryService
* localStorage

This approach provides reactive state management while keeping the application lightweight and aligned with Angular best practices.

---

## Styling

The project follows a hybrid styling strategy.

### Tailwind CSS

Used for:

* Layout
* Responsive design
* Spacing
* Flexbox/Grid
* Utility classes

### CSS

Used for:

* Custom animations
* Calculator buttons
* Component-specific styles
* Fine visual adjustments

---

## Responsive Design

The application is designed using a Mobile First approach.

Layouts will progressively adapt for:

* Mobile
* Tablet
* Desktop

All features remain accessible within a single page.

---

## Development Workflow

The project follows a Git Flow inspired workflow.

```
main
│
└── develop
    │
    ├── feature/readme
    ├── feature/project-structure
    ├── feature/calculator
    ├── feature/converter
    ├── feature/weather
    ├── feature/memory
    └── feature/testing
```

Development rules:

* Feature branches only
* Atomic commits
* Descriptive commit messages
* Build verification before merge
* Continuous documentation

---

## Installation

Clone the repository.

```bash
git clone https://github.com/your-username/calculator-converter-weather.git
```

Move into the project.

```bash
cd calculator-converter-weather
```

Install dependencies.

```bash
npm install
```

Run the application.

```bash
ng serve
```

Build the project.

```bash
ng build
```

---

## Available Scripts

| Command  | Description              |
| -------- | ------------------------ |
| ng serve | Start development server |
| ng build | Build production version |
| ng test  | Run unit tests           |
| ng e2e   | Run end-to-end tests     |

---

## Roadmap

* [x] Project setup
* [ ] Initial documentation
* [ ] Project architecture
* [ ] Calculator module
* [ ] Currency converter
* [ ] Weather module
* [ ] Memory service
* [ ] Responsive design
* [ ] Unit testing
* [ ] End-to-end testing
* [ ] Deployment
* [ ] Final documentation

---

## Future Improvements

Possible future enhancements include:

* Scientific calculator mode
* Additional currencies
* Theme switcher
* Multiple language support
* Currency history
* Offline support
* Progressive Web App (PWA)

---

## Author

**Ruddy Cruz Campoverde**

GitHub

https://github.com/ruddycruzc

LinkedIn

https://www.linkedin.com/ruddycruzc

---

## License

This project has been developed for educational purposes as part of the Full Stack Java Bootcamp.
