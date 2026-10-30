# Math Forge — Content Authoring Guide

Math Forge teaches College Algebra, Trigonometry, Calculus I, Calculus II and Linear Algebra through short
interactive lessons. It is inspired by Sololearn/Duolingo but aims to be **much deeper**:
every lesson explains *why* each rule works, shows full worked examples, uses graphs the
learner can play with, and checks understanding with questions where the learner actually
**computes** answers. The learner is an adult returning to college to finish a computer
science degree (interested in game development), so connect ideas to programming and games
where it is natural — never forced.

Read this whole guide, then `src/content/types.ts` (the data model), then the reference
lesson `src/content/calc1/u03-derivative/calc1-tangent-lines.ts`. Match or exceed the
reference lesson's depth and polish.

## 1. Where content lives

```
src/content/
  types.ts                              data model (do not change)
  <course>/<unit-dir>/<lesson-id>.ts    one file per lesson:  export const lesson: Lesson = {...}
  <course>/<unit-dir>/index.ts          unit metadata + lesson imports (already wired up)
  <course>/<unit-dir>/glossary.ts       extra glossary terms introduced by this unit
  glossary/<course>.ts                  core glossary (ids listed in scripts/glossary-master.ts)
  cheatsheets/<course>.ts               formula sheets
```

Courses: `algebra` (lesson ids `alg-…`), `trig` (`trig-…`), `calc1` (`calc1-…`),
`calc2` (`calc2-…`), `linalg` (`la-…`). Every lesson file already exists as a **stub**. Replace the whole stub
with the finished lesson. Keep the lesson `id` exactly as in the stub. You may refine the
title slightly. The full outline is in `scripts/curriculum.json` — read the neighbouring
lessons' titles so you don't duplicate topics owned by another lesson, and so you know what
learners have already seen.

**Only edit files inside the unit directories you were assigned.** Other authors are working
on other units at the same time.

## 2. Audience and voice

- Assume knowledge of all *earlier* lessons and courses in the outline (Algebra → Trig →
  Calc I → Calc II → Linear Algebra), nothing later. If you must mention a later idea, explain it in one
  sentence.
- The learner may be rusty: the first algebra units should be gentle and confidence
  building, but never babyish. Calculus lessons should be at the level of a solid
  university course (Stewart / OpenStax), including the reasoning behind theorems.
- Voice: warm, precise, confident, never condescending. Second person ("you"). Short
  paragraphs (2–4 sentences). No filler, no hype.
- Mathematical accuracy is paramount. State hypotheses of theorems precisely. Don't
  hand-wave domains, signs, or special cases.

## 3. Lesson recipe (enforced by the validator)

A lesson is a sequence of **steps**: `concept` cards that teach and **question** cards
that check.

| Rule | Minimum |
|---|---|
| First step | must be a `concept` |
| Concept steps | ≥ 4 (typically 5–7) |
| Questions | ≥ 6 (typically 7–9) |
| Distinct question kinds | ≥ 4 of `mcq`, `truefalse`, `fill`, `order`, `error`, `numeric`, `expr` |
| `numeric` + `expr` questions | ≥ 2 (the learner must *calculate*, not just recognise) |
| `why` callouts | ≥ 1 (typically 2–3) |
| `derivation` blocks (worked examples) | ≥ 1 (typically 2–4) |
| Objectives / takeaways / reading refs | ≥ 3 / ≥ 4 / ≥ 2 |

Graphs are not enforced but are expected in nearly every trig and calculus lesson, and in
algebra lessons about lines, functions and graphs. Use at least one interactive graph
(`sliders`) per lesson where a parameter changing teaches something.

Rhythm: concept → question → concept → question … Interleave; don't stack more than 3
questions in a row except an optional short review at the end. Aim for **13–17 steps**
and **14–20 minutes**. Each concept card ~150–400 words of teaching text plus math,
graphs and worked examples. Depth beats breadth: one idea per card, fully explained.

