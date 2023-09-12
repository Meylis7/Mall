
// var ==========================
let body = document.querySelector("body");

let lang_box = document.querySelector(".lang_box");
let lang_current = document.querySelector(".lang_current");

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");

let search_btn = document.querySelector(".search_btn");
let modal_search  = document.querySelector(".modal_search ");


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
};

window.onclick = function (e) {

    // drop_lang.forEach(drop_lang => {
    //     if (drop_lang != undefined) {
    //         drop_lang.classList.contains('active') && !e.target.closest('.nav_inner');
    //         drop_lang.classList.remove('active')
    //     }
    // }
    // );

    if (modal_search.classList.contains('active') && !e.target.closest('.modal_inner')) {
        modal_search.classList.remove('active')
        body.classList.remove('active')
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


// Accord ===============================================
var accordion = document.getElementsByClassName("accord");
var z;

function accord() {
    for (z = 0; z < accordion.length; z++) {
        accordion[z].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.overflow = "auto";

            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.overflow = "visible";
            }

            initializeCustomSelect();
        });
    }
}

accord();
// Accord end =========================
