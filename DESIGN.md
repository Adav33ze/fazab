---
name: "FAZAB International Limited"
description: "Integrated project delivery expressed as an architect's light table."
colors:
  vellum: "#e8e3d8"
  vellum-deep: "#d9d3c5"
  paper: "#f3efe6"
  graphite: "#171815"
  graphite-muted: "#55574f"
  registration-blue: "#2454d6"
  registration-blue-deep: "#173fac"
  blueprint-white: "#f8f5ec"
  survey-orange: "#d85e32"
  hairline: "rgb(23 24 21 / 22%)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.1rem, 9vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  small: "2px"
  medium: "4px"
spacing:
  gutter-mobile: "1.25rem"
  gutter-tablet: "2rem"
  gutter-desktop: "4rem"
  section-mobile: "5rem"
  section-desktop: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.survey-orange}"
    textColor: "{colors.graphite}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.5rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3rem"
---

# Design System: FAZAB International Limited

## Overview

**Creative North Star: "The Architect's Light Table"**

FAZAB's visual system makes integrated delivery tangible. Vellum fields, graphite type, registration marks, drawing layers, and precise hairlines suggest a working surface where architecture, technical evidence, construction, and handover are aligned before work moves forward.

The experience is calm, exact, and materially grounded. Building-scale condensed type supplies confidence; generous space and disciplined crops keep that scale from becoming loud. The system rejects interchangeable dark-luxury styling and generic construction marketing in favor of a world specific to coordinated practice.

**Key Characteristics:**

- Architectural rather than corporate
- Editorial scale with technical precision
- Sparse registration blue and decisive survey orange
- Square, ruled, and layered instead of soft or decorative
- Honest separation between verified work and illustrative studies

## Colors

The palette pairs warm drawing-paper neutrals with near-black graphite, then uses two calibrated marks: blue for technical alignment and orange for decisions.

### Primary

- **Registration Blue:** Marks active stages, coordinates, focus, and technical labels. Its rarity makes it evidence, not decoration.

### Secondary

- **Survey Orange:** Reserved for enquiry actions, progress signals, and the final conversion surface.

### Neutral

- **Vellum:** The main page ground and drawing-grid surface.
- **Deep Vellum:** Secondary tracks and quiet tonal separation.
- **Paper:** A brighter material layer for controlled contrast.
- **Graphite:** Primary text, dark narrative fields, outlines, and footer ground.
- **Muted Graphite:** Secondary copy only where AA contrast is maintained.

**The Two Marks Rule.** Blue explains alignment; orange asks for action. Never use both as general decoration.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallback)

**Body Font:** Hanken Grotesk (with system-ui and sans-serif fallback)

**Character:** The display face reads like an architectural title block at building scale. The body face stays neutral, open, and highly legible beside it.

### Hierarchy

- **Display** (500, up to 6rem, 0.86 line-height): Uppercase hero and major section statements.
- **Headline** (500, 2.75–4.5rem, 0.9–1 line-height): Route titles and sectional propositions.
- **Title** (500, 1.8rem, 1.05 line-height): Project and discipline names.
- **Body** (400, 1rem, 1.65 line-height): Explanatory copy, usually held below 70 characters per line.
- **Label** (650, 0.68rem, 0.14em tracking, uppercase): Phases, coordinates, captions, and metadata.

**The Scale With Silence Rule.** Large type earns attention through space and line breaks; do not add decorative effects, gradients, or excessive weight.

## Layout

Pages sit on a fluid 12-column grid within a 100rem maximum canvas. Gutters expand from 1.25rem on compact screens to 4rem on wide screens. Major sections use 5rem to 9rem of vertical space, with asymmetry created through column starts, overlap, and crop rather than arbitrary offsets.

The homepage deliberately alternates open vellum fields and a concentrated graphite scrollytelling field. At large breakpoints, the delivery diagram stays sticky while narrative stages pass beside it; on compact screens it resolves into a clear linear sequence. The first viewport pairs an off-center thesis with a narrow visual study and a blue datum terminating at the enquiry action.

## Elevation & Depth

The system is flat by default and uses no visible card shadows. Depth comes from material shifts, fine borders, translucent drawing layers, image crops, and the contrast between vellum and graphite fields.

**The Light-Table Rule.** Create depth through overlap and registration, never through floating rounded panels.

## Shapes

Square corners are the default for surfaces, buttons, images, and dialogs. One-pixel rules establish joins and coordinates; small radii remain compatibility tokens rather than a visual motif. Registration crosses may sit just outside image bounds to make alignment visible.

## Components

### Buttons

- **Shape:** Square with one-pixel borders and minimum heights of 3rem; decisive calls to action use 3.5rem.
- **Primary:** Survey-orange ground with graphite text; hover shifts to graphite with vellum text and a restrained upward translation.
- **Outline:** Transparent vellum ground with graphite border and text; hover fills graphite.
- **Focus:** A two-pixel registration-blue outline with a four-pixel offset.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Vellum, paper, graphite, or image; no ornamental card tinting.
- **Shadow Strategy:** None.
- **Border:** One-pixel graphite or hairline rule.

### Navigation

Desktop navigation uses compact technical labels and a bordered project CTA. The compact navigation becomes a full-field drawing-grid dialog, enters focus deliberately, traps keyboard focus, makes covered content inert, closes with Escape, and returns focus to its trigger.

### Delivery Layers

The signature scrollytelling component aligns four phase bars into one datum. Registration blue identifies completed/current alignment, survey orange records overall progress, and the adjacent copy explains what changes at each project stage. Reduced-motion users receive the settled states without animated translation.

### Visual Studies

Editorial image plates use square hairline frames, registration crosses, and technical captions. Every generated raster carries its prompt, and illustrative studies are explicitly distinguished from published FAZAB project evidence.

## Do's and Don'ts

### Do:

- **Do** make coordination visible through grids, rules, phase lines, and registration marks.
- **Do** use large condensed statements with generous breathing room.
- **Do** preserve WCAG AA contrast for every small label and paragraph.
- **Do** label illustrative imagery and keep verified project facts separate.

### Don't:

- **Don't** return to black-and-bronze generic luxury styling.
- **Don't** soften the system with pervasive rounding, shadows, glass effects, or pill-shaped controls.
- **Don't** use survey orange for low-contrast white body text.
- **Don't** add motion that does not explain entry, alignment, progress, or state.
