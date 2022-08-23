   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
   import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyCmwPoBgVLDSzt6EiWRQiaAP8G-WsSq0WI",
     authDomain: "resto-82c6b.firebaseapp.com",
     projectId: "resto-82c6b",
     storageBucket: "resto-82c6b.appspot.com",
     messagingSenderId: "433792891286",
     appId: "1:433792891286:web:31069f75a497e4ac0845b7"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   const db = getFirestore()

   export const saveTask = (name,phone,email,people,date) => {
    addDoc(collection(db,'reservas'), {name,phone,email,people,date})
    .then(() => console.log('agregar mensaje de "enviado"'))
   }