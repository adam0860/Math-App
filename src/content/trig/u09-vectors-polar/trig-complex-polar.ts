import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-complex-polar',
  title: 'Complex Numbers in Polar Form',
  summary: 'Complex numbers as points and arrows: modulus and argument, multiplication as rotate-and-scale, De Moivre\'s theorem, roots of unity, and a first look at Euler\'s formula.',
  minutes: 20,
  objectives: [
    'Plot complex numbers in the complex plane and find their modulus and argument',
    'Convert between rectangular form $a + bi$ and polar form $r(\\cos\\theta + i\\sin\\theta)$',
    'Multiply and divide in polar form, and explain multiplication as a rotation plus a scaling',
    'Compute powers with De Moivre\'s theorem and find all $n$th roots of a complex number',
    'Read Euler\'s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ as compact notation for polar form',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The complex plane',
      blocks: [
        {
          type: 'p',
          text: 'In algebra you met [[complex-number|complex numbers]] $a + bi$, where $i$ is the [[imaginary-unit]] with $i^2 = -1$. A complex number is built from **two** real numbers, so it is natural to draw it as a point (or an arrow from the origin) in a plane: $a + bi$ sits at $(a, b)$. This is the [[complex-plane]] — the horizontal axis holds the real numbers, the vertical axis the imaginary ones.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          equal: true,
          segments: [
            { from: [0, 0], to: [3, 2], color: 'blue', arrow: true },
            { from: [0, 0], to: [-2, 1], color: 'red', arrow: true },
            { from: [0, 0], to: [-1, -3], color: 'green', arrow: true },
            { from: [0, 0], to: [0, 2.5], color: 'purple', arrow: true },
          ],
          points: [
            { x: 3, y: 2, label: '3 + 2i', color: 'blue' },
            { x: -2, y: 1, label: '−2 + i', color: 'red' },
            { x: -1, y: -3, label: '−1 − 3i', color: 'green' },
            { x: 0, y: 2.5, label: '2.5i', color: 'purple' },
            { x: 2, y: 0, label: '2 (real)', color: 'gray' },
          ],
          caption: 'Real numbers live on the horizontal axis, pure imaginary numbers on the vertical axis. Adding complex numbers adds the arrows tip-to-tail, exactly like vectors.',
        },
        {
          type: 'p',
          text: 'Once $z = a + bi$ is an arrow, we can describe it the polar way — by its length and direction. The length is the [[complex-modulus|modulus]] $|z|$, and the direction angle (from the positive real axis) is an [[complex-argument|argument]] of $z$, written $\\arg z$.',
        },
        {
          type: 'math',
          tex: '|z| = \\sqrt{a^2 + b^2}, \\qquad \\tan(\\arg z) = \\frac{b}{a} \\;\\text{ with } \\arg z \\text{ in the quadrant of } (a, b)',
          caption: 'Exactly the magnitude and direction angle of the vector $\\langle a, b \\rangle$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother drawing complex numbers?',
          text: 'In rectangular form, multiplying complex numbers looks like meaningless algebra: $(1 + 2i)(3 + i) = 1 + 7i$. In the plane, a pattern appears that turns out to be one of the most useful facts in mathematics: **multiplying complex numbers rotates and scales arrows**. That is why complex numbers describe rotations, waves, AC circuits and signal processing — and the whole lesson builds toward seeing it.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find the modulus and the argument (in $[0, 2\\pi)$) of $z = -2 + 2i$.',
      template: '$|z| =$ ___ and $\\arg z =$ ___',
      blanks: [{ answers: ['$2\\sqrt2$'] }, { answers: ['$\\frac{3\\pi}{4}$'] }],
      wordBank: ['$2\\sqrt2$', '$\\frac{3\\pi}{4}$', '$4$', '$-\\frac{\\pi}{4}$', '$\\frac{\\pi}{4}$', '$8$'],
      explanation: '$|z| = \\sqrt{(-2)^2 + 2^2} = \\sqrt8 = 2\\sqrt2$ (not $4$: the legs add in squares, not directly). For the angle, $\\tan\\theta = \\frac{2}{-2} = -1$ gives reference angle $\\frac{\\pi}{4}$; the point $(-2, 2)$ is in quadrant II, so $\\arg z = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. The calculator\'s $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$ points into quadrant IV — the wrong way.',
    },
    {
      kind: 'concept',
      title: 'Polar (trigonometric) form',
      blocks: [
        {
          type: 'p',
          text: 'If $z$ has modulus $r$ and argument $\\theta$, its coordinates are $a = r\\cos\\theta$ and $b = r\\sin\\theta$ — the polar-to-rectangular formulas. Substituting into $a + bi$ gives the [[polar-form-complex|polar form]] of $z$.',
        },
        {
          type: 'definition',
          term: 'Polar form of a complex number',
          text: '$$z = r(\\cos\\theta + i\\sin\\theta), \\qquad r = |z|,\\; \\theta = \\arg z.$$ Many books abbreviate $\\cos\\theta + i\\sin\\theta$ as $\\operatorname{cis}\\theta$, so $z = r\\operatorname{cis}\\theta$. The argument is only defined up to multiples of $2\\pi$; the **principal argument** is the one in $(-\\pi, \\pi]$.',
        },
        {
          type: 'derivation',
          title: 'Write $z = -1 + i\\sqrt3$ in polar form',
          steps: [
            { tex: 'r = \\sqrt{(-1)^2 + (\\sqrt3)^2} = \\sqrt{4} = 2', why: 'Modulus: distance from the origin.' },
            { tex: '\\tan\\theta = \\frac{\\sqrt3}{-1} = -\\sqrt3', why: 'Ratio of imaginary part to real part.' },
            { tex: '\\theta = \\pi - \\tfrac{\\pi}{3} = \\tfrac{2\\pi}{3}', why: 'Reference angle $\\frac{\\pi}{3}$; the point $(-1, \\sqrt3)$ is in quadrant II.' },
            { tex: 'z = 2\\left(\\cos\\tfrac{2\\pi}{3} + i\\sin\\tfrac{2\\pi}{3}\\right)', why: 'Assemble $r(\\cos\\theta + i\\sin\\theta)$. Check: $2\\cos\\frac{2\\pi}{3} = -1$ and $2\\sin\\frac{2\\pi}{3} = \\sqrt3$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Write $z = 4\\operatorname{cis}\\frac{7\\pi}{6}$ in rectangular form',
          steps: [
            { tex: 'z = 4\\cos\\tfrac{7\\pi}{6} + 4i\\sin\\tfrac{7\\pi}{6}', why: 'Distribute $r = 4$ across $\\cos\\theta + i\\sin\\theta$.' },
            { tex: '= 4\\left(-\\tfrac{\\sqrt3}{2}\\right) + 4i\\left(-\\tfrac12\\right)', why: '$\\frac{7\\pi}{6}$ is in quadrant III with reference angle $\\frac{\\pi}{6}$: both cosine and sine are negative.' },
            { tex: '= -2\\sqrt3 - 2i', why: 'Simplify.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Polar form needs $r \\ge 0$ and the **plus** sign: $2(\\cos\\frac{\\pi}{3} - i\\sin\\frac{\\pi}{3})$ is not in polar form yet. Rewrite it using $\\cos(-\\theta) = \\cos\\theta$ and $\\sin(-\\theta) = -\\sin\\theta$ as $2\\operatorname{cis}\\left(-\\frac{\\pi}{3}\\right)$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Write $z = 6\\left(\\cos\\frac{5\\pi}{3} + i\\sin\\frac{5\\pi}{3}\\right)$ in the form $a + bi$. What is the imaginary part $b$? (Exact, or to two decimals.)',
      hint: '$\\frac{5\\pi}{3}$ is in quadrant IV with reference angle $\\frac{\\pi}{3}$.',
      label: '$b =$',
      answer: '-3sqrt(3)',
      answerTex: '-3\\sqrt3 \\approx -5.20',
      explanation: '$b = 6\\sin\\frac{5\\pi}{3} = 6\\left(-\\frac{\\sqrt3}{2}\\right) = -3\\sqrt3 \\approx -5.20$. In quadrant IV sine is negative. The real part is $6\\cos\\frac{5\\pi}{3} = 6 \\cdot \\frac12 = 3$, so $z = 3 - 3\\sqrt3\\, i$.',
    },
    {
      kind: 'concept',
      title: 'Multiplication: multiply the lengths, add the angles',
      blocks: [
        {
          type: 'p',
          text: 'Here is the payoff. Multiply two complex numbers in polar form and the sum formulas from the identities unit appear on their own.',
        },
        {
          type: 'derivation',
          title: 'Product of $z_1 = r_1\\operatorname{cis}\\alpha$ and $z_2 = r_2\\operatorname{cis}\\beta$',
          steps: [
            { tex: 'z_1z_2 = r_1r_2(\\cos\\alpha + i\\sin\\alpha)(\\cos\\beta + i\\sin\\beta)', why: 'Multiplication is commutative, so collect the moduli in front.' },
            { tex: '= r_1r_2\\left[\\cos\\alpha\\cos\\beta + i\\cos\\alpha\\sin\\beta + i\\sin\\alpha\\cos\\beta + i^2\\sin\\alpha\\sin\\beta\\right]', why: 'FOIL the two binomials.' },
            { tex: '= r_1r_2\\left[(\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta) + i(\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta)\\right]', why: 'Use $i^2 = -1$, then group the real and imaginary parts.' },
            { tex: '= r_1r_2\\left[\\cos(\\alpha + \\beta) + i\\sin(\\alpha + \\beta)\\right]', why: 'The cosine and sine sum formulas, exactly.' },
          ],
          result: '$|z_1z_2| = |z_1||z_2|$ and $\\arg(z_1z_2) = \\arg z_1 + \\arg z_2$. Dividing works in reverse: $\\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\operatorname{cis}(\\alpha - \\beta)$ for $z_2 \\ne 0$.',
        },
        {
          type: 'graph',
          x: [-4.5, 4.5],
          y: [-4.5, 4.5],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: ['sqrt(3)', 1], color: 'blue', arrow: true, label: 'z' },
            { from: [0, 0], to: ['s*cos(u*pi/180)', 's*sin(u*pi/180)'], color: 'green', arrow: true, label: 'w' },
            { from: [0, 0], to: ['2s*cos(pi/6 + u*pi/180)', '2s*sin(pi/6 + u*pi/180)'], color: 'red', arrow: true, label: 'zw' },
          ],
          sliders: [
            { name: 's', min: 0.5, max: 2, step: 0.1, value: 1, label: '$|w|$' },
            { name: 'u', min: 0, max: 360, step: 5, value: 90, label: '$\\arg w$ (degrees)' },
          ],
          readouts: [
            { label: '$|zw| = 2|w| =$', expr: '2s', digits: 2 },
            { label: '$\\arg(zw) = 30^\\circ + \\arg w =$', expr: '30 + u', digits: 0 },
          ],
          caption: 'Here $z = 2\\operatorname{cis}30^\\circ = \\sqrt3 + i$ (blue). Multiplying by $w$ rotates $z$ by $\\arg w$ and stretches it by $|w|$. With $|w| = 1$ (on the dashed unit circle) it is a pure rotation; $w = i$ ($90^\\circ$) gives a quarter turn.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rotation in games is complex multiplication',
          text: 'Rotate the point $(x, y)$ by $\\theta$: multiply $x + iy$ by $\\cos\\theta + i\\sin\\theta$ and expand. You get $(x\\cos\\theta - y\\sin\\theta) + i(x\\sin\\theta + y\\cos\\theta)$ — precisely the 2D rotation formula, which in your linear algebra course becomes the rotation matrix $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. 2D physics engines such as Box2D store a body\'s rotation as the pair $(\\cos\\theta, \\sin\\theta)$ — a unit complex number — and 3D engines use quaternions, the four-dimensional cousin of the same idea.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Find $(2\\operatorname{cis}40^\\circ)(3\\operatorname{cis}110^\\circ)$.',
      options: [
        { text: '$5\\operatorname{cis}150^\\circ$', why: 'The moduli multiply, they don\'t add: $2 \\cdot 3 = 6$.' },
        { text: '$6\\operatorname{cis}4400^\\circ$', why: 'The arguments add, they don\'t multiply. Angles behave like exponents: $x^a x^b = x^{a+b}$.' },
        { text: '$6\\operatorname{cis}70^\\circ$', why: 'Subtracting the angles is the rule for **division**.' },
        { text: '$6\\operatorname{cis}150^\\circ$', correct: true, why: 'Correct: multiply moduli ($6$), add arguments ($150^\\circ$).' },
      ],
      explanation: 'Multiply the moduli and add the arguments: $2 \\cdot 3 = 6$ and $40^\\circ + 110^\\circ = 150^\\circ$, so the product is $6\\operatorname{cis}150^\\circ = 6\\left(-\\frac{\\sqrt3}{2}\\right) + 6\\left(\\frac12\\right)i = -3\\sqrt3 + 3i$. Doing this in rectangular form would need four multiplications and the exact values of $\\cos 40^\\circ$ and friends.',
    },
    {
      kind: 'concept',
      title: 'De Moivre\'s theorem: powers made easy',
      blocks: [
        {
          type: 'p',
          text: 'If multiplying by $z$ multiplies the length by $r$ and adds $\\theta$ to the angle, then multiplying by $z$ again $n$ times multiplies the length by $r$ $n$ times and adds $\\theta$ $n$ times. That is [[de-moivres-theorem]].',
        },
        {
          type: 'theorem',
          name: 'De Moivre\'s theorem',
          tex: '\\left[r(\\cos\\theta + i\\sin\\theta)\\right]^n = r^n\\left(\\cos n\\theta + i\\sin n\\theta\\right)',
          text: 'for every positive integer $n$ (and, with $r \\ne 0$, for all integers $n$).',
        },
        {
          type: 'derivation',
          title: 'Compute $(1 + i)^8$',
          steps: [
            { tex: '1 + i = \\sqrt2\\operatorname{cis}\\tfrac{\\pi}{4}', why: '$r = \\sqrt{1 + 1} = \\sqrt2$; the point $(1, 1)$ lies at $45^\\circ$.' },
            { tex: '(1 + i)^8 = (\\sqrt2)^8\\operatorname{cis}\\left(8 \\cdot \\tfrac{\\pi}{4}\\right)', why: 'De Moivre: raise the modulus to the 8th power, multiply the angle by 8.' },
            { tex: '= 16\\operatorname{cis}(2\\pi)', why: '$(\\sqrt2)^8 = 2^4 = 16$ and $8 \\cdot \\frac{\\pi}{4} = 2\\pi$.' },
            { tex: '= 16(1 + 0i) = 16', why: '$\\cos 2\\pi = 1$, $\\sin 2\\pi = 0$.' },
          ],
          result: 'Expanding $(1 + i)^8$ with the binomial theorem would take nine terms. In polar form it is two lines — and you can *see* why it is real: eight $45^\\circ$ turns make a full circle.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Abraham de Moivre, a French mathematician living in London, used the formula in the early 1700s. He was also a pioneer of probability theory — and is said to have supported himself partly by solving problems for gamblers in a London coffee house.',
        },
        {
          type: 'deepdive',
          title: 'Bonus: De Moivre generates trig identities',
          blocks: [
            {
              type: 'p',
              text: 'Take $n = 2$ and expand the left side directly:',
            },
            {
              type: 'derivation',
              steps: [
                { tex: '(\\cos\\theta + i\\sin\\theta)^2 = \\cos^2\\theta + 2i\\sin\\theta\\cos\\theta - \\sin^2\\theta', why: 'Square the binomial, with $i^2 = -1$.' },
                { tex: '\\cos 2\\theta + i\\sin 2\\theta = (\\cos^2\\theta - \\sin^2\\theta) + i(2\\sin\\theta\\cos\\theta)', why: 'De Moivre says the left side equals $\\operatorname{cis}2\\theta$.' },
                { tex: '\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta, \\quad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta', why: 'Two complex numbers are equal exactly when their real parts and imaginary parts match.' },
              ],
              result: 'Both double-angle formulas at once. With $n = 3$ you get triple-angle formulas the same way.',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use De Moivre\'s theorem to compute $(\\sqrt3 + i)^6$.',
      hint: 'First write $\\sqrt3 + i$ in polar form: $r = 2$, $\\theta = \\frac{\\pi}{6}$.',
      answer: '-64',
      explanation: '$\\sqrt3 + i = 2\\operatorname{cis}\\frac{\\pi}{6}$, so $(\\sqrt3 + i)^6 = 2^6\\operatorname{cis}\\left(6 \\cdot \\frac{\\pi}{6}\\right) = 64\\operatorname{cis}\\pi = 64(-1 + 0i) = -64$. Six $30^\\circ$ turns make a half turn, which points along the negative real axis.',
    },
    {
      kind: 'error',
      prompt: 'A student computes $(1 - i)^4$ with De Moivre\'s theorem. Tap the first incorrect line.',
      lines: [
        '$1 - i = \\sqrt2\\operatorname{cis}\\left(-\\dfrac{\\pi}{4}\\right)$',
        '$(1 - i)^4 = 4\\sqrt2\\operatorname{cis}\\left(4 \\cdot \\left(-\\dfrac{\\pi}{4}\\right)\\right)$',
        '$= 4\\sqrt2\\operatorname{cis}(-\\pi)$',
        '$= -4\\sqrt2$',
      ],
      errorLines: [2],
      explanation: 'Line 2 multiplies the modulus by $4$ instead of raising it to the 4th power. De Moivre says the modulus becomes $r^n = (\\sqrt2)^4 = 4$, while the *angle* is multiplied by $n$. Correctly, $(1 - i)^4 = 4\\operatorname{cis}(-\\pi) = -4$. (Check: $(1 - i)^2 = 1 - 2i + i^2 = -2i$, and $(-2i)^2 = 4i^2 = -4$.)',
    },
    {
      kind: 'concept',
      title: 'Roots: running De Moivre backwards',
      blocks: [
        {
          type: 'p',
          text: 'To solve $w^n = z$, look for $w = s\\operatorname{cis}\\varphi$ with $s^n\\operatorname{cis}(n\\varphi) = r\\operatorname{cis}\\theta$. The lengths must match, so $s = \\sqrt[n]{r}$. The angles only need to match **up to full turns**: $n\\varphi = \\theta + 2\\pi k$. Dividing by $n$ gives $n$ genuinely different angles before they start repeating.',
        },
        {
          type: 'theorem',
          name: 'The $n$th roots of $z = r\\operatorname{cis}\\theta$ ($r > 0$)',
          tex: 'w_k = \\sqrt[n]{r}\\,\\operatorname{cis}\\left(\\frac{\\theta + 2\\pi k}{n}\\right), \\qquad k = 0, 1, \\dots, n-1',
          text: 'Every nonzero complex number has exactly $n$ distinct $n$th roots. They all have the same modulus and are spaced $\\frac{2\\pi}{n}$ apart: the vertices of a regular $n$-gon.',
        },
        {
          type: 'derivation',
          title: 'Find the cube roots of $8i$',
          steps: [
            { tex: '8i = 8\\operatorname{cis}\\tfrac{\\pi}{2}', why: '$8i$ sits on the positive imaginary axis, $8$ units out.' },
            { tex: '\\sqrt[3]{8} = 2, \\qquad \\varphi_k = \\frac{\\frac{\\pi}{2} + 2\\pi k}{3} = \\frac{\\pi}{6} + \\frac{2\\pi k}{3}', why: 'Root of the modulus; divide the angle (plus full turns) by $3$.' },
            { tex: 'k = 0:\\; 2\\operatorname{cis}\\tfrac{\\pi}{6} = \\sqrt3 + i', why: '$2\\cos\\frac{\\pi}{6} = \\sqrt3$, $2\\sin\\frac{\\pi}{6} = 1$.' },
            { tex: 'k = 1:\\; 2\\operatorname{cis}\\tfrac{5\\pi}{6} = -\\sqrt3 + i', why: 'Add $\\frac{2\\pi}{3}$: quadrant II.' },
            { tex: 'k = 2:\\; 2\\operatorname{cis}\\tfrac{3\\pi}{2} = -2i', why: 'Add another $\\frac{2\\pi}{3}$. ($k = 3$ would give $\\frac{\\pi}{6} + 2\\pi$, the first root again.)' },
          ],
          result: 'Check one: $(-2i)^3 = -8i^3 = -8(-i) = 8i$ ✓.',
        },
        {
          type: 'p',
          text: 'The special case $z = 1$ gives the [[roots-of-unity|$n$th roots of unity]], $\\operatorname{cis}\\frac{2\\pi k}{n}$: $n$ equally spaced points on the unit circle, always including $1$ itself.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.4, 1.4],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 'cos(2pi*floor(t)/n)', y: 'sin(2pi*floor(t)/n)', t: [0, 'n'], color: 'blue' },
          ],
          points: [
            { x: 1, y: 0, label: '1', color: 'red' },
            { x: 'cos(2pi/n)', y: 'sin(2pi/n)', color: 'red' },
            { x: 'cos(4pi/n)', y: 'sin(4pi/n) + 0*sqrt(n - 3)', color: 'red' },
            { x: 'cos(6pi/n)', y: 'sin(6pi/n) + 0*sqrt(n - 4)', color: 'red' },
            { x: 'cos(8pi/n)', y: 'sin(8pi/n) + 0*sqrt(n - 5)', color: 'red' },
            { x: 'cos(10pi/n)', y: 'sin(10pi/n) + 0*sqrt(n - 6)', color: 'red' },
            { x: 'cos(12pi/n)', y: 'sin(12pi/n) + 0*sqrt(n - 7)', color: 'red' },
            { x: 'cos(14pi/n)', y: 'sin(14pi/n) + 0*sqrt(n - 8)', color: 'red' },
          ],
          sliders: [{ name: 'n', min: 2, max: 8, step: 1, value: 6, label: '$n$' }],
          readouts: [{ label: 'angle between neighbours $\\frac{360^\\circ}{n} =$', expr: '360/n', digits: 2 }],
          caption: 'The solutions of $z^n = 1$ form a regular $n$-gon inscribed in the unit circle, with one vertex at $1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'Roots of unity are the heart of the **Fast Fourier Transform**, the algorithm behind audio equalizers, image compression (JPEG) and fast multiplication of huge numbers. The FFT is fast precisely because powers of $\\operatorname{cis}\\frac{2\\pi}{n}$ just walk around the circle and repeat.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'One of the cube roots of $-8$ lies in quadrant I. Find its imaginary part.',
      hint: '$-8 = 8\\operatorname{cis}\\pi$. The roots have modulus $2$ and angles $\\frac{\\pi + 2\\pi k}{3}$.',
      label: 'imaginary part $=$',
      answer: 'sqrt(3)',
      answerTex: '\\sqrt3 \\approx 1.73',
      explanation: 'With $-8 = 8\\operatorname{cis}\\pi$, the cube roots are $2\\operatorname{cis}\\frac{\\pi}{3}$, $2\\operatorname{cis}\\pi$ and $2\\operatorname{cis}\\frac{5\\pi}{3}$, i.e. $1 + \\sqrt3\\,i$, $-2$ and $1 - \\sqrt3\\,i$. The quadrant-I root is $1 + \\sqrt3\\,i$, with imaginary part $\\sqrt3$. Notice the real root $-2$ is just one of three: the familiar $\\sqrt[3]{-8} = -2$ is not the whole story.',
    },
    {
      kind: 'concept',
      title: 'A preview: Euler\'s formula',
      blocks: [
        {
          type: 'p',
          text: 'Look at the rules you have found: multiplying $\\operatorname{cis}\\alpha \\cdot \\operatorname{cis}\\beta = \\operatorname{cis}(\\alpha + \\beta)$, and $(\\operatorname{cis}\\theta)^n = \\operatorname{cis}(n\\theta)$. These are exactly the laws of exponents, $e^a e^b = e^{a+b}$ and $(e^a)^n = e^{na}$. That is no coincidence.',
        },
        {
          type: 'theorem',
          name: 'Euler\'s formula',
          tex: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta',
          text: 'So every complex number can be written $z = re^{i\\theta}$, and multiplication becomes $r_1e^{i\\alpha} \\cdot r_2e^{i\\beta} = r_1r_2\\,e^{i(\\alpha + \\beta)}$.',
        },
        {
          type: 'p',
          text: 'Proving [[eulers-formula]] needs power series from Calculus II; for now, treat $e^{i\\theta}$ as compact notation for $\\operatorname{cis}\\theta$ that obeys the exponent laws. Setting $\\theta = \\pi$ gives $e^{i\\pi} = -1$, usually written $e^{i\\pi} + 1 = 0$ — five fundamental constants in one equation.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Complex numbers in C++',
          text: 'The standard header `<complex>` gives you `std::complex<double>`, with `std::polar(r, theta)` to build $re^{i\\theta}$, `std::abs` for the modulus and `std::arg` for the argument (computed with atan2). Multiplying by `std::polar(1.0, angle)` rotates a point.',
        },
        {
          type: 'code',
          title: 'rotate.cpp',
          runnable: true,
          code: `#include <complex>
#include <cmath>
#include <cstdio>

int main() {
    using cd = std::complex<double>;
    const double PI = std::acos(-1.0);
    cd p(3.0, 1.0);                        // the point (3, 1) as 3 + i
    cd turn = std::polar(1.0, PI / 2);     // e^(i pi/2) = i: a quarter turn
    cd q = p * turn;                       // rotate p by 90 degrees
    std::printf("rotated: (%.3f, %.3f)\\n", q.real(), q.imag());
    std::printf("|p| = %.3f, |q| = %.3f\\n", std::abs(p), std::abs(q));
    cd z(1.0, 1.0);
    cd z8 = std::polar(std::pow(std::abs(z), 8), 8 * std::arg(z));  // De Moivre
    std::printf("(1+i)^8 has real part %.3f\\n", z8.real());
}`,
          output: `rotated: (-1.000, 3.000)
|p| = 3.162, |q| = 3.162
(1+i)^8 has real part 16.000`,
          annotations: [
            { lines: 9, text: '`std::polar(r, theta)` builds $r(\\cos\\theta + i\\sin\\theta)$.' },
            { lines: 10, text: '$(3 + i) \\cdot i = 3i + i^2 = -1 + 3i$: the point $(3, 1)$ turned $90^\\circ$ counterclockwise.' },
            { lines: 12, text: 'Rotation preserves length: both moduli are $\\sqrt{10} \\approx 3.162$.' },
            { lines: 14, text: 'De Moivre in code: modulus to the 8th power, argument times 8. (The imaginary part is about $10^{-15}$ — floating-point noise instead of an exact $0$.)' },
          ],
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'For any complex numbers $z$ and $w$, $|zw| = |z| + |w|$.',
      answer: false,
      explanation: 'Moduli **multiply**: $|zw| = |z|\\,|w|$, because multiplying by $w$ stretches every length by the factor $|w|$. For example, $|2i \\cdot 3| = |6i| = 6 = 2 \\cdot 3$, not $5$. It is the *arguments* that add.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding all the cube roots of a complex number $z = a + bi$ in order.',
      lines: [
        'Write $z$ in polar form $r\\operatorname{cis}\\theta$',
        'Take the real cube root of the modulus: $\\sqrt[3]{r}$',
        'Form the angles $\\frac{\\theta + 2\\pi k}{3}$ for $k = 0, 1, 2$',
        'Convert each root $\\sqrt[3]{r}\\operatorname{cis}\\frac{\\theta + 2\\pi k}{3}$ back to rectangular form if needed',
      ],
      distractors: ['Take the cube roots of $a$ and $b$ separately'],
      explanation: 'Roots are only easy in polar form, so convert first. The modulus gets an ordinary real cube root, and the angle is divided by $3$ after adding $0$, $1$ or $2$ full turns — which is where the three different roots come from. The distractor fails because $(a + bi)^3 \\ne a^3 + b^3 i$; cube roots don\'t split across a sum.',
    },
  ],
  takeaways: [
    '$a + bi$ is the point $(a, b)$ in the complex plane; $|z| = \\sqrt{a^2 + b^2}$ and $\\arg z$ is its direction angle (check the quadrant).',
    'Polar form: $z = r(\\cos\\theta + i\\sin\\theta) = r\\operatorname{cis}\\theta$, with $r \\ge 0$.',
    'Multiply: multiply moduli, add arguments. Divide: divide moduli, subtract arguments. Multiplying by $\\operatorname{cis}\\theta$ is a rotation by $\\theta$.',
    'De Moivre: $(r\\operatorname{cis}\\theta)^n = r^n\\operatorname{cis}(n\\theta)$.',
    'The $n$th roots of $r\\operatorname{cis}\\theta$ are $\\sqrt[n]{r}\\operatorname{cis}\\frac{\\theta + 2\\pi k}{n}$, $k = 0, \\dots, n-1$: a regular $n$-gon.',
    'Euler\'s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ explains why angles add like exponents.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 10.5 Polar Form of Complex Numbers',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers',
      source: 'openstax',
      note: 'Conversions, products and quotients, De Moivre\'s theorem and roots, with plenty of exercises.',
    },
    {
      title: 'Wikipedia — De Moivre\'s formula',
      url: 'https://en.wikipedia.org/wiki/De_Moivre%27s_formula',
      source: 'wikipedia',
      note: 'The proof by induction, the connection to Euler\'s formula, and how it generates multiple-angle identities.',
    },
    {
      title: 'Wikipedia — Root of unity',
      url: 'https://en.wikipedia.org/wiki/Root_of_unity',
      source: 'wikipedia',
      note: 'The geometry and algebra of the solutions of $z^n = 1$, including their role in the Fast Fourier Transform.',
    },
  ],
};
