const casesOpenedText = document.querySelector("#casesopened");

const firebaseConfig = {
	apiKey: "AIzaSyD3gW_LmVUQcbT2oFKyvpIb2V0q4V7kfRA",
	authDomain: "ezskins-bcb15.firebaseapp.com",
	projectId: "ezskins-bcb15",
  databaseURL: "https://ezskins-bcb15-default-rtdb.europe-west1.firebasedatabase.app",
	storageBucket: "ezskins-bcb15.appspot.com",
	messagingSenderId: "523489662504",
	appId: "1:523489662504:web:6c32e739858d90f66e871d",
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const casesRef = database.ref("caseopened");

casesRef.on("value", (snapshot) => {
  const casesData = snapshot.val();
  
  casesOpenedText.textContent = casesData;
});