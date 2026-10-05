# No Clue!? Webcomic Archive

Live site: <https://noclue.rook.works>

The official online archive for *No Clue!? The Webcomic*. The site keeps the comic's original desktop-era visual language while adapting the reader for modern screens.

The Characters page introduces the cast and links each profile to relevant strips.

The reader includes all 41 image files currently stored in the original-run archive. FIRST, BACK, NEXT, and NEWEST are functional; the comic image advances on click; the left and right arrow keys navigate; and every strip can be opened from the archive grid. The selected strip is retained in the page URL as `?comic=034`.

On a wide desktop viewport, the projection stage expands to 1280 pixels and the comic viewer displays strips at up to their native 1100-pixel width. It scales down fluidly on smaller screens.

## Run it

From this folder, start any static web server. For example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

The included stylesheet lets the page layout work offline. Google Fonts are used for the intended typography; offline fallbacks are included.

## Structure

- `index.html` — page markup using Tailwind utility classes
- `styles.css` — site stylesheet
- `input.css` and `tailwind.config.js` — editable Tailwind source and theme configuration
- `assets/comics/` — the original-run comic payload

No build step is required.
