import type { Lesson } from '../../types';

const PULL_SVG = '<svg viewBox="0 0 470 200" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="150" x2="200" y2="150" stroke="currentColor" stroke-width="2"/><line x1="15" y1="150" x2="7" y2="158" class="s-gray" stroke-width="1"/><line x1="31" y1="150" x2="23" y2="158" class="s-gray" stroke-width="1"/><line x1="47" y1="150" x2="39" y2="158" class="s-gray" stroke-width="1"/><line x1="63" y1="150" x2="55" y2="158" class="s-gray" stroke-width="1"/><line x1="79" y1="150" x2="71" y2="158" class="s-gray" stroke-width="1"/><line x1="95" y1="150" x2="87" y2="158" class="s-gray" stroke-width="1"/><line x1="111" y1="150" x2="103" y2="158" class="s-gray" stroke-width="1"/><line x1="127" y1="150" x2="119" y2="158" class="s-gray" stroke-width="1"/><line x1="143" y1="150" x2="135" y2="158" class="s-gray" stroke-width="1"/><line x1="159" y1="150" x2="151" y2="158" class="s-gray" stroke-width="1"/><line x1="175" y1="150" x2="167" y2="158" class="s-gray" stroke-width="1"/><line x1="191" y1="150" x2="183" y2="158" class="s-gray" stroke-width="1"/><rect x="50" y="105" width="60" height="45" class="f-blue" opacity="0.15"/><rect x="50" y="105" width="60" height="45" fill="none" class="s-blue" stroke-width="2"/><text x="80" y="132" font-size="11" text-anchor="middle">crate</text><line x1="110" y1="118" x2="179.3" y2="78" stroke="currentColor" stroke-width="1.8"/><text x="183.3" y="74" font-size="11" text-anchor="start">rope</text><line x1="110" y1="118" x2="175" y2="118" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><path d="M140 118 A 30 30 0 0 0 136 103" fill="none" class="s-gray" stroke-width="1.2"/><text x="150" y="112" font-size="12" text-anchor="start">θ</text><text x="320" y="22" font-size="12" text-anchor="middle" class="t-gray">free-body diagram</text><line x1="320" y1="105" x2="320" y2="67.6" class="s-green" stroke-width="2.6"/><path d="M320 58.6 L324.5 67.6 L315.5 67.6 Z" class="f-green"/><text x="328" y="66.6" font-size="14" text-anchor="start" class="t-green" font-style="italic">n</text><line x1="320" y1="105" x2="320" y2="174.4" class="s-purple" stroke-width="2.6"/><path d="M320 183.4 L315.5 174.4 L324.5 174.4 Z" class="f-purple"/><text x="328" y="181.4" font-size="14" text-anchor="start" class="t-purple" font-style="italic">mg</text><line x1="320" y1="105" x2="367.6" y2="77.5" class="s-red" stroke-width="2.6"/><path d="M375.4 73 L369.9 81.4 L365.4 73.6 Z" class="f-red"/><text x="379.4" y="71" font-size="14" text-anchor="start" class="t-red" font-style="italic">T</text><line x1="320" y1="105" x2="390" y2="105" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><path d="M346 105 A 26 26 0 0 0 342.5 92" fill="none" class="s-gray" stroke-width="1.2"/><text x="350" y="101" font-size="12" text-anchor="start">θ</text><circle cx="320" cy="105" r="5" fill="currentColor"/><line x1="430" y1="165" x2="463" y2="165" class="s-gray" stroke-width="1.6"/><path d="M470 165 L463 168.5 L463 161.5 Z" class="f-gray"/><text x="450" y="181" font-size="12" text-anchor="middle" font-style="italic">x</text><line x1="430" y1="165" x2="430" y2="132" class="s-gray" stroke-width="1.6"/><path d="M430 125 L433.5 132 L426.5 132 Z" class="f-gray"/><text x="420" y="131" font-size="12" text-anchor="middle" font-style="italic">y</text></svg>';
const INCLINE_SVG = '<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg"><path d="M30 200 L321.4 200 L321.4 45.1 Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M75 200 A 45 45 0 0 0 69.7 178.9" fill="none" class="s-gray" stroke-width="1.3"/><text x="82" y="192" font-size="13" text-anchor="start">θ</text><path d="M175.7 122.5 L219.8 99.1 L204.8 70.8 L160.7 94.3 Z" class="f-blue" opacity="0.15"/><path d="M175.7 122.5 L219.8 99.1 L204.8 70.8 L160.7 94.3 Z" fill="none" class="s-blue" stroke-width="2"/><line x1="190.2" y1="96.7" x2="190.2" y2="182.7" class="s-purple" stroke-width="2.8"/><path d="M190.2 191.7 L185.7 182.7 L194.7 182.7 Z" class="f-purple"/><text x="196.2" y="193.7" font-size="14" text-anchor="start" class="t-purple" font-style="italic">mg</text><line x1="190.2" y1="96.7" x2="155.1" y2="30.6" class="s-green" stroke-width="2.8"/><path d="M150.9 22.6 L159.1 28.4 L151.1 32.7 Z" class="f-green"/><text x="144.9" y="18.6" font-size="14" text-anchor="end" class="t-green" font-style="italic">n</text><line x1="190.2" y1="96.7" x2="157.9" y2="113.9" class="s-purple" stroke-width="1.8" stroke-dasharray="5 3"/><path d="M150.9 117.6 L156.1 110.3 L159.8 117.4 Z" class="f-purple"/><text x="142.9" y="133.6" font-size="12" text-anchor="end" class="t-purple">mg sin θ</text><line x1="190.2" y1="96.7" x2="225.9" y2="163.7" class="s-purple" stroke-width="1.8" stroke-dasharray="5 3"/><path d="M229.6 170.7 L222.3 165.5 L229.4 161.8 Z" class="f-purple"/><text x="237.6" y="174.7" font-size="12" text-anchor="start" class="t-purple">mg cos θ</text><line x1="150.9" y1="117.6" x2="190.2" y2="191.7" class="s-gray" stroke-width="1" stroke-dasharray="2 3"/><line x1="229.6" y1="170.7" x2="190.2" y2="191.7" class="s-gray" stroke-width="1" stroke-dasharray="2 3"/><text x="193.2" y="134.7" font-size="11" text-anchor="start">θ</text><line x1="75" y1="70" x2="117.4" y2="47.5" class="s-gray" stroke-width="1.6"/><path d="M123.6 44.2 L119 50.6 L115.7 44.4 Z" class="f-gray"/><text x="127.6" y="44.2" font-size="12" text-anchor="start" font-style="italic">x</text><line x1="75" y1="70" x2="52.5" y2="27.6" class="s-gray" stroke-width="1.6"/><path d="M49.2 21.4 L55.6 26 L49.4 29.3 Z" class="f-gray"/><text x="45.2" y="21.4" font-size="12" text-anchor="end" font-style="italic">y</text><text x="85" y="100" font-size="11" text-anchor="start" class="t-gray">tilted axes</text></svg>';
const ATWOOD_SVG = '<svg viewBox="0 0 440 236" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="14" x2="160" y2="14" stroke="currentColor" stroke-width="3"/><line x1="110" y1="14" x2="110" y2="50" stroke="currentColor" stroke-width="2"/><circle cx="110" cy="50" r="26" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="110" cy="50" r="3" fill="currentColor"/><line x1="84" y1="50" x2="84" y2="150" stroke="currentColor" stroke-width="1.6"/><line x1="136" y1="50" x2="136" y2="110" stroke="currentColor" stroke-width="1.6"/><rect x="62" y="150" width="44" height="44" class="f-blue" opacity="0.15"/><rect x="62" y="150" width="44" height="44" fill="none" class="s-blue" stroke-width="2"/><text x="84" y="177" font-size="13" text-anchor="middle">m₁</text><rect x="119" y="110" width="34" height="34" class="f-green" opacity="0.15"/><rect x="119" y="110" width="34" height="34" fill="none" class="s-green" stroke-width="2"/><text x="136" y="132" font-size="13" text-anchor="middle">m₂</text><line x1="48" y1="170" x2="48" y2="193" class="s-gray" stroke-width="1.6"/><path d="M48 200 L44.5 193 L51.5 193 Z" class="f-gray"/><text x="42" y="192" font-size="12" text-anchor="end" font-style="italic">a</text><line x1="166" y1="140" x2="166" y2="117" class="s-gray" stroke-width="1.6"/><path d="M166 110 L169.5 117 L162.5 117 Z" class="f-gray"/><text x="172" y="122" font-size="12" text-anchor="start" font-style="italic">a</text><text x="110" y="226" font-size="12" text-anchor="middle" class="t-gray">m₁ > m₂</text><line x1="275" y1="118" x2="275" y2="86.2" class="s-red" stroke-width="2.6"/><path d="M275 77.2 L279.5 86.2 L270.5 86.2 Z" class="f-red"/><text x="283" y="87.2" font-size="14" text-anchor="start" class="t-red" font-style="italic">T</text><line x1="275" y1="118" x2="275" y2="160" class="s-purple" stroke-width="2.6"/><path d="M275 169 L270.5 160 L279.5 160 Z" class="f-purple"/><text x="283" y="167" font-size="14" text-anchor="start" class="t-purple" font-style="italic">m₁g</text><circle cx="275" cy="118" r="6" class="f-blue"/><text x="263" y="123" font-size="12" text-anchor="end">m₁</text><line x1="375" y1="118" x2="375" y2="86.2" class="s-red" stroke-width="2.6"/><path d="M375 77.2 L379.5 86.2 L370.5 86.2 Z" class="f-red"/><text x="383" y="87.2" font-size="14" text-anchor="start" class="t-red" font-style="italic">T</text><line x1="375" y1="118" x2="375" y2="143" class="s-purple" stroke-width="2.6"/><path d="M375 152 L370.5 143 L379.5 143 Z" class="f-purple"/><text x="383" y="150" font-size="14" text-anchor="start" class="t-purple" font-style="italic">m₂g</text><circle cx="375" cy="118" r="6" class="f-green"/><text x="363" y="123" font-size="12" text-anchor="end">m₂</text><text x="325" y="22" font-size="12" text-anchor="middle" class="t-gray">free-body diagrams</text><text x="275" y="226" font-size="10" text-anchor="middle" class="t-gray">T < m₁g: net force down</text><text x="380" y="226" font-size="10" text-anchor="middle" class="t-gray">T > m₂g: net up</text></svg>';
const TABLE_SVG = '<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg"><path d="M10 90 L250 90 L250 250" fill="none" stroke="currentColor" stroke-width="2.4"/><line x1="250" y1="90" x2="262" y2="83" stroke="currentColor" stroke-width="2"/><circle cx="262" cy="83" r="13" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="262" cy="83" r="2.5" fill="currentColor"/><rect x="90" y="50" width="60" height="40" class="f-blue" opacity="0.15"/><rect x="90" y="50" width="60" height="40" fill="none" class="s-blue" stroke-width="2"/><text x="120" y="74" font-size="13" text-anchor="middle">m₁</text><line x1="150" y1="70" x2="262" y2="70" stroke="currentColor" stroke-width="1.6"/><line x1="275" y1="83" x2="275" y2="160" stroke="currentColor" stroke-width="1.6"/><rect x="257" y="160" width="36" height="36" class="f-green" opacity="0.15"/><rect x="257" y="160" width="36" height="36" fill="none" class="s-green" stroke-width="2"/><text x="275" y="183" font-size="13" text-anchor="middle">m₂</text><text x="60" y="110" font-size="11" text-anchor="start" class="t-gray">frictionless table</text><line x1="100" y1="34" x2="133" y2="34" class="s-gray" stroke-width="1.6"/><path d="M140 34 L133 37.5 L133 30.5 Z" class="f-gray"/><text x="120" y="28" font-size="12" text-anchor="middle" font-style="italic">a</text><line x1="305" y1="165" x2="305" y2="193" class="s-gray" stroke-width="1.6"/><path d="M305 200 L301.5 193 L308.5 193 Z" class="f-gray"/><text x="311" y="190" font-size="12" text-anchor="start" font-style="italic">a</text><text x="20" y="128" font-size="12" text-anchor="start" class="t-gray">free-body diagrams</text><line x1="80" y1="190" x2="80" y2="140.2" class="s-green" stroke-width="2.4"/><path d="M80 131.2 L84.5 140.2 L75.5 140.2 Z" class="f-green"/><text x="88" y="139.2" font-size="13" text-anchor="start" class="t-green" font-style="italic">n</text><line x1="80" y1="190" x2="80" y2="239.8" class="s-purple" stroke-width="2.4"/><path d="M80 248.8 L75.5 239.8 L84.5 239.8 Z" class="f-purple"/><text x="88" y="248.8" font-size="13" text-anchor="start" class="t-purple" font-style="italic">m₁g</text><line x1="80" y1="190" x2="94.5" y2="190" class="s-red" stroke-width="2.4"/><path d="M103.5 190 L94.5 194.5 L94.5 185.5 Z" class="f-red"/><text x="107.5" y="195" font-size="13" text-anchor="start" class="t-red" font-style="italic">T</text><circle cx="80" cy="190" r="5.5" class="f-blue"/><line x1="195" y1="190" x2="195" y2="175.5" class="s-red" stroke-width="2.4"/><path d="M195 166.5 L199.5 175.5 L190.5 175.5 Z" class="f-red"/><text x="203" y="174.5" font-size="13" text-anchor="start" class="t-red" font-style="italic">T</text><line x1="195" y1="190" x2="195" y2="220.2" class="s-purple" stroke-width="2.4"/><path d="M195 229.2 L190.5 220.2 L199.5 220.2 Z" class="f-purple"/><text x="203" y="229.2" font-size="13" text-anchor="start" class="t-purple" font-style="italic">m₂g</text><circle cx="195" cy="190" r="5.5" class="f-green"/></svg>';

