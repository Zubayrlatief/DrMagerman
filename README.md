# Dr. Magerman Website

A modern, trustworthy website for Dr. Magerman's medical practice in Cape Town, built with Vue.js.

## Features

- **3-Page Structure**: Home, About & Services, Contact
- **Modern Design**: Clean, professional medical-themed UI
- **Trustworthy UX**: Designed to instill confidence and bring in clients
- **Responsive**: Fully responsive design for all devices
- **Vue.js 3**: Built with Vue 3 Composition API
- **Vue Router**: Client-side routing

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── public/
│   └── images/
│       ├── doctor-portrait.jpg (add your doctor image here)
│       └── medical-care.jpg
├── index.html
├── package.json
└── vite.config.js
```

## Images Required

Place the following images in the `public/images/` directory:

- `doctor-portrait.jpg` - Professional portrait of Dr. Magerman (the one you provided)
- `medical-care.jpg` - Healthcare/medical care image

## Color Scheme

- Primary Blue: #2563eb
- Dark Blue: #1e40af
- Light Blue: #dbeafe
- Accent Green: #10b981

## Contact Information

- **Location**: 226 Thornton Road, Belthorn, Cape Town, 7784
- **Phone**: 021 696 4132
- **Email**: info@drmagerman.co.za

## Operating Hours

- Monday - Thursday: 09:00 – 12:45 | 15:00 – 17:45
- Friday: 09:00 – 12:30
- Saturday: 08:30 – 11:30 (1st and last Saturday of each month only)
- Sunday: Closed
- Public holidays: Closed (including when a 1st- or last-Saturday would fall on a holiday)

## Vercel Deployment

This project is ready for Vercel static hosting (Vite + Vue Router history mode).

### 1) Import project into Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### 2) Add environment variables in Vercel

- `VITE_SITE_URL=https://www.drmagerman.co.za`
- `VITE_GOOGLE_MAPS_EMBED_KEY=<your_key>` (optional; leave blank to use OpenStreetMap fallback)
- `SMTP_HOST=mail.drmagerman.co.za`
- `SMTP_PORT=465`
- `SMTP_USER=info@drmagerman.co.za`
- `SMTP_PASS=<mailbox_password>`
- `CONTACT_FROM=info@drmagerman.co.za`
- `CONTACT_TO=info@drmagerman.co.za`

### 3) Verify before deploy

```bash
npm run verify:predeploy
npm run build
```

### 4) Deploy

Push to your connected branch (for example `main`) and Vercel will deploy automatically.

Notes:
- `vercel.json` includes SPA fallback routing so deep links like `/about` and `/contact` do not 404.
- If your production domain changes, update:
  - `VITE_SITE_URL`
  - `public/robots.txt`
  - `public/sitemap.xml`

