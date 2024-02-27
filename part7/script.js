function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue'
}
function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue'
}
const p2 = document.querySelector('.p2')
p2.onclick = ubahWarnaP2

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', () => {
    const ul = document.querySelector('section#b ul')
    const liBaru = document.createElement('li')
    const teksLi = document.createTextNode('item baru')
    liBaru.appendChild(teksLi)
    ul.appendChild(liBaru)
})
const p3 = document.querySelector('.p3')
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue'
// }
// p3.onclick = function () {
//     p3.style.color = 'red'
// }

const p1 = document.querySelector('.p1')
p1.addEventListener('click', () => {
    p1.style.backgroundColor = 'lightblue'
})
p1.addEventListener('dblclick', () => {
    p1.style.color = 'red'
})

p3.addEventListener('mouseenter', () => {
    p3.style.backgroundColor = 'lightblue'
})
p3.addEventListener('mouseleave', () => {
    p3.style.backgroundColor = 'white'
})