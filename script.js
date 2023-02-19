let p = document.querySelector(".got-question p");
let open = document.querySelector(".title :nth-child(2)");
let close = document.querySelector(".title :nth-child(3)");

open.addEventListener("click", show);
close.addEventListener("click", hide);

function show() {
    p.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";

}
function hide() {
    p.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
}