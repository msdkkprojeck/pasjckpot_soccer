function backToMenu() {
  window.location.href = "index.html";
}

const bonusContainer = document.getElementById("bonusContainer");

const bonusEvents = [
  { id: 1, img: "https://picsum.photos/400/150?random=1" },
  { id: 2, img: "https://picsum.photos/400/150?random=2" },
  { id: 3, img: "https://picsum.photos/400/150?random=3" },
  { id: 4, img: "https://picsum.photos/400/150?random=4" },
  { id: 5, img: "https://picsum.photos/400/150?random=5" },
];

bonusEvents.forEach(event => {
  const card = document.createElement("div");
  card.className = "bonus-card";
  card.innerHTML = `
    <img src="${event.img}">
    <div class="img-size">400 x 150</div>

    <div class="buttons">
      <button class="btn-glow" onclick="openDetail(this, '${event.img}')">DETAIL</button>
      <button class="btn-glow" onclick="claimBonus()">CLAIM</button>
    </div>
  `;
  bonusContainer.appendChild(card);
});

function openDetail(button, imgSrc) {
  // Tutup semua panel detail lain
  document.querySelectorAll(".detail-panel").forEach(p => p.remove());

  const card = button.closest(".bonus-card");

  const panel = document.createElement("div");
  panel.className = "detail-panel";
  panel.innerHTML = `
    <img src="${imgSrc}">
    <div class="detail-text">DIMAS BOHONG</div>
    <div class="detail-actions">
      <button class="btn-glow" onclick="claimBonus()">CLAIM</button>
      <button class="btn-glow" onclick="this.closest('.detail-panel').remove()">CLOSE</button>
    </div>
  `;

  card.appendChild(panel);
}

function claimBonus() {
  window.open("https://urlpsjshorten.com/telegram-official", "_blank");
}
