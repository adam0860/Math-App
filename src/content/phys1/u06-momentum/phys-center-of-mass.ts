import type { Lesson } from '../../types';

const FIG_LSHAPE = /*svg:phys-u06/f5.svg*/`<svg viewBox="0 0 330 300" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="195" width="220" height="55" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/><rect x="60" y="30" width="55" height="165" fill="currentColor" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/><circle cx="170" cy="222.5" r="4.5" fill="currentColor" class="f-blue"/><text x="178.0" y="216.5" font-size="12" text-anchor="start" class="t-blue">(2, 0.5)</text><circle cx="87.5" cy="112.5" r="4.5" fill="currentColor" class="f-orange"/><text x="95.5" y="106.5" font-size="12" text-anchor="start" class="t-orange">(0.5, 2.5)</text><line x1="170" y1="222.5" x2="87.5" y2="112.5" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="134.6" cy="175.4" r="6" fill="currentColor" class="f-purple"/><text x="144.6" y="169.4" font-size="13" text-anchor="start" class="t-purple" font-weight="bold">CM (1.36, 1.36)</text><text x="230.5" y="235.8" font-size="12" text-anchor="start">area 4</text><text x="87.5" y="68.0" font-size="12" text-anchor="middle">area 3</text><text x="60.0" y="268.0" font-size="11" text-anchor="middle" class="t-gray">0</text><text x="115.0" y="268.0" font-size="11" text-anchor="middle" class="t-gray">1</text><text x="170.0" y="268.0" font-size="11" text-anchor="middle" class="t-gray">2</text><text x="225.0" y="268.0" font-size="11" text-anchor="middle" class="t-gray">3</text><text x="280.0" y="268.0" font-size="11" text-anchor="middle" class="t-gray">4</text><text x="50.0" y="199.0" font-size="11" text-anchor="end" class="t-gray">1</text><text x="50.0" y="144.0" font-size="11" text-anchor="end" class="t-gray">2</text><text x="50.0" y="89.0" font-size="11" text-anchor="end" class="t-gray">3</text><text x="50.0" y="34.0" font-size="11" text-anchor="end" class="t-gray">4</text><text x="170.0" y="286.0" font-size="12" text-anchor="middle" class="t-gray">x (m)</text></svg>`;

// Thrown dumbbell: masses a (kg) and 1 kg, 0.9 m apart, centre of mass launched at (6, 8) m/s, spinning at 6 rad/s.
const CX = '6s';
const CY = '8s - 4.9s^2';
const R1 = '0.9/(a + 1)';
const R2 = '0.9a/(a + 1)';

// Exploding shell: launched at (300, 98/3) m/s, apex at T = 10/3 s and x = 1000 m; piece A (fraction f) is left at rest there.
const TOP = '10/3';
const MS = `min(s, ${TOP})`;
const TAU = `max(min(s, 20/3) - ${TOP}, 0)`;
const YS = `(98/3)*${MS} - 4.9*${MS}^2 - 4.9*${TAU}^2`;

