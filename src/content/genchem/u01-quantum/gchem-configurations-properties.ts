import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_BLOCKS = `<svg viewBox="0 0 500 302" xmlns="http://www.w3.org/2000/svg">
<rect x="40" y="40" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="448" y="40" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="30.0" y="56.0" text-anchor="end" font-size="12" class="t-gray">1</text>
<rect x="40" y="64" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="64" y="64" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="328" y="64" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="352" y="64" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="376" y="64" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="400" y="64" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="424" y="64" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="448" y="64" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="30.0" y="80.0" text-anchor="end" font-size="12" class="t-gray">2</text>
<rect x="40" y="88" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="64" y="88" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="328" y="88" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="352" y="88" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="376" y="88" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="400" y="88" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="424" y="88" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="448" y="88" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="30.0" y="104.0" text-anchor="end" font-size="12" class="t-gray">3</text>
<rect x="40" y="112" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="64" y="112" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="88" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="112" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="136" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="160" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="184" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="208" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="232" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="256" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="280" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="304" y="112" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="328" y="112" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="352" y="112" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="376" y="112" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="400" y="112" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="424" y="112" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="448" y="112" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="30.0" y="128.0" text-anchor="end" font-size="12" class="t-gray">4</text>
<rect x="40" y="136" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="64" y="136" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="88" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="112" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="136" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="160" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="184" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="208" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="232" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="256" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="280" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="304" y="136" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="328" y="136" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="352" y="136" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="376" y="136" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="400" y="136" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="424" y="136" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="448" y="136" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="30.0" y="152.0" text-anchor="end" font-size="12" class="t-gray">5</text>
<rect x="40" y="160" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="64" y="160" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="88" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="112" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="136" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="160" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="184" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="208" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="232" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="256" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="280" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="304" y="160" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="328" y="160" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="352" y="160" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="376" y="160" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="400" y="160" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="424" y="160" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="448" y="160" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="30.0" y="176.0" text-anchor="end" font-size="12" class="t-gray">6</text>
<rect x="40" y="184" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="64" y="184" width="24" height="24" class="f-blue" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="88" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="112" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="136" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="160" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="184" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="208" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="232" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="256" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="280" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="304" y="184" width="24" height="24" class="f-orange" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="328" y="184" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="352" y="184" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="376" y="184" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="400" y="184" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="424" y="184" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="448" y="184" width="24" height="24" class="f-green" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="30.0" y="200.0" text-anchor="end" font-size="12" class="t-gray">7</text>
<rect x="100" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="124" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="148" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="172" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="196" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="220" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="244" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="268" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="292" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="316" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="340" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="364" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="388" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="412" y="224" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="100" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="124" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="148" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="172" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="196" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="220" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="244" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="268" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="292" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="316" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="340" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="364" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="388" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<rect x="412" y="248" width="24" height="24" class="f-purple" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.55" stroke-width="0.8"/>
<text x="92.0" y="240.0" text-anchor="end" font-size="12" class="t-gray">6</text>
<text x="92.0" y="264.0" text-anchor="end" font-size="12" class="t-gray">7</text>
<text x="64.0" y="128.0" text-anchor="middle" font-size="14" font-weight="700">ns</text>
<text x="400.0" y="80.0" text-anchor="middle" font-size="14" font-weight="700">np</text>
<text x="208.0" y="152.0" text-anchor="middle" font-size="14" font-weight="700">(n−1)d</text>
<text x="268.0" y="250.0" text-anchor="middle" font-size="14" font-weight="700">(n−2)f</text>
<text x="64.0" y="28.0" text-anchor="middle" font-size="12" class="t-blue">s block</text>
<text x="400.0" y="28.0" text-anchor="middle" font-size="12" class="t-green">p block</text>
<text x="208.0" y="92.0" text-anchor="middle" font-size="12" class="t-orange">d block</text>
<text x="268.0" y="288.0" text-anchor="middle" font-size="12" class="t-purple">f block</text>
<text x="460.0" y="56.0" text-anchor="middle" font-size="10">He</text>
<text x="52.0" y="56.0" text-anchor="middle" font-size="10">H</text>
</svg>`;

const FIG_CRCU = `<svg viewBox="0 0 520 264" xmlns="http://www.w3.org/2000/svg">
<text x="150.0" y="22.0" text-anchor="middle" font-size="13">Aufbau prediction</text>
<text x="390.0" y="22.0" text-anchor="middle" font-size="13" class="t-green">Observed</text>
<rect x="20" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M32,69 V46 M28,52 L32,45 L36,52" fill="none" stroke="currentColor" stroke-width="2"/><path d="M44,45 V68 M40,62 L44,69 L48,62" fill="none" stroke="currentColor" stroke-width="2"/><rect x="76" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M94,69 V46 M90,52 L94,45 L98,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="112" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M130,69 V46 M126,52 L130,45 L134,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="148" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M166,69 V46 M162,52 L166,45 L170,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="184" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M202,69 V46 M198,52 L202,45 L206,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="220" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/>
<rect x="270" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M288,69 V46 M284,52 L288,45 L292,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="326" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M344,69 V46 M340,52 L344,45 L348,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="362" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M380,69 V46 M376,52 L380,45 L384,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="398" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M416,69 V46 M412,52 L416,45 L420,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="434" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M452,69 V46 M448,52 L452,45 L456,52" fill="none" stroke="currentColor" stroke-width="2"/><rect x="470" y="40" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M488,69 V46 M484,52 L488,45 L492,52" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="38.0" y="92.0" text-anchor="middle" font-size="11" class="t-gray">4s</text>
<text x="166.0" y="92.0" text-anchor="middle" font-size="11" class="t-gray">3d</text>
<text x="288.0" y="92.0" text-anchor="middle" font-size="11" class="t-gray">4s</text>
<text x="416.0" y="92.0" text-anchor="middle" font-size="11" class="t-gray">3d</text>
<text x="150.0" y="116.0" text-anchor="middle" font-size="13">Cr: [Ar] 4s² 3d⁴</text>
<text x="390.0" y="116.0" text-anchor="middle" font-size="13" class="t-green">Cr: [Ar] 4s¹ 3d⁵</text>
<text x="150.0" y="134.0" text-anchor="middle" font-size="11" class="t-gray">4 unpaired, one paired 4s</text>
<text x="390.0" y="134.0" text-anchor="middle" font-size="11" class="t-gray">6 unpaired, all parallel</text>
<rect x="20" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M32,189 V166 M28,172 L32,165 L36,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M44,165 V188 M40,182 L44,189 L48,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="76" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M88,189 V166 M84,172 L88,165 L92,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M100,165 V188 M96,182 L100,189 L104,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="112" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M124,189 V166 M120,172 L124,165 L128,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M136,165 V188 M132,182 L136,189 L140,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="148" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M160,189 V166 M156,172 L160,165 L164,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M172,165 V188 M168,182 L172,189 L176,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="184" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M196,189 V166 M192,172 L196,165 L200,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M208,165 V188 M204,182 L208,189 L212,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="220" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M238,189 V166 M234,172 L238,165 L242,172" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="270" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M288,189 V166 M284,172 L288,165 L292,172" fill="none" stroke="currentColor" stroke-width="2"/><rect x="326" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M338,189 V166 M334,172 L338,165 L342,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M350,165 V188 M346,182 L350,189 L354,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="362" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M374,189 V166 M370,172 L374,165 L378,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M386,165 V188 M382,182 L386,189 L390,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="398" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M410,189 V166 M406,172 L410,165 L414,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M422,165 V188 M418,182 L422,189 L426,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="434" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M446,189 V166 M442,172 L446,165 L450,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M458,165 V188 M454,182 L458,189 L462,182" fill="none" stroke="currentColor" stroke-width="2"/><rect x="470" y="160" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M482,189 V166 M478,172 L482,165 L486,172" fill="none" stroke="currentColor" stroke-width="2"/><path d="M494,165 V188 M490,182 L494,189 L498,182" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="38.0" y="212.0" text-anchor="middle" font-size="11" class="t-gray">4s</text>
<text x="166.0" y="212.0" text-anchor="middle" font-size="11" class="t-gray">3d</text>
<text x="288.0" y="212.0" text-anchor="middle" font-size="11" class="t-gray">4s</text>
<text x="416.0" y="212.0" text-anchor="middle" font-size="11" class="t-gray">3d</text>
<text x="150.0" y="236.0" text-anchor="middle" font-size="13">Cu: [Ar] 4s² 3d⁹</text>
<text x="390.0" y="236.0" text-anchor="middle" font-size="13" class="t-green">Cu: [Ar] 4s¹ 3d¹⁰</text>
<text x="150.0" y="254.0" text-anchor="middle" font-size="11" class="t-gray">3d one short of full</text>
<text x="390.0" y="254.0" text-anchor="middle" font-size="11" class="t-gray">filled 3d, 1 unpaired 4s</text>
<line x1="260" y1="30" x2="260" y2="258" stroke="currentColor" stroke-opacity="0.25"/>
</svg>`;

