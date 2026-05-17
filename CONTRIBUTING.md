# Contributing to based.health

based.health accepts concise, evidence-aware health protocols. The bar is higher than a blog post because bad health advice can hurt people.

## What Belongs

Good first protocols are low-risk lifestyle defaults:
- sleep timing
- light exposure
- walking and movement
- basic resistance training
- simple nutrition defaults
- hydration

Avoid supplements, medications, disease treatment, extreme diets, hormone protocols, and high-risk interventions unless the project has an explicit review process for them.

## Protocol Requirements

Each protocol must include:
- a short implementation summary
- clear steps someone can do today
- time, cost, frequency, difficulty, impact, evidence level, and risk level
- contraindications or modification notes
- credible references for meaningful claims

Use plain language. Do not bury the action steps under background theory.

## Evidence Levels

- `strong`: public health guideline, consensus statement, systematic review, or multiple consistent controlled studies
- `moderate`: plausible mechanism plus some human evidence, but limited dose or outcome certainty
- `emerging`: early evidence or expert-informed practice with meaningful uncertainty

## Safety Rules

- Keep claims narrow.
- Do not imply diagnosis, treatment, or guaranteed outcomes.
- Add contraindications for medical conditions, medications, pregnancy, injury, and obvious risk groups.
- Prefer "modify or avoid" over pretending a protocol is universal.
- If a protocol can cause severe downside without supervision, it does not belong in the starter kit.

## Before Opening a PR

Run:

```sh
npm run build
```

Then check that the protocol page is short, scannable, and cites its evidence.
