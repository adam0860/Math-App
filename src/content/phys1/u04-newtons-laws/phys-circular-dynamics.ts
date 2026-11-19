import type { Lesson } from '../../types';

const SOURCES_SVG = '<svg viewBox="0 35 430 190" xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="110" r="55" fill="none" class="s-teal" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="75" y1="110" x2="122.6" y2="82.5" stroke="currentColor" stroke-width="1.4"/><circle cx="75" cy="110" r="3" fill="currentColor"/><line x1="122.6" y1="82.5" x2="104.2" y2="93.1" class="s-red" stroke-width="2.6"/><path d="M96.4 97.6 L102 89.2 L106.5 97 Z" class="f-red"/><text x="116.6" y="106.5" font-size="13" text-anchor="middle" class="t-red" font-style="italic">T</text><line x1="122.6" y1="82.5" x2="110.1" y2="60.8" class="s-blue" stroke-width="2"/><path d="M105.6 53.1 L114 58.6 L106.2 63.1 Z" class="f-blue"/><text x="108.6" y="52.5" font-size="12" text-anchor="middle" class="t-blue" font-style="italic">v</text><circle cx="122.6" cy="82.5" r="6" class="f-blue"/><text x="75" y="200" font-size="12" text-anchor="middle">ball on a string</text><text x="75" y="216" font-size="11" text-anchor="middle" class="t-gray">(top view): tension</text><circle cx="215" cy="110" r="55" fill="none" class="s-teal" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="215" cy="110" r="3" fill="currentColor"/><rect x="262" y="96" width="16" height="28" rx="3" class="f-blue" opacity="0.25"/><rect x="262" y="96" width="16" height="28" rx="3" fill="none" class="s-blue" stroke-width="1.6"/><line x1="270" y1="110" x2="247" y2="110" class="s-orange" stroke-width="2.6"/><path d="M238 110 L247 105.5 L247 114.5 Z" class="f-orange"/><text x="250" y="102" font-size="13" text-anchor="middle" class="t-orange" font-style="italic">fₛ</text><line x1="284" y1="110" x2="284" y2="85" class="s-blue" stroke-width="2"/><path d="M284 76 L288.5 85 L279.5 85 Z" class="f-blue"/><text x="290" y="84" font-size="12" text-anchor="start" class="t-blue" font-style="italic">v</text><text x="215" y="200" font-size="12" text-anchor="middle">car on a flat curve</text><text x="215" y="216" font-size="11" text-anchor="middle" class="t-gray">(top view): static friction</text><circle cx="355" cy="110" r="55" fill="none" class="s-teal" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="355" cy="110" r="20" class="f-green" opacity="0.3"/><circle cx="355" cy="110" r="20" fill="none" class="s-green" stroke-width="1.5"/><line x1="355" y1="55" x2="355" y2="72" class="s-purple" stroke-width="2.6"/><path d="M355 81 L350.5 72 L359.5 72 Z" class="f-purple"/><text x="363" y="77" font-size="13" text-anchor="start" class="t-purple" font-style="italic">mg</text><line x1="355" y1="55" x2="380" y2="55" class="s-blue" stroke-width="2"/><path d="M389 55 L380 59.5 L380 50.5 Z" class="f-blue"/><text x="383" y="47" font-size="12" text-anchor="middle" class="t-blue" font-style="italic">v</text><circle cx="355" cy="55" r="6" class="f-gray"/><text x="355" y="200" font-size="12" text-anchor="middle">satellite</text><text x="355" y="216" font-size="11" text-anchor="middle" class="t-gray">gravity</text></svg>';
const BANK_SVG = '<svg viewBox="0 0 420 245" xmlns="http://www.w3.org/2000/svg"><path d="M40 190 L359.5 73.7 L359.5 190 Z" class="f-gray" opacity="0.12"/><line x1="40" y1="190" x2="359.5" y2="73.7" stroke="currentColor" stroke-width="2.2"/><line x1="40" y1="190" x2="359.5" y2="190" stroke="currentColor" stroke-width="1.2"/><path d="M90 190 A 50 50 0 0 0 87 172.9" fill="none" class="s-gray" stroke-width="1.3"/><text x="98" y="184" font-size="13" text-anchor="start">θ</text><circle cx="222.5" cy="106.6" r="14" class="f-blue" opacity="0.25"/><circle cx="222.5" cy="106.6" r="14" fill="none" class="s-blue" stroke-width="1.8"/><line x1="222.5" y1="106.6" x2="187.9" y2="11.7" class="s-green" stroke-width="2.8"/><path d="M184.8 3.2 L192.2 10.1 L183.7 13.2 Z" class="f-green"/><text x="176.8" y="7.2" font-size="14" text-anchor="end" class="t-green" font-style="italic">n</text><line x1="222.5" y1="106.6" x2="192.8" y2="106.6" class="s-green" stroke-width="1.6" stroke-dasharray="5 3"/><path d="M184.8 106.6 L192.8 102.6 L192.8 110.6 Z" class="f-green"/><text x="180.8" y="110.6" font-size="12" text-anchor="end" class="t-green">n sin θ</text><line x1="222.5" y1="106.6" x2="222.5" y2="11.2" class="s-green" stroke-width="1.6" stroke-dasharray="5 3"/><path d="M222.5 3.2 L226.5 11.2 L218.5 11.2 Z" class="f-green"/><text x="230.5" y="17.2" font-size="12" text-anchor="start" class="t-green">n cos θ</text><line x1="222.5" y1="106.6" x2="222.5" y2="200.9" class="s-purple" stroke-width="2.8"/><path d="M222.5 209.9 L218 200.9 L227 200.9 Z" class="f-purple"/><text x="230.5" y="205.9" font-size="14" text-anchor="start" class="t-purple" font-style="italic">mg</text><line x1="85" y1="232" x2="49" y2="232" class="s-red" stroke-width="2.2"/><path d="M40 232 L49 227.5 L49 236.5 Z" class="f-red"/><text x="92" y="236" font-size="12" text-anchor="start" class="t-red">toward the center of the turn</text><text x="300" y="130" font-size="11" text-anchor="start" class="t-gray">frictionless bank:</text><text x="300" y="145" font-size="11" text-anchor="start" class="t-gray">n sin θ = mv²/r</text><text x="300" y="160" font-size="11" text-anchor="start" class="t-gray">n cos θ = mg</text></svg>';
const LOOP_SVG = '<svg viewBox="0 10 420 252" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="125" r="85" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="150" cy="125" r="3" fill="currentColor"/><text x="142" y="129" font-size="10" text-anchor="end" class="t-gray">center</text><line x1="150" y1="52" x2="150" y2="83" class="s-green" stroke-width="2.6"/><path d="M150 92 L145.5 83 L154.5 83 Z" class="f-green"/><text x="158" y="90" font-size="13" text-anchor="start" class="t-green" font-style="italic">n</text><line x1="134" y1="52" x2="134" y2="91" class="s-purple" stroke-width="2.6"/><path d="M134 100 L129.5 91 L138.5 91 Z" class="f-purple"/><text x="128" y="96" font-size="13" text-anchor="end" class="t-purple" font-style="italic">mg</text><circle cx="150" cy="52" r="6" class="f-blue"/><text x="150" y="28" font-size="11" text-anchor="middle">top: both point toward the center</text><line x1="168" y1="198" x2="168" y2="112" class="s-green" stroke-width="2.6"/><path d="M168 103 L172.5 112 L163.5 112 Z" class="f-green"/><text x="176" y="118" font-size="13" text-anchor="start" class="t-green" font-style="italic">n</text><line x1="134" y1="198" x2="134" y2="237" class="s-purple" stroke-width="2.6"/><path d="M134 246 L129.5 237 L138.5 237 Z" class="f-purple"/><text x="128" y="242" font-size="13" text-anchor="end" class="t-purple" font-style="italic">mg</text><circle cx="150" cy="198" r="6" class="f-blue"/><text x="270" y="70" font-size="12" text-anchor="start" font-weight="600">top:</text><text x="270" y="88" font-size="12" text-anchor="start">n + mg = mv²/r</text><text x="270" y="106" font-size="12" text-anchor="start">n = m(v²/r − g)</text><text x="270" y="160" font-size="12" text-anchor="start" font-weight="600">bottom:</text><text x="270" y="178" font-size="12" text-anchor="start">n − mg = mv²/r</text><text x="270" y="196" font-size="12" text-anchor="start">n = m(g + v²/r)</text></svg>';
const CONICAL_SVG = '<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="30" x2="250" y2="30" stroke="currentColor" stroke-width="3"/><ellipse cx="200" cy="152.9" rx="86" ry="18" fill="none" class="s-teal" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="200" y1="30" x2="286" y2="152.9" stroke="currentColor" stroke-width="1.6"/><line x1="200" y1="30" x2="200" y2="162.9" class="s-gray" stroke-width="1" stroke-dasharray="3 4"/><line x1="200" y1="152.9" x2="286" y2="152.9" class="s-gray" stroke-width="1.2"/><line x1="200" y1="152.9" x2="286" y2="152.9" class="s-gray" stroke-width="1.2"/><text x="243" y="186.9" font-size="11" text-anchor="middle" class="t-gray">r = L sin θ</text><path d="M200 70 A 40 40 0 0 0 222.9 62.8" fill="none" class="s-gray" stroke-width="1.2"/><text x="208" y="86" font-size="13" text-anchor="start">θ</text><text x="233" y="99.4" font-size="13" text-anchor="end" font-style="italic">L</text><line x1="286" y1="152.9" x2="236.7" y2="82.4" class="s-red" stroke-width="2.8"/><path d="M231.5 75.1 L240.4 79.8 L233 85 Z" class="f-red"/><text x="241.5" y="79.1" font-size="14" text-anchor="start" class="t-red" font-style="italic">T</text><line x1="286" y1="152.9" x2="286" y2="221.7" class="s-purple" stroke-width="2.8"/><path d="M286 230.7 L281.5 221.7 L290.5 221.7 Z" class="f-purple"/><text x="294" y="230.7" font-size="14" text-anchor="start" class="t-purple" font-style="italic">mg</text><circle cx="286" cy="152.9" r="7" class="f-blue"/><text x="300" y="60" font-size="12" text-anchor="start">T cos θ = mg</text><text x="300" y="78" font-size="12" text-anchor="start">T sin θ = mv²/r</text></svg>';

