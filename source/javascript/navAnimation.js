//Select elements within Navbar
const bootCollapse = document.querySelector(".collapse");
const bootLogo = document.querySelector("#logo");
const bootContent = document.querySelector(".hero-content");

//Init GSAP object
const tlMax = new TimelineMax();

/*Animation sequence for the transition of the Navigation bar being introduced
on the screen. Navigation links float into the screen from without the boundaries
as the overflow is hidden - logo is pulled into the screen from the opposite direction.)*/
tlMax.fromTo(bootCollapse, 1.2, {x: "150%"}, {x: "0%", ease: Power2.easeInOut})
.fromTo(bootLogo, 1.2, {x: "-150%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2");
//If the hero content isn't available, ignore on other webpages as console will produce an error. 
if(bootContent) {
tlMax.fromTo(bootContent, 2, {y: "-150%"}, {y: "0%", ease: Power2.easeInOut}, "-=0.8");
}
