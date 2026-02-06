* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background: url("https://i.ibb.co/kg6xWd8R/jpg.jpg") center/cover no-repeat fixed;
  color: #fff;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: -1;
}

.page {
  display: none;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}

.page.active {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  max-width: 220px;
  margin-bottom: 30px;
}

.logo.small {
  max-width: 160px;
}

.btn-main {
  padding: 14px 40px;
  font-size: 18px;
  background: orange;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn-glow {
  background: rgba(255,165,0,0.15);
  border: 1px solid orange;
  color: orange;
  padding: 14px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(255,165,0,0.6);
}

.btn-glow.small {
  padding: 8px 14px;
  font-size: 14px;
}

.btn-glow.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.result-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
}

.odds-container {
  max-width: 400px;
  width: 100%;
}

.odds-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 6px;
  border-radius: 8px;
  border: none;
}

.output {
  margin-top: 15px;
  max-width: 400px;
  width: 100%;
}

.output input {
  width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  border-radius: 8px;
  border: none;
}

.bottom-buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .logo {
    max-width: 180px;
  }
}

