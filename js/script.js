"use strict";

(function() {
    // popup
    const openBtn = document.querySelector('.button-contacts');
    const popup = document.querySelector('.popup-contacts')
    const closeBtn = popup.querySelector(".popup-contacts-close");

    const keyboard = {
        isEnterEvent: function(e, callBack) {
            if (e.key === 'Escape') {
                callBack();
            }
        }
    }

    const openPopup = () => {
        popup.classList.add("popup-contacts_show")
        document.addEventListener('keydown', onDocumentKeydown)
    }

    const onOpenBtnClick = (e) => {
        e.preventDefault()
        openPopup();
    }

    const closePopup = () => {
        popup.classList.remove("popup-contacts_show");
        document.removeEventListener('keydown', onDocumentKeydown)
    }

    const onCloseBtnClick = (e) => {
        e.preventDefault();
        closePopup();
    }

    const onDocumentKeydown = (e) => {
        keyboard.isEnterEvent(e, closePopup)
    }

    openBtn.addEventListener('click', onOpenBtnClick)
    closeBtn.addEventListener('click', onCloseBtnClick)

    // slider
    const slider = document.querySelector('.slider')
    if (!slider) return

    const sliderControls = slider.querySelector('.button-control-list')
    const sliderList = slider.querySelector('.slider-list')

    const onSliderControlsClick = (e) => {
        if (e.target.className !== 'button-control-list') {
            const { target: currentContol } = e;
            const currentSlide = currentContol.dataset.slide;

            for (let i = 0; i < sliderList.children.length; i++) {
                sliderList.children[i].classList.remove('active')
                sliderControls.children[i].classList.remove('active')
            }

            currentContol.classList.add('active');
            sliderList.querySelector(`.${currentSlide}`).classList.add('active');
        }
    }

    sliderControls.addEventListener('click', onSliderControlsClick)
})()