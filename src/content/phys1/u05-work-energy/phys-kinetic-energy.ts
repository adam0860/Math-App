import type { Lesson } from '../../types';

// Car model for the top-speed graph: P_req(v) = A v^3 + B v, with A = (1/2) rho Cd A and B = rolling resistance.
const A = 0.396;
const B = 147;
// Real root of A v^3 + B v - 1000 P = 0 (P in kW) by Cardano's formula (one real root since B > 0).
const VTOP = `cbrt(500P/${A} + sqrt((500P/${A})^2 + (${B}/${A})^3/27)) + cbrt(500P/${A} - sqrt((500P/${A})^2 + (${B}/${A})^3/27))`;

export const lesson: Lesson = {
  id: 'phys-kinetic-energy',
  title: 'Kinetic Energy, the Work–Energy Theorem and Power',
  summary: 'Integrate Newton\'s second law over distance and out falls $K = \\tfrac12 mv^2$: net work changes kinetic energy. Then power, the rate of doing work, and why a car\'s top speed grows only as the cube root of its power.',
  minutes: 19,
  objectives: [
    'Compute kinetic energy $K = \\tfrac12 mv^2$ and explain why it depends on the square of the speed',
    'Derive the work–energy theorem $W_{\\text{net}} = \\Delta K$ from Newton\'s second law using the chain rule',
    'Use the theorem to find speeds and stopping distances without solving for the acceleration or the time',
    'Compute power as $P = dW/dt$ and as $P = \\vec F \\cdot \\vec v$, in watts and horsepower',
    'Explain how engine power and drag set a vehicle\'s top speed, and why $v_{\\text{top}} \\propto P^{1/3}$ when air drag dominates',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Kinetic energy: the energy of motion',
      blocks: [
        {
          type: 'p',
          text: 'A moving object can do work: a hammer drives a nail, a bullet punches through a plate, a car crumples a guardrail. The capacity to do work because of motion is **kinetic energy**. For a particle of mass $m$ moving at speed $v$:',
        },
        {
          type: 'definition',
          term: 'Kinetic energy',
          text: '$$K = \\tfrac12 m v^2$$\n\n[[phys-kinetic-energy|Kinetic energy]] is a scalar, never negative, and measured in [[phys-joule|joules]]. It depends on the *speed* only, not the direction of motion.',
        },
        {
          type: 'table',
          headers: ['Object', 'Mass', 'Speed', '$K = \\tfrac12 mv^2$'],
          rows: [
            ['Person walking', '$70\\,\\text{kg}$', '$1.4\\,\\text{m/s}$', '$69\\,\\text{J}$'],
            ['Baseball pitch', '$0.145\\,\\text{kg}$', '$40\\,\\text{m/s}$', '$116\\,\\text{J}$'],
            ['5.56 mm rifle bullet', '$4.0\\,\\text{g}$', '$940\\,\\text{m/s}$', '$1.77\\,\\text{kJ}$'],
            ['Car on the highway', '$1500\\,\\text{kg}$', '$27\\,\\text{m/s}$', '$547\\,\\text{kJ}$'],
            ['Main battle tank', '$62\\,\\text{t}$', '$18\\,\\text{m/s}$', '$10\\,\\text{MJ}$'],
          ],
          caption: 'The 4-gram bullet carries 15 times the energy of the fastball, almost entirely because $v^2$ is huge.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Speed squared',
          text: 'Doubling the speed **quadruples** $K$; tripling it multiplies $K$ by nine. This is why a crash at $100\\,\\text{km/h}$ is far more than twice as destructive as one at $50\\,\\text{km/h}$, and why braking distance (next card but one) grows with $v^2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Deriving the work–energy theorem',
      blocks: [
        {
          type: 'p',
          text: 'Why $\\tfrac12 mv^2$ and not, say, $mv$? Because $\\tfrac12 mv^2$ is exactly the quantity that **net work changes**. Start from Newton\'s second law for motion along $x$ and integrate it over position instead of time.',
        },
        {
          type: 'derivation',
          title: 'From $\\sum F_x = ma_x$ to $W_{\\text{net}} = \\Delta K$',
          steps: [
            { tex: 'W_{\\text{net}} = \\int_{x_i}^{x_f} F_{\\text{net},x}\\,dx = \\int_{x_i}^{x_f} m\\,\\frac{dv}{dt}\\,dx', why: 'Net work is the integral of the net force over the displacement; Newton\'s second law replaces $F_{\\text{net},x}$ with $m\\,dv/dt$.' },
            { tex: '\\frac{dv}{dt} = \\frac{dv}{dx}\\,\\frac{dx}{dt} = v\\,\\frac{dv}{dx}', why: 'The [[chain-rule]]: velocity depends on time through the position. And $dx/dt$ is the velocity $v$.' },
            { tex: 'W_{\\text{net}} = \\int_{x_i}^{x_f} m v\\,\\frac{dv}{dx}\\,dx = \\int_{v_i}^{v_f} m v\\,dv', why: 'Substitute, then change variables from $x$ to $v$: when $x$ runs from $x_i$ to $x_f$, $v$ runs from $v_i$ to $v_f$.' },
            { tex: '= \\tfrac12 m v_f^2 - \\tfrac12 m v_i^2', why: 'Antiderivative of $mv$ with respect to $v$.' },
          ],
          result: 'The net work done on a particle equals the change in its kinetic energy. This is Newton\'s second law, integrated over distance.',
        },
        {
          type: 'theorem',
          name: 'Work–energy theorem',
          tex: 'W_{\\text{net}} = \\Delta K = \\tfrac12 m v_f^2 - \\tfrac12 m v_i^2',
          text: 'Positive net work speeds an object up; negative net work slows it down; zero net work leaves its *speed* unchanged. It holds for variable forces and curved paths too (in 3D, $\\frac{d}{dt}\\tfrac12 m\\,\\vec v\\cdot\\vec v = m\\vec a \\cdot \\vec v = \\vec F_{\\text{net}}\\cdot\\vec v$).',
        },
        {
          type: 'graph',
          x: [0, 8.5],
          y: [-30, 45],
          xStep: 1,
          yStep: 10,
          height: 260,
          functions: [{ expr: '40 - 8x', label: 'net force $F_x = 40 - 8x$ (N)' }],
          areas: [{ expr: '40 - 8x', from: 0, to: 'b', color: 'green' }],
          points: [{ x: 'b', y: '40 - 8b', color: 'green' }],
          sliders: [{ name: 'b', min: 0, max: 8, step: 0.05, value: 2, label: 'position reached $x$ (m)', play: true }],
          readouts: [
            { label: '$W_{\\text{net}} = $ green area $=$', expr: '40b - 4b^2', digits: 1 },
            { label: '$K = K_0 + W_{\\text{net}} =$', expr: '9 + 40b - 4b^2', digits: 1 },
            { label: 'speed $v = \\sqrt{2K/m} =$', expr: 'sqrt(9 + 40b - 4b^2)', digits: 2 },
          ],
          caption: 'A $2.0\\,\\text{kg}$ cart starts at $3.0\\,\\text{m/s}$ ($K_0 = 9\\,\\text{J}$). Press play: the area grows, and so does the speed, until $x = 5\\,\\text{m}$. After that the force points backward, the area below the axis subtracts, and the cart slows down.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother, if it is just Newton\'s law?',
          text: 'Integrating over $x$ removes **time** from the problem. When a force depends on position (a spring, a varying ramp), $F = ma$ gives a differential equation, but the work–energy theorem gives the speed at any position with one integral. You trade knowing *when* for knowing *how fast* at a place, and that is often all you need.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'truefalse',
      prompt: 'If the net work done on an object is zero, its velocity cannot change.',
      answer: false,
      explanation: 'Zero net work means zero change in kinetic energy, so the **speed** is constant. The **direction** can still change. A car rounding a curve at steady speed, or a satellite in a circular orbit, has zero net work done on it, yet its velocity vector keeps turning (there is a net centripetal force, perpendicular to the motion).',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Stopping distances',
      blocks: [
        {
          type: 'p',
          text: 'A car skids to a stop on level road with its wheels locked. The only horizontal force is kinetic friction $f_k = \\mu_k n = \\mu_k mg$ (here the normal force $n$ equals $mg$ because the road is level and nothing else pushes vertically). The work–energy theorem gives the stopping distance in one line.',
        },
        {
          type: 'derivation',
          title: 'Skid from $25\\,\\text{m/s}$ on dry asphalt, $\\mu_k = 0.70$, $g = 9.80\\,\\text{m/s}^2$',
          steps: [
            { tex: 'W_{\\text{net}} = W_f = -\\mu_k m g\\,d', why: 'Gravity and the normal force are perpendicular to the motion and do no work. Friction opposes the motion over distance $d$.' },
            { tex: '-\\mu_k m g\\,d = 0 - \\tfrac12 m v_0^2', why: 'Work–energy theorem with final speed zero.' },
            { tex: 'd = \\frac{v_0^2}{2\\mu_k g}', why: 'The mass cancels: a heavy truck and a light car with the same tires and speed skid the same distance.' },
            { tex: 'd = \\frac{(25\\,\\text{m/s})^2}{2(0.70)(9.80\\,\\text{m/s}^2)} = 45.6\\,\\text{m}', why: 'Units: $\\text{m}^2/\\text{s}^2 \\div \\text{m/s}^2 = \\text{m}$.' },
          ],
          result: 'On a wet road ($\\mu_k \\approx 0.40$) the same stop takes $79.7\\,\\text{m}$. At $50\\,\\text{m/s}$ on dry road it takes $182\\,\\text{m}$, four times as far.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 200],
          xStep: 5,
          yStep: 25,
          height: 260,
          functions: [
            { expr: 'x^2/(2*0.7*9.8)', label: 'dry asphalt, $\\mu_k = 0.70$', color: 'gray', dashed: true },
            { expr: 'x^2/(2m*9.8)', label: 'your road surface', color: 'blue' },
          ],
          points: [{ x: 'v', y: 'v^2/(2m*9.8)', color: 'red' }],
          sliders: [
            { name: 'm', min: 0.1, max: 1, step: 0.05, value: 0.4, label: 'coefficient of kinetic friction $\\mu_k$' },
            { name: 'v', min: 0, max: 40, step: 0.5, value: 25, label: 'initial speed $v_0$ (m/s)' },
          ],
          readouts: [{ label: 'stopping distance $d = v_0^2/(2\\mu_k g) =$', expr: 'v^2/(2m*9.8)', digits: 1 }],
          caption: 'Horizontal axis: initial speed (m/s). Vertical: skid distance (m). Each curve is a parabola, the signature of $v^2$. Try $\\mu_k = 0.10$ (ice): at $25\\,\\text{m/s}$ you need over $300\\,\\text{m}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'A force is not needed to keep moving',
          text: 'Once the driver stops pressing the accelerator, the car does not stop because "its force ran out". It coasts until friction and drag do enough negative work to remove all of its kinetic energy. Motion needs no force; *changes* in speed need net work.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A supply truck traveling at $22.0\\,\\text{m/s}$ locks its brakes on a wet road with $\\mu_k = 0.450$. How far does it skid? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Friction\'s work removes all the kinetic energy: $\\mu_k m g\\,d = \\tfrac12 m v_0^2$.',
      answer: '22^2/(2*0.45*9.8)',
      answerTex: '54.9\\,\\text{m}',
      tolerance: 0.4,
      label: '$d =$',
      unit: 'm',
      explanation: '$d = \\dfrac{v_0^2}{2\\mu_k g} = \\dfrac{(22.0)^2}{2(0.450)(9.80)} = \\dfrac{484}{8.82} \\approx 54.9\\,\\text{m}$. The truck\'s mass cancels. Forgetting the 2 gives $110\\,\\text{m}$, and using $v_0$ instead of $v_0^2$ gives a nonsensical $2.49\\,\\text{m}$ (check the units: it is not even a length).',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Energy shortcuts with variable forces',
      blocks: [
        {
          type: 'p',
          text: 'The theorem shines when forces vary. A toy launcher compresses a spring ($k = 500\\,\\text{N/m}$) by $0.10\\,\\text{m}$ behind a $0.20\\,\\text{kg}$ ball on a frictionless track. With forces alone you would have to solve $m\\ddot x = -kx$. With energy you need only the spring\'s work from the previous lesson.',
        },
        {
          type: 'derivation',
          title: 'Launch speed of the ball',
          steps: [
            { tex: 'W_s = \\tfrac12 k x_i^2 - \\tfrac12 k x_f^2 = \\tfrac12(500)(0.10)^2 - 0 = 2.5\\,\\text{J}', why: 'The ball leaves the spring at its natural length, $x_f = 0$. The spring pushes along the motion, so its work is positive.' },
            { tex: 'W_{\\text{net}} = W_s = \\tfrac12 m v_f^2 - 0', why: 'Gravity and the normal force are perpendicular to the level track; the ball starts at rest.' },
            { tex: 'v_f = \\sqrt{\\frac{2W_s}{m}} = \\sqrt{\\frac{2(2.5)}{0.20}} = 5.0\\,\\text{m/s}', why: 'Solve for the final speed.' },
          ],
          result: 'The ball leaves at $5.0\\,\\text{m/s}$. The same idea gives the speed of the box from the previous lesson: $W_{\\text{net}} = 72.1\\,\\text{J}$ on $5.0\\,\\text{kg}$ from rest gives $v = \\sqrt{2(72.1)/5.0} = 5.37\\,\\text{m/s}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Checking the theorem in a simulation',
          text: 'A game engine steps $F = ma$ forward in small time steps and never uses energy at all. If you add up $F\\,\\Delta x$ along the way, the total matches the kinetic energy gained, up to the step error. That makes the work–energy theorem a handy unit test for an integrator.',
        },
        {
          type: 'code',
          title: 'spring_launch.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    const double m = 0.20, k = 500.0;  // kg, N/m
    const double dt = 1e-6;            // s
    double x = -0.10, v = 0.0;         // start compressed 10 cm, at rest
    double W = 0.0;                    // running total of the spring's work

    while (x < 0.0) {                  // the ball leaves the spring at x = 0
        double F = -k * x;             // Hooke's law, restoring force
        double xOld = x;
        v += (F / m) * dt;             // semi-implicit Euler: velocity first,
        x += v * dt;                   // then position with the new velocity
        W += F * (x - xOld);           // work on this step: F * dx
    }
    double K = 0.5 * m * v * v;
    std::printf("work by spring  W = %.4f J\\n", W);
    std::printf("kinetic energy  K = %.4f J\\n", K);
    std::printf("launch speed    v = %.4f m/s\\n", v);
}`,
          output: `work by spring  W = 2.5001 J
kinetic energy  K = 2.5000 J
launch speed    v = 5.0000 m/s`,
          annotations: [
            { lines: 9, text: 'Step until the ball reaches the spring\'s natural length.' },
            { lines: '12-13', text: '[[semi-implicit-euler|Semi-implicit Euler]], the update most game engines use.' },
            { lines: 14, text: 'Accumulate $F\\,\\Delta x$, a Riemann sum for $\\int F\\,dx$. It uses the force at the start of each step, so it slightly overestimates: $2.5001$ instead of $2.5$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Two carts start at rest on a frictionless track. Cart B has twice the mass of cart A. You push each with the **same constant force** over the **same distance**. Compare their kinetic energies at the end.',
      options: [
        { text: 'They have equal kinetic energies', correct: true, why: 'Same force over the same distance means the same work, $W = Fd$. By the work–energy theorem, the same work gives the same $\\Delta K$.' },
        { text: 'A has twice the kinetic energy of B', why: 'A is faster, but $K = \\tfrac12 mv^2$ also involves the mass. A\'s larger $v^2$ exactly compensates for its smaller mass.' },
        { text: 'B has twice the kinetic energy of A', why: 'More mass does not mean more energy here. The energy given to each cart is the work done on it, and that is the same.' },
        { text: 'A has $\\sqrt2$ times the kinetic energy of B', why: 'A\'s **speed** is $\\sqrt2$ times B\'s, but the kinetic energies are equal. Do not mix up $v$ and $K$.' },
      ],
      explanation: 'Think in terms of work, not acceleration: $W = Fd$ is the same for both, so $\\Delta K$ is the same. The lighter cart ends up faster ($v_A = \\sqrt2\\,v_B$) but with the same kinetic energy. (If you pushed each for the same *time* instead, they would get the same momentum, a different story you will meet in the momentum unit.)',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Power: how fast work is done',
      blocks: [
        {
          type: 'p',
          text: 'Two soldiers carry identical ammo crates up the same stairwell; one takes 10 s, the other 30 s. They do the same work, but the first does it three times as fast. The rate of doing work is [[phys-power|power]].',
        },
        {
          type: 'definition',
          term: 'Power',
          text: 'The average power over a time $\\Delta t$ is $P_{\\text{avg}} = \\dfrac{W}{\\Delta t}$, and the instantaneous power is $P = \\dfrac{dW}{dt}$. The SI unit is the **watt**: $1\\,\\text{W} = 1\\,\\text{J/s}$. One horsepower is $746\\,\\text{W}$.',
        },
        {
          type: 'derivation',
          title: 'Power delivered by a force: $P = \\vec F \\cdot \\vec v$',
          steps: [
            { tex: 'dW = \\vec F \\cdot d\\vec r', why: 'Work done by the force during a tiny displacement $d\\vec r$.' },
            { tex: 'P = \\frac{dW}{dt} = \\vec F \\cdot \\frac{d\\vec r}{dt}', why: 'Divide by the tiny time $dt$ it takes (the force is constant over that instant).' },
            { tex: 'P = \\vec F \\cdot \\vec v = F v \\cos\\theta', why: 'The derivative of position is the [[velocity]].' },
          ],
          result: 'A force does work at a rate equal to force times the velocity component along it. Applied to the net force, $P_{\\text{net}} = dK/dt$.',
        },
        {
          type: 'derivation',
          title: 'A hoist lifts a 500 kg crate at a steady 0.80 m/s ($g = 9.80\\,\\text{m/s}^2$)',
          steps: [
            { tex: 'T = mg = (500)(9.80) = 4900\\,\\text{N}', why: 'Constant velocity: zero acceleration, so the cable tension balances the weight.' },
            { tex: 'P = T v = (4900\\,\\text{N})(0.80\\,\\text{m/s}) = 3920\\,\\text{W}', why: 'Tension and velocity both point up: $\\theta = 0$.' },
            { tex: '= 3.92\\,\\text{kW} \\approx 5.3\\,\\text{hp}', why: 'Divide by $746\\,\\text{W/hp}$.' },
          ],
          result: 'The motor must deliver at least $3.9\\,\\text{kW}$ to the cable, more in practice because no motor is 100% efficient.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Energy is power times time',
          text: 'Since $P = dW/dt$, the work done is $W = \\int P\\,dt$: the area under a power-versus-time graph. That is why electricity is billed in kilowatt-hours: $1\\,\\text{kWh} = (1000\\,\\text{W})(3600\\,\\text{s}) = 3.6\\,\\text{MJ}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A $75.0\\,\\text{kg}$ soldier climbs a $12.0\\,\\text{m}$ rope at a steady pace in $9.00\\,\\text{s}$. What average power does she deliver to raise her body? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'The work against gravity is $mgh$. Divide by the time.',
      answer: '75*9.8*12/9',
      answerTex: '980\\,\\text{W}',
      tolerance: 8,
      label: '$P_{\\text{avg}} =$',
      unit: 'W',
      explanation: 'Climbing at steady speed, she must supply work equal to the gain in height energy, $W = mgh = (75.0)(9.80)(12.0) = 8820\\,\\text{J}$. Then $P_{\\text{avg}} = 8820\\,\\text{J}/9.00\\,\\text{s} = 980\\,\\text{W}$, about $1.3\\,\\text{hp}$. Forgetting $g$ gives $100$, which has units of $\\text{kg}\\cdot\\text{m/s}$, not watts.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Engine power and top speed',
      blocks: [
        {
          type: 'p',
          text: 'An engine is better described by its **power** than by a force. Through the gears, a car\'s wheels can push with a large force at low speed or a smaller force at high speed, and the product $F_{\\text{drive}} v$ is limited by the engine\'s power $P$. So the available drive force is $F_{\\text{drive}} = P/v$ (until the tires\' grip caps it at low speed).',
        },
        {
          type: 'p',
          text: 'At top speed the car no longer accelerates, so the drive force balances the resistive forces: air drag $\\tfrac12 \\rho C_d A\\,v^2$ and rolling resistance $F_{\\text{roll}}$. Multiplying by $v$ gives the power needed to hold speed $v$:',
        },
        { type: 'math', tex: 'P_{\\text{req}}(v) = \\tfrac12 \\rho C_d A\\,v^3 + F_{\\text{roll}}\\,v', caption: 'Top speed is where the engine\'s power equals $P_{\\text{req}}$.' },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 400],
          xStep: 10,
          yStep: 50,
          height: 270,
          functions: [{ expr: `(${A}x^3 + ${B}x)/1000`, label: 'power needed to hold speed $v$ (kW)' }],
          hlines: [{ y: 'P', color: 'red', label: 'engine power' }],
          vlines: [{ x: VTOP, color: 'green', label: 'top speed' }],
          points: [{ x: VTOP, y: 'P', color: 'green' }],
          sliders: [{ name: 'P', min: 20, max: 380, step: 5, value: 100, label: 'power at the wheels $P$ (kW)' }],
          readouts: [
            { label: 'top speed $v_{\\text{top}} =$', expr: VTOP, digits: 1 },
            { label: 'in km/h:', expr: `3.6*(${VTOP})`, digits: 0 },
          ],
          caption: 'A $1500\\,\\text{kg}$ car with $\\tfrac12\\rho C_d A = 0.396\\,\\text{kg/m}$ and $F_{\\text{roll}} = 147\\,\\text{N}$. Horizontal axis: speed (m/s). Doubling the power from $100$ to $200\\,\\text{kW}$ raises the top speed only from $61$ to $78\\,\\text{m/s}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why top speed grows like the cube root of power',
          text: 'At high speed the $v^3$ drag term dominates, so $P \\approx \\tfrac12 \\rho C_d A\\,v_{\\text{top}}^3$ and $v_{\\text{top}} \\approx \\left(\\frac{2P}{\\rho C_d A}\\right)^{1/3}$. Drag *force* grows like $v^2$, and you must also supply it *faster* (another factor of $v$). To go 26% faster you need twice the power: $2^{1/3} \\approx 1.26$.',
        },
        {
          type: 'p',
          text: 'Power also controls acceleration. From rest with constant net power, $dK/dt = P$ gives $K = Pt$, so $v(t) = \\sqrt{2Pt/m}$: fast at first, then ever slower gains. The simulation below steps a car with $F = \\min(P/v, \\text{grip}) - \\text{drag} - \\text{rolling}$, the same model many arcade racing games start from.',
        },
        {
          type: 'code',
          title: 'car_power.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>

int main() {
    const double m = 1500.0;       // kg
    const double P = 100e3;        // engine power delivered to the wheels, W
    const double grip = 0.9 * m * 9.8;  // most force the tires can transmit, N
    const double cAir = 0.396;     // (1/2) rho Cd A, kg/m
    const double fRoll = 147.0;    // rolling resistance, N
    const double dt = 0.001;       // s

    double v = 0.0, t = 0.0;
    int next = 5;
    while (t < 120.0) {
        double drive = std::min(grip, P / std::max(v, 0.1));  // F = P / v, capped by grip
        double Fnet = drive - cAir * v * v - fRoll;
        v += Fnet / m * dt;
        t += dt;
        if (t >= next - 1e-9) {
            std::printf("t = %3d s   v = %5.1f m/s\\n", next, v);
            next *= 2;
        }
    }
}`,
          output: `t =   5 s   v =  24.1 m/s
t =  10 s   v =  33.9 m/s
t =  20 s   v =  45.3 m/s
t =  40 s   v =  55.5 m/s
t =  80 s   v =  60.5 m/s`,
          annotations: [
            { lines: 7, text: 'Tires can push at most $\\mu mg$ with $\\mu = 0.9$: about $13\\,\\text{kN}$. Below $v = P/\\text{grip} \\approx 7.6\\,\\text{m/s}$ the car is traction-limited, not power-limited.' },
            { lines: 15, text: '`std::max(v, 0.1)` avoids dividing by zero at the start.' },
            { lines: 16, text: 'Net force: drive minus quadratic drag minus rolling resistance.' },
            { lines: '19-22', text: 'Print at $t = 5, 10, 20, 40, 80\\,\\text{s}$. The speed creeps toward the $61.3\\,\\text{m/s}$ top speed from the graph.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'expr',
      prompt: 'A vehicle of mass $m$ starts from rest and receives a constant net power $P$ (ignore losses). Using $\\dfrac{dK}{dt} = P$, find its speed as a function of time.',
      hint: 'Integrate: $K(t) = Pt$. Then solve $\\tfrac12 m v^2 = Pt$ for $v$.',
      answer: 'sqrt(2P*t/m)',
      answerTex: 'v(t) = \\sqrt{\\dfrac{2Pt}{m}}',
      variables: ['P', 't', 'm'],
      domain: [0.5, 3],
      label: '$v(t) =$',
      explanation: 'With $K(0) = 0$, integrating $dK/dt = P$ gives $K = Pt$. Then $\\tfrac12 mv^2 = Pt$, so $v = \\sqrt{2Pt/m}$. Speed grows like $\\sqrt t$: each extra second of full power adds less speed than the last, because the same power buys less force at higher speed ($F = P/v$).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A sports car delivers $80.0\\,\\text{kW}$ to its wheels. Ignore rolling resistance and model drag as $F = cv^2$ with $c = \\tfrac12 \\rho C_d A = 0.400\\,\\text{kg/m}$. What is its top speed? Give 3 significant figures.',
      hint: 'At top speed the drive force equals the drag, so $P = (cv^2)v = cv^3$.',
      answer: '(80000/0.4)^(1/3)',
      answerTex: '58.5\\,\\text{m/s}',
      tolerance: 0.4,
      label: '$v_{\\text{top}} =$',
      unit: 'm/s',
      explanation: '$P = cv^3$ gives $v = (P/c)^{1/3} = (80\\,000/0.400)^{1/3} = (2.00 \\times 10^5)^{1/3} \\approx 58.5\\,\\text{m/s}$ (about $211\\,\\text{km/h}$). Writing $P = cv^2$ (forgetting that power is force *times speed*) gives $\\sqrt{2.00\\times10^5} = 447\\,\\text{m/s}$, faster than sound.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A $1200\\,\\text{kg}$ car speeds up from $10\\,\\text{m/s}$ to $20\\,\\text{m/s}$. A student finds the net work required. Tap the first line that is wrong.',
      lines: [
        '$W_{\\text{net}} = \\Delta K$',
        '$\\Delta K = \\tfrac12 m (v_f - v_i)^2$',
        '$= \\tfrac12 (1200)(20 - 10)^2$',
        '$= 6.0 \\times 10^{4}\\,\\text{J}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 squares the change in speed instead of taking the change in the square. Correctly, $\\Delta K = \\tfrac12 m(v_f^2 - v_i^2) = \\tfrac12(1200)(400 - 100) = 1.8 \\times 10^{5}\\,\\text{J}$, three times the student\'s answer. Going from $10$ to $20\\,\\text{m/s}$ costs three times as much energy as going from $0$ to $10\\,\\text{m/s}$, even though the speed gain is the same.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the key relations of this lesson.',
      template: 'The work–energy theorem says the ___ work equals the change in kinetic energy. Power is the rate of doing work, and for a force acting on a moving object $P = $ ___. At a car\'s top speed with air drag dominant, the required power grows like ___.',
      blanks: [{ answers: ['net'] }, { answers: ['$\\vec F \\cdot \\vec v$'] }, { answers: ['$v^3$'] }],
      wordBank: ['net', 'gravitational', '$\\vec F \\cdot \\vec v$', '$\\vec F \\times \\vec v$', '$v^3$', '$v^2$', '$\\tfrac12 mv^2$'],
      explanation: 'Only the **net** work (all forces together) equals $\\Delta K$. Power from a force is the dot product $\\vec F \\cdot \\vec v$, a scalar like work. Drag force grows like $v^2$, and power is force times speed, so the power to overcome drag grows like $v^3$.',
    },
  ],
  takeaways: [
    'Kinetic energy $K = \\tfrac12 mv^2$ is a scalar that depends on speed squared: double the speed, four times the energy.',
    'The work–energy theorem $W_{\\text{net}} = \\Delta K$ is Newton\'s second law integrated over position (via $dv/dt = v\\,dv/dx$).',
    'Use it to get speeds and distances without time: a skid on level ground stops in $d = v_0^2/(2\\mu_k g)$, independent of mass.',
    'Power is $P = dW/dt = \\vec F \\cdot \\vec v$, measured in watts ($1\\,\\text{hp} = 746\\,\\text{W}$); work is the area under $P(t)$.',
    'At top speed, engine power balances $\\tfrac12\\rho C_d A\\,v^3 + F_{\\text{roll}}v$, so top speed grows only like $P^{1/3}$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1 — Chapter 7: Work and Kinetic Energy',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 7.2–7.4 cover kinetic energy, the work–energy theorem and power, with a derivation matching this lesson.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The energy week includes short lectures on the work–energy theorem and power with worked problems.',
    },
    {
      title: 'Wikipedia — Kinetic energy',
      url: 'https://en.wikipedia.org/wiki/Kinetic_energy',
      source: 'wikipedia',
      note: 'Background on the history of the idea and its relativistic generalization.',
    },
  ],
};
