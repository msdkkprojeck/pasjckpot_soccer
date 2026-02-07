function backToMenu() {
  window.location.href = "index.html";
}

const bonusContainer = document.getElementById("bonusContainer");

const bonusEvents = [
  {
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
🏅 Juara 7 – Uang Tunai Rp 7.000.000<br>
💰 Juara 8 – Uang Tunai Rp 5.000.000<br>
💰 Juara 9 – Uang Tunai Rp 3.000.000<br>
💰 Juara 10 – Emas 1 Gram<br>
💰 Juara 11 – Uang Tunai Rp 1.500.000<br>
💰 Juara 12 – Uang Tunai Rp 1.000.000<br>
💰 Juara 13 – Uang Tunai Rp 500.000<br>
💰 Juara 14 – Uang Tunai Rp 300.000<br>
💰 Juara 15 – Uang Tunai Rp 200.000
`
  },

  {
    img: "https://picsum.photos/400/150?random=2",
    text: `
📌 <b>SYARAT & KETENTUAN – GACHA ANGPAO IMLEK 🧧</b><br><br>

🏍️ Honda ADV 160<br>
🥈 Emas 3 Gram<br>
🥉 Uang Tunai Rp 5.000.000<br>
🏅 Emas 1 Gram<br>
🏅 Uang Tunai Rp 1.500.000<br><br>

✔ Gacha Angpao maksimal 2x per hari (setelah deposit)<br>
✔ Berlaku untuk seluruh member<br>
✔ Hadiah utama berdasarkan TO tertinggi (Juara 1–5)<br>
✔ Tidak melakukan WD sebelum klaim<br>
✔ Klaim via Live Chat / Telegram / WhatsApp resmi<br>
✔ Tidak digabung dengan Spin Wheel atau promo lainnya<br>
✔ Indikasi kecurangan → hadiah dibatalkan<br><br>

✨ <b>2 OPSI EVENT</b><br>
🎁 Gacha Angpao Harian<br>
🏆 Klasemen Hadiah Utama hingga awal Maret 2026<br><br>

📞 <b>KONTAK RESMI (24 JAM)</b><br>
📲 WA Official<br>
📨 Telegram Official
`
  },

  {
    img: "https://picsum.photos/400/150?random=3",
    text: `
🌙✨ <b>Bonus Jumat Berkah 30%</b> ✨🌙<br>
Periode: SETIAP JUMAT 🔥<br><br>

💰 Depo min: 30K<br>
🎁 Bonus: 30% (max 300K)<br>
⏳ Klaim: 1x / User ID / Jumat<br><br>

🔄 TO 5x (Depo + Bonus)<br>
🎮 Berlaku untuk semua game<br><br>

👉 Buruan klaim sebelum kelewat! 🚀<br><br>

📞 <b>KONTAK RESMI (24 JAM)</b><br>
📲 WA Official<br>
📨 Telegram Official
`
  },

  {
    img: "https://picsum.photos/400/150?random=4",
    text: `
💖 <b>PROMO VALENTINE – CINTA & CUAN</b> 💖<br><br>

📅 14 Februari | 24 Jam Penuh<br>
💝 Bonus Valentine Special<br>
🎁 Bonus hingga 14%<br>
💰 Maksimal bonus Rp 214.000<br>
⚡ Klaim cepat, tanpa ribet<br>
🔄 Berlaku untuk semua game favorit<br><br>

💕 Rayakan Valentine dengan keberuntungan!<br>
Karena cinta boleh manis, cuan harus deras 💸
`
  },

  {
    img: "https://picsum.photos/400/150?random=5",
    text: `
<b>PASJACKPOT APK REWARD</b><br>
Bonus 25% • Untuk kamu yang download & terhubung<br><br>

📲 <b>CARA CEPAT DAPAT BONUS</b><br>
Download APK PASJACKPOT, deposit minimal Rp25.000 lalu klaim dengan screenshot APK sudah terpasang.<br><br>

📌 <b>SYARAT & KETENTUAN</b><br>
✔ Promo berlaku untuk semua member<br>
✔ Wajib download APK PASJACKPOT<br>
✔ Minimal deposit Rp25.000<br>
✔ Maks bonus Rp100.000<br>
✔ TO 1x (deposit + bonus)<br>
✔ 1x klaim per user<br>
✔ Slot & Arcade only<br>
✔ Wajib lampirkan screenshot APK<br>
✔ WD setelah TO terpenuhi<br>
✔ Tidak digabung promo lain<br>
✔ Klaim via Live Chat / Telegram / WhatsApp resmi<br>
✔ Penyalahgunaan → bonus dibatalkan<br><br>

🧮 <b>CONTOH TO</b><br>
Deposit 50.000 + Bonus 12.500 = 62.500<br>
TO wajib: 1x = 62.500
`
  }
];

// === RENDER SEMUA BONUS (SERAGAM) ===
bonusEvents.forEach(event => {
  const card = document.createElement("div");
  card.className = "bonus-card";

  card.innerHTML = `
    <img src="${event.img}">
    <div class="img-size">400 x 150</div>

    <div class="buttons">
      <button class="btn-glow" onclick="openDetail('${event.img}', \`${event.text}\`)">DETAIL</button>
      <button class="btn-glow" onclick="claimBonus()">CLAIM</button>
    </div>
  `;

  bonusContainer.appendChild(card);
});

// === MODAL DETAIL ===
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
