# Stratus Project Group

The official website for **Stratus Project Group**, a Sydney development consultancy, maintained by **Creative Bilal Agency**.

**Live website:** [stratusprojectgroup.com.au](https://stratusprojectgroup.com.au)

## About the site

Explore Stratus Project Group's residential development services, company information, FAQs, contact options, and privacy policy. The site includes an enquiry form connected to the Agency Platform and an AI chat assistant trained on the business's published services and FAQs.

### Services

- Feasibility studies
- Architectural design and documentation
- Development approvals (DA and CDC)
- Engineering and compliance coordination
- Construction and project management
- Building inspections

## Run locally

Requirements: [Bun](https://bun.sh/) and a current Node.js runtime.

```sh
bun install
bun run dev
```

Open the local address printed by the development server.

## Useful commands

```sh
bun run test       # Run the test suite
bun run lint       # Check code quality
bun run build      # Create a production build
bun run preview    # Preview the production build
```

## Project structure

- `src/routes/` — site pages and the public chat endpoint
- `src/components/` — shared page sections, contact form, and chat integration
- `src/assets/` — site imagery and brand assets
- `src/styles.css` — global styles and design tokens
- `src/agency.config.ts` — Agency Platform site configuration

## Agency Platform

The contact form, chat assistant, visitor tracking, analytics, and reviews are connected through the Creative Bilal Agency Platform. Keep private credentials out of source files and browser code.

## Site details

- **Business:** Stratus Project Group
- **Service area:** Sydney and surrounding NSW regions
- **Maintained by:** Creative Bilal Agency