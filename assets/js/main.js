var showMenu = document.getElementsByClassName('after-click-menu');

var clickButton = document.getElementsByClassName('menu-button');

clickButton.onclick = function() {
    showMenu.classList.add('after-click-menu-show');
}