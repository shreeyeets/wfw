# Wysa For Work — Frontend Codebase

A Microsoft Teams Tab app built with **React + TypeScript + Vite + Tailwind CSS + shadcn/ui**.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Dev server & build |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Atomic component primitives |
| lucide-react | Icon set |

---

## Folder Structure

```
src/
├── App.tsx                          # Root component (renders DashboardPage)
├── main.tsx                         # Entry point
├── index.css                        # Global styles

├── pages/
│   ├── DashboardPage.tsx            # Main home screen — composes Left/Right panels
│   └── LandingPage.tsx              # Pre-auth landing (unused in Teams tab mode)

├── components/
│   ├── layout/
│   │   ├── DashboardLayout.tsx      # Two-column page wrapper (left + right panels)
│   │   ├── LeftPanel.tsx            # Scrollable left content column
│   │   └── RightPanel.tsx           # Sticky right sidebar

│   ├── sections/                    # Page-level composable sections (used in DashboardPage)
│   │   ├── GreetingSection.tsx      # "Good Afternoon, [name]" heading
│   │   ├── TalkToWysaSection.tsx    # Search/chat input bar with quick pills
│   │   ├── ActiveChallengesSection.tsx  # Grid of ActiveChallengeCards (hidden when empty)
│   │   ├── CreateChallengeSection.tsx   # Card with CTA to open CreateChallengeModal
│   │   ├── JoinChallengesSection.tsx    # Horizontally scrollable Wysa-curated challenges
│   │   └── WysaToolsSection.tsx         # Horizontally scrollable (mobile) / 2x2 grid (desktop)

│   ├── cards/                       # Reusable display cards (atomic leaf components)
│   │   ├── ActiveChallengeCard.tsx  # Live challenge card: image + progress + Mark as Done CTA
│   │   ├── ChallengeTemplateCard.tsx # Discover/browse challenge card (Wysa templates)
│   │   ├── WysaToolCard.tsx         # Dark-themed tool card with image + label
│   │   ├── PlanYourDayCard.tsx      # Plan Your Day widget (right panel)
│   │   ├── StreakCard.tsx           # Streak + leaderboard rank card (right panel)
│   │   └── GettingStartedCard.tsx   # Onboarding nudge card (right panel)

│   ├── modal/                       # All dialog/modal components
│   │   ├── PlanYourDayModal.tsx     # Standalone Plan Your Day modal
│   │   └── create-challenge/        # Multi-step Create Challenge modal (modular)
│   │       ├── CreateChallengeModal.tsx        # Shell: Dialog wrapper, header, step router
│   │       ├── createChallenge.types.ts        # Types: Step, CreateChallengeState, StepProps, GOALS, WEEKDAYS
│   │       ├── useCreateChallengeState.ts      # Hook: all state + navigation + field setters
│   │       └── steps/
│   │           ├── Step1Audience.tsx   # Who is this for? (Personal / Colleagues)
│   │           ├── Step2Goal.tsx       # Goal selection grid (6 categories)
│   │           ├── Step3Setup.tsx      # Duration picker + challenge name/description
│   │           ├── Step4Effort.tsx     # Daily time commitment + weekly schedule
│   │           ├── Step5Loading.tsx    # Wysa generation loading state
│   │           ├── Step6Overview.tsx   # Challenge preview with day-by-day breakdown
│   │           ├── Step7Invite.tsx     # Invite participants by email
│   │           └── Step8Complete.tsx   # Congratulations + Got it! CTA

│   └── ui/                          # shadcn/ui primitives (do not edit directly)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── progress.tsx
│       ├── badge.tsx
│       ├── avatar.tsx
│       └── radio-group.tsx

├── lib/
│   └── utils.ts                     # cn() class merger utility
```

---

## Data Flow

```
DashboardPage (state owner)
    |
    +- createdChallenges[]  ---------> ActiveChallengesSection -> ActiveChallengeCard (xN)
    |
    +- handleCreateChallenge() <------- CreateChallengeSection -> CreateChallengeModal
    |                                       └── useCreateChallengeState (all step state)
    |                                              └── Step1 -> Step2 -> ... -> Step8
    |
    └- templates[] (static)  ---------> ChallengeTemplateCard (xN)
```

---

## Modal Architecture

The `CreateChallengeModal` uses a **state machine pattern**:

1. **Shell** (`CreateChallengeModal.tsx`) — renders the `Dialog`, progress bar, back/close header, and routes to the current step component
2. **Hook** (`useCreateChallengeState.ts`) — owns all form state, `nextStep()`, `prevStep()`, `setField()`, `toggleWeekday()`, `handleRefreshName()`
3. **Steps** (`steps/Step*.tsx`) — each step is a pure presentational component that receives only the props it needs (via `Pick<StepProps, ...>`)
4. **Types** (`createChallenge.types.ts`) — `Step` union type, `CreateChallengeState` interface, `StepProps`, `GOALS[]`, `WEEKDAYS[]`

---

## Responsiveness Strategy

- **Modal**: `max-h-[85svh]` with internal `overflow-y-auto`. Steps use `flex-col -> sm:flex-row` to stack on mobile
- **Grids**: All use `grid-cols-1 sm:grid-cols-2/3` or `flex + overflow-x-auto` for horizontal scroll on mobile
- **WysaTools + Challenge sections**: Horizontally scrollable on mobile, grid on desktop
- No hardcoded `h-[Npx]` or `w-[Npx]` on layout elements

---

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Steps as separate files | Each step is independently readable, testable, and replaceable |
| No global footer CTA | Each step owns its own CTA button — prevents duplicates |
| Pick<StepProps> per step | Minimal prop surface; steps only get what they need |
| active_challenge.png for all active cards | Consistent branding; challenge-specific images reserved for template cards |
| svh for modal height | svh accounts for mobile browser chrome, unlike vh |

---

## Public Assets

```
public/images/
├── challenges/
│   ├── active_challenge.png    <- used by ActiveChallengeCard
│   ├── stress_reset.png
│   ├── better_sleep.png
│   ├── mindfulness_week.png
│   ├── move_more.png
│   └── team_connect.png
├── wysa_tools/
│   ├── resolve_conflict.png
│   ├── workplace_stress.png
│   ├── breathe_deeply.png
│   └── stretch_out.png
├── create_challenge.png
├── loading.png
└── plan_your_day.png
```

---

## Running Locally

```bash
npm install
npm run dev       # starts Vite dev server at http://localhost:5173
```
