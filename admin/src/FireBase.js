import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD_gYOdbOb2Y6LIFbsWxybbZDtLSh6L8Go",
    authDomain: "lowstarfilm.firebaseapp.com",
    projectId: "lowstarfilm",
    storageBucket: "lowstarfilm.appspot.com",
    messagingSenderId: "22386920087",
    appId: "1:22386920087:web:dcbee7d304c0398a66b7d2",
    measurementId: "G-SKTNFHQN9V"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export default storage;