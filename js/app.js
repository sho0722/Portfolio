$(function () {
    // ハンバーガーメニューをクリックした時の処理
    $(".hamburger").on("click", function() {
        // navを表示・非表示
        $("#nav").toggle(1500);
        // ハンバーガーメニューのアニメーション用のクラスをつける
        $(this).children().eq(0).toggleClass("hamburger-top");
        $(this).children().eq(1).toggleClass("hamburger-middle");
        $(this).children().eq(2).toggleClass("hamburger-bottom");
    });

    // スクロールした時の処理
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $("#airplane").removeClass("fly");
        } else if (scrollTop >= 600) {
            $("#airplane").fadeIn();
        } else {
            $("#airplane").hide();
        };
    });
    
    $("#airplane").on("click", function() {
        $(this).addClass("fly");
        $("html,body").animate({scrollTop:0},"300");
        // setTimeout(function() {
        //     $("#airplane").fadeOut();
        // }, 2000);
    });

    // swiper
    let swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true
        },
        effect: "coverflow",
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    });

});