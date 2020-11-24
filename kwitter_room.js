


  var firebaseConfig = {
      apiKey: "AIzaSyBC2vctCuigi09Qm0l1chEgEI5rmpSyQ1w",
      authDomain: "kwitter-78189.firebaseapp.com",
      databaseURL: "https://kwitter-78189.firebaseio.com",
      projectId: "kwitter-78189",
      storageBucket: "kwitter-78189.appspot.com",
      messagingSenderId: "1067649068180",
      appId: "1:1067649068180:web:18b8fc64cdb335df6dd881",
      measurementId: "G-LBDXKCQCTE"
    };

    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
 
var UserID=localStorage.getItem("User");
document.getElementById("UserPro").innerHTML="Welcome "+UserID+" !";
function addRoom(){
 RoomName=document.getElementById("room_name").value;
 firebase.database().ref("/").child(RoomName).update({
   purpose:"Change name"
 });
 localStorage.setItem("roomname",RoomName);// this variable is different only supposed to  be used when you are creating a new room
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("get data function entered")
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"<div><hr>";
   document.getElementById("output").innerHTML+=row;      
      });});}
getData();
function Logout(){
 localStorage.removeItem("User");
 window.location="index.html";
}

function redirectToRoomName(name)
{
  console.log("Errors");
  localStorage.setItem("room_name",name);// this was the roomname variable which you were supposed to use.becuase when you click from the list any room
  // that time your roomname changes
  window.location="kwitter_page.html";
} 