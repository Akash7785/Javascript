// TEMPLATE LITERALS

// let m1 = "hello";
// let m2 = "World";
// let msg = `pablo says ${m1} ${m2}`;
// console.log(msg);

let kitchen = {
  name: "kitchen",
  purpose: "cooking",

  cookFood(order) {
    console.log(`Serving ${order} in ${this.name}`);
  },
};

let bedroom = {
  name: "Bedroom",
  purpose: "Rest",
};

let livingRoom = {
  name: "livingRoom",
  purpose: "Hangout",
};

// kitchen.cookFood.apply(bedroom, ["meggie", 1]);

let x = kitchen.cookFood.bind(bedroom, "Chai");
x();
// kitchen.cookFood.call(livingRoom, "meggie");
