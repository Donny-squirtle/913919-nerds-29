const link = document.querySelector(".button-contacts");
const popup = document.querySelector(".popup-contacts");
const contacts_close = document.querySelector(".popup-contacts-close");

/*Eto popup*/
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Привет!");
    popup.classList.add("popup-contacts_show");
});

contacts_close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("popup-contacts_show");
});
/*Eto slider*/
