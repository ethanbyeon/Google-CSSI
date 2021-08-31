const onSubmit = () => {
    const passcode = document.querySelector("#passcode").value
    const msg = document.querySelector("#message").value
    const payload = {
        passcode: passcode,
        msessage: msg
    }

    firebase.database().ref().push(payload)

}