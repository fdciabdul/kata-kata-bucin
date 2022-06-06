function play() {
var audio = new Audio('https://storage.caliph71.xyz/audio/Dandelions.mp3');audio.play();}
function nonFt() {document.getElementById('foto').style.display = "none";} function showFt() {document.getElementById('foto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} function showDiv() {document.getElementById('Content').style.display = "block";}
  function trm() {document.getElementById('trm').style.margin = "0";}
  function whs() {document.getElementById('whs').style.margin = "12px 12px 12px 0";document.getElementById('trm').style.display = "none";}
  function iloveu() {if(u==text2.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}}
  function fotoKt() {document.getElementById('ftKm').style.margin = "0 110px 0 0";document.getElementById('ftAk').style.opacity = "1";document.getElementById('ftAk').style.margin = "0 0 0 60px";
  var e1 = document.getElementById('ftKm');e1.classList.add("degdeg");var e2 = document.getElementById('ftAk');e2.classList.add("degdeg");}
  
  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,100);
    }
    if(i==text.length){
    ketikk();}
  }
  function ketikk() {
    if(u<text2.length){
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;
      setTimeout(ketikk,200);
    }
    if(u==text2.length){
    trm();}
  }
  function siap() {
    if(o<text3.length){
      document.getElementById("text3").innerHTML += text3.charAt(o);
      o++;
      setTimeout(siap,80);
    }
    if(o==text3.length){
    document.getElementById('sp2').style.display = "none";document.getElementById('sp3').style.display = "block";
    duar();}
  }
  function duar() {
    if(a<text4.length){
      document.getElementById("text4").innerHTML += text4.charAt(a);
      a++;
      setTimeout(duar,200);
    }
    if(a==text4.length){
    fotoKt();}
    }
