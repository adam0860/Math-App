import type { Lesson } from '../../types';

const GAPS_SVG = '<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="70" x2="470.0" y2="70" stroke="currentColor" stroke-width="1.5"/><path d="M470.0 70 l-8 -4 v8 z" fill="currentColor"/><text x="466.0" y="92" font-size="12" class="t-gray">time</text><line x1="30" y1="62" x2="30" y2="78" stroke="currentColor" stroke-width="1.5"/><text x="30" y="92" text-anchor="middle" font-size="12" class="t-gray">0</text><line x1="33.0" y1="44" x2="71.0" y2="44" class="s-purple" stroke-width="1.6"/><path d="M71.0 44 l-6 -3.5 v7 z" class="f-purple"/><path d="M33.0 44 l6 -3.5 v7 z" class="f-purple"/><text x="52.0" y="36" text-anchor="middle" font-size="13" class="t-purple">T1</text><line x1="74.0" y1="48" x2="74.0" y2="64" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><circle cx="74.0" cy="70" r="5.5" class="f-orange s-orange"/><line x1="77.0" y1="44" x2="131.0" y2="44" class="s-purple" stroke-width="1.6"/><path d="M131.0 44 l-6 -3.5 v7 z" class="f-purple"/><path d="M77.0 44 l6 -3.5 v7 z" class="f-purple"/><text x="104.0" y="36" text-anchor="middle" font-size="13" class="t-purple">T2</text><line x1="134.0" y1="48" x2="134.0" y2="64" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><circle cx="134.0" cy="70" r="5.5" class="f-orange s-orange"/><line x1="137.0" y1="44" x2="255.0" y2="44" class="s-purple" stroke-width="1.6"/><path d="M255.0 44 l-6 -3.5 v7 z" class="f-purple"/><path d="M137.0 44 l6 -3.5 v7 z" class="f-purple"/><text x="196.0" y="36" text-anchor="middle" font-size="13" class="t-purple">T3</text><line x1="258.0" y1="48" x2="258.0" y2="64" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><circle cx="258.0" cy="70" r="5.5" class="f-orange s-orange"/><line x1="261.0" y1="44" x2="287.0" y2="44" class="s-purple" stroke-width="1.6"/><path d="M287.0 44 l-6 -3.5 v7 z" class="f-purple"/><path d="M261.0 44 l6 -3.5 v7 z" class="f-purple"/><text x="274.0" y="36" text-anchor="middle" font-size="13" class="t-purple">T4</text><line x1="290.0" y1="48" x2="290.0" y2="64" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><circle cx="290.0" cy="70" r="5.5" class="f-orange s-orange"/><line x1="293.0" y1="44" x2="395.0" y2="44" class="s-purple" stroke-width="1.6"/><path d="M395.0 44 l-6 -3.5 v7 z" class="f-purple"/><path d="M293.0 44 l6 -3.5 v7 z" class="f-purple"/><text x="344.0" y="36" text-anchor="middle" font-size="13" class="t-purple">T5</text><line x1="398.0" y1="48" x2="398.0" y2="64" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><circle cx="398.0" cy="70" r="5.5" class="f-orange s-orange"/><line x1="30" y1="112" x2="258.0" y2="112" class="s-teal" stroke-width="1.8"/><line x1="30" y1="106" x2="30" y2="118" class="s-teal" stroke-width="1.8"/><line x1="258.0" y1="106" x2="258.0" y2="118" class="s-teal" stroke-width="1.8"/><text x="144.0" y="132" text-anchor="middle" font-size="13" class="t-teal">S3 = T1 + T2 + T3 (time of 3rd event)</text><text x="30" y="160" font-size="12" class="t-gray">gaps T1, T2, … are independent Exp(λ); S3 ~ Gamma(3, λ)</text></svg>';
const BATHTUB_SVG = '<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg"><rect x="132.0" y="20" width="196.8" height="170" class="f-teal" fill-opacity="0.08"/><line x1="50" y1="190" x2="468" y2="190" stroke="currentColor" stroke-width="1.4"/><path d="M468 190 l-8 -4 v8 z" fill="currentColor"/><line x1="50" y1="190" x2="50" y2="14" stroke="currentColor" stroke-width="1.4"/><path d="M50 14 l-4 8 h8 z" fill="currentColor"/><text x="460" y="208" text-anchor="end" font-size="12" class="t-gray">age t</text><text x="42" y="24" text-anchor="end" font-size="12" class="t-gray">h(t)</text><path d="M50.0 65.9 L52.0 73.4 L54.1 80.3 L56.1 86.6 L58.2 92.4 L60.2 97.8 L62.3 102.7 L64.3 107.2 L66.4 111.4 L68.5 115.2 L70.5 118.8 L72.5 122.0 L74.6 125.0 L76.7 127.8 L78.7 130.3 L80.8 132.6 L82.8 134.8 L84.8 136.7 L86.9 138.5 L89.0 140.2 L91.0 141.7 L93.0 143.2 L95.1 144.5 L97.2 145.6 L99.2 146.7 L101.2 147.8 L103.3 148.7 L105.3 149.5 L107.4 150.3 L109.4 151.1 L111.5 151.7 L113.5 152.3 L115.6 152.9 L117.7 153.4 L119.7 153.9 L121.8 154.3 L123.8 154.7 L125.8 155.1 L127.9 155.5 L129.9 155.8 L132.0 156.1 L134.1 156.3 L136.1 156.6 L138.2 156.8 L140.2 157.0 L142.2 157.2 L144.3 157.4 L146.3 157.5 L148.4 157.7 L150.4 157.8 L152.5 158.0 L154.6 158.1 L156.6 158.2 L158.7 158.3 L160.7 158.4 L162.8 158.4 L164.8 158.5 L166.8 158.6 L168.9 158.7 L170.9 158.7 L173.0 158.8 L175.1 158.8 L177.1 158.9 L179.2 158.9 L181.2 158.9 L183.2 159.0 L185.3 159.0 L187.3 159.0 L189.4 159.1 L191.4 159.1 L193.5 159.1 L195.5 159.1 L197.6 159.2 L199.7 159.2 L201.7 159.2 L203.8 159.2 L205.8 159.2 L207.8 159.2 L209.9 159.3 L212.0 159.3 L214.0 159.3 L216.1 159.3 L218.1 159.3 L220.2 159.3 L222.2 159.3 L224.2 159.3 L226.3 159.3 L228.3 159.3 L230.4 159.3 L232.4 159.3 L234.5 159.3 L236.6 159.4 L238.6 159.4 L240.7 159.4 L242.7 159.4 L244.8 159.4 L246.8 159.4 L248.8 159.4 L250.9 159.4 L252.9 159.4 L255.0 159.4 L257.1 159.4 L259.1 159.4 L261.1 159.4 L263.2 159.4 L265.2 159.4 L267.3 159.4 L269.4 159.4 L271.4 159.4 L273.5 159.4 L275.5 159.4 L277.6 159.4 L279.6 159.4 L281.6 159.4 L283.7 159.4 L285.8 159.4 L287.8 159.4 L289.9 159.4 L291.9 159.4 L293.9 159.4 L296.0 159.4 L298.0 159.4 L300.1 159.4 L302.1 159.4 L304.2 159.4 L306.2 159.4 L308.3 159.4 L310.4 159.4 L312.4 159.4 L314.4 159.4 L316.5 159.4 L318.6 159.4 L320.6 159.4 L322.7 159.4 L324.7 159.4 L326.8 159.4 L328.8 159.4 L330.9 159.4 L332.9 159.3 L334.9 159.2 L337.0 159.0 L339.1 158.7 L341.1 158.4 L343.1 158.1 L345.2 157.7 L347.2 157.2 L349.3 156.7 L351.4 156.1 L353.4 155.5 L355.4 154.8 L357.5 154.1 L359.6 153.3 L361.6 152.5 L363.6 151.6 L365.7 150.7 L367.8 149.7 L369.8 148.6 L371.9 147.5 L373.9 146.3 L375.9 145.1 L378.0 143.9 L380.1 142.5 L382.1 141.2 L384.1 139.7 L386.2 138.2 L388.2 136.7 L390.3 135.1 L392.3 133.5 L394.4 131.8 L396.4 130.0 L398.5 128.2 L400.6 126.4 L402.6 124.4 L404.6 122.5 L406.7 120.4 L408.8 118.4 L410.8 116.2 L412.9 114.1 L414.9 111.8 L416.9 109.5 L419.0 107.2 L421.1 104.8 L423.1 102.3 L425.2 99.8 L427.2 97.2 L429.2 94.6 L431.3 92.0 L433.4 89.2 L435.4 86.5 L437.4 83.6 L439.5 80.7 L441.6 77.8 L443.6 74.8 L445.6 71.7 L447.7 68.6 L449.8 65.5 L451.8 62.3 L453.9 59.0 L455.9 55.7 L457.9 52.3 L460.0 48.9" fill="none" class="s-blue" stroke-width="2.4"/><text x="62.3" y="84.6" font-size="12" class="t-red">early failures</text><text x="62.3" y="99.6" font-size="12" class="t-red">(h decreasing)</text><text x="230.4" y="145.4" text-anchor="middle" font-size="12" class="t-teal">useful life: h ≈ constant λ</text><text x="230.4" y="181.4" text-anchor="middle" font-size="12" class="t-teal">exponential model fits here</text><text x="402.6" y="84.6" text-anchor="end" font-size="12" class="t-orange">wear-out</text><text x="402.6" y="99.6" text-anchor="end" font-size="12" class="t-orange">(h increasing)</text></svg>';

