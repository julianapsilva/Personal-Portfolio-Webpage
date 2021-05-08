feather.replace()

const t = document.getElementById("text-welcome");
const text = document.getElementById("text-welcome").textContent;

let index = 0;

function writeText() {
  t.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 160);
