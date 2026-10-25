import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-vectors',
  title: 'Vectors in the Plane',
  summary: 'Arrows with size and direction: components, magnitude, direction angles, unit vectors, vector addition and a first look at the dot product.',
  minutes: 20,
  objectives: [
    'Write a vector in component form from two points, and in terms of $\\mathbf{i}$ and $\\mathbf{j}$',
    'Convert between components and magnitude–direction form using trig and atan2',
    'Add vectors and multiply them by scalars, both geometrically and with components',
    'Normalize a vector to a unit vector and explain why games do this',
    'Compute a dot product and use it to find the angle between two vectors',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Quantities with a direction',
      blocks: [
        {
          type: 'p',
          text: 'Some quantities are fully described by one number: temperature, mass, time, speed. These are [[scalar|scalars]]. Others need a direction too: "walk 5 km" is incomplete until you add "north-east". Displacement, velocity, force and acceleration are [[vector|vectors]] — quantities with both a **size** and a **direction**.',
        },
        {
          type: 'p',
          text: 'Geometrically, a vector is an arrow. Its length is the size and it points in the direction. Algebraically, we record how far the arrow goes in $x$ and in $y$: the [[vector-components|component form]] $\\vec v = \\langle 3, 2 \\rangle$ means "3 units right, 2 units up". (Books also write $\\mathbf{v}$ in bold.)',
        },
        {
          type: 'definition',
          term: 'Component form from two points',
          text: 'The vector from initial point $P(x_1, y_1)$ to terminal point $Q(x_2, y_2)$ is $\\overrightarrow{PQ} = \\langle x_2 - x_1,\\; y_2 - y_1 \\rangle$ — "end minus start". The vector from the origin to a point $(a, b)$ is that point\'s [[position-vector]] $\\langle a, b \\rangle$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-4, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [3, 2], color: 'blue', arrow: true, label: '⟨3, 2⟩' },
            { from: [-5, 1], to: [-2, 3], color: 'blue', arrow: true, label: '⟨3, 2⟩' },
            { from: [1, -3], to: [4, -1], color: 'blue', arrow: true, label: '⟨3, 2⟩' },
          ],
          points: [
            { x: -5, y: 1, label: 'P(−5, 1)', color: 'gray' },
            { x: -2, y: 3, label: 'Q(−2, 3)', color: 'gray' },
          ],
          caption: 'Three copies of the same vector. $\\overrightarrow{PQ} = \\langle -2 - (-5),\\, 3 - 1 \\rangle = \\langle 3, 2 \\rangle$: same length, same direction, so they are equal — no matter where they start.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a vector doesn\'t care where it starts',
          text: 'A vector describes a *change*, not a location. "Move 3 right and 2 up" is the same instruction whether you are standing at the origin or at $P$. That is why two arrows with the same length and direction are the **same** vector, and why "end minus start" is the right formula: it subtracts away the starting position.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Vectors are everywhere in game code',
          text: 'Every engine has a `Vector2`/`Vector3` type. A character\'s position is a point; its velocity is a vector (how far it moves per second); the arrow from the player to an enemy is `enemy.pos - player.pos` — "end minus start" exactly. This lesson is the 2D foundation of the linear algebra behind every game engine.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find the component form of the vector from $P(2, -1)$ to $Q(7, 3)$. Type the two components.',
      template: '$\\overrightarrow{PQ} = \\langle$ ___ , ___ $\\rangle$',
      blanks: [{ answers: ['5'] }, { answers: ['4'] }],
      hint: 'End minus start, coordinate by coordinate.',
      explanation: '$\\overrightarrow{PQ} = \\langle 7 - 2,\\; 3 - (-1) \\rangle = \\langle 5, 4 \\rangle$. The classic slip is $3 - 1 = 2$ in the second component: subtracting a negative $y_1 = -1$ means *adding* $1$. Order matters too — start minus end would give the opposite vector $\\langle -5, -4 \\rangle$.',
    },
    {
      kind: 'concept',
      title: 'Magnitude and direction angle',
      blocks: [
        {
          type: 'p',
          text: 'The components form the legs of a right triangle whose hypotenuse is the arrow. So the length of the vector — its [[magnitude]], written $\\|\\vec v\\|$ — comes straight from the Pythagorean theorem. Its [[direction-angle]] $\\theta$ is measured counterclockwise from the positive $x$-axis, just like an angle in standard position.',
        },
        {
          type: 'theorem',
          name: 'Magnitude and direction of $\\vec v = \\langle a, b \\rangle$',
          tex: '\\|\\vec v\\| = \\sqrt{a^2 + b^2}, \\qquad \\tan\\theta = \\frac{b}{a} \\;\\text{ with } \\theta \\text{ in the quadrant of } (a, b)',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-5, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: ['a', 0], color: 'gray', dashed: true, label: 'a' },
            { from: ['a', 0], to: ['a', 'b'], color: 'gray', dashed: true, label: 'b' },
            { from: [0, 0], to: ['a', 'b'], color: 'blue', arrow: true, label: 'v' },
          ],
          sliders: [
            { name: 'a', min: -5, max: 5, step: 0.5, value: 3, label: '$a$ ($x$-component)' },
            { name: 'b', min: -5, max: 5, step: 0.5, value: 4, label: '$b$ ($y$-component)' },
          ],
          readouts: [
            { label: '$\\|\\vec v\\| =$', expr: 'sqrt(a^2 + b^2)', digits: 3 },
            { label: '$\\theta$ (degrees, $0$ to $360$) $=$', expr: 'atan2(b, a)*180/pi - 360*floor(atan2(b, a)/(2pi))', digits: 2 },
            { label: 'naive $\\tan^{-1}(b/a)$ in degrees $=$', expr: 'arctan(b/a)*180/pi', digits: 2 },
          ],
          caption: 'Drag the components into quadrants II and III and compare the true direction with the naive $\\tan^{-1}(b/a)$. They agree only when $a > 0$.',
        },
        {
          type: 'derivation',
          title: 'Magnitude and direction of $\\vec v = \\langle -3, 4 \\rangle$',
          steps: [
            { tex: '\\|\\vec v\\| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{25} = 5', why: 'Pythagorean theorem on the legs $|{-3}|$ and $4$. Squaring removes the sign.' },
            { tex: '\\tan^{-1}\\!\\left(\\frac{4}{-3}\\right) \\approx -53.13^\\circ', why: 'The calculator\'s answer lies in $(-90^\\circ, 90^\\circ)$ — quadrant IV here.' },
            { tex: '(-3, 4) \\text{ is in quadrant II}', why: 'Negative $x$, positive $y$: the arrow points up and to the left. The calculator\'s angle points the wrong way.' },
            { tex: '\\theta \\approx -53.13^\\circ + 180^\\circ = 126.87^\\circ', why: 'Adding $180^\\circ$ keeps the same tangent but flips the arrow into the correct quadrant.' },
          ],
          result: '$\\|\\vec v\\| = 5$, $\\theta \\approx 126.87^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'This is why atan2 exists',
          text: 'You met [[atan2]] earlier: `std::atan2(y, x)` looks at the signs of both components and returns the correct angle in $(-\\pi, \\pi]$ radians, with no quadrant fix-up and no division by zero when $x = 0$. Note the argument order — **$y$ first**. Add $2\\pi$ to negative results if you need $[0, 2\\pi)$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the direction angle of $\\vec v = \\langle -2, -2 \\rangle$, in degrees from $0^\\circ$ to $360^\\circ$.',
      hint: 'Which quadrant is $(-2, -2)$ in? The calculator\'s $\\tan^{-1}(1)$ will not be in that quadrant.',
      label: '$\\theta =$',
      unit: '°',
      answer: '225',
      explanation: '$\\tan\\theta = \\frac{-2}{-2} = 1$, and $\\tan^{-1}(1) = 45^\\circ$ — but that points into quadrant I, while $(-2, -2)$ is in quadrant III. Add $180^\\circ$: $\\theta = 225^\\circ$. In code, `atan2(-2, -2)` returns $-135^\\circ$ (as radians, $-\\frac{3\\pi}{4}$), which is the same direction as $225^\\circ$.',
    },
    {
      kind: 'concept',
      title: 'From magnitude and angle back to components',
      blocks: [
        {
          type: 'p',
          text: 'Often you know the size and direction — "the ball leaves at $20$ m/s at $35^\\circ$", "the ship moves at speed $5$ facing $150^\\circ$" — and you need components to actually move things. Scale the unit-circle point for $\\theta$ by the length:',
        },
        {
          type: 'theorem',
          name: 'Components from magnitude and direction',
          tex: '\\vec v = \\langle \\|\\vec v\\|\\cos\\theta,\\; \\|\\vec v\\|\\sin\\theta \\rangle',
          text: 'This works in every quadrant automatically: the signs of $\\cos\\theta$ and $\\sin\\theta$ supply the signs of the components.',
        },
        {
          type: 'derivation',
          title: 'A ship moves at speed $5$ units/s with heading $150^\\circ$. Find its velocity vector.',
          steps: [
            { tex: 'v_x = 5\\cos 150^\\circ = 5\\left(-\\tfrac{\\sqrt3}{2}\\right) = -\\tfrac{5\\sqrt3}{2} \\approx -4.33', why: '$150^\\circ$ has reference angle $30^\\circ$ and lies in quadrant II, where cosine is negative.' },
            { tex: 'v_y = 5\\sin 150^\\circ = 5\\left(\\tfrac12\\right) = \\tfrac52 = 2.5', why: 'Sine is positive in quadrant II; $\\sin 30^\\circ = \\frac12$.' },
            { tex: '\\vec v = \\left\\langle -\\tfrac{5\\sqrt3}{2},\\; \\tfrac52 \\right\\rangle', why: 'Assemble the components.' },
            { tex: '\\|\\vec v\\| = \\sqrt{\\tfrac{75}{4} + \\tfrac{25}{4}} = \\sqrt{25} = 5 \\;\\checkmark', why: 'Check: the length is the speed we started with.' },
          ],
          result: 'Each second the ship moves about $4.33$ units left and $2.5$ units up.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          parametric: [{ x: 'r*cos(t)', y: 'r*sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: ['r*cos(d*pi/180)', 0], color: 'red', label: 'r cos θ' },
            { from: ['r*cos(d*pi/180)', 0], to: ['r*cos(d*pi/180)', 'r*sin(d*pi/180)'], color: 'green', label: 'r sin θ' },
            { from: [0, 0], to: ['r*cos(d*pi/180)', 'r*sin(d*pi/180)'], color: 'blue', arrow: true },
          ],
          sliders: [
            { name: 'r', min: 0.5, max: 5.5, step: 0.5, value: 5, label: 'magnitude $\\|\\vec v\\|$' },
            { name: 'd', min: 0, max: 360, step: 5, value: 150, label: 'direction $\\theta$ (degrees)' },
          ],
          readouts: [
            { label: '$v_x =$', expr: 'r*cos(d*pi/180)', digits: 3 },
            { label: '$v_y =$', expr: 'r*sin(d*pi/180)', digits: 3 },
          ],
          caption: 'Rotate the arrow through all four quadrants and watch the components change sign on their own.',
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'Turning a heading into motion is one line per axis in a game loop: `vel = { speed * cos(angle), speed * sin(angle) }; pos += vel * dt;` (with `angle` in radians). Physics engines split forces into components the same way, because $x$ and $y$ motion can then be updated independently.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A rope pulls on a crate with a force of $40$ N at a direction angle of $120^\\circ$. What is the **horizontal** ($x$) component of the force?',
      label: '$F_x =$',
      unit: 'N',
      answer: '-20',
      explanation: '$F_x = 40\\cos 120^\\circ = 40\\left(-\\frac12\\right) = -20$ N. The negative sign is meaningful: at $120^\\circ$ the rope points up and to the **left**. (The vertical component is $40\\sin 120^\\circ = 20\\sqrt3 \\approx 34.64$ N.) Writing $+20$ is the most common mistake — let the cosine supply the sign.',
    },
    {
      kind: 'concept',
      title: 'Adding vectors and scaling them',
      blocks: [
        {
          type: 'p',
          text: '**Addition** chains movements: do $\\vec u$, then do $\\vec v$. Geometrically, put the tail of $\\vec v$ at the tip of $\\vec u$ (tip-to-tail); the sum $\\vec u + \\vec v$ — also called the [[resultant-vector|resultant]] — runs from the start of $\\vec u$ to the end of $\\vec v$. With components it is effortless: add matching components.',
        },
        {
          type: 'math',
          tex: '\\langle u_1, u_2 \\rangle + \\langle v_1, v_2 \\rangle = \\langle u_1 + v_1,\\; u_2 + v_2 \\rangle, \\qquad k\\langle v_1, v_2 \\rangle = \\langle kv_1,\\; kv_2 \\rangle',
          caption: 'Multiplying by a scalar $k$ stretches the arrow by $|k|$; a negative $k$ also reverses its direction.',
        },
        {
          type: 'graph',
          x: [-4, 8],
          y: [-4, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: [3, 1], color: 'blue', arrow: true, label: 'u' },
            { from: [3, 1], to: ['3 + a', '1 + b'], color: 'red', arrow: true, label: 'v' },
            { from: [0, 0], to: ['a', 'b'], color: 'red', dashed: true },
            { from: ['a', 'b'], to: ['3 + a', '1 + b'], color: 'blue', dashed: true },
            { from: [0, 0], to: ['3 + a', '1 + b'], color: 'purple', arrow: true, label: 'u + v' },
          ],
          sliders: [
            { name: 'a', min: -4, max: 4, step: 0.5, value: 1, label: '$v_1$' },
            { name: 'b', min: -4, max: 4, step: 0.5, value: 3, label: '$v_2$' },
          ],
          readouts: [
            { label: '$\\vec u + \\vec v = \\langle 3 + v_1, 1 + v_2 \\rangle$, length', expr: 'sqrt((3 + a)^2 + (1 + b)^2)', digits: 3 },
            { label: '$\\|\\vec u\\| + \\|\\vec v\\| =$', expr: 'sqrt(10) + sqrt(a^2 + b^2)', digits: 3 },
          ],
          caption: 'Here $\\vec u = \\langle 3, 1 \\rangle$. Going $u$-then-$v$ or $v$-then-$u$ (dashed) reaches the same point: the parallelogram rule. The length of the sum is never more than the sum of the lengths.',
        },
        {
          type: 'derivation',
          title: 'A plane flies at $250$ km/h with direction angle $60^\\circ$; a wind blows at $40$ km/h toward direction $180^\\circ$ (due west). Find the actual ground velocity.',
          steps: [
            { tex: '\\vec p = \\langle 250\\cos 60^\\circ,\\, 250\\sin 60^\\circ \\rangle = \\langle 125,\\; 125\\sqrt3 \\rangle \\approx \\langle 125, 216.51 \\rangle', why: 'Plane\'s velocity relative to the air, in components.' },
            { tex: '\\vec w = \\langle 40\\cos 180^\\circ,\\, 40\\sin 180^\\circ \\rangle = \\langle -40, 0 \\rangle', why: 'Wind velocity in components: due west is straight along the negative $x$-axis.' },
            { tex: '\\vec p + \\vec w \\approx \\langle 85,\\; 216.51 \\rangle', why: 'Add matching components.' },
            { tex: '\\|\\vec p + \\vec w\\| \\approx \\sqrt{85^2 + 216.51^2} \\approx 232.59 \\text{ km/h}', why: 'Magnitude of the resultant = ground speed.' },
            { tex: '\\theta = \\operatorname{atan2}(216.51,\\, 85) \\approx 68.57^\\circ', why: 'Quadrant I (both components positive), so $\\tan^{-1}\\frac{216.51}{85}$ is already correct.' },
          ],
          result: 'The plane actually travels about $232.6$ km/h at about $68.6^\\circ$ — slower, and pushed counterclockwise of its heading.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why adding components is legitimate',
          text: 'Horizontal and vertical motion are independent: moving 3 right then 1 right is 4 right, regardless of any vertical movement in between. So the $x$-parts simply add and the $y$-parts simply add. The geometric view gives the same answer through the Law of Cosines: in the tip-to-tail triangle above, the angle between $\\vec p$ and $\\vec w$ is $60^\\circ$, so $\\|\\vec p + \\vec w\\|^2 = 250^2 + 40^2 - 2(250)(40)\\cos 60^\\circ = 54100$ — the same $232.59$, with far more effort.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding the resultant of two vectors given in magnitude–direction form in order.',
      lines: [
        'Convert each vector to components with $\\langle \\|\\vec v\\|\\cos\\theta, \\|\\vec v\\|\\sin\\theta \\rangle$',
        'Add the $x$-components and add the $y$-components',
        'Find the magnitude of the sum with $\\sqrt{x^2 + y^2}$',
        'Find the direction with atan2 (or $\\tan^{-1}$ plus a quadrant check)',
      ],
      distractors: ['Add the two magnitudes and average the two angles'],
      explanation: 'Components are the only representation in which addition is simple, so convert first, add, then convert back. The distractor is the classic mistake: magnitudes only add when the vectors point the same way (the triangle inequality says $\\|\\vec u + \\vec v\\| \\le \\|\\vec u\\| + \\|\\vec v\\|$), and averaging angles ignores how long each vector is.',
    },
    {
      kind: 'concept',
      title: 'Unit vectors, i and j',
      blocks: [
        {
          type: 'p',
          text: 'A [[unit-vector]] has length $1$. It carries pure direction, with the size stripped out. To get the unit vector pointing the same way as $\\vec v$ — called **normalizing** $\\vec v$ — divide by its length:',
        },
        {
          type: 'math',
          tex: '\\hat v = \\frac{\\vec v}{\\|\\vec v\\|}, \\qquad \\text{e.g. } \\frac{\\langle 3, -4 \\rangle}{5} = \\left\\langle \\tfrac35, -\\tfrac45 \\right\\rangle',
          caption: 'Check: $\\left(\\frac35\\right)^2 + \\left(\\frac45\\right)^2 = \\frac{9 + 16}{25} = 1$. Every unit vector is $\\langle \\cos\\theta, \\sin\\theta \\rangle$ — a point on the unit circle.',
        },
        {
          type: 'p',
          text: 'Two unit vectors get special names: $\\mathbf{i} = \\langle 1, 0 \\rangle$ and $\\mathbf{j} = \\langle 0, 1 \\rangle$. Any vector is a combination of them: $\\langle a, b \\rangle = a\\mathbf{i} + b\\mathbf{j}$. So $\\langle 3, -4 \\rangle = 3\\mathbf{i} - 4\\mathbf{j}$. (In linear algebra, $\\mathbf{i}$ and $\\mathbf{j}$ are the *standard basis*.)',
        },
        {
          type: 'compare',
          left: {
            title: 'Diagonal movement bug',
            tone: 'bad',
            code: 'Vector2 dir = {inputX, inputY};   // (1, 1) when both keys held\npos += dir * speed * dt;          // moves sqrt(2) * speed!',
            text: 'Holding right and up gives $\\langle 1, 1 \\rangle$, whose length is $\\sqrt2 \\approx 1.41$. The player moves about $41\\%$ faster diagonally.',
          },
          right: {
            title: 'Normalize first',
            tone: 'good',
            code: 'Vector2 dir = {inputX, inputY};\nif (length(dir) > 0) dir = dir / length(dir);\npos += dir * speed * dt;          // always exactly speed',
            text: 'The unit vector keeps the direction and fixes the length at $1$, so speed is the same in all eight directions.',
          },
        },
        {
          type: 'code',
          title: 'normalize.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

double length(Vec2 v) { return std::sqrt(v.x * v.x + v.y * v.y); }

Vec2 normalize(Vec2 v) {
    double len = length(v);
    if (len < 1e-9) return {0.0, 0.0};   // the zero vector has no direction
    return {v.x / len, v.y / len};
}

int main() {
    const double speed = 5.0;
    Vec2 input = {1.0, 1.0};             // right + up held together
    Vec2 naive = {input.x * speed, input.y * speed};
    Vec2 dir = normalize(input);
    Vec2 fixed = {dir.x * speed, dir.y * speed};
    std::printf("naive speed = %.3f\\n", length(naive));
    std::printf("fixed speed = %.3f\\n", length(fixed));
    std::printf("fixed velocity = (%.3f, %.3f)\\n", fixed.x, fixed.y);
}`,
          output: `naive speed = 7.071
fixed speed = 5.000
fixed velocity = (3.536, 3.536)`,
          annotations: [
            { lines: 6, text: 'Magnitude: the Pythagorean theorem on the components.' },
            { lines: 10, text: 'Guard against dividing by zero — the zero vector $\\langle 0, 0 \\rangle$ cannot be normalized.' },
            { lines: 11, text: 'Divide each component by the length: $\\hat v = \\vec v / \\|\\vec v\\|$.' },
            { lines: 17, text: 'Unnormalized: length $5\\sqrt2 \\approx 7.071$.' },
            { lines: 19, text: 'Normalized then scaled: length exactly $5$, components $\\frac{5}{\\sqrt2} \\approx 3.536$.' },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'In a game, holding right and up produces the input vector $\\langle 1, 1 \\rangle$, which the code multiplies by a speed of $5$ **without normalizing**. How fast does the player actually move?',
      options: [
        { text: '$5$', why: 'That would be true only if $\\langle 1, 1 \\rangle$ had length $1$. Its length is $\\sqrt2$.' },
        { text: '$10$', why: 'Adding the components ($5 + 5$) is not how length works; length uses the Pythagorean theorem.' },
        { text: '$5\\sqrt2 \\approx 7.07$', correct: true, why: 'Right: $\\|\\langle 5, 5 \\rangle\\| = \\sqrt{25 + 25} = 5\\sqrt2$.' },
        { text: '$\\frac{5}{\\sqrt2} \\approx 3.54$', why: 'That is each component *after* normalizing — the fix, not the bug.' },
      ],
      explanation: 'The velocity is $5\\langle 1, 1 \\rangle = \\langle 5, 5 \\rangle$, with magnitude $\\sqrt{5^2 + 5^2} = 5\\sqrt2 \\approx 7.07$. Normalizing first gives $\\left\\langle \\frac{1}{\\sqrt2}, \\frac{1}{\\sqrt2} \\right\\rangle$, and times $5$ that has length exactly $5$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the $x$-component of the unit vector in the direction of $\\vec v = \\langle -8, 6 \\rangle$.',
      hint: 'First find $\\|\\vec v\\|$.',
      label: '$\\hat v_x =$',
      answer: '-4/5',
      answerTex: '-\\frac45',
      explanation: '$\\|\\vec v\\| = \\sqrt{64 + 36} = 10$, so $\\hat v = \\frac{1}{10}\\langle -8, 6 \\rangle = \\left\\langle -\\frac45, \\frac35 \\right\\rangle$. The $x$-component is $-\\frac45 = -0.8$. Check: $0.64 + 0.36 = 1$.',
    },
    {
      kind: 'concept',
      title: 'A first look at the dot product',
      blocks: [
        {
          type: 'p',
          text: 'There is one more operation you will use constantly. The [[dot-product]] multiplies matching components and adds — and the result is a **scalar**, not a vector. Its magic is that it measures how much two vectors point the same way.',
        },
        {
          type: 'theorem',
          name: 'Dot product (two equivalent formulas)',
          tex: '\\vec u \\cdot \\vec v = u_1v_1 + u_2v_2 = \\|\\vec u\\|\\,\\|\\vec v\\|\\cos\\theta',
          text: 'where $\\theta \\in [0^\\circ, 180^\\circ]$ is the angle between the vectors placed tail to tail.',
        },
        {
          type: 'derivation',
          title: 'Why the two formulas agree (via the Law of Cosines)',
          steps: [
            { tex: '\\|\\vec u - \\vec v\\|^2 = \\|\\vec u\\|^2 + \\|\\vec v\\|^2 - 2\\|\\vec u\\|\\|\\vec v\\|\\cos\\theta', why: 'Tail to tail, $\\vec u$, $\\vec v$ and $\\vec u - \\vec v$ form a triangle with angle $\\theta$ between the first two sides: Law of Cosines.' },
            { tex: '(u_1 - v_1)^2 + (u_2 - v_2)^2 = u_1^2 + u_2^2 + v_1^2 + v_2^2 - 2\\|\\vec u\\|\\|\\vec v\\|\\cos\\theta', why: 'Write every length squared in components.' },
            { tex: '-2u_1v_1 - 2u_2v_2 = -2\\|\\vec u\\|\\|\\vec v\\|\\cos\\theta', why: 'Expand the left side; the squares $u_1^2, v_1^2, u_2^2, v_2^2$ cancel from both sides.' },
            { tex: 'u_1v_1 + u_2v_2 = \\|\\vec u\\|\\|\\vec v\\|\\cos\\theta', why: 'Divide by $-2$.' },
          ],
          result: 'So the angle between two vectors is $\\theta = \\cos^{-1}\\left(\\frac{\\vec u \\cdot \\vec v}{\\|\\vec u\\|\\|\\vec v\\|}\\right)$.',
        },
        {
          type: 'derivation',
          title: 'Angle between $\\langle 1, 2 \\rangle$ and $\\langle 3, 1 \\rangle$',
          steps: [
            { tex: '\\vec u \\cdot \\vec v = (1)(3) + (2)(1) = 5', why: 'Multiply matching components, then add.' },
            { tex: '\\|\\vec u\\| = \\sqrt5, \\quad \\|\\vec v\\| = \\sqrt{10}', why: 'Pythagorean theorem for each length.' },
            { tex: '\\cos\\theta = \\frac{5}{\\sqrt5\\sqrt{10}} = \\frac{5}{\\sqrt{50}} = \\frac{1}{\\sqrt2}', why: '$\\sqrt{50} = 5\\sqrt2$.' },
            { tex: '\\theta = 45^\\circ', why: '$\\cos^{-1}\\frac{1}{\\sqrt2} = 45^\\circ$, the special angle.' },
          ],
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [3, 1], color: 'blue', arrow: true, label: 'facing ⟨3, 1⟩' },
            { from: [0, 0], to: ['a', 'b'], color: 'red', arrow: true, label: 'to target' },
            { from: [-1.2, 3.6], to: [1.2, -3.6], color: 'gray', dashed: true },
          ],
          sliders: [
            { name: 'a', min: -4, max: 4, step: 0.5, value: 1, label: '$u_1$' },
            { name: 'b', min: -4, max: 4, step: 0.5, value: 3, label: '$u_2$' },
          ],
          readouts: [
            { label: '$\\vec u \\cdot \\vec v =$', expr: '3a + b', digits: 2 },
            { label: 'angle $\\theta$ (degrees) $=$', expr: 'arccos((3a + b)/(sqrt(10)*sqrt(a^2 + b^2)))*180/pi', digits: 1 },
          ],
          caption: 'The dashed line is perpendicular to the facing direction. Targets in front of it give a positive dot product ($\\theta < 90^\\circ$), targets behind give a negative one, and on the line it is exactly $0$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Dot products in games',
          text: 'Sign of `dot(facing, toTarget)`: positive means the target is in front, negative means behind — the cheapest field-of-view test there is (no trig at all). With unit vectors, `dot(a, b)` *is* $\\cos\\theta$, so a $60^\\circ$ vision cone is `dot > 0.5`. Lighting uses `max(dot(normal, toLight), 0)` for brightness. You will meet the dot product again in linear algebra, where it underlies projections and matrix multiplication.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the angle between $\\vec u = \\langle 2, 1 \\rangle$ and $\\vec v = \\langle -1, 3 \\rangle$, in degrees to one decimal place.',
      hint: 'Compute $\\vec u \\cdot \\vec v$, both lengths, then $\\cos^{-1}$.',
      label: '$\\theta \\approx$',
      unit: '°',
      answer: 'arccos(1/sqrt(50))*180/pi',
      answerTex: '\\cos^{-1}\\!\\left(\\tfrac{1}{\\sqrt{50}}\\right) \\approx 81.9^\\circ',
      tolerance: 0.1,
      explanation: '$\\vec u \\cdot \\vec v = (2)(-1) + (1)(3) = 1$. The lengths are $\\sqrt5$ and $\\sqrt{10}$, so $\\cos\\theta = \\frac{1}{\\sqrt{50}} \\approx 0.1414$ and $\\theta \\approx 81.9^\\circ$. The small positive dot product says the vectors are *almost* perpendicular, leaning slightly toward each other.',
    },
    {
      kind: 'truefalse',
      prompt: 'The vectors $\\langle 2, -3 \\rangle$ and $\\langle 6, 4 \\rangle$ are perpendicular.',
      answer: true,
      explanation: 'Their dot product is $(2)(6) + (-3)(4) = 12 - 12 = 0$. Since $\\vec u \\cdot \\vec v = \\|\\vec u\\|\\|\\vec v\\|\\cos\\theta$ and neither length is zero, $\\cos\\theta = 0$, so $\\theta = 90^\\circ$. A zero dot product is the standard test for perpendicular (also called *orthogonal*) vectors.',
    },
  ],
  takeaways: [
    'A vector has magnitude and direction; $\\overrightarrow{PQ} = \\langle x_2 - x_1, y_2 - y_1 \\rangle$ ("end minus start"), and $\\langle a, b \\rangle = a\\mathbf{i} + b\\mathbf{j}$.',
    '$\\|\\langle a, b \\rangle\\| = \\sqrt{a^2 + b^2}$; the direction angle needs a quadrant check — or just atan2$(b, a)$.',
    'Components from size and direction: $\\langle \\|\\vec v\\|\\cos\\theta, \\|\\vec v\\|\\sin\\theta \\rangle$.',
    'Add vectors (and scale them) component by component; geometrically, addition is tip-to-tail.',
    'Normalize with $\\hat v = \\vec v / \\|\\vec v\\|$ to keep only direction — the fix for fast diagonal movement.',
    '$\\vec u \\cdot \\vec v = u_1v_1 + u_2v_2 = \\|\\vec u\\|\\|\\vec v\\|\\cos\\theta$; zero means perpendicular, positive means "in front".',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 10.8 Vectors',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-8-vectors',
      source: 'openstax',
      note: 'Component form, magnitude and direction, unit vectors and the dot product with many applied examples.',
    },
    {
      title: '3Blue1Brown — Vectors, what even are they? (Essence of linear algebra, ch. 1)',
      url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs',
      source: 'video',
      note: 'The perfect bridge to your linear algebra course: vectors as arrows, as lists of numbers, and how addition and scaling connect them.',
    },
    {
      title: 'Wikipedia — Dot product',
      url: 'https://en.wikipedia.org/wiki/Dot_product',
      source: 'wikipedia',
      note: 'Both definitions, their equivalence, and the properties you will use in linear algebra.',
    },
  ],
};
