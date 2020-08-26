const model = {}
model.currentUser = undefined
model.register = async (data) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        console.log(response)
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}
model.login = async ({
    email,
    password
}) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
        // console.log(response)
        // if(response && response.user.emailVerified == true){
        //     //Logged in
        //     model.currentUser = {
        //         email: response.user.email,
        //         displayName: response.user.displayName
        //     }
        //     console.log(model.currentUser)
        //     //Homework:
        //     view.setActiveScreen('chatPage')
        //     console.log('Current User: '+ model.currentUser)
        // }
        // else{
        //     alert('Please verify your email!')
        // }
    } catch (err) {
        alert(err)
    }
}