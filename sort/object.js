let obj = [
  {
    personName: "vikas",
    personEmail: "a@g.com",
    personRole: "FSD",
    personSalary: 12,
  },
  {
    personName: "akash kumar",
    personEmail: "ak@g.com",
    personRole: "FSD",
    personSalary: 120,
  },
  {
    personName: "ramesh",
    personEmail: "aabhi@g.com",
    personRole: "FSD",
    personSalary: 15,
  },
];

obj.sort(function (a, b) {
  //   if (a.personSalary > b.personSalary) return 1;
  //   if (a.personSalary < b.personSalary) return -1;
  //   return 0;

  if (a.personName > b.personName) return 1;
  if (a.personName < b.personName) return -1;
  return 0;
});

console.log(obj);
