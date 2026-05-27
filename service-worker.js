self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("excel-smr-cache").then(cache => {
      return cache.addAll([
        "/excel-smr/",
        "/excel-smr/index.html",
        "/excel-smr/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
