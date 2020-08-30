window.onload = () => {
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
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      }
      if (user.emailVerified) {
        view.setActiveScreen('chatPage')
      } else {
        alert('Please verify your email')
        firebase.auth().signOut()
        view.setActiveScreen('login')
      }
      view.setActiveScreen('chatPage')
    } else {
      view.setActiveScreen('login')
    }
  })
  // templateFirestore()
  loadMessage();
}

const loadMessage = async () => {
  const docId = 'mVfQAtNwH5FsEMmNkv8G'
  const response = await firebase.firestore().collection('conversations').doc(docId).get()
  const user = getOneDocument(response)
  console.log(user)
  const conversationTitle = document.getElementById('conversationTitle')
  conversationTitle.innerText = user.title
  for(const item of user.messages)
  {
    console.log(item.content)
    view.addMessage(item)
  }
  // console.log(user.messages[0].content)
}
const updateMessage = async (message) =>{
  const docId = 'mVfQAtNwH5FsEMmNkv8G'
  const messageToAdd = {
    content : message.content,
    owner : message.owner,
    createdAt : message.createdAt
  }
  const el = {
    messages: firebase.firestore.FieldValue.arrayUnion(messageToAdd)
  }
  firebase.firestore().collection('conversations').doc(docId).update(el)

  // console.log(firebase.firestore().collection('conversations').doc(docId))
}
// const templateFirestore = async () => {
//   //get one
//   const docId = '9plvsXVRzr3yTyLepQ44'
//   const response = await firebase.firestore().collection('users').doc(docId).get()
//   // const user = getOneDocument(response)
//   // console.log(user)
//   //get many
//   const responseMany = await firebase.firestore().collection('users').where('age', '==', 20).get()
//   // const firstUser = responseMany.docs[0].data();
//   // const firstUser = getOneDocument(responseMany.docs[0])
//   // console.log(firstUser)
//   getManyDocument(responseMany)
//   const dataToCreate = {
//     age: 100,
//     name: 'ABC',
//   }
//   // firebase.firestore().collection('users').add(dataToCreate)

//   const idToUpdate = 'eKpmdiHzp5yfzxj8yCUo';
//   const dataToUpdate = {
//     name: 'Updated',
//     phone: firebase.firestore.FieldValue.arrayUnion('09123')
//   }
//   firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate)
// }


const getManyDocument = (response) => {
  const listData = [];
  for (const doc of response.docs) {
    console.log(getOneDocument(doc))
  }
  return listData
}
const getOneDocument = (response) => {
  const data = response.data()
  data.id = response.id
  return data
}
