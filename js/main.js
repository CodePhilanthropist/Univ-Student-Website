//============= For Menu Toogle ================
function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	var rian = document.querySelector('.modal-header');
    if (rian.className.indexOf('show') == -1){
        rian.className += ' show';
    }else{
        rian.className = rian.className.replace(' show', '');
	}
}
//=================== Color Header on scrool =================
const header = document.querySelector('header');
window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 50){
        header.classList.add('activate');
    }else{
        header.classList.remove('activate');
    }
}

//=================== Color Header on load =================

const header2 = document.querySelector('header');
window.onload = function(){
    var top = window.scrollY;
    if (top >= 50){
        header2.classList.add('activate');
    }else{
        header2.classList.remove('activate');
    }
}

//====================== Smooth Scroll ===================
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    // header: '[data-scroll-header]',
});


//====================== Initialize Animate on Scroll ===================
AOS.init({
    once: true,
    easing: 'ease-in-out-quad',
    duration: 600
});

//====================== Gumshoe Declaration ===================
var spy = new Gumshoe('.gumshoe a');