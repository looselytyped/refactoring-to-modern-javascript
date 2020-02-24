# Modules

## Discussion

- Why the `.mjs` extension?

## Notes

Since this module of our workshop does not have tests, you will have to run these files on the command line. 

```sh
cd src/090-modules
node --experimental-modules importer.mjs
```

## Exercises

- [ ] Create a single `default` export in `exporter.js` and use it in `importer.js`.
  Here is an example function that you can use

  ```javascript
  const sayHello = (name) => `Hello ${name}!`;
  ````

- [ ] Convert your default export to a "named" export. 
  See the effect it has on the `import` statement.

- [ ] Create another "named" export, and `import` both into `importer`.
  Here is an example function that you can use

  ```javascript
  const sayGoodbye = (name) => `Goodby ${name}!`;
  ````

- [ ] Make one the "named" exports to a "default" export.
  What does that do to your `import` statement?

- [ ] Declare a private member in `exporter.js`.
  Can you get to it from `importer.js`?

- [ ] `export` one of your defaults with an alias.
  How does this affect your `import` statement?

- [ ] Alias one of the imports in `importer.js`.

- [ ] Use the `* as` syntax in the `importer.js`. 
  Can you use this with `default` imports?
  
