let acc = document.getElementsByClassName("accordion-button");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    this.classList.toggle("active");

    let plus = event.target.nextElementSibling;
    let minus = this.lastElementChild

    let answer = this.nextElementSibling;
    plusAndMinus(answer, minus, plus)
  });
}

const plusAndMinus = (answer, accMinus, accPlus, i) => {
  if (answer.style.display === "block") {
    answer.style.display = "none";
    accPlus.style.display = "block";
    accMinus.style.display = "none";
  } else {
    answer.style.display = "block";
    accPlus.style.display = "none";
    accMinus.style.display = "block";
  }
}
