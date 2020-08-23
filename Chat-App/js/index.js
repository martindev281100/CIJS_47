window.onload = () =>{
    var firebaseConfig = {
        apiKey: "AIzaSyD85MnrtiNxq8p1nbaw5rL5dARlqXDWV5U",
        authDomain: "chat-app-a4724.firebaseapp.com",
        databaseURL: "https://chat-app-a4724.firebaseio.com",
        projectId: "chat-app-a4724",
        storageBucket: "chat-app-a4724.appspot.com",
        messagingSenderId: "212206393626",
        appId: "1:212206393626:web:dd948283b8c9e649ff74a3"
      };
      firebase.initializeApp(firebaseConfig);
      console.log(firebase.app())
    view.setActiveScreen('login')
}
