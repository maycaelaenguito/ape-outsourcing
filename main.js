function navigation() {
    var icon = document.getElementById("icon");
    var navbar = document.getElementById("navbar");

    if (icon.classList.contains('close-menu')) {
        icon.classList.remove('close-menu');
        icon.classList.add('open-menu');
        navbar.style.left = '0';
    } else {
        icon.classList.remove('open-menu');
        icon.classList.add('close-menu');
        navbar.style.left = '-100%';
    }

}

