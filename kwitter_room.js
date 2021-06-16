
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDYLzrFNAnR29q46cZl_46J_rAtWdo7e1E",
      authDomain: "kwitter-6ec8a.firebaseapp.com",
      databaseURL: "https://kwitter-6ec8a-default-rtdb.firebaseio.com",
      projectId: "kwitter-6ec8a",
      storageBucket: "kwitter-6ec8a.appspot.com",
      messagingSenderId: "630023340819",
      appId: "1:630023340819:web:5dde3dada698dd3dcad0e6",
      measurementId: "G-V66KRG0D1C"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

