import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA-tIJFEuYiB_AZBbA5TUNgMmZvIbRZtAY",
    authDomain: "somapay-teste.firebaseapp.com",
    projectId: "somapay-teste",
    storageBucket: "somapay-teste.appspot.com",
    messagingSenderId: "88739038467",
    appId: "1:88739038467:web:007ffa6f70065aebb99536"
};

firebase.initializeApp(firebaseConfig)

export { firebase }