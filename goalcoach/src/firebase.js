import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCeIfyK4UfuMbSwC2WRFDGFv2T9lzVVL2Q",
    authDomain: "goalcoach-dc673.firebaseapp.com",
    databaseURL: "https://goalcoach-dc673.firebaseio.com",
    projectId: "goalcoach-dc673",
    storageBucket: "goalcoach-dc673.appspot.com",
    messagingSenderId: "796600997850",
    appId: "1:796600997850:web:bb85438e30d3518f4492e3",
    measurementId: "G-HGHYH6BW51"
  };

 export const firebaseApp = firebase.initializeApp(config);
 export const goalRef = firebase.database().ref('goals');
 export const completeGoalRef = firebase.database().ref('completeGoals');