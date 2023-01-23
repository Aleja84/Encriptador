const btn_copiar = document.querySelector(".copiar");
const btn_encriptar = document.querySelector(".encriptar");
const btn_desencriptar = document.querySelector(".desencriptar");
const texto_encriptar = document.querySelector(".input-texto");
const texto_encriptado = document.querySelector(".input-texto2");

btn_copiar.addEventListener("click", copiar);
btn_encriptar.addEventListener("click", encriptar);
btn_desencriptar.addEventListener("click", desencriptar);

function copiar(event) {
  event.preventDefault();
  let texto = document.getElementById("input-texto2");
  texto.select();
  texto.setSelectionRange(0, 9999);
  document.execCommand("copy");
}

function encriptar(event) {
  event.preventDefault();
  let texto = texto_encriptar.value;
  texto = texto.toLowerCase();
  console.log(texto);
  if (texto == "") {
    texto_encriptado.style.backgroundImage = "none ";
    texto_encriptado.value = "No ingresó el texto";
  } else {
    let result = texto
      .replace(/e/g, "enter")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai");
    texto_encriptado.style.backgroundImage = "none ";
    texto_encriptado.value = result;
  }
}

function desencriptar(event) {
  event.preventDefault();
  let texto = texto_encriptar.value;
  texto = texto.toLowerCase();
  console.log(texto);
  if (texto == "") {
    texto_encriptado.style.backgroundImage = "none ";
    texto_encriptado.value = "No ingresó el texto";
  } else {
    let result = texto
      .replace(/enter/g, "e")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a");
    texto_encriptado.style.backgroundImage = "none ";
    texto_encriptado.value = result;
  }
}
