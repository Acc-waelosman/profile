window.onload = function () {
  const wordsWrapper = document.querySelector(".cd-words-wrapper");
  if (!wordsWrapper) return;

  const words = wordsWrapper.querySelectorAll("b");
  let currentIndex = 0;

  setInterval(() => {
    words.forEach((word) => word.classList.remove("is-visible"));
    words[currentIndex].classList.add("is-visible");
    currentIndex = (currentIndex + 1) % words.length;
  }, 3000);
};
