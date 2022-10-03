const faqCheckboxes = document.querySelectorAll(".faq-checkbox");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");
const arrowImages = document.querySelectorAll(".question > img");

faqCheckboxes.forEach(function (faqCheckbox, index) {
  faqCheckbox.addEventListener("change", function () {
    if (this.checked) {
      // answers[index].classList.remove("hidden");
      // questions[index].style.fontWeight = 700;
      // questions[index].style.color = "hsl(237, 12%, 33%)";
    } else {
      // answers[index].classList.add("hidden");
      // questions[index].style.fontWeight = "";
      // questions[index].style.color = "";
    }
  });
});
