let btnDarkMode = document.querySelector('#btnDarkMode');
let getBodyColor = document.querySelector('body');

btnDarkMode.onclick = () => {

    getBodyColor.classList.toggle('anyName');
    btnDarkMode.classList.toggle('anyBtn');
}