# Mo'PLK Events Co. - Web Development Project

## Student Information
- **Name:** Trevor Kabe
- **Student Number:** ST10503290

---

## Project Overview
This website is a responsive, multi-page informational site built as part of a web development project. It introduces the Mo'PLK Events Co. organisation, highlights catering services and event types, and helps visitors navigate key pages.

---

## Website Goals and Objectives
- Present a clean and easy-to-read site structure for visitors.
- Communicate the purpose of the organisation and available resources.
- Offer clear navigation between pages such as Home, About, Contact, Enquiry, Policies, and Events.
- Support future content growth and improvements.

---

## Key Features and Functionality
- Multi-page HTML site using semantic structure.
- Navigation links for fast access to key pages.
- Organised content sections with headings, text, and imagery.
- A dedicated contact page and catering enquiry page with form validation.
- Privacy/policy page outlining costs, validity, and cancellation terms.
- Event details page for past or upcoming activities.
- Single external CSS stylesheet (`css/styles.css`) shared by every page.
- Responsive design supporting desktop, tablet, and mobile screen sizes.
- Client-side JavaScript form validation with inline error messages.
- AJAX-style form submission on the contact form (no page reload).
- Instant catering cost estimate and date-availability check on the enquiry form.

---

## Part 1 - Building the Foundation

Part 1 focuses on building the foundational website structure and content:

- Created the main page (`index.html`) with an overview and navigation.
- Added an About page (`About.html`) describing the organisation.
- Added a Contact page (`contact.html`) for getting in touch.
- Added a Policies page (`policies.html`) for terms and privacy information.
- Added an Events page (`Previousevents.html`) to show past or planned events.
- Included images in the `Images/` folder to support page content.

---

## Part 2 - CSS Styling and Responsive Design

Part 2 focuses on styling the website and making it responsive:

- Created an external stylesheet and linked it to all HTML pages.
- Established base styles: font family, font size, colour scheme, and CSS reset.
- Applied typography styles using `font-family`, `font-size`, `font-weight`, `line-height`, and `letter-spacing`.
- Built layout structure using CSS Flexbox (navigation) and CSS Grid (events section and footer).
- Applied visual styles including `background-color`, `border`, `box-shadow`, and `color`.
- Used pseudo-classes `:hover`, `:focus`, and `:active` on links, buttons, and icons.
- Used CSS variables (`:root`) for consistent colours, fonts, and spacing across the site.
- Implemented responsive design with media queries at two breakpoints:
  - Tablet: `max-width: 900px`
  - Mobile: `max-width: 600px`
- Used relative units (`rem`, `%`, `fr`) throughout for scalable sizing.

---

## Part 3 - Enhancing Functionality and SEO

Part 3 focuses on JavaScript functionality, forms, and search engine optimisation:

- **Stylesheet consolidation:** merged five separate, near-duplicate CSS files (`about.css`, `contact.css`, `policies.css`, `previousevents.css`, `styles.css`) into a single shared `css/styles.css`, properly taking advantage of CSS's cascading nature as required by the Part 2 rubric. Fixed two bugs found in the process: an inconsistent navbar logo size across pages, and a class-name collision where `.event-card` was defined twice with conflicting styles (renamed the Previous Events version to `.past-event-card`).
- **Enquiry form (`enquiry.html`):** new page allowing visitors to request a catering quote. Collects event type, guest count, preferred date, and contact details.
- **Contact form (`contact.html`):** added a required "type of message" field (General Enquiry, Compliment, Complaint, Partnership, Other) as required by the brief. Replaced the original "confidential information" checkbox with an optional newsletter opt-in.
- **HTML5 form validation:** `required`, `type="email"`, `type="tel"` with `pattern`, `minlength`, `min`/`max`, and `type="date"` attributes used across both forms.
- **JavaScript validation (`js/form-validation.js`):** validates all fields on blur and live while typing, with field-specific inline error messages. Submission is blocked until all fields pass.
- **Dynamic response on the enquiry form:** after validation, JavaScript calculates an estimated cost (guests × rate for the selected event type) and checks the requested date against a list of already-booked dates, displaying the result instantly via DOM manipulation — no page reload.
- **AJAX submission on the contact form:** uses the Fetch API to submit form data asynchronously, with a success/error message shown inline.

---

## Sitemap

- `index.html` - Home page
- `About.html` - About the organisation
- `contact.html` - Contact information
- `enquiry.html` - Catering quote request form
- `policies.html` - Policies and terms
- `Previousevents.html` - Past events
- `css/styles.css` - Single external stylesheet (linked to all pages)
- `js/form-validation.js` - Shared form validation and submission logic
- `Images/` - Folder containing all site images

