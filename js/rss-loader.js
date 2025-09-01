const container = document.getElementById('rss-container');

fetch('/api/feed')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const article = document.createElement('article');
      article.className = 'mb-6 border border-green-600 p-4 rounded';
      article.innerHTML = `
        <h3 class='font-semibold text-green-200'>${item.title}</h3>
        <p class='text-green-100 mt-2'>${new Date(item.pubDate).toLocaleDateString()}</p>
        <a href='${item.link}' class='text-green-400 underline mt-2 inline-block' target='_blank'>Leer más</a>
      `;
      container.appendChild(article);
    });
  })
  .catch(err => console.error('Error cargando noticias:', err));
