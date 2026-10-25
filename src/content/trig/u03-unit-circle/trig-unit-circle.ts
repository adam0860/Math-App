import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-unit-circle',
  title: 'Trig Functions on the Unit Circle',
  summary: 'Cosine and sine as the coordinates of a point spinning around a circle: trig for every angle, and the formula every game uses to put things on a circle.',
  minutes: 18,
  objectives: [
    'Define $\\cos\\theta$ and $\\sin\\theta$ as the coordinates of a point on the unit circle',
    'Read off the sine and cosine of the quadrantal angles $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$',
    'Derive the unit-circle coordinates of $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$ and $\\frac{\\pi}{3}$ from special triangles',
    'Use $\\cos^2\\theta + \\sin^2\\theta = 1$ and the range $[-1, 1]$ to find or check values',
    'Place a point on any circle with $(h + r\\cos\\theta,\\; k + r\\sin\\theta)$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why triangles are not enough',
      blocks: [
        {
          type: 'p',
          text: 'SOH CAH TOA defines sine and cosine as ratios of sides in a right triangle. That works beautifully, but only for **acute** angles: a right triangle cannot contain a $120^\\circ$ angle, let alone $-45^\\circ$ or $3\\pi$. Yet games, physics and engineering are full of such angles. A turret rotates all the way around; a wheel turns through thousands of radians.',
        },
        {
          type: 'p',
          text: 'The fix is to stop thinking about triangles and start thinking about **rotation**. Put an angle in [[standard-position]]: vertex at the origin, [[initial-side]] along the positive $x$-axis, measured counterclockwise for positive angles. Its [[terminal-side]] points somewhere. Now draw the circle of radius $1$ centred at the origin, the [[unit-circle]]. The terminal side crosses that circle at exactly one point $P$.',
        },
        {
          type: 'definition',
          term: 'Unit circle',
          text: 'The circle of radius $1$ centred at the origin. A point $(x, y)$ lies on it exactly when $x^2 + y^2 = 1$ (the [[distance-formula]] from the origin, set equal to $1$).',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: [1.4, 0], color: 'gray', label: 'initial side' },
            { from: [0, 0], to: ['1.4cos(2pi/3)', '1.4sin(2pi/3)'], color: 'blue', arrow: true, label: 'terminal side' },
          ],
          points: [{ x: 'cos(2pi/3)', y: 'sin(2pi/3)', label: 'P', color: 'red' }],
          caption: 'An angle of $\\frac{2\\pi}{3}$ ($120^\\circ$) in standard position. No right triangle has this angle, but its terminal side still meets the unit circle at one well-defined point $P$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why radius 1?',
          text: 'With radius $1$, the hypotenuse of every triangle we draw is $1$, so the ratios $\\frac{\\text{adj}}{\\text{hyp}}$ and $\\frac{\\text{opp}}{\\text{hyp}}$ become just the lengths themselves. Dividing by $1$ costs nothing, which lets the coordinates *be* the trig values. Any other radius works too, but you would carry an extra $r$ everywhere.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The definition: cosine is $x$, sine is $y$',
      blocks: [
        {
          type: 'definition',
          term: 'Sine and cosine of any angle',
          text: 'Let the terminal side of $\\theta$ meet the unit circle at $P = (x, y)$. Then\n\n$$\\cos\\theta = x, \\qquad \\sin\\theta = y.$$\n\nIn other words, $P = (\\cos\\theta, \\sin\\theta)$.',
        },
        {
          type: 'p',
          text: 'Drag the slider and watch $P$ travel around the circle. The red leg along the $x$-axis has signed length $\\cos\\theta$; the green vertical leg has signed length $\\sin\\theta$. "Signed" matters: when $P$ is left of the $y$-axis, $\\cos\\theta$ is negative, and below the $x$-axis $\\sin\\theta$ is negative.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: ['cos(a)', 'sin(a)'], color: 'blue', arrow: true, label: '1' },
            { from: [0, 0], to: ['cos(a)', 0], color: 'red', label: 'cos θ' },
            { from: ['cos(a)', 0], to: ['cos(a)', 'sin(a)'], color: 'green', label: 'sin θ' },
          ],
          points: [{ x: 'cos(a)', y: 'sin(a)', label: 'P(cos θ, sin θ)', color: 'blue' }],
          sliders: [{ name: 'a', min: 0, max: 6.28, step: 0.01, value: 0.6, label: '$\\theta$ (radians)' }],
          readouts: [
            { label: '$\\theta$ in degrees', expr: 'a*180/pi', digits: 1 },
            { label: '$\\cos\\theta =$', expr: 'cos(a)', digits: 4 },
            { label: '$\\sin\\theta =$', expr: 'sin(a)', digits: 4 },
            { label: '$\\cos^2\\theta + \\sin^2\\theta =$', expr: 'cos(a)^2 + sin(a)^2', digits: 4 },
          ],
          caption: 'As $\\theta$ grows, $\\cos\\theta$ and $\\sin\\theta$ swing between $-1$ and $1$. The last readout never budges from $1$: that is the circle equation $x^2 + y^2 = 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this agrees with SOH CAH TOA',
          text: 'For an acute $\\theta$, drop a perpendicular from $P$ to the $x$-axis. You get a right triangle with hypotenuse $1$, adjacent side $x$ and opposite side $y$. So $\\cos\\theta = \\frac{x}{1} = x$ and $\\sin\\theta = \\frac{y}{1} = y$. The unit-circle definition is not a new idea that competes with the old one; it *extends* it to every angle while agreeing wherever the old one already made sense.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Alphabetical order helps: in $(x, y)$, $x$ comes first, and in (cosine, sine), **c** comes before **s**.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'The terminal side of an angle $\\theta$ meets the unit circle at $P = (-0.6,\\ 0.8)$. Which statement is correct?',
      options: [
        {
          text: '$\\cos\\theta = -0.6$ and $\\sin\\theta = 0.8$',
          correct: true,
          why: 'Cosine is the $x$-coordinate and sine is the $y$-coordinate of $P$.',
        },
        {
          text: '$\\cos\\theta = 0.8$ and $\\sin\\theta = -0.6$',
          why: 'This swaps the coordinates. Cosine goes with $x$ (first), sine with $y$ (second).',
        },
        {
          text: '$\\cos\\theta = 0.6$ and $\\sin\\theta = 0.8$',
          why: 'This treats cosine as a length that must be positive. On the unit circle cosine is a *signed* coordinate, and $P$ is left of the $y$-axis.',
        },
        {
          text: 'Neither is defined, because $\\theta$ is not acute',
          why: 'That was the limitation of the triangle definition. The unit-circle definition works for every angle.',
        },
      ],
      explanation: 'By definition $P = (\\cos\\theta, \\sin\\theta)$, so $\\cos\\theta = -0.6$ and $\\sin\\theta = 0.8$. Quick check that $P$ really is on the unit circle: $(-0.6)^2 + 0.8^2 = 0.36 + 0.64 = 1$. ✓',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'The quadrantal angles',
      blocks: [
        {
          type: 'p',
          text: 'The easiest angles to evaluate are the ones whose terminal side lies along an axis: $0$, $\\frac{\\pi}{2}$, $\\pi$, $\\frac{3\\pi}{2}$ (and anything [[coterminal-angles|coterminal]] with them). These are the [[trig-quadrantal-angle|quadrantal angles]]. The terminal side hits the circle at one of the four points $(1, 0)$, $(0, 1)$, $(-1, 0)$, $(0, -1)$, and you just read off the coordinates.',
        },
        {
          type: 'table',
          headers: ['$\\theta$ (rad)', '$\\theta$ (deg)', 'point $P$', '$\\cos\\theta$', '$\\sin\\theta$'],
          rows: [
            ['$0$', '$0^\\circ$', '$(1, 0)$', '$1$', '$0$'],
            ['$\\frac{\\pi}{2}$', '$90^\\circ$', '$(0, 1)$', '$0$', '$1$'],
            ['$\\pi$', '$180^\\circ$', '$(-1, 0)$', '$-1$', '$0$'],
            ['$\\frac{3\\pi}{2}$', '$270^\\circ$', '$(0, -1)$', '$0$', '$-1$'],
            ['$2\\pi$', '$360^\\circ$', '$(1, 0)$', '$1$', '$0$'],
          ],
          caption: 'A full turn ($2\\pi$) brings you back to where you started.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\cos(3\\pi) + \\sin\\left(-\\frac{\\pi}{2}\\right)$',
          steps: [
            { tex: '3\\pi = 2\\pi + \\pi', why: 'Split off full turns. Rotating by $2\\pi$ returns $P$ to its starting point, so it changes nothing.' },
            { tex: '\\cos(3\\pi) = \\cos(\\pi) = -1', why: '$3\\pi$ is coterminal with $\\pi$, whose terminal side meets the circle at $(-1, 0)$.' },
            { tex: '\\sin\\left(-\\tfrac{\\pi}{2}\\right) = -1', why: 'A negative angle rotates **clockwise**. A quarter turn clockwise from $(1, 0)$ lands on $(0, -1)$, whose $y$-coordinate is $-1$.' },
            { tex: '\\cos(3\\pi) + \\sin\\left(-\\tfrac{\\pi}{2}\\right) = -1 + (-1) = -2', why: 'Add the two values.' },
          ],
          result: 'The expression equals $-2$. No calculator, no triangle: just a picture of where the point ends up.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Degree mode vs radian mode',
          text: 'Calculators and programming languages disagree on units. `std::sin(90)` in C++ means $\\sin(90 \\text{ radians}) \\approx 0.894$, not $\\sin 90^\\circ = 1$. Every standard math library (C++, C#, Python, JavaScript, GLSL) works in **radians**. Convert with $\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\frac{\\pi}{180}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\sin\\left(\\frac{3\\pi}{2}\\right) - \\cos(\\pi)$ without a calculator.',
      hint: 'Find the point on the unit circle for each angle. $\\frac{3\\pi}{2}$ is three quarter-turns; $\\pi$ is a half-turn.',
      answer: '0',
      explanation: 'At $\\frac{3\\pi}{2}$ the point is $(0, -1)$, so $\\sin\\frac{3\\pi}{2} = -1$. At $\\pi$ the point is $(-1, 0)$, so $\\cos\\pi = -1$. Then $-1 - (-1) = 0$. The usual slip is reading $\\cos\\pi$ as $+1$ or forgetting to subtract a negative.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The special angles: $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$',
      blocks: [
        {
          type: 'p',
          text: 'Between the axes, three angles show up constantly: $30^\\circ$, $45^\\circ$ and $60^\\circ$. You already know their ratios from the [[special-right-triangles]]. On the unit circle, those ratios become exact coordinates. Here is how to rebuild one from scratch, using nothing but the circle equation.',
        },
        {
          type: 'derivation',
          title: 'Find the point on the unit circle at $\\theta = \\frac{\\pi}{4}$',
          steps: [
            { tex: 'P = (x, y), \\quad y = x', why: 'At $45^\\circ$ the terminal side is the line $y = x$: it splits the first quadrant exactly in half, so the point is equally far right and up.' },
            { tex: 'x^2 + y^2 = 1', why: '$P$ is on the unit circle.' },
            { tex: 'x^2 + x^2 = 1 \\implies 2x^2 = 1', why: 'Substitute $y = x$ and combine like terms.' },
            { tex: 'x^2 = \\tfrac{1}{2} \\implies x = \\tfrac{1}{\\sqrt{2}} = \\tfrac{\\sqrt{2}}{2}', why: 'Take the positive root, because $P$ is in the first quadrant. Rationalise: $\\frac{1}{\\sqrt 2} \\cdot \\frac{\\sqrt 2}{\\sqrt 2} = \\frac{\\sqrt 2}{2}$.' },
            { tex: '\\cos\\tfrac{\\pi}{4} = \\sin\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{2}}{2} \\approx 0.7071', why: 'Read off both coordinates.' },
          ],
          result: '$P = \\left(\\frac{\\sqrt2}{2}, \\frac{\\sqrt2}{2}\\right)$ at $\\theta = \\frac{\\pi}{4}$.',
        },
        {
          type: 'p',
          text: 'For $\\frac{\\pi}{6}$, the 30-60-90 triangle with hypotenuse $1$ has short side $\\frac12$ (opposite the $30^\\circ$ angle) and long side $\\frac{\\sqrt3}{2}$. At $30^\\circ$ the point is wide and low, so the long side is $x$. At $60^\\circ$ the same triangle stands up, and the two coordinates trade places.',
        },
        {
          type: 'table',
          headers: ['$\\theta$', '$\\cos\\theta$', '$\\sin\\theta$', 'point $P$'],
          rows: [
            ['$\\frac{\\pi}{6} = 30^\\circ$', '$\\frac{\\sqrt3}{2} \\approx 0.866$', '$\\frac12$', '$\\left(\\frac{\\sqrt3}{2}, \\frac12\\right)$'],
            ['$\\frac{\\pi}{4} = 45^\\circ$', '$\\frac{\\sqrt2}{2} \\approx 0.707$', '$\\frac{\\sqrt2}{2} \\approx 0.707$', '$\\left(\\frac{\\sqrt2}{2}, \\frac{\\sqrt2}{2}\\right)$'],
            ['$\\frac{\\pi}{3} = 60^\\circ$', '$\\frac12$', '$\\frac{\\sqrt3}{2} \\approx 0.866$', '$\\left(\\frac12, \\frac{\\sqrt3}{2}\\right)$'],
          ],
          caption: 'The first-quadrant special angles. Every other "nice" angle on the circle is a mirror image of one of these (next lesson).',
        },
        {
          type: 'graph',
          x: [-0.3, 1.3],
          y: [-0.3, 1.2],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, 'pi/2'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: ['cos(pi/6)', 'sin(pi/6)'], color: 'blue' },
            { from: [0, 0], to: ['cos(pi/4)', 'sin(pi/4)'], color: 'purple' },
            { from: [0, 0], to: ['cos(pi/3)', 'sin(pi/3)'], color: 'green' },
          ],
          points: [
            { x: 'cos(pi/6)', y: 'sin(pi/6)', label: '(√3/2, 1/2)', color: 'blue' },
            { x: 'cos(pi/4)', y: 'sin(pi/4)', label: '(√2/2, √2/2)', color: 'purple' },
            { x: 'cos(pi/3)', y: 'sin(pi/3)', label: '(1/2, √3/2)', color: 'green' },
          ],
          caption: 'The three special points in the first quadrant. As $\\theta$ increases, $x$ shrinks and $y$ grows.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A sanity check you can do in your head',
          text: 'As the angle increases from $0$ to $\\frac{\\pi}{2}$, the point rises: sine increases and cosine decreases. So $\\sin\\frac{\\pi}{6}$ must be the *small* value $\\frac12$, and $\\sin\\frac{\\pi}{3}$ the *large* one $\\frac{\\sqrt3}{2}$. If you ever write $\\sin 30^\\circ = \\frac{\\sqrt3}{2}$, this check catches it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the unit-circle point for $\\theta = \\frac{\\pi}{3}$ ($60^\\circ$).',
      template: 'At $\\theta = \\frac{\\pi}{3}$, $\\cos\\theta =$ ___ and $\\sin\\theta =$ ___.',
      blanks: [{ answers: ['$\\frac{1}{2}$'] }, { answers: ['$\\frac{\\sqrt{3}}{2}$'] }],
      wordBank: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\sqrt{3}$', '$1$'],
      explanation: 'At $60^\\circ$ the point is high and close to the $y$-axis, so its $x$-coordinate is the small value $\\frac12$ and its $y$-coordinate is the large value $\\frac{\\sqrt3}{2}$. Check: $\\left(\\frac12\\right)^2 + \\left(\\frac{\\sqrt3}{2}\\right)^2 = \\frac14 + \\frac34 = 1$. ✓',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Three facts that fall straight out of the circle',
      blocks: [
        {
          type: 'p',
          text: 'Because $(\\cos\\theta, \\sin\\theta)$ is a point on a circle of radius $1$, three important properties come for free. Each one is just a statement about the picture.',
        },
        {
          type: 'theorem',
          name: 'Pythagorean identity',
          tex: '\\cos^2\\theta + \\sin^2\\theta = 1 \\quad \\text{for every angle } \\theta',
          text: '$\\cos^2\\theta$ means $(\\cos\\theta)^2$. This is the circle equation $x^2 + y^2 = 1$ with $x = \\cos\\theta$, $y = \\sin\\theta$.',
        },
        {
          type: 'list',
          items: [
            '**Range.** Every point on the unit circle has $-1 \\le x \\le 1$ and $-1 \\le y \\le 1$, so $-1 \\le \\cos\\theta \\le 1$ and $-1 \\le \\sin\\theta \\le 1$. A sine of $1.2$ is impossible.',
            '**Periodicity.** Adding a full turn returns $P$ to the same spot: $\\cos(\\theta + 2\\pi) = \\cos\\theta$ and $\\sin(\\theta + 2\\pi) = \\sin\\theta$. Sine and cosine are [[periodic-function|periodic]] with [[period]] $2\\pi$.',
            '**Identity.** The Pythagorean identity above lets you get one of $\\sin\\theta$, $\\cos\\theta$ from the other, *up to sign*. The location of $P$ decides the sign.',
          ],
        },
        {
          type: 'derivation',
          title: 'Given $\\sin\\theta = \\frac35$ and $P$ in the second quadrant, find $\\cos\\theta$',
          steps: [
            { tex: '\\cos^2\\theta + \\left(\\tfrac35\\right)^2 = 1', why: 'Pythagorean identity with the known value of $\\sin\\theta$.' },
            { tex: '\\cos^2\\theta = 1 - \\tfrac{9}{25} = \\tfrac{16}{25}', why: 'Square $\\frac35$ (square top and bottom), then subtract from $1 = \\frac{25}{25}$.' },
            { tex: '\\cos\\theta = \\pm\\tfrac45', why: 'Square root of both sides. Both signs are algebraically possible: the circle has two points at height $\\frac35$, one on each side of the $y$-axis.' },
            { tex: '\\cos\\theta = -\\tfrac45', why: 'In the second quadrant $P$ is left of the $y$-axis, so its $x$-coordinate is negative.' },
          ],
          result: '$\\cos\\theta = -\\frac45$, and $P = \\left(-\\frac45, \\frac35\\right)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the identity is worth memorising',
          text: 'It turns any sine into a cosine and vice versa, and it is the seed of nearly every other identity in trigonometry. It is also a powerful bug detector: if your code produces a "direction" $(c, s)$ with $c^2 + s^2$ far from $1$, something upstream is wrong.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The terminal side of $\\theta$ lies in the **fourth** quadrant and $\\sin\\theta = -\\frac{5}{13}$. Find $\\cos\\theta$.',
      hint: 'Use $\\cos^2\\theta = 1 - \\sin^2\\theta$, then decide the sign from where $P$ is.',
      label: '$\\cos\\theta =$',
      answer: '12/13',
      answerTex: '\\frac{12}{13}',
      explanation: '$\\cos^2\\theta = 1 - \\left(-\\frac{5}{13}\\right)^2 = 1 - \\frac{25}{169} = \\frac{144}{169}$, so $\\cos\\theta = \\pm\\frac{12}{13}$. In the fourth quadrant $P$ is right of the $y$-axis (and below the $x$-axis), so $x > 0$: $\\cos\\theta = \\frac{12}{13}$. Note that squaring wipes out the minus sign on $\\sin\\theta$; the sign of the answer comes only from the quadrant.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'There is an angle $\\theta$ with $\\sin\\theta = 1.2$, as long as $\\theta$ is large enough.',
      answer: false,
      explanation: '$\\sin\\theta$ is the $y$-coordinate of a point on a circle of radius $1$, and no such point is higher than $y = 1$. Making $\\theta$ larger only sends $P$ around the same circle again (period $2\\pi$), so $-1 \\le \\sin\\theta \\le 1$ for every $\\theta$. The same bound holds for cosine.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Circles of any size: how games place things',
      blocks: [
        {
          type: 'p',
          text: 'The unit circle has radius $1$ and centre $(0, 0)$, but scaling and shifting are easy. Multiply the unit point by $r$ to stretch it to radius $r$, then add the centre $(h, k)$ to move it. This one formula is everywhere in game code: orbiting moons, enemies arranged in a ring, a health bar drawn around a portrait, the tip of a rotating sword.',
        },
        {
          type: 'theorem',
          name: 'Point on a circle',
          tex: '(x, y) = (h + r\\cos\\theta,\\; k + r\\sin\\theta)',
          text: 'is the point at angle $\\theta$ on the circle of radius $r$ centred at $(h, k)$.',
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-3, 5],
          equal: true,
          parametric: [{ x: '1 + r*cos(t)', y: '1 + r*sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [1, 1], to: ['1 + r*cos(a)', '1 + r*sin(a)'], color: 'blue', arrow: true, label: 'r' },
            { from: [1, 1], to: ['1 + r*cos(a)', 1], color: 'red', label: 'r cos θ' },
            { from: ['1 + r*cos(a)', 1], to: ['1 + r*cos(a)', '1 + r*sin(a)'], color: 'green', label: 'r sin θ' },
          ],
          points: [
            { x: 1, y: 1, label: 'centre (1, 1)', color: 'gray' },
            { x: '1 + r*cos(a)', y: '1 + r*sin(a)', label: 'P', color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 6.28, step: 0.01, value: 0.8, label: '$\\theta$' },
            { name: 'r', min: 0.5, max: 3.5, step: 0.1, value: 2.5, label: '$r$' },
          ],
          readouts: [
            { label: '$x = 1 + r\\cos\\theta =$', expr: '1 + r*cos(a)', digits: 3 },
            { label: '$y = 1 + r\\sin\\theta =$', expr: '1 + r*sin(a)', digits: 3 },
          ],
          caption: 'Change $r$ and the legs stretch in proportion; change $\\theta$ and the point orbits the centre $(1, 1)$. Animate $\\theta$ over time and you have an orbit.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Orbits are one line of code',
          text: 'To make an object orbit at a steady [[angular-speed]] $\\omega$ (radians per second), set $\\theta = \\omega t$ each frame and draw it at $(h + r\\cos(\\omega t),\\ k + r\\sin(\\omega t))$. No physics engine needed. One caveat: screen coordinates usually have $y$ pointing **down**, so a positive angle appears to turn clockwise on screen.',
        },
        {
          type: 'code',
          title: 'ring.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double pi = std::acos(-1.0);
    const double cx = 100.0, cy = 100.0;  // centre of the ring
    const double r = 40.0;                // radius of the ring
    const int n = 6;                      // number of enemies

    for (int i = 0; i < n; ++i) {
        double theta = 2.0 * pi * i / n;  // evenly spaced angles
        double x = cx + r * std::cos(theta);
        double y = cy + r * std::sin(theta);
        std::printf("enemy %d: theta = %5.1f deg -> (%.2f, %.2f)\\n",
                    i, theta * 180.0 / pi, x, y);
    }
}`,
          output: `enemy 0: theta =   0.0 deg -> (140.00, 100.00)
enemy 1: theta =  60.0 deg -> (120.00, 134.64)
enemy 2: theta = 120.0 deg -> (80.00, 134.64)
enemy 3: theta = 180.0 deg -> (60.00, 100.00)
enemy 4: theta = 240.0 deg -> (80.00, 65.36)
enemy 5: theta = 300.0 deg -> (120.00, 65.36)`,
          annotations: [
            { lines: 5, text: '$\\arccos(-1) = \\pi$: a portable way to get $\\pi$ to full double precision.' },
            { lines: 11, text: 'Divide the full turn $2\\pi$ into $n$ equal slices.' },
            { lines: '12-13', text: 'The point-on-a-circle formula: centre plus $r$ times the unit-circle point.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'A moon orbits a planet centred at $(3, 2)$ at a distance of $5$ units. Write the moon\'s **$x$-coordinate** as a function of its angle $\\theta$.',
      label: '$x(\\theta) =$',
      variables: ['theta'],
      answer: '3 + 5cos(theta)',
      answerTex: '3 + 5\\cos\\theta',
      hint: 'Start from the unit-circle $x$-coordinate $\\cos\\theta$, scale by the radius, then shift by the centre. Type `theta` or θ for the angle.',
      explanation: 'The unit-circle point is $(\\cos\\theta, \\sin\\theta)$. Scaling by $r = 5$ gives $(5\\cos\\theta, 5\\sin\\theta)$, and shifting by the centre gives $(3 + 5\\cos\\theta,\\ 2 + 5\\sin\\theta)$. The $x$-coordinate is $3 + 5\\cos\\theta$. A common slip is $5(3 + \\cos\\theta)$, which scales the centre as well and puts the orbit around $(15, 10)$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A drone circles the point $(1, 0)$ at radius $4$. Find its $x$-coordinate when $\\theta = \\frac{\\pi}{6}$. Give the exact value.',
      hint: 'Use $x = h + r\\cos\\theta$ with $h = 1$, $r = 4$, and $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt3}{2}$.',
      label: '$x =$',
      answer: '1 + 2sqrt(3)',
      answerTex: '1 + 2\\sqrt{3} \\approx 4.464',
      explanation: '$x = 1 + 4\\cos\\frac{\\pi}{6} = 1 + 4 \\cdot \\frac{\\sqrt3}{2} = 1 + 2\\sqrt3 \\approx 4.464$. (Its $y$-coordinate is $0 + 4\\sin\\frac{\\pi}{6} = 4 \\cdot \\frac12 = 2$.) You can type `1 + 2sqrt(3)` or a decimal such as `4.46`.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Negative angles and mirror images',
      blocks: [
        {
          type: 'p',
          text: 'A negative angle rotates **clockwise**. Rotating by $-\\theta$ lands at the mirror image, across the $x$-axis, of the point you reach by rotating $+\\theta$. Reflecting across the $x$-axis keeps $x$ and flips the sign of $y$. That gives two rules worth knowing by heart.',
        },
        {
          type: 'theorem',
          name: 'Negative-angle rules',
          tex: '\\cos(-\\theta) = \\cos\\theta, \\qquad \\sin(-\\theta) = -\\sin\\theta',
          text: 'Cosine is an **even** function, sine is an **odd** function.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: ['cos(a)', 'sin(a)'], color: 'blue', arrow: true, label: 'θ' },
            { from: [0, 0], to: ['cos(a)', '-sin(a)'], color: 'red', arrow: true, label: '−θ' },
            { from: ['cos(a)', 'sin(a)'], to: ['cos(a)', '-sin(a)'], color: 'gray', dashed: true },
          ],
          points: [
            { x: 'cos(a)', y: 'sin(a)', label: '(cos θ, sin θ)', color: 'blue' },
            { x: 'cos(a)', y: '-sin(a)', label: '(cos θ, −sin θ)', color: 'red' },
          ],
          sliders: [{ name: 'a', min: 0, max: 3.14, step: 0.01, value: 1, label: '$\\theta$' }],
          readouts: [
            { label: '$\\sin\\theta =$', expr: 'sin(a)', digits: 4 },
            { label: '$\\sin(-\\theta) =$', expr: 'sin(-a)', digits: 4 },
            { label: '$\\cos(-\\theta) - \\cos\\theta =$', expr: 'cos(-a) - cos(a)', digits: 4 },
          ],
          caption: 'The two points share an $x$-coordinate, and their $y$-coordinates are opposites, for every $\\theta$.',
        },
        {
          type: 'derivation',
          title: 'Find the point on the unit circle at $\\theta = -\\frac{\\pi}{3}$',
          steps: [
            { tex: '\\cos\\left(-\\tfrac{\\pi}{3}\\right) = \\cos\\tfrac{\\pi}{3} = \\tfrac12', why: 'Cosine is even: the reflection does not change $x$.' },
            { tex: '\\sin\\left(-\\tfrac{\\pi}{3}\\right) = -\\sin\\tfrac{\\pi}{3} = -\\tfrac{\\sqrt3}{2}', why: 'Sine is odd: the reflection flips the sign of $y$.' },
            { tex: 'P = \\left(\\tfrac12,\\ -\\tfrac{\\sqrt3}{2}\\right)', why: 'Combine. Sanity check: a clockwise rotation of $60^\\circ$ lands in the fourth quadrant, right and below, which matches the signs.' },
          ],
          result: '$P = \\left(\\frac12, -\\frac{\\sqrt3}{2}\\right)$, the mirror image of the $\\frac{\\pi}{3}$ point.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams often mix negative angles with large ones, such as $\\sin\\left(-\\frac{9\\pi}{2}\\right)$. Use periodicity to strip full turns ($-\\frac{9\\pi}{2} + 4\\pi = -\\frac{\\pi}{2}$), then the circle: the point at $-\\frac{\\pi}{2}$ is $(0, -1)$, so the answer is $-1$. Write the intermediate coterminal angle; instructors look for it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student finds the point on the unit circle at $\\theta = -\\frac{\\pi}{6}$. Tap the first line that is wrong.',
      lines: [
        '$-\\frac{\\pi}{6}$ rotates $30^\\circ$ clockwise, into the fourth quadrant',
        '$\\cos\\left(-\\frac{\\pi}{6}\\right) = -\\cos\\frac{\\pi}{6} = -\\frac{\\sqrt3}{2}$',
        '$\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\sin\\frac{\\pi}{6} = -\\frac12$',
        'So $P = \\left(-\\frac{\\sqrt3}{2}, -\\frac12\\right)$',
      ],
      errorLines: [2],
      explanation: 'Line 2 treats cosine as odd. Cosine is **even**: reflecting across the $x$-axis does not change $x$, so $\\cos\\left(-\\frac{\\pi}{6}\\right) = \\cos\\frac{\\pi}{6} = \\frac{\\sqrt3}{2}$. Line 3 is right, and the correct point is $\\left(\\frac{\\sqrt3}{2}, -\\frac12\\right)$. The student\'s own line 1 should have caught it: in the fourth quadrant $x$ is positive.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'A game stores a character\'s facing direction as an angle $\\theta$ and moves it $s$ units forward each frame. Which update is correct (standard math axes, $\\theta$ in radians)?',
      options: [
        {
          text: '$x \\mathrel{+}= s\\cos\\theta,\\quad y \\mathrel{+}= s\\sin\\theta$',
          correct: true,
          why: '$(\\cos\\theta, \\sin\\theta)$ is a unit-length step in direction $\\theta$; multiplying by $s$ makes it a step of length $s$.',
        },
        {
          text: '$x \\mathrel{+}= s\\sin\\theta,\\quad y \\mathrel{+}= s\\cos\\theta$',
          why: 'Swapped: this measures the angle from the $y$-axis instead of the $x$-axis. (Some engines do use that convention, but it is not the standard-position angle.)',
        },
        {
          text: '$x \\mathrel{+}= s\\cos\\theta,\\quad y \\mathrel{+}= s\\cos\\theta$',
          why: 'This always moves diagonally along $y = x$ (or its opposite), whatever $\\theta$ is.',
        },
        {
          text: '$x \\mathrel{+}= \\cos(s\\theta),\\quad y \\mathrel{+}= \\sin(s\\theta)$',
          why: 'This changes the *direction* with $s$ instead of the distance, and every step has length $1$.',
        },
      ],
      explanation: 'The unit-circle point $(\\cos\\theta, \\sin\\theta)$ is exactly one unit from the origin in direction $\\theta$. Scaling it by $s$ gives a step of length $s$ in that direction: a [[vector]] with components $(s\\cos\\theta, s\\sin\\theta)$. You will meet this again as the components of a vector in the last unit of this course.',
    },
  ],
  takeaways: [
    'For any angle $\\theta$, the terminal side meets the unit circle at $P = (\\cos\\theta, \\sin\\theta)$: cosine is the $x$-coordinate, sine the $y$-coordinate.',
    'Quadrantal angles land on $(\\pm1, 0)$ or $(0, \\pm1)$; the special angles $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$ have coordinates built from $\\frac12$, $\\frac{\\sqrt2}{2}$, $\\frac{\\sqrt3}{2}$.',
    '$\\cos^2\\theta + \\sin^2\\theta = 1$, both values lie in $[-1, 1]$, and both repeat every $2\\pi$.',
    '$\\cos(-\\theta) = \\cos\\theta$ (even) and $\\sin(-\\theta) = -\\sin\\theta$ (odd).',
    'The point at angle $\\theta$ on a circle of radius $r$ centred at $(h, k)$ is $(h + r\\cos\\theta,\\ k + r\\sin\\theta)$, the basis of orbits, rings and directional movement in games.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.3 Unit Circle',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-3-unit-circle',
      source: 'openstax',
      note: 'Free textbook section that defines sine and cosine on the unit circle, with many worked examples.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'The unit-circle definition unit has short videos and plenty of practice problems.',
    },
    {
      title: 'Wikipedia — Unit circle',
      url: 'https://en.wikipedia.org/wiki/Unit_circle',
      source: 'wikipedia',
      note: 'A compact reference with the full annotated unit-circle diagram.',
    },
  ],
};
