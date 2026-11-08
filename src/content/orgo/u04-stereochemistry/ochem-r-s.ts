import type { Lesson } from '../../types';

// <figures> (every configuration checked numerically from the drawing geometry and, for real molecules, by a CIP program)
const FIG = {
  rs_ala: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg"><g transform="translate(130,0) scale(1.8)"><text x="96.04" y="41.06" font-weight="normal" font-size="14" fill="currentColor" class="t-blue">N</text><text x="116.26" y="44.39" font-weight="normal" font-size="9" fill="currentColor" class="t-blue">2</text><text x="106.15" y="41.06" font-weight="normal" font-size="14" fill="currentColor" class="t-blue">H</text><text x="54.08" y="17.06" font-weight="normal" font-size="14" fill="currentColor" class="t-red">O</text><text x="33.29" y="53.06" font-weight="normal" font-size="14" fill="currentColor" class="t-red">O</text><text x="23.19" y="53.06" font-weight="normal" font-size="14" fill="currentColor" class="t-red">H</text><line x1="61.32" y1="37.43" x2="61.32" y2="19.39" stroke="currentColor" stroke-width="1.44" /><line x1="57.72" y1="37.43" x2="57.72" y2="19.39" stroke="currentColor" stroke-width="1.44" /><polygon points="80,48 88,45 87,43 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><polygon points="87,43 88,45 96,42 94,38 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><line x1="80.31" y1="48.39" x2="80.31" y2="72.39" stroke="currentColor" stroke-width="1.44" /><line x1="80.31" y1="48.39" x2="59.52" y2="36.39" stroke="currentColor" stroke-width="1.44" /><line x1="59.52" y1="36.39" x2="45.19" y2="44.67" stroke="currentColor" stroke-width="1.44" /></g></svg>',
  rs_cases: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><line x1="90" y1="85" x2="90.0" y2="41.0" stroke="currentColor" stroke-width="2.2"/><text x="90.0" y="25.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">Br</text><line x1="90" y1="85" x2="128.1" y2="107.0" stroke="currentColor" stroke-width="2.2"/><text x="142.0" y="115.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">Cl</text><path d="M90,85 L49.1,102.2 L54.6,111.8 Z" fill="currentColor"/><text x="38.0" y="115.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">F</text><line x1="88.3" y1="91.0" x2="91.7" y2="91.0" stroke="currentColor" stroke-width="1.6"/><line x1="87.6" y1="97.1" x2="92.4" y2="97.1" stroke="currentColor" stroke-width="1.6"/><line x1="86.9" y1="103.1" x2="93.1" y2="103.1" stroke="currentColor" stroke-width="1.6"/><line x1="86.3" y1="109.1" x2="93.7" y2="109.1" stroke="currentColor" stroke-width="1.6"/><line x1="85.6" y1="115.1" x2="94.4" y2="115.1" stroke="currentColor" stroke-width="1.6"/><line x1="84.9" y1="121.2" x2="95.1" y2="121.2" stroke="currentColor" stroke-width="1.6"/><line x1="84.2" y1="127.2" x2="95.8" y2="127.2" stroke="currentColor" stroke-width="1.6"/><text x="90.0" y="145.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray">H</text><text x="90" y="85" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray" font-weight="600"></text><text x="90" y="170" text-anchor="middle" font-size="13" font-weight="600">H on a hash</text><text x="90" y="188" text-anchor="middle" font-size="12" class="t-gray">read it directly</text><line x1="260" y1="85" x2="260.0" y2="41.0" stroke="currentColor" stroke-width="2.2"/><text x="260.0" y="25.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">Br</text><line x1="260" y1="85" x2="298.1" y2="107.0" stroke="currentColor" stroke-width="2.2"/><text x="312.0" y="115.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">Cl</text><line x1="253.9" y1="86.6" x2="255.6" y2="89.5" stroke="currentColor" stroke-width="1.6"/><line x1="248.4" y1="89.0" x2="250.7" y2="93.1" stroke="currentColor" stroke-width="1.6"/><line x1="242.8" y1="91.4" x2="245.9" y2="96.7" stroke="currentColor" stroke-width="1.6"/><line x1="237.3" y1="93.8" x2="241.0" y2="100.3" stroke="currentColor" stroke-width="1.6"/><line x1="231.7" y1="96.2" x2="236.1" y2="103.9" stroke="currentColor" stroke-width="1.6"/><line x1="226.1" y1="98.7" x2="231.2" y2="107.5" stroke="currentColor" stroke-width="1.6"/><line x1="220.6" y1="101.1" x2="226.4" y2="111.1" stroke="currentColor" stroke-width="1.6"/><text x="208.0" y="115.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">F</text><path d="M260,85 L254.5,129.0 L265.5,129.0 Z" fill="currentColor"/><text x="260.0" y="145.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray">H</text><text x="260" y="85" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray" font-weight="600"></text><text x="260" y="170" text-anchor="middle" font-size="13" font-weight="600">H on a wedge</text><text x="260" y="188" text-anchor="middle" font-size="12" class="t-gray">read it, then reverse</text><line x1="430" y1="85" x2="430.0" y2="41.0" stroke="currentColor" stroke-width="2.2"/><text x="430.0" y="25.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray">H</text><line x1="430" y1="85" x2="468.1" y2="107.0" stroke="currentColor" stroke-width="2.2"/><text x="482.0" y="115.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">Cl</text><path d="M430,85 L389.1,102.2 L394.6,111.8 Z" fill="currentColor"/><text x="378.0" y="115.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">F</text><line x1="428.3" y1="91.0" x2="431.7" y2="91.0" stroke="currentColor" stroke-width="1.6"/><line x1="427.6" y1="97.1" x2="432.4" y2="97.1" stroke="currentColor" stroke-width="1.6"/><line x1="426.9" y1="103.1" x2="433.1" y2="103.1" stroke="currentColor" stroke-width="1.6"/><line x1="426.3" y1="109.1" x2="433.7" y2="109.1" stroke="currentColor" stroke-width="1.6"/><line x1="425.6" y1="115.1" x2="434.4" y2="115.1" stroke="currentColor" stroke-width="1.6"/><line x1="424.9" y1="121.2" x2="435.1" y2="121.2" stroke="currentColor" stroke-width="1.6"/><line x1="424.2" y1="127.2" x2="435.8" y2="127.2" stroke="currentColor" stroke-width="1.6"/><text x="430.0" y="145.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-green">Br</text><text x="430" y="85" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray" font-weight="600"></text><text x="430" y="170" text-anchor="middle" font-size="13" font-weight="600">H in the plane</text><text x="430" y="188" text-anchor="middle" font-size="12" class="t-gray">swap H with the hashed group</text></svg>',
  rs_quiz: '<svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="85" x2="65.0" y2="45.0" stroke="currentColor" stroke-width="2.2"/><text x="65.0" y="29.0" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₂CH₃</text><path d="M65,85 L96.9,109.8 L102.4,100.2 Z" fill="currentColor"/><text x="113.5" y="113.0" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-green">Br</text><line x1="65" y1="85" x2="30.4" y2="105.0" stroke="currentColor" stroke-width="2.2"/><text x="13.8" y="114.6" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₃</text><line x1="63.3" y1="90.5" x2="66.7" y2="90.5" stroke="currentColor" stroke-width="1.6"/><line x1="62.6" y1="96.0" x2="67.4" y2="96.0" stroke="currentColor" stroke-width="1.6"/><line x1="61.9" y1="101.4" x2="68.1" y2="101.4" stroke="currentColor" stroke-width="1.6"/><line x1="61.3" y1="106.9" x2="68.7" y2="106.9" stroke="currentColor" stroke-width="1.6"/><line x1="60.6" y1="112.4" x2="69.4" y2="112.4" stroke="currentColor" stroke-width="1.6"/><line x1="59.9" y1="117.9" x2="70.1" y2="117.9" stroke="currentColor" stroke-width="1.6"/><line x1="59.2" y1="123.4" x2="70.8" y2="123.4" stroke="currentColor" stroke-width="1.6"/><text x="65.0" y="141.0" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray">H</text><text x="65" y="85" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray" font-weight="600"></text><text x="65" y="172" text-anchor="middle" font-size="15" font-weight="700">A</text><line x1="195" y1="85" x2="160.4" y2="65.0" stroke="currentColor" stroke-width="2.2"/><text x="146.5" y="57.0" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-green">Br</text><line x1="195" y1="85" x2="229.6" y2="65.0" stroke="currentColor" stroke-width="2.2"/><text x="246.2" y="55.4" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₃</text><path d="M195,85 L167.6,114.6 L176.6,120.9 Z" fill="currentColor"/><text x="158.1" y="137.6" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₂CH₃</text><line x1="196.3" y1="90.6" x2="199.2" y2="88.9" stroke="currentColor" stroke-width="1.6"/><line x1="198.4" y1="95.7" x2="202.5" y2="93.3" stroke="currentColor" stroke-width="1.6"/><line x1="200.6" y1="100.8" x2="205.9" y2="97.7" stroke="currentColor" stroke-width="1.6"/><line x1="202.7" y1="105.9" x2="209.2" y2="102.1" stroke="currentColor" stroke-width="1.6"/><line x1="204.9" y1="110.9" x2="212.5" y2="106.5" stroke="currentColor" stroke-width="1.6"/><line x1="207.0" y1="116.0" x2="215.9" y2="110.9" stroke="currentColor" stroke-width="1.6"/><line x1="209.2" y1="121.1" x2="219.2" y2="115.3" stroke="currentColor" stroke-width="1.6"/><text x="223.0" y="133.5" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray">H</text><text x="195" y="85" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray" font-weight="600"></text><text x="195" y="172" text-anchor="middle" font-size="15" font-weight="700">B</text><line x1="325" y1="85" x2="325.0" y2="45.0" stroke="currentColor" stroke-width="2.2"/><text x="325.0" y="29.0" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray">H</text><line x1="325" y1="85" x2="359.6" y2="105.0" stroke="currentColor" stroke-width="2.2"/><text x="376.2" y="114.6" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₃</text><path d="M325,85 L287.6,100.2 L293.1,109.8 Z" fill="currentColor"/><text x="265.7" y="119.2" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₂CH₃</text><line x1="323.3" y1="90.5" x2="326.7" y2="90.5" stroke="currentColor" stroke-width="1.6"/><line x1="322.6" y1="96.0" x2="327.4" y2="96.0" stroke="currentColor" stroke-width="1.6"/><line x1="321.9" y1="101.4" x2="328.1" y2="101.4" stroke="currentColor" stroke-width="1.6"/><line x1="321.3" y1="106.9" x2="328.7" y2="106.9" stroke="currentColor" stroke-width="1.6"/><line x1="320.6" y1="112.4" x2="329.4" y2="112.4" stroke="currentColor" stroke-width="1.6"/><line x1="319.9" y1="117.9" x2="330.1" y2="117.9" stroke="currentColor" stroke-width="1.6"/><line x1="319.2" y1="123.4" x2="330.8" y2="123.4" stroke="currentColor" stroke-width="1.6"/><text x="325.0" y="141.0" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-green">Br</text><text x="325" y="85" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray" font-weight="600"></text><text x="325" y="172" text-anchor="middle" font-size="15" font-weight="700">C</text><line x1="455" y1="85" x2="420.4" y2="65.0" stroke="currentColor" stroke-width="2.2"/><text x="403.8" y="55.4" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₃</text><line x1="455" y1="85" x2="489.6" y2="65.0" stroke="currentColor" stroke-width="2.2"/><text x="503.5" y="57.0" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-green">Br</text><line x1="450.5" y1="88.5" x2="453.2" y2="90.5" stroke="currentColor" stroke-width="1.6"/><line x1="446.8" y1="92.6" x2="450.7" y2="95.3" stroke="currentColor" stroke-width="1.6"/><line x1="443.1" y1="96.7" x2="448.1" y2="100.2" stroke="currentColor" stroke-width="1.6"/><line x1="439.4" y1="100.8" x2="445.5" y2="105.1" stroke="currentColor" stroke-width="1.6"/><line x1="435.7" y1="104.9" x2="442.9" y2="110.0" stroke="currentColor" stroke-width="1.6"/><line x1="432.0" y1="109.0" x2="440.3" y2="114.9" stroke="currentColor" stroke-width="1.6"/><line x1="428.3" y1="113.1" x2="437.7" y2="119.7" stroke="currentColor" stroke-width="1.6"/><text x="418.1" y="137.6" text-anchor="middle" dominant-baseline="central" font-size="13.5">CH₂CH₃</text><path d="M455,85 L470.2,122.4 L479.8,116.9 Z" fill="currentColor"/><text x="483.0" y="133.5" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray">H</text><text x="455" y="85" text-anchor="middle" dominant-baseline="central" font-size="13.5" class="t-gray" font-weight="600"></text><text x="455" y="172" text-anchor="middle" font-size="15" font-weight="700">D</text></svg>',
  rs_rule: '<svg viewBox="0 0 600 292" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="135" x2="150.0" y2="89.0" stroke="currentColor" stroke-width="2.2"/><text x="150.0" y="73.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-red">OH</text><line x1="150" y1="135" x2="193.2" y2="150.7" stroke="currentColor" stroke-width="2.2"/><text x="221.0" y="160.8" text-anchor="middle" dominant-baseline="central" font-size="15">CH₂CH₃</text><path d="M150,135 L104.9,145.6 L108.7,155.9 Z" fill="currentColor"/><text x="88.6" y="157.4" text-anchor="middle" dominant-baseline="central" font-size="15">CH₃</text><line x1="148.3" y1="141.3" x2="151.7" y2="141.3" stroke="currentColor" stroke-width="1.6"/><line x1="147.6" y1="147.6" x2="152.4" y2="147.6" stroke="currentColor" stroke-width="1.6"/><line x1="146.9" y1="153.9" x2="153.1" y2="153.9" stroke="currentColor" stroke-width="1.6"/><line x1="146.3" y1="160.2" x2="153.7" y2="160.2" stroke="currentColor" stroke-width="1.6"/><line x1="145.6" y1="166.5" x2="154.4" y2="166.5" stroke="currentColor" stroke-width="1.6"/><line x1="144.9" y1="172.8" x2="155.1" y2="172.8" stroke="currentColor" stroke-width="1.6"/><line x1="144.2" y1="179.1" x2="155.8" y2="179.1" stroke="currentColor" stroke-width="1.6"/><text x="150.0" y="197.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray">H</text><text x="150" y="135" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray" font-weight="600"></text><circle cx="162.2" cy="107.6" r="8" fill="currentColor" class="f-purple" fill-opacity="0.18"/><text x="162.2" y="111.6" text-anchor="middle" font-size="11" class="t-purple" font-weight="700">1</text><circle cx="179.9" cy="132.9" r="8" fill="currentColor" class="f-purple" fill-opacity="0.18"/><text x="179.9" y="136.9" text-anchor="middle" font-size="11" class="t-purple" font-weight="700">2</text><circle cx="120.1" cy="132.9" r="8" fill="currentColor" class="f-purple" fill-opacity="0.18"/><text x="120.1" y="136.9" text-anchor="middle" font-size="11" class="t-purple" font-weight="700">3</text><circle cx="137.8" cy="162.4" r="8" fill="currentColor" class="f-purple" fill-opacity="0.18"/><text x="137.8" y="166.4" text-anchor="middle" font-size="11" class="t-purple" font-weight="700">4</text><path d="M175.4,15.7 A122,122 0 1 1 46.5,199.7" fill="none" stroke="currentColor" stroke-width="1.8" class="s-purple"/><path d="M46.5,199.7 L47.9,209.4 L54.7,205.2 Z" fill="currentColor" class="f-purple"/><text x="370" y="55" text-anchor="start" font-size="13">1. Rank the four groups (1 = highest).</text><text x="370" y="80" text-anchor="start" font-size="13">2. Point group 4 away from you.</text><text x="370" y="105" text-anchor="start" font-size="13">3. Trace 1 → 2 → 3.</text><text x="370" y="135" text-anchor="start" font-size="13.5" class="t-purple" font-weight="600">clockwise = R (rectus)</text><text x="370" y="157" text-anchor="start" font-size="13.5" font-weight="600">counterclockwise = S (sinister)</text><text x="150" y="282" text-anchor="middle" font-size="13">(R)-2-butanol</text></svg>',
  rs_skel: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg"><g transform="translate(20,0) scale(1.8)"><text x="60.5" y="58.78" font-weight="normal" font-size="14" fill="currentColor" class="t-red">O</text><text x="71.39" y="58.78" font-weight="normal" font-size="14" fill="currentColor" class="t-red">H</text><line x1="86.73" y1="18.11" x2="65.95" y2="30.11" stroke="currentColor" stroke-width="1.44" /><polygon points="66,30 65,39 67,39 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><polygon points="67,39 65,39 64,47 68,47 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><line x1="65.95" y1="30.11" x2="45.16" y2="18.11" stroke="currentColor" stroke-width="1.44" /><line x1="45.16" y1="18.11" x2="24.38" y2="30.11" stroke="currentColor" stroke-width="1.44" /></g><text x="330" y="45" text-anchor="middle" font-size="12.5">skeletal drawing: the H on the</text><text x="330" y="63" text-anchor="middle" font-size="12.5">chirality center is not drawn.</text><text x="330" y="90" text-anchor="middle" font-size="12.5" class="t-purple">OH is on a wedge, so the hidden</text><text x="330" y="108" text-anchor="middle" font-size="12.5" class="t-purple">H points back: read directly → R</text><text x="116.7" y="95.4" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-purple">1</text><text x="101.3" y="19.6" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-purple">2</text><text x="187.4" y="26.1" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-purple">3</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-r-s',
  title: 'Assigning R and S',
  summary: 'The Cahn–Ingold–Prelog priority rules step by step (atomic number, first point of difference, duplicated atoms for multiple bonds), reading R or S from wedge-and-hash drawings in every orientation, the swap trick, and writing configurations into names.',
  minutes: 19,
  objectives: [
    'Rank the four groups on a chirality center with the CIP rules, including ties broken at the first point of difference',
    'Handle double and triple bonds with duplicated atoms',
    'Assign R or S when the lowest-priority group points away, toward you, or lies in the plane of the page',
    'Use the rule that swapping two groups inverts the configuration',
    'Write (R)/(S) descriptors into names and explain why they are unrelated to the sign of optical rotation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Naming a configuration: the CIP rules',
      blocks: [
        {
          type: 'p',
          text: 'Drawings are not names. To write down which enantiomer is in a bottle, you need a descriptor that anyone can compute from the structure. In 1956 Robert Cahn, Christopher Ingold and Vladimir Prelog proposed one: rank the four groups on a [[ochem-chirality-center|chirality center]], look at the center with the lowest-ranked group pointing away, and see whether the other three run clockwise or counterclockwise. The ranking procedure is the [[ochem-cip-rules|CIP priority rules]].',
        },
        {
          type: 'theorem',
          name: 'Rule 1: atomic number',
          text: 'Look at the four atoms **directly attached** to the chirality center. Higher atomic number means higher priority. For isotopes, higher mass wins (D > H).',
        },
        {
          type: 'table',
          headers: ['Atom', 'I', 'Br', 'Cl', 'S', 'F', 'O', 'N', 'C', 'H'],
          rows: [['$Z$', '53', '35', '17', '16', '9', '8', '7', '6', '1']],
          caption: 'Priority by atomic number, highest first. Note that S (16) outranks O, and Cl (17) outranks S.',
        },
        {
          type: 'derivation',
          title: 'First pass at 2-butanol, $\\ce{CH3CH(OH)CH2CH3}$',
          steps: [
            { tex: '\\text{attached atoms: } \\ce{O},\\ \\ce{C},\\ \\ce{C},\\ \\ce{H}', why: 'The chirality center (C2) carries OH, a methyl carbon, an ethyl carbon and H.' },
            { tex: '\\ce{OH} = 1,\\quad \\ce{H} = 4', why: 'O ($Z = 8$) beats C ($Z = 6$) beats H ($Z = 1$).' },
            { tex: '\\ce{CH3} \\text{ vs } \\ce{CH2CH3}: \\text{ tie at C}', why: 'Rule 1 cannot separate two groups attached through carbon. Rule 2 (next card) breaks the tie.' },
          ],
          result: 'Rule 1 settles priorities 1 and 4. Most real problems also need rule 2.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Atomic number of the attached atom, not the size of the group',
          text: 'A huge alkyl group still ranks below a lone OH, because the atom touching the center is C, not O. Priority is decided atom by atom, starting at the center, never by total mass or bulk.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'order',
      prompt: 'Rank these groups from highest to lowest CIP priority.',
      lines: ['$\\ce{-Br}$', '$\\ce{-OH}$', '$\\ce{-COOH}$', '$\\ce{-CHO}$', '$\\ce{-CH2OH}$'],
      hint: 'Rule 1 first (attached atom). For the three carbon groups, list the atoms attached to that carbon, counting a double bond to O as two O.',
      explanation: 'Br ($Z = 35$) beats O; OH is attached through O, which beats the three carbon groups. Among the carbons: $\\ce{-COOH}$ has (O, O, O) (the C=O counts twice, plus OH), $\\ce{-CHO}$ has (O, O, H), $\\ce{-CH2OH}$ has (O, H, H). Comparing the sets term by term: (O, O, O) > (O, O, H) > (O, H, H).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Rule 2: the first point of difference',
      blocks: [
        {
          type: 'theorem',
          name: 'Rule 2: break ties by exploring outward',
          text: 'If two attached atoms tie, list the **set** of atoms attached to each (three atoms, written in decreasing order) and compare the sets term by term. The first difference decides. If the sets are identical, move one bond further out, exploring the highest-ranked branch first, and repeat.',
        },
        {
          type: 'derivation',
          title: 'Breaking ties among carbon groups',
          steps: [
            { tex: '\\ce{-CH2CH3}: (\\ce{C, H, H}) \\quad > \\quad \\ce{-CH3}: (\\ce{H, H, H})', why: 'First terms: C beats H. So in 2-butanol, ethyl is 2 and methyl is 3.' },
            { tex: '\\ce{-CH(CH3)2}: (\\ce{C, C, H}) \\quad > \\quad \\ce{-CH2CH2CH3}: (\\ce{C, H, H})', why: 'First terms tie (C, C); second terms: C beats H. Isopropyl outranks propyl.' },
            { tex: '\\ce{-CH2OH}: (\\ce{O, H, H}) \\quad > \\quad \\ce{-C(CH3)3}: (\\ce{C, C, C})', why: 'Compare the **highest** atoms first: O beats C, and the comparison stops there. One O outweighs three C.' },
            { tex: '\\ce{-CH2CH2Br}: (\\ce{C, H, H}) \\quad < \\quad \\ce{-CH(CH3)2}: (\\ce{C, C, H})', why: 'The difference appears at the first carbon\'s set (H versus C). The bromine two bonds out is never examined.' },
          ],
          result: 'Stop at the **first** point of difference. What lies beyond it does not matter, however heavy.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'It is a breadth-first comparison',
          text: 'Algorithmically, CIP ranking is a breadth-first search outward from the center along each branch, comparing sorted tuples of atomic numbers sphere by sphere: like comparing two version numbers or two sorted lists lexicographically. Cheminformatics libraries implement exactly this (with extra rules for rare edge cases), and it is surprisingly easy to get subtly wrong: a 2018 comparison found that popular programs disagreed on a noticeable fraction of complex structures.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Compare sets, not single atoms',
          text: 'When the attached atoms tie, compare all three atoms in each set, in decreasing order. A frequent error is to compare only the "biggest" neighbor and stop when they tie: $(\\ce{O, C, H})$ beats $(\\ce{O, H, H})$ at the **second** term.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Which group has the **highest** CIP priority?',
      options: [
        { text: '$\\ce{-C(CH3)3}$', why: 'Its set is (C, C, C). It loses to (O, H, H) at the very first term: O beats C.' },
        { text: '$\\ce{-CH(CH3)2}$', why: 'Its set is (C, C, H), below (C, C, C) and below anything containing O.' },
        { text: '$\\ce{-CH2OH}$', correct: true, why: 'Its set is (O, H, H). The first term, O, beats the C at the start of every other set.' },
        { text: '$\\ce{-CH2CH2Br}$', why: 'Its set is (C, H, H). The Br is two bonds away and is never reached, because the comparison is decided at the first carbon.' },
      ],
      explanation: 'All four groups are attached through carbon, so go to rule 2 and write each carbon\'s set in decreasing order: $\\ce{-CH2OH}$ (O, H, H), $\\ce{-C(CH3)3}$ (C, C, C), $\\ce{-CH(CH3)2}$ (C, C, H), $\\ce{-CH2CH2Br}$ (C, H, H). Compare first terms: only $\\ce{-CH2OH}$ has O, so it wins. The full order is $\\ce{-CH2OH} > \\ce{-C(CH3)3} > \\ce{-CH(CH3)2} > \\ce{-CH2CH2Br}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Rule 3: multiple bonds',
      blocks: [
        {
          type: 'theorem',
          name: 'Rule 3: duplicate atoms',
          text: 'A double bond is treated as two single bonds: each atom of the double bond is counted as carrying a **duplicate** of its partner. A triple bond gives two duplicates. Duplicate atoms carry nothing further (they count as having three phantom atoms of atomic number 0).',
        },
        {
          type: 'table',
          headers: ['Group', 'Treated as', 'Set at first atom'],
          rows: [
            ['$\\ce{-CH=CH2}$ (vinyl)', '$\\ce{-CH(C)-CH2(C)}$', '(C, C, H)'],
            ['$\\ce{-C#CH}$ (ethynyl)', '$\\ce{-C(C)(C)-CH(C)(C)}$', '(C, C, C)'],
            ['$\\ce{-CH=O}$ (aldehyde)', 'C bearing O, O, H', '(O, O, H)'],
            ['$\\ce{-COOH}$', 'C bearing O, O, O', '(O, O, O)'],
            ['$\\ce{-C#N}$', 'C bearing N, N, N', '(N, N, N)'],
            ['$\\ce{-C6H5}$ (phenyl)', 'each ring C=C duplicated', '(C, C, C)'],
          ],
          caption: 'The duplicate atom is written in parentheses. A C=O counts as two oxygens on the carbon, which is why carbonyl groups rank so high.',
        },
        {
          type: 'derivation',
          title: 'Vinyl versus isopropyl',
          steps: [
            { tex: '\\ce{-CH=CH2}: (\\ce{C, C, H}) \\qquad \\ce{-CH(CH3)2}: (\\ce{C, C, H})', why: 'At the first carbon both sets are (C, C, H): a tie. One of vinyl\'s carbons is a duplicate.' },
            { tex: '\\text{vinyl branches: } \\ce{=CH2}\\ (\\ce{C, H, H}),\\ \\text{duplicate C}\\ (0, 0, 0)', why: 'The real $\\ce{CH2}$ carbon carries H, H and a duplicate of C1. The duplicate carbon carries only phantom atoms.' },
            { tex: '\\text{isopropyl branches: } \\ce{CH3}\\ (\\ce{H, H, H}),\\ \\ce{CH3}\\ (\\ce{H, H, H})', why: 'Both methyls carry three H.' },
            { tex: '(\\ce{C, H, H}) > (\\ce{H, H, H}) \\implies \\text{vinyl} > \\text{isopropyl}', why: 'Compare the highest-ranked branches first: vinyl\'s $\\ce{CH2}$ beats isopropyl\'s $\\ce{CH3}$ at the first term.' },
          ],
          result: 'Vinyl outranks isopropyl, even though isopropyl has more atoms. By the same reasoning, ethynyl outranks tert-butyl.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why duplicate atoms?',
          text: 'A carbon in C=O is bonded to oxygen through two pairs of electrons. Counting O twice makes the rule reflect that, and it keeps the ranking a pure graph computation: every atom ends up with four "neighbors" to compare, whether its bonds are single or multiple.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'An isopropyl group, $\\ce{-CH(CH3)2}$, has a higher CIP priority than a vinyl group, $\\ce{-CH=CH2}$, because it contains more carbon atoms.',
      answer: false,
      explanation: 'Priority is never about counting atoms. Both groups have the set (C, C, H) at the first carbon, so go one sphere out. Vinyl\'s real $\\ce{=CH2}$ carbon carries (C, H, H), where the C is the duplicate of C1; each isopropyl methyl carries (H, H, H). The first difference is C versus H, so **vinyl wins**.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'From priorities to R or S',
      blocks: [
        {
          type: 'figure',
          svg: FIG.rs_rule,
          alt: '(R)-2-butanol drawn with OH up (priority 1), CH2CH3 to the right (priority 2), CH3 on a wedge to the lower left (priority 3) and H on a hash pointing down (priority 4). A purple arrow curves clockwise from OH past CH2CH3 to CH3. Text: rank the four groups; point group 4 away from you; trace 1 to 2 to 3; clockwise is R (rectus), counterclockwise is S (sinister).',
          caption: 'With H (priority 4) pointing away, 1 → 2 → 3 runs clockwise: this is **(R)**-2-butanol. Think of a steering wheel with the column (group 4) pointing away from you: turning 1 → 2 → 3 to the right is R.',
        },
        {
          type: 'p',
          text: 'The lowest-priority group is not always drawn pointing away. Three situations cover everything, shown here for bromochlorofluoromethane (priorities Br > Cl > F > H):',
        },
        {
          type: 'figure',
          svg: FIG.rs_cases,
          alt: 'Three drawings of CHBrClF. Left: Br up, Cl lower right, F on a wedge at lower left, H on a hash pointing down; caption H on a hash, read it directly. Middle: the same but F on a hash and H on a wedge; caption H on a wedge, read it then reverse. Right: H up, Cl lower right, F on a wedge lower left, Br on a hash pointing down; caption H in the plane, swap H with the hashed group.',
          caption: 'Left: Br → Cl → F is clockwise with H in back: **R**. Middle: the same path looks clockwise, but H points at you, so the true answer is the reverse: **S**. Right: swap H with the hashed Br; the swapped drawing is the left one (R), and one swap inverts, so the original is **S**.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Lowest priority on a hash', text: 'Read 1 → 2 → 3 directly: clockwise R, counterclockwise S.' },
            { title: 'Lowest priority on a wedge', text: 'Read 1 → 2 → 3, then **reverse** the answer: you are looking from the wrong side, and a clockwise turn seen from behind is counterclockwise.' },
            { title: 'Lowest priority in the plane', text: 'Swap it with the group on the hash, assign the new drawing, then reverse (one swap = the enantiomer). Or rotate the molecule in your head until it points back.' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.rs_skel,
          alt: 'Skeletal (R)-2-butanol: a zigzag chain with OH on a wedge at the second carbon. Priorities marked: OH 1, the CH2 of the ethyl group 2, the methyl 3.',
          caption: 'In skeletal drawings the H on a chirality center is implicit. If one substituent is on a wedge, the hidden H points back; if one is on a hash, the hidden H points toward you.',
        },
        {
          type: 'p',
          text: '**Try it.** How many of the four drawings of 2-bromobutane below show the **(R)** enantiomer? (Priorities: Br > $\\ce{CH2CH3}$ > $\\ce{CH3}$ > H.)',
        },
        {
          type: 'figure',
          svg: FIG.rs_quiz,
          alt: 'Four drawings of 2-bromobutane. A: ethyl up, Br on a wedge at lower right, CH3 at lower left, H on a hash down. B: Br upper left, CH3 upper right, ethyl on a wedge lower left, H on a hash lower right. C: H up, CH3 lower right, ethyl on a wedge lower left, Br on a hash down. D: CH3 upper left, Br upper right, ethyl on a hash lower left, H on a wedge lower right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'How many of the drawings A–D above show **(R)**-2-bromobutane?',
      hint: 'For each drawing, find H first. On a hash: read directly. On a wedge: read, then reverse. In the plane: swap it with the hashed group, read, then reverse.',
      label: 'number of (R) drawings $=$',
      answer: '1',
      explanation: '**A**: H on a hash. Br (lower right) → ethyl (up) → methyl (lower left) runs counterclockwise: S. **B**: H on a hash. Br (upper left) → ethyl (lower left) → methyl (upper right) is counterclockwise: S. **C**: H is in the plane, Br on the hash. Swap them: Br up, H back; Br → ethyl (lower left) → methyl (lower right) is counterclockwise, S, so the original is **R**. **D**: H on a wedge. Br (upper right) → ethyl (lower left) → methyl (upper left) looks clockwise, but H points at you, so reverse: S. Only **C** is R.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student assigns the configuration of a 2-bromobutane drawing in which H is on a **wedge**. Tap the first incorrect line.',
      lines: [
        'Attached atoms: Br, C, C, H, so Br is 1 and H is 4.',
        'Ethyl (C, H, H) beats methyl (H, H, H), so ethyl is 2 and methyl is 3.',
        'In the drawing, Br → ethyl → methyl runs clockwise.',
        'Clockwise means R, so this is (R)-2-bromobutane.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are right, but line 4 ignores where H points. The rule "clockwise = R" holds only when the lowest-priority group points **away** from you. Here H is on a wedge, pointing toward you, so the apparent clockwise path is counterclockwise from the correct side. The molecule is **(S)**-2-bromobutane.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Configurations in names, and what R/S does not tell you',
      blocks: [
        {
          type: 'p',
          text: 'The descriptor goes in parentheses at the front of the name, with a hyphen: (R)-2-butanol, (S)-ibuprofen. With several chirality centers, each gets a locant: (2R,3S)-2-bromo-3-chlorobutane, (1R,2S,5R)-menthol. You will use these in the next lesson.',
        },
        {
          type: 'derivation',
          title: 'Lactic acid, $\\ce{CH3CH(OH)COOH}$: ranking the groups',
          steps: [
            { tex: '\\ce{-OH}: \\ce{O} \\implies 1', why: 'The only group attached through oxygen.' },
            { tex: '\\ce{-COOH}: (\\ce{O, O, O}) \\implies 2', why: 'Attached through C; its set contains oxygens, which beat the H of methyl at the first term.' },
            { tex: '\\ce{-CH3}: (\\ce{H, H, H}) \\implies 3,\\quad \\ce{-H} \\implies 4', why: 'Methyl is the remaining carbon group; H is always last when present.' },
          ],
          result: 'With H pointing away, the lactic acid in your muscles (L-lactic acid) traces OH → COOH → $\\ce{CH3}$ counterclockwise: it is **(S)**-lactic acid.',
        },
        {
          type: 'theorem',
          name: 'The swap rule',
          text: 'Exchanging any two groups on a chirality center converts R into S and S into R. Two exchanges restore the original. This is the fastest way to move the lowest-priority group to the back of any drawing.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'R/S is not (+)/(−)',
          text: 'R and S come from a drawing and a set of rules; (+) and (−) come from an experiment, the direction a compound rotates plane-polarized light (last lesson of this unit). There is no general connection: (R)-glyceraldehyde is (+), but (R)-lactic acid is (−). Even changing a group that is far from the center, or the solvent, can flip the sign of rotation without touching the configuration.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'D and L',
          text: 'Biochemists still label sugars and amino acids D or L, an older system based on comparison with glyceraldehyde in Fischer projections (next lesson). Almost all natural amino acids are L, which is (S) for every one except cysteine, whose $\\ce{-CH2SH}$ side chain outranks $\\ce{-COOH}$ (S beats O) and makes it (R).',
        },
        {
          type: 'p',
          text: '**Try it.** The figure shows alanine as it occurs in proteins. Assign its configuration. (The H on the chirality center is not drawn.)',
        },
        {
          type: 'figure',
          svg: FIG.rs_ala,
          alt: 'Skeletal structure of alanine: a chirality center with a COOH group to the upper left, an NH2 group on a wedge to the right, and a methyl group pointing down. The H is not drawn.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'What is the configuration of the alanine shown above?',
      options: [
        { text: '(R), because $\\ce{NH2}$ → $\\ce{COOH}$ → $\\ce{CH3}$ runs clockwise', why: 'Trace it again: from $\\ce{NH2}$ (right) to $\\ce{COOH}$ (upper left) to $\\ce{CH3}$ (down) is counterclockwise.' },
        { text: '(S), because $\\ce{NH2}$ → $\\ce{COOH}$ → $\\ce{CH3}$ runs counterclockwise with H in back', correct: true, why: 'The wedge on $\\ce{NH2}$ means the implicit H points back, so the counterclockwise path gives S. This is L-alanine.' },
        { text: '(S), because $\\ce{COOH}$ → $\\ce{NH2}$ → $\\ce{CH3}$ runs clockwise and H is in front', why: 'The answer is right but the ranking is wrong: N ($Z = 7$) beats C ($Z = 6$), so $\\ce{NH2}$ is 1, not $\\ce{COOH}$. And H is behind, not in front.' },
        { text: 'Neither: alanine is achiral', why: 'The central carbon carries four different groups: $\\ce{NH2}$, $\\ce{COOH}$, $\\ce{CH3}$ and H.' },
      ],
      explanation: 'Rank: $\\ce{NH2}$ (N, $Z = 7$) = 1; $\\ce{COOH}$ (C with O, O, O) = 2; $\\ce{CH3}$ = 3; H = 4. The $\\ce{NH2}$ is on a wedge, so the hidden H points away from you and you can read directly. Right → upper left → down is counterclockwise: **(S)-alanine**, the L-amino acid found in proteins.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Glyceraldehyde is $\\ce{HOCH2-CH(OH)-CHO}$. At its chirality center, what priority number (1, 2, 3 or 4) does the $\\ce{-CH2OH}$ group get?',
      hint: 'One group is attached through O. For the two carbon groups, remember that C=O counts as two oxygens.',
      label: 'priority of $\\ce{-CH2OH}$ $=$',
      answer: '3',
      explanation: 'The four groups are $\\ce{-OH}$, $\\ce{-CHO}$, $\\ce{-CH2OH}$ and $\\ce{-H}$. $\\ce{-OH}$ is attached through O, so it is **1**. The two carbon groups: $\\ce{-CHO}$ has the set (O, O, H) thanks to the duplicated oxygen; $\\ce{-CH2OH}$ has (O, H, H). They tie at the first term (O) and differ at the second (O versus H), so $\\ce{-CHO}$ is 2 and $\\ce{-CH2OH}$ is **3**. H is 4.',
    },
  ],
  takeaways: [
    'Rank groups by the atomic number of the attached atom; break ties by comparing the sets of next atoms in decreasing order, stopping at the first point of difference.',
    'Double and triple bonds are counted with duplicate atoms, so C=O counts as two O and vinyl outranks isopropyl.',
    'With the lowest-priority group pointing away, 1 → 2 → 3 clockwise is R and counterclockwise is S; if it points toward you, reverse the answer.',
    'Swapping any two groups inverts the configuration; use it to move the lowest-priority group to the back.',
    'Descriptors go at the front of a name, with locants when there are several: (2R,3S)-…; R/S is unrelated to the sign of optical rotation.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Section 5.5 (Sequence Rules for Specifying Configuration) states the CIP rules with worked examples like the ones here.' },
    { title: 'Cahn–Ingold–Prelog priority rules', url: 'https://en.wikipedia.org/wiki/Cahn%E2%80%93Ingold%E2%80%93Prelog_priority_rules', source: 'wikipedia', note: 'The full rule set, including the rarer rules for isotopes and stereo-dependent priorities.' },
    { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', source: 'other', note: 'Its posts on assigning R and S include many practice drawings with the lowest-priority group in awkward places.' },
    { title: 'Khan Academy: Organic chemistry', url: 'https://www.khanacademy.org/science/organic-chemistry', source: 'khan', note: 'Videos walk through R/S assignment and the swap trick.' },
  ],
};
