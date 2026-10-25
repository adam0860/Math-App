import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-exp-models',
  title: 'Growth, Decay and Compound Interest',
  summary: 'Put exponentials and logs to work: populations, savings accounts, doubling times, radioactive half-lives and frame-rate-independent game physics.',
  minutes: 18,
  objectives: [
    'Build exponential growth and decay models $A = A_0(1 + r)^t$ and $A = A_0 e^{kt}$',
    'Use the compound interest formulas $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$ and $A = Pe^{rt}$',
    'Compute doubling times and half-lives with logarithms, and explain the rule of 72',
    'Find an exponential model from two data points and use it to predict',
    'Recognise exponential decay in game loops and make it frame-rate independent',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Growth by a constant percentage',
      blocks: [
        {
          type: 'p',
          text: 'A town of $2000$ people grows by $3\\%$ per year. Each year the population is multiplied by $1 + 0.03 = 1.03$: last year\'s amount plus $3\\%$ of it. After $t$ years it has been multiplied by $1.03$ a total of $t$ times.',
        },
        {
          type: 'theorem',
          name: 'Exponential growth and decay',
          tex: 'A(t) = A_0 (1 + r)^t',
          text: '$A_0$ is the initial amount, $r$ the rate per time period (as a decimal), and $1 + r$ the **growth factor**. If $r > 0$ this is [[exponential-growth]]; if $-1 < r < 0$ it is [[exponential-decay]] (e.g. losing $20\\%$ a year means a factor of $0.8$).',
        },
        {
          type: 'derivation',
          title: 'Population after 10 years',
          steps: [
            { tex: 'P(t) = 2000(1.03)^t', why: 'Initial amount $2000$, growth factor $1 + 0.03$.' },
            { tex: 'P(10) = 2000(1.03)^{10}', why: 'Substitute $t = 10$.' },
            { tex: '\\approx 2000(1.343916) \\approx 2688', why: 'Exponent before multiplication: compute $1.03^{10}$ first. Round people to a whole number.' },
          ],
          result: 'About $2688$ people — an increase of $34\\%$, not $30\\%$, because each year\'s growth also earns growth.',
        },
        {
          type: 'graph',
          x: [0, 30],
          y: [0, 8000],
          xStep: 5,
          yStep: 1000,
          functions: [
            { expr: '2000(1 + r)^x', label: '$P = 2000(1 + r)^t$' },
            { expr: '2000 + 2000*r*x', label: 'linear: $+\\,2000r$ per year', color: 'gray', dashed: true },
          ],
          sliders: [{ name: 'r', min: -0.15, max: 0.15, step: 0.005, value: 0.03, label: 'rate $r$' }],
          readouts: [{ label: '$P(10) \\approx$', expr: '2000(1 + r)^10', digits: 1 }],
          caption: 'Positive $r$ curves upward away from the linear model; negative $r$ gives decay toward $0$. Here the horizontal axis is time $t$ in years.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Rate vs factor',
          text: 'The rate is $r$; the factor is $1 + r$. Growing by $3\\%$ means multiplying by $1.03$, **not** by $0.03$ (that would wipe out $97\\%$) and **not** by $3$. Decaying by $18\\%$ means multiplying by $0.82$.',
        },
        {
          type: 'p',
          text: 'When a quantity **doubles** every $d$ time units, it is cleaner to write $A(t) = A_0 \\cdot 2^{t/d}$: after one period $t = d$ the exponent is $1$ and the amount has doubled. The same idea with $\\frac12$ gives half-lives, later in this lesson.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A culture starts with $500$ bacteria and doubles every $3$ hours. How many bacteria are there after $12$ hours?',
      hint: '$A(t) = 500 \\cdot 2^{t/3}$. How many doubling periods fit in 12 hours?',
      answer: '8000',
      unit: 'bacteria',
      explanation: '$A(12) = 500 \\cdot 2^{12/3} = 500 \\cdot 2^4 = 500 \\cdot 16 = 8000$. Twelve hours is four doubling periods: $500 \\to 1000 \\to 2000 \\to 4000 \\to 8000$.',
    },
    {
      kind: 'mcq',
      prompt: 'A car\'s value is modelled by $V(t) = 28{,}000(0.82)^t$, with $t$ in years. What does the model say?',
      options: [
        { text: 'The value grows by $82\\%$ per year', why: 'A factor below $1$ means decay, not growth.' },
        { text: 'The value drops by $82\\%$ per year', why: 'The factor $0.82$ is what **remains** each year. Losing $82\\%$ would leave a factor of $0.18$.' },
        { text: 'The value drops by $18\\%$ per year', correct: true, why: '$0.82 = 1 - 0.18$, so $r = -0.18$: each year the car keeps $82\\%$ of its value and loses $18\\%$.' },
        { text: 'The value drops by \\$0.82 per year', why: 'That would be a linear model. In an exponential model the number in the base is a multiplier.' },
      ],
      explanation: 'Match $0.82$ with $1 + r$: $r = -0.18$. The car loses $18\\%$ of its *current* value each year, so it loses fewer dollars each year as it gets cheaper — the hallmark of exponential decay.',
    },
    {
      kind: 'concept',
      title: 'Compound interest and continuous compounding',
      blocks: [
        {
          type: 'p',
          text: 'Banks quote an annual rate $r$ but often add interest $n$ times a year, each time paying $\\frac{r}{n}$ of the balance. That is $n t$ growth steps, each with factor $1 + \\frac{r}{n}$.',
        },
        {
          type: 'theorem',
          name: 'Compound interest',
          tex: 'A = P\\left(1 + \\frac{r}{n}\\right)^{nt} \\qquad\\qquad A = Pe^{rt} \\ \\text{(continuous)}',
          text: '$P$ = principal, $r$ = annual rate (decimal), $n$ = compoundings per year, $t$ = years, $A$ = final balance. See also [[compound-interest]].',
        },
        {
          type: 'table',
          headers: ['Compounding', '$n$', '\\$1000 at 5% for 10 years'],
          rows: [
            ['annually', '$1$', '\\$1628.89'],
            ['quarterly', '$4$', '\\$1643.62'],
            ['monthly', '$12$', '\\$1647.01'],
            ['daily', '$365$', '\\$1648.66'],
            ['continuously', '$\\infty$', '$1000e^{0.5} \\approx$ \\$1648.72'],
          ],
          caption: 'More frequent compounding helps, but the gains shrink fast. Continuous compounding is the ceiling.',
        },
        {
          type: 'derivation',
          title: 'Why continuous compounding gives $e^{rt}$',
          steps: [
            { tex: 'P\\left(1 + \\frac{r}{n}\\right)^{nt}', why: 'Start with the compound interest formula.' },
            { tex: '= P\\left(1 + \\frac{1}{m}\\right)^{m r t}, \\quad m = \\frac{n}{r}', why: 'Let $m = \\frac{n}{r}$, so $\\frac{r}{n} = \\frac{1}{m}$ and $n = mr$.' },
            { tex: '= P\\left[\\left(1 + \\frac{1}{m}\\right)^{m}\\right]^{rt}', why: 'Power of a power, read backwards: $x^{m \\cdot rt} = (x^m)^{rt}$.' },
            { tex: '\\to P e^{rt} \\ \\text{ as } n \\to \\infty', why: 'As $n \\to \\infty$, $m \\to \\infty$ too, and $\\left(1 + \\frac1m\\right)^m \\to e$ — the very definition of $e$ from the first lesson of this unit.' },
          ],
          result: 'Compounding "every instant" gives $A = Pe^{rt}$.',
        },
        {
          type: 'derivation',
          title: '\\$5000 at 4% compounded monthly for 8 years',
          steps: [
            { tex: 'A = 5000\\left(1 + \\frac{0.04}{12}\\right)^{12 \\cdot 8}', why: '$P = 5000$, $r = 0.04$, $n = 12$, $t = 8$.' },
            { tex: '= 5000(1.003333\\ldots)^{96}', why: 'Keep full precision in $\\frac{0.04}{12}$; rounding it early causes visible errors after 96 steps.' },
            { tex: '\\approx 5000(1.376395) \\approx 6881.98', why: 'Evaluate the power first, then multiply.' },
          ],
          result: 'The balance is about \\$6881.98.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $e$ shows up in finance at all',
          text: 'Every growth process that happens smoothly — not in yearly jumps — leads to the limit $\\left(1 + \\frac1m\\right)^m$. Any exponential $A_0 b^t$ can be rewritten as $A_0 e^{kt}$ with $k = \\ln b$ (since $e^{\\ln b} = b$). So the $3\\%$-per-year town is also $2000e^{0.02956t}$: a *continuous* rate of $2.956\\%$ gives the same yearly factor of $1.03$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'You deposit \\$2000 at an annual rate of $6\\%$, compounded monthly. What is the balance after $5$ years? (Round to the nearest cent.)',
      hint: '$A = 2000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\cdot 5} = 2000(1.005)^{60}$.',
      label: '$A \\approx$ \\$',
      answer: '2697.70',
      tolerance: 0.01,
      explanation: '$\\frac{0.06}{12} = 0.005$ per month for $60$ months: $A = 2000(1.005)^{60} \\approx 2000(1.348850) \\approx \\$2697.70$. Compare simple interest ($6\\%$ of \\$2000 each year, \\$2600 total): compounding earned an extra \\$97.70.',
    },
    {
      kind: 'truefalse',
      prompt: 'By compounding often enough (every second, every nanosecond, …), \\$1000 at $5\\%$ for one year can grow to any amount you like.',
      answer: false,
      explanation: 'More compounding helps, but the balance approaches a ceiling: continuous compounding gives $1000e^{0.05} \\approx \\$1051.27$. That bound is exactly the limit $\\left(1 + \\frac{1}{m}\\right)^m \\to e$ at work — a quantity that increases forever yet stays bounded.',
    },
    {
      kind: 'concept',
      title: 'Doubling time and the rule of 72',
      blocks: [
        {
          type: 'p',
          text: '"How long until my money doubles?" asks for the [[alg-doubling-time|doubling time]]: solve $P(1 + r)^t = 2P$ for $t$. The unknown is in the exponent, so logs come to the rescue. Notice the answer does not depend on $P$: \\$10 and \\$10 million double in the same time.',
        },
        {
          type: 'derivation',
          title: 'Doubling time at 7% compounded annually',
          steps: [
            { tex: 'P(1.07)^t = 2P', why: 'The balance equals twice the principal.' },
            { tex: '(1.07)^t = 2', why: 'Divide by $P$. The principal cancels.' },
            { tex: 't \\ln 1.07 = \\ln 2', why: 'Take $\\ln$ of both sides and use the power rule.' },
            { tex: 't = \\frac{\\ln 2}{\\ln 1.07} \\approx 10.24', why: 'Divide by $\\ln 1.07$.' },
          ],
          result: 'Money at $7\\%$ doubles in about $10.24$ years.',
        },
        {
          type: 'theorem',
          name: 'Doubling time',
          tex: 't_{\\text{double}} = \\frac{\\ln 2}{\\ln(1 + r)} \\ \\text{(per-period rate } r), \\qquad t_{\\text{double}} = \\frac{\\ln 2}{k} \\ \\text{(continuous rate } k)',
        },
        {
          type: 'p',
          text: 'Investors use a mental shortcut, the **rule of 72**: doubling time $\\approx \\frac{72}{\\text{rate in percent}}$. At $7\\%$, $\\frac{72}{7} \\approx 10.3$ years — very close to $10.24$.',
        },
        {
          type: 'table',
          headers: ['rate', 'exact $\\frac{\\ln 2}{\\ln(1+r)}$', 'rule of 72'],
          rows: [
            ['$2\\%$', '$35.00$', '$36$'],
            ['$6\\%$', '$11.90$', '$12$'],
            ['$8\\%$', '$9.01$', '$9$'],
            ['$12\\%$', '$6.12$', '$6$'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 72 works',
          text: 'For small $r$, $\\ln(1 + r) \\approx r$ (the graph of $\\ln(1 + x)$ hugs the line $y = x$ near $0$). So $t \\approx \\frac{\\ln 2}{r} \\approx \\frac{0.693}{r} = \\frac{69.3}{\\text{rate in }\\%}$. Using $72$ instead of $69.3$ corrects for $\\ln(1+r)$ being slightly *less* than $r$ at typical rates, and $72$ is divisible by $2, 3, 4, 6, 8, 9, 12$ — easy mental math.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'An investment earns $7\\%$ per year, compounded annually. How many years until it doubles? Give an exact expression or a decimal to 2 places.',
      hint: 'Solve $(1.07)^t = 2$ by taking $\\ln$ of both sides.',
      label: '$t =$',
      answer: 'ln(2)/ln(1.07)',
      answerTex: '\\frac{\\ln 2}{\\ln 1.07} \\approx 10.24',
      unit: 'years',
      explanation: '$(1.07)^t = 2 \\Rightarrow t \\ln 1.07 = \\ln 2 \\Rightarrow t = \\frac{\\ln 2}{\\ln 1.07} \\approx \\frac{0.6931}{0.06766} \\approx 10.24$ years. The rule of 72 estimates $\\frac{72}{7} \\approx 10.29$ — close enough for a quick sanity check.',
    },
    {
      kind: 'concept',
      title: 'Decay and half-life',
      blocks: [
        {
          type: 'p',
          text: 'Radioactive atoms, medicines in the bloodstream and the heat of a cooling coffee cup all decay by a constant fraction per unit time. The natural way to describe such decay is its [[half-life]]: the time for the amount to halve.',
        },
        {
          type: 'theorem',
          name: 'Half-life model',
          tex: 'A(t) = A_0 \\left(\\frac{1}{2}\\right)^{t/h} = A_0 e^{-kt}, \\qquad k = \\frac{\\ln 2}{h}',
          text: 'After one half-life ($t = h$) half remains, after two a quarter, after three an eighth. The decay constant $k$ links the two forms.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 110],
          xStep: 2,
          yStep: 25,
          functions: [{ expr: '100(1/2)^(x/h)', label: '$A = 100\\left(\\tfrac12\\right)^{t/h}$' }],
          hlines: [{ y: 50, label: '50%' }, { y: 25, label: '25%' }],
          vlines: [{ x: 'h', label: 't = h' }, { x: '2h', label: 't = 2h' }],
          sliders: [{ name: 'h', min: 1, max: 9, step: 0.5, value: 4, label: 'half-life $h$' }],
          readouts: [{ label: 'decay constant $k = \\frac{\\ln 2}{h} \\approx$', expr: 'ln(2)/h', digits: 4 }],
          caption: 'Whatever the half-life, the curve hits $50\\%$ at $t = h$ and $25\\%$ at $t = 2h$. A longer half-life means a smaller decay constant.',
        },
        {
          type: 'derivation',
          title: 'Carbon dating: a bone has 30% of its original carbon-14 (half-life 5730 years)',
          steps: [
            { tex: '0.30 A_0 = A_0 \\left(\\tfrac12\\right)^{t/5730}', why: '$30\\%$ of the original amount remains.' },
            { tex: '0.30 = \\left(\\tfrac12\\right)^{t/5730}', why: 'Divide by $A_0$: the original amount does not need to be known.' },
            { tex: '\\ln 0.30 = \\frac{t}{5730} \\ln 0.5', why: 'Take $\\ln$ of both sides; power rule.' },
            { tex: 't = 5730 \\cdot \\frac{\\ln 0.30}{\\ln 0.5} \\approx 9953', why: 'Multiply by $5730$ and divide by $\\ln 0.5$. Both logs are negative, so $t$ is positive — a built-in sanity check.' },
          ],
          result: 'The bone is about $9950$ years old — between one and two half-lives, since $30\\%$ is between $50\\%$ and $25\\%$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Estimate before you compute. $30\\%$ remaining is between $50\\%$ (one half-life) and $25\\%$ (two), so the answer must be between $5730$ and $11460$ years. If your calculation lands outside that range, a log ratio is probably upside down.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A patient takes $200$ mg of a drug with a half-life of $6$ hours. How much remains in the body after $24$ hours?',
      hint: 'How many half-lives is 24 hours?',
      answer: '12.5',
      unit: 'mg',
      explanation: '$A(24) = 200\\left(\\frac12\\right)^{24/6} = 200\\left(\\frac12\\right)^4 = \\frac{200}{16} = 12.5$ mg. Four half-lives: $200 \\to 100 \\to 50 \\to 25 \\to 12.5$.',
    },
    {
      kind: 'error',
      prompt: 'A sample of $100$ g has a half-life of $8$ days. A student finds when only $20$ g remain. Tap the first incorrect line.',
      lines: [
        '$20 = 100\\left(\\tfrac12\\right)^{t/8}$',
        '$0.2 = \\left(\\tfrac12\\right)^{t/8}$',
        '$\\ln 0.2 = \\tfrac{t}{8} \\ln 0.5$',
        '$t = \\dfrac{8 \\ln 0.5}{\\ln 0.2} \\approx 3.45$ days',
      ],
      errorLines: [4],
      explanation: 'Line 4 flips the ratio. From $\\ln 0.2 = \\frac{t}{8} \\ln 0.5$, divide by $\\ln 0.5$ and multiply by $8$: $t = \\frac{8 \\ln 0.2}{\\ln 0.5} \\approx 18.58$ days. The estimate catches the error: $20$ g is less than $25$ g (two half-lives, $16$ days), so the answer must exceed $16$ days, not be under one half-life.',
    },
    {
      kind: 'expr',
      prompt: 'A substance has an initial mass of $80$ g and a half-life of $4$ days. Write the mass $A(t)$ remaining after $t$ days.',
      hint: 'Use $A(t) = A_0 \\left(\\frac12\\right)^{t/h}$.',
      label: '$A(t) =$',
      variables: ['t'],
      domain: [0, 10],
      answer: '80(1/2)^(t/4)',
      answerTex: '80\\left(\\tfrac{1}{2}\\right)^{t/4}',
      explanation: 'Initial mass $A_0 = 80$, half-life $h = 4$: $A(t) = 80\\left(\\frac12\\right)^{t/4}$. Equivalent forms are accepted, such as $80 \\cdot 2^{-t/4}$ or $80e^{-(\\ln 2/4)t}$. Check: $A(4) = 40$ and $A(8) = 20$. ✓',
    },
    {
      kind: 'concept',
      title: 'Models from data, and decay in game loops',
      blocks: [
        {
          type: 'p',
          text: 'Real problems rarely hand you the rate. Instead you get two measurements, and you build the model as in the first lesson of this unit: the ratio of the two values gives the growth factor over that time span.',
        },
        {
          type: 'derivation',
          title: 'A herd grows from 1000 to 1500 in 4 years. Predict year 10; when will it reach 5000?',
          steps: [
            { tex: 'P(t) = 1000 \\, b^t, \\quad 1000 b^4 = 1500', why: 'Initial value at $t = 0$; the second data point gives an equation for $b$.' },
            { tex: 'b^4 = 1.5 \\implies P(t) = 1000(1.5)^{t/4}', why: 'Rather than computing $b = 1.5^{1/4}$, notice $b^t = (b^4)^{t/4} = 1.5^{t/4}$: "multiply by $1.5$ every $4$ years".' },
            { tex: 'P(10) = 1000(1.5)^{2.5} \\approx 2756', why: 'Substitute $t = 10$: two and a half 4-year periods.' },
            { tex: '1000(1.5)^{t/4} = 5000 \\implies \\tfrac{t}{4}\\ln 1.5 = \\ln 5', why: 'Divide by $1000$, take $\\ln$ of both sides, power rule.' },
            { tex: 't = \\frac{4 \\ln 5}{\\ln 1.5} \\approx 15.9', why: 'Solve for $t$.' },
          ],
          result: 'About $2756$ animals in year 10, and $5000$ after about $15.9$ years — assuming the growth pattern continues, which real populations eventually do not.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Unlimited exponential growth is always an approximation. Food, space and money run out; eventually growth slows. Calculus II studies the *logistic* model, which starts exponential and levels off at a maximum sustainable size.',
        },
        {
          type: 'heading',
          text: 'Frame-rate independent damping',
        },
        {
          type: 'p',
          text: 'Games often slow objects with `v *= 0.9;` every frame. That is exponential decay with factor $0.9$ **per frame** — so a player running at 60 fps sees objects stop twice as fast (in seconds) as a player at 30 fps. The fix is to decay per **second**, using the half-life model with the frame time $\\Delta t$: multiply by $\\left(\\frac12\\right)^{\\Delta t / h}$ each frame. Over one second the factors multiply to $\\left(\\frac12\\right)^{1/h}$ no matter how the second is sliced.',
        },
        {
          type: 'code',
          title: 'damping.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Simulate one second of slowing down, starting at speed 10.
void simulate(int fps) {
    double naive = 10.0, smooth = 10.0;
    const double dt = 1.0 / fps;
    const double halfLife = 0.5;  // speed halves every 0.5 s
    for (int frame = 0; frame < fps; ++frame) {
        naive *= 0.9;
        smooth *= std::pow(0.5, dt / halfLife);
    }
    std::printf("%d fps: naive = %.4f  half-life = %.4f\\n", fps, naive, smooth);
}

int main() {
    simulate(30);
    simulate(60);
}`,
          output: `30 fps: naive = 0.4239  half-life = 2.5000
60 fps: naive = 0.0180  half-life = 2.5000`,
          annotations: [
            { lines: 10, text: 'Per-frame decay: after one second the speed is $10 \\cdot 0.9^{\\text{fps}}$, which depends on the frame rate.' },
            { lines: 11, text: 'Per-second decay: each frame multiplies by $\\left(\\frac12\\right)^{\\Delta t/h}$. After one second, $10 \\cdot \\left(\\frac12\\right)^{1/0.5} = 2.5$ at any frame rate.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The same trick everywhere',
          text: 'Camera smoothing, "lerp toward a target" (`x += (target - x) * (1 - exp(-k * dt))`), audio fades and cooling effects are all exponential decay. Writing them with `exp(-k * dt)` or `pow(0.5, dt / halfLife)` makes them behave identically on a 30 Hz phone and a 240 Hz monitor.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A city had $40{,}000$ residents in 2010 and $50{,}000$ in 2015. Assuming exponential growth, $P(t) = 40{,}000(1.25)^{t/5}$ with $t$ in years after 2010. Predict the population in 2025 (to the nearest whole person).',
      hint: '2025 is $t = 15$, which is three 5-year periods.',
      answer: '78125',
      tolerance: 1,
      unit: 'people',
      explanation: 'The ratio $\\frac{50{,}000}{40{,}000} = 1.25$ is the growth factor per 5 years. At $t = 15$: $P = 40{,}000(1.25)^{3} = 40{,}000 \\cdot 1.953125 = 78{,}125$. Notice it grew by $10{,}000$ in the first 5 years but would grow by $15{,}625$ in the last 5: equal time steps give equal *ratios*, not equal differences.',
    },
  ],
  takeaways: [
    'Growth or decay by a constant percentage: $A(t) = A_0(1 + r)^t$, factor $1 + r$; doubling every $d$ units: $A_0 \\cdot 2^{t/d}$.',
    'Compound interest: $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$; continuous compounding: $A = Pe^{rt}$, the limit as $n \\to \\infty$.',
    'Doubling time $= \\frac{\\ln 2}{\\ln(1 + r)}$ (or $\\frac{\\ln 2}{k}$ continuously); the rule of 72 approximates it as $\\frac{72}{\\text{rate}\\,\\%}$.',
    'Half-life model: $A = A_0\\left(\\frac12\\right)^{t/h} = A_0 e^{-kt}$ with $k = \\frac{\\ln 2}{h}$. Solve for time by taking $\\ln$ of both sides.',
    'Estimate before computing: count doublings or half-lives to bracket the answer.',
    'In games, decay per second with `pow(0.5, dt / halfLife)` or `exp(-k * dt)` to stay frame-rate independent.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 6.7 Exponential and Logarithmic Models',
      url: 'https://openstax.org/books/college-algebra-2e/pages/6-7-exponential-and-logarithmic-models',
      source: 'openstax',
      note: 'Half-life, doubling time, Newton\'s law of cooling and logistic growth with worked examples.',
    },
    {
      title: "Paul's Online Notes — Applications of Exponentials and Logarithms",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/ExpLogApplications.aspx',
      source: 'paul',
      note: 'Compound interest and decay problems solved step by step.',
    },
    {
      title: 'Wikipedia — Rule of 72',
      url: 'https://en.wikipedia.org/wiki/Rule_of_72',
      source: 'wikipedia',
      note: 'Where the rule comes from and the variants (69.3, 70) used for continuous compounding.',
    },
  ],
};
