// Obtener todos los elementos <details>
const detailsElements = document.querySelectorAll('.accordion .details');

// Definir las imágenes correspondientes a cada acordeón
const images = [
    'img/optionOne.png', // Imagen para el primer acordeón
    'img/optionTwo.png', // Imagen para el segundo acordeón
    'img/optionThree.png', // Imagen para el tercer acordeón
    'img/optionFour.png',
    'img/optionFive.png', // Imagen para el cuarto acordeón
    'img/optionSix.png',  // Imagen para el cuarto acordeón
];

// Imagen predeterminada para cuando todos los acordeones están cerrados
const defaultImageSrc = 'img/optionDefault.png';

// Configuración inicial: establecer todas las imágenes con valores predeterminados
document.querySelectorAll('.illustration').forEach((img) => {
    img.src = defaultImageSrc; // Mostrar la imagen predeterminada al inicio
    img.style.zIndex = "1";
    img.style.opacity = "1"; // Asegurar que sea visible al inicio
    img.style.transition = "opacity 0.3s linear"; // Transición suave
});

// Agregar un event listener a cada acordeón
detailsElements.forEach((details, index) => {
    details.addEventListener('toggle', () => {
        // Cerrar los otros acordeones excepto el que se está abriendo
        detailsElements.forEach((otherDetails, otherIndex) => {
            if (otherDetails !== details && otherDetails.open) {
                otherDetails.open = false;

                // Restaurar la imagen original y z-index de los otros acordeones
                const otherImage = document.querySelector(`#image${otherIndex + 1}`);
                if (otherImage) {
                    otherImage.style.opacity = "0"; // Ocultar suavemente
                    setTimeout(() => {
                        otherImage.src = defaultImageSrc; // Cambiar a la imagen predeterminada
                        otherImage.style.zIndex = "1"; // Resetear z-index
                        otherImage.style.opacity = "1"; // Mostrar nuevamente la imagen predeterminada
                    }, 300); // Sincronizado con la transición
                }
            }
        });

        // Obtener la imagen correspondiente al acordeón actual
        const image = document.querySelector(`#image${index + 1}`);

        if (details.open) {
            // Ocultar la imagen actual antes de cambiarla
            image.style.opacity = "0"; // Ocultar suavemente
            setTimeout(() => {
                image.src = images[index]; // Cambiar la imagen
                image.style.zIndex = "7"; // Traer al frente
                image.style.opacity = "1"; // Mostrar con transición
            }, 300); // Asegurar que el cambio sea visible tras cerrar otras
        } else {
            // Restaurar la imagen predeterminada al cerrar el acordeón
            image.style.opacity = "0"; // Ocultar suavemente
            setTimeout(() => {
                image.src = defaultImageSrc; // Cambiar a la imagen predeterminada
                image.style.zIndex = "1"; // Resetear z-index
                image.style.opacity = "1"; // Mostrar nuevamente la imagen predeterminada
            }, 300); // Sincronizado con la transición
        }
    });
});


// Este codigo con transform y transition

// // Obtener todos los elementos <details>
// const detailsElements = document.querySelectorAll('.accordion .details');

// // Definir las imágenes correspondientes a cada acordeón
// const images = [
//     'img/illustrationOne.png', // Imagen para el primer acordeón
//     'img/illustrationTwo.png', // Imagen para el segundo acordeón
//     'img/illustrationThree.png', // Imagen para el tercer acordeón
//     'img/illustrationFour.png'  // Imagen para el cuarto acordeón
// ];

// // Imagen predeterminada para cuando todos los acordeones están cerrados
// const defaultImageSrc = 'img/illustrationFive.png';

// // Configuración inicial: establecer todas las imágenes con valores predeterminados
// document.querySelectorAll('.illustration').forEach((img) => {
//     img.src = defaultImageSrc; // Mostrar la imagen predeterminada al inicio
//     img.style.zIndex = "1";
//     img.style.opacity = "1"; // Asegurar que sea visible al inicio
//     img.style.transition = "opacity 0.3s linear, transform 0.3s linear"; // Transición suave para ambas propiedades
//     img.style.transform = "translateY(0px)"; // Colocar la imagen en su posición original
// });

// // Agregar un event listener a cada acordeón
// detailsElements.forEach((details, index) => {
//     details.addEventListener('toggle', () => {
//         // Cerrar los otros acordeones excepto el que se está abriendo
//         detailsElements.forEach((otherDetails, otherIndex) => {
//             if (otherDetails !== details && otherDetails.open) {
//                 otherDetails.open = false;

//                 // Restaurar la imagen original y z-index de los otros acordeones
//                 const otherImage = document.querySelector(`#image${otherIndex + 1}`);
//                 if (otherImage) {
//                     otherImage.style.opacity = "0"; // Ocultar suavemente
//                     otherImage.style.transform = "translateY(-100px)"; // Mover la imagen hacia arriba
//                     setTimeout(() => {
//                         otherImage.src = defaultImageSrc; // Cambiar a la imagen predeterminada
//                         otherImage.style.zIndex = "1"; // Resetear z-index
//                         otherImage.style.opacity = "1"; // Mostrar nuevamente la imagen predeterminada
//                         otherImage.style.transform = "translateY(0px)"; // Volver a la posición original
//                     }, 300); // Sincronizado con la transición
//                 }
//             }
//         });

//         // Obtener la imagen correspondiente al acordeón actual
//         const image = document.querySelector(`#image${index + 1}`);

//         if (details.open) {
//             // Ocultar la imagen actual antes de cambiarla
//             image.style.opacity = "0"; // Ocultar suavemente
//             image.style.transform = "translateY(-100px)"; // Mover la imagen hacia arriba
//             setTimeout(() => {
//                 image.src = images[index]; // Cambiar la imagen
//                 image.style.zIndex = "7"; // Traer al frente
//                 image.style.opacity = "1"; // Mostrar con transición
//                 image.style.transform = "translateY(0px)"; // Volver a la posición original
//             }, 300); // Asegurar que el cambio sea visible tras cerrar otras
//         } else {
//             // Restaurar la imagen predeterminada al cerrar el acordeón
//             image.style.opacity = "0"; // Ocultar suavemente
//             image.style.transform = "translateY(-100px)"; // Mover la imagen hacia arriba
//             setTimeout(() => {
//                 image.src = defaultImageSrc; // Cambiar a la imagen predeterminada
//                 image.style.zIndex = "1"; // Resetear z-index
//                 image.style.opacity = "1"; // Mostrar nuevamente la imagen predeterminada
//                 image.style.transform = "translateY(0px)"; // Volver a la posición original
//             }, 300); // Sincronizado con la transición
//         }
//     });
// });


