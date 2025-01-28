// // Selección de elementos del DOM
// const monthlyButton = document.querySelector('.monthlyButton'); // Botón de mensual
// const annualButton = document.querySelector('.annualButton'); // Botón de anual
// const monthlyPlans = document.querySelector('.planCardMonth'); // Contenedor de planes mensuales
// const annualPlans = document.querySelector('.planCardAnnual'); // Contenedor de planes anuales

// // Función para mostrar planes mensuales
// function showMonthlyPlans() {
//     monthlyPlans.style.display = 'flex'; // Mostrar planes mensuales
//     annualPlans.style.display = 'none'; // Ocultar planes anuales

//     // Agregar clase activa al botón correspondiente
//     monthlyButton.classList.add('active');
//     annualButton.classList.remove('active');
// }

// // Función para mostrar planes anuales
// function showAnnualPlans() {
//     monthlyPlans.style.display = 'none'; // Ocultar planes mensuales
//     annualPlans.style.display = 'flex'; // Mostrar planes anuales

//     // Agregar clase activa al botón correspondiente
//     annualButton.classList.add('active');
//     monthlyButton.classList.remove('active');
// }

// // Eventos de click
// monthlyButton.addEventListener('click', showMonthlyPlans);
// annualButton.addEventListener('click', showAnnualPlans);

// // Configuración inicial (mostrar planes mensuales por defecto)
// showMonthlyPlans();


document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos
    const monthlyButton = document.querySelector('.monthlyButton'); // Botón de mensual
    const annualButton = document.querySelector('.annualButton'); // Botón de anual
    const monthlyPlans = document.querySelector('.planCardMonth'); // Contenedor de planes mensuales
    const annualPlans = document.querySelector('.planCardAnnual'); // Contenedor de planes anuales

    // Verifica que los elementos existan en el DOM
    if (monthlyButton && annualButton && monthlyPlans && annualPlans) {
        // Función para mostrar planes mensuales con animación
        const showMonthlyPlans = () => {
            annualPlans.classList.add('fade-out');
            annualPlans.classList.remove('fade-in');
            setTimeout(() => {
                annualPlans.style.display = 'none';
                monthlyPlans.style.display = 'flex';
                monthlyPlans.classList.remove('fade-out');
                monthlyPlans.classList.add('fade-in');
            }, 300); // Tiempo para la animación
            monthlyButton.classList.add('active');
            annualButton.classList.remove('active');
        };

        // Función para mostrar planes anuales con animación
        const showAnnualPlans = () => {
            monthlyPlans.classList.add('fade-out');
            monthlyPlans.classList.remove('fade-in');
            setTimeout(() => {
                monthlyPlans.style.display = 'none';
                annualPlans.style.display = 'flex';
                annualPlans.classList.remove('fade-out');
                annualPlans.classList.add('fade-in');
            }, 300); // Tiempo para la animación
            annualButton.classList.add('active');
            monthlyButton.classList.remove('active');
        };

        // Asignar eventos a los botones
        monthlyButton.addEventListener('click', showMonthlyPlans);
        annualButton.addEventListener('click', showAnnualPlans);

        // Configuración inicial: Mostrar planes mensuales por defecto
        showMonthlyPlans();
    } else {
        console.error('Algunos elementos no se encontraron en el DOM. Revisa los selectores.');
    }
});
