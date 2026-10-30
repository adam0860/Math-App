import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_BLOCKS = `<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg">
<text x="37.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">1</text>
<text x="63.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">2</text>
<text x="89.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">3</text>
<text x="323.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">12</text>
<text x="349.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">13</text>
<text x="375.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">14</text>
<text x="401.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">15</text>
<text x="427.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">16</text>
<text x="453.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">17</text>
<text x="479.0" y="26" text-anchor="middle" class="t-gray" style="font-size:12px">18</text>
<text x="16" y="52" text-anchor="middle" class="t-gray" style="font-size:12px">1</text>
<text x="16" y="78" text-anchor="middle" class="t-gray" style="font-size:12px">2</text>
<text x="16" y="104" text-anchor="middle" class="t-gray" style="font-size:12px">3</text>
<text x="16" y="130" text-anchor="middle" class="t-gray" style="font-size:12px">4</text>
<text x="16" y="156" text-anchor="middle" class="t-gray" style="font-size:12px">5</text>
<text x="16" y="182" text-anchor="middle" class="t-gray" style="font-size:12px">6</text>
<text x="16" y="208" text-anchor="middle" class="t-gray" style="font-size:12px">7</text>
<rect x="24" y="34" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="34" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="24" y="60" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="50" y="60" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="60" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="60" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="60" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="60" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="60" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="60" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="24" y="86" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="50" y="86" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="86" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="86" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="86" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="86" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="86" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="86" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="24" y="112" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="50" y="112" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="76" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="112" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="112" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="112" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="112" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="112" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="112" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="112" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="24" y="138" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="50" y="138" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="76" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="138" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="138" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="138" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="138" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="138" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="138" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="138" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="24" y="164" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="50" y="164" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="76" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="164" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="164" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="164" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="164" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="164" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="164" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="164" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="24" y="190" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="50" y="190" width="26" height="26" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="76" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="190" width="26" height="26" class="f-green" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="190" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="190" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="190" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="190" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="190" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="190" width="26" height="26" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="230" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="256" width="26" height="26" class="f-purple" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="52" text-anchor="middle" font-weight="700">1s</text>
<text x="479.0" y="52" text-anchor="middle" font-weight="700">1s</text>
<text x="37.0" y="78" text-anchor="middle" font-weight="700">2s</text>
<text x="401.0" y="78" text-anchor="middle" font-weight="700">2p</text>
<text x="37.0" y="104" text-anchor="middle" font-weight="700">3s</text>
<text x="401.0" y="104" text-anchor="middle" font-weight="700">3p</text>
<text x="37.0" y="130" text-anchor="middle" font-weight="700">4s</text>
<text x="401.0" y="130" text-anchor="middle" font-weight="700">4p</text>
<text x="37.0" y="156" text-anchor="middle" font-weight="700">5s</text>
<text x="401.0" y="156" text-anchor="middle" font-weight="700">5p</text>
<text x="37.0" y="182" text-anchor="middle" font-weight="700">6s</text>
<text x="401.0" y="182" text-anchor="middle" font-weight="700">6p</text>
<text x="37.0" y="208" text-anchor="middle" font-weight="700">7s</text>
<text x="401.0" y="208" text-anchor="middle" font-weight="700">7p</text>
<text x="193.0" y="130" text-anchor="middle" font-weight="700">3d</text>
<text x="193.0" y="156" text-anchor="middle" font-weight="700">4d</text>
<text x="193.0" y="182" text-anchor="middle" font-weight="700">5d</text>
<text x="193.0" y="208" text-anchor="middle" font-weight="700">6d</text>
<text x="271.0" y="248" text-anchor="middle" font-weight="700">4f</text>
<text x="271.0" y="274" text-anchor="middle" font-weight="700">5f</text>
<text x="96" y="248" text-anchor="end" class="t-gray" style="font-size:12px">period 6</text>
<text x="96" y="274" text-anchor="end" class="t-gray" style="font-size:12px">period 7</text>
<rect x="34" y="299" width="16" height="16" class="f-blue" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.35"/>
<text x="56" y="312">s-block</text>
<rect x="154" y="299" width="16" height="16" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.35"/>
<text x="176" y="312">p-block</text>
<rect x="274" y="299" width="16" height="16" class="f-green" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.35"/>
<text x="296" y="312">d-block</text>
<rect x="394" y="299" width="16" height="16" class="f-purple" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.35"/>
<text x="416" y="312">f-block</text>
</svg>`;
const FIG_METALS = `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg">
<rect x="24" y="34" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="52" text-anchor="middle" style="font-size:13px">H</text>
<rect x="466" y="34" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="479.0" y="52" text-anchor="middle" style="font-size:13px">He</text>
<rect x="24" y="60" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="78" text-anchor="middle" style="font-size:13px">Li</text>
<rect x="50" y="60" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="63.0" y="78" text-anchor="middle" style="font-size:13px">Be</text>
<rect x="336" y="60" width="26" height="26" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="349.0" y="78" text-anchor="middle" style="font-size:13px">B</text>
<rect x="362" y="60" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="375.0" y="78" text-anchor="middle" style="font-size:13px">C</text>
<rect x="388" y="60" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="401.0" y="78" text-anchor="middle" style="font-size:13px">N</text>
<rect x="414" y="60" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="427.0" y="78" text-anchor="middle" style="font-size:13px">O</text>
<rect x="440" y="60" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="453.0" y="78" text-anchor="middle" style="font-size:13px">F</text>
<rect x="466" y="60" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="479.0" y="78" text-anchor="middle" style="font-size:13px">Ne</text>
<rect x="24" y="86" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="104" text-anchor="middle" style="font-size:13px">Na</text>
<rect x="50" y="86" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="63.0" y="104" text-anchor="middle" style="font-size:13px">Mg</text>
<rect x="336" y="86" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="349.0" y="104" text-anchor="middle" style="font-size:13px">Al</text>
<rect x="362" y="86" width="26" height="26" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="375.0" y="104" text-anchor="middle" style="font-size:13px">Si</text>
<rect x="388" y="86" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="401.0" y="104" text-anchor="middle" style="font-size:13px">P</text>
<rect x="414" y="86" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="427.0" y="104" text-anchor="middle" style="font-size:13px">S</text>
<rect x="440" y="86" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="453.0" y="104" text-anchor="middle" style="font-size:13px">Cl</text>
<rect x="466" y="86" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="479.0" y="104" text-anchor="middle" style="font-size:13px">Ar</text>
<rect x="24" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="130" text-anchor="middle" style="font-size:13px">K</text>
<rect x="50" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="63.0" y="130" text-anchor="middle" style="font-size:13px">Ca</text>
<rect x="76" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="112" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="349.0" y="130" text-anchor="middle" style="font-size:13px">Ga</text>
<rect x="362" y="112" width="26" height="26" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="375.0" y="130" text-anchor="middle" style="font-size:13px">Ge</text>
<rect x="388" y="112" width="26" height="26" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="401.0" y="130" text-anchor="middle" style="font-size:13px">As</text>
<rect x="414" y="112" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="427.0" y="130" text-anchor="middle" style="font-size:13px">Se</text>
<rect x="440" y="112" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="453.0" y="130" text-anchor="middle" style="font-size:13px">Br</text>
<rect x="466" y="112" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="479.0" y="130" text-anchor="middle" style="font-size:13px">Kr</text>
<rect x="24" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="156" text-anchor="middle" style="font-size:13px">Rb</text>
<rect x="50" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="63.0" y="156" text-anchor="middle" style="font-size:13px">Sr</text>
<rect x="76" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="349.0" y="156" text-anchor="middle" style="font-size:13px">In</text>
<rect x="362" y="138" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="375.0" y="156" text-anchor="middle" style="font-size:13px">Sn</text>
<rect x="388" y="138" width="26" height="26" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="401.0" y="156" text-anchor="middle" style="font-size:13px">Sb</text>
<rect x="414" y="138" width="26" height="26" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="427.0" y="156" text-anchor="middle" style="font-size:13px">Te</text>
<rect x="440" y="138" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="453.0" y="156" text-anchor="middle" style="font-size:13px">I</text>
<rect x="466" y="138" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="479.0" y="156" text-anchor="middle" style="font-size:13px">Xe</text>
<rect x="24" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="182" text-anchor="middle" style="font-size:13px">Cs</text>
<rect x="50" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="63.0" y="182" text-anchor="middle" style="font-size:13px">Ba</text>
<rect x="76" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="349.0" y="182" text-anchor="middle" style="font-size:13px">Tl</text>
<rect x="362" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="375.0" y="182" text-anchor="middle" style="font-size:13px">Pb</text>
<rect x="388" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="401.0" y="182" text-anchor="middle" style="font-size:13px">Bi</text>
<rect x="414" y="164" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="427.0" y="182" text-anchor="middle" style="font-size:13px">Po</text>
<rect x="440" y="164" width="26" height="26" class="f-green" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="453.0" y="182" text-anchor="middle" style="font-size:13px">At</text>
<rect x="466" y="164" width="26" height="26" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="479.0" y="182" text-anchor="middle" style="font-size:13px">Rn</text>
<rect x="24" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="37.0" y="208" text-anchor="middle" style="font-size:13px">Fr</text>
<rect x="50" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<text x="63.0" y="208" text-anchor="middle" style="font-size:13px">Ra</text>
<rect x="76" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="102" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="128" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="154" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="180" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="206" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="232" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="258" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="284" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="310" y="190" width="26" height="26" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="336" y="190" width="26" height="26" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="362" y="190" width="26" height="26" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="388" y="190" width="26" height="26" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="414" y="190" width="26" height="26" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="440" y="190" width="26" height="26" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.35"/>
<rect x="466" y="190" width="26" height="26" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.35"/>
<path d="M336,60 V86 H362 V112 H388 V138 H414 V164 H440 V190" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="206" y="104" text-anchor="middle" class="t-blue" font-weight="700">metals</text>
<rect x="34" y="233" width="16" height="16" class="f-blue" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.35"/>
<text x="56" y="246">metals</text>
<rect x="174" y="233" width="16" height="16" class="f-green" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.35"/>
<text x="196" y="246">metalloids</text>
<rect x="314" y="233" width="16" height="16" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.35"/>
<text x="336" y="246">nonmetals</text>
<text x="24" y="272" class="t-gray" style="font-size:13px">Bold line: the “staircase”. Faded cells (113–118): too short-lived to classify.</text>
</svg>`;
const FIG_ZEFF = `<svg viewBox="0 0 520 316" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="16" r="8" class="f-gray" fill-opacity="0.3"/><circle cx="150" cy="16" r="8" fill="none" class="s-gray" stroke-dasharray="3 3"/>
<text x="164" y="21" class="t-gray">10 core electrons (n = 1 and n = 2)</text>
<circle cx="130" cy="136" r="96" fill="none" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="130" cy="136" r="44" class="f-gray" fill-opacity="0.3"/>
<circle cx="130" cy="136" r="44" fill="none" class="s-gray" stroke-dasharray="3 3"/>
<circle cx="130" cy="136" r="17" class="f-red s-red" fill-opacity="0.25"/>
<text x="130" y="141" text-anchor="middle" font-weight="700">+11</text>
<circle cx="197.9" cy="68.1" r="5" class="f-orange"/>
<circle cx="395" cy="136" r="68" fill="none" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="395" cy="136" r="44" class="f-gray" fill-opacity="0.3"/>
<circle cx="395" cy="136" r="44" fill="none" class="s-gray" stroke-dasharray="3 3"/>
<circle cx="395" cy="136" r="17" class="f-red s-red" fill-opacity="0.25"/>
<text x="395" y="141" text-anchor="middle" font-weight="700">+17</text>
<circle cx="395.0" cy="68.0" r="5" class="f-orange"/>
<circle cx="448.2" cy="93.6" r="5" class="f-orange"/>
<circle cx="461.3" cy="151.1" r="5" class="f-orange"/>
<circle cx="424.5" cy="197.3" r="5" class="f-orange"/>
<circle cx="365.5" cy="197.3" r="5" class="f-orange"/>
<circle cx="328.7" cy="151.1" r="5" class="f-orange"/>
<circle cx="341.8" cy="93.6" r="5" class="f-orange"/>
<text x="130" y="264" text-anchor="middle" font-weight="700">Na: 1 valence e⁻ in n = 3</text>
<text x="130" y="290" text-anchor="middle">Z<tspan dy="4" style="font-size:11px">eff</tspan><tspan dy="-4"> ≈</tspan> 11 − 10 = +1</text>
<text x="395" y="264" text-anchor="middle" font-weight="700">Cl: 7 valence e⁻ in n = 3</text>
<text x="395" y="290" text-anchor="middle">Z<tspan dy="4" style="font-size:11px">eff</tspan><tspan dy="-4"> ≈</tspan> 17 − 10 = +7</text>
<text x="395" y="238" text-anchor="middle" class="t-gray" style="font-size:13px">stronger pull → smaller atom</text>
</svg>`;
const FIG_RADIUS = `<svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="pt-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="f-teal"/></marker></defs>
<circle cx="46" cy="50" r="18.2" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="46" y="55" text-anchor="middle">Li</text>
<text x="72" y="55">152</text>
<circle cx="46" cy="124" r="22.3" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="46" y="129" text-anchor="middle">Na</text>
<circle cx="46" cy="200" r="27.2" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="46" y="205" text-anchor="middle">K</text>
<text x="81" y="205">227</text>
<circle cx="46" cy="276" r="29.8" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="46" y="281" text-anchor="middle">Rb</text>
<text x="84" y="281">248</text>
<circle cx="46" cy="356" r="31.8" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="46" y="361" text-anchor="middle">Cs</text>
<text x="86" y="361">265</text>
<text x="46" y="160" text-anchor="middle" class="t-gray">186</text>
<circle cx="128" cy="124" r="19.2" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="128" y="129" text-anchor="middle">Mg</text>
<text x="128" y="160" text-anchor="middle" class="t-gray">160</text>
<circle cx="198" cy="124" r="17.2" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="198" y="129" text-anchor="middle">Al</text>
<text x="198" y="160" text-anchor="middle" class="t-gray">143</text>
<circle cx="262" cy="124" r="14.0" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="262" y="129" text-anchor="middle">Si</text>
<text x="262" y="160" text-anchor="middle" class="t-gray">117</text>
<circle cx="322" cy="124" r="13.2" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="322" y="129" text-anchor="middle">P</text>
<text x="322" y="160" text-anchor="middle" class="t-gray">110</text>
<circle cx="380" cy="124" r="12.5" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="380" y="129" text-anchor="middle">S</text>
<text x="380" y="160" text-anchor="middle" class="t-gray">104</text>
<circle cx="436" cy="124" r="11.9" class="f-blue s-blue" fill-opacity="0.18"/>
<text x="436" y="129" text-anchor="middle">Cl</text>
<text x="436" y="160" text-anchor="middle" class="t-gray">99</text>
<line x1="128" y1="76" x2="450" y2="76" class="s-teal" stroke-width="2.5" marker-end="url(#pt-ar)"/>
<text x="128" y="64" class="t-teal">across period 3: radius shrinks</text>
<line x1="150" y1="196" x2="150" y2="350" class="s-teal" stroke-width="2.5" marker-end="url(#pt-ar)"/>
<text x="164" y="270" class="t-teal">down group 1:</text>
<text x="164" y="290" class="t-teal">radius grows</text>
<text x="500" y="390" text-anchor="end" class="t-gray">radii in pm, circles to scale</text>
</svg>`;
const FIG_TRENDS = `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="pt-ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="f-teal"/></marker><marker id="pt-ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="f-purple"/></marker></defs>
<path d="M48,78 L59,78 L59,93 L70,93 L70,123 L180,123 L180,93 L235,93 L235,78 L246,78 L246,183 L48,183 Z" class="f-gray s-gray" fill-opacity="0.15"/>
<line x1="246" y1="64" x2="48" y2="64" class="s-teal" stroke-width="2.5" marker-end="url(#pt-ar2)"/>
<line x1="36" y1="78" x2="36" y2="183" class="s-teal" stroke-width="2.5" marker-end="url(#pt-ar2)"/>
<circle cx="54" cy="175" r="6" class="f-teal"/>
<text x="147.0" y="211" text-anchor="middle" class="t-teal">largest: bottom left (Cs, Fr)</text>
<text x="147.0" y="54" text-anchor="middle" class="t-teal">increases</text>
<text x="147.0" y="20" text-anchor="middle" font-weight="700" style="font-size:14px">Atomic radius</text>
<path d="M278,78 L289,78 L289,93 L300,93 L300,123 L410,123 L410,93 L465,93 L465,78 L476,78 L476,183 L278,183 Z" class="f-gray s-gray" fill-opacity="0.15"/>
<line x1="278" y1="64" x2="476" y2="64" class="s-purple" stroke-width="2.5" marker-end="url(#pt-ar3)"/>
<line x1="488" y1="183" x2="488" y2="78" class="s-purple" stroke-width="2.5" marker-end="url(#pt-ar3)"/>
<circle cx="459" cy="100" r="6" class="f-purple"/>
<text x="377.0" y="211" text-anchor="middle" class="t-purple">highest: top right (F, He)</text>
<text x="377.0" y="54" text-anchor="middle" class="t-purple">increases</text>
<text x="377.0" y="20" text-anchor="middle" font-weight="700" style="font-size:14px">Ionization energy &amp; electronegativity</text>
<text x="18" y="130" text-anchor="middle" class="t-teal" transform="rotate(-90 18 130)">increases</text>
<text x="508" y="130" text-anchor="middle" class="t-purple" transform="rotate(-90 508 130)">increases</text>
</svg>`;
const FIG_IONS = `<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="pt-ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<circle cx="62" cy="80" r="31.6" class="f-blue s-blue" fill-opacity="0.2"/>
<text x="62" y="85" text-anchor="middle" font-weight="700">Na</text>
<text x="62" y="134" text-anchor="middle" class="t-gray">186 pm</text>
<circle cx="190" cy="80" r="17.3" class="f-blue s-blue" fill-opacity="0.2"/>
<text x="190" y="85" text-anchor="middle" font-weight="700">Na⁺</text>
<text x="190" y="134" text-anchor="middle" class="t-gray">102 pm</text>
<line x1="100" y1="80" x2="152" y2="80" stroke="currentColor" stroke-width="1.5" marker-end="url(#pt-ar4)"/>
<text x="126.0" y="70" text-anchor="middle" style="font-size:13px">lose 1 e⁻</text>
<circle cx="330" cy="80" r="16.8" class="f-orange s-orange" fill-opacity="0.2"/>
<text x="330" y="85" text-anchor="middle" font-weight="700">Cl</text>
<text x="330" y="134" text-anchor="middle" class="t-gray">99 pm</text>
<circle cx="452" cy="80" r="30.8" class="f-orange s-orange" fill-opacity="0.2"/>
<text x="452" y="85" text-anchor="middle" font-weight="700">Cl⁻</text>
<text x="452" y="134" text-anchor="middle" class="t-gray">181 pm</text>
<line x1="368" y1="80" x2="414" y2="80" stroke="currentColor" stroke-width="1.5" marker-end="url(#pt-ar4)"/>
<text x="391.0" y="70" text-anchor="middle" style="font-size:13px">gain 1 e⁻</text>
<text x="126" y="170" text-anchor="middle">loses its whole n = 3 shell</text>
<text x="126" y="190" text-anchor="middle">11 p⁺ now pull only 10 e⁻</text>
<text x="391" y="170" text-anchor="middle">same 17 p⁺, one more e⁻</text>
<text x="391" y="190" text-anchor="middle">more repulsion: cloud swells</text>
</svg>`;

