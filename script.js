//! ==============Header Berger Section Start================= !//
let burger = document.querySelector(".burger")
let nav = document.querySelector("header nav")

burger.addEventListener("click", show);
burger.addEventListener("dblclick", hide);

function show() {
    nav.style.display = "block";
    nav.style.left = "0vw";
}

function hide() {
    nav.style.left = "-50vw";
}
//! ==============Header Berger Section Start================= !//


//! ===============Got Question Section Start================ !//
let p1 = document.querySelector("#title1 p");
let open1 = document.querySelector("#title1 :nth-child(2)");
let close1 = document.querySelector("#title1 :nth-child(3)");

open1.addEventListener("click", show1);
close1.addEventListener("click", hide1);

function show1() {
    p1.style.display = "block";
    open1.style.display = "none";
    close1.style.display = "block";

}
function hide1() {
    p1.style.display = "none";
    open1.style.display = "block";
    close1.style.display = "none";
}

// ============================================== //
let p2 = document.querySelector("#title2 p");
let open2 = document.querySelector("#title2 :nth-child(2)");
let close2 = document.querySelector("#title2 :nth-child(3)");

open2.addEventListener("click", show2);
close2.addEventListener("click", hide2);

function show2() {
    p2.style.display = "block";
    open2.style.display = "none";
    close2.style.display = "block";

}
function hide2() {
    p2.style.display = "none";
    open2.style.display = "block";
    close2.style.display = "none";
}

// ============================================== //
let p3 = document.querySelector("#title3 p");
let open3 = document.querySelector("#title3 :nth-child(2)");
let close3 = document.querySelector("#title3 :nth-child(3)");

open3.addEventListener("click", show3);
close3.addEventListener("click", hide3);

function show3() {
    p3.style.display = "block";
    open3.style.display = "none";
    close3.style.display = "block";

}
function hide3() {
    p3.style.display = "none";
    open3.style.display = "block";
    close3.style.display = "none";
}

// ============================================== //
let p4 = document.querySelector("#title4 p");
let open4 = document.querySelector("#title4 :nth-child(2)");
let close4 = document.querySelector("#title4 :nth-child(3)");

open4.addEventListener("click", show4);
close4.addEventListener("click", hide4);

function show4() {
    p4.style.display = "block";
    open4.style.display = "none";
    close4.style.display = "block";

}
function hide4() {
    p4.style.display = "none";
    open4.style.display = "block";
    close4.style.display = "none";
}
//! ===============Got Question Section Start================ !//