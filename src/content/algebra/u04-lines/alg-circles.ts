import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-circles',
  title: 'Circles',
  summary: 'A circle is every point at one fixed distance from a center — and the distance formula turns that sentence into an equation.',
  minutes: 18,
  objectives: [
    'Derive the standard equation of a circle $(x - h)^2 + (y - k)^2 = r^2$ from the distance formula',
    'Read the center and radius from a circle\'s equation, and write the equation from given information',
    'Decide whether a point is inside, on or outside a circle',
    'Complete the square to convert general form to standard form, and recognise degenerate cases',
    'Find the tangent line to a circle at a point using the perpendicular radius',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'A circle is a distance condition',
      blocks: [
        {
          type: 'p',
          text: 'Tie a string of length $r$ to a pin and swing a pencil around it: you draw every point that is exactly $r$ away from the pin. That is the precise definition of a circle — and since the coordinate plane has a distance formula, we can turn it straight into an equation.',
        },
        {
          type: 'definition',
          term: 'Circle',
          text: 'The **circle** with **center** $(h, k)$ and **radius** $r > 0$ is the set of all points $(x, y)$ whose distance from $(h, k)$ is exactly $r$.',
        },
        {
          type: 'derivation',
          title: 'From the definition to an equation',
          steps: [
            { tex: '\\sqrt{(x - h)^2 + (y - k)^2} = r', why: 'The distance formula from $(h, k)$ to a general point $(x, y)$, set equal to $r$. This *is* the definition, written in symbols.' },
            { tex: '(x - h)^2 + (y - k)^2 = r^2', why: 'Square both sides to clear the radical. Both sides are non-negative, so squaring neither adds nor loses solutions (see the why-box below).' },
          ],
          result: 'This is the **standard form** of a circle\'s equation.',
        },
        {
          type: 'theorem',
          name: 'Standard form of a circle',
          tex: '(x - h)^2 + (y - k)^2 = r^2',
          text: 'The [[circle-equation]] with center $(h, k)$ and radius $r$. With the center at the [[origin]] it simplifies to $x^2 + y^2 = r^2$.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-6, 6],
          equal: true,
          parametric: [{ x: 'h + r*cos(t)', y: 'k + r*sin(t)', t: [0, '2pi'], color: 'blue', label: '$(x - h)^2 + (y - k)^2 = r^2$' }],
          segments: [{ from: ['h', 'k'], to: ['h + r', 'k'], color: 'red', label: 'r' }],
          points: [{ x: 'h', y: 'k', label: '(h, k)', color: 'red' }],
          sliders: [
            { name: 'h', min: -4, max: 4, step: 0.5, value: 1, label: 'center $h$' },
            { name: 'k', min: -3, max: 3, step: 0.5, value: -1, label: 'center $k$' },
            { name: 'r', min: 0.5, max: 4, step: 0.5, value: 3, label: 'radius $r$' },
          ],
          readouts: [{ label: 'right-hand side $r^2 =$', expr: 'r^2', digits: 2 }],
          caption: '$h$ and $k$ move the circle without changing its size; $r$ changes its size without moving it. The axes are drawn to equal scale so the circle looks round.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why squaring is safe here',
          text: 'Squaring an equation can create false solutions: $x = 3$ has one solution but $x^2 = 9$ has two. That happens only when one side could be negative. Here the left side is a square root (never negative) and $r > 0$, so $\\sqrt{A} = r$ and $A = r^2$ have exactly the same solutions. The squared form is equivalent — and much easier to work with.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'A circle is not the graph of a single equation $y = \\ldots$: a vertical line through the middle of the circle hits it **twice**. Solving for $y$ gives two halves, $y = k \\pm \\sqrt{r^2 - (x - h)^2}$. The circle $x^2 + y^2 = 1$, the *unit circle*, will be the star of the trigonometry course.',
        },
      ],
    },
    // 2
    {
      kind: 'mcq',
      prompt: 'Which equation describes the circle with center $(2, -3)$ that passes through the origin?',
      options: [
        { text: '$(x + 2)^2 + (y - 3)^2 = 13$', why: 'The signs inside are flipped: this circle is centered at $(-2, 3)$. Standard form uses $x - h$ and $y - k$.' },
        { text: '$(x - 2)^2 + (y + 3)^2 = \\sqrt{13}$', why: 'The radius is $\\sqrt{13}$, but the right side of standard form is $r^2 = 13$.' },
        { text: '$(x - 2)^2 + (y + 3)^2 = 13$', correct: true, why: '$r^2 = (0 - 2)^2 + (0 + 3)^2 = 4 + 9 = 13$, and $y - (-3) = y + 3$.' },
        { text: '$(x - 2)^2 + (y + 3)^2 = 25$', why: 'This adds the coordinates before squaring, $(2 + 3)^2 = 25$. Square each change separately: $2^2 + 3^2 = 13$.' },
      ],
      explanation: 'The radius is the distance from the center to any point on the circle — here, the origin. So $r^2 = (0 - 2)^2 + (0 - (-3))^2 = 4 + 9 = 13$, and you don\'t even need to take the square root, since standard form wants $r^2$. With $h = 2$, $k = -3$: $(x - 2)^2 + (y + 3)^2 = 13$. Check: $(0, 0)$ gives $4 + 9 = 13$ ✓.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Reading and writing circle equations',
      blocks: [
        {
          type: 'p',
          text: 'Standard form displays the center and radius, but in disguise: the center coordinates appear with **opposite signs**, and the right side is the radius **squared**. Rewrite each square as "$x$ minus something" to read the center correctly.',
        },
        {
          type: 'table',
          headers: ['equation', 'rewritten as', 'center', 'radius'],
          rows: [
            ['$(x - 3)^2 + (y - 1)^2 = 16$', '$(x - 3)^2 + (y - 1)^2 = 4^2$', '$(3, 1)$', '$4$'],
            ['$(x + 2)^2 + (y - 5)^2 = 9$', '$(x - (-2))^2 + (y - 5)^2 = 3^2$', '$(-2, 5)$', '$3$'],
            ['$x^2 + (y + 4)^2 = 10$', '$(x - 0)^2 + (y - (-4))^2 = (\\sqrt{10})^2$', '$(0, -4)$', '$\\sqrt{10}$'],
            ['$x^2 + y^2 = 1$', '$(x - 0)^2 + (y - 0)^2 = 1^2$', '$(0, 0)$', '$1$'],
          ],
        },
        {
          type: 'p',
          text: 'Going the other way, you need the center and $r^2$. Often you are given something else and must find those first — and the distance and midpoint formulas from earlier in this unit do all the work.',
        },
        {
          type: 'derivation',
          title: 'The circle with a diameter from $(-1, 2)$ to $(5, 10)$',
          steps: [
            { tex: '(h, k) = \\left( \\frac{-1 + 5}{2}, \\frac{2 + 10}{2} \\right) = (2, 6)', why: 'The center of a circle is the midpoint of any diameter, so use the midpoint formula.' },
            { tex: 'r^2 = (5 - 2)^2 + (10 - 6)^2', why: 'The radius is the distance from the center to either endpoint. Standard form needs $r^2$, so skip the square root.' },
            { tex: '= 9 + 16 = 25', why: 'So $r = 5$. (Check: the diameter has length $\\sqrt{6^2 + 8^2} = 10 = 2r$ ✓.)' },
            { tex: '(x - 2)^2 + (y - 6)^2 = 25', why: 'Substitute $h = 2$, $k = 6$, $r^2 = 25$ into standard form.' },
          ],
          result: 'The circle is $(x - 2)^2 + (y - 6)^2 = 25$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic slips',
          text: '**Sign:** $(x + 2)^2$ means $h = -2$, not $2$. **Square:** $= 9$ means $r = 3$, not $9$. A fast self-check: plug in the center plus $r$ in the $x$-direction, $(h + r, k)$. It must satisfy the equation.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Standard test items: "find the center and radius", "write the equation given the center and a point", and "given the endpoints of a diameter". The last one combines midpoint and distance — instructors like it precisely because it tests the whole unit at once.',
        },
      ],
    },
    // 4
    {
      kind: 'fill',
      prompt: 'Read the center and radius of the circle $(x + 1)^2 + (y - 4)^2 = 7$.',
      template: 'The center is ( ___ , ___ ) and the radius is ___ .',
      blanks: [{ answers: ['$-1$'] }, { answers: ['$4$'] }, { answers: ['$\\sqrt{7}$'] }],
      wordBank: ['$-1$', '$1$', '$4$', '$-4$', '$7$', '$\\sqrt{7}$', '$49$'],
      explanation: 'Rewrite as $(x - (-1))^2 + (y - 4)^2 = (\\sqrt{7})^2$. So $h = -1$, $k = 4$, and $r^2 = 7$ gives $r = \\sqrt{7} \\approx 2.65$. The two traps are reading $+1$ as $h = 1$ and reading the right side $7$ as the radius.',
    },
    // 5
    {
      kind: 'numeric',
      prompt: 'A circle has center $(3, -1)$ and passes through the point $(7, 2)$. What is its radius?',
      hint: 'The radius is the distance from the center to the point.',
      label: '$r =$',
      answer: '5',
      explanation: '$r = \\sqrt{(7 - 3)^2 + (2 - (-1))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$. So the equation is $(x - 3)^2 + (y + 1)^2 = 25$. Any point on the circle can be used to find the radius, because every one of them is the same distance from the center.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Inside, on, or outside?',
      blocks: [
        {
          type: 'p',
          text: 'The left side of standard form, $(x - h)^2 + (y - k)^2$, is the **squared distance** from $(x, y)$ to the center. Comparing it with $r^2$ tells you where a point is:',
        },
        {
          type: 'list',
          items: [
            '$(x - h)^2 + (y - k)^2 < r^2$: closer than $r$ — **inside** the circle.',
            '$(x - h)^2 + (y - k)^2 = r^2$: exactly $r$ away — **on** the circle.',
            '$(x - h)^2 + (y - k)^2 > r^2$: farther than $r$ — **outside** the circle.',
          ],
        },
        {
          type: 'graph',
          x: [-4, 10],
          y: [-8, 5],
          equal: true,
          parametric: [{ x: '3 + 5cos(t)', y: '-2 + 5sin(t)', t: [0, '2pi'], color: 'blue', label: '$(x - 3)^2 + (y + 2)^2 = 25$' }],
          segments: [{ from: [3, -2], to: ['p', 'q'], dashed: true, color: 'gray' }],
          points: [
            { x: 3, y: -2, label: '(3, −2)', color: 'blue' },
            { x: 'p', y: 'q', label: 'P', color: 'red' },
          ],
          sliders: [
            { name: 'p', min: -3, max: 9, step: 1, value: 6, label: '$x$-coordinate of $P$' },
            { name: 'q', min: -7, max: 4, step: 1, value: 2, label: '$y$-coordinate of $P$' },
          ],
          readouts: [
            { label: 'squared distance $(x - 3)^2 + (y + 2)^2 =$', expr: '(p - 3)^2 + (q + 2)^2', digits: 0 },
            { label: 'compare with $r^2 =$', expr: '25', digits: 0 },
          ],
          caption: 'Start at $P = (6, 2)$: squared distance $9 + 16 = 25$, so $P$ is on the circle. Move it in to $(0, 0)$ ($13 < 25$, inside) or out to $(8, 1)$ ($34 > 25$, outside).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Circle collision in games',
          text: 'Did the player click inside this round button? Is the bullet inside the enemy\'s hit circle? Each is this test, with **no square root**: compare $dx^2 + dy^2$ with $r^2$. Two circles overlap when the distance between their centers is less than $r_1 + r_2$, i.e. when $dx^2 + dy^2 < (r_1 + r_2)^2$. Circle colliders are popular precisely because this check is so cheap.',
        },
        {
          type: 'code',
          title: 'inside.cpp',
          runnable: true,
          code: `#include <cstdio>

struct Circle { double h, k, r; };

const char* classify(Circle c, double x, double y) {
    double dx = x - c.h, dy = y - c.k;
    double d2 = dx * dx + dy * dy;   // squared distance to the center
    double r2 = c.r * c.r;
    if (d2 < r2) return "inside";
    if (d2 > r2) return "outside";
    return "on the circle";
}

int main() {
    Circle c{3, -2, 5};
    double pts[][2] = {{6, 2}, {0, 0}, {8, 1}, {-3, -2}};
    for (auto& p : pts)
        std::printf("(%g, %g) is %s\\n", p[0], p[1], classify(c, p[0], p[1]));
}`,
          output: `(6, 2) is on the circle
(0, 0) is inside
(8, 1) is outside
(-3, -2) is outside`,
          annotations: [
            { lines: '6-7', text: 'The left side of standard form: the squared distance from $(x, y)$ to the center.' },
            { lines: '9-11', text: 'Compare with $r^2$. In real games, the "on" case is checked with a small tolerance, because floating-point values are rarely exactly equal.' },
          ],
        },
      ],
    },
    // 7
    {
      kind: 'truefalse',
      prompt: 'The point $(4, 4)$ lies on the circle $x^2 + y^2 = 32$.',
      answer: true,
      explanation: 'Substitute: $4^2 + 4^2 = 16 + 16 = 32$, which equals the right side, so the point is on the circle. Note that the radius is $\\sqrt{32} = 4\\sqrt{2} \\approx 5.66$, not $32$ — and not $4$, even though both coordinates are $4$: the point $(4, 4)$ is $4\\sqrt{2}$ from the origin, along the diagonal.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'General form and completing the square',
      blocks: [
        {
          type: 'p',
          text: 'Multiply out the circle $(x - 3)^2 + (y + 2)^2 = 25$ and tidy up: $x^2 - 6x + 9 + y^2 + 4y + 4 = 25$, which becomes $x^2 + y^2 - 6x + 4y - 12 = 0$. That is the [[general-form-of-a-circle|general form]]. It hides the center and radius, so we need a way to reverse the expansion.',
        },
        {
          type: 'p',
          text: 'The reverse move is called [[completing-the-square]]. It relies on the [[perfect-square-trinomial]] pattern from the factoring lessons:',
        },
        {
          type: 'math',
          tex: 'x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2',
          caption: 'Halve the coefficient of $x$, square it, and add it: the result factors as a perfect square.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "half of $b$, squared" is the magic number',
          text: 'Expand the right side: $\\left(x + \\frac{b}{2}\\right)^2 = x^2 + 2 \\cdot \\frac{b}{2} x + \\frac{b^2}{4} = x^2 + bx + \\frac{b^2}{4}$. The middle term of a perfect square is *twice* the product of the two parts, so to match $bx$ the second part must be $\\frac{b}{2}$ — and the constant must be its square. For $x^2 - 6x$: half of $-6$ is $-3$, and $(-3)^2 = 9$, so $x^2 - 6x + 9 = (x - 3)^2$.',
        },
        {
          type: 'derivation',
          title: 'Center and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$',
          steps: [
            { tex: '(x^2 - 6x) + (y^2 + 4y) = 12', why: 'Group the $x$-terms and the $y$-terms, and move the constant to the right side.' },
            { tex: '(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4', why: 'Complete each square: $\\left(\\frac{-6}{2}\\right)^2 = 9$ and $\\left(\\frac{4}{2}\\right)^2 = 4$. Whatever you add on the left you **must** add on the right, to keep the equation balanced.' },
            { tex: '(x - 3)^2 + (y + 2)^2 = 25', why: 'Factor each perfect square (the number inside is half the middle coefficient: $-3$ and $+2$), and add $12 + 9 + 4$.' },
          ],
          result: 'Center $(3, -2)$, radius $\\sqrt{25} = 5$ — the circle we started from.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Forgetting to add the completing numbers to the **right side** is the most common error in this whole topic. It changes the radius while leaving the center looking correct, so it is easy to miss. Check by expanding your answer: it must reproduce the original equation.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Completing the square works this cleanly only when $x^2$ and $y^2$ both have coefficient $1$. If you see $2x^2 + 2y^2 + \\ldots = 0$, divide every term by $2$ first. (If the coefficients of $x^2$ and $y^2$ differ, the graph is not a circle at all.) You will use completing the square again, in depth, for quadratic equations and parabolas.',
        },
      ],
    },
    // 9
    {
      kind: 'order',
      prompt: 'Order the steps to find the center and radius of $x^2 + y^2 + 8x - 2y + 8 = 0$.',
      lines: [
        '$(x^2 + 8x) + (y^2 - 2y) = -8$',
        '$(x^2 + 8x + 16) + (y^2 - 2y + 1) = -8 + 16 + 1$',
        '$(x + 4)^2 + (y - 1)^2 = 9$',
        'Center $(-4, 1)$, radius $3$',
      ],
      distractors: ['$(x - 4)^2 + (y + 1)^2 = 9$'],
      explanation: 'Group and move the constant; add $\\left(\\frac{8}{2}\\right)^2 = 16$ and $\\left(\\frac{-2}{2}\\right)^2 = 1$ to **both** sides; factor. The number inside each square is half the middle coefficient *with its sign*: $x^2 + 8x + 16 = (x + 4)^2$, so the center has $h = -4$. The distractor flips those signs.',
    },
    // 10
    {
      kind: 'numeric',
      prompt: 'Find the radius of the circle $x^2 + y^2 - 10x + 6y + 18 = 0$.',
      hint: 'Move $18$ to the right, then add $\\left(\\frac{-10}{2}\\right)^2$ and $\\left(\\frac{6}{2}\\right)^2$ to both sides.',
      label: '$r =$',
      answer: '4',
      explanation: '$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$, so $(x - 5)^2 + (y + 3)^2 = 16$. The center is $(5, -3)$ and the radius is $\\sqrt{16} = 4$. If your right side came out as $-18$, you forgot to add $25$ and $9$ to the right as well — whatever is added on the left must be added on the right.',
    },
    // 11
    {
      kind: 'error',
      prompt: 'A student finds the center and radius of $x^2 + y^2 + 4x - 6y - 3 = 0$. Tap the first line that is wrong.',
      lines: [
        '$(x^2 + 4x) + (y^2 - 6y) = 3$',
        '$(x^2 + 4x + 4) + (y^2 - 6y + 9) = 3$',
        '$(x + 2)^2 + (y - 3)^2 = 3$',
        'Center $(-2, 3)$, radius $\\sqrt{3}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 adds $4$ and $9$ to the left side only, which unbalances the equation. Correctly: $(x^2 + 4x + 4) + (y^2 - 6y + 9) = 3 + 4 + 9 = 16$, so $(x + 2)^2 + (y - 3)^2 = 16$. The center $(-2, 3)$ happens to survive the mistake, but the radius is $4$, not $\\sqrt{3}$.',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Tangent lines and impostor circles',
      blocks: [
        {
          type: 'p',
          text: 'A [[tangent-line]] to a circle touches it at exactly one point. Geometry supplies the key fact: **the tangent at a point is perpendicular to the radius drawn to that point.** That turns the problem into the perpendicular-lines skill from the previous lesson.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-7, 7],
          equal: true,
          parametric: [{ x: '5cos(t)', y: '5sin(t)', t: [0, '2pi'], color: 'blue', label: '$x^2 + y^2 = 25$' }],
          segments: [
            { from: [0, 0], to: ['5cos(a)', '5sin(a)'], color: 'red', label: 'radius' },
            { from: ['5cos(a) + 4sin(a)', '5sin(a) - 4cos(a)'], to: ['5cos(a) - 4sin(a)', '5sin(a) + 4cos(a)'], color: 'green', label: 'tangent' },
          ],
          points: [{ x: '5cos(a)', y: '5sin(a)', color: 'green' }],
          sliders: [{ name: 'a', min: 0, max: 6.25, step: 0.05, value: 0.93, label: 'move the point around the circle' }],
          readouts: [
            { label: 'point $x \\approx$', expr: '5cos(a)', digits: 2 },
            { label: 'point $y \\approx$', expr: '5sin(a)', digits: 2 },
          ],
          caption: 'Wherever the point goes, the green tangent meets the red radius at a right angle. The starting position is close to $(3, 4)$.',
        },
        {
          type: 'derivation',
          title: 'Tangent to $x^2 + y^2 = 25$ at $(3, 4)$',
          steps: [
            { tex: '3^2 + 4^2 = 25 \\ \\checkmark', why: 'First confirm the point is actually on the circle.' },
            { tex: 'm_{\\text{radius}} = \\frac{4 - 0}{3 - 0} = \\frac{4}{3}', why: 'Slope of the radius from the center $(0, 0)$ to $(3, 4)$.' },
            { tex: 'm_{\\text{tangent}} = -\\frac{3}{4}', why: 'The tangent is perpendicular to the radius: negative reciprocal.' },
            { tex: 'y - 4 = -\\tfrac{3}{4}(x - 3)', why: 'Point-slope form through the point of tangency.' },
            { tex: 'y = -\\tfrac{3}{4}x + \\tfrac{9}{4} + 4 = -\\tfrac{3}{4}x + \\tfrac{25}{4}', why: 'Distribute ($-\\frac{3}{4} \\cdot -3 = \\frac{9}{4}$) and add $4 = \\frac{16}{4}$.' },
          ],
          result: 'The tangent line is $y = -\\frac{3}{4}x + \\frac{25}{4}$ (in standard form, $3x + 4y = 25$).',
        },
        {
          type: 'heading',
          text: 'When "circle equations" aren\'t circles',
        },
        {
          type: 'p',
          text: 'After completing the square you reach $(x - h)^2 + (y - k)^2 = c$. A sum of two squares is never negative, so the value of $c$ decides everything:',
        },
        {
          type: 'list',
          items: [
            '$c > 0$: a genuine circle with radius $\\sqrt{c}$.',
            '$c = 0$: only the single point $(h, k)$ works (both squares must be $0$). This is a *degenerate* circle of radius $0$.',
            '$c < 0$: **no** points at all — no real $(x, y)$ makes a sum of squares negative.',
          ],
        },
      ],
    },
    // 13
    {
      kind: 'expr',
      prompt: 'Find the equation of the line tangent to the circle $x^2 + y^2 = 25$ at the point $(-4, 3)$, in the form $y = mx + b$.',
      label: '$y =$',
      answer: '4x/3 + 25/3',
      answerTex: '\\tfrac{4}{3}x + \\tfrac{25}{3}',
      hint: 'The radius to $(-4, 3)$ has slope $\\frac{3}{-4}$. The tangent slope is its negative reciprocal.',
      explanation: 'The radius from $(0, 0)$ to $(-4, 3)$ has slope $\\frac{3 - 0}{-4 - 0} = -\\frac{3}{4}$, so the tangent has slope $\\frac{4}{3}$. Point-slope: $y - 3 = \\frac{4}{3}(x + 4)$, so $y = \\frac{4}{3}x + \\frac{16}{3} + 3 = \\frac{4}{3}x + \\frac{25}{3}$. Check: $\\frac{4}{3}(-4) + \\frac{25}{3} = \\frac{9}{3} = 3$ ✓.',
    },
    // 14
    {
      kind: 'mcq',
      prompt: 'What is the graph of $x^2 + y^2 - 2x + 4y + 10 = 0$?',
      options: [
        { text: 'A circle with center $(1, -2)$ and radius $\\sqrt{5}$', why: 'This gets $1 + 4 = 5$ by forgetting to move the constant $10$ to the right side. Moved correctly, the right side is $-10 + 1 + 4 = -5$.' },
        { text: 'A circle with center $(-1, 2)$ and radius $\\sqrt{10}$', why: 'Both the signs of the center and the right side are off. Complete the square carefully: $x^2 - 2x + 1 = (x - 1)^2$.' },
        { text: 'The single point $(1, -2)$', why: 'That happens when the right side is exactly $0$. Here it is $-5$.' },
        { text: 'Nothing: no points satisfy it', correct: true, why: 'Completing the square gives $(x - 1)^2 + (y + 2)^2 = -5$, and a sum of squares can never be negative.' },
      ],
      explanation: '$(x^2 - 2x + 1) + (y^2 + 4y + 4) = -10 + 1 + 4$, so $(x - 1)^2 + (y + 2)^2 = -5$. The left side is a sum of squares, always $\\ge 0$, so no real point satisfies the equation and the graph is empty. An equation that *looks* like a circle is only a circle when the completed right side is positive.',
    },
  ],
  takeaways: [
    'A circle is all points at distance $r$ from a center $(h, k)$; the distance formula turns this into $(x - h)^2 + (y - k)^2 = r^2$.',
    'Read the center with opposite signs and the radius as the square root of the right side: $(x + 2)^2 + (y - 5)^2 = 9$ has center $(-2, 5)$ and radius $3$.',
    'Compare $(x - h)^2 + (y - k)^2$ with $r^2$ to decide inside / on / outside — the square-root-free test games use for collisions.',
    'Complete the square (add $\\left(\\frac{b}{2}\\right)^2$ to **both** sides) to turn general form into standard form; a right side of $0$ is a point, a negative one is no graph.',
    'The tangent line at a point is perpendicular to the radius there, so its slope is the negative reciprocal of the radius\'s slope.',
  ],
  reading: [
    {
      title: "Paul's Online Notes — Circles",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Circles.aspx',
      source: 'paul',
      note: 'Standard form, reading center and radius, and completing the square, with several worked examples.',
    },
    {
      title: 'OpenStax College Algebra 2e — Introduction to Analytic Geometry',
      url: 'https://openstax.org/books/college-algebra-2e/pages/8-introduction-to-analytic-geometry',
      source: 'openstax',
      note: 'The chapter on conic sections, where circles sit alongside ellipses, parabolas and hyperbolas.',
    },
    {
      title: 'Wikipedia — Circle',
      url: 'https://en.wikipedia.org/wiki/Circle',
      source: 'wikipedia',
      note: 'The equation of a circle, tangent lines and more geometric properties.',
    },
  ],
};
