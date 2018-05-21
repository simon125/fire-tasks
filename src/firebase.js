
import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCefbRyaiFNnn9IF94p562muY3Bxi2dDi4",
    authDomain: "simons-incredible-project.firebaseapp.com",
    databaseURL: "https://simons-incredible-project.firebaseio.com",
    projectId: "simons-incredible-project",
    storageBucket: "simons-incredible-project.appspot.com",
    messagingSenderId: "80279257799"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()