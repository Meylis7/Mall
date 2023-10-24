// var ==========================
let body = document.querySelector("body");

let lang_box = document.querySelector(".lang_box");
let lang_current = document.querySelector(".lang_current");

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");

let search_btn = document.querySelector(".search_btn");
let modal_search = document.querySelector(".modal_search ");

let mobile_filter_shops = document.querySelector(".mobile_filter-btn ");
let shops_aside = document.querySelector(".shops_aside");


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100) {
        document.querySelector('.header').classList.add('stick');
        // document.querySelector('.menu').classList.add('stick');
    } else {
        document.querySelector('.header').classList.remove('stick');
        // document.querySelector('.menu').classList.remove('stick');
    }

    document.querySelector('.menu').classList.remove('active');

};

window.onclick = function (e) {

    // drop_lang.forEach(drop_lang => {
    //     if (drop_lang != undefined) {
    //         drop_lang.classList.contains('active') && !e.target.closest('.nav_inner');
    //         drop_lang.classList.remove('active')
    //     }
    // }
    // );

    if (modal_search != undefined) {
        if (modal_search.classList.contains('active') && !e.target.closest('.modal_inner')) {
            modal_search.classList.remove('active')
            body.classList.remove('active')
        }
    }


    if (menu.classList.contains('active') && !e.target.closest('.burger') && !e.target.closest('.lang_current') && !e.target.closest('.service_nav-link')) {
        menu.classList.remove('active')
    }

    if (burger.classList.contains('active') && !e.target.closest('.burger') && !e.target.closest('.lang_current') && !e.target.closest('.service_nav-link')) {
        burger.classList.remove('active')
    }

    if (lang_box.classList.contains('active') && !e.target.closest('.lang_current')) {
        lang_box.classList.remove('active')
    }

    if (shops_aside.classList.contains('active') && !e.target.closest('.shops_aside-wrap')) {
        shops_aside.classList.remove('active');
        body.classList.remove('active');
    }
}


// Clicks ======================================================

if (lang_current != undefined) {
    lang_current.addEventListener('click', function () {
        sleep(2).then(() => {
            lang_box.classList.toggle('active');
        });
    });
}

if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            menu.classList.toggle('active');
            burger.classList.toggle('active');
        });
    });
}

if (search_btn != undefined) {
    search_btn.addEventListener('click', function () {
        sleep(2).then(() => {
            modal_search.classList.toggle('active');
            body.classList.add('active');
        });
    });
}

if (mobile_filter_shops != undefined) {
    mobile_filter_shops.addEventListener('click', function () {
        sleep(2).then(() => {
            shops_aside.classList.add('active');
            body.classList.add('active');
        });
    });
}


// Shops accordion
var accItem = document.getElementsByClassName('shops_aside-item');
var accHD = document.getElementsByClassName('shops_aside-title');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'shops_aside-item close';
    }
    if (itemClass == 'shops_aside-item close') {
        this.parentNode.className = 'shops_aside-item open';
    }
}