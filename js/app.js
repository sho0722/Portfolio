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

    let swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // loop: true,
        speed: 1500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true
        },
        effect: "cube",
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }

    });
});