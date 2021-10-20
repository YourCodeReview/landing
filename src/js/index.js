import './import/modules.js';
import './import/waypoints.js';
import './import/_animate-css.js';

$( document ).ready(function() {

    // var rellax = new Rellax('.welcome__qual-bg');

    // MOBILE MENU
    var hamburger = document.querySelector('.hamburger'); // const headermobile = document.querySelector('.header-mobile');
    var headermobile = document.querySelector('.header-mobile'); // const headermobile = document.querySelector('.header-mobile');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        headermobile.classList.toggle('opened');
        // document.querySelector('html').classList.toggle('overflow');

        if (hamburger.classList.contains('is-active')) {
            openMenu();
        } else {
            closeMenu();
        }
    });


    $('.header-mobile__nav-link').on("click", function (e) {
        // e.preventDefault();
        console.log('close menu by link')
        hamburger.classList.toggle('is-active'); // headermobile.classList.toggle('opened');
        closeMenu();
    });

    function openMenu() {
        console.log('open1');
        $('html').addClass('overflow');
        $('.header-mobile__circle').addClass('expand');
        $('.header-mobile__nav-item').addClass('animate');
        $('.header-mobile').css("visibility", "visible");
        console.log('open2');
    }

    function closeMenu() {
        console.log('close1');
        $('html').removeClass('overflow');
        $('.header-mobile__circle').removeClass('expand');
        $('.header-mobile__nav-item').removeClass('animate');
        $('.header-mobile').css("visibility", "hidden");
        console.log('close2');
    }



    $('.header__nav-link, .footer__up-btn, .header-mobile__nav-link').on( 'click', function(){
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('body,html').animate({
                    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
                }, 500 // скорость прокрутки
            );
        }
        return false;
    });

    $(".benefit__block-wrap").animated('fadeInUp');
    $(".stage__block").animated('fadeInUp');

    $(".welcome__form").submit(function (e) {
        e.preventDefault();

        let telegram = $(this).find(".welcome__form-input").val();

        let formData = new FormData();
        formData.append('telegram', telegram);

        fetch($(this).attr('action'), {
            method: 'POST',
            body: formData,
        }).then(response => {
            return response.json();
        }).then(result => {
            party.confetti(this);
            if (result.result) {
                $('.welcome__form-done').addClass('welcome__form-done--active');
                $('.welcome__form-done').css('display', 'block');
                $('.welcome__form-done-btn').addClass('welcome__form-done-btn--active');
            } else {
                console.error('Error');
                // TODO: add display error message
            }
        }).catch(error => {
            party.confetti(this);
            console.error('Error:', error);
        });
    });
});
