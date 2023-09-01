
const firebaseConfig = {
      apiKey: "AIzaSyCmQ6PM21zQ2hwqf7TEB0fuq7boKxqz7xo",
      authDomain: "let-us-chat-cccfd.firebaseapp.com",
      databaseURL: "https://let-us-chat-cccfd-default-rtdb.firebaseio.com",
      projectId: "let-us-chat-cccfd",
      storageBucket: "let-us-chat-cccfd.appspot.com",
      messagingSenderId: "527830372361",
      appId: "1:527830372361:web:dc492100c5362269e9a8d8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class=' room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
