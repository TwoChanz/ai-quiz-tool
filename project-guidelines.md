1. Branch & Environment Setup
bash
Copy
# one-time
git clone https://github.com/TwoChanz/ai-quiz-tool.git
cd ai-quiz-tool
pnpm install         # repo is pnpm-locked
pnpm dev             # http://localhost:3000
Branch model

bash
Copy
main         ← auto-deployed to Vercel
└─ develop   ← integration branch
   ├─ feat/quiz-logic
   ├─ feat/landing-ui
   └─ fix/a11y-pass
PRs into develop, squash & merge → when stable, PR → main.

2. High-Level Roadmap
Phase	Target date	Deliverables
P0 Kick-off	now	Notion board, roles, this guideline pinned
P1 v0 Code-gen	+1 day	First drafts of AIToolQuiz.tsx, LandingPage.tsx committed by v0 sync
P2 Replit Hardening	+3 days	Type-safe, ESLint/Prettier clean, unit tests (Jest/RTL)
P3 Integration	+5 days	Quiz flows inside landing page, data in components.json stays valid
P4 A11y & Perf	+6 days	axe-core 0 critical, Lighthouse ≥90
P5 Beta Deploy	+7 days	Public Vercel link, stakeholder sign-off
P6 Metrics Hook	+9 days	Plausible events: startQuiz, finishQuiz, affiliateClick
P7 v1.0 Tag	+10 days	Git tag v1.0.0, Tweet/Substack announcement

3. Definition of Done (per ticket)
Specs fulfilled + visual match Figma/v0 preview.

Pass lint / test / a11y / type-check.

Storybook (or /sandbox) snapshot updated if UI.

PR includes gif / screenshot + checklist.

Merged to develop and appears at staging Vercel URL.

4. Prompt Template for v0 Iterations
Generate a <ComponentName> for a Next 14 app using shadcn/ui.
Design: primary #0F472A, Inter font, mobile-first.
Functionality: … (bullet)
Accessibility: keyboard nav, ARIA labels.
Output: full TSX in ``` fences, no external CDNs.
Now generate complete code.

Keep ≤400 words; follow-ups should highlight only deltas (“Add progress bar”, “Change CTA copy”).

5. Coding Rules
Aspect	Guideline
Language	TypeScript strict
Imports	Absolute from @/ alias (config exists)
Styling	Tailwind + shadcn only
State	React hooks; elevate to zustand only if >2-level prop drilling
File naming	PascalCase.tsx components, useCamel.ts hooks
Tests	__tests__/Component.test.tsx using RTL + Vitest/Jest
Colors	theme.colors.primary = '#0F472A' in tailwind.config.ts
Commit msg	Conventional commits (feat:, fix:, chore:…)

6. Checklist Before Pushing to main
 pnpm typecheck → 0 errors

 pnpm test → ≥90 % coverage

 pnpm lint → 0 errors

 pnpm run format → no diff

 Lighthouse /mobile/ PWA, Perf, A11y ≥ 90

 Preview deploy on Vercel-staging green

 Release notes updated in CHANGELOG.md

7. Post-Launch KPIs
Metric	Success gate
Quiz completion	≥ 65 % of starters
Email opt-ins	≥ 40 % of starters
Affiliate CTR	≥ 25 % of results viewers
Bounce rate (landing)	< 35 %
