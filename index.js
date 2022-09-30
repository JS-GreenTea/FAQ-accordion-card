const faqCheckboxes = document.querySelectorAll(".faq-checkbox");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

faqCheckboxes.forEach(function (faqCheckbox, index) {
  faqCheckbox.addEventListener("change", function () {
    if (this.checked) {
      answers[index].classList.remove("hidden");
      questions[index].style.fontWeight = 700;
    } else {
      answers[index].classList.add("hidden");
      questions[index].style.fontWeight = 400;
    }
  });
});
