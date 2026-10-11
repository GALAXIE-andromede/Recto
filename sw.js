var CACHE = 'recto-v1';
var CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-180.png'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(CORE); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // Page principale : on affiche tout de suite la version en mémoire, puis on la met à jour en arrière-plan.
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('index.html').then(function(cached){
      var net = fetch(req).then(function(res){
        if (res && res.ok) { var cp = res.clone(); caches.open(CACHE).then(function(c){ c.put('index.html', cp); }); }
        return res;
      }).catch(function(){ return cached; });
      return cached || net;
    }));
    return;
  }

  // Fichiers du site (icônes, manifeste) : mémoire d'abord.
  if (url.origin === self.location.origin) {
    e.respondWith(caches.match(req).then(function(r){
      return r || fetch(req).then(function(res){
        if (res && res.ok) { var cp = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, cp); }); }
        return res;
      });
    }));
    return;
  }

  // Polices Google : on les garde pour fonctionner sans connexion.
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(CACHE).then(function(c){
      return c.match(req).then(function(r){
        var net = fetch(req).then(function(res){ c.put(req, res.clone()); return res; }).catch(function(){ return r; });
        return r || net;
      });
    }));
  }
});
