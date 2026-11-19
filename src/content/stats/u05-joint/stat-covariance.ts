import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'stat-covariance',
  title: 'Covariance and Correlation',
  summary: 'Measuring how two random variables move together: covariance and its algebra, the correlation coefficient and why $-1 \\le \\rho \\le 1$ (Cauchy–Schwarz), what correlation cannot see, regression to the mean, and covariance matrices.',
  minutes: 20,
  objectives: [
    'Compute $\\operatorname{Cov}(X, Y)$ from a joint distribution with the shortcut $E[XY] - E[X]E[Y]$, and explain its sign',
    'Use bilinearity to find the covariance of linear transformations, and show that independence implies zero covariance',
    'Compute the correlation coefficient, prove $|\\rho| \\le 1$, and interpret $\\rho$ correctly (linear association, not causation)',
    'Give examples of dependent variables with $\\rho = 0$',
    'Predict regression to the mean with $E[Z_Y \\mid Z_X = z] = \\rho z$, and read a covariance matrix',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Covariance: do two variables move together?',
      blocks: [
        {
          type: 'p',
          text: 'In the kills/deaths table of the previous lesson, rounds with more kills tended to have fewer deaths. A joint table holds that information, but nine numbers are a lot to look at. You want **one** number that says whether $X$ and $Y$ tend to be high together, or one high while the other is low.',
        },
        {
          type: 'p',
          text: 'Here is the idea. Measure each variable from its own mean: $X - \\mu_X$ and $Y - \\mu_Y$. When both are above their means, or both below, the product $(X - \\mu_X)(Y - \\mu_Y)$ is **positive**. When one is above and the other below, it is **negative**. Average the product, and the sign tells you which pattern wins.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 470 292" xmlns="http://www.w3.org/2000/svg"><rect x="190.0" y="20" width="150.0" height="110.0" class="f-green" fill-opacity="0.08"/><rect x="40" y="130.0" width="150.0" height="110.0" class="f-green" fill-opacity="0.08"/><rect x="40" y="20" width="150.0" height="110.0" class="f-red" fill-opacity="0.08"/><rect x="190.0" y="130.0" width="150.0" height="110.0" class="f-red" fill-opacity="0.08"/><rect x="40" y="20" width="300" height="220" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><line x1="190.0" y1="20" x2="190.0" y2="240" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="40" y1="130.0" x2="340" y2="130.0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="197.3" cy="119.1" r="3.4" class="f-green"/><circle cx="281.2" cy="96.4" r="3.4" class="f-green"/><circle cx="272.7" cy="67.6" r="3.4" class="f-green"/><circle cx="162.9" cy="190.3" r="3.4" class="f-green"/><circle cx="176.3" cy="163.1" r="3.4" class="f-green"/><circle cx="161.8" cy="174.2" r="3.4" class="f-green"/><circle cx="231.2" cy="185.4" r="3.4" class="f-red"/><circle cx="191.6" cy="129.1" r="3.4" class="f-green"/><circle cx="242.4" cy="98.3" r="3.4" class="f-green"/><circle cx="78.3" cy="196.8" r="3.4" class="f-green"/><circle cx="294.3" cy="50.2" r="3.4" class="f-green"/><circle cx="189.1" cy="104.2" r="3.4" class="f-red"/><circle cx="238.2" cy="95.9" r="3.4" class="f-green"/><circle cx="186.5" cy="120.5" r="3.4" class="f-red"/><circle cx="171.2" cy="104.9" r="3.4" class="f-red"/><circle cx="224.5" cy="172.7" r="3.4" class="f-red"/><circle cx="247.4" cy="93.5" r="3.4" class="f-green"/><circle cx="182.4" cy="114.4" r="3.4" class="f-red"/><circle cx="185.5" cy="201.1" r="3.4" class="f-green"/><circle cx="238.6" cy="106.2" r="3.4" class="f-green"/><circle cx="140.1" cy="159.2" r="3.4" class="f-green"/><circle cx="99.3" cy="133.9" r="3.4" class="f-green"/><circle cx="220.2" cy="141.0" r="3.4" class="f-red"/><circle cx="152.7" cy="146.7" r="3.4" class="f-green"/><circle cx="73.6" cy="158.2" r="3.4" class="f-green"/><circle cx="143.7" cy="181.3" r="3.4" class="f-green"/><circle cx="165.6" cy="119.8" r="3.4" class="f-red"/><circle cx="119.7" cy="160.3" r="3.4" class="f-green"/><circle cx="100.7" cy="144.2" r="3.4" class="f-green"/><circle cx="197.5" cy="151.2" r="3.4" class="f-red"/><circle cx="252.0" cy="74.6" r="3.4" class="f-green"/><circle cx="180.4" cy="114.9" r="3.4" class="f-red"/><circle cx="148.1" cy="154.0" r="3.4" class="f-green"/><circle cx="219.5" cy="101.6" r="3.4" class="f-green"/><circle cx="240.6" cy="71.8" r="3.4" class="f-green"/><circle cx="176.2" cy="72.4" r="3.4" class="f-red"/><circle cx="229.7" cy="180.0" r="3.4" class="f-red"/><circle cx="261.2" cy="79.2" r="3.4" class="f-green"/><circle cx="182.1" cy="119.6" r="3.4" class="f-red"/><circle cx="143.7" cy="152.3" r="3.4" class="f-green"/><text x="304.0" y="50" font-size="26" class="t-green" text-anchor="middle">+</text><text x="76.0" y="228" font-size="26" class="t-green" text-anchor="middle">+</text><text x="76.0" y="50" font-size="26" class="t-red" text-anchor="middle">−</text><text x="304.0" y="228" font-size="26" class="t-red" text-anchor="middle">−</text><text x="195.0" y="256" font-size="12">x = μ<tspan baseline-shift="sub" font-size="9">X</tspan></text><text x="346" y="134.0" font-size="12">y = μ<tspan baseline-shift="sub" font-size="9">Y</tspan></text><text x="346" y="50" font-size="12" class="t-green">● product &gt; 0</text><text x="346" y="70" font-size="12" class="t-red">● product &lt; 0</text><text x="190.0" y="280" font-size="13" text-anchor="middle">Cov = average of (x − μ<tspan baseline-shift="sub" font-size="9">X</tspan>)(y − μ<tspan baseline-shift="sub" font-size="9">Y</tspan>)</text></svg>',
          alt: 'A scatter plot of 40 points with an upward trend, divided into four quadrants by dashed lines at the two means. Points in the upper-right and lower-left quadrants are green and marked plus; points in the upper-left and lower-right quadrants are red and marked minus. Most points are green.',
          caption: 'The dashed lines through the means split the plane into four quadrants. Green points contribute positive products, red points negative ones. Here green dominates, so the covariance is positive.',
          maxWidth: 470,
        },
        {
          type: 'definition',
          term: 'Covariance',
          text: 'The [[stat-covariance|covariance]] of $X$ and $Y$ is $$\\operatorname{Cov}(X, Y) = E\\big[(X - \\mu_X)(Y - \\mu_Y)\\big] = E[XY] - E[X]\\,E[Y].$$ Note that $\\operatorname{Cov}(X, X) = E[(X - \\mu_X)^2] = \\operatorname{Var}(X)$: covariance generalizes [[dm-variance|variance]].',
        },
        {
          type: 'derivation',
          title: 'Why the shortcut holds, and the kills/deaths covariance',
          steps: [
            { tex: '(X - \\mu_X)(Y - \\mu_Y) = XY - \\mu_Y X - \\mu_X Y + \\mu_X \\mu_Y', why: 'Expand the product. $\\mu_X$ and $\\mu_Y$ are constants.' },
            { tex: 'E[\\cdots] = E[XY] - \\mu_Y \\mu_X - \\mu_X \\mu_Y + \\mu_X \\mu_Y = E[XY] - \\mu_X \\mu_Y', why: 'Linearity of expectation term by term, using $E[X] = \\mu_X$ and $E[Y] = \\mu_Y$.' },
            { tex: 'E[XY] = \\sum_{x,y} xy\\,p(x, y) = 1(0.20) + 2(0.05) + 2(0.05) + 4(0.05) = 0.60', why: 'From the joint table: only cells with $x, y \\ge 1$ contribute. $XY$ is a function of the pair, so its mean needs the **joint** PMF.' },
            { tex: '\\operatorname{Cov}(X, Y) = 0.60 - (0.90)(0.80) = -0.12', why: 'The means $E[X] = 0.90$ and $E[Y] = 0.80$ came from the marginals.' },
          ],
          result: 'Negative, as expected: more kills go with fewer deaths. For the continuous density $f(x, y) = x + y$ on the unit square, the same recipe gives $E[XY] = \\frac{1}{3}$, $E[X] = E[Y] = \\frac{7}{12}$ and $\\operatorname{Cov} = \\frac{1}{3} - \\frac{49}{144} = -\\frac{1}{144}$ — slightly negative, matching the tilting slices you saw.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Two daily quests are completed ($1$) or not ($0$). Their joint PMF is $p(0,0) = 0.4$, $p(0,1) = 0.1$, $p(1,0) = 0.1$, $p(1,1) = 0.4$. Find $\\operatorname{Cov}(X, Y)$.',
      hint: 'For $0/1$ variables, $E[X] = P(X = 1)$ and $E[XY] = P(X = 1, Y = 1)$.',
      label: '$\\operatorname{Cov}(X, Y) =$',
      answer: '0.15',
      tolerance: 0.0001,
      answerTex: '0.15',
      explanation: '$E[X] = p(1,0) + p(1,1) = 0.5$ and likewise $E[Y] = 0.5$. The product $XY$ is $1$ only when both quests are done, so $E[XY] = p(1,1) = 0.4$. Then $\\operatorname{Cov}(X, Y) = 0.4 - 0.5 \\cdot 0.5 = 0.15$. Positive: players who do one quest tend to do the other. (If they were independent, $p(1,1)$ would be $0.25$ and the covariance $0$.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The algebra of covariance',
      blocks: [
        {
          type: 'p',
          text: 'Covariance obeys simple rules, all of which follow from the definition and linearity of expectation. Learn them as a toolkit: you will use them constantly to find variances of sums (next lesson), estimators (Unit 7) and regression slopes (Unit 10).',
        },
        {
          type: 'table',
          headers: ['Property', 'Formula'],
          rows: [
            ['Symmetric', '$\\operatorname{Cov}(X, Y) = \\operatorname{Cov}(Y, X)$'],
            ['Variance is a special case', '$\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$'],
            ['Constants do nothing', '$\\operatorname{Cov}(X, c) = 0$'],
            ['Scaling and shifting', '$\\operatorname{Cov}(aX + b,\\ cY + d) = ac\\,\\operatorname{Cov}(X, Y)$'],
            ['Additive in each slot', '$\\operatorname{Cov}(X_1 + X_2,\\ Y) = \\operatorname{Cov}(X_1, Y) + \\operatorname{Cov}(X_2, Y)$'],
            ['Independence', '$X, Y$ independent $\\implies \\operatorname{Cov}(X, Y) = 0$'],
          ],
          caption: 'The last two rows together say covariance is **bilinear**: linear in each argument, like a dot product.',
        },
        {
          type: 'derivation',
          title: 'Independent variables have covariance zero',
          steps: [
            { tex: 'E[XY] = \\sum_x \\sum_y xy\\,p_{X,Y}(x, y) = \\sum_x \\sum_y xy\\,p_X(x)\\,p_Y(y)', why: 'Independence means the joint PMF factors into the marginals (for densities, replace sums by integrals).' },
            { tex: '= \\Big(\\sum_x x\\,p_X(x)\\Big)\\Big(\\sum_y y\\,p_Y(y)\\Big) = E[X]\\,E[Y]', why: 'Each term is a product of an $x$-part and a $y$-part, so the double sum splits into a product of single sums.' },
            { tex: '\\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0', why: 'The shortcut formula.' },
          ],
          result: 'The converse is **false** — a fact important enough to get its own card below.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why shifts vanish and scales multiply',
          text: 'Shifting $X$ by $b$ shifts its mean by $b$, so the deviation $X - \\mu_X$ is unchanged: $(aX + b) - (a\\mu_X + b) = a(X - \\mu_X)$. The product of deviations therefore picks up the factor $ac$ and nothing else. In particular, covariance has **units**: if $X$ is in milliseconds and $Y$ in draw calls, $\\operatorname{Cov}$ is in ms·calls, and switching $X$ to seconds divides it by $1000$. A number that changes when you change units cannot tell you how *strong* a relationship is. That is the job of correlation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Suppose $\\operatorname{Cov}(X, Y) = -0.5$. Find $\\operatorname{Cov}(3X - 2,\\ 4 - 2Y)$.',
      hint: 'Write $4 - 2Y$ as $(-2)Y + 4$. Shifts drop out; scale factors multiply.',
      label: '$\\operatorname{Cov} =$',
      answer: '3',
      explanation: '$\\operatorname{Cov}(3X - 2, -2Y + 4) = (3)(-2)\\operatorname{Cov}(X, Y) = (-6)(-0.5) = 3$. The constants $-2$ and $4$ do not matter, because covariance only sees deviations from the mean. The two negative signs cancel: flipping the sign of $Y$ flips the direction of the relationship, and the original relationship was negative.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Correlation, and why $-1 \\le \\rho \\le 1$',
      blocks: [
        {
          type: 'p',
          text: 'To remove the units, divide by the standard deviations — the natural "unit length" of each variable. The result is a pure number.',
        },
        {
          type: 'definition',
          term: 'Correlation coefficient',
          text: 'For $X$ and $Y$ with positive, finite variances, the [[stat-correlation|correlation]] is $$\\rho = \\operatorname{Corr}(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X\\,\\sigma_Y}.$$ Equivalently, it is the covariance of the **standardized** variables $Z_X = (X - \\mu_X)/\\sigma_X$ and $Z_Y = (Y - \\mu_Y)/\\sigma_Y$.',
        },
        {
          type: 'p',
          text: 'For kills and deaths, $E[X^2] = 1(0.40) + 4(0.25) = 1.40$, so $\\operatorname{Var}(X) = 1.40 - 0.81 = 0.59$; similarly $\\operatorname{Var}(Y) = 1.20 - 0.64 = 0.56$. Then $\\rho = -0.12/\\sqrt{0.59 \\cdot 0.56} \\approx -0.209$: a weak negative association. For $f(x, y) = x + y$, $\\operatorname{Var}(X) = \\frac{11}{144}$ and $\\rho = -\\frac{1/144}{11/144} = -\\frac{1}{11}$.',
        },
        {
          type: 'theorem',
          name: 'Correlation is between $-1$ and $1$',
          tex: '-1 \\le \\rho \\le 1, \\quad \\text{with } |\\rho| = 1 \\iff Y = a + bX \\text{ for some constants } a,\\ b \\ne 0',
          text: 'With probability $1$; the sign of $\\rho$ is the sign of $b$.',
        },
        {
          type: 'derivation',
          title: 'Proof: a variance can never be negative',
          steps: [
            { tex: 'q(s) = \\operatorname{Var}(Y - sX) \\ge 0 \\quad \\text{for every real } s', why: 'A variance is an average of squares. This one trick is the whole proof.' },
            { tex: 'q(s) = \\operatorname{Var}(Y) - 2s\\,\\operatorname{Cov}(X, Y) + s^2\\operatorname{Var}(X)', why: 'Expand with bilinearity: $\\operatorname{Cov}(Y - sX, Y - sX)$ has four terms, two of which are equal.' },
            { tex: '\\big(2\\operatorname{Cov}(X, Y)\\big)^2 - 4\\operatorname{Var}(X)\\operatorname{Var}(Y) \\le 0', why: 'A quadratic in $s$ that is never negative has at most one real root, so its discriminant is $\\le 0$.' },
            { tex: '\\operatorname{Cov}(X, Y)^2 \\le \\sigma_X^2\\,\\sigma_Y^2 \\implies |\\rho| \\le 1', why: 'Divide by $4$, take square roots, and divide by $\\sigma_X \\sigma_Y > 0$.' },
          ],
          result: 'Equality means the discriminant is $0$, so $q(s_0) = \\operatorname{Var}(Y - s_0 X) = 0$ for some $s_0$: then $Y - s_0 X$ is a constant $a$, i.e. $Y = a + s_0 X$ exactly.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Linear algebra connection: correlation is a cosine',
          text: 'Covariance is bilinear, symmetric and $\\operatorname{Cov}(X, X) \\ge 0$ — exactly the properties of a [[dot-product|dot product]]. The proof above is the same as the proof of the [[la-cauchy-schwarz|Cauchy–Schwarz inequality]] $|\\mathbf{u} \\cdot \\mathbf{v}| \\le \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$. For data, center each column (subtract its mean) to get vectors $\\tilde{\\mathbf{x}}, \\tilde{\\mathbf{y}} \\in \\mathbb{R}^n$; the sample correlation is $r = \\frac{\\tilde{\\mathbf{x}} \\cdot \\tilde{\\mathbf{y}}}{\\|\\tilde{\\mathbf{x}}\\|\\,\\|\\tilde{\\mathbf{y}}\\|} = \\cos\\theta$. Perpendicular centered vectors mean $r = 0$; parallel ones mean $r = \\pm 1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Across many frames of a game, frame time $X$ has standard deviation $4$ ms, the number of draw calls $Y$ has standard deviation $250$, and $\\operatorname{Cov}(X, Y) = 600$ ms·calls. Find the correlation $\\rho$.',
      hint: 'Divide the covariance by the product of the two standard deviations.',
      label: '$\\rho =$',
      answer: '0.6',
      tolerance: 0.0001,
      answerTex: '0.6',
      explanation: '$\\rho = \\frac{600}{4 \\times 250} = \\frac{600}{1000} = 0.6$, and the units ms·calls cancel. A moderately strong positive linear association: frames with more draw calls tend to take longer. If you plugged in variances ($16$ and $62{,}500$) instead of standard deviations you would get a tiny number with the wrong units — a sign to go back and take square roots.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'What correlation looks like',
      blocks: [
        {
          type: 'p',
          text: 'The value of $\\rho$ describes how tightly points cluster around **a line**, and which way the line slopes. The panels below each show $70$ standardized points whose correlation is exactly the value stated.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 490 314" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="150" height="118" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><circle cx="91.1" cy="63.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="99.7" cy="94.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="83.2" cy="69.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="65.4" cy="53.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="78.0" cy="49.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="62.5" cy="44.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.8" cy="74.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="129.7" cy="99.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="76.9" cy="62.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="73.2" cy="43.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="105.2" cy="83.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="101.3" cy="79.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="94.1" cy="68.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="64.3" cy="52.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="90.2" cy="71.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="111.1" cy="94.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="52.3" cy="43.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="77.9" cy="65.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="36.3" cy="21.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="53.9" cy="38.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="38.0" cy="34.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="84.3" cy="59.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="54.6" cy="48.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="98.9" cy="65.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="95.6" cy="73.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="85.7" cy="60.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="18.6" cy="32.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="75.5" cy="56.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="89.7" cy="85.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="94.3" cy="91.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="47.0" cy="42.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="77.3" cy="69.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="62.9" cy="49.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="67.8" cy="32.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="121.6" cy="98.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="67.8" cy="60.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="90.1" cy="67.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="116.5" cy="82.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="74.3" cy="60.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="87.8" cy="69.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="94.2" cy="65.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.9" cy="66.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="55.8" cy="55.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="93.3" cy="72.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="130.2" cy="96.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="46.5" cy="49.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="115.8" cy="84.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="94.5" cy="80.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="72.6" cy="48.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="148.7" cy="107.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="113.0" cy="84.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="56.5" cy="52.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="93.2" cy="72.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="107.7" cy="100.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="85.6" cy="76.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="110.7" cy="79.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="89.1" cy="88.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="110.3" cy="75.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="132.5" cy="114.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="71.6" cy="49.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="96.9" cy="81.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="77.7" cy="53.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="94.7" cy="71.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="56.9" cy="61.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="74.4" cy="46.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="85.4" cy="52.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="116.9" cy="88.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="124.0" cy="95.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="52.9" cy="45.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="68.2" cy="63.6" r="2.4" class="f-blue" fill-opacity="0.75"/><text x="85.0" y="144" text-anchor="middle" font-size="13">ρ = −0.9</text><rect x="170" y="8" width="150" height="118" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><circle cx="276.4" cy="79.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="230.4" cy="40.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="244.2" cy="90.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="223.4" cy="87.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="228.1" cy="49.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="209.8" cy="43.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="280.9" cy="85.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="241.3" cy="60.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="272.7" cy="92.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="246.0" cy="89.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="226.2" cy="55.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="236.5" cy="74.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="229.9" cy="83.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="245.9" cy="54.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="235.1" cy="58.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="237.2" cy="51.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="207.0" cy="59.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="223.0" cy="62.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="292.0" cy="104.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="226.8" cy="68.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="216.1" cy="44.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="255.1" cy="81.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="285.1" cy="77.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="204.9" cy="35.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="239.8" cy="25.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="227.9" cy="77.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="196.3" cy="22.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="266.2" cy="75.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="245.0" cy="63.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="247.6" cy="89.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="224.6" cy="59.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="258.4" cy="57.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="230.5" cy="56.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="241.6" cy="59.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="214.6" cy="51.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="211.6" cy="25.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="283.1" cy="83.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="231.4" cy="93.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="253.8" cy="79.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="244.7" cy="96.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="233.3" cy="112.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="231.4" cy="64.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="263.3" cy="49.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="237.2" cy="57.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="241.4" cy="80.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="246.3" cy="79.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="278.6" cy="61.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="264.7" cy="70.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="256.4" cy="67.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="229.8" cy="55.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="206.9" cy="42.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="272.2" cy="63.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="272.7" cy="67.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="241.7" cy="57.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="260.8" cy="88.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="267.5" cy="65.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="268.9" cy="87.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="271.4" cy="57.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="232.9" cy="78.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="288.1" cy="87.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="210.7" cy="44.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="269.8" cy="98.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="259.5" cy="40.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="270.1" cy="50.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="298.3" cy="98.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="287.2" cy="71.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="213.6" cy="39.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="198.3" cy="83.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="268.5" cy="70.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="217.2" cy="49.2" r="2.4" class="f-blue" fill-opacity="0.75"/><text x="245.0" y="144" text-anchor="middle" font-size="13">ρ = −0.5</text><rect x="330" y="8" width="150" height="118" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><circle cx="404.8" cy="83.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="372.1" cy="75.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="394.9" cy="60.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="397.4" cy="70.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="435.9" cy="62.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="411.9" cy="60.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="402.3" cy="72.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="445.5" cy="67.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="386.8" cy="61.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="391.5" cy="67.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="351.3" cy="55.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="446.6" cy="28.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="429.6" cy="54.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="428.2" cy="65.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="421.3" cy="100.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="405.5" cy="58.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="408.5" cy="105.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="395.3" cy="94.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="396.7" cy="48.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="404.0" cy="51.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="445.0" cy="69.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="418.1" cy="101.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="400.8" cy="73.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="386.1" cy="79.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="384.6" cy="52.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="447.5" cy="21.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="416.7" cy="62.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="404.3" cy="82.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="392.7" cy="89.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="371.2" cy="66.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="400.6" cy="69.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="427.0" cy="89.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="391.4" cy="63.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="396.0" cy="89.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="396.2" cy="43.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="405.5" cy="44.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="357.6" cy="43.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="395.8" cy="75.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="378.4" cy="55.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="427.3" cy="69.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="380.8" cy="73.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="418.7" cy="73.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="445.3" cy="93.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="393.6" cy="95.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="385.5" cy="49.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="407.8" cy="70.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="402.4" cy="61.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="374.5" cy="45.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="415.4" cy="101.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="459.2" cy="83.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="395.2" cy="62.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="396.7" cy="58.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="373.0" cy="73.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="411.4" cy="45.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="367.4" cy="61.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="371.3" cy="90.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="438.4" cy="85.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="377.0" cy="49.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="432.9" cy="57.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="445.3" cy="105.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="409.7" cy="38.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="418.0" cy="54.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="457.4" cy="39.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="396.9" cy="73.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="385.8" cy="71.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="364.4" cy="88.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="403.6" cy="14.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="444.1" cy="70.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="429.4" cy="34.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="375.9" cy="78.9" r="2.4" class="f-blue" fill-opacity="0.75"/><text x="405.0" y="144" text-anchor="middle" font-size="13">ρ = 0</text><rect x="10" y="160" width="150" height="118" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><circle cx="98.2" cy="190.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="46.5" cy="248.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="82.8" cy="242.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="121.3" cy="205.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="58.3" cy="195.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="123.8" cy="254.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="103.1" cy="194.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="64.2" cy="243.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="79.5" cy="194.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="80.7" cy="236.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.2" cy="215.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="78.5" cy="246.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="70.3" cy="239.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="85.0" cy="184.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="64.7" cy="204.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="57.3" cy="232.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.3" cy="227.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="118.5" cy="237.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="50.5" cy="235.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="93.7" cy="210.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="75.3" cy="218.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="66.1" cy="222.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="117.7" cy="222.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="79.0" cy="216.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="135.8" cy="192.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="71.6" cy="192.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="104.5" cy="166.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="87.2" cy="214.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="72.4" cy="233.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="110.2" cy="203.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="89.3" cy="223.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="110.6" cy="217.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.3" cy="211.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="63.0" cy="243.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="90.7" cy="198.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="95.1" cy="211.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="120.6" cy="193.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="68.1" cy="223.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.5" cy="224.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="45.1" cy="248.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="112.0" cy="206.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="63.1" cy="233.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="42.7" cy="225.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.0" cy="210.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="124.8" cy="224.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="50.7" cy="225.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="63.0" cy="249.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="72.7" cy="230.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="61.8" cy="228.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="104.3" cy="247.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="70.9" cy="216.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="73.3" cy="214.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="110.1" cy="205.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="72.3" cy="226.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="105.8" cy="212.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="66.2" cy="240.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="59.5" cy="229.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="41.9" cy="242.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="146.1" cy="185.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="84.6" cy="237.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="100.5" cy="201.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="92.7" cy="206.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="98.1" cy="210.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="95.0" cy="217.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="147.4" cy="176.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="64.3" cy="255.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="49.7" cy="218.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="65.1" cy="216.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="56.0" cy="219.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="114.7" cy="192.9" r="2.4" class="f-blue" fill-opacity="0.75"/><text x="85.0" y="296" text-anchor="middle" font-size="13">ρ = 0.5</text><rect x="170" y="160" width="150" height="118" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><circle cx="228.5" cy="228.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="238.5" cy="211.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="261.3" cy="209.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="256.0" cy="199.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="250.3" cy="225.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="206.7" cy="245.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="258.7" cy="213.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="274.8" cy="193.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="270.7" cy="194.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="251.0" cy="230.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="205.6" cy="252.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="269.0" cy="201.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="241.4" cy="228.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="180.8" cy="273.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="254.7" cy="204.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="207.2" cy="238.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="212.2" cy="235.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="229.0" cy="234.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="277.4" cy="190.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="235.7" cy="227.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="252.0" cy="205.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="289.4" cy="200.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="285.5" cy="202.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="242.5" cy="219.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="239.0" cy="229.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="213.1" cy="233.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="227.5" cy="228.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="255.9" cy="221.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="255.1" cy="212.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="247.9" cy="221.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="270.3" cy="195.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="225.5" cy="237.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="243.7" cy="224.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="263.6" cy="196.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="259.9" cy="189.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="272.3" cy="184.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="255.2" cy="212.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="237.2" cy="222.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="254.3" cy="199.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="219.7" cy="236.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="203.5" cy="254.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="259.8" cy="209.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="243.7" cy="216.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="252.9" cy="222.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="202.0" cy="261.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="235.8" cy="238.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="229.9" cy="222.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="223.2" cy="240.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="187.9" cy="256.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="236.6" cy="222.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="267.9" cy="199.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="254.8" cy="216.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="229.8" cy="224.4" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="244.7" cy="228.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="264.3" cy="211.1" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="175.1" cy="272.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="241.9" cy="211.0" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="258.9" cy="211.3" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="262.4" cy="215.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="288.2" cy="196.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="273.9" cy="203.8" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="253.0" cy="208.2" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="252.8" cy="229.7" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="265.1" cy="216.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="231.4" cy="231.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="244.1" cy="196.6" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="268.1" cy="196.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="294.8" cy="189.9" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="241.0" cy="215.5" r="2.4" class="f-blue" fill-opacity="0.75"/><circle cx="243.9" cy="201.2" r="2.4" class="f-blue" fill-opacity="0.75"/><text x="245.0" y="296" text-anchor="middle" font-size="13">ρ = 0.9</text><rect x="330" y="160" width="150" height="118" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><circle cx="396.6" cy="242.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="385.0" cy="226.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="393.9" cy="239.5" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="408.6" cy="235.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="421.3" cy="240.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="410.2" cy="243.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="370.8" cy="200.8" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="432.7" cy="210.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="441.9" cy="188.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="370.3" cy="191.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="383.2" cy="230.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="376.6" cy="208.8" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="435.4" cy="208.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="440.7" cy="197.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="365.3" cy="181.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="390.4" cy="237.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="378.2" cy="224.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="402.3" cy="243.2" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="441.7" cy="198.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="367.6" cy="192.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="376.4" cy="210.0" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="403.9" cy="240.5" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="407.1" cy="235.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="426.4" cy="225.8" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="399.6" cy="247.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="373.7" cy="208.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="392.3" cy="239.8" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="447.0" cy="181.8" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="426.8" cy="222.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="371.6" cy="203.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="431.8" cy="223.5" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="388.5" cy="228.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="429.5" cy="220.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="362.6" cy="173.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="437.3" cy="202.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="375.6" cy="207.2" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="401.1" cy="241.2" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="419.1" cy="229.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="405.7" cy="240.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="375.9" cy="208.8" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="373.6" cy="203.6" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="386.2" cy="235.0" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="366.0" cy="186.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="380.3" cy="220.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="372.8" cy="202.6" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="401.9" cy="247.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="392.5" cy="229.2" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="412.6" cy="239.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="385.9" cy="233.5" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="364.4" cy="188.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="390.3" cy="235.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="427.2" cy="224.0" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="383.7" cy="228.2" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="396.7" cy="239.0" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="427.2" cy="226.3" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="396.9" cy="237.1" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="438.7" cy="202.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="441.4" cy="193.0" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="388.5" cy="227.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="425.6" cy="215.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="383.5" cy="229.0" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="373.6" cy="207.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="399.6" cy="244.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="413.9" cy="235.6" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="442.9" cy="193.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="374.2" cy="208.7" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="423.5" cy="229.4" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="402.9" cy="245.9" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="372.9" cy="207.8" r="2.4" class="f-purple" fill-opacity="0.75"/><circle cx="446.2" cy="181.2" r="2.4" class="f-purple" fill-opacity="0.75"/><text x="405.0" y="296" text-anchor="middle" font-size="13">ρ ≈ 0, but Y ≈ X²</text></svg>',
          alt: 'Six scatter plots. Correlation −0.9: a tight downward band. −0.5: a loose downward cloud. 0: a round cloud with no trend. 0.5: a loose upward cloud. 0.9: a tight upward band. The sixth panel, in purple, shows points along a U-shaped parabola, labeled rho approximately 0 but Y approximately X squared.',
          caption: 'As $|\\rho|$ grows from $0$ to $1$ the cloud narrows toward a line. Even $\\rho = 0.5$ looks surprisingly messy. The purple panel has correlation essentially $0$, yet $Y$ is almost a function of $X$: correlation only detects the *straight-line* part of a relationship.',
          maxWidth: 490,
        },
        {
          type: 'list',
          items: [
            '**Sign** = direction of the linear trend. **Size** = how close the points are to a line, *not* the slope: $Y = 0.01X$ and $Y = 100X$ both have $\\rho = 1$.',
            '$\\rho$ does not change if you change units with positive scale factors (ms to s, dollars to cents); a negative factor flips its sign.',
            '$\\rho^2$ is the fraction of the variance of $Y$ that the best straight line in $X$ accounts for — so $\\rho = 0.5$ explains only $25\\%$ (you will prove this in Unit 10).',
            'Correlation is **not causation**. Hours played and win rate are positively correlated, but practice, matchmaking, smurf accounts and survivorship (players who lose a lot quit) all contribute. Only a [[stat-randomized-experiment|randomized experiment]] (an A/B test, Unit 8) separates cause from association.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'In a player survey, weekly hours played and ranked win rate have correlation $\\rho = 0.45$. Which statement is justified?',
      options: [
        { text: 'Playing more causes players to win more.', why: 'Correlation does not establish causation. Skilled players may simply enjoy playing more, and players who lose a lot may quit (survivorship). An experiment would be needed to isolate a causal effect.' },
        { text: '$45\\%$ of players have both high hours and a high win rate.', why: '$\\rho$ is not a proportion of players. It summarizes the whole cloud of points: how close it is to an increasing line.' },
        { text: 'There is a moderate positive linear association: players with above-average hours tend to have above-average win rates.', correct: true, why: 'Exactly what a positive $\\rho$ of moderate size means — a tendency, with plenty of exceptions.' },
        { text: 'Each extra hour per week raises the win rate by $0.45$ percentage points.', why: 'That describes a **slope**, which depends on units. Correlation is unit-free; the slope of the best line is $\\rho\\,\\sigma_Y/\\sigma_X$, which needs the standard deviations too.' },
      ],
      explanation: '$\\rho = 0.45$ says the points trend upward and are moderately (not tightly) clustered around a line; $\\rho^2 \\approx 0.20$, so a straight line in hours accounts for only about a fifth of the variation in win rate. It says nothing about why. The two classic misreadings are "correlation = causation" and "correlation = slope".',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Uncorrelated is not independent',
      blocks: [
        {
          type: 'p',
          text: 'Independence implies $\\rho = 0$. The converse fails whenever the relationship is not linear, because covariance averages positive and negative products that can cancel.',
        },
        {
          type: 'derivation',
          title: 'A perfectly dependent pair with $\\rho = 0$',
          steps: [
            { tex: 'X \\sim U(-1, 1), \\quad Y = X^2', why: '$Y$ is completely determined by $X$ — as dependent as two variables can be.' },
            { tex: 'E[X] = 0, \\qquad E[XY] = E[X^3] = \\int_{-1}^{1} x^3 \\cdot \\tfrac{1}{2}\\,dx = 0', why: 'The density of $U(-1, 1)$ is $\\frac{1}{2}$ on $[-1, 1]$, and $x$, $x^3$ are odd functions integrated over a symmetric interval.' },
            { tex: '\\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0 - 0 \\cdot E[Y] = 0', why: 'Positive $X$ and negative $X$ give the same $Y$, so the products $(X - 0)(Y - \\mu_Y)$ cancel in pairs.' },
          ],
          result: 'Here $Y$ is a function of $X$, yet $\\rho = 0$. The best *line* through a symmetric parabola is flat.',
        },
        {
          type: 'list',
          items: [
            'Points uniformly spread on a circle: $\\rho = 0$, but knowing $X$ pins $Y$ to two values.',
            'Ping $X$ and a "lag complaint" score $Y$ that is high both for very low ping (players on LAN who expect perfection) and for very high ping: U-shaped, possibly $\\rho \\approx 0$.',
            'A single outlier can manufacture a large $\\rho$ from unrelated data, or hide a strong one. **Always plot the data** — Anscombe\'s quartet is four data sets with identical $r = 0.816$ and completely different pictures.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The one important exception',
          text: 'If $(X, Y)$ is **bivariate normal** (jointly normal, an elliptical bell-shaped surface), then $\\rho = 0$ does imply independence: the joint density factors exactly when the cross term $\\rho xy$ in its exponent vanishes. This is special to the normal family. It is also why "uncorrelated" and "independent" are often (sloppily) used interchangeably in signal processing and finance.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'If $\\operatorname{Cov}(X, Y) = 0$, then $X$ and $Y$ are independent.',
      answer: false,
      explanation: 'False. Independence implies zero covariance, but not the other way around. With $X \\sim U(-1, 1)$ and $Y = X^2$, the covariance is $E[X^3] - E[X]E[X^2] = 0$, yet $Y$ is a function of $X$. Zero covariance only rules out a **linear** relationship. (For jointly normal variables, and only in such special families, zero covariance does imply independence.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Regression to the mean',
      blocks: [
        {
          type: 'p',
          text: 'A ranked player scores in the top $2\\%$ in week $1$. In week $2$ they are still good — but noticeably less extraordinary. Commentators invent explanations (pressure, complacency, the "sophomore slump"). The real explanation is correlation.',
        },
        {
          type: 'p',
          text: 'Put both weeks in standard units: $Z_1$ and $Z_2$, each with mean $0$ and standard deviation $1$, correlation $\\rho$. What is the best straight-line prediction $\\hat{Z}_2 = bZ_1$ of the second score from the first?',
        },
        {
          type: 'derivation',
          title: 'The best linear prediction shrinks by the factor $\\rho$',
          steps: [
            { tex: 'E\\big[(Z_2 - bZ_1)^2\\big] = E[Z_2^2] - 2b\\,E[Z_1 Z_2] + b^2 E[Z_1^2] = 1 - 2b\\rho + b^2', why: 'Mean squared prediction error. For standardized variables $E[Z^2] = \\operatorname{Var}(Z) = 1$ and $E[Z_1 Z_2] = \\operatorname{Cov}(Z_1, Z_2) = \\rho$.' },
            { tex: '\\frac{d}{db}\\left(1 - 2b\\rho + b^2\\right) = -2\\rho + 2b = 0 \\implies b = \\rho', why: 'Minimize with a [[derivative]]: the parabola in $b$ has its vertex at $b = \\rho$.' },
            { tex: '\\hat{Z}_2 = \\rho\\,Z_1, \\qquad \\text{in original units: } \\hat{y} = \\mu_Y + \\rho\\,\\frac{\\sigma_Y}{\\sigma_X}\\,(x - \\mu_X)', why: 'Undo the standardization. For a bivariate normal pair this line is exactly $E[Y \\mid X = x]$.' },
          ],
          result: 'If $|\\rho| < 1$, the prediction is always **closer to the mean** (in standard units) than the first score. That is [[stat-regression-to-the-mean|regression to the mean]] — and the reason the least-squares line is called a "regression" line.',
        },
        {
          type: 'graph',
          x: [-3.2, 3.2],
          y: [-3.2, 3.2],
          xStep: 1,
          yStep: 1,
          equal: true,
          height: 340,
          parametric: [
            { x: '2/sqrt(2)*(sqrt(1 + r)cos(t) + sqrt(1 - r)sin(t))', y: '2/sqrt(2)*(sqrt(1 + r)cos(t) - sqrt(1 - r)sin(t))', t: [0, '2pi'], color: 'gray', label: 'contour holding about $86\\%$ of players' },
          ],
          functions: [
            { expr: 'x', color: 'gray', dashed: true, label: '$z_2 = z_1$ (same score again)' },
            { expr: 'r*x', color: 'blue', label: 'prediction $\\hat{z}_2 = \\rho z_1$' },
          ],
          vlines: [{ x: 'a', color: 'orange' }],
          points: [
            { x: 'a', y: 'a', color: 'gray', label: 'same again' },
            { x: 'a', y: 'r*a', color: 'blue', label: 'expected' },
          ],
          sliders: [
            { name: 'r', min: 0, max: 0.95, step: 0.05, value: 0.6, label: 'correlation $\\rho$ between weeks' },
            { name: 'a', min: -3, max: 3, step: 0.1, value: 2, label: 'week-1 score $z_1$ (SDs from the mean)' },
          ],
          readouts: [
            { label: 'expected week-2 score $\\rho z_1 =$', expr: 'r*a', digits: 2 },
            { label: 'distance lost toward the mean $=$', expr: 'a - r*a', digits: 2 },
          ],
          caption: 'Horizontal axis: week-1 score, vertical: week-2 score, both in standard units. The ellipse outlines where most (bivariate normal) players fall. Among players at $z_1 = a$ (orange line), the average week-2 score is $\\rho a$ (blue), not $a$ (gray). The blue line is **flatter** than the ellipse\'s long axis $z_2 = z_1$. The blue line also passes exactly through the ellipse\'s leftmost and rightmost points. Set $\\rho$ near $0.95$ and the shrinkage almost vanishes; near $0$ the prediction collapses to the mean.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Regression to the mean fools evaluations',
          text: 'Give the worst $10\\%$ of soldiers on a rifle qualification extra coaching, retest them, and their average rises — but it would have risen without the coaching, because part of every extreme score is luck that does not repeat. The same trap catches "nerf the top-performing weapon and its win rate drops" and "players who rage-quit come back calmer". It also runs backwards: the top scorers in week $2$ were, on average, *less* extreme in week $1$. The fix is a control group that is selected the same way but not treated.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Scores on a skill test and its retest both have mean $50$ and standard deviation $10$, with correlation $\\rho = 0.6$. A recruit scores $80$ on the first test. What is the predicted retest score?',
      hint: 'Convert to standard units, multiply by $\\rho$, convert back.',
      label: 'predicted retest $=$',
      answer: '68',
      explanation: 'The first score is $z_1 = (80 - 50)/10 = 3$ standard deviations above the mean. The prediction is $\\hat{z}_2 = \\rho z_1 = 0.6 \\times 3 = 1.8$, i.e. $50 + 1.8 \\times 10 = 68$. The recruit is still predicted to do very well — just not as spectacularly, because some of the first score\'s $30$-point edge was luck. With the formula: $\\hat{y} = 50 + 0.6 \\cdot \\frac{10}{10}(80 - 50) = 68$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Covariance matrices',
      blocks: [
        {
          type: 'p',
          text: 'With more than two variables — CPU time, GPU time, memory, frame time; or the $x, y, z$ errors of a GPS fix — you collect every pairwise covariance into one matrix. Write the variables as a random vector $\\mathbf{X} = (X_1, \\dots, X_n)^T$ with mean vector $\\boldsymbol{\\mu}$.',
        },
        {
          type: 'definition',
          term: 'Covariance matrix',
          text: 'The [[stat-covariance-matrix|covariance matrix]] is the $n \\times n$ matrix $\\Sigma$ with $\\Sigma_{ij} = \\operatorname{Cov}(X_i, X_j)$, or compactly $\\Sigma = E\\big[(\\mathbf{X} - \\boldsymbol{\\mu})(\\mathbf{X} - \\boldsymbol{\\mu})^T\\big]$. The diagonal holds the variances.',
        },
        {
          type: 'math',
          tex: '\\Sigma_{\\text{kills, deaths}} = \\begin{pmatrix} 0.59 & -0.12 \\\\ -0.12 & 0.56 \\end{pmatrix}',
          caption: 'Variances on the diagonal, the covariance off it. $\\Sigma$ is always symmetric because covariance is.',
        },
        {
          type: 'theorem',
          name: 'Variance of a linear combination',
          tex: '\\operatorname{Var}(\\mathbf{a}^T \\mathbf{X}) = \\operatorname{Var}\\Big(\\sum_i a_i X_i\\Big) = \\sum_i \\sum_j a_i a_j\\,\\Sigma_{ij} = \\mathbf{a}^T \\Sigma\\,\\mathbf{a} \\ \\ge\\ 0',
          text: 'This follows from bilinearity. Since it is a variance, it is never negative: $\\Sigma$ is **positive semidefinite**.',
        },
        {
          type: 'p',
          text: 'Example: total "events" $X + Y$ has $\\mathbf{a} = (1, 1)$, so $\\operatorname{Var}(X + Y) = 0.59 + 0.56 + 2(-0.12) = 0.91$. The negative covariance makes the total *less* variable than the parts suggest. The next lesson is built on this formula.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Where linear algebra takes over',
          text: '$\\Sigma$ is a [[symmetric-matrix|symmetric matrix]], so it has perpendicular [[eigenvector|eigenvectors]] and real, nonnegative eigenvalues. The eigenvectors are the axes of the data\'s elliptical cloud (the ellipse in the regression-to-the-mean graph), and the eigenvalues are the variances along them — that is [[la-pca|principal component analysis]]. A linear map $A$ transforms it as $\\operatorname{Cov}(A\\mathbf{X}) = A\\Sigma A^T$, which is how a Kalman filter propagates uncertainty and how you generate correlated random vectors from independent ones.',
        },
        {
          type: 'code',
          title: 'correlation.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>
#include <vector>

std::mt19937_64 rng(42);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// Box-Muller: two independent uniforms -> one standard normal.
double normal01() {
    double u1 = 1.0 - uniform01(), u2 = uniform01();      // u1 in (0, 1], so log is finite
    return std::sqrt(-2.0 * std::log(u1)) * std::cos(2.0 * std::numbers::pi * u2);
}

// Sample covariance and correlation (n - 1 in the denominators; see the estimation unit).
void report(const char* name, const std::vector<double>& x, const std::vector<double>& y) {
    const double n = x.size();
    double mx = 0, my = 0;
    for (std::size_t i = 0; i < x.size(); ++i) { mx += x[i]; my += y[i]; }
    mx /= n; my /= n;
    double sxy = 0, sxx = 0, syy = 0;
    for (std::size_t i = 0; i < x.size(); ++i) {
        sxy += (x[i] - mx) * (y[i] - my);     // products of deviations
        sxx += (x[i] - mx) * (x[i] - mx);
        syy += (y[i] - my) * (y[i] - my);
    }
    std::printf("%-22s cov = %7.3f   r = %6.3f\\n", name, sxy / (n - 1), sxy / std::sqrt(sxx * syy));
}

int main() {
    const int N = 100'000;
    std::vector<double> x(N), y(N), u(N), v(N);
    const double rho = 0.8;
    for (int i = 0; i < N; ++i) {
        x[i] = normal01();
        y[i] = rho * x[i] + std::sqrt(1 - rho * rho) * normal01();   // Corr(X, Y) = 0.8
        u[i] = 2.0 * uniform01() - 1.0;                                // U ~ U(-1, 1)
        v[i] = u[i] * u[i];                                            // V = U^2: fully dependent
    }
    report("Y = 0.8X + 0.6Z", x, y);
    report("V = U^2", u, v);
}`,
          output: `Y = 0.8X + 0.6Z        cov =   0.805   r =  0.801
V = U^2                cov =  -0.001   r = -0.004`,
          annotations: [
            { lines: '11-14', text: 'Box–Muller turns two uniforms into a standard normal. Writing it by hand (instead of `std::normal_distribution`) makes the output identical on every standard library.' },
            { lines: '22-26', text: 'Accumulate the products of deviations — the sample version of $E[(X - \\mu_X)(Y - \\mu_Y)]$. The $n - 1$ cancels in $r$.' },
            { lines: 37, text: 'To build $\\rho = 0.8$ from independent normals $X, Z$: $\\operatorname{Cov}(X, 0.8X + 0.6Z) = 0.8$ and $\\operatorname{Var}(0.8X + 0.6Z) = 0.64 + 0.36 = 1$. This is $A\\Sigma A^T$ with a $2 \\times 2$ matrix $A$ (a Cholesky factor).' },
            { lines: '38-39', text: '$V = U^2$ is a function of $U$, yet the sample correlation is essentially $0$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'An engineer finds $\\rho = 0.6$ between frame time (in ms) and draw calls, then re-runs the analysis with frame time in **seconds**. Tap the first wrong line.',
      lines: [
        'In seconds, frame time is $X_s = X/1000$.',
        '$\\operatorname{Cov}(X_s, Y) = \\frac{1}{1000}\\operatorname{Cov}(X, Y)$.',
        '$\\sigma_{X_s} = \\frac{1}{1000}\\sigma_X$.',
        'So the correlation becomes $\\frac{0.6}{1000} = 0.0006$: the relationship almost disappears.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct, but line 4 forgets that $\\sigma_{X_s}$ shrank by the same factor as the covariance: $\\rho_s = \\frac{\\operatorname{Cov}(X, Y)/1000}{(\\sigma_X/1000)\\,\\sigma_Y} = \\rho = 0.6$. The factors cancel, which is the whole point of correlation: it does not depend on the units. (Covariance itself did drop by a factor of $1000$, which is why covariance alone cannot measure strength.)',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the facts about a covariance matrix $\\Sigma$.',
      template: 'The diagonal entries of $\\Sigma$ are the ___ of the components. $\\Sigma$ is ___ because $\\operatorname{Cov}(X_i, X_j) = \\operatorname{Cov}(X_j, X_i)$, and $\\mathbf{a}^T \\Sigma \\mathbf{a}$ equals ___, which is why it is never negative.',
      blanks: [{ answers: ['variances'] }, { answers: ['symmetric'] }, { answers: ['$\\operatorname{Var}(\\mathbf{a}^T\\mathbf{X})$'] }],
      wordBank: ['variances', 'means', 'symmetric', 'diagonal', '$\\operatorname{Var}(\\mathbf{a}^T\\mathbf{X})$', '$E[\\mathbf{a}^T\\mathbf{X}]$', 'correlations'],
      explanation: '$\\Sigma_{ii} = \\operatorname{Cov}(X_i, X_i) = \\operatorname{Var}(X_i)$, so the diagonal holds variances (not means, and not correlations — those are all $1$ on the diagonal of the *correlation* matrix). Symmetry comes from the symmetry of covariance. Bilinearity gives $\\mathbf{a}^T\\Sigma\\mathbf{a} = \\operatorname{Var}(\\sum_i a_i X_i) \\ge 0$, so $\\Sigma$ is positive semidefinite.',
    },
  ],
  takeaways: [
    '$\\operatorname{Cov}(X, Y) = E[(X - \\mu_X)(Y - \\mu_Y)] = E[XY] - E[X]E[Y]$; its sign says whether $X$ and $Y$ tend to be on the same side of their means.',
    'Covariance is symmetric and bilinear: $\\operatorname{Cov}(aX + b, cY + d) = ac\\,\\operatorname{Cov}(X, Y)$. It has units, so its size alone means little.',
    '$\\rho = \\operatorname{Cov}/(\\sigma_X\\sigma_Y) \\in [-1, 1]$ by Cauchy–Schwarz (a variance is never negative); $|\\rho| = 1$ exactly for straight-line relationships.',
    'Correlation measures **linear** association only. Independent $\\Rightarrow \\rho = 0$, but $\\rho = 0$ allows strong dependence ($Y = X^2$). It never proves causation.',
    'Regression to the mean: in standard units the best prediction is $\\hat{z}_2 = \\rho z_1$, closer to the mean whenever $|\\rho| < 1$. Extreme groups improve or decline on retest without any intervention.',
    'A covariance matrix $\\Sigma$ is symmetric positive semidefinite, and $\\operatorname{Var}(\\mathbf{a}^T\\mathbf{X}) = \\mathbf{a}^T\\Sigma\\mathbf{a}$.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The chapter on linear regression and correlation gives a gentle, data-first treatment of the correlation coefficient and its interpretation.',
    },
    {
      title: 'Wikipedia — Regression toward the mean',
      url: 'https://en.wikipedia.org/wiki/Regression_toward_the_mean',
      source: 'wikipedia',
      note: 'Galton\'s original discovery with heights, plus many real examples of interventions that only appeared to work.',
    },
    {
      title: "Wikipedia — Anscombe's quartet",
      url: 'https://en.wikipedia.org/wiki/Anscombe%27s_quartet',
      source: 'wikipedia',
      note: 'Four data sets with the same means, variances and correlation that look nothing alike — the best argument for always plotting your data.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The class notes on covariance and correlation include the bivariate normal and more practice computing $\\operatorname{Cov}$ from joint tables.',
    },
  ],
};