// Ball whirled at omega = 2 rad/s on a 3 m string (speed 6 m/s), released at time r.
const RM = 'min(s, r)';
const BALLX = `(3cos(2${RM}) - 6(s - ${RM})*sin(2r))`;
const BALLY = `(3sin(2${RM}) + 6(s - ${RM})*cos(2r))`;

// Banked curve, radius 100 m: bank angle a (degrees), friction coefficient k. q = v^2/(r g) with r g = 980.
const BTH = '(a*pi/180)';
const FNEED = `(x^2/980*cos${BTH} - sin${BTH})`; // friction needed along the bank (down-slope positive), in units of mg
const NN = `(cos${BTH} + x^2/980*sin${BTH})`; // normal force in units of mg

// Conical pendulum, L = 2 m, angle a (degrees).
const CTH = '(a*pi/180)';
const CW = `sqrt(9.8/(2cos${CTH}))`;
const CX = `2sin${CTH}*cos(${CW}*s)`;
const CY = `(-2cos${CTH} + 0.5sin${CTH}*sin(${CW}*s))`;

export const lesson: Lesson = {
  id: 'phys-circular-dynamics',
  title: 'Dynamics of Circular Motion',
  summary: 'Newton\'s second law for circular motion: the "centripetal force" is supplied by real forces (tension, friction, gravity, the normal force), there is no outward centrifugal force in an inertial frame, and the same idea explains flat and banked curves, vertical loops, the conical pendulum and the g-forces on a fighter pilot.',
  minutes: 22,
  objectives: [
    'Apply $\\sum F_{\\text{toward center}} = mv^2/r$ using only real forces with identifiable agents',
    'Explain the outward "push" in a turn as inertia, and predict the path of an object released from circular motion',
    'Find the design speed of a banked curve and the speed range allowed by friction',
    'Compute normal forces at the top and bottom of vertical loops, and the minimum speed at the top',
    'Analyze the conical pendulum and a pilot\'s load factor in a banked turn',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What supplies the centripetal force?',
      blocks: [
        {
          type: 'p',
          text: 'Kinematics already told you that anything moving on a circle at speed $v$ accelerates toward the center at $v^2/r$. Newton\'s second law then says the **net** force must point toward the center with magnitude $mv^2/r$. This net inward force is often called the [[phys-centripetal-force|centripetal force]], but it is not a new kind of force: it is a job description that real forces fill.',
        },
        {
          type: 'theorem',
          name: 'Second law for circular motion',
          tex: '\\sum F_r = m\\,\\frac{v^2}{r} = m\\omega^2 r \\quad (\\text{toward the center}), \\qquad \\sum F_t = m\\,\\frac{dv}{dt}',
          text: 'Use a radial axis pointing **toward the center** as positive. The tangential equation matters only when the speed changes.',
        },
        {
          type: 'figure',
          svg: SOURCES_SVG,
          alt: 'Three top or side views of circular motion. A ball whirled on a string, with tension T pointing along the string toward the center. A car on a flat circular curve, with static friction f s pointing toward the center while its velocity is tangent. A satellite circling the Earth, with gravity mg pointing toward the Earth\'s center.',
          caption: 'Three different real forces doing the same job. In each case the inward force is perpendicular to the velocity, so it changes the direction of motion but not the speed.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Fastest safe speed on a flat curve',
          steps: [
            { tex: 'n = mg', why: 'Vertical balance on a level road (no vertical acceleration).' },
            { tex: 'f_s = m\\,\\frac{v^2}{r}', why: 'Static friction is the only horizontal force, so it alone points to the center. It is **static** because the tires are not sliding sideways.' },
            { tex: 'f_s \\le \\mu_s n \\implies m\\frac{v^2}{r} \\le \\mu_s mg \\implies v_{\\max} = \\sqrt{\\mu_s g r}', why: 'Static friction cannot exceed its maximum. The mass cancels.' },
            { tex: 'r = 50\\,\\text{m},\\ \\mu_s = 0.80: \\quad v_{\\max} = \\sqrt{(0.80)(9.80)(50)} = 19.8\\,\\text{m/s}', why: 'About $71\\,\\text{km/h}$ on dry pavement; on ice ($\\mu_s \\approx 0.1$) it drops to $7.0\\,\\text{m/s}$.' },
          ],
          result: 'Faster than $v_{\\max}$, friction cannot supply $mv^2/r$, the tires slide, and the car follows a wider path than the road.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never draw a "centripetal force" arrow',
          text: 'On a free-body diagram, draw only forces with agents: tension, friction, gravity, the normal force. Then add up their components toward the center and set the sum equal to $mv^2/r$. Adding a separate "$F_c$" arrow counts the same force twice and is one of the most common exam errors.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A car rounds a flat, unbanked curve at constant speed without skidding. Which force points toward the center of the curve and keeps it on its circular path?',
      options: [
        { text: 'Kinetic friction from the road', why: 'Kinetic friction acts when surfaces slide. The tires are not sliding sideways, so the relevant friction is static.' },
        { text: 'Static friction from the road on the tires', correct: true, why: 'Static friction is the only horizontal force from the road, so it alone provides $mv^2/r$ toward the center.' },
        { text: 'The centripetal force, in addition to friction', why: '"Centripetal force" is the name for the net inward force, not an extra force. Here it **is** the static friction.' },
        { text: 'The engine\'s forward force', why: 'The engine acts through the drive wheels along the direction of travel (tangentially), and at constant speed it just balances drag. It does not point toward the center.' },
      ],
      explanation: 'Walk around the car: the road touches it (normal force up, friction horizontal), the air touches it (drag, backward), and the Earth pulls it down. The only one with a component toward the center is static friction. That is why a patch of ice on a curve is so dangerous: remove the friction and nothing can turn the car.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'There is no centrifugal force (in an inertial frame)',
      blocks: [
        {
          type: 'p',
          text: 'In a car taking a sharp left turn you feel thrown to the right, against the door. It is tempting to say an outward "centrifugal force" pushes you. Look for its agent: nothing is touching you on the left and pulling you right. What actually happens is the first law: your body tends to keep going straight while the car turns left underneath you, until the door pushes **inward** on you and supplies your centripetal force.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-6, 6],
          equal: true,
          polar: [{ expr: '3', color: 'teal', dashed: true }],
          parametric: [
            { x: '3cos(2r) - 6t*sin(2r)', y: '3sin(2r) + 6t*cos(2r)', t: [0, 3], color: 'blue', dashed: true, label: 'actual path after release (tangent)' },
            { x: '(3 + 6t)cos(2r)', y: '(3 + 6t)sin(2r)', t: [0, 3], color: 'red', dashed: true, label: 'what a real outward force would give' },
          ],
          segments: [{ from: [0, 0], to: [`3cos(2${RM})`, `3sin(2${RM})`], color: 'gray' }],
          points: [
            { x: BALLX, y: BALLY, color: 'blue', label: 'ball' },
            { x: 0, y: 0, color: 'gray' },
          ],
          sliders: [
            { name: 'r', min: 0.3, max: 3, step: 0.05, value: 1.2, label: 'release time (s)' },
            { name: 's', min: 0, max: 3.5, step: 0.01, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'speed (m/s):', expr: '6' },
            { label: 'string pulling (1 = yes, 0 = no):', expr: '(1 + sign(r - s))/2' },
          ],
          caption: 'A ball whirled at $6\\,\\text{m/s}$ on a $3\\,\\text{m}$ string (top view, meters). Press ▶: at the release time the string goes slack (the readout switches from $1$ to $0$) and the ball flies off along the **tangent**, at constant velocity, exactly as the first law predicts. It does not fly radially outward (red), which is what an outward force would cause.',
        },
        {
          type: 'p',
          text: 'Centrifugal force is real in one precise sense: if you insist on describing motion from a **rotating** frame (your own point of view in the turning car), Newton\'s laws only work if you add a fictitious outward force $m\\omega^2 r$. Such frame-dependent "forces" have no agent and no third-law partner. Inside this course we always use inertial frames, so the [[phys-centrifugal-force|centrifugal force]] never appears on a free-body diagram.',
        },
        {
          type: 'derivation',
          title: 'Artificial gravity in a rotating space station',
          steps: [
            { tex: 'n = m\\omega^2 r', why: 'The floor (the station\'s outer rim) is the only force on an astronaut standing on it, and it must supply the centripetal force. Felt as weight: apparent weight $= n$.' },
            { tex: 'n = mg \\implies \\omega = \\sqrt{\\frac{g}{r}}', why: 'For Earth-like apparent weight, require $\\omega^2 r = g$.' },
            { tex: 'r = 100\\,\\text{m}: \\quad \\omega = 0.313\\,\\text{rad/s}, \\quad T = \\frac{2\\pi}{\\omega} = 20.1\\,\\text{s}', why: 'About $3$ revolutions per minute.' },
          ],
          result: 'From the inertial frame, the floor pushes the astronaut **inward**; from the astronaut\'s rotating frame, it feels like being pressed outward onto the floor. Same physics, two descriptions, and only the first one needs no fictitious force.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'A stone whirled in a horizontal circle on a string flies radially outward, directly away from the center, when the string breaks.',
      answer: false,
      explanation: 'When the string breaks, the only horizontal force disappears, and by the first law the stone keeps the velocity it had at that instant, which was **tangent** to the circle. It moves off along the tangent line (and falls under gravity). Radially outward motion would require an outward force; none exists in the ground frame.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Banked curves',
      blocks: [
        {
          type: 'p',
          text: 'Highway ramps, race tracks and velodromes tilt the road toward the center of the turn. Then the normal force, which is perpendicular to the road, leans inward and can supply the centripetal force by itself, with no help from friction.',
        },
        {
          type: 'figure',
          svg: BANK_SVG,
          alt: 'Cross-section of a road banked at angle theta, rising to the right, with the center of the turn to the left. A car on the slope has a green normal force n perpendicular to the road, tilted toward the center, split into dashed components n sin theta horizontal toward the center and n cos theta vertical, plus a purple weight mg straight down.',
          caption: 'Use horizontal and vertical axes here, **not** axes tilted along the slope: the acceleration is horizontal, toward the center. The vertical component of $n$ holds the car up; the horizontal component turns it.',
          maxWidth: 420,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why not tilt the axes this time?',
          text: 'Choose axes so that the **acceleration** lies along one of them. A block sliding down an incline accelerates along the slope, so tilted axes make $a_y = 0$. A car going around a banked curve accelerates horizontally, toward the center of the circle, so horizontal and vertical axes make $a_y = 0$. With tilted axes here, the acceleration would have components both along and perpendicular to the road, and setting the perpendicular one to zero gives the wrong normal force.',
        },
        {
          type: 'derivation',
          title: 'Design speed of a frictionless banked curve',
          steps: [
            { tex: 'n\\cos\\theta = mg', why: 'Vertical: no vertical acceleration.' },
            { tex: 'n\\sin\\theta = m\\,\\frac{v^2}{r}', why: 'Horizontal, toward the center: the horizontal component of $n$ is the centripetal force.' },
            { tex: '\\tan\\theta = \\frac{v^2}{rg} \\implies v_{\\text{design}} = \\sqrt{rg\\tan\\theta}', why: 'Divide the equations; $n$ and $m$ cancel.' },
            { tex: 'r = 100\\,\\text{m},\\ \\theta = 20^\\circ: \\quad v_{\\text{design}} = \\sqrt{(100)(9.80)\\tan 20^\\circ} = 18.9\\,\\text{m/s}', why: 'At this one speed the curve needs no friction at all.' },
          ],
          result: 'Note $n = mg/\\cos\\theta > mg$: on a banked curve the road pushes harder than on flat ground. Faster than the design speed, friction must act down the slope (toward the center); slower, up the slope.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [-1.5, 2.5],
          height: 280,
          functions: [
            { expr: FNEED, color: 'orange', label: 'friction needed (×mg; + means down the bank)' },
            { expr: `k*${NN}`, color: 'gray', dashed: true, label: 'limit $+\\mu_s n$' },
            { expr: `-k*${NN}`, color: 'gray', dashed: true, label: 'limit $-\\mu_s n$' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          points: [{ x: 'v', y: FNEED.split('x').join('v'), color: 'red' }],
          sliders: [
            { name: 'a', min: 0, max: 40, step: 1, value: 20, label: 'bank angle $\\theta$ (°)' },
            { name: 'k', min: 0, max: 1, step: 0.05, value: 0.6, label: '$\\mu_s$' },
            { name: 'v', min: 0, max: 50, step: 0.2, value: 0, label: 'car speed $v$ (m/s)', play: true },
          ],
          readouts: [
            { label: 'design speed (m/s):', expr: `sqrt(980tan${BTH})` },
            { label: 'max speed (m/s):', expr: `sqrt(980(sin${BTH} + k*cos${BTH})/(cos${BTH} - k*sin${BTH}))` },
            { label: 'min speed (m/s):', expr: `sqrt(max(980(sin${BTH} - k*cos${BTH})/(cos${BTH} + k*sin${BTH}), 0))` },
          ],
          caption: 'A curve of radius $100\\,\\text{m}$. Horizontal axis: speed (m/s). The orange curve is the friction the car needs; it is zero at the design speed. The car holds the road while the orange curve stays between the dashed limits $\\pm\\mu_s n$. Press ▶ to drive faster and faster; set $\\mu_s = 0$ (ice) and only the design speed works.',
        },
        {
          type: 'deepdive',
          title: 'The speed range with friction',
          blocks: [
            {
              type: 'p',
              text: 'With friction $f$ along the bank (positive pointing down the slope, toward the inside), the two equations are $n\\sin\\theta + f\\cos\\theta = mv^2/r$ and $n\\cos\\theta - f\\sin\\theta = mg$. Solving gives $f = m\\left(\\frac{v^2}{r}\\cos\\theta - g\\sin\\theta\\right)$ and $n = m\\left(g\\cos\\theta + \\frac{v^2}{r}\\sin\\theta\\right)$. Setting $|f| = \\mu_s n$ gives the limits:',
            },
            { type: 'math', tex: 'v_{\\max} = \\sqrt{rg\\,\\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta}}, \\qquad v_{\\min} = \\sqrt{rg\\,\\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta}}' },
            {
              type: 'p',
              text: 'If $\\mu_s \\ge \\tan\\theta$ the expression under $v_{\\min}$ is negative: the car can even park on the bank. With $\\theta = 20^\\circ$, $\\mu_s = 0.60$ and $r = 100\\,\\text{m}$, $v_{\\max} = 34.8\\,\\text{m/s}$. With $\\mu_s = 0$ both limits collapse onto the design speed.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A highway exit ramp has radius $80.0\\,\\text{m}$ and is banked at $15.0^\\circ$. At what speed can a car take it with **no** friction needed? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Frictionless banked curve: $\\tan\\theta = v^2/(rg)$.',
      label: '$v =$',
      unit: 'm/s',
      answer: 'sqrt(80*9.8*tan(15pi/180))',
      answerTex: '\\sqrt{(80.0)(9.80)\\tan 15.0^\\circ} \\approx 14.5',
      tolerance: 0.1,
      explanation: '$v = \\sqrt{rg\\tan\\theta} = \\sqrt{784\\tan 15^\\circ} = \\sqrt{210.1} \\approx 14.5\\,\\text{m/s}$ (about $52\\,\\text{km/h}$). Using $\\sin 15^\\circ$ instead of $\\tan 15^\\circ$ gives $14.2\\,\\text{m/s}$, which comes from assuming $n = mg$; on a bank $n = mg/\\cos\\theta$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Vertical loops',
      blocks: [
        {
          type: 'p',
          text: 'A roller-coaster car in a vertical loop moves in a circle in a vertical plane, so gravity is sometimes toward the center and sometimes away from it. Apply the radial second law at the top and at the bottom, where the forces are vertical.',
        },
        {
          type: 'figure',
          svg: LOOP_SVG,
          alt: 'A vertical circular loop with a car inside it at the top and at the bottom. At the top, both the green normal force n (from the track, pushing down) and the purple weight mg point down, toward the center. At the bottom, a long green normal force points up toward the center and the weight mg points down, away from it. Equations beside: top, n plus mg equals m v squared over r; bottom, n minus mg equals m v squared over r.',
          caption: 'At the top, the track (outside the car) pushes **down**, toward the center, together with gravity. At the bottom it pushes up, against gravity, and must also supply the centripetal force.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'Top and bottom of the loop',
          steps: [
            { tex: '\\text{top: } n + mg = m\\frac{v^2}{r} \\implies n = m\\left(\\frac{v^2}{r} - g\\right)', why: 'Toward the center is down at the top, so both forces count positive.' },
            { tex: 'n \\ge 0 \\implies v_{\\text{top}} \\ge \\sqrt{gr}', why: 'The track can push but not pull. Slower than $\\sqrt{gr}$, gravity alone exceeds the needed centripetal force and the car falls away from the track.' },
            { tex: '\\text{bottom: } n - mg = m\\frac{v^2}{r} \\implies n = m\\left(g + \\frac{v^2}{r}\\right)', why: 'Toward the center is up at the bottom.' },
          ],
          result: 'At exactly $v_{\\text{top}} = \\sqrt{gr}$ the rider is momentarily weightless ($n = 0$): gravity alone provides the centripetal force. A bucket of water swung overhead stays full for the same reason.',
        },
        {
          type: 'graph',
          x: [0, 30],
          y: [-2, 8],
          height: 260,
          functions: [
            { expr: 'x^2/(9.8r) - 1', color: 'blue', label: 'top of loop: $n/mg = v^2/(gr) - 1$' },
            { expr: '1 + x^2/(9.8r)', color: 'red', label: 'bottom: $n/mg = 1 + v^2/(gr)$' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          points: [{ x: 'sqrt(9.8r)', y: 0, color: 'blue', label: 'minimum speed' }],
          sliders: [{ name: 'r', min: 5, max: 30, step: 0.5, value: 12, label: 'loop radius $r$ (m)' }],
          readouts: [
            { label: 'minimum speed at top $\\sqrt{gr}$ (m/s):', expr: 'sqrt(9.8r)' },
            { label: 'bottom $n/mg$ at $20\\,\\text{m/s}$:', expr: '1 + 400/(9.8r)' },
          ],
          caption: 'Apparent weight in units of $mg$ ("g\'s") versus speed (m/s). Where the blue curve is negative, the track would have to pull the car: it falls instead. Bigger loops need more speed at the top but give gentler forces at the bottom, one reason real coasters use teardrop-shaped (clothoid) loops whose curvature varies.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A roller-coaster car passes through the bottom of a dip whose radius of curvature is $15.0\\,\\text{m}$, moving at $20.0\\,\\text{m/s}$. How many "g\'s" do the riders feel there, that is, what is $n/(mg)$? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'At the bottom, $n - mg = mv^2/r$. Divide by $mg$.',
      label: '$n/mg =$',
      answer: '1 + 20^2/(15*9.8)',
      answerTex: '1 + \\frac{(20.0)^2}{(15.0)(9.80)} \\approx 3.72',
      tolerance: 0.03,
      explanation: '$\\frac{n}{mg} = 1 + \\frac{v^2}{gr} = 1 + \\frac{400}{147} = 3.72$: riders are pressed into their seats with $3.72$ times their weight. Forgetting the $1$ (setting $n = mv^2/r$, as if gravity were absent) gives $2.72$. The track must both hold the riders up and turn them upward.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The conical pendulum',
      blocks: [
        {
          type: 'p',
          text: 'A mass on a string swinging in a horizontal circle, with the string tracing a cone, is a conical pendulum: a tetherball, a chain swing ride, a weight whirled overhead. The string tension is tilted, so it both holds the mass up and pulls it toward the center.',
        },
        {
          type: 'figure',
          svg: CONICAL_SVG,
          alt: 'A string of length L hangs from a ceiling at angle theta from the vertical. The bob moves around a dashed horizontal circle of radius r = L sin theta. Forces on the bob: red tension T along the string toward the pivot, and purple weight mg straight down. Equations: T cos theta = mg, T sin theta = m v squared over r.',
          caption: 'Two forces on the bob. The center of the circle is at the height of the bob, directly below the pivot, so "toward the center" is horizontal.',
          maxWidth: 400,
        },
        {
          type: 'derivation',
          title: 'Speed and period of a conical pendulum',
          steps: [
            { tex: 'T\\cos\\theta = mg, \\qquad T\\sin\\theta = m\\frac{v^2}{r}, \\qquad r = L\\sin\\theta', why: 'Vertical balance, horizontal second law, and geometry.' },
            { tex: '\\tan\\theta = \\frac{v^2}{rg} \\implies v = \\sqrt{gL\\sin\\theta\\tan\\theta}', why: 'Divide the force equations (same relation as the banked curve), then substitute $r$.' },
            { tex: 'T_{\\text{rev}} = \\frac{2\\pi r}{v} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}', why: 'Circumference over speed; simplify with $\\sin\\theta/\\sqrt{\\sin\\theta\\tan\\theta} = \\sqrt{\\cos\\theta}$. ($T_{\\text{rev}}$ is the period, not the tension.)' },
            { tex: 'L = 2.0\\,\\text{m},\\ \\theta = 30^\\circ: \\quad T_{\\text{rev}} = 2.64\\,\\text{s}, \\quad v = 2.38\\,\\text{m/s}, \\quad T = \\frac{mg}{\\cos 30^\\circ} = 1.15\\,mg', why: 'Numbers with $g = 9.80\\,\\text{m/s}^2$.' },
          ],
          result: 'Swing faster and the angle increases, but $\\theta$ can never reach $90^\\circ$: the tension $mg/\\cos\\theta$ would have to be infinite to keep the string horizontal.',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-2.4, 0.4],
          equal: true,
          parametric: [{ x: `2sin${CTH}*cos(t)`, y: `-2cos${CTH} + 0.5sin${CTH}*sin(t)`, t: [0, '2pi'], color: 'teal', dashed: true }],
          segments: [
            { from: [-1, 0], to: [1, 0], color: 'gray' },
            { from: [0, 0], to: [CX, CY], color: 'gray' },
            { from: [0, 0], to: [0, `-2cos${CTH}`], color: 'gray', dashed: true },
          ],
          points: [{ x: CX, y: CY, color: 'blue' }],
          sliders: [
            { name: 'a', min: 5, max: 80, step: 1, value: 30, label: 'cone angle $\\theta$ (°)' },
            { name: 's', min: 0, max: 8, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, loop: true, speed: 1 },
          ],
          readouts: [
            { label: 'period (s):', expr: `2pi*sqrt(2cos${CTH}/9.8)` },
            { label: 'speed (m/s):', expr: `sqrt(9.8*2sin${CTH}*tan${CTH})` },
            { label: 'tension $T/mg$:', expr: `1/cos${CTH}` },
          ],
          caption: 'A $2.0\\,\\text{m}$ conical pendulum seen slightly from above, in real time. Press ▶, then raise $\\theta$: the bob speeds up, the period shrinks toward zero and the tension climbs steeply near $90^\\circ$. At small angles the period approaches $2\\pi\\sqrt{L/g} = 2.84\\,\\text{s}$, the period of an ordinary [[phys-simple-pendulum|simple pendulum]], which the oscillations unit derives.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'A conical pendulum has string length $L$ and makes angle $\\theta$ with the vertical. Write the period of one revolution in terms of $L$, $\\theta$ and $g$.',
      hint: 'From $\\tan\\theta = v^2/(rg)$ with $r = L\\sin\\theta$, find $v$; then period $= 2\\pi r/v$.',
      label: '$T_{\\text{rev}} =$',
      answer: '2pi*sqrt(L*cos(theta)/g)',
      answerTex: 'T_{\\text{rev}} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}',
      variables: ['L', 'theta', 'g'],
      domain: [0.2, 1.3],
      explanation: '$v^2 = rg\\tan\\theta = gL\\sin\\theta\\tan\\theta$, so $T_{\\text{rev}} = \\frac{2\\pi L\\sin\\theta}{\\sqrt{gL\\sin\\theta\\tan\\theta}} = 2\\pi\\sqrt{\\frac{L\\sin^2\\theta}{gL\\sin\\theta\\tan\\theta}} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$. Only the height $L\\cos\\theta$ of the cone matters: two conical pendulums whose bobs circle at the same depth below the pivot have the same period.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'g-forces on pilots',
      blocks: [
        {
          type: 'p',
          text: 'An aircraft turns by banking, so that its lift (perpendicular to the wings) tilts toward the center of the turn: a conical pendulum with lift in place of string tension. The pilot\'s seat pushes on the pilot along the same direction, and the ratio of that push to $mg$ is the [[phys-load-factor|load factor]], the "g\'s" pilots talk about.',
        },
        {
          type: 'derivation',
          title: 'Level turn at bank angle $\\phi$',
          steps: [
            { tex: 'L\\cos\\phi = mg, \\qquad L\\sin\\phi = m\\frac{v^2}{r}', why: 'Lift $L$ holds the aircraft up and turns it; same equations as the banked curve and the conical pendulum.' },
            { tex: 'n_{\\text{load}} = \\frac{L}{mg} = \\frac{1}{\\cos\\phi}, \\qquad r = \\frac{v^2}{g\\tan\\phi}', why: 'Every object in the aircraft, pilot included, feels the same load factor.' },
            { tex: '\\phi = 60^\\circ \\implies 2.00\\,g; \\qquad 9\\,g \\implies \\phi = \\arccos\\tfrac19 = 83.6^\\circ', why: 'A sustained $9g$ turn needs an $83.6^\\circ$ bank.' },
            { tex: 'v = 200\\,\\text{m/s},\\ 9g: \\quad r = \\frac{200^2}{9.80\\sqrt{80}} = 456\\,\\text{m}', why: '$\\tan\\phi = \\sqrt{n_{\\text{load}}^2 - 1} = \\sqrt{80}$.' },
          ],
          result: 'A pull-up at the bottom of a vertical loop is the same physics as the roller-coaster dip: $n_{\\text{load}} = 1 + \\frac{v^2}{gr}$.',
        },
        {
          type: 'graph',
          x: [0, 88],
          y: [0, 12],
          xStep: 10,
          height: 260,
          functions: [{ expr: '1/cos(x*pi/180)', color: 'red', label: 'load factor $1/\\cos\\phi$' }],
          hlines: [{ y: 9, color: 'gray', label: 'about the limit with g-suit' }],
          points: [{ x: 'p', y: '1/cos(p*pi/180)', color: 'red' }],
          sliders: [
            { name: 'p', min: 0, max: 85, step: 0.5, value: 60, label: 'bank angle $\\phi$ (°)', play: true },
            { name: 'v', min: 50, max: 300, step: 5, value: 200, label: 'airspeed $v$ (m/s)' },
          ],
          readouts: [
            { label: 'load factor (g):', expr: '1/cos(p*pi/180)' },
            { label: 'turn radius (m):', expr: 'v^2/(9.8tan(p*pi/180))' },
            { label: 'time for a full circle (s):', expr: '2pi*v/(9.8tan(p*pi/180))' },
          ],
          caption: 'Horizontal axis: bank angle in degrees. The load factor stays modest up to about $60^\\circ$ ($2g$) and then rises steeply. Tighter turns at the same speed need a steeper bank and more g: the turn radius shrinks like $1/\\tan\\phi$.',
        },
        {
          type: 'code',
          title: 'turn_table.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>
#include <numbers>

// Level, coordinated turn: lift L is tilted by the bank angle phi.
//   vertical:   L cos(phi) = m g          ->  load factor n = L/(m g) = 1/cos(phi)
//   horizontal: L sin(phi) = m v^2 / r    ->  r = v^2 / (g tan(phi))
int main() {
    const double g = 9.8, v = 200.0;              // m/s, a fighter at about 720 km/h
    constexpr double deg = std::numbers::pi / 180.0;
    std::printf("bank   load   radius   time for 360 deg\\n");
    for (double phi : {15.0, 30.0, 45.0, 60.0, 70.0, 80.0, 83.6}) {
        double n = 1.0 / std::cos(phi * deg);
        double r = v * v / (g * std::tan(phi * deg));
        double t360 = 2.0 * std::numbers::pi * r / v;
        std::printf("%4.1f  %4.2f g  %6.0f m   %5.1f s\\n", phi, n, r, t360);
    }
}`,
          output: `bank   load   radius   time for 360 deg
15.0  1.04 g   15233 m   478.6 s
30.0  1.15 g    7070 m   222.1 s
45.0  1.41 g    4082 m   128.2 s
60.0  2.00 g    2357 m    74.0 s
70.0  2.92 g    1486 m    46.7 s
80.0  5.76 g     720 m    22.6 s
83.6  8.97 g     458 m    14.4 s`,
          annotations: [
            { lines: '6-8', text: 'The free-body diagram of a turning aircraft in two lines: the same pair of equations as the banked curve and the conical pendulum.' },
            { lines: '14-16', text: 'Load factor, radius and the time for a full $360^\\circ$ turn. Flight simulators and flight-model code in games evaluate exactly these relations every frame.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'What g does to the body',
          text: 'Under sustained positive g (head toward the center of the turn), blood pools in the legs and the heart cannot push enough of it up to the brain. Pilots first lose color vision ("grayout"), then peripheral vision, then consciousness (G-LOC); an unprotected, relaxed person typically reaches this somewhere around $4$ to $6g$. G-suits that squeeze the legs and abdomen, plus a trained straining maneuver, let fighter pilots sustain about $9g$, which is why aircraft like the F-16 are limited near that value. Centrifuges train pilots to recognize the symptoms.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student finds the frictionless design speed of a curve of radius $60\\,\\text{m}$ banked at $25^\\circ$ ($g = 9.80\\,\\text{m/s}^2$). Tap the first wrong line.',
      lines: [
        'The forces on the car are its weight $mg$ and the normal force $n$, perpendicular to the road.',
        'Perpendicular to the road there is no acceleration, so $n = mg\\cos 25^\\circ$.',
        'Horizontally, $n\\sin 25^\\circ = mv^2/r$, so $mg\\cos 25^\\circ\\sin 25^\\circ = mv^2/r$.',
        '$v = \\sqrt{rg\\sin 25^\\circ\\cos 25^\\circ} = \\sqrt{(60)(9.80)(0.383)} = 15.0$ m/s.',
      ],
      errorLines: [2],
      explanation: 'The car\'s acceleration is horizontal (toward the center), so it **does** have a component perpendicular to the road. Use vertical and horizontal axes: $n\\cos 25^\\circ = mg$ gives $n = mg/\\cos 25^\\circ$, and then $\\tan 25^\\circ = v^2/(rg)$, so $v = \\sqrt{(60)(9.80)\\tan 25^\\circ} = 16.6\\,\\text{m/s}$. "Tilt the axes along the slope" is right for a block sliding **down** an incline, wrong for a car circling **around** a bank.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A roller-coaster car goes over the top of a vertical loop, upside down, faster than the minimum speed. Which forces act on a rider at that instant?',
      options: [
        { text: 'Gravity down, and an upward centrifugal force that balances it', why: 'Nothing exerts an outward force: there is no agent. And if the forces balanced, the rider would move in a straight line, not around the loop.' },
        { text: 'Gravity down and the seat pushing down, both toward the center', correct: true, why: 'Upside down, the seat is above the rider and can only push away from itself, downward. Together with gravity it supplies $mv^2/r$.' },
        { text: 'Gravity down and the seat pushing up, with the seat force larger', why: 'The seat is **above** the rider at the top of the loop, so its push points down. A net upward force would point away from the center.' },
        { text: 'Only gravity, since the rider is momentarily weightless', why: 'Only true at exactly the minimum speed $\\sqrt{gr}$. Faster than that, gravity alone is not enough and the seat must push too.' },
      ],
      explanation: 'At the top, the center of the loop is **below** the rider. The required net force $mv^2/r$ points down, and it is made of gravity plus the normal force from the seat, which also points down: $n = m(v^2/r - g)$. Riders feel pressed "up" into the seat only because, in their own accelerating frame, the seat pushes them toward the center.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps for finding the design speed of a banked curve.',
      lines: [
        'Draw the free-body diagram (weight $mg$ down, normal force $n$ perpendicular to the road) with a horizontal axis toward the center of the turn and a vertical axis',
        'Write $n\\cos\\theta = mg$ and $n\\sin\\theta = mv^2/r$',
        'Divide to eliminate $n$ and $m$: $\\tan\\theta = v^2/(rg)$',
        'Solve $v = \\sqrt{rg\\tan\\theta}$ and check that $\\theta \\to 0$ gives $v \\to 0$',
      ],
      distractors: ['Add a centripetal force $mv^2/r$ to the free-body diagram'],
      explanation: 'Diagram with real forces only, axes matched to the acceleration (horizontal, toward the center), then the two component equations and algebra. Limiting case: a flat frictionless curve can only be taken at zero speed. The distractor double-counts: $mv^2/r$ is what the real forces add up to.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary.',
      template: 'For circular motion, the net force toward the center equals ___. On a flat curve it is supplied by ___ friction. When a whirled ball is released, it moves along the ___.',
      blanks: [{ answers: ['$mv^2/r$'] }, { answers: ['static'] }, { answers: ['tangent'] }],
      wordBank: ['$mv^2/r$', '$mv/r$', 'static', 'kinetic', 'tangent', 'radius'],
      explanation: '$\\sum F_r = ma_c = mv^2/r$, and real forces must supply it. A non-skidding tire grips with static friction. Once the string lets go, no horizontal force acts, so by the first law the ball keeps its tangential velocity.',
    },
  ],
  takeaways: [
    '$\\sum F_r = mv^2/r$ toward the center. "Centripetal force" is a role played by real forces (tension, friction, gravity, normal force), never an extra arrow.',
    'In an inertial frame there is no centrifugal force: the outward lurch is inertia, and a released object leaves along the tangent.',
    'Flat curve: $v_{\\max} = \\sqrt{\\mu_s gr}$. Banked curve: $\\tan\\theta = v^2/(rg)$ at the design speed, with horizontal and vertical axes and $n = mg/\\cos\\theta$.',
    'Vertical loop: top $n = m(v^2/r - g)$, so $v_{\\text{top}} \\ge \\sqrt{gr}$; bottom $n = m(g + v^2/r)$.',
    'Conical pendulum and banked aircraft share $\\tan\\theta = v^2/(rg)$; period $2\\pi\\sqrt{L\\cos\\theta/g}$; pilot load factor $1/\\cos\\phi$ in a level turn, about $9g$ at an $83.6^\\circ$ bank.',
  ],
  reading: [
    {
      title: 'OpenStax — University Physics Volume 1, Section 6.3',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Centripetal force with worked examples on flat and banked curves, and a discussion of fictitious forces.',
    },
    {
      title: 'Wikipedia — Banked turn',
      url: 'https://en.wikipedia.org/wiki/Banked_turn',
      source: 'wikipedia',
      note: 'The banked-curve equations with and without friction, and the same analysis for aircraft.',
    },
    {
      title: 'Wikipedia — Centrifugal force',
      url: 'https://en.wikipedia.org/wiki/Centrifugal_force',
      source: 'wikipedia',
      note: 'How the fictitious force arises in rotating frames and why it is absent in inertial ones.',
    },
    {
      title: 'Wikipedia — Load factor (aeronautics)',
      url: 'https://en.wikipedia.org/wiki/Load_factor_(aeronautics)',
      source: 'wikipedia',
      note: 'Load factor in turns and pull-ups, and the structural g-limits of different aircraft classes.',
    },
  ],
};
