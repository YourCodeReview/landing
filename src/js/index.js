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

    document.querySelectorAll(".welcome__form-button").forEach((el) => {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            party.confetti(this);
            $('.welcome__form-done').addClass('welcome__form-done--active');
            setTimeout(()=> {$('.welcome__form-done-btn').addClass('welcome__form-done-btn--active')}, 1000);
        });
    })

    // $('#request-form').submit(function (e) {
    //     e.preventDefault();
    //     var formData = new FormData(e.target);
    //     console.log($(this));
    //     $.ajax({
    //         url: 'mail.php',
    //         type: 'POST',
    //         data: formData,
    //         success: function success(data) {
    //             if (data.trim() === 'OK') {
    //                 console.log(data);
    //                 $('.popup').fadeOut(400); // $('#popup').css("display","none");
    //                 $('.popup').css("display", "none");
    //                 $('#done-popup').fadeIn(400); // $('#done').css("display","block");
    //                 $('#done-popup').css("display", "flex");
    //             } else {
    //                 console.error(data);
    //                 $('.popup').fadeOut(400);
    //                 $('.popup').css("display", "none");
    //                 $('#error-popup').fadeIn(400);
    //                 $('#error-popup').css("display", "flex");
    //             }
    //         },
    //         cache: false,
    //         contentType: false,
    //         processData: false
    //     });
    //     return false;
    // });

});
