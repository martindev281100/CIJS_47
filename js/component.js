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
                <div>Already have an account? <span id="redirect-to-login" class="cursor-pointer">Login</span></div>
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
                <div>Don't have an account? <span id="redirect-to-register" class="cursor-pointer" >Register</span></div>
                <button class="btn cursor-pointer" type="submit">Login</button>
            </div>
        </form>
    </div>
`
component.chatPage = `<div class="chat-container">
        <div class="header">
            Mindx Chat
        </div>
        <div class="main">
            <div class="aside-left">
                <div class="create-conversation">
                    <button class="btn cursor-pointer" id="create-conversation">+ New conversation</button>
                </div>
                <div class="list-conversations"></div>
            </div>
            <div class="conversation-detail">
                <div class="conversation-title" id="conversationTitle">New Conversation</div>
                <div class="list-message">
                </div>
                <form action="" id="send-message-form" class="border-input ">
                    <div class="input-wrapper">
                        <input type="text" class="text-wrapper" placeholder="Type a message" name="message">
                    </div>
                    <button type="submit"><i class="far fa-paper-plane btn-send"></i></button>
                </form>
            </div>
            <div class="aside-right">
                <div class="list-users">
                </div>
                <form id="add-user-form" class="mt-1">
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Friend Email">
                        <div class="error" id="email-error"></div>
                    </div>
                    <button class="btn">Add</button>
                </form>
            </div>
        </div>
    </div>`

component.createConversationPage = `<div class="create-conversation-wrapper">
        <div class="header">Mindx Chat</div>
        <form id="create-conversation-form" style="width: 60%; margin: auto; margin-top: 20px">
            <h4>Create new conversation: </h4>
            <div class="input-wrapper">
                <input type="text" placeholder="Conversation title" name="title">
                <div class="error" id="create-conversation-title-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="email" placeholder="Friend email" name="email" id="add-conversation">
                <div class="error" id="create-conversation-email-error"></div>
            </div>
            <button class="btn" type="submit" id="add-conversation-form">Save</button>
            <button class="btn btn-bg-light" type="button" id="redirect-to-chat">Cancle</button>
        </form>
    </div>`