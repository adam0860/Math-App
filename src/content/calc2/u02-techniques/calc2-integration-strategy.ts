import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-integration-strategy',
  title: 'Strategy for Integration',
  summary: 'A decision checklist for choosing a technique, practice mixing all of them, tables and computer algebra, and integrals that cannot be done in closed form.',
  minutes: 17,
  objectives: [
    'Apply a four-step checklist (simplify, substitute, classify, try again) to an unfamiliar integral',
    'Recognise from the form of the integrand which technique is most likely to work',
    'Combine techniques, such as a substitution followed by integration by parts',
    'Use an integral table or a computer algebra system and interpret answers that look different from yours',
    'Identify integrals such as $\\int e^{-x^2}\\,dx$ that have no elementary antiderivative',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Why integration needs a strategy',
      blocks: [
        {
          type: 'p',
          text: 'Differentiation is an algorithm. Given any formula built from powers, exponentials, logs and trig functions, the [[power-rule]], [[product-rule]], [[quotient-rule]] and [[chain-rule]] will grind out the derivative every time, with no cleverness required.',
        },
        {
          type: 'p',
          text: 'Integration is different. There is no product rule for integrals and no chain rule for integrals. You now own a toolbox of methods ([[u-substitution]], [[integration-by-parts]], trig integrals, [[trig-substitution]], [[partial-fractions]]) but no single method works on everything. The skill this lesson builds is **choosing** the right tool, and recovering gracefully when the first choice fails.',
        },
        {
          type: 'heading',
          text: 'The basic table you should know cold',
        },
        {
          type: 'table',
          headers: ['Integrand', 'Antiderivative', 'Integrand', 'Antiderivative'],
          rows: [
            ['$x^n \\ (n \\ne -1)$', '$\\dfrac{x^{n+1}}{n+1}$', '$\\dfrac{1}{x}$', '$\\ln|x|$'],
            ['$e^x$', '$e^x$', '$a^x$', '$\\dfrac{a^x}{\\ln a}$'],
            ['$\\sin x$', '$-\\cos x$', '$\\cos x$', '$\\sin x$'],
            ['$\\sec^2 x$', '$\\tan x$', '$\\sec x \\tan x$', '$\\sec x$'],
            ['$\\tan x$', '$\\ln|\\sec x|$', '$\\sec x$', '$\\ln|\\sec x + \\tan x|$'],
            ['$\\dfrac{1}{x^2 + a^2}$', '$\\dfrac{1}{a}\\arctan\\dfrac{x}{a}$', '$\\dfrac{1}{\\sqrt{a^2 - x^2}}$', '$\\arcsin\\dfrac{x}{a}$'],
          ],
          caption: 'Every technique in this unit ends by reducing your integral to one of these. Add $+C$ to each.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why integration is harder than differentiation',
          text: 'Every derivative rule turns a combination of functions into another combination of the *same kinds* of functions. Going backwards, you have to guess which combination produced what you see, and the guess must account for every factor the chain rule or product rule created. A reverse process is a search, not a recipe. That is why practice in *recognising forms* matters more here than anywhere else in calculus.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'The four-step checklist',
      blocks: [
        {
          type: 'p',
          text: 'Stewart\'s textbook popularised a simple decision procedure. It will not solve every integral, but it organises your first sixty seconds so you are never staring at a blank page.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Simplify the integrand if possible',
              text: 'Expand products, split fractions, cancel, use trig identities. $\\int \\sqrt{x}(1 + \\sqrt{x})\\,dx = \\int (x^{1/2} + x)\\,dx$ needs no technique at all once expanded.',
            },
            {
              title: 'Look for an obvious substitution',
              text: 'Is some function $u = g(x)$ sitting in the integrand together with its derivative $g\'(x)$ (up to a constant factor)? Then $u$-substitution is the move.',
            },
            {
              title: 'Classify the integrand by its form',
              text: 'Trig powers → trig integrals. Rational function → partial fractions. $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, $\\sqrt{x^2 - a^2}$ → trig substitution. Product of unlike types such as $x^n e^x$, $x^n \\sin x$, $x^n \\ln x$ → integration by parts.',
            },
            {
              title: 'Try again',
              text: 'Manipulate the integrand (multiply by $1$ in a clever form, add and subtract a term, complete the square), try a less obvious substitution, relate it to a problem you have solved, or combine two methods.',
            },
          ],
        },
        {
          type: 'derivation',
          title: 'Step 1 in action: $\\displaystyle\\int \\frac{\\sin x + \\sec x}{\\tan x}\\,dx$',
          steps: [
            { tex: '\\int \\frac{\\sin x + \\sec x}{\\tan x}\\,dx = \\int \\left( \\frac{\\sin x}{\\tan x} + \\frac{\\sec x}{\\tan x} \\right) dx', why: 'Split the fraction: a sum over a single denominator is a sum of fractions.' },
            { tex: '= \\int \\left( \\sin x \\cdot \\frac{\\cos x}{\\sin x} + \\frac{1}{\\cos x} \\cdot \\frac{\\cos x}{\\sin x} \\right) dx', why: 'Rewrite in sines and cosines: $\\frac{1}{\\tan x} = \\frac{\\cos x}{\\sin x}$ and $\\sec x = \\frac{1}{\\cos x}$.' },
            { tex: '= \\int (\\cos x + \\csc x)\\,dx', why: 'Cancel: the first term leaves $\\cos x$, the second leaves $\\frac{1}{\\sin x} = \\csc x$.' },
            { tex: '= \\sin x + \\ln|\\csc x - \\cot x| + C', why: 'Both are table integrals. $\\int \\csc x\\,dx = \\ln|\\csc x - \\cot x| + C$ (the cosecant twin of $\\int \\sec x\\,dx$).' },
          ],
          result: 'A scary-looking quotient was two table integrals in disguise. No technique was needed, only algebra.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The u-substitution test',
          text: 'Before reaching for anything heavy, ask: "is the derivative of some piece of this integrand also sitting here?" In $\\int \\frac{x}{x^2 + 4}\\,dx$ the numerator $x$ is half the derivative of $x^2 + 4$. Spotting that saves you a page of trig substitution.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is the most efficient first move for $\\displaystyle\\int \\frac{x}{x^2 + 4}\\,dx$?',
      options: [
        {
          text: 'Substitute $u = x^2 + 4$',
          correct: true,
          why: 'Then $du = 2x\\,dx$, so the integral is $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln(x^2 + 4) + C$. Two lines.',
        },
        {
          text: 'Partial fractions',
          why: 'Partial fractions needs a factorable denominator, and $x^2 + 4$ is irreducible over the reals. The fraction is already as decomposed as it gets.',
        },
        {
          text: 'Trig substitution $x = 2\\tan\\theta$',
          why: 'This does work eventually, but it is far longer than necessary. Trig substitution is for when no simpler substitution exists.',
        },
        {
          text: 'Integration by parts with $u = x$',
          why: 'Then $dv = \\frac{dx}{x^2 + 4}$ gives $v = \\frac{1}{2}\\arctan\\frac{x}{2}$, and $\\int v\\,du$ is harder than the original integral.',
        },
      ],
      explanation: 'Step 2 of the checklist: the numerator $x$ is (up to the factor $2$) the derivative of the denominator $x^2 + 4$. Whenever $\\frac{g\'(x)}{g(x)}$ appears, $u = g(x)$ turns it into $\\int \\frac{du}{u} = \\ln|u|$. Here $\\int \\frac{x}{x^2+4}\\,dx = \\frac{1}{2}\\ln(x^2 + 4) + C$ (no absolute value needed because $x^2 + 4 > 0$).',
    },
    {
      kind: 'concept',
      title: 'Step 3: read the form of the integrand',
      blocks: [
        {
          type: 'p',
          text: 'Most integrals in a calculus course announce their technique through their shape. Train your eye on this table until the column on the right comes to mind automatically.',
        },
        {
          type: 'table',
          headers: ['If the integrand looks like…', 'Try…', 'Example'],
          rows: [
            ['$f(g(x))\\,g\'(x)$', '$u$-substitution, $u = g(x)$', '$\\int x\\,e^{x^2}\\,dx$'],
            ['$x^n e^{ax}$, $x^n \\sin ax$, $x^n \\ln x$, $\\arctan x$', 'integration by parts', '$\\int x \\ln x\\,dx$'],
            ['$\\sin^m x \\cos^n x$, $\\tan^m x \\sec^n x$', 'trig integrals (identities)', '$\\int \\sin^3 x \\cos^2 x\\,dx$'],
            ['$\\sqrt{a^2 - x^2}$', '$x = a\\sin\\theta$', '$\\int \\sqrt{9 - x^2}\\,dx$'],
            ['$\\sqrt{a^2 + x^2}$', '$x = a\\tan\\theta$', '$\\int \\frac{dx}{\\sqrt{x^2 + 4}}$'],
            ['$\\sqrt{x^2 - a^2}$', '$x = a\\sec\\theta$', '$\\int \\frac{\\sqrt{x^2 - 1}}{x}\\,dx$'],
            ['$\\frac{P(x)}{Q(x)}$, $Q$ factors', 'partial fractions (divide first if $\\deg P \\ge \\deg Q$)', '$\\int \\frac{x + 5}{x^2 + x - 2}\\,dx$'],
            ['$\\sqrt[n]{g(x)}$ that resists the above', 'rationalising substitution $u = \\sqrt[n]{g(x)}$', '$\\int e^{\\sqrt{x}}\\,dx$'],
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Look-alikes, different tools',
            tone: 'neutral',
            tex: [
              '\\int \\frac{x}{\\sqrt{1 - x^2}}\\,dx \\;\\to\\; u = 1 - x^2',
              '\\int \\frac{1}{\\sqrt{1 - x^2}}\\,dx \\;\\to\\; \\arcsin x \\text{ (table)}',
              '\\int \\sqrt{1 - x^2}\\,dx \\;\\to\\; x = \\sin\\theta',
            ],
          },
          right: {
            title: 'More look-alikes',
            tone: 'neutral',
            tex: [
              '\\int \\frac{2x}{x^2 + 1}\\,dx \\;\\to\\; u = x^2 + 1',
              '\\int \\frac{1}{x^2 + 1}\\,dx \\;\\to\\; \\arctan x \\text{ (table)}',
              '\\int \\frac{1}{x^2 - 1}\\,dx \\;\\to\\; \\text{partial fractions}',
            ],
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'One small factor changes everything',
          text: 'An extra $x$ in the numerator often turns a hard integral into an easy substitution, and its absence can turn an easy one into a trig substitution. Read the integrand character by character before you commit. A changed sign under a square root ($1 - x^2$ vs $x^2 - 1$) changes the substitution too.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Match each integral to the technique you would try first.',
      template: '$\\int x^2 \\cos x\\,dx$ → ___ .  $\\int \\frac{dx}{x^2\\sqrt{16 - x^2}}$ → ___ .  $\\int \\frac{3x - 1}{(x - 1)(x + 2)}\\,dx$ → ___ .',
      blanks: [{ answers: ['integration by parts'] }, { answers: ['trig substitution'] }, { answers: ['partial fractions'] }],
      wordBank: ['integration by parts', 'trig substitution', 'partial fractions', '$u$-substitution', 'a table integral'],
      explanation: '$x^2 \\cos x$ is a power of $x$ times a trig function: parts with $u = x^2$ (twice) lowers the power to zero. $\\sqrt{16 - x^2}$ has the form $\\sqrt{a^2 - x^2}$ with $a = 4$, so $x = 4\\sin\\theta$. $\\frac{3x - 1}{(x-1)(x+2)}$ is a proper rational function with a factored denominator: decompose into $\\frac{A}{x - 1} + \\frac{B}{x + 2}$. None of them has a derivative of an inner piece sitting in front, so $u$-substitution is not the first move.',
    },
    {
      kind: 'concept',
      title: 'Step 4: combine techniques',
      blocks: [
        {
          type: 'p',
          text: 'Real integrals often need two methods in a row. A common pattern: a substitution removes an awkward inner function, and what is left is a standard by-parts or partial-fractions problem. The substitution $u = \\sqrt[n]{g(x)}$, which rewrites $x$ in terms of $u$ so the root disappears, is called a **rationalising substitution**.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int e^{\\sqrt{x}}\\,dx$',
          steps: [
            { tex: 'w = \\sqrt{x}, \\quad x = w^2, \\quad dx = 2w\\,dw', why: 'No derivative of $\\sqrt{x}$ is visible, so $u$-substitution in the usual sense fails. Instead solve for $x$: $x = w^2$, then differentiate to get $dx = 2w\\,dw$.' },
            { tex: '\\int e^{\\sqrt{x}}\\,dx = \\int e^{w} \\cdot 2w\\,dw = 2\\int w\\,e^{w}\\,dw', why: 'Replace every $x$-piece. The root has vanished and we are left with a power times an exponential.' },
            { tex: '\\int w\\,e^{w}\\,dw = w\\,e^{w} - \\int e^{w}\\,dw', why: 'Integration by parts with $u = w$ (gets simpler when differentiated) and $dv = e^w\\,dw$, so $du = dw$ and $v = e^w$.' },
            { tex: '= w\\,e^{w} - e^{w} + C', why: 'The remaining integral is basic.' },
            { tex: '\\int e^{\\sqrt{x}}\\,dx = 2(w - 1)e^{w} + C = 2(\\sqrt{x} - 1)e^{\\sqrt{x}} + C', why: 'Multiply by $2$ and substitute back $w = \\sqrt{x}$. The answer must be in terms of the original variable.' },
          ],
          result: '$\\int e^{\\sqrt{x}}\\,dx = 2(\\sqrt{x} - 1)e^{\\sqrt{x}} + C$. Check: differentiating gives $2 \\cdot \\frac{1}{2\\sqrt{x}} e^{\\sqrt{x}} + 2(\\sqrt{x} - 1)e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}} = e^{\\sqrt{x}}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why differentiate your answer?',
          text: 'Checking an antiderivative is pure algorithm (differentiation), while finding it was a search. Thirty seconds of differentiating catches dropped factors of $2$, sign errors and missed chain-rule terms. Instructors expect you to do this on exams whenever time allows.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use the same two-step plan (rationalising substitution, then parts) to find $\\displaystyle\\int \\sin\\sqrt{x}\\,dx$.',
      label: '$\\int \\sin\\sqrt{x}\\,dx =$',
      answer: '2sin(sqrt(x)) - 2sqrt(x)cos(sqrt(x))',
      answerTex: '2\\sin\\sqrt{x} - 2\\sqrt{x}\\cos\\sqrt{x} + C',
      upToConstant: true,
      domain: [0.2, 9],
      hint: 'With $w = \\sqrt{x}$, $dx = 2w\\,dw$ and the integral becomes $2\\int w \\sin w\\,dw$. Parts: $u = w$, $dv = \\sin w\\,dw$.',
      explanation: 'Let $w = \\sqrt{x}$, so $x = w^2$ and $dx = 2w\\,dw$: $\\int \\sin\\sqrt{x}\\,dx = 2\\int w \\sin w\\,dw$. By parts with $u = w$, $v = -\\cos w$: $\\int w \\sin w\\,dw = -w\\cos w + \\int \\cos w\\,dw = -w\\cos w + \\sin w$. Multiply by $2$ and back-substitute: $2\\sin\\sqrt{x} - 2\\sqrt{x}\\cos\\sqrt{x} + C$.',
    },
    {
      kind: 'concept',
      title: 'Manipulate the integrand',
      blocks: [
        {
          type: 'p',
          text: 'When nothing in the table matches, change the integrand into something that does. Three tricks cover most cases: **add and subtract** a term, **multiply by $1$** in a useful form, and **complete the square** in a quadratic.',
        },
        {
          type: 'derivation',
          title: 'Add and subtract: $\\displaystyle\\int \\frac{dx}{1 + e^{x}}$',
          steps: [
            { tex: '\\frac{1}{1 + e^x} = \\frac{(1 + e^x) - e^x}{1 + e^x}', why: 'Add and subtract $e^x$ in the numerator. The value is unchanged, but now the numerator contains a copy of the denominator.' },
            { tex: '= 1 - \\frac{e^x}{1 + e^x}', why: 'Split the fraction. The second piece has its denominator\'s derivative $e^x$ on top.' },
            { tex: '\\int \\frac{dx}{1 + e^x} = x - \\ln(1 + e^x) + C', why: 'Integrate term by term; $\\int \\frac{e^x}{1+e^x}\\,dx = \\ln(1 + e^x)$ by $u = 1 + e^x$. No absolute value: $1 + e^x > 0$.' },
          ],
          result: 'Another route multiplies top and bottom by $e^{-x}$ to get $\\int \\frac{e^{-x}}{e^{-x} + 1}\\,dx = -\\ln(1 + e^{-x}) + C$. Since $-\\ln(1 + e^{-x}) = -\\ln\\frac{e^x + 1}{e^x} = x - \\ln(1 + e^x)$, the two answers agree exactly.',
        },
        {
          type: 'derivation',
          title: 'Complete the square: $\\displaystyle\\int \\frac{dx}{x^2 + 4x + 8}$',
          steps: [
            { tex: 'x^2 + 4x + 8 = (x^2 + 4x + 4) + 4 = (x + 2)^2 + 4', why: 'The discriminant $16 - 32 < 0$, so the quadratic does not factor and partial fractions is out. Half of $4$ is $2$; add and subtract $2^2 = 4$.' },
            { tex: '\\int \\frac{dx}{(x + 2)^2 + 2^2} = \\int \\frac{du}{u^2 + 2^2}', why: 'Substitute $u = x + 2$, $du = dx$. Now it matches the table form $\\frac{1}{u^2 + a^2}$ with $a = 2$.' },
            { tex: '= \\frac{1}{2}\\arctan\\frac{u}{2} + C = \\frac{1}{2}\\arctan\\frac{x + 2}{2} + C', why: 'Apply $\\int \\frac{du}{u^2 + a^2} = \\frac{1}{a}\\arctan\\frac{u}{a} + C$, then back-substitute.' },
          ],
          result: '$\\int \\frac{dx}{x^2 + 4x + 8} = \\frac{1}{2}\\arctan\\frac{x + 2}{2} + C$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam integrals are often designed so that the obvious technique fails and a small manipulation saves the day. If you have spent two minutes on an approach and the integral keeps getting worse, stop and run the checklist again from step 1. Partial credit usually rewards a correct setup more than a long wrong calculation.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\int \\frac{dx}{x^2 - 6x + 13}$. Tap the first line that is wrong.',
      lines: [
        '$x^2 - 6x + 13 = (x - 3)^2 + 4$',
        '$\\int \\frac{dx}{(x - 3)^2 + 4} = \\int \\frac{du}{u^2 + 4}$ with $u = x - 3$',
        '$= \\arctan\\frac{u}{2} + C$',
        '$= \\arctan\\frac{x - 3}{2} + C$',
      ],
      errorLines: [3],
      explanation: 'Line 3 drops the factor $\\frac{1}{a}$: $\\int \\frac{du}{u^2 + a^2} = \\frac{1}{a}\\arctan\\frac{u}{a} + C$, and here $a = 2$. The completed square is right ($x^2 - 6x + 9 + 4$) and so is the substitution. The correct answer is $\\frac{1}{2}\\arctan\\frac{x - 3}{2} + C$; differentiating the student\'s answer gives $\\frac{2}{(x-3)^2 + 4}$, twice the integrand, which is how you would catch this yourself.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^1 x\\,e^{2x}\\,dx$. Give an exact answer or a decimal to at least 3 places.',
      label: '$\\int_0^1 x e^{2x}\\,dx =$',
      answer: '(e^2 + 1)/4',
      answerTex: '\\frac{e^2 + 1}{4}',
      minDecimals: 3,
      hint: 'Power of $x$ times an exponential: parts with $u = x$, $dv = e^{2x}\\,dx$, so $v = \\frac{1}{2}e^{2x}$.',
      explanation: 'With $u = x$ and $v = \\frac{1}{2}e^{2x}$: $\\int_0^1 x e^{2x}\\,dx = \\left[\\frac{x}{2}e^{2x}\\right]_0^1 - \\frac{1}{2}\\int_0^1 e^{2x}\\,dx = \\frac{e^2}{2} - \\frac{1}{4}(e^2 - 1) = \\frac{e^2 + 1}{4} \\approx 2.097$. Sanity check: the integrand is between $0$ and $e^2 \\approx 7.39$ on $[0, 1]$ and grows quickly, so an answer around $2$ is believable.',
    },
    {
      kind: 'concept',
      title: 'Tables and computer algebra',
      blocks: [
        {
          type: 'p',
          text: 'Working mathematicians and engineers rarely integrate long expressions by hand. They use **integral tables** (hundreds of pre-solved forms, printed at the back of most calculus books) and [[computer-algebra-system|computer algebra systems]] (CAS) such as Wolfram Alpha, Mathematica, Maple or the free Python library SymPy.',
        },
        {
          type: 'p',
          text: 'Using a table is a matching game: massage your integral until it fits an entry exactly, then read off the answer. A typical entry:',
        },
        {
          type: 'math',
          tex: '\\int \\frac{du}{u(a + bu)} = \\frac{1}{a}\\ln\\left|\\frac{u}{a + bu}\\right| + C',
        },
        {
          type: 'derivation',
          title: 'Use the entry for $\\displaystyle\\int \\frac{dx}{x(3 + 2x)}$',
          steps: [
            { tex: 'u = x, \\quad a = 3, \\quad b = 2', why: 'Match the integrand term by term with $\\frac{1}{u(a + bu)}$.' },
            { tex: '\\int \\frac{dx}{x(3 + 2x)} = \\frac{1}{3}\\ln\\left|\\frac{x}{3 + 2x}\\right| + C', why: 'Substitute into the formula. (Partial fractions would give the same thing; the table just skips the work.)' },
          ],
          result: 'Derivative check: $\\frac{1}{3}\\left(\\frac{1}{x} - \\frac{2}{3 + 2x}\\right) = \\frac{1}{3}\\cdot\\frac{3}{x(3 + 2x)} = \\frac{1}{x(3 + 2x)}$. ✓',
        },
        {
          type: 'code',
          lang: 'shell',
          title: 'Asking SymPy',
          code: `$ python3 -c "from sympy import *; x = symbols('x'); print(integrate(sin(x)*cos(x), x))"
sin(x)**2/2
$ python3 -c "from sympy import *; x = symbols('x'); print(integrate(1/x, x))"
log(x)`,
          annotations: [
            { lines: 2, text: 'By hand with $u = \\cos x$ you might get $-\\frac{1}{2}\\cos^2 x$. Both are correct: they differ by the constant $\\frac{1}{2}$.' },
            { lines: 4, text: 'SymPy omits the absolute value in $\\ln|x|$ (it works over complex numbers). On paper you must write $\\ln|x| + C$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Trust, but differentiate',
          text: 'A CAS answer can look nothing like yours. It may use a different but equivalent form ($-\\frac{1}{4}\\cos 2x$ for $\\frac{1}{2}\\sin^2 x$), drop absolute values, omit $+C$, or introduce special functions you have never seen. The universal check is the same one you use by hand: differentiate the answer and simplify the difference with the integrand to $0$.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'You find $\\int \\sin x \\cos x\\,dx = \\frac{1}{2}\\sin^2 x + C$, while a CAS reports $-\\frac{1}{4}\\cos 2x$. One of the two answers must be wrong.',
      answer: false,
      explanation: 'Use $\\cos 2x = 1 - 2\\sin^2 x$: then $-\\frac{1}{4}\\cos 2x = -\\frac{1}{4} + \\frac{1}{2}\\sin^2 x$. The two antiderivatives differ only by the constant $-\\frac{1}{4}$, which the $+C$ absorbs. Antiderivatives of the same function on an interval always differ by a constant (a consequence of the [[mean-value-theorem]]), so different-looking answers are often both correct.',
    },
    {
      kind: 'expr',
      prompt: 'Use the table entry $\\int \\frac{du}{u(a + bu)} = \\frac{1}{a}\\ln\\left|\\frac{u}{a + bu}\\right| + C$ to find $\\displaystyle\\int \\frac{dx}{x(5 + x)}$ for $x > 0$.',
      label: '$\\int \\frac{dx}{x(5 + x)} =$',
      answer: '(1/5)ln(x/(5 + x))',
      answerTex: '\\frac{1}{5}\\ln\\left|\\frac{x}{5 + x}\\right| + C',
      upToConstant: true,
      domain: [0.5, 5],
      hint: 'Here $u = x$, $a = 5$ and $b = 1$.',
      explanation: 'Matching gives $a = 5$, $b = 1$, so the answer is $\\frac{1}{5}\\ln\\left|\\frac{x}{5 + x}\\right| + C$. Equivalent forms such as $\\frac{1}{5}(\\ln x - \\ln(5 + x))$ are also accepted; that is exactly what partial fractions $\\frac{1}{x(5+x)} = \\frac{1/5}{x} - \\frac{1/5}{5 + x}$ produce.',
    },
    {
      kind: 'concept',
      title: 'Integrals that cannot be done',
      blocks: [
        {
          type: 'p',
          text: 'Here is a surprising fact: some perfectly innocent integrals have **no** antiderivative that can be written with a finite formula. The integrand is continuous, so by the [[fundamental-theorem-of-calculus]] an antiderivative exists, namely $F(x) = \\int_0^x e^{-t^2}\\,dt$. It just is not an [[nonelementary-integral|elementary function]]: no finite combination of polynomials, roots, exponentials, logs, trig and inverse trig functions equals it.',
        },
        {
          type: 'list',
          items: [
            '$\\int e^{-x^2}\\,dx$ — the Gaussian (bell curve) of statistics',
            '$\\int \\frac{\\sin x}{x}\\,dx$ and $\\int \\sin(x^2)\\,dx$ — appear in optics and signal processing',
            '$\\int \\frac{1}{\\ln x}\\,dx$ and $\\int \\frac{e^x}{x}\\,dx$ — appear in number theory',
            '$\\int \\sqrt{1 + x^3}\\,dx$ and $\\int \\sqrt{1 - k^2\\sin^2 x}\\,dx$ — the second gives the arc length of an ellipse',
          ],
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-0.3, 1.3],
          functions: [{ expr: 'e^(-x^2)', label: '$y = e^{-x^2}$' }],
          areas: [{ expr: 'e^(-x^2)', from: 0, to: 'b' }],
          sliders: [{ name: 'b', min: 0, max: 3, step: 0.05, value: 1, label: '$b$' }],
          caption: 'The shaded area $\\int_0^b e^{-x^2}\\,dx$ is a perfectly well-defined number for every $b$ (about $0.7468$ when $b = 1$). We just cannot write it as a formula in $b$. The next lesson computes such areas numerically; the lesson after shows the total area under the whole curve is exactly $\\sqrt{\\pi}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not confuse $e^{-x^2}$ with $x e^{-x^2}$',
          text: 'Add one factor of $x$ and the problem becomes easy: $\\int x e^{-x^2}\\,dx = -\\frac{1}{2}e^{-x^2} + C$ by $u = -x^2$. The extra $x$ is precisely the derivative of the inner function (up to a constant) that $u$-substitution needs.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Proving impossibility',
          text: 'In the 1830s Joseph Liouville developed a theory that can *prove* that certain integrals have no elementary antiderivative. In 1969 Robert Risch turned these ideas into an algorithm, which is the backbone of how modern CAS software decides whether an elementary antiderivative exists at all.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Gaussians in games',
          text: 'The bell curve $e^{-x^2}$ is everywhere in graphics: Gaussian blur kernels, bloom, soft shadows, and normally distributed random spread for bullet patterns or procedural terrain. Libraries ship its integral as a special function: C++ has `std::erf` in `<cmath>`, where $\\operatorname{erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_0^x e^{-t^2}\\,dt$, computed numerically rather than from a formula.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these integrals has an elementary antiderivative?',
      options: [
        {
          text: '$\\int e^{-x^2}\\,dx$',
          why: 'The classic non-elementary integral. Its antiderivative is expressed with the special function $\\operatorname{erf}$.',
        },
        {
          text: '$\\int \\sin(x^2)\\,dx$',
          why: 'Non-elementary (a Fresnel integral). Without an extra factor of $x$ there is nothing for a substitution to use.',
        },
        {
          text: '$\\int x\\sin(x^2)\\,dx$',
          correct: true,
          why: 'With $u = x^2$, $du = 2x\\,dx$: the answer is $-\\frac{1}{2}\\cos(x^2) + C$.',
        },
        {
          text: '$\\int \\frac{\\sin x}{x}\\,dx$',
          why: 'Non-elementary (the sine integral, $\\operatorname{Si}(x)$). Parts and substitution both go in circles.',
        },
      ],
      explanation: 'Only $x\\sin(x^2)$ carries the derivative of its inner function: $\\frac{d}{dx}x^2 = 2x$. That one factor makes $u$-substitution work. The other three are famous examples of continuous functions whose antiderivatives exist but are not elementary.',
    },
    {
      kind: 'expr',
      prompt: 'Find $\\displaystyle\\int x\\,e^{-x^2}\\,dx$.',
      label: '$\\int x e^{-x^2}\\,dx =$',
      answer: '-(1/2)e^(-x^2)',
      answerTex: '-\\frac{1}{2}e^{-x^2} + C',
      upToConstant: true,
      domain: [-2, 2],
      hint: 'Let $u = -x^2$. What is $du$?',
      explanation: 'With $u = -x^2$, $du = -2x\\,dx$, so $x\\,dx = -\\frac{1}{2}du$ and $\\int x e^{-x^2}\\,dx = -\\frac{1}{2}\\int e^u\\,du = -\\frac{1}{2}e^{-x^2} + C$. Check: $\\frac{d}{dx}\\left(-\\frac{1}{2}e^{-x^2}\\right) = -\\frac{1}{2}e^{-x^2}\\cdot(-2x) = x e^{-x^2}$. Compare with $\\int e^{-x^2}\\,dx$, which no technique can finish.',
    },
  ],
  takeaways: [
    'Integration is pattern recognition: run the checklist (simplify, look for a substitution, classify by form, try again) before calculating.',
    'The form of the integrand suggests the tool: $f(g(x))g\'(x)$ → substitution; $x^n e^x$, $x^n\\sin x$, $x^n\\ln x$ → parts; trig powers → identities; $\\sqrt{a^2 \\pm x^2}$ → trig substitution; rational → partial fractions.',
    'Hard integrals often need a manipulation (add and subtract, multiply by 1, complete the square) or two techniques in sequence.',
    'Tables and CAS are legitimate tools; their answers may differ from yours by a constant or in form, so verify by differentiating.',
    'Some continuous functions, like $e^{-x^2}$ and $\\frac{\\sin x}{x}$, have antiderivatives that are not elementary; their integrals are computed numerically or with special functions.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 3.5 Other Strategies for Integration',
      url: 'https://openstax.org/books/calculus-volume-2/pages/3-5-other-strategies-for-integration',
      source: 'openstax',
      note: 'Covers integral tables and computer algebra systems with worked examples.',
    },
    {
      title: "Paul's Online Notes — Integration Strategy",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationStrategy.aspx',
      source: 'paul',
      note: 'A step-by-step decision procedure with many mixed examples to practise on.',
    },
    {
      title: 'Wikipedia — Nonelementary integral',
      url: 'https://en.wikipedia.org/wiki/Nonelementary_integral',
      source: 'wikipedia',
      note: 'A list of famous integrals with no elementary antiderivative and the theory behind them.',
    },
  ],
};
