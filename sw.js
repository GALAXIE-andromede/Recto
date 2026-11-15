var CACHE = 'recto-v2';
var CORE = [
  './',
  './index.html',
  './app.html',
  './manifest.webmanifest',
  './chimie_data.js',
  './geographie_data.js',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return c.addAll(CORE);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // Stratégie "Cache d'abord, puis réseau" pour tous les fichiers du site
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then(function(cached){
        var net = fetch(req).then(function(res){
          if (res && res.ok) {
            var cp = res.clone();
            caches.open(CACHE).then(function(c){ c.put(req, cp); });
          }
          return res;
        }).catch(function(){
          return cached;
        });
        return cached || net;
      })
    );
    return;
  }

  // Polices Google
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(
      caches.open(CACHE).then(function(c){
        return c.match(req).then(function(r){
          var net = fetch(req).then(function(res){ c.put(req, res.clone()); return res; }).catch(function(){ return r; });
          return r || net;
        });
      })
    );
  }
});
