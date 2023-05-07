function employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;

  this.changeSalary = changeSalary;
  function changeSalary(otherSalary) {
    this.salary = otherSalary;
  }
}
e = new employee(103, "Akash Kumar", 30000);
document.write(e.id + " " + e.name + " " + e.salary);
e.changeSalary(45000);
