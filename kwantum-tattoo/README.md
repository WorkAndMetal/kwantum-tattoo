# Kwantum Tattoo

A dark-themed, interactive single-page website for the **Kwantum Tattoo** studio.
Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Hero** — cinematic intro with staged animations, giant outline typography, ambient crimson glow.
- **Marquee** — infinite scrolling strip of studio disciplines.
- **Gallery** — filterable portfolio grid with animated layout transitions and a lightbox modal.
- **Appointment** — interactive 4-step booking wizard (style → size → date/time → details) with validation and animated progress. Mock-only, no backend.
- **Contact** — studio info cards and a stylized map placeholder.
- Fully responsive, dark ink aesthetic with film-grain noise overlay.

## Tech Stack

| Layer     | Choice                          |
| --------- | ------------------------------- |
| Framework | React 18 + TypeScript           |
| Build     | Vite 5                          |
| Styling   | Tailwind CSS 3 (custom theme)   |
| Animation | Framer Motion                   |
| Icons     | lucide-react                    |
| Utilities | clsx + tailwind-merge (`cn`)    |

## Project Structure

```
/src
├── /components
│   ├── /ui          Button, Input, Card (shadcn-style primitives)
│   ├── /layout      Header, Footer
│   ├── /sections    Hero, Gallery, Appointment, Contact
│   └── /shared      Reveal, SectionHeading, Marquee
├── /hooks           useScrollPosition
├── /lib             cn helper
├── /assets          Images / reference images (ref/)
├── /styles          globals.css (Tailwind + theme)
└── /app             App.tsx, main.tsx
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

## Notes

- Gallery pieces use gradient placeholders — drop real images into `src/assets` and swap the `gradient` fields for `<img>` sources.
- The booking wizard is a mock-up; wire the final step to an API to make it real.
