



// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // Importar dos funciones del modulo de firebase
// // initializeApp: Me permite iniciar la conexion a firebase
// // getFirestore: Me permite obtener una instacia de firestore

// // const firebaseConfig = {
// //     apiKey: "AIzaSyCnXa7PaIFYpcg31a5l8zYrdr9smFapP_8",
// //     authDomain: "roller-seed.firebaseapp.com",
// //     projectId: "roller-seed",
// //     storageBucket: "roller-seed.firebasestorage.app",
// //     messagingSenderId: "924901488498",
// //     appId: "1:924901488498:web:4d1f77b87306eeeabe0feb"
// // };

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID
// };

// // Inicializa Firebase y la pasa la configuarcion como argumento
// // Esto etorna una instancia de firebase
// const app = initializeApp(firebaseConfig);

// // Ahora uso esa instancia para obtener el servivio de firestore
// export const db = getFirestore(app);

// console.log("🔥 Firebase importado en main.js:", db);



// Configuración de Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyCnXa7PaIFYpcg31a5l8zYrdr9smFapP_8",
//     authDomain: "roller-seed.firebaseapp.com",
//     projectId: "roller-seed",
//     storageBucket: "roller-seed.firebasestorage.app",
//     messagingSenderId: "924901488498",
//     appId: "1:924901488498:web:4d1f77b87306eeeabe0feb"
// };

// // Inicializar Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore(); // Acceder a Firestore

// // Hacer `db` accesible globalmente
// window.db = db;
// console.log("🔥 Firebase conectado con éxito");


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCnXa7PaIFYpcg31a5l8zYrdr9smFapP_8",
    authDomain: "roller-seed.firebaseapp.com",
    projectId: "roller-seed",
    storageBucket: "roller-seed.firebasestorage.app",
    messagingSenderId: "924901488498",
    appId: "1:924901488498:web:4d1f77b87306eeeabe0feb"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore y Authentication
const db = firebase.firestore();
const auth = firebase.auth();

// Hacer `db` y `auth` accesibles globalmente
window.db = db;
window.auth = auth;

console.log("🔥 Firebase conectado con éxito");

auth.onAuthStateChanged(user => {
    if (user) {
        console.log("👤 Usuario autenticado:", user.email);
        console.log("🆔 UID:", user.uid);
        console.log("📛 Nombre:", user.displayName); // Si lo guardaste al registrarlo
    } else {
        console.log("🚪 No hay usuario autenticado");
    }
});
