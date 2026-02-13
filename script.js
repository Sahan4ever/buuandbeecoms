const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yay! 💖 I can't wait for our date 😍";
  message.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
