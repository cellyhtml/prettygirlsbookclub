const fs = require('fs');
const https = require('https');

const books = [
  "The Score Elle Kennedy",
  "Off the Ice Bal Khabra"
];

function fetchCover(query) {
  return new Promise((resolve) => {
    https.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=1`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.items && parsed.items[0].volumeInfo.imageLinks) {
            let img = parsed.items[0].volumeInfo.imageLinks.thumbnail;
            img = img.replace('http:', 'https:').replace('&edge=curl', '');
            resolve({ query, img });
          } else {
            resolve({ query, img: null });
          }
        } catch (e) {
          resolve({ query, img: null });
        }
      });
    }).on('error', () => resolve({ query, img: null }));
  });
}

async function run() {
  const results = {};
  for (const b of books) {
    const res = await fetchCover(b);
    results[b] = res.img;
    await new Promise(r => setTimeout(r, 200));
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