export const lesson: Lesson = {
  id: 'stat-uniform-exponential',
  title: 'Uniform and Exponential Distributions',
  summary: 'The flat distribution behind every random number generator, and the exponential distribution of waiting times: its rate, its link to the Poisson process, the memoryless property (proved), reliability and hazard rates for component lifetimes, and the Gamma distribution as a sum of exponential waits.',
  minutes: 19,
  objectives: [
    'Compute probabilities, the mean $\\frac{a+b}{2}$ and the variance $\\frac{(b-a)^2}{12}$ of a continuous uniform distribution, and generate it from random bits',
    'Use the exponential distribution $\\text{Exp}(\\lambda)$ in the rate convention: density, CDF, mean $1/\\lambda$, variance $1/\\lambda^2$',
    'Derive the exponential waiting time from a Poisson process, and prove and interpret the memoryless property',
    'Compute reliability, hazard rates and the lifetimes of series and parallel systems of exponential components',
    'Describe the Gamma distribution as the waiting time for the $k$-th event and compute its probabilities via the Poisson process',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The continuous uniform distribution',
      blocks: [
        {
          type: 'p',
          text: 'The simplest continuous model says "every value in $[a, b]$ is equally likely": a respawn timer anywhere from $20$ to $40$ seconds, the phase of a rotating hazard when a player arrives, the rounding error of a measurement. "Equally likely" for a continuous variable means **intervals of equal length get equal probability**, so the density must be flat.',
        },
        {
          type: 'definition',
          term: 'Uniform distribution $U(a, b)$',
          text: 'The [[stat-uniform-distribution|uniform distribution]] on $[a, b]$ has density $f(x) = \\dfrac{1}{b - a}$ for $a \\le x \\le b$ (and $0$ elsewhere), and CDF $F(x) = \\dfrac{x - a}{b - a}$ on $[a, b]$. The probability of a subinterval is its length divided by $b - a$.',
        },
        {
          type: 'graph',
          x: [-1, 11],
          y: [0, 0.4],
          xStep: 1,
          yStep: 0.1,
          height: 240,
          functions: [{ expr: '1/(b - a)', domain: ['a', 'b'], label: '$f(x) = \\frac{1}{b-a}$' }],
          areas: [{ expr: '1/(b - a)', from: 'a', to: 'b', color: 'blue' }],
          vlines: [{ x: '(a + b)/2', label: 'mean', color: 'orange' }],
          sliders: [
            { name: 'a', min: 0, max: 3, step: 0.5, value: 2, label: '$a$' },
            { name: 'b', min: 6, max: 10, step: 0.5, value: 8, label: '$b$' },
          ],
          readouts: [
            { label: 'height $\\frac{1}{b - a} =$', expr: '1/(b - a)', digits: 3 },
            { label: 'mean $\\frac{a + b}{2} =$', expr: '(a + b)/2', digits: 2 },
            { label: '$\\sigma = \\frac{b - a}{\\sqrt{12}} =$', expr: '(b - a)/sqrt(12)', digits: 3 },
          ],
          caption: 'The rectangle always has area $1$: widen it and it must get shorter. The mean sits in the middle; the standard deviation is proportional to the width.',
        },
        {
          type: 'derivation',
          title: 'Mean and variance of $U(a, b)$',
          steps: [
            { tex: 'E[X] = \\int_a^b \\frac{x}{b - a}\\,dx = \\frac{b^2 - a^2}{2(b - a)} = \\frac{a + b}{2}', why: 'Integrate $x f(x)$ and factor $b^2 - a^2 = (b - a)(b + a)$. The midpoint, by symmetry.' },
            { tex: '\\operatorname{Var}(X) = \\operatorname{Var}\\left(a + (b - a)U\\right) = (b - a)^2\\operatorname{Var}(U), \\quad U \\sim U(0, 1)', why: 'A uniform on $[a, b]$ is a stretched and shifted $U(0, 1)$, and shifts don\'t affect variance.' },
            { tex: '\\operatorname{Var}(U) = \\int_0^1 u^2\\,du - \\left(\\tfrac{1}{2}\\right)^2 = \\tfrac{1}{3} - \\tfrac{1}{4} = \\tfrac{1}{12}', why: 'Variance shortcut for $U(0, 1)$, whose density is $1$ on $[0, 1]$.' },
            { tex: '\\operatorname{Var}(X) = \\frac{(b - a)^2}{12}, \\qquad \\sigma = \\frac{b - a}{\\sqrt{12}} \\approx 0.289(b - a)', why: 'Combine. The famous $12$ comes from $\\frac{1}{3} - \\frac{1}{4}$.' },
          ],
          result: 'A respawn timer uniform on $[20, 40]$ s has mean $30$ s, and $P(\\text{wait} > 35) = \\frac{40 - 35}{20} = 0.25$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where uniform random numbers come from',
          text: 'A pseudorandom generator like `std::mt19937_64` outputs uniformly random 64-bit integers. Keeping the top $53$ bits and scaling, `(rng() >> 11) * 0x1.0p-53`, gives a double that is uniform on $[0, 1)$ (every multiple of $2^{-53}$ equally likely). Then `a + (b - a) * u` is uniform on $[a, b)$ — the CDF method from the last lesson shows why: $P(a + (b-a)U \\le x) = P(U \\le \\frac{x-a}{b-a}) = \\frac{x - a}{b - a}$. Every other distribution in a game or simulation is built from such uniforms.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A respawn timer is uniform on $[20, 40]$ seconds. What is its standard deviation, in seconds? Two decimals.',
      hint: '$\\sigma = \\frac{b - a}{\\sqrt{12}}$.',
      label: '$\\sigma =$',
      answer: '20/sqrt(12)',
      answerTex: '\\frac{20}{\\sqrt{12}} \\approx 5.77',
      tolerance: 0.006,
      unit: 's',
      explanation: '$\\operatorname{Var} = \\frac{(40 - 20)^2}{12} = \\frac{400}{12} \\approx 33.3$ s², so $\\sigma = \\frac{20}{\\sqrt{12}} \\approx 5.77$ s. A frequent slip is to divide by $12$ but forget the square root (giving $33.3$), or to take $\\frac{b - a}{12}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The exponential distribution: waiting times',
      blocks: [
        {
          type: 'p',
          text: 'How long until the next server crash, the next player joins, the next packet arrives? Waiting times are positive, usually short but occasionally long, and their natural model is the exponential distribution.',
        },
        {
          type: 'definition',
          term: 'Exponential distribution $\\text{Exp}(\\lambda)$',
          text: 'With **rate** $\\lambda > 0$ (events per unit time), the [[stat-exponential-distribution|exponential distribution]] has density and CDF $$f(x) = \\lambda e^{-\\lambda x}, \\qquad F(x) = 1 - e^{-\\lambda x} \\qquad (x \\ge 0),$$ so the survival probability is $P(X > x) = e^{-\\lambda x}$. Its mean is $1/\\lambda$ and its variance $1/\\lambda^2$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Rate or mean? This course uses the rate',
          text: '$\\text{Exp}(\\lambda)$ always means **rate** $\\lambda$, mean $1/\\lambda$, in this course. Some books write $\\text{Exp}(\\beta)$ with the *mean* $\\beta$, and NumPy\'s `exponential(scale)` takes the mean, while C++\'s `std::exponential_distribution<double>(lambda)` takes the rate. Crashes at $0.5$ per hour means rate $0.5$ and mean $2$ hours — mix them up and every answer is wrong.',
        },
        {
          type: 'derivation',
          title: 'The mean, by integration by parts',
          steps: [
            { tex: 'E[X] = \\int_0^\\infty x\\,\\lambda e^{-\\lambda x}\\,dx', why: 'Definition of the mean; an improper integral.' },
            { tex: '= \\Big[-x e^{-\\lambda x}\\Big]_0^\\infty + \\int_0^\\infty e^{-\\lambda x}\\,dx', why: '[[integration-by-parts|Integration by parts]] with $u = x$, $dv = \\lambda e^{-\\lambda x}dx$, so $du = dx$ and $v = -e^{-\\lambda x}$.' },
            { tex: '= 0 + \\frac{1}{\\lambda}', why: '$x e^{-\\lambda x} \\to 0$ as $x \\to \\infty$ (the exponential wins), and the remaining integral is $\\left[-\\frac{1}{\\lambda}e^{-\\lambda x}\\right]_0^\\infty = \\frac{1}{\\lambda}$.' },
            { tex: 'E[X^2] = \\frac{2}{\\lambda^2} \\implies \\operatorname{Var}(X) = \\frac{2}{\\lambda^2} - \\frac{1}{\\lambda^2} = \\frac{1}{\\lambda^2}', why: 'Integrating by parts twice gives $E[X^2]$; then the shortcut. So $\\sigma = 1/\\lambda$: the standard deviation equals the mean.' },
          ],
          result: 'Rate $\\lambda$ events per hour means an average wait of $1/\\lambda$ hours. The median is smaller: $1 - e^{-\\lambda m} = \\frac{1}{2}$ gives $m = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}$ — right skew again.',
        },
        {
          type: 'graph',
          x: [0, 6],
          y: [0, 1.6],
          xStep: 1,
          yStep: 0.5,
          height: 260,
          functions: [{ expr: 'l*exp(-l*x)', domain: [0, 6], label: '$f(x) = \\lambda e^{-\\lambda x}$' }],
          areas: [{ expr: 'l*exp(-l*x)', from: 's', to: 6, color: 'orange' }],
          vlines: [{ x: '1/l', label: 'mean 1/λ', color: 'purple' }],
          sliders: [
            { name: 'l', min: 0.25, max: 1.5, step: 0.05, value: 0.5, label: 'rate $\\lambda$' },
            { name: 's', min: 0, max: 6, step: 0.1, value: 2, label: 'threshold $s$' },
          ],
          readouts: [
            { label: '$P(X > s) = e^{-\\lambda s} =$', expr: 'exp(-l*s)', digits: 4 },
            { label: 'median $\\frac{\\ln 2}{\\lambda} =$', expr: 'ln(2)/l', digits: 3 },
          ],
          caption: 'The density starts at height $\\lambda$ and decays. Orange: $P(X > s)$, the chance of waiting longer than $s$ (the tail beyond the window is tiny but included in the readout). Raising the rate makes waits shorter: the curve starts higher and falls faster. At $s = 1/\\lambda$ the tail is always $e^{-1} \\approx 0.368$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A server crashes at a rate of $0.5$ per hour, and the time to the next crash is $\\text{Exp}(0.5)$. What is the probability that it crashes **within the next hour**? Four decimals.',
      hint: '$P(T \\le 1) = F(1) = 1 - e^{-\\lambda \\cdot 1}$.',
      label: '$P(T \\le 1) =$',
      answer: '1 - exp(-0.5)',
      answerTex: '1 - e^{-0.5} \\approx 0.3935',
      tolerance: 0.00006,
      explanation: '$P(T \\le 1) = 1 - e^{-0.5 \\cdot 1} \\approx 1 - 0.6065 = 0.3935$. If you used $0.5$ as the *mean* instead of the rate (so $\\lambda = 2$), you would get $1 - e^{-2} \\approx 0.8647$ — always check whether a number is a rate or a mean.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Exponential gaps make a Poisson process',
      blocks: [
        {
          type: 'p',
          text: 'In the Poisson lesson, events arrived at rate $\\lambda$ and the count in time $t$ was $\\text{Pois}(\\lambda t)$. The exponential distribution is the other half of that picture: the time you wait.',
        },
        {
          type: 'derivation',
          title: 'The first arrival time is exponential',
          steps: [
            { tex: '\\{T_1 > t\\} = \\{N(t) = 0\\}', why: 'The first event comes after time $t$ exactly when no events happen in $[0, t]$.' },
            { tex: 'P(T_1 > t) = P(N(t) = 0) = \\frac{e^{-\\lambda t}(\\lambda t)^0}{0!} = e^{-\\lambda t}', why: '$N(t) \\sim \\text{Pois}(\\lambda t)$; take $k = 0$.' },
            { tex: 'F_{T_1}(t) = 1 - e^{-\\lambda t} \\implies T_1 \\sim \\text{Exp}(\\lambda)', why: 'That is the exponential CDF, so the first waiting time is $\\text{Exp}(\\lambda)$.' },
          ],
          result: 'Because the process has independent increments and a constant rate, it "starts over" after each event, so **every** gap between consecutive events is $\\text{Exp}(\\lambda)$, independent of the others. Rate $\\lambda$ per minute means an average gap of $1/\\lambda$ minutes — the two descriptions are the same model.',
        },
        {
          type: 'figure',
          svg: GAPS_SVG,
          alt: 'A timeline with five events. Purple arrows above mark the gaps T1 to T5 between consecutive events. A teal bracket below spans from 0 to the third event, labeled S3 = T1 + T2 + T3, the time of the third event.',
          caption: 'Two views of one process: counts in intervals are Poisson, the gaps $T_1, T_2, \\dots$ are independent $\\text{Exp}(\\lambda)$. The time of the third event, $S_3$, is a sum of three gaps — the Gamma distribution at the end of this lesson.',
          maxWidth: 500,
        },
        {
          type: 'p',
          text: 'Players join a lobby at $3$ per minute. The gaps between joins are $\\text{Exp}(3)$ minutes, averaging $20$ seconds. The chance of a full minute with no joins is $e^{-3} \\approx 0.05$ — the same number as $P(N(1) = 0)$ for $N(1) \\sim \\text{Pois}(3)$. This duality is also how simulations generate Poisson processes: add up exponential gaps until you pass the end of the window (see the program in the next card).',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Players join a lobby as a Poisson process at an average of $3$ per minute. What is the expected time between two consecutive joins?',
      options: [
        { text: '$3$ minutes', why: '$3$ is the rate (joins per minute), not a time. Waiting time is the reciprocal of the rate.' },
        { text: '$20$ seconds', correct: true, why: 'The gaps are $\\text{Exp}(3)$ in minutes, with mean $1/3$ minute $= 20$ seconds.' },
        { text: 'It depends on how long the lobby has been waiting already', why: 'Exponential waits are memoryless: the expected remaining wait is always $1/\\lambda$, no matter how long it has been since the last join.' },
        { text: '$e^{-3}$ minutes', why: '$e^{-3} \\approx 0.05$ is the probability that a whole minute passes with no joins, not a time.' },
      ],
      explanation: 'Rate and mean waiting time are reciprocals: $3$ joins per minute means $\\frac{1}{3}$ minute $= 20$ s between joins on average. Over an hour, $180$ joins and $180$ gaps of about $20$ s each fill the $3600$ s, as they must.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Memorylessness, proved',
      blocks: [
        {
          type: 'p',
          text: 'The exponential distribution has a property that sounds paradoxical: an exponential waiting time does not "age". If a component with an $\\text{Exp}(\\lambda)$ lifetime has already lasted $s$ hours, the remaining lifetime has exactly the same distribution as a brand-new component\'s.',
        },
        {
          type: 'theorem',
          name: 'Memoryless property',
          tex: 'P(T > s + t \\mid T > s) = P(T > t) \\qquad \\text{for all } s, t \\ge 0',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'P(T > s + t \\mid T > s) = \\frac{P(T > s + t \\text{ and } T > s)}{P(T > s)}', why: 'Definition of [[dm-conditional-probability|conditional probability]].' },
            { tex: '= \\frac{P(T > s + t)}{P(T > s)}', why: 'If $T > s + t$ then automatically $T > s$, so the intersection is just $\\{T > s + t\\}$.' },
            { tex: '= \\frac{e^{-\\lambda(s + t)}}{e^{-\\lambda s}} = e^{-\\lambda t} = P(T > t)', why: 'Exponential survival function; the law of exponents cancels $e^{-\\lambda s}$.' },
          ],
          result: 'The past wait $s$ drops out completely. The exponential is the **only** continuous distribution with this [[stat-memoryless-property|memoryless property]]; its discrete twin is the geometric distribution.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only the exponential',
          text: 'Write $S(t) = P(T > t)$. Memorylessness says $S(s + t) = S(s)\\,S(t)$ for all $s, t \\ge 0$. A continuous function that turns sums into products must be an exponential, $S(t) = e^{-\\lambda t}$ (take logs: $\\ln S$ is additive, hence linear). So "no aging" and "exponential" are the same assumption.',
        },
        {
          type: 'p',
          text: 'Is that realistic? For events driven by random external shocks — a power glitch, a cosmic-ray bit flip, a random player disconnect — yes. For things that **wear out** (a bearing, a battery, a tire) no: an old one is more likely to fail soon than a new one. Using an exponential model for wear-out parts badly underestimates late failures.',
        },
        {
          type: 'code',
          title: 'exponential_wait.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(9);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // uniform in [0, 1)

// Inverse-transform sampling: solve F(t) = 1 - e^{-lambda t} = u for t.
double exponential(double lambda) { return -std::log(1.0 - uniform01()) / lambda; }

int main() {
    const int N = 1'000'000;
    const double lambda = 0.5;                 // crashes per hour

    double sum = 0;
    int over1 = 0, over2 = 0, over3 = 0;
    for (int i = 0; i < N; ++i) {
        double t = exponential(lambda);
        sum += t;
        over1 += t > 1;
        over2 += t > 2;
        over3 += t > 3;
    }
    std::printf("mean time to crash   %.4f h  (exact 1/lambda = 2)\\n", sum / N);
    std::printf("P(T > 2)             %.4f    (exact e^-1 = 0.3679)\\n", double(over2) / N);
    std::printf("P(T > 3 | T > 1)     %.4f    (memoryless: same as P(T > 2))\\n",
                double(over3) / over1);

    // Build a Poisson process from exponential gaps: joins at 3 per minute.
    const double rate = 3.0;
    double countSum = 0, countSq = 0;
    for (int m = 0; m < N; ++m) {
        int count = 0;
        double clock = exponential(rate);      // time of the first join
        while (clock <= 1.0) {                 // count joins within one minute
            ++count;
            clock += exponential(rate);        // add the next gap
        }
        countSum += count;
        countSq += double(count) * count;
    }
    double mean = countSum / N;
    std::printf("joins per minute: mean %.3f  variance %.3f  (Poisson(3): both 3)\\n",
                mean, countSq / N - mean * mean);
}`,
          output: `mean time to crash   2.0007 h  (exact 1/lambda = 2)
P(T > 2)             0.3682    (exact e^-1 = 0.3679)
P(T > 3 | T > 1)     0.3680    (memoryless: same as P(T > 2))
joins per minute: mean 2.998  variance 2.996  (Poisson(3): both 3)`,
          annotations: [
            { lines: 9, text: 'Solve $1 - e^{-\\lambda t} = u$: $t = -\\ln(1 - u)/\\lambda$. Using $1 - u$ (never $0$, since $u < 1$) avoids $\\ln 0$. This is inverse-transform sampling, studied fully in the Simulation lesson.' },
            { lines: '26-27', text: 'A conditional probability estimated as a ratio of counts: among waits longer than $1$ hour, the fraction longer than $3$. It matches the unconditional $P(T > 2)$.' },
            { lines: '33-37', text: 'Add exponential gaps until the clock passes one minute; the number of events that fit is a Poisson count.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'A game server\'s time to failure is modeled as exponential. The server has now run for $30$ days without a crash, so under this model it is more likely than a freshly rebooted server to crash in the next $24$ hours.',
      answer: false,
      explanation: 'Under an exponential model the remaining lifetime is memoryless: $P(T > 30 + 1 \\mid T > 30) = P(T > 1)$ (in days), so the old server and the fresh one have the **same** chance of crashing tomorrow. If you believe long uptime really does raise the risk (memory leaks, for example), that is evidence against the exponential model — you need an increasing hazard rate.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Reliability and the hazard rate',
      blocks: [
        {
          type: 'p',
          text: 'Engineers describe a lifetime $T$ (of a radio, a drive, a server) by its **reliability function** $R(t) = P(T > t) = 1 - F(t)$, the probability of still working at time $t$, and by its **hazard rate**, the failure rate among survivors.',
        },
        {
          type: 'definition',
          term: 'Hazard rate',
          text: 'The [[stat-hazard-rate|hazard rate]] of a lifetime with density $f$ and reliability $R$ is $$h(t) = \\frac{f(t)}{R(t)},$$ and for small $\\Delta t$, $P(\\text{fail in } (t, t + \\Delta t] \\mid \\text{working at } t) \\approx h(t)\\,\\Delta t$.',
        },
        {
          type: 'p',
          text: 'For $\\text{Exp}(\\lambda)$: $h(t) = \\frac{\\lambda e^{-\\lambda t}}{e^{-\\lambda t}} = \\lambda$, a **constant** hazard. That is memorylessness again, in rate form. Real equipment usually follows the "bathtub curve": a decreasing hazard early on (manufacturing defects show up and get weeded out), a roughly constant hazard during its useful life, and an increasing hazard at wear-out. The exponential model belongs to the flat middle.',
        },
        {
          type: 'figure',
          svg: BATHTUB_SVG,
          alt: 'A hazard-rate curve shaped like a bathtub: high and decreasing at small ages labeled early failures, flat in a shaded middle region labeled useful life where the exponential model fits, then rising at large ages labeled wear-out.',
          caption: 'The bathtub curve. Burn-in testing removes early failures; scheduled replacement retires parts before wear-out; in between, failures are random shocks at a nearly constant rate $\\lambda$.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Series and parallel systems of exponential components',
          steps: [
            { tex: 'R_{\\text{series}}(t) = P(T_1 > t, \\dots, T_n > t) = \\prod_{i} e^{-\\lambda_i t} = e^{-(\\lambda_1 + \\cdots + \\lambda_n)t}', why: 'A **series** system (all parts needed) works only while every part works. With [[dm-independent-events|independent]] failures, multiply.' },
            { tex: 'T_{\\text{series}} = \\min(T_1, \\dots, T_n) \\sim \\text{Exp}(\\lambda_1 + \\cdots + \\lambda_n)', why: 'The system\'s reliability is again exponential, so its lifetime is the minimum of the parts\' lifetimes, with the failure rates added. Mean time to failure: $1/\\sum\\lambda_i$.' },
            { tex: 'R_{\\text{parallel}}(t) = 1 - \\prod_i \\left(1 - e^{-\\lambda_i t}\\right)', why: 'A **parallel** (redundant) system fails only when every part has failed: complement of "all failed".' },
          ],
          result: 'A field radio with $3$ parts in series, each failing at rate $0.001$ per hour, fails at rate $0.003$ per hour: mean time to failure $333$ hours instead of $1000$. Two redundant units each with $R(1000) = e^{-1} \\approx 0.368$ give $R = 1 - (1 - 0.368)^2 \\approx 0.600$. More parts in series hurt; redundancy helps.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A drone needs all $3$ of its critical components to work. Each has an exponential lifetime with failure rate $0.001$ per hour, independently. What is the probability that the drone survives a $200$-hour deployment without a failure? Four decimals.',
      hint: 'Series system: the rates add, so $R(t) = e^{-(0.003)t}$.',
      label: '$R(200) =$',
      answer: 'exp(-0.6)',
      answerTex: 'e^{-0.6} \\approx 0.5488',
      tolerance: 0.00006,
      explanation: 'In series the rates add: $\\lambda = 3 \\times 0.001 = 0.003$ per hour, so $R(200) = e^{-0.003 \\cdot 200} = e^{-0.6} \\approx 0.5488$. Equivalently, each component survives with probability $e^{-0.2} \\approx 0.8187$, and $0.8187^3 \\approx 0.5488$. Nearly half of the deployments will see a failure, although each part alone survives about $82\\%$ of the time.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A data center runs two redundant servers: the service is up as long as **at least one** server works. Each server\'s lifetime is $\\text{Exp}(0.001)$ per hour, independently. A student computes the probability that the service survives $1000$ hours. Tap the first wrong line.',
      lines: [
        'Each server survives $1000$ hours with probability $e^{-0.001 \\cdot 1000} = e^{-1} \\approx 0.368$.',
        'The service fails only if both servers fail.',
        'So $R_{\\text{service}} = e^{-1} \\cdot e^{-1} = e^{-2} \\approx 0.135$.',
        'Redundancy makes the service less reliable than a single server.',
      ],
      errorLines: [3],
      explanation: 'Line 3 multiplies the **survival** probabilities, which is the formula for a series system (both must survive). Line 2 was right: the service fails only if both fail, so $R = 1 - (1 - e^{-1})^2 \\approx 1 - 0.632^2 \\approx 0.600$. Redundancy raises reliability from $0.368$ to $0.600$; the conclusion in line 4 is an artifact of the wrong formula.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The Gamma distribution: waiting for the $k$-th event',
      blocks: [
        {
          type: 'p',
          text: 'A match starts when the $3$rd player joins. With joins at rate $3$ per minute, how long is the wait? It is the sum of three independent $\\text{Exp}(3)$ gaps, $S_3 = T_1 + T_2 + T_3$ (see the figure above). Sums of $k$ independent $\\text{Exp}(\\lambda)$ waits follow the [[stat-gamma-distribution|Gamma distribution]] — the continuous cousin of the negative binomial.',
        },
        {
          type: 'theorem',
          name: 'Gamma$(k, \\lambda)$ density (shape $k$, rate $\\lambda$)',
          tex: 'f(x) = \\frac{\\lambda^k x^{k-1} e^{-\\lambda x}}{(k - 1)!}, \\quad x > 0, \\qquad E[S_k] = \\frac{k}{\\lambda}, \\quad \\operatorname{Var}(S_k) = \\frac{k}{\\lambda^2}',
          text: 'The mean and variance add up from $k$ independent exponentials. Replacing $(k-1)!$ by the Gamma function $\\Gamma(k)$ allows any shape $k > 0$, giving a flexible model for positive, right-skewed data such as session lengths.',
        },
        {
          type: 'graph',
          x: [0, 5],
          y: [0, 1.6],
          xStep: 0.5,
          yStep: 0.25,
          height: 260,
          functions: [{ expr: 'l^k*x^(k - 1)*exp(-l*x)/gamma(k)', domain: [0.001, 5], label: 'Gamma$(k, \\lambda)$ density', color: 'teal' }],
          vlines: [{ x: 'k/l', label: 'mean k/λ', color: 'orange' }],
          sliders: [
            { name: 'k', min: 1, max: 10, step: 1, value: 3, label: 'shape $k$ (events)' },
            { name: 'l', min: 1, max: 6, step: 0.5, value: 3, label: 'rate $\\lambda$' },
          ],
          readouts: [
            { label: 'mean $k/\\lambda =$', expr: 'k/l', digits: 3 },
            { label: '$\\sigma = \\sqrt{k}/\\lambda =$', expr: 'sqrt(k)/l', digits: 3 },
          ],
          caption: 'With $k = 1$ this is the exponential density. As $k$ grows the peak moves right, and the shape turns into a symmetric bell — a sum of many independent waits, previewing the central limit theorem.',
        },
        {
          type: 'derivation',
          title: 'Probability the match starts within a minute',
          steps: [
            { tex: '\\{S_3 \\le 1\\} = \\{N(1) \\ge 3\\}', why: 'The $3$rd join happens by time $1$ exactly when at least $3$ joins occur in $[0, 1]$. This turns a Gamma question into a Poisson question.' },
            { tex: 'P(N(1) \\ge 3) = 1 - e^{-3}\\left(1 + 3 + \\tfrac{9}{2}\\right) = 1 - 8.5e^{-3}', why: '$N(1) \\sim \\text{Pois}(3)$; subtract $P(N = 0, 1, 2)$.' },
            { tex: '\\approx 1 - 0.4232 = 0.5768', why: 'Arithmetic: $e^{-3} \\approx 0.04979$.' },
          ],
          result: 'The mean wait is $k/\\lambda = 1$ minute, yet the match starts within that minute only $58\\%$ of the time. In general $P(S_k > t) = P(N(t) \\le k - 1) = e^{-\\lambda t}\\sum_{j=0}^{k-1}\\frac{(\\lambda t)^j}{j!}$ — no integration needed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Crash reports arrive as a Poisson process at $2$ per hour. An alert fires when the **second** report arrives. What is the probability the alert fires within the first hour? Four decimals.',
      hint: 'The 2nd report comes within an hour exactly when $N(1) \\ge 2$, with $N(1) \\sim \\text{Pois}(2)$.',
      label: '$P(S_2 \\le 1) =$',
      answer: '1 - 3*exp(-2)',
      answerTex: '1 - 3e^{-2} \\approx 0.5940',
      tolerance: 0.00006,
      explanation: '$S_2 \\sim \\text{Gamma}(2, 2)$, and $P(S_2 \\le 1) = P(N(1) \\ge 2) = 1 - e^{-2}(1 + 2) = 1 - 3e^{-2} \\approx 0.5940$. You can confirm by integrating the density: $\\int_0^1 4x e^{-2x}\\,dx = 1 - 3e^{-2}$ (integration by parts).',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the facts about $T \\sim \\text{Exp}(\\lambda)$ (rate convention).',
      template: 'The CDF is $F(t) =$ ___, the mean is ___, and the hazard rate $h(t) = f(t)/R(t)$ equals ___ for every $t$.',
      blanks: [{ answers: ['$1 - e^{-\\lambda t}$'] }, { answers: ['$1/\\lambda$'] }, { answers: ['$\\lambda$'] }],
      wordBank: ['$1 - e^{-\\lambda t}$', '$e^{-\\lambda t}$', '$1/\\lambda$', '$\\lambda$', '$\\lambda t$', '$1/\\lambda^2$'],
      explanation: '$F(t) = 1 - e^{-\\lambda t}$ (while $e^{-\\lambda t}$ is the reliability $P(T > t)$). The mean is $1/\\lambda$ — the rate\'s reciprocal — and $1/\\lambda^2$ is the variance. The hazard is the constant $\\lambda$: memorylessness in rate form.',
    },
  ],
  takeaways: [
    '$U(a, b)$: flat density $\\frac{1}{b-a}$, mean $\\frac{a+b}{2}$, variance $\\frac{(b-a)^2}{12}$. Random number generators make $U(0, 1)$, and $a + (b - a)U$ is $U(a, b)$.',
    '$\\text{Exp}(\\lambda)$ with rate $\\lambda$: $f = \\lambda e^{-\\lambda x}$, $P(X > x) = e^{-\\lambda x}$, mean $1/\\lambda$, variance $1/\\lambda^2$, median $\\ln 2/\\lambda$. Check whether a library or book uses the rate or the mean.',
    'In a Poisson process with rate $\\lambda$, the gaps between events are independent $\\text{Exp}(\\lambda)$: $P(T_1 > t) = P(N(t) = 0) = e^{-\\lambda t}$.',
    'Memoryless: $P(T > s + t \\mid T > s) = P(T > t)$, equivalently a constant hazard $h(t) = \\lambda$. Good for random shocks, wrong for wear-out.',
    'Series systems add failure rates ($\\min$ of exponentials is exponential); parallel systems have $R = 1 - \\prod(1 - R_i)$. The time to the $k$-th event is $\\text{Gamma}(k, \\lambda)$ with mean $k/\\lambda$, and $P(S_k \\le t) = P(N(t) \\ge k)$.',
  ],
  reading: [
    {
      title: 'Wikipedia — Exponential distribution',
      url: 'https://en.wikipedia.org/wiki/Exponential_distribution',
      source: 'wikipedia',
      note: 'Properties, the memoryless characterization, the rate-versus-scale parametrizations and the link to Poisson processes.',
    },
    {
      title: 'Wikipedia — Bathtub curve',
      url: 'https://en.wikipedia.org/wiki/Bathtub_curve',
      source: 'wikipedia',
      note: 'The three phases of failure rates in reliability engineering, and where the exponential model applies.',
    },
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The continuous random variables chapter covers the uniform and exponential distributions with many applied examples.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'Class notes on the exponential distribution and its relation to the Poisson process, with problem sets.',
    },
  ],
};
