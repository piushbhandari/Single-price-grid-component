const ctaBtn = document.querySelector(".cards__cta");

ctaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let x = 0; x <= 5; x++) {
    window.open(
      "https://www.youtube.com/watch?v=z0O32YA4Ibs&ab_channel=ThatCostumedGuy"
    );
  }
});
