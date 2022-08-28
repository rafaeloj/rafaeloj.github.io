var currentPosition = 0;
const buttonLeft = document.querySelector(".button-arrow.-left");
buttonLeft.addEventListener("click", () => {
    const wrapper = document.querySelector(".elements");
    currentPosition -= 100;
    wrapper.style = `transform: translateX(${currentPosition}px)`;
});

const buttonRight = document.querySelector(".button-arrow.-right");

buttonRight.addEventListener("click", () => {
    const wrapper = document.querySelector(".elements");
    currentPosition += 100;
    wrapper.style = `transform: translateX(${currentPosition}px)`;
});
