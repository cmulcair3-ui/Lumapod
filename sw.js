const CACHE_NAME='lumapod-v12';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon.svg','./assets/audio/lumapod-theme.mp3',
'./assets/pods/ocean.mp4','./assets/pods/forest.mp4','./assets/pods/rain.mp4','./assets/pods/space.mp4','./assets/pods/fire.mp4','./assets/pods/cloud.mp4'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r&&r.ok)caches.open(CACHE_NAME).then(cache=>cache.put(e.request,r.clone()));return r}).catch(()=>caches.match('./index.html'))))});
