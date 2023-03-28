let blueColor = document.querySelectorAll(".bl");
let greenColor = document.querySelectorAll(".gr");
let redColor = document.querySelectorAll(".rd");

function green() {
  for (let i = 0; i < greenColor.length; i++) {
    greenColor[i].style.backgroundColor = "green";
    greenColor[i].style.color = "white";
  }
}
function red() {
  for (let i = 0; i < redColor.length; i++) {
    redColor[i].style.backgroundColor = "red";
    redColor[i].style.color = "white";
  }
}
function blue() {
  for (let i = 0; i < blueColor.length; i++) {
    // let txt = blueColor[i].innerText;
    // blueColor[i].innerText = txt + " " + "become white";
    blueColor[i].style.backgroundColor = "blue";
    blueColor[i].style.color = "white";
  }
}
function Default() {
  for (let i = 0; i < blueColor.length; i++) {
    // let txt = blueColor[i].innerText;
    // document[i].innerText = txt;
    blueColor[i].style.backgroundColor = "white";
    blueColor[i].style.color = "black";
  }
  for (let i = 0; i < greenColor.length; i++) {
    greenColor[i].style.backgroundColor = "white";
    greenColor[i].style.color = "black";
  }
  for (let i = 0; i < redColor.length; i++) {
    redColor[i].style.backgroundColor = "white";
    redColor[i].style.color = "black";
  }
}
