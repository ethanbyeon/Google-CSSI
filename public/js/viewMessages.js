const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);

        for (let key in data) {
            console.log(key, data[key]);
            if (key === passcode.value) {
                console.log("Match found")
                const message = document.querySelector("#message");
                message.innerHTML = data[key]
            }
        }
    })

    console.log("Yo.", passcode.value);
}