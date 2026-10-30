import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_MODELS = `<svg viewBox="0 0 470 440" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="as-ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="f-teal"/></marker></defs>
<circle cx="60" cy="50" r="36" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<text x="120" y="44" style="font-size:17px" font-weight="700">Dalton, 1808</text>
<text x="120" y="66">Solid, indivisible spheres</text>
<line x1="60" y1="92" x2="60" y2="118" class="s-teal" stroke-width="2.5" marker-end="url(#as-ar1)"/>
<text x="84" y="110" class="t-teal">Cathode rays (1897): atoms contain tiny − particles</text>
<circle cx="60" cy="160" r="38" class="f-red s-red" fill-opacity="0.15" stroke-width="1.5"/>
<g fill="currentColor"><circle cx="46" cy="138" r="4.5"/><circle cx="75" cy="146" r="4.5"/><circle cx="52" cy="164" r="4.5"/><circle cx="80" cy="172" r="4.5"/><circle cx="36" cy="180" r="4.5"/><circle cx="64" cy="188" r="4.5"/><circle cx="34" cy="154" r="4.5"/><circle cx="62" cy="129" r="4.5"/></g>
<text x="120" y="154" style="font-size:17px" font-weight="700">Thomson, 1904</text>
<text x="120" y="176">Electrons dotted through a + “pudding”</text>
<line x1="60" y1="202" x2="60" y2="228" class="s-teal" stroke-width="2.5" marker-end="url(#as-ar1)"/>
<text x="84" y="220" class="t-teal">Gold foil (1909): a few α particles bounce back</text>
<circle cx="60" cy="270" r="38" fill="none" stroke="currentColor" stroke-dasharray="4 4"/>
<circle cx="60" cy="270" r="3.5" class="f-red"/>
<g fill="currentColor"><circle cx="38" cy="250" r="3"/><circle cx="84" cy="258" r="3"/><circle cx="44" cy="292" r="3"/><circle cx="78" cy="290" r="3"/><circle cx="62" cy="240" r="3"/><circle cx="30" cy="272" r="3"/></g>
<text x="120" y="264" style="font-size:17px" font-weight="700">Rutherford, 1911</text>
<text x="120" y="286">Tiny dense + nucleus; mostly empty space</text>
<line x1="60" y1="312" x2="60" y2="338" class="s-teal" stroke-width="2.5" marker-end="url(#as-ar1)"/>
<text x="84" y="330" class="t-teal">Line spectra: atoms emit only certain colors</text>
<circle cx="60" cy="380" r="17" fill="none" stroke="currentColor"/>
<circle cx="60" cy="380" r="34" fill="none" stroke="currentColor"/>
<circle cx="60" cy="380" r="4" class="f-red"/>
<g fill="currentColor"><circle cx="77" cy="380" r="3.5"/><circle cx="43" cy="380" r="3.5"/><circle cx="60" cy="346" r="3.5"/><circle cx="94" cy="380" r="3.5"/><circle cx="60" cy="414" r="3.5"/><circle cx="26" cy="380" r="3.5"/></g>
<text x="120" y="374" style="font-size:17px" font-weight="700">Bohr, 1913</text>
<text x="120" y="396">Electrons in fixed energy levels (shells)</text>
</svg>`;

const FIG_GOLD_FOIL = `<svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="as-ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="f-orange"/></marker></defs>
<text x="10" y="20" font-weight="700">The experiment</text>
<rect x="14" y="78" width="56" height="44" rx="3" class="f-gray" fill-opacity="0.45" stroke="currentColor"/>
<text x="42" y="142" text-anchor="middle">α source</text>
<text x="42" y="160" text-anchor="middle">(in lead)</text>
<line x1="70" y1="100" x2="244" y2="100" class="s-orange" stroke-width="3"/>
<circle cx="250" cy="100" r="90" fill="none" class="s-gray" stroke-dasharray="5 5"/>
<rect x="247" y="48" width="6" height="104" class="f-orange"/>
<text x="250" y="174" text-anchor="middle">gold foil</text>
<line x1="253" y1="94" x2="336" y2="94" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<line x1="253" y1="100" x2="338" y2="100" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<line x1="253" y1="106" x2="336" y2="106" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<line x1="253" y1="100" x2="322" y2="55" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<line x1="253" y1="100" x2="310" y2="160" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<line x1="248" y1="98" x2="180" y2="50" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<text x="348" y="105">most go straight through</text>
<text x="330" y="52">a few are deflected</text>
<text x="320" y="174">a few are deflected</text>
<text x="172" y="40" text-anchor="end">≈ 1 in 8000 bounces back</text>
<text x="350" y="138" class="t-gray">detector screen</text>
<line x1="0" y1="200" x2="520" y2="200" stroke="currentColor" stroke-opacity="0.3"/>
<text x="10" y="226" font-weight="700">Zoomed in: one gold atom</text>
<circle cx="270" cy="295" r="70" fill="none" stroke="currentColor" stroke-dasharray="4 4" stroke-opacity="0.6"/>
<circle cx="270" cy="295" r="6" class="f-red"/>
<text x="284" y="284">nucleus (+79)</text>
<text x="12" y="253" class="t-orange">α</text>
<path d="M30,248 L480,248" fill="none" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<path d="M30,291 L248,291 A4,4 0 0 1 248,299 L120,299" fill="none" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<path d="M30,318 L210,318 C245,318 262,322 290,340 L390,388" fill="none" class="s-orange" stroke-width="2" marker-end="url(#as-ar2)"/>
<text x="10" y="412" class="t-gray">Far: straight on. Close: deflected. Head-on: turned back.</text>
</svg>`;

