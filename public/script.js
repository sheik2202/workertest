const greeting = document.getElementById("greeting");

function update() {
  greeting.textContent = "Welcome! It's " + new Date().toLocaleTimeString();
}

update();
setInterval(update, 500);
