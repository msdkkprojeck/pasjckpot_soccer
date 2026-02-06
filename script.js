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

  const row = document.createElement("div");
  row.className = "odds-row";

  row.innerHTML = `
    <input type="number" step="0.01" placeholder="Odds ${oddsCount}">
    <select>
      <option value="win">WIN</option>
      <option value="halfwin">HALF WIN</option>
      <option value="halflose">HALF LOSE</option>
      <option value="draw">DRAW</option>
    </select>
  `;

  document.getElementById("oddsContainer").appendChild(row);
}

function resetOdds() {
  oddsCount = 0;
  document.getElementById("oddsContainer").innerHTML = "";
}
