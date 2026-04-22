const CACHE_NAME = 'Operation-portal-dynamic-v1';

// Cache all essential shell files and the modular data files
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './data-electrical.js',
    './data-protection.js',

    // './data-docs.js',

    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    './apple-touch-icon.png',
    './icon-header.png'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.allSettled(
                urlsToCache.map(url => {
                    return fetch(url).then(response => {
                        if (response.ok) return cache.put(new Request(url), response);
                    });
                })
            );
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) return caches.delete(cache);
                })
            )
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    // BYPASS THE SERVICE WORKER FOR GOOGLE APPS SCRIPT URLS
    // Let the browser handle the API call directly so localStorage gets fresh data
    if (event.request.url.includes('script.google.com')) {
        event.respondWith(fetch(event.request));
        return;
    }

    // STALE-WHILE-REVALIDATE for the App Shell (Fastest possible load time)
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }
                return networkResponse;
            }).catch(() => { /* Ignore offline fetch errors */ });

            // Return cached response instantly if it exists, otherwise wait for the network
            return cachedResponse || fetchPromise;
        })
    );
});
