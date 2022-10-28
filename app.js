const header = document.getElementById('hdr');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('#nav-list');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}