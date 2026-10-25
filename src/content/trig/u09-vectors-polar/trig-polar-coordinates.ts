import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-polar-coordinates',
  title: 'Polar Coordinates and Polar Graphs',
  summary: 'Locate points by distance and angle, convert to and from $(x, y)$, and draw circles, cardioids, roses and spirals with $r = f(\\theta)$.',
  minutes: 18,
  objectives: [
    'Plot points given in polar coordinates, including negative $r$, and list other names for the same point',
    'Convert points between polar and rectangular coordinates, choosing the correct quadrant',
    'Convert equations between polar and rectangular form',
    'Sketch and recognise circles, limaçons, cardioids, rose curves and spirals',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Distance and direction instead of $x$ and $y$',
      blocks: [
        {
          type: 'p',
          text: 'Rectangular coordinates say "go $x$ across, then $y$ up". But a radar screen, a turret, or a lighthouse beam naturally describes a location as "this far away, in that direction". That is a [[polar-coordinates|polar coordinate]] pair $(r, \\theta)$: distance $r$ from the origin (here called the **pole**) and angle $\\theta$ measured counterclockwise from the positive $x$-axis (the [[polar-axis]]).',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          equal: true,
          polar: [
            { expr: '1', color: 'gray', dashed: true },
            { expr: '2', color: 'gray', dashed: true },
            { expr: '3', color: 'gray', dashed: true },
          ],
          segments: [
            { from: [0, 0], to: [-1, 'sqrt(3)'], color: 'blue', arrow: true, label: 'r = 2' },
            { from: [0, 0], to: [1, '-sqrt(3)'], color: 'red', dashed: true },
          ],
          parametric: [{ x: '0.6cos(t)', y: '0.6sin(t)', t: [0, '2pi/3'], color: 'orange', label: '$\\theta = \\frac{2\\pi}{3}$' }],
          points: [
            { x: -1, y: 'sqrt(3)', label: '(2, 2π/3) = (−2, 5π/3)', color: 'blue' },
            { x: 3, y: 0, label: '(3, 0)', color: 'gray' },
            { x: 0, y: -2, label: '(2, 3π/2)', color: 'gray' },
          ],
          caption: 'Dashed circles mark $r = 1, 2, 3$. The point $(2, \\frac{2\\pi}{3})$ is $2$ units out along the $\\frac{2\\pi}{3}$ ray. Facing the opposite way ($\\frac{5\\pi}{3}$, red dashed) and walking *backwards* $2$ units lands on the same point.',
        },
        {
          type: 'p',
          text: '**Every point has infinitely many polar names.** Adding a full turn changes nothing: $(r, \\theta) = (r, \\theta + 2\\pi k)$. And a **negative** $r$ means "face direction $\\theta$, then go backwards", which lands you at angle $\\theta + \\pi$: so $(r, \\theta) = (-r, \\theta + \\pi)$. The pole itself is $(0, \\theta)$ for *any* $\\theta$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why allow negative $r$ at all?',
          text: 'Because we want to graph equations like $r = \\cos(2\\theta)$, where the formula produces negative values for some angles. Rather than throwing those angles away, we give negative $r$ a meaning — and that meaning is what creates the inner loops and extra petals you will see later in this lesson.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Polar thinking in games',
          text: 'Anything that orbits, spins or radiates is easiest in polar form: a moon at distance $r$ circling a planet (increase $\\theta$ each frame), a turret aiming at angle $\\theta$, a minimap that shows enemies by bearing and range, or a bullet-hell ring of projectiles fired at equally spaced angles.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which polar pair names the **same point** as $\\left(3, \\frac{\\pi}{4}\\right)$?',
      options: [
        { text: '$\\left(-3, \\frac{\\pi}{4}\\right)$', why: 'Negative $r$ walks backwards along the $\\frac{\\pi}{4}$ ray, landing in quadrant III — the point directly opposite.' },
        { text: '$\\left(3, -\\frac{\\pi}{4}\\right)$', why: 'This is the mirror image across the $x$-axis, in quadrant IV.' },
        { text: '$\\left(-3, \\frac{5\\pi}{4}\\right)$', correct: true, why: 'Correct: face $\\frac{5\\pi}{4}$ (quadrant III) and walk backwards 3 units, ending up in the $\\frac{\\pi}{4}$ direction.' },
        { text: '$\\left(3, \\frac{5\\pi}{4}\\right)$', why: 'Same distance but pointing the opposite way: this is the point $\\left(-3, \\frac{\\pi}{4}\\right)$, not the original.' },
      ],
      explanation: 'Use the rule $(r, \\theta) = (-r, \\theta + \\pi)$: $\\left(3, \\frac{\\pi}{4}\\right) = \\left(-3, \\frac{\\pi}{4} + \\pi\\right) = \\left(-3, \\frac{5\\pi}{4}\\right)$. Both describe the rectangular point $\\left(\\frac{3\\sqrt2}{2}, \\frac{3\\sqrt2}{2}\\right)$. Flipping only the sign of $r$, or only adding $\\pi$, sends you to the opposite point.',
    },
    {
      kind: 'concept',
      title: 'Converting between polar and rectangular',
      blocks: [
        {
          type: 'p',
          text: 'The point $(r, \\theta)$ is $r$ times the unit-circle point for $\\theta$ — the same idea as turning a vector\'s magnitude and direction into components. Going back, $r$ is the distance from the origin and $\\theta$ is a direction angle.',
        },
        {
          type: 'theorem',
          name: 'Conversion formulas',
          tex: 'x = r\\cos\\theta, \\quad y = r\\sin\\theta \\qquad\\qquad r^2 = x^2 + y^2, \\quad \\tan\\theta = \\frac{y}{x}\\;(x \\ne 0)',
          text: 'When finding $\\theta$ from $\\tan\\theta = \\frac yx$, choose the angle in the same quadrant as $(x, y)$ — or use atan2$(y, x)$.',
        },
        {
          type: 'graph',
          x: [-4.5, 4.5],
          y: [-4.5, 4.5],
          equal: true,
          polar: [{ expr: 'abs(r)', color: 'gray', dashed: true }],
          parametric: [{ x: '0.7cos(t)', y: '0.7sin(t)', t: [0, 'd*pi/180'], color: 'orange' }],
          segments: [
            { from: [0, 0], to: ['r*cos(d*pi/180)', 'r*sin(d*pi/180)'], color: 'blue', arrow: true },
            { from: [0, 0], to: ['3.5cos(d*pi/180)', '3.5sin(d*pi/180)'], color: 'orange', dashed: true },
          ],
          points: [{ x: 'r*cos(d*pi/180)', y: 'r*sin(d*pi/180)', label: '(x, y)', color: 'blue' }],
          sliders: [
            { name: 'r', min: -4, max: 4, step: 0.5, value: 2, label: '$r$' },
            { name: 'd', min: 0, max: 360, step: 15, value: 120, label: '$\\theta$ (degrees)' },
          ],
          readouts: [
            { label: '$\\theta$ in radians $=$', expr: 'd*pi/180', digits: 3 },
            { label: '$x = r\\cos\\theta =$', expr: 'r*cos(d*pi/180)', digits: 3 },
            { label: '$y = r\\sin\\theta =$', expr: 'r*sin(d*pi/180)', digits: 3 },
          ],
          caption: 'The orange dashed ray shows the direction $\\theta$. Make $r$ negative and the point jumps to the opposite side of the pole.',
        },
        {
          type: 'derivation',
          title: 'Polar to rectangular: $\\left(4, \\frac{5\\pi}{6}\\right)$',
          steps: [
            { tex: 'x = 4\\cos\\tfrac{5\\pi}{6} = 4\\left(-\\tfrac{\\sqrt3}{2}\\right) = -2\\sqrt3', why: 'Reference angle $\\frac{\\pi}{6}$ in quadrant II, where cosine is negative.' },
            { tex: 'y = 4\\sin\\tfrac{5\\pi}{6} = 4\\left(\\tfrac12\\right) = 2', why: 'Sine is positive in quadrant II.' },
          ],
          result: '$\\left(4, \\frac{5\\pi}{6}\\right)$ is the rectangular point $(-2\\sqrt3, 2) \\approx (-3.46, 2)$.',
        },
        {
          type: 'derivation',
          title: 'Rectangular to polar: $(-2, -2\\sqrt3)$, with $r > 0$ and $0 \\le \\theta < 2\\pi$',
          steps: [
            { tex: 'r = \\sqrt{(-2)^2 + (-2\\sqrt3)^2} = \\sqrt{4 + 12} = 4', why: 'Distance from the origin.' },
            { tex: '\\tan\\theta = \\frac{-2\\sqrt3}{-2} = \\sqrt3', why: 'Ratio $y/x$; the two negatives cancel — which is exactly why the tangent alone cannot tell quadrant I from III.' },
            { tex: '\\text{reference angle } \\tfrac{\\pi}{3}, \\text{ quadrant III}', why: 'Both coordinates are negative, so the point is in quadrant III.' },
            { tex: '\\theta = \\pi + \\tfrac{\\pi}{3} = \\tfrac{4\\pi}{3}', why: 'Quadrant III angle with reference angle $\\frac{\\pi}{3}$.' },
          ],
          result: '$(-2, -2\\sqrt3) = \\left(4, \\frac{4\\pi}{3}\\right)$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Convert the rectangular point $(1, -1)$ to polar form with $r > 0$ and $0 \\le \\theta < 2\\pi$. What is $\\theta$?',
      hint: 'The reference angle is $\\frac{\\pi}{4}$. Which quadrant is $(1, -1)$ in?',
      label: '$\\theta =$',
      answer: '7pi/4',
      answerTex: '\\frac{7\\pi}{4}',
      explanation: '$r = \\sqrt{1 + 1} = \\sqrt2$ and $\\tan\\theta = \\frac{-1}{1} = -1$, with reference angle $\\frac{\\pi}{4}$. The point is in quadrant IV ($x > 0$, $y < 0$), so in $[0, 2\\pi)$ the angle is $2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}$. (The calculator\'s $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$ is the same direction, just outside the requested interval.) So $(1, -1) = \\left(\\sqrt2, \\frac{7\\pi}{4}\\right)$.',
    },
    {
      kind: 'concept',
      title: 'Converting equations',
      blocks: [
        {
          type: 'p',
          text: 'The same substitutions convert whole equations. To go from rectangular to polar, replace $x$ with $r\\cos\\theta$ and $y$ with $r\\sin\\theta$ (and $x^2 + y^2$ with $r^2$). To go from polar to rectangular, try to build the combinations $r\\cos\\theta$, $r\\sin\\theta$ and $r^2$ — often by multiplying both sides by $r$.',
        },
        {
          type: 'derivation',
          title: 'What shape is $r = 4\\cos\\theta$?',
          steps: [
            { tex: 'r^2 = 4r\\cos\\theta', why: 'Multiply both sides by $r$ to create $r^2$ and $r\\cos\\theta$, which have rectangular equivalents.' },
            { tex: 'x^2 + y^2 = 4x', why: 'Substitute $r^2 = x^2 + y^2$ and $r\\cos\\theta = x$.' },
            { tex: 'x^2 - 4x + 4 + y^2 = 4', why: 'Move $4x$ left and complete the square: add $\\left(\\frac{-4}{2}\\right)^2 = 4$ to both sides.' },
            { tex: '(x - 2)^2 + y^2 = 4', why: 'Factor the perfect square.' },
          ],
          result: 'A circle with center $(2, 0)$ and radius $2$, passing through the pole.',
        },
        {
          type: 'graph',
          x: [-3, 5],
          y: [-3, 3],
          equal: true,
          polar: [
            { expr: '4cos(theta)', theta: [0, 'pi'], label: '$r = 4\\cos\\theta$' },
            { expr: '3', label: '$r = 3$', color: 'green', dashed: true },
          ],
          points: [{ x: 2, y: 0, label: 'center (2, 0)', color: 'blue' }],
          caption: 'Polar equations can be very simple for circles: $r = 3$ is the circle $x^2 + y^2 = 9$, and $r = 4\\cos\\theta$ is a circle through the pole. (As $\\theta$ runs from $0$ to $\\pi$, the blue circle is traced exactly once.)',
        },
        {
          type: 'table',
          headers: ['Rectangular', 'Polar', 'Shape'],
          rows: [
            ['$x^2 + y^2 = 9$', '$r = 3$', 'circle, radius 3, center at pole'],
            ['$y = 3$', '$r\\sin\\theta = 3$, i.e. $r = 3\\csc\\theta$', 'horizontal line'],
            ['$y = x$', '$\\theta = \\frac{\\pi}{4}$', 'line through the pole (negative $r$ gives the other half)'],
            ['$x^2 + y^2 = 4x$', '$r = 4\\cos\\theta$', 'circle through the pole'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Multiplying by $r$ can add the pole',
          text: 'Multiplying by $r$ could introduce the solution $r = 0$ that the original equation didn\'t have. Here it is harmless — $r = 4\\cos\\theta$ already passes through the pole at $\\theta = \\frac{\\pi}{2}$ — but check whether the pole really belongs to the original curve.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Convert the rectangular equation $x^2 + y^2 = 6y$ to polar form, solved for $r$.',
      hint: 'Substitute $x^2 + y^2 = r^2$ and $y = r\\sin\\theta$, then divide by $r$.',
      label: '$r =$',
      variables: ['theta'],
      answer: '6sin(theta)',
      answerTex: 'r = 6\\sin\\theta',
      explanation: 'Substituting gives $r^2 = 6r\\sin\\theta$. Dividing by $r$ gives $r = 6\\sin\\theta$; the only solution lost is $r = 0$, but the pole is still on the graph of $r = 6\\sin\\theta$ (at $\\theta = 0$). Completing the square in the original shows the shape: $x^2 + (y - 3)^2 = 9$, a circle of radius $3$ centered at $(0, 3)$.',
    },
    {
      kind: 'concept',
      title: 'Graphing $r = f(\\theta)$: cardioids and limaçons',
      blocks: [
        {
          type: 'p',
          text: 'To graph a polar equation, imagine a radar beam sweeping counterclockwise. At each angle $\\theta$, the equation tells you how far out to place a dot. A table of values at the quadrantal angles gives the skeleton.',
        },
        {
          type: 'table',
          headers: ['$\\theta$', '$0$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$', '$\\pi$', '$\\frac{3\\pi}{2}$', '$2\\pi$'],
          rows: [['$r = 1 + \\cos\\theta$', '$2$', '$1.5$', '$1$', '$0.5$', '$0$', '$1$', '$2$']],
          caption: 'The distance shrinks from $2$ to $0$ as the beam sweeps to $\\theta = \\pi$, then grows back. Joined smoothly, these points make a heart: a [[cardioid]].',
        },
        {
          type: 'graph',
          x: [-3, 4],
          y: [-3, 3],
          equal: true,
          polar: [{ expr: '1 + b*cos(theta)', label: '$r = 1 + b\\cos\\theta$' }],
          sliders: [{ name: 'b', min: 0, max: 2.5, step: 0.1, value: 1, label: '$b$' }],
          readouts: [{ label: '$r$ at $\\theta = \\pi$: $1 - b =$', expr: '1 - b', digits: 2 }],
          caption: 'These are **limaçons**. $b = 0$: a circle. $0 < b < 1$: a dimpled oval. $b = 1$: the cardioid, with a cusp at the pole. $b > 1$: an inner loop appears.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the inner loop appears',
          text: 'When $b > 1$, the value $1 + b\\cos\\theta$ goes **negative** for angles near $\\pi$ (where $\\cos\\theta$ is close to $-1$). Negative $r$ plots the point on the opposite side of the pole, so while the beam points left, the curve is drawn on the right — tracing a small loop inside the big one. The loop starts and ends where $r = 0$, i.e. where $\\cos\\theta = -\\frac1b$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Swapping $\\cos$ for $\\sin$ rotates the graph by $90^\\circ$: $r = 1 + \\sin\\theta$ is a cardioid pointing up, and $r = 1 - \\cos\\theta$ points left.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'The limaçon $r = 1 + 2\\cos\\theta$ has an inner loop that starts and ends at the pole. Find every $\\theta$ in $[0, 2\\pi)$ where $r = 0$. Separate answers with commas.',
      hint: 'Solve $1 + 2\\cos\\theta = 0$.',
      label: '$\\theta =$',
      answer: ['2pi/3', '4pi/3'],
      answerTex: '\\frac{2\\pi}{3},\\ \\frac{4\\pi}{3}',
      explanation: '$1 + 2\\cos\\theta = 0$ gives $\\cos\\theta = -\\frac12$. Cosine is negative in quadrants II and III, with reference angle $\\frac{\\pi}{3}$: $\\theta = \\frac{2\\pi}{3}$ and $\\theta = \\frac{4\\pi}{3}$. Between these angles $r < 0$, which is exactly the stretch of $\\theta$ that draws the inner loop.',
    },
    {
      kind: 'concept',
      title: 'Rose curves',
      blocks: [
        {
          type: 'p',
          text: 'Multiply the angle inside the cosine and the beam sweeps through several full waves per turn. Each positive hump of $\\cos(n\\theta)$ draws a petal, and each negative hump draws a petal on the opposite side. The result is a [[rose-curve]].',
        },
        {
          type: 'theorem',
          name: 'Rose curves $r = a\\cos(n\\theta)$ and $r = a\\sin(n\\theta)$ ($n \\ge 2$ an integer)',
          text: 'Each petal has length $|a|$. If $n$ is **odd** there are $n$ petals; if $n$ is **even** there are $2n$ petals.',
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [-3.5, 3.5],
          equal: true,
          polar: [{ expr: 'a*cos(n*theta)', label: '$r = a\\cos(n\\theta)$' }],
          sliders: [
            { name: 'n', min: 1, max: 8, step: 1, value: 3, label: '$n$' },
            { name: 'a', min: 0.5, max: 3, step: 0.5, value: 3, label: '$a$' },
          ],
          caption: 'Try $n = 2, 3, 4, 5$: odd $n$ gives $n$ petals, even $n$ gives $2n$. The slider $a$ only changes the petal length.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why odd and even behave differently',
          text: 'For $\\theta$ from $0$ to $2\\pi$, $\\cos(n\\theta)$ has $2n$ humps ($n$ positive, $n$ negative), and each draws a petal. When $n$ is **even**, the negative humps land in new directions, so all $2n$ petals are distinct. When $n$ is **odd**, each negative hump lands exactly on top of a positive one (because $\\cos(n(\\theta + \\pi)) = -\\cos(n\\theta)$ for odd $n$, and $(-r, \\theta + \\pi)$ is the same point as $(r, \\theta)$), so the curve retraces itself and only $n$ petals show.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'How many petals does the rose $r = 4\\sin(6\\theta)$ have?',
      options: [
        { text: '$6$', why: 'That is the rule for **odd** $n$. With $n = 6$ (even), the negative humps draw new petals.' },
        { text: '$4$', why: 'The coefficient $4$ is the petal **length**, not the number of petals.' },
        { text: '$12$', correct: true, why: 'Correct: $n = 6$ is even, so there are $2n = 12$ petals.' },
        { text: '$24$', why: 'Too many: $2n$ is the maximum, reached when $n$ is even.' },
      ],
      explanation: 'For $r = a\\sin(n\\theta)$ with integer $n \\ge 2$, the petal count is $n$ when $n$ is odd and $2n$ when $n$ is even. Here $n = 6$, so $12$ petals, each of length $|a| = 4$. Using $\\sin$ instead of $\\cos$ only rotates the flower.',
    },
    {
      kind: 'error',
      prompt: 'A student converts the rectangular point $(-1, \\sqrt3)$ to polar coordinates with $r > 0$. Tap the first incorrect line.',
      lines: [
        '$r = \\sqrt{(-1)^2 + (\\sqrt3)^2} = 2$',
        '$\\tan\\theta = \\dfrac{\\sqrt3}{-1} = -\\sqrt3$',
        '$\\theta = \\tan^{-1}(-\\sqrt3) = -\\dfrac{\\pi}{3}$',
        'So the point is $\\left(2, -\\dfrac{\\pi}{3}\\right)$',
      ],
      errorLines: [3],
      explanation: 'Line 3 accepts the calculator\'s angle without a quadrant check. $-\\frac{\\pi}{3}$ points into quadrant IV, but $(-1, \\sqrt3)$ is in quadrant II. Adding $\\pi$ gives the right direction: $\\theta = -\\frac{\\pi}{3} + \\pi = \\frac{2\\pi}{3}$, so the point is $\\left(2, \\frac{2\\pi}{3}\\right)$. (The student\'s $\\left(2, -\\frac{\\pi}{3}\\right)$ is the rectangular point $(1, -\\sqrt3)$ — the exact opposite.)',
    },
    {
      kind: 'concept',
      title: 'Spirals, and polar curves in code',
      blocks: [
        {
          type: 'p',
          text: 'Let $r$ grow steadily with the angle and you get a spiral. The **Archimedean spiral** $r = k\\theta$ moves outward by the same distance, $2\\pi k$, on every turn — like the groove of a vinyl record or a coiled rope.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          polar: [{ expr: 'k*theta', theta: [0, '6pi'], label: '$r = k\\theta$' }],
          sliders: [{ name: 'k', min: 0.1, max: 0.6, step: 0.05, value: 0.3, label: '$k$' }],
          readouts: [{ label: 'gap between turns $2\\pi k =$', expr: '2pi*k', digits: 3 }],
          caption: 'Three full turns, $0 \\le \\theta \\le 6\\pi$. Each turn adds $2\\pi k$ to the distance from the pole.',
        },
        {
          type: 'p',
          text: 'A computer draws every polar curve the same way the graph above does: step $\\theta$ through many small increments, compute $r = f(\\theta)$, and convert each point with $x = r\\cos\\theta$, $y = r\\sin\\theta$. The same conversion fires a ring of bullets at evenly spaced angles:',
        },
        {
          type: 'code',
          title: 'bullet_ring.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double PI = std::acos(-1.0);
    const int count = 6;                  // bullets in the ring
    const double speed = 2.0;             // r: distance travelled per second
    for (int k = 0; k < count; ++k) {
        double theta = 2.0 * PI * k / count;  // evenly spaced angles
        double vx = speed * std::cos(theta);  // x = r cos(theta)
        double vy = speed * std::sin(theta);  // y = r sin(theta)
        std::printf("bullet %d: angle %3.0f deg, velocity (%6.3f, %6.3f)\\n",
                    k, theta * 180.0 / PI, vx, vy);
    }
}`,
          output: `bullet 0: angle   0 deg, velocity ( 2.000,  0.000)
bullet 1: angle  60 deg, velocity ( 1.000,  1.732)
bullet 2: angle 120 deg, velocity (-1.000,  1.732)
bullet 3: angle 180 deg, velocity (-2.000,  0.000)
bullet 4: angle 240 deg, velocity (-1.000, -1.732)
bullet 5: angle 300 deg, velocity ( 1.000, -1.732)`,
          annotations: [
            { lines: 9, text: 'Angles $\\frac{2\\pi k}{6}$: one full turn split into $6$ equal parts.' },
            { lines: '10-11', text: 'Polar to rectangular: each bullet\'s velocity has length $r = 2$ and direction $\\theta$.' },
            { lines: 12, text: 'Printing degrees for humans; the math functions always take radians.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Calculus II returns to polar curves to find the areas they enclose and the lengths of spirals. Everything there builds on the conversions in this lesson.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the code that places a point on the polar curve $r = f(\\theta)$.',
      template: '`x = r *` ___ `;   y = r *` ___ `;   r = sqrt(x*x + y*y)` gives back ___.',
      blanks: [{ answers: ['`cos(theta)`'] }, { answers: ['`sin(theta)`'] }, { answers: ['the distance from the pole'] }],
      wordBank: ['`cos(theta)`', '`sin(theta)`', '`tan(theta)`', 'the distance from the pole', 'the angle $\\theta$'],
      explanation: '$x = r\\cos\\theta$ and $y = r\\sin\\theta$ scale the unit-circle point for $\\theta$ by $r$. Going back, $\\sqrt{x^2 + y^2}$ is the distance from the pole, which equals $|r|$ (if $r$ was negative, you get its absolute value — negative $r$ is a naming convention, not a negative distance). The angle comes back from `atan2(y, x)`, not from the square root.',
    },
    {
      kind: 'truefalse',
      prompt: 'The polar point $\\left(-2, \\frac{\\pi}{2}\\right)$ lies on the negative $y$-axis.',
      answer: true,
      explanation: 'Face the $\\frac{\\pi}{2}$ direction (straight up) and walk **backwards** $2$ units: you end at $(0, -2)$. Algebraically, $x = -2\\cos\\frac{\\pi}{2} = 0$ and $y = -2\\sin\\frac{\\pi}{2} = -2$. The same point is $\\left(2, \\frac{3\\pi}{2}\\right)$.',
    },
  ],
  takeaways: [
    'A polar point $(r, \\theta)$ is distance $r$ from the pole in direction $\\theta$; $(r, \\theta) = (r, \\theta + 2\\pi k) = (-r, \\theta + \\pi)$.',
    'Convert with $x = r\\cos\\theta$, $y = r\\sin\\theta$, $r^2 = x^2 + y^2$, $\\tan\\theta = \\frac yx$ — always place $\\theta$ in the quadrant of $(x, y)$.',
    'To convert polar equations, build $r\\cos\\theta$, $r\\sin\\theta$ and $r^2$ (often by multiplying by $r$); $r = 2a\\cos\\theta$ is a circle through the pole.',
    'Limaçons $r = a + b\\cos\\theta$: inner loop if $a < b$, cardioid if $a = b$, dimpled or oval if $a > b$.',
    'Roses $r = a\\cos(n\\theta)$: $n$ petals for odd $n$, $2n$ for even $n$; spirals $r = k\\theta$ widen by $2\\pi k$ per turn.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 10.3 Polar Coordinates',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-3-polar-coordinates',
      source: 'openstax',
      note: 'Plotting points and converting points and equations, with many practice problems.',
    },
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 10.4 Polar Coordinates: Graphs',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-4-polar-coordinates-graphs',
      source: 'openstax',
      note: 'Symmetry tests and a catalogue of limaçons, roses and lemniscates.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type `r = 1 + 2cos(θ)` or `r = 3sin(5θ)` and add sliders to explore polar families yourself.',
    },
  ],
};
