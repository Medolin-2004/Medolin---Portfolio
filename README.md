# Medolin Christiyana J — Developer Portfolio

A React + Vite portfolio built for Software Developer / MERN Stack Developer /
Frontend Developer job applications. Plain CSS (no Tailwind), an EmailJS-powered
contact form, and content pulled from a single data file so it's easy to keep
accurate over time.

Your resume PDF is already included at `public/resume/Medolin_Christiyana_Resume.pdf`
and every "Download Resume" / "View Resume" button already points at it.

## 1. Install dependencies

```bash
npm install
```

## 2. Configure EmailJS (for the working contact form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages
straight to your inbox from the browser, with no backend required.

1. Create a free account at emailjs.com.
2. Under **Email Services**, connect your Gmail (or any provider) and copy
   the **Service ID**.
3. Under **Email Templates**, create a template with variables
   `{{from_name}}`, `{{from_email}}`, `{{subject}}` and `{{message}}` in the
   body, then copy the **Template ID**.
4. Under **Account → General**, copy your **Public Key**.
5. Copy `.env.example` to `.env` in the project root:

   ```bash
   cp .env.example .env
   ```

6. Fill in the three values in `.env`:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

`.env` is already listed in `.gitignore`, so these values won't be committed
to source control. If the keys are missing, the form shows the "Something
went wrong" error instead of crashing, so it fails safely rather than
silently.

## 3. Run locally

```bash
npm run dev
```

Visit the URL Vite prints (typically `http://localhost:5173`).

## 4. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 5. Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo at vercel.com and use the defaults (Vite is
auto-detected). Add the three `VITE_EMAILJS_*` variables under
**Project Settings → Environment Variables** before deploying.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --build
```

Or connect the repo at app.netlify.com with:

- Build command: `npm run build`
- Publish directory: `dist`

Add the three `VITE_EMAILJS_*` variables under **Site settings →
Environment variables** before deploying.

## Editing content

Almost all resume content (skills, experience, projects, education,
certifications, contact links) lives in one place:

```
src/data/resume.js
```

Update values there and every section that uses them updates automatically.

## Project structure

```
src/
├── components/        # Navbar, Hero, About, Skills, Experience,
│                       # Projects, Education, Certifications,
│                       # Resume, Contact, Toast, Footer (+ matching .css)
├── data/
│   └── resume.js       # single source of truth for all content
├── hooks/
│   └── useReveal.js    # scroll-reveal animation hook
├── App.jsx
├── main.jsx
└── index.css            # design tokens, resets, shared utility classes
public/
└── resume/
    └── Medolin_Christiyana_Resume.pdf
```
