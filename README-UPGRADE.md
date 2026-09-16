# LumaPod — Sensory + Profiles Upgrade

This upgrade adds:
- Full-screen animated environments for every Escape Pod using device-rendered Canvas visuals.
- Environment-specific motion: rain, waves, trees/fireflies, stars, embers, and drifting cloud layers.
- Environment-specific procedural sound profiles using Web Audio.
- A success celebration overlay for completed puzzles with glow, rings and particle burst.
- Local multi-profile support with individual names, ages and password protection using Web Crypto SHA-256 + random salt.
- Profile switching on shared devices.
- Device-only profile storage (not cloud authentication).
- `lumapod-v4` service-worker cache.

Important:
- No external GIF/image hosts are required for the environments; the scenes are rendered locally, which keeps them crisp on HD displays and works offline.
- Password protection is local-device protection, not a cloud account/security system.
- Never put an OpenAI API key in this public repository. Use a server-side proxy such as a Cloudflare Worker for real AI calls.
- Keep your existing icon files.
