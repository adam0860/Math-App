import type { Lesson } from '../../types';

// @@FIGS@@
const FIG_TL =
  '<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><text x="20" y="22" font-size="14" font-weight="600">Transverse wave (string)</text><path d="M40.0 80.0 L44.0 75.9 L48.0 71.8 L52.0 68.0 L56.0 64.4 L60.0 61.1 L64.0 58.3 L68.0 55.9 L72.0 54.1 L76.0 52.8 L80.0 52.1 L84.0 52.0 L88.0 52.6 L92.0 53.7 L96.0 55.4 L100.0 57.7 L104.0 60.4 L108.0 63.5 L112.0 67.1 L116.0 70.9 L120.0 74.9 L124.0 79.0 L128.0 83.1 L132.0 87.2 L136.0 91.1 L140.0 94.7 L144.0 98.1 L148.0 101.0 L152.0 103.5 L156.0 105.5 L160.0 106.9 L164.0 107.8 L168.0 108.0 L172.0 107.6 L176.0 106.6 L180.0 105.1 L184.0 103.0 L188.0 100.3 L192.0 97.3 L196.0 93.9 L200.0 90.1 L204.0 86.2 L208.0 82.1 L212.0 77.9 L216.0 73.8 L220.0 69.9 L224.0 66.1 L228.0 62.7 L232.0 59.7 L236.0 57.0 L240.0 54.9 L244.0 53.4 L248.0 52.4 L252.0 52.0 L256.0 52.2 L260.0 53.1 L264.0 54.5 L268.0 56.5 L272.0 59.0 L276.0 61.9 L280.0 65.3 L284.0 68.9 L288.0 72.8 L292.0 76.9 L296.0 81.0 L300.0 85.1 L304.0 89.1 L308.0 92.9 L312.0 96.5 L316.0 99.6 L320.0 102.3 L324.0 104.6 L328.0 106.3 L332.0 107.4 L336.0 108.0 L340.0 107.9 L344.0 107.2 L348.0 105.9 L352.0 104.1 L356.0 101.7 L360.0 98.9 L364.0 95.6 L368.0 92.0 L372.0 88.2 L376.0 84.1 L380.0 80.0 L384.0 75.9 L388.0 71.8 L392.0 68.0 L396.0 64.4 L400.0 61.1 L404.0 58.3 L408.0 55.9 L412.0 54.1 L416.0 52.8 L420.0 52.1 L424.0 52.0 L428.0 52.6 L432.0 53.7 L436.0 55.4 L440.0 57.7 L444.0 60.4 L448.0 63.5 L452.0 67.1 L456.0 70.9 L460.0 74.9 L464.0 79.0 L468.0 83.1 L472.0 87.2 L476.0 91.1 L480.0 94.7" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="228.0" y1="78.0" x2="228.0" y2="44.0" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M228.0 44.0 L231.1 51.4 L224.9 51.4 Z" fill="currentColor" class="f-red"/><line x1="228.0" y1="82.0" x2="228.0" y2="110.0" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M228.0 110.0 L224.9 102.6 L231.1 102.6 Z" fill="currentColor" class="f-red"/><circle cx="210" cy="80.0" r="5" class="f-red" fill="currentColor"/><text x="228" y="138" font-size="12" text-anchor="middle" class="t-red">each particle moves up and down</text><line x1="330.0" y1="30.0" x2="450.0" y2="30.0" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M450.0 30.0 L442.6 33.1 L442.6 26.9 Z" fill="currentColor" class="f-blue"/><text x="390" y="22" font-size="12" text-anchor="middle" class="t-blue">wave travels</text><line x1="40" y1="80" x2="480" y2="80" stroke="currentColor" class="s-gray" stroke-dasharray="4 4" stroke-width="1"/><text x="20" y="180" font-size="14" font-weight="600">Longitudinal wave (spring, sound)</text><line x1="40.0" y1="210" x2="40.0" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="46.6" y1="210" x2="46.6" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="53.6" y1="210" x2="53.6" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="61.4" y1="210" x2="61.4" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="70.2" y1="210" x2="70.2" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="80.1" y1="210" x2="80.1" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="91.2" y1="210" x2="91.2" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="103.3" y1="210" x2="103.3" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="116.0" y1="210" x2="116.0" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="129.0" y1="210" x2="129.0" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="141.9" y1="210" x2="141.9" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="154.2" y1="210" x2="154.2" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="165.7" y1="210" x2="165.7" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="176.1" y1="210" x2="176.1" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="185.4" y1="210" x2="185.4" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="193.5" y1="210" x2="193.5" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="200.8" y1="210" x2="200.8" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="207.5" y1="210" x2="207.5" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="214.0" y1="210" x2="214.0" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="220.8" y1="210" x2="220.8" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="228.3" y1="210" x2="228.3" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="236.6" y1="210" x2="236.6" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="246.2" y1="210" x2="246.2" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="256.8" y1="210" x2="256.8" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="268.5" y1="210" x2="268.5" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="281.0" y1="210" x2="281.0" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="294.0" y1="210" x2="294.0" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="306.9" y1="210" x2="306.9" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="319.5" y1="210" x2="319.5" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="331.4" y1="210" x2="331.4" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="342.2" y1="210" x2="342.2" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="351.9" y1="210" x2="351.9" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="360.5" y1="210" x2="360.5" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="368.0" y1="210" x2="368.0" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="374.9" y1="210" x2="374.9" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="381.5" y1="210" x2="381.5" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="388.1" y1="210" x2="388.1" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="395.3" y1="210" x2="395.3" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="403.3" y1="210" x2="403.3" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="412.3" y1="210" x2="412.3" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="422.6" y1="210" x2="422.6" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="433.9" y1="210" x2="433.9" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="446.1" y1="210" x2="446.1" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="458.9" y1="210" x2="458.9" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="471.9" y1="210" x2="471.9" y2="256" stroke="currentColor" stroke-width="1.6"/><line x1="484.7" y1="210" x2="484.7" y2="256" stroke="currentColor" stroke-width="1.6"/><text x="210" y="274" font-size="11" text-anchor="middle" class="t-purple">compression</text><text x="380" y="274" font-size="11" text-anchor="middle" class="t-purple">compression</text><text x="125" y="274" font-size="11" text-anchor="middle" class="t-gray">rarefaction</text><text x="295" y="274" font-size="11" text-anchor="middle" class="t-gray">rarefaction</text><line x1="98.0" y1="198.0" x2="138.0" y2="198.0" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M138.0 198.0 L130.6 201.1 L130.6 194.9 Z" fill="currentColor" class="f-red"/><path d="M98.0 198.0 L105.4 194.9 L105.4 201.1 Z" fill="currentColor" class="f-red"/><text x="146" y="202" font-size="12" class="t-red">particles move back and forth</text><line x1="370.0" y1="198.0" x2="470.0" y2="198.0" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M470.0 198.0 L462.6 201.1 L462.6 194.9 Z" fill="currentColor" class="f-blue"/><text x="420" y="190" font-size="12" text-anchor="middle" class="t-blue">wave travels</text></svg>';
