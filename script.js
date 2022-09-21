const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function myFunction() {
  document.getElementById("btn");

  var setuju = confirm("Notion Untuk Melihat jadwal matkul, Link gmeet dan lainnya");
  if (setuju) {
    window.location = "https://www.notion.so/invite/dab4a7f0e5ec0f42e0420573b7ae19f499a5f4a0";
  } else {
    window.location("index.html");
  }
}