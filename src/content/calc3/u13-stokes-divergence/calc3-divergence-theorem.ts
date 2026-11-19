import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_CANCEL = `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
<rect x="40" y="60" width="160" height="160" class="f-blue" fill-opacity="0.10" stroke="none"/>
<line x1="40" y1="60" x2="40" y2="220" class="s-blue" stroke-width="2.6"/>
<line x1="40" y1="60" x2="200" y2="60" class="s-blue" stroke-width="2.6"/>
<line x1="120" y1="60" x2="120" y2="220" class="s-blue" stroke-width="1.4"/>
<line x1="40" y1="140" x2="200" y2="140" class="s-blue" stroke-width="1.4"/>
<line x1="200" y1="60" x2="200" y2="220" class="s-blue" stroke-width="2.6"/>
<line x1="40" y1="220" x2="200" y2="220" class="s-blue" stroke-width="2.6"/>
<line x1="120.0" y1="95.0" x2="141.0" y2="95.0" class="s-red" stroke-width="2"/><path d="M148.0,95.0 L140.0,98.0 L140.0,92.0 Z" class="f-red"/>
<line x1="120.0" y1="105.0" x2="99.0" y2="105.0" class="s-green" stroke-width="2"/><path d="M92.0,105.0 L100.0,102.0 L100.0,108.0 Z" class="f-green"/>
<line x1="120.0" y1="175.0" x2="141.0" y2="175.0" class="s-red" stroke-width="2"/><path d="M148.0,175.0 L140.0,178.0 L140.0,172.0 Z" class="f-red"/>
<line x1="120.0" y1="185.0" x2="99.0" y2="185.0" class="s-green" stroke-width="2"/><path d="M92.0,185.0 L100.0,182.0 L100.0,188.0 Z" class="f-green"/>
<line x1="75.0" y1="140.0" x2="75.0" y2="161.0" class="s-red" stroke-width="2"/><path d="M75.0,168.0 L72.0,160.0 L78.0,160.0 Z" class="f-red"/>
<line x1="85.0" y1="140.0" x2="85.0" y2="119.0" class="s-green" stroke-width="2"/><path d="M85.0,112.0 L88.0,120.0 L82.0,120.0 Z" class="f-green"/>
<line x1="155.0" y1="140.0" x2="155.0" y2="161.0" class="s-red" stroke-width="2"/><path d="M155.0,168.0 L152.0,160.0 L158.0,160.0 Z" class="f-red"/>
<line x1="165.0" y1="140.0" x2="165.0" y2="119.0" class="s-green" stroke-width="2"/><path d="M165.0,112.0 L168.0,120.0 L162.0,120.0 Z" class="f-green"/>
<line x1="80.0" y1="60.0" x2="80.0" y2="41.0" class="s-purple" stroke-width="2"/><path d="M80.0,34.0 L83.0,42.0 L77.0,42.0 Z" class="f-purple"/>
<line x1="160.0" y1="60.0" x2="160.0" y2="41.0" class="s-purple" stroke-width="2"/><path d="M160.0,34.0 L163.0,42.0 L157.0,42.0 Z" class="f-purple"/>
<line x1="200.0" y1="100.0" x2="219.0" y2="100.0" class="s-purple" stroke-width="2"/><path d="M226.0,100.0 L218.0,103.0 L218.0,97.0 Z" class="f-purple"/>
<line x1="200.0" y1="180.0" x2="219.0" y2="180.0" class="s-purple" stroke-width="2"/><path d="M226.0,180.0 L218.0,183.0 L218.0,177.0 Z" class="f-purple"/>
<line x1="80.0" y1="220.0" x2="80.0" y2="239.0" class="s-purple" stroke-width="2"/><path d="M80.0,246.0 L77.0,238.0 L83.0,238.0 Z" class="f-purple"/>
<line x1="160.0" y1="220.0" x2="160.0" y2="239.0" class="s-purple" stroke-width="2"/><path d="M160.0,246.0 L157.0,238.0 L163.0,238.0 Z" class="f-purple"/>
<line x1="40.0" y1="100.0" x2="21.0" y2="100.0" class="s-purple" stroke-width="2"/><path d="M14.0,100.0 L22.0,97.0 L22.0,103.0 Z" class="f-purple"/>
<line x1="40.0" y1="180.0" x2="21.0" y2="180.0" class="s-purple" stroke-width="2"/><path d="M14.0,180.0 L22.0,177.0 L22.0,183.0 Z" class="f-purple"/>
<text x="120" y="22" font-size="15" font-weight="700" text-anchor="middle">Interior faces cancel</text>
<text x="120" y="270" font-size="13" text-anchor="middle">each shared face is counted twice,</text>
<text x="120" y="286" font-size="13" text-anchor="middle">with opposite normals</text>
<path d="M295,140 a95,95 0 1,0 190,0 a95,95 0 1,0 -190,0 Z M350,140 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0 Z" class="f-teal" fill-opacity="0.16" fill-rule="evenodd"/>
<circle cx="390" cy="140" r="95" fill="none" class="s-blue" stroke-width="2.4"/>
<circle cx="390" cy="140" r="40" fill="none" class="s-red" stroke-width="2.4"/>
<line x1="477.8" y1="103.6" x2="495.3" y2="96.4" class="s-blue" stroke-width="2"/><path d="M501.8,93.7 L495.5,99.5 L493.3,94.0 Z" class="f-blue"/>
<line x1="426.4" y1="52.2" x2="433.6" y2="34.7" class="s-blue" stroke-width="2"/><path d="M436.3,28.2 L436.0,36.7 L430.5,34.5 Z" class="f-blue"/>
<line x1="353.6" y1="52.2" x2="346.4" y2="34.7" class="s-blue" stroke-width="2"/><path d="M343.7,28.2 L349.5,34.5 L344.0,36.7 Z" class="f-blue"/>
<line x1="302.2" y1="103.6" x2="284.7" y2="96.4" class="s-blue" stroke-width="2"/><path d="M278.2,93.7 L286.7,94.0 L284.5,99.5 Z" class="f-blue"/>
<line x1="302.2" y1="176.4" x2="284.7" y2="183.6" class="s-blue" stroke-width="2"/><path d="M278.2,186.3 L284.5,180.5 L286.7,186.0 Z" class="f-blue"/>
<line x1="353.6" y1="227.8" x2="346.4" y2="245.3" class="s-blue" stroke-width="2"/><path d="M343.7,251.8 L344.0,243.3 L349.5,245.5 Z" class="f-blue"/>
<line x1="426.4" y1="227.8" x2="433.6" y2="245.3" class="s-blue" stroke-width="2"/><path d="M436.3,251.8 L430.5,245.5 L436.0,243.3 Z" class="f-blue"/>
<line x1="477.8" y1="176.4" x2="495.3" y2="183.6" class="s-blue" stroke-width="2"/><path d="M501.8,186.3 L493.3,186.0 L495.5,180.5 Z" class="f-blue"/>
<line x1="418.3" y1="111.7" x2="407.7" y2="122.3" class="s-red" stroke-width="2"/><path d="M402.7,127.3 L406.3,119.5 L410.5,123.7 Z" class="f-red"/>
<line x1="361.7" y1="111.7" x2="372.3" y2="122.3" class="s-red" stroke-width="2"/><path d="M377.3,127.3 L369.5,123.7 L373.7,119.5 Z" class="f-red"/>
<line x1="361.7" y1="168.3" x2="372.3" y2="157.7" class="s-red" stroke-width="2"/><path d="M377.3,152.7 L373.7,160.5 L369.5,156.3 Z" class="f-red"/>
<line x1="418.3" y1="168.3" x2="407.7" y2="157.7" class="s-red" stroke-width="2"/><path d="M402.7,152.7 L410.5,156.3 L406.3,160.5 Z" class="f-red"/>
<circle cx="390" cy="140" r="3" fill="currentColor"/>
<text x="450.0" y="148" font-size="17" font-style="italic">E</text>
<text x="480.4" y="59.60000000000001" font-size="15" class="t-blue" font-style="italic">S₂</text>
<text x="380" y="170" font-size="15" class="t-red" font-style="italic">S₁</text>
<text x="390" y="22" font-size="15" font-weight="700" text-anchor="middle">Region between two surfaces</text>
<text x="390" y="279" font-size="13" text-anchor="middle">outer surface: normal points out;</text>
<text x="390" y="295" font-size="13" text-anchor="middle">inner surface: normal points into the hole</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-divergence-theorem',
  title: 'The Divergence Theorem',
  summary: 'The outward flux through a closed surface equals the integral of the divergence over the solid inside. Why it is true, verifying it both ways, computing awkward fluxes the easy way (including by closing an open surface), sources and sinks, regions with cavities, and Gauss\'s law for electricity and gravity.',
  minutes: 20,
  objectives: [
    'State the divergence theorem $\\oiint_S \\vec F\\cdot d\\vec S = \\iiint_E \\operatorname{div}\\vec F\\,dV$ with its hypotheses, and explain why it is true',
    'Verify the theorem on an example by computing the flux through every piece of a closed surface and the triple integral',
    'Compute fluxes through complicated closed surfaces with one triple integral, and through open surfaces by adding a lid',
    'Interpret divergence as outflow per unit volume, and orient the boundary of a region between two surfaces',
    'Derive Gauss\'s law from the inverse-square field and use it to find gravity inside a planet',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Outflow through a closed surface',
      blocks: [
        {
          type: 'p',
          text: 'Picture a balloon in a flowing gas. The [[calc3-flux|flux]] of the velocity field out through the balloon\'s skin tells you how much gas leaves per second, minus how much comes in. If more leaves than enters, gas must be appearing inside: something is a source. Last unit you met the local version of this idea: the [[calc3-divergence|divergence]] $\\operatorname{div}\\vec F = P_x + Q_y + R_z$ is net outflow **per unit volume** at a point. The divergence theorem adds up those local sources.',
        },
        {
          type: 'p',
          text: 'The surfaces here are [[calc3-closed-surface|closed]]: they bound a solid and have no edge, like a sphere, a closed cylinder (side plus top and bottom) or the surface of a cube. A flux integral over a closed surface is often written $\\oiint_S$, and closed surfaces get the **outward** normal unless told otherwise.',
        },
        {
          type: 'theorem',
          name: 'The divergence theorem (Gauss\'s theorem)',
          tex: '\\oiint_S \\vec F\\cdot d\\vec S = \\iiint_E \\operatorname{div}\\vec F\\,dV',
          text: 'Let $E$ be a solid region whose boundary $S$ is a closed, piecewise-smooth surface with the outward orientation. Let $\\vec F$ have continuous partial derivatives on an open region containing $E$. Then the outward flux of $\\vec F$ through $S$ equals the triple integral of $\\operatorname{div}\\vec F$ over $E$. This is the [[calc3-divergence-theorem|divergence theorem]].',
        },
        {
          type: 'plot3d',
          x: [-1.7, 1.7],
          y: [-1.7, 1.7],
          z: [-1.7, 1.7],
          equal: true,
          parametricSurfaces: [{ x: '(1.2 + a*sin(v)^2*sin(2u))*sin(v)*cos(u)', y: '(1.2 + a*sin(v)^2*sin(2u))*sin(v)*sin(u)', z: '(1.2 + a*sin(v)^2*sin(2u))*cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'teal', opacity: 0.5 }],
          field: { x: 'x', y: 'y', z: 'z', n: 4, color: 'gray' },
          sliders: [{ name: 'a', min: 0, max: 0.5, step: 0.01, value: 0.35, label: 'bumpiness', play: true }],
          readouts: [{ label: 'outward flux of $\\langle x, y, z \\rangle$ $= 3\\cdot\\text{volume} =$', expr: '6.912pi + 3.84pi*a^2', digits: 3 }],
          resolution: 34,
          view: { azimuth: 30, elevation: 22 },
          caption: 'The field $\\langle x, y, z \\rangle$ streams out of every point at the same rate: $\\operatorname{div}\\vec F = 3$ everywhere. So the flux out of **any** closed surface is $3$ times the volume it encloses. Change the shape with the slider: the flux follows the volume, and nothing else about the surface matters.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'You have seen the flat version',
          text: 'Green\'s theorem in flux form says $\\oint_C \\vec F\\cdot\\vec n\\,ds = \\iint_D \\operatorname{div}\\vec F\\,dA$: outflow across a closed curve equals the total divergence in the region it bounds. The divergence theorem is the same sentence one dimension up, with "curve" replaced by "closed surface" and "region" by "solid".',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'For which of these can you apply the divergence theorem **directly**, as stated?',
      options: [
        { text: 'The upper unit hemisphere $z = \\sqrt{1 - x^2 - y^2}$ and $\\vec F = \\langle x, y, z \\rangle$', why: 'The hemisphere has an edge (the unit circle), so it does not bound a solid by itself. You could close it with the unit disk first, which is a technique coming up.' },
        { text: 'The side of the cylinder $x^2 + y^2 = 1$, $0 \\le z \\le 1$, without its top and bottom, and $\\vec F = \\langle x, y, 0 \\rangle$', why: 'An open tube is not a closed surface: it has two boundary circles.' },
        { text: 'The surface of the cube $[0, 1]^3$ with the outward normal and $\\vec F = \\langle x^2, yz, e^z \\rangle$', correct: true, why: 'The six faces together form a closed, piecewise-smooth surface, the field is smooth everywhere, and the orientation is outward.' },
        { text: 'The unit sphere and $\\vec F = \\dfrac{\\langle x, y, z \\rangle}{(x^2 + y^2 + z^2)^{3/2}}$', why: 'The surface is closed, but $\\vec F$ blows up at the origin, which is inside the ball. The hypothesis "smooth on a region containing $E$" fails. (This exact field gets special treatment later in the lesson.)' },
      ],
      explanation: 'The theorem needs two things: a **closed** surface bounding a solid $E$, with outward orientation, and a field with continuous partial derivatives on all of $E$. Only the cube qualifies. A piecewise-smooth surface is fine: the edges and corners of the cube do not matter.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Why the theorem is true',
      blocks: [
        {
          type: 'p',
          text: 'Chop $E$ into tiny boxes. For each box, the outward flux is about $\\operatorname{div}\\vec F$ times its volume: that is what divergence means. Add over all boxes. Every interior face is shared by two neighbours whose outward normals point in opposite directions, so its flux is counted once with each sign and cancels. Only the faces on the outer surface survive. In the limit: the total divergence inside equals the flux through the boundary.',
        },
        {
          type: 'figure',
          svg: FIG_CANCEL,
          alt: 'Left: a square split into four smaller squares; on each shared edge, two arrows point in opposite directions, while purple arrows point outward on the outer edges. Right: a ring-shaped region between an outer blue circle with outward arrows and an inner red circle whose arrows point toward the center.',
          caption: 'Left: interior faces cancel, which is the heart of the proof. Right: for a solid with a cavity, "outward from $E$" means away from the center on the outer surface and **toward** the center on the inner one. You will need that picture for Gauss\'s law.',
        },
        {
          type: 'p',
          text: 'The rigorous proof splits $\\vec F = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ and proves the theorem one component at a time. Here is the $R$ part for a solid between two graphs, the kind of region you integrated over in Unit 9.',
        },
        {
          type: 'derivation',
          title: '$\\oiint_S R\\,\\mathbf{k}\\cdot d\\vec S = \\iiint_E R_z\\,dV$ for $E = \\{ (x, y) \\in D,\\ u_1(x, y) \\le z \\le u_2(x, y) \\}$',
          steps: [
            { tex: '\\iiint_E \\frac{\\partial R}{\\partial z}\\,dV = \\iint_D \\left[ \\int_{u_1}^{u_2} \\frac{\\partial R}{\\partial z}\\,dz \\right] dA', why: 'Write the triple integral as an iterated integral, $z$ innermost.' },
            { tex: '= \\iint_D \\big[ R(x, y, u_2) - R(x, y, u_1) \\big]\\,dA', why: 'The [[fundamental-theorem-of-calculus]] in the $z$-direction. This is where "continuous partial derivatives" is used.' },
            { tex: '\\iint_{\\text{top}} R\\,\\mathbf{k}\\cdot d\\vec S = \\iint_D R(x, y, u_2)\\,dA', why: 'The top $z = u_2$ is oriented upward (outward), with $d\\vec S = \\langle -u_{2,x}, -u_{2,y}, 1 \\rangle\\,dA$. Only its $\\mathbf{k}$-component meets $R\\,\\mathbf{k}$.' },
            { tex: '\\iint_{\\text{bottom}} R\\,\\mathbf{k}\\cdot d\\vec S = -\\iint_D R(x, y, u_1)\\,dA', why: 'The bottom is oriented **downward** (outward from $E$), which flips the sign.' },
            { tex: '\\iint_{\\text{sides}} R\\,\\mathbf{k}\\cdot d\\vec S = 0', why: 'Any vertical side walls have horizontal normals, so $\\mathbf{k}\\cdot\\vec n = 0$ there.' },
          ],
          result: 'The flux of $R\\,\\mathbf{k}$ out of $E$ matches $\\iiint_E R_z\\,dV$. The $P$ and $Q$ parts work the same way with $x$ and $y$ in place of $z$; add the three to get the theorem.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'Suppose $\\vec F$ is smooth on a solid ball $E$ and $\\operatorname{div}\\vec F > 0$ at every point of $E$. Then the outward flux of $\\vec F$ through the boundary sphere is positive.',
      answer: true,
      explanation: 'By the divergence theorem the flux equals $\\iiint_E \\operatorname{div}\\vec F\\,dV$, the integral of a positive continuous function over a solid of positive volume, which is positive. Physically: every point inside is a source, so more fluid must leave than enter. (The field can still point inward on parts of the sphere; only the total is forced to be positive.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Verifying the theorem both ways',
      blocks: [
        {
          type: 'p',
          text: 'Let $E$ be the solid cylinder $x^2 + y^2 \\le 1$, $0 \\le z \\le 2$, and $\\vec F = \\langle x, y, z^2 \\rangle$. The boundary $S$ has three pieces: the side, the top disk and the bottom disk. Compute the flux through each with its outward normal, then compare with the triple integral.',
        },
        {
          type: 'derivation',
          title: 'Flux through the three pieces',
          steps: [
            { tex: '\\text{Side: } \\vec n = \\langle x, y, 0 \\rangle,\\quad \\vec F\\cdot\\vec n = x^2 + y^2 = 1', why: 'On the cylinder of radius $1$, the outward unit normal is the horizontal radial vector. Here $\\vec F\\cdot\\vec n$ is constant.' },
            { tex: '\\iint_{\\text{side}} \\vec F\\cdot\\vec n\\,dS = 1\\cdot\\operatorname{area} = 1\\cdot(2\\pi\\cdot 1\\cdot 2) = 4\\pi', why: 'The side is a rectangle $2\\pi$ around and $2$ tall when unrolled.' },
            { tex: '\\text{Top } (z = 2):\\ \\vec n = \\mathbf{k},\\quad \\vec F\\cdot\\mathbf{k} = z^2 = 4 \\implies 4\\cdot\\pi = 4\\pi', why: 'Constant $4$ over the unit disk of area $\\pi$.' },
            { tex: '\\text{Bottom } (z = 0):\\ \\vec n = -\\mathbf{k},\\quad \\vec F\\cdot(-\\mathbf{k}) = -z^2 = 0 \\implies 0', why: 'Outward on the bottom is **down**. Here $z = 0$, so nothing crosses.' },
            { tex: '\\oiint_S \\vec F\\cdot d\\vec S = 4\\pi + 4\\pi + 0 = 8\\pi', why: 'Add the three pieces.' },
          ],
          result: 'Surface side: $8\\pi$.',
        },
        {
          type: 'derivation',
          title: 'The triple integral',
          steps: [
            { tex: '\\operatorname{div}\\vec F = 1 + 1 + 2z = 2 + 2z', why: '$P_x = 1$, $Q_y = 1$, $R_z = 2z$.' },
            { tex: '\\iiint_E (2 + 2z)\\,dV = \\int_0^{2\\pi}\\int_0^1\\int_0^2 (2 + 2z)\\,dz\\,r\\,dr\\,d\\theta', why: '[[calc3-cylindrical-coordinates|Cylindrical coordinates]], with $dV = r\\,dz\\,dr\\,d\\theta$.' },
            { tex: '= \\Big[ 2z + z^2 \\Big]_0^2\\cdot\\int_0^{2\\pi}\\int_0^1 r\\,dr\\,d\\theta = 8\\cdot\\pi = 8\\pi', why: 'The $z$-integral gives $4 + 4 = 8$, and the rest is the area of the unit disk.' },
          ],
          result: 'Volume side: $8\\pi$. The two agree. ✓',
        },
        {
          type: 'plot3d',
          x: [-1.7, 1.7],
          y: [-1.7, 1.7],
          z: [-0.8, 2.8],
          equal: true,
          parametricSurfaces: [
            { x: 'cos(u)', y: 'sin(u)', z: 'v', u: [0, '2pi'], v: [0, 2], color: 'teal', opacity: 0.45, label: 'side' },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '2', u: [0, 1], v: [0, '2pi'], color: 'blue', opacity: 0.5, label: 'top' },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '0', u: [0, 1], v: [0, '2pi'], color: 'orange', opacity: 0.5, label: 'bottom' },
          ],
          field: { x: 'x', y: 'y', z: 'z^2', n: 4, color: 'gray' },
          vectors: [
            { from: ['cos(q)', 'sin(q)', 'h'], to: ['1.65cos(q)', '1.65sin(q)', 'h'], color: 'red', label: 'n' },
            { from: [0.4, 0, 2], to: [0.4, 0, 2.7], color: 'red' },
            { from: [-0.4, 0, 0], to: [-0.4, 0, -0.7], color: 'red' },
          ],
          sliders: [
            { name: 'q', min: 0, max: 6.28, step: 0.02, value: 0.6, label: 'side normal: angle' },
            { name: 'h', min: 0, max: 2, step: 0.02, value: 1, label: 'side normal: height' },
          ],
          view: { azimuth: 30, elevation: 20 },
          caption: 'The closed cylinder with an outward normal on each piece (red) and the field $\\langle x, y, z^2 \\rangle$ (gray). Notice the bottom normal points **down**: forgetting that is the most common sign error with closed surfaces. Here it costs nothing, since $\\vec F$ is horizontal on the bottom.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Use the divergence theorem to find the outward flux of $\\vec F = \\langle x^3,\\ y^3,\\ z^3 \\rangle$ through the unit sphere $x^2 + y^2 + z^2 = 1$. An exact answer or a decimal to 2 places is accepted.',
      answer: '12pi/5',
      answerTex: '\\frac{12\\pi}{5} \\approx 7.54',
      hint: '$\\operatorname{div}\\vec F = 3x^2 + 3y^2 + 3z^2 = 3\\rho^2$. In [[calc3-spherical-coordinates|spherical coordinates]], $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.',
      explanation: '$\\iiint_E 3\\rho^2\\,dV = \\int_0^{2\\pi}\\int_0^{\\pi}\\int_0^1 3\\rho^2\\cdot\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta = 2\\pi\\cdot 2\\cdot\\frac{3}{5} = \\frac{12\\pi}{5} \\approx 7.54$. Directly you would need $\\oiint_S (x^4 + y^4 + z^4)\\,dS = 3\\cdot\\frac{4\\pi}{5}$, which also works but takes longer. Dropping the $\\rho^2$ from $dV$ gives $4\\pi$, a common slip.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Fluxes the easy way',
      blocks: [
        {
          type: 'p',
          text: 'The real power of the theorem is on surfaces made of several awkward pieces, or fields whose components are impossible to integrate over a surface but whose divergence is simple.',
        },
        {
          type: 'derivation',
          title: 'Flux of $\\vec F = \\langle xy,\\ y^2 + e^{xz^2},\\ \\sin(xy) \\rangle$ out of the solid bounded by $z = 1 - x^2$, $z = 0$, $y = 0$ and $y + z = 2$',
          steps: [
            { tex: '\\operatorname{div}\\vec F = y + 2y + 0 = 3y', why: '$\\frac{\\partial}{\\partial x}(xy) = y$; $\\frac{\\partial}{\\partial y}(y^2 + e^{xz^2}) = 2y$ because $e^{xz^2}$ has no $y$; $\\sin(xy)$ has no $z$.' },
            { tex: 'E:\\ -1 \\le x \\le 1,\\quad 0 \\le z \\le 1 - x^2,\\quad 0 \\le y \\le 2 - z', why: 'Read the bounds off the picture below: the parabolic cylinder is the roof, $y = 0$ and $y = 2 - z$ are the back and front walls, $z = 0$ is the floor.' },
            { tex: '\\iiint_E 3y\\,dV = \\int_{-1}^{1}\\int_0^{1 - x^2} \\frac{3(2 - z)^2}{2}\\,dz\\,dx', why: 'Inner integral: $\\int_0^{2 - z} 3y\\,dy = \\frac{3}{2}(2 - z)^2$.' },
            { tex: '= \\int_{-1}^{1} \\frac{(x^2 + 1)^3 - 8}{-2}\\,dx = \\frac{184}{35}', why: '$\\int \\frac{3}{2}(2 - z)^2\\,dz = -\\frac{1}{2}(2 - z)^3$; evaluate from $0$ to $1 - x^2$ (where $2 - z = 1 + x^2$), then expand and integrate the polynomial.' },
          ],
          result: 'The flux is $\\frac{184}{35} \\approx 5.257$. Computing it directly would mean four surface integrals, one of them containing $e^{xz^2}$, which has no elementary antiderivative.',
        },
        {
          type: 'plot3d',
          x: [-1.2, 1.2],
          y: [-0.2, 2.2],
          z: [-0.1, 1.3],
          equal: true,
          parametricSurfaces: [
            { x: 'u', y: 'v*(1 + u^2)', z: '1 - u^2', u: [-1, 1], v: [0, 1], color: 'teal', opacity: 0.55, label: 'roof $z = 1 - x^2$' },
            { x: 'u', y: '2 - v*(1 - u^2)', z: 'v*(1 - u^2)', u: [-1, 1], v: [0, 1], color: 'blue', opacity: 0.45, label: 'front $y + z = 2$' },
            { x: 'u', y: '0', z: 'v*(1 - u^2)', u: [-1, 1], v: [0, 1], color: 'purple', opacity: 0.45, label: 'back $y = 0$' },
            { x: 'u', y: '2v', z: '0', u: [-1, 1], v: [0, 1], color: 'orange', opacity: 0.45, label: 'floor $z = 0$' },
          ],
          curves: [
            { x: 't', y: '0', z: '1 - t^2', t: [-1, 1], color: 'gray' },
            { x: 't', y: '1 + t^2', z: '1 - t^2', t: [-1, 1], color: 'gray' },
          ],
          segments: [
            { from: [-1, 0, 0], to: [1, 0, 0] },
            { from: [-1, 2, 0], to: [1, 2, 0] },
            { from: [-1, 0, 0], to: [-1, 2, 0] },
            { from: [1, 0, 0], to: [1, 2, 0] },
          ],
          resolution: 20,
          view: { azimuth: -50, elevation: 32 },
          caption: 'The solid $E$ and its four boundary pieces. Each would need its own parametrization, normal and integral. The divergence theorem replaces all of that with one triple integral of $3y$.',
        },
        {
          type: 'heading',
          text: 'Open surfaces: add a lid',
        },
        {
          type: 'p',
          text: 'A surface with an edge is not closed, but you can often close it with a simple lid. If $S$ plus the lid $L$ bounds $E$, then $\\iint_S \\vec F\\cdot d\\vec S = \\iiint_E \\operatorname{div}\\vec F\\,dV - \\iint_L \\vec F\\cdot d\\vec S$, with both $S$ and $L$ oriented outward from $E$.',
        },
        {
          type: 'derivation',
          title: 'Upward flux of $\\vec F = \\langle y^2 z,\\ x e^z,\\ z + 1 \\rangle$ through the paraboloid $z = 4 - x^2 - y^2$, $z \\ge 0$',
          steps: [
            { tex: 'L:\\ \\text{the disk } x^2 + y^2 \\le 4,\\ z = 0,\\ \\vec n = -\\mathbf{k}', why: 'The disk closes off the bottom. Outward from the solid under the dome means **down**.' },
            { tex: '\\iiint_E \\operatorname{div}\\vec F\\,dV = \\iiint_E 1\\,dV = \\int_0^{2\\pi}\\int_0^2 (4 - r^2)\\,r\\,dr\\,d\\theta = 8\\pi', why: '$\\operatorname{div}\\vec F = 0 + 0 + 1$, so this is the volume under the paraboloid.' },
            { tex: '\\iint_L \\vec F\\cdot(-\\mathbf{k})\\,dS = \\iint_L -(0 + 1)\\,dA = -4\\pi', why: 'On the lid $z = 0$, so the $\\mathbf{k}$-component $z + 1$ equals $1$; the area of the disk is $4\\pi$.' },
            { tex: '\\iint_S \\vec F\\cdot d\\vec S = 8\\pi - (-4\\pi) = 12\\pi', why: 'Total outward flux minus the lid\'s share.' },
          ],
          result: 'The flux up through the paraboloid is $12\\pi$ (a direct computation, with $e^{4 - x^2 - y^2}$ in the integrand, agrees numerically: $37.699$).',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [-1.2, 4.5],
          parametricSurfaces: [
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '4 - u^2', u: [0, 2], v: [0, '2pi'], color: 'teal', opacity: 0.55, label: '$S$: paraboloid' },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '0', u: [0, 2], v: [0, '2pi'], color: 'orange', opacity: 0.55, label: '$L$: lid' },
          ],
          vectors: [
            { from: ['a*cos(b)', 'a*sin(b)', '4 - a^2'], to: ['a*cos(b) + 0.4*2a*cos(b)/sqrt(4a^2 + 1)*2', 'a*sin(b) + 0.4*2a*sin(b)/sqrt(4a^2 + 1)*2', '4 - a^2 + 0.8/sqrt(4a^2 + 1)'], color: 'red', label: 'n' },
            { from: [0.8, -0.6, 0], to: [0.8, -0.6, -1], color: 'red', label: 'n' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 1.9, step: 0.02, value: 1.2, label: 'normal on $S$: distance from axis' },
            { name: 'b', min: 0, max: 6.28, step: 0.02, value: 1.6, label: 'normal on $S$: angle' },
          ],
          view: { azimuth: 30, elevation: 20 },
          caption: 'The paraboloid $S$ plus the lid $L$ form a closed surface. Both normals point out of the solid: up and out through $S$, straight down through $L$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the steps for finding the flux through an **open** surface $S$ with the divergence theorem in order.',
      lines: [
        'Choose a simple lid $L$ so that $S$ and $L$ together bound a solid $E$',
        'Orient $S$ and $L$ outward from $E$ (and check this matches the orientation asked for on $S$)',
        'Compute the total outward flux $\\iiint_E \\operatorname{div}\\vec F\\,dV$',
        'Compute the lid\'s flux $\\iint_L \\vec F\\cdot d\\vec S$ and subtract it from the total',
      ],
      distractors: ['Add the lid\'s flux to the triple integral'],
      explanation: 'The lid must exist before you can talk about the solid $E$ or the outward direction. Then the theorem gives the total $\\iint_S + \\iint_L = \\iiint_E \\operatorname{div}\\vec F\\,dV$, so $\\iint_S$ is the total **minus** the lid\'s share. The distractor gets that sign wrong. If the problem wanted $S$ with the inward orientation, negate at the end.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'Let $\\vec F = \\langle x y^2,\\ y z^2,\\ z x^2 \\rangle$ and $E$ the ball $x^2 + y^2 + z^2 \\le 4$. Writing the outward flux as $\\int_0^{2\\pi}\\int_0^{\\pi}\\int_0^{2} (\\dots)\\,d\\rho\\,d\\phi\\,d\\theta$ in spherical coordinates, enter the integrand in terms of `rho` and `phi`.',
      label: 'integrand $=$',
      answer: 'rho^4*sin(phi)',
      answerTex: '\\rho^4\\sin\\phi',
      variables: ['rho', 'phi'],
      domain: [0.2, 2.8],
      hint: 'First find $\\operatorname{div}\\vec F$, and notice what it is in spherical coordinates. Then include the volume element.',
      explanation: '$\\operatorname{div}\\vec F = y^2 + z^2 + x^2 = \\rho^2$, and $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$, so the integrand is $\\rho^4\\sin\\phi$. The flux is $2\\pi\\cdot 2\\cdot\\frac{2^5}{5} = \\frac{128\\pi}{5}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Sources and sinks',
      blocks: [
        {
          type: 'p',
          text: 'Apply the theorem to a tiny ball $B_a$ of radius $a$ around a point $P_0$. The divergence is continuous, so it is nearly constant on the ball, and',
        },
        {
          type: 'math',
          tex: '\\oiint_{\\partial B_a} \\vec F\\cdot d\\vec S = \\iiint_{B_a} \\operatorname{div}\\vec F\\,dV \\approx \\operatorname{div}\\vec F(P_0)\\cdot\\tfrac{4}{3}\\pi a^3 \\quad\\implies\\quad \\operatorname{div}\\vec F(P_0) = \\lim_{a\\to 0} \\frac{1}{\\operatorname{vol}(B_a)}\\oiint_{\\partial B_a} \\vec F\\cdot d\\vec S',
          caption: 'Divergence is outward flux per unit volume, now as a theorem. Like the curl, it does not depend on coordinates.',
        },
        {
          type: 'list',
          items: [
            '$\\operatorname{div}\\vec F(P_0) > 0$: a **source**. Small closed surfaces around $P_0$ have net outflow; a gas there is expanding, or fluid is being pumped in.',
            '$\\operatorname{div}\\vec F(P_0) < 0$: a **sink**. Net inflow; the gas is being compressed, or fluid drains away.',
            '$\\operatorname{div}\\vec F = 0$ throughout a solid: as much enters as leaves through its boundary. Incompressible fluids, and magnetic fields, behave this way.',
          ],
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-2, 2],
          equal: true,
          field: { x: 'x*z', y: 'y*z', z: '0', n: 5, color: 'gray' },
          parametricSurfaces: [{ x: 'p + b*sin(v)*cos(u)', y: 'b*sin(v)*sin(u)', z: 'h + b*cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'teal', opacity: 0.55 }],
          points: [{ x: 'p', y: 0, z: 'h', color: 'red' }],
          sliders: [
            { name: 'h', min: -1.4, max: 1.4, step: 0.02, value: 0.9, label: 'height of the center $z_0$' },
            { name: 'p', min: -1.2, max: 1.2, step: 0.02, value: 0, label: 'center $x_0$' },
            { name: 'b', min: 0.1, max: 0.6, step: 0.01, value: 0.45, label: 'radius' },
          ],
          readouts: [
            { label: '$\\operatorname{div}\\vec F$ at the center $= 2z_0 =$', expr: '2h', digits: 2 },
            { label: 'outward flux through the sphere $=$', expr: '2h*(4/3)*pi*b^3', digits: 4 },
            { label: 'flux $\\div$ volume $=$', expr: '2h', digits: 2 },
          ],
          view: { azimuth: 30, elevation: 15 },
          caption: 'The field $\\vec F = \\langle xz, yz, 0 \\rangle$ has $\\operatorname{div}\\vec F = 2z$: it spreads out horizontally above the $xy$-plane and squeezes inward below it. Move the small sphere up and down: its outward flux is positive above the plane, negative below, and zero when centered on it. Because $\\operatorname{div}\\vec F$ is linear here, flux divided by volume equals the divergence at the center exactly, for any radius.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Let $\\vec F = \\langle x^2, 0, 0 \\rangle$ and let $S$ be the surface of the cube $[-1, 0]\\times[0, 1]\\times[0, 1]$, oriented outward. What is the sign of the flux of $\\vec F$ through $S$?',
      options: [
        { text: 'Positive', why: 'All arrows point in the $+x$ direction, which might suggest net outflow, but the field is **weaker** on the right face ($x = 0$, where $F = 0$) than on the left face ($x = -1$, where it enters with strength $1$).' },
        { text: 'Negative', correct: true, why: '$\\operatorname{div}\\vec F = 2x < 0$ inside this cube, so it acts as a sink: more flows in than out.' },
        { text: 'Zero', why: 'The flux would be zero if the divergence integrated to zero. Here $2x$ is negative throughout the cube.' },
        { text: 'It cannot be determined without computing each face', why: 'The divergence theorem decides it from the sign of $\\operatorname{div}\\vec F$ alone.' },
      ],
      explanation: '$\\iiint_E 2x\\,dV = \\int_{-1}^{0} 2x\\,dx = -1$ (the $y$ and $z$ widths are $1$). Check by faces: only $x = -1$ and $x = 0$ have nonzero $\\vec F\\cdot\\vec n$. On $x = -1$, $\\vec n = -\\mathbf{i}$ and $\\vec F\\cdot\\vec n = -1$, giving $-1$; on $x = 0$, $\\vec F = \\vec 0$. Total $-1$. Fluid enters fast on the left and leaves with speed $0$ on the right: it piles up, which is what a sink means.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Regions with cavities and the inverse-square field',
      blocks: [
        {
          type: 'p',
          text: 'The theorem also holds for a solid with a hole in it, such as the shell between two spheres, provided $S$ includes **every** boundary piece, each oriented outward from $E$. On an inner surface that means pointing into the hole (the right half of the figure above). For the shell $1 \\le \\rho \\le 2$ and $\\vec F = \\langle x, y, z \\rangle$: the outer sphere contributes $2\\cdot 16\\pi = 32\\pi$, the inner sphere, with $\\vec n = -\\vec r$, contributes $-1\\cdot 4\\pi = -4\\pi$, and $32\\pi - 4\\pi = 28\\pi = 3\\cdot\\frac{4}{3}\\pi(2^3 - 1^3)$. ✓',
        },
        {
          type: 'p',
          text: 'This is how to handle a field that blows up at a point. The inverse-square field $\\vec E = \\dfrac{\\vec r}{|\\vec r|^3}$ is the shape of every point-source force in physics. Last unit you found its flux through any sphere around the origin is $4\\pi$. A short computation shows $\\operatorname{div}\\vec E = 0$ everywhere except the origin, where $\\vec E$ is undefined.',
        },
        {
          type: 'derivation',
          title: 'The flux of $\\vec r/|\\vec r|^3$ through **any** closed surface $S$ around the origin is $4\\pi$',
          steps: [
            { tex: 'S_a:\\ \\text{a small sphere } |\\vec r| = a \\text{ inside } S', why: 'Cut a tiny ball out around the troublesome point.' },
            { tex: 'E:\\ \\text{the solid between } S_a \\text{ and } S', why: '$\\vec E$ is smooth on $E$, so the divergence theorem applies to it. Its boundary is $S$ (outward) together with $S_a$ oriented **toward the origin**.' },
            { tex: '\\oiint_S \\vec E\\cdot d\\vec S + \\oiint_{S_a,\\ \\text{inward}} \\vec E\\cdot d\\vec S = \\iiint_E 0\\,dV = 0', why: '$\\operatorname{div}\\vec E = 0$ on $E$.' },
            { tex: '\\oiint_S \\vec E\\cdot d\\vec S = \\oiint_{S_a,\\ \\text{outward}} \\vec E\\cdot d\\vec S = 4\\pi', why: 'Reversing the small sphere\'s orientation moves it to the other side with a sign change. Its outward flux is $4\\pi$ for every radius $a$.' },
          ],
          result: 'Every closed surface around the origin, however lumpy, catches flux $4\\pi$. A closed surface that does **not** surround the origin catches $0$, since then $\\vec E$ is smooth inside it and $\\operatorname{div}\\vec E = 0$.',
        },
        {
          type: 'plot3d',
          x: [-1.8, 4],
          y: [-1.8, 1.8],
          z: [-1.8, 1.8],
          equal: true,
          field: { x: 'x/(x^2 + y^2 + z^2)^1.5', y: 'y/(x^2 + y^2 + z^2)^1.5', z: 'z/(x^2 + y^2 + z^2)^1.5', n: 4, color: 'gray' },
          parametricSurfaces: [{ x: 'c + (1.2 + 0.25sin(3u)*sin(v))*sin(v)*cos(u)', y: '(1.2 + 0.25sin(3u)*sin(v))*sin(v)*sin(u)', z: '(1.2 + 0.25sin(3u)*sin(v))*cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'teal', opacity: 0.5 }],
          points: [{ x: 0, y: 0, z: 0, label: 'source', color: 'red' }],
          sliders: [{ name: 'c', min: 0, max: 2.5, step: 0.25, value: 0, label: 'shift the surface along $x$' }],
          readouts: [{ label: 'outward flux of $\\vec r/|\\vec r|^3$ $=$', expr: '2pi*(1 + sign(1.2 - abs(c)))', digits: 4 }],
          resolution: 34,
          view: { azimuth: 25, elevation: 18 },
          caption: 'A lumpy closed surface and the inverse-square field of a source at the origin. While the surface surrounds the source the flux is $4\\pi \\approx 12.566$, whatever the shape. Slide it past the source ($x$-shift $\\ge 1.25$) and the flux drops to $0$: every field line that enters also leaves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'If $\\operatorname{div}\\vec F = 0$ at every point where $\\vec F$ is defined, then the flux of $\\vec F$ through every closed surface (that avoids the points where $\\vec F$ is undefined) is $0$.',
      answer: false,
      explanation: 'The inverse-square field $\\vec r/|\\vec r|^3$ has zero divergence wherever it is defined, yet its flux through any closed surface around the origin is $4\\pi$. The divergence theorem needs $\\vec F$ smooth on the **whole solid** inside the surface, and the origin is a hole in that solid. This is the divergence-theorem cousin of the vortex field that fools Stokes\' theorem.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Gauss\'s law for electricity and gravity',
      blocks: [
        {
          type: 'p',
          text: 'A point charge $q$ at the origin produces the electric field $\\vec E = \\dfrac{q}{4\\pi\\varepsilon_0}\\dfrac{\\vec r}{|\\vec r|^3}$, a constant times the inverse-square field. So its flux through any closed surface around the charge is $\\frac{q}{4\\pi\\varepsilon_0}\\cdot 4\\pi = \\frac{q}{\\varepsilon_0}$. Fields of several charges add, and so do their fluxes, while charges outside the surface contribute $0$. That is [[calc3-gauss-law|Gauss\'s law]]:',
        },
        {
          type: 'theorem',
          name: 'Gauss\'s law',
          tex: '\\oiint_S \\vec E\\cdot d\\vec S = \\frac{Q_{\\text{enc}}}{\\varepsilon_0} \\qquad\\qquad \\oiint_S \\vec g\\cdot d\\vec S = -4\\pi G\\,M_{\\text{enc}}',
          text: 'For any closed surface $S$: the electric flux is the enclosed charge over $\\varepsilon_0$. The [[phys-gravitational-field|gravitational field]] $\\vec g = -\\frac{GM\\vec r}{|\\vec r|^3}$ of a mass points inward, hence the minus sign, and its flux is $-4\\pi G$ times the enclosed mass.',
        },
        {
          type: 'derivation',
          title: 'Gravity inside a uniform planet of mass $M$ and radius $R$',
          steps: [
            { tex: '\\vec g = -g(r)\\,\\hat r', why: 'By symmetry the field points toward the center and its strength depends only on the distance $r$.' },
            { tex: '\\oiint_{|\\vec r| = r} \\vec g\\cdot d\\vec S = -g(r)\\cdot 4\\pi r^2', why: 'On a sphere of radius $r < R$, $\\vec g\\cdot\\vec n = -g(r)$ is constant; multiply by the area.' },
            { tex: 'M_{\\text{enc}} = M\\,\\frac{r^3}{R^3}', why: 'Uniform density: the enclosed mass is proportional to the enclosed volume.' },
            { tex: '-g(r)\\,4\\pi r^2 = -4\\pi G M\\frac{r^3}{R^3} \\implies g(r) = \\frac{GM}{R^3}\\,r = g_{\\text{surface}}\\,\\frac{r}{R}', why: 'Gauss\'s law, solved for $g(r)$, with $g_{\\text{surface}} = \\frac{GM}{R^2}$.' },
          ],
          result: 'Inside a uniform planet, gravity falls off **linearly** to zero at the center; outside, the same argument gives $\\frac{GM}{r^2}$, as if all the mass sat at the center. Newton proved this shell theorem with pages of geometry in the *Principia*; Gauss\'s law does it in two lines.',
        },
        {
          type: 'code',
          title: 'gauss_cube.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

struct Vec3 { double x, y, z; };

double clean(double v) { return std::fabs(v) < 5e-5 ? 0.0 : v; }  // print round-off as 0

// Inverse-square field r / |r|^3 of a unit point source at the origin.
Vec3 E(Vec3 p) {
    double r2 = p.x * p.x + p.y * p.y + p.z * p.z;
    double r3 = r2 * std::sqrt(r2);
    return {p.x / r3, p.y / r3, p.z / r3};
}

// Outward flux of E through the surface of the box [lo, hi]^3 shifted by c,
// face by face, with the midpoint rule on an N x N grid per face.
double boxFlux(Vec3 c, double lo, double hi, int N) {
    const double h = (hi - lo) / N, dA = h * h;
    double flux = 0;
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j) {
            double s = lo + (i + 0.5) * h, t = lo + (j + 0.5) * h;
            // x = hi (n = +i) and x = lo (n = -i); likewise for y and z.
            flux += (E({c.x + hi, c.y + s, c.z + t}).x - E({c.x + lo, c.y + s, c.z + t}).x) * dA;
            flux += (E({c.x + s, c.y + hi, c.z + t}).y - E({c.x + s, c.y + lo, c.z + t}).y) * dA;
            flux += (E({c.x + s, c.y + t, c.z + hi}).z - E({c.x + s, c.y + t, c.z + lo}).z) * dA;
        }
    return flux;
}

int main() {
    const int N = 400;
    std::printf("cube [-1,1]^3 around the source:   %.4f\\n", boxFlux({0, 0, 0}, -1, 1, N));
    std::printf("off-center cube, source inside:    %.4f\\n", boxFlux({0.5, 0.3, -0.2}, -1, 1, N));
    std::printf("cube centered at (3, 0, 0):        %.4f\\n", clean(boxFlux({3, 0, 0}, -1, 1, N)));
    std::printf("4 pi =                             %.4f\\n", 4 * std::numbers::pi);
}`,
          output: `cube [-1,1]^3 around the source:   12.5664
off-center cube, source inside:    12.5664
cube centered at (3, 0, 0):        0.0000
4 pi =                             12.5664`,
          annotations: [
            { lines: '10-14', text: 'The inverse-square field $\\vec r/|\\vec r|^3$: a unit point charge, or a point mass with the sign flipped.' },
            { lines: '18-30', text: 'Flux through the six faces of a cube, each a flat square with a constant normal $\\pm\\mathbf{i}, \\pm\\mathbf{j}, \\pm\\mathbf{k}$, so $\\vec E\\cdot\\vec n$ is just one component of $\\vec E$. Midpoint rule, $400\\times 400$ samples per face.' },
            { lines: '34-35', text: 'Cubes that contain the source, centered or not: $4\\pi$, the same as any sphere. Shape and position do not matter.' },
            { lines: 36, text: 'A cube that misses the source: $0$, up to round-off (line 7 prints that as $0$).' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Gauss\'s law in games',
          text: 'Physics engines rarely use Gauss\'s law directly, but its consequences show up everywhere. Games with walkable planets point gravity at the planet\'s center, and the shell theorem is what justifies treating a round planet as a point mass from outside. And a closed mesh\'s volume, mass and center of mass are computed with the divergence theorem: $\\operatorname{vol}(E) = \\frac{1}{3}\\oiint_S \\langle x, y, z \\rangle\\cdot d\\vec S$, a sum over triangles, with no voxels needed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Model Earth as a uniform ball of radius $6400$ km with surface gravity $9.8$ m/s². Using the result from Gauss\'s law, what is the strength of gravity at the bottom of a (hypothetical) shaft $1600$ km deep?',
      answer: '7.35',
      tolerance: 0.05,
      unit: 'm/s²',
      hint: 'Inside a uniform planet, $g(r) = g_{\\text{surface}}\\cdot\\frac{r}{R}$, where $r$ is the distance from the center.',
      explanation: 'At depth $1600$ km the distance from the center is $r = 6400 - 1600 = 4800$ km, so $g = 9.8\\cdot\\frac{4800}{6400} = 9.8\\cdot 0.75 = 7.35$ m/s². Only the mass inside radius $r$ pulls on you; the shell above you pulls equally in all directions and its net effect is zero. (Real Earth is much denser toward its core, so its actual gravity even increases slightly on the way down to the core, about $2900$ km deep. The uniform model is the textbook idealization.)',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A student computes the outward flux of $\\vec F = \\langle x, y, z \\rangle$ through the boundary of the shell $E$: $1 \\le x^2 + y^2 + z^2 \\le 4$, directly, to check the divergence theorem. Tap the first line that is wrong.',
      lines: [
        'The boundary of $E$ is the outer sphere $S_2$ ($\\rho = 2$) together with the inner sphere $S_1$ ($\\rho = 1$).',
        'On $S_2$: $\\vec n = \\frac{\\vec r}{2}$, so $\\vec F\\cdot\\vec n = \\frac{|\\vec r|^2}{2} = 2$ and the flux is $2\\cdot 16\\pi = 32\\pi$.',
        'On $S_1$: the normal pointing out of $E$ is $\\vec n = \\vec r$, so $\\vec F\\cdot\\vec n = |\\vec r|^2 = 1$.',
        'The flux through $S_1$ is $1\\cdot 4\\pi = 4\\pi$.',
        'Total: $32\\pi + 4\\pi = 36\\pi$.',
      ],
      errorLines: [3],
      explanation: 'On the inner sphere, "out of $E$" means into the cavity, **toward** the origin: $\\vec n = -\\vec r$. Then $\\vec F\\cdot\\vec n = -1$, the flux through $S_1$ is $-4\\pi$, and the total is $32\\pi - 4\\pi = 28\\pi$. That matches the divergence theorem: $\\iiint_E 3\\,dV = 3\\cdot\\frac{4}{3}\\pi(8 - 1) = 28\\pi$.',
    },
  ],
  takeaways: [
    'Divergence theorem: $\\oiint_S \\vec F\\cdot d\\vec S = \\iiint_E \\operatorname{div}\\vec F\\,dV$ for a solid $E$ with closed boundary $S$ oriented outward, and $\\vec F$ smooth on all of $E$.',
    'It is true because interior faces cancel: the total of all the tiny sources inside is the net flow out through the skin.',
    'To verify it, add the flux through every boundary piece (bottom normals point down) and compare with the triple integral.',
    'Hard fluxes through closed surfaces become one triple integral; an open surface can be closed with a lid whose flux you subtract.',
    '$\\operatorname{div}\\vec F(P_0)$ is outward flux per unit volume: positive at sources, negative at sinks.',
    'For a solid with a cavity, the inner boundary is oriented toward the cavity. Excising a small sphere shows that $\\vec r/|\\vec r|^3$ has flux $4\\pi$ through every closed surface around the origin: Gauss\'s law, $\\oiint_S \\vec E\\cdot d\\vec S = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — The Divergence Theorem (section 6.8)',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.8 states and proves the theorem and applies it to Gauss\'s law and to flux through surfaces with several pieces.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 5 covers the divergence theorem with recitation videos and problem sets, including the physical interpretation of divergence.',
    },
    {
      title: '3Blue1Brown',
      url: 'https://www.3blue1brown.com/',
      source: 'other',
      note: 'The divergence and curl video gives the fluid-flow picture of sources and sinks that the divergence theorem adds up.',
    },
    {
      title: 'Wikipedia — Gauss\'s law for gravity',
      url: 'https://en.wikipedia.org/wiki/Gauss%27s_law_for_gravity',
      source: 'wikipedia',
      note: 'Derives the shell theorem and the field inside a uniform sphere from Gauss\'s law, as in this lesson.',
    },
  ],
};
