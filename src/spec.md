# Specification

## Summary
**Goal:** Update the site header branding to use the newly uploaded Kleenora logo image.

**Planned changes:**
- Replace the header logo asset reference from `/assets/generated/kleenora-logo.dim_512x200.png` to the uploaded `navbar-1.png`.
- Ensure the header renders only the logo image (no additional text label) on both desktop and mobile.
- Verify the logo asset path is correctly bundled/served so it loads in production without a broken-image fallback.

**User-visible outcome:** The site header shows the new Kleenora logo image on desktop and mobile, with no extra header text next to it.
