// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "landora-df962.firebaseapp.com",
  projectId: "landora-df962",
  storageBucket: "landora-df962.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Load properties
async function loadProperties() {
  const container = document.getElementById("property-list");
  if (!container) return;

  const snapshot = await db.collection("properties").get();

  snapshot.forEach(doc => {
    const data = doc.data();

    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${data.title}</h3>
      <p>Location: ${data.location}</p>
      <p>Price: ${data.price}</p>
      <p>${data.description}</p>
      <hr>
    `;

    container.appendChild(card);
  });
}

loadProperties();
