const getMessages = () => {
    const password = document.querySelector("#passcode");
    // console.log("PASSWORD:", password.value)
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log("DATA:", data);

        const message = document.querySelector("#message");
        if (password.value.length == "") {
            message.innerHTML = "Please enter a password."
            return
        }
        if (password.value.length > 10) {
            message.innerHTML = "Password exceeds 10 characters!"
            return
        }

        if(!(/\\?=.\\*[A-Z]/).test(password.value)) {
            message.innerHTML = "Password must contain at least one uppercase letter."
        }
        if(!(/\\?=.\\*[a-z]/).test(password.value)) {
            message.innerHTML = "Password must contain at least one lowercase letter."
        }

        for (let key in data) {
            console.log(key, data[key]);
            if (data[key].password === password.value) {
                console.log("Match found")
                message.innerHTML = data[key].message
            }
        }
    })
}