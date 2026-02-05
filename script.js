const API_KEY = "5a6bf8641dmsh6c96007ad866443p1e141fjsn73f039823462";
const API_HOST = "api-football-v1.p.rapidapi.com";

const majorLeagues = [39, 140, 61, 78, 135]; // PL, La Liga, Serie A, Bundesliga, Ligue 1

const matchesDiv = document.getElementById("matches");

// ===== Menu Function =====
function showMenu() {
    document.getElementById("menu").classList.remove("hidden");
}

function showSection(sectionId) {
    document.getElementById("menu").classList.add("hidden");
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");

    if(sectionId === "live") {
        fetchMatches();
        setInterval(fetchMatches, 30000);
    }
}

function backToMenu() {
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById("menu").classList.remove("hidden");
}

// ===== Live Score Function =====
async function fetchMatches() {
    matchesDiv.innerHTML = "Loading matches...";

    try {
        const res = await fetch(`https://${API_HOST}/v3/fixtures?live=all`, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": API_HOST
            }
        });

        const data = await res.json();

        const matches = data.response.filter(m => majorLeagues.includes(m.league.id));

        if(matches.length === 0){
            matchesDiv.innerHTML = "Tidak ada pertandingan live saat ini.";
            return;
        }

        matchesDiv.innerHTML = matches.map(match => {
            const home = match.teams.home.name;
            const away = match.teams.away.name;
            const score = match.goals.home !== null ? `${match.goals.home} - ${match.goals.away}` : "VS";
            const league = match.league.name;
            const date = new Date(match.fixture.date).toLocaleString("id-ID", {dateStyle: "short", timeStyle: "short"});

            return `
                <div class="match">
                    <div>
                        <div class="league">${league}</div>
                        ${home} vs ${away} <br>
                        <small>${date}</small>
                    </div>
                    <div class="score">${score}</div>
                </div>
            `;
        }).join("");

    } catch(err) {
        matchesDiv.innerHTML = "Gagal memuat data live score.";
        console.error(err);
    }
}
