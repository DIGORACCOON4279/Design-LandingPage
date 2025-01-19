// Obtener todos los elementos <details>
const detailsElements = document.querySelectorAll('.accordion .details');

// Definir las imágenes correspondientes a cada acordeón
const images = [
    'img/illustrationOne.png', // Imagen para el primer acordeón
    'img/illustrationTwo.png', // Imagen para el segundo acordeón
    'img/illustrationThree.png', // Imagen para el tercer acordeón
    'img/illustrationFour.png'  // Imagen para el cuarto acordeón
];

// Imagen predeterminada para cuando todos los acordeones están cerrados
const defaultImageSrc = 'img/illustrationFive.png';

// Configuración inicial: establecer todas las imágenes a la predeterminada
document.querySelectorAll('.illustration').forEach((img) => {
    img.src = defaultImageSrc;
    img.style.zIndex = "1";
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
                    otherImage.src = defaultImageSrc; // Imagen predeterminada
                    otherImage.style.zIndex = "1"; // Resetear z-index
                }
            }
        });

        // Obtener la imagen correspondiente
        const image = document.querySelector(`#image${index + 1}`);

        // Cambiar la imagen y ajustar el z-index cuando el acordeón está abierto
        if (details.open) {
            image.src = images[index]; // Cambia la imagen cuando se abre el acordeón
            image.style.zIndex = "7"; // Trae la imagen al frente
        } else {
            // Restaura la imagen original cuando el acordeón está cerrado
            image.src = defaultImageSrc;
            image.style.zIndex = "1"; // Resetear z-index
        }
    });
});
