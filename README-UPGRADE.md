# LumaPod — The Next Level

Replace the existing `index.html`, `manifest.webmanifest` and `sw.js` in the GitHub repository with the files in this package.

Keep your existing:
- `icon-192.png`
- `icon-512.png`
- `icon.svg`

## Included
- Premium glass/ambient visual system
- Home redesign
- LumaSound generated audio: rain, ocean, forest, space, fire
- Immersive Escape Pods
- Focus timer
- Breathe sessions
- Quiet escape
- Check-in and personalisation
- Installable PWA UI
- Offline app-shell caching
- Playroom with:
  - Word Search
  - Sudoku
  - Numerical reasoning
  - Quick maths
  - Spatial reasoning
  - Mirror-image style challenge
  - Memory matching
  - Mini maze
  - Pattern tap
  - Anagrams
  - Odd-one-out
- “Distract Me” random puzzle launcher
- Progress tracking without streak pressure
- Optional local Luma companion UI
- Settings for theme, reduced motion, low stimulation and larger text

## Important AI note
The Luma companion currently uses a safe local fallback so it works on GitHub Pages without exposing an API key.

For real OpenAI responses, use a server-side endpoint (for example a Cloudflare Worker) and have the browser call `/api/luma`. Do **not** put an OpenAI API key into `index.html` or any public GitHub file.

## Deploy
1. Update the three files in GitHub.
2. GitHub Pages will redeploy from `main`.
3. Wait for the Pages deployment to finish.
4. Open the same GitHub Pages URL.
5. On Chrome, use **Install** or **Add to Home screen**.
