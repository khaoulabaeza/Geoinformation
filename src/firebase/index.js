import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: "AIzaSyCCDpZ21vB4IsPF9xx2Ckpoj4ylNpJiIvc",
  authDomain: "siteweb-geoinfo.firebaseapp.com",
  projectId: "siteweb-geoinfo",
  storageBucket: "siteweb-geoinfo.appspot.com",
  messagingSenderId: "860143932325",
  appId: "1:860143932325:web:d7f1df9020e53b3cfc4e4c",
  measurementId: "G-VX0FQD2W3E",
};
const app = firebase.initializeApp(config);
getAnalytics(app);
