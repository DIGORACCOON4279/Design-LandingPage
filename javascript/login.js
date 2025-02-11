
const openLogin = document.querySelector(".openLoginModal");
const closeLogin = document.querySelector(".closeLoginModal");
const modalLogin = document.querySelector(".modalLogin");
const coverLogin = document.querySelector("#coverLoginModal");
const goRegister = document.querySelector(".goRegister");

goRegister.addEventListener("click", () => {
    modalRegister.classList.add("active");
    coverRegister.classList.add("active");
    modalLogin.classList.remove("active");
    coverLogin.classList.remove("active");
});

// Función para abrir el modal
openLogin.addEventListener("click", () => {
    modalLogin.classList.add("active");
    coverLogin.classList.add("active");
});

// Función para cerrar el modal
closeLogin.addEventListener("click", () => {
    modalLogin.classList.remove("active");
    coverLogin.classList.remove("active");
});

// Cerrar modal al hacer clic fuera de él
coverLogin.addEventListener("click", () => {
    modalLogin.classList.remove("active");
    coverLogin.classList.remove("active");
});
