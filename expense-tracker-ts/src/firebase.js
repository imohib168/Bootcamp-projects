import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBNkSmjdUwdVkMjqw4gtt5JhC7-fGWsbqY",
    authDomain: "expense-tracker-pwa-44279.firebaseapp.com",
    projectId: "expense-tracker-pwa-44279",
    storageBucket: "expense-tracker-pwa-44279.appspot.com",
    messagingSenderId: "513888307950",
    appId: "1:513888307950:web:452f6e9db18647708f81ff"
};

firebase.initializeApp(firebaseConfig);

export default firebase;