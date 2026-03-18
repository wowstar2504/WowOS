const CACHE_NAME = 'wowos-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/main.html',
    '/style.css',
    '/js/drag.js',
    '/js/time.js',
    '/js/start.js',
    '/js/login.js',
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});