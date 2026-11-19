import type { Lesson } from '../../types';

const SVG_AXES = /*SVG:c3-u01/c3w1-axes*/ `<svg viewBox="0 0 470 330" xmlns="http://www.w3.org/2000/svg">
<line x1="230.0" y1="205.0" x2="258.3" y2="185.8" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="230.0" y1="205.0" x2="173.0" y2="205.0" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="230.0" y1="205.0" x2="230.0" y2="224.0" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="230.0" y1="205.0" x2="126.1" y2="275.4" stroke="currentColor" stroke-width="1.8"/><path d="M121.6,278.4 L126.5,270.9 L130.5,276.7 Z" fill="currentColor" stroke="none"/>
<line x1="230.0" y1="205.0" x2="437.4" y2="205.0" stroke="currentColor" stroke-width="1.8"/><path d="M442.8,205.0 L434.5,208.5 L434.5,201.5 Z" fill="currentColor" stroke="none"/>
<line x1="230.0" y1="205.0" x2="230.0" y2="50.8" stroke="currentColor" stroke-width="1.8"/><path d="M230.0,45.4 L233.5,53.7 L226.5,53.7 Z" fill="currentColor" stroke="none"/>
<text x="113.4" y="284.0" font-size="17" text-anchor="middle" font-style="italic">x</text>
<text x="456.1" y="210.0" font-size="17" text-anchor="start" font-style="italic">y</text>
<text x="240.0" y="51.4" font-size="17" text-anchor="start" font-style="italic">z</text>
<polygon points="230.0,205.0 159.3,252.9 311.3,252.9 382.0,205.0" fill="currentColor" fill-opacity="0.1" stroke="none" class="f-blue"/>
<line x1="311.3" y1="138.9" x2="311.3" y2="252.9" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="311.3" y1="252.9" x2="159.3" y2="252.9" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="311.3" y1="252.9" x2="382.0" y2="205.0" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="311.3" y1="138.9" x2="230.0" y2="91.0" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="311.3" y1="138.9" x2="159.3" y2="138.9" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="311.3" y1="138.9" x2="382.0" y2="91.0" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="159.3" y1="138.9" x2="159.3" y2="252.9" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="382.0" y1="91.0" x2="382.0" y2="205.0" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="159.3" y1="138.9" x2="230.0" y2="91.0" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="382.0" y1="91.0" x2="230.0" y2="91.0" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/>
<circle cx="311.3" cy="138.9" r="5" fill="currentColor" class="f-red"/>
<text x="323.3" y="158.9" font-size="16" text-anchor="start" class="t-red">P(a, b, c)</text>
<circle cx="311.3" cy="252.9" r="3.5" fill="currentColor" class="f-blue"/>
<text x="319.3" y="270.9" font-size="14" text-anchor="start" class="t-blue">(a, b, 0)</text>
<text x="151.3" y="256.9" font-size="15" text-anchor="end" font-style="italic">a</text>
<text x="382.0" y="223.0" font-size="15" text-anchor="middle" font-style="italic">b</text>
<text x="221.0" y="96.0" font-size="15" text-anchor="end" font-style="italic">c</text>
<text x="222.0" y="223.0" font-size="14" text-anchor="end">O</text>
<polyline points="205.6,61.3 204.8,62.2 204.3,63.1 204.0,64.1 204.1,65.0 204.4,66.0 205.0,66.9 205.9,67.8 207.0,68.6 208.4,69.4 210.1,70.2 211.9,70.9 214.0,71.5 216.2,72.0 218.6,72.5 221.1,72.9 223.7,73.1 226.4,73.3 229.1,73.4 231.8,73.4 234.5,73.3 237.2,73.1 239.7,72.7 242.2,72.3 244.5,71.9 246.7,71.3 248.7,70.7 250.5,69.9 252.0,69.2 253.4,68.3 254.4,67.5 255.2,66.6 255.7,65.7 256.0,64.7 255.9,63.8 255.6,62.8 255.0,61.9 254.1,61.0 253.0,60.2 251.6,59.4" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/>
<path d="M249.9,58.6 L258.9,59.3 L255.7,65.5 Z" fill="currentColor" stroke="none" class="f-orange"/>
<text x="264.0" y="56.4" font-size="13" text-anchor="start" class="t-orange">x → y, thumb along +z</text>
<text x="304.5" y="232.9" font-size="13" text-anchor="middle" class="t-blue">xy-plane</text>
</svg>`;
const SVG_DISTANCE = /*SVG:c3-u01/c3w1-distance*/ `<svg viewBox="0 0 470 275" xmlns="http://www.w3.org/2000/svg">
<line x1="190.0" y1="200.0" x2="128.7" y2="241.5" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="190.0" y1="200.0" x2="387.6" y2="200.0" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="190.0" y1="200.0" x2="190.0" y2="63.2" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="190.0" y1="63.2" x2="128.7" y2="104.7" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="190.0" y1="63.2" x2="387.6" y2="63.2" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="387.6" y1="200.0" x2="326.3" y2="241.5" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="387.6" y1="200.0" x2="387.6" y2="63.2" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="387.6" y1="63.2" x2="326.3" y2="104.7" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="128.7" y1="241.5" x2="326.3" y2="241.5" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="128.7" y1="241.5" x2="128.7" y2="104.7" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="128.7" y1="104.7" x2="326.3" y2="104.7" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<line x1="326.3" y1="241.5" x2="326.3" y2="104.7" stroke="currentColor" class="s-gray" stroke-width="1.1" stroke-dasharray="5 4"/>
<polygon points="190.0,200.0 128.7,241.5 326.3,241.5 387.6,200.0" fill="currentColor" fill-opacity="0.08" stroke="none" class="f-blue"/>
<line x1="128.7" y1="241.5" x2="326.3" y2="241.5" stroke="currentColor" class="s-blue" stroke-width="2.4"/>
<line x1="326.3" y1="241.5" x2="387.6" y2="200.0" stroke="currentColor" class="s-blue" stroke-width="2.4"/>
<line x1="128.7" y1="241.5" x2="387.6" y2="200.0" stroke="currentColor" class="s-green" stroke-width="2.6"/>
<line x1="387.6" y1="200.0" x2="387.6" y2="63.2" stroke="currentColor" class="s-purple" stroke-width="2.6"/>
<line x1="128.7" y1="241.5" x2="387.6" y2="63.2" stroke="currentColor" class="s-red" stroke-width="3"/>
<polyline points="314.9,241.5 322.0,236.7 333.4,236.7" fill="none" stroke="currentColor" stroke-width="1.3"/>
<polyline points="387.6,184.8 369.8,187.7 369.8,202.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
<circle cx="128.7" cy="241.5" r="5" fill="currentColor" class="f-red"/>
<text x="124.7" y="263.5" font-size="15" text-anchor="middle" class="t-red">P₁(x₁, y₁, z₁)</text>
<circle cx="387.6" cy="63.2" r="5" fill="currentColor" class="f-red"/>
<text x="389.6" y="51.2" font-size="15" text-anchor="middle" class="t-red">P₂(x₂, y₂, z₂)</text>
<text x="227.5" y="261.5" font-size="14" text-anchor="middle" class="t-blue">|y₂ − y₁|</text>
<text x="369.0" y="234.7" font-size="14" text-anchor="start" class="t-blue">|x₂ − x₁|</text>
<text x="397.6" y="136.6" font-size="14" text-anchor="start" class="t-purple">|z₂ − z₁|</text>
<text x="288.2" y="210.7" font-size="14" text-anchor="middle" class="t-green">√(Δx² + Δy²)</text>
<text x="252.2" y="142.3" font-size="19" text-anchor="end" class="t-red" font-style="italic">d</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-3d-coordinates',
  title: 'Three-Dimensional Coordinates',
  summary: 'Points in space, the right-handed system, the 3D distance formula, spheres, and solid regions described by inequalities — plus the axis conventions game engines argue about.',
  minutes: 17,
  objectives: [
    'Plot points in a right-handed $xyz$-system and name the coordinate planes and octants',
    'Recognise that one equation in $x, y, z$ describes a surface and two equations usually describe a curve',
    'Derive and use the distance formula and midpoint formula in three dimensions',
    'Find the center and radius of a sphere by completing the square',
    'Describe solid regions (balls, shells, slabs, cylinders) with inequalities and test points against them',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Three axes and the right-hand rule',
      blocks: [
        {
          type: 'p',
          text: 'In the plane, two perpendicular number lines give every point an address $(x, y)$. Space needs a third: draw the $z$-axis through the origin, perpendicular to both the $x$- and $y$-axes. A point is now an ordered triple $(a, b, c)$: walk $a$ units along $x$, $b$ units parallel to $y$, then climb $c$ units parallel to $z$.',
        },
        {
          type: 'p',
          text: 'There are two mirror-image ways to attach the $z$-axis, and mathematics always uses the **right-handed** one: curl the fingers of your right hand from the positive $x$-axis toward the positive $y$-axis, and your thumb points along the positive $z$-axis. This is the [[right-hand-rule]], and it will fix the direction of every cross product and every surface orientation in this course.',
        },
        {
          type: 'figure',
          svg: SVG_AXES,
          alt: 'A right-handed coordinate system: x-axis toward the viewer, y-axis to the right, z-axis up. A point P(a, b, c) is shown as the far corner of a dashed box whose base lies in the xy-plane with corner (a, b, 0). A curved arrow around the z-axis turns from x toward y.',
          caption: 'The point $P(a, b, c)$ is the far corner of a box with edges $a$, $b$, $c$. Dropping straight down to the $xy$-plane gives its **projection** $(a, b, 0)$.',
          maxWidth: 470,
        },
        {
          type: 'p',
          text: 'The axes pair up into three **coordinate planes**: the $xy$-plane ($z = 0$), the $yz$-plane ($x = 0$) and the $xz$-plane ($y = 0$). They chop space into eight [[calc3-octant|octants]]. The **first octant** is where all three coordinates are positive; the others are named by their signs.',
        },
        {
          type: 'plot3d',
          x: [-3.2, 3.2],
          y: [-3.2, 3.2],
          z: [-3.2, 3.2],
          equal: true,
          curves: [
            { x: 'a', y: 'b', z: 'c*t', t: [0, 1], color: 'gray', dashed: true },
            { x: 'a', y: 'b*t', z: '0', t: [0, 1], color: 'gray', dashed: true },
            { x: 'a*t', y: 'b', z: '0', t: [0, 1], color: 'gray', dashed: true },
            { x: 'a*t', y: 'b*t', z: 'c*t', t: [0, 1], color: 'red' },
          ],
          points: [
            { x: 'a', y: 'b', z: 'c', label: 'P', color: 'red' },
            { x: 'a', y: 'b', z: 0, label: 'shadow', color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.5, value: 2, label: '$a$ ($x$-coordinate)' },
            { name: 'b', min: -3, max: 3, step: 0.5, value: 3, label: '$b$ ($y$-coordinate)' },
            { name: 'c', min: -3, max: 3, step: 0.5, value: 2, label: '$c$ ($z$-coordinate)' },
          ],
          readouts: [{ label: 'distance from the origin $\\sqrt{a^2 + b^2 + c^2} =$', expr: 'sqrt(a^2 + b^2 + c^2)' }],
          view: { azimuth: 35, elevation: 22 },
          caption: 'Move $P$ with the sliders and drag the box to turn it. The dashed path walks $a$ along $x$, then $b$ along $y$, then $c$ up; the blue "shadow" is the projection $(a, b, 0)$. Make $c$ negative and $P$ drops below the $xy$-plane; make $a$ negative and it moves behind the $yz$-plane.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why insist on right-handed?',
          text: 'A left-handed system is a mirror image of a right-handed one, and mirrors reverse "clockwise". Every formula that has a built-in sense of rotation — the cross product, torque, curl, the orientation in Stokes\' theorem — would flip sign. Fixing one handedness once means every one of those formulas has one meaning. Rotating a right-handed system never makes it left-handed; only a reflection can.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'What is the projection of the point $(3, -2, 5)$ onto the $xz$-plane?',
      options: [
        { text: '$(3, -2, 0)$', why: 'That sets $z = 0$, which is the projection onto the $xy$-plane.' },
        { text: '$(0, -2, 5)$', why: 'That sets $x = 0$: the projection onto the $yz$-plane.' },
        { text: '$(3, 0, 5)$', correct: true, why: 'The $xz$-plane is $y = 0$. Projecting straight onto it keeps $x$ and $z$ and zeroes $y$.' },
        { text: '$(3, 5)$', why: 'The projection is still a point of space, so it keeps three coordinates; in the $xz$-plane the middle one is $0$.' },
      ],
      explanation: 'Each coordinate plane is named by the two coordinates that vary in it, and the third is zero there: the $xz$-plane is $y = 0$. To project, move the point parallel to the missing axis (here the $y$-axis) until it hits the plane, which just replaces $y$ by $0$: $(3, 0, 5)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'One equation, a surface; two equations, a curve',
      blocks: [
        {
          type: 'p',
          text: 'In the plane, the equation $x = 2$ is a vertical line. In space the same equation says nothing about $y$ or $z$, so they are free: every point $(2, y, z)$ qualifies. That is a whole **plane**, parallel to the $yz$-plane. The rule of thumb: each independent equation removes one degree of freedom from the three you start with.',
        },
        {
          type: 'table',
          headers: ['Equation(s)', 'In $\\mathbb{R}^2$', 'In $\\mathbb{R}^3$'],
          rows: [
            ['$x = 2$', 'vertical line', 'plane parallel to the $yz$-plane'],
            ['$y = x$', 'line through the origin', 'vertical plane containing the $z$-axis'],
            ['$x^2 + y^2 = 1$', 'circle', 'circular cylinder around the $z$-axis'],
            ['$z = 3$ and $y = 1$', '—', 'a line parallel to the $x$-axis'],
            ['$x^2 + y^2 = 1$ and $z = 3$', '—', 'a circle of radius $1$ at height $3$'],
          ],
          caption: 'A missing variable is free to take any value, so the 2D picture is extruded along that axis.',
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [-3, 3],
          equal: true,
          surfaces: [{ expr: 'k', label: '$z = k$', color: 'blue', opacity: 0.55 }],
          parametricSurfaces: [{ x: 'h', y: 'u', z: 'v', u: [-3, 3], v: [-3, 3], label: '$x = h$', color: 'orange', opacity: 0.55 }],
          curves: [{ x: 'h', y: 't', z: 'k', t: [-3, 3], color: 'red', label: 'both: a line' }],
          sliders: [
            { name: 'h', min: -2.5, max: 2.5, step: 0.25, value: 1, label: '$h$' },
            { name: 'k', min: -2.5, max: 2.5, step: 0.25, value: 1.5, label: '$k$' },
          ],
          resolution: 12,
          view: { azimuth: 30, elevation: 20 },
          caption: 'The equation $z = k$ alone is a horizontal plane; $x = h$ alone is a vertical plane. Points satisfying **both** form their line of intersection $\\{(h, y, k)\\}$, where $y$ is still free.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Always ask "in which space?"',
          text: 'Whether $y = 2x + 1$ is a line or a plane depends on whether you are in $\\mathbb{R}^2$ or $\\mathbb{R}^3$. Exams love this. When a problem says "describe the set in $\\mathbb{R}^3$", any variable that does not appear is unrestricted.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'In $\\mathbb{R}^3$, the equation $y = 2$ describes a line.',
      answer: false,
      explanation: 'In $\\mathbb{R}^3$, $y = 2$ leaves $x$ and $z$ completely free, so it is the set of all points $(x, 2, z)$: a plane parallel to the $xz$-plane, two units to the right of it. It would be a (horizontal) line only in the $xy$-plane. To get a line in space you need two independent equations, such as $y = 2$ and $z = 0$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Distance in space: Pythagoras twice',
      blocks: [
        {
          type: 'p',
          text: 'The [[distance-formula]] in the plane is Pythagoras: $d = \\sqrt{\\Delta x^2 + \\Delta y^2}$. In space, build a box with $P_1$ and $P_2$ at opposite corners. The floor diagonal is a hypotenuse in the horizontal plane, and the segment $P_1P_2$ is the hypotenuse of a vertical right triangle standing on that diagonal.',
        },
        {
          type: 'figure',
          svg: SVG_DISTANCE,
          alt: 'A box with P1 at the front bottom corner and P2 at the opposite top corner. The floor diagonal of length root of delta x squared plus delta y squared, the vertical edge of length absolute z2 minus z1, and the space diagonal d form a right triangle.',
          caption: 'First right triangle (floor): legs $|\\Delta x|$, $|\\Delta y|$. Second (vertical): legs the floor diagonal and $|\\Delta z|$.',
          maxWidth: 470,
        },
        {
          type: 'theorem',
          name: 'Distance and midpoint in $\\mathbb{R}^3$',
          tex: '|P_1P_2| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}, \\qquad M = \\left(\\tfrac{x_1 + x_2}{2},\\ \\tfrac{y_1 + y_2}{2},\\ \\tfrac{z_1 + z_2}{2}\\right)',
          text: 'The [[midpoint-formula]] averages each coordinate, exactly as in the plane.',
        },
        {
          type: 'derivation',
          title: 'Distance from $P_1(1, -2, 3)$ to $P_2(4, 2, 15)$',
          steps: [
            { tex: '\\Delta x = 4 - 1 = 3,\\quad \\Delta y = 2 - (-2) = 4,\\quad \\Delta z = 15 - 3 = 12', why: 'Subtract coordinate by coordinate. Watch the double negative in $\\Delta y$.' },
            { tex: '\\text{floor diagonal} = \\sqrt{3^2 + 4^2} = 5', why: 'First right triangle, in the horizontal plane through $P_1$.' },
            { tex: '|P_1P_2| = \\sqrt{5^2 + 12^2} = \\sqrt{169}', why: 'Second right triangle: legs are the floor diagonal and the height difference. Note $5^2 = 3^2 + 4^2$, so this is $\\sqrt{3^2 + 4^2 + 12^2}$.' },
            { tex: '= 13', why: 'A Pythagorean triple stacked on a Pythagorean triple.' },
          ],
          result: 'The points are $13$ units apart, and the midpoint of the segment is $\\left(\\frac{5}{2}, 0, 9\\right)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Skip the square root',
          text: 'Games run proximity checks (trigger volumes, aggro radius, mine fuses) thousands of times per frame. Since $d \\le R \\iff d^2 \\le R^2$ for nonnegative numbers, engines compare **squared** distances and never call `sqrt`. Unreal has `FVector::DistSquared`, Unity has `sqrMagnitude`.',
        },
        {
          type: 'code',
          title: 'proximity.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };

double dist2(Vec3 a, Vec3 b) {
    double dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    return dx * dx + dy * dy + dz * dz;
}

int main() {
    const Vec3 player{3, 1, -2};
    const Vec3 mines[] = {{5, -5, 1}, {4, 2, 0}, {-3, 1, 6}};
    const double radius = 7.0;
    for (const Vec3& m : mines) {
        double d2 = dist2(player, m);
        bool hit = d2 <= radius * radius;  // compare squares: no sqrt
        std::printf("mine (%g, %g, %g): d = %.4f -> %s\\n",
                    m.x, m.y, m.z, std::sqrt(d2), hit ? "TRIGGERED" : "safe");
    }
}`,
          output: `mine (5, -5, 1): d = 7.0000 -> TRIGGERED
mine (4, 2, 0): d = 2.4495 -> TRIGGERED
mine (-3, 1, 6): d = 10.0000 -> safe`,
          annotations: [
            { lines: '6-9', text: 'The squared 3D distance: $\\Delta x^2 + \\Delta y^2 + \\Delta z^2$.' },
            { lines: 17, text: '$d^2 \\le R^2$ is the same test as $d \\le R$, minus the expensive square root. The first mine sits exactly on the boundary sphere.' },
            { lines: 19, text: 'The square root is taken only for printing.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Find the distance between $A(-1, 4, 2)$ and $B(3, -4, 3)$.',
      hint: 'Differences: $\\Delta x = 4$, $\\Delta y = -8$, $\\Delta z = 1$.',
      label: '$|AB| =$',
      answer: '9',
      explanation: '$|AB| = \\sqrt{4^2 + (-8)^2 + 1^2} = \\sqrt{16 + 64 + 1} = \\sqrt{81} = 9$. Squaring makes the sign of each difference irrelevant, so it does not matter which point you subtract from which.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Spheres',
      blocks: [
        {
          type: 'p',
          text: 'A sphere is everything at a fixed distance $r$ from a center $C(h, k, l)$. Write "distance from $(x, y, z)$ to $C$ equals $r$" with the distance formula and square both sides (both are nonnegative, so nothing is lost):',
        },
        {
          type: 'definition',
          term: 'Sphere',
          text: 'The sphere with center $(h, k, l)$ and radius $r > 0$ is\n\n$$(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2.$$\n\nThis is the [[calc3-sphere-equation|standard equation of a sphere]]. Centered at the origin it is $x^2 + y^2 + z^2 = r^2$.',
        },
        {
          type: 'plot3d',
          x: [-4.5, 4.5],
          y: [-4.5, 4.5],
          z: [-4.5, 4.5],
          equal: true,
          parametricSurfaces: [{ x: 'h + r*cos(u)*sin(v)', y: 'k + r*sin(u)*sin(v)', z: 'l + r*cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'teal', opacity: 0.7 }],
          points: [{ x: 'h', y: 'k', z: 'l', label: 'C', color: 'red' }],
          vectors: [{ from: ['h', 'k', 'l'], to: ['h', 'k', 'l + r'], color: 'red' }],
          sliders: [
            { name: 'h', min: -2, max: 2, step: 0.5, value: 1, label: '$h$' },
            { name: 'k', min: -2, max: 2, step: 0.5, value: -1, label: '$k$' },
            { name: 'l', min: -2, max: 2, step: 0.5, value: 0.5, label: '$l$' },
            { name: 'r', min: 0.5, max: 2.5, step: 0.1, value: 2, label: 'radius $r$' },
          ],
          resolution: 24,
          view: { azimuth: 30, elevation: 20 },
          caption: 'The sphere $(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2$, with a radius drawn from the center $C$. The sliders move the center and change the radius; the shape never changes, only where it sits and how big it is.',
        },
        {
          type: 'p',
          text: 'Equations often arrive **expanded**, like $x^2 + y^2 + z^2 - 4x + 6y - 2z - 2 = 0$. Undo the expansion by completing the square in each variable — the same move that turns a circle\'s expanded equation into center–radius form.',
        },
        {
          type: 'derivation',
          title: 'Center and radius of $x^2 + y^2 + z^2 - 4x + 6y - 2z - 2 = 0$',
          steps: [
            { tex: '(x^2 - 4x) + (y^2 + 6y) + (z^2 - 2z) = 2', why: 'Group each variable\'s terms and move the constant to the right.' },
            { tex: '(x^2 - 4x + 4) + (y^2 + 6y + 9) + (z^2 - 2z + 1) = 2 + 4 + 9 + 1', why: 'Add $\\left(\\frac{b}{2}\\right)^2$ for each linear coefficient $b$: $4$, $9$ and $1$. Whatever you add on the left must also be added on the right.' },
            { tex: '(x - 2)^2 + (y + 3)^2 + (z - 1)^2 = 16', why: 'Each group is now a perfect square; $2 + 4 + 9 + 1 = 16$.' },
            { tex: 'C = (2, -3, 1),\\quad r = \\sqrt{16} = 4', why: 'Read off the center with the signs flipped (since $y + 3 = y - (-3)$) and take the square root of the right side.' },
          ],
          result: 'A sphere of radius $4$ centered at $(2, -3, 1)$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Not every such equation is a sphere',
          text: 'After completing the square you get $(\\dots)^2 + (\\dots)^2 + (\\dots)^2 = R$. If $R > 0$ it is a sphere of radius $\\sqrt{R}$. If $R = 0$ the only solution is the center itself (a single point). If $R < 0$ there are **no** points: a sum of squares cannot be negative.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find the radius of the sphere $x^2 + y^2 + z^2 - 6x + 4z + 4 = 0$.',
      hint: 'Complete the square in $x$ and in $z$; there is no linear $y$ term, so $y^2$ is already a perfect square.',
      label: '$r =$',
      answer: '3',
      explanation: '$(x^2 - 6x + 9) + y^2 + (z^2 + 4z + 4) = -4 + 9 + 4$, so $(x - 3)^2 + y^2 + (z + 2)^2 = 9$. The center is $(3, 0, -2)$ and the radius is $\\sqrt{9} = 3$. A common slip is to forget that the constant $+4$ moves to the right as $-4$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student finds the center and radius of $x^2 + y^2 + z^2 + 2x - 8y + 6z + 1 = 0$. Tap the first line that is wrong.',
      lines: [
        '$(x^2 + 2x) + (y^2 - 8y) + (z^2 + 6z) = -1$',
        '$(x^2 + 2x + 1) + (y^2 - 8y + 16) + (z^2 + 6z + 9) = -1 + 1 + 16$',
        '$(x + 1)^2 + (y - 4)^2 + (z + 3)^2 = 16$',
        'Center $(-1, 4, -3)$, radius $4$',
      ],
      errorLines: [2],
      explanation: 'Line 2 adds $1$, $16$ and $9$ on the left but only $1$ and $16$ on the right — the $9$ that completed the $z$-square is missing. The right side should be $-1 + 1 + 16 + 9 = 25$, giving $(x + 1)^2 + (y - 4)^2 + (z + 3)^2 = 25$: center $(-1, 4, -3)$ and radius $5$. The center happened to come out right, which is exactly why this mistake survives so often.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Put the steps for finding the center and radius of $x^2 + y^2 + z^2 + Dx + Ey + Fz + G = 0$ in order.',
      lines: [
        'Group the $x$, $y$ and $z$ terms and move the constant $G$ to the right side',
        'Complete the square in each variable, adding the same amounts to the right side',
        'Rewrite the left side as $(x - h)^2 + (y - k)^2 + (z - l)^2$ and simplify the right side to a number $R$',
        'If $R > 0$, the center is $(h, k, l)$ and the radius is $\\sqrt{R}$',
      ],
      distractors: ['Take the square root of each squared term separately'],
      explanation: 'Grouping first makes room to complete each square; balancing the right side is what keeps the equation true; only once it is in standard form can you read the center (signs flipped) and radius. The distractor is a classic algebra error: $\\sqrt{a^2 + b^2 + c^2} \\ne a + b + c$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Regions described by inequalities',
      blocks: [
        {
          type: 'p',
          text: 'Replace "$=$" by "$\\le$" and a surface becomes a **solid**. The inequality $x^2 + y^2 + z^2 \\le 9$ is the solid ball of radius $3$; $z \\ge 0$ is the upper half-space; $1 \\le z \\le 4$ is a slab between two horizontal planes. Combining inequalities with "and" intersects the regions.',
        },
        {
          type: 'table',
          headers: ['Inequalities', 'Region'],
          rows: [
            ['$x^2 + y^2 + z^2 < 4$', 'open ball of radius $2$ (boundary sphere excluded)'],
            ['$1 \\le x^2 + y^2 + z^2 \\le 4$', 'spherical shell between radii $1$ and $2$'],
            ['$x^2 + y^2 \\le 4,\\ 0 \\le z \\le 5$', 'solid cylinder of radius $2$, height $5$'],
            ['$0 \\le x \\le 2,\\ 0 \\le y \\le 3,\\ 0 \\le z \\le 1$', 'a rectangular box'],
            ['$x > 0,\\ y > 0,\\ z > 0$', 'the first octant'],
          ],
        },
        {
          type: 'derivation',
          title: 'Describe: the upper half of the shell between the spheres of radius $a$ and $2$ about the origin',
          steps: [
            { tex: 'a^2 \\le x^2 + y^2 + z^2', why: 'Outside (or on) the inner sphere: distance from the origin is at least $a$. Squaring is safe because distances are nonnegative.' },
            { tex: 'x^2 + y^2 + z^2 \\le 4', why: 'Inside (or on) the outer sphere of radius $2$.' },
            { tex: 'z \\ge 0', why: '"Upper half" means on or above the $xy$-plane.' },
          ],
          result: 'The region is $a^2 \\le x^2 + y^2 + z^2 \\le 4$ with $z \\ge 0$: a thick hemispherical dome. You will integrate over exactly such regions in Unit 9.',
        },
        {
          type: 'plot3d',
          x: [-2.2, 2.2],
          y: [-2.2, 2.2],
          z: [-0.5, 2.2],
          equal: true,
          parametricSurfaces: [
            { x: '2cos(u)sin(v)', y: '2sin(u)sin(v)', z: '2cos(v)', u: [0, '2pi'], v: [0, 'pi/2'], color: 'blue', opacity: 0.35, label: 'outer: $\\rho = 2$' },
            { x: 'a*cos(u)sin(v)', y: 'a*sin(u)sin(v)', z: 'a*cos(v)', u: [0, '2pi'], v: [0, 'pi/2'], color: 'orange', opacity: 0.85, label: 'inner sphere' },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '0', u: ['a', 2], v: [0, '2pi'], color: 'teal', opacity: 0.7, label: 'floor ring, $z = 0$' },
          ],
          sliders: [{ name: 'a', min: 0.3, max: 1.8, step: 0.1, value: 1, label: 'inner radius $a$' }],
          resolution: 22,
          view: { azimuth: 30, elevation: 28 },
          caption: 'The solid $a^2 \\le x^2 + y^2 + z^2 \\le 4$, $z \\ge 0$ is bounded by the outer dome (transparent), the inner dome and the flat ring in the $xy$-plane. Shrink $a$ toward $0$ and the shell fills in to a solid hemisphere.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Trigger volumes are inequalities',
          text: 'Every "is the player inside?" test in a game engine is a region like these. A sphere trigger checks $|\\vec{p} - \\vec{c}|^2 \\le r^2$. An axis-aligned bounding box (AABB) checks six inequalities, `min.x <= p.x && p.x <= max.x && …`. A capsule (the usual character collider) is all points within distance $r$ of a segment. Broad-phase collision detection is, at heart, fast inequality testing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Which inequalities describe the solid cylinder of radius $2$ whose axis is the $z$-axis, between the planes $z = 0$ and $z = 5$?',
      options: [
        { text: '$x^2 + y^2 \\le 4,\\ 0 \\le z \\le 5$', correct: true, why: 'Distance from the $z$-axis is $\\sqrt{x^2 + y^2}$; requiring it to be at most $2$ and bounding $z$ gives the solid cylinder.' },
        { text: '$x^2 + y^2 + z^2 \\le 4,\\ 0 \\le z \\le 5$', why: 'Including $z^2$ measures distance from the origin, not from the axis: this is the upper half of a ball of radius $2$ (the $z \\le 5$ condition never even matters).' },
        { text: '$x^2 + y^2 \\le 2,\\ 0 \\le z \\le 5$', why: 'The right side must be the radius **squared**, $4$. This describes a cylinder of radius $\\sqrt{2}$.' },
        { text: '$x^2 + y^2 = 4,\\ 0 \\le z \\le 5$', why: 'The equals sign gives only the curved side surface (a tube), not the solid inside it.' },
      ],
      explanation: 'The distance from $(x, y, z)$ to the $z$-axis is the distance to the axis point $(0, 0, z)$, namely $\\sqrt{x^2 + y^2}$. "Within $2$ of the axis" is $x^2 + y^2 \\le 4$, and "between the planes" is $0 \\le z \\le 5$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Axis conventions in game engines',
      blocks: [
        {
          type: 'p',
          text: 'Mathematics settles on right-handed, $z$-up. Game engines did not agree, and when you import a mesh from one tool into another you meet the consequences: models lying on their backs, mirrored characters, normals pointing inward.',
        },
        {
          type: 'table',
          headers: ['Tool', 'Handedness', 'Up axis'],
          rows: [
            ['This course, physics, Blender', 'right-handed', '$z$'],
            ['OpenGL (by convention), Godot', 'right-handed', '$y$ (camera looks down $-z$)'],
            ['Unity', 'left-handed', '$y$'],
            ['Unreal Engine', 'left-handed', '$z$'],
          ],
          caption: 'Direct3D historically used left-handed coordinates; its math libraries offer both LH and RH versions of the camera and projection functions.',
        },
        {
          type: 'p',
          text: 'Which conversions are harmless? A change of axes is a linear map, and from Linear Algebra you know its [[determinant]] tells you whether it preserves orientation. Turning a $z$-up right-handed world into a $y$-up right-handed one is a **rotation** ($y \\to z$, $z \\to -y$), determinant $+1$. Merely **swapping** $y$ and $z$ is a reflection, determinant $-1$: it flips handedness.',
        },
        {
          type: 'derivation',
          title: 'Swapping two axes reverses orientation',
          steps: [
            { tex: 'S = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}, \\quad S(x, y, z) = (x, z, y)', why: 'The matrix that exchanges the second and third coordinates.' },
            { tex: '\\det S = 1\\cdot(0 \\cdot 0 - 1 \\cdot 1) = -1', why: 'Cofactor expansion along the first row; the other entries of that row are $0$.' },
            { tex: 'R = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & -1 \\\\ 0 & 1 & 0 \\end{bmatrix}, \\quad \\det R = +1', why: 'A $90^\\circ$ rotation about the $x$-axis also moves $y$ into $z$, but sends $z$ to $-y$; its determinant is $0 \\cdot 0 - (-1)(1) = 1$.' },
          ],
          result: 'A swap is a mirror (determinant $-1$, handedness flips); the rotation does the same relabelling of "up" without mirroring anything.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Spotting a handedness bug',
          text: 'If an imported model is a mirror image (a soldier now holds his rifle left-handed) or the lighting looks inside-out, suspect a determinant $-1$ somewhere in the import transform. Exporters fix this by negating one axis or reversing the triangle winding order, which you will meet with the cross product in the next lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the statements about converting between coordinate conventions.',
      template: 'The matrix that swaps the $y$ and $z$ coordinates has determinant ___, so it turns a right-handed system into a ___-handed one. A rotation always has determinant ___.',
      blanks: [{ answers: ['$-1$'] }, { answers: ['left'] }, { answers: ['$+1$'] }],
      wordBank: ['$-1$', '$+1$', '$0$', 'left', 'right'],
      explanation: 'Exchanging two rows of the identity flips the sign of its determinant, so the swap matrix has $\\det = -1$: a reflection, which reverses orientation (right-handed becomes left-handed). Rotations preserve both lengths and orientation, so their determinant is always $+1$. A determinant of $0$ would collapse space onto a plane — no coordinate change does that.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A sphere has a diameter with endpoints $(1, 2, -3)$ and $(5, -2, 3)$. Which equation describes it?',
      options: [
        { text: '$(x - 3)^2 + y^2 + z^2 = 17$', correct: true, why: 'Center = midpoint $(3, 0, 0)$; radius = half the diameter $\\frac{1}{2}\\sqrt{16 + 16 + 36} = \\sqrt{17}$.' },
        { text: '$(x - 3)^2 + y^2 + z^2 = 68$', why: '$68$ is the square of the **diameter**. The radius is half of it, so $r^2 = 68/4 = 17$.' },
        { text: '$(x + 3)^2 + y^2 + z^2 = 17$', why: 'The center is $(3, 0, 0)$, so the factor is $(x - 3)^2$; $(x + 3)^2$ puts the center at $x = -3$.' },
        { text: '$(x - 3)^2 + y^2 + z^2 = \\sqrt{17}$', why: 'The right side is $r^2$, not $r$.' },
      ],
      explanation: 'The center of a sphere is the midpoint of any diameter: $\\left(\\frac{1 + 5}{2}, \\frac{2 - 2}{2}, \\frac{-3 + 3}{2}\\right) = (3, 0, 0)$. The diameter has length $\\sqrt{4^2 + (-4)^2 + 6^2} = \\sqrt{68} = 2\\sqrt{17}$, so $r = \\sqrt{17}$ and $r^2 = 17$.',
    },
  ],
  takeaways: [
    'Points in space are triples $(x, y, z)$ on three mutually perpendicular axes, arranged right-handedly: curl $x$ toward $y$ and the thumb gives $z$.',
    'In $\\mathbb{R}^3$ one equation usually describes a surface (missing variables are free) and two equations usually describe a curve.',
    'Distance: $\\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$ (Pythagoras twice); midpoint: average each coordinate. Games compare squared distances.',
    'A sphere is $(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2$; complete the square to find center and radius, and check the right side is positive.',
    'Inequalities describe solids: balls, shells, slabs, cylinders and boxes — the same tests a game uses for trigger volumes.',
    'Swapping two axes has determinant $-1$ and flips handedness; changing the up axis correctly needs a rotation (determinant $+1$).',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 2.2 Vectors in Three Dimensions',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'The free textbook\'s treatment of the 3D coordinate system, the distance formula and spheres, with many sketching exercises.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'Start with "The 3-D Coordinate System" for more examples of equations that are lines in 2D but planes in 3D.',
    },
    {
      title: 'Wikipedia — Right-hand rule',
      url: 'https://en.wikipedia.org/wiki/Right-hand_rule',
      source: 'wikipedia',
      note: 'Pictures of the coordinate and cross-product versions of the rule, and a note on left-handed conventions.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Session 1 of the vectors unit introduces space coordinates with short recitation videos and problem sets.',
    },
  ],
};
