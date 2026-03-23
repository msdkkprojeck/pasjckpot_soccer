let score = 0;

// 🎨 ASSET (TINGGAL GANTI LINK)
const assets = {
  player_idle: "https://i.ibb.co/F4qkqKLC/penendang-gambar-2.png",
  player_kick: "https://i.ibb.co/nsfh5VSX/penendang-gambar-3.png",

  keeper_idle: "https://i.ibb.co/DPBmgWRZ/keper-sebelum-mulai.png",
  keeper_ready: "https://i.ibb.co/0pKTdxdM/sudah-mulai-dan-bersiap.png",
  keeper_left: "https://i.ibb.co/v66vC5yz/kiper-diving-kiri.png",
  keeper_center: "https://i.ibb.co/Sw8cQTkX/dapat-bola-1.png",
  keeper_right: "https://i.ibb.co/9SLqdWg/kiper-diving-kanan.png"
};

function shoot(direction) {
  const player = document.getElementById("player");
  const ball = document.getElementById("ball");
  const keeper = document.getElementById("keeper");

  const directions = ["left", "center", "right"];
  const keeperMove = directions[Math.floor(Math.random() * 3)];

  // 1. Player nendang
  player.src = assets.player_kick;

  // 2. Kiper siap
  setTimeout(() => {
    keeper.src = assets.keeper_ready;
  }, 150);

  // 3. Bola jalan
  setTimeout(() => {
    if (direction === "left") {
      ball.style.left = "80px";
    } else if (direction === "center") {
      ball.style.left = "170px";
    } else {
      ball.style.left = "260px";
    }
    ball.style.bottom = "420px";
    ball.style.transform = "scale(0.7)";
  }, 200);

  // 4. Kiper lompat
  setTimeout(() => {
    if (keeperMove === "left") {
      keeper.src = assets.keeper_left;
      keeper.style.left = "80px";
    } else if (keeperMove === "center") {
      keeper.src = assets.keeper_center;
      keeper.style.left = "140px";
    } else {
      keeper.src = assets.keeper_right;
      keeper.style.left = "220px";
    }
  }, 400);

  // 5. RESULT
  setTimeout(() => {
    if (direction !== keeperMove) {
      score++;
      alert("GOAL!!! ⚽🔥");
    } else {
      alert("DITANGKAP!! 🧤");
    }

    document.getElementById("score").innerText = score;

    // RESET
    player.src = assets.player_idle;
    keeper.src = assets.keeper_idle;

    ball.style.bottom = "90px";
    ball.style.left = "170px";
    ball.style.transform = "scale(1)";
    keeper.style.left = "140px";

  }, 900);
}
