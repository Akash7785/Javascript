function setFirstName() {
  // Change the content of h1 to your first name
  // let fName = document.getElementById("firstname").innerText;
  document.getElementById("firstname").innerText = "FIRSTNAME";
}

function setLastName() {
  // Change the content of div to your last name
  document.getElementById("lastname").innerText = "LASTNAME";
}

function setFullName() {
  // Change the content of p to your full name (firsName)
  document.getElementById("fullname").innerText = "FIRSTNAME LASTNAME";
}

function resetDefaults() {
  // reset the firstname, lastname, and fullname to
  document.getElementById("firstname").innerText = "";
  document.getElementById("lastname").innerText = "";
  document.getElementById("fullname").innerText = "";
}
