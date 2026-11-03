# Stratus Project Group migration to Lovable

- [x] Inspect archive, write ledger (.lovable/migrate-external-project/ledger.json)
- [x] Copy source (components/pages/data/assets/public) into project
- [x] Port theme CSS (Tailwind v3 → v4 styles.css)
- [x] Create 13 TanStack routes + 404, route head() SEO, JSON-LD, fonts
- [x] Swap react-router-dom imports; neutralize Helmet SEO component
- [x] Install lottie-react, canvas-confetti
- [x] Verify: build, vitest, browser smoke of all routes

## Agency Platform wiring (Creative Bilal starter kit, Nov 2026)
- [x] Read kit instructions; fetch website ID (cbw_52e94e5a0119ff14fd42ecfb)
- [x] src/agency.config.ts with site key site_728cd80ff169ca1fc5eaeee6
- [x] Chat widget (AgencyEngine, hybrid AI route /api/public/chat via Lovable AI Gateway), desktop floating launcher
- [x] Tracking + visitor analytics + reviews fed to chat
- [x] /admin redirect route
- [x] Contact form swapped to kit AgencyForm (user approved later): same fields (name/phone/email/service/message), site styling, demo fallback; old GHL/VEX embed saved in memory for future reinstatement
- [x] Verify build/tests, publish, 5-line checklist