const FIG_SNAP =
  '<svg viewBox="0 20 520 180" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="105" x2="500" y2="105" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="502" y="109" font-size="13">x</text><path d="M40.0 105.0 L43.0 100.3 L46.0 95.6 L49.0 91.1 L52.0 86.6 L55.0 82.3 L58.0 78.2 L61.0 74.4 L64.0 70.8 L67.0 67.5 L70.0 64.5 L73.0 62.0 L76.0 59.8 L79.0 58.0 L82.0 56.6 L85.0 55.6 L88.0 55.1 L91.0 55.0 L94.0 55.4 L97.0 56.2 L100.0 57.4 L103.0 59.1 L106.0 61.2 L109.0 63.6 L112.0 66.5 L115.0 69.6 L118.0 73.1 L121.0 76.9 L124.0 80.9 L127.0 85.1 L130.0 89.5 L133.0 94.1 L136.0 98.7 L139.0 103.4 L142.0 108.1 L145.0 112.8 L148.0 117.4 L151.0 121.9 L154.0 126.3 L157.0 130.5 L160.0 134.4 L163.0 138.1 L166.0 141.4 L169.0 144.5 L172.0 147.2 L175.0 149.6 L178.0 151.5 L181.0 153.0 L184.0 154.1 L187.0 154.8 L190.0 155.0 L193.0 154.8 L196.0 154.1 L199.0 153.0 L202.0 151.5 L205.0 149.6 L208.0 147.2 L211.0 144.5 L214.0 141.4 L217.0 138.1 L220.0 134.4 L223.0 130.5 L226.0 126.3 L229.0 121.9 L232.0 117.4 L235.0 112.8 L238.0 108.1 L241.0 103.4 L244.0 98.7 L247.0 94.1 L250.0 89.5 L253.0 85.1 L256.0 80.9 L259.0 76.9 L262.0 73.1 L265.0 69.6 L268.0 66.5 L271.0 63.6 L274.0 61.2 L277.0 59.1 L280.0 57.4 L283.0 56.2 L286.0 55.4 L289.0 55.0 L292.0 55.1 L295.0 55.6 L298.0 56.6 L301.0 58.0 L304.0 59.8 L307.0 62.0 L310.0 64.5 L313.0 67.5 L316.0 70.8 L319.0 74.4 L322.0 78.2 L325.0 82.3 L328.0 86.6 L331.0 91.1 L334.0 95.6 L337.0 100.3 L340.0 105.0 L343.0 109.7 L346.0 114.4 L349.0 118.9 L352.0 123.4 L355.0 127.7 L358.0 131.8 L361.0 135.6 L364.0 139.2 L367.0 142.5 L370.0 145.5 L373.0 148.0 L376.0 150.2 L379.0 152.0 L382.0 153.4 L385.0 154.4 L388.0 154.9 L391.0 155.0 L394.0 154.6 L397.0 153.8 L400.0 152.6 L403.0 150.9 L406.0 148.8 L409.0 146.4 L412.0 143.5 L415.0 140.4 L418.0 136.9 L421.0 133.1 L424.0 129.1 L427.0 124.9 L430.0 120.5 L433.0 115.9 L436.0 111.3 L439.0 106.6 L442.0 101.9 L445.0 97.2 L448.0 92.6 L451.0 88.1 L454.0 83.7 L457.0 79.5 L460.0 75.6 L463.0 71.9 L466.0 68.6 L469.0 65.5 L472.0 62.8 L475.0 60.4 L478.0 58.5 L481.0 57.0 L484.0 55.9 L487.0 55.2 L490.0 55.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><line x1="90.0" y1="55" x2="90.0" y2="35" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><line x1="290.0" y1="55" x2="290.0" y2="35" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><line x1="150.0" y1="41.0" x2="289.0" y2="41.0" stroke="currentColor" class="s-red" stroke-width="1.6"/><path d="M289.0 41.0 L282.6 43.7 L282.6 38.3 Z" fill="currentColor" class="f-red"/><line x1="230.0" y1="41.0" x2="91.0" y2="41.0" stroke="currentColor" class="s-red" stroke-width="1.6"/><path d="M91.0 41.0 L97.4 38.3 L97.4 43.7 Z" fill="currentColor" class="f-red"/><text x="190.0" y="33" font-size="16" text-anchor="middle" class="t-red" font-style="italic">λ</text><line x1="190.0" y1="105.0" x2="190.0" y2="154.0" stroke="currentColor" class="s-green" stroke-width="1.6"/><path d="M190.0 154.0 L187.3 147.6 L192.7 147.6 Z" fill="currentColor" class="f-green"/><line x1="190.0" y1="155.0" x2="190.0" y2="106.0" stroke="currentColor" class="s-green" stroke-width="1.6"/><path d="M190.0 106.0 L192.7 112.4 L187.3 112.4 Z" fill="currentColor" class="f-green"/><text x="182.0" y="135.0" font-size="16" text-anchor="end" class="t-green" font-style="italic">A</text><text x="190.0" y="173" font-size="12" text-anchor="middle">trough</text><text x="90.0" y="75" font-size="12" text-anchor="middle">crest</text><line x1="400.0" y1="180.0" x2="480.0" y2="180.0" stroke="currentColor" class="s-purple" stroke-width="2"/><path d="M480.0 180.0 L472.6 183.1 L472.6 176.9 Z" fill="currentColor" class="f-purple"/><text x="392" y="184" font-size="12" text-anchor="end" class="t-purple">moves at v = λ/T = fλ</text></svg>';
const FIG_ARC =
  '<svg viewBox="0 0 520 272" xmlns="http://www.w3.org/2000/svg"><path d="M390.2 152.7 L386.3 148.2 L382.3 143.9 L378.1 139.7 L373.8 135.7 L369.3 131.8 L364.7 128.0 L359.9 124.5 L355.1 121.1 L350.1 117.8 L345.0 114.8 L339.8 111.9 L334.5 109.2 L329.1 106.7 L323.7 104.4 L318.1 102.3 L312.5 100.3 L306.9 98.6 L301.1 97.0 L295.3 95.7 L289.5 94.6 L283.7 93.7 L277.8 92.9 L271.9 92.4 L265.9 92.1 L260.0 92.0 L254.1 92.1 L248.1 92.4 L242.2 92.9 L236.3 93.7 L230.5 94.6 L224.7 95.7 L218.9 97.0 L213.1 98.6 L207.5 100.3 L201.9 102.3 L196.3 104.4 L190.9 106.7 L185.5 109.2 L180.2 111.9 L175.0 114.8 L169.9 117.8 L164.9 121.1 L160.1 124.5 L155.3 128.0 L150.7 131.8 L146.2 135.7 L141.9 139.7 L137.7 143.9 L133.7 148.2 L129.8 152.7" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M312.5 100.3 L309.7 99.4 L306.9 98.6 L304.0 97.8 L301.1 97.0 L298.2 96.4 L295.3 95.7 L292.4 95.1 L289.5 94.6 L286.6 94.1 L283.7 93.7 L280.7 93.3 L277.8 92.9 L274.8 92.6 L271.9 92.4 L268.9 92.2 L265.9 92.1 L263.0 92.0 L260.0 92.0 L257.0 92.0 L254.1 92.1 L251.1 92.2 L248.1 92.4 L245.2 92.6 L242.2 92.9 L239.3 93.3 L236.3 93.7 L233.4 94.1 L230.5 94.6 L227.6 95.1 L224.7 95.7 L221.8 96.4 L218.9 97.0 L216.0 97.8 L213.1 98.6 L210.3 99.4 L207.5 100.3" fill="none" stroke="currentColor" class="s-blue" stroke-width="4.5"/><circle cx="260" cy="262" r="3" fill="currentColor"/><line x1="260" y1="262" x2="312.5" y2="100.3" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="312.5" y1="100.3" x2="398.1" y2="128.1" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M398.1 128.1 L389.2 128.9 L391.3 122.2 Z" fill="currentColor" class="f-red"/><line x1="260" y1="262" x2="207.5" y2="100.3" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="207.5" y1="100.3" x2="121.9" y2="128.1" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M121.9 128.1 L128.7 122.2 L130.8 128.9 Z" fill="currentColor" class="f-red"/><text x="409" y="124" font-size="15" class="t-red">F<tspan font-size="10" dy="4">T</tspan></text><text x="89" y="124" font-size="15" class="t-red">F<tspan font-size="10" dy="4">T</tspan></text><text x="266" y="177.0" font-size="14">R</text><line x1="260" y1="262" x2="260" y2="92" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><text x="232" y="224" font-size="13">θ</text><text x="276" y="224" font-size="13">θ</text><text x="260" y="80" font-size="13" text-anchor="middle" class="t-blue">segment Δs = 2Rθ, mass μΔs</text><line x1="150.0" y1="40.0" x2="60.0" y2="40.0" stroke="currentColor" class="s-purple" stroke-width="2"/><path d="M60.0 40.0 L67.4 36.9 L67.4 43.1 Z" fill="currentColor" class="f-purple"/><text x="55" y="30" font-size="12" text-anchor="start" class="t-purple">in the pulse frame, the string flows left at v</text><line x1="410.0" y1="125.0" x2="410.0" y2="180.0" stroke="currentColor" class="s-green" stroke-width="2"/><path d="M410.0 180.0 L406.9 172.6 L413.1 172.6 Z" fill="currentColor" class="f-green"/><text x="420" y="155" font-size="12" class="t-green">net force</text><text x="420" y="170" font-size="12" class="t-green">toward center</text></svg>';
