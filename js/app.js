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
        if (scrollTop >= 300) {
            $("#airplane").fadeIn();
        } else {
            $("#airplane").hide();
        };
    });
    
    // アイコンをクリックした時の処理
    $("#airplane").on("click", function() {
        $("html,body").animate({scrollTop:0}, 2500);
        let airplane = $(this);
        airplane.addClass("fly");
        let remove = function() {
            airplane.removeClass("fly");
        };
        setTimeout(remove, 3000);
    });

    // スキルのliを円周上に並べる
    let li = $(".logos").children("li");
    let item_num = li.length;
    let deg = 360.0/item_num;
    let red = (deg*Math.PI/180.0);
    let circle_r = li.width() * 1.7;
    li.each(function(i, elem) {
        var x = Math.cos(red * i) * circle_r + circle_r;
        var y = Math.sin(red * i) * circle_r + circle_r;
        $(elem).css('left', x);
        $(elem).css('top', y);
    });

    // スキルのliをクリックしてlightbox
    li.on("click", function() {
        // クリックされたliの親要素のsectionを取得
        let section = $(this).parents("section");

        // クリックされたliの子要素のimgタグのsrcを取得
        let imgSrc = $(this).children("img").attr("src");

        // id = "over"のdivタグを追加
        $('<div id = "over">').appendTo($(section)).hide().fadeIn(500);

        // class = "lightbox"のdivタグを追加
        $('<div class = "lightbox">').appendTo($("#over")).hide().fadeIn(1000);

        //上記のdivタグの中に変数imgSrcを追加
        $("<img>").attr("src", imgSrc).appendTo($(".lightbox")).hide().fadeIn(1500);

        //背景をクリックしてタグを消去
        $("#over").click(function(e) {

            // lightboxのdivをクリックした時は消去されない
            if ($(e.target).is(".lightbox")) {
                return;
            
            //アイコンをクリックした時は消去されない
            } else if ($(e.target).is("i")) {
                return;

            // それ以外の背景をクリックした時に消去される
            } else {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                });
            };
        });
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