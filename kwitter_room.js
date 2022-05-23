function home(){
      window.location = "index.html";
  }

var firebaseConfig = {
      apiKey: "AIzaSyCHbsMjL3xeyINWCAMXR0f9j6Ltz0YbuDo",
      authDomain: "kwitter-62207.firebaseapp.com",
      databaseURL: "https://kwitter-62207-default-rtdb.firebaseio.com",
      projectId: "kwitter-62207",
      storageBucket: "kwitter-62207.appspot.com",
      messagingSenderId: "215674802073",
      appId: "1:215674802073:web:863886608d5fcf5f7c8d08"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code


      //End code
      });});}
getData();
