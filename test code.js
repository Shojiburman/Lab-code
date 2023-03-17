(function pollForjQuery() {
    if (window.jQuery !== undefined && document.readyState === 'complete') {
        var $ = window.jQuery;
        var searchBoxCss = '' +
            '.booking-wrapper {' +
            'top: 150px;' +
            '}' +
            '.sticky {' +
            'position: fixed !important;' +
            'top: 100px !important;' +
            '}' +
            '';
        $('head').append('<style type="text/css"></style>');
        $('style').append(searchBoxCss);

        var sticky = $('.booking-wrapper').offset().top;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                $('.booking-wrapper').addClass('sticky');
                console.log(window.pageYOffset, " - ", sticky);
            } else {
                $('.booking-wrapper').removeClass('sticky');
            }
        }
        $(document).scroll(function() { myFunction() });
    } else {
        setTimeout(pollForjQuery, 25);
    }
})();