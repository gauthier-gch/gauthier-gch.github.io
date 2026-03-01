self.addEventListener("install", () => {
  console.log("Service Worker installé");
});

self.addEventListener("fetch", event => {
  // Si c'est une requête vers Google Script, on ne fait rien (on laisse le navigateur gérer)
  if (event.request.url.includes("script.google.com")) {
    return;
  }
  // Pour le reste du site, on fait le relais classique
  event.respondWith(fetch(event.request));
});
