import type { Lesson } from '../../types';

// A pencil against a centimeter ruler: which digits are certain and which is estimated.
const FIG_RULER = `<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg">
<rect x="36" y="40" width="298.4" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.25"/>
<text x="44" y="58" font-size="13" class="t-blue">pencil</text>
<rect x="24" y="70" width="454" height="50" rx="4" fill="none" stroke="currentColor"/>
<line x1="36.0" y1="70" x2="36.0" y2="92" stroke="currentColor" stroke-width="1.4"/>
<text x="36.0" y="110" font-size="14" text-anchor="middle">0</text>
<line x1="44.6" y1="70" x2="44.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="53.2" y1="70" x2="53.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="61.8" y1="70" x2="61.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="70.4" y1="70" x2="70.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="79.0" y1="70" x2="79.0" y2="85" stroke="currentColor" stroke-width="0.8"/>
<line x1="87.6" y1="70" x2="87.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="96.2" y1="70" x2="96.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="104.8" y1="70" x2="104.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="113.4" y1="70" x2="113.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="122.0" y1="70" x2="122.0" y2="92" stroke="currentColor" stroke-width="1.4"/>
<text x="122.0" y="110" font-size="14" text-anchor="middle">1</text>
<line x1="130.6" y1="70" x2="130.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="139.2" y1="70" x2="139.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="147.8" y1="70" x2="147.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="156.4" y1="70" x2="156.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="165.0" y1="70" x2="165.0" y2="85" stroke="currentColor" stroke-width="0.8"/>
<line x1="173.6" y1="70" x2="173.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="182.2" y1="70" x2="182.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="190.8" y1="70" x2="190.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="199.4" y1="70" x2="199.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="208.0" y1="70" x2="208.0" y2="92" stroke="currentColor" stroke-width="1.4"/>
<text x="208.0" y="110" font-size="14" text-anchor="middle">2</text>
<line x1="216.6" y1="70" x2="216.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="225.2" y1="70" x2="225.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="233.8" y1="70" x2="233.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="242.4" y1="70" x2="242.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="251.0" y1="70" x2="251.0" y2="85" stroke="currentColor" stroke-width="0.8"/>
<line x1="259.6" y1="70" x2="259.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="268.2" y1="70" x2="268.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="276.8" y1="70" x2="276.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="285.4" y1="70" x2="285.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="294.0" y1="70" x2="294.0" y2="92" stroke="currentColor" stroke-width="1.4"/>
<text x="294.0" y="110" font-size="14" text-anchor="middle">3</text>
<line x1="302.6" y1="70" x2="302.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="311.2" y1="70" x2="311.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="319.8" y1="70" x2="319.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="328.4" y1="70" x2="328.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="337.0" y1="70" x2="337.0" y2="85" stroke="currentColor" stroke-width="0.8"/>
<line x1="345.6" y1="70" x2="345.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="354.2" y1="70" x2="354.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="362.8" y1="70" x2="362.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="371.4" y1="70" x2="371.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="380.0" y1="70" x2="380.0" y2="92" stroke="currentColor" stroke-width="1.4"/>
<text x="380.0" y="110" font-size="14" text-anchor="middle">4</text>
<line x1="388.6" y1="70" x2="388.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="397.2" y1="70" x2="397.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="405.8" y1="70" x2="405.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="414.4" y1="70" x2="414.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="423.0" y1="70" x2="423.0" y2="85" stroke="currentColor" stroke-width="0.8"/>
<line x1="431.6" y1="70" x2="431.6" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="440.2" y1="70" x2="440.2" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="448.8" y1="70" x2="448.8" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="457.4" y1="70" x2="457.4" y2="79" stroke="currentColor" stroke-width="0.8"/>
<line x1="466.0" y1="70" x2="466.0" y2="92" stroke="currentColor" stroke-width="1.4"/>
<text x="466.0" y="110" font-size="14" text-anchor="middle">5</text>
<text x="484" y="100" font-size="13" class="t-gray">cm</text>
<line x1="334.4" y1="30" x2="334.4" y2="96" class="s-red" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="342.4" y="30" font-size="14" class="t-red" font-weight="700">3.47 cm</text>
<text x="24" y="145" font-size="13">The 3 and the 4 are read off the marks: certain.</text>
<text x="24" y="163" font-size="13">The 7 is estimated between marks: uncertain, but still significant.</text>
</svg>`;

