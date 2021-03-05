const CACHE_NAME = "appV1";
const urlsToCache = [
    '/static/js/2.8da4c6e9.chunk.js',
    '/static/js/main.daf550fd.chunk.js',
    '/static/js/runtime-main.1aecea91.js',
    '/static/css/main.4326b77b.chunk.css',
    'manifest.json',
    'asset-manifest.json',
    '/index.html',
    'images/logo.png',
    'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
    '/',
]

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    )
});

const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true
};

self.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request, options)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    } else {
                        return fetch(event.request)
                            .then(response => {
                                if (!response || response.status !== 200 || response.type !== 'basic') {
                                    return response;
                                }
                                var responseToCache = response.clone();
                                caches.open(CACHE_NAME).then((cache) => {
                                    cache.put(event.request, responseToCache)
                                })
                                console.log(response)
                                return response;
                            })
                            .catch(err => console.log(err))
                    }
                })
                .catch(err => console.log(err))
        )
    }
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});