$(function () {
    // Check the initial Position of the Sticky Header
    var stickyHeaderTop = $('#stickyheader').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('#stickyheader').css({
                position: 'fixed',
                top: '0px'
            });
            $('main').css('margin-top', $('#stickyheader').outerHeight(true) + parseInt($('#stickyalias').css('marginBottom')));
        } else {
            $('#stickyheader').css({
                position: 'static',
                top: '0px'
            });
            $('main').css('margin-top', '0px');
        }
    });
});

$(function(){
    $('#reviews').mixItUp();
});
