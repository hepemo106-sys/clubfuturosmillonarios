document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");
  const details = document.getElementById("event-details");

  const eventos = [
    { fecha: "2025-09-05", titulo: "Reunión BCE", descripcion: "El Banco Central Europeo publica decisión de tipos de interés." },
    { fecha: "2025-09-12", titulo: "Informe empleo EEUU", descripcion: "Datos clave sobre empleo en EE.UU. con impacto en mercados." },
    { fecha: "2025-09-20", titulo: "IPC España", descripcion: "Publicación del índice de precios al consumo en España." },
  ];

  let html = "<ul>";
  eventos.forEach(e => {
    html += `<li><button class="event-btn" data-info="${e.descripcion}">${e.fecha} - ${e.titulo}</button></li>`;
  });
  html += "</ul>";
  calendar.innerHTML = html;

  document.querySelectorAll(".event-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      details.innerHTML = `<div class="card"><h3>${btn.textContent}</h3><p>${btn.dataset.info}</p></div>`;
    });
  });
});
