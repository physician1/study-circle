# Website Proposal: Study Circle

Student: [Add your name]
Course: [Add course name]
Instructor: [Add instructor name]
Date: [Add submission date]

## Project overview
I propose a four-page static website for Study Circle, a fictional campus study club. The site will introduce the club, explain its expectations, show a weekly session schedule, and provide a session interest form. Its purpose is to help students find a study routine and learn how to participate.

## Target audience
The intended audience is college students who want structured study time and peer support. Visitors may use phones, tablets, or desktop computers, so the design will adapt to different screen sizes.

## Goals
- Explain the club’s purpose and shared agreements.
- Present session details in an easy-to-compare table.
- Let visitors practice completing an interest form with clear validation feedback.
- Provide consistent navigation and accessible, readable content.

## Page plan and navigation
1. Home (index.html): introduction, benefits, and links to sessions and joining.
2. About (about.html): purpose, audience, and shared agreements.
3. Sessions (sessions.html): sample weekly schedule with session, day, time, location, and format columns.
4. Join (join.html): name, email, session, study goal, and agreement fields.

Every page will link to all four pages through the same navigation bar. The current page will be identified visually and with aria-current.

## Design and implementation
The site will use semantic HTML5 elements such as header, nav, main, section, article, aside, and footer. A single external stylesheet will define a navy, white, and lime color scheme, readable system fonts, consistent spacing, and responsive Grid and Flexbox layouts. A media query will stack columns on narrow screens. The schedule will scroll within its own container when needed.

JavaScript in an external file will listen for the form’s submit event and validate the entries before allowing a success state. It will reject empty or whitespace-only text, invalid email addresses, missing session selections, goals outside the allowed length, and an unchecked agreement. Errors will appear beside their fields, the first invalid field will receive focus, and a live status region will announce feedback. User input will never be inserted as HTML.

## Accessibility
The site will include a skip link, logical headings, descriptive page titles, visible keyboard focus, explicit form labels, error associations, a table caption, and scoped table headings. Navigation will remain available without JavaScript. HTML form constraints will provide basic fallback validation.

## Scope and limitations
All club details and schedule entries are fictional. The site will require no framework, database, account, or installation. The form is a demonstration: JavaScript will prevent actual transmission even after valid entries. A real service would require a receiving endpoint and server-side validation. Form controls intentionally omit name attributes so the fallback page reload does not serialize personal entries into a URL.

## Work plan
1. Plan page content and navigation.
2. Build semantic HTML and the schedule table.
3. Apply shared responsive CSS.
4. Add form validation and accessible feedback.
5. Check links, HTML structure, mobile layout, and invalid/valid form behavior.

## Evaluation and deliverables
Deliverables will include four HTML files, styles.css, script.js, this proposal, and a README explaining use and testing. Evaluation will cover navigation, all required assignment elements, readable mobile layouts, keyboard access, and form validation. Before submission, all four HTML files should also be checked with the W3C Nu HTML Checker at https://validator.w3.org/nu/ and any instructor-specific requirements applied.

## Content and assets
Text will be written for this fictional project. The design will use system fonts and a simple inline SVG favicon, with no third-party images, libraries, or external font dependencies.
