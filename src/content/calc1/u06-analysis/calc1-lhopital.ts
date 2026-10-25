import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-lhopital',
  title: "L'Hôpital's Rule",
  summary: 'Turn stubborn $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$ limits into derivative limits, tame products, differences and powers, and know when the rule does not apply.',
  minutes: 18,
  objectives: [
    "State L'Hôpital's rule with all of its hypotheses",
    'Evaluate $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$ limits, applying the rule repeatedly when needed',
    'Rewrite indeterminate products $0 \\cdot \\infty$ and differences $\\infty - \\infty$ as quotients',
    'Handle indeterminate powers $1^\\infty$, $0^0$, $\\infty^0$ by taking logarithms',
    'Recognise when the rule must not be used or does not help',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Limits that algebra cannot crack',
      blocks: [
        {
          type: 'p',
          text: 'You have evaluated plenty of $\\frac{0}{0}$ limits by factoring, rationalising or the squeeze theorem. But try $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ or $\\lim_{x \\to 1} \\frac{\\ln x}{x - 1}$. There is nothing to factor. Plugging in gives $\\frac{0}{0}$, an [[indeterminate-form]]: the answer depends on *how fast* the top and bottom approach zero, and the form alone cannot tell you.',
        },
        {
          type: 'p',
          text: 'Derivatives measure exactly that — how fast. Zoom in near $x = a$ where $f(a) = g(a) = 0$. Each function looks like its tangent line, so by [[linear-approximation]]:',
        },
        {
          type: 'math',
          tex: '\\frac{f(x)}{g(x)} \\approx \\frac{f(a) + f\'(a)(x - a)}{g(a) + g\'(a)(x - a)} = \\frac{f\'(a)\\,\\cancel{(x - a)}}{g\'(a)\\,\\cancel{(x - a)}} = \\frac{f\'(a)}{g\'(a)}',
          caption: 'Near $a$, the ratio of two functions that both vanish is the ratio of their slopes.',
        },
        {
          type: 'graph',
          x: [-1, 1.6],
          y: [-0.8, 4],
          functions: [
            { expr: 'e^x - 1', label: '$f(x) = e^x - 1$' },
            { expr: 'x', label: '$g(x) = x$', color: 'red' },
          ],
          points: [
            { x: 'h', y: 'e^h - 1', label: 'f(h)' },
            { x: 'h', y: 'h', label: 'g(h)', color: 'red' },
          ],
          sliders: [{ name: 'h', min: 0.01, max: 1.5, step: 0.01, value: 1.2, label: '$x$' }],
          readouts: [
            { label: '$\\frac{f(x)}{g(x)} =$', expr: '(e^h - 1)/h', digits: 4 },
            { label: '$\\frac{f\'(x)}{g\'(x)} = e^x =$', expr: 'e^h', digits: 4 },
          ],
          caption: 'Both curves pass through the origin with slope $1$. Slide $x$ toward $0$: the ratio of heights and the ratio of slopes both close in on $1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why slopes decide the race',
          text: 'Two quantities that both shrink to zero can have any ratio at all: $\\frac{2x}{x} \\to 2$, $\\frac{x^2}{x} \\to 0$, $\\frac{x}{x^2} \\to \\infty$. What matters is their *rates* of shrinking near $a$. If $f$ heads to zero twice as fast as $g$, the ratio is about $2$ — and "how fast" is precisely what $f\'(a)$ and $g\'(a)$ measure.',
        },
      ],
    },
    {
      kind: 'concept',
      title: "The rule, stated carefully",
      blocks: [
        {
          type: 'theorem',
          name: "L'Hôpital's Rule",
          text: 'Suppose $f$ and $g$ are differentiable on an open interval containing $a$ (except possibly at $a$ itself), and $g\'(x) \\ne 0$ there for $x \\ne a$. Suppose either\n\n• $\\lim_{x \\to a} f(x) = 0$ and $\\lim_{x \\to a} g(x) = 0$, or\n\n• $\\lim_{x \\to a} f(x) = \\pm\\infty$ and $\\lim_{x \\to a} g(x) = \\pm\\infty$.\n\nThen $\\displaystyle\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$, **provided the limit on the right exists** (or is $\\pm\\infty$). The same holds for one-sided limits and for $x \\to \\pm\\infty$.',
        },
        {
          type: 'p',
          text: 'Read the hypotheses as a checklist: (1) the form really is $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$; (2) both functions are differentiable near $a$; (3) the new limit exists. [[lhopitals-rule]] is a statement about limits, not about functions — it says nothing at all when the derivative limit fails to exist.',
        },
        {
          type: 'derivation',
          title: 'Two classic $\\frac{0}{0}$ limits',
          steps: [
            { tex: '\\lim_{x \\to 0} \\frac{e^x - 1}{x} \\quad \\left[\\tfrac{0}{0}\\right]', why: 'Check the form first: $e^0 - 1 = 0$ and the denominator is $0$.' },
            { tex: '= \\lim_{x \\to 0} \\frac{e^x}{1} = 1', why: 'Differentiate top and bottom **separately**: $(e^x - 1)\' = e^x$, $(x)\' = 1$. The new limit is continuous, so substitute.' },
            { tex: '\\lim_{x \\to 1} \\frac{\\ln x}{x - 1} \\quad \\left[\\tfrac{0}{0}\\right]', why: '$\\ln 1 = 0$ and $1 - 1 = 0$.' },
            { tex: '= \\lim_{x \\to 1} \\frac{1/x}{1} = 1', why: '$(\\ln x)\' = \\frac{1}{x}$, which is $1$ at $x = 1$.' },
          ],
          result: 'Both limits equal $1$. (The first one is exactly the statement that the slope of $e^x$ at $0$ is $1$.)',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: quotient rule',
            tone: 'bad',
            tex: ['\\lim \\frac{f}{g} = \\lim \\left(\\frac{f}{g}\\right)\'', '= \\lim \\frac{f\'g - fg\'}{g^2}'],
            text: 'Differentiating the fraction as a whole computes a different quantity entirely.',
          },
          right: {
            title: "Right: L'Hôpital",
            tone: 'good',
            tex: ['\\lim \\frac{f}{g} = \\lim \\frac{f\'}{g\'}'],
            text: 'Differentiate the numerator and the denominator separately.',
          },
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'A rule bought and paid for',
          text: 'The rule is named after the Marquis de L\'Hôpital, who published it in 1696 in the first calculus textbook. The mathematics was largely Johann Bernoulli\'s: L\'Hôpital paid Bernoulli a retainer for his discoveries, and Bernoulli later complained he had not received the credit.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: "To evaluate a $\\frac{0}{0}$ limit $\\lim\\limits_{x \\to a} \\dfrac{f(x)}{g(x)}$ with L'Hôpital's rule, which limit do you compute next?",
      options: [
        { text: '$\\lim\\limits_{x \\to a} \\dfrac{f\'(x)g(x) - f(x)g\'(x)}{[g(x)]^2}$', why: 'That is the quotient rule — the derivative of $\\frac{f}{g}$, which is not what the rule uses.' },
        { text: '$\\lim\\limits_{x \\to a} \\dfrac{f\'(x)}{g\'(x)}$', correct: true, why: 'Top and bottom are differentiated separately, and the ratio of derivatives replaces the ratio of functions.' },
        { text: '$\\lim\\limits_{x \\to a} f\'(x) \\cdot g\'(x)$', why: 'The rule keeps a quotient; it never turns it into a product.' },
        { text: '$\\dfrac{f\'(a)}{g\'(a)}$, always', why: 'Often that is what the limit turns out to be, but if $g\'(a) = 0$ (or $f\'$, $g\'$ are not continuous) you must keep taking the *limit* of $\\frac{f\'}{g\'}$, possibly applying the rule again.' },
      ],
      explanation: 'L\'Hôpital\'s rule replaces $\\frac{f}{g}$ with $\\frac{f\'}{g\'}$ inside the limit. The quotient rule is the classic mix-up because both involve "derivative" and "fraction", but the quotient rule answers a different question (how fast the ratio changes), not what value the ratio approaches.',
    },
    {
      kind: 'concept',
      title: '$\\frac{\\infty}{\\infty}$, repeated use, and who grows fastest',
      blocks: [
        {
          type: 'p',
          text: 'The rule works just as well when top and bottom both blow up. And if the new limit is *still* indeterminate, check the form again and apply the rule again. This is how you settle the growth races that matter all over computer science.',
        },
        {
          type: 'derivation',
          title: '$\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$',
          steps: [
            { tex: '\\lim_{x \\to \\infty} \\frac{x^2}{e^x} \\quad \\left[\\tfrac{\\infty}{\\infty}\\right]', why: 'Both numerator and denominator grow without bound.' },
            { tex: '= \\lim_{x \\to \\infty} \\frac{2x}{e^x} \\quad \\left[\\tfrac{\\infty}{\\infty}\\right]', why: 'Apply the rule. The form is still $\\frac{\\infty}{\\infty}$, so the rule may be used again.' },
            { tex: '= \\lim_{x \\to \\infty} \\frac{2}{e^x}', why: 'Apply it a second time. Now the top is a constant.' },
            { tex: '= 0', why: 'A fixed numerator over a denominator that grows without bound tends to $0$.' },
          ],
          result: '$e^x$ beats $x^2$. Repeating the argument $n$ times shows $e^x$ beats $x^n$ for every power $n$.',
        },
        {
          type: 'derivation',
          title: '$\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}$',
          steps: [
            { tex: '\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}} \\quad \\left[\\tfrac{\\infty}{\\infty}\\right]', why: 'Both grow without bound, slowly.' },
            { tex: '= \\lim_{x \\to \\infty} \\frac{1/x}{1/(2\\sqrt{x})}', why: 'Differentiate: $(\\ln x)\' = \\frac{1}{x}$ and $(x^{1/2})\' = \\frac{1}{2}x^{-1/2}$.' },
            { tex: '= \\lim_{x \\to \\infty} \\frac{2\\sqrt{x}}{x} = \\lim_{x \\to \\infty} \\frac{2}{\\sqrt{x}} = 0', why: 'Simplify the compound fraction **before** deciding what to do next — here no second application is needed.' },
          ],
          result: 'Even $\\sqrt{x}$ beats $\\ln x$. In general $\\ln x \\ll x^p \\ll e^x$ for every $p > 0$.',
        },
        {
          type: 'table',
          headers: ['$x$', '$\\ln x$', '$\\sqrt{x}$', '$x^2$', '$e^x$'],
          rows: [
            ['$10$', '$\\approx 2.30$', '$\\approx 3.16$', '$100$', '$\\approx 22\\,026$'],
            ['$100$', '$\\approx 4.61$', '$10$', '$10\\,000$', '$\\approx 2.69 \\times 10^{43}$'],
          ],
          caption: 'The hierarchy in numbers: logarithms crawl, powers walk, exponentials explode.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'This is Big-O',
          text: 'When you compare algorithms, $O(\\log n) \\ll O(\\sqrt{n}) \\ll O(n^2) \\ll O(2^n)$ is exactly this growth hierarchy. A limit like $\\lim_{n \\to \\infty} \\frac{\\log n}{n} = 0$ (one application of L\'Hôpital) is the proof that binary search eventually beats linear search, no matter how the constants compare. And it is why an exponential-time pathfinder dies on large maps while an $O(n \\log n)$ one scales.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.',
      hint: 'After one application you get $\\frac{\\sin x}{2x}$. Is that still indeterminate?',
      answer: '1/2',
      answerTex: '\\frac{1}{2}',
      explanation: 'Form $\\frac{0}{0}$, so apply the rule: $\\lim \\frac{\\sin x}{2x}$. That is still $\\frac{0}{0}$, so apply it again: $\\lim \\frac{\\cos x}{2} = \\frac{1}{2}$. (You could also stop at $\\frac{\\sin x}{2x} = \\frac{1}{2} \\cdot \\frac{\\sin x}{x} \\to \\frac{1}{2}$.) This limit says $\\cos x \\approx 1 - \\frac{x^2}{2}$ near $0$ — the approximation game engines use for small-angle rotations.',
    },
    {
      kind: 'concept',
      title: 'When NOT to use it',
      blocks: [
        {
          type: 'p',
          text: 'L\'Hôpital\'s rule is powerful enough that students reach for it everywhere. Here are the four ways that goes wrong.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**The form is not indeterminate.** $\\lim_{x \\to 0} \\frac{\\cos x}{x + 1} = \\frac{1}{1} = 1$ by direct substitution. Blindly differentiating gives $\\lim \\frac{-\\sin x}{1} = 0$ — wrong. The rule\'s hypothesis is not decoration.',
            '**The derivative limit does not exist.** $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x}$ is $\\frac{\\infty}{\\infty}$, but $\\frac{f\'}{g\'} = 1 + \\cos x$ oscillates forever. The rule is silent, yet the original limit exists (see below).',
            '**It goes in circles.** $\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 + 1}}{x}$ becomes $\\lim \\frac{x/\\sqrt{x^2+1}}{1} = \\lim \\frac{x}{\\sqrt{x^2 + 1}}$, and applying it again brings back the original. Algebra wins: divide by $x$ to get $\\sqrt{1 + 1/x^2} \\to 1$.',
            '**It is circular reasoning.** Using the rule to prove $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ needs $(\\sin x)\' = \\cos x$, which was itself derived from that very limit.',
          ],
        },
        {
          type: 'compare',
          left: {
            title: "L'Hôpital: no conclusion",
            tone: 'bad',
            tex: ['\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} \\overset{?}{=} \\lim_{x \\to \\infty} (1 + \\cos x)', '\\text{(does not exist)}'],
            text: 'This does **not** show the original limit fails to exist; it just means the rule does not apply.',
          },
          right: {
            title: 'Algebra: done',
            tone: 'good',
            tex: ['\\frac{x + \\sin x}{x} = 1 + \\frac{\\sin x}{x}', '\\to 1 + 0 = 1'],
            text: '$|\\sin x| \\le 1$, so $\\frac{\\sin x}{x} \\to 0$ by the squeeze theorem.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors expect you to **write the form** — $\\left[\\frac{0}{0}\\right]$ or $\\left[\\frac{\\infty}{\\infty}\\right]$ — every single time you apply the rule. It shows you checked the hypothesis, and it is where most lost points come from: one application too many on a limit that was no longer indeterminate.',
        },
        {
          type: 'deepdive',
          title: "Why the rule is true (the $\\frac{0}{0}$ case)",
          blocks: [
            {
              type: 'p',
              text: 'The proof uses [[cauchy-mean-value-theorem|Cauchy\'s Mean Value Theorem]], a two-function version of the MVT: if $f$, $g$ are continuous on $[a, x]$, differentiable on $(a, x)$, and $g\' \\ne 0$ there, then for some $c$ between $a$ and $x$,',
            },
            { type: 'math', tex: '\\frac{f(x) - f(a)}{g(x) - g(a)} = \\frac{f\'(c)}{g\'(c)}' },
            {
              type: 'p',
              text: 'Define (or redefine) $f(a) = g(a) = 0$; this makes both continuous at $a$ because their limits are $0$. The left side becomes $\\frac{f(x)}{g(x)}$. As $x \\to a^+$, the point $c$ is trapped between $a$ and $x$, so $c \\to a^+$ too, and $\\frac{f\'(c)}{g\'(c)}$ approaches $\\lim \\frac{f\'}{g\'}$ — assuming that limit exists. The left-hand side is handled the same way. (Cauchy\'s theorem itself follows from Rolle\'s theorem applied to $h(t) = [f(x) - f(a)]\\,g(t) - [g(x) - g(a)]\\,f(t)$.)',
            },
          ],
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: "If $\\lim\\limits_{x \\to a} \\dfrac{f'(x)}{g'(x)}$ does not exist, then $\\lim\\limits_{x \\to a} \\dfrac{f(x)}{g(x)}$ does not exist either.",
      answer: false,
      explanation: 'L\'Hôpital\'s rule only works in one direction: *if* the derivative limit exists, the original limit equals it. When the derivative limit fails to exist, the rule tells you nothing. Counterexample: $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = 1$, while $\\frac{f\'}{g\'} = 1 + \\cos x$ has no limit.',
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\displaystyle\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 2x}$. Tap the first line that is wrong.',
      lines: [
        'Substituting $x = 2$ gives $\\frac{0}{0}$, an indeterminate form.',
        '$= \\displaystyle\\lim_{x \\to 2} \\frac{2x}{2x - 2}$ by L\'Hôpital\'s rule',
        '$= \\displaystyle\\lim_{x \\to 2} \\frac{2}{2}$ by L\'Hôpital\'s rule again',
        '$= 1$',
      ],
      errorLines: [3],
      explanation: 'After the first application, $\\frac{2x}{2x - 2}$ at $x = 2$ is $\\frac{4}{2}$ — **not** indeterminate. Applying the rule again is not allowed. The correct finish is direct substitution: $\\frac{4}{2} = 2$. Check by factoring: $\\frac{(x - 2)(x + 2)}{x(x - 2)} = \\frac{x + 2}{x} \\to \\frac{4}{2} = 2$.',
    },
    {
      kind: 'concept',
      title: 'Indeterminate products and differences',
      blocks: [
        {
          type: 'p',
          text: 'The rule only eats quotients. Two other forms show up constantly, and the strategy for both is the same: **rewrite as a quotient first**.',
        },
        {
          type: 'table',
          headers: ['Form', 'Example', 'Rewrite'],
          rows: [
            ['$0 \\cdot \\infty$', '$x \\ln x$ as $x \\to 0^+$', '$fg = \\dfrac{f}{1/g}$ or $\\dfrac{g}{1/f}$'],
            ['$\\infty - \\infty$', '$\\frac{1}{x} - \\frac{1}{e^x - 1}$ as $x \\to 0^+$', 'common denominator, factoring, or rationalising'],
          ],
        },
        {
          type: 'derivation',
          title: '$\\lim_{x \\to 0^+} x \\ln x \\quad [0 \\cdot (-\\infty)]$',
          steps: [
            { tex: 'x \\ln x = \\frac{\\ln x}{1/x}', why: 'Move $x$ to the denominator as $\\frac{1}{x}$. Now the form is $\\frac{-\\infty}{\\infty}$.' },
            { tex: '\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2}', why: "L'Hôpital: $(\\ln x)' = \\frac{1}{x}$ and $(x^{-1})' = -x^{-2}$." },
            { tex: '= \\lim_{x \\to 0^+} (-x) = 0', why: 'Simplify the compound fraction: $\\frac{1}{x} \\cdot \\frac{x^2}{-1} = -x$.' },
          ],
          result: '$x \\to 0$ wins the tug-of-war against $\\ln x \\to -\\infty$: the product tends to $0$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Choose the denominator wisely',
          text: 'You could also write $x \\ln x = \\frac{x}{1/\\ln x}$, but differentiating $\\frac{1}{\\ln x}$ makes things worse. Put the factor whose reciprocal is easy to differentiate (powers of $x$) in the denominator, and keep logarithms upstairs.',
        },
        {
          type: 'derivation',
          title: '$\\lim_{x \\to 0^+} \\left(\\frac{1}{x} - \\frac{1}{e^x - 1}\\right) \\quad [\\infty - \\infty]$',
          steps: [
            { tex: '\\frac{1}{x} - \\frac{1}{e^x - 1} = \\frac{e^x - 1 - x}{x(e^x - 1)}', why: 'Combine over the common denominator $x(e^x - 1)$. The form is now $\\frac{0}{0}$.' },
            { tex: '\\lim_{x \\to 0^+} \\frac{e^x - 1 - x}{x(e^x - 1)} = \\lim_{x \\to 0^+} \\frac{e^x - 1}{(e^x - 1) + x e^x}', why: "L'Hôpital; the denominator needs the product rule: $(x(e^x - 1))' = (e^x - 1) + x e^x$. Still $\\frac{0}{0}$." },
            { tex: '= \\lim_{x \\to 0^+} \\frac{e^x}{e^x + e^x + x e^x} = \\lim_{x \\to 0^+} \\frac{e^x}{2e^x + xe^x}', why: 'Apply the rule once more; differentiate $x e^x$ with the product rule again.' },
            { tex: '= \\frac{1}{2 + 0} = \\frac{1}{2}', why: 'No longer indeterminate: substitute $x = 0$.' },
          ],
          result: 'Two infinite quantities whose difference settles on $\\frac{1}{2}$ — impossible to guess from the form $\\infty - \\infty$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty} x \\ln\\!\\left(1 + \\frac{3}{x}\\right)$.',
      hint: 'Form $\\infty \\cdot 0$. Rewrite as $\\dfrac{\\ln(1 + 3/x)}{1/x}$ and apply the rule; the factors $-\\frac{1}{x^2}$ will cancel.',
      answer: '3',
      explanation: 'Rewrite as $\\frac{\\ln(1 + 3/x)}{1/x}$, form $\\frac{0}{0}$. Differentiate: the top gives $\\frac{1}{1 + 3/x} \\cdot \\left(-\\frac{3}{x^2}\\right)$ (chain rule) and the bottom gives $-\\frac{1}{x^2}$. Their ratio is $\\frac{3}{1 + 3/x} \\to 3$. This limit is the heart of the next card: it is $\\ln$ of $\\left(1 + \\frac{3}{x}\\right)^x$.',
    },
    {
      kind: 'concept',
      title: 'Indeterminate powers: take the log',
      blocks: [
        {
          type: 'p',
          text: 'Limits of the form $f(x)^{g(x)}$ are indeterminate in three cases: $1^\\infty$, $0^0$ and $\\infty^0$. In each, the base and the exponent pull in opposite directions. The trick is to bring the exponent down with a [[natural-logarithm]], which turns the power into a product you already know how to handle.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Name it', text: 'Let $y = f(x)^{g(x)}$, so $\\ln y = g(x) \\ln f(x)$.' },
            { title: 'Find the limit of the log', text: 'That product is a $0 \\cdot \\infty$ form; rewrite as a quotient and find $\\lim \\ln y = L$.' },
            { title: 'Exponentiate', text: 'Because $e^x$ is continuous, $\\lim y = e^{L}$. **Don\'t stop at $L$** — that is the limit of $\\ln y$, not of $y$.' },
          ],
        },
        {
          type: 'derivation',
          title: '$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x \\quad [1^\\infty]$',
          steps: [
            { tex: '\\ln y = x \\ln\\left(1 + \\tfrac{1}{x}\\right) = \\frac{\\ln(1 + 1/x)}{1/x}', why: 'Take logs, then move $x$ to the denominator. Form $\\frac{0}{0}$.' },
            { tex: '\\lim_{x \\to \\infty} \\frac{\\frac{1}{1 + 1/x} \\cdot \\left(-\\frac{1}{x^2}\\right)}{-\\frac{1}{x^2}} = \\lim_{x \\to \\infty} \\frac{1}{1 + 1/x} = 1', why: "L'Hôpital with the chain rule on top; the $-\\frac{1}{x^2}$ factors cancel." },
            { tex: '\\lim_{x \\to \\infty} y = e^1 = e', why: 'Exponentiate the limit of $\\ln y$.' },
          ],
          result: 'This is one of the standard definitions of $e \\approx 2.71828$.',
        },
        {
          type: 'graph',
          x: [0, 30],
          y: [0, 8],
          xStep: 5,
          functions: [{ expr: '(1 + a/x)^x', label: '$y = \\left(1 + \\frac{a}{x}\\right)^x$' }],
          hlines: [{ y: 'e^a', label: 'y = e^a' }],
          sliders: [{ name: 'a', min: -1, max: 2, step: 0.1, value: 1, label: '$a$' }],
          readouts: [{ label: '$e^a =$', expr: 'e^a', digits: 4 }],
          caption: 'The same argument gives $\\left(1 + \\frac{a}{x}\\right)^x \\to e^a$. Slide $a$ and watch the curve level off at the dashed line.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Frame-rate-independent damping',
          text: 'A game that does `velocity *= (1 - k * dt);` every frame behaves differently at 30 fps and 144 fps. Over one second there are $n = \\frac{1}{\\Delta t}$ frames, so the total factor is $\\left(1 - \\frac{k}{n}\\right)^n$, which tends to $e^{-k}$ as the frame rate grows. That limit is why careful engines write `velocity *= exp(-k * dt);` — it gives exactly $e^{-k}$ per second at *any* frame rate.',
        },
        {
          type: 'p',
          text: 'The $0^0$ case works the same way: for $\\lim_{x \\to 0^+} x^x$, $\\ln y = x \\ln x \\to 0$ (from the previous card), so $x^x \\to e^0 = 1$.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\lim\\limits_{x \\to \\infty} \\left(1 - \\frac{1}{x}\\right)^x$ in order.',
      lines: [
        'Let $y = \\left(1 - \\frac{1}{x}\\right)^x$, so $\\ln y = x \\ln\\left(1 - \\frac{1}{x}\\right)$',
        'Rewrite: $\\ln y = \\dfrac{\\ln(1 - 1/x)}{1/x}$, form $\\frac{0}{0}$',
        'L\'Hôpital: $\\dfrac{\\frac{1/x^2}{1 - 1/x}}{-1/x^2} = \\dfrac{-1}{1 - 1/x}$',
        'So $\\ln y \\to -1$',
        'Exponentiate: $y \\to e^{-1} = \\frac{1}{e}$',
      ],
      distractors: ['Since $1 - \\frac{1}{x} \\to 1$ and $1$ to any power is $1$, the limit is $1$'],
      explanation: 'The distractor is the classic $1^\\infty$ trap: the base approaches $1$ but is never equal to $1$, while the exponent grows without bound, so the two effects compete. Taking logs converts the power to a $\\frac{0}{0}$ quotient; the limit of $\\ln y$ is $-1$, and exponentiating gives $\\frac{1}{e} \\approx 0.368$.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\lim_{x \\to 0^+} (1 + 4x)^{1/(2x)}$. Give an exact answer (like `e^5`) or a decimal.',
      hint: 'Let $y = (1 + 4x)^{1/(2x)}$. Then $\\ln y = \\dfrac{\\ln(1 + 4x)}{2x}$, a $\\frac{0}{0}$ form.',
      answer: 'e^2',
      answerTex: 'e^2',
      explanation: 'Form $1^\\infty$. Take logs: $\\ln y = \\frac{\\ln(1 + 4x)}{2x}$. L\'Hôpital: $\\frac{4/(1 + 4x)}{2} \\to \\frac{4}{2} = 2$. So $\\ln y \\to 2$ and $y \\to e^2 \\approx 7.389$. A common mistake is answering $2$ — that is the limit of $\\ln y$, not of $y$.',
    },
    {
      kind: 'mcq',
      prompt: 'Which of these is **not** an indeterminate form? (Each describes $f(x)^{g(x)}$, $f - g$, etc., with $f$ and $g$ approaching the values shown.)',
      options: [
        { text: '$1^\\infty$', why: 'Indeterminate: $\\left(1 + \\frac{1}{x}\\right)^x \\to e$, but $\\left(1 + \\frac{1}{x^2}\\right)^x \\to 1$ and $\\left(1 + \\frac{1}{x}\\right)^{x^2} \\to \\infty$.' },
        { text: '$\\infty - \\infty$', why: 'Indeterminate: $(x + 5) - x \\to 5$, but $x^2 - x \\to \\infty$.' },
        { text: '$\\infty^0$', why: 'Indeterminate: the base grows while the exponent shrinks; $x^{1/x} \\to 1$, but $(e^x)^{1/x} = e$ for every $x$.' },
        { text: '$0^\\infty$', correct: true, why: 'Not indeterminate: a base heading to $0^+$ raised to an ever larger power is driven even harder toward $0$. The limit is always $0$.' },
      ],
      explanation: 'A form is indeterminate when knowing only the limits of the pieces does not determine the answer — different examples with the same form give different limits. For $0^\\infty$ (base $\\to 0^+$, exponent $\\to \\infty$), both effects push the same way: once the base is below $\\frac{1}{2}$ and the exponent is above $n$, the power is below $\\left(\\frac{1}{2}\\right)^n$. So the limit is $0$, every time.',
    },
  ],
  takeaways: [
    "L'Hôpital's rule: if $\\frac{f}{g}$ has the form $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ and $\\lim \\frac{f'}{g'}$ exists (or is $\\pm\\infty$), then $\\lim \\frac{f}{g} = \\lim \\frac{f'}{g'}$. Differentiate top and bottom separately — never the quotient rule.",
    'Check (and write) the form before every application; you may apply the rule repeatedly only while the form stays indeterminate.',
    'Growth hierarchy: $\\ln x \\ll x^p \\ll e^x$ for every $p > 0$ — the calculus behind Big-O comparisons.',
    'Rewrite $0 \\cdot \\infty$ as a quotient and $\\infty - \\infty$ with a common denominator; for $1^\\infty$, $0^0$, $\\infty^0$ take $\\ln$, find the limit $L$, and answer $e^L$.',
    'The rule fails or is silent when the form is not indeterminate, when $\\lim \\frac{f\'}{g\'}$ does not exist, or when it cycles; then use algebra or the squeeze theorem.',
  ],
  reading: [
    {
      title: "OpenStax Calculus Volume 1 — 4.8 L'Hôpital's Rule",
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-8-lhopitals-rule',
      source: 'openstax',
      note: 'Covers every indeterminate form in this lesson plus a section on growth rates of functions.',
    },
    {
      title: "Paul's Online Notes — L'Hospital's Rule and Indeterminate Forms",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/LHospitalsRule.aspx',
      source: 'paul',
      note: 'Lots of fully worked examples, including products, differences and powers.',
    },
    {
      title: "Wikipedia — L'Hôpital's rule",
      url: 'https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule',
      source: 'wikipedia',
      note: 'Precise statement, the proof via Cauchy\'s Mean Value Theorem, and a gallery of counterexamples when hypotheses fail.',
    },
  ],
};
