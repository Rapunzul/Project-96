//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
