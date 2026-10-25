import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-tangent-lines',
  title: 'Tangent Lines and the Derivative at a Point',
  summary: 'From the slope of a secant to the slope at a single instant: the idea that launched calculus.',
  minutes: 16,
  objectives: [
    'Compute the slope of a secant line as an average rate of change',
    'Explain why the tangent slope is a *limit* of secant slopes',
    'Use the definition $f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$ to find a derivative at a point',
    'Write the equation of the tangent line at a point',
    'Recognise points where a tangent line does not exist',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The problem: slope at a single point',
      blocks: [
        {
          type: 'p',
          text: 'In algebra, slope needs **two points**: rise over run. A straight line has the same slope everywhere, so any two points give the same answer. But most interesting functions curve. A car speeds up, a population grows faster and faster, a projectile slows as it climbs. For a curve, the steepness changes from point to point.',
        },
        {
          type: 'p',
          text: 'So what could "the slope of $y = x^2$ at $x = 1$" even mean? There is only *one* point there, and the slope formula $\\frac{y_2 - y_1}{x_2 - x_1}$ would give $\\frac{0}{0}$. That single question — how steep is a curve *right here*? — is where differential calculus begins.',
        },
        {
          type: 'graph',
          x: [-1, 3],
          y: [-1, 6],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          tangents: [{ expr: 'x^2', at: 1, label: 'slope = ?' }],
          caption: 'The orange line just touches the parabola at $(1, 1)$. Our goal: find its slope using only the formula $f(x) = x^2$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we care about slope at a point',
          text: 'Slope at a point is an **instantaneous rate of change**: the speedometer reading rather than your average speed for the trip. Physics (velocity, acceleration), economics (marginal cost), machine learning (gradient descent) and game physics (how fast a value is changing *this frame*) all run on this one idea.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Secant lines: slope from two points',
      blocks: [
        {
          type: 'p',
          text: 'We cannot use one point, so we cheat: pick a second point on the curve, close to the first, and draw the line through both. A line through two points of a curve is a [[secant-line]]. Its slope is something we already know how to compute — the [[average-rate-of-change]] of $f$ between the two $x$-values.',
        },
        {
          type: 'math',
          tex: 'm_{\\text{sec}} = \\frac{f(a+h) - f(a)}{(a+h) - a} = \\frac{f(a+h) - f(a)}{h}',
          caption: 'The second point sits a horizontal distance $h$ away from $x = a$.',
        },
        {
          type: 'p',
          text: 'This fraction is called the [[difference-quotient]]. Drag the slider to move the second point. Watch the secant line pivot as $h$ shrinks.',
        },
        {
          type: 'graph',
          x: [-1, 3.2],
          y: [-1, 8],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          tangents: [{ expr: 'x^2', at: 1, secantTo: '1 + h', color: 'purple' }],
          sliders: [{ name: 'h', min: 0.01, max: 2, step: 0.01, value: 1.5, label: '$h$' }],
          readouts: [{ label: 'secant slope $= \\frac{(1+h)^2 - 1}{h} =$', expr: '((1+h)^2 - 1)/h', digits: 4 }],
          caption: 'As $h \\to 0$ the purple secant turns into the tangent line, and its slope settles toward one number.',
        },
        {
          type: 'table',
          headers: ['$h$', 'second point', 'secant slope'],
          rows: [
            ['$1$', '$(2, 4)$', '$3$'],
            ['$0.5$', '$(1.5, 2.25)$', '$2.5$'],
            ['$0.1$', '$(1.1, 1.21)$', '$2.1$'],
            ['$0.01$', '$(1.01, 1.0201)$', '$2.01$'],
            ['$0.001$', '$(1.001, 1.002001)$', '$2.001$'],
          ],
          caption: 'Secant slopes for $f(x) = x^2$ at $a = 1$. The pattern is hard to miss.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'For $f(x) = x^2$, find the slope of the secant line through the points where $x = 1$ and $x = 3$.',
      hint: 'Slope is rise over run: $\\frac{f(3) - f(1)}{3 - 1}$.',
      answer: '4',
      explanation: 'The points are $(1, 1)$ and $(3, 9)$, so the slope is $\\frac{9 - 1}{3 - 1} = \\frac{8}{2} = 4$. That is the *average* rate of change of $x^2$ over $[1, 3]$ — notice it is bigger than the tangent slope at $x = 1$, because the parabola keeps getting steeper to the right.',
    },
    {
      kind: 'concept',
      title: 'From secant to tangent: take the limit',
      blocks: [
        {
          type: 'p',
          text: 'The table suggests the secant slopes approach $2$ as $h$ shrinks. We can never plug in $h = 0$ — that is the forbidden $\\frac{0}{0}$ — but we can ask what the slopes *approach*. That is precisely what a [[limit]] measures. The [[tangent-line]] at $x = a$ is the line through $(a, f(a))$ whose slope is that limit.',
        },
        {
          type: 'definition',
          term: 'The derivative at a point',
          text: 'The **derivative of $f$ at $a$**, written $f\'(a)$, is\n\n$$f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$\n\nprovided this limit exists. Geometrically, $f\'(a)$ is the slope of the tangent line at $(a, f(a))$; physically, it is the instantaneous rate of change of $f$ at $a$.',
        },
        {
          type: 'derivation',
          title: 'Find $f\'(1)$ for $f(x) = x^2$',
          steps: [
            { tex: "f'(1) = \\lim_{h \\to 0} \\frac{f(1+h) - f(1)}{h}", why: 'Start from the definition with $a = 1$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{(1+h)^2 - 1^2}{h}', why: 'Evaluate $f$ at both points: square each input.' },
            { tex: '= \\lim_{h \\to 0} \\frac{1 + 2h + h^2 - 1}{h}', why: 'Expand $(1+h)^2 = 1 + 2h + h^2$. Never write $1 + h^2$ — that drops the middle term.' },
            { tex: '= \\lim_{h \\to 0} \\frac{2h + h^2}{h}', why: 'The constants cancel. They always do in a correct difference quotient — a good self-check.' },
            { tex: '= \\lim_{h \\to 0} (2 + h)', why: 'Factor $h$ out of the numerator and cancel it with the denominator. This is legal because $h \\neq 0$ while we take the limit.' },
            { tex: '= 2', why: 'Now the expression is continuous in $h$, so substitute $h = 0$.' },
          ],
          result: 'The tangent line to $y = x^2$ at $(1, 1)$ has slope exactly $2$ — matching the table.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the cancellation step is the whole trick',
          text: 'Every difference quotient starts as $\\frac{0}{0}$ when $h = 0$. Algebra (expanding, factoring, rationalising) rewrites it into a form where the $h$ in the denominator cancels. After that, the limit is just substitution. If your $h$ never cancels, look for an algebra mistake before anything else.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for computing $f\'(a)$ from the definition in the right order.',
      lines: [
        'Write $\\frac{f(a+h) - f(a)}{h}$',
        'Substitute the formula for $f$ and expand',
        'Simplify the numerator until every term has a factor of $h$',
        'Cancel the $h$ in the denominator',
        'Let $h \\to 0$ by substituting $h = 0$',
      ],
      distractors: ['Substitute $h = 0$ into the original fraction'],
      explanation: 'You cannot substitute $h = 0$ at the start — that gives $\\frac{0}{0}$. The algebra (expand, simplify, cancel $h$) must come first; only then is the limit a simple substitution. The distractor is exactly the mistake the definition is designed to avoid.',
    },
    {
      kind: 'concept',
      title: 'The equation of the tangent line',
      blocks: [
        {
          type: 'p',
          text: 'Once you have the slope, the tangent line is ordinary algebra. You know a point, $(a, f(a))$, and a slope, $f\'(a)$, so use [[point-slope-form]]:',
        },
        {
          type: 'theorem',
          name: 'Tangent line at $x = a$',
          tex: 'y - f(a) = f\'(a)\\,(x - a)',
        },
        {
          type: 'derivation',
          title: 'Tangent line to $f(x) = x^2$ at $x = 1$',
          steps: [
            { tex: 'f(1) = 1, \\quad f\'(1) = 2', why: 'The point is $(1, 1)$; the slope came from the previous card.' },
            { tex: 'y - 1 = 2(x - 1)', why: 'Point-slope form with $a = 1$.' },
            { tex: 'y = 2x - 1', why: 'Distribute and add $1$ to both sides to get slope-intercept form.' },
          ],
          result: 'The tangent line is $y = 2x - 1$.',
        },
        {
          type: 'graph',
          x: [-2, 3],
          y: [-3, 7],
          functions: [
            { expr: 'x^2', label: '$y = x^2$' },
            { expr: '2x - 1', label: '$y = 2x - 1$', color: 'orange', dashed: true },
          ],
          points: [{ x: 1, y: 1, label: '(1, 1)' }],
          caption: 'Zoom in near $(1, 1)$ and the parabola and its tangent line become almost indistinguishable — the tangent is the best straight-line approximation of the curve there.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Derivatives in a game loop',
          text: 'Physics engines rarely compute derivatives symbolically. Instead they use the difference quotient directly with a tiny $h$ — in a game that is often the frame time $\\Delta t$. Velocity is estimated as $\\frac{\\text{position}(t + \\Delta t) - \\text{position}(t)}{\\Delta t}$: a secant slope that is "close enough" to the tangent slope when frames are short.',
        },
        {
          type: 'code',
          title: 'slope.cpp',
          runnable: true,
          code: `#include <cstdio>

double f(double x) { return x * x; }

int main() {
    const double a = 1.0;
    for (double h = 1.0; h >= 1e-4; h /= 10) {
        double slope = (f(a + h) - f(a)) / h;
        std::printf("h = %g  slope = %.6f\\n", h, slope);
    }
}`,
          output: `h = 1  slope = 3.000000
h = 0.1  slope = 2.100000
h = 0.01  slope = 2.010000
h = 0.001  slope = 2.001000
h = 0.0001  slope = 2.000100`,
          annotations: [
            { lines: 3, text: 'The function we are differentiating, $f(x) = x^2$.' },
            { lines: 7, text: 'Shrink $h$ by a factor of 10 each pass: $1, 0.1, 0.01, \\dots$' },
            { lines: 8, text: 'The difference quotient — a secant slope computed numerically.' },
          ],
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'The derivative of $f(x) = x^2$ at $x = 3$ is $f\'(3) = 6$. Write the equation of the tangent line at $x = 3$ in the form $y = mx + b$.',
      label: '$y =$',
      answer: '6x - 9',
      hint: 'The point is $(3, f(3)) = (3, 9)$. Use $y - 9 = 6(x - 3)$.',
      explanation: 'Point-slope form gives $y - 9 = 6(x - 3)$, so $y = 6x - 18 + 9 = 6x - 9$. Check: at $x = 3$ the line gives $18 - 9 = 9 = f(3)$, so it does pass through the point of tangency.',
    },
    {
      kind: 'concept',
      title: 'A second example: $f(x) = \\frac{1}{x}$',
      blocks: [
        {
          type: 'p',
          text: 'The same recipe works for any function; only the algebra in the middle changes. With a fraction, the move that makes $h$ cancel is combining over a common denominator.',
        },
        {
          type: 'derivation',
          title: 'Find $f\'(2)$ for $f(x) = \\frac{1}{x}$',
          steps: [
            { tex: "f'(2) = \\lim_{h \\to 0} \\frac{\\frac{1}{2+h} - \\frac{1}{2}}{h}", why: 'Definition with $a = 2$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{\\frac{2 - (2+h)}{2(2+h)}}{h}', why: 'Combine the two fractions in the numerator over the common denominator $2(2+h)$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{-h}{2h(2+h)}', why: 'Simplify $2 - (2+h) = -h$, and dividing by $h$ multiplies the denominator by $h$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{-1}{2(2+h)}', why: 'Cancel $h$ — the step every difference quotient is built around.' },
            { tex: '= -\\frac{1}{4}', why: 'Substitute $h = 0$: $\\frac{-1}{2 \\cdot 2}$.' },
          ],
          result: '$f\'(2) = -\\frac{1}{4}$: the curve is falling gently at $x = 2$.',
        },
        {
          type: 'graph',
          x: [0, 5],
          y: [-0.5, 2.5],
          functions: [{ expr: '1/x', label: '$y = \\frac{1}{x}$' }],
          tangents: [{ expr: '1/x', at: 'a' }],
          sliders: [{ name: 'a', min: 0.4, max: 4.5, step: 0.05, value: 2, label: '$a$' }],
          readouts: [{ label: 'tangent slope $f\'(a) \\approx$', expr: '-1/a^2', digits: 4 }],
          caption: 'Slide $a$: the tangent slope is always negative, steep near $0$ and nearly flat for large $a$. (In the next lesson you will prove $f\'(a) = -\\frac{1}{a^2}$.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The most common algebra slip',
          text: '$f(a + h)$ means "replace **every** $x$ with $a + h$". For $f(x) = 3x^2 + x$ that is $3(a+h)^2 + (a+h)$, not $3a^2 + h$ and not $f(a) + h$. Writing $f(a+h) = f(a) + f(h)$ is false for almost every function.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student computes $f\'(1)$ for $f(x) = x^2 + 3x$. Tap the first line that is wrong.',
      lines: [
        '$f\'(1) = \\lim_{h \\to 0} \\frac{f(1+h) - f(1)}{h}$',
        '$= \\lim_{h \\to 0} \\frac{(1 + h^2) + 3(1+h) - 4}{h}$',
        '$= \\lim_{h \\to 0} \\frac{h^2 + 3h}{h}$',
        '$= \\lim_{h \\to 0} (h + 3) = 3$',
      ],
      errorLines: [2],
      explanation: 'Line 2 squares $(1 + h)$ as $1 + h^2$, losing the middle term $2h$. Correctly, $(1+h)^2 = 1 + 2h + h^2$, so the numerator is $1 + 2h + h^2 + 3 + 3h - 4 = h^2 + 5h$, and $f\'(1) = \\lim_{h\\to 0}(h + 5) = 5$. Everything after line 2 is carried out correctly — on the wrong expression.',
    },
    {
      kind: 'numeric',
      prompt: 'Use the definition of the derivative to find $f\'(1)$ for $f(x) = x^2 + 3x$.',
      hint: 'Expand $(1+h)^2 + 3(1+h)$ carefully, subtract $f(1) = 4$, then cancel $h$.',
      label: "$f'(1) =$",
      answer: '5',
      explanation: '$\\frac{(1+h)^2 + 3(1+h) - 4}{h} = \\frac{1 + 2h + h^2 + 3 + 3h - 4}{h} = \\frac{h^2 + 5h}{h} = h + 5 \\to 5$. Notice the answer is $2 \\cdot 1 + 3$: the slope of $x^2$ at $1$ (which is $2$) plus the slope of the line $3x$ (which is $3$). That is no coincidence — it previews the sum rule.',
    },
    {
      kind: 'concept',
      title: 'When there is no tangent line',
      blocks: [
        {
          type: 'p',
          text: 'The definition says "provided this limit exists" for a reason. If the secant slopes do not settle on a single finite number, $f\'(a)$ does not exist and $f$ is not [[differentiable]] at $a$. There are three classic ways this happens:',
        },
        {
          type: 'list',
          items: [
            '**A corner.** $f(x) = |x|$ at $0$: secants from the right have slope $1$, from the left slope $-1$. The one-sided limits disagree, so there is no single tangent.',
            '**A vertical tangent.** $f(x) = \\sqrt[3]{x}$ at $0$: the secants get steeper without bound and the slopes go to $\\infty$, which is not a number.',
            '**A break.** If $f$ is not continuous at $a$ (a jump or a hole), the secant slopes blow up. Differentiable functions are always continuous.',
          ],
        },
        {
          type: 'graph',
          x: [-2, 2],
          y: [-1.5, 2],
          equal: true,
          functions: [
            { expr: 'abs(x)', label: '$y = |x|$ (corner)' },
            { expr: 'cbrt(x)', label: '$y = \\sqrt[3]{x}$ (vertical tangent)', color: 'purple' },
          ],
          points: [{ x: 0, y: 0 }],
          caption: 'Both functions are continuous at $0$, yet neither has a derivative there.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors love asking "is $f$ differentiable at $a$?" for piecewise functions. Check continuity first; then compute the left and right limits of the difference quotient separately. Differentiable means *both* one-sided limits exist and are equal.',
        },
        {
          type: 'deepdive',
          title: 'Two equivalent ways to write the definition',
          blocks: [
            {
              type: 'p',
              text: 'If you write the second point as $x$ instead of $a + h$, then $h = x - a$ and "$h \\to 0$" becomes "$x \\to a$":',
            },
            { type: 'math', tex: "f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}" },
            {
              type: 'p',
              text: 'Both forms define the same number. The $h$-form tends to be easier when $f$ involves powers (expand $(a+h)^n$); the $x$-form is handy when the numerator factors, as in $\\frac{x^2 - a^2}{x - a} = x + a$.',
            },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which statement about $f(x) = |x|$ at $x = 0$ is correct?',
      options: [
        {
          text: 'It is continuous but not differentiable',
          correct: true,
          why: 'Its graph has no break, but the left-hand slope is $-1$ and the right-hand slope is $1$, so the derivative limit does not exist.',
        },
        {
          text: 'It is differentiable with $f\'(0) = 0$',
          why: 'Averaging the two one-sided slopes is not allowed. The limit must exist, and here the one-sided limits disagree.',
        },
        {
          text: 'It is neither continuous nor differentiable',
          why: '$|x|$ is continuous everywhere: $\\lim_{x \\to 0}|x| = 0 = |0|$. The problem is the corner, not a break.',
        },
        {
          text: 'It is differentiable but not continuous',
          why: 'That combination is impossible: every differentiable function is continuous.',
        },
      ],
      explanation: 'The difference quotient is $\\frac{|h|}{h}$, which equals $1$ for $h > 0$ and $-1$ for $h < 0$. Because the two one-sided limits differ, $f\'(0)$ does not exist — even though the graph is perfectly connected.',
    },
    {
      kind: 'truefalse',
      prompt: 'If $f$ is continuous at $x = a$, then $f$ must be differentiable at $x = a$.',
      answer: false,
      explanation: 'Continuity is necessary for differentiability but not sufficient. $|x|$ (a corner) and $\\sqrt[3]{x}$ (a vertical tangent) are both continuous at $0$ without having a derivative there. The true statement runs the other way: differentiable implies continuous.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the definition of the derivative at a point.',
      template: 'In $f\'(a) = \\lim\\limits_{h \\to \\,?} \\dfrac{f(a + h) - \\square}{h}$, the limit is taken as $h$ approaches ___ and the missing term $\\square$ is ___.',
      blanks: [{ answers: ['$0$'] }, { answers: ['$f(a)$'] }],
      wordBank: ['$0$', '$f(a)$', '$\\infty$', '$f(h)$', '$a$', '$h$'],
      explanation: 'The second point slides toward the first as $h \\to 0$, and the rise is $f(a + h) - f(a)$: the change in output between the two points. Using $f(h)$ instead would measure the height at $x = h$, a completely different point.',
    },
  ],
  takeaways: [
    'A secant slope $\\frac{f(a+h) - f(a)}{h}$ is an average rate of change over an interval of width $h$.',
    'The tangent slope is the limit of secant slopes: $f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$.',
    'To evaluate the limit, simplify algebraically until the $h$ in the denominator cancels, then substitute $h = 0$.',
    'The tangent line at $x = a$ is $y - f(a) = f\'(a)(x - a)$.',
    'Corners, vertical tangents and discontinuities are places where $f\'(a)$ does not exist; differentiable implies continuous, not the reverse.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 3.1 Defining the Derivative',
      url: 'https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative',
      source: 'openstax',
      note: 'Free textbook section with more worked examples of tangent lines from the definition.',
    },
    {
      title: "Paul's Online Notes — Tangent Lines and Rates of Change",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/Tangents_Rates.aspx',
      source: 'paul',
      note: 'The classic college-course treatment, with numerical tables like the one in this lesson.',
    },
    {
      title: '3Blue1Brown — The paradox of the derivative',
      url: 'https://www.youtube.com/watch?v=9vKqVkMQHKk',
      source: 'video',
      note: 'A beautifully animated explanation of what "instantaneous rate of change" really means.',
    },
  ],
};
