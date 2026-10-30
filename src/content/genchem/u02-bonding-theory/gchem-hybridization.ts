import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  hybrid_sets: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 C3.4,-9 14.4,-8.5 15.6,0 C14.4,8.5 3.4,9 0,0 Z" transform="translate(80 85) rotate(-180)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C11.4,-20 47.8,-19 52,0 C47.8,19 11.4,20 0,0 Z" transform="translate(80 85) rotate(0)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C3.4,-9 14.4,-8.5 15.6,0 C14.4,8.5 3.4,9 0,0 Z" transform="translate(80 85) rotate(-360)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C11.4,-20 47.8,-19 52,0 C47.8,19 11.4,20 0,0 Z" transform="translate(80 85) rotate(-180)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><circle cx="80" cy="85" r="3" fill="currentColor"/><text x="80" y="160" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">sp</text><text x="80" y="180" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">two lobes, 180°</text><path d="M0,0 C9.7,-12 40.5,-11.4 44,0 C40.5,11.4 9.7,12 0,0 Z" transform="translate(255 85) rotate(-90)" class="f-gray s-gray" fill-opacity="0.1" stroke-width="1.4"/><path d="M0,0 C9.7,-12 40.5,-11.4 44,0 C40.5,11.4 9.7,12 0,0 Z" transform="translate(255 85) rotate(-270)" class="f-gray s-gray" fill-opacity="0.1" stroke-width="1.4"/><path d="M0,0 C3.3,-8.1 13.8,-7.7 15,0 C13.8,7.7 3.3,8.1 0,0 Z" transform="translate(255 85) rotate(-180)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C11,-18 46,-17.1 50,0 C46,17.1 11,18 0,0 Z" transform="translate(255 85) rotate(0)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C3.3,-8.1 13.8,-7.7 15,0 C13.8,7.7 3.3,8.1 0,0 Z" transform="translate(255 85) rotate(-300)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C11,-18 46,-17.1 50,0 C46,17.1 11,18 0,0 Z" transform="translate(255 85) rotate(-120)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C3.3,-8.1 13.8,-7.7 15,0 C13.8,7.7 3.3,8.1 0,0 Z" transform="translate(255 85) rotate(-420)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C11,-18 46,-17.1 50,0 C46,17.1 11,18 0,0 Z" transform="translate(255 85) rotate(-240)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><circle cx="255" cy="85" r="3" fill="currentColor"/><text x="255" y="160" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">sp²</text><text x="255" y="180" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">three at 120° + p (gray)</text><path d="M0,0 C3.3,-8.1 13.8,-7.7 15,0 C13.8,7.7 3.3,8.1 0,0 Z" transform="translate(430 82) rotate(-270)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C11,-18 46,-17.1 50,0 C46,17.1 11,18 0,0 Z" transform="translate(430 82) rotate(-90)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C3.2,-8.1 13.2,-7.7 14.4,0 C13.2,7.7 3.2,8.1 0,0 Z" transform="translate(430 82) rotate(-392)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C10.6,-18 44.2,-17.1 48,0 C44.2,17.1 10.6,18 0,0 Z" transform="translate(430 82) rotate(-212)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C3.2,-8.1 13.2,-7.7 14.4,0 C13.2,7.7 3.2,8.1 0,0 Z" transform="translate(430 82) rotate(-508)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C10.6,-18 44.2,-17.1 48,0 C44.2,17.1 10.6,18 0,0 Z" transform="translate(430 82) rotate(-328)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C2,-6.8 8.3,-6.4 9,0 C8.3,6.4 2,6.8 0,0 Z" transform="translate(430 82) rotate(-470)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C6.6,-15 27.6,-14.2 30,0 C27.6,14.2 6.6,15 0,0 Z" transform="translate(430 82) rotate(-290)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><circle cx="430" cy="82" r="3" fill="currentColor"/><text x="430" y="160" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">sp³</text><text x="430" y="180" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">four lobes, 109.5°</text><text x="260" y="16" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">blue: large lobe used for bonding · red: small back lobe (opposite phase)</text></svg>',
  pi_bonds: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 C11,-16 46,-15.2 50,0 C46,15.2 11,16 0,0 Z" transform="translate(95 125) rotate(-90)" class="f-blue s-blue" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C11,-16 46,-15.2 50,0 C46,15.2 11,16 0,0 Z" transform="translate(95 125) rotate(-270)" class="f-red s-red" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C11,-16 46,-15.2 50,0 C46,15.2 11,16 0,0 Z" transform="translate(165 125) rotate(-90)" class="f-blue s-blue" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C11,-16 46,-15.2 50,0 C46,15.2 11,16 0,0 Z" transform="translate(165 125) rotate(-270)" class="f-red s-red" fill-opacity="0.2" stroke-width="1.4"/><rect x="95" y="63" width="70" height="34" rx="14" class="f-purple" fill-opacity="0.18"/><rect x="95" y="153" width="70" height="34" rx="14" class="f-purple" fill-opacity="0.18"/><line x1="95" y1="125" x2="165" y2="125" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line x1="95" y1="125" x2="57" y2="100" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="43" y="91" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px">H</text><line x1="95" y1="125" x2="57" y2="150" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="43" y="159" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px">H</text><line x1="165" y1="125" x2="203" y2="100" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="217" y="91" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px">H</text><line x1="165" y1="125" x2="203" y2="150" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="217" y="159" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px">H</text><circle cx="95" cy="125" r="4" fill="currentColor"/><circle cx="165" cy="125" r="4" fill="currentColor"/><text x="130" y="228" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">ethylene, C₂H₄: σ + π</text><text x="130" y="248" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">all six atoms in one plane</text><text x="130" y="52" text-anchor="middle" dominant-baseline="central" style="font-size:14.0px" class="t-purple">π (above)</text><text x="205" y="185" text-anchor="middle" dominant-baseline="central" style="font-size:14.0px" class="t-purple">π (below)</text><text x="130" y="117" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px">σ</text><path d="M0,0 C10.6,-15 44.2,-14.2 48,0 C44.2,14.2 10.6,15 0,0 Z" transform="translate(345 125) rotate(-90)" class="f-blue s-blue" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C10.6,-15 44.2,-14.2 48,0 C44.2,14.2 10.6,15 0,0 Z" transform="translate(345 125) rotate(-270)" class="f-red s-red" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C7.9,-11 33.1,-10.4 36,0 C33.1,10.4 7.9,11 0,0 Z" transform="translate(345 125) rotate(-30)" class="f-teal s-teal" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C7.9,-11 33.1,-10.4 36,0 C33.1,10.4 7.9,11 0,0 Z" transform="translate(345 125) rotate(-210)" class="f-orange s-orange" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C10.6,-15 44.2,-14.2 48,0 C44.2,14.2 10.6,15 0,0 Z" transform="translate(425 125) rotate(-90)" class="f-blue s-blue" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C10.6,-15 44.2,-14.2 48,0 C44.2,14.2 10.6,15 0,0 Z" transform="translate(425 125) rotate(-270)" class="f-red s-red" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C7.9,-11 33.1,-10.4 36,0 C33.1,10.4 7.9,11 0,0 Z" transform="translate(425 125) rotate(-30)" class="f-teal s-teal" fill-opacity="0.2" stroke-width="1.4"/><path d="M0,0 C7.9,-11 33.1,-10.4 36,0 C33.1,10.4 7.9,11 0,0 Z" transform="translate(425 125) rotate(-210)" class="f-orange s-orange" fill-opacity="0.2" stroke-width="1.4"/><rect x="345" y="65" width="80" height="32" rx="14" class="f-purple" fill-opacity="0.18"/><rect x="345" y="153" width="80" height="32" rx="14" class="f-purple" fill-opacity="0.18"/><line x1="295" y1="125" x2="475" y2="125" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><text x="283" y="130" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px">H</text><text x="487" y="130" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px">H</text><circle cx="345" cy="125" r="4" fill="currentColor"/><circle cx="425" cy="125" r="4" fill="currentColor"/><text x="385" y="228" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">acetylene, C₂H₂: σ + 2π</text><text x="385" y="248" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">second π (teal/orange) is perpendicular</text></svg>',
  sigma_overlap: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="70" r="24" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><circle cx="92" cy="70" r="24" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><ellipse cx="76" cy="70" rx="9" ry="17" class="f-purple" fill-opacity="0.45"/><circle cx="60" cy="70" r="3" fill="currentColor"/><circle cx="92" cy="70" r="3" fill="currentColor"/><text x="76" y="125" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">s + s</text><text x="76" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">H₂</text><circle cx="220" cy="70" r="22" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C8.4,-15 35,-14.2 38,0 C35,14.2 8.4,15 0,0 Z" transform="translate(268 70) rotate(-180)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C8.4,-15 35,-14.2 38,0 C35,14.2 8.4,15 0,0 Z" transform="translate(268 70) rotate(-360)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><ellipse cx="238" cy="70" rx="9" ry="13" class="f-purple" fill-opacity="0.45"/><circle cx="220" cy="70" r="3" fill="currentColor"/><circle cx="268" cy="70" r="3" fill="currentColor"/><text x="245" y="125" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">s + p</text><text x="245" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">H–F, H–Cl</text><path d="M0,0 C8.4,-15 35,-14.2 38,0 C35,14.2 8.4,15 0,0 Z" transform="translate(395 70) rotate(0)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C8.4,-15 35,-14.2 38,0 C35,14.2 8.4,15 0,0 Z" transform="translate(395 70) rotate(-180)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C8.4,-15 35,-14.2 38,0 C35,14.2 8.4,15 0,0 Z" transform="translate(443 70) rotate(-180)" class="f-blue s-blue" fill-opacity="0.22" stroke-width="1.4"/><path d="M0,0 C8.4,-15 35,-14.2 38,0 C35,14.2 8.4,15 0,0 Z" transform="translate(443 70) rotate(-360)" class="f-red s-red" fill-opacity="0.22" stroke-width="1.4"/><ellipse cx="419" cy="70" rx="12" ry="11" class="f-purple" fill-opacity="0.45"/><circle cx="395" cy="70" r="3" fill="currentColor"/><circle cx="443" cy="70" r="3" fill="currentColor"/><text x="419" y="125" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">p + p (end-on)</text><text x="419" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">F–F, Cl–Cl</text><text x="260" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">purple: overlap region, where the shared pair concentrates between the nuclei</text><text x="260" y="16" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">σ bonds: overlap along the line joining the nuclei</text></svg>',
  sp2_sp_energy: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="130" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="23" y1="150" x2="23" y2="134" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="23" y1="134" x2="28" y2="140" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="23" y="170" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2s</text><rect x="50" y="60" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="63" y1="80" x2="63" y2="64" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="63" y1="64" x2="68" y2="70" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="76" y="60" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="89" y1="80" x2="89" y2="64" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="89" y1="64" x2="94" y2="70" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="102" y="60" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="115" y1="80" x2="115" y2="64" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="115" y1="64" x2="120" y2="70" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="89" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2p</text><line x1="140" y1="110" x2="154" y2="110" class="s-purple" stroke-width="2" stroke-linecap="round"/><polygon points="162,110 154,106 154,114" class="f-purple"/><rect x="172" y="84" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="182" y1="104" x2="182" y2="88" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="182" y1="88" x2="187" y2="94" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="192" y="84" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="202" y1="104" x2="202" y2="88" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="202" y1="88" x2="207" y2="94" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="212" y="84" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="222" y1="104" x2="222" y2="88" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="222" y1="88" x2="227" y2="94" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="202" y="124" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-purple">sp² ×3</text><rect x="192" y="40" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="202" y1="60" x2="202" y2="44" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="202" y1="44" x2="207" y2="50" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="218" y="52" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">p ×1</text><text x="120" y="188" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">sp²: mix s + 2p</text><rect x="275" y="130" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="288" y1="150" x2="288" y2="134" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="288" y1="134" x2="293" y2="140" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="288" y="170" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2s</text><rect x="315" y="60" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="328" y1="80" x2="328" y2="64" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="328" y1="64" x2="333" y2="70" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="341" y="60" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="354" y1="80" x2="354" y2="64" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="354" y1="64" x2="359" y2="70" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="367" y="60" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="380" y1="80" x2="380" y2="64" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="380" y1="64" x2="385" y2="70" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="354" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2p</text><line x1="405" y1="110" x2="419" y2="110" class="s-purple" stroke-width="2" stroke-linecap="round"/><polygon points="427,110 419,106 419,114" class="f-purple"/><rect x="437" y="95" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="447" y1="115" x2="447" y2="99" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="447" y1="99" x2="452" y2="105" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="457" y="95" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="467" y1="115" x2="467" y2="99" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="467" y1="99" x2="472" y2="105" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="457" y="135" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-purple">sp ×2</text><rect x="437" y="40" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="447" y1="60" x2="447" y2="44" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="447" y1="44" x2="452" y2="50" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="457" y="40" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="467" y1="60" x2="467" y2="44" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="467" y1="44" x2="472" y2="50" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="483" y="52" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">p ×2</text><text x="385" y="188" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">sp: mix s + 1p</text><line x1="262" y1="30" x2="262" y2="190" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 4"/><text x="260" y="14" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">unmixed p orbitals stay higher in energy; they will form π bonds</text></svg>',
  sp3_energy: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="30" x2="30" y2="200" class="s-gray" stroke-width="1.5" stroke-linecap="round"/><line x1="30" y1="200" x2="30" y2="31" class="s-gray" stroke-width="1.5" stroke-linecap="round"/><polygon points="30,24 26.5,31 33.5,31" class="f-gray"/><text x="18" y="115" text-anchor="middle" dominant-baseline="central" transform="rotate(-90 18 115)" class="t-gray" style="font-size:14.6px">energy</text><rect x="70" y="140" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="78" y1="160" x2="78" y2="144" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="78" y1="144" x2="83" y2="150" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="88" y1="144" x2="88" y2="160" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="88" y1="160" x2="93" y2="154" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="83" y="180" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2s</text><rect x="115" y="70" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="128" y1="90" x2="128" y2="74" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="128" y1="74" x2="133" y2="80" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="141" y="70" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="154" y1="90" x2="154" y2="74" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="154" y1="74" x2="159" y2="80" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="167" y="70" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="154" y="110" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2p</text><text x="130" y="214" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px;font-weight:600">ground state</text><line x1="215" y1="120" x2="237" y2="120" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="245,120 237,116 237,124" fill="currentColor"/><text x="230" y="102" text-anchor="middle" dominant-baseline="central" style="font-size:13.4px" class="t-gray">promote</text><rect x="260" y="140" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="273" y1="160" x2="273" y2="144" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="273" y1="144" x2="278" y2="150" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="273" y="180" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2s</text><rect x="300" y="70" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="313" y1="90" x2="313" y2="74" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="313" y1="74" x2="318" y2="80" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="326" y="70" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="339" y1="90" x2="339" y2="74" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="339" y1="74" x2="344" y2="80" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="352" y="70" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="365" y1="90" x2="365" y2="74" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="365" y1="74" x2="370" y2="80" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="339" y="110" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">2p</text><text x="320" y="214" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px;font-weight:600">"promoted"</text><line x1="395" y1="120" x2="417" y2="120" class="s-purple" stroke-width="2" stroke-linecap="round"/><polygon points="425,120 417,116 417,124" class="f-purple"/><text x="410" y="102" text-anchor="middle" dominant-baseline="central" style="font-size:13.4px" class="t-purple">mix</text><rect x="435" y="95" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="445" y1="115" x2="445" y2="99" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="445" y1="99" x2="450" y2="105" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="455" y="95" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="465" y1="115" x2="465" y2="99" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="465" y1="99" x2="470" y2="105" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="475" y="95" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="485" y1="115" x2="485" y2="99" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="485" y1="99" x2="490" y2="105" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="495" y="95" width="20" height="24" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/><line x1="505" y1="115" x2="505" y2="99" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="505" y1="99" x2="510" y2="105" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="475" y="135" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-purple">sp³ ×4</text><text x="475" y="214" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px;font-weight:600">hybridized</text><text x="275" y="16" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">carbon’s four valence electrons</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'gchem-hybridization',
  title: 'Valence Bond Theory and Hybridization',
  summary: 'Bonds as overlapping orbitals: why pure s and p orbitals cannot explain methane, how sp³, sp² and sp hybrids fix it, σ and π bonds in ethylene and acetylene, why double bonds do not rotate, and how to assign hybridization in real molecules.',
  minutes: 21,
  objectives: [
    'State the valence bond picture of a covalent bond as the overlap of two half-filled orbitals, and distinguish σ from π overlap',
    'Explain why unhybridized s and p orbitals predict the wrong geometry for CH₄, and how sp³ hybrids fix it',
    'Build sp³, sp² and sp hybrids, relate each to an electron geometry, and use the s-character–angle relation',
    'Describe the σ and π bonds in ethylene and acetylene, explain why π bonds prevent rotation, and count σ and π bonds in a molecule',
    'Assign hybridization to every atom in a larger molecule, and state the modern caveat about sp³d and sp³d²',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Bonds as overlapping orbitals',
      blocks: [
        {
          type: 'p',
          text: 'Lewis structures and VSEPR tell you **where** electrons are counted and **what shape** results, but not what a shared pair physically is. The quantum unit gave you [[orbital|orbitals]]: [[gchem-wavefunction|wavefunctions]] with definite shapes and energies. [[gchem-valence-bond-theory|Valence bond theory]] builds bonds out of them.',
        },
        {
          type: 'definition',
          term: 'Valence bond theory',
          text: 'A covalent bond forms when an orbital on one atom **overlaps** an orbital on another, and the two orbitals share a pair of electrons with opposite spins (each orbital usually brings one). The greater the overlap, the stronger the bond.',
        },
        {
          type: 'figure',
          svg: FIG.sigma_overlap,
          alt: 'Three pairs of overlapping orbitals with purple overlap regions between two nuclei. Left: two spherical s orbitals overlapping, labeled s + s, H2. Middle: an s orbital overlapping one lobe of a p orbital pointed at it, labeled s + p, H–F and H–Cl. Right: two p orbitals overlapping end to end, labeled p + p end-on, F–F and Cl–Cl.',
          caption: 'Each of these is a [[gchem-sigma-bond|σ bond]]: the overlap lies on the line between the nuclei, and the electron density is symmetric around that line, like a cylinder. Blue and red mark the two phases (signs) of a p orbital; bonding needs lobes of the **same** phase to overlap.',
        },
        {
          type: 'p',
          text: 'This is the picture behind the energy curve from Foundations: as two hydrogen atoms approach, their 1s orbitals overlap, the shared pair concentrates between the nuclei where both attract it, and the energy drops to a minimum at 74 pm. Pushing closer increases overlap but the nuclear repulsion wins.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why overlap means bonding',
          text: 'Two wavefunctions that overlap with the same sign **add** in the region between the nuclei (constructive interference), so the probability density $|\\psi|^2$ there is larger than the two atoms would give separately. Electrons in that region are attracted by both nuclei, which lowers their energy. Overlapping with **opposite** signs subtracts and leaves a node between the nuclei: that is antibonding, the subject of the molecular orbital lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'In valence bond theory, which orbitals overlap to form the bond in hydrogen chloride, $\\ce{HCl}$?',
      options: [
        { text: 'H 1s with Cl 3s', why: 'Chlorine\'s 3s orbital is full ($3s^2$), so it has no unpaired electron to share. Its half-filled orbital is a 3p.' },
        { text: 'H 1s with Cl 3p', correct: true, why: 'Cl is $[\\ce{Ne}]3s^23p^5$: one 3p orbital holds a single electron. It overlaps end-on with hydrogen\'s half-filled 1s to make a σ bond.' },
        { text: 'H 1s with Cl 2p', why: 'The 2p orbitals of Cl are core orbitals: compact, low in energy and full. Bonding uses valence orbitals.' },
        { text: 'H 2p with Cl 3p', why: 'Hydrogen\'s only occupied orbital is 1s; 2p is far higher in energy and empty.' },
      ],
      explanation: 'Look for **half-filled valence** orbitals. H has one electron in 1s; Cl has one unpaired electron in a 3p orbital. Their end-on overlap gives a σ bond. The same reasoning gives F–F (2p + 2p) and H–H (1s + 1s).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The methane problem, and hybrid orbitals',
      blocks: [
        {
          type: 'p',
          text: 'Apply the overlap idea to carbon and it fails twice. Ground-state carbon is $1s^2 2s^2 2p^2$: only **two** unpaired electrons, so it should form two bonds ($\\ce{CH2}$), at $90^\\circ$ because the p orbitals are perpendicular. Even if you "promote" one 2s electron to make four unpaired electrons ($2s^1 2p^3$), you predict three equivalent C–H bonds at $90^\\circ$ plus one different bond from the 2s orbital.',
        },
        {
          type: 'p',
          text: 'Experiment says something else: methane has **four identical** C–H bonds (109 pm, 415 kJ/mol each) pointing to the corners of a tetrahedron, $109.5^\\circ$ apart. Pure atomic orbitals cannot explain that.',
        },
        {
          type: 'definition',
          term: 'Hybrid orbitals',
          text: 'Linus Pauling\'s fix (1931): on the bonding atom, mix ("hybridize") the 2s and the three 2p orbitals into four new, equivalent [[gchem-hybrid-orbital|hybrid orbitals]], called $sp^3$. Each is $\\tfrac14$ s and $\\tfrac34$ p in character, has one large lobe and one small one, and the four point to the corners of a tetrahedron.',
        },
        {
          type: 'figure',
          svg: FIG.sp3_energy,
          alt: 'Orbital box diagram for carbon against an energy axis. Ground state: 2s box with two electrons, 2p boxes with one, one and zero electrons. Arrow labeled promote. Promoted: 2s with one electron, three 2p with one each. Purple arrow labeled mix. Hybridized: four purple sp3 boxes, each with one electron, at an energy between 2s and 2p.',
          caption: 'Four orbitals in, four orbitals out: hybridization never creates or destroys orbitals. The $sp^3$ level sits three-quarters of the way up from 2s to 2p, matching its $\\tfrac14$ s, $\\tfrac34$ p character. The energy cost of promotion is repaid by forming four bonds instead of two.',
        },
        {
          type: 'p',
          text: 'Mathematically, a hybrid is a [[linear-combination|linear combination]] of atomic orbitals, for example $h_1 = \\tfrac12(s + p_x + p_y + p_z)$, which points toward $(1,1,1)$. The other three use sign patterns that point to the other alternate cube corners. In linear-algebra terms, the four hybrids are just an orthonormal **change of basis** for the same four-dimensional space spanned by $s, p_x, p_y, p_z$.',
        },
        {
          type: 'graph',
          x: [-1.6, 2.4],
          y: [-1.6, 1.6],
          equal: true,
          xStep: 1,
          yStep: 1,
          polar: [
            { expr: 'max(0, sqrt(s) + sqrt(3(1 - s))cos(theta))', label: 'positive phase', color: 'blue' },
            { expr: 'max(0, -(sqrt(s) + sqrt(3(1 - s))cos(theta)))', label: 'negative phase', color: 'red' },
          ],
          sliders: [{ name: 's', min: 0, max: 0.5, step: 0.01, value: 0.25, label: 's-character fraction $f$' }],
          readouts: [{ label: 'angle between equivalent hybrids (degrees) $= \\arccos\\!\\big(-\\tfrac{f}{1-f}\\big) =$', expr: 'arccos(-s/(1 - s))*180/pi', digits: 1 }],
          caption: 'The angular shape of one hybrid, $\\sqrt{f}\\,s + \\sqrt{1-f}\\,p$, drawn as a polar plot. At $f = 0$ it is a pure p orbital: two equal lobes, and equivalent orbitals $90^\\circ$ apart. Raise the s-character and the front lobe grows while the back lobe shrinks. $f = 0.25$ ($sp^3$) gives $109.5^\\circ$; $f = 0.33$ ($sp^2$) gives $120^\\circ$; $f = 0.5$ ($sp$) gives $180^\\circ$.',
        },
        {
          type: 'deepdive',
          title: 'Where the angle formula comes from (orthogonality)',
          blocks: [
            {
              type: 'p',
              text: 'Write two equivalent hybrids as $h_i = \\sqrt{f}\\,s + \\sqrt{1-f}\\,p_{\\hat u_i}$, where $p_{\\hat u}$ is a p orbital pointing along the unit vector $\\hat u$. The orbitals $s$ and $p$ are orthonormal, and $\\langle p_{\\hat u_1} | p_{\\hat u_2} \\rangle = \\hat u_1 \\cdot \\hat u_2 = \\cos\\theta$ (p orbitals combine like vectors). Hybrids on the same atom must be orthogonal:',
            },
            {
              type: 'math',
              tex: '\\langle h_1 | h_2 \\rangle = f + (1 - f)\\cos\\theta = 0 \\implies \\cos\\theta = -\\frac{f}{1-f}',
              caption: 'Coulson\'s relation. More s-character means a wider angle between hybrids.',
            },
            {
              type: 'p',
              text: 'Run it backwards and a measured bond angle tells you the s-character of the bonding hybrids. That is how chemists explain water\'s $104.5^\\circ$: the O–H bonding hybrids have a little less s-character than $sp^3$, and the lone pairs a little more.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Use Coulson\'s relation $\\cos\\theta = -\\dfrac{f}{1-f}$ to find the s-character fraction $f$ of the two oxygen hybrids that form the O–H bonds in water, given the bond angle $\\theta = 104.5^\\circ$. Give two decimal places.',
      hint: 'Let $c = \\cos 104.5^\\circ \\approx -0.250$. Solve $c(1 - f) = -f$ for $f$: $f = \\dfrac{-c}{1 - c}$.',
      label: '$f =$',
      answer: '-cos(104.5pi/180)/(1 - cos(104.5pi/180))',
      answerTex: '0.20',
      tolerance: 0.005,
      explanation: '$\\cos 104.5^\\circ = -0.2504$. From $c - cf = -f$ we get $f(1 - c) = -c$, so $f = \\frac{0.2504}{1.2504} = 0.20$. The bonding hybrids are about 20% s (versus 25% for ideal $sp^3$). The s-character that the bonds give up goes into the lone-pair hybrids, which are therefore fatter and closer to the nucleus: the orbital version of "lone pairs take up more room".',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'sp² and sp hybrids',
      blocks: [
        {
          type: 'p',
          text: 'Mix fewer p orbitals and you get fewer, wider-spaced hybrids, with leftover unhybridized p orbitals. The rule that ties it all together: **the number of hybrid orbitals equals the number of electron groups** (VSEPR) on the atom.',
        },
        {
          type: 'figure',
          svg: FIG.sp2_sp_energy,
          alt: 'Two orbital box diagrams. Left, sp2: 2s and three 2p boxes each with one electron; a purple arrow leads to three purple sp2 boxes with one electron each and one blue p box higher up. Right, sp: same start; leads to two purple sp boxes and two blue p boxes higher up.',
          caption: '$sp^2$: s + two p → three hybrids, one p left over. $sp$: s + one p → two hybrids, two p left over. The leftover p orbitals are perpendicular to the hybrids.',
        },
        {
          type: 'figure',
          svg: FIG.hybrid_sets,
          alt: 'Three sets of hybrid orbitals around a central dot. sp: two large blue lobes pointing left and right with small red back lobes, 180 degrees. sp2: three blue lobes 120 degrees apart in a plane, plus a gray p orbital perpendicular to them. sp3: four blue lobes in a tetrahedral arrangement, 109.5 degrees.',
          caption: 'Each hybrid set has exactly the VSEPR geometry: VSEPR predicts the shape, hybridization describes the orbitals that make it.',
        },
        {
          type: 'table',
          headers: ['Electron groups', 'Geometry', 'Hybridization', 'Unhybridized p', 'Examples'],
          rows: [
            ['2', 'linear, $180^\\circ$', '$sp$', '2', '$\\ce{BeH2}$ (gas), C in $\\ce{CO2}$, $\\ce{HC#CH}$'],
            ['3', 'trigonal planar, $120^\\circ$', '$sp^2$', '1', '$\\ce{BF3}$, C in $\\ce{H2C=CH2}$, $\\ce{H2C=O}$'],
            ['4', 'tetrahedral, $109.5^\\circ$', '$sp^3$', '0', '$\\ce{CH4}$, N in $\\ce{NH3}$, O in $\\ce{H2O}$'],
          ],
        },
        {
          type: 'p',
          text: 'Lone pairs count as groups and sit in hybrids too. In ammonia, nitrogen is $sp^3$: three hybrids overlap with H 1s orbitals and the fourth holds the lone pair. In $\\ce{BF3}$, boron is $sp^2$ and its empty leftover p orbital is exactly where an incoming lone pair (from $\\ce{NH3}$, say) can attach.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Hybridization follows shape, not the other way round',
          text: 'Atoms do not "decide" to hybridize and then adopt a shape. The shape is what it is (measured, or predicted by VSEPR); hybridization is a description chosen to match it. That is why you **always** find the electron-group count first, then read off the hybridization.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Assign hybridizations from electron-group counts.',
      template: 'In $\\ce{BF3}$, boron is ___. The carbon in $\\ce{CO2}$ is ___. The nitrogen in $\\ce{NH4+}$ is ___. The oxygen in $\\ce{H2O}$ is ___ in the simple model.',
      blanks: [{ answers: ['$sp^2$'] }, { answers: ['$sp$'] }, { answers: ['$sp^3$'] }, { answers: ['$sp^3$'] }],
      wordBank: ['$sp$', '$sp^2$', '$sp^3$', '$sp^3$', '$sp^3d$'],
      explanation: '$\\ce{BF3}$: 3 bonds, 0 lone pairs = 3 groups → $sp^2$. $\\ce{CO2}$: carbon has 2 double bonds, and each counts as one group → 2 groups → $sp$ (its two leftover p orbitals form the two π bonds, one to each O). $\\ce{NH4+}$: 4 bonds → $sp^3$. $\\ce{H2O}$: 2 bonds + 2 lone pairs = 4 groups → $sp^3$. Count groups, never bonds-including-multiplicity.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'σ and π bonds: ethylene and acetylene',
      blocks: [
        {
          type: 'p',
          text: 'The leftover p orbitals are what make multiple bonds. In ethylene, $\\ce{H2C=CH2}$, each carbon has three groups, so it is $sp^2$. Two $sp^2$ hybrids on each carbon overlap with H 1s orbitals, and the third overlaps head-on with the other carbon\'s: five σ bonds, all in one plane. Each carbon still has one p orbital, perpendicular to that plane. Side by side, the two p orbitals overlap above and below the C–C axis.',
        },
        {
          type: 'definition',
          term: 'σ and π bonds',
          text: 'A **σ bond** has its overlap on the internuclear axis and cylindrical symmetry around it. A [[gchem-pi-bond|π bond]] comes from side-by-side overlap of parallel p orbitals; its density lies above and below the axis, with a nodal plane containing the axis. A single bond is one σ; a double bond is one σ + one π; a triple bond is one σ + two π.',
        },
        {
          type: 'figure',
          svg: FIG.pi_bonds,
          alt: 'Left: ethylene. Two carbon nuclei joined by a σ line, each with two H atoms in the same plane. Each carbon has a vertical p orbital (blue lobe up, red lobe down); purple bands connect the upper lobes (π above) and the lower lobes (π below). Right: acetylene, H–C–C–H in a straight line, with vertical p orbitals forming one π bond (purple bands) and a second set of p orbitals (teal and orange) drawn at an angle to represent the perpendicular second π bond.',
          caption: 'One π bond has **two** lobes (above and below), but it is one bond holding one electron pair. In acetylene the two π bonds are perpendicular; together they wrap the C–C axis in a cylinder of electron density.',
        },
        {
          type: 'p',
          text: 'In acetylene, $\\ce{HC#CH}$, each carbon has two groups and is $sp$: one $sp$ hybrid bonds to H, the other to the other carbon, giving a linear molecule. Each carbon keeps **two** p orbitals, and they form two π bonds at right angles to each other.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why π bonds are weaker',
          text: 'Side-by-side lobes overlap less than lobes pointing straight at each other. You saw the evidence in the last lesson: C=C (611 kJ/mol) is only 266 more than C–C (345), so a C–C π bond is worth about 266 kJ/mol versus 345 for the σ bond. The π electrons are also farther from the nuclei and more exposed, which is why reactions of alkenes and alkynes happen at the π bond.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Acrylonitrile, $\\ce{H2C=CH-C#N}$, is the monomer for acrylic fibers. Count its bonds (type the numbers).',
      template: 'Acrylonitrile has ___ σ bonds and ___ π bonds.',
      blanks: [{ answers: ['6'] }, { answers: ['3'] }],
      hint: 'Every bond between two atoms contains exactly one σ. Extra pairs are π: one in a double bond, two in a triple bond.',
      explanation: 'σ bonds: 3 C–H, plus C=C, C–C and C≡N each contribute one σ: $3 + 3 = 6$. π bonds: one from C=C and two from C≡N: 3. Rule of thumb: the number of σ bonds equals the number of atom-to-atom connections in the structure (here 6 lines, counting a multiple bond as one connection).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Why π bonds lock rotation',
      blocks: [
        {
          type: 'p',
          text: 'A σ bond is cylindrically symmetric, so twisting one end leaves the overlap unchanged: groups joined by a single bond rotate freely at room temperature. A π bond needs its two p orbitals **parallel**. Twist one carbon by an angle $\\varphi$ and the overlap falls as $\\cos\\varphi$; at $90^\\circ$ the p orbitals are perpendicular, the overlap is zero, and the π bond is broken.',
        },
        {
          type: 'graph',
          x: [0, 180],
          y: [0, 300],
          xStep: 30,
          yStep: 50,
          functions: [
            { expr: '135(1 - cos(2x*pi/180))', label: 'twisting C=C (ethylene)', color: 'red' },
            { expr: '6(1 + cos(3x*pi/180))', label: 'twisting C–C (ethane)', color: 'blue' },
          ],
          points: [{ x: 'p', y: '135(1 - cos(2p*pi/180))', color: 'red' }],
          sliders: [{ name: 'p', min: 0, max: 180, step: 1, value: 30, label: 'twist angle $\\varphi$ (degrees)' }],
          readouts: [
            { label: 'p-orbital overlap relative to flat $= \\cos\\varphi =$', expr: 'cos(p*pi/180)', digits: 2 },
            { label: 'energy cost (kJ/mol) $\\approx$', expr: '135(1 - cos(2p*pi/180))', digits: 0 },
          ],
          caption: 'Model energy (kJ/mol) versus twist angle. Rotating about the ethane single bond costs at most 12 kJ/mol, less than the thermal energy available in collisions, so it happens billions of times per second. Twisting ethylene to $90^\\circ$ costs about 270 kJ/mol (essentially breaking the π bond), so at room temperature it does not happen. At $180^\\circ$ the overlap is $-1$: the p orbitals are parallel again with the labels swapped, and the π bond is restored.',
        },
        {
          type: 'p',
          text: 'Locked rotation creates a new kind of isomer. In 2-butene, $\\ce{CH3CH=CHCH3}$, the two methyl groups can be on the same side of the double bond (**cis**) or opposite sides (**trans**). These are different compounds with different properties (boiling points $3.7\\ ^\\circ\\text{C}$ and $0.9\\ ^\\circ\\text{C}$), and they do not interconvert on the shelf. These [[gchem-cis-trans-isomers|cis–trans isomers]] are a major topic in organic chemistry.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Your eyes run on this',
          text: 'Vision starts when a photon breaks the π bond in 11-cis-retinal for an instant. The molecule twists to the trans form and the π bond re-forms, a shape change that triggers the nerve signal. A photon can supply the roughly 270 kJ/mol a thermal collision cannot; the rod cells responsible for night vision rely on exactly this switch.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Rotating one end of a C=C double bond by $90^\\circ$ breaks both the σ and the π bond, which is why it does not happen at room temperature.',
      answer: false,
      explanation: 'Only the π bond breaks. The σ bond lies along the axis and is cylindrically symmetric, so twisting leaves its overlap unchanged. The π overlap goes as $\\cos\\varphi$ and vanishes at $90^\\circ$. The cost, about 270 kJ/mol, is roughly the π bond energy, far more than molecular collisions supply at room temperature.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Larger molecules, and the sp³d question',
      blocks: [
        {
          type: 'p',
          text: 'In a molecule with many atoms, hybridization is assigned **atom by atom**, each from its own electron-group count. A useful shortcut for C, N and O: an atom with only single bonds is $sp^3$; one double bond makes it $sp^2$; a triple bond or two double bonds makes it $sp$.',
        },
        {
          type: 'derivation',
          title: 'Glycine, $\\ce{H2N-CH2-COOH}$, the simplest amino acid',
          steps: [
            { tex: '\\ce{N}:\\ 3\\ \\text{bonds} + 1\\ \\text{lone pair} = 4 \\implies sp^3', why: 'The amino nitrogen is like ammonia with one H replaced.' },
            { tex: '\\ce{CH2}\\ \\text{carbon}:\\ 4\\ \\text{single bonds} \\implies sp^3', why: 'Bonds to N, two H and the carboxyl carbon; tetrahedral.' },
            { tex: '\\ce{C}(=\\ce{O})\\ \\text{carbon}:\\ 3\\ \\text{groups} \\implies sp^2', why: 'Bonds to C, to =O and to –OH. The double bond counts as one group. Its leftover p orbital makes the C=O π bond.' },
            { tex: '=\\!\\ce{O}:\\ 1\\ \\text{bond} + 2\\ \\text{lone pairs} = 3 \\implies sp^2', why: 'Its p orbital is the other half of the π bond.' },
            { tex: '\\ce{-OH}\\ \\text{oxygen}:\\ 2\\ \\text{bonds} + 2\\ \\text{lone pairs} = 4 \\implies sp^3', why: 'In the simple model. (Because one of its lone pairs is delocalized toward C=O, many chemists treat it as $sp^2$; organic chemistry revisits this.)' },
            { tex: '\\sigma = 2 + 1 + 2 + 1 + 1 + 1 + 1 = 9,\\quad \\pi = 1', why: 'N–H ×2, N–C, C–H ×2, C–C, C=O (σ part), C–O, O–H; one π in C=O.' },
          ],
          result: 'Two $sp^3$ heavy atoms in the backbone, a flat $sp^2$ carboxyl group, 9 σ bonds and 1 π bond. Proteins are long chains of units like this.',
        },
        {
          type: 'heading',
          text: 'What about five and six groups?',
        },
        {
          type: 'p',
          text: 'Older textbooks extend the scheme: five groups (trigonal bipyramidal) → $sp^3d$, six groups (octahedral) → $sp^3d^2$, using d orbitals of the central atom. You will still see these labels, and many courses expect them as names for the geometry.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The modern caveat',
          text: 'For main-group atoms like P, S, Cl and Xe, the valence d orbitals (3d, 4d…) are much higher in energy than the s and p, and calculations show they contribute very little to bonding in $\\ce{PCl5}$, $\\ce{SF6}$ or $\\ce{XeF4}$. The better description is the one from the formal-charge lesson: very polar bonds, with electron density delocalized onto the outer atoms (three-center four-electron bonds). Use $sp^3d$ and $sp^3d^2$ as **labels** for the geometries, not as a literal account of the orbitals. (Transition metals, which really do have valence d orbitals, are a different story; the coordination chemistry lesson covers them.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'In acrylonitrile, $\\ce{H2C=CH-C#N}$, how many atoms are $sp$-hybridized?',
      hint: 'Check each carbon and the nitrogen. Count electron groups: a triple bond is one group.',
      label: 'number of $sp$ atoms $=$',
      answer: '2',
      explanation: 'C1 ($\\ce{H2C=}$): 3 groups, $sp^2$. C2 ($\\ce{=CH-}$): 3 groups, $sp^2$. C3 ($\\ce{-C#}$): 2 groups (one single bond, one triple bond), $sp$. N: triple bond + lone pair = 2 groups, $sp$. So 2 atoms are $sp$, and the C–C≡N unit is linear, while the $\\ce{H2C=CH-}$ end is flat with $120^\\circ$ angles.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student assigns the hybridization of carbon in carbon dioxide, $\\ce{O=C=O}$. Tap the first line that is wrong.',
      lines: [
        'Carbon has no lone pairs in $\\ce{O=C=O}$.',
        'Carbon forms two double bonds, which contain four shared pairs in total.',
        'So carbon has 4 electron groups.',
        'Four groups means $sp^3$ hybridization and a tetrahedral arrangement.',
      ],
      errorLines: [3],
      explanation: 'Each double bond counts as **one** electron group, however many pairs it contains. Carbon has 2 groups, so it is $sp$ and $\\ce{CO2}$ is linear (as it must be: it has no dipole). Carbon\'s two unhybridized p orbitals form the two π bonds, one with each oxygen, in perpendicular planes, just as in acetylene.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Which statement about hybridization is correct?',
      options: [
        { text: 'An $sp^2$ carbon has one unhybridized p orbital, which can form a π bond.', correct: true, why: 's + two p make three $sp^2$ hybrids, leaving one p orbital perpendicular to their plane: the π orbital of ethylene and formaldehyde.' },
        { text: 'Hybridization creates extra orbitals, which is why carbon can form four bonds instead of two.', why: 'The count is conserved: four atomic orbitals in, four hybrids out. Carbon forms four bonds because it has four valence electrons that can be unpaired.' },
        { text: 'A carbon with a triple bond is $sp^3$, because a triple bond uses three of its orbitals.', why: 'A triple bond is one σ (from a hybrid) plus two π (from unhybridized p orbitals). A triply bonded carbon has 2 groups and is $sp$.' },
        { text: 'The s-character of $sp$ hybrids is 25%.', why: '$sp$ mixes one s with one p: 50% s. It is $sp^3$ that is 25% s.' },
      ],
      explanation: 'The essentials: orbitals are conserved; the number of hybrids equals the number of electron groups; σ bonds and lone pairs use hybrids; π bonds use the leftover p orbitals. More s-character ($sp$ 50%, $sp^2$ 33%, $sp^3$ 25%) means wider angles and electrons held closer to the nucleus.',
    },
  ],
  takeaways: [
    'Valence bond theory: a bond is the overlap of two half-filled orbitals sharing a spin-paired electron pair; more overlap means a stronger bond.',
    'Pure s and p orbitals predict 90° bonds for carbon; methane\'s four equal bonds at 109.5° require sp³ hybrids (¼ s, ¾ p).',
    'Number of hybrids = number of electron groups: 2 → sp (180°), 3 → sp² (120°), 4 → sp³ (109.5°); more s-character means a wider angle ($\\cos\\theta = -f/(1-f)$).',
    'σ bonds overlap on the axis (from hybrids or s orbitals); π bonds overlap side by side (from leftover p orbitals). Double = σ + π; triple = σ + 2π.',
    'π overlap needs parallel p orbitals, so twisting a double bond costs ~270 kJ/mol: no rotation, and cis–trans isomers exist.',
    'Assign hybridization atom by atom from group counts; sp³d and sp³d² are labels for 5- and 6-group geometries, not evidence of d-orbital bonding in main-group compounds.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 8: Advanced Theories of Covalent Bonding',
      url: 'https://openstax.org/books/chemistry-2e/pages/8-introduction',
      source: 'openstax',
      note: 'Sections 8.1–8.3 cover valence bond theory, hybrid orbitals and multiple bonds, with orbital pictures of ethylene and acetylene.',
    },
    {
      title: 'Wikipedia — Orbital hybridisation',
      url: 'https://en.wikipedia.org/wiki/Orbital_hybridisation',
      source: 'wikipedia',
      note: 'History of Pauling\'s idea, the hybrid formulas, Bent\'s rule (s-character and bond angles) and the debate about hypervalent molecules.',
    },
    {
      title: 'Wikipedia — Cis–trans isomerism',
      url: 'https://en.wikipedia.org/wiki/Cis%E2%80%93trans_isomerism',
      source: 'wikipedia',
      note: 'Examples of cis and trans isomers with their different physical properties, including 2-butene.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The chemical bonds unit includes short videos on sp³, sp² and sp hybridization and on σ and π bonds.',
    },
  ],
};
