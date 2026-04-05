## 1. Core Aesthetic: Organic-Tech

Every visual for Plantagoshi lives at the intersection of two worlds: **clean, precise IoT technology** and **warm, breathing nature**. Neither should overpower the other. A sensor reading should feel as alive as a leaf. A chart should feel as grounded as soil.

**Keywords:** breathable, playful, grounded, living, soft-modern.

---

## 2. Color System

Use these roles consistently across every visual output — UI, diagrams, illustrations, charts, icons.

|Role|Light Mode|Dark Mode|When to Use|
|---|---|---|---|
|**Primary Accent**|`#386641`|`#5A8B64`|Growth indicators, CTAs, healthy states, positive data|
|**Secondary Accent**|`#BC4749`|`#D16869`|Alerts, thirst state, low battery, angry/stressed plant|
|**Nature Gold**|`#E2B059`|`#F4D35E`|Sunlight data, warmth, happy/thriving plant states|
|**App Background**|`#F5F5F5`|`#121212`|Main canvas, slide backgrounds, diagram backgrounds|
|**Card / Module Surface**|`#FFFFFF`|`#1C1C1E`|Data containers, info panels, callout boxes|
|**Text Primary**|`#1A1A1A`|`#F0F0F0`|Body text, labels|
|**Text Secondary**|`#6B6B6B`|`#A0A0A0`|Captions, subtitles, metadata|

**Rule:** Never use raw black (`#000000`) or pure white (`#FFFFFF`) as a background. Always use the designated background tokens above for a softer, more organic feel.

---

## 3. Typography

|Layer|Style|Purpose|
|---|---|---|
|**Display / Titles**|Rounded, friendly — e.g. _Nunito_, _Fredoka One_, _Quicksand_|App name, section headers, emotion labels|
|**Body / Data**|Clean, legible — e.g. _DM Sans_, _Outfit_, _Jost_|Sensor readings, descriptions, chat messages|
|**Monospace / Numbers**|e.g. _JetBrains Mono_, _Fira Code_|Raw values (temperature, humidity %)|

**Avoid:** Arial, Roboto, Inter (too generic), serif fonts (too formal).

---

## 4. The Face & Emotion System

The plant's face is the **emotional core** of every visual. Use it consistently across the app screen, app UI, and any marketing/documentation visual.

### Emotion States

|State|Eyes|Color Signal|Trigger Condition|
|---|---|---|---|
|**Happy 😊**|Wide, rounded, subtle bounce|Nature Gold `#E2B059` glow|Moisture 60–80%, ideal conditions|
|**Thirsty 💧**|Droopy, half-closed|Blue-tinted UI wash|Moisture < 30%|
|**Angry 😠**|Sharp eyebrows, narrowed|Secondary Accent `#BC4749` glow/ring|High heat, direct sun overload|
|**Sleepy 😴**|Closed crescent eyes|Desaturated palette|Night mode / low light|
|**Content 😌**|Soft, relaxed|Primary Accent `#386641`|Stable, acceptable conditions|

### Face Design Rules

- The face on the **physical pot screen** and the **in-app avatar** must be **identical** in design language — same proportions, same expressions, same animation style.
- Use **SVG or vector-based** faces so they scale cleanly across pot screen, app, and any printed/digital material.
- Faces should use **rounded geometry only** — no sharp corners, no harsh lines, except for the "Angry" eyebrows (intentional contrast).

---

## 5. Shape & Layout Language

- **Corner Radius:** Prefer `24pt` / large rounding everywhere. Cards, buttons, chips, data modules — all rounded. This signals "friendly and organic."
- **Shadows:** Keep them soft and barely-there. `rgba(0,0,0,0.05)` at radius `10–14`. No hard drop shadows.
- **Spacing:** Generous. Let visuals breathe. Avoid cramped layouts — plants need space to grow, so should your UI.
- **Asymmetry is OK:** Slight diagonal flows, overlapping elements, or organic shapes (blobs, wave dividers) are encouraged to break the rigid grid.

---

## 6. Data Visualization Style

Each sensor type has a **dedicated visual metaphor** — use it consistently in every chart, diagram, or infographic:

|Sensor|Visual Metaphor|Notes|
|---|---|---|
|**Moisture**|Wave animation / water fill inside a rounded container|Animate level rising/falling|
|**Sunlight**|Glowing radial halo around the plant icon|Gold `#E2B059`, intensity = lux value|
|**Temperature**|Vertical capsule thermometer|Color shifts cool→warm with temp|
|**Overall Mood**|Central circular "Vibe Gauge"|Color = current emotion color|
|**Battery / Power**|Leaf-shaped battery icon|Drains from green to red|

**Chart rules:**

- Use **rounded bars** in bar charts, never sharp rectangles.
- Line charts should use **smooth curves** (cubic bezier), not jagged lines.
- Always label axes in friendly language ("Water Level" not "soil_moisture_pct").

---

## 7. Motion & Animation Principles

|Interaction|Animation|
|---|---|
|App load / screen enter|Soft fade + gentle upward drift (staggered)|
|Happy face|Subtle bounce loop (scale 1.0 → 1.05 → 1.0)|
|Thirsty face|Slow drooping eyelid animation|
|Angry face|Slight tremor / vibration pulse|
|Watering slider|Haptic-style heartbeat rhythm feedback|
|Data update|Number count-up animation, not instant swap|
|"Pet to Sync"|Ripple effect emanating from plant avatar|

**Rule:** Every animation should feel **slow and organic**, not snappy or mechanical. Use easing curves like `ease-in-out` or custom spring physics. Target durations of `400–800ms` for transitions.

---

## 8. Voice & Copy Style

All text in the Plantagoshi ecosystem — UI labels, notifications, tooltips, chat messages — should follow this tone:

- **Personality:** Playful, warm, slightly dramatic (it's a plant with feelings).
- **Perspective:** First-person from the plant's point of view.
- **Avoid:** Raw technical jargon as standalone copy.

|❌ Don't|✅ Do|
|---|---|
|"Soil moisture: 10%"|"My roots are feeling a bit crunchy. Can I get a drink?"|
|"Temperature alert: 38°C"|"Okay it is WAY too sunny over here. Maybe move me?"|
|"Battery low"|"I'm running out of energy… and drama."|

---

## 9. Iconography

- Use **outline-style icons** with **rounded line caps** — no sharp endpoints.
- Icon weight: `1.5–2pt` stroke, consistent across all icons.
- Icons should have a **slight organic quality** — leaf motifs, droplet shapes, sun rays — over generic system icons where possible.
- Recommended sets: _Phosphor Icons_ (rounded), _Tabler Icons_, or custom SVG for brand icons.

---

## 10. The "Magic Moments" Checklist

For any interactive visual or prototype, include at least one of these signature Plantagoshi moments:

- [ ] **Live Face Mirror** — a small window showing the pot's current screen state
- [ ] **Pet to Sync** — tapping the avatar triggers a physical response
- [ ] **Vibe Gauge** — the circular mood indicator changes color in real time
- [ ] **Heartbeat Haptics** — watering interactions pulse rhythmically
- [ ] **Emotion-colored UI wash** — the entire interface subtly shifts hue based on plant mood

---

This guide applies to: **app UI, web dashboards, diagrams, marketing visuals, demo prototypes, documentation graphics, and physical screen layouts.** When in doubt, ask: _does this feel alive?_