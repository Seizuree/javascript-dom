// const close = document.querySelectorAll('.close')

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', (e) => {
//         // close[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

// const nama = document.querySelector('.nama')
// console.log(nama.previousElementSibling)

// const close = document.querySelectorAll(".close");
// close.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault()
//     e.stopPropagation()
//   });
// });

// const cards = document.querySelectorAll('.card')
// cards.forEach((card) => {
//   card.addEventListener('click', (e) => {
//     alert('ok')
//   })
// })

const container = document.querySelector('.container')
container.addEventListener('click', (e) => {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none'
    e.preventDefault()
  }
})