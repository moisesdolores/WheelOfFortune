"use strict";
import { getRandomWord } from "./randomWord.js";

const startButton = document.getElementById("start");
const hiddenWord = document.getElementById("word");
let randWord = getRandomWord();
let testWord = "";

function hide() {
  testWord = "";
  for (let i of randWord) {
    testWord += "-";
  }
}

function newWord() {
  randWord = getRandomWord();
  randWord = randWord.toUpperCase();
  //   console.log(randWord);
  hide();
  hiddenWord.innerText = testWord;
}

function showWord() {
  let guess = document.getElementById("myGuess").value;
  guess = guess.toUpperCase();

  for (let i in randWord) {
    let ele = randWord[i];
    if (guess.includes(ele)) {
      testWord = testWord.split("");
      testWord[i] = ele;
      testWord = testWord.join("");
    }
  }

  hiddenWord.innerText = testWord;
}

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  newWord();
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  showWord();
  document.getElementById("form").reset();
});

function fullWordCheck() {
  let guess = document.getElementById("fullGuess").value;
  guess = guess.toUpperCase();
  if (guess === randWord) {
    alert("You are Correct!");
    hiddenWord.innerText = randWord;
  } else {
    alert("You are Incorrect");
  }
}
const fullWordButton = document.getElementById("full-submit");
fullWordButton.addEventListener("click", (event) => {
  event.preventDefault();
  fullWordCheck();
  document.getElementById("form").reset();
});
