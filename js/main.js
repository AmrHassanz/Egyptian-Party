/// <reference path="../typings/globals/jquery/index.d.ts" />

// navbar
$('#openBtn').click(function () {
    let x = $('#home .layer').css('margin-left');
    if (x == '0px') {
        $('#home .layer').css('margin-left', '15rem');
        $('#navbar').css('left', '0');
        $('#openBtn').html(`<i class="fas fa-bars me-2"></i>Close`);
    }
    else {
        $('#home .layer').css('margin-left', '0');
        $('#navbar').css('left', '-15rem');
        $('#openBtn').html(`<i class="fas fa-bars me-2"></i>Open`);
    }
});
$('#navbar i').click(function () {
    $('#home .layer').css('margin-left', '0');
    $('#navbar').css('left', '-15rem');
    $('#openBtn').html(`<i class="fas fa-bars me-2"></i>Open`);
});

// singer
$('#singer h3').click(function (e) {
    $(this).next().slideToggle();
    $(this).parent().siblings().children('p').slideUp();
});

// counter
// Set the date we're counting down to
var countDownDate = new Date("Feb 20, 2022 21:15:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $('#days').html(days);
    $('#hours').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        $('#counter .container').addClass('fs-1');
        $('#counter .container').html('Lets Celebrate');
    }
}, 1000);



// footer
$('#message').keyup(function () {
    let z = $('#message').val().length;
    if (z > 100) {
        $('#all').html(`<span id="remaining">your available character finished</span> Remove Some`);
    }
    else {
        $('#all').html(`<span id="remaining">${100 - z} </span> Character Remaining`);
    }
});