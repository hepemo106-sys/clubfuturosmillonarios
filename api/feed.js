import Parser from 'rss-parser';

export default async function handler(req, res) {
  const parser = new Parser();
  const feeds = [
    "https://www.eleconomista.es/rss/",
    "https://cincodias.elpais.com/rss/",
    "https://www.expansion.com/rss/"
  ];

  let allItems = [];

  for (let feedUrl of feeds) {
    try {
      const feed = await parser.parseURL(feedUrl);
      allItems = allItems.concat(feed.items.slice(0,5)); // 5 noticias por feed
    } catch (err) {
      console.error(`Error cargando ${feedUrl}:`, err);
    }
  }

  res.status(200).json(allItems);
}
