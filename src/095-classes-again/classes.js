// Implement the SuperHero class with the following characteristics

// - It should have a STATIC PRIVATE member called `superHeroCount` with an initial value of `0`
// - It should have a PRIVATE member called `superPower`
// - The constructor should take two args: `name` and `superPower`
//   - Record the name in an instance member called `name`
//   - Record the `superPower` to the PRIVATE member called `superPower`
//   - Increment the STATIC PRIVATE `superHeroCount` by 1 every time the constructor is called
// - Introduce a STATIC method called `count` that returns the `superHeroCount`
// - Introduce an instance method called `wield`
//   - For a superHero like `new SuperHero('Thor', 'Mjolnir')`
//   - `wield` yields `Thor strikes with Mjolnir` (Use template strings here)

class SuperHero {
  static #superHeroCount = 0;
  #superPower;

  constructor(name, superPower) {
    this.name = name;
    this.#superPower = superPower;
    SuperHero.#superHeroCount++;
  }

  static count() {
    return SuperHero.#superHeroCount;
  }

  wield() {
    return `${this.name} strikes with ${this.#superPower}`;
  }
}

export {
  SuperHero,
};
