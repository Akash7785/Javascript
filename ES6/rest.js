const user1 = {
  name: "Akash",
  city: "pune",
  age: 34,
  role: "developer",
};

const { name, ...x } = user1;
console.log(x);
