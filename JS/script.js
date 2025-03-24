document.getElementById('mobile_btn').addEventListener('click', function(){
    // Alterna a classe 'active' no menu
    document.getElementById('mobile_menu').classList.toggle('active');
    
    // Alterna a classe 'active' no botão
    this.classList.toggle('active');
});



$(document).ready(function(){
    const sections = $('section');
    const navItems = $('.nav-itens');


$(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0){
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        });


        $(navItems[activeSectionIndex]).addClass('active');
    });
});

