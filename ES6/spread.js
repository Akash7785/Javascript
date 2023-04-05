let colour1 = ["red", "green", "blue"];
let colour2 = [...colour1, "orange", "yellow", "purple"];

// spread operator is used to concatinate two arrays
arr1 = ["1", "2"];
arr2 = ["3", "4"];
syntax;
arr2 = [...arr1, "3", "4"];

const user1 = {
  name: "Akash",
};
const city = {
  city: "pune",
};

const details = { ...user1, ...city };
console.log(details);
