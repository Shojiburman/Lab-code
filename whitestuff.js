(function pollForjQuery() {
    if (window.jQuery !== undefined && document.readyState === 'complete') {
        var $ = window.jQuery;
        var el = document.createElement('div');
        el.classList.add('miniBag');
        var productName = document.createElement('h2');
        productName.textContent = document.getElementsByClassName('product-info__heading')[0].textContent;
        el.appendChild(productName);
        var productPrice = document.createElement('h2');
        productPrice.textContent = document.getElementsByClassName('current-price')[0].textContent;
        el.appendChild(productPrice);
        var button = document.querySelector('[title="Add to Bag"]');
        button = button.cloneNode(true);
        button.classList.add("miniBagButton");
        el.appendChild(button);
        var main = document.querySelector('main');
        main.appendChild(el);

        var miniBag = '' +
            '.miniBag {' +
            'display: none;' +
            'width: 600px;' +
            'height: 175px;' +
            'background-color: #e2ddd6;' +
            'text-align: center;' +
            'padding: 10px;' +
            'margin: 0 auto;' +
            '}' +
            '.miniBag miniBagButton {' +
            'cursor: pointer !important;' +
            '}' +
            '.sticky {' +
            'display: block;' +
            'position: fixed !important;' +
            'top: 100px !important;' +
            '}' +
            '';
        $('head').append('<style type="text/css"></style>');
        $('style').append(miniBag);

        var sticky = $('.product-info, .js-product-info')[0];;
        sticky = sticky.offsetTop + sticky.offsetHeight;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                $('.miniBag').addClass('sticky');
                console.log(window.pageYOffset, " - ", sticky);
            } else {
                $('.miniBag').removeClass('sticky');
            }
        }
        $(document).scroll(function() { myFunction(); });
        $('.miniBagButton').click(function() {
            //$('html,body').scrollTop(0);
            $("[name='addProduct']").click();
        });
    } else {
        setTimeout(pollForjQuery, 25);
    }
})();