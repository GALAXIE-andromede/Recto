const CACHE_NAME = 'recto-v2';
const SHELL_ASSETS = [
  './app.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Ne jamais mettre en cache les appels API dynamiques
  if (url.pathname.startsWith('/api/')) return;

  // Navigation & app.html : Network-First avec fallback hors-ligne
  if (req.mode === 'navigate' || url.pathname.endsWith('/app.html') || url.pathname === '/') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put('./app.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('./app.html').then((r) => r || caches.match(req)))
    );
    return;
  }

  // Fichiers de cours (*_data.js) et ressources statiques : Stale-While-Revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => null);

      return cached || networkFetch;
    })
  );
});