const FIG_STADIUM = `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="30" width="480" height="210" rx="105" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="60" y="62" width="400" height="146" rx="73" fill="none" stroke="currentColor" stroke-opacity="0.4"/>
<rect x="125" y="85" width="270" height="100" class="f-green s-green" fill-opacity="0.15"/>
<line x1="260" y1="85" x2="260" y2="185" class="s-green" stroke-opacity="0.6"/>
<circle cx="260" cy="135" r="2.5" class="f-red"/>
<line x1="263" y1="132" x2="300" y2="110" class="s-red"/>
<text x="304" y="108" class="t-red">nucleus = a marble</text>
<g fill="currentColor" fill-opacity="0.7"><circle cx="45" cy="135" r="1.6"/><circle cx="425" cy="50" r="1.6"/><circle cx="470" cy="165" r="1.6"/><circle cx="80" cy="200" r="1.6"/><circle cx="300" cy="224" r="1.6"/><circle cx="150" cy="230" r="1.6"/></g>
<text x="260" y="58" text-anchor="middle" class="t-gray">electrons: specks somewhere in the stands</text>
<line x1="22" y1="268" x2="498" y2="268" stroke="currentColor"/>
<line x1="22" y1="260" x2="22" y2="276" stroke="currentColor"/>
<line x1="498" y1="260" x2="498" y2="276" stroke="currentColor"/>
<text x="260" y="292" text-anchor="middle">whole atom ≈ 200 m across</text>
</svg>`;

const FIG_ISOTOPES = `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
<text x="92" y="66" text-anchor="end" style="font-size:28px" class="t-blue">12</text>
<text x="92" y="122" text-anchor="end" style="font-size:28px" class="t-purple">6</text>
<text x="96" y="110" style="font-size:64px">C</text>
<line x1="96" y1="56" x2="190" y2="44" class="s-blue"/>
<text x="196" y="40" class="t-blue">mass number A</text>
<text x="196" y="58" class="t-blue">= protons + neutrons</text>
<line x1="145" y1="88" x2="190" y2="90" stroke="currentColor"/>
<text x="196" y="95">element symbol (carbon)</text>
<line x1="96" y1="114" x2="190" y2="128" class="s-purple"/>
<text x="196" y="126" class="t-purple">atomic number Z</text>
<text x="196" y="144" class="t-purple">= protons (defines the element)</text>
<line x1="0" y1="170" x2="520" y2="170" stroke="currentColor" stroke-opacity="0.3"/>
<text x="10" y="194" font-weight="700">The three isotopes of hydrogen</text>
<circle cx="95" cy="240" r="11" class="f-red" fill-opacity="0.85"/>
<circle cx="250" cy="240" r="11" class="f-red" fill-opacity="0.85"/>
<circle cx="270" cy="240" r="11" class="f-gray" fill-opacity="0.85"/>
<circle cx="405" cy="232" r="11" class="f-red" fill-opacity="0.85"/>
<circle cx="425" cy="232" r="11" class="f-gray" fill-opacity="0.85"/>
<circle cx="415" cy="250" r="11" class="f-gray" fill-opacity="0.85"/>
<text x="95" y="290" text-anchor="middle" font-weight="700">¹H  protium</text>
<text x="95" y="310" text-anchor="middle">1 p, 0 n</text>
<text x="260" y="290" text-anchor="middle" font-weight="700">²H  deuterium</text>
<text x="260" y="310" text-anchor="middle">1 p, 1 n</text>
<text x="415" y="290" text-anchor="middle" font-weight="700">³H  tritium</text>
<text x="415" y="310" text-anchor="middle">1 p, 2 n</text>
<circle cx="150" cy="331" r="6" class="f-red" fill-opacity="0.85"/>
<text x="160" y="336">proton</text>
<circle cx="240" cy="331" r="6" class="f-gray" fill-opacity="0.85"/>
<text x="250" y="336">neutron</text>
<text x="320" y="336" class="t-gray">(each has 1 electron)</text>
</svg>`;

