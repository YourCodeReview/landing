import './import/modules.js';
import './import/waypoints.js';
import './import/_animate-css.js';

import Header from '../blocks/modules/header/header';
import ScrollTo from './import/scrollTo';

document.addEventListener("DOMContentLoaded", function() {
    Header.init();
    ScrollTo.init();
})

$( document ).ready(function() {

    // var rellax = new Rellax('.welcome__qual-bg');

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