//YOUR FIREBASE LINKS
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

    room_name=localStorage.getItem("room_name");
    var user_name =localStorage.getItem("User");
    console.log("page--"+ room_name);
       
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
document.getElementById("output").innerHTML+=name_with_tag+message_with_tag+like_button+span_with_tag;

//End code
}});}); }

getData();

function send()
{
      msg=document.getElementById("msg").value;
      console.log("send fucntion entered");
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}

function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="kwitter.html";
}

function updateLike(message_id)
{
      console.log(message_id);
      button_id=message_id;

      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
}