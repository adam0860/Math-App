import type { Lesson, Plot3DBlock } from '../../types';

// ── Expression helpers ──────────────────────────────────────────────────────
type V = [string, string, string];
const add = (a: V, b: V): V => [`${a[0]} + ${b[0]}`, `${a[1]} + ${b[1]}`, `${a[2]} + ${b[2]}`];
const scale = (a: V, k: string): V => [`(${k})*(${a[0]})`, `(${k})*(${a[1]})`, `(${k})*(${a[2]})`];
const dot = (a: V, b: V) => `(${a[0]})*(${b[0]}) + (${a[1]})*(${b[1]}) + (${a[2]})*(${b[2]})`;
const len = (a: V) => `sqrt(${dot(a, a)})`;

// Drone: r(s) = <(1 + s/4)cos s, (1 + s/4)sin s, 0.3 s>, a widening, climbing spiral.
const DP: V = ['(1 + s/4)cos(s)', '(1 + s/4)sin(s)', '0.3s'];
const DV: V = ['0.25cos(s) - (1 + s/4)sin(s)', '0.25sin(s) + (1 + s/4)cos(s)', '0.3'];
const DA: V = ['-0.5sin(s) - (1 + s/4)cos(s)', '0.5cos(s) - (1 + s/4)sin(s)', '0'];
const aT_T = scale(DV, `(${dot(DV, DA)})/(${dot(DV, DV)})`); // (a·v / |v|^2) v
const aN_N: V = [`${DA[0]} - (${aT_T[0]})`, `${DA[1]} - (${aT_T[1]})`, `${DA[2]} - (${aT_T[2]})`];
const droneCurve: NonNullable<Plot3DBlock['curves']>[number] = { x: '(1 + t/4)cos(t)', y: '(1 + t/4)sin(t)', z: '0.3t', t: [0, '4pi'], color: 'blue', label: 'flight path' };

// Projectile: speed 25 m/s, compass direction 35°, elevation a degrees, crosswind w m/s² along y.
const al = '(a*pi/180)';
const Tf = `(50sin${al}/9.8)`;
const tau = `min(s, ${Tf})`;
const px = (q: string) => `25cos${al}cos(35pi/180)*${q}`;
const py = (q: string) => `25cos${al}sin(35pi/180)*${q} + 0.5w*(${q})^2`;
const pz = (q: string) => `25sin${al}*${q} - 4.9(${q})^2`;

// Orbit: semi-major axis 2.2 Earth radii, eccentricity 0.3, inclination 50°.
// Slider m = mean anomaly (uniform in time); E ≈ eccentric anomaly by a 3-term series.
const E = '(m + 0.3sin(m) + 0.045sin(2m) + 0.003375*(3sin(3m) - sin(m)))';
const ob = '2.0987';
const ox = `2.2(cos${E} - 0.3)`;
const oyPlane = `${ob}*sin${E}`;
const vx = `-2.2sin${E}/(1 - 0.3cos${E})`;
const vyPlane = `${ob}*cos${E}/(1 - 0.3cos${E})`;

