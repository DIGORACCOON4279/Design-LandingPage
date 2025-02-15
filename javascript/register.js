
const openRegister = document.querySelector(".openRegisterModal");
const closeRegister = document.querySelector(".closeRegisterModal");
const modalRegister = document.querySelector(".modalRegister");
const coverRegister = document.querySelector("#coverRegisterModal");
const openRegisterfromHeroSection = document.querySelector("#openRegisterfromHeroSection");
const goLogin = document.querySelector(".goLogin");

goLogin.addEventListener("click", () => {
    modalRegister.classList.remove("active");
    coverRegister.classList.remove("active");
    modalLogin.classList.add("active");
    coverLogin.classList.add("active");
});

// Función para abrir el modal
openRegister.addEventListener("click", () => {
    modalRegister.classList.add("active");
    coverRegister.classList.add("active");
});

// Función para cerrar el modal
closeRegister.addEventListener("click", () => {
    modalRegister.classList.remove("active");
    coverRegister.classList.remove("active");
});

// Cerrar modal al hacer clic fuera de él
coverRegister.addEventListener("click", () => {
    modalRegister.classList.remove("active");
    coverRegister.classList.remove("active");
});

openRegisterfromHeroSection.addEventListener("click", () => {
    modalRegister.classList.add("active");
    coverRegister.classList.add("active");
});
