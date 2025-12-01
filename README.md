# Princeton GTC Website

Professional website for Princeton International General Trading Company W.L.L. - a leading Oil & Gas supplier in Kuwait.

## About

Princeton GTC is one of the leading suppliers & stockists for the complete range of Oil & Gas, Petrochemical, Power Generation, Renewable Energy, and EPC industries. This website showcases their products and services including Mechanical, Electrical, Instrumentation, and Valves divisions.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Email**: Resend
- **Language**: TypeScript

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Interactive product gallery with category filtering
- Contact form with email integration
- SEO optimized with meta tags, Open Graph, and JSON-LD
- Auto-generated sitemap and robots.txt
- PWA support

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, clients, distributors |
| About | `/about` | Company info, mission, values |
| Oil & Gas | `/oil-gas` | Services overview |
| Mechanical | `/oil-gas/mechanical` | Pipes, flanges, fittings |
| Electrical | `/oil-gas/electrical` | Cables, explosion-proof fittings |
| Instrumentation | `/oil-gas/instrumentation` | Tube fittings, fasteners |
| Valves | `/oil-gas/valves` | Industrial valves, strainers |
| Gallery | `/gallery` | Product image gallery |
| Contact | `/contact` | Contact form |
| Careers | `/careers` | Job opportunities |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key (for contact form emails)
RESEND_API_KEY=re_your_api_key_here
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## Configuration

### Update Domain

Before deploying, update the domain in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `app/robots.ts`

### Email Setup

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`
4. (Optional) Verify your domain for custom sender address

## Project Structure

```
├── app/
│   ├── components/     # Reusable components
│   ├── about/          # About page
│   ├── oil-gas/        # Oil & Gas pages
│   │   ├── mechanical/
│   │   ├── electrical/
│   │   ├── instrumentation/
│   │   └── valves/
│   ├── gallery/        # Gallery page
│   ├── contact/        # Contact page
│   ├── careers/        # Careers page
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── sitemap.ts      # Auto-generated sitemap
│   └── robots.ts       # Robots.txt config
├── public/
│   ├── images/         # Product & client images
│   ├── logo.png        # Company logo
│   └── manifest.json   # PWA manifest
└── next.config.ts      # Next.js configuration
```

## License

Private - All rights reserved.
