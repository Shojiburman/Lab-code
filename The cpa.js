(function() {
    var searchBox = {
        init: function() {
            this.mainJS();
            this.mainCss();
        },
        mainCss: function() {
            var searchBoxCss = '' +
                '.booking-wrapper {' +
                'top: 150px;' +
                '}' +
                '.sticky {' +
                'position: fixed !important;' +
                'top: 100px !important;' +
                '}' +
                '';
            var head = document.getElementsByTagName('head')[0];
            var createTag = document.createElement('style');
            createTag.setAttribute('type', 'text/css');
            var createText = document.createTextNode(searchBoxCss);
            createTag.appendChild(createText);
            head.appendChild(createTag);
        },
        mainJS: function() {
            window.onscroll = function() { myFunction(); };

            var header = document.getElementsByClassName("booking-wrapper");
            var sticky = header[0].offsetTop;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header[0].classList.add("sticky");
                    console.log(window.pageYOffset, " - ", sticky);
                } else {
                    header[0].classList.remove("sticky");
                }
            }
        }
    };

    (function pollForjQuery() {
        if (document.readyState === 'complete') {
            searchBox.init();
        } else {
            setTimeout(pollForjQuery, 25);
        }
    })();
})();