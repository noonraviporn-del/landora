// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "landora-df962.firebaseapp.com",
  projectId: "landora-df962",
  storageBucket: "landora-df962.appspot.com",
  messagingSenderId: "123456789",
  appId: "APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Load properties from Firestore
async function loadProperties(){

  const container = document.getElementById("property-list");

  const snapshot = await db.collection("properties").get();

  snapshot.forEach(doc => {

    const data = doc.data();

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${data.title}</h3>
      <p><b>Location:</b> ${data.location}</p>
      <p class="price">Price: ${data.price}</p>
      <p>${data.description}</p>
    `;

    container.appendChild(card);

  });

}

loadProperties();