export const lesson: Lesson = {
  id: 'phys-center-of-mass',
  title: 'Center of Mass and Systems of Particles',
  summary: 'Every system, however it spins, flexes or explodes, has one point that moves as if all the mass were there and all the external forces acted on it. Find it by sums and integrals, then use it to understand thrown tools, exploding shells and rockets.',
  minutes: 20,
  objectives: [
    'Compute the center of mass of a set of particles in one and two dimensions',
    'Find the center of mass of continuous objects by integration and by combining simple pieces',
    'Show that $M\\vec v_{\\text{cm}} = \\vec P$ and $M\\vec a_{\\text{cm}} = \\vec F_{\\text{ext}}$, and use them to predict the motion of the center of mass',
    'Analyze explosions with momentum conservation and the unchanged motion of the center of mass',
    'Derive the rocket equation $\\Delta v = u\\ln(M_i/M_f)$ from momentum conservation for a variable-mass system',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The center of mass of a system of particles',
      blocks: [
        {
          type: 'p',
          text: 'You met the [[calc2-center-of-mass|center of mass]] in Calculus II as a balance point. Physics gives it a starring role: it is the one point of a system whose motion is simple. Start with point masses $m_1, m_2, \\ldots$ at positions $\\vec r_1, \\vec r_2, \\ldots$, with total mass $M = \\sum m_i$.',
        },
        {
          type: 'theorem',
          name: 'Center of mass of particles',
          tex: '\\vec r_{\\text{cm}} = \\frac{1}{M}\\sum_i m_i \\vec r_i, \\qquad x_{\\text{cm}} = \\frac{\\sum m_i x_i}{M}, \\quad y_{\\text{cm}} = \\frac{\\sum m_i y_i}{M}',
          text: 'A mass-weighted average of the positions. Each numerator $\\sum m_i x_i$ is the [[calc2-moment|moment]] about the origin. The CM sits closer to the heavier masses and always lies within the smallest convex region containing all the particles.',
        },
        {
          type: 'graph',
          x: [-4.5, 5.5],
          y: [-2.5, 4.5],
          equal: true,
          height: 280,
          points: [
            { x: -3, y: 0, color: 'blue', label: 'm₁' },
            { x: 2, y: 3, color: 'orange', label: 'm₂' },
            { x: 4, y: -1, color: 'green', label: 'm₃' },
            { x: '(-3a + 2b + 4c)/(a + b + c)', y: '(3b - c)/(a + b + c)', color: 'purple', label: 'CM' },
          ],
          segments: [
            { from: [-3, 0], to: [2, 3], color: 'gray', dashed: true },
            { from: [2, 3], to: [4, -1], color: 'gray', dashed: true },
            { from: [4, -1], to: [-3, 0], color: 'gray', dashed: true },
          ],
          sliders: [
            { name: 'a', min: 0.5, max: 10, step: 0.5, value: 2, label: '$m_1$ (kg) at $(-3, 0)$' },
            { name: 'b', min: 0.5, max: 10, step: 0.5, value: 2, label: '$m_2$ (kg) at $(2, 3)$' },
            { name: 'c', min: 0.5, max: 10, step: 0.5, value: 2, label: '$m_3$ (kg) at $(4, -1)$' },
          ],
          readouts: [
            { label: '$x_{\\text{cm}} =$', expr: '(-3a + 2b + 4c)/(a + b + c)', digits: 2 },
            { label: '$y_{\\text{cm}} =$', expr: '(3b - c)/(a + b + c)', digits: 2 },
          ],
          caption: 'Positions in metres. With equal masses the CM is the centroid of the triangle. Make one mass large and the CM slides toward it, but never leaves the triangle.',
        },
        {
          type: 'derivation',
          title: 'The Earth–Moon barycenter',
          steps: [
            { tex: 'x_{\\text{cm}} = \\frac{M_E(0) + M_M d}{M_E + M_M}', why: 'Put Earth\'s center at the origin and the Moon at $x = d$, treating each as a point mass.' },
            { tex: '= \\frac{(7.35 \\times 10^{22})(3.84 \\times 10^{8}\\,\\text{m})}{5.97 \\times 10^{24} + 7.35 \\times 10^{22}}', why: 'Masses in kg; mean Earth–Moon distance $3.84 \\times 10^8\\,\\text{m}$.' },
            { tex: '= 4.67 \\times 10^{6}\\,\\text{m}', why: 'Smaller than Earth\'s radius, $6.37 \\times 10^6\\,\\text{m}$.' },
          ],
          result: 'Earth and Moon both orbit a point about $4700\\,\\text{km}$ from Earth\'s center, inside Earth. Earth wobbles around it once a month, a motion astronomers use (with stars instead of moons) to detect exoplanets.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Three small parts of a drone frame have masses $2.0\\,\\text{kg}$ at $(1, 2)\\,\\text{m}$, $3.0\\,\\text{kg}$ at $(4, -1)\\,\\text{m}$ and $5.0\\,\\text{kg}$ at $(-2, 3)\\,\\text{m}$. Find the $x$-coordinate of their center of mass.',
      hint: '$x_{\\text{cm}} = \\dfrac{m_1x_1 + m_2x_2 + m_3x_3}{m_1 + m_2 + m_3}$; watch the negative coordinate.',
      answer: '(2*1 + 3*4 + 5*(-2))/10',
      answerTex: '0.40\\,\\text{m}',
      tolerance: 0.005,
      label: '$x_{\\text{cm}} =$',
      unit: 'm',
      explanation: '$x_{\\text{cm}} = \\dfrac{2.0(1) + 3.0(4) + 5.0(-2)}{10.0} = \\dfrac{2 + 12 - 10}{10} = 0.40\\,\\text{m}$. (Similarly $y_{\\text{cm}} = \\dfrac{4 - 3 + 15}{10} = 1.6\\,\\text{m}$.) Dropping the minus sign on $x_3$ gives $2.4\\,\\text{m}$; forgetting to divide by $M$ gives $4$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Continuous objects: sums become integrals',
      blocks: [
        {
          type: 'p',
          text: 'A rod, a plate or a car body is a continuum. Chop it into tiny pieces of mass $dm$, treat each as a particle, and let the pieces shrink: the sums become integrals. For a thin rod along $x$ with linear density $\\lambda(x)$ (mass per length), each slice has $dm = \\lambda(x)\\,dx$.',
        },
        {
          type: 'theorem',
          name: 'Center of mass of a continuous object',
          tex: '\\vec r_{\\text{cm}} = \\frac{1}{M}\\int \\vec r\\,dm, \\qquad \\text{rod: } x_{\\text{cm}} = \\frac{\\int_0^L x\\,\\lambda(x)\\,dx}{\\int_0^L \\lambda(x)\\,dx}',
          text: 'For a uniform object the center of mass is the geometric centroid. **Symmetry** does much of the work: the CM lies on every axis or plane of symmetry, so a uniform rod, disk, sphere or box has its CM at its geometric center.',
        },
        {
          type: 'derivation',
          title: 'A tapered rod: $\\lambda(x) = \\lambda_0\\left(1 + \\dfrac{x}{L}\\right)$ for $0 \\le x \\le L$',
          steps: [
            { tex: 'M = \\int_0^L \\lambda_0\\left(1 + \\frac{x}{L}\\right)dx = \\lambda_0\\left(L + \\frac{L}{2}\\right) = \\frac32\\lambda_0 L', why: 'Total mass: integrate the density over the length.' },
            { tex: '\\int_0^L x\\lambda\\,dx = \\lambda_0\\int_0^L \\left(x + \\frac{x^2}{L}\\right)dx = \\lambda_0\\left(\\frac{L^2}{2} + \\frac{L^2}{3}\\right) = \\frac56\\lambda_0L^2', why: 'The moment: weight each slice\'s position by its mass.' },
            { tex: 'x_{\\text{cm}} = \\frac{\\frac56\\lambda_0L^2}{\\frac32\\lambda_0L} = \\frac59 L \\approx 0.556\\,L', why: 'Divide the moment by the mass; $\\lambda_0$ cancels.' },
          ],
          result: 'The CM is past the midpoint, toward the heavy end, as it should be. A uniform rod ($\\lambda$ constant) would give exactly $L/2$.',
        },
        {
          type: 'graph',
          x: [-0.05, 1.05],
          y: [0, 6],
          xStep: 0.1,
          yStep: 1,
          height: 240,
          functions: [{ expr: '1 + k*x', domain: [0, 1], label: 'density $\\lambda(x) = \\lambda_0(1 + kx)$, with $\\lambda_0 = 1$ and $L = 1$' }],
          areas: [{ expr: '1 + k*x', from: 0, to: 1, color: 'blue' }],
          vlines: [{ x: '(1/2 + k/3)/(1 + k/2)', label: 'CM', color: 'purple' }],
          sliders: [{ name: 'k', min: -0.9, max: 5, step: 0.05, value: 1, label: 'taper $k$' }],
          readouts: [{ label: '$x_{\\text{cm}}/L = \\dfrac{1/2 + k/3}{1 + k/2} =$', expr: '(1/2 + k/3)/(1 + k/2)', digits: 3 }],
          caption: '$k = 0$ is a uniform rod, CM at $0.5$; $k = 1$ is the worked example, $5/9 \\approx 0.556$. However large $k$ gets, the CM stays below $2/3$, the limit for a density proportional to $x$.',
        },
        {
          type: 'p',
          text: 'For shapes built from simple pieces, skip the integral: find each piece\'s CM (often by symmetry), then treat each piece as a particle carrying its whole mass. Here is a uniform L-shaped steel plate, split into two rectangles. With uniform thickness, mass is proportional to area.',
        },
        {
          type: 'figure',
          svg: FIG_LSHAPE,
          alt: 'An L-shaped plate made of a 4 by 1 horizontal rectangle (area 4, center (2, 0.5)) and a 1 by 3 vertical rectangle on top of its left end (area 3, center (0.5, 2.5)). The combined center of mass at (1.36, 1.36) lies on the line joining the two centers, outside the plate.',
          caption: '$x_{\\text{cm}} = \\frac{4(2) + 3(0.5)}{7} = 1.36$, $y_{\\text{cm}} = \\frac{4(0.5) + 3(2.5)}{7} = 1.36$. The CM is in the empty corner, not on the plate at all.',
          maxWidth: 300,
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The CM can lie outside the object',
          text: 'A ring\'s CM is at its empty center; a boomerang\'s is in the air between its arms. High jumpers exploit this: in the Fosbury flop the body arches over the bar while the jumper\'s CM passes *under* it, so a jumper clears a bar higher than their CM ever rises.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'A rod of length $L$ has density $\\lambda(x) = cx^2$ (heaviest at the far end), for $0 \\le x \\le L$. Find $x_{\\text{cm}}$ in terms of $L$.',
      hint: 'Compute $\\int_0^L x \\cdot cx^2\\,dx$ and $\\int_0^L cx^2\\,dx$, then divide. The constant $c$ cancels.',
      answer: '3L/4',
      answerTex: 'x_{\\text{cm}} = \\tfrac34 L',
      variables: ['L'],
      domain: [0.5, 3],
      label: '$x_{\\text{cm}} =$',
      explanation: 'Mass: $\\int_0^L cx^2\\,dx = \\dfrac{cL^3}{3}$. Moment: $\\int_0^L cx^3\\,dx = \\dfrac{cL^4}{4}$. So $x_{\\text{cm}} = \\dfrac{cL^4/4}{cL^3/3} = \\dfrac34 L$. Sanity check: more mass near $x = L$ pulls the CM past the midpoint, but it must stay inside the rod.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'How the center of mass moves',
      blocks: [
        {
          type: 'p',
          text: 'Here is why the CM matters so much. Differentiate its definition with respect to time.',
        },
        {
          type: 'derivation',
          title: 'Newton\'s second law for a system',
          steps: [
            { tex: 'M\\vec r_{\\text{cm}} = \\sum_i m_i\\vec r_i', why: 'Multiply the definition by $M$.' },
            { tex: 'M\\vec v_{\\text{cm}} = \\sum_i m_i\\vec v_i = \\vec P', why: 'Differentiate once (masses constant): the total momentum is the total mass times the CM velocity.' },
            { tex: 'M\\vec a_{\\text{cm}} = \\frac{d\\vec P}{dt} = \\sum_i \\vec F_{\\text{on } i}', why: 'Differentiate again and use $d\\vec p_i/dt = \\vec F_{\\text{on } i}$.' },
            { tex: 'M\\vec a_{\\text{cm}} = \\vec F_{\\text{ext}}', why: 'Each force on particle $i$ is either external or internal; internal forces come in third-law pairs and cancel in the sum.' },
          ],
          result: 'The center of mass moves like a single particle of mass $M$ acted on by the net **external** force alone. Internal forces, however violent, cannot move it.',
        },
        {
          type: 'p',
          text: 'Throw a wrench, a rifle or a dumbbell spinning through the air. Each part follows a complicated looping path, but gravity is the only external force, so the CM follows the same parabola a thrown ball would. Press play.',
        },
        {
          type: 'graph',
          x: [-0.8, 10.8],
          y: [-0.8, 4.4],
          equal: true,
          height: 280,
          parametric: [
            { x: '6t', y: '8t - 4.9t^2', t: [0, 1.632], color: 'purple', dashed: true, label: 'center of mass (a parabola)' },
            { x: `6t - ${R2}*cos(6t)`, y: `8t - 4.9t^2 - ${R2}*sin(6t)`, t: [0, 1.632], color: 'orange', label: 'path of the light end' },
          ],
          segments: [{ from: [`${CX} + ${R1}*cos(6s)`, `${CY} + ${R1}*sin(6s)`], to: [`${CX} - ${R2}*cos(6s)`, `${CY} - ${R2}*sin(6s)`], color: 'gray' }],
          points: [
            { x: `${CX} + ${R1}*cos(6s)`, y: `${CY} + ${R1}*sin(6s)`, color: 'blue' },
            { x: `${CX} - ${R2}*cos(6s)`, y: `${CY} - ${R2}*sin(6s)`, color: 'orange' },
            { x: CX, y: CY, color: 'purple' },
          ],
          sliders: [
            { name: 'a', min: 1, max: 5, step: 0.5, value: 2, label: 'mass of the blue end (kg); orange end is 1 kg' },
            { name: 's', min: 0, max: 1.63, step: 0.005, value: 0.5, label: 'time $t$ (s)', play: true, speed: 0.4 },
          ],
          readouts: [{ label: 'blue end\'s distance from the CM (m) $=$', expr: R1, digits: 3 }],
          caption: 'A spinning dumbbell, $0.9\\,\\text{m}$ long, shown in slow motion (positions in m). The ends loop around, but the purple CM traces a perfect parabola. Make the blue end heavier: the CM moves toward it, and the blue end\'s circle shrinks.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why engines store bodies at their center of mass',
          text: 'Rigid-body engines (PhysX, Havok, Jolt) store each body\'s position as its CM and its orientation separately. Then the update splits cleanly: $M\\vec a_{\\text{cm}} = \\vec F_{\\text{ext}}$ moves the CM like a particle, and torques about the CM spin the body (the rotation unit). Ragdolls are chains of such bodies joined by constraints, each integrated this way.',
        },
        {
          type: 'derivation',
          title: 'Two skaters push apart: 60 kg and 90 kg, initially at rest',
          steps: [
            { tex: '\\vec P = M\\vec v_{\\text{cm}} = 0 \\text{ before and after}', why: 'Ice is nearly frictionless, so there is no horizontal external force. The push is internal.' },
            { tex: '(60)(3.0\\,\\text{m/s}) + (90)\\,v_2 = 0 \\implies v_2 = -2.0\\,\\text{m/s}', why: 'If the lighter skater moves off at $3.0\\,\\text{m/s}$, the heavier one recoils the other way.' },
          ],
          result: 'The CM stays exactly where it was while the skaters glide apart; after any time $t$, $60(3.0t) + 90(-2.0t) = 0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'A firework shell is fired on a parabolic path and explodes into many fragments at the top of its flight. Ignoring air resistance, what path does the center of mass of all the fragments follow until the first fragment lands?',
      options: [
        { text: 'It continues along the original parabola', correct: true, why: 'The explosion forces are internal. The only external force is still gravity, so $M\\vec a_{\\text{cm}} = M\\vec g$ as before.' },
        { text: 'It stops and falls straight down', why: 'That would require an external horizontal impulse to cancel the shell\'s horizontal momentum. The explosion cannot supply one.' },
        { text: 'It follows the largest fragment', why: 'The CM is a weighted average of all the fragments; no single piece determines it.' },
        { text: 'It stays at the explosion point', why: 'Gravity still acts on every fragment, so the CM keeps accelerating downward at $g$ (and keeps its horizontal velocity).' },
      ],
      explanation: 'Internal forces cannot change the total momentum, so the CM velocity just after the explosion equals the shell\'s velocity just before, and gravity keeps acting on the system as a whole. The CM follows the original parabola. (Once a fragment hits the ground, the ground pushes on it, an external force, and the rule changes.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Explosions',
      blocks: [
        {
          type: 'p',
          text: 'An explosion is a collision run backward: one object becomes several, driven by internal forces from stored chemical energy. Momentum is conserved (the forces are internal and brief), but kinetic energy **increases**, supplied by the chemical energy.',
        },
        {
          type: 'derivation',
          title: 'A 12 kg shell bursts at the top of its flight',
          steps: [
            { tex: '\\text{Before: } P_x = (12\\,\\text{kg})(300\\,\\text{m/s}) = 3600\\,\\text{kg}\\cdot\\text{m/s}', why: 'At the top of the trajectory the velocity is purely horizontal.' },
            { tex: '\\text{After: } (4.0)(0) + (8.0)\\,v_B = 3600 \\implies v_B = 450\\,\\text{m/s}', why: 'The $4.0\\,\\text{kg}$ piece is left momentarily at rest (it then falls straight down). Momentum conservation fixes the other piece.' },
            { tex: '\\Delta K = \\tfrac12(8.0)(450)^2 - \\tfrac12(12)(300)^2 = 810 - 540 = 270\\,\\text{kJ}', why: 'The explosive supplied $270\\,\\text{kJ}$ of extra kinetic energy.' },
            { tex: 'x_{\\text{cm, land}} = 2000\\,\\text{m}: \\quad 4.0(1000) + 8.0\\,x_B = 12(2000) \\implies x_B = 2500\\,\\text{m}', why: 'Unexploded, the shell would land $2000\\,\\text{m}$ away (twice the apex distance). Both pieces start the fall with zero vertical velocity from the same height, so they land together, with their CM where the shell would have.' },
          ],
          result: 'The light piece drops at $1000\\,\\text{m}$ and the heavy piece lands at $2500\\,\\text{m}$, balanced about the original $2000\\,\\text{m}$ landing point.',
        },
        {
          type: 'graph',
          x: [-50, 3200],
          y: [0, 70],
          xStep: 500,
          yStep: 10,
          height: 260,
          parametric: [{ x: '300t', y: '(98/3)t - 4.9t^2', t: [0, '20/3'], color: 'purple', dashed: true, label: 'unexploded path (and the CM)' }],
          points: [
            { x: `300*${MS}`, y: YS, color: 'blue', label: 'A' },
            { x: `300*${MS} + 300/(1 - f)*${TAU}`, y: YS, color: 'orange', label: 'B' },
            { x: '300*min(s, 20/3)', y: YS, color: 'purple', label: 'CM' },
          ],
          sliders: [
            { name: 'f', min: 0.1, max: 0.9, step: 0.05, value: 0.35, label: 'mass fraction of piece A (left at rest)' },
            { name: 's', min: 0, max: 6.67, step: 0.01, value: 5, label: 'time $t$ (s)', play: true, speed: 1.6 },
          ],
          readouts: [
            { label: 'piece B speed after the burst (m/s) $=$', expr: '300/(1 - f)', digits: 0 },
            { label: 'piece B lands at $x$ (m) $=$', expr: '1000 + 1000/(1 - f)', digits: 0 },
          ],
          caption: 'Positions in metres. Before $t = 3.33\\,\\text{s}$ the three dots coincide. After the burst, A drops straight down and B races ahead, while the purple CM carries on along the original parabola, always balanced between them.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Momentum yes, kinetic energy no',
          text: 'In explosions, as in inelastic collisions, kinetic energy is not conserved: here it rises from $540\\,\\text{kJ}$ to $810\\,\\text{kJ}$. Always use momentum to relate the pieces; use energy only if you are told how much the explosion released.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A $5.0\\,\\text{kg}$ object at rest explodes into three pieces. A $2.0\\,\\text{kg}$ piece moves east at $6.0\\,\\text{m/s}$ and a $1.0\\,\\text{kg}$ piece moves north at $9.0\\,\\text{m/s}$. What is the **speed** of the third piece? Give 2 significant figures.',
      hint: 'The total momentum stays zero, so the third piece\'s momentum is $-(\\vec p_1 + \\vec p_2)$. Find its magnitude, then divide by the third piece\'s mass.',
      answer: 'sqrt(12^2 + 9^2)/2',
      answerTex: '7.5\\,\\text{m/s}',
      tolerance: 0.05,
      label: '$v_3 =$',
      unit: 'm/s',
      explanation: '$\\vec p_1 = 12\\,\\hat{\\imath}$ and $\\vec p_2 = 9.0\\,\\hat{\\jmath}\\ \\text{kg}\\cdot\\text{m/s}$, so $\\vec p_3 = -12\\,\\hat{\\imath} - 9.0\\,\\hat{\\jmath}$ with magnitude $\\sqrt{144 + 81} = 15\\,\\text{kg}\\cdot\\text{m/s}$. The third piece has mass $5.0 - 2.0 - 1.0 = 2.0\\,\\text{kg}$, so $v_3 = 7.5\\,\\text{m/s}$, heading south-west. Adding the momenta as scalars gives $21/2 = 10.5\\,\\text{m/s}$, which ignores that they point in different directions.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Variable mass: the rocket equation',
      blocks: [
        {
          type: 'p',
          text: 'A rocket in space has nothing to push against. It moves by throwing mass (exhaust) backward: a continuous explosion. Let the rocket have mass $M$ and velocity $v$, and let the exhaust leave at speed $u$ **relative to the rocket**. Track the momentum of the rocket plus the bit of fuel it is about to eject.',
        },
        {
          type: 'derivation',
          title: 'Deriving the rocket equation (no gravity or drag)',
          steps: [
            { tex: 't: \\quad P = Mv', why: 'Rocket plus unburned fuel, all moving at $v$.' },
            { tex: 't + dt: \\quad P = (M + dM)(v + dv) + (-dM)(v - u)', why: 'The rocket\'s mass changes by $dM < 0$; the ejected mass $-dM > 0$ moves at $v - u$ (backward relative to the rocket).' },
            { tex: 'Mv = Mv + M\\,dv + v\\,dM + dM\\,dv - v\\,dM + u\\,dM', why: 'No external force, so the two momenta are equal. Expand.' },
            { tex: 'M\\,dv = -u\\,dM', why: 'Cancel $Mv$ and $v\\,dM$, and drop $dM\\,dv$, a product of two infinitesimals.' },
            { tex: '\\int_{v_i}^{v_f} dv = -u\\int_{M_i}^{M_f} \\frac{dM}{M}', why: 'Separate variables and integrate (a [[separable-equation|separable]] differential equation).' },
            { tex: 'v_f - v_i = u\\ln\\frac{M_i}{M_f}', why: '$-u(\\ln M_f - \\ln M_i) = u\\ln(M_i/M_f)$.' },
          ],
          result: 'This is the [[phys-rocket-equation|rocket equation]] (Tsiolkovsky, 1903). The speed gained depends only on the exhaust speed and the mass ratio, not on how fast the fuel is burned.',
        },
        {
          type: 'p',
          text: 'Dividing $M\\,dv = -u\\,dM$ by $dt$ gives $M\\,\\frac{dv}{dt} = u\\left|\\frac{dM}{dt}\\right|$: the **thrust** is the exhaust speed times the rate at which mass is expelled.',
        },
        {
          type: 'graph',
          x: [1, 20],
          y: [0, 14],
          xStep: 2,
          yStep: 2,
          height: 260,
          functions: [{ expr: 'u*ln(x)', domain: [1, 20], label: '$\\Delta v = u\\ln(M_i/M_f)$ (km/s)' }],
          hlines: [{ y: 9.4, color: 'red', label: 'about 9.4 km/s to reach low orbit' }],
          vlines: [{ x: 'exp(9.4/u)', color: 'green', label: 'needed' }],
          sliders: [{ name: 'u', min: 2, max: 4.5, step: 0.1, value: 3, label: 'exhaust speed $u$ (km/s)' }],
          readouts: [{ label: 'mass ratio $M_i/M_f$ needed for $9.4\\,\\text{km/s}$ $=$', expr: 'exp(9.4/u)', digits: 1 }],
          caption: 'Horizontal axis: mass ratio $M_i/M_f$. The logarithm flattens out brutally: with kerosene–oxygen engines ($u \\approx 3\\,\\text{km/s}$) a single stage would need to be 96% propellant. That is why rockets use stages, discarding empty tanks so later stages do not haul dead mass.',
        },
        {
          type: 'derivation',
          title: 'A stage with $u = 3.0\\,\\text{km/s}$ and mass ratio 8',
          steps: [
            { tex: '\\Delta v = (3.0\\,\\text{km/s})\\ln 8 = 3.0 \\times 2.079 = 6.24\\,\\text{km/s}', why: 'Rocket equation. $\\ln 8 = 3\\ln 2$.' },
          ],
          result: 'Even with seven-eighths of the launch mass as fuel, one stage falls short of orbit.',
        },
        {
          type: 'p',
          text: 'You can check the logarithm without calculus: let the rocket eject its fuel in $n$ small bursts and apply momentum conservation to each one. As $n$ grows, the total converges to $u\\ln(M_i/M_f)$.',
        },
        {
          type: 'code',
          title: 'rocket.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

int main() {
    const double u = 3000.0;                 // exhaust speed relative to the rocket, m/s
    const double M0 = 8000.0, Mf = 1000.0;   // full and empty mass, kg

    for (int steps : {8, 80, 8000}) {
        double M = M0, v = 0.0;
        const double dm = (M0 - Mf) / steps; // fuel ejected per step, kg
        for (int i = 0; i < steps; ++i) {
            // Momentum conservation for one small burn, seen in the rocket's frame:
            // the ejected fuel dm leaves backward at u, so the rest gains dv = u dm / (M - dm).
            v += u * dm / (M - dm);
            M -= dm;
        }
        std::printf("%5d burns: v = %7.1f m/s\\n", steps, v);
    }
    std::printf("u ln(M0/Mf):  %7.1f m/s\\n", u * std::log(M0 / Mf));
}`,
          output: `    8 burns: v =  7563.8 m/s
   80 burns: v =  6355.1 m/s
 8000 burns: v =  6239.5 m/s
u ln(M0/Mf):   6238.3 m/s`,
          annotations: [
            { lines: 7, text: 'Mass ratio $8000/1000 = 8$, as in the worked example.' },
            { lines: '13-15', text: 'In the frame moving with the rocket, the burst $dm$ leaves at speed $u$ backward and the remaining mass $M - dm$ gains $dv$ forward: $(M - dm)\\,dv = u\\,dm$.' },
            { lines: 9, text: 'Fewer, bigger bursts overestimate (each burst pushes a lighter remaining rocket than the smooth burn does on average); many small bursts converge to the logarithm.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'From Tsiolkovsky to ICBMs',
          text: 'Konstantin Tsiolkovsky, a Russian schoolteacher, published the equation in 1903 and concluded that reaching space required multistage rockets. Every orbital launcher and ballistic missile since has been designed around his logarithm.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A small upper stage has exhaust speed $2.50\\,\\text{km/s}$. It burns from a mass of $1200\\,\\text{kg}$ down to $400\\,\\text{kg}$ in deep space. What speed does it gain, in m/s? Give 3 significant figures.',
      hint: '$\\Delta v = u\\ln(M_i/M_f)$ with $u = 2500\\,\\text{m/s}$ and the natural log.',
      answer: '2500*ln(3)',
      answerTex: '2.75 \\times 10^{3}\\,\\text{m/s}',
      tolerance: 20,
      label: '$\\Delta v =$',
      unit: 'm/s',
      explanation: '$\\Delta v = (2500\\,\\text{m/s})\\ln\\dfrac{1200}{400} = 2500\\ln 3 = 2500 \\times 1.0986 \\approx 2.75 \\times 10^{3}\\,\\text{m/s}$. Using $\\log_{10}$ gives $1190\\,\\text{m/s}$; multiplying by the mass ratio instead of its logarithm gives $7500\\,\\text{m/s}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'The center of mass of an object must always lie somewhere inside the material of the object.',
      answer: false,
      explanation: 'The CM is a weighted average position, and averages can land in empty space. A ring\'s CM is at its hollow center, an L-shaped plate\'s can sit in the missing corner, and a high jumper doing the Fosbury flop has a CM that passes beneath the bar while every part of the body goes over it.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A $3.0\\,\\text{m}$ rod has density $\\lambda(x) = 2x\\,\\text{kg/m}$ for $0 \\le x \\le 3$. A student finds its center of mass. Tap the first line that is wrong.',
      lines: [
        '$M = \\int_0^3 2x\\,dx = 9\\,\\text{kg}$',
        '$\\int_0^3 x \\cdot 2x\\,dx = \\tfrac23 x^3\\Big|_0^3 = 18\\,\\text{kg}\\cdot\\text{m}$',
        '$x_{\\text{cm}} = \\dfrac{18}{L} = \\dfrac{18}{3}$',
        '$x_{\\text{cm}} = 6\\,\\text{m}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 divides the moment by the length instead of the total mass. Correctly, $x_{\\text{cm}} = \\dfrac{18\\,\\text{kg}\\cdot\\text{m}}{9\\,\\text{kg}} = 2.0\\,\\text{m}$, two-thirds of the way along, toward the heavy end. The student\'s $6\\,\\text{m}$ is off the end of a $3\\,\\text{m}$ rod, which a quick sanity check would catch: the CM of a straight rod must lie on the rod.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the laws for a system of particles.',
      template: 'The total momentum of a system is $\\vec P = M\\,$___. Its center of mass accelerates according to $M\\vec a_{\\text{cm}} = $ ___, so ___ forces, such as those in an explosion, cannot change the motion of the center of mass.',
      blanks: [{ answers: ['$\\vec v_{\\text{cm}}$'] }, { answers: ['$\\vec F_{\\text{ext}}$'] }, { answers: ['internal'] }],
      wordBank: ['$\\vec v_{\\text{cm}}$', '$\\vec a_{\\text{cm}}$', '$\\vec F_{\\text{ext}}$', '$\\vec F_{\\text{int}}$', 'internal', 'external'],
      explanation: 'Differentiating $M\\vec r_{\\text{cm}} = \\sum m_i\\vec r_i$ gives $M\\vec v_{\\text{cm}} = \\vec P$, and differentiating again gives $M\\vec a_{\\text{cm}} = \\vec F_{\\text{ext}}$, because internal forces cancel in third-law pairs. That is why the CM of an exploding shell keeps following the parabola.',
    },
  ],
  takeaways: [
    'The center of mass is the mass-weighted average position: $\\vec r_{\\text{cm}} = \\frac1M\\sum m_i\\vec r_i$, or $\\frac1M\\int \\vec r\\,dm$ for continuous objects.',
    'Use symmetry and decomposition into simple pieces whenever you can; the CM can lie outside the material.',
    '$M\\vec v_{\\text{cm}} = \\vec P$ and $M\\vec a_{\\text{cm}} = \\vec F_{\\text{ext}}$: the CM moves like a single particle under the external forces alone.',
    'In explosions momentum is conserved and the CM keeps its path, while kinetic energy increases.',
    'Rockets obey $M\\,dv = -u\\,dM$, giving $\\Delta v = u\\ln(M_i/M_f)$; the logarithm is why orbital rockets need stages.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1 — Chapter 9: Linear Momentum and Collisions',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 9.6 and 9.7 cover the center of mass (including by integration) and rocket propulsion.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The momentum and center-of-mass weeks include worked problems on continuous bodies and rocket motion.',
    },
    {
      title: 'Wikipedia — Tsiolkovsky rocket equation',
      url: 'https://en.wikipedia.org/wiki/Tsiolkovsky_rocket_equation',
      source: 'wikipedia',
      note: 'Derivations, staging and real delta-v budgets for orbital launches.',
    },
  ],
};
