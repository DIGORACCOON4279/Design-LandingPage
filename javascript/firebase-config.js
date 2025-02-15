

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
