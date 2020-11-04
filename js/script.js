const link = document.querySelector(".button-contacts");
const popup = document.querySelector(".popup-contacts");
const contacts_close = document.querySelector(".popup-contacts-close");
const slider = document.querySelector(".slider");
const sliderFirst = slider.querySelector(".slide-1");
const sliderSecond = slider.querySelector(".slide-2");
const sliderThird = slider.querySelector(".slide-3");
const sliderButtonFirst = slider.querySelector(".first");
const sliderButtonSecond = slider.querySelector(".second");
const sliderButtonThird = slider.querySelector(".third");

/*Eto popup*/
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-contacts_show");
});

contacts_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("popup-contacts_show");
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("popup-contacts_show")) {
            evt.preventDefault();
            popup.classList.remove("popup-contacts_show");
        }
    }
});
/*Eto slider*/
sliderButtonFirst.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderFirst.classList.add("active");
    sliderSecond.classList.remove("active");
    sliderThird.classList.remove("active");
    sliderButtonFirst.classList.add("active");
    sliderButtonSecond.classList.remove("active");
    sliderButtonThird.classList.remove("active");
});
sliderButtonSecond.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderSecond.classList.add("active");
    sliderFirst.classList.remove("active");
    sliderThird.classList.remove("active");
    sliderButtonSecond.classList.add("active");
    sliderButtonFirst.classList.remove("active");
    sliderButtonThird.classList.remove("active");
});
sliderButtonThird.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderThird.classList.add("active");
    sliderFirst.classList.remove("active");
    sliderSecond.classList.remove("active");
    sliderButtonThird.classList.add("active");
    sliderButtonFirst.classList.remove("active");
    sliderButtonSecond.classList.remove("active");
});