# AwnGuard Cloud - Todos

## Current Focus
- Fix contact form submission error (400 error) - body size limit issue
- Test accessibility features across different browsers
- Consider additional ARIA labels for improved screen reader support

## Completed
- ✅ Update accessibility icon to universal accessibility symbol
  - ✅ Replaced with person with outstretched arms in circle
  - ✅ Updated both button icon and panel header icon
  - ✅ More recognizable and standard accessibility symbol
- ✅ Update accessibility widget color scheme to black
  - ✅ Button background changed from blue to black
  - ✅ All active states updated to black
  - ✅ Header text color updated to black
  - ✅ Focus indicators changed to black
  - ✅ Skip-to-main link background updated to black
- ✅ Add accessibility features widget to the website
  - ✅ Accessibility icon button on left side of screen
  - ✅ Text size adjustment (80%-150%)
  - ✅ High contrast mode options (Normal, High, Dark, Light)
  - ✅ Keyboard navigation helpers with "Skip to main content" link
  - ✅ Screen reader optimizations
  - ✅ Color adjustments
  - ✅ Link highlighting feature
  - ✅ Readable font options
  - ✅ Cursor size options (Normal, Large, Extra Large)
  - ✅ LocalStorage persistence for user preferences
  - ✅ Focus visible indicators for keyboard navigation
- ✅ Make the headshot on /about-us page movable and edges editable by mouse
  - Created DraggableResizableImage component with drag and resize functionality
  - Added corner and edge resize handles with visual feedback
  - Implemented mouse-based interaction for moving and resizing
  - Added helpful instructions overlay
- ✅ Updated popup system with professional UX best practices
  - Exit-intent popup: Only triggers on exit (mouse leaving viewport top), once per 14 days
  - Main popup: Triggers after 90 seconds AND 35% scroll depth, once per session
  - Removed aggressive FreeQuotePopup that was interrupting users
  - Implemented localStorage/sessionStorage for frequency control

## Future Enhancements
- A/B test different popup copy variations
- Analytics tracking for popup engagement metrics
