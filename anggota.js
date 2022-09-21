const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function anggota() {
  document.getElementById("btn");

  var setuju = confirm("kalo lu pencet setuju, masuk ke Baak");
  if (setuju) {
    
    var yakin = confirm("serius nih yakin");
    if (yakin) {
      window.location = "https://baak.gunadarma.ac.id/cariKelasBaru?_token=obTz8TN7yPFYNMHwrSoTho6IqL3zcwzNYVb3o8fn&tipeKelasBaru=Kelas&teks=2IA07";
    }
    else{
      window.location("Anggota.html");

    }
  } 
  else {
    window.location("Anggota.html");
  }
}