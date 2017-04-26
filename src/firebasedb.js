import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC0ETADED65bBp7sETgXclOP70H_EGlUmg',
  authDomain: 'lab-3-firebase.firebaseapp.com',
  databaseURL: 'https://lab-3-firebase.firebaseio.com',
  projectId: 'lab-3-firebase',
  storageBucket: 'lab-3-firebase.appspot.com',
  messagingSenderId: '959920019791',
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();
console.log(database);

firebase.database().ref('notes').on('value', (snapshot) => {
  const newNoteState = snapshot.val();
  console.log('Here is FIREBASE');
  console.log(newNoteState);
});

export default function fetchNotes(callback) {
  console.log('Inside Fetchnotes function');
}

export function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref(`users/${userId}`).set({
    username: name,
    email,
    profile_picture: imageUrl,
  });
}
