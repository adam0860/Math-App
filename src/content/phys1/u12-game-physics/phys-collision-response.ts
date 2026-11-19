import type { Lesson } from '../../types';

// @@FIGS@@
const FIG_PIPE =
  '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="150" height="48" rx="6" fill="currentColor" class="f-blue" fill-opacity="0.15" stroke="currentColor" stroke-width="1.3"/><text x="85.0" y="40" font-size="12.5" font-weight="600" text-anchor="middle">1. Integrate velocities</text><text x="85.0" y="57" font-size="10.5" text-anchor="middle" class="t-gray">v += (F/m) h</text><rect x="185" y="20" width="150" height="48" rx="6" fill="currentColor" class="f-purple" fill-opacity="0.15" stroke="currentColor" stroke-width="1.3"/><text x="260.0" y="40" font-size="12.5" font-weight="600" text-anchor="middle">2. Broad phase</text><text x="260.0" y="57" font-size="10.5" text-anchor="middle" class="t-gray">AABB overlaps → pairs</text><rect x="360" y="20" width="150" height="48" rx="6" fill="currentColor" class="f-purple" fill-opacity="0.15" stroke="currentColor" stroke-width="1.3"/><text x="435.0" y="40" font-size="12.5" font-weight="600" text-anchor="middle">3. Narrow phase</text><text x="435.0" y="57" font-size="10.5" text-anchor="middle" class="t-gray">contacts: n, depth, point</text><rect x="360" y="100" width="150" height="48" rx="6" fill="currentColor" class="f-red" fill-opacity="0.15" stroke="currentColor" stroke-width="1.3"/><text x="435.0" y="120" font-size="12.5" font-weight="600" text-anchor="middle">4. Solve contacts</text><text x="435.0" y="137" font-size="10.5" text-anchor="middle" class="t-gray">impulses, iterated</text><rect x="185" y="100" width="150" height="48" rx="6" fill="currentColor" class="f-blue" fill-opacity="0.15" stroke="currentColor" stroke-width="1.3"/><text x="260.0" y="120" font-size="12.5" font-weight="600" text-anchor="middle">5. Integrate positions</text><text x="260.0" y="137" font-size="10.5" text-anchor="middle" class="t-gray">x += v h</text><rect x="10" y="100" width="150" height="48" rx="6" fill="currentColor" class="f-orange" fill-opacity="0.15" stroke="currentColor" stroke-width="1.3"/><text x="85.0" y="120" font-size="12.5" font-weight="600" text-anchor="middle">6. Fix penetration</text><text x="85.0" y="137" font-size="10.5" text-anchor="middle" class="t-gray">push apart along n</text><line x1="162.0" y1="44.0" x2="183.0" y2="44.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><path d="M183.0 44.0 L176.6 46.7 L176.6 41.3 Z" fill="currentColor" class="f-gray"/><line x1="337.0" y1="44.0" x2="358.0" y2="44.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><path d="M358.0 44.0 L351.6 46.7 L351.6 41.3 Z" fill="currentColor" class="f-gray"/><line x1="435.0" y1="70.0" x2="435.0" y2="98.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><path d="M435.0 98.0 L432.3 91.6 L437.7 91.6 Z" fill="currentColor" class="f-gray"/><line x1="358.0" y1="124.0" x2="337.0" y2="124.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><path d="M337.0 124.0 L343.4 121.3 L343.4 126.7 Z" fill="currentColor" class="f-gray"/><line x1="183.0" y1="124.0" x2="162.0" y2="124.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><path d="M162.0 124.0 L168.4 121.3 L168.4 126.7 Z" fill="currentColor" class="f-gray"/><text x="260" y="166" font-size="11" text-anchor="middle" class="t-gray">one fixed physics step (semi-implicit Euler with collisions), repeated every h</text></svg>';
const FIG_ROD =
  '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><rect x="330" y="150" width="170" height="60" fill="currentColor" class="f-gray" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><text x="470" y="200" font-size="12" text-anchor="middle" class="t-gray">ledge</text><rect x="140" y="136" width="210" height="12" rx="3" fill="currentColor" class="f-blue" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="245" cy="142" r="4" fill="currentColor"/><text x="237" y="182" font-size="12" text-anchor="end">center of mass</text><line x1="245" y1="146" x2="245" y2="168" stroke="currentColor" class="s-gray" stroke-dasharray="2 2"/><circle cx="345" cy="148" r="4" fill="currentColor" class="f-red"/><text x="353" y="166" font-size="12" class="t-red">contact P</text><line x1="245.0" y1="162.0" x2="343.0" y2="162.0" stroke="currentColor" class="s-purple" stroke-width="1.8"/><path d="M343.0 162.0 L336.6 164.7 L336.6 159.3 Z" fill="currentColor" class="f-purple"/><text x="295.0" y="178" font-size="13" text-anchor="middle" class="t-purple">r</text><line x1="345.0" y1="148.0" x2="345.0" y2="78.0" stroke="currentColor" class="s-green" stroke-width="2"/><path d="M345.0 78.0 L348.1 85.4 L341.9 85.4 Z" fill="currentColor" class="f-green"/><text x="353" y="90" font-size="13" class="t-green">n, impulse J = j n</text><line x1="200.0" y1="50.0" x2="200.0" y2="100.0" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M200.0 100.0 L196.9 92.6 L203.1 92.6 Z" fill="currentColor" class="f-red"/><text x="192" y="78" font-size="12" class="t-red" text-anchor="end">v = 2.0 m/s</text><path d="M222.1 99.2 L224.4 97.7 L226.8 96.4 L229.4 95.2 L232.0 94.2 L234.6 93.4 L237.4 92.7 L240.1 92.3 L242.9 92.1 L245.7 92.0 L248.5 92.2 L251.3 92.5 L254.0 93.0 L256.7 93.7 L259.3 94.7 L261.9 95.7 L264.4 97.0 L266.8 98.5 L269.1 100.1 L271.2 101.8 L273.3 103.7" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M222.1 99.2 L225.8 93.3 L228.9 97.8 Z" fill="currentColor" class="f-orange"/><text x="275" y="86" font-size="12" class="t-orange">spins</text><text x="20" y="224" font-size="11.5" class="t-gray">Rod: m = 1.0 kg, L = 1.0 m, I = mL²/12; contact at the end, r × n = 0.50 m</text></svg>';
