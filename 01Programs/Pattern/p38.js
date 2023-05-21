function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
}

const array = [20, "Akash", 2.8];

const result = getRandomItem(array);
console.log(result);
