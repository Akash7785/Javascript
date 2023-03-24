let nums = [2, 1, 89, 54, 3, 23, 90];

nums.sort(function (a, b) {
  // if (a > b) return 1;
  // if (a < b) return -1;
  // return 0;

  // return a - b;  //ascending

  return b - a; //descending
});

console.log(nums);