![Sitemap](https://github.com/user-attachments/assets/fb3e4953-e101-4e18-841b-42e78c7e2b07)
![alt text](Images/Tablet.jpg)
![alt text](Images/phone.png)

---

## Changelog

| Date | Description |
|------|-------------|
| 2026-04-14 | Created README with project overview, goals, features, part details, sitemap, and references |
| 2026-05-25 | Part 2: Created external stylesheet `style.css` and linked it to all HTML pages |
| 2026-05-25 | Part 2: Added base styles — font family, colour scheme, CSS reset on `body` and `*` |
| 2026-05-25 | Part 2: Applied typography styles - `font-family`, `font-size` in `rem`, `line-height`, `letter-spacing` on headings |
| 2026-05-26 | Part 2: Built navigation layout using CSS Flexbox |
| 2026-05-26 | Part 2: Built events grid and footer layout using CSS Grid |
| 2026-05-26 | Part 2: Added visual styles - `background-color`, `border`, `box-shadow` on cards, buttons, and footer |
| 2026-05-26| Part 2: Added `:hover`, `:focus`, and `:active` pseudo-classes to all interactive elements |
| 2026-05-26| Part 2: Added CSS variables in `:root` for colours, fonts, spacing, and transitions |
| 2026-05-27 | Part 2: Added responsive media queries for tablet (900px) and mobile (600px) breakpoints |
| 2026-05-28 | Part 2: Replaced all `px` font sizes with relative `rem` units |
| 2026-05-28 | Part 2: Updated README with Part 2 section, changelog entries, and corrected references |
| 2026-06-15 | Part 3 (Part 2 feedback): Consolidated `about.css`, `contact.css`, `policies.css`, `previousevents.css`, and `styles.css` into a single shared `css/styles.css` to properly apply the cascading nature of CSS |
| 2026-06-15 | Part 3 (Part 2 feedback): Fixed inconsistent navbar logo size across pages by introducing a `--nav-logo-width` variable |
| 2026-06-15 | Part 3 (Part 2 feedback): Fixed a class-name collision between the home page's `.event-card` and the Previous Events page's card — renamed the latter to `.past-event-card` |
| 2026-06-15 | Part 3: Created `enquiry.html` with event type, guest count, date, and contact fields |
| 2026-06-15 | Part 3: Added a required "type of message" field to `contact.html`, replacing the confidential-information checkbox with an optional newsletter opt-in |
| 2026-06-15 | Part 3: Created `js/form-validation.js` with field-level validation, inline error messages, and live re-validation on input |
| 2026-06-15 | Part 3: Implemented AJAX submission (Fetch API) on the contact form |
| 2026-06-15 | Part 3: Implemented dynamic cost estimate and date-availability check on the enquiry form using DOM manipulation |
| 2026-06-15 | Part 3: Added "Enquiry" link to the navigation and footer on every page |

---

## References

Bunnypants Graphic and Web Design Studio, 2025. *Cost to develop a website in South Africa: the complete guide*. [online] Available at: <https://www.bunnypants.co.za/website-development-cost-complete-guide-2025/> [Accessed 13 April 2026].

Depositphotos, 2026. *Photo picture web icon in flat style — vector*. [electronic print] Available at: <https://depositphotos.com/vector/photo-picture-web-icon-in-flat-style-89250312.html> [Accessed 16 April 2026].

Flux Academy, 2025. *Figma tutorial for beginners (13-min crash course)*. [video online] Available at: <https://www.youtube.com/watch?v=jQ1sfKIl50E> [Accessed 19 April 2026].

Font Awesome, 2024. *Font Awesome free icons*. [online] Available at: <https://fontawesome.com> [Accessed 28 May 2026].

Formspree, 2024. *Formspree: form backend for static sites*. [online] Available at: <https://formspree.io> [Accessed 15 June 2026].

Google Fonts, 2024. *Lato*. [online] Available at: <https://fonts.google.com/specimen/Lato> [Accessed 27 May 2026].

Google Fonts, 2024. *Playfair Display*. [online] Available at: <https://fonts.google.com/specimen/Playfair+Display> [Accessed 28 May 2026].

Lyyti, 2025. *Event marketing KPIs: metrics you need to track*. [online] Available at: <https://www.lyyti.com/en/blog/event-marketing-kpis-metrics-you-need-to-track> [Accessed 13 April 2026].

Mozilla Developer Network, 2024. *CSS grid layout*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout> [Accessed 26 May 2026].

Mozilla Developer Network, 2024. *Flexbox*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox> [Accessed 26 May 2026].

Mozilla Developer Network, 2024. *Responsive design*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design> [Accessed 27 May 2026].

Mozilla Developer Network, 2024. *Using CSS custom properties (variables)*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties> [Accessed 27 May 2026].

Mozilla Developer Network, 2024. *Using the Fetch API*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch> [Accessed 15 June 2026].

Mozilla Developer Network, 2024. *Client-side form validation*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation> [Accessed 15 June 2026].

Slickplan, 2023. *What is a sitemap? let's break it down simply*. [video online] Available at: <https://www.youtube.com/watch?v=GjEIuy9s4is> [Accessed 16 April 2026].
