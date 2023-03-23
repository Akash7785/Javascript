let alpha = ["p", "k", "a", "x", "s", "c"];

alpha.sort(function (a, b) {
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //   return 0;

  //   decending order

  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log(alpha);
