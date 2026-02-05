const API_KEY = "5a6bf8641dmsh6c96007ad866443p1e141fjsn73f039823462";
const API_HOST = "api-football-v1.p.rapidapi.com";

// Liga besar contoh: Premier League, La Liga, Serie A, Bundesliga, Ligue 1
const majorLeagues = [39, 140, 61, 78, 135];

const liveDiv = document.getElementById("matches-live");
const scheduleDiv = document.getElementById("matches-schedule");

// ===== Menu Functions =====
function showMenu() {
    document.getElementById("menu").classList.remove("hidden");
}

function showSection(sectionId) {
    document.getElementById("menu").classList.add("hidden");
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");

    if(sectionId === "live") { fetchLiveMatches(); setInterval(fetchLiveMatches, 30000); }
    if(sectionId === "schedule") { fetchUpcomingMatches(7); setInterval(() => fetchUpcomingMatches(7), 24*60*60*1000); }
}

function backToMenu() {
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById("menu").classList.remove("hidden");
}

// ===== Live Score =====
async function fetchLiveMatches() {
    liveDiv.innerHTML = "Loading live matches...";
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

        if(matches.length === 0){ liveDiv.innerHTML = "Tidak ada pertandingan live saat ini."; return; }

        liveDiv.innerHTML = matches.map(match => {
            const home = match.teams.home.name;
            const away = match.teams.away.name;
            const score = match.goals.home !== null ? `${match.goals.home} - ${match.goals.away}` : "VS";
            const league = match.league.name;
            const date = new Date(match.fixture.date).toLocaleString("id-ID", {dateStyle: "short", timeStyle: "short"});

            return `
                <div class="match">
                    <div>
                        <div class="league">${league}</div>
                        ${home} vs ${away}<br>
                        <small>${date}</small>
                    </div>
                    <div class="score">${score}</div>
                </div>
            `;
        }).join("");
    } catch(err) {
        liveDiv.innerHTML = "Gagal memuat data live score.";
        console.error(err);
    }
}

// ===== Jadwal Mendatang (7 hari / 1 bulan) =====
async function fetchUpcomingMatches(daysAhead = 7) {
    scheduleDiv.innerHTML = "Loading upcoming matches...";
    try {
        const today = new Date();
        const dateFrom = today.toISOString().split("T")[0];
        const future = new Date();
        future.setDate(today.getDate() + daysAhead);
        const dateTo = future.toISOString().split("T")[0];

        const res = await fetch(`https://${API_HOST}/v3/fixtures?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": API_HOST
            }
        });

        const data = await res.json();
        const matches = data.response.filter(m => majorLeagues.includes(m.league.id));

        if(matches.length === 0){ scheduleDiv.innerHTML = "Tidak ada jadwal pertandingan dalam periode ini."; return; }

        scheduleDiv.innerHTML = matches.map(match => {
            const home = match.teams.home.name;
            const away = match.teams.away.name;
            const score = match.goals.home !== null ? `${match.goals.home} - ${match.goals.away}` : "VS";
            const league = match.league.name;
            const date = new Date(match.fixture.date).toLocaleString("id-ID", {dateStyle: "short", timeStyle: "short"});

            return `
                <div class="match">
                    <div>
                        <div class="league">${league}</div>
                        ${home} vs ${away}<br>
                        <small>${date}</small>
                    </div>
                    <div class="score">${score}</div>
                </div>
            `;
        }).join("");

    } catch(err) {
        scheduleDiv.innerHTML = "Gagal memuat jadwal.";
        console.error(err);
    }
}
