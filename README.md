# tictactoe01

![Linting](https://github.com/renanmav/tictactoe01/workflows/Linting/badge.svg)
![Tests](https://github.com/renanmav/tictactoe01/workflows/Tests/badge.svg)
[![codecov](https://codecov.io/gh/renanmav/tictactoe01/branch/master/graph/badge.svg?token=8UJpxM1n13)](https://codecov.io/gh/renanmav/tictactoe01)

Tic tac toe challenge proposed by 01card to fill the React Native engineer position

![preview](./assets/preview.png)

## Quick dependency walkthrough

- [`expo`](https://github.com/expo/expo) because of their amazing SDK
- [`react-navigation`]() for navigation, obviously
- [`react-native-tailwindcss`](https://github.com/TVke/react-native-tailwindcss) for quick styling (and because I wanted to test it out 😝)
- [`jest`](https://github.com/facebook/jest) and [`testing-library`](https://github.com/testing-library/native-testing-library) for testing
- [`storybook`](https://github.com/storybookjs/storybook) for bullet proof component engineering and finally
- [`typescript`](https://github.com/microsoft/TypeScript) just because...

## Colocation

If you don’t know what is colocation, read about it [here](https://kentcdodds.com/blog/colocation). Most of React components use this colocation:

```
<imports>

<styles>

<JSX>
```
