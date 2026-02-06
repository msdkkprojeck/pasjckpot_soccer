let oddsCount = 0;
const maxOdds = 30;

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToMenu(){ showPage("menu"); }
function openCalculator(){ showPage("calculator"); }
function backToMenu(){ showPage("menu"); }

/* FORMAT ANGKA KE RIBUAN */
function formatNumber(num) {
  return num.toLocaleString("en-US");
}

/* HAPUS KOMA KE ANGKA ASLI */
function parseNumber(str) {
  return parseFloat(str.replace(/,/g, "")) || 0;
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

  row.querySelectorAll("input,select").forEach(el => {
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
      case "halflose":
        finalOdd = 1 + (odd - 1) / 2;
        break;
      case "draw":
        finalOdd = 1;
        break;
    }

    totalOdds *= finalOdd;
  });

  totalOdds = Number(totalOdds.toFixed(2));
  document.getElementById("totalOdds").value = totalOdds;

  const stakeInput = document.getElementById("stake");
  const stake = parseNumber(stakeInput.value);

  if (stake > 0) {
    const win = stake * totalOdds;
    document.getElementById("winResult").value = formatNumber(Math.floor(win));
  } else {
    document.getElementById("winResult").value = "";
  }
}

/* FORMAT MODAL SAAT DIKETIK */
const stakeInput = document.getElementById("stake");
stakeInput.addEventListener("input", () => {
  const raw = parseNumber(stakeInput.value);
  stakeInput.value = raw ? formatNumber(raw) : "";
  calculate();
});

function resetOdds() {
  oddsCount = 0;
  document.getElementById("oddsContainer").innerHTML = "";
  document.getElementById("totalOdds").value = "";
  document.getElementById("stake").value = "";
  document.getElementById("winResult").value = "";
}
