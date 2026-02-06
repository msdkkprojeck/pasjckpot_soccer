let oddsCount = 0;
const maxOdds = 30;

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToMenu(){ showPage("menu"); }
function openCalculator(){ showPage("calculator"); }
function backToMenu(){ showPage("menu"); }

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

  row.querySelectorAll("input,select").forEach(el=>{
    el.addEventListener("input", calculate);
  });

  document.getElementById("oddsContainer").appendChild(row);
}

function calculate() {
  let totalOdds = 1;

  document.querySelectorAll(".odds-row").forEach(row => {
    const odd = parseFloat(row.querySelector("input").value);
    const type = row.querySelector("select").value;

    if (!odd || odd <= 1) return;

    let finalOdd = 1;

    switch(type) {
      case "win":
        finalOdd = odd;
        break;
      case "halfwin":
        finalOdd = 1 + (odd - 1) / 2;
        break;
      case "halflose":
        finalOdd = 1 + (odd - 1) / 2;
        break;
      case "draw":
        finalOdd = 1;
        break;
    }

    totalOdds *= finalOdd;
  });

  totalOdds = totalOdds.toFixed(2);
  document.getElementById("totalOdds").value = totalOdds;

  const stake = parseFloat(document.getElementById("stake").value);
  if (stake && stake > 0) {
    document.getElementById("winResult").value =
      (stake * totalOdds).toFixed(2);
  } else {
    document.getElementById("winResult").value = "";
  }
}

document.getElementById("stake").addEventListener("input", calculate);

function resetOdds() {
  oddsCount = 0;
  document.getElementById("oddsContainer").innerHTML = "";
  document.getElementById("totalOdds").value = "";
  document.getElementById("stake").value = "";
  document.getElementById("winResult").value = "";
}
