var firebase = require('firebase');
 // Initialize Firebase
var config = {
	apiKey: "AIzaSyAcM8fMB6CNcOTYN85l1YtV7XGFlyM3hNY",
	authDomain: "carnd-meetup.firebaseapp.com",
	databaseURL: "https://carnd-meetup.firebaseio.com",
	storageBucket: "carnd-meetup.appspot.com",
	messagingSenderId: "1056573944937"
};
firebase.initializeApp(config);

module.exports = firebase.database().ref();
