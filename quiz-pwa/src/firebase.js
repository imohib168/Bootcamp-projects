import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6Dinq8R2pNPgbqTpTHDC1uOoUi3YuClc",
    authDomain: "quiz-pwa-3d2c3.firebaseapp.com",
    projectId: "quiz-pwa-3d2c3",
    storageBucket: "quiz-pwa-3d2c3.appspot.com",
    messagingSenderId: "45473388618",
    appId: "1:45473388618:web:0509ef446e39875cce6eb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;