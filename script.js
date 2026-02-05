const API_KEY = "5a6bf8641dmsh6c96007ad866443p1e141fjsn73f039823462";
const API_HOST = "api-football-v1.p.rapidapi.com";
const matchesDiv = document.getElementById("matches");

// Contoh liga besar
const majorLeagues = [39, 140, 61, 78, 135]; // PL, La Liga, Serie A, Bundesliga, Ligue 1

async function fetchUpcomingMatches(daysAhead = 7) {
    matchesDiv.innerHTML = "Loading upcoming matches...";

    try {
        const today = new Date();
        const dateFrom = today.toISOString().split("T")[0];

        const futureDate = new Date();
        futureDate.setDate(today.getDate() + daysAhead);
        const dateTo = futureDate.toISOString().split("T")[0];

        const url = `https://${API_HOST}/v3/fixtures?dateFrom=${dateFrom}&dateTo=${dateTo}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": API_HOST
            }
        });

        const data = await res.json();
        const matches = data.response.filter(m => majorLeagues.includes(m.league.id));

        if(matches.length === 0) {
            matchesDiv.innerHTML = "Tidak ada jadwal pertandingan dalam periode ini.";
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
        matchesDiv.innerHTML = "Gagal memuat data.";
        console.error(err);
    }
}

// Contoh panggil jadwal 7 hari ke depan
fetchUpcomingMatches(7);

// Auto-refresh setiap 24 jam agar update otomatis
setInterval(() => fetchUpcomingMatches(7), 24 * 60 * 60 * 1000);
