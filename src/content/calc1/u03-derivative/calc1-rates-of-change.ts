import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-rates-of-change',
  title: 'Rates of Change: Velocity and Beyond',
  summary: 'The derivative as a rate: velocity and acceleration, units and interpretation, rates across the sciences, and velocity measured frame by frame in a game.',
  minutes: 17,
  objectives: [
    'Interpret a derivative as an instantaneous rate of change, with correct units',
    'Find velocity, speed and acceleration from a position function',
    'Decide when an object moves left or right and when it speeds up or slows down',
    'Distinguish displacement from total distance traveled',
    'Estimate velocity from sampled positions with forward and central differences',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A derivative is a rate, and rates have units',
      blocks: [
        {
          type: 'p',
          text: 'So far $f\'(a)$ has been a slope. The same number has a second life as a **rate**: if $y = f(x)$, then $f\'(a)$ tells you how fast $y$ is changing per unit change in $x$, at the instant $x = a$. That is the [[instantaneous-rate-of-change]].',
        },
        {
          type: 'table',
          headers: ['Rate', 'Formula', 'Meaning'],
          rows: [
            ['[[average-rate-of-change|Average rate]]', '$\\dfrac{f(b) - f(a)}{b - a}$', 'change in $y$ per unit of $x$ over the interval $[a, b]$'],
            ['Instantaneous rate', '$f\'(a) = \\lim\\limits_{h \\to 0}\\dfrac{f(a + h) - f(a)}{h}$', 'change in $y$ per unit of $x$ at the instant $x = a$'],
          ],
        },
        {
          type: 'p',
          text: 'Because the difference quotient divides a change in $y$ by a change in $x$, the **units of $f\'$ are (units of $y$) per (unit of $x$)**. If $V(t)$ is litres of water in a tank and $t$ is in minutes, $V\'(t)$ is in litres per minute.',
        },
        {
          type: 'derivation',
          title: 'A draining tank: $V(t) = 1000 - 40t + 0.4t^2$ litres, $0 \\le t \\le 50$ minutes',
          steps: [
            { tex: '\\frac{V(10) - V(0)}{10 - 0} = \\frac{640 - 1000}{10} = -36 \\ \\text{L/min}', why: 'Average rate over the first $10$ minutes. $V(10) = 1000 - 400 + 40 = 640$.' },
            { tex: "V'(t) = 0 - 40 + 0.4(2t) = -40 + 0.8t", why: 'Differentiate term by term: a constant has derivative $0$, $\\frac{d}{dt}(-40t) = -40$, and $\\frac{d}{dt}t^2 = 2t$ with the constant $0.4$ carried along (sum and constant-multiple rules from last lesson).' },
            { tex: "V'(10) = -40 + 8 = -32 \\ \\text{L/min}", why: 'The instantaneous rate at exactly $t = 10$.' },
            { tex: "V(50) = 1000 - 2000 + 1000 = 0, \\qquad V'(50) = -40 + 40 = 0", why: 'At $t = 50$ the tank is empty and the outflow has slowed to zero.' },
          ],
          result: 'At $t = 10$ min the water level is falling at $32$ litres per minute. The negative sign means the volume is *decreasing*; the drain slows as the tank empties.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why units are worth tracking',
          text: 'Units are a free error check and the key to interpretation. If your answer to "how fast is the volume changing?" comes out in litres, or in minutes per litre, something went wrong. And every sentence interpreting a derivative should carry the units: "$V\'(10) = -32$ means that at $10$ minutes, the volume is decreasing at $32$ litres per minute."',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favourite exam question: "Interpret $f\'(a) = k$ in context." A full answer names the **instant** ($x = a$), the **quantity** that changes, the **direction** (increasing/decreasing from the sign), and the **rate with units**. "The slope is $k$" earns little credit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A factory\'s total cost of producing $x$ widgets is $C(x)$ dollars. You are told $C\'(100) = 5$. What does this mean?',
      options: [
        {
          text: 'The total cost of producing $100$ widgets is $\\$5$',
          why: 'That would be $C(100) = 5$. The derivative is a *rate*, not a total.',
        },
        {
          text: 'The average cost per widget for the first $100$ widgets is $\\$5$',
          why: 'Average cost is $\\frac{C(100)}{100}$, which uses the total, not the rate of change at $x = 100$.',
        },
        {
          text: 'At a production level of $100$ widgets, cost is rising at $\\$5$ per additional widget, so the $101$st widget costs about $\\$5$',
          correct: true,
          why: 'The units of $C\'$ are dollars per widget, and $C\'(100)$ is the rate at $x = 100$. Over one extra widget, the cost changes by about $C\'(100) \\cdot 1$.',
        },
        {
          text: 'Producing $5$ more widgets costs $\\$100$',
          why: 'This swaps the roles of input and output. $C\'(100) = 5$ has units dollars per widget, evaluated at $x = 100$.',
        },
      ],
      explanation: 'Units of $C\'$: (dollars) / (widget). So $C\'(100) = 5$ means that when $100$ widgets are being produced, each additional widget adds about $\\$5$ to the total cost. Economists call this the *marginal cost*. It is "about" because $C(101) - C(100)$ is an average rate over $[100, 101]$, which is close to, but not exactly, the instantaneous rate.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Position, velocity, acceleration',
      blocks: [
        {
          type: 'p',
          text: 'The original rate of change is motion. Suppose an object moves along a straight line (a number line, or "up" for a thrown ball) and $s(t)$ is its position at time $t$. Then:',
        },
        {
          type: 'list',
          items: [
            '[[velocity|Velocity]] $v(t) = s\'(t)$: rate of change of position. Its **sign is the direction** ($v > 0$: moving in the positive direction; $v < 0$: the negative direction; $v = 0$: momentarily at rest).',
            '**Speed** $= |v(t)|$: how fast, ignoring direction.',
            '[[acceleration|Acceleration]] $a(t) = v\'(t) = s\'\'(t)$: rate of change of velocity.',
          ],
        },
        {
          type: 'p',
          text: 'Units chain together: if $s$ is in metres and $t$ in seconds, $v$ is in m/s and $a$ in (m/s) per s $=$ m/s².',
        },
        {
          type: 'derivation',
          title: 'A ball thrown upward: $h(t) = 20t - 5t^2$ metres ($t$ in seconds)',
          steps: [
            { tex: "v(t) = \\lim_{\\Delta t \\to 0} \\frac{20(t + \\Delta t) - 5(t + \\Delta t)^2 - (20t - 5t^2)}{\\Delta t}", why: 'Velocity is the derivative of height. We use the definition directly, writing $\\Delta t$ for the small time step.' },
            { tex: '= \\lim_{\\Delta t \\to 0} \\frac{20\\,\\Delta t - 10t\\,\\Delta t - 5(\\Delta t)^2}{\\Delta t}', why: 'Expand $(t + \\Delta t)^2 = t^2 + 2t\\,\\Delta t + (\\Delta t)^2$; the $20t$ and $-5t^2$ terms cancel.' },
            { tex: '= \\lim_{\\Delta t \\to 0} (20 - 10t - 5\\,\\Delta t) = 20 - 10t \\ \\text{m/s}', why: 'Cancel $\\Delta t$, then let it go to $0$.' },
            { tex: "a(t) = v'(t) = -10 \\ \\text{m/s}^2", why: '$v(t)$ is a line with slope $-10$. Constant downward acceleration: gravity (rounded to $10$ m/s² for clean numbers).' },
            { tex: 'v(1) = 10, \\quad v(2) = 0, \\quad v(3) = -10', why: 'Going up at $10$ m/s, momentarily at rest at the top, then coming down at $10$ m/s.' },
            { tex: 'h(2) = 40 - 20 = 20 \\ \\text{m}', why: 'The ball is highest exactly when $v = 0$: it stops rising and starts falling.' },
          ],
          result: 'The ball rises for $2$ s to a height of $20$ m, then falls. Its velocity decreases by $10$ m/s every second the whole time.',
        },
        {
          type: 'graph',
          x: [-0.3, 4.5],
          y: [-3, 24],
          functions: [{ expr: '20x - 5x^2', domain: [0, 4], label: '$h(t) = 20t - 5t^2$' }],
          tangents: [{ expr: '20x - 5x^2', at: 'a', color: 'orange' }],
          points: [{ x: 'a', y: '20a - 5a^2' }],
          sliders: [{ name: 'a', min: 0, max: 4, step: 0.05, value: 0.5, label: 'time $t$' }],
          readouts: [
            { label: 'height $h(t) =$', expr: '20a - 5a^2' },
            { label: 'velocity $v(t) = h\'(t) =$', expr: '20 - 10a' },
            { label: 'speed $|v(t)| =$', expr: 'abs(20 - 10a)' },
          ],
          caption: 'Horizontal axis: time. The tangent slope is the velocity: positive on the way up, zero at the peak ($t = 2$), negative on the way down.',
        },
        {
          type: 'theorem',
          name: 'Speeding up or slowing down?',
          text: 'The object is **speeding up** when $v$ and $a$ have the **same** sign, and **slowing down** when they have **opposite** signs.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the sign of $a$ alone does not decide',
          text: 'Acceleration changes velocity, but whether that makes you faster depends on which way you are already going. On the way up, $v > 0$ and $a = -10$ pull in opposite directions: the ball slows. On the way down, $v < 0$ and $a < 0$ point the same way: $v$ becomes *more* negative, so the speed $|v|$ grows.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'The ball with $h(t) = 20t - 5t^2$ returns to the ground ($h = 0$) at some time $t > 0$. What is its velocity at that moment?',
      label: '$v =$',
      unit: 'm/s',
      answer: '-20',
      hint: 'Solve $20t - 5t^2 = 0$ for $t > 0$, then substitute into $v(t) = 20 - 10t$.',
      explanation: '$20t - 5t^2 = 5t(4 - t) = 0$ gives $t = 0$ (launch) or $t = 4$ (landing). Then $v(4) = 20 - 40 = -20$ m/s. The negative sign says it is moving downward; its speed is $20$ m/s — exactly the launch speed, which is what symmetry (and energy conservation) predicts without air resistance.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'If an object\'s acceleration is negative, the object is slowing down.',
      answer: false,
      explanation: 'It depends on the velocity. Negative acceleration with **positive** velocity means slowing down (the ball on its way up). Negative acceleration with **negative** velocity means speeding up (the ball falling: $v$ goes $-10, -20, \\ldots$, so its speed grows). Speeding up means $v$ and $a$ have the same sign.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Analysing motion: direction, distance, displacement',
      blocks: [
        {
          type: 'p',
          text: 'A particle moves along a horizontal line with position $s(t) = t^3 - 6t^2 + 9t$ metres for $t \\ge 0$ seconds. It wiggles back and forth, and the derivatives tell the whole story.',
        },
        {
          type: 'derivation',
          title: 'Velocity and acceleration',
          steps: [
            { tex: "v(t) = s'(t) = 3t^2 - 12t + 9", why: 'Term by term: $\\frac{d}{dt}t^3 = 3t^2$ and $\\frac{d}{dt}t^2 = 2t$ (both from the definition, last lesson), $\\frac{d}{dt}9t = 9$, with constants carried along.' },
            { tex: '= 3(t^2 - 4t + 3) = 3(t - 1)(t - 3)', why: 'Factor to find where $v = 0$: at $t = 1$ and $t = 3$. These are the turning points.' },
            { tex: "a(t) = v'(t) = 6t - 12 = 6(t - 2)", why: 'Differentiate $v$: $3(2t) - 12 + 0$. Acceleration changes sign at $t = 2$.' },
          ],
        },
        {
          type: 'table',
          headers: ['Interval', 'sign of $v$', 'sign of $a$', 'Motion'],
          rows: [
            ['$(0, 1)$', '$+$', '$-$', 'moving right, slowing down'],
            ['$(1, 2)$', '$-$', '$-$', 'moving left, speeding up'],
            ['$(2, 3)$', '$-$', '$+$', 'moving left, slowing down'],
            ['$(3, \\infty)$', '$+$', '$+$', 'moving right, speeding up'],
          ],
          caption: 'Test a point in each interval, e.g. $v(0.5) = 3.75$, $a(0.5) = -9$.',
        },
        {
          type: 'graph',
          x: [-0.3, 4.5],
          y: [-4, 10],
          functions: [
            { expr: 'x^3 - 6x^2 + 9x', domain: [0, 4.3], label: '$s(t)$ (position)' },
            { expr: '3x^2 - 12x + 9', domain: [0, 4.3], label: '$v(t)$ (velocity)', color: 'red', dashed: true },
          ],
          points: [
            { x: 'a', y: 'a^3 - 6a^2 + 9a' },
            { x: 'a', y: '3a^2 - 12a + 9', color: 'red' },
          ],
          sliders: [{ name: 'a', min: 0, max: 4.3, step: 0.05, value: 0.5, label: 'time $t$' }],
          readouts: [
            { label: 'position $s =$', expr: 'a^3 - 6a^2 + 9a' },
            { label: 'velocity $v =$', expr: '3a^2 - 12a + 9' },
            { label: 'acceleration $a(t) =$', expr: '6a - 12' },
          ],
          caption: 'Position rises to $4$ m at $t = 1$, falls back to $0$ at $t = 3$, then climbs again. The red velocity curve is below the axis exactly while the particle moves left.',
        },
        {
          type: 'p',
          text: 'Two different questions are hiding in "how far did it go?". [[displacement|Displacement]] is the net change in position, $s(\\text{end}) - s(\\text{start})$. **Total distance traveled** adds up every leg of the trip as a positive amount, so you must split the time interval at each turning point.',
        },
        {
          type: 'derivation',
          title: 'Displacement and distance on $[0, 4]$',
          steps: [
            { tex: 's(0) = 0, \\quad s(1) = 4, \\quad s(3) = 0, \\quad s(4) = 4', why: 'Evaluate position at the endpoints and at the turning points $t = 1, 3$. For instance $s(4) = 64 - 96 + 36 = 4$.' },
            { tex: '\\text{displacement} = s(4) - s(0) = 4 \\ \\text{m}', why: 'Net change only: the particle ends $4$ m to the right of where it started.' },
            { tex: '\\text{distance} = |4 - 0| + |0 - 4| + |4 - 0| = 12 \\ \\text{m}', why: 'Right $4$ m on $[0, 1]$, left $4$ m on $[1, 3]$, right $4$ m on $[3, 4]$. Each leg counts as positive.' },
          ],
          result: 'Displacement $4$ m, total distance $12$ m. They agree only if the object never reverses direction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A particle has position $s(t) = t^2 - 4t$ metres for $0 \\le t \\le 5$ seconds. Find the **total distance** it travels on $[0, 5]$.',
      label: 'distance $=$',
      unit: 'm',
      answer: '13',
      hint: 'Find where $v(t) = 2t - 4$ is zero, then add the lengths of the two legs.',
      explanation: '$v(t) = 2t - 4 = 0$ at $t = 2$, the only turning point. Positions: $s(0) = 0$, $s(2) = 4 - 8 = -4$, $s(5) = 25 - 20 = 5$. The particle moves left $4$ m (from $0$ to $-4$), then right $9$ m (from $-4$ to $5$): total distance $4 + 9 = 13$ m. The displacement is only $s(5) - s(0) = 5$ m.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Return to $s(t) = t^3 - 6t^2 + 9t$, with $v(t) = 3(t - 1)(t - 3)$ and $a(t) = 6(t - 2)$. Describe the motion at $t = 2.5$ s.',
      template: 'At $t = 2.5$ the particle is moving ___ and ___ .',
      blanks: [{ answers: ['left'] }, { answers: ['slowing down'] }],
      wordBank: ['left', 'right', 'slowing down', 'speeding up', 'at rest'],
      hint: 'Compute the signs of $v(2.5)$ and $a(2.5)$.',
      explanation: '$v(2.5) = 3(1.5)(-0.5) = -2.25 < 0$, so it is moving left (the negative direction). $a(2.5) = 6(0.5) = 3 > 0$. Opposite signs mean it is slowing down — it is about to stop and turn around at $t = 3$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Rates of change across the sciences',
      blocks: [
        {
          type: 'p',
          text: 'Nothing in the definition of the derivative mentions time or motion. Whenever one quantity depends on another, the derivative measures how sensitive the output is to the input. The same mathematics appears under many names:',
        },
        {
          type: 'table',
          headers: ['Field', 'Function', 'Derivative', 'Units (example)'],
          rows: [
            ['Economics', 'cost $C(x)$ of $x$ items', '[[marginal-cost]] $C\'(x)$', 'dollars per item'],
            ['Biology', 'population $P(t)$', 'growth rate $P\'(t)$', 'organisms per hour'],
            ['Chemistry', 'concentration $[A](t)$', 'reaction rate', 'mol/L per second'],
            ['Electricity', 'charge $Q(t)$ through a wire', 'current $I(t) = Q\'(t)$', 'coulombs per second = amperes'],
            ['Physics', 'mass $m(x)$ of the first $x$ m of a rod', 'linear density $m\'(x)$', 'kg per metre'],
            ['Thermodynamics', 'temperature $T(t)$', 'heating/cooling rate', '°C per minute'],
          ],
        },
        {
          type: 'derivation',
          title: 'Marginal cost: $C(x) = 2000 + 3x + 0.01x^2$ dollars',
          steps: [
            { tex: "C'(x) = 3 + 0.02x", why: 'The fixed cost $2000$ has derivative $0$; $3x$ gives $3$; $0.01x^2$ gives $0.01 \\cdot 2x$.' },
            { tex: "C'(100) = 3 + 2 = 5 \\ \\text{dollars per item}", why: 'The marginal cost at a production level of $100$ items.' },
            { tex: 'C(101) - C(100) = 3 + 0.01(101^2 - 100^2) = 3 + 2.01 = 5.01', why: 'The actual cost of the $101$st item: an average rate over an interval of width $1$. Note $101^2 - 100^2 = 201$.' },
          ],
          result: 'The derivative ($\\$5.00$) predicts the cost of one more item to within a cent ($\\$5.01$). That is why economists use derivatives for "one more unit" questions.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Notice which variable is "in the denominator" of the units. $C\'(x)$ is per *item*, not per second — the derivative is always with respect to the input variable, whatever it represents. Leibniz notation makes this explicit: $\\frac{dC}{dx}$ versus $\\frac{dP}{dt}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'The charge that has flowed through a wire after $t$ seconds is $Q(t) = t^3 - 2t^2 + 6t + 2$ coulombs. Current is the rate of flow of charge, $I(t) = Q\'(t)$. Find $I(t)$ in amperes.',
      label: '$I(t) =$',
      variables: ['t'],
      answer: '3t^2 - 4t + 6',
      hint: 'Differentiate term by term, using $\\frac{d}{dt}t^3 = 3t^2$ and $\\frac{d}{dt}t^2 = 2t$.',
      explanation: '$\\frac{d}{dt}t^3 = 3t^2$, $\\frac{d}{dt}(-2t^2) = -4t$, $\\frac{d}{dt}6t = 6$, and the constant $2$ (charge already present at $t = 0$) has derivative $0$. So $I(t) = 3t^2 - 4t + 6$ amperes; for example, at $t = 1$ s the current is $5$ A.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Velocity frame by frame',
      blocks: [
        {
          type: 'p',
          text: 'A game never sees a smooth function $s(t)$. It sees positions sampled once per frame, $\\Delta t$ seconds apart ($\\frac{1}{60}$ s at 60 fps). To know how fast something is moving — for motion blur, for a speed-based animation, for networked prediction — it uses the difference quotient directly, with $h = \\Delta t$.',
        },
        {
          type: 'math',
          tex: 'v \\approx \\frac{s(t + \\Delta t) - s(t)}{\\Delta t} \\quad \\text{(forward)} \\qquad v \\approx \\frac{s(t + \\Delta t) - s(t - \\Delta t)}{2\\,\\Delta t} \\quad \\text{(central)}',
          caption: 'Two [[finite-difference]] estimates of the derivative. The central version averages the slopes on both sides of $t$.',
        },
        {
          type: 'p',
          text: 'Both are secant slopes, so they are only approximations. For the ball $h(t) = 20t - 5t^2$ at $t = 1$ (true velocity $10$ m/s), the forward estimate works out to exactly $10 - 5\\,\\Delta t$: too small by an amount proportional to the frame time. The central estimate is exact for any quadratic, and much more accurate in general.',
        },
        {
          type: 'code',
          title: 'frame_velocity.cpp',
          runnable: true,
          code: `#include <cstdio>

// Height of a ball thrown upward at 20 m/s (g = 10 m/s^2), in metres.
double height(double t) { return 20.0 * t - 5.0 * t * t; }

int main() {
    const double t = 1.0;               // exact velocity here: 20 - 10t = 10 m/s
    const double dts[] = {0.1, 1.0 / 30.0, 1.0 / 60.0};
    for (double dt : dts) {
        double forward = (height(t + dt) - height(t)) / dt;
        double central = (height(t + dt) - height(t - dt)) / (2.0 * dt);
        std::printf("dt = %.4f s  forward = %.4f  central = %.4f m/s\\n", dt, forward, central);
    }
}`,
          output: `dt = 0.1000 s  forward = 9.5000  central = 10.0000 m/s
dt = 0.0333 s  forward = 9.8333  central = 10.0000 m/s
dt = 0.0167 s  forward = 9.9167  central = 10.0000 m/s`,
          annotations: [
            { lines: 8, text: 'Frame times for a coarse step, 30 fps and 60 fps.' },
            { lines: 10, text: 'Forward difference: needs only the current and next frame. Error $= -5\\,\\Delta t$ here.' },
            { lines: 11, text: 'Central difference: needs the previous and next frame, but the first-order error cancels.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Going the other way: Euler integration',
          text: 'Physics engines usually run this idea in reverse. Knowing velocity and acceleration, they *step* position forward each frame: `velocity += acceleration * dt; position += velocity * dt;`. Rearranged, that is just $v \\approx \\frac{\\Delta s}{\\Delta t}$ and $a \\approx \\frac{\\Delta v}{\\Delta t}$ — the difference quotient solved for the new value. Because every step uses a secant instead of the true tangent, results depend slightly on $\\Delta t$; that is why jump heights can differ between 30 fps and 144 fps unless the engine uses a fixed time step.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'A frame-based estimate is in metres per second only if you divide by $\\Delta t$ measured in **seconds**. Using the raw per-frame change gives metres per *frame*, a number whose meaning silently changes with the frame rate — a classic game bug.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A game samples a car\'s position along a track at 60 frames per second. At frame 120 it is at $15.25$ m; at frame 121 it is at $15.50$ m. Estimate its velocity with a forward difference.',
      label: '$v \\approx$',
      unit: 'm/s',
      answer: '15',
      hint: 'The time between frames is $\\Delta t = \\frac{1}{60}$ s. Divide the change in position by $\\Delta t$.',
      explanation: 'The change in position is $15.50 - 15.25 = 0.25$ m over $\\Delta t = \\frac{1}{60}$ s, so $v \\approx \\frac{0.25}{1/60} = 0.25 \\times 60 = 15$ m/s (about $54$ km/h). Forgetting to divide by $\\Delta t$ gives $0.25$ — a speed in metres per *frame*.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student analyses $s(t) = t^2 - 4t$ (metres, seconds) at $t = 1$. Tap the first line that is wrong.',
      lines: [
        '$v(t) = s\'(t) = 2t - 4$, so $v(1) = -2$ m/s.',
        '$a(t) = v\'(t) = 2$ m/s², so $a(1) = 2$ m/s².',
        'Since $a(1) > 0$, the object is speeding up at $t = 1$.',
        'Its speed at $t = 1$ is $|v(1)| = 2$ m/s.',
      ],
      errorLines: [3],
      explanation: 'Line 3 decides from the sign of $a$ alone. Here $v(1) = -2 < 0$ and $a(1) = 2 > 0$ have **opposite** signs, so the object is slowing down: it is moving left, and the positive acceleration is braking it until it turns around at $t = 2$. Line 4 is correct — speed is $|v|$, and it is indeed decreasing at $t = 1$ (e.g. $|v(1.5)| = 1$).',
    },
  ],
  takeaways: [
    '$f\'(a)$ is the instantaneous rate of change of $f$ at $a$; its units are (units of output) per (unit of input).',
    'Velocity $v = s\'$, speed $= |v|$, acceleration $a = v\' = s\'\'$. The sign of $v$ gives the direction.',
    'An object speeds up when $v$ and $a$ have the same sign and slows down when the signs are opposite.',
    'Displacement is $s(\\text{end}) - s(\\text{start})$; total distance adds the legs between turning points, where $v = 0$.',
    'The same derivative is marginal cost in economics, current in electricity, growth rate in biology and reaction rate in chemistry.',
    'Games estimate velocity with finite differences: forward $\\frac{s(t + \\Delta t) - s(t)}{\\Delta t}$, or the more accurate central difference.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 3.4 Derivatives as Rates of Change',
      url: 'https://openstax.org/books/calculus-volume-1/pages/3-4-derivatives-as-rates-of-change',
      source: 'openstax',
      note: 'Motion along a line, marginal cost and population growth, with many worked examples.',
    },
    {
      title: "Paul's Online Notes — Interpretation of the Derivative",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/DerivativeInterp.aspx',
      source: 'paul',
      note: 'How to read $f\'(a)$ as a rate, a slope and a direction-of-change indicator.',
    },
    {
      title: 'Wikipedia — Finite difference',
      url: 'https://en.wikipedia.org/wiki/Finite_difference',
      source: 'wikipedia',
      note: 'Forward, backward and central differences and why the central one is more accurate.',
    },
  ],
};
