import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_PATCH = `<svg viewBox="0 30 520 225" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="210" x2="190" y2="210" stroke="currentColor" stroke-width="1.5"/>
<path d="M195.0,210.0 L185.0,213.8 L185.0,206.2 Z" fill="currentColor"/>
<line x1="30" y1="210" x2="30" y2="50" stroke="currentColor" stroke-width="1.5"/>
<path d="M30.0,45.0 L33.8,55.0 L26.2,55.0 Z" fill="currentColor"/>
<text x="188" y="228" font-size="15" font-style="italic">u</text>
<text x="14" y="56" font-size="15" font-style="italic">v</text>
<line x1="45" y1="195" x2="45" y2="75" class="s-gray" stroke-width="1"/>
<line x1="45" y1="195" x2="165" y2="195" class="s-gray" stroke-width="1"/>
<line x1="69" y1="195" x2="69" y2="75" class="s-gray" stroke-width="1"/>
<line x1="45" y1="171" x2="165" y2="171" class="s-gray" stroke-width="1"/>
<line x1="93" y1="195" x2="93" y2="75" class="s-gray" stroke-width="1"/>
<line x1="45" y1="147" x2="165" y2="147" class="s-gray" stroke-width="1"/>
<line x1="117" y1="195" x2="117" y2="75" class="s-gray" stroke-width="1"/>
<line x1="45" y1="123" x2="165" y2="123" class="s-gray" stroke-width="1"/>
<line x1="141" y1="195" x2="141" y2="75" class="s-gray" stroke-width="1"/>
<line x1="45" y1="99" x2="165" y2="99" class="s-gray" stroke-width="1"/>
<line x1="165" y1="195" x2="165" y2="75" class="s-gray" stroke-width="1"/>
<line x1="45" y1="75" x2="165" y2="75" class="s-gray" stroke-width="1"/>
<rect x="93" y="123" width="24" height="24" class="f-orange" fill-opacity="0.55"/>
<text x="105" y="163" font-size="12" text-anchor="middle">Δu</text>
<text x="89" y="139" font-size="12" text-anchor="end">Δv</text>
<text x="105" y="240" font-size="13" text-anchor="middle">parameter domain D</text>
<line x1="190.0" y1="110.0" x2="244.0" y2="110.0" class="s-gray" stroke-width="2"/><path d="M250.6,110.0 L238.6,114.5 L238.6,105.5 Z" class="f-gray"/>
<text x="220" y="100" font-size="15" text-anchor="middle" font-style="italic">r(u, v)</text>
<polyline points="300.0,222.5 301.2,218.0 302.4,213.7 303.6,209.3 304.8,205.1 306.1,201.0 307.4,196.9 308.7,192.9 310.0,189.0 311.4,185.2 312.8,181.4 314.2,177.7 315.6,174.1 317.0,170.6 318.5,167.1 320.0,163.8 321.5,160.5 323.0,157.2 324.6,154.1 326.2,151.0 327.8,148.1 329.4,145.2 331.0,142.3 332.7,139.6 334.4,136.9 336.1,134.3 337.8,131.8 339.6,129.3 341.4,127.0 343.2,124.7 345.0,122.5" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="300.0,222.5 305.0,220.7 309.9,219.0 314.7,217.3 319.5,215.7 324.2,214.2 328.8,212.7 333.4,211.3 337.9,210.0 342.3,208.7 346.7,207.5 351.0,206.4 355.2,205.3 359.4,204.3 363.5,203.4 367.5,202.5 371.5,201.7 375.4,201.0 379.2,200.3 383.0,199.7 386.7,199.2 390.3,198.7 393.9,198.3 397.4,198.0 400.8,197.7 404.2,197.5 407.5,197.4 410.7,197.3 413.9,197.3 417.0,197.4 420.0,197.5" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="328.8,212.7 330.0,208.1 331.2,203.5 332.4,199.0 333.6,194.7 334.9,190.3 336.2,186.1 337.5,181.9 338.8,177.9 340.2,173.8 341.6,169.9 343.0,166.1 344.4,162.3 345.8,158.6 347.3,155.0 348.8,151.4 350.3,148.0 351.8,144.6 353.4,141.3 355.0,138.1 356.6,134.9 358.2,131.8 359.8,128.9 361.5,125.9 363.2,123.1 364.9,120.3 366.6,117.7 368.4,115.0 370.2,112.5 372.0,110.1 373.8,107.7" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="307.4,196.9 312.4,194.9 317.3,193.0 322.1,191.2 326.9,189.4 331.6,187.7 336.2,186.1 340.8,184.5 345.3,183.0 349.7,181.6 354.1,180.2 358.4,178.9 362.6,177.7 366.8,176.5 370.9,175.4 374.9,174.4 378.9,173.4 382.8,172.5 386.6,171.7 390.4,170.9 394.1,170.2 397.7,169.6 401.3,169.0 404.8,168.5 408.2,168.1 411.6,167.7 414.9,167.4 418.1,167.2 421.3,167.0 424.4,166.9 427.4,166.9" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="355.2,205.3 356.4,200.5 357.6,195.8 358.8,191.2 360.0,186.6 361.3,182.1 362.6,177.7 363.9,173.4 365.2,169.1 366.6,165.0 368.0,160.9 369.4,156.8 370.8,152.9 372.2,149.0 373.7,145.3 375.2,141.6 376.7,137.9 378.2,134.4 379.8,130.9 381.4,127.5 383.0,124.2 384.6,121.0 386.2,117.8 387.9,114.7 389.6,111.7 391.3,108.8 393.0,105.9 394.8,103.1 396.6,100.5 398.4,97.8 400.2,95.3" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="315.6,174.1 320.6,172.0 325.5,169.9 330.3,167.9 335.1,166.0 339.8,164.1 344.4,162.3 349.0,160.6 353.5,158.9 357.9,157.3 362.3,155.8 366.6,154.3 370.8,152.9 375.0,151.6 379.1,150.3 383.1,149.1 387.1,148.0 391.0,146.9 394.8,145.9 398.6,145.0 402.3,144.1 405.9,143.3 409.5,142.6 413.0,141.9 416.4,141.3 419.8,140.8 423.1,140.3 426.3,139.9 429.5,139.6 432.6,139.3 435.6,139.1" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="379.2,200.3 380.4,195.3 381.6,190.5 382.8,185.7 384.0,180.9 385.3,176.3 386.6,171.7 387.9,167.2 389.2,162.8 390.6,158.5 392.0,154.2 393.4,150.0 394.8,145.9 396.2,141.9 397.7,137.9 399.2,134.1 400.7,130.3 402.2,126.5 403.8,122.9 405.4,119.3 407.0,115.9 408.6,112.5 410.2,109.1 411.9,105.9 413.6,102.7 415.3,99.6 417.0,96.6 418.8,93.6 420.6,90.8 422.4,88.0 424.2,85.3" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="324.6,154.1 329.6,151.8 334.5,149.6 339.3,147.4 344.1,145.3 348.8,143.3 353.4,141.3 358.0,139.4 362.5,137.6 366.9,135.8 371.3,134.1 375.6,132.5 379.8,130.9 384.0,129.4 388.1,128.0 392.1,126.6 396.1,125.3 400.0,124.1 403.8,122.9 407.6,121.8 411.3,120.8 414.9,119.8 418.5,118.9 422.0,118.1 425.4,117.3 428.8,116.6 432.1,116.0 435.3,115.4 438.5,114.9 441.6,114.5 444.6,114.1" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="400.8,197.7 402.0,192.6 403.2,187.5 404.4,182.5 405.6,177.7 406.9,172.8 408.2,168.1 409.5,163.4 410.8,158.9 412.2,154.3 413.6,149.9 415.0,145.6 416.4,141.3 417.8,137.1 419.3,133.0 420.8,128.9 422.3,125.0 423.8,121.1 425.4,117.3 427.0,113.6 428.6,109.9 430.2,106.4 431.8,102.9 433.5,99.4 435.2,96.1 436.9,92.8 438.6,89.7 440.4,86.5 442.2,83.5 444.0,80.6 445.8,77.7" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="334.4,136.9 339.4,134.4 344.3,132.0 349.1,129.7 353.9,127.4 358.6,125.2 363.2,123.1 367.8,121.0 372.3,119.0 376.7,117.1 381.1,115.2 385.4,113.4 389.6,111.7 393.8,110.0 397.9,108.4 401.9,106.9 405.9,105.4 409.8,104.0 413.6,102.7 417.4,101.4 421.1,100.2 424.7,99.1 428.3,98.0 431.8,97.0 435.2,96.1 438.6,95.2 441.9,94.4 445.1,93.7 448.3,93.0 451.4,92.4 454.4,91.9" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="420.0,197.5 421.2,192.2 422.4,187.0 423.6,181.8 424.8,176.8 426.1,171.8 427.4,166.9 428.7,162.1 430.0,157.3 431.4,152.7 432.8,148.1 434.2,143.5 435.6,139.1 437.0,134.7 438.5,130.5 440.0,126.2 441.5,122.1 443.0,118.1 444.6,114.1 446.2,110.2 447.8,106.4 449.4,102.7 451.0,99.0 452.7,95.4 454.4,91.9 456.1,88.5 457.8,85.1 459.6,81.8 461.4,78.7 463.2,75.5 465.0,72.5" fill="none" class="s-blue" stroke-width="1.3"/>
<polyline points="345.0,122.5 350.0,119.9 354.9,117.3 359.7,114.8 364.5,112.4 369.2,110.0 373.8,107.7 378.4,105.5 382.9,103.3 387.3,101.2 391.7,99.2 396.0,97.2 400.2,95.3 404.4,93.5 408.5,91.7 412.5,90.0 416.5,88.4 420.4,86.8 424.2,85.3 428.0,83.9 431.7,82.5 435.3,81.2 438.9,80.0 442.4,78.8 445.8,77.7 449.2,76.7 452.5,75.7 455.7,74.8 458.9,74.0 462.0,73.2 465.0,72.5" fill="none" class="s-blue" stroke-width="1.3"/>
<polygon points="370.8,152.9 373.3,152.1 375.8,151.3 378.3,150.5 380.7,149.8 383.1,149.1 385.5,148.4 387.9,147.7 390.2,147.1 392.5,146.5 394.8,145.9 394.8,145.9 395.7,143.5 396.5,141.1 397.4,138.7 398.3,136.4 399.2,134.1 400.1,131.8 401.0,129.5 401.9,127.3 402.9,125.1 403.8,122.9 403.8,122.9 401.5,123.6 399.2,124.3 396.9,125.0 394.5,125.8 392.1,126.6 389.7,127.4 387.3,128.2 384.8,129.1 382.3,130.0 379.8,130.9 379.8,130.9 378.9,133.0 377.9,135.1 377.0,137.2 376.1,139.4 375.2,141.6 374.3,143.8 373.4,146.0 372.5,148.3 371.7,150.6 370.8,152.9" class="f-orange" fill-opacity="0.55"/>
<polygon points="370.8,152.9 396.0,144.7 404.6,121.3 379.4,129.5" fill="none" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.3"/>
<line x1="370.8" y1="152.9" x2="390.3" y2="146.6" class="s-red" stroke-width="2.5"/><path d="M396.6,144.5 L386.6,152.5 L383.8,143.9 Z" class="f-red"/>
<line x1="370.8" y1="152.9" x2="377.3" y2="135.1" class="s-green" stroke-width="2.5"/><path d="M379.6,128.9 L379.7,141.8 L371.2,138.6 Z" class="f-green"/>
<text x="403.99940000001953" y="164.7005999999764" font-size="14" class="t-red"><tspan font-weight="700">r</tspan><tspan font-size="10" dy="4">u</tspan><tspan dy="-4"> Δu</tspan></text>
<text x="365.40019999993257" y="127.50070000000588" font-size="14" class="t-green" text-anchor="end"><tspan font-weight="700">r</tspan><tspan font-size="10" dy="4">v</tspan><tspan dy="-4"> Δv</tspan></text>
<text x="420" y="240" font-size="13" text-anchor="middle">curved patch ≈ parallelogram</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-parametric-surfaces',
  title: 'Parametric Surfaces',
  summary: 'Surfaces as maps r(u, v) from a flat parameter domain into space: grid curves, tangent vectors and the normal r_u × r_v, tangent planes, and surface area of spheres, cones and tori. The same math builds and lights every UV-mapped mesh.',
  minutes: 19,
  objectives: [
    'Parametrize planes, cylinders, spheres, cones, tori and graphs as $\\vec r(u, v)$, and recognize a surface from its parametrization',
    'Describe grid curves and compute the tangent vectors $\\vec r_u$, $\\vec r_v$ and the normal $\\vec r_u\\times\\vec r_v$',
    'Find the tangent plane to a parametric surface at a point',
    'Compute surface area with $A = \\iint_D |\\vec r_u\\times\\vec r_v|\\,dA$ and explain why the formula works',
    'Distinguish a genuinely non-smooth point (a cone\'s apex) from a parametrization artifact (a sphere\'s poles)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Surfaces as maps from a flat domain',
      blocks: [
        {
          type: 'p',
          text: 'A space curve $\\vec r(t)$ takes one parameter and traces a one-dimensional path. Give the function **two** parameters and it sweeps out a two-dimensional surface. That is the most flexible way to describe a surface, and it is exactly how a game engine builds one: walk a grid of $(u, v)$ values and emit a vertex for each.',
        },
        {
          type: 'definition',
          term: 'Parametric surface',
          text: 'A [[calc3-parametric-surface|parametric surface]] is the set $S$ of points traced by a vector function of two parameters,\n\n$$\\vec r(u, v) = \\langle x(u, v),\\ y(u, v),\\ z(u, v) \\rangle,\\qquad (u, v) \\in D,$$\n\nas $(u, v)$ ranges over a region $D$ of the $uv$-plane, the **parameter domain**.',
        },
        {
          type: 'table',
          headers: ['Surface', 'Parametrization', 'Domain'],
          rows: [
            ['plane through $P_0$ spanned by $\\vec a, \\vec b$', '$\\vec r_0 + u\\,\\vec a + v\\,\\vec b$', 'all $(u, v)$'],
            ['graph $z = f(x, y)$', '$\\langle x,\\ y,\\ f(x, y) \\rangle$', 'the domain of $f$'],
            ['cylinder $x^2 + y^2 = a^2$', '$\\langle a\\cos u,\\ a\\sin u,\\ v \\rangle$', '$0 \\le u \\le 2\\pi$'],
            ['cone $z = \\sqrt{x^2 + y^2}$', '$\\langle v\\cos u,\\ v\\sin u,\\ v \\rangle$', '$0 \\le u \\le 2\\pi,\\ v \\ge 0$'],
            ['sphere $\\rho = a$', '$\\langle a\\sin\\phi\\cos\\theta,\\ a\\sin\\phi\\sin\\theta,\\ a\\cos\\phi \\rangle$', '$0 \\le \\phi \\le \\pi,\\ 0 \\le \\theta \\le 2\\pi$'],
            ['torus (tube radius $r$ around a circle of radius $R$)', '$\\langle (R + r\\cos v)\\cos u,\\ (R + r\\cos v)\\sin u,\\ r\\sin v \\rangle$', '$0 \\le u, v \\le 2\\pi$'],
          ],
          caption: 'The sphere uses spherical coordinates with $\\phi$ measured down from the positive $z$-axis (physics books swap the names $\\theta$ and $\\phi$). The cone and cylinder come from cylindrical coordinates.',
        },
        {
          type: 'plot3d',
          x: [-1.3, 1.3],
          y: [-1.3, 1.3],
          z: [-1.3, 1.3],
          equal: true,
          parametricSurfaces: [{ x: 'sin(v)*cos(u)', y: 'sin(v)*sin(u)', z: 'cos(v)', u: [0, 'k'], v: [0, 'pi'], color: 'blue', opacity: 0.8 }],
          curves: [{ x: 'sin(t)*cos(k)', y: 'sin(t)*sin(k)', z: 'cos(t)', t: [0, 'pi'], color: 'red', label: 'the meridian $\\theta = \\theta_{\\max}$' }],
          sliders: [{ name: 'k', min: 0.2, max: 6.2832, step: 0.02, value: 3.6, label: '$\\theta$ runs from $0$ to', play: true }],
          view: { azimuth: 35, elevation: 22 },
          caption: 'Press ▶ to watch $\\vec r(\\phi, \\theta)$ sweep out the unit sphere. For each $\\theta$ the parameter $\\phi$ traces a half-circle from the north pole to the south pole (red); letting $\\theta$ grow sweeps that half-circle around the $z$-axis.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Reading a parametrization',
          text: 'To identify a surface, look for a relation among $x, y, z$ that eliminates the parameters. For $\\langle a\\cos u, a\\sin u, v \\rangle$: $x^2 + y^2 = a^2$ with $z = v$ free, so it is a cylinder about the $z$-axis. Whichever coordinate is "free" (equal to a lone parameter) is the axis direction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which surface is parametrized by $\\vec r(u, v) = \\langle 2\\cos u,\\ v,\\ 2\\sin u \\rangle$, $0 \\le u \\le 2\\pi$, $v \\in \\mathbb{R}$?',
      options: [
        { text: 'A cylinder of radius $2$ around the $y$-axis', correct: true, why: '$x^2 + z^2 = 4\\cos^2 u + 4\\sin^2 u = 4$, and $y = v$ is free. Circles in the $xz$-plane stacked along $y$.' },
        { text: 'A cylinder of radius $2$ around the $z$-axis', why: 'That would need $x^2 + y^2 = 4$ with $z$ free. Here $z = 2\\sin u$ is tied to $x$, and it is $y$ that is free.' },
        { text: 'A sphere of radius $2$', why: '$x^2 + y^2 + z^2 = 4 + v^2$, which is not constant. A sphere needs both parameters inside trig functions.' },
        { text: 'A cone around the $y$-axis', why: 'A cone\'s radius grows with the free coordinate, as in $\\langle v\\cos u, v, v\\sin u \\rangle$. Here the radius is always $2$.' },
      ],
      explanation: 'Eliminate the parameters: $x^2 + z^2 = 4$ for every $u$, and $y$ can be anything. So the surface is the circular cylinder $x^2 + z^2 = 4$, whose axis is the $y$-axis (the free coordinate).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Grid curves',
      blocks: [
        {
          type: 'p',
          text: 'Freeze one parameter and let the other run, and $\\vec r$ traces a curve on the surface. Holding $u = u_0$ gives the curve $\\vec r(u_0, v)$; holding $v = v_0$ gives $\\vec r(u, v_0)$. These are the surface\'s [[calc3-grid-curve|grid curves]]: the images of the vertical and horizontal lines of the parameter domain.',
        },
        {
          type: 'p',
          text: 'On the sphere, fixing $\\theta$ gives a **meridian** (a half great-circle from pole to pole, like a line of longitude) and fixing $\\phi$ gives a **parallel** (a horizontal circle, like a line of latitude). On the torus, fixing $u$ gives a small circle around the tube and fixing $v$ gives a large horizontal circle around the hole.',
        },
        {
          type: 'plot3d',
          x: [-4.2, 4.2],
          y: [-4.2, 4.2],
          z: [-1.6, 1.6],
          equal: true,
          parametricSurfaces: [{ x: '(3 + cos(v))*cos(u)', y: '(3 + cos(v))*sin(u)', z: 'sin(v)', u: [0, '2pi'], v: [0, '2pi'], color: 'blue', opacity: 0.55 }],
          curves: [
            { x: '(3 + cos(t))*cos(p)', y: '(3 + cos(t))*sin(p)', z: 'sin(t)', t: [0, '2pi'], color: 'red', label: '$u = u_0$: around the tube' },
            { x: '(3 + cos(q))*cos(t)', y: '(3 + cos(q))*sin(t)', z: 'sin(q)', t: [0, '2pi'], color: 'green', label: '$v = v_0$: around the hole' },
          ],
          sliders: [
            { name: 'p', min: 0, max: 6.28, step: 0.02, value: 0.8, label: '$u_0$' },
            { name: 'q', min: 0, max: 6.28, step: 0.02, value: 1.2, label: '$v_0$' },
          ],
          resolution: 32,
          view: { azimuth: 25, elevation: 35 },
          caption: 'The torus $\\langle (3 + \\cos v)\\cos u,\\ (3 + \\cos v)\\sin u,\\ \\sin v \\rangle$ with one grid curve of each family. Slide $v_0$ from $0$ to $\\pi$: the green circle moves from the outer equator (radius $4$) over the top to the inner equator (radius $2$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Grid curves are mesh edges, and (u, v) are texture coordinates',
          text: 'A procedural sphere or torus mesh is generated by sampling $\\vec r(u, v)$ on a grid: vertex $(i, j)$ is $\\vec r(u_i, v_j)$, and the rows and columns of edges are grid curves. The parameters, rescaled to $[0, 1]$, are stored with each vertex as its **UV texture coordinates**: the "UV" in UV mapping is literally the $(u, v)$ of a parametric surface. The texture image is painted on the parameter domain $D$ and $\\vec r$ wraps it onto the surface.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Grid curves of the sphere $\\vec r(\\phi, \\theta) = \\langle a\\sin\\phi\\cos\\theta,\\ a\\sin\\phi\\sin\\theta,\\ a\\cos\\phi \\rangle$.',
      template: 'Fixing $\\theta$ and varying $\\phi$ traces a ___ , and fixing $\\phi = \\phi_0$ traces a horizontal circle of radius ___ at height $z = a\\cos\\phi_0$.',
      blanks: [{ answers: ['meridian'] }, { answers: ['$a\\sin\\phi_0$'] }],
      wordBank: ['meridian', 'parallel', 'helix', '$a\\sin\\phi_0$', '$a\\cos\\phi_0$', '$a$'],
      explanation: 'With $\\theta$ fixed, $\\phi$ runs from $0$ to $\\pi$ and the point travels down a half great-circle from the north pole to the south pole: a meridian. With $\\phi = \\phi_0$ fixed, $x^2 + y^2 = a^2\\sin^2\\phi_0$ and $z = a\\cos\\phi_0$ is constant: a parallel of radius $a\\sin\\phi_0$. It shrinks to a point at the poles, where $\\sin\\phi_0 = 0$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Tangent vectors, the normal and the tangent plane',
      blocks: [
        {
          type: 'p',
          text: 'Differentiate $\\vec r$ with respect to each parameter. $\\vec r_u = \\langle x_u, y_u, z_u \\rangle$ is the velocity along the grid curve $v = v_0$, and $\\vec r_v$ is the velocity along $u = u_0$. Both are tangent to the surface, so their [[cross-product|cross product]] is perpendicular to it.',
        },
        {
          type: 'theorem',
          name: 'Normal vector and tangent plane',
          tex: '\\vec n = \\vec r_u\\times\\vec r_v, \\qquad \\vec n\\cdot\\big( \\langle x, y, z \\rangle - \\vec r(u_0, v_0) \\big) = 0',
          text: 'The surface is **smooth** at $\\vec r(u_0, v_0)$ when $\\vec r_u\\times\\vec r_v \\ne \\vec 0$ there. Then $\\vec n$ is a normal vector and the second equation is the tangent plane: the plane through the point that contains $\\vec r_u$ and $\\vec r_v$.',
        },
        {
          type: 'derivation',
          title: 'Tangent plane to $\\vec r(u, v) = \\langle u^2,\\ v^2,\\ u + 2v \\rangle$ at $(1, 1, 3)$',
          steps: [
            { tex: '\\vec r(1, 1) = \\langle 1, 1, 3 \\rangle', why: 'Find the parameters of the point: $u^2 = 1$, $v^2 = 1$, $u + 2v = 3$ force $u = v = 1$.' },
            { tex: '\\vec r_u = \\langle 2u, 0, 1 \\rangle = \\langle 2, 0, 1 \\rangle,\\quad \\vec r_v = \\langle 0, 2v, 2 \\rangle = \\langle 0, 2, 2 \\rangle', why: 'Differentiate each component, then evaluate at $u = v = 1$.' },
            { tex: '\\vec r_u\\times\\vec r_v = \\langle 0\\cdot 2 - 1\\cdot 2,\\ 1\\cdot 0 - 2\\cdot 2,\\ 2\\cdot 2 - 0\\cdot 0 \\rangle = \\langle -2, -4, 4 \\rangle', why: 'Cross product component by component: $\\langle a_2 b_3 - a_3 b_2,\\ a_3 b_1 - a_1 b_3,\\ a_1 b_2 - a_2 b_1 \\rangle$.' },
            { tex: '-2(x - 1) - 4(y - 1) + 4(z - 3) = 0', why: 'Point-normal form of the plane.' },
            { tex: 'x + 2y - 2z + 3 = 0 \\iff z = \\tfrac{1}{2}(x + 2y + 3)', why: 'Expand ($-2x - 4y + 4z - 6 = 0$) and divide by $-2$. Check: $(1, 1, 3)$ gives $1 + 2 - 6 + 3 = 0$.' },
          ],
          result: 'The tangent plane is $x + 2y - 2z + 3 = 0$.',
        },
        {
          type: 'plot3d',
          x: [-1.8, 1.8],
          y: [-1.8, 1.8],
          z: [-1.8, 1.8],
          equal: true,
          parametricSurfaces: [
            { x: 'sin(v)*cos(u)', y: 'sin(v)*sin(u)', z: 'cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'blue', opacity: 0.55 },
            { x: 'sin(p)*cos(q) + u*cos(p)*cos(q) - v*sin(q)', y: 'sin(p)*sin(q) + u*cos(p)*sin(q) + v*cos(q)', z: 'cos(p) - u*sin(p)', u: [-0.45, 0.45], v: [-0.45, 0.45], color: 'orange', opacity: 0.7 },
          ],
          points: [{ x: 'sin(p)*cos(q)', y: 'sin(p)*sin(q)', z: 'cos(p)', label: 'P' }],
          vectors: [
            { from: ['sin(p)*cos(q)', 'sin(p)*sin(q)', 'cos(p)'], to: ['sin(p)*cos(q) + 0.7cos(p)*cos(q)', 'sin(p)*sin(q) + 0.7cos(p)*sin(q)', 'cos(p) - 0.7sin(p)'], color: 'red', label: 'rφ' },
            { from: ['sin(p)*cos(q)', 'sin(p)*sin(q)', 'cos(p)'], to: ['sin(p)*cos(q) - 0.7sin(p)*sin(q)', 'sin(p)*sin(q) + 0.7sin(p)*cos(q)', 'cos(p)'], color: 'green', label: 'rθ' },
            { from: ['sin(p)*cos(q)', 'sin(p)*sin(q)', 'cos(p)'], to: ['(1 + 0.7sin(p))*sin(p)*cos(q)', '(1 + 0.7sin(p))*sin(p)*sin(q)', '(1 + 0.7sin(p))*cos(p)'], color: 'purple', label: 'rφ × rθ' },
          ],
          sliders: [
            { name: 'p', min: 0, max: 3.14, step: 0.02, value: 0.9, label: '$\\phi$ (down from the north pole)' },
            { name: 'q', min: 0, max: 6.28, step: 0.02, value: 0.6, label: '$\\theta$ (around the $z$-axis)' },
          ],
          readouts: [{ label: '$|\\vec r_\\phi\\times\\vec r_\\theta| = \\sin\\phi =$', expr: 'sin(p)', digits: 3 }],
          view: { azimuth: 30, elevation: 20 },
          caption: 'On the unit sphere, $\\vec r_\\phi$ (red) points down the meridian and $\\vec r_\\theta$ (green) along the parallel; their cross product (purple) points straight out, and the orange tangent plane contains both. Drag $\\phi$ toward $0$: $\\vec r_\\theta$ and the normal shrink to nothing at the pole, even though the sphere is perfectly round there.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Order matters: $\\vec r_v\\times\\vec r_u = -\\vec r_u\\times\\vec r_v$',
          text: 'For the sphere, $\\vec r_\\phi\\times\\vec r_\\theta = a^2\\sin\\phi\\,\\langle \\sin\\phi\\cos\\theta, \\sin\\phi\\sin\\theta, \\cos\\phi \\rangle$ points **outward**, while $\\vec r_\\theta\\times\\vec r_\\phi$ points inward. For tangent planes and areas the direction does not matter, but in the next lesson (flux) it decides the sign of the answer. In a mesh it decides which side of a triangle is the front face.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'Find the tangent plane to the surface $\\vec r(u, v) = \\langle u + v,\\ 3u^2,\\ u - v \\rangle$ at the point $(1, 3, 1)$, which is $\\vec r(1, 0)$. Solve the equation for $z$.',
      label: '$z =$',
      answer: '1 - x + y/3',
      answerTex: 'z = 1 - x + \\tfrac{y}{3}',
      variables: ['x', 'y'],
      hint: '$\\vec r_u = \\langle 1, 6u, 1 \\rangle$ and $\\vec r_v = \\langle 1, 0, -1 \\rangle$. Evaluate at $u = 1$, cross them, then use point-normal form.',
      explanation: 'At $(u, v) = (1, 0)$: $\\vec r_u = \\langle 1, 6, 1 \\rangle$ and $\\vec r_v = \\langle 1, 0, -1 \\rangle$. Their cross product is $\\langle 6(-1) - 1\\cdot 0,\\ 1\\cdot 1 - 1\\cdot(-1),\\ 1\\cdot 0 - 6\\cdot 1 \\rangle = \\langle -6, 2, -6 \\rangle$, parallel to $\\langle 3, -1, 3 \\rangle$. The plane is $3(x - 1) - (y - 3) + 3(z - 1) = 0$, i.e. $3x - y + 3z = 3$, so $z = 1 - x + \\frac{y}{3}$. Check: at $(1, 3)$ this gives $z = 1$. ✓',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Surface area',
      blocks: [
        {
          type: 'p',
          text: 'Chop the parameter domain into small rectangles $\\Delta u$ by $\\Delta v$. The map $\\vec r$ bends each one into a small curved patch on $S$. Near its corner the patch is almost the parallelogram spanned by $\\vec r_u\\,\\Delta u$ and $\\vec r_v\\,\\Delta v$ (that is [[linear-approximation|linear approximation]] in two parameters), and a parallelogram\'s area is the length of the cross product of its sides.',
        },
        {
          type: 'figure',
          svg: FIG_PATCH,
          alt: 'Left: a grid on the uv-plane with one small rectangle of sides delta u and delta v shaded. An arrow labeled r(u, v) points right. Right: the grid bent into a curved surface patch; the image of the shaded rectangle is a curved cell, closely matched by a dashed parallelogram spanned by the vectors r_u delta u (red) and r_v delta v (green).',
          caption: 'Area of the patch $\\approx |\\vec r_u\\,\\Delta u\\times\\vec r_v\\,\\Delta v| = |\\vec r_u\\times\\vec r_v|\\,\\Delta u\\,\\Delta v$. Adding the patches and letting the grid shrink gives a double integral.',
        },
        {
          type: 'theorem',
          name: 'Area of a parametric surface',
          tex: 'A(S) = \\iint_D |\\vec r_u\\times\\vec r_v|\\,dA',
          text: 'For a smooth surface $S$ traced **once** by $\\vec r(u, v)$, $(u, v) \\in D$. The factor $|\\vec r_u\\times\\vec r_v|$ is the area-scaling factor of the map, playing the role the Jacobian plays in a change of variables.',
        },
        {
          type: 'derivation',
          title: 'The sphere of radius $a$ has area $4\\pi a^2$',
          steps: [
            { tex: '\\vec r_\\phi = \\langle a\\cos\\phi\\cos\\theta,\\ a\\cos\\phi\\sin\\theta,\\ -a\\sin\\phi \\rangle,\\quad \\vec r_\\theta = \\langle -a\\sin\\phi\\sin\\theta,\\ a\\sin\\phi\\cos\\theta,\\ 0 \\rangle', why: 'Differentiate $\\langle a\\sin\\phi\\cos\\theta, a\\sin\\phi\\sin\\theta, a\\cos\\phi \\rangle$ with respect to each parameter.' },
            { tex: '\\vec r_\\phi\\times\\vec r_\\theta = \\langle a^2\\sin^2\\phi\\cos\\theta,\\ a^2\\sin^2\\phi\\sin\\theta,\\ a^2\\sin\\phi\\cos\\phi \\rangle', why: 'Cross product; the $\\mathbf{k}$-component simplifies with $\\cos^2\\theta + \\sin^2\\theta = 1$.' },
            { tex: '|\\vec r_\\phi\\times\\vec r_\\theta| = a^2\\sqrt{\\sin^4\\phi + \\sin^2\\phi\\cos^2\\phi} = a^2\\sin\\phi', why: 'Factor $\\sin^2\\phi$ out of the square root: $\\sin^2\\phi(\\sin^2\\phi + \\cos^2\\phi) = \\sin^2\\phi$, and $\\sin\\phi \\ge 0$ for $0 \\le \\phi \\le \\pi$.' },
            { tex: 'A = \\int_0^{2\\pi}\\int_0^{\\pi} a^2\\sin\\phi\\,d\\phi\\,d\\theta = 2\\pi a^2\\,\\big[ -\\cos\\phi \\big]_0^{\\pi} = 4\\pi a^2', why: 'The integrand does not depend on $\\theta$, which contributes a factor $2\\pi$; $\\int_0^\\pi \\sin\\phi\\,d\\phi = 2$.' },
          ],
          result: 'Archimedes\' $4\\pi a^2$. The same $a^2\\sin\\phi$ is the area part of the spherical volume element $\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this agrees with the graph formula',
          text: 'A graph $z = f(x, y)$ is the parametric surface $\\vec r(x, y) = \\langle x, y, f(x, y) \\rangle$. Then $\\vec r_x = \\langle 1, 0, f_x \\rangle$, $\\vec r_y = \\langle 0, 1, f_y \\rangle$ and $\\vec r_x\\times\\vec r_y = \\langle -f_x, -f_y, 1 \\rangle$, whose length is $\\sqrt{1 + f_x^2 + f_y^2}$: exactly the integrand from the surface-area lesson. The parametric formula is the general version, and it handles surfaces that are not graphs, like whole spheres and tori.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'The cone $\\vec r(u, v) = \\langle v\\cos u,\\ v\\sin u,\\ v \\rangle$, $0 \\le u \\le 2\\pi$, $0 \\le v \\le 2$, is the part of $z = \\sqrt{x^2 + y^2}$ below $z = 2$. Find its surface area. An exact answer or a decimal to 2 places is accepted.',
      answer: '4sqrt(2)pi',
      answerTex: '4\\sqrt{2}\\,\\pi \\approx 17.77',
      plot3d: {
        type: 'plot3d',
        x: [-2.2, 2.2],
        y: [-2.2, 2.2],
        z: [0, 2.2],
        equal: true,
        parametricSurfaces: [{ x: 'v*cos(u)', y: 'v*sin(u)', z: 'v', u: [0, '2pi'], v: [0, 2], color: 'teal', opacity: 0.8 }],
        view: { azimuth: 30, elevation: 22 },
        caption: 'The cone $z = \\sqrt{x^2 + y^2}$, $0 \\le z \\le 2$.',
      },
      hint: '$\\vec r_u = \\langle -v\\sin u, v\\cos u, 0 \\rangle$ and $\\vec r_v = \\langle \\cos u, \\sin u, 1 \\rangle$. Find $|\\vec r_u\\times\\vec r_v|$, then integrate over the rectangle.',
      explanation: '$\\vec r_u\\times\\vec r_v = \\langle v\\cos u,\\ v\\sin u,\\ -v \\rangle$, with length $\\sqrt{v^2 + v^2} = \\sqrt{2}\\,v$. Then $A = \\int_0^{2\\pi}\\int_0^2 \\sqrt{2}\\,v\\,dv\\,du = 2\\pi\\cdot\\sqrt{2}\\cdot 2 = 4\\sqrt{2}\\,\\pi \\approx 17.77$. Check with geometry: unrolled, the cone is a sector with slant radius $L = 2\\sqrt{2}$ and arc length $2\\pi\\cdot 2$, so its area is $\\frac{1}{2}L\\cdot 4\\pi = 4\\sqrt{2}\\,\\pi$. ✓',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Put the steps for computing the area of a parametric surface $\\vec r(u, v)$, $(u, v) \\in D$, in order.',
      lines: [
        'Differentiate to get the tangent vectors $\\vec r_u$ and $\\vec r_v$',
        'Compute the cross product $\\vec r_u\\times\\vec r_v$',
        'Take its length $|\\vec r_u\\times\\vec r_v|$ and simplify',
        'Integrate $|\\vec r_u\\times\\vec r_v|$ over the parameter domain $D$',
      ],
      distractors: ['Integrate $\\vec r(u, v)$ itself over $D$'],
      explanation: 'The area element is $dS = |\\vec r_u\\times\\vec r_v|\\,dA$: tangent vectors first, then their cross product, then its length, and only then the double integral over $D$. Integrating $\\vec r$ itself gives a vector, not an area.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The torus, and points where the normal vanishes',
      blocks: [
        {
          type: 'derivation',
          title: 'Area of the torus $\\langle (R + r\\cos v)\\cos u,\\ (R + r\\cos v)\\sin u,\\ r\\sin v \\rangle$',
          steps: [
            { tex: '\\vec r_u = \\langle -(R + r\\cos v)\\sin u,\\ (R + r\\cos v)\\cos u,\\ 0 \\rangle', why: 'Differentiate in $u$; the factor $R + r\\cos v$ is a constant for this derivative.' },
            { tex: '\\vec r_v = \\langle -r\\sin v\\cos u,\\ -r\\sin v\\sin u,\\ r\\cos v \\rangle', why: 'Differentiate in $v$.' },
            { tex: '\\vec r_u\\times\\vec r_v = r(R + r\\cos v)\\,\\langle \\cos v\\cos u,\\ \\cos v\\sin u,\\ \\sin v \\rangle', why: 'Factor $R + r\\cos v$ out of $\\vec r_u$ and $r$ out of $\\vec r_v$, then cross the remaining vectors. The bracket is a unit vector.' },
            { tex: '|\\vec r_u\\times\\vec r_v| = r(R + r\\cos v)', why: 'Since $R > r$, the factor $R + r\\cos v$ is positive.' },
            { tex: 'A = \\int_0^{2\\pi}\\int_0^{2\\pi} r(R + r\\cos v)\\,dv\\,du = 2\\pi\\cdot 2\\pi R r = 4\\pi^2 R r', why: 'The $\\cos v$ term integrates to $0$ over a full period.' },
          ],
          result: '$A = (2\\pi r)(2\\pi R)$: the tube\'s circumference times the length of its center circle, as if you cut the donut and straightened it into a cylinder (Pappus\'s theorem).',
        },
        {
          type: 'plot3d',
          x: [-4.5, 4.5],
          y: [-4.5, 4.5],
          z: [-1.8, 1.8],
          equal: true,
          parametricSurfaces: [{ x: '(a + b*cos(v))*cos(u)', y: '(a + b*cos(v))*sin(u)', z: 'b*sin(v)', u: [0, '2pi'], v: [0, '2pi'], color: 'orange', opacity: 0.85 }],
          sliders: [
            { name: 'a', min: 1.5, max: 3.2, step: 0.05, value: 2.5, label: 'center radius $R$' },
            { name: 'b', min: 0.3, max: 1.2, step: 0.05, value: 0.8, label: 'tube radius $r$' },
          ],
          readouts: [{ label: '$A = 4\\pi^2 Rr =$', expr: '4pi^2*a*b', digits: 3 }],
          resolution: 32,
          view: { azimuth: 30, elevation: 35 },
          caption: 'Change $R$ and $r$: the area is proportional to each. The outer half of the tube ($\\cos v > 0$) has more area than the inner half, since $|\\vec r_u\\times\\vec r_v| = r(R + r\\cos v)$ is larger there, but the two halves average out to $4\\pi^2 Rr$.',
        },
        {
          type: 'p',
          text: 'Where $\\vec r_u\\times\\vec r_v = \\vec 0$, the formula gives no normal. Two very different things can cause that. For the cone $\\langle v\\cos u, v\\sin u, v \\rangle$, $|\\vec r_u\\times\\vec r_v| = \\sqrt{2}\\,v$ vanishes at the apex $v = 0$, and the cone really has a sharp point there: **no** parametrization can give it a tangent plane. For the sphere, $|\\vec r_\\phi\\times\\vec r_\\theta| = a^2\\sin\\phi$ vanishes at the poles only because every value of $\\theta$ lands on the same pole point. The sphere itself is smooth there; rotate the coordinates and the "pole" becomes an ordinary point.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The UV-sphere pole problem',
          text: 'Game artists know the sphere\'s parametrization artifact well. A "UV sphere" mesh squeezes a whole row of vertices into each pole, so triangles there are slivers, textures pinch into a starburst, and normals computed from the degenerate triangles can come out as NaN. That is why engines also offer **icospheres** (subdivided icosahedra) and **cube spheres** (a cube with each vertex pushed out to the sphere), which have no poles.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Find the surface area of the torus with center-circle radius $R = 3$ and tube radius $r = 1$. An exact answer or a decimal to 2 places is accepted.',
      answer: '12pi^2',
      answerTex: '12\\pi^2 \\approx 118.44',
      hint: 'Use $A = 4\\pi^2 R r$, or integrate $|\\vec r_u\\times\\vec r_v| = r(R + r\\cos v)$ over $[0, 2\\pi]\\times[0, 2\\pi]$.',
      explanation: '$A = \\int_0^{2\\pi}\\int_0^{2\\pi} 1\\cdot(3 + \\cos v)\\,dv\\,du = 2\\pi\\cdot 6\\pi = 12\\pi^2 \\approx 118.44$. As a check, it is the area of a cylinder of radius $1$ and length $2\\pi\\cdot 3$: $(2\\pi\\cdot 1)(6\\pi) = 12\\pi^2$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If $\\vec r_u\\times\\vec r_v = \\vec 0$ at some parameter point, then the surface itself must have a sharp point or an edge there.',
      answer: false,
      explanation: 'A zero normal can be an artifact of the parametrization. On the sphere $\\vec r(\\phi, \\theta)$, $|\\vec r_\\phi\\times\\vec r_\\theta| = a^2\\sin\\phi = 0$ at the poles, yet the sphere is perfectly smooth there; a different parametrization (or a rotated one) has a nonzero normal at those points. Only when **every** parametrization fails, as at a cone\'s apex, is the surface truly not smooth.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'From parameters to a lit mesh',
      blocks: [
        {
          type: 'p',
          text: 'Everything in this lesson is what a procedural-geometry routine does. Sample $\\vec r(u, v)$ on a grid to get vertex positions. At each vertex compute $\\vec r_u\\times\\vec r_v$, normalize it, and store it as the vertex normal that the lighting shader uses for $\\max(0, \\vec n\\cdot\\vec L)$ (see [[la-surface-normal]]). Store $(u, v)$ as the texture coordinates. If you only have $\\vec r$ as a function, central differences give the tangent vectors numerically.',
        },
        {
          type: 'code',
          title: 'torus_mesh.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>
#include <numbers>

struct Vec3 { double x, y, z; };
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator*(double s, Vec3 a) { return {s * a.x, s * a.y, s * a.z}; }
Vec3 cross(Vec3 a, Vec3 b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}
double length(Vec3 a) { return std::sqrt(a.x * a.x + a.y * a.y + a.z * a.z); }

const double R = 3.0, r = 1.0;   // tube center radius, tube radius

// The torus r(u, v): u goes around the z-axis, v goes around the tube.
Vec3 torus(double u, double v) {
    return {(R + r * std::cos(v)) * std::cos(u), (R + r * std::cos(v)) * std::sin(u), r * std::sin(v)};
}

// Normal r_u x r_v from central differences: what a mesh generator can do for ANY r(u, v).
Vec3 normal(double u, double v) {
    const double h = 1e-5;
    Vec3 ru = (1 / (2 * h)) * (torus(u + h, v) - torus(u - h, v));
    Vec3 rv = (1 / (2 * h)) * (torus(u, v + h) - torus(u, v - h));
    return cross(ru, rv);
}

int main() {
    const double pi = std::numbers::pi;
    Vec3 n = normal(0.5, 1.0);
    std::printf("r_u x r_v at (0.5, 1.0): (%.4f, %.4f, %.4f), length %.4f\\n", n.x, n.y, n.z, length(n));
    std::printf("exact length r(R + r cos v):  %.4f\\n", r * (R + r * std::cos(1.0)));

    // Surface area: midpoint sum of |r_u x r_v| du dv over the parameter rectangle.
    auto area = [](double v0, double v1, int N) {
        double du = 2 * std::numbers::pi / N, dv = (v1 - v0) / N, A = 0;
        for (int i = 0; i < N; ++i)
            for (int j = 0; j < N; ++j)
                A += length(normal((i + 0.5) * du, v0 + (j + 0.5) * dv)) * du * dv;
        return A;
    };
    for (int N : {4, 16, 64})
        std::printf("outer half, N = %2d: %.4f\\n", N, area(-pi / 2, pi / 2, N));
    std::printf("outer half, exact : %.4f\\n", 2 * pi * r * (pi * R + 2 * r));
    std::printf("whole torus, N = 64: %.4f\\n", area(0, 2 * pi, 64));
    std::printf("whole torus, exact : %.4f\\n", 4 * pi * pi * R * r);
}`,
          output: `r_u x r_v at (0.5, 1.0): (1.6787, 0.9171, 2.9791), length 3.5403
exact length r(R + r cos v):  3.5403
outer half, N =  4: 72.1129
outer half, N = 16: 71.8042
outer half, N = 64: 71.7853
outer half, exact : 71.7840
whole torus, N = 64: 118.4353
whole torus, exact : 118.4353`,
          annotations: [
            { lines: '17-19', text: 'The parametrization. A mesh generator calls this at every grid point $(u_i, v_j)$ to place vertices.' },
            { lines: '22-27', text: 'Tangent vectors by central differences, crossed to get the (unnormalized) normal. Its direction lights the vertex; its length is the local area-scaling factor.' },
            { lines: '36-42', text: 'Midpoint rule for $\\iint_D |\\vec r_u\\times\\vec r_v|\\,dA$: one parallelogram per grid cell, exactly the picture in the surface-area card.' },
            { lines: '43-45', text: 'The outer half of the tube ($-\\frac{\\pi}{2} \\le v \\le \\frac{\\pi}{2}$) has exact area $2\\pi r(\\pi R + 2r) \\approx 71.78$, more than half of $12\\pi^2 \\approx 118.44$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Analytic beats numeric when you have it',
          text: 'For the torus the exact normal is $\\langle \\cos v\\cos u, \\cos v\\sin u, \\sin v \\rangle$ (the unit vector from the tube\'s center circle to the point), which is cheaper and more accurate than differencing. Numerical tangents are the fallback for surfaces defined by code: a deformed character, a terrain function, a procedural rock.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student finds a normal to the cylinder $\\vec r(u, v) = \\langle 2\\cos u,\\ 2\\sin u,\\ v \\rangle$. Tap the first line that is wrong.',
      lines: [
        '$\\vec r_u = \\langle -2\\sin u,\\ 2\\cos u,\\ 0 \\rangle$',
        '$\\vec r_v = \\langle 0,\\ 0,\\ 1 \\rangle$',
        '$\\vec r_u\\times\\vec r_v = \\langle 2\\cos u,\\ -2\\sin u,\\ 0 \\rangle$',
        'At $u = \\frac{\\pi}{2}$, the point is $(0, 2, v)$ and the normal is $\\langle 0, -2, 0 \\rangle$, pointing in toward the axis.',
      ],
      errorLines: [3],
      explanation: 'The second component of $\\vec a\\times\\vec b$ is $a_3 b_1 - a_1 b_3 = 0\\cdot 0 - (-2\\sin u)(1) = 2\\sin u$, not $-2\\sin u$. So $\\vec r_u\\times\\vec r_v = \\langle 2\\cos u,\\ 2\\sin u,\\ 0 \\rangle$, which is twice the outward radial direction. At $u = \\frac{\\pi}{2}$ the normal is $\\langle 0, 2, 0 \\rangle$, pointing **away** from the axis. A sanity check catches the slip: on a cylinder about the $z$-axis the normal must be parallel to $\\langle x, y, 0 \\rangle$.',
    },
  ],
  takeaways: [
    'A parametric surface is $\\vec r(u, v)$ for $(u, v)$ in a parameter domain $D$; spheres, cylinders, cones, tori and graphs all have standard parametrizations.',
    'Grid curves come from freezing one parameter; in a mesh they are the rows and columns of edges, and $(u, v)$ become texture coordinates.',
    '$\\vec r_u$ and $\\vec r_v$ are tangent to the surface, and $\\vec r_u\\times\\vec r_v$ is normal to it; the tangent plane is $\\vec n\\cdot(\\vec x - \\vec r_0) = 0$. The order of the cross product sets the normal\'s direction.',
    'Surface area is $A = \\iint_D |\\vec r_u\\times\\vec r_v|\\,dA$: each parameter cell becomes a parallelogram of area $|\\vec r_u\\times\\vec r_v|\\,\\Delta u\\,\\Delta v$. Sphere $4\\pi a^2$, torus $4\\pi^2 Rr$.',
    'A zero normal can mean a real singularity (a cone\'s apex) or only a parametrization artifact (a sphere\'s poles).',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Surface Integrals (section 6.6)',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.6 opens with parametric surfaces, grid curves and surface area before moving on to surface integrals.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Parametric Surfaces" page in the Surface Integrals chapter has many more examples of finding parametrizations.',
    },
    {
      title: 'Wikipedia — Parametric surface',
      url: 'https://en.wikipedia.org/wiki/Parametric_surface',
      source: 'wikipedia',
      note: 'A gallery of standard parametrizations and a short treatment of normals and surface area.',
    },
    {
      title: 'Wikipedia — UV mapping',
      url: 'https://en.wikipedia.org/wiki/UV_mapping',
      source: 'wikipedia',
      note: 'How the $(u, v)$ parameters of a surface become the texture coordinates of a game mesh.',
    },
  ],
};
