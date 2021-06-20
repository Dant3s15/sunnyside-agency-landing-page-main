const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const mediaQuery = window.matchMedia("(min-width: 769px)");

hamburger.addEventListener('click', function(){

    if ((nav.classList.contains('nav-mobile')) || (mediaQuery.matches)){

        nav.classList.remove('nav-mobile')
        nav.classList.add('nav')
        console.log('test')
    }
    else{

        nav.classList.add('nav-mobile')
        nav.classList.remove('nav')

    }
})
