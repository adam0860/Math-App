import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-work',
  title: 'Work and Physical Applications',
  summary: 'Force times distance — until the force changes or different pieces move different distances. Then you slice and integrate.',
  minutes: 18,
  objectives: [
    'Compute the work done by a variable force as $W = \\int_a^b F(x)\\,dx$',
    'Use Hooke\'s law to find spring constants and the work to stretch or compress a spring',
    'Find the work to lift cables, chains and loads where different parts move different distances',
    'Set up and evaluate pumping problems by slicing liquid into horizontal layers',
    'Find the center of mass of a rod and the centroid of a region',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Work: force times distance, one slice at a time',
      blocks: [
        {
          type: 'p',
          text: 'In physics, [[work]] measures the energy transferred when a force pushes something along. For a **constant** force $F$ acting along a straight path of length $d$, it is simply $W = Fd$. Lift a $20$-newton box $3$ meters and you have done $60$ joules of work.',
        },
        {
          type: 'table',
          headers: ['System', 'Force', 'Distance', 'Work'],
          rows: [
            ['SI', 'newton (N) $= \\text{kg} \\cdot \\text{m/s}^2$', 'meter (m)', 'joule (J) $= \\text{N} \\cdot \\text{m}$'],
            ['US customary', 'pound (lb)', 'foot (ft)', 'foot-pound (ft-lb)'],
          ],
          caption: 'In SI you are often given a *mass* in kg; multiply by $g = 9.8\\ \\text{m/s}^2$ to get the force (weight). In US units, pounds are already a force.',
        },
        {
          type: 'p',
          text: 'Now suppose the force changes with position: $F(x)$ for $a \\le x \\le b$. Over a short piece of length $\\Delta x$ the force is nearly constant, so the work on that piece is about $F(x_i^*)\\,\\Delta x$. Adding the pieces gives a [[riemann-sum]], and the limit is an integral.',
        },
        {
          type: 'theorem',
          name: 'Work done by a variable force',
          tex: 'W = \\int_a^b F(x)\\,dx',
          text: 'for a continuous force $F(x)$ acting along the $x$-axis from $x = a$ to $x = b$. Geometrically, work is the area under the force–position graph.',
        },
        {
          type: 'graph',
          x: [0, 3.5],
          y: [-1, 17],
          functions: [{ expr: 'x^2 + 2x', label: '$F(x) = x^2 + 2x$ (lb)', color: 'blue', domain: [0, 3.5] }],
          areas: [{ expr: 'x^2 + 2x', from: 1, to: 'b', color: 'orange' }],
          vlines: [{ x: 1, label: 'start x = 1', color: 'gray' }],
          sliders: [{ name: 'b', min: 1.05, max: 3, step: 0.05, value: 3, label: 'end position $b$ (ft)' }],
          readouts: [{ label: 'work so far $W = \\frac{b^3}{3} + b^2 - \\frac43 =$', expr: 'b^3/3 + b^2 - 4/3', digits: 3 }],
          caption: 'The shaded area is the work done moving from $x = 1$ to $x = b$. The force grows with $x$, so each extra foot costs more work than the last.',
        },
        {
          type: 'derivation',
          title: 'Work done by $F(x) = x^2 + 2x$ pounds from $x = 1$ to $x = 3$ feet',
          steps: [
            { tex: 'W = \\int_1^3 \\left(x^2 + 2x\\right) dx', why: 'The force varies, so integrate it over the path.' },
            { tex: '= \\left[\\frac{x^3}{3} + x^2\\right]_1^3', why: 'Power rule on each term.' },
            { tex: '= (9 + 9) - \\left(\\frac13 + 1\\right) = \\frac{50}{3}', why: 'Evaluate: $\\frac{27}{3} + 9 = 18$ and $\\frac13 + 1 = \\frac43$; $18 - \\frac43 = \\frac{50}{3}$.' },
          ],
          result: '$W = \\frac{50}{3} \\approx 16.7$ ft-lb.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why work is the right thing to integrate',
          text: 'Work is *additive over distance*: the work to go from $a$ to $c$ equals the work from $a$ to $b$ plus the work from $b$ to $c$. Any quantity that is "rate times amount" on small pieces and adds up over pieces is an integral. You will see the same pattern for mass (density times length), volume (area times thickness) and, later, for probability.',
        },
      ],
    },
    // 2
    {
      kind: 'expr',
      prompt: 'An object is pushed along the $x$-axis (in meters) by a force $F(x) = \\dfrac{5}{x^2}$ newtons. Find the work $W(b)$ done moving it from $x = 1$ to $x = b$ (for $b > 1$).',
      hint: '$\\int \\frac{5}{x^2}\\,dx = \\int 5x^{-2}\\,dx = -\\frac{5}{x}$.',
      label: '$W(b) =$',
      variables: ['b'],
      domain: [1.2, 5],
      answer: '5 - 5/b',
      answerTex: '5 - \\frac{5}{b}',
      explanation: '$W(b) = \\int_1^b 5x^{-2}\\,dx = \\left[-\\frac5x\\right]_1^b = -\\frac5b + 5 = 5 - \\frac5b$ joules. As $b \\to \\infty$ the work approaches $5$ J: an inverse-square force (like gravity far from a planet) needs only a finite amount of energy to escape it completely. That is the idea behind escape velocity.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Springs and Hooke\'s law',
      blocks: [
        {
          type: 'p',
          text: 'Stretch a spring and it pulls back; the farther you stretch it, the harder it pulls. For moderate stretches the force is proportional to how far the spring is displaced from its **natural length** — [[hookes-law]].',
        },
        {
          type: 'theorem',
          name: 'Hooke\'s law',
          tex: 'F(x) = kx',
          text: 'where $x$ is the displacement from the natural (unstretched) length and $k > 0$ is the *spring constant* (N/m or lb/ft). Compressing ($x < 0$) works the same way.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Measure $x$ from the natural length, in consistent units',
          text: 'If a spring\'s natural length is $10$ cm and it is stretched to $15$ cm, then $x = 0.05$ m — not $15$ cm, and not $5$ (unless you work in cm throughout). Mixing centimeters with newtons gives answers off by a factor of $100$.',
        },
        {
          type: 'derivation',
          title: 'A force of $40$ N holds a spring stretched from $10$ cm to $15$ cm. How much work stretches it from $15$ cm to $18$ cm?',
          steps: [
            { tex: '40 = k(0.05) \\implies k = 800\\ \\text{N/m}', why: 'Hooke\'s law with displacement $x = 15 - 10 = 5$ cm $= 0.05$ m.' },
            { tex: '15 \\text{ cm} \\to x = 0.05, \\qquad 18 \\text{ cm} \\to x = 0.08', why: 'Convert both lengths into displacements from the natural length, in meters.' },
            { tex: 'W = \\int_{0.05}^{0.08} 800x\\,dx', why: 'Work by a variable force, with $F(x) = 800x$.' },
            { tex: '= 400x^2\\Big|_{0.05}^{0.08} = 400(0.0064 - 0.0025)', why: 'Antiderivative of $800x$ is $400x^2$.' },
            { tex: '= 400(0.0039) = 1.56\\ \\text{J}', why: 'Arithmetic.' },
          ],
          result: 'It takes $1.56$ J.',
        },
        {
          type: 'p',
          text: 'In general, the work to stretch a spring from its natural length to displacement $x$ is $\\int_0^x ks\\,ds = \\frac12 kx^2$, the *elastic potential energy* stored in it. Because it grows like $x^2$, each additional centimeter costs more than the last.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Springs everywhere in games',
          text: 'Smooth camera follow, car suspension, ragdoll joints, jiggle bones and UI "bounce" are all simulated springs: each frame the code applies `force = -k * (length - restLength)`. Physics engines also check energy: the $\\frac12 kx^2$ stored in springs plus the kinetic energy $\\frac12 mv^2$ should stay roughly constant. If it grows, the integrator is unstable — a sign the timestep is too large or the spring too stiff.',
        },
      ],
    },
    // 4
    {
      kind: 'numeric',
      prompt: 'A spring has natural length $20$ cm. A force of $25$ N holds it stretched to $30$ cm. How much work does it take to stretch it from $30$ cm to $40$ cm?',
      hint: 'First find $k$ from $25 = k(0.10)$. Then integrate $kx$ from $x = 0.10$ to $x = 0.20$ (meters past natural length).',
      answer: '3.75',
      unit: 'J',
      label: '$W =$',
      explanation: '$k = \\frac{25}{0.10} = 250$ N/m. The stretch goes from displacement $0.10$ m to $0.20$ m, so $W = \\int_{0.10}^{0.20} 250x\\,dx = 125x^2\\Big|_{0.10}^{0.20} = 125(0.04 - 0.01) = 3.75$ J. A common wrong answer integrates from $0.30$ to $0.40$ — those are lengths, not displacements from the natural length.',
    },
    // 5
    {
      kind: 'truefalse',
      prompt: 'Stretching a spring from its natural length to $2$ cm past it takes the same work as stretching it from $2$ cm to $4$ cm past natural length.',
      answer: false,
      explanation: 'Work is $\\frac12 kx^2$ measured from natural length. From $0$ to $2$ cm: $\\frac12 k(2^2 - 0^2) = 2k$. From $2$ to $4$ cm: $\\frac12 k(4^2 - 2^2) = 6k$ — three times as much, because the spring pulls harder the more it is stretched. Equal distances only mean equal work when the force is constant.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Cables and chains: different pieces move different distances',
      blocks: [
        {
          type: 'p',
          text: 'Now a different kind of problem. A $50$-ft cable weighing $2$ lb/ft hangs from the top of a building, and you winch it all up. The total weight is $100$ lb, but $W = 100 \\times 50$ is wrong: the top of the cable barely moves while the bottom end travels the full $50$ ft. When different parts of an object travel different distances, **slice the object**, not the path.',
        },
        {
          type: 'derivation',
          title: 'Work to pull up a $50$-ft cable weighing $2$ lb/ft',
          steps: [
            { tex: '\\text{Let } y = \\text{depth below the top}, \\; 0 \\le y \\le 50', why: 'Choose a coordinate that tells you how far each piece must travel. A piece at depth $y$ must be lifted $y$ feet.' },
            { tex: '\\text{weight of a slice} = 2\\,\\Delta y \\text{ lb}', why: 'Weight density $2$ lb/ft times the slice length $\\Delta y$.' },
            { tex: '\\text{work on a slice} \\approx 2\\,\\Delta y \\cdot y', why: 'Force times distance: every point of a short slice moves about the same distance $y$.' },
            { tex: 'W = \\int_0^{50} 2y\\,dy', why: 'Add up the slices and take the limit.' },
            { tex: '= y^2\\Big|_0^{50} = 2500\\ \\text{ft-lb}', why: 'Antiderivative of $2y$ is $y^2$.' },
          ],
          result: '$W = 2500$ ft-lb — exactly half of the naive $100 \\times 50 = 5000$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why exactly half?',
          text: 'On average, a piece of a uniform cable has to travel half the cable\'s length. In fact, the work to lift any object equals its total weight times the distance its [[calc2-center-of-mass|center of mass]] rises. The cable\'s center of mass starts $25$ ft down, so $W = 100 \\times 25 = 2500$. ✓ (That shortcut only works for uniform objects lifted vertically; the integral always works.)',
        },
        {
          type: 'p',
          text: 'If the cable also lifts a load — a bucket, an anchor, an elevator car — add the load separately. A $100$-lb load hanging at the bottom moves the full $50$ ft at constant force, which is $100 \\times 50 = 5000$ ft-lb more, for a total of $7500$ ft-lb.',
        },
      ],
    },
    // 7
    {
      kind: 'numeric',
      prompt: 'A $20$-ft chain weighing $5$ lb/ft hangs from a winch. How much work does it take to wind the entire chain up?',
      hint: 'A piece at depth $y$ weighs $5\\,dy$ and travels $y$ feet. Integrate from $0$ to $20$.',
      answer: '1000',
      unit: 'ft-lb',
      label: '$W =$',
      explanation: '$W = \\int_0^{20} 5y\\,dy = \\frac52 y^2\\Big|_0^{20} = \\frac52 \\cdot 400 = 1000$ ft-lb. Check with the center-of-mass shortcut: the chain weighs $100$ lb and its center of mass rises $10$ ft, so $100 \\times 10 = 1000$. ✓',
    },
    // 8
    {
      kind: 'error',
      prompt: 'A $50$-lb bucket is lifted from the bottom of a $30$-ft well by a cable weighing $2$ lb/ft. Tap the first line that is wrong.',
      lines: [
        'Bucket: constant force $50$ lb through $30$ ft, so $50 \\cdot 30 = 1500$ ft-lb.',
        'The cable weighs $2 \\cdot 30 = 60$ lb in total.',
        'Cable: $60$ lb lifted $30$ ft, so $60 \\cdot 30 = 1800$ ft-lb.',
        'Total work $= 1500 + 1800 = 3300$ ft-lb.',
      ],
      errorLines: [3],
      explanation: 'Line 3 assumes every part of the cable moves $30$ ft, but a piece at depth $y$ only moves $y$ ft. Correctly, the cable takes $\\int_0^{30} 2y\\,dy = y^2\\Big|_0^{30} = 900$ ft-lb (the same as $60$ lb times the $15$ ft its center of mass rises). The total is $1500 + 900 = 2400$ ft-lb. Lines 1 and 2 are correct: the bucket really does move the full $30$ ft.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Pumping liquid out of a tank',
      blocks: [
        {
          type: 'p',
          text: 'Pumping problems combine both ideas. Water at the bottom of a tank must be lifted farther than water near the top, so slice the liquid into thin **horizontal layers**. Each layer is lifted as a unit, its weight is its volume times the [[calc2-weight-density]], and it travels from its own height to the outlet.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Coordinates', text: 'Choose a vertical axis; usually $y$ = height above the bottom of the tank. Mark the outlet height.' },
            { title: 'One layer', text: 'At height $y$ the layer has thickness $dy$ and cross-sectional area $A(y)$ (often a circle or rectangle; similar triangles if the tank tapers).' },
            { title: 'Weight', text: 'Weight $= \\rho g \\cdot A(y)\\,dy$. For water, $\\rho g = 1000 \\cdot 9.8 = 9800$ N/m³, or $62.5$ lb/ft³.' },
            { title: 'Distance', text: '$D(y)$ = outlet height $- y$.' },
            { title: 'Integrate', text: '$W = \\int \\rho g\\,A(y)\\,D(y)\\,dy$ over the heights where there is liquid — not necessarily the whole tank.' },
          ],
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [-0.5, 6.5],
          equal: true,
          areas: [{ expr: '5', from: -2, to: 2, color: 'blue' }],
          segments: [
            { from: [-2, 0], to: [2, 0], color: 'gray' },
            { from: [-2, 0], to: [-2, 5], color: 'gray' },
            { from: [2, 0], to: [2, 5], color: 'gray' },
            { from: [-2, 'b'], to: [2, 'b'], color: 'red', label: 'layer, area π·2²' },
            { from: [2.5, 'b'], to: [2.5, 5], color: 'purple', arrow: true, label: 'lift 5 − y' },
          ],
          hlines: [{ y: 5, label: 'top of tank (outlet), y = 5', color: 'gray', dashed: true }],
          sliders: [{ name: 'b', min: 0.05, max: 4.95, step: 0.05, value: 1.5, label: 'layer height $y$ (m)' }],
          readouts: [{ label: 'work per meter of layer thickness, $9800 \\cdot 4\\pi(5 - y) \\approx$', expr: '9800*4pi*(5 - b)', digits: 0 }],
          caption: 'Side view of a cylindrical tank (radius $2$ m, height $5$ m) full of water. Every layer has the same weight, but low layers must travel much farther to the top.',
        },
        {
          type: 'derivation',
          title: 'Pump all the water out over the top of the tank',
          steps: [
            { tex: 'A(y) = \\pi (2)^2 = 4\\pi', why: 'Every horizontal layer of a cylinder is a circle of radius $2$ m.' },
            { tex: '\\text{weight of layer} = 9800 \\cdot 4\\pi\\,dy = 39200\\pi\\,dy \\text{ N}', why: 'Volume $4\\pi\\,dy$ m³ times weight density $9800$ N/m³.' },
            { tex: 'D(y) = 5 - y', why: 'A layer at height $y$ is lifted to the top at $y = 5$.' },
            { tex: 'W = \\int_0^5 39200\\pi\\,(5 - y)\\,dy', why: 'Weight times distance, summed over all layers from the bottom ($y = 0$) to the surface ($y = 5$).' },
            { tex: '= 39200\\pi\\left[5y - \\frac{y^2}{2}\\right]_0^5 = 39200\\pi \\cdot \\frac{25}{2}', why: 'Antidifferentiate and evaluate: $25 - \\frac{25}{2} = \\frac{25}{2}$.' },
            { tex: '= 490000\\pi \\approx 1.54 \\times 10^6\\ \\text{J}', why: 'About $1.5$ megajoules — roughly what a $1$ kW pump delivers in $26$ minutes.' },
          ],
          result: '$W = 490000\\pi$ J.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'When the tank tapers',
          text: 'For a cone, a trough with triangular ends, or a sphere, the layer\'s width changes with $y$. Find it with similar triangles (cones, troughs) or the circle equation $x^2 + y^2 = r^2$ (spheres). Everything else in the recipe stays the same.',
        },
      ],
    },
    // 10
    {
      kind: 'numeric',
      prompt: 'A cylindrical tank of radius $1$ m and height $4$ m is full of water. Using $\\rho g = 9800$ N/m³, find the work to pump all the water out over the top. (An exact answer like `1000pi` or a decimal is fine.)',
      hint: 'Each layer has area $\\pi(1)^2 = \\pi$ and is lifted $4 - y$ meters. Integrate $9800\\pi(4 - y)$ from $0$ to $4$.',
      answer: '78400pi',
      answerTex: '78400\\pi \\approx 246{,}301',
      tolerance: 500,
      unit: 'J',
      label: '$W =$',
      explanation: '$W = \\int_0^4 9800\\pi(4 - y)\\,dy = 9800\\pi\\left[4y - \\frac{y^2}{2}\\right]_0^4 = 9800\\pi(16 - 8) = 78400\\pi \\approx 246{,}300$ J. Shortcut check: the water weighs $9800 \\cdot 4\\pi$ N and its center of mass (at height $2$ m) rises $2$ m, giving the same $78400\\pi$.',
    },
    // 11
    {
      kind: 'fill',
      prompt: 'A tank is an inverted cone (point at the bottom) with top radius $4$ m and height $10$ m. It holds water to a depth of $8$ m, and the water is pumped out over the top. Let $y$ be the height above the vertex.',
      template: 'A layer at height $y$ has radius ___ and is lifted a distance ___ , and the integral runs from $y = 0$ to $y =$ ___ .',
      blanks: [{ answers: ['$\\frac{2y}{5}$'] }, { answers: ['$10 - y$'] }, { answers: ['$8$'] }],
      wordBank: ['$\\frac{2y}{5}$', '$\\frac{5y}{2}$', '$10 - y$', '$8 - y$', '$8$', '$10$'],
      hint: 'Similar triangles: radius over height is $\\frac{4}{10}$ at every level. The outlet is at the top of the tank, not at the water surface.',
      explanation: 'By similar triangles $\\frac{r}{y} = \\frac{4}{10}$, so $r = \\frac{2y}{5}$. Every layer goes to the top of the tank, $y = 10$, so it travels $10 - y$ (not $8 - y$, which would stop at the water surface). There is only water from $y = 0$ to $y = 8$. So $W = \\int_0^8 9800\\pi\\left(\\frac{2y}{5}\\right)^2(10 - y)\\,dy = \\frac{3211264\\pi}{3} \\approx 3.36 \\times 10^6$ J.',
    },
    // 12
    {
      kind: 'order',
      prompt: 'Put the steps for solving a pumping problem in order.',
      lines: [
        'Draw the tank and choose a vertical coordinate $y$',
        'Find the area $A(y)$ of a thin horizontal layer at height $y$',
        'Multiply by the weight density and $dy$ to get the layer\'s weight',
        'Find the distance $D(y)$ the layer must be lifted to the outlet',
        'Integrate weight $\\times$ distance over the heights occupied by liquid',
      ],
      distractors: ['Multiply the total weight of the water by the height of the tank'],
      explanation: 'The coordinate system comes first, because $A(y)$ and $D(y)$ are both written in terms of it. Weight and distance are found for a single layer, and only then summed with an integral. The distractor treats all the water as if it rose the full height of the tank, which overcounts — the top layers barely move.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Center of mass and centroids',
      blocks: [
        {
          type: 'p',
          text: 'Integrals also find where an object *balances*. On a seesaw, a $20$ kg child $2$ m from the pivot balances a $40$ kg child $1$ m away, because the [[calc2-moment|moments]] $20 \\cdot 2$ and $40 \\cdot 1$ are equal. The balance point of several masses $m_i$ at positions $x_i$ is the mass-weighted average $\\bar x = \\frac{\\sum m_i x_i}{\\sum m_i}$.',
        },
        {
          type: 'p',
          text: 'For a thin rod lying along $[a, b]$ with density $\\rho(x)$ (kg per meter), a short piece has mass $\\rho(x)\\,dx$, so the sums become integrals.',
        },
        {
          type: 'theorem',
          name: 'Center of mass of a rod',
          tex: '\\bar x = \\frac{M_0}{m} = \\frac{\\int_a^b x\\,\\rho(x)\\,dx}{\\int_a^b \\rho(x)\\,dx}',
          text: '$m$ is the total mass and $M_0$ the moment about the origin.',
        },
        {
          type: 'p',
          text: 'For a flat plate of uniform density occupying the region under $y = f(x) \\ge 0$ on $[a, b]$, the balance point is the [[calc2-centroid]]. A vertical strip at $x$ has area $f(x)\\,dx$ and its own center at height $\\frac{f(x)}{2}$, which gives:',
        },
        {
          type: 'math',
          tex: '\\bar x = \\frac{1}{A}\\int_a^b x\\,f(x)\\,dx, \\qquad \\bar y = \\frac{1}{A}\\int_a^b \\frac12\\,[f(x)]^2\\,dx, \\qquad A = \\int_a^b f(x)\\,dx',
          caption: 'Each strip contributes its area times the coordinate of its own center.',
        },
        {
          type: 'derivation',
          title: 'Centroid of the region under $y = x^2$, $0 \\le x \\le 1$',
          steps: [
            { tex: 'A = \\int_0^1 x^2\\,dx = \\frac13', why: 'The total area — the "mass" of a uniform plate.' },
            { tex: '\\bar x = 3\\int_0^1 x \\cdot x^2\\,dx = 3 \\cdot \\frac14 = \\frac34', why: 'Dividing by $A = \\frac13$ means multiplying by $3$. The centroid sits right of the middle because the region is taller on the right.' },
            { tex: '\\bar y = 3\\int_0^1 \\frac12 x^4\\,dx = 3 \\cdot \\frac{1}{10} = \\frac{3}{10}', why: 'Each strip\'s center is at half its height, $\\frac{x^2}{2}$, and its area is $x^2\\,dx$.' },
          ],
          result: 'The centroid is $\\left(\\frac34, \\frac{3}{10}\\right)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rigid bodies in a physics engine',
          text: 'Every rigid body in Box2D, PhysX or Unity stores its center of mass: gravity acts there, and a free body spins about it. For a polygon collider the engine computes the centroid by splitting the shape into triangles and taking an area-weighted average of their centroids — the discrete version of the integrals above. Set it wrong and a car flips over at the first bump.',
        },
        {
          type: 'deepdive',
          title: 'Pappus\'s theorem: centroids meet volumes',
          blocks: [
            {
              type: 'p',
              text: 'Rotate a region of area $A$ about an axis that does not cut through it. The [[calc2-pappus-theorem|theorem of Pappus]] says the volume is $V = 2\\pi d A$, where $d$ is the distance from the centroid to the axis: the area times the distance its centroid travels.',
            },
            {
              type: 'p',
              text: 'Check it on our region. Rotating it about the $x$-axis, the centroid is $d = \\frac{3}{10}$ from the axis, so $V = 2\\pi \\cdot \\frac{3}{10} \\cdot \\frac13 = \\frac{\\pi}{5}$. The disk method gives $\\pi\\int_0^1 x^4\\,dx = \\frac{\\pi}{5}$. ✓ (In fact the formula $\\bar y = \\frac1A\\int \\frac12 f^2\\,dx$ is the disk method in disguise.)',
            },
          ],
        },
      ],
    },
    // 14
    {
      kind: 'numeric',
      prompt: 'A rod lies along $0 \\le x \\le 4$ (meters) with density $\\rho(x) = 1 + x$ kg/m, so it is heavier toward the right. Find its center of mass $\\bar x$.',
      hint: 'Mass: $\\int_0^4 (1 + x)\\,dx$. Moment: $\\int_0^4 x(1 + x)\\,dx$. Divide.',
      answer: '22/9',
      answerTex: '\\frac{22}{9} \\approx 2.44',
      label: '$\\bar x =$',
      unit: 'm',
      explanation: 'Mass $m = \\left[x + \\frac{x^2}{2}\\right]_0^4 = 4 + 8 = 12$ kg. Moment $M_0 = \\int_0^4 (x + x^2)\\,dx = \\left[\\frac{x^2}{2} + \\frac{x^3}{3}\\right]_0^4 = 8 + \\frac{64}{3} = \\frac{88}{3}$. So $\\bar x = \\frac{88/3}{12} = \\frac{88}{36} = \\frac{22}{9} \\approx 2.44$ m — to the right of the midpoint $2$, as it should be for a rod that is heavier on the right.',
    },
    // 15
    {
      kind: 'mcq',
      prompt: 'Find $\\bar x$ for the centroid of the triangle under $y = x$, $0 \\le x \\le 3$.',
      hint: '$A = \\frac92$. Compute $\\frac1A\\int_0^3 x \\cdot x\\,dx$.',
      options: [
        { text: '$\\dfrac32$', why: 'That is the midpoint of $[0, 3]$. It would be right for a rectangle, but this triangle has more area on the right.' },
        { text: '$9$', why: 'That is the moment $\\int_0^3 x^2\\,dx = 9$ before dividing by the area. A centroid must lie inside the region.' },
        { text: '$2$', correct: true, why: '$\\bar x = \\frac{1}{9/2}\\int_0^3 x^2\\,dx = \\frac29 \\cdot 9 = 2$.' },
        { text: '$1$', why: 'This is one third of the way from the left — the correct rule measured from the wrong end. The centroid is one third of the way from the *tall* side, at $x = 3 - 1 = 2$.' },
      ],
      explanation: '$A = \\frac12 \\cdot 3 \\cdot 3 = \\frac92$ and $\\int_0^3 x \\cdot x\\,dx = 9$, so $\\bar x = 9 \\div \\frac92 = 2$. This matches the geometry fact that a triangle\'s centroid is the average of its vertices: $\\frac{0 + 3 + 3}{3} = 2$.',
    },
  ],
  takeaways: [
    'Work by a variable force is $W = \\int_a^b F(x)\\,dx$ — the area under the force–position graph.',
    'Hooke\'s law $F = kx$ measures $x$ from the natural length; stretching from $0$ to $x$ costs $\\frac12 kx^2$.',
    'When different parts of an object move different distances (cables, liquids), slice the object: work $= \\int$ (weight of slice) $\\times$ (distance it moves).',
    'Pumping: $W = \\int \\rho g\\,A(y)\\,D(y)\\,dy$ over the heights that contain liquid, with $D(y)$ measured to the outlet.',
    'Center of mass is moment divided by mass, $\\bar x = \\frac{\\int x\\rho\\,dx}{\\int \\rho\\,dx}$; for a uniform region it is the centroid.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 6.5 Physical Applications',
      url: 'https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications',
      source: 'openstax',
      note: 'Mass from density, springs, pumping and hydrostatic force, all with worked examples.',
    },
    {
      title: 'OpenStax Calculus Volume 1 — 6.6 Moments and Centers of Mass',
      url: 'https://openstax.org/books/calculus-volume-1/pages/6-6-moments-and-centers-of-mass',
      source: 'openstax',
      note: 'Centroids of regions between curves and a full statement of the theorem of Pappus.',
    },
    {
      title: "Paul's Online Notes — Work",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/Work.aspx',
      source: 'paul',
      note: 'Short, exam-style work problems with springs, cables and tanks.',
    },
  ],
};