export const lesson: Lesson = {
  id: 'chem-atomic-structure',
  title: 'Atomic Structure and Isotopes',
  summary: 'From Dalton\'s solid spheres to the nuclear atom: protons, neutrons, electrons, isotopes, and why atomic masses are not whole numbers.',
  minutes: 19,
  objectives: [
    'Explain how the experiments of Thomson, Rutherford and Bohr each forced a better model of the atom',
    'Give the charge, relative mass and location of protons, neutrons and electrons',
    'Use atomic number and mass number to count the particles in an atom, an isotope or an ion',
    'Read and write isotope notation such as $\\ce{^{14}_{6}C}$',
    'Calculate an average atomic mass from isotope masses and abundances, and work backward to an abundance',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Each experiment forced a better model',
      blocks: [
        {
          type: 'p',
          text: 'Nobody has ever looked at an atom the way you look at a coin. Everything we know about the [[atom]] was **inferred**: someone proposed a model, someone else did an experiment the model could not explain, and the model had to change. That cycle is worth learning, because it is how all of science works, and because each step left behind a piece of the modern picture.',
        },
        {
          type: 'p',
          text: '**John Dalton (1808)** revived the ancient Greek idea of indivisible particles and made it quantitative. Each [[element]] is made of its own kind of atom with a characteristic mass; a [[compound]] forms when atoms combine in fixed whole-number ratios; reactions rearrange atoms but never create or destroy them. This explained why water is always 8 parts oxygen to 1 part hydrogen by mass. Dalton\'s atoms were solid, featureless spheres.',
        },
        {
          type: 'p',
          text: '**J. J. Thomson (1897)** sent electric current through gas in a sealed glass tube and found "cathode rays" that bent toward a positive plate. They were streams of negative particles, identical no matter which metal he used, and roughly $\\frac{1}{1800}$ the mass of a hydrogen atom. Atoms were *not* indivisible: they contained [[electron|electrons]]. Since atoms are electrically neutral, Thomson pictured the electrons scattered through a sphere of spread-out positive charge, the "plum pudding" model.',
        },
        {
          type: 'figure',
          svg: FIG_MODELS,
          alt: 'Four atomic models stacked vertically. Dalton 1808: a solid sphere. Thomson 1904: a positive sphere with electrons dotted through it. Rutherford 1911: a tiny positive nucleus with electrons in mostly empty space. Bohr 1913: a nucleus with electrons on circular orbits. Arrows between them name the evidence: cathode rays, the gold foil experiment, line spectra.',
          caption: 'The teal arrows are the evidence. Each model was replaced because an experiment produced a result it could not explain.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'A model is a tool, not a photograph',
          text: 'Dalton\'s model was "wrong" about indivisibility, yet it is still exactly what you use when you balance a chemical equation. Scientists keep an old model wherever it still gives right answers and switch to a better one where it fails. You will do the same in this course.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Rutherford\'s gold foil: discovering the nucleus',
      blocks: [
        {
          type: 'p',
          text: 'In 1909, Ernest Rutherford\'s students Hans Geiger and Ernest Marsden aimed a beam of **alpha (α) particles** at a gold foil only a few hundred atoms thick. An alpha particle is a helium nucleus: positively charged ($+2$), and about 7300 times heavier than an electron. A fluorescent screen around the foil flashed wherever an alpha particle landed.',
        },
        {
          type: 'p',
          text: 'If the plum-pudding model were right, every alpha particle should have plowed through with at most a tiny nudge. Most did. But about **1 in 8000** was deflected by more than $90^\\circ$, and some came almost straight back. Rutherford said it was "as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you."',
        },
        {
          type: 'figure',
          svg: FIG_GOLD_FOIL,
          alt: 'Top: an alpha source in a lead box fires a beam at gold foil; most alpha particles pass straight through to a circular detector screen, a few are deflected at angles, and a rare one bounces back. Bottom: zoomed view of one gold atom, mostly empty, with a tiny positive nucleus; alpha paths far away go straight, one passing close is bent, and one aimed at the nucleus reverses.',
          caption: 'Straight-through paths mean the atom is mostly empty. Bounce-backs mean the positive charge and almost all the mass are packed into a tiny center.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bounce-backs prove there is a nucleus',
          text: 'To reverse a fast, heavy alpha particle you need an enormous repulsive force, and electric force grows as $\\frac{1}{r^2}$ when charges get close. Spread-out positive charge (the pudding) can never produce a strong enough push, and electrons are far too light to stop an alpha, like a bowling ball hitting ping-pong balls. Only if all the positive charge sits in a tiny region can an alpha get close enough to feel a huge push. Because hits were so rare, that region must be a minuscule target inside a mostly empty atom.',
        },
        {
          type: 'p',
          text: 'Rutherford\'s 1911 model: a tiny, dense, positive [[chem-nucleus|nucleus]] holding nearly all of the atom\'s mass, with electrons somewhere in the vast empty space around it. In 1919 he identified the positive particle in the nucleus, the [[proton]].',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'In the gold foil experiment, which observation could the plum-pudding model **not** explain?',
      options: [
        {
          text: 'Most alpha particles passed straight through the foil',
          why: 'The plum-pudding model actually predicts this: spread-out charge exerts only weak forces, so it expects small deflections at most. This result was not the surprise.',
        },
        {
          text: 'The foil atoms contained electrons',
          why: 'Thomson\'s model already contained electrons. And electrons are about 7300 times lighter than an alpha particle, far too light to turn one around.',
        },
        {
          text: 'A few alpha particles bounced back toward the source',
          correct: true,
          why: 'Only a tiny, concentrated, positive center can push hard enough to reverse a fast, heavy alpha particle. A spread-out "pudding" of charge cannot.',
        },
        {
          text: 'Alpha particles carry a positive charge',
          why: 'That was known before the experiment. It describes the projectile, not the structure of the gold atoms.',
        },
      ],
      explanation: 'The plum-pudding model predicts that every alpha particle passes through with a small deflection, because no part of the atom has concentrated charge. The rare large-angle deflections and bounce-backs are what forced the change: positive charge and mass must be concentrated in a tiny nucleus. The many straight-through particles then tell you the rest of the atom is mostly empty space.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Bohr, the neutron, and the modern picture',
      blocks: [
        {
          type: 'p',
          text: 'Rutherford\'s atom had a problem: an electron circling a nucleus should radiate energy and spiral inward in a fraction of a second. **Niels Bohr (1913)** proposed that electrons can only occupy certain **energy levels** and do not radiate while in one. The evidence was the light atoms give off when heated, which comes only in specific colors (the next lesson is built on this). In 1932 **James Chadwick** found the third particle, the uncharged [[neutron]], which explained why atoms are heavier than their protons alone.',
        },
        {
          type: 'p',
          text: 'Since the 1920s the accepted picture is the **quantum-mechanical model**: the nucleus at the center, and electrons described by fuzzy regions of probability called orbitals, often drawn as an "electron cloud". The particle facts below are what you need for all of chemistry.',
        },
        {
          type: 'table',
          headers: ['Particle', 'Charge', 'Mass (u)', 'Where it is'],
          rows: [
            ['proton ($p^+$)', '$+1$', '$1.007$', 'in the nucleus'],
            ['neutron ($n^0$)', '$0$', '$1.009$', 'in the nucleus'],
            ['electron ($e^-$)', '$-1$', '$0.000549$', 'outside the nucleus, in the electron cloud'],
          ],
          caption: 'Charges are in units of the elementary charge $e = \\pu{1.602e-19 C}$. One [[chem-atomic-mass-unit|atomic mass unit]] is $\\pu{1 u} = \\pu{1.6605e-27 kg}$.',
        },
        {
          type: 'p',
          text: 'Two numbers to remember: a proton and a neutron each weigh about $1\\ \\text{u}$, and an electron weighs about $\\frac{1}{1836}$ as much. So an atom\'s mass is almost entirely its nucleus, while its **size** is set by its electrons.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Electrons do not orbit like planets',
          text: 'Bohr\'s circular orbits are a useful cartoon (you will draw them in the next lesson), but electrons do not follow paths. The modern model only says how likely an electron is to be found in each region around the nucleus. General Chemistry develops this properly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Put these models of the atom in the order they were proposed, earliest first.',
      lines: [
        'Dalton: solid, indivisible spheres',
        'Thomson: electrons embedded in a positive "pudding"',
        'Rutherford: a tiny, dense, positive nucleus',
        'Bohr: electrons in fixed energy levels',
        'Quantum-mechanical model: electron clouds (orbitals)',
      ],
      explanation: 'Each model answered the evidence that broke the one before it: cathode rays (electrons exist) ended Dalton\'s indivisible sphere, the gold foil (bounce-backs) ended the pudding, the instability of orbiting electrons and the line spectra of atoms led to Bohr\'s energy levels, and quantum mechanics (1920s) replaced Bohr\'s orbits with probability clouds.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The atom to scale: a marble in a stadium',
      blocks: [
        {
          type: 'p',
          text: 'Just how empty is "mostly empty"? A gold atom has a radius of about $144\\ \\text{pm}$ ($1.44 \\times 10^{-10}\\ \\text{m}$), and its nucleus about $7.0\\ \\text{fm}$ ($7.0 \\times 10^{-15}\\ \\text{m}$; femto means $10^{-15}$). Ratios like this are easy with [[scientific-notation]].',
        },
        {
          type: 'derivation',
          title: 'How much bigger is a gold atom than its nucleus?',
          steps: [
            {
              tex: '\\frac{r_{\\text{atom}}}{r_{\\text{nucleus}}} = \\frac{1.44 \\times 10^{-10}\\ \\cancel{\\text{m}}}{7.0 \\times 10^{-15}\\ \\cancel{\\text{m}}}',
              why: 'Compare sizes with a ratio. Both radii are in meters, so the units cancel and the answer is a pure number.',
            },
            {
              tex: '= \\frac{1.44}{7.0} \\times 10^{-10 - (-15)} = 0.206 \\times 10^{5}',
              why: 'Divide the front numbers and subtract the exponents: $10^{-10} \\div 10^{-15} = 10^{5}$.',
            },
            {
              tex: '\\approx 2.1 \\times 10^{4}',
              why: 'Rewrite in scientific notation and round to 2 significant figures, because $7.0$ has two.',
            },
            {
              tex: '1\\ \\text{cm} \\times 2.1 \\times 10^{4} = 2.1 \\times 10^{4}\\ \\text{cm} = 210\\ \\text{m}',
              why: 'Scale the nucleus up to a $1\\ \\text{cm}$ marble. The atom grows by the same factor: $2.1 \\times 10^4\\ \\text{cm} \\times \\frac{1\\ \\text{m}}{100\\ \\text{cm}} = 210\\ \\text{m}$, the size of a stadium.',
            },
            {
              tex: '\\frac{V_{\\text{nucleus}}}{V_{\\text{atom}}} = \\left(\\frac{1}{2.1 \\times 10^{4}}\\right)^{3} \\approx 1 \\times 10^{-13}',
              why: 'Volume goes as radius cubed ($V = \\frac{4}{3}\\pi r^3$, and the $\\frac{4}{3}\\pi$ cancels in the ratio), so the volume ratio is the length ratio cubed.',
            },
          ],
          result: 'The nucleus is about $\\frac{1}{20\\,000}$ of the atom\'s width and about one ten-trillionth of its volume, yet it holds more than $99.9\\%$ of its mass.',
        },
        {
          type: 'figure',
          svg: FIG_STADIUM,
          alt: 'A sports stadium seen from above, about 200 meters across. A tiny red dot on the center spot is labelled "nucleus = a marble". A few specks in the stands represent electrons.',
          caption: 'If the nucleus were a marble on the center spot, the atom would be the whole stadium, and the electrons would be specks somewhere in the stands.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Then why does a table feel solid?',
          text: 'When your hand presses on a table, the electron clouds of your atoms and the table\'s atoms repel each other electrically long before any nuclei get close. "Solid" is electric repulsion between electron clouds, not particles bumping into each other. It also explains why chemistry is all about electrons: they are the outer surface every other atom meets.',
        },
        {
          type: 'deepdive',
          title: 'How dense is a nucleus?',
          blocks: [
            {
              type: 'p',
              text: 'A nucleus packs about $1\\ \\text{u}$ of mass for every nucleon into a sphere of radius about $1.2 \\times 10^{-15}\\ \\text{m}$ per nucleon. That works out to roughly $2 \\times 10^{17}\\ \\text{kg/m}^3$. A teaspoon ($5\\ \\text{mL}$) of pure nuclear matter would weigh about a billion metric tons, which is what a neutron star is made of.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A hydrogen atom has a radius of about $5.3 \\times 10^{-11}\\ \\text{m}$, and its nucleus (a single proton) a radius of about $8.4 \\times 10^{-16}\\ \\text{m}$. If the nucleus were scaled up to a marble $1.0\\ \\text{cm}$ across, how many **meters** across would the atom be? Give 2 significant figures.',
      hint: 'Find the ratio $\\frac{r_{\\text{atom}}}{r_{\\text{nucleus}}}$ (the ratio of diameters is the same), multiply $1.0\\ \\text{cm}$ by it, then convert centimeters to meters.',
      answer: '1.0*5.3*10^(-11)/(8.4*10^(-16))/100',
      answerTex: '630\\ \\text{m}\\ (6.3 \\times 10^{2}\\ \\text{m})',
      tolerance: 10,
      unit: 'm',
      explanation: 'The ratio is $\\frac{5.3 \\times 10^{-11}}{8.4 \\times 10^{-16}} = 0.631 \\times 10^{5} = 6.3 \\times 10^{4}$. Scaling a $1.0\\ \\text{cm}$ marble by that factor gives $6.3 \\times 10^{4}\\ \\text{cm} \\times \\frac{1\\ \\text{m}}{100\\ \\text{cm}} = 6.3 \\times 10^{2}\\ \\text{m} \\approx 630\\ \\text{m}$. Hydrogen is even emptier than gold, because its single electron is held by a nucleus with only one proton.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Atomic number and mass number',
      blocks: [
        {
          type: 'p',
          text: 'Two whole numbers describe any nucleus. The first one decides which element you have.',
        },
        {
          type: 'definition',
          term: 'Atomic number $Z$',
          text: 'The [[atomic-number]] $Z$ is the number of **protons** in the nucleus. Every carbon atom has $Z = 6$; anything with 7 protons is nitrogen. In a neutral atom the number of electrons equals $Z$, because the charges must cancel.',
        },
        {
          type: 'definition',
          term: 'Mass number $A$',
          text: 'The [[mass-number]] $A$ is the total number of **protons plus neutrons** (together called nucleons). Since each weighs about $1\\ \\text{u}$, $A$ is roughly the mass of the atom in $\\text{u}$. Electrons are not counted: they are too light to matter.',
        },
        {
          type: 'math',
          tex: 'A = Z + N \\qquad\\Longrightarrow\\qquad N = A - Z',
          caption: '$N$ is the number of neutrons.',
        },
        {
          type: 'derivation',
          title: 'Count the particles in an atom of chlorine-37',
          steps: [
            { tex: 'Z = 17', why: 'Chlorine is element 17 on the [[periodic-table]], so every chlorine nucleus has 17 protons.' },
            { tex: 'A = 37', why: 'The "37" in "chlorine-37" is the mass number.' },
            { tex: 'N = A - Z = 37 - 17 = 20', why: 'Neutrons are whatever nucleons are not protons.' },
            { tex: 'e^- = Z = 17', why: 'A neutral atom has as many electrons as protons, so the charges cancel.' },
          ],
          result: 'Chlorine-37 has 17 protons, 20 neutrons and 17 electrons.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the proton count, not the neutron count, defines the element',
          text: 'Chemistry is the behavior of electrons, and the number of electrons a neutral atom holds is set by the positive charge of its nucleus, which is the proton count. Change $Z$ and you change the electrons and so every chemical property: you have a different element. Neutrons add mass but no charge, so adding one barely changes the chemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Isotopes and isotope notation',
      blocks: [
        {
          type: 'p',
          text: 'Atoms of the same element can have different numbers of neutrons. These versions are [[isotope|isotopes]]: same $Z$, different $A$. They behave almost identically in chemical reactions but have different masses, and some have unstable nuclei (they are radioactive).',
        },
        {
          type: 'p',
          text: 'Isotope notation puts the mass number at the top left of the symbol and the atomic number at the bottom left. In words, the same isotope is "carbon-12" or C-12.',
        },
        {
          type: 'figure',
          svg: FIG_ISOTOPES,
          alt: 'Top: the symbol C with 12 written at the upper left labelled mass number A equals protons plus neutrons, and 6 at the lower left labelled atomic number Z equals protons. Bottom: the three isotopes of hydrogen drawn as nuclei: protium with 1 proton, deuterium with 1 proton and 1 neutron, tritium with 1 proton and 2 neutrons.',
          caption: 'All three hydrogen isotopes have one proton, so all three are hydrogen. Only the neutron count, and therefore the mass, differs.',
        },
        {
          type: 'table',
          headers: ['Isotope', 'Protons', 'Neutrons', 'Where you meet it'],
          rows: [
            ['$\\ce{^{12}_{6}C}$', '$6$', '$6$', 'about $99\\%$ of all carbon'],
            ['$\\ce{^{14}_{6}C}$', '$6$', '$8$', 'radioactive; used to date ancient organic material'],
            ['$\\ce{^{3}_{1}H}$', '$1$', '$2$', 'tritium: the glow in self-lit weapon night sights'],
            ['$\\ce{^{235}_{92}U}$', '$92$', '$143$', 'fuel of the reactors in carriers and submarines'],
            ['$\\ce{^{238}_{92}U}$', '$92$', '$146$', 'about $99.3\\%$ of natural uranium'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The subscript is optional',
          text: 'The symbol already tells you $Z$ (C always means 6 protons), so you will often see just $\\ce{^{14}C}$ or $\\ce{^{235}U}$. Writing $Z$ anyway is handy when you are counting neutrons, and it becomes essential when you balance nuclear equations in General Chemistry.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Radioactivity and half-life',
          text: 'Carbon-14 decays with a [[half-life]] of about 5730 years. Living things keep topping up their $\\ce{^{14}C}$; after death it decays away, so measuring what remains dates the sample. That is the exponential decay you met in algebra, running inside real atoms.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Count the particles. Type whole numbers.',
      template: 'A neutral atom of $\\ce{^{56}_{26}Fe}$ has ___ protons, ___ neutrons and ___ electrons.',
      blanks: [{ answers: ['26'] }, { answers: ['30'] }, { answers: ['26'] }],
      hint: 'The bottom number is $Z$, the top number is $A$, and $N = A - Z$.',
      explanation: 'The atomic number $Z = 26$ gives 26 protons. The mass number $A = 56$ counts protons and neutrons together, so $N = 56 - 26 = 30$ neutrons. A neutral atom has as many electrons as protons: 26.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Which pair are **isotopes** of the same element?',
      options: [
        {
          text: '$\\ce{^{14}_{6}C}$ and $\\ce{^{14}_{7}N}$',
          why: 'Same mass number, but different atomic numbers (6 vs 7 protons), so they are different elements.',
        },
        {
          text: '$\\ce{^{23}_{11}Na}$ and $\\ce{^{23}_{11}Na+}$',
          why: 'Identical nuclei. They differ only in electrons: one is an atom and the other an ion.',
        },
        {
          text: '$\\ce{^{40}_{18}Ar}$ and $\\ce{^{40}_{19}K}$',
          why: 'Same $A$ again, but 18 vs 19 protons: argon and potassium.',
        },
        {
          text: '$\\ce{^{12}_{6}C}$ and $\\ce{^{13}_{6}C}$',
          correct: true,
          why: 'Both have 6 protons (both carbon) but 6 vs 7 neutrons, so different mass numbers.',
        },
      ],
      explanation: 'Isotopes share $Z$ (the element) and differ in $N$ (and therefore $A$). Matching mass numbers is a trap: $A$ counts protons *and* neutrons, so two different elements can have the same $A$. Ions differ in electrons, not neutrons.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Ions: atoms that gained or lost electrons',
      blocks: [
        {
          type: 'p',
          text: 'Chemical reactions never touch the nucleus. They do move electrons. An atom that has gained or lost electrons is an [[ion]], and its charge is simply protons minus electrons.',
        },
        {
          type: 'math',
          tex: '\\text{charge} = (\\text{number of protons}) - (\\text{number of electrons})',
        },
        {
          type: 'list',
          items: [
            'Lose electrons → more protons than electrons → **positive** ion, a [[cation]]. Sodium loses one electron to become $\\ce{Na+}$.',
            'Gain electrons → more electrons than protons → **negative** ion, an [[anion]]. Chlorine gains one electron to become $\\ce{Cl-}$.',
          ],
        },
        {
          type: 'table',
          headers: ['Species', 'Protons', 'Electrons', 'Charge'],
          rows: [
            ['$\\ce{Na}$', '$11$', '$11$', '$0$'],
            ['$\\ce{Na+}$', '$11$', '$10$', '$+1$'],
            ['$\\ce{Mg^2+}$', '$12$', '$10$', '$+2$'],
            ['$\\ce{Cl-}$', '$17$', '$18$', '$-1$'],
            ['$\\ce{O^2-}$', '$8$', '$10$', '$-2$'],
          ],
          caption: 'Notice that $\\ce{Na+}$, $\\ce{Mg^2+}$ and $\\ce{O^2-}$ all end up with 10 electrons, the same as neon. That is not a coincidence, as the next two lessons will show.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A positive ion lost electrons; it did not gain protons',
          text: 'The "+" in $\\ce{Na+}$ tempts people to add a proton. Never change the proton count when forming an ion: that would turn sodium into magnesium. Positive means **fewer electrons**, negative means **extra electrons**.',
        },
        {
          type: 'p',
          text: 'Why sodium loses an electron while chlorine gains one is the story of the periodic table (this unit) and of bonding (the next unit).',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student counts the particles in the sulfide ion $\\ce{^{32}_{16}S^2-}$. Tap the first line that is wrong.',
      lines: [
        'Protons $=$ atomic number $= 16$',
        'Neutrons $= A - Z = 32 - 16 = 16$',
        'A charge of $2-$ means 2 electrons were lost, so electrons $= 16 - 2 = 14$',
        'So the ion has 16 protons, 16 neutrons and 14 electrons.',
      ],
      errorLines: [3],
      explanation: 'A **negative** charge means extra electrons, not missing ones. From charge $=$ protons $-$ electrons: $-2 = 16 - e$, so $e = 18$. The sulfide ion has 16 protons, 16 neutrons and **18** electrons (the same count as argon). Losing 2 electrons would give $\\ce{S^2+}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Average atomic mass: a weighted average',
      blocks: [
        {
          type: 'p',
          text: 'The periodic table lists chlorine\'s mass as $35.45$, not a whole number. No chlorine atom has that mass. Natural chlorine is a mixture of two isotopes, about three quarters chlorine-35 and one quarter chlorine-37, and the table gives the **average mass of an atom in a natural sample**. Because the isotopes are not equally common, it is a weighted average.',
        },
        {
          type: 'definition',
          term: 'Average atomic mass',
          text: 'The [[atomic-mass|average atomic mass]] of an element is the sum, over its isotopes, of each isotope\'s mass times its fractional abundance (percent $\\div 100$):\n\n$$\\bar m = f_1 m_1 + f_2 m_2 + \\cdots \\qquad (f_1 + f_2 + \\cdots = 1)$$',
        },
        {
          type: 'derivation',
          title: 'Chlorine: $^{35}$Cl is $34.969\\ \\text{u}$ ($75.76\\%$), $^{37}$Cl is $36.966\\ \\text{u}$ ($24.24\\%$)',
          steps: [
            {
              tex: '\\bar m = (0.7576)(34.969\\ \\text{u}) + (0.2424)(36.966\\ \\text{u})',
              why: 'Turn each percentage into a fraction ($75.76\\% = 0.7576$) and weight each isotope\'s mass by its share. Check: $0.7576 + 0.2424 = 1$.',
            },
            {
              tex: '= 26.4925\\ \\text{u} + 8.9606\\ \\text{u}',
              why: 'Multiply each pair. Keep extra digits until the end to avoid rounding drift.',
            },
            {
              tex: '= 35.453\\ \\text{u} \\approx 35.45\\ \\text{u}',
              why: 'Add the contributions. This matches the periodic table.',
            },
          ],
          result: 'The average, $35.45\\ \\text{u}$, sits much closer to $35$ than to $37$, because chlorine-35 is three times as common.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why weighted, and why masses are not exactly whole numbers',
          text: 'A real sample contains about $10^{23}$ atoms in the natural isotope proportions, so the mass per atom you would actually measure is the weighted mean. A plain average, $\\frac{34.969 + 36.966}{2} = 35.97$, pretends the isotopes are equally common. Even a single isotope\'s mass is not a whole number (e.g. $34.969$, not $35$), because protons and neutrons are not exactly $1\\ \\text{u}$ and some mass is converted into the energy binding the nucleus. Only carbon-12 is exactly $12\\ \\text{u}$, by definition.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'It is the expected value of a loot table',
          text: 'If a chest drops item $i$ with probability `p[i]` and value `v[i]`, its expected value is `sum += p[i] * v[i]` over all items. Average atomic mass is exactly that: the expected mass of an atom drawn at random from nature\'s "loot table" of isotopes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Boron has two stable isotopes: boron-10 (mass $10.013\\ \\text{u}$, abundance $19.9\\%$) and boron-11 (mass $11.009\\ \\text{u}$, abundance $80.1\\%$). Calculate boron\'s average atomic mass to 2 decimal places.',
      hint: 'Convert the percentages to fractions and compute $f_1 m_1 + f_2 m_2$.',
      answer: '0.199*10.013 + 0.801*11.009',
      answerTex: '10.81\\ \\text{u}',
      tolerance: 0.006,
      unit: 'u',
      explanation: '$\\bar m = (0.199)(10.013) + (0.801)(11.009) = 1.993 + 8.818 = 10.811\\ \\text{u} \\approx 10.81\\ \\text{u}$, the value on the periodic table. Sanity check: the answer lies between the two isotope masses and much closer to $11$, because boron-11 is about four times as common.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Copper, and working backward to the abundances',
      blocks: [
        {
          type: 'p',
          text: 'The same recipe works for any element. Copper (the metal in wiring and in brass shell casings) is $69.15\\%$ copper-63 ($62.930\\ \\text{u}$) and $30.85\\%$ copper-65 ($64.928\\ \\text{u}$).',
        },
        {
          type: 'derivation',
          title: 'Average atomic mass of copper',
          steps: [
            { tex: '\\bar m = (0.6915)(62.930\\ \\text{u}) + (0.3085)(64.928\\ \\text{u})', why: 'Weight each isotope mass by its fractional abundance.' },
            { tex: '= 43.5161\\ \\text{u} + 20.0303\\ \\text{u}', why: 'Multiply each pair.' },
            { tex: '= 63.546\\ \\text{u} \\approx 63.55\\ \\text{u}', why: 'Add. The periodic table lists copper as $63.55$.' },
          ],
        },
        {
          type: 'p',
          text: 'Often you know the average (it is on the periodic table) and the isotope masses, and want the abundances. With two isotopes there is one unknown: call the fraction of the lighter isotope $x$, so the heavier one is $1 - x$. That gives a [[linear-equation]].',
        },
        {
          type: 'derivation',
          title: 'Gallium ($69.723\\ \\text{u}$) is a mix of gallium-69 ($68.926\\ \\text{u}$) and gallium-71 ($70.925\\ \\text{u}$). Find the abundances.',
          steps: [
            { tex: '68.926\\,x + 70.925\\,(1 - x) = 69.723', why: 'The fractions must add to 1, so if gallium-69 is the fraction $x$, gallium-71 is $1 - x$. The weighted average must equal the known average.' },
            { tex: '68.926\\,x + 70.925 - 70.925\\,x = 69.723', why: 'Distribute $70.925$ over $(1 - x)$.' },
            { tex: '-1.999\\,x = 69.723 - 70.925 = -1.202', why: 'Collect the $x$ terms ($68.926 - 70.925 = -1.999$) and move the constant to the right side.' },
            { tex: 'x = \\frac{-1.202}{-1.999} = 0.6013', why: 'Divide both sides by $-1.999$.' },
          ],
          result: 'Gallium is about $60.1\\%$ gallium-69 and $39.9\\%$ gallium-71. Check: the average $69.723$ is a bit closer to $69$ than to $71$, so gallium-69 should be the majority. ✓',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A quick estimate to check your algebra',
          text: 'The average splits the gap between two isotope masses like a lever: the closer it sits to one isotope, the more abundant that isotope is. For gallium, the average is $0.797$ above the light isotope and $1.202$ below the heavy one, so the light isotope\'s share is $\\frac{1.202}{1.999} \\approx 60\\%$, the same answer without writing the equation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'numeric',
      prompt: 'Bromine has two isotopes: bromine-79 ($78.918\\ \\text{u}$) and bromine-81 ($80.916\\ \\text{u}$). Its average atomic mass is $79.904\\ \\text{u}$. What **percent** of bromine atoms are bromine-79? Give 3 significant figures.',
      hint: 'Let $x$ be the fraction of bromine-79. Solve $78.918\\,x + 80.916\\,(1 - x) = 79.904$, then multiply by 100.',
      answer: '100*(80.916 - 79.904)/(80.916 - 78.918)',
      answerTex: '50.7\\%',
      tolerance: 0.1,
      unit: '%',
      explanation: 'Expanding gives $80.916 - 1.998\\,x = 79.904$, so $1.998\\,x = 1.012$ and $x = 0.5065$. About $50.7\\%$ of bromine atoms are bromine-79 (and $49.3\\%$ bromine-81). That makes sense: $79.904$ sits almost exactly halfway between $78.918$ and $80.916$, so the two isotopes are nearly equally common.',
    },
  ],
  takeaways: [
    'Each atomic model (Dalton, Thomson, Rutherford, Bohr, quantum) was replaced because an experiment produced a result it could not explain; the gold foil bounce-backs revealed the tiny, dense, positive nucleus.',
    'Protons ($+1$, about $1\\ \\text{u}$) and neutrons ($0$, about $1\\ \\text{u}$) make up the nucleus; electrons ($-1$, about $\\frac{1}{1836}\\ \\text{u}$) occupy the huge, mostly empty space around it.',
    'The atomic number $Z$ (protons) defines the element; the mass number is $A = Z + N$; isotopes have the same $Z$ but different $N$, written like $\\ce{^{14}_{6}C}$.',
    'Ions form by gaining or losing electrons, never protons: charge $=$ protons $-$ electrons.',
    'Average atomic mass is a weighted average, $\\bar m = \\sum f_i m_i$; with two isotopes you can solve a linear equation to recover the abundances.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 2: Atoms, Molecules, and Ions',
      url: 'https://openstax.org/books/chemistry-2e/pages/2-introduction',
      source: 'openstax',
      note: 'The free college textbook chapter covering the history of atomic theory, isotopes and average atomic mass, with more worked examples.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "Build an Atom" and "Isotopes and Atomic Mass" simulations to assemble atoms and ions particle by particle.',
    },
    {
      title: 'Wikipedia — Rutherford model',
      url: 'https://en.wikipedia.org/wiki/Rutherford_model',
      source: 'wikipedia',
      note: 'More on the gold foil experiment and how Rutherford reasoned from scattering angles to the size of the nucleus.',
    },
    {
      title: 'Wikipedia — Isotope',
      url: 'https://en.wikipedia.org/wiki/Isotope',
      source: 'wikipedia',
      note: 'Notation, stable and radioactive isotopes, and how isotope ratios are used in dating and medicine.',
    },
  ],
};
