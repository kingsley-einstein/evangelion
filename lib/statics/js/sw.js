self.addEventListener('install', (event) => {
    if (self.caches) {
        event.waitUntil(
            caches.open('_evangelionCache')
                  .then((cache) => {
                      return cache.addAll(
                          [
                              '/',
                              '/js/modals.js',
                              '/css/desktop.css',
                              '/js/sw-register.js',
                              '/img/bible.png',
                              '/img/dove.png',
                              '/img/worship.jpg',
                              '/img/worship.png'
                          ]
                      );
                  })
                  .catch((rejected) => console.log(rejected))
        );
    }
});

self.addEventListener('fetch', (event) => {
    if(self.caches) {
        console.log(event)
        event.respondWith(
            caches.match(event.request)
                  .then((response) => {
                      return response || fetch(event.request).then((value) => {
                          return caches.open('_evangelionCache').then((cache) => {
                              cache.put(event.request, value.clone());
                              return value;
                          })
                          .catch((rejected) => console.log(rejected));
                      })
                      .catch((rejected) => console.log(rejected));
                  })
                  .catch((rejected) => console.log(rejected))
        );
    }
});