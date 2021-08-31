let googleUser = null

window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Logged in as", user.displayName)
            googleUser = user
        }else {
            console.log("Not logged in")
        }
    })
}

const createNoteBtn = document.querySelector("#createNoteButton")
createNoteBtn.addEventListener("click", () => {
    const noteTitle = document.querySelector("#noteTitle").value
    const noteText = document.querySelector("#noteText").value
    console.log(noteTitle, noteText)

    firebase.database().ref(`/users/${googleUser.uid}`).push({
        title: noteTitle,
        text: noteText
    }).then(() => {
        console.log("Database WRITE successful")
        document.querySelector("#noteTitle").value = ""
        document.querySelector("#noteText").value = ""
    })
    .catch(error => {
        console.log("Error writing new note: ", error)
    })
})