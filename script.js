let dakika = document.getElementById("dakika");
let saniye = document.getElementById("saniye");

let secilenDk = document.getElementById("secilen-dk");
let secilenSn = document.getElementById("secilen-sn");

let baslat = document.getElementById("baslat");
let sıfırla = document.getElementById("sıfırla");

secilenDk.addEventListener("change", () => {
    dakika.textContent = secilenDk.value < 10 ? "0" + secilenDk.value : secilenDk.value;
})

secilenSn.addEventListener("change", () => {
    saniye.textContent = secilenSn.value < 10 ? "0" + secilenSn.value : secilenSn.value;
})


let dur = false;

baslat.addEventListener("click", startTimer);

sıfırla.addEventListener("click", () => {
  dur = true;
  dakika.textContent = "00";
  saniye.textContent = "00";
  secilenDk.value = "00";
  secilenSn.value = "00";
});

function startTimer() {
  let dk = dakika.textContent;
  let sn = saniye.textContent;

  const interval = setInterval(() => {
    sn--;
    sn = sn < 10 ? "0" + sn : sn;
    if (sn == "0-1") {
      dk--;
      sn = 59;
    }
    if ((dk == 00 && sn == 00) || (dk == 0 && sn == 0)) {
      clearInterval(interval);
      window.alert("Süre doldu");
      secilenDk.value = "00";
      secilenSn.value = "00";
    }
    if (dur) {
      clearInterval(interval);
      return;
    }

    dakika.textContent = dk;
    saniye.textContent = sn;
  }, 1000);
}