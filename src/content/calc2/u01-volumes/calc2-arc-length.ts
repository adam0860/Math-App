import type { GraphBlock, Lesson } from '../../types';

// Polyline approximation of y = sin(x) on [0, π] with a slider n (1 … N).
// Vertex k sits at x_k = π·min(k, n)/n, so segments with k ≥ n collapse to a
// single point at x = π and only n segments are visible.
const N = 16;
const vx = (k: number) => `pi*min(${k}, n)/n`;
const polySegments: NonNullable<GraphBlock['segments']> = Array.from({ length: N }, (_, k) => ({
  from: [vx(k), `sin(${vx(k)})`] as [string, string],
  to: [vx(k + 1), `sin(${vx(k + 1)})`] as [string, string],
  color: 'red' as const,
}));
const polyLength = Array.from(
  { length: N },
  (_, k) => `sqrt((${vx(k + 1)} - ${vx(k)})^2 + (sin(${vx(k + 1)}) - sin(${vx(k)}))^2)`,
).join(' + ');

export const lesson: Lesson = {
  id: 'calc2-arc-length',
  title: 'Arc Length and Surface Area',
  summary: 'Measure a curve with tiny straight rulers: Pythagoras plus a limit gives the length of a curve and the area of a surface of revolution.',
  minutes: 17,
  objectives: [
    'Approximate the length of a curve with a polyline and explain why the approximation improves as $n$ grows',
    'Derive the arc length formula $L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx$ from the Pythagorean theorem',
    'Compute exact arc lengths, including the "perfect square" family of curves',
    'Compute arc length numerically, as a game does for a spline path',
    'Find the area of a surface of revolution with $S = \\int_a^b 2\\pi f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx$',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Measuring a curve with straight rulers',
      blocks: [
        {
          type: 'p',
          text: 'How long is the arch of $y = \\sin x$ from $x = 0$ to $x = \\pi$? You cannot lay a ruler along a curve. But you *can* measure straight segments: pick points on the curve, connect them with a polyline (a chain of straight segments), and add the segment lengths with the [[distance-formula]].',
        },
        {
          type: 'p',
          text: 'With $n = 1$ the "polyline" is just the chord from $(0, 0)$ to $(\\pi, 0)$, length $\\pi \\approx 3.14$ — clearly too short, because it ignores the hump entirely. Drag the slider and watch the chain hug the curve more closely.',
        },
        {
          type: 'graph',
          x: [-0.3, 3.5],
          y: [-0.5, 1.4],
          equal: true,
          functions: [{ expr: 'sin(x)', label: '$y = \\sin x$', color: 'blue', domain: [0, 'pi'] }],
          segments: polySegments,
          sliders: [{ name: 'n', min: 1, max: N, step: 1, value: 2, label: 'number of segments $n$' }],
          readouts: [
            { label: 'polyline length $\\approx$', expr: polyLength, digits: 5 },
            { label: 'true arc length $\\approx$', expr: '3.820198', digits: 5 },
          ],
          caption: 'The red polyline joins $n + 1$ equally spaced points of the curve. Its length increases with $n$ and approaches the true length $\\approx 3.82020$, but never exceeds it.',
        },
        {
          type: 'table',
          headers: ['$n$', 'polyline length'],
          rows: [
            ['$1$', '$3.14159$'],
            ['$2$', '$3.72419$'],
            ['$4$', '$3.79009$'],
            ['$16$', '$3.81827$'],
            ['$64$', '$3.82008$'],
          ],
          caption: 'Polyline lengths for $y = \\sin x$ on $[0, \\pi]$ (computed by the program later in this lesson). The [[arc-length]] is the number these approach.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the polyline always comes up short',
          text: 'A straight segment is the shortest path between two points, so each chord is at most as long as the piece of curve it skips over. Adding more points replaces one chord by two that bend toward the curve — by the triangle inequality, that can only make the total longer. So the polyline lengths increase toward the true length from below, and we *define* the arc length as their limit as $n \\to \\infty$.',
        },
      ],
    },
    // 2
    {
      kind: 'truefalse',
      prompt: 'For a smooth curve, the length of an inscribed polyline (with its vertices on the curve) is never more than the length of the curve itself.',
      answer: true,
      explanation: 'Each segment connects two points of the curve by the shortest possible path, so it is no longer than the arc it replaces. Summing over all segments, the polyline is at most the arc length, with equality only if the curve is itself made of those straight pieces. That is why the table of polyline lengths for $\\sin x$ creeps *up* toward $3.82020$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'From Pythagoras to an integral',
      blocks: [
        {
          type: 'p',
          text: 'Now let calculus take the limit for us. Split $[a, b]$ into $n$ pieces of width $\\Delta x$. Over one piece the curve rises by $\\Delta y_i = f(x_i) - f(x_{i-1})$, so the chord is the hypotenuse of a right triangle with legs $\\Delta x$ and $\\Delta y_i$.',
        },
        {
          type: 'derivation',
          title: 'Deriving the arc length formula',
          steps: [
            { tex: '\\Delta s_i = \\sqrt{(\\Delta x)^2 + (\\Delta y_i)^2}', why: 'The [[pythagorean-theorem]] for the tiny right triangle under one chord.' },
            { tex: '= \\sqrt{1 + \\left(\\frac{\\Delta y_i}{\\Delta x}\\right)^2}\\;\\Delta x', why: 'Factor $(\\Delta x)^2$ out of the square root; it comes out as $\\Delta x$ because $\\Delta x > 0$.' },
            { tex: '\\frac{\\Delta y_i}{\\Delta x} = f\'(x_i^*) \\text{ for some } x_i^* \\in (x_{i-1}, x_i)', why: 'The [[mean-value-theorem]]: the slope of each chord equals the slope of the tangent at some point inside the piece (this needs $f$ differentiable).' },
            { tex: 'L \\approx \\sum_{i=1}^{n} \\sqrt{1 + [f\'(x_i^*)]^2}\\;\\Delta x', why: 'Add up all the chords. This is exactly the polyline length — and it is a Riemann sum for the function $\\sqrt{1 + [f\'(x)]^2}$.' },
            { tex: 'L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx', why: 'Let $n \\to \\infty$. If $f\'$ is continuous, the integrand is continuous, so the Riemann sums converge to the integral.' },
          ],
          result: 'The arc length integral is a polyline with infinitely many, infinitely short segments.',
        },
        {
          type: 'theorem',
          name: 'Arc length formula',
          tex: 'L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx',
          text: 'valid when $f\'$ is continuous on $[a, b]$ (a *smooth* curve). For a curve written as $x = g(y)$, $c \\le y \\le d$: $L = \\int_c^d \\sqrt{1 + [g\'(y)]^2}\\,dy$.',
        },
        {
          type: 'derivation',
          title: 'Length of $y = x^{3/2}$ from $x = 0$ to $x = 4$',
          steps: [
            { tex: 'f\'(x) = \\tfrac32 x^{1/2}, \\qquad [f\'(x)]^2 = \\tfrac94 x', why: 'Power rule, then square. Squaring the square root is what makes this curve a friendly example.' },
            { tex: 'L = \\int_0^4 \\sqrt{1 + \\tfrac94 x}\\,dx', why: 'Plug into the arc length formula.' },
            { tex: 'u = 1 + \\tfrac94 x, \\quad dx = \\tfrac49\\,du, \\quad u: 1 \\to 10', why: '[[u-substitution]]; the limits change because $x = 0 \\Rightarrow u = 1$ and $x = 4 \\Rightarrow u = 1 + 9 = 10$.' },
            { tex: '= \\frac49 \\int_1^{10} u^{1/2}\\,du = \\frac49 \\cdot \\frac23 u^{3/2}\\Big|_1^{10}', why: 'Power rule for $u^{1/2}$.' },
            { tex: '= \\frac{8}{27}\\left(10\\sqrt{10} - 1\\right) \\approx 9.073', why: '$10^{3/2} = 10\\sqrt{10}$ and $1^{3/2} = 1$.' },
          ],
          result: 'Sanity check: the straight chord from $(0, 0)$ to $(4, 8)$ has length $\\sqrt{80} \\approx 8.944$, just a little shorter. ✓',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Most arc length integrals are hard',
          text: 'The square root of $1 + (f\')^2$ rarely has an elementary antiderivative. Even the sine arch gives $\\int_0^\\pi \\sqrt{1 + \\cos^2 x}\\,dx$, which cannot be written with the usual functions at all (it is an *elliptic integral*). That is not a failure of technique: in practice, arc lengths are usually computed numerically.',
        },
      ],
    },
    // 4
    {
      kind: 'numeric',
      prompt: 'Find the exact length of the curve $y = \\tfrac23 x^{3/2}$ from $x = 0$ to $x = 3$.',
      hint: 'Here $f\'(x) = x^{1/2}$, so $1 + [f\'(x)]^2 = 1 + x$.',
      answer: '14/3',
      answerTex: '\\frac{14}{3}',
      label: '$L =$',
      explanation: '$L = \\int_0^3 \\sqrt{1 + x}\\,dx = \\frac23(1 + x)^{3/2}\\Big|_0^3 = \\frac23\\left(4^{3/2} - 1\\right) = \\frac23(8 - 1) = \\frac{14}{3} \\approx 4.667$. Check: the chord from $(0, 0)$ to $(3, 2\\sqrt3)$ has length $\\sqrt{9 + 12} = \\sqrt{21} \\approx 4.583$, slightly less. ✓',
    },
    // 5
    {
      kind: 'mcq',
      prompt: 'Which integral gives the length of one arch of $y = \\sin x$, from $x = 0$ to $x = \\pi$?',
      options: [
        { text: '$\\displaystyle\\int_0^{\\pi} \\sqrt{1 + \\sin^2 x}\\,dx$', why: 'This squares $f(x)$ instead of $f\'(x)$. Arc length depends on the *slope* of the curve, not its height.' },
        { text: '$\\displaystyle\\int_0^{\\pi} (1 + \\cos x)\\,dx$', why: 'This treats $\\sqrt{1 + \\cos^2 x}$ as $1 + \\cos x$. A square root does not split over a sum. (This integral equals $\\pi$ — the chord length, a giveaway that something went wrong.)' },
        { text: '$\\displaystyle\\int_0^{\\pi} \\sqrt{1 + \\cos^2 x}\\,dx$', correct: true, why: '$f\'(x) = \\cos x$, so the integrand is $\\sqrt{1 + \\cos^2 x}$.' },
        { text: '$\\displaystyle\\int_0^{\\pi} \\sin x\\,dx$', why: 'That is the *area* under the arch (it equals $2$), not the length of its boundary.' },
      ],
      explanation: 'With $f(x) = \\sin x$, $f\'(x) = \\cos x$, so $L = \\int_0^\\pi \\sqrt{1 + \\cos^2 x}\\,dx \\approx 3.820$. Two different questions — "how much area is under it?" and "how long is it?" — lead to very different integrals of the same curve.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The perfect-square trick',
      blocks: [
        {
          type: 'p',
          text: 'Textbook arc length problems that come out exactly are usually built so that $1 + (f\')^2$ is a **perfect square**. The pattern: if $f\'(x) = A - B$ with $4AB = 1$, then $1 + (A - B)^2 = A^2 + 2AB + B^2 = (A + B)^2$, because $1 = 4AB$ turns the cross term $-2AB$ into $+2AB$. The square root then simply disappears.',
        },
        {
          type: 'derivation',
          title: 'Length of $y = \\dfrac{x^3}{6} + \\dfrac{1}{2x}$ from $x = 1$ to $x = 2$',
          steps: [
            { tex: 'f\'(x) = \\frac{x^2}{2} - \\frac{1}{2x^2}', why: 'Power rule on each term; $\\frac{1}{2x} = \\frac12 x^{-1}$ differentiates to $-\\frac12 x^{-2}$.' },
            { tex: '[f\'(x)]^2 = \\frac{x^4}{4} - \\frac12 + \\frac{1}{4x^4}', why: 'Expand $(A - B)^2 = A^2 - 2AB + B^2$. The cross term is $2 \\cdot \\frac{x^2}{2} \\cdot \\frac{1}{2x^2} = \\frac12$.' },
            { tex: '1 + [f\'(x)]^2 = \\frac{x^4}{4} + \\frac12 + \\frac{1}{4x^4} = \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)^2', why: 'Adding $1$ flips $-\\frac12$ to $+\\frac12$, which is exactly the cross term of $(A + B)^2$.' },
            { tex: 'L = \\int_1^2 \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right) dx', why: 'The square root of a square of a positive quantity is that quantity.' },
            { tex: '= \\left[\\frac{x^3}{6} - \\frac{1}{2x}\\right]_1^2 = \\left(\\frac43 - \\frac14\\right) - \\left(\\frac16 - \\frac12\\right)', why: 'Antidifferentiate ($\\frac12 x^{-2} \\to -\\frac12 x^{-1}$) and evaluate.' },
            { tex: '= \\frac{13}{12} + \\frac{4}{12} = \\frac{17}{12}', why: 'Common denominator $12$.' },
          ],
          result: '$L = \\frac{17}{12} \\approx 1.417$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\sqrt{1 + (f\')^2} = 1 + f\''],
            text: 'Square roots do not distribute over sums: $\\sqrt{1 + 9} \\ne 1 + 3$.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\sqrt{(A + B)^2} = |A + B|'],
            text: 'The root only simplifies after you have shown the whole radicand is a perfect square.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'If an exam asks for an *exact* arc length, expect either a $\\sqrt{1 + kx}$ that $u$-substitution handles, or a perfect square in disguise. When you see $f\'$ written as a difference of two terms, compute their product: if it is $\\frac14$, the trick works. Otherwise the question will usually ask you only to *set up* the integral.',
        },
      ],
    },
    // 7
    {
      kind: 'error',
      prompt: 'A student computes the length of $y = x^2$ from $x = 0$ to $x = 1$. Tap the first line that is wrong.',
      lines: [
        '$f\'(x) = 2x$',
        '$L = \\displaystyle\\int_0^1 \\sqrt{1 + (2x)^2}\\,dx$',
        '$= \\displaystyle\\int_0^1 (1 + 2x)\\,dx$',
        '$= \\left[x + x^2\\right]_0^1 = 2$',
      ],
      errorLines: [3],
      explanation: 'Line 3 claims $\\sqrt{1 + 4x^2} = 1 + 2x$, but $(1 + 2x)^2 = 1 + 4x + 4x^2$, not $1 + 4x^2$. The set-up in line 2 is correct; its exact value needs trigonometric substitution (coming in the next unit) and is $\\frac{\\sqrt5}{2} + \\frac14\\ln\\left(2 + \\sqrt5\\right) \\approx 1.479$. The answer $2$ should have looked suspicious: it is the length of the L-shaped path $(0,0) \\to (1,0) \\to (1,1)$, which is longer than the curve.',
    },
    // 8
    {
      kind: 'numeric',
      prompt: 'Find the exact length of $y = \\dfrac{x^2}{2} - \\dfrac{\\ln x}{4}$ from $x = 1$ to $x = e$.',
      hint: '$f\'(x) = x - \\frac{1}{4x}$, and $x \\cdot \\frac{1}{4x} = \\frac14$ — so $1 + (f\')^2$ is a perfect square.',
      answer: 'e^2/2 - 1/4',
      answerTex: '\\frac{e^2}{2} - \\frac14',
      label: '$L =$',
      explanation: '$1 + \\left(x - \\frac{1}{4x}\\right)^2 = x^2 + \\frac12 + \\frac{1}{16x^2} = \\left(x + \\frac{1}{4x}\\right)^2$. So $L = \\int_1^e \\left(x + \\frac{1}{4x}\\right)dx = \\left[\\frac{x^2}{2} + \\frac{\\ln x}{4}\\right]_1^e = \\left(\\frac{e^2}{2} + \\frac14\\right) - \\frac12 = \\frac{e^2}{2} - \\frac14 \\approx 3.445$.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Arc length in code: walking a spline at constant speed',
      blocks: [
        {
          type: 'p',
          text: 'Games are full of curved paths: a camera rail, a racing line, an enemy\'s patrol route, a projectile trail. They are usually stored as **splines** — chains of polynomial pieces such as Bézier curves, each traced by a parameter $t$ running from $0$ to $1$. The catch is that equal steps in $t$ are *not* equal distances along the curve, so an object that advances $t$ at a constant rate speeds up and slows down.',
        },
        {
          type: 'p',
          text: 'The fix is the arc length idea, done numerically. Sample the curve at many points, add up the chord lengths (the polyline), and store the running total in a lookup table. To move at constant speed, look up which $t$ corresponds to the distance you want to have travelled. For a curve given by $x(t), y(t)$ the same Pythagoras argument gives $L = \\int \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$, which you will study properly in the unit on parametric curves.',
        },
        {
          type: 'code',
          title: 'polyline_length.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

double f(double x) { return std::sin(x); }

// Length of the polyline through n+1 points on y = f(x).
double polylineLength(double a, double b, int n) {
    const double dx = (b - a) / n;
    double length = 0.0;
    double xPrev = a, yPrev = f(a);
    for (int i = 1; i <= n; ++i) {
        double x = a + i * dx;
        double y = f(x);
        length += std::hypot(x - xPrev, y - yPrev);  // Pythagoras
        xPrev = x;
        yPrev = y;
    }
    return length;
}

int main() {
    const double pi = std::acos(-1.0);
    for (int n = 1; n <= 1024; n *= 4) {
        std::printf("n = %4d  L = %.6f\\n", n, polylineLength(0.0, pi, n));
    }
}`,
          output: `n =    1  L = 3.141593
n =    4  L = 3.790091
n =   16  L = 3.818275
n =   64  L = 3.820078
n =  256  L = 3.820190
n = 1024  L = 3.820197`,
          annotations: [
            { lines: 4, text: 'The curve: one arch of $\\sin x$. Swap in any function — or any parametric spline.' },
            { lines: 14, text: '`std::hypot(dx, dy)` computes $\\sqrt{dx^2 + dy^2}$ — one chord, the $\\Delta s_i$ of the derivation — without overflow for large values.' },
            { lines: 23, text: 'Quadruple $n$ each pass. The error shrinks by about a factor of $16$ each time: it behaves like $\\frac{1}{n^2}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Arc-length lookup tables',
          text: 'In a real engine you would keep the running `length` after each segment in an array `cumulative[i]`. To place an object at distance `s` along the path, binary-search for the segment where `cumulative[i] <= s < cumulative[i+1]` and interpolate inside it. This *arc-length parameterization* is the standard technique behind constant-speed motion along splines in game engines.',
        },
      ],
    },
    // 10
    {
      kind: 'order',
      prompt: 'Put the steps of the arc length derivation in order.',
      lines: [
        'Approximate the curve by chords over intervals of width $\\Delta x$',
        'Use Pythagoras: each chord has length $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$',
        'Factor out $\\Delta x$ to get $\\sqrt{1 + (\\Delta y / \\Delta x)^2}\\,\\Delta x$',
        'Replace $\\Delta y / \\Delta x$ by $f\'(x_i^*)$ using the Mean Value Theorem',
        'Let $n \\to \\infty$: the Riemann sum becomes $\\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx$',
      ],
      distractors: ['Simplify $\\sqrt{1 + (f\')^2}$ to $1 + f\'$'],
      explanation: 'Geometry first (chords and Pythagoras), then algebra (factor out $\\Delta x$ to expose a slope), then the Mean Value Theorem to turn each chord slope into a derivative value, and finally the limit that turns the sum into an integral. The distractor is the classic algebra error: square roots do not split over sums.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Surface area of revolution',
      blocks: [
        {
          type: 'p',
          text: 'Rotate the curve $y = f(x) \\ge 0$, $a \\le x \\le b$, about the $x$-axis. This time we want the area of the *skin* of the solid, not its volume. Use the polyline again: when one chord spins around the axis it sweeps out a thin band shaped like a lampshade — a [[calc2-frustum]], a cone with its tip cut off.',
        },
        {
          type: 'graph',
          x: [-0.3, 2.4],
          y: [-1.7, 1.7],
          equal: true,
          functions: [
            { expr: 'sqrt(x)', label: '$y = \\sqrt{x}$', color: 'blue', domain: [0, 2] },
            { expr: '-sqrt(x)', color: 'gray', dashed: true, domain: [0, 2] },
          ],
          segments: [
            { from: ['a', 'sqrt(a)'], to: ['a + 0.4', 'sqrt(a + 0.4)'], color: 'red', label: 'slant ℓ' },
            { from: ['a', '-sqrt(a)'], to: ['a + 0.4', '-sqrt(a + 0.4)'], color: 'red', dashed: true },
            { from: ['a', '-sqrt(a)'], to: ['a', 'sqrt(a)'], color: 'purple', dashed: true },
            { from: ['a + 0.4', '-sqrt(a + 0.4)'], to: ['a + 0.4', 'sqrt(a + 0.4)'], color: 'purple', dashed: true },
          ],
          sliders: [{ name: 'a', min: 0.05, max: 1.6, step: 0.05, value: 0.6, label: 'band position $x$' }],
          readouts: [
            { label: 'slant $\\ell =$', expr: 'sqrt(0.16 + (sqrt(a + 0.4) - sqrt(a))^2)', digits: 3 },
            { label: 'band area $\\pi(r_1 + r_2)\\ell =$', expr: 'pi*(sqrt(a) + sqrt(a + 0.4))*sqrt(0.16 + (sqrt(a + 0.4) - sqrt(a))^2)', digits: 3 },
          ],
          caption: 'Side view of one band. The red chord spins about the $x$-axis; its mirror (dashed) is the far side. The purple dashed lines are the band\'s two circular edges, of radii $r_1 = f(x)$ and $r_2 = f(x + \\Delta x)$, seen edge-on.',
        },
        {
          type: 'derivation',
          title: 'Adding up frustums',
          steps: [
            { tex: 'S_{\\text{band}} = \\pi(r_1 + r_2)\\,\\ell = 2\\pi\\,\\bar r\\,\\ell', why: 'The lateral area of a frustum is (average circumference) $\\times$ (slant height), much like the shell volume formula. Here $\\bar r = \\frac{r_1 + r_2}{2}$.' },
            { tex: '\\bar r \\approx f(x_i^*), \\qquad \\ell = \\sqrt{1 + [f\'(x_i^*)]^2}\\,\\Delta x', why: 'The average radius is close to the height of the curve on the piece; the slant is exactly the chord length from the arc length derivation.' },
            { tex: 'S \\approx \\sum_{i=1}^{n} 2\\pi f(x_i^*)\\sqrt{1 + [f\'(x_i^*)]^2}\\,\\Delta x', why: 'Add the bands. This is a Riemann sum.' },
            { tex: 'S = \\int_a^b 2\\pi f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx', why: 'Take the limit, assuming $f\'$ is continuous and $f \\ge 0$.' },
          ],
          result: 'Surface area $= \\int (\\text{circumference}) \\times (\\text{arc length element } ds)$, with $ds = \\sqrt{1 + (f\')^2}\\,dx$.',
        },
        {
          type: 'derivation',
          title: 'Surface area of a sphere of radius $r$',
          steps: [
            { tex: 'f(x) = \\sqrt{r^2 - x^2}, \\quad f\'(x) = \\frac{-x}{\\sqrt{r^2 - x^2}}', why: 'Rotating the upper semicircle about the $x$-axis gives the sphere. Chain rule for $f\'$.' },
            { tex: '1 + [f\'(x)]^2 = 1 + \\frac{x^2}{r^2 - x^2} = \\frac{r^2}{r^2 - x^2}', why: 'Common denominator: $\\frac{r^2 - x^2 + x^2}{r^2 - x^2}$.' },
            { tex: 'f(x)\\sqrt{1 + [f\'(x)]^2} = \\sqrt{r^2 - x^2} \\cdot \\frac{r}{\\sqrt{r^2 - x^2}} = r', why: 'The square roots cancel completely. ($f\'$ blows up at $x = \\pm r$, but the product is the constant $r$, so the integral is perfectly well behaved.)' },
            { tex: 'S = \\int_{-r}^{r} 2\\pi r\\,dx = 2\\pi r \\cdot 2r = 4\\pi r^2', why: 'Integrate a constant over an interval of length $2r$.' },
          ],
          result: 'The famous $4\\pi r^2$ — Archimedes found it with exhaustion; calculus gets it in four lines.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not drop the slant',
          text: 'It is tempting to use bands that are short cylinders, $2\\pi f(x)\\,dx$. That ignores the tilt of the surface and gives the wrong answer: for the cone made by rotating $y = x$ on $[0, 1]$ it gives $\\pi$, but the true lateral area is $\\pi r \\ell = \\pi \\cdot 1 \\cdot \\sqrt2$. (Volumes *can* use flat disks, because the error in volume is negligible; for area it is not, because a tilted band really is wider than $dx$.)',
        },
      ],
    },
    // 12
    {
      kind: 'numeric',
      prompt: 'The curve $y = \\sqrt{x}$, $0 \\le x \\le 2$, is rotated about the $x$-axis. Find the exact surface area.',
      hint: '$f(x)\\sqrt{1 + [f\'(x)]^2} = \\sqrt{x}\\sqrt{1 + \\frac{1}{4x}} = \\sqrt{x + \\frac14}$.',
      answer: '13pi/3',
      answerTex: '\\frac{13\\pi}{3}',
      label: '$S =$',
      explanation: '$f\'(x) = \\frac{1}{2\\sqrt x}$, so $f\\sqrt{1 + (f\')^2} = \\sqrt{x}\\sqrt{\\frac{4x + 1}{4x}} = \\sqrt{x + \\frac14}$. Then $S = 2\\pi\\int_0^2 \\sqrt{x + \\tfrac14}\\,dx = 2\\pi \\cdot \\frac23\\left(x + \\tfrac14\\right)^{3/2}\\Big|_0^2 = \\frac{4\\pi}{3}\\left(\\frac{27}{8} - \\frac18\\right) = \\frac{4\\pi}{3}\\cdot\\frac{13}{4} = \\frac{13\\pi}{3} \\approx 13.6$. Here $\\left(\\frac94\\right)^{3/2} = \\frac{27}{8}$ and $\\left(\\frac14\\right)^{3/2} = \\frac18$.',
    },
    // 13
    {
      kind: 'mcq',
      prompt: 'Which integral gives the area of the surface formed by rotating $y = x^3$, $0 \\le x \\le 1$, about the $x$-axis?',
      options: [
        { text: '$\\displaystyle\\int_0^1 2\\pi x^3\\,dx$', why: 'This uses flat cylindrical bands and ignores the slant factor $\\sqrt{1 + (f\')^2}$.' },
        { text: '$\\displaystyle\\int_0^1 \\pi x^6\\,dx$', why: 'That is the disk-method *volume* of the solid, not the area of its surface.' },
        { text: '$\\displaystyle\\int_0^1 2\\pi\\sqrt{1 + 9x^4}\\,dx$', why: 'The radius $f(x) = x^3$ is missing; this is just $2\\pi$ times the arc length.' },
        { text: '$\\displaystyle\\int_0^1 2\\pi x^3\\sqrt{1 + 9x^4}\\,dx$', correct: true, why: 'Radius $x^3$, and $f\'(x) = 3x^2$ gives $\\sqrt{1 + 9x^4}$.' },
      ],
      explanation: 'Surface area is circumference $2\\pi f(x)$ times $ds = \\sqrt{1 + [f\'(x)]^2}\\,dx$. With $f = x^3$ and $f\' = 3x^2$: $S = \\int_0^1 2\\pi x^3\\sqrt{1 + 9x^4}\\,dx$. The substitution $u = 1 + 9x^4$, $du = 36x^3\\,dx$ finishes it: $S = \\frac{\\pi}{27}\\left(10\\sqrt{10} - 1\\right) \\approx 3.56$.',
    },
    // 14
    {
      kind: 'expr',
      prompt: 'Rotating the line $y = x$, $0 \\le x \\le b$, about the $x$-axis produces a cone. Find its lateral surface area $S(b)$ using the surface area integral.',
      hint: '$f(x) = x$ and $f\'(x) = 1$, so the integrand is $2\\pi x\\sqrt{2}$.',
      label: '$S(b) =$',
      variables: ['b'],
      domain: [0.2, 3],
      answer: 'sqrt(2)*pi*b^2',
      answerTex: '\\sqrt{2}\\,\\pi b^2',
      explanation: '$S = \\int_0^b 2\\pi x\\sqrt{1 + 1^2}\\,dx = 2\\sqrt2\\,\\pi\\cdot\\frac{b^2}{2} = \\sqrt2\\,\\pi b^2$. Check with geometry: the cone has radius $r = b$ and slant height $\\ell = \\sqrt{b^2 + b^2} = b\\sqrt2$, so $\\pi r \\ell = \\sqrt2\\,\\pi b^2$. ✓',
    },
  ],
  takeaways: [
    'Arc length is the limit of inscribed polyline lengths; polylines always underestimate and increase toward it.',
    'Pythagoras on a tiny piece gives $ds = \\sqrt{1 + [f\'(x)]^2}\\,dx$, so $L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx$ for smooth $f$.',
    'Exact answers usually come from $\\sqrt{1 + kx}$ or a perfect square; most arc lengths must be computed numerically — exactly what games do for splines.',
    'Surface area of revolution about the $x$-axis: $S = \\int_a^b 2\\pi f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx$ — circumference times $ds$, never just $dx$.',
    '$\\sqrt{A + B} \\ne \\sqrt{A} + \\sqrt{B}$: the root only simplifies when the whole radicand is a perfect square.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 6.4 Arc Length of a Curve and Surface Area',
      url: 'https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area',
      source: 'openstax',
      note: 'Full derivations of both formulas with frustum diagrams and more examples.',
    },
    {
      title: "Paul's Online Notes — Arc Length",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/ArcLength.aspx',
      source: 'paul',
      note: 'Introduces the compact $ds$ notation and shows when to integrate in $y$ instead of $x$.',
    },
    {
      title: "Paul's Online Notes — Surface Area",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/SurfaceArea.aspx',
      source: 'paul',
      note: 'Surface area about both axes, with the four equivalent forms of the formula.',
    },
  ],
};
