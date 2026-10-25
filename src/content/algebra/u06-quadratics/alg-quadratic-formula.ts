import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-quadratic-formula',
  title: 'The Quadratic Formula and the Discriminant',
  summary: 'Complete the square once, for every quadratic at the same time, and get a formula that never fails.',
  minutes: 18,
  objectives: [
    'Derive the quadratic formula by completing the square on $ax^2 + bx + c = 0$',
    'Apply the formula accurately, including negative coefficients, and simplify the result',
    'Use the discriminant $b^2 - 4ac$ to predict the number and type of solutions',
    'Solve applied problems, such as projectile landing times, with the formula',
    'Check solutions using the sum and product of the roots',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Completing the square, once and for all',
      blocks: [
        {
          type: 'p',
          text: 'Completing the square works on every quadratic, but you repeat the same steps each time: divide by $a$, move $c$, add $\\left(\\frac{b}{2a}\\right)^2$, take roots. Mathematicians\' instinct when they repeat a computation is to do it **once, with letters**. The answer is a formula you can just plug into.',
        },
        {
          type: 'derivation',
          title: 'Solve $ax^2 + bx + c = 0$ (with $a \\neq 0$) for $x$',
          steps: [
            { tex: 'x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0', why: 'Divide every term by $a$ (allowed because $a \\neq 0$) so the $x^2$ coefficient is $1$.' },
            { tex: 'x^2 + \\frac{b}{a}x = -\\frac{c}{a}', why: 'Move the constant term to the right.' },
            { tex: 'x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a}', why: 'Half of $\\frac{b}{a}$ is $\\frac{b}{2a}$; its square is $\\frac{b^2}{4a^2}$. Add it to both sides.' },
            { tex: '\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}', why: 'Left: a perfect square by construction. Right: rewrite $\\frac{c}{a} = \\frac{4ac}{4a^2}$ to get a common denominator.' },
            { tex: 'x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a}', why: 'Square root property (assuming $b^2 - 4ac \\ge 0$). Strictly $\\sqrt{4a^2} = 2|a|$, but because of the $\\pm$ both signs are covered anyway, so $2a$ works.' },
            { tex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', why: 'Subtract $\\frac{b}{2a}$ and combine over the common denominator $2a$.' },
          ],
          result: 'Every solution of every quadratic equation is given by this one expression.',
        },
        {
          type: 'theorem',
          name: 'The quadratic formula',
          tex: 'ax^2 + bx + c = 0,\\ a \\neq 0 \\quad\\Longrightarrow\\quad x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you should know the derivation',
          text: 'The [[quadratic-formula]] is not a separate trick: it is completing the square with the arithmetic done in advance. Knowing that means you can rebuild it if you forget it, you know *why* the $2a$ sits under the whole numerator, and you understand what the square root is doing, which is exactly what the discriminant (later in this lesson) is about.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'order',
      prompt: 'Put the derivation of the quadratic formula in order.',
      lines: [
        '$ax^2 + bx + c = 0$',
        '$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$',
        '$x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a}$',
        '$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$',
        '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
      ],
      distractors: ['$x^2 + \\frac{b}{a}x + \\frac{b^2}{a^2} = \\frac{b^2}{a^2} - \\frac{c}{a}$'],
      explanation: 'Divide by $a$ and move the constant, then add the square of **half** the $x$-coefficient, $\\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2}$. The distractor squares $\\frac{b}{a}$ without halving it, the same slip as adding $100$ to $x^2 + 10x$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Using the formula without slips',
      blocks: [
        {
          type: 'p',
          text: 'The formula itself is easy; the mistakes happen in reading off $a$, $b$, $c$ and in the arithmetic. Put the equation in standard form first, write the three values down **with their signs**, and use brackets when you substitute.',
        },
        {
          type: 'derivation',
          title: 'Solve $2x^2 - 3x - 4 = 0$',
          steps: [
            { tex: 'a = 2, \\quad b = -3, \\quad c = -4', why: 'Read the coefficients from standard form, signs included.' },
            { tex: 'x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4(2)(-4)}}{2(2)}', why: 'Substitute, wrapping every negative number in brackets.' },
            { tex: '= \\frac{3 \\pm \\sqrt{9 + 32}}{4}', why: '$-(-3) = 3$; $(-3)^2 = 9$; $-4 \\cdot 2 \\cdot (-4) = +32$.' },
            { tex: '= \\frac{3 \\pm \\sqrt{41}}{4}', why: '$41$ is prime, so the radical does not simplify.' },
          ],
          result: '$x \\approx 2.351$ or $x \\approx -0.851$. Two irrational roots: this quadratic could never be factored over the integers.',
        },
        {
          type: 'derivation',
          title: 'Simplify carefully: $x^2 + 4x + 1 = 0$',
          steps: [
            { tex: 'x = \\frac{-4 \\pm \\sqrt{16 - 4}}{2} = \\frac{-4 \\pm \\sqrt{12}}{2}', why: '$a = 1$, $b = 4$, $c = 1$.' },
            { tex: '= \\frac{-4 \\pm 2\\sqrt{3}}{2}', why: 'Simplify the radical: $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$.' },
            { tex: '= \\frac{2(-2 \\pm \\sqrt{3})}{2} = -2 \\pm \\sqrt{3}', why: 'Factor $2$ out of **both** terms of the numerator, then cancel it with the denominator.' },
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\frac{-4 \\pm 2\\sqrt{3}}{2} = -2 \\pm 2\\sqrt{3}'],
            text: 'Divided only the first term by $2$. The fraction bar covers the whole numerator.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\frac{-4 \\pm 2\\sqrt{3}}{2} = \\frac{-4}{2} \\pm \\frac{2\\sqrt{3}}{2} = -2 \\pm \\sqrt{3}'],
            text: 'Split the fraction, or factor first, so every term is divided.',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$-b$ means "the opposite of $b$"',
          text: 'If $b = -3$, then $-b = 3$, and $b^2 = (-3)^2 = 9$, **not** $-9$. Typing `-3^2` into a calculator gives $-9$ because exponents come before negation; always type `(-3)^2`.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Use the quadratic formula to solve $3x^2 + 5x - 2 = 0$. Enter both solutions, separated by a comma.',
      label: '$x =$',
      answer: ['1/3', '-2'],
      hint: '$a = 3$, $b = 5$, $c = -2$. The number under the root is a perfect square.',
      explanation: '$b^2 - 4ac = 25 - 4(3)(-2) = 25 + 24 = 49$, and $\\sqrt{49} = 7$. So $x = \\frac{-5 \\pm 7}{6}$: either $\\frac{2}{6} = \\frac{1}{3}$ or $\\frac{-12}{6} = -2$. Because $49$ is a perfect square the roots are rational, and indeed $3x^2 + 5x - 2 = (3x - 1)(x + 2)$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student solves $x^2 - 6x + 4 = 0$. Tap the first incorrect line.',
      lines: [
        '$a = 1,\\ b = -6,\\ c = 4$',
        '$x = \\dfrac{-6 \\pm \\sqrt{36 - 16}}{2}$',
        '$x = \\dfrac{-6 \\pm \\sqrt{20}}{2} = \\dfrac{-6 \\pm 2\\sqrt{5}}{2}$',
        '$x = -3 \\pm \\sqrt{5}$',
      ],
      errorLines: [2],
      explanation: 'The formula starts with $-b$, and $-b = -(-6) = 6$, not $-6$. The student copied $b$ instead of its opposite. Correctly: $x = \\frac{6 \\pm \\sqrt{20}}{2} = \\frac{6 \\pm 2\\sqrt{5}}{2} = 3 \\pm \\sqrt{5}$. A quick check catches it: the roots must add to $-\\frac{b}{a} = 6$, and $3 + \\sqrt{5} + 3 - \\sqrt{5} = 6$ ✓, while the student\'s roots add to $-6$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The discriminant: how many solutions?',
      blocks: [
        {
          type: 'p',
          text: 'Look at the formula as "centre plus or minus a spread":',
        },
        {
          type: 'math',
          tex: 'x = \\underbrace{-\\frac{b}{2a}}_{\\text{centre}} \\pm \\underbrace{\\frac{\\sqrt{b^2 - 4ac}}{2a}}_{\\text{spread}}',
        },
        {
          type: 'p',
          text: 'Everything about *how many* real solutions there are is decided by the number under the square root. It gets a name.',
        },
        {
          type: 'definition',
          term: 'Discriminant',
          text: 'The [[discriminant]] of $ax^2 + bx + c$ is $D = b^2 - 4ac$.\n\n- $D > 0$: two different real solutions.\n- $D = 0$: exactly one real solution, the [[quadratic-double-root|double root]] $x = -\\frac{b}{2a}$.\n- $D < 0$: no real solutions (the square root of a negative is not real).',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 8],
          functions: [{ expr: 'a*x^2 + b*x + c', label: '$y = ax^2 + bx + c$' }],
          sliders: [
            { name: 'a', min: 0.25, max: 3, step: 0.25, value: 1, label: '$a$' },
            { name: 'b', min: -6, max: 6, step: 0.5, value: 2, label: '$b$' },
            { name: 'c', min: -5, max: 6, step: 0.5, value: -3, label: '$c$' },
          ],
          readouts: [{ label: 'discriminant $b^2 - 4ac =$', expr: 'b^2 - 4a*c', digits: 3 }],
          caption: 'Raise $c$ until the parabola lifts off the axis. The moment it stops touching, the discriminant turns negative. (Try $a = 1$, $b = 2$, $c = 1$: $D = 0$ and the vertex sits on the axis.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the discriminant tells the story',
          text: 'The two roots sit symmetrically at distance $\\frac{\\sqrt{D}}{2|a|}$ either side of the centre $-\\frac{b}{2a}$, the $x$-coordinate of the parabola\'s vertex. A positive $D$ pushes them apart; $D = 0$ makes the spread zero, so they merge at the vertex; a negative $D$ has no real square root, so there is nothing real to add or subtract.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A bonus: it tells you whether to factor',
          text: 'If $a$, $b$, $c$ are integers and $D$ is a **perfect square** ($0, 1, 4, 9, 16, \\ldots$), the roots are rational and the quadratic factors over the integers. If $D$ is positive but not a perfect square, the roots are irrational: skip factoring and use the formula.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Compute the discriminant of $2x^2 - 3x + 5 = 0$.',
      label: '$D =$',
      answer: '-31',
      hint: '$D = b^2 - 4ac$ with $a = 2$, $b = -3$, $c = 5$.',
      explanation: '$D = (-3)^2 - 4(2)(5) = 9 - 40 = -31$. Since $D < 0$ the equation has **no real solutions**: the parabola $y = 2x^2 - 3x + 5$ lies entirely above the $x$-axis. (In the next lesson you will see it has two complex solutions.)',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'How many real solutions does $4x^2 - 12x + 9 = 0$ have?',
      options: [
        { text: 'Two', why: 'That needs $D > 0$, but here $D = 0$.' },
        { text: 'Exactly one', correct: true, why: '$D = (-12)^2 - 4(4)(9) = 144 - 144 = 0$, so there is a single double root, $x = \\frac{12}{8} = \\frac{3}{2}$.' },
        { text: 'None', why: 'That needs $D < 0$. Perhaps $b^2$ was computed as $-144$; remember $(-12)^2 = +144$.' },
        { text: 'It depends on $x$', why: 'The number of solutions is a fixed property of the equation, determined by its coefficients alone.' },
      ],
      explanation: '$D = 0$ means the "spread" is zero and both roots coincide at $x = -\\frac{b}{2a} = \\frac{12}{8} = \\frac{3}{2}$. Indeed $4x^2 - 12x + 9 = (2x - 3)^2$, a perfect square trinomial.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'For which values of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution? Enter both values, separated by a comma.',
      label: '$k =$',
      answer: ['6', '-6'],
      hint: 'Exactly one solution means $D = 0$. Write $D$ in terms of $k$.',
      explanation: '$D = k^2 - 4(1)(9) = k^2 - 36$. Setting $D = 0$ gives $k^2 = 36$, so $k = \\pm 6$. Check: $x^2 + 6x + 9 = (x + 3)^2$ and $x^2 - 6x + 9 = (x - 3)^2$, both perfect squares with a single double root.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Applications: when does it land?',
      blocks: [
        {
          type: 'p',
          text: 'Under gravity alone, height is a quadratic function of time ([[projectile-motion]]). In metres and seconds, an object launched upward at $v_0$ m/s from height $y_0$ m has height $y = -4.9t^2 + v_0 t + y_0$, where $4.9 = \\frac{1}{2} \\cdot 9.8$. "When does it hit the ground?" means "solve $y = 0$", and real-world numbers almost never factor.',
        },
        {
          type: 'derivation',
          title: 'A ball is thrown up at $12$ m/s from $1.5$ m. When does it land?',
          steps: [
            { tex: '-4.9t^2 + 12t + 1.5 = 0', why: 'Set height $y = 0$.' },
            { tex: 'a = -4.9, \\quad b = 12, \\quad c = 1.5', why: 'Coefficients with signs; $a$ is negative because gravity pulls down.' },
            { tex: 'D = 12^2 - 4(-4.9)(1.5) = 144 + 29.4 = 173.4', why: '$D > 0$: two real roots.' },
            { tex: 't = \\frac{-12 \\pm \\sqrt{173.4}}{2(-4.9)} = \\frac{-12 \\pm \\sqrt{173.4}}{-9.8}', why: 'Quadratic formula.' },
            { tex: 't \\approx \\frac{-12 + 13.168}{-9.8} \\approx -0.119 \\quad\\text{or}\\quad t \\approx \\frac{-12 - 13.168}{-9.8} \\approx 2.568', why: '$\\sqrt{173.4} \\approx 13.168$.' },
            { tex: 't \\approx 2.57 \\text{ s}', why: 'The negative time is before the throw, outside the model, so reject it.' },
          ],
          result: 'The ball lands about $2.57$ seconds after it is thrown.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A quadratic solver in C++',
          text: 'Here is the formula as code. The discriminant decides which branch runs, exactly like the three cases in the definition.',
        },
        {
          type: 'code',
          title: 'quadratic.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Prints the real roots of a*x^2 + b*x + c = 0, assuming a != 0.
void solve(double a, double b, double c) {
    double d = b * b - 4 * a * c;  // the discriminant
    std::printf("a=%g b=%g c=%g: ", a, b, c);
    if (d < 0) {
        std::printf("no real roots (D = %g)\\n", d);
    } else if (d == 0) {
        std::printf("double root x = %g\\n", -b / (2 * a));
    } else {
        double r = std::sqrt(d);
        std::printf("x = %g, x = %g\\n", (-b + r) / (2 * a), (-b - r) / (2 * a));
    }
}

int main() {
    solve(1, -1, -6);
    solve(1, -6, 9);
    solve(1, 2, 5);
    solve(2, -3, -4);
}`,
          output: `a=1 b=-1 c=-6: x = 3, x = -2
a=1 b=-6 c=9: double root x = 3
a=1 b=2 c=5: no real roots (D = -16)
a=2 b=-3 c=-4: x = 2.35078, x = -0.850781`,
          annotations: [
            { lines: 6, text: 'Compute $D = b^2 - 4ac$ once and branch on its sign.' },
            { lines: '8-9', text: '$D < 0$: no real square root exists, so report that instead of calling `sqrt` on a negative (which would return NaN).' },
            { lines: '10-11', text: '$D = 0$: the double root $-\\frac{b}{2a}$.' },
            { lines: '13-14', text: 'The two roots $\\frac{-b \\pm \\sqrt{D}}{2a}$. Note the brackets around `2 * a`.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'Floating-point trap: catastrophic cancellation',
          blocks: [
            {
              type: 'p',
              text: 'For $x^2 + 10^8 x + 1 = 0$ the small root is very close to $-10^{-8}$. But in `double` arithmetic, $\\sqrt{b^2 - 4ac}$ is almost exactly $b$, so $-b + \\sqrt{D}$ subtracts two nearly equal numbers and most significant digits cancel. The code above prints about $-7.45 \\times 10^{-9}$, an error of roughly $25\\%$.',
            },
            {
              type: 'p',
              text: 'The fix used by numerical libraries: compute the root that involves *adding* numbers of the same sign, $x_1 = \\frac{-b - \\sqrt{D}}{2a}$ when $b > 0$, and get the other root from the product of the roots, $x_2 = \\frac{c}{a\\,x_1}$ (see the last card of this lesson). That gives $-1.0 \\times 10^{-8}$ to full precision. Same mathematics, very different numerics.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'In a game, a fireball\'s height (in metres) is $y = -5t^2 + 20t + 25$, $t$ seconds after launch. When does it hit the ground ($y = 0$)?',
      label: '$t =$',
      unit: 's',
      answer: '5',
      hint: 'Divide everything by $-5$ first to get smaller numbers, then factor or use the formula. Reject any negative time.',
      explanation: 'Dividing by $-5$: $t^2 - 4t - 5 = 0$. The formula gives $t = \\frac{4 \\pm \\sqrt{16 + 20}}{2} = \\frac{4 \\pm 6}{2}$, so $t = 5$ or $t = -1$. (It also factors: $(t - 5)(t + 1) = 0$.) Time before launch is meaningless here, so the fireball lands at $t = 5$ s.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If $a$ and $c$ have opposite signs (one positive, one negative), then $ax^2 + bx + c = 0$ always has two real solutions.',
      answer: true,
      explanation: 'If $a$ and $c$ have opposite signs then $ac < 0$, so $-4ac > 0$. Since $b^2 \\ge 0$, the discriminant $b^2 - 4ac$ is a non-negative number plus a positive number: strictly positive. Two real roots, whatever $b$ is. Graphically: if $a > 0$ and $c < 0$, the parabola opens up but its $y$-intercept is below the axis, so it must cross the axis on both sides.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'A built-in check: sum and product of the roots',
      blocks: [
        {
          type: 'p',
          text: 'Adding and multiplying the two roots from the formula gives two remarkably simple results, known as [[vietas-formulas]]. They are the fastest way to check your answers.',
        },
        {
          type: 'derivation',
          title: 'Sum and product of $r_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$',
          steps: [
            { tex: 'r_1 + r_2 = \\frac{-b + \\sqrt{D}}{2a} + \\frac{-b - \\sqrt{D}}{2a} = \\frac{-2b}{2a} = -\\frac{b}{a}', why: 'Same denominator, so add numerators; the square roots cancel.' },
            { tex: 'r_1 r_2 = \\frac{(-b + \\sqrt{D})(-b - \\sqrt{D})}{4a^2} = \\frac{b^2 - D}{4a^2}', why: 'Multiply numerators; they form a [[difference-of-squares]]: $(-b)^2 - (\\sqrt{D})^2$.' },
            { tex: '= \\frac{b^2 - (b^2 - 4ac)}{4a^2} = \\frac{4ac}{4a^2} = \\frac{c}{a}', why: 'Substitute $D = b^2 - 4ac$ and simplify.' },
          ],
          result: 'For $ax^2 + bx + c = 0$: $\\;r_1 + r_2 = -\\dfrac{b}{a}$ and $r_1 r_2 = \\dfrac{c}{a}$.',
        },
        {
          type: 'p',
          text: 'Check the first example, $2x^2 - 3x - 4 = 0$ with roots $\\frac{3 \\pm \\sqrt{41}}{4}$: the sum is $\\frac{6}{4} = \\frac{3}{2} = -\\frac{-3}{2}$ ✓, and the product is $\\frac{9 - 41}{16} = -2 = \\frac{-4}{2}$ ✓.',
        },
        {
          type: 'p',
          text: 'Running the idea backwards builds a quadratic from its roots: if the roots are $r_1$ and $r_2$, then $(x - r_1)(x - r_2) = x^2 - (r_1 + r_2)x + r_1 r_2$ has exactly those roots.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A typical exam asks you to choose the most efficient method. Factoring when $D$ is a perfect square, the square root property when $b = 0$, the formula otherwise. Whichever you use, a 10-second sum-and-product check catches most sign errors before the grader does.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Without solving, find the sum and product of the roots.',
      template: 'For $2x^2 - 7x + 3 = 0$, the roots add to ___ and multiply to ___.',
      blanks: [{ answers: ['$\\frac{7}{2}$'] }, { answers: ['$\\frac{3}{2}$'] }],
      wordBank: ['$\\frac{7}{2}$', '$\\frac{3}{2}$', '$-\\frac{7}{2}$', '$7$', '$3$', '$-\\frac{3}{2}$'],
      explanation: 'Sum $= -\\frac{b}{a} = -\\frac{-7}{2} = \\frac{7}{2}$; product $= \\frac{c}{a} = \\frac{3}{2}$. Check by factoring: $2x^2 - 7x + 3 = (2x - 1)(x - 3)$, roots $\\frac{1}{2}$ and $3$, which add to $\\frac{7}{2}$ and multiply to $\\frac{3}{2}$. Forgetting to divide by $a$ gives $7$ and $3$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'expr',
      prompt: 'Write a quadratic of the form $x^2 + bx + c$ whose roots are $3$ and $-5$.',
      label: '$x^2 + bx + c =$',
      answer: 'x^2 + 2x - 15',
      answerTex: 'x^2 + 2x - 15',
      hint: 'Use $(x - r_1)(x - r_2)$, or: $b = -(\\text{sum})$, $c = \\text{product}$.',
      explanation: 'The sum of the roots is $3 + (-5) = -2$ and the product is $-15$, so $x^2 - (-2)x + (-15) = x^2 + 2x - 15$. Equivalently $(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15$. Watch the signs: a root of $-5$ gives the factor $(x + 5)$.',
    },
  ],
  takeaways: [
    'The quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ is completing the square done once, in general.',
    'Write $a$, $b$, $c$ with their signs, bracket negatives, and remember the $2a$ divides the **whole** numerator.',
    'The discriminant $D = b^2 - 4ac$ decides everything: $D > 0$ two real roots, $D = 0$ one double root, $D < 0$ no real roots.',
    'Integer coefficients with a perfect-square $D$ means rational roots, so the quadratic factors.',
    'Roots satisfy $r_1 + r_2 = -\\frac{b}{a}$ and $r_1 r_2 = \\frac{c}{a}$: a quick check on any answer.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.5 Quadratic Equations',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations',
      source: 'openstax',
      note: 'Derives the quadratic formula and works through the discriminant cases with practice problems.',
    },
    {
      title: "Paul's Online Notes — Quadratic Equations, Part II",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SolveQuadraticEqnsII.aspx',
      source: 'paul',
      note: 'The quadratic formula with many examples, including ones with complex solutions.',
    },
    {
      title: 'Wikipedia — Quadratic formula',
      url: 'https://en.wikipedia.org/wiki/Quadratic_formula',
      source: 'wikipedia',
      note: 'Several alternative derivations, the history, and a section on numerically stable computation.',
    },
  ],
};
