# Calculator Project

This is a calculator built with React. It is part of a component-based design and testing practice exercise.

## Features

- Basic operations: addition, subtraction, multiplication, division, and modulo
- Decimal point support
- Sign change button (+/-)
- Display shows up to 9 characters
- Displays "ERROR" for negative results or numbers exceeding 999999999
- Uses React components under 20 lines each
- Custom React hook used to manage logic
- Styled using basic CSS

## Getting Started

### Install dependencies

```
npm install
```

### Run the project in development mode

```
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Testing

Tests are implemented using Vitest and React Testing Library.

To run the tests:

```
npm test
```

## Linting

The project uses ESLint with the Standard style guide and a custom rule that disallows semicolons.

To run the linter:

```
npm run lint
```

All JavaScript and JSX files must pass the lint check.

## Build

To build the project for production (for deployment on the class server):

```
npm run build
```

The output will be in the `/dist` folder.

## Project Structure

- `src/components`: React components (each under 20 lines)
- `src/hooks`: Custom hook for calculator logic
- `src/__tests__`: Automated tests
- `App.css`: Basic styling

## Author

Juan Cruz 23110
