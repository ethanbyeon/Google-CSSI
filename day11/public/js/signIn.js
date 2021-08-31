console.log("HELLO")
const signInBtn = document.querySelector(".button")
signInBtn.addEventListener("click", () => {
    console.log("Clicked!")
    
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user

        console.log("Login Success!", user)
        window.location = 'writeNote.html'
    })
    .catch(error => {
        console.log("Login Failed", error)
    })
})