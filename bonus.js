// Kembali ke menu utama
function backToMenu() {
  window.location.href = "index.html";
}

// Container tempat bonus event
const bonusContainer = document.getElementById("bonusContainer");

// Data bonus event sementara dengan gambar placeholder
const bonusEvents = [
  { id: 1, img: "https://picsum.photos/400/150?random=1", detail: "DIMAS BOHONG" },
  { id: 2, img: "https://picsum.photos/400/150?random=2", detail: "DIMAS BOHONG" },
  { id: 3, img: "https://picsum.photos/400/150?random=3", detail: "DIMAS BOHONG" },
  { id: 4, img: "https://picsum.photos/400/150?random=4", detail: "DIMAS BOHONG" },
  { id: 5, img: "https://picsum.photos/400/150?random=5", detail: "DIMAS BOHONG" },
];

// Buat card bonus event
bonusEvents.forEach(event => {
  const card = document.createElement("div");
  card.className = "bonus-card";
  card.innerHTML = `
    <img src="${event.img}" alt="Bonus Event ${event.id}">
    <div class="buttons">
      <button class="btn-glow" onclick="claimBonus(${event.id})">CLAIM</button>
      <button class="btn-glow" onclick="toggleDetailAccordion(this)">DETAIL</button>
    </div>
    <div class="bonus-detail">${event.detail}</div>
  `;
  bonusContainer.appendChild(card);
});

// Fungsi toggle accordion
function toggleDetailAccordion(button) {
  const allDetails = document.querySelectorAll(".bonus-detail");
  const detail = button.parentElement.nextElementSibling;

  // Tutup semua detail lain
  allDetails.forEach(d => {
    if(d !== detail) d.style.display = "none";
  });

  // Toggle detail yang diklik
  if(detail.style.display === "block") {
    detail.style.display = "none";
  } else {
    detail.style.display = "block";
  }
}

// Fungsi claim bonus
function claimBonus(id) {
  // nanti ganti LINK_TELEGRAM dengan link asli
  window.open("https://urlmsshorten.com/group-tele-official
", "_blank");
}
