# Design System Specification: The High-Resolution Editorial

## 1. Overview & Creative North Star: "Precision Fluidity"
This design system is built upon the concept of **Precision Fluidity**. It rejects the rigid, boxy constraints of standard web templates in favor of an editorial experience that feels both technically exact and artistically free. Inspired by high-end print journalism and modern creative coding, the "North Star" is the pursuit of **Resolution**—not just in pixel density, but in clarity of thought and depth of execution.

We achieve this by balancing the "Hard" (technical sans-serifs, high-contrast monochrome, razor-sharp alignment) with the "Soft" (asymmetrical layouts, expansive white space, and tonal layering). The goal is to create a digital environment that feels curated, where every element has been placed with intentionality rather than snapped to a generic grid.

---

## 2. Colors: The High-Contrast Tonal Map
The palette is rooted in absolute contrast—Deep Black (`#000000`) and Pure White (`#FFFFFF`)—pierced by a singular, high-energy accent: **Volt Green** (`#D2FA64`).

### The "No-Line" Rule
To maintain a premium, bespoke feel, **1px solid borders are strictly prohibited for sectioning.** Structural boundaries must be defined through:
*   **Tonal Shifts:** Placing a `surface-container-low` section against a `surface` background.
*   **Negative Space:** Using large blocks of empty space (128px+) to imply separation.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of layers. Use the following tokens to create depth:
*   **Base:** `surface` (#131313) for the main canvas.
*   **In-set:** `surface-container-lowest` (#0e0e0e) for recessed areas like code blocks or secondary sidebars.
*   **Elevated:** `surface-container-high` (#2a2a2a) for interactive cards that need to "lift" off the page.

### Signature Textures & Glassmorphism
For floating navigation or modal overlays, use **Glassmorphism**: 
*   **Fill:** `surface` at 70% opacity.
*   **Effect:** `backdrop-filter: blur(20px)`.
*   **Accent:** Use a subtle gradient transition from `primary` (#ffffff) to `primary-container` (#caf15c) at a 45-degree angle for hero CTAs to add "soul" to the technical aesthetic.

---

## 3. Typography: The Editorial Voice
The system utilizes a high-contrast pairing that signals both authority and technical proficiency.

*   **The Sharp Serif (Newsreader/IvyPresto):** Used for `display` and `headline` scales. This provides the "Editorial" weight. It should be typeset with tight letter-spacing (-0.02em) to feel impactful and sharp.
*   **The Technical Sans (Inter/Neue Montreal):** Used for `title` and `body`. It represents "Resolution" and clarity. 
*   **The Utility Mono (Space Grotesk):** Used for `labels`. This adds a layer of technical precision, mimicking code or metadata.

**Hierarchy Strategy:** 
Headlines should be oversized (Display-LG) and often placed asymmetrically, overlapping background containers or images to break the "header-top, content-bottom" pattern.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "cheap" for this system. We define depth through light and material properties.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-highest` card inside a `surface-container-low` section. The slight shift in grey values creates a sophisticated, "quiet" lift.
*   **Ambient Shadows:** If a floating element (like a dropdown) requires a shadow, use: `box-shadow: 0 24px 48px rgba(0,0,0,0.4)`. The shadow must be large and diffused, never sharp.
*   **The "Ghost Border" Fallback:** For accessibility in form fields, use the `outline-variant` (#444937) at **15% opacity**. This creates a "suggestion" of a container rather than a hard cage.

---

## 5. Components: Minimalist & High-Impact

### Buttons
*   **Primary:** Solid `primary-container` (#caf15c) with `on-primary-container` (#546d00) text. Sharp corners (`radius-none`) or a very small `radius-sm` (0.125rem).
*   **Secondary:** Ghost style. No background, `outline-variant` ghost border (20% opacity), white text.
*   **Interaction:** On hover, primary buttons should shift to a pure `primary` (#FFFFFF) white, signaling a "maximum resolution" state.

### Cards & Lists
*   **Rule:** **No Divider Lines.** 
*   Separate list items using `title-md` for the label and `body-sm` for the description, with a 24px vertical gap. 
*   Use a `surface-container-low` background on hover to highlight the row.

### Input Fields
*   **Styling:** Only a bottom border using `outline` (#8f937d). When focused, the border transforms into the `primary-container` (#caf15c) accent and expands to 2px.
*   **Labels:** Use `label-md` in `spaceGrotesk` always in uppercase for a technical, blueprint-like feel.

### Signature Component: The "Resolution Marker"
A custom component for this system: A thin vertical line (2px width) using the `primary-container` color that tracks the user's scroll or sits to the left of the active `display-lg` headline to anchor the eye in an asymmetrical layout.

---

## 6. Do's and Don'ts

### Do
*   **Do use asymmetrical margins.** Allow a headline to start at 33% of the screen width while the body starts at 10%.
*   **Do use massive scale shifts.** Pair a `display-lg` headline with a `body-sm` caption immediately below it.
*   **Do embrace "The Void."** Use `background` (#131313) as a functional element to focus the user's attention.

### Don't
*   **Don't use 100% opaque borders.** They create "visual noise" and break the fluid feel.
*   **Don't center-align everything.** Center alignment is the enemy of editorial dynamism. Stick to left-aligned or intentionally offset grids.
*   **Don't use standard shadows.** Avoid the "Material Design" look; stick to tonal shifts or extremely soft, ambient blurs.
*   **Don't use rounded corners for everything.** Use `radius-none` or `radius-sm` to maintain a sharp, technical "Resolution." Use `radius-full` only for small utility chips.