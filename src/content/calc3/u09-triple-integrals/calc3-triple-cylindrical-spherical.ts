import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-triple-cylindrical-spherical',
  title: 'Triple Integrals in Cylindrical and Spherical Coordinates',
  summary: 'Round solids deserve round coordinates. Derive $dV = r\\,dz\\,dr\\,d\\theta$ and $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ from tiny wedges, then integrate over paraboloids, balls, shells and ice-cream cones.',
  minutes: 20,
  objectives: [
    'Derive the volume elements $dV = r\\,dz\\,dr\\,d\\theta$ and $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ from the geometry of small wedges',
    'Convert a triple integral to cylindrical coordinates and evaluate it over solids with an axis of symmetry',
    'Convert a triple integral to spherical coordinates and evaluate it over balls, shells and cones',
    'Find the volume and centroid of an ice-cream cone, including the hemisphere centroid $\\bar z = \\tfrac{3}{8}a$',
    'Choose the coordinate system that makes the limits constant',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Cylindrical coordinates and the volume element $r\\,dz\\,dr\\,d\\theta$',
      blocks: [
        {
          type: 'p',
          text: 'Recall cylindrical coordinates: keep the height $z$ and describe the floor point $(x, y)$ in [[polar-coordinates|polar coordinates]], so $x = r\\cos\\theta$, $y = r\\sin\\theta$, $z = z$, with $x^2 + y^2 = r^2$. A cylinder $x^2 + y^2 \\le 4$ becomes the constant limit $0 \\le r \\le 2$, which is the whole point.',
        },
        {
          type: 'p',
          text: 'But you cannot just write $dx\\,dy\\,dz = dr\\,d\\theta\\,dz$. Cut the solid along constant values of $r$, $\\theta$ and $z$ and the pieces are not cubes: they are **cylindrical wedges**. What is the volume of one?',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><polygon points="264.2,179.9 266.8,179.6 269.3,179.2 271.8,178.8 274.3,178.4 276.8,178.0 279.3,177.5 281.8,177.1 284.2,176.6 286.6,176.1 289.0,175.6 291.3,175.0 293.7,174.5 296.0,173.9 298.2,173.3 300.5,172.7 302.7,172.1 304.9,171.4 307.1,170.8 309.2,170.1 311.3,169.4 313.3,168.7 315.4,167.9 317.4,167.2 319.3,166.4 319.3,101.1 317.4,101.9 315.4,102.6 313.3,103.4 311.3,104.1 309.2,104.8 307.1,105.4 304.9,106.1 302.7,106.7 300.5,107.4 298.2,108.0 296.0,108.6 293.7,109.1 291.3,109.7 289.0,110.2 286.6,110.8 284.2,111.3 281.8,111.8 279.3,112.2 276.8,112.7 274.3,113.1 271.8,113.5 269.3,113.9 266.8,114.3 264.2,114.6" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="319.3,166.4 357.5,182.5 357.5,117.2 319.3,101.1" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="264.2,179.9 266.8,179.6 269.3,179.2 271.8,178.8 274.3,178.4 276.8,178.0 279.3,177.5 281.8,177.1 284.2,176.6 286.6,176.1 289.0,175.6 291.3,175.0 293.7,174.5 296.0,173.9 298.2,173.3 300.5,172.7 302.7,172.1 304.9,171.4 307.1,170.8 309.2,170.1 311.3,169.4 313.3,168.7 315.4,167.9 317.4,167.2 319.3,166.4 357.5,182.5 354.8,183.6 352.1,184.6 349.2,185.6 346.4,186.6 343.5,187.6 340.5,188.5 337.5,189.4 334.5,190.3 331.4,191.2 328.3,192.0 325.2,192.8 322.0,193.6 318.8,194.4 315.5,195.2 312.2,195.9 308.9,196.6 305.5,197.2 302.1,197.9 298.7,198.5 295.2,199.1 291.8,199.7 288.3,200.2 284.7,200.7 281.2,201.2" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="264.2,114.6 266.8,114.3 269.3,113.9 271.8,113.5 274.3,113.1 276.8,112.7 279.3,112.2 281.8,111.8 284.2,111.3 286.6,110.8 289.0,110.2 291.3,109.7 293.7,109.1 296.0,108.6 298.2,108.0 300.5,107.4 302.7,106.7 304.9,106.1 307.1,105.4 309.2,104.8 311.3,104.1 313.3,103.4 315.4,102.6 317.4,101.9 319.3,101.1 357.5,117.2 354.8,118.3 352.1,119.3 349.2,120.3 346.4,121.3 343.5,122.2 340.5,123.2 337.5,124.1 334.5,125.0 331.4,125.9 328.3,126.7 325.2,127.5 322.0,128.3 318.8,129.1 315.5,129.8 312.2,130.6 308.9,131.3 305.5,131.9 302.1,132.6 298.7,133.2 295.2,133.8 291.8,134.3 288.3,134.9 284.7,135.4 281.2,135.9" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="264.2,179.9 281.2,201.2 281.2,135.9 264.2,114.6" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="281.2,201.2 284.7,200.7 288.3,200.2 291.8,199.7 295.2,199.1 298.7,198.5 302.1,197.9 305.5,197.2 308.9,196.6 312.2,195.9 315.5,195.2 318.8,194.4 322.0,193.6 325.2,192.8 328.3,192.0 331.4,191.2 334.5,190.3 337.5,189.4 340.5,188.5 343.5,187.6 346.4,186.6 349.2,185.6 352.1,184.6 354.8,183.6 357.5,182.5 357.5,117.2 354.8,118.3 352.1,119.3 349.2,120.3 346.4,121.3 343.5,122.2 340.5,123.2 337.5,124.1 334.5,125.0 331.4,125.9 328.3,126.7 325.2,127.5 322.0,128.3 318.8,129.1 315.5,129.8 312.2,130.6 308.9,131.3 305.5,131.9 302.1,132.6 298.7,133.2 295.2,133.8 291.8,134.3 288.3,134.9 284.7,135.4 281.2,135.9" class="f-blue" fill-opacity="0.3" stroke="none"/><line x1="220.0" y1="205.0" x2="68.8" y2="278.3" stroke="currentColor" stroke-width="1.4"/><path d="M64.4 280.4 L69.7 274.4 L72.4 280.0 Z" fill="currentColor"/><line x1="220.0" y1="205.0" x2="392.4" y2="263.8" stroke="currentColor" stroke-width="1.4"/><path d="M397.0 265.4 L389.0 266.0 L391.0 260.1 Z" fill="currentColor"/><line x1="220.0" y1="205.0" x2="220.0" y2="18.9" stroke="currentColor" stroke-width="1.4"/><path d="M220.0 14.1 L223.1 21.4 L216.9 21.4 Z" fill="currentColor"/><text x="53.4" y="297.8" font-size="15">x</text><text x="409.4" y="272.3" font-size="15">y</text><text x="226.0" y="9.0" font-size="15">z</text><polyline points="264.2,179.9 266.8,179.6 269.3,179.2 271.8,178.8 274.3,178.4 276.8,178.0 279.3,177.5 281.8,177.1 284.2,176.6 286.6,176.1 289.0,175.6 291.3,175.0 293.7,174.5 296.0,173.9 298.2,173.3 300.5,172.7 302.7,172.1 304.9,171.4 307.1,170.8 309.2,170.1 311.3,169.4 313.3,168.7 315.4,167.9 317.4,167.2 319.3,166.4" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="281.2,201.2 284.7,200.7 288.3,200.2 291.8,199.7 295.2,199.1 298.7,198.5 302.1,197.9 305.5,197.2 308.9,196.6 312.2,195.9 315.5,195.2 318.8,194.4 322.0,193.6 325.2,192.8 328.3,192.0 331.4,191.2 334.5,190.3 337.5,189.4 340.5,188.5 343.5,187.6 346.4,186.6 349.2,185.6 352.1,184.6 354.8,183.6 357.5,182.5" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="264.2,179.9 281.2,201.2" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="319.3,166.4 357.5,182.5" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="264.2,114.6 266.8,114.3 269.3,113.9 271.8,113.5 274.3,113.1 276.8,112.7 279.3,112.2 281.8,111.8 284.2,111.3 286.6,110.8 289.0,110.2 291.3,109.7 293.7,109.1 296.0,108.6 298.2,108.0 300.5,107.4 302.7,106.7 304.9,106.1 307.1,105.4 309.2,104.8 311.3,104.1 313.3,103.4 315.4,102.6 317.4,101.9 319.3,101.1" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="281.2,135.9 284.7,135.4 288.3,134.9 291.8,134.3 295.2,133.8 298.7,133.2 302.1,132.6 305.5,131.9 308.9,131.3 312.2,130.6 315.5,129.8 318.8,129.1 322.0,128.3 325.2,127.5 328.3,126.7 331.4,125.9 334.5,125.0 337.5,124.1 340.5,123.2 343.5,122.2 346.4,121.3 349.2,120.3 352.1,119.3 354.8,118.3 357.5,117.2" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="264.2,114.6 281.2,135.9" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="319.3,101.1 357.5,117.2" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="264.2,179.9 264.2,114.6" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="319.3,166.4 319.3,101.1" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="281.2,201.2 281.2,135.9" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="357.5,182.5 357.5,117.2" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="220.0,205.0 264.2,260.3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><polyline points="264.2,260.3 264.2,179.9" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><polyline points="264.2,260.3 266.8,260.0 269.3,259.6 271.8,259.2 274.3,258.8 276.8,258.4 279.3,257.9 281.8,257.5 284.2,257.0 286.6,256.5 289.0,256.0 291.3,255.4 293.7,254.9 296.0,254.3 298.2,253.7 300.5,253.1 302.7,252.4 304.9,251.8 307.1,251.1 309.2,250.5 311.3,249.8 313.3,249.1 315.4,248.3 317.4,247.6 319.3,246.8 357.5,262.9 354.8,264.0 352.1,265.0 349.2,266.0 346.4,267.0 343.5,268.0 340.5,268.9 337.5,269.8 334.5,270.7 331.4,271.6 328.3,272.4 325.2,273.2 322.0,274.0 318.8,274.8 315.5,275.5 312.2,276.3 308.9,277.0 305.5,277.6 302.1,278.3 298.7,278.9 295.2,279.5 291.8,280.1 288.3,280.6 284.7,281.1 281.2,281.6 264.2,260.3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><polyline points="184.6,222.1 186.5,222.7 188.3,223.3 190.2,223.8 192.2,224.3 194.2,224.8 196.3,225.2 198.4,225.6 200.6,225.9 202.8,226.2 205.0,226.5 207.2,226.8 209.5,227.0 211.8,227.1 214.1,227.2 216.4,227.3 218.7,227.4 221.0,227.4 223.4,227.3 225.7,227.3 228.0,227.1 230.3,227.0 232.5,226.8 234.8,226.5 237.0,226.3" fill="none" class="s-gray" stroke-width="1.4"/><text x="201.7" y="248.9" font-size="15" class="t-gray">θ</text><text x="236.9" y="241.7" font-size="15" font-style="italic">r</text><polyline points="319.3,101.1 357.5,117.2" fill="none" class="s-red" stroke-width="3.2"/><polyline points="281.2,201.2 288.3,200.2 295.2,199.1 302.1,197.9 308.9,196.6 315.5,195.2 322.0,193.6 328.3,192.0 334.5,190.3 340.5,188.5 346.4,186.6 352.1,184.6 357.5,182.5" fill="none" class="s-red" stroke-width="3.2"/><polyline points="357.5,182.5 357.5,117.2" fill="none" class="s-red" stroke-width="3.2"/><text x="332.4" y="99.2" font-size="15" class="t-red">Δr</text><text x="308.0" y="217.6" font-size="15" class="t-red">r Δθ</text><text x="367.5" y="153.9" font-size="15" class="t-red">Δz</text></svg>',
          alt: 'A small cylindrical wedge floating above the xy-plane, bounded by two cylinders of radius r and r plus delta r, two half-planes at angles theta and theta plus delta theta, and two horizontal planes. Its radial edge is labeled delta r, its curved horizontal edge r delta theta and its vertical edge delta z. Its shadow on the floor is a polar rectangle at distance r from the origin and angle theta from the x-axis.',
          caption: 'A cylindrical wedge. Two of its edges are straight ($\\Delta r$ and $\\Delta z$); the third is an arc of a circle of radius $r$, so its length is $r\\,\\Delta\\theta$, not $\\Delta\\theta$.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Volume of a small cylindrical wedge',
          steps: [
            { tex: '\\Delta A \\approx (\\Delta r)(r\\,\\Delta\\theta)', why: 'The base is a polar rectangle, exactly as in double integrals in polar coordinates: almost a rectangle with sides $\\Delta r$ and arc length $r\\,\\Delta\\theta$.' },
            { tex: '\\Delta V = \\Delta A \\cdot \\Delta z \\approx r\\,\\Delta r\\,\\Delta\\theta\\,\\Delta z', why: 'The wedge is a prism over that base with height $\\Delta z$.' },
            { tex: 'dV = r\\,dz\\,dr\\,d\\theta', why: 'In the limit the approximation becomes exact. The extra factor $r$ records that wedges far from the axis are bigger than wedges near it.' },
          ],
          result: 'Cylindrical volume element: $dV = r\\,dz\\,dr\\,d\\theta$ ([[calc3-cylindrical-volume-element]]).',
        },
        {
          type: 'theorem',
          name: 'Triple integrals in cylindrical coordinates',
          tex: '\\iiint_E f\\,dV = \\int_{\\alpha}^{\\beta}\\int_{h_1(\\theta)}^{h_2(\\theta)}\\int_{u_1(r\\cos\\theta,\\, r\\sin\\theta)}^{u_2(r\\cos\\theta,\\, r\\sin\\theta)} f(r\\cos\\theta, r\\sin\\theta, z)\\,r\\,dz\\,dr\\,d\\theta',
          text: 'This is a type 1 solid whose shadow $D$ is a polar region $\\alpha \\le \\theta \\le \\beta$, $h_1(\\theta) \\le r \\le h_2(\\theta)$. Nothing new happens in $z$; the polar change happens in the shadow.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the factor $r$ cannot be skipped',
          text: 'Picture filling a cylinder of radius $1$ with wedges of equal $\\Delta r\\,\\Delta\\theta\\,\\Delta z$. Near the axis they are slivers; near the rim they are fat. Without the $r$, every wedge would count equally and you would compute the "volume" of the box $[0, 1] \\times [0, 2\\pi] \\times [0, h]$ in the $(r, \\theta, z)$ world, which is $2\\pi h$, instead of the cylinder\'s true volume $\\pi h$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Complete the two volume elements.',
      template: 'In cylindrical coordinates $dV =$ ___ $dz\\,dr\\,d\\theta$, and in spherical coordinates $dV =$ ___ $d\\rho\\,d\\phi\\,d\\theta$.',
      blanks: [{ answers: ['$r$'] }, { answers: ['$\\rho^2\\sin\\phi$'] }],
      wordBank: ['$r$', '$\\rho^2\\sin\\phi$', '$1$', '$r^2$', '$\\rho\\sin\\phi$', '$\\rho^2\\sin\\theta$'],
      explanation: 'Each factor is the product of the stretch factors along the three edges of a small wedge. Cylindrical: $\\Delta r \\cdot r\\,\\Delta\\theta \\cdot \\Delta z$, so the factor is $r$. Spherical (derived in the next cards): $\\Delta\\rho \\cdot \\rho\\,\\Delta\\phi \\cdot \\rho\\sin\\phi\\,\\Delta\\theta$, so the factor is $\\rho^2\\sin\\phi$. The sine belongs to $\\phi$, the angle from the $z$-axis, because $\\rho\\sin\\phi$ is the distance to the $z$-axis.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Worked example: a paraboloid dome',
      blocks: [
        {
          type: 'p',
          text: 'Use cylindrical coordinates when the solid is symmetric about an axis (usually the $z$-axis) and the integrand involves $x^2 + y^2$. Here is a dome: the solid under $z = 4 - x^2 - y^2$ and above the $xy$-plane. In cylindrical coordinates the roof is $z = 4 - r^2$, and it meets the floor where $r = 2$.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [0, 4],
          equal: true,
          view: { azimuth: 30, elevation: 22 },
          parametricSurfaces: [
            { x: 'u cos(v)', y: 'u sin(v)', z: '4 - u^2', u: [0, 2], v: [0, '2pi'], color: 'blue', opacity: 0.35, label: 'roof $z = 4 - r^2$' },
            { x: 'u cos(v)', y: 'u sin(v)', z: '0', u: [0, 2], v: [0, '2pi'], color: 'green', opacity: 0.5, label: 'shadow: the disk $r \\le 2$' },
          ],
          curves: [
            { x: 'a cos(b)', y: 'a sin(b)', z: 't(4 - a^2)', t: [0, 1], color: 'red', label: 'stick at $(r, \\theta)$' },
            { x: 't a cos(b)', y: 't a sin(b)', z: '0', t: [0, 1], color: 'orange', dashed: true, label: 'radius $r$ at angle $\\theta$' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 1.95, step: 0.05, value: 1.2, label: '$r$' },
            { name: 'b', min: 0, max: 6.28, step: 0.05, value: 0.8, label: '$\\theta$', play: true, loop: true },
          ],
          readouts: [{ label: 'stick length $4 - r^2 =$', expr: '4 - a^2', digits: 3 }],
          caption: 'Every vertical stick runs from $z = 0$ to $z = 4 - r^2$, and the stick length depends only on $r$. Press play: as $\\theta$ sweeps around, nothing changes, which is why the $\\theta$-integral will just contribute a factor $2\\pi$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\iiint_E \\sqrt{x^2 + y^2}\\,dV$ over the dome',
          steps: [
            { tex: 'E: \\ 0 \\le \\theta \\le 2\\pi,\\ \\ 0 \\le r \\le 2,\\ \\ 0 \\le z \\le 4 - r^2', why: 'The shadow is the full disk of radius $2$; sticks run from the floor to the roof. All the outer limits are constants.' },
            { tex: '\\sqrt{x^2 + y^2} = r', why: 'Convert the integrand ($r \\ge 0$).' },
            { tex: '\\iiint_E \\sqrt{x^2 + y^2}\\,dV = \\int_0^{2\\pi}\\int_0^2\\int_0^{4-r^2} r \\cdot r\\,dz\\,dr\\,d\\theta', why: 'One $r$ is the integrand; the other is the volume element. Forgetting the second one is the number one error.' },
            { tex: '= \\int_0^{2\\pi}\\int_0^2 r^2(4 - r^2)\\,dr\\,d\\theta', why: 'The integrand does not depend on $z$, so the inner integral multiplies by the stick length.' },
            { tex: '= 2\\pi\\left[\\frac{4r^3}{3} - \\frac{r^5}{5}\\right]_0^2 = 2\\pi\\left(\\frac{32}{3} - \\frac{32}{5}\\right) = \\frac{128\\pi}{15}', why: 'Nothing depends on $\\theta$, so its integral is $2\\pi$. Then $\\tfrac{32}{3} - \\tfrac{32}{5} = \\tfrac{64}{15}$.' },
          ],
          result: '$\\iiint_E \\sqrt{x^2 + y^2}\\,dV = \\tfrac{128\\pi}{15} \\approx 26.8$. In rectangular coordinates you would face $\\sqrt{x^2 + y^2}$ inside limits like $\\pm\\sqrt{4 - x^2}$, a far worse integral.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Spotting a cylindrical problem hidden in rectangular limits',
          text: 'Limits like $-\\sqrt{4 - x^2} \\le y \\le \\sqrt{4 - x^2}$ for $-2 \\le x \\le 2$ describe a disk of radius $2$. Combined with an integrand or a bound involving $x^2 + y^2$, that is a loud signal to convert. Sketch the shadow, rewrite it as $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$, and convert the $z$-limits by replacing $x^2 + y^2$ with $r^2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Convert to cylindrical coordinates and evaluate: $\\displaystyle\\int_{-2}^{2}\\int_{-\\sqrt{4-x^2}}^{\\sqrt{4-x^2}}\\int_{\\sqrt{x^2+y^2}}^{2} (x^2 + y^2)\\,dz\\,dy\\,dx$. An exact answer such as `16pi/5` or a decimal to two places is accepted.',
      answer: '16pi/5',
      answerTex: '\\tfrac{16\\pi}{5}',
      hint: 'The shadow is the disk $r \\le 2$; the solid lies between the cone $z = r$ and the plane $z = 2$. The integrand $x^2 + y^2$ becomes $r^2$, and remember $dV = r\\,dz\\,dr\\,d\\theta$.',
      explanation: 'The region is the solid between the cone $z = r$ and the plane $z = 2$, over the disk $r \\le 2$. So the integral is $\\int_0^{2\\pi}\\int_0^2\\int_r^2 r^2 \\cdot r\\,dz\\,dr\\,d\\theta = 2\\pi\\int_0^2 r^3(2 - r)\\,dr = 2\\pi\\left[\\tfrac{r^4}{2} - \\tfrac{r^5}{5}\\right]_0^2 = 2\\pi\\left(8 - \\tfrac{32}{5}\\right) = \\tfrac{16\\pi}{5} \\approx 10.05$. Dropping the $r$ in $dV$ would give $2\\pi\\int_0^2 r^2(2 - r)\\,dr = \\tfrac{8\\pi}{3}$, a different and wrong number.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Spherical coordinates and $\\rho^2\\sin\\phi$',
      blocks: [
        {
          type: 'p',
          text: 'Spherical coordinates locate a point by its distance $\\rho = \\sqrt{x^2 + y^2 + z^2}$ from the origin, the angle $\\phi$ down from the positive $z$-axis ($0 \\le \\phi \\le \\pi$), and the same $\\theta$ as in cylindrical coordinates ($0 \\le \\theta \\le 2\\pi$):',
        },
        {
          type: 'math',
          tex: 'x = \\rho\\sin\\phi\\cos\\theta, \\qquad y = \\rho\\sin\\phi\\sin\\theta, \\qquad z = \\rho\\cos\\phi',
          caption: 'Here $r = \\rho\\sin\\phi$ is the distance to the $z$-axis. A sphere is $\\rho = a$, and a cone around the $z$-axis is $\\phi = \\phi_0$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Which angle is which',
          text: 'This course uses the math convention: $\\theta$ is the angle around the $z$-axis (the "longitude") and $\\phi$ is the angle from the north pole (the "co-latitude"). Physics and engineering books usually **swap the letters**, writing $\\theta$ for the angle from the $z$-axis and $\\phi$ for the angle around it. Always check which convention a source uses before copying a formula.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 20 520 300" xmlns="http://www.w3.org/2000/svg"><polygon points="241.6,168.6 243.0,173.7 244.3,178.9 245.6,184.2 246.9,189.6 248.1,195.1 249.2,200.6 250.3,206.3 251.3,211.9 251.3,211.9 257.9,211.1 264.3,210.2 270.7,209.2 276.8,208.0 282.8,206.8 288.5,205.4 294.1,204.0 299.4,202.4 299.4,202.4 297.2,197.0 294.8,191.6 292.4,186.3 289.8,181.1 287.2,176.0 284.4,171.0 281.5,166.1 278.5,161.4 278.5,161.4 274.4,162.5 270.2,163.7 265.8,164.7 261.2,165.7 256.5,166.5 251.6,167.3 246.7,168.0 241.6,168.6" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="278.5,161.4 281.5,166.1 284.4,171.0 287.2,176.0 289.8,181.1 292.4,186.3 294.8,191.6 297.2,197.0 299.4,202.4 327.2,187.6 324.3,180.5 321.2,173.5 318.0,166.5 314.7,159.7 311.2,153.0 307.5,146.5 303.7,140.0 299.8,133.8" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="241.6,168.6 246.7,168.0 251.6,167.3 256.5,166.5 261.2,165.7 265.8,164.7 270.2,163.7 274.4,162.5 278.5,161.4 299.8,133.8 294.5,135.3 288.9,136.8 283.1,138.2 277.1,139.4 270.9,140.6 264.6,141.6 258.1,142.5 251.5,143.3" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="251.3,211.9 257.9,211.1 264.3,210.2 270.7,209.2 276.8,208.0 282.8,206.8 288.5,205.4 294.1,204.0 299.4,202.4 327.2,187.6 320.2,189.7 313.0,191.6 305.4,193.4 297.6,195.0 289.5,196.5 281.2,197.8 272.8,199.0 264.1,200.1" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="241.6,168.6 243.0,173.7 244.3,178.9 245.6,184.2 246.9,189.6 248.1,195.1 249.2,200.6 250.3,206.3 251.3,211.9 264.1,200.1 262.8,192.6 261.4,185.3 259.9,178.0 258.3,170.8 256.7,163.8 255.0,156.8 253.3,150.0 251.5,143.3" class="f-blue" fill-opacity="0.3" stroke="none"/><polygon points="251.5,143.3 253.3,150.0 255.0,156.8 256.7,163.8 258.3,170.8 259.9,178.0 261.4,185.3 262.8,192.6 264.1,200.1 264.1,200.1 272.8,199.0 281.2,197.8 289.5,196.5 297.6,195.0 305.4,193.4 313.0,191.6 320.2,189.7 327.2,187.6 327.2,187.6 324.3,180.5 321.2,173.5 318.0,166.5 314.7,159.7 311.2,153.0 307.5,146.5 303.7,140.0 299.8,133.8 299.8,133.8 294.5,135.3 288.9,136.8 283.1,138.2 277.1,139.4 270.9,140.6 264.6,141.6 258.1,142.5 251.5,143.3" class="f-blue" fill-opacity="0.3" stroke="none"/><line x1="210.0" y1="250.0" x2="55.2" y2="313.1" stroke="currentColor" stroke-width="1.4"/><path d="M50.7 314.9 L56.4 309.3 L58.7 315.0 Z" fill="currentColor"/><line x1="210.0" y1="250.0" x2="395.2" y2="303.2" stroke="currentColor" stroke-width="1.4"/><path d="M399.8 304.5 L391.9 305.4 L393.6 299.5 Z" fill="currentColor"/><line x1="210.0" y1="250.0" x2="210.0" y2="33.0" stroke="currentColor" stroke-width="1.4"/><path d="M210.0 28.2 L213.1 35.6 L206.9 35.6 Z" fill="currentColor"/><text x="39.1" y="332.0" font-size="15">x</text><text x="412.9" y="311.1" font-size="15">y</text><text x="216.0" y="22.7" font-size="15">z</text><polyline points="241.6,168.6 243.0,173.7 244.3,178.9 245.6,184.2 246.9,189.6 248.1,195.1 249.2,200.6 250.3,206.3 251.3,211.9" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="278.5,161.4 281.5,166.1 284.4,171.0 287.2,176.0 289.8,181.1 292.4,186.3 294.8,191.6 297.2,197.0 299.4,202.4" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="241.6,168.6 246.7,168.0 251.6,167.3 256.5,166.5 261.2,165.7 265.8,164.7 270.2,163.7 274.4,162.5 278.5,161.4" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="251.3,211.9 257.9,211.1 264.3,210.2 270.7,209.2 276.8,208.0 282.8,206.8 288.5,205.4 294.1,204.0 299.4,202.4" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="251.5,143.3 253.3,150.0 255.0,156.8 256.7,163.8 258.3,170.8 259.9,178.0 261.4,185.3 262.8,192.6 264.1,200.1" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="299.8,133.8 303.7,140.0 307.5,146.5 311.2,153.0 314.7,159.7 318.0,166.5 321.2,173.5 324.3,180.5 327.2,187.6" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="251.5,143.3 258.1,142.5 264.6,141.6 270.9,140.6 277.1,139.4 283.1,138.2 288.9,136.8 294.5,135.3 299.8,133.8" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="264.1,200.1 272.8,199.0 281.2,197.8 289.5,196.5 297.6,195.0 305.4,193.4 313.0,191.6 320.2,189.7 327.2,187.6" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="241.6,168.6 251.5,143.3" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="278.5,161.4 299.8,133.8" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="251.3,211.9 264.1,200.1" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="299.4,202.4 327.2,187.6" fill="none" class="s-blue" stroke-width="1.6"/><polyline points="210.0,250.0 241.6,168.6" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><polyline points="210.0,135.3 241.6,168.6" fill="none" class="s-gray" stroke-width="1.2" stroke-dasharray="3 3"/><polyline points="210.0,183.5 211.3,184.9 212.5,186.6 213.8,188.5 215.0,190.6 216.3,192.9 217.5,195.4 218.7,198.0 219.8,200.9 220.9,203.9 222.0,207.1 223.1,210.4 224.1,213.8" fill="none" class="s-gray" stroke-width="1.4"/><text x="220.2" y="179.3" font-size="15" class="t-gray">φ</text><polyline points="210.0,250.0 241.6,283.3 241.6,168.6" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4"/><polyline points="168.3,267.0 172.6,268.1 177.2,269.2 182.1,270.0 187.1,270.8 192.3,271.4 197.6,271.8 203.0,272.1 208.5,272.2 214.0,272.2 219.4,272.0 224.8,271.6 230.1,271.1" fill="none" class="s-gray" stroke-width="1.4"/><text x="189.1" y="291.7" font-size="15" class="t-gray">θ</text><text x="213.4" y="203.2" font-size="15" font-style="italic">ρ</text><text x="217.8" y="143.0" font-size="13" class="t-gray">ρ sin φ</text><polyline points="251.5,143.3 258.1,142.5 264.6,141.6 270.9,140.6 277.1,139.4 283.1,138.2 288.9,136.8 294.5,135.3 299.8,133.8" fill="none" class="s-red" stroke-width="3.2"/><polyline points="251.5,143.3 253.3,150.0 255.0,156.8 256.7,163.8 258.3,170.8 259.9,178.0 261.4,185.3 262.8,192.6 264.1,200.1" fill="none" class="s-red" stroke-width="3.2"/><polyline points="251.3,211.9 264.1,200.1" fill="none" class="s-red" stroke-width="3.2"/><text x="281.1" y="127.4" font-size="15" class="t-red">ρ sin φ Δθ</text><text x="266.3" y="180.8" font-size="15" class="t-red">ρ Δφ</text><text x="247.7" y="228.0" font-size="15" class="t-red">Δρ</text></svg>',
          alt: 'A small spherical wedge above the xy-plane. A dashed line of length rho runs from the origin to the wedge, making angle phi with the z-axis; a dotted horizontal segment of length rho sine phi runs from the z-axis to the wedge, and the angle theta is marked on the floor. Three edges of the wedge are highlighted: the radial edge delta rho, the edge along a meridian rho delta phi, and the edge along a horizontal circle rho sine phi delta theta.',
          caption: 'A spherical wedge. Moving $\\phi$ traces a great circle of radius $\\rho$; moving $\\theta$ traces a horizontal circle whose radius is only $\\rho\\sin\\phi$, the distance to the $z$-axis.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Volume of a small spherical wedge',
          steps: [
            { tex: '\\text{radial edge} = \\Delta\\rho', why: 'Moving outward along a ray from the origin.' },
            { tex: '\\text{meridian edge} \\approx \\rho\\,\\Delta\\phi', why: 'Changing $\\phi$ moves the point along a circle of radius $\\rho$ centered at the origin; arc length is radius times angle.' },
            { tex: '\\text{horizontal edge} \\approx \\rho\\sin\\phi\\,\\Delta\\theta', why: 'Changing $\\theta$ moves the point around a horizontal circle centered on the $z$-axis. Its radius is the distance to the axis, $r = \\rho\\sin\\phi$.' },
            { tex: '\\Delta V \\approx \\Delta\\rho \\cdot \\rho\\,\\Delta\\phi \\cdot \\rho\\sin\\phi\\,\\Delta\\theta = \\rho^2\\sin\\phi\\,\\Delta\\rho\\,\\Delta\\phi\\,\\Delta\\theta', why: 'The three edges are mutually perpendicular, so the wedge is nearly a rectangular box.' },
          ],
          result: 'Spherical volume element: $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ ([[calc3-spherical-volume-element]]). In the next lesson you will get the same factor from a $3 \\times 3$ determinant.',
        },
        {
          type: 'theorem',
          name: 'Triple integrals in spherical coordinates',
          tex: '\\iiint_E f\\,dV = \\int_{\\theta}\\int_{\\phi}\\int_{\\rho} f(\\rho\\sin\\phi\\cos\\theta, \\rho\\sin\\phi\\sin\\theta, \\rho\\cos\\phi)\\,\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta',
          text: 'The most common order is $d\\rho$ innermost: for each direction $(\\phi, \\theta)$, integrate along the ray from the origin.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic slips',
          text: 'First: $\\phi$ runs from $0$ to $\\pi$, not $2\\pi$. The angle from the north pole reaches the south pole at $\\pi$; $\\theta$ supplies the full turn. Second: the sine is $\\sin\\phi$, never $\\sin\\theta$. Near the poles ($\\phi \\approx 0$ or $\\pi$) the wedges get squeezed to slivers, which $\\sin\\phi \\to 0$ captures; nothing special happens at any value of $\\theta$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student computes the volume of the unit ball in spherical coordinates. Tap the first line that is wrong.',
      lines: [
        'The unit ball is $0 \\le \\rho \\le 1$, $0 \\le \\phi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$.',
        '$dV = \\rho\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$',
        '$V = \\left(\\int_0^1 \\rho\\,d\\rho\\right)\\left(\\int_0^{\\pi}\\sin\\phi\\,d\\phi\\right)\\left(\\int_0^{2\\pi}d\\theta\\right)$',
        '$= \\tfrac{1}{2} \\cdot 2 \\cdot 2\\pi = 2\\pi$',
      ],
      errorLines: [2],
      explanation: 'The volume element is $\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$: **two** of the wedge\'s edges are proportional to $\\rho$ (the meridian edge $\\rho\\,\\Delta\\phi$ and the horizontal edge $\\rho\\sin\\phi\\,\\Delta\\theta$). With the correct element the integrals separate the same way: $\\left(\\int_0^1 \\rho^2\\,d\\rho\\right)\\left(\\int_0^{\\pi}\\sin\\phi\\,d\\phi\\right)\\left(\\int_0^{2\\pi}d\\theta\\right) = \\tfrac{1}{3} \\cdot 2 \\cdot 2\\pi = \\tfrac{4\\pi}{3}$, the familiar volume of a ball. Units help: volume must scale like length cubed, so $\\rho$ must appear to the second power in $dV$ (the third comes from $d\\rho$).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Balls and spherical shells',
      blocks: [
        {
          type: 'p',
          text: 'Spherical coordinates turn every ball and every shell into a **box** in $(\\rho, \\phi, \\theta)$-space. A ball of radius $a$ is $[0, a] \\times [0, \\pi] \\times [0, 2\\pi]$; the shell between radii $a$ and $b$ is $[a, b] \\times [0, \\pi] \\times [0, 2\\pi]$. When the integrand also depends only on $\\rho$, the integral splits into three one-variable integrals.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\iiint_B e^{(x^2 + y^2 + z^2)^{3/2}}\\,dV$ over the unit ball $B$',
          steps: [
            { tex: '(x^2 + y^2 + z^2)^{3/2} = (\\rho^2)^{3/2} = \\rho^3', why: 'The integrand depends only on the distance from the origin.' },
            { tex: '\\iiint_B e^{\\rho^3}\\,dV = \\int_0^{2\\pi}\\int_0^{\\pi}\\int_0^1 e^{\\rho^3}\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta', why: 'Constant limits, and do not forget $\\rho^2\\sin\\phi$.' },
            { tex: '= \\left(\\int_0^{2\\pi}d\\theta\\right)\\left(\\int_0^{\\pi}\\sin\\phi\\,d\\phi\\right)\\left(\\int_0^1 e^{\\rho^3}\\rho^2\\,d\\rho\\right)', why: 'Constant limits and a product integrand let the integral split.' },
            { tex: '= 2\\pi \\cdot 2 \\cdot \\frac{1}{3}\\left[e^{\\rho^3}\\right]_0^1 = \\frac{4\\pi}{3}(e - 1)', why: 'Substitute $w = \\rho^3$, $dw = 3\\rho^2\\,d\\rho$. The $\\rho^2$ from the volume element is exactly what makes this substitution work.' },
          ],
          result: 'The value is $\\tfrac{4\\pi}{3}(e - 1) \\approx 7.20$. In rectangular coordinates this integral has no elementary antiderivative at all.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-2, 2],
          equal: true,
          view: { azimuth: 30, elevation: 22 },
          parametricSurfaces: [
            { x: '2 sin(u) cos(v)', y: '2 sin(u) sin(v)', z: '2 cos(u)', u: [0, 'pi'], v: [0, 'k'], color: 'blue', opacity: 0.3, label: 'outer sphere $\\rho = 2$' },
            { x: 'sin(u) cos(v)', y: 'sin(u) sin(v)', z: 'cos(u)', u: [0, 'pi'], v: [0, 'k'], color: 'red', opacity: 0.6, label: 'inner sphere $\\rho = 1$' },
            { x: 'u sin(v)', y: '0', z: 'u cos(v)', u: [1, 2], v: [0, 'pi'], color: 'orange', opacity: 0.55, label: 'cut faces' },
            { x: 'u sin(v) cos(k)', y: 'u sin(v) sin(k)', z: 'u cos(v)', u: [1, 2], v: [0, 'pi'], color: 'orange', opacity: 0.55 },
          ],
          sliders: [{ name: 'k', min: 3.2, max: 6.2, step: 0.05, value: 4.7, label: 'cut-away angle $\\theta_{\\max}$' }],
          caption: 'The spherical shell $1 \\le \\rho \\le 2$ with a slice removed so you can see inside. In $(\\rho, \\phi, \\theta)$ it is simply a box. Its volume is $\\tfrac{4\\pi}{3}(2^3 - 1^3) = \\tfrac{28\\pi}{3}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Newton\'s shell theorem',
          text: 'Newton used exactly these integrals to show that a uniform spherical shell attracts an outside mass as if all its mass sat at the center, and exerts **zero** net force on a mass inside it. That is why the [[phys-gravitational-field|gravitational field]] of a planet, outside its surface, is the same as that of a point mass: a planet is a nest of shells. The proof integrates the pull of each tiny piece $\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ over the sphere.',
        },
        {
          type: 'p',
          text: 'Because $\\rho$ now names a coordinate, write density with another letter, such as $\\delta(x, y, z)$. Mass is still $m = \\iiint_E \\delta\\,dV$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A spherical shell $1 \\le \\rho \\le 2$ has density $\\delta = \\dfrac{1}{\\rho}$ (it is denser on the inside). Find its mass. An exact answer like `6pi` or a decimal to two places is accepted.',
      label: '$m =$',
      answer: '6pi',
      answerTex: '6\\pi',
      hint: '$m = \\int_0^{2\\pi}\\int_0^{\\pi}\\int_1^2 \\frac{1}{\\rho}\\,\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$. Split it into three integrals.',
      explanation: 'The integrand simplifies to $\\rho\\sin\\phi$, so $m = \\left(\\int_0^{2\\pi}d\\theta\\right)\\left(\\int_0^{\\pi}\\sin\\phi\\,d\\phi\\right)\\left(\\int_1^2 \\rho\\,d\\rho\\right) = 2\\pi \\cdot 2 \\cdot \\tfrac{3}{2} = 6\\pi \\approx 18.85$. Compare with the uniform density $\\delta = 1$, which gives the shell\'s volume $\\tfrac{28\\pi}{3} \\approx 29.3$: weighting by $\\tfrac{1}{\\rho} \\le 1$ shrinks the total.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'To cover a whole ball centered at the origin in spherical coordinates, both angles $\\phi$ and $\\theta$ must run from $0$ to $2\\pi$.',
      answer: false,
      explanation: 'Only $\\theta$ needs a full turn. The angle $\\phi$ is measured from the positive $z$-axis and reaches the negative $z$-axis at $\\phi = \\pi$; letting it continue to $2\\pi$ would sweep every point a second time. Worse, $\\sin\\phi < 0$ on $(\\pi, 2\\pi)$, so those extra wedges would count negatively: with $\\phi \\in [0, 2\\pi]$ the ball\'s "volume" comes out as $0$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Ice-cream cones',
      blocks: [
        {
          type: 'p',
          text: 'The solid inside the sphere $\\rho = a$ and inside the cone $\\phi = \\phi_0$ looks like an ice-cream cone: a pointed cone topped with a spherical cap. In spherical coordinates it is again a box: $0 \\le \\rho \\le a$, $0 \\le \\phi \\le \\phi_0$, $0 \\le \\theta \\le 2\\pi$. The same shape describes a spotlight\'s beam, a radar\'s or sensor\'s detection cone, or the vision cone of a guard in a stealth game, cut off at its maximum range.',
        },
        {
          type: 'plot3d',
          x: [-1, 1],
          y: [-1, 1],
          z: [0, 1],
          equal: true,
          view: { azimuth: 30, elevation: 18 },
          parametricSurfaces: [
            { x: 'u sin(c) cos(v)', y: 'u sin(c) sin(v)', z: 'u cos(c)', u: [0, 1], v: [0, '2pi'], color: 'orange', opacity: 0.55, label: 'cone $\\phi = \\phi_0$' },
            { x: 'sin(u) cos(v)', y: 'sin(u) sin(v)', z: 'cos(u)', u: [0, 'c'], v: [0, '2pi'], color: 'blue', opacity: 0.55, label: 'cap $\\rho = 1$' },
          ],
          points: [{ x: 0, y: 0, z: '3(1 + cos(c))/8', label: 'centroid', color: 'red' }],
          sliders: [{ name: 'c', min: 0.2, max: 1.57, step: 0.01, value: 0.785, label: 'cone half-angle $\\phi_0$', play: true }],
          readouts: [
            { label: 'volume $\\tfrac{2\\pi}{3}(1 - \\cos\\phi_0) =$', expr: '2pi/3 (1 - cos(c))', digits: 4 },
            { label: '$\\bar z = \\tfrac{3}{8}(1 + \\cos\\phi_0) =$', expr: '3(1 + cos(c))/8', digits: 4 },
          ],
          caption: 'An ice-cream cone of radius $a = 1$. Widen the cone: at $\\phi_0 = \\tfrac{\\pi}{2}$ it flattens into the solid hemisphere, with volume $\\tfrac{2\\pi}{3}$ and centroid height $\\tfrac{3}{8}$. The centroid sinks as the cone widens because more of the mass sits low and wide.',
        },
        {
          type: 'derivation',
          title: 'Volume and centroid of the ice-cream cone',
          steps: [
            { tex: 'V = \\int_0^{2\\pi}\\int_0^{\\phi_0}\\int_0^a \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta = 2\\pi(1 - \\cos\\phi_0)\\frac{a^3}{3}', why: 'Constant limits, so the integral splits: $\\int_0^{\\phi_0}\\sin\\phi\\,d\\phi = 1 - \\cos\\phi_0$.' },
            { tex: 'M_{xy} = \\iiint z\\,dV = \\int_0^{2\\pi}\\int_0^{\\phi_0}\\int_0^a (\\rho\\cos\\phi)\\,\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta', why: 'Constant density; weight each piece by its height $z = \\rho\\cos\\phi$.' },
            { tex: '= 2\\pi \\cdot \\frac{a^4}{4} \\cdot \\frac{\\sin^2\\phi_0}{2} = \\frac{\\pi a^4\\sin^2\\phi_0}{4}', why: '$\\int_0^{\\phi_0}\\sin\\phi\\cos\\phi\\,d\\phi = \\tfrac{1}{2}\\sin^2\\phi_0$ (substitute $w = \\sin\\phi$).' },
            { tex: '\\bar z = \\frac{M_{xy}}{V} = \\frac{3a\\sin^2\\phi_0}{8(1 - \\cos\\phi_0)} = \\frac{3a(1 + \\cos\\phi_0)}{8}', why: 'Divide, then use $\\sin^2\\phi_0 = (1 - \\cos\\phi_0)(1 + \\cos\\phi_0)$. By symmetry $\\bar x = \\bar y = 0$.' },
            { tex: '\\phi_0 = \\tfrac{\\pi}{2}: \\quad V = \\tfrac{2}{3}\\pi a^3, \\quad \\bar z = \\tfrac{3}{8}a', why: 'The hemisphere. Half the ball\'s volume, as it must be, and its centroid sits $\\tfrac{3}{8}$ of the way up.' },
          ],
          result: 'For $a = 1$, $\\phi_0 = \\tfrac{\\pi}{4}$: $V = \\tfrac{(2 - \\sqrt{2})\\pi}{3} \\approx 0.6134$ and $\\bar z = \\tfrac{3}{8}\\left(1 + \\tfrac{\\sqrt{2}}{2}\\right) \\approx 0.6402$.',
        },
        {
          type: 'code',
          title: 'icecream.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

// Ice-cream cone: inside the unit sphere and inside the cone phi <= pi/4,
// i.e. x^2 + y^2 + z^2 <= 1 and z >= sqrt(x^2 + y^2).
bool inCone(double x, double y, double z) {
    return x * x + y * y + z * z <= 1.0 && z >= std::sqrt(x * x + y * y);
}

int main() {
    std::mt19937 gen(42);                       // fixed seed: same run every time
    auto unit = [&] { return gen() / 4294967296.0; };  // uniform in [0, 1)
    const double boxVolume = 2.0 * 2.0 * 1.0;   // [-1,1] x [-1,1] x [0,1]
    const double pi = std::acos(-1.0);
    const double exactV = 2.0 * pi / 3.0 * (1.0 - std::cos(pi / 4));
    const double exactZ = 3.0 / 8.0 * (1.0 + std::cos(pi / 4));

    long hits = 0;
    double sumZ = 0;
    for (long n = 1; n <= 1000000; ++n) {
        double x = 2 * unit() - 1, y = 2 * unit() - 1, z = unit();
        if (inCone(x, y, z)) { ++hits; sumZ += z; }
        if (n == 1000 || n == 10000 || n == 100000 || n == 1000000)
            std::printf("N = %7ld  volume = %.4f  zbar = %.4f\\n", n, boxVolume * hits / n, sumZ / hits);
    }
    std::printf("exact        volume = %.4f  zbar = %.4f\\n", exactV, exactZ);
}`,
          output: `N =    1000  volume = 0.6240  zbar = 0.6114
N =   10000  volume = 0.6284  zbar = 0.6386
N =  100000  volume = 0.6095  zbar = 0.6408
N = 1000000  volume = 0.6158  zbar = 0.6403
exact        volume = 0.6134  zbar = 0.6402`,
          annotations: [
            { lines: '7-9', text: 'The membership test is easy in rectangular coordinates: inside the sphere and above the cone $z = r$ (which is $\\phi = \\tfrac{\\pi}{4}$).' },
            { lines: '12-13', text: '`std::mt19937` produces the same sequence on every compiler; dividing by $2^{32}$ maps it to $[0, 1)$.' },
            { lines: '22-23', text: 'Throw a random dart into the box. The fraction that lands in the cone, times the box volume, estimates the cone\'s volume; the average $z$ of the hits estimates $\\bar z$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Monte Carlo versus the exact formula',
          text: 'Monte Carlo error shrinks like $\\tfrac{1}{\\sqrt{N}}$: a million samples buy only about two or three correct digits. The spherical-coordinate formula gives every digit for free. Games still use Monte Carlo constantly (ambient occlusion, soft shadows, path tracing) because real scenes have no closed form; but when one exists, as for a cone-shaped vision or sound volume, use it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'The solid $E$ lies inside the sphere $x^2 + y^2 + z^2 = 4$ and above the cone $z = \\sqrt{3}\\sqrt{x^2 + y^2}$. In spherical coordinates, what are the limits for $\\phi$?',
      options: [
        { text: '$0 \\le \\phi \\le \\dfrac{\\pi}{6}$', correct: true, why: 'On the cone $z = \\sqrt{3}\\,r$, so $\\tan\\phi = \\dfrac{r}{z} = \\dfrac{1}{\\sqrt{3}}$ and $\\phi = \\tfrac{\\pi}{6}$. "Above the cone" means closer to the $z$-axis: smaller $\\phi$.' },
        { text: '$0 \\le \\phi \\le \\dfrac{\\pi}{3}$', why: 'This comes from $\\tan\\phi = \\dfrac{z}{r} = \\sqrt{3}$, which measures the angle from the $xy$-plane. $\\phi$ is measured from the $z$-axis, so $\\tan\\phi = \\dfrac{r}{z}$.' },
        { text: '$\\dfrac{\\pi}{6} \\le \\phi \\le \\dfrac{\\pi}{2}$', why: 'That describes the part of the upper half-ball **below** the cone, farther from the $z$-axis.' },
        { text: '$0 \\le \\phi \\le \\dfrac{\\pi}{4}$', why: '$\\phi = \\tfrac{\\pi}{4}$ is the cone $z = \\sqrt{x^2 + y^2}$. This cone is steeper because of the factor $\\sqrt{3}$.' },
      ],
      explanation: 'Substitute $z = \\rho\\cos\\phi$ and $\\sqrt{x^2 + y^2} = \\rho\\sin\\phi$ into the cone: $\\rho\\cos\\phi = \\sqrt{3}\\rho\\sin\\phi$, so $\\tan\\phi = \\tfrac{1}{\\sqrt{3}}$ and $\\phi = \\tfrac{\\pi}{6}$. The full description is $0 \\le \\rho \\le 2$, $0 \\le \\phi \\le \\tfrac{\\pi}{6}$, $0 \\le \\theta \\le 2\\pi$: a narrow ice-cream cone.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Use the formula $\\bar z = \\tfrac{3a(1 + \\cos\\phi_0)}{8}$ to find the centroid height of the ice-cream cone with radius $a = 2$ and half-angle $\\phi_0 = \\tfrac{\\pi}{3}$.',
      label: '$\\bar z =$',
      answer: '9/8',
      answerTex: '\\tfrac{9}{8}',
      explanation: '$\\cos\\tfrac{\\pi}{3} = \\tfrac{1}{2}$, so $\\bar z = \\tfrac{3 \\cdot 2 \\cdot (1 + \\tfrac{1}{2})}{8} = \\tfrac{9}{8} = 1.125$. Sanity check: the hemisphere of radius $2$ has $\\bar z = \\tfrac{3}{8} \\cdot 2 = 0.75$, and a narrower cone puts relatively more of its mass up in the cap, so its centroid should be higher. It is.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Choosing coordinates, and a sphere sitting on a cone',
      blocks: [
        {
          type: 'p',
          text: 'Pick the system in which the **bounding surfaces become coordinate surfaces** ($\\rho$, $\\phi$, $r$, $\\theta$ or $z$ equal to a constant, or a simple function of the others). Then the limits are easy, and the integrand usually simplifies too.',
        },
        {
          type: 'table',
          headers: ['The solid involves', 'Use', 'Volume element'],
          rows: [
            ['planes, boxes, tetrahedra', 'rectangular', '$dz\\,dy\\,dx$'],
            ['cylinders $x^2 + y^2 = a^2$, paraboloids $z = x^2 + y^2$, an axis of symmetry', 'cylindrical', '$r\\,dz\\,dr\\,d\\theta$'],
            ['spheres $x^2 + y^2 + z^2 = a^2$, cones $z = k\\sqrt{x^2 + y^2}$, symmetry about a point', 'spherical', '$\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$'],
          ],
        },
        {
          type: 'p',
          text: 'Spherical coordinates also handle spheres that are not centered at the origin, as long as they pass through it. The sphere $x^2 + y^2 + z^2 = z$ (radius $\\tfrac{1}{2}$, centered at $(0, 0, \\tfrac{1}{2})$) touches the origin, and in spherical coordinates it becomes $\\rho^2 = \\rho\\cos\\phi$, that is, $\\rho = \\cos\\phi$. The radial limit now depends on the direction, which is perfectly fine for an inner limit.',
        },
        {
          type: 'plot3d',
          x: [-0.5, 0.5],
          y: [-0.5, 0.5],
          z: [0, 1],
          equal: true,
          view: { azimuth: 30, elevation: 15 },
          parametricSurfaces: [
            { x: 'cos(u) sin(u) cos(v)', y: 'cos(u) sin(u) sin(v)', z: 'cos(u)^2', u: [0, 'pi/4'], v: [0, '2pi'], color: 'blue', opacity: 0.6, label: 'cap of the sphere $\\rho = \\cos\\phi$' },
            { x: 'u sin(pi/4) cos(v)', y: 'u sin(pi/4) sin(v)', z: 'u cos(pi/4)', u: [0, 'sqrt(2)/2'], v: [0, '2pi'], color: 'orange', opacity: 0.55, label: 'cone $\\phi = \\tfrac{\\pi}{4}$' },
            { x: 'cos(u) sin(u) cos(v)', y: 'cos(u) sin(u) sin(v)', z: 'cos(u)^2', u: ['pi/4', 'pi/2'], v: [0, '2pi'], color: 'gray', opacity: 0.15, label: 'rest of the sphere' },
          ],
          curves: [{ x: 't cos(b) sin(b)', y: '0', z: 't cos(b)^2', t: [0, 1], color: 'red', label: 'a ray from the origin to $\\rho = \\cos\\phi$' }],
          sliders: [{ name: 'b', min: 0, max: 0.78, step: 0.01, value: 0.5, label: '$\\phi$ of the ray', play: true }],
          readouts: [{ label: 'ray length $\\rho = \\cos\\phi =$', expr: 'cos(b)', digits: 3 }],
          caption: 'The solid above the cone $z = \\sqrt{x^2 + y^2}$ and inside the sphere $x^2 + y^2 + z^2 = z$. Each ray from the origin at angle $\\phi$ leaves the solid at distance $\\rho = \\cos\\phi$: longest straight up, shortest along the cone.',
        },
        {
          type: 'derivation',
          title: 'Volume above $z = \\sqrt{x^2 + y^2}$ and inside $x^2 + y^2 + z^2 = z$',
          steps: [
            { tex: 'E: \\ 0 \\le \\theta \\le 2\\pi,\\ \\ 0 \\le \\phi \\le \\tfrac{\\pi}{4},\\ \\ 0 \\le \\rho \\le \\cos\\phi', why: 'The cone is $\\phi = \\tfrac{\\pi}{4}$; above it means $\\phi \\le \\tfrac{\\pi}{4}$. Each ray runs from the origin to the sphere $\\rho = \\cos\\phi$.' },
            { tex: 'V = \\int_0^{2\\pi}\\int_0^{\\pi/4}\\int_0^{\\cos\\phi} \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta = 2\\pi\\int_0^{\\pi/4} \\frac{\\cos^3\\phi}{3}\\sin\\phi\\,d\\phi', why: 'Inner integral: $\\left[\\tfrac{\\rho^3}{3}\\right]_0^{\\cos\\phi}$. The $\\theta$-integral gives $2\\pi$.' },
            { tex: '= \\frac{2\\pi}{3}\\left[-\\frac{\\cos^4\\phi}{4}\\right]_0^{\\pi/4} = \\frac{2\\pi}{3} \\cdot \\frac{1}{4}\\left(1 - \\frac{1}{4}\\right) = \\frac{\\pi}{8}', why: 'Substitute $w = \\cos\\phi$; $\\cos^4\\tfrac{\\pi}{4} = \\left(\\tfrac{\\sqrt{2}}{2}\\right)^4 = \\tfrac{1}{4}$.' },
          ],
          result: 'The volume is $\\tfrac{\\pi}{8} \\approx 0.393$. (A Monte Carlo check with 400,000 random points gives $0.392$.)',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favorite exam question gives one solid and asks you to set it up in **all three** systems without evaluating. Expect the spherical version to be one integral, the cylindrical version to need care where the cone meets the sphere, and the rectangular version to be ugly. Always state the full limits for all three variables.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'expr',
      prompt: 'You convert $\\iiint_E (x^2 + y^2 + z^2)\\,dV$ to spherical coordinates. What is the complete integrand, including the volume-element factor, in front of $d\\rho\\,d\\phi\\,d\\theta$? Type `rho` for $\\rho$ and `phi` for $\\phi$.',
      variables: ['rho', 'phi'],
      domain: [0.2, 3],
      label: 'integrand $=$',
      answer: 'rho^4 sin(phi)',
      answerTex: '\\rho^4\\sin\\phi',
      hint: '$x^2 + y^2 + z^2 = \\rho^2$, and $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.',
      explanation: 'The function becomes $\\rho^2$, and the volume element contributes $\\rho^2\\sin\\phi$, so the integrand is $\\rho^2 \\cdot \\rho^2\\sin\\phi = \\rho^4\\sin\\phi$. Over the unit ball, for example, this gives $2\\pi \\cdot 2 \\cdot \\tfrac{1}{5} = \\tfrac{4\\pi}{5}$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for converting a triple integral to spherical coordinates in order.',
      lines: [
        'Sketch $E$ and identify its bounding spheres, cones and planes',
        'Write each bounding surface in terms of $\\rho$, $\\phi$, $\\theta$ and read off the limits',
        'Substitute $x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$ into $f$ and replace $dV$ by $\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$',
        'Integrate from the inside out, usually $\\rho$ first',
      ],
      distractors: ['Replace $dV$ by $d\\rho\\,d\\phi\\,d\\theta$'],
      explanation: 'You cannot write limits before you know the surfaces, and you cannot integrate before the integrand and limits are both converted. Substituting into $f$ and inserting the volume element are done together. The distractor is the most common mistake: $d\\rho\\,d\\phi\\,d\\theta$ is the volume of a box in $(\\rho, \\phi, \\theta)$-space, not in real space.',
    },
  ],
  takeaways: [
    'Cylindrical: $x = r\\cos\\theta$, $y = r\\sin\\theta$, $z = z$, and $dV = r\\,dz\\,dr\\,d\\theta$ because a small wedge has edges $\\Delta r$, $r\\,\\Delta\\theta$, $\\Delta z$.',
    'Spherical (math convention, $\\phi$ from the positive $z$-axis): $x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$, and $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ from edges $\\Delta\\rho$, $\\rho\\,\\Delta\\phi$, $\\rho\\sin\\phi\\,\\Delta\\theta$.',
    '$0 \\le \\phi \\le \\pi$ and $0 \\le \\theta \\le 2\\pi$; physics texts swap the names of the two angles.',
    'Balls, shells and ice-cream cones are boxes in spherical coordinates; the cone $z = k\\sqrt{x^2 + y^2}$ is $\\tan\\phi = \\tfrac{1}{k}$.',
    'The hemisphere of radius $a$ has centroid $\\bar z = \\tfrac{3}{8}a$; an ice-cream cone has $\\bar z = \\tfrac{3}{8}a(1 + \\cos\\phi_0)$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 5.5 Triple Integrals in Cylindrical and Spherical Coordinates',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Free textbook; section 5.5 has many more worked solids, including spheres not centered at the origin.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'See "Triple Integrals in Cylindrical Coordinates" and "...in Spherical Coordinates" under Multiple Integrals for extra practice with the limits.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The integrating multivariable functions unit includes videos deriving the spherical volume element.',
    },
    {
      title: 'Wikipedia — Shell theorem',
      url: 'https://en.wikipedia.org/wiki/Shell_theorem',
      source: 'wikipedia',
      note: 'Newton\'s result about spherical shells, proved with exactly the spherical integrals of this lesson.',
    },
  ],
};
