document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;

  // Selección de los elementos según las clases del proyecto bannerContainer
  const prevArrow = document.querySelector('#prevCta'); // Flecha izquierda
  const nextArrow = document.querySelector('#nextCta'); // Flecha derecha
  const slider = document.querySelector('.bannerContainer .bannerBlock'); // Contenedor del carrusel
  const banners = document.querySelectorAll('.bannerContainer .bannerBlock .banner'); // Las imágenes
  const totalSlides = banners.length; // Total de imágenes

  // Eventos para las flechas
  prevArrow.addEventListener('click', () => {
      moveSlide(-1); // Mueve al slide anterior
  });

  nextArrow.addEventListener('click', () => {
      moveSlide(1); // Mueve al slide siguiente
  });

  // Función que maneja el movimiento del carrusel
  function moveSlide(direction) {
      currentIndex += direction;

      // Si el índice es menor que 0, va a la última imagen
      if (currentIndex < 0) {
          currentIndex = (totalSlides - 1);
      }
      // Si el índice es mayor o igual al total de imágenes, va al inicio
      else if(currentIndex >= totalSlides) {
          currentIndex = 0;
      }

      // Aplica la transformación para mover el slider
      slider.style.transition = 'transform 0.5s ease-in-out'; // Agrega una transición suave
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Opcional: Mover automáticamente las diapositivas cada 5 segundos
  setInterval(() => {
      moveSlide(1);
  }, 5000);
});



// Segunda opcion con clonacion del primera imagen

// document.addEventListener('DOMContentLoaded', function() {
//   let currentIndex = 1; // Comenzamos en el primer slide visible (después del clon)

//   // Selección de los elementos
//   const prevArrow = document.querySelector('#prevCta');
//   const nextArrow = document.querySelector('#nextCta');
//   const slider = document.querySelector('.bannerContainer .bannerBlock');
//   const banners = document.querySelectorAll('.bannerContainer .bannerBlock .banner');
//   const totalSlides = banners.length;

//   // Clonamos el primer y el último banner para permitir el "loop infinito"
//   const firstSlide = banners[0];
//   const lastSlide = banners[totalSlides - 1];

//   // Clonamos y agregamos los elementos
//   slider.appendChild(firstSlide.cloneNode(true)); // Clonamos el primer banner y lo agregamos al final
//   slider.insertBefore(lastSlide.cloneNode(true), banners[0]); // Clonamos el último banner y lo agregamos al principio

//   // Actualizamos el total de slides
//   const newTotalSlides = banners.length + 2; // Total de elementos después de la clonación

//   // Ajustamos la posición inicial para que no haya duplicados visibles
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;

//   // Eventos para las flechas
//   prevArrow.addEventListener('click', () => {
//     moveSlide(-1); // Mueve al slide anterior
//   });

//   nextArrow.addEventListener('click', () => {
//     moveSlide(1); // Mueve al slide siguiente
//   });

//   function moveSlide(direction) {
//     currentIndex += direction;

//     // Si llegamos al primer slide (de los originales), saltamos al último
//     if (currentIndex < 0) {
//       currentIndex = newTotalSlides - 3; // Salta al último slide original (sin el clon)
//       slider.style.transition = 'none'; // No hay transición cuando saltamos al último
//       slider.style.transform = `translateX(-${currentIndex * 100}%)`;

//       // Reinicia la transición después del salto
//       setTimeout(() => {
//         slider.style.transition = 'transform 0.5s ease-in-out';
//       }, 50);
//     }
//     // Si llegamos al último slide (de los originales), saltamos al primero
//     else if (currentIndex >= newTotalSlides - 1) {
//       currentIndex = 1; // Salta al primer slide original (sin el clon)
//       slider.style.transition = 'none'; // No hay transición cuando saltamos al primero
//       slider.style.transform = `translateX(-${currentIndex * 100}%)`;

//       // Reinicia la transición después del salto
//       setTimeout(() => {
//         slider.style.transition = 'transform 0.5s ease-in-out';
//       }, 50);
//     }

//     // Aplica la transformación para mover el slider
//     slider.style.transition = 'transform 0.5s ease-in-out';
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//   }

//    // Opcional: Mover automáticamente las diapositivas cada 5 segundos
//   setInterval(() => {
//       moveSlide(1);
//   }, 5000);
// });
