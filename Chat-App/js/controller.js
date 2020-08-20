const controller = {}
controller.register = (data) => {
    view.setErrorMessage('first-name-error', data.firstName === '' ? 'Please input your first name' : '')
    view.setErrorMessage('last-name-error', data.lastName === '' ? 'Please input your last name' : '')

    view.setErrorMessage('email-error', data.email === '' ? 'Please input your email' : '')

    view.setErrorMessage('password-error', data.password === '' ? 'Please input your password' : '')
    
    // let validate_password = view.setErrorMessage('confirm-password-error', data.confirmPassword === '' ? 'Please input your confirm password' : '')
    // view.setErrorMessage('confirm-password-error', data.confirmPassword !== data.password ? 'Password do not match' : validate_password())
    
    if(data.confirmPassword === ''){
        view.setErrorMessage('confirm-password-error', 'Please input your confirm password')
    }
    else if(data.confirmPassword !== data.password){
        view.setErrorMessage('confirm-password-error', 'Password did not match')
    }
    else{
        view.setErrorMessage('confirm-password-error', '')
    }
    if (data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.password !== '' && data.password === data.confirmPassword) {
        model.register(data)
    }
}
controller.login = (data) => {
    if (data.email === '') {
        document.getElementById('email-error')
            .innerText = 'Please input your email'
    }
    if (data.password === '') {
        document.getElementById('password-error')
            .innerText = 'Please input your password'
    }
}

