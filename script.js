document.addEventListener("DOMContentLoaded", function () {
  const wordsWrapper = document.querySelector(".cd-words-wrapper");
  if (!wordsWrapper) return;

  const words = wordsWrapper.querySelectorAll("b");
  let currentIndex = 0;

  setInterval(() => {
    words[currentIndex].classList.remove("is-visible");
    currentIndex = (currentIndex + 1) % words.length;
    words[currentIndex].classList.add("is-visible");
  }, 3000);
});
