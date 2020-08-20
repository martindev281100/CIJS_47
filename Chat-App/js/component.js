const component = {}
component.welcomePage = `
<h1>Welcome to my Chat App</h1>
`
component.register = `
<div class="register-container">
        <form id="register-form">
            <div class="register-header">
                Mindx Chat
            </div>
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First name" name="firstName">
                    <div class="error" id="first-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last name" name="lastName">
                    <div class="error" id="last-name-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="error" id="password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm Password" name="confirmPassword">
                <div class="error" id="confirm-password-error"></div>
            </div>
            <div class="form-action">
                <div>Already have an account? <span id="redirect-to-login-page" class="cursor-pointer" onclick="view.setActiveScreen('login')">Login</span></div>
                <button class="btn cursor-pointer" type="submit">Register</button>
            </div>
        </form>
    </div>
`
component.login = `
<div class="login-container">
        <form id="login-form">
            <div class="login-header">
                Mindx Chat
            </div>
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="error" id="password-error"></div>
            </div>
            <div class="form-action">
                <div>Don't have an account? <span id="redirect-to-register-page" class="cursor-pointer" onclick="view.setActiveScreen('register')">Register</span></div>
                <button class="btn cursor-pointer" type="submit">Login</button>
            </div>
        </form>
    </div>
`