// Incline graph: slope rising to the right, length 10 m, angle a (degrees). Block slides from the top.
const TH = '(a*pi/180)';
const TB = `sqrt(20/(9.8sin${TH}))`; // time to reach the bottom
const DM = `(4.9sin${TH}*min(s, ${TB})^2)`; // distance slid from the top
const BXI = `((10 - ${DM})*cos${TH})`;
const BYI = `((10 - ${DM})*sin${TH})`;

// Atwood graph: masses p (left) and q (right), kg. Acceleration of the left mass downward: A.
const AA = '((p - q)*9.8/(p + q))';
const AM = `min(s, sqrt(8/abs(${AA})))`;
const Y1 = `(5 - 0.5*${AA}*${AM}^2)`;
const Y2 = `(5 + 0.5*${AA}*${AM}^2)`;
const TT = '(2p*q*9.8/(p + q))';

// Elevator: accelerate up at 2 m/s^2 for 2 s, cruise at 4 m/s, brake at 2 m/s^2 from t = 6 s to 8 s.
const VEL = '(2min(x, 2) - 2max(x - 6, 0))';
const ACC = '(sign(2 - x) - sign(x - 6))';

export const lesson: Lesson = {
  id: 'phys-free-body-diagrams',
  title: 'Free-Body Diagrams in Action',
  summary: 'The free-body diagram as a systematic tool: normal forces that are not $mg$, inclines with tilted axes, ropes and pulleys, Atwood machines and connected objects, elevators and apparent weight, and how a game\'s character controller does the same decomposition with dot products.',
  minutes: 21,
  objectives: [
    'Draw a correct free-body diagram for any object: one force per contact plus weight, nothing else',
    'Find the normal force from the second law instead of assuming $n = mg$',
    'Solve incline problems with axes tilted along the slope',
    'Analyze ropes, ideal pulleys, Atwood machines and connected objects with one free-body diagram per object',
    'Compute apparent weight in an accelerating elevator and explain weightlessness',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Drawing a free-body diagram, systematically',
      blocks: [
        {
          type: 'p',
          text: 'A [[phys-free-body-diagram|free-body diagram]] (FBD) isolates one object and shows every force acting **on** it. Almost every error in dynamics is a missing, extra or misdirected arrow, so build the diagram with a fixed routine rather than by intuition. In this lesson $n$ is the [[phys-normal-force|normal force]] and $T$ is [[phys-tension|tension]].',
        },
        {
          type: 'steps',
          items: [
            { title: 'Isolate the object', text: 'Draw it alone, as a dot (particle model) or a simple box. Everything else is the environment.' },
            { title: 'Walk around its boundary', text: 'Every point where something touches it contributes a contact force: a surface gives a normal force (and maybe friction), a rope gives tension along the rope, a hand gives a push.' },
            { title: 'Add long-range forces', text: 'Near Earth that means the weight $mg$, straight down.' },
            { title: 'Draw axes', text: 'Choose them so that the acceleration lies along one axis whenever possible.' },
            { title: 'Leave things out', text: 'No velocity arrows, no $m\\vec{a}$, no forces the object exerts on others, no "force of motion".' },
          ],
        },
        {
          type: 'figure',
          svg: PULL_SVG,
          alt: 'Left: a crate on a floor pulled by a rope at angle theta above the horizontal. Right: its free-body diagram as a dot with a green normal force n pointing up, a purple weight mg pointing down which is longer than n, and a red tension T at angle theta above horizontal, with x and y axes.',
          caption: 'Three contacts and long-range forces: the floor (normal force; friction too, if the floor is rough), the rope (tension) and the Earth (weight). The normal force is shorter than $mg$: the rope supplies part of the upward support.',
          maxWidth: 470,
        },
        {
          type: 'derivation',
          title: 'Pulling a $20\\,\\text{kg}$ crate with $80\\,\\text{N}$ at $30^\\circ$ (frictionless floor)',
          steps: [
            { tex: '\\sum F_y = n + T\\sin 30^\\circ - mg = 0', why: 'The crate does not leave the floor or sink into it, so $a_y = 0$.' },
            { tex: 'n = mg - T\\sin 30^\\circ = 196 - 40 = 156\\,\\text{N}', why: 'Solve for $n$ with $g = 9.80\\,\\text{m/s}^2$. **Not** $mg = 196\\,\\text{N}$.' },
            { tex: '\\sum F_x = T\\cos 30^\\circ = m a_x \\implies a_x = \\frac{69.3}{20} = 3.46\\,\\text{m/s}^2', why: 'Only the horizontal component of the rope force accelerates the crate.' },
          ],
          result: 'The normal force is whatever the second law requires, here $156\\,\\text{N}$. Pushing **down** at an angle instead would make $n$ larger than $mg$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Misconception: "the normal force equals $mg$"',
          text: '$n = mg$ only when the surface is horizontal, nothing else pushes or pulls vertically, and there is no vertical acceleration. A surface pushes back exactly as hard as needed to stop the object from moving into it, no more. Always get $n$ from $\\sum F_\\perp = m a_\\perp$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'You pull a sled across level snow with a rope angled $25^\\circ$ above the horizontal. Compared with the sled\'s weight $mg$, the normal force from the snow is:',
      options: [
        { text: 'Equal to $mg$, because the snow is level', why: 'Level ground gives $n = mg$ only when no other force has a vertical component. The rope pulls partly upward.' },
        { text: 'Less than $mg$', correct: true, why: '$n + T\\sin 25^\\circ - mg = 0$, so $n = mg - T\\sin 25^\\circ < mg$: the rope carries part of the weight.' },
        { text: 'Greater than $mg$, because the rope adds to the load', why: 'That would be true for a push angled **downward**. A rope can only pull, and here it pulls up and forward.' },
        { text: 'Zero, because the sled is moving', why: 'Motion along the surface does not change the vertical balance; the snow still pushes up.' },
      ],
      explanation: 'Write the vertical component of the second law. The sled has no vertical acceleration, so the upward forces ($n$ and $T\\sin 25^\\circ$) balance the weight, giving $n = mg - T\\sin 25^\\circ$. This matters as soon as friction appears, since $f_k = \\mu_k n$: pulling upward at an angle reduces friction.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Inclines: tilt the axes',
      blocks: [
        {
          type: 'p',
          text: 'A block on a ramp accelerates **along** the ramp. If you use horizontal and vertical axes, both components of $\\vec{a}$ are nonzero and the normal force has two components too. Tilt the axes instead: $x$ along the slope, $y$ perpendicular to it. Then $a_y = 0$ and only the weight needs to be split.',
        },
        {
          type: 'figure',
          svg: INCLINE_SVG,
          alt: 'A block on a ramp inclined at angle theta. From the block: a purple weight mg straight down, a green normal force n perpendicular to the ramp, and dashed purple components mg sin theta down the slope and mg cos theta into the slope. Tilted x and y axes are shown, with x along the slope.',
          caption: 'The angle between $m\\vec{g}$ and the perpendicular to the slope equals the ramp angle $\\theta$ (their sides are mutually perpendicular). So the weight splits into $mg\\sin\\theta$ down the slope and $mg\\cos\\theta$ into it.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'A frictionless incline',
          steps: [
            { tex: '\\sum F_y = n - mg\\cos\\theta = 0 \\implies n = mg\\cos\\theta', why: 'No acceleration perpendicular to the surface.' },
            { tex: '\\sum F_x = mg\\sin\\theta = m a_x \\implies a_x = g\\sin\\theta', why: 'Taking $+x$ down the slope; the normal force has no component along it.' },
            { tex: '\\theta \\to 0: a \\to 0,\\ n \\to mg; \\qquad \\theta \\to 90^\\circ: a \\to g,\\ n \\to 0', why: 'Limiting cases: a flat floor and free fall down a vertical wall. Both make sense, which is a good sign that sine and cosine are in the right places.' },
          ],
          result: 'The mass cancels again: every frictionless block slides down a $25^\\circ$ ramp at $g\\sin 25^\\circ = 4.14\\,\\text{m/s}^2$.',
        },
        {
          type: 'graph',
          x: [-2, 11],
          y: [-1, 9.5],
          equal: true,
          segments: [
            { from: [0, 0], to: [`10cos${TH}`, 0], color: 'gray' },
            { from: [`10cos${TH}`, 0], to: [`10cos${TH}`, `10sin${TH}`], color: 'gray' },
            { from: [0, 0], to: [`10cos${TH}`, `10sin${TH}`], color: 'gray' },
            { from: [BXI, BYI], to: [BXI, `${BYI} - 3`], color: 'purple', arrow: true, label: 'mg' },
            { from: [BXI, BYI], to: [`${BXI} - 3cos${TH}*sin${TH}`, `${BYI} + 3cos${TH}^2`], color: 'green', arrow: true, label: 'n' },
            { from: [BXI, BYI], to: [`${BXI} - 3sin${TH}*cos${TH}`, `${BYI} - 3sin${TH}^2`], color: 'red', arrow: true, label: 'net' },
          ],
          points: [{ x: BXI, y: BYI, color: 'blue' }],
          sliders: [
            { name: 'a', min: 5, max: 60, step: 1, value: 25, label: 'ramp angle $\\theta$ (°)' },
            { name: 's', min: 0, max: 4.5, step: 0.02, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: '$a = g\\sin\\theta$ (m/s²):', expr: `9.8sin${TH}` },
            { label: '$n/mg = \\cos\\theta$:', expr: `cos${TH}` },
            { label: 'time to slide $10\\,\\text{m}$ (s):', expr: TB },
          ],
          caption: 'Frictionless $10\\,\\text{m}$ ramp. Forces are drawn as multiples of $mg$ ($3\\,\\text{m}$ per $mg$): weight, normal force, and their vector sum (red), which points straight down the slope with size $mg\\sin\\theta$. Steepen the ramp: $n$ shrinks, the net force grows, and the block reaches the bottom sooner.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A crate is released from rest on a frictionless ramp inclined at $25.0^\\circ$. How fast is it moving after sliding $4.00\\,\\text{m}$ along the ramp? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'First $a = g\\sin\\theta$ along the ramp, then the constant-acceleration relation $v^2 = v_0^2 + 2a\\,\\Delta x$.',
      label: '$v =$',
      unit: 'm/s',
      answer: 'sqrt(2*9.8*sin(25pi/180)*4)',
      answerTex: '\\sqrt{2(9.80\\sin 25.0^\\circ)(4.00)} \\approx 5.76',
      tolerance: 0.05,
      explanation: '$a = 9.80\\sin 25.0^\\circ = 4.14\\,\\text{m/s}^2$ down the slope, so $v = \\sqrt{2(4.14)(4.00)} = \\sqrt{33.1} \\approx 5.76\\,\\text{m/s}$. Using $\\cos 25^\\circ$ (the perpendicular component) gives $8.43\\,\\text{m/s}$; check with a limiting case: a nearly flat ramp must give a small speed, which only $\\sin$ does.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Ropes, pulleys and the Atwood machine',
      blocks: [
        {
          type: 'p',
          text: 'A rope pulls along its own length, away from the object, and can never push. In the **ideal** model the rope is massless and does not stretch, and pulleys are massless and frictionless. Then the tension is the same all along the rope, a pulley only changes the rope\'s direction, and objects tied together have accelerations of equal size. The classic test case is the [[phys-atwood-machine|Atwood machine]]: two masses hung over one pulley.',
        },
        {
          type: 'figure',
          svg: ATWOOD_SVG,
          alt: 'An Atwood machine: a pulley hanging from a ceiling, with a heavier blue mass m1 on the left accelerating down and a lighter green mass m2 on the right accelerating up. To the right, free-body diagrams: each mass is a dot with a red tension T upward; m1 has a longer purple weight m1 g downward, m2 a shorter weight m2 g downward.',
          caption: 'The same $T$ acts on both masses. For $m_1$ the weight wins, for $m_2$ the tension wins: neither mass is in equilibrium, so $T$ is neither $m_1g$ nor $m_2g$.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'The Atwood machine',
          steps: [
            { tex: 'm_1:\\ m_1 g - T = m_1 a', why: 'Take "down" as positive for $m_1$, which accelerates downward when $m_1 > m_2$.' },
            { tex: 'm_2:\\ T - m_2 g = m_2 a', why: 'Take "up" as positive for $m_2$. The rope links them: when $m_1$ goes down by $d$, $m_2$ goes up by $d$, so the accelerations have the same size $a$.' },
            { tex: '(m_1 - m_2)\\,g = (m_1 + m_2)\\,a \\implies a = \\frac{m_1 - m_2}{m_1 + m_2}\\,g', why: 'Add the equations: the tension cancels.' },
            { tex: 'T = m_2(g + a) = \\frac{2m_1 m_2}{m_1 + m_2}\\,g', why: 'Substitute back into the $m_2$ equation and simplify.' },
          ],
          result: 'For $m_1 = 3.0\\,\\text{kg}$ and $m_2 = 2.0\\,\\text{kg}$: $a = 1.96\\,\\text{m/s}^2$ and $T = 23.5\\,\\text{N}$, between $m_2g = 19.6\\,\\text{N}$ and $m_1g = 29.4\\,\\text{N}$, as it must be.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [0, 11.5],
          equal: true,
          parametric: [{ x: 'cos(t)', y: '10 + sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [-1, 10], to: [-1, Y1], color: 'gray' },
            { from: [1, 10], to: [1, Y2], color: 'gray' },
            { from: [-1.8, Y1], to: [-1.8, `${Y1} + 0.08${TT}`], color: 'red', arrow: true, label: 'T' },
            { from: [-1.8, Y1], to: [-1.8, `${Y1} - 0.08p*9.8`], color: 'purple', arrow: true },
            { from: [1.8, Y2], to: [1.8, `${Y2} + 0.08${TT}`], color: 'red', arrow: true, label: 'T' },
            { from: [1.8, Y2], to: [1.8, `${Y2} - 0.08q*9.8`], color: 'purple', arrow: true },
          ],
          points: [
            { x: -1, y: Y1, color: 'blue', label: 'm₁' },
            { x: 1, y: Y2, color: 'green', label: 'm₂' },
          ],
          sliders: [
            { name: 'p', min: 0.5, max: 5, step: 0.1, value: 3, label: '$m_1$ (kg)' },
            { name: 'q', min: 0.5, max: 5, step: 0.1, value: 2, label: '$m_2$ (kg)' },
            { name: 's', min: 0, max: 3, step: 0.01, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: '$a$ of $m_1$, down (m/s²):', expr: AA },
            { label: '$T$ (N):', expr: TT },
            { label: '$m_1 g$ (N):', expr: '9.8p' },
            { label: '$m_2 g$ (N):', expr: '9.8q' },
          ],
          caption: 'Press ▶ (meters; forces at $0.08\\,\\text{m}$ per N, red tension and purple weight beside each mass). Make the masses nearly equal and the motion becomes slow, which is why George Atwood built this in 1784: to slow free fall down enough to time it. Set $m_2$ very small: $a \\to g$ and $T \\to 0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'An Atwood machine holds a heavier mass $M$ and a lighter mass $m$ over an ideal pulley. Write the magnitude of their acceleration in terms of $M$, $m$ and $g$.',
      hint: 'Write the second law for each mass with "positive" in its own direction of motion, then add the two equations.',
      label: '$a =$',
      answer: '(M - m)*g/(M + m)',
      answerTex: 'a = \\frac{M - m}{M + m}\\,g',
      variables: ['M', 'm', 'g'],
      domain: [1, 3],
      explanation: '$Mg - T = Ma$ and $T - mg = ma$; adding eliminates $T$: $(M - m)g = (M + m)a$. Check the limits: $M = m$ gives $a = 0$ (balanced), and $m \\to 0$ gives $a \\to g$ (the heavy mass falls freely). The answer depends on the **difference** of the weights driving the motion and the **total** mass being accelerated.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Connected objects: one diagram per object',
      blocks: [
        {
          type: 'p',
          text: 'When several objects are linked by ropes or contact, draw a separate free-body diagram for each, write the second law for each, and add **constraint** equations from the rope (equal accelerations along it). Count: you need as many equations as unknowns.',
        },
        {
          type: 'figure',
          svg: TABLE_SVG,
          alt: 'A blue block m1 on a frictionless horizontal table, attached by a horizontal rope over a pulley at the table edge to a green mass m2 hanging below. m1 accelerates to the right, m2 downward. Free-body diagrams: m1 has an upward n, a downward m1 g of the same length, and a short tension T to the right. m2 has a short upward T and a longer downward m2 g.',
          caption: 'The rope tension pulls $m_1$ horizontally and $m_2$ vertically; the pulley just turns the direction.',
          maxWidth: 380,
        },
        {
          type: 'derivation',
          title: 'Block on a frictionless table, pulled by a hanging mass',
          steps: [
            { tex: 'm_1:\\ T = m_1 a, \\qquad n = m_1 g', why: 'Horizontal and vertical components for the block on the table.' },
            { tex: 'm_2:\\ m_2 g - T = m_2 a', why: 'Downward positive for the hanging mass. Same $a$ because the rope does not stretch.' },
            { tex: 'a = \\frac{m_2}{m_1 + m_2}\\,g, \\qquad T = \\frac{m_1 m_2}{m_1 + m_2}\\,g', why: 'Add the two horizontal/vertical equations to eliminate $T$, then substitute back.' },
            { tex: 'm_1 = 3.0,\\ m_2 = 2.0\\,\\text{kg}: \\quad a = 3.92\\,\\text{m/s}^2, \\quad T = 11.8\\,\\text{N}', why: 'Numbers with $g = 9.80\\,\\text{m/s}^2$. Note $T < m_2 g = 19.6\\,\\text{N}$.' },
          ],
          result: 'The **system** shortcut gives $a$ at once: along the rope, the only external driving force is $m_2 g$, and it accelerates the total mass $m_1 + m_2$. Tensions are internal to the system and cancel.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the tension is less than the hanging weight',
          text: 'If $T$ equalled $m_2 g$, the net force on the hanging mass would be zero and it could not accelerate. It is accelerating downward, so the upward tension must be smaller than its weight. Tension equals the hanging weight only when everything is at rest or moving at constant velocity. "The rope holds up the weight, so $T = mg$" is a habit worth breaking.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A $4.0\\,\\text{kg}$ block on a frictionless table is tied over a pulley to a hanging $1.0\\,\\text{kg}$ mass. A student finds the acceleration ($g = 9.80\\,\\text{m/s}^2$). Tap the first wrong line.',
      lines: [
        'Block on table: $T = (4.0)a$',
        'Hanging mass: the rope holds it up, so $T = (1.0)(9.80) = 9.80$ N',
        'Then $a = T/4.0 = 9.80/4.0 = 2.45$ m/s²',
        'The hanging mass therefore accelerates down at $2.45$ m/s² too.',
      ],
      errorLines: [2],
      explanation: 'The hanging mass accelerates, so $T \\ne mg$. Its equation is $(1.0)(9.80) - T = (1.0)a$. Combined with $T = 4.0a$: $9.80 = 5.0a$, so $a = 1.96\\,\\text{m/s}^2$ and $T = 7.84\\,\\text{N}$. Line 4 even contradicts line 2: a mass with $T = mg$ would have zero net force and could not accelerate at $2.45\\,\\text{m/s}^2$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Elevators and apparent weight',
      blocks: [
        {
          type: 'p',
          text: 'You never feel your weight directly; you feel the floor (or a seat, or a scale) pushing up on you. A bathroom scale measures that normal force, your [[phys-apparent-weight|apparent weight]]. In an elevator it changes, and the second law says exactly how.',
        },
        {
          type: 'derivation',
          title: 'A $70\\,\\text{kg}$ soldier on a scale in an elevator',
          steps: [
            { tex: '\\sum F_y = n - mg = m a_y \\implies n = m(g + a_y)', why: 'Two forces on the person: the scale pushes up, the Earth pulls down. Up is positive.' },
            { tex: 'a_y = +2.0\\,\\text{m/s}^2: \\quad n = 70(11.8) = 826\\,\\text{N}', why: 'Speeding up while going up, **or** slowing down while going down: the acceleration points up and you feel heavier.' },
            { tex: 'a_y = 0: \\quad n = 70(9.80) = 686\\,\\text{N}', why: 'Constant velocity, up or down or at rest: the scale reads the true weight.' },
            { tex: 'a_y = -2.0\\,\\text{m/s}^2: \\quad n = 70(7.80) = 546\\,\\text{N}', why: 'Slowing down while going up, or speeding up while going down: you feel lighter.' },
          ],
          result: 'Apparent weight depends on the **acceleration**, never on the velocity. If the cable snapped ($a_y = -g$), $n = 0$: apparent weightlessness, even though gravity is pulling as hard as ever.',
        },
        {
          type: 'graph',
          x: [0, 8],
          y: [-3, 5],
          height: 260,
          functions: [
            { expr: VEL, color: 'blue', label: 'velocity $v_y(t)$ (m/s)' },
            { expr: ACC, color: 'red', dashed: true, label: 'acceleration $a_y(t)$ (m/s²)' },
          ],
          vlines: [{ x: 's', color: 'gray' }],
          points: [{ x: 's', y: '2min(s, 2) - 2max(s - 6, 0)', color: 'blue' }],
          sliders: [{ name: 's', min: 0, max: 8, step: 0.02, value: 1, label: 'time $t$ (s)', play: true }],
          readouts: [
            { label: '$a_y$ (m/s²):', expr: 'sign(2 - s) - sign(s - 6)' },
            { label: 'scale reading $n$ (N):', expr: '70(9.8 + sign(2 - s) - sign(s - 6))' },
            { label: 'scale "shows" $n/g$ (kg):', expr: '70(9.8 + sign(2 - s) - sign(s - 6))/9.8' },
          ],
          caption: 'An elevator ride upward: it speeds up for $2\\,\\text{s}$, cruises at $4\\,\\text{m/s}$, and brakes for the last $2\\,\\text{s}$. Press ▶ and watch the scale under a $70\\,\\text{kg}$ rider: $826\\,\\text{N}$, then $686\\,\\text{N}$ while moving fastest, then $546\\,\\text{N}$ while still moving **up**. Only the dashed acceleration curve matters.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Zero-g flights and astronauts',
          text: 'Reduced-gravity aircraft fly parabolic arcs, the same projectile parabolas as in the last unit, so that the plane and its passengers fall together with $a = g$: the floor exerts no force and everyone floats for about $20$ seconds. Astronauts in orbit are weightless for the same reason; the station and the crew are in continuous free fall around the Earth.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A $75.0\\,\\text{kg}$ person stands on a scale in an elevator that is moving **upward** but **slowing down** at $1.80\\,\\text{m/s}^2$. What does the scale read, in newtons? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Slowing down while moving up means the acceleration points down: $a_y = -1.80\\,\\text{m/s}^2$.',
      label: '$n =$',
      unit: 'N',
      answer: '75*(9.8 - 1.8)',
      answerTex: '75.0(9.80 - 1.80) = 600',
      tolerance: 4,
      explanation: '$n - mg = ma_y$ with $a_y = -1.80\\,\\text{m/s}^2$, so $n = 75.0(9.80 - 1.80) = 600\\,\\text{N}$. The person feels lighter even though the elevator is still going up. Using $+1.80$ (because the motion is upward) gives $870\\,\\text{N}$, the most common sign error: the direction of **acceleration**, not of velocity, decides.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'An elevator moves **downward** at a constant $3\\,\\text{m/s}$. How does the scale reading of a passenger compare with their true weight $mg$?',
      options: [
        { text: 'Less than $mg$, because the elevator is going down', why: 'Going down is about velocity. The scale responds to acceleration, which is zero here.' },
        { text: 'Equal to $mg$', correct: true, why: 'Constant velocity means $a_y = 0$, so $n - mg = 0$ and the scale reads the true weight.' },
        { text: 'More than $mg$, because the floor has to push harder to keep up', why: 'At constant velocity nothing needs to "keep up": the passenger and the floor move together with zero acceleration.' },
        { text: 'Zero, because the passenger is falling with the elevator', why: 'A reading of zero needs $a_y = -g$, free fall. A steady descent is not falling freely.' },
      ],
      explanation: 'By the first law, constant velocity means zero net force: $n = mg$. You feel lighter only during the moments the elevator speeds up on the way down (or slows down on the way up), when $\\vec{a}$ points down. Riding at constant speed in either direction feels exactly like standing still, which is the principle that inertial frames are indistinguishable.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Free-body diagrams inside a game engine',
      blocks: [
        {
          type: 'p',
          text: 'A character controller standing on terrain is a block on an incline. The engine does not know an angle $\\theta$; it gets the ground\'s unit normal $\\hat{N}$ from a raycast. The incline decomposition is then two [[dot-product|dot products]], with no trigonometry at all.',
        },
        {
          type: 'derivation',
          title: 'The incline decomposition with vectors',
          steps: [
            { tex: '\\vec{g}_\\perp = (\\vec{g}\\cdot\\hat{N})\\,\\hat{N}, \\qquad \\vec{g}_\\parallel = \\vec{g} - (\\vec{g}\\cdot\\hat{N})\\,\\hat{N}', why: 'Split gravity into its [[vector-projection|projection]] onto the normal and the part left over, which lies along the surface.' },
            { tex: 'n = -m\\,(\\vec{g}\\cdot\\hat{N}) = mg\\cos\\theta', why: 'The normal force cancels the perpendicular part, as long as $\\vec{g}\\cdot\\hat{N} < 0$ (the ground is below you). $\\vec{g}\\cdot\\hat{N} = -g\\cos\\theta$ because the angle between the normal and "up" equals the slope angle.' },
            { tex: '|\\vec{g}_\\parallel| = g\\sin\\theta', why: 'On a frictionless slope this is the sliding acceleration, matching the incline result.' },
          ],
          result: 'The same code works on any slope orientation in 3D, with `Vec3` in place of `Vec2`.',
        },
        {
          type: 'code',
          title: 'slope.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>
#include <numbers>

struct Vec2 {
    double x, y;
};
Vec2 operator-(Vec2 a, Vec2 b) { return {a.x - b.x, a.y - b.y}; }
Vec2 operator*(double s, Vec2 v) { return {s * v.x, s * v.y}; }
double dot(Vec2 a, Vec2 b) { return a.x * b.x + a.y * b.y; }
double length(Vec2 v) { return std::sqrt(dot(v, v)); }

int main() {
    const double mass = 80.0, maxSlopeDeg = 45.0;
    const Vec2 g{0.0, -9.8};
    constexpr double deg = std::numbers::pi / 180.0;
    for (double slopeDeg : {0.0, 20.0, 35.0, 50.0}) {
        // Unit normal of the ground, as a raycast would report it.
        Vec2 n{-std::sin(slopeDeg * deg), std::cos(slopeDeg * deg)};
        double gn = dot(g, n);                          // component of g along the normal (< 0)
        double normalForce = -mass * gn;                // n = m g cos(theta): cancels the normal part
        Vec2 gAlong = g - gn * n;                       // what is left points down the slope
        double angle = std::acos(n.y) / deg;            // angle between the normal and "up"
        std::printf("slope %4.1f deg: normal force %6.1f N, slide accel %5.2f m/s^2, %s\\n",
                    angle, normalForce, length(gAlong),
                    angle <= maxSlopeDeg ? "walkable" : "too steep: slide");
    }
}`,
          output: `slope  0.0 deg: normal force  784.0 N, slide accel  0.00 m/s^2, walkable
slope 20.0 deg: normal force  736.7 N, slide accel  3.35 m/s^2, walkable
slope 35.0 deg: normal force  642.2 N, slide accel  5.62 m/s^2, walkable
slope 50.0 deg: normal force  503.9 N, slide accel  7.51 m/s^2, too steep: slide`,
          annotations: [
            { lines: 20, text: 'A slope rising to the right by $\\theta$ has unit normal $(-\\sin\\theta, \\cos\\theta)$. In a real game this comes from the physics query, not from an angle.' },
            { lines: '21-23', text: 'The free-body diagram in vector form: $n = -m\\,\\vec{g}\\cdot\\hat{N}$ and $\\vec{g}_\\parallel = \\vec{g} - (\\vec{g}\\cdot\\hat{N})\\hat{N}$.' },
            { lines: 24, text: 'The slope angle is the angle between $\\hat{N}$ and straight up, $\\arccos(\\hat{N}\\cdot\\hat{\\jmath})$. Character controllers compare it with a "slope limit" (Unity\'s default is $45^\\circ$) to decide whether the character can stand there.' },
          ],
        },
        {
          type: 'p',
          text: 'Check the output against the formulas: $80 \\times 9.8\\cos 35^\\circ = 642.2\\,\\text{N}$ and $9.8\\sin 35^\\circ = 5.62\\,\\text{m/s}^2$. On walkable slopes the controller cancels $\\vec{g}_\\parallel$ (in effect, applying enough static friction) so the character does not creep downhill; on steep ones it lets the character slide, which is the next lesson\'s topic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Order the steps for finding the acceleration and tension of an Atwood machine.',
      lines: [
        'Draw a separate free-body diagram for each mass: tension up, weight down',
        'Choose a positive direction for each mass that follows the rope (down for the heavier, up for the lighter)',
        'Write $m_1 g - T = m_1 a$ and $T - m_2 g = m_2 a$ with the same $a$',
        'Add the equations to eliminate $T$ and solve for $a$',
        'Substitute $a$ back into either equation to find $T$',
      ],
      distractors: ['Set $T = m_1 g$ because the rope supports the heavier mass'],
      explanation: 'Diagrams, consistent sign conventions, one equation per object with the rope constraint (same $a$), then elimination. The distractor assumes equilibrium; with unequal masses both objects accelerate, and $T$ lies strictly between the two weights.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'In an Atwood machine with unequal masses (ideal rope and pulley), the tension in the rope equals the weight of the heavier mass.',
      answer: false,
      explanation: 'If $T = m_1 g$, the heavier mass would feel zero net force and could not accelerate downward. In fact $T = \\frac{2m_1m_2}{m_1 + m_2}g$, which is less than $m_1 g$ and greater than $m_2 g$ whenever $m_1 > m_2$. For $3.0\\,\\text{kg}$ and $2.0\\,\\text{kg}$: $T = 23.5\\,\\text{N}$, between $19.6\\,\\text{N}$ and $29.4\\,\\text{N}$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the facts.',
      template: 'On a frictionless incline the normal force is $n =$ ___ and the acceleration is ___. In an elevator, the scale reading depends on the elevator\'s ___.',
      blanks: [{ answers: ['$mg\\cos\\theta$'] }, { answers: ['$g\\sin\\theta$'] }, { answers: ['acceleration'] }],
      wordBank: ['$mg\\cos\\theta$', '$mg\\sin\\theta$', '$g\\sin\\theta$', '$g\\cos\\theta$', 'acceleration', 'velocity'],
      explanation: 'With axes along and perpendicular to the slope, the perpendicular balance gives $n = mg\\cos\\theta$ and the along-slope equation gives $a = g\\sin\\theta$ (check: a flat ramp gives $n = mg$ and $a = 0$). In the elevator $n = m(g + a_y)$: velocity does not appear.',
    },
  ],
  takeaways: [
    'Build every free-body diagram the same way: isolate the object, one force per contact, add weight, choose axes; no $m\\vec{a}$, no velocity arrows.',
    'The normal force is whatever $\\sum F_\\perp = ma_\\perp$ requires: $n = mg - T\\sin\\theta$ when pulled upward at an angle, $mg\\cos\\theta$ on an incline, $m(g + a_y)$ in an elevator.',
    'On inclines tilt the axes: $mg\\sin\\theta$ along the slope, $mg\\cos\\theta$ into it; check with $\\theta \\to 0$ and $\\theta \\to 90^\\circ$.',
    'Ideal ropes and pulleys: one tension throughout, equal accelerations along the rope. Atwood: $a = \\frac{m_1 - m_2}{m_1 + m_2}g$, $T = \\frac{2m_1m_2}{m_1 + m_2}g$; an accelerating hanging mass has $T \\ne mg$.',
    'Apparent weight depends on acceleration, not velocity; in free fall it is zero. In code, the incline decomposition is $n = -m\\,\\vec{g}\\cdot\\hat{N}$ and $\\vec{g}_\\parallel = \\vec{g} - (\\vec{g}\\cdot\\hat{N})\\hat{N}$.',
  ],
  reading: [
    {
      title: 'OpenStax — University Physics Volume 1, Sections 5.6 and 5.7 and Chapter 6',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Common forces, drawing free-body diagrams, and many solved incline, pulley and elevator problems.',
    },
    {
      title: 'Wikipedia — Free body diagram',
      url: 'https://en.wikipedia.org/wiki/Free_body_diagram',
      source: 'wikipedia',
      note: 'Conventions for drawing force diagrams and what to include or leave out.',
    },
    {
      title: 'Wikipedia — Atwood machine',
      url: 'https://en.wikipedia.org/wiki/Atwood_machine',
      source: 'wikipedia',
      note: 'The full derivation, including the corrections for a massive pulley and rope friction.',
    },
    {
      title: 'Khan Academy — Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The forces and Newton\'s laws unit has worked videos on inclines, pulleys and elevators.',
    },
  ],
};
