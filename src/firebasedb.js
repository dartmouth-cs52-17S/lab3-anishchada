import firebase from 'firebase';

// Got a lot of help from Jon Gonzalez for this component for the lab -- much thanks to him!
// A good amount of the firebase code was provided to us in snippets by Tim in the assignment itself like snapshot()

// Referenced the documentation a good amount: https://firebase.google.com/docs/database/web/read-and-write#value_events

// Initialize Firebase -- from the Firebase project

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

export function fetchNotes(callback) {
  firebase.database().ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function Delete(id) {
  firebase.database().ref('notes').child(id).remove();
}

export function Update(id, note) {
  console.log('updating');
  console.log(note);
  firebase.database().ref('notes').child(id).set(note);
}

export function Add(note) {
  const id = database.ref('notes').push().key;
  firebase.database().ref('notes').child(id).set(note);
}
