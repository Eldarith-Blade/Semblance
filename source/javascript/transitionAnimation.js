const bootHeroC = document.querySelector(".hero-content");
const displayFade = document.querySelector(".fade-in");

/*TweenMax already initialised in NavAnimation - content on every page is faded in for a more
dynamic effect*/
tlMax.fromTo(displayFade,{duration: 2, opacity: 0}, {opacity: 1, ease:Power2.easeInOut}, "-=0.4");
