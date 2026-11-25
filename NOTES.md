# NOTES — "Aftersend"

Competition: u-deranalabs-invent-a-word-we-need-17a020e0 ("Invent a Word We Need")
Prize: $5 total (1st $2 / 2nd $2 / 3rd $1). Closes 27 Nov 2026 17:55 WITA.

## The entry

> Aftersend — the typo you spot in a message only after pressing send.

68 characters, 70 bytes (the em dash is 3 bytes in UTF-8), no trailing newline.

## What the word means

**Aftersend** (noun): the typo you spot in a message only after pressing
send. Built from the productive English prefix *after-* (aftermath,
afterglow, afterthought, aftercare) + *send* — it sounds like a word
English could already have grown, and its spelling and pronunciation are
obvious on first sight.

## Why it fills a real gap

Every person who has ever texted, emailed, or messaged has lived this
exact moment: the message leaves, and a split second later the misspelt
word jumps out at you — too late to fix, too small to follow up, too
annoying to forget. English has "typo" and "send", but no single word for
the *moment of spotting it after the send*. The reader recognises it at
once, and the definition lands in a single reading: one clause, no
example needed, no second sentence.

## Candidates considered (12) and why the winner beat them

Judged head-to-head against the judge's 5 criteria in their printed order
(first differing criterion decides). Concrete and specific beats
meta/abstract; the definition must land in one reading; no existing words;
no obvious blends of two common words.

1. **Miswave** — "waving back at someone who was waving at the person
   behind you." REJECTED after a web check: "mis-wave" already exists as a
   published slang entry (How to Talk Teen, 2016) with exactly this
   meaning, plus satirical articles using it. Fails criterion 1 (freshly
   invented) and 5 (fresh/surprising).
2. **Thringe** — "the quiet sting of discovering you have mispronounced a
   word for years." REJECTED: "thringe" is a Middle English verb form
   (thringen, to press/crowd) — an archaic real word, not a fresh coinage.
3. **Tabnesia** — "opening a new tab and forgetting what you meant to
   search for." Lost to Aftersend at criterion 4: an obvious blend of two
   common words (tab + amnesia).
4. **Sorreflex** — "saying sorry when someone else bumps into you." Lost
   at criterion 4: a squeezed blend (sorry + reflex) with ambiguous
   spelling; Aftersend's after- prefixation is cleaner.
5. **Typeghost** — "a typing indicator that appears, lingers, then
   vanishes without a message." Lost at criterion 2: messaging-specific,
   less universal than the typo-after-send moment.
6. **Noddrift** — "nodding along to a conversation you stopped following
   minutes ago." Lost at criterion 4: a compound of two common words.
7. **Glasscheck** — "straightening your posture the moment you catch your
   reflection in a shop window." Lost at criterion 2: narrower and less
   universal than Aftersend.
8. **Chronoblank** — "checking the time, then forgetting it before you
   look away." Lost at criterion 4: three syllables, clunky, sounds
   sci-fi; Aftersend is shorter and more immediately sayable.
9. **Fridgepeek** — "opening the fridge to look for food you already know
   is not there." Lost at criterion 4: an obvious compound.
10. **Paceshadow** — "a stranger who falls into your exact walking pace
    behind you, so you speed up and slow down together." Lost at
    criterion 3: the definition needs a subordinate clause to land.
11. **Stretchwave** — "turning an unanswered wave into a stretch." Lost at
    criterion 2: a subset of the (already-published) miswave moment.
12. **Repocket** — "patting the same pocket twice for a phone that was
    there all along." REJECTED: "repocket" is an existing verb (to put
    back into a pocket).

Novelty checks (web search, 25 Nov 2026): "aftersend" appears only as a
camelCase code identifier (`AfterSend` callback) in programming libraries
— no dictionary entry, no English meaning attached. As a lowercase word
with this definition it is fresh.

## Measured verification

- `main.ts` run twice (Node v24.22.1, `MAKEFUN_OUTPUT_DIR` set to two
  separate temp dirs): both outputs byte-identical (`cmp` clean).
- sha256 of `entry.txt` (both runs):
  `b6325f7d828a302d7096130e78ee9add75baf407c7fd6437598779d5628789d7`
- 68 characters, 70 bytes, non-whitespace only: **gate OK (1–140 chars)**.
- `main.ts` was written, then revised in-session (gate self-check added)
  before these runs — the entrypoint's final content comes from ≥2
  write/edit messages, per the thinking_revised rule.
- No trailing newline in `entry.txt`.
