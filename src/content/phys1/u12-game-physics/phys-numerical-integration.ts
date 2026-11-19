import type { Lesson } from '../../types';

// @@FIGS@@
const FIG_LOOP =
  '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><text x="40" y="22" font-size="13" font-weight="600" class="t-blue">Render frames (variable length)</text><rect x="41.0" y="32" width="63.0" height="30" rx="4" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.2"/><text x="72.5" y="52" font-size="11" text-anchor="middle">25 ms</text><line x1="105.0" y1="62" x2="105.0" y2="150" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><text x="102.0" y="160" font-size="11" text-anchor="end" class="t-purple" font-weight="600">1</text><rect x="106.0" y="32" width="29.2" height="30" rx="4" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.2"/><text x="120.6" y="52" font-size="10" text-anchor="middle">12 ms</text><line x1="136.2" y1="62" x2="136.2" y2="150" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><text x="133.2" y="160" font-size="11" text-anchor="end" class="t-purple" font-weight="600">1</text><rect x="137.2" y="32" width="102.0" height="30" rx="4" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.2"/><text x="188.2" y="52" font-size="11" text-anchor="middle">40 ms</text><line x1="240.2" y1="62" x2="240.2" y2="150" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><text x="237.2" y="160" font-size="11" text-anchor="end" class="t-purple" font-weight="600">2</text><rect x="241.2" y="32" width="42.2" height="30" rx="4" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.2"/><text x="262.3" y="52" font-size="11" text-anchor="middle">17 ms</text><line x1="284.4" y1="62" x2="284.4" y2="150" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><text x="281.4" y="160" font-size="11" text-anchor="end" class="t-purple" font-weight="600">1</text><rect x="285.4" y="32" width="180.0" height="30" rx="4" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.2"/><text x="375.4" y="52" font-size="11" text-anchor="middle">70 ms</text><line x1="466.4" y1="62" x2="466.4" y2="150" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><text x="463.4" y="160" font-size="11" text-anchor="end" class="t-purple" font-weight="600">4</text><text x="40" y="96" font-size="13" font-weight="600" class="t-green">Physics steps (fixed dt = 16.7 ms)</text><rect x="41.0" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="84.3" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="127.7" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="171.0" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="214.3" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="257.7" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="301.0" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="344.3" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="387.7" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/><rect x="431.0" y="106" width="41.3" height="30" rx="4" fill="currentColor" class="f-gray" fill-opacity="0.08" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><text x="450.8" y="126" font-size="10.5" text-anchor="middle" class="t-gray">α</text><line x1="430.0" y1="178.0" x2="466.4" y2="178.0" stroke="currentColor" class="s-orange" stroke-width="1.5"/><path d="M466.4 178.0 L460.9 180.3 L460.9 175.7 Z" fill="currentColor" class="f-orange"/><line x1="466.4" y1="178.0" x2="430.0" y2="178.0" stroke="currentColor" class="s-orange" stroke-width="1.5"/><path d="M430.0 178.0 L435.5 175.7 L435.5 180.3 Z" fill="currentColor" class="f-orange"/><text x="424.0" y="182" font-size="11" text-anchor="end" class="t-orange">leftover in the accumulator → draw with α = 0.84</text><text x="40" y="204" font-size="11" class="t-purple">purple numbers: physics steps run at the end of each frame</text></svg>';
// @@END@@

// Precomputed with the integrators in this lesson (m = 1 kg, k = 1 N/m, x0 = 1 m, v0 = 0).
// E_*: [t, E/E0] every 0.5 s with h = 0.1 s (RK4 omitted: indistinguishable from 1 at this scale).  P_*: phase-space points [x, v] with h = 0.3 s.
// @@DATA@@
const E_SIE: [number, number][] = [[0.5, 0.959], [1.0, 0.958], [1.5, 0.998], [2.0, 1.0421], [2.5, 1.0498], [3.0, 1.014], [3.5, 0.9676], [4.0, 0.9534], [4.5, 0.9843], [5.0, 1.032], [5.5, 1.0525], [6.0, 1.027], [6.5, 0.979], [7.0, 0.9525], [7.5, 0.9721], [8.0, 1.0196], [8.5, 1.0514], [9.0, 1.0382], [9.5, 0.9921], [10.0, 0.9556], [10.5, 0.9623], [11.0, 1.0059], [11.5, 1.0464], [12.0, 1.0465], [12.5, 1.0061], [13.0, 0.9624], [13.5, 0.9556], [14.0, 0.9919], [14.5, 1.038], [15.0, 1.0515], [15.5, 1.0198], [16.0, 0.9723], [16.5, 0.9525], [17.0, 0.9788], [17.5, 1.0268], [18.0, 1.0525], [18.5, 1.0322], [19.0, 0.9845], [19.5, 0.9534], [20.0, 0.9675]];
const E_VER: [number, number][] = [[0.5, 0.9994], [1.0, 0.9982], [1.5, 0.9975], [2.0, 0.9979], [2.5, 0.9991], [3.0, 1.0], [3.5, 0.9997], [4.0, 0.9986], [4.5, 0.9976], [5.0, 0.9977], [5.5, 0.9988], [6.0, 0.9998], [6.5, 0.9999], [7.0, 0.9989], [7.5, 0.9978], [8.0, 0.9976], [8.5, 0.9984], [9.0, 0.9996], [9.5, 1.0], [10.0, 0.9993], [10.5, 0.9981], [11.0, 0.9975], [11.5, 0.9981], [12.0, 0.9993], [12.5, 1.0], [13.0, 0.9995], [13.5, 0.9984], [14.0, 0.9975], [14.5, 0.9978], [15.0, 0.999], [15.5, 0.9999], [16.0, 0.9998], [16.5, 0.9987], [17.0, 0.9977], [17.5, 0.9976], [18.0, 0.9986], [18.5, 0.9997], [19.0, 0.9999], [19.5, 0.9991], [20.0, 0.9979]];
const P_EU: [number, number][] = [[1.0, 0.0], [1.0, -0.3], [0.91, -0.6], [0.73, -0.873], [0.468, -1.092], [0.141, -1.232], [-0.229, -1.275], [-0.612, -1.206], [-0.973, -1.022], [-1.28, -0.73], [-1.499, -0.346], [-1.603, 0.103], [-1.572, 0.584], [-1.397, 1.056], [-1.08, 1.475], [-0.637, 1.799], [-0.098, 1.99], [0.499, 2.019], [1.105, 1.87], [1.666, 1.538], [2.127, 1.038], [2.439, 0.4], [2.559, -0.332], [2.46, -1.099], [2.13, -1.837], [1.579, -2.476], [0.836, -2.95]];
const P_SIE: [number, number][] = [[1.0, 0.0], [0.91, -0.3], [0.738, -0.573], [0.5, -0.794], [0.216, -0.944], [-0.086, -1.009], [-0.381, -0.983], [-0.642, -0.869], [-0.845, -0.676], [-0.972, -0.423], [-1.011, -0.131], [-0.96, 0.172], [-0.822, 0.46], [-0.61, 0.706], [-0.343, 0.889], [-0.045, 0.992], [0.256, 1.006], [0.535, 0.929], [0.766, 0.768], [0.927, 0.539], [1.005, 0.26], [0.993, -0.041], [0.891, -0.339]];
// @@DATAEND@@

