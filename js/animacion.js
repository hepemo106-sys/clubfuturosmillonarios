function escribirTexto(id, texto, velocidad = 100) {
  let i = 0;
  function escribir() {
    if (i < texto.length) {
      document.getElementById(id).innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }
  escribir();
}
