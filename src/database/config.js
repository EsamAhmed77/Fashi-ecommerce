import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaLMe82uRIVOwRYAaSfbIYr1grNWolA84",
  authDomain: "fashe-ecommerce-b2127.firebaseapp.com",
  databaseURL: "https://fashe-ecommerce-b2127.firebaseio.com",
  projectId: "fashe-ecommerce-b2127",
  storageBucket: "fashe-ecommerce-b2127.appspot.com",
  messagingSenderId: "730759126892",
  appId: "1:730759126892:web:85cf736c0782aec46ddd49",
  measurementId: "G-Y00PJKBPLV"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export {database};

