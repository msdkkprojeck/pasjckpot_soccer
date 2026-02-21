// Efek suara klik tombol
const clickSound = new Audio("https://www.myinstants.com/media/sounds/mouse-click.mp3"); // contoh link suara
function playClick() {
  clickSound.currentTime = 0;
  clickSound.play().catch(e=>console.log("Audio autoplay blocked", e));
}

// Override tombol dengan efek suara
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("btn-glow")) playClick();
});


document.addEventListener("DOMContentLoaded", () => {

  const bonusContainer = document.getElementById("bonusContainer");

  function backToMenu() {
    window.location.href = "index.html";
  }

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
✔ Tidak digabung dengan Spin Wheel atau promo lainnya.<br>
✔ Indikasi kecurangan → hadiah dibatalkan<br><br>
✅ <b>HADIAHNYA :</b><br>
🥇 Juara 1 – Honda HR-V<br>
🥈 Juara 2 - Yamaha NMAX "Turbo" Series<br>
🥉 Juara 3 - Samsung Galaxy S25 Ultra<br>
🏅 Juara 4 - Emas 10 Gram<br>
🏅 Juara 5 - Emas 5 Gram<br>
🏅 Juara 6 - Emas Gram<br>
🏅 Juara 7 - Uang Tunai Rp 7,000,000<br>
💰 Juara 8 - Uang Tunai Rp 5,000,000<br>
💰 Juara 9 - Uang Tunai Rp 3,000,000<br>
💰 Juara 10 - Emas 1 Gram<br>
💰 Juara 11 - Uang Tunai Rp 1.500.00<br>
💰 Juara 12 - Uang Tunai Rp 1.000.00<br>
💰 Juara 13 - Uang Tunai Rp 500.000<br>
💰 Juara 14 - Uang Tunai Rp 300.000<br>
💰 Juara 15 - Uang Tunai Rp 200.000
`
    },
    {
      title: "🌙 BONUS NGABUBURIT – MENJELANG BUKA PUASA",
      img: "https://i.ibb.co/fVPQ8P0X/banner-400x150-rapi.png",
      text: `
🌙 BONUS NGABUBURIT – MENJELANG BUKA PUASA
Periode: 07.00 – 23.00 WIB 
• Bonus deposit 25% khusus jam ngabuburit
• Maksimal bonus: 200.000
• TO X3 DEPO + BONUS
▫️ Minimal Deposit Rp25.000
▫️ Bonus 25% (Max Rp200.000)
▫️ Berlaku pukul 16.00 – 18.00 WIB
▫️ Turnover 3x (Deposit + Bonus)
▫️ Untuk hanya bisa 1x dalam sehari
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
⏳ Klaim 1x / User ID / Jumat<br><br>
🔄 TO 5x (Depo + Bonus)<br>
🎮 Semua game
`
    },
    {
      title: "🌙 BONUS SAHUR BERKAH – SAMBUT RAMADHAN",
      img: "https://i.ibb.co/fVPQ8P0X/banner-400x150-rapi.png",
      text: `
🌙 BONUS SAHUR BERKAH – SAMBUT RAMADHAN
Periode: 00.00 – 06.00 WIB 
• Bonus deposit 35% setiap transaksi di jam sahur
• Maksimal bonus: 200.000
• TO X3 DEPO + BONUS
▫️ Minimal Deposit Rp25.000
▫️ Bonus 35% (Max Rp200.000)
▫️ Berlaku pukul 00.00 – 06.00 WIB
▫️ Turnover 3x (Deposit + Bonus)
▫️ Untuk hanya bisa 1x dalam sehari
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

  // Render semua bonus
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

  // DETAIL MODAL
  window.openDetail = function(index) {
    const event = bonusEvents[index];

    const old = document.querySelector(".modal-overlay");
    if(old) old.remove();

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

    document.body.appendChild(overlay);
    overlay.scrollIntoView({behavior: "smooth"});
  }

  window.closeModal = function() {
    document.querySelector(".modal-overlay")?.remove();
  }

  window.claimBonus = function() {
    window.open("https://urlpsjshorten.com/telegram-official", "_blank");
  }

  window.backToMenu = backToMenu;

});
