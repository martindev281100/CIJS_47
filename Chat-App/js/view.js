const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'register':
            document.getElementById('app').innerHTML = component.register
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(data)
            })
            document.getElementById('redirect-to-login').addEventListener('click', function(){
                view.setActiveScreen('login')
            })
            break;
        case 'login':
            document.getElementById('app').innerHTML = component.login
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data)
            })
            document.getElementById('redirect-to-register').addEventListener('click', function(){
                view.setActiveScreen('register')
            })
            break;
    }
}
view.setErrorMessage = (elementId, content)=>{
    document.getElementById(elementId).innerText = content
}
