function backToMenu() {
  window.location.href = "index.html";
}

const bonusContainer = document.getElementById("bonusContainer");

const bonusEvents = [
  {
    img: "https://picsum.photos/400/150?random=1",
    text: `TURNAMEN TURNOVER<br><br>...ISI PANJANG BONUS 1...`
  },
  {
    img: "https://picsum.photos/400/150?random=2",
    text: `...ISI BONUS 2...`
  },
  {
    img: "https://picsum.photos/400/150?random=3",
    text: `...ISI BONUS 3...`
  },
  {
    img: "https://picsum.photos/400/150?random=4",
    text: `...ISI BONUS 4...`
  },
  {
    img: "https://picsum.photos/400/150?random=5",
    text: `...ISI BONUS 5...`
  }
];

// ⬇️ SATU TEMPLATE UNTUK SEMUA BONUS
bonusEvents.forEach(event => {
  const card = document.createElement("div");
  card.className = "bonus-card";

  card.innerHTML = `
    <img src="${event.img}">
    <div class="img-size">400 x 150</div>

    <div class="buttons">
      <button class="btn-glow" onclick="openDetail('${event.img}', \`${event.text}\`)">
        DETAIL
      </button>
      <button class="btn-glow" onclick="claimBonus()">
        CLAIM
      </button>
    </div>
  `;

  bonusContainer.appendChild(card);
});

// ===== MODAL DETAIL =====
function openDetail(img, text) {
  const old = document.querySelector(".modal-overlay");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  overlay.innerHTML = `
    <div class="modal-box">
      <img src="${img}">
      <div class="modal-text">${text}</div>
      <div class="modal-actions">
        <button class="btn-glow" onclick="claimBonus()">CLAIM</button>
        <button class="btn-glow" onclick="closeModal()">CLOSE</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) modal.remove();
}

function claimBonus() {
  window.open("https://urlpsjshorten.com/telegram-official", "_blank");
}
