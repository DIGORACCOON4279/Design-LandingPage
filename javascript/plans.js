
// Plan Section

// Selección de elementos del DOM
const monthlyButton = document.querySelector('.monthlyButton'); // Botón de mensual
const annualButton = document.querySelector('.annualButton'); // Botón de anual
const monthlyPlans = document.querySelector('.planCardMonth'); // Contenedor de planes mensuales
const annualPlans = document.querySelector('.planCardAnnual'); // Contenedor de planes anuales

// Función para mostrar planes mensuales
function showMonthlyPlans() {
    monthlyPlans.style.display = 'flex'; // Mostrar planes mensuales
    annualPlans.style.display = 'none'; // Ocultar planes anuales

    // Agregar clase activa al botón correspondiente
    monthlyButton.classList.add('active');
    annualButton.classList.remove('active');
}

// Función para mostrar planes anuales
function showAnnualPlans() {
    monthlyPlans.style.display = 'none'; // Ocultar planes mensuales
    annualPlans.style.display = 'flex'; // Mostrar planes anuales

    // Agregar clase activa al botón correspondiente
    annualButton.classList.add('active');
    monthlyButton.classList.remove('active');
}

// Eventos de click
monthlyButton.addEventListener('click', showMonthlyPlans);
annualButton.addEventListener('click', showAnnualPlans);

// Configuración inicial (mostrar planes mensuales por defecto)
showMonthlyPlans();


