import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-power-rule',
  title: 'The Power Rule and Basic Rules',
  summary: 'Stop computing limits by hand: prove the power, constant-multiple and sum rules once, then differentiate any polynomial (and $e^x$) in seconds.',
  minutes: 18,
  objectives: [
    'Prove that $\\frac{d}{dx}x^n = nx^{n-1}$ for positive integers $n$ using the binomial theorem',
    'Apply the power rule to negative and fractional exponents by rewriting roots and reciprocals',
    'Justify and use the constant-multiple, sum and difference rules',
    'Explain why $\\frac{d}{dx}e^x = e^x$ follows from the way $e$ is defined',
    'Differentiate polynomials quickly and find where their tangent lines are horizontal',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Why we want rules',
      blocks: [
        {
          type: 'p',
          text: 'In the last unit you found every [[derivative]] straight from the limit definition $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$. It always works, but it is slow: expanding $(x+h)^7$ by hand just to get one slope is nobody\'s idea of fun, and one algebra slip ruins the answer.',
        },
        {
          type: 'p',
          text: 'The plan for this unit: do the limit work **once, in general**, and package the result as a rule. After that, differentiating is pattern-matching. We start with the two simplest functions there are. We will use [[leibniz-notation]] $\\frac{d}{dx}\\big[\\,\\cdot\\,\\big]$, read "the derivative with respect to $x$ of".',
        },
        {
          type: 'derivation',
          title: 'Two rules straight from the definition',
          steps: [
            { tex: '\\frac{d}{dx}[c] = \\lim_{h \\to 0} \\frac{c - c}{h}', why: 'For a constant function $f(x) = c$, both $f(x+h)$ and $f(x)$ equal $c$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{0}{h} = 0', why: 'The numerator is exactly $0$ for every $h \\ne 0$, so the quotient is $0$ and so is its limit.' },
            { tex: '\\frac{d}{dx}[x] = \\lim_{h \\to 0} \\frac{(x+h) - x}{h}', why: 'Now take $f(x) = x$, so $f(x+h) = x + h$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{h}{h} = 1', why: 'The $x$ terms cancel, leaving $\\frac{h}{h} = 1$ for every $h \\ne 0$.' },
          ],
          result: 'The derivative of a constant is $0$, and the derivative of $x$ is $1$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 4],
          equal: true,
          functions: [
            { expr: '2.5', label: '$y = 2.5$ (slope $0$)', color: 'blue' },
            { expr: 'x', label: '$y = x$ (slope $1$)', color: 'red' },
          ],
          caption: 'A horizontal line never rises, so its slope is $0$ everywhere. The line $y = x$ rises $1$ for every $1$ it runs.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these match the pictures',
          text: 'A derivative is a slope. A constant function is a flat line, and $y = x$ is a line of slope $1$ — the limit definition just confirms what the graphs already say. That is the test every rule in this unit must pass: it has to agree with the definition, and it has to agree with the picture.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'The power rule for positive integers',
      blocks: [
        {
          type: 'p',
          text: 'Earlier you found $\\frac{d}{dx}x^2 = 2x$ from the definition, and you may have seen $\\frac{d}{dx}x^3 = 3x^2$. The pattern — bring the exponent down, then lower it by one — is the [[power-rule]], and it holds for every power. To see why, we need to expand $(x+h)^n$, and the [[binomial-theorem]] tells us exactly what that expansion looks like.',
        },
        {
          type: 'theorem',
          name: 'The Power Rule (positive integers)',
          tex: '\\frac{d}{dx}\\, x^n = n\\,x^{n-1} \\qquad (n = 1, 2, 3, \\dots)',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '\\frac{d}{dx}x^n = \\lim_{h \\to 0} \\frac{(x+h)^n - x^n}{h}', why: 'The limit definition with $f(x) = x^n$.' },
            { tex: '(x+h)^n = x^n + n x^{n-1} h + \\binom{n}{2} x^{n-2} h^2 + \\cdots + h^n', why: 'The binomial theorem. The first term is $\\binom{n}{0}x^n = x^n$ and the second is $\\binom{n}{1}x^{n-1}h = nx^{n-1}h$. Every later term contains $h^2$ or a higher power of $h$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{n x^{n-1} h + \\binom{n}{2} x^{n-2} h^2 + \\cdots + h^n}{h}', why: 'Substitute the expansion: the $x^n$ terms cancel, as the constant terms always do in a correct difference quotient.' },
            { tex: '= \\lim_{h \\to 0} \\left( n x^{n-1} + \\binom{n}{2} x^{n-2} h + \\cdots + h^{n-1} \\right)', why: 'Every remaining term has at least one factor of $h$, so divide each by $h$ (legal because $h \\ne 0$ inside the limit).' },
            { tex: '= n x^{n-1}', why: 'Now let $h \\to 0$: the first term has no $h$ and survives; every other term still contains a factor of $h$ and goes to $0$.' },
          ],
          result: 'For every positive integer $n$, $\\frac{d}{dx}x^n = nx^{n-1}$.',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-4, 6],
          functions: [{ expr: 'x^n', label: '$y = x^n$' }],
          tangents: [{ expr: 'x^n', at: 'a' }],
          points: [{ x: 'a', y: 'a^n' }],
          sliders: [
            { name: 'n', min: 1, max: 5, step: 1, value: 3, label: '$n$' },
            { name: 'a', min: -1.8, max: 1.8, step: 0.05, value: 1, label: '$a$' },
          ],
          readouts: [{ label: 'power rule slope $n a^{n-1} =$', expr: 'n*a^(n-1)', digits: 4 }],
          caption: 'Pick a power and slide the point. The orange tangent (whose slope the app computes numerically) always matches the power-rule prediction $na^{n-1}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only the second term survives',
          text: 'Dividing by $h$ knocks exactly one power of $h$ off each term. The term $nx^{n-1}h$ had exactly one, so it loses its $h$ entirely; every later term had two or more, so it still carries an $h$ and vanishes in the limit. The "$n$" in front is simply the number of ways to pick a single $h$ out of $n$ factors of $(x + h)$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = x^5$. Use the power rule to find $f\'(2)$.',
      hint: 'First find $f\'(x)$, then substitute $x = 2$.',
      label: "$f'(2) =$",
      answer: '80',
      explanation: 'The power rule gives $f\'(x) = 5x^4$, so $f\'(2) = 5 \\cdot 2^4 = 5 \\cdot 16 = 80$. Compare that with expanding $(2 + h)^5$ by hand — the rule does in one line what the definition does in ten.',
    },
    {
      kind: 'concept',
      title: 'Any exponent: roots and reciprocals',
      blocks: [
        {
          type: 'p',
          text: 'The power rule is far more general than our proof. It holds for **every real exponent** $n$, on any interval where $x^n$ is defined (and, for $n < 1$, away from $x = 0$). You will prove the negative-integer case in the next lesson with the quotient rule, and the general case later in this unit. For now, use it confidently:',
        },
        {
          type: 'theorem',
          name: 'The Power Rule (general)',
          tex: '\\frac{d}{dx}\\, x^n = n\\,x^{n-1} \\qquad \\text{for every real number } n',
        },
        {
          type: 'p',
          text: 'The catch: the rule only applies to the form $x^n$. Roots and reciprocals must first be rewritten with [[rational-exponent|rational]] or negative exponents, using $\\sqrt[q]{x^p} = x^{p/q}$ and $\\frac{1}{x^n} = x^{-n}$.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $\\frac{1}{x^2}$ and $\\sqrt{x}$',
          steps: [
            { tex: '\\frac{d}{dx}\\frac{1}{x^2} = \\frac{d}{dx}x^{-2}', why: 'Rewrite the reciprocal as a negative power so the rule applies.' },
            { tex: '= -2x^{-3} = -\\frac{2}{x^3}', why: 'Bring down $-2$ and subtract one from the exponent: $-2 - 1 = -3$, *not* $-1$.' },
            { tex: '\\frac{d}{dx}\\sqrt{x} = \\frac{d}{dx}x^{1/2}', why: 'A square root is the power $\\frac{1}{2}$.' },
            { tex: '= \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}', why: 'Bring down $\\frac{1}{2}$; the new exponent is $\\frac{1}{2} - 1 = -\\frac{1}{2}$, which means one over a square root. Valid for $x > 0$.' },
          ],
          result: '$\\frac{d}{dx}x^{-2} = -\\frac{2}{x^3}$ and $\\frac{d}{dx}\\sqrt{x} = \\frac{1}{2\\sqrt{x}}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic slips',
          text: '**1.** "Subtract one" from a negative exponent makes it *more* negative: $x^{-2} \\to x^{-3}$. Students often write $x^{-1}$.\n\n**2.** Never differentiate a denominator on its own: $\\frac{d}{dx}\\frac{1}{x^3}$ is **not** $\\frac{1}{3x^2}$. Rewrite as $x^{-3}$ first; the answer is $-3x^{-4}$.',
        },
        {
          type: 'p',
          text: 'Notice that $\\sqrt{x}$ is defined at $x = 0$ but its derivative $\\frac{1}{2\\sqrt{x}}$ is not: the graph of $\\sqrt{x}$ leaves the origin with a vertical tangent, just like the cube root you saw in the previous unit.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is $\\dfrac{d}{dx}\\left(\\dfrac{1}{x^3}\\right)$?',
      options: [
        { text: '$-\\dfrac{3}{x^2}$', why: 'This adds one to the exponent: $-3 + 1 = -2$. The rule *subtracts* one, so the exponent becomes $-4$.' },
        { text: '$\\dfrac{1}{3x^2}$', why: 'This differentiates the denominator by itself and leaves it downstairs. Derivatives do not work that way; rewrite as $x^{-3}$ first.' },
        { text: '$-\\dfrac{3}{x^4}$', correct: true, why: 'Rewrite as $x^{-3}$; the power rule gives $-3x^{-4} = -\\frac{3}{x^4}$.' },
        { text: '$-3x^{-3}$', why: 'The exponent was brought down but never lowered. Both halves of the rule are needed.' },
      ],
      explanation: '$\\frac{1}{x^3} = x^{-3}$, so $\\frac{d}{dx}x^{-3} = -3x^{-3-1} = -3x^{-4} = -\\frac{3}{x^4}$. Sanity check with the graph: for $x > 0$, $\\frac{1}{x^3}$ is decreasing, so its derivative should be negative — and it is.',
    },
    {
      kind: 'concept',
      title: 'Constant multiples, sums and polynomials',
      blocks: [
        {
          type: 'p',
          text: 'Two more rules let us combine powers. Both come straight from the [[limit-laws]]: a constant factor can be pulled out of a limit, and the limit of a sum is the sum of the limits (when those limits exist).',
        },
        {
          type: 'theorem',
          name: 'Constant multiple, sum and difference rules',
          tex: '\\frac{d}{dx}[c\\,f(x)] = c\\,f\'(x) \\qquad \\frac{d}{dx}[f(x) \\pm g(x)] = f\'(x) \\pm g\'(x)',
          text: 'Valid whenever $f$ and $g$ are differentiable at $x$ and $c$ is a constant.',
        },
        {
          type: 'derivation',
          title: 'Why the sum rule holds',
          steps: [
            { tex: '\\frac{d}{dx}[f + g] = \\lim_{h \\to 0} \\frac{[f(x+h) + g(x+h)] - [f(x) + g(x)]}{h}', why: 'The definition applied to the function $f + g$.' },
            { tex: '= \\lim_{h \\to 0} \\left[ \\frac{f(x+h) - f(x)}{h} + \\frac{g(x+h) - g(x)}{h} \\right]', why: 'Regroup the four terms into two difference quotients — pure algebra.' },
            { tex: '= f\'(x) + g\'(x)', why: 'Each quotient has a limit (because $f$ and $g$ are differentiable), so the limit of the sum is the sum of the limits.' },
          ],
          result: 'The constant-multiple rule is proved the same way: $\\frac{cf(x+h) - cf(x)}{h} = c \\cdot \\frac{f(x+h) - f(x)}{h}$.',
        },
        {
          type: 'p',
          text: 'Together with the power rule, these let you differentiate any polynomial term by term:',
        },
        {
          type: 'derivation',
          title: 'Differentiate $f(x) = 4x^3 - 5x^2 + 7x - 2$',
          steps: [
            { tex: "f'(x) = 4\\frac{d}{dx}x^3 - 5\\frac{d}{dx}x^2 + 7\\frac{d}{dx}x - \\frac{d}{dx}2", why: 'Sum/difference rule splits the polynomial into terms; the constant-multiple rule pulls out each coefficient.' },
            { tex: '= 4(3x^2) - 5(2x) + 7(1) - 0', why: 'Power rule on each power of $x$; the derivative of $x$ is $1$ and of a constant is $0$.' },
            { tex: '= 12x^2 - 10x + 7', why: 'Multiply out. Each term\'s degree drops by one and the constant disappears.' },
          ],
          result: '$f\'(x) = 12x^2 - 10x + 7$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Differentiation is linear — and easy to code',
          text: 'Rules like these make differentiation a **linear** operation: it respects sums and scalar multiples, just like matrix multiplication does. That is why a polynomial stored as an array of coefficients can be differentiated with a single loop: coefficient $c_k$ of $x^k$ becomes $k\\,c_k$ on $x^{k-1}$.',
        },
        {
          type: 'code',
          title: 'poly_derivative.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// c[k] is the coefficient of x^k
std::vector<double> derivative(const std::vector<double>& c) {
    std::vector<double> d;
    for (std::size_t k = 1; k < c.size(); ++k)
        d.push_back(k * c[k]);  // power rule + constant multiple
    return d;
}

double eval(const std::vector<double>& c, double x) {
    double y = 0;
    for (std::size_t k = c.size(); k-- > 0;) y = y * x + c[k];  // Horner
    return y;
}

int main() {
    std::vector<double> f = {-2, 7, -5, 4};  // 4x^3 - 5x^2 + 7x - 2
    std::vector<double> df = derivative(f);
    for (std::size_t k = 0; k < df.size(); ++k)
        std::printf("x^%zu: %g\\n", k, df[k]);
    std::printf("f'(1) = %g\\n", eval(df, 1.0));
}`,
          output: `x^0: 7
x^1: -10
x^2: 12
f'(1) = 9`,
          annotations: [
            { lines: 7, text: 'Start at $k = 1$: the constant term $c_0$ has derivative $0$ and simply drops out.' },
            { lines: 8, text: 'The term $c_k x^k$ becomes $k c_k x^{k-1}$, so it moves down one slot in the array.' },
            { lines: 19, text: 'Our example, stored lowest power first.' },
          ],
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = 3x^4 - 2x^3 + 5x - 9$.',
      label: "$f'(x) =$",
      answer: '12x^3 - 6x^2 + 5',
      answerTex: '12x^3 - 6x^2 + 5',
      hint: 'Term by term: bring each exponent down, multiply by the coefficient, lower the exponent by one.',
      explanation: '$\\frac{d}{dx}3x^4 = 12x^3$, $\\frac{d}{dx}(-2x^3) = -6x^2$, $\\frac{d}{dx}5x = 5$ and $\\frac{d}{dx}(-9) = 0$. So $f\'(x) = 12x^3 - 6x^2 + 5$. The degree drops from $4$ to $3$, as it always does for a polynomial.',
    },
    {
      kind: 'error',
      prompt: 'A student differentiates $f(x) = \\dfrac{5}{x^2} + x$. Tap the first line that is wrong.',
      lines: [
        '$f(x) = 5x^{-2} + x$',
        '$f\'(x) = 5 \\cdot (-2)\\,x^{-1} + 1$',
        '$= -10x^{-1} + 1$',
        '$= -\\dfrac{10}{x} + 1$',
      ],
      errorLines: [2],
      explanation: 'Line 1 is a correct rewrite. Line 2 lowers the exponent from $-2$ to $-1$, but subtracting one gives $-2 - 1 = -3$. The correct derivative is $f\'(x) = -10x^{-3} + 1 = -\\frac{10}{x^3} + 1$. Lines 3 and 4 simplify correctly — but the wrong expression.',
    },
    {
      kind: 'concept',
      title: 'The exponential that is its own derivative',
      blocks: [
        {
          type: 'p',
          text: 'Power functions have a variable base and a fixed exponent. An [[exponential-function]] $a^x$ ($a > 0$) is the opposite, so the power rule does **not** apply. Let us go back to the definition and see what happens.',
        },
        {
          type: 'derivation',
          title: 'The derivative of $a^x$',
          steps: [
            { tex: '\\frac{d}{dx}a^x = \\lim_{h \\to 0} \\frac{a^{x+h} - a^x}{h}', why: 'The limit definition with $f(x) = a^x$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{a^x a^h - a^x}{h}', why: 'Exponent law: $a^{x+h} = a^x a^h$.' },
            { tex: '= a^x \\lim_{h \\to 0} \\frac{a^h - 1}{h}', why: 'Factor out $a^x$. It does not depend on $h$, so it comes out of the limit as a constant.' },
          ],
          result: 'The derivative of $a^x$ is $a^x$ times the number $\\lim_{h \\to 0}\\frac{a^h - 1}{h}$, which is the slope of $a^x$ at $x = 0$.',
        },
        {
          type: 'p',
          text: 'So every exponential grows at a rate **proportional to its own height**. The constant of proportionality depends on the base. Numerically:',
        },
        {
          type: 'table',
          headers: ['$h$', '$\\frac{2^h - 1}{h}$', '$\\frac{3^h - 1}{h}$'],
          rows: [
            ['$0.1$', '$0.7177$', '$1.1612$'],
            ['$0.01$', '$0.6956$', '$1.1047$'],
            ['$0.001$', '$0.6934$', '$1.0992$'],
            ['$0.0001$', '$0.6932$', '$1.0987$'],
          ],
          caption: 'For base $2$ the slope at $0$ is about $0.693$; for base $3$ it is about $1.099$.',
        },
        {
          type: 'p',
          text: 'Somewhere between $2$ and $3$ there must be a base whose slope at $0$ is exactly $1$. That base is [[eulers-number]] $e \\approx 2.71828$ — and it turns out to be the very same $e$ you met with compound interest. With $e$ as the base, the annoying constant becomes $1$:',
        },
        {
          type: 'definition',
          term: 'The number $e$ and the derivative of $e^x$',
          text: '$e$ is the unique positive number with $\\displaystyle\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$. Consequently\n\n$$\\frac{d}{dx}e^x = e^x.$$',
        },
        {
          type: 'graph',
          x: [-2.5, 2],
          y: [-1, 5],
          functions: [
            { expr: 'b^x', label: '$y = b^x$' },
            { expr: 'x + 1', label: '$y = x + 1$ (slope $1$)', color: 'gray', dashed: true },
          ],
          tangents: [{ expr: 'b^x', at: 0 }],
          sliders: [{ name: 'b', min: 1.5, max: 4, step: 0.01, value: 2, label: 'base $b$' }],
          readouts: [{ label: 'slope at $x = 0$ $\\approx$', expr: '(b^0.00001 - 1)/0.00001', digits: 4 }],
          caption: 'Slide the base until the tangent at $(0, 1)$ lies on the dashed line of slope $1$. It happens at $b \\approx 2.718$: that is $e$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $e$ is "natural"',
          text: 'For $y = e^x$, the slope at every point equals the height at that point: at height $1$ the slope is $1$, at height $20$ the slope is $20$. No other function (except constant multiples $Ce^x$) has this property, which is why $e^x$ is the [[natural-exponential]] and shows up wherever growth is proportional to size — interest, populations, cooling, and the decay of sound in a game\'s audio engine.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = 4e^x - 2\\sqrt{x} + \\dfrac{3}{x}$ for $x > 0$.',
      label: "$f'(x) =$",
      answer: '4e^x - 1/sqrt(x) - 3/x^2',
      answerTex: '4e^x - \\frac{1}{\\sqrt{x}} - \\frac{3}{x^2}',
      domain: [0.5, 3],
      hint: 'Rewrite $\\sqrt{x} = x^{1/2}$ and $\\frac{3}{x} = 3x^{-1}$; $e^x$ is its own derivative.',
      explanation: '$\\frac{d}{dx}4e^x = 4e^x$. Next, $-2x^{1/2}$ becomes $-2 \\cdot \\frac{1}{2}x^{-1/2} = -\\frac{1}{\\sqrt{x}}$. Finally $3x^{-1}$ becomes $-3x^{-2} = -\\frac{3}{x^2}$. Altogether $f\'(x) = 4e^x - \\frac{1}{\\sqrt{x}} - \\frac{3}{x^2}$.',
    },
    {
      kind: 'truefalse',
      prompt: 'By the power rule, $\\dfrac{d}{dx}e^x = x\\,e^{x-1}$.',
      answer: false,
      explanation: 'The power rule is for $x^n$: variable base, **constant** exponent. In $e^x$ the base is constant and the exponent varies, so the power rule does not apply. From the definition, $\\frac{d}{dx}e^x = e^x \\cdot \\lim_{h\\to 0}\\frac{e^h - 1}{h} = e^x$. (Contrast $\\frac{d}{dx}x^e = e\\,x^{e-1}$, which *is* the power rule, since $e$ is just a constant.)',
    },
    {
      kind: 'concept',
      title: 'Putting it to work: horizontal tangents and motion',
      blocks: [
        {
          type: 'p',
          text: 'With derivatives this cheap, questions that used to be hard become routine. The tangent line is horizontal exactly where the slope is $0$, so to find the peaks and valleys of a smooth curve you solve $f\'(x) = 0$.',
        },
        {
          type: 'derivation',
          title: 'Where does $f(x) = x^3 - 3x^2 - 9x + 5$ have horizontal tangents?',
          steps: [
            { tex: "f'(x) = 3x^2 - 6x - 9", why: 'Power, constant-multiple and sum rules, term by term.' },
            { tex: '3x^2 - 6x - 9 = 0', why: 'A horizontal tangent has slope $0$.' },
            { tex: '3(x^2 - 2x - 3) = 3(x - 3)(x + 1) = 0', why: 'Factor out $3$, then factor the quadratic: two numbers with product $-3$ and sum $-2$ are $-3$ and $1$.' },
            { tex: 'x = 3 \\quad \\text{or} \\quad x = -1', why: 'Zero product property.' },
            { tex: 'f(-1) = 10, \\qquad f(3) = -22', why: 'Plug back into $f$ to find the points: $-1 - 3 + 9 + 5 = 10$ and $27 - 27 - 27 + 5 = -22$.' },
          ],
          result: 'Horizontal tangents at $(-1, 10)$ and $(3, -22)$.',
        },
        {
          type: 'graph',
          x: [-3, 5],
          y: [-30, 16],
          yStep: 5,
          functions: [{ expr: 'x^3 - 3x^2 - 9x + 5', label: '$y = x^3 - 3x^2 - 9x + 5$' }],
          tangents: [{ expr: 'x^3 - 3x^2 - 9x + 5', at: 'a' }],
          points: [
            { x: -1, y: 10, label: '(−1, 10)' },
            { x: 3, y: -22, label: '(3, −22)' },
          ],
          sliders: [{ name: 'a', min: -2.5, max: 4.5, step: 0.05, value: 0, label: '$a$' }],
          readouts: [{ label: "$f'(a) = 3a^2 - 6a - 9 =$", expr: '3a^2 - 6a - 9', digits: 3 }],
          caption: 'Slide $a$ to $-1$ and to $3$: the readout hits $0$ and the tangent goes flat, at the top of the hill and the bottom of the valley.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Jump arcs in a platformer',
          text: 'A jumping character under constant gravity follows a quadratic height, say $y(t) = -4.9t^2 + 14.7t + 2$ metres. Its vertical velocity is the derivative, $y\'(t) = -9.8t + 14.7$. The apex of the jump is where velocity is $0$: $t = 1.5$ s, at height $y(1.5) = 13.025$ m. Game designers often run this backwards — choose the apex height and time, then solve for the launch velocity.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On exams, "find the points where the tangent is horizontal" means: differentiate, set $f\'(x) = 0$, solve, then **give the $y$-coordinates too** by plugging into $f$ (not $f\'$). Forgetting the $y$-values, or plugging into the wrong function, are the usual ways to lose marks.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find every $x$ where $f(x) = 2x^3 + 3x^2 - 12x + 1$ has a horizontal tangent line. Enter all values, separated by commas.',
      label: '$x =$',
      answer: ['-2', '1'],
      hint: 'Solve $f\'(x) = 6x^2 + 6x - 12 = 0$. Factor out $6$ first.',
      explanation: '$f\'(x) = 6x^2 + 6x - 12 = 6(x^2 + x - 2) = 6(x + 2)(x - 1)$, which is $0$ at $x = -2$ and $x = 1$. The corresponding points are $(-2, 21)$ and $(1, -6)$: a local peak and a local valley.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for differentiating $f(x) = \\dfrac{x^3 + 2}{x}$ in order.',
      lines: [
        'Split the fraction: $\\dfrac{x^3}{x} + \\dfrac{2}{x}$',
        'Simplify to powers of $x$: $x^2 + 2x^{-1}$',
        'Apply the power rule to each term: $2x - 2x^{-2}$',
        'Rewrite without negative exponents: $2x - \\dfrac{2}{x^2}$',
      ],
      distractors: ['Differentiate top and bottom separately: $\\dfrac{3x^2}{1}$'],
      explanation: 'When the denominator is a single power of $x$, divide it into each term first; then every term has the form $cx^n$ and the power rule finishes the job. Differentiating numerator and denominator separately is never valid — the next lesson shows the correct rule for quotients, and it gives the same $2x - \\frac{2}{x^2}$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the summary of this lesson\'s rules.',
      template: 'The derivative of $x^n$ is $n$ times $x$ raised to the power ___. The derivative of any constant is ___, and the derivative of $e^x$ is ___.',
      blanks: [{ answers: ['$n-1$'] }, { answers: ['$0$'] }, { answers: ['$e^x$'] }],
      wordBank: ['$n-1$', '$n+1$', '$0$', '$1$', '$e^x$', '$xe^{x-1}$'],
      explanation: 'Power rule: $\\frac{d}{dx}x^n = nx^{n-1}$ (exponent goes *down* by one). A constant\'s graph is flat, so its slope is $0$. And $e$ is defined precisely so that $e^x$ is its own derivative; $xe^{x-1}$ is the result of wrongly applying the power rule to an exponential.',
    },
  ],
  takeaways: [
    '$\\frac{d}{dx}c = 0$, $\\frac{d}{dx}x = 1$, and the power rule $\\frac{d}{dx}x^n = nx^{n-1}$ holds for every real $n$ (proved here for positive integers via the binomial theorem).',
    'Rewrite roots and reciprocals as powers before differentiating: $\\sqrt{x} = x^{1/2}$, $\\frac{1}{x^n} = x^{-n}$. Lowering a negative exponent makes it more negative.',
    'Differentiation is linear: constants factor out and sums split, so polynomials are differentiated term by term.',
    '$\\frac{d}{dx}a^x = a^x \\cdot \\lim_{h\\to 0}\\frac{a^h - 1}{h}$; $e$ is the base that makes that limit $1$, so $\\frac{d}{dx}e^x = e^x$.',
    'Horizontal tangents occur where $f\'(x) = 0$; report the points with $y$-values from $f$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 3.3 Differentiation Rules',
      url: 'https://openstax.org/books/calculus-volume-1/pages/3-3-differentiation-rules',
      source: 'openstax',
      note: 'Covers the constant, power, sum and constant-multiple rules with more worked examples.',
    },
    {
      title: "Paul's Online Notes — Differentiation Formulas",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/DiffFormulas.aspx',
      source: 'paul',
      note: 'Dozens of practice examples, especially rewriting roots and fractions before differentiating.',
    },
    {
      title: '3Blue1Brown — Derivative formulas through geometry',
      url: 'https://www.youtube.com/watch?v=S0_qX4VJhMQ',
      source: 'video',
      note: 'A visual explanation of why $\\frac{d}{dx}x^n = nx^{n-1}$, using growing squares and cubes.',
    },
  ],
};
