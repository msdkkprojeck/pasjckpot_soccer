const menuDiv = document.getElementById("menu");
const parlayRowsDiv = document.getElementById("parlay-rows");
const parlayTotalSpan = document.getElementById("parlay-total");
const perOddsDiv = document.getElementById("per-odds");

let parlayRows = [];
const maxRows = 20;

// ===== MENU FUNCTIONS =====
function showSection(sectionId){
    menuDiv.classList.add("hidden");
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

function backToMenu(){
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    menuDiv.classList.remove("hidden");
}

// ===== PARLAY CALCULATOR =====
function createParlayRow(index){
    const div = document.createElement("div");
    div.className = "parlay-row";
    div.dataset.index = index;

    const inputOdds = document.createElement("input");
    inputOdds.type = "number";
    inputOdds.placeholder = "Odds";
    inputOdds.value = 1.0;
    inputOdds.min = 1;

    const selectResult = document.createElement("select");
    ["Win","Lose","Half Win","Draw"].forEach(opt=>{
        const o = document.createElement("option");
        o.value = opt;
        o.textContent = opt;
        selectResult.appendChild(o);
    });

    inputOdds.addEventListener("input", calculateParlay);
    selectResult.addEventListener("change", calculateParlay);

    div.appendChild(inputOdds);
    div.appendChild(selectResult);
    parlayRowsDiv.appendChild(div);

    parlayRows.push({odds: inputOdds, result: selectResult});
}

// Calculate parlay
function calculateParlay(){
    let total = 1;
    let perOddsText = "";

    parlayRows.forEach((row, idx)=>{
        const odds = parseFloat(row.odds.value) || 1;
        const result = row.result.value;
        let multiplier = 1;

        switch(result){
            case "Win": multiplier = odds; break;
            case "Lose": multiplier = 0; break;
            case "Half Win": multiplier = (1 + odds)/2; break;
            case "Draw": multiplier = 1; break;
        }

        total *= multiplier;
        perOddsText += `Row ${idx+1}: ${multiplier.toFixed(2)}<br>`;
    });

    parlayTotalSpan.textContent = total.toFixed(2);
    perOddsDiv.innerHTML = perOddsText;
}

// Add new row
document.getElementById("add-row").addEventListener("click", ()=>{
    if(parlayRows.length >= maxRows){
        alert("Maximum 20 rows allowed!");
        return;
    }
    createParlayRow(parlayRows.length);
    calculateParlay();
});

// Reset odds
document.getElementById("reset-odds").addEventListener("click", ()=>{
    parlayRows.forEach(row=>{
        row.odds.value = 1;
        row.result.value = "Win";
    });
    calculateParlay();
});

// Initialize 3 rows
for(let i=0; i<3; i++) createParlayRow(i);
calculateParlay();
