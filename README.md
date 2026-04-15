# Frontend Mentor - Age calculator app solution (Template Updated)

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

- Age calculation in years, months, days for valid past dates
- Validation errors for range, empty, future, invalid dates
- Responsive layout with hover/focus states

### Screenshot

![Completed](design/desktop-completed.jpg)
![Error states](design/desktop-error-invalid.jpg)

### Links

- Repo: https://github.com/batgev/age-calculator-app
- Live: https://batgev.github.io/age-calculator-app

## My process

### Built with

- HTML5
- CSS (Flexbox)
- Vanilla JavaScript

### What I learned

Precise date difference calculation:

```js
const birthDate = new Date(year, month - 1, day);
if (birthDate > now || isNaN(birthDate.getTime())) {
  // Set specific errors: \"Must be a valid day/month/year\"
}
```

Future dates and invalid combos (Feb 30) now handled properly.

## Author

- GitHub: [@shadow](https://github.com/shadow)
