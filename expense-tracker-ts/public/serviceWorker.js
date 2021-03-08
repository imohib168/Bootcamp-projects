const CACHE_NAME = "appV1";
const urlsToCache = [
    '/',
    '/index.html',
    'asset-manifest.json',
    'images/logo.png',
    'manifest.json',
    'firebase-messaging-sw.js',
    // 'static/js/bundle.js',
    // 'static/js/vendors~main.chunk.js',
    // 'static/js/main.chunk.js',
    'static/media/cover-min.f6a21fa1.jpg',
];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache');
                return cache.addAll(urlsToCache);
            })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response;
            }).catch(err => console.log('Error', err))
    )
})