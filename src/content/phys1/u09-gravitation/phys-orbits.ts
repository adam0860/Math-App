import type { Lesson } from '../../types';

// Figures (generated, then pasted in).
const CANNON_SVG = '<svg viewBox="0 70 480 335" xmlns="http://www.w3.org/2000/svg"><circle cx="240.0" cy="215.0" r="105.0" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-teal s-teal" stroke-width="2"/><path d="M212,116 L240,91.0 L268,116 Z" fill="currentColor" stroke="currentColor" class="s-gray f-gray" stroke-width="1.5" fill-opacity="0.5"/><path d="M240.0,89.0 L242.1,89.1 L244.2,89.2 L246.2,89.5 L248.3,89.9 L250.4,90.4 L252.4,91.0 L254.4,91.8 L256.5,92.6 L258.5,93.6 L260.5,94.7 L262.4,95.9 L264.4,97.3 L266.3,98.7 L268.2,100.3 L270.1,102.0 L271.9,103.8 L273.7,105.8 L275.4,107.9 L277.2,110.1 L278.8,112.5 L280.4,115.0 L282.0,117.6 L282.8,119.1" fill="none" stroke="currentColor" class="s-red" stroke-width="2.2"/><circle cx="282.8" cy="119.1" r="3.5" fill="currentColor" class="f-red"/><text x="291.8" y="123.1" font-size="13" text-anchor="start" class="t-red">A</text><path d="M240.0,89.0 L242.8,89.1 L245.7,89.2 L248.5,89.5 L251.3,89.9 L254.1,90.4 L256.9,91.0 L259.7,91.8 L262.5,92.6 L265.2,93.6 L267.9,94.7 L270.6,95.9 L273.3,97.2 L275.9,98.6 L278.5,100.2 L281.0,101.8 L283.6,103.6 L286.0,105.5 L288.4,107.5 L290.8,109.6 L293.1,111.9 L295.4,114.3 L297.5,116.7 L299.6,119.3 L301.7,122.1 L303.6,124.9 L305.5,127.9 L307.3,131.0 L309.0,134.2 L310.3,137.0 L310.3,137.0" fill="none" stroke="currentColor" class="s-orange" stroke-width="2.2"/><circle cx="310.3" cy="137.0" r="3.5" fill="currentColor" class="f-orange"/><text x="319.3" y="141.0" font-size="13" text-anchor="start" class="t-orange">B</text><path d="M240.0,89.0 L243.4,89.1 L246.8,89.2 L250.2,89.5 L253.6,89.9 L256.9,90.4 L260.3,91.0 L263.6,91.8 L267.0,92.6 L270.2,93.6 L273.5,94.7 L276.7,95.8 L279.9,97.1 L283.1,98.5 L286.2,100.0 L289.3,101.7 L292.3,103.4 L295.3,105.2 L298.2,107.2 L301.1,109.2 L303.9,111.4 L306.7,113.6 L309.3,116.0 L311.9,118.4 L314.5,121.0 L316.9,123.7 L319.3,126.4 L321.6,129.3 L323.8,132.2 L325.9,135.2 L327.9,138.4 L329.8,141.6 L331.6,144.9 L333.3,148.2 L334.9,151.7 L336.4,155.2 L337.7,158.8 L339.0,162.5 L340.1,166.2 L341.1,170.1 L341.9,173.9 L342.6,177.8 L343.2,181.8 L343.6,185.8 L343.8,189.9 L344.0,194.0 L343.9,198.1 L343.9,199.5" fill="none" stroke="currentColor" class="s-purple" stroke-width="2.2"/><circle cx="343.9" cy="199.5" r="3.5" fill="currentColor" class="f-purple"/><text x="352.9" y="203.5" font-size="13" text-anchor="start" class="t-purple">C</text><path d="M240.0,89.0 L243.8,89.1 L247.6,89.2 L251.3,89.5 L255.1,89.9 L258.8,90.4 L262.6,91.0 L266.3,91.8 L270.0,92.6 L273.6,93.6 L277.2,94.6 L280.8,95.8 L284.4,97.1 L287.9,98.5 L291.4,100.0 L294.8,101.5 L298.2,103.2 L301.5,105.0 L304.8,106.9 L308.0,108.9 L311.1,111.0 L314.2,113.2 L317.3,115.5 L320.2,117.8 L323.1,120.3 L325.9,122.8 L328.6,125.4 L331.3,128.1 L333.8,130.9 L336.3,133.8 L338.7,136.7 L341.0,139.7 L343.2,142.7 L345.3,145.9 L347.4,149.1 L349.3,152.3 L351.1,155.6 L352.9,159.0 L354.5,162.4 L356.0,165.8 L357.4,169.3 L358.8,172.9 L360.0,176.5 L361.1,180.1 L362.1,183.7 L362.9,187.4 L363.7,191.1 L364.4,194.8 L364.9,198.6 L365.4,202.3 L365.7,206.1 L365.9,209.9 L366.0,213.6 L366.0,217.4 L365.8,221.2 L365.6,225.0 L365.2,228.7 L364.8,232.5 L364.2,236.2 L363.5,239.9 L362.7,243.6 L361.8,247.3 L360.8,250.9 L359.6,254.5 L358.4,258.1 L357.0,261.6 L355.6,265.1 L354.0,268.6 L352.4,272.0 L350.6,275.3 L348.8,278.6 L346.8,281.8 L344.8,285.0 L342.6,288.1 L340.4,291.2 L338.0,294.1 L335.6,297.1 L333.1,299.9 L330.5,302.6 L327.9,305.3 L325.1,307.9 L322.3,310.4 L319.4,312.8 L316.4,315.2 L313.4,317.4 L310.3,319.6 L307.1,321.6 L303.9,323.6 L300.6,325.5 L297.2,327.2 L293.8,328.9 L290.4,330.5 L286.9,331.9 L283.4,333.3 L279.8,334.5 L276.2,335.7 L272.6,336.7 L268.9,337.6 L265.2,338.4 L261.5,339.1 L257.8,339.7 L254.0,340.2 L250.3,340.6 L246.5,340.8 L242.7,341.0 L238.9,341.0 L235.2,340.9 L231.4,340.7 L227.6,340.4 L223.9,340.0 L220.1,339.4 L216.4,338.8 L212.7,338.0 L209.0,337.1 L205.4,336.1 L201.8,335.1 L198.2,333.9 L194.6,332.5 L191.1,331.1 L187.7,329.6 L184.2,328.0 L180.9,326.3 L177.6,324.4 L174.3,322.5 L171.1,320.5 L168.0,318.4 L164.9,316.2 L161.9,313.9 L159.0,311.5 L156.1,309.0 L153.3,306.5 L150.6,303.8 L148.0,301.1 L145.5,298.3 L143.0,295.4 L140.6,292.5 L138.4,289.5 L136.2,286.4 L134.1,283.2 L132.1,280.0 L130.2,276.8 L128.4,273.5 L126.7,270.1 L125.1,266.7 L123.6,263.2 L122.2,259.7 L120.9,256.1 L119.7,252.5 L118.6,248.9 L117.7,245.2 L116.8,241.6 L116.1,237.9 L115.5,234.1 L114.9,230.4 L114.5,226.6 L114.2,222.9 L114.1,219.1 L114.0,215.3 L114.0,211.5 L114.2,207.7 L114.5,204.0 L114.9,200.2 L115.4,196.5 L116.0,192.7 L116.7,189.0 L117.5,185.3 L118.5,181.7 L119.5,178.1 L120.7,174.5 L122.0,170.9 L123.3,167.4 L124.8,163.9 L126.4,160.5 L128.1,157.1 L129.9,153.8 L131.8,150.5 L133.8,147.3 L135.8,144.1 L138.0,141.0 L140.3,138.0 L142.6,135.0 L145.1,132.1 L147.6,129.3 L150.2,126.6 L152.9,123.9 L155.7,121.4 L158.5,118.9 L161.4,116.5 L164.4,114.2 L167.5,112.0 L170.6,109.8 L173.8,107.8 L177.0,105.9 L180.3,104.0 L183.7,102.3 L187.1,100.6 L190.6,99.1 L194.1,97.7 L197.6,96.3 L201.2,95.1 L204.8,94.0 L208.4,93.0 L212.1,92.1 L215.8,91.3 L219.5,90.7 L223.3,90.1 L227.0,89.7 L230.8,89.3 L234.6,89.1 L238.3,89.0 L240.0,89.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M240.0,89.0 L244.1,89.1 L248.2,89.2 L252.2,89.5 L256.3,89.9 L260.3,90.4 L264.4,91.0 L268.4,91.8 L272.3,92.6 L276.3,93.6 L280.2,94.6 L284.1,95.8 L287.9,97.0 L291.8,98.4 L295.5,99.9 L299.2,101.4 L302.9,103.1 L306.5,104.9 L310.0,106.7 L313.5,108.7 L317.0,110.7 L320.3,112.8 L323.6,115.0 L326.9,117.3 L330.0,119.7 L333.1,122.1 L336.1,124.6 L339.1,127.2 L341.9,129.9 L344.7,132.6 L347.4,135.4 L350.1,138.2 L352.6,141.1 L355.1,144.1 L357.4,147.1 L359.7,150.1 L361.9,153.2 L364.1,156.4 L366.1,159.6 L368.0,162.8 L369.9,166.0 L371.7,169.3 L373.4,172.7 L375.0,176.0 L376.5,179.4 L377.9,182.8 L379.2,186.2 L380.5,189.6 L381.6,193.1 L382.7,196.5 L383.7,200.0 L384.6,203.5 L385.4,207.0 L386.1,210.5 L386.8,214.0 L387.4,217.5 L387.8,221.0 L388.2,224.5 L388.6,228.0 L388.8,231.5 L389.0,234.9 L389.0,238.4 L389.0,241.8 L389.0,245.3 L388.8,248.7 L388.6,252.1 L388.3,255.5 L387.9,258.9 L387.4,262.2 L386.9,265.5 L386.3,268.8 L385.7,272.1 L384.9,275.3 L384.2,278.6 L383.3,281.7 L382.4,284.9 L381.4,288.0 L380.3,291.1 L379.2,294.2 L378.0,297.2 L376.8,300.2 L375.5,303.2 L374.1,306.1 L372.7,308.9 L371.2,311.8 L369.7,314.6 L368.2,317.3 L366.5,320.0 L364.8,322.7 L363.1,325.3 L361.3,327.9 L359.5,330.5 L357.6,333.0 L355.7,335.4 L353.8,337.8 L351.7,340.2 L349.7,342.5 L347.6,344.7 L345.5,346.9 L343.3,349.1 L341.1,351.2 L338.9,353.3 L336.6,355.3 L334.2,357.2 L331.9,359.2 L329.5,361.0 L327.1,362.8 L324.6,364.6 L322.2,366.3 L319.7,367.9 L317.1,369.5 L314.6,371.0 L312.0,372.5 L309.4,373.9 L306.7,375.3 L304.1,376.6 L301.4,377.9 L298.7,379.1 L296.0,380.2 L293.2,381.3 L290.5,382.4 L287.7,383.4 L284.9,384.3 L282.1,385.2 L279.3,386.0 L276.4,386.7 L273.6,387.4 L270.7,388.1 L267.8,388.6 L265.0,389.2 L262.1,389.6 L259.2,390.0 L256.3,390.4 L253.4,390.7 L250.5,390.9 L247.6,391.1 L244.6,391.2 L241.7,391.3 L238.8,391.3 L235.9,391.2 L233.0,391.1 L230.1,391.0 L227.2,390.7 L224.2,390.5 L221.3,390.1 L218.5,389.7 L215.6,389.3 L212.7,388.7 L209.8,388.2 L207.0,387.5 L204.1,386.9 L201.3,386.1 L198.4,385.3 L195.6,384.5 L192.8,383.5 L190.1,382.6 L187.3,381.5 L184.5,380.5 L181.8,379.3 L179.1,378.1 L176.4,376.9 L173.8,375.6 L171.1,374.2 L168.5,372.8 L165.9,371.3 L163.3,369.8 L160.8,368.2 L158.3,366.6 L155.8,364.9 L153.4,363.1 L150.9,361.3 L148.5,359.5 L146.2,357.6 L143.9,355.6 L141.6,353.6 L139.3,351.6 L137.1,349.5 L134.9,347.3 L132.8,345.1 L130.7,342.9 L128.6,340.6 L126.6,338.2 L124.6,335.9 L122.7,333.4 L120.8,330.9 L119.0,328.4 L117.2,325.8 L115.5,323.2 L113.8,320.5 L112.1,317.8 L110.6,315.1 L109.0,312.3 L107.6,309.5 L106.1,306.6 L104.8,303.7 L103.5,300.7 L102.2,297.8 L101.0,294.7 L99.9,291.7 L98.8,288.6 L97.8,285.5 L96.9,282.3 L96.0,279.1 L95.2,275.9 L94.5,272.7 L93.8,269.4 L93.2,266.1 L92.6,262.8 L92.2,259.5 L91.8,256.1 L91.5,252.7 L91.2,249.3 L91.1,245.9 L91.0,242.5 L91.0,239.0 L91.0,235.6 L91.2,232.1 L91.4,228.6 L91.7,225.1 L92.1,221.6 L92.5,218.1 L93.1,214.6 L93.7,211.1 L94.4,207.6 L95.2,204.1 L96.1,200.7 L97.1,197.2 L98.2,193.7 L99.3,190.3 L100.5,186.8 L101.9,183.4 L103.3,180.0 L104.8,176.6 L106.3,173.3 L108.0,169.9 L109.8,166.6 L111.6,163.4 L113.5,160.1 L115.6,157.0 L117.7,153.8 L119.9,150.7 L122.1,147.6 L124.5,144.6 L126.9,141.7 L129.5,138.7 L132.1,135.9 L134.8,133.1 L137.5,130.4 L140.4,127.7 L143.3,125.1 L146.3,122.6 L149.4,120.1 L152.6,117.7 L155.8,115.4 L159.1,113.2 L162.4,111.1 L165.8,109.0 L169.3,107.1 L172.9,105.2 L176.5,103.4 L180.1,101.7 L183.8,100.2 L187.6,98.7 L191.4,97.3 L195.2,96.0 L199.1,94.8 L203.0,93.7 L206.9,92.8 L210.9,91.9 L214.9,91.2 L218.9,90.5 L223.0,90.0 L227.0,89.6 L231.1,89.3 L235.2,89.1 L238.9,89.0 L240.0,89.0" fill="none" stroke="currentColor" class="s-green" stroke-width="2" stroke-dasharray="5 4"/><text x="390.0" y="79.0" font-size="12" text-anchor="start" class="t-blue">D: circular orbit</text><text x="390.0" y="95.0" font-size="12" text-anchor="start" class="t-green">E: ellipse</text><text x="90.0" y="79.0" font-size="12" text-anchor="end" class="t-red">A–C: fall back</text><text x="90.0" y="95.0" font-size="12" text-anchor="end" class="t-red">to the ground</text><line x1="240.0" y1="89.0" x2="273.5" y2="89.0" stroke="currentColor" class="s-gray" stroke-width="1.8"/><path d="M280.0,89.0 L272.0,93.0 L272.0,85.0 Z" fill="currentColor" class="f-gray"/><text x="240.0" y="220.0" font-size="13" text-anchor="middle" class="t-teal">Earth</text></svg>';
const ELLIPSE_SVG = '<svg viewBox="0 -10 560 330" xmlns="http://www.w3.org/2000/svg"><ellipse cx="240" cy="175" rx="170" ry="136.0" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="70.0" y1="175.0" x2="410.0" y2="175.0" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="5 4"/><line x1="240.0" y1="39.0" x2="240.0" y2="311.0" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="5 4"/><circle cx="342.0" cy="175.0" r="9.0" fill="currentColor" fill-opacity="0.9" stroke="currentColor" class="f-orange s-orange" stroke-width="2"/><text x="346.0" y="205.0" font-size="12" text-anchor="middle" class="t-orange">Sun (focus)</text><circle cx="138.0" cy="175.0" r="4.0" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="138.0" y="197.0" font-size="11" text-anchor="middle" class="t-gray">empty focus</text><circle cx="240.0" cy="175.0" r="2.5" fill="currentColor"/><text x="236.0" y="169.0" font-size="10" text-anchor="end" class="t-gray">center</text><line x1="243.0" y1="25.0" x2="403.5" y2="25.0" stroke="currentColor" class="s-purple" stroke-width="1.5"/><path d="M410.0,25.0 L402.0,29.0 L402.0,21.0 Z" fill="currentColor" class="f-purple"/><line x1="240.0" y1="19.0" x2="240.0" y2="31.0" stroke="currentColor" class="s-purple" stroke-width="1"/><text x="325.0" y="19.0" font-size="12" text-anchor="middle" class="t-purple">a (semi-major axis)</text><text x="232.0" y="107.0" font-size="13" text-anchor="end" class="t-purple" font-style="italic">b</text><line x1="240.0" y1="217.0" x2="342.0" y2="217.0" stroke="currentColor" class="s-teal" stroke-width="1.2"/><line x1="240.0" y1="211.0" x2="240.0" y2="223.0" stroke="currentColor" class="s-teal" stroke-width="1"/><line x1="342.0" y1="211.0" x2="342.0" y2="223.0" stroke="currentColor" class="s-teal" stroke-width="1"/><text x="291.0" y="233.0" font-size="13" text-anchor="middle" class="t-teal" font-style="italic">ae</text><circle cx="410.0" cy="175.0" r="4.0" fill="currentColor"/><text x="416.0" y="167.0" font-size="12" text-anchor="start">perihelion</text><text x="416.0" y="183.0" font-size="11" text-anchor="start" class="t-gray">r = a(1 − e)</text><circle cx="70.0" cy="175.0" r="4.0" fill="currentColor"/><text x="64.0" y="167.0" font-size="12" text-anchor="end">aphelion</text><text x="64.0" y="183.0" font-size="11" text-anchor="end" class="t-gray">r = a(1 + e)</text><line x1="342.0" y1="175.0" x2="283.6" y2="49.7" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M280.4,42.9 L288.3,49.2 L280.1,53.0 Z" fill="currentColor" class="f-blue"/><circle cx="280.4" cy="42.9" r="7.0" fill="currentColor" fill-opacity="0.8" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><text x="301.2" y="104.9" font-size="14" text-anchor="end" class="t-blue" font-style="italic">r</text><path d="M372.0,175 A 30 30 0 0 0 329.3,147.8" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.2"/><text x="368.0" y="149.0" font-size="13" text-anchor="middle" class="t-blue">θ</text></svg>';
const HOHMANN_SVG = '<svg viewBox="0 30 480 375" xmlns="http://www.w3.org/2000/svg"><circle cx="230.0" cy="200.0" r="30.0" fill="currentColor" fill-opacity="0.3" stroke="currentColor" class="f-teal s-teal" stroke-width="2"/><text x="230.0" y="205.0" font-size="11" text-anchor="middle" class="t-teal">Earth</text><circle cx="230.0" cy="200.0" r="55.0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="230.0" cy="200.0" r="160.0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><path d="M285,200 A 107.5 93.8 0 0 0 70,200" fill="none" stroke="currentColor" class="s-orange" stroke-width="2.5"/><path d="M70,200 A 107.5 93.8 0 0 0 285,200" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="285.0" y1="200.0" x2="285.0" y2="159.5" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M285.0,152.0 L289.5,161.0 L280.5,161.0 Z" fill="currentColor" class="f-red"/><text x="293.0" y="170.0" font-size="13" text-anchor="start" class="t-red">Δv₁</text><line x1="70.0" y1="200.0" x2="70.0" y2="240.5" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M70.0,248.0 L65.5,239.0 L74.5,239.0 Z" fill="currentColor" class="f-red"/><text x="62.0" y="236.0" font-size="13" text-anchor="end" class="t-red">Δv₂</text><text x="291.0" y="218.0" font-size="12" text-anchor="start">LEO</text><text x="351.6" y="82.4" font-size="12" text-anchor="start">GEO</text><text x="210.0" y="100.8" font-size="12" text-anchor="middle" class="t-orange">transfer ellipse</text><text x="230.0" y="388.0" font-size="11" text-anchor="middle" class="t-gray">1: burn at perigee  ·  2: coast half an orbit  ·  3: burn at apogee</text></svg>';

