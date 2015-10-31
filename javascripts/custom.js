// Sticky header JS

$(function () {
    // Check the initial Position of the Sticky Header
    var stickyHeaderTop = $('#header__nav').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('#header__nav').css({
                position: 'fixed',
                top: '0px'
            });
            $('main').css('margin-top', $('#header__nav').outerHeight(true) + parseInt($('#header__nav-helper').css('marginBottom')));
        } else {
            $('#header__nav').css({
                position: 'static',
                top: '0px'
            });
            $('main').css('margin-top', '0px');
        }
    });
});

// MixItUp

$(function(){
    $('#main__reviews').mixItUp();
});

// Smooth Scrolling

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
