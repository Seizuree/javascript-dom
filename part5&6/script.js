// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>Brian Giovanni</em>'

const title = document.querySelector('#judul')
title.style.color = 'lightblue'
title.style.backgroundColor = 'salmon'

const judul = document.getElementsByTagName('h1')[0]
const a = document.querySelector('section#a a')

const p2 = document.querySelector('.p2')

const sectionA = document.getElementById('a')
const newP = document.createElement('p')
const newText = document.createTextNode('Paragraf baru')
newP.appendChild(newText)
sectionA.appendChild(newP)

const newList = document.createElement('li')
const newListText = document.createTextNode('New List')
newList.appendChild(newListText)
const list = document.querySelector('section#b ul')
const secondList = list.querySelector('li:nth-child(2)')
list.insertBefore(newList, secondList)

const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru')
h2Baru.appendChild(teksH2Baru)
sectionB.replaceChild(h2Baru, p4)