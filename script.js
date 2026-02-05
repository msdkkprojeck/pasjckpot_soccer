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
        const matches = (data.response || []).filter(m => majorLeagues.includes(m.league.id));

        if(matches.length === 0){ 
            liveDiv.innerHTML = "Tidak ada pertandingan live saat ini atau API key free tidak memberi akses live.";
            return; 
        }

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
