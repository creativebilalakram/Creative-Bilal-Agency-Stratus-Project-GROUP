<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Stratus site structure (migrated from React/Vite SPA)
- All page components live in `src/components/pages/` and `src/components/`; `src/routes/*.tsx` files render them via TanStack Router — do not reintroduce `react-router-dom` or `react-helmet-async`. Why: the source SPA was ported to TanStack Start; router and SEO are handled by route files and `src/lib/seo-head.ts` (head()).
- The service routes are flat route files (`services_.architecture-design.tsx`) so `/services` does not become a layout wrapping the child. Why: `src/routes/services.tsx` renders a full page without `<Outlet/>`.
- `src/components/SEO.tsx` is an intentional no-op kept so ported pages compile unchanged.

## Agency Platform engine (starter kit v3.1.4)
- Contact forms render `src/components/StratusContactForm.tsx` (kit's `AgencyForm` + demo fallback); leads submit to the agency platform only — never store them locally, add a database, or a server route for the form. Why: the agency platform owns CRM/leads; the kit forbids local storage.
- The chat widget, tracking and analytics boot in `src/components/AgencyEngine.tsx` mounted in `__root.tsx`; config lives in `src/agency.config.ts`. The site's own AI route is `src/routes/api/public/chat.ts` (Lovable AI Gateway, server-side key only).

