"use strict"

const iconMenu = document.querySelector('.header__hamburger');
    if (iconMenu) {
      const menuBody = document.querySelector('.menu');
      iconMenu.addEventListener('click', function () {
        console.log('click')
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
      })
    }