self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("food-assistance-cache").then((cache) => {
            return cache.addAll([
                "/home.html",
                "/index.html",
                "/contact.html",
                "/food_resources.html",
                "/community_support.html",
                "/style.css",
                "/B.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