const FIG_ELEMENT =
  '<svg viewBox="0 80 520 160" xmlns="http://www.w3.org/2000/svg"><path d="M60.0 196.2 L64.0 191.2 L68.0 186.2 L72.0 181.3 L76.0 176.4 L80.0 171.6 L84.0 166.9 L88.0 162.3 L92.0 157.8 L96.0 153.4 L100.0 149.2 L104.0 145.0 L108.0 140.9 L112.0 137.0 L116.0 133.2 L120.0 129.6 L124.0 126.1 L128.0 122.7 L132.0 119.5 L136.0 116.5 L140.0 113.6 L144.0 110.9 L148.0 108.3 L152.0 105.9 L156.0 103.8 L160.0 101.7 L164.0 99.9 L168.0 98.3 L172.0 96.8 L176.0 95.5 L180.0 94.4 L184.0 93.5 L188.0 92.8 L192.0 92.3 L196.0 92.0 L200.0 91.9 L204.0 91.9 L208.0 92.2 L212.0 92.6 L216.0 93.3 L220.0 94.1 L224.0 95.1 L228.0 96.2 L232.0 97.6 L236.0 99.1 L240.0 100.8 L244.0 102.6 L248.0 104.7 L252.0 106.8 L256.0 109.2 L260.0 111.7 L264.0 114.3 L268.0 117.0 L272.0 119.9 L276.0 123.0 L280.0 126.1 L284.0 129.4 L288.0 132.8 L292.0 136.2 L296.0 139.8 L300.0 143.5 L304.0 147.2 L308.0 151.1 L312.0 155.0 L316.0 158.9 L320.0 163.0 L324.0 167.0 L328.0 171.2 L332.0 175.3 L336.0 179.5 L340.0 183.7 L344.0 188.0 L348.0 192.2 L352.0 196.4 L356.0 200.7 L360.0 204.9 L364.0 209.1 L368.0 213.4 L372.0 217.5 L376.0 221.7 L380.0 225.8 L384.0 229.9 L388.0 233.9 L392.0 237.8 L396.0 241.8 L400.0 245.6 L404.0 249.4 L408.0 253.1 L412.0 256.8 L416.0 260.4 L420.0 263.9 L424.0 267.3 L428.0 270.6 L432.0 273.9 L436.0 277.0 L440.0 280.1 L444.0 283.1 L448.0 286.0 L452.0 288.8 L456.0 291.6 L460.0 294.2" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M170.0 97.5 L172.0 96.8 L174.0 96.1 L176.0 95.5 L178.0 95.0 L180.0 94.4 L182.0 94.0 L184.0 93.5 L186.0 93.2 L188.0 92.8 L190.0 92.6 L192.0 92.3 L194.0 92.1 L196.0 92.0 L198.0 91.9 L200.0 91.9 L202.0 91.9 L204.0 91.9 L206.0 92.0 L208.0 92.2 L210.0 92.4 L212.0 92.6 L214.0 92.9 L216.0 93.3 L218.0 93.6 L220.0 94.1 L222.0 94.5 L224.0 95.1 L226.0 95.6 L228.0 96.2 L230.0 96.9 L232.0 97.6 L234.0 98.3 L236.0 99.1 L238.0 99.9 L240.0 100.8 L242.0 101.7 L244.0 102.6 L246.0 103.6 L248.0 104.7 L250.0 105.7 L252.0 106.8 L254.0 108.0 L256.0 109.2 L258.0 110.4 L260.0 111.7 L262.0 112.9 L264.0 114.3 L266.0 115.6 L268.0 117.0 L270.0 118.5 L272.0 119.9 L274.0 121.4 L276.0 123.0 L278.0 124.5 L280.0 126.1 L282.0 127.7 L284.0 129.4 L286.0 131.1 L288.0 132.8 L290.0 134.5 L292.0 136.2 L294.0 138.0 L296.0 139.8 L298.0 141.6 L300.0 143.5 L302.0 145.3 L304.0 147.2 L306.0 149.1 L308.0 151.1 L310.0 153.0 L312.0 155.0 L314.0 156.9 L316.0 158.9 L318.0 160.9 L320.0 163.0 L322.0 165.0 L324.0 167.0 L326.0 169.1 L328.0 171.2 L330.0 173.2" fill="none" stroke="currentColor" class="s-blue" stroke-width="4"/><line x1="170.0" y1="97.5" x2="80.8" y2="130.1" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M80.8 130.1 L87.4 124.0 L89.8 130.6 Z" fill="currentColor" class="f-red"/><line x1="170" y1="97.5" x2="100" y2="97.5" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><line x1="330.0" y1="173.2" x2="395.9" y2="241.7" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M395.9 241.7 L387.6 238.2 L392.6 233.3 Z" fill="currentColor" class="f-red"/><line x1="330" y1="173.2" x2="400" y2="173.2" stroke="currentColor" class="s-gray" stroke-dasharray="3 3"/><text x="66" y="111.5" font-size="15" class="t-red">F<tspan font-size="10" dy="4">T</tspan></text><text x="396" y="229.2" font-size="15" class="t-red">F<tspan font-size="10" dy="4">T</tspan></text><text x="118" y="91.5" font-size="13">θ₁</text><text x="378" y="163.2" font-size="13">θ₂</text><text x="250.0" y="133.7" font-size="13" text-anchor="middle" class="t-blue">mass μ dx</text><line x1="40" y1="215" x2="500" y2="215" stroke="currentColor" stroke-width="1"/><line x1="170" y1="210" x2="170" y2="220" stroke="currentColor"/><line x1="170" y1="97.5" x2="170" y2="210" stroke="currentColor" class="s-gray" stroke-dasharray="2 3"/><text x="170" y="232" font-size="13" text-anchor="middle" dy="-0">x</text><line x1="330" y1="210" x2="330" y2="220" stroke="currentColor"/><line x1="330" y1="173.2" x2="330" y2="210" stroke="currentColor" class="s-gray" stroke-dasharray="2 3"/><text x="330" y="232" font-size="13" text-anchor="middle" dy="-0">x + dx</text></svg>';
// @@END@@

