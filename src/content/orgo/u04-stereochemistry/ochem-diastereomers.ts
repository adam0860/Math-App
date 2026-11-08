import type { Lesson } from '../../types';

// <figures> (Fischer projections hand-drawn and checked numerically; skeletal structures from the molecule kit with CIP labels computed)
const FIG = {
  d_fischer: '<svg viewBox="0 0 570 230" xmlns="http://www.w3.org/2000/svg"><line x1="90" y1="51.6" x2="90" y2="138.4" stroke="currentColor" stroke-width="2"/><text x="90" y="39.6" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">CHO</text><text x="90" y="150.4" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">CH₂OH</text><line x1="48" y1="95" x2="132" y2="95" stroke="currentColor" stroke-width="2"/><text x="42" y="95" text-anchor="end" dominant-baseline="central" font-size="14">H</text><text x="138" y="95" text-anchor="start" dominant-baseline="central" font-size="14" class="t-red">OH</text><text x="90" y="185" text-anchor="middle" font-size="13" font-weight="600">Fischer projection</text><path d="M170,95 L222,95 l-8,-5 M222,95 l-8,5" stroke="currentColor" stroke-width="1.6" fill="none"/><text x="196" y="82" text-anchor="middle" font-size="11" class="t-gray">means</text><line x1="321.7" y1="89.0" x2="318.3" y2="89.0" stroke="currentColor" stroke-width="1.6"/><line x1="322.4" y1="82.9" x2="317.6" y2="82.9" stroke="currentColor" stroke-width="1.6"/><line x1="323.1" y1="76.9" x2="316.9" y2="76.9" stroke="currentColor" stroke-width="1.6"/><line x1="323.7" y1="70.9" x2="316.3" y2="70.9" stroke="currentColor" stroke-width="1.6"/><line x1="324.4" y1="64.9" x2="315.6" y2="64.9" stroke="currentColor" stroke-width="1.6"/><line x1="325.1" y1="58.8" x2="314.9" y2="58.8" stroke="currentColor" stroke-width="1.6"/><line x1="325.8" y1="52.8" x2="314.2" y2="52.8" stroke="currentColor" stroke-width="1.6"/><text x="320.0" y="29.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-red">CHO</text><line x1="318.3" y1="101.0" x2="321.7" y2="101.0" stroke="currentColor" stroke-width="1.6"/><line x1="317.6" y1="107.1" x2="322.4" y2="107.1" stroke="currentColor" stroke-width="1.6"/><line x1="316.9" y1="113.1" x2="323.1" y2="113.1" stroke="currentColor" stroke-width="1.6"/><line x1="316.3" y1="119.1" x2="323.7" y2="119.1" stroke="currentColor" stroke-width="1.6"/><line x1="315.6" y1="125.1" x2="324.4" y2="125.1" stroke="currentColor" stroke-width="1.6"/><line x1="314.9" y1="131.2" x2="325.1" y2="131.2" stroke="currentColor" stroke-width="1.6"/><line x1="314.2" y1="137.2" x2="325.8" y2="137.2" stroke="currentColor" stroke-width="1.6"/><text x="320.0" y="161.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-red">CH₂OH</text><path d="M320,95 L276.0,89.5 L276.0,100.5 Z" fill="currentColor"/><text x="254.0" y="95.0" text-anchor="middle" dominant-baseline="central" font-size="15">H</text><path d="M320,95 L364.0,100.5 L364.0,89.5 Z" fill="currentColor"/><text x="386.0" y="95.0" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-red">OH</text><text x="320" y="95" text-anchor="middle" dominant-baseline="central" font-size="15" class="t-gray" font-weight="600"></text><text x="320" y="200" text-anchor="middle" font-size="12.5" class="t-blue">horizontal = toward you</text><text x="320" y="218" text-anchor="middle" font-size="12.5" class="t-purple">vertical = away from you</text><text x="480" y="85" text-anchor="middle" font-size="12.5">(R)-glyceraldehyde</text><text x="480" y="103" text-anchor="middle" font-size="12" class="t-gray">= D-(+)-glyceraldehyde</text></svg>',
  d_four: '<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><g transform="translate(20,0) scale(1.6)"><text x="65.39" y="70.72" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Br</text><text x="46" y="13.61" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Cl</text><line x1="92.17" y1="31.79" x2="72.39" y2="43.21" stroke="currentColor" stroke-width="1.37" /><polygon points="72,43 72,51 73,51 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><polygon points="73,51 72,51 71,59 74,59 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><line x1="72.39" y1="43.21" x2="52.61" y2="31.79" stroke="currentColor" stroke-width="1.37" /><polygon points="53,32 53,24 52,24 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><polygon points="52,24 53,24 54,16 51,16 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><line x1="52.61" y1="31.79" x2="32.83" y2="43.21" stroke="currentColor" stroke-width="1.37" /></g><g transform="translate(300,0) scale(1.6)"><text x="65.39" y="70.72" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Br</text><text x="46" y="13.61" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Cl</text><line x1="92.17" y1="31.79" x2="72.39" y2="43.21" stroke="currentColor" stroke-width="1.37" /><line x1="72.03" y1="45.9" x2="72.75" y2="45.9" stroke="currentColor" stroke-width="1.37" /><line x1="71.68" y1="48.59" x2="73.1" y2="48.59" stroke="currentColor" stroke-width="1.37" /><line x1="71.32" y1="51.27" x2="73.46" y2="51.27" stroke="currentColor" stroke-width="1.37" /><line x1="70.96" y1="53.96" x2="73.82" y2="53.96" stroke="currentColor" stroke-width="1.37" /><line x1="70.61" y1="56.65" x2="74.18" y2="56.65" stroke="currentColor" stroke-width="1.37" /><line x1="72.39" y1="43.21" x2="52.61" y2="31.79" stroke="currentColor" stroke-width="1.37" /><line x1="52.97" y1="29.1" x2="52.25" y2="29.1" stroke="currentColor" stroke-width="1.37" /><line x1="53.32" y1="26.41" x2="51.9" y2="26.41" stroke="currentColor" stroke-width="1.37" /><line x1="53.68" y1="23.73" x2="51.54" y2="23.73" stroke="currentColor" stroke-width="1.37" /><line x1="54.04" y1="21.04" x2="51.18" y2="21.04" stroke="currentColor" stroke-width="1.37" /><line x1="54.39" y1="18.35" x2="50.82" y2="18.35" stroke="currentColor" stroke-width="1.37" /><line x1="52.61" y1="31.79" x2="32.83" y2="43.21" stroke="currentColor" stroke-width="1.37" /></g><g transform="translate(20,150) scale(1.6)"><text x="65.39" y="70.72" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Br</text><text x="46" y="13.61" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Cl</text><line x1="92.17" y1="31.79" x2="72.39" y2="43.21" stroke="currentColor" stroke-width="1.37" /><polygon points="72,43 72,51 73,51 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><polygon points="73,51 72,51 71,59 74,59 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><line x1="72.39" y1="43.21" x2="52.61" y2="31.79" stroke="currentColor" stroke-width="1.37" /><line x1="52.97" y1="29.1" x2="52.25" y2="29.1" stroke="currentColor" stroke-width="1.37" /><line x1="53.32" y1="26.41" x2="51.9" y2="26.41" stroke="currentColor" stroke-width="1.37" /><line x1="53.68" y1="23.73" x2="51.54" y2="23.73" stroke="currentColor" stroke-width="1.37" /><line x1="54.04" y1="21.04" x2="51.18" y2="21.04" stroke="currentColor" stroke-width="1.37" /><line x1="54.39" y1="18.35" x2="50.82" y2="18.35" stroke="currentColor" stroke-width="1.37" /><line x1="52.61" y1="31.79" x2="32.83" y2="43.21" stroke="currentColor" stroke-width="1.37" /></g><g transform="translate(300,150) scale(1.6)"><text x="65.39" y="70.72" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Br</text><text x="46" y="13.61" font-weight="normal" font-size="14" fill="currentColor" class="t-green">Cl</text><line x1="92.17" y1="31.79" x2="72.39" y2="43.21" stroke="currentColor" stroke-width="1.37" /><line x1="72.03" y1="45.9" x2="72.75" y2="45.9" stroke="currentColor" stroke-width="1.37" /><line x1="71.68" y1="48.59" x2="73.1" y2="48.59" stroke="currentColor" stroke-width="1.37" /><line x1="71.32" y1="51.27" x2="73.46" y2="51.27" stroke="currentColor" stroke-width="1.37" /><line x1="70.96" y1="53.96" x2="73.82" y2="53.96" stroke="currentColor" stroke-width="1.37" /><line x1="70.61" y1="56.65" x2="74.18" y2="56.65" stroke="currentColor" stroke-width="1.37" /><line x1="72.39" y1="43.21" x2="52.61" y2="31.79" stroke="currentColor" stroke-width="1.37" /><polygon points="53,32 53,24 52,24 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><polygon points="52,24 53,24 54,16 51,16 " fill="currentColor" stroke="currentColor" stroke-width="1.37" /><line x1="52.61" y1="31.79" x2="32.83" y2="43.21" stroke="currentColor" stroke-width="1.37" /></g><text x="120" y="128" text-anchor="middle" font-size="13">(2R,3R)</text><text x="400" y="128" text-anchor="middle" font-size="13">(2S,3S)</text><text x="120" y="278" text-anchor="middle" font-size="13">(2R,3S)</text><text x="400" y="278" text-anchor="middle" font-size="13">(2S,3R)</text><text x="260" y="55" text-anchor="middle" font-size="12" class="t-red">enantiomers</text><text x="260" y="205" text-anchor="middle" font-size="12" class="t-red">enantiomers</text><text x="260" y="142" text-anchor="middle" font-size="12" class="t-orange">diastereomers (top vs bottom)</text><path d=\'M225,65 L295,65\' stroke=\'currentColor\' class=\'s-red\' stroke-width=\'1.5\'/><path d=\'M225,215 L295,215\' stroke=\'currentColor\' class=\'s-red\' stroke-width=\'1.5\'/></svg>',
  d_fq: '<svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg"><line x1="140" y1="42.8" x2="140" y2="117.2" stroke="currentColor" stroke-width="2"/><text x="140" y="30.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><text x="140" y="129.2" text-anchor="middle" dominant-baseline="central" font-size="14">CH₃</text><line x1="98" y1="80" x2="182" y2="80" stroke="currentColor" stroke-width="2"/><text x="92" y="80" text-anchor="end" dominant-baseline="central" font-size="14">H</text><text x="188" y="80" text-anchor="start" dominant-baseline="central" font-size="14" class="t-red">OH</text><text x="140" y="165" text-anchor="middle" font-size="13">lactic acid</text><line x1="380" y1="42.8" x2="380" y2="117.2" stroke="currentColor" stroke-width="2"/><text x="380" y="30.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><text x="380" y="129.2" text-anchor="middle" dominant-baseline="central" font-size="14">CH₃</text><line x1="338" y1="80" x2="422" y2="80" stroke="currentColor" stroke-width="2"/><text x="332" y="80" text-anchor="end" dominant-baseline="central" font-size="14" class="t-blue">H₂N</text><text x="428" y="80" text-anchor="start" dominant-baseline="central" font-size="14">H</text><text x="380" y="165" text-anchor="middle" font-size="13">alanine</text></svg>',
  d_polar: '<svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="70" r="16" fill="currentColor" class="f-orange" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="40" y="110" text-anchor="middle" font-size="11.5" class="t-gray">lamp</text><path d="M70,55 q4,15 0,30" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/><path d="M82,55 q4,15 0,30" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/><path d="M94,55 q4,15 0,30" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/><rect x="115" y="40" width="10" height="60" rx="2" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor"/><text x="120" y="118" text-anchor="middle" font-size="11.5" class="t-gray">polarizer</text><line x1="140" y1="70" x2="175" y2="70" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="158" y1="55" x2="158" y2="85" stroke="currentColor" stroke-width="2" class="s-blue"/><rect x="185" y="52" width="140" height="36" rx="10" fill="currentColor" class="f-teal" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="255" y="75" text-anchor="middle" font-size="12">sample, length l</text><text x="255" y="118" text-anchor="middle" font-size="11.5" class="t-gray">chiral solution, c g/mL</text><line x1="335" y1="70" x2="375" y2="70" stroke="currentColor" stroke-width="1.6" class="s-blue"/><line x1="355" y1="56" x2="363" y2="84" stroke="currentColor" stroke-width="2" class="s-red"/><rect x="385" y="40" width="10" height="60" rx="2" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor"/><text x="390" y="118" text-anchor="middle" font-size="11.5" class="t-gray">analyzer</text><path d="M420,48 A22,22 0 0 1 442,70" fill="none" stroke="currentColor" stroke-width="1.5" class="s-red"/><text x="450" y="45" text-anchor="start" font-size="12" class="t-red">rotate by α</text><circle cx="480" cy="85" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="480" cy="85" r="3" fill="currentColor"/><text x="480" y="118" text-anchor="middle" font-size="11.5" class="t-gray">observer</text><text x="270" y="148" text-anchor="middle" font-size="11.5">the plane of polarization turns by α: clockwise (+, dextrorotatory) or counterclockwise (−, levorotatory)</text></svg>',
  d_rings: '<svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0,0) scale(1.6)"><polygon points="64,32 75,27 73,25 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><polygon points="73,25 75,27 86,22 83,17 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><line x1="63.52" y1="31.75" x2="42.73" y2="19.75" stroke="currentColor" stroke-width="1.44" /><line x1="42.73" y1="19.75" x2="21.95" y2="31.75" stroke="currentColor" stroke-width="1.44" /><line x1="21.95" y1="31.75" x2="21.95" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="21.95" y1="55.75" x2="42.73" y2="67.75" stroke="currentColor" stroke-width="1.44" /><line x1="42.73" y1="67.75" x2="63.52" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="63.52" y1="31.75" x2="63.52" y2="55.75" stroke="currentColor" stroke-width="1.44" /><polygon points="64,56 73,63 75,61 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><polygon points="75,61 73,63 83,70 86,65 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(180,0) scale(1.6)"><polygon points="64,32 75,27 73,25 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><polygon points="73,25 75,27 86,22 83,17 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><line x1="63.52" y1="31.75" x2="42.73" y2="19.75" stroke="currentColor" stroke-width="1.44" /><line x1="42.73" y1="19.75" x2="21.95" y2="31.75" stroke="currentColor" stroke-width="1.44" /><line x1="21.95" y1="31.75" x2="21.95" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="21.95" y1="55.75" x2="42.73" y2="67.75" stroke="currentColor" stroke-width="1.44" /><line x1="42.73" y1="67.75" x2="63.52" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="63.52" y1="31.75" x2="63.52" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="65.78" y1="57.49" x2="66.15" y2="56.84" stroke="currentColor" stroke-width="1.44" /><line x1="68.03" y1="59.22" x2="68.78" y2="57.92" stroke="currentColor" stroke-width="1.44" /><line x1="70.29" y1="60.96" x2="71.42" y2="59.01" stroke="currentColor" stroke-width="1.44" /><line x1="72.55" y1="62.7" x2="74.05" y2="60.1" stroke="currentColor" stroke-width="1.44" /><line x1="74.81" y1="64.43" x2="76.68" y2="61.19" stroke="currentColor" stroke-width="1.44" /><line x1="77.06" y1="66.17" x2="79.31" y2="62.27" stroke="currentColor" stroke-width="1.44" /><line x1="79.32" y1="67.91" x2="81.95" y2="63.36" stroke="currentColor" stroke-width="1.44" /><line x1="81.58" y1="69.64" x2="84.58" y2="64.45" stroke="currentColor" stroke-width="1.44" /></g><g transform="translate(350,0) scale(1.6)"><line x1="66.15" y1="30.66" x2="65.78" y2="30.01" stroke="currentColor" stroke-width="1.44" /><line x1="68.78" y1="29.58" x2="68.03" y2="28.28" stroke="currentColor" stroke-width="1.44" /><line x1="71.42" y1="28.49" x2="70.29" y2="26.54" stroke="currentColor" stroke-width="1.44" /><line x1="74.05" y1="27.4" x2="72.55" y2="24.8" stroke="currentColor" stroke-width="1.44" /><line x1="76.68" y1="26.31" x2="74.81" y2="23.07" stroke="currentColor" stroke-width="1.44" /><line x1="79.31" y1="25.23" x2="77.06" y2="21.33" stroke="currentColor" stroke-width="1.44" /><line x1="81.95" y1="24.14" x2="79.32" y2="19.59" stroke="currentColor" stroke-width="1.44" /><line x1="84.58" y1="23.05" x2="81.58" y2="17.86" stroke="currentColor" stroke-width="1.44" /><line x1="63.52" y1="31.75" x2="42.73" y2="19.75" stroke="currentColor" stroke-width="1.44" /><line x1="42.73" y1="19.75" x2="21.95" y2="31.75" stroke="currentColor" stroke-width="1.44" /><line x1="21.95" y1="31.75" x2="21.95" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="21.95" y1="55.75" x2="42.73" y2="67.75" stroke="currentColor" stroke-width="1.44" /><line x1="42.73" y1="67.75" x2="63.52" y2="55.75" stroke="currentColor" stroke-width="1.44" /><line x1="63.52" y1="31.75" x2="63.52" y2="55.75" stroke="currentColor" stroke-width="1.44" /><polygon points="64,56 73,63 75,61 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /><polygon points="75,61 73,63 83,70 86,65 " fill="currentColor" stroke="currentColor" stroke-width="1.44" /></g><text x="85" y="152" text-anchor="middle" font-size="12.5" class="t-green">cis: meso (1R,2S)</text><text x="85" y="169" text-anchor="middle" font-size="11.5" class="t-gray">achiral</text><text x="350" y="152" text-anchor="middle" font-size="12.5" class="t-red">trans: (1R,2R) and (1S,2S)</text><text x="350" y="169" text-anchor="middle" font-size="11.5" class="t-gray">a pair of enantiomers</text></svg>',
  d_tartaric: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="41.480000000000004" x2="80" y2="144.52" stroke="currentColor" stroke-width="2"/><text x="80" y="29.480000000000004" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><text x="80" y="156.52" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><line x1="42" y1="70" x2="118" y2="70" stroke="currentColor" stroke-width="2"/><text x="36" y="70" text-anchor="end" dominant-baseline="central" font-size="14">H</text><text x="124" y="70" text-anchor="start" dominant-baseline="central" font-size="14" class="t-red">OH</text><line x1="42" y1="116" x2="118" y2="116" stroke="currentColor" stroke-width="2"/><text x="36" y="116" text-anchor="end" dominant-baseline="central" font-size="14">HO</text><text x="124" y="116" text-anchor="start" dominant-baseline="central" font-size="14">H</text><line x1="250" y1="41.480000000000004" x2="250" y2="144.52" stroke="currentColor" stroke-width="2"/><text x="250" y="29.480000000000004" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><text x="250" y="156.52" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><line x1="212" y1="70" x2="288" y2="70" stroke="currentColor" stroke-width="2"/><text x="206" y="70" text-anchor="end" dominant-baseline="central" font-size="14">HO</text><text x="294" y="70" text-anchor="start" dominant-baseline="central" font-size="14">H</text><line x1="212" y1="116" x2="288" y2="116" stroke="currentColor" stroke-width="2"/><text x="206" y="116" text-anchor="end" dominant-baseline="central" font-size="14">H</text><text x="294" y="116" text-anchor="start" dominant-baseline="central" font-size="14" class="t-red">OH</text><line x1="430" y1="41.480000000000004" x2="430" y2="144.52" stroke="currentColor" stroke-width="2"/><text x="430" y="29.480000000000004" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><text x="430" y="156.52" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">COOH</text><line x1="392" y1="70" x2="468" y2="70" stroke="currentColor" stroke-width="2"/><text x="386" y="70" text-anchor="end" dominant-baseline="central" font-size="14">H</text><text x="474" y="70" text-anchor="start" dominant-baseline="central" font-size="14" class="t-red">OH</text><line x1="392" y1="116" x2="468" y2="116" stroke="currentColor" stroke-width="2"/><text x="386" y="116" text-anchor="end" dominant-baseline="central" font-size="14">H</text><text x="474" y="116" text-anchor="start" dominant-baseline="central" font-size="14" class="t-red">OH</text><line x1="370" y1="93" x2="490" y2="93" stroke="currentColor" stroke-width="1.6" class="s-teal" stroke-dasharray="6 4"/><text x="500" y="93" text-anchor="start" dominant-baseline="central" font-size="11" class="t-teal">mirror plane</text><text x="80" y="185" text-anchor="middle" font-size="13" font-weight="600">(2R,3R)-(+)</text><text x="80" y="203" text-anchor="middle" font-size="11.5" class="t-gray">mp 170 °C, [α] = +12</text><text x="250" y="185" text-anchor="middle" font-size="13" font-weight="600">(2S,3S)-(−)</text><text x="250" y="203" text-anchor="middle" font-size="11.5" class="t-gray">mp 170 °C, [α] = −12</text><text x="430" y="185" text-anchor="middle" font-size="13" font-weight="600">meso (2R,3S)</text><text x="430" y="203" text-anchor="middle" font-size="11.5" class="t-gray">mp 147 °C, [α] = 0</text><text x="165" y="228" text-anchor="middle" font-size="12" class="t-red">enantiomers</text><text x="340" y="228" text-anchor="middle" font-size="12" class="t-orange">diastereomers of both</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-diastereomers',
  title: 'Diastereomers, Meso Compounds and Optical Activity',
  summary: 'Molecules with several chirality centers: the 2ⁿ rule, enantiomers versus diastereomers, meso compounds like tartaric acid, Fischer projections, cis/trans rings as stereoisomers, and the measurement side: polarimetry, specific rotation, enantiomeric excess, racemic mixtures and their resolution.',
  minutes: 21,
  objectives: [
    'Enumerate the stereoisomers of a molecule with two or more chirality centers and classify each pair as enantiomers or diastereomers',
    'Recognize meso compounds by their internal mirror plane and count stereoisomers correctly when one exists',
    'Draw and read Fischer projections, including assigning R/S and knowing which manipulations are allowed',
    'Decide whether cis and trans disubstituted cycloalkanes are chiral, meso or achiral',
    'Calculate specific rotation and enantiomeric excess from polarimeter data, and explain how racemic mixtures are resolved',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Two chirality centers, four stereoisomers',
      blocks: [
        {
          type: 'p',
          text: 'Each chirality center can be R or S independently. With two centers there are four combinations: RR, SS, RS and SR. In general a molecule with $n$ chirality centers has **at most** $2^n$ stereoisomers.',
        },
        {
          type: 'figure',
          svg: FIG.d_four,
          alt: 'Four skeletal drawings of 2-bromo-3-chlorobutane, labeled (2R,3R), (2S,3S), (2R,3S) and (2S,3R). In the top pair, every wedge on the left is a hash on the right; the same holds for the bottom pair. Red lines mark each pair as enantiomers; an orange label says top versus bottom are diastereomers.',
          caption: 'The four stereoisomers of 2-bromo-3-chlorobutane. (2R,3R) and (2S,3S) are mirror images: every center inverted. (2R,3R) and (2R,3S) differ at only one center, so they are **not** mirror images: they are diastereomers.',
        },
        {
          type: 'theorem',
          name: 'Enantiomer or diastereomer?',
          text: 'Compare the descriptors center by center. If **every** center is inverted (RR ↔ SS, RS ↔ SR), the two are enantiomers. If **some but not all** are inverted, they are [[ochem-diastereomer|diastereomers]].',
        },
        {
          type: 'p',
          text: 'Unlike enantiomers, diastereomers are different shapes, not mirror images, so they have **different** physical properties: melting points, boiling points, solubilities, NMR spectra. They can be separated by ordinary distillation, crystallization or chromatography. This difference is the key to separating enantiomers later in this lesson.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Hands and pairs of hands',
          text: 'Think of a pair of gloves worn on two hands. (left, left) and (right, right) are mirror images of each other. (left, right) is a different object altogether, not the mirror image of either: you cannot turn a mismatched pair into a matched one by looking in a mirror.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Glucose in its open-chain form, $\\ce{HOCH2(CHOH)4CHO}$, has four chirality centers and no internal symmetry. What is the maximum number of stereoisomers with this constitution (the aldohexoses)?',
      hint: 'Each center can be R or S independently.',
      label: 'stereoisomers $=$',
      answer: '16',
      explanation: 'With $n = 4$ chirality centers and no symmetry, all $2^4 = 16$ combinations are distinct compounds: 8 pairs of enantiomers. D-glucose is one of them; its enantiomer L-glucose and the 14 others (D- and L-mannose, galactose, allose and so on) are its diastereomers or enantiomer. Nature uses mostly the D series.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Meso compounds: when 2ⁿ overcounts',
      blocks: [
        {
          type: 'p',
          text: 'If a molecule\'s two halves are built the same way, some of the $2^n$ combinations coincide. Tartaric acid, $\\ce{HOOC-CH(OH)-CH(OH)-COOH}$, has two chirality centers but only **three** stereoisomers.',
        },
        {
          type: 'figure',
          svg: FIG.d_tartaric,
          alt: 'Three Fischer projections of tartaric acid with COOH at top and bottom and two horizontal rows. (2R,3R): OH right on top row, OH left on bottom row; mp 170 degrees C, specific rotation plus 12. (2S,3S): OH left then right; mp 170, minus 12. Meso (2R,3S): OH right on both rows, with a dashed horizontal mirror plane between the rows; mp 147, rotation 0.',
          caption: 'The (2R,3R) and (2S,3S) acids are enantiomers with identical melting points and opposite rotations. The third has both OH groups on the same side and a mirror plane between the two centers: it is **meso**, achiral, optically inactive, and a diastereomer of the other two (different melting point).',
        },
        {
          type: 'definition',
          term: 'Meso compound',
          text: 'A [[ochem-meso-compound|meso compound]] has chirality centers but is achiral, because an internal mirror plane maps one half of the molecule onto the other. Its descriptors come in mirror pairs (R,S), and "(2R,3S)" and "(2S,3R)" name the **same** compound.',
        },
        {
          type: 'derivation',
          title: 'Counting the stereoisomers of 2,3-dichlorobutane',
          steps: [
            { tex: '\\ce{CH3-CHCl-CHCl-CH3}:\\ n = 2 \\implies \\le 2^2 = 4', why: 'C2 and C3 each carry H, Cl, $\\ce{CH3}$ and the other half of the molecule.' },
            { tex: '(2R,3R) \\text{ and } (2S,3S): \\text{a pair of enantiomers}', why: 'When both centers have the same descriptor, the two halves are not mirror images of each other, so there is no internal mirror plane. Each is chiral, and inverting both centers turns one into the other.' },
            { tex: '(2R,3S) \\equiv (2S,3R)', why: 'The two halves are constitutionally identical, so a mirror plane between C2 and C3 maps the R half onto the S half. Rotating the molecule 180° turns one label set into the other: one compound, not two.' },
            { tex: '2 + 1 = 3 \\text{ stereoisomers}', why: 'One pair of enantiomers plus one meso compound.' },
          ],
          result: '2,3-Dichlorobutane, like tartaric acid, has **3** stereoisomers, not 4.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How to spot meso',
          text: 'Meso needs (1) at least two chirality centers, (2) a constitutionally symmetric molecule (the same groups on each center), and (3) opposite configurations that make the halves mirror images. Draw it in an eclipsed or Fischer form and look for a plane cutting between the centers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'How many stereoisomers does 2,4-dibromopentane, $\\ce{CH3CHBrCH2CHBrCH3}$, have?',
      hint: 'Two chirality centers, and the molecule is the same read from either end. Is there a meso form?',
      label: 'stereoisomers $=$',
      answer: '3',
      explanation: 'C2 and C4 are chirality centers (H, Br, $\\ce{CH3}$, and the $\\ce{CH2CHBrCH3}$ chain), so at most $2^2 = 4$. The molecule is constitutionally symmetric about C3. (2R,4R) and (2S,4S) are enantiomers; (2R,4S) has a mirror plane through C3 and is the same compound as (2S,4R): meso. Total **3**. Note that C3, a $\\ce{CH2}$, is not a chirality center.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Fischer projections',
      blocks: [
        {
          type: 'p',
          text: 'Emil Fischer, working out the structures of the sugars in the 1890s, needed a fast way to draw chains of chirality centers. A [[ochem-fischer-projection|Fischer projection]] draws each center as a cross: the main chain runs vertically, the carbon is at the intersection (not written), and the convention fixes the 3D meaning of every line.',
        },
        {
          type: 'figure',
          svg: FIG.d_fischer,
          alt: 'Left: a Fischer projection of glyceraldehyde with CHO at top, CH2OH at bottom, H at left and OH at right. An arrow labeled means points to the same molecule drawn with wedges: CHO and CH2OH on hashes pointing up and down, H and OH on wedges pointing left and right. Notes: horizontal is toward you, vertical is away from you; (R)-glyceraldehyde equals D-(+)-glyceraldehyde.',
          caption: 'Horizontal bonds come **toward** you, vertical bonds go **away**: the molecule bows toward you like a bow tie. This is (R)-glyceraldehyde, the reference compound for the D/L system (OH on the right = D).',
        },
        {
          type: 'steps',
          items: [
            { title: 'Allowed: rotate 180° in the plane', text: 'Vertical bonds stay vertical (away) and horizontal stay horizontal (toward): same molecule.' },
            { title: 'Not allowed: rotate 90°', text: 'Vertical and horizontal swap, so every group changes from toward to away or back: that draws the **enantiomer**.' },
            { title: 'Swapping two groups', text: 'One swap inverts the center (as always); two swaps restore it.' },
            { title: 'Assigning R/S', text: 'If the lowest-priority group is on a **vertical** bond (pointing away), read 1 → 2 → 3 directly. If it is on a **horizontal** bond (toward you), read and reverse.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Checking that the glyceraldehyde above is R',
          steps: [
            { tex: '\\ce{OH} = 1,\\ \\ce{CHO} = 2,\\ \\ce{CH2OH} = 3,\\ \\ce{H} = 4', why: 'O beats C; CHO (O, O, H) beats CH2OH (O, H, H) at the second term.' },
            { tex: '\\ce{OH}\\ (\\text{right}) \\to \\ce{CHO}\\ (\\text{top}) \\to \\ce{CH2OH}\\ (\\text{bottom}): \\text{counterclockwise}', why: 'From the right arm up to the top, then around the left side down to the bottom.' },
            { tex: '\\ce{H} \\text{ horizontal (toward you)} \\implies \\text{reverse: } R', why: 'Reading with the lowest group in front gives the opposite of the true answer.' },
          ],
          result: '(R)-Glyceraldehyde, which happens to rotate light in the (+) direction.',
        },
        {
          type: 'p',
          text: '**Try it.** Below are lactic acid and alanine in Fischer projection.',
        },
        {
          type: 'figure',
          svg: FIG.d_fq,
          alt: 'Two Fischer projections. Lactic acid: COOH top, CH3 bottom, H left, OH right. Alanine: COOH top, CH3 bottom, H2N left, H right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'What are the configurations of the lactic acid and the alanine in the Fischer projections above?',
      options: [
        { text: 'Lactic acid R, alanine S', correct: true, why: 'Both have H on a horizontal bond, so each reading must be reversed: lactic acid reads S → R; alanine reads R → S.' },
        { text: 'Lactic acid S, alanine R', why: 'These are the readings before reversing. With H horizontal (toward you), the apparent direction is backwards.' },
        { text: 'Both R', why: 'Lactic acid is R, but trace alanine: $\\ce{NH2}$ (left) → COOH (top) → $\\ce{CH3}$ (bottom) is clockwise, and reversing gives S.' },
        { text: 'Both S', why: 'Lactic acid: OH (right) → COOH (top) → $\\ce{CH3}$ (bottom) is counterclockwise, which reverses to R.' },
      ],
      explanation: '**Lactic acid**: OH 1, COOH 2, $\\ce{CH3}$ 3, H 4. Right → top → bottom (via the left) is counterclockwise; H is horizontal, so reverse: **R** (this is D-lactic acid). **Alanine**: $\\ce{NH2}$ 1, COOH 2, $\\ce{CH3}$ 3. Left → top → bottom (via the right) is clockwise; reverse: **S**, the natural L-alanine. In Fischer projections of amino acids, $\\ce{NH2}$ on the left means L.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Rings: cis, trans and meso',
      blocks: [
        {
          type: 'p',
          text: 'The cis/trans isomers of disubstituted rings that you analyzed as chairs in the last unit are stereoisomers, and now you can classify them fully. Ring carbons carrying a substituent are often chirality centers, because the two paths around the ring differ.',
        },
        {
          type: 'figure',
          svg: FIG.d_rings,
          alt: 'Three 1,2-dimethylcyclohexanes drawn as flat hexagons. Left: both methyls on wedges, labeled cis, meso (1R,2S), achiral. Middle: one methyl on a wedge and one on a hash. Right: the mirror image of the middle one, with wedge and hash swapped. The middle and right are labeled trans, (1R,2R) and (1S,2S), a pair of enantiomers.',
          caption: 'cis-1,2-Dimethylcyclohexane has a mirror plane through the ring between C1 and C2: it is **meso**. trans-1,2-Dimethylcyclohexane has no mirror plane and exists as two enantiomers. Three stereoisomers in total, exactly like tartaric acid.',
        },
        {
          type: 'table',
          headers: ['Dimethylcyclohexane', 'Chirality centers?', 'cis', 'trans'],
          rows: [
            ['1,2', 'yes (C1, C2)', 'meso (achiral)', 'chiral: pair of enantiomers'],
            ['1,3', 'yes (C1, C3)', 'meso (achiral)', 'chiral: pair of enantiomers'],
            ['1,4', '**no**', 'achiral', 'achiral'],
          ],
          caption: 'In 1,4-dimethylcyclohexane the two ring paths from C1 to C4 are identical, so C1 and C4 are not chirality centers. cis and trans are still diastereomers of each other, but neither is chiral: a mirror plane passes through C1 and C4.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why ring flips do not make the cis isomer chiral',
          text: 'In any single chair, cis-1,2-dimethylcyclohexane (one methyl axial, one equatorial) is actually chiral; its ring flip produces exactly its mirror image. Because the flip happens about $10^5$ times per second, the two forms interconvert far too fast to separate and the compound behaves as achiral. The flat-ring drawing, which shows the time-averaged structure, has the mirror plane, and it gives the right answer for counting stereoisomers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'trans-1,2-Dimethylcyclohexane is achiral because it is the same compound read from either methyl group.',
      answer: false,
      explanation: 'Constitutional symmetry is necessary for a meso compound but not sufficient: the configurations must also be mirror images. In the trans isomer C1 and C2 are both R or both S, (1R,2R) or (1S,2S), and no mirror plane exists. It is chiral and exists as a pair of enantiomers. The **cis** isomer (1R,2S) is the meso one.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Optical activity and specific rotation',
      blocks: [
        {
          type: 'p',
          text: 'Enantiomers differ in one physical measurement: their effect on **plane-polarized light**. Light passed through a polarizer oscillates in a single plane. When it passes through a solution of one enantiomer, the plane rotates by an angle $\\alpha$; the other enantiomer rotates it by exactly $-\\alpha$. Compounds that rotate light are [[ochem-optical-activity|optically active]].',
        },
        {
          type: 'figure',
          svg: FIG.d_polar,
          alt: 'Schematic of a polarimeter: a lamp, a polarizer, a tube containing the chiral solution of length l and concentration c, an analyzer turned by angle alpha, and an observer. The polarization direction drawn before the tube is vertical and after the tube is tilted.',
          caption: 'A polarimeter. The analyzer is turned until the light passes, which measures the rotation $\\alpha$. Clockwise (as seen by the observer) is (+), or **dextrorotatory**; counterclockwise is (−), **levorotatory**.',
        },
        {
          type: 'p',
          text: 'The observed angle grows with the number of molecules the light meets, so it is proportional to the path length and to the concentration. Dividing them out gives a property of the compound, the [[ochem-specific-rotation|specific rotation]]:',
        },
        {
          type: 'math',
          tex: '[\\alpha]_D = \\frac{\\alpha}{l \\cdot c}',
          caption: '$\\alpha$ in degrees, $l$ in decimeters (1 dm = 10 cm), $c$ in g/mL. The subscript D means sodium D-line light (589 nm), usually at 20–25 °C.',
        },
        {
          type: 'derivation',
          title: 'Specific rotation of (S)-2-butanol',
          steps: [
            { tex: '\\alpha = +2.70^\\circ,\\quad l = 2.00\\ \\text{dm},\\quad c = 0.100\\ \\text{g/mL}', why: 'A 20 cm tube filled with a solution of 1.00 g of (S)-2-butanol per 10.0 mL.' },
            { tex: '[\\alpha]_D = \\frac{+2.70}{(2.00)(0.100)} = +13.5', why: 'Divide by path length times concentration. (Specific rotations are conventionally reported without units.)' },
          ],
          result: '(S)-2-butanol has $[\\alpha]_D = +13.5$, so it is (S)-(+)-2-butanol; its enantiomer is (R)-(−)-2-butanol with $-13.5$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Pasteur and the tweezers',
          text: 'In 1848 Louis Pasteur noticed that crystals of the sodium ammonium salt of optically inactive "racemic acid" came in two mirror-image shapes. He sorted them by hand with tweezers under a magnifier, dissolved each pile, and found that one rotated light like natural (+)-tartaric acid and the other by the same amount in the opposite direction. It was the first separation of enantiomers and the first evidence that molecules themselves could be handed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A solution of 1.33 g of sucrose in 10.0 mL of water, in a 1.00 dm tube, rotates plane-polarized light by $+8.84^\\circ$. What is the specific rotation of sucrose?',
      hint: '$c$ must be in g/mL: $1.33\\ \\text{g} / 10.0\\ \\text{mL}$.',
      label: '$[\\alpha]_D =$',
      answer: '8.84/(1.00*1.33/10.0)',
      answerTex: '+66.5',
      tolerance: 0.1,
      explanation: '$c = 1.33/10.0 = 0.133$ g/mL and $l = 1.00$ dm, so $[\\alpha]_D = \\dfrac{+8.84}{(1.00)(0.133)} = +66.5$. Sucrose is dextrorotatory. (Hydrolysis turns it into a mixture of glucose and fructose with a net negative rotation, which is why that mixture is called "invert sugar".)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Racemic mixtures and enantiomeric excess',
      blocks: [
        {
          type: 'p',
          text: 'A 50:50 mixture of enantiomers is a [[ochem-racemic-mixture|racemic mixture]] (racemate), written (±). Each molecule rotates the light, but the rotations cancel exactly: $\\alpha = 0$. Reactions that create a chirality center from achiral starting materials, without a chiral catalyst or reagent, always give racemates, because the two mirror-image pathways have identical energies.',
        },
        {
          type: 'definition',
          term: 'Enantiomeric excess',
          text: 'For a mixture that is not 50:50, the [[ochem-enantiomeric-excess|enantiomeric excess]] is the percentage of the major enantiomer minus the percentage of the minor one. Because the racemic part contributes no rotation, ee is also the observed specific rotation divided by that of the pure enantiomer.',
        },
        {
          type: 'math',
          tex: '\\%\\,ee = \\%\\,\\text{major} - \\%\\,\\text{minor} = \\frac{[\\alpha]_{\\text{observed}}}{[\\alpha]_{\\text{pure}}} \\times 100',
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [-20, 20],
          xStep: 10,
          yStep: 5,
          functions: [{ expr: 'a(2x - 100)/100', label: 'observed $[\\alpha]$ vs % (S)', color: 'blue' }],
          points: [{ x: 's', y: 'a(2s - 100)/100', color: 'red' }],
          hlines: [{ y: 0, color: 'gray' }],
          vlines: [{ x: 50, label: 'racemic', color: 'gray' }],
          sliders: [
            { name: 's', min: 0, max: 100, step: 1, value: 85, label: '% of the (S) enantiomer' },
            { name: 'a', min: 5, max: 20, step: 0.5, value: 13.5, label: '$[\\alpha]$ of pure (S)' },
          ],
          readouts: [
            { label: 'ee (%) $= |2s - 100| =$', expr: 'abs(2s - 100)', digits: 0 },
            { label: 'observed $[\\alpha] =$', expr: 'a(2s - 100)/100', digits: 2 },
          ],
          caption: 'Observed specific rotation is a straight line in the composition, zero at 50:50 and $\\pm[\\alpha]_{\\text{pure}}$ for the pure enantiomers. Defaults: 2-butanol that is 85% (S) shows $+9.45$, i.e. 70% ee. Note that 70% ee does **not** mean 70% (S).',
        },
        {
          type: 'derivation',
          title: 'From rotation to composition',
          steps: [
            { tex: 'ee = \\frac{+9.45}{+13.5} \\times 100 = 70\\%', why: 'The observed specific rotation of a 2-butanol sample divided by that of pure (S)-2-butanol. The sign tells you (S) is the major enantiomer.' },
            { tex: '\\%S + \\%R = 100,\\quad \\%S - \\%R = 70', why: 'Two equations: the composition adds to 100, and ee is the difference.' },
            { tex: '\\%S = \\frac{100 + 70}{2} = 85\\%,\\quad \\%R = 15\\%', why: 'Add the equations and halve. Think of it as 70% pure (S) plus 30% racemate (15% S + 15% R).' },
          ],
          result: 'A 70% ee sample is 85:15.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'How enantiomers are separated: resolution',
          text: '[[ochem-resolution|Resolution]] means separating a racemate. Since enantiomers have identical properties, chemists first convert them into **diastereomers**, which do not. A racemic acid treated with one pure enantiomer of a chiral base, for example (R)-1-phenylethylamine, gives two salts, (R)-acid·(R)-base and (S)-acid·(R)-base. These are diastereomers with different solubilities, so one crystallizes first; adding strong acid then releases the pure enantiomer of the acid. Modern alternatives are chiral chromatography columns and enzymes that react with only one enantiomer. Better still is **asymmetric synthesis**, which uses chiral catalysts to make mostly one enantiomer from the start (Nobel Prizes in 2001 and 2021).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Pure (R)-carvone has $[\\alpha]_D = -61$. A sample of carvone shows $[\\alpha]_D = -36.6$. What percentage of the sample is the (R) enantiomer?',
      hint: 'First find the ee from the ratio of rotations. Then %R = (100 + ee)/2.',
      label: '% (R) $=$',
      unit: '%',
      answer: '(100 + 100*36.6/61)/2',
      answerTex: '80',
      tolerance: 0.5,
      explanation: '$ee = \\dfrac{-36.6}{-61} \\times 100 = 60\\%$, and the negative sign says (R) is the major enantiomer. Then $\\%R = \\dfrac{100 + 60}{2} = 80\\%$ and $\\%S = 20\\%$. Check: $0.80(-61) + 0.20(+61) = -48.8 + 12.2 = -36.6$. ✓',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student analyzes a sample of ibuprofen whose specific rotation is 40% of that of pure (S)-ibuprofen. Tap the first incorrect line.',
      lines: [
        'The rotation has the same sign as pure (S), so (S) is the major enantiomer.',
        'The enantiomeric excess is $\\dfrac{[\\alpha]_{\\text{obs}}}{[\\alpha]_{\\text{pure}}} \\times 100 = 40\\%$.',
        'An ee of 40% means the sample is 40% (S) and 60% (R).',
        'So the sample contains more of the inactive (R) form than the active (S) form.',
      ],
      errorLines: [3],
      explanation: 'Line 3 confuses ee with the percentage of the major enantiomer. ee is the **difference**: $\\%S - \\%R = 40$ and $\\%S + \\%R = 100$, so $\\%S = 70\\%$ and $\\%R = 30\\%$. The sample is 40% pure (S) plus 60% racemate. Line 4 is then wrong too: (S) is the major component, as line 1 already said. (A 40% (S) sample would have a negative ee and rotate the other way.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A chemist has racemic 2-phenylpropanoic acid. Why does adding a single enantiomer of a chiral amine make it possible to separate the two enantiomers of the acid by crystallization?',
      options: [
        { text: 'The amine converts one enantiomer of the acid into the other', why: 'Acid–base salt formation does not touch the chirality center, so it cannot convert R into S.' },
        { text: 'The two salts formed are diastereomers, which have different solubilities', correct: true, why: '(R)-acid·(R)-amine and (S)-acid·(R)-amine are not mirror images of each other, so their physical properties differ and one crystallizes first.' },
        { text: 'The two salts formed are enantiomers, which crystallize separately', why: 'Enantiomeric salts would have identical solubilities. The salts here are diastereomers because the amine is the same single enantiomer in both.' },
        { text: 'The amine destroys the (R) acid and leaves the (S) acid', why: 'Resolution with salts is non-destructive: after separation, adding strong acid releases each enantiomer of the acid intact.' },
      ],
      explanation: 'Enantiomers have identical properties in an achiral environment, so they cannot be crystallized apart directly. Pairing both with the **same** enantiomer of a chiral base makes (R,R) and (S,R) salts: diastereomers, with different solubilities. Crystallize, filter, then treat each salt with HCl to recover the free acid as a single enantiomer and the amine for reuse.',
    },
  ],
  takeaways: [
    'A molecule with $n$ chirality centers has at most $2^n$ stereoisomers; pairs with every center inverted are enantiomers, pairs with only some inverted are diastereomers.',
    'Diastereomers have different physical properties; enantiomers have identical ones except toward polarized light and other chiral things.',
    'Meso compounds have chirality centers but an internal mirror plane, so they are achiral and reduce the count (tartaric acid and 2,3-dichlorobutane: 3 stereoisomers).',
    'Fischer projections: horizontal bonds toward you, vertical away; a 180° rotation is allowed, a 90° rotation gives the enantiomer; with H horizontal, reverse the R/S reading.',
    'cis-1,2- and cis-1,3-disubstituted rings with identical groups are meso; their trans isomers are chiral; 1,4-disubstituted rings have no chirality centers.',
    'Specific rotation $[\\alpha] = \\alpha/(l\\,c)$; ee = %major − %minor = $[\\alpha]_{\\text{obs}}/[\\alpha]_{\\text{pure}} \\times 100$; racemates are resolved by converting them into separable diastereomers.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Sections 5.3 and 5.6–5.8 cover optical activity, diastereomers, meso compounds and resolution; section 25.2 has Fischer projections of sugars.' },
    { title: 'Meso compound', url: 'https://en.wikipedia.org/wiki/Meso_compound', source: 'wikipedia', note: 'Further examples, including meso compounds in rings.' },
    { title: 'Fischer projection', url: 'https://en.wikipedia.org/wiki/Fischer_projection', source: 'wikipedia', note: 'Conventions and the allowed and forbidden manipulations.' },
    { title: 'Chiral resolution', url: 'https://en.wikipedia.org/wiki/Chiral_resolution', source: 'wikipedia', note: 'Diastereomeric salts, Pasteur\'s method, chiral chromatography and kinetic resolution.' },
  ],
};
