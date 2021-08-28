const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

let ifClicked = () => {

    nav.classList.contains('nav-mobile') 
    ? (nav.classList.remove('nav-mobile'), nav.classList.add('nav'),hamburger.classList.remove('hmbopened')) 
    : (nav.classList.add('nav-mobile'), nav.classList.remove('nav'),hamburger.classList.add('hmbopened'));
    
};

let ifScreenNotMobile = () => {
    if (window.innerWidth > 768){
        nav.classList.contains('nav-mobile');
        nav.classList.remove('nav-mobile');
        nav.classList.add('nav');
        hamburger.classList.remove('hmbopened');
    }
}

window.addEventListener('resize', ifScreenNotMobile);
hamburger.addEventListener('click', ifClicked);
