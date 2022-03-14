const display = document.querySelector("input");
const iconeCopy = document.querySelector("span");

function G() {
  iconeCopy.style.display = "block";
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let senha = "";
  for (let i = 0; i <= 30; i++) {
    let a = Math.floor(Math.random() * char.length);
    senha += char.substring(a, a + 1);
  }
  display.value = senha;
}

function copy() {
  display.select();
  document.execCommand("copy");
}
