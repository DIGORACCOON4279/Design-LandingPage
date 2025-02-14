// import { db } from "firebase-config.js";
// import { collection, getDocs } from "firebase/firestore";

// // Intentar obtener documentos de prueba
// const fetchData = async () => {
//     try {
//         const querySnapshot = await getDocs(collection(db, "register"));
//         querySnapshot.forEach(doc => {
//             console.log(doc.id, " => ", doc.data());
//         });
//     } catch (error) {
//         console.error("Error obteniendo datos:", error);
//     }
// };

// fetchData();



// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const querySnapshot = await db.collection("register").get();
//         querySnapshot.forEach(doc => {
//             console.log(`📄 Documento: ${doc.id}`, doc.data());
//         });
//     } catch (error) {
//         console.error("❌ Error obteniendo datos:", error);
//     }
// });


// Firebase Authentication

// Esperar a que Firebase cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("👤 Usuario autenticado:", user.email);
        } else {
            console.log("🚪 No hay usuario autenticado");
        }
    });
});

// Register
const registerUser = (event) => {
    event.preventDefault(); // Evita recargar la página

    const nameInput = document.getElementById("registerName");
    const emailInput = document.getElementById("registerEmail");
    const passwordInput = document.getElementById("registerPassword");
    const confirmPasswordInput = document.getElementById("confirmRegisterPassword");

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert("❌ Las contraseñas no coinciden");
        return;
    }

    // Crear el usuario en Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;

            // Actualizar el perfil del usuario con su nombre
            return user.updateProfile({
                displayName: name
            }).then(() => {
                console.log("✅ Usuario registrado con nombre:", user.displayName);

                // Guardar el usuario en Firestore
                return db.collection("users").doc(user.uid).set({
                    name: name,
                    email: email
                });
            });
        })
        .then(() => {
            // alert("Registro exitoso 🎉");

            // Estar pendiente del div creado en la seccion register el html

            const messageRegistration = document.createElement("div");
            messageRegistration.classList.add("messageRegistration");
            messageRegistration.innerHTML = `<p class="registration">Successful registration! 🎉</p>`;


            const messageNewRegistration = document.getElementById('messageNewRegistration'); // Reemplaza con el ID real de tu contenedor
            messageNewRegistration.appendChild(messageRegistration);
            messageNewRegistration.style.opacity = "1";
            messageNewRegistration.style.visibility = "visible";
            messageNewRegistration.style.transform = "translate(-50%, -50%)";
            messageNewRegistration.style.zIndex = "9";

            // Clear input fields
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            confirmPasswordInput.value = "";


            //  Remove messaga after 2500ms
            setTimeout(() => {
                messageNewRegistration.remove();
            }, 2500);

        })
        .catch(error => {
            console.error("❌ Error en el registro:", error.message);
            alert(error.message);
        });
};

// Escuchar el envío del formulario
document.querySelector(".registerContainer").addEventListener("submit", registerUser);



// Login

// const loginUser = () => {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginassword").value;

//     auth.signInWithEmailAndPassword(email, password)
//         .then(userCredential => {
//             console.log("✅ Usuario logueado:", userCredential.user);
//             alert("Inicio de sesión exitoso");
//         })
//         .catch(error => {
//             console.error("❌ Error en el login:", error.message);
//             alert(error.message);
//         });
// };

const loginUser = (event) => {
    event.preventDefault(); // Evita recargar la página

    // const email = document.getElementById("loginEmail").value;
    // const password = document.getElementById("loginPassword").value;

    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const email = emailInput.value;
    const password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("✅ Usuario logueado:", userCredential.user.email);
            // alert("Inicio de sesión exitoso 🎉");

            const messageLogin = document.createElement("div");
            messageLogin.classList.add("messageLogin");
            messageLogin.innerHTML = `<p class="login">Successful registration! 🎉</p>`;


            const messageNewLogin = document.getElementById('messageNewLogin'); // Reemplaza con el ID real de tu contenedor
            messageNewLogin.appendChild(messageLogin);
            messageNewLogin.style.opacity = "1";
            messageNewLogin.style.visibility = "visible";
            messageNewLogin.style.transform = "translate(-50%, -50%)";
            messageNewLogin.style.zIndex = "9";

            // Clear input fields
            emailInput.value = "";
            passwordInput.value = "";

            // Remove message after 2500ms
            setTimeout(() => {
                messageNewLogin.remove();
            }, 2500);

        })
        .catch(error => {
            console.error("❌ Error en el login:", error.message);
            alert(error.message);
        });
};

// Escuchar el formulario de login
document.querySelector(".loginContainer").addEventListener("submit", loginUser);

// Logout

// const logoutUser = () => {
//     auth.signOut()
//         .then(() => {
//             console.log("👋 Usuario cerró sesión");
//             alert("Sesión cerrada");
//         })
//         .catch(error => {
//             console.error("❌ Error al cerrar sesión:", error.message);
//         });
// };

// // Agregar evento al botón de logout
// document.getElementById("logoutButton").addEventListener("click", logoutUser);


