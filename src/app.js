/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The cat", "My abeulo", "His snake", "My parate", " the police"];
  let action = ["ate", "peed", "lost", "broke"];
  let what = ["my passport", "the cheese", "the vase"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
  }
  let element = document.getElementById("excuse");
  let button1 = document.getElementById("button-1");
  function generateExcuse() {
    let excuse =
      who[getRandomNumber(who.length)] +
      " " +
      action[getRandomNumber(action.length)] +
      " " +
      what[getRandomNumber(what.length)] +
      " " +
      when[getRandomNumber(when.length)];
    element.innerHTML = excuse;
  }
  generateExcuse();
  button1.addEventListener("click", generateExcuse);
};
