const view = {}
view.setActiveScreen = (screenName, fromCreateConversation = false) => {
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
            document.getElementById('redirect-to-login').addEventListener('click', function () {
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
            document.getElementById('redirect-to-register').addEventListener('click', function () {
                view.setActiveScreen('register')
            })
            break;
        case 'chatPage':
            document.getElementById('app').innerHTML = component.chatPage
            const sendMessageForm = document.getElementById('send-message-form')
            const addUserForm = document.getElementById('add-user-form')
            addUserForm.addEventListener('submit', function (e) {
                e.preventDefault()
                const email = addUserForm.email.value
                if (addUserForm.email.value.trim() !== "") {
                    model.addUser(email)
                }
                addUserForm.email.value = ''

            })
            document.getElementById('create-conversation').addEventListener('click', function () {
                view.setActiveScreen('addConversationPage')
            })
            document.getElementById('send-message-form').addEventListener('submit', function (e) {
                e.preventDefault()
                const message = {
                    content: sendMessageForm.message.value,
                    owner: model.currentUser.email,
                    createdAt: new Date().toISOString()
                }
                if (sendMessageForm.message.value.trim() !== "") {
                    model.addMessage(message)
                }
                sendMessageForm.message.value = ''
            })
            document.querySelector('#send-message-form input').addEventListener('click', function () {
                view.hideNotification(model.currentConversation.id)
            })
            if (fromCreateConversation) {
                view.showCurrentConversation()
                view.showConversations()
            } else {
                model.getConversations()
                model.listenConversationChange()
            }
            break;
        case 'addConversationPage':
            document.getElementById('app').innerHTML = component.createConversationPage
            document.getElementById('redirect-to-chat').addEventListener('click', function () {
                view.setActiveScreen('chatPage', true)
            })
            const addConversationForm = document.getElementById('create-conversation-form')
            addConversationForm.addEventListener('submit', function (e) {
                e.preventDefault()
                console.log('click')
                const conversationInfo = {
                    title: addConversationForm.title.value,
                    email: addConversationForm.email.value
                }
                if (addConversationForm.title.value.trim() !== "") {
                    controller.createConversation(conversationInfo)
                }
            })

            break;

    }
}
view.setErrorMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content
}
view.scrollToEndElement = () => {
    const element = document.querySelector('.list-message')
    element.scrollTop = element.scrollHeight
}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `
        <div class="content">${message.content}</div>`
    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>`
    }
    document.querySelector('.list-message').appendChild(messageWrapper)
}
view.showCurrentConversation = () => {
    document.querySelector('.conversation-title').innerHTML = model.currentConversation.title
    document.querySelector('.list-message').innerHTML = ''
    document.querySelector('.list-users').innerHTML = ''
    for (message of model.currentConversation.messages) {
        view.addMessage(message)
    }
    for (user of model.currentConversation.users) {
        view.addUser(user)
    }
    view.scrollToEndElement();

}
view.showConversations = () => {
    for (conversation of model.conversations) {
        view.addConversation(conversation)

    }
}
view.addConversation = (conversation) => {
    const conversationWrapper = document.createElement('div')
    conversationWrapper.classList.add('conversation')
    conversationWrapper.classList.add('cursor-pointer')
    conversationWrapper.id = conversation.id
    if (conversation.id === model.currentConversation.id) {
        conversationWrapper.classList.add('current')
    }
    conversationWrapper.innerHTML = `
    <div class="left-conversation-title">${conversation.title}</div>
    <div class="num-of-user">${conversation.users.length} users</div>
    <div class="notification"></div>
    `
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
        conversationWrapper.firstElementChild.innerText = conversation.title.charAt(0).toUpperCase()
    }
    mediaQuery.addListener((e) => {
        if (e.matches) {
            conversationWrapper.firstElementChild.innerText = conversation.title.charAt(0).toUpperCase()
            document.getElementById('create-conversation').innerText = '+'
        } else {
            conversationWrapper.firstElementChild.innerText = conversation.title
            document.getElementById('create-conversation').innerText = '+ New Conversation'
        }
    })
    document.getElementById('create-conversation').innerText = "+"
    document.querySelector('.list-conversations').appendChild(conversationWrapper)

    conversationWrapper.addEventListener('click', () => {
        model.currentConversation = model.conversations.filter(item => item.id === conversation.id)[0]
        console.log(model.conversations)
        view.showCurrentConversation()
        document.querySelector('.conversation.current').classList.remove('current')
        conversationWrapper.classList.add('current')
    })

}
view.addUser = (user) => {
    const addWrapper = document.createElement('div')
    addWrapper.classList.add('user-email')
    addWrapper.innerHTML = user
    document.querySelector('.list-users').appendChild(addWrapper)
}
view.addUserInConversation = (numberUser) => {
    const currentConversationElement = document.querySelector('.conversation.current .num-of-user')
    currentConversationElement.innerText = numberUser + ' users'
}
view.showNotification = (docId) => {
    const conversation = document.getElementById(docId)
    conversation.querySelector('.notification').style = 'display: block'
}
view.hideNotification = (docId) => {
    const conversation = document.getElementById(docId)
    conversation.querySelector('.notification').style = 'display: none'
}