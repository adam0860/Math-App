import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_LADDER = `<svg viewBox="0 20 520 360" xmlns="http://www.w3.org/2000/svg">
<line x1="27" y1="80" x2="147" y2="80" class="s-teal" stroke-width="4"/>
<circle cx="27" cy="80" r="5" class="f-red"/><circle cx="147" cy="80" r="5" class="f-blue"/>
<text x="27" y="104" font-size="14" text-anchor="middle" font-style="italic">a</text><text x="147" y="104" font-size="14" text-anchor="middle" font-style="italic">b</text>
<text x="27" y="68" font-size="15" class="t-red" text-anchor="middle">−</text><text x="147" y="68" font-size="15" class="t-blue" text-anchor="middle">+</text>
<text x="87" y="138" font-size="14" font-weight="700" text-anchor="middle">Fundamental theorem</text>
<text x="87" y="155" font-size="12" text-anchor="middle">interval [a, b]</text>
<text x="87" y="170" font-size="12" text-anchor="middle">boundary: 2 points</text>
<polyline points="195.0,88.0 198.2,86.9 201.5,85.8 204.8,84.6 208.0,83.3 211.2,81.8 214.5,80.3 217.8,78.5 221.0,76.6 224.2,74.6 227.5,72.3 230.8,69.9 234.0,67.3 237.2,64.7 240.5,61.9 243.8,59.1 247.0,56.3 250.2,53.5 253.5,50.8 256.8,48.3 260.0,46.0 263.2,43.9 266.5,42.2 269.8,40.8 273.0,39.8 276.2,39.3 279.5,39.3 282.8,39.7 286.0,40.7 289.2,42.2 292.5,44.3 295.8,46.9 299.0,50.0 302.2,53.6 305.5,57.6 308.8,62.0 312.0,66.8 315.2,71.8 318.5,77.1 321.8,82.5 325.0,88.0" fill="none" class="s-teal" stroke-width="4"/>
<circle cx="195.0" cy="88.0" r="5" class="f-red"/><circle cx="325.0" cy="88.0" r="5" class="f-blue"/>
<text x="195.0" y="112.0" font-size="14" text-anchor="middle" font-style="italic">A</text><text x="325.0" y="112.0" font-size="14" text-anchor="middle" font-style="italic">B</text>
<text x="195.0" y="76.0" font-size="15" class="t-red" text-anchor="middle">−</text><text x="325.0" y="76.0" font-size="15" class="t-blue" text-anchor="middle">+</text>
<text x="260" y="138" font-size="14" font-weight="700" text-anchor="middle">Gradient theorem</text>
<text x="260" y="155" font-size="12" text-anchor="middle">curve C in space</text>
<text x="260" y="170" font-size="12" text-anchor="middle">boundary: 2 points</text>
<ellipse cx="433" cy="78" rx="62" ry="40" class="f-teal s-blue" fill-opacity="0.18" stroke-width="2.6"/>
<path d="M486.7,58.0 L495.8,62.8 L490.4,67.6 Z" class="f-blue"/>
<path d="M379.3,58.0 L383.0,48.4 L388.4,53.2 Z" class="f-blue"/>
<path d="M379.3,98.0 L370.2,93.2 L375.6,88.4 Z" class="f-blue"/>
<path d="M486.7,98.0 L483.0,107.6 L477.6,102.8 Z" class="f-blue"/>
<text x="433" y="84" font-size="16" font-style="italic" text-anchor="middle">D</text>
<text x="433" y="138" font-size="14" font-weight="700" text-anchor="middle">Green's theorem</text>
<text x="433" y="155" font-size="12" text-anchor="middle">flat region D</text>
<text x="433" y="170" font-size="12" text-anchor="middle">boundary: closed curve</text>
<path d="M100,300 A70,75 0 0,1 240,300 A70,18 0 0,1 100,300 Z" class="f-teal" fill-opacity="0.18"/>
<path d="M100,300 A70,75 0 0,1 240,300" fill="none" class="s-teal" stroke-width="1.6"/>
<path d="M100,300 A70,18 0 0,1 240,300" fill="none" class="s-blue" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M100,300 A70,18 0 0,0 240,300" fill="none" class="s-blue" stroke-width="2.6"/>
<path d="M170.0,318.0 L160.4,321.6 L160.4,314.4 Z" class="f-blue"/>
<line x1="170.0" y1="233.0" x2="170.0" y2="207.4" class="s-red" stroke-width="2.2"/><path d="M170.0,199.0 L173.6,208.6 L166.4,208.6 Z" class="f-red"/>
<text x="180" y="211" font-size="14" class="t-red" font-weight="700">n</text>
<text x="170" y="346" font-size="14" font-weight="700" text-anchor="middle">Stokes' theorem</text>
<text x="170" y="363" font-size="12" text-anchor="middle">surface S in space</text>
<text x="170" y="378" font-size="12" text-anchor="middle">boundary: closed curve</text>
<circle cx="360" cy="258" r="48" class="f-teal s-teal" fill-opacity="0.18" stroke-width="1.8"/>
<path d="M312,258 A48,14 0 0,0 408,258" fill="none" class="s-teal" stroke-width="1.2"/>
<path d="M312,258 A48,14 0 0,1 408,258" fill="none" class="s-teal" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="405.1" y1="241.6" x2="423.0" y2="235.1" class="s-red" stroke-width="2"/><path d="M429.5,232.7 L423.0,238.2 L421.0,232.6 Z" class="f-red"/>
<line x1="360.0" y1="210.0" x2="360.0" y2="191.0" class="s-red" stroke-width="2"/><path d="M360.0,184.0 L363.0,192.0 L357.0,192.0 Z" class="f-red"/>
<line x1="314.9" y1="241.6" x2="297.0" y2="235.1" class="s-red" stroke-width="2"/><path d="M290.5,232.7 L299.0,232.6 L297.0,238.2 Z" class="f-red"/>
<line x1="320.7" y1="285.5" x2="305.1" y2="296.4" class="s-red" stroke-width="2"/><path d="M299.4,300.4 L304.2,293.4 L307.7,298.3 Z" class="f-red"/>
<line x1="399.3" y1="285.5" x2="414.9" y2="296.4" class="s-red" stroke-width="2"/><path d="M420.6,300.4 L412.3,298.3 L415.8,293.4 Z" class="f-red"/>
<text x="360" y="264" font-size="16" font-style="italic" text-anchor="middle">E</text>
<text x="360" y="346" font-size="14" font-weight="700" text-anchor="middle">Divergence theorem</text>
<text x="360" y="363" font-size="12" text-anchor="middle">solid E</text>
<text x="360" y="378" font-size="12" text-anchor="middle">boundary: closed surface</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-vector-calculus-applications',
  title: 'Vector Calculus in Physics, Fluids and Graphics',
  summary: 'The capstone: the fundamental theorem of calculus, the gradient theorem, Green, Stokes and the divergence theorem as one idea. Then the payoff: Maxwell\'s equations, the continuity equation for fluids, surface normals from signed distance fields and normal maps, and the pressure projection that keeps game fluids divergence-free.',
  minutes: 22,
  objectives: [
    'Explain how FTC, the gradient theorem, Green\'s, Stokes\' and the divergence theorem are all "integral over the boundary $=$ integral of a derivative over the region"',
    'Read Maxwell\'s equations in integral and differential form, and convert between them with Stokes\' and the divergence theorem',
    'Derive the continuity equation $\\frac{\\partial\\rho}{\\partial t} + \\nabla\\cdot(\\rho\\vec u) = 0$ and explain what $\\nabla\\cdot\\vec u = 0$ means for a fluid',
    'Compute surface normals as gradients: of a signed distance function for raymarching, and of a height map for normal mapping',
    'Describe the pressure projection in a game fluid solver as a Helmholtz decomposition solved with a Poisson equation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One theorem, five costumes',
      blocks: [
        {
          type: 'p',
          text: 'You now know five theorems that turn an integral over a region into an integral over its boundary. Line them up and they say the same thing: **integrate a derivative over a region, and you get the original function integrated over the region\'s boundary.** Each step up in dimension uses the next derivative: gradient, then curl, then divergence.',
        },
        {
          type: 'figure',
          svg: FIG_LADDER,
          alt: 'Five panels: an interval with endpoints a and b; a curve from A to B; a flat region D with a counterclockwise boundary; a dome with an upward normal and its boundary circle; a solid ball with outward normals.',
          caption: 'Region and boundary in each theorem. The boundary always has one dimension fewer, and carries an orientation: $-$ and $+$ at the endpoints, a direction around a curve, an outward normal on a closed surface.',
        },
        {
          type: 'table',
          headers: ['Theorem', 'Region', 'Boundary', 'Statement'],
          rows: [
            ['[[fundamental-theorem-of-calculus|FTC]]', 'interval $[a, b]$', 'two points', '$\\int_a^b f\'(x)\\,dx = f(b) - f(a)$'],
            ['[[calc3-ftli|Gradient theorem]]', 'curve $C$ from $A$ to $B$', 'two points', '$\\int_C \\nabla f\\cdot d\\vec r = f(B) - f(A)$'],
            ['[[calc3-greens-theorem|Green]]', 'plane region $D$', 'closed curve', '$\\iint_D (Q_x - P_y)\\,dA = \\oint_C P\\,dx + Q\\,dy$'],
            ['[[calc3-stokes-theorem|Stokes]]', 'surface $S$', 'closed curve', '$\\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S = \\oint_C \\vec F\\cdot d\\vec r$'],
            ['[[calc3-divergence-theorem|Divergence]]', 'solid $E$', 'closed surface', '$\\iiint_E \\operatorname{div}\\vec F\\,dV = \\oiint_S \\vec F\\cdot d\\vec S$'],
          ],
          caption: 'Each row: derivative integrated over the region (left side) equals the original integrated over the boundary (right side).',
        },
        {
          type: 'derivation',
          title: 'Two identities are the same fact seen twice',
          steps: [
            { tex: '\\oiint_S \\operatorname{curl}\\vec F\\cdot d\\vec S = \\iiint_E \\operatorname{div}(\\operatorname{curl}\\vec F)\\,dV = 0', why: 'The divergence theorem on a closed surface $S$ bounding $E$, then $\\operatorname{div}(\\operatorname{curl}\\vec F) = 0$ from Unit 11.' },
            { tex: '\\oiint_S \\operatorname{curl}\\vec F\\cdot d\\vec S = \\oint_{\\partial S} \\vec F\\cdot d\\vec r = 0', why: 'Stokes\' theorem instead: a closed surface has no boundary curve, so the right side is an integral over nothing.' },
            { tex: '\\oint_C \\nabla f\\cdot d\\vec r = \\iint_S \\operatorname{curl}(\\nabla f)\\cdot d\\vec S = 0', why: 'Likewise, $\\operatorname{curl}(\\nabla f) = \\vec 0$ matches "a closed curve has no endpoints", which is why the gradient theorem gives $0$ around loops.' },
          ],
          result: '"Derivative of a derivative is zero" ($\\operatorname{curl}\\nabla = \\vec 0$, $\\operatorname{div}\\operatorname{curl} = 0$) is the mirror image of "the boundary of a boundary is empty".',
        },
        {
          type: 'deepdive',
          title: 'The general Stokes theorem',
          blocks: [
            {
              type: 'p',
              text: 'In the language of differential forms, all five theorems are a single equation, the [[calc3-generalized-stokes|generalized Stokes theorem]] $\\int_{\\partial\\Omega} \\omega = \\int_{\\Omega} d\\omega$. Here $\\Omega$ is an oriented region of any dimension, $\\partial\\Omega$ its boundary, and $d$ the **exterior derivative**, which acts as the gradient on functions, the curl on "line-integral" fields and the divergence on "flux" fields. The identities above become $d(d\\omega) = 0$. The same equation works in four dimensions (spacetime, where it packages Maxwell\'s equations into two lines) and on curved spaces.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Complete the pattern "integral of a derivative over a region $=$ integral over its boundary".',
      template: 'In the divergence theorem the region is a solid and its boundary is a ___. In Stokes\' theorem the region is a ___ and its boundary is a closed curve. In the gradient theorem the region is a curve and its boundary is its two ___.',
      blanks: [{ answers: ['closed surface'] }, { answers: ['surface'] }, { answers: ['endpoints'] }],
      wordBank: ['closed surface', 'surface', 'endpoints', 'solid', 'normals', 'closed curve'],
      explanation: 'Each theorem drops one dimension from region to boundary: solid $\\to$ closed surface (divergence), surface $\\to$ closed curve (Stokes, and Green in the flat case), curve $\\to$ two endpoints (gradient theorem, and FTC on the real line). The derivative climbs as the dimension does: gradient, curl, divergence.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Maxwell\'s equations at a glance',
      blocks: [
        {
          type: 'p',
          text: 'All of classical electricity, magnetism and light fits in four equations about the electric field $\\vec E$ and the magnetic field $\\vec B$. Physicists write them in two equivalent ways: as statements about fluxes and circulations (**integral form**, what experiments measure), and as statements about divergence and curl at each point (**differential form**, what simulations solve). Stokes\' and the divergence theorem are the bridge.',
        },
        {
          type: 'table',
          headers: ['Law', 'Integral form', 'Differential form', 'Bridge'],
          rows: [
            ['Gauss', '$\\oiint_S \\vec E\\cdot d\\vec S = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}$', '$\\nabla\\cdot\\vec E = \\frac{\\rho}{\\varepsilon_0}$', 'divergence'],
            ['No monopoles', '$\\oiint_S \\vec B\\cdot d\\vec S = 0$', '$\\nabla\\cdot\\vec B = 0$', 'divergence'],
            ['Faraday', '$\\oint_C \\vec E\\cdot d\\vec r = -\\frac{d}{dt}\\iint_S \\vec B\\cdot d\\vec S$', '$\\nabla\\times\\vec E = -\\frac{\\partial\\vec B}{\\partial t}$', 'Stokes'],
            ['Ampère–Maxwell', '$\\oint_C \\vec B\\cdot d\\vec r = \\mu_0 I_{\\text{enc}} + \\mu_0\\varepsilon_0\\frac{d}{dt}\\iint_S \\vec E\\cdot d\\vec S$', '$\\nabla\\times\\vec B = \\mu_0\\vec J + \\mu_0\\varepsilon_0\\frac{\\partial\\vec E}{\\partial t}$', 'Stokes'],
          ],
          caption: '$\\rho$ is charge density, $\\vec J$ current density, $\\varepsilon_0$ and $\\mu_0$ constants of nature. These are [[calc3-maxwells-equations|Maxwell\'s equations]].',
        },
        {
          type: 'derivation',
          title: 'From the integral form of Gauss\'s law to the differential form',
          steps: [
            { tex: '\\iiint_E \\nabla\\cdot\\vec E\\,dV = \\oiint_S \\vec E\\cdot d\\vec S = \\frac{1}{\\varepsilon_0}\\iiint_E \\rho\\,dV', why: 'The divergence theorem on the left; Gauss\'s law with $Q_{\\text{enc}} = \\iiint_E \\rho\\,dV$ on the right.' },
            { tex: '\\iiint_E \\left( \\nabla\\cdot\\vec E - \\frac{\\rho}{\\varepsilon_0} \\right) dV = 0 \\quad\\text{for every region } E', why: 'Subtract. This holds for every solid $E$, however small and wherever it is.' },
            { tex: '\\nabla\\cdot\\vec E = \\frac{\\rho}{\\varepsilon_0}', why: 'If the continuous integrand were positive (or negative) at some point, it would stay so on a small ball around it, and the integral over that ball would not be $0$.' },
          ],
          result: 'The same "true for every region, so true at every point" argument with Stokes\' theorem turns Faraday\'s law into $\\nabla\\times\\vec E = -\\frac{\\partial\\vec B}{\\partial t}$.',
        },
        {
          type: 'plot3d',
          x: [-1.8, 3.8],
          y: [-1.8, 1.8],
          z: [-1.8, 1.8],
          equal: true,
          field: { x: '-y/(x^2 + y^2)', y: 'x/(x^2 + y^2)', z: '0', n: 3, color: 'gray' },
          segments: [{ from: [0, 0, -1.8], to: [0, 0, 1.8], color: 'orange' }],
          curves: [{ x: 'c + 1.1cos(t)', y: '1.1sin(t)*cos(w)', z: '1.1sin(t)*sin(w)', t: [0, '2pi'], color: 'blue', label: 'loop $C$' }],
          vectors: [{ from: [0, 0, -1.5], to: [0, 0, -0.9], color: 'orange', label: 'I' }],
          sliders: [
            { name: 'c', min: 0, max: 2.5, step: 0.25, value: 0, label: 'move the loop along $x$' },
            { name: 'w', min: 0, max: 1.2, step: 0.02, value: 0.5, label: 'tilt the loop' },
          ],
          readouts: [{ label: '$\\oint_C \\vec B\\cdot d\\vec r$ in units of $\\mu_0 I$ $=$', expr: '(1 + sign(1.1 - abs(c)))/2', digits: 0 }],
          view: { azimuth: 30, elevation: 22 },
          caption: 'A long straight wire (orange) carrying current $I$ makes the field $\\vec B = \\frac{\\mu_0 I}{2\\pi}\\frac{\\langle -y, x, 0 \\rangle}{x^2 + y^2}$: the vortex field again. Its curl is zero off the wire, so by Stokes\' theorem the circulation is the same for every loop around the wire, tilted or not: $\\mu_0 I$. Slide the loop off the wire and the circulation drops to $0$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Maxwell\'s fix, and light',
          text: 'Take the divergence of the Ampère–Maxwell law. The left side is $\\nabla\\cdot(\\nabla\\times\\vec B) = 0$, so the right side must be too: $\\nabla\\cdot\\vec J + \\varepsilon_0\\frac{\\partial}{\\partial t}(\\nabla\\cdot\\vec E) = \\nabla\\cdot\\vec J + \\frac{\\partial\\rho}{\\partial t} = 0$, conservation of charge. Without Maxwell\'s extra $\\frac{\\partial\\vec E}{\\partial t}$ term, Ampère\'s law would have forced $\\nabla\\cdot\\vec J = 0$, which fails while a capacitor charges. With the term, the curl equations in empty space combine into wave equations with speed $\\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} \\approx 3.00\\times 10^8$ m/s. That number is the speed of light, and that is how Maxwell concluded light is an electromagnetic wave.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Ampère\'s law for steady currents is $\\oint_C \\vec B\\cdot d\\vec r = \\mu_0 I_{\\text{enc}}$. A long straight wire carries $I = 10$ A. By symmetry $\\vec B$ circles the wire with constant strength $B$ on each circle of radius $r$ around it. Find $B$ at $r = 5$ cm, in microtesla. Use $\\mu_0 = 4\\pi\\times 10^{-7}$ T·m/A.',
      answer: '40',
      tolerance: 0.5,
      unit: 'μT',
      hint: 'Take $C$ to be the circle of radius $r$. Then $\\oint_C \\vec B\\cdot d\\vec r = B\\cdot 2\\pi r$.',
      explanation: 'On the circle, $\\vec B$ is tangent with constant strength, so the circulation is $B\\cdot 2\\pi r$. Ampère: $B\\cdot 2\\pi r = \\mu_0 I$, so $B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi\\times 10^{-7}\\cdot 10}{2\\pi\\cdot 0.05} = 4\\times 10^{-5}$ T $= 40$ μT, about the strength of Earth\'s magnetic field, which is why a compass next to a power cable can misread. Forgetting to convert $5$ cm to $0.05$ m gives an answer $100$ times too small.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Fluids and the continuity equation',
      blocks: [
        {
          type: 'p',
          text: 'A fluid has density $\\rho(x, y, z, t)$ and velocity $\\vec u(x, y, z, t)$. The vector $\\rho\\vec u$ is the **mass flux**: mass per unit area per unit time crossing a surface. Mass is never created or destroyed, so the mass inside any fixed region $E$ changes only by flowing through its boundary.',
        },
        {
          type: 'derivation',
          title: 'Deriving the continuity equation',
          steps: [
            { tex: '\\frac{d}{dt}\\iiint_E \\rho\\,dV = -\\oiint_S \\rho\\vec u\\cdot d\\vec S', why: 'Rate of change of the mass inside $=$ minus the rate at which mass flows **out** (outward flux).' },
            { tex: '\\iiint_E \\frac{\\partial\\rho}{\\partial t}\\,dV = -\\iiint_E \\nabla\\cdot(\\rho\\vec u)\\,dV', why: 'On the left, $E$ is fixed, so the time derivative moves inside the integral. On the right, the divergence theorem.' },
            { tex: '\\iiint_E \\left( \\frac{\\partial\\rho}{\\partial t} + \\nabla\\cdot(\\rho\\vec u) \\right) dV = 0 \\text{ for every } E', why: 'Collect terms. The region was arbitrary.' },
            { tex: '\\frac{\\partial\\rho}{\\partial t} + \\nabla\\cdot(\\rho\\vec u) = 0', why: 'A continuous function whose integral over every region is $0$ is identically $0$ (the same argument as for Gauss\'s law).' },
          ],
          result: 'This is the [[calc3-continuity-equation|continuity equation]]. If the density is constant (water, or air at everyday speeds), $\\frac{\\partial\\rho}{\\partial t} = 0$ and it reduces to $\\nabla\\cdot\\vec u = 0$: the velocity is [[calc3-divergence-free|divergence-free]].',
        },
        {
          type: 'graph',
          x: [0, 6.3],
          y: [-1.6, 1.6],
          height: 280,
          field: { x: '1 + 0.6sin(x)', y: '0', n: 13 },
          functions: [{ expr: '-0.6cos(x)', color: 'purple', label: '$\\partial\\rho/\\partial t = -\\rho_0\\,\\nabla\\cdot\\vec u$ (with $\\rho_0 = 1$)' }],
          points: [{ x: 'a', y: '-0.6cos(a)', color: 'purple' }],
          vlines: [{ x: 'a', color: 'gray' }],
          sliders: [{ name: 'a', min: 0, max: 6.28, step: 0.02, value: 3.14, label: 'position $x_0$' }],
          readouts: [
            { label: 'speed $u(x_0) =$', expr: '1 + 0.6sin(a)', digits: 2 },
            { label: '$\\nabla\\cdot\\vec u = u\'(x_0) =$', expr: '0.6cos(a)', digits: 2 },
          ],
          caption: 'A flow to the right whose speed $u = 1 + 0.6\\sin x$ varies along the way, starting from uniform density $\\rho_0 = 1$. Where the flow **slows down** in the direction of motion (around $x = \\pi$), $\\nabla\\cdot\\vec u < 0$ and density builds up, like cars bunching at a slowdown. Where it speeds up, the fluid thins out.',
        },
        {
          type: 'table',
          headers: ['Conserved quantity', 'Density', 'Flux', 'Equation'],
          rows: [
            ['mass', '$\\rho$', '$\\rho\\vec u$', '$\\rho_t + \\nabla\\cdot(\\rho\\vec u) = 0$'],
            ['electric charge', '$\\rho_q$', '$\\vec J$', '$\\frac{\\partial\\rho_q}{\\partial t} + \\nabla\\cdot\\vec J = 0$'],
            ['heat energy', '$c\\,T$', '$-k\\nabla T$ (Fourier\'s law)', '$c\\,T_t = k\\nabla^2 T$, the [[calc3-heat-equation|heat equation]]'],
          ],
          caption: 'The same derivation works for anything that is conserved and flows. For heat, the flux runs down the temperature gradient, and $\\nabla\\cdot(-k\\nabla T) = -k\\nabla^2 T$ brings in the [[calc3-laplacian|Laplacian]].',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student derives the continuity equation for a fluid with density $\\rho$ and velocity $\\vec u$. Tap the first line that is wrong.',
      lines: [
        'The mass in a fixed region $E$ is $m = \\iiint_E \\rho\\,dV$.',
        'Mass flows out through the boundary $S$ at the rate $\\oiint_S \\rho\\vec u\\cdot d\\vec S$, so $\\frac{dm}{dt} = \\oiint_S \\rho\\vec u\\cdot d\\vec S$.',
        'By the divergence theorem, $\\oiint_S \\rho\\vec u\\cdot d\\vec S = \\iiint_E \\nabla\\cdot(\\rho\\vec u)\\,dV$.',
        'So $\\iiint_E \\left( \\frac{\\partial\\rho}{\\partial t} - \\nabla\\cdot(\\rho\\vec u) \\right) dV = 0$ for every region $E$.',
        'Hence $\\frac{\\partial\\rho}{\\partial t} = \\nabla\\cdot(\\rho\\vec u)$.',
      ],
      errorLines: [2],
      explanation: 'Outward flux is mass **leaving**, so the mass inside decreases: $\\frac{dm}{dt} = -\\oiint_S \\rho\\vec u\\cdot d\\vec S$. Line 2 drops that minus sign, and everything after inherits it. The correct result is $\\frac{\\partial\\rho}{\\partial t} = -\\nabla\\cdot(\\rho\\vec u)$. Sanity check: at a source ($\\nabla\\cdot\\vec u > 0$ with uniform $\\rho$) fluid spreads out, so the density must **drop**.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'At some instant, air has uniform density $\\rho = 1.2$ kg/m³ and velocity field $\\vec u = \\langle 0.5x,\\ 0.5y,\\ -0.2z \\rangle$ (in m/s, with $x, y, z$ in meters). Use the continuity equation to find $\\frac{\\partial\\rho}{\\partial t}$ at that instant.',
      answer: '-0.96',
      tolerance: 0.005,
      unit: 'kg/(m³·s)',
      hint: 'With $\\rho$ uniform, $\\nabla\\cdot(\\rho\\vec u) = \\rho\\,\\nabla\\cdot\\vec u$.',
      explanation: '$\\nabla\\cdot\\vec u = 0.5 + 0.5 - 0.2 = 0.8$ s⁻¹. Since $\\rho$ has no spatial variation at this instant, $\\nabla\\cdot(\\rho\\vec u) = \\rho\\,\\nabla\\cdot\\vec u = 1.2\\cdot 0.8 = 0.96$, and $\\frac{\\partial\\rho}{\\partial t} = -0.96$ kg/(m³·s). The air is expanding (a source), so its density is falling. Forgetting the minus sign gives $+0.96$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Graphics: normals are gradients',
      blocks: [
        {
          type: 'p',
          text: 'A [[calc3-signed-distance-function|signed distance function]] (SDF) describes a shape by a function $f(\\vec p)$: the distance from $\\vec p$ to the surface, negative inside and positive outside. The surface is the level set $f = 0$. Since the gradient is perpendicular to level sets, the surface normal is $\\nabla f$, and for an exact SDF it already has length $1$: moving straight away from the surface increases the distance at rate exactly $1$.',
        },
        {
          type: 'derivation',
          title: 'The sphere $f(\\vec p) = |\\vec p| - r$',
          steps: [
            { tex: 'f(x, y, z) = \\sqrt{x^2 + y^2 + z^2} - r', why: 'Distance from the origin, minus the radius: $0$ on the sphere, negative inside.' },
            { tex: '\\nabla f = \\frac{\\langle x, y, z \\rangle}{\\sqrt{x^2 + y^2 + z^2}} = \\frac{\\vec p}{|\\vec p|}', why: 'Each partial is $\\frac{x}{\\sqrt{x^2 + y^2 + z^2}}$ and so on, by the [[chain-rule|chain rule]].' },
            { tex: '|\\nabla f| = 1', why: 'A unit vector pointing straight out from the center: the outward normal of the sphere, at every point (not just on the surface).' },
          ],
          result: 'Unions and intersections of shapes are $\\min$ and $\\max$ of their SDFs. A renderer rarely differentiates by hand: it takes **central differences** of $f$, exactly as you did for numerical gradients in Unit 5, and normalizes.',
        },
        {
          type: 'graph',
          x: [-2, 4.2],
          y: [-2, 2],
          equal: true,
          height: 300,
          implicit: [
            { expr: 'min(sqrt((x)^2 + (y)^2) - 1, sqrt(max(abs(x - 2.5) - 0.6, 0)^2 + max(abs(y) - 0.6, 0)^2) + min(max(abs(x - 2.5) - 0.6, abs(y) - 0.6), 0))', levels: [-0.4, 0.4, 0.8, 1.2], color: 'gray', dashed: true, label: 'level sets $f = \\pm 0.4, 0.8, 1.2$' },
            { expr: 'min(sqrt((x)^2 + (y)^2) - 1, sqrt(max(abs(x - 2.5) - 0.6, 0)^2 + max(abs(y) - 0.6, 0)^2) + min(max(abs(x - 2.5) - 0.6, abs(y) - 0.6), 0))', levels: [0], color: 'blue', label: 'the shape, $f = 0$' },
          ],
          points: [{ x: 'a', y: 'b', color: 'red' }],
          segments: [{ from: ['a', 'b'], to: ['a + 0.8*(((min(sqrt((a + 0.001)^2 + (b)^2) - 1, sqrt(max(abs(a + 0.001 - 2.5) - 0.6, 0)^2 + max(abs(b) - 0.6, 0)^2) + min(max(abs(a + 0.001 - 2.5) - 0.6, abs(b) - 0.6), 0))) - (min(sqrt((a - 0.001)^2 + (b)^2) - 1, sqrt(max(abs(a - 0.001 - 2.5) - 0.6, 0)^2 + max(abs(b) - 0.6, 0)^2) + min(max(abs(a - 0.001 - 2.5) - 0.6, abs(b) - 0.6), 0))))/0.002)', 'b + 0.8*(((min(sqrt((a)^2 + (b + 0.001)^2) - 1, sqrt(max(abs(a - 2.5) - 0.6, 0)^2 + max(abs(b + 0.001) - 0.6, 0)^2) + min(max(abs(a - 2.5) - 0.6, abs(b + 0.001) - 0.6), 0))) - (min(sqrt((a)^2 + (b - 0.001)^2) - 1, sqrt(max(abs(a - 2.5) - 0.6, 0)^2 + max(abs(b - 0.001) - 0.6, 0)^2) + min(max(abs(a - 2.5) - 0.6, abs(b - 0.001) - 0.6), 0))))/0.002)'], color: 'red', arrow: true, label: '∇f' }],
          sliders: [
            { name: 'a', min: -1.8, max: 4, step: 0.02, value: 0.5, label: '$x$' },
            { name: 'b', min: -1.8, max: 1.8, step: 0.02, value: 1, label: '$y$' },
          ],
          readouts: [
            { label: 'distance $f(x, y) =$', expr: 'min(sqrt((a)^2 + (b)^2) - 1, sqrt(max(abs(a - 2.5) - 0.6, 0)^2 + max(abs(b) - 0.6, 0)^2) + min(max(abs(a - 2.5) - 0.6, abs(b) - 0.6), 0))', digits: 3 },
            { label: '$|\\nabla f| \\approx$', expr: 'sqrt((((min(sqrt((a + 0.001)^2 + (b)^2) - 1, sqrt(max(abs(a + 0.001 - 2.5) - 0.6, 0)^2 + max(abs(b) - 0.6, 0)^2) + min(max(abs(a + 0.001 - 2.5) - 0.6, abs(b) - 0.6), 0))) - (min(sqrt((a - 0.001)^2 + (b)^2) - 1, sqrt(max(abs(a - 0.001 - 2.5) - 0.6, 0)^2 + max(abs(b) - 0.6, 0)^2) + min(max(abs(a - 0.001 - 2.5) - 0.6, abs(b) - 0.6), 0))))/0.002)^2 + (((min(sqrt((a)^2 + (b + 0.001)^2) - 1, sqrt(max(abs(a - 2.5) - 0.6, 0)^2 + max(abs(b + 0.001) - 0.6, 0)^2) + min(max(abs(a - 2.5) - 0.6, abs(b + 0.001) - 0.6), 0))) - (min(sqrt((a)^2 + (b - 0.001)^2) - 1, sqrt(max(abs(a - 2.5) - 0.6, 0)^2 + max(abs(b - 0.001) - 0.6, 0)^2) + min(max(abs(a - 2.5) - 0.6, abs(b - 0.001) - 0.6), 0))))/0.002)^2)', digits: 3 },
          ],
          caption: 'A 2D SDF: a unit circle unioned with a square. The red arrow is $\\nabla f$ by central differences, perpendicular to the level sets, with length $1$. Inside a shape $f < 0$ and the arrow still points toward the nearest way out. Halfway between the two shapes the nearest surface switches and $\\nabla f$ jumps: SDFs are not differentiable everywhere.',
        },
        {
          type: 'p',
          text: 'SDFs make a beautifully simple renderer, [[calc3-sphere-tracing|sphere tracing]]. Walk along each camera ray; at each point $f$ tells you the radius of a ball with no surface in it, so step forward by exactly $f$. When $f$ is nearly $0$ you have hit the surface, and $\\nabla f$ there gives the normal for lighting. Inigo Quilez\'s [distance functions catalog](https://iquilezles.org/articles/distfunctions/) lists exact SDFs for dozens of primitives and the operators that combine them.',
        },
        {
          type: 'code',
          title: 'sdf_raymarch.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };
Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator*(double s, Vec3 a) { return {s * a.x, s * a.y, s * a.z}; }
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
double length(Vec3 a) { return std::sqrt(dot(a, a)); }
Vec3 normalize(Vec3 a) { return (1.0 / length(a)) * a; }

// Signed distance functions (see iquilezles.org/articles/distfunctions).
double sdSphere(Vec3 p, double r) { return length(p) - r; }
double sdBox(Vec3 p, Vec3 b) {
    Vec3 q = {std::fabs(p.x) - b.x, std::fabs(p.y) - b.y, std::fabs(p.z) - b.z};
    Vec3 qp = {std::max(q.x, 0.0), std::max(q.y, 0.0), std::max(q.z, 0.0)};
    return length(qp) + std::min(std::max(q.x, std::max(q.y, q.z)), 0.0);
}
// The scene: a unit sphere at the origin unioned with a box to its right.
double scene(Vec3 p) {
    return std::min(sdSphere(p, 1.0), sdBox(p - Vec3{2.5, 0, 0}, {0.5, 0.5, 0.5}));
}

// Surface normal = normalized gradient of the SDF, by central differences.
Vec3 normal(Vec3 p) {
    const double h = 1e-4;
    Vec3 g = {scene(p + Vec3{h, 0, 0}) - scene(p - Vec3{h, 0, 0}),
              scene(p + Vec3{0, h, 0}) - scene(p - Vec3{0, h, 0}),
              scene(p + Vec3{0, 0, h}) - scene(p - Vec3{0, 0, h})};
    return normalize((1.0 / (2 * h)) * g);
}

// Sphere tracing: step forward by the distance to the nearest surface.
bool march(Vec3 origin, Vec3 dir, Vec3& hit, int& steps) {
    double t = 0;
    for (steps = 1; steps <= 100; ++steps) {
        Vec3 p = origin + t * dir;
        double d = scene(p);
        if (d < 1e-6) { hit = p; return true; }
        t += d;
        if (t > 50) break;
    }
    return false;
}

int main() {
    const Vec3 light = normalize({1, 1, 1});
    const Vec3 eye = {0, 0, 5};
    const Vec3 dirs[] = {normalize({0.05, 0.1, -1}), normalize({0.5, 0, -1}), normalize({-0.15, 0, -1})};
    for (Vec3 d : dirs) {
        Vec3 hit; int steps;
        if (!march(eye, d, hit, steps)) { std::printf("miss\\n"); continue; }
        Vec3 n = normal(hit);
        double diffuse = std::max(0.0, dot(n, light));
        std::printf("hit (%.4f, %.4f, %.4f) in %2d steps  n = (%.4f, %.4f, %.4f)  diffuse = %.4f\\n",
                    hit.x, hit.y, hit.z, steps, n.x, n.y, n.z, diffuse);
    }
}`,
          output: `hit (0.2056, 0.4112, 0.8881) in  9 steps  n = (0.2056, 0.4112, 0.8881)  diffuse = 0.8688
hit (2.2500, 0.0000, 0.5000) in  8 steps  n = (0.0000, 0.0000, 1.0000)  diffuse = 0.5774
hit (-0.6340, 0.0000, 0.7733) in 13 steps  n = (-0.6340, 0.0000, 0.7733)  diffuse = 0.0804`,
          annotations: [
            { lines: '14-19', text: 'Exact SDFs for a sphere and a box (half-sizes $\\vec b$), in the form Quilez gives them.' },
            { lines: '21-23', text: 'Union of two shapes is the $\\min$ of their distances.' },
            { lines: '26-32', text: 'The normal is the gradient of the SDF, by central differences, then normalized.' },
            { lines: '35-45', text: 'Sphere tracing: each step moves forward by the current distance, which can never jump through a surface.' },
            { lines: '54-55', text: 'Lambert diffuse lighting $\\max(0, \\vec n\\cdot\\vec \\ell)$ with the gradient normal.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Check the output',
          text: 'Two rays hit the unit sphere, and there the numerical normal equals the hit point itself, as $\\nabla f = \\frac{\\vec p}{|\\vec p|}$ predicts. The middle ray hits the top face of the box, where the normal is exactly $\\langle 0, 0, 1 \\rangle$ and the diffuse term is $\\frac{1}{\\sqrt 3} \\approx 0.5774$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'The SDF of a sphere of radius $2$ centered at $(1, 0, 0)$ is $f(x, y, z) = \\sqrt{(x - 1)^2 + y^2 + z^2} - 2$. Enter the $x$-component of the surface normal $\\nabla f$.',
      label: '$\\dfrac{\\partial f}{\\partial x} =$',
      answer: '(x - 1)/sqrt((x - 1)^2 + y^2 + z^2)',
      answerTex: '\\frac{x - 1}{\\sqrt{(x - 1)^2 + y^2 + z^2}}',
      variables: ['x', 'y', 'z'],
      domain: [1.5, 3],
      hint: 'Chain rule: $\\frac{\\partial}{\\partial x}\\sqrt{g} = \\frac{g_x}{2\\sqrt{g}}$, with $g = (x - 1)^2 + y^2 + z^2$.',
      explanation: '$\\frac{\\partial f}{\\partial x} = \\frac{2(x - 1)}{2\\sqrt{(x - 1)^2 + y^2 + z^2}} = \\frac{x - 1}{\\sqrt{(x - 1)^2 + y^2 + z^2}}$. The full gradient is $\\frac{\\vec p - \\vec c}{|\\vec p - \\vec c|}$ with $\\vec c = \\langle 1, 0, 0 \\rangle$: the unit vector from the center to $\\vec p$, as it must be for a sphere. The radius $2$ disappears, since a constant has derivative $0$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Normal maps: bumps without geometry',
      blocks: [
        {
          type: 'p',
          text: 'Lighting depends on the normal, not on where the triangles are. A [[calc3-normal-map|normal map]] exploits that: it stores a normal per texel of a texture, so a flat wall made of two triangles can be lit as if it were covered in bricks and mortar. The normals are often baked from a detailed high-polygon model, or computed from a height map $h(x, y)$, and you already know the formula: the upward normal of the graph $z = h(x, y)$ is $\\langle -h_x, -h_y, 1 \\rangle$, the vector from the flux lesson, normalized.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-1.2, 1.4],
          surfaces: [
            { expr: '0.25sin(2x)*cos(2y)', color: 'teal', opacity: 0.7, label: 'height map $z = h(x, y)$' },
            { expr: '-1', color: 'gray', opacity: 0.35, label: 'flat surface, normal-mapped' },
          ],
          points: [{ x: 'a', y: 'b', z: '0.25sin(2a)*cos(2b)', color: 'red' }, { x: 'a', y: 'b', z: -1, color: 'red' }],
          vectors: [
            { from: ['a', 'b', '0.25sin(2a)*cos(2b)'], to: ['a - 0.8*0.5cos(2a)*cos(2b)', 'b + 0.8*0.5sin(2a)*sin(2b)', '0.25sin(2a)*cos(2b) + 0.8'], color: 'red', label: 'n' },
            { from: ['a', 'b', -1], to: ['a - 0.8*0.5cos(2a)*cos(2b)', 'b + 0.8*0.5sin(2a)*sin(2b)', -0.2], color: 'red', label: 'stored n' },
          ],
          sliders: [
            { name: 'a', min: -1.9, max: 1.9, step: 0.02, value: 0.9, label: '$x$' },
            { name: 'b', min: -1.9, max: 1.9, step: 0.02, value: 0.3, label: '$y$' },
          ],
          readouts: [
            { label: 'RGB $= 255\\cdot\\frac{\\vec n + 1}{2}$: R $=$', expr: '255*(1 - 0.5cos(2a)*cos(2b)/sqrt(1 + (0.5cos(2a)*cos(2b))^2 + (0.5sin(2a)*sin(2b))^2))/2', digits: 0 },
            { label: 'G $=$', expr: '255*(1 + 0.5sin(2a)*sin(2b)/sqrt(1 + (0.5cos(2a)*cos(2b))^2 + (0.5sin(2a)*sin(2b))^2))/2', digits: 0 },
            { label: 'B $=$', expr: '255*(1 + 1/sqrt(1 + (0.5cos(2a)*cos(2b))^2 + (0.5sin(2a)*sin(2b))^2))/2', digits: 0 },
          ],
          view: { azimuth: 30, elevation: 22 },
          caption: 'Top: a bumpy height map $h = 0.25\\sin 2x\\cos 2y$ with its normal $\\langle -h_x, -h_y, 1 \\rangle$. Bottom: a flat surface that stores the **same** normal in a texture and is lit as if it were bumpy. The readouts show the color a normal map would store: each component mapped from $[-1, 1]$ to $[0, 255]$.',
        },
        {
          type: 'list',
          items: [
            'Height-to-normal tools compute $h_x$ and $h_y$ with finite differences of neighboring texels, typically the same central differences as everywhere in this course.',
            'A flat region has $\\vec n = \\langle 0, 0, 1 \\rangle$, stored as $(128, 128, 255)$: that is why tangent-space normal maps look mostly light blue.',
            'The normal is in **tangent space**: relative to the surface\'s own tangent vectors and normal (the $\\vec r_u$, $\\vec r_v$ and $\\vec r_u\\times\\vec r_v$ of a parametric surface), so the same map works on a curved, moving mesh.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'A tangent-space normal map stores each unit normal $\\vec n$ as the color $255\\cdot\\frac{\\vec n + 1}{2}$ (rounded). A texel of a height map lies on a slope where $h_x = 1$ and $h_y = 0$. Which color does the normal map store there?',
      options: [
        { text: '$(128, 128, 255)$', why: 'That is the flat normal $\\langle 0, 0, 1 \\rangle$. On a slope the normal tilts.' },
        { text: '$(37, 128, 218)$', correct: true, why: '$\\vec n = \\frac{\\langle -1, 0, 1 \\rangle}{\\sqrt 2} \\approx \\langle -0.707, 0, 0.707 \\rangle$, mapped to about $(37.3, 127.5, 217.7)$, which rounds to $(37, 128, 218)$.' },
        { text: '$(218, 128, 218)$', why: 'This uses $\\langle h_x, h_y, 1 \\rangle$. The normal of $z = h(x, y)$ is $\\langle -h_x, -h_y, 1 \\rangle$: it leans **away** from the uphill direction.' },
        { text: '$(255, 128, 255)$', why: 'This forgets to normalize $\\langle 1, 0, 1 \\rangle$ (and has the sign wrong). Components must lie in $[-1, 1]$ before mapping to colors.' },
      ],
      explanation: 'The height increases in the $+x$ direction, so the surface faces toward $-x$: $\\langle -h_x, -h_y, 1 \\rangle = \\langle -1, 0, 1 \\rangle$, normalized to $\\langle -0.707, 0, 0.707 \\rangle$. Mapping $[-1, 1]$ to $[0, 255]$: $255\\cdot\\frac{-0.707 + 1}{2} \\approx 37.3$, $255\\cdot\\frac{0 + 1}{2} = 127.5$ and $255\\cdot\\frac{0.707 + 1}{2} \\approx 217.7$, giving $(37, 128, 218)$. The red channel is **below** $128$ because the normal leans toward $-x$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Game fluids: projecting out the divergence',
      blocks: [
        {
          type: 'p',
          text: 'Real-time smoke and water solvers on a grid repeat three steps every frame: **advect** (move the velocity field along itself), **add forces** (gravity, buoyancy, explosions), and **project**. The first two steps produce a velocity $\\vec w$ that is not divergence-free, so the fluid would appear to compress and expand. The [[calc3-pressure-projection|pressure projection]] removes exactly that part.',
        },
        {
          type: 'theorem',
          name: 'Helmholtz decomposition',
          tex: '\\vec w = \\vec u + \\nabla p, \\qquad \\nabla\\cdot\\vec u = 0',
          text: 'A smooth vector field (with suitable boundary conditions) splits into a divergence-free part and a gradient. This is the [[calc3-helmholtz-decomposition|Helmholtz decomposition]]; in a fluid solver $\\vec u$ is the corrected velocity and $p$ plays the role of pressure.',
        },
        {
          type: 'derivation',
          title: 'Finding the pressure',
          steps: [
            { tex: '\\nabla\\cdot\\vec w = \\nabla\\cdot\\vec u + \\nabla\\cdot\\nabla p = 0 + \\nabla^2 p', why: 'Take the divergence of the decomposition. The divergence of a gradient is the Laplacian.' },
            { tex: '\\nabla^2 p = \\nabla\\cdot\\vec w', why: 'A **Poisson equation** for $p$: the right side is known from the current velocity.' },
            { tex: '\\vec u = \\vec w - \\nabla p', why: 'Subtract the gradient. By construction $\\nabla\\cdot\\vec u = \\nabla\\cdot\\vec w - \\nabla^2 p = 0$.' },
          ],
          result: 'The expensive part is solving the Poisson equation on the grid, with Jacobi or Gauss–Seidel sweeps, multigrid or conjugate gradients. That one linear solve is often the most expensive part of a fluid solver\'s frame time.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          height: 320,
          field: { x: '-y + 0.8(1 - s)x', y: 'x + 0.8(1 - s)y', n: 13 },
          parametric: [{ x: '2cos(t)', y: '2sin(t)', t: [0, '2pi'], color: 'red', dashed: true }],
          sliders: [{ name: 's', min: 0, max: 1, step: 0.01, value: 0, label: 'fraction of $\\nabla p$ removed', play: true }],
          readouts: [
            { label: '$\\nabla\\cdot(\\text{field}) = 1.6(1 - s) =$', expr: '1.6(1 - s)', digits: 3 },
            { label: 'net outflow across the circle $=$', expr: '1.6(1 - s)*4pi', digits: 3 },
          ],
          caption: 'Start from $\\vec w = \\langle -y, x \\rangle + \\nabla p$ with $p = 0.4(x^2 + y^2)$: a swirl plus a spreading part, with $\\nabla\\cdot\\vec w = \\nabla^2 p = 1.6$. Press ▶ to subtract $\\nabla p$. At the end only the swirl remains: the arrows run along the dashed circle and nothing crosses it.',
        },
        {
          type: 'code',
          title: 'pressure_projection.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <numbers>
#include <vector>

// A periodic N x N MAC grid on [0, 2pi)^2: pressure p at cell centers,
// u (x-velocity) on the left face of each cell, v (y-velocity) on the bottom face.
constexpr int N = 32;
const double h = 2 * std::numbers::pi / N;
using Grid = std::vector<double>;
int id(int i, int j) { return ((i + N) % N) * N + (j + N) % N; }   // wraps around

double divergence(const Grid& u, const Grid& v, int i, int j) {
    return (u[id(i + 1, j)] - u[id(i, j)] + v[id(i, j + 1)] - v[id(i, j)]) / h;
}
double maxAbsDiv(const Grid& u, const Grid& v) {
    double m = 0;
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j) m = std::max(m, std::fabs(divergence(u, v, i, j)));
    return m;
}

int main() {
    Grid u(N * N), v(N * N), p(N * N, 0.0), rhs(N * N);
    // Initial velocity w = (divergence-free swirl <sin y, sin x>) + grad(cos x cos y).
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j) {
            double xu = i * h, yu = (j + 0.5) * h;      // left-face center
            double xv = (i + 0.5) * h, yv = j * h;      // bottom-face center
            u[id(i, j)] = std::sin(yu) - std::sin(xu) * std::cos(yu);
            v[id(i, j)] = std::sin(xv) - std::cos(xv) * std::sin(yv);
        }
    std::printf("before projection: max |div w| = %.4f\\n", maxAbsDiv(u, v));

    // 1. Solve the Poisson equation  lap p = div w  (5-point Laplacian, Gauss-Seidel).
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j) rhs[id(i, j)] = divergence(u, v, i, j);
    for (int sweep = 0; sweep < 2000; ++sweep)
        for (int i = 0; i < N; ++i)
            for (int j = 0; j < N; ++j)
                p[id(i, j)] = (p[id(i + 1, j)] + p[id(i - 1, j)] + p[id(i, j + 1)] + p[id(i, j - 1)]
                               - h * h * rhs[id(i, j)]) / 4;

    // 2. Subtract the pressure gradient: u = w - grad p.
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j) {
            u[id(i, j)] -= (p[id(i, j)] - p[id(i - 1, j)]) / h;
            v[id(i, j)] -= (p[id(i, j)] - p[id(i, j - 1)]) / h;
        }
    std::printf("after projection:  max |div u| = %.4f\\n", maxAbsDiv(u, v));

    // How close is u to the divergence-free swirl we started from?
    double err = 0;
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j) {
            err = std::max(err, std::fabs(u[id(i, j)] - std::sin((j + 0.5) * h)));
            err = std::max(err, std::fabs(v[id(i, j)] - std::sin((i + 0.5) * h)));
        }
    std::printf("max |u - swirl| = %.4f\\n", err);
}`,
          output: `before projection: max |div w| = 1.9776
after projection:  max |div u| = 0.0000
max |u - swirl| = 0.0000`,
          annotations: [
            { lines: '7-12', text: 'A **MAC grid** (staggered grid), as in Bridson\'s and many production solvers: pressure lives at cell centers and each velocity component on the cell faces it crosses. The grid wraps around (periodic), so there are no walls to handle.' },
            { lines: '14-16', text: 'Discrete divergence: net outflow through the four faces of a cell divided by $h$. This is the divergence theorem applied to one grid cell.' },
            { lines: '26-33', text: 'The initial velocity: a divergence-free swirl plus the gradient of $\\cos x\\cos y$, which supplies all of the divergence.' },
            { lines: '37-43', text: 'Gauss–Seidel sweeps for $\\nabla^2 p = \\nabla\\cdot\\vec w$ with the five-point Laplacian $\\frac{p_{i+1,j} + p_{i-1,j} + p_{i,j+1} + p_{i,j-1} - 4p_{i,j}}{h^2}$.' },
            { lines: '46-50', text: 'Subtract the discrete gradient of $p$. On a MAC grid, divergence of this gradient is exactly the five-point Laplacian, so the result is divergence-free to round-off.' },
            { lines: '53-60', text: 'The projection recovered the swirl: all of the gradient part, and only that, was removed.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'When you do not need a solver: curl noise',
          text: 'For effects that only need to **look** like fluid, skip the simulation and use [[calc3-curl-noise|curl noise]] (Bridson, Hourihan and Nordenstam, 2007): $\\vec u = \\nabla\\times\\vec\\psi$ for a smooth noise field $\\vec\\psi = \\langle \\psi_1, \\psi_2, \\psi_3 \\rangle$. Since $\\operatorname{div}(\\operatorname{curl}) = 0$ it is divergence-free automatically, so particles swirl without clumping, no Poisson solve needed. Unit 11 built the 2D version.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the pressure projection step of a grid fluid solver in order, starting from the velocity $\\vec w$ produced by advection and forces.',
      lines: [
        'Compute the divergence $\\nabla\\cdot\\vec w$ in every grid cell',
        'Solve the Poisson equation $\\nabla^2 p = \\nabla\\cdot\\vec w$ for the pressure $p$',
        'Subtract the pressure gradient: $\\vec u = \\vec w - \\nabla p$',
        'Use the divergence-free $\\vec u$ to advect the fluid in the next frame',
      ],
      distractors: ['Solve $\\nabla^2 p = 0$ for the pressure'],
      explanation: 'The right-hand side of the Poisson equation is the divergence, so it must be computed first; the gradient of $p$ only exists once $p$ is solved for; and only the corrected $\\vec u$ is safe to move the fluid with. The distractor would give $p$ constant (on a periodic grid) and remove nothing.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'A curl-noise velocity field $\\vec u = \\nabla\\times\\vec\\psi$ must be passed through a pressure projection before it is divergence-free.',
      answer: false,
      explanation: 'It is divergence-free by construction: $\\nabla\\cdot(\\nabla\\times\\vec\\psi) = 0$ for any smooth $\\vec\\psi$, because mixed partials are equal. That is the whole appeal of curl noise. On a grid, computing the curl with central differences keeps the discrete divergence at round-off level, as the Unit 11 program showed.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'An effects artist wants embers to drift in swirling eddies that never bunch up into clumps or leave empty holes. Given a smooth noise function $n(x, y, z)$ (or noise vector field $\\vec\\psi$), which velocity field should drive the particles?',
      options: [
        { text: '$\\vec u = \\nabla n$', why: 'A gradient field is curl-free: it has no eddies. Its divergence $\\nabla^2 n$ is not zero, so particles flow uphill and pile up at the maxima of $n$.' },
        { text: '$\\vec u = \\langle n(x, y, z),\\ n(x + 17, y, z),\\ n(x, y + 31, z) \\rangle$', why: 'Three offset noise values give a random-looking field, but its divergence is not zero, so particles bunch at its sinks and thin out at its sources.' },
        { text: '$\\vec u = \\nabla\\times\\vec\\psi$', correct: true, why: 'A curl is divergence-free, so the particle density stays even, and it has swirls wherever $\\vec\\psi$ varies.' },
        { text: '$\\vec u = \\langle x, y, z \\rangle$', why: 'A pure source: everything streams outward and thins out, with no swirl at all.' },
      ],
      explanation: 'Clumping and holes are what nonzero divergence looks like: sinks gather particles, sources empty regions out. The curl of anything is divergence-free ($\\nabla\\cdot\\nabla\\times = 0$), while the gradient of anything is curl-free ($\\nabla\\times\\nabla = \\vec 0$). For swirling, non-clumping motion you want the first kind.',
    },
  ],
  takeaways: [
    'FTC, the gradient theorem, Green, Stokes and the divergence theorem are one statement: the integral of a derivative over a region equals the integral of the original over its boundary. $\\operatorname{curl}\\nabla = \\vec 0$ and $\\operatorname{div}\\operatorname{curl} = 0$ mirror "a boundary has no boundary".',
    'Maxwell\'s equations come in integral form (fluxes and circulations) and differential form (divergence and curl); the divergence theorem and Stokes\' theorem convert one into the other.',
    'Conservation plus the divergence theorem gives the continuity equation $\\frac{\\partial\\rho}{\\partial t} + \\nabla\\cdot(\\rho\\vec u) = 0$; for constant density it is $\\nabla\\cdot\\vec u = 0$.',
    'Surface normals are gradients: $\\nabla f$ for a signed distance function (unit length for an exact SDF), and $\\langle -h_x, -h_y, 1 \\rangle$ normalized for a height map or normal map.',
    'Game fluid solvers keep velocity divergence-free by projection: solve $\\nabla^2 p = \\nabla\\cdot\\vec w$, then set $\\vec u = \\vec w - \\nabla p$ (a Helmholtz decomposition). Curl noise is divergence-free for free.',
  ],
  reading: [
    {
      title: 'Inigo Quilez — Distance functions',
      url: 'https://iquilezles.org/articles/distfunctions/',
      source: 'other',
      note: 'The standard catalog of signed distance functions and their combinations, used in this lesson\'s raymarcher.',
    },
    {
      title: 'Wikipedia — Maxwell\'s equations',
      url: 'https://en.wikipedia.org/wiki/Maxwell%27s_equations',
      source: 'wikipedia',
      note: 'Integral and differential forms side by side, with the role of the divergence and Stokes\' theorems spelled out.',
    },
    {
      title: 'Wikipedia — Helmholtz decomposition',
      url: 'https://en.wikipedia.org/wiki/Helmholtz_decomposition',
      source: 'wikipedia',
      note: 'The theorem behind the pressure projection, with its precise hypotheses and its use in fluid dynamics.',
    },
    {
      title: 'Wikipedia — Generalized Stokes theorem',
      url: 'https://en.wikipedia.org/wiki/Generalized_Stokes_theorem',
      source: 'wikipedia',
      note: 'How the five theorems of this unit become one statement about differential forms.',
    },
    {
      title: '3Blue1Brown',
      url: 'https://www.3blue1brown.com/',
      source: 'other',
      note: 'The divergence and curl video ties these operators to Maxwell\'s equations and fluid flow, with animations.',
    },
  ],
};
