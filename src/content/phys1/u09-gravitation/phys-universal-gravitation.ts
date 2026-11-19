import type { Lesson } from '../../types';

// Figures (generated, then pasted in; see the lesson text for what each shows).
const TWO_MASS_SVG = '<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg"><circle cx="110.0" cy="72.0" r="32.0" fill="currentColor" fill-opacity="0.2" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><text x="110.0" y="77.0" font-size="15" text-anchor="middle" font-style="italic">m₁</text><circle cx="370.0" cy="72.0" r="20.0" fill="currentColor" fill-opacity="0.2" stroke="currentColor" class="f-orange s-orange" stroke-width="2"/><text x="370.0" y="77.0" font-size="14" text-anchor="middle" font-style="italic">m₂</text><line x1="142.0" y1="72.0" x2="212.5" y2="72.0" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M222.0,72.0 L211.0,77.5 L211.0,66.5 Z" fill="currentColor" class="f-red"/><text x="182.0" y="56.0" font-size="12" text-anchor="middle" class="t-red">F on 1 by 2</text><line x1="350.0" y1="72.0" x2="279.5" y2="72.0" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M270.0,72.0 L281.0,66.5 L281.0,77.5 Z" fill="currentColor" class="f-red"/><text x="310.0" y="56.0" font-size="12" text-anchor="middle" class="t-red">F on 2 by 1</text><line x1="110.0" y1="112.0" x2="110.0" y2="140.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="370.0" y1="100.0" x2="370.0" y2="140.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="240.0" y1="130.0" x2="118.5" y2="130.0" stroke="currentColor" class="s-gray" stroke-width="1.2"/><path d="M112.0,130.0 L120.0,126.0 L120.0,134.0 Z" fill="currentColor" class="f-gray"/><line x1="240.0" y1="130.0" x2="361.5" y2="130.0" stroke="currentColor" class="s-gray" stroke-width="1.2"/><path d="M368.0,130.0 L360.0,134.0 L360.0,126.0 Z" fill="currentColor" class="f-gray"/><text x="240.0" y="150.0" font-size="13" text-anchor="middle" class="t-gray">r  (center to center)</text></svg>';
const CAVENDISH_SVG = '<svg viewBox="0 0 480 245" xmlns="http://www.w3.org/2000/svg"><line x1="140.0" y1="130.0" x2="340.0" y2="130.0" stroke="currentColor" class="s-gray" stroke-width="2" stroke-dasharray="5 4"/><line x1="140.5" y1="140.5" x2="339.5" y2="119.5" stroke="currentColor" stroke-width="3.5"/><circle cx="140.5" cy="140.5" r="10.0" fill="currentColor" fill-opacity="0.5" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><circle cx="339.5" cy="119.5" r="10.0" fill="currentColor" fill-opacity="0.5" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><circle cx="160.0" cy="205.0" r="28.0" fill="currentColor" fill-opacity="0.35" stroke="currentColor" class="f-orange s-orange" stroke-width="2"/><circle cx="320.0" cy="55.0" r="28.0" fill="currentColor" fill-opacity="0.35" stroke="currentColor" class="f-orange s-orange" stroke-width="2"/><text x="160.0" y="210.0" font-size="14" text-anchor="middle" font-style="italic">M</text><text x="320.0" y="60.0" font-size="14" text-anchor="middle" font-style="italic">M</text><line x1="143.7" y1="151.0" x2="148.1" y2="165.8" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M150.3,173.0 L143.4,165.7 L152.0,163.1 Z" fill="currentColor" class="f-red"/><line x1="336.3" y1="109.0" x2="331.9" y2="94.2" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M329.7,87.0 L336.6,94.3 L328.0,96.9 Z" fill="currentColor" class="f-red"/><circle cx="240.0" cy="130.0" r="7.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="240.0" cy="130.0" r="2.5" fill="currentColor"/><text x="100.0" y="128.0" font-size="14" text-anchor="middle" class="t-blue" font-style="italic">m</text><text x="372.0" y="124.0" font-size="14" text-anchor="middle" class="t-blue" font-style="italic">m</text><text x="240.0" y="166.0" font-size="11" text-anchor="middle" class="t-gray">fiber (end-on)</text><text x="240.0" y="180.0" font-size="11" text-anchor="middle" class="t-gray">with mirror</text><path d="M 268 96 A 45 45 0 0 0 212 96" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.8"/><path d="M212,96 L222,90 L221,101 Z" fill="currentColor" class="f-purple"/><text x="240.0" y="84.0" font-size="12" text-anchor="middle" class="t-purple">twist θ</text><text x="420.0" y="200.0" font-size="11" text-anchor="middle" class="t-gray">dashed: rest position</text><text x="420.0" y="214.0" font-size="11" text-anchor="middle" class="t-gray">of the rod</text></svg>';
const SHELL_SVG = '<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg"><circle cx="200.0" cy="130.0" r="110.0" fill="none" stroke="currentColor" stroke-width="3"/><path d="M150,120 L287.7,196.3 L308.0,150.7 Z" fill="currentColor" stroke="currentColor" class="s-blue f-blue" stroke-width="1.2" fill-opacity="0.18"/><path d="M150,120 L97.2,90.8 L92.1,108.7 Z" fill="currentColor" stroke="currentColor" class="s-orange f-orange" stroke-width="1.2" fill-opacity="0.18"/><path d="M287.7,196.3 A 110 110 0 0 0 308.0,150.7" fill="none" stroke="currentColor" class="s-blue" stroke-width="6"/><path d="M97.2,90.8 A 110 110 0 0 0 92.1,108.7" fill="none" stroke="currentColor" class="s-orange" stroke-width="6"/><circle cx="150.0" cy="120.0" r="4.0" fill="currentColor"/><text x="152.0" y="144.0" font-size="14" text-anchor="middle" font-style="italic">P</text><line x1="150.0" y1="121.0" x2="183.4" y2="133.1" stroke="currentColor" class="s-blue" stroke-width="2.5"/><path d="M191.3,136.0 L180.2,137.3 L183.7,127.9 Z" fill="currentColor" class="f-blue"/><line x1="150.0" y1="119.0" x2="116.6" y2="106.9" stroke="currentColor" class="s-orange" stroke-width="2.5"/><path d="M108.7,104.0 L119.8,102.7 L116.3,112.1 Z" fill="currentColor" class="f-orange"/><text x="313.9" y="177.5" font-size="13" text-anchor="start" class="t-blue">A₁</text><text x="80.7" y="103.7" font-size="13" text-anchor="end" class="t-orange">A₂</text><text x="227.9" y="168.8" font-size="13" text-anchor="middle" class="t-blue">r₁</text><text x="124.3" y="131.9" font-size="13" text-anchor="middle" class="t-orange">r₂</text><text x="345.0" y="40.0" font-size="13" text-anchor="start">patch area grows as r²</text><text x="345.0" y="60.0" font-size="13" text-anchor="start">pull = area × 1/r²</text><text x="345.0" y="80.0" font-size="13" text-anchor="start">⇒ the two pulls</text><text x="345.0" y="98.0" font-size="13" text-anchor="start">cancel</text><text x="200.0" y="262.0" font-size="12" text-anchor="middle" class="t-gray">thin uniform shell</text></svg>';
const FIELD_SVG = '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg"><circle cx="170.0" cy="150.0" r="35.0" fill="currentColor" fill-opacity="0.3" stroke="currentColor" class="f-teal s-teal" stroke-width="2"/><text x="170.0" y="155.0" font-size="15" text-anchor="middle" font-style="italic">M</text><line x1="256.0" y1="150.0" x2="230.5" y2="150.0" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M224.0,150.0 L232.0,146.0 L232.0,154.0 Z" fill="currentColor" class="f-blue"/><line x1="314.0" y1="150.0" x2="309.0" y2="150.0" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M306.0,150.0 L310.5,147.4 L310.5,152.6 Z" fill="currentColor" class="f-blue"/><line x1="244.5" y1="193.0" x2="222.4" y2="180.2" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M216.8,177.0 L225.7,177.5 L221.7,184.5 Z" fill="currentColor" class="f-blue"/><line x1="294.7" y1="222.0" x2="290.4" y2="219.5" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M287.8,218.0 L293.0,218.0 L290.4,222.5 Z" fill="currentColor" class="f-blue"/><line x1="213.0" y1="224.5" x2="200.2" y2="202.4" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M197.0,196.8 L204.5,201.7 L197.5,205.7 Z" fill="currentColor" class="f-blue"/><line x1="242.0" y1="274.7" x2="239.5" y2="270.4" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M238.0,267.8 L242.5,270.4 L238.0,273.0 Z" fill="currentColor" class="f-blue"/><line x1="170.0" y1="236.0" x2="170.0" y2="210.5" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M170.0,204.0 L174.0,212.0 L166.0,212.0 Z" fill="currentColor" class="f-blue"/><line x1="170.0" y1="294.0" x2="170.0" y2="289.0" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M170.0,286.0 L172.6,290.5 L167.4,290.5 Z" fill="currentColor" class="f-blue"/><line x1="127.0" y1="224.5" x2="139.8" y2="202.4" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M143.0,196.8 L142.5,205.7 L135.5,201.7 Z" fill="currentColor" class="f-blue"/><line x1="98.0" y1="274.7" x2="100.5" y2="270.4" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M102.0,267.8 L102.0,273.0 L97.5,270.4 Z" fill="currentColor" class="f-blue"/><line x1="95.5" y1="193.0" x2="117.6" y2="180.2" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M123.2,177.0 L118.3,184.5 L114.3,177.5 Z" fill="currentColor" class="f-blue"/><line x1="45.3" y1="222.0" x2="49.6" y2="219.5" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M52.2,218.0 L49.6,222.5 L47.0,218.0 Z" fill="currentColor" class="f-blue"/><line x1="84.0" y1="150.0" x2="109.5" y2="150.0" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M116.0,150.0 L108.0,154.0 L108.0,146.0 Z" fill="currentColor" class="f-blue"/><line x1="26.0" y1="150.0" x2="31.0" y2="150.0" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M34.0,150.0 L29.5,152.6 L29.5,147.4 Z" fill="currentColor" class="f-blue"/><line x1="95.5" y1="107.0" x2="117.6" y2="119.8" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M123.2,123.0 L114.3,122.5 L118.3,115.5 Z" fill="currentColor" class="f-blue"/><line x1="45.3" y1="78.0" x2="49.6" y2="80.5" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M52.2,82.0 L47.0,82.0 L49.6,77.5 Z" fill="currentColor" class="f-blue"/><line x1="127.0" y1="75.5" x2="139.7" y2="97.6" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M143.0,103.2 L135.5,98.3 L142.5,94.3 Z" fill="currentColor" class="f-blue"/><line x1="98.0" y1="25.3" x2="100.5" y2="29.6" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M102.0,32.2 L97.5,29.6 L102.0,27.0 Z" fill="currentColor" class="f-blue"/><line x1="170.0" y1="64.0" x2="170.0" y2="89.5" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M170.0,96.0 L166.0,88.0 L174.0,88.0 Z" fill="currentColor" class="f-blue"/><line x1="170.0" y1="6.0" x2="170.0" y2="11.0" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M170.0,14.0 L167.4,9.5 L172.6,9.5 Z" fill="currentColor" class="f-blue"/><line x1="213.0" y1="75.5" x2="200.2" y2="97.6" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M197.0,103.2 L197.5,94.3 L204.5,98.3 Z" fill="currentColor" class="f-blue"/><line x1="242.0" y1="25.3" x2="239.5" y2="29.6" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M238.0,32.2 L238.0,27.0 L242.5,29.6 Z" fill="currentColor" class="f-blue"/><line x1="244.5" y1="107.0" x2="222.4" y2="119.7" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M216.8,123.0 L221.7,115.5 L225.7,122.5 Z" fill="currentColor" class="f-blue"/><line x1="294.7" y1="78.0" x2="290.4" y2="80.5" stroke="currentColor" class="s-blue" stroke-width="1.6"/><path d="M287.8,82.0 L290.4,77.5 L293.0,82.0 Z" fill="currentColor" class="f-blue"/><text x="330.0" y="40.0" font-size="12" text-anchor="start" class="t-blue">field g points toward M</text><text x="330.0" y="58.0" font-size="12" text-anchor="start" class="t-blue">strength falls as 1/r²</text><text x="330.0" y="76.0" font-size="11" text-anchor="start" class="t-gray">(2× farther: ¼ as long)</text></svg>';