/**
 * Eccentric anomaly E for the mean anomaly M (an expression) on an orbit of
 * eccentricity c (a slider), by the fixed-point iteration E <- M + c sin E.
 * It converges for c < 1; 40 rounds are plenty for c <= 0.8.
 */
const kepE = (M: string, n = 40): string => {
  let E = `(${M})`;
  for (let i = 0; i < n; i++) E = `(${M} + c*sin(${E}))`;
  return E;
};
/** Position on the orbit with semi-major axis 1 and the Sun (focus) at the origin. */
const orbitX = (E: string) => `(cos(${E}) - c)`;
const orbitY = (E: string) => `(sqrt(1 - c^2)*sin(${E}))`;
const EP = kepE('2pi*s'); // the planet: time s in periods
const TICKS = Array.from({ length: 12 }, (_, k) => kepE(`2pi*${k}/12`));

export const lesson: Lesson = {
  id: 'phys-orbits',
  title: 'Orbits and Kepler\'s Laws',
  summary: 'Falling around a planet: circular orbital speed and period, geostationary and GPS orbits, orbital energy, escape speed from energy conservation, Kepler\'s three laws for elliptical orbits, the vis-viva equation and a Hohmann transfer, and an orbit integrator in C++.',
  minutes: 22,
  objectives: [
    'Derive the speed and period of a circular orbit from Newton\'s second law and use them for LEO, GPS and geostationary satellites',
    'Compute the kinetic, potential and total energy of a circular orbit, and explain why losing energy makes a satellite speed up',
    'Derive escape speed from energy conservation and compare it with orbital speed',
    'State Kepler\'s three laws, connect the second law to angular momentum, and describe an elliptical orbit by $a$ and $e$',
    'Use energy and angular momentum (the vis-viva equation) to find speeds on an elliptical orbit, including a Hohmann transfer',
    'Write a semi-implicit Euler orbit integrator and check it against Kepler\'s laws',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Falling around the Earth',
      blocks: [
        {
          type: 'p',
          text: 'Newton imagined a cannon on a very tall mountain, firing horizontally. A slow ball curves down and hits the ground nearby. A faster ball lands farther away. Earth\'s surface curves away under the ball, so at one special speed the ball falls **exactly as fast as the ground curves away**. It never lands. That is an orbit: free fall with enough sideways speed to keep missing.',
        },
        {
          type: 'figure',
          svg: CANNON_SVG,
          alt: 'Newton\'s cannon: Earth with a tall mountain. Paths A, B and C launched horizontally from the summit curve down and hit the ground progressively farther away. Path D is a circle around Earth. Path E, launched faster, is a larger dashed ellipse.',
          caption: 'Newton\'s cannon (mountain greatly exaggerated). All five paths are free fall: the only force is gravity. Paths A–C are pieces of ellipses that intersect the ground. D is the circular orbit, and E is faster still, so it swings out on an ellipse.',
          maxWidth: 420,
        },
        {
          type: 'p',
          text: 'For a circular orbit of radius $r$, gravity supplies exactly the centripetal force that circular motion needs. Choose the satellite as the system and the inward radial direction as positive:',
        },
        {
          type: 'derivation',
          title: 'Speed and period of a circular orbit',
          steps: [
            { tex: '\\sum F_{\\text{in}} = m a_{\\text{c}} \\implies \\frac{GMm}{r^2} = \\frac{mv^2}{r}', why: 'Newton\'s second law along the inward radial direction. Gravity is the **only** force; there is no separate "centripetal force".' },
            { tex: 'v = \\sqrt{\\frac{GM}{r}}', why: 'Cancel $m$ and one factor of $r$, then take the square root. The satellite\'s mass drops out, just as in free fall.' },
            { tex: 'T = \\frac{2\\pi r}{v} = 2\\pi\\sqrt{\\frac{r^3}{GM}}', why: 'One lap is the circumference $2\\pi r$ at constant speed $v$.' },
            { tex: '\\text{ISS: } r = 6.78 \\times 10^{6}\\,\\text{m} \\implies v = \\sqrt{\\frac{3.98 \\times 10^{14}}{6.78 \\times 10^{6}}} = 7.66\\,\\text{km/s}', why: 'With $GM_E = 3.98 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$ and the station about $408\\,\\text{km}$ up.' },
            { tex: 'T = \\frac{2\\pi(6.78 \\times 10^{6})}{7.66 \\times 10^{3}} = 5.56 \\times 10^{3}\\,\\text{s} = 92.6\\,\\text{min}', why: 'Sixteen sunrises a day for the crew.' },
          ],
          result: '[[phys-orbital-speed|Orbital speed]] $v = \\sqrt{GM/r}$ and period $T = 2\\pi\\sqrt{r^3/GM}$. Lower orbits are faster and shorter.',
        },
        {
          type: 'graph',
          x: [-7.5, 7.5],
          y: [-7.5, 7.5],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'teal', label: 'Earth' },
            { x: 'k*cos(t)', y: 'k*sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
          ],
          points: [{ x: 'k*cos(2pi*s/(84.4*k^1.5))', y: 'k*sin(2pi*s/(84.4*k^1.5))', color: 'blue', label: 'satellite' }],
          segments: [
            {
              from: ['k*cos(2pi*s/(84.4*k^1.5))', 'k*sin(2pi*s/(84.4*k^1.5))'],
              to: ['k*cos(2pi*s/(84.4*k^1.5)) - 0.25*(7.91/sqrt(k))*sin(2pi*s/(84.4*k^1.5))', 'k*sin(2pi*s/(84.4*k^1.5)) + 0.25*(7.91/sqrt(k))*cos(2pi*s/(84.4*k^1.5))'],
              arrow: true,
              color: 'green',
              label: 'v',
            },
            {
              from: ['k*cos(2pi*s/(84.4*k^1.5))', 'k*sin(2pi*s/(84.4*k^1.5))'],
              to: ['(k - 0.2*9.8/k^2)*cos(2pi*s/(84.4*k^1.5))', '(k - 0.2*9.8/k^2)*sin(2pi*s/(84.4*k^1.5))'],
              arrow: true,
              color: 'red',
              label: 'a',
            },
          ],
          sliders: [
            { name: 'k', min: 1.05, max: 7, step: 0.01, value: 2.5, label: 'orbit radius $r/R_E$' },
            { name: 's', min: 0, max: 600, step: 1, value: 0, label: 'time (minutes)', play: true, speed: 120, loop: true },
          ],
          readouts: [
            { label: 'altitude (km):', expr: '(k - 1)*6370', digits: 0 },
            { label: 'speed $v$ (km/s):', expr: '7.91/sqrt(k)', digits: 3 },
            { label: 'period $T$ (min):', expr: '84.4*k^1.5', digits: 1 },
          ],
          caption: 'Press ▶: one second of animation is two hours of orbit. Green: velocity, always tangent. Red: acceleration $GM/r^2$, always toward Earth\'s center, perpendicular to $\\vec{v}$, so it changes the direction of motion but not the speed. Raise the orbit and watch both arrows shrink and the period grow as $r^{3/2}$; at $r \\approx 6.6\\,R_E$ one lap takes a day.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'There is no outward "centrifugal force" on the satellite',
          text: 'A common story says gravity pulls in and a centrifugal force pushes out, and they balance. If the forces balanced, the net force would be zero and the satellite would move in a **straight line** (Newton\'s first law). The net force is gravity alone, pointing inward, and it produces the centripetal [[acceleration]] $v^2/r$. The "outward push" you would feel in a turning car is your body\'s inertia, described from a rotating viewpoint.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'The International Space Station moves at constant speed on a circular orbit. Which statement about the forces on it is correct?',
      options: [
        { text: 'The only significant force is Earth\'s gravity, pointing toward Earth\'s center, so the net force is not zero.', correct: true, why: 'Gravity is the net force, and it provides the centripetal acceleration $v^2/r$ that bends the path into a circle.' },
        { text: 'Gravity is balanced by an outward centrifugal force, so the net force is zero.', why: 'Zero net force would mean straight-line motion. A circle needs an inward net force.' },
        { text: 'There is no gravity at that altitude, so no force is needed to keep it moving.', why: 'At $408\\,\\text{km}$, $g$ is still about $8.7\\,\\text{m/s}^2$. And with no force at all it would fly off along a straight line.' },
        { text: 'Gravity points inward, and a forward force from the engines keeps it moving along the orbit.', why: 'No force is needed to **keep** something moving: that is the misconception Newton\'s first law corrects. The station fires its engines only occasionally, to make up for the tiny drag of the thin upper atmosphere.' },
      ],
      explanation: 'Draw the free-body diagram: one arrow, gravity, toward Earth\'s center. That single force changes the direction of the velocity without changing its magnitude, because it is perpendicular to the velocity. The station is in free fall around Earth, which is also why everything inside floats.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Period and radius: GPS and geostationary orbits',
      blocks: [
        {
          type: 'p',
          text: 'Square the period formula and you get a relation between $T$ and $r$ that does not mention the satellite at all:',
        },
        {
          type: 'math',
          tex: 'T^2 = \\frac{4\\pi^2}{GM}\\,r^3',
          caption: 'For circular orbits around the same central body, $T^2/r^3$ is the same number. This is Kepler\'s third law (later you will see it holds for ellipses too, with $r$ replaced by the semi-major axis).',
        },
        {
          type: 'p',
          text: 'Satellite engineers use it backward: choose the period the mission needs, then solve for the radius. A [[phys-geostationary-orbit|geostationary]] satellite must turn with the Earth, so its period is one **sidereal day**, $T = 86\\,164\\,\\text{s}$ (23 h 56 min, Earth\'s rotation relative to the stars; the 24 h solar day is a bit longer because Earth also moves around the Sun).',
        },
        {
          type: 'derivation',
          title: 'Radius of the geostationary orbit',
          steps: [
            { tex: 'r^3 = \\frac{GMT^2}{4\\pi^2}', why: 'Solve Kepler\'s third law for $r^3$.' },
            { tex: '= \\frac{(3.98 \\times 10^{14})(86\\,164)^2}{4\\pi^2} = 7.49 \\times 10^{22}\\,\\text{m}^3', why: 'Substitute $GM_E = 3.98 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$ and $T$ in **seconds**.' },
            { tex: 'r = (7.49 \\times 10^{22})^{1/3} = 4.22 \\times 10^{7}\\,\\text{m}', why: 'Take the **cube** root.' },
            { tex: 'h = r - R_E = 42\\,200 - 6370 \\approx 35\\,800\\,\\text{km}', why: 'Altitude above the surface. The orbital speed there is $2\\pi r/T = 3.07\\,\\text{km/s}$.' },
          ],
          result: 'Geostationary satellites orbit about $35\\,800\\,\\text{km}$ up, over the equator, about $6.6\\,R_E$ from Earth\'s center. A dish on the ground points at a fixed spot in the sky.',
        },
        {
          type: 'table',
          headers: ['Orbit', 'Radius $r$ (km)', 'Altitude (km)', 'Speed (km/s)', 'Period'],
          rows: [
            ['International Space Station (LEO)', '$6780$', '$\\approx 410$', '$7.66$', '$92.6\\,\\text{min}$'],
            ['GPS (MEO)', '$26\\,560$', '$20\\,200$', '$3.87$', '$11.97\\,\\text{h}$ (half a sidereal day)'],
            ['Geostationary (GEO)', '$42\\,160$', '$35\\,800$', '$3.07$', '$23.93\\,\\text{h}$'],
            ['The Moon', '$384\\,000$', '$\\approx 378\\,000$', '$1.02$', '$27.3\\,\\text{d}$'],
          ],
          caption: 'Computed from $v = \\sqrt{GM/r}$ and $T = 2\\pi\\sqrt{r^3/GM}$ with $GM_E = 3.98 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$ and $R_E = 6370\\,\\text{km}$.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 30],
          xStep: 5,
          yStep: 5,
          height: 280,
          functions: [{ expr: '1.407*(x/6.37)^1.5', domain: [6.37, 50], color: 'blue', label: '$T(r)$ in hours, $r$ in thousands of km' }],
          vlines: [{ x: 6.37, label: 'surface', color: 'gray' }],
          points: [
            { x: 6.78, y: '1.407*(6.78/6.37)^1.5', color: 'green', label: 'ISS' },
            { x: 26.56, y: '1.407*(26.56/6.37)^1.5', color: 'purple', label: 'GPS' },
            { x: 42.16, y: '1.407*(42.16/6.37)^1.5', color: 'orange', label: 'GEO' },
            { x: 'r', y: '1.407*(r/6.37)^1.5', color: 'red' },
          ],
          sliders: [{ name: 'r', min: 6.5, max: 50, step: 0.1, value: 15, label: 'orbit radius $r$ (thousands of km)' }],
          readouts: [
            { label: 'period (h):', expr: '1.407*(r/6.37)^1.5', digits: 3 },
            { label: 'speed (km/s):', expr: '7.91*sqrt(6.37/r)', digits: 3 },
          ],
          caption: 'Period against orbit radius. The curve is $T \\propto r^{3/2}$: quadrupling $r$ multiplies $T$ by 8. Find the radius where $T = 24\\,\\text{h}$ and you have rediscovered the geostationary orbit.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'GPS: a military constellation everyone uses',
          text: 'The Global Positioning System, operated by the U.S. Space Force, has about 31 satellites in six orbital planes, each circling twice per sidereal day at $20\\,200\\,\\text{km}$. Your receiver finds its position from the travel times of signals from at least four satellites, so their orbits must be known to within meters. Orbital speed even matters for the clocks: relativity makes the satellite clocks run fast by about $38\\,\\mu\\text{s}$ per day, which would add kilometers of error daily if not corrected.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'The Moon orbits Earth on a nearly circular path of radius $3.84 \\times 10^{8}\\,\\text{m}$. Using $G = 6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$ and $M_E = 5.97 \\times 10^{24}\\,\\text{kg}$, predict its orbital period in **days** to 3 significant figures.',
      hint: '$T = 2\\pi\\sqrt{r^3/GM}$, then divide the seconds by $86\\,400$.',
      label: '$T =$',
      unit: 'days',
      answer: '2pi*sqrt((3.84*10^8)^3/(6.674*10^-11*5.97*10^24))/86400',
      answerTex: '27.4',
      tolerance: 0.15,
      explanation: '$GM_E = 3.98 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$ and $r^3 = 5.66 \\times 10^{25}\\,\\text{m}^3$, so $T = 2\\pi\\sqrt{1.42 \\times 10^{11}\\,\\text{s}^2} = 2\\pi(3.77 \\times 10^{5}\\,\\text{s}) = 2.37 \\times 10^{6}\\,\\text{s} = 27.4\\,\\text{days}$. The measured sidereal month is $27.3$ days; the small difference is mostly because the Moon\'s mass is not negligible compared with Earth\'s. Forgetting the $2\\pi$ gives $4.4$ days.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Energy of a circular orbit',
      blocks: [
        {
          type: 'p',
          text: 'Combine the orbital speed with the potential energy $U = -GMm/r$ from the previous lesson. For a circular orbit $mv^2 = GMm/r$, so',
        },
        {
          type: 'derivation',
          title: 'Kinetic, potential and total energy',
          steps: [
            { tex: 'K = \\tfrac12 mv^2 = \\frac{GMm}{2r}', why: 'Substitute $v^2 = GM/r$.' },
            { tex: 'U = -\\frac{GMm}{r} = -2K', why: 'The potential energy is twice as large as $K$, and negative.' },
            { tex: 'E = K + U = -\\frac{GMm}{2r} = -K', why: 'Add them. The total is negative: the satellite is bound.' },
          ],
          result: 'On a circular orbit, $E = -K = \\tfrac12 U$. A higher orbit has **more** total energy (less negative) but **less** kinetic energy.',
        },
        {
          type: 'graph',
          x: [1, 8],
          y: [-1.1, 0.6],
          xStep: 1,
          yStep: 0.25,
          height: 280,
          functions: [
            { expr: '1/(2x)', color: 'green', label: '$K$' },
            { expr: '-1/x', color: 'blue', label: '$U$' },
            { expr: '-1/(2x)', color: 'red', label: '$E = K + U$' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          points: [
            { x: 'r', y: '1/(2r)', color: 'green' },
            { x: 'r', y: '-1/r', color: 'blue' },
            { x: 'r', y: '-1/(2r)', color: 'red' },
          ],
          vlines: [{ x: 'r', color: 'gray' }],
          sliders: [{ name: 'r', min: 1, max: 8, step: 0.05, value: 2, label: 'orbit radius $r/R$' }],
          readouts: [
            { label: '$K$:', expr: '1/(2r)', digits: 3 },
            { label: '$U$:', expr: '-1/r', digits: 3 },
            { label: '$E$:', expr: '-1/(2r)', digits: 3 },
          ],
          caption: 'Energies in units of $GMm/R$, where $R$ is the planet\'s radius. Move the orbit outward: $E$ (red) rises toward zero, so raising an orbit costs energy, yet $K$ (green) falls, so the satellite ends up slower.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The orbital paradox: drag makes satellites speed up',
          text: 'In low orbit, the thin upper atmosphere exerts a small drag force that does negative work, so $E$ decreases (becomes more negative). From $E = -GMm/2r$, a lower $E$ means a smaller $r$, and from $K = -E$, the kinetic energy **increases**. The satellite spirals down and speeds up. Gravity does positive work as it descends, about twice what drag removes. The same logic says that to catch up with a spacecraft ahead of you in the same orbit, you briefly fire **backward**: you drop to a lower, faster orbit, gain on the target, then climb back.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What instructors look for',
          text: 'Exam problems often ask for the energy to move a satellite between circular orbits: $\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)$. A common mistake is to use only $\\Delta U$, which is twice too large, because part of the potential energy gained is paid for by the kinetic energy the satellite loses.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'Air drag in the thin upper atmosphere removes energy from a satellite in low Earth orbit, so the satellite ends up moving **more slowly**.',
      answer: false,
      explanation: 'False. Drag lowers the total energy $E = -GMm/2r$, so the orbit shrinks to a smaller $r$. On a circular orbit $K = -E = GMm/2r$, which is **larger** for smaller $r$: the satellite speeds up as it spirals down. Gravity does positive work on the way down, about twice the energy drag removes. That is why decaying satellites burn up at nearly orbital speed.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Escape speed from energy',
      blocks: [
        {
          type: 'p',
          text: 'Throw something straight up hard enough and it never comes back. How fast is "hard enough"? Forces are awkward here because gravity weakens with height, but energy makes it a two-line problem. Choose the projectile and the planet as the system, ignore air resistance, and use $U(\\infty) = 0$.',
        },
        {
          type: 'derivation',
          title: 'Escape speed from the surface',
          steps: [
            { tex: 'K_i + U_i = K_f + U_f', why: 'Only gravity does work, so mechanical energy is conserved.' },
            { tex: '\\tfrac12 mv_{\\text{esc}}^2 - \\frac{GMm}{R} = 0 + 0', why: 'The minimum launch speed just reaches $r \\to \\infty$ (where $U = 0$) with zero speed left over.' },
            { tex: 'v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}', why: 'Solve for $v$. Again the projectile\'s mass cancels.' },
            { tex: '\\text{Earth: } v_{\\text{esc}} = \\sqrt{\\frac{2(3.98 \\times 10^{14})}{6.37 \\times 10^{6}}} = 11.2\\,\\text{km/s}', why: 'Substitute. Compare with the orbital speed at the surface, $\\sqrt{GM/R} = 7.91\\,\\text{km/s}$.' },
          ],
          result: '[[phys-escape-speed|Escape speed]] is $v_{\\text{esc}} = \\sqrt{2GM/R} = \\sqrt{2}\\,v_{\\text{circ}}$. It does not depend on the projectile\'s mass, and (with no air) not on the launch direction, because energy is a scalar.',
        },
        {
          type: 'graph',
          x: [1, 10],
          y: [0, 16],
          xStep: 1,
          yStep: 2,
          height: 280,
          functions: [{ expr: 'sqrt(v^2 - 11.19^2*(1 - 1/x))', color: 'blue', label: 'speed on the way up (km/s)' }],
          hlines: [
            { y: 'sqrt(max(v^2 - 11.19^2, 0))', color: 'red', label: 'speed left at infinity' },
          ],
          sliders: [{ name: 'v', min: 2, max: 16, step: 0.05, value: 9, label: 'launch speed $v_0$ (km/s)' }],
          readouts: [
            { label: 'highest point $r_{\\max}/R_E$ (negative means it escapes):', expr: '1/(1 - (v/11.19)^2)', digits: 3 },
            { label: 'speed left at infinity (km/s):', expr: 'sqrt(max(v^2 - 11.19^2, 0))', digits: 3 },
          ],
          caption: 'Speed against distance $r/R_E$ for a projectile fired straight up from Earth (no air). Energy conservation gives $v(r)^2 = v_0^2 - v_{\\text{esc}}^2(1 - R_E/r)$. Below $11.19\\,\\text{km/s}$ the curve hits zero at a turning point and the projectile falls back. At $v_0 = v_{\\text{esc}}$ the speed approaches zero but never reaches it. Above, a leftover speed remains forever (the red line).',
        },
        {
          type: 'table',
          headers: ['Body', 'Mass (kg)', 'Radius (m)', '$v_{\\text{esc}}$ (km/s)'],
          rows: [
            ['Moon', '$7.35 \\times 10^{22}$', '$1.74 \\times 10^{6}$', '$2.38$'],
            ['Mars', '$6.42 \\times 10^{23}$', '$3.39 \\times 10^{6}$', '$5.03$'],
            ['Earth', '$5.97 \\times 10^{24}$', '$6.37 \\times 10^{6}$', '$11.2$'],
            ['Jupiter', '$1.90 \\times 10^{27}$', '$7.15 \\times 10^{7}$', '$59.6$'],
            ['Sun', '$1.99 \\times 10^{30}$', '$6.96 \\times 10^{8}$', '$618$'],
          ],
          caption: 'Escape speeds from the surface, $v_{\\text{esc}} = \\sqrt{2GM/R}$. The Moon\'s low escape speed is why it has no atmosphere: fast gas molecules leak away.',
        },
        {
          type: 'deepdive',
          title: 'Escape from orbit, and a Newtonian black hole',
          blocks: [
            {
              type: 'p',
              text: 'From a circular orbit you already have $K = GMm/2r$ and need $K = GMm/r$ to escape, so the escape speed there is $\\sqrt{2}$ times the orbital speed: from the space station, $\\sqrt{2}(7.66) = 10.8\\,\\text{km/s}$, a boost of only $3.2\\,\\text{km/s}$. Firing along the direction of motion uses the speed you already have.',
            },
            {
              type: 'p',
              text: 'In 1783 John Michell asked what happens if $v_{\\text{esc}}$ reaches the speed of light $c$: setting $\\sqrt{2GM/R} = c$ gives $R = 2GM/c^2$, about $3\\,\\text{km}$ for the Sun. General relativity gives exactly the same radius (the Schwarzschild radius) for a black hole, though for different reasons.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find the escape speed from the surface of the Moon. Use $M = 7.35 \\times 10^{22}\\,\\text{kg}$, $R = 1.737 \\times 10^{6}\\,\\text{m}$ and $G = 6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$. Give the answer in km/s to 3 significant figures.',
      hint: 'Set the total energy $\\tfrac12 mv^2 - GMm/R$ equal to zero.',
      label: '$v_{\\text{esc}} =$',
      unit: 'km/s',
      answer: 'sqrt(2*6.674*10^-11*7.35*10^22/(1.737*10^6))/1000',
      answerTex: '2.38',
      tolerance: 0.015,
      explanation: '$v_{\\text{esc}} = \\sqrt{\\dfrac{2GM}{R}} = \\sqrt{\\dfrac{2(6.674 \\times 10^{-11})(7.35 \\times 10^{22})}{1.737 \\times 10^{6}}} = \\sqrt{5.65 \\times 10^{6}\\,\\text{m}^2/\\text{s}^2} = 2.38\\,\\text{km/s}$. Without the factor 2 you get $1.68\\,\\text{km/s}$, which is the speed of a circular orbit skimming the surface, not escape.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Kepler\'s laws and elliptical orbits',
      blocks: [
        {
          type: 'p',
          text: 'Around 1600, Johannes Kepler spent years fitting Tycho Brahe\'s naked-eye measurements of Mars. Circles failed by about 8 arcminutes, so he tried other curves and found three rules. Newton later showed that all three follow from $F = GMm/r^2$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'First law: ellipses', text: 'Each planet moves on an **ellipse** with the Sun at one focus (not at the center). A circle is the special case $e = 0$.' },
            { title: 'Second law: equal areas', text: 'The line from the Sun to the planet sweeps out **equal areas in equal times**. So the planet moves fastest at perihelion (closest) and slowest at aphelion (farthest).' },
            { title: 'Third law: periods', text: '$T^2 = \\dfrac{4\\pi^2}{GM}a^3$, where $a$ is the **semi-major axis**. For the Sun, in years and astronomical units, $T^2 = a^3$.' },
          ],
        },
        {
          type: 'p',
          text: 'An ellipse is the set of points whose distances to two fixed points (the foci) add up to a constant, $2a$. Its shape is set by the [[phys-semi-major-axis|semi-major axis]] $a$ (half the long diameter) and the [[phys-orbital-eccentricity|eccentricity]] $e$: each focus sits a distance $ae$ from the center. In [[parametric-equations|polar form]] with the Sun at the origin and $\\theta$ measured from perihelion:',
        },
        {
          type: 'math',
          tex: 'r(\\theta) = \\frac{a(1 - e^2)}{1 + e\\cos\\theta}, \\qquad r_{\\text{peri}} = a(1 - e), \\quad r_{\\text{apo}} = a(1 + e), \\quad a = \\frac{r_{\\text{peri}} + r_{\\text{apo}}}{2}',
        },
        {
          type: 'figure',
          svg: ELLIPSE_SVG,
          alt: 'An ellipse with the Sun at the right focus and an empty focus at the left. The semi-major axis a runs from the center to the right end. The distance ae from center to Sun is marked. Perihelion, at the right end, is labeled r = a(1 - e); aphelion, at the left end, is r = a(1 + e). A planet on the ellipse is joined to the Sun by the vector r at angle theta.',
          caption: 'Geometry of an orbit with $e = 0.6$. The Sun sits at a focus, $ae$ from the center; the other focus is empty.',
          maxWidth: 480,
        },
        {
          type: 'graph',
          x: [-2, 1.4],
          y: [-1.2, 1.2],
          equal: true,
          parametric: [{ x: 'cos(t) - c', y: 'sqrt(1 - c^2)*sin(t)', t: [0, '2pi'], color: 'gray', label: 'orbit' }],
          points: [
            { x: 0, y: 0, color: 'orange', label: 'Sun' },
            { x: '-2c', y: 0, color: 'gray', open: true },
            ...TICKS.map((E) => ({ x: orbitX(E), y: orbitY(E), color: 'purple' as const })),
            { x: orbitX(EP), y: orbitY(EP), color: 'blue', label: 'planet' },
          ],
          segments: [
            ...TICKS.map((E) => ({ from: [0, 0] as [number, number], to: [orbitX(E), orbitY(E)] as [string, string], color: 'purple' as const, dashed: true })),
            { from: [0, 0], to: [orbitX(EP), orbitY(EP)], color: 'blue' },
            {
              from: [orbitX(EP), orbitY(EP)],
              to: [`${orbitX(EP)} - 0.35*sin(${EP})/(1 - c*cos(${EP}))`, `${orbitY(EP)} + 0.35*sqrt(1 - c^2)*cos(${EP})/(1 - c*cos(${EP}))`],
              arrow: true,
              color: 'green',
              label: 'v',
            },
          ],
          sliders: [
            { name: 'c', min: 0, max: 0.8, step: 0.01, value: 0.5, label: 'eccentricity $e$' },
            { name: 's', min: 0, max: 1, step: 0.001, value: 0, label: 'time (fraction of a period)', play: true, speed: 0.2, loop: true },
          ],
          readouts: [
            { label: 'distance $r$ (units of $a$):', expr: `1 - c*cos(${EP})`, digits: 3 },
            { label: 'speed if $a = 1\\,\\text{AU}$ (km/s):', expr: `29.8*sqrt(2/(1 - c*cos(${EP})) - 1)`, digits: 3 },
          ],
          caption: 'Press ▶ to run one orbit every 5 seconds. The purple dots mark where the planet is at **equal time steps** (every $1/12$ of a period), and the dashed spokes cut the ellipse into 12 slices of **equal area**. Near perihelion the slices are short and wide and the planet races; near aphelion they are long and thin and it crawls. Set $e = 0$ for uniform circular motion.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why equal areas? Angular momentum',
          text: 'Gravity on a planet points straight at the Sun, along $\\vec{r}$, so its [[la-torque|torque]] about the Sun is $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{0}$ and the angular momentum $\\vec{L} = m\\,\\vec{r} \\times \\vec{v}$ is constant. In a short time $dt$ the radius vector sweeps a thin triangle of area $dA = \\tfrac12|\\vec{r} \\times \\vec{v}\\,dt|$, so $\\dfrac{dA}{dt} = \\dfrac{L}{2m}$, a constant. Kepler\'s second law is conservation of angular momentum, and it holds for **any** central force. At perihelion and aphelion $\\vec{v} \\perp \\vec{r}$, so $r_{\\text{p}}v_{\\text{p}} = r_{\\text{a}}v_{\\text{a}}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A comet moves on a long, thin elliptical orbit around the Sun. Where on its orbit is its speed **greatest**?',
      options: [
        { text: 'At aphelion, the point farthest from the Sun', why: 'At aphelion $r$ is largest, so by $r_{\\text{p}}v_{\\text{p}} = r_{\\text{a}}v_{\\text{a}}$ the speed is smallest there.' },
        { text: 'At perihelion, the point closest to the Sun', correct: true, why: 'Constant angular momentum means $rv_{\\perp}$ is fixed, and energy conservation says $K$ is largest where $U = -GMm/r$ is most negative. Both point to perihelion.' },
        { text: 'At the ends of the minor axis, where the comet is moving across the orbit', why: 'Those points are at distance $a$ from the Sun, in between. The speed there is the "average" circular speed $\\sqrt{GM/a}$, neither the maximum nor the minimum.' },
        { text: 'Its speed is the same everywhere, because gravity does no work on an orbit', why: 'That is true only for a circular orbit, where gravity is always perpendicular to the velocity. On an ellipse gravity has a component along $\\vec{v}$, doing positive work on the way in and negative work on the way out.' },
      ],
      explanation: 'As the comet falls toward the Sun, gravity has a component along its velocity and does positive work, so it speeds up until perihelion; on the way out it slows down again. Kepler\'s second law says the same thing geometrically: near the Sun the radius is short, so to sweep the same area per unit time the comet must move quickly. Halley\'s comet goes about 60 times faster at perihelion than at aphelion.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Energy on an ellipse, the vis-viva equation and transfer orbits',
      blocks: [
        {
          type: 'p',
          text: 'For a circle you found $E = -GMm/2r$. For an ellipse the same formula holds with $r$ replaced by $a$. Use the two conservation laws at the two ends of the major axis, where the velocity is perpendicular to the radius:',
        },
        {
          type: 'derivation',
          title: 'Total energy of an elliptical orbit',
          steps: [
            { tex: 'r_{\\text{p}}v_{\\text{p}} = r_{\\text{a}}v_{\\text{a}}', why: 'Angular momentum $L = mrv$ at perihelion equals its value at aphelion (velocity perpendicular to $\\vec{r}$ at both).' },
            { tex: '\\tfrac12 v_{\\text{p}}^2 - \\frac{GM}{r_{\\text{p}}} = \\tfrac12 v_{\\text{a}}^2 - \\frac{GM}{r_{\\text{a}}}', why: 'Energy per unit mass is the same at both points.' },
            { tex: 'v_{\\text{p}}^2 = \\frac{2GM\\,r_{\\text{a}}}{r_{\\text{p}}(r_{\\text{a}} + r_{\\text{p}})} = \\frac{GM}{a}\\cdot\\frac{r_{\\text{a}}}{r_{\\text{p}}}', why: 'Substitute $v_{\\text{a}} = v_{\\text{p}}r_{\\text{p}}/r_{\\text{a}}$, solve for $v_{\\text{p}}^2$, and use $r_{\\text{a}} + r_{\\text{p}} = 2a$.' },
            { tex: '\\frac{E}{m} = \\frac{GM}{2a}\\cdot\\frac{r_{\\text{a}}}{r_{\\text{p}}} - \\frac{GM}{r_{\\text{p}}} = \\frac{GM}{r_{\\text{p}}}\\cdot\\frac{r_{\\text{a}} - 2a}{2a} = -\\frac{GM}{2a}', why: 'Evaluate $E/m$ at perihelion; $r_{\\text{a}} - 2a = -r_{\\text{p}}$.' },
          ],
          result: '$E = -\\dfrac{GMm}{2a}$. The energy depends **only** on the semi-major axis, not on the eccentricity.',
        },
        {
          type: 'theorem',
          name: 'Vis-viva equation',
          tex: 'v^2 = GM\\left(\\frac{2}{r} - \\frac{1}{a}\\right)',
          text: 'Set $\\tfrac12 mv^2 - GMm/r = -GMm/2a$ and solve. It gives the speed at **any** point of an orbit from its distance $r$ and the orbit\'s size $a$. For a circle ($r = a$) it reduces to $v^2 = GM/r$; for escape ($a \\to \\infty$) to $v^2 = 2GM/r$.',
        },
        {
          type: 'p',
          text: '**Getting to geostationary orbit.** Rockets put satellites into a low parking orbit first. The cheapest two-burn route up, the **Hohmann transfer**, is half of an ellipse that touches the low orbit at perigee and the high orbit at apogee.',
        },
        {
          type: 'figure',
          svg: HOHMANN_SVG,
          alt: 'Two dashed circular orbits around Earth, a small one labeled LEO and a large one labeled GEO. A transfer ellipse runs from the right side of LEO, where an arrow labeled delta v1 shows a forward burn, around to the left side of GEO, where an arrow labeled delta v2 shows a second forward burn.',
          caption: 'A Hohmann transfer: speed up at perigee to enter the ellipse, coast half an orbit, then speed up again at apogee to circularize.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'Hohmann transfer from a $300\\,\\text{km}$ orbit to GEO',
          steps: [
            { tex: 'r_1 = 6.67 \\times 10^{6}\\,\\text{m}, \\quad r_2 = 4.22 \\times 10^{7}\\,\\text{m}, \\quad a_t = \\frac{r_1 + r_2}{2} = 2.44 \\times 10^{7}\\,\\text{m}', why: 'Radii from Earth\'s center; the transfer ellipse spans both.' },
            { tex: 'v_1 = \\sqrt{\\frac{GM}{r_1}} = 7.73\\,\\text{km/s}, \\qquad v_{\\text{p}} = \\sqrt{GM\\left(\\frac{2}{r_1} - \\frac{1}{a_t}\\right)} = 10.16\\,\\text{km/s}', why: 'Circular speed in the parking orbit, and the vis-viva speed at the transfer ellipse\'s perigee.' },
            { tex: '\\Delta v_1 = 10.16 - 7.73 = 2.43\\,\\text{km/s}', why: 'First burn, along the direction of motion.' },
            { tex: 'v_{\\text{a}} = \\sqrt{GM\\left(\\frac{2}{r_2} - \\frac{1}{a_t}\\right)} = 1.61\\,\\text{km/s}, \\qquad v_2 = \\sqrt{\\frac{GM}{r_2}} = 3.07\\,\\text{km/s}', why: 'At apogee the satellite is slower than the circular speed it needs at GEO.' },
            { tex: '\\Delta v_2 = 3.07 - 1.61 = 1.47\\,\\text{km/s}', why: 'Second burn to circularize. Total: $3.89\\,\\text{km/s}$, after a coast of half the transfer period, about $5.3\\,\\text{h}$.' },
          ],
          result: 'Moving from low orbit to GEO needs about $3.9\\,\\text{km/s}$ of velocity change, half of what it took to reach low orbit in the first place.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Halley\'s comet comes within $0.586\\,\\text{AU}$ of the Sun at perihelion and reaches $35.1\\,\\text{AU}$ at aphelion. Using Kepler\'s third law in the form $T^2 = a^3$ ($T$ in years, $a$ in AU), find its orbital period in years to 3 significant figures.',
      hint: 'First find the semi-major axis from the perihelion and aphelion distances.',
      label: '$T =$',
      unit: 'years',
      answer: '((0.586 + 35.1)/2)^1.5',
      answerTex: '75.4',
      tolerance: 0.4,
      explanation: 'The major axis is $r_{\\text{p}} + r_{\\text{a}} = 35.69\\,\\text{AU}$, so $a = 17.84\\,\\text{AU}$, and $T = a^{3/2} = 17.84^{1.5} = 75.4$ years (Halley returns every 75–76 years). Using the aphelion distance as $a$ gives about $208$ years, and $a^{2/3}$ instead of $a^{3/2}$ gives about $6.8$ years. Kepler\'s third law uses the **semi**-major axis.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'An orbit integrator in C++',
      blocks: [
        {
          type: 'p',
          text: 'Space games and mission planners rarely use the ellipse formulas directly. With several bodies, thrust, or drag there is no closed form. Instead they step Newton\'s second law forward in time. For one body around a fixed star the acceleration is',
        },
        {
          type: 'math',
          tex: '\\ddot{\\vec{r}} = -\\frac{GM}{|\\vec{r}|^3}\\,\\vec{r}',
          caption: 'This is $GM/r^2$ times the unit vector $-\\vec{r}/|\\vec{r}|$: magnitude and direction in one expression, with no trig.',
        },
        {
          type: 'p',
          text: 'The program below uses [[semi-implicit-euler|semi-implicit Euler]]: update the velocity from the acceleration, then move the position with the **new** velocity. Units of AU and years make $GM_{\\text{Sun}} = 4\\pi^2$, so an orbit with $a = 1$ should take exactly one year. It starts at perihelion of an $e = 0.5$ orbit, with the speed from the vis-viva equation.',
        },
        {
          type: 'code',
          title: 'orbit.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

// Units: AU, years, solar masses, so GM_sun = 4 pi^2 and Earth's orbit has T = 1.
constexpr double PI = 3.14159265358979323846;
constexpr double GM = 4.0 * PI * PI;

Vec2 accel(Vec2 r) {                        // a = -GM r / |r|^3
    double d = std::sqrt(r.x * r.x + r.y * r.y);
    double k = -GM / (d * d * d);
    return {k * r.x, k * r.y};
}

double energy(Vec2 r, Vec2 v) {             // specific energy E/m = v^2/2 - GM/r
    return 0.5 * (v.x * v.x + v.y * v.y) - GM / std::sqrt(r.x * r.x + r.y * r.y);
}

double tidy(double q) { return std::fabs(q) < 5e-4 ? 0.0 : q; }  // no "-0.000"

int main() {
    const double ecc = 0.5, a = 1.0;        // semi-major axis 1 AU
    const double dt = 1.0e-4;               // time step, years
    Vec2 r{a * (1.0 - ecc), 0.0};           // start at perihelion
    Vec2 v{0.0, std::sqrt(GM / a * (1.0 + ecc) / (1.0 - ecc))};
    std::printf("E/m at start = %.4f (exact -GM/2a = %.4f)\\n", energy(r, v), -GM / (2.0 * a));
    double tCross = -1.0;
    for (int i = 1; i <= 11000; ++i) {      // 1.1 years
        Vec2 acc = accel(r);
        v = {v.x + acc.x * dt, v.y + acc.y * dt};  // semi-implicit Euler: update v,
        double yOld = r.y;
        r = {r.x + v.x * dt, r.y + v.y * dt};      // then move with the NEW v
        if (yOld < 0.0 && r.y >= 0.0 && tCross < 0.0)
            tCross = (i - 1 + yOld / (yOld - r.y)) * dt;  // interpolate the crossing
        if (i % 1250 == 0 && i <= 10000)
            std::printf("t = %.3f yr  r = (%+.3f, %+.3f)  |r| = %.3f\\n",
                        i * dt, tidy(r.x), tidy(r.y), std::hypot(r.x, r.y));
    }
    std::printf("E/m after 1.1 yr = %.4f\\n", energy(r, v));
    std::printf("measured period = %.4f yr (Kepler: a^1.5 = %.4f yr)\\n", tCross, std::pow(a, 1.5));

    // Same orbit with explicit Euler (position uses the OLD velocity).
    r = {a * (1.0 - ecc), 0.0};
    v = {0.0, std::sqrt(GM / a * (1.0 + ecc) / (1.0 - ecc))};
    for (int i = 1; i <= 10000; ++i) {
        Vec2 acc = accel(r);
        r = {r.x + v.x * dt, r.y + v.y * dt};
        v = {v.x + acc.x * dt, v.y + acc.y * dt};
    }
    std::printf("explicit Euler, E/m after 1 yr = %.4f\\n", energy(r, v));
}`,
          output: `E/m at start = -19.7392 (exact -GM/2a = -19.7392)
t = 0.125 yr  r = (-0.197, +0.824)  |r| = 0.848
t = 0.250 yr  r = (-0.936, +0.778)  |r| = 1.217
t = 0.375 yr  r = (-1.363, +0.437)  |r| = 1.431
t = 0.500 yr  r = (-1.500, -0.003)  |r| = 1.500
t = 0.625 yr  r = (-1.361, -0.442)  |r| = 1.431
t = 0.750 yr  r = (-0.934, -0.782)  |r| = 1.218
t = 0.875 yr  r = (-0.195, -0.826)  |r| = 0.848
t = 1.000 yr  r = (+0.500, +0.000)  |r| = 0.500
E/m after 1.1 yr = -19.7267
measured period = 1.0000 yr (Kepler: a^1.5 = 1.0000 yr)
explicit Euler, E/m after 1 yr = -19.4248`,
          annotations: [
            { lines: '10-14', text: 'The inverse-square law as a vector: $-GM\\vec{r}/|\\vec{r}|^3$.' },
            { lines: '25-26', text: 'Initial conditions: perihelion distance $a(1 - e)$ and the vis-viva speed $v_{\\text{p}}^2 = \\frac{GM}{a}\\cdot\\frac{1 + e}{1 - e}$, perpendicular to $\\vec{r}$.' },
            { lines: '31-33', text: 'Semi-implicit Euler: the position update uses the velocity that was just updated. Swapping these two lines turns it into explicit Euler.' },
            { lines: '34-35', text: 'Detect when $y$ goes from negative to positive (back at perihelion) and interpolate linearly within the step to time the period.' },
            { lines: '43-51', text: 'The same orbit with explicit Euler. Its energy creeps upward every orbit, so the planet spirals outward.' },
          ],
        },
        {
          type: 'graph',
          x: [-1.7, 1.2],
          y: [-1, 1],
          equal: true,
          parametric: [{ x: 'cos(t) - 0.5', y: 'sqrt(0.75)*sin(t)', t: [0, '2pi'], color: 'blue', label: 'exact ellipse, $a = 1$, $e = 0.5$' }],
          points: [
            { x: 0, y: 0, color: 'orange', label: 'Sun' },
            { x: -0.197, y: 0.824, color: 'red' },
            { x: -0.936, y: 0.778, color: 'red' },
            { x: -1.363, y: 0.437, color: 'red' },
            { x: -1.5, y: -0.003, color: 'red' },
            { x: -1.361, y: -0.442, color: 'red' },
            { x: -0.934, y: -0.782, color: 'red' },
            { x: -0.195, y: -0.826, color: 'red' },
            { x: 0.5, y: 0, color: 'red', label: 't = 0 and 1 yr' },
          ],
          caption: 'Red: the positions printed by `orbit.cpp` every eighth of a year. Blue: the exact Kepler ellipse. The integrator stays on the ellipse. The points are equally spaced in **time**, so they spread far apart near perihelion (right), where the planet is fastest, and crowd together near aphelion (left), exactly as Kepler\'s second law demands.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why semi-implicit Euler?',
          text: 'Both Euler versions make an error of order $\\Delta t$ per unit time, but explicit Euler\'s error always adds energy, so orbits spiral outward and springs blow up. Semi-implicit Euler is **symplectic**: its energy wobbles slightly (here $-19.7392$ vs $-19.7267$) but does not drift, even over thousands of orbits. That is why it is the default integrator in Box2D and in most game physics loops. The game-physics unit compares it with Verlet and RK4 and explains the stability conditions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student computes the radius of a circular orbit with a period of $T = 12.0\\,\\text{h}$ around Earth ($GM_E = 3.98 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$). Tap the first line with a mistake.',
      lines: [
        '$\\dfrac{GMm}{r^2} = \\dfrac{mv^2}{r}$ with $v = \\dfrac{2\\pi r}{T}$',
        '$T^2 = \\dfrac{4\\pi^2 r^3}{GM}$',
        '$T = 12.0 \\times 3600 = 4.32 \\times 10^{4}\\,\\text{s}$',
        '$r = \\sqrt{\\dfrac{GMT^2}{4\\pi^2}} = \\sqrt{\\dfrac{(3.98 \\times 10^{14})(4.32 \\times 10^{4})^2}{4\\pi^2}} = 1.37 \\times 10^{11}\\,\\text{m}$',
      ],
      errorLines: [4],
      explanation: 'Line 4 takes a square root, but the equation is $r^3 = GMT^2/4\\pi^2$, so you need the **cube** root: $r = \\left(1.88 \\times 10^{22}\\,\\text{m}^3\\right)^{1/3} = 2.66 \\times 10^{7}\\,\\text{m}$, about $26\\,600\\,\\text{km}$, close to the GPS orbit. The student\'s $1.37 \\times 10^{11}\\,\\text{m}$ is near the distance to the Sun, an instant red flag for a 12-hour Earth orbit.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for finding the altitude of a geostationary satellite in order.',
      lines: [
        'Write Newton\'s second law radially: $GMm/r^2 = mv^2/r$.',
        'Substitute $v = 2\\pi r/T$ to get $T^2 = 4\\pi^2 r^3/GM$.',
        'Set $T$ to one sidereal day, $86\\,164\\,\\text{s}$, and compute $r^3 = GMT^2/4\\pi^2$.',
        'Take the cube root to get $r \\approx 4.22 \\times 10^{7}\\,\\text{m}$.',
        'Subtract Earth\'s radius to get the altitude, about $35\\,800\\,\\text{km}$.',
      ],
      explanation: 'Physics first (the force law), then the algebra that removes $v$, then the numbers, then the root, and only at the very end the conversion from distance-to-center to altitude. Each step needs the result of the one before it. Subtracting $R_E$ too early is a classic way to get a wrong radius.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the summary of Kepler\'s laws.',
      template: 'Planets move on ___ with the Sun at one focus. The second law, equal areas in equal times, is conservation of ___. The third law says $T^2$ is proportional to ___.',
      blanks: [{ answers: ['ellipses'] }, { answers: ['angular momentum'] }, { answers: ['$a^3$'] }],
      wordBank: ['ellipses', 'circles', 'angular momentum', 'energy', '$a^3$', '$a^2$', '$a^{3/2}$'],
      explanation: 'First law: ellipses, with the Sun at a **focus**, not the center. Second law: the areal speed $dA/dt = L/2m$ is constant because gravity is a central force with zero torque, so angular momentum (not energy) is what the second law expresses. Third law: $T^2 = (4\\pi^2/GM)a^3$, so $T \\propto a^{3/2}$; the cube goes with $a$, the square with $T$.',
    },
  ],
  takeaways: [
    'A circular orbit is free fall: gravity alone provides the centripetal force, so $v = \\sqrt{GM/r}$ and $T = 2\\pi\\sqrt{r^3/GM}$. There is no outward force on the satellite.',
    'Geostationary satellites orbit at $r \\approx 42\\,200\\,\\text{km}$ (period one sidereal day); GPS satellites at $26\\,600\\,\\text{km}$ (half a sidereal day).',
    'Circular-orbit energy: $K = GMm/2r$, $U = -2K$, $E = -K$. Losing energy (drag) makes a satellite drop and speed up.',
    'Escape speed from energy conservation: $v_{\\text{esc}} = \\sqrt{2GM/R} = \\sqrt{2}\\,v_{\\text{circ}}$, $11.2\\,\\text{km/s}$ for Earth, independent of mass and direction.',
    'Kepler: ellipses with the Sun at a focus; equal areas in equal times (angular momentum); $T^2 = 4\\pi^2a^3/GM$. Orbital energy $E = -GMm/2a$ gives the vis-viva equation $v^2 = GM(2/r - 1/a)$.',
    'Numerically, step $\\ddot{\\vec{r}} = -GM\\vec{r}/r^3$ with semi-implicit Euler: its energy wobbles but does not drift, unlike explicit Euler.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 13: Gravitation',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 13.4–13.5 cover satellite orbits, energy and Kepler\'s laws, with a careful derivation of the equal-areas law.',
    },
    {
      title: 'Kepler\'s laws of planetary motion',
      url: 'https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion',
      source: 'wikipedia',
      note: 'The history of the three laws and their derivation from Newton\'s law of gravitation.',
    },
    {
      title: 'Hohmann transfer orbit',
      url: 'https://en.wikipedia.org/wiki/Hohmann_transfer_orbit',
      source: 'wikipedia',
      note: 'The two-burn transfer between circular orbits, with the delta-v formulas used by mission planners.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The units on central forces and Kepler problems have lecture videos and worked problems on orbits and transfer trajectories.',
    },
  ],
};
