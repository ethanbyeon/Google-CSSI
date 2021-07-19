console.log("script running!");

const goat = document.querySelector("#button1");
console.log(goat);

goat.addEventListener("click", () => {
    console.log("Clicked!");
    alert("MEH ... FEED ME!");
});

const bunny = document.querySelector("#button2");
console.log(bunny);

bunny.addEventListener("click", () => {
    console.log("Clicked!");

    const msg = document.querySelector("#status2");
    msg.innerHTML = "What's up, doc?";
});


let carrots = 2;                                                  // COUNTER VARIABLE
const coco = document.querySelector("#button3");                  // BUTTON
coco.addEventListener("click", () => {
    carrots += 1;
    console.log(carrots);

    const msg = document.querySelector("#status3");                 // STATUS MESSAGE
    msg.innerHTML = `Coco has had ${carrots} carrots today!`;       // UPDATE MESSAGE

    if(carrots > 9) { coco.innerHTML = "MORE!"; }
    if(carrots > 15) { coco.innerHTML = "EVEN MORE!"; }
    if(carrots > 20) { coco.innerHTML = "Pleasure doing business with you."; }
});


const gator = document.querySelector("#button4");
let warning = 0;
gator.addEventListener("click", () => {
    const zoo = document.querySelector(".container");

    if(warning == 0) {
        gator.innerHTML = "Are you sure?";
    }else if(warning == 1) {
        gator.innerHTML = "On behalf of the Petting Zoo team, we present to you...";
    }else {
        zoo.innerHTML = `<h1 class="title">
                                Due to some dangerous rulebreaking, the petting zoo is temporarily closed
                            </h1>
                            <button class="button is-large is-warning" onclick="location.reload()">
                                Go Back!
                            </button>
                        `;
    }
    ++warning;
});

function updateStats(x) {
    let btn = document.getElementById(x);
    const arr = x.split("-");

    let value = parseInt(btn.innerHTML);
    if(arr[0] == "hunger") { btn.innerHTML = ++value; }
    else if(arr[0] == "sanity") { btn.innerHTML = ++value; }
    else if(arr[0] == "health") { btn.innerHTML = ++value; }
}