window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("active");
    document
      .querySelector(".logo a img")
      .setAttribute("src", "img/logoblue.png");
  } else {
    document.querySelector("header").classList.remove("active");
    document
      .querySelector(".logo a img")
      .setAttribute("src", "img/logowhite.png");
  }
});
