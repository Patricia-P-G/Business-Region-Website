# 🌍 Business Region DE-DK

**A responsive business networking website built with Vue 3, JavaScript and Tailwind CSS.**

Business Region DE-DK is a website redesign project aimed at making cross-border business connections between Denmark and Germany more accessible through a modern, user-friendly digital platform.

**[🌐 Live Website](https://business-region-de-dk.web.app/)**

## 📖 About the Project

This project was created during the second semester of the Multimedia Design programme at SEA – Syddansk Erhvervsakademi, Denmark. Our goal was to redesign the Business Region DE-DK website to improve its usability, responsiveness, accessibility and search engine visibility. The website allows visitors to explore business networks, learn about partner organizations, access media content and find information about membership opportunities.

We worked as a team of four, combining our skills in UX research, visual design, branding, content creation and frontend development.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | Vue 3, JavaScript |
| Routing | Vue Router |
| Styling | Tailwind CSS, CSS |
| Build Tool | Vite |
| Integrations | EmailJS |
| SEO | VueUse Head, Schema.org |
| Design | Figma |
| Version Control | Git, GitHub |

## ✨ Key Features

- **Responsive Design** — Layouts adapted for desktop, tablet and mobile devices.
- **Search & Sorting** — Search functionality and alphabetical sorting of business network entries.
- **Media Filtering** — Category-based filtering to help visitors explore media content.
- **Membership Application** — A multi-step membership form with an EmailJS integration.
- **Reusable Components** — A component-based Vue structure that makes the website easier to maintain and update.
- **Accessibility & SEO** — Semantic HTML, ARIA attributes, page metadata and structured data.

## 👩‍💻 My Role & Contributions

**Role: Primary Frontend Developer**

While this was a collaborative team project, I was responsible for the main frontend development of the website, turning the team's designs into a responsive and interactive Vue application.

My responsibilities included:

- Setting up the Vue 3 project and organizing its structure using Vue Router.
- Developing the website's pages and reusable Vue components.
- Translating Figma designs into responsive layouts using Tailwind CSS and custom CSS.
- Implementing interactive features such as search, sorting, filtering, navigation and forms.
- Integrating EmailJS for form submissions.
- Researching and implementing SEO improvements.
- Testing, debugging and refining the website across different screen sizes.

I handled the majority of the frontend implementation with occasional coding assistance from another team member.

## ♿ Accessibility, SEO & Testing

Accessibility and SEO were considered throughout development to make the website easier to use, navigate and discover.

### Accessibility

- Used semantic HTML to provide a clear page structure.
- Added ARIA attributes to improve the accessibility of interactive elements.
- Considered keyboard navigation and accessibility across different devices.

### SEO

- Added page-specific titles and meta descriptions.
- Implemented Schema.org structured data.
- Configured `sitemap.xml` and `robots.txt`.
- Used a logical heading structure across the website.

### Testing & Optimization

- Used Google Lighthouse to evaluate performance, accessibility, SEO and best practices.
- Tested layouts across different screen sizes to check responsiveness.
- Identified and addressed issues to improve usability and overall website quality.

## 📝 Known Limitations

As this was a semester project, a few features remain incomplete:

- **Language Switcher:** The interface includes language options, but switching between languages is not fully implemented.
- **Events Page:** The page is not currently available in the deployed version.

## 🚀 Getting Started

To run the project locally, make sure you have Node.js and npm installed.

**1. Clone the repository**

```bash
git clone https://github.com/Patricia-P-G/Business-Region-Website.git
cd Business-Region-Website
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

To use the EmailJS integration, create a `.env` file in the project root and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**4. Start the development server**

```bash
npm run dev
```

## 👥 Project Team

This project was developed by four Multimedia Design students, each contributing to different areas of the project.

| Team Member | Main Contributions |
|---|---|
| **Patricia Puienaru-Gundelfingen** | UX research, SEO research, primary frontend development and responsive implementation |
| Tetiana Tarasiuk | UX research, wireframes, Figma prototyping, project planning, business flyer, SEO research and report preparation |
| Mihaela Hioara | UX research, video production, project planning, Figma prototyping, style guide and coding assistance |
| Aneta Bolibruchová | UX research, wireframes, Figma prototyping, branding materials, logo animation and report design |
