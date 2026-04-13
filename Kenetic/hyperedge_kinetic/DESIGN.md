# Design System Strategy: Kinetic Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Kinetic Editorial."** This isn't just a website; it’s a high-velocity digital magazine. We are moving away from the static, "boxed-in" feel of traditional corporate sites. Instead, we embrace the friction between high-fashion editorial layouts and futuristic digital interfaces.

By leveraging **intentional asymmetry**, we create a sense of forward momentum. Elements should feel like they are caught in a moment of transition—overlapping, breaking the container, and utilizing extreme scale to guide the eye. This system is designed to feel "alive," where every scroll reveals a new composition rather than a repetitive grid.

---

## 2. Colors
Our palette is rooted in deep obsidian tones, punctuated by clinical whites and high-voltage accents. This creates a high-contrast environment where content doesn't just sit on the page—it vibrates.

### The Palette
- **Background & Base:** `surface` (#121317) provides the dark void.
- **The Accents:** `primary_fixed` (#b3f730 - Neon Lime) and `secondary` (#d2bbff - Electric Lavender) are used for "high-energy" moments.
- **The Gradients:** Never use flat colors for large surfaces. Blend `secondary_container` into `surface` to create "light leaks" that mimic studio photography lighting.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. A marketing agency should feel seamless. 
- Transition between sections by shifting from `surface` to `surface_container_low`. 
- Use the **"Surface Hierarchy"** to nest content. A card should be `surface_container_highest` sitting on a `surface_container` section. The change in hex value is the border.

### The "Glass & Gradient" Rule
To achieve a premium, custom feel, floating elements (modals, navigation bars) must use **Glassmorphism**:
- **Fill:** `surface_variant` at 60% opacity.
- **Effect:** 20px - 40px Backdrop Blur.
- **Signature Texture:** Apply a linear gradient to CTAs using `primary` to `primary_fixed_dim`. This adds "soul" and depth that static hex codes cannot.

---

## 3. Typography
Typography is our primary visual tool. We use a "Size as Impact" philosophy.

- **Display Scale (`spaceGrotesk`):** Used for radical statements. `display-lg` (3.5rem) should be used with tight letter-spacing and occasionally "broken" across grid lines.
- **Body Scale (`inter`):** Used for utility. It provides a clean, neutral balance to the aggressive display type.
- **Hierarchy Logic:** If everything is loud, nothing is heard. Use `display-md` for headlines, but pair it with `label-sm` in all-caps with wide tracking for a "technical" metadata look. This creates a high-low aesthetic found in premium fashion branding.

---

## 4. Elevation & Depth
In this design system, depth is atmospheric, not structural.

- **The Layering Principle:** Stacking tiers (e.g., `surface-container-lowest` on `surface-container-low`) creates natural elevation. 
- **Ambient Shadows:** Shadows are forbidden unless an element is "flying." In those cases, use a 64px blur with 6% opacity, using a tint of `secondary` instead of black to simulate a glowing environment.
- **The "Ghost Border":** For interactive inputs, use `outline_variant` at 15% opacity. It should be felt, not seen.
- **Glowing Borders:** For featured cards, use a 1px gradient stroke (Primary to Transparent) to create a "edge-lit" effect, making the component look like a high-end piece of hardware.

---

## 5. Components

### Buttons
- **Primary:** `primary_fixed` background with `on_primary_fixed` text. Sharp corners (4px). On hover, transition to a "Glow" state using a box-shadow of the same color.
- **Tertiary:** No background. `primary` text. Hover state triggers a thick `primary` underline that animates from left to right.

### Input Fields
- **Styling:** Minimalist. Only a bottom border using `outline_variant` at 30%. 
- **Focus State:** Border becomes `primary` (Neon) with a subtle `primary` outer glow.

### Cards & Lists
- **The "No Divider" Rule:** Never use horizontal lines to separate list items. Use vertical rhythm (spacing scale) or a 2% shift in background color on hover to indicate row selection.
- **Asymmetric Cards:** Experiment with image placement that breaks the card boundary, overlapping the text to create 3D depth.

### Chips
- **Action Chips:** Use `secondary_container` with `on_secondary_container` text. High contrast, high visibility.

---

## 6. Do's and Don'ts

### Do:
- **Do** embrace whitespace. Let the "void" (`surface`) emphasize the vibrancy of the neon accents.
- **Do** use asymmetrical layouts. If a column is 4 units wide, make the next one 6 or 8.
- **Do** use "High-Energy" motion. Hover states should be snappy (200ms) but smooth (cubic-bezier).

### Don't:
- **Don't** use 100% opaque, high-contrast borders. It kills the "Kinetic" flow.
- **Don't** use standard shadows. If it looks like a generic UI kit, it’s a failure of the system.
- **Don't** over-round corners. Stick to the **4px - 8px scale** (`DEFAULT` to `lg`). This is a "modern/sharp" agency, not a "friendly/bubbly" SaaS.
- **Don't** center-align long blocks of text. Keep it left-aligned for an editorial, structured feel.