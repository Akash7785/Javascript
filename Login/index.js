let users = [];
class User {
  #password;
  constructor() {
    this.organisation = "Integral";
  }

  #validateUsername(username) {
    let value = username.includes("@") ? false : true;
    return value;
  }
  #validatePassword(password) {
    let passValue = password.includes("123") ? false : true;
    return passValue;
  }

  login(username, password) {
    if (username === this.username && password === this.#password) {
      console.log("login successful");
    } else {
      console.log("Authentication failes");
    }
  }

  signUp(username, password) {
    let isValidated = false;

    isValidated =
      this.#validateUsername(username) && this.#validatePassword(password);

    if (isValidated === true) {
      this.username = username;
      this.#password = password;
      console.log("USer Registered successfully");
      users.push(this);
    } else {
      console.log("SignUP Failed");
    }
  }
}

class student extends User {
  constructor() {
    super();
    this.numOfAssignments = 0;
  }
  submitAssignment() {
    this.numOfAssignments++;
    console.log("Accepted");
  }
}

class Admin extends User {
  constructor() {
    super();
  }
  removeUser(userName) {
    users = users.filter((element) => {
      return element.username != userName;
    });
  }
}
function signup() {
  let s1 = new student();
  console.log("Inside Singup");
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  s1.signUp(user, pass);

  // console.log(users);
}

function logIn() {}
