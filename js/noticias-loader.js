document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("noticias-container");
  try {
    const res = await fetch("noticias.json");
    const data = await res.json();
    container.innerHTML = "";
    data.noticias.slice(0, 8).forEach(noticia => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <p>${noticia.descripcion}</p>
        <a href="${noticia.enlace}" target="_blank">Leer más</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<div class='card'>Error al cargar noticias</div>";
  }
});
