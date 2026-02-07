function backToMenu() {
  window.location.href = "index.html";
}

const bonusContainer = document.getElementById("bonusContainer");

const bonusEvents = [
  {
    img: "https://picsum.photos/400/150?random=1",
    text: `TURNAMEN TURNOVER
Tingkatkan Transaksi, Rebut Peringkat & Jadilah Juara! 🏆💰
periode 01 - 28 Februari
📌 SYARAT & KETENTUAN
✔ Berlaku untuk seluruh member
✔ Hadiah utama berdasarkan TO tertinggi
✔ All game
✔ Tidak melakukan withdraw sebelum klaim
✔ Klaim via Live Chat / Telegram / WhatsApp resmi
✔ Tidak digabung dengan Spin Wheel atau promo lainnya.
✔ Indikasi kecurangan → hadiah dibatalkan
✅ HADIAHNYA :
🥇 Juara 1 – Honda HR-V
🥈 Juara 2 - Yamaha NMAX "Turbo" Series
🥉 Juara 3 - Samsung Galaxy S25 Ultra
🏅 Juara 4 - Emas 10 Gram
🏅 Juara 5 - - Emas 5 Gram
🏅 Juara 6 - Emas Gram
🏅 Juara 7 - Uang Tunai Rp 7,000,000
💰 Juara 8 - Uang Tunai Rp 5,000,000
💰 Juara 9 - Uang Tunai Rp 3,000,000
💰 Juara 10 - Emas 1 Gram
💰 Juara 11 - Uang Tunai Rp 1.500.00
💰 Juara 12 - Uang Tunai Rp 1.000.00
💰 Juara 13 - Uang Tunai Rp 500.000
💰 Juara 14 - Uang Tunai Rp 300.000
💰 Juara 15 - Uang Tunai Rp 200.000
<br><br>...ISI PANJANG BONUS 1...`
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
