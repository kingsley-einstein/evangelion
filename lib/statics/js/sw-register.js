window.addEventListener('load', (event) => {
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/js/sw.js', {scope: '/'})
                               .then((value) => {
                                   
                                   console.log(value);
                                   console.log('Service worker registered');
                               })
                               .catch((rejected) => console.log(rejected));
    }
});