// Powers-of-ten ladder from a proton to the observable universe.
const FIG_LADDER = `<svg viewBox="0 0 520 493" xmlns="http://www.w3.org/2000/svg">
<line x1="110" y1="24.0" x2="110" y2="469.2" stroke="currentColor" stroke-width="1.5"/>
<line x1="103" y1="469.2" x2="110" y2="469.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="473.2" font-size="12" text-anchor="end">10⁻¹⁵ m</text>
<line x1="107" y1="458.6" x2="110" y2="458.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="448.0" x2="110" y2="448.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="437.4" x2="110" y2="437.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="426.8" x2="110" y2="426.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="416.2" x2="110" y2="416.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="420.2" font-size="12" text-anchor="end">10⁻¹⁰ m</text>
<line x1="107" y1="405.6" x2="110" y2="405.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="395.0" x2="110" y2="395.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="384.4" x2="110" y2="384.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="373.8" x2="110" y2="373.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="363.2" x2="110" y2="363.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="367.2" font-size="12" text-anchor="end">10⁻⁵ m</text>
<line x1="107" y1="352.6" x2="110" y2="352.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="342.0" x2="110" y2="342.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="331.4" x2="110" y2="331.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="320.8" x2="110" y2="320.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="310.2" x2="110" y2="310.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="314.2" font-size="12" text-anchor="end">10⁰ m</text>
<line x1="107" y1="299.6" x2="110" y2="299.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="289.0" x2="110" y2="289.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="278.4" x2="110" y2="278.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="267.8" x2="110" y2="267.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="257.2" x2="110" y2="257.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="261.2" font-size="12" text-anchor="end">10⁵ m</text>
<line x1="107" y1="246.6" x2="110" y2="246.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="236.0" x2="110" y2="236.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="225.4" x2="110" y2="225.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="214.8" x2="110" y2="214.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="204.2" x2="110" y2="204.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="208.2" font-size="12" text-anchor="end">10¹⁰ m</text>
<line x1="107" y1="193.6" x2="110" y2="193.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="183.0" x2="110" y2="183.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="172.4" x2="110" y2="172.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="161.8" x2="110" y2="161.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="151.2" x2="110" y2="151.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="155.2" font-size="12" text-anchor="end">10¹⁵ m</text>
<line x1="107" y1="140.6" x2="110" y2="140.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="130.0" x2="110" y2="130.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="119.4" x2="110" y2="119.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="108.8" x2="110" y2="108.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="98.2" x2="110" y2="98.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="102.2" font-size="12" text-anchor="end">10²⁰ m</text>
<line x1="107" y1="87.6" x2="110" y2="87.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="77.0" x2="110" y2="77.0" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="66.4" x2="110" y2="66.4" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="55.8" x2="110" y2="55.8" stroke="currentColor" stroke-width="1"/>
<line x1="103" y1="45.2" x2="110" y2="45.2" stroke="currentColor" stroke-width="1"/>
<text x="98" y="49.2" font-size="12" text-anchor="end">10²⁵ m</text>
<line x1="107" y1="34.6" x2="110" y2="34.6" stroke="currentColor" stroke-width="1"/>
<line x1="107" y1="24.0" x2="110" y2="24.0" stroke="currentColor" stroke-width="1"/>
<circle cx="110" cy="466.8" r="4" class="f-red"/>
<line x1="115" y1="466.8" x2="136" y2="466.8" class="s-red" stroke-width="1"/>
<text x="142" y="470.8" font-size="13">proton</text>
<text x="300" y="470.8" font-size="13" class="t-red">1.7 × 10⁻¹⁵ m</text>
<circle cx="110" cy="416.2" r="4" class="f-red"/>
<line x1="115" y1="416.2" x2="136" y2="416.2" class="s-red" stroke-width="1"/>
<text x="142" y="420.2" font-size="13">hydrogen atom</text>
<text x="300" y="420.2" font-size="13" class="t-red">1 × 10⁻¹⁰ m</text>
<circle cx="110" cy="384.4" r="4" class="f-orange"/>
<line x1="115" y1="384.4" x2="136" y2="384.4" class="s-orange" stroke-width="1"/>
<text x="142" y="388.4" font-size="13">virus</text>
<text x="300" y="388.4" font-size="13" class="t-orange">1 × 10⁻⁷ m</text>
<circle cx="110" cy="353.6" r="4" class="f-orange"/>
<line x1="115" y1="353.6" x2="136" y2="353.6" class="s-orange" stroke-width="1"/>
<text x="142" y="357.6" font-size="13">human hair (width)</text>
<text x="300" y="357.6" font-size="13" class="t-orange">8 × 10⁻⁵ m</text>
<circle cx="110" cy="307.5" r="4" class="f-green"/>
<line x1="115" y1="307.5" x2="136" y2="307.5" class="s-green" stroke-width="1"/>
<text x="142" y="311.5" font-size="13">you</text>
<text x="300" y="311.5" font-size="13" class="t-green">1.8 m</text>
<circle cx="110" cy="289.0" r="4" class="f-green"/>
<line x1="115" y1="289.0" x2="136" y2="289.0" class="s-green" stroke-width="1"/>
<text x="142" y="293.0" font-size="13">football field</text>
<text x="300" y="293.0" font-size="13" class="t-green">1 × 10² m</text>
<circle cx="110" cy="268.4" r="4" class="f-teal"/>
<line x1="115" y1="268.4" x2="136" y2="268.4" class="s-teal" stroke-width="1"/>
<text x="142" y="272.4" font-size="13">Mount Everest</text>
<text x="300" y="272.4" font-size="13" class="t-teal">8.8 × 10³ m</text>
<circle cx="110" cy="238.1" r="4" class="f-blue"/>
<line x1="115" y1="238.1" x2="136" y2="238.1" class="s-blue" stroke-width="1"/>
<text x="142" y="242.1" font-size="13">Earth's radius</text>
<text x="300" y="242.1" font-size="13" class="t-blue">6.4 × 10⁶ m</text>
<circle cx="110" cy="191.7" r="4" class="f-blue"/>
<line x1="115" y1="191.7" x2="136" y2="191.7" class="s-blue" stroke-width="1"/>
<text x="142" y="195.7" font-size="13">Earth to Sun</text>
<text x="300" y="195.7" font-size="13" class="t-blue">1.5 × 10¹¹ m</text>
<circle cx="110" cy="87.8" r="4" class="f-purple"/>
<line x1="115" y1="87.8" x2="136" y2="87.8" class="s-purple" stroke-width="1"/>
<text x="142" y="91.8" font-size="13">Milky Way (across)</text>
<text x="300" y="91.8" font-size="13" class="t-purple">1 × 10²¹ m</text>
<circle cx="110" cy="24.6" r="4" class="f-purple"/>
<line x1="115" y1="24.6" x2="136" y2="24.6" class="s-purple" stroke-width="1"/>
<text x="142" y="28.6" font-size="13">observable universe</text>
<text x="300" y="28.6" font-size="13" class="t-purple">9 × 10²⁶ m</text>
<text x="142" y="14.0" font-size="12" class="t-gray">each tick = one order of magnitude (×10)</text>
</svg>`;

