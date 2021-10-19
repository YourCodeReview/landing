import './import/modules.js';
// import './import/rellax.js';
import './import/waypoints.js';
import './import/_animate-css.js';
// import party from "party-js";
// const party = require("party-js");




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


    document.querySelector(".welcome__form-button")
      .addEventListener("click", function (e) {
        e.preventDefault();
        console.log('click');
        party.confetti(this);
        $('.welcome__form-done').css("display", "block");
    });
});

$(".welcome__btn").click(function (e) {
    e.preventDefault();
    $('html').addClass('overflow');
    $(".popup").fadeIn(300, function () {
        $(this).focus();
    });
});
$('.popup__close').click(function () {
    $(".popup").fadeOut(300);
    $('html').removeClass('overflow');
});

$(document).mouseup(function (e) {
    if ($(".popup__wrap").has(e.target).length === 0) {
        $(".popup").fadeOut(300);
    }

    if ($(".test__wrap").has(e.target).length === 0) {
        $(".test").fadeOut(300);
    }
});


$(".request__form-btn").click(function (e) {
    e.preventDefault();
    $(".request__form-message--ok").fadeIn(300, function () {
        $(this).focus();
    });
});

$(".popup__btn").click(function (e) {
    e.preventDefault();
    $(".popup__group-input-wrap ").fadeOut(300);
    $(".popup__form-message--ok").fadeIn(300, function () {
        $(this).focus();
    });
});