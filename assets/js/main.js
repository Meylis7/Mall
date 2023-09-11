
// var ==========================
let lang_drop = document.querySelector(".lang_drop");
let lang_current = document.querySelector(".lang_current");

let burger = document.querySelector(".burger");
let nav_bg = document.querySelector(".nav_bg");


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100) {
        document.querySelector('.header').classList.add('stick');
    } else {
        document.querySelector('.header').classList.remove('stick');
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

    // if (drop_lang.classList.contains('active') && !e.target.closest('.lang_box')) {
    //     drop_lang.classList.remove('active')
    // }

    // if (nav_bg.classList.contains('active') && !e.target.closest('.burger') && !e.target.closest('.lang_current') && !e.target.closest('.service_nav-link')) {
    //     nav_bg.classList.remove('active')
    // }

    // if (burger.classList.contains('active') && !e.target.closest('.burger') && !e.target.closest('.lang_current') && !e.target.closest('.service_nav-link')) {
    //     burger.classList.remove('active')
    // }

    // if (lang_drop.classList.contains('active') && !e.target.closest('.lang_current')) {
    //     lang_drop.classList.remove('active')
    // }
}


// Clicks ======================================================

if (lang_current != undefined) {
    lang_current.addEventListener('click', function () {
        sleep(2).then(() => {
            lang_drop.classList.toggle('active');
        });
    });
}


if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            nav_bg.classList.toggle('active');
            burger.classList.toggle('active');
        });
    });
}


// Accord ===============================================
// var accordion = document.getElementsByClassName("accord");
// var z;

// function accord() {
//     for (z = 0; z < accordion.length; z++) {
//         accordion[z].addEventListener("click", function () {
//             this.classList.toggle("active");
//             var panel = this.nextElementSibling;

//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//                 panel.style.overflow = "auto";

//             } else {
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//                 panel.style.overflow = "visible";
//             }

//             initializeCustomSelect();
//         });
//     }
// }

// accord();
// Accord end =========================

function initAccordion(accordionElem) {

    //when panel is clicked, handlePanelClick is called.           
    function handlePanelClick(event) {
        showPanel(event.currentTarget);
    }
    //Hide currentPanel and show new panel.  

    function showPanel(panel) {
        //Hide current one. First time it will be null. 
        var expandedPanel = accordionElem.querySelector(".active");
        if (expandedPanel) {
            expandedPanel.classList.remove("active");
        }
        //Show new one
        panel.classList.add("active");

    }
    var allPanelElems = accordionElem.querySelectorAll(".panel");
    for (var i = 0, len = allPanelElems.length; i < len; i++) {
        allPanelElems[i].addEventListener("click", handlePanelClick);
    }
    //By Default Show first panel
    showPanel(allPanelElems[-1])
}
initAccordion(document.getElementById("accordion"));

var accordionHeader = document.g

