var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navegation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }

});
var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navegation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        }
    }

});

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input){
    input.addEventListener('change',function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper'+ id);
        thisSwiper.swiper.update();
    })
});

document.addEventListener('DOMContentLoaded', function () {
    // Aquí seleccionamos todos los enlaces del menú que deben llevar a una sección
    const menuLinks = document.querySelectorAll('nav.navbar a');

    // Añadimos un listener a cada enlace para hacer scroll a la sección correspondiente
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevenir el comportamiento por defecto del enlace
            event.preventDefault();

            // Extraer el texto del enlace clicado para saber a qué sección se refiere
            const sectionName = this.textContent.trim().toLowerCase();

            // Basado en el texto del enlace, definimos a qué sección hacer scroll
            let targetSection;
            switch (sectionName) {
                case 'inicio':
                    targetSection = document.querySelector('header');
                    break;
                case 'productos':
                    targetSection = document.querySelector('main.products');
                    break;
                case 'sobre nosotros':
                    targetSection = document.querySelector('section.info');
                    break;
                case 'contacto':
                    targetSection = document.querySelector('section.horario');
                    break;
                default:
                    break;
            }

            // Si encontramos la sección correspondiente, hacemos scroll hacia ella
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Animación de scroll suave
                });
            }
        });
    });
});
document.getElementById('whatsappLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir la acción por defecto
    const whatsappUrl = "https://wa.me/1234567890"; // Sustituye con tu número de WhatsApp
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
});
