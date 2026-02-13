const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

/* YES Click */
yesBtn.addEventListener("click", () => {
  response.classList.remove("hidden");
  response.innerHTML =
    "YAYYY 🐝💛 My Bee said YES!! 🍯💍💖<br>Now you're stuck with me forever 😍";
});

/* NO Button Runs Away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
