$(document).ready(function() {
    $(".country-style .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".country-style .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".country-style .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".country-style .dropdown-block .btn .btn-span").html(text);
        $(".country-style .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".country-style .dropdown-block .scroll-position").removeClass('toggle');
    });
    //otdel
    $(".otdel .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".otdel .dropdown-block .scroll-position").toggleClass('toggle');
    });

    $(".otdel .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".otdel .dropdown-block .btn .btn-span").html(text);
        $(".otdel .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".otdel .dropdown-block .scroll-position").removeClass('toggle');
    });
    //pay
    $(".pay .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".pay .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".pay .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".pay .dropdown-block .btn .btn-span").html(text);
        $(".pay .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".pay .dropdown-block .scroll-position").removeClass('toggle');
    });
    //mail
    $(".mail .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".mail .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".mail .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".mail .dropdown-block .btn .btn-span").html(text);
        $(".mail .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".mail .dropdown-block .scroll-position").removeClass('toggle');
    });
    //zakaz
    $(".status .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".status .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".status .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".status .dropdown-block .btn .btn-span").html(text);
        $(".status .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".status .dropdown-block .scroll-position").removeClass('toggle');
    });
    //decline
    $(".user-decline .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".user-decline .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".user-decline .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".user-decline .dropdown-block .btn .btn-span").html(text);
        $(".user-decline .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".user-decline .dropdown-block .scroll-position").removeClass('toggle');
    });
    //category
    $(".category-list .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".category-list .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".category-list .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".category-list .dropdown-block .btn .btn-span").html(text);
        $(".category-list .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".category-list .dropdown-block .scroll-position").removeClass('toggle');
    });
    //product list
    $(".product-list .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".product-list .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".product-list .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".product-list .dropdown-block .btn .btn-span").html(text);
        $(".product-list .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".product-list .dropdown-block .scroll-position").removeClass('toggle');
    });
    //user-select
    $(".user-select .dropdown-block .btn").click(function() {
        let arr = $('.scroll-position');
        arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
        $(".user-select .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(".user-select .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
        var text = $(this).html();
        $(".user-select .dropdown-block .btn .btn-span").html(text);
        $(".user-select .dropdown-block .scroll-position").toggleClass('toggle');
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-block"))
            $(".user-select .dropdown-block .scroll-position").removeClass('toggle');
    });
    //another scripts
    $(".list-red").click(function() {
        $(".status-color").css('background-color', '#FF0000');
    });
    $(".list-yellow").click(function() {
        $(".status-color").css('background-color', '#FFCF00');
    });
    $(".list-blue").click(function() {
        $(".status-color").css('background-color', '#00B9FF');
    });
    $(".list-green").click(function() {
        $(".status-color").css('background-color', '#00CC00');
    });
    $(".arrow").click(function() {
        $(".order-info").toggle();
    });
    $(".order-info-link").click(function() {
        $(".order-info").toggle();
    });
    $(".unlock-logo").click(function() {
        $(".unlock-logo").css('display', 'none');
        $(".lock-logo").css('display', 'inline-block');
        $('.ip-color-lock').css('font-weight', '400');
    });
    $(".lock-logo").click(function() {
        $(".unlock-logo").css('display', 'inline-block');
        $(".lock-logo").css('display', 'none');
        $('.ip-color-lock').css('font-weight', '300');
    });
    $(".calendary-logo").click(function() {
        $("#datepicker").click();
    });
    $(".btnplus").click(function() {
        $(".add-order").toggleClass('order-open');
        $('.bg-modal').toggle();
    });
    $(".btn-close-order").click(function() {
        $(".add-order").toggleClass('order-open');
        $('.bg-modal').toggle();
    });
    $(".bg-modal").click(function() {
        $(".add-order").removeClass('order-open');
        $(this).toggle();
    });
    //plus minus
    $("#plus").on('click', function() {
        $("#num").html(parseInt($('#num').html(), 10) + 1);
    });
    $("#minus").on('click', function() {
        $("#num").html(parseInt($('#num').html(), 10) - 1)
    });
    $("#plus2").on('click', function() {
        $("#num2").html(parseInt($('#num2').html(), 10) + 1);
    });
    $("#minus2").on('click', function() {
        $("#num2").html(parseInt($('#num2').html(), 10) - 1)
    });
    //plus minus
    //First letter
    $.fn.capitalize = function() {
        $.each(this, function() {
            var split = this.value.split(' ');
            for (var i = 0, len = split.length; i < len; i++) {
                split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
            }
            this.value = split.join(' ');
        });
        return this;
    };

    $('.letter-high').on('keyup', function() {
        $(this).capitalize();
    }).capitalize();
});