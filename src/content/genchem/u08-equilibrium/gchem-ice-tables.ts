import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-ice-tables',
  title: 'Solving Equilibrium Problems',
  summary: 'The ICE table method from start to finish: find K from data, then find equilibrium concentrations with perfect squares, the 5% approximation, the full quadratic, and Newton\'s method when nothing else works.',
  minutes: 20,
  objectives: [
    'Set up an ICE table (Initial, Change, Equilibrium) using the coefficients of the balanced equation',
    'Calculate $K$ from initial amounts and one measured equilibrium concentration',
    'Solve for equilibrium concentrations using a perfect square, the 5% approximation (with its check) or the quadratic formula',
    'Choose the physically meaningful root and verify an answer by substituting it back into $K$',
    'Solve higher-degree equilibrium equations numerically with bisection or Newton\'s method',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The ICE table',
      blocks: [
        {
          type: 'p',
          text: 'Equilibrium problems come in two flavors: you know the concentrations and want $K$, or you know $K$ and want the concentrations. Both are bookkeeping problems, and the bookkeeping tool is the [[gchem-ice-table|ICE table]]: one column per species, three rows.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Equation and K', text: 'Write the balanced equation and the $K$ expression (leave out pure solids and liquids).' },
            { title: 'I: Initial', text: 'Enter the starting concentrations in mol/L (or partial pressures for $K_p$). Convert moles to molarity first.' },
            { title: 'C: Change', text: 'Let $x$ be the amount that reacts. Each change is $x$ times the coefficient: minus on the side being used up, plus on the side being formed.' },
            { title: 'E: Equilibrium', text: 'Add: E = I + C, column by column.' },
            { title: 'Solve', text: 'Substitute the E row into the $K$ expression and solve for $x$ (or, given data, find $x$ and compute $K$).' },
            { title: 'Check', text: 'Compute every concentration. None may be negative, and plugging them back into $K$ must give the right value.' },
          ],
        },
        {
          type: 'p',
          text: 'The Change row is where the stoichiometry lives. There is only one unknown, because the coefficients tie every species\'s change to the same $x$. The water–gas shift reaction, which makes the hydrogen for ammonia plants from carbon monoxide and steam, is a clean first example.',
        },
        {
          type: 'table',
          headers: ['(M)', '$\\ce{CO(g)}$', '$\\ce{H2O(g)}$', '$\\ce{CO2(g)}$', '$\\ce{H2(g)}$'],
          rows: [
            ['**I**', '0.100', '0.100', '0', '0'],
            ['**C**', '$-x$', '$-x$', '$+x$', '$+x$'],
            ['**E**', '$0.100 - x$', '$0.100 - x$', '$x$', '$x$'],
          ],
          caption: '$\\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)}$, starting with 0.100 M each of $\\ce{CO}$ and steam. All coefficients are 1, so every change is $\\pm x$.',
        },
        {
          type: 'derivation',
          title: 'K from one measured concentration',
          steps: [
            { tex: '[\\ce{H2}]_{\\text{eq}} = 0.0750\\ \\text{M} \\implies x = 0.0750', why: 'The measured hydrogen concentration at equilibrium equals its E entry, $x$.' },
            { tex: '[\\ce{CO}] = [\\ce{H2O}] = 0.100 - 0.0750 = 0.0250\\ \\text{M}, \\quad [\\ce{CO2}] = 0.0750\\ \\text{M}', why: 'Fill in the E row with the known $x$.' },
            { tex: 'K_c = \\frac{[\\ce{CO2}][\\ce{H2}]}{[\\ce{CO}][\\ce{H2O}]} = \\frac{(0.0750)(0.0750)}{(0.0250)(0.0250)} = 9.00', why: 'Substitute the equilibrium concentrations, not the initial ones.' },
          ],
          result: 'One measurement plus the ICE table gave every concentration, and therefore $K_c = 9.00$ at the temperature of the experiment.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why everything is expressed through one x',
          text: 'Atoms are conserved, so the species cannot change independently: every molecule of $\\ce{CO2}$ formed used up exactly one $\\ce{CO}$ and one $\\ce{H2O}$. A reaction has one "degree of freedom", the extent of reaction, and $x$ measures it (per liter). That is why one equation, $K = f(x)$, is enough to pin down the whole equilibrium mixture.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'order',
      prompt: 'Put the steps of an ICE-table calculation in order, for finding the equilibrium concentrations from $K$ and the starting amounts.',
      lines: [
        'Write the balanced equation and the $K$ expression',
        'Fill in the Initial row (convert moles to mol/L first)',
        'Write the Change row as multiples of $x$, using the coefficients',
        'Add I and C to get the Equilibrium row',
        'Substitute the E row into $K$ and solve for $x$',
        'Compute the concentrations and check them (no negatives; plug back into $K$)',
      ],
      distractors: ['Substitute the Initial row into $K$ and solve for $x$'],
      explanation: 'The equation and $K$ come first because the coefficients set both the exponents and the Change row. I + C = E, and only the **equilibrium** row goes into $K$; the distractor uses initial concentrations, which describe a mixture that is not at equilibrium (their mass-action ratio is $Q$, not $K$). The check at the end catches algebra slips and wrong roots.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'When the equation is a perfect square',
      blocks: [
        {
          type: 'p',
          text: 'Most of the time, solving for $x$ is the hard part. Occasionally the algebra is kind. Hydrogen and iodine at 430 °C have $K_c = 54.3$; start with 0.500 M of each.',
        },
        {
          type: 'table',
          headers: ['(M)', '$\\ce{H2(g)}$', '$\\ce{I2(g)}$', '$\\ce{HI(g)}$'],
          rows: [
            ['**I**', '0.500', '0.500', '0'],
            ['**C**', '$-x$', '$-x$', '$+2x$'],
            ['**E**', '$0.500 - x$', '$0.500 - x$', '$2x$'],
          ],
          caption: '$\\ce{H2(g) + I2(g) <=> 2HI(g)}$. Note the $+2x$: two HI form for each $\\ce{H2}$ used.',
        },
        {
          type: 'derivation',
          title: 'Solving with a square root',
          steps: [
            { tex: 'K_c = \\frac{[\\ce{HI}]^2}{[\\ce{H2}][\\ce{I2}]} = \\frac{(2x)^2}{(0.500 - x)^2} = 54.3', why: 'Substitute the E row. Because the two reactants started equal and change equally, the denominator is a perfect square.' },
            { tex: '\\frac{2x}{0.500 - x} = \\sqrt{54.3} = 7.369', why: 'Take the positive square root of both sides. (The negative root would make $x$ greater than 0.500, giving negative concentrations.)' },
            { tex: '2x = 7.369(0.500 - x) = 3.684 - 7.369x', why: 'Multiply out: now it is a linear equation.' },
            { tex: '9.369x = 3.684 \\implies x = 0.3933', why: 'Collect the $x$ terms and divide.' },
            { tex: '[\\ce{H2}] = [\\ce{I2}] = 0.107\\ \\text{M}, \\quad [\\ce{HI}] = 2x = 0.787\\ \\text{M}', why: 'Fill in the E row.' },
            { tex: '\\text{check: } \\frac{(0.7865)^2}{(0.1067)^2} = 54.3\\ \\checkmark', why: 'Plug the unrounded values back into $K$. With the rounded values you get about 54, close enough given the rounding.' },
          ],
          result: 'At equilibrium 79% of the iodine has reacted: with $K$ near 50, both sides are present in significant amounts.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Only a true perfect square',
          text: 'The square-root shortcut works only when the whole expression is a square, here because $[\\ce{H2}]_0 = [\\ce{I2}]_0$. With unequal starting amounts, $(0.500 - x)(0.300 - x)$ is not a square, and taking the root of each side is an algebra error. Use the quadratic formula instead.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'At 430 °C, $\\ce{H2(g) + I2(g) <=> 2HI(g)}$ has $K_c = 54.3$. A flask starts with 0.200 M $\\ce{H2}$ and 0.200 M $\\ce{I2}$. What is $[\\ce{HI}]$ at equilibrium (three significant figures)?',
      hint: '$\\frac{2x}{0.200 - x} = \\sqrt{54.3}$, then $[\\ce{HI}] = 2x$.',
      label: '$[\\ce{HI}] =$',
      unit: 'M',
      answer: '2*0.200*sqrt(54.3)/(2 + sqrt(54.3))',
      answerTex: '0.315\\ \\text{M}',
      tolerance: 0.0006,
      explanation: 'Taking square roots: $\\frac{2x}{0.200 - x} = 7.369$, so $2x = 1.474 - 7.369x$, $9.369x = 1.474$ and $x = 0.1573$. Then $[\\ce{HI}] = 2x = 0.315$ M and $[\\ce{H2}] = [\\ce{I2}] = 0.0427$ M. Check: $\\frac{(0.3146)^2}{(0.0427)^2} = 54.3$. Starting with less material gives proportionally less of everything; the fraction converted, 79%, is the same as before because $\\Delta n = 0$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Small K: the 5% approximation',
      blocks: [
        {
          type: 'p',
          text: 'When $K$ is small, very little reacts, and $x$ is tiny next to the starting concentration. Then $c - x \\approx c$, and dropping $x$ from that term turns a quadratic into a one-line square root. The price is that you must **check** the assumption afterwards. The standard test is the [[gchem-five-percent-rule|5% rule]]: accept the approximation if $x$ is less than 5% of the concentration it was subtracted from.',
        },
        {
          type: 'table',
          headers: ['(M)', '$\\ce{N2O4(g)}$', '$\\ce{NO2(g)}$'],
          rows: [
            ['**I**', '$c$', '0'],
            ['**C**', '$-x$', '$+2x$'],
            ['**E**', '$c - x$', '$2x$'],
          ],
          caption: '$\\ce{N2O4(g) <=> 2NO2(g)}$ at 25 °C, $K_c = 4.64 \\times 10^{-3}$, starting with $c$ mol/L of $\\ce{N2O4}$.',
        },
        {
          type: 'derivation',
          title: 'Starting with 1.00 M $\\ce{N2O4}$',
          steps: [
            { tex: '\\frac{(2x)^2}{1.00 - x} = 4.64 \\times 10^{-3}', why: 'Substitute the E row into $K_c = [\\ce{NO2}]^2/[\\ce{N2O4}]$.' },
            { tex: '\\frac{4x^2}{1.00} \\approx 4.64 \\times 10^{-3}', why: 'Assume $x \\ll 1.00$, so $1.00 - x \\approx 1.00$. This is the approximation; it must be checked.' },
            { tex: 'x^2 = 1.16 \\times 10^{-3} \\implies x = 0.0341', why: 'Divide by 4 and take the positive square root.' },
            { tex: '\\frac{x}{c} = \\frac{0.0341}{1.00} \\times 100\\% = 3.4\\% < 5\\%\\ \\checkmark', why: 'The check: $x$ is small compared with 1.00, so the approximation is acceptable.' },
            { tex: '[\\ce{NO2}] = 2x = 0.068\\ \\text{M}, \\quad [\\ce{N2O4}] = 1.00 - 0.034 = 0.97\\ \\text{M}', why: 'Fill in the E row. The exact quadratic gives $x = 0.0335$ and $[\\ce{NO2}] = 0.067$ M: the approximation is off by under 2%.' },
          ],
        },
        {
          type: 'graph',
          x: [0, 0.6],
          y: [0, 30],
          xStep: 0.1,
          yStep: 5,
          functions: [
            { expr: '100*(-10^k + sqrt(10^(2k) + 16*10^k*x))/(8x)', label: 'exact $x/c$ (%)', color: 'blue' },
            { expr: '50*sqrt(10^k/x)', label: 'approximate $x/c$ (%)', color: 'orange', dashed: true },
          ],
          hlines: [{ y: 5, label: '5%', color: 'red' }],
          sliders: [{ name: 'k', min: -5, max: -1, step: 0.01, value: -2.33, label: '$\\log_{10} K$' }],
          readouts: [{ label: 'approximation passes for $c >$', expr: '100*10^k', digits: 4 }],
          caption: 'Percent of $\\ce{N2O4}$ dissociated against the starting concentration $c$ (M). Where the curves sit below the red line they agree closely and the approximation passes. At small $c$ (or larger $K$) the approximation overshoots more and more. For this reaction the approximate value stays under 5% when $c > 100K$; at 25 °C that is about $c > 0.46$ M.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 5%?',
          text: 'Dropping $x$ changes the denominator $c - x$ by a fraction $x/c$, and since $x$ comes from a square root, the error in $x$ is about half that. Equilibrium constants are typically known to two or three significant figures, a few percent. An approximation whose error is smaller than the uncertainty in $K$ costs nothing; one that is larger does.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Phosgene decomposes slightly at 100 °C: $\\ce{COCl2(g) <=> CO(g) + Cl2(g)}$, $K_c = 2.2 \\times 10^{-10}$. Starting with 0.10 M $\\ce{COCl2}$, find $[\\ce{Cl2}]$ at equilibrium using the 5% approximation (two significant figures; you can type `4.0e-6` style).',
      hint: 'E row: $0.10 - x$, $x$, $x$. With $0.10 - x \\approx 0.10$: $x^2 = (2.2 \\times 10^{-10})(0.10)$.',
      label: '$[\\ce{Cl2}] =$',
      unit: 'M',
      answer: 'sqrt(2.2*10^-10*0.10)',
      answerTex: '4.7 \\times 10^{-6}\\ \\text{M}',
      tolerance: 0.06e-6,
      explanation: '$\\frac{x^2}{0.10 - x} = 2.2 \\times 10^{-10}$. Assuming $x \\ll 0.10$: $x^2 = 2.2 \\times 10^{-11}$, so $x = 4.7 \\times 10^{-6}$ M. Check: $\\frac{4.7 \\times 10^{-6}}{0.10} \\times 100\\% = 0.0047\\%$, far below 5%, so the approximation is excellent. With a $K$ this small the gas is essentially undecomposed.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'When the approximation fails: the full quadratic',
      blocks: [
        {
          type: 'p',
          text: 'Run the same $\\ce{N2O4}$ calculation with a tenfold more dilute start, $c = 0.100$ M. The approximation gives $x = \\sqrt{(4.64 \\times 10^{-3})(0.100)/4} = 0.0108$, which is **10.8%** of 0.100. The check fails, so solve exactly with the [[quadratic-formula|quadratic formula]].',
        },
        {
          type: 'derivation',
          title: 'Starting with 0.100 M $\\ce{N2O4}$, exactly',
          steps: [
            { tex: '\\frac{4x^2}{0.100 - x} = 4.64 \\times 10^{-3}', why: 'The E row in $K$, with no approximation.' },
            { tex: '4x^2 = 4.64 \\times 10^{-4} - 4.64 \\times 10^{-3}\\,x', why: 'Multiply both sides by $0.100 - x$ and distribute.' },
            { tex: '4x^2 + 4.64 \\times 10^{-3}\\,x - 4.64 \\times 10^{-4} = 0', why: 'Standard form $ax^2 + bx + c = 0$ with $a = 4$, $b = 4.64 \\times 10^{-3}$, $c = -4.64 \\times 10^{-4}$.' },
            { tex: 'x = \\frac{-4.64 \\times 10^{-3} \\pm \\sqrt{(4.64 \\times 10^{-3})^2 + 16(4.64 \\times 10^{-4})}}{8}', why: 'Quadratic formula: $b^2 - 4ac = (4.64 \\times 10^{-3})^2 - 4(4)(-4.64 \\times 10^{-4})$.' },
            { tex: '= \\frac{-0.00464 \\pm 0.08629}{8} \\implies x = 0.01021 \\ \\text{or}\\ x = -0.01137', why: 'The discriminant is $7.446 \\times 10^{-3}$ and its square root $0.08629$.' },
            { tex: 'x = 0.01021 \\implies [\\ce{NO2}] = 0.0204\\ \\text{M}, \\ [\\ce{N2O4}] = 0.0898\\ \\text{M}', why: 'Reject the negative root: it would make $[\\ce{NO2}] = 2x$ negative. These are exactly the values in the data table of the first lesson.' },
          ],
          result: 'The approximation (0.0108) overestimated $x$ by about 5.5%, more than the uncertainty in $K$. The physical root is always the one that keeps every concentration between zero and what the stoichiometry allows.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Choosing the root',
          text: 'A quadratic from an ICE table always has two roots, and usually exactly one is physical. Test each: does it make any E entry negative? With $\\ce{A <=> 2B}$ starting from A only, the physical root must satisfy $0 < x < c$. If both roots fail, recheck the Change row: a wrong coefficient is the usual culprit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'At 430 °C ($K_c = 54.3$), a flask starts with 0.500 M $\\ce{H2}$ and 0.300 M $\\ce{I2}$: $\\ce{H2 + I2 <=> 2HI}$. Tap the first line that is wrong.',
      lines: [
        'I: $[\\ce{H2}] = 0.500$, $[\\ce{I2}] = 0.300$, $[\\ce{HI}] = 0$',
        'C: $-x$, $-x$, $+2x$; E: $0.500 - x$, $0.300 - x$, $2x$',
        '$\\dfrac{(2x)^2}{(0.500 - x)(0.300 - x)} = 54.3$',
        'Take square roots: $\\dfrac{2x}{0.500 - x} = \\sqrt{54.3} = 7.369$',
        '$x = 0.393$, so $[\\ce{HI}] = 2x = 0.787$ M',
      ],
      errorLines: [4],
      explanation: 'The denominator $(0.500 - x)(0.300 - x)$ is not a perfect square, so the square-root shortcut does not apply. (The answer also fails the sanity check: $x = 0.393$ would make $[\\ce{I2}] = 0.300 - 0.393$ negative.) Correctly, expand: $50.3x^2 - 43.44x + 8.145 = 0$, with roots $x = 0.275$ and $x = 0.588$. Only $x = 0.275$ keeps $[\\ce{I2}]$ positive, so $[\\ce{HI}] = 0.550$ M, $[\\ce{H2}] = 0.225$ M and $[\\ce{I2}] = 0.025$ M. Check: $\\frac{(0.5504)^2}{(0.2248)(0.0248)} = 54.3$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Worked example: $\\ce{PCl5}$ decomposition',
      blocks: [
        {
          type: 'p',
          text: 'Phosphorus pentachloride, a reagent for making chlorine-containing compounds, partly falls apart when heated. At 250 °C, $\\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$ has $K_c = 0.0420$. Put 0.200 mol of $\\ce{PCl5}$ into a 2.00 L flask and heat it to 250 °C.',
        },
        {
          type: 'table',
          headers: ['(M)', '$\\ce{PCl5(g)}$', '$\\ce{PCl3(g)}$', '$\\ce{Cl2(g)}$'],
          rows: [
            ['**I**', '$\\dfrac{0.200\\ \\text{mol}}{2.00\\ \\text{L}} = 0.100$', '0', '0'],
            ['**C**', '$-x$', '$+x$', '$+x$'],
            ['**E**', '$0.100 - x$', '$x$', '$x$'],
          ],
          caption: 'Moles are converted to molarity before anything goes into the table.',
        },
        {
          type: 'derivation',
          title: 'Solving for x',
          steps: [
            { tex: '\\frac{x \\cdot x}{0.100 - x} = 0.0420', why: '$K_c = \\frac{[\\ce{PCl3}][\\ce{Cl2}]}{[\\ce{PCl5}]}$ with the E row.' },
            { tex: '\\text{try } x \\approx \\sqrt{(0.0420)(0.100)} = 0.0648 \\ \\Rightarrow\\ 65\\%\\ \\text{of } c\\text{: fails}', why: 'The approximation fails badly: $K$ is not small compared with $c$ ($c/K$ is only about 2).' },
            { tex: 'x^2 + 0.0420x - 0.00420 = 0', why: 'Multiply out $x^2 = 0.0420(0.100 - x)$ and rearrange.' },
            { tex: 'x = \\frac{-0.0420 + \\sqrt{(0.0420)^2 + 4(0.00420)}}{2} = \\frac{-0.0420 + 0.1362}{2} = 0.0471', why: 'Quadratic formula with $a = 1$, $b = 0.0420$, $c = -0.00420$; the root with the minus sign is negative and is rejected.' },
            { tex: '[\\ce{PCl3}] = [\\ce{Cl2}] = 0.0471\\ \\text{M}, \\quad [\\ce{PCl5}] = 0.0529\\ \\text{M}', why: 'Fill in the E row.' },
            { tex: '\\text{check: } \\frac{(0.0471)^2}{0.0529} = 0.0419 \\approx 0.0420\\ \\checkmark', why: 'Plug back in; the tiny difference is rounding.' },
          ],
          result: 'Percent decomposed: $\\frac{0.0471}{0.100} \\times 100\\% = 47\\%$. Almost half the $\\ce{PCl5}$ has fallen apart.',
        },
        {
          type: 'deepdive',
          title: 'Starting from a mixture: let Q choose the direction',
          blocks: [
            {
              type: 'p',
              text: 'If the flask starts with some of every species, first compute $Q$. If $Q < K$ the reaction runs forward and the C row is $-x$ for reactants, $+x$ for products, as above. If $Q > K$ it runs in reverse, so write $+x$ for reactants and $-x$ for products. (You can also keep the forward signs and let $x$ come out negative; the algebra is the same.)',
            },
            {
              type: 'p',
              text: 'Example: 0.050 M of each of $\\ce{PCl5}$, $\\ce{PCl3}$ and $\\ce{Cl2}$ at 250 °C gives $Q = \\frac{(0.050)(0.050)}{0.050} = 0.050 > 0.0420$, so some $\\ce{PCl3}$ and $\\ce{Cl2}$ recombine: E row $0.050 + x$, $0.050 - x$, $0.050 - x$.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'At 250 °C, $\\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$ has $K_c = 0.0420$. A 2.00 L flask is loaded with 0.250 mol of $\\ce{PCl5}$ and heated to 250 °C. Find $[\\ce{Cl2}]$ at equilibrium (three significant figures).',
      hint: 'Initial $[\\ce{PCl5}] = 0.125$ M. Check whether the 5% approximation can work before relying on it; you will need $x^2 + 0.0420x - (0.0420)(0.125) = 0$.',
      label: '$[\\ce{Cl2}] =$',
      unit: 'M',
      answer: '(-0.0420 + sqrt(0.0420^2 + 4*0.0420*0.125))/2',
      answerTex: '0.0544\\ \\text{M}',
      tolerance: 0.0001,
      explanation: '$c = 0.250/2.00 = 0.125$ M. The approximation would give $x = \\sqrt{(0.0420)(0.125)} = 0.0725$, which is 58% of $c$, so it fails. Exactly: $x^2 + 0.0420x - 0.00525 = 0$, so $x = \\frac{-0.0420 + \\sqrt{0.001764 + 0.0210}}{2} = \\frac{-0.0420 + 0.1509}{2} = 0.0544$ M. Then $[\\ce{PCl5}] = 0.125 - 0.0544 = 0.0706$ M, and the check gives $\\frac{(0.0544)^2}{0.0706} = 0.0419$. Only 44% decomposes now (versus 47% from 0.100 M): a more concentrated start favors the side with fewer gas moles, as Le Châtelier predicts.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'When algebra runs out: solving K = Q(x) numerically',
      blocks: [
        {
          type: 'p',
          text: 'Return to the ammonia synthesis at 472 °C ($K_c = 0.105$) and start with 1.00 M $\\ce{N2}$ and 3.00 M $\\ce{H2}$. The E row is $1.00 - x$, $3.00 - 3x$ and $2x$, so the equation is',
        },
        {
          type: 'math',
          tex: '\\frac{(2x)^2}{(1.00 - x)(3.00 - 3x)^3} = 0.105',
          caption: 'Clearing the fraction gives a degree-4 polynomial. There is no friendly formula, and $x$ is not small.',
        },
        {
          type: 'p',
          text: 'This is a root-finding problem, $f(x) = 0$, and you already know two tools for it. Write the equation without division, $f(x) = (\\text{numerator}) - K \\cdot (\\text{denominator})$, so that $f$ is a smooth polynomial. Then:',
        },
        {
          type: 'list',
          items: [
            '**Bisection.** On $[0, 1]$, $f(0) = -K(1)(27) < 0$ and $f(1) = 4 > 0$. By the [[intermediate-value-theorem|intermediate value theorem]] a root lies between. Halve the interval, keep the half where the sign changes, and repeat. It cannot fail, and each step gains one binary digit.',
            '**[[newtons-method|Newton\'s method]].** From a guess $x_n$, follow the tangent line down to the axis: $x_{n+1} = x_n - \\dfrac{f(x_n)}{f\'(x_n)}$. Near the root the number of correct digits roughly doubles each step, but a poor start can jump outside the physical range $0 < x < 1$.',
          ],
        },
        {
          type: 'graph',
          x: [0, 0.06],
          y: [-1, 12],
          xStep: 0.01,
          yStep: 2,
          functions: [{ expr: '1000(4x^2 + 0.00464x - 0.000464)', label: '$1000 \\cdot f(x)$, with $f(x) = 4x^2 + Kx - Kc$', color: 'blue' }],
          tangents: [{ expr: '1000(4x^2 + 0.00464x - 0.000464)', at: 'a', color: 'orange' }],
          points: [
            { x: 'a', y: '1000(4a^2 + 0.00464a - 0.000464)', label: 'xₙ', color: 'orange' },
            { x: 'a - (4a^2 + 0.00464a - 0.000464)/(8a + 0.00464)', y: 0, label: 'xₙ₊₁', color: 'red' },
          ],
          sliders: [{ name: 'a', min: 0.005, max: 0.06, step: 0.0001, value: 0.05, label: 'current guess $x_n$' }],
          readouts: [{ label: '$x_{n+1} =$', expr: 'a - (4a^2 + 0.00464a - 0.000464)/(8a + 0.00464)', digits: 5 }],
          caption: 'Newton\'s method on the $\\ce{N2O4}$ problem with $c = 0.100$ M (horizontal axis $x$ in M; $f$ is scaled by 1000 so the tick labels are readable, which does not move the root). The tangent at $x_n$ crosses the axis at $x_{n+1}$. Set the slider to (about) each new $x_{n+1}$ and watch it home in on the root $x = 0.01021$ in a few steps.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'An equilibrium solver in a few lines',
          text: 'Chemical-engineering simulators, combustion codes and the "solve" key on your calculator all do this: write $Q(x) - K$ as a function, bracket the physical root, and iterate. A robust trick is to combine the two methods: keep a bisection bracket for safety and take Newton steps whenever they land inside it. The program below solves the ammonia problem both ways.',
        },
        {
          type: 'code',
          title: 'equilibrium.cpp',
          runnable: true,
          code: `#include <cstdio>

// N2 + 3H2 <=> 2NH3, Kc = 0.105; start 1.00 M N2, 3.00 M H2.
// E row: N2 = 1 - x, H2 = 3 - 3x, NH3 = 2x, with 0 < x < 1.
const double K = 0.105;

double f(double x) {  // numerator - K * denominator
    double n2 = 1 - x, h2 = 3 - 3 * x, nh3 = 2 * x;
    return nh3 * nh3 - K * n2 * h2 * h2 * h2;
}

double fprime(double x) {  // product and chain rules
    double n2 = 1 - x, h2 = 3 - 3 * x;
    return 8 * x - K * (-h2 * h2 * h2 + n2 * 3 * h2 * h2 * (-3));
}

int main() {
    double lo = 0, hi = 1;  // f(lo) < 0 < f(hi)
    for (int i = 0; i < 40; ++i) {
        double mid = (lo + hi) / 2;
        if (f(mid) < 0) lo = mid; else hi = mid;
    }
    std::printf("bisection: x = %.6f\\n", (lo + hi) / 2);

    double x = 0.5;  // Newton's method from a rough guess
    for (int i = 1; i <= 4; ++i) {
        x = x - f(x) / fprime(x);
        std::printf("Newton step %d: x = %.6f\\n", i, x);
    }
    std::printf("[NH3] = %.4f M\\n", 2 * x);
}`,
          output: `bisection: x = 0.352720
Newton step 1: x = 0.348120
Newton step 2: x = 0.352709
Newton step 3: x = 0.352720
Newton step 4: x = 0.352720
[NH3] = 0.7054 M`,
          annotations: [
            { lines: '7-10', text: 'The equilibrium condition $Q(x) = K$ rewritten as $f(x) = 0$ without a fraction, so $f$ is defined and smooth on all of $[0, 1]$.' },
            { lines: '12-15', text: '$f\'(x)$: the derivative of $4x^2$ is $8x$, and the product rule on $(1 - x)(3 - 3x)^3$ gives $-(3 - 3x)^3 + (1 - x) \\cdot 3(3 - 3x)^2 \\cdot (-3)$.' },
            { lines: '18-23', text: 'Bisection: 40 halvings shrink the bracket to $2^{-40} \\approx 10^{-12}$.' },
            { lines: '25-30', text: 'Newton: from $x_0 = 0.5$ the error drops from about $5 \\times 10^{-3}$ to $10^{-5}$ to below $10^{-6}$, roughly squaring each step.' },
          ],
        },
        {
          type: 'p',
          text: 'Both methods agree: $x = 0.3527$, so $[\\ce{NH3}] = 0.705$ M, $[\\ce{N2}] = 0.647$ M and $[\\ce{H2}] = 1.94$ M. The quartic has a second real root, $x \\approx 2.84$, which would make $[\\ce{N2}]$ negative: bracketing the search in $[0, 1]$ is what keeps the solver on the physical one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'For $\\ce{N2O4}$ starting at 0.100 M, the equilibrium condition is $f(x) = 4x^2 + 0.00464x - 0.000464 = 0$. Take one step of Newton\'s method from $x_0 = 0.0500$. What is $x_1$ (three significant figures)?',
      hint: '$f\'(x) = 8x + 0.00464$. Compute $f(0.0500)$ and $f\'(0.0500)$, then $x_1 = x_0 - f(x_0)/f\'(x_0)$.',
      label: '$x_1 =$',
      answer: '0.05 - (4*0.05^2 + 0.00464*0.05 - 0.000464)/(8*0.05 + 0.00464)',
      answerTex: '0.0259',
      tolerance: 0.00006,
      explanation: '$f(0.0500) = 4(0.00250) + 0.000232 - 0.000464 = 0.009768$ and $f\'(0.0500) = 0.400 + 0.00464 = 0.40464$. So $x_1 = 0.0500 - \\frac{0.009768}{0.40464} = 0.0500 - 0.02414 = 0.0259$. Further steps give 0.0148, 0.0109, 0.01023 and 0.01021, the exact root: the error roughly squares each step once you are close.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'For $\\ce{N2O4}$ starting at concentration $c$, the equilibrium condition is $f(x) = 4x^2 + Kx - Kc = 0$ with $K > 0$. Why is bisection on the interval $[0, c]$ guaranteed to find the physical root?',
      options: [
        { text: '$f(0) = -Kc < 0$ and $f(c) = 4c^2 > 0$, and $f$ is continuous, so a root lies in $(0, c)$ and every halving keeps a sign change', correct: true, why: 'This is the intermediate value theorem, and bisection preserves the bracket at each step.' },
        { text: 'Because bisection converges quadratically, like Newton\'s method', why: 'Bisection converges linearly: the error halves each step. Its strength is reliability, not speed.' },
        { text: 'Because every quadratic has exactly one positive root', why: 'Not true in general ($x^2 - 3x + 2$ has two). Here there is exactly one positive root because the product of the roots, $-Kc/4$, is negative, but that is not what makes bisection work.' },
        { text: 'Because $f\'(x)$ is never zero, so the tangent lines always point toward the root', why: 'That reasoning is about Newton\'s method, and even a nonzero derivative does not guarantee Newton stays in range. Bisection uses only the signs of $f$.' },
      ],
      explanation: 'Bisection needs only a continuous function and a bracket where it changes sign. With all $\\ce{N2O4}$ and no $\\ce{NO2}$ ($x = 0$) we have $Q = 0 < K$, so $f < 0$; with all $\\ce{NO2}$ ($x = c$) we have $Q = \\infty > K$, so $f > 0$. The physical root must lie in between, and halving the bracket closes in on it without ever leaving the physical range.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'If the 5% check fails, it is still fine to report the approximate value of $x$, since equilibrium constants are only known to two or three significant figures anyway.',
      answer: false,
      explanation: 'The 5% threshold keeps the approximation\'s error in $x$ (roughly half of $x/c$) within a few percent, comparable to the uncertainty in $K$. When the check fails, the error grows beyond that: for $\\ce{N2O4}$ at 0.100 M the approximate $x = 0.0108$ is 5.5% above the true 0.0102, and for $\\ce{PCl5}$ the approximate 0.0648 is 38% too high. Solve the quadratic (or iterate numerically) instead.',
    },
  ],
  takeaways: [
    'ICE table: Initial (in mol/L), Change (multiples of one $x$ using the coefficients), Equilibrium = I + C; only the E row goes into $K$.',
    'Given one equilibrium concentration, the ICE table yields all of them, and then $K$.',
    'Perfect square (equal starting reactants, as in $\\ce{H2 + I2 <=> 2HI}$): take the square root and solve a linear equation; otherwise use the quadratic formula.',
    'Small $K$: assume $c - x \\approx c$, then check that $x < 5\\%$ of $c$; if the check fails, solve exactly.',
    'Of the two roots, keep the one that makes every concentration non-negative, and always plug back into $K$ to check.',
    'Higher-degree equilibrium equations are root-finding problems: bisection on the physical interval is guaranteed, and Newton\'s method converges fast from a good start.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 13: Fundamental Equilibrium Concepts',
      url: 'https://openstax.org/books/chemistry-2e/pages/13-introduction',
      source: 'openstax',
      note: 'Section 13.4, "Equilibrium Calculations", works through ICE tables, the small-$x$ approximation and quadratic solutions.',
    },
    {
      title: 'Wikipedia — ICE table',
      url: 'https://en.wikipedia.org/wiki/ICE_table',
      source: 'wikipedia',
      note: 'A short summary of the method with an acid-dissociation example, the most common use in the next unit.',
    },
    {
      title: 'Wikipedia — Newton\'s method',
      url: 'https://en.wikipedia.org/wiki/Newton%27s_method',
      source: 'wikipedia',
      note: 'Convergence, failure modes and the safeguarded hybrids that real equilibrium solvers use.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The chemical equilibrium unit has worked videos on ICE tables and the reaction quotient.',
    },
  ],
};
