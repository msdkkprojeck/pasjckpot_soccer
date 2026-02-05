function fetchUpcomingMatchesDummy() {
    const matches = [
        {league:"Premier League", home:"Manchester United", away:"Liverpool", date:"2026-02-07 20:00"},
        {league:"La Liga", home:"Real Madrid", away:"Barcelona", date:"2026-02-08 22:00"},
        {league:"Serie A", home:"Juventus", away:"Inter Milan", date:"2026-02-09 19:45"}
    ];

    scheduleDiv.innerHTML = matches.map(match => `
        <div class="match">
            <div>
                <div class="league">${match.league}</div>
                ${match.home} vs ${match.away}<br>
                <small>${match.date}</small>
            </div>
        </div>
    `).join("");
}
