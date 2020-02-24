# Refactoring to Modern JavaScript workshop 😻

JavaScript now has a yearly release cycle. 
Every release introduces new features that aim to make us (JavaScript developers) more productive, while making our code succint, expressive, and (potentially) bug-free. 

This workshop allows you to explore many of the new features that we use on a daily basis, including

- `let` and `const`
- Default parameters
- The new "fat arrow" function syntax
- Template strings
- Object and array destructuring and spread
- The newly added Map/Set data-structures 
- The new `class` syntax
- Promises and `async/await`

This workshop uses tests to verify and validate all of your changes, so you can be confident in your changes as you go about refactoring your code to use modern JavaScript language features.

By the end of this workshop you will be intimately familiar with the newer set of JavaScript features, and ready to dive into your next JavaScript project with confidence. 

## Setup 

You will need a few things installed: 

- Install [Git](https://git-scm.com/downloads)
- Download and install `node` per [this](https://nodejs.org/en/download/)

Optionally, if you do **not** a favorite text editor, you can install [Visual Studio Code](https://code.visualstudio.com/)

Then clone this repository in a location of your choice. 
Then simply:

```sh
❯ cd /path/to/this/repository
❯ npm install
```

To ensure that all is well, simply run `npm run test`.
You should see the following:

```sh
❯ npm run test

> refactoring-to-modern-javascript@1.0.0 test /Users/raju/Documents/presentations/2020/refactoring-to-modern-javascript/code/refactoring-to-modern-javascript
> jest --verbose

 PASS  src/000-setup-test/__test__/counter.util.test.js
  counter: Should increment the passed value
    ✓ should add 1 (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.59s, estimated 2s
Ran all test suites.
```

You are all set! 

## License

Copyright (c) 2020 Raju Gandhi

Distributed under the MIT License
