const container = document.querySelector(".container");
const main = document.querySelector('.main')

container.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    main.src = e.target.src
    main.classList.add('fade')
    setTimeout(() => {
      main.classList.remove('fade')
    }, 500)
  }
});