const STEP_COUNT = Array.from({ length: 22 }, (_, i) => i + 1);

export const lesson: Lesson = {
  id: 'phys-numerical-integration',
  title: 'Integrating Motion in Code',
  summary: 'How a game engine turns $\\vec{F} = m\\vec{a}$ into motion one frame at a time: the fixed-timestep game loop, explicit and semi-implicit Euler, velocity Verlet and RK4, and why some integrators make springs explode while others run stably for hours.',
  minutes: 22,
  objectives: [
    'Explain why physics runs on a fixed timestep and implement the accumulator game loop with render interpolation',
    'Step a particle with explicit Euler, semi-implicit (symplectic) Euler, velocity Verlet and RK4',
    'Predict the energy behavior of each integrator on a spring, and prove that explicit Euler multiplies the energy by $1 + \\omega^2h^2$ every step',
    'Find the largest stable timestep $h < 2/\\omega$ for semi-implicit Euler and Verlet on a stiff spring',
    'Choose an integrator for a game situation, weighing accuracy, stability, cost and determinism',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The game loop and the fixed timestep',
      blocks: [
        {
          type: 'p',
          text: 'In the earlier units you **solved** equations of motion: $x(t) = x_0 + v_0t + \\tfrac12 at^2$, $x(t) = A\\cos(\\omega t + \\phi)$. A game can almost never do that. The forces depend on the state of the whole world (contacts, springs, drag, player input) and change every frame. So the engine treats Newton\'s second law as a pair of first-order [[differential-equation|differential equations]] and advances the **state** $(\\vec{x}, \\vec{v})$ by small time steps $h$:',
        },
        {
          type: 'math',
          tex: '\\frac{d\\vec{x}}{dt} = \\vec{v}, \\qquad \\frac{d\\vec{v}}{dt} = \\vec{a} = \\frac{\\vec{F}_{\\text{net}}(\\vec{x}, \\vec{v}, t)}{m}',
          caption: 'An **integrator** is a rule that turns the state at time $t$ into the state at time $t + h$. This lesson compares four of them.',
        },
        {
          type: 'p',
          text: 'First, how big is $h$? The tempting answer is "however long the last frame took". That makes the physics depend on the frame rate: a jump is a little higher at 30 fps than at 144 fps, a stiff spring that is fine at 60 fps explodes during a frame hitch, and two networked machines running at different frame rates disagree about where the grenade landed. The standard cure, described in Glenn Fiedler\'s article [Fix Your Timestep!](https://gafferongames.com/post/fix_your_timestep/), is to run the physics with a [[phys-fixed-timestep|fixed timestep]] (say $h = 1/60\\,\\text{s}$) no matter how long frames take.',
        },
        {
          type: 'figure',
          svg: FIG_LOOP,
          alt: 'Timeline. Top row: render frames of 25, 12, 40, 17 and 70 ms. Bottom row: equal physics steps of 16.7 ms. Dashed lines drop from each frame end; the number of physics steps completed during each frame is 1, 1, 2, 1 and 4. The final, unfinished physics step is drawn dashed and labeled alpha; the leftover time in the accumulator gives alpha = 0.84.',
          caption: 'Each frame adds its real duration to an **accumulator**, and the physics consumes it in fixed $16.7\\,\\text{ms}$ slices. A long frame runs several steps; a short one may run none. The leftover fraction $\\alpha$ is used to interpolate the drawing.',
        },
        {
          type: 'code',
          title: 'fixed_timestep.cpp',
          runnable: true,
          code: `#include <cstdio>

struct State { double y, v; };                // height (m), vertical velocity (m/s)

void integrate(State& s, double dt) {         // semi-implicit Euler, gravity only
    s.v += -9.80 * dt;
    s.y += s.v * dt;
}

int main() {
    const double dt = 1.0 / 60.0;             // fixed physics step: 16.7 ms
    const double frameTimes[] = {0.025, 0.012, 0.040, 0.017, 0.070};  // measured, varies
    double accumulator = 0.0;
    State previous{10.0, 0.0}, current{10.0, 0.0};

    for (double frameTime : frameTimes) {
        if (frameTime > 0.25) frameTime = 0.25;   // avoid the "spiral of death"
        accumulator += frameTime;
        int steps = 0;
        while (accumulator >= dt) {               // consume time in fixed slices
            previous = current;
            integrate(current, dt);
            accumulator -= dt;
            ++steps;
        }
        double alpha = accumulator / dt;          // fraction of the next step
        double drawY = previous.y + alpha * (current.y - previous.y);
        std::printf("frame %4.0f ms: %d step(s), alpha = %.2f, draw y = %.3f m\\n",
                    frameTime * 1000, steps, alpha, drawY);
    }
}`,
          output: `frame   25 ms: 1 step(s), alpha = 0.50, draw y = 9.999 m
frame   12 ms: 1 step(s), alpha = 0.22, draw y = 9.996 m
frame   40 ms: 2 step(s), alpha = 0.62, draw y = 9.977 m
frame   17 ms: 1 step(s), alpha = 0.64, draw y = 9.964 m
frame   70 ms: 4 step(s), alpha = 0.84, draw y = 9.881 m`,
          annotations: [
            { lines: 12, text: 'In a real game these come from a clock each frame; here they are fixed so the output is reproducible.' },
            { lines: 17, text: 'If a frame takes very long (a level load, a debugger break), don\'t try to catch up all at once: that would make the next frame even longer, and so on forever.' },
            { lines: '20-25', text: 'The physics always advances by exactly `dt`, so its results don\'t depend on the frame rate.' },
            { lines: '26-27', text: 'Render between the last two physics states with [[linear-interpolation|linear interpolation]] so motion looks smooth even when the frame rate and the physics rate don\'t match.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why fixed steps',
          text: 'Three reasons. **Reproducibility**: the same inputs give the same trajectory on every machine, which deterministic netcode, replays and bug reports depend on. **Stability**: as you will see, every integrator has a largest safe $h$; a fixed step lets you stay below it. **Tuning**: designers tune jump heights and car handling once, at one timestep, and it feels the same on every PC.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A game runs physics at a fixed $h = 1/60\\,\\text{s} \\approx 16.7\\,\\text{ms}$. After the last frame the accumulator held $5.0\\,\\text{ms}$. The next frame takes $50\\,\\text{ms}$. How many physics steps run during this frame?',
      options: [
        { text: '$3$ steps, leaving $5.0\\,\\text{ms}$ in the accumulator', correct: true, why: 'The accumulator becomes $55\\,\\text{ms}$; three $16.7\\,\\text{ms}$ steps consume $50\\,\\text{ms}$ and $5.0\\,\\text{ms}$ remains for next time.' },
        { text: '$2$ steps, because the frame lasted less than $3 \\times 16.7\\,\\text{ms}$', why: 'The frame alone is $50.0\\,\\text{ms}$, which is exactly $3h$, and the $5.0\\,\\text{ms}$ left over from before is added too.' },
        { text: '$4$ steps, rounding $3.3$ up so the physics never falls behind', why: 'The loop only runs whole steps while `accumulator >= dt`. The remainder waits for the next frame; rounding up would run the simulation ahead of real time.' },
        { text: '$3.3$ steps: three full steps plus one shortened step of $5\\,\\text{ms}$', why: 'A shortened step would bring back the frame-rate dependence that the fixed timestep exists to remove. The remainder is handled by interpolating the drawing, not by a partial step.' },
      ],
      explanation: 'Accumulator: $5.0 + 50 = 55\\,\\text{ms}$. While it is at least $16.7\\,\\text{ms}$, step and subtract: $55 \\to 38.3 \\to 21.7 \\to 5.0\\,\\text{ms}$. That is $3$ steps, with $\\alpha = 5.0/16.7 = 0.30$ used to interpolate the rendered position.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Explicit Euler, and why your jump height depends on the timestep',
      blocks: [
        {
          type: 'p',
          text: 'The simplest integrator is [[eulers-method]], which you met in calculus: follow the tangent line for one step. Applied to both equations, using the values at the **start** of the step:',
        },
        {
          type: 'theorem',
          name: 'Explicit (forward) Euler',
          tex: 'x_{n+1} = x_n + v_n h, \\qquad v_{n+1} = v_n + a(x_n, v_n)\\,h',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'How big is the error?',
          text: 'By Taylor\'s theorem, $x(t + h) = x(t) + v(t)h + \\tfrac12 a(t)h^2 + \\dots$ Euler keeps only the first two terms, so each step is wrong by about $\\tfrac12 ah^2$: the **local error** is $O(h^2)$. Covering a fixed time $T$ takes $T/h$ steps, so the errors add up to $O(h)$: the **global error** is first order. Halve the timestep and the error roughly halves.',
        },
        {
          type: 'derivation',
          title: 'A jump with explicit Euler (constant $a = -g$)',
          steps: [
            { tex: 'v_n = v_0 - gnh', why: 'With constant acceleration the velocity update is exact: each step subtracts $gh$.' },
            { tex: 'y_n = h(v_0 + v_1 + \\dots + v_{n-1}) = v_0 nh - gh^2(0 + 1 + \\dots + (n-1))', why: 'Each position step uses the **old** velocity $v_k$, $k = 0, \\dots, n - 1$.' },
            { tex: '= v_0 t_n - \\tfrac12 g h^2 n(n-1) = v_0 t_n - \\tfrac12 g\\,t_n(t_n - h)', why: 'Sum $0 + 1 + \\dots + (n-1) = \\frac{n(n-1)}{2}$ and write $t_n = nh$.' },
            { tex: 'y_n - y_{\\text{exact}}(t_n) = +\\tfrac12 g h\\,t_n', why: 'Compare with $v_0t - \\tfrac12 gt^2$. Euler always uses the velocity from the start of the step, which is too high on the way up and not negative enough on the way down.' },
          ],
          result: 'Explicit Euler makes the character rise **higher** and stay up longer, by an amount proportional to $h$. Semi-implicit Euler (next cards) errs the other way, $y_n = v_0t_n - \\tfrac12 g\\,t_n(t_n + h)$, and their average is exact.',
        },
        {
          type: 'graph',
          x: [0, 1.15],
          y: [-0.2, 1.7],
          height: 280,
          functions: [
            { expr: '5x - 4.9x^2', label: 'exact: $y = v_0t - \\tfrac12 gt^2$', color: 'blue' },
            { expr: '5x - 4.9x*(x - h)', label: 'explicit Euler', color: 'red', dashed: true },
            { expr: '5x - 4.9x*(x + h)', label: 'semi-implicit Euler', color: 'green', dashed: true },
          ],
          points: [
            ...STEP_COUNT.map((n) => ({ x: `${n}*h`, y: `5*${n}*h - 4.9*${n}*h*(${n}*h - h)`, color: 'red' as const })),
            ...STEP_COUNT.map((n) => ({ x: `${n}*h`, y: `5*${n}*h - 4.9*${n}*h*(${n}*h + h)`, color: 'green' as const })),
          ],
          sliders: [{ name: 'h', min: 0.02, max: 0.2, step: 0.01, value: 0.1, label: 'timestep $h$ (s)' }],
          readouts: [
            { label: 'exact peak (m) $=$', expr: '25/19.6', digits: 3 },
            { label: 'Euler curve peak $=$', expr: '(5 + 4.9h)^2/19.6', digits: 3 },
            { label: 'semi-implicit peak $=$', expr: '(5 - 4.9h)^2/19.6', digits: 3 },
          ],
          caption: 'A jump with $v_0 = 5.0\\,\\text{m/s}$ and $g = 9.80\\,\\text{m/s}^2$. Horizontal axis: time in s; vertical: height in m. Dots are the computed steps. At $h = 0.1\\,\\text{s}$ (a 10 Hz physics rate) the Euler jump peaks $20\\%$ too high; at $h = 1/60\\,\\text{s}$ the error is a few percent, but still enough for players to notice, and to exploit.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Frame-rate tricks',
          text: 'Shooters of the late 1990s became famous for movement that depended on frame rate: in some engines, capping the frame rate at particular values let players jump measurably higher and reach ledges they otherwise couldn\'t. Fixed timesteps and better integrators are how modern engines keep "game feel" identical on every machine.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A crate is dropped from rest ($g = 9.80\\,\\text{m/s}^2$, no drag) and simulated with **explicit** Euler at $h = 0.50\\,\\text{s}$. After $3$ steps ($t = 1.5\\,\\text{s}$), how far has the simulated crate fallen? Give 3 significant figures.',
      label: 'distance $=$',
      unit: 'm',
      answer: '9.8*0.25*3',
      answerTex: '7.35\\,\\text{m}',
      tolerance: 0.05,
      hint: 'Step by hand: $y_{n+1} = y_n + v_n h$ uses the **old** velocity, and $v_{n+1} = v_n - gh$.',
      explanation: 'Velocities: $v_0 = 0$, $v_1 = -4.90$, $v_2 = -9.80\\,\\text{m/s}$. Positions: $y_1 = 0 + 0(0.5) = 0$, $y_2 = 0 - 4.90(0.5) = -2.45$, $y_3 = -2.45 - 9.80(0.5) = -7.35\\,\\text{m}$. So it has fallen $7.35\\,\\text{m}$, versus the exact $\\tfrac12 g t^2 = 11.0\\,\\text{m}$: the formula $\\tfrac12 g\\,t(t - h) = 4.90(1.5)(1.0) = 7.35\\,\\text{m}$ agrees. Updating velocity first (semi-implicit Euler) would give $14.7\\,\\text{m}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The spring test: explicit Euler explodes',
      blocks: [
        {
          type: 'p',
          text: 'Gravity alone is too easy. The standard test for an integrator is a mass on a spring, $a = -\\omega^2x$ with $\\omega = \\sqrt{k/m}$, because its exact motion $x = A\\cos(\\omega t)$ (the [[phys-simple-harmonic-motion|simple harmonic motion]] of the oscillations unit) conserves the [[phys-mechanical-energy|mechanical energy]] $E = \\tfrac12 mv^2 + \\tfrac12 kx^2$ forever. Springs are everywhere in games: suspension, camera follow, ragdoll joints, cloth. An integrator that adds energy to a spring will eventually blow it up.',
        },
        {
          type: 'derivation',
          title: 'One explicit Euler step multiplies the energy by $1 + \\omega^2h^2$',
          steps: [
            { tex: 'x\' = x + hv, \\qquad v\' = v - h\\omega^2x', why: 'One explicit Euler step with $a = -\\omega^2x$ (primes mean "after the step").' },
            { tex: '\\frac{2E}{m} = v^2 + \\omega^2x^2', why: 'Energy, using $k = m\\omega^2$: $E = \\tfrac12 mv^2 + \\tfrac12 m\\omega^2x^2$.' },
            { tex: 'v\'^2 + \\omega^2x\'^2 = (v - h\\omega^2x)^2 + \\omega^2(x + hv)^2', why: 'Substitute the update into the energy after the step.' },
            { tex: '= v^2 - 2h\\omega^2xv + h^2\\omega^4x^2 + \\omega^2x^2 + 2h\\omega^2xv + h^2\\omega^2v^2', why: 'Expand both squares. The cross terms cancel.' },
            { tex: '= (1 + \\omega^2h^2)(v^2 + \\omega^2x^2) \\implies E_{n+1} = (1 + \\omega^2h^2)E_n', why: 'Factor: $h^2\\omega^4x^2 + h^2\\omega^2v^2 = \\omega^2h^2(\\omega^2x^2 + v^2)$.' },
          ],
          result: 'The energy grows **geometrically**, $E_n = (1 + \\omega^2h^2)^n E_0$, for every $h > 0$. No timestep is small enough to make explicit Euler stable on an undamped spring; a small $h$ only slows the explosion.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [-3, 3],
          height: 280,
          functions: [
            { expr: 'cos(x)', label: 'exact $x = \\cos t$', color: 'blue' },
            { expr: '(1 + h^2)^(x/(2h))*cos(x*arctan(h)/h)', label: 'explicit Euler', color: 'red', dashed: true },
            { expr: 'cos(x*arccos(1 - h^2/2)/h) - (h^2/2)/sin(arccos(1 - h^2/2))*sin(x*arccos(1 - h^2/2)/h)', label: 'semi-implicit Euler', color: 'green', dashed: true },
          ],
          points: Array.from({ length: 40 }, (_, i) => i + 1).map((n) => ({
            x: `${n}*h`,
            y: `(1 + h^2)^(${n}/2)*cos(${n}*arctan(h))`,
            color: 'red' as const,
          })),
          sliders: [{ name: 'h', min: 0.05, max: 0.5, step: 0.01, value: 0.2, label: 'timestep $h$ (s)' }],
          readouts: [
            { label: 'Euler energy after $20\\,\\text{s}$: $E/E_0 =$', expr: '(1 + h^2)^(20/h)', digits: 2 },
          ],
          caption: 'Spring with $\\omega = 1\\,\\text{rad/s}$ released from $x = 1\\,\\text{m}$; horizontal axis is time in s. The dashed curves pass through the values each integrator computes at the steps (red dots for explicit Euler). Explicit Euler spirals outward; semi-implicit Euler stays bounded and only drifts slightly in phase. Make $h$ smaller and Euler\'s growth slows but never stops.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Where the closed forms come from',
          text: 'Writing $z = x - iv/\\omega$, one explicit Euler step is $z \\mapsto (1 + i\\omega h)z$: a rotation by $\\arctan(\\omega h)$ combined with a stretch by $\\sqrt{1 + \\omega^2h^2}$. That is the outward spiral, and it is how the red curve was plotted.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'A spring–mass system has $\\omega = 3\\,\\text{rad/s}$ and is stepped with explicit Euler using timestep $h$. By what factor does the mechanical energy change in **one** step? Answer in terms of `h`.',
      label: '$E_{n+1}/E_n =$',
      answer: '1 + 9h^2',
      answerTex: '1 + 9h^2',
      variables: ['h'],
      domain: [0.01, 1],
      hint: 'The derivation gave $E_{n+1} = (1 + \\omega^2h^2)E_n$.',
      explanation: 'With $\\omega = 3$, $1 + \\omega^2h^2 = 1 + 9h^2$. At a 60 Hz physics rate ($h = 1/60\\,\\text{s}$) that is $1.0025$ per step, so after one minute ($3600$ steps) the energy has grown by a factor of about $1.0025^{3600} \\approx 8000$. Writing $1 + 3h^2$ forgets that $\\omega$ is squared; writing $1 + 3h$ forgets that $h$ is.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Semi-implicit (symplectic) Euler',
      blocks: [
        {
          type: 'p',
          text: 'Now change one thing: update the velocity **first**, then move with the **new** velocity. This is [[semi-implicit-euler]], also called symplectic Euler or Euler–Cromer. It costs exactly the same as explicit Euler, has the same first-order accuracy, and behaves completely differently on springs and orbits.',
        },
        {
          type: 'compare',
          left: {
            title: 'Explicit Euler',
            tone: 'bad',
            code: 'x += v * h;          // old v\nv += a(x_old) * h;',
          },
          right: {
            title: 'Semi-implicit Euler',
            tone: 'good',
            code: 'v += a(x) * h;       // velocity first\nx += v * h;          // then position, with the new v',
          },
        },
        {
          type: 'derivation',
          title: 'Why it doesn\'t explode: the step preserves phase-space area',
          steps: [
            { tex: 'v\' = v - h\\omega^2x, \\qquad x\' = x + hv\' = (1 - \\omega^2h^2)x + hv', why: 'Substitute the new velocity into the position update.' },
            { tex: '\\begin{bmatrix} x\' \\\\ v\' \\end{bmatrix} = \\begin{bmatrix} 1 - \\omega^2h^2 & h \\\\ -\\omega^2h & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ v \\end{bmatrix}', why: 'One step is a linear map of the state, so it is a $2 \\times 2$ matrix.' },
            { tex: '\\det = (1 - \\omega^2h^2)(1) - (h)(-\\omega^2h) = 1', why: 'A determinant of $1$ means the map preserves **area** in the $(x, v)$ plane. Explicit Euler\'s matrix $\\begin{bmatrix} 1 & h \\\\ -\\omega^2h & 1 \\end{bmatrix}$ has determinant $1 + \\omega^2h^2$: it inflates area every step.' },
          ],
          result: 'Area-preserving maps of this kind are called **symplectic**. Exact Newtonian motion has the same property, which is why a [[phys-symplectic-integrator|symplectic integrator]] keeps the energy oscillating within a narrow band instead of drifting away, even over millions of steps.',
        },
        {
          type: 'graph',
          x: [-3.6, 3.6],
          y: [-3.6, 3.6],
          equal: true,
          height: 340,
          parametric: [{ x: 'cos(t)', y: '-sin(t)', t: [0, '2pi'], label: 'exact: constant energy', color: 'blue' }],
          points: [
            ...P_EU.map(([px, pv], n) => ({ x: `${px} + 0*sqrt(s - ${n})`, y: pv, color: 'red' as const })),
            ...P_SIE.map(([px, pv], n) => ({ x: `${px} + 0*sqrt(s - ${n})`, y: pv, color: 'green' as const })),
          ],
          sliders: [{ name: 's', min: 0, max: 26, step: 0.1, value: 26, label: 'steps taken', play: true, speed: 6 }],
          caption: '[[phys-phase-space|Phase space]]: horizontal axis position $x$ (m), vertical axis velocity $v$ (m/s), for $\\omega = 1\\,\\text{rad/s}$ and a coarse $h = 0.3\\,\\text{s}$. Circles are curves of constant energy. Press ▶ to add the steps one by one: explicit Euler (red) spirals outward, gaining energy each step; semi-implicit Euler (green) goes around a slightly tilted closed loop, returning near its start after one period.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'What engines use',
          text: 'Most real-time rigid-body engines, including Box2D, Bullet, PhysX and Jolt, integrate with semi-implicit Euler: apply forces and collision impulses to the velocities, then move the bodies with the new velocities. It is cheap, it is stable for the constraint solvers built on top of it, and it fits naturally with impulse-based collision response, the subject of the next lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'Semi-implicit Euler conserves the energy of an undamped spring exactly at every step.',
      answer: false,
      explanation: 'False. Its energy **oscillates**: in this lesson\'s test ($\\omega h = 0.1$) the energy wanders between about $0.95E_0$ and $1.05E_0$ every cycle. What it does not do is **drift**: because each step preserves phase-space area, the error stays bounded for as long as you run it, while explicit Euler\'s energy grows without limit. (It exactly conserves a slightly modified "shadow" energy, $\\tfrac12 mv^2 + \\tfrac12 kx^2 - \\tfrac12 khxv$, which differs from $E$ by $O(h)$.)',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Velocity Verlet',
      blocks: [
        {
          type: 'p',
          text: 'To do better than first order, use the acceleration at **both** ends of the step. [[phys-velocity-verlet|Velocity Verlet]] updates position with the full constant-acceleration formula, recomputes the force at the new position, and updates velocity with the **average** of the old and new accelerations, like the trapezoid rule for $\\int a\\,dt$:',
        },
        {
          type: 'theorem',
          name: 'Velocity Verlet',
          tex: '\\begin{aligned} x_{n+1} &= x_n + v_nh + \\tfrac12 a_nh^2 \\\\ a_{n+1} &= a(x_{n+1}) \\\\ v_{n+1} &= v_n + \\tfrac12(a_n + a_{n+1})h \\end{aligned}',
          text: 'Second order (global error $O(h^2)$), symplectic, time-reversible, and still only **one** force evaluation per step, because $a_{n+1}$ is reused as the next step\'s $a_n$.',
        },
        {
          type: 'derivation',
          title: 'One Verlet step for a spring: $k = 4.0\\,\\text{N/m}$, $m = 1.0\\,\\text{kg}$, $x_0 = 1.0\\,\\text{m}$, $v_0 = 0$, $h = 0.10\\,\\text{s}$',
          steps: [
            { tex: 'a_0 = -\\frac{k}{m}x_0 = -4.0\\,\\text{m/s}^2', why: 'Hooke\'s law force divided by the mass.' },
            { tex: 'x_1 = 1.0 + 0 + \\tfrac12(-4.0)(0.10)^2 = 0.980\\,\\text{m}', why: 'Position update with the full $\\tfrac12 ah^2$ term.' },
            { tex: 'a_1 = -4.0(0.980) = -3.92\\,\\text{m/s}^2', why: 'Force evaluated at the **new** position.' },
            { tex: 'v_1 = 0 + \\tfrac12(-4.0 - 3.92)(0.10) = -0.396\\,\\text{m/s}', why: 'Average acceleration times $h$.' },
          ],
          result: 'Exact values: $x(0.1) = \\cos(0.2) = 0.9801\\,\\text{m}$ and $v(0.1) = -2\\sin(0.2) = -0.3973\\,\\text{m/s}$. Verlet is off by about $0.001\\,\\text{m/s}$; both Euler variants give $v_1 = -0.400\\,\\text{m/s}$, about twice as far off.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why averaging helps',
          text: 'For constant acceleration Verlet is **exact**: it is just $x = x_0 + v_0t + \\tfrac12 at^2$ applied step by step. That is why it fixes the jump-height problem completely (it is the average of the two Euler curves you saw). For changing forces, the trapezoid-style average cancels the leading error term that both Euler methods make, leaving an error of order $h^2$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Verlet and Hitman',
          text: 'The position-only form, $x_{n+1} = 2x_n - x_{n-1} + a_nh^2$, stores no velocity at all; the velocity is implied by the last two positions. Thomas Jakobsen\'s GDC 2001 paper "Advanced Character Physics" showed how IO Interactive used it for the ragdolls and cloth in *Hitman: Codename 47*: integrate particles with Verlet, then simply move them back to satisfy distance constraints, and the velocities fix themselves. That idea grew into position-based dynamics, used for cloth and soft bodies in many engines today.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A $1.0\\,\\text{kg}$ mass on a spring with $k = 4.0\\,\\text{N/m}$ starts at $x_0 = 1.0\\,\\text{m}$ with $v_0 = 0$. Take **one** velocity Verlet step with $h = 0.10\\,\\text{s}$. What is $v_1$? Give 3 significant figures.',
      label: '$v_1 =$',
      unit: 'm/s',
      answer: '-0.396',
      answerTex: '-0.396\\,\\text{m/s}',
      tolerance: 0.0008,
      hint: 'Find $a_0$, then $x_1 = x_0 + v_0h + \\tfrac12 a_0h^2$, then $a_1$ at $x_1$, then $v_1 = v_0 + \\tfrac12(a_0 + a_1)h$.',
      explanation: '$a_0 = -4.0\\,\\text{m/s}^2$; $x_1 = 1 - 0.5(4.0)(0.01) = 0.980\\,\\text{m}$; $a_1 = -3.92\\,\\text{m/s}^2$; $v_1 = \\tfrac12(-4.0 - 3.92)(0.10) = -0.396\\,\\text{m/s}$. Using only $a_0$ (either Euler method) gives $-0.400\\,\\text{m/s}$; the exact value is $-0.3973\\,\\text{m/s}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Order the operations of one velocity Verlet step.',
      lines: [
        'Update the position: $x_{n+1} = x_n + v_nh + \\tfrac12 a_nh^2$',
        'Compute the force at the new position and set $a_{n+1} = F(x_{n+1})/m$',
        'Update the velocity: $v_{n+1} = v_n + \\tfrac12(a_n + a_{n+1})h$',
        'Store $a_{n+1}$ to use as $a_n$ in the next step',
      ],
      explanation: 'The position update needs only the old state. The new acceleration needs the new position. The velocity update needs both accelerations. Keeping $a_{n+1}$ for the next step is what makes Verlet cost one force evaluation per step. (If the force depends on velocity, as drag does, the method needs a small modification, because $a_{n+1}$ would depend on the unknown $v_{n+1}$.)',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'RK4, and the four integrators side by side',
      blocks: [
        {
          type: 'p',
          text: 'The classical fourth-order [[phys-rk4|Runge–Kutta method]] samples the slope four times per step, like Simpson\'s rule for integrals. Write the state as $\\mathbf{y} = (x, v)$ and the equations as $\\mathbf{y}\' = \\mathbf{F}(\\mathbf{y}) = (v, a(x, v))$. Then',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} \\mathbf{k}_1 &= \\mathbf{F}(\\mathbf{y}_n), & \\mathbf{k}_2 &= \\mathbf{F}\\big(\\mathbf{y}_n + \\tfrac{h}{2}\\mathbf{k}_1\\big), \\\\ \\mathbf{k}_3 &= \\mathbf{F}\\big(\\mathbf{y}_n + \\tfrac{h}{2}\\mathbf{k}_2\\big), & \\mathbf{k}_4 &= \\mathbf{F}(\\mathbf{y}_n + h\\mathbf{k}_3), \\end{aligned} \\qquad \\mathbf{y}_{n+1} = \\mathbf{y}_n + \\tfrac{h}{6}(\\mathbf{k}_1 + 2\\mathbf{k}_2 + 2\\mathbf{k}_3 + \\mathbf{k}_4)',
          caption: 'Global error $O(h^4)$: halving $h$ cuts the error by a factor of about $16$. The price is four force evaluations per step.',
        },
        {
          type: 'code',
          title: 'integrators.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Mass on a spring: m = 1 kg, k = 1 N/m, so a = -x and omega = 1 rad/s.
struct State { double x, v; };
double accel(double x) { return -x; }
double energy(State s) { return 0.5 * s.v * s.v + 0.5 * s.x * s.x; }

State explicitEuler(State s, double h) {
    return {s.x + s.v * h, s.v + accel(s.x) * h};       // both use old values
}
State semiImplicitEuler(State s, double h) {
    double v = s.v + accel(s.x) * h;                    // velocity first...
    return {s.x + v * h, v};                            // ...then position with new v
}
State velocityVerlet(State s, double h) {
    double a0 = accel(s.x);
    double x = s.x + s.v * h + 0.5 * a0 * h * h;
    double a1 = accel(x);                               // force at the new position
    return {x, s.v + 0.5 * (a0 + a1) * h};
}
State rk4(State s, double h) {
    auto f = [](State q) { return State{q.v, accel(q.x)}; };   // (dx/dt, dv/dt)
    auto add = [](State q, State d, double c) { return State{q.x + c * d.x, q.v + c * d.v}; };
    State k1 = f(s);
    State k2 = f(add(s, k1, h / 2));
    State k3 = f(add(s, k2, h / 2));
    State k4 = f(add(s, k3, h));
    return {s.x + h / 6 * (k1.x + 2 * k2.x + 2 * k3.x + k4.x),
            s.v + h / 6 * (k1.v + 2 * k2.v + 2 * k3.v + k4.v)};
}

template <class Step>
void run(const char* name, Step step) {
    const double h = 0.1;
    State s{1.0, 0.0};                                  // released from x = 1 m at rest
    double e10 = 0;
    for (int n = 1; n <= 1000; ++n) {
        s = step(s, h);
        if (n == 100) e10 = energy(s) / 0.5;
    }
    std::printf("%-20s %10.6f %13.6f %+10.4f\\n", name, e10, energy(s) / 0.5, s.x);
}

int main() {
    std::printf("%-20s %10s %13s %10s\\n", "h = 0.1 s", "E/E0 10 s", "E/E0 100 s", "x(100 s)");
    run("explicit Euler", explicitEuler);
    run("semi-implicit Euler", semiImplicitEuler);
    run("velocity Verlet", velocityVerlet);
    run("RK4", rk4);
    std::printf("%-20s %10.6f %13.6f %+10.4f\\n", "exact", 1.0, 1.0, std::cos(100.0));
}`,
          output: `h = 0.1 s             E/E0 10 s    E/E0 100 s   x(100 s)
explicit Euler         2.704814  20959.155638   +94.2012
semi-implicit Euler    0.955629      1.042642    +0.9062
velocity Verlet        0.999251      0.999448    +0.8827
RK4                    0.999999      0.999986    +0.8623
exact                  1.000000      1.000000    +0.8623`,
          annotations: [
            { lines: '9-11', text: 'Explicit Euler: $E$ is multiplied by $1 + h^2 = 1.01$ every step, so after $1000$ steps by $1.01^{1000} \\approx 21{,}000$.' },
            { lines: '12-15', text: 'Semi-implicit Euler: one line moved, and the energy stays within about $5\\%$ of its start.' },
            { lines: '16-21', text: 'Velocity Verlet: energy within $0.1\\%$; the remaining position error is mostly a small phase lag.' },
            { lines: '22-31', text: 'RK4: four evaluations of $\\mathbf{F}$, accurate to 4 decimals after 1000 steps, with a tiny, steady energy loss: it is not symplectic.' },
          ],
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0.92, 1.12],
          height: 260,
          functions: [{ expr: '1.01^(x/0.1)', label: 'explicit Euler: $E/E_0 = (1 + \\omega^2h^2)^{t/h}$', color: 'red' }],
          hlines: [{ y: 1, color: 'gray' }],
          points: [
            ...E_SIE.map(([t, e]) => ({ x: t, y: e, color: 'green' as const })),
            ...E_VER.map(([t, e]) => ({ x: t, y: e, color: 'purple' as const })),
          ],
          caption: 'Energy ratio $E/E_0$ against time (s) for the spring with $h = 0.1\\,\\text{s}$, sampled every $0.5\\,\\text{s}$ from the program above. Red: explicit Euler leaves the chart within $2\\,\\text{s}$. Green: semi-implicit Euler oscillates by $\\pm 5\\%$ but never drifts. Purple: Verlet oscillates by only about $0.1\\%$, hugging the gray line. RK4 is not drawn: at this scale it would sit exactly on the line (its loss is about $10^{-5}$ after $100\\,\\text{s}$).',
        },
        {
          type: 'table',
          headers: ['Integrator', 'Order (global)', 'Force evaluations per step', 'Long-run energy on a spring', 'Typical use'],
          rows: [
            ['Explicit Euler', '$1$', '$1$', 'grows without bound', 'teaching; damped, non-oscillating motion'],
            ['Semi-implicit Euler', '$1$', '$1$', 'bounded oscillation', 'rigid-body engines, character controllers'],
            ['Velocity Verlet', '$2$', '$1$', 'bounded, much smaller', 'particles, cloth, ragdolls, molecular dynamics'],
            ['RK4', '$4$', '$4$', 'very accurate, slowly drifts', 'offline trajectories, ballistics tables, smooth orbits'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Choosing',
          text: 'Use RK4 when the forces are smooth and you need accuracy per unit of computing: an artillery or ballistics solver, a spacecraft trajectory, a camera path. In a game world full of collisions, the forces jump discontinuously at every contact, which wipes out RK4\'s high-order advantage; there, the cheap, robust symplectic methods win.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A programmer logs the total mechanical energy of a frictionless pendulum in their game and gets the plot below: the energy climbs steadily, faster and faster. Which integrator are they most likely using?',
      graph: {
        type: 'graph',
        x: [0, 30],
        y: [0, 3],
        height: 220,
        functions: [{ expr: '1.03^(x/0.5)', label: 'logged $E/E_0$', color: 'red' }],
        hlines: [{ y: 1, color: 'gray' }],
        caption: 'Horizontal axis: time in seconds. Vertical axis: energy relative to the start.',
      },
      options: [
        { text: 'Semi-implicit Euler', why: 'Semi-implicit Euler is symplectic: its energy error oscillates within a band and does not grow over time.' },
        { text: 'Velocity Verlet', why: 'Verlet is also symplectic, with an even smaller bounded energy wobble.' },
        { text: 'Explicit Euler', correct: true, why: 'For oscillations, explicit Euler multiplies the energy by roughly $1 + \\omega^2h^2$ each step: exponential growth, exactly this curve.' },
        { text: 'RK4', why: 'RK4 is not symplectic, but its energy error on oscillators is tiny and slowly **decreasing**, not a rapid climb.' },
      ],
      explanation: 'Steady, accelerating energy growth in an undamped oscillator is the fingerprint of explicit Euler: $E_n \\approx (1 + \\omega^2h^2)^nE_0$. The fix costs nothing: swap the two update lines (velocity first) to get semi-implicit Euler, whose energy stays bounded.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Stability: how large can the timestep be?',
      blocks: [
        {
          type: 'p',
          text: 'A symplectic integrator keeps the energy bounded only while the timestep is small enough. Past a critical $h$ the numbers explode no matter what. For semi-implicit Euler on a spring we can find that limit exactly from the step matrix.',
        },
        {
          type: 'derivation',
          title: 'Stability limit of semi-implicit Euler (and Verlet)',
          steps: [
            { tex: 'M = \\begin{bmatrix} 1 - \\omega^2h^2 & h \\\\ -\\omega^2h & 1 \\end{bmatrix}, \\quad \\det M = 1, \\quad \\operatorname{tr} M = 2 - \\omega^2h^2', why: 'The step matrix from before. After $n$ steps the state is $M^n$ times the initial state, so everything depends on the eigenvalues $\\lambda$ of $M$.' },
            { tex: '\\lambda^2 - (2 - \\omega^2h^2)\\lambda + 1 = 0', why: 'Characteristic equation $\\lambda^2 - (\\operatorname{tr} M)\\lambda + \\det M = 0$.' },
            { tex: '|2 - \\omega^2h^2| \\le 2 \\implies \\lambda_{1,2} = e^{\\pm i\\theta}, \\ |\\lambda| = 1', why: 'If the trace is between $-2$ and $2$, the roots are complex conjugates whose product is $1$, so both lie on the unit circle: the motion just rotates, and it stays bounded.' },
            { tex: '|2 - \\omega^2h^2| > 2 \\implies \\text{real roots with } |\\lambda_1| > 1', why: 'Otherwise the roots are real with product $1$, so one has magnitude above $1$, and $M^n$ grows geometrically.' },
            { tex: '\\omega h \\le 2 \\iff h \\le \\frac{2}{\\omega} = \\frac{T}{\\pi}', why: 'Solve $2 - \\omega^2h^2 \\ge -2$. (Eliminating $v$, the positions of both semi-implicit Euler and velocity Verlet obey the same recurrence $x_{n+1} - 2x_n + x_{n-1} = h^2a_n$; only the first step differs. So Verlet has the same limit.)' },
          ],
          result: 'Semi-implicit Euler and Verlet are stable for $\\omega h < 2$: at least about three steps per period $T$. Explicit Euler is never stable for an undamped spring; RK4 is stable up to $\\omega h \\le 2\\sqrt{2} \\approx 2.83$.',
        },
        {
          type: 'derivation',
          title: 'A stiff suspension spring',
          steps: [
            { tex: '\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{1.0 \\times 10^{5}\\,\\text{N/m}}{1.0\\,\\text{kg}}} = 316\\,\\text{rad/s}', why: 'A stiff spring attached to a light part, such as a wheel hub on a suspension.' },
            { tex: 'h < \\frac{2}{316\\,\\text{rad/s}} = 6.3\\,\\text{ms}', why: 'The stability limit. A 60 Hz step is $16.7\\,\\text{ms}$, far too long: the simulation would explode in a few frames.' },
          ],
          result: 'The physics would need to run at more than $160\\,\\text{Hz}$. Engines handle this by **substepping** (several small physics steps per fixed step), by solving stiff springs as constraints, or by implicit methods that evaluate the force at the end of the step.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Rule of thumb',
          text: 'Find the stiffest thing in your scene, compute $\\omega = \\sqrt{k/m}$ for it, and check $\\omega h < 2$, preferably with a safety factor, since damping, contacts and coupled bodies tighten the limit. Unity\'s default fixed timestep is $0.02\\,\\text{s}$ ($50\\,\\text{Hz}$); many games run physics at $60\\,\\text{Hz}$ or higher, and racing games often run vehicle physics at several hundred hertz.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A developer checks whether a spring with $k = 400\\,\\text{N/m}$ on a $1.0\\,\\text{kg}$ body is stable with semi-implicit Euler at $60\\,\\text{Hz}$. Tap the first wrong line.',
      lines: [
        'The angular frequency is $\\omega = k/m = 400\\,\\text{rad/s}$.',
        'Semi-implicit Euler is stable when $\\omega h < 2$, so we need $h < 2/\\omega = 0.0050\\,\\text{s}$.',
        'At $60\\,\\text{Hz}$, $h = 1/60\\,\\text{s} = 0.0167\\,\\text{s}$, which is larger than $0.0050\\,\\text{s}$.',
        'So the spring will explode at $60\\,\\text{Hz}$; the physics must run at $200\\,\\text{Hz}$ or more.',
      ],
      errorLines: [1],
      explanation: 'Line 1 forgets the square root: $\\omega = \\sqrt{k/m} = \\sqrt{400} = 20\\,\\text{rad/s}$ (check the units: $\\sqrt{\\text{N/(m}\\cdot\\text{kg)}} = \\text{s}^{-1}$). Then $h < 2/20 = 0.10\\,\\text{s}$, and $1/60\\,\\text{s}$ gives $\\omega h = 0.33$, comfortably stable. The rest of the reasoning was fine; it was fed a wrong $\\omega$.',
    },
  ],
  takeaways: [
    'Engines advance the state $(\\vec{x}, \\vec{v})$ with an integrator at a fixed timestep, consuming real frame time from an accumulator and interpolating the drawing by $\\alpha$; this makes physics reproducible and frame-rate independent.',
    'Explicit Euler ($x$ with old $v$) has $O(h)$ error, overshoots jump arcs by $\\tfrac12 ght$, and multiplies a spring\'s energy by $1 + \\omega^2h^2$ every step: it always explodes.',
    'Semi-implicit Euler (velocity first, then position with the new velocity) costs the same but is symplectic (step determinant $1$), so its energy error stays bounded. Most game engines use it.',
    'Velocity Verlet uses the average of the old and new accelerations: second order, symplectic, one force evaluation per step, and exact for constant acceleration.',
    'RK4 is fourth order with four evaluations per step: excellent for smooth forces (trajectories, orbits), less useful when contacts make forces jump.',
    'Semi-implicit Euler and Verlet are stable only for $\\omega h < 2$; stiff springs need substeps, constraints or implicit methods.',
  ],
  reading: [
    {
      title: 'Glenn Fiedler: Fix Your Timestep!',
      url: 'https://gafferongames.com/post/fix_your_timestep/',
      source: 'other',
      note: 'The classic article on the accumulator loop, the spiral of death and interpolating the final state; the code in this lesson follows it.',
    },
    {
      title: 'Wikipedia: Verlet integration',
      url: 'https://en.wikipedia.org/wiki/Verlet_integration',
      source: 'wikipedia',
      note: 'Position and velocity Verlet, their error analysis, and their use with constraints for cloth and ragdolls.',
    },
    {
      title: 'Wikipedia: Symplectic integrator',
      url: 'https://en.wikipedia.org/wiki/Symplectic_integrator',
      source: 'wikipedia',
      note: 'Why area-preserving methods like semi-implicit Euler and leapfrog keep energy errors bounded over very long runs.',
    },
    {
      title: 'Wikipedia: Runge–Kutta methods',
      url: 'https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods',
      source: 'wikipedia',
      note: 'The classical RK4 tableau and the wider family of explicit and implicit Runge–Kutta methods.',
    },
  ],
};