export const lesson: Lesson = {
  id: 'chem-periodic-trends',
  title: 'The Periodic Table and Its Trends',
  summary: 'Why the table has the shape it does, the main element families, and the reasons behind the trends in atomic size, ionization energy, electronegativity and reactivity.',
  minutes: 22,
  objectives: [
    'Locate groups, periods and the s, p, d and f blocks, and connect each block to the sublevel being filled',
    'Classify elements as metals, nonmetals or metalloids and name the main families',
    'Estimate effective nuclear charge and use it, with shell number, to explain the trends in atomic radius, ionization energy and electronegativity',
    'Use successive ionization energies to find the number of valence electrons',
    'Compare the sizes of atoms and their ions, and predict relative reactivity from position in the table',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'How the table is organized',
      blocks: [
        {
          type: 'p',
          text: 'The [[periodic-table]] lists the elements in order of atomic number $Z$, in rows that break wherever a new shell starts. Each row is a **period** ([[periodic-period]]): period $n$ begins as electrons enter the $ns$ sublevel. Each column is a **[[group]]** (or family), numbered 1 to 18. Elements in a group have the same valence-electron arrangement, so they behave alike.',
        },
        {
          type: 'figure',
          svg: FIG_BLOCKS,
          alt: 'An outline periodic table with 18 groups and 7 periods. Groups 1 and 2 (plus helium) are the s-block, labelled 1s to 7s. Groups 13 to 18 are the p-block, labelled 2p to 7p. Groups 3 to 12 in periods 4 to 7 are the d-block, labelled 3d to 6d. Two separate rows below, belonging to periods 6 and 7, are the f-block, labelled 4f and 5f.',
          caption: 'The table is the filling order drawn as a map. Each block is as wide as its sublevel holds electrons: $s$ 2, $p$ 6, $d$ 10, $f$ 14. Notice the $d$-block lags one shell behind ($3d$ sits in period 4), exactly as the Aufbau order says. The $f$-block belongs inside periods 6 and 7 and is pulled out only to keep the table narrow.',
        },
        {
          type: 'p',
          text: 'This makes configurations readable straight off the table. Walk along the rows up to an element, collecting a sublevel label for each block you cross. Chlorine (period 3, fifth column of the $p$-block) is $[\\text{Ne}]\\,3s^2\\,3p^5$. Iron (period 4, sixth column of the $d$-block) is $[\\text{Ar}]\\,4s^2\\,3d^6$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Mendeleev\'s gaps',
          text: 'Dmitri Mendeleev published his table in 1869, before anyone knew about electrons, arranging elements by mass and by chemical behavior. He left gaps and predicted the missing elements. For "eka-silicon" he predicted an atomic mass near 72 and a density near $5.5\\ \\text{g/cm}^3$; germanium, found in 1886, has $72.6$ and $5.32$. Today we order by $Z$, which also explains the few places where Mendeleev had to break mass order to keep families together (tellurium, $127.6$, before iodine, $126.9$).',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'How many elements are in period 4 (potassium through krypton)? Use the sublevels that fill in that row.',
      hint: 'Period 4 fills $4s$, then $3d$, then $4p$.',
      answer: '18',
      label: 'elements:',
      explanation: 'Period 4 fills $4s$ (2 electrons), $3d$ (10) and $4p$ (6), and each new electron is a new element: $2 + 10 + 6 = 18$. The same reasoning gives the other period lengths: 2, 8, 8, 18, 18, 32, 32. Periods 2 and 3 have only 8 because no $d$ sublevel fills there.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Metals, nonmetals, metalloids and the main families',
      blocks: [
        {
          type: 'p',
          text: 'A staircase line running from boron down to astatine splits the table. To its left are the [[metal|metals]], about three quarters of all elements: shiny, malleable, good conductors of heat and electricity, and inclined to **lose** electrons. To its right are the [[nonmetal|nonmetals]]: dull, brittle or gaseous, poor conductors, inclined to **gain** or share electrons. Hugging the line are the [[metalloid|metalloids]], with properties in between.',
        },
        {
          type: 'figure',
          svg: FIG_METALS,
          alt: 'A periodic table with main-group symbols. Metals (blue) fill the left side and the whole middle block. Nonmetals (orange) are hydrogen and the upper right: helium, carbon, nitrogen, oxygen, fluorine, neon, phosphorus, sulfur, chlorine, argon, selenium, bromine, krypton, iodine, xenon, radon. Metalloids (green) boron, silicon, germanium, arsenic, antimony, tellurium and astatine sit along a bold staircase line.',
          caption: 'Hydrogen sits above group 1 but is a nonmetal. The metalloids silicon and germanium are semiconductors: every processor running your code is built on that in-between behavior.',
        },
        {
          type: 'table',
          headers: ['Family', 'Valence e⁻', 'Behavior and examples'],
          rows: [
            ['[[chem-alkali-metals|Alkali metals]] (group 1)', '$1$ ($ns^1$)', 'Soft, very reactive metals that form $1+$ ions and react with water; stored under oil. Na, K'],
            ['[[chem-alkaline-earth-metals|Alkaline earth metals]] (group 2)', '$2$ ($ns^2$)', 'Reactive metals that form $2+$ ions. Mg burns brilliantly in flares; Ca is in bone and concrete'],
            ['[[chem-transition-metals|Transition metals]] (groups 3–12)', 'varies ($d$-block)', 'Hard, strong, conductive metals with colored compounds; many are catalysts. Fe, Cu, Ti, Au'],
            ['[[chem-halogens|Halogens]] (group 17)', '$7$ ($ns^2 np^5$)', 'Very reactive nonmetals made of pairs ($\\ce{F2}$, $\\ce{Cl2}$, $\\ce{Br2}$, $\\ce{I2}$) that form $1-$ ions. Chlorine bleach is used for decontamination'],
            ['[[chem-noble-gases|Noble gases]] (group 18)', '$8$ (He: $2$)', 'Almost unreactive gases. Ar shields welds, He goes into deep-diving gas mixes, Ne glows in signs'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why families share personalities',
          text: 'Every alkali metal has a single $s$ electron outside a noble-gas core, and every halogen is one electron short of one. Since chemistry happens at the valence shell, the same valence arrangement means the same kind of reactions. What changes down a family is the **size** of the atom, and that tunes *how vigorously* the reaction goes, as you will see below.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'An element is a soft, shiny metal that is stored under oil, reacts vigorously with water, and forms ions with a $1+$ charge. Which family is it in?',
      options: [
        {
          text: 'Alkaline earth metals',
          why: 'They are reactive metals, but with 2 valence electrons they form $2+$ ions, and they react less violently with water.',
        },
        {
          text: 'Alkali metals',
          correct: true,
          why: 'One valence electron ($ns^1$), lost easily to form a $1+$ ion; reactive enough with air and water that it must be stored under oil.',
        },
        {
          text: 'Halogens',
          why: 'Halogens are nonmetals that *gain* one electron to form $1-$ ions.',
        },
        {
          text: 'Transition metals',
          why: 'Most transition metals are hard and react slowly with water, if at all. Think of iron or titanium.',
        },
      ],
      explanation: 'The $1+$ charge says it loses exactly one electron, so it has one valence electron: group 1. Sodium and potassium fit every clue in the description.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The key idea: effective nuclear charge and shielding',
      blocks: [
        {
          type: 'p',
          text: 'Every trend in this lesson comes from one question: **how strongly does the nucleus hold the outermost electrons?** A valence electron is attracted by all $Z$ protons, but the [[chem-core-electrons|core electrons]] sit between it and the nucleus, and their negative charge cancels much of that pull. This is called **[[chem-shielding|shielding]]**. What the valence electron actually feels is the [[chem-effective-nuclear-charge|effective nuclear charge]], $Z_{\\text{eff}}$.',
        },
        {
          type: 'theorem',
          name: 'Simple estimate of effective nuclear charge',
          tex: 'Z_{\\text{eff}} \\approx Z - (\\text{number of core electrons})',
        },
        {
          type: 'figure',
          svg: FIG_ZEFF,
          alt: 'Sodium and chlorine drawn side by side. Each has a red nucleus (+11 for sodium, +17 for chlorine) inside a gray disk of 10 core electrons. Sodium has 1 valence electron on a large outer circle; chlorine has 7 valence electrons on a noticeably smaller outer circle. Labels: Z eff about 11 minus 10 equals +1 for sodium, and about 17 minus 10 equals +7 for chlorine.',
          caption: 'Both atoms have the same 10 core electrons and valence electrons in the same shell, but chlorine\'s valence electrons feel about seven times the net pull, so they are drawn in closer.',
        },
        {
          type: 'derivation',
          title: 'Compare sodium, chlorine and potassium',
          steps: [
            { tex: '\\ce{Na}: Z_{\\text{eff}} \\approx 11 - 10 = +1 \\quad (n = 3)', why: 'Sodium is $[\\text{Ne}]\\,3s^1$: 10 core electrons shield 11 protons.' },
            { tex: '\\ce{Cl}: Z_{\\text{eff}} \\approx 17 - 10 = +7 \\quad (n = 3)', why: 'Chlorine is $[\\text{Ne}]\\,3s^2\\,3p^5$: the same 10-electron core, but 6 more protons. Valence electrons in the same shell do not shield each other much.' },
            { tex: '\\ce{K}: Z_{\\text{eff}} \\approx 19 - 18 = +1 \\quad (n = 4)', why: 'Potassium is $[\\text{Ar}]\\,4s^1$: the extra protons are matched by extra core electrons, so $Z_{\\text{eff}}$ stays about $+1$, but the valence electron is now in shell 4, farther out.' },
          ],
          result: 'Across a period, $Z_{\\text{eff}}$ rises while $n$ stays the same. Down a group, $Z_{\\text{eff}}$ stays about the same while $n$ grows.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Two knobs: charge and distance',
          text: 'The attraction between charges follows Coulomb\'s law, $F \\propto \\frac{q_1 q_2}{r^2}$. For a valence electron the two knobs are $Z_{\\text{eff}}$ (the charge it feels) and its distance $r$, set mostly by the shell number $n$. Across a period, the charge knob turns up. Down a group, the distance knob turns up. Every trend below is one of those two knobs.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'A rough estimate',
          text: 'Valence electrons do shield each other a little and core electrons do not shield perfectly, so careful methods give smaller values (about $+2.2$ for Na and $+6.1$ for Cl). The simple count gets the trends right, which is all we need here.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Phosphorus has $Z = 15$ and the configuration $[\\text{Ne}]\\,3s^2\\,3p^3$. Using $Z_{\\text{eff}} \\approx Z - (\\text{core electrons})$, estimate the effective nuclear charge felt by its valence electrons.',
      hint: 'The core is everything inside the bracket: how many electrons does neon have?',
      answer: '5',
      label: '$Z_{\\text{eff}} \\approx$',
      explanation: 'The core is $[\\text{Ne}]$, 10 electrons, so $Z_{\\text{eff}} \\approx 15 - 10 = +5$. Notice that for main-group elements this simple estimate always equals the number of valence electrons, because $Z$ minus the core electrons is exactly what is left in the valence shell.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Trend 1: atomic radius',
      blocks: [
        {
          type: 'p',
          text: 'An electron cloud has no sharp edge, so the [[atomic-radius]] is measured as half the distance between the nuclei of two identical atoms that are touching or bonded. The trend runs in two directions:',
        },
        {
          type: 'list',
          items: [
            '**Across a period (left → right), radius decreases.** The valence electrons stay in the same shell while $Z_{\\text{eff}}$ climbs, so the cloud is pulled in tighter.',
            '**Down a group, radius increases.** Each step down adds a whole new shell, farther from the nucleus, while $Z_{\\text{eff}}$ stays roughly the same.',
          ],
        },
        {
          type: 'figure',
          svg: FIG_RADIUS,
          alt: 'Circles drawn to scale. A row for period 3: sodium 186 picometers, magnesium 160, aluminum 143, silicon 117, phosphorus 110, sulfur 104, chlorine 99, shrinking from left to right. A column for group 1: lithium 152, sodium 186, potassium 227, rubidium 248, cesium 265, growing downward.',
          caption: 'Radii in picometers ($1\\ \\text{pm} = 10^{-12}\\ \\text{m}$). Chlorine has 6 more protons and 6 more electrons than sodium yet has only about half its radius: added protons pull harder than added same-shell electrons push out.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'More electrons does not mean bigger',
          text: 'It feels natural that an atom with more electrons must be bigger. Across a period the opposite happens, because the extra electrons go into the same shell and the extra protons win. Size grows only when a **new shell** is added, going down a group.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A typical question gives three or four elements and asks for the largest or smallest. Find each element\'s period (shell number) first: the lowest row wins for "largest". Within a row, the element farthest left is largest. Always justify with $n$ and $Z_{\\text{eff}}$, not just "the trend says so".',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which atom has the **largest** radius?',
      options: [
        {
          text: '$\\ce{Na}$',
          why: 'Sodium is in period 3, so its valence electron is only in shell 3. Potassium, directly below it, has a fourth shell.',
        },
        {
          text: '$\\ce{Br}$',
          why: 'Bromine is in period 4, but at the right end, where $Z_{\\text{eff}}$ is high ($\\approx +7$) and the shell is pulled in tight.',
        },
        {
          text: '$\\ce{Ca}$',
          why: 'Close: calcium is also in period 4, but it is one place to the right of potassium, with one more proton pulling on the same shell.',
        },
        {
          text: '$\\ce{K}$',
          correct: true,
          why: 'Period 4 (a fourth shell) and the far left of its row ($Z_{\\text{eff}} \\approx +1$): both knobs favor a large atom.',
        },
      ],
      explanation: 'Size is decided first by shell number (down a group) and then by $Z_{\\text{eff}}$ (across a period). K, Ca and Br are all in period 4; of those, potassium is farthest left, so it has the weakest pull on its valence electron. Sodium is a row higher, so it is smaller than potassium.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Trend 2: ionization energy',
      blocks: [
        {
          type: 'p',
          text: 'The **first [[ionization-energy]]** ($IE_1$) is the energy needed to remove the outermost electron from an isolated atom in the gas phase:',
        },
        {
          type: 'math',
          tex: '\\ce{Na(g) -> Na+(g) + e-} \\qquad IE_1 = 495.8\\ \\text{kJ/mol}',
          caption: 'Values are given per mole, a standard huge batch of atoms ($6.022 \\times 10^{23}$, unit 4), so the numbers are convenient.',
        },
        {
          type: 'p',
          text: 'Ionization energy measures how tightly the outermost electron is held, so it follows the reverse of the size trend. **Across a period it increases** (higher $Z_{\\text{eff}}$, smaller atom). **Down a group it decreases** (the electron is farther away in a new shell). The real data show the pattern clearly:',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [0, 2.6],
          xStep: 1,
          yStep: 0.5,
          height: 340,
          points: [
            { x: 1, y: 1.312, label: 'H', color: 'blue' },
            { x: 2, y: 2.3723, label: 'He', color: 'red' },
            { x: 3, y: 0.5202, label: 'Li', color: 'green' },
            { x: 4, y: 0.8995, label: 'Be', color: 'blue' },
            { x: 5, y: 0.8006, label: 'B', color: 'blue' },
            { x: 6, y: 1.0865, label: 'C', color: 'blue' },
            { x: 7, y: 1.4023, label: 'N', color: 'blue' },
            { x: 8, y: 1.3139, label: 'O', color: 'blue' },
            { x: 9, y: 1.681, label: 'F', color: 'blue' },
            { x: 10, y: 2.0807, label: 'Ne', color: 'red' },
            { x: 11, y: 0.4958, label: 'Na', color: 'green' },
            { x: 12, y: 0.7377, label: 'Mg', color: 'blue' },
            { x: 13, y: 0.5775, label: 'Al', color: 'blue' },
            { x: 14, y: 0.7865, label: 'Si', color: 'blue' },
            { x: 15, y: 1.0118, label: 'P', color: 'blue' },
            { x: 16, y: 0.9996, label: 'S', color: 'blue' },
            { x: 17, y: 1.2512, label: 'Cl', color: 'blue' },
            { x: 18, y: 1.5206, label: 'Ar', color: 'red' },
            { x: 19, y: 0.4188, label: 'K', color: 'green' },
            { x: 20, y: 0.5898, label: 'Ca', color: 'blue' },
          ],
          segments: [
            { from: [1, 1.312], to: [2, 2.3723], color: 'gray' },
            { from: [2, 2.3723], to: [3, 0.5202], color: 'gray' },
            { from: [3, 0.5202], to: [4, 0.8995], color: 'gray' },
            { from: [4, 0.8995], to: [5, 0.8006], color: 'gray' },
            { from: [5, 0.8006], to: [6, 1.0865], color: 'gray' },
            { from: [6, 1.0865], to: [7, 1.4023], color: 'gray' },
            { from: [7, 1.4023], to: [8, 1.3139], color: 'gray' },
            { from: [8, 1.3139], to: [9, 1.681], color: 'gray' },
            { from: [9, 1.681], to: [10, 2.0807], color: 'gray' },
            { from: [10, 2.0807], to: [11, 0.4958], color: 'gray' },
            { from: [11, 0.4958], to: [12, 0.7377], color: 'gray' },
            { from: [12, 0.7377], to: [13, 0.5775], color: 'gray' },
            { from: [13, 0.5775], to: [14, 0.7865], color: 'gray' },
            { from: [14, 0.7865], to: [15, 1.0118], color: 'gray' },
            { from: [15, 1.0118], to: [16, 0.9996], color: 'gray' },
            { from: [16, 0.9996], to: [17, 1.2512], color: 'gray' },
            { from: [17, 1.2512], to: [18, 1.5206], color: 'gray' },
            { from: [18, 1.5206], to: [19, 0.4188], color: 'gray' },
            { from: [19, 0.4188], to: [20, 0.5898], color: 'gray' },
          ],
          caption: 'First ionization energy (vertical, in thousands of kJ/mol, so $1.5$ means $1500\\ \\text{kJ/mol}$) against atomic number $Z$ (horizontal) for $Z = 1$ to $20$. Noble gases (red) are the peaks; alkali metals (green) are the troughs. Each period climbs from a trough to a peak, then the pattern repeats one shell farther out, a little lower.',
        },
        {
          type: 'p',
          text: 'Two small dips break the climb in each period. **Boron** is lower than beryllium because its outer electron is the first in a $2p$ orbital, slightly higher in energy and partly shielded by the $2s$ pair. **Oxygen** is lower than nitrogen because its fourth $2p$ electron must share an orbital (Hund\'s rule from the last lesson), and the repulsion of the pair makes it easier to remove. Aluminum and sulfur repeat both dips in period 3.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Reading a periodic signal',
          text: 'Plot almost any atomic property against $Z$ and you get this saw-tooth: a signal whose "period" is the length of a row. That repeating pattern is literally where the name periodic table comes from. In a game or a data pipeline you would spot it the same way, by plotting the raw data before trusting a model.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Because ionization energy increases across a period, oxygen ($Z = 8$) has a higher first ionization energy than nitrogen ($Z = 7$).',
      answer: false,
      explanation: 'Oxygen is one of the two exceptions in period 2: $IE_1(\\ce{O}) = 1313.9$ versus $IE_1(\\ce{N}) = 1402.3\\ \\text{kJ/mol}$. Nitrogen\'s three $2p$ electrons are each alone in an orbital; oxygen\'s fourth $2p$ electron has to pair up, and the repulsion between the paired electrons makes it easier to pull off. The overall trend still holds: fluorine and neon are far higher than both.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Successive ionization energies reveal the valence shell',
      blocks: [
        {
          type: 'p',
          text: 'You can keep going: the second ionization energy $IE_2$ removes a second electron from the $1+$ ion, $IE_3$ a third, and so on. Each one is larger than the last (you are pulling an electron away from an increasingly positive ion), but the increases are not smooth. Look for the **huge jump**.',
        },
        {
          type: 'table',
          headers: ['Element', '$IE_1$', '$IE_2$', '$IE_3$', '$IE_4$'],
          rows: [
            ['$\\ce{Na}$ $(3s^1)$', '$496$', '**$4562$**', '$6910$', '$9543$'],
            ['$\\ce{Mg}$ $(3s^2)$', '$738$', '$1451$', '**$7733$**', '$10\\,543$'],
            ['$\\ce{Al}$ $(3s^2\\,3p^1)$', '$578$', '$1817$', '$2745$', '**$11\\,577$**'],
          ],
          caption: 'Successive ionization energies in kJ/mol. The bold value is the first one that removes a core electron.',
        },
        {
          type: 'derivation',
          title: 'How big is sodium\'s jump?',
          steps: [
            { tex: '\\frac{IE_2}{IE_1} = \\frac{4562\\ \\cancel{\\text{kJ/mol}}}{495.8\\ \\cancel{\\text{kJ/mol}}}', why: 'Compare the second ionization energy with the first as a ratio, so the units cancel.' },
            { tex: '\\approx 9.2', why: 'Removing the second electron costs over nine times as much as the first.' },
          ],
          result: 'Sodium\'s first electron is its lone $3s$ valence electron; the second must come out of the neon core. For magnesium the jump comes after 2 electrons, for aluminum after 3: **the number of electrons removed before the big jump is the number of valence electrons.**',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the jump, and why metals form the ions they do',
          text: 'Once the valence electrons are gone, the next electron comes from the core: a shell closer to the nucleus, shielded by almost nothing, so its $Z_{\\text{eff}}$ is enormous. That is why sodium forms $\\ce{Na+}$ and never $\\ce{Na^2+}$, magnesium forms $\\ce{Mg^2+}$ and aluminum $\\ce{Al^3+}$. Each loses exactly its valence electrons and stops at neon\'s configuration, where the next electron would cost far more energy than any ordinary reaction supplies.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Element X is in period 2. Its successive ionization energies (kJ/mol) are shown below. How many valence electrons does X have?',
      tex: 'IE_1 = 900 \\qquad IE_2 = 1757 \\qquad IE_3 = 14\\,849 \\qquad IE_4 = 21\\,007',
      hint: 'Find where the values suddenly jump by a large factor. Count the electrons removed before the jump.',
      answer: '2',
      label: 'valence electrons:',
      explanation: '$IE_2$ is about twice $IE_1$ (the normal steady increase), but $IE_3$ is about 8.5 times $IE_2$: the third electron comes from the core. So X has **2** valence electrons; in period 2 that is beryllium, $1s^2\\,2s^2$, which forms $\\ce{Be^2+}$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Trend 3: electronegativity',
      blocks: [
        {
          type: 'p',
          text: 'Ionization energy describes a lone atom. In a bond, two atoms share electrons, and the question becomes: which atom pulls the shared pair harder? That pull is [[electronegativity]]. Linus Pauling put it on a scale from about $0.8$ (cesium) to $4.0$ (fluorine, the most electronegative element).',
        },
        {
          type: 'table',
          headers: ['Period 2', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F'],
          rows: [['Pauling value', '$0.98$', '$1.57$', '$2.04$', '$2.55$', '$3.04$', '$3.44$', '$3.98$']],
        },
        {
          type: 'table',
          headers: ['Group 17', 'F', 'Cl', 'Br', 'I'],
          rows: [['Pauling value', '$3.98$', '$3.16$', '$2.96$', '$2.66$']],
        },
        {
          type: 'p',
          text: 'The trend matches ionization energy, for the same reason. A small atom with a high $Z_{\\text{eff}}$ lets the shared electrons get close to a strongly attracting nucleus. So electronegativity **increases across a period and decreases down a group**. Noble gases are usually left off the scale, since they rarely form bonds.',
        },
        {
          type: 'figure',
          svg: FIG_TRENDS,
          alt: 'Two outline periodic tables. Left, atomic radius: arrows show it increases toward the left and toward the bottom; largest at the bottom left (cesium, francium). Right, ionization energy and electronegativity: arrows show they increase toward the right and toward the top; highest at the top right (fluorine, helium).',
          caption: 'One picture for the whole lesson: size grows toward the bottom left; ionization energy and electronegativity grow toward the top right. Both are the two knobs, distance and $Z_{\\text{eff}}$, at work.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why you will use this constantly',
          text: 'In the next unit, the **difference** in electronegativity between two bonded atoms decides whether they share electrons equally, unequally (a polar bond, as in water) or not at all (an ionic bond, as in table salt). Memorize the corner: F, O, N and Cl are the strongly electronegative elements.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Which of these elements is the **most** electronegative?',
      options: [
        {
          text: '$\\ce{As}$ (group 15, period 4)',
          why: 'Arsenic is low in the table and furthest left of these: lowest $Z_{\\text{eff}}$ in its row and a fourth shell (EN $2.18$).',
        },
        {
          text: '$\\ce{Se}$ (group 16, period 4)',
          why: 'Selenium is one place right of arsenic, but still in period 4, so its valence electrons are far from the nucleus (EN $2.55$).',
        },
        {
          text: '$\\ce{O}$ (group 16, period 2)',
          correct: true,
          why: 'Oxygen is at the top of group 16: the smallest atom, with shared electrons held close to its nucleus (EN $3.44$).',
        },
        {
          text: '$\\ce{S}$ (group 16, period 3)',
          why: 'Sulfur is directly below oxygen: one more shell puts shared electrons farther away (EN $2.58$).',
        },
      ],
      explanation: 'Electronegativity increases toward the top right. Three of the options are in group 16, and oxygen is at the top of it. Arsenic is both lower and farther left. Oxygen\'s $3.44$ is beaten only by fluorine\'s $3.98$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Ion sizes',
      blocks: [
        {
          type: 'p',
          text: 'Forming an ion changes the number of electrons but not the number of protons, so the size changes in a predictable direction.',
        },
        {
          type: 'list',
          items: [
            '**A [[cation]] is smaller than its atom.** Sodium loses its only $n = 3$ electron, so $\\ce{Na+}$ has no third shell at all, and 11 protons now pull on just 10 electrons.',
            '**An [[anion]] is larger than its atom.** $\\ce{Cl-}$ has the same 17 protons but one more electron; the extra electron-electron repulsion makes the cloud swell.',
          ],
        },
        {
          type: 'figure',
          svg: FIG_IONS,
          alt: 'Circles to scale. Sodium atom, 186 picometers, shrinks to sodium ion Na plus, 102 picometers, after losing one electron. Chlorine atom, 99 picometers, grows to chloride ion Cl minus, 181 picometers, after gaining one electron.',
          caption: 'In table salt the sizes are reversed from the atoms: the chloride ion is the big one.',
        },
        {
          type: 'p',
          text: 'Ions and atoms with the same number of electrons are called [[chem-isoelectronic|isoelectronic]]. In an isoelectronic series, size depends only on how many protons pull on the same electron cloud: more protons, smaller ion.',
        },
        {
          type: 'table',
          headers: ['Ion', '$\\ce{O^2-}$', '$\\ce{F-}$', '$\\ce{Na+}$', '$\\ce{Mg^2+}$', '$\\ce{Al^3+}$'],
          rows: [
            ['Protons', '$8$', '$9$', '$11$', '$12$', '$13$'],
            ['Electrons', '$10$', '$10$', '$10$', '$10$', '$10$'],
            ['Radius (pm)', '$140$', '$133$', '$102$', '$72$', '$53$'],
          ],
          caption: 'All five have neon\'s 10 electrons; going from 8 to 13 protons shrinks the ion to well under half its size.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'These ions all have 10 electrons. Order them from **largest** to **smallest**.',
      lines: ['$\\ce{O^2-}$', '$\\ce{F-}$', '$\\ce{Na+}$', '$\\ce{Mg^2+}$', '$\\ce{Al^3+}$'],
      explanation: 'With the electron count fixed at 10, only the proton count changes: 8, 9, 11, 12, 13. More protons pull the same cloud in tighter, so size falls in that order: $\\ce{O^2-}$ ($140\\ \\text{pm}$) > $\\ce{F-}$ ($133$) > $\\ce{Na+}$ ($102$) > $\\ce{Mg^2+}$ ($72$) > $\\ce{Al^3+}$ ($53$).',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'concept',
      title: 'Predicting reactivity from position',
      blocks: [
        {
          type: 'p',
          text: 'Now the trends pay off. Metals react by **losing** valence electrons, so the easier an electron is to remove (low ionization energy), the more reactive the metal. Nonmetals react by **gaining** electrons, so the harder an atom pulls on electrons (high electronegativity, small radius), the more reactive the nonmetal.',
        },
        {
          type: 'list',
          items: [
            '**Metals: most reactive at the bottom left.** Down group 1, the valence electron sits farther out and comes off more easily. Lithium fizzes in water, sodium skates around and melts, potassium bursts into flame, and cesium explodes.',
            '**Nonmetals: most reactive at the top right** (leaving out the noble gases). Fluorine is the most reactive element of all; reactivity falls from $\\ce{F2}$ to $\\ce{Cl2}$ to $\\ce{Br2}$ to $\\ce{I2}$.',
            '**Noble gases: almost inert.** A full valence shell, very high ionization energy, and no room for another electron give them nothing to gain from reacting.',
          ],
        },
        {
          type: 'math',
          tex: '\\ce{2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)}',
          caption: 'Potassium gives up its $4s$ electron to water so readily that the heat released ignites the hydrogen gas produced.',
        },
        {
          type: 'p',
          text: 'Put the extremes together and you get the most vigorous reactions: an alkali metal that wants to lose one electron meeting a halogen that wants to gain one. Sodium burns in chlorine gas with a bright flame to make sodium chloride, $\\ce{2Na(s) + Cl2(g) -> 2NaCl(s)}$, which is exactly the electron transfer you will study in the next unit.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why metal and nonmetal reactivity run in opposite directions',
          text: 'Both follow the same physics, the nucleus\'s grip on electrons, but they need opposite things. A metal reacts well when its grip is **weak** (bottom left). A nonmetal reacts well when its grip is **strong** (top right). One idea, two directions.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not try this at home, or on the range',
          text: 'Alkali metals are shipped under oil because moisture in the air is enough to start a reaction, and the hydrogen produced can ignite. For the same reason, water makes an alkali-metal fire worse: it is a reactant, not an extinguisher.',
        },
      ],
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'error',
      prompt: 'A student predicts whether sodium or potassium reacts more vigorously with water. Tap the first line that is wrong.',
      lines: [
        'Both are in group 1, so each has one valence electron to lose.',
        'Potassium\'s valence electron is in shell $n = 4$; sodium\'s is in $n = 3$.',
        'So potassium\'s valence electron is farther from the nucleus, with about the same $Z_{\\text{eff}}$ ($\\approx +1$).',
        'So potassium has the higher first ionization energy.',
        'So sodium loses its electron more easily and is the more reactive metal.',
      ],
      errorLines: [4],
      explanation: 'An electron that is farther away with the same $Z_{\\text{eff}}$ is held **less** tightly, so potassium has the **lower** first ionization energy ($418.8$ versus $495.8\\ \\text{kJ/mol}$). It therefore loses its electron more easily, and potassium is the more reactive metal: it bursts into flame in water, while sodium only melts and fizzes. Lines 1 to 3 are correct; line 5 follows logically from the mistaken line 4.',
    },
  ],
  takeaways: [
    'Rows (periods) start a new shell; columns (groups) share a valence arrangement. The $s$, $p$, $d$ and $f$ blocks are the filling order drawn as a map, so period lengths are 2, 8, 8, 18, 18, 32, 32.',
    'Metals (left, lose electrons), nonmetals (upper right, gain or share), metalloids along the staircase; the main families are the alkali metals, alkaline earth metals, transition metals, halogens and noble gases.',
    'Effective nuclear charge $Z_{\\text{eff}} \\approx Z - (\\text{core electrons})$ rises across a period; the shell number rises down a group. These two knobs explain every trend.',
    'Atomic radius increases toward the bottom left; ionization energy and electronegativity increase toward the top right. A huge jump in successive ionization energies marks the end of the valence electrons.',
    'Cations are smaller and anions larger than their atoms. Metals are most reactive at the bottom left, nonmetals at the top right, and noble gases barely react.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 6: Electronic Structure and Periodic Properties of Elements',
      url: 'https://openstax.org/books/chemistry-2e/pages/6-introduction',
      source: 'openstax',
      note: 'The chapter ends with periodic variations in element properties, with more data tables and worked comparisons.',
    },
    {
      title: 'Ptable — Interactive Periodic Table',
      url: 'https://ptable.com/',
      source: 'other',
      note: 'Switch the view to show atomic radius, ionization energy or electronegativity and watch the trends from this lesson light up across the table.',
    },
    {
      title: 'Wikipedia — Periodic trends',
      url: 'https://en.wikipedia.org/wiki/Periodic_trends',
      source: 'wikipedia',
      note: 'A survey of every periodic trend, including the exceptions mentioned here and a few beyond this course.',
    },
    {
      title: 'Wikipedia — Effective nuclear charge',
      url: 'https://en.wikipedia.org/wiki/Effective_nuclear_charge',
      source: 'wikipedia',
      note: 'How Slater\'s rules refine the simple estimate $Z - (\\text{core electrons})$ used in this lesson.',
    },
  ],
};
