"use strict";
var a = '';
/* -------------------------------------
 Google Analytics
 change UA-XXXXX-X to be your site's ID.
 -------------------------------------- */
(function (b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
            function () {
                (b[l].q = b[l].q || []).push(arguments)
            });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
}(window, document, 'script', 'ga'));
ga('create', 'UA-XXXXX-X', 'auto');
ga('send', 'pageview');

/* -------------------------------------
 JQuery Custom Form Function
 -------------------------------------- */
$(function () {
    jcf.replaceAll();

    var clicked = true;
    $("#groom .cycle-slide-active .theme-btn.suggest-btn").on('click', function () {
        if (clicked) {
            clicked = false;
            $("#groom .cycle-slide-active .form-suggest").css({'left': '50%', 'opacity': '0', 'visibility': 'hidden'});
        } else {
            clicked = true;
            $("#groom .cycle-slide-active .form-suggest").css({'left': '0', 'opacity': '1', 'visibility': 'visible'});
        }
    });
    $("#bride .cycle-slide-active .theme-btn.suggest-btn").on('click', function () {
        if (clicked) {
            clicked = false;
            $("#bride  .cycle-slide-active .form-suggest").css({'left': '50%', 'opacity': '0', 'visibility': 'hidden'});
        } else {
            clicked = true;
            $("#bride .cycle-slide-active .form-suggest").css({'left': '0', 'opacity': '1', 'visibility': 'visible'});
        }
    });

    var clicked = 0;
    $('#map-button').on('click', function () {
        if (clicked === 0) {
            $('.contact-info-map').animate({height: '630'})
            clicked = 1;
            $('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
        else {
            $('.contact-info-map').animate({height: '315'})
            clicked = 0;
            $('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    })

    /* -------------------------------------
     Pretty Photo Gallery
     -------------------------------------- */
    $("a[data-rel]").each(function () {
        $(this).attr("rel", $(this).data("rel"));
    });
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: true
    });
    /* -------------------------------------
     Main Slider JS
     -------------------------------------- */
    var time = 7;
    var $progressBar, $bar, $elem, isPause, tick, percentTime;
    $("#home-slider").owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        pagination: false,
        singleItem: true,
        afterMove: moved,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        afterInit: progressBar,
        startDragging: pauseOnDragging
    });
    function progressBar(elem) {
        $elem = elem;
        buildProgressBar();
        start();
    }
    function buildProgressBar() {
        $progressBar = $("<div>", {
            id: "progressBar"
        });
        $bar = $("<div>", {
            id: "bar"
        });
        $progressBar.append($bar).prependTo($elem);
    }
    function start() {
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }
    ;
    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $elem.trigger('owl.next')
            }
        }
    }
    function pauseOnDragging() {
        isPause = true;
    }
    function moved() {
        clearTimeout(tick);
        start();
    }
    /* -------------------------------------
     Main Slider JS
     -------------------------------------- */
    $("#closepersons-slider").owlCarousel({
        autoPlay: true,
        stopOnHover: true,
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsMobile: [639, 1]
    });

    $(".testimonial-slider").owlCarousel({
        stopOnHover: true,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoplay: true
    });
    /* -------------------------------------
     Bride Dress Slider
     -------------------------------------- */

    var bride = $('#bride .cycle-slideshow').on('cycle-next cycle-prev', function (e, opts) {
        // advance the other slideshow
        $('#womenproductslider .cycle-slideshow').cycle('goto', opts.currSlide);
    });

    $('#womenthumbslider .cycle-slide').on('click', function () {
        var index = $('#womenthumbslider .cycle-slideshow').data('cycle.API').getSlideIndex(this);
        var todos = $('.cycle-slideshow').data('cycle.opts').slideCount;
        bride.cycle('goto', index - todos);
    });

    /* -------------------------------------
     Groom Dress Slider
     -------------------------------------- */
    var groom = $('#groom .cycle-slideshow').on('cycle-next cycle-prev', function (e, opts) {
        $('#menproductslider .cycle-slideshow').cycle('goto', opts.currSlide);
    });

    $('#menthumbslider .cycle-slide').on('click', function () {
        var index = $('#menthumbslider .cycle-slideshow').data('cycle.API').getSlideIndex(this);
        var todos = $('.cycle-slideshow').data('cycle.opts').slideCount;
        groom.cycle('goto', index - todos);
    });
    /* -------------------------------------
     Suggest Page Bride Slider
     -------------------------------------- */
    var pagebride = $('#bride .cycle-slideshow').on('cycle-next cycle-prev', function (e, opts) {
        // advance the other slideshow
        $('#pagewomenproductslider .cycle-slideshow').cycle('goto', opts.currSlide);
    });
    $('#pagewomenthumbslider .cycle-slide').on('click', function () {
        var index = $('#pagewomenthumbslider .cycle-slideshow').data('cycle.API').getSlideIndex(this);
        var todos = $('.cycle-slideshow').data('cycle.opts').slideCount;
        pagebride.cycle('goto', index - todos);
    });
    /* -------------------------------------
     Suggest Page Groom Slider
     -------------------------------------- */
    var pagegroom = $('#groom .cycle-slideshow').on('cycle-next cycle-prev', function (e, opts) {
        $('#pagemenproductslider .cycle-slideshow').cycle('goto', opts.currSlide);
    });
    $('#pagementhumbslider .cycle-slide').on('click', function () {
        var index = $('#pagementhumbslider .cycle-slideshow').data('cycle.API').getSlideIndex(this);
        var todos = $('.cycle-slideshow').data('cycle.opts').slideCount;
        pagegroom.cycle('goto', index - todos);
    });
    /* -------------------------------------
     Peoples Synced Slider
     -------------------------------------- */
    var sync1 = $("#profile");
    var sync2 = $("#profile-pager");
    sync1.owlCarousel({
        autoPlay: false,
        singleItem: true,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });
    sync2.owlCarousel({
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function (el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });
    function syncPosition(el) {
        var current = this.currentItem;
        $("#profile-pager")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced")
        if ($("#profile-pager").data("owlCarousel") !== undefined) {
            center(current)
        }
    }
    $("#profile-pager").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });
    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }
        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }
    /* -------------------------------------
     Portfolio Filter			
     -------------------------------------- */
    var $container = $('#portfolio-content');
    // set selected menu items
    var $optionSets = $('.option-set');
    var $optionLinks = $optionSets.find('a');
    function doIsotopeFilter() {
        if ($().isotope) {
            var isotopeFilter = '';
            $optionLinks.each(function () {
                var selector = $(this).attr('data-filter');
                var link = window.location.href;
                var firstIndex = link.indexOf('filter=');
                if (firstIndex > 0) {
                    var id = link.substring(firstIndex + 7, link.length);
                    if ('.' + id == selector) {
                        isotopeFilter = '.' + id;
                    }
                }
            });
            if (isotopeFilter.length > 0) {
                // initialize Isotope
                $container.isotope({
                    itemSelector: '.gallery-item',
                    filter: isotopeFilter
                });
                $optionLinks.each(function () {
                    var $this = $(this);
                    var selector = $this.attr('data-filter');
                    if (selector == isotopeFilter) {
                        if (!$this.hasClass('selected')) {
                            var $optionSet = $this.parents('.option-set');
                            $optionSet.find('.selected').removeClass('selected');
                            $this.addClass('selected');
                        }
                    }
                });
            }
            // filter items when filter link is clicked
            $optionLinks.on('click', function () {
                var $this = $(this);
                var selector = $this.attr('data-filter');
                $container.isotope({itemSelector: '.gallery-item', filter: selector});
                if (!$this.hasClass('selected')) {
                    var $optionSet = $this.parents('.option-set');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
                }
                return false;
            });
        }
    }
    var isotopeTimer = window.setTimeout(function () {
        window.clearTimeout(isotopeTimer);
        doIsotopeFilter();
    }, 1000);
    var selected = $('#gallery-cats > li > a');
    var $this = $(this);
    selected.on('click', function () {
        if (selected.hasClass('selected')) {
            $(this).parent().addClass('select').siblings().removeClass('select');
        }
    });
    /* -------------------------------------
     IMAGE POST SLIDER
     -------------------------------------- */
    $("#posttype-slider").owlCarousel({
        autoPlay: true,
        navigation: true,
        slideSpeed: 300,
        singleItem: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* -------------------------------------
     ALBUM MASONRY ISOTOPE
     -------------------------------------- */
    $('.grid').isotope({
        layoutMode: 'masonryHorizontal',
        itemSelector: '.gallery-box',
        masonryHorizontal: {
            rowHeight: 400,
            gutter: 14,
            percentPosition: false
        }
    });
    /* -------------------------------------
     IMAGE POST SLIDER
     -------------------------------------- */
    $("#sidebar-slider").owlCarousel({
        autoPlay: true,
        navigation: true,
        slideSpeed: 300,
        singleItem: true,
        pagination: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* -------------------------------------
     WEATHER API AND GEO LOCATION
     -------------------------------------- */
    if ("geolocation" in navigator) {
        $('.js-geolocation').show();
    } else {
        $('.js-geolocation').hide();
    }
    /* Where in the world are you? */
    $('.js-geolocation').on('click', function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
        });
    });
    loadWeather('Seattle', '');
    var html;
    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: 'f',
            success: function (weather) {
                html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
                html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
                html += '<li class="currently">' + weather.currently + '</li>';
                html += '<li>' + weather.alt.temp + '&deg;C</li></ul>';
                $("#weather").html(html);
            },
            error: function (error) {
                $("#weather").html('<p>' + error + '</p>');
            }
        });
    }
    /* -------------------------------------
     SLICK CIRCULAR COUNTDOWN
     -------------------------------------- */
    $('#countdown1').ClassyCountdown({
        theme: "grey",
        end: $.now() + 30758300, /* = total Seconds a day 86400 X days  */
        labelsOptions: {
            lang: {
                days: 'Nights',
                hours: 'Hours',
                minutes: 'Minutes',
                seconds: 'Seconds'
            },
            style: 'font-size:16px; line-height:14px; text-transform:capitalize; font-weight:400; color:#ce2e85;'
        },
        style: {
            element: "",
            textResponsive: .4,
            days: {
                gauge: {
                    thickness: .06,
                    bgColor: "rgba(0,0,0,0.08)",
                    fgColor: "#ce2e85"
                },
                textCSS: 'font-size:25px; line-height:25px; font-weight:400; color:#ce2e85;'
            },
            hours: {
                gauge: {
                    thickness: .06,
                    bgColor: "rgba(0,0,0,0.08)",
                    fgColor: "#ce2e85"
                },
                textCSS: 'font-size:25px; line-height:25px; font-weight:400; color:#ce2e85;'
            },
            minutes: {
                gauge: {
                    thickness: .06,
                    bgColor: "rgba(0,0,0,0.08)",
                    fgColor: "#ce2e85"
                },
                textCSS: 'font-size:25px; line-height:25px; font-weight:400; color:#ce2e85;'
            },
            seconds: {
                gauge: {
                    thickness: .06,
                    bgColor: "rgba(0,0,0,0.08)",
                    fgColor: "#ce2e85"
                },
                textCSS: 'font-size:25px; line-height:25px; font-weight:400; color:#ce2e85;'
            }
        },
    });
    /* -------------------------------------
     SIMPLE COUNTOWN
     -------------------------------------- */
    if ($(document.body).hasClass('home')) {
        // set the date we're counting down to
        var target_date = new Date('Jan, 31, 2016').getTime();
        // variables for time units
        var days, hours, minutes, seconds;
        // get tag element
        var countdown = document.getElementById('countdown');
        // update the tag with id "countdown" every 1 second
        setInterval(function () {
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            // do some time calculations
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);

            // format countdown string + set tag value
            countdown.innerHTML = '<span class="days">' + days + ' <i>/ Days</i></span>   <span class="hours">' + hours + ' <i>/ Hours</i></span>   <span class="minutes">'
                    + minutes + ' <i>/ Minutes</i></span>   <span class="seconds">' + seconds + ' <i>/ Seconds</i></span>';
        }, 1000);
    }
    /* -------------------------------------
     Google Map
     -------------------------------------- */
    var map;
    function initialize() {
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(-33.8907368, 151.2727346)
        };
        map = new google.maps.Map(document.getElementById('contacus-map'),
                mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    /* -------------------------------------
     CLOTH PROGRESS BAR
     -------------------------------------- */
    $('#groom .first').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.63,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(63 * progress) + '%<em>suggested</em>');
            });
    $('#groom .second').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.73,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(73 * progress) + '%<em>suggested</em>');
            });
    $('#groom .third').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.80,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(80 * progress) + '%<em>suggested</em>');
            });
    $('#groom .forth').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.95,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(95 * progress) + '%<em>suggested</em>');
            });


//        Bride progress bar
    $('#bride .first').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.63,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(63 * progress) + '%<em>suggested</em>');
            });
    $('#bride .second').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.73,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(73 * progress) + '%<em>suggested</em>');
            });
    $('#bride .third').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.80,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(80 * progress) + '%<em>suggested</em>');
            });
    $('#bride .forth').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.95,
        size: 150,
        reverse: true,
        emptyFill: 'rgba(245, 245, 245, 1)',
        fill: {color: '#ce2e85'}
    })
            .on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(95 * progress) + '%<em>suggested</em>');
            });
});