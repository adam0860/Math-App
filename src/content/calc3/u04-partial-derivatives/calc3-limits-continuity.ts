import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-limits-continuity',
  title: 'Limits and Continuity',
  summary: 'In the plane a point can be approached along infinitely many paths. Learn when a limit exists, prove it does with squeezing and polar coordinates, and prove it does not with two paths.',
  minutes: 17,
  objectives: [
    'State what $\\lim_{(x, y) \\to (a, b)} f(x, y) = L$ means and evaluate limits of continuous functions by substitution',
    'Show that a limit does not exist by finding two paths with different limits',
    'Explain why checking every straight line is not enough, using $\\dfrac{xy^2}{x^2 + y^4}$',
    'Prove limits exist with the squeeze theorem and polar coordinates, and recognize when the polar argument fails',
    'Decide where a function of two or three variables is continuous',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'What a limit means in two variables',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I, $x \\to a$ had only two directions: from the left and from the right. If both one-sided limits agreed, the [[limit]] existed. In the plane, a point $(x, y)$ can approach $(a, b)$ from every direction, along straight lines, parabolas, spirals, or any path at all. For the limit to exist, **every** approach must lead to the same value.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 360 222" xmlns="http://www.w3.org/2000/svg">
<circle cx="180" cy="120" r="85" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="180" y1="120" x2="117.3" y2="62.6" class="s-gray" stroke-width="1.2"/>
<text x="134.7" y="89.3" font-size="14" font-style="italic">δ</text>
<path d="M327.0,142.4 L188.8,121.3" fill="none" class="s-blue" stroke-width="2.2"/><path d="M188.8,121.3 L197.5,119.1 L196.5,126.1 Z" class="f-blue"/>
<path d="M51.5,178.0 L172.3,123.5" fill="none" class="s-blue" stroke-width="2.2"/><path d="M172.3,123.5 L166.2,130.1 L163.3,123.7 Z" class="f-blue"/>
<path d="M119.9,16.9 L176.4,113.8" fill="none" class="s-blue" stroke-width="2.2"/><path d="M176.4,113.8 L169.2,108.4 L175.2,104.9 Z" class="f-blue"/>
<path d="M312.3,15.0 L306.2,17.4 L300.3,19.9 L294.5,22.3 L288.8,24.8 L283.3,27.2 L278.0,29.6 L272.7,32.1 L267.7,34.5 L262.7,37.0 L257.9,39.4 L253.3,41.9 L248.8,44.3 L244.4,46.7 L240.2,49.2 L236.1,51.6 L232.2,54.1 L228.4,56.5 L224.7,58.9 L221.2,61.4 L217.9,63.8 L214.6,66.3 L211.6,68.7 L208.6,71.1 L205.8,73.6 L203.2,76.0 L200.7,78.5 L198.3,80.9 L196.1,83.4 L194.0,85.8 L192.1,88.2 L190.3,90.7 L188.7,93.1 L187.2,95.6 L185.8,98.0 L184.6,100.4 L183.5,102.9 L182.6,105.3 L181.8,107.8 L181.2,110.2 L180.6,112.7" fill="none" class="s-red" stroke-width="2.2"/><path d="M180.6,112.7 L178.9,103.8 L185.8,105.2 Z" class="f-red"/>
<path d="M60.7,76.6 L67.0,69.8 L73.9,63.5 L81.5,57.6 L89.6,52.3 L98.3,47.6 L107.4,43.4 L116.9,39.9 L126.7,37.0 L136.6,34.7 L146.8,33.1 L156.9,32.1 L167.1,31.7 L177.2,32.0 L187.2,32.9 L196.9,34.4 L206.3,36.5 L215.4,39.1 L224.0,42.3 L232.2,46.0 L239.9,50.1 L247.0,54.7 L253.5,59.6 L259.3,64.9 L264.5,70.4 L268.9,76.2 L272.7,82.2 L275.7,88.4 L278.0,94.7 L279.5,101.0 L280.3,107.3 L280.3,113.6 L279.7,119.8 L278.3,125.9 L276.2,131.8 L273.6,137.5 L270.3,143.0 L266.4,148.2 L262.0,153.0 L257.1,157.5 L251.7,161.7 L246.0,165.4 L239.9,168.8 L233.5,171.7 L226.9,174.1 L220.1,176.2 L213.2,177.7 L206.2,178.8 L199.1,179.5 L192.2,179.7 L185.3,179.5 L178.5,178.8 L171.9,177.8 L165.6,176.3 L159.5,174.5 L153.8,172.3 L148.4,169.8 L143.3,167.0 L138.7,164.0 L134.5,160.7 L130.8,157.2 L127.5,153.5 L124.8,149.7 L122.5,145.8 L120.7,141.8 L119.4,137.8 L118.5,133.8 L118.2,129.8 L118.4,125.8 L118.9,122.0 L120.0,118.3 L121.4,114.7 L123.3,111.2 L125.4,108.0 L128.0,104.9 L130.8,102.1 L133.9,99.5 L137.2,97.2 L140.8,95.2 L144.4,93.4 L148.3,91.9 L152.2,90.6 L156.1,89.7 L160.1,89.0 L164.0,88.6 L167.9,88.5 L171.8,88.6 L175.5,89.0 L179.0,89.6 L182.4,90.4 L185.6,91.4 L188.6,92.6 L191.4,93.9 L193.9,95.4 L196.2,97.1 L198.2,98.8 L199.9,100.6 L201.3,102.5 L202.5,104.4 L203.4,106.3 L204.0,108.2 L204.3,110.1 L204.4,111.9 L204.2,113.7 L203.9,115.4 L203.3,117.1 L202.5,118.6 L201.5,120.0 L200.4,121.2 L199.2,122.4 L197.8,123.3 L196.4,124.2 L194.9,124.9 L193.4,125.4 L191.9,125.8 L190.4,126.0 L188.9,126.1 L187.5,126.1 L186.1,125.9 L184.9,125.6 L183.7,125.2" fill="none" class="s-green" stroke-width="2.2"/><path d="M183.7,125.2 L192.7,124.6 L190.4,131.3 Z" class="f-green"/>
<circle cx="180" cy="120" r="4.5" fill="currentColor"/>
<text x="188" y="138" font-size="13">(a, b)</text>
<text x="296" y="172" font-size="12" class="t-blue">lines</text>
<text x="232" y="26" font-size="12" class="t-red">parabola</text>
<text x="14" y="76" font-size="12" class="t-green">spiral</text>
</svg>`,
          alt: 'A point (a, b) inside a dashed circle of radius delta, approached by three straight lines, a parabola and a spiral path.',
          caption: 'Every path into $(a, b)$ must give the same limiting value. The formal definition says: once $(x, y)$ is inside a small enough disk of radius $\\delta$ around $(a, b)$, by any route, $f(x, y)$ is within $\\varepsilon$ of $L$.',
          maxWidth: 420,
        },
        {
          type: 'definition',
          term: 'Limit of a function of two variables',
          text: '$\\displaystyle\\lim_{(x, y) \\to (a, b)} f(x, y) = L$ means: for every $\\varepsilon > 0$ there is a $\\delta > 0$ such that $|f(x, y) - L| < \\varepsilon$ whenever $(x, y)$ is in the domain of $f$ and $0 < \\sqrt{(x - a)^2 + (y - b)^2} < \\delta$. See [[calc3-limit-two-variables]].',
        },
        {
          type: 'p',
          text: 'The good news: the limit laws from Calculus I (sums, products, quotients with nonzero denominator limits) carry over unchanged. So polynomials and rational functions can be evaluated by **direct substitution** wherever they are defined. For example,',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\lim_{(x, y) \\to (1, 2)} \\left(x^2y^3 - x^3y^2 + 3x + 2y\\right)$',
          steps: [
            { tex: '= 1^2 \\cdot 2^3 - 1^3 \\cdot 2^2 + 3(1) + 2(2)', why: 'A polynomial in $x$ and $y$ is continuous everywhere, so substitute.' },
            { tex: '= 8 - 4 + 3 + 4 = 11', why: 'Arithmetic.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Substitution only works where the function is defined and continuous. The interesting limits are the ones where substituting gives $\\frac00$, and in two variables these can behave in ways no one-variable limit can.',
        },
      ],
    },
    // 2
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\lim_{(x, y) \\to (2, -1)} \\frac{x^2 + xy + y^2}{x - y}$.',
      label: 'limit $=$',
      answer: '1',
      explanation: 'The denominator at $(2, -1)$ is $2 - (-1) = 3 \\ne 0$, so this rational function is continuous there and you may substitute: $\\frac{4 + (2)(-1) + 1}{3} = \\frac{3}{3} = 1$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Different paths, different answers',
      blocks: [
        {
          type: 'p',
          text: 'Consider $f(x, y) = \\dfrac{xy}{x^2 + y^2}$ near the origin, where substitution gives $\\frac00$. Approach along the $x$-axis ($y = 0$): $f(x, 0) = \\frac{0}{x^2} = 0$, so the limit along that path is $0$. Along the $y$-axis it is also $0$. Tempting to conclude the limit is $0$. Now try a slanted line.',
        },
        {
          type: 'derivation',
          title: 'Along the line $y = mx$',
          steps: [
            { tex: 'f(x, mx) = \\frac{x \\cdot mx}{x^2 + m^2x^2}', why: 'Substitute $y = mx$; this restricts $f$ to the line through the origin with slope $m$.' },
            { tex: '= \\frac{m x^2}{(1 + m^2)x^2} = \\frac{m}{1 + m^2}', why: 'Factor $x^2$ from the denominator and cancel ($x \\ne 0$ on the path).' },
            { tex: '\\lim_{x \\to 0} f(x, mx) = \\frac{m}{1 + m^2}', why: 'The value is constant along the whole line, so its limit is that constant.' },
          ],
          result: 'Slope $m = 1$ gives $\\frac12$; $m = 0$ gives $0$; $m = -1$ gives $-\\frac12$. Different paths, different limits: the limit **does not exist**.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-0.8, 0.8],
          parametricSurfaces: [{ x: 'u*cos(v)', y: 'u*sin(v)', z: '0.5sin(2v)', u: [0.02, 2], v: [0, '2pi'], color: 'blue', opacity: 0.6, label: '$z = \\dfrac{xy}{x^2 + y^2}$' }],
          curves: [{ x: 't*cos(arctan(m))', y: 't*sin(arctan(m))', z: 'm/(1 + m^2)', t: [-2, 2], color: 'red', label: 'path $y = mx$ on the surface' }],
          sliders: [{ name: 'm', min: -3, max: 3, step: 0.05, value: 1, label: 'slope $m$', play: true }],
          readouts: [{ label: 'limit along $y = mx$: $\\dfrac{m}{1 + m^2} =$', expr: 'm/(1 + m^2)' }],
          resolution: 40,
          view: { azimuth: 115, elevation: 22 },
          caption: 'The surface is made of horizontal rays: along each line through the origin its height is constant. Turn the red ray with $m$ and it slides up and down the $z$-axis, so near the origin the surface takes every value between $-\\frac12$ and $\\frac12$.',
        },
        {
          type: 'theorem',
          name: 'Two-path test',
          text: 'If $f(x, y) \\to L_1$ as $(x, y) \\to (a, b)$ along one path and $f(x, y) \\to L_2$ along another path, with $L_1 \\ne L_2$, then $\\lim_{(x, y) \\to (a, b)} f(x, y)$ does not exist. See [[calc3-two-path-test]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this function depends only on direction',
          text: 'Write $x = r\\cos\\theta$ and $y = r\\sin\\theta$. Then $\\frac{xy}{x^2 + y^2} = \\frac{r^2\\cos\\theta\\sin\\theta}{r^2} = \\frac12\\sin 2\\theta$: the $r$ cancels completely. The function only sees the **direction** $\\theta$ of the point, never its distance. In code terms, it is the product of the two components of `normalize(v)`, and normalizing a vector has no sensible value as $\\vec v \\to \\vec 0$: that is the same reason `normalize(vec3(0))` is undefined in a shader (typically NaN).',
        },
      ],
    },
    // 4
    {
      kind: 'numeric',
      prompt: 'Find the limit of $f(x, y) = \\dfrac{xy}{x^2 + y^2}$ as $(x, y) \\to (0, 0)$ along the line $y = 2x$.',
      label: 'limit along $y = 2x$:',
      answer: '2/5',
      answerTex: '\\frac25',
      explanation: '$f(x, 2x) = \\frac{2x^2}{x^2 + 4x^2} = \\frac{2x^2}{5x^2} = \\frac25$ for every $x \\ne 0$, so the limit along this line is $\\frac25 = 0.4$. Along the $x$-axis the limit is $0$, so the two-path test shows the full limit does not exist.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Straight lines are not enough',
      blocks: [
        {
          type: 'p',
          text: 'Suppose you check every line through the origin and always get $0$. Surely then the limit is $0$? No. The function $f(x, y) = \\dfrac{xy^2}{x^2 + y^4}$ is the classic counterexample.',
        },
        {
          type: 'derivation',
          title: 'Lines versus a parabola for $f(x, y) = \\dfrac{xy^2}{x^2 + y^4}$',
          steps: [
            { tex: 'f(x, mx) = \\frac{m^2x^3}{x^2 + m^4x^4} = \\frac{m^2 x}{1 + m^4x^2} \\to 0', why: 'Along $y = mx$, cancel $x^2$; the numerator still has a factor $x$, which goes to $0$.' },
            { tex: 'f(0, y) = \\frac{0}{y^4} = 0', why: 'The one line not of the form $y = mx$, the $y$-axis, also gives $0$.' },
            { tex: 'f(y^2, y) = \\frac{y^2 \\cdot y^2}{y^4 + y^4} = \\frac{y^4}{2y^4} = \\frac12', why: 'Along the parabola $x = y^2$ the two denominator terms are the same size, and nothing cancels to zero.' },
          ],
          result: 'Every line gives $0$, but the parabola gives $\\frac12$. The limit does not exist.',
        },
        {
          type: 'plot3d',
          x: [-1, 1],
          y: [-1, 1],
          z: [-0.6, 0.6],
          surfaces: [{ expr: 'x*y^2/(x^2 + y^4)', color: 'blue', opacity: 0.55, label: '$z = \\dfrac{xy^2}{x^2 + y^4}$' }],
          curves: [
            { x: 't^2', y: 't', z: '0.5', t: [-1, 1], color: 'red', label: 'parabola $x = y^2$: height $\\frac12$' },
            { x: 't*cos(arctan(m))', y: 't*sin(arctan(m))', z: '(t*cos(arctan(m)))*(t*sin(arctan(m)))^2/((t*cos(arctan(m)))^2 + (t*sin(arctan(m)))^4)', t: [-1.4, 1.4], color: 'green', label: 'line $y = mx$' },
          ],
          sliders: [{ name: 'm', min: -4, max: 4, step: 0.05, value: 1.5, label: 'slope $m$' }],
          resolution: 50,
          view: { azimuth: 210, elevation: 25 },
          caption: 'A ridge at height $\\frac12$ runs along the parabola $x = y^2$ (red) and a matching valley along $x = -y^2$. Every straight line (green) eventually slips between them as it nears the origin, and its height drops to $0$. A path that hugs the ridge never does.',
        },
        {
          type: 'p',
          text: 'Here is the same story numerically. Each column walks toward the origin along a different path:',
        },
        {
          type: 'code',
          title: 'paths.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// f(x, y) = x y^2 / (x^2 + y^4), undefined at the origin
double f(double x, double y) { return x * y * y / (x * x + y * y * y * y); }

int main() {
    std::printf("%8s %12s %12s %12s\\n", "t", "y = x", "y = 3x", "x = y^2");
    for (int k = 1; k <= 6; ++k) {
        double t = std::pow(10.0, -k);            // step toward the origin
        std::printf("%8.0e %12.6f %12.6f %12.6f\\n",
                    t, f(t, t), f(t, 3 * t), f(t * t, t));
    }
}`,
          output: `       t        y = x       y = 3x      x = y^2
   1e-01     0.099010     0.497238     0.500000
   1e-02     0.009999     0.089277     0.500000
   1e-03     0.001000     0.008999     0.500000
   1e-04     0.000100     0.000900     0.500000
   1e-05     0.000010     0.000090     0.500000
   1e-06     0.000001     0.000009     0.500000`,
          annotations: [
            { lines: 12, text: 'Three paths: the lines $(t, t)$ and $(t, 3t)$, and the parabola $(t^2, t)$.' },
            { lines: 11, text: 'Notice the second column starts near $0.5$ at $t = 0.1$ and only later falls to $0$: a steep line runs close to the ridge for a while. Testing a function numerically at a single small distance can fool you.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'To show a limit does **not** exist, two paths with different limits are a complete proof. To show it **does** exist, no number of paths is enough: you need an argument that covers every path at once, such as the squeeze theorem in the next card.',
        },
      ],
    },
    // 6
    {
      kind: 'truefalse',
      prompt: 'If $f(x, y) \\to L$ as $(x, y) \\to (0, 0)$ along every straight line through the origin, then $\\displaystyle\\lim_{(x, y) \\to (0, 0)} f(x, y) = L$.',
      answer: false,
      explanation: '$f(x, y) = \\frac{xy^2}{x^2 + y^4}$ tends to $0$ along every line through the origin, but along the parabola $x = y^2$ it equals $\\frac12$. Lines are only some of the possible paths, and the limit requires all of them to agree.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Proving a limit exists: squeeze and polar coordinates',
      blocks: [
        {
          type: 'p',
          text: 'To prove a limit exists you need a bound that holds no matter how $(x, y)$ approaches. The [[squeeze-theorem]] works in two variables exactly as in one: if $|f(x, y) - L| \\le g(x, y)$ and $g(x, y) \\to 0$, then $f(x, y) \\to L$.',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{3x^2y}{x^2 + y^2} = 0$',
          steps: [
            { tex: '0 \\le \\frac{x^2}{x^2 + y^2} \\le 1', why: 'The denominator is the numerator plus the nonnegative $y^2$ (for $(x, y) \\ne (0, 0)$).' },
            { tex: '\\left|\\frac{3x^2y}{x^2 + y^2}\\right| = 3|y| \\cdot \\frac{x^2}{x^2 + y^2} \\le 3|y|', why: 'Split off the fraction that is at most $1$.' },
            { tex: '3|y| \\to 0 \\text{ as } (x, y) \\to (0, 0)', why: '$|y| \\le \\sqrt{x^2 + y^2}$, the distance to the origin, which goes to $0$ along every path.' },
            { tex: '\\lim_{(x, y) \\to (0, 0)} \\frac{3x^2y}{x^2 + y^2} = 0', why: 'Squeeze theorem.' },
          ],
        },
        {
          type: 'p',
          text: '**The polar technique** packages this. Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$; then $(x, y) \\to (0, 0)$ exactly when $r \\to 0^+$, whatever $\\theta$ does. If you can bound $|f - L|$ by something depending on $r$ alone that goes to $0$, the limit is $L$.',
        },
        {
          type: 'derivation',
          title: 'The same limit in [[polar-coordinates]]',
          steps: [
            { tex: '\\frac{3x^2y}{x^2 + y^2} = \\frac{3r^3\\cos^2\\theta\\sin\\theta}{r^2} = 3r\\cos^2\\theta\\sin\\theta', why: 'Substitute and use $x^2 + y^2 = r^2$.' },
            { tex: '|3r\\cos^2\\theta\\sin\\theta| \\le 3r', why: '$|\\cos\\theta| \\le 1$ and $|\\sin\\theta| \\le 1$ for **every** $\\theta$: the bound does not depend on the direction.' },
            { tex: '3r \\to 0 \\text{ as } r \\to 0^+', why: 'So the limit is $0$ by the squeeze theorem.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The bound must not depend on $\\theta$',
          text: 'It is not enough that $f \\to L$ as $r \\to 0$ for each fixed $\\theta$: fixed $\\theta$ just means a straight line. In polar form, $\\frac{xy^2}{x^2 + y^4} = \\frac{r\\cos\\theta\\sin^2\\theta}{\\cos^2\\theta + r^2\\sin^4\\theta}$ goes to $0$ for each fixed $\\theta$, yet near $\\theta = \\frac{\\pi}{2}$ the denominator can be as small as you like, and the limit fails. Always finish with a bound like $|f - L| \\le C\\,r$ that holds for all $\\theta$ at once.',
        },
      ],
    },
    // 8
    {
      kind: 'error',
      prompt: 'A student uses polar coordinates to evaluate $\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2}$. Tap the first wrong line.',
      lines: [
        'Let $x = r\\cos\\theta$, $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$',
        '$xy = r^2\\cos\\theta\\sin\\theta$',
        '$\\dfrac{xy}{x^2 + y^2} = \\dfrac{r^2\\cos\\theta\\sin\\theta}{r^2} = r\\cos\\theta\\sin\\theta$',
        '$|r\\cos\\theta\\sin\\theta| \\le r$ for every $\\theta$',
        'As $r \\to 0^+$, the bound goes to $0$, so the limit is $0$',
      ],
      errorLines: [3],
      explanation: 'Line 3 cancels incorrectly: $\\frac{r^2\\cos\\theta\\sin\\theta}{r^2} = \\cos\\theta\\sin\\theta = \\frac12\\sin 2\\theta$, with **no** factor of $r$ left. The value depends on $\\theta$ and does not shrink as $r \\to 0$, so the limit does not exist (it is $\\frac12$ along $y = x$ and $0$ along $y = 0$). Lines 4 and 5 are valid reasoning applied to the wrong expression.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Continuity',
      blocks: [
        {
          type: 'definition',
          term: 'Continuity (two variables)',
          text: '$f$ is [[calc3-continuity-two-variables|continuous]] at $(a, b)$ if $\\displaystyle\\lim_{(x, y) \\to (a, b)} f(x, y) = f(a, b)$: the limit exists, $f(a, b)$ is defined, and the two are equal. $f$ is continuous on a region if it is continuous at every point of it.',
        },
        {
          type: 'p',
          text: 'Just as in Calculus I, [[continuity]] is preserved by the usual operations. Polynomials in $x$ and $y$ are continuous everywhere. Rational functions are continuous wherever the denominator is nonzero. Compositions of continuous functions are continuous: $\\sin(xy)$ and $e^{x^2 - y}$ are continuous everywhere, and $\\ln(x^2 + y^2 - 1)$ is continuous wherever it is defined, outside the unit circle.',
        },
        {
          type: 'derivation',
          title: 'Fixing a hole, or failing to',
          steps: [
            { tex: 'g(x, y) = \\begin{cases} \\dfrac{3x^2y}{x^2 + y^2} & (x, y) \\ne (0, 0) \\\\ 0 & (x, y) = (0, 0) \\end{cases}', why: 'Define the function at the bad point by the value of its limit.' },
            { tex: '\\lim_{(x, y) \\to (0, 0)} g(x, y) = 0 = g(0, 0)', why: 'We proved this limit is $0$ with the squeeze theorem. So $g$ is continuous everywhere: the hole was removable.' },
            { tex: 'h(x, y) = \\dfrac{xy}{x^2 + y^2}, \\quad h(0, 0) = c', why: 'Try the same for $xy/(x^2 + y^2)$.' },
            { tex: '\\text{no } c \\text{ works}', why: 'Its limit at the origin does not exist, so no choice of $h(0, 0)$ can equal it. This discontinuity cannot be repaired.' },
          ],
        },
        {
          type: 'p',
          text: 'Everything extends to three or more variables: $\\lim_{(x, y, z) \\to (a, b, c)} f(x, y, z) = L$ means $f$ is close to $L$ whenever the point is inside a small **ball** around $(a, b, c)$, and the same continuity rules apply. For example, $\\frac{xy + yz}{x^2 + y^2 + z^2}$ has no limit at the origin (along the $x$-axis it is $0$, along $x = y = z$ it is $\\frac23$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Continuity in practice',
          text: 'Formulas like $\\frac{xy}{x^2 + y^2}$ hide inside real code: a normalized direction, an angle from `atan2(y, x)`, a lighting term divided by a distance. Near the bad point a tiny change in input produces a large change in output, which shows up as flickering normals, jittering cameras or NaNs. Knowing *which* singularities are removable (patch with the limit value) and which are not (guard with an epsilon or a fallback direction) is a practical use of this lesson.',
        },
      ],
    },
    // 10
    {
      kind: 'mcq',
      prompt: 'Each function is undefined at the origin. Which one can be made continuous at $(0, 0)$ by assigning it a suitable value there?',
      options: [
        { text: '$\\dfrac{xy}{x^2 + y^2}$', why: 'Its limit along $y = mx$ is $\\frac{m}{1 + m^2}$, which depends on $m$: no limit, so no value works.' },
        { text: '$\\dfrac{x^2 - y^2}{x^2 + y^2}$', why: 'Along the $x$-axis it is $1$, along the $y$-axis it is $-1$: no limit.' },
        { text: '$\\dfrac{xy^2}{x^2 + y^4}$', why: 'Lines give $0$ but the parabola $x = y^2$ gives $\\frac12$: no limit.' },
        { text: '$\\dfrac{x^2y^2}{x^2 + y^2}$', correct: true, why: 'In polar form it is $r^2\\cos^2\\theta\\sin^2\\theta$, bounded by $r^2 \\to 0$. Defining it to be $0$ at the origin makes it continuous.' },
      ],
      explanation: 'A discontinuity is removable exactly when the limit exists. For $\\frac{x^2y^2}{x^2 + y^2}$: $\\left|\\frac{x^2y^2}{x^2 + y^2}\\right| \\le y^2 \\to 0$ (since $\\frac{x^2}{x^2 + y^2} \\le 1$), so the limit is $0$. The other three each have two paths with different limits.',
    },
    // 11
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(x^2 + y^2)}{x^2 + y^2}$.',
      hint: 'Let $u = x^2 + y^2$. What does $u$ do as $(x, y) \\to (0, 0)$?',
      label: 'limit $=$',
      answer: '1',
      explanation: 'Set $u = x^2 + y^2 = r^2$. As $(x, y) \\to (0, 0)$ along any path, $u \\to 0^+$, and the expression is $\\frac{\\sin u}{u} \\to 1$, the famous limit from Calculus I. Because the function depends only on the distance $r$ (not on $\\theta$), path dependence cannot occur.',
    },
    // 12
    {
      kind: 'order',
      prompt: 'Put the steps of a polar-coordinates proof that $\\displaystyle\\lim_{(x, y) \\to (0, 0)} \\frac{x^3}{x^2 + y^2} = 0$ in order.',
      lines: [
        'Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$',
        'Simplify: $\\dfrac{r^3\\cos^3\\theta}{r^2} = r\\cos^3\\theta$',
        'Bound it independently of $\\theta$: $|r\\cos^3\\theta| \\le r$',
        'Note that $(x, y) \\to (0, 0)$ means $r \\to 0^+$, so $r \\to 0$ and the limit is $0$ by the squeeze theorem',
      ],
      distractors: ['Check that the limit is $0$ along $y = mx$ for every $m$, and conclude it is $0$'],
      explanation: 'Substitute, simplify, bound by a function of $r$ alone, then squeeze. The distractor is not a proof: checking lines only covers straight paths, and the function $\\frac{xy^2}{x^2 + y^4}$ shows that can be misleading.',
    },
    // 13
    {
      kind: 'fill',
      prompt: 'Complete the strategy.',
      template: 'To prove a two-variable limit does not exist, find ___ paths along which $f$ has ___ limits. To prove it does exist, bound $|f - L|$ by a quantity that goes to $0$ along ___ path.',
      blanks: [{ answers: ['two'] }, { answers: ['different'] }, { answers: ['every'] }],
      wordBank: ['two', 'different', 'every', 'equal', 'one', 'some'],
      explanation: 'Non-existence needs just two disagreeing paths. Existence needs a uniform argument, such as the squeeze theorem with a bound depending only on the distance $r$, which then covers every path at once.',
    },
  ],
  takeaways: [
    '$\\lim_{(x, y) \\to (a, b)} f(x, y) = L$ requires $f$ to approach $L$ along every path; continuous functions (polynomials, rationals with nonzero denominator, compositions) allow direct substitution.',
    'Two paths with different limits prove a limit does not exist; for $\\frac{xy}{x^2 + y^2}$ the line $y = mx$ gives $\\frac{m}{1 + m^2}$.',
    'Agreement along every straight line is not enough: $\\frac{xy^2}{x^2 + y^4}$ gives $0$ on lines and $\\frac12$ on $x = y^2$.',
    'To prove a limit exists, squeeze: in polar form, bound $|f - L|$ by a function of $r$ alone that tends to $0$.',
    '$f$ is continuous at $(a, b)$ when its limit there equals $f(a, b)$; a hole is removable exactly when the limit exists.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, Chapter 4: Differentiation of Functions of Several Variables',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 4.2 gives the formal definition of limits and continuity with more two-path and squeeze examples.',
    },
    {
      title: "Paul's Online Math Notes: Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Limits" page in the Partial Derivatives chapter walks through path-dependence examples step by step.',
    },
    {
      title: 'Khan Academy: Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'Short videos on multivariable functions and their limits, with practice exercises.',
    },
  ],
};
