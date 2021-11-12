const button = document.querySelector(".share")
const popup = document.querySelector(".popup")
const img = document.querySelector(".btn")
const right = document.querySelector(".right")

let savedCC;
let savedPopup;




const mobileScreenWidth = window.matchMedia("(max-width: 1400px)");
const desktopScreenWidth = window.matchMedia("(min-width: 1401px)");
if (window.screen.width < 1401) {
    button.addEventListener("click", mobileChange);
} else {
    button.addEventListener("click", desktopChange);
}

mobileScreenWidth.addEventListener('change', function (mm) {
    if (mm.matches) {
        popup.classList.remove("popup-show")
        button.classList.remove("button-invert")

        button.addEventListener("click", mobileChange);
    } else {
        button.removeEventListener("click", mobileChange)
    }
})

function mobileChange() {
    popup.classList.toggle("popup-show")
    button.classList.toggle("button-invert")
    const cc = document.querySelector(".creator-container");

    if (cc) {
        const btn = cc.removeChild(button)
        savedCC = right.removeChild(cc);
        popup.appendChild(btn);
        right.appendChild(popup)
    } else {
        const btn = popup.removeChild(button)
        savedPopup = right.removeChild(popup)
        savedCC.appendChild(btn)
        right.appendChild(savedCC)
    }
}

function desktopChange() {
    if (!popup) {
        right.appendChild(savedPopup)
        savedPopup.classList.toggle("popup-show")
    }
    right.appendChild(popup)
    popup.classList.toggle("popup-show")
    button.classList.toggle("button-invert")
}

desktopScreenWidth.addEventListener("change", function (mm) {
    if (mm.matches) {
        // desktopChange()
        button.addEventListener("click", desktopChange);
    } else {
        button.removeEventListener("click", desktopChange)
    }
})
