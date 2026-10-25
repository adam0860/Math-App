import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-optimization',
  title: 'Optimization Problems',
  summary: 'Turn "the biggest", "the cheapest" or "the shortest" into a function, then use derivatives to find the best design — fences, boxes, cans and light paths.',
  minutes: 19,
  objectives: [
    'Translate a word problem into an objective function, a constraint and a domain',
    'Use the constraint to reduce the objective to a function of one variable',
    'Find absolute extrema with the closed interval method, or justify them on open intervals',
    'Solve classic fence, box, can and shortest-path problems and interpret the answer',
    'Explain how numerical methods like gradient ascent solve the same problems in code',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'From "best" to a function: the recipe',
      blocks: [
        {
          type: 'p',
          text: '[[optimization|Optimization]] means choosing the best option from a continuum of possibilities: the largest area for a given amount of fence, the least metal for a can of fixed volume, the quickest path for a ray of light. You already have the engine — [[absolute-extremum|absolute extrema]] and the [[closed-interval-method]]. The new skill is *modelling*: turning a paragraph of English into a function you can differentiate.',
        },
        {
          type: 'steps',
          items: [
            { title: '1. Understand and draw', text: 'Read the problem twice. What is being maximized or minimized? What is fixed? Draw a picture and label it.' },
            { title: '2. Name the variables', text: 'Give every changing quantity a letter, with units.' },
            { title: '3. Write the objective', text: 'Express the quantity to optimize — the [[objective-function]] — in terms of your variables.' },
            { title: '4. Use the constraint', text: 'A [[optimization-constraint|constraint]] (fixed perimeter, fixed volume…) links the variables. Solve it for one variable and substitute, so the objective depends on a **single** variable.' },
            { title: '5. Find the domain', text: 'Which values make physical sense? Lengths are $\\ge 0$, cuts cannot exceed the sheet, and so on.' },
            { title: '6. Optimize', text: 'Find critical numbers. On a closed interval, compare the objective at the critical numbers and endpoints. On an open interval, justify that your critical number gives the absolute extremum.' },
            { title: '7. Answer the question', text: 'Re-read what was asked (the dimensions? the maximum area?) and answer it in a sentence with units.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the closed interval method is airtight',
          text: 'The [[extreme-value-theorem]] guarantees that a continuous function on a closed interval $[a, b]$ *has* an absolute max and min, and Fermat\'s theorem says an interior extremum can only occur at a critical number. So the winner is on a short, finite list: the critical numbers and the two endpoints. Evaluate them all and pick the best — no guesswork.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Optimization everywhere in games and CS',
          text: 'An AI choosing the launch angle that lands a grenade closest to the player, a physics engine finding the time of closest approach between two objects, a level generator maximizing open space, a neural network minimizing its loss: all optimization. Calculus gives exact answers when the model is simple; numerical methods (end of this lesson) take over when it is not.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Fences: the warm-up',
      blocks: [
        {
          type: 'p',
          text: '**Problem.** A farmer has $240$ m of fencing to enclose a rectangular field along a straight river. No fence is needed along the river. What dimensions give the largest area?',
        },
        {
          type: 'p',
          text: 'Let $x$ be the length of each of the two sides perpendicular to the river and $y$ the length of the side parallel to it (all in metres). The objective is the area $A = xy$; the constraint is the fence length $2x + y = 240$.',
        },
        {
          type: 'derivation',
          title: 'Maximize the fenced area',
          steps: [
            { tex: 'y = 240 - 2x', why: 'Solve the constraint for $y$ — it appears only once, so this is the easy variable to eliminate.' },
            { tex: 'A(x) = x(240 - 2x) = 240x - 2x^2', why: 'Substitute into $A = xy$. Now the area depends on $x$ alone.' },
            { tex: '0 \\le x \\le 120', why: 'Domain: $x \\ge 0$, and $y = 240 - 2x \\ge 0$ forces $x \\le 120$. A closed interval, so the closed interval method applies.' },
            { tex: "A'(x) = 240 - 4x = 0 \\implies x = 60", why: 'The only critical number.' },
            { tex: 'A(0) = 0, \\quad A(60) = 60 \\cdot 120 = 7200, \\quad A(120) = 0', why: 'Compare the critical number with both endpoints.' },
          ],
          result: 'The best field is $60$ m (perpendicular to the river) by $y = 240 - 120 = 120$ m (along the river), with area $7200 \\text{ m}^2$.',
        },
        {
          type: 'graph',
          x: [0, 125],
          y: [0, 8000],
          xStep: 20,
          yStep: 1000,
          functions: [{ expr: '240x - 2x^2', label: '$A(x) = 240x - 2x^2$', domain: [0, 120] }],
          points: [{ x: 60, y: 7200, label: 'max (60, 7200)', color: 'red' }],
          caption: 'The area function is a downward parabola on $[0, 120]$; the endpoints are degenerate "fields" with zero area.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sanity-check the shape',
          text: 'The optimal field is twice as long as it is wide. That makes sense: the river is a free side, so you lean the design toward it. If your answer were a field with $x = 110$ and $y = 20$, the picture would tell you something went wrong before any algebra does.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A rancher has $600$ m of fencing to build a rectangular pen divided into two equal pens by one extra fence parallel to two of the sides. What is the largest total area she can enclose?',
      hint: 'If $x$ is the length of the three parallel pieces and $y$ the length of the other two sides, the constraint is $3x + 2y = 600$.',
      label: '$A_{\\max} =$',
      unit: 'm²',
      answer: '15000',
      explanation: 'Constraint: $3x + 2y = 600$, so $y = \\frac{600 - 3x}{2}$, with $0 \\le x \\le 200$. Objective: $A(x) = x \\cdot \\frac{600 - 3x}{2} = 300x - \\frac{3}{2}x^2$. Then $A\'(x) = 300 - 3x = 0$ gives $x = 100$, so $y = 150$ and $A = 100 \\cdot 150 = 15\\,000 \\text{ m}^2$. The endpoints give $A = 0$, so this is the maximum.',
    },
    {
      kind: 'concept',
      title: 'Boxes: an interactive design problem',
      blocks: [
        {
          type: 'p',
          text: '**Problem.** From a $12 \\times 12$ inch square of cardboard, cut equal squares of side $x$ from each corner and fold up the flaps to make an open-top box. What cut size gives the largest volume?',
        },
        {
          type: 'p',
          text: 'Cut too little and the box is a flat tray; cut too much and it is a tall, skinny chimney with almost no base. Somewhere in between is the best box. Drag the slider to see the trade-off on the sheet itself.',
        },
        {
          type: 'graph',
          x: [-1, 13],
          y: [-1, 13],
          equal: true,
          height: 280,
          areas: [
            { expr: 'c', from: 0, to: 'c', color: 'red' },
            { expr: 'c', from: '12 - c', to: 12, color: 'red' },
            { expr: '12', expr2: '12 - c', from: 0, to: 'c', color: 'red' },
            { expr: '12', expr2: '12 - c', from: '12 - c', to: 12, color: 'red' },
          ],
          segments: [
            { from: [0, 0], to: [12, 0], color: 'gray' },
            { from: [12, 0], to: [12, 12], color: 'gray' },
            { from: [12, 12], to: [0, 12], color: 'gray' },
            { from: [0, 12], to: [0, 0], color: 'gray' },
            { from: ['c', 'c'], to: ['12 - c', 'c'], dashed: true, color: 'blue' },
            { from: ['12 - c', 'c'], to: ['12 - c', '12 - c'], dashed: true, color: 'blue' },
            { from: ['12 - c', '12 - c'], to: ['c', '12 - c'], dashed: true, color: 'blue' },
            { from: ['c', '12 - c'], to: ['c', 'c'], dashed: true, color: 'blue' },
          ],
          sliders: [{ name: 'c', min: 0, max: 6, step: 0.05, value: 1, label: 'cut size $x$' }],
          readouts: [
            { label: 'base side $12 - 2x =$', expr: '12 - 2c', digits: 2 },
            { label: 'volume $=$', expr: 'c(12 - 2c)^2', digits: 2 },
          ],
          caption: 'Red corners are cut away; the dashed blue square is the base, and the flaps fold up along it to height $x$.',
        },
        {
          type: 'derivation',
          title: 'Maximize $V(x) = x(12 - 2x)^2$',
          steps: [
            { tex: 'V(x) = x(12 - 2x)^2, \\quad 0 \\le x \\le 6', why: 'Height $x$ times a square base of side $12 - 2x$. The base side cannot be negative, so $x \\le 6$.' },
            { tex: "V'(x) = (12 - 2x)^2 + x \\cdot 2(12 - 2x)(-2)", why: 'Product rule, with the chain rule on $(12 - 2x)^2$ (inner derivative $-2$).' },
            { tex: '= (12 - 2x)\\big[(12 - 2x) - 4x\\big] = (12 - 2x)(12 - 6x)', why: 'Factor out the common $(12 - 2x)$ instead of expanding — factored form makes the zeros visible.' },
            { tex: "V'(x) = 0 \\implies x = 2 \\text{ or } x = 6", why: 'Set each factor to zero.' },
            { tex: 'V(0) = 0, \\quad V(2) = 2 \\cdot 8^2 = 128, \\quad V(6) = 0', why: 'Closed interval method: $x = 6$ is both a critical number and an endpoint, and it gives no box at all.' },
          ],
          result: 'Cut $2$-inch squares: the box is $8 \\times 8 \\times 2$ inches with volume $128 \\text{ in}^3$.',
        },
        {
          type: 'graph',
          x: [0, 6.2],
          y: [0, 140],
          yStep: 20,
          functions: [{ expr: 'x(12 - 2x)^2', label: '$V(x) = x(12 - 2x)^2$', domain: [0, 6] }],
          points: [
            { x: 'c', y: 'c(12 - 2c)^2', label: 'your box', color: 'orange' },
            { x: 2, y: 128, label: 'max (2, 128)', color: 'red' },
          ],
          vlines: [{ x: 'c', color: 'orange' }],
          sliders: [{ name: 'c', min: 0, max: 6, step: 0.05, value: 1, label: 'cut size $x$' }],
          readouts: [
            { label: '$V(x) =$', expr: 'c(12 - 2c)^2', digits: 2 },
            { label: "$V'(x) =$", expr: '(12 - 2c)(12 - 6c)', digits: 2 },
          ],
          caption: 'The orange point is your design. Left of $x = 2$, $V\' > 0$ (cutting more helps); right of it, $V\' < 0$. At the top, $V\'(2) = 0$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Not every critical number is an answer',
          text: '$x = 6$ solves $V\'(x) = 0$, but it cuts the sheet into four corner squares and leaves no base. Critical numbers are only *candidates*; the comparison step (or the physical picture) decides. And a critical number outside the domain must be thrown out entirely.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'An open-top box is made from a $10 \\times 16$ inch sheet by cutting squares of side $x$ from each corner and folding up the sides. Write the volume $V(x)$.',
      hint: 'Each dimension of the sheet loses $2x$ (one square at each end). The height is $x$.',
      label: '$V(x) =$',
      answer: 'x(10 - 2x)(16 - 2x)',
      answerTex: 'x(10 - 2x)(16 - 2x) = 4x^3 - 52x^2 + 160x',
      domain: [0, 5],
      explanation: 'The base is $(10 - 2x)$ by $(16 - 2x)$ because each side loses a square of width $x$ at both ends, and the folded flaps make the height $x$. So $V(x) = x(10 - 2x)(16 - 2x)$ for $0 \\le x \\le 5$ (the short side runs out first). Expanded, $V(x) = 4x^3 - 52x^2 + 160x$.',
    },
    {
      kind: 'numeric',
      prompt: 'Now maximize it: what is the largest possible volume of the box made from the $10 \\times 16$ sheet?',
      hint: '$V\'(x) = 12x^2 - 104x + 160$. Factor out $4$, then factor the quadratic. Which root lies in $[0, 5]$?',
      label: '$V_{\\max} =$',
      unit: 'in³',
      answer: '144',
      explanation: '$V\'(x) = 12x^2 - 104x + 160 = 4(3x^2 - 26x + 40) = 4(3x - 20)(x - 2)$, so $x = 2$ or $x = \\frac{20}{3}$. But $\\frac{20}{3} \\approx 6.67$ is outside $[0, 5]$, so discard it. Compare: $V(0) = V(5) = 0$ and $V(2) = 2 \\cdot 6 \\cdot 12 = 144$. The best box is $6 \\times 12 \\times 2$ inches, with volume $144 \\text{ in}^3$.',
    },
    {
      kind: 'concept',
      title: 'Cans: optimizing on an open interval',
      blocks: [
        {
          type: 'p',
          text: '**Problem.** A cylindrical can must hold $1000 \\text{ cm}^3$ (one litre). What radius $r$ and height $h$ use the least metal, i.e. minimize the surface area?',
        },
        {
          type: 'p',
          text: 'The surface is two discs plus a rolled-up rectangle: $S = 2\\pi r^2 + 2\\pi r h$. The constraint is the volume, $\\pi r^2 h = 1000$. This time there is no natural upper bound on $r$ — a very wide, flat can is allowed — so the domain is the **open** interval $(0, \\infty)$ and the closed interval method does not apply directly.',
        },
        {
          type: 'derivation',
          title: 'Minimize the surface area',
          steps: [
            { tex: 'h = \\frac{1000}{\\pi r^2}', why: 'Solve the volume constraint for $h$.' },
            { tex: 'S(r) = 2\\pi r^2 + 2\\pi r \\cdot \\frac{1000}{\\pi r^2} = 2\\pi r^2 + \\frac{2000}{r}, \\quad r > 0', why: 'Substitute; the $\\pi$ and one $r$ cancel in the second term.' },
            { tex: "S'(r) = 4\\pi r - \\frac{2000}{r^2} = 0", why: 'Differentiate: $\\frac{d}{dr}\\frac{2000}{r} = -\\frac{2000}{r^2}$.' },
            { tex: '4\\pi r^3 = 2000 \\implies r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5.42 \\text{ cm}', why: 'Multiply both sides by $r^2$ (allowed since $r > 0$) and solve.' },
            { tex: "S''(r) = 4\\pi + \\frac{4000}{r^3} > 0 \\text{ for all } r > 0", why: '$S$ is concave up on its whole domain, so the curve can only bend upward away from its one critical point: that point is the **absolute** minimum.' },
            { tex: 'h = \\frac{1000}{\\pi r^2} = \\frac{2 \\cdot \\pi r^3}{\\pi r^2} = 2r \\approx 10.84 \\text{ cm}', why: 'From the critical equation, $\\pi r^3 = 500$, so $1000 = 2\\pi r^3$. Substituting shows the height equals the diameter.' },
          ],
          result: 'The cheapest litre can has $r \\approx 5.42$ cm and $h = 2r \\approx 10.84$ cm, using about $554 \\text{ cm}^2$ of metal.',
        },
        {
          type: 'graph',
          x: [0, 14],
          y: [0, 1600],
          xStep: 2,
          yStep: 200,
          functions: [{ expr: '2pi*x^2 + 2000/x', label: '$S(r) = 2\\pi r^2 + \\frac{2000}{r}$' }],
          points: [{ x: 'cbrt(500/pi)', y: '2pi*cbrt(500/pi)^2 + 2000/cbrt(500/pi)', label: 'min ≈ (5.42, 553.6)', color: 'red' }],
          caption: 'Thin cans (small $r$) waste metal on the tall side; flat cans (large $r$) waste it on the lids. The single valley is the global minimum.',
        },
        {
          type: 'theorem',
          name: 'One critical number on an interval',
          text: 'If $f$ is continuous on an interval (open or closed, bounded or not) and has exactly one critical number $c$ there, then a local minimum at $c$ is the absolute minimum on the interval, and a local maximum at $c$ is the absolute maximum.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one critical number is enough',
          text: 'Suppose $f$ has a local min at $c$ but some other point $d$ is lower. Going from $c$ to $d$, the function must first rise (local min) and then come back down below $f(c)$, so somewhere in between it turns around — a local max, hence another critical number. With only one critical number that cannot happen.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'So why are real cans taller?',
          text: 'Soda cans are not $h = 2r$ because metal is not the only cost: thicker lids, seams, stacking, how the can feels in a hand and fits in a machine all enter the real objective function. A model is only as good as what you put in it.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If a differentiable function on an open interval has a local minimum at $c$, then $f(c)$ must be the absolute minimum on that interval.',
      answer: false,
      explanation: 'A local minimum only beats its neighbours. $f(x) = x^3 - 3x$ on $(-\\infty, \\infty)$ has a local minimum at $x = 1$ ($f(1) = -2$), but $f(x) \\to -\\infty$ as $x \\to -\\infty$, so there is no absolute minimum at all. The statement becomes true with an extra hypothesis — for example, $c$ is the *only* critical number, or $f\'\' > 0$ on the whole interval (as with the can).',
    },
    {
      kind: 'concept',
      title: 'Shortest paths and the law of reflection',
      blocks: [
        {
          type: 'p',
          text: '**Problem.** A light ray travels from $A = (0, 3)$ to a mirror along the $x$-axis, then to $B = (8, 5)$. Light takes the shortest path. Where on the mirror, $P = (x, 0)$, does it bounce?',
        },
        {
          type: 'graph',
          x: [-1, 9],
          y: [-6, 6],
          equal: true,
          height: 320,
          segments: [
            { from: [-1, 0], to: [9, 0], color: 'gray' },
            { from: [0, 3], to: ['p', 0], color: 'blue', arrow: true },
            { from: ['p', 0], to: [8, 5], color: 'blue', arrow: true },
            { from: ['p', 0], to: [8, -5], color: 'purple', dashed: true },
          ],
          points: [
            { x: 0, y: 3, label: 'A' },
            { x: 8, y: 5, label: 'B' },
            { x: 8, y: -5, label: "B' (mirror image)", color: 'purple' },
            { x: 'p', y: 0, label: 'P', color: 'orange' },
          ],
          sliders: [{ name: 'p', min: 0, max: 8, step: 0.05, value: 1, label: 'bounce point $x$' }],
          readouts: [
            { label: 'path length $L(x) =$', expr: 'sqrt(p^2 + 9) + sqrt((8 - p)^2 + 25)', digits: 3 },
            { label: 'best possible $8\\sqrt{2} \\approx$', expr: '8sqrt(2)', digits: 3 },
          ],
          caption: 'Slide $P$ and watch the length. It is smallest when the purple dashed path to the mirror image $B\'$ is a straight continuation of $AP$.',
        },
        {
          type: 'derivation',
          title: 'Minimize $L(x) = \\sqrt{x^2 + 9} + \\sqrt{(8 - x)^2 + 25}$',
          steps: [
            { tex: 'L(x) = |AP| + |PB|, \\quad 0 \\le x \\le 8', why: 'Each piece is a [[distance-formula|distance]]: $A$ to $(x, 0)$ and $(x, 0)$ to $B$. Bouncing outside $[0, 8]$ only makes both pieces longer.' },
            { tex: "L'(x) = \\frac{x}{\\sqrt{x^2 + 9}} - \\frac{8 - x}{\\sqrt{(8 - x)^2 + 25}}", why: 'Chain rule on each square root; the inner derivative of $(8 - x)^2$ is $-2(8 - x)$.' },
            { tex: '\\frac{x}{\\sqrt{x^2 + 9}} = \\frac{8 - x}{\\sqrt{(8 - x)^2 + 25}}', why: 'Set $L\' = 0$. Each side is the cosine of the angle between a ray and the mirror, so the two angles are equal.' },
            { tex: '\\frac{3}{x} = \\frac{5}{8 - x} \\implies 24 - 3x = 5x \\implies x = 3', why: 'Equal angles mean equal tangents (rise over run) in the two right triangles. Cross-multiply and solve.' },
            { tex: 'L(3) = \\sqrt{18} + \\sqrt{50} = 3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2} \\approx 11.31', why: 'Compare with the endpoints: $L(0) = 3 + \\sqrt{89} \\approx 12.43$ and $L(8) = \\sqrt{73} + 5 \\approx 13.54$. The critical number wins.' },
          ],
          result: 'The ray bounces at $(3, 0)$, and the angle of incidence equals the angle of reflection — the law of reflection, *derived* from "take the shortest path".',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Distance problems: minimize the square',
          text: 'To find the point on a curve closest to a given point, minimize $D^2$ instead of $D$. Since $\\sqrt{\\;}$ is increasing, $D$ and $D^2$ are smallest at the same place, and $D^2$ has no square root to differentiate. Just remember to take the square root at the end if the question asks for the distance.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Reflection in graphics',
          text: 'Every mirror, shiny floor and bouncing laser in a game uses the law you just derived: a renderer reflects a direction $\\vec d$ about the surface normal $\\vec n$ with `reflect(d, n) = d - 2 * dot(d, n) * n`, which builds in "angle in = angle out". Fermat\'s principle of least time sits underneath all of ray optics.',
        },
        {
          type: 'deepdive',
          title: 'The lifeguard problem and Snell\'s law',
          blocks: [
            {
              type: 'p',
              text: 'A lifeguard runs at speed $v_1$ on sand and swims at speed $v_2$ in water. To reach a swimmer fastest, she should not run straight at them; the optimal entry point minimizes the **time** $T = \\frac{\\text{sand distance}}{v_1} + \\frac{\\text{water distance}}{v_2}$. Setting $T\'(x) = 0$ gives',
            },
            { type: 'math', tex: '\\frac{\\sin \\theta_1}{v_1} = \\frac{\\sin \\theta_2}{v_2}', caption: 'Angles measured from the normal to the shoreline.' },
            {
              type: 'p',
              text: 'This is exactly Snell\'s law of refraction: light bends entering water because it is "choosing" the fastest path through two media of different speeds.',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the shortest distance from the point $(3, 0)$ to the curve $y = \\sqrt{x}$.',
      hint: 'A point on the curve is $(x, \\sqrt{x})$. Minimize $D^2 = (x - 3)^2 + (\\sqrt{x})^2$ for $x \\ge 0$.',
      label: '$D_{\\min} =$',
      answer: 'sqrt(11)/2',
      answerTex: '\\frac{\\sqrt{11}}{2} \\approx 1.658',
      explanation: '$D^2 = (x - 3)^2 + x = x^2 - 5x + 9$. Its derivative $2x - 5$ is zero at $x = \\frac{5}{2}$, and $D^2$ is an upward parabola, so this is the minimum (the endpoint $x = 0$ gives $D = 3$, which is larger). Then $D^2 = \\frac{25}{4} - \\frac{25}{2} + 9 = \\frac{11}{4}$, so $D = \\frac{\\sqrt{11}}{2} \\approx 1.658$, at the point $\\left(\\frac52, \\sqrt{\\frac52}\\right)$. Don\'t forget the final square root!',
    },
    {
      kind: 'concept',
      title: 'When algebra fails: let the computer climb',
      blocks: [
        {
          type: 'p',
          text: 'Real objective functions — the drag on a car body, the score of a game-playing AI, the error of a neural network with millions of parameters — rarely let you solve $f\'(x) = 0$ by hand. But the derivative still tells you which way is uphill. **Gradient ascent** just keeps stepping that way:',
        },
        {
          type: 'math',
          tex: 'x_{k+1} = x_k + \\eta\\, f\'(x_k)',
          caption: '$\\eta$ (eta) is the step size. If $f\' > 0$ move right, if $f\' < 0$ move left; the steps shrink automatically as $f\' \\to 0$ near the peak. (Minimizing uses $-\\eta f\'$: gradient *descent*.)',
        },
        {
          type: 'code',
          title: 'climb.cpp',
          runnable: true,
          code: `#include <cstdio>

// Volume of the open box cut from a 12 x 12 sheet, and its derivative.
double V(double x) { return x * (12 - 2 * x) * (12 - 2 * x); }
double dV(double x) { return (12 - 2 * x) * (12 - 6 * x); }

int main() {
    double x = 0.5;            // initial guess for the cut size
    const double rate = 0.01;  // step size ("learning rate")
    for (int k = 0; k <= 6; ++k) {
        std::printf("step %d: x = %.6f  V = %.6f\\n", k, x, V(x));
        x += rate * dV(x);     // move uphill: V'(x) > 0 means go right
    }
}`,
          output: `step 0: x = 0.500000  V = 60.500000
step 1: x = 1.490000  V = 121.226996
step 2: x = 1.766012  V = 126.634747
step 3: x = 1.884896  V = 127.675927
step 4: x = 1.941736  V = 127.917736
step 5: x = 1.970110  V = 127.978451
step 6: x = 1.984564  V = 127.994267`,
          annotations: [
            { lines: '4-5', text: 'The objective $V(x)$ and the derivative we factored by hand, $V\'(x) = (12 - 2x)(12 - 6x)$.' },
            { lines: 9, text: 'The step size: too large and the iterates overshoot the peak, too small and convergence crawls.' },
            { lines: 12, text: 'The whole algorithm: nudge $x$ in the direction the derivative points.' },
          ],
        },
        {
          type: 'p',
          text: 'The iterates close in on the exact answer $x = 2$, $V = 128$ that calculus gave us. This is the same idea that trains neural networks (with many variables at once) and tunes game parameters automatically.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Local is not global',
          text: 'Gradient methods find a *local* extremum near the starting guess. The box volume has a single hill on $[0, 6]$, so any start in $[0, 6)$ ends up at $x = 2$ (even from $x = 5.9$, where $V\' < 0$ pushes the guess left). But on a function with several peaks, the method happily stops on a small one. Exact calculus plus the closed interval method guarantees the global answer; numerical methods trade that guarantee for generality.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'An open-top box with a square base must hold $32\\,000 \\text{ cm}^3$. Put the solution for the least material in order.',
      lines: [
        'Variables: base side $x$, height $h$ (cm)',
        'Constraint: $x^2 h = 32\\,000$, so $h = \\dfrac{32\\,000}{x^2}$',
        'Objective: $S(x) = x^2 + 4xh = x^2 + \\dfrac{128\\,000}{x}$, with $x > 0$',
        '$S\'(x) = 2x - \\dfrac{128\\,000}{x^2} = 0 \\implies x^3 = 64\\,000 \\implies x = 40$',
        '$S\'\'(x) = 2 + \\dfrac{256\\,000}{x^3} > 0$, so $x = 40$ is the absolute minimum',
        'Answer: base $40 \\times 40$ cm, height $20$ cm',
      ],
      explanation: 'The recipe in action: name variables, use the volume constraint to eliminate $h$, write the surface area (one base, four sides of area $xh$) as a function of $x$ alone, find the critical number, justify it is the global minimum on the open interval $(0, \\infty)$ (concave up everywhere), and answer with all dimensions: $h = \\frac{32\\,000}{1600} = 20$ cm. The material used is $S(40) = 1600 + 3200 = 4800 \\text{ cm}^2$.',
    },
    {
      kind: 'error',
      prompt: 'A $10$ m wire is cut into two pieces: one (length $x$) is bent into a square, the other into a circle. A student tries to **maximize** the total enclosed area. Tap the first wrong line.',
      lines: [
        '$A(x) = \\left(\\dfrac{x}{4}\\right)^2 + \\dfrac{(10 - x)^2}{4\\pi}$, for $0 \\le x \\le 10$',
        '$A\'(x) = \\dfrac{x}{8} - \\dfrac{10 - x}{2\\pi}$',
        '$A\'(x) = 0 \\implies x = \\dfrac{40}{\\pi + 4} \\approx 5.60$',
        'There is only one critical number, so the maximum area occurs at $x \\approx 5.60$.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct (a circle with circumference $C$ has area $\\frac{C^2}{4\\pi}$). Line 4 skips the comparison step: $A\'\'(x) = \\frac18 + \\frac{1}{2\\pi} > 0$, so the critical number is a **minimum** ($A \\approx 3.50 \\text{ m}^2$). On a closed interval, check the endpoints: $A(0) = \\frac{25}{\\pi} \\approx 7.96$ and $A(10) = 6.25$. The maximum is $\\frac{25}{\\pi} \\text{ m}^2$, at $x = 0$: don\'t cut at all — bend the whole wire into a circle.',
    },
    {
      kind: 'mcq',
      prompt: 'For a closed cylindrical can of **any** fixed volume $V$, the surface area $S = 2\\pi r^2 + 2\\pi r h$ is minimized when',
      options: [
        { text: '$h = r$', why: 'Check with the critical equation: $S(r) = 2\\pi r^2 + \\frac{2V}{r}$ gives $V = 2\\pi r^3$, so $h = \\frac{V}{\\pi r^2} = 2r$, not $r$.' },
        { text: '$h = 2r$', correct: true, why: '$S\'(r) = 4\\pi r - \\frac{2V}{r^2} = 0$ gives $V = 2\\pi r^3$. Since $V = \\pi r^2 h$, this means $h = 2r$: height equals diameter.' },
        { text: '$h = \\pi r$', why: '$\\pi$ cancels in the optimal ratio; the result is a pure number.' },
        { text: 'It depends on $V$', why: 'The *size* of the optimal can depends on $V$, but the *shape* (the ratio $h/r$) does not: it is always $2$.' },
      ],
      explanation: 'Redo the litre-can computation with a general $V$: $h = \\frac{V}{\\pi r^2}$, so $S(r) = 2\\pi r^2 + \\frac{2V}{r}$ and $S\'(r) = 4\\pi r - \\frac{2V}{r^2}$. Setting it to zero gives $V = 2\\pi r^3$, and comparing with $V = \\pi r^2 h$ gives $h = 2r$. Since $S\'\' = 4\\pi + \\frac{4V}{r^3} > 0$, it is the absolute minimum. Scale-free results like this are a sign the model captures something real about the geometry.',
    },
  ],
  takeaways: [
    'Recipe: draw and name variables, write the objective, use the constraint to reduce to one variable, find the domain, optimize, answer the actual question with units.',
    'On a closed interval, compare the objective at critical numbers **and** endpoints; critical numbers outside the domain are discarded.',
    'On an open interval, justify a global extremum: a single critical number, or a second derivative with one sign on the whole interval.',
    'Classic results: fence along a river is twice as long as wide; a can of fixed volume has $h = 2r$; shortest bounce paths obey angle in $=$ angle out. For distances, minimize $D^2$.',
    'When the algebra is hopeless, gradient ascent/descent $x \\leftarrow x \\pm \\eta f\'(x)$ climbs toward a local optimum numerically — the same idea that trains neural networks.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.7 Applied Optimization Problems',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems',
      source: 'openstax',
      note: 'Box, fence and distance problems with the same step-by-step strategy used here.',
    },
    {
      title: "Paul's Online Notes — Optimization",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/Optimization.aspx',
      source: 'paul',
      note: 'Careful discussion of how to justify that an answer is the absolute extremum, with many examples.',
    },
    {
      title: 'Wikipedia — Gradient descent',
      url: 'https://en.wikipedia.org/wiki/Gradient_descent',
      source: 'wikipedia',
      note: 'The numerical method from the last card, generalized to many variables, as used in machine learning.',
    },
  ],
};