export const lesson: Lesson = {
  id: 'phys-traveling-waves',
  title: 'Traveling Waves',
  summary: 'A wave carries energy without carrying matter. Describe it with $y(x, t) = A\\sin(kx - \\omega t)$, find its speed on a string from $\\sqrt{F_T/\\mu}$, derive the wave equation from Newton\'s second law, and compute the power a wave delivers.',
  minutes: 20,
  objectives: [
    'Distinguish transverse from longitudinal waves and explain why the medium does not travel with the wave',
    'Read amplitude, wave number, angular frequency, wavelength, period, speed and direction from $y(x, t) = A\\sin(kx \\mp \\omega t + \\phi)$',
    'Separate the wave speed $v = \\omega/k$ from the transverse particle velocity $\\partial y/\\partial t$',
    'Derive and use $v = \\sqrt{F_T/\\mu}$ for a stretched string, and derive the wave equation from Newton\'s second law',
    'Compute the average power carried by a sinusoidal wave on a string, $P_{\\text{avg}} = \\tfrac12\\mu v\\omega^2A^2$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A wave moves a pattern, not the material',
      blocks: [
        {
          type: 'p',
          text: 'Flick one end of a long rope and a bump runs to the other end. The rope itself does not go anywhere: each bit of rope rises, falls and ends up exactly where it started. What travels is the **shape**, and with it **energy** and momentum. That is the defining property of a mechanical wave: a disturbance that propagates through a medium while the medium only oscillates in place.',
        },
        {
          type: 'p',
          text: 'Waves come in two basic geometries. In a [[phys-transverse-wave|transverse wave]] the medium moves perpendicular to the direction the wave travels: a rope, a guitar string, a stadium "wave". In a [[phys-longitudinal-wave|longitudinal wave]] the medium moves back and forth along the direction of travel, producing compressions and rarefactions: a pushed Slinky, and every sound wave in air.',
        },
        {
          type: 'figure',
          svg: FIG_TL,
          alt: 'Two panels. Top: a transverse wave on a string, a sinusoidal curve with a red particle on it and a red double arrow pointing up and down labeled "each particle moves up and down"; a blue arrow to the right says "wave travels". Bottom: a longitudinal wave drawn as vertical lines that bunch together (compressions) and spread apart (rarefactions); a red double arrow pointing left and right says "particles move back and forth"; a blue arrow to the right says "wave travels".',
          caption: 'Transverse: particle motion $\\perp$ wave motion. Longitudinal: particle motion $\\parallel$ wave motion. In both, each particle oscillates about its own resting place.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-0.6, 1.6],
          height: 260,
          functions: [
            { expr: 'exp(-(x - 1 - v*s)^2/0.3)', label: 'string at time $t$', color: 'blue' },
            { expr: 'exp(-(x - 1)^2/0.3)', label: 'string at $t = 0$', color: 'gray', dashed: true },
          ],
          points: [{ x: 5, y: 'exp(-(5 - 1 - v*s)^2/0.3)', label: 'particle at x = 5', color: 'red' }],
          segments: [{ from: [5, -0.4], to: [5, 1.4], color: 'red', dashed: true }],
          sliders: [
            { name: 's', min: 0, max: 4, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1 },
            { name: 'v', min: 0.5, max: 2, step: 0.1, value: 2, label: 'pulse speed $v$ (m/s)' },
          ],
          readouts: [{ label: 'pulse peak at $x = 1 + vt =$', expr: '1 + v*s', digits: 2 }],
          caption: 'Press ▶. The pulse slides to the right at speed $v$, but the red particle at $x = 5$ only moves **up and back down** along the dashed line as the pulse passes. Afterwards it is exactly where it started.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'The stadium wave',
          text: 'In a stadium wave nobody runs around the stadium. Each fan stands up and sits down a moment after their neighbor, and the *timing pattern* sweeps around the stands at tens of meters per second. A rope element does the same: it moves because the element beside it pulls on it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Waves in games',
          text: 'Rope bridges and whips, the ripples on a water surface, a shockwave ring from an explosion, and every sound your audio engine plays are waves. Water-surface ripples in games are often a grid of heights stepped with the 2D version of the wave equation you will derive later in this lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A loudspeaker $10\\,\\text{m}$ away plays a steady tone and you hear it. What actually travels the $10\\,\\text{m}$ from the speaker to your ear?',
      options: [
        { text: 'Air molecules pushed off the speaker cone fly across the room into your ear', why: 'Each air molecule only jiggles back and forth about its average position (plus its random thermal motion). No molecule from the cone crosses the room in the time the sound does.' },
        { text: 'A pattern of compressions and rarefactions, carrying energy from molecule to neighboring molecule', correct: true, why: 'Sound is a longitudinal wave: the disturbance and its energy propagate, while the air only oscillates locally.' },
        { text: 'Nothing physical: sound is information, not energy', why: 'Sound does carry energy, which is why a loud sound can damage your hearing or shatter a glass. The energy is passed from molecule to molecule.' },
        { text: 'A steady wind of air moving at the speed of sound', why: 'A tone does not create a net flow of air. Hold a candle in front of a speaker playing a pure tone and the flame flickers back and forth; it is not blown steadily away.' },
      ],
      explanation: 'A mechanical wave transports energy and momentum through a medium **without** transporting the medium. In a sound wave each parcel of air moves back and forth along the direction of travel (a longitudinal wave), and the compression pattern travels at the speed of sound, about $343\\,\\text{m/s}$ in room-temperature air.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The wave function $y(x, t)$ and the sinusoidal wave',
      blocks: [
        {
          type: 'p',
          text: 'To describe a wave on a string you need the displacement $y$ of **every** point $x$ at **every** time $t$: a function of two variables, $y(x, t)$. Here is the key insight. If a shape $y = f(x)$ slides to the right at speed $v$ without changing, then at time $t$ it is the same graph shifted right by $vt$. Shifting a graph right by $vt$ means replacing $x$ by $x - vt$ (you met this as a horizontal shift in algebra):',
        },
        {
          type: 'theorem',
          name: 'Traveling waves',
          tex: 'y(x, t) = f(x - vt) \\ \\ \\text{(moving toward } +x\\text{)}, \\qquad y(x, t) = f(x + vt) \\ \\ \\text{(moving toward } -x\\text{)}',
          text: 'Any function of the single combination $x - vt$ is a shape moving right at speed $v$.',
        },
        {
          type: 'p',
          text: 'The most important shape is a [[sinusoid]], because a source in simple harmonic motion (a vibrating speaker cone, a hand shaking a rope steadily) produces one, and because every other wave shape can be built from sinusoids. Write it as',
        },
        {
          type: 'math',
          tex: 'y(x, t) = A\\sin(kx - \\omega t + \\phi), \\qquad k = \\frac{2\\pi}{\\lambda}, \\quad \\omega = \\frac{2\\pi}{T} = 2\\pi f, \\quad v = \\frac{\\lambda}{T} = f\\lambda = \\frac{\\omega}{k}',
          caption: '$A$ is the [[amplitude]], $\\lambda$ the [[gchem-wavelength|wavelength]] (repeat distance in space), $T$ the [[period]] (repeat time), $f = 1/T$ the [[frequency]], $\\omega$ the [[angular-frequency]], $\\phi$ the phase constant, and $k$ the [[phys-wave-number|angular wave number]] in rad/m.',
        },
        {
          type: 'figure',
          svg: FIG_SNAP,
          alt: 'A snapshot of a sinusoidal wave along the x-axis. A red double arrow between two neighboring crests is labeled lambda. A green double arrow from the axis down to a trough is labeled A. A purple arrow says the wave moves at v = lambda/T = f lambda.',
          caption: 'A snapshot at one instant. Freeze time and the string is a sine curve of wavelength $\\lambda$; watch one point and it oscillates with period $T$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $v = \\lambda/T$ and $v = \\omega/k$',
          text: 'In one period $T$, every point completes one full oscillation, and the pattern advances by exactly one wavelength (the crest behind you takes the place of the crest that just left). Distance over time: $v = \\lambda/T = f\\lambda$. Algebraically, $kx - \\omega t = k\\left(x - \\frac{\\omega}{k}t\\right)$ is a function of $x - vt$ with $v = \\omega/k$. The two agree: $\\frac{\\omega}{k} = \\frac{2\\pi/T}{2\\pi/\\lambda} = \\frac{\\lambda}{T}$.',
        },
        {
          type: 'derivation',
          title: 'A wave with $A = 2.0\\,\\text{cm}$, $\\lambda = 40\\,\\text{cm}$, $f = 50\\,\\text{Hz}$, moving toward $+x$',
          steps: [
            { tex: 'k = \\frac{2\\pi}{\\lambda} = \\frac{2\\pi}{0.40\\,\\text{m}} = 15.7\\,\\text{rad/m}', why: 'Convert to SI first. One wavelength corresponds to $2\\pi$ radians of phase.' },
            { tex: '\\omega = 2\\pi f = 2\\pi(50\\,\\text{Hz}) = 314\\,\\text{rad/s}', why: 'One period corresponds to $2\\pi$ radians of phase; $f$ periods happen per second.' },
            { tex: 'v = f\\lambda = (50\\,\\text{s}^{-1})(0.40\\,\\text{m}) = 20\\,\\text{m/s}', why: 'Check: $\\omega/k = 314/15.7 = 20\\,\\text{m/s}$ as well.' },
            { tex: 'y(x, t) = (0.020\\,\\text{m})\\sin\\big((15.7\\,\\text{rad/m})\\,x - (314\\,\\text{rad/s})\\,t\\big)', why: 'The minus sign makes the wave move toward $+x$; $\\phi = 0$ means $y = 0$ at $x = 0, t = 0$, with the string at $x = 0$ moving downward.' },
          ],
          result: '$y = 0.020\\sin(15.7x - 314t)$ in SI units: a $20\\,\\text{m/s}$ wave.',
        },
        {
          type: 'graph',
          x: [0, 8],
          y: [-2, 2],
          height: 260,
          functions: [{ expr: 'a*sin(2pi*(x/L - f*s))', label: '$y = A\\sin(kx - \\omega t)$', color: 'blue' }],
          points: [
            { x: 'L/4 + f*L*s', y: 'a', label: 'crest', color: 'purple' },
            { x: 3, y: 'a*sin(2pi*(3/L - f*s))', label: 'particle at x = 3', color: 'red' },
          ],
          sliders: [
            { name: 's', min: 0, max: 2, step: 0.01, value: 0, label: 'time $t$ (s, shown at half speed)', play: true, speed: 0.5 },
            { name: 'a', min: 0.2, max: 1.5, step: 0.1, value: 1, label: 'amplitude $A$ (m)' },
            { name: 'L', min: 1, max: 3, step: 0.1, value: 2, label: 'wavelength $\\lambda$ (m)' },
            { name: 'f', min: 0.25, max: 1, step: 0.05, value: 0.5, label: 'frequency $f$ (Hz)' },
          ],
          readouts: [
            { label: '$k = 2\\pi/\\lambda =$', expr: '2pi/L', digits: 2 },
            { label: '$\\omega = 2\\pi f =$', expr: '2pi*f', digits: 2 },
            { label: '$v = f\\lambda =$', expr: 'f*L', digits: 2 },
          ],
          caption: 'Press ▶ and follow the purple crest: it moves one wavelength per period, at $v = f\\lambda$. The red particle never leaves $x = 3$. Increase $f$ with $\\lambda$ fixed and the crest moves faster; on a real string you can\'t do that independently, as you will see shortly.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Reading the direction',
          text: 'The signs of $kx$ and $\\omega t$ decide the direction. **Opposite** signs ($kx - \\omega t$ or $\\omega t - kx$) mean motion toward $+x$; **same** signs ($kx + \\omega t$) mean motion toward $-x$. To check, follow a point of constant phase: $kx - \\omega t = \\text{const}$ gives $x = \\text{const} + \\frac{\\omega}{k}t$, which increases with time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A wave on a cord is described by $y(x, t) = (0.050\\,\\text{m})\\sin\\big((4.0\\,\\text{rad/m})\\,x - (12\\,\\text{rad/s})\\,t\\big)$. What is the wave speed? Give 3 significant figures.',
      label: '$v =$',
      unit: 'm/s',
      answer: '12/4',
      answerTex: '3.00\\,\\text{m/s}',
      tolerance: 0.02,
      hint: 'Read $k$ and $\\omega$ off the argument, then use $v = \\omega/k$.',
      explanation: 'Match $kx - \\omega t$: $k = 4.0\\,\\text{rad/m}$ and $\\omega = 12\\,\\text{rad/s}$. Then $v = \\omega/k = 12/4.0 = 3.00\\,\\text{m/s}$, toward $+x$ (opposite signs). Cross-check: $\\lambda = 2\\pi/k = 1.57\\,\\text{m}$, $f = \\omega/2\\pi = 1.91\\,\\text{Hz}$, and $f\\lambda = 3.00\\,\\text{m/s}$. Dividing the other way, $k/\\omega = 0.333$, has units of s/m, which is a hint that it is upside down.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Which description fits the wave $y(x, t) = (0.020\\,\\text{m})\\sin(3.0x + 6.0t + \\pi/4)$, with $x$ in meters and $t$ in seconds?',
      options: [
        { text: 'It moves toward $+x$ at $2.0\\,\\text{m/s}$', why: 'The speed is right, but $kx$ and $\\omega t$ have the **same** sign, so a point of constant phase has $x = \\text{const} - 2.0t$: it moves toward $-x$.' },
        { text: 'It moves toward $-x$ at $2.0\\,\\text{m/s}$', correct: true, why: 'Same signs mean motion toward $-x$, and $v = \\omega/k = 6.0/3.0 = 2.0\\,\\text{m/s}$.' },
        { text: 'It moves toward $-x$ at $0.50\\,\\text{m/s}$', why: 'This is $k/\\omega$, which is the reciprocal of the speed (units s/m).' },
        { text: 'It moves toward $+x$ at $18\\,\\text{m/s}$', why: 'This multiplies $k$ and $\\omega$. Speed is a ratio, $\\omega/k$; check the units: (rad/s)/(rad/m) = m/s.' },
      ],
      explanation: 'Set the phase constant: $3.0x + 6.0t = \\text{const}$ gives $x = \\text{const} - 2.0t$. So the pattern moves toward $-x$ at $2.0\\,\\text{m/s}$. The phase constant $\\pi/4$ only says where the wave is at $t = 0$; it does not affect speed or direction.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Particle velocity is not wave velocity',
      blocks: [
        {
          type: 'p',
          text: 'There are two completely different velocities in a wave. The **wave speed** $v = \\omega/k$ is how fast the pattern moves along the string. The **transverse velocity** $v_y$ is how fast one bit of string moves up and down. To get it, hold $x$ fixed (watch one particle) and differentiate with respect to $t$. A derivative that holds the other variable fixed is a **partial derivative**, written $\\partial y/\\partial t$; you compute it exactly like an ordinary [[derivative]], treating $x$ as a constant.',
        },
        {
          type: 'derivation',
          title: 'Transverse velocity and acceleration of a point on the string',
          steps: [
            { tex: 'y = A\\sin(kx - \\omega t)', why: 'The sinusoidal wave moving toward $+x$.' },
            { tex: 'v_y = \\frac{\\partial y}{\\partial t} = -\\omega A\\cos(kx - \\omega t)', why: 'Chain rule: the derivative of the inside $kx - \\omega t$ with respect to $t$ is $-\\omega$ ($x$ is held constant).' },
            { tex: 'a_y = \\frac{\\partial^2 y}{\\partial t^2} = -\\omega^2 A\\sin(kx - \\omega t) = -\\omega^2 y', why: 'Differentiate again. The result $a_y = -\\omega^2 y$ is the signature of [[phys-simple-harmonic-motion|simple harmonic motion]]: every point on the string is a little harmonic oscillator.' },
            { tex: 'v_{y,\\max} = \\omega A, \\qquad a_{y,\\max} = \\omega^2 A', why: 'The cosine and sine reach magnitude $1$.' },
          ],
          result: 'For the $20\\,\\text{m/s}$ wave above ($A = 0.020\\,\\text{m}$, $\\omega = 314\\,\\text{rad/s}$): $v_{y,\\max} = 6.28\\,\\text{m/s}$ and $a_{y,\\max} = 1.97 \\times 10^{3}\\,\\text{m/s}^2$, about $200g$. Neither has anything to do with $v = 20\\,\\text{m/s}$.',
        },
        {
          type: 'graph',
          x: [0, 9.5],
          y: [-2.2, 2.2],
          height: 260,
          functions: [{ expr: 'sin(x - s)', label: '$y = \\sin(x - t)$', color: 'blue' }],
          points: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => ({ x: p, y: `sin(${p} - s)`, color: 'red' as const })),
          segments: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => ({
            from: [p, `sin(${p} - s)`] as [number, string],
            to: [p, `sin(${p} - s) - 0.8cos(${p} - s)`] as [number, string],
            arrow: true,
            color: 'red' as const,
          })),
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.5, loop: true }],
          caption: 'Red arrows: each particle\'s transverse velocity $\\partial y/\\partial t$ (scaled). Particles at crests and troughs are momentarily at rest; particles crossing $y = 0$ move fastest. Particles just ahead of a crest move **up**, so the crest arrives there next.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Classic mistake',
          text: 'Shaking the end of a rope harder or faster makes each particle move faster (bigger $\\omega A$), but it does **not** make the wave travel faster. The wave speed is set by the string, as the next card shows. Also, a point at a crest has $v_y = 0$ but the largest acceleration, just like a mass on a spring at its turning point.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'For the wave $y(x, t) = 0.05\\sin(4x - 12t)$ (SI units), find the transverse velocity $v_y(x, t) = \\partial y/\\partial t$ of the string. Type it using `x` and `t`.',
      label: '$v_y(x, t) =$',
      answer: '-0.6cos(4x - 12t)',
      answerTex: '-0.60\\cos(4x - 12t)',
      variables: ['x', 't'],
      hint: 'Treat $x$ as a constant and use the chain rule on the inside, $4x - 12t$.',
      explanation: '$\\frac{\\partial}{\\partial t}\\sin(4x - 12t) = \\cos(4x - 12t)\\cdot\\frac{\\partial}{\\partial t}(4x - 12t) = -12\\cos(4x - 12t)$. Times $0.05$: $v_y = -0.60\\cos(4x - 12t)\\,\\text{m/s}$. Its maximum is $\\omega A = 0.60\\,\\text{m/s}$, five times smaller than the wave speed $\\omega/k = 3.0\\,\\text{m/s}$. Differentiating with respect to $x$ instead would give the slope of the string, $0.20\\cos(4x - 12t)$, not a velocity.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'How fast does a wave travel on a string?',
      blocks: [
        {
          type: 'p',
          text: 'The speed is set by the medium. For a stretched string, two properties matter: the [[phys-tension|tension]] $F_T$ (the restoring "stiffness") and the [[phys-linear-mass-density|linear mass density]] $\\mu = m/L$ in kg/m (the inertia). We use $F_T$ for tension so it can\'t be confused with the period $T$.',
        },
        {
          type: 'p',
          text: '[[dimensional-analysis|Dimensional analysis]] almost gives the answer. Tension has units $\\text{kg}\\cdot\\text{m/s}^2$ and $\\mu$ has $\\text{kg/m}$, so $F_T/\\mu$ has units $\\text{m}^2/\\text{s}^2$. The only speed you can build is $\\sqrt{F_T/\\mu}$, possibly times a pure number. Newton\'s second law shows that number is exactly $1$.',
        },
        {
          type: 'figure',
          svg: FIG_ARC,
          alt: 'A small segment at the top of a pulse, drawn as a short blue arc of a circle with radius R and center below. The segment subtends angle theta on each side of the vertical. Tension F_T pulls along the string at each end, tilted slightly downward. A green arrow shows the net force pointing toward the center. A purple arrow says that in the pulse frame the string flows left at v.',
          caption: 'Ride along with the pulse. In that frame the string streams through the bump at speed $v$, and the top segment moves on a circle of radius $R$.',
        },
        {
          type: 'derivation',
          title: 'Deriving $v = \\sqrt{F_T/\\mu}$ from a pulse',
          steps: [
            { tex: '\\Delta m = \\mu\\,\\Delta s = \\mu(2R\\theta)', why: 'The small segment at the crest is an arc of length $2R\\theta$ (arc length $=$ radius $\\times$ angle in [[radian|radians]]).' },
            { tex: 'F_{\\text{net}} = 2F_T\\sin\\theta \\approx 2F_T\\theta \\quad (\\text{toward the center})', why: 'Each end is pulled with tension $F_T$ tilted $\\theta$ below the horizontal. The horizontal components cancel; the vertical components add. For a small angle, $\\sin\\theta \\approx \\theta$.' },
            { tex: '2F_T\\theta = \\mu(2R\\theta)\\,\\frac{v^2}{R}', why: 'In the pulse frame the segment moves at speed $v$ on a circle of radius $R$, so Newton\'s second law needs a centripetal acceleration $v^2/R$.' },
            { tex: 'F_T = \\mu v^2 \\implies v = \\sqrt{\\frac{F_T}{\\mu}}', why: 'Cancel $2\\theta$ and $R$. The radius and the angle drop out, so every small pulse travels at the same speed.' },
          ],
          result: 'Wave speed on a stretched string: $v = \\sqrt{F_T/\\mu}$. Tighter string, faster wave; heavier string, slower wave.',
        },
        {
          type: 'derivation',
          title: 'A guitar string: $0.650\\,\\text{m}$ long, mass $2.60\\,\\text{g}$, tension $100\\,\\text{N}$',
          steps: [
            { tex: '\\mu = \\frac{m}{L} = \\frac{2.60 \\times 10^{-3}\\,\\text{kg}}{0.650\\,\\text{m}} = 4.00 \\times 10^{-3}\\,\\text{kg/m}', why: 'Linear density is mass per **length**, in kg/m. Convert grams to kilograms first.' },
            { tex: 'v = \\sqrt{\\frac{100\\,\\text{N}}{4.00 \\times 10^{-3}\\,\\text{kg/m}}} = \\sqrt{2.50 \\times 10^{4}\\,\\text{m}^2/\\text{s}^2} = 158\\,\\text{m/s}', why: 'Units: $\\text{N}/(\\text{kg/m}) = (\\text{kg}\\cdot\\text{m/s}^2)(\\text{m/kg}) = \\text{m}^2/\\text{s}^2$. ✓' },
          ],
          result: 'A pulse crosses the string in $0.650/158 = 4.1\\,\\text{ms}$.',
        },
        {
          type: 'graph',
          x: [0, 200],
          y: [0, 500],
          height: 240,
          functions: [{ expr: 'sqrt(x/(m/1000))', label: '$v = \\sqrt{F_T/\\mu}$', color: 'blue' }],
          points: [{ x: 'F', y: 'sqrt(F/(m/1000))', color: 'red' }],
          sliders: [
            { name: 'm', min: 1, max: 20, step: 0.5, value: 4, label: 'linear density $\\mu$ (g/m)' },
            { name: 'F', min: 10, max: 200, step: 5, value: 100, label: 'tension $F_T$ (N)' },
          ],
          readouts: [{ label: '$v$ (m/s) $=$', expr: 'sqrt(F/(m/1000))', digits: 1 }],
          caption: 'Horizontal axis: tension in newtons; vertical: wave speed in m/s. Quadrupling the tension only doubles the speed. A thick bass string (large $\\mu$) carries slow waves even at high tension.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the source cannot change the speed',
          text: 'The derivation never mentioned how the pulse was made: only $F_T$ and $\\mu$ appear. The source sets the **frequency** $f$ (how often you shake). The medium sets the **speed** $v$. The wavelength then adjusts to fit: $\\lambda = v/f$. Shake twice as fast and you get waves half as long, moving at the same speed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'You send a sinusoidal wave down a stretched rope. If you double the frequency at which you shake the end (same rope, same tension), the waves travel along the rope twice as fast.',
      answer: false,
      explanation: 'False. The speed is $v = \\sqrt{F_T/\\mu}$, which depends only on the rope and its tension. Doubling $f$ halves the wavelength, $\\lambda = v/f$, while $v$ stays the same. What does double is the transverse speed of each rope element, $\\omega A$, and (as you will see) the power you must supply.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A rope $12.0\\,\\text{m}$ long has a mass of $1.50\\,\\text{kg}$ and is held at a tension of $75.0\\,\\text{N}$. How long does a pulse take to travel from one end to the other? Give 3 significant figures.',
      label: '$\\Delta t =$',
      unit: 's',
      answer: '12/sqrt(75/(1.5/12))',
      answerTex: '0.490\\,\\text{s}',
      tolerance: 0.004,
      hint: 'First find $\\mu = m/L$, then $v = \\sqrt{F_T/\\mu}$, then $\\Delta t = L/v$.',
      explanation: '$\\mu = 1.50/12.0 = 0.125\\,\\text{kg/m}$. $v = \\sqrt{75.0/0.125} = \\sqrt{600} = 24.5\\,\\text{m/s}$. $\\Delta t = 12.0/24.5 = 0.490\\,\\text{s}$. Using the total mass instead of $\\mu$ gives $v = \\sqrt{75/1.5} = 7.07\\,\\text{m/s}$ and $\\Delta t = 1.70\\,\\text{s}$; the units ($\\text{N/kg} = \\text{m/s}^2$, not $\\text{m}^2/\\text{s}^2$) flag that mistake.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The wave equation',
      blocks: [
        {
          type: 'p',
          text: 'The pulse argument gave the speed. Now apply Newton\'s second law to a tiny piece of a string carrying **any** small wave, and you get a [[differential-equation]] that every such wave must obey: the [[phys-wave-equation|wave equation]]. Assume the slopes are small, so the tension is essentially the same $F_T$ everywhere and each element moves only vertically.',
        },
        {
          type: 'figure',
          svg: FIG_ELEMENT,
          alt: 'A curved string element between x and x + dx, drawn in blue, with mass mu dx. At its left end a red tension vector F_T points down and to the left along the string at angle theta 1 below the horizontal; at its right end another red tension vector F_T points down and to the right at a steeper angle theta 2.',
          caption: 'The tension pulls along the string at each end. If the slopes at the two ends differ, the vertical pulls don\'t cancel, so the element accelerates. Curvature drives the motion.',
        },
        {
          type: 'derivation',
          title: 'Newton\'s second law for a string element',
          steps: [
            { tex: 'F_{y} = F_T\\sin\\theta_2 - F_T\\sin\\theta_1 \\approx F_T\\left(\\frac{\\partial y}{\\partial x}\\Big|_{x+dx} - \\frac{\\partial y}{\\partial x}\\Big|_{x}\\right)', why: 'Vertical components of the two tension forces (taking the upward direction as positive and measuring the angles from the $+x$ direction). For small angles $\\sin\\theta \\approx \\tan\\theta$, and $\\tan\\theta$ is the slope $\\partial y/\\partial x$.' },
            { tex: '\\approx F_T\\,\\frac{\\partial^2 y}{\\partial x^2}\\,dx', why: 'The change in the slope across a short length $dx$ is (rate of change of slope) $\\times\\, dx$: the definition of the second derivative.' },
            { tex: 'F_T\\,\\frac{\\partial^2 y}{\\partial x^2}\\,dx = (\\mu\\,dx)\\,\\frac{\\partial^2 y}{\\partial t^2}', why: 'Newton\'s second law, $F_y = ma_y$, with mass $\\mu\\,dx$ and vertical acceleration $\\partial^2 y/\\partial t^2$.' },
            { tex: '\\frac{\\partial^2 y}{\\partial x^2} = \\frac{\\mu}{F_T}\\,\\frac{\\partial^2 y}{\\partial t^2}', why: 'Divide by $F_T\\,dx$. The element size has dropped out, as it must.' },
          ],
          result: 'Comparing with the general form below, $\\mu/F_T = 1/v^2$: the same $v = \\sqrt{F_T/\\mu}$ as the pulse argument.',
        },
        {
          type: 'theorem',
          name: 'The (one-dimensional) wave equation',
          tex: '\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\,\\frac{\\partial^2 y}{\\partial t^2}',
          text: 'Curvature in space is proportional to acceleration in time. The same equation, with a different $v$, governs sound, waves on membranes, and light.',
        },
        {
          type: 'derivation',
          title: 'Check: the sinusoidal wave satisfies it',
          steps: [
            { tex: 'y = A\\sin(kx - \\omega t)', why: 'The candidate solution.' },
            { tex: '\\frac{\\partial^2 y}{\\partial x^2} = -k^2 A\\sin(kx - \\omega t) = -k^2 y', why: 'Differentiate twice in $x$ (each time the chain rule brings out a factor $k$).' },
            { tex: '\\frac{\\partial^2 y}{\\partial t^2} = -\\omega^2 A\\sin(kx - \\omega t) = -\\omega^2 y', why: 'Differentiate twice in $t$ (each time a factor $-\\omega$; two of them make $+\\omega^2$, and the sine\'s second derivative supplies the minus).' },
            { tex: '-k^2 y = \\frac{1}{v^2}(-\\omega^2 y) \\iff v^2 = \\frac{\\omega^2}{k^2}', why: 'Substitute into the wave equation. It holds for all $x$ and $t$ exactly when $v = \\omega/k$, the wave speed found earlier.' },
          ],
          result: 'More generally, for any twice-differentiable $f$, the chain rule gives $\\partial_x^2 f(x - vt) = f\'\'$ and $\\partial_t^2 f(x - vt) = v^2 f\'\'$, so every $f(x \\mp vt)$ is a solution.',
        },
        {
          type: 'code',
          title: 'string_wave.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

int main() {
    const int N = 201;                 // grid points on a 2.00 m string
    const double dx = 0.01;            // m
    const double v = 20.0;             // wave speed sqrt(F_T / mu), m/s
    const double dt = dx / v;          // Courant number v*dt/dx = 1
    const double C2 = (v * dt / dx) * (v * dt / dx);

    std::vector<double> prev(N), cur(N), next(N);
    for (int i = 0; i < N; ++i) {      // pulse at x = 1.00 m, released from rest
        double x = i * dx;
        prev[i] = std::exp(-std::pow((x - 1.0) / 0.05, 2));
    }
    // First step for zero initial velocity: y1 = y0 + (C^2/2) * (discrete y_xx)
    for (int i = 1; i < N - 1; ++i)
        cur[i] = prev[i] + 0.5 * C2 * (prev[i + 1] - 2 * prev[i] + prev[i - 1]);

    auto report = [&](int step, const std::vector<double>& y) {
        int best = N / 2;              // largest |y| on the right half
        for (int i = N / 2; i < N; ++i)
            if (std::fabs(y[i]) > std::fabs(y[best])) best = i;
        std::printf("t = %.4f s: peak at x = %.2f m, y = %+.3f\\n",
                    step * dt, best * dx, y[best]);
    };
    report(0, prev);
    for (int step = 1; step <= 150; ++step) {
        if (step == 20 || step == 40 || step == 150) report(step, cur);
        // y_tt = v^2 y_xx  ->  centered differences in time and space
        for (int i = 1; i < N - 1; ++i)
            next[i] = 2 * cur[i] - prev[i] + C2 * (cur[i + 1] - 2 * cur[i] + cur[i - 1]);
        next[0] = next[N - 1] = 0.0;   // fixed ends
        prev.swap(cur);
        cur.swap(next);
    }
}`,
          output: `t = 0.0000 s: peak at x = 1.00 m, y = +1.000
t = 0.0100 s: peak at x = 1.20 m, y = +0.500
t = 0.0200 s: peak at x = 1.40 m, y = +0.500
t = 0.0750 s: peak at x = 1.50 m, y = -0.500`,
          annotations: [
            { lines: '6-10', text: 'A grid with spacing $dx$ and time step $dt$. With $v\\,dt/dx = 1$ this scheme happens to be exact on the grid points; with $v\\,dt/dx > 1$ it blows up (a stability limit you will meet again in the game-physics unit).' },
            { lines: '13-16', text: 'Start with a bump of height $1$ at rest.' },
            { lines: '32-33', text: 'The wave equation with second derivatives replaced by centered differences: $\\frac{y_{i}^{n+1} - 2y_i^n + y_i^{n-1}}{dt^2} = v^2\\,\\frac{y_{i+1}^n - 2y_i^n + y_{i-1}^n}{dx^2}$.' },
            { lines: 34, text: 'Fixed ends: $y = 0$ at both walls, like a guitar string.' },
          ],
        },
        {
          type: 'p',
          text: 'Read the output. A bump released from rest splits into **two** half-height pulses, one moving each way, as $y = \\tfrac12 f(x - vt) + \\tfrac12 f(x + vt)$ predicts. The right-moving one is at $x = 1.20\\,\\text{m}$ after $0.0100\\,\\text{s}$: $20\\,\\text{m/s}$, exactly $\\sqrt{F_T/\\mu}$. By $t = 0.0750\\,\\text{s}$ it has hit the fixed end at $x = 2.00\\,\\text{m}$ and come back **upside down**, a fact the next lesson uses to build standing waves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Complete the check that $y = A\\sin(kx - \\omega t)$ solves the wave equation $\\dfrac{\\partial^2 y}{\\partial x^2} = \\dfrac{1}{v^2}\\dfrac{\\partial^2 y}{\\partial t^2}$.',
      template: '$\\dfrac{\\partial^2 y}{\\partial x^2} =$ ___ $\\cdot\\, y$ and $\\dfrac{\\partial^2 y}{\\partial t^2} =$ ___ $\\cdot\\, y$, so the equation holds when $v =$ ___.',
      blanks: [{ answers: ['$-k^2$'] }, { answers: ['$-\\omega^2$'] }, { answers: ['$\\omega/k$'] }],
      wordBank: ['$-k^2$', '$-\\omega^2$', '$\\omega/k$', '$k/\\omega$', '$k^2$', '$\\omega k$'],
      explanation: 'Each $x$-derivative brings out a factor $k$ and each $t$-derivative a factor $-\\omega$; two derivatives of $\\sin$ give $-\\sin$. So $\\partial_x^2 y = -k^2 y$ and $\\partial_t^2 y = -\\omega^2 y$. Substituting, $-k^2 y = -\\omega^2 y/v^2$, so $v^2 = \\omega^2/k^2$ and $v = \\omega/k$ (the speed is positive).',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps of the wave-equation derivation for a string in order.',
      lines: [
        'Isolate a small element between $x$ and $x + dx$, with mass $\\mu\\,dx$ and tension $F_T$ at each end',
        'Write the net vertical force as $F_T$ times the difference of the slopes at the two ends',
        'Replace the slope difference by $\\frac{\\partial^2 y}{\\partial x^2}\\,dx$',
        'Apply $F_y = ma_y$ with $a_y = \\frac{\\partial^2 y}{\\partial t^2}$',
        'Divide by $F_T\\,dx$ and identify $1/v^2 = \\mu/F_T$',
      ],
      explanation: 'This is Knight\'s problem-solving recipe applied to a continuous medium: choose the system (one element), find the forces on it (tension at both ends; small slopes make $\\sin\\theta \\approx \\partial y/\\partial x$), express the net force, apply Newton\'s second law, then simplify. Because $dx$ cancels, the result holds at every point of the string.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Energy and power carried by a wave',
      blocks: [
        {
          type: 'p',
          text: 'A wave delivers energy, and the rate at which it does so is its [[phys-power|power]]: that is how sound reaches your eardrum and how ocean swell erodes a cliff. Each element of the string has kinetic energy (it moves) and potential energy (it is stretched, because a tilted piece of string is longer than $dx$). Let\'s compute both for a traveling wave.',
        },
        {
          type: 'derivation',
          title: 'Energy per unit length of a traveling wave',
          steps: [
            { tex: 'dK = \\tfrac12(\\mu\\,dx)\\left(\\frac{\\partial y}{\\partial t}\\right)^2', why: 'Kinetic energy $\\tfrac12 mv^2$ of the element.' },
            { tex: 'ds = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (\\partial y/\\partial x)^2}\\,dx \\approx \\left(1 + \\tfrac12\\left(\\frac{\\partial y}{\\partial x}\\right)^2\\right)dx', why: 'The tilted element is longer than $dx$. For small $u$, $\\sqrt{1 + u} \\approx 1 + \\tfrac{u}{2}$ (the tangent-line approximation at $u = 0$, since the derivative of $\\sqrt{1+u}$ there is $\\tfrac12$).' },
            { tex: 'dU = F_T\\,(ds - dx) = \\tfrac12 F_T\\left(\\frac{\\partial y}{\\partial x}\\right)^2 dx', why: 'Stretching the element by $ds - dx$ against the tension $F_T$ stores this much work as potential energy.' },
            { tex: '\\frac{\\partial y}{\\partial t} = -v\\,\\frac{\\partial y}{\\partial x} \\implies dU = \\tfrac12 \\mu v^2\\left(\\frac{\\partial y}{\\partial x}\\right)^2 dx = dK', why: 'For $y = f(x - vt)$ the chain rule gives $\\partial_t y = -vf\'$ and $\\partial_x y = f\'$. Also $F_T = \\mu v^2$. So kinetic and potential energy are **equal** at every point.' },
            { tex: '\\frac{dE}{dx} = \\mu\\left(\\frac{\\partial y}{\\partial t}\\right)^2 = \\mu\\omega^2A^2\\cos^2(kx - \\omega t)', why: 'Add $dK$ and $dU$ and use $\\partial_t y = -\\omega A\\cos(kx - \\omega t)$.' },
            { tex: '\\left(\\frac{dE}{dx}\\right)_{\\text{avg}} = \\tfrac12\\mu\\omega^2A^2', why: 'The average of $\\cos^2$ over a cycle is $\\tfrac12$.' },
          ],
          result: 'The energy is concentrated where the string crosses $y = 0$ (fastest **and** most stretched), and none sits at the crests. That packet of energy rides along with the wave at speed $v$.',
        },
        {
          type: 'graph',
          x: [0, 12.6],
          y: [-1.3, 1.3],
          height: 240,
          functions: [
            { expr: 'sin(x - s)', label: 'displacement $y$', color: 'blue' },
            { expr: 'cos(x - s)^2', label: 'energy per length (scaled)', color: 'orange', dashed: true },
          ],
          points: [{ x: '1.5708 + s', y: 1, label: 'crest: no energy', color: 'purple' }],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.5 }],
          caption: 'The orange energy density travels with the blue wave. It peaks where the string crosses the axis and is zero at every crest and trough, where the string is momentarily at rest and locally unstretched.',
        },
        {
          type: 'theorem',
          name: 'Average power of a sinusoidal wave on a string',
          tex: 'P_{\\text{avg}} = \\left(\\frac{dE}{dx}\\right)_{\\text{avg}} v = \\tfrac12\\mu v\\,\\omega^2A^2',
          text: 'Energy per meter times meters per second. The power grows as the **square** of the amplitude and the **square** of the frequency.',
        },
        {
          type: 'derivation',
          title: 'Power needed to drive a rope',
          steps: [
            { tex: '\\mu = 0.250\\,\\text{kg/m},\\ F_T = 100\\,\\text{N} \\implies v = \\sqrt{100/0.250} = 20.0\\,\\text{m/s}', why: 'Speed from the string\'s properties.' },
            { tex: 'f = 10.0\\,\\text{Hz} \\implies \\omega = 2\\pi f = 62.8\\,\\text{rad/s}', why: 'Angular frequency, not $f$, goes into the formula.' },
            { tex: 'P_{\\text{avg}} = \\tfrac12(0.250)(20.0)(62.8)^2(0.0500)^2 = 24.7\\,\\text{W}', why: 'With amplitude $A = 5.00\\,\\text{cm} = 0.0500\\,\\text{m}$. Units: $\\text{(kg/m)(m/s)(s}^{-2}\\text{)(m}^2\\text{)} = \\text{kg}\\,\\text{m}^2/\\text{s}^3 = \\text{W}$. ✓' },
          ],
          result: 'Your arm must supply about $25\\,\\text{W}$; double the amplitude and it becomes about $99\\,\\text{W}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Spreading out',
          text: 'On a string the energy stays in one dimension, so (ignoring friction) the amplitude stays constant. A sound wave from a small source spreads over a growing sphere, so its intensity drops like $1/r^2$. That is where the next lesson\'s decibel scale and your game engine\'s distance attenuation come from.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A string with linear density $\\mu = 0.0500\\,\\text{kg/m}$ is under tension $F_T = 80.0\\,\\text{N}$. A vibrator drives a sinusoidal wave of frequency $60.0\\,\\text{Hz}$ and amplitude $6.00\\,\\text{mm}$ along it. What average power does the vibrator deliver? Give 3 significant figures.',
      label: '$P_{\\text{avg}} =$',
      unit: 'W',
      answer: '0.5*0.05*sqrt(80/0.05)*(2*pi*60)^2*0.006^2',
      answerTex: '5.12\\,\\text{W}',
      tolerance: 0.04,
      hint: 'Find $v = \\sqrt{F_T/\\mu}$ and $\\omega = 2\\pi f$, convert $A$ to meters, then use $P_{\\text{avg}} = \\tfrac12\\mu v\\omega^2A^2$.',
      explanation: '$v = \\sqrt{80.0/0.0500} = 40.0\\,\\text{m/s}$, $\\omega = 2\\pi(60.0) = 377\\,\\text{rad/s}$, $A = 6.00 \\times 10^{-3}\\,\\text{m}$. Then $P_{\\text{avg}} = \\tfrac12(0.0500)(40.0)(377)^2(6.00 \\times 10^{-3})^2 = 5.12\\,\\text{W}$. Forgetting the $\\tfrac12$ gives $10.2\\,\\text{W}$; using $f$ instead of $\\omega$ gives $0.130\\,\\text{W}$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A student analyzes the wave $y = (0.030\\,\\text{m})\\sin(2.0x - 50t)$ (SI units). Tap the first line with a mistake.',
      lines: [
        '$k = 2.0\\,\\text{rad/m}$, so $\\lambda = 2\\pi/k = 3.14\\,\\text{m}$.',
        '$\\omega = 50\\,\\text{rad/s}$, so $f = 50\\,\\text{Hz}$.',
        'The wave speed is $v = f\\lambda = (50)(3.14) = 157\\,\\text{m/s}$.',
        'The maximum transverse speed of the string is $\\omega A = (50)(0.030) = 1.5\\,\\text{m/s}$.',
      ],
      errorLines: [2],
      explanation: 'Line 2 confuses angular frequency with frequency. The number multiplying $t$ is $\\omega$ in rad/s, and $f = \\omega/2\\pi = 50/2\\pi = 7.96\\,\\text{Hz}$. Then $v = f\\lambda = (7.96)(3.14) = 25\\,\\text{m/s}$, which agrees with $v = \\omega/k = 50/2.0 = 25\\,\\text{m/s}$. Line 4 is correct, because $\\omega A$ uses the angular frequency.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'On the same string at the same tension, you double the amplitude of a wave and halve its frequency. What happens to the average power it carries?',
      options: [
        { text: 'It stays the same', correct: true, why: '$P \\propto A^2\\omega^2$: the factor $2^2 = 4$ from the amplitude cancels the factor $(1/2)^2 = 1/4$ from the frequency.' },
        { text: 'It doubles', why: 'This treats power as proportional to $A$ and to $\\omega$ to the first power. Both appear squared.' },
        { text: 'It quadruples', why: 'That is the effect of doubling $A$ alone. Halving $\\omega$ cuts the power by a factor of $4$ as well.' },
        { text: 'It halves, because the wave now moves at half the speed', why: 'The wave speed $v = \\sqrt{F_T/\\mu}$ does not depend on frequency, so it is unchanged.' },
      ],
      explanation: '$P_{\\text{avg}} = \\tfrac12\\mu v\\omega^2A^2$, and $\\mu$ and $v$ are fixed by the string. New power: $\\tfrac12\\mu v(\\omega/2)^2(2A)^2 = \\tfrac12\\mu v\\omega^2A^2$, the same. Energy in a wave scales like the energy of each little oscillator, $\\tfrac12 m\\omega^2A^2$.',
    },
  ],
  takeaways: [
    'A mechanical wave carries energy and momentum through a medium while each bit of the medium only oscillates in place: perpendicular to the travel (transverse) or along it (longitudinal).',
    'Any $f(x - vt)$ is a shape moving toward $+x$ at speed $v$. The sinusoidal wave $y = A\\sin(kx - \\omega t + \\phi)$ has $k = 2\\pi/\\lambda$, $\\omega = 2\\pi f$, and $v = f\\lambda = \\omega/k$; equal signs on $kx$ and $\\omega t$ mean travel toward $-x$.',
    'The transverse particle velocity $\\partial y/\\partial t = -\\omega A\\cos(kx - \\omega t)$ is unrelated to the wave speed; every point of the string undergoes SHM.',
    'On a string $v = \\sqrt{F_T/\\mu}$: the medium sets the speed, the source sets the frequency, and $\\lambda = v/f$ adjusts.',
    'Newton\'s second law on a string element gives the wave equation $\\partial_x^2 y = \\frac{1}{v^2}\\partial_t^2 y$, solved by every $f(x \\mp vt)$.',
    'A sinusoidal wave on a string carries average power $P_{\\text{avg}} = \\tfrac12\\mu v\\omega^2A^2$, proportional to amplitude squared and frequency squared.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 16: Waves',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 16.1–16.4 cover traveling waves, the wave speed on a string and the energy and power of a wave at this lesson\'s level.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "Wave on a String" to change tension, damping and frequency and watch pulses reflect from fixed and loose ends.',
    },
    {
      title: 'Wikipedia: Wave equation',
      url: 'https://en.wikipedia.org/wiki/Wave_equation',
      source: 'wikipedia',
      note: 'd\'Alembert\'s general solution $f(x - vt) + g(x + vt)$ and the wave equation in two and three dimensions.',
    },
    {
      title: 'Khan Academy: Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The "Mechanical waves and sound" unit has short videos on wave speed, wavelength and period.',
    },
  ],
};
