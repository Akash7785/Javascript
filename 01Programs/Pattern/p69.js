function multiply() {
  var n = 2;
  var l = 10;
  var out = "";
  for (var i = 1; i < l; i++) {
    out = out + i + " * " + n + " = " + i * n + "<br/>";
  }
  console.log(out);
}
multiply();
