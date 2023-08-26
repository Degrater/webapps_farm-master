const { initializeApp } = require("../node_modules/firebase/app");
const { getFirestore, collection, addDoc } = require("../node_modules/firebase/firestore");

const firebaseConfig = {

  apiKey: "AIzaSyCSSVDyFs2vZxn00oK2I3aQOwPc0q9zdWk",

  authDomain: "overguidex-6b0d4.firebaseapp.com",

  databaseURL: "https://overguidex-6b0d4-default-rtdb.firebaseio.com",

  projectId: "overguidex-6b0d4",

  storageBucket: "overguidex-6b0d4.appspot.com",

  messagingSenderId: "52513995569",

  appId: "1:52513995569:web:4d120fb2727f7e4737ce10",

  measurementId: "G-DR0VBK0MD0"

};

const addUserData = async (phrase) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    const docRef = await addDoc(collection(db, "basket"), {
    Заказ:`${phrase}`
    });
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
module.exports = {
  addUserData: addUserData
};