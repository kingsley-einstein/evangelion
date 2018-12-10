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
                              '/js/sw.js',
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
    if(self.caches && event.request.method === 'GET') {
        console.log(event)
        event.respondWith(
            caches.open('_evangelionCache')
                  .then((cache) => {
                      return cache.match(event.request)
                                  .then((response) => {
                                      event.waitUntil(
                                          fetch(event.request).then((network) => {
                                              cache.put(event.request, network.clone());
                                              return network;
                                          })
                                          .catch((rejected) => console.log(rejected))
                                      );
                                      return response;
                                  })
                                  .catch((rejected) => console.log(rejected));
                  })
                  .catch((rejected) => console.log(rejected))
        );
    }
});