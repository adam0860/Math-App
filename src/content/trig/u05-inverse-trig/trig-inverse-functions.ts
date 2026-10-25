import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-inverse-functions',
  title: 'Inverse Trig Functions',
  summary: 'Running sine, cosine and tangent backwards: why we must restrict their domains, and what arcsin, arccos and arctan really return.',
  minutes: 18,
  objectives: [
    'Explain why $\\sin$, $\\cos$ and $\\tan$ need restricted domains before they can have inverses',
    'State the domain and range of $\\arcsin$, $\\arccos$ and $\\arctan$ and justify each range',
    'Evaluate inverse trig functions exactly at the special values of the unit circle',
    'Simplify compositions such as $\\arcsin(\\sin\\theta)$ and $\\sin(\\arcsin x)$, knowing when they cancel',
    'Use a reference triangle to evaluate expressions like $\\cos(\\arcsin\\frac{3}{5})$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Going backwards: from a ratio to an angle',
      blocks: [
        {
          type: 'p',
          text: 'So far you have fed an angle into a trig function and received a number: $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$. Constantly, though, the question runs the other way. A ramp rises 1 m over a 2 m slope — what angle is it? A sprite\'s velocity is known — which way is it facing? You know the *ratio* and want the *angle*.',
        },
        {
          type: 'p',
          text: 'That is a job for an [[inverse-function]]. But there is an immediate problem. Ask "which angle has sine $\\frac{1}{2}$?" and the honest answer is: infinitely many. $\\frac{\\pi}{6}$ works, so does $\\frac{5\\pi}{6}$, and so does every angle you get by adding full turns to either of them.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-1.8, 1.8],
          xStep: 'pi',
          functions: [{ expr: 'sin(x)', label: '$y = \\sin x$' }],
          hlines: [{ y: 'k', color: 'red', label: 'y = k' }],
          sliders: [{ name: 'k', min: -1, max: 1, step: 0.05, value: 0.5, label: '$k$' }],
          caption: 'Every horizontal line $y = k$ with $-1 \\le k \\le 1$ crosses the sine wave infinitely often. Sine fails the horizontal line test badly.',
        },
        {
          type: 'p',
          text: 'Recall from algebra that a function has an inverse only if it is [[one-to-one-function|one-to-one]]: each output comes from exactly one input. Graphically, that is the [[horizontal-line-test]]. A periodic function can never pass it — repeating its values is the whole point of being periodic.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an inverse must give one answer',
          text: 'A function is a machine that returns **one** output per input. If `asin(0.5)` could return $\\frac{\\pi}{6}$ on Monday and $\\frac{5\\pi}{6}$ on Tuesday, no program (and no proof) could rely on it. So mathematicians agree on a convention: choose one piece of the graph that passes the horizontal line test, and invert only that piece.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'The function $f(x) = \\sin x$, with its full domain of all real numbers, has an inverse function.',
      answer: false,
      explanation: 'An inverse function exists only when the original is one-to-one. $\\sin x$ takes every value in $[-1, 1]$ infinitely many times (for example $\\sin 0 = \\sin \\pi = \\sin 2\\pi = 0$), so it fails the horizontal line test. That is why $\\arcsin$ is defined as the inverse of sine on a **restricted** domain, not of sine on all of $\\mathbb{R}$.',
    },
    {
      kind: 'concept',
      title: 'Arcsine: inverting sine on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$',
      blocks: [
        {
          type: 'p',
          text: 'To build an inverse we keep one stretch of the sine curve that (1) passes the horizontal line test and (2) still reaches every value from $-1$ to $1$. The standard choice is $-\\frac{\\pi}{2} \\le x \\le \\frac{\\pi}{2}$: on that interval sine climbs steadily from $-1$ to $1$, hitting each value exactly once.',
        },
        {
          type: 'definition',
          term: 'Inverse sine (arcsine)',
          text: 'For $-1 \\le x \\le 1$, $\\arcsin x$ (also written $\\sin^{-1} x$) is **the angle in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ whose sine is $x$**:\n\n$$y = \\arcsin x \\iff \\sin y = x \\text{ and } -\\tfrac{\\pi}{2} \\le y \\le \\tfrac{\\pi}{2}.$$\n\nDomain $[-1, 1]$, range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.',
        },
        {
          type: 'graph',
          x: [-2.2, 2.2],
          y: [-2, 2],
          equal: true,
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$ (restricted)', domain: ['-pi/2', 'pi/2'] },
            { expr: 'arcsin(x)', label: '$y = \\arcsin x$', color: 'red' },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
          ],
          points: [
            { x: 'pi/2', y: 1, label: '(π/2, 1)' },
            { x: 1, y: 'pi/2', label: '(1, π/2)', color: 'red' },
          ],
          caption: 'As with every inverse, the graph of $\\arcsin$ is the restricted sine curve reflected across $y = x$. Inputs and outputs swap: $(\\frac{\\pi}{2}, 1)$ becomes $(1, \\frac{\\pi}{2})$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this particular interval?',
          text: 'Other intervals pass the horizontal line test too — $[\\frac{\\pi}{2}, \\frac{3\\pi}{2}]$, for instance. $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ wins because it **contains the acute angles** $0$ to $\\frac{\\pi}{2}$ (so $\\arcsin$ answers right-triangle questions directly), it is **centred on $0$** (so small inputs give small angles), and it is **symmetric** (so $\\arcsin(-x) = -\\arcsin x$, matching the fact that sine is odd). Negative inputs give angles in Quadrant IV, measured clockwise from the positive $x$-axis.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\arcsin\\left(-\\frac{\\sqrt{3}}{2}\\right)$',
          steps: [
            { tex: '\\theta = \\arcsin\\left(-\\tfrac{\\sqrt{3}}{2}\\right) \\iff \\sin\\theta = -\\tfrac{\\sqrt{3}}{2},\\ \\ -\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}', why: 'Translate the inverse into a question about sine, *including the range condition*. Forgetting the range is how wrong answers sneak in.' },
            { tex: '\\sin\\tfrac{\\pi}{3} = \\tfrac{\\sqrt{3}}{2}', why: 'First find the reference angle: which special angle has sine $\\frac{\\sqrt{3}}{2}$? From the 30-60-90 triangle, $\\frac{\\pi}{3}$.' },
            { tex: '\\sin\\left(-\\tfrac{\\pi}{3}\\right) = -\\tfrac{\\sqrt{3}}{2}', why: 'Sine is negative in Quadrant IV, and the only part of the range in Quadrant IV is $[-\\frac{\\pi}{2}, 0)$. Since sine is odd, $\\sin(-\\frac{\\pi}{3}) = -\\sin\\frac{\\pi}{3}$.' },
            { tex: '\\arcsin\\left(-\\tfrac{\\sqrt{3}}{2}\\right) = -\\tfrac{\\pi}{3}', why: '$-\\frac{\\pi}{3}$ lies in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ and has the right sine, so it is *the* answer. ($\\frac{4\\pi}{3}$ also has this sine but is outside the range.)' },
          ],
          result: '$\\arcsin\\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\frac{\\pi}{3}$, i.e. $-60^\\circ$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\arcsin\\left(-\\frac{1}{2}\\right)$ exactly, in radians.',
      label: '$\\arcsin\\left(-\\frac{1}{2}\\right) =$',
      answer: '-pi/6',
      answerTex: '-\\frac{\\pi}{6}',
      hint: 'Which special angle has sine $\\frac{1}{2}$? Now find its partner in $[-\\frac{\\pi}{2}, 0)$.',
      explanation: 'The reference angle is $\\frac{\\pi}{6}$ because $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$. The input is negative, so the answer must be in the Quadrant IV part of the range, $[-\\frac{\\pi}{2}, 0)$: $\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$. The angles $\\frac{7\\pi}{6}$ and $\\frac{11\\pi}{6}$ also have sine $-\\frac{1}{2}$, but neither lies in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.',
    },
    {
      kind: 'concept',
      title: 'Arccosine: a different slice, $[0, \\pi]$',
      blocks: [
        {
          type: 'p',
          text: 'Try the same slice for cosine and it fails: $\\cos(-\\frac{\\pi}{3}) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$, because cosine is even. On $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ cosine goes up and then back down, so it is not one-to-one there — and it never goes negative there either.',
        },
        {
          type: 'p',
          text: 'Instead we use $[0, \\pi]$. Across the top half of the unit circle the $x$-coordinate slides from $1$ down to $-1$, hitting every value exactly once. So cosine is strictly decreasing on $[0, \\pi]$ and covers all of $[-1, 1]$.',
        },
        {
          type: 'definition',
          term: 'Inverse cosine (arccosine)',
          text: 'For $-1 \\le x \\le 1$, $\\arccos x$ (or $\\cos^{-1} x$) is **the angle in $[0, \\pi]$ whose cosine is $x$**:\n\n$$y = \\arccos x \\iff \\cos y = x \\text{ and } 0 \\le y \\le \\pi.$$\n\nDomain $[-1, 1]$, range $[0, \\pi]$.',
        },
        {
          type: 'graph',
          x: [-2, 3.5],
          y: [-1.5, 3.5],
          equal: true,
          functions: [
            { expr: 'cos(x)', label: '$y = \\cos x$ (restricted)', domain: [0, 'pi'] },
            { expr: 'arccos(x)', label: '$y = \\arccos x$', color: 'red' },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
          ],
          points: [
            { x: -1, y: 'pi', label: '(−1, π)', color: 'red' },
            { x: 1, y: 0, label: '(1, 0)', color: 'red' },
          ],
          caption: '$\\arccos$ starts high at $(-1, \\pi)$ and falls to $(1, 0)$. Its outputs are never negative.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\arccos\\left(-\\frac{1}{2}\\right)$',
          steps: [
            { tex: '\\theta = \\arccos\\left(-\\tfrac{1}{2}\\right) \\iff \\cos\\theta = -\\tfrac{1}{2},\\ \\ 0 \\le \\theta \\le \\pi', why: 'Rewrite as a cosine question with the range condition attached.' },
            { tex: '\\cos\\tfrac{\\pi}{3} = \\tfrac{1}{2}', why: 'The reference angle: $\\frac{\\pi}{3}$ has cosine $\\frac{1}{2}$.' },
            { tex: '\\theta = \\pi - \\tfrac{\\pi}{3}', why: 'Cosine is negative in Quadrant II, the left half of the allowed range $[0, \\pi]$. A Quadrant II angle with reference angle $\\frac{\\pi}{3}$ is $\\pi - \\frac{\\pi}{3}$.' },
            { tex: '= \\tfrac{2\\pi}{3}', why: 'Check: $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ and $\\frac{2\\pi}{3} \\in [0, \\pi]$.' },
          ],
          result: '$\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$ ($120^\\circ$).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Negative input does not mean negative angle',
          text: 'For arcsine, a negative input gives a negative angle. For arccosine it does **not**: negative inputs give angles in Quadrant II, between $\\frac{\\pi}{2}$ and $\\pi$. The correct symmetry rule is $\\arccos(-x) = \\pi - \\arccos x$, not $-\\arccos x$.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right)$?',
      options: [
        { text: '$-\\frac{\\pi}{4}$', why: 'This treats arccos like arcsin, flipping the sign. But $\\cos(-\\frac{\\pi}{4}) = +\\frac{\\sqrt{2}}{2}$, and negative angles are not in the range $[0, \\pi]$ anyway.' },
        { text: '$\\frac{5\\pi}{4}$', why: '$\\cos\\frac{5\\pi}{4}$ is indeed $-\\frac{\\sqrt{2}}{2}$, but $\\frac{5\\pi}{4}$ is in Quadrant III, outside the range $[0, \\pi]$.' },
        { text: '$\\frac{3\\pi}{4}$', correct: true, why: 'Reference angle $\\frac{\\pi}{4}$, placed in Quadrant II (where cosine is negative and which lies inside $[0, \\pi]$): $\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$.' },
        { text: '$\\frac{\\pi}{4}$', why: 'That is $\\arccos\\frac{\\sqrt{2}}{2}$ — the negative sign was dropped.' },
      ],
      explanation: 'Arccosine always returns an angle in $[0, \\pi]$. The reference angle for $\\frac{\\sqrt{2}}{2}$ is $\\frac{\\pi}{4}$; since the input is negative, the angle sits in Quadrant II: $\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. Check: $\\cos\\frac{3\\pi}{4} = -\\frac{\\sqrt{2}}{2}$.',
    },
    {
      kind: 'concept',
      title: 'Arctangent: every input allowed',
      blocks: [
        {
          type: 'p',
          text: 'Tangent repeats every $\\pi$, and on the open interval $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ it rises from $-\\infty$ to $\\infty$ — one full branch, hitting every real number once. So that branch is the one we invert. Since tangent is a slope ($\\frac{y}{x}$ on the unit circle), [[inverse-tangent|arctangent]] answers "what angle has this slope?" — and every real number is a possible slope.',
        },
        {
          type: 'definition',
          term: 'Inverse tangent (arctangent)',
          text: 'For every real $x$, $\\arctan x$ (or $\\tan^{-1} x$) is **the angle in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ whose tangent is $x$**. Domain $(-\\infty, \\infty)$, range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. The endpoints are excluded because $\\tan(\\pm\\frac{\\pi}{2})$ is undefined.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-2.2, 2.2],
          functions: [{ expr: 'arctan(x)', label: '$y = \\arctan x$', color: 'red' }],
          hlines: [
            { y: 'pi/2', label: 'y = π/2' },
            { y: '-pi/2', label: 'y = −π/2' },
          ],
          points: [{ x: 'a', y: 'arctan(a)', label: '(a, arctan a)' }],
          sliders: [{ name: 'a', min: -8, max: 8, step: 0.1, value: 1, label: '$a$' }],
          readouts: [
            { label: '$\\arctan a \\approx$', expr: 'arctan(a)', digits: 4 },
            { label: 'in degrees $\\approx$', expr: 'arctan(a)*180/pi', digits: 2 },
          ],
          caption: 'Slide $a$ far to the right: the angle creeps toward $\\frac{\\pi}{2}$ (a vertical line) but never reaches it. The vertical asymptotes of $\\tan$ have become horizontal asymptotes of $\\arctan$.',
        },
        {
          type: 'table',
          headers: ['function', 'domain', 'range (principal values)', 'quadrants of output'],
          rows: [
            ['$\\arcsin x$', '$[-1, 1]$', '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$', 'I and IV'],
            ['$\\arccos x$', '$[-1, 1]$', '$[0, \\pi]$', 'I and II'],
            ['$\\arctan x$', 'all reals', '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$', 'I and IV'],
          ],
          caption: 'The value an inverse trig function returns is called its [[principal-value]].',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\sin^{-1} x$ is not $\\frac{1}{\\sin x}$',
          text: 'The $^{-1}$ means *inverse function*, not reciprocal. $\\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}$, while $(\\sin\\frac{1}{2})^{-1} = \\csc\\frac{1}{2} \\approx 2.09$. Confusingly, $\\sin^2 x$ *does* mean $(\\sin x)^2$. Writing $\\arcsin$ avoids the ambiguity, which is why this course prefers it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In C++ (and every other language)',
          text: '`std::asin`, `std::acos` and `std::atan` from `<cmath>` return the principal values in exactly these ranges, **in radians**. Multiply by $\\frac{180}{\\pi}$ for degrees. Calling `std::asin(1.5)` does not crash — it quietly returns NaN ("not a number"), which then poisons every calculation it touches. Clamp inputs that come from floating-point arithmetic (a dot product might come out as `1.0000001`) to $[-1, 1]$ before calling `asin` or `acos`.',
        },
        {
          type: 'code',
          title: 'inverse.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

int main() {
    const double toDeg = 180.0 / std::numbers::pi;
    std::printf("asin(0.5)  = %7.4f rad = %6.1f deg\\n", std::asin(0.5), std::asin(0.5) * toDeg);
    std::printf("acos(-0.5) = %7.4f rad = %6.1f deg\\n", std::acos(-0.5), std::acos(-0.5) * toDeg);
    std::printf("atan(-1.0) = %7.4f rad = %6.1f deg\\n", std::atan(-1.0), std::atan(-1.0) * toDeg);
    double bad = std::asin(1.5);  // no angle has sine 1.5
    std::printf("asin(1.5) is NaN? %s\\n", std::isnan(bad) ? "yes" : "no");
}`,
          output: `asin(0.5)  =  0.5236 rad =   30.0 deg
acos(-0.5) =  2.0944 rad =  120.0 deg
atan(-1.0) = -0.7854 rad =  -45.0 deg
asin(1.5) is NaN? yes`,
          annotations: [
            { lines: 6, text: '`std::numbers::pi` (C++20) is $\\pi$ to full double precision.' },
            { lines: 8, text: 'Negative input to `acos` gives a Quadrant II angle, $\\frac{2\\pi}{3}$ — never a negative one.' },
            { lines: 10, text: '$1.5$ is outside the domain $[-1, 1]$, so the result is NaN.' },
          ],
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the ranges of the three inverse trig functions.',
      template: 'The range of $\\arcsin$ is ___, the range of $\\arccos$ is ___, and the range of $\\arctan$ is ___.',
      blanks: [
        { answers: ['$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$'] },
        { answers: ['$[0, \\pi]$'] },
        { answers: ['$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$'] },
      ],
      wordBank: [
        '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$',
        '$[0, \\pi]$',
        '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$',
        '$[-1, 1]$',
        '$[0, 2\\pi)$',
      ],
      explanation: 'Arcsine and arctangent both use the slice through $0$ (Quadrants I and IV), but arctangent\'s interval is open because $\\tan(\\pm\\frac{\\pi}{2})$ is undefined. Arccosine uses $[0, \\pi]$ (Quadrants I and II), because cosine is not one-to-one on any interval centred at $0$. $[-1, 1]$ is the *domain* of arcsin and arccos, not a range.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\arctan\\left(-\\sqrt{3}\\right)$ exactly, in radians.',
      label: '$\\arctan(-\\sqrt{3}) =$',
      answer: '-pi/3',
      answerTex: '-\\frac{\\pi}{3}',
      hint: 'Which special angle has $\\tan = \\sqrt{3}$? The answer must lie strictly between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$.',
      explanation: '$\\tan\\frac{\\pi}{3} = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/3)} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$, so the reference angle is $\\frac{\\pi}{3}$. The input is negative, so the angle is in the Quadrant IV part of the range: $\\arctan(-\\sqrt{3}) = -\\frac{\\pi}{3}$. ($\\frac{2\\pi}{3}$ also has tangent $-\\sqrt{3}$ but lies outside $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.)',
    },
    {
      kind: 'concept',
      title: 'Compositions: when do they cancel?',
      blocks: [
        {
          type: 'p',
          text: 'For any function and its inverse, $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$ — on the right domains. With trig, those domains are where students get caught. There are two directions, and they behave very differently.',
        },
        {
          type: 'theorem',
          name: 'Trig of inverse trig: always cancels',
          tex: '\\sin(\\arcsin x) = x \\quad\\text{and}\\quad \\cos(\\arccos x) = x \\quad (-1 \\le x \\le 1), \\qquad \\tan(\\arctan x) = x \\quad (\\text{all } x)',
          text: '$\\arcsin x$ is *by definition* an angle whose sine is $x$, so taking its sine returns $x$.',
        },
        {
          type: 'theorem',
          name: 'Inverse trig of trig: cancels only inside the range',
          tex: '\\arcsin(\\sin\\theta) = \\theta \\iff -\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}, \\qquad \\arccos(\\cos\\theta) = \\theta \\iff 0 \\le \\theta \\le \\pi',
          text: 'Outside those intervals, the answer is a *different* angle with the same sine (or cosine) — the one that lies in the range.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right)$',
          steps: [
            { tex: '\\tfrac{5\\pi}{6} \\notin \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]', why: 'Check the range first. $\\frac{5\\pi}{6} \\approx 2.62 > \\frac{\\pi}{2} \\approx 1.57$, so the functions will **not** simply cancel.' },
            { tex: '\\sin\\tfrac{5\\pi}{6} = \\tfrac{1}{2}', why: 'Evaluate the inside: $\\frac{5\\pi}{6}$ is in Quadrant II with reference angle $\\frac{\\pi}{6}$, and sine is positive there.' },
            { tex: '\\arcsin\\left(\\sin\\tfrac{5\\pi}{6}\\right) = \\arcsin\\tfrac{1}{2}', why: 'Replace the inner expression by its value.' },
            { tex: '= \\tfrac{\\pi}{6}', why: 'The angle in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ with sine $\\frac{1}{2}$.' },
          ],
          result: '$\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) = \\frac{\\pi}{6}$, not $\\frac{5\\pi}{6}$. The output is always a principal value.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-2.5, 2.5],
          xStep: 'pi',
          functions: [
            { expr: 'arcsin(sin(x))', label: '$y = \\arcsin(\\sin x)$', color: 'purple' },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
          ],
          points: [{ x: 'a', y: 'arcsin(sin(a))', label: 'θ' }],
          sliders: [{ name: 'a', min: -6.5, max: 6.5, step: 0.05, value: 2.62, label: '$\\theta$' }],
          readouts: [{ label: '$\\arcsin(\\sin\\theta) \\approx$', expr: 'arcsin(sin(a))', digits: 4 }],
          caption: '$\\arcsin(\\sin x)$ is a zigzag. It agrees with $y = x$ only on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$; everywhere else it is folded back into that interval.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the two directions differ',
          text: '$\\sin$ forgets information: $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ both become $\\frac{1}{2}$. Once that happens, $\\arcsin$ cannot know which angle you started with, so it returns its standard choice. Going the other way nothing is lost: $\\arcsin$ hands sine an angle whose sine is $x$, and sine reports $x$ back.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Simplify $\\arccos\\left(\\cos\\frac{7\\pi}{4}\\right)$ exactly.',
      answer: 'pi/4',
      answerTex: '\\frac{\\pi}{4}',
      hint: 'Is $\\frac{7\\pi}{4}$ in $[0, \\pi]$? If not, evaluate $\\cos\\frac{7\\pi}{4}$ first.',
      explanation: '$\\frac{7\\pi}{4}$ is outside $[0, \\pi]$, so arccos and cos do not cancel. $\\frac{7\\pi}{4}$ is in Quadrant IV with reference angle $\\frac{\\pi}{4}$, and cosine is positive there: $\\cos\\frac{7\\pi}{4} = \\frac{\\sqrt{2}}{2}$. Then $\\arccos\\frac{\\sqrt{2}}{2} = \\frac{\\pi}{4}$, the angle in $[0, \\pi]$ with that cosine.',
    },
    {
      kind: 'concept',
      title: 'Mixed compositions with a reference triangle',
      blocks: [
        {
          type: 'p',
          text: 'What about $\\cos\\left(\\arcsin\\frac{3}{5}\\right)$? $\\frac{3}{5}$ is not a special value, so we cannot name the angle — but we do not need to. Give the angle a name, draw it, and read the other ratio off the picture.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\cos\\left(\\arcsin\\frac{3}{5}\\right)$',
          steps: [
            { tex: '\\theta = \\arcsin\\tfrac{3}{5} \\implies \\sin\\theta = \\tfrac{3}{5},\\ \\ \\theta \\in \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]', why: 'Name the angle. Because the input is positive, $\\theta$ is in Quadrant I.' },
            { tex: '\\text{opposite} = 3,\\ \\ \\text{hypotenuse} = 5', why: 'Sine is opposite over hypotenuse, so draw a right triangle with these sides.' },
            { tex: '\\text{adjacent} = \\sqrt{5^2 - 3^2} = 4', why: 'The Pythagorean theorem gives the missing side.' },
            { tex: '\\cos\\left(\\arcsin\\tfrac{3}{5}\\right) = \\cos\\theta = \\tfrac{4}{5}', why: 'Cosine is adjacent over hypotenuse, and it is positive in Quadrant I.' },
          ],
          result: '$\\cos\\left(\\arcsin\\frac{3}{5}\\right) = \\frac{4}{5}$.',
        },
        {
          type: 'p',
          text: 'The **sign** is decided by the range of the inverse function, not by the triangle. For an inverse cosine with a negative input, $\\theta$ lands in Quadrant II, where sine is positive but tangent is negative.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\tan\\left(\\arccos\\left(-\\frac{5}{13}\\right)\\right)$',
          steps: [
            { tex: '\\theta = \\arccos\\left(-\\tfrac{5}{13}\\right) \\implies \\cos\\theta = -\\tfrac{5}{13},\\ \\ \\theta \\in (\\tfrac{\\pi}{2}, \\pi)', why: 'A negative input to arccos puts $\\theta$ in Quadrant II.' },
            { tex: '\\sin\\theta = \\sqrt{1 - \\tfrac{25}{169}} = \\tfrac{12}{13}', why: 'On the unit circle $\\sin^2\\theta + \\cos^2\\theta = 1$. Sine is **positive** in Quadrant II, so take the positive root.' },
            { tex: '\\tan\\theta = \\dfrac{12/13}{-5/13} = -\\tfrac{12}{5}', why: 'Tangent is sine over cosine; the $13$s cancel.' },
          ],
          result: '$\\tan\\left(\\arccos\\left(-\\frac{5}{13}\\right)\\right) = -\\frac{12}{5}$.',
        },
        {
          type: 'p',
          text: 'The same idea works with a variable. If $\\theta = \\arcsin x$, the triangle has opposite side $x$ and hypotenuse $1$, so the adjacent side is $\\sqrt{1 - x^2}$. Because $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, its cosine is never negative, giving the identity $\\cos(\\arcsin x) = \\sqrt{1 - x^2}$. Results like this are exactly what you will need in calculus when you differentiate inverse trig functions.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love "find the exact value of $\\sin(\\arccos(-\\frac{4}{5}))$". Graders check two things: the Pythagorean triple ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$) and, more often missed, **the sign** from the quadrant. Always write down which quadrant $\\theta$ is in before computing.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\sin\\left(\\arccos\\left(-\\frac{4}{5}\\right)\\right)$. Tap the first line that is wrong.',
      lines: [
        'Let $\\theta = \\arccos\\left(-\\frac{4}{5}\\right)$, so $\\cos\\theta = -\\frac{4}{5}$.',
        'The triangle has adjacent side $4$ and hypotenuse $5$, so the opposite side is $3$.',
        'Since $\\cos\\theta < 0$, $\\theta$ is in Quadrant III, where sine is negative.',
        'So $\\sin\\left(\\arccos\\left(-\\frac{4}{5}\\right)\\right) = -\\frac{3}{5}$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets the range of arccos. $\\arccos$ always returns an angle in $[0, \\pi]$, so a negative cosine puts $\\theta$ in **Quadrant II**, where sine is positive. (Quadrant III angles are never outputs of arccos.) The correct answer is $\\sin\\theta = +\\frac{3}{5}$. A quick check: sine is never negative anywhere in $[0, \\pi]$, so $\\sin(\\arccos x) \\ge 0$ for every $x$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the exact value of $\\sec\\left(\\arctan 2\\right)$.',
      hint: 'Let $\\theta = \\arctan 2$: a right triangle with opposite $2$ and adjacent $1$. Which quadrant is $\\theta$ in?',
      answer: 'sqrt(5)',
      answerTex: '\\sqrt{5}',
      explanation: 'Let $\\theta = \\arctan 2$, so $\\tan\\theta = \\frac{2}{1}$ and $\\theta$ is in Quadrant I (positive input). The triangle has opposite $2$, adjacent $1$, hypotenuse $\\sqrt{1^2 + 2^2} = \\sqrt{5}$. Then $\\sec\\theta = \\frac{\\text{hypotenuse}}{\\text{adjacent}} = \\frac{\\sqrt{5}}{1} = \\sqrt{5}$, positive because cosine is positive in Quadrant I.',
    },
    {
      kind: 'expr',
      prompt: 'Write $\\cos(\\arctan x)$ as an algebraic expression in $x$ (no trig functions).',
      label: '$\\cos(\\arctan x) =$',
      answer: '1/sqrt(1 + x^2)',
      answerTex: '\\frac{1}{\\sqrt{1 + x^2}}',
      hint: 'Let $\\theta = \\arctan x$: opposite side $x$, adjacent side $1$. Find the hypotenuse. What sign does cosine have on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$?',
      explanation: 'Let $\\theta = \\arctan x$, so $\\tan\\theta = \\frac{x}{1}$. Draw a triangle with opposite $x$ and adjacent $1$; the hypotenuse is $\\sqrt{1 + x^2}$. So $\\cos\\theta = \\frac{1}{\\sqrt{1 + x^2}}$. No $\\pm$ is needed: $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, where cosine is always positive, and $\\frac{1}{\\sqrt{1 + x^2}}$ is always positive too. (For $x < 0$ the "triangle" points downward, but the formula still holds.)',
    },
  ],
  takeaways: [
    'Trig functions are periodic, so they are not one-to-one; each inverse is defined on one restricted slice of the graph.',
    '$\\arcsin$: domain $[-1, 1]$, range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. $\\arccos$: domain $[-1, 1]$, range $[0, \\pi]$. $\\arctan$: all reals, range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.',
    'To evaluate, find the reference angle, then place it in the part of the range that has the correct sign.',
    '$\\sin(\\arcsin x) = x$ always (for $|x| \\le 1$), but $\\arcsin(\\sin\\theta) = \\theta$ only when $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.',
    'For mixed compositions, name the angle, draw a reference triangle, and take the sign from the range of the inverse function.',
    '$\\sin^{-1} x$ means arcsine, not $\\frac{1}{\\sin x}$; code libraries return principal values in radians and NaN outside the domain.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 6.3 Inverse Trigonometric Functions',
      url: 'https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions',
      source: 'openstax',
      note: 'Free textbook section with many more exact-value and composition exercises.',
    },
    {
      title: "Paul's Online Notes — Inverse Trig Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/InverseTrigFcns.aspx',
      source: 'paul',
      note: 'A concise review written for students heading into calculus, with careful attention to ranges.',
    },
    {
      title: 'Wikipedia — Inverse trigonometric functions',
      url: 'https://en.wikipedia.org/wiki/Inverse_trigonometric_functions',
      source: 'wikipedia',
      note: 'Reference tables of principal values, notations and identities like $\\cos(\\arcsin x) = \\sqrt{1 - x^2}$.',
    },
  ],
};