const FIG_TUNNEL =
  '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><text x="20" y="22" font-size="13" font-weight="600">Discrete test: no overlap at any step</text><rect x="255" y="32" width="12" height="70" fill="currentColor" class="f-gray" fill-opacity="0.6"/><circle cx="90" cy="67" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="90" y="96" font-size="11" text-anchor="middle" class="t-gray">t₀</text><circle cx="160" cy="67" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="160" y="96" font-size="11" text-anchor="middle" class="t-gray">t₁</text><circle cx="230" cy="67" r="10" fill="currentColor" class="f-red" fill-opacity="0.9"/><text x="230" y="96" font-size="11" text-anchor="middle" class="t-gray">t₂</text><circle cx="300" cy="67" r="10" fill="currentColor" class="f-red" fill-opacity="0.9"/><text x="300" y="96" font-size="11" text-anchor="middle" class="t-gray">t₃</text><circle cx="370" cy="67" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="370" y="96" font-size="11" text-anchor="middle" class="t-gray">t₄</text><circle cx="440" cy="67" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="440" y="96" font-size="11" text-anchor="middle" class="t-gray">t₅</text><line x1="60.0" y1="48.0" x2="450.0" y2="48.0" stroke="currentColor" class="s-red" stroke-width="1.2"/><path d="M450.0 48.0 L444.5 50.3 L444.5 45.7 Z" fill="currentColor" class="f-red"/><text x="460" y="52" font-size="11" class="t-red">v</text><text x="20" y="128" font-size="13" font-weight="600">Swept test (CCD): find the time of impact</text><rect x="255" y="138" width="12" height="55" fill="currentColor" class="f-gray" fill-opacity="0.6"/><rect x="180" y="153" width="180" height="20" rx="10" fill="currentColor" class="f-orange" fill-opacity="0.2" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><circle cx="245" cy="163" r="10" fill="currentColor" class="f-green" fill-opacity="0.9"/><circle cx="350" cy="163" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="245" y="190" font-size="11" text-anchor="middle" class="t-green">at impact</text><text x="380" y="167" font-size="11" class="t-gray">end of step (never reached)</text><text x="150" y="167" font-size="11" text-anchor="middle" class="t-gray">start →</text><circle cx="190" cy="163" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/></svg>';
// @@END@@

// 1D collision (A: 1 kg at +2 m/s, B: m kg at -1 m/s, n = +x) with restitution c.
const VA_AFTER = '(2 - 3*m*(1 + c)/(m + 1))';
const VB_AFTER = '(-1 + 3*(1 + c)/(m + 1))';
const XA = (u: string) => `-3 + 2*min(${u}, 1.5) + ${VA_AFTER}*max(${u} - 1.5, 0)`;
const XB = (u: string) => `1.5 - min(${u}, 1.5) + ${VB_AFTER}*max(${u} - 1.5, 0)`;
/** Box A is fixed at [-3, 1] × [-2, 1]; box B is 3 × 2 centered at (p, q). */
const BOX = (x0: string, x1: string, y0: string, y1: string, color: 'blue' | 'red') => [
  { from: [x0, y0] as [string, string], to: [x1, y0] as [string, string], color },
  { from: [x1, y0] as [string, string], to: [x1, y1] as [string, string], color },
  { from: [x1, y1] as [string, string], to: [x0, y1] as [string, string], color },
  { from: [x0, y1] as [string, string], to: [x0, y0] as [string, string], color },
];

