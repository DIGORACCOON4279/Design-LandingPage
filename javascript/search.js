
const open = document.querySelector(".openModal");
const close = document.querySelector(".closeModal");
const modal = document.querySelector(".modal");
const cover = document.querySelector("#coverModal");

// Función para abrir el modal
open.addEventListener("click", () => {
    modal.classList.add("active");
    cover.classList.add("active");
});

// Función para cerrar el modal
close.addEventListener("click", () => {
    modal.classList.remove("active");
    cover.classList.remove("active");
});

// Cerrar modal al hacer clic fuera de él
cover.addEventListener("click", () => {
    modal.classList.remove("active");
    cover.classList.remove("active");
});