export const lesson: Lesson = {
  id: 'calc3-motion-in-space',
  title: 'Motion in Space',
  summary: 'Velocity, speed and acceleration of a moving point in 3D; projectiles with wind; splitting acceleration into speeding-up and turning parts; and why orbits are flat.',
  minutes: 18,
  objectives: [
    'Compute velocity, speed and acceleration from a position function $\\vec r(t)$',
    'Recover position from acceleration using initial conditions, and connect to $\\vec F = m\\vec a$',
    'Model 3D projectile motion, including a constant crosswind, and find flight time and landing point',
    'Split acceleration into tangential and normal components $a_T$ and $a_N$',
    'Show that motion under a central force stays in a plane and explain Kepler\'s second law',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Velocity, speed and acceleration',
      blocks: [
        {
          type: 'p',
          text: 'Let $\\vec r(t)$ be the position of a moving object at time $t$: a drone, a particle in a simulation, a satellite. In Calculus I, [[velocity]] and [[acceleration]] were the first and second derivatives of a position on a line. In space they are the same derivatives, now vectors:',
        },
        {
          type: 'math',
          tex: '\\vec v(t) = \\vec r\\,\'(t), \\qquad \\text{speed} = |\\vec v(t)| = \\frac{ds}{dt}, \\qquad \\vec a(t) = \\vec v\\,\'(t) = \\vec r\\,\'\'(t)',
          caption: 'Velocity is tangent to the path and its length is the speed, the rate at which arc length $s$ is covered. Speed is a scalar; velocity and acceleration are vectors.',
        },
        {
          type: 'plot3d',
          x: [-4.5, 4.5],
          y: [-4.5, 4.5],
          z: [0, 4],
          equal: true,
          curves: [droneCurve],
          points: [{ x: DP[0], y: DP[1], z: DP[2], color: 'gray' }],
          vectors: [
            { from: DP, to: add(DP, DV), color: 'red', label: 'v' },
            { from: DP, to: add(DP, DA), color: 'green', label: 'a' },
          ],
          sliders: [{ name: 's', min: 0, max: 12.5, step: 0.02, value: 6, label: 'time $t$', play: true, speed: 1.2 }],
          readouts: [
            { label: 'speed $|\\vec v| =$', expr: len(DV) },
            { label: '$|\\vec a| =$', expr: len(DA) },
          ],
          view: { azimuth: 30, elevation: 30 },
          caption: 'A drone flies the widening spiral $\\vec r(t) = \\langle (1 + \\tfrac t4)\\cos t, (1 + \\tfrac t4)\\sin t, 0.3t \\rangle$. Velocity (red) is always tangent to the path. Acceleration (green) points mostly toward the inside of the turn, not along the path.',
        },
        {
          type: 'derivation',
          title: '$\\vec r(t) = \\langle t^2,\\ e^t,\\ te^t \\rangle$ at $t = 0$',
          steps: [
            { tex: '\\vec v(t) = \\langle 2t,\\ e^t,\\ (1 + t)e^t \\rangle', why: 'Differentiate each component; the product rule gives $(te^t)\' = e^t + te^t$.' },
            { tex: '\\vec v(0) = \\langle 0, 1, 1 \\rangle, \\quad |\\vec v(0)| = \\sqrt2', why: 'Evaluate, then take the length.' },
            { tex: '\\vec a(t) = \\langle 2,\\ e^t,\\ (2 + t)e^t \\rangle, \\quad \\vec a(0) = \\langle 2, 1, 2 \\rangle', why: 'Differentiate the velocity: $((1 + t)e^t)\' = e^t + (1 + t)e^t$.' },
          ],
          result: 'At $t = 0$ the object moves at speed $\\sqrt2$ in the direction $\\langle 0, 1, 1 \\rangle$ while accelerating toward $\\langle 2, 1, 2 \\rangle$. Velocity and acceleration need not be parallel, and in general they are not.',
        },
      ],
    },
    // 2
    {
      kind: 'numeric',
      prompt: 'A particle has position $\\vec r(t) = \\langle t^3,\\ 3t^2,\\ 6t \\rangle$ (meters, seconds). Find its speed at $t = 2$.',
      label: 'speed $=$',
      unit: 'm/s',
      answer: '18',
      explanation: '$\\vec v(t) = \\langle 3t^2, 6t, 6 \\rangle$, so $\\vec v(2) = \\langle 12, 12, 6 \\rangle$ and $|\\vec v(2)| = \\sqrt{144 + 144 + 36} = \\sqrt{324} = 18$ m/s. Speed is the length of velocity, so square, add and take the root.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'From forces to paths',
      blocks: [
        {
          type: 'p',
          text: 'Newton\'s second law $\\vec F = m\\vec a$ runs in both directions. Given a path, it tells you the force needed to follow it. Given the forces, it gives the acceleration, and two integrations with **initial conditions** produce the path. Each integration adds one constant vector, fixed by the initial velocity and the initial position.',
        },
        {
          type: 'derivation',
          title: 'Find $\\vec r(t)$ if $\\vec a(t) = \\langle 4t,\\ 6t,\\ 1 \\rangle$, $\\vec v(0) = \\langle 1, -1, 1 \\rangle$, $\\vec r(0) = \\vec 0$',
          steps: [
            { tex: '\\vec v(t) = \\langle 2t^2,\\ 3t^2,\\ t \\rangle + \\vec C_1', why: 'Integrate the acceleration component by component.' },
            { tex: '\\vec v(0) = \\vec C_1 = \\langle 1, -1, 1 \\rangle', why: 'Every term without a constant vanishes at $t = 0$.' },
            { tex: '\\vec v(t) = \\langle 2t^2 + 1,\\ 3t^2 - 1,\\ t + 1 \\rangle', why: 'Substitute $\\vec C_1$.' },
            { tex: '\\vec r(t) = \\left\\langle \\tfrac23 t^3 + t,\\ t^3 - t,\\ \\tfrac12 t^2 + t \\right\\rangle + \\vec C_2', why: 'Integrate again.' },
            { tex: '\\vec r(0) = \\vec C_2 = \\vec 0', why: 'Apply the initial position.' },
          ],
          result: '$\\vec r(t) = \\left\\langle \\tfrac23 t^3 + t,\\ t^3 - t,\\ \\tfrac12 t^2 + t \\right\\rangle$.',
        },
        {
          type: 'derivation',
          title: 'The force behind uniform circular motion',
          steps: [
            { tex: '\\vec r(t) = \\langle R\\cos\\omega t,\\ R\\sin\\omega t,\\ 0 \\rangle', why: 'A circle of radius $R$ traversed at constant angular speed $\\omega$.' },
            { tex: '\\vec v(t) = \\langle -R\\omega\\sin\\omega t,\\ R\\omega\\cos\\omega t,\\ 0 \\rangle, \\quad |\\vec v| = R\\omega', why: 'Chain rule; the speed is constant.' },
            { tex: '\\vec a(t) = -\\omega^2\\langle R\\cos\\omega t,\\ R\\sin\\omega t,\\ 0 \\rangle = -\\omega^2\\,\\vec r(t)', why: 'Differentiate again: the acceleration points from the object back to the center.' },
            { tex: '|\\vec F| = m|\\vec a| = mR\\omega^2 = \\frac{m|\\vec v|^2}{R}', why: 'Newton\'s second law, using $\\omega = |\\vec v|/R$.' },
          ],
          result: 'This is the [[phys-centripetal-acceleration|centripetal acceleration]] $v^2/R$ from Physics I, now derived by differentiating a vector function. Constant speed does **not** mean zero acceleration.',
        },
      ],
    },
    // 4
    {
      kind: 'expr',
      prompt: 'A particle has $\\vec a(t) = \\langle e^t,\\ \\sin t,\\ 2 \\rangle$, $\\vec v(0) = \\langle 1, 0, 0 \\rangle$ and $\\vec r(0) = \\langle 0, 0, 0 \\rangle$. Find the $y$-component of its position, $y(t)$.',
      hint: 'Integrate $\\sin t$ to get $v_y$, and use $v_y(0) = 0$. Then integrate again with $y(0) = 0$.',
      label: '$y(t) =$',
      variables: ['t'],
      answer: 't - sin(t)',
      answerTex: 't - \\sin t',
      explanation: '$v_y(t) = -\\cos t + C$ and $v_y(0) = -1 + C = 0$, so $C = 1$ and $v_y = 1 - \\cos t$. Then $y(t) = t - \\sin t + D$ with $y(0) = 0 - 0 + D = 0$, so $y(t) = t - \\sin t$. The common slip is to assume $C = 0$ because "the initial velocity is zero": $-\\cos 0 = -1$, not $0$.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Projectiles in three dimensions',
      blocks: [
        {
          type: 'p',
          text: 'Ignoring air resistance, the only force on a thrown grenade or a mortar round is gravity, so with $z$ pointing up, $\\vec a = \\langle 0, 0, -g \\rangle$ with $g \\approx 9.8$ m/s². Integrating twice with launch point $\\vec r_0$ and launch velocity $\\vec v_0$:',
        },
        {
          type: 'theorem',
          name: 'Projectile motion with constant acceleration',
          tex: '\\vec r(t) = \\vec r_0 + \\vec v_0\\,t + \\tfrac12\\,\\vec a\\,t^2',
          text: 'Here $\\vec a$ is any constant acceleration: $\\langle 0, 0, -g \\rangle$ for gravity alone. A launch at speed $v_0$, elevation angle $\\alpha$ above the ground and compass direction $\\beta$ has $\\vec v_0 = v_0\\langle \\cos\\alpha\\cos\\beta,\\ \\cos\\alpha\\sin\\beta,\\ \\sin\\alpha \\rangle$.',
        },
        {
          type: 'p',
          text: 'Gravity only touches $z$, so the horizontal motion is uniform and the path stays in the vertical plane containing $\\vec v_0$. The 2D formulas from [[projectile-motion]] carry over: from flat ground the flight time is $\\frac{2v_0\\sin\\alpha}{g}$. Below, a launcher fires at 25 m/s toward compass direction $35^\\circ$. Add a crosswind, modeled as a constant sideways acceleration $w$, and watch the ground track bend.',
        },
        {
          type: 'plot3d',
          x: [0, 55],
          y: [0, 60],
          z: [0, 32],
          curves: [
            { x: px('t'), y: py('t'), z: pz('t'), t: [0, Tf], color: 'red', label: 'trajectory' },
            { x: px('t'), y: py('t'), z: '0', t: [0, Tf], color: 'gray', dashed: true, label: 'ground track' },
          ],
          points: [{ x: px(tau), y: py(tau), z: pz(tau), color: 'red' }],
          sliders: [
            { name: 'a', min: 15, max: 75, step: 1, value: 40, label: 'elevation $\\alpha$ (degrees)' },
            { name: 'w', min: 0, max: 2, step: 0.1, value: 0, label: 'crosswind $w$ (m/s²)' },
            { name: 's', min: 0, max: 5, step: 0.02, value: 0, label: 'time $t$ (s)', play: true, speed: 1.25 },
          ],
          readouts: [
            { label: 'flight time $\\frac{2v_0\\sin\\alpha}{g} =$', expr: Tf },
            { label: 'landing distance $=$', expr: `sqrt((${px(Tf)})^2 + (${py(Tf)})^2)` },
            { label: 'max height $\\frac{(v_0\\sin\\alpha)^2}{2g} =$', expr: `(25sin${al})^2/19.6` },
          ],
          view: { azimuth: -55, elevation: 15 },
          caption: 'With $w = 0$ the ground track is a straight line: the shot stays in a vertical plane. With wind the path is still a parabola in a plane, but that plane tilts, because $\\vec r_0 + \\vec v_0 t + \\frac12\\vec a t^2$ always lies in the plane through $\\vec r_0$ spanned by $\\vec v_0$ and $\\vec a$.',
        },
        {
          type: 'derivation',
          title: 'Launch from the origin with $\\vec v_0 = \\langle 12, 16, 19.6 \\rangle$ m/s',
          steps: [
            { tex: '\\vec r(t) = \\langle 12t,\\ 16t,\\ 19.6t - 4.9t^2 \\rangle', why: 'Apply $\\vec r_0 + \\vec v_0 t + \\frac12\\vec a t^2$ with $\\vec r_0 = \\vec 0$ and $\\frac12 g = 4.9$.' },
            { tex: '19.6t - 4.9t^2 = 4.9t(4 - t) = 0 \\implies t = 4 \\text{ s}', why: 'It lands when $z = 0$ again (the root $t = 0$ is the launch).' },
            { tex: '\\vec r(4) = \\langle 48,\\ 64,\\ 0 \\rangle', why: 'Substitute the flight time into the horizontal components.' },
            { tex: '\\text{range} = \\sqrt{48^2 + 64^2} = 80 \\text{ m}', why: 'Horizontal distance from the launch point.' },
          ],
          result: 'Peak height: $z\'(t) = 19.6 - 9.8t = 0$ at $t = 2$ s, where $z = 19.6$ m.',
        },
        {
          type: 'code',
          title: 'projectile.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <initializer_list>

struct Vec3 { double x, y, z; };
Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
Vec3 operator*(double s, Vec3 v) { return {s * v.x, s * v.y, s * v.z}; }

int main() {
    const Vec3 g{0, 0, -9.8};
    const Vec3 v0{12, 16, 19.6};
    for (double dt : {0.1, 0.01, 0.001}) {
        Vec3 p{0, 0, 0}, v = v0;
        double t = 0;
        Vec3 prev = p;
        while (p.z >= 0) {
            prev = p;
            v = v + dt * g;          // v += a dt
            p = p + dt * v;          // r += v dt  (semi-implicit Euler)
            t += dt;
        }
        double f = prev.z / (prev.z - p.z);   // where the last step crossed z = 0
        double tLand = t - dt + f * dt;
        std::printf("dt=%.3f  lands at t=%.4f  (%.4f, %.4f)\\n", dt, tLand,
                    prev.x + f * (p.x - prev.x), prev.y + f * (p.y - prev.y));
    }
    std::printf("exact     lands at t=%.4f  (%.4f, %.4f)\\n", 4.0, 48.0, 64.0);
}`,
          output: `dt=0.100  lands at t=3.9000  (46.8000, 62.4000)
dt=0.010  lands at t=3.9900  (47.8800, 63.8400)
dt=0.001  lands at t=3.9990  (47.9880, 63.9840)
exact     lands at t=4.0000  (48.0000, 64.0000)`,
          annotations: [
            { lines: '17-18', text: 'The physics step of a game loop: two Riemann sums, one for $\\vec v = \\int \\vec a\\,dt$ and one for $\\vec r = \\int \\vec v\\,dt$.' },
            { lines: 21, text: 'The last step overshoots the ground; linear interpolation finds where the segment crossed $z = 0$.' },
            { lines: 23, text: 'The simulated shell lands exactly one time step early: this integrator loses $\\frac12 g\\,t\\,\\Delta t$ of height. Halving $\\Delta t$ halves the error (first-order accuracy).' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Real ballistics',
          text: 'Artillery fire-control and long-range rifle solvers start from this model and then add what it leaves out: drag that grows with speed, wind, air density, spin drift and Earth\'s rotation. With drag the acceleration depends on $\\vec v$, the equations have no closed-form solution, and the trajectory is integrated numerically, exactly like the loop above with a fancier $\\vec a$.',
        },
      ],
    },
    // 6
    {
      kind: 'numeric',
      prompt: 'A shell is fired from the origin over flat ground with $\\vec v_0 = \\langle 9,\\ 12,\\ 24.5 \\rangle$ m/s and $g = 9.8$ m/s² (no air resistance). How far from the launch point does it land?',
      hint: 'Solve $24.5t - 4.9t^2 = 0$ for the flight time first.',
      label: 'distance $=$',
      unit: 'm',
      answer: '75',
      explanation: 'The height is $z(t) = 24.5t - 4.9t^2 = 4.9t(5 - t)$, so it lands at $t = 5$ s. Then $x = 9 \\cdot 5 = 45$ m and $y = 12 \\cdot 5 = 60$ m, a horizontal distance of $\\sqrt{45^2 + 60^2} = 75$ m. (The horizontal launch speed is $\\sqrt{81 + 144} = 15$ m/s, and $15 \\cdot 5 = 75$ as well.)',
    },
    // 7
    {
      kind: 'mcq',
      prompt: 'A projectile is launched with velocity $\\vec v_0$ and feels gravity plus a constant crosswind, so $\\vec a = \\langle 0, w, -g \\rangle$ with $w \\ne 0$. Assume $\\vec v_0$ is not parallel to $\\vec a$. Which describes its path?',
      options: [
        { text: 'A parabola in a vertical plane', why: 'The wind pushes it sideways, so its horizontal motion is no longer along a fixed line and the plane cannot be vertical.' },
        { text: 'A twisted curve that lies in no plane', why: 'With a constant acceleration, $\\vec r(t) - \\vec r_0 = \\vec v_0 t + \\frac12\\vec a t^2$ is always a combination of the two fixed vectors $\\vec v_0$ and $\\vec a$.' },
        { text: 'A parabola in a tilted plane spanned by $\\vec v_0$ and $\\vec a$', correct: true, why: 'Every displacement is $t\\,\\vec v_0 + \\frac{t^2}{2}\\vec a$, so the path stays in that plane, and in it the curve is a parabola.' },
        { text: 'A straight line', why: 'Only if $\\vec v_0$ were parallel to $\\vec a$ (or zero) would the path be straight.' },
      ],
      explanation: '$\\vec r(t) = \\vec r_0 + t\\,\\vec v_0 + \\frac{t^2}{2}\\vec a$. The displacement from $\\vec r_0$ is a linear combination of $\\vec v_0$ and $\\vec a$, so the path lies in the plane through $\\vec r_0$ spanned by them. Gravity alone makes that plane vertical; a crosswind tilts it. Any constant acceleration gives a planar parabola.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Tangential and normal components of acceleration',
      blocks: [
        {
          type: 'p',
          text: 'Driving, you control acceleration with two inputs: the pedals change your **speed** and the steering wheel changes your **direction**. The TNB frame from the last lesson splits $\\vec a$ in exactly that way.',
        },
        {
          type: 'derivation',
          title: 'Splitting $\\vec a$ along $\\vec T$ and $\\vec N$',
          steps: [
            { tex: '\\vec v = v\\,\\vec T', why: 'Velocity is speed times direction; write $v = |\\vec v|$.' },
            { tex: '\\vec a = v\'\\,\\vec T + v\\,\\vec T\\,\'', why: 'Differentiate with the product rule.' },
            { tex: '\\vec T\\,\' = |\\vec T\\,\'|\\,\\vec N = \\kappa v\\,\\vec N', why: 'By definition $\\vec N = \\vec T\\,\'/|\\vec T\\,\'|$, and $\\kappa = |\\vec T\\,\'|/v$ gives $|\\vec T\\,\'| = \\kappa v$.' },
            { tex: '\\vec a = v\'\\,\\vec T + \\kappa v^2\\,\\vec N', why: 'Substitute. There is no $\\vec B$ component: acceleration always lies in the osculating plane.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Tangential and normal components',
          tex: 'a_T = v\' = \\frac{\\vec r\\,\' \\cdot \\vec r\\,\'\'}{|\\vec r\\,\'|}, \\qquad a_N = \\kappa v^2 = \\frac{|\\vec r\\,\' \\times \\vec r\\,\'\'|}{|\\vec r\\,\'|}, \\qquad a_T^2 + a_N^2 = |\\vec a|^2',
          text: 'The formulas in $\\vec r\\,\'$ and $\\vec r\\,\'\'$ come from dotting and crossing $\\vec a = v\'\\vec T + \\kappa v^2\\vec N$ with $\\vec v = v\\vec T$. These are the [[calc3-acceleration-components|tangential and normal components]] of acceleration.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the turning part grows like $v^2$',
          text: 'Two factors of $v$ multiply. Going faster, you reach the bend sooner, so the direction must change more per second; and the direction change itself is applied to a longer velocity vector. On a fixed curve, doubling the speed doubles each factor, so $a_N = \\kappa v^2$ quadruples. That is why highway ramps post speed limits and why sliding off a corner in a racing game happens so suddenly.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 360 215" xmlns="http://www.w3.org/2000/svg">
<path d="M20 200 Q170 180 330 40" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="80" font-size="13">path</text>
<line x1="187.0" y1="58.1" x2="221.4" y2="124.8" class="s-gray" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="187.0" y1="58.1" x2="138.1" y2="83.3" class="s-gray" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="172.5" y1="150.0" x2="214.3" y2="128.4" class="s-red" stroke-width="2.5"/><path d="M221.4,124.8 L215.0,132.4 L211.4,125.5 Z" class="f-red"/>
<line x1="172.5" y1="150.0" x2="141.7" y2="90.4" class="s-blue" stroke-width="2.5"/><path d="M138.1,83.3 L145.8,89.7 L138.8,93.3 Z" class="f-blue"/>
<line x1="172.5" y1="150.0" x2="185.7" y2="66.0" class="s-green" stroke-width="3"/><path d="M187.0,58.1 L189.4,67.8 L181.7,66.6 Z" class="f-green"/>
<circle cx="172.5" cy="150" r="4.5" fill="currentColor"/>
<text x="229" y="141" font-size="14" class="t-red">a<tspan font-size="10" dy="4">T</tspan><tspan dy="-4"> </tspan>T</text>
<text x="76" y="87" font-size="14" class="t-blue">a<tspan font-size="10" dy="4">N</tspan><tspan dy="-4"> </tspan>N</text>
<text x="195" y="58" font-size="15" font-weight="bold" class="t-green">a</text>
<text x="178" y="172" font-size="13">P</text>
<text x="10" y="20" font-size="12" class="t-red">a<tspan font-size="10" dy="4">T</tspan><tspan dy="-4">: speeding up or slowing down (gas / brake)</tspan></text>
<text x="10" y="38" font-size="12" class="t-blue">a<tspan font-size="10" dy="4">N</tspan><tspan dy="-4">: changing direction (steering)</tspan></text>
</svg>`,
          alt: 'A curved path with a point P. The acceleration vector a at P is the diagonal of a rectangle whose sides are a_T T along the tangent and a_N N toward the inside of the curve.',
          caption: 'The acceleration $\\vec a$ is the sum of a tangential part $a_T\\vec T$ (changing speed) and a normal part $a_N\\vec N$ (changing direction), which points toward the inside of the bend.',
          maxWidth: 440,
        },
        {
          type: 'plot3d',
          x: [-4.5, 4.5],
          y: [-4.5, 4.5],
          z: [0, 4],
          equal: true,
          curves: [droneCurve],
          points: [{ x: DP[0], y: DP[1], z: DP[2], color: 'gray' }],
          vectors: [
            { from: DP, to: add(DP, DA), color: 'green', label: 'a' },
            { from: DP, to: add(DP, aT_T), color: 'red' },
            { from: DP, to: add(DP, aN_N), color: 'blue' },
          ],
          sliders: [{ name: 's', min: 0, max: 12.5, step: 0.02, value: 6, label: 'time $t$', play: true, speed: 1.2 }],
          readouts: [
            { label: '$a_T =$', expr: `(${dot(DV, DA)})/${len(DV)}` },
            { label: '$a_N =$', expr: `sqrt(${dot(DA, DA)} - (${dot(DV, DA)})^2/(${dot(DV, DV)}))` },
          ],
          view: { azimuth: 30, elevation: 30 },
          caption: 'The drone again: $\\vec a$ (green) is the sum of $a_T\\vec T$ (red, along the path) and $a_N\\vec N$ (blue, toward the inside of the turn). Its speed creeps up slowly ($a_T$ small and positive), while most of its acceleration is the normal part that keeps it turning.',
        },
        {
          type: 'derivation',
          title: '$\\vec r(t) = \\langle t, t^2, t^3 \\rangle$ at $t = 1$',
          steps: [
            { tex: '\\vec r\\,\'(1) = \\langle 1, 2, 3 \\rangle, \\quad \\vec r\\,\'\'(1) = \\langle 0, 2, 6 \\rangle', why: '$\\vec r\\,\' = \\langle 1, 2t, 3t^2 \\rangle$, $\\vec r\\,\'\' = \\langle 0, 2, 6t \\rangle$.' },
            { tex: 'a_T = \\frac{0 + 4 + 18}{\\sqrt{14}} = \\frac{22}{\\sqrt{14}} \\approx 5.880', why: 'Dot product over the speed $\\sqrt{1 + 4 + 9}$.' },
            { tex: 'a_N = \\frac{|\\langle 6, -6, 2 \\rangle|}{\\sqrt{14}} = \\frac{\\sqrt{76}}{\\sqrt{14}} \\approx 2.330', why: 'The cross product was computed in the curvature lesson.' },
            { tex: 'a_T^2 + a_N^2 = \\frac{484 + 76}{14} = 40 = |\\langle 0, 2, 6 \\rangle|^2 \\ \\checkmark', why: 'The two components are perpendicular, so Pythagoras must hold.' },
          ],
        },
      ],
    },
    // 9
    {
      kind: 'numeric',
      prompt: 'For $\\vec r(t) = \\langle t^2,\\ 2t,\\ \\ln t \\rangle$, find the normal component of acceleration $a_N$ at $t = 1$.',
      hint: 'The speed is $|\\vec r\\,\'(t)| = 2t + \\frac1t$ (check it). Find $a_T = v\'$, then use $a_N = \\sqrt{|\\vec a|^2 - a_T^2}$.',
      label: '$a_N(1) =$',
      answer: '2',
      explanation: '$\\vec r\\,\' = \\langle 2t, 2, \\frac1t \\rangle$ and $|\\vec r\\,\'|^2 = 4t^2 + 4 + \\frac{1}{t^2} = \\left(2t + \\frac1t\\right)^2$, so $v = 2t + \\frac1t$ and $a_T = v\' = 2 - \\frac{1}{t^2} = 1$ at $t = 1$. Also $\\vec a = \\langle 2, 0, -\\frac{1}{t^2} \\rangle = \\langle 2, 0, -1 \\rangle$, so $|\\vec a|^2 = 5$ and $a_N = \\sqrt{5 - 1} = 2$. (The cross-product route: $\\langle 2, 2, 1 \\rangle \\times \\langle 2, 0, -1 \\rangle = \\langle -2, 4, -4 \\rangle$, length $6$, divided by $v = 3$, gives $2$ ✓.)',
    },
    // 10
    {
      kind: 'truefalse',
      prompt: 'If an object moves at constant speed, its acceleration is zero.',
      answer: false,
      explanation: 'Constant speed only makes $a_T = v\' = 0$. The normal part $a_N = \\kappa v^2$ is zero only on a straight path. A satellite in a circular orbit or a car on a roundabout at a steady 30 km/h is accelerating toward the center the whole time. Acceleration measures change in the **velocity vector**, including its direction.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Orbits: why planets and satellites move in a plane',
      blocks: [
        {
          type: 'p',
          text: 'Newton\'s law of gravitation gives the acceleration of a satellite at position $\\vec r$ (measured from Earth\'s center) as $\\vec a = -\\dfrac{GM}{|\\vec r|^3}\\,\\vec r$: it always points straight back at the center, the [[phys-gravitational-field|gravitational field]] of Physics I. A force like this is called **central**. Vector calculus turns that one fact into a law about the whole orbit.',
        },
        {
          type: 'derivation',
          title: 'The vector $\\vec h = \\vec r \\times \\vec v$ never changes',
          steps: [
            { tex: '\\frac{d}{dt}(\\vec r \\times \\vec v) = \\vec r\\,\' \\times \\vec v + \\vec r \\times \\vec v\\,\'', why: 'The product rule for cross products (order kept).' },
            { tex: '= \\vec v \\times \\vec v + \\vec r \\times \\vec a', why: '$\\vec r\\,\' = \\vec v$ and $\\vec v\\,\' = \\vec a$.' },
            { tex: '= \\vec 0 + \\vec r \\times \\left(-\\frac{GM}{|\\vec r|^3}\\vec r\\right) = \\vec 0', why: 'A vector crossed with itself (or with a multiple of itself) is $\\vec 0$, because the acceleration is parallel to $\\vec r$.' },
          ],
          result: 'So $\\vec h = \\vec r \\times \\vec v$ is a **constant vector** (per unit mass it is the angular momentum).',
        },
        {
          type: 'list',
          items: [
            '**The orbit is planar.** $\\vec r$ is always perpendicular to the fixed vector $\\vec h$, so the satellite stays in the plane through Earth\'s center with normal $\\vec h$.',
            '**Equal areas in equal times.** In time $dt$ the radius sweeps a thin triangle of area $\\frac12|\\vec r \\times \\vec v\\,dt| = \\frac12|\\vec h|\\,dt$. The sweep rate is the constant $\\frac12|\\vec h|$: this is Kepler\'s second law.',
            '**Circular orbits.** Setting the needed centripetal acceleration $v^2/R$ equal to $GM/R^2$ gives the [[phys-orbital-speed|orbital speed]] $v = \\sqrt{GM/R}$ and the period $2\\pi\\sqrt{R^3/GM}$ (Kepler\'s third law).',
          ],
        },
        {
          type: 'plot3d',
          x: [-3.3, 3.3],
          y: [-3.3, 3.3],
          z: [-3.3, 3.3],
          equal: true,
          parametricSurfaces: [{ x: 'cos(u)sin(v)', y: 'sin(u)sin(v)', z: 'cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'teal', opacity: 0.9, label: 'Earth' }],
          curves: [{ x: '2.2(cos(t) - 0.3)', y: '2.0987sin(t)*cos(50pi/180)', z: '2.0987sin(t)*sin(50pi/180)', t: [0, '2pi'], color: 'purple', label: 'orbit' }],
          points: [{ x: ox, y: `${oyPlane}*cos(50pi/180)`, z: `${oyPlane}*sin(50pi/180)`, color: 'red', label: 'satellite' }],
          vectors: [
            { from: [0, 0, 0], to: [ox, `${oyPlane}*cos(50pi/180)`, `${oyPlane}*sin(50pi/180)`], color: 'orange' },
            { from: [ox, `${oyPlane}*cos(50pi/180)`, `${oyPlane}*sin(50pi/180)`], to: [`${ox} + 0.45*${vx}`, `(${oyPlane} + 0.45*${vyPlane})*cos(50pi/180)`, `(${oyPlane} + 0.45*${vyPlane})*sin(50pi/180)`], color: 'red', label: 'v' },
          ],
          sliders: [{ name: 'm', min: 0, max: 6.28, step: 0.01, value: 0.3, label: 'time (one full orbit $= 2\\pi$)', play: true, speed: 0.7, loop: true }],
          readouts: [{ label: 'distance from center (Earth radii) $=$', expr: `2.2(1 - 0.3cos${E})` }],
          view: { azimuth: -70, elevation: 35 },
          caption: 'An elliptical orbit tilted $50^\\circ$ to the equator, with Earth\'s center at one focus. The slider runs at a steady rate in *time*: press ▶ and the satellite whips around perigee (closest approach) and dawdles at apogee, sweeping equal areas in equal times. Its whole path stays in one plane.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Numbers for low Earth orbit',
          text: 'At $400$ km altitude, $R = 6771$ km and $GM = 3.986 \\times 10^{14}$ m³/s², so $v = \\sqrt{GM/R} \\approx 7.67$ km/s and one orbit takes $2\\pi R/v \\approx 92$ minutes. That is the ISS, and the regime of many imaging and communications satellites. Because the orbit plane is fixed in space while Earth turns beneath it, each pass covers a different ground track. Satellite pass predictions are built on that fact.',
        },
      ],
    },
    // 12
    {
      kind: 'mcq',
      prompt: 'Why does a satellite under gravity alone stay in a single plane?',
      options: [
        { text: 'Because its speed is constant', why: 'Elliptical orbits have varying speed, and they are still planar. Speed is not the reason.' },
        { text: 'Because $\\vec a$ is parallel to $\\vec r$, so $\\vec r \\times \\vec v$ has zero derivative and is a fixed vector perpendicular to $\\vec r$', correct: true, why: '$(\\vec r \\times \\vec v)\' = \\vec v \\times \\vec v + \\vec r \\times \\vec a = \\vec 0$, and $\\vec r \\perp \\vec r \\times \\vec v$ at every moment.' },
        { text: 'Because $\\vec a$ is perpendicular to $\\vec v$', why: 'That holds only for circular orbits; in an ellipse gravity has a tangential component that speeds the satellite up toward perigee.' },
        { text: 'Because Earth\'s rotation drags it into the equatorial plane', why: 'Orbits can be tilted at any angle (polar orbits pass over both poles); the plane is fixed by the launch, not by Earth\'s spin.' },
      ],
      explanation: 'A central force makes $\\vec a$ parallel to $\\vec r$. Then $\\frac{d}{dt}(\\vec r \\times \\vec v) = \\vec r \\times \\vec a = \\vec 0$, so $\\vec h = \\vec r \\times \\vec v$ is constant, and $\\vec r$ always lies in the plane perpendicular to $\\vec h$. The same argument gives Kepler\'s second law.',
    },
    // 13
    {
      kind: 'order',
      prompt: 'Put the steps for finding where a projectile lands on flat ground (launched from the ground, no air resistance) in order.',
      lines: [
        'Write the acceleration $\\vec a = \\langle 0, 0, -g \\rangle$',
        'Integrate once and use $\\vec v_0$: $\\vec v(t) = \\vec v_0 + \\vec a\\,t$',
        'Integrate again and use $\\vec r_0$: $\\vec r(t) = \\vec r_0 + \\vec v_0 t + \\frac12\\vec a\\,t^2$',
        'Solve $z(t) = 0$ for the positive flight time $t_f$',
        'Evaluate $x(t_f)$ and $y(t_f)$ to get the landing point',
      ],
      distractors: ['Set $\\vec v(t) = \\vec 0$ to find when it lands'],
      explanation: 'Model, integrate twice (each time fixing the constant vector with an initial condition), then use the landing condition $z = 0$. The distractor confuses landing with stopping: the velocity is never zero in flight. Setting only $v_z = 0$ finds the **peak** instead.',
    },
    // 14
    {
      kind: 'fill',
      prompt: 'Complete the decomposition of acceleration, where $v = |\\vec v|$ is the speed and $\\kappa$ is the curvature.',
      template: '$\\vec a =$ ___ $\\vec T \\, +$ ___ $\\vec N$',
      blanks: [{ answers: ['$\\dfrac{dv}{dt}$'] }, { answers: ['$\\kappa v^2$'] }],
      wordBank: ['$\\dfrac{dv}{dt}$', '$\\kappa v^2$', '$\\kappa v$', '$v^2$', '$\\dfrac{\\kappa}{v}$'],
      explanation: '$\\vec a = \\frac{dv}{dt}\\vec T + \\kappa v^2\\vec N$. The tangential part is the rate of change of speed. The normal part grows with the **square** of the speed, which is why taking a curve twice as fast needs four times the sideways grip, and why a coaster\'s tight loop must be entered at the right speed.',
    },
  ],
  takeaways: [
    'Velocity $\\vec v = \\vec r\\,\'$ is tangent to the path, speed is $|\\vec v| = ds/dt$, and acceleration is $\\vec a = \\vec r\\,\'\'$.',
    'Integrate $\\vec a$ twice with initial velocity and position to recover $\\vec r(t)$; constant acceleration gives $\\vec r = \\vec r_0 + \\vec v_0 t + \\frac12\\vec a t^2$, a parabola in a plane.',
    '$\\vec a = a_T\\vec T + a_N\\vec N$ with $a_T = \\frac{\\vec r\\,\'\\cdot\\vec r\\,\'\'}{|\\vec r\\,\'|}$ (speeding up) and $a_N = \\kappa v^2 = \\frac{|\\vec r\\,\' \\times \\vec r\\,\'\'|}{|\\vec r\\,\'|}$ (turning).',
    'Constant speed does not mean zero acceleration: uniform circular motion has $|\\vec a| = v^2/R$ toward the center.',
    'Under a central force, $\\vec r \\times \\vec v$ is constant: orbits are planar and sweep equal areas in equal times.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, Chapter 3: Vector-Valued Functions',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 3.4, Motion in Space, includes projectile motion and a full derivation of Kepler\'s laws.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 1 covers velocity, acceleration and Kepler\'s second law with lecture videos and problem sets.',
    },
    {
      title: "Wikipedia: Kepler's laws of planetary motion",
      url: 'https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion',
      source: 'wikipedia',
      note: 'History and derivations of all three laws, including the vector proof that orbits are planar.',
    },
  ],
};
