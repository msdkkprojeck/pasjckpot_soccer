// ===== SPLASH PAGE =====
document.getElementById("enter-btn").addEventListener("click", ()=>{
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
});

// ===== MAIN PAGE BUTTON =====
document.getElementById("go-menu").addEventListener("click", ()=>{
    document.getElementB    yId("main-page").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
});

// ===== MENU FUNCTIONS =====
function showSection(sectionId){
    document.getElementById("menu").classList.add("hidden");
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

function backToMenu(){
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById("menu").classList.remove("hidden");
}

// ===== PARLAY CALCULATOR =====
const parlayRowsDiv = document.getElementById("parlay-rows");
const parlayTotalSpan = document.getElementById("parlay-total");

let parlayRows = [];
const maxRows = 20;

// Create table row
function createParlayRow(index){
    const tr = document.createElement("tr");
    tr.dataset.index = index;

    const tdNo = document.createElement("td");
    tdNo.textContent = index + 1;

    const tdOdds = document.createElement("td");
    const inputOdds = document.createElement("input");
    inputOdds.type = "number";
    inputOdds.value = 1.0;
    inputOdds.min = 1;
    tdOdds.appendChild(inputOdds);

    const tdResult = document.createElement("td");
    const selectResult = document.createElement("select");
    ["Win","Half Win","Lose","Draw"].forEach(opt=>{
        const o = document.createElement("option");
        o.value = opt;
        o.textContent = opt;
        selectResult.appendChild(o);
    });
    tdResult.appendChild(selectResult);

    const tdSubtotal = document.createElement("td");
    tdSubtotal.textContent = "0.00";

    tr.appendChild(tdNo);
    tr.appendChild(tdOdds);
    tr.appendChild(tdResult);
    tr.appendChild(tdSubtotal);

    parlayRowsDiv.appendChild(tr);

    parlayRows.push({odds: inputOdds, result: selectResult, subtotal: tdSubtotal});

    inputOdds.addEventListener("input", calculateParlay);
    selectResult.addEventListener("change", calculateParlay);
}

// Calculate totals
function calculateParlay(){
    let total = 1;
    parlayRows.forEach(row=>{
        const odds = parseFloat(row.odds.value) || 1;
        const result = row.result.value;
        let multiplier = 1;

        switch(result){
            case "Win": multiplier = odds; break;
            case "Lose": multiplier = 0; break;
            case "Half Win": multiplier = (1 + odds)/2; break;
            case "Draw": multiplier = 1; break;
        }

        row.subtotal.textContent = multiplier.toFixed(2);
        total *= multiplier;
    });

    parlayTotalSpan.textContent = total.toFixed(2);
}

// Add row
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
