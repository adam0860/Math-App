import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-parabolas',
  title: 'Graphing Parabolas',
  summary: 'Vertex, axis, width and direction: read a parabola straight from its equation, and design a perfect jump arc.',
  minutes: 18,
  objectives: [
    'Describe how $a$ changes the width and direction of $y = ax^2$',
    'Graph $y = a(x - h)^2 + k$ by reading off the vertex $(h, k)$ and axis $x = h$',
    'Find the vertex of $y = ax^2 + bx + c$ using $x = -\\frac{b}{2a}$ or by completing the square',
    'Sketch a parabola from its vertex, intercepts and symmetry',
    'Use the vertex to find the maximum height of a projectile and to design a game jump',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The basic parabola $y = x^2$',
      blocks: [
        {
          type: 'p',
          text: 'Every equation $y = ax^2 + bx + c$ with $a \\neq 0$ graphs as the same kind of curve, a [[parabola]]. Throw a ball, fire an arrow in a game, aim a water fountain: the path is a parabola. To understand all of them, start with the simplest one.',
        },
        {
          type: 'table',
          headers: ['$x$', '$-3$', '$-2$', '$-1$', '$0$', '$1$', '$2$', '$3$'],
          rows: [['$y = x^2$', '$9$', '$4$', '$1$', '$0$', '$1$', '$4$', '$9$']],
          caption: 'The $y$-values read the same from both ends.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-1, 10],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          points: [
            { x: -2, y: 4, label: '(−2, 4)' },
            { x: 2, y: 4, label: '(2, 4)' },
            { x: 0, y: 0, label: 'vertex (0, 0)' },
          ],
          vlines: [{ x: 0, label: 'axis x = 0' }],
          caption: 'Points at the same height come in mirror pairs on either side of the vertical line $x = 0$.',
        },
        {
          type: 'definition',
          term: 'Vertex and axis of symmetry',
          text: 'The [[vertex]] is the turning point of a parabola: its lowest point if it opens up, its highest if it opens down. The [[axis-of-symmetry]] is the vertical line through the vertex; the parabola is its own mirror image across this line.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the graph is symmetric',
          text: 'Because $(-x)^2 = x^2$ for every $x$: the inputs $3$ and $-3$ always give the same output. So whenever $(x, y)$ is on the graph, so is $(-x, y)$, which is exactly mirror symmetry across the $y$-axis. And since $x^2 \\ge 0$, with equality only at $x = 0$, the lowest point is $(0, 0)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'The point $(3, 9)$ is on the graph of $y = x^2$. Which other point must be on the graph because of symmetry?',
      options: [
        { text: '$(3, -9)$', why: 'That reflects across the $x$-axis. $y = x^2$ is never negative, so no point below the axis is on the graph.' },
        { text: '$(-3, 9)$', correct: true, why: 'Reflecting across the axis of symmetry $x = 0$ flips the sign of $x$ and keeps the height: $(-3)^2 = 9$.' },
        { text: '$(-3, -9)$', why: 'That reflects through the origin, which would require $(-3)^2 = -9$.' },
        { text: '$(9, 3)$', why: 'Swapping coordinates reflects across the line $y = x$; $9^2 = 81$, not $3$.' },
      ],
      explanation: 'The axis of symmetry of $y = x^2$ is the vertical line $x = 0$. Mirroring across a vertical line changes $x$ to its opposite and leaves $y$ alone, so $(3, 9)$ pairs with $(-3, 9)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The coefficient $a$: width and direction',
      blocks: [
        {
          type: 'p',
          text: 'Now multiply by a constant: $y = ax^2$. Each height of the basic parabola gets multiplied by $a$. Drag the slider and watch what that does.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-8, 8],
          functions: [
            { expr: 'x^2', label: '$y = x^2$', color: 'gray', dashed: true },
            { expr: 'a*x^2', label: '$y = ax^2$', color: 'blue' },
          ],
          points: [{ x: 1, y: 'a', label: '(1, a)' }],
          sliders: [{ name: 'a', min: -3, max: 3, step: 0.1, value: 2, label: '$a$' }],
          caption: 'The point above $x = 1$ is always at height $a$: an easy way to read $a$ off a graph.',
        },
        {
          type: 'list',
          items: [
            '$a > 0$: opens **up**, the vertex is a minimum. $a < 0$: opens **down**, the vertex is a maximum.',
            '$|a| > 1$: heights are stretched, so the parabola looks **narrower** (steeper).',
            '$0 < |a| < 1$: heights are compressed, so the parabola looks **wider** (flatter).',
            '$a = 0$: the graph collapses to the line $y = 0$, no longer a parabola. That is why quadratics require $a \\neq 0$.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "narrower" and not "taller"',
          text: 'A parabola goes up forever, so it cannot really get taller. Stretching every height by $2$ means the curve reaches any given height at a smaller $|x|$: $y = 2x^2$ hits $8$ at $x = \\pm 2$, while $y = x^2$ needs $x = \\pm\\sqrt{8} \\approx \\pm 2.83$. Reaching heights sooner looks like hugging the axis more tightly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'The parabola $y = -0.5x^2$ is narrower than $y = x^2$.',
      answer: false,
      explanation: 'Width is controlled by $|a|$, and here $|a| = 0.5 < 1$, so the graph is **wider** (flatter) than $y = x^2$. The negative sign is a separate effect: it flips the parabola to open downward. For instance, at $x = 2$ it is at height $-2$, only half as far from the axis as $y = x^2$, which is at height $4$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Vertex form: $y = a(x - h)^2 + k$',
      blocks: [
        {
          type: 'p',
          text: 'In the Completing the Square lesson you rewrote $x^2 - 6x + 11$ as $(x - 3)^2 + 2$ and found its minimum, $2$, at $x = 3$. That rewritten form is so useful for graphing that it has a name.',
        },
        {
          type: 'theorem',
          name: 'Vertex form',
          tex: 'y = a(x - h)^2 + k',
          text: 'is a parabola with vertex $(h, k)$, axis of symmetry $x = h$, and the same shape (width and direction) as $y = ax^2$.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-8, 8],
          functions: [
            { expr: 'x^2', label: '$y = x^2$', color: 'gray', dashed: true },
            { expr: 'a(x - h)^2 + k', label: '$y = a(x - h)^2 + k$', color: 'blue' },
          ],
          points: [{ x: 'h', y: 'k', label: 'vertex (h, k)', color: 'red' }],
          vlines: [{ x: 'h', label: 'axis x = h', color: 'red' }],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.1, value: 1, label: '$a$' },
            { name: 'h', min: -5, max: 5, step: 0.5, value: 2, label: '$h$' },
            { name: 'k', min: -6, max: 6, step: 0.5, value: -3, label: '$k$' },
          ],
          readouts: [
            { label: 'vertex $x = h =$', expr: 'h', digits: 2 },
            { label: 'vertex $y = k =$', expr: 'k', digits: 2 },
          ],
          caption: 'Moving $h$ slides the parabola left and right; moving $k$ slides it up and down; $a$ changes width and direction without moving the vertex.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the vertex is $(h, k)$',
          text: 'Take $a > 0$. The term $(x - h)^2$ is never negative and equals $0$ only when $x = h$. So $a(x - h)^2 + k \\ge k$, with the smallest value $k$ reached at $x = h$: the lowest point is $(h, k)$. (For $a < 0$ the same argument gives $\\le k$, a highest point.) Symmetry follows too: $x = h + d$ and $x = h - d$ give the same $(\\pm d)^2$, hence the same height.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Watch the sign of $h$',
          text: 'The form has a **minus**: $(x - h)$. So $y = (x - 4)^2$ has $h = 4$ (shifted right), while $y = (x + 4)^2 = (x - (-4))^2$ has $h = -4$ (shifted left). The sign of $k$ reads directly: $+k$ up, $-k$ down.',
        },
        {
          type: 'derivation',
          title: 'Graph $y = 2(x - 1)^2 - 8$',
          steps: [
            { tex: 'a = 2, \\quad h = 1, \\quad k = -8', why: 'Match against $a(x - h)^2 + k$.' },
            { tex: '\\text{vertex } (1, -8), \\quad \\text{axis } x = 1', why: 'Read straight off the form. $a > 0$, so it opens up and $(1, -8)$ is the minimum.' },
            { tex: 'x = 0: \\ y = 2(0 - 1)^2 - 8 = -6', why: 'The $y$-intercept is $(0, -6)$. By symmetry across $x = 1$, $(2, -6)$ is also on the graph.' },
            { tex: '2(x - 1)^2 - 8 = 0 \\implies (x - 1)^2 = 4', why: 'For $x$-intercepts set $y = 0$, add $8$, divide by $2$.' },
            { tex: 'x - 1 = \\pm 2 \\implies x = 3 \\ \\text{or} \\ x = -1', why: 'Square root property. Note they sit symmetrically, $2$ units either side of $x = 1$.' },
          ],
          result: 'Plot the vertex $(1, -8)$, the intercepts $(-1, 0)$, $(3, 0)$, $(0, -6)$ and the mirror point $(2, -6)$, then draw a smooth U through them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Read the vertex of $y = -3(x + 2)^2 + 5$. Type the coordinates.',
      template: 'vertex $= ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['-2'] }, { answers: ['5'] }],
      hint: 'Rewrite $(x + 2)$ as $(x - (-2))$.',
      explanation: '$(x + 2) = (x - (-2))$, so $h = -2$, and $k = 5$. The vertex is $(-2, 5)$. Because $a = -3 < 0$ the parabola opens downward, so this vertex is the **highest** point, and $|a| = 3$ makes it narrower than $y = x^2$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Find the $x$-intercepts of $y = 2(x + 1)^2 - 18$. Enter both, separated by a comma.',
      label: '$x =$',
      answer: ['2', '-4'],
      hint: 'Set $y = 0$, isolate the square, then use the square root property.',
      explanation: '$2(x + 1)^2 = 18$, so $(x + 1)^2 = 9$ and $x + 1 = \\pm 3$, giving $x = 2$ or $x = -4$. Sanity check: the vertex is at $x = -1$, and the intercepts are $3$ units either side of it, as symmetry demands.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'From standard form to the vertex',
      blocks: [
        {
          type: 'p',
          text: 'Quadratics usually arrive in standard form $y = ax^2 + bx + c$. Completing the square converts any of them to vertex form. Doing it once with letters gives a formula for the vertex.',
        },
        {
          type: 'derivation',
          title: 'Complete the square on $y = ax^2 + bx + c$',
          steps: [
            { tex: 'y = a\\left(x^2 + \\frac{b}{a}x\\right) + c', why: 'Factor $a$ out of the $x$ terms only (not an equation, so we cannot divide it away).' },
            { tex: 'y = a\\left(x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} - \\frac{b^2}{4a^2}\\right) + c', why: 'Add and subtract $\\left(\\frac{b}{2a}\\right)^2$ inside the bracket: a net change of $0$.' },
            { tex: 'y = a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a} + c', why: 'The first three terms form a perfect square; the subtracted piece comes out of the bracket multiplied by $a$: $a \\cdot \\frac{b^2}{4a^2} = \\frac{b^2}{4a}$.' },
          ],
          result: 'Matching with $a(x - h)^2 + k$: $\\;h = -\\dfrac{b}{2a}$, and $k$ is simply the $y$-value there.',
        },
        {
          type: 'theorem',
          name: 'Vertex of $y = ax^2 + bx + c$',
          tex: 'x_{\\text{vertex}} = -\\frac{b}{2a}, \\qquad y_{\\text{vertex}} = \\text{(plug } x_{\\text{vertex}} \\text{ back in)}',
        },
        {
          type: 'p',
          text: 'You have seen $-\\frac{b}{2a}$ before: it is the "centre" in the quadratic formula, the midpoint of the two roots. That is symmetry again: the $x$-intercepts sit equally far either side of the axis.',
        },
        {
          type: 'derivation',
          title: 'Vertex of $y = 2x^2 - 8x + 3$',
          steps: [
            { tex: 'x = -\\frac{-8}{2 \\cdot 2} = 2', why: '$a = 2$, $b = -8$. Mind the double negative.' },
            { tex: 'y = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5', why: 'Substitute $x = 2$ into the original equation.' },
            { tex: 'y = 2(x - 2)^2 - 5', why: 'So the vertex form is this. Check: $2(x^2 - 4x + 4) - 5 = 2x^2 - 8x + 3$ ✓.' },
          ],
          result: 'Vertex $(2, -5)$, a minimum since $a > 0$. The $y$-intercept is $c = 3$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'In standard form, $c$ is always the $y$-intercept (set $x = 0$). In vertex form, the vertex is visible. Each form makes different features obvious, which is why it pays to move between them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Find the minimum value of $y = x^2 + 6x + 4$ (the $y$-coordinate of its vertex).',
      label: '$y_{\\text{min}} =$',
      answer: '-5',
      hint: 'First find $x = -\\frac{b}{2a}$, then substitute.',
      explanation: '$x = -\\frac{6}{2 \\cdot 1} = -3$, and $y = (-3)^2 + 6(-3) + 4 = 9 - 18 + 4 = -5$. So the vertex is $(-3, -5)$, and in vertex form $y = (x + 3)^2 - 5$. Since $a = 1 > 0$, $-5$ is the minimum.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Put the steps for converting $y = 2x^2 + 12x + 7$ to vertex form in order.',
      lines: [
        '$y = 2(x^2 + 6x) + 7$',
        '$y = 2(x^2 + 6x + 9 - 9) + 7$',
        '$y = 2(x + 3)^2 - 18 + 7$',
        '$y = 2(x + 3)^2 - 11$',
        'vertex $(-3, -11)$',
      ],
      distractors: ['$y = 2(x + 3)^2 - 9 + 7$'],
      explanation: 'Factor $2$ from the $x$ terms, add and subtract $9$ inside, then move $-9$ out of the bracket, where it gets multiplied by $2$ and becomes $-18$. The distractor forgets that multiplication, a very common slip. Check: $2(x + 3)^2 - 11 = 2x^2 + 12x + 18 - 11 = 2x^2 + 12x + 7$ ✓, and $-\\frac{b}{2a} = -\\frac{12}{4} = -3$ ✓.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Sketching any parabola',
      blocks: [
        {
          type: 'p',
          text: 'With the vertex, symmetry and the solving methods from this unit, you can sketch any parabola accurately in about a minute.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Direction', text: '$a > 0$ opens up, $a < 0$ opens down.' },
            { title: 'Vertex and axis', text: '$x = -\\frac{b}{2a}$ (or read $(h, k)$ from vertex form); draw the axis $x = h$.' },
            { title: '$y$-intercept', text: 'Set $x = 0$. Reflect it across the axis for a free second point.' },
            { title: '$x$-intercepts', text: 'Solve $y = 0$ by factoring, square roots or the formula. The discriminant tells you in advance whether there are two, one or none.' },
            { title: 'Draw', text: 'A smooth, symmetric U through the points; never a V with a sharp tip.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Sketch $y = -x^2 + 4x + 5$',
          steps: [
            { tex: 'a = -1 < 0', why: 'Opens down, so the vertex will be a maximum.' },
            { tex: 'x = -\\frac{4}{2(-1)} = 2, \\quad y = -4 + 8 + 5 = 9', why: 'Vertex $(2, 9)$; axis $x = 2$.' },
            { tex: '(0, 5) \\ \\text{and its mirror} \\ (4, 5)', why: '$y$-intercept is $c = 5$; $x = 0$ is $2$ left of the axis, so $x = 4$ is the mirror.' },
            { tex: '-x^2 + 4x + 5 = 0 \\iff x^2 - 4x - 5 = 0 \\iff (x - 5)(x + 1) = 0', why: 'Multiply by $-1$ to make factoring easier.' },
            { tex: 'x = 5 \\ \\text{or} \\ x = -1', why: 'The $x$-intercepts, each $3$ units from the axis.' },
          ],
        },
        {
          type: 'graph',
          x: [-3, 7],
          y: [-4, 11],
          functions: [{ expr: '-x^2 + 4x + 5', label: '$y = -x^2 + 4x + 5$' }],
          points: [
            { x: 2, y: 9, label: 'vertex (2, 9)', color: 'red' },
            { x: 0, y: 5, label: '(0, 5)' },
            { x: 4, y: 5, label: '(4, 5)' },
            { x: -1, y: 0, label: '(−1, 0)' },
            { x: 5, y: 0, label: '(5, 0)' },
          ],
          vlines: [{ x: 2, label: 'x = 2' }],
          caption: 'Five points and a line of symmetry pin down the whole curve. The largest $y$-value is $9$, so every output satisfies $y \\le 9$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graphing questions are usually graded on labelled features: vertex, axis of symmetry, intercepts, and correct direction. Label every point with its coordinates. "Find the maximum value" wants the $y$-coordinate of the vertex; "where does it occur" wants the $x$-coordinate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student finds the vertex of $y = 3x^2 + 12x + 1$. Tap the first incorrect line.',
      lines: [
        '$a = 3, \\ b = 12, \\ c = 1$',
        '$x = \\dfrac{b}{2a} = \\dfrac{12}{6} = 2$',
        '$y = 3(2)^2 + 12(2) + 1 = 37$',
        'vertex $(2, 37)$',
      ],
      errorLines: [2],
      explanation: 'The formula is $x = -\\frac{b}{2a}$; the minus sign was dropped. Correctly $x = -\\frac{12}{6} = -2$ and $y = 3(4) - 24 + 1 = -11$, so the vertex is $(-2, -11)$. A quick reasonableness check would have caught this: with $a, b > 0$, the parabola\'s lowest point is to the **left** of the $y$-axis, and a minimum of $37$ is far above the $y$-intercept $1$, which is impossible for a minimum.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Projectiles and jump arcs',
      blocks: [
        {
          type: 'p',
          text: 'In [[projectile-motion]], height is a quadratic in time: $y(t) = -\\frac{1}{2}g t^2 + v_0 t + y_0$, where $v_0$ is the upward launch speed, $y_0$ the launch height and $g$ the strength of gravity. Since $a = -\\frac{g}{2} < 0$ the graph opens down, and the vertex is the **peak** of the flight.',
        },
        {
          type: 'derivation',
          title: 'Peak of $y = -5t^2 + 20t + 1$ (a game with $g = 10$)',
          steps: [
            { tex: 't = -\\frac{20}{2(-5)} = 2', why: 'Vertex formula with $a = -5$, $b = 20$: the peak happens at $t = 2$ s.' },
            { tex: 'y(2) = -5(4) + 40 + 1 = 21', why: 'Substitute to get the peak height.' },
          ],
          result: 'The projectile peaks at $21$ units, $2$ seconds after launch. In general the peak is at $t = \\frac{v_0}{g}$, at height $\\frac{v_0^2}{2g}$ above the launch point.',
        },
        {
          type: 'graph',
          x: [0, 7],
          y: [-2, 50],
          yStep: 5,
          functions: [{ expr: '-5x^2 + v*x + 1', label: 'height $y = -5t^2 + v_0 t + 1$ (horizontal axis: $t$)', domain: [0, 7] }],
          points: [{ x: 'v/10', y: 'v^2/20 + 1', label: 'peak', color: 'red' }],
          sliders: [{ name: 'v', min: 5, max: 30, step: 1, value: 20, label: 'launch speed $v_0$' }],
          readouts: [
            { label: 'peak time $\\frac{v_0}{10} =$', expr: 'v/10', digits: 2 },
            { label: 'peak height $\\frac{v_0^2}{20} + 1 =$', expr: 'v^2/20 + 1', digits: 2 },
          ],
          caption: 'Doubling the launch speed doubles the time to the peak but **quadruples** the height gained: height grows with the square of $v_0$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Designing a jump',
          text: 'Platformer designers rarely pick gravity directly. They choose how **high** the jump goes ($H$) and how **long** it takes to reach the top ($T$), then solve for the physics. The peak is at $T = \\frac{v_0}{g}$ with height $H = \\frac{v_0^2}{2g} = \\frac{v_0 T}{2}$. So $v_0 = \\frac{2H}{T}$ and $g = \\frac{v_0}{T} = \\frac{2H}{T^2}$.',
        },
        {
          type: 'code',
          title: 'jump.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    // Designer's choices: jump 3 units high, reaching the top in 0.4 s.
    const double H = 3.0, T = 0.4;
    const double v0 = 2 * H / T;       // launch speed
    const double g = 2 * H / (T * T);  // gravity strength
    std::printf("v0 = %g, g = %g\\n", v0, g);
    for (int k = 0; k <= 4; ++k) {
        double t = 0.2 * k;
        double y = -0.5 * g * t * t + v0 * t;
        std::printf("t = %.1f  y = %.2f\\n", t, y);
    }
}`,
          output: `v0 = 15, g = 37.5
t = 0.0  y = 0.00
t = 0.2  y = 2.25
t = 0.4  y = 3.00
t = 0.6  y = 2.25
t = 0.8  y = 0.00`,
          annotations: [
            { lines: 5, text: 'Pick the feel: apex height $H$ and time-to-apex $T$.' },
            { lines: '6-7', text: 'Solve the vertex equations for the physics: $v_0 = \\frac{2H}{T}$, $g = \\frac{2H}{T^2}$.' },
            { lines: 11, text: 'Height as a quadratic in time, $y = -\\frac{1}{2}gt^2 + v_0 t$.' },
          ],
        },
        {
          type: 'p',
          text: 'The output shows the parabola\'s symmetry in action: the heights at $t = 0.2$ and $t = 0.6$ match, because they are equally far from the apex time $0.4$, and the character lands at $t = 2T = 0.8$ s.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A ball\'s height in feet after $t$ seconds is $y = -16t^2 + 64t + 5$. What is its maximum height?',
      label: '$y_{\\max} =$',
      unit: 'ft',
      answer: '69',
      hint: 'The peak is at the vertex, $t = -\\frac{b}{2a}$.',
      explanation: 'The vertex is at $t = -\\frac{64}{2(-16)} = 2$ s, and $y(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69$ ft. The parabola opens down ($a = -16$), so the vertex is a maximum. (Here $g = 32$ ft/s², so $-\\frac{1}{2}g = -16$.)',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'You want your character\'s jump to peak $2$ units high, $0.5$ seconds after takeoff. What gravity strength $g$ should you use?',
      label: '$g =$',
      unit: 'units/s²',
      answer: '16',
      hint: 'Use $g = \\frac{2H}{T^2}$ from the jump-design callout.',
      explanation: '$g = \\frac{2H}{T^2} = \\frac{2 \\cdot 2}{0.5^2} = \\frac{4}{0.25} = 16$. The launch speed is $v_0 = \\frac{2H}{T} = \\frac{4}{0.5} = 8$. Check: the peak is at $t = \\frac{v_0}{g} = \\frac{8}{16} = 0.5$ ✓ with height $\\frac{v_0^2}{2g} = \\frac{64}{32} = 2$ ✓.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Which describes every $y$-value that $y = -2(x - 3)^2 + 7$ can produce?',
      options: [
        { text: '$y \\le 7$', correct: true, why: 'The parabola opens down with vertex $(3, 7)$, so $7$ is the largest output and every smaller value is reached.' },
        { text: '$y \\ge 7$', why: 'That would be right if it opened **up**. Here $a = -2 < 0$.' },
        { text: '$y \\le 3$', why: '$3$ is the $x$-coordinate of the vertex. The outputs are bounded by the $y$-coordinate.' },
        { text: 'All real numbers', why: 'A parabola always has either a highest or a lowest point, so its outputs are bounded on one side.' },
      ],
      explanation: 'Since $(x - 3)^2 \\ge 0$, we get $-2(x - 3)^2 \\le 0$, so $y \\le 7$, with $y = 7$ exactly at $x = 3$. As $|x - 3|$ grows, $y$ decreases without bound, so every value up to $7$ is reached.',
    },
  ],
  takeaways: [
    'The graph of $y = ax^2 + bx + c$ is a parabola, symmetric about a vertical axis through its vertex.',
    '$a > 0$ opens up, $a < 0$ opens down; $|a| > 1$ is narrower and $|a| < 1$ wider than $y = x^2$.',
    'Vertex form $y = a(x - h)^2 + k$ shows the vertex $(h, k)$ directly; watch the sign of $h$.',
    'For standard form, the vertex is at $x = -\\frac{b}{2a}$; substitute to get its $y$-value. Completing the square converts between the forms.',
    'Projectile height $y = -\\frac{1}{2}gt^2 + v_0 t + y_0$ peaks at the vertex; a jump with apex height $H$ at time $T$ needs $v_0 = \\frac{2H}{T}$, $g = \\frac{2H}{T^2}$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 5.1 Quadratic Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/5-1-quadratic-functions',
      source: 'openstax',
      note: 'Vertex form, finding the vertex from standard form, and applied max/min problems.',
    },
    {
      title: "Paul's Online Notes — Parabolas",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Parabolas.aspx',
      source: 'paul',
      note: 'A step-by-step sketching procedure with several fully graphed examples.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type $y = a(x - h)^2 + k$ and add sliders to explore vertex form yourself.',
    },
  ],
};
