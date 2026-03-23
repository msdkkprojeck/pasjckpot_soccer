let score = 0;
let isPlaying = false;

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
  if (isPlaying) return;
  isPlaying = true;

  const player = document.getElementById("player");
  const ball = document.getElementById("ball");
  const keeper = document.getElementById("keeper");

  const directions = ["left","center","right"];
  const keeperMove = directions[Math.floor(Math.random()*3)];

  // 🎯 PLAYER NENDANG (ANIMASI)
  player.style.transform = "scale(1.05)";
  player.src = assets.player_kick;

  setTimeout(() => {
    player.style.transform = "scale(1)";
  }, 200);

  // 🧤 KIPER SIAP
  setTimeout(() => {
    keeper.src = assets.keeper_ready;
  }, 150);

  // ⚽ BOLA GERAK (LEBIH HIDUP)
  setTimeout(() => {
    ball.style.transition = "all 0.6s cubic-bezier(.3,1.5,.5,1)";
    
    if (direction === "left") {
  ball.style.left = "25%";
}
else if (direction === "center") {
  ball.style.left = "50%";
}
else {
  ball.style.left = "75%";
}

  // 🧤 KIPER LOMPAT
  setTimeout(() => {
    if (keeperMove === "left") {
      keeper.src = assets.keeper_left;
      keeper.style.left = "25%";
keeper.style.transform = "translateX(-50%)";
    }
    if (keeperMove === "center") {
      keeper.src = assets.keeper_center;
     keeper.style.left = "50%"; // tengah
    }
    if (keeperMove === "right") {
      keeper.src = assets.keeper_right;
     keeper.style.left = "75%"; // kanan
    }
    ball.style.transform = "translateX(-50%) scale(0.6)";
  }, 400);

  // 🎉 HASIL
  setTimeout(() => {
    if (direction !== keeperMove) {
      score++;
      showResult("GOAL!!! 🔥", "gold");
      screenShake();
    } else {
      showResult("SAVE!! 🧤", "red");
    }

    document.getElementById("score").innerText = score;

    resetGame(player, ball, keeper);

  }, 900);
}

// 🔥 TEXT HASIL (GANTI ALERT)
function showResult(text, color) {
  let result = document.getElementById("result");

  if (!result) {
    result = document.createElement("div");
    result.id = "result";
    document.querySelector(".field").appendChild(result);
  }

  result.innerText = text;
  result.style.color = color;
  result.style.position = "absolute";
  result.style.top = "80px";
  result.style.width = "100%";
  result.style.fontSize = "32px";
  result.style.fontWeight = "bold";
  result.style.textAlign = "center";
  result.style.textShadow = "0 0 15px " + color;
  result.style.opacity = "1";

  setTimeout(() => {
    result.style.opacity = "0";
  }, 800);
}

// 💥 SHAKE EFFECT
function screenShake() {
  const field = document.querySelector(".field");
  field.style.animation = "shake 0.3s";

  setTimeout(() => {
    field.style.animation = "";
  }, 300);
}

// 🔁 RESET
function resetGame(player, ball, keeper) {
  setTimeout(() => {
    player.src = assets.player_idle;
    keeper.src = assets.keeper_idle;

    ball.style.transition = "0.3s";
    ball.style.bottom = "90px";
    ball.style.left = "170px";
    ball.style.transform = "scale(1)";

    keeper.style.left = "140px";

    isPlaying = false;
  }, 500);
}

#ball {
  filter: drop-shadow(0 5px 5px rgba(0,0,0,0.5));
}

#player {
  filter: drop-shadow(0 8px 8px rgba(0,0,0,0.6));
}

#keeper {
  filter: drop-shadow(0 6px 6px rgba(0,0,0,0.5));
}
