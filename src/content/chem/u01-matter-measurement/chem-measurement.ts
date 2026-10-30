import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-measurement',
  title: 'Measurement, Units and Significant Figures',
  summary: 'SI units and metric prefixes, accuracy versus precision, and how significant figures record how well a quantity was measured.',
  minutes: 19,
  objectives: [
    'Name the SI base units used in chemistry and convert between metric prefixes using powers of ten',
    'Distinguish accuracy from precision, and random from systematic error',
    'Count the significant figures in a measured number and explain why they encode its precision',
    'Round correctly, and apply the significant-figure rules for multiplication/division and for addition/subtraction',
    'Connect significant figures to floating-point precision in programming',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A measurement is a number, a unit and an uncertainty',
      blocks: [
        {
          type: 'p',
          text: 'Chemistry is a quantitative science: you weigh, pour, time and heat things, and the answers are numbers. But "$25$" means nothing on its own. Is it $25$ grams? $25$ kilograms? And how sure are you of it? A complete measurement always carries **three** pieces of information: a number, a **unit**, and (through the way the number is written) its **uncertainty**.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'The \\$125 million unit mistake',
          text: 'In 1999 NASA lost the Mars Climate Orbiter. Ground software from one team reported thruster impulse in pound-force seconds; the navigation software from another team assumed newton seconds. Every correction was off by a factor of about $4.45$, and the spacecraft flew too low into the Martian atmosphere. The math was fine. The units were not.',
        },
        {
          type: 'p',
          text: 'Science avoids this by using one shared system, the International System of Units, or [[si-units|SI]]. It has seven **base units**; every other unit (volume, density, energy, pressure) is built from them.',
        },
        {
          type: 'table',
          headers: ['Quantity', 'SI base unit', 'Symbol'],
          rows: [
            ['length', 'meter', 'm'],
            ['mass', 'kilogram', 'kg'],
            ['time', 'second', 's'],
            ['temperature', 'kelvin', 'K'],
            ['amount of substance', 'mole', 'mol'],
            ['electric current', 'ampere', 'A'],
            ['luminous intensity', 'candela', 'cd'],
          ],
          caption: 'Chemistry uses the first five constantly. The mole (Unit 4) is chemistry\'s own unit for counting particles.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why science uses SI',
          text: 'Three reasons. It is **decimal**: every unit is related to the next by a power of ten, so converting is just moving a decimal point (compare 12 inches to a foot, 3 feet to a yard, 1760 yards to a mile). It is **coherent**: derived units come out of the base units with no stray factors, e.g. $1\\ \\text{J} = 1\\ \\text{kg}\\,\\text{m}^2/\\text{s}^2$. And it is **universal**: since 2019 every base unit is defined by a fixed constant of nature, so a kilogram means the same thing in every lab on Earth. NATO forces use metric for the same reason: $5.56$ mm and $7.62$ mm rounds, distances in kilometers ("klicks").',
        },
        {
          type: 'p',
          text: 'Two non-base units appear everywhere in chemistry. **Volume** is length cubed; the SI unit is $\\text{m}^3$, but the convenient lab unit is the **liter** ($1\\ \\text{L} = 1\\ \\text{dm}^3$) and the milliliter ($1\\ \\text{mL} = 1\\ \\text{cm}^3$). **Mass** in the lab is usually measured in grams, even though the base unit is the kilogram.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which is the SI **base** unit of mass?',
      options: [
        { text: 'gram (g)', why: 'The gram is the unit chemists weigh in most often, but it is a derived size: $1\\ \\text{g} = 10^{-3}\\ \\text{kg}$. SI is unusual here: the base unit already carries a prefix.' },
        { text: 'kilogram (kg)', correct: true, why: 'The kilogram is the base unit, defined since 2019 through the Planck constant.' },
        { text: 'pound (lb)', why: 'The pound is a US customary unit, defined in terms of the kilogram ($1\\ \\text{lb} = 0.45359237\\ \\text{kg}$ exactly), not an SI unit.' },
        { text: 'newton (N)', why: 'The newton is the SI unit of **force** (and weight), not mass: $1\\ \\text{N} = 1\\ \\text{kg}\\,\\text{m/s}^2$.' },
      ],
      explanation: 'Mass is measured in kilograms in SI; the gram is $\\frac{1}{1000}$ of the base unit. Keep mass (how much matter) separate from weight (the force of gravity on it, in newtons): an astronaut\'s mass is the same on the Moon, but her weight is about a sixth.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Metric prefixes and scientific notation',
      blocks: [
        {
          type: 'p',
          text: 'Chemistry spans absurd ranges: an atom is about $10^{-10}$ m across, and a mole contains about $6 \\times 10^{23}$ particles. Two tools tame these numbers. A [[chem-metric-prefix]] scales a unit by a power of ten, and [[scientific-notation]] (which you know from algebra) writes any number as $a \\times 10^{n}$ with $1 \\le |a| < 10$.',
        },
        {
          type: 'table',
          headers: ['Prefix', 'Symbol', 'Factor', 'Example'],
          rows: [
            ['giga', 'G', '$10^{9}$', 'a 2 GHz processor'],
            ['mega', 'M', '$10^{6}$', 'a 1 MW generator'],
            ['kilo', 'k', '$10^{3}$', '1 km of road march'],
            ['(none)', '—', '$10^{0} = 1$', 'm, g, L, s'],
            ['deci', 'd', '$10^{-1}$', 'blood glucose in mg/dL'],
            ['centi', 'c', '$10^{-2}$', '1 cm'],
            ['milli', 'm', '$10^{-3}$', '1 mL of medicine'],
            ['micro', '$\\mu$', '$10^{-6}$', 'a 7.5 $\\mu$m red blood cell'],
            ['nano', 'n', '$10^{-9}$', 'visible light, 400 to 700 nm'],
            ['pico', 'p', '$10^{-12}$', 'atom radii, about 30 to 300 pm'],
          ],
          caption: 'Memorize kilo, centi, milli and micro first: they cover most lab work.',
        },
        {
          type: 'p',
          text: 'The rule for reading a prefix is substitution: a prefix **is** its power of ten. $3.5\\ \\text{mg}$ means $3.5 \\times 10^{-3}\\ \\text{g}$, and $250\\ \\text{mL}$ means $250 \\times 10^{-3}\\ \\text{L} = 0.250\\ \\text{L}$.',
        },
        {
          type: 'derivation',
          title: 'How many micrometers are in $2.5$ mm?',
          steps: [
            { tex: '2.5\\ \\text{mm} = 2.5 \\times 10^{-3}\\ \\text{m}', why: 'Replace the prefix "m" (milli) with $10^{-3}$.' },
            { tex: '1\\ \\mu\\text{m} = 10^{-6}\\ \\text{m} \\implies 1\\ \\text{m} = 10^{6}\\ \\mu\\text{m}', why: 'Micro means $10^{-6}$; invert to see how many micrometers make one meter.' },
            { tex: '2.5 \\times 10^{-3} \\times 10^{6}\\ \\mu\\text{m} = 2.5 \\times 10^{3}\\ \\mu\\text{m}', why: 'Replace "m" with $10^{6}\\ \\mu\\text{m}$, then add exponents: $-3 + 6 = 3$.' },
          ],
          result: '$2.5\\ \\text{mm} = 2500\\ \\mu\\text{m}$. The next lesson turns this into a systematic method, dimensional analysis.',
        },
        {
          type: 'derivation',
          title: 'Scientific notation recap',
          steps: [
            { tex: '0.000\\,0472 = 4.72 \\times 10^{-5}', why: 'Move the decimal point right 5 places to get a number between 1 and 10; moving right makes the exponent negative.' },
            { tex: '6\\,380\\,000 = 6.38 \\times 10^{6}', why: 'Move the decimal point left 6 places; the exponent is positive. (Earth\'s radius in meters.)' },
            { tex: '(3.0 \\times 10^{8})(2.0 \\times 10^{-3}) = 6.0 \\times 10^{5}', why: 'Multiply the coefficients ($3.0 \\times 2.0 = 6.0$) and add the exponents ($8 + (-3) = 5$): the exponent laws from algebra.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'You already type scientific notation',
          text: 'In C++, Python and most calculators, `6.022e23` means $6.022 \\times 10^{23}$ and `1e-9` means $10^{-9}$. The "e" is "times ten to the". (Careful in other contexts: in computing, a "kilobyte" is sometimes $1024$ bytes, but an SI kilo is always exactly $1000$.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'The $5.56$ mm NATO rifle round is named for its bullet diameter. Express $5.56$ mm in **micrometers** ($\\mu$m).',
      hint: '$1\\ \\text{mm} = 10^{-3}\\ \\text{m}$ and $1\\ \\text{m} = 10^{6}\\ \\mu\\text{m}$, so $1\\ \\text{mm} = 10^{3}\\ \\mu\\text{m}$.',
      answer: '5560',
      answerTex: '5560\\ \\mu\\text{m} = 5.56 \\times 10^{3}\\ \\mu\\text{m}',
      unit: 'μm',
      explanation: '$5.56\\ \\text{mm} = 5.56 \\times 10^{-3}\\ \\text{m} = 5.56 \\times 10^{-3} \\times 10^{6}\\ \\mu\\text{m} = 5.56 \\times 10^{3}\\ \\mu\\text{m} = 5560\\ \\mu\\text{m}$. Sanity check: a micrometer is a thousand times smaller than a millimeter, so the number should get a thousand times bigger.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Accuracy versus precision',
      blocks: [
        {
          type: 'p',
          text: 'Every measurement has some error, and there are two different ways to be wrong. [[accuracy-precision|Accuracy]] is how close a measurement is to the **true** value. **Precision** is how close repeated measurements are to **each other**. They are independent: you can have either without the other.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 178" xmlns="http://www.w3.org/2000/svg"><circle cx="62.5" cy="62.0" r="52" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="62.5" cy="62.0" r="36" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="62.5" cy="62.0" r="20" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="62.5" cy="62.0" r="6" class="f-gray"/><circle cx="64.5" cy="59.0" r="4.2" class="f-red"/><circle cx="58.5" cy="64.0" r="4.2" class="f-red"/><circle cx="65.5" cy="66.0" r="4.2" class="f-red"/><circle cx="60.5" cy="58.0" r="4.2" class="f-red"/><circle cx="66.5" cy="61.0" r="4.2" class="f-red"/><circle cx="187.5" cy="62.0" r="52" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="187.5" cy="62.0" r="36" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="187.5" cy="62.0" r="20" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="187.5" cy="62.0" r="6" class="f-gray"/><circle cx="213.5" cy="38.0" r="4.2" class="f-red"/><circle cx="217.5" cy="42.0" r="4.2" class="f-red"/><circle cx="211.5" cy="44.0" r="4.2" class="f-red"/><circle cx="216.5" cy="35.0" r="4.2" class="f-red"/><circle cx="220.5" cy="40.0" r="4.2" class="f-red"/><circle cx="312.5" cy="62.0" r="52" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="312.5" cy="62.0" r="36" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="312.5" cy="62.0" r="20" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="312.5" cy="62.0" r="6" class="f-gray"/><circle cx="282.5" cy="74.0" r="4.2" class="f-red"/><circle cx="338.5" cy="82.0" r="4.2" class="f-red"/><circle cx="320.5" cy="30.0" r="4.2" class="f-red"/><circle cx="294.5" cy="36.0" r="4.2" class="f-red"/><circle cx="328.5" cy="92.0" r="4.2" class="f-red"/><circle cx="437.5" cy="62.0" r="52" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="437.5" cy="62.0" r="36" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="437.5" cy="62.0" r="20" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="437.5" cy="62.0" r="6" class="f-gray"/><circle cx="425.5" cy="92.0" r="4.2" class="f-red"/><circle cx="465.5" cy="102.0" r="4.2" class="f-red"/><circle cx="475.5" cy="68.0" r="4.2" class="f-red"/><circle cx="443.5" cy="80.0" r="4.2" class="f-red"/><circle cx="459.5" cy="46.0" r="4.2" class="f-red"/><text x="62.5" y="140" text-anchor="middle" style="font-size:13px;font-weight:600">Accurate</text><text x="62.5" y="158" text-anchor="middle" style="font-size:13px">and precise</text><text x="187.5" y="140" text-anchor="middle" style="font-size:13px;font-weight:600">Precise,</text><text x="187.5" y="158" text-anchor="middle" style="font-size:13px">not accurate</text><text x="312.5" y="140" text-anchor="middle" style="font-size:13px;font-weight:600">Accurate on average,</text><text x="312.5" y="158" text-anchor="middle" style="font-size:13px">not precise</text><text x="437.5" y="140" text-anchor="middle" style="font-size:13px;font-weight:600">Neither</text></svg>',
          alt: 'Four targets with five red shots each. First: all shots tightly grouped at the bullseye. Second: tightly grouped but up and to the right of center. Third: widely scattered all around the center. Fourth: scattered and off to one side.',
          caption: 'The bullseye is the true value; each dot is one measurement. Tight grouping means precise. Centered on the bullseye means accurate.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Zeroing a rifle',
          text: 'A tight group that lands 4 inches high and right is **precise but not accurate**. The shooter is consistent; the sights are off. You fix it by adjusting the sights, once. A loose group centered on the bullseye is **accurate on average but not precise**, and no sight adjustment will tighten it; only better technique (or more shots averaged) helps.',
        },
        {
          type: 'p',
          text: 'Lab measurements behave exactly the same way. **Systematic error** pushes every reading the same direction (a balance that was never zeroed, reading a scale from an angle): it hurts accuracy and is fixed by calibration. **Random error** scatters readings unpredictably (tiny drafts, judging the last digit by eye): it hurts precision and is reduced by repeating and averaging.',
        },
        {
          type: 'derivation',
          title: 'Two students weigh a certified $10.00$ g mass three times each',
          steps: [
            { tex: '\\text{A: } 10.49,\\ 10.51,\\ 10.50\\ \\text{g} \\quad \\bar{m} = \\frac{31.50}{3} = 10.50\\ \\text{g}', why: 'Average the three readings. The spread (largest minus smallest) is only $0.02$ g: very precise.' },
            { tex: '\\text{A is off by } 10.50 - 10.00 = 0.50\\ \\text{g}', why: 'Every reading is about $0.5$ g high: a systematic error. Precise, not accurate. Probably an un-zeroed balance.' },
            { tex: '\\text{B: } 9.80,\\ 10.25,\\ 9.95\\ \\text{g} \\quad \\bar{m} = \\frac{30.00}{3} = 10.00\\ \\text{g}', why: 'B\'s average hits the true value exactly, but the readings spread over $0.45$ g.' },
            { tex: '\\text{B: accurate on average, not precise}', why: 'Random errors cancel out in the mean, but any single reading from B could be off by a quarter of a gram.' },
          ],
          result: 'Averaging rescued B\'s accuracy; nothing but recalibration will rescue A\'s.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why averaging fixes one error and not the other',
          text: 'Random errors are equally likely to be high or low, so in an average they partly cancel. Systematic errors all point the same way, so they survive averaging intact: the average of a thousand readings from a balance that reads $0.5$ g high is still $0.5$ g high.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'A $5.00$ g reference mass is weighed five times on the same balance: $5.25$, $5.26$, $5.25$, $5.24$, $5.25$ g. How would you describe these results?',
      options: [
        { text: 'Accurate and precise', why: 'They are precise (spread of only $0.02$ g), but every reading is about $0.25$ g above the true $5.00$ g, so they are not accurate.' },
        { text: 'Precise but not accurate', correct: true, why: 'The readings agree closely with each other (precise), but all are about $0.25$ g too high (inaccurate). A systematic error: recalibrate the balance.' },
        { text: 'Accurate but not precise', why: 'This has it backwards. The readings are tightly clustered (precise) but consistently off the true value (inaccurate).' },
        { text: 'Neither accurate nor precise', why: 'A spread of $0.02$ g is very consistent, so the data are precise.' },
      ],
      explanation: 'Precision asks "do the readings agree with each other?" (yes, within $0.02$ g). Accuracy asks "do they agree with the true value?" (no, the average $5.25$ g is $0.25$ g high). A consistent offset like this is the signature of systematic error, which averaging cannot remove; zeroing the balance can.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Significant figures: writing down what you actually know',
      blocks: [
        {
          type: 'p',
          text: 'When you read an instrument you record every digit you are **certain** of, plus **one estimated digit**. Together these are the [[significant-figures]] (sig figs) of the measurement. Their number tells the reader how precisely the quantity was measured, without writing a separate "±".',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="26" width="236.0" height="22" rx="3" class="f-blue" opacity="0.85"/><line x1="260.0" y1="20.0" x2="260.0" y2="74.0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/><rect x="16" y="52" width="316" height="44" rx="3" class="f-gray" opacity="0.15"/><rect x="16" y="52" width="316" height="44" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="24.0" y1="52.0" x2="24.0" y2="70.0" stroke="currentColor" stroke-width="1.4"/><text x="24" y="88" text-anchor="middle" style="font-size:13px">0</text><line x1="124.0" y1="52.0" x2="124.0" y2="70.0" stroke="currentColor" stroke-width="1.4"/><text x="124" y="88" text-anchor="middle" style="font-size:13px">1</text><line x1="224.0" y1="52.0" x2="224.0" y2="70.0" stroke="currentColor" stroke-width="1.4"/><text x="224" y="88" text-anchor="middle" style="font-size:13px">2</text><line x1="324.0" y1="52.0" x2="324.0" y2="70.0" stroke="currentColor" stroke-width="1.4"/><text x="324" y="88" text-anchor="middle" style="font-size:13px">3</text><text x="354" y="88" text-anchor="start" style="font-size:13px">cm</text><rect x="24" y="150" width="236.0" height="22" rx="3" class="f-blue" opacity="0.85"/><line x1="260.0" y1="144.0" x2="260.0" y2="198.0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/><rect x="16" y="176" width="316" height="44" rx="3" class="f-gray" opacity="0.15"/><rect x="16" y="176" width="316" height="44" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="24.0" y1="176.0" x2="24.0" y2="194.0" stroke="currentColor" stroke-width="1.4"/><text x="24" y="212" text-anchor="middle" style="font-size:13px">0</text><line x1="34.0" y1="176.0" x2="34.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="44.0" y1="176.0" x2="44.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="54.0" y1="176.0" x2="54.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="64.0" y1="176.0" x2="64.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="74.0" y1="176.0" x2="74.0" y2="188.0" stroke="currentColor" stroke-width="1"/><line x1="84.0" y1="176.0" x2="84.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="94.0" y1="176.0" x2="94.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="104.0" y1="176.0" x2="104.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="114.0" y1="176.0" x2="114.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="124.0" y1="176.0" x2="124.0" y2="194.0" stroke="currentColor" stroke-width="1.4"/><text x="124" y="212" text-anchor="middle" style="font-size:13px">1</text><line x1="134.0" y1="176.0" x2="134.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="144.0" y1="176.0" x2="144.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="154.0" y1="176.0" x2="154.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="164.0" y1="176.0" x2="164.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="174.0" y1="176.0" x2="174.0" y2="188.0" stroke="currentColor" stroke-width="1"/><line x1="184.0" y1="176.0" x2="184.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="194.0" y1="176.0" x2="194.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="204.0" y1="176.0" x2="204.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="214.0" y1="176.0" x2="214.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="224.0" y1="176.0" x2="224.0" y2="194.0" stroke="currentColor" stroke-width="1.4"/><text x="224" y="212" text-anchor="middle" style="font-size:13px">2</text><line x1="234.0" y1="176.0" x2="234.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="244.0" y1="176.0" x2="244.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="254.0" y1="176.0" x2="254.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="264.0" y1="176.0" x2="264.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="274.0" y1="176.0" x2="274.0" y2="188.0" stroke="currentColor" stroke-width="1"/><line x1="284.0" y1="176.0" x2="284.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="294.0" y1="176.0" x2="294.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="304.0" y1="176.0" x2="304.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="314.0" y1="176.0" x2="314.0" y2="183.0" stroke="currentColor" stroke-width="1"/><line x1="324.0" y1="176.0" x2="324.0" y2="194.0" stroke="currentColor" stroke-width="1.4"/><text x="324" y="212" text-anchor="middle" style="font-size:13px">3</text><text x="354" y="212" text-anchor="start" style="font-size:13px">cm</text><text x="24" y="16" text-anchor="start" class="t-gray" style="font-size:13px">Ruler marked only in centimeters</text><text x="24" y="140" text-anchor="start" class="t-gray" style="font-size:13px">Ruler marked in millimeters (0.1 cm)</text><text x="392" y="50" text-anchor="start" style="font-size:13px">Reading:</text><text x="392" y="72" text-anchor="start" style="font-size:18px;font-weight:600">2.4 cm</text><text x="392" y="92" text-anchor="start" class="t-gray" style="font-size:13px">2 sig figs</text><text x="392" y="174" text-anchor="start" style="font-size:13px">Reading:</text><text x="392" y="196" text-anchor="start" style="font-size:18px;font-weight:600">2.36 cm</text><text x="392" y="216" text-anchor="start" class="t-gray" style="font-size:13px">3 sig figs</text></svg>',
          alt: 'Two rulers measuring the same blue bar, which ends between 2 and 3 cm, a bit past the 2.3 cm mark. The top ruler has only centimeter marks; the reading is 2.4 cm with 2 significant figures. The bottom ruler has millimeter marks; the reading is 2.36 cm with 3 significant figures.',
          caption: 'Same object, different instruments. With only centimeter marks you know the "2" for sure and estimate the tenths: $2.4$ cm. With millimeter marks you know "$2.3$" for sure and estimate the hundredths: $2.36$ cm.',
        },
        {
          type: 'p',
          text: 'So $2.4$ cm and $2.40$ cm are **different measurements**, even though they are the same number in algebra. "$2.4$ cm" says the tenths digit was estimated (roughly ±0.1 cm). "$2.40$ cm" claims the hundredths digit was estimated (roughly ±0.01 cm): ten times more precise. A trailing zero is information.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why chemists care so much',
          text: 'A calculation cannot create precision that the measurements did not have. If you measure a block with a ruler and then report its density to eight decimal places because your calculator showed them, you are claiming a precision a million times better than your ruler. Significant figures are the bookkeeping that keeps results honest.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Reading glassware',
          text: 'The same rule applies to a graduated cylinder: read the bottom of the curved liquid surface (the meniscus) at eye level, write every marked digit, and estimate one more. A cylinder marked every $1$ mL is read to the nearest $0.1$ mL.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'A graduated cylinder has a line every $1$ mL. The bottom of the meniscus sits a little more than halfway between the $36$ mL and $37$ mL lines. Which reading is recorded correctly?',
      options: [
        { text: '$36$ mL', why: 'This drops the estimated digit. You can see the level is past halfway, so recording only "36" throws away real information.' },
        { text: '$36.6$ mL', correct: true, why: 'All certain digits ($36$) plus one estimated digit (about $0.6$, a bit more than halfway). Three significant figures.' },
        { text: '$36.60$ mL', why: 'This claims you estimated the hundredths place, which a cylinder marked in whole milliliters cannot support.' },
        { text: '$37$ mL', why: 'Rounding to the nearest line discards the estimate and is less precise than the instrument allows.' },
      ],
      explanation: 'Record every digit the scale marks with certainty, plus exactly one estimated digit. The marks are whole milliliters, so the estimated digit is the tenths: $36.6$ mL. Another observer might read $36.5$ or $36.7$; that disagreement in the last digit is exactly what "estimated" means.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Counting significant figures',
      blocks: [
        {
          type: 'p',
          text: 'Nonzero digits are always significant. Zeros are the tricky part, because a zero can be a measured digit or just a placeholder that locates the decimal point.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Nonzero digits** always count: $3.14$ has 3.',
            '**Captive zeros** (between nonzero digits) always count: $4.507$ has 4.',
            '**Leading zeros** (before the first nonzero digit) never count: $0.00450$ starts counting at the $4$.',
            '**Trailing zeros** count **if the number has a decimal point**: $2.300$ has 4, and $100.$ (with a decimal point) has 3.',
            '**Trailing zeros without a decimal point** are ambiguous: $4500$ could have 2, 3 or 4. Remove the doubt with scientific notation: $4.5 \\times 10^{3}$ (2) or $4.50 \\times 10^{3}$ (3).',
          ],
        },
        {
          type: 'table',
          headers: ['Number', 'Sig figs', 'Reason'],
          rows: [
            ['$0.00450$', '3', 'leading zeros are placeholders; the final zero follows a decimal point'],
            ['$1002$', '4', 'captive zeros count'],
            ['$2.300$', '4', 'trailing zeros after a decimal point were measured'],
            ['$4500$', '2 to 4', 'ambiguous: no decimal point'],
            ['$4.50 \\times 10^{3}$', '3', 'only the coefficient is counted'],
            ['$6.022 \\times 10^{23}$', '4', 'scientific notation makes it obvious'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why leading zeros never count',
          text: 'Change the unit and leading zeros appear or disappear: $0.00450\\ \\text{kg} = 4.50\\ \\text{g} = 4500\\ \\text{mg}$. Changing units cannot change how precisely you weighed something, so the precision must live in the digits $4$, $5$, $0$ that survive every unit change. Leading zeros only mark where the decimal point is.',
        },
        {
          type: 'p',
          text: 'Finally, [[chem-exact-number|exact numbers]] have no uncertainty at all: **counted** numbers (12 eggs, 3 trials) and **defined** relationships ($1\\ \\text{in} = 2.54\\ \\text{cm}$ exactly, $1\\ \\text{L} = 1000\\ \\text{mL}$, the $2$ in "twice"). They have unlimited significant figures and never limit a result.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Type the number of significant figures in each measured value.',
      template: '$0.00720$ g has ___ significant figures, $30.05$ mL has ___, and $6.0 \\times 10^{4}$ m has ___.',
      blanks: [{ answers: ['3'] }, { answers: ['4'] }, { answers: ['2'] }],
      hint: 'Leading zeros never count; captive zeros always do; in scientific notation count only the coefficient.',
      explanation: '$0.00720$: the leading zeros are placeholders, then $7$, $2$ and the trailing $0$ (after a decimal point) count: **3**. $30.05$: both zeros are captive between nonzero digits: **4**. $6.0 \\times 10^{4}$: the coefficient $6.0$ has **2**; the power of ten only locates the decimal point.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Rounding, and the rule for multiplying and dividing',
      blocks: [
        {
          type: 'p',
          text: '**Rounding**: decide how many digits to keep, then look at the first digit you are dropping. If it is $5$ or more, round the last kept digit up; if it is less than $5$, leave it. $8.5507 \\to 8.6$ (2 sig figs) and $2.6041 \\to 2.60$ (3 sig figs).',
        },
        {
          type: 'theorem',
          name: 'Multiplication and division',
          text: 'The result has as many **significant figures** as the measurement with the **fewest** significant figures.',
        },
        {
          type: 'derivation',
          title: 'Area of a rectangle measured as $3.42$ cm by $2.5$ cm',
          steps: [
            { tex: 'A = 3.42\\ \\text{cm} \\times 2.5\\ \\text{cm} = 8.55\\ \\text{cm}^2', why: 'The calculator result. Units multiply too: $\\text{cm} \\times \\text{cm} = \\text{cm}^2$.' },
            { tex: '3.42 \\to 3 \\text{ s.f.}, \\quad 2.5 \\to 2 \\text{ s.f.}', why: 'Count the significant figures in each measurement.' },
            { tex: 'A = 8.6\\ \\text{cm}^2', why: 'Keep the smaller count, 2. The first dropped digit is $5$, so round up: $8.55 \\to 8.6$.' },
          ],
          result: 'Report $8.6\\ \\text{cm}^2$, not $8.55\\ \\text{cm}^2$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the weakest measurement wins',
          text: '"$2.5$ cm" means somewhere around $2.45$ to $2.55$ cm. Multiply the extremes: $3.42 \\times 2.45 = 8.379$ and $3.42 \\times 2.55 = 8.721$. The true area could be anywhere from about $8.4$ to $8.7$, so even the tenths digit is uncertain and the hundredths digit is meaningless. In a product the *relative* uncertainties combine, and the roughest measurement dominates, which is what counting sig figs approximates.',
        },
        {
          type: 'derivation',
          title: 'Density of a sample: $25.0$ g occupying $9.6$ mL',
          steps: [
            { tex: 'd = \\frac{m}{V} = \\frac{25.0\\ \\text{g}}{9.6\\ \\text{mL}}', why: 'Density is mass divided by volume (the next lesson develops it fully).' },
            { tex: '= 2.6041\\ldots\\ \\text{g/mL}', why: 'Keep extra digits for now; do not round in the middle of a calculation.' },
            { tex: '\\approx 2.6\\ \\text{g/mL}', why: '$25.0$ has 3 sig figs and $9.6$ has 2, so the answer gets 2. The first dropped digit is $0$, so round down.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Round once, at the end',
          text: 'In a multi-step calculation carry at least one or two extra digits through the intermediate steps and round only the final answer. Rounding at every step lets small errors accumulate and can change the last digit of your result.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A metal block has a mass of $45.62$ g and a volume of $5.3\\ \\text{cm}^3$. Calculate its density in g/cm³ to the correct number of significant figures.',
      hint: 'Divide mass by volume, then keep as many sig figs as the less precise measurement.',
      answer: '45.62 / 5.3',
      answerTex: '8.6\\ \\text{g/cm}^3',
      tolerance: 0.05,
      unit: 'g/cm³',
      label: '$d =$',
      explanation: '$\\frac{45.62\\ \\text{g}}{5.3\\ \\text{cm}^3} = 8.6075\\ldots\\ \\text{g/cm}^3$. The mass has 4 significant figures but the volume only 2, so the density gets 2: $8.6\\ \\text{g/cm}^3$. The very precise balance is wasted on a rough volume measurement.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Adding and subtracting, and a word about floating point',
      blocks: [
        {
          type: 'theorem',
          name: 'Addition and subtraction',
          text: 'The result has as many **decimal places** as the measurement with the **fewest decimal places**. (Count decimal places here, not significant figures.)',
        },
        {
          type: 'derivation',
          title: 'Total mass: $12.11$ g $+$ $18.0$ g $+$ $1.013$ g',
          steps: [
            { tex: '\\begin{array}{r} 12.11\\phantom{0} \\\\ 18.0\\phantom{00} \\\\ +\\ 1.013 \\\\ \\hline 31.123 \\end{array}', why: 'Line up the decimal points and add. The calculator says $31.123$.' },
            { tex: '18.0 \\text{ is known only to the tenths place}', why: 'The hundredths and thousandths digits of $18.0$ g were never measured; they could be anything.' },
            { tex: '31.123 \\to 31.1\\ \\text{g}', why: 'So the sum is only known to the tenths place. Round to one decimal place.' },
          ],
          result: 'Total mass $= 31.1$ g.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why decimal places instead of sig figs',
          text: 'When you add, **absolute** uncertainties add: an unknown hundredths digit in one term makes the hundredths digit of the sum unknown, no matter how precise the other terms are. That is why the column of the roughest term decides.',
        },
        {
          type: 'p',
          text: 'Subtraction can destroy precision. Two masses known to 4 significant figures, $10.52$ g $-$ $10.11$ g, give $0.41$ g: only **2** significant figures survive. If you then divide, say $\\frac{0.41}{0.205}$, the result gets 2 sig figs: $2.0$, not $2.00$. When rules mix, apply them step by step in order of operations.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Significant figures are floating point for humans',
          text: 'A `float` stores a number as sign × significand × $2^{\\text{exponent}}$: scientific notation in base 2. The significand has a fixed number of bits (24 for `float`, about 7 decimal digits; 53 for `double`, about 16), so a float has a fixed number of **significant digits** whatever its magnitude, exactly like a measurement. Adding a tiny number to a huge one loses the tiny one entirely, and subtracting two nearly equal numbers leaves only a few meaningful digits (programmers call this *catastrophic cancellation*). It is the same effect as $10.52 - 10.11 = 0.41$.',
        },
        {
          type: 'code',
          title: 'precision.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    float big = 16777216.0f;          // 2^24
    float sum = big + 1.0f;           // the 1 does not fit in 24 bits
    std::printf("%.1f\\n", sum);

    double a = 0.1 + 0.2;             // neither is exact in binary
    std::printf("%.17f\\n", a);
}`,
          output: `16777216.0
0.30000000000000004`,
          annotations: [
            { lines: 5, text: 'A `float` holds 24 significant bits. $2^{24} + 1$ needs 25, so the $+1$ is rounded away, like adding $0.001$ g to a mass known only to $0.1$ g.' },
            { lines: 8, text: '$0.1$ and $0.2$ have no exact binary representation, so each is stored slightly off. The error only shows when you print more digits than a `double` actually holds (about 16).' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student finds the density of a liquid. Tap the first line that is wrong.',
      lines: [
        'Mass of liquid: $52.364\\ \\text{g} - 50.21\\ \\text{g} = 2.154\\ \\text{g}$, which is known only to the hundredths place (3 significant figures).',
        'Volume of liquid, read from a graduated cylinder: $1.3\\ \\text{mL}$.',
        '$d = \\dfrac{2.154\\ \\text{g}}{1.3\\ \\text{mL}} = 1.6569\\ldots\\ \\text{g/mL}$',
        'The mass has 3 significant figures, so $d = 1.66\\ \\text{g/mL}$.',
      ],
      errorLines: [4],
      explanation: 'Line 4 uses the wrong measurement to set the precision. In a division the answer gets the **fewest** significant figures among the measurements, and the volume $1.3$ mL has only 2. The correct result is $d = 1.7\\ \\text{g/mL}$. Line 1 is right: in subtraction the answer keeps the fewest decimal places, and $50.21$ stops at hundredths; carrying the extra digit ($2.154$) into line 3 is good practice, since you round only at the end.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Three samples are combined: $4.371$ g, $12.6$ g and $0.0825$ g. What is the total mass, reported to the correct precision?',
      hint: 'For a sum, the answer keeps the fewest **decimal places**.',
      answer: '4.371 + 12.6 + 0.0825',
      answerTex: '17.1\\ \\text{g}',
      tolerance: 0.05,
      unit: 'g',
      explanation: 'The raw sum is $17.0535$ g. The least precise term, $12.6$ g, is known only to the tenths place, so the total is too: $17.1$ g. Note that the answer has 3 significant figures even though $0.0825$ has 3 and $4.371$ has 4: in addition, decimal places matter, not sig-fig counts.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'Converting $12.50$ in to centimeters with $1\\ \\text{in} = 2.54\\ \\text{cm}$ limits the answer to 3 significant figures, because $2.54$ has 3.',
      answer: false,
      explanation: 'The inch is **defined** as exactly $2.54$ cm, so $2.54$ is an exact number with unlimited significant figures. Only the measurement limits the result: $12.50\\ \\text{in} \\times 2.54 = 31.75$ cm, with 4 sig figs just like $12.50$. Counted numbers and defined conversion factors never limit precision.',
    },
  ],
  takeaways: [
    'A measurement needs a number, a unit and an implied uncertainty. SI is decimal, coherent and universal; the kilogram is the base unit of mass.',
    'A metric prefix is a power of ten: k $= 10^{3}$, c $= 10^{-2}$, m $= 10^{-3}$, $\\mu = 10^{-6}$, n $= 10^{-9}$.',
    'Accuracy is closeness to the true value (systematic error); precision is closeness of repeats to each other (random error).',
    'Significant figures are the certain digits plus one estimated digit. Leading zeros never count; trailing zeros count only with a decimal point; exact numbers never limit.',
    'Multiply or divide: fewest significant figures. Add or subtract: fewest decimal places. Round once, at the end.',
    'Floating-point numbers have a fixed count of significant bits, so they lose precision the same way measurements do.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 1: Essential Ideas',
      url: 'https://openstax.org/books/chemistry-2e/pages/1-introduction',
      source: 'openstax',
      note: 'Sections 1.4 and 1.5 cover SI units, uncertainty, significant figures, accuracy and precision with many worked examples.',
    },
    {
      title: 'Wikipedia — Significant figures',
      url: 'https://en.wikipedia.org/wiki/Significant_figures',
      source: 'wikipedia',
      note: 'The counting rules, rounding conventions and how sig figs relate to formal uncertainty.',
    },
    {
      title: 'Wikipedia — Mars Climate Orbiter',
      url: 'https://en.wikipedia.org/wiki/Mars_Climate_Orbiter',
      source: 'wikipedia',
      note: 'The full story of the unit mix-up that destroyed a spacecraft.',
    },
    {
      title: 'Wikipedia — Metric prefix',
      url: 'https://en.wikipedia.org/wiki/Metric_prefix',
      source: 'wikipedia',
      note: 'The complete table of SI prefixes, including the newest ones (ronna- and quetta-) added in 2022.',
    },
  ],
};
