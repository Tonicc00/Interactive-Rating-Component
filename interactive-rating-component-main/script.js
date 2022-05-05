const ratingNumbers = document.querySelectorAll(".ratingNumber");
const defaultActive = document.querySelector(".defaultActive");
const submitBtn = document.querySelector(".btn");
const resultCard = document.querySelector(".backSection");
const questionCard = document.querySelector(".frontSection");
const resultText = document.querySelector(".resultText");

ratingNumbers.forEach((button) => {
    button.addEventListener("click", function () {
        ratingNumbers.forEach((ifSelected) => {
            ifSelected.classList.remove("was-selected");
        });
        button.classList.add("was-selected");
        defaultActive.classList.remove("defaultActive");
    });
});
submitBtn.addEventListener("click", function (){
    const wasSelected = document.querySelector(".was-selected");
    let selectedValue = wasSelected.textContent;
    resultCard.classList.add("show-card");
    questionCard.classList.add("hide-card");
    resultText.textContent = 'You selected ${selectedValue} out of 5';
});