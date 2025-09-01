// Archivo: js/rss-loader.js
// Carga noticias en español desde RSS gratuitos y las muestra con efecto estilo terminal

const feeds = [
  "https://www.eleconomista.es/rss/",
  "https://cincodias.elpais.com/rss/",
  "https://www.expansion.com/rss/"
];

const container = document.getElementById('rss-container');

// Función para mostrar el texto como terminal
function typeWriterEffect(element, text, callback) {
  let i = 0;
  function type() {
    if(i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, Math.random() * 50 + 20);
    } else {
      element.innerHTML += '<br>';
      if(callback) callback();
    }
  }
  type();
}

feeds.forEach(feed => {
  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`)
    .then(res => res.json())
    .then(data => {
      data.items.slice(0,5).forEach(item => {
        const article = document.createElement('article');
        article.className = 'mb-6 border border-green-600 p-4 rounded';
        container.appendChild(article);

        typeWriterEffect(article, `TITULAR: ${item.title}`);
        typeWriterEffect(article, `FECHA: ${new Date(item.pubDate).toLocaleDateString()}`);
        typeWriterEffect(article, `ENLACE: <a href='${item.link}' class='text-green-400 underline' target='_blank'>Leer más</a>`);
      });
    })
    .catch(err => console.error('Error cargando RSS:', err));
});
