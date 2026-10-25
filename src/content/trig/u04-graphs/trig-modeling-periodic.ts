import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-modeling-periodic',
  title: 'Modeling Periodic Motion',
  summary: 'Turn Ferris wheels, tides and bobbing game pickups into equations: build sinusoidal models from real data and use them to predict.',
  minutes: 18,
  objectives: [
    'Build a sinusoidal model from a maximum, a minimum, a period and the time of one feature',
    'Interpret amplitude, midline, period and phase shift in the language of the situation',
    'Use a model to predict a value at a given time, and use symmetry to find when a value occurs',
    'Write frame-rate-independent oscillation code for game objects using time, frequency and phase',
    'Recognise when a pure sinusoid is not enough, and model decaying oscillations with an exponential envelope',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The modeling recipe',
      blocks: [
        {
          type: 'p',
          text: 'Anything that repeats on a schedule — a seat on a Ferris wheel, the ocean tide, daily temperature, a breathing idle animation — is a candidate for a sinusoidal model. Real data rarely hands you $A$, $B$, $C$ and $D$ directly. Instead you get **descriptions**: "high tide is 9.2 ft at 4:00 am", "one revolution takes 10 minutes". The skill is translating those sentences into the four dials.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Amplitude and midline', text: 'From the highest and lowest values: $A = \\frac{\\max - \\min}{2}$, $D = \\frac{\\max + \\min}{2}$. The midline is the average level; the amplitude is how far the quantity strays from it.' },
            { title: 'Period → $B$', text: 'Find the time for one full cycle, $P$, then $B = \\frac{2\\pi}{P}$. Peak-to-trough is half a period.' },
            { title: 'Choose the base function', text: 'Pick the curve whose natural starting point you know: $\\cos$ starts at a **max**, $-\\cos$ at a **min**, $\\sin$ on the midline **going up**.' },
            { title: 'Phase shift → $C$', text: 'Set $C$ to the time at which that starting feature happens.' },
            { title: 'Check', text: 'Plug in a time you know (a max or min) and confirm the model gives the right value.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why cosine is usually the easiest choice',
          text: 'In the real world, the moments people record are extremes: high tide, the hottest hour, the top of a swing. Cosine *starts* at its maximum, so if you know when a peak happens, $C$ is simply that time — no quarter-period arithmetic. Sine is the natural choice only when you know when the quantity passes through its average level on the way up.',
        },
        {
          type: 'derivation',
          title: 'Daily temperature: high $86°$F at 3 pm, low $62°$F at 3 am',
          steps: [
            { tex: 'A = \\frac{86 - 62}{2} = 12, \\quad D = \\frac{86 + 62}{2} = 74', why: 'The temperature swings $12°$ either side of an average of $74°$.' },
            { tex: 'P = 24 \\implies B = \\frac{2\\pi}{24} = \\frac{\\pi}{12}', why: 'The pattern repeats daily. (3 am to 3 pm is 12 hours, which is half a period — consistent.)' },
            { tex: 'T(t) = 12\\cos\\left(\\tfrac{\\pi}{12}(t - 15)\\right) + 74', why: 'Measure $t$ in hours after midnight; the max is at 3 pm, so use cosine with $C = 15$.' },
            { tex: 'T(3) = 12\\cos(-\\pi) + 74 = -12 + 74 = 62 \\;\\checkmark', why: 'Check the low: $\\frac{\\pi}{12}(3 - 15) = -\\pi$, and $\\cos(-\\pi) = -1$.' },
          ],
          result: '$T(t) = 12\\cos\\left(\\frac{\\pi}{12}(t - 15)\\right) + 74$, with $t$ in hours after midnight.',
        },
      ],
    },
    // Q1 error
    {
      kind: 'error',
      prompt: 'A student models the water level in a harbour that peaks at $14$ ft and bottoms out at $2$ ft, with high tides $24$ hours apart and a high tide at $t = 5$. Tap the first line that is wrong.',
      lines: [
        'Max $14$, min $2$: $A = \\frac{14 - 2}{2} = 6$',
        '$D = \\frac{14 + 2}{2} = 8$',
        'Period $24$ hours, so $B = 24$',
        'High tide at $t = 5$: $h(t) = 6\\cos(24(t - 5)) + 8$',
      ],
      errorLines: [3],
      explanation: 'The period is $24$, but $B$ is not the period: $B = \\frac{2\\pi}{P} = \\frac{2\\pi}{24} = \\frac{\\pi}{12}$. With $B = 24$ the model would complete $\\frac{24}{2\\pi} \\approx 3.8$ cycles every hour! The correct model is $h(t) = 6\\cos\\left(\\frac{\\pi}{12}(t - 5)\\right) + 8$.',
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The Ferris wheel',
      blocks: [
        {
          type: 'p',
          text: 'A Ferris wheel is the unit circle made of steel, so it is the cleanest possible example. Suppose the wheel has diameter $50$ m, its centre is $30$ m above the ground, it makes one revolution every $10$ minutes, and you board at the **bottom** at $t = 0$.',
        },
        {
          type: 'derivation',
          title: 'Model your height $h(t)$, $t$ in minutes',
          steps: [
            { tex: 'A = 25, \\quad D = 30', why: 'The radius is $25$ m, so you swing $25$ m above and below the centre height. Max $= 55$ m, min $= 5$ m (where you board).' },
            { tex: 'B = \\frac{2\\pi}{10} = \\frac{\\pi}{5}', why: 'One cycle of height = one revolution = $10$ minutes.' },
            { tex: '\\text{start at a minimum} \\implies \\text{use } -\\cos', why: 'At $t = 0$ you are at the lowest point. $-\\cos$ starts at its minimum, so no phase shift is needed.' },
            { tex: 'h(t) = 30 - 25\\cos\\left(\\tfrac{\\pi}{5}t\\right)', why: 'Assemble: $D + (-A)\\cos(Bt)$.' },
            { tex: 'h(5) = 30 - 25\\cos\\pi = 55 \\;\\checkmark', why: 'Half a revolution later you should be at the top: $\\cos\\pi = -1$, so $30 + 25 = 55$.' },
          ],
          result: '$h(t) = 30 - 25\\cos\\left(\\frac{\\pi t}{5}\\right)$ metres.',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [0, 60],
          xStep: 2,
          yStep: 10,
          functions: [{ expr: '30 - 25cos(pi*x/5)', label: '$h(t) = 30 - 25\\cos(\\frac{\\pi t}{5})$' }],
          hlines: [
            { y: 30, color: 'green', label: 'centre (midline)' },
            { y: 55, color: 'gray', label: 'top' },
            { y: 5, color: 'gray', label: 'bottom' },
          ],
          points: [{ x: 's', y: '30 - 25cos(pi*s/5)', color: 'red' }],
          segments: [{ from: ['s', 0], to: ['s', '30 - 25cos(pi*s/5)'], color: 'red', dashed: true }],
          sliders: [{ name: 's', min: 0, max: 20, step: 0.1, value: 2.5, label: 'time $t$ (minutes)' }],
          readouts: [{ label: 'height $h(t) =$', expr: '30 - 25cos(pi*s/5)', digits: 2 }],
          caption: 'Time in minutes on the horizontal axis (this is a real-world model, so the ticks are plain numbers, not multiples of $\\pi$). At $t = 2.5$ — a quarter turn — you are level with the centre.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The same answer straight from the unit circle',
          text: 'Measure your angle from the horizontal, as on the unit circle. Boarding at the bottom means starting at $-\\frac{\\pi}{2}$, and the angle grows by $\\frac{\\pi}{5}$ per minute, so $\\theta = \\frac{\\pi t}{5} - \\frac{\\pi}{2}$. Your height is centre $+$ radius $\\times \\sin\\theta = 30 + 25\\sin\\left(\\frac{\\pi t}{5} - \\frac{\\pi}{2}\\right)$, and since $\\sin(u - \\frac{\\pi}{2}) = -\\cos u$ this is exactly $30 - 25\\cos\\frac{\\pi t}{5}$.',
        },
      ],
    },
    // Q2
    {
      kind: 'numeric',
      prompt: 'Using $h(t) = 30 - 25\\cos\\left(\\dfrac{\\pi t}{5}\\right)$, find your height after $t = \\dfrac{10}{3}$ minutes (one third of a revolution).',
      hint: '$\\frac{\\pi}{5} \\cdot \\frac{10}{3} = \\frac{2\\pi}{3}$. What is $\\cos\\frac{2\\pi}{3}$?',
      answer: '42.5',
      unit: 'm',
      explanation: 'The angle is $\\frac{\\pi}{5} \\cdot \\frac{10}{3} = \\frac{2\\pi}{3}$, and $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ (quadrant II, reference angle $\\frac{\\pi}{3}$). So $h = 30 - 25\\left(-\\frac{1}{2}\\right) = 30 + 12.5 = 42.5$ m. Sanity check: after a third of a turn you are past the centre height ($30$) but not at the top ($55$).',
    },
    // Q3 expr
    {
      kind: 'expr',
      prompt: 'A smaller wheel has radius $20$ m, its centre is $24$ m above the ground, and it turns once every $8$ minutes. You board at the bottom at $t = 0$. Write your height $h(t)$ in metres, $t$ in minutes.',
      hint: 'Midline $24$, amplitude $20$, $B = \\frac{2\\pi}{8}$. Starting at the bottom means $-\\cos$.',
      label: '$h(t) =$',
      variables: ['t'],
      domain: [0, 10],
      answer: '24 - 20cos(pi*t/4)',
      answerTex: '24 - 20\\cos\\left(\\frac{\\pi t}{4}\\right)',
      explanation: '$D = 24$ (centre height), $A = 20$ (radius), $B = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$. You start at the minimum, so use $-\\cos$ with no shift: $h(t) = 24 - 20\\cos\\left(\\frac{\\pi t}{4}\\right)$. Check: $h(0) = 4$ m (the boarding platform) and $h(4) = 24 + 20 = 44$ m (the top, half a turn later). Equivalent forms, like $24 + 20\\sin\\left(\\frac{\\pi}{4}(t - 2)\\right)$, are accepted.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Tides: a model from two observations',
      blocks: [
        {
          type: 'p',
          text: 'Most coasts see two high tides a day, driven mainly by the Moon. Because the Moon also moves along its orbit, a full tidal cycle takes about $12.4$ hours, not $12$. A tide table might say: **high tide 9.2 ft at 4:00 am, low tide 1.4 ft at 10:12 am.** That is enough for a complete model.',
        },
        {
          type: 'derivation',
          title: 'Model the water depth $h(t)$, $t$ in hours after midnight',
          steps: [
            { tex: 'A = \\frac{9.2 - 1.4}{2} = 3.9, \\quad D = \\frac{9.2 + 1.4}{2} = 5.3', why: 'Amplitude is half the tidal range; the midline is mean water level.' },
            { tex: '\\tfrac{P}{2} = 10.2 - 4 = 6.2 \\implies P = 12.4', why: '10:12 am is $10.2$ hours after midnight ($12$ minutes $= 0.2$ h). High to low is half a cycle.' },
            { tex: 'B = \\frac{2\\pi}{12.4} \\approx 0.5067', why: 'Convert the period to $B$.' },
            { tex: 'h(t) = 3.9\\cos\\left(\\tfrac{2\\pi}{12.4}(t - 4)\\right) + 5.3', why: 'High tide at $t = 4$: cosine shifted to $C = 4$.' },
            { tex: 'h(10.2) = 3.9\\cos(\\pi) + 5.3 = 1.4 \\;\\checkmark', why: 'Check the low tide: $\\frac{2\\pi}{12.4}(6.2) = \\pi$.' },
          ],
          result: '$h(t) = 3.9\\cos\\left(\\frac{2\\pi}{12.4}(t - 4)\\right) + 5.3$. The next high tide is at $t = 16.4$, about 4:24 pm.',
        },
        {
          type: 'graph',
          x: [0, 26],
          y: [0, 10.5],
          xStep: 2,
          yStep: 2,
          functions: [{ expr: '3.9cos(2pi/12.4*(x - 4)) + 5.3', label: '$h(t)$, depth in feet', color: 'teal' }],
          hlines: [{ y: 5.3, color: 'green', label: 'mean level 5.3 ft' }],
          points: [
            { x: 4, y: 9.2, label: 'high 4:00' },
            { x: 10.2, y: 1.4, label: 'low 10:12' },
            { x: 16.4, y: 9.2, label: 'high 16:24' },
            { x: 12, y: '3.9cos(2pi/12.4*8) + 5.3', label: 'noon?', color: 'red' },
          ],
          caption: 'Two observations determine the whole curve. The red point at noon is what you will compute next.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Models are approximations',
          text: 'Real tides are a sum of several sinusoids (from the Moon, the Sun, and the shape of the coastline), so a single cosine drifts from reality after a few days. Use a model over the range of data it was built from, and be suspicious of long-range predictions. This is true of every model in this lesson.',
        },
      ],
    },
    // Q4
    {
      kind: 'numeric',
      prompt: 'Using $h(t) = 3.9\\cos\\left(\\dfrac{2\\pi}{12.4}(t - 4)\\right) + 5.3$, estimate the water depth at **noon** ($t = 12$). Round to two decimal places.',
      hint: 'Compute the angle $\\frac{2\\pi}{12.4} \\cdot 8$ in radians (calculator in radian mode!), take its cosine, then multiply and add.',
      answer: '3.9cos(2pi*8/12.4) + 5.3',
      answerTex: '\\approx 2.91',
      tolerance: 0.02,
      unit: 'ft',
      explanation: 'At $t = 12$ the angle is $\\frac{2\\pi}{12.4}(12 - 4) = \\frac{16\\pi}{12.4} \\approx 4.054$ radians, and $\\cos(4.054) \\approx -0.6121$. So $h(12) \\approx 3.9(-0.6121) + 5.3 \\approx 2.91$ ft. That fits the graph: noon is $1.8$ hours after the 10:12 low tide, so the water is rising again but still well below the mean level of $5.3$ ft. (Degree mode would give a wildly wrong answer — models use radians.)',
    },
    // Q5
    {
      kind: 'truefalse',
      prompt: 'For a tide that peaks at $9.2$ ft and bottoms out at $1.4$ ft, the amplitude of the model is $7.8$ ft.',
      answer: false,
      explanation: '$7.8$ ft is the **tidal range**, the full distance from high to low water. The amplitude is how far the level moves from its mean, which is half the range: $A = \\frac{9.2 - 1.4}{2} = 3.9$ ft. Using $7.8$ would make the model swing from $5.3 - 7.8 = -2.5$ ft to $13.1$ ft — a dry harbour floor with negative depth.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'When does it happen? Using symmetry',
      blocks: [
        {
          type: 'p',
          text: 'Predicting a value at a given time is just plugging in. The reverse question — *when* is the rider at $42.5$ m, *when* is the water $7.25$ ft deep — usually needs inverse trig functions, which come in the next unit. But often symmetry is enough: **every sinusoid is a mirror image of itself across the vertical line through any peak or trough.**',
        },
        {
          type: 'p',
          text: 'So if a value occurs a time $d$ *before* a peak, it also occurs a time $d$ *after* it. And of course every value recurs one period later.',
        },
        {
          type: 'derivation',
          title: 'For how long is a Ferris wheel rider above $42.5$ m on each turn?',
          steps: [
            { tex: 'h\\left(\\tfrac{10}{3}\\right) = 42.5', why: 'From the previous question: on the way up, the rider reaches $42.5$ m at $t = \\frac{10}{3}$ min.' },
            { tex: '\\text{peak at } t = 5: \\quad d = 5 - \\tfrac{10}{3} = \\tfrac{5}{3}', why: 'The top of the ride is half a revolution in. The rider reaches $42.5$ m $\\frac{5}{3}$ min before the peak.' },
            { tex: 'h\\left(5 + \\tfrac{5}{3}\\right) = h\\left(\\tfrac{20}{3}\\right) = 42.5', why: 'By mirror symmetry about $t = 5$, the rider is back at $42.5$ m $\\frac{5}{3}$ min after the peak.' },
            { tex: '\\tfrac{20}{3} - \\tfrac{10}{3} = \\tfrac{10}{3} \\text{ min}', why: 'Between those two moments the rider is higher than $42.5$ m.' },
          ],
          result: 'The rider is above $42.5$ m for $\\frac{10}{3}$ minutes ($3$ min $20$ s) of every $10$-minute revolution — one third of the ride.',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [0, 60],
          xStep: 2,
          yStep: 10,
          functions: [{ expr: '30 - 25cos(pi*x/5)', label: '$h(t)$' }],
          areas: [{ expr: '30 - 25cos(pi*x/5)', expr2: '42.5', from: '10/3', to: '20/3', color: 'orange' }],
          hlines: [{ y: 42.5, color: 'orange', label: 'h = 42.5' }],
          vlines: [{ x: 5, color: 'green', label: 't = 5 (peak)' }],
          points: [
            { x: '10/3', y: 42.5, label: '(10/3, 42.5)' },
            { x: '20/3', y: 42.5, label: '(20/3, 42.5)' },
          ],
          caption: 'The two crossings are mirror images across the peak at $t = 5$. The shaded part of the cycle repeats every $10$ minutes.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check with the graph',
          text: 'Before trusting a computed time, glance at the graph: is the curve rising or falling there, and is the time inside the cycle you meant? Most wrong answers in "when" problems are the *other* crossing in the same cycle, or a crossing from the wrong cycle.',
        },
      ],
    },
    // Q6
    {
      kind: 'numeric',
      prompt: 'In the tide model, high tide is at $t = 4$ h and the period is $12.4$ h. The water depth is $7.25$ ft at $t = 4 + \\frac{12.4}{6} \\approx 6.07$ h, as the tide falls. Find the **next** time after that when the depth is again $7.25$ ft.',
      hint: 'The next high tide is at $t = 16.4$. The crossing on the rising side comes the same amount of time *before* that peak as the falling one came after the $t = 4$ peak.',
      label: '$t \\approx$',
      unit: 'hours after midnight',
      answer: '16.4 - 12.4/6',
      answerTex: '16.4 - \\frac{12.4}{6} \\approx 14.33',
      tolerance: 0.02,
      explanation: 'The falling crossing is $d = \\frac{12.4}{6} \\approx 2.067$ h after the 4:00 high tide. The curve is symmetric about each peak, so on the way up to the next high tide (at $4 + 12.4 = 16.4$ h) the depth passes $7.25$ ft the same $2.067$ h early: $t = 16.4 - 2.067 \\approx 14.33$ h, about 2:20 pm. (Check: $h(14.33) = 3.9\\cos\\left(\\frac{2\\pi}{12.4}\\cdot 10.33\\right) + 5.3 = 3.9 \\cdot \\frac{1}{2} + 5.3 = 7.25$.)',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Bobbing pickups and idle animations',
      blocks: [
        {
          type: 'p',
          text: 'Games are full of periodic motion: coins that hover up and down, a character\'s chest rising and falling while idle, a torch flickering, a menu button pulsing. Every one is $y = D + A\\sin(Bt + \\varphi)$ with $t$ the elapsed time. Designers think in **frequency** $f$ (cycles per second), so code usually writes $B = 2\\pi f$, the [[angular-frequency]].',
        },
        {
          type: 'code',
          title: 'bob.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double kPi = 3.14159265358979323846;
    const double baseY = 1.0;  // resting height     (D)
    const double amp = 0.25;   // amplitude          (A)
    const double freq = 0.5;   // bobs per second    (f)
    const double omega = 2.0 * kPi * freq;  // B = 2*pi*f

    for (int frame = 0; frame <= 8; ++frame) {
        double t = frame * 0.25;  // elapsed time in seconds
        double y = baseY + amp * std::sin(omega * t);
        std::printf("t = %.2f s  y = %.3f\\n", t, y);
    }
}`,
          output: `t = 0.00 s  y = 1.000
t = 0.25 s  y = 1.177
t = 0.50 s  y = 1.250
t = 0.75 s  y = 1.177
t = 1.00 s  y = 1.000
t = 1.25 s  y = 0.823
t = 1.50 s  y = 0.750
t = 1.75 s  y = 0.823
t = 2.00 s  y = 1.000`,
          annotations: [
            { lines: '6-8', text: 'The designer-facing dials: midline $D$, amplitude $A$ and frequency $f$ in Hz.' },
            { lines: 9, text: '$B = 2\\pi f = \\pi$, so the period is $\\frac{2\\pi}{\\pi} = 2$ seconds.' },
            { lines: 12, text: 'Sampling every $0.25$ s, i.e. every eighth of a period.' },
            { lines: 13, text: 'The sinusoid: midline, peak at $t = 0.5$, midline, trough at $t = 1.5$, midline.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Three rules for oscillation in a game loop',
          text: '**Use time, not frame count.** `sin(omega * frameCount)` bobs twice as fast on a 120 Hz monitor as on a 60 Hz one; `sin(omega * elapsedSeconds)` looks the same everywhere.\n\n**Give each object a phase.** If every coin uses the same formula they bob in lockstep, which looks robotic. Adding $\\varphi$ per coin — random, or proportional to its $x$-position so a row of coins ripples like a stadium wave — fixes it.\n\n**Wrap long-running time.** A `float` holding $t = 100000$ s can only step in increments of about $0.008$ s, so `sin(omega * t)` starts to stutter. Since the motion is periodic, you lose nothing by wrapping: `t = std::fmod(t, period)`.',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [0.5, 1.5],
          xStep: 0.5,
          functions: [
            { expr: '1 + 0.25sin(pi*x)', label: 'coin 1: $\\varphi = 0$', color: 'orange' },
            { expr: '1 + 0.25sin(pi*x + p)', label: 'coin 2: phase $\\varphi$', color: 'blue' },
          ],
          sliders: [{ name: 'p', min: 0, max: 6.28, step: 0.02, value: 1.57, label: 'phase $\\varphi$' }],
          readouts: [{ label: 'coin 2 leads by (seconds) ', expr: 'p/pi' }],
          caption: 'Two coins with the same amplitude and period. The phase $\\varphi$ shifts coin 2\'s cycle earlier by $\\frac{\\varphi}{B}$ seconds; at $\\varphi = 2\\pi$ they are back in sync.',
        },
      ],
    },
    // Q7 mcq
    {
      kind: 'mcq',
      prompt: 'A coin hovers with height $y(t) = 2 + 0.3\\sin(4\\pi t)$, $t$ in seconds. How many complete bobs does it make per second?',
      options: [
        {
          text: '$4\\pi$',
          why: 'That is $B$, the angular frequency in **radians** per second. Divide by $2\\pi$ radians per cycle to get cycles per second.',
        },
        {
          text: '$\\frac{1}{2}$',
          why: 'That is the period, $\\frac{2\\pi}{4\\pi} = \\frac{1}{2}$ second per bob. Bobs per second is its reciprocal.',
        },
        {
          text: '$2$',
          correct: true,
          why: '$f = \\frac{B}{2\\pi} = \\frac{4\\pi}{2\\pi} = 2$ bobs per second.',
        },
        {
          text: '$0.3$',
          why: '$0.3$ is the amplitude — how far the coin moves, not how often.',
        },
      ],
      explanation: 'Frequency is $f = \\frac{1}{P}$ with $P = \\frac{2\\pi}{B} = \\frac{2\\pi}{4\\pi} = \\frac{1}{2}$ s, so $f = 2$ Hz. Keeping $A$ (how far), $D$ (where) and $B$ (how often) separate in your head is exactly what makes these animations easy to tune.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'When the swings die out: damped oscillation',
      blocks: [
        {
          type: 'p',
          text: 'A pure sinusoid repeats forever with the same amplitude. Real springs, pendulums and guitar strings lose energy, so their swings shrink. The fix is to let the amplitude itself decay: replace the constant $A$ with an exponential $Ae^{-kt}$. The result is a [[damped-oscillation]].',
        },
        {
          type: 'math',
          tex: 'y(t) = A e^{-kt}\\cos(\\omega t), \\qquad k > 0',
          caption: 'The curves $y = \\pm Ae^{-kt}$ are the **envelope**: the wave bounces between them.',
        },
        {
          type: 'graph',
          x: [0, 2],
          y: [-9, 9],
          xStep: 0.25,
          functions: [
            { expr: '8e^(-k*x)cos(40x)', label: '$y = 8e^{-kt}\\cos(40t)$', color: 'blue' },
            { expr: '8e^(-k*x)', label: 'envelope $\\pm 8e^{-kt}$', color: 'red', dashed: true },
            { expr: '-8e^(-k*x)', color: 'red', dashed: true },
          ],
          sliders: [{ name: 'k', min: 0, max: 6, step: 0.1, value: 3, label: 'damping $k$' }],
          readouts: [{ label: 'envelope at $t = 0.5$: ', expr: '8e^(-k*0.5)', digits: 3 }],
          caption: 'A screen-shake offset in pixels. At $k = 0$ it never stops; larger $k$ kills the shake faster. The frequency $\\omega = 40$ rad/s does not change.',
        },
        {
          type: 'derivation',
          title: 'When has the shake $8e^{-3t}\\cos(40t)$ shrunk below $1$ pixel?',
          steps: [
            { tex: '|y(t)| \\le 8e^{-3t}', why: 'Since $|\\cos| \\le 1$, the envelope bounds the shake. Once the envelope is below $1$ px, so is the shake.' },
            { tex: '8e^{-3t} = 1 \\iff e^{-3t} = \\tfrac{1}{8}', why: 'Set the envelope equal to $1$ and divide by $8$.' },
            { tex: '-3t = \\ln\\tfrac{1}{8} = -\\ln 8', why: 'Take the natural log of both sides; $\\ln\\frac{1}{8} = -\\ln 8$.' },
            { tex: 't = \\frac{\\ln 8}{3} \\approx 0.693 \\text{ s}', why: 'Divide by $-3$.' },
          ],
          result: 'After about $0.69$ s the shake is under a pixel — a natural moment to switch it off entirely.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why sinusoids show up everywhere',
          text: 'Anything that moves around a circle at constant speed casts a sinusoidal shadow — that covers wheels, orbits and rotating machinery. And anything pulled back toward a rest position with a force proportional to its displacement (a spring, a pendulum at small angles, a vibrating string) oscillates sinusoidally too. In calculus you will see why: sine and cosine are the functions whose second derivative is the negative of themselves.',
        },
      ],
    },
    // Q8 numeric
    {
      kind: 'numeric',
      prompt: 'A springy UI panel wobbles with offset $y(t) = 12e^{-2t}\\sin(30t)$ pixels. At what time $t$ does the **envelope** $12e^{-2t}$ fall to $3$ pixels?',
      hint: 'Solve $12e^{-2t} = 3$: divide by $12$, then take $\\ln$ of both sides.',
      label: '$t =$',
      unit: 's',
      answer: 'ln(4)/2',
      answerTex: '\\frac{\\ln 4}{2} = \\ln 2 \\approx 0.693',
      explanation: '$12e^{-2t} = 3 \\implies e^{-2t} = \\frac{1}{4} \\implies -2t = -\\ln 4 \\implies t = \\frac{\\ln 4}{2} = \\ln 2 \\approx 0.693$ s. Notice the frequency ($30$ rad/s) plays no role: the envelope alone controls how fast the wobble dies out. In general the envelope shrinks by a factor of $4$ every $\\ln 2 \\approx 0.693$ s, which means it halves every $\\frac{\\ln 2}{2} \\approx 0.35$ s.',
    },
    // Q9 order
    {
      kind: 'order',
      prompt: 'Put the steps for building a sinusoidal model from a description in order.',
      lines: [
        'Find the max and min, then $A = \\frac{\\max - \\min}{2}$ and $D = \\frac{\\max + \\min}{2}$',
        'Find the period $P$ and compute $B = \\frac{2\\pi}{P}$',
        'Choose $\\cos$, $-\\cos$ or $\\sin$ to match a known feature (max, min or rising midline)',
        'Set the phase shift $C$ to the time of that feature',
        'Check the model at a time where you know the value',
      ],
      distractors: ['Set $B$ equal to the period $P$'],
      explanation: 'Vertical dials first (they only need the extremes), then the period and $B$, then the base function and its shift together — the choice of function decides which feature $C$ points to. Always finish with a check. The distractor is the most common modeling slip: $B$ is $\\frac{2\\pi}{P}$, not $P$.',
    },
  ],
  takeaways: [
    'Model with $y = A\\cos(B(t - C)) + D$: $A$ and $D$ from the max and min, $B = \\frac{2\\pi}{P}$ from the period, $C$ from the time of a known feature.',
    'Choose cosine to start at a max, $-\\cos$ at a min (Ferris wheel boarding), sine on the midline going up.',
    'Amplitude is half the range; using the full range is the most common modeling mistake.',
    'Sinusoids are symmetric about each peak and trough, so a value reached $d$ before a peak recurs $d$ after it, and every value recurs one period later.',
    'In games, use elapsed time, $B = 2\\pi f$, a per-object phase, and an exponential envelope $e^{-kt}$ for motion that settles.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 6.1 Graphs of the Sine and Cosine Functions',
      url: 'https://openstax.org/books/precalculus-2e/pages/6-1-graphs-of-the-sine-and-cosine-functions',
      source: 'openstax',
      note: 'The end of the section models a Ferris wheel exactly as this lesson does, with more practice problems.',
    },
    {
      title: 'Wikipedia — Tide',
      url: 'https://en.wikipedia.org/wiki/Tide',
      source: 'wikipedia',
      note: 'Why tides follow a roughly 12.4-hour cycle and how real tide predictions add up many sinusoids.',
    },
    {
      title: 'Wikipedia — Damping',
      url: 'https://en.wikipedia.org/wiki/Damping',
      source: 'wikipedia',
      note: 'Damped oscillation in physics: the decaying exponential envelope and its variations.',
    },
  ],
};
