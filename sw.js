const CACHE_VERSION = 'v5';
const SHELL_CACHE = 'recto-shell-' + CACHE_VERSION;
const COURSES_CACHE = 'recto-courses-' + CACHE_VERSION;
const FONTS_CACHE = 'recto-fonts-' + CACHE_VERSION;

const SHELL_ASSETS = [
  './app.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) =>
      Promise.allSettled(SHELL_ASSETS.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const validCaches = new Set([SHELL_CACHE, COURSES_CACHE, FONTS_CACHE]);
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => !validCaches.has(k)).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  const msg = event.data;
  if (!msg || typeof msg !== 'object') return;
  if (msg.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (msg.type === 'CACHE_COURSE' && typeof msg.url === 'string') {
    caches.open(COURSES_CACHE).then((cache) => cache.add(msg.url)).catch(() => {});
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Polices Google Fonts : Cache-First pour rester lisible hors-ligne
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONTS_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((res) => {
            if (res && (res.ok || res.type === 'opaque')) {
              cache.put(req, res.clone());
            }
            return res;
          }).catch(() => cached || new Response('', { status: 504 }));
        })
      )
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Ne jamais mettre en cache les appels API dynamiques (Apify / MaishaPay)
  if (url.pathname.startsWith('/api/')) return;

  // Navigation & app.html : Network-First avec fallback hors-ligne sur app.html
  if (req.mode === 'navigate' || url.pathname.endsWith('/app.html') || url.pathname === '/') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put('./app.html', copy));
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then((r) => r || caches.match('./app.html')).then((r) =>
            r || new Response('<h1>Mode hors-ligne</h1><p>Ouvrez app.html en ligne une premiÃ¨re fois pour lâ€™enregistrer.</p>', {
              status: 503,
              headers: { 'Content-Type': 'text/html; charset=utf-8' }
            })
          )
        )
    );
    return;
  }

  // Fichiers de cours (*_data.js) : Stale-While-Revalidate dans le cache dÃ©diÃ© des cours
  if (/_data\.js$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(COURSES_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          const networkFetch = fetch(req)
            .then((res) => {
              if (res && res.ok) cache.put(req, res.clone());
              return res;
            })
            .catch(() => null);

          if (cached) return cached;
          return networkFetch.then((res) => res || new Response('', { status: 504, statusText: 'Hors-ligne' }));
        })
      )
    );
    return;
  }

  // Autres assets statiques (manifest, icÃ´nes, etc.) : Cache-First avec mise Ã  jour en arriÃ¨re-plan
  event.respondWith(
    caches.open(SHELL_CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const networkFetch = fetch(req)
          .then((res) => {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => null);

        if (cached) return cached;
        return networkFetch.then((res) => res || new Response('', { status: 504, statusText: 'Hors-ligne' }));
      })
    )
  );
});
