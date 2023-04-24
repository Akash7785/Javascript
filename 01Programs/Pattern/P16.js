let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  // print 6-n stars
  for (let num = 6 - n; num >= 1; num--) {
    pattern += num;
  }
  pattern += "\n";
}
console.log(pattern);
