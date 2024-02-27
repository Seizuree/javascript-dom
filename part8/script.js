const tbUbahWarna = document.getElementById("tbUbahWarna");
tbUbahWarna.onclick = () => {
  // document.body.style.backgroundColor = 'lightblue'
  // document.body.setAttribute('class', 'biru-muda')
  document.body.classList.toggle("biru-muda");
};

const tbRandomWarna = document.createElement("button");
const isiTbRandomWarna = document.createTextNode("Random Warna");
tbRandomWarna.appendChild(isiTbRandomWarna);
tbRandomWarna.setAttribute("type", "button");
tbUbahWarna.after(tbRandomWarna);

tbRandomWarna.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

document.body.addEventListener('mousemove', (e) => {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255)
  const yPos = Math.round((e.clientY / window.innerWidth) * 255)
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
})