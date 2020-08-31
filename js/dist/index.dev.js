"use strict";

window.onload = function () {
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
  console.log(firebase.app());
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      };

      if (user.emailVerified) {
        view.setActiveScreen('chatPage');
      } else {
        alert('Please verify your email');
        firebase.auth().signOut();
        view.setActiveScreen('login');
      }

      view.setActiveScreen('chatPage');
    } else {
      view.setActiveScreen('login');
    }
  }); // templateFirestore()

  loadMessage();
};

var loadMessage = function loadMessage() {
  var docId, response, user, conversationTitle, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.async(function loadMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          docId = 'mVfQAtNwH5FsEMmNkv8G';
          _context.next = 3;
          return regeneratorRuntime.awrap(firebase.firestore().collection('conversations').doc(docId).get());

        case 3:
          response = _context.sent;
          user = getOneDocument(response);
          console.log(user);
          conversationTitle = document.getElementById('conversationTitle');
          conversationTitle.innerText = user.title;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 11;

          for (_iterator = user.messages[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            item = _step.value;
            console.log(item.content);
            view.addMessage(item);
          } // console.log(user.messages[0].content)


          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](11);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 22:
          _context.prev = 22;

          if (!_didIteratorError) {
            _context.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context.finish(22);

        case 26:
          return _context.finish(19);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[11, 15, 19, 27], [20,, 22, 26]]);
};

var updateMessage = function updateMessage(message) {
  var docId, messageToAdd, el;
  return regeneratorRuntime.async(function updateMessage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          docId = 'mVfQAtNwH5FsEMmNkv8G';
          messageToAdd = {
            content: message.content,
            owner: message.owner,
            createdAt: message.createdAt
          };
          el = {
            messages: firebase.firestore.FieldValue.arrayUnion(messageToAdd)
          };
          firebase.firestore().collection('conversations').doc(docId).update(el); // console.log(firebase.firestore().collection('conversations').doc(docId))

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // const templateFirestore = async () => {
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


var getManyDocument = function getManyDocument(response) {
  var listData = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = response.docs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var doc = _step2.value;
      console.log(getOneDocument(doc));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return listData;
};

var getOneDocument = function getOneDocument(response) {
  var data = response.data();
  data.id = response.id;
  return data;
};