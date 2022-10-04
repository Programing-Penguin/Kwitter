//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name1=message_data["name"];
like=message_data["like"];
message=message_data["message"];
name1_with_tag="<h4> "+ "<img class= 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" +like+" </span></button><hr>";

row = name1_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_like = Number(like)+ 1;
      console.log(update_like);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_like
      });
}
function send() {
msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0

});
document.getElementById("message").value="";
}
