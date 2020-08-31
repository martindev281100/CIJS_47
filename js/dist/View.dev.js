"use strict";

var view = {};

view.setActiveScreen = function (screenName) {
  switch (screenName) {
    case 'register':
      document.getElementById('app').innerHTML = component.register;
      var registerForm = document.getElementById('register-form');
      registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value
        };
        controller.register(data);
      });
      document.getElementById('redirect-to-login').addEventListener('click', function () {
        view.setActiveScreen('login');
      });
      break;

    case 'login':
      document.getElementById('app').innerHTML = component.login;
      var loginForm = document.getElementById('login-form');
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
          email: loginForm.email.value,
          password: loginForm.password.value
        };
        controller.login(data);
      });
      document.getElementById('redirect-to-register').addEventListener('click', function () {
        view.setActiveScreen('register');
      });
      break;

    case 'chatPage':
      document.getElementById('app').innerHTML = component.chatPage;
      var sendMessageForm = document.getElementById('send-message-form');
      sendMessageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(sendMessageForm.message.value);
        var message = {
          content: sendMessageForm.message.value,
          owner: model.currentUser.email,
          createdAt: new Date().toISOString()
        };
        var messageFromBot = {
          content: sendMessageForm.message.value,
          owner: 'Chat Bot'
        };

        if (sendMessageForm.message.value.trim() !== "") {
          view.addMessage(message);
          view.addMessage(messageFromBot);
        }

        updateMessage(message);
        sendMessageForm.message.value = '';
        document.querySelector('.list-message').scrollBy(0, 500);
      });
      break;
  }
};

view.setErrorMessage = function (elementId, content) {
  document.getElementById(elementId).innerText = content;
};

view.addMessage = function (message) {
  var messageWrapper = document.createElement('div');
  messageWrapper.classList.add('message');

  if (message.owner === model.currentUser.email) {
    messageWrapper.classList.add('mine');
    messageWrapper.innerHTML = "\n        <div class=\"content\">".concat(message.content, "</div>");
  } else {
    messageWrapper.classList.add('their');
    messageWrapper.innerHTML = "\n        <div class=\"owner\">".concat(message.owner, "</div>\n        <div class=\"content\">").concat(message.content, "</div>");
  }

  console.log(messageWrapper);
  document.querySelector('.list-message').appendChild(messageWrapper);
};