console.log("Script running");

// We'll want to get some random integers, and that isn't built right into JavaScript.
// Here's a pre-built function that will do it for ya.
const getRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log("SUBMIT:", submitButton);
console.log("QUERY:", queryField);
console.log("IMAGE:", imageHolderDiv);

submitButton.addEventListener("click", (e) => {
    let myKey = 'GrNM4xBIbQcmSNcaRyBet2J2fY5EgrCv';
    
    console.log("RAW QUERY:", queryField.value);
    let topic = encodeURIComponent(queryField.value);
    console.log("ENCODED QUERY:", topic);
    const urlToFetch = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}&limit=25&offset=0&rating=g&lang=en`;
    
    console.log("TOPIC:", topic);
    console.log("URL:", urlToFetch);
    
    if (queryField.value != "") {
        let num = getRandom(25);
        console.log("NUM:", num);
        fetch(urlToFetch)
            .then(response => response.json())
            .then(myJson => {
            console.log("META", myJson.meta);
            console.log(myJson.data[num]);

            let fig = document.createElement("figure");
            let img = document.createElement("img");
            let fc = document.createElement("figcaption");
            
            img.src = myJson.data[num].images.downsized.url;
            img.alt = myJson.data[num].title;
            fc.textContent = myJson.data[num].title;
            fig.appendChild(img);
            fig.appendChild(fc);

            imageHolderDiv.insertAdjacentElement("afterbegin", fig);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })
    }
})