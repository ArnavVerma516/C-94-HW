
var firebaseConfig = {
  apiKey: "AIzaSyBzkrgOyYY63W6WBIelsdysgKok9_EyPHU",
  authDomain: "kwitter-d155f.firebaseapp.com",
  databaseURL: "https://kwitter-d155f-default-rtdb.firebaseio.com",
  projectId: "kwitter-d155f",
  storageBucket: "kwitter-d155f.appspot.com",
  messagingSenderId: "942462243094",
  appId: "1:942462243094:web:c95624dac0b4bee6a00037"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  " + user_name + " !";
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
