const openModalButton = document.querySelector("#openM");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"))
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
});

// botão dois

const openModalButton2 = document.querySelector("#openP");
const closeModalButton2 = document.querySelector("#close-modal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");

const toggleModal2 = () => {
    [modal2,fade2].forEach((el2) => el2.classList.toggle("hide2"))
};

[openModalButton2, closeModalButton2, fade2].forEach((el2) => {
    el2.addEventListener("click", () => toggleModal2())
});

// botão três

const openModalButton3 = document.querySelector("#openP");
const closeModalButton3 = document.querySelector("#close-modal3");
const modal3 = document.querySelector("#modal3");
const fade3 = document.querySelector("#fade3");

const toggleModal3 = () => {
    [modal3,fade3].forEach((el3) => el3.classList.toggle("hide3"))
};

[openModalButton3, closeModalButton3, fade3].forEach((el3) => {
    el3.addEventListener("click", () => toggleModal3())
});

// botão quatro

const openModalButton4 = document.querySelector("#openI");
const closeModalButton4 = document.querySelector("#close-modal4");
const modal4 = document.querySelector("#modal4");
const fade4 = document.querySelector("#fade4");

const toggleModal4 = () => {
    [modal4,fade4].forEach((el4) => el4.classList.toggle("hide4"))
};

[openModalButton4, closeModalButton4, fade4].forEach((el4) => {
    el4.addEventListener("click", () => toggleModal4())
});