// Kembali ke menu utama
function backToMenu() {
  window.location.href = "index.html";
}

// Container tempat bonus event
const bonusContainer = document.getElementById("bonusContainer");

// Data bonus event
const bonusEvents = [
  { id: 1, img: "https://i.ibb.co/2v3B9Pv/event1.jpg", detail: "DIMAS BOHONG" },
  { id: 2, img: "https://i.ibb.co/2v3B9Pv/event1.jpg", detail: "DIMAS BOHONG" },
  { id: 3, img: "https://i.ibb.co/2v3B9Pv/event1.jpg", detail: "DIMAS BOHONG" },
  { id: 4, img: "https://i.ibb.co/2v3B9Pv/event1.jpg", detail: "DIMAS BOHONG" },
  { id: 5, img: "https://i.ibb.co/2v3B9Pv/event1.jpg", detail: "DIMAS BOHONG" },
];

// Buat card bonus event
bonusEvents.forEach(event => {
  const card = document.createElement("div");
  card.className = "bonus-card";
  card.innerHTML = `
    <img src="${event.img}" alt="Bonus Event ${event.id}">
    <div class="buttons">
      <button class="btn-glow" onclick="claimBonus(${event.id})">CLAIM</button>
      <button class="btn-glow" onclick="toggleDetail(this)">DETAIL</button>
    </div>
    <div class="bonus-detail">${event.detail}</div>
  `;
  bonusContainer.appendChild(card);
});

// Fungsi toggle detail
function toggleDetail(button) {
  const detail = button.parentElement.nextElementSibling;
  if(detail.style.display === "block"){
    detail.style.display = "none";
  } else {
    detail.style.display = "block";
  }
}

// Fungsi claim bonus
function claimBonus(id) {
  // nanti ganti LINK_TELEGRAM dengan link asli
  window.open("LINK_TELEGRAM", "_blank");
}
