# RizieqNime

A modern Anime Discovery Application built with React and Vite. Browse, search, and view details of your favorite anime using the Kitsu API.

## Tech Stack

- **Core**: React 19, Vite
- **Routing**: React Router DOM v7
- **Styling**: Emotion (CSS-in-JS)
- **State/Data Fetching**: TanStack Query v5, Axios
- **UI Components**: Lucide React (Icons), Sonner (Toasts)
- **Validation**: Zod
- **Font**: Outfit (via Google Fonts)

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **pnpm** installed.

### Installation

```bash
pnpm install
```

### Development

To start the local development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Production Build

To build the application for production:

```bash
pnpm build
```

The artifacts will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
pnpm preview
# or
pnpm start
```

## Project Structure

This project follows a component-based feature structure:

```
src/
├── features/           # Feature-based logic and components
│   ├── home/           # Anime Listing feature
│   ├── anime-detail/   # Anime Detail feature
│   └── welcome/        # Landing page
├── shared/             # Shared utilities, components, and hooks
│   ├── api/            # API configuration
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom hooks
│   └── styles/         # Global styles and themes
├── Routes.jsx          # Route definitions
└── main.jsx            # Application Entry Point
```

## Deployment

The project is SPA-ready and includes configuration for seamless deployment on major platforms like Vercel and Netlify.
