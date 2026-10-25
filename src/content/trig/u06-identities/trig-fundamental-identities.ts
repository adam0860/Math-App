import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-fundamental-identities',
  title: 'The Fundamental Identities',
  summary: 'Reciprocal, quotient, Pythagorean and even-odd identities: the rewrite rules of trigonometry, and why each one is true.',
  minutes: 18,
  objectives: [
    'Explain the difference between an equation and an identity, and how to disprove a false identity',
    'State the reciprocal, quotient, Pythagorean and even-odd identities and justify each from the unit circle',
    'Use one trig value plus the quadrant to find all six trig values',
    'Simplify trig expressions by rewriting in sines and cosines, combining, and applying $\\sin^2 x + \\cos^2 x = 1$',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Equations versus identities',
      blocks: [
        {
          type: 'p',
          text: 'The equation $\\sin x = \\frac{1}{2}$ is true for *some* values of $x$ (like $\\frac{\\pi}{6}$) and false for others. Solving it means finding those special values. The equation $\\sin^2 x + \\cos^2 x = 1$ is a different animal: it is true for **every** $x$ you can plug in. There is nothing to solve — the two sides are the same function wearing different clothes.',
        },
        {
          type: 'definition',
          term: 'Trigonometric identity',
          text: 'A [[trig-identity]] is an equation involving trig functions that is true for **every** value of the variable for which both sides are defined. Two expressions related by an identity are interchangeable: you may replace one by the other anywhere.',
        },
        {
          type: 'graph',
          x: [-6.5, 6.5],
          y: [-0.5, 1.5],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)^2', label: '$y = \\sin^2 x$', color: 'blue' },
            { expr: 'cos(x)^2', label: '$y = \\cos^2 x$', color: 'red' },
            { expr: 'sin(x)^2 + cos(x)^2', label: '$y = \\sin^2 x + \\cos^2 x$', color: 'green' },
          ],
          caption: 'Whenever $\\sin^2 x$ rises, $\\cos^2 x$ falls by exactly the same amount, so their sum is the flat line $y = 1$. An identity is two graphs that coincide everywhere.',
        },
        {
          type: 'p',
          text: 'In this lesson you will meet the handful of **fundamental identities** that every other identity in trigonometry (and many manipulations in calculus) is built from. For each one you will see *why* it is true — none of them needs to be memorised as a mysterious fact, because each falls straight out of the unit circle.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why testing values can disprove but never prove',
          text: 'To show an equation is **not** an identity, one counterexample is enough: $\\sin x + \\cos x = 1$ holds at $x = 0$ and $x = \\frac{\\pi}{2}$, but at $x = \\frac{\\pi}{4}$ the left side is $\\sqrt{2} \\approx 1.41$. To show it **is** an identity, checking values is never enough — there are infinitely many $x$ and you can only test finitely many. Proof needs algebra built on identities already known to be true.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Identities are refactorings',
          text: 'An identity is like a refactoring that provably preserves behaviour: `sin(x)*sin(x) + cos(x)*cos(x)` and `1.0` return the same value for every input (up to floating-point rounding), so a compiler or a programmer may swap one for the other. Game and graphics code uses these rewrites constantly to avoid calling expensive trig functions twice.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: '$\\sin x + \\cos x = 1$ is an identity, because it is true at $x = 0$ and at $x = \\frac{\\pi}{2}$.',
      answer: false,
      explanation: 'Two successful checks prove nothing. At $x = \\frac{\\pi}{4}$, $\\sin x + \\cos x = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2} \\neq 1$, and at $x = \\pi$ it equals $-1$. A single counterexample is enough to show an equation is **not** an identity. (The true identity squares each term: $\\sin^2 x + \\cos^2 x = 1$.)',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Reciprocal and quotient identities',
      blocks: [
        {
          type: 'p',
          text: 'Recall the unit-circle definitions: if the [[terminal-side]] of angle $\\theta$ meets the [[unit-circle]] at $(x, y)$, then $\\cos\\theta = x$ and $\\sin\\theta = y$. The other four functions were *defined* as ratios of these two coordinates. Rewriting those definitions in terms of sine and cosine gives the first two families of identities.',
        },
        {
          type: 'table',
          headers: ['Function', 'Unit-circle definition', 'Identity', 'Undefined when'],
          rows: [
            ['$\\tan\\theta$', '$\\frac{y}{x}$', '$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$', '$\\cos\\theta = 0$'],
            ['$\\cot\\theta$', '$\\frac{x}{y}$', '$\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}$', '$\\sin\\theta = 0$'],
            ['$\\sec\\theta$', '$\\frac{1}{x}$', '$\\sec\\theta = \\frac{1}{\\cos\\theta}$', '$\\cos\\theta = 0$'],
            ['$\\csc\\theta$', '$\\frac{1}{y}$', '$\\csc\\theta = \\frac{1}{\\sin\\theta}$', '$\\sin\\theta = 0$'],
          ],
          caption: 'The [[quotient-identities]] (tan and cot) and the [[reciprocal-identities]] (sec, csc, and cot as $1/\\tan$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these are true',
          text: 'There is nothing to prove beyond substitution: $\\tan\\theta = \\frac{y}{x}$ by definition, and $y = \\sin\\theta$, $x = \\cos\\theta$. These identities are the definitions themselves, rewritten. That is exactly why "rewrite everything in sines and cosines" is the universal first move when simplifying: it translates every trig function back into the two coordinates it came from.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\cot x \\sec x$',
          steps: [
            { tex: '\\cot x \\sec x', why: 'Two different functions multiplied — a sign that rewriting will help.' },
            { tex: '= \\frac{\\cos x}{\\sin x} \\cdot \\frac{1}{\\cos x}', why: 'Quotient identity for $\\cot x$, reciprocal identity for $\\sec x$.' },
            { tex: '= \\frac{\\cancel{\\cos x}}{\\sin x \\, \\cancel{\\cos x}}', why: 'Multiply the fractions; $\\cos x$ appears on top and bottom. Cancelling is allowed wherever $\\cos x \\neq 0$, which is exactly where $\\sec x$ was defined in the first place.' },
            { tex: '= \\frac{1}{\\sin x} = \\csc x', why: 'Reciprocal identity in reverse.' },
          ],
          result: '$\\cot x \\sec x = \\csc x$ for every $x$ where the left side is defined.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The "co" trap',
          text: 'Secant pairs with **cosine** and cosecant pairs with **sine** — the opposite of what the names suggest. $\\sec x = \\frac{1}{\\cos x}$ and $\\csc x = \\frac{1}{\\sin x}$. A quick check: each reciprocal pair has exactly one "co" between them (sec/**co**s, **co**sec/sin, **co**t/tan).',
        },
        {
          type: 'deepdive',
          title: 'Where the "co" names come from: cofunction identities',
          blocks: [
            {
              type: 'p',
              text: '"Cosine" is short for "complement\'s sine". In a right triangle the two acute angles add to $90°$, and the side *opposite* one angle is *adjacent* to the other. So the sine of an angle equals the cosine of its complement, and the same pairing holds for tangent/cotangent and secant/cosecant:',
            },
            { type: 'math', tex: '\\sin\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\cos\\theta, \\qquad \\tan\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\cot\\theta, \\qquad \\sec\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\csc\\theta' },
            {
              type: 'p',
              text: 'These [[cofunction-identities]] hold for all angles, not only acute ones; you will prove them in general with the difference formulas later in this unit.',
            },
          ],
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Simplify $\\dfrac{\\tan x}{\\sec x}$ to a single basic trig function.',
      label: '$\\dfrac{\\tan x}{\\sec x} =$',
      answer: 'sin(x)',
      answerTex: '\\sin x',
      hint: 'Rewrite both in sines and cosines. Dividing by $\\frac{1}{\\cos x}$ is the same as multiplying by $\\cos x$.',
      explanation: '$\\dfrac{\\tan x}{\\sec x} = \\dfrac{\\sin x / \\cos x}{1/\\cos x} = \\dfrac{\\sin x}{\\cos x} \\cdot \\cos x = \\sin x$. The pattern "rewrite in sin and cos, then cancel" handles most products and quotients of trig functions. (The identity holds wherever $\\cos x \\ne 0$, where the original expression is defined.)',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The Pythagorean identities',
      blocks: [
        {
          type: 'p',
          text: 'The point $(\\cos\\theta, \\sin\\theta)$ lies on the unit circle, whose equation is $x^2 + y^2 = 1$. Substitute the coordinates and you get the most important identity in trigonometry. It is the [[pythagorean-theorem]] applied to the right triangle with legs $|\\cos\\theta|$, $|\\sin\\theta|$ and hypotenuse $1$.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: ['cos(a)', 'sin(a)'], color: 'purple', label: '1' },
            { from: [0, 0], to: ['cos(a)', 0], color: 'red', label: 'cos θ' },
            { from: ['cos(a)', 0], to: ['cos(a)', 'sin(a)'], color: 'blue', label: 'sin θ' },
          ],
          points: [{ x: 'cos(a)', y: 'sin(a)', label: '(cos θ, sin θ)' }],
          sliders: [{ name: 'a', min: 0, max: 6.28, step: 0.01, value: 0.9, label: '$\\theta$' }],
          readouts: [
            { label: '$\\cos\\theta =$', expr: 'cos(a)', digits: 4 },
            { label: '$\\sin\\theta =$', expr: 'sin(a)', digits: 4 },
            { label: '$\\cos^2\\theta + \\sin^2\\theta =$', expr: 'cos(a)^2 + sin(a)^2', digits: 4 },
          ],
          caption: 'Drag $\\theta$ all the way around. The legs change length and sign, but because squares erase signs, the sum of their squares is always $1$ — in every quadrant.',
        },
        {
          type: 'theorem',
          name: 'Pythagorean identities',
          tex: '\\sin^2\\theta + \\cos^2\\theta = 1 \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta \\qquad 1 + \\cot^2\\theta = \\csc^2\\theta',
        },
        {
          type: 'derivation',
          title: 'Getting the other two from the first',
          steps: [
            { tex: '\\sin^2\\theta + \\cos^2\\theta = 1', why: 'Start from the unit-circle identity.' },
            { tex: '\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}', why: 'Divide every term by $\\cos^2\\theta$. Allowed wherever $\\cos\\theta \\neq 0$ — exactly where $\\tan$ and $\\sec$ exist.' },
            { tex: '\\tan^2\\theta + 1 = \\sec^2\\theta', why: 'Quotient identity $\\frac{\\sin}{\\cos} = \\tan$ and reciprocal identity $\\frac{1}{\\cos} = \\sec$, each squared.' },
            { tex: '\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}', why: 'Go back to the first identity and divide by $\\sin^2\\theta$ instead (where $\\sin\\theta \\neq 0$).' },
            { tex: '1 + \\cot^2\\theta = \\csc^2\\theta', why: 'Same substitutions with cot and csc.' },
          ],
          result: 'One fact about the circle gives all three [[pythagorean-identities]]. If you forget the second or third, re-derive it in two lines.',
        },
        {
          type: 'p',
          text: 'Each identity can be rearranged, and the rearranged forms are what you actually use when simplifying: $\\sin^2\\theta = 1 - \\cos^2\\theta$, $\\cos^2\\theta = 1 - \\sin^2\\theta$, $\\sec^2\\theta - \\tan^2\\theta = 1$, $\\csc^2\\theta - 1 = \\cot^2\\theta$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Read the notation carefully',
          text: '$\\sin^2\\theta$ means $(\\sin\\theta)^2$ — square the *output*. It does **not** mean $\\sin(\\theta^2)$ (square the input), and it is unrelated to $\\sin^{-1}\\theta$, which is arcsine. When you type it into a calculator or code, write `sin(x)^2` or `pow(sin(x), 2)`.',
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in quadrant II, find $\\cos\\theta$.',
      label: '$\\cos\\theta =$',
      answer: '-4/5',
      answerTex: '-\\frac{4}{5}',
      hint: 'Use $\\cos^2\\theta = 1 - \\sin^2\\theta$, then pick the sign from the quadrant.',
      explanation: '$\\cos^2\\theta = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$, so $\\cos\\theta = \\pm\\frac{4}{5}$. The Pythagorean identity only knows the *size*; the quadrant decides the sign. In quadrant II points have negative $x$-coordinates, so $\\cos\\theta = -\\frac{4}{5}$.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Complete the two Pythagorean identities obtained by dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$ and by $\\sin^2\\theta$.',
      template: '$1 + \\tan^2\\theta =$ ___ and $1 + \\cot^2\\theta =$ ___',
      blanks: [{ answers: ['$\\sec^2\\theta$'] }, { answers: ['$\\csc^2\\theta$'] }],
      wordBank: ['$\\sec^2\\theta$', '$\\csc^2\\theta$', '$\\cos^2\\theta$', '$\\sin^2\\theta$', '$1$'],
      explanation: 'Dividing by $\\cos^2\\theta$ turns $\\frac{\\sin^2}{\\cos^2}$ into $\\tan^2$ and $\\frac{1}{\\cos^2}$ into $\\sec^2$. Dividing by $\\sin^2\\theta$ turns $\\frac{\\cos^2}{\\sin^2}$ into $\\cot^2$ and $\\frac{1}{\\sin^2}$ into $\\csc^2$. Notice tan pairs with sec (both undefined where $\\cos = 0$) and cot pairs with csc (both undefined where $\\sin = 0$).',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'One value determines all six',
      blocks: [
        {
          type: 'p',
          text: 'Put the identities together and a single trig value plus the [[quadrant]] pins down all six functions. The Pythagorean identity gives the size of the missing coordinate; the quadrant gives its sign; the reciprocal and quotient identities do the rest.',
        },
        {
          type: 'derivation',
          title: 'Given $\\tan\\theta = 2$ with $\\theta$ in quadrant III, find the other five',
          steps: [
            { tex: '\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + 4 = 5', why: 'The Pythagorean identity that links tan and sec — the natural choice since tan is what we know.' },
            { tex: '\\sec\\theta = -\\sqrt{5}', why: 'In quadrant III the $x$-coordinate (cosine) is negative, so its reciprocal, secant, is negative too.' },
            { tex: '\\cos\\theta = \\frac{1}{\\sec\\theta} = -\\frac{1}{\\sqrt{5}} = -\\frac{\\sqrt{5}}{5}', why: 'Reciprocal identity, then rationalise the denominator.' },
            { tex: '\\sin\\theta = \\tan\\theta \\cos\\theta = 2 \\cdot \\left(-\\frac{\\sqrt{5}}{5}\\right) = -\\frac{2\\sqrt{5}}{5}', why: 'Rearrange $\\tan = \\frac{\\sin}{\\cos}$ to $\\sin = \\tan \\cdot \\cos$. Negative, as it must be in quadrant III — a free sign check.' },
            { tex: '\\csc\\theta = -\\frac{\\sqrt{5}}{2}, \\qquad \\cot\\theta = \\frac{1}{2}', why: 'Reciprocals of $\\sin\\theta$ and $\\tan\\theta$.' },
          ],
          result: 'Check: $\\sin^2\\theta + \\cos^2\\theta = \\frac{20}{25} + \\frac{5}{25} = 1$. ✓',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'A sketch helps: draw a reference triangle in the correct quadrant with legs labelled with signs. For $\\tan\\theta = 2 = \\frac{-2}{-1}$ in quadrant III, the legs are $x = -1$, $y = -2$, so the hypotenuse is $\\sqrt{5}$ and every ratio can be read straight off the triangle.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Saving trig calls in a game',
          text: 'If you already have $\\sin\\theta$ (say, from a vector\'s $y$-component on the unit circle), you can get $\\cos\\theta$ as `std::sqrt(1 - s*s)` and fix the sign from what you know about the angle. That is the Pythagorean identity doing the work of a second, more expensive trig call.',
        },
        {
          type: 'code',
          title: 'six_values.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    // Given: sin(theta) = 0.6 with theta in quadrant II.
    double s = 0.6;
    double c = -std::sqrt(1.0 - s * s);  // quadrant II: cosine is negative
    std::printf("cos = %.4f\\n", c);
    std::printf("tan = %.4f\\n", s / c);
    std::printf("sec = %.4f\\n", 1.0 / c);
    std::printf("csc = %.4f\\n", 1.0 / s);
    std::printf("cot = %.4f\\n", c / s);
}`,
          output: `cos = -0.8000
tan = -0.7500
sec = -1.2500
csc = 1.6667
cot = -1.3333`,
          annotations: [
            { lines: 7, text: 'Pythagorean identity for the size, quadrant knowledge for the sign.' },
            { lines: '9-12', text: 'Quotient and reciprocal identities: no further trig calls needed.' },
          ],
        },
      ],
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'If $\\sec\\theta = -3$ and $\\theta$ is in quadrant III, find $\\tan\\theta$.',
      label: '$\\tan\\theta =$',
      answer: '2sqrt(2)',
      answerTex: '2\\sqrt{2}',
      hint: 'Use $\\tan^2\\theta = \\sec^2\\theta - 1$. Is tangent positive or negative in quadrant III?',
      explanation: '$\\tan^2\\theta = \\sec^2\\theta - 1 = 9 - 1 = 8$, so $\\tan\\theta = \\pm\\sqrt{8} = \\pm 2\\sqrt{2}$. In quadrant III both coordinates are negative, so $\\tan\\theta = \\frac{y}{x}$ is **positive**: $\\tan\\theta = 2\\sqrt{2}$. Choosing the negative root because "everything is negative in quadrant III" is the classic slip — sine, cosine, secant and cosecant are negative there, but tangent and cotangent are positive.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Even-odd identities',
      blocks: [
        {
          type: 'p',
          text: 'What happens when you negate the angle? Rotating by $-\\theta$ means turning clockwise instead of counterclockwise by the same amount. The resulting point is the **mirror image** of the original across the $x$-axis: same $x$, opposite $y$.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: ['cos(a)', 'sin(a)'], color: 'blue', arrow: true, label: 'θ' },
            { from: [0, 0], to: ['cos(a)', '-sin(a)'], color: 'red', arrow: true, label: '−θ' },
            { from: ['cos(a)', 'sin(a)'], to: ['cos(a)', '-sin(a)'], color: 'gray', dashed: true },
          ],
          sliders: [{ name: 'a', min: 0, max: 6.28, step: 0.01, value: 0.8, label: '$\\theta$' }],
          readouts: [
            { label: '$\\cos\\theta =$', expr: 'cos(a)', digits: 3 },
            { label: '$\\cos(-\\theta) =$', expr: 'cos(-a)', digits: 3 },
            { label: '$\\sin\\theta =$', expr: 'sin(a)', digits: 3 },
            { label: '$\\sin(-\\theta) =$', expr: 'sin(-a)', digits: 3 },
          ],
          caption: 'The two points are reflections of each other across the $x$-axis for every $\\theta$: the cosines always agree, the sines are always opposite.',
        },
        {
          type: 'theorem',
          name: 'Even-odd identities',
          tex: '\\cos(-\\theta) = \\cos\\theta \\qquad \\sin(-\\theta) = -\\sin\\theta \\qquad \\tan(-\\theta) = -\\tan\\theta',
          text: 'Cosine (and its reciprocal secant) is an [[even-function]]; sine, tangent, cosecant and cotangent are [[odd-function|odd functions]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why tangent is odd',
          text: 'You do not need a new picture for tangent: $\\tan(-\\theta) = \\frac{\\sin(-\\theta)}{\\cos(-\\theta)} = \\frac{-\\sin\\theta}{\\cos\\theta} = -\\tan\\theta$. An odd function divided by an even one is odd. The same argument shows $\\csc$ and $\\cot$ are odd and $\\sec$ is even. These are the [[even-odd-identities]], and they match the graphs: $y = \\cos x$ is symmetric about the $y$-axis, while $y = \\sin x$ has rotational symmetry about the origin.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\cos(-x)\\tan(-x)$',
          steps: [
            { tex: '\\cos(-x)\\tan(-x)', why: 'Negative inputs: clear them first with the even-odd identities.' },
            { tex: '= \\cos x \\cdot (-\\tan x)', why: 'Cosine is even (the sign disappears); tangent is odd (the sign comes out front).' },
            { tex: '= -\\cos x \\cdot \\frac{\\sin x}{\\cos x}', why: 'Quotient identity.' },
            { tex: '= -\\sin x', why: 'Cancel $\\cos x$ (valid wherever $\\tan x$ was defined).' },
          ],
          result: '$\\cos(-x)\\tan(-x) = -\\sin x$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Mirroring in 2D games',
          text: 'Flip a direction vector $(\\cos\\theta, \\sin\\theta)$ upside down and you get $(\\cos\\theta, -\\sin\\theta)$ — the direction at angle $-\\theta$. That is the even-odd identities as a sprite-mirroring rule: negate the angle, keep $x$, negate $y$.',
        },
      ],
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'Simplify $\\sin(-x)\\sec(-x)$.',
      options: [
        { text: '$\\tan x$', why: 'This forgets that sine is odd: $\\sin(-x) = -\\sin x$, so a minus sign must survive.' },
        { text: '$-\\tan x$', correct: true, why: '$\\sin(-x) = -\\sin x$ and $\\sec(-x) = \\sec x$, so the product is $-\\sin x \\cdot \\frac{1}{\\cos x} = -\\tan x$.' },
        { text: '$\\sin x \\sec x$', why: 'This treats both functions as even. Only cosine and secant are even; sine is odd.' },
        { text: '$-\\cot x$', why: 'Secant is $\\frac{1}{\\cos x}$, not $\\frac{1}{\\sin x}$, so $\\frac{\\sin x}{\\cos x}$ appears, which is tangent, not cotangent.' },
      ],
      explanation: 'Clear the negative inputs first: sine is odd, secant is even. Then rewrite in sines and cosines: $-\\sin x \\cdot \\frac{1}{\\cos x} = -\\frac{\\sin x}{\\cos x} = -\\tan x$. Sanity check at $x = \\frac{\\pi}{4}$: $\\sin(-\\frac{\\pi}{4})\\sec(-\\frac{\\pi}{4}) = -\\frac{\\sqrt{2}}{2} \\cdot \\sqrt{2} = -1 = -\\tan\\frac{\\pi}{4}$. ✓',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Simplifying with the toolbox',
      blocks: [
        {
          type: 'p',
          text: 'With these identities you can simplify almost any expression built from trig functions. There is no single algorithm, but a short checklist works remarkably often:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Clear negative angles', text: 'Use the even-odd identities so every function has a positive argument.' },
            { title: 'Rewrite in sines and cosines', text: 'Reciprocal and quotient identities turn six functions into two.' },
            { title: 'Combine and factor', text: 'Use ordinary algebra: common denominators, [[factoring]], [[difference-of-squares]].' },
            { title: 'Look for a Pythagorean pair', text: '$1 - \\sin^2$, $1 - \\cos^2$, $\\sec^2 - 1$, $\\csc^2 - 1$ and $\\sin^2 + \\cos^2$ should all set off alarms.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Simplify $\\sec x - \\sin x \\tan x$',
          steps: [
            { tex: '\\sec x - \\sin x \\tan x', why: 'A difference of two terms with different functions.' },
            { tex: '= \\frac{1}{\\cos x} - \\sin x \\cdot \\frac{\\sin x}{\\cos x}', why: 'Rewrite in sines and cosines.' },
            { tex: '= \\frac{1}{\\cos x} - \\frac{\\sin^2 x}{\\cos x}', why: 'Multiply out the second term. Now both terms share the denominator $\\cos x$.' },
            { tex: '= \\frac{1 - \\sin^2 x}{\\cos x}', why: 'Subtract fractions with a common denominator.' },
            { tex: '= \\frac{\\cos^2 x}{\\cos x}', why: 'Pythagorean identity: $1 - \\sin^2 x = \\cos^2 x$. This is the step everything was building toward.' },
            { tex: '= \\cos x', why: 'Cancel one factor of $\\cos x$ (nonzero wherever the original expression is defined).' },
          ],
          result: '$\\sec x - \\sin x \\tan x = \\cos x$ wherever $\\cos x \\neq 0$.',
        },
        {
          type: 'derivation',
          title: 'Simplify $(1 - \\cos^2 x)\\csc x$',
          steps: [
            { tex: '(1 - \\cos^2 x)\\csc x', why: '$1 - \\cos^2 x$ is a Pythagorean pair.' },
            { tex: '= \\sin^2 x \\cdot \\frac{1}{\\sin x}', why: 'Pythagorean identity and reciprocal identity.' },
            { tex: '= \\sin x', why: 'Cancel one factor of $\\sin x$.' },
          ],
          result: '$(1 - \\cos^2 x)\\csc x = \\sin x$ wherever $\\sin x \\neq 0$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On exams "simplify" usually means "write with as few functions and terms as possible". Show each identity you use; graders award most of the credit for the chain of justified steps, not the final line. Instructors also like to hide a Pythagorean pair behind a factorisation, like $\\sin^2 x - \\sin^2 x\\cos^2 x = \\sin^2 x(1 - \\cos^2 x) = \\sin^4 x$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Domains matter',
          text: 'Cancelling assumes the cancelled factor is nonzero. That is why an identity is only claimed "wherever both sides are defined": $\\sec x - \\sin x \\tan x$ does not exist at $x = \\frac{\\pi}{2}$, even though $\\cos x$ does. The two sides are the same function on their common [[domain]].',
        },
      ],
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Simplify $(\\sec^2 x - 1)\\cos^2 x$.',
      label: '$(\\sec^2 x - 1)\\cos^2 x =$',
      answer: 'sin(x)^2',
      answerTex: '\\sin^2 x',
      hint: 'Which Pythagorean identity contains $\\sec^2 x - 1$?',
      explanation: 'From $1 + \\tan^2 x = \\sec^2 x$ we get $\\sec^2 x - 1 = \\tan^2 x$. Then $\\tan^2 x \\cos^2 x = \\frac{\\sin^2 x}{\\cos^2 x} \\cdot \\cos^2 x = \\sin^2 x$. Alternative route: distribute to get $\\sec^2 x\\cos^2 x - \\cos^2 x = 1 - \\cos^2 x = \\sin^2 x$. Two paths, same destination — a good sign.',
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A student simplifies $\\dfrac{\\sin^2 x}{1 - \\cos x}$. Tap the first line that is wrong.',
      lines: [
        '$\\dfrac{\\sin^2 x}{1 - \\cos x}$',
        '$= \\dfrac{1 - \\cos^2 x}{1 - \\cos x}$',
        '$= \\dfrac{(1 - \\cos x)^2}{1 - \\cos x}$',
        '$= 1 - \\cos x$',
      ],
      errorLines: [3],
      explanation: 'Line 2 is a correct use of the Pythagorean identity. Line 3 factors $1 - \\cos^2 x$ as a perfect square, but it is a **difference of squares**: $1 - \\cos^2 x = (1 - \\cos x)(1 + \\cos x)$. Cancelling the common factor $1 - \\cos x$ then gives the correct answer $1 + \\cos x$. Spot-check at $x = \\frac{\\pi}{3}$: the original is $\\frac{3/4}{1/2} = \\frac{3}{2}$, which matches $1 + \\cos\\frac{\\pi}{3} = \\frac{3}{2}$ but not $1 - \\cos\\frac{\\pi}{3} = \\frac{1}{2}$. (Avoid checking at $x = \\frac{\\pi}{2}$, where $\\cos x = 0$ makes both versions agree by accident.)',
    },
  ],
  takeaways: [
    'An identity is true for every input where both sides are defined; one counterexample disproves an identity, but no number of examples proves one.',
    'Reciprocal and quotient identities are the unit-circle definitions rewritten: $\\tan = \\frac{\\sin}{\\cos}$, $\\sec = \\frac{1}{\\cos}$, $\\csc = \\frac{1}{\\sin}$, $\\cot = \\frac{\\cos}{\\sin}$.',
    '$\\sin^2\\theta + \\cos^2\\theta = 1$ is the circle $x^2 + y^2 = 1$; dividing by $\\cos^2$ or $\\sin^2$ gives $1 + \\tan^2 = \\sec^2$ and $1 + \\cot^2 = \\csc^2$.',
    'Pythagorean identities give a value up to sign; the quadrant decides the sign.',
    'Cosine and secant are even; sine, tangent, cosecant and cotangent are odd — because $-\\theta$ reflects the point across the $x$-axis.',
    'To simplify: clear negatives, rewrite in sin and cos, combine and factor, then hunt for a Pythagorean pair.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 7.1 Solving Trigonometric Equations with Identities',
      url: 'https://openstax.org/books/precalculus-2e/pages/7-1-solving-trigonometric-equations-with-identities',
      source: 'openstax',
      note: 'Covers the fundamental identities and simplifying expressions with many extra practice problems.',
    },
    {
      title: 'Wikipedia — Pythagorean trigonometric identity',
      url: 'https://en.wikipedia.org/wiki/Pythagorean_trigonometric_identity',
      source: 'wikipedia',
      note: 'Several different proofs of $\\sin^2 + \\cos^2 = 1$, including one from similar triangles.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'The trig identities unit has short videos and practice sets on using the fundamental identities.',
    },
  ],
};
