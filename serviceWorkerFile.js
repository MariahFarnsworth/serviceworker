// files to cache offline
var urls = ['.', 'main.css', 'index.html', 'offline.html', 'script.js', 'data1.json','data2.json', 'data3.json', 'data4.json'] ;
 
// cache file listed above
this.addEventListener('install', function(event) {
    console.log("Service Worker Installed");
    event.waitUntil(caches.open('myAppCache').then(function(cache){
        return cache.addAll(urls);
    }));
});
 
// Cache first
// go to network for any files not in cache
this.addEventListener('fetch', function(event){
    var url = event.request.url;
    event.respondWith(caches.match(event.request)
        .then(function(response){
            if(response) {
                // request is in the cache
                console.log('Cache Hit ' + url);
                return response;
            } else {
                // not in cache, go get it
                console.log('Fetch ' + url);
                return fetch(event.request); 
            }
        })
    );
});