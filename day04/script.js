console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");

console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);

englishTile.classList.add("hidden");
spanishTile.classList.add("hidden");
chineseTile.classList.add("hidden");
tagalogTile.classList.add("hidden");
vietnameseTile.classList.add("hidden");
arabicTile.classList.add("hidden");
frenchTile.classList.add("hidden");
koreanTile.classList.add("hidden");
russianTile.classList.add("hidden");


const title = document.getElementById("total");

const attempts = document.getElementById("attempt");
let arr = attempts.innerHTML.split(" ");

const total = parseInt(title.innerHTML);
let count = parseInt(arr[1]);
let correct = 0;

const msg = document.getElementById("remainder");
let warning = false;

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
inputField.addEventListener('change', () => {
  console.log("Guess submitted!");


  let guess = inputField.value
  console.log(guess.value);

  let lang = guess.charAt(0).toUpperCase() + guess.slice(1);

  let sub = document.getElementById("sub");
  sub.innerHTML = "Type your guesses below! If you get a match, it should show up instantly.";

  if(document.getElementById(lang)) {
    let tile = document.getElementById(lang);
    if(tile.classList.contains("show")) {
      sub.innerHTML = "Already guessed!";
      return
    }else {
      tile.classList.remove("hidden");
      tile.classList.add("show");
      correct++;
    }
  }
  ++count;
  title.innerHTML = `${total - count}`;
  attempts.innerHTML = `Attempt: ${count}`;
  console.log(count); 

  if(count >= 10 && warning === false) {
    warning = true;
    
    attempts.classList.remove("has-text-success");
    attempts.classList.add("has-text-danger");
    
    title.classList.add("has-text-danger");
    
    console.log("Warning");    
  }

  if(count === total) { 
    inputField.disabled = true;
    msg.innerHTML = "Game Over!";
    sub.innerHTML = "Click the button below to play again."
  }
  if(correct === 9) {
    inputField.disabled = true;
    msg.innerHTML = "Congrats! Well done.";
  }

  inputField.value = "";
});