const FIG_FE = `<svg viewBox="0 0 520 222" xmlns="http://www.w3.org/2000/svg">
<text x="28.0" y="43.0" text-anchor="middle" font-size="16" font-weight="700">Fe</text>
<rect x="60" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M72,49 V26 M68,32 L72,25 L76,32" fill="none" stroke="currentColor" stroke-width="2"/><path d="M84,25 V48 M80,42 L84,49 L88,42" fill="none" stroke="currentColor" stroke-width="2"/><rect x="116" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M128,49 V26 M124,32 L128,25 L132,32" fill="none" stroke="currentColor" stroke-width="2"/><path d="M140,25 V48 M136,42 L140,49 L144,42" fill="none" stroke="currentColor" stroke-width="2"/><rect x="152" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M170,49 V26 M166,32 L170,25 L174,32" fill="none" stroke="currentColor" stroke-width="2"/><rect x="188" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M206,49 V26 M202,32 L206,25 L210,32" fill="none" stroke="currentColor" stroke-width="2"/><rect x="224" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M242,49 V26 M238,32 L242,25 L246,32" fill="none" stroke="currentColor" stroke-width="2"/><rect x="260" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M278,49 V26 M274,32 L278,25 L282,32" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="316.0" y="34.0" text-anchor="start" font-size="13">[Ar] 4s² 3d⁶</text>
<text x="316.0" y="52.0" text-anchor="start" font-size="12" class="t-orange">4 unpaired</text>
<text x="28.0" y="105.0" text-anchor="middle" font-size="16" font-weight="700">Fe²⁺</text>
<rect x="60" y="82" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="116" y="82" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M128,111 V88 M124,94 L128,87 L132,94" fill="none" stroke="currentColor" stroke-width="2"/><path d="M140,87 V110 M136,104 L140,111 L144,104" fill="none" stroke="currentColor" stroke-width="2"/><rect x="152" y="82" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M170,111 V88 M166,94 L170,87 L174,94" fill="none" stroke="currentColor" stroke-width="2"/><rect x="188" y="82" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M206,111 V88 M202,94 L206,87 L210,94" fill="none" stroke="currentColor" stroke-width="2"/><rect x="224" y="82" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M242,111 V88 M238,94 L242,87 L246,94" fill="none" stroke="currentColor" stroke-width="2"/><rect x="260" y="82" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M278,111 V88 M274,94 L278,87 L282,94" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="316.0" y="96.0" text-anchor="start" font-size="13">[Ar] 3d⁶</text>
<text x="316.0" y="114.0" text-anchor="start" font-size="12" class="t-orange">4 unpaired: both 4s e⁻ gone</text>
<text x="28.0" y="167.0" text-anchor="middle" font-size="16" font-weight="700">Fe³⁺</text>
<rect x="60" y="144" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="116" y="144" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M134,173 V150 M130,156 L134,149 L138,156" fill="none" stroke="currentColor" stroke-width="2"/><rect x="152" y="144" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M170,173 V150 M166,156 L170,149 L174,156" fill="none" stroke="currentColor" stroke-width="2"/><rect x="188" y="144" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M206,173 V150 M202,156 L206,149 L210,156" fill="none" stroke="currentColor" stroke-width="2"/><rect x="224" y="144" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M242,173 V150 M238,156 L242,149 L246,156" fill="none" stroke="currentColor" stroke-width="2"/><rect x="260" y="144" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M278,173 V150 M274,156 L278,149 L282,156" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="316.0" y="158.0" text-anchor="start" font-size="13">[Ar] 3d⁵</text>
<text x="316.0" y="176.0" text-anchor="start" font-size="12" class="t-orange">5 unpaired: then one 3d e⁻</text>
<text x="78.0" y="214.0" text-anchor="middle" font-size="11" class="t-gray">4s</text>
<text x="206.0" y="214.0" text-anchor="middle" font-size="11" class="t-gray">3d</text>
</svg>`;