### What a great concept card contains

1. The idea in plain language first, then the precise statement (`definition` or `theorem`).
2. A worked example as a `derivation`: one line per step, **each with a `why`** saying
   what was done and why it's allowed. This is the heart of the app — the learner taps a
   line to see the reason. Show *every* algebra step a student would need.
3. **The why** — a `why` callout: why the rule is true, why the definition is chosen
   this way, what would go wrong otherwise. Short proofs or intuitive arguments are great.
4. Where relevant: a `graph` (interactive if possible), a `warning` (classic mistake),
   `exam` tip (how this is tested / what instructors look for), `code` callout (where
   this shows up in programming, game dev or CS — e.g. lerp, atan2, Euler integration,
   Newton's method, floating-point), `analogy`, `history`.
5. Optional `deepdive` for proofs, edge cases, or extra rigour.

## 4. Inline text format

Used in every string displayed as prose (paragraphs, prompts, explanations, options,
list items, table cells, labels, chips, order lines, takeaways, objectives, …):

- `$x^2 + 1$` → inline math (KaTeX). `$$…$$` → display math inside a paragraph (rare;
  prefer a `math` block).
- `` `code` `` → inline code. `**bold**`, `*italic*`.
- `[label](https://…)` → external link.
- `[[glossary-id]]` / `[[glossary-id|display text]]` → glossary popover. Use ids from
  `scripts/glossary-master.ts` (link a term the **first time** it appears in a lesson, not
  every time; never inside `$…$`). If a term you need is not in the master list, add a full
  `GlossaryEntry` to your unit's `glossary.ts` with a specific id that won't collide with
  other units (check the master list first).
- A literal dollar sign is `\\$` in TS source (it renders as $).
- `"\n\n"` → paragraph break.

## 5. Writing TeX inside TypeScript strings

TeX is full of backslashes, so **every backslash must be doubled** in TS source:
`'$\\frac{1}{2}$'`, `'$\\sqrt{x}$'`, `'$\\lim_{h \\to 0}$'`, `'$\\pi$'`.

- Use single-quoted strings. Escape apostrophes as `\'` — careful with primes:
  `'$f\'(x)$'` works; inside a template literal or double-quoted string you can write `f'(x)`.
- `tex` fields (math blocks, derivation steps, theorem `tex`, `answerTex`, compare `tex`)
  are **raw TeX without `$`**.
- Useful KaTeX: `\\frac{a}{b}`, `\\dfrac` (larger fraction in inline math), `\\sqrt[3]{x}`,
  `\\left( … \\right)`, `\\cdot`, `\\pm`, `\\le`, `\\ge`, `\\ne`, `\\approx`, `\\infty`,
  `\\to`, `\\lim_{x \\to a}`, `\\sum_{k=1}^{n}`, `\\int_a^b f(x)\\,dx`, `\\Big|_a^b`,
  `\\begin{cases} … \\\\ … \\end{cases}`, `\\begin{aligned} … \\end{aligned}`,
  `\\text{…}`, `\\boxed{…}`, `\\cancel{…}` (show cancellation), `\\color{#e5484d}{…}`
  (sparingly, to highlight what changed).
- The validator compiles every piece of TeX with KaTeX and reports errors precisely.

## 6. Blocks reference (see types.ts for exact shapes)

- `p` paragraph · `heading` small sub-heading · `list` · `table` (cells are inline text,
  so `$…$` works) · `steps` (numbered process) · `definition` (key term box) ·
  `theorem` (name + `tex` and/or `text`) · `math` (display equation + optional caption) ·
  `callout` (`why`, `tip`, `warning`, `note`, `code`, `exam`, `history`, `analogy`) ·
  `compare` (two sides, typically `tone: 'bad'` "Wrong" vs `tone: 'good'` "Right", each
  with `tex` lines and/or `text`) · `deepdive` (collapsible) · `code` (C++ snippets;
  annotate lines; `runnable: true` + exact `output` for complete programs — they are
  compiled with g++ and run in CI, so only mark programs you are certain about).
- `derivation` — `{ type: 'derivation', title, steps: [{ tex, why }], result }`. Each
  `tex` is one line of the solution (start continuation lines with `=` or `\\implies`).
  Every step (or nearly) gets a `why`. `result` (inline text) states the conclusion.
- `graph` — interactive plot. Key fields:
  ```ts
  {
    type: 'graph',
    x: [-4, 4], y: [-2, 6],              // window
    xStep: 'pi',                          // optional: ticks at multiples of π/2 (trig!)
    equal: true,                          // optional: same scale on both axes (circles)
    functions: [{ expr: 'a*sin(b*x)', label: '$y = a\\sin(bx)$', color: 'blue', dashed?, domain? }],
    parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'] }],
    polar: [{ expr: '1 + cos(theta)' }],
    points: [{ x: 1, y: 'a', label: '(1, a)', open?: true }],
    segments: [{ from: [0, 0], to: ['cos(a)', 'sin(a)'], arrow: true, dashed?, label? }],
    vlines: [{ x: 2, label: 'x = 2' }], hlines: [{ y: 0.5 }],      // dashed reference lines
    areas: [{ expr: 'x^2', expr2: '0', from: 0, to: 'b' }],          // shaded region
    riemann: { expr: 'x^2', from: 0, to: 2, n: 'n', method: 'left' }, // rectangles
    tangents: [{ expr: 'x^3', at: 'a', secantTo?: 'a + h', label? }],
    sliders: [{ name: 'a', min: -3, max: 3, step: 0.1, value: 1, label: '$a$' }],
    readouts: [{ label: '$f\'(a) \\approx$', expr: '3a^2' }],         // live values
    caption: 'What to notice (inline text).',
  }
  ```
  Expressions use **calculator syntax** (not TeX): `x^2 - 3x + 2`, `2sin(x - pi/4)`,
  `sqrt(x)`, `cbrt(x)`, `e^(-x)`, `exp(x)`, `ln(x)`, `log(x)` (base 10), `log_2(x)`,
  `abs(x)`, `arcsin(x)`, `arctan(x)`, `sec(x)`, `floor(x)`, `x!`. Implicit multiplication
  works (`3x`, `2pi`, `x(x+1)`). Slider names are single letters (not x, y, t, e) and can
  be used in every expression and coordinate. Point/segment **labels are plain text**
  (unicode fine: "(π/2, 1)", "θ"); function `label`s, captions, slider labels and readout
  labels are inline text (use `$…$`). Default colors cycle blue, red, green, purple…;
  graph background is neutral, colors: blue red green purple orange teal gray.
  Pick windows that show the interesting features; check asymptotes look right.

## 7. Questions

Every question has a `prompt`, an `explanation` (shown after answering — it must
**teach the why**, usually by walking through the solution), and optionally `hint`,
`tex` (display math under the prompt), `graph` (a graph under the prompt) or `code`.

- `mcq` — 3–5 options, exactly one `correct: true` (or `multi: true`). **Every option gets
  a `why`.** Distractors must be the answers students *actually* get from common mistakes
  (sign errors, forgetting the chain rule, $(a+b)^2 = a^2 + b^2$, …). Vary correct position.
- `truefalse` — a crisp statement targeting a common misconception.
- `fill` — `template` is inline text with `___` blanks. **A blank can never be inside a
  `$…$` span**: close the math before the blank and reopen after. Prefer a `wordBank`
  (chips are inline text, e.g. `'$2x$'`); blank `answers` must match a chip exactly.
  If two blanks share an answer, put that chip in the bank twice (each chip is placed
  once). Without a word bank learners type; numbers are compared by value.
- `order` — `lines` (inline text, usually `$…$`) in the correct order, 3–7 lines;
  optional `distractors`. Great for "order the steps of this solution". Exactly one valid
  order.
- `error` — "find the mistake": `lines` is a worked solution (inline text, one step per
  line) with **exactly one** realistic mistake; `errorLines` = the 1-based line where it
  first goes wrong. The explanation names the mistake, gives the correct step and the
  correct final answer.
- `numeric` — the learner types a number. `answer` is an exact expression in calculator
  syntax: `'3/4'`, `'sqrt(2)/2'`, `'2pi/3'`, `'-7'`, `'e^2'`, `'ln(5)/ln(2)'`. For
  several values (e.g. both roots) give an array; learners type them comma-separated in any
  order. Exact forms must match exactly; decimals are accepted when correctly rounded to
  ≥ `minDecimals` (default 2) places. For applied answers that are naturally decimals
  give `tolerance` (absolute). Optional `label` (e.g. `'$x =$'`), `unit`, `answerTex`
  (how the correct answer is displayed, e.g. `'\\frac{\\sqrt{2}}{2}'`).
- `expr` — the learner types an expression, checked by evaluating at random points, so
  any equivalent form is accepted. `answer` in calculator syntax (`'6x^2 - 2cos(x)'`).
  Set `variables` if not just `['x']` (e.g. `['t']`, `['theta']`), `domain` if the
  answer is undefined in $[-3, 3]$ (e.g. `[0.5, 3]` for `ln(x)`), `upToConstant: true`
  for antiderivatives, `label` like `'$f\'(x) =$'`, and `answerTex`.

**Answers must be correct.** Compute every numeric/expr answer carefully, then verify it
independently — e.g. with Python (`python3 -c "import sympy as sp; …"` — sympy is
installed) for derivatives, integrals, limits, series and equation solutions, or plain
arithmetic for the rest. Do this for derivation results and tables too. A wrong answer
key is the worst bug this app can have.

Questions must be answerable from what the lesson (and earlier lessons) taught.

## 8. Reading references

Only use URLs you are highly confident exist. Good patterns:
- OpenStax (free textbooks): `https://openstax.org/books/college-algebra-2e/pages/<n>-<k>-<slug>`,
  `https://openstax.org/books/algebra-and-trigonometry-2e/pages/…`,
  `https://openstax.org/books/precalculus-2e/pages/…`,
  `https://openstax.org/books/calculus-volume-1/pages/…`, `…/calculus-volume-2/pages/…`
  (`source: 'openstax'`). Only use section slugs you know; otherwise link the book's
  table of contents page (`…/pages/1-introduction` style pages also exist).
- Paul's Online Math Notes: `https://tutorial.math.lamar.edu/Classes/Alg/<Page>.aspx`,
  `…/Classes/CalcI/<Page>.aspx`, `…/Classes/CalcII/<Page>.aspx` (`source: 'paul'`).
- Khan Academy course pages (`https://www.khanacademy.org/math/algebra2`,
  `…/math/trigonometry`, `…/math/calculus-1`, `…/math/calculus-2`) (`source: 'khan'`).
- Wikipedia articles (`source: 'wikipedia'`), 3Blue1Brown videos you are sure of
  (`source: 'video'`), Desmos (`https://www.desmos.com/calculator`, `source: 'desmos'`).
Each reference gets a one-sentence `note`.

## 9. Validate before you finish

```
npm run validate -- --unit <unit-id> [--unit <unit-id> …] --allow-stubs
npx tsx scripts/compile-examples.ts --unit <unit-id>     # only if you marked code runnable
npx tsc --noEmit -p tsconfig.content.json 2>&1 | grep -E "<your-unit-dir>" || echo "types OK"
```

Fix **all errors**, and fix warnings unless you have a good reason. Then re-read each
lesson once as a learner would: is every new term explained? Is every step of every
worked example justified? Would a rusty student know what to type in each question?
Is every answer key correct?
