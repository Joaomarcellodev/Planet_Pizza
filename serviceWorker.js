const staticPlanetPizza =  "planet-pizza-pwa-v1"

const assets = [
    "/",
    "/index.html",
    "/item_details.html",
    "/confirm_order.html",
    "style.css",
    "app.js",
    "/assets/pizza_calabresa.jpg",
    "/assets/pizza_de_carne.jpg",
    "/assets/pizza_de_chocolate.png",
    "/assets/pizza_de_frango.jpg",
    "/assets/pizza_queijo.jpg",
    "/assets/pizza_portuguesa.webp",
    "/assets/Planeta_Pizzaria.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPlanetPizza).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch" , fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch (fetchEvent.request)
        })
    )
})