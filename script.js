const firebaseConfig = {
  apiKey: "AIzaSyAk8pEsoO3Ml5Ae3DRwbJxs5Uy44NFErAo",
  authDomain: "landora-df962.firebaseapp.com",
  projectId: "landora-df962",
  storageBucket: "landora-df962.firebasestorage.app",
  messagingSenderId: "127786678409",
  appId: "1:127786678409:web:5f6caaacf0e7ec89d9ee58",
  measurementId: "G-T6SXFN5SKJ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

async function loadProperties(){

const container = document.getElementById("property-list");

const snapshot = await db.collection("properties").get();

snapshot.forEach(doc => {

const data = doc.data();

const card = document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${data.title}</h3>
<p><b>Location:</b> ${data.location}</p>
<p class="price">Price: ${data.price}</p>
<p>${data.description}</p>
`;

container.appendChild(card);

});

}

loadProperties();
