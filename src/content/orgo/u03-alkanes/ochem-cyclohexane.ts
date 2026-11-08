import type { Lesson } from '../../types';

// <figures> (chairs projected from 3D coordinates; ring drawings from the molecule kit)
const FIG = {
  cy_boat: '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg"><line x1="199.4" y1="69.4" x2="151.3" y2="100.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="151.3" y1="100.5" x2="71.9" y2="56.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="71.9" y1="56.3" x2="40.6" y2="120.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="40.6" y1="120.6" x2="88.7" y2="89.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="88.7" y1="89.5" x2="168.1" y2="133.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="168.1" y1="133.7" x2="199.4" y2="69.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="469.4" y1="79.4" x2="421.3" y2="110.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="421.3" y1="110.5" x2="341.9" y2="66.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="341.9" y1="66.3" x2="310.6" y2="84.1" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="310.6" y1="84.1" x2="358.7" y2="99.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="358.7" y1="99.5" x2="438.1" y2="143.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="438.1" y1="143.7" x2="469.4" y2="79.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="469.4" y1="79.4" x2="469.4" y2="30.3" stroke="currentColor" stroke-width="2" class="s-orange"/><text x="469.4" y="13.2" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-orange">H</text><line x1="310.6" y1="84.1" x2="310.6" y2="35.0" stroke="currentColor" stroke-width="2" class="s-orange"/><text x="310.6" y="17.9" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-orange">H</text><text x="120" y="185" text-anchor="middle" font-size="12.5">chair: all bonds staggered</text><text x="120" y="203" text-anchor="middle" font-size="12.5" class="t-green">0 kJ/mol</text><text x="390" y="185" text-anchor="middle" font-size="12.5">boat: eclipsed bonds + flagpole H</text><text x="390" y="203" text-anchor="middle" font-size="12.5" class="t-red">+29 kJ/mol (twist-boat +23)</text></svg>',
  cy_chair: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg"><line x1="309.2" y1="79.7" x2="243.0" y2="122.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="243.0" y1="122.5" x2="133.8" y2="61.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="133.8" y1="61.7" x2="90.8" y2="150.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="90.8" y1="150.3" x2="157.0" y2="107.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="157.0" y1="107.5" x2="266.2" y2="168.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="266.2" y1="168.3" x2="309.2" y2="79.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="309.2" y1="79.7" x2="309.2" y2="26.4" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="309.2" y1="79.7" x2="360.6" y2="96.0" stroke="currentColor" stroke-width="1.6" class="s-red"/><line x1="243.0" y1="122.5" x2="243.0" y2="175.9" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="243.0" y1="122.5" x2="263.2" y2="93.2" stroke="currentColor" stroke-width="1.6" class="s-red"/><line x1="133.8" y1="61.7" x2="133.8" y2="8.4" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="133.8" y1="61.7" x2="102.6" y2="69.5" stroke="currentColor" stroke-width="1.6" class="s-red"/><line x1="90.8" y1="150.3" x2="90.8" y2="203.6" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="90.8" y1="150.3" x2="39.4" y2="134.0" stroke="currentColor" stroke-width="1.6" class="s-red"/><line x1="157.0" y1="107.5" x2="157.0" y2="54.1" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="157.0" y1="107.5" x2="136.8" y2="136.8" stroke="currentColor" stroke-width="1.6" class="s-red"/><line x1="266.2" y1="168.3" x2="266.2" y2="221.6" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="266.2" y1="168.3" x2="297.4" y2="160.5" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="278.6" y="90.3" text-anchor="middle" dominant-baseline="central" font-size="11" class="t-gray">1</text><text x="230.9" y="119.8" text-anchor="middle" dominant-baseline="central" font-size="11" class="t-gray">2</text><text x="152.3" y="77.3" text-anchor="middle" dominant-baseline="central" font-size="11" class="t-gray">3</text><text x="121.4" y="139.7" text-anchor="middle" dominant-baseline="central" font-size="11" class="t-gray">4</text><text x="169.1" y="110.2" text-anchor="middle" dominant-baseline="central" font-size="11" class="t-gray">5</text><text x="247.7" y="152.7" text-anchor="middle" dominant-baseline="central" font-size="11" class="t-gray">6</text><text x="420" y="60" text-anchor="start" font-size="13" class="t-blue">axial: straight up/down,</text><text x="420" y="78" text-anchor="start" font-size="13" class="t-blue">alternating</text><text x="420" y="150" text-anchor="start" font-size="13" class="t-red">equatorial: outward,</text><text x="420" y="168" text-anchor="start" font-size="13" class="t-red">roughly in the ring plane</text></svg>',
  cy_di: '<svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg"><line x1="197.6" y1="76.4" x2="162.7" y2="99.0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="162.7" y1="99.0" x2="105.1" y2="66.9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="105.1" y1="66.9" x2="82.4" y2="113.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="82.4" y1="113.6" x2="117.3" y2="91.0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="117.3" y1="91.0" x2="174.9" y2="123.1" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="174.9" y1="123.1" x2="197.6" y2="76.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="197.6" y1="76.4" x2="197.6" y2="40.8" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="197.6" y="28.4" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><line x1="82.4" y1="113.6" x2="82.4" y2="149.2" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="82.4" y="161.6" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><line x1="469.6" y1="110.2" x2="434.7" y2="65.2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="434.7" y1="65.2" x2="377.1" y2="100.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="377.1" y1="100.7" x2="354.4" y2="79.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="354.4" y1="79.8" x2="389.3" y2="124.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="389.3" y1="124.8" x2="446.9" y2="89.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="446.9" y1="89.3" x2="469.6" y2="110.2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="469.6" y1="110.2" x2="503.9" y2="97.3" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="515.8" y="92.8" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><line x1="354.4" y1="79.8" x2="320.1" y2="92.7" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="308.2" y="97.2" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><path d="M238,92 L278,92 l-8,-5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M278,98 L238,98 l8,5" stroke="currentColor" stroke-width="1.6" fill="none"/><text x="262" y="17" text-anchor="middle" font-size="13" font-weight="600">trans-1,4-dimethylcyclohexane</text><text x="140" y="191" text-anchor="middle" font-size="12" class="t-red">diaxial: 4 × 3.8 = 15.2 kJ/mol</text><text x="405" y="191" text-anchor="middle" font-size="12" class="t-green">diequatorial: 0 ✓</text><line x1="197.6" y1="291.4" x2="162.7" y2="314.0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="162.7" y1="314.0" x2="105.1" y2="281.9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="105.1" y1="281.9" x2="82.4" y2="328.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="82.4" y1="328.6" x2="117.3" y2="306.0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="117.3" y1="306.0" x2="174.9" y2="338.1" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="174.9" y1="338.1" x2="197.6" y2="291.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="197.6" y1="291.4" x2="197.6" y2="255.8" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="197.6" y="243.4" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><line x1="82.4" y1="328.6" x2="48.1" y2="317.7" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="36.2" y="314.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><line x1="469.6" y1="325.2" x2="434.7" y2="280.2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="434.7" y1="280.2" x2="377.1" y2="315.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="377.1" y1="315.7" x2="354.4" y2="294.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="354.4" y1="294.8" x2="389.3" y2="339.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="389.3" y1="339.8" x2="446.9" y2="304.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="446.9" y1="304.3" x2="469.6" y2="325.2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="469.6" y1="325.2" x2="503.9" y2="312.3" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="515.8" y="307.8" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><line x1="354.4" y1="294.8" x2="354.4" y2="259.2" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="354.4" y="246.9" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><path d="M238,307 L278,307 l-8,-5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M278,313 L238,313 l8,5" stroke="currentColor" stroke-width="1.6" fill="none"/><text x="262" y="232" text-anchor="middle" font-size="13" font-weight="600">cis-1,4-dimethylcyclohexane</text><text x="140" y="406" text-anchor="middle" font-size="12" class="t-orange">axial + equatorial: 7.6</text><text x="405" y="406" text-anchor="middle" font-size="12" class="t-orange">equatorial + axial: 7.6</text></svg>',
  cy_flip: '<svg viewBox="0 0 520 232" xmlns="http://www.w3.org/2000/svg"><line x1="206.4" y1="83.7" x2="157.0" y2="115.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="157.0" y1="115.6" x2="75.7" y2="70.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="75.7" y1="70.3" x2="43.6" y2="136.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="43.6" y1="136.3" x2="93.0" y2="104.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="93.0" y1="104.4" x2="174.3" y2="149.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="174.3" y1="149.7" x2="206.4" y2="83.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="206.4" y1="83.7" x2="206.4" y2="33.4" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="206.4" y="15.9" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><line x1="75.7" y1="70.3" x2="75.7" y2="20.0" stroke="currentColor" stroke-width="2" class="s-orange"/><text x="75.7" y="2.5" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-orange">H</text><line x1="93.0" y1="104.4" x2="93.0" y2="54.1" stroke="currentColor" stroke-width="2" class="s-orange"/><text x="93.0" y="36.6" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-orange">H</text><line x1="447.4" y1="129.9" x2="401.7" y2="71.0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="401.7" y1="71.0" x2="326.3" y2="117.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="326.3" y1="117.4" x2="296.6" y2="90.1" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="296.6" y1="90.1" x2="342.3" y2="149.0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="342.3" y1="149.0" x2="417.7" y2="102.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="417.7" y1="102.6" x2="447.4" y2="129.9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="447.4" y1="129.9" x2="492.4" y2="113.0" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="508.1" y="107.1" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><path d="M228,107 L272,107 l-8,-5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M272,113 L228,113 l8,5" stroke="currentColor" stroke-width="1.6" fill="none"/><text x="125" y="205" text-anchor="middle" font-size="12.5">CH₃ axial: two 1,3-diaxial</text><text x="125" y="222" text-anchor="middle" font-size="12.5" class="t-orange">interactions (orange H), +7.6 kJ/mol</text><text x="380" y="205" text-anchor="middle" font-size="12.5">CH₃ equatorial</text><text x="380" y="222" text-anchor="middle" font-size="12.5" class="t-green">95% at 25 °C</text><text x="250" y="95" text-anchor="middle" font-size="11" class="t-gray">ring flip</text></svg>',
  cy_rings: '<svg viewBox="0 0 520 165" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0,5) scale(1.7)"><line x1="27.84" y1="17.41" x2="27.84" y2="41.41" stroke="currentColor" stroke-width="1.44" /><line x1="27.84" y1="41.41" x2="48.63" y2="29.41" stroke="currentColor" stroke-width="1.44" /><line x1="27.84" y1="17.41" x2="48.63" y2="29.41" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(130,5) scale(1.7)"><line x1="26.24" y1="17.41" x2="26.24" y2="41.41" stroke="currentColor" stroke-width="1.44" /><line x1="26.24" y1="41.41" x2="50.24" y2="41.41" stroke="currentColor" stroke-width="1.44" /><line x1="50.24" y1="41.41" x2="50.24" y2="17.41" stroke="currentColor" stroke-width="1.44" /><line x1="26.24" y1="17.41" x2="50.24" y2="17.41" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(260,5) scale(1.7)"><line x1="19.77" y1="17.41" x2="19.77" y2="41.41" stroke="currentColor" stroke-width="1.44" /><line x1="19.77" y1="41.41" x2="42.59" y2="48.83" stroke="currentColor" stroke-width="1.44" /><line x1="42.59" y1="48.83" x2="56.7" y2="29.41" stroke="currentColor" stroke-width="1.44" /><line x1="56.7" y1="29.41" x2="42.59" y2="10" stroke="currentColor" stroke-width="1.44" /><line x1="19.77" y1="17.41" x2="42.59" y2="10" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(390,5) scale(1.7)"><line x1="17.45" y1="17.41" x2="17.45" y2="41.41" stroke="currentColor" stroke-width="1.44" /><line x1="17.45" y1="41.41" x2="38.24" y2="53.41" stroke="currentColor" stroke-width="1.44" /><line x1="38.24" y1="53.41" x2="59.02" y2="41.41" stroke="currentColor" stroke-width="1.44" /><line x1="59.02" y1="41.41" x2="59.02" y2="17.41" stroke="currentColor" stroke-width="1.44" /><line x1="59.02" y1="17.41" x2="38.24" y2="5.41" stroke="currentColor" stroke-width="1.44" /><line x1="17.45" y1="17.41" x2="38.24" y2="5.41" stroke="currentColor" stroke-width="1.44" /></g><text x="65" y="125" text-anchor="middle" font-size="13">cyclopropane</text><text x="65" y="143" text-anchor="middle" font-size="11.5" class="t-red">60°, flat, eclipsed</text><text x="195" y="125" text-anchor="middle" font-size="13">cyclobutane</text><text x="195" y="143" text-anchor="middle" font-size="11.5" class="t-red">puckered, ~88°</text><text x="325" y="125" text-anchor="middle" font-size="13">cyclopentane</text><text x="325" y="143" text-anchor="middle" font-size="11.5" class="t-orange">envelope, ~105°</text><text x="455" y="125" text-anchor="middle" font-size="13">cyclohexane</text><text x="455" y="143" text-anchor="middle" font-size="11.5" class="t-green">chair, ~111°</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-cyclohexane',
  title: 'Cyclohexane Chairs and Ring Strain',
  summary: 'Ring strain measured from heats of combustion, why small rings are strained and cyclohexane is not, drawing the chair with its axial and equatorial bonds, the ring flip, A-values and 1,3-diaxial interactions, ΔG ↔ K for conformers, and which chair a disubstituted cyclohexane prefers.',
  minutes: 20,
  objectives: [
    'Calculate ring strain from heats of combustion per $\\ce{CH2}$ and explain the angle, torsional and steric strain of small rings',
    'Draw a chair cyclohexane and identify every axial and equatorial position, including which ones point up',
    'Predict the result of a ring flip and explain the equatorial preference through 1,3-diaxial interactions',
    'Convert A-values into equilibrium constants and percentages with $K = e^{\\Delta G/RT}$',
    'Decide which chair of a cis or trans disubstituted cyclohexane is preferred, and estimate the energy difference',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Measuring ring strain',
      blocks: [
        {
          type: 'p',
          text: 'In 1885 Adolf von Baeyer assumed rings were flat. A flat cyclopropane has $60^\\circ$ C–C–C angles, a flat cyclohexane $120^\\circ$, and both are far from the tetrahedral $109.5^\\circ$, so he predicted that only five-membered rings could be comfortable. Experiment proved him half right: small rings are strained, but six-membered rings are the most stable of all, because they are not flat.',
        },
        {
          type: 'p',
          text: 'The measurement is [[combustion]]. Every $\\ce{CH2}$ group in a strain-free alkane releases about 658.6 kJ/mol when burned (the increment between consecutive long-chain alkanes). A strained ring stores extra energy in its bonds and releases more. The excess, summed over the ring, is its [[ochem-ring-strain|ring strain]].',
        },
        {
          type: 'table',
          headers: ['Ring', '$-\\Delta H_c$ (kJ/mol)', 'per $\\ce{CH2}$', 'excess per $\\ce{CH2}$', 'ring strain'],
          rows: [
            ['cyclopropane, $\\ce{C3H6}$', '2091', '697.0', '38.4', '115'],
            ['cyclobutane, $\\ce{C4H8}$', '2744', '686.0', '27.4', '110'],
            ['cyclopentane, $\\ce{C5H10}$', '3320', '664.0', '5.4', '27'],
            ['cyclohexane, $\\ce{C6H12}$', '3952', '658.7', '0.1', '≈ 0'],
          ],
          caption: 'Gas-phase heats of combustion. Strain = (per-$\\ce{CH2}$ value − 658.6) × number of carbons, in kJ/mol.',
        },
        {
          type: 'derivation',
          title: 'Ring strain of cyclopropane',
          steps: [
            { tex: '\\frac{2091\\ \\text{kJ/mol}}{3\\ \\ce{CH2}} = 697.0\\ \\text{kJ/mol per}\\ \\ce{CH2}', why: 'Divide the heat of combustion by the number of $\\ce{CH2}$ units so rings of different size can be compared.' },
            { tex: '697.0 - 658.6 = 38.4\\ \\text{kJ/mol per}\\ \\ce{CH2}', why: 'Subtract the strain-free reference. Every bit of extra heat is energy that was stored in the ring.' },
            { tex: '3 \\times 38.4 = 115\\ \\text{kJ/mol}', why: 'Multiply back by the ring size to get the strain of the whole molecule.' },
          ],
          result: 'Cyclopropane carries about **115 kJ/mol** of strain, a third of a C–C bond energy.',
        },
        {
          type: 'figure',
          svg: FIG.cy_rings,
          alt: 'Skeletal drawings of cyclopropane (triangle), cyclobutane (square), cyclopentane (pentagon) and cyclohexane (hexagon), with notes: 60 degrees flat and eclipsed; puckered about 88 degrees; envelope about 105 degrees; chair about 111 degrees.',
          caption: 'Flat polygons are only bookkeeping. Every ring larger than three puckers to relieve strain.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Cyclobutane releases 686.0 kJ/mol per $\\ce{CH2}$ when burned, and a strain-free $\\ce{CH2}$ releases 658.6 kJ/mol. What is the total ring strain of cyclobutane?',
      hint: 'Excess per $\\ce{CH2}$, times the number of $\\ce{CH2}$ groups in the ring.',
      label: 'strain $=$',
      unit: 'kJ/mol',
      answer: '(686.0 - 658.6)*4',
      answerTex: '110',
      tolerance: 1,
      explanation: '$686.0 - 658.6 = 27.4$ kJ/mol per $\\ce{CH2}$, and $4 \\times 27.4 = 109.6 \\approx 110$ kJ/mol. Almost as much as cyclopropane in total, though less per carbon: cyclobutane\'s angles are less distorted, but it still has substantial eclipsing.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Where the strain comes from, and the chair',
      blocks: [
        {
          type: 'p',
          text: 'Three kinds of strain add up. [[ochem-angle-strain|Angle strain]]: bond angles away from $109.5^\\circ$. [[ochem-torsional-strain|Torsional strain]]: eclipsed bonds on neighboring carbons. [[ochem-steric-strain|Steric strain]]: atoms pushed into each other across the ring.',
        },
        {
          type: 'list',
          items: [
            '**Cyclopropane** must be flat (three points define a plane), so it has $60^\\circ$ angles **and** six eclipsed C–H pairs. Its $sp^3$ orbitals cannot point along the C–C axes, so they overlap off-axis in weak, bent "banana" bonds: cyclopropane rings open in reactions that leave other alkanes untouched.',
            '**Cyclobutane** puckers by about $25^\\circ$, which shrinks the angle to $88^\\circ$ but relieves some eclipsing: a trade-off.',
            '**Cyclopentane** folds into an "envelope" with one carbon out of plane; its angles are nearly ideal and most eclipsing is relieved.',
            '**Cyclohexane** folds into a [[ochem-chair-conformation|chair]]: C–C–C angles of about $111^\\circ$ and **every** C–C bond perfectly staggered. Strain: essentially zero.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.cy_chair,
          alt: 'A chair cyclohexane with carbons numbered 1 to 6. Each carbon has a blue vertical axial bond, alternating up and down around the ring, and a red equatorial bond pointing outward, slightly opposite to the axial direction.',
          caption: 'Every carbon has one [[ochem-axial-equatorial|axial]] bond (blue, parallel to the ring\'s axis) and one **equatorial** bond (red, pointing outward around the ring). Axial bonds alternate up, down, up… Each equatorial bond tilts slightly opposite to the axial bond on the same carbon.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Draw the ring', text: 'Two parallel lines slanting slightly down to the right, offset; close the left end with a V pointing down and the right end with a V pointing up.' },
            { title: 'Axial bonds', text: 'Straight up from every "up" carbon (including the right tip), straight down from every "down" carbon (including the left tip). They alternate.' },
            { title: 'Equatorial bonds', text: 'Outward, parallel to the ring bonds one bond away. On an up carbon the equatorial bond tilts slightly down; on a down carbon, slightly up.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the chair is strain-free',
          text: 'Look down any C–C bond of the chair in a Newman projection and you see a perfectly staggered butane-like arrangement: the two ring bonds are **gauche** to each other, and all the H atoms are staggered. No eclipsing, near-ideal angles, and no atoms crowding across the ring. That is why six-membered rings dominate nature, from glucose to steroids.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Count the positions in one chair of cyclohexane.',
      template: 'Chair cyclohexane has ___ axial H, of which ___ point up. Each carbon has one axial and one ___ H. On a carbon whose axial bond points up, the equatorial bond tilts slightly ___.',
      blanks: [{ answers: ['6'] }, { answers: ['3'] }, { answers: ['equatorial'] }, { answers: ['down'] }],
      wordBank: ['6', '3', '12', 'equatorial', 'gauche', 'down', 'up'],
      explanation: 'Six carbons, each with one axial and one equatorial H: 6 axial, 6 equatorial. Axial bonds alternate, so 3 point up (on C1, C3, C5, say) and 3 point down. On any carbon, the two bonds share the remaining tetrahedral space: if the axial bond goes straight up, the equatorial bond is splayed outward and slightly down.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The ring flip',
      blocks: [
        {
          type: 'p',
          text: 'The chair is not rigid. By rotating about its C–C bonds (no bond breaks), cyclohexane converts into a second chair in which the right tip has moved down and the left tip up. This [[ochem-ring-flip|ring flip]] has a barrier of about 45 kJ/mol, so it happens around $10^5$ times per second at room temperature.',
        },
        {
          type: 'theorem',
          name: 'What a ring flip does',
          text: 'Every **axial** position becomes **equatorial** and every equatorial becomes axial. But a group that points **up** (toward the top face of the ring) still points up afterward. Flipping changes axial/equatorial, never up/down.',
        },
        {
          type: 'figure',
          svg: FIG.cy_flip,
          alt: 'Equilibrium between two chairs of methylcyclohexane. Left: the methyl is axial, pointing straight up from the right tip; two orange axial H atoms on carbons 3 and 5 point up on the same face. Right: after the ring flip the methyl is equatorial, pointing outward from the right tip and slightly up.',
          caption: 'In methylcyclohexane the axial methyl (left) lives next to the two axial H on the same face, on C3 and C5. After the flip (right) the methyl is equatorial and points away from the ring. The two chairs are conformers in rapid equilibrium, not separable compounds.',
        },
        {
          type: 'p',
          text: 'Cyclohexane can also adopt a **boat**, reached on the way between chairs. The boat has four eclipsed C–C bonds and two "flagpole" hydrogens that bump across the ring, so it sits about 29 kJ/mol above the chair. Twisting it slightly gives the twist-boat, about 23 kJ/mol above the chair, a shallow minimum that is barely populated at room temperature.',
        },
        {
          type: 'figure',
          svg: FIG.cy_boat,
          alt: 'Left: a chair cyclohexane, labeled all bonds staggered, 0 kJ/mol. Right: a boat cyclohexane with both ends pointing up and two orange flagpole H atoms on the end carbons pointing toward each other, labeled plus 29 kJ/mol, twist-boat plus 23.',
          caption: 'Boat versus chair. The flagpole H atoms (orange) are only about 180 pm apart, and the bonds along the sides are eclipsed.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Draw both chairs every time',
          text: 'For any substituted cyclohexane, draw the first chair with the substituents in place, decide whether each is up or down, then draw the flipped chair, keeping up as up and swapping axial and equatorial. Then compare the strain. It takes a minute and prevents almost every mistake.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'After a ring flip, a substituent that was axial and pointing up becomes equatorial and pointing down.',
      answer: false,
      explanation: 'A ring flip swaps axial and equatorial, but it never moves a group from one face of the ring to the other: that would require breaking a bond. The up-axial group becomes an equatorial group that still points (slightly) up. This is why cis and trans isomers keep their identity through any number of ring flips.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: '1,3-Diaxial interactions and A-values',
      blocks: [
        {
          type: 'p',
          text: 'Why does the methyl prefer equatorial? An axial group sits parallel to the axial H atoms two carbons away on the same face (on C3 and C5 when the group is on C1). These are [[ochem-diaxial-interaction|1,3-diaxial interactions]]. Look down the C1–C2 bond and you see that the axial methyl is **gauche** to the ring carbon C3, exactly like gauche butane; the same happens along C1–C6. Two gauche interactions: $2 \\times 3.8 = 7.6$ kJ/mol. An equatorial methyl is **anti** to C3 and C5 and pays nothing.',
        },
        {
          type: 'definition',
          term: 'A-value',
          text: 'The [[ochem-a-value|A-value]] of a substituent is $\\Delta G^\\circ = G_{\\text{axial}} - G_{\\text{equatorial}}$ for the monosubstituted cyclohexane. It measures how strongly the group prefers equatorial.',
        },
        {
          type: 'table',
          headers: ['Substituent', 'A-value (kJ/mol)', 'Substituent', 'A-value (kJ/mol)'],
          rows: [
            ['$\\ce{-CN}$', '0.8', '$\\ce{-CH3}$', '7.6'],
            ['$\\ce{-F}$', '1.0', '$\\ce{-CH2CH3}$', '8.0'],
            ['$\\ce{-Cl}$, $\\ce{-Br}$', '2.0', '$\\ce{-CH(CH3)2}$', '9.2'],
            ['$\\ce{-OH}$', '4.2', '$\\ce{-C6H5}$ (phenyl)', '12.6'],
            ['$\\ce{-COOH}$', '5.8', '$\\ce{-C(CH3)3}$', '22.8'],
          ],
          caption: 'A-values are twice the per-interaction 1,3-diaxial costs in OpenStax/McMurry. Note how small the halogens are: Br is a big atom, but its long C–Br bond keeps it away from the axial H atoms.',
        },
        {
          type: 'p',
          text: 'Ethyl and isopropyl are barely larger than methyl because they can rotate an H toward the ring. tert-Butyl cannot: one of its methyls must point at the axial H atoms, so its A-value jumps to about 23 kJ/mol. A tert-butyl group effectively **locks** the ring in the chair that puts it equatorial.',
        },
        {
          type: 'derivation',
          title: 'Equatorial and axial methylcyclohexane at 25 °C',
          steps: [
            { tex: 'K = \\frac{[\\text{equatorial}]}{[\\text{axial}]} = e^{-\\Delta G^\\circ_{\\text{ax}\\to\\text{eq}}/RT} = e^{A/RT}', why: 'The reaction axial → equatorial has $\\Delta G^\\circ = -A$, and $K = e^{-\\Delta G^\\circ/RT}$.' },
            { tex: '\\frac{A}{RT} = \\frac{7600\\ \\text{J/mol}}{(8.314)(298)\\ \\text{J/mol}} = 3.07', why: 'Convert the A-value to J/mol to match $R$.' },
            { tex: 'K = e^{3.07} = 21.5', why: 'Equatorial outnumbers axial about 21 to 1.' },
            { tex: '\\%\\,\\text{eq} = \\frac{K}{1 + K} = \\frac{21.5}{22.5} = 95.6\\%', why: 'Convert a ratio into a percentage of the total.' },
          ],
          result: 'At any instant about **96%** of methylcyclohexane molecules have the methyl equatorial.',
        },
        {
          type: 'graph',
          x: [0, 25],
          y: [40, 100],
          xStep: 5,
          yStep: 10,
          functions: [{ expr: '100/(1 + exp(-1000x/(8.314u)))', label: '% equatorial', color: 'blue' }],
          points: [
            { x: 2.0, y: '100/(1 + exp(-2000/(8.314u)))', label: 'Cl' },
            { x: 4.2, y: '100/(1 + exp(-4200/(8.314u)))', label: 'OH' },
            { x: 7.6, y: '100/(1 + exp(-7600/(8.314u)))', label: 'CH₃' },
            { x: 12.6, y: '100/(1 + exp(-12600/(8.314u)))', label: 'Ph' },
            { x: 22.8, y: '100/(1 + exp(-22800/(8.314u)))', label: 't-Bu' },
          ],
          sliders: [{ name: 'u', min: 150, max: 600, step: 5, value: 298, label: 'temperature $T$ (K)' }],
          readouts: [{ label: '% equatorial for $\\ce{CH3}$ $=$', expr: '100/(1 + exp(-7600/(8.314u)))', digits: 1 }],
          caption: 'Percentage equatorial versus A-value (kJ/mol). At 298 K chlorine is only about 70% equatorial, methyl 96%, tert-butyl 99.99%. Lower the temperature and every curve sharpens: this is how chemists freeze out and measure the axial conformer by NMR at around −80 °C.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'The A-value of $\\ce{-OH}$ is 4.2 kJ/mol. What is the equilibrium constant $K = [\\text{equatorial}]/[\\text{axial}]$ for cyclohexanol at 298 K? Give two significant figures.',
      hint: '$K = e^{A/RT}$ with $A$ in J/mol and $R = 8.314$ J mol⁻¹ K⁻¹.',
      label: '$K =$',
      answer: 'exp(4200/(8.314*298))',
      answerTex: '5.4',
      tolerance: 0.1,
      explanation: '$A/RT = 4200/(8.314 \\times 298) = 1.695$, so $K = e^{1.695} = 5.4$. Cyclohexanol is $5.4/6.4 = 84\\%$ equatorial at room temperature. Smaller groups give much smaller preferences because the dependence is exponential: OH (4.2) gives 84%, $\\ce{CH3}$ (7.6) gives 96%.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'In which compound is the conformational equilibrium most completely on the equatorial side at 25 °C?',
      options: [
        { text: 'Bromocyclohexane', why: 'A-value 2.0 kJ/mol: only about 70% equatorial. The long C–Br bond keeps the large Br atom away from the axial H.' },
        { text: 'Isopropylcyclohexane', why: 'A-value 9.2 kJ/mol (about 98% equatorial): the isopropyl group can turn its C–H toward the ring to avoid the axial H.' },
        { text: '*tert*-Butylcyclohexane', correct: true, why: 'A-value about 22.8 kJ/mol: $K = e^{9.2} \\approx 10^4$, so only about 1 molecule in 10,000 has the tert-butyl axial. The ring is effectively locked.' },
        { text: 'Phenylcyclohexane', why: 'A-value 12.6 kJ/mol, a strong preference (about 99.4% equatorial) but well short of tert-butyl.' },
      ],
      explanation: 'The larger the A-value, the more equatorial. tert-Butyl is special: any rotation leaves one methyl pointing into the 1,3-diaxial H atoms, so its axial conformer costs about 23 kJ/mol. Chemists use a tert-butyl group as a conformational "anchor" to hold a ring in one chair while they study the other substituents.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Disubstituted cyclohexanes',
      blocks: [
        {
          type: 'p',
          text: 'With two substituents, a ring has a new kind of isomerism. If both groups are on the same face, the compound is **cis**; on opposite faces, **trans**. Like [[gchem-cis-trans-isomers|cis–trans alkenes]], these are different compounds: converting one into the other would mean breaking a bond, and ring flips never move a group to the other face. (They are stereoisomers, the subject of the next unit.)',
        },
        {
          type: 'figure',
          svg: FIG.cy_di,
          alt: 'Two equilibria. Top: trans-1,4-dimethylcyclohexane, a chair with one methyl axial up on the right tip and one axial down on the left tip, labeled diaxial 15.2 kJ/mol, in equilibrium with the flipped chair in which both methyls are equatorial, labeled 0. Bottom: cis-1,4-dimethylcyclohexane, a chair with one methyl axial and one equatorial, in equilibrium with the flipped chair where they swap, both labeled 7.6.',
          caption: 'trans-1,4: one chair is diaxial (bad), the other diequatorial (excellent), so the molecule sits almost entirely diequatorial. cis-1,4: both chairs have one axial methyl; they are equal in energy.',
        },
        {
          type: 'table',
          headers: ['Positions', 'cis', 'trans'],
          rows: [
            ['1,2', 'a,e ⇌ e,a', 'e,e ⇌ a,a'],
            ['1,3', 'e,e ⇌ a,a', 'a,e ⇌ e,a'],
            ['1,4', 'a,e ⇌ e,a', 'e,e ⇌ a,a'],
          ],
          caption: 'a = axial, e = equatorial. The pattern alternates: whichever isomer can be diequatorial (trans-1,2, cis-1,3, trans-1,4) is the more stable one when the groups are alike.',
        },
        {
          type: 'derivation',
          title: 'trans-1,2-Dimethylcyclohexane: how strongly does it prefer diequatorial?',
          steps: [
            { tex: '\\text{diaxial: } 2 \\text{ axial } \\ce{CH3} \\times 2 \\times 3.8 = 15.2\\ \\text{kJ/mol}', why: 'Each axial methyl has two 1,3-diaxial interactions with H, 3.8 kJ/mol each.' },
            { tex: '\\text{diequatorial: one gauche } \\ce{CH3}/\\ce{CH3} = 3.8\\ \\text{kJ/mol}', why: 'Two equatorial groups on adjacent carbons are $60^\\circ$ apart in a Newman projection along C1–C2, like gauche butane. (In the diaxial chair the two methyls are anti to each other, so no gauche term there.)' },
            { tex: '\\Delta G = 15.2 - 3.8 = 11.4\\ \\text{kJ/mol}', why: 'Difference between the two chairs.' },
            { tex: 'K = e^{11400/(8.314 \\times 298)} = e^{4.60} \\approx 100', why: 'About 99% diequatorial at 25 °C.' },
          ],
          result: 'Even with the small gauche penalty, trans-1,2-dimethylcyclohexane is about **99%** diequatorial.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Nature\'s favorite chair',
          text: 'β-Glucose, the building block of cellulose and starch, is a six-membered ring (five carbons and one oxygen) whose chair puts **every** one of its large groups (four OH and a $\\ce{CH2OH}$) equatorial. It is the most abundant organic molecule on Earth, and that all-equatorial chair is part of why it is so stable and so common.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'cis-1-*tert*-Butyl-4-methylcyclohexane has one group axial in each chair. Using A-values ($\\ce{C(CH3)3}$ 22.8, $\\ce{CH3}$ 7.6 kJ/mol), by how much is the better chair lower in energy than the worse one?',
      hint: 'In a cis-1,4 compound one group is axial in each chair. Which group would you rather have axial?',
      label: '$\\Delta G =$',
      unit: 'kJ/mol',
      answer: '22.8 - 7.6',
      answerTex: '15.2',
      tolerance: 0.05,
      explanation: 'cis-1,4 means axial/equatorial in both chairs. Chair 1: tert-butyl equatorial, methyl axial, strain 7.6. Chair 2: tert-butyl axial, methyl equatorial, strain 22.8. The difference is $22.8 - 7.6 = 15.2$ kJ/mol in favor of chair 1, so the bulky group takes the equatorial position and forces the methyl axial ($K \\approx 460$, 99.8%).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student compares cis- and trans-1,3-dimethylcyclohexane. Tap the first incorrect line.',
      lines: [
        'In a chair, C1 and C3 are both "up" carbons: their axial bonds both point up.',
        'In the cis isomer both methyls point up, so in one chair both are axial and in the other both are equatorial.',
        'In the trans isomer one methyl points up and one down, so each chair has one axial and one equatorial methyl.',
        'The trans isomer can be diequatorial, so trans-1,3 is the more stable isomer.',
        'The diaxial chair of the cis isomer also has a severe methyl–methyl 1,3-diaxial clash, so that chair is barely populated.',
      ],
      errorLines: [4],
      explanation: 'Line 3 correctly says that trans-1,3 is always axial/equatorial, so it can **never** be diequatorial. Line 4 contradicts it. It is **cis**-1,3-dimethylcyclohexane that can adopt a diequatorial chair (line 2), so cis-1,3 is the more stable isomer, by about 7 kJ/mol (one axial methyl in the trans isomer). Line 5 is right: in the cis diaxial chair the two methyls point at each other across the ring, which is why that chair is essentially empty.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which is the more stable isomer, and in which conformation does it spend most of its time: cis- or trans-1,2-dimethylcyclohexane?',
      options: [
        { text: 'cis, diequatorial', why: 'cis-1,2 is axial/equatorial in both chairs; it cannot be diequatorial.' },
        { text: 'trans, diequatorial', correct: true, why: 'trans-1,2 can put both methyls equatorial (one gauche interaction, 3.8 kJ/mol); cis-1,2 always has one axial methyl plus the same gauche interaction (7.6 + 3.8 = 11.4).' },
        { text: 'trans, diaxial', why: 'The diaxial chair of trans-1,2 has four 1,3-diaxial interactions (15.2 kJ/mol) and is only about 1% populated.' },
        { text: 'They are equally stable because they are conformers of each other', why: 'cis and trans are different compounds: no ring flip turns one into the other.' },
      ],
      explanation: 'Use the table: trans-1,2 is e,e ⇌ a,a and cis-1,2 is a,e ⇌ e,a. The best trans chair costs 3.8 (one gauche); every cis chair costs 7.6 + 3.8 = 11.4. So trans-1,2-dimethylcyclohexane is more stable, by about 7.6 kJ/mol, and sits almost entirely diequatorial.',
    },
  ],
  takeaways: [
    'Ring strain = (heat of combustion per $\\ce{CH2}$ − 658.6) × ring size: about 115 (C₃), 110 (C₄), 27 (C₅) and 0 (C₆) kJ/mol.',
    'Strain comes from distorted angles, eclipsed bonds and crowding; rings pucker to relieve it, and the cyclohexane chair is strain-free with every bond staggered.',
    'Each chair carbon has one axial bond (up/down, alternating) and one equatorial bond; a ring flip swaps axial and equatorial but keeps up as up.',
    'Axial groups suffer 1,3-diaxial (gauche-type) interactions; the A-value measures the equatorial preference and $K = e^{A/RT}$ (methyl: 7.6 kJ/mol, about 96% equatorial).',
    'cis/trans isomers of disubstituted rings are different compounds; the isomer that can be diequatorial (trans-1,2, cis-1,3, trans-1,4) is usually more stable, and the biggest group takes the equatorial position.',
    'The boat is about 29 kJ/mol above the chair (flagpole H and eclipsing); the twist-boat about 23.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Chapter 4 (Organic Compounds: Cycloalkanes and Their Stereochemistry) has the heats of combustion, chair drawing tips and the 1,3-diaxial strain table.' },
    { title: 'Cyclohexane conformation', url: 'https://en.wikipedia.org/wiki/Cyclohexane_conformation', source: 'wikipedia', note: 'Chair, boat, twist-boat and half-chair geometries and the energy profile of the ring flip.' },
    { title: 'A value', url: 'https://en.wikipedia.org/wiki/A_value', source: 'wikipedia', note: 'A longer table of A-values and how they are measured by low-temperature NMR.' },
    { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', source: 'other', note: 'Its step-by-step posts on drawing chairs and doing ring flips are worth practicing with.' },
  ],
};
