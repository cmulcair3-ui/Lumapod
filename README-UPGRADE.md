# LumaPod v12 — Immersive Personal Experience

This release prioritises the user's first instinct:
- Home is now a simple four-way hub: Calm / Play / Escape / Luma.
- Personal profile is shown immediately and the last-used Pod is remembered.
- Gentle LumaPod theme music is persistent by default after the first user gesture (browser autoplay rules require a gesture before audible playback).
- The user can turn all sound off from the persistent sound control.
- Theme audio is separate from environment audio, so “sound off” actually stops everything.
- Escape Pods can use real-world live footage from Wikimedia Commons via stable file redirects, with local HD fallbacks available offline.
- A single Gaze control remains the immersive switch; it hides the controls.
- A Live toggle is available for connected real-footage playback.
- Media credits are exposed from the Pod.
- Service worker cache bumped to v12 and includes the local theme/fallback media.

Real-footage references selected:
- Ocean: Water waves in Herzliya beach (1,920×1,080, CC BY-SA 4.0).
- Forest: Trees in the wind (1,920×1,080, CC BY-SA 4.0).
- Rain: Rainfall captured (1,920×1,080, licensing stated on Commons source page).
- Fire: Fire burning (1,920×1,080, CC BY-SA 4.0).
- Space: Star trails (1,280×720, CC BY 4.0).
- Cloud: Clouds (time lapse) (1,920×1,080, CC BY 3.0).

Source pages were checked on 16 September 2026. The bundled package keeps local fallback media because direct remote downloads are not available in the build environment.
