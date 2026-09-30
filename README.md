# No Clue! Tailwind demo

Live site: <https://noclue.rook.works>

A single-page, responsive reconstruction of the supplied No Clue! webcomic screenshot. It keeps the original desktop-era visual language while letting the layout reflow for smaller screens.

The Characters page reconstructs the cast from the surviving strips and script archive. It links every biographical claim back to relevant comics and explicitly separates confirmed facts, strong inferences, and unresolved archive questions.

The reader includes all 41 image files currently stored in the original-run archive. FIRST, BACK, NEXT, and NEWEST are functional; the comic image advances on click; the left and right arrow keys navigate; and every strip can be opened from the archive grid. The selected strip is retained in the page URL as `?comic=034`.

On a wide desktop viewport, the projection stage expands to 1280 pixels and the comic viewer displays strips at up to their native 1100-pixel width. It scales down fluidly on smaller screens.

## Run it

From this folder, start any static web server. For example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

The Tailwind stylesheet is precompiled, so the page layout works offline. Google Fonts are used for the intended typography; offline fallbacks are included.

## Structure

- `index.html` — page markup using Tailwind utility classes
- `styles.css` — precompiled Tailwind stylesheet used by the demo
- `input.css` and `tailwind.config.js` — editable Tailwind source and theme configuration
- `assets/comics/` — the original-run comic payload

No build step is required.
