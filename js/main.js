window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("active");
    document
      .querySelector(".logo a img")
      .setAttribute(
        "src",
        "http://woorifuturelab.com/wp-content/uploads/2023/03/logo.png"
      );
  } else {
    document.querySelector("header").classList.remove("active");
    document
      .querySelector(".logo a img")
      .setAttribute(
        "src",
        "http://www.woorifis.com/resources/images/front/layout/logo.png"
      );
  }
});
