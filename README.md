# UX-Portfolio

Static portfolio for Omar Benmoussa, UX Design Specialist. Plain HTML/CSS with a little JS, deployed on Vercel from GitHub.

## Adding your images and videos

Every media slot shows a labeled placeholder until a file with the matching name exists. To add media, drop the file into the listed path, commit, and push. No HTML edits needed. Use `.jpg` names exactly as listed (export PNGs as JPG, or rename the path in the HTML).

| File | Used on |
|---|---|
| `assets/images/about/headshot.jpg` | Home portrait |
| `assets/images/og-image.jpg` | Social share image, 1200×630 |
| `assets/images/covers/cs-cp.jpg` | Cover for Customer Service Configuration |
| `assets/images/covers/enhancing-b2b-interactions.jpg` | Cover for Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/covers/cs-for-rabobank.jpg` | Cover for CS for Rabobank |
| `assets/images/covers/field-service.jpg` | Cover for Pega Field Service |
| `assets/images/covers/voice-ai-and-smart-decisioning.jpg` | Cover for Voice AI and smart decisioning |
| `assets/images/covers/presentations.jpg` | Cover for Presentations |
| `assets/images/cs-cp/01-categories.jpg` | Customer Service Configuration |
| `assets/images/cs-cp/02-earlier-implementation.jpg` | Customer Service Configuration |
| `assets/images/cs-cp/03-final-control-panel.jpg` | Customer Service Configuration |
| `assets/images/cs-cp/04-final-design.jpg` | Customer Service Configuration |
| `assets/images/cs-cp/05-final-design.jpg` | Customer Service Configuration |
| `assets/videos/cs-cp/video-01-config-prototype.mp4` | Customer Service Configuration (video) |
| `assets/images/enhancing-b2b-interactions/01-solution.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/02-solution.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/03-solution.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/04-solution.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/05-outcome.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/06-outcome.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/07-outcome.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/08-outcome.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/enhancing-b2b-interactions/09-outcome.jpg` | Enhancing B2B Interactions in Pega Customer Service |
| `assets/images/cs-for-rabobank/01-interaction-workspace.jpg` | CS for Rabobank |
| `assets/images/cs-for-rabobank/02-screen.jpg` | CS for Rabobank |
| `assets/images/cs-for-rabobank/03-screen.jpg` | CS for Rabobank |
| `assets/images/cs-for-rabobank/04-screen.jpg` | CS for Rabobank |
| `assets/images/cs-for-rabobank/05-screen.jpg` | CS for Rabobank |
| `assets/videos/field-service/video-01-dispatcher-portal.mp4` | Pega Field Service (video) |
| `assets/videos/field-service/video-02-mobile-forrester.mp4` | Pega Field Service (video) |
| `assets/videos/voice-ai-and-smart-decisioning/video-01-next-best-action.mp4` | Voice AI and smart decisioning (video) |
| `assets/videos/voice-ai-and-smart-decisioning/video-02-form-autofill.mp4` | Voice AI and smart decisioning (video) |
| `assets/videos/presentations/video-01-customer-advisory-board.mp4` | Presentations (video) |
| `assets/videos/presentations/video-02-pega-call.mp4` | Presentations (video) |
| `assets/videos/presentations/video-03-my-pega.mp4` | Presentations (video) |

### Videos
Keep MP4 files under about 50 MB each (GitHub blocks files over 100 MB). For long videos, upload to YouTube (unlisted) or Vimeo instead. Then, in the page's HTML, replace that video's `<div class="media video" ...>...</div>` block with:

```html
<div class="media video" style="aspect-ratio:16/9">
  <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="Video title" loading="lazy" allowfullscreen style="width:100%;height:100%;border:0"></iframe>
</div>
```

## Things to update later
- **Domain**: replace `https://ux-portfolio.vercel.app` in all `.html` files, `sitemap.xml`, and `robots.txt` once your final domain is set.
- **Tagline**: search for `[Tagline placeholder]` in `index.html`.

## Local preview
Run `npx serve .` in this folder, then open the address it prints.
