# KETCHIKAN — Experimental Gateway Interface

An experimental, avant-garde web experience for the Ketchikan Gateway Borough. Not a brochure — an expedition.

## Concept

The site treats exploration of Alaska's First City like a deep-sea transmission: you cross through mist to descend through layers of rainforest, signal, memory, and atmosphere.

## Features

- **Mist gate intro** — Cinematic entry sequence before the experience loads
- **Canvas particle field** — Interactive mist particles that repel from your cursor
- **Custom cursor** — Blend-mode dot and ring (desktop)
- **Depth meter** — Scroll-driven descent indicator with rotating compass nav
- **Four horizontal depth layers** — Canopy, Surface, Tide Line, Abyss (scroll-snap)
- **Constellation map** — SVG node network for borough landmarks
- **Sonar wildlife scanner** — Rotating radar canvas with species blips
- **Memory stream** — Horizontal timeline with animated waveform
- **Climate engine** — Generative rain canvas per season
- **Terminal quiz** — CLI-style borough knowledge test
- **Scramble text** — Decoding animation on headings

## Run locally

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) and click to cross the mist.

## Stack

Vanilla HTML, CSS, and JavaScript — no build step, no dependencies.
