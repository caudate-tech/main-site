# Design System Strategy: The Architectural Authority

## 1. Overview & Creative North Star
The North Star for this design system is **"The Architectural Authority."** 

Unlike standard agency sites that rely on loud, flat colors and generic grids, this system treats the digital interface as a high-end physical space. We are moving away from "web-ready" templates toward an editorial, boutique consulting aesthetic. The experience must feel "built," not just "coded."

We break the template look through **Intentional Asymmetry** and **Tonal Depth**. By utilizing overlapping elements—where a headline might bleed over the edge of a container—and high-contrast typography scales, we convey a sense of bespoke craftsmanship. This design system communicates that the agency doesn't just follow marketing trends; it architects the foundations of its clients' success.

---

## 2. Colors: Tonal Depth & The No-Line Rule
The palette is rooted in deep navy stability and teal precision. To achieve a premium feel, color is used to define space rather than decorate it.

### The "No-Line" Rule
Explicitly prohibited: 1px solid borders for sectioning or containment. Traditional lines create visual "noise" that cheapens the experience. Instead, boundaries must be defined solely through:
*   **Background Shifts:** Use `surface-container-low` (#edf4ff) sections sitting against `surface` (#f7f9ff).
*   **Tonal Transitions:** Defining an area by moving from `surface-container` to `surface-container-high`.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine paper or frosted glass.
*   **Lowest Layer:** `surface-container-lowest` (#ffffff) for the primary content canvas.
*   **Middle Layer:** `surface-container` (#e2efff) for grouped modular sections.
*   **Highest Layer:** `surface-container-highest` (#cde5ff) for the most critical utility or conversion zones.

### The "Glass & Gradient" Rule
To escape the "flat" look, floating navigation and modal elements should utilize **Glassmorphism**.
*   **Value:** Use semi-transparent versions of `surface` with a 12px-20px `backdrop-blur`.
*   **Signature Textures:** For primary CTAs and Hero backgrounds, avoid flat fills. Use a subtle linear gradient from `primary` (#006a64) to `primary_container` (#16b2a8) at a 135-degree angle. This adds "soul" and a sense of movement toward the conversion goal.

---

## 3. Typography: The Editorial Voice
We utilize **Inter** across the entire scale to ensure maximum legibility and a modern, Swiss-inspired professional tone.

*   **Display Scales (Lg/Md/Sm):** These are the "Power" fonts. Use tight letter-spacing (-0.02em) and heavy weights to create an authoritative, headline-driven experience.
*   **Body Scales (Lg/Md/Sm):** Optimized for long-form consulting case studies. `body-lg` (1rem) is the workhorse, providing enough air to feel sophisticated.
*   **Label Scales:** Used sparingly for metadata and overlines. Always set in uppercase with increased letter-spacing (+0.05em) to differentiate from body text.

The hierarchy is intentionally steep. A `display-lg` headline next to a `body-md` description creates a "Large/Small" visual tension that is common in high-end editorial magazines.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop." We use layering to create "structure."

### The Layering Principle
Depth is achieved by stacking the surface-container tiers. For instance, place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#edf4ff) section. This creates a soft, natural lift that feels integrated into the architecture.

### Ambient Shadows
When an element must float (e.g., a primary CTA button or a floating nav), shadows must be:
*   **Extra-Diffused:** Blur values between 24px and 48px.
*   **Low-Opacity:** 4% to 8% opacity maximum.
*   **Tinted:** Use a 10% opacity version of `on-surface` (#001d32) rather than pure black to mimic natural, ambient light.

### The "Ghost Border" Fallback
If a border is legally or accessibility-required:
*   Use the `outline-variant` (#bbc9c7) at **15% opacity**.
*   Never use 100% opaque, high-contrast borders.

---

## 5. Components: Precision Modular Elements

### Buttons (Conversion Engines)
*   **Primary:** Linear gradient (`primary` to `primary_container`). `xl` roundedness (0.75rem). Subtle ambient shadow on hover.
*   **Secondary:** `surface-container-lowest` background with a `Ghost Border`. Text color is `primary`.
*   **Tertiary:** No background. Text color is `secondary`. Transition to a 5% opacity `secondary` background on hover.

### Cards & Lists
*   **The Divider Forfeit:** Forbid the use of divider lines. 
*   **Strategy:** Use vertical white space (32px, 48px, or 64px) from the spacing scale to separate list items. For cards, use background color shifts (e.g., `surface-container-low` cards on a `surface-container-lowest` background).

### Input Fields
*   Background: `surface-container-low`.
*   Border: None (use the No-Line rule), except for a 2px bottom-accent in `outline-variant` that transforms to `primary` on focus.
*   Error State: Text and accent shift to `error` (#ba1a1a).

### Additional Signature Components
*   **The Progress Track:** A ultra-thin 2px line using `primary_fixed_dim` that tracks scroll depth, reinforcing the "results-oriented" focus.
*   **The Conversion Bar:** A fixed-bottom or glassmorphic header element using `primary_container` with `on_primary_container` text, acting as a persistent CTA.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts where text blocks are offset from image blocks.
*   **Do** allow for generous white space (64px+) between modular sections to signify "Premium" quality.
*   **Do** use `tertiary` (#b02c2a) strictly for "Urgency" elements—limited offers or high-alert notifications.

### Don't
*   **Don't** use 1px solid black or dark grey borders. Ever.
*   **Don't** use standard "drop shadows" with high opacity. They create a "cheap" floating effect.
*   **Don't** crowd the interface. If a section feels full, add 24px of padding.
*   **Don't** use "Architects Daughter" or decorative fonts from the legacy brand; the new system is strictly Inter for a cleaner, modern agency polish.