// Alkebulan Service Worker — offline-first for Africans on limited data.
// Strategy: cache everything on first visit. Serve from cache instantly.
// Update in background. AI features need internet but all data/info works offline.

const CACHE = "alkebulan-v1";

// Pages and assets to pre-cache on install
const PRECACHE = [
  "/",
  "/build",
  "/map",
  "/path",
  "/dashboard",
  "/procurement",
  "/feed",
  "/network",
  "/assistant",
];

// Install: pre-cache key pages
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: stale-while-revalidate for pages/assets, network-only for AI API calls
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // AI API calls: always use network (can't cache streaming responses)
  if (url.pathname.startsWith("/api/")) {
    return; // let browser handle normally
  }

  // Static assets (_next/static): cache-first, they're immutable
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // Pages and other resources: stale-while-revalidate
  // Serve cached version instantly, update cache in background
  event.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(request).then((cached) => {
        const networkFetch = fetch(request).then((response) => {
          if (response.ok) {
            cache.put(request, response.clone());
          }
          return response;
        }).catch(() => cached); // offline: return cached if network fails

        // Return cached immediately if available, otherwise wait for network
        return cached || networkFetch;
      })
    )
  );
});
