import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-limits-intro',
  title: 'The Idea of a Limit',
  summary: 'What a function is heading toward, as opposed to where it actually lands: the one idea all of calculus is built on.',
  minutes: 17,
  objectives: [
    'Explain how the tangent problem and the area problem both lead to limits',
    'Estimate a limit from a table of values approaching $a$ from both sides',
    'Read limits and function values from a graph, including holes and jumps',
    'Explain why $\\lim_{x \\to a} f(x)$ does not depend on $f(a)$',
    'Recognise when numerical guessing can mislead you',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Two problems that started calculus',
      blocks: [
        {
          type: 'p',
          text: 'Calculus grew out of two questions that algebra and geometry could not answer. Both sound simple. Both turn out to require the same new idea.',
        },
        {
          type: 'heading',
          text: '1. The tangent problem: how steep is a curve *right here*?',
        },
        {
          type: 'p',
          text: 'Slope needs two points. To get the steepness of $y = x^2$ at the single point $(1, 1)$, we pick a second point a distance $h$ away and compute the slope of the [[secant-line]] through both. Then we slide the second point closer and closer. We can never set $h = 0$ (that gives $\\frac{0}{0}$), but we can watch what the slopes are *heading toward*.',
        },
        {
          type: 'graph',
          x: [-0.5, 3],
          y: [-1, 8],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          tangents: [{ expr: 'x^2', at: 1, secantTo: '1 + h', color: 'purple' }],
          sliders: [{ name: 'h', min: 0.01, max: 1.8, step: 0.01, value: 1.5, label: '$h$' }],
          readouts: [{ label: 'secant slope $\\frac{(1+h)^2 - 1}{h} =$', expr: '((1+h)^2 - 1)/h', digits: 4 }],
          caption: 'Shrink $h$. The secant slope never reaches a final answer at any particular $h$, but it is clearly closing in on one number.',
        },
        {
          type: 'heading',
          text: '2. The area problem: how much space is under a curve?',
        },
        {
          type: 'p',
          text: 'Geometry gives areas of rectangles and triangles, not of regions with curved edges. So approximate: fill the region under $y = x^2$ from $0$ to $1$ with $n$ thin rectangles and add their areas. More rectangles means less wasted gap, and the total creeps toward the true area.',
        },
        {
          type: 'graph',
          x: [-0.1, 1.2],
          y: [-0.1, 1.2],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          riemann: { expr: 'x^2', from: 0, to: 1, n: 'n', method: 'left', color: 'teal' },
          sliders: [{ name: 'n', min: 1, max: 60, step: 1, value: 4, label: '$n$ rectangles' }],
          readouts: [{ label: 'total rectangle area $=$', expr: '(n-1)(2n-1)/(6n^2)', digits: 5 }],
          caption: 'Increase $n$. No finite number of rectangles is exact, yet the totals settle toward a single value.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one idea solves both',
          text: 'In both problems the exact answer is out of reach directly ($h = 0$ is forbidden; infinitely many rectangles cannot be added one at a time). What we *can* do is produce approximations that get better and better, and ask what number they are approaching. That number is called a [[limit]]. Make the limit precise and both problems are solved — that is why every calculus course starts here.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Archimedes (c. 250 BCE) found the area under a parabola by exactly this squeezing-in process. Newton and Leibniz built calculus on it in the 1600s, but a fully rigorous definition of "approaching" only arrived with Cauchy and Weierstrass in the 1800s. You will meet that precise version at the end of this unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'For $f(x) = x^2$, compute the slope of the secant line through the points where $x = 2$ and $x = 2.1$.',
      hint: 'Slope $= \\dfrac{f(2.1) - f(2)}{2.1 - 2}$, and $2.1^2 = 4.41$.',
      label: '$m_{\\text{sec}} =$',
      answer: '4.1',
      explanation: 'The points are $(2, 4)$ and $(2.1, 4.41)$, so $m_{\\text{sec}} = \\frac{4.41 - 4}{0.1} = \\frac{0.41}{0.1} = 4.1$. Try $x = 2.01$ and you get $4.01$; try $2.001$ and you get $4.001$. These secant slopes are approaching $4$ — the slope of the tangent line at $x = 2$. That is a limit in action.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Guessing a limit with a table',
      blocks: [
        {
          type: 'p',
          text: 'Here is a function with a gap in it: $f(x) = \\dfrac{x^3 - 1}{x - 1}$. At $x = 1$ it gives $\\frac{0}{0}$, so $f(1)$ is undefined — the point is not in the [[domain]]. But $f$ is defined at every $x$ *near* 1, so we can ask: as $x$ gets close to 1, what do the outputs get close to?',
        },
        {
          type: 'table',
          headers: ['$x$ (from the left)', '$f(x)$', '$x$ (from the right)', '$f(x)$'],
          rows: [
            ['$0.9$', '$2.71$', '$1.1$', '$3.31$'],
            ['$0.99$', '$2.9701$', '$1.01$', '$3.0301$'],
            ['$0.999$', '$2.997001$', '$1.001$', '$3.003001$'],
            ['$0.9999$', '$2.99970001$', '$1.0001$', '$3.00030001$'],
          ],
          caption: 'Approach $x = 1$ from both sides. Both columns close in on $3$.',
        },
        {
          type: 'p',
          text: 'From both directions the outputs crowd toward $3$. We say the **limit of $f(x)$ as $x$ approaches 1 is 3**, and write $\\lim_{x \\to 1} \\dfrac{x^3 - 1}{x - 1} = 3$. Drag the slider to walk two test points in toward $x = 1$ from either side.',
        },
        {
          type: 'graph',
          x: [-0.5, 2.2],
          y: [-0.5, 7.5],
          functions: [{ expr: '(x^3 - 1)/(x - 1)', label: '$f(x) = \\frac{x^3 - 1}{x - 1}$' }],
          points: [
            { x: 1, y: 3, open: true, label: 'hole at (1, 3)' },
            { x: '1 - d', y: '((1 - d)^3 - 1)/((1 - d) - 1)', color: 'purple' },
            { x: '1 + d', y: '((1 + d)^3 - 1)/((1 + d) - 1)', color: 'green' },
          ],
          vlines: [{ x: 1, label: 'x = 1' }],
          hlines: [{ y: 3 }],
          sliders: [{ name: 'd', min: 0.01, max: 1, step: 0.01, value: 0.8, label: 'distance from 1, $d$' }],
          readouts: [
            { label: '$f(1 - d) =$', expr: '((1 - d)^3 - 1)/((1 - d) - 1)', digits: 5 },
            { label: '$f(1 + d) =$', expr: '((1 + d)^3 - 1)/((1 + d) - 1)', digits: 5 },
          ],
          caption: 'The open circle marks the hole: the curve is defined everywhere except $x = 1$. As $d \\to 0$ both readouts approach $3$.',
        },
        {
          type: 'definition',
          term: 'Limit (informal definition)',
          text: 'Suppose $f(x)$ is defined for all $x$ near $a$, except possibly at $a$ itself. We write\n\n$$\\lim_{x \\to a} f(x) = L$$\n\nand say "the limit of $f(x)$ as $x$ approaches $a$ equals $L$" if we can make $f(x)$ as close to $L$ as we like by taking $x$ sufficiently close to $a$ (on **either side** of $a$) but **not equal** to $a$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "not equal to $a$"?',
          text: 'Because the interesting cases are exactly the ones where plugging in $a$ fails. The secant slope at $h = 0$ is $\\frac{0}{0}$; this $f(1)$ is $\\frac{0}{0}$. If the definition required us to evaluate at $a$, limits would be useless for the very problems they were invented to solve. A limit describes the *trend near* $a$, never the value *at* $a$.',
        },
        {
          type: 'code',
          title: 'limit_table.cpp',
          runnable: true,
          code: `#include <cstdio>

double f(double x) { return (x * x * x - 1) / (x - 1); }

int main() {
    const double a = 1.0;
    const double gaps[] = {0.1, 0.01, 0.001, 0.0001};
    for (double d : gaps) {
        std::printf("f(%.4f) = %.6f    f(%.4f) = %.6f\\n",
                    a - d, f(a - d), a + d, f(a + d));
    }
}`,
          output: `f(0.9000) = 2.710000    f(1.1000) = 3.310000
f(0.9900) = 2.970100    f(1.0100) = 3.030100
f(0.9990) = 2.997001    f(1.0010) = 3.003001
f(0.9999) = 2.999700    f(1.0001) = 3.000300`,
          annotations: [
            { lines: 3, text: 'The function, typed exactly as given. Calling `f(1.0)` would divide $0$ by $0$ and return `nan` (not a number).' },
            { lines: 7, text: 'Distances from $a$: each one is ten times smaller than the last.' },
            { lines: '8-10', text: 'Evaluate just left and just right of $a$ — the same two-sided table as above, generated by code.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A calculator gives these values of $g(x) = \\dfrac{e^x - 1}{x}$ (rounded to 6 decimals). Use them to estimate $\\lim_{x \\to 0} g(x)$.',
      tex: '\\begin{array}{c|cccccc} x & -0.1 & -0.01 & -0.001 & 0.001 & 0.01 & 0.1 \\\\ \\hline g(x) & 0.951626 & 0.995017 & 0.999500 & 1.000500 & 1.005017 & 1.051709 \\end{array}',
      hint: 'Ignore $x = 0$ itself ($g(0)$ is $\\frac{0}{0}$). What number are both sides closing in on?',
      label: '$\\lim_{x \\to 0} g(x) \\approx$',
      answer: '1',
      explanation: 'From the left the values climb $0.95 \\to 0.995 \\to 0.9995$; from the right they fall $1.05 \\to 1.005 \\to 1.0005$. Each step lands ten times closer to $1$ on both sides, so the limit appears to be $1$. (This particular limit really is exactly $1$ — it is the reason $e$ is the "natural" base, as you will see when you differentiate $e^x$.) Notice we never used $g(0)$, which does not exist.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The limit is not the value',
      blocks: [
        {
          type: 'p',
          text: 'The most important habit to build in this unit: $\\lim_{x \\to a} f(x)$ and $f(a)$ are **two different questions**. The limit asks where the graph is heading as you walk toward $x = a$. The value asks where the single dot at $x = a$ sits — or whether there is a dot at all. Usually the answers agree. Not always.',
        },
        {
          type: 'p',
          text: 'Below, the graph is the line $y = x + 1$ with the point at $x = 2$ pulled out of place. The open circle at $(2, 3)$ is a [[hole]]: the line passes through that location but the function does not take that value there. The solid dot is the actual value $f(2) = c$. Drag $c$ around.',
        },
        {
          type: 'graph',
          x: [-1, 4],
          y: [-1, 6],
          functions: [{ expr: 'x + 1', label: '$y = x + 1$ for $x \\ne 2$' }],
          points: [
            { x: 2, y: 3, open: true, label: '(2, 3)' },
            { x: 2, y: 'c', label: 'f(2) = c' },
          ],
          vlines: [{ x: 2 }],
          sliders: [{ name: 'c', min: -0.5, max: 5.5, step: 0.1, value: 5, label: 'value $f(2) = c$' }],
          readouts: [
            { label: '$f(2) =$', expr: 'c', digits: 1 },
            { label: '$\\lim_{x \\to 2} f(x) =$', expr: '3', digits: 1 },
          ],
          caption: 'Moving the solid dot changes $f(2)$ but never changes the limit: every point *near* $x = 2$ is still on the line heading to height $3$.',
        },
        {
          type: 'table',
          headers: ['Situation at $x = a$', '$f(a)$', '$\\lim_{x \\to a} f(x)$'],
          rows: [
            ['Unbroken curve', 'equals the limit', 'exists'],
            ['Hole, with the dot moved elsewhere', 'exists, but is a different number', 'exists'],
            ['Hole, no dot at all', 'undefined', 'exists'],
            ['Graph jumps (left and right parts disagree)', 'may or may not exist', '**does not exist**'],
          ],
          caption: 'Every combination is possible except one: knowing $f(a)$ never tells you the limit.',
        },
        {
          type: 'derivation',
          title: 'Limit vs. value for a piecewise function',
          steps: [
            { tex: 'f(x) = \\begin{cases} x + 1 & x \\ne 2 \\\\ 5 & x = 2 \\end{cases}', why: 'A [[piecewise-function]]: one rule everywhere except a single special point.' },
            { tex: 'f(2) = 5', why: 'The value: read the second rule, which applies only at $x = 2$.' },
            { tex: '\\text{for } x \\ne 2:\\; f(x) = x + 1', why: 'The limit only looks at $x$ near $2$ but not equal to $2$, so only the first rule matters.' },
            { tex: '\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x + 1) = 3', why: 'As $x$ gets close to $2$, $x + 1$ gets close to $2 + 1 = 3$.' },
          ],
          result: 'Here $\\lim_{x \\to 2} f(x) = 3$ but $f(2) = 5$. Both exist, and they disagree.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic wrong conclusions',
          text: '"$f(a)$ is undefined, so the limit does not exist" — wrong: $\\frac{x^3 - 1}{x - 1}$ is undefined at $1$ and still has limit $3$.\n\n"$f(a) = 5$, so the limit is $5$" — wrong: the dot can sit anywhere without affecting the limit. Functions whose limit and value *do* agree are called continuous; that is the subject of the next unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'For the function graphed below, what are $\\lim_{x \\to 1} f(x)$ and $f(1)$?',
      graph: {
        type: 'graph',
        x: [-2, 3],
        y: [-1, 5],
        functions: [{ expr: '4 - x^2', label: '$y = f(x)$' }],
        points: [
          { x: 1, y: 3, open: true },
          { x: 1, y: 1 },
        ],
        caption: 'Open circle at $(1, 3)$; solid dot at $(1, 1)$.',
      },
      options: [
        {
          text: '$\\lim_{x \\to 1} f(x) = 3$ and $f(1) = 1$',
          correct: true,
          why: 'The curve heads to height $3$ from both sides (that is the limit), while the solid dot shows the actual value $1$.',
        },
        {
          text: '$\\lim_{x \\to 1} f(x) = 1$ and $f(1) = 3$',
          why: 'Reversed. The solid dot is the value; the open circle marks where the curve is heading but the function does not land.',
        },
        {
          text: '$\\lim_{x \\to 1} f(x) = 1$ and $f(1) = 1$',
          why: 'The value is $1$, but the limit ignores the point at $x = 1$ itself. Nearby points are all close to $3$, not $1$.',
        },
        {
          text: 'The limit does not exist, because $f(1) \\ne 3$',
          why: 'A limit only fails to exist when the nearby values do not settle on one number (for example, a jump). Here they settle on $3$; the misplaced dot is irrelevant.',
        },
      ],
      explanation: 'Read the two things separately. **Limit:** trace the curve toward $x = 1$ from the left and from the right; both paths arrive at the open circle at height $3$. **Value:** look for the solid dot directly above $x = 1$; it is at height $1$. Disagreement between them is allowed.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student estimates $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$. Tap the first line that is wrong.',
      lines: [
        '$f(2.9) = \\frac{8.41 - 9}{2.9 - 3} = \\frac{-0.59}{-0.1} = 5.9$',
        '$f(2.99) = \\frac{8.9401 - 9}{2.99 - 3} = \\frac{-0.0599}{-0.01} = 5.99$',
        '$f(3.01) = \\frac{9.0601 - 9}{3.01 - 3} = \\frac{0.0601}{0.01} = 6.01$',
        '$f(3) = \\frac{0}{0}$, which is undefined',
        'Since $f(3)$ is undefined, $\\lim_{x \\to 3} f(x)$ does not exist',
      ],
      errorLines: [5],
      explanation: 'Lines 1–4 are all correct: the table values are right, and $f(3)$ really is undefined. The mistake is the conclusion. A limit never uses the value at $x = 3$; it only asks what $f(x)$ approaches as $x$ gets close to 3. The table shows the values approaching $6$ from both sides ($5.9, 5.99$ and $6.01$), so the correct estimate is $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = 6$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Reading limits from a graph',
      blocks: [
        {
          type: 'p',
          text: 'A graph lets you see limits directly. To find $\\lim_{x \\to a} f(x)$, put a finger on the curve on each side of $x = a$ and slide both fingers toward $a$. Watch the *heights* of your fingers, not what happens exactly at $a$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Approach from the left', text: 'Trace the curve toward $x = a$ from smaller $x$-values. What height is it heading to?' },
            { title: 'Approach from the right', text: 'Do the same from larger $x$-values.' },
            { title: 'Compare', text: 'If both heights are the same number $L$, then $\\lim_{x \\to a} f(x) = L$. If they differ, the limit does not exist.' },
            { title: 'Only now, look at the dot', text: 'A solid dot above $x = a$ gives $f(a)$. An open circle means "not this height". No dot at all means $f(a)$ is undefined.' },
          ],
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-1, 6],
          functions: [
            { expr: 'x + 3', domain: [-4, 1], label: '$x + 3$ for $x < 1$' },
            { expr: '(x - 2)^2 + 1', domain: [1, 4], label: '$(x-2)^2 + 1$ for $x \\ge 1$', color: 'blue' },
          ],
          points: [
            { x: -2, y: 1, open: true },
            { x: -2, y: 3, label: 'f(−2) = 3' },
            { x: 1, y: 4, open: true },
            { x: 1, y: 2, label: 'f(1) = 2' },
            { x: 'p', y: '(p + 3)(1 - sign(p - 1))/2 + ((p - 2)^2 + 1)(1 + sign(p - 1))/2', color: 'purple', label: 'you' },
          ],
          sliders: [{ name: 'p', min: -3.95, max: 3.95, step: 0.1, value: -3.55, label: 'walk along the curve, $x = p$' }],
          readouts: [
            { label: '$x =$', expr: 'p', digits: 2 },
            { label: '$f(x) =$', expr: '(p + 3)(1 - sign(p - 1))/2 + ((p - 2)^2 + 1)(1 + sign(p - 1))/2', digits: 3 },
          ],
          caption: 'Walk the purple point through $x = -2$, $x = 1$ and $x = 3$ and watch its height just before and just after each.',
        },
        {
          type: 'table',
          headers: ['$a$', 'from the left', 'from the right', '$\\lim_{x \\to a} f(x)$', '$f(a)$'],
          rows: [
            ['$-2$', '$1$', '$1$', '$1$', '$3$'],
            ['$1$', '$4$', '$2$', 'does not exist', '$2$'],
            ['$3$', '$2$', '$2$', '$2$', '$2$'],
          ],
          caption: 'Three behaviours on one graph: a hole with a misplaced dot, a jump, and an ordinary point.',
        },
        {
          type: 'p',
          text: 'At $x = 1$ the graph jumps: the left piece is heading to $4$ and the right piece to $2$. There is no single number that $f(x)$ approaches, so $\\lim_{x \\to 1} f(x)$ **does not exist** — even though $f(1) = 2$ is perfectly well defined. The left and right approaches, called [[one-sided-limit|one-sided limits]], get their own notation in the next lesson.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graph-reading questions are a staple of first calculus exams: a messy piecewise graph and a list of "find $\\lim_{x \\to a} f(x)$ and $f(a)$". Answer the limit and the value separately every time, and write "DNE" (does not exist) when the two sides disagree. Instructors watch specifically for students who read the solid dot as the limit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'fill',
      prompt: 'Use the graph of $g$ to complete each statement.',
      graph: {
        type: 'graph',
        x: [-4, 4],
        y: [-1, 5],
        functions: [
          { expr: 'x + 4', domain: [-4, -1], label: '$y = g(x)$' },
          { expr: 'x^2', domain: [-1, 2], color: 'blue' },
          { expr: '6 - x', domain: [2, 4], color: 'blue' },
        ],
        points: [
          { x: -1, y: 3 },
          { x: -1, y: 1, open: true },
          { x: 2, y: 4, open: true },
          { x: 2, y: 1 },
        ],
        vlines: [{ x: -1 }, { x: 2 }],
        caption: 'Solid dots are values of $g$; open circles are not.',
      },
      template: '$\\lim_{x \\to 2} g(x) =$ ___ and $g(2) =$ ___. $\\lim_{x \\to -1} g(x)$ ___ and $g(-1) =$ ___.',
      blanks: [{ answers: ['$4$'] }, { answers: ['$1$'] }, { answers: ['does not exist'] }, { answers: ['$3$'] }],
      wordBank: ['$4$', '$1$', 'does not exist', '$3$', '$0$', '$2$'],
      hint: 'For each limit, trace both sides toward the vertical dashed line. For each value, find the solid dot.',
      explanation: 'At $x = 2$: both sides head to height $4$ (the open circle), so the limit is $4$, while the solid dot puts $g(2) = 1$. At $x = -1$: from the left the graph rises to $3$, from the right it starts near $1$. The sides disagree, so $\\lim_{x \\to -1} g(x)$ does not exist; the solid dot gives $g(-1) = 3$. Notice the limit failing to exist at $-1$ while the value exists, and the opposite pattern of disagreement at $2$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'When guessing goes wrong',
      blocks: [
        {
          type: 'p',
          text: 'Tables and graphs are excellent for building intuition, but they only sample *finitely many* points. A limit is a statement about *all* $x$ near $a$. Sometimes the points you happened to choose tell a false story.',
        },
        {
          type: 'p',
          text: 'Try $f(x) = \\sin\\left(\\dfrac{\\pi}{x}\\right)$ as $x \\to 0$. The "obvious" table, using $x = 0.1, 0.01, 0.001, \\dots$, gives $\\sin(10\\pi), \\sin(100\\pi), \\sin(1000\\pi), \\dots$ — all exactly $0$. It is tempting to conclude the limit is $0$.',
        },
        {
          type: 'table',
          headers: ['$x$', '$\\pi / x$', '$\\sin(\\pi/x)$'],
          rows: [
            ['$0.1$', '$10\\pi$', '$0$'],
            ['$0.01$', '$100\\pi$', '$0$'],
            ['$0.001$', '$1000\\pi$', '$0$'],
            ['$\\frac{2}{5} = 0.4$', '$\\frac{5\\pi}{2}$', '$1$'],
            ['$\\frac{2}{401} \\approx 0.00499$', '$\\frac{401\\pi}{2}$', '$1$'],
            ['$\\frac{2}{4003} \\approx 0.0005$', '$\\frac{4003\\pi}{2}$', '$-1$'],
          ],
          caption: 'Choose different points and you get $1$ or $-1$ just as close to $0$.',
        },
        {
          type: 'graph',
          x: [-1, 1],
          y: [-1.6, 1.6],
          functions: [{ expr: 'sin(pi/x)', label: '$y = \\sin(\\pi / x)$' }],
          caption: 'Near $0$, $\\pi/x$ races through whole periods of sine faster and faster, so the graph swings between $-1$ and $1$ infinitely often. (The plotter cannot draw it faithfully — another reason not to trust pictures blindly.)',
        },
        {
          type: 'p',
          text: 'The function oscillates between $-1$ and $1$ in every interval around $0$, no matter how small. It never settles on one number, so $\\lim_{x \\to 0} \\sin(\\pi / x)$ **does not exist**. The table of zeros was a coincidence of the sample points.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we need more than tables',
          text: 'A table is evidence, not proof. It can be fooled by unlucky sample points (as here), and by rounding error: with tiny $x$, a computer subtracting two nearly equal numbers can lose most of its significant digits and print nonsense. To be *certain*, we need algebra — the [[limit-laws|limit laws]] in two lessons\' time — and ultimately the precise definition at the end of this unit.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Aliasing: the same trap in games and audio',
          text: 'Sampling $\\sin(\\pi/x)$ only at $x = 10^{-k}$ hits the zeros every time. That is *aliasing*, the same effect that makes wagon wheels spin backwards on film and fast-moving objects tunnel through walls when a physics engine checks collisions only once per frame. A sampled signal can look calm while the real one swings wildly between the samples.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'If a table shows $f(x)$ getting closer and closer to $5$ as $x$ approaches $a$ from both sides, then $\\lim_{x \\to a} f(x)$ must equal $5$.',
      answer: false,
      explanation: 'A table checks only finitely many $x$-values, and the limit is a claim about **every** $x$ near $a$. With $\\sin(\\pi/x)$, the sample points $0.1, 0.01, 0.001$ all give $0$, yet the limit does not exist because other points just as close give $1$ and $-1$. Tables suggest a limit; algebra (or the precise definition) confirms it.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Which statement best captures what $\\lim_{x \\to a} f(x) = L$ means?',
      options: [
        {
          text: '$f(a) = L$',
          why: 'That is a statement about the value at $a$. A limit can exist when $f(a)$ is undefined or different from $L$.',
        },
        {
          text: '$f(x)$ can be made as close to $L$ as we like by taking $x$ close enough to $a$, with $x \\ne a$',
          correct: true,
          why: 'Exactly the informal definition: it is about the trend of the outputs as inputs crowd in on $a$ from both sides, ignoring $x = a$ itself.',
        },
        {
          text: '$f(x)$ eventually equals $L$ once $x$ is close enough to $a$',
          why: 'Outputs only need to get arbitrarily *close* to $L$; they may never actually equal it. For $\\frac{x^3 - 1}{x - 1}$ near $1$, no output equals $3$.',
        },
        {
          text: 'Plugging $x = a$ into the formula gives $L$',
          why: 'Often plugging in gives $\\frac{0}{0}$ — that is precisely when limits are needed. Substitution works for many nice functions, but it is a shortcut, not the meaning.',
        },
      ],
      explanation: 'A limit describes behaviour *near* $a$, not *at* $a$. That is what lets it handle the $\\frac{0}{0}$ situations from the tangent problem and the "infinitely many rectangles" situation from the area problem. Substitution will turn out to be a legitimate shortcut for many functions, but only because of theorems you will meet soon.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Back to the two problems',
      blocks: [
        {
          type: 'p',
          text: 'Now we can state precisely what the first card was hinting at. Both of calculus\'s founding problems have answers that are limits.',
        },
        {
          type: 'table',
          headers: ['Tangent: $h$', 'secant slope', 'Area: $n$', 'rectangle total'],
          rows: [
            ['$1$', '$3$', '$4$', '$0.21875$'],
            ['$0.1$', '$2.1$', '$10$', '$0.285$'],
            ['$0.01$', '$2.01$', '$100$', '$0.32835$'],
            ['$0.001$', '$2.001$', '$1000$', '$0.3328335$'],
            ['$\\to 0$', '$\\to 2$', '$\\to \\infty$', '$\\to \\frac{1}{3}$'],
          ],
          caption: 'Left: slopes of secants to $y = x^2$ at $x = 1$. Right: left-endpoint rectangle totals under $y = x^2$ on $[0, 1]$.',
        },
        {
          type: 'derivation',
          title: 'Where the left column comes from',
          steps: [
            { tex: 'm_{\\text{sec}}(h) = \\frac{(1 + h)^2 - 1^2}{h}', why: 'Rise over run between $(1, 1)$ and $(1 + h, (1+h)^2)$.' },
            { tex: '= \\frac{1 + 2h + h^2 - 1}{h} = \\frac{2h + h^2}{h}', why: 'Expand $(1 + h)^2 = 1 + 2h + h^2$; the $1$s cancel.' },
            { tex: '= 2 + h \\quad (h \\ne 0)', why: 'Divide each term by $h$. Allowed because a secant needs $h \\ne 0$ — exactly the "$x \\ne a$" clause of the definition.' },
            { tex: '\\lim_{h \\to 0} m_{\\text{sec}}(h) = \\lim_{h \\to 0} (2 + h) = 2', why: 'As $h$ gets close to $0$, $2 + h$ gets close to $2$.' },
          ],
          result: 'The tangent slope is $\\lim_{h \\to 0} m_{\\text{sec}}(h) = 2$, a fact the table only suggested. This little piece of algebra is a preview of the techniques in the *Computing Limits Algebraically* lesson.',
        },
        {
          type: 'p',
          text: 'The tangent slope becomes the **derivative** (Unit 3), and the limiting area becomes the **definite integral** (Unit 7). Everything in between — continuity, the rules of differentiation, optimisation — rests on the limit idea you just met.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Your game engine approximates limits every frame',
          text: 'A physics step that updates `position += velocity * dt` treats one frame as a tiny rectangle under the velocity curve; smaller `dt` means a closer approximation to the exact (limit) answer. Estimating velocity as `(pos - prevPos) / dt` is a secant slope standing in for a tangent slope. Calculus tells you what these approximations converge to, and how fast.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Approximate the area under $y = x^2$ on $[0, 1]$ using $n = 2$ left-endpoint rectangles: each has width $\\frac{1}{2}$, and its height is the value of $x^2$ at the rectangle\'s **left** edge.',
      hint: 'The left edges are $x = 0$ and $x = \\frac{1}{2}$. Add width × height for each.',
      label: 'area $\\approx$',
      answer: '1/8',
      answerTex: '\\frac{1}{8} = 0.125',
      explanation: 'The rectangles sit on $[0, \\frac{1}{2}]$ and $[\\frac{1}{2}, 1]$ with heights $0^2 = 0$ and $(\\frac{1}{2})^2 = \\frac{1}{4}$. Total: $\\frac{1}{2} \\cdot 0 + \\frac{1}{2} \\cdot \\frac{1}{4} = \\frac{1}{8} = 0.125$. That is a poor estimate of the true area $\\frac{1}{3}$, because left-edge rectangles under a rising curve leave gaps. As $n \\to \\infty$ the totals $0.21875, 0.285, 0.32835, \\dots$ approach $\\frac{1}{3}$ — the area *is* that limit.',
    },
    {
      kind: 'mcq',
      prompt: 'You evaluate $f(x) = \\dfrac{\\sqrt{x^2 + 9} - 3}{x^2}$ on a computer near $x = 0$. At $x = 0.001$ you get $0.1666666\\dots$, but at $x = 10^{-8}$ the program prints exactly $0$. What is the most reasonable conclusion?',
      options: [
        {
          text: 'The limit is probably $\\frac{1}{6}$; the $0$ is rounding error from subtracting nearly equal numbers',
          correct: true,
          why: 'At $x = 10^{-8}$, $x^2 + 9$ rounds to exactly $9$ in double precision, so the numerator becomes $3 - 3 = 0$. The trustworthy values are the moderate ones, which point to $\\frac{1}{6}$.',
        },
        {
          text: 'The limit is $0$, because the values closest to $0$ are the most accurate',
          why: 'In exact arithmetic, yes, closer is better. In floating point, extremely small $x$ makes the numerator subtract two almost-equal numbers and lose every significant digit.',
        },
        {
          text: 'The limit does not exist, because the table gives two different answers',
          why: 'The disagreement comes from the computer, not the function. Rounding error is not oscillation.',
        },
      ],
      explanation: 'This is *catastrophic cancellation*: $\\sqrt{x^2 + 9}$ is so close to $3$ that a 64-bit `double` cannot tell them apart, and the subtraction returns $0$. The limit really is $\\frac{1}{6}$, and in the *Computing Limits Algebraically* lesson you will prove it — and see how the same algebra rewrites the formula so the computer gets it right too.',
    },
  ],
  takeaways: [
    'The tangent problem (slope at a point) and the area problem (area under a curve) are both solved by limits of better and better approximations.',
    '$\\lim_{x \\to a} f(x) = L$ means $f(x)$ can be made as close to $L$ as we like by taking $x$ close enough to $a$, from both sides, with $x \\ne a$.',
    'The limit ignores $f(a)$: it can exist when $f(a)$ is undefined (a hole) or when $f(a)$ is a different number.',
    'On a graph, trace toward $x = a$ from both sides; if the heights disagree (a jump), the limit does not exist.',
    'Tables and graphs suggest limits but can mislead (oscillation, aliasing, floating-point cancellation); algebra makes them certain.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 2.1 A Preview of Calculus',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-1-a-preview-of-calculus',
      source: 'openstax',
      note: 'The tangent and area problems as motivation, with more secant and rectangle examples.',
    },
    {
      title: 'OpenStax Calculus Volume 1 — 2.2 The Limit of a Function',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function',
      source: 'openstax',
      note: 'Numerical and graphical limit estimates, including the $\\sin(\\pi/x)$-type oscillation example.',
    },
    {
      title: "Paul's Online Notes — The Limit",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/TheLimit.aspx',
      source: 'paul',
      note: 'A careful college-level walkthrough of estimating limits with tables, with notes on where it fails.',
    },
    {
      title: 'Khan Academy — Calculus 1',
      url: 'https://www.khanacademy.org/math/calculus-1',
      source: 'khan',
      note: 'The first unit has short videos and practice on reading limits from graphs and tables.',
    },
  ],
};
