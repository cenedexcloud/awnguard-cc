# AwnGuard Project Todos

## Current Task: Replace same-assets URLs with local images

### Files updated:
- [x] src/lib/blogData.ts - all blog images replaced
- [x] src/app/page.tsx - testimonials now use initials, team image and solar slider fixed
- [x] src/app/gallery/page.tsx - all gallery images replaced with local files
- [x] src/app/testimonials/page.tsx - store images replaced
- [x] src/app/services/pressure-washing/page.tsx - service images replaced
- [x] src/app/services/solar-panel-cleaning/commercial/page.tsx - before/after images fixed
- [x] src/app/services/solar-panel-cleaning/residential/page.tsx - solar image fixed
- [x] src/app/blog/[slug]/page.tsx - logo image fixed
- [x] src/app/cleaning-services/page.tsx - logo image fixed
- [x] src/app/about-us/page.tsx - banner and icons fixed
- [x] src/app/urban-oasis/page.tsx - images replaced
- [x] src/app/industries/page.tsx - industry images replaced
- [x] src/components/Footer.tsx - logo fixed

## Changes Made:
- Replaced all ext.same-assets.com URLs with local images from /public folder
- Used gallery images for awning cleaning, manufacture, and solar panel categories
- Replaced testimonial avatars with initials-based design (colored circles with initials)
- Used inline SVGs for about-us page icons
- All images now load from local files

## Completed
- All same-assets URL replacements done
- [x] Add customer review submission section to testimonials page
- [x] Create ReviewSubmissionForm component with star rating
- [x] Update send-notification API to handle review form type
- [x] Reviews are emailed to dawn@awnguard.com using existing Resend integration

## Notes
- Customer reviews are submitted via the testimonials page (/testimonials)
- Reviews include: name, email, company (optional), role (optional), star rating, and review text
- Emails are sent with a nicely formatted HTML template showing the star rating and review
- SMS notifications also sent for new reviews
