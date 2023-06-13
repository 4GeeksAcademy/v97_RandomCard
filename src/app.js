/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//♦ ♥ ♠ ♣

function onload() {
  //write your code here

  //console.log("test");
  const suites = ["♦", "♥", "♠", "♣"];

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  let suite = suites[randomCard(suites)]; // coge los suits del array

  // change color
  if (suite === suites[0] || suite === suites[1]) {
    document.querySelector(".header-card").style.color = "red";
    document.querySelector(".container-card").style.color = "red";
    document.querySelector(".bottom-card").style.color = "red";
  } else {
    document.querySelector(".header-card").style.color = "black";
    document.querySelector(".container-card").style.color = "black";
    document.querySelector(".bottom-card").style.color = "black";
  }

  let getsuite = document.querySelector("#suite");
  getsuite.innerHTML = suite;

  let bottsuite = document.querySelector("#bottom-suite");
  bottsuite.innerHTML = suite;

  function randoNumber() {
    let randomN = Math.floor(Math.random() * 13) + 1;

    if (randomN === 10) {
      randomN = "J";
    } else if (randomN === 11) {
      randomN = "Q";
    } else if (randomN === 12) {
      randomN = "K";
    } else if (randomN === 1) {
      randomN = "A";
    } else randomN;

    return randomN;
  }

  let getNumbers = document.querySelector(".container-card");
  getNumbers.innerHTML = randoNumber();

  document.getElementById("card").style.height = "450px";
  document.getElementById("card").style.width = "300px";
}

let btnNewCard = document.querySelector("#newCard");
btnNewCard.addEventListener("click", onload);

window.onload = onload();

var btnzoomPlus = document.getElementById("zoomPlus");
var btnzoomLess = document.getElementById("zoomLess");

btnzoomPlus.addEventListener("click", () => {
  let img = document.getElementById("card");
  let height = img.clientHeight;
  img.style.height = height + 50 + "px";
  let width = img.clientWidth;
  img.style.width = width + 50 + "px";
});

btnzoomLess.addEventListener("click", () => {
  let img = document.getElementById("card");
  if (img.style.height >= "450px" && img.style.width >= "300px") {
    let height = img.clientHeight;
    img.style.height = height - 50 + "px";
    let width = img.clientWidth;
    img.style.width = width - 50 + "px";
  } else {
    window.alert("Image cannot be further reduced");
    document.getElementById("card").style.height = "450px";
    document.getElementById("card").style.width = "300px";
  }
});

//timer

var timer = document.getElementById("timer");
var stopTimer = document.getElementById("stopTimer");
let varTimer;

function setTimer() {
  varTimer = setInterval(onload, 1000);
}

function stpTimer() {
  clearInterval(varTimer);
}

timer.addEventListener("click", setTimer);
stopTimer.addEventListener("click", stpTimer);
