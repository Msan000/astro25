// Un service worker mínimo para permitir la instalación de PWA.
// Se deja simple intencionadamente. Se pueden agregar estrategias de caché más adelante.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  // Omitir la espera para activar el nuevo service worker inmediatamente.
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando...');
  // Tomar el control de todos los clientes tan pronto como el service worker se active.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Por ahora no implementamos lógica de caché.
  // El navegador gestionará la obtención de recursos de la red como de costumbre.
  // Este listener es necesario para que la PWA sea instalable.
  event.respondWith(fetch(event.request));
});
