import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-right-triangle-ratios',
  title: 'SOH CAH TOA: The Trig Ratios',
  summary: 'Why the ratio of two sides of a right triangle depends only on its angle — and how sine, cosine and tangent name those ratios.',
  minutes: 18,
  objectives: [
    'Label the hypotenuse, opposite and adjacent sides relative to a given acute angle',
    'Explain, using similar triangles, why trig ratios depend only on the angle',
    'Compute $\\sin\\theta$, $\\cos\\theta$ and $\\tan\\theta$ from side lengths, and find the remaining ratios from one known ratio',
    'Use the cofunction relationship between complementary angles',
    'Find a missing side of a right triangle from one side and one acute angle',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The anatomy of a right triangle',
      blocks: [
        {
          type: 'p',
          text: 'A right triangle has one $90^\\circ$ angle and two acute angles. The side across from the right angle is the [[hypotenuse]]: it is always the longest side. The other two sides are the **legs**, and the [[pythagorean-theorem]] ties all three together: $a^2 + b^2 = c^2$, where $c$ is the hypotenuse.',
        },
        {
          type: 'p',
          text: 'Trigonometry adds one new idea: pick one of the acute angles and call it $\\theta$. Now the two legs get names *relative to $\\theta$*. The [[opposite-side]] is the leg across from $\\theta$ — it does not touch $\\theta$. The [[adjacent-side]] is the leg that forms $\\theta$ together with the hypotenuse.',
        },
        {
          type: 'graph',
          x: [-0.6, 5],
          y: [-0.6, 3.6],
          equal: true,
          segments: [
            { from: [0, 0], to: [4, 0], color: 'blue', label: 'adjacent = 4' },
            { from: [4, 0], to: [4, 3], color: 'red', label: 'opposite = 3' },
            { from: [0, 0], to: [4, 3], color: 'purple', label: 'hypotenuse = 5' },
            { from: [3.7, 0], to: [3.7, 0.3], color: 'gray' },
            { from: [3.7, 0.3], to: [4, 0.3], color: 'gray' },
          ],
          parametric: [{ x: '0.7cos(t)', y: '0.7sin(t)', t: [0, 'arctan(3/4)'], color: 'orange' }],
          points: [
            { x: 0.95, y: 0.3, label: 'θ', color: 'orange' },
            { x: 0, y: 0, label: 'A' },
            { x: 4, y: 0, label: 'C' },
            { x: 4, y: 3, label: 'B' },
          ],
          caption: 'Relative to the angle $\\theta$ at $A$: the side $BC$ is opposite, the side $AC$ is adjacent, and $AB$ (across from the right angle at $C$) is the hypotenuse. This is the famous $3$-$4$-$5$ triangle: $3^2 + 4^2 = 25 = 5^2$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Labels depend on the angle',
          text: 'Switch your attention to the other acute angle, at $B$, and the legs swap names: $AC$ becomes opposite and $BC$ becomes adjacent. Only the hypotenuse keeps its name. Always decide which angle you are working with **before** labelling sides.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Standard lettering',
          text: 'Textbooks name the vertices $A$, $B$, $C$ with the right angle at $C$, and use the lowercase letter for the side **across from** each vertex: $a = BC$, $b = AC$, $c = AB$ (the hypotenuse). So side $a$ is opposite angle $A$ — a pattern worth memorising.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'In right triangle $ABC$ the right angle is at $C$. Which side is **adjacent** to angle $B$?',
      hint: 'Adjacent sides touch the angle. Two sides touch $B$: one is the hypotenuse, the other is the adjacent leg.',
      options: [
        { text: '$AB$', why: '$AB$ touches $B$, but it is across from the right angle, so it is the hypotenuse — never called "adjacent".' },
        { text: '$AC$', why: '$AC$ does not touch $B$ at all: it is the side *opposite* $B$.' },
        { text: '$BC$', correct: true, why: '$BC$ runs from $B$ to the right angle at $C$: it is the leg that, together with the hypotenuse, forms angle $B$.' },
      ],
      explanation: 'The two sides meeting at $B$ are $AB$ and $BC$. Since the right angle is at $C$, $AB$ is the hypotenuse, leaving $BC$ as the adjacent leg. The remaining side $AC$ is opposite $B$. (Relative to angle $A$, the roles of the legs would swap.)',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Why ratios depend only on the angle',
      blocks: [
        {
          type: 'p',
          text: 'Here is the key observation behind all of trigonometry. Take any two right triangles that share the same acute angle $\\theta$. Their third angles must match as well, since all three add to $180^\\circ$. Triangles with the same angles are [[similar-triangles|similar]]: one is a scaled copy of the other.',
        },
        {
          type: 'p',
          text: 'Scaling multiplies every side by the same factor $k$. So any **ratio** of two sides is unchanged: $\\frac{3k}{5k} = \\frac{3}{5}$. The lengths depend on the size of the triangle, but the ratios depend only on $\\theta$. Try it:',
        },
        {
          type: 'graph',
          x: [-0.5, 5.5],
          y: [-0.5, 4.5],
          equal: true,
          segments: [
            { from: [0, 0], to: ['k*cos(a*pi/180)', 0], color: 'blue', label: 'adj' },
            { from: ['k*cos(a*pi/180)', 0], to: ['k*cos(a*pi/180)', 'k*sin(a*pi/180)'], color: 'red', label: 'opp' },
            { from: [0, 0], to: ['k*cos(a*pi/180)', 'k*sin(a*pi/180)'], color: 'purple', label: 'hyp' },
          ],
          parametric: [{ x: '0.5cos(t)', y: '0.5sin(t)', t: [0, 'a*pi/180'], color: 'orange' }],
          sliders: [
            { name: 'k', min: 1, max: 5.4, step: 0.1, value: 3, label: 'size (hypotenuse length)' },
            { name: 'a', min: 5, max: 85, step: 1, value: 37, label: 'angle $\\theta$ (degrees)' },
          ],
          readouts: [
            { label: 'opp $=$', expr: 'k*sin(a*pi/180)', digits: 3 },
            { label: '$\\frac{\\text{opp}}{\\text{hyp}} =$', expr: '(k*sin(a*pi/180))/k', digits: 4 },
            { label: '$\\frac{\\text{adj}}{\\text{hyp}} =$', expr: '(k*cos(a*pi/180))/k', digits: 4 },
            { label: '$\\frac{\\text{opp}}{\\text{adj}} =$', expr: '(k*sin(a*pi/180))/(k*cos(a*pi/180))', digits: 4 },
          ],
          caption: 'Drag the **size** slider: the sides grow but every ratio stays frozen. Only the **angle** slider changes the ratios.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is such a big deal',
          text: 'Because a ratio is determined by the angle, we can give it a name and tabulate it once: "the opp/hyp ratio for $37^\\circ$ is about $0.6018$". After that, *any* right triangle with a $37^\\circ$ angle can be solved — a tiny triangle on paper or one stretching from your eye to the top of a mountain. Surveyors, astronomers and navigators relied on printed tables of these ratios for centuries; your calculator and `std::sin` compute the same numbers.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Hipparchus (2nd century BC) built the first known trig table, of chord lengths in a circle, to predict the positions of the sun and moon. The word "sine" comes, through a chain of mistranslations from Sanskrit to Arabic to Latin, from a word meaning "bowstring".',
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: 'A right triangle with a $40^\\circ$ angle and hypotenuse $10$ has a larger value of $\\frac{\\text{opposite}}{\\text{hypotenuse}}$ (for the $40^\\circ$ angle) than a right triangle with a $40^\\circ$ angle and hypotenuse $2$.',
      answer: false,
      explanation: 'The two triangles have the same angles ($40^\\circ$, $50^\\circ$, $90^\\circ$), so they are similar: the big one is the small one scaled by $5$. The opposite side and the hypotenuse are **both** five times longer, so their ratio is identical. Bigger triangle, bigger sides, same ratio.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Sine, cosine and tangent',
      blocks: [
        {
          type: 'p',
          text: 'There are three ways to pair up the three sides, so three basic ratios, each named after the angle $\\theta$ it belongs to.',
        },
        {
          type: 'definition',
          term: 'The trig ratios of an acute angle',
          text: 'In a right triangle with acute angle $\\theta$:\n\n$$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}, \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}, \\qquad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}.$$\n\nThese are the [[sine]], [[cosine]] and [[tangent-function|tangent]] of $\\theta$.',
        },
        {
          type: 'p',
          text: 'The mnemonic [[soh-cah-toa]] packs all three into one word: **S**ine = **O**pp / **H**yp, **C**osine = **A**dj / **H**yp, **T**angent = **O**pp / **A**dj.',
        },
        {
          type: 'derivation',
          title: 'All three ratios for both acute angles of the $3$-$4$-$5$ triangle',
          steps: [
            { tex: '\\text{At } A: \\ \\text{opp} = 3, \\ \\text{adj} = 4, \\ \\text{hyp} = 5', why: 'Label relative to angle $A$: $BC = 3$ is across from $A$, $AC = 4$ touches $A$.' },
            { tex: '\\sin A = \\frac{3}{5}, \\quad \\cos A = \\frac{4}{5}, \\quad \\tan A = \\frac{3}{4}', why: 'Apply SOH, CAH, TOA in turn.' },
            { tex: '\\text{At } B: \\ \\text{opp} = 4, \\ \\text{adj} = 3, \\ \\text{hyp} = 5', why: 'Relabel for angle $B$: the legs swap roles, the hypotenuse stays.' },
            { tex: '\\sin B = \\frac{4}{5}, \\quad \\cos B = \\frac{3}{5}, \\quad \\tan B = \\frac{4}{3}', why: 'Same three ratios with the new labels.' },
          ],
          result: 'Notice $\\sin A = \\cos B$ and $\\cos A = \\sin B$ — more on that soon.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why tangent = sine ÷ cosine',
          text: 'Divide the first two ratios: $\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\text{opp}/\\text{hyp}}{\\text{adj}/\\text{hyp}} = \\frac{\\text{opp}}{\\text{adj}} = \\tan\\theta$. The hypotenuse cancels. In the example, $\\frac{3/5}{4/5} = \\frac{3}{4}$. Tangent is also the **slope** of the hypotenuse when the adjacent side lies along the $x$-axis: rise over run.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\sin\\theta$ is not "sin times θ"',
          text: '$\\sin$ is the name of a function, like $f$. $\\sin\\theta$ means "the sine **of** $\\theta$", a single number. You cannot cancel or divide out the "sin": $\\frac{\\sin 2\\theta}{\\sin\\theta} \\ne 2$ and $\\frac{\\sin\\theta}{\\theta} \\ne \\sin$.',
        },
        {
          type: 'deepdive',
          title: 'The three reciprocal ratios',
          blocks: [
            {
              type: 'p',
              text: 'Flipping each ratio gives three more, which you will study in the unit-circle unit: the [[cosecant]], [[secant-function|secant]] and [[cotangent]].',
            },
            { type: 'math', tex: '\\csc\\theta = \\frac{\\text{hyp}}{\\text{opp}} = \\frac{1}{\\sin\\theta}, \\qquad \\sec\\theta = \\frac{\\text{hyp}}{\\text{adj}} = \\frac{1}{\\cos\\theta}, \\qquad \\cot\\theta = \\frac{\\text{adj}}{\\text{opp}} = \\frac{1}{\\tan\\theta}' },
            { type: 'p', text: 'For angle $A$ of the $3$-$4$-$5$ triangle: $\\csc A = \\frac{5}{3}$, $\\sec A = \\frac{5}{4}$, $\\cot A = \\frac{4}{3}$.' },
          ],
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A right triangle has legs $5$ (opposite $\\theta$) and $12$ (adjacent to $\\theta$). Find $\\sin\\theta$ as a fraction.',
      hint: 'You need the hypotenuse first: $c = \\sqrt{5^2 + 12^2}$.',
      label: '$\\sin\\theta =$',
      answer: '5/13',
      answerTex: '\\frac{5}{13}',
      explanation: 'The hypotenuse is $\\sqrt{25 + 144} = \\sqrt{169} = 13$. Then $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{5}{13} \\approx 0.385$. (For the record: $\\cos\\theta = \\frac{12}{13}$ and $\\tan\\theta = \\frac{5}{12}$.)',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'From one ratio to all of them',
      blocks: [
        {
          type: 'p',
          text: 'Knowing one ratio is enough to find the others. A ratio is a fraction of two sides, so **draw a triangle with those sides**, find the third side with the Pythagorean theorem, and read off whatever you need. Since only ratios matter, any triangle with the right shape will do — choose the one with the simplest numbers.',
        },
        {
          type: 'derivation',
          title: 'If $\\theta$ is acute and $\\sin\\theta = \\frac{2}{3}$, find $\\cos\\theta$ and $\\tan\\theta$.',
          steps: [
            { tex: '\\text{opp} = 2, \\quad \\text{hyp} = 3', why: '$\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{2}{3}$, so draw a right triangle with these two sides. (Opp $= 4$, hyp $= 6$ would also work, but bigger numbers buy nothing.)' },
            { tex: '\\text{adj} = \\sqrt{3^2 - 2^2} = \\sqrt{5}', why: 'Pythagorean theorem solved for a leg: $\\text{adj}^2 = \\text{hyp}^2 - \\text{opp}^2$.' },
            { tex: '\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{\\sqrt{5}}{3}', why: 'CAH.' },
            { tex: '\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}', why: 'TOA, then rationalise the denominator by multiplying top and bottom by $\\sqrt{5}$.' },
          ],
          result: '$\\cos\\theta = \\frac{\\sqrt{5}}{3} \\approx 0.745$ and $\\tan\\theta = \\frac{2\\sqrt{5}}{5} \\approx 0.894$.',
        },
        {
          type: 'p',
          text: 'Because the hypotenuse is the longest side, opposite and adjacent are both shorter than it. That pins down the possible values:',
        },
        {
          type: 'theorem',
          name: 'Ranges for an acute angle',
          tex: '0 < \\sin\\theta < 1, \\qquad 0 < \\cos\\theta < 1, \\qquad \\tan\\theta > 0',
          text: 'Tangent has no upper limit: when $\\theta$ is close to $90^\\circ$, the adjacent side is tiny and opp/adj is huge.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: '"Given $\\cos\\theta = \\frac{7}{25}$, find the other five trig values" is a staple exam question. Draw the triangle, find the missing side, label it clearly, and rationalise denominators unless told otherwise.',
        },
      ],
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'The angle $\\theta$ is acute and $\\cos\\theta = \\frac{7}{25}$. Find $\\tan\\theta$.',
      hint: 'Draw a triangle with adjacent $7$ and hypotenuse $25$. Find the opposite side.',
      label: '$\\tan\\theta =$',
      answer: '24/7',
      answerTex: '\\frac{24}{7}',
      explanation: 'Adjacent $= 7$, hypotenuse $= 25$, so opposite $= \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. Then $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{24}{7} \\approx 3.43$. A tangent bigger than $1$ is fine: it means the angle is more than $45^\\circ$ (here about $73.7^\\circ$).',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Complementary angles and cofunctions',
      blocks: [
        {
          type: 'p',
          text: 'The two acute angles of a right triangle add up to $90^\\circ$: the three angles total $180^\\circ$ and the right angle takes $90^\\circ$. Angles that sum to $90^\\circ$ are called [[complementary-angles|complementary]]. If one acute angle is $\\theta$, the other is $90^\\circ - \\theta$.',
        },
        {
          type: 'p',
          text: 'In the $3$-$4$-$5$ example, $\\sin A = \\cos B = \\frac{3}{5}$. That was no accident: the side opposite $A$ is the side adjacent to $B$. So the sine of one acute angle is always the cosine of the other.',
        },
        {
          type: 'theorem',
          name: 'Cofunction rule',
          tex: '\\sin\\theta = \\cos(90^\\circ - \\theta), \\qquad \\cos\\theta = \\sin(90^\\circ - \\theta), \\qquad \\tan\\theta = \\frac{1}{\\tan(90^\\circ - \\theta)}',
          text: 'The "co" in **co**sine stands for "complement": cosine is the sine of the complementary angle. See [[cofunction-rule]].',
        },
        {
          type: 'graph',
          x: [-0.5, 4.8],
          y: [-0.5, 4.2],
          equal: true,
          segments: [
            { from: [0, 0], to: ['4cos(a*pi/180)', 0], color: 'blue', label: 'adj' },
            { from: ['4cos(a*pi/180)', 0], to: ['4cos(a*pi/180)', '4sin(a*pi/180)'], color: 'red', label: 'opp' },
            { from: [0, 0], to: ['4cos(a*pi/180)', '4sin(a*pi/180)'], color: 'purple', label: 'hyp = 4' },
          ],
          parametric: [{ x: '0.5cos(t)', y: '0.5sin(t)', t: [0, 'a*pi/180'], color: 'orange' }],
          sliders: [{ name: 'a', min: 1, max: 89, step: 1, value: 30, label: 'angle $\\theta$ (degrees)' }],
          readouts: [
            { label: '$\\sin\\theta =$', expr: 'sin(a*pi/180)', digits: 4 },
            { label: '$\\cos\\theta =$', expr: 'cos(a*pi/180)', digits: 4 },
            { label: '$\\tan\\theta =$', expr: 'tan(a*pi/180)', digits: 4 },
            { label: 'other angle $90^\\circ - \\theta =$', expr: '90 - a', digits: 0 },
          ],
          caption: 'Compare $\\theta = 20^\\circ$ with $\\theta = 70^\\circ$: sine and cosine trade values. Push $\\theta$ toward $90^\\circ$ and watch $\\tan\\theta$ explode while $\\sin\\theta$ creeps toward $1$. At $45^\\circ$ the legs are equal and $\\tan\\theta = 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why sine grows while cosine shrinks',
          text: 'Keep the hypotenuse fixed and open the angle. The far end of the hypotenuse swings upward, so the opposite leg grows and the adjacent leg shrinks. Sine (opp/hyp) increases toward $1$; cosine (adj/hyp) decreases toward $0$. Tangent (opp/adj) has a growing top and a shrinking bottom, so it rises without bound.',
        },
      ],
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Use the cofunction rule to fill in the angles.',
      template: '$\\sin 40^\\circ = \\cos$ ___ , and $\\cos 15^\\circ = \\sin$ ___ .',
      blanks: [{ answers: ['$50^\\circ$'] }, { answers: ['$75^\\circ$'] }],
      wordBank: ['$50^\\circ$', '$75^\\circ$', '$40^\\circ$', '$140^\\circ$', '$15^\\circ$', '$165^\\circ$'],
      explanation: 'Cofunctions pair complementary angles, which add to $90^\\circ$ (not $180^\\circ$): $90^\\circ - 40^\\circ = 50^\\circ$ and $90^\\circ - 15^\\circ = 75^\\circ$. In a right triangle with acute angles $40^\\circ$ and $50^\\circ$, the leg opposite the $40^\\circ$ angle is adjacent to the $50^\\circ$ angle, so the same fraction is both $\\sin 40^\\circ$ and $\\cos 50^\\circ$.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Finding a missing side',
      blocks: [
        {
          type: 'p',
          text: 'Ratios become powerful when you know an angle. Calculators (in **degree mode**) and code give you $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$ for any angle. Then each definition is an equation linking two sides, and if one side is known you can solve for the other.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Label', text: 'Mark the known angle $\\theta$, then label the known side and the unknown side as opp, adj or hyp **relative to $\\theta$**.' },
            { title: 'Choose', text: 'Pick the one ratio that uses exactly those two sides: SOH, CAH or TOA.' },
            { title: 'Solve', text: 'Write the equation, then solve for the unknown. If it is in the numerator, multiply; if it is in the denominator, it ends up dividing.' },
          ],
        },
        {
          type: 'derivation',
          title: 'A $10$ m ramp makes a $35^\\circ$ angle with the ground. How high does it rise?',
          steps: [
            { tex: '\\text{hyp} = 10, \\quad \\text{opp} = h', why: 'The ramp is the hypotenuse; the height is the side across from the $35^\\circ$ angle at the ground.' },
            { tex: '\\sin 35^\\circ = \\frac{h}{10}', why: 'Opp and hyp → SOH.' },
            { tex: 'h = 10 \\sin 35^\\circ', why: 'Multiply both sides by $10$.' },
            { tex: '\\approx 10(0.5736) \\approx 5.74 \\text{ m}', why: 'Calculator in degree mode: $\\sin 35^\\circ \\approx 0.573576$.' },
          ],
          result: 'The ramp rises about $5.74$ m.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Splitting a velocity into components',
          text: 'In a 2D game, a projectile fired at speed $v$ and angle $\\theta$ above the horizontal is a right triangle in disguise: the velocity is the hypotenuse, and its horizontal and vertical parts are the legs. CAH and SOH give $v_x = v\\cos\\theta$ and $v_y = v\\sin\\theta$. Remember to convert degrees to radians for `std::cos`.',
        },
        {
          type: 'code',
          title: 'components.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

int main() {
    const double speed = 10.0;      // hypotenuse
    const double angleDeg = 30.0;   // above the horizontal
    const double theta = angleDeg * std::numbers::pi / 180.0;

    double vx = speed * std::cos(theta);   // adjacent = hyp * cos
    double vy = speed * std::sin(theta);   // opposite = hyp * sin
    std::printf("vx = %.4f, vy = %.4f\\n", vx, vy);
    std::printf("check: sqrt(vx^2 + vy^2) = %.4f\\n", std::sqrt(vx * vx + vy * vy));
}`,
          output: `vx = 8.6603, vy = 5.0000
check: sqrt(vx^2 + vy^2) = 10.0000`,
          annotations: [
            { lines: 8, text: 'Degrees to radians, because `std::cos` and `std::sin` expect radians.' },
            { lines: '10-11', text: 'CAH rearranged: adj $=$ hyp $\\cdot \\cos\\theta$. SOH rearranged: opp $=$ hyp $\\cdot \\sin\\theta$.' },
            { lines: 13, text: 'The Pythagorean theorem recovers the original speed: a good self-check.' },
          ],
        },
      ],
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'In a right triangle you know the hypotenuse and an acute angle $\\theta$, and you want the side **adjacent** to $\\theta$. Which ratio should you use?',
      options: [
        { text: '$\\sin\\theta$', why: 'Sine pairs **opposite** with hypotenuse. It would find the other leg.' },
        { text: '$\\cos\\theta$', correct: true, why: 'CAH: cosine is adjacent over hypotenuse — exactly the known side and the wanted side.' },
        { text: '$\\tan\\theta$', why: 'Tangent pairs opposite and adjacent; it never involves the hypotenuse, which is the side you know.' },
        { text: 'The Pythagorean theorem', why: 'That needs **two** known sides. Here you know only one side plus an angle.' },
      ],
      explanation: 'Match the ratio to the two sides involved: adjacent and hypotenuse means CAH, so $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$ and $\\text{adj} = \\text{hyp} \\cdot \\cos\\theta$.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A right triangle has hypotenuse $20$ and an acute angle of $50^\\circ$. Find the side adjacent to the $50^\\circ$ angle, rounded to two decimal places.',
      hint: 'CAH: $\\cos 50^\\circ = \\frac{x}{20}$. Make sure your calculator is in degree mode.',
      label: '$x \\approx$',
      answer: '20cos(50pi/180)',
      answerTex: '20\\cos 50^\\circ \\approx 12.86',
      tolerance: 0.01,
      explanation: '$\\cos 50^\\circ = \\frac{x}{20}$, so $x = 20\\cos 50^\\circ \\approx 20(0.642788) \\approx 12.86$. Sanity check: the adjacent leg must be shorter than the hypotenuse $20$, and at $50^\\circ$ (a bit more than $45^\\circ$) it should be a bit less than the opposite leg, which is $20\\sin 50^\\circ \\approx 15.32$.',
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A right triangle has an acute angle of $28^\\circ$, and the leg adjacent to it is $15$. A student finds the opposite leg $x$. Tap the first wrong line.',
      lines: [
        'Opposite and adjacent, so use TOA: $\\tan 28^\\circ = \\frac{x}{15}$',
        '$x = \\frac{15}{\\tan 28^\\circ}$',
        '$x \\approx \\frac{15}{0.5317}$',
        '$x \\approx 28.21$',
      ],
      errorLines: [2],
      explanation: 'Line 1 is correct. In line 2 the student divided instead of multiplied: from $\\tan 28^\\circ = \\frac{x}{15}$, multiply both sides by $15$ to get $x = 15\\tan 28^\\circ \\approx 15(0.5317) \\approx 7.98$. A quick check would have caught it: $28^\\circ$ is less than $45^\\circ$, so the opposite leg must be **shorter** than the adjacent leg $15$ — and $28.21$ is not.',
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      kind: 'order',
      prompt: 'Order the steps for finding an unknown side of a right triangle from one side and one acute angle.',
      lines: [
        'Mark the known acute angle $\\theta$',
        'Label the known and unknown sides as opp, adj or hyp relative to $\\theta$',
        'Choose the ratio (SOH, CAH or TOA) that uses those two sides',
        'Write the equation and solve it for the unknown side',
        'Evaluate with the calculator in degree mode and check the answer is reasonable',
      ],
      distractors: ['Use the Pythagorean theorem with the one known side'],
      explanation: 'Labels only make sense once the angle is chosen, and the ratio depends on the labels — so the order is forced. The Pythagorean theorem is the wrong tool here: it needs two known sides. The final check (is the hypotenuse longest? is the leg opposite the bigger angle longer?) catches most slips.',
    },
  ],
  takeaways: [
    'Opposite and adjacent are defined relative to a chosen acute angle; the hypotenuse is always across from the right angle.',
    'Right triangles with the same acute angle are similar, so ratios of their sides depend only on the angle.',
    'SOH CAH TOA: $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$, $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{\\sin\\theta}{\\cos\\theta}$.',
    'From one ratio you can find the others: draw the triangle, use the Pythagorean theorem for the third side.',
    'The acute angles are complementary, so $\\sin\\theta = \\cos(90^\\circ - \\theta)$.',
    'To find a side from one side and an angle, pick the ratio linking the known and unknown sides and solve.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.2 Right Triangle Trigonometry',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-2-right-triangle-trigonometry',
      source: 'openstax',
      note: 'Free textbook section on the six ratios, cofunctions and finding missing sides, with many practice problems.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'The right triangle trigonometry unit has short videos and drill sets for SOH CAH TOA.',
    },
    {
      title: 'Wikipedia — Trigonometric functions',
      url: 'https://en.wikipedia.org/wiki/Trigonometric_functions',
      source: 'wikipedia',
      note: 'See the "Right-angled triangle definitions" section and the history of the names.',
    },
  ],
};
