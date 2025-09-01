fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.eleconomista.es/rss/&api_key=TU_API_KEY')
  .then(res => res.json())
  .then(data => { /* mostrar noticias */ })
