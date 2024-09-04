self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('site-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles/style.css',
                '/scripts/main.js',
                '/images/logo.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