export const lesson: Lesson = {
  id: 'phys-collision-response',
  title: 'Collisions and Rigid Bodies in Code',
  summary: 'How a physics engine finds collisions (sphere and AABB tests, broad and narrow phase) and resolves them with impulses derived from momentum conservation: restitution, friction, spin through the inverse inertia, penetration correction, and continuous collision detection against tunneling.',
  minutes: 22,
  objectives: [
    'Test spheres and axis-aligned boxes for overlap, and compute a contact normal and penetration depth',
    'Derive the collision impulse $j = -(1 + e)\\,\\vec{v}_{\\text{rel}}\\cdot\\hat{n}\\,/\\,(m_A^{-1} + m_B^{-1})$ from momentum conservation and the restitution law',
    'Add Coulomb friction as a clamped tangential impulse',
    'Include rotation: compute contact-point velocities and the effective mass $m^{-1} + (\\vec{r} \\times \\hat{n})^2/I$',
    'Explain penetration correction, tunneling and continuous collision detection, and what production engines do',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Collision detection: spheres first',
      blocks: [
        {
          type: 'p',
          text: 'In the momentum unit you solved collisions on paper: conserve momentum, use the coefficient of restitution, solve for the final velocities. A game engine does the same thing thousands of times per second, but first it has to **find** the collisions, and it must do so at discrete time steps. Every fixed step of a rigid-body engine looks roughly like this:',
        },
        {
          type: 'figure',
          svg: FIG_PIPE,
          alt: 'Six boxes in order: 1. Integrate velocities (v += (F/m) h). 2. Broad phase (AABB overlaps to pairs). 3. Narrow phase (contacts: normal n, depth, point). 4. Solve contacts (impulses, iterated). 5. Integrate positions (x += v h). 6. Fix penetration (push apart along n).',
          caption: 'Semi-implicit Euler from the last lesson, with collision handling inserted between the velocity and position updates. Real engines differ in details, but these stages appear in all of them.',
        },
        {
          type: 'p',
          text: 'The simplest narrow-phase test is between two spheres (circles in 2D). They overlap when the distance between their centers is less than the sum of the radii. The test also gives the two numbers the response needs: the **contact normal** $\\hat{n}$, the [[unit-vector]] from $A$ toward $B$, and the **penetration depth**.',
        },
        {
          type: 'theorem',
          name: 'Sphere–sphere contact',
          tex: 'd = |\\vec{c}_B - \\vec{c}_A| < r_A + r_B, \\qquad \\hat{n} = \\frac{\\vec{c}_B - \\vec{c}_A}{d}, \\qquad \\text{depth} = r_A + r_B - d',
        },
        {
          type: 'graph',
          x: [-6, 7],
          y: [-4.5, 4.5],
          equal: true,
          height: 300,
          parametric: [
            { x: '2cos(t)', y: '2sin(t)', t: [0, '2pi'], label: 'sphere $A$, $r_A = 2$', color: 'blue' },
            { x: 'a + 1.5cos(t)', y: 'b + 1.5sin(t)', t: [0, '2pi'], label: 'sphere $B$, $r_B = 1.5$', color: 'red' },
          ],
          segments: [
            { from: [0, 0], to: ['a', 'b'], color: 'gray', dashed: true },
            { from: ['2a/sqrt(a^2 + b^2)', '2b/sqrt(a^2 + b^2)'], to: ['3.2a/sqrt(a^2 + b^2)', '3.2b/sqrt(a^2 + b^2)'], color: 'green', arrow: true, label: 'n̂' },
          ],
          points: [
            { x: 0, y: 0, color: 'blue' },
            { x: 'a', y: 'b', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -6, max: 6, step: 0.1, value: 3, label: 'center of $B$: $x$' },
            { name: 'b', min: -4, max: 4, step: 0.1, value: 1, label: 'center of $B$: $y$' },
          ],
          readouts: [
            { label: '$d =$', expr: 'sqrt(a^2 + b^2)', digits: 2 },
            { label: '$r_A + r_B =$', expr: '3.5', digits: 2 },
            { label: 'depth $= \\max(0, r_A + r_B - d) =$', expr: 'max(0, 3.5 - sqrt(a^2 + b^2))', digits: 2 },
          ],
          caption: 'Drag $B$ around. Whenever the depth readout is positive the spheres overlap. The green normal always points from $A$\'s center toward $B$\'s, wherever they touch.',
        },
        {
          type: 'derivation',
          title: 'Spheres at $(1, 2, 0)$ with $r_A = 2.0$ and $(4, 6, 0)$ with $r_B = 3.5$ (meters)',
          steps: [
            { tex: '\\vec{c}_B - \\vec{c}_A = (3, 4, 0), \\quad d = \\sqrt{3^2 + 4^2} = 5.0\\,\\text{m}', why: 'Subtract the centers, then take the magnitude.' },
            { tex: 'd = 5.0 < r_A + r_B = 5.5 \\implies \\text{overlap}', why: 'Compare with the sum of the radii.' },
            { tex: '\\hat{n} = \\frac{(3, 4, 0)}{5.0} = (0.60, 0.80, 0), \\quad \\text{depth} = 5.5 - 5.0 = 0.5\\,\\text{m}', why: 'Normalize the center-to-center vector; the depth is how far the spheres would have to move apart to just touch.' },
          ],
          result: 'Contact normal $(0.60, 0.80, 0)$ and depth $0.5\\,\\text{m}$.',
        },
        {
          type: 'code',
          title: 'sphere_test.cpp (excerpt)',
          code: `struct Contact { Vec3 normal; float depth; };

std::optional<Contact> sphereSphere(Vec3 cA, float rA, Vec3 cB, float rB) {
    Vec3 d = cB - cA;
    float dist2 = dot(d, d);
    float rSum = rA + rB;
    if (dist2 >= rSum * rSum) return std::nullopt;   // no sqrt needed to reject
    float dist = std::sqrt(dist2);
    Vec3 n = dist > 1e-6f ? d / dist : Vec3{0, 1, 0}; // concentric: pick any normal
    return Contact{n, rSum - dist};
}`,
          annotations: [
            { lines: '5-7', text: 'Compare **squared** distances: the square root is only needed once you know there is a contact. Most pairs are rejected, so this saves a lot.' },
            { lines: 9, text: 'Guard against dividing by zero when the centers coincide.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Sphere $A$ has center $(-1, 0, 2)$ and radius $1.5\\,\\text{m}$; sphere $B$ has center $(1, 3, 8)$ and radius $6.1\\,\\text{m}$ (coordinates in meters). They overlap. What is the penetration depth? Give 2 significant figures.',
      label: 'depth $=$',
      unit: 'm',
      answer: '1.5 + 6.1 - 7',
      answerTex: '0.60\\,\\text{m}',
      tolerance: 0.01,
      hint: 'Find $d = |\\vec{c}_B - \\vec{c}_A|$ using all three components, then depth $= r_A + r_B - d$.',
      explanation: '$\\vec{c}_B - \\vec{c}_A = (2, 3, 6)$, so $d = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7.0\\,\\text{m}$. Since $r_A + r_B = 7.6\\,\\text{m} > 7.0\\,\\text{m}$ they overlap, by $7.6 - 7.0 = 0.60\\,\\text{m}$. The contact normal is $\\hat{n} = (2, 3, 6)/7$. Dropping the $z$-component gives $d = \\sqrt{13} = 3.6\\,\\text{m}$ and a depth of $4.0\\,\\text{m}$, far too large.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Bounding boxes and the broad phase',
      blocks: [
        {
          type: 'p',
          text: 'With $N$ objects there are $N(N-1)/2$ pairs: about $5 \\times 10^{5}$ for $1000$ objects. Running exact shape tests on all of them every step is far too slow. The **broad phase** first discards pairs that cannot possibly touch, using simple bounding volumes; only the survivors go to the exact **narrow phase** ([[phys-broad-phase|broad and narrow phase]]).',
        },
        {
          type: 'p',
          text: 'The workhorse bounding volume is the [[phys-aabb|axis-aligned bounding box]]: a box whose faces are parallel to the world axes, stored as a `min` and a `max` corner. Two AABBs overlap exactly when their intervals overlap on **every** axis; if any one axis separates them, they are apart.',
        },
        {
          type: 'theorem',
          name: 'AABB overlap test',
          tex: '\\text{overlap} \\iff \\big(\\min_x^A \\le \\max_x^B \\ \\text{and}\\ \\max_x^A \\ge \\min_x^B\\big) \\ \\text{and the same for } y \\text{ and } z',
          text: 'Six comparisons, no multiplications. This is the one-dimensional case of the separating axis theorem: two convex shapes are disjoint if and only if some axis separates their projections.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-5, 5],
          equal: true,
          height: 300,
          segments: [...BOX('-3', '1', '-2', '1', 'blue'), ...BOX('p - 1.5', 'p + 1.5', 'q - 1', 'q + 1', 'red')],
          points: [{ x: 'p', y: 'q', label: 'B', color: 'red' }, { x: -1, y: -0.5, label: 'A', color: 'blue' }],
          sliders: [
            { name: 'p', min: -6, max: 6, step: 0.1, value: 1.8, label: 'center of $B$: $x$' },
            { name: 'q', min: -4, max: 4, step: 0.1, value: 1.5, label: 'center of $B$: $y$' },
          ],
          readouts: [
            { label: '$x$-interval overlap $=$', expr: 'max(0, min(1, p + 1.5) - max(-3, p - 1.5))', digits: 2 },
            { label: '$y$-interval overlap $=$', expr: 'max(0, min(1, q + 1) - max(-2, q - 1))', digits: 2 },
          ],
          caption: 'The boxes overlap only when **both** readouts are positive. They start overlapping. Slide $B$ to the right of $A$: the $x$ overlap drops to $0$ and the boxes are apart, even though their $y$ intervals still overlap.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'How engines organize the broad phase',
          text: '**Sort and sweep** sorts the boxes\' $\\min_x$ and $\\max_x$ values along an axis and only tests boxes whose intervals overlap there; since objects move little per step, the list stays nearly sorted and re-sorting is fast. **Bounding volume hierarchies** (trees of AABBs) let a query skip whole branches of the world at once; Box2D uses a dynamic AABB tree, and Jolt a quad tree of AABBs. A broad-phase box is usually "fattened" slightly so it doesn\'t have to be updated every time an object twitches.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Three 2D boxes are given as $[x_{\\min}, x_{\\max}] \\times [y_{\\min}, y_{\\max}]$: $A = [0, 4] \\times [0, 2]$, $B = [3, 6] \\times [3, 5]$, $C = [5, 7] \\times [1, 4]$. Which pairs overlap?',
      options: [
        { text: '$A$ and $B$ only', why: 'Their $x$ intervals $[0, 4]$ and $[3, 6]$ overlap, but their $y$ intervals $[0, 2]$ and $[3, 5]$ do not. One separating axis is enough to keep them apart.' },
        { text: '$B$ and $C$ only', correct: true, why: '$x$: $[3, 6]$ and $[5, 7]$ overlap on $[5, 6]$; $y$: $[3, 5]$ and $[1, 4]$ overlap on $[3, 4]$. Both axes overlap.' },
        { text: '$A$ and $B$, and $B$ and $C$', why: '$A$ and $B$ are separated along $y$; overlapping on one axis is not enough.' },
        { text: 'No pair overlaps', why: 'Check $B$ and $C$ axis by axis: both intervals overlap, so the boxes intersect in the rectangle $[5, 6] \\times [3, 4]$.' },
      ],
      explanation: 'Test each pair on each axis. $A$–$B$: $x$ overlaps, $y$ does not, so they are apart. $A$–$C$: $x$ intervals $[0, 4]$ and $[5, 7]$ don\'t overlap, so they are apart. $B$–$C$: both overlap, so they intersect in $[5, 6] \\times [3, 4]$. The narrow phase would now run the exact shape test on the pair $(B, C)$ only.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Impulse-based response: deriving the impulse',
      blocks: [
        {
          type: 'p',
          text: 'Real contact forces are huge and act for a millisecond. An engine replaces them by an [[phys-impulse|impulse]] $\\vec{J} = \\int \\vec{F}\\,dt$ that changes the velocities instantly, which is exactly the [[phys-impulse-momentum-theorem|impulse–momentum theorem]] $\\Delta\\vec{p} = \\vec{J}$. For frictionless contact the impulse acts along the normal: $B$ receives $+j\\hat{n}$ and, by [[phys-newtons-third-law|Newton\'s third law]], $A$ receives $-j\\hat{n}$. This is [[phys-impulse-response|impulse-based collision response]].',
        },
        {
          type: 'derivation',
          title: 'Solving for the impulse magnitude $j$',
          steps: [
            { tex: '\\vec{v}_A\' = \\vec{v}_A - \\frac{j}{m_A}\\hat{n}, \\qquad \\vec{v}_B\' = \\vec{v}_B + \\frac{j}{m_B}\\hat{n}', why: 'Impulse–momentum for each body. Equal and opposite impulses conserve total momentum automatically.' },
            { tex: 'v_n = (\\vec{v}_B - \\vec{v}_A)\\cdot\\hat{n}', why: 'The relative velocity along the normal, a [[dot-product]]. With $\\hat{n}$ pointing from $A$ to $B$, $v_n < 0$ means the bodies are approaching. If $v_n \\ge 0$ they are already separating: apply no impulse.' },
            { tex: 'v_n\' = -e\\,v_n', why: 'The restitution law from the collisions lesson ([[phys-coefficient-of-restitution|coefficient of restitution]]): the separation speed is $e$ times the approach speed. $e = 1$ is perfectly elastic, $e = 0$ perfectly inelastic (no bounce).' },
            { tex: 'v_n\' = (\\vec{v}_B\' - \\vec{v}_A\')\\cdot\\hat{n} = v_n + j\\left(\\frac{1}{m_A} + \\frac{1}{m_B}\\right)', why: 'Substitute the new velocities and use $\\hat{n}\\cdot\\hat{n} = 1$.' },
            { tex: 'j = \\frac{-(1 + e)\\,v_n}{\\dfrac{1}{m_A} + \\dfrac{1}{m_B}}', why: 'Set the two expressions for $v_n\'$ equal and solve. Since $v_n < 0$, $j > 0$: contacts push, never pull.' },
          ],
          result: 'One formula handles every frictionless collision between two point masses. Check: equal masses, $e = 1$, head-on, gives $j = m|v_n|$ and the bodies swap velocities, as in the collisions lesson.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an instantaneous impulse is a fair model',
          text: 'During an impact lasting about a millisecond, the contact force can be thousands of times the weight, so the impulse of gravity and other ordinary forces over that millisecond is negligible next to $\\vec{J}$ (the **impulse approximation** from the momentum unit). The bodies barely move during the contact, so treating the velocity change as instantaneous at fixed positions loses almost nothing, and it is far cheaper than simulating a stiff contact spring, which the last lesson showed would need tiny timesteps.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why engines store the inverse mass',
          text: 'Every formula uses $1/m$, never $m$. Storing `invMass` makes immovable objects trivial: a wall or the ground has `invMass = 0`, as if it had infinite mass, so $\\Delta\\vec{v} = (j \\cdot 0)\\hat{n} = \\vec{0}$ and the formula needs no special case. Two static bodies ($1/m_A + 1/m_B = 0$) are never solved against each other.',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [-4, 5],
          height: 300,
          parametric: [
            { x: 't', y: XA('t'), t: [0, 4], label: '$A$: $1\\,\\text{kg}$, starts at $+2\\,\\text{m/s}$', color: 'blue' },
            { x: 't', y: XB('t'), t: [0, 4], label: '$B$: $m_B$, starts at $-1\\,\\text{m/s}$', color: 'red' },
          ],
          points: [
            { x: 's', y: XA('s'), color: 'blue' },
            { x: 's', y: XB('s'), color: 'red' },
          ],
          vlines: [{ x: 1.5, label: 'impact', color: 'gray' }],
          sliders: [
            { name: 's', min: 0, max: 4, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1 },
            { name: 'm', min: 0.2, max: 5, step: 0.1, value: 1, label: 'mass of $B$ (kg)' },
            { name: 'c', min: 0, max: 1, step: 0.05, value: 1, label: 'restitution $e$' },
          ],
          readouts: [
            { label: '$v_A\' =$', expr: VA_AFTER, digits: 2 },
            { label: '$v_B\' =$', expr: VB_AFTER, digits: 2 },
            { label: 'momentum after (before: $2 - m_B$) $=$', expr: `${VA_AFTER} + m*${VB_AFTER}`, digits: 2 },
            { label: 'kinetic energy lost (%) $=$', expr: `100*(1 - (${VA_AFTER}^2 + m*${VB_AFTER}^2)/(4 + m))`, digits: 1 },
          ],
          caption: 'Position (vertical, m) against time (horizontal, s) for a head-on collision at $t = 1.5\\,\\text{s}$; the slopes are the velocities. Press ▶ to run it. The momentum readout never changes, for any $m_B$ and $e$. With $e = 1$ no kinetic energy is lost; at $e = 0$ the lines leave together.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A $2.0\\,\\text{kg}$ ball moving at $3.0\\,\\text{m/s}$ along $+x$ hits a $1.0\\,\\text{kg}$ ball at rest head-on. The coefficient of restitution is $e = 0.50$; take $\\hat{n} = +\\hat{\\imath}$ (from the moving ball $A$ to the resting ball $B$). Using the impulse formula, find $B$\'s velocity after the collision. Give 3 significant figures.',
      label: '$v_B\' =$',
      unit: 'm/s',
      answer: '3',
      answerTex: '3.00\\,\\text{m/s}',
      tolerance: 0.02,
      hint: '$v_n = v_B - v_A = -3.0\\,\\text{m/s}$. Then $j = -(1 + e)v_n / (1/m_A + 1/m_B)$ and $v_B\' = v_B + j/m_B$.',
      explanation: '$j = \\frac{-(1.5)(-3.0)}{1/2.0 + 1/1.0} = \\frac{4.5}{1.5} = 3.0\\,\\text{N}\\cdot\\text{s}$. So $v_B\' = 0 + 3.0/1.0 = 3.00\\,\\text{m/s}$ and $v_A\' = 3.0 - 3.0/2.0 = 1.50\\,\\text{m/s}$. Checks: momentum $2.0(1.5) + 1.0(3.0) = 6.0 = 2.0(3.0)$ ✓; separation speed $3.0 - 1.5 = 1.5 = 0.50 \\times 3.0$ ✓. With $e = 1$ you would get $4.00\\,\\text{m/s}$; with $e = 0$, $2.00\\,\\text{m/s}$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Friction: a clamped tangential impulse',
      blocks: [
        {
          type: 'p',
          text: 'A box sliding across the floor and a ball skidding into a wall also need friction. The relative velocity has a part along the normal (handled above) and a part along the surface. Let $\\hat{t}$ be the unit vector along the tangential relative velocity, found with a [[vector-projection]]:',
        },
        {
          type: 'math',
          tex: '\\vec{v}_t = \\vec{v}_{\\text{rel}} - (\\vec{v}_{\\text{rel}}\\cdot\\hat{n})\\hat{n}, \\qquad \\hat{t} = \\frac{\\vec{v}_t}{|\\vec{v}_t|}',
        },
        {
          type: 'derivation',
          title: 'The friction impulse',
          steps: [
            { tex: 'j_t^{\\text{stop}} = \\frac{-\\,\\vec{v}_{\\text{rel}}\\cdot\\hat{t}}{\\dfrac{1}{m_A} + \\dfrac{1}{m_B}}', why: 'The same algebra as the normal impulse with $e = 0$ along $\\hat{t}$: this impulse would stop the sliding completely (static friction holds).' },
            { tex: '|j_t| \\le \\mu\\,j', why: 'Coulomb\'s law, $f \\le \\mu n$ with the [[phys-coefficient-of-friction|coefficient of friction]] $\\mu$, integrated over the brief contact: the friction impulse can be at most $\\mu$ times the normal impulse.' },
            { tex: 'j_t = \\max\\big(-\\mu j,\\ \\min(j_t^{\\text{stop}},\\ \\mu j)\\big)', why: 'If stopping the slide needs less than $\\mu j$, the surfaces stick. Otherwise friction is capped at $\\mu j$ (kinetic friction) and the contact keeps sliding.' },
            { tex: '\\vec{v}_A\' \\mathrel{-}= \\frac{j_t}{m_A}\\hat{t}, \\qquad \\vec{v}_B\' \\mathrel{+}= \\frac{j_t}{m_B}\\hat{t}', why: 'Apply it like the normal impulse, along $\\hat{t}$ instead of $\\hat{n}$.' },
          ],
          result: 'Since $j_t^{\\text{stop}}$ opposes the sliding, the clamped impulse always does too. Friction can stop a slide; it can never reverse one.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Game feel',
          text: 'Restitution and friction are the two knobs behind how objects "feel". Low $e$ and high $\\mu$ make crates thud and stay put; high $e$ makes a grenade bounce down a corridor. Engines let you set both per material and combine them per contact (often with the geometric mean $\\sqrt{\\mu_A\\mu_B}$ for friction and the maximum for restitution). Character controllers usually set friction to zero against walls so the player slides along them instead of sticking.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'In impulse-based collision response, if an object hits the ground while sliding very fast, the friction impulse may exceed $\\mu$ times the normal impulse so that the object stops sliding in a single step.',
      answer: false,
      explanation: 'False. The Coulomb limit caps the friction impulse at $|j_t| \\le \\mu j$, however fast the object slides. A fast-sliding object therefore keeps sliding after the impact, with its tangential speed reduced by $\\mu j/m$ (for a body hitting a static surface), and continues to decelerate over the following contacts. Allowing more would make surfaces unrealistically "grippy" and could even reverse the slide.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Rotation: the impulse at a contact point',
      blocks: [
        {
          type: 'p',
          text: 'Rigid bodies spin, and the contact is usually not at the center of mass. Let $\\vec{r}$ be the vector from a body\'s center of mass to the contact point $P$. The point $P$ moves with the body\'s linear velocity **plus** the velocity due to rotation, $\\vec{\\omega} \\times \\vec{r}$ (a [[cross-product]]). And an impulse $\\vec{J}$ applied at $P$ changes the angular momentum by $\\vec{r} \\times \\vec{J}$, the impulse version of the [[la-torque|torque]] $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.',
        },
        {
          type: 'derivation',
          title: 'The impulse with rotation (2D, one moving body $B$ hitting static ground $A$)',
          steps: [
            { tex: '\\vec{v}_P = \\vec{v} + \\vec{\\omega} \\times \\vec{r}', why: 'Velocity of the contact point. In 2D, $\\vec{\\omega} = \\omega\\hat{k}$ and $\\vec{\\omega} \\times \\vec{r} = \\omega(-r_y, r_x)$.' },
            { tex: '\\Delta\\vec{v} = \\frac{j}{m}\\hat{n}, \\qquad \\Delta\\omega = \\frac{(\\vec{r} \\times j\\hat{n})_z}{I} = \\frac{j\\,(\\vec{r} \\times \\hat{n})}{I}', why: 'The impulse changes linear momentum by $j\\hat{n}$ and angular momentum by $\\vec{r} \\times j\\hat{n}$. In 2D, $\\vec{r} \\times \\hat{n} = r_xn_y - r_yn_x$ is a scalar; $I$ is the [[phys-moment-of-inertia|moment of inertia]] about the center of mass.' },
            { tex: '\\Delta(\\vec{v}_P\\cdot\\hat{n}) = \\frac{j}{m} + \\Delta\\omega\\,(\\hat{k} \\times \\vec{r})\\cdot\\hat{n} = j\\left[\\frac{1}{m} + \\frac{(\\vec{r} \\times \\hat{n})^2}{I}\\right]', why: 'The scalar triple product gives $(\\hat{k} \\times \\vec{r})\\cdot\\hat{n} = \\hat{k}\\cdot(\\vec{r} \\times \\hat{n}) = \\vec{r} \\times \\hat{n}$, so the normal velocity changes by $j$ times the bracket.' },
            { tex: 'j = \\frac{-(1 + e)\\,\\vec{v}_P\\cdot\\hat{n}}{\\dfrac{1}{m} + \\dfrac{(\\vec{r} \\times \\hat{n})^2}{I}}', why: 'Require $\\vec{v}_P\'\\cdot\\hat{n} = -e\\,\\vec{v}_P\\cdot\\hat{n}$ and solve, exactly as before. For two moving bodies, add $\\frac{1}{m_A} + \\frac{(\\vec{r}_A \\times \\hat{n})^2}{I_A}$ to the denominator and use the relative contact velocity.' },
          ],
          result: 'The bracket is the **inverse effective mass** at the contact: hitting a body off-center feels like hitting something lighter, because part of the impulse goes into spin. In 3D the scalar $(\\vec{r} \\times \\hat{n})^2/I$ becomes $\\hat{n}\\cdot\\big[(I^{-1}(\\vec{r} \\times \\hat{n})) \\times \\vec{r}\\big]$ with the inverse inertia tensor $I^{-1}$ in world coordinates.',
        },
        {
          type: 'figure',
          svg: FIG_ROD,
          alt: 'A horizontal rod falling at 2.0 meters per second lands with its right end on a ledge. The vector r runs from the rod\'s center of mass to the contact point P at its right end. The normal n and the impulse J = j n point straight up at P. An orange arc shows the rod starting to spin counterclockwise.',
          caption: 'A rod lands with one end on a ledge ($e = 0$). The upward impulse at the end slows the fall **and** spins the rod.',
        },
        {
          type: 'derivation',
          title: 'The rod on the ledge',
          steps: [
            { tex: 'I = \\tfrac{1}{12}mL^2 = \\tfrac{1}{12}\\,\\text{kg}\\cdot\\text{m}^2, \\quad \\vec{r} = (0.50, 0)\\,\\text{m}, \\quad \\hat{n} = (0, 1)', why: 'The moment of inertia of a uniform rod about its center (from the rotation unit); the contact is at the right end.' },
            { tex: '\\vec{r} \\times \\hat{n} = (0.50)(1) - (0)(0) = 0.50\\,\\text{m}', why: '2D cross product $r_xn_y - r_yn_x$.' },
            { tex: '\\frac{1}{m} + \\frac{(\\vec{r} \\times \\hat{n})^2}{I} = 1.0 + \\frac{0.25}{1/12} = 1.0 + 3.0 = 4.0\\,\\text{kg}^{-1}', why: 'The rotational term is three times the linear one: the end of a rod behaves like a mass of only $0.25\\,\\text{kg}$.' },
            { tex: 'j = \\frac{-(1 + 0)(-2.0)}{4.0} = 0.50\\,\\text{N}\\cdot\\text{s}', why: '$\\vec{v}_P\\cdot\\hat{n} = -2.0\\,\\text{m/s}$ (falling, not yet spinning) and $e = 0$.' },
            { tex: '\\vec{v}\' = (0, -2.0 + 0.50) = (0, -1.5)\\,\\text{m/s}, \\quad \\omega\' = \\frac{(0.50)(0.50)}{1/12} = 3.0\\,\\text{rad/s}', why: 'Apply $\\Delta\\vec{v} = j\\hat{n}/m$ and $\\Delta\\omega = j(\\vec{r} \\times \\hat{n})/I$; positive $\\omega$ is counterclockwise.' },
            { tex: 'v_{P,y}\' = v_y\' + \\omega\' r_x = -1.5 + (3.0)(0.50) = 0', why: 'Check: with $e = 0$ the contact point must stop moving into the ledge. ✓' },
          ],
          result: 'The center of mass keeps falling at $1.5\\,\\text{m/s}$ while the rod pivots about the ledge. Ignoring rotation would give $j = 2.0\\,\\text{N}\\cdot\\text{s}$ and stop the whole rod dead, which looks badly wrong in a game.',
        },
        {
          type: 'graph',
          x: [0, 0.5],
          y: [0, 4.2],
          height: 240,
          functions: [{ expr: '2(1 + c)/(1 + 12x^2)', label: 'impulse $j$ (N·s) vs contact offset', color: 'blue' }],
          points: [{ x: 'd', y: '2(1 + c)/(1 + 12d^2)', color: 'red' }],
          sliders: [
            { name: 'd', min: 0, max: 0.5, step: 0.01, value: 0.5, label: 'contact offset from center $|\\vec{r}|$ (m)' },
            { name: 'c', min: 0, max: 1, step: 0.05, value: 0, label: 'restitution $e$' },
          ],
          readouts: [
            { label: '$j =$', expr: '2(1 + c)/(1 + 12d^2)', digits: 3 },
            { label: '$\\omega\' = jd/I =$', expr: '12d*2(1 + c)/(1 + 12d^2)', digits: 2 },
          ],
          caption: 'The same rod ($m = 1.0\\,\\text{kg}$, $L = 1.0\\,\\text{m}$, falling at $2.0\\,\\text{m/s}$) landing on a point at distance $|\\vec{r}|$ from its center (horizontal axis, m). A hit at the center gives the full $j = (1 + e)\\,m|v|$ and no spin; hitting further out gives a smaller impulse and more spin.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A uniform rod of mass $2.0\\,\\text{kg}$ and length $1.2\\,\\text{m}$ ($I = \\tfrac{1}{12}mL^2$ about its center) falls flat, without spinning, at $3.0\\,\\text{m/s}$ and lands with one **end** on a fixed ledge. The normal is straight up and $e = 0.50$. What is the magnitude of the collision impulse $j$? Give 3 significant figures.',
      label: '$j =$',
      unit: 'N·s',
      answer: '2.25',
      answerTex: '2.25\\,\\text{N}\\cdot\\text{s}',
      tolerance: 0.02,
      hint: 'Compute $I$, then $\\vec{r} \\times \\hat{n}$ with $|\\vec{r}| = L/2$, then the denominator $\\frac{1}{m} + \\frac{(\\vec{r} \\times \\hat{n})^2}{I}$.',
      explanation: '$I = \\tfrac{1}{12}(2.0)(1.2)^2 = 0.24\\,\\text{kg}\\cdot\\text{m}^2$ and $\\vec{r} \\times \\hat{n} = 0.60\\,\\text{m}$. Denominator: $\\frac{1}{2.0} + \\frac{0.36}{0.24} = 0.50 + 1.50 = 2.0\\,\\text{kg}^{-1}$. So $j = \\frac{(1.5)(3.0)}{2.0} = 2.25\\,\\text{N}\\cdot\\text{s}$. Ignoring rotation gives $\\frac{4.5}{0.50} = 9.00\\,\\text{N}\\cdot\\text{s}$; forgetting the $(1 + e)$ gives $1.50\\,\\text{N}\\cdot\\text{s}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Order the steps for resolving one contact between two rigid bodies with impulses.',
      lines: [
        'Compute each contact point\'s velocity $\\vec{v} + \\vec{\\omega} \\times \\vec{r}$ and the relative velocity $\\vec{v}_{\\text{rel}}$',
        'Project onto the normal: $v_n = \\vec{v}_{\\text{rel}}\\cdot\\hat{n}$; if $v_n \\ge 0$, the bodies are separating, so stop',
        'Compute $j = -(1 + e)v_n$ divided by the inverse effective mass',
        'Apply $\\pm j\\hat{n}$ to the linear and angular velocities of both bodies',
        'Compute and clamp the friction impulse $|j_t| \\le \\mu j$, then apply it along $\\hat{t}$',
      ],
      explanation: 'You need the contact-point velocities before you can project them; the separating check prevents "sticky" contacts that pull bodies together; $j$ needs $v_n$; and the friction clamp needs the normal impulse $j$, so friction comes last. (Engines that iterate apply these steps to every contact, several times per step.)',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Penetration, resting contact and a bouncing ball',
      blocks: [
        {
          type: 'p',
          text: 'Because collisions are only checked at step boundaries, a falling ball is usually found already **inside** the floor. The impulse fixes the velocity, but the overlap remains, and over many frames resting objects would slowly sink. Engines add [[phys-penetration-correction|penetration correction]]: move the bodies apart along $\\hat{n}$, splitting the move in proportion to their inverse masses so that heavy objects move less.',
        },
        {
          type: 'math',
          tex: '\\Delta\\vec{x}_A = -\\frac{m_A^{-1}}{m_A^{-1} + m_B^{-1}}\\,\\beta\\max(\\text{depth} - \\text{slop}, 0)\\,\\hat{n}, \\qquad \\Delta\\vec{x}_B = +\\frac{m_B^{-1}}{m_A^{-1} + m_B^{-1}}\\,\\beta\\max(\\text{depth} - \\text{slop}, 0)\\,\\hat{n}',
          caption: 'Typical values: $\\beta \\approx 0.2$–$0.8$ (correct a fraction per step to avoid jitter) and a slop of a millimeter or so (allow a tiny overlap so resting contacts stay in contact).',
        },
        {
          type: 'code',
          title: 'bounce.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };
Vec2 operator+(Vec2 a, Vec2 b) { return {a.x + b.x, a.y + b.y}; }
Vec2 operator-(Vec2 a, Vec2 b) { return {a.x - b.x, a.y - b.y}; }
Vec2 operator*(double s, Vec2 a) { return {s * a.x, s * a.y}; }
double dot(Vec2 a, Vec2 b) { return a.x * b.x + a.y * b.y; }

struct Body { Vec2 pos, vel; double invMass; };   // invMass = 0: immovable

// Contact normal n points from A to B; depth > 0 means they overlap.
void resolve(Body& A, Body& B, Vec2 n, double depth, double e) {
    double vn = dot(B.vel - A.vel, n);             // relative normal velocity
    if (vn < 0) {                                  // approaching: apply impulse
        double j = -(1 + e) * vn / (A.invMass + B.invMass);
        A.vel = A.vel - (j * A.invMass) * n;
        B.vel = B.vel + (j * B.invMass) * n;
    }
    // Positional correction: push apart, split by inverse mass (80%, 1 mm slop)
    double corr = 0.8 * std::fmax(depth - 0.001, 0.0) / (A.invMass + B.invMass);
    A.pos = A.pos - (corr * A.invMass) * n;
    B.pos = B.pos + (corr * B.invMass) * n;
}

int main() {
    const double h = 1.0 / 120.0, g = 9.80, r = 0.10, e = 0.80;
    Body ground{{0, 0}, {0, 0}, 0.0};              // the plane y = 0
    Body ball{{0, 2.00}, {0, 0}, 1.0 / 0.50};      // 0.50 kg, dropped from 2.00 m
    double H0 = ball.pos.y - r;                    // initial drop height of its bottom
    int bounce = 0;
    for (int step = 0; step < 2400 && bounce < 4; ++step) {
        double vyBefore = ball.vel.y;
        ball.vel.y -= g * h;                       // semi-implicit Euler
        ball.pos = ball.pos + h * ball.vel;
        double depth = r - ball.pos.y;             // narrow phase: sphere vs plane
        if (depth > 0) resolve(ground, ball, {0, 1}, depth, e);
        if (vyBefore > 0 && ball.vel.y <= 0) {     // passed the top of a bounce
            ++bounce;
            std::printf("bounce %d: apex %.3f m (ideal e^%d H0 = %.3f m)\\n",
                        bounce, ball.pos.y - r, 2 * bounce, std::pow(e, 2 * bounce) * H0);
        }
    }
}`,
          output: `bounce 1: apex 1.195 m (ideal e^2 H0 = 1.216 m)
bounce 2: apex 0.739 m (ideal e^4 H0 = 0.778 m)
bounce 3: apex 0.459 m (ideal e^6 H0 = 0.498 m)
bounce 4: apex 0.278 m (ideal e^8 H0 = 0.319 m)`,
          annotations: [
            { lines: '13-19', text: 'The impulse formula from this lesson, written with inverse masses. The ground has `invMass = 0`, so it never moves.' },
            { lines: '20-23', text: 'Penetration correction: $80\\%$ of the overlap beyond a $1\\,\\text{mm}$ slop, split by inverse mass.' },
            { lines: '34-37', text: 'One fixed step: semi-implicit Euler, then a sphere-vs-plane narrow phase, then the response.' },
            { lines: '38-42', text: 'Each bounce with restitution $e$ keeps $e^2$ of the rebound energy, so ideal apex heights fall as $e^{2k}H_0$.' },
          ],
        },
        {
          type: 'p',
          text: 'The simulated bounces come out low, by about $2\\%$ on the first bounce and growing to about $13\\%$ by the fourth. The cause is the discrete step: the impact is only noticed at the end of a step, after the ball has sunk into the floor. Rerun with $h = 1/2000\\,\\text{s}$ and the apexes agree with $e^{2k}H_0$ to within about $1\\%$; remove the positional correction and they come out lower still.',
        },
        {
          type: 'deepdive',
          title: 'Stacks and many contacts: sequential impulses',
          blocks: [
            {
              type: 'p',
              text: 'A box resting on another box has several contact points, each affecting the others. Engines such as Box2D solve them with **sequential impulses**: loop over all contacts several times per step (say $4$–$10$ iterations), each time computing the impulse that fixes that contact given the current velocities. To keep the result stable, the solver clamps the **accumulated** normal impulse of each contact to be non-negative rather than each increment, and "warm starts" each step with last step\'s impulses. Iterating this way converges toward the solution of the whole system of contact constraints.',
            },
            {
              type: 'p',
              text: 'Instead of moving positions directly, many solvers feed the penetration back into the velocity solve as a small bias velocity, $\\frac{\\beta}{h}\\max(\\text{depth} - \\text{slop}, 0)$, which gently pushes bodies apart over a few steps (Baumgarte stabilization).',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'Two balls collide head-on. Tap the first line with a mistake.',
      lines: [
        '$\\hat{n} = (1, 0)$ points from $A$ to $B$; $\\vec{v}_A = (4, 0)\\,\\text{m/s}$, $\\vec{v}_B = (-2, 0)\\,\\text{m/s}$, $m_A = 1.0\\,\\text{kg}$, $m_B = 3.0\\,\\text{kg}$, $e = 0.50$.',
        '$v_n = (\\vec{v}_B - \\vec{v}_A)\\cdot\\hat{n} = -6.0\\,\\text{m/s}$, so the balls are approaching.',
        '$j = \\dfrac{-(1 + e)v_n}{1/m_A + 1/m_B} = \\dfrac{(1.5)(6.0)}{1.0 + 0.333} = 6.75\\,\\text{N}\\cdot\\text{s}$.',
        '$\\vec{v}_A\' = \\vec{v}_A + \\dfrac{j}{m_A}\\hat{n} = (10.75, 0)\\,\\text{m/s}$.',
        '$\\vec{v}_B\' = \\vec{v}_B + \\dfrac{j}{m_B}\\hat{n} = (0.25, 0)\\,\\text{m/s}$.',
      ],
      errorLines: [4],
      explanation: 'Line 4 applies the impulse to $A$ with the wrong sign. $B$ receives $+j\\hat{n}$, so by Newton\'s third law $A$ receives $-j\\hat{n}$: $\\vec{v}_A\' = (4 - 6.75, 0) = (-2.75, 0)\\,\\text{m/s}$. Checks with the correct value: momentum $1.0(-2.75) + 3.0(0.25) = -2.0 = 1.0(4) + 3.0(-2)$ ✓, and separation speed $0.25 - (-2.75) = 3.0 = 0.50 \\times 6.0$ ✓. The sign error would create momentum out of nothing: a classic source of "exploding" stacks.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Tunneling and continuous collision detection',
      blocks: [
        {
          type: 'p',
          text: 'Discrete detection only looks at positions at the ends of steps. A fast, small object can be in front of a thin wall at one step and behind it at the next, never overlapping it at a checked instant. This is [[phys-tunneling|tunneling]], the "bullet through paper" problem.',
        },
        {
          type: 'figure',
          svg: FIG_TUNNEL,
          alt: 'Top: a ball sampled at times t0 to t5, moving right; at t2 it is just in front of a thin wall and at t3 just behind it, never overlapping. Bottom: a swept test covers the whole path of the ball during the step as a capsule, finds the point where it first touches the wall (green, at impact), and the end-of-step position is never reached.',
          caption: 'Top: the discrete test misses the wall entirely. Bottom: a swept test treats the step as a continuous motion and finds when the ball first touches the wall.',
        },
        {
          type: 'derivation',
          title: 'When is a collision guaranteed to be caught?',
          steps: [
            { tex: '\\text{overlap zone width} = w + 2r', why: 'A sphere of radius $r$ overlaps a wall of thickness $w$ whenever its center is within $r$ of either face: a band of width $w + 2r$.' },
            { tex: '\\text{center moves } vh \\text{ per step}', why: 'Consecutive samples of the center are $vh$ apart along the motion (for motion straight at the wall).' },
            { tex: 'vh \\le w + 2r \\iff v \\le \\frac{w + 2r}{h}', why: 'If the samples are no farther apart than the band is wide, at least one of them must land inside it.' },
          ],
          result: 'A rifle bullet at $900\\,\\text{m/s}$ moves $15\\,\\text{m}$ per $60\\,\\text{Hz}$ step: it would skip through almost any wall in the level.',
        },
        {
          type: 'p',
          text: '[[phys-ccd|Continuous collision detection]] considers the motion between steps. The simplest version sweeps a sphere along its path: a sphere whose center is a distance $d_0$ in front of a plane and moves toward it with normal speed $u$ first touches it at time $t_{\\text{hit}} = (d_0 - r)/u$. If $t_{\\text{hit}} < h$, the engine moves the body to the contact, resolves the collision there, and continues. For example, a $0.10\\,\\text{m}$ ball whose center is $0.50\\,\\text{m}$ from a wall and closes at $40\\,\\text{m/s}$ hits at $t = 0.40/40 = 0.010\\,\\text{s}$, $60\\%$ of the way through a $1/60\\,\\text{s}$ step.',
        },
        {
          type: 'list',
          items: [
            '**Hitscan and ray casts.** Shooters usually don\'t simulate bullets as bodies at all: a hitscan weapon casts a ray at the moment of firing, and a ballistic projectile casts a ray (or sweeps a sphere) from its previous position to its new one every step, so nothing in between is missed.',
            '**PhysX** offers sweep-based CCD per body (`eENABLE_CCD`) and cheaper speculative CCD (`eENABLE_SPECULATIVE_CCD`), which adds contacts that *might* occur during the step. Unity, built on PhysX, exposes these as the Rigidbody modes Discrete, Continuous, Continuous Dynamic and Continuous Speculative.',
            '**Jolt** (open source, used in *Horizon Forbidden West*) lets each body choose a motion quality: `Discrete` or `LinearCast`, which casts the body\'s shape along its motion each step.',
            '**Havok**, the long-running commercial engine behind many AAA titles, and **Chaos** in Unreal Engine 5 provide equivalent continuous-collision options, typically enabled only for small, fast objects because sweeping costs more than a static test.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Everything in this lesson is momentum physics',
          text: 'Strip away the code and every step is something you derived earlier in the course: impulse–momentum ($\\Delta\\vec{p} = \\vec{J}$), Newton\'s third law ($\\pm j\\hat{n}$), the coefficient of restitution, Coulomb friction ($f \\le \\mu n$), and $\\Delta\\vec{L} = \\vec{r} \\times \\vec{J}$. An engine programmer\'s job is to apply that physics robustly, many thousands of times per frame, with finite timesteps and finite floating-point precision.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A ball of radius $0.10\\,\\text{m}$ flies straight at a wall $0.050\\,\\text{m}$ thick. The physics runs at $60\\,\\text{Hz}$ with discrete collision detection only. Above what speed is the hit no longer guaranteed to be detected? Give 2 significant figures.',
      label: '$v_{\\max} =$',
      unit: 'm/s',
      answer: '(0.05 + 2*0.1)*60',
      answerTex: '15\\,\\text{m/s}',
      tolerance: 0.1,
      hint: 'The center must land inside a band of width $w + 2r$ at some step, and it moves $vh$ per step.',
      explanation: 'Detection is guaranteed while $vh \\le w + 2r = 0.050 + 0.20 = 0.25\\,\\text{m}$. With $h = 1/60\\,\\text{s}$, $v_{\\max} = 0.25 \\times 60 = 15\\,\\text{m/s}$, which is only $54\\,\\text{km/h}$, slower than a thrown baseball. Using just the wall thickness gives $3.0\\,\\text{m/s}$; using $r$ instead of $2r$ gives $9.0\\,\\text{m/s}$. Fast objects need CCD, substeps or ray casts.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'In your shooter, grenades ($v \\approx 20\\,\\text{m/s}$) sometimes pass through thin doors, and rifle bullets ($900\\,\\text{m/s}$) must never pass through anything. Which design is most sensible?',
      options: [
        { text: 'Raise the physics rate to 2000 Hz for the whole game', why: 'That would work for the grenades but multiplies the cost of every body in the world by more than 30, and bullets would still move $0.45\\,\\text{m}$ per step.' },
        { text: 'Enable CCD (a swept test) on grenades, and handle bullets with a ray cast from the previous position to the new one each step', correct: true, why: 'Pay for continuous detection only on the few small, fast objects. For bullets, a ray (or swept sphere) per step is cheap and exact, the standard approach for projectiles.' },
        { text: 'Make doors and walls thicker than the distance a bullet travels in one step', why: 'At $900\\,\\text{m/s}$ and 60 Hz that is $15\\,\\text{m}$ of wall. Thickening collision geometry also breaks gameplay.' },
        { text: 'Increase the coefficient of restitution of doors so objects bounce off', why: 'Restitution only matters once a contact is detected. Tunneling means no contact is ever found, so the response settings never run.' },
      ],
      explanation: 'Tunneling is a detection problem, not a response problem. The cost-effective fix is targeted: continuous collision detection for the handful of small, fast dynamic bodies (engines expose this as a per-body flag), and ray casts or sweeps for projectiles, whose path is essentially a line segment per step.',
    },
  ],
  takeaways: [
    'Each fixed step: integrate velocities, find candidate pairs in the broad phase (AABB tests: intervals must overlap on every axis), find contacts in the narrow phase (spheres: $d < r_A + r_B$, $\\hat{n} = (\\vec{c}_B - \\vec{c}_A)/d$, depth $= r_A + r_B - d$), solve, integrate positions, fix penetration.',
    'Momentum conservation plus the restitution law give the impulse $j = -(1 + e)\\,v_n/(m_A^{-1} + m_B^{-1})$, applied as $-j\\hat{n}$ to $A$ and $+j\\hat{n}$ to $B$, and only when $v_n < 0$. Storing inverse masses makes static bodies ($m^{-1} = 0$) free.',
    'Friction is a tangential impulse that would stop the sliding, clamped to $|j_t| \\le \\mu j$.',
    'With rotation, use contact-point velocities $\\vec{v} + \\vec{\\omega} \\times \\vec{r}$ and add $(\\vec{r} \\times \\hat{n})^2/I$ per body to the denominator; the impulse also changes the spin by $j(\\vec{r} \\times \\hat{n})/I$.',
    'Discrete steps leave bodies overlapping: push them apart along $\\hat{n}$ in proportion to inverse mass (with a slop), and iterate impulses over all contacts for stacks.',
    'A body tunnels when $vh > w + 2r$. Continuous collision detection (sweeps, speculative contacts) or ray casts prevent it; PhysX, Jolt, Havok and Chaos enable it per body for small, fast objects.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 9: Linear Momentum and Collisions',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'The impulse–momentum theorem and collision types that every formula in this lesson is built on.',
    },
    {
      title: 'Wikipedia: Collision response',
      url: 'https://en.wikipedia.org/wiki/Collision_response',
      source: 'wikipedia',
      note: 'The impulse-based reaction model with rotation and friction, written in the same notation as this lesson.',
    },
    {
      title: 'Wikipedia: Collision detection',
      url: 'https://en.wikipedia.org/wiki/Collision_detection',
      source: 'wikipedia',
      note: 'Broad and narrow phase, bounding volumes, and a posteriori (discrete) versus a priori (continuous) detection.',
    },
    {
      title: 'Glenn Fiedler: Fix Your Timestep!',
      url: 'https://gafferongames.com/post/fix_your_timestep/',
      source: 'other',
      note: 'The fixed-step loop that the collision pipeline in this lesson runs inside.',
    },
  ],
};