export const lesson: Lesson = {
  id: 'phys-universal-gravitation',
  title: 'Universal Gravitation',
  summary: 'One inverse-square law for apples, moons and satellites: Newton\'s law of gravitation, measuring $G$ with Cavendish\'s balance, $g = GM/R^2$, the gravitational field, the shell theorem, and the potential energy $U = -GMm/r$ derived by integration.',
  minutes: 21,
  objectives: [
    'State Newton\'s law of universal gravitation in magnitude and vector form, and explain the inverse-square dependence and the third-law pair it describes',
    'Explain how the Cavendish experiment measured $G$, and use $g = GM/R^2$ to "weigh" a planet',
    'Compute the gravitational field of one or several masses, including how $g$ changes with altitude',
    'State the shell theorem, sketch why it holds, and use it to find $g$ inside a uniform planet',
    'Derive $U(r) = -GMm/r$ by integrating the force, and show that $mgh$ is its near-surface approximation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One force, from apples to the Moon',
      blocks: [
        {
          type: 'p',
          text: 'Near the ground, everything falls with the same acceleration $g = 9.80\\,\\text{m/s}^2$. The Moon also "falls": it moves on a nearly circular path, so it has a centripetal [[acceleration]] toward Earth. Newton\'s great guess was that **the same force** does both jobs, and that it weakens with distance.',
        },
        {
          type: 'p',
          text: 'He could test the guess with numbers you can check yourself. The Moon is about $60$ Earth radii away. If gravity falls off as $1/r^2$, the Moon\'s acceleration should be $60^2 = 3600$ times smaller than $g$.',
        },
        {
          type: 'derivation',
          title: 'Newton\'s Moon test',
          steps: [
            { tex: 'a_{\\text{Moon}} = \\frac{v^2}{r} = \\frac{4\\pi^2 r}{T^2}', why: 'Uniform circular motion: $a = v^2/r$ with $v = 2\\pi r/T$.' },
            { tex: '= \\frac{4\\pi^2(3.84 \\times 10^{8}\\,\\text{m})}{(27.3 \\times 86\\,400\\,\\text{s})^2} = 2.72 \\times 10^{-3}\\,\\text{m/s}^2', why: 'Orbit radius $3.84 \\times 10^8\\,\\text{m}$ and sidereal period $27.3$ days, converted to seconds.' },
            { tex: '\\frac{g}{a_{\\text{Moon}}} = \\frac{9.80}{2.72 \\times 10^{-3}} \\approx 3600', why: 'Compare with the surface value.' },
            { tex: '\\left(\\frac{r_{\\text{Moon}}}{R_E}\\right)^2 = \\left(\\frac{3.84 \\times 10^{8}}{6.37 \\times 10^{6}}\\right)^2 \\approx 60.3^2 \\approx 3630', why: 'The inverse-square prediction. The two agree to about 1%.' },
          ],
          result: 'The Moon\'s acceleration is $g$ scaled by $(R_E/r)^2$. The force that drops an apple also holds the Moon in orbit, and it falls off as $1/r^2$.',
        },
        {
          type: 'theorem',
          name: 'Newton\'s law of universal gravitation',
          tex: 'F = \\frac{G m_1 m_2}{r^2}, \\qquad \\vec{F}_{\\text{on }2\\text{ by }1} = -\\frac{G m_1 m_2}{r^2}\\,\\hat{r}_{12}',
          text: 'Every pair of point masses attracts along the line joining them. $r$ is the center-to-center distance and $\\hat{r}_{12}$ is the [[unit-vector]] pointing from $m_1$ toward $m_2$; the minus sign says the force on $m_2$ points back toward $m_1$. $G$ is the [[phys-gravitational-constant|gravitational constant]].',
        },
        {
          type: 'figure',
          svg: TWO_MASS_SVG,
          alt: 'Two spheres m1 and m2 a distance r apart. An arrow on m1 points toward m2 and an arrow on m2 points toward m1; the arrows have equal length.',
          caption: 'The two forces are a Newton\'s-third-law pair: equal in size, opposite in direction, acting on **different** bodies. Even if $m_1$ is a planet and $m_2$ is a pebble, the arrows are the same length.',
          maxWidth: 460,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an inverse square?',
          text: 'Picture the influence of a mass spreading out evenly in all directions. At distance $r$ it is shared over a sphere of area $4\\pi r^2$, so its strength per unit area goes as $1/r^2$. Light, sound intensity and electric fields of point charges all follow the same geometry. [[phys-newtons-law-of-gravitation|Newton\'s law]] is called *universal* because the same $G$ works for apples, moons, planets and galaxies.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Earth pulls down on you with a gravitational force of $700\\,\\text{N}$. How large is the gravitational force **you** exert on Earth?',
      options: [
        { text: '$700\\,\\text{N}$, directed toward you', correct: true, why: 'Gravitational forces come in third-law pairs. The formula $Gm_1m_2/r^2$ is symmetric in the two masses, so both bodies feel the same magnitude.' },
        { text: 'Practically zero, because your mass is tiny compared with Earth\'s', why: 'Your mass is tiny, but it appears in the formula for both forces. What is tiny is Earth\'s **acceleration**: $700\\,\\text{N}/(5.97 \\times 10^{24}\\,\\text{kg}) \\approx 10^{-22}\\,\\text{m/s}^2$.' },
        { text: 'Zero, because you are not pushing on the ground with gravity', why: 'Gravity acts at a distance, with no contact needed. Your pull on Earth exists even while you are in mid-jump.' },
        { text: '$700\\,\\text{N}$ multiplied by $M_E/m$, because Earth has more mass to pull on', why: 'That would make the pair unequal. Both forces equal $GM_Em/r^2$; neither body\'s mass counts twice.' },
      ],
      explanation: 'The pair "Earth pulls you" and "you pull Earth" are equal in size and opposite in direction. They have very different **effects** because $a = F/m$: the same $700\\,\\text{N}$ gives you $9.8\\,\\text{m/s}^2$ and Earth about $10^{-22}\\,\\text{m/s}^2$. The forces act on different bodies, so they never cancel each other.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Measuring G: the Cavendish experiment',
      blocks: [
        {
          type: 'p',
          text: 'The modern value is $G = 6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$. Check the units with [[dimensional-analysis]]: $Gm_1m_2/r^2$ must come out in newtons, so $G$ carries $\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$. The value is tiny. Two $70\\,\\text{kg}$ people standing $1\\,\\text{m}$ apart attract with about $3 \\times 10^{-7}\\,\\text{N}$, about the weight of a single grain of sand a third of a millimeter across. You only notice gravity when one of the masses is planet-sized.',
        },
        {
          type: 'p',
          text: 'That is what made $G$ so hard to measure. In 1798 Henry Cavendish hung a light rod with two small lead spheres from a thin fiber. Two large lead spheres placed nearby pulled the small ones sideways, and the rod twisted until the fiber\'s restoring [[la-torque|torque]] balanced the gravitational torque.',
        },
        {
          type: 'figure',
          svg: CAVENDISH_SVG,
          alt: 'Top view of a torsion balance: a rod with small spheres m on each end hangs from a fiber at its center. Large spheres M sit beside the small spheres on opposite sides, and red arrows show each small sphere pulled toward its large neighbor, twisting the rod by an angle theta from its dashed rest position.',
          caption: 'Top view of the torsion balance. The two attractions (red) form a couple that twists the fiber by a small angle $\\theta$. A light beam bounced off a mirror on the fiber magnifies the twist. Knowing the fiber\'s stiffness, you get the force, and from the force, $G$.',
          maxWidth: 460,
        },
        {
          type: 'p',
          text: 'Cavendish described his result as finding the density of Earth, and that is the real payoff. Before $G$ was known, astronomers knew only the product $GM$ for Earth (from $g$ and $R_E$), not $M$ itself. Once you know $G$, you can weigh the planet.',
        },
        {
          type: 'derivation',
          title: 'Weighing the Earth',
          steps: [
            { tex: 'mg = \\frac{GM_E m}{R_E^2}', why: 'At the surface, the gravitational force on a mass $m$ is its weight $mg$. The shell theorem (later in this lesson) lets us treat Earth as a point mass at its center.' },
            { tex: 'g = \\frac{GM_E}{R_E^2}', why: 'Cancel $m$. This is why all objects fall with the same $g$: the mass that feels the force is the same mass that resists acceleration.' },
            { tex: 'M_E = \\frac{gR_E^2}{G} = \\frac{(9.80\\,\\text{m/s}^2)(6.37 \\times 10^{6}\\,\\text{m})^2}{6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2}', why: 'Solve for $M_E$ and substitute.' },
            { tex: '= 5.96 \\times 10^{24}\\,\\text{kg}', why: 'Units: $(\\text{m/s}^2)(\\text{m}^2) / (\\text{N}\\cdot\\text{m}^2/\\text{kg}^2) = \\text{kg}^2\\cdot\\text{m}/(\\text{s}^2\\cdot\\text{N}) = \\text{kg}$, since $\\text{N} = \\text{kg}\\cdot\\text{m/s}^2$.' },
          ],
          result: 'Earth\'s mass is about $5.97 \\times 10^{24}\\,\\text{kg}$ (the small difference comes from rounding $g$ and $R_E$). Dividing by the volume $\\tfrac43\\pi R_E^3$ gives an average [[density]] of about $5500\\,\\text{kg/m}^3$, twice that of surface rock, so the core must be dense metal.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Heavier objects fall faster"',
          text: 'A bowling ball feels a bigger gravitational force than a marble, but it also has more inertia. In $a = F/m = (GM_E m/R_E^2)/m$ the mass cancels exactly, so without air resistance both fall with $g$. Only drag (or a non-uniform field) can make them differ.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A rover on Mars measures $g = 3.71\\,\\text{m/s}^2$. The radius of Mars is $3.39 \\times 10^{6}\\,\\text{m}$ and $G = 6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$. Find the mass of Mars, in units of $10^{23}\\,\\text{kg}$, to 3 significant figures.',
      hint: 'Use $g = GM/R^2$ and solve for $M$. Remember to square the radius.',
      label: '$M_{\\text{Mars}} =$',
      unit: '× 10²³ kg',
      answer: '3.71*(3.39*10^6)^2/(6.674*10^-11)/10^23',
      answerTex: '6.39',
      tolerance: 0.04,
      explanation: '$M = \\dfrac{gR^2}{G} = \\dfrac{(3.71)(3.39 \\times 10^{6})^2}{6.674 \\times 10^{-11}} = \\dfrac{(3.71)(1.149 \\times 10^{13})}{6.674 \\times 10^{-11}} = 6.39 \\times 10^{23}\\,\\text{kg}$, about $11\\%$ of Earth\'s mass. Forgetting to square $R$ gives a number around $10^{17}$; dividing by $R^2$ instead of multiplying gives an absurdly small mass. Both fail a units check, because only $gR^2/G$ comes out in kilograms.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'How g changes with altitude',
      blocks: [
        {
          type: 'p',
          text: 'Above the surface, at distance $r = R_E + h$ from Earth\'s center, the same reasoning gives',
        },
        {
          type: 'math',
          tex: 'g(h) = \\frac{GM_E}{(R_E + h)^2} = g_0\\left(\\frac{R_E}{R_E + h}\\right)^2',
          caption: '$g_0 = 9.80\\,\\text{m/s}^2$ is the surface value. Always measure $r$ from the **center** of the planet, never from the ground.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 10.5],
          xStep: 5,
          yStep: 1,
          height: 280,
          functions: [
            { expr: '9.80/(1 + x/6.37)^2', color: 'blue', label: '$g(h) = g_0 R_E^2/(R_E + h)^2$' },
            { expr: '9.80(1 - 2x/6.37)', color: 'gray', dashed: true, label: 'linear approximation $g_0(1 - 2h/R_E)$', domain: [0, 3.2] },
          ],
          points: [
            { x: 0.408, y: '9.80/(1 + 0.408/6.37)^2', color: 'green', label: 'ISS' },
            { x: 20.2, y: '9.80/(1 + 20.2/6.37)^2', color: 'purple', label: 'GPS' },
            { x: 35.8, y: '9.80/(1 + 35.8/6.37)^2', color: 'purple', label: 'geostationary' },
            { x: 'h', y: '9.80/(1 + h/6.37)^2', color: 'red' },
          ],
          vlines: [{ x: 'h', color: 'red' }],
          sliders: [{ name: 'h', min: 0, max: 40, step: 0.1, value: 6.4, label: 'altitude $h$ (thousands of km)' }],
          readouts: [
            { label: '$g =$', expr: '9.80/(1 + h/6.37)^2', digits: 3 },
            { label: '$g/g_0 =$', expr: '1/(1 + h/6.37)^2', digits: 3 },
          ],
          caption: 'Horizontal axis: altitude in thousands of km; vertical axis: $g$ in $\\text{m/s}^2$. At $h = R_E \\approx 6400\\,\\text{km}$ you are twice as far from the center and $g$ is a quarter of $g_0$. At the space station\'s altitude, $g$ has dropped only about 12%.',
        },
        {
          type: 'derivation',
          title: 'Gravity at the International Space Station ($h = 408\\,\\text{km}$)',
          steps: [
            { tex: 'r = R_E + h = 6.37 \\times 10^{6} + 0.408 \\times 10^{6} = 6.78 \\times 10^{6}\\,\\text{m}', why: 'Distance from Earth\'s center, not from the ground.' },
            { tex: 'g = g_0\\left(\\frac{R_E}{r}\\right)^2 = 9.80\\left(\\frac{6.37}{6.78}\\right)^2', why: 'The ratio form avoids needing $G$ and $M_E$ separately.' },
            { tex: '= 8.65\\,\\text{m/s}^2 \\approx 0.88\\,g_0', why: 'Arithmetic.' },
          ],
          result: 'Gravity at the ISS is still about 88% of its surface value.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"There is no gravity in space"',
          text: 'Astronauts float **not** because gravity is gone but because they and their station are falling together. Both have the same acceleration $g = 8.65\\,\\text{m/s}^2$ toward Earth, so the floor never pushes on anyone\'s feet. That is free fall. The station misses the ground because it also moves sideways at about $7.7\\,\\text{km/s}$, as the next lesson shows.',
        },
        {
          type: 'deepdive',
          title: 'Where the linear approximation comes from',
          blocks: [
            {
              type: 'p',
              text: 'For $h \\ll R_E$, write $g(h) = g_0(1 + h/R_E)^{-2}$ and use the binomial (first-order [[taylor-series|Taylor]]) approximation $(1 + u)^{n} \\approx 1 + nu$ for small $u$. If you have not seen Taylor series, this is just the tangent line: the derivative of $(1 + u)^{-2}$ at $u = 0$ is $-2$. So $g(h) \\approx g_0(1 - 2h/R_E)$: gravity drops by about $0.03\\%$ per kilometer of altitude. That is the dashed line, and it hugs the true curve only for the first few hundred kilometers.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'Astronauts aboard the International Space Station (altitude about $400\\,\\text{km}$) float because they are beyond the reach of Earth\'s gravity.',
      answer: false,
      explanation: 'False. At $400\\,\\text{km}$, $r$ is only about 6% larger than $R_E$, so $g$ is still about $0.88\\,g_0 \\approx 8.7\\,\\text{m/s}^2$. Gravity has no cutoff: it falls as $1/r^2$ but never reaches zero. The astronauts float because they and the station are in free fall together, so nothing has to push them to keep them with the station.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The gravitational field, and adding fields',
      blocks: [
        {
          type: 'p',
          text: 'Instead of asking "what force acts on this particular mass?", ask "what would act on **each kilogram** placed here?" That defines the [[phys-gravitational-field|gravitational field]]:',
        },
        {
          type: 'definition',
          term: 'Gravitational field',
          text: '$\\vec{g}(\\vec{r}) = \\dfrac{\\vec{F}}{m}$, the gravitational force per unit mass on a small test mass $m$ at position $\\vec{r}$. For a point mass $M$ at the origin, $\\vec{g} = -\\dfrac{GM}{r^2}\\,\\hat{r}$: magnitude $GM/r^2$, pointing toward $M$. Units: $\\text{N/kg} = \\text{m/s}^2$, so the field **is** the free-fall acceleration at that point.',
        },
        {
          type: 'figure',
          svg: FIELD_SVG,
          alt: 'A sphere labeled M with arrows all around it pointing inward. Arrows close to the sphere are long; arrows twice as far away are one quarter as long.',
          caption: 'The field of a single mass: a [[vector]] at every point, pointing at $M$ and shrinking as $1/r^2$.',
          maxWidth: 440,
        },
        {
          type: 'p',
          text: 'Gravity obeys **superposition**: the field of several masses is the vector sum of their separate fields. Between Earth and the Moon the two fields point in opposite directions, and somewhere they cancel.',
        },
        {
          type: 'derivation',
          title: 'Where do the Earth\'s and Moon\'s fields cancel?',
          steps: [
            { tex: '\\frac{GM_E}{x^2} = \\frac{GM_M}{(d - x)^2}', why: 'At distance $x$ from Earth\'s center on the line to the Moon ($d = 3.84 \\times 10^8\\,\\text{m}$), the two magnitudes must be equal; the directions are already opposite.' },
            { tex: '\\frac{d - x}{x} = \\sqrt{\\frac{M_M}{M_E}} = \\sqrt{\\frac{7.35 \\times 10^{22}}{5.97 \\times 10^{24}}} = 0.111', why: 'Cancel $G$, rearrange, and take the positive square root (both distances are positive between the bodies).' },
            { tex: 'x = \\frac{d}{1 + 0.111} = 0.900\\,d = 3.46 \\times 10^{8}\\,\\text{m}', why: 'Solve the linear equation $d - x = 0.111x$ for $x$.' },
          ],
          result: 'The neutral point is 90% of the way to the Moon. A spacecraft coasting to the Moon slows down for most of the trip and only starts speeding up in the last tenth.',
        },
        {
          type: 'graph',
          x: [0.5, 1],
          y: [-4, 4],
          xStep: 0.1,
          yStep: 1,
          height: 270,
          functions: [{ expr: '-1/x^2 + q/(1 - x)^2', color: 'blue', label: 'net field $g_x$ (units of $GM_E/d^2$)' }],
          hlines: [{ y: 0, color: 'gray' }],
          points: [{ x: '1/(1 + sqrt(q))', y: 0, color: 'red', label: 'neutral point' }],
          sliders: [{ name: 'q', min: 0.002, max: 0.1, step: 0.001, value: 0.0123, label: 'mass ratio $M_{\\text{moon}}/M_{\\text{planet}}$' }],
          readouts: [{ label: 'neutral point at $x/d =$', expr: '1/(1 + sqrt(q))', digits: 3 }],
          caption: 'Net field along the line from the planet (at $x = 0$) to the moon (at $x = d$). Negative values pull back toward the planet. Earth–Moon is $q = 0.0123$. A heavier moon pushes the neutral point toward the planet, but only as $\\sqrt{q}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Superposition is a loop',
          text: 'A space game or N-body simulator computes $\\vec{g}$ at a point by summing $GM_i/r_i^2$ along each unit vector $\\hat{r}_i$, exactly as below. With $N$ bodies all pulling on each other this costs $O(N^2)$ per step, which is why large simulations use tree methods (Barnes–Hut) that treat distant clusters as single masses. The shell theorem in the next card is what justifies treating a whole planet as one point.',
        },
        {
          type: 'code',
          title: 'field.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

struct Vec2 { double x, y; };
struct Body { double mass; Vec2 pos; };

constexpr double G = 6.674e-11;  // N m^2 / kg^2

// Gravitational field at p: add up GM/r^2 toward every body (superposition).
Vec2 field(const std::vector<Body>& bodies, Vec2 p) {
    Vec2 g{0.0, 0.0};
    for (const Body& b : bodies) {
        double dx = b.pos.x - p.x, dy = b.pos.y - p.y;  // from p toward the body
        double r2 = dx * dx + dy * dy;
        double r = std::sqrt(r2);
        double mag = G * b.mass / r2;                   // |g| = GM / r^2
        g.x += mag * dx / r;                            // times the unit vector
        g.y += mag * dy / r;
    }
    return g;
}

int main() {
    const double d = 3.84e8;                            // Earth-Moon distance, m
    std::vector<Body> bodies = {{5.97e24, {0.0, 0.0}},  // Earth
                                {7.35e22, {d, 0.0}}};   // Moon
    for (double f : {0.25, 0.50, 0.75, 0.90, 0.95}) {
        Vec2 g = field(bodies, {f * d, 0.0});
        std::printf("x = %.2f d   g_x = %+.6f m/s^2\\n", f, g.x);
    }
    double lo = 0.5 * d, hi = 0.99 * d;                 // bisection on g_x = 0
    for (int i = 0; i < 60; ++i) {
        double mid = 0.5 * (lo + hi);
        if (field(bodies, {mid, 0.0}).x > 0.0) hi = mid;
        else lo = mid;
    }
    std::printf("neutral point: %.4f d = %.0f km from Earth\\n", lo / d, lo / 1000.0);
}`,
          output: `x = 0.25 d   g_x = -0.043174 m/s^2
x = 0.50 d   g_x = -0.010675 m/s^2
x = 0.75 d   g_x = -0.004271 m/s^2
x = 0.90 d   g_x = -0.000009 m/s^2
x = 0.95 d   g_x = +0.010313 m/s^2
neutral point: 0.9001 d = 345648 km from Earth`,
          annotations: [
            { lines: '11-22', text: 'The field of each body is $GM/r^2$ times the unit vector $(dx, dy)/r$ that points from $p$ toward the body; the loop adds the vectors.' },
            { lines: '28-31', text: 'Sample the net field along the Earth–Moon line. It is negative (toward Earth) until very close to the Moon.' },
            { lines: '32-38', text: 'Bisection: $g_x$ changes sign once between $0.5d$ and $0.99d$, so halving the bracket 60 times pins the zero down to machine precision.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'At what altitude above Earth\'s surface is $g$ exactly **half** its surface value? Use $R_E = 6370\\,\\text{km}$ and give the altitude in kilometers to 3 significant figures.',
      hint: 'Set $g_0 R_E^2/r^2 = g_0/2$ and solve for $r$. Then remember what "altitude" means.',
      label: '$h =$',
      unit: 'km',
      answer: '(sqrt(2) - 1)*6370',
      answerTex: '2640',
      tolerance: 15,
      explanation: '$\\dfrac{R_E^2}{r^2} = \\dfrac12 \\implies r = \\sqrt{2}\\,R_E = 9008\\,\\text{km}$ from the center. The altitude is $h = r - R_E = (\\sqrt{2} - 1)(6370\\,\\text{km}) = 2640\\,\\text{km}$. Two common slips: answering $9010\\,\\text{km}$ (that is $r$, measured from the center) and answering $6370\\,\\text{km}$ (doubling the distance quarters $g$; it does not halve it).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The shell theorem: why planets act like points',
      blocks: [
        {
          type: 'p',
          text: 'So far you have treated Earth as if all its mass sat at its center. That is not obvious: the rock under your feet is $1\\,\\text{km}$ away, while rock on the far side is $12\\,700\\,\\text{km}$ away. Newton proved that for spherical symmetry it works exactly. The result is the [[phys-shell-theorem|shell theorem]].',
        },
        {
          type: 'theorem',
          name: 'Shell theorem (Newton)',
          text: 'For a thin, uniform spherical shell of mass $M$: **(1)** at any point **outside** the shell, its gravitational field is the same as that of a point mass $M$ at the center, $GM/r^2$; **(2)** at any point **inside** the shell, its net field is exactly zero. A solid sphere whose density depends only on $r$ is a nest of such shells, so outside it acts like a point mass too.',
        },
        {
          type: 'figure',
          svg: SHELL_SVG,
          alt: 'A circle representing a shell, with a point P inside, off-center. A thin cone from P reaches a nearby small patch A2 on the shell, and the opposite cone reaches a distant, larger patch A1. Arrows from P point toward each patch.',
          caption: 'Inside the shell: a thin double cone through $P$ cuts out two patches. The far patch is bigger by the factor $(r_1/r_2)^2$ but farther by the same factor, so their pulls on $P$ are equal and opposite.',
          maxWidth: 460,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the inside field cancels (Newton\'s sketch)',
          text: 'Draw any thin double cone with its tip at $P$. It cuts out patch $A_1$ at distance $r_1$ and patch $A_2$ at distance $r_2$. A cone\'s cross-section grows as the square of the distance, so $A_1/A_2 = r_1^2/r_2^2$, and with uniform surface density the patch masses are in the same ratio. Each patch pulls with a force proportional to (its mass)$/r^2$, which is the **same** for both. The pulls point in opposite directions, so they cancel. Every direction from $P$ pairs up this way, so the total is zero.',
        },
        {
          type: 'p',
          text: '**Inside a solid planet.** At radius $r < R$ inside a uniform planet, the shells outside you cancel, and only the mass inside radius $r$ pulls: $M_{\\text{in}} = M\\,r^3/R^3$ (volume fraction). So',
        },
        {
          type: 'math',
          tex: 'g(r) = \\frac{GM_{\\text{in}}}{r^2} = \\frac{GM}{R^3}\\,r = g_0\\,\\frac{r}{R} \\quad (r \\le R), \\qquad g(r) = g_0\\,\\frac{R^2}{r^2} \\quad (r \\ge R)',
          caption: 'Inside a uniform planet, gravity grows **linearly** from zero at the center to $g_0$ at the surface, then falls as $1/r^2$ outside.',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [0, 1.15],
          xStep: 0.5,
          yStep: 0.25,
          height: 260,
          functions: [
            { expr: 'min(x, 1/x^2)', color: 'blue', label: 'uniform solid planet' },
            { expr: '1/x^2', color: 'orange', dashed: true, domain: [1, 4], label: 'all mass in a thin surface shell' },
            { expr: '0', color: 'orange', dashed: true, domain: [0, 1] },
          ],
          points: [{ x: 'r', y: 'min(r, 1/r^2)', color: 'red' }],
          vlines: [{ x: 1, label: 'surface', color: 'gray' }],
          sliders: [{ name: 'r', min: 0, max: 4, step: 0.05, value: 0.5, label: 'distance from center $r/R$' }],
          readouts: [{ label: '$g/g_0 =$', expr: 'min(r, 1/r^2)', digits: 3 }],
          caption: 'Field strength $g/g_0$ against $r/R$. Outside, every spherically symmetric planet of the same mass gives the same curve. Inside, it depends on where the mass is: zero for a hollow shell, linear for uniform density. (Real Earth has a dense core, so its $g$ actually rises slightly as you first go down.)',
        },
        {
          type: 'deepdive',
          title: 'Proof of the shell theorem by integration',
          blocks: [
            {
              type: 'p',
              text: 'Take a shell of radius $a$ and mass $M$, and a point $P$ at distance $r$ from its center. Slice the shell into rings around the line from the center to $P$. A ring at polar angle $\\theta$ has mass $dM = \\tfrac{M}{2}\\sin\\theta\\,d\\theta$, and every bit of it is the same distance $s$ from $P$, with $s^2 = r^2 + a^2 - 2ar\\cos\\theta$. By symmetry only the component along the axis survives, a fraction $(r - a\\cos\\theta)/s$ of each pull. Changing variable from $\\theta$ to $s$ makes the integral elementary:',
            },
            {
              type: 'derivation',
              steps: [
                { tex: 'g = \\int \\frac{G\\,dM}{s^2}\\cdot\\frac{r - a\\cos\\theta}{s}', why: 'Add up the axial components of all the ring pulls.' },
                { tex: 's\\,ds = ar\\sin\\theta\\,d\\theta, \\qquad r - a\\cos\\theta = \\frac{s^2 + r^2 - a^2}{2r}', why: 'Differentiate $s^2 = r^2 + a^2 - 2ar\\cos\\theta$; and solve the same equation for $a\\cos\\theta$.' },
                { tex: 'g = \\frac{GM}{4ar^2}\\int \\left(1 + \\frac{r^2 - a^2}{s^2}\\right)ds', why: 'Substitute both into the integral and simplify.' },
                { tex: 'r > a:\\ \\int_{r-a}^{r+a} \\Big(\\cdots\\Big)ds = 2a + (r^2 - a^2)\\left(\\frac{1}{r - a} - \\frac{1}{r + a}\\right) = 4a', why: 'Outside: $s$ runs from $r - a$ to $r + a$. The bracket simplifies to $\\frac{2a}{r^2 - a^2}$.' },
                { tex: '\\implies g = \\frac{GM}{4ar^2}\\cdot 4a = \\frac{GM}{r^2}', why: 'Exactly the point-mass field. Part (1) proved.' },
                { tex: 'r < a:\\ \\int_{a-r}^{a+r} \\Big(\\cdots\\Big)ds = 2r + (r^2 - a^2)\\cdot\\frac{2r}{a^2 - r^2} = 0', why: 'Inside: $s$ runs from $a - r$ to $a + r$, and the two terms cancel exactly. Part (2) proved.' },
              ],
              result: 'Both halves of the theorem drop out of one integral. They depend on the exact $1/r^2$ law: with any other power the cancellation fails.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Imagine Earth were a uniform-density ball, and you rode an elevator down a shaft to a point **halfway to the center** ($r = R_E/2$). Compared with your weight $W$ at the surface, your weight there would be:',
      options: [
        { text: '$W/2$', correct: true, why: 'Only the mass inside $r$ pulls (shell theorem), and $g = g_0\\,r/R_E$ inside a uniform sphere, so $g$ is half of $g_0$.' },
        { text: '$4W$', why: 'This uses $1/r^2$ with the full mass of Earth. But the outer shell no longer pulls you, and the mass inside $r = R_E/2$ is only $1/8$ of the total.' },
        { text: '$W/4$', why: 'There is no square here. The enclosed mass falls as $r^3$ and the $1/r^2$ factor grows, so the net effect is linear in $r$.' },
        { text: '$W$, since you are still on Earth', why: 'Gravity changes with position. Inside the planet it falls off linearly to zero at the center.' },
      ],
      explanation: 'At $r = R_E/2$ the enclosed mass is $M_E(1/2)^3 = M_E/8$ and the distance is $R_E/2$, so $g = \\dfrac{G(M_E/8)}{(R_E/2)^2} = \\dfrac{GM_E}{R_E^2}\\cdot\\dfrac{4}{8} = \\dfrac{g_0}{2}$. Your weight is $W/2$. At the center it would be zero.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Gravitational potential energy: −GMm/r',
      blocks: [
        {
          type: 'p',
          text: 'Near the ground you use $U = mgy$, which assumes the force $mg$ is constant. Over large distances it is not, so we go back to the definition of [[phys-potential-energy|potential energy]] for a [[phys-conservative-force|conservative force]], $\\Delta U = -W = -\\int F_r\\,dr$, and integrate (see [[work]] by integration). The result is the [[phys-universal-gravitational-potential-energy|universal form of gravitational potential energy]]. The radial component of gravity on $m$ at distance $r$ from $M$ is $F_r = -GMm/r^2$ (negative: it points inward).',
        },
        {
          type: 'derivation',
          title: 'Deriving $U(r)$',
          steps: [
            { tex: 'U(r) - U(r_0) = -\\int_{r_0}^{r} F_r\\,dr\' = \\int_{r_0}^{r} \\frac{GMm}{r\'^2}\\,dr\'', why: 'Definition: the change in potential energy is minus the work done by the force. Two minus signs make a plus.' },
            { tex: '= GMm\\left[-\\frac{1}{r\'}\\right]_{r_0}^{r} = GMm\\left(\\frac{1}{r_0} - \\frac{1}{r}\\right)', why: 'An [[antiderivative]] of $1/r^2$ is $-1/r$; evaluate it between the limits (FTC).' },
            { tex: 'r_0 \\to \\infty:\\quad U(r) - U(\\infty) = -\\frac{GMm}{r}', why: 'Choose the reference point infinitely far away, where the force vanishes.' },
            { tex: 'U(r) = -\\frac{GMm}{r} \\quad (\\text{with } U(\\infty) = 0)', why: 'Only differences in $U$ are physical, so we may set $U(\\infty) = 0$. Then $U$ is negative everywhere at finite $r$.' },
            { tex: '-\\frac{dU}{dr} = -\\frac{GMm}{r^2} = F_r \\ \\checkmark', why: 'Check: the force is minus the [[derivative]] of the potential energy.' },
          ],
          result: '$U(r) = -GMm/r$: zero at infinity, rising toward zero as $r$ grows. Moving apart always **increases** $U$, as it must, because gravity does negative work on a separating pair.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why negative? And where did mgh go?',
          text: 'Negative $U$ just means "it takes positive energy to pull the pair apart to infinity". The sign comes from where we chose zero, like measuring height from a rooftop. And $mgh$ is still here: lifting $m$ from $R$ to $R + h$ changes $U$ by $GMm\\left(\\frac{1}{R} - \\frac{1}{R + h}\\right) = \\frac{GMm\\,h}{R(R + h)} \\approx \\frac{GMm}{R^2}h = mgh$ when $h \\ll R$. On the graph below, $mgh$ is the **tangent line** to $U(r)$ at the surface, since its slope there is $GMm/R^2 = mg$.',
        },
        {
          type: 'graph',
          x: [0, 8],
          y: [-1.3, 0.4],
          xStep: 1,
          yStep: 0.25,
          height: 290,
          functions: [{ expr: '-1/x', color: 'blue', domain: [1, 8], label: '$U(r)$ in units of $GMm/R$' }],
          tangents: [{ expr: '-1/x', at: 1, color: 'gray', label: 'mgh' }],
          hlines: [{ y: 'E', color: 'red', label: 'total energy E' }],
          vlines: [{ x: 1, label: 'surface', color: 'gray' }],
          points: [{ x: '-1/E', y: 'E', color: 'red', label: 'turning point' }],
          sliders: [{ name: 'E', min: -0.95, max: 0.3, step: 0.01, value: -0.4, label: 'total energy $E = K + U$ (units of $GMm/R$)' }],
          readouts: [
            { label: 'max distance $r_{\\max}/R = -1/E =$', expr: '-1/E', digits: 3 },
          ],
          caption: 'An object launched straight up has $K = E - U \\ge 0$, so it can only reach distances where the red line is above the blue curve. For $E < 0$ it turns around at $r_{\\max} = GMm/|E|$ and falls back: it is **bound**. Slide $E$ up to $0$ and the turning point runs off to infinity; for $E \\ge 0$ the readout goes negative because there is no turning point at all. That is escape, the subject of the next lesson.',
        },
        {
          type: 'derivation',
          title: 'Lifting a $1000\\,\\text{kg}$ payload to $400\\,\\text{km}$: exact vs $mgh$',
          steps: [
            { tex: '\\Delta U = GM_E m\\left(\\frac{1}{R_E} - \\frac{1}{R_E + h}\\right)', why: 'Exact change in $U = -GMm/r$ from the surface to altitude $h$.' },
            { tex: '= (3.98 \\times 10^{14})(1000)\\left(\\frac{1}{6.37 \\times 10^{6}} - \\frac{1}{6.77 \\times 10^{6}}\\right)', why: '$GM_E = (6.674 \\times 10^{-11})(5.97 \\times 10^{24}) = 3.98 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$.' },
            { tex: '= 3.70 \\times 10^{9}\\,\\text{J}', why: 'Arithmetic (keep several digits in the subtraction: the two fractions are close).' },
            { tex: 'mgh = (1000)(9.80)(4.00 \\times 10^{5}) = 3.92 \\times 10^{9}\\,\\text{J}', why: 'The constant-$g$ estimate is about 6% too high, because $g$ weakens on the way up.' },
          ],
          result: 'For a 400 km climb, $mgh$ is already noticeably off. For satellites and missiles, always use $-GMm/r$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'How much energy does it take to raise a $500\\,\\text{kg}$ satellite from Earth\'s surface to an altitude of $2000\\,\\text{km}$ (just the change in gravitational potential energy, ignoring its speed)? Use $G = 6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, $M_E = 5.97 \\times 10^{24}\\,\\text{kg}$ and $R_E = 6.37 \\times 10^{6}\\,\\text{m}$. Give the answer in gigajoules ($10^9\\,\\text{J}$) to 3 significant figures.',
      hint: '$\\Delta U = GMm\\left(\\frac{1}{R_E} - \\frac{1}{R_E + h}\\right)$. Is $mgh$ good enough at this altitude?',
      label: '$\\Delta U =$',
      unit: 'GJ',
      answer: '6.674*10^-11*5.97*10^24*500*(1/(6.37*10^6) - 1/(8.37*10^6))/10^9',
      answerTex: '7.47',
      tolerance: 0.05,
      explanation: '$\\Delta U = GM_E m\\left(\\frac{1}{R_E} - \\frac{1}{R_E + h}\\right) = (3.98 \\times 10^{14})(500)\\left(\\frac{1}{6.37 \\times 10^{6}} - \\frac{1}{8.37 \\times 10^{6}}\\right) = 7.47 \\times 10^{9}\\,\\text{J} = 7.47\\,\\text{GJ}$. The constant-$g$ shortcut $mgh = (500)(9.80)(2.00 \\times 10^{6}) = 9.80\\,\\text{GJ}$ overestimates by about 30%, because $g$ at $2000\\,\\text{km}$ is only $5.7\\,\\text{m/s}^2$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student finds the gravitational force on a $1000\\,\\text{kg}$ satellite at an altitude of $600\\,\\text{km}$. Tap the first line with a mistake.',
      lines: [
        '$F = \\dfrac{GM_E m}{r^2}$, the law of gravitation with Earth treated as a point mass.',
        '$GM_E = (6.674 \\times 10^{-11})(5.97 \\times 10^{24}) = 3.98 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$',
        '$r = 600\\,\\text{km} = 6.00 \\times 10^{5}\\,\\text{m}$',
        '$F = \\dfrac{(3.98 \\times 10^{14})(1000)}{(6.00 \\times 10^{5})^2} = 1.11 \\times 10^{6}\\,\\text{N}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 measures $r$ from the ground. In Newton\'s law $r$ is the center-to-center distance: $r = R_E + h = 6.37 \\times 10^{6} + 0.60 \\times 10^{6} = 6.97 \\times 10^{6}\\,\\text{m}$. Then $F = \\dfrac{(3.98 \\times 10^{14})(1000)}{(6.97 \\times 10^{6})^2} = 8.20 \\times 10^{3}\\,\\text{N}$, a bit less than its surface weight of $9800\\,\\text{N}$. The student\'s answer, more than 100 times the surface weight, should have been a red flag.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'expr',
      prompt: 'Using $GM_E = gR_E^2$, write the gravitational potential energy $U = -GM_Em/r$ of a mass $m$ sitting **on Earth\'s surface** in terms of $m$, $g$ and $R$ (Earth\'s radius).',
      hint: 'Set $r = R$ and replace $GM_E$.',
      label: '$U(R) =$',
      answer: '-m*g*R',
      answerTex: '-mgR',
      variables: ['m', 'g', 'R'],
      domain: [1, 5],
      explanation: '$U(R) = -\\dfrac{GM_E m}{R} = -\\dfrac{(gR^2)m}{R} = -mgR$. For a $1\\,\\text{kg}$ mass that is $-(9.80)(6.37 \\times 10^{6}) = -6.2 \\times 10^{7}\\,\\text{J}$. So $6.2 \\times 10^{7}\\,\\text{J}$ per kilogram is what it takes to lift something from the surface all the way out to infinity, the energy behind escape speed in the next lesson.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps of the derivation of $U(r) = -GMm/r$ in order.',
      lines: [
        'Write the radial force: $F_r = -GMm/r^2$.',
        'Use $U(r) - U(r_0) = -\\int_{r_0}^{r} F_r\\,dr\'$.',
        'Evaluate the integral: $U(r) - U(r_0) = GMm\\left(\\frac{1}{r_0} - \\frac{1}{r}\\right)$.',
        'Let $r_0 \\to \\infty$ and set $U(\\infty) = 0$, giving $U(r) = -GMm/r$.',
        'Check that $-dU/dr$ gives back $F_r$.',
      ],
      explanation: 'You need the force before you can integrate it, the integral before you can choose a limit, and the final formula before you can check it. Each step uses the previous one, so this is the only order that works. The last step, checking $-dU/dr = F_r$, is worth doing every time: it catches sign errors immediately.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the statements about $U(r) = -GMm/r$.',
      template: 'For every finite separation, $U$ is ___. As $r \\to \\infty$, $U$ approaches ___. An object whose total energy $K + U$ is negative can never reach infinity: it is ___.',
      blanks: [{ answers: ['negative'] }, { answers: ['zero'] }, { answers: ['bound'] }],
      wordBank: ['negative', 'zero', 'bound', 'positive', 'unbound', 'infinity'],
      explanation: '$-GMm/r < 0$ for every finite $r$, and it rises toward $0$ as $r \\to \\infty$ (that was our choice of reference). Since $K \\ge 0$, reaching infinity requires $E = K + U \\ge 0$. With $E < 0$ there is a maximum distance $r_{\\max} = GMm/|E|$ where $K$ hits zero: the object is gravitationally **bound**, like the Moon to Earth.',
    },
  ],
  takeaways: [
    'Newton\'s law of gravitation: $F = Gm_1m_2/r^2$ along the line between the masses, with $G = 6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$. The two forces are a third-law pair; $r$ is center to center.',
    'Cavendish\'s torsion balance measured $G$, which turned $g = GM/R^2$ into a way to weigh planets: $M = gR^2/G$.',
    'The gravitational field $\\vec{g} = \\vec{F}/m$ is the free-fall acceleration at each point. Fields from several masses add as vectors (superposition).',
    'Shell theorem: a uniform shell acts like a point mass outside and exerts zero net force inside. Inside a uniform planet, $g = g_0\\,r/R$.',
    '$U(r) = -GMm/r$ comes from integrating the force, with $U(\\infty) = 0$. Near the surface its tangent line is $mgh$; for large altitude changes use the exact form.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 13: Gravitation',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 13.1–13.3 cover the law of gravitation, gravity near Earth\'s surface and gravitational potential energy, with many worked examples.',
    },
    {
      title: 'Cavendish experiment',
      url: 'https://en.wikipedia.org/wiki/Cavendish_experiment',
      source: 'wikipedia',
      note: 'The history and physics of the torsion balance, including how Cavendish turned a tiny twist into the density of the Earth.',
    },
    {
      title: 'Shell theorem',
      url: 'https://en.wikipedia.org/wiki/Shell_theorem',
      source: 'wikipedia',
      note: 'Full proofs of both halves of the theorem, plus the gravity tunnel through a uniform Earth.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "Gravity Force Lab" and "Gravity and Orbits" simulations to experiment with masses, distances and the inverse-square law.',
    },
  ],
};
