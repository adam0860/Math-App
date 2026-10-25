import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-net-change',
  title: 'The Net Change Theorem',
  summary: 'Integrate a rate, get a change: displacement versus total distance, and rates in every context.',
  minutes: 17,
  objectives: [
    'State the Net Change Theorem and explain why integrating a rate of change gives a net change',
    'Find a final amount from a starting amount and a rate: $F(b) = F(a) + \\int_a^b F\'(t)\\,dt$',
    'Distinguish displacement $\\int_a^b v(t)\\,dt$ from total distance traveled $\\int_a^b |v(t)|\\,dt$, and compute both',
    'Read net change and total change from the graph of a rate using areas',
    'Interpret the units and meaning of an integral of a rate in physics, economics and games',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Integrating a rate gives a change',
      blocks: [
        {
          type: 'p',
          text: 'You now own the most powerful tool in Calculus I: the [[fundamental-theorem-of-calculus]]. Part 2 says that if $F$ is an antiderivative of a continuous $f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$. In this final unit we stop treating that as a computing trick and start asking what it *means* in the real world.',
        },
        {
          type: 'p',
          text: 'Here is the shift in viewpoint. Since $F$ is an antiderivative of $f$, we have $f = F\'$: the integrand is the **rate of change** of $F$. Rewrite the theorem with $F\'$ in place of $f$ and it reads like a sentence about quantities.',
        },
        {
          type: 'theorem',
          name: 'The Net Change Theorem',
          tex: '\\int_a^b F\'(x)\\,dx = F(b) - F(a)',
          text: 'If $F\'$ is continuous on $[a, b]$, the integral of the **rate of change** of a quantity over $[a, b]$ equals the **net change** in that quantity from $x = a$ to $x = b$.',
        },
        {
          type: 'p',
          text: 'That is the [[net-change-theorem]]. It is nothing new mathematically; it *is* the FTC. But it is how scientists, engineers and economists actually use integrals: whenever you know how fast something changes, integrating that rate tells you how much it changed.',
        },
        {
          type: 'table',
          headers: ['If you integrate…', 'over $[a, b]$ you get…'],
          rows: [
            ['velocity $v(t) = s\'(t)$ (m/s)', 'the change in position $s(b) - s(a)$ (m)'],
            ['flow rate $r(t) = V\'(t)$ (L/min)', 'the change in volume $V(b) - V(a)$ (L)'],
            ['growth rate $P\'(t)$ (people/year)', 'the change in population (people)'],
            ['marginal cost $C\'(x)$ (\\$ per unit)', 'the extra cost of raising production from $a$ to $b$ units (\\$)'],
            ['acceleration $a(t) = v\'(t)$ (m/s²)', 'the change in velocity $v(b) - v(a)$ (m/s)'],
          ],
          caption: 'One theorem, many disguises. Notice the units: (rate units) × (input units) = (quantity units).',
        },
        {
          type: 'graph',
          x: [-0.3, 4.3],
          y: [-0.5, 6.5],
          functions: [{ expr: '0.3x^2 + 1', label: '$r(t) = 0.3t^2 + 1$ L/min', domain: [0, 4.3] }],
          riemann: { expr: '0.3x^2 + 1', from: 0, to: 4, n: 'n', method: 'left' },
          sliders: [{ name: 'n', min: 1, max: 40, step: 1, value: 4, label: 'number of time slices $n$' }],
          caption: 'Each rectangle is (rate) × (short time) ≈ litres added in that slice. As $n$ grows, the total approaches the exact change $\\int_0^4 (0.3t^2 + 1)\\,dt = 10.4$ L.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why adding up a rate gives the total change',
          text: 'Over a short time $\\Delta t$ the rate is nearly constant, so the change is about $\\text{rate} \\times \\Delta t$ — exactly like "distance = speed × time" when speed is constant. Chop $[a, b]$ into $n$ short slices and add the little changes: that is a [[riemann-sum]], and the little changes add up to the whole change. As $\\Delta t \\to 0$ the approximation becomes exact, and the FTC tells us the exact value is $F(b) - F(a)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Water flows into a tank at a rate of $r(t)$ litres per minute, where $t$ is in minutes. What does $\\int_0^{10} r(t)\\,dt$ represent?',
      options: [
        {
          text: 'The volume of water in the tank at $t = 10$',
          why: 'The integral only measures what was *added*. To get the actual volume you also need the amount that was in the tank at $t = 0$.',
        },
        {
          text: 'The flow rate at $t = 10$ minutes',
          why: 'That would be $r(10)$, a single value of the rate measured in L/min, not an integral.',
        },
        {
          text: 'The net change in the volume of water during the first 10 minutes, in litres',
          correct: true,
          why: 'Correct: $r = V\'$, so $\\int_0^{10} r(t)\\,dt = V(10) - V(0)$, measured in (L/min) × (min) = L.',
        },
        {
          text: 'The average flow rate over the first 10 minutes',
          why: 'Close, but the average rate is this integral *divided by* $10$ — a topic coming up later in this unit.',
        },
      ],
      explanation: 'By the Net Change Theorem, integrating the rate $r(t) = V\'(t)$ gives $V(10) - V(0)$: the change in volume. The units confirm it: L/min times min is litres. It is a *change*, not a final amount: if the tank started with 50 L and the integral is 30, the tank ends with 80 L.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Final amount = starting amount + accumulated change',
      blocks: [
        {
          type: 'p',
          text: 'The theorem gives a *change*. To find where a quantity *ends up*, add the change to where it *started*. Rearranging $F(b) - F(a) = \\int_a^b F\'(t)\\,dt$ gives the form you will use constantly:',
        },
        {
          type: 'math',
          tex: 'F(b) = F(a) + \\int_a^b F\'(t)\\,dt',
          caption: 'Final value = initial value + integral of the rate.',
        },
        {
          type: 'p',
          text: 'Rates can be negative. If water drains out, the flow rate is negative and that stretch of time contributes a *negative* change. The integral handles this automatically — it is a [[net-signed-area|net signed area]], so inflow and outflow partly cancel. That is what "net" means.',
        },
        {
          type: 'derivation',
          title: 'A tank holds 100 L at $t = 0$. Its flow rate is $r(t) = 8 - 2t$ L/min. How much water is in it at $t = 6$?',
          steps: [
            { tex: 'V(6) = V(0) + \\int_0^6 r(t)\\,dt', why: 'Final amount = starting amount + net change. The rate $r$ is $V\'$, so the Net Change Theorem applies.' },
            { tex: '= 100 + \\int_0^6 (8 - 2t)\\,dt', why: 'Substitute $V(0) = 100$ and the formula for the rate.' },
            { tex: '= 100 + \\Big[\\,8t - t^2\\,\\Big]_0^6', why: 'An antiderivative of $8 - 2t$ is $8t - t^2$ (check: its derivative is $8 - 2t$).' },
            { tex: '= 100 + \\big[(48 - 36) - (0 - 0)\\big]', why: 'Evaluate at the upper limit, then subtract the value at the lower limit.' },
            { tex: '= 100 + 12 = 112 \\text{ L}', why: 'Net change of $+12$ L, added to the starting $100$ L.' },
          ],
          result: 'The tank ends with $112$ L. But that $+12$ hides a story: the rate is positive until $t = 4$ and negative after.',
        },
        {
          type: 'graph',
          x: [-0.3, 6.5],
          y: [-5, 9],
          functions: [{ expr: '8 - 2x', label: '$r(t) = 8 - 2t$ L/min', domain: [0, 6.5] }],
          areas: [
            { expr: '8 - 2x', from: 0, to: 'min(b, 4)', color: 'green' },
            { expr: '8 - 2x', from: 4, to: 'max(b, 4)', color: 'red' },
          ],
          vlines: [{ x: 'b', label: 't = b' }],
          sliders: [{ name: 'b', min: 0, max: 6, step: 0.1, value: 6, label: 'end time $b$' }],
          readouts: [
            { label: 'net change $\\int_0^b r\\,dt = 8b - b^2 =$', expr: '8b - b^2', digits: 2 },
            { label: 'volume $V(b) =$', expr: '100 + 8b - b^2', digits: 2 },
          ],
          caption: 'Green area: $16$ L flows in during $[0, 4]$. Red area: $4$ L drains out during $[4, 6]$. Net change $= 16 - 4 = 12$ L. Slide $b$ and watch the volume peak at $t = 4$, exactly where the rate crosses zero.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Every game loop is a Riemann sum',
          text: 'When a game does `health += regenRate * dt;` every frame, it is adding up (rate) × (short time) — a left Riemann sum of the Net Change Theorem, also called Euler integration. If the rate changes during the frame, the sum drifts slightly from the true integral, and the error shrinks as `dt` shrinks. The program below shows the drift for our tank.',
        },
        {
          type: 'code',
          title: 'tank.cpp',
          runnable: true,
          code: `#include <cstdio>

double rate(double t) { return 8.0 - 2.0 * t; }  // litres per minute

int main() {
    const double steps[] = {1.0, 0.1, 0.01};
    for (double dt : steps) {
        int n = static_cast<int>(6.0 / dt + 0.5);  // number of frames in [0, 6]
        double volume = 100.0;
        for (int k = 0; k < n; ++k) {
            double t = k * dt;
            volume += rate(t) * dt;                 // one frame of accumulation
        }
        std::printf("dt = %-5g V(6) = %.4f\\n", dt, volume);
    }
    std::printf("exact:    V(6) = 112.0000\\n");
}`,
          output: `dt = 1     V(6) = 118.0000
dt = 0.1   V(6) = 112.6000
dt = 0.01  V(6) = 112.0600
exact:    V(6) = 112.0000`,
          annotations: [
            { lines: 3, text: 'The rate of change $V\'(t) = 8 - 2t$.' },
            { lines: 8, text: 'Count frames with an integer so floating-point round-off cannot add or drop a frame.' },
            { lines: 12, text: 'The game-loop update: (rate at the start of the frame) × (frame length). Because the rate is decreasing, each frame overestimates slightly.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A tank contains $40$ gallons of water at $t = 0$. Water flows in at a rate of $r(t) = 6\\sqrt{t}$ gallons per minute. How many gallons are in the tank at $t = 4$ minutes?',
      hint: 'Use $V(4) = V(0) + \\int_0^4 6\\sqrt{t}\\,dt$, and write $\\sqrt{t} = t^{1/2}$ to integrate with the power rule.',
      label: '$V(4) =$',
      unit: 'gallons',
      answer: '72',
      explanation: 'First the net change: $\\int_0^4 6t^{1/2}\\,dt = 6 \\cdot \\frac{2}{3}t^{3/2}\\Big|_0^4 = 4t^{3/2}\\Big|_0^4 = 4 \\cdot 8 - 0 = 32$ gallons (since $4^{3/2} = (\\sqrt{4})^3 = 8$). Then add the starting amount: $V(4) = 40 + 32 = 72$ gallons. Forgetting the $40$ (answering $32$) is the classic slip — the integral is the change, not the final amount.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Displacement versus total distance',
      blocks: [
        {
          type: 'p',
          text: 'The most important example is motion along a line. If $s(t)$ is position and $v(t) = s\'(t)$ is [[velocity]], the Net Change Theorem says $\\int_a^b v(t)\\,dt = s(b) - s(a)$. That net change in position is called [[displacement]]: how far you end up from where you started, with a sign telling you which direction.',
        },
        {
          type: 'p',
          text: 'Displacement is not the same as how far you *travelled*. Walk 10 m east and then 10 m west: your displacement is $0$, but your legs covered 20 m. The [[total-distance-traveled]] counts every metre, forward or backward, so it integrates the **speed** $|v(t)|$ instead of the velocity.',
        },
        {
          type: 'definition',
          term: 'Displacement and total distance',
          text: 'For an object moving along a line with velocity $v(t)$ on $[a, b]$:\n\n$$\\text{displacement} = \\int_a^b v(t)\\,dt = s(b) - s(a), \\qquad \\text{total distance} = \\int_a^b |v(t)|\\,dt.$$\n\nTotal distance is always $\\ge |\\text{displacement}|$, with equality exactly when the object never reverses direction.',
        },
        {
          type: 'graph',
          x: [-0.3, 4.4],
          y: [-1.6, 3.6],
          functions: [{ expr: 'x^2 - 4x + 3', label: '$v(t) = t^2 - 4t + 3$ m/s', domain: [0, 4.4] }],
          areas: [
            { expr: 'x^2 - 4x + 3', from: 0, to: 1, color: 'green' },
            { expr: 'x^2 - 4x + 3', from: 1, to: 3, color: 'red' },
            { expr: 'x^2 - 4x + 3', from: 3, to: 4, color: 'green' },
          ],
          points: [
            { x: 1, y: 0, label: 't = 1' },
            { x: 3, y: 0, label: 't = 3' },
          ],
          caption: 'Green: moving forward ($v > 0$). Red: moving backward ($v < 0$). Displacement adds green and *subtracts* red; total distance adds both.',
        },
        {
          type: 'p',
          text: 'For this velocity on $[0, 4]$, each of the three pieces has area $\\frac{4}{3}$ (you will verify this on the next card). The object moves forward $\\frac{4}{3}$ m, backs up $\\frac{4}{3}$ m, then moves forward $\\frac{4}{3}$ m again. So the displacement is $\\frac{4}{3} - \\frac{4}{3} + \\frac{4}{3} = \\frac{4}{3}$ m, but the total distance is $\\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$ m.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the absolute value',
          text: 'On a short time slice the object moves about $v(t)\\,\\Delta t$. When $v < 0$ that product is negative: the object moved *backward*, and adding it reduces the net change in position — correct for displacement. But a car\'s odometer never runs backward. Distance needs the *size* of each little move, $|v(t)|\\,\\Delta t$, and adding those up gives $\\int_a^b |v(t)|\\,dt$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'If an object\'s velocity satisfies $\\int_0^{10} v(t)\\,dt = 0$, then the object did not move during $0 \\le t \\le 10$.',
      answer: false,
      explanation: 'A zero integral means zero **displacement**: the object ends where it started. It may have moved a long way and come back — a ball thrown straight up and caught again has displacement $0$ but travelled up and down. The object stood still only if $\\int_0^{10} |v(t)|\\,dt = 0$, i.e. total distance is zero.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Computing total distance: split where $v = 0$',
      blocks: [
        {
          type: 'p',
          text: 'There is no simple antiderivative formula for $|v(t)|$ in general, so you cannot just integrate it directly. Instead, use the fact that $|v(t)| = v(t)$ where $v \\ge 0$ and $|v(t)| = -v(t)$ where $v \\le 0$. Split the interval at the times where the velocity changes sign, then handle each piece separately.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Find the turning times', text: 'Solve $v(t) = 0$ and keep the solutions inside $[a, b]$.' },
            { title: 'Split the interval', text: 'Those times cut $[a, b]$ into pieces on which $v$ has one sign.' },
            { title: 'Integrate $v$ on each piece', text: 'Use the FTC as usual. Pieces where $v < 0$ come out negative.' },
            { title: 'Add the absolute values', text: 'Total distance = sum of $\\left|\\int v\\,dt\\right|$ over the pieces. (Displacement = the plain sum.)' },
          ],
        },
        {
          type: 'derivation',
          title: 'Total distance for $v(t) = t^2 - 4t + 3$ on $[0, 4]$',
          steps: [
            { tex: 't^2 - 4t + 3 = (t - 1)(t - 3) = 0 \\implies t = 1,\\ t = 3', why: 'Factor to find the turning times. Both lie inside $[0, 4]$.' },
            { tex: 'S(t) = \\tfrac{t^3}{3} - 2t^2 + 3t', why: 'An antiderivative of $v$, used for all three pieces. Values: $S(0) = 0$, $S(1) = \\frac{4}{3}$, $S(3) = 9 - 18 + 9 = 0$, $S(4) = \\frac{64}{3} - 32 + 12 = \\frac{4}{3}$.' },
            { tex: '\\int_0^1 v\\,dt = S(1) - S(0) = \\tfrac{4}{3}', why: 'On $[0, 1]$ the velocity is positive (test $t = 0$: $v = 3$), so this piece is positive.' },
            { tex: '\\int_1^3 v\\,dt = S(3) - S(1) = -\\tfrac{4}{3}', why: 'On $[1, 3]$ the velocity is negative (test $t = 2$: $v = -1$): the object moves backward $\\frac{4}{3}$ m.' },
            { tex: '\\int_3^4 v\\,dt = S(4) - S(3) = \\tfrac{4}{3}', why: 'On $[3, 4]$ the velocity is positive again.' },
            { tex: '\\text{distance} = \\tfrac{4}{3} + \\left|-\\tfrac{4}{3}\\right| + \\tfrac{4}{3} = 4 \\text{ m}', why: 'Add the absolute values of the pieces.' },
          ],
          result: 'Total distance $= 4$ m. Displacement $= \\int_0^4 v\\,dt = S(4) - S(0) = \\frac{4}{3}$ m — no splitting needed for that one.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: absolute value of the whole integral',
            tone: 'bad',
            tex: ['\\left|\\int_0^4 v\\,dt\\right| = \\left|\\tfrac{4}{3}\\right| = \\tfrac{4}{3}'],
            text: 'This lets the backward motion cancel first and takes the absolute value afterward. It is the size of the displacement, not the distance.',
          },
          right: {
            title: 'Right: absolute value of each piece',
            tone: 'good',
            tex: ['\\int_0^4 |v|\\,dt = \\tfrac{4}{3} + \\tfrac{4}{3} + \\tfrac{4}{3} = 4'],
            text: 'Split where $v = 0$ so no cancellation can happen, then add sizes.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'AP and college exams almost always ask for *both* displacement and total distance from the same velocity. Graders look for the sign analysis: show where $v(t) = 0$ and which sign $v$ has on each piece. A number with no visible split usually loses most of the credit, even if it happens to be right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the steps for finding the total distance traveled from a velocity $v(t)$ on $[a, b]$ in order.',
      lines: [
        'Solve $v(t) = 0$ for $t$ in $[a, b]$',
        'Split $[a, b]$ at those times into pieces where $v$ keeps one sign',
        'Integrate $v(t)$ over each piece using the FTC',
        'Add the absolute values of the results',
      ],
      distractors: ['Integrate $v(t)$ over all of $[a, b]$ and take the absolute value of the answer'],
      explanation: 'You must find the sign changes *before* integrating, so that forward and backward motion never get a chance to cancel. The distractor computes $\\left|\\int_a^b v\\,dt\\right|$, the size of the displacement, which is smaller than the distance whenever the object reverses direction.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A particle moves along a line with velocity $v(t) = 2t - 6$ m/s for $0 \\le t \\le 5$. Find the **total distance** it travels.',
      hint: 'The velocity is zero at $t = 3$. Integrate over $[0, 3]$ and $[3, 5]$ separately.',
      label: 'distance $=$',
      unit: 'm',
      answer: '13',
      explanation: 'Antiderivative: $S(t) = t^2 - 6t$, with $S(0) = 0$, $S(3) = -9$, $S(5) = -5$. On $[0, 3]$, $v < 0$: $\\int_0^3 v\\,dt = -9$ (9 m backward). On $[3, 5]$, $v > 0$: $\\int_3^5 v\\,dt = -5 - (-9) = 4$ (4 m forward). Total distance $= 9 + 4 = 13$ m. The displacement is $-9 + 4 = -5$ m: the particle ends 5 m behind where it started.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student finds the total distance traveled for $v(t) = 3 - t$ on $[0, 5]$. Tap the first line that is wrong.',
      lines: [
        '$v(t) = 3 - t = 0$ at $t = 3$, which lies in $[0, 5]$',
        '$\\int_0^3 (3 - t)\\,dt = \\left[3t - \\frac{t^2}{2}\\right]_0^3 = 9 - \\frac{9}{2} = \\frac{9}{2}$',
        '$\\int_3^5 (3 - t)\\,dt = \\left(15 - \\frac{25}{2}\\right) - \\left(9 - \\frac{9}{2}\\right) = \\frac{5}{2} - \\frac{9}{2} = -2$',
        'Total distance $= \\frac{9}{2} + (-2) = \\frac{5}{2}$',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct: the split is at $t = 3$ and the two pieces are $\\frac{9}{2}$ and $-2$. Line 4 adds the *signed* values, which computes the displacement ($\\frac{5}{2}$ m), not the distance. The backward piece must count as $+2$: total distance $= \\frac{9}{2} + |-2| = \\frac{13}{2}$ m.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Reading net change from a graph',
      blocks: [
        {
          type: 'p',
          text: 'Often you are given a *graph* of a rate rather than a formula — a speedometer log, a sensor reading, telemetry from a game. Then you do not need antiderivatives at all: the integral is a signed area, and you can find it with geometry (rectangles, triangles, trapezoids).',
        },
        {
          type: 'graph',
          x: [-0.3, 5.5],
          y: [-3.8, 4],
          functions: [{ expr: 'min(3, 7 - 2x)', label: '$v(t)$ m/s', domain: [0, 5] }],
          areas: [
            { expr: 'min(3, 7 - 2x)', from: 0, to: 3.5, color: 'green' },
            { expr: 'min(3, 7 - 2x)', from: 3.5, to: 5, color: 'red' },
          ],
          points: [
            { x: 2, y: 3, label: '(2, 3)' },
            { x: 3.5, y: 0, label: '(3.5, 0)' },
            { x: 5, y: -3, label: '(5, −3)' },
          ],
          caption: 'A drone cruises at $3$ m/s for $2$ s, then decelerates steadily, stops at $t = 3.5$ and flies backward.',
        },
        {
          type: 'derivation',
          title: 'Displacement and distance for the drone on $[0, 5]$',
          steps: [
            { tex: 'A_1 = 3 \\cdot 2 = 6', why: 'On $[0, 2]$ the region is a rectangle of height $3$ and width $2$.' },
            { tex: 'A_2 = \\tfrac{1}{2}(1.5)(3) = 2.25', why: 'On $[2, 3.5]$ it is a triangle with base $1.5$ and height $3$ (above the axis).' },
            { tex: 'A_3 = \\tfrac{1}{2}(1.5)(3) = 2.25', why: 'On $[3.5, 5]$ it is a triangle with base $1.5$ and height $3$, but *below* the axis: the drone moves backward.' },
            { tex: '\\text{displacement} = 6 + 2.25 - 2.25 = 6 \\text{ m}', why: 'Signed areas: regions below the axis count negatively.' },
            { tex: '\\text{distance} = 6 + 2.25 + 2.25 = 10.5 \\text{ m}', why: 'Distance counts every region as positive.' },
          ],
          result: 'The drone ends $6$ m from its start after flying $10.5$ m in total.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Where is the object farthest forward?',
          text: 'Position increases while $v > 0$ and decreases while $v < 0$, so the position has a local maximum where $v$ changes from positive to negative — here at $t = 3.5$, when the drone is $6 + 2.25 = 8.25$ m out. This is the [[first-derivative-test]] applied to $s(t)$, with the areas supplying the values.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'The graph shows the velocity $v(t)$ (in m/s) of a cart for $0 \\le t \\le 6$ seconds. Find the **total distance** the cart travels.',
      graph: {
        type: 'graph',
        x: [-0.3, 6.5],
        y: [-2.6, 2.8],
        functions: [{ expr: '2 - abs(x - 2)', label: '$v(t)$', domain: [0, 6] }],
        points: [
          { x: 0, y: 0, label: '(0, 0)' },
          { x: 2, y: 2, label: '(2, 2)' },
          { x: 4, y: 0, label: '(4, 0)' },
          { x: 6, y: -2, label: '(6, −2)' },
        ],
      },
      hint: 'The graph forms two triangles: one above the axis on $[0, 4]$ and one below on $[4, 6]$.',
      label: 'distance $=$',
      unit: 'm',
      answer: '6',
      explanation: 'Above the axis, the triangle on $[0, 4]$ has base $4$ and height $2$: area $\\frac{1}{2}(4)(2) = 4$. Below the axis, the triangle on $[4, 6]$ has base $2$ and height $2$: area $\\frac{1}{2}(2)(2) = 2$. Total distance $= 4 + 2 = 6$ m. (The displacement would be $4 - 2 = 2$ m.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Rates everywhere: acceleration, cost, and units',
      blocks: [
        {
          type: 'p',
          text: 'The same theorem runs one level down the chain. Acceleration is the rate of change of velocity, so $v(b) = v(a) + \\int_a^b a(t)\\,dt$. Integrate acceleration to get velocity, then integrate velocity to get position: exactly what a physics engine does each frame.',
        },
        {
          type: 'derivation',
          title: 'A ball is thrown straight up at $14.7$ m/s. With $a(t) = -9.8$ m/s², where is it at $t = 3$?',
          steps: [
            { tex: 'v(t) = v(0) + \\int_0^t (-9.8)\\,du = 14.7 - 9.8t', why: 'Net Change Theorem for velocity, with a dummy variable $u$ because $t$ is the upper limit. The integral of a constant over $[0, t]$ is constant × length.' },
            { tex: '\\int_0^3 (14.7 - 9.8t)\\,dt = \\Big[14.7t - 4.9t^2\\Big]_0^3', why: 'Displacement = integral of velocity. Antiderivative of $-9.8t$ is $-4.9t^2$.' },
            { tex: '= 44.1 - 44.1 = 0', why: '$14.7 \\cdot 3 = 44.1$ and $4.9 \\cdot 9 = 44.1$.' },
            { tex: 'v(t) = 0 \\iff t = 1.5', why: 'For the distance, split where the ball stops rising.' },
            { tex: '\\int_0^{1.5} v\\,dt = 22.05 - 11.025 = 11.025', why: 'Rising: $14.7(1.5) - 4.9(2.25)$. By symmetry it falls the same $11.025$ m on $[1.5, 3]$.' },
          ],
          result: 'Displacement $0$ — the ball is back at launch height — but it travelled $2 \\times 11.025 = 22.05$ m.',
        },
        {
          type: 'p',
          text: 'Outside physics, the pattern is identical. If $C(x)$ is the cost of producing $x$ items, then $C\'(x)$ is the **marginal cost**, and $\\int_{100}^{200} C\'(x)\\,dx = C(200) - C(100)$ is the extra cost of raising production from 100 to 200 items. If $P\'(t)$ is a population\'s growth rate, $\\int_{0}^{5} P\'(t)\\,dt$ is the change in population over five years.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Let the units check you',
          text: 'The units of $\\int_a^b f(x)\\,dx$ are (units of $f$) × (units of $x$), because each slice is $f(x)\\,\\Delta x$. Rate in dollars per item, $x$ in items → dollars. Rate in m/s², $t$ in s → m/s. If the units of your answer do not describe the quantity you want, you integrated the wrong thing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'expr',
      prompt: 'A particle has acceleration $a(t) = 6t$ m/s² and initial velocity $v(0) = 4$ m/s. Use $v(t) = v(0) + \\int_0^t a(u)\\,du$ to find its velocity at any time $t$.',
      hint: '$\\int_0^t 6u\\,du = 3u^2 \\Big|_0^t = 3t^2$.',
      label: '$v(t) =$',
      variables: ['t'],
      answer: '4 + 3t^2',
      answerTex: '3t^2 + 4',
      explanation: 'By the Net Change Theorem applied to velocity, $v(t) = 4 + \\int_0^t 6u\\,du = 4 + \\left[3u^2\\right]_0^t = 4 + 3t^2$. Check: $v(0) = 4$ ✓ and $v\'(t) = 6t = a(t)$ ✓. Leaving off the $4$ gives a velocity function that starts from rest — the initial value is what pins down the constant.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary for an object with velocity $v(t)$ on $[a, b]$.',
      template: '$\\int_a^b v(t)\\,dt$ gives the ___, while $\\int_a^b |v(t)|\\,dt$ gives the ___. Their sizes are equal when the object never ___.',
      blanks: [{ answers: ['displacement'] }, { answers: ['total distance'] }, { answers: ['reverses direction'] }],
      wordBank: ['displacement', 'total distance', 'reverses direction', 'final position', 'accelerates', 'average velocity'],
      explanation: 'Integrating velocity gives net change in position — displacement — where backward motion cancels forward motion. Integrating speed $|v|$ counts every metre — total distance. If $v$ never changes sign, nothing cancels and the two agree (up to sign). "Final position" is tempting, but the integral gives the *change* in position; you need $s(a)$ to get $s(b)$.',
    },
  ],
  takeaways: [
    'Net Change Theorem: $\\int_a^b F\'(x)\\,dx = F(b) - F(a)$ — integrating a rate of change gives the net change in the quantity.',
    'To get a final value, add the change to the start: $F(b) = F(a) + \\int_a^b F\'(t)\\,dt$.',
    'Displacement is $\\int_a^b v(t)\\,dt$ (backward motion cancels); total distance is $\\int_a^b |v(t)|\\,dt$ (everything counts).',
    'To compute total distance, solve $v(t) = 0$, split the interval there, integrate each piece and add absolute values.',
    'From a graph of a rate, net change is signed area; geometry (rectangles, triangles) is often enough.',
    'Units of an integral are (rate units) × (input units) — a quick check that you integrated the right thing.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 5.4 Integration Formulas and the Net Change Theorem',
      url: 'https://openstax.org/books/calculus-volume-1/pages/5-4-integration-formulas-and-the-net-change-theorem',
      source: 'openstax',
      note: 'Free textbook section with many applied examples, including displacement versus total distance.',
    },
    {
      title: "Paul's Online Notes — Computing Definite Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ComputingDefiniteIntegrals.aspx',
      source: 'paul',
      note: 'Many more practice evaluations with the FTC, including integrals of absolute values split at sign changes.',
    },
    {
      title: 'Khan Academy — Calculus 1',
      url: 'https://www.khanacademy.org/math/calculus-1',
      source: 'khan',
      note: 'The applications-of-integration unit has practice on interpreting integrals of rates in context.',
    },
  ],
};
