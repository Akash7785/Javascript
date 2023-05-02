// JavaScript code demonstrating a simple object
let school = {
  name: "RLB School",
  location: "LUCNOW",
  established: "1989",
  displayInfo: function () {
    console.log(`${school.name} was established
			in ${school.established} at ${school.location}`);
  },
};
school.displayInfo();
