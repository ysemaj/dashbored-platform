// Emable tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


// Register progress bar
$(".form-control").on('change paste', function () {
    var formCount = $('input.reg').length;
    var myFilledFormCount = $('input.reg').filter(function () {
        return $(this).val() === "";
    }).length;
    var width = ((1 / formCount) * (formCount - myFilledFormCount)) * 100;
    var myFormPercent = width + "%";
    $(".progress-bar").css("width", myFormPercent);
});

// Navbar shadow and background
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#navbar').addClass('bg-light border-bottom shadow');
    } else {
        $('#navbar').removeClass('bg-light border-bottom shadow');
    }
});

// Smooth scroll for scrollspy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fix scrollspy nav
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('#fix-nav').addClass('affix');
        $('#fix-nav').scrollspy();
    } else {
        $('#fix-nav').removeClass('affix');
    }
});

var elementTogglePricing = document.getElementsByClassName('btn-xs');
  
$(function () {
    $('#togglePricing').change(function () {
        console.log('Toggle: ' + $(this).prop('checked'));
        var togglePricingVal = $(this).prop('checked');
        console.log(togglePricingVal);
    })
})