self.addEventListener("fetch", event => {
  if (event.request.url.includes("script.google.com")) {
    return;
  }
});
self.addEventListener("install", () => {
  console.log("Service Worker installé");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
