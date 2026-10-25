import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-line-equations',
  title: 'Equations of Lines',
  summary: 'Slope-intercept, point-slope and standard form: three ways to write a line, when to use each, and how parallel and perpendicular lines are related.',
  minutes: 19,
  objectives: [
    'Read the slope and $y$-intercept from $y = mx + b$, and graph a line from its equation',
    'Write the equation of a line from a point and a slope, or from two points',
    'Convert between slope-intercept and standard form, and find intercepts',
    'Write equations of horizontal and vertical lines',
    'Use slopes to write lines parallel or perpendicular to a given line',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Slope-intercept form: $y = mx + b$',
      blocks: [
        {
          type: 'p',
          text: 'An **equation of a line** is a test that points pass or fail: a point lies on the line exactly when its coordinates make the equation true. To build that test we only need two facts about the line: its slope and one point on it.',
        },
        {
          type: 'p',
          text: 'The most convenient point is where the line crosses the $y$-axis, the [[y-intercept]] $(0, b)$. Any other point $(x, y)$ is on the line exactly when the slope from $(0, b)$ to $(x, y)$ equals $m$:',
        },
        {
          type: 'derivation',
          title: 'Deriving slope-intercept form',
          steps: [
            { tex: '\\frac{y - b}{x - 0} = m', why: 'Slope from the intercept $(0, b)$ to a general point $(x, y)$ with $x \\ne 0$ must equal the line\'s slope.' },
            { tex: 'y - b = m x', why: 'Multiply both sides by $x$ (and $x - 0$ is just $x$).' },
            { tex: 'y = mx + b', why: 'Add $b$ to both sides. The point $(0, b)$ itself also satisfies this, so we lose nothing by having assumed $x \\ne 0$.' },
          ],
          result: 'Every non-vertical line can be written as $y = mx + b$, where $m$ is the slope and $b$ is the $y$-intercept.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          functions: [{ expr: 'm*x + b', label: '$y = mx + b$', color: 'blue' }],
          points: [{ x: 0, y: 'b', label: '(0, b)', color: 'red' }],
          sliders: [
            { name: 'm', min: -4, max: 4, step: 0.25, value: 0.5, label: 'slope $m$' },
            { name: 'b', min: -5, max: 5, step: 0.5, value: 2, label: '$y$-intercept $b$' },
          ],
          readouts: [{ label: '$x$-intercept $= -\\frac{b}{m} \\approx$', expr: '-b/m', digits: 2 }],
          caption: 'Changing $b$ slides the line up and down without turning it. Changing $m$ rotates it around the point $(0, b)$.',
        },
        {
          type: 'p',
          text: 'Graphing from this form is quick: plot $(0, b)$, then use the slope as walking directions. For $y = -\\frac{2}{3}x + 4$: start at $(0, 4)$, go right $3$ and down $2$ to $(3, 2)$, and draw the line through both points.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an equation can "be" a line',
          text: 'Check whether $(3, -1)$ lies on $y = -2x + 5$: substitute and get $-2(3) + 5 = -1$. ✓ Now try $(1, 1)$: $-2(1) + 5 = 3 \\ne 1$, so it fails. The line *is* the set of all points that pass the test. This shift — treating an equation as a description of a shape — is the core idea of analytic geometry.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The slope is the coefficient of $x$, **wherever it is written**. In $y = 3 - 2x$ the slope is $-2$ (including the sign) and the intercept is $3$. Rewriting as $y = -2x + 3$ first prevents reading it backwards.',
        },
      ],
    },
    // 2
    {
      kind: 'mcq',
      prompt: 'What are the slope and $y$-intercept of $y = 3 - 2x$?',
      options: [
        { text: 'slope $3$, $y$-intercept $-2$', why: 'This reads the numbers in the order they appear. The slope is the coefficient of $x$, not the first number.' },
        { text: 'slope $-2$, $y$-intercept $3$', correct: true, why: 'Rewritten as $y = -2x + 3$: $m = -2$, $b = 3$.' },
        { text: 'slope $2$, $y$-intercept $3$', why: 'The minus sign belongs to the coefficient: $-2x$ means $m = -2$. The line falls.' },
        { text: 'slope $-2$, $y$-intercept $-3$', why: 'The constant term is $+3$; at $x = 0$ the equation gives $y = 3$.' },
      ],
      explanation: 'Reorder to $y = -2x + 3$. The coefficient of $x$ is the slope, $m = -2$, and the constant is the $y$-intercept, $b = 3$ — check by setting $x = 0$, which gives $y = 3$. So the line crosses the $y$-axis at $(0, 3)$ and falls $2$ units for each unit to the right.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Point-slope form: start from any point',
      blocks: [
        {
          type: 'p',
          text: 'Often the point you know is *not* the $y$-intercept. Then repeat the same derivation with your known point $(x_1, y_1)$ in place of $(0, b)$:',
        },
        {
          type: 'derivation',
          title: 'Deriving point-slope form',
          steps: [
            { tex: '\\frac{y - y_1}{x - x_1} = m', why: 'Slope from the known point $(x_1, y_1)$ to a general point $(x, y)$ on the line, $x \\ne x_1$.' },
            { tex: 'y - y_1 = m(x - x_1)', why: 'Multiply both sides by $(x - x_1)$. The known point itself satisfies this too ($0 = 0$).' },
          ],
          result: 'This is [[point-slope-form]]: you can write it down the instant you know one point and the slope.',
        },
        {
          type: 'theorem',
          name: 'Point-slope form',
          tex: 'y - y_1 = m(x - x_1)',
          text: 'The line with slope $m$ through $(x_1, y_1)$.',
        },
        {
          type: 'derivation',
          title: 'The line with slope $3$ through $(2, -1)$',
          steps: [
            { tex: 'y - (-1) = 3(x - 2)', why: 'Substitute $m = 3$, $x_1 = 2$, $y_1 = -1$ into point-slope form. Keep the parentheses around $-1$.' },
            { tex: 'y + 1 = 3x - 6', why: 'Subtracting $-1$ is adding $1$; distribute the $3$.' },
            { tex: 'y = 3x - 7', why: 'Subtract $1$ from both sides to reach slope-intercept form.' },
            { tex: '\\text{Check: } 3(2) - 7 = -1 \\ \\checkmark', why: 'The given point must satisfy your final equation. This catches most sign errors.' },
          ],
          result: 'The line is $y = 3x - 7$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          functions: [{ expr: 'k + m*(x - h)', label: '$y - y_1 = m(x - x_1)$', color: 'blue' }],
          points: [{ x: 'h', y: 'k', label: '(x₁, y₁)', color: 'red' }],
          sliders: [
            { name: 'h', min: -4, max: 4, step: 1, value: 2, label: '$x_1$' },
            { name: 'k', min: -4, max: 4, step: 1, value: -1, label: '$y_1$' },
            { name: 'm', min: -4, max: 4, step: 0.25, value: 3, label: 'slope $m$' },
          ],
          readouts: [{ label: 'same line as $y = mx + b$ with $b = y_1 - m x_1 =$', expr: 'k - m*h', digits: 2 }],
          caption: 'The slope slider spins the line around *your* point instead of around the $y$-intercept.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The minus signs are built in',
          text: 'Point-slope form already contains subtraction. For the point $(-3, 2)$ it reads $y - 2 = m(x - (-3)) = m(x + 3)$. Writing $(x - 3)$ here is the single most common error with this form: it describes a line through $(3, 2)$ instead.',
        },
      ],
    },
    // 4
    {
      kind: 'error',
      prompt: 'A student writes the equation of the line with slope $4$ through $(-3, 2)$. Tap the first line that is wrong.',
      lines: [
        'Point $(x_1, y_1) = (-3, 2)$, slope $m = 4$.',
        '$y - 2 = 4(x - 3)$',
        '$y - 2 = 4x - 12$',
        '$y = 4x - 10$',
      ],
      errorLines: [2],
      explanation: 'Line 2 substitutes $x_1 = -3$ as if it were $3$. Correctly, $x - x_1 = x - (-3) = x + 3$, so $y - 2 = 4(x + 3) = 4x + 12$ and $y = 4x + 14$. Check: $4(-3) + 14 = 2$ ✓. The student\'s line $y = 4x - 10$ passes through $(3, 2)$, not $(-3, 2)$.',
    },
    // 5
    {
      kind: 'expr',
      prompt: 'Write the equation of the line with slope $-2$ through $(-1, 4)$, in the form $y = mx + b$.',
      label: '$y =$',
      answer: '-2x + 2',
      answerTex: '-2x + 2',
      hint: 'Start with $y - 4 = -2(x - (-1)) = -2(x + 1)$.',
      explanation: 'Point-slope form: $y - 4 = -2(x + 1)$. Distribute: $y - 4 = -2x - 2$. Add $4$: $y = -2x + 2$. Check with the given point: $-2(-1) + 2 = 4$ ✓.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The line through two points',
      blocks: [
        {
          type: 'p',
          text: 'Two points determine exactly one line, and you already have every tool needed to find its equation. The process is always the same four steps:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Slope', text: 'Compute $m = \\frac{y_2 - y_1}{x_2 - x_1}$. (If $x_1 = x_2$, stop: the line is vertical, $x = x_1$.)' },
            { title: 'Point-slope', text: 'Plug $m$ and **either** point into $y - y_1 = m(x - x_1)$.' },
            { title: 'Simplify', text: 'Distribute and solve for $y$ to get $y = mx + b$.' },
            { title: 'Check', text: 'Substitute the **other** point. It must satisfy the equation.' },
          ],
        },
        {
          type: 'derivation',
          title: 'The line through $(1, 2)$ and $(4, 11)$',
          steps: [
            { tex: 'm = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3', why: 'Step 1: rise $9$ over run $3$.' },
            { tex: 'y - 2 = 3(x - 1)', why: 'Step 2: point-slope form with the first point $(1, 2)$.' },
            { tex: 'y = 3x - 3 + 2 = 3x - 1', why: 'Step 3: distribute, then add $2$.' },
            { tex: '3(4) - 1 = 11 \\ \\checkmark', why: 'Step 4: the second point $(4, 11)$ satisfies it. Using the second point in step 2 would have given the same final equation.' },
          ],
          result: 'The line is $y = 3x - 1$.',
        },
        {
          type: 'p',
          text: 'Here is a famous example. Water freezes at $0^\\circ$C $= 32^\\circ$F and boils at $100^\\circ$C $= 212^\\circ$F, and the conversion between the scales is linear. The points $(0, 32)$ and $(100, 212)$ give slope $\\frac{212 - 32}{100 - 0} = \\frac{180}{100} = \\frac{9}{5}$, and since $(0, 32)$ is the intercept, $F = \\frac{9}{5}C + 32$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'remap: the line through two points, as a function',
          text: 'Converting a value from one range to another — HP to health-bar pixels, joystick input $[-1, 1]$ to turn speed, audio volume to decibels on a slider — is the line through $(\\text{inLo}, \\text{outLo})$ and $(\\text{inHi}, \\text{outHi})$. Most engines ship it as `remap` or `map`.',
        },
        {
          type: 'code',
          title: 'remap.cpp',
          runnable: true,
          code: `#include <cstdio>

// The line through (inLo, outLo) and (inHi, outHi), evaluated at x.
double remap(double x, double inLo, double inHi, double outLo, double outHi) {
    double m = (outHi - outLo) / (inHi - inLo);  // slope
    return outLo + m * (x - inLo);               // point-slope form, solved for y
}

int main() {
    const double temps[] = {-40, 0, 37, 100};
    for (double c : temps)
        std::printf("%6.1f C = %6.1f F\\n", c, remap(c, 0, 100, 32, 212));
    std::printf("HP 35/100 -> bar width %.0f px\\n", remap(35, 0, 100, 0, 240));
}`,
          output: ` -40.0 C =  -40.0 F
   0.0 C =   32.0 F
  37.0 C =   98.6 F
 100.0 C =  212.0 F
HP 35/100 -> bar width 84 px`,
          annotations: [
            { lines: 5, text: 'Step 1: the slope between the two known points.' },
            { lines: 6, text: 'Steps 2–3: $y - y_1 = m(x - x_1)$ rearranged to $y = y_1 + m(x - x_1)$.' },
            { lines: 13, text: 'A $240$ px bar at $35\\%$ health: slope $2.4$ px per HP, so $35 \\cdot 2.4 = 84$.' },
          ],
        },
      ],
    },
    // 7
    {
      kind: 'expr',
      prompt: 'Find the equation of the line through $(-2, 1)$ and $(2, 9)$, in the form $y = mx + b$.',
      label: '$y =$',
      answer: '2x + 5',
      answerTex: '2x + 5',
      hint: 'First $m = \\frac{9 - 1}{2 - (-2)}$. Then use point-slope form with either point.',
      explanation: 'Slope: $m = \\frac{9 - 1}{2 - (-2)} = \\frac{8}{4} = 2$. Point-slope with $(2, 9)$: $y - 9 = 2(x - 2)$, so $y = 2x - 4 + 9 = 2x + 5$. Check the other point: $2(-2) + 5 = 1$ ✓.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Standard form, intercepts, and the lines $y = mx + b$ misses',
      blocks: [
        {
          type: 'p',
          text: 'A third common format is [[standard-form-of-a-line|standard form]], $Ax + By = C$ (usually with integer coefficients and $A \\ge 0$). It hides the slope, but it shows off the **intercepts**: the [[x-intercept]] is where $y = 0$ and the $y$-intercept is where $x = 0$.',
        },
        {
          type: 'derivation',
          title: 'Intercepts and slope of $3x + 4y = 12$',
          steps: [
            { tex: 'y = 0: \\ 3x = 12 \\implies x = 4', why: 'Points on the $x$-axis have $y = 0$. So the $x$-intercept is $(4, 0)$.' },
            { tex: 'x = 0: \\ 4y = 12 \\implies y = 3', why: 'Points on the $y$-axis have $x = 0$. So the $y$-intercept is $(0, 3)$.' },
            { tex: '4y = -3x + 12', why: 'To find the slope, solve for $y$: subtract $3x$ from both sides.' },
            { tex: 'y = -\\tfrac{3}{4}x + 3', why: 'Divide every term by $4$. The slope is $-\\frac{3}{4}$, and $b = 3$ matches the $y$-intercept found above.' },
          ],
          result: 'Plot $(4, 0)$ and $(0, 3)$ and connect them: that is the whole graph. The slope $\\frac{3 - 0}{0 - 4} = -\\frac{3}{4}$ agrees.',
        },
        {
          type: 'graph',
          x: [-5, 6],
          y: [-3, 5],
          equal: true,
          functions: [
            { expr: '-3x/4 + 3', label: '$3x + 4y = 12$', color: 'blue' },
            { expr: '-2', label: '$y = -2$ (horizontal, $m = 0$)', color: 'green' },
          ],
          vlines: [{ x: -3, label: 'x = −3 (vertical, slope undefined)', color: 'purple', dashed: false }],
          points: [
            { x: 4, y: 0, label: '(4, 0)', color: 'red' },
            { x: 0, y: 3, label: '(0, 3)', color: 'red' },
          ],
          caption: 'A horizontal line has the form $y = b$ (slope $0$). A vertical line has the form $x = a$: every point on it has the same $x$, whatever $y$ is.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we need more than one form',
          text: 'A vertical line like $x = -3$ has undefined slope, so there is no $m$ to put in $y = mx + b$: slope-intercept form simply cannot describe it. Standard form can — it is $1x + 0y = -3$. That is why standard form is the one format that covers **every** line, while slope-intercept form covers every line except the vertical ones.',
        },
        {
          type: 'table',
          headers: ['form', 'equation', 'best when you…'],
          rows: [
            ['slope-intercept', '$y = mx + b$', 'want to graph quickly or read off slope'],
            ['point-slope', '$y - y_1 = m(x - x_1)$', 'know a point and a slope (or two points)'],
            ['standard', '$Ax + By = C$', 'want intercepts, or need vertical lines'],
            ['horizontal / vertical', '$y = b$ / $x = a$', 'have slope $0$ / undefined slope'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Shortcut: for $Ax + By = C$ with $B \\ne 0$, the slope is $-\\frac{A}{B}$. For $3x + 4y = 12$ that is $-\\frac{3}{4}$. But solving for $y$ is just as fast and impossible to misremember.',
        },
      ],
    },
    // 9
    {
      kind: 'numeric',
      prompt: 'Find the $x$-intercept of the line $2x - 5y = 10$. (Give the $x$-coordinate.)',
      hint: 'On the $x$-axis, $y = 0$.',
      label: '$x =$',
      answer: '5',
      explanation: 'Set $y = 0$: $2x - 5(0) = 10$, so $2x = 10$ and $x = 5$. The $x$-intercept is $(5, 0)$. (Setting $x = 0$ instead gives $-5y = 10$, $y = -2$: that is the $y$-intercept $(0, -2)$, a common mix-up.)',
    },
    // 10
    {
      kind: 'mcq',
      prompt: 'What is the slope of the line $4x - 2y = 6$?',
      options: [
        { text: '$4$', why: 'The coefficient of $x$ is only the slope once the equation is solved for $y$. Here $y$ still has coefficient $-2$.' },
        { text: '$-2$', why: 'Dividing by $-2$ flips the sign of the $4x$ term: $-4x \\div (-2) = +2x$. A sign slip gives $-2$.' },
        { text: '$-3$', why: '$-3$ is the $y$-intercept of $y = 2x - 3$, not the slope.' },
        { text: '$2$', correct: true, why: '$-2y = -4x + 6$, so $y = 2x - 3$ and $m = 2$.' },
      ],
      explanation: 'Solve for $y$: subtract $4x$ to get $-2y = -4x + 6$, then divide every term by $-2$: $y = 2x - 3$. The slope is $2$. The shortcut $-\\frac{A}{B} = -\\frac{4}{-2} = 2$ agrees.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Parallel and perpendicular lines',
      blocks: [
        {
          type: 'p',
          text: '[[parallel-lines|Parallel lines]] never meet, so they must tilt by the same amount: non-vertical lines are parallel exactly when they have **equal slopes** (and different intercepts — otherwise they are the same line). All vertical lines are parallel to one another.',
        },
        {
          type: 'p',
          text: '[[perpendicular-lines|Perpendicular lines]] meet at a right angle. Their slopes are **negative reciprocals**: if one has slope $m \\ne 0$, the other has slope $-\\frac{1}{m}$. Equivalently $m_1 \\cdot m_2 = -1$. (The exception: a horizontal line, slope $0$, is perpendicular to a vertical line, slope undefined.)',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 4],
          equal: true,
          functions: [
            { expr: 'm*x', label: '$y = mx$', color: 'blue' },
            { expr: '-x/m', label: '$y = -\\frac{1}{m}x$', color: 'red' },
          ],
          segments: [
            { from: [0, 0], to: [1, 0], color: 'blue', dashed: true, label: '1' },
            { from: [1, 0], to: [1, 'm'], color: 'blue', dashed: true, label: 'm' },
            { from: [0, 0], to: [0, 1], color: 'red', dashed: true, label: '1' },
            { from: [0, 1], to: ['-m', 1], color: 'red', dashed: true, label: 'm' },
          ],
          sliders: [{ name: 'm', min: 0.25, max: 3, step: 0.25, value: 2, label: 'slope $m$' }],
          readouts: [
            { label: 'perpendicular slope $-\\frac{1}{m} =$', expr: '-1/m', digits: 3 },
            { label: 'product $m \\cdot \\left(-\\frac{1}{m}\\right) =$', expr: 'm*(-1/m)', digits: 0 },
          ],
          caption: 'The red slope triangle is the blue one rotated $90^\\circ$ counter-clockwise: run $1$, rise $m$ becomes run $-m$, rise $1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why negative reciprocals',
          text: 'The blue line\'s slope triangle has run $1$ and rise $m$. Rotating the whole picture $90^\\circ$ counter-clockwise turns the line into a perpendicular one, and turns the triangle so that its old rise $m$ now points *left* (a run of $-m$) and its old run $1$ now points *up* (a rise of $1$). The new slope is $\\frac{\\text{rise}}{\\text{run}} = \\frac{1}{-m} = -\\frac{1}{m}$. Flip and negate — exactly what the rotation does to the triangle.',
        },
        {
          type: 'derivation',
          title: 'The line through $(4, 1)$ perpendicular to $y = 2x + 3$',
          steps: [
            { tex: 'm = 2 \\implies m_\\perp = -\\tfrac{1}{2}', why: 'Read the given slope, then take its negative reciprocal: flip $\\frac{2}{1}$ to $\\frac{1}{2}$ and change the sign.' },
            { tex: 'y - 1 = -\\tfrac{1}{2}(x - 4)', why: 'Point-slope form with the new slope and the given point.' },
            { tex: 'y = -\\tfrac{1}{2}x + 2 + 1 = -\\tfrac{1}{2}x + 3', why: 'Distribute: $-\\frac{1}{2} \\cdot (-4) = +2$. Then add $1$.' },
            { tex: '2 \\cdot \\left(-\\tfrac{1}{2}\\right) = -1 \\ \\checkmark', why: 'The slopes multiply to $-1$, and $-\\frac{1}{2}(4) + 3 = 1$ confirms the point.' },
          ],
          result: 'The perpendicular line is $y = -\\frac{1}{2}x + 3$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Perpendiculars in 2D games',
          text: 'Rotating a direction vector $(d_x, d_y)$ by $90^\\circ$ gives $(-d_y, d_x)$ — exactly the triangle rotation above. Games use it to get the *normal* of a wall (for bouncing a ball off it) or the "right" direction of a character from its "forward" direction.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "write the line through $P$ parallel/perpendicular to [a line in standard form]". The given line usually needs to be solved for $y$ first. The most common lost points: using the reciprocal without the negative, or the negative without the reciprocal.',
        },
      ],
    },
    // 12
    {
      kind: 'expr',
      prompt: 'Write the equation of the line through $(2, 4)$ that is **parallel** to $y = -3x + 1$.',
      label: '$y =$',
      answer: '-3x + 10',
      answerTex: '-3x + 10',
      hint: 'Parallel lines have the same slope, so $m = -3$.',
      explanation: 'Parallel means the same slope, $m = -3$. Point-slope form: $y - 4 = -3(x - 2) = -3x + 6$, so $y = -3x + 10$. Check: $-3(2) + 10 = 4$ ✓. The intercept changed from $1$ to $10$ — same tilt, shifted line.',
    },
    // 13
    {
      kind: 'truefalse',
      prompt: 'The lines $y = 2x + 1$ and $y = -2x + 5$ are perpendicular.',
      answer: false,
      explanation: 'Perpendicular slopes multiply to $-1$, but $2 \\cdot (-2) = -4$. The negative reciprocal of $2$ is $-\\frac{1}{2}$, not $-2$: you must flip *and* negate. These two lines cross, but at an angle other than $90^\\circ$ (they form an "X" that is taller than it is wide).',
    },
    // 14
    {
      kind: 'order',
      prompt: 'Order the steps to find the line through $(3, 2)$ perpendicular to $3x + y = 7$.',
      lines: [
        'Solve $3x + y = 7$ for $y$: $y = -3x + 7$',
        'Read off the given slope: $m = -3$',
        'Take the negative reciprocal: $m_\\perp = \\frac{1}{3}$',
        'Point-slope form: $y - 2 = \\frac{1}{3}(x - 3)$',
        'Simplify: $y = \\frac{1}{3}x + 1$',
      ],
      distractors: ['Take the reciprocal: $m_\\perp = -\\frac{1}{3}$'],
      explanation: 'You can\'t read a slope from standard form until you solve for $y$, so that comes first. The negative reciprocal of $-3$ is $\\frac{1}{3}$ (flip to $-\\frac{1}{3}$, then negate). The distractor forgets the negation, giving a slope whose product with $-3$ is $+1$, not $-1$. Final check: $\\frac{1}{3}(3) + 1 = 2$ ✓.',
    },
  ],
  takeaways: [
    'Slope-intercept form $y = mx + b$: slope $m$, $y$-intercept $(0, b)$. It describes every non-vertical line.',
    'Point-slope form $y - y_1 = m(x - x_1)$ is the fastest route from a point and a slope; watch the signs when $x_1$ or $y_1$ is negative.',
    'Through two points: find $m$, use point-slope with either point, simplify, then check the other point.',
    'Standard form $Ax + By = C$ shows intercepts (set $x = 0$ or $y = 0$) and covers vertical lines $x = a$; horizontal lines are $y = b$.',
    'Parallel lines have equal slopes; perpendicular lines have negative-reciprocal slopes ($m_1 m_2 = -1$).',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.2 Linear Equations in One Variable',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-2-linear-equations-in-one-variable',
      source: 'openstax',
      note: 'Covers point-slope and slope-intercept forms and parallel and perpendicular lines, with exercises.',
    },
    {
      title: "Paul's Online Notes — Lines",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Lines.aspx',
      source: 'paul',
      note: 'All three forms of a line plus parallel and perpendicular lines, worked at college pace.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type `y = m x + b` and let Desmos create sliders for $m$ and $b$ to experiment freely.',
    },
  ],
};
