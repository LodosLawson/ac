var dosyaIcerik = "";

function dosyaAc() {
  var dosyaSec = document.getElementById("dosyaSec");
  var dosya = dosyaSec.files[0];
  var dosyaOkuyucu = new FileReader();
  dosyaOkuyucu.onload = function(e) {
    dosyaIcerik = e.target.result;
    document.getElementById("editor").value = dosyaIcerik;
  };
  dosyaOkuyucu.readAsText(dosya);
}

function dosyaKaydet() {
  var icerik = document.getElementById("editor").value;
  var dosya = new Blob([icerik], { type: "text/plain" });
  var url = URL.createObjectURL(dosya);
  var dosyaLink = document.createElement("a");
  dosyaLink.href = url;
  dosyaLink.download = "metin.txt";
  dosyaLink.click();
}
