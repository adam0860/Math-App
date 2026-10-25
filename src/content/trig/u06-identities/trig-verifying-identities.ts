import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-verifying-identities',
  title: 'Verifying Identities',
  summary: 'How to prove that two trig expressions are always equal — and why you transform one side instead of "solving" both.',
  minutes: 18,
  objectives: [
    'Explain why an identity is verified by transforming one side, and why operating on both sides can "prove" false statements',
    'Apply a strategy: start on the complicated side, rewrite in sines and cosines, combine fractions, factor, and use Pythagorean identities',
    'Use the conjugate trick to simplify expressions like $\\frac{\\cos x}{1 - \\sin x}$',
    'Disprove a non-identity with a counterexample, and use graphs as evidence (not proof)',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'What "verify" means — and why you work on one side',
      blocks: [
        {
          type: 'p',
          text: 'To **verify** an identity means to prove that the left side and the right side are equal for every allowed input. The standard method: start from one side and transform it, one justified step at a time, until it becomes the other side. Each step uses algebra or an identity you already know is true, so the chain $\\text{LHS} = \\dots = \\dots = \\text{RHS}$ is airtight.',
        },
        {
          type: 'p',
          text: 'This is different from **solving** an equation. When you solve $2x + 1 = 7$ you *assume* the equation holds for some unknown $x$ and do the same thing to both sides to find out which $x$. When verifying, the equality is the thing you are trying to prove, so you are not allowed to assume it.',
        },
        {
          type: 'compare',
          left: {
            title: 'Circular "proof" of a false statement',
            tone: 'bad',
            tex: ['-1 = 1 \\quad (\\text{assumed})', '(-1)^2 = 1^2 \\quad (\\text{square both sides})', '1 = 1 \\quad \\checkmark ???'],
            text: 'We reached a true statement, but we started from a false one. Squaring is not reversible, so the chain only runs downhill.',
          },
          right: {
            title: 'Valid verification',
            tone: 'good',
            tex: ['\\sin x \\,(\\csc x - \\sin x)', '= \\sin x \\csc x - \\sin^2 x', '= 1 - \\sin^2 x', '= \\cos^2 x'],
            text: 'Start from the left side and only rewrite it. Every $=$ is a known fact, so the left side really is $\\cos^2 x$.',
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "doing the same thing to both sides" fails here',
          text: 'Operations like squaring, multiplying by an expression that might be zero, or cross-multiplying are not always reversible. If you start from the identity you want and reach $1 = 1$, you have only shown "*if* it is true, then $1 = 1$" — which tells you nothing, since $1 = 1$ is true anyway. A proof must run *from* known truths *to* the claim. Working on one side guarantees that direction.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Think of a [[trig-identity]] as a claim that two programs always return the same output. Testing a few inputs is a unit test: it can catch a bug, but it cannot prove there are none. Verifying is like transforming one program into the other through refactorings that each provably preserve behaviour.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: 'To verify an identity, it is valid to start with the whole equation, square both sides, simplify, and stop when you reach a true statement like $1 = 1$.',
      answer: false,
      explanation: 'Reaching a true statement from an assumed one proves nothing: squaring $-1 = 1$ also gives $1 = 1$. Squaring (and cross-multiplying by expressions that could be zero) is not reversible, so the logic only flows one way. A valid verification starts from **one side** and transforms it into the other using known identities, so every step is an equality you already know is true.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'A strategy that usually works',
      blocks: [
        {
          type: 'p',
          text: 'There is no single algorithm for verifying identities, which is what makes them feel like puzzles. But experienced solvers follow roughly the same playbook:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Start on the more complicated side', text: 'It is easier to simplify than to "complicate" toward a target. More terms, fractions, or functions usually means more room to simplify.' },
            { title: 'Rewrite in sines and cosines', text: 'If you are stuck, convert tan, cot, sec and csc using the [[quotient-identities]] and [[reciprocal-identities]].' },
            { title: 'Combine fractions', text: 'A sum of fractions almost always wants a common denominator.' },
            { title: 'Factor and spot Pythagorean pairs', text: 'Watch for $1 - \\sin^2 x$, $\\sec^2 x - 1$, $\\sin^2 x + \\cos^2 x$, and so on ([[pythagorean-identities]]).' },
            { title: 'Keep the target in view', text: 'If the other side has only $\\sec x$, steer toward $\\frac{1}{\\cos x}$; if it has $\\cos^2 x$, look for $1 - \\sin^2 x$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Verify $\\tan x + \\cot x = \\sec x \\csc x$',
          steps: [
            { tex: '\\tan x + \\cot x', why: 'The left side is a sum of two fractions in disguise, so it is the side to work on.' },
            { tex: '= \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x}', why: 'Rewrite in sines and cosines with the quotient identities.' },
            { tex: '= \\frac{\\sin^2 x}{\\sin x \\cos x} + \\frac{\\cos^2 x}{\\sin x \\cos x}', why: 'Common denominator $\\sin x \\cos x$: multiply the first fraction by $\\frac{\\sin x}{\\sin x}$ and the second by $\\frac{\\cos x}{\\cos x}$.' },
            { tex: '= \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x}', why: 'Add the numerators.' },
            { tex: '= \\frac{1}{\\sin x \\cos x}', why: 'Pythagorean identity — the payoff of combining.' },
            { tex: '= \\frac{1}{\\cos x} \\cdot \\frac{1}{\\sin x} = \\sec x \\csc x', why: 'Split the fraction and use the reciprocal identities to match the right side.' },
          ],
          result: 'The left side has been transformed into the right side, so the identity holds wherever $\\sin x \\neq 0$ and $\\cos x \\neq 0$.',
        },
        {
          type: 'graph',
          x: [-3.3, 3.3],
          y: [-6, 6],
          xStep: 'pi',
          functions: [
            { expr: 'tan(x) + cot(x)', label: '$y = \\tan x + \\cot x$', color: 'blue' },
            { expr: 'sec(x)csc(x)', label: '$y = \\sec x \\csc x$', color: 'orange', dashed: true },
          ],
          caption: 'The dashed curve lies exactly on the solid one, with the same asymptotes at multiples of $\\frac{\\pi}{2}$. A graph is strong *evidence* for an identity; the derivation above is the *proof*.',
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'order',
      prompt: 'Put the lines of this verification of $\\sin x\\,(\\csc x - \\sin x) = \\cos^2 x$ in the right order.',
      lines: [
        '$\\sin x\\,(\\csc x - \\sin x)$',
        '$= \\sin x \\csc x - \\sin^2 x$',
        '$= \\sin x \\cdot \\frac{1}{\\sin x} - \\sin^2 x$',
        '$= 1 - \\sin^2 x$',
        '$= \\cos^2 x$',
      ],
      distractors: ['$= \\csc x - \\sin^2 x$'],
      explanation: 'Distribute first, then use the reciprocal identity $\\csc x = \\frac{1}{\\sin x}$ so the first product becomes $1$, then the Pythagorean identity turns $1 - \\sin^2 x$ into $\\cos^2 x$. The distractor "$\\csc x - \\sin^2 x$" comes from distributing $\\sin x$ only into the second term — a plain algebra slip.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Combining fractions',
      blocks: [
        {
          type: 'p',
          text: 'Many identities hide a sum of fractions whose denominators multiply to a Pythagorean expression. The tell-tale pair is $1 - \\sin x$ and $1 + \\sin x$: their product is $1 - \\sin^2 x = \\cos^2 x$, a single term.',
        },
        {
          type: 'derivation',
          title: 'Verify $\\dfrac{1}{1 - \\sin x} + \\dfrac{1}{1 + \\sin x} = 2\\sec^2 x$',
          steps: [
            { tex: '\\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x}', why: 'Start on the left: it has two fractions to combine.' },
            { tex: '= \\frac{(1 + \\sin x) + (1 - \\sin x)}{(1 - \\sin x)(1 + \\sin x)}', why: 'Common denominator is the product of the two denominators. Each numerator gets multiplied by the *other* denominator.' },
            { tex: '= \\frac{2}{1 - \\sin^2 x}', why: 'Numerator: the $\\sin x$ terms cancel. Denominator: difference of squares, $(1 - a)(1 + a) = 1 - a^2$.' },
            { tex: '= \\frac{2}{\\cos^2 x}', why: 'Pythagorean identity: $1 - \\sin^2 x = \\cos^2 x$.' },
            { tex: '= 2\\sec^2 x', why: 'Reciprocal identity, squared.' },
          ],
          result: 'Left side $=$ right side wherever $\\sin x \\neq \\pm 1$ (equivalently, $\\cos x \\neq 0$).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Fractions do not add straight across',
          text: '$\\frac{1}{a} + \\frac{1}{b} \\neq \\frac{1}{a + b}$ and $\\frac{1}{a} + \\frac{1}{b} \\neq \\frac{2}{a + b}$. The correct rule is $\\frac{1}{a} + \\frac{1}{b} = \\frac{b + a}{ab}$. Trig functions do not change the rules of fractions — check with numbers ($\\frac{1}{2} + \\frac{1}{2} = 1$, not $\\frac{1}{4}$ or $\\frac{2}{4}$).',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Expand denominators only when it helps. Here multiplying $(1 - \\sin x)(1 + \\sin x)$ was the whole point. But if the target still has factors (say $\\sin x \\cos x$ in a denominator), keep them factored so you can cancel later.',
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Combine and simplify $\\dfrac{1}{1 - \\cos x} + \\dfrac{1}{1 + \\cos x}$ into a single term.',
      label: '$=$',
      answer: '2csc(x)^2',
      answerTex: '2\\csc^2 x',
      hint: 'Same pattern as the worked example, with cosine in place of sine. What is $1 - \\cos^2 x$?',
      explanation: 'Common denominator: $\\frac{(1 + \\cos x) + (1 - \\cos x)}{(1 - \\cos x)(1 + \\cos x)} = \\frac{2}{1 - \\cos^2 x} = \\frac{2}{\\sin^2 x} = 2\\csc^2 x$. Writing $\\frac{2}{\\sin^2 x}$ is equally correct. The structure is identical to the example: conjugate denominators multiply to a Pythagorean pair.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The conjugate trick',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes there is only one fraction, with a binomial like $1 - \\sin x$ in the denominator, and nothing to combine. The move is the same one you used to rationalise $\\frac{1}{1 - \\sqrt{2}}$: multiply top and bottom by the **conjugate** $1 + \\sin x$. The denominator becomes $1 - \\sin^2 x = \\cos^2 x$, a single term that can cancel.',
        },
        {
          type: 'derivation',
          title: 'Verify $\\dfrac{\\cos x}{1 - \\sin x} = \\dfrac{1 + \\sin x}{\\cos x}$',
          steps: [
            { tex: '\\frac{\\cos x}{1 - \\sin x}', why: 'Start with the left side. The right side has $1 + \\sin x$ on top — a hint to bring in the conjugate.' },
            { tex: '= \\frac{\\cos x}{1 - \\sin x} \\cdot \\frac{1 + \\sin x}{1 + \\sin x}', why: 'Multiply by $1$ in the form $\\frac{1 + \\sin x}{1 + \\sin x}$. This changes the form, not the value.' },
            { tex: '= \\frac{\\cos x\\,(1 + \\sin x)}{1 - \\sin^2 x}', why: 'Multiply the denominators: $(1 - \\sin x)(1 + \\sin x) = 1 - \\sin^2 x$. Leave the numerator factored.' },
            { tex: '= \\frac{\\cos x\\,(1 + \\sin x)}{\\cos^2 x}', why: 'Pythagorean identity.' },
            { tex: '= \\frac{1 + \\sin x}{\\cos x}', why: 'Cancel one factor of $\\cos x$.' },
          ],
          result: 'The left side equals the right side wherever both are defined.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the conjugate works',
          text: 'A difference of squares $(a - b)(a + b) = a^2 - b^2$ turns a two-term expression into a squared one. In trig, $1^2 - \\sin^2 x$ is exactly a Pythagorean pair, so the awkward binomial becomes the single term $\\cos^2 x$. The same idea powers rationalising denominators in algebra and computing limits like $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$ in calculus.',
        },
        {
          type: 'deepdive',
          title: 'Where exactly is this identity true?',
          blocks: [
            {
              type: 'p',
              text: 'At $x = \\frac{3\\pi}{2}$, $\\sin x = -1$ and $\\cos x = 0$. The left side is $\\frac{0}{1 - (-1)} = 0$: perfectly defined. The right side is $\\frac{1 + (-1)}{0} = \\frac{0}{0}$: undefined. So the two sides are *not* the same function on all of $\\mathbb{R}$ — they agree wherever **both** are defined, which excludes every $x$ with $\\cos x = 0$.',
            },
            {
              type: 'p',
              text: 'This is why the precise definition of an identity says "for every value where both sides are defined". The cancellation step ("cancel one factor of $\\cos x$") is only legal when $\\cos x \\neq 0$, and that is exactly the restriction that appears.',
            },
          ],
        },
      ],
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A student tries to verify $\\dfrac{\\sin x}{1 + \\cos x} = \\dfrac{1 - \\cos x}{\\sin x}$ and concludes it is false. Tap the first line that is wrong.',
      lines: [
        '$\\dfrac{\\sin x}{1 + \\cos x}$',
        '$= \\dfrac{\\sin x}{(1 + \\cos x)(1 - \\cos x)}$',
        '$= \\dfrac{\\sin x}{1 - \\cos^2 x}$',
        '$= \\dfrac{\\sin x}{\\sin^2 x} = \\dfrac{1}{\\sin x}$',
        'So the two sides are not equal.',
      ],
      errorLines: [2],
      explanation: 'Line 2 multiplies only the denominator by $1 - \\cos x$, which changes the value of the fraction. You must multiply by $\\frac{1 - \\cos x}{1 - \\cos x}$ (that is, by $1$). Correctly: $\\frac{\\sin x\\,(1 - \\cos x)}{1 - \\cos^2 x} = \\frac{\\sin x\\,(1 - \\cos x)}{\\sin^2 x} = \\frac{1 - \\cos x}{\\sin x}$, so the identity **is** true. Lines 3 and 4 are carried out correctly — on the wrong expression.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Testing, graphing, and disproving',
      blocks: [
        {
          type: 'p',
          text: 'Before investing effort in a proof, it is smart to check whether a claimed identity is even true. Plug in a "generic" value like $x = \\frac{\\pi}{3}$ or $x = 1$ (avoid $0$ and $\\frac{\\pi}{2}$, where many terms vanish and false identities can match by accident). If the sides differ, you have a counterexample and you are done: the equation is **not** an identity.',
        },
        {
          type: 'p',
          text: 'Graphs make this visual. Below, the claim is $\\tan^2 x - \\sin^2 x = k \\tan^2 x \\sin^2 x$ for some constant $k$. Slide $k$ and watch for the moment the two curves become one.',
        },
        {
          type: 'graph',
          x: [-1.4, 1.4],
          y: [-0.5, 4],
          functions: [
            { expr: 'tan(x)^2 - sin(x)^2', label: '$y = \\tan^2 x - \\sin^2 x$', color: 'blue' },
            { expr: 'k tan(x)^2 sin(x)^2', label: '$y = k\\tan^2 x\\sin^2 x$', color: 'red', dashed: true },
          ],
          sliders: [{ name: 'k', min: 0, max: 2, step: 0.05, value: 0.5, label: '$k$' }],
          readouts: [
            { label: 'left side at $x = 1$:', expr: 'tan(1)^2 - sin(1)^2', digits: 4 },
            { label: 'right side at $x = 1$:', expr: 'k tan(1)^2 sin(1)^2', digits: 4 },
          ],
          caption: 'Only at $k = 1$ do the curves coincide. For every other $k$, a single point where they differ disproves the claim.',
        },
        {
          type: 'derivation',
          title: 'Prove it for $k = 1$: $\\tan^2 x - \\sin^2 x = \\tan^2 x \\sin^2 x$',
          steps: [
            { tex: '\\tan^2 x - \\sin^2 x', why: 'Work on the left; it is a difference we can combine.' },
            { tex: '= \\frac{\\sin^2 x}{\\cos^2 x} - \\sin^2 x', why: 'Quotient identity, squared.' },
            { tex: '= \\frac{\\sin^2 x - \\sin^2 x \\cos^2 x}{\\cos^2 x}', why: 'Common denominator $\\cos^2 x$.' },
            { tex: '= \\frac{\\sin^2 x\\,(1 - \\cos^2 x)}{\\cos^2 x}', why: 'Factor out the common $\\sin^2 x$ — factoring exposes the Pythagorean pair.' },
            { tex: '= \\frac{\\sin^2 x \\cdot \\sin^2 x}{\\cos^2 x}', why: '$1 - \\cos^2 x = \\sin^2 x$.' },
            { tex: '= \\frac{\\sin^2 x}{\\cos^2 x} \\cdot \\sin^2 x = \\tan^2 x \\sin^2 x', why: 'Regroup and use the quotient identity again.' },
          ],
          result: 'Verified for every $x$ with $\\cos x \\neq 0$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Randomised testing',
          text: 'Computer algebra systems and this very app check whether your typed answer is equivalent to the key by evaluating both at random points. Agreement at a dozen random inputs is overwhelming evidence (two different trig expressions almost never agree at random points), but it is still testing, not proof — which is why mathematicians still write derivations.',
        },
      ],
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'Exactly one of these is **not** an identity. Which one?',
      options: [
        { text: '$\\sin x \\tan x = \\sec x - \\cos x$', why: 'True: $\\sec x - \\cos x = \\frac{1 - \\cos^2 x}{\\cos x} = \\frac{\\sin^2 x}{\\cos x} = \\sin x \\tan x$.' },
        { text: '$\\csc x - \\sin x = \\cos x \\cot x$', why: 'True: $\\csc x - \\sin x = \\frac{1 - \\sin^2 x}{\\sin x} = \\frac{\\cos^2 x}{\\sin x} = \\cos x \\cdot \\frac{\\cos x}{\\sin x}$.' },
        { text: '$(\\sin x + \\cos x)^2 = 1$', correct: true, why: 'Not an identity: expanding gives $\\sin^2 x + 2\\sin x\\cos x + \\cos^2 x = 1 + 2\\sin x \\cos x$. At $x = \\frac{\\pi}{4}$ the left side is $2$.' },
        { text: '$\\dfrac{\\cos x}{1 - \\sin x} = \\dfrac{1 + \\sin x}{\\cos x}$', why: 'True: this is the conjugate-trick identity verified earlier.' },
      ],
      explanation: 'The false one comes from the classic algebra error $(a + b)^2 = a^2 + b^2$. The middle term $2\\sin x \\cos x$ does not vanish, so $(\\sin x + \\cos x)^2 = 1 + 2\\sin x\\cos x$. A single counterexample ($x = \\frac{\\pi}{4}$ gives $2 \\neq 1$) settles it. The other three each follow from rewriting in sines and cosines and one Pythagorean identity.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Test the identity $\\tan^2 x - \\sin^2 x = \\tan^2 x\\sin^2 x$ at $x = \\frac{\\pi}{3}$. What is the value of the **left side**?',
      label: 'left side $=$',
      answer: '9/4',
      answerTex: '\\frac{9}{4}',
      hint: '$\\tan\\frac{\\pi}{3} = \\sqrt{3}$ and $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.',
      explanation: '$\\tan^2\\frac{\\pi}{3} = 3$ and $\\sin^2\\frac{\\pi}{3} = \\frac{3}{4}$, so the left side is $3 - \\frac{3}{4} = \\frac{9}{4}$. The right side is $3 \\cdot \\frac{3}{4} = \\frac{9}{4}$ too — consistent with the identity, as it must be. (A match at one point is evidence, not proof; the derivation is the proof.)',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Harder identities and writing them up',
      blocks: [
        {
          type: 'p',
          text: 'Harder identities combine several moves. Do not panic if the first idea stalls — back up and try another. Rewriting everything in sines and cosines is never wrong; it just sometimes takes longer.',
        },
        {
          type: 'derivation',
          title: 'Verify $\\dfrac{\\sin x}{1 - \\cos x} - \\cot x = \\csc x$',
          steps: [
            { tex: '\\frac{\\sin x}{1 - \\cos x} - \\cot x', why: 'The left side is clearly more complicated.' },
            { tex: '= \\frac{\\sin x}{1 - \\cos x} - \\frac{\\cos x}{\\sin x}', why: 'Quotient identity for $\\cot x$.' },
            { tex: '= \\frac{\\sin^2 x - \\cos x\\,(1 - \\cos x)}{(1 - \\cos x)\\sin x}', why: 'Common denominator $(1 - \\cos x)\\sin x$.' },
            { tex: '= \\frac{\\sin^2 x - \\cos x + \\cos^2 x}{(1 - \\cos x)\\sin x}', why: 'Distribute the $-\\cos x$ carefully: $-\\cos x \\cdot (-\\cos x) = +\\cos^2 x$.' },
            { tex: '= \\frac{1 - \\cos x}{(1 - \\cos x)\\sin x}', why: 'Regroup $\\sin^2 x + \\cos^2 x = 1$.' },
            { tex: '= \\frac{1}{\\sin x} = \\csc x', why: 'Cancel the common factor $1 - \\cos x$ (nonzero where the left side is defined), then use the reciprocal identity.' },
          ],
          result: 'Verified.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Meeting in the middle is allowed — if done right',
          text: 'If both sides are messy, you may simplify the left side to some expression $M$, then *separately* simplify the right side to the same $M$. Since $\\text{LHS} = M$ and $\\text{RHS} = M$, they are equal. What you may **not** do is mix the sides (moving terms across the $=$, cross-multiplying) as if the identity were already known.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders expect a single column: start with one side, write "$=$" on each new line, and end with the other side. Name the identity used at each step if asked. Common deductions: working on both sides at once, writing the identity on the first line and "solving" it, or skipping the Pythagorean step without comment.',
        },
      ],
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Complete the rules for verifying identities.',
      template: 'Start with the more ___ side, and transform it until it matches the other side. Do **not** ___ or square both sides. To show an equation is **not** an identity, find one ___.',
      blanks: [{ answers: ['complicated'] }, { answers: ['cross-multiply'] }, { answers: ['counterexample'] }],
      wordBank: ['complicated', 'simple', 'cross-multiply', 'factor', 'counterexample', 'graph'],
      explanation: 'Simplifying the busier side gives you more to work with. Cross-multiplying and squaring treat the identity as already true, so they cannot prove it. And one counterexample is all it takes to disprove a claimed identity. (Factoring is fine — it is a valid rewrite of one side. A graph is good evidence, but a single specific counterexample value is the clean disproof.)',
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Combine and simplify $\\dfrac{\\cos x}{1 + \\sin x} + \\dfrac{1 + \\sin x}{\\cos x}$ into a single term.',
      label: '$=$',
      answer: '2sec(x)',
      answerTex: '2\\sec x',
      domain: [-1.2, 1.2],
      hint: 'Common denominator $(1 + \\sin x)\\cos x$. Expand $(1 + \\sin x)^2$ and look for $\\sin^2 x + \\cos^2 x$.',
      explanation: '$\\frac{\\cos^2 x + (1 + \\sin x)^2}{(1 + \\sin x)\\cos x} = \\frac{\\cos^2 x + 1 + 2\\sin x + \\sin^2 x}{(1 + \\sin x)\\cos x} = \\frac{2 + 2\\sin x}{(1 + \\sin x)\\cos x} = \\frac{2(1 + \\sin x)}{(1 + \\sin x)\\cos x} = \\frac{2}{\\cos x} = 2\\sec x$. Factoring the numerator to expose $1 + \\sin x$ is the key move.',
    },
  ],
  takeaways: [
    'Verify an identity by transforming one side into the other with known identities; each step must be an equality you already know.',
    'Do not treat an identity like an equation to solve: squaring or cross-multiplying both sides can "prove" false statements.',
    'Strategy: start on the complicated side, rewrite in sines and cosines, combine fractions, factor, and hunt for Pythagorean pairs.',
    'The conjugate trick: multiply by $\\frac{1 + \\sin x}{1 + \\sin x}$ (or similar) so the denominator becomes $\\cos^2 x$.',
    'One counterexample disproves an identity; graphs and numerical checks are evidence, but only a derivation proves.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 7.1 Solving Trigonometric Equations with Identities',
      url: 'https://openstax.org/books/precalculus-2e/pages/7-1-solving-trigonometric-equations-with-identities',
      source: 'openstax',
      note: 'The "verifying the fundamental identities" part has a step-by-step strategy box and many practice identities with answers.',
    },
    {
      title: 'Wikipedia — List of trigonometric identities',
      url: 'https://en.wikipedia.org/wiki/List_of_trigonometric_identities',
      source: 'wikipedia',
      note: 'A comprehensive reference; useful to look up a target identity, though proofs are terse.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'The trig identities unit includes worked videos on proving identities step by step.',
    },
  ],
};
