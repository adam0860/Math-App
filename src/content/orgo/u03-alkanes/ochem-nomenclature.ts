import type { Lesson } from '../../types';

// <figures> (generated with the molecule kit; names checked with an alkane-naming script)
const FIG = {
  n_alkyl: '<svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0,10) scale(1.6)"><line x1="56.52" y1="49.55" x2="40.62" y2="40.38" stroke="currentColor" stroke-width="1.44" /><line x1="40.62" y1="40.38" x2="40.62" y2="16.38" stroke="currentColor" stroke-width="1.44" /><line x1="40.62" y1="40.38" x2="19.84" y2="52.38" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(130,10) scale(1.6)"><line x1="66.91" y1="19.2" x2="51.02" y2="28.38" stroke="currentColor" stroke-width="1.44" /><line x1="51.02" y1="28.38" x2="51.02" y2="52.38" stroke="currentColor" stroke-width="1.44" /><line x1="51.02" y1="28.38" x2="30.23" y2="16.38" stroke="currentColor" stroke-width="1.44" /><line x1="30.23" y1="16.38" x2="9.45" y2="28.38" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(260,10) scale(1.6)"><line x1="66.91" y1="43.2" x2="51.02" y2="52.38" stroke="currentColor" stroke-width="1.44" /><line x1="51.02" y1="52.38" x2="30.23" y2="40.38" stroke="currentColor" stroke-width="1.44" /><line x1="30.23" y1="40.38" x2="30.23" y2="16.38" stroke="currentColor" stroke-width="1.44" /><line x1="30.23" y1="40.38" x2="9.45" y2="52.38" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(390,10) scale(1.6)"><line x1="56.52" y1="43.55" x2="40.62" y2="34.38" stroke="currentColor" stroke-width="1.44" /><line x1="40.62" y1="34.38" x2="40.62" y2="10.38" stroke="currentColor" stroke-width="1.44" /><line x1="40.62" y1="34.38" x2="40.62" y2="58.38" stroke="currentColor" stroke-width="1.44" /><line x1="40.62" y1="34.38" x2="19.84" y2="46.38" stroke="currentColor" stroke-width="1.44" /></g><text x="65" y="140" text-anchor="middle" font-size="14">isopropyl</text><text x="65" y="160" text-anchor="middle" font-size="12" class="t-gray">1-methylethyl</text><text x="195" y="140" text-anchor="middle" font-size="14">sec-butyl</text><text x="195" y="160" text-anchor="middle" font-size="12" class="t-gray">1-methylpropyl</text><text x="325" y="140" text-anchor="middle" font-size="14">isobutyl</text><text x="325" y="160" text-anchor="middle" font-size="12" class="t-gray">2-methylpropyl</text><text x="455" y="140" text-anchor="middle" font-size="14">tert-butyl</text><text x="455" y="160" text-anchor="middle" font-size="12" class="t-gray">1,1-dimethylethyl</text><line x1="65" y1="74.6" x2="98.3" y2="93.8" stroke="currentColor" stroke-width="2.30"/><path d="M103.8,84.3 Q105.9,88.7 101.0,89.0 Q96.2,89.4 98.3,93.8 Q100.4,98.2 95.6,98.6 Q90.7,98.9 92.8,103.3" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="211.6" y1="55.4" x2="244.9" y2="36.2" stroke="currentColor" stroke-width="2.30"/><path d="M239.4,26.7 Q244.2,27.1 242.2,31.4 Q240.1,35.8 244.9,36.2 Q249.7,36.6 247.6,41.0 Q245.6,45.3 250.4,45.7" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="341.6" y1="93.8" x2="374.9" y2="74.6" stroke="currentColor" stroke-width="2.30"/><path d="M369.4,65.1 Q374.2,65.5 372.2,69.8 Q370.1,74.2 374.9,74.6 Q379.7,75.0 377.6,79.4 Q375.6,83.7 380.4,84.1" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="455" y1="65" x2="488.3" y2="84.2" stroke="currentColor" stroke-width="2.30"/><path d="M493.8,74.7 Q495.9,79.1 491.0,79.4 Q486.2,79.8 488.3,84.2 Q490.4,88.6 485.6,89.0 Q480.7,89.3 482.8,93.7" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
  n_butanes: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg"><g transform="translate(40,10) scale(1.7)"><line x1="81.18" y1="23.41" x2="60.39" y2="35.41" stroke="currentColor" stroke-width="1.44" /><line x1="60.39" y1="35.41" x2="39.61" y2="23.41" stroke="currentColor" stroke-width="1.44" /><line x1="39.61" y1="23.41" x2="18.82" y2="35.41" stroke="currentColor" stroke-width="1.44" /></g><text x="125" y="124" text-anchor="middle" font-size="13">butane, CH₃CH₂CH₂CH₃</text><g transform="translate(300,10) scale(1.7)"><line x1="70.78" y1="47.41" x2="50" y2="35.41" stroke="currentColor" stroke-width="1.44" /><line x1="50" y1="35.41" x2="50" y2="11.41" stroke="currentColor" stroke-width="1.44" /><line x1="50" y1="35.41" x2="29.22" y2="47.41" stroke="currentColor" stroke-width="1.44" /></g><text x="385" y="124" text-anchor="middle" font-size="13">2-methylpropane (isobutane), (CH₃)₃CH</text><text x="260" y="142" text-anchor="middle" font-size="13" class="t-gray">both C₄H₁₀: same formula, different connectivity</text></svg>',
  n_c6h14: '<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0,0) scale(1.5)"><line x1="109.63" y1="30.67" x2="88.84" y2="42.67" stroke="currentColor" stroke-width="1.44" /><line x1="88.84" y1="42.67" x2="68.06" y2="30.67" stroke="currentColor" stroke-width="1.44" /><line x1="68.06" y1="30.67" x2="47.27" y2="42.67" stroke="currentColor" stroke-width="1.44" /><line x1="47.27" y1="42.67" x2="26.49" y2="30.67" stroke="currentColor" stroke-width="1.44" /><line x1="26.49" y1="30.67" x2="5.71" y2="42.67" stroke="currentColor" stroke-width="1.44" /></g><text x="86.5" y="124" text-anchor="middle" font-size="13">hexane</text><g transform="translate(173,0) scale(1.5)"><line x1="99.24" y1="54.67" x2="78.45" y2="42.67" stroke="currentColor" stroke-width="1.44" /><line x1="78.45" y1="42.67" x2="78.45" y2="18.67" stroke="currentColor" stroke-width="1.44" /><line x1="78.45" y1="42.67" x2="57.67" y2="54.67" stroke="currentColor" stroke-width="1.44" /><line x1="57.67" y1="54.67" x2="36.88" y2="42.67" stroke="currentColor" stroke-width="1.44" /><line x1="36.88" y1="42.67" x2="16.1" y2="54.67" stroke="currentColor" stroke-width="1.44" /></g><text x="259.5" y="124" text-anchor="middle" font-size="13">2-methylpentane</text><g transform="translate(346,0) scale(1.5)"><line x1="99.24" y1="30.67" x2="78.45" y2="18.67" stroke="currentColor" stroke-width="1.44" /><line x1="78.45" y1="18.67" x2="57.67" y2="30.67" stroke="currentColor" stroke-width="1.44" /><line x1="57.67" y1="30.67" x2="57.67" y2="54.67" stroke="currentColor" stroke-width="1.44" /><line x1="57.67" y1="30.67" x2="36.88" y2="18.67" stroke="currentColor" stroke-width="1.44" /><line x1="36.88" y1="18.67" x2="16.1" y2="30.67" stroke="currentColor" stroke-width="1.44" /></g><text x="432.5" y="124" text-anchor="middle" font-size="13">3-methylpentane</text><g transform="translate(80,145) scale(1.5)"><line x1="80.06" y1="15.88" x2="68.06" y2="36.67" stroke="currentColor" stroke-width="1.44" /><line x1="68.06" y1="36.67" x2="88.84" y2="48.67" stroke="currentColor" stroke-width="1.44" /><line x1="68.06" y1="36.67" x2="56.06" y2="57.45" stroke="currentColor" stroke-width="1.44" /><line x1="68.06" y1="36.67" x2="47.27" y2="24.67" stroke="currentColor" stroke-width="1.44" /><line x1="47.27" y1="24.67" x2="26.49" y2="36.67" stroke="currentColor" stroke-width="1.44" /></g><text x="166.5" y="269" text-anchor="middle" font-size="13">2,2-dimethylbutane</text><g transform="translate(266,145) scale(1.5)"><line x1="88.84" y1="30.67" x2="68.06" y2="42.67" stroke="currentColor" stroke-width="1.44" /><line x1="68.06" y1="42.67" x2="68.06" y2="66.67" stroke="currentColor" stroke-width="1.44" /><line x1="68.06" y1="42.67" x2="47.27" y2="30.67" stroke="currentColor" stroke-width="1.44" /><line x1="47.27" y1="30.67" x2="47.27" y2="6.67" stroke="currentColor" stroke-width="1.44" /><line x1="47.27" y1="30.67" x2="26.49" y2="42.67" stroke="currentColor" stroke-width="1.44" /></g><text x="352.5" y="269" text-anchor="middle" font-size="13">2,3-dimethylbutane</text><text x="86" y="140" text-anchor="middle" font-size="11" class="t-gray">chain of 6</text><text x="346" y="140" text-anchor="middle" font-size="11" class="t-gray">chain of 5 + one methyl</text><text x="260" y="284" text-anchor="middle" font-size="11" class="t-gray">chain of 4 + two methyls</text></svg>',
  n_complex: '<svg viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg"><polyline points="260,85 224.7,105.4 189.3,85" fill="none" stroke="currentColor" class="s-orange" stroke-opacity="0.28" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(80,0) scale(1.7)"><line x1="189.02" y1="26" x2="168.24" y2="14" stroke="currentColor" stroke-width="1.44" /><line x1="168.24" y1="14" x2="147.45" y2="26" stroke="currentColor" stroke-width="1.44" /><line x1="147.45" y1="26" x2="126.67" y2="14" stroke="currentColor" stroke-width="1.44" /><line x1="126.67" y1="14" x2="105.88" y2="26" stroke="currentColor" stroke-width="1.44" /><line x1="105.88" y1="26" x2="105.88" y2="50" stroke="currentColor" stroke-width="1.44" /><line x1="105.88" y1="50" x2="126.67" y2="62" stroke="currentColor" stroke-width="1.44" /><line x1="105.88" y1="50" x2="85.1" y2="62" stroke="currentColor" stroke-width="1.44" /><line x1="85.1" y1="62" x2="64.31" y2="50" stroke="currentColor" stroke-width="1.44" /><line x1="85.1" y1="62" x2="85.1" y2="86" stroke="currentColor" stroke-width="1.44" /><line x1="105.88" y1="26" x2="85.1" y2="14" stroke="currentColor" stroke-width="1.44" /><line x1="85.1" y1="14" x2="64.31" y2="26" stroke="currentColor" stroke-width="1.44" /><line x1="64.31" y1="26" x2="43.53" y2="14" stroke="currentColor" stroke-width="1.44" /><line x1="43.53" y1="14" x2="22.74" y2="26" stroke="currentColor" stroke-width="1.44" /></g><text x="260" y="182" text-anchor="middle" font-size="12.5">5-(1,2-dimethylpropyl)nonane: the substituent is numbered from its point of attachment</text><text x="260.0" y="98.0" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-orange">1</text><text x="224.7" y="92.4" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-orange">2</text><text x="178.0" y="91.5" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-orange">3</text></svg>',
  n_cyclo: '<svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0,0) scale(1.6)"><line x1="96.26" y1="19.75" x2="75.47" y2="7.75" stroke="currentColor" stroke-width="1.44" /><line x1="75.47" y1="7.75" x2="54.69" y2="19.75" stroke="currentColor" stroke-width="1.44" /><line x1="54.69" y1="19.75" x2="33.9" y2="7.75" stroke="currentColor" stroke-width="1.44" /><line x1="33.9" y1="7.75" x2="13.12" y2="19.75" stroke="currentColor" stroke-width="1.44" /><line x1="13.12" y1="19.75" x2="13.12" y2="43.75" stroke="currentColor" stroke-width="1.44" /><line x1="13.12" y1="43.75" x2="33.9" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="33.9" y1="55.75" x2="33.9" y2="79.75" stroke="currentColor" stroke-width="1.44" /><line x1="33.9" y1="55.75" x2="54.69" y2="43.75" stroke="currentColor" stroke-width="1.44" /><line x1="54.69" y1="19.75" x2="54.69" y2="43.75" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(175,0) scale(1.6)"><line x1="90.96" y1="58.21" x2="71.55" y2="44.11" stroke="currentColor" stroke-width="1.44" /><line x1="71.55" y1="44.11" x2="93.47" y2="34.34" stroke="currentColor" stroke-width="1.44" /><line x1="71.55" y1="44.11" x2="59.55" y2="23.32" stroke="currentColor" stroke-width="1.44" /><line x1="59.55" y1="23.32" x2="36.07" y2="28.31" stroke="currentColor" stroke-width="1.44" /><line x1="36.07" y1="28.31" x2="33.56" y2="52.18" stroke="currentColor" stroke-width="1.44" /><line x1="33.56" y1="52.18" x2="12.78" y2="64.18" stroke="currentColor" stroke-width="1.44" /><line x1="33.56" y1="52.18" x2="55.49" y2="61.94" stroke="currentColor" stroke-width="1.44" /><line x1="71.55" y1="44.11" x2="55.49" y2="61.94" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(345,0) scale(1.6)"><line x1="63.47" y1="9.36" x2="75.47" y2="30.14" stroke="currentColor" stroke-width="1.44" /><line x1="75.47" y1="30.14" x2="96.26" y2="18.14" stroke="currentColor" stroke-width="1.44" /><line x1="75.47" y1="30.14" x2="87.47" y2="50.93" stroke="currentColor" stroke-width="1.44" /><line x1="75.47" y1="30.14" x2="54.69" y2="42.14" stroke="currentColor" stroke-width="1.44" /><line x1="54.69" y1="42.14" x2="33.9" y2="30.14" stroke="currentColor" stroke-width="1.44" /><line x1="33.9" y1="30.14" x2="13.12" y2="42.14" stroke="currentColor" stroke-width="1.44" /><line x1="13.12" y1="42.14" x2="13.12" y2="66.14" stroke="currentColor" stroke-width="1.44" /><line x1="13.12" y1="66.14" x2="33.9" y2="78.14" stroke="currentColor" stroke-width="1.44" /><line x1="33.9" y1="78.14" x2="54.69" y2="66.14" stroke="currentColor" stroke-width="1.44" /><line x1="54.69" y1="42.14" x2="54.69" y2="66.14" stroke="currentColor" stroke-width="1.44" /></g><text x="88" y="160" text-anchor="middle" font-size="12.5">1-ethyl-3-methylcyclohexane</text><text x="260" y="160" text-anchor="middle" font-size="12.5">1,1,3-trimethylcyclopentane</text><text x="433" y="160" text-anchor="middle" font-size="12.5">tert-butylcyclohexane</text><text x="87.5" y="18.6" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">1</text><text x="98.8" y="76.5" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">2</text><text x="54.2" y="76.2" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">3</text></svg>',
  n_number: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(110,0) scale(1.7)"><line x1="150.59" y1="68.12" x2="129.8" y2="56.12" stroke="currentColor" stroke-width="1.44" /><line x1="129.8" y1="56.12" x2="129.8" y2="32.12" stroke="currentColor" stroke-width="1.44" /><line x1="129.8" y1="56.12" x2="109.02" y2="68.12" stroke="currentColor" stroke-width="1.44" /><line x1="109.02" y1="68.12" x2="88.24" y2="56.12" stroke="currentColor" stroke-width="1.44" /><line x1="88.24" y1="56.12" x2="88.24" y2="32.12" stroke="currentColor" stroke-width="1.44" /><line x1="88.24" y1="32.12" x2="67.45" y2="20.12" stroke="currentColor" stroke-width="1.44" /><line x1="88.24" y1="56.12" x2="67.45" y2="68.12" stroke="currentColor" stroke-width="1.44" /><line x1="67.45" y1="68.12" x2="46.67" y2="56.12" stroke="currentColor" stroke-width="1.44" /><line x1="46.67" y1="56.12" x2="25.88" y2="68.12" stroke="currentColor" stroke-width="1.44" /></g><text x="260" y="160" text-anchor="middle" font-size="13">numbered from the end nearer a branch: substituents at 2 and 4 (not 4 and 6)</text><text x="377.3" y="122.3" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">1</text><text x="330.7" y="108.4" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">2</text><text x="295.3" y="128.8" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">3</text><text x="260.0" y="108.4" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">4</text><text x="224.7" y="128.8" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">5</text><text x="189.3" y="82.4" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">6</text><text x="142.7" y="122.3" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">7</text></svg>',
  n_parent: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><polyline points="224.1,87.5 191.9,106.1 159.7,87.5 127.5,106.1 95.3,87.5 63.1,106.1 44.5,73.9" fill="none" stroke="currentColor" class="s-red" stroke-opacity="0.28" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><polyline points="456.9,31.7 424.7,50.3 424.7,87.5 392.5,106.1 360.3,87.5 328.1,106.1 309.5,73.9" fill="none" stroke="currentColor" class="s-blue" stroke-opacity="0.28" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(0,10) scale(1.55)"><line x1="144.61" y1="49.99" x2="123.83" y2="61.99" stroke="currentColor" stroke-width="1.44" /><line x1="123.83" y1="61.99" x2="103.04" y2="49.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="49.99" x2="103.04" y2="25.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="25.99" x2="123.83" y2="13.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="25.99" x2="82.26" y2="13.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="49.99" x2="82.26" y2="61.99" stroke="currentColor" stroke-width="1.44" /><line x1="82.26" y1="61.99" x2="61.47" y2="49.99" stroke="currentColor" stroke-width="1.44" /><line x1="61.47" y1="49.99" x2="40.69" y2="61.99" stroke="currentColor" stroke-width="1.44" /><line x1="40.69" y1="61.99" x2="52.69" y2="82.78" stroke="currentColor" stroke-width="1.44" /><line x1="40.69" y1="61.99" x2="19.9" y2="73.99" stroke="currentColor" stroke-width="1.44" /><line x1="40.69" y1="61.99" x2="28.69" y2="41.21" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(265,10) scale(1.55)"><line x1="144.61" y1="49.99" x2="123.83" y2="61.99" stroke="currentColor" stroke-width="1.44" /><line x1="123.83" y1="61.99" x2="103.04" y2="49.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="49.99" x2="103.04" y2="25.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="25.99" x2="123.83" y2="13.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="25.99" x2="82.26" y2="13.99" stroke="currentColor" stroke-width="1.44" /><line x1="103.04" y1="49.99" x2="82.26" y2="61.99" stroke="currentColor" stroke-width="1.44" /><line x1="82.26" y1="61.99" x2="61.47" y2="49.99" stroke="currentColor" stroke-width="1.44" /><line x1="61.47" y1="49.99" x2="40.69" y2="61.99" stroke="currentColor" stroke-width="1.44" /><line x1="40.69" y1="61.99" x2="52.69" y2="82.78" stroke="currentColor" stroke-width="1.44" /><line x1="40.69" y1="61.99" x2="19.9" y2="73.99" stroke="currentColor" stroke-width="1.44" /><line x1="40.69" y1="61.99" x2="28.69" y2="41.21" stroke="currentColor" stroke-width="1.44" /></g><text x="128" y="180" text-anchor="middle" font-size="13" class="t-red">7 carbons, 3 substituents</text><text x="393" y="180" text-anchor="middle" font-size="13" class="t-blue">7 carbons, 4 substituents ✓</text><text x="303.0" y="62.6" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">1</text><text x="324.7" y="118.7" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">2</text><text x="360.3" y="74.5" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">3</text><text x="392.5" y="119.1" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">4</text><text x="424.7" y="100.5" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">5</text><text x="424.7" y="37.3" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">6</text><text x="468.2" y="25.2" text-anchor="middle" dominant-baseline="central" font-size="12" class="t-blue">7</text></svg>',
  n_try_e: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(110,0) scale(1.7)"><line x1="150.59" y1="47.06" x2="129.8" y2="35.06" stroke="currentColor" stroke-width="1.44" /><line x1="129.8" y1="35.06" x2="109.02" y2="47.06" stroke="currentColor" stroke-width="1.44" /><line x1="109.02" y1="47.06" x2="88.24" y2="35.06" stroke="currentColor" stroke-width="1.44" /><line x1="88.24" y1="35.06" x2="88.24" y2="11.06" stroke="currentColor" stroke-width="1.44" /><line x1="88.24" y1="35.06" x2="67.45" y2="47.06" stroke="currentColor" stroke-width="1.44" /><line x1="67.45" y1="47.06" x2="67.45" y2="71.06" stroke="currentColor" stroke-width="1.44" /><line x1="67.45" y1="71.06" x2="46.67" y2="83.06" stroke="currentColor" stroke-width="1.44" /><line x1="67.45" y1="71.06" x2="88.24" y2="83.06" stroke="currentColor" stroke-width="1.44" /><line x1="67.45" y1="47.06" x2="46.67" y2="35.06" stroke="currentColor" stroke-width="1.44" /><line x1="46.67" y1="35.06" x2="25.88" y2="47.06" stroke="currentColor" stroke-width="1.44" /></g></svg>',
  n_try_tbu: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(20,0) scale(1.6)"><line x1="120.71" y1="86" x2="99.93" y2="74" stroke="currentColor" stroke-width="1.44" /><line x1="99.93" y1="74" x2="99.93" y2="50" stroke="currentColor" stroke-width="1.44" /><line x1="99.93" y1="50" x2="79.14" y2="38" stroke="currentColor" stroke-width="1.44" /><line x1="79.14" y1="38" x2="58.36" y2="50" stroke="currentColor" stroke-width="1.44" /><line x1="58.36" y1="50" x2="37.57" y2="38" stroke="currentColor" stroke-width="1.44" /><line x1="37.57" y1="38" x2="37.57" y2="14" stroke="currentColor" stroke-width="1.44" /><line x1="37.57" y1="38" x2="16.79" y2="50" stroke="currentColor" stroke-width="1.44" /><line x1="58.36" y1="50" x2="58.36" y2="74" stroke="currentColor" stroke-width="1.44" /><line x1="58.36" y1="74" x2="79.14" y2="86" stroke="currentColor" stroke-width="1.44" /><line x1="99.93" y1="74" x2="79.14" y2="86" stroke="currentColor" stroke-width="1.44" /></g><text x="130" y="174" text-anchor="middle" font-size="13">molecule A</text><g transform="translate(260,0) scale(1.6)"><line x1="129.67" y1="61.9" x2="109.05" y2="50" stroke="currentColor" stroke-width="1.43" /><line x1="109.05" y1="50" x2="88.43" y2="61.9" stroke="currentColor" stroke-width="1.43" /><line x1="88.43" y1="61.9" x2="67.82" y2="50" stroke="currentColor" stroke-width="1.43" /><line x1="67.82" y1="50" x2="67.82" y2="26.19" stroke="currentColor" stroke-width="1.43" /><line x1="67.82" y1="26.19" x2="44.01" y2="26.19" stroke="currentColor" stroke-width="1.43" /><line x1="67.82" y1="26.19" x2="67.82" y2="2.38" stroke="currentColor" stroke-width="1.43" /><line x1="67.82" y1="26.19" x2="91.62" y2="26.19" stroke="currentColor" stroke-width="1.43" /><line x1="67.82" y1="50" x2="47.2" y2="61.9" stroke="currentColor" stroke-width="1.43" /><line x1="47.2" y1="61.9" x2="47.2" y2="85.71" stroke="currentColor" stroke-width="1.43" /><line x1="47.2" y1="85.71" x2="67.82" y2="97.62" stroke="currentColor" stroke-width="1.43" /><line x1="47.2" y1="85.71" x2="26.58" y2="97.62" stroke="currentColor" stroke-width="1.43" /></g><text x="385" y="174" text-anchor="middle" font-size="13">molecule B</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-nomenclature',
  title: 'Naming Alkanes and Cycloalkanes',
  summary: 'The IUPAC system as an algorithm: find the parent chain, number it, name and alphabetize the substituents, handle branched groups and rings, draw structures from names, and count the constitutional isomers of an alkane.',
  minutes: 19,
  objectives: [
    'Name an alkane by choosing the parent chain (longest, then most substituted), numbering it by the first-point-of-difference rule and alphabetizing the substituents',
    'Recognize and name branched substituents: isopropyl, sec-butyl, isobutyl and tert-butyl, and complex substituents such as (1,2-dimethylpropyl)',
    'Name substituted cycloalkanes and draw the structure that belongs to any alkane or cycloalkane name',
    'Define constitutional isomers and enumerate the isomers of a small alkane systematically',
    'State the general naming algorithm that every later functional group reuses',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why chemists need an algorithm for names',
      blocks: [
        {
          type: 'p',
          text: 'More than a hundred million organic compounds are registered, and each needs a name that one chemist can write and another can turn back into exactly one structure. The IUPAC system does that. It is less a list of names than an **algorithm**: a deterministic procedure that maps a molecular graph to a string and back.',
        },
        {
          type: 'p',
          text: 'You start with the simplest family. [[ochem-alkane|Alkanes]] are [[chem-hydrocarbon|hydrocarbons]] with only C–C and C–H single bonds. Every carbon is $sp^3$ and tetrahedral, so an open-chain alkane with $n$ carbons always has the formula $\\ce{C_{n}H_{2n+2}}$: each carbon brings two H, plus one extra H capping each end of the chain.',
        },
        {
          type: 'table',
          headers: ['$n$', 'Name', 'Formula', 'bp (°C)', '$n$', 'Name', 'Formula', 'bp (°C)'],
          rows: [
            ['1', 'methane', '$\\ce{CH4}$', '−162', '6', 'hexane', '$\\ce{C6H14}$', '69'],
            ['2', 'ethane', '$\\ce{C2H6}$', '−89', '7', 'heptane', '$\\ce{C7H16}$', '98'],
            ['3', 'propane', '$\\ce{C3H8}$', '−42', '8', 'octane', '$\\ce{C8H18}$', '126'],
            ['4', 'butane', '$\\ce{C4H10}$', '−1', '9', 'nonane', '$\\ce{C9H20}$', '151'],
            ['5', 'pentane', '$\\ce{C5H12}$', '36', '10', 'decane', '$\\ce{C10H22}$', '174'],
          ],
          caption: 'The first ten straight-chain alkanes. Meth-, eth-, prop- and but- are historical; from five on the prefixes are Greek numbers. Boiling points climb with chain length because London dispersion forces grow with surface area.',
        },
        {
          type: 'p',
          text: 'From four carbons on, the same formula fits more than one structure. Butane and its branched partner are different compounds (boiling points −1 °C and −12 °C), so "$\\ce{C4H10}$" alone is not a name.',
        },
        {
          type: 'figure',
          svg: FIG.n_butanes,
          alt: 'Two skeletal structures. Left: butane, a zigzag of four carbons. Right: 2-methylpropane, a central carbon bonded to three methyl groups.',
          caption: 'Butane and 2-methylpropane are [[ochem-constitutional-isomer|constitutional isomers]]: same molecular formula, different connectivity. The name must encode the connectivity.',
        },
        {
          type: 'definition',
          term: 'Constitutional isomers',
          text: 'Compounds with the same molecular formula whose atoms are connected differently. They are genuinely different compounds with different physical properties. (In the next unit you will meet stereoisomers, which share connectivity and differ only in 3D arrangement.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Names are a serialization format',
          text: 'Think of an IUPAC name the way you think of a file format: a canonical string for a graph whose vertices are atoms and whose edges are bonds. SMILES (`CC(C)C` for 2-methylpropane) is the machine-oriented format; IUPAC names are the human one. Both need a **canonicalization** rule so that one molecule gets one string, and most of today\'s rules exist to break ties.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which molecular formula **cannot** belong to an open-chain (acyclic) alkane?',
      options: [
        { text: '$\\ce{C7H16}$', why: '$2(7) + 2 = 16$: this is heptane or one of its isomers.' },
        { text: '$\\ce{C9H20}$', why: '$2(9) + 2 = 20$: nonane and its isomers fit.' },
        { text: '$\\ce{C6H12}$', correct: true, why: 'An acyclic alkane with 6 carbons needs $2(6) + 2 = 14$ hydrogens. $\\ce{C6H12}$ is two H short, so it must contain a ring or a double bond (cyclohexane is one example).' },
        { text: '$\\ce{C12H26}$', why: '$2(12) + 2 = 26$: dodecane fits the pattern.' },
      ],
      explanation: 'Every acyclic alkane is $\\ce{C_{n}H_{2n+2}}$, whatever its branching: adding a branch moves a carbon but never changes the H count. Each ring (or each π bond) removes two hydrogens, which is why cycloalkanes are $\\ce{C_{n}H_{2n}}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Step 1: the parent chain',
      blocks: [
        {
          type: 'p',
          text: 'A branched alkane is named as a **parent chain** (the backbone, which supplies the base name) carrying **substituents** (the branches). A one-carbon branch is a **methyl** group ($\\ce{-CH3}$), a two-carbon branch is **ethyl**, three is **propyl**: an [[ochem-alkyl-group|alkyl group]] is an alkane minus one H, named by changing *-ane* to *-yl*.',
        },
        {
          type: 'theorem',
          name: 'Choosing the parent chain',
          text: '(1) The parent is the **longest continuous chain** of carbons, however it bends on paper. (2) If two chains tie for longest, choose the one with **more substituents**.',
        },
        {
          type: 'p',
          text: 'The trap is the drawing. A bond-line structure is laid out for clarity, not to show the longest chain horizontally. Trace chains through every branch point, counting carbons, before you commit.',
        },
        {
          type: 'figure',
          svg: FIG.n_parent,
          alt: 'The same molecule drawn twice. Left: a seven-carbon chain highlighted in red runs from one methyl of a tert-butyl-like end through the backbone to an ethyl end, leaving an isopropyl branch. Right: a different seven-carbon chain highlighted in blue runs from the same end through the backbone and up into the isopropyl group, numbered 1 to 7, leaving an ethyl branch and two methyls on carbon 2 plus a methyl on carbon 6.',
          caption: 'Two seven-carbon chains tie. The red one leaves 3 branches (an isopropyl and two methyls); the blue one, which turns up into what looked like an isopropyl group, leaves 4 (ethyl, methyl, methyl, methyl). More substituents wins, so the blue chain is the parent.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "more substituents" breaks the tie',
          text: 'Any rule would do as long as everyone uses the same one, but this one has a practical payoff: more, smaller substituents have simple names (methyl, ethyl), while fewer, larger ones tend to be branched and need complicated names. Choosing the most-substituted chain keeps names short and regular.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A branch near the end of a chain is often part of the chain',
          text: 'If a branch sits on the second carbon from an end, check whether the chain can swing into it. A name like "2-ethylpentane" or "1-methylbutane" is always wrong: a branch on C1, or an ethyl on C2, means there is a longer chain you missed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: '"2-Ethylpentane" is a correct IUPAC name.',
      answer: false,
      explanation: 'Draw it: a five-carbon chain with $\\ce{CH2CH3}$ on C2. Now start counting at the end of the ethyl group: $\\ce{CH3CH2}$–C2–C3–C4–C5 is a **six**-carbon chain, with C1 of the old chain left over as a methyl branch on the new C3. The correct name is **3-methylhexane**. An ethyl on C2 (or any branch on C1) always signals a missed longer chain.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Steps 2 and 3: numbering and assembling the name',
      blocks: [
        {
          type: 'theorem',
          name: 'Numbering the parent chain',
          text: '(1) Number from the end that gives the substituents the **lowest locants** (position numbers), compared by **first point of difference**: write both locant sets in increasing order and compare term by term; the first set with a smaller number wins. (2) If the sets are identical, the substituent cited first alphabetically gets the lower number.',
        },
        {
          type: 'figure',
          svg: FIG.n_number,
          alt: 'A seven-carbon zigzag chain numbered 1 to 7 from the right, with a methyl branch on carbon 2 and an ethyl branch on carbon 4.',
          caption: 'Numbering from the right gives $\\{2, 4\\}$; from the left, $\\{4, 6\\}$. First point of difference: 2 beats 4. Name: **4-ethyl-2-methylheptane**.',
        },
        {
          type: 'p',
          text: 'To assemble the name, list the substituents **alphabetically** (ethyl before methyl), each preceded by its locant. Identical substituents are grouped with a multiplying prefix, *di-*, *tri-*, *tetra-*, and every locant is repeated: 2,2-dimethyl, never 2-dimethyl. The multiplying prefixes are **ignored** when alphabetizing, so ethyl still comes before dimethyl. Punctuation: commas between numbers, hyphens between numbers and words, and the last substituent runs straight into the parent name.',
        },
        {
          type: 'derivation',
          title: 'Naming the molecule with the blue parent chain (previous card)',
          steps: [
            { tex: '\\text{parent: 7 carbons} \\implies \\text{heptane}', why: 'Two seven-carbon chains tie; the one with four substituents wins (step 1).' },
            { tex: '\\text{substituents: } \\ce{-CH3},\\ \\ce{-CH3},\\ \\ce{-CH3},\\ \\ce{-CH2CH3}', why: 'Everything not in the parent chain is a branch: two methyls on one carbon, one methyl near the other end, and an ethyl.' },
            { tex: '\\text{from the } \\ce{C(CH3)2} \\text{ end: } \\{2, 2, 5, 6\\}', why: 'Number from the end nearer the carbon with two methyls: methyls on C2 and C2, ethyl on C5, methyl on C6.' },
            { tex: '\\text{from the other end: } \\{2, 3, 6, 6\\}', why: 'Now the lone methyl is on C2, the ethyl on C3 and the two methyls on C6.' },
            { tex: '\\{2, 2, 5, 6\\} \\text{ vs } \\{2, 3, 6, 6\\}:\\ 2 = 2,\\ \\text{then } 2 < 3', why: 'Compare term by term; the first difference decides. The sums (15 and 17) are irrelevant.' },
            { tex: '\\text{ethyl (e)} < \\text{methyl (m)} \\implies \\text{5-ethyl-2,2,6-trimethyl}', why: 'Alphabetize by substituent name, ignoring the multiplier tri-. Three methyls need three locants.' },
          ],
          result: '**5-ethyl-2,2,6-trimethylheptane**.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'First point of difference, not the smallest sum',
          text: 'Students often add up the locants. Compare $\\{2, 7, 8\\}$ with $\\{3, 4, 9\\}$: the sums are 17 and 16, but the rule compares the first terms, 2 versus 3, and $\\{2, 7, 8\\}$ wins. The rule is lexicographic order, exactly how `std::lexicographical_compare` or Python\'s tuple comparison orders sequences.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student names $\\ce{(CH3)2CHCH2CH2CH2CH2CH(CH3)CH(CH3)CH2CH3}$. Tap the first line that goes wrong.',
      lines: [
        'The longest chain has 10 carbons, so the parent is decane.',
        'There are three methyl substituents and nothing else.',
        'Numbering from the left end puts the methyls at 2, 7, 8.',
        'Numbering from the right end puts the methyls at 3, 4, 9.',
        'The right-end set wins because $3 + 4 + 9 = 16$ is smaller than $2 + 7 + 8 = 17$.',
        'Name: 3,4,9-trimethyldecane.',
      ],
      errorLines: [5],
      explanation: 'Locant sets are compared by **first point of difference**, not by sum. Compare $\\{2, 7, 8\\}$ with $\\{3, 4, 9\\}$ term by term: the first terms already differ, and $2 < 3$. The correct name is **2,7,8-trimethyldecane**. Lines 1–4 are right: the chain from the $\\ce{(CH3)2CH}$ end to the final $\\ce{CH2CH3}$ has 10 carbons, and the three methyls sit at 2, 7, 8 or 3, 4, 9 depending on direction.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Branched substituents',
      blocks: [
        {
          type: 'p',
          text: 'When a substituent is itself branched, you need a name for its shape. Four branched alkyl groups are so common that their traditional names are accepted by IUPAC and used everywhere. The wavy line marks the bond to the parent chain.',
        },
        {
          type: 'figure',
          svg: FIG.n_alkyl,
          alt: 'Four alkyl groups, each with a wavy line at the attachment bond. Isopropyl: attached through the middle carbon of three. Sec-butyl: attached through the second carbon of a four-carbon chain. Isobutyl: attached through a CH2 next to a CH bearing two methyls. Tert-butyl: attached through a central carbon bearing three methyls.',
          caption: '*Iso* means the group ends in $\\ce{(CH3)2CH-}$; *sec* (secondary) means the attachment carbon has two other carbons on it; *tert* (tertiary) means it has three. Systematic names are in gray.',
        },
        {
          type: 'p',
          text: 'For anything else, name the substituent **systematically**: its own longest chain is numbered **starting from the attachment carbon** (C1), its branches get locants, and the whole substituent name goes in parentheses.',
        },
        {
          type: 'figure',
          svg: FIG.n_complex,
          alt: 'A nonane chain with a branch on carbon 5. The branch is a three-carbon chain, highlighted orange and numbered 1, 2, 3 from the attachment point, with a methyl on its carbon 1 and a methyl on its carbon 2.',
          caption: 'The branch is a propyl chain (orange, numbered from the attachment point) carrying methyls at its C1 and C2: a (1,2-dimethylpropyl) group.',
        },
        {
          type: 'table',
          headers: ['Alphabetizing rule', 'Example'],
          rows: [
            ['Ignore *di-, tri-, tetra-* and the italic prefixes *sec-* and *tert-*', '*tert*-butyl goes under **b**, before ethyl'],
            ['*iso* is part of the name and counts', 'isopropyl goes under **i**, after ethyl'],
            ['A complex substituent is alphabetized by the first letter of its complete name, including *di*', '(1,2-dimethylpropyl) goes under **d**'],
          ],
        },
        {
          type: 'p',
          text: 'Example: a heptane with a tert-butyl on C4 and a methyl on C2 is **4-*tert*-butyl-2-methylheptane** (b before m). Its fully systematic name, 4-(1,1-dimethylethyl)-2-methylheptane, happens to keep the same order (d before m).',
        },
        {
          type: 'p',
          text: '**Try it.** Name molecule B below. (Molecule A, a cycloalkane, is worked out after the next question.)',
        },
        {
          type: 'figure',
          svg: FIG.n_try_tbu,
          alt: 'Molecule A: a cyclohexane ring with a methyl on one carbon and an isopropyl group on the carbon directly across the ring. Molecule B: a chain in which a central carbon bears a tert-butyl group, with a three-carbon arm on one side and, on the other side, a CH2 leading to a CH that carries two methyls.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'What is the IUPAC name of **molecule B** in the figure above?',
      options: [
        { text: '2-methyl-4-*tert*-butylheptane', why: 'Right parent and locants, but substituents must be alphabetized: *tert* is ignored, so tert-butyl files under **b**, before methyl.' },
        { text: '4-*tert*-butyl-2-methylheptane', correct: true, why: 'Seven-carbon parent, numbered from the end nearer the branches (2, 4 rather than 4, 6), substituents in alphabetical order with *tert* ignored.' },
        { text: '4-*tert*-butyl-6-methylheptane', why: 'Numbered from the wrong end: $\\{4, 6\\}$ loses to $\\{2, 4\\}$ at the first term.' },
        { text: '3-isobutyl-2,2-dimethylhexane', why: 'This uses a six-carbon chain that runs into the tert-butyl group, but the longest chain has seven carbons: run from the propyl end through the backbone to the end of the isobutyl-shaped arm.' },
      ],
      explanation: 'Longest chain: start at the end of the propyl arm (3 carbons), pass through the carbon carrying tert-butyl, then $\\ce{CH2}$, then the $\\ce{CH}$ with a methyl, then its other methyl: $3 + 1 + 1 + 1 + 1 = 7$ carbons. Numbering from the branched end gives tert-butyl at C4 and methyl at C2, so $\\{2, 4\\}$. Alphabetize: butyl (b) before methyl (m). Result: **4-*tert*-butyl-2-methylheptane**.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Cycloalkanes',
      blocks: [
        {
          type: 'p',
          text: 'Join the ends of a chain and you get a [[ochem-cycloalkane|cycloalkane]], formula $\\ce{C_{n}H_{2n}}$ (closing the ring costs two H). Name it by adding *cyclo-* to the alkane with the same number of ring carbons: cyclopropane, cyclobutane, cyclopentane, cyclohexane. Cyclohexane rings are everywhere: in steroids such as cholesterol, in menthol, and in many drugs.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Ring or chain?', text: 'Most textbooks make whichever has more carbons the parent: methylcyclohexane, but 1-cyclopropylbutane. (The 2013 IUPAC recommendations prefer the ring in all cases, "butylcyclopropane"; both are understood.)' },
            { title: 'One substituent', text: 'No number needed: it is automatically on C1. Methylcyclopentane, not 1-methylcyclopentane.' },
            { title: 'Two or more', text: 'Put a substituent on C1 and go around the ring in whichever direction gives the lowest locants (first point of difference).' },
            { title: 'Still tied?', text: 'Give C1 to the substituent cited first alphabetically.' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.n_cyclo,
          alt: 'Three cycloalkanes. A cyclohexane numbered 1 at the ethyl-bearing carbon, 2 next, 3 at the methyl-bearing carbon: 1-ethyl-3-methylcyclohexane. A cyclopentane with two methyls on one carbon and one methyl two carbons away: 1,1,3-trimethylcyclopentane. A cyclohexane bearing a tert-butyl group: tert-butylcyclohexane.',
          caption: 'Left: both directions give $\\{1, 3\\}$, so the alphabetical rule puts ethyl on C1. Middle: $\\{1, 1, 3\\}$ beats $\\{1, 1, 4\\}$. Right: one substituent, no locant.',
        },
        {
          type: 'derivation',
          title: 'Naming molecule A (isopropyl and methyl across a cyclohexane ring)',
          steps: [
            { tex: '\\text{ring: 6 C};\\ \\text{largest branch: 3 C} \\implies \\text{cyclohexane}', why: 'The ring has more carbons than any substituent, so it is the parent.' },
            { tex: '\\text{substituents: isopropyl, methyl}', why: 'The three-carbon branch is attached through its middle carbon: isopropyl.' },
            { tex: '\\text{locants: } \\{1, 4\\} \\text{ either way}', why: 'The two groups are directly across a six-membered ring, three bonds apart in both directions.' },
            { tex: '\\text{i} < \\text{m} \\implies \\text{isopropyl on C1}', why: 'With a tie, the substituent cited first alphabetically gets C1. "iso" counts in alphabetizing.' },
          ],
          result: 'Molecule A is **1-isopropyl-4-methylcyclohexane**. (Later in this unit you will see that it has cis and trans forms; that is one more layer of the name.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Complete the names. Compound 1: a cyclopentane carrying an ethyl group and, two ring carbons away, a methyl group. Compound 2: a cyclohexane carrying methyl groups on two adjacent carbons and an isopropyl group on the next carbon after them.',
      template: 'Compound 1 is ___. Compound 2 is ___.',
      blanks: [{ answers: ['1-ethyl-3-methylcyclopentane'] }, { answers: ['1-isopropyl-2,3-dimethylcyclohexane'] }],
      wordBank: ['1-ethyl-3-methylcyclopentane', '1-methyl-3-ethylcyclopentane', '1-ethyl-4-methylcyclopentane', '1-isopropyl-2,3-dimethylcyclohexane', '3-isopropyl-1,2-dimethylcyclohexane', '1,2-dimethyl-3-isopropylcyclohexane'],
      explanation: 'Compound 1: locants are $\\{1, 3\\}$ going the short way round in either direction (the long way gives $\\{1, 4\\}$, which loses), so the alphabet decides: ethyl on C1. Compound 2: the three groups sit on three consecutive carbons, so the locant set is $\\{1, 2, 3\\}$ whether you start at the isopropyl end or the methyl end. The tie goes to the substituent cited first alphabetically: **i**sopropyl beats **m**ethyl (the *di* is ignored), so isopropyl is on C1. Names are always written in alphabetical order, which rules out "1,2-dimethyl-3-isopropyl" and "1-methyl-3-ethyl".',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Counting constitutional isomers',
      blocks: [
        {
          type: 'p',
          text: 'How many alkanes have the formula $\\ce{C6H14}$? Guessing gives duplicates, because the same molecule can be drawn many ways. Enumerate **by parent-chain length** instead, and name every candidate: two drawings with the same correct name are the same compound.',
        },
        {
          type: 'derivation',
          title: 'All isomers of $\\ce{C6H14}$',
          steps: [
            { tex: '\\text{chain of 6: hexane}', why: 'Only one way to have no branches.' },
            { tex: '\\text{chain of 5 + one } \\ce{CH3}:\\ \\text{2-methyl, 3-methylpentane}', why: 'A methyl on C2 or C3. On C4 is the same as C2 (number from the other end); on C1 would just extend the chain to six.' },
            { tex: '\\text{chain of 4 + two } \\ce{CH3}:\\ \\text{2,2- and 2,3-dimethylbutane}', why: 'Both methyls on C2, or one on C2 and one on C3. Any other placement is a duplicate or lengthens the chain. An ethyl on a 4-chain is impossible: it would lengthen the chain.' },
            { tex: '\\text{chain of 3: impossible}', why: 'Three extra carbons on a propane: the central carbon can carry at most two methyls (2,2-dimethylpropane is only $\\ce{C5H12}$), and any longer branch extends the chain.' },
            { tex: '1 + 2 + 2 = 5', why: 'Total, with no duplicates because every structure has a different name.' },
          ],
          result: '$\\ce{C6H14}$ has **5** constitutional isomers.',
        },
        {
          type: 'figure',
          svg: FIG.n_c6h14,
          alt: 'Five skeletal structures: hexane; 2-methylpentane; 3-methylpentane; 2,2-dimethylbutane; 2,3-dimethylbutane.',
          caption: 'The five hexanes. Their boiling points range from 69 °C (hexane) down to 50 °C (2,2-dimethylbutane): more branching, more compact shape, less surface contact, weaker dispersion forces.',
        },
        {
          type: 'table',
          headers: ['Carbons', '4', '5', '6', '7', '8', '10', '20', '30'],
          rows: [['Isomers', '2', '3', '5', '9', '18', '75', '366,319', '4,111,846,763']],
          caption: 'The number of alkane isomers grows exponentially, which is one reason a systematic naming algorithm is unavoidable.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Isomer counting is tree counting',
          text: 'An alkane\'s carbon skeleton is a **tree** (a connected graph with no cycles) whose vertices have degree at most 4. Counting isomers means counting such trees up to isomorphism, a problem Arthur Cayley attacked in 1875 and George Pólya solved in general with generating functions in 1937. A program can enumerate them by growing trees one vertex at a time and deduplicating with a canonical form, which is exactly what "naming each candidate" does by hand.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Use the same chain-length method to count the constitutional isomers of heptane, $\\ce{C7H16}$.',
      hint: 'Chain of 7: 1. Chain of 6 + methyl: 2. Chain of 5 + two carbons: an ethyl (only one place works) or two methyls (four placements). Chain of 4 + three methyls: 1.',
      label: 'number of isomers $=$',
      answer: '9',
      explanation: 'Chain of 7: heptane (1). Chain of 6 + $\\ce{CH3}$: 2-methylhexane, 3-methylhexane (2). Chain of 5 + $\\ce{C2H5}$: 3-ethylpentane only (an ethyl on C2 would extend the chain) (1). Chain of 5 + two $\\ce{CH3}$: 2,2-, 2,3-, 2,4- and 3,3-dimethylpentane (4). Chain of 4 + three $\\ce{CH3}$: 2,2,3-trimethylbutane (1). Total $1 + 2 + 1 + 4 + 1 = 9$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'From names to structures, and the general algorithm',
      blocks: [
        {
          type: 'p',
          text: 'Reading a name is the algorithm run backwards: draw the parent, number it, then hang each substituent at its locant. Check the result by renaming it.',
        },
        {
          type: 'derivation',
          title: 'Draw 3-ethyl-2,2,4-trimethylhexane',
          steps: [
            { tex: '\\ce{C1-C2-C3-C4-C5-C6}', why: '"hexane": a six-carbon parent chain, numbered from either end for now.' },
            { tex: '\\ce{C2}: \\ce{(CH3)2};\\quad \\ce{C3}: \\ce{CH2CH3};\\quad \\ce{C4}: \\ce{CH3}', why: 'Place every substituent at its locant; "2,2-" means two methyls on C2.' },
            { tex: '\\ce{(CH3)3C-CH(CH2CH3)-CH(CH3)-CH2CH3}', why: 'Fill in H so every carbon has four bonds. C2 now carries three methyls (C1 counts as one).' },
            { tex: '\\ce{C}: 6 + 2 + 2 + 1 = 11,\\quad \\ce{C11H24}', why: 'Parent 6, two methyls, ethyl 2, methyl 1. Check: $2(11) + 2 = 24$ hydrogens, as for any acyclic alkane.' },
            { tex: '\\text{rename: longest chain still 6, locants } \\{2,2,3,4\\} \\text{ beat } \\{3,4,5,5\\}', why: 'The check: the ethyl cannot lengthen the chain (through it the longest path is 2 + 1 + 3 = 6), and numbering from the other end loses at the first term.' },
          ],
          result: 'The name is valid and the structure is $\\ce{C11H24}$.',
        },
        {
          type: 'p',
          text: 'Some older common names survive because industry uses them. *Isooctane* is 2,2,4-trimethylpentane, $\\ce{(CH3)3CCH2CH(CH3)2}$, the reference fuel that defines **octane rating 100** (heptane defines 0). Branched alkanes burn more smoothly in an engine, resisting premature ignition ("knock"). *Neopentane* is 2,2-dimethylpropane, $\\ce{C(CH3)4}$.',
        },
        {
          type: 'heading',
          text: 'The general naming algorithm',
        },
        {
          type: 'p',
          text: 'Every functional group you will meet uses the same skeleton. Only the priorities change: the main functional group becomes a **suffix** (-ol, -one, -oic acid), must be in the parent chain, and gets the lowest possible number before substituents are considered.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Identify the main functional group', text: 'For alkanes there is none; later it chooses the suffix.' },
            { title: 'Choose the parent', text: 'The longest chain (or ring) containing the main group; tie: most substituents.' },
            { title: 'Number', text: 'Lowest locant to the main group, then lowest locants to all substituents by first point of difference, then alphabetical order.' },
            { title: 'Name the substituents', text: 'Simple alkyl, accepted branched names (isopropyl, tert-butyl…), or systematic names in parentheses.' },
            { title: 'Assemble', text: 'Alphabetical substituent prefixes with locants and multipliers, then the parent, then the suffix. Stereodescriptors such as (R), (S), cis and trans go in front.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'How naming is tested',
          text: 'Exams give a structure that hides its longest chain, a tie that must be broken alphabetically, or a name that is wrong in a subtle way ("2-ethylbutane", "2,3,3-trimethylbutane"). The defense is to always run the whole algorithm, then check by drawing your own name back.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Draw 5-(1,2-dimethylpropyl)nonane, the molecule from the complex-substituent figure. How many hydrogen atoms does it contain?',
      hint: 'Count carbons: nonane (9) + propyl (3) + two methyls (2). Then use $\\ce{C_{n}H_{2n+2}}$.',
      label: 'H atoms $=$',
      answer: '30',
      explanation: 'Parent: 9 carbons. Substituent: a 3-carbon chain carrying 2 methyls, 5 carbons in all. Total $n = 14$. Every acyclic alkane is $\\ce{C_{n}H_{2n+2}}$, so it is $\\ce{C14H30}$: **30** hydrogens. (It is one of the 1858 constitutional isomers of tetradecane.)',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for naming a branched alkane in the order you perform them.',
      lines: [
        'Find the longest continuous carbon chain (tie: the one with more substituents)',
        'Number the chain so the substituents get the lowest locants at the first point of difference',
        'If both directions tie, give the lower number to the substituent first in the alphabet',
        'Name each substituent (simple, accepted branched name, or systematic in parentheses)',
        'Write the substituents alphabetically with locants and di/tri prefixes, then the parent name',
      ],
      explanation: 'Parent first (you cannot number a chain you have not chosen), then numbering with its tie-breaker, then naming the branches, then assembly. The alphabetical rule appears twice: once as the last numbering tie-breaker and once for the order in which prefixes are written.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Try one that hides its parent chain',
      blocks: [
        {
          type: 'p',
          text: 'The molecule below is drawn with a long horizontal chain, which invites you to name it from left to right. Run the algorithm instead: count every chain, check the tie-breaker, then number.',
        },
        {
          type: 'figure',
          svg: FIG.n_try_e,
          alt: 'A horizontal seven-carbon zigzag chain: an ethyl-like left end, a carbon bearing a downward isopropyl group, a carbon bearing an upward methyl, then a three-carbon right end.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Checklist',
          text: 'Count the horizontal chain. Then count chains that turn down into the branch. If two chains tie for length, count the substituents each one leaves behind.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'What is the IUPAC name of the molecule in the figure above?',
      options: [
        { text: '3-isopropyl-4-methylheptane', why: 'This uses the horizontal chain. It has seven carbons, but so does the chain that turns into the isopropyl group, and that one carries three substituents instead of two.' },
        { text: '4-methyl-3-isopropylheptane', why: 'Same wrong parent chain, and the substituents are not in alphabetical order.' },
        { text: '5-ethyl-4,6-dimethylheptane', why: 'Right parent chain, numbered from the wrong end: $\\{4, 5, 6\\}$ loses to $\\{2, 3, 4\\}$.' },
        { text: '3-ethyl-2,4-dimethylheptane', correct: true, why: 'The chain from the propyl end through the backbone and down into the isopropyl group has seven carbons and three substituents. Numbered from the isopropyl end: methyl 2, ethyl 3, methyl 4.' },
      ],
      explanation: 'Two chains have seven carbons: the horizontal one (substituents: isopropyl, methyl) and the one that starts at the propyl end, passes through the methyl-bearing carbon and the branch carbon, and turns down into the isopropyl group (substituents: methyl, ethyl, methyl). Three beats two. Numbering from the isopropyl end gives $\\{2, 3, 4\\}$, which beats $\\{4, 5, 6\\}$. Alphabetize: ethyl before methyl. **3-ethyl-2,4-dimethylheptane**.',
    },
  ],
  takeaways: [
    'Acyclic alkanes are $\\ce{C_{n}H_{2n+2}}$; each ring removes two H, so cycloalkanes are $\\ce{C_{n}H_{2n}}$.',
    'Parent chain: the longest chain however it bends; a tie goes to the chain with more substituents. A branch on C1 or an ethyl on C2 means you missed a longer chain.',
    'Number for the lowest locants by first point of difference (not by sum); a complete tie goes to the substituent first in the alphabet.',
    'Alphabetize substituent names ignoring di/tri, *sec* and *tert*, but counting *iso* and the full name of a complex substituent.',
    'Rings: the parent if larger than any chain; one substituent needs no number; with several, start at a substituent and go round for the lowest locants.',
    'Constitutional isomers have the same formula and different connectivity; enumerate them by parent-chain length and name each one to remove duplicates ($\\ce{C6H14}$: 5, $\\ce{C7H16}$: 9).',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Chapter 3 (Organic Compounds: Alkanes and Their Stereochemistry) covers isomers and alkane naming with many practice problems.' },
    { title: 'IUPAC nomenclature of organic chemistry', url: 'https://en.wikipedia.org/wiki/IUPAC_nomenclature_of_organic_chemistry', source: 'wikipedia', note: 'An overview of the full system, including the suffix priorities you will use for functional groups.' },
    { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', source: 'other', note: 'Search its nomenclature posts for extra worked examples on branched substituents and tricky parent chains.' },
    { title: 'Alkane', url: 'https://en.wikipedia.org/wiki/Alkane', source: 'wikipedia', note: 'Physical properties, isomer counts and the role of alkanes in fuels.' },
  ],
};