export const lesson: Lesson = {
  id: 'gchem-configurations-properties',
  title: 'Configurations, Magnetism and Periodic Properties',
  summary: 'Configurations through period 6, the Cr and Cu exceptions and why, transition-metal ions, paramagnetism and unpaired electrons, Slater\'s rules for effective nuclear charge, and the quantum reasons behind ionization energy, electron affinity and size.',
  minutes: 24,
  objectives: [
    'Write configurations and orbital diagrams for any element through period 6 by reading the periodic table\'s blocks',
    'Explain the Cr and Cu exceptions with exchange energy and the closeness of 4s and 3d',
    'Write configurations of transition-metal ions, removing ns electrons before (n − 1)d',
    'Classify species as paramagnetic or diamagnetic, count unpaired electrons, and compute spin-only magnetic moments',
    'Estimate effective nuclear charge with Slater\'s rules and use it to explain ionization energy, electron affinity and radius trends, including the Be/B and N/O anomalies',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Configurations beyond period 3: read the table',
      blocks: [
        {
          type: 'p',
          text: 'You already write [[electron-configuration|configurations]] through krypton. The last two lessons supplied the reasons behind the rules: the **Aufbau principle** is filling orbitals in order of energy, set by penetration and shielding; the **Pauli principle** caps each orbital at two electrons because quantum-number sets must be unique; and **Hund\'s rule** spreads electrons over degenerate orbitals with parallel spins. Now extend them to the whole table.',
        },
        {
          type: 'figure',
          svg: FIG_BLOCKS,
          alt: 'An outline of the periodic table, periods 1 to 7. The two left columns plus helium are blue, the s block, labelled ns. The six right columns from period 2 down are green, the p block, labelled np. The ten middle columns from period 4 down are orange, the d block, labelled n minus 1 d. Two separate rows of 14 below, for periods 6 and 7, are purple, the f block, labelled n minus 2 f.',
          caption: 'The table **is** the filling order. Walk across a period and the block you are in names the subshell being filled: $ns$, then $(n-2)f$ (periods 6–7), then $(n-1)d$, then $np$. Helium sits over the noble gases but belongs to the $s$ block ($1s^2$).',
        },
        {
          type: 'derivation',
          title: 'Iodine ($Z = 53$, period 5, group 17)',
          steps: [
            { tex: '[\\text{Kr}]', why: 'The noble gas at the end of period 4 accounts for 36 electrons.' },
            { tex: '[\\text{Kr}]\\,5s^2', why: 'Cross the $s$ block of period 5 (Rb, Sr).' },
            { tex: '[\\text{Kr}]\\,5s^2\\,4d^{10}', why: 'Cross the $d$ block (Y to Cd). In period 5 the $d$ subshell is $n - 1 = 4$.' },
            { tex: '[\\text{Kr}]\\,5s^2\\,4d^{10}\\,5p^5', why: 'Iodine is the fifth element of the $5p$ block. Check: $36 + 2 + 10 + 5 = 53$ ✓.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Lead ($Z = 82$, period 6, group 14)',
          steps: [
            { tex: '[\\text{Xe}]\\,6s^2', why: 'Xenon covers 54 electrons; Cs and Ba fill $6s$.' },
            { tex: '[\\text{Xe}]\\,6s^2\\,4f^{14}', why: 'Period 6 crosses the 14-element $f$ block; its subshell is $n - 2 = 4$.' },
            { tex: '[\\text{Xe}]\\,6s^2\\,4f^{14}\\,5d^{10}\\,6p^2', why: 'Then the $5d$ block and two steps into $6p$. Check: $54 + 2 + 14 + 10 + 2 = 82$ ✓.' },
          ],
          result: 'Two valence $6p$ electrons plus the $6s^2$ pair: lead forms both $\\ce{Pb^2+}$ and $\\ce{Pb^4+}$ compounds.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Hund\'s rule prefers parallel spins',
          text: 'Foundations said electrons spread out to reduce repulsion. There is a subtler bonus. Two electrons with the **same** spin can never be at the same place (that would duplicate their quantum state), so they automatically keep farther apart than opposite-spin electrons do. This lowers their repulsion, an effect called **[[gchem-exchange-energy|exchange energy]]**. The more same-spin pairs a subshell holds, the larger the stabilization: $N$ parallel electrons form $\\binom{N}{2} = N(N-1)/2$ pairs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Complete the ground-state configuration of tin, $Z = 50$ (period 5, group 14).',
      template: '$\\ce{Sn}$: ___ $5s^2$ ___ $5p^2$',
      blanks: [{ answers: ['$[\\text{Kr}]$'] }, { answers: ['$4d^{10}$'] }],
      wordBank: ['$[\\text{Kr}]$', '$[\\text{Ar}]$', '$4d^{10}$', '$3d^{10}$', '$5d^{10}$', '$4f^{14}$'],
      explanation: 'Krypton (36 electrons) is the core. Period 5 then fills $5s$ (2), the $d$ block, which is $4d$ in period 5 (10), and $5p$ up to tin\'s position (2): $36 + 2 + 10 + 2 = 50$ ✓. So tin is $[\\text{Kr}]\\,5s^2\\,4d^{10}\\,5p^2$. There is no $4f$ in period 5; the $f$ block first appears in period 6.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The chromium and copper exceptions, and why',
      blocks: [
        {
          type: 'p',
          text: 'Through krypton, two elements break the Aufbau order. Chromium is $[\\text{Ar}]\\,4s^1\\,3d^5$ rather than $4s^2\\,3d^4$, and copper is $[\\text{Ar}]\\,4s^1\\,3d^{10}$ rather than $4s^2\\,3d^9$. In each case one electron moves from $4s$ into $3d$.',
        },
        {
          type: 'figure',
          svg: FIG_CRCU,
          alt: 'Orbital box diagrams. Top row, chromium: the Aufbau prediction has a paired 4s box and four single up arrows in five 3d boxes, one empty, labelled 4 unpaired. The observed configuration has one up arrow in 4s and five up arrows filling all five 3d boxes, labelled 6 unpaired, all parallel. Bottom row, copper: the prediction has paired 4s and 3d with four paired boxes and one single; the observed has one 4s arrow and all five 3d boxes paired.',
          caption: 'Moving one $4s$ electron into $3d$ gives chromium a half-filled $3d^5$ subshell (six parallel spins) and copper a completely filled $3d^{10}$.',
        },
        {
          type: 'derivation',
          title: 'Counting same-spin pairs in chromium\'s 3d subshell',
          steps: [
            { tex: '3d^4:\\ \\binom{4}{2} = 6\\ \\text{parallel pairs}', why: 'Four electrons, all spin-up by Hund\'s rule; each pair of them contributes exchange stabilization.' },
            { tex: '3d^5:\\ \\binom{5}{2} = 10\\ \\text{parallel pairs}', why: 'The fifth parallel electron adds four new same-spin pairs.' },
            { tex: '4s^2 \\to 4s^1:\\ \\text{one fewer paired orbital}', why: 'The two $4s$ electrons no longer share an orbital, removing their pairing repulsion.' },
            { tex: '\\text{cost: one } 4s \\to 3d \\text{ promotion (small, since } E_{4s} \\approx E_{3d})', why: 'This is the deciding condition. The $4s$ and $3d$ energies are very close, so the gains above outweigh the small promotion cost.' },
          ],
          result: 'For copper the same bookkeeping gives $3d^{10}$ with $10 + 10 = 20$ same-spin pairs versus $10 + 6 = 16$ for $3d^9$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Half-filled is magic" is a heuristic, not a law',
          text: 'The real cause is the near-degeneracy of $ns$ and $(n-1)d$ combined with exchange energy. That is why the pattern repeats only where the energies cooperate: molybdenum ($[\\text{Kr}]\\,5s^1\\,4d^5$), silver ($[\\text{Kr}]\\,5s^1\\,4d^{10}$) and gold ($[\\text{Xe}]\\,4f^{14}\\,5d^{10}\\,6s^1$) follow Cr and Cu, but tungsten, directly below Mo, is the regular $[\\text{Xe}]\\,4f^{14}\\,5d^4\\,6s^2$. About twenty elements are irregular; general chemistry expects you to know Cr and Cu and their group-mates.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Silver ($Z = 47$) is directly below copper in group 11. What is its observed ground-state configuration?',
      options: [
        { text: '$[\\text{Kr}]\\,5s^2\\,4d^9$', why: 'That is the plain Aufbau prediction. Like copper, silver moves one $s$ electron into the $d$ subshell to complete it.' },
        { text: '$[\\text{Ar}]\\,4s^1\\,3d^{10}$', why: 'That is copper ($Z = 29$). Silver is one period lower, so its core is krypton and its valence subshells are $5s$ and $4d$.' },
        { text: '$[\\text{Kr}]\\,5s^2\\,4d^{10}$', why: 'This has $36 + 12 = 48$ electrons: it is cadmium, one element too far.' },
        { text: '$[\\text{Kr}]\\,5s^1\\,4d^{10}$', correct: true, why: 'Group 11 behaves like copper: a filled $4d^{10}$ and a single $5s$ electron. Check: $36 + 1 + 10 = 47$ ✓.' },
      ],
      explanation: 'Silver follows copper\'s pattern: one electron moves from $5s$ to complete $4d^{10}$, giving $[\\text{Kr}]\\,5s^1\\,4d^{10}$. That lone $5s$ electron is the one Stern and Gerlach\'s beam detected, and it explains why silver, like copper and gold, commonly forms $+1$ ions.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Ion configurations: transition metals lose ns first',
      blocks: [
        {
          type: 'p',
          text: 'For main-group elements, ions are straightforward: remove electrons from the highest-$n$ subshell, or add them to the partly filled one. $\\ce{Na+}$ is $[\\text{Ne}]$, $\\ce{O^2-}$ is $[\\text{Ne}]$, and $\\ce{Sn^2+}$ loses its two $5p$ electrons to become $[\\text{Kr}]\\,5s^2\\,4d^{10}$.',
        },
        {
          type: 'p',
          text: 'Transition metals surprise people. Iron fills $4s$ **before** $3d$, yet when it ionizes it loses the $4s$ electrons **first**. "Last in, first out" is wrong here.',
        },
        {
          type: 'figure',
          svg: FIG_FE,
          alt: 'Orbital boxes for iron and its ions. Fe: 4s paired, 3d with one paired box and four single up arrows, configuration argon 4s2 3d6, 4 unpaired. Fe 2 plus: 4s empty, 3d unchanged, configuration argon 3d6, 4 unpaired, both 4s electrons gone. Fe 3 plus: 4s empty, five single up arrows in 3d, configuration argon 3d5, 5 unpaired.',
          caption: '$\\ce{Fe -> Fe^2+}$ removes both $4s$ electrons; only then does $\\ce{Fe^2+ -> Fe^3+}$ take a $3d$ electron, leaving the half-filled $3d^5$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 4s leaves first',
          text: 'The "4s below 3d" ordering holds for potassium and calcium, where $3d$ is empty and barely penetrates. Once electrons occupy $3d$ and the nuclear charge grows across the transition series, the compact $3d$ orbitals feel the nucleus strongly and drop **below** $4s$. The $4s$ electrons are now the outermost, most weakly held ones. Slater\'s rules (later in this lesson) put numbers on it: in iron, a $3d$ electron feels $Z_{\\text{eff}} \\approx 6.25$ but a $4s$ electron only about $3.75$.',
        },
        {
          type: 'derivation',
          title: 'Copper(II), $\\ce{Cu^2+}$',
          steps: [
            { tex: '\\ce{Cu}: [\\text{Ar}]\\,4s^1\\,3d^{10}', why: 'Start from the observed (exceptional) configuration of the neutral atom.' },
            { tex: '\\ce{Cu+}: [\\text{Ar}]\\,3d^{10}', why: 'The first electron removed is the $4s$ electron.' },
            { tex: '\\ce{Cu^2+}: [\\text{Ar}]\\,3d^{9}', why: 'With $4s$ empty, the second comes from $3d$. Check: $29 - 2 = 27 = 18 + 9$ ✓.' },
          ],
          result: '$\\ce{Cu^2+}$ has one unpaired electron, and the partly filled $3d$ subshell is why copper(II) salts such as $\\ce{CuSO4*5H2O}$ are blue while copper(I) compounds are typically colorless or white.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The single most common configuration error on exams: writing $\\ce{Fe^2+}$ as $[\\text{Ar}]\\,4s^2\\,3d^4$. For a $d$-block cation, always remove the $ns$ electrons first, then $(n-1)d$. Then count: the superscripts must add to $Z$ minus the charge.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student finds the configuration and number of unpaired electrons of $\\ce{Co^2+}$. Tap the first line that is wrong.',
      lines: [
        'Cobalt has $Z = 27$, so a neutral atom has 27 electrons.',
        'Neutral cobalt is $[\\text{Ar}]\\,4s^2\\,3d^7$.',
        '$\\ce{Co^2+}$ has $27 - 2 = 25$ electrons.',
        'Remove the last two electrons added, which are in $3d$: $\\ce{Co^2+}$ is $[\\text{Ar}]\\,4s^2\\,3d^5$.',
        'So $\\ce{Co^2+}$ has 5 unpaired electrons.',
      ],
      errorLines: [4],
      explanation: 'Transition metals lose their $ns$ electrons first. $\\ce{Co^2+}$ is $[\\text{Ar}]\\,3d^7$. By Hund\'s rule, seven $3d$ electrons fill the five orbitals singly and then pair two of them ($\\uparrow\\downarrow\\ \\uparrow\\downarrow\\ \\uparrow\\ \\uparrow\\ \\uparrow$), so $\\ce{Co^2+}$ has **3** unpaired electrons, which magnetic measurements confirm.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Magnetism: counting unpaired electrons',
      blocks: [
        {
          type: 'p',
          text: 'Each electron\'s spin makes it a tiny magnet. In a filled orbital the two opposite spins cancel; an **unpaired** electron\'s does not. That gives a direct experimental test of a configuration: weigh a sample with and without a strong magnet beneath it (a Gouy balance) and see whether it is pulled in.',
        },
        {
          type: 'table',
          headers: ['Property', '[[gchem-paramagnetic|Paramagnetic]]', '[[gchem-diamagnetic|Diamagnetic]]'],
          rows: [
            ['Electrons', 'one or more unpaired', 'all paired'],
            ['In a magnetic field', 'drawn in (attracted)', 'weakly pushed out (repelled)'],
            ['Examples', '$\\ce{O}$ atom, $\\ce{Fe^3+}$, $\\ce{Cu^2+}$, liquid $\\ce{O2}$', '$\\ce{He}$, $\\ce{Zn^2+}$, $\\ce{Na+}$, water, $\\ce{N2}$'],
          ],
          caption: 'Diamagnetism is present in all matter but is about a thousand times weaker; any unpaired electrons win.',
        },
        {
          type: 'theorem',
          name: 'Spin-only magnetic moment',
          tex: '\\mu = \\sqrt{n(n + 2)}\\ \\mu_B',
          text: '$n$ is the number of unpaired electrons and $\\mu_B$ (the Bohr magneton) is the natural unit. Measuring $\\mu$ tells you $n$, which pins down a configuration. For many first-row transition-metal ions this formula matches experiment closely.',
        },
        {
          type: 'derivation',
          title: 'Manganese(II), $\\ce{Mn^2+}$',
          steps: [
            { tex: '\\ce{Mn}: [\\text{Ar}]\\,4s^2\\,3d^5 \\implies \\ce{Mn^2+}: [\\text{Ar}]\\,3d^5', why: 'Remove the two $4s$ electrons first.' },
            { tex: 'n = 5', why: 'Hund\'s rule: five $3d$ electrons occupy the five orbitals singly, all parallel.' },
            { tex: '\\mu = \\sqrt{5(5 + 2)} = \\sqrt{35} = 5.92\\ \\mu_B', why: 'Substitute into the spin-only formula.' },
          ],
          result: 'Measured values for $\\ce{Mn^2+}$ salts are close to $5.9\\ \\mu_B$, confirming five unpaired electrons and, with them, that the $4s$ electrons were the ones lost.',
        },
        {
          type: 'table',
          headers: ['Unpaired electrons $n$', '$0$', '$1$', '$2$', '$3$', '$4$', '$5$'],
          rows: [['$\\mu$ ($\\mu_B$)', '$0$', '$1.73$', '$2.83$', '$3.87$', '$4.90$', '$5.92$']],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Paramagnets you have met',
          text: 'MRI contrast agents are built around $\\ce{Gd^3+}$ ($[\\text{Xe}]\\,4f^7$, seven unpaired electrons, $\\mu \\approx 7.9\\ \\mu_B$), which strongly affects nearby water molecules. Iron, cobalt and nickel go further: in the solid metal, unpaired spins on neighboring atoms lock into alignment over whole domains. That cooperative effect, **ferromagnetism**, is what makes permanent magnets and compass needles work.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Calculate the spin-only magnetic moment of $\\ce{Ni^2+}$ (nickel: $Z = 28$, $[\\text{Ar}]\\,4s^2\\,3d^8$), in Bohr magnetons, to two decimal places.',
      hint: 'Write the ion\'s configuration (remove $4s$ first), draw the five $3d$ boxes, count unpaired electrons $n$, then use $\\mu = \\sqrt{n(n+2)}$.',
      label: '$\\mu =$',
      unit: 'μ_B',
      answer: 'sqrt(8)',
      answerTex: '2.83\\ \\mu_B',
      explanation: '$\\ce{Ni^2+}$ is $[\\text{Ar}]\\,3d^8$. Eight electrons in five orbitals: five go in singly, three more pair up, leaving $\\uparrow\\downarrow\\ \\uparrow\\downarrow\\ \\uparrow\\downarrow\\ \\uparrow\\ \\uparrow$, so $n = 2$. Then $\\mu = \\sqrt{2(2 + 2)} = \\sqrt{8} = 2.83\\ \\mu_B$. Nickel(II) compounds are paramagnetic.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'An atom with an even number of electrons must be diamagnetic, because the electrons can all pair up.',
      answer: false,
      explanation: 'Hund\'s rule often prevents pairing. An oxygen atom has 8 electrons, but its $2p^4$ subshell is $\\uparrow\\downarrow\\ \\uparrow\\ \\uparrow$: two unpaired, so it is paramagnetic. Carbon ($2p^2$) and iron ($3d^6$, four unpaired) are other even-electron examples. The reverse statement is the reliable one: an odd number of electrons guarantees at least one unpaired electron, and therefore paramagnetism.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Effective nuclear charge with Slater\'s rules',
      blocks: [
        {
          type: 'p',
          text: 'In Foundations you estimated $Z_{\\text{eff}} \\approx Z - (\\text{core electrons})$. That assumes core electrons shield perfectly and same-shell electrons not at all. Penetration says both assumptions are too crude. In 1930 John Slater turned the physics into simple bookkeeping, now called **[[gchem-slater-rules|Slater\'s rules]]**: $Z_{\\text{eff}} = Z - S$, where the **shielding constant** $S$ adds up a fraction for each other electron.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Group the configuration', text: 'Write it as $(1s)(2s, 2p)(3s, 3p)(3d)(4s, 4p)(4d)(4f)(5s, 5p)\\dots$ Electrons in groups to the **right** of the chosen electron contribute nothing.' },
            { title: 'Same group', text: 'Each other electron in the same group contributes $0.35$ (but $0.30$ within $1s$).' },
            { title: 'For an $s$ or $p$ electron', text: 'Each electron in shell $n - 1$ contributes $0.85$; each in shell $n - 2$ or lower contributes $1.00$.' },
            { title: 'For a $d$ or $f$ electron', text: 'Every electron in groups to its left contributes $1.00$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why those numbers',
          text: 'They encode penetration. Electrons deep inside ($n - 2$ and below) are almost always between the nucleus and the outer electron: full shielding, 1.00. Electrons one shell in are mostly inside, but the outer $s$ and $p$ electrons penetrate them some of the time: 0.85. Electrons in the same group are as often outside as inside: only 0.35. A $d$ or $f$ electron barely penetrates anything beneath it, so everything to its left counts fully.',
        },
        {
          type: 'derivation',
          title: 'Sodium and chlorine, valence electron',
          steps: [
            { tex: '\\ce{Na}: (1s^2)(2s^2 2p^6)(3s^1):\\ S = 8(0.85) + 2(1.00) = 8.80', why: 'No other $n = 3$ electrons. The eight $n = 2$ electrons are shell $n - 1$; the two $1s$ electrons are $n - 2$.' },
            { tex: 'Z_{\\text{eff}}(\\ce{Na}) = 11 - 8.80 = 2.20', why: 'Compare with the crude estimate of $+1$: the $3s$ electron penetrates the core and feels more than one proton\'s worth.' },
            { tex: '\\ce{Cl}: (1s^2)(2s^2 2p^6)(3s^2 3p^5):\\ S = 6(0.35) + 8(0.85) + 2(1.00) = 10.90', why: 'Six other electrons in the $(3s, 3p)$ group, then the same core as sodium.' },
            { tex: 'Z_{\\text{eff}}(\\ce{Cl}) = 17 - 10.90 = 6.10', why: 'Across period 3 each added proton is only 35% cancelled by the added same-shell electron, so $Z_{\\text{eff}}$ climbs by $0.65$ per element.' },
          ],
          result: 'These are the "careful" values quoted in Foundations: about $+2.2$ for Na and $+6.1$ for Cl.',
        },
        {
          type: 'graph',
          x: [18, 37],
          y: [0, 10],
          xStep: 1,
          yStep: 1,
          height: 300,
          functions: [
            { expr: '2.2 + 0.65(x - 19)', color: 'blue', domain: [19, 20], label: 'outermost $4s$/$4p$ electron' },
            { expr: '2.85 + 0.15(x - 20)', color: 'blue', domain: [20, 30] },
            { expr: '4.35 + 0.65(x - 30)', color: 'blue', domain: [30, 36] },
            { expr: '3 + 0.65(x - 21)', color: 'orange', domain: [21, 30], label: 'a $3d$ electron' },
          ],
          points: [
            { x: 19, y: 2.2, label: 'K', color: 'blue' },
            { x: 20, y: 2.85, label: 'Ca', color: 'blue' },
            { x: 26, y: 3.75, label: 'Fe 4s', color: 'blue' },
            { x: 26, y: 6.25, label: 'Fe 3d', color: 'orange' },
            { x: 30, y: 4.35, label: 'Zn', color: 'blue' },
            { x: 36, y: 8.25, label: 'Kr', color: 'blue' },
          ],
          caption: 'Slater $Z_{\\text{eff}}$ against $Z$ across period 4 (K to Kr, drawn with the regular $4s^2$ pattern; Cr and Cu sit slightly lower). Across the $d$ block the outermost $4s$ electron gains only $0.15$ per element, because each added $3d$ electron, one shell in, shields it at $0.85$. Meanwhile the $3d$ electrons themselves feel far more charge, which is why $4s$ is lost first.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Use Slater\'s rules to find $Z_{\\text{eff}}$ for the $4s$ valence electron of potassium, $Z = 19$, configuration $(1s^2)(2s^2 2p^6)(3s^2 3p^6)(4s^1)$. Give two decimal places.',
      hint: 'No other $n = 4$ electrons. The eight $n = 3$ electrons are shell $n - 1$; the ten $n = 1$ and $n = 2$ electrons are $n - 2$ or lower.',
      label: '$Z_{\\text{eff}} =$',
      answer: '2.2',
      answerTex: '2.20',
      tolerance: 0.005,
      explanation: '$S = 8(0.85) + 10(1.00) = 6.80 + 10.00 = 16.80$, so $Z_{\\text{eff}} = 19 - 16.80 = 2.20$, the same as sodium. This makes the group trend clean: the valence electrons of Na and K feel the same effective charge, but potassium\'s is in shell 4, farther out, so it is held more weakly. That is why $IE_1(\\ce{K}) = 419$ kJ/mol is lower than $IE_1(\\ce{Na}) = 496$ kJ/mol and potassium is the more reactive metal.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Ionization energy, quantitatively: the Be/B and N/O dips',
      blocks: [
        {
          type: 'p',
          text: 'The first ionization energy $IE_1$ is the energy of $\\ce{X(g) -> X+(g) + e-}$. Since $Z_{\\text{eff}}$ climbs steadily across a period, you might expect $IE_1$ to climb steadily too. It nearly does, with two dips that repeat in the same positions in period 2 and period 3. Lining the two periods up by group makes the pattern obvious.',
        },
        {
          type: 'graph',
          x: [0.5, 8.5],
          y: [0, 2.4],
          xStep: 1,
          yStep: 0.25,
          height: 320,
          points: [
            { x: 1, y: 0.5202, label: 'Li', color: 'blue' },
            { x: 2, y: 0.8995, label: 'Be', color: 'blue' },
            { x: 3, y: 0.8006, label: 'B', color: 'blue' },
            { x: 4, y: 1.0865, label: 'C', color: 'blue' },
            { x: 5, y: 1.4023, label: 'N', color: 'blue' },
            { x: 6, y: 1.3139, label: 'O', color: 'blue' },
            { x: 7, y: 1.6810, label: 'F', color: 'blue' },
            { x: 8, y: 2.0807, label: 'Ne', color: 'blue' },
            { x: 1, y: 0.4958, label: 'Na', color: 'orange' },
            { x: 2, y: 0.7377, label: 'Mg', color: 'orange' },
            { x: 3, y: 0.5775, label: 'Al', color: 'orange' },
            { x: 4, y: 0.7865, label: 'Si', color: 'orange' },
            { x: 5, y: 1.0118, label: 'P', color: 'orange' },
            { x: 6, y: 0.9996, label: 'S', color: 'orange' },
            { x: 7, y: 1.2512, label: 'Cl', color: 'orange' },
            { x: 8, y: 1.5206, label: 'Ar', color: 'orange' },
          ],
          segments: [
            { from: [1, 0.5202], to: [2, 0.8995], color: 'blue' },
            { from: [2, 0.8995], to: [3, 0.8006], color: 'blue' },
            { from: [3, 0.8006], to: [4, 1.0865], color: 'blue' },
            { from: [4, 1.0865], to: [5, 1.4023], color: 'blue' },
            { from: [5, 1.4023], to: [6, 1.3139], color: 'blue' },
            { from: [6, 1.3139], to: [7, 1.6810], color: 'blue' },
            { from: [7, 1.6810], to: [8, 2.0807], color: 'blue' },
            { from: [1, 0.4958], to: [2, 0.7377], color: 'orange' },
            { from: [2, 0.7377], to: [3, 0.5775], color: 'orange' },
            { from: [3, 0.5775], to: [4, 0.7865], color: 'orange' },
            { from: [4, 0.7865], to: [5, 1.0118], color: 'orange' },
            { from: [5, 1.0118], to: [6, 0.9996], color: 'orange' },
            { from: [6, 0.9996], to: [7, 1.2512], color: 'orange' },
            { from: [7, 1.2512], to: [8, 1.5206], color: 'orange' },
          ],
          caption: '$IE_1$ in thousands of kJ/mol ($1.5$ means $1500$ kJ/mol) against position in the period (1 = group 1, 3 = group 13, 8 = group 18). Blue: period 2; orange: period 3. Both periods dip at the same two places, after $s^2$ and after $p^3$, so the cause must be electronic, not a quirk of particular elements.',
        },
        {
          type: 'list',
          items: [
            '**Be → B (and Mg → Al).** Boron\'s electron to be removed is its first $2p$ electron. A $2p$ electron penetrates less than $2s$, is partly shielded by the $2s^2$ pair, and sits higher in energy, so it is easier to remove even though $Z$ went up.',
            '**N → O (and P → S).** Nitrogen\'s $2p^3$ has three parallel spins in three orbitals. Oxygen\'s fourth $2p$ electron must share an orbital with an opposite-spin partner. The extra repulsion of that pair raises its energy, and removing it restores the half-filled $2p^3$ with its exchange stabilization. So oxygen gives it up more easily.',
          ],
        },
        {
          type: 'derivation',
          title: 'What light can ionize sodium?',
          steps: [
            { tex: '\\frac{495.8 \\times 10^{3}\\ \\text{J/mol}}{6.022 \\times 10^{23}\\ \\text{mol}^{-1}} = 8.233 \\times 10^{-19}\\ \\text{J per atom}', why: 'Ionization energies are tabulated per mole; one photon ionizes one atom.' },
            { tex: '\\lambda = \\frac{hc}{E} = \\frac{1.986 \\times 10^{-25}\\ \\text{J·m}}{8.233 \\times 10^{-19}\\ \\text{J}} = 2.41 \\times 10^{-7}\\ \\text{m}', why: 'The longest wavelength whose photons carry enough energy.' },
          ],
          result: 'Ultraviolet light of 241 nm or shorter ionizes gaseous sodium atoms: the photoelectric effect for a single atom. (A sodium **metal** surface needs less, about 2.3 eV, because the work function of a solid is smaller than the ionization energy of an isolated atom.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Sulfur ($[\\text{Ne}]\\,3s^2\\,3p^4$) has a slightly **lower** first ionization energy than phosphorus ($[\\text{Ne}]\\,3s^2\\,3p^3$), even though sulfur has more protons. Why?',
      options: [
        { text: 'Sulfur\'s electron is removed from a $3s$ orbital, which is higher in energy than $3p$', why: 'Both atoms lose a $3p$ electron, and $3s$ is lower in energy than $3p$, not higher.' },
        { text: 'Sulfur has a smaller effective nuclear charge than phosphorus', why: 'Slater gives $Z_{\\text{eff}} = 5.45$ for S versus $4.80$ for P. The effective charge rises; the dip has a different cause.' },
        { text: 'Sulfur\'s fourth $3p$ electron is paired in an orbital, and the pair\'s repulsion makes it easier to remove; removing it leaves a half-filled $3p^3$', correct: true, why: 'This is the N/O anomaly repeated one period down: pairing energy raises the paired electron, and $\\ce{S+}$ gains the exchange stabilization of $3p^3$.' },
        { text: 'Sulfur is a larger atom than phosphorus', why: 'Across a period atoms get smaller: S (104 pm) is smaller than P (110 pm).' },
      ],
      explanation: 'Phosphorus has three $3p$ electrons, one per orbital, all parallel. Sulfur\'s fourth $3p$ electron is forced into an orbital that is already occupied, and the repulsion of the opposite-spin pair raises its energy. Removing it leaves $\\ce{S+}$ as $3p^3$, with the extra stability of a half-filled subshell. Data: $IE_1(\\ce{P}) = 1011.8$, $IE_1(\\ce{S}) = 999.6$ kJ/mol.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Electron affinity and atomic and ionic radii',
      blocks: [
        {
          type: 'p',
          text: '**[[gchem-electron-affinity|Electron affinity]]** (EA) is the energy change when a gaseous atom gains an electron, $\\ce{X(g) + e- -> X-(g)}$. A negative value means energy is released and the anion is stable. Watch the sign convention: some books tabulate the energy released as a positive number. We use energy changes, so more negative means a stronger attraction for the extra electron.',
        },
        {
          type: 'table',
          headers: ['Group', '1', '2', '13', '14', '15', '16', '17', '18'],
          rows: [
            ['Period 2', 'Li $-60$', 'Be $> 0$', 'B $-27$', 'C $-122$', 'N $> 0$', 'O $-141$', 'F $-328$', 'Ne $> 0$'],
            ['Period 3', 'Na $-53$', 'Mg $> 0$', 'Al $-43$', 'Si $-134$', 'P $-72$', 'S $-200$', 'Cl $-349$', 'Ar $> 0$'],
          ],
          caption: 'First electron affinities in kJ/mol (Brown–LeMay values; sources differ by a few kJ/mol). "$> 0$" means the anion is unstable and falls apart.',
        },
        {
          type: 'list',
          items: [
            '**Overall trend:** EA becomes more negative toward the halogens, which complete a $p$ subshell by gaining one electron.',
            '**Group 2 and group 18 ($> 0$):** the added electron would have to go into a new, higher subshell ($2p$ for Be, $3s$ for Ne), where it is poorly held.',
            '**Nitrogen ($> 0$, while carbon is $-122$):** an added electron would have to pair inside the half-filled $2p^3$, losing exchange stabilization. The same effect makes P much less negative than Si.',
            '**Chlorine beats fluorine:** fluorine is so small that an extra electron is crowded into a tight $2p$ subshell already holding seven, and the electron–electron repulsion offsets part of the attraction. Chlorine\'s larger $3p$ has more room.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Second electron affinities are always positive',
          text: 'Adding a second electron to an anion means pushing it onto a negative ion: $\\ce{O-(g) + e- -> O^2-(g)}$ costs roughly $+750$ kJ/mol. An isolated $\\ce{O^2-}$ ion is unstable, yet oxides are everywhere. The payoff comes from the enormous lattice energy of the solid, the first topic of unit 2.',
        },
        {
          type: 'heading',
          text: 'Radii, with Slater\'s numbers',
        },
        {
          type: 'p',
          text: 'Size follows the same two knobs as Foundations, shell number $n$ and $Z_{\\text{eff}}$, but Slater\'s numbers explain three finer points:',
        },
        {
          type: 'list',
          items: [
            '**Transition metals barely shrink.** Across the $d$ block the outer $4s$ electron\'s $Z_{\\text{eff}}$ rises only $0.15$ per element (the graph above), so metallic radii from Cr to Cu all stay near 125–128 pm, while across the $p$ block ($+0.65$ per element) atoms shrink steadily.',
            '**The lanthanide contraction.** Period 6 inserts fourteen $4f$ electrons, which shield poorly. By hafnium the extra pull has cancelled the expected growth from a new shell: zirconium and hafnium are nearly the same size and so chemically alike that separating them is notoriously hard. (It matters: zirconium alloys clad nuclear reactor fuel because Zr barely absorbs neutrons, but Hf absorbs them strongly and must be removed.)',
            '**Isoelectronic ions.** In $\\ce{F-}$ and $\\ce{Na+}$ ($1s^2\\,2s^2\\,2p^6$ each) the $2p$ electrons have the same $S = 4.15$, so $Z_{\\text{eff}} = 4.85$ for $\\ce{F-}$ but $6.85$ for $\\ce{Na+}$. Same electrons, stronger pull: $\\ce{Na+}$ (102 pm) is much smaller than $\\ce{F-}$ (133 pm).',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'When asked to explain a periodic property, name the subshell involved and use $Z_{\\text{eff}}$ and $n$ by name. For anomalies, the expected answers are: an electron in a new, higher-energy subshell ($s^2 \\to p^1$), or an electron that must pair ($p^3 \\to p^4$). "Because of the trend" earns nothing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Order these period-3 elements by first ionization energy, from **lowest** to **highest**.',
      lines: ['$\\ce{Na}$', '$\\ce{Al}$', '$\\ce{Mg}$', '$\\ce{Si}$'],
      explanation: 'The general rise across the period would give Na < Mg < Al < Si, but aluminum\'s electron is its lone $3p$ electron, higher in energy and shielded by the $3s^2$ pair, so Al drops below Mg. Data (kJ/mol): Na 495.8 < Al 577.5 < Mg 737.7 < Si 786.5.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Which atom has the **most negative** first electron affinity (releases the most energy on gaining an electron)?',
      options: [
        { text: '$\\ce{F}$', why: 'Fluorine is very negative ($-328$ kJ/mol), but its small $2p$ subshell is crowded, and electron–electron repulsion costs it some of the energy.' },
        { text: '$\\ce{Cl}$', correct: true, why: 'Chlorine has the most negative EA of any element, $-349$ kJ/mol: it completes a $p$ subshell, and its larger $3p$ orbitals reduce the repulsion the new electron feels.' },
        { text: '$\\ce{O}$', why: 'Oxygen releases $141$ kJ/mol: it is still two electrons short of a filled $2p$, so the attraction is much weaker than for the halogens.' },
        { text: '$\\ce{N}$', why: 'Nitrogen\'s EA is near zero or slightly positive: the extra electron would have to pair inside the half-filled $2p^3$.' },
      ],
      explanation: 'Halogens have the most negative electron affinities because one added electron completes their $p$ subshell. You might expect fluorine, at the top of the group, to win, but it is so compact that the incoming electron is strongly repelled by the seven already in the $n = 2$ shell. Chlorine, one shell larger, ends up releasing more energy: $-349$ versus $-328$ kJ/mol.',
    },
  ],
  takeaways: [
    'The periodic table is the filling order: $ns$, $(n-2)f$, $(n-1)d$, $np$ across a period. Check that superscripts sum to $Z$.',
    'Cr ($4s^1\\,3d^5$) and Cu ($4s^1\\,3d^{10}$), plus Mo, Ag and Au, are exceptions because $ns$ and $(n-1)d$ are nearly equal in energy and a half-filled or filled $d$ subshell maximizes exchange stabilization.',
    'Transition-metal cations lose $ns$ electrons before $(n-1)d$: $\\ce{Fe^2+}$ is $[\\text{Ar}]\\,3d^6$, $\\ce{Cu^2+}$ is $[\\text{Ar}]\\,3d^9$.',
    'Unpaired electrons make a species paramagnetic (attracted to a magnet); all paired means diamagnetic. Spin-only moment: $\\mu = \\sqrt{n(n+2)}\\ \\mu_B$.',
    'Slater\'s rules: $Z_{\\text{eff}} = Z - S$, with 0.35 per same-group electron, 0.85 per $(n-1)$-shell electron and 1.00 for deeper ones ($s$, $p$ electrons); 1.00 for everything to the left of a $d$ or $f$ electron.',
    '$IE_1$ dips at $s^2 \\to p^1$ (Be/B, Mg/Al) and $p^3 \\to p^4$ (N/O, P/S). Electron affinity is most negative for halogens (Cl beats F), positive for groups 2 and 18 and near zero for N. $d$-block radii stay nearly flat, and the lanthanide contraction makes Zr and Hf nearly identical in size.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 6: Electronic Structure and Periodic Properties of Elements',
      url: 'https://openstax.org/books/chemistry-2e/pages/6-introduction',
      source: 'openstax',
      note: 'Sections 6.4 and 6.5 cover configurations, exceptions, ion configurations and the periodic variation of radius, ionization energy and electron affinity.',
    },
    {
      title: 'Wikipedia — Slater\'s rules',
      url: 'https://en.wikipedia.org/wiki/Slater%27s_rules',
      source: 'wikipedia',
      note: 'The full set of shielding rules with worked examples and a comparison against more accurate calculated values.',
    },
    {
      title: 'Wikipedia — Lanthanide contraction',
      url: 'https://en.wikipedia.org/wiki/Lanthanide_contraction',
      source: 'wikipedia',
      note: 'Why the poorly shielding 4f electrons make period-6 elements unexpectedly small, and the consequences for Zr/Hf and the platinum metals.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The electronic structure and periodic table videos include extra practice on configurations, exceptions and paramagnetism.',
    },
  ],
};
