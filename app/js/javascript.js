const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click', function(){

    if (nav.classList.contains('nav-mobile')){

        nav.classList.remove('nav-mobile')
        nav.classList.add('nav')
        console.log('test')
    }
    else{

        nav.classList.add('nav-mobile')
        nav.classList.remove('nav')

    }
})
