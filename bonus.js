function backToMenu() {
  window.location.href = "index.html";
}

const bonusContainer = document.getElementById("bonusContainer");

const bonusEvents = [
  {
    title: "TURNAMEN TURNOVER",
    img: "https://picsum.photos/400/150?random=1",
    text: `
<b>TURNAMEN TURNOVER</b><br>
Tingkatkan Transaksi, Rebut Peringkat & Jadilah Juara! 🏆💰<br>
Periode 01 - 28 Februari<br><br>

📌 <b>SYARAT & KETENTUAN</b><br>
✔ Berlaku untuk seluruh member<br>
✔ Hadiah utama berdasarkan TO tertinggi<br>
✔ All game<br>
✔ Tidak melakukan withdraw sebelum klaim<br>
✔ Klaim via Live Chat / Telegram / WhatsApp resmi<br>
✔ Tidak digabung dengan Spin Wheel atau promo lainnya<br>
✔ Indikasi kecurangan → hadiah dibatalkan<br><br>

✅ <b>HADIAHNYA :</b><br>
🥇 Juara 1 – Honda HR-V<br>
🥈 Juara 2 – Yamaha NMAX "Turbo" Series<br>
🥉 Juara 3 – Samsung Galaxy S25 Ultra<br>
🏅 Juara 4 – Emas 10 Gram<br>
🏅 Juara 5 – Emas 5 Gram<br>
🏅 Juara 6 – Emas 1 Gram<br>
🏅 Juara 7 – Rp 7.000.000<br>
💰 Juara 8 – Rp 5.000.000<br>
💰 Juara 9 – Rp 3.000.000<br>
💰 Juara 10 – Emas 1 Gram<br>
💰 Juara 11 – Rp 1.500.000<br>
💰 Juara 12 – Rp 1.000.000<br>
💰 Juara 13 – Rp 500.000<br>
💰 Juara 14 – Rp 300.000<br>
💰 Juara 15 – Rp 200.000
`
  },

  {
    title: "GACHA ANGPAO IMLEK",
    img: "https://picsum.photos/400/150?random=2",
    text: `
📌 <b>SYARAT & KETENTUAN – GACHA ANGPAO IMLEK 🧧</b><br><br>

🏍️ Honda ADV 160<br>
🥈 Emas 3 Gram<br>
🥉 Uang Tunai Rp 5.000.000<br>
🏅 Emas 1 Gram<br>
🏅 Uang Tunai Rp 1.500.000<br><br>

✔ Maksimal 2x klaim per hari (setelah deposit)<br>
✔ Berlaku untuk seluruh member<br>
✔ Hadiah utama berdasarkan TO tertinggi (Juara 1–5)<br>
✔ Tidak WD sebelum klaim<br>
✔ Klaim via Live Chat / Telegram / WhatsApp resmi<br>
✔ Tidak digabung promo lain<br>
✔ Indikasi kecurangan → hadiah dibatalkan
`
  },

  {
    title: "BONUS JUMAT BERKAH 30%",
    img: "https://picsum.photos/400/150?random=3",
    text: `
🌙✨ <b>Bonus Jumat Berkah 30%</b> ✨🌙<br>
Periode: SETIAP JUMAT 🔥<br><br>

💰 Depo min 30K<br>
🎁 Bonus 30% (max 300K)<br>
⏳ Klaim 1x / Jumat<br><br>

🔄 TO 5x (Depo + Bonus)<br>
🎮 Semua game
`
  },

  {
    title: "PROMO VALENTINE",
    img: "https://picsum.photos/400/150?random=4",
    text: `
💖 <b>PROMO VALENTINE – CINTA & CUAN</b> 💖<br><br>

📅 14 Februari | 24 Jam<br>
🎁 Bonus hingga 14%<br>
💰 Maks Rp 214.000<br>
⚡ Klaim cepat<br>
🔄 Semua game
`
  },

  {
    title: "PASJACKPOT APK REWARD",
    img: "https://picsum.photos/400/150?random=5",
    text: `
<b>PASJACKPOT APK REWARD</b><br>
Bonus 25% untuk user APK<br><br>

📲 Download APK → deposit min Rp25.000<br>
🎁 Bonus max Rp100.000<br>
🔄 TO 1x<br>
🎮 Slot & Arcade
`
  }
];

// ===== RENDER SEMUA BONUS =====
bonusEvents.forEach((event, index) => {
  const card = document.createElement("div");
  card.className = "bonus-card";

  card.innerHTML = `
    <img src="${event.img}">
    <div class="bonus-title">${event.title}</div>

    <div class="buttons">
      <button class="btn-glow" onclick="openDetail(${index})">DETAIL</button>
      <button class="btn-glow" onclick="claimBonus()">CLAIM</button>
    </div>
  `;

  bonusContainer.appendChild(card);
});

// ===== MODAL DETAIL =====
function openDetail(index) {
  const event = bonusEvents[index];

  const old = document.querySelector(".modal-overlay");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  overlay.innerHTML = `
    <div class="modal-box">
      <img src="${event.img}">
      <div class="modal-text">${event.text}</div>
      <div class="modal-actions">
        <button class="btn-glow" onclick="claimBonus()">CLAIM</button>
        <button class="btn-glow" onclick="closeModal()">CLOSE</button>
      </div>
    </div>
  `;
