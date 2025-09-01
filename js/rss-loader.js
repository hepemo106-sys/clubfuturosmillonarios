// Ejemplo con RSS2JSON para obtener feeds (gratuito para probar)
// Necesitarás registrar tu feed en rss2json.com o usar otro proveedor
const feeds = [
  "https://www.ft.com/?format=rss", // Financial Times
  "https://www.wsj.com/xml/rss/3_7014.xml", // Wall Street Journal
  "https://www.economist.com/finance-and-economics/rss.xml" // The Economist
];

const container = document.getElementById('rss-container');

feeds.forEach(feed => {
  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`)
    .then(res => res.json())
    .then(data => {
      data.items.slice(0,5).forEach(item => {
        const article = document.createElement('article');
        article.className = 'mb-6 border border-green-600 p-4 rounded';
        article.innerHTML = `<h3 class='font-semibold text-green-200'>${item.title}</h3>
                             <p class='text-green-100 mt-2'>${item.pubDate}</p>
                             <a href='${item.link}' class='text-green-400 underline mt-2 inline-block' target='_blank'>Leer más</a>`;
        container.appendChild(article);
      });
    })
    .catch(err => console.error('Error cargando RSS:', err));
});
