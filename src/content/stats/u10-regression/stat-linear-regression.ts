import type { Lesson } from '../../types';

// Stress test: enemies on screen vs frame time (ms). Least squares: y = 44/7 + (39/350) x.
const enemies = [10, 20, 30, 40, 50, 60, 70, 80];
const frameMs = [7.8, 8.0, 10.1, 9.9, 12.4, 12.6, 14.5, 15.1];
const sse = enemies.map((x, i) => `(${frameMs[i]} - c - m*${x})^2`).join(' + ');

export const lesson: Lesson = {
  id: 'stat-linear-regression',
  title: 'Simple Linear Regression',
  summary: 'Scatterplots and the correlation coefficient $r$; the least-squares line derived with calculus and recognized as the linear-algebra projection; slope $= r\\,s_y/s_x$; residuals and $R^2$; and the two classic traps, extrapolation and regression to the mean.',
  minutes: 21,
  objectives: [
    'Describe a scatterplot and compute and interpret the sample correlation coefficient $r$',
    'Derive the least-squares line by minimizing the sum of squared residuals, and connect it to the normal equations $X^TX\\boldsymbol{\\beta} = X^T\\mathbf{y}$',
    'Compute slope and intercept from summary statistics ($b_1 = r\\,s_y/s_x$, $b_0 = \\bar{y} - b_1\\bar{x}$) and interpret them in context',
    'Compute residuals and $R^2$ and explain $R^2$ as the fraction of variance explained',
    'Recognize the dangers of extrapolation and explain regression to the mean',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Scatterplots and the correlation coefficient',
      blocks: [
        {
          type: 'p',
          text: 'Regression is about two quantitative variables measured on the same units: practice hours and rating, ping and win rate, enemies on screen and frame time. Always start with a [[stat-scatterplot|scatterplot]], one point $(x_i, y_i)$ per unit, and describe its **direction** (up or down), **form** (straight or curved), **strength** (tight or loose) and any unusual points.',
        },
        {
          type: 'p',
          text: 'To put a number on the strength of a **straight-line** pattern, convert each coordinate to a $z$-score and average the products. This is the sample version of the [[stat-correlation|correlation coefficient]] $\\rho$ from the joint-distributions unit.',
        },
        {
          type: 'definition',
          term: 'Sample correlation coefficient',
          text: 'For data $(x_1, y_1), \\dots, (x_n, y_n)$ with means $\\bar{x}, \\bar{y}$ and standard deviations $s_x, s_y$,\n\n$$r = \\frac{1}{n-1}\\sum_{i=1}^{n}\\left(\\frac{x_i - \\bar{x}}{s_x}\\right)\\left(\\frac{y_i - \\bar{y}}{s_y}\\right) = \\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}},$$\n\nwhere $S_{xx} = \\sum (x_i - \\bar{x})^2$, $S_{yy} = \\sum (y_i - \\bar{y})^2$ and $S_{xy} = \\sum (x_i - \\bar{x})(y_i - \\bar{y})$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><circle cx="63.3" cy="85.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="18.0" cy="131.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="67.6" cy="92.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="29.5" cy="122.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="121.5" cy="60.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="49.9" cy="105.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="92.1" cy="71.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="151.0" cy="27.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="103.5" cy="50.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="43.0" cy="132.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="50.6" cy="116.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="50.9" cy="127.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="42.6" cy="111.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="123.3" cy="50.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="119.7" cy="35.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="65.9" cy="76.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="107.0" cy="73.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="70.7" cy="77.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="124.1" cy="43.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="116.7" cy="54.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="83.9" cy="89.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="79.3" cy="77.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="100.0" cy="66.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="107.0" cy="52.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="101.8" cy="80.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="108.6" cy="53.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="108.5" cy="46.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="91.8" cy="83.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="66.1" cy="98.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="46.1" cy="117.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="109.9" cy="59.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="107.9" cy="50.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="88.8" cy="73.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="100.9" cy="61.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="111.5" cy="56.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="127.8" cy="41.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="134.6" cy="18.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="162.0" cy="22.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="107.0" cy="58.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="115.5" cy="38.8" r="3" class="f-blue" fill-opacity="0.75"/><text x="90.0" y="160" text-anchor="middle" font-size="14" font-weight="600">r = 0.95</text><rect x="185" y="10" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><circle cx="232.3" cy="63.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="293.7" cy="36.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="246.3" cy="84.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="218.7" cy="94.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="234.7" cy="66.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="282.6" cy="72.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="206.2" cy="132.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="263.5" cy="40.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="272.8" cy="73.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="241.9" cy="68.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="221.2" cy="79.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="250.9" cy="76.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="193.0" cy="94.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="234.5" cy="68.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="296.9" cy="34.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="257.5" cy="57.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="210.5" cy="66.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="206.3" cy="115.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="268.6" cy="51.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="250.1" cy="84.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="263.4" cy="45.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="305.0" cy="29.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="266.3" cy="80.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="258.0" cy="77.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="243.9" cy="74.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="244.8" cy="114.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="245.7" cy="53.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="243.7" cy="94.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="253.0" cy="54.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="256.7" cy="62.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="267.3" cy="22.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="264.1" cy="29.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="248.0" cy="56.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="262.7" cy="67.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="231.7" cy="55.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="251.7" cy="58.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="238.6" cy="110.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="221.6" cy="46.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="337.0" cy="18.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="270.6" cy="115.5" r="3" class="f-blue" fill-opacity="0.75"/><text x="265.0" y="160" text-anchor="middle" font-size="14" font-weight="600">r = 0.60</text><rect x="360" y="10" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><circle cx="482.0" cy="54.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="374.4" cy="42.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="444.0" cy="74.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="420.9" cy="92.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="423.6" cy="61.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="429.2" cy="63.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="386.9" cy="23.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="428.8" cy="41.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="414.0" cy="57.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="512.0" cy="31.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="439.5" cy="68.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="426.0" cy="88.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="427.6" cy="46.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="418.6" cy="46.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="409.5" cy="68.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="425.1" cy="84.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="445.5" cy="56.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="428.6" cy="132.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="456.6" cy="43.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="429.5" cy="48.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="434.8" cy="108.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="470.4" cy="60.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="447.0" cy="89.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="422.4" cy="41.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="429.9" cy="119.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="446.9" cy="87.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="479.5" cy="42.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="427.9" cy="30.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="428.5" cy="122.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="457.7" cy="76.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="413.5" cy="53.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="427.4" cy="79.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="454.9" cy="18.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="447.8" cy="95.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="436.4" cy="52.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="449.9" cy="91.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="368.0" cy="23.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="458.1" cy="63.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="411.7" cy="72.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="395.1" cy="110.3" r="3" class="f-blue" fill-opacity="0.75"/><text x="440.0" y="160" text-anchor="middle" font-size="14" font-weight="600">r = 0.01</text><rect x="10" y="175" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><circle cx="75.5" cy="214.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="86.2" cy="232.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="110.4" cy="239.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="106.9" cy="294.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="107.6" cy="273.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="18.0" cy="213.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="99.7" cy="281.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="76.8" cy="221.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="120.4" cy="211.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="90.2" cy="239.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="96.8" cy="222.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="88.7" cy="264.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="64.5" cy="260.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="101.1" cy="254.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="24.2" cy="194.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="134.7" cy="269.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="54.4" cy="201.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="134.3" cy="282.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="69.0" cy="265.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="66.4" cy="226.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="53.7" cy="212.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="89.9" cy="289.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="61.7" cy="183.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="96.3" cy="230.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="98.7" cy="266.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="133.6" cy="227.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="113.2" cy="264.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="133.1" cy="208.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="64.8" cy="250.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="119.0" cy="252.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="70.0" cy="215.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="121.0" cy="284.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="96.5" cy="229.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="128.5" cy="216.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="81.5" cy="240.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="32.8" cy="236.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="122.7" cy="290.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="100.7" cy="232.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="162.0" cy="297.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="86.9" cy="236.0" r="3" class="f-blue" fill-opacity="0.75"/><text x="90.0" y="325" text-anchor="middle" font-size="14" font-weight="600">r = −0.50</text><rect x="185" y="175" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><circle cx="281.6" cy="241.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="231.3" cy="213.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="290.3" cy="225.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="265.6" cy="228.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="270.1" cy="219.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="301.0" cy="247.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="279.2" cy="210.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="321.0" cy="264.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="313.9" cy="261.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="271.5" cy="230.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="272.7" cy="220.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="303.3" cy="247.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="286.4" cy="248.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="240.0" cy="190.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="325.8" cy="262.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="261.1" cy="209.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="294.0" cy="238.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="193.0" cy="183.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="309.4" cy="264.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="274.9" cy="241.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="294.5" cy="242.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="336.3" cy="278.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="304.0" cy="229.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="290.6" cy="230.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="275.4" cy="221.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="249.9" cy="198.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="215.6" cy="193.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="302.9" cy="253.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="256.9" cy="202.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="299.4" cy="219.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="271.1" cy="225.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="241.6" cy="207.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="272.6" cy="244.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="337.0" cy="297.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="257.6" cy="220.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="228.9" cy="189.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="295.2" cy="246.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="275.1" cy="226.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="225.5" cy="202.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="296.0" cy="241.3" r="3" class="f-blue" fill-opacity="0.75"/><text x="265.0" y="325" text-anchor="middle" font-size="14" font-weight="600">r = −0.90</text><rect x="360" y="175" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><circle cx="372.6" cy="197.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="368.0" cy="183.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="377.2" cy="212.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="379.1" cy="220.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="383.1" cy="222.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="387.3" cy="231.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="387.7" cy="223.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="394.7" cy="240.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="397.3" cy="247.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="408.7" cy="257.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="406.8" cy="263.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="409.5" cy="270.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="413.4" cy="266.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="416.4" cy="269.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="419.4" cy="276.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="424.4" cy="283.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="429.8" cy="280.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="432.2" cy="297.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="438.1" cy="279.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="439.7" cy="281.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="443.9" cy="293.6" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="450.4" cy="282.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="452.3" cy="287.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="454.2" cy="276.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="458.5" cy="291.2" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="463.6" cy="281.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="469.9" cy="266.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="469.6" cy="263.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="473.4" cy="279.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="479.4" cy="262.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="479.7" cy="256.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="484.5" cy="255.5" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="490.4" cy="233.1" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="493.6" cy="243.8" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="496.5" cy="229.3" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="501.3" cy="228.0" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="498.6" cy="218.9" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="509.4" cy="203.7" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="509.5" cy="205.4" r="3" class="f-blue" fill-opacity="0.75"/><circle cx="512.0" cy="207.4" r="3" class="f-blue" fill-opacity="0.75"/><text x="440.0" y="325" text-anchor="middle" font-size="14" font-weight="600">r = −0.07  (curved!)</text></svg>',
          alt: 'Six scatterplots of 40 points each. Correlation 0.95: a tight upward band. 0.60: a looser upward cloud. 0.01: a shapeless cloud. Minus 0.50: a loose downward cloud. Minus 0.90: a tight downward band. Minus 0.07: points on a clear U-shaped parabola.',
          caption: 'A point in the upper-right or lower-left quadrant (relative to the means) has $z_x z_y > 0$ and pushes $r$ up; upper-left and lower-right points push it down. The last panel is a strong relationship with $r \\approx 0$: correlation only measures **linear** association.',
        },
        {
          type: 'list',
          items: [
            '$-1 \\le r \\le 1$, with $r = \\pm 1$ only when every point lies exactly on a line (Cauchy–Schwarz again).',
            '$r$ has no units and does not change if you rescale either variable (ms to seconds) or swap $x$ and $y$.',
            '$r$ is sensitive to outliers: one far-away point can create or destroy a strong $r$.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Correlation is not causation',
          text: 'Players who buy cosmetics play more hours, but forcing a purchase will not make anyone play more: both may be driven by how much a player already likes the game, a [[stat-confounding-variable|confounding variable]]. A strong $r$ from observational telemetry tells you the variables move together, not why. Only a randomized experiment (an A/B test) licenses a causal claim.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Five playtest sessions record $x$ = hints shown and $y$ = puzzles solved: $(1, 2)$, $(2, 4)$, $(3, 5)$, $(4, 4)$, $(5, 7)$. Compute the correlation coefficient $r$, to $3$ decimal places.',
      hint: '$\\bar{x} = 3$ and $\\bar{y} = 4.4$. Compute $S_{xy}$, $S_{xx}$ and $S_{yy}$ from the deviations, then $r = S_{xy}/\\sqrt{S_{xx}S_{yy}}$.',
      label: '$r =$',
      answer: '10/sqrt(132)',
      answerTex: 'r = \\frac{10}{\\sqrt{132}} \\approx 0.870',
      tolerance: 0.0006,
      explanation: 'Deviations: $x - \\bar{x} = -2, -1, 0, 1, 2$ and $y - \\bar{y} = -2.4, -0.4, 0.6, -0.4, 2.6$. Then $S_{xy} = 4.8 + 0.4 + 0 - 0.4 + 5.2 = 10$, $S_{xx} = 4 + 1 + 0 + 1 + 4 = 10$ and $S_{yy} = 5.76 + 0.16 + 0.36 + 0.16 + 6.76 = 13.2$. So $r = \\frac{10}{\\sqrt{10 \\cdot 13.2}} = \\frac{10}{\\sqrt{132}} \\approx 0.870$: a fairly strong positive linear association.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The least-squares line',
      blocks: [
        {
          type: 'p',
          text: 'A graphics programmer stress-tests a level by spawning more and more enemies and logging the frame time. The relationship looks linear. Which line $\\hat{y} = b_0 + b_1 x$ fits best? For each point the **[[stat-residual|residual]]** $e_i = y_i - \\hat{y}_i$ is the vertical miss: observed minus predicted. The [[stat-least-squares-line|least-squares line]] makes the sum of squared residuals as small as possible.',
        },
        {
          type: 'math',
          tex: '\\operatorname{SSE}(b_0, b_1) = \\sum_{i=1}^{n} \\big(y_i - b_0 - b_1 x_i\\big)^2',
          caption: 'SSE = sum of squared errors. Vertical distances, because $y$ is the variable we want to predict.',
        },
        {
          type: 'graph',
          x: [0, 90],
          y: [4, 18],
          xStep: 10,
          yStep: 2,
          functions: [
            { expr: 'c + m*x', label: 'your line $\\hat{y} = c + mx$', color: 'orange' },
            { expr: '44/7 + 39x/350', label: 'least squares $\\hat{y} = 6.286 + 0.1114x$', color: 'green', dashed: true },
          ],
          points: enemies.map((x, i) => ({ x, y: frameMs[i], color: 'blue' as const })),
          segments: enemies.map((x, i) => ({ from: [x, frameMs[i]] as [number, number], to: [x, `c + m*${x}`] as [number, string], color: 'red' as const })),
          sliders: [
            { name: 'c', min: 2, max: 10, step: 0.05, value: 8, label: 'intercept $c$ (ms)' },
            { name: 'm', min: 0, max: 0.2, step: 0.001, value: 0.08, label: 'slope $m$ (ms per enemy)' },
          ],
          readouts: [
            { label: 'your SSE', expr: sse, digits: 3 },
            { label: 'least-squares SSE', expr: '1.9714', digits: 3 },
          ],
          caption: 'Frame time (ms) against enemies on screen. The red segments are your residuals. Try to push your SSE down to the green line\'s $1.971$; you can only reach it by landing on the green line itself.',
        },
        {
          type: 'p',
          text: 'SSE is a function of **two** variables. To minimize it, freeze one and differentiate in the other (a *partial* derivative, written $\\partial$): at the bottom of the bowl, the slice in each direction must be flat.',
        },
        {
          type: 'derivation',
          title: 'Minimizing SSE with calculus',
          steps: [
            { tex: '\\frac{\\partial \\operatorname{SSE}}{\\partial b_0} = -2\\sum (y_i - b_0 - b_1 x_i) = 0', why: 'Hold $b_1$ fixed and differentiate each square with the [[chain-rule]]: the inner derivative with respect to $b_0$ is $-1$.' },
            { tex: '\\sum y_i = n b_0 + b_1 \\sum x_i \\implies b_0 = \\bar{y} - b_1\\bar{x}', why: 'Divide by $-2$, split the sum, and divide by $n$. So the best line always passes through the point of means $(\\bar{x}, \\bar{y})$.' },
            { tex: '\\frac{\\partial \\operatorname{SSE}}{\\partial b_1} = -2\\sum x_i(y_i - b_0 - b_1 x_i) = 0', why: 'Now hold $b_0$ fixed; the inner derivative with respect to $b_1$ is $-x_i$.' },
            { tex: '\\sum x_i(y_i - \\bar{y}) = b_1 \\sum x_i (x_i - \\bar{x})', why: 'Substitute $b_0 = \\bar{y} - b_1\\bar{x}$, so $y_i - b_0 - b_1x_i = (y_i - \\bar{y}) - b_1(x_i - \\bar{x})$, and rearrange.' },
            { tex: 'b_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2} = \\frac{S_{xy}}{S_{xx}}', why: 'Since $\\sum (x_i - \\bar{x}) = 0$, we may subtract $\\bar{x}\\sum(y_i - \\bar{y}) = 0$ on the left and $\\bar{x}\\sum(x_i - \\bar{x}) = 0$ on the right without changing anything.' },
          ],
          result: 'The least-squares line has slope $b_1 = S_{xy}/S_{xx}$ and intercept $b_0 = \\bar{y} - b_1\\bar{x}$. It is a true minimum: SSE is a sum of squares of linear functions, an upward-opening bowl, so its only critical point is the bottom.',
        },
        {
          type: 'derivation',
          title: 'The frame-time line',
          steps: [
            { tex: '\\bar{x} = 45, \\quad \\bar{y} = 11.3, \\quad S_{xx} = 4200, \\quad S_{xy} = 468', why: 'From the eight data points in the graph.' },
            { tex: 'b_1 = \\frac{468}{4200} \\approx 0.1114 \\text{ ms per enemy}', why: 'Slope formula.' },
            { tex: 'b_0 = 11.3 - 0.1114 \\cdot 45 \\approx 6.286 \\text{ ms}', why: 'The line passes through $(\\bar{x}, \\bar{y})$.' },
          ],
          result: '$\\widehat{\\text{frame time}} = 6.286 + 0.1114 \\cdot \\text{enemies}$ (ms).',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'The same line, by linear algebra',
      blocks: [
        {
          type: 'p',
          text: 'You met this problem in Linear Algebra. Asking for $b_0 + b_1 x_i = y_i$ for every $i$ is an overdetermined system $X\\boldsymbol{\\beta} = \\mathbf{y}$, with the [[la-design-matrix|design matrix]] $X$ holding a column of ones and a column of $x$-values. It has no exact solution, so we take the [[least-squares-solution|least-squares solution]].',
        },
        {
          type: 'math',
          tex: 'X = \\begin{bmatrix} 1 & x_1 \\\\ \\vdots & \\vdots \\\\ 1 & x_n \\end{bmatrix}, \\qquad X^TX\\boldsymbol{\\beta} = X^T\\mathbf{y} \\iff \\begin{bmatrix} n & \\sum x_i \\\\ \\sum x_i & \\sum x_i^2 \\end{bmatrix}\\begin{bmatrix} b_0 \\\\ b_1 \\end{bmatrix} = \\begin{bmatrix} \\sum y_i \\\\ \\sum x_i y_i \\end{bmatrix}',
          caption: 'The [[normal-equations]]. Their two rows are exactly the two "partial derivative $= 0$" equations from the previous card.',
        },
        {
          type: 'p',
          text: 'Geometrically, $\\hat{\\mathbf{y}} = X\\hat{\\boldsymbol{\\beta}}$ is the [[orthogonal-projection]] of the data vector $\\mathbf{y} \\in \\mathbb{R}^n$ onto the column space of $X$, the plane of all vectors of the form $b_0\\mathbf{1} + b_1\\mathbf{x}$. The residual vector $\\mathbf{e} = \\mathbf{y} - \\hat{\\mathbf{y}}$ is perpendicular to that plane, so it is perpendicular to each column:',
        },
        {
          type: 'math',
          tex: '\\mathbf{1} \\cdot \\mathbf{e} = \\sum e_i = 0, \\qquad \\mathbf{x} \\cdot \\mathbf{e} = \\sum x_i e_i = 0',
          caption: 'Residuals always sum to zero (when the model has an intercept) and are uncorrelated with $x$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the two views must agree',
          text: 'Calculus finds the bottom of the SSE bowl; linear algebra finds the closest point of a plane to $\\mathbf{y}$. They are the same problem, because $\\operatorname{SSE} = \\|\\mathbf{y} - X\\boldsymbol{\\beta}\\|^2$ is a squared distance. The projection view generalizes instantly to many predictors (multiple regression, two lessons from now), where the calculus would mean juggling many partial derivatives.',
        },
        {
          type: 'code',
          title: 'fit_line.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

struct Fit { double b0, b1, r, r2; };

// Least-squares line through (x_i, y_i), using centered sums for numerical accuracy.
Fit leastSquares(const std::vector<double>& x, const std::vector<double>& y) {
    const std::size_t n = x.size();
    double xbar = 0, ybar = 0;
    for (std::size_t i = 0; i < n; ++i) { xbar += x[i]; ybar += y[i]; }
    xbar /= n;
    ybar /= n;
    double sxx = 0, syy = 0, sxy = 0;
    for (std::size_t i = 0; i < n; ++i) {
        sxx += (x[i] - xbar) * (x[i] - xbar);
        syy += (y[i] - ybar) * (y[i] - ybar);
        sxy += (x[i] - xbar) * (y[i] - ybar);
    }
    Fit f;
    f.b1 = sxy / sxx;                          // slope
    f.b0 = ybar - f.b1 * xbar;                 // the line passes through (xbar, ybar)
    f.r = sxy / std::sqrt(sxx * syy);          // correlation
    f.r2 = f.r * f.r;                          // fraction of variance explained
    return f;
}

int main() {
    // Enemies on screen vs measured frame time (ms) in a stress-test level.
    const std::vector<double> enemies = {10, 20, 30, 40, 50, 60, 70, 80};
    const std::vector<double> frameMs = {7.8, 8.0, 10.1, 9.9, 12.4, 12.6, 14.5, 15.1};
    Fit f = leastSquares(enemies, frameMs);
    std::printf("frame time = %.3f + %.4f * enemies\\n", f.b0, f.b1);
    std::printf("r = %.4f, R^2 = %.4f\\n", f.r, f.r2);
    std::printf("residuals:");
    for (std::size_t i = 0; i < enemies.size(); ++i)
        std::printf(" %+.2f", frameMs[i] - (f.b0 + f.b1 * enemies[i]));
    std::printf("\\n");
}`,
          output: `frame time = 6.286 + 0.1114 * enemies
r = 0.9816, R^2 = 0.9636
residuals: +0.40 -0.51 +0.47 -0.84 +0.54 -0.37 +0.41 -0.10`,
          annotations: [
            { lines: '10-19', text: 'First pass: the means. A second pass over centered values avoids the cancellation that $\\sum x_i y_i - n\\bar{x}\\bar{y}$ suffers when the numbers are large (for example timestamps).' },
            { lines: '21-22', text: '$b_1 = S_{xy}/S_{xx}$ and $b_0 = \\bar{y} - b_1\\bar{x}$, exactly as derived.' },
            { lines: '36-37', text: 'Residuals: observed minus predicted. They alternate in sign with no pattern, and they sum to zero.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'expr',
      prompt: 'Find the least-squares line for the five playtest sessions $(1, 2)$, $(2, 4)$, $(3, 5)$, $(4, 4)$, $(5, 7)$ from the earlier question. (There you found $S_{xy} = 10$ and $S_{xx} = 10$.)',
      label: '$\\hat{y} =$',
      answer: '1.4 + x',
      answerTex: '\\hat{y} = 1.4 + x',
      hint: '$b_1 = S_{xy}/S_{xx}$, then $b_0 = \\bar{y} - b_1\\bar{x}$ with $\\bar{x} = 3$, $\\bar{y} = 4.4$.',
      explanation: '$b_1 = \\frac{10}{10} = 1$ and $b_0 = 4.4 - 1 \\cdot 3 = 1.4$, so $\\hat{y} = 1.4 + x$: each extra hint goes with one more puzzle solved, on average. Check the residuals: $2 - 2.4$, $4 - 3.4$, $5 - 4.4$, $4 - 5.4$, $7 - 6.4$, that is $-0.4, 0.6, 0.6, -1.4, 0.6$. They sum to $0$, as they must.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Slope = r · s_y / s_x, and what the coefficients mean',
      blocks: [
        {
          type: 'p',
          text: 'Dividing $S_{xy}$ and $S_{xx}$ by $n - 1$ turns them into the sample covariance and $s_x^2$, which gives a formula that runs on summary statistics alone, and a deep interpretation.',
        },
        {
          type: 'derivation',
          title: 'Slope in terms of $r$',
          steps: [
            { tex: 'b_1 = \\frac{S_{xy}}{S_{xx}} = \\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}} \\cdot \\frac{\\sqrt{S_{yy}}}{\\sqrt{S_{xx}}}', why: 'Multiply and divide by $\\sqrt{S_{yy}}$.' },
            { tex: '= r \\cdot \\frac{\\sqrt{S_{yy}/(n-1)}}{\\sqrt{S_{xx}/(n-1)}} = r\\,\\frac{s_y}{s_x}', why: 'The first factor is $r$; in the second, put $n - 1$ under both square roots to get the standard deviations.' },
            { tex: '\\frac{\\hat{y} - \\bar{y}}{s_y} = r \\cdot \\frac{x - \\bar{x}}{s_x}', why: 'Substitute $b_0 = \\bar{y} - b_1\\bar{x}$ into $\\hat{y} = b_0 + b_1 x$ and divide by $s_y$.' },
          ],
          result: 'In standard units the regression line is simply $\\hat{z}_y = r\\,z_x$: a point $1$ SD above average in $x$ is predicted to be only $r$ SDs above average in $y$. For the frame times, $0.9816 \\cdot \\frac{2.781}{24.49} = 0.1114$, matching $S_{xy}/S_{xx}$.',
        },
        {
          type: 'heading',
          text: 'Interpreting the coefficients',
        },
        {
          type: 'list',
          items: [
            '**Slope**: for each additional enemy, the predicted frame time increases by $0.111$ ms *on average*. Equivalently, about $9$ enemies cost $1$ ms. Always state units and the word "predicted" or "on average": individual frames scatter around the line.',
            '**Intercept**: the predicted frame time with $0$ enemies is $6.29$ ms, the cost of rendering the empty level. Here that is meaningful; often it is not (a $0$ kg player, a level with $0$ polygons). The intercept is only interpretable when $x = 0$ is inside, or near, the range of the data.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Regression is not symmetric',
          text: 'Regressing $x$ on $y$ does **not** give the inverted line $x = (y - b_0)/b_1$. That line would minimize horizontal distances. The slope of $x$ on $y$ is $r\\,s_x/s_y$, and the two lines coincide only when $|r| = 1$. Decide which variable you want to predict, and put it on the $y$-axis.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'The frame-time model is $\\widehat{\\text{frame time}} = 6.29 + 0.111 \\cdot \\text{enemies}$ (ms). Which statement correctly interprets the slope?',
      options: [
        {
          text: 'Each additional enemy on screen is associated with an increase of about $0.111$ ms in predicted frame time',
          correct: true,
          why: 'The slope is the change in the **predicted** $y$ per one-unit increase in $x$, with units ms per enemy.',
        },
        {
          text: 'Every frame with one more enemy will take exactly $0.111$ ms longer',
          why: 'Individual frames scatter around the line (residuals up to $0.84$ ms here). The slope describes the average trend, not each frame.',
        },
        {
          text: '$11.1\\%$ of the frame time is caused by enemies',
          why: 'The slope is not a percentage or a share; it has units of ms per enemy. ($R^2$ is the "fraction" quantity, and even that is about variance, not cause.)',
        },
        {
          text: 'With $0.111$ enemies on screen the frame time is $6.29$ ms',
          why: 'This mixes up the roles of slope and intercept. $6.29$ ms is the prediction at $0$ enemies.',
        },
      ],
      explanation: 'A slope answers "if $x$ goes up by one unit, by how much does the predicted $y$ change?". Here: $0.111$ ms per enemy, or about $1$ ms per $9$ enemies. In this controlled stress test the programmer spawned the enemies, so a causal reading ("each enemy costs about $0.11$ ms") is justified. With observational data, keep to "is associated with".',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Across a season, weekly practice hours have mean $10$ h with SD $4$ h; ranked rating has mean $1500$ with SD $150$; and the correlation is $r = 0.6$. Using the least-squares line, predict the rating of a player who practices $14$ hours a week.',
      hint: 'Slope $= r\\,s_y/s_x$. The line passes through $(10, 1500)$.',
      label: '$\\hat{y} =$',
      answer: '1590',
      answerTex: '1590',
      tolerance: 0.5,
      explanation: '$b_1 = 0.6 \\cdot \\frac{150}{4} = 22.5$ rating points per weekly hour. The line passes through the means, so $\\hat{y} = 1500 + 22.5(14 - 10) = 1500 + 90 = 1590$. In standard units: $14$ h is $z_x = 1$, so the prediction is $z_y = r \\cdot 1 = 0.6$, that is $1500 + 0.6 \\cdot 150 = 1590$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student fits a least-squares line to $(1, 3)$, $(2, 5)$, $(3, 4)$, $(4, 8)$. Tap the first wrong line.',
      lines: [
        '$\\bar{x} = 2.5$, $\\bar{y} = 5$',
        '$S_{xx} = 2.25 + 0.25 + 0.25 + 2.25 = 5$, $S_{xy} = 3 + 0 - 0.5 + 4.5 = 7$',
        '$b_1 = S_{xy}/S_{xx} = 1.4$',
        '$b_0 = \\bar{y} + b_1\\bar{x} = 5 + 3.5 = 8.5$',
        '$\\hat{y} = 8.5 + 1.4x$',
      ],
      errorLines: [4],
      explanation: 'Line 4 has a sign error. From $\\bar{y} = b_0 + b_1\\bar{x}$ (the line passes through the point of means), $b_0 = \\bar{y} - b_1\\bar{x} = 5 - 3.5 = 1.5$, so $\\hat{y} = 1.5 + 1.4x$. A quick check catches it: at $x = \\bar{x} = 2.5$ the student\'s line gives $12$, far from $\\bar{y} = 5$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Residuals and R²: how much does the line explain?',
      blocks: [
        {
          type: 'p',
          text: 'Before fitting, the only prediction for every frame is the mean $\\bar{y}$, and its total squared error is $\\operatorname{SST} = \\sum (y_i - \\bar{y})^2$ (total sum of squares). After fitting, the leftover error is $\\operatorname{SSE} = \\sum e_i^2$. The difference is what the line accounts for.',
        },
        {
          type: 'derivation',
          title: 'The variance decomposition is Pythagoras',
          steps: [
            { tex: 'y_i - \\bar{y} = (\\hat{y}_i - \\bar{y}) + (y_i - \\hat{y}_i)', why: 'Total deviation = part explained by the line + residual. As vectors: $\\mathbf{y} - \\bar{y}\\mathbf{1} = (\\hat{\\mathbf{y}} - \\bar{y}\\mathbf{1}) + \\mathbf{e}$.' },
            { tex: '(\\hat{\\mathbf{y}} - \\bar{y}\\mathbf{1}) \\perp \\mathbf{e}', why: 'Both $\\hat{\\mathbf{y}}$ and $\\mathbf{1}$ lie in the column space of $X$, and $\\mathbf{e}$ is perpendicular to that whole space.' },
            { tex: '\\underbrace{\\sum (y_i - \\bar{y})^2}_{\\operatorname{SST}} = \\underbrace{\\sum (\\hat{y}_i - \\bar{y})^2}_{\\operatorname{SSR}} + \\underbrace{\\sum e_i^2}_{\\operatorname{SSE}}', why: 'The Pythagorean theorem for perpendicular vectors: the cross term $2\\sum (\\hat{y}_i - \\bar{y})e_i$ is a dot product, and it is $0$.' },
            { tex: 'R^2 = \\frac{\\operatorname{SSR}}{\\operatorname{SST}} = 1 - \\frac{\\operatorname{SSE}}{\\operatorname{SST}}', why: 'Definition: the fraction of the total variation in $y$ accounted for by the line.' },
            { tex: '\\operatorname{SSR} = \\sum b_1^2(x_i - \\bar{x})^2 = \\frac{S_{xy}^2}{S_{xx}} \\implies R^2 = \\frac{S_{xy}^2}{S_{xx}S_{yy}} = r^2', why: 'Since $\\hat{y}_i - \\bar{y} = b_1(x_i - \\bar{x})$ and $b_1 = S_{xy}/S_{xx}$. This identity holds for simple (one-predictor) regression.' },
          ],
          result: 'For the frame times, $\\operatorname{SST} = 54.12$ and $\\operatorname{SSE} = 1.971$, so $R^2 = 1 - \\frac{1.971}{54.12} = 0.964 = 0.9816^2$.',
        },
        {
          type: 'definition',
          term: 'Coefficient of determination',
          text: '[[stat-coefficient-of-determination|$R^2$]] is the fraction of the variance in $y$ explained by the linear relationship with $x$. "$R^2 = 0.964$" means: $96.4\\%$ of the frame-to-frame variation in frame time in this test is accounted for by the number of enemies; the other $3.6\\%$ is scatter around the line.',
        },
        {
          type: 'table',
          headers: ['enemies $x$', '10', '20', '30', '40', '50', '60', '70', '80'],
          rows: [
            ['frame time $y$', '7.8', '8.0', '10.1', '9.9', '12.4', '12.6', '14.5', '15.1'],
            ['fitted $\\hat{y}$', '7.40', '8.51', '9.63', '10.74', '11.86', '12.97', '14.09', '15.20'],
            ['residual $e$', '$+0.40$', '$-0.51$', '$+0.47$', '$-0.84$', '$+0.54$', '$-0.37$', '$+0.41$', '$-0.10$'],
          ],
          caption: 'Residuals for the frame-time line. The typical size of a residual, about $0.57$ ms here, is the residual standard error $s$ of the next lesson.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A high $R^2$ does not prove the model is right',
          text: 'A curved relationship can have $R^2 = 0.95$ with a straight line, and the line still makes systematically wrong predictions. Conversely, a low $R^2$ does not mean $x$ is useless: with noisy player behaviour, $R^2 = 0.1$ for a real, important effect is common. Always look at the scatterplot and at the residuals.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'For the five playtest sessions, $\\operatorname{SST} = S_{yy} = 13.2$ and the least-squares line leaves $\\operatorname{SSE} = 3.2$. What fraction of the variation in puzzles solved is explained by hints shown? Give $R^2$ to $3$ decimal places.',
      hint: '$R^2 = 1 - \\operatorname{SSE}/\\operatorname{SST}$.',
      label: '$R^2 =$',
      answer: '1 - 3.2/13.2',
      answerTex: 'R^2 = 1 - \\frac{3.2}{13.2} \\approx 0.758',
      tolerance: 0.0006,
      explanation: '$R^2 = 1 - \\frac{3.2}{13.2} = \\frac{10}{13.2} \\approx 0.758$. Check: it equals $r^2 = \\left(\\frac{10}{\\sqrt{132}}\\right)^2 = \\frac{100}{132} \\approx 0.758$, as it must for a one-predictor line. About $76\\%$ of the session-to-session variation in puzzles solved is accounted for by the linear relationship with hints.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If the correlation between two variables is $r = 0$, then there is no relationship between them.',
      answer: false,
      explanation: '$r$ measures only **linear** association. Points on a parabola $y = x^2$ symmetric about $x = 0$ have $r = 0$ while $y$ is completely determined by $x$ (the last panel of the scatterplot figure). $r = 0$ means "no straight-line trend", which is why you always plot the data before computing $r$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Extrapolation: the line only knows what it has seen',
      blocks: [
        {
          type: 'p',
          text: 'The producer asks: how many enemies can we show before the game drops below $60$ fps, a frame budget of $16.67$ ms? Solving $6.286 + 0.1114x = 16.67$ gives $x \\approx 93$, already beyond the $10$ to $80$ enemies tested. Predicting outside the range of the data is [[stat-extrapolation|extrapolation]], and it rests on an assumption the data cannot check: that the straight-line pattern continues.',
        },
        {
          type: 'graph',
          x: [0, 160],
          y: [0, 40],
          xStep: 20,
          yStep: 5,
          functions: [
            { expr: '44/7 + 39x/350', label: 'fitted line (data range)', color: 'green', domain: [10, 80] },
            { expr: '44/7 + 39x/350', label: 'extrapolated line', color: 'green', dashed: true, domain: [80, 160] },
          ],
          points: [
            ...enemies.map((x, i) => ({ x, y: frameMs[i], color: 'blue' as const })),
            { x: 100, y: 18.6, color: 'red' as const },
            { x: 120, y: 24.0, color: 'red' as const },
            { x: 140, y: 31.5, color: 'red' as const, label: 'later tests' },
          ],
          hlines: [{ y: 16.67, label: '60 fps budget', color: 'orange' }],
          vlines: [{ x: 80, label: 'end of data', color: 'gray' }],
          caption: 'Blue: the original stress test. Red: measurements taken later at $100$, $120$ and $140$ enemies (hypothetical, but typical). Past about $80$ enemies the animation jobs no longer fit the worker threads and the cost per enemy jumps. The line\'s prediction at $140$ enemies, $21.9$ ms, is off by nearly $10$ ms.',
        },
        {
          type: 'list',
          items: [
            '**Physical limits**: cache sizes, thread pools, memory bandwidth and network capacity all create kinks that are invisible inside the tested range.',
            '**Time**: player counts, prices and difficulty curves extrapolated into the future assume nothing changes.',
            '**Impossible values**: a line fitted to win rate against rating difference eventually predicts win rates above $100\\%$; that is one motivation for logistic regression two lessons from now.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What to do instead',
          text: 'Collect data where you need predictions (spawn $100$ enemies and measure!). If you must extrapolate a little, say so explicitly and widen your uncertainty: the next lesson shows that prediction intervals grow as $x$ moves away from $\\bar{x}$, even when the model is right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Using the frame-time line fitted on $10$ to $80$ enemies ($R^2 = 0.96$), a designer predicts $6.286 + 0.1114 \\cdot 300 \\approx 39.7$ ms for a $300$-enemy horde mode. What is the best assessment?',
      options: [
        {
          text: 'Unreliable: $300$ is far outside the tested range, where the linear pattern has not been checked; measure at that load',
          correct: true,
          why: 'Extrapolation assumes the trend continues, and performance curves are notorious for kinks. The high $R^2$ only describes the fit between $10$ and $80$ enemies.',
        },
        {
          text: 'Reliable, because $R^2 = 0.96$ shows the line fits extremely well',
          why: '$R^2$ measures the fit **within** the data. It says nothing about what happens at $300$ enemies.',
        },
        {
          text: 'Reliable, because the least-squares line is the best possible line',
          why: 'It is the best line for the observed data. "Best fit to the data" does not mean "correct far outside it".',
        },
        {
          text: 'Unreliable, because the intercept $6.286$ has no meaning',
          why: 'The intercept is actually meaningful here (an empty level). The problem is the distance from the data, not the intercept.',
        },
      ],
      explanation: 'Every regression prediction comes with a warranty that covers only the region where data were collected. At $300$ enemies new bottlenecks (thread pool saturation, cache misses, draw-call limits) can appear, and the later measurements in the graph show exactly that kind of upturn. The honest answer: "we don\'t know yet; let\'s test it".',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Regression to the mean',
      blocks: [
        {
          type: 'p',
          text: 'The standardized line $\\hat{z}_y = r\\,z_x$ has a famous consequence. Unless $|r| = 1$, the predicted $y$ is **fewer** standard deviations from its mean than $x$ is from its own. Players who top the leaderboard in week 1 are predicted to be above average in week 2, but less extremely so. This is [[stat-regression-to-the-mean|regression to the mean]], and it is where regression got its name.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          xStep: 1,
          yStep: 1,
          functions: [
            { expr: 'x', label: 'SD line $z_y = z_x$', color: 'gray', dashed: true },
            { expr: 'r*x', label: 'regression line $\\hat{z}_y = r\\,z_x$', color: 'blue' },
          ],
          parametric: [
            { x: '2(sqrt(1 + r)cos(t) + sqrt(1 - r)sin(t))/sqrt(2)', y: '2(sqrt(1 + r)cos(t) - sqrt(1 - r)sin(t))/sqrt(2)', t: [0, '2pi'], color: 'purple', label: 'where most data fall' },
          ],
          points: [{ x: 2, y: '2r', color: 'red' }],
          sliders: [{ name: 'r', min: 0, max: 0.95, step: 0.05, value: 0.5, label: 'correlation $r$' }],
          readouts: [{ label: 'predicted $z_y$ for a player at $z_x = 2$:', expr: '2r', digits: 2 }],
          caption: 'Both axes in standard units (week-1 and week-2 scores). The purple ellipse outlines a typical cloud with correlation $r$. Its long axis follows the dashed SD line, but the regression line is flatter: it passes through the middle of each vertical slice of the cloud. Lower $r$ means more luck in the scores and more regression toward $0$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it happens: skill plus luck',
          text: 'Think of each score as skill + luck. The players at the very top in week 1 are mostly skilled **and** were lucky that week. In week 2 their skill stays but their luck is a fresh draw, on average zero. So their group average drops toward the mean, with no change in skill at all. The same logic explains the "sophomore slump", the "cover jinx", and why the worst-performing servers improve after any intervention, including a useless one.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Francis Galton noticed in the 1880s that very tall parents tend to have children who are tall but closer to average height; he called it "regression towards mediocrity". The word stuck to the whole method of fitting lines.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The **regression fallacy** is a favourite question: an instructor praises the students who did worst on the midterm, they improve on the final, and the praise gets the credit. The improvement was expected anyway. To measure a real effect, compare against a randomly chosen control group that also regresses.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'Season scores have mean $1200$ and SD $200$ in both season 1 and season 2, and the correlation between a player\'s two season scores is $r = 0.45$. A player scored $1640$ in season 1. What is the least-squares prediction of their season-2 score?',
      hint: 'Convert to a $z$-score, multiply by $r$, convert back.',
      label: '$\\hat{y} =$',
      answer: '1200 + 0.45*2.2*200',
      answerTex: '1398',
      tolerance: 0.5,
      explanation: 'Season-1 $z$-score: $\\frac{1640 - 1200}{200} = 2.2$. Predicted season-2 $z$-score: $0.45 \\cdot 2.2 = 0.99$. Back to points: $1200 + 0.99 \\cdot 200 = 1398$. The star is still predicted to be well above average, but the prediction has regressed more than halfway to the mean, because with $r = 0.45$ a large part of an extreme season is luck.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'fill',
      prompt: 'Complete the facts about the least-squares line $\\hat{y} = b_0 + b_1 x$.',
      template: 'The slope is $b_1 =$ ___, the line always passes through the point ___, and the residuals always sum to ___.',
      blanks: [{ answers: ['$r\\,s_y/s_x$'] }, { answers: ['$(\\bar{x}, \\bar{y})$'] }, { answers: ['$0$'] }],
      wordBank: ['$r\\,s_y/s_x$', '$r\\,s_x/s_y$', '$(\\bar{x}, \\bar{y})$', '$(0, b_0)$ only', '$0$', '$1$', '$R^2$'],
      explanation: 'The slope is $b_1 = S_{xy}/S_{xx} = r\\,s_y/s_x$ (the version $r\\,s_x/s_y$ is the slope for predicting $x$ from $y$). Setting the $b_0$-derivative of SSE to zero gives $b_0 = \\bar{y} - b_1\\bar{x}$, so the line passes through $(\\bar{x}, \\bar{y})$; the same equation says $\\sum e_i = 0$. (It also passes through $(0, b_0)$, of course, but the point of means is the characteristic property.)',
    },
  ],
  takeaways: [
    'Plot first. The sample correlation $r = S_{xy}/\\sqrt{S_{xx}S_{yy}}$ lies in $[-1, 1]$, measures only linear association, is sensitive to outliers, and never proves causation.',
    'The least-squares line minimizes $\\sum (y_i - b_0 - b_1 x_i)^2$: $b_1 = S_{xy}/S_{xx} = r\\,s_y/s_x$ and $b_0 = \\bar{y} - b_1\\bar{x}$. These are the normal equations $X^TX\\boldsymbol{\\beta} = X^T\\mathbf{y}$, and $\\hat{\\mathbf{y}}$ is the projection of $\\mathbf{y}$ onto the column space of $X$.',
    'Interpret the slope as the change in predicted $y$ per unit of $x$, with units; interpret the intercept only when $x = 0$ is in or near the data.',
    'SST = SSR + SSE (Pythagoras), and $R^2 = 1 - \\operatorname{SSE}/\\operatorname{SST} = r^2$ is the fraction of the variance in $y$ explained by the line.',
    'Extrapolation trusts a pattern where it was never observed. In standard units $\\hat{z}_y = r\\,z_x$, so extreme values are followed by less extreme predictions: regression to the mean.',
  ],
  reading: [
    {
      title: 'OpenStax Introductory Statistics, chapter 12: Linear Regression and Correlation',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Scatterplots, the correlation coefficient, the least-squares line and outliers, with many worked examples.',
    },
    {
      title: 'Seeing Theory (Brown University)',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The Regression Analysis chapter lets you drag points and watch the least-squares line and correlation respond.',
    },
    {
      title: 'Wikipedia: Regression toward the mean',
      url: 'https://en.wikipedia.org/wiki/Regression_toward_the_mean',
      source: 'wikipedia',
      note: 'Galton\'s original height data, the regression fallacy, and examples from sport and medicine.',
    },
    {
      title: 'Khan Academy: Statistics and probability',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      source: 'khan',
      note: 'The "Exploring bivariate numerical data" unit covers correlation, least-squares lines and residuals with practice exercises.',
    },
  ],
};
