// DATOS PARA FILTRAR // 

// PRIMERO FILTRO: Project Gallery //

const dwmajo = [

// ART GALLERY  //

{id : 1, name:"BEDROOM", image: "img/boton1.jpeg", genero: "project-gallery", description: "Designed for slow mornings and peaceful nights."},
{id : 2, name:"KITCHEN", image: "img/boton1.2.jpeg", genero: "project-gallery", description: "Where functionality meets timeless design."},
{id : 3, name:"BATHROOM", image: "img/boton1.3.jpeg", genero: "project-gallery", description: "Where textures tell a story."},
{id : 4, name:"LIVING ROOM", image: "img/boton1.4.jpeg", genero: "project-gallery", description: "Thoughtfully designed spaces that feel like home."},

// DESIGN SERVICES  //
{id : 5, name:"INTERIOR DESIGN", image: "img/boton2.jpeg", genero: "design-services", description: "We create beautiful and functional spaces that reflect your personality and lifestyle."},
{id : 6, name:"DECORATING & STYLING", image: "img/boton2.1.jpeg", genero: "design-services", description: "We bring spaces to life with carefully selected furniture, colors, textures, and accessories."},
{id : 7, name:"MATERIALS & COLOR CONSULTATION", image: "img/boton2.2.jpeg", genero: "design-services", description: "We help you choose the perfect materials and color palettes to create a harmonious space."},
{id : 8, name:"SPACE PLANNING", image: "img/boton2.3.jpeg", genero: "design-services", description: "We organize every corner to make the most of your space without sacrificing style or comfort."},

];

// Obtener los contenedores y botones del DOM
const dwmajoCards = document.querySelectorAll("#estilos .project-card[data-gender]");
const filterButtons = document.querySelectorAll(".filter-btn");

// Función para renderizar las tarjetas 
function renderDw(category) {
    dwmajoCards.forEach(card => {
        const matchesCategory = category === "all" || card.dataset.gender === category;
        card.style.display = matchesCategory ? "" : "none";
    });
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");

        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(category);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}