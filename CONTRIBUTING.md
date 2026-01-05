# Contributing to based.health

First off, thank you for being here. **based.health** only works because people like you are willing to research, verify, and share protocols.

This project is not a blog; it is a **registry**. Every contribution must be rigorous, evidence-based, and free of marketing hype.

---

## 🛡 The Core Values

Before you submit anything, ask yourself:
1. **Is it clean?** Products must be free of endocrine disruptors (BPA/BPS, Phthalates, PFAS, Fragrance).
2. **Is it based in science?** No "bio-hacking" fluff. If there isn't a study or a clear biological mechanism, it doesn't belong here.
3. **Is it simple?** Can a regular person understand and execute this in under 5 minutes of reading?

---

## 🛠 How to Contribute

### 1. Adding or Editing a Protocol
Protocols are located in `src/content/protocols/`. 

To add a new one:
1. **Fork** the repository.
2. Create a new `.md` file in that folder (e.g., `this-super-based-protocol.md`).
3. Follow the **Standard Protocol Template** (see below).
4. Submit a **Pull Request**.

### 2. The Standard Protocol Template
All protocols must use this exact frontmatter structure:

```markdown
---
title: "Name of the Protocol"
lastUpdated: 2026-01-05
tags: ["energy", "sleep"]
difficulty: "easy" | "medium" | "hard"
cost: "free" | "$" | "$$" | "$$$"
timeCommitment: "e.g. 10 mins/day"
---