let htmlRange = document.getElementById("painLevel");
let changingText = document.getElementById("painText");

htmlRange.addEventListener("input", function() {
  let dolorisMeasure = this.value;

if (dolorisMeasure < 2) {
  changingText.textContent = "It's okay, Doc. I'm fine!";
} else if (dolorisMeasure < 3) {
  changingText.textContent = "Whoa. Something's not right...";
} else if (dolorisMeasure < 4) {
  changingText.textContent = "It hurts!!!";
} else if (dolorisMeasure < 9) {
  changingText.textContent = "aAAAAHHH!!!";
} else if (dolorisMeasure < 11) {
  changingText.textContent = "*flatlines*";
}
});