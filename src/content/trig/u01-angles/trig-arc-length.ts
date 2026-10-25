import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-arc-length',
  title: 'Arc Length, Sector Area and Angular Speed',
  summary: 'Radians pay off: clean formulas for curved distance, pie-slice area, and how fast spinning things really move.',
  minutes: 17,
  objectives: [
    'Derive and use the arc length formula $s = r\\theta$',
    'Derive and use the sector area formula $A = \\frac{1}{2}r^2\\theta$',
    'Compute angular speed $\\omega$ and convert between rpm and radians per second',
    'Relate linear and angular speed with $v = r\\omega$, including belts and gears',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Arc length: $s = r\\theta$',
      blocks: [
        {
          type: 'p',
          text: 'Last lesson defined radians by $\\theta = \\frac{s}{r}$: arc length measured in radius-lengths. Turn that definition around and you get the length of any circular arc for free. Multiply both sides by $r$:',
        },
        {
          type: 'theorem',
          name: 'Arc length',
          tex: 's = r\\theta \\qquad (\\theta \\text{ in radians})',
          text: 'The [[arc-length]] $s$ cut off by a central angle $\\theta$ on a circle of radius $r$.',
        },
        {
          type: 'p',
          text: 'You can also see it by proportion. The arc is the same fraction of the full circumference as the angle is of a full turn:',
        },
        {
          type: 'derivation',
          title: 'Arc length by proportion',
          steps: [
            { tex: '\\frac{s}{2\\pi r} = \\frac{\\theta}{2\\pi}', why: 'Arc over whole circumference equals angle over whole turn. A quarter turn gets a quarter of the circumference, and so on.' },
            { tex: 's = 2\\pi r \\cdot \\frac{\\theta}{2\\pi}', why: 'Multiply both sides by the circumference $2\\pi r$.' },
            { tex: 's = r\\theta', why: 'The $2\\pi$ cancels. In degrees the "whole turn" would be $360^\\circ$, and the $2\\pi$ would *not* cancel — this is the radian payoff.' },
          ],
          result: 'With $\\theta$ in radians, arc length is simply radius times angle.',
        },
        {
          type: 'graph',
          x: [-3.2, 3.2],
          y: [-2.8, 2.8],
          equal: true,
          parametric: [
            { x: 'r*cos(t)', y: 'r*sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 'r*cos(t)', y: 'r*sin(t)', t: [0, 'a'], color: 'orange', label: 'arc $s = r\\theta$' },
          ],
          segments: [
            { from: [0, 0], to: ['r', 0], color: 'blue' },
            { from: [0, 0], to: ['r*cos(a)', 'r*sin(a)'], color: 'blue' },
          ],
          sliders: [
            { name: 'r', min: 0.5, max: 2.6, step: 0.1, value: 2, label: 'radius $r$' },
            { name: 'a', min: 0, max: 6.28, step: 0.01, value: 2, label: 'angle $\\theta$ (rad)' },
          ],
          readouts: [
            { label: '$s = r\\theta =$', expr: 'r*a', digits: 3 },
            { label: 'full circumference $2\\pi r =$', expr: '2pi*r', digits: 3 },
          ],
          caption: 'Double $r$ and the arc doubles; double $\\theta$ and the arc doubles. Arc length is proportional to each.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Convert degrees first',
          text: '$s = r\\theta$ needs $\\theta$ in **radians**. With $r = 10$ and $\\theta = 60^\\circ$, the arc is $10 \\cdot \\frac{\\pi}{3} \\approx 10.47$, not $10 \\cdot 60 = 600$ — longer than the whole circle ($2\\pi \\cdot 10 \\approx 62.8$). If an arc comes out longer than the circumference for an angle under a full turn, you forgot to convert.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A circle has radius $6$ cm. Find the length of the arc cut off by a central angle of $150^\\circ$. Give an exact answer in terms of $\\pi$.',
      hint: 'Convert $150^\\circ$ to radians first: $150 \\cdot \\frac{\\pi}{180}$.',
      label: '$s =$',
      unit: 'cm',
      answer: '5pi',
      answerTex: '5\\pi \\approx 15.71',
      explanation: '$150^\\circ = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}$ rad, so $s = r\\theta = 6 \\cdot \\frac{5\\pi}{6} = 5\\pi \\approx 15.71$ cm. Sanity check: $150^\\circ$ is $\\frac{5}{12}$ of a turn, and $\\frac{5}{12}$ of the circumference $12\\pi$ is $5\\pi$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Using $s = r\\theta$ in both directions',
      blocks: [
        {
          type: 'p',
          text: 'The formula links three quantities, so knowing any two gives the third: $s = r\\theta$, $\\;\\theta = \\frac{s}{r}$, $\\;r = \\frac{s}{\\theta}$. Here is a classic: distances along the Earth\'s surface.',
        },
        {
          type: 'derivation',
          title: 'Two cities on the same meridian, at latitudes $30^\\circ$N and $45^\\circ$N. How far apart are they? (Earth\'s radius $\\approx 3960$ mi.)',
          steps: [
            { tex: '\\theta = 45^\\circ - 30^\\circ = 15^\\circ', why: 'Latitude is an angle measured at Earth\'s centre. Along one meridian, the central angle between the cities is the difference of latitudes.' },
            { tex: '15^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{\\pi}{12}', why: 'Convert to radians so that $s = r\\theta$ applies.' },
            { tex: 's = 3960 \\cdot \\frac{\\pi}{12} = 330\\pi', why: 'Arc length formula. $3960 \\div 12 = 330$.' },
            { tex: '\\approx 1036.7 \\text{ mi}', why: 'Only round at the very end. $330 \\times 3.14159\\ldots \\approx 1036.73$.' },
          ],
          result: 'The cities are about $1037$ miles apart, measured along the surface.',
        },
        {
          type: 'derivation',
          title: 'A windshield wiper blade tip is $8$ in from the pivot and sweeps an arc of $12$ in. Through what angle does it turn?',
          steps: [
            { tex: '\\theta = \\frac{s}{r} = \\frac{12}{8}', why: 'Solve $s = r\\theta$ for $\\theta$ by dividing by $r$. Both lengths are in inches, so the units cancel.' },
            { tex: '= 1.5 \\text{ rad}', why: 'The answer comes out in radians automatically — that is what $\\frac{s}{r}$ means.' },
            { tex: '1.5 \\cdot \\frac{180^\\circ}{\\pi} \\approx 85.9^\\circ', why: 'Convert to degrees if a human-friendly answer is wanted.' },
          ],
          result: 'The wiper turns through $1.5$ rad, just under a right angle.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\frac{s}{r}$ has no units',
          text: 'Both $s$ and $r$ are lengths, so their ratio is a pure number. That is why "$\\theta = 1.5$" needs no unit, and why you must use the **same** length unit for $s$ and $r$. Mixing feet and inches gives a meaningless angle.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rolling without slipping',
          text: 'In a racing or physics game, a wheel of radius $r$ that rolls a distance $d$ along the ground must rotate by $\\theta = \\frac{d}{r}$ radians — every point of the rim touches the ground exactly once. Drive the wheel mesh\'s spin from the car\'s travel distance this way and the tyres never look like they are skidding.',
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A car\'s wheel has radius $0.3$ m. The car rolls forward $1.5$ m without slipping. Through how many radians does the wheel turn?',
      hint: 'The distance rolled equals the arc length of rim that touched the ground: $\\theta = \\frac{s}{r}$.',
      label: '$\\theta =$',
      unit: 'rad',
      answer: '5',
      explanation: 'Rolling without slipping means the arc of the rim that touched the road equals the distance travelled, so $s = 1.5$ m. Then $\\theta = \\frac{s}{r} = \\frac{1.5}{0.3} = 5$ rad, which is about $286.5^\\circ$ — a bit less than one full turn (a full turn would be $2\\pi \\approx 6.28$ rad and move the car $2\\pi(0.3) \\approx 1.88$ m).',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Sector area: $A = \\frac{1}{2}r^2\\theta$',
      blocks: [
        {
          type: 'p',
          text: 'A **sector** is a "pizza slice" of a disk: the region between two radii and the arc joining them. Its area follows from the same proportion argument, using the whole disk\'s area $\\pi r^2$ instead of the circumference.',
        },
        {
          type: 'derivation',
          title: 'Sector area by proportion',
          steps: [
            { tex: '\\frac{A}{\\pi r^2} = \\frac{\\theta}{2\\pi}', why: 'The sector is the same fraction of the disk as $\\theta$ is of a full turn.' },
            { tex: 'A = \\pi r^2 \\cdot \\frac{\\theta}{2\\pi}', why: 'Multiply both sides by $\\pi r^2$.' },
            { tex: 'A = \\frac{1}{2}r^2\\theta', why: 'Cancel $\\pi$: $\\frac{\\pi}{2\\pi} = \\frac{1}{2}$. Again, $\\theta$ must be in radians for this to work.' },
          ],
          result: 'The [[sector-area]] is $A = \\frac{1}{2}r^2\\theta$ (radians).',
        },
        {
          type: 'graph',
          x: [-3.2, 3.2],
          y: [-2.8, 2.8],
          equal: true,
          parametric: [
            { x: 'r*cos(t)', y: 'r*sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 'r*cos(t)', y: 'r*sin(t)', t: [0, 'a'], color: 'orange' },
          ],
          segments: [
            { from: [0, 0], to: ['r', 0], color: 'orange' },
            { from: [0, 0], to: ['r*cos(a)', 'r*sin(a)'], color: 'orange' },
          ],
          sliders: [
            { name: 'r', min: 0.5, max: 2.6, step: 0.1, value: 2, label: 'radius $r$' },
            { name: 'a', min: 0, max: 6.28, step: 0.01, value: 0.8, label: 'angle $\\theta$ (rad)' },
          ],
          readouts: [
            { label: 'sector area $\\frac{1}{2}r^2\\theta =$', expr: '0.5r^2*a', digits: 3 },
            { label: 'fraction of the disk:', expr: 'a/(2pi)', digits: 3 },
          ],
          caption: 'Doubling $\\theta$ doubles the area, but doubling $r$ multiplies it by $4$: area scales with the square of length.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it looks like a triangle\'s area',
          text: 'Cut a sector into many thin slices and each slice is almost a triangle with height $r$ and base a tiny piece of arc. Adding the bases gives the whole arc $s = r\\theta$, so the area is about $\\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} = \\frac{1}{2}(r\\theta)(r)$. That is exactly $\\frac{1}{2}r^2\\theta$ — and it previews the idea of integration in calculus.',
        },
        {
          type: 'derivation',
          title: 'A $14$-inch (diameter) pizza is cut into $8$ equal slices. Area of one slice?',
          steps: [
            { tex: 'r = 7, \\quad \\theta = \\frac{2\\pi}{8} = \\frac{\\pi}{4}', why: 'Pizza sizes are diameters, so halve it. Eight equal slices share the full turn $2\\pi$.' },
            { tex: 'A = \\frac{1}{2}(7)^2 \\cdot \\frac{\\pi}{4}', why: 'Sector area formula.' },
            { tex: '= \\frac{49\\pi}{8} \\approx 19.24 \\text{ in}^2', why: 'Check: the whole pizza is $49\\pi \\approx 153.9$ in², and one eighth of that is the same $\\frac{49\\pi}{8}$.' },
          ],
          result: 'Each slice is about $19.2$ square inches.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Vision cones',
          text: 'Stealth games give guards a vision cone: a sector with radius = sight range and angle = field of view. A player is visible if their distance is under the radius *and* their direction is within half the field of view of the guard\'s facing. The sector area tells a designer how much floor a guard covers — a $90^\\circ$ cone with range $10$ m watches $\\frac{1}{2}(10)^2\\frac{\\pi}{2} = 25\\pi \\approx 78.5$ m².',
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A student finds the area of a sector with radius $10$ and central angle $72^\\circ$. Tap the first line that is wrong.',
      lines: [
        '$A = \\frac{1}{2}r^2\\theta$',
        '$A = \\frac{1}{2}(10)^2(72)$',
        '$A = 50 \\cdot 72$',
        '$A = 3600$',
      ],
      errorLines: [2],
      explanation: 'Line 2 plugs in $72$ degrees, but the formula needs radians. $72^\\circ = \\frac{72\\pi}{180} = \\frac{2\\pi}{5}$, so $A = \\frac{1}{2}(100)\\frac{2\\pi}{5} = 20\\pi \\approx 62.83$. The student\'s $3600$ is more than eleven times the area of the *whole* disk ($100\\pi \\approx 314$) — a quick sign something is off.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Find the area of a sector with radius $9$ m and central angle $\\frac{2\\pi}{3}$. Exact answer in terms of $\\pi$.',
      label: '$A =$',
      unit: 'm²',
      answer: '27pi',
      answerTex: '27\\pi \\approx 84.82',
      hint: '$A = \\frac{1}{2}r^2\\theta$ with $r^2 = 81$.',
      explanation: '$A = \\frac{1}{2}(81)\\left(\\frac{2\\pi}{3}\\right) = \\frac{162\\pi}{6} = 27\\pi \\approx 84.82$ m². Check by proportion: $\\frac{2\\pi}{3}$ is one third of a full turn, and one third of the disk\'s area $81\\pi$ is $27\\pi$.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: 'If you double the radius of a sector and keep its angle the same, its area doubles.',
      answer: false,
      explanation: 'Area depends on $r^2$: $\\frac{1}{2}(2r)^2\\theta = 4 \\cdot \\frac{1}{2}r^2\\theta$. Doubling the radius **quadruples** the area. (The arc length $r\\theta$, by contrast, does just double.) This is the general rule that areas scale with the square of lengths.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Angular speed and linear speed',
      blocks: [
        {
          type: 'p',
          text: 'Now set the circle spinning. Two different "speeds" describe the motion. **Angular speed** says how fast the *angle* changes; **linear speed** says how fast a point actually travels along its circular path.',
        },
        {
          type: 'definition',
          term: 'Angular and linear speed',
          text: 'If a point on a circle of radius $r$ turns through angle $\\theta$ (and so travels arc length $s$) in time $t$, its [[angular-speed]] and [[linear-speed]] are\n\n$$\\omega = \\frac{\\theta}{t}, \\qquad v = \\frac{s}{t}.$$\n\n$\\omega$ (Greek omega) is in radians per unit time, e.g. rad/s.',
        },
        {
          type: 'derivation',
          title: 'Connecting the two',
          steps: [
            { tex: 'v = \\frac{s}{t}', why: 'Definition of linear speed: distance along the path over time.' },
            { tex: '= \\frac{r\\theta}{t}', why: 'Arc length formula $s = r\\theta$ (radians).' },
            { tex: '= r \\cdot \\frac{\\theta}{t} = r\\omega', why: '$r$ is constant, so pull it out; what is left is the definition of $\\omega$.' },
          ],
          result: '$v = r\\omega$: linear speed is radius times angular speed.',
        },
        {
          type: 'graph',
          x: [-2.6, 2.6],
          y: [-2.4, 2.4],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, 'k'], color: 'blue', label: 'inner point, $r = 1$' },
            { x: '2cos(t)', y: '2sin(t)', t: [0, 'k'], color: 'red', label: 'outer point, $r = 2$' },
          ],
          segments: [{ from: [0, 0], to: ['2.2cos(k)', '2.2sin(k)'], color: 'gray', arrow: true }],
          points: [
            { x: 'cos(k)', y: 'sin(k)', color: 'blue' },
            { x: '2cos(k)', y: '2sin(k)', color: 'red' },
          ],
          sliders: [{ name: 'k', min: 0, max: 6.28, step: 0.02, value: 2, label: 'time (s), with $\\omega = 1$ rad/s' }],
          readouts: [
            { label: 'angle turned (both) $=$', expr: 'k', digits: 2 },
            { label: 'inner distance $=$', expr: 'k', digits: 2 },
            { label: 'outer distance $=$', expr: '2k', digits: 2 },
          ],
          caption: 'Both points sit on the same spoke, so they share the same angular speed. The outer point covers twice the distance in the same time: twice the linear speed.',
        },
        {
          type: 'p',
          text: 'Real machines quote revolutions per minute (rpm). One revolution is $2\\pi$ radians, so convert with unit fractions:',
        },
        {
          type: 'derivation',
          title: 'A wheel of radius $0.35$ m spins at $300$ rpm. Find $\\omega$ (rad/s) and the rim\'s linear speed.',
          steps: [
            { tex: '\\omega = 300 \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{2\\pi \\text{ rad}}{1 \\text{ rev}}', why: 'Each revolution is $2\\pi$ radians; revolutions cancel.' },
            { tex: '= 600\\pi \\frac{\\text{rad}}{\\text{min}} \\cdot \\frac{1 \\text{ min}}{60 \\text{ s}} = 10\\pi \\text{ rad/s}', why: 'Divide by $60$ to go from minutes to seconds.' },
            { tex: 'v = r\\omega = 0.35 \\cdot 10\\pi = 3.5\\pi', why: 'Linear speed formula. Radians are dimensionless, so m × rad/s is just m/s.' },
            { tex: '\\approx 11.0 \\text{ m/s}', why: '$3.5\\pi \\approx 10.996$, about $39.6$ km/h.' },
          ],
          result: '$\\omega = 10\\pi \\approx 31.4$ rad/s and $v = 3.5\\pi \\approx 11.0$ m/s.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the edge of a merry-go-round is scarier',
          text: 'Everyone on a rigid spinning object has the same $\\omega$ — they all complete a turn in the same time. But the circle at the edge is longer, so the rider there must cover more distance per turn. $v = r\\omega$ says linear speed grows in direct proportion to distance from the centre.',
        },
        {
          type: 'code',
          title: 'wheel.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <numbers>

double rpmToRadPerSec(double rpm) {
    return rpm * 2.0 * std::numbers::pi / 60.0;
}

int main() {
    const double radius = 0.35;               // metres
    double omega = rpmToRadPerSec(300.0);     // rad/s
    double v = radius * omega;                // m/s
    std::printf("omega = %.4f rad/s\\n", omega);
    std::printf("v     = %.4f m/s\\n", v);
    std::printf("v     = %.2f km/h\\n", v * 3.6);
}`,
          output: `omega = 31.4159 rad/s
v     = 10.9956 m/s
v     = 39.58 km/h`,
          annotations: [
            { lines: '4-6', text: 'rpm × $2\\pi$ (radians per revolution) ÷ $60$ (seconds per minute).' },
            { lines: 11, text: '$v = r\\omega$. In a game, the same line turns a spinning wheel into the distance the vehicle should move per second.' },
          ],
        },
      ],
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A ceiling fan turns at $120$ rpm. The tip of a blade is $0.5$ m from the centre. Find the linear speed of the tip in m/s. Exact answer in terms of $\\pi$, or a decimal to two places.',
      hint: 'First $\\omega = 120 \\cdot 2\\pi \\div 60$ rad/s, then $v = r\\omega$.',
      label: '$v =$',
      unit: 'm/s',
      answer: '2pi',
      answerTex: '2\\pi \\approx 6.28',
      explanation: '$\\omega = 120 \\cdot \\frac{2\\pi}{60} = 4\\pi$ rad/s (two revolutions per second). Then $v = r\\omega = 0.5 \\cdot 4\\pi = 2\\pi \\approx 6.28$ m/s. Cross-check: each second the tip travels two circumferences of $2\\pi(0.5) = \\pi$ m, so $2\\pi$ m per second.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'Points $P$ and $Q$ are on a spinning disc. $P$ is $1$ cm from the centre and $Q$ is $3$ cm from the centre. Which statement is true?',
      options: [
        { text: '$Q$ has $3$ times the angular speed of $P$', why: 'The disc is rigid: every point turns through the same angle in the same time, so angular speeds are equal.' },
        { text: 'They have the same angular speed, and $Q$ has $3$ times the linear speed', correct: true, why: 'Same $\\omega$ for the whole disc; $v = r\\omega$ makes $Q$\'s linear speed $3\\omega$ versus $P$\'s $\\omega$.' },
        { text: 'They have the same linear speed, and $P$ has $3$ times the angular speed', why: 'This describes two wheels joined by a belt, not two points on one disc.' },
        { text: 'They have the same angular speed and the same linear speed', why: 'Equal $\\omega$, yes, but $v = r\\omega$ depends on $r$. $Q$ travels a circle three times as long in the same time.' },
      ],
      explanation: 'On one rigid rotating object, angle is shared, so $\\omega$ is shared. Distance is not: in one turn $P$ travels $2\\pi(1)$ cm while $Q$ travels $2\\pi(3)$ cm. Hence $v_Q = 3v_P$, exactly what $v = r\\omega$ predicts.',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Belts, chains and gears',
      blocks: [
        {
          type: 'p',
          text: 'When two wheels are linked by a belt or chain (or two gears mesh), the linking material moves at a single speed. Every bit of belt touching wheel 1 moves with that wheel\'s rim, and the same for wheel 2. So the two **rims share a linear speed**, even though the wheels spin at different rates:',
        },
        {
          type: 'theorem',
          name: 'Linked wheels',
          tex: 'r_1\\omega_1 = r_2\\omega_2 \\quad\\implies\\quad \\omega_2 = \\frac{r_1}{r_2}\\,\\omega_1',
          text: 'The smaller wheel spins faster, in proportion to the ratio of radii.',
        },
        {
          type: 'derivation',
          title: 'Bicycle: pedal sprocket radius $10$ cm, rear sprocket radius $4$ cm, rear wheel radius $33$ cm. Pedalling at $60$ rpm, how fast is the bike going?',
          steps: [
            { tex: '\\omega_{\\text{pedal}} = 60 \\cdot \\frac{2\\pi}{60} = 2\\pi \\text{ rad/s}', why: 'Convert rpm to rad/s: one revolution per second.' },
            { tex: 'v_{\\text{chain}} = 10 \\cdot 2\\pi = 20\\pi \\text{ cm/s}', why: 'The chain moves with the rim of the front sprocket: $v = r\\omega$.' },
            { tex: '\\omega_{\\text{rear}} = \\frac{20\\pi}{4} = 5\\pi \\text{ rad/s}', why: 'Same chain speed at the rear sprocket, so $\\omega = \\frac{v}{r}$. That is $2.5$ revolutions per second ($150$ rpm).' },
            { tex: 'v_{\\text{bike}} = 33 \\cdot 5\\pi = 165\\pi \\text{ cm/s}', why: 'The rear sprocket and the rear wheel are bolted together, so they share $\\omega$. The tyre rolls without slipping, so the bike moves at the tyre\'s rim speed.' },
            { tex: '\\approx 518 \\text{ cm/s} \\approx 5.18 \\text{ m/s}', why: '$165\\pi \\approx 518.36$; about $18.7$ km/h.' },
          ],
          result: 'Shared linear speed across the chain, shared angular speed across the axle: the bike rides at about $5.2$ m/s.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Two rules to keep straight',
          text: '**Same axle → same $\\omega$.** **Same belt, chain or meshing teeth → same $v$.** Almost every gear problem is a chain of these two facts, with $v = r\\omega$ to switch between them.',
        },
      ],
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A motor pulley of radius $3$ cm turns at $1800$ rpm and drives, by a belt, a pulley of radius $9$ cm. How many rpm does the larger pulley turn?',
      hint: 'Belt → equal rim speeds: $r_1\\omega_1 = r_2\\omega_2$. You can keep $\\omega$ in rpm since both sides use the same units.',
      label: '$\\omega_2 =$',
      unit: 'rpm',
      answer: '600',
      explanation: 'The belt gives both rims the same linear speed, so $3 \\cdot 1800 = 9 \\cdot \\omega_2$, and $\\omega_2 = \\frac{5400}{9} = 600$ rpm. The pulley three times as large turns one third as fast. (No need to convert to rad/s: the conversion factor would appear on both sides and cancel.)',
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'order',
      prompt: 'Put the steps in order to find the linear speed (m/s) of a point $r$ metres from the centre of a wheel turning at $N$ rpm.',
      lines: [
        'Multiply $N$ by $2\\pi$ to get radians per minute',
        'Divide by $60$ to get radians per second',
        'Multiply by $r$ to get the linear speed $v = r\\omega$',
        'Attach the units: metres per second',
      ],
      distractors: ['Multiply $N$ by $360$ to get radians per minute'],
      explanation: 'rpm counts revolutions, and each revolution is $2\\pi$ radians, not $360$ — multiplying by $360$ gives *degrees* per minute, and $v = r\\omega$ only works with radians. Then convert minutes to seconds and apply $v = r\\omega$: altogether $v = \\frac{2\\pi N r}{60}$ m/s.',
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Complete the three formulas of this lesson (all with $\\theta$ in radians).',
      template: 'Arc length: $s =$ ___. Sector area: $A =$ ___. Linear speed: $v =$ ___.',
      blanks: [{ answers: ['$r\\theta$'] }, { answers: ['$\\frac{1}{2}r^2\\theta$'] }, { answers: ['$r\\omega$'] }],
      wordBank: ['$r\\theta$', '$\\frac{1}{2}r^2\\theta$', '$r\\omega$', '$\\pi r^2\\theta$', '$\\frac{\\omega}{r}$', '$2\\pi r\\theta$'],
      explanation: 'All three come from the same idea: a fraction $\\frac{\\theta}{2\\pi}$ of a full turn gets that fraction of the circumference ($s = r\\theta$) or of the disk area ($A = \\frac{1}{2}r^2\\theta$). Dividing $s = r\\theta$ by time gives $v = r\\omega$. The distractor $2\\pi r\\theta$ is what you get if you forget to divide by $2\\pi$ in the proportion.',
    },
  ],
  takeaways: [
    'With $\\theta$ in radians, arc length is $s = r\\theta$ and sector area is $A = \\frac{1}{2}r^2\\theta$; convert degrees first.',
    'Both formulas come from proportion: the arc or sector is the fraction $\\frac{\\theta}{2\\pi}$ of the whole circle.',
    'Angular speed $\\omega = \\frac{\\theta}{t}$ and linear speed $v = \\frac{s}{t}$ are linked by $v = r\\omega$.',
    'Convert rpm to rad/s by multiplying by $2\\pi$ and dividing by $60$.',
    'Points on one rigid body share $\\omega$; wheels linked by a belt or chain share rim speed $v$.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.1 Angles',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-1-angles',
      source: 'openstax',
      note: 'The second half of the section covers arc length, sector area and angular and linear speed with worked examples.',
    },
    {
      title: 'Wikipedia — Circular sector',
      url: 'https://en.wikipedia.org/wiki/Circular_sector',
      source: 'wikipedia',
      note: 'Formulas for sector area, arc length and chord length in one place.',
    },
    {
      title: 'Wikipedia — Angular velocity',
      url: 'https://en.wikipedia.org/wiki/Angular_velocity',
      source: 'wikipedia',
      note: 'Where angular speed goes next: vectors, physics and rotating reference frames.',
    },
  ],
};
