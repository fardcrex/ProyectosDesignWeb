import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyDTh3cgW6QeGWIR4DA7wbCDVwZ63HOzwDg",
  authDomain: "aprendiendo-vue-proyectos.firebaseapp.com",
  databaseURL: "https://aprendiendo-vue-proyectos.firebaseio.com",
  projectId: "aprendiendo-vue-proyectos",
  storageBucket: "aprendiendo-vue-proyectos.appspot.com",
  messagingSenderId: "1036104609624",
  appId: "1:1036104609624:web:d56e30ac3fac84349f3f2d"
};
var fire = firebase.initializeApp(config);
export default fire;
