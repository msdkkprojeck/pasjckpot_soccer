let oddsCount = 0;
const maxOdds = 30;

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToMenu() {
  showPage("menu");
}

function openCalculator() {
  showPage("calculator");
}

function backToMenu() {
  showPage("menu");
}

function addOdds() {
  if (oddsCount >= maxOdds) return;

  oddsCount++;
  const input = document.createElement("input");
  input.type = "number";
  input.step = "0.01";
  input.placeholder = "Odds ke-" + oddsCount;

  document.getElementById("oddsContainer").appendChild(input);
}

function resetOdds() {
  oddsCount = 0;
  document.getElementById("oddsContainer").innerHTML = "";
}
