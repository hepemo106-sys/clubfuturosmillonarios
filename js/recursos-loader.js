fetch('recursos.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('recursos-container');
    data.forEach(recurso => {
      const div = document.createElement('div');
      div.className = 'mb-6 border p-3';
      div.innerHTML = `
        <h3>${recurso.titulo}</h3>
        <p>${recurso.descripcion}</p>
        <a href="${recurso.link}" target="_blank">Descargar</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error cargando recursos:", err));
