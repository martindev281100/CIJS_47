const controller = {}
controller.register = (data) => {
    if(data.firstName === ''){
        document.getElementById('first-name-error')
        .innerText = 'Please input your first name'
    }
    if(data.lastName === ''){
        document.getElementById('last-name-error')
        .innerText = 'Please input your last name'
    }
    if(data.email === ''){
        document.getElementById('email-error')
        .innerText = 'Please input your email'
    }
    if(data.password === ''){
        document.getElementById('password-error')
        .innerText = 'Please input your password'
    }
    if(data.confirmPassword === ''){
        document.getElementById('confirm-password-error')
        .innerText = 'Please input your confirm password'
    }
    if(data.confirmPassword !== data.password){
        document.getElementById('confirm-password-error')
        .innerText = 'Confirm password does not match'
    }
}
controller.login = (data) => {
    if(data.email === ''){
        document.getElementById('email-error')
        .innerText = 'Please input your email'
    }
    if(data.password === ''){
        document.getElementById('password-error')
        .innerText = 'Please input your password'
    }
}