import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-angles-radians',
  title: 'Angles, Degrees and Radians',
  summary: 'Angles as rotations, two ways to measure them, and why mathematicians (and std::sin) insist on radians.',
  minutes: 17,
  objectives: [
    'Describe an angle in standard position by its initial side, terminal side and direction of rotation',
    'Find coterminal angles by adding or subtracting full turns',
    'Explain what one radian is and why a full turn is $2\\pi$ radians',
    'Convert between degrees and radians in both directions, exactly and with decimals',
    'Explain why calculus and programming libraries measure angles in radians',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'An angle is a rotation',
      blocks: [
        {
          type: 'p',
          text: 'In geometry class an [[angle]] was a static shape: two rays meeting at a point. Trigonometry upgrades that picture. An angle is a **rotation**: a ray starts in one position, the **initial side**, and turns about its endpoint, the **vertex**, until it stops at the **terminal side**. The angle measures *how much* it turned and *in which direction*.',
        },
        {
          type: 'definition',
          term: 'Standard position',
          text: 'An angle is in [[standard-position]] when its vertex is at the origin and its [[initial-side]] lies along the positive $x$-axis. Rotating **counterclockwise** gives a **positive** angle; rotating **clockwise** gives a **negative** angle. The ray where the rotation stops is the [[terminal-side]].',
        },
        {
          type: 'p',
          text: 'Because an angle is a rotation, nothing stops it from going past a full turn. A wheel that spins two and a half times has turned through $900^\\circ$, and a character turning right has turned through a negative angle. Drag the slider and watch the spiral record the whole rotation, while the terminal side only shows where it ended.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: '(0.2 + 0.035abs(t))cos(t)', y: '(0.2 + 0.035abs(t))sin(t)', t: [0, 'd*pi/180'], color: 'orange', label: 'rotation' }],
          segments: [
            { from: [0, 0], to: [1.3, 0], color: 'gray', label: 'initial side' },
            { from: [0, 0], to: ['1.2cos(d*pi/180)', '1.2sin(d*pi/180)'], color: 'blue', arrow: true, label: 'terminal side' },
          ],
          points: [{ x: 0, y: 0, label: 'vertex' }],
          sliders: [{ name: 'd', min: -720, max: 720, step: 5, value: 135, label: 'angle (degrees)' }],
          readouts: [
            { label: 'angle $=$', expr: 'd', digits: 0 },
            { label: 'same terminal side as', expr: 'd - 360floor(d/360)', digits: 0 },
          ],
          caption: 'Positive angles spin counterclockwise, negative angles clockwise. Try $135^\\circ$, $495^\\circ$ and $-225^\\circ$: three different rotations, one terminal side.',
        },
        {
          type: 'p',
          text: 'The axes split the plane into four [[quadrant|quadrants]], numbered I to IV counterclockwise starting from the upper right. We say an angle "lies in" the quadrant that contains its terminal side. An angle whose terminal side lands exactly on an axis ($0^\\circ$, $90^\\circ$, $180^\\circ$, $270^\\circ$, …) is called a **quadrantal angle** and lies in no quadrant.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why counterclockwise is positive',
          text: 'It is a convention, but a consistent one: it matches the order of the quadrants (I → II → III → IV) and, later, the direction a point travels around the unit circle as the angle increases. Every textbook, every math library and most 2D engines with a $y$-up axis use it. (Screen coordinates often have $y$ pointing **down**, which visually flips the direction — a classic source of "my sprite rotates the wrong way" bugs.)',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'An angle of $-120^\\circ$ is drawn in standard position. In which quadrant does its terminal side lie?',
      hint: 'Negative means clockwise. Clockwise from the positive $x$-axis, $-90^\\circ$ points straight down. Keep going $30^\\circ$ more.',
      options: [
        { text: 'Quadrant II', why: 'That is where $+120^\\circ$ lands: counterclockwise past the positive $y$-axis. The minus sign reverses the direction.' },
        { text: 'Quadrant III', correct: true, why: 'Clockwise $90^\\circ$ reaches the negative $y$-axis; $30^\\circ$ more swings into the lower-left quadrant.' },
        { text: 'Quadrant IV', why: 'Quadrant IV holds clockwise rotations between $0^\\circ$ and $-90^\\circ$. At $-120^\\circ$ you have already passed the negative $y$-axis.' },
        { text: 'Quadrant I', why: 'Quadrant I holds angles between $0^\\circ$ and $90^\\circ$ (or those plus full turns). A clockwise turn never enters it until $-270^\\circ$.' },
      ],
      explanation: 'Rotate clockwise from the positive $x$-axis: $-90^\\circ$ is the negative $y$-axis and $-180^\\circ$ is the negative $x$-axis. $-120^\\circ$ is between them, so the terminal side is in **Quadrant III**. As a check, $-120^\\circ + 360^\\circ = 240^\\circ$, which is between $180^\\circ$ and $270^\\circ$: Quadrant III again.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Degrees and coterminal angles',
      blocks: [
        {
          type: 'p',
          text: 'The familiar unit is the [[degree-measure|degree]]: one full counterclockwise turn is $360^\\circ$, so $1^\\circ$ is $\\frac{1}{360}$ of a turn. A half turn is $180^\\circ$, a quarter turn $90^\\circ$ (a right angle).',
        },
        {
          type: 'p',
          text: 'In the slider above, $135^\\circ$, $495^\\circ$ and $-225^\\circ$ all ended on the same ray. Angles that share a terminal side are called [[coterminal-angles]]. They differ by a whole number of full turns, because adding a full turn brings the ray right back to where it was.',
        },
        {
          type: 'theorem',
          name: 'Coterminal angles',
          tex: '\\theta \\text{ and } \\theta + 360^\\circ k \\text{ are coterminal for every integer } k',
          text: '$k > 0$ adds counterclockwise turns, $k < 0$ removes them.',
        },
        {
          type: 'derivation',
          title: 'Find the angle in $[0^\\circ, 360^\\circ)$ coterminal with $820^\\circ$',
          steps: [
            { tex: '820^\\circ - 360^\\circ = 460^\\circ', why: 'Subtract one full turn. The terminal side does not move, but $460^\\circ$ is still bigger than $360^\\circ$.' },
            { tex: '460^\\circ - 360^\\circ = 100^\\circ', why: 'Subtract another full turn. Now the angle is between $0^\\circ$ and $360^\\circ$, so we stop.' },
            { tex: '820^\\circ = 100^\\circ + 2 \\cdot 360^\\circ', why: 'Summary: $820^\\circ$ is two full turns plus $100^\\circ$, so it lies in Quadrant II.' },
          ],
          result: '$820^\\circ$ is coterminal with $100^\\circ$.',
        },
        {
          type: 'derivation',
          title: 'Find the smallest positive angle coterminal with $-45^\\circ$',
          steps: [
            { tex: '-45^\\circ + 360^\\circ = 315^\\circ', why: 'A negative angle needs full turns **added** to become positive. One turn is enough here.' },
            { tex: '0^\\circ < 315^\\circ < 360^\\circ', why: 'Check that we landed in one full turn. Adding another $360^\\circ$ would give $675^\\circ$, positive but not the *smallest* positive choice.' },
          ],
          result: 'Turning $45^\\circ$ clockwise ends in the same place as turning $315^\\circ$ counterclockwise.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Wrapping angles in code',
          text: 'Games accumulate rotation every frame (`heading += turnRate * dt`), so the stored angle drifts to huge values. Engines "wrap" it back into a standard range — exactly the coterminal-angle computation. In C++, `std::fmod(a, 360.0)` keeps the sign of `a`, so a correct wrap to $[0, 360)$ is `a = std::fmod(a, 360.0); if (a < 0) a += 360.0;`.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 360?',
          text: 'Nobody proved that a circle "has" $360$ degrees; the number was chosen. Babylonian astronomers counted in base $60$, and $360$ is close to the number of days in a year, so the sun moves about one degree per day against the stars. It also divides evenly by $2, 3, 4, 5, 6, 8, 9, 10, 12, \\dots$ — handy for fractions of a turn. The convenience is real, but it is arbitrary. Keep that in mind: the next card shows a unit that is *not* arbitrary.',
        },
        {
          type: 'deepdive',
          title: 'Degrees, minutes and seconds',
          blocks: [
            {
              type: 'p',
              text: 'Surveying, navigation and astronomy split degrees further: $1^\\circ = 60\'$ (minutes) and $1\' = 60\'\'$ (seconds). To convert to decimal degrees, divide the minutes by $60$ and the seconds by $3600$:',
            },
            { type: 'math', tex: "23^\\circ 15' 36'' = 23 + \\frac{15}{60} + \\frac{36}{3600} = 23 + 0.25 + 0.01 = 23.26^\\circ" },
            {
              type: 'p',
              text: 'GPS coordinates are often written this way, which is why a latitude can look like `40°26\'46"N`.',
            },
          ],
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Find the smallest **positive** angle, in degrees, that is coterminal with $-510^\\circ$.',
      hint: 'Add $360^\\circ$ as many times as it takes to get a positive result.',
      label: '$\\theta =$',
      unit: '°',
      answer: '210',
      explanation: '$-510^\\circ + 360^\\circ = -150^\\circ$ is still negative, so add another turn: $-150^\\circ + 360^\\circ = 210^\\circ$. In one step, $-510^\\circ + 2 \\cdot 360^\\circ = 210^\\circ$. A clockwise rotation of one and a half turns minus $30^\\circ$ ends in Quadrant III.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Radians: measuring an angle with the radius',
      blocks: [
        {
          type: 'p',
          text: 'Here is a unit that comes from the circle itself. Draw a circle of radius $r$ centred at the vertex of an angle. The angle cuts off an arc of the circle. Measure that arc *in radii*: how many radius-lengths long is it? That count is the angle\'s measure in [[radian|radians]].',
        },
        {
          type: 'definition',
          term: 'Radian measure',
          text: 'If a central angle $\\theta$ cuts off an arc of length $s$ on a circle of radius $r$, its radian measure is\n\n$$\\theta = \\frac{s}{r}.$$\n\nAn angle of **1 radian** cuts off an arc exactly as long as the radius.',
        },
        {
          type: 'graph',
          x: [-2.4, 2.4],
          y: [-2.2, 2.2],
          equal: true,
          parametric: [
            { x: 'r*cos(t)', y: 'r*sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 'r*cos(t)', y: 'r*sin(t)', t: [0, 'a'], color: 'orange', label: 'arc $s$' },
          ],
          segments: [
            { from: [0, 0], to: ['r', 0], color: 'blue', label: 'r' },
            { from: [0, 0], to: ['r*cos(a)', 'r*sin(a)'], color: 'blue', arrow: true },
          ],
          sliders: [
            { name: 'a', min: 0, max: 6.28, step: 0.01, value: 1, label: 'angle $\\theta$ (radians)' },
            { name: 'r', min: 0.5, max: 2, step: 0.05, value: 1.5, label: 'radius $r$' },
          ],
          readouts: [
            { label: 'arc length $s =$', expr: 'r*a', digits: 3 },
            { label: '$s / r =$', expr: '(r*a)/r', digits: 3 },
            { label: 'in degrees:', expr: 'a*180/pi', digits: 2 },
          ],
          caption: 'Change the radius with the angle fixed: the arc grows, but $s/r$ does not budge. At $\\theta = 1$ the arc is exactly one radius long. Drag $\\theta$ to about $6.28$ to close the circle.',
        },
        {
          type: 'p',
          text: 'How many radians make a full turn? The arc is then the whole circumference, $s = 2\\pi r$, so $\\theta = \\frac{2\\pi r}{r} = 2\\pi \\approx 6.283$. A full turn is $2\\pi$ radians — a bit more than six radius-lengths of string wrapped around the circle.',
        },
        {
          type: 'math',
          tex: '360^\\circ = 2\\pi \\text{ rad} \\qquad 180^\\circ = \\pi \\text{ rad} \\qquad 90^\\circ = \\frac{\\pi}{2} \\text{ rad}',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the radius does not matter',
          text: 'Scale a picture up by a factor of $3$ and every length triples: the arc $s$ and the radius $r$ both get multiplied by $3$, so $\\frac{s}{r}$ is unchanged. The ratio depends only on how wide the angle opens. That is also why radians are **dimensionless**: metres divided by metres. We often write "$\\theta = 2$" with no unit at all, and that means $2$ radians.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Imagine bending the radius of a pizza onto its crust. The slice of crust it covers marks out 1 radian. About $6.28$ of those fit around the whole pizza, no matter how big the pizza is.',
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: 'On a larger circle, an angle of 1 radian opens wider than it does on a smaller circle, because the arc is longer.',
      answer: false,
      explanation: 'The arc *is* longer on a larger circle, but the radius is longer by the same factor, and 1 radian means "arc = radius". The angle itself is identical, about $57.3^\\circ$, on every circle. That scale-independence is exactly what makes the radian a good unit.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Converting between degrees and radians',
      blocks: [
        {
          type: 'p',
          text: 'Everything follows from one fact: a half turn is $180^\\circ$ and also $\\pi$ radians. Treat $\\frac{\\pi \\text{ rad}}{180^\\circ}$ as a conversion factor equal to $1$, just like $\\frac{100 \\text{ cm}}{1 \\text{ m}}$, and multiply so that the unwanted unit cancels.',
        },
        {
          type: 'theorem',
          name: 'Conversion factors',
          tex: '\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180^\\circ} \\qquad \\text{degrees} = \\text{radians} \\times \\frac{180^\\circ}{\\pi}',
        },
        {
          type: 'derivation',
          title: 'Convert $150^\\circ$ to radians (exactly)',
          steps: [
            { tex: '150^\\circ \\cdot \\frac{\\pi}{180^\\circ}', why: 'Degrees on top, so put degrees on the bottom of the factor to cancel them.' },
            { tex: '= \\frac{150\\pi}{180}', why: 'Multiply the numerators. The degree symbols have cancelled.' },
            { tex: '= \\frac{5\\pi}{6}', why: 'Reduce: $150$ and $180$ share a factor of $30$. Leave $\\pi$ as a symbol to keep the answer exact.' },
          ],
          result: '$150^\\circ = \\frac{5\\pi}{6}$ rad $\\approx 2.618$ rad.',
        },
        {
          type: 'derivation',
          title: 'Convert $\\frac{7\\pi}{4}$ to degrees',
          steps: [
            { tex: '\\frac{7\\pi}{4} \\cdot \\frac{180^\\circ}{\\pi}', why: 'Now $\\pi$ (radians) is on top, so put $\\pi$ on the bottom of the factor.' },
            { tex: '= \\frac{7 \\cdot 180^\\circ}{4}', why: 'The $\\pi$s cancel.' },
            { tex: '= 7 \\cdot 45^\\circ = 315^\\circ', why: '$\\frac{180}{4} = 45$. A handy shortcut: replace $\\pi$ with $180^\\circ$ and simplify.' },
          ],
          result: '$\\frac{7\\pi}{4} = 315^\\circ$, in Quadrant IV.',
        },
        {
          type: 'table',
          headers: ['Degrees', '$0^\\circ$', '$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$135^\\circ$', '$150^\\circ$', '$180^\\circ$', '$270^\\circ$', '$360^\\circ$'],
          rows: [['Radians', '$0$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$', '$\\frac{3\\pi}{4}$', '$\\frac{5\\pi}{6}$', '$\\pi$', '$\\frac{3\\pi}{2}$', '$2\\pi$']],
          caption: 'Learn these by fractions of a half turn: $\\frac{\\pi}{6}$ is a sixth of $180^\\circ$, $\\frac{\\pi}{4}$ a quarter, $\\frac{\\pi}{3}$ a third.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong: factor upside down', tone: 'bad', tex: ['60^\\circ \\cdot \\frac{180}{\\pi} \\approx 3438'] },
          right: { title: 'Right: units cancel', tone: 'good', tex: ['60^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{\\pi}{3} \\approx 1.047'] },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sanity check',
          text: 'One radian is about $57.3^\\circ$, so a radian measure should be roughly the degree measure divided by $57$. If $60^\\circ$ turns into $3438$, you flipped the factor. Also: $\\pi \\approx 3.14$ rad is a half turn, so any angle under $180^\\circ$ must come out below $3.14$ rad.',
        },
      ],
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Convert $225^\\circ$ to radians. Give an exact answer in terms of $\\pi$ (type `pi`).',
      hint: 'Multiply by $\\frac{\\pi}{180}$ and reduce $\\frac{225}{180}$.',
      label: '$225^\\circ =$',
      unit: 'rad',
      answer: '5pi/4',
      answerTex: '\\frac{5\\pi}{4}',
      explanation: '$225^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{225\\pi}{180}$. Both numbers are divisible by $45$: $\\frac{225}{180} = \\frac{5}{4}$. So $225^\\circ = \\frac{5\\pi}{4}$ rad. Check: $225^\\circ$ is $180^\\circ + 45^\\circ$, and $\\frac{5\\pi}{4} = \\pi + \\frac{\\pi}{4}$. ',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A game\'s physics engine reports that a wheel turned through $2$ radians this frame. How many degrees is that? Round to two decimal places.',
      hint: 'Multiply by $\\frac{180^\\circ}{\\pi}$.',
      label: '$2 \\text{ rad} =$',
      unit: '°',
      answer: '360/pi',
      answerTex: '\\frac{360^\\circ}{\\pi} \\approx 114.59^\\circ',
      tolerance: 0.01,
      explanation: '$2 \\cdot \\frac{180^\\circ}{\\pi} = \\frac{360^\\circ}{\\pi} \\approx 114.59^\\circ$. That fits the estimate "one radian is about $57.3^\\circ$": two radians is about $2 \\times 57.3^\\circ = 114.6^\\circ$, a bit more than a right angle.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Why radians are the natural unit',
      blocks: [
        {
          type: 'p',
          text: 'If degrees are so familiar, why do mathematicians and programmers insist on radians? Because radians make the important formulas clean, and degrees litter them with the stray constant $\\frac{\\pi}{180}$.',
        },
        {
          type: 'list',
          items: [
            '**Arc length.** In radians, $s = r\\theta$. In degrees it becomes $s = \\frac{\\pi}{180} r\\theta$. (Next lesson builds on this.)',
            '**Small angles.** For small $\\theta$ in radians, $\\sin\\theta \\approx \\theta$. Physics uses this constantly (pendulums, small-angle approximations in optics). In degrees the rule is $\\sin\\theta \\approx \\frac{\\pi}{180}\\theta$.',
            '**Calculus.** In Calc I you will prove that the derivative of $\\sin x$ is $\\cos x$. That formula is true *only* when $x$ is in radians; in degrees the derivative is $\\frac{\\pi}{180}\\cos x$.',
          ],
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.3, 1.3],
          equal: true,
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$ ($x$ in radians)' },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
            { expr: 'sin(pi*x/180)', label: '$y = \\sin(x^\\circ)$', color: 'red' },
          ],
          caption: 'Near $0$, the radian sine curve hugs the line $y = x$: $\\sin\\theta \\approx \\theta$. The degree version is almost flat, because $1^\\circ$ is a tiny turn. (You will meet the sine function properly in the next unit; here, just notice which curve matches $y = x$.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why radians make $\\sin\\theta \\approx \\theta$ true',
          text: 'On a circle of radius $1$, the radian measure *is* the arc length. For a thin slice, the curved arc and the straight vertical drop from its endpoint (which you will soon call $\\sin\\theta$) are nearly the same length. Radians measure the angle with the same ruler as the lengths, so no conversion constant appears.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Every math library speaks radians',
          text: 'C++ `std::sin`, `std::cos`, `std::atan2`, C# `Math.Sin`, Python `math.sin`, GLSL `sin` — all take radians. Editors and inspectors often *display* degrees because humans like them (Unity\'s Transform inspector, Godot\'s `rotation_degrees`), so engine code is full of conversions such as Unity\'s `Mathf.Deg2Rad` and Unreal\'s `FMath::DegreesToRadians`. Forgetting one is a classic bug: `std::sin(90)` is **not** $1$.',
        },
        {
          type: 'code',
          title: 'radians.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

constexpr double deg2rad(double deg) { return deg * std::numbers::pi / 180.0; }

int main() {
    std::printf("sin(90)          = %.4f\\n", std::sin(90.0));
    std::printf("sin(deg2rad(90)) = %.4f\\n", std::sin(deg2rad(90.0)));
    std::printf("sin(deg2rad(30)) = %.4f\\n", std::sin(deg2rad(30.0)));
}`,
          output: `sin(90)          = 0.8940
sin(deg2rad(90)) = 1.0000
sin(deg2rad(30)) = 0.5000`,
          annotations: [
            { lines: 3, text: 'C++20 `<numbers>` provides `std::numbers::pi` as a `double` constant.' },
            { lines: 5, text: 'Degrees times $\\frac{\\pi}{180}$: the conversion from this lesson, as a one-line function.' },
            { lines: 8, text: 'Bug on purpose: `90` is read as 90 *radians* — over 14 full turns — so the result is about $0.894$.' },
            { lines: '9-10', text: 'Converting first gives the values you expect: $\\sin 90^\\circ = 1$ and $\\sin 30^\\circ = 0.5$.' },
          ],
        },
      ],
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'A programmer wants $\\sin 30^\\circ = 0.5$ and writes `double s = std::sin(30);`. What does `s` hold?',
      options: [
        { text: '$0.5$', why: 'That would require `std::sin` to read $30$ as degrees. It reads radians.' },
        { text: 'About $-0.988$', correct: true, why: '$30$ radians is almost $4.8$ full turns; the sine of that angle is about $-0.988$.' },
        { text: 'A compile error, because $30$ is an integer', why: 'The integer converts to `double` automatically; the code compiles and silently computes the wrong thing — the worst kind of bug.' },
        { text: '$\\frac{\\pi}{6}$', why: '$\\frac{\\pi}{6}$ is $30^\\circ$ written in radians, not the sine of anything. No conversion happens automatically.' },
      ],
      explanation: 'Every standard math library interprets its argument in radians. $30$ rad $= \\frac{30 \\cdot 180^\\circ}{\\pi} \\approx 1718.9^\\circ$, which is coterminal with about $278.9^\\circ$ — nearly straight down — so its sine is about $-0.988$. The fix is `std::sin(30 * std::numbers::pi / 180)`, which equals $\\frac{\\pi}{6}$ radians and returns $0.5$ (up to floating-point rounding).',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Thinking in fractions of a turn',
      blocks: [
        {
          type: 'p',
          text: 'Fluent trig users do not convert with a formula each time. They think of $\\pi$ as "half a turn" and read radian angles as fractions of it. $\\frac{\\pi}{2}$ is a quarter turn; $\\frac{3\\pi}{2}$ is three quarter turns; $\\frac{5\\pi}{6}$ is five-sixths of the way to the negative $x$-axis.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: '0.3cos(t)', y: '0.3sin(t)', t: [0, 'k*pi'], color: 'orange' },
          ],
          segments: [
            { from: [0, 0], to: [1.2, 0], color: 'gray' },
            { from: [0, 0], to: ['cos(k*pi)', 'sin(k*pi)'], color: 'blue', arrow: true },
          ],
          points: [
            { x: 1, y: 0, label: '0' },
            { x: 0, y: 1, label: 'π/2' },
            { x: -1, y: 0, label: 'π' },
            { x: 0, y: -1, label: '3π/2' },
          ],
          sliders: [{ name: 'k', min: -2, max: 2, step: 1 / 12, value: 5 / 6, label: 'angle $= k\\pi$, with $k =$' }],
          readouts: [
            { label: '$k \\cdot 180^\\circ =$', expr: 'k*180', digits: 1 },
            { label: 'radians $\\approx$', expr: 'k*pi', digits: 3 },
          ],
          caption: 'The slider moves in steps of $\\frac{\\pi}{12}$ ($15^\\circ$). Every multiple of $\\frac{\\pi}{6}$ and $\\frac{\\pi}{4}$ is a stop on the way.',
        },
        {
          type: 'derivation',
          title: 'Which quadrant is $\\frac{11\\pi}{6}$ in, and what is it in degrees?',
          steps: [
            { tex: '\\frac{11\\pi}{6} = 2\\pi - \\frac{\\pi}{6}', why: 'A full turn is $2\\pi = \\frac{12\\pi}{6}$, so $\\frac{11\\pi}{6}$ is one sixth of a half turn short of a full turn.' },
            { tex: '= 360^\\circ - 30^\\circ = 330^\\circ', why: 'Replace $\\pi$ by $180^\\circ$: $\\frac{\\pi}{6} = 30^\\circ$.' },
          ],
          result: 'Just shy of a full turn: Quadrant IV, $330^\\circ$. Coterminal with $-\\frac{\\pi}{6}$.',
        },
        {
          type: 'p',
          text: 'Coterminal angles work the same way in radians, with $2\\pi$ playing the role of $360^\\circ$: $\\theta$ and $\\theta + 2\\pi k$ share a terminal side for every integer $k$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Common denominator first',
          text: 'To add or subtract $2\\pi$ from a fraction like $\\frac{17\\pi}{4}$, write $2\\pi$ with the same denominator: $2\\pi = \\frac{8\\pi}{4}$ (not $\\frac{2\\pi}{4}$ or $\\frac{4\\pi}{4}$). Then subtract numerators.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect a no-calculator section asking you to convert the "standard angles" (multiples of $30^\\circ$ and $45^\\circ$) in both directions and to name their quadrants. Instructors want exact answers like $\\frac{2\\pi}{3}$, not $2.094$.',
        },
      ],
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A student finds the angle in $[0, 2\\pi)$ coterminal with $\\frac{17\\pi}{4}$. Tap the first line that is wrong.',
      lines: [
        '$\\frac{17\\pi}{4}$ is more than $2\\pi$, so subtract full turns.',
        '$\\frac{17\\pi}{4} - 2\\pi = \\frac{17\\pi}{4} - \\frac{4\\pi}{4}$',
        '$= \\frac{13\\pi}{4}$',
        '$\\frac{13\\pi}{4} - 2\\pi = \\frac{9\\pi}{4}$, still too big, and so on…',
      ],
      errorLines: [2],
      explanation: 'Line 2 rewrites $2\\pi$ as $\\frac{4\\pi}{4}$, which is only $\\pi$. Correctly, $2\\pi = \\frac{8\\pi}{4}$, so $\\frac{17\\pi}{4} - \\frac{8\\pi}{4} = \\frac{9\\pi}{4}$, and one more turn gives $\\frac{9\\pi}{4} - \\frac{8\\pi}{4} = \\frac{\\pi}{4}$. Check in degrees: $\\frac{17\\pi}{4} = 765^\\circ = 2 \\cdot 360^\\circ + 45^\\circ$.',
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Complete the facts about turns and radians.',
      template: 'A full turn is ___ radians, a quarter turn is ___ radians, and an angle of $1$ radian is about ___ degrees.',
      blanks: [{ answers: ['$2\\pi$'] }, { answers: ['$\\frac{\\pi}{2}$'] }, { answers: ['$57.3$'] }],
      wordBank: ['$2\\pi$', '$\\pi$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$', '$57.3$', '$3.14$', '$360$'],
      explanation: 'The circumference is $2\\pi r$, which is $2\\pi$ radius-lengths, so a full turn is $2\\pi$ rad. A quarter of that is $\\frac{\\pi}{2}$. And $1$ rad $= \\frac{180^\\circ}{\\pi} \\approx 57.3^\\circ$. (Note $3.14$ is the radian measure of a *half* turn, not of $1$ radian in degrees.)',
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Convert $\\frac{5\\pi}{3}$ radians to degrees.',
      hint: 'Replace $\\pi$ by $180^\\circ$, then simplify.',
      label: '$\\frac{5\\pi}{3} =$',
      unit: '°',
      answer: '300',
      explanation: '$\\frac{5\\pi}{3} \\cdot \\frac{180^\\circ}{\\pi} = \\frac{5 \\cdot 180^\\circ}{3} = 5 \\cdot 60^\\circ = 300^\\circ$. It is a full turn minus $\\frac{\\pi}{3}$, i.e. $360^\\circ - 60^\\circ$, so it lies in Quadrant IV.',
    },
  ],
  takeaways: [
    'An angle in standard position starts on the positive $x$-axis; counterclockwise is positive, clockwise is negative.',
    'Coterminal angles share a terminal side and differ by whole turns: $\\theta + 360^\\circ k$ or $\\theta + 2\\pi k$.',
    'Radian measure is arc length divided by radius, $\\theta = \\frac{s}{r}$; it does not depend on the size of the circle.',
    'A full turn is $2\\pi$ rad $= 360^\\circ$, so convert with $\\frac{\\pi}{180^\\circ}$ (to radians) or $\\frac{180^\\circ}{\\pi}$ (to degrees).',
    'Radians make formulas clean ($s = r\\theta$, $\\sin\\theta \\approx \\theta$), which is why calculus and every math library use them.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.1 Angles',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-1-angles',
      source: 'openstax',
      note: 'Free textbook section covering standard position, coterminal angles and radian conversions with many exercises.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'The unit on radians has short videos and practice sets for converting between degrees and radians.',
    },
    {
      title: 'Wikipedia — Radian',
      url: 'https://en.wikipedia.org/wiki/Radian',
      source: 'wikipedia',
      note: 'History of the unit and a summary of why it is the SI unit of plane angle.',
    },
  ],
};
