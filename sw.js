// Cambia la versión cada vez que actualices los archivos — esto fuerza que la PWA instalada descargue la versión nueva
const CACHE = 'harvesttek-v6';
const FILES = ['./almacen.html', './manifest-almacen.json', './icon-192.svg', './icon-512.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Elimina todos los cachés viejos (incluyendo harvesttek-v2)
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Para el HTML principal: network-first → si hay red descarga fresco, si no usa caché
  // Esto asegura que los usuarios con la app instalada siempre vean la versión más nueva
  if (url.pathname.endsWith('almacen.html') || url.pathname === '/' || url.pathname.endsWith('/')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          // Actualiza el caché con la versión fresca
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match('./almacen.html'))
    );
    return;
  }
  // Para el resto (iconos, manifest): cache-first (no cambian seguido)
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./almacen.html')))
  );
});
