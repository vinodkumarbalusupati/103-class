var firebaseConfig = {
    apiKey: "AIzaSyAhfn5w5CKd9JjYn1rOHiZytT_xcJlENQQ",
    authDomain: "lets-chat-web-app-f4967.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f4967-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f4967",
    storageBucket: "lets-chat-web-app-f4967.appspot.com",
    messagingSenderId: "190534195842",
    appId: "1:190534195842:web:3c0f7696cf303bc2abf29b",
    measurementId: "G-12K3JB0GTP"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebase)

user_name
room_name

function send()
{
  msg = document.getElementById("msg").Value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value ="";
}