export const lesson: Lesson = {
  id: 'phys-units-dimensions',
  title: 'Units, Dimensions and Estimation',
  summary: 'Every physical quantity is a number times a unit. Learn SI units, use dimensions to catch mistakes and even predict formulas, and estimate anything to the nearest power of ten.',
  minutes: 18,
  objectives: [
    'Write physical quantities in SI units and convert between units and prefixes with conversion factors',
    'Find the dimensions of a quantity and use them to check whether an equation can be correct',
    'Use dimensional analysis to predict how a quantity scales, such as a pendulum\'s period',
    'Report results with sensible significant figures and explain why game engines run out of them',
    'Make order-of-magnitude (Fermi) estimates by chaining rough factors',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A quantity is a number times a unit',
      blocks: [
        {
          type: 'p',
          text: 'Physics makes predictions you can check with a ruler, a clock and a scale. That only works if everyone agrees what "one meter" or "one second" means. So every physical quantity has two parts: a **number** and a **unit**. "The speed is 12" says nothing; "the speed is $12\\,\\text{m/s}$" is a fact you can test.',
        },
        {
          type: 'p',
          text: 'Physics uses the [[si-units|SI system]]. Mechanics needs only three of its base units: the **meter** (m) for length, the **kilogram** (kg) for mass and the **second** (s) for time. Every other unit in this course is built from those three.',
        },
        {
          type: 'table',
          headers: ['Quantity', 'SI unit', 'In base units'],
          rows: [
            ['length, position', 'meter (m)', 'm'],
            ['mass', 'kilogram (kg)', 'kg'],
            ['time', 'second (s)', 's'],
            ['velocity', 'meter per second', '$\\text{m/s}$'],
            ['acceleration', 'meter per second squared', '$\\text{m/s}^2$'],
            ['force', 'newton (N)', '$\\text{kg}\\cdot\\text{m/s}^2$'],
            ['energy, work', 'joule (J)', '$\\text{N}\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$'],
            ['power', 'watt (W)', '$\\text{J/s} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^3$'],
          ],
          caption: 'You will meet force, energy and power in later units. The point now: each one is just a product of powers of m, kg and s.',
        },
        {
          type: 'p',
          text: 'The base units are pinned to constants of nature, so a lab anywhere can reproduce them. The second is defined by a cesium-133 atomic transition (exactly $9\\,192\\,631\\,770$ oscillations). The meter is the distance light travels in $1/299\\,792\\,458$ of a second. Since 2019 the kilogram is fixed by Planck\'s constant rather than a metal cylinder in a vault near Paris.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'A \\$125 million unit error',
          text: 'In 1999 NASA lost the Mars Climate Orbiter. Ground software supplied thruster impulses in pound-force seconds, while the navigation software expected newton-seconds, a factor of about $4.45$. Each small trajectory correction was mis-modeled, and the probe flew far too low into the Martian atmosphere. Every number was computed correctly; the units were not.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why carry units through every line',
          text: 'Units are not decoration you tack on at the end. They multiply and divide like algebraic factors: $\\text{m} \\div \\text{s} = \\text{m/s}$, and $\\text{m/s} \\times \\text{s} = \\text{m}$. Writing them on every line turns your work into a running check. If a result that should be a speed comes out in $\\text{m}\\cdot\\text{s}$, you know there is a mistake before you look at a single digit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Prefixes and unit conversion',
      blocks: [
        {
          type: 'p',
          text: 'Prefixes scale a unit by a power of ten (see [[chem-metric-prefix|metric prefix]] and [[scientific-notation]]). The ones you will use most in mechanics:',
        },
        {
          type: 'table',
          headers: ['Prefix', 'Symbol', 'Factor', 'Example'],
          rows: [
            ['giga', 'G', '$10^{9}$', 'GPS orbit radius $\\approx 0.0266\\,\\text{Gm}$'],
            ['mega', 'M', '$10^{6}$', 'Earth\'s radius $\\approx 6.37\\,\\text{Mm}$'],
            ['kilo', 'k', '$10^{3}$', 'a "klick" $= 1\\,\\text{km} = 1000\\,\\text{m}$'],
            ['centi', 'c', '$10^{-2}$', '$1\\,\\text{cm} = 0.01\\,\\text{m}$'],
            ['milli', 'm', '$10^{-3}$', 'a frame at 60 fps lasts $16.7\\,\\text{ms}$'],
            ['micro', '$\\mu$', '$10^{-6}$', 'a red blood cell is $\\approx 8\\,\\mu\\text{m}$ across'],
            ['nano', 'n', '$10^{-9}$', 'a CPU clock tick at 3 GHz lasts $0.33\\,\\text{ns}$'],
          ],
        },
        {
          type: 'p',
          text: 'To convert, multiply by [[conversion-factor|conversion factors]]: fractions equal to 1, such as $\\frac{1000\\,\\text{m}}{1\\,\\text{km}}$. This is the factor-label method you may know as [[dimensional-analysis]] from chemistry. Arrange each factor so the unit you want to get rid of is on the opposite side of the fraction bar, and it cancels.',
        },
        {
          type: 'derivation',
          title: 'Convert a highway speed of $72\\,\\text{km/h}$ to $\\text{m/s}$',
          steps: [
            { tex: '72\\,\\frac{\\text{km}}{\\text{h}}', why: 'Start with the quantity, units attached.' },
            { tex: '= 72\\,\\frac{\\cancel{\\text{km}}}{\\text{h}} \\times \\frac{1000\\,\\text{m}}{1\\,\\cancel{\\text{km}}}', why: 'km is on top, so the factor puts km on the bottom. The factor equals 1, so the speed itself is unchanged.' },
            { tex: '= 72\\,000\\,\\frac{\\text{m}}{\\cancel{\\text{h}}} \\times \\frac{1\\,\\cancel{\\text{h}}}{3600\\,\\text{s}}', why: 'Hours are on the bottom, so this factor puts hours on top: $1\\,\\text{h} = 3600\\,\\text{s}$.' },
            { tex: '= 20\\,\\text{m/s}', why: '$72\\,000 / 3600 = 20$. Only m/s survives the cancellation, which confirms the setup.' },
          ],
          result: 'The two factors combine into one handy rule: divide km/h by $3.6$ to get m/s (and multiply m/s by $3.6$ to get km/h).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Squared and cubed units',
          text: 'A conversion factor gets squared or cubed along with its unit. Since $1\\,\\text{cm} = 10^{-2}\\,\\text{m}$, an area of $1\\,\\text{cm}^2 = (10^{-2}\\,\\text{m})^2 = 10^{-4}\\,\\text{m}^2$, not $10^{-2}\\,\\text{m}^2$. Likewise $1\\,\\text{km}^2 = 10^{6}\\,\\text{m}^2$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Game engines pick a unit too',
          text: 'Unreal Engine measures distance in centimeters: one Unreal unit is $1\\,\\text{cm}$, so its default gravity is $-980\\,\\text{cm/s}^2$. Unity treats one unit as $1\\,\\text{m}$, with gravity $-9.81\\,\\text{m/s}^2$. If you port a jump tuned in one engine to the other without converting, the character jumps a hundred times too high or too low. Pick one unit convention per project and convert at the boundaries (imported assets, physics middleware, network packets).',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'A car travels at $130\\,\\text{km/h}$. Convert this speed to meters per second. Give 3 significant figures.',
      hint: '$1\\,\\text{km} = 1000\\,\\text{m}$ and $1\\,\\text{h} = 3600\\,\\text{s}$, or simply divide by $3.6$.',
      answer: '130/3.6',
      answerTex: '36.1\\,\\text{m/s}',
      tolerance: 0.2,
      unit: 'm/s',
      label: '$v =$',
      explanation: '$130\\,\\frac{\\text{km}}{\\text{h}} \\times \\frac{1000\\,\\text{m}}{1\\,\\text{km}} \\times \\frac{1\\,\\text{h}}{3600\\,\\text{s}} = \\frac{130\\,000}{3600}\\,\\text{m/s} = 36.1\\,\\text{m/s}$. If you got $468$, you multiplied by $3.6$ instead of dividing. Sanity check: a meter per second is a slow walk, and a highway car covers a bit more than a third of a football field each second, so a few tens of m/s is right.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Dimensions: the grammar of equations',
      blocks: [
        {
          type: 'p',
          text: 'A unit is a particular choice (meters, feet, light-years). The [[phys-dimension|dimension]] is the *kind* of quantity, independent of that choice. Mechanics has three base dimensions: length $[L]$, mass $[M]$ and time $[T]$. Square brackets mean "the dimension of". So $[\\text{speed}] = [L]/[T] = [L T^{-1}]$, whether you measure it in m/s or mph.',
        },
        {
          type: 'definition',
          term: 'Dimensional consistency',
          text: 'In any correct physics equation, (1) both sides have the same dimension, (2) every term in a sum has the same dimension, and (3) the argument of a function like $\\sin$, $\\cos$, $e^{x}$ or $\\ln$ is dimensionless.',
        },
        {
          type: 'p',
          text: 'Calculus fits in neatly. A derivative $\\frac{d}{dt}$ divides by the dimension of $t$, and an integral $\\int \\dots dt$ multiplies by it. So velocity $\\frac{dx}{dt}$ has dimension $[L T^{-1}]$, and $\\int v\\,dt$ is back to $[L]$.',
        },
        {
          type: 'math',
          tex: '\\underbrace{x}_{[L]} = \\underbrace{x_0}_{[L]} + \\underbrace{v_0\\,t}_{[L T^{-1}][T] \\,=\\, [L]} + \\underbrace{\\tfrac12 a\\,t^2}_{[L T^{-2}][T^2] \\,=\\, [L]}',
          caption: 'The position formula you will derive in the next unit passes the test: every term is a length. The $\\tfrac12$ is a pure number and has no dimension.',
        },
        {
          type: 'derivation',
          title: 'Catch the mistake in $v^2 = v_0^2 + 2a\\,t$',
          steps: [
            { tex: '[v^2] = [L T^{-1}]^2 = [L^2 T^{-2}]', why: 'Square the dimension of a speed.' },
            { tex: '[2a\\,t] = [L T^{-2}]\\,[T] = [L T^{-1}]', why: 'The 2 is dimensionless; acceleration times time is a speed.' },
            { tex: '[L^2 T^{-2}] \\ne [L T^{-1}]', why: 'You cannot add a speed squared to a speed: the equation is impossible, no matter what numbers you plug in.' },
            { tex: 'v^2 = v_0^2 + 2a\\,\\Delta x \\;\\;\\checkmark', why: 'Replacing $t$ by a displacement fixes it: $[L T^{-2}][L] = [L^2 T^{-2}]$. This is the real equation, derived in the next unit.' },
          ],
          result: 'A dimension check takes ten seconds and catches a large share of algebra slips. It cannot catch a wrong pure number like a missing $2$ or $\\pi$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Make the compiler check your dimensions',
          text: 'C++ templates can carry the exponents of $[L]$, $[M]$ and $[T]$ in the type, so adding a length to a speed becomes a compile error at zero runtime cost. Real libraries (Boost.Units, mp-units) do exactly this.',
        },
        {
          type: 'code',
          title: 'dimensions.cpp',
          runnable: true,
          code: `#include <cstdio>

// A value tagged with the exponents of its dimension: [L]^L [M]^M [T]^T.
template <int L, int M, int T>
struct Q {
    double v;
};

// Addition only exists for two quantities with the SAME dimension.
template <int L, int M, int T>
Q<L, M, T> operator+(Q<L, M, T> a, Q<L, M, T> b) { return {a.v + b.v}; }

// Multiplication adds the exponents, exactly like [L/T] * [T] = [L].
template <int L1, int M1, int T1, int L2, int M2, int T2>
Q<L1 + L2, M1 + M2, T1 + T2> operator*(Q<L1, M1, T1> a, Q<L2, M2, T2> b) {
    return {a.v * b.v};
}

using Number = Q<0, 0, 0>;
using Length = Q<1, 0, 0>;
using Time = Q<0, 0, 1>;
using Speed = Q<1, 0, -1>;
using Accel = Q<1, 0, -2>;

int main() {
    Length x0{2.0};
    Speed v0{3.0};
    Accel a{-9.8};
    Time t{0.5};
    Number half{0.5};

    Length x = x0 + v0 * t + half * a * t * t;  // every term is [L]: compiles
    // Length bad = x0 + v0;                    // [L] + [L/T]: will not compile
    std::printf("x = %.3f m\\n", x.v);
}`,
          output: 'x = 2.275 m',
          annotations: [
            { lines: '3-7', text: 'The dimension lives in the type: `Q<1, 0, -1>` is $[L^1 M^0 T^{-1}]$, a speed.' },
            { lines: '9-11', text: 'Both operands must have identical exponents, so `operator+` simply does not exist for a length plus a speed.' },
            { lines: '13-17', text: 'Multiplying adds exponents, exactly as $[L T^{-1}] \\cdot [T] = [L]$.' },
            { lines: 32, text: '$x = x_0 + v_0 t + \\tfrac12 a t^2 = 2 + 1.5 - 1.225 = 2.275\\,\\text{m}$. Every term is a `Length`, so it compiles.' },
            { lines: 33, text: 'Uncomment this line and g++ reports "no match for operator+": a dimension error caught before the game ever runs.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Here $x$ is a position, $v$ and $v_0$ are speeds, $a$ and $g$ are accelerations, $t$ and $T$ are times, and $L$ is a length. Which equation **cannot** be correct?',
      options: [
        { text: '$v^2 = v_0^2 + 2a\\,\\Delta x$', why: 'Each term has dimension $[L^2 T^{-2}]$: $[a][\\Delta x] = [L T^{-2}][L]$. It is consistent (and it is a real kinematic equation).' },
        { text: '$x = v\\,t^2$', correct: true, why: '$[v][t^2] = [L T^{-1}][T^2] = [L T]$, which is not a length. No choice of numbers can rescue it.' },
        { text: '$v = v_0 + a\\,t$', why: '$[a][t] = [L T^{-2}][T] = [L T^{-1}]$, a speed, so all three terms match.' },
        { text: '$T = 2\\pi\\sqrt{L/g}$', why: '$[L/g] = [L]/[L T^{-2}] = [T^2]$, and its square root is $[T]$. The $2\\pi$ is dimensionless. Consistent.' },
      ],
      explanation: 'Check each term separately. Only $x = v t^2$ fails: speed times time squared is $[L T]$, not $[L]$. Remember that passing the test does not prove an equation right (it says nothing about pure-number factors), but failing it proves the equation wrong.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student converts a sprinter\'s top speed of $15\\,\\text{m/s}$ to km/h. Tap the first line that is wrong.',
      lines: [
        '$15\\,\\dfrac{\\text{m}}{\\text{s}} \\times \\dfrac{1\\,\\text{km}}{1000\\,\\text{m}}$',
        '$= 0.015\\,\\dfrac{\\text{km}}{\\text{s}}$',
        '$0.015\\,\\dfrac{\\text{km}}{\\text{s}} \\times \\dfrac{1\\,\\text{h}}{3600\\,\\text{s}}$',
        '$= 4.2 \\times 10^{-6}\\,\\text{km/h}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses the factor upside down. With seconds on the bottom of $\\frac{\\text{km}}{\\text{s}}$, the factor must have seconds on top: $\\frac{3600\\,\\text{s}}{1\\,\\text{h}}$. As written, the units become $\\text{km}\\cdot\\text{h}/\\text{s}^2$, which do not cancel to km/h at all (line 4 just pretends they do). Correctly, $0.015 \\times 3600 = 54\\,\\text{km/h}$, the same as $15 \\times 3.6$. A tiny answer like $4 \\times 10^{-6}$ km/h for a sprinter should also set off alarms.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Predicting formulas from dimensions',
      blocks: [
        {
          type: 'p',
          text: 'Dimensions can do more than catch mistakes. If you know which quantities a result depends on, matching dimensions often pins down *how* it depends on them. Physicists use this to get a first answer before doing any detailed theory.',
        },
        {
          type: 'derivation',
          title: 'How does a pendulum\'s period depend on its length $L$, bob mass $m$ and $g$?',
          steps: [
            { tex: 'T = C\\,L^{a}\\,m^{b}\\,g^{c}', why: 'Guess a product of powers, with a dimensionless constant $C$. We need the exponents $a$, $b$, $c$.' },
            { tex: '[T] = [L]^{a}\\,[M]^{b}\\,[L T^{-2}]^{c} = [L^{a+c}\\,M^{b}\\,T^{-2c}]', why: 'Substitute dimensions: $g$ is an acceleration, $[L T^{-2}]$. Collect powers of each base dimension.' },
            { tex: '[M]:\\; b = 0 \\qquad [T]:\\; -2c = 1 \\qquad [L]:\\; a + c = 0', why: 'The left side is $[L^0 M^0 T^1]$, so the exponents of each base dimension must match separately.' },
            { tex: 'b = 0,\\quad c = -\\tfrac12,\\quad a = \\tfrac12', why: 'Solve the three equations.' },
            { tex: 'T = C\\sqrt{L/g}', why: 'Reassemble. The mass dropped out entirely. A full analysis (the oscillations unit) gives $C = 2\\pi$ for small swings.' },
          ],
          result: 'Without any physics beyond dimensions: quadruple the length and the period doubles; the bob\'s mass does not matter.',
        },
        {
          type: 'graph',
          x: [-2.6, 2.6],
          y: [-3.9, 0.4],
          equal: true,
          parametric: [
            { x: '-1.7 + L*sin(t)', y: '-L*cos(t)', t: [-0.3, 0.3], color: 'gray', dashed: true },
            { x: '0.9 + 4L*sin(t)', y: '-4L*cos(t)', t: [-0.3, 0.3], color: 'gray', dashed: true },
          ],
          segments: [
            { from: [-1.7, 0], to: ['-1.7 + L*sin(0.3cos(sqrt(9.8/L)*s))', '-L*cos(0.3cos(sqrt(9.8/L)*s))'], color: 'blue' },
            { from: [0.9, 0], to: ['0.9 + 4L*sin(0.3cos(sqrt(9.8/(4L))*s))', '-4L*cos(0.3cos(sqrt(9.8/(4L))*s))'], color: 'red' },
            { from: [-2.4, 0], to: [2.4, 0], color: 'gray' },
          ],
          points: [
            { x: '-1.7 + L*sin(0.3cos(sqrt(9.8/L)*s))', y: '-L*cos(0.3cos(sqrt(9.8/L)*s))', label: 'L', color: 'blue' },
            { x: '0.9 + 4L*sin(0.3cos(sqrt(9.8/(4L))*s))', y: '-4L*cos(0.3cos(sqrt(9.8/(4L))*s))', label: '4L', color: 'red' },
          ],
          sliders: [
            { name: 's', min: 0, max: 6, step: 0.01, value: 0, label: 'time $s$ (s)', play: true, speed: 1 },
            { name: 'L', min: 0.2, max: 0.9, step: 0.05, value: 0.5, label: 'short length $L$ (m)' },
          ],
          readouts: [
            { label: 'short period $2\\pi\\sqrt{L/g}$ (s):', expr: '2pi*sqrt(L/9.8)', digits: 2 },
            { label: 'long period (s):', expr: '2pi*sqrt(4L/9.8)', digits: 2 },
          ],
          caption: 'Press ▶ (time runs at real speed, $g = 9.80\\,\\text{m/s}^2$). The blue pendulum completes two full swings for every one of the red pendulum, which is four times as long, just as $T \\propto \\sqrt{L}$ predicts.',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [0, 10],
          functions: [
            { expr: '2pi*sqrt(x/g)', label: '$T = 2\\pi\\sqrt{L/g}$', color: 'blue' },
            { expr: '2pi*sqrt(x/9.8)', label: 'Earth, $g = 9.80$', color: 'gray', dashed: true },
          ],
          points: [{ x: 1, y: '2pi*sqrt(1/g)', label: 'L = 1 m', color: 'blue' }],
          sliders: [{ name: 'g', min: 1.6, max: 25, step: 0.01, value: 1.62, label: '$g$ ($\\text{m/s}^2$)' }],
          readouts: [{ label: 'period of a 1 m pendulum (s):', expr: '2pi*sqrt(1/g)', digits: 2 }],
          caption: 'Horizontal axis: length $L$ in m; vertical axis: period $T$ in s. Try the Moon ($1.62$), Mars ($3.71$), Earth ($9.80$) and Jupiter ($24.8\\,\\text{m/s}^2$). Weaker gravity means a slower pendulum. On the Moon a $1\\,\\text{m}$ pendulum takes about $4.9\\,\\text{s}$ per swing instead of $2.0\\,\\text{s}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the mass had to drop out',
          text: 'Mass is the only ingredient containing $[M]$. Nothing else could cancel a power of kilograms, so its exponent is forced to be zero. That is a genuine physical prediction, and it matches experiment: a heavy and a light bob on equal strings swing in step. The method has limits, though. It cannot produce the $2\\pi$, and if you forget a relevant variable (say the swing angle, which is dimensionless anyway) it will happily give a wrong answer.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'The air-drag force on a fast-moving object depends on the air density $\\rho$ (units $\\text{kg/m}^3$), the object\'s cross-sectional area $A$ ($\\text{m}^2$) and its speed $v$ ($\\text{m/s}$). A force has dimension $[M L T^{-2}]$. Use dimensional analysis to find the formula, taking the dimensionless constant to be $1$. (Type `rho` for $\\rho$.)',
      label: '$F =$',
      answer: 'rho*A*v^2',
      answerTex: 'F = \\rho A v^2',
      variables: ['rho', 'A', 'v'],
      domain: [0.5, 3],
      hint: 'Write $F = \\rho^{a} A^{b} v^{c}$. Only $\\rho$ contains mass, which fixes $a$. Only $v$ contains time, which fixes $c$. Then balance length.',
      explanation: 'Set $[M L T^{-2}] = [M L^{-3}]^{a}[L^2]^{b}[L T^{-1}]^{c}$. Mass: $a = 1$. Time: $-c = -2$, so $c = 2$. Length: $-3a + 2b + c = 1$ gives $-3 + 2b + 2 = 1$, so $b = 1$. Hence $F \\propto \\rho A v^2$. The full drag law is $F = \\tfrac12 C_D \\rho A v^2$ with a measured drag coefficient $C_D$. The $v^2$ is why doubling a bullet\'s speed roughly quadruples the drag on it, which you will meet in the drag lesson.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'Assume a pendulum\'s period depends only on its length, the mass of its bob and $g$. Then dimensional analysis alone proves that the period cannot depend on the mass.',
      answer: true,
      explanation: 'True. Mass is the only one of the three quantities with a factor of $[M]$, so no combination could cancel it, and its exponent must be zero. The assumption matters: dimensional analysis is only as good as your list of relevant variables. It also cannot find dimensionless factors like the $2\\pi$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Significant figures, and why floats run out of them',
      blocks: [
        {
          type: 'p',
          text: 'Every measurement has limited precision. [[significant-figures|Significant figures]] are the digits you actually know, plus one estimated digit. A result must not claim more precision than the data it came from.',
        },
        {
          type: 'figure',
          svg: FIG_RULER,
          alt: 'A pencil lies along a centimeter ruler with millimeter marks. Its end falls between the 3.4 and 3.5 centimeter marks, about seven tenths of the way, so the length is read as 3.47 centimeters.',
          caption: 'Reading a scale: record every certain digit plus one estimated digit. That makes $3.47\\,\\text{cm}$ three significant figures.',
          maxWidth: 520,
        },
        {
          type: 'list',
          items: [
            '**Multiplying or dividing:** keep as many significant figures as the input with the fewest. $12.34\\,\\text{m} / 2.1\\,\\text{s} = 5.9\\,\\text{m/s}$ (two, because of $2.1$).',
            '**Adding or subtracting:** keep as many decimal places as the input with the fewest. $12.34\\,\\text{m} + 2.1\\,\\text{m} = 14.4\\,\\text{m}$.',
            '**Exact numbers** (the $\\tfrac12$ in a formula, a defined $1\\,\\text{km} = 1000\\,\\text{m}$) never limit precision.',
            '**Round once, at the end.** Keep one or two extra digits in intermediate steps.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The convention in this course',
          text: 'Data are usually given to 3 significant figures, and answers should be too. Use $g = 9.80\\,\\text{m/s}^2$ unless a problem says otherwise. The answer checker accepts small differences from rounding or from using $g = 9.81$.',
        },
        {
          type: 'p',
          text: 'Computers have significant figures too. A 32-bit `float` stores about 7 significant decimal digits; a `double` about 16. The *absolute* precision therefore depends on how big the number is. Near $1\\,\\text{m}$ a float resolves about $10^{-7}\\,\\text{m}$; at $100\\,\\text{km}$ from the origin, consecutive floats are $7.8\\,\\text{mm}$ apart.',
        },
        {
          type: 'graph',
          x: [0, 7.5],
          y: [-7.5, 0.5],
          functions: [{ expr: '(floor(x*ln(10)/ln(2)) - 23)*log(2)', label: '$\\log_{10}$(float spacing in m)', color: 'purple' }],
          points: [{ x: 'p', y: '(floor(p*ln(10)/ln(2)) - 23)*log(2)', color: 'red' }],
          hlines: [{ y: -3, label: '1 mm', color: 'orange' }],
          sliders: [{ name: 'p', min: 0, max: 7, step: 0.05, value: 5, label: 'distance from origin $= 10^{p}\\,\\text{m}$' }],
          readouts: [
            { label: 'distance from origin (m):', expr: '10^p', digits: 0 },
            { label: 'gap to the next float (mm):', expr: '1000*2^(floor(p*ln(10)/ln(2)) - 23)', digits: 5 },
          ],
          caption: 'Horizontal: $\\log_{10}$ of the distance from the world origin. Vertical: $\\log_{10}$ of the smallest step a `float` coordinate can take there. Each stair is a doubling. Past about $16\\,\\text{km}$ the step exceeds $1\\,\\text{mm}$ (orange line), and slow motions start to jitter or stop.',
        },
        {
          type: 'code',
          title: 'float_drift.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const float step = 0.001f;  // move 1 mm per frame
    const float starts[] = {1.0f, 1000.0f, 100000.0f, 10000000.0f};
    for (float x0 : starts) {
        float x = x0;
        for (int frame = 0; frame < 1000; ++frame) x += step;  // should total 1 m
        float gap = std::nextafter(x0, 2.0f * x0) - x0;        // spacing of floats near x0
        std::printf("start %10.0f m   moved %.4f m   float spacing %.7f m\\n", x0, x - x0, gap);
    }
}`,
          output: `start          1 m   moved 1.0000 m   float spacing 0.0000001 m
start       1000 m   moved 0.9766 m   float spacing 0.0000610 m
start     100000 m   moved 0.0000 m   float spacing 0.0078125 m
start   10000000 m   moved 0.0000 m   float spacing 1.0000000 m`,
          annotations: [
            { lines: 5, text: 'A character creeping forward $1\\,\\text{mm}$ per frame.' },
            { lines: 9, text: 'Add the step 1000 times. Exact arithmetic would move it exactly $1\\,\\text{m}$.' },
            { lines: 10, text: '`std::nextafter` returns the next representable float, so the difference is the local spacing.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Large worlds',
          text: 'At $100\\,\\text{km}$ from the origin, adding $1\\,\\text{mm}$ to a float does nothing at all: the sum rounds back to the same value. Open-world games fight this by keeping the player near the origin ("origin rebasing") or by switching positions to `double`. Unreal Engine 5\'s Large World Coordinates did the latter.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Apply the significant-figure rules.',
      template: 'A cart covers $12.34\\,\\text{m}$ in $2.1\\,\\text{s}$. The calculator shows $5.876190\\ldots$ for the speed. A quotient keeps ___ significant figures, so report ___ m/s. The sum $12.34\\,\\text{m} + 2.1\\,\\text{m}$ keeps ___ decimal place(s), giving ___ m.',
      blanks: [{ answers: ['2'] }, { answers: ['5.9'] }, { answers: ['1'] }, { answers: ['14.4'] }],
      wordBank: ['2', '4', '5.9', '5.876', '1', '2', '14.4', '14.44'],
      explanation: 'For division, the least precise input ($2.1\\,\\text{s}$, two significant figures) limits the result: $5.876\\ldots \\to 5.9\\,\\text{m/s}$. For addition, what matters is decimal places: $2.1$ is known only to the tenths place, so $14.44$ becomes $14.4\\,\\text{m}$. Writing $5.876\\,\\text{m/s}$ would claim a precision of a millimeter per second from a stopwatch reading good to a tenth of a second.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Orders of magnitude and Fermi estimates',
      blocks: [
        {
          type: 'p',
          text: 'Often you do not need three significant figures; you need to know whether the answer is 10 or 10 000. The [[phys-order-of-magnitude|order of magnitude]] of a number is the power of ten nearest to it. Physics spans an enormous range of them:',
        },
        {
          type: 'figure',
          svg: FIG_LADDER,
          alt: 'A vertical logarithmic scale from 10 to the minus 15 meters up to 10 to the 27 meters. Marked objects from bottom to top: proton, hydrogen atom, virus, width of a human hair, a person, a football field, Mount Everest, Earth\'s radius, the Earth to Sun distance, the Milky Way and the observable universe.',
          caption: 'Each tick is a factor of 10. A person sits roughly in the middle of the logarithmic range of lengths physics deals with.',
          maxWidth: 440,
        },
        {
          type: 'p',
          text: 'A [[phys-fermi-estimate|Fermi estimate]] gets an order of magnitude by breaking a hard question into factors you can each guess roughly, then multiplying. One number worth memorizing: a year is about $\\pi \\times 10^{7}\\,\\text{s}$.',
        },
        {
          type: 'derivation',
          title: 'Estimate how many times your heart beats in a lifetime',
          steps: [
            { tex: 'N = (\\text{beats per second}) \\times (\\text{seconds per year}) \\times (\\text{years})', why: 'Break the question into factors you can estimate separately. Check the units cancel to a pure count.' },
            { tex: '\\approx 1\\,\\tfrac{\\text{beat}}{\\text{s}} \\times 3 \\times 10^{7}\\,\\tfrac{\\text{s}}{\\text{yr}} \\times 80\\,\\text{yr}', why: 'A resting pulse is roughly 60 to 80 per minute, about one per second. A year is about $\\pi \\times 10^7\\,\\text{s}$.' },
            { tex: '\\approx 2.4 \\times 10^{9}', why: 'Multiply the leading digits ($3 \\times 80 = 240$) and add the powers of ten.' },
            { tex: '\\sim 10^{9}\\text{ beats}', why: 'Round to the order of magnitude. A careful count with 70 beats per minute gives $2.9 \\times 10^{9}$, the same order.' },
          ],
          result: 'A few billion heartbeats. Each factor might be off by 20 to 30 percent, but the answer is solidly in the billions, not millions or trillions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why rough factors give a good product',
          text: 'Independent estimation errors tend to partly cancel: you guess one factor high and another low. A chain of five factors each within a factor of 2 usually lands within a factor of 3 or so of the truth, which is all an order-of-magnitude answer promises. Estimating first also protects you from calculator slips: if the careful answer disagrees with the estimate by a factor of 1000, look for a units or exponent error.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Fermi at Trinity',
          text: 'At the first atomic bomb test in July 1945, Enrico Fermi dropped scraps of paper as the blast wave passed and watched how far they were carried. From that one rough measurement he estimated the yield at about 10 kilotons of TNT. Later analyses put it near 20 kilotons: the right order of magnitude from a handful of paper.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Estimates in game development',
          text: 'Back-of-the-envelope numbers drive real engineering decisions. At 60 fps you have $16.7\\,\\text{ms}$ per frame. A $4096 \\times 4096$ heightmap of 4-byte floats is about $1.7 \\times 10^{7} \\times 4 \\approx 7 \\times 10^{7}$ bytes, or roughly 70 MB. Knowing the order of magnitude tells you instantly whether an idea fits the budget.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put these lengths in order from smallest to largest.',
      lines: [
        'the diameter of a red blood cell',
        'the width of a human hair',
        'the length of a smartphone',
        'the length of an aircraft carrier',
        'the height of Mount Everest',
        'the distance from Earth to the Moon',
      ],
      explanation: 'Attach an order of magnitude to each: red blood cell $\\sim 10^{-5}\\,\\text{m}$ ($8\\,\\mu\\text{m}$), hair $\\sim 10^{-4}\\,\\text{m}$ ($80\\,\\mu\\text{m}$), smartphone $\\sim 10^{-1}\\,\\text{m}$ ($15\\,\\text{cm}$), aircraft carrier $\\sim 10^{2}\\,\\text{m}$ (about $330\\,\\text{m}$), Everest $\\sim 10^{4}\\,\\text{m}$ ($8.8\\,\\text{km}$), Earth–Moon $\\sim 10^{8}\\,\\text{m}$ ($3.8 \\times 10^{8}\\,\\text{m}$). Thinking in powers of ten turns a vague ranking into a quick, confident one.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A long open-world game takes $40$ hours to finish, and it renders a steady $60$ frames per second. How many frames are drawn in one playthrough? Give 3 significant figures (you may type scientific notation such as `1.23e6`).',
      hint: 'Convert the hours to seconds first: $1\\,\\text{h} = 3600\\,\\text{s}$.',
      answer: '40*3600*60',
      answerTex: '8.64 \\times 10^{6}\\ \\text{frames}',
      tolerance: 50000,
      unit: 'frames',
      label: '$N =$',
      explanation: '$N = 40\\,\\text{h} \\times 3600\\,\\tfrac{\\text{s}}{\\text{h}} \\times 60\\,\\tfrac{\\text{frames}}{\\text{s}} = 8.64 \\times 10^{6}$ frames. The hours and seconds cancel, leaving a pure count. A quick estimate agrees: $40 \\times 4000 \\times 60 \\approx 10^{7}$. Forgetting the factor of 3600 would give 2400, an obviously tiny number of frames for 40 hours.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Without a calculator, which is closest to the number of seconds in a year?',
      options: [
        { text: '$9 \\times 10^{3}$', why: 'That is about the number of **hours** in a year ($365 \\times 24 = 8760$). You still need two factors of 60.' },
        { text: '$5 \\times 10^{5}$', why: 'That is the number of **minutes** in a year ($525\\,600$). One factor of 60 is missing.' },
        { text: '$3 \\times 10^{7}$', correct: true, why: '$365 \\times 24 \\times 3600 = 3.15 \\times 10^{7}\\,\\text{s}$, close to $\\pi \\times 10^{7}$, a handy number to remember for estimates.' },
        { text: '$2 \\times 10^{9}$', why: 'That is the right size for heartbeats in a lifetime (or seconds in about 60 years), not seconds in one year.' },
      ],
      explanation: 'Chain the factors: $365\\,\\tfrac{\\text{d}}{\\text{yr}} \\times 24\\,\\tfrac{\\text{h}}{\\text{d}} \\times 60\\,\\tfrac{\\text{min}}{\\text{h}} \\times 60\\,\\tfrac{\\text{s}}{\\text{min}}$. In powers of ten: $\\approx 4 \\times 10^2 \\times 2.4 \\times 10^1 \\times 3.6 \\times 10^3 \\approx 3.5 \\times 10^{7}$, and the exact value is $3.15 \\times 10^{7}\\,\\text{s}$.',
    },
  ],
  takeaways: [
    'A physical quantity is a number times a unit. Mechanics builds every unit from the meter, kilogram and second.',
    'Convert with conversion factors equal to 1, arranged so units cancel. Divide km/h by $3.6$ for m/s; square or cube the factor for areas and volumes.',
    'Every term in a correct equation has the same dimension, and function arguments are dimensionless. A failed dimension check proves an equation wrong.',
    'Matching dimensions can predict scaling laws, such as $T \\propto \\sqrt{L/g}$ for a pendulum, but never the pure-number factors.',
    'Report results to the precision of the data (usually 3 significant figures here); floats have limited significant figures too, which is why big game worlds jitter.',
    'Fermi estimates chain rough factors to get the order of magnitude, and they sanity-check every careful calculation.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 1: Units and Measurement',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 1.2 to 1.6 cover SI units, conversion, dimensional analysis, estimates and significant figures with many worked examples.',
    },
    {
      title: 'Wikipedia: Dimensional analysis',
      url: 'https://en.wikipedia.org/wiki/Dimensional_analysis',
      source: 'wikipedia',
      note: 'More examples of predicting formulas from dimensions, plus the Buckingham π theorem that makes the method systematic.',
    },
    {
      title: 'Wikipedia: Fermi problem',
      url: 'https://en.wikipedia.org/wiki/Fermi_problem',
      source: 'wikipedia',
      note: 'Classic Fermi questions and why the method of chained rough factors works so well.',
    },
    {
      title: 'Wikipedia: Mars Climate Orbiter',
      url: 'https://en.wikipedia.org/wiki/Mars_Climate_Orbiter',
      source: 'wikipedia',
      note: 'The full story of the unit mismatch that destroyed a spacecraft.',
    },
  ],
};
