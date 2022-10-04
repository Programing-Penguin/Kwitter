// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnOdCpYrxtTA7WPZwf78oCQHHJdZ8Wo48",
  authDomain: "pwitter-8e572.firebaseapp.com",
  databaseURL: "https://pwitter-8e572-default-rtdb.firebaseio.com",
  projectId: "pwitter-8e572",
  storageBucket: "pwitter-8e572.appspot.com",
  messagingSenderId: "560457958848",
  appId: "1:560457958848:web:e28bd5ffe5d18b0b5f7425"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML=user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+ Room_names)
row = "<div class= 'room_name' id ="+ Room_names+" onclick = 'redirectToRoomName(this.id)'># "+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding user"
 });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function Logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location="index.html"
}