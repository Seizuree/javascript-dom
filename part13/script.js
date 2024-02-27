const container = document.querySelector(".container");
const main = document.querySelector(".main");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    main.src = e.target.src;
    main.classList.add("fade");
    setTimeout(() => {
      main.classList.remove("fade");
    }, 500);

    thumbs.forEach((thumb) => {
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
