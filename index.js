"use strict";
import { getRandomWord } from "./randomWord.js";

const form = document.getElementById("form");
const startButton = document.getElementById("start");
const submitButton = document.getElementById("submit");
const fullWordButton = document.getElementById("full-submit");
const hiddenWord = document.getElementById("word");
const alreadyGuessed = document.getElementById("alreadyGuessed");
let randWord = getRandomWord();
let displayWord = "";

function hide() {
  displayWord = "";
  for (let i of randWord) {
    displayWord += "-";
  }
}

function newWord() {
  randWord = getRandomWord();
  randWord = randWord.toUpperCase();
  console.log(randWord);
  hide();
  hiddenWord.innerText = displayWord;
}

function showWord() {
  let guess = document.getElementById("myGuess").value;
  guess = guess.toUpperCase();

  for (let i in randWord) {
    let ele = randWord[i];
    if (guess.includes(ele)) {
      displayWord = displayWord.split("");
      displayWord[i] = ele;
      displayWord = displayWord.join("");
    }
  }
  hiddenWord.innerText = displayWord;
}

function fullWordCheck() {
  let guess = document.getElementById("fullGuess").value;
  guess = guess.toUpperCase();
  const letters = /^[A-Za-z]+$/;
  if (guess.match(letters)) {
    if (guess === randWord) {
      alert("You are Correct!");
      hiddenWord.innerText = randWord;
    } else {
      alert("You are Incorrect");
      newWord();
      alreadyGuessed.innerHTML = "";
    }
  }
}

function previouslyGuessed() {
  let guess = document.getElementById("myGuess").value;
  const letters = /^[A-Za-z]+$/;
  if (guess.match(letters)) {
    guess = guess.toUpperCase();
    const li = document.createElement("li");
    li.append(guess);
    alreadyGuessed.appendChild(li);
  }
}

function validate() {
  const myGuess = document.forms["form"]["myGuess"].value;
  const fullGuess = document.forms["form"]["fullGuess"].value;
  const letters = /^[A-Za-z]+$/;
  if (myGuess.match(letters) || fullGuess.match(letters)) {
    return true;
  } else {
    alert("Enter a Valid Guess");
    return false;
  }
}

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  newWord();
  alreadyGuessed.innerHTML = "";
  document.getElementById("myGuess").focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  form.reset();
});

submitButton.addEventListener("click", (event) => {
  showWord();
  previouslyGuessed();
});
fullWordButton.addEventListener("click", (event) => {
  fullWordCheck();
});
