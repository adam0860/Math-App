import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-dimensional-analysis',
  title: 'Dimensional Analysis and Density',
  summary: 'Convert any unit to any other by multiplying by fractions equal to 1, use density to move between mass and volume, and convert between Celsius, Kelvin and Fahrenheit.',
  minutes: 19,
  objectives: [
    'Write a conversion factor as a fraction equal to 1 and choose the orientation that cancels the unwanted unit',
    'Chain several conversion factors with the factor-label method, cancelling units at each step',
    'Convert squared and cubed units, including cm³, mL, L and m³',
    'Use density as a conversion factor between mass and volume, and interpret it as the slope of a mass-volume graph',
    'Convert between °C, K and °F, and explain why the Kelvin scale starts at absolute zero',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Conversion factors are fractions equal to 1',
      blocks: [
        {
          type: 'p',
          text: 'Almost every calculation in chemistry is a chain of unit conversions: grams to moles, milliliters to liters, pounds of body mass to a dose in milligrams. One technique handles all of them, and it rests on an idea from algebra you already trust: **multiplying by 1 changes nothing**.',
        },
        {
          type: 'p',
          text: 'The inch is defined as exactly $2.54$ cm. Since $1\\ \\text{in}$ and $2.54\\ \\text{cm}$ are the same length, dividing one by the other gives $1$:',
        },
        {
          type: 'math',
          tex: '\\frac{2.54\\ \\text{cm}}{1\\ \\text{in}} = 1 \\qquad\\text{and}\\qquad \\frac{1\\ \\text{in}}{2.54\\ \\text{cm}} = 1',
          caption: 'Every equality between units gives two [[conversion-factor|conversion factors]], one the reciprocal of the other.',
        },
        {
          type: 'p',
          text: 'The second idea: **units behave like algebraic variables.** They multiply, divide and cancel. Just as $x \\cdot \\frac{y}{x} = y$, we have $\\text{in} \\times \\frac{\\text{cm}}{\\text{in}} = \\text{cm}$. That is the whole of [[dimensional-analysis]].',
        },
        {
          type: 'derivation',
          title: 'Convert $12.0$ in to centimeters',
          steps: [
            { tex: '12.0\\ \\text{in} \\times \\frac{2.54\\ \\text{cm}}{1\\ \\text{in}}', why: 'Multiply by a factor equal to 1. Choose the orientation with **inches on the bottom**, so it cancels the inches you start with.' },
            { tex: '= 12.0\\ \\cancel{\\text{in}} \\times \\frac{2.54\\ \\text{cm}}{1\\ \\cancel{\\text{in}}}', why: 'Inches appear once on top and once on the bottom, so they cancel, exactly like a common factor in a fraction.' },
            { tex: '= 30.48\\ \\text{cm}', why: 'Multiply the numbers: $12.0 \\times 2.54 = 30.48$. Only centimeters remain, which is the unit we wanted.' },
            { tex: '\\approx 30.5\\ \\text{cm}', why: '$2.54$ is exact (a definition), so only the measurement $12.0$ (3 sig figs) limits the answer.' },
          ],
          result: '$12.0\\ \\text{in} = 30.5\\ \\text{cm}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this always works, and why it catches mistakes',
          text: 'Because each factor equals $1$, the quantity never changes, only its units. And because units are carried through the algebra, a wrong setup announces itself. Flip the factor by mistake and you get $12.0\\ \\text{in} \\times \\frac{1\\ \\text{in}}{2.54\\ \\text{cm}} = 4.72\\ \\frac{\\text{in}^2}{\\text{cm}}$: a unit that is not a length at all. If the units come out wrong, the number is wrong.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which conversion factor turns $450$ mg into grams?',
      options: [
        { text: '$\\dfrac{1000\\ \\text{mg}}{1\\ \\text{g}}$', why: 'This puts mg on top: $450\\ \\text{mg} \\times \\frac{1000\\ \\text{mg}}{1\\ \\text{g}} = 450\\,000\\ \\frac{\\text{mg}^2}{\\text{g}}$. Nothing cancels.' },
        { text: '$\\dfrac{1\\ \\text{g}}{1000\\ \\text{mg}}$', correct: true, why: 'mg on the bottom cancels the mg you start with: $450 \\times \\frac{1}{1000} = 0.450$ g.' },
        { text: '$\\dfrac{1\\ \\text{mg}}{1000\\ \\text{g}}$', why: 'This is not equal to $1$: one milligram is not a thousandth of a thousand grams. The prefix says $1\\ \\text{mg} = 10^{-3}\\ \\text{g}$, so the $1000$ belongs with mg.' },
        { text: '$\\dfrac{1000\\ \\text{g}}{1\\ \\text{mg}}$', why: 'Not equal to $1$ either (a milligram is much less than a kilogram), and it would put mg on the bottom with the numbers reversed, giving $450\\,000$ g.' },
      ],
      explanation: 'Start from the true equality $1\\ \\text{g} = 1000\\ \\text{mg}$; it gives the two valid factors $\\frac{1\\ \\text{g}}{1000\\ \\text{mg}}$ and $\\frac{1000\\ \\text{mg}}{1\\ \\text{g}}$. Pick the one with the unit you want to get rid of (mg) on the bottom: $450\\ \\text{mg} \\times \\frac{1\\ \\text{g}}{1000\\ \\text{mg}} = 0.450\\ \\text{g}$. A quick sense check: a gram is bigger than a milligram, so the number should get smaller.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The factor-label method, step by step',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Write what you are given', text: 'Number **and** unit (and substance, when it matters): $176\\ \\text{lb}$, not $176$.' },
            { title: 'Name the target unit', text: 'Know where you are going before you start: mg, m/s, L.' },
            { title: 'Chain factors', text: 'Each factor puts the previous unit on the **bottom** and a unit closer to the target on top. Use equalities you know (definitions, prefixes) or are given (density, dosage).' },
            { title: 'Cancel, then compute', text: 'Cross out units in pairs. When only the target unit is left, multiply the tops and divide by the bottoms.' },
            { title: 'Check', text: 'Round to the right significant figures and ask whether the size makes sense.' },
          ],
        },
        {
          type: 'derivation',
          title: 'A drug is dosed at $15.0$ mg per kg of body mass. What dose does a $176$ lb patient need? ($1\\ \\text{kg} = 2.205\\ \\text{lb}$)',
          steps: [
            { tex: '176\\ \\text{lb}', why: 'Start with the given quantity, units included.' },
            { tex: '176\\ \\cancel{\\text{lb}} \\times \\frac{1\\ \\text{kg}}{2.205\\ \\cancel{\\text{lb}}}', why: 'The dose rule is per **kilogram**, so first turn pounds into kilograms. Pounds go on the bottom to cancel.' },
            { tex: '176\\ \\cancel{\\text{lb}} \\times \\frac{1\\ \\cancel{\\text{kg}}}{2.205\\ \\cancel{\\text{lb}}} \\times \\frac{15.0\\ \\text{mg}}{1\\ \\cancel{\\text{kg}}}', why: '"$15.0$ mg per kg" is itself a conversion factor: $15.0\\ \\text{mg} \\leftrightarrow 1\\ \\text{kg}$ of patient. Kilograms on the bottom cancel the kilograms from the previous factor.' },
            { tex: '= \\frac{176 \\times 15.0}{2.205}\\ \\text{mg} = 1197.3\\ldots\\ \\text{mg}', why: 'Only mg survives. Multiply the numerators, divide by the denominator.' },
            { tex: '\\approx 1.20 \\times 10^{3}\\ \\text{mg} = 1.20\\ \\text{g}', why: 'Three sig figs (from $176$ and $15.0$). Writing "1200 mg" would hide which zeros are significant, so use scientific notation, or switch units: $1.20$ g.' },
          ],
          result: 'The patient needs about $1.20 \\times 10^{3}$ mg ($1.20$ g).',
        },
        {
          type: 'derivation',
          title: 'Convert $65$ miles per hour to meters per second ($1\\ \\text{mi} = 1609.344\\ \\text{m}$ exactly)',
          steps: [
            { tex: '\\frac{65\\ \\text{mi}}{1\\ \\text{h}}', why: 'A rate is a fraction: miles on top, hours on the bottom. Both units must change.' },
            { tex: '\\frac{65\\ \\cancel{\\text{mi}}}{1\\ \\text{h}} \\times \\frac{1609.344\\ \\text{m}}{1\\ \\cancel{\\text{mi}}}', why: 'Miles are on top, so this factor needs miles on the **bottom**.' },
            { tex: '\\frac{65\\ \\cancel{\\text{mi}}}{1\\ \\cancel{\\text{h}}} \\times \\frac{1609.344\\ \\text{m}}{1\\ \\cancel{\\text{mi}}} \\times \\frac{1\\ \\cancel{\\text{h}}}{3600\\ \\text{s}}', why: 'Hours are on the bottom, so this factor needs hours on **top**. $1\\ \\text{h} = 3600\\ \\text{s}$ (exact).' },
            { tex: '= \\frac{65 \\times 1609.344}{3600}\\ \\frac{\\text{m}}{\\text{s}} = 29.06\\ldots\\ \\text{m/s} \\approx 29\\ \\text{m/s}', why: 'Meters over seconds remain. $65$ has 2 sig figs; the factors are exact.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors grade the setup, not just the number. Write every factor as a fraction with units, show the cancellations, and you will earn most of the credit even if you slip on the arithmetic. A bare number with no units usually earns none.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Arrange the pieces to convert $2.50$ days into seconds, so that each factor cancels the unit before it.',
      lines: [
        '$2.50\\ \\text{day}$',
        '$\\times\\ \\dfrac{24\\ \\text{h}}{1\\ \\text{day}}$',
        '$\\times\\ \\dfrac{60\\ \\text{min}}{1\\ \\text{h}}$',
        '$\\times\\ \\dfrac{60\\ \\text{s}}{1\\ \\text{min}}$',
        '$= 2.16 \\times 10^{5}\\ \\text{s}$',
      ],
      distractors: ['$\\times\\ \\dfrac{1\\ \\text{day}}{24\\ \\text{h}}$'],
      explanation: 'Each factor must have the previous unit on the bottom: day cancels day, then h cancels h, then min cancels min, leaving s. That forces the order day → h → min → s. The distractor $\\frac{1\\ \\text{day}}{24\\ \\text{h}}$ has days on top, so it would not cancel anything. The arithmetic is $2.50 \\times 24 \\times 60 \\times 60 = 216\\,000 = 2.16 \\times 10^{5}$ s.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A fuel pump delivers $25.0$ gallons per minute. Convert this rate to **liters per second** ($1\\ \\text{gal} = 3.785\\ \\text{L}$). Give 3 significant figures.',
      hint: '$\\frac{25.0\\ \\text{gal}}{1\\ \\text{min}} \\times \\frac{3.785\\ \\text{L}}{1\\ \\text{gal}} \\times \\frac{1\\ \\text{min}}{60\\ \\text{s}}$',
      answer: '25.0 * 3.785 / 60',
      answerTex: '1.58\\ \\text{L/s}',
      tolerance: 0.005,
      unit: 'L/s',
      explanation: 'Gallons are on top, so use $\\frac{3.785\\ \\text{L}}{1\\ \\text{gal}}$; minutes are on the bottom, so use $\\frac{1\\ \\text{min}}{60\\ \\text{s}}$. Then $\\frac{25.0 \\times 3.785}{60} = 1.577\\ldots \\approx 1.58$ L/s. Sense check: a gallon is almost 4 liters, so $25$ gal/min is about $95$ L/min, and dividing by $60$ gives a bit under $2$ L/s.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Squared and cubed units: cm³, mL, L and m³',
      blocks: [
        {
          type: 'p',
          text: 'Area and volume units are lengths multiplied together: $\\text{cm}^2 = \\text{cm} \\times \\text{cm}$ and $\\text{cm}^3 = \\text{cm} \\times \\text{cm} \\times \\text{cm}$. So when you convert them, the length factor must be applied **once for each power**: squared for area, cubed for volume.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><line x1="56.0" y1="62.0" x2="56.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="78.0" x2="200.0" y2="78.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="72.0" y1="62.0" x2="72.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="94.0" x2="200.0" y2="94.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="88.0" y1="62.0" x2="88.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="110.0" x2="200.0" y2="110.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="104.0" y1="62.0" x2="104.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="126.0" x2="200.0" y2="126.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="120.0" y1="62.0" x2="120.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="142.0" x2="200.0" y2="142.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="136.0" y1="62.0" x2="136.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="158.0" x2="200.0" y2="158.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="152.0" y1="62.0" x2="152.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="174.0" x2="200.0" y2="174.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="168.0" y1="62.0" x2="168.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="190.0" x2="200.0" y2="190.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="184.0" y1="62.0" x2="184.0" y2="222.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="40.0" y1="206.0" x2="200.0" y2="206.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="56.0" y1="62.0" x2="116.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="46.0" y1="57.5" x2="206.0" y2="57.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="72.0" y1="62.0" x2="132.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="52.0" y1="53.0" x2="212.0" y2="53.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="88.0" y1="62.0" x2="148.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="58.0" y1="48.5" x2="218.0" y2="48.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="104.0" y1="62.0" x2="164.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="64.0" y1="44.0" x2="224.0" y2="44.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="120.0" y1="62.0" x2="180.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="70.0" y1="39.5" x2="230.0" y2="39.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="136.0" y1="62.0" x2="196.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="76.0" y1="35.0" x2="236.0" y2="35.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="152.0" y1="62.0" x2="212.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="82.0" y1="30.5" x2="242.0" y2="30.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="168.0" y1="62.0" x2="228.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="88.0" y1="26.0" x2="248.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="184.0" y1="62.0" x2="244.0" y2="17.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="94.0" y1="21.5" x2="254.0" y2="21.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="206.0" y1="57.5" x2="206.0" y2="217.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="78.0" x2="260.0" y2="33.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="212.0" y1="53.0" x2="212.0" y2="213.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="94.0" x2="260.0" y2="49.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="218.0" y1="48.5" x2="218.0" y2="208.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="110.0" x2="260.0" y2="65.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="224.0" y1="44.0" x2="224.0" y2="204.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="126.0" x2="260.0" y2="81.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="230.0" y1="39.5" x2="230.0" y2="199.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="142.0" x2="260.0" y2="97.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="236.0" y1="35.0" x2="236.0" y2="195.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="158.0" x2="260.0" y2="113.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="242.0" y1="30.5" x2="242.0" y2="190.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="174.0" x2="260.0" y2="129.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="248.0" y1="26.0" x2="248.0" y2="186.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="190.0" x2="260.0" y2="145.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="254.0" y1="21.5" x2="254.0" y2="181.5" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><line x1="200.0" y1="206.0" x2="260.0" y2="161.0" stroke="currentColor" stroke-width="0.6" opacity="0.35"/><polygon points="40.0,62.0 200.0,62.0 200.0,222.0 40.0,222.0" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="40.0,62.0 100.0,17.0 260.0,17.0 200.0,62.0" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="200.0,62.0 260.0,17.0 260.0,177.0 200.0,222.0" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="40.0,206.0 56.0,206.0 56.0,222.0 40.0,222.0" class="f-orange" stroke="currentColor" stroke-width="1"/><polygon points="40.0,206.0 46.0,201.5 62.0,201.5 56.0,206.0" class="f-orange" opacity="0.7" stroke="currentColor" stroke-width="1"/><polygon points="56.0,206.0 62.0,201.5 62.0,217.5 56.0,222.0" class="f-orange" opacity="0.5" stroke="currentColor" stroke-width="1"/><text x="120" y="244" text-anchor="middle" style="font-size:14px">10 cm</text><text x="32" y="147" text-anchor="end" style="font-size:14px">10 cm</text><text x="244" y="211.5" text-anchor="start" style="font-size:14px">10 cm</text><line x1="48.0" y1="224.0" x2="70.0" y2="262.0" stroke="currentColor" stroke-width="1"/><text x="74" y="266" text-anchor="start" class="t-orange" style="font-size:14px">1 cm³ = 1 mL</text><text x="300" y="70" text-anchor="start" style="font-size:15px">1 dm = 10 cm</text><text x="300" y="98" text-anchor="start" style="font-size:15px">(1 dm)³ = (10 cm)³</text><text x="300" y="126" text-anchor="start" style="font-size:15px">= 1000 cm³</text><text x="300" y="160" text-anchor="start" style="font-size:16px;font-weight:600">1 L = 1 dm³</text><text x="300" y="184" text-anchor="start" style="font-size:16px;font-weight:600">= 1000 mL</text></svg>',
          alt: 'A large cube 10 cm on each edge, its faces divided into a 10 by 10 grid. One small orange cube, 1 cm on each edge, sits in a corner and is labeled 1 cubic centimeter equals 1 milliliter. Text beside the cube: 1 dm = 10 cm, so 1 cubic decimeter = 1000 cubic centimeters; 1 L = 1 cubic decimeter = 1000 mL.',
          caption: 'A liter is a cube $10$ cm on a side. It holds $10 \\times 10 \\times 10 = 1000$ little cubes of $1\\ \\text{cm}^3$, which is why $1\\ \\text{L} = 1000\\ \\text{mL}$ and $1\\ \\text{mL} = 1\\ \\text{cm}^3$ exactly.',
        },
        {
          type: 'table',
          headers: ['Equality', 'Where it comes from'],
          rows: [
            ['$1\\ \\text{mL} = 1\\ \\text{cm}^3$', 'definition of the liter ($1\\ \\text{L} = 1\\ \\text{dm}^3$), divided by 1000'],
            ['$1\\ \\text{L} = 1000\\ \\text{mL} = 1000\\ \\text{cm}^3$', 'milli $= 10^{-3}$; $(10\\ \\text{cm})^3 = 1000\\ \\text{cm}^3$'],
            ['$1\\ \\text{m}^3 = 10^{6}\\ \\text{cm}^3 = 1000\\ \\text{L}$', '$(100\\ \\text{cm})^3 = 10^{6}\\ \\text{cm}^3$'],
          ],
        },
        {
          type: 'derivation',
          title: 'A water tank holds $2.5\\ \\text{m}^3$. How many liters is that?',
          steps: [
            { tex: '2.5\\ \\text{m}^3 \\times \\left(\\frac{100\\ \\text{cm}}{1\\ \\text{m}}\\right)^{3}', why: 'The factor $\\frac{100\\ \\text{cm}}{1\\ \\text{m}}$ equals $1$, so its cube is also $1$. Cubing it is the only way to cancel $\\text{m}^3$.' },
            { tex: '= 2.5\\ \\cancel{\\text{m}^3} \\times \\frac{10^{6}\\ \\text{cm}^3}{1\\ \\cancel{\\text{m}^3}}', why: 'Cube the numbers **and** the units: $100^3 = 10^{6}$, and $\\text{m}^3$ on the bottom cancels $\\text{m}^3$ on top.' },
            { tex: '= 2.5 \\times 10^{6}\\ \\cancel{\\text{cm}^3} \\times \\frac{1\\ \\text{mL}}{1\\ \\cancel{\\text{cm}^3}} \\times \\frac{1\\ \\text{L}}{1000\\ \\text{mL}}', why: 'Now switch to volume units: $1\\ \\text{cm}^3 = 1\\ \\text{mL}$, then $1000\\ \\text{mL} = 1\\ \\text{L}$.' },
            { tex: '= \\frac{2.5 \\times 10^{6}}{1000}\\ \\text{L} = 2.5 \\times 10^{3}\\ \\text{L}', why: 'The mL cancel too, leaving liters. This confirms $1\\ \\text{m}^3 = 1000\\ \\text{L}$.' },
          ],
          result: '$2.5\\ \\text{m}^3 = 2.5 \\times 10^{3}$ L $= 2500$ L.',
        },
        {
          type: 'derivation',
          title: 'Convert $0.0350\\ \\text{m}^2$ to $\\text{cm}^2$',
          steps: [
            { tex: '0.0350\\ \\cancel{\\text{m}^2} \\times \\left(\\frac{100\\ \\text{cm}}{1\\ \\text{m}}\\right)^{2} = 0.0350 \\times \\frac{10^{4}\\ \\text{cm}^2}{1\\ \\cancel{\\text{m}^2}}', why: 'Area: square the length factor. $100^2 = 10^{4}$.' },
            { tex: '= 3.50 \\times 10^{2}\\ \\text{cm}^2', why: '$0.0350 \\times 10^{4} = 350$; scientific notation keeps the 3 sig figs visible.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The classic mistake',
          text: 'Writing $1\\ \\text{m}^3 = 100\\ \\text{cm}^3$ is off by a factor of ten thousand. A cube $1$ m on a side is $100$ cm long, $100$ cm wide **and** $100$ cm tall: $100 \\times 100 \\times 100 = 10^{6}\\ \\text{cm}^3$. If $\\text{m}^3$ does not cancel completely in your setup, you forgot to cube.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student converts $3.0\\ \\text{m}^3$ to cubic centimeters. Tap the first line that is wrong.',
      lines: [
        'Since $1\\ \\text{m} = 100\\ \\text{cm}$, the length factor is $\\dfrac{100\\ \\text{cm}}{1\\ \\text{m}}$.',
        '$3.0\\ \\text{m}^3 \\times \\dfrac{100\\ \\text{cm}}{1\\ \\text{m}} = 300\\ \\text{cm}^3$',
        'In scientific notation that is $3.0 \\times 10^{2}\\ \\text{cm}^3$.',
      ],
      errorLines: [2],
      explanation: 'Line 2 uses the length factor only once, so just one "m" cancels and the result would really be in $\\text{m}^2\\,\\text{cm}$, not $\\text{cm}^3$. For a volume the factor must be cubed: $3.0\\ \\text{m}^3 \\times \\left(\\frac{100\\ \\text{cm}}{1\\ \\text{m}}\\right)^{3} = 3.0 \\times 10^{6}\\ \\text{cm}^3$. Line 1 is a correct equality; line 3 just repeats the wrong number.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A rectangular fuel tank measures $45.0$ cm by $30.0$ cm by $20.0$ cm inside. What is its volume in **liters**? Give 3 significant figures.',
      hint: 'Multiply to get $\\text{cm}^3$, then use $1\\ \\text{cm}^3 = 1\\ \\text{mL}$ and $1000\\ \\text{mL} = 1\\ \\text{L}$.',
      answer: '45.0 * 30.0 * 20.0 / 1000',
      answerTex: '27.0\\ \\text{L}',
      tolerance: 0.05,
      unit: 'L',
      explanation: '$V = 45.0 \\times 30.0 \\times 20.0 = 27\\,000\\ \\text{cm}^3$. Then $27\\,000\\ \\text{cm}^3 \\times \\frac{1\\ \\text{mL}}{1\\ \\text{cm}^3} \\times \\frac{1\\ \\text{L}}{1000\\ \\text{mL}} = 27.0$ L. Each length has 3 sig figs, so the volume does too.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Density: how much mass is packed into each unit of volume',
      blocks: [
        {
          type: 'definition',
          term: 'Density',
          text: '[[density|Density]] is mass per unit volume: $d = \\dfrac{m}{V}$. For solids and liquids it is usually given in $\\text{g/mL}$ or $\\text{g/cm}^3$ (the same thing, since $1\\ \\text{mL} = 1\\ \\text{cm}^3$); for gases, in $\\text{g/L}$.',
        },
        {
          type: 'table',
          headers: ['Substance', 'Density at about 20 °C'],
          rows: [
            ['air', '$0.0012\\ \\text{g/mL}$ ($1.2\\ \\text{g/L}$)'],
            ['ethanol', '$0.789\\ \\text{g/mL}$'],
            ['jet fuel (JP-8)', 'about $0.80\\ \\text{g/mL}$'],
            ['ice (at 0 °C)', '$0.917\\ \\text{g/mL}$'],
            ['water', '$1.00\\ \\text{g/mL}$'],
            ['aluminum', '$2.70\\ \\text{g/cm}^3$'],
            ['iron', '$7.87\\ \\text{g/cm}^3$'],
            ['lead', '$11.3\\ \\text{g/cm}^3$'],
            ['gold', '$19.3\\ \\text{g/cm}^3$'],
          ],
        },
        {
          type: 'p',
          text: 'Rearranged, the definition says $m = d \\cdot V$: for a given substance, mass is **proportional** to volume. Graph mass against volume and every substance is a straight line through the origin whose [[slope]] is its density.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 40],
          xStep: 1,
          yStep: 5,
          functions: [
            { expr: 'd x', label: 'your substance: $m = dV$', color: 'purple' },
            { expr: '1.00x', label: 'water, $1.00$ g/mL', color: 'blue', dashed: true },
            { expr: '2.70x', label: 'aluminum, $2.70$ g/mL', color: 'gray', dashed: true },
          ],
          sliders: [{ name: 'd', min: 0.5, max: 19.3, step: 0.01, value: 7.87, label: 'density $d$ (g/mL)' }],
          readouts: [
            { label: 'mass of $5.00$ mL (g) $=$', expr: '5d', digits: 3 },
            { label: 'volume of $20.0$ g (mL) $=$', expr: '20/d', digits: 3 },
          ],
          caption: 'Mass (g, vertical) against volume (mL, horizontal). The slope is the density: steeper means more grams packed into each milliliter. Try $0.789$ (ethanol), $11.3$ (lead) and $19.3$ (gold).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why density can identify a substance',
          text: 'Mass and volume both depend on how much you have, but their **ratio** does not: double the sample and both double, leaving $\\frac{m}{V}$ unchanged. A property that does not depend on the amount is called *intensive*, and intensive properties (density, melting point, boiling point) are fingerprints of a substance. A gram of gold and a ton of gold both have density $19.3\\ \\text{g/cm}^3$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Archimedes and the crown',
          text: 'Legend says Archimedes was asked whether a king\'s crown was pure gold or gold alloyed with cheaper silver. Silver is less dense than gold, so an alloy crown of the same mass would have a larger volume and displace more water. Measuring displaced water to find the volume of an irregular object is still how labs do it today.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why ice floats',
          text: 'Anything less dense than water floats on it. Almost every substance is denser as a solid than as a liquid, but water is a rare exception: ice ($0.917\\ \\text{g/mL}$) is less dense than liquid water, so lakes freeze from the top down and fish survive the winter underneath. Unit 3 explains why.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A $38.6$ g metal nugget is dropped into a graduated cylinder, and the water level rises from $20.0$ mL to $22.0$ mL. Using the density table, what is the nugget most likely made of?',
      options: [
        { text: 'Aluminum ($2.70\\ \\text{g/cm}^3$)', why: '$38.6$ g of aluminum would occupy $14.3$ mL. (If you divided by the final reading, $\\frac{38.6}{22.0} = 1.75$, you used the total volume of water plus nugget, not the nugget\'s volume.)' },
        { text: 'Iron ($7.87\\ \\text{g/cm}^3$)', why: '$38.6$ g of iron would displace about $4.9$ mL, more than twice what was observed.' },
        { text: 'Lead ($11.3\\ \\text{g/cm}^3$)', why: 'Lead is dense, but $38.6$ g of it would still occupy about $3.4$ mL.' },
        { text: 'Gold ($19.3\\ \\text{g/cm}^3$)', correct: true, why: 'The nugget\'s volume is $22.0 - 20.0 = 2.0$ mL, so $d = \\frac{38.6\\ \\text{g}}{2.0\\ \\text{mL}} = 19\\ \\text{g/mL}$ (2 sig figs), matching gold.' },
      ],
      explanation: 'The nugget\'s volume is the volume of water it pushes up: $22.0\\ \\text{mL} - 20.0\\ \\text{mL} = 2.0$ mL. Then $d = \\frac{m}{V} = \\frac{38.6}{2.0} = 19.3$, reported as $19$ g/mL to 2 significant figures (the subtraction left only 2). Only gold is close.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Density as a conversion factor',
      blocks: [
        {
          type: 'p',
          text: 'A density is an equality in disguise. "$0.800$ g/mL" means $0.800\\ \\text{g} \\leftrightarrow 1\\ \\text{mL}$ for that substance, which gives two conversion factors: $\\frac{0.800\\ \\text{g}}{1\\ \\text{mL}}$ (volume to mass) and $\\frac{1\\ \\text{mL}}{0.800\\ \\text{g}}$ (mass to volume). It slots into a factor-label chain like any other factor.',
        },
        {
          type: 'derivation',
          title: 'Mass of a full $20.0$ L fuel can of JP-8 (density $0.800$ g/mL), in kg',
          steps: [
            { tex: '20.0\\ \\cancel{\\text{L}} \\times \\frac{1000\\ \\text{mL}}{1\\ \\cancel{\\text{L}}}', why: 'The density is per **mL**, so convert liters to milliliters first.' },
            { tex: '\\times \\frac{0.800\\ \\text{g}}{1\\ \\cancel{\\text{mL}}}', why: 'Density as a volume-to-mass factor: mL on the bottom cancels the mL from the previous step.' },
            { tex: '\\times \\frac{1\\ \\text{kg}}{1000\\ \\cancel{\\text{g}}}', why: 'Grams to kilograms. Grams on the bottom cancel.' },
            { tex: '= \\frac{20.0 \\times 1000 \\times 0.800}{1000}\\ \\text{kg} = 16.0\\ \\text{kg}', why: 'Only kg remains. Three sig figs from $20.0$ and $0.800$.' },
          ],
          result: 'A full $20$ L can holds $16.0$ kg of fuel (plus the can).',
        },
        {
          type: 'derivation',
          title: 'What volume does $250.$ g of ethanol occupy? ($d = 0.789$ g/mL)',
          steps: [
            { tex: '250.\\ \\cancel{\\text{g}} \\times \\frac{1\\ \\text{mL}}{0.789\\ \\cancel{\\text{g}}}', why: 'Going from mass to volume, so use the density **upside down**: grams on the bottom.' },
            { tex: '= \\frac{250.}{0.789}\\ \\text{mL} = 316.8\\ldots\\ \\text{mL} \\approx 317\\ \\text{mL}', why: 'Divide. The decimal point in "$250.$" marks 3 sig figs, matching $0.789$.' },
          ],
          result: 'Sense check: ethanol is less dense than water, so $250$ g of it takes up **more** than $250$ mL.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why aircraft fuel is counted by mass',
          text: 'Aircraft fuel loads are tracked in pounds or kilograms rather than gallons. The energy a fuel releases and the weight the aircraft must lift both depend on **mass**, while the volume of a given mass of fuel changes with temperature (warm fuel expands, so its density drops). Density is the conversion factor between what the pump measures (volume) and what the flight plan needs (mass).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Lead has a density of $11.3\\ \\text{g/cm}^3$. What volume, in $\\text{cm}^3$, does a $500.$ g lead weight occupy? Give 3 significant figures.',
      hint: 'Mass to volume: multiply by $\\frac{1\\ \\text{cm}^3}{11.3\\ \\text{g}}$.',
      answer: '500 / 11.3',
      answerTex: '44.2\\ \\text{cm}^3',
      tolerance: 0.05,
      unit: 'cm³',
      label: '$V =$',
      explanation: '$500.\\ \\cancel{\\text{g}} \\times \\frac{1\\ \\text{cm}^3}{11.3\\ \\cancel{\\text{g}}} = 44.247\\ldots\\ \\text{cm}^3 \\approx 44.2\\ \\text{cm}^3$. If you multiplied instead ($500 \\times 11.3 = 5650$), the units would come out as $\\text{g}^2/\\text{cm}^3$, which is the dimensional-analysis alarm bell.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Temperature scales: Celsius, Kelvin and Fahrenheit',
      blocks: [
        {
          type: 'p',
          text: 'Temperature conversions are the one place in this lesson where multiplying by a factor is not enough, because the scales do not share a zero. **Celsius** puts $0$ at water\'s freezing point and $100$ at its boiling point (at sea-level pressure). **Fahrenheit** puts those same points at $32$ and $212$. The **Kelvin** scale, the SI unit, uses degrees the same size as Celsius but starts at [[chem-absolute-zero]].',
        },
        {
          type: 'theorem',
          name: 'Temperature conversions',
          tex: 'T_{\\text{K}} = T_{\\text{C}} + 273.15 \\qquad\\qquad T_{\\text{F}} = \\tfrac{9}{5}\\,T_{\\text{C}} + 32',
          text: 'Here $T_{\\text{C}}$, $T_{\\text{F}}$ and $T_{\\text{K}}$ are the same temperature read on each scale. Kelvin is written without a degree sign: $300$ K, read "300 kelvins".',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Kelvin starts at absolute zero',
          text: 'Temperature measures the average kinetic energy of the particles, and kinetic energy cannot be negative. Cool a substance and its particles slow down, until at $-273.15$ °C they reach the minimum motion physics allows: absolute zero. Nothing can be colder, so it is the natural zero of the [[kelvin]] scale, and kelvin temperatures are never negative. More importantly, a kelvin temperature is **proportional** to the average kinetic energy, so ratios mean something: gas at $600$ K has twice the average kinetic energy of gas at $300$ K. That is why the gas laws in Unit 5 only work in kelvins.',
        },
        {
          type: 'graph',
          x: [-300, 150],
          y: [-500, 450],
          xStep: 50,
          yStep: 100,
          functions: [
            { expr: 'x + 273.15', label: 'kelvins: $T_{\\text{K}} = T_{\\text{C}} + 273.15$', color: 'blue' },
            { expr: '1.8x + 32', label: 'Fahrenheit: $T_{\\text{F}} = 1.8\\,T_{\\text{C}} + 32$', color: 'red' },
          ],
          points: [
            { x: -273.15, y: 0, color: 'blue' },
            { x: -40, y: -40, color: 'red' },
            { x: 'c', y: 'c + 273.15', color: 'blue' },
            { x: 'c', y: '1.8c + 32', color: 'red' },
          ],
          vlines: [{ x: 'c', color: 'gray' }],
          sliders: [{ name: 'c', min: -273, max: 150, step: 1, value: 25, label: 'Celsius temperature $c$ (°C)' }],
          readouts: [
            { label: 'kelvins $=$', expr: 'c + 273.15', digits: 5 },
            { label: '°F $=$', expr: '1.8c + 32', digits: 4 },
          ],
          caption: 'Horizontal: °C. Vertical: the same temperature in K (blue) or °F (red). The fixed blue dot is absolute zero ($-273.15$ °C $= 0$ K); the fixed red dot is $-40$ °C $= -40$ °F. Both conversions are straight lines. Kelvin has slope $1$ (same size degree, shifted zero); Fahrenheit has slope $\\frac{9}{5}$ because $180$ °F span the same interval as $100$ °C.',
        },
        {
          type: 'derivation',
          title: 'Normal body temperature, $98.6$ °F, in °C and K',
          steps: [
            { tex: 'T_{\\text{F}} = \\tfrac{9}{5}\\,T_{\\text{C}} + 32 \\implies T_{\\text{C}} = \\tfrac{5}{9}\\left(T_{\\text{F}} - 32\\right)', why: 'Solve the linear equation for $T_{\\text{C}}$: subtract $32$, then multiply by $\\frac{5}{9}$.' },
            { tex: 'T_{\\text{C}} = \\tfrac{5}{9}(98.6 - 32) = \\tfrac{5}{9}(66.6) = 37.0\\ ^{\\circ}\\text{C}', why: 'Subtract first (order of operations), then scale. The $\\frac{5}{9}$ and $32$ are exact.' },
            { tex: 'T_{\\text{K}} = 37.0 + 273.15 = 310.15 \\approx 310.2\\ \\text{K}', why: 'Add $273.15$. This is an addition, so keep the fewest decimal places: $37.0$ has one.' },
          ],
          result: '$98.6$ °F $= 37.0$ °C $= 310.2$ K.',
        },
        {
          type: 'derivation',
          title: 'Where do the Celsius and Fahrenheit scales agree?',
          steps: [
            { tex: 'T = \\tfrac{9}{5}T + 32', why: 'We want a temperature $T$ whose Fahrenheit reading equals its Celsius reading.' },
            { tex: '-\\tfrac{4}{5}T = 32', why: 'Subtract $\\frac{9}{5}T$ from both sides: $1 - \\frac{9}{5} = -\\frac{4}{5}$.' },
            { tex: 'T = -40', why: 'Multiply both sides by $-\\frac{5}{4}$.' },
          ],
          result: '$-40$ °C $= -40$ °F, the red point marked on the graph above.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'The thermometer at a desert base reads $95$ °F. What is this temperature in **kelvins**, to the nearest kelvin?',
      hint: 'First $T_{\\text{C}} = \\frac{5}{9}(T_{\\text{F}} - 32)$, then add $273.15$.',
      answer: '(95 - 32) * 5/9 + 273.15',
      answerTex: '308\\ \\text{K}',
      tolerance: 0.5,
      unit: 'K',
      explanation: '$T_{\\text{C}} = \\frac{5}{9}(95 - 32) = \\frac{5}{9}(63) = 35$ °C. Then $T_{\\text{K}} = 35 + 273.15 = 308.15$, which rounds to $308$ K (the reading $95$ °F is only known to the ones place). A common slip is adding $273$ to the Fahrenheit number ($368$ K); kelvins are tied to Celsius, so convert to °C first.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the description of the Kelvin scale.',
      template: 'The Kelvin scale starts at ___, the lowest possible temperature. A change of $1$ K is the same size as a change of $1$ ___, so to convert you simply add ___.',
      blanks: [{ answers: ['absolute zero'] }, { answers: ['°C'] }, { answers: ['$273.15$'] }],
      wordBank: ['absolute zero', '°C', '°F', '$273.15$', '$32$', 'the freezing point of water'],
      explanation: 'Kelvin and Celsius degrees are the same size; only the zero point differs. Kelvin\'s zero is absolute zero ($-273.15$ °C), so $T_{\\text{K}} = T_{\\text{C}} + 273.15$. The freezing point of water is $0$ °C, which is $273.15$ K, not $0$ K. Fahrenheit degrees are smaller ($1$ °C of change $= 1.8$ °F of change).',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'If a gas is warmed from $10$ °C to $20$ °C, the average kinetic energy of its particles doubles.',
      answer: false,
      explanation: 'Average kinetic energy is proportional to the **kelvin** temperature, not the Celsius number. The gas goes from $283.15$ K to $293.15$ K, an increase of only about $3.5\\%$ ($\\frac{293.15}{283.15} \\approx 1.035$). To double the kinetic energy you would have to heat it to about $566$ K, or $293$ °C. Ratios of temperatures only make sense in kelvins.',
    },
  ],
  takeaways: [
    'A conversion factor is a fraction equal to $1$ built from an equality; multiplying by it changes the units but not the quantity.',
    'In the factor-label method each factor puts the previous unit on the bottom; units cancel like variables, and a wrong unit at the end signals a wrong setup.',
    'Squared and cubed units need the length factor squared or cubed: $1\\ \\text{m}^3 = 10^{6}\\ \\text{cm}^3 = 1000\\ \\text{L}$, and $1\\ \\text{mL} = 1\\ \\text{cm}^3$.',
    'Density $d = \\frac{m}{V}$ is the slope of a mass-volume line and an intensive property; use it right-side up for volume → mass and upside down for mass → volume.',
    '$T_{\\text{K}} = T_{\\text{C}} + 273.15$ and $T_{\\text{F}} = \\frac{9}{5}T_{\\text{C}} + 32$. Kelvin starts at absolute zero and is proportional to average kinetic energy.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 1: Essential Ideas',
      url: 'https://openstax.org/books/chemistry-2e/pages/1-introduction',
      source: 'openstax',
      note: 'Section 1.6 covers mathematical treatment of measurement results: dimensional analysis, density and temperature conversions.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "dimensional analysis" for many more worked conversion problems with full unit cancellation.',
    },
    {
      title: 'Wikipedia — Absolute zero',
      url: 'https://en.wikipedia.org/wiki/Absolute_zero',
      source: 'wikipedia',
      note: 'What absolute zero means physically and how close experiments have come to it.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'Practice sets on unit conversion and density if you want more repetitions.',
    },
  ],
};
