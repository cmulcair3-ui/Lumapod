# LumaPod PWA — ready to deploy

This package is configured as an installable Progressive Web App.

## Important
Serve the folder from an **HTTPS** URL. Do not open `index.html` directly from a file manager; Chrome will not treat a local file as an installable PWA.

## Android / Chrome
1. Open the HTTPS LumaPod URL in Chrome.
2. Load the page once and wait for it to finish loading.
3. Chrome may show **Install LumaPod** on the page, or its ⋮ menu may show **Install app** / **Add to Home screen**.
4. Tap it and confirm installation.

The service worker caches the local app shell for offline use.

If Chrome does not offer installation, the most common causes are:
- the site is not HTTPS;
- the manifest or service worker is not being served from the same origin;
- an old service worker is cached; refresh/reopen the site after deployment;
- Chrome has not yet completed the first successful page load.

For a production release, use a stable HTTPS domain and keep all PWA files at the same site origin.
