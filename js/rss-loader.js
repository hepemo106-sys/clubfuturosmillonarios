fetch('noticias.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('rss-container');
    data.forEach(noticia => {
      const article = document.createElement('article');
      article.className = 'mb-6 border p-3';
      article.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <p>${noticia.resumen}</p>
        <a href="${noticia.link}" target="_blank">Leer más</a>
      `;
      container.appendChild(article);
    });
  });

