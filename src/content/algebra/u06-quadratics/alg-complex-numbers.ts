import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-complex-numbers',
  title: 'Complex Numbers',
  summary: 'Invent a number whose square is $-1$, and every quadratic equation finally has solutions.',
  minutes: 18,
  objectives: [
    'Define $i$ and write square roots of negative numbers as $i\\sqrt{a}$',
    'Identify the real and imaginary parts of $a + bi$ and plot it in the complex plane',
    'Add, subtract, multiply and simplify powers of $i$',
    'Divide complex numbers using the complex conjugate',
    'Solve quadratic equations with negative discriminant, giving complex solutions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A number whose square is $-1$',
      blocks: [
        {
          type: 'p',
          text: 'Every real number squared is zero or positive, so $x^2 = -1$ has no real solution, and neither does any quadratic with a negative discriminant. For centuries that was simply the end of the story. Then mathematicians tried something bold: **invent** a number that squares to $-1$, insist that the usual rules of algebra still hold, and see whether anything breaks. Nothing does.',
        },
        {
          type: 'definition',
          term: 'The imaginary unit',
          text: 'The [[imaginary-unit]] $i$ is a number with $i^2 = -1$. For any positive real $a$, we define the principal square root of $-a$ as\n\n$$\\sqrt{-a} = i\\sqrt{a}.$$\n\nFor example $\\sqrt{-9} = 3i$ and $\\sqrt{-7} = i\\sqrt{7}$.',
        },
        {
          type: 'definition',
          term: 'Complex number',
          text: 'A [[complex-number]] has the form $a + bi$, where $a$ and $b$ are real. $a$ is its **real part** and $b$ (a real number, without the $i$) is its **imaginary part**. When $b = 0$ you get an ordinary real number; when $a = 0$ and $b \\neq 0$, a [[pure-imaginary-number]] like $5i$.',
        },
        {
          type: 'p',
          text: 'So the complex numbers *contain* the real numbers, just as the reals contain the rationals. Two complex numbers are equal only when their real parts match **and** their imaginary parts match.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Square roots of negatives first appeared in Gerolamo Cardano\'s 1545 formula for cubic equations, where they showed up in the middle of computations whose final answers were perfectly real. Rafael Bombelli worked out the arithmetic rules in 1572. Descartes later called such numbers "imaginary" as an insult, and the name stuck, but they are no less real than negative numbers, which were also once considered absurd.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we are allowed to just invent $i$',
          text: 'Every number system you know was invented to make an equation solvable: negatives for $x + 5 = 2$, fractions for $3x = 2$, irrationals for $x^2 = 2$. The test is whether the new system is **consistent**: whether all the familiar rules (commutative, associative, distributive) still work without contradictions. For $a + bi$ they do, which is why complex numbers became standard tools in physics, engineering and signal processing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Simplify $\\sqrt{-49}$.',
      options: [
        { text: '$-7$', why: '$(-7)^2 = 49$, not $-49$. A negative real number squared is still positive.' },
        { text: '$\\pm 7$', why: 'Neither $7$ nor $-7$ squares to $-49$. Also, the radical sign means a single principal root.' },
        { text: '$7i$', correct: true, why: '$\\sqrt{-49} = i\\sqrt{49} = 7i$. Check: $(7i)^2 = 49 i^2 = -49$ ✓.' },
        { text: 'It does not exist', why: 'It does not exist as a *real* number, but in the complex numbers it is $7i$.' },
      ],
      explanation: 'By definition $\\sqrt{-a} = i\\sqrt{a}$ for $a > 0$, so $\\sqrt{-49} = 7i$. The equation $x^2 = -49$ has *two* solutions, $\\pm 7i$, but the symbol $\\sqrt{-49}$ names just the principal one, $7i$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Arithmetic: treat $i$ like a variable, then use $i^2 = -1$',
      blocks: [
        {
          type: 'p',
          text: 'You already know how to do complex arithmetic. Treat $i$ exactly like the variable in a polynomial, combining like terms and distributing. The only new rule: whenever $i^2$ appears, replace it with $-1$.',
        },
        {
          type: 'list',
          items: [
            '**Add / subtract**: combine real parts and imaginary parts separately. $(3 + 2i) + (1 - 4i) = 4 - 2i$.',
            '**Multiply**: distribute (FOIL), then replace $i^2$ by $-1$.',
          ],
        },
        {
          type: 'derivation',
          title: 'Multiply $(3 + 2i)(1 - 4i)$',
          steps: [
            { tex: '(3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i^2', why: '[[foil|FOIL]]: $3 \\cdot 1$, $3 \\cdot (-4i)$, $2i \\cdot 1$, $2i \\cdot (-4i)$.' },
            { tex: '= 3 - 10i - 8i^2', why: 'Combine the like terms $-12i + 2i = -10i$.' },
            { tex: '= 3 - 10i - 8(-1)', why: 'Replace $i^2$ by $-1$.' },
            { tex: '= 11 - 10i', why: 'Collect the real parts: $3 + 8 = 11$. Always finish in the form $a + bi$.' },
          ],
          result: 'Real part $11$, imaginary part $-10$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ fails for negatives',
          text: 'The rule $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ is only guaranteed when $a, b \\ge 0$. Watch: $\\sqrt{-4}\\cdot\\sqrt{-9} = (2i)(3i) = 6i^2 = -6$, but $\\sqrt{(-4)(-9)} = \\sqrt{36} = 6$. **Convert to $i$ form first**, then multiply.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Complex numbers are built into C++',
          text: 'The standard header `<complex>` provides `std::complex<double>`, which stores the real and imaginary parts as two doubles and overloads `+ - * /`. It prints as an ordered pair `(real,imag)`. Audio processing (the Fast Fourier Transform), 2D rotations and fractals like the Mandelbrot set all use it.',
        },
        {
          type: 'code',
          title: 'complex.cpp',
          runnable: true,
          code: `#include <complex>
#include <iostream>

int main() {
    using namespace std::complex_literals;
    std::complex<double> z = 3.0 + 2.0i;
    std::complex<double> w = 1.0 - 4.0i;

    std::cout << "z * w   = " << z * w << '\\n';
    std::cout << "1i * 1i = " << 1.0i * 1.0i << '\\n';
    std::cout << "conj(z) = " << std::conj(z) << '\\n';
    std::cout << "i * z   = " << 1.0i * z << '\\n';
}`,
          output: `z * w   = (11,-10)
1i * 1i = (-1,0)
conj(z) = (3,-2)
i * z   = (-2,3)`,
          annotations: [
            { lines: 5, text: 'Enables the literal suffix `i`, so `2.0i` means $2i$.' },
            { lines: 9, text: 'The product from the worked example: $11 - 10i$, printed as `(11,-10)`.' },
            { lines: 10, text: '$i \\cdot i = -1$: real part $-1$, imaginary part $0$.' },
            { lines: 12, text: 'Multiplying by $i$: $(3 + 2i)i = -2 + 3i$. The next card explains why this is a rotation.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Multiply $(2 - 3i)(4 + 5i)$ and write the result in the form $a + bi$. Type the numbers.',
      template: '$a =$ ___ and $b =$ ___',
      blanks: [{ answers: ['23'] }, { answers: ['-2'] }],
      hint: 'FOIL gives four terms; one of them contains $i^2$.',
      explanation: '$(2 - 3i)(4 + 5i) = 8 + 10i - 12i - 15i^2 = 8 - 2i - 15(-1) = 23 - 2i$. So $a = 23$ and $b = -2$. The most common slip is writing $-15i^2 = -15$, which gives $-7 - 2i$; remember that $i^2 = -1$ flips the sign.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student multiplies $(1 + 2i)(3 - i)$. Tap the first incorrect line.',
      lines: [
        '$(1 + 2i)(3 - i)$',
        '$= 3 - i + 6i - 2i^2$',
        '$= 3 + 5i - 2$',
        '$= 1 + 5i$',
      ],
      errorLines: [3],
      explanation: 'Line 2 is a correct FOIL. In line 3, $-2i^2 = -2(-1) = +2$, not $-2$. Correctly: $3 + 5i + 2 = 5 + 5i$. Treating $i^2$ as $+1$ (or just dropping it) is the number one complex-arithmetic mistake.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Powers of $i$ and the complex plane',
      blocks: [
        {
          type: 'p',
          text: 'Multiply by $i$ again and again and the results cycle with period $4$:',
        },
        {
          type: 'table',
          headers: ['$i^1$', '$i^2$', '$i^3$', '$i^4$', '$i^5$', '$i^6$', '$i^7$', '$i^8$'],
          rows: [['$i$', '$-1$', '$-i$', '$1$', '$i$', '$-1$', '$-i$', '$1$']],
          caption: '$i^3 = i^2 \\cdot i = -i$ and $i^4 = (i^2)^2 = (-1)^2 = 1$. After that the pattern repeats.',
        },
        {
          type: 'derivation',
          title: 'Simplify $i^{23}$',
          steps: [
            { tex: '23 = 4 \\cdot 5 + 3', why: 'Divide the exponent by $4$; only the remainder matters.' },
            { tex: 'i^{23} = (i^4)^5 \\cdot i^3', why: 'Exponent rules: $i^{20 + 3} = i^{20} i^3$ and $i^{20} = (i^4)^5$.' },
            { tex: '= 1^5 \\cdot i^3 = -i', why: '$i^4 = 1$, and $i^3 = -i$ from the table.' },
          ],
        },
        {
          type: 'p',
          text: 'Why a cycle of four? Picture complex numbers geometrically. In the [[complex-plane]], the number $a + bi$ is the point $(a, b)$: real part across, imaginary part up. Multiplying by $i$ sends $a + bi$ to $i(a + bi) = -b + ai$, i.e. the point $(a, b)$ moves to $(-b, a)$.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 5],
          equal: true,
          points: [
            { x: 'a', y: 'b', label: 'z = a + bi', color: 'blue' },
            { x: '-b', y: 'a', label: 'iz = −b + ai', color: 'red' },
          ],
          segments: [
            { from: [0, 0], to: ['a', 'b'], arrow: true, color: 'blue' },
            { from: [0, 0], to: ['-b', 'a'], arrow: true, color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -4, max: 4, step: 0.5, value: 3, label: 'real part $a$' },
            { name: 'b', min: -4, max: 4, step: 0.5, value: 1, label: 'imaginary part $b$' },
          ],
          caption: 'Horizontal axis: real part. Vertical axis: imaginary part. However you move $z$, the red arrow $iz$ is the blue arrow turned $90°$ counterclockwise.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $i^2 = -1$ makes geometric sense',
          text: 'The map $(a, b) \\mapsto (-b, a)$ is a quarter-turn about the origin: the new arrow has the same length and is perpendicular to the old one. So multiplying by $i$ **rotates by $90°$**. Do it twice and you have turned $180°$, which sends every point to its opposite: that is multiplying by $-1$. Four quarter-turns bring you home, so $i^4 = 1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'Game engines rotate 2D vectors with exactly this arithmetic. Store a direction as a complex number of length $1$ and multiplying by it rotates by that direction\'s angle (you will meet its trig form $\\cos\\theta + i\\sin\\theta$ in the Trigonometry course); quaternions, the standard way to store 3D orientation, extend the same idea with three imaginary units. And computing $i^n$ is just `n % 4` indexing into the cycle $\\{1, i, -1, -i\\}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Simplify $i^{50}$.',
      options: [
        { text: '$i$', why: 'That is $i^n$ when $n$ leaves remainder $1$ on division by $4$.' },
        { text: '$-1$', correct: true, why: '$50 = 4 \\cdot 12 + 2$, so $i^{50} = (i^4)^{12} \\cdot i^2 = -1$.' },
        { text: '$-i$', why: 'That needs remainder $3$. $50 \\div 4$ leaves remainder $2$.' },
        { text: '$1$', why: 'That needs $n$ to be a multiple of $4$. $50$ is even but not a multiple of $4$.' },
      ],
      explanation: 'Only the remainder of the exponent mod $4$ matters: remainders $0, 1, 2, 3$ give $1, i, -1, -i$. Since $50 = 48 + 2$, $i^{50} = i^2 = -1$. Geometrically: $50$ quarter-turns is $12$ full turns plus a half-turn.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Conjugates and division',
      blocks: [
        {
          type: 'p',
          text: 'Division is the one operation that needs a new idea, because "$\\frac{3 + 4i}{1 - 2i}$" is not yet in the form $a + bi$. The trick is the same one you used to [[rationalizing-the-denominator|rationalise denominators]] like $\\frac{1}{2 - \\sqrt{3}}$.',
        },
        {
          type: 'definition',
          term: 'Complex conjugate',
          text: 'The [[complex-conjugate]] of $z = a + bi$ is $\\bar{z} = a - bi$ (flip the sign of the imaginary part). Their product is always a non-negative real number:\n\n$$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 + b^2.$$',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the conjugate clears the $i$',
          text: '$(a + bi)(a - bi)$ is a [[difference-of-squares]]: the cross terms $-abi + abi$ cancel. What remains is $a^2 - b^2 i^2$, and $i^2 = -1$ turns the minus into a plus, leaving the real number $a^2 + b^2$. (It is the squared distance from $0$ to the point $(a, b)$ in the complex plane.)',
        },
        {
          type: 'derivation',
          title: 'Divide $\\dfrac{3 + 4i}{1 - 2i}$',
          steps: [
            { tex: '\\frac{3 + 4i}{1 - 2i} \\cdot \\frac{1 + 2i}{1 + 2i}', why: 'Multiply top and bottom by the conjugate of the denominator. This is multiplying by $1$, so the value is unchanged.' },
            { tex: '= \\frac{3 + 6i + 4i + 8i^2}{1^2 + 2^2}', why: 'FOIL the numerator; the denominator is $a^2 + b^2$ with $a = 1$, $b = -2$.' },
            { tex: '= \\frac{3 + 10i - 8}{5} = \\frac{-5 + 10i}{5}', why: '$8i^2 = -8$.' },
            { tex: '= -1 + 2i', why: 'Divide **both** parts by $5$ to reach the form $a + bi$.' },
          ],
          result: 'Check by multiplying back: $(-1 + 2i)(1 - 2i) = -1 + 2i + 2i - 4i^2 = -1 + 4i + 4 = 3 + 4i$ ✓.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Compute $(5 - 2i)(5 + 2i)$.',
      answer: '29',
      hint: 'A number times its conjugate is $a^2 + b^2$.',
      explanation: 'These are conjugates, so the product is $5^2 + 2^2 = 25 + 4 = 29$, a real number. In full: $25 + 10i - 10i - 4i^2 = 25 + 4 = 29$. A frequent slip is $25 - 4 = 21$, which forgets that $-4i^2 = +4$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'Multiply out and simplify $(x + 3i)(x - 3i)$, where $x$ is real. Your answer should contain no $i$.',
      label: '$(x + 3i)(x - 3i) =$',
      answer: 'x^2 + 9',
      answerTex: 'x^2 + 9',
      hint: 'It has the shape $(A + B)(A - B) = A^2 - B^2$ with $B = 3i$.',
      explanation: '$(x + 3i)(x - 3i) = x^2 - (3i)^2 = x^2 - 9i^2 = x^2 + 9$. This is remarkable: $x^2 + 9$ cannot be factored using real numbers (it is never zero for real $x$), but over the complex numbers it factors as $(x + 3i)(x - 3i)$, revealing the roots $x = \\pm 3i$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Write $\\dfrac{2 + i}{1 - i}$ in the form $a + bi$. What is the imaginary part $b$?',
      label: '$b =$',
      answer: '3/2',
      hint: 'Multiply top and bottom by $1 + i$. The denominator becomes $1^2 + 1^2 = 2$.',
      explanation: 'Numerator: $(2 + i)(1 + i) = 2 + 2i + i + i^2 = 1 + 3i$. Denominator: $(1 - i)(1 + i) = 1 + 1 = 2$. So the quotient is $\\frac{1 + 3i}{2} = \\frac{1}{2} + \\frac{3}{2}i$, and the imaginary part is $\\frac{3}{2}$ (the real number, without the $i$).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Every quadratic now has solutions',
      blocks: [
        {
          type: 'p',
          text: 'When the discriminant is negative, $\\sqrt{b^2 - 4ac}$ is now perfectly meaningful: it is $i\\sqrt{|D|}$. So the quadratic formula *always* produces two solutions (or one double root), possibly complex.',
        },
        {
          type: 'derivation',
          title: 'Solve $x^2 + 4x + 13 = 0$',
          steps: [
            { tex: 'D = 4^2 - 4(1)(13) = 16 - 52 = -36', why: 'Negative discriminant: no real roots, two complex ones.' },
            { tex: 'x = \\frac{-4 \\pm \\sqrt{-36}}{2}', why: 'Quadratic formula with $a = 1$, $b = 4$.' },
            { tex: '= \\frac{-4 \\pm 6i}{2}', why: '$\\sqrt{-36} = i\\sqrt{36} = 6i$.' },
            { tex: '= -2 \\pm 3i', why: 'Divide both terms by $2$.' },
          ],
          result: 'The solutions are $-2 + 3i$ and $-2 - 3i$.',
        },
        {
          type: 'derivation',
          title: 'Check $x = -2 + 3i$',
          steps: [
            { tex: '(-2 + 3i)^2 = 4 - 12i + 9i^2 = -5 - 12i', why: 'Square the binomial: $(-2)^2 + 2(-2)(3i) + (3i)^2$, and $9i^2 = -9$.' },
            { tex: '4(-2 + 3i) = -8 + 12i', why: 'Distribute.' },
            { tex: '(-5 - 12i) + (-8 + 12i) + 13 = 0 + 0i \\checkmark', why: 'Real parts: $-5 - 8 + 13 = 0$. Imaginary parts: $-12 + 12 = 0$.' },
          ],
        },
        {
          type: 'graph',
          x: [-6, 2],
          y: [-2, 14],
          functions: [{ expr: 'x^2 + 4x + 13', label: '$y = x^2 + 4x + 13$' }],
          points: [{ x: -2, y: 9, label: 'vertex (−2, 9)' }],
          caption: 'The parabola never meets the $x$-axis, so the roots are not visible as intercepts. Still, the real part of the roots, $-2$, is exactly the $x$-coordinate of the vertex.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Conjugate pairs',
          text: 'Because the $\\pm$ in the formula only touches the $\\sqrt{D}$ part, non-real roots of a quadratic with **real** coefficients always come as a conjugate pair $p \\pm qi$. Their sum $2p$ and product $p^2 + q^2$ are real, consistent with $-\\frac{b}{a}$ and $\\frac{c}{a}$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Final answers must be in standard form $a + bi$ (or $p \\pm qi$), with radicals simplified and no $i$ in a denominator. "No real solution" and "the solutions are $-2 \\pm 3i$" are different answers: read whether the question asks for real or complex solutions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Solve $x^2 - 6x + 10 = 0$ over the complex numbers.',
      options: [
        { text: '$x = 3 \\pm 2i$', why: '$\\sqrt{-4} = 2i$ is correct, but it must also be divided by $2$: $\\frac{6 \\pm 2i}{2} = 3 \\pm i$.' },
        { text: '$x = -3 \\pm i$', why: 'Sign slip: $-b = -(-6) = 6$, so the centre is $+3$.' },
        { text: '$x = 3 \\pm i$', correct: true, why: '$D = 36 - 40 = -4$, so $x = \\frac{6 \\pm 2i}{2} = 3 \\pm i$.' },
        { text: 'No solution', why: 'There is no *real* solution, but the question asks for complex solutions, and there are two.' },
      ],
      explanation: '$a = 1$, $b = -6$, $c = 10$, so $D = (-6)^2 - 40 = -4$ and $\\sqrt{-4} = 2i$. Then $x = \\frac{6 \\pm 2i}{2} = 3 \\pm i$. Check with Vieta: the sum $(3 + i) + (3 - i) = 6 = -\\frac{b}{a}$ ✓ and the product $9 + 1 = 10 = \\frac{c}{a}$ ✓.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: '$\\sqrt{-4}\\cdot\\sqrt{-9} = \\sqrt{36} = 6$.',
      answer: false,
      explanation: 'Convert to $i$ form first: $\\sqrt{-4} = 2i$ and $\\sqrt{-9} = 3i$, so the product is $6i^2 = -6$. The rule $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ is only valid when $a$ and $b$ are non-negative; applying it to negatives gives the wrong sign.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Solve $x^2 + 2x + 5 = 0$ and type the two numbers that complete the answer.',
      template: '$x =$ ___ $\\pm$ ___ $i$',
      blanks: [{ answers: ['-1'] }, { answers: ['2'] }],
      hint: 'Either use the formula, or complete the square: $(x + 1)^2 = -4$.',
      explanation: 'Completing the square: $x^2 + 2x + 1 = -4$, so $(x + 1)^2 = -4$, giving $x + 1 = \\pm 2i$ and $x = -1 \\pm 2i$. The formula agrees: $D = 4 - 20 = -16$ and $x = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$. This is the equation the Completing the Square lesson had to leave unsolved.',
    },
  ],
  takeaways: [
    '$i^2 = -1$, and $\\sqrt{-a} = i\\sqrt{a}$ for $a > 0$. Convert to $i$ form **before** multiplying radicals.',
    'A complex number $a + bi$ has real part $a$ and imaginary part $b$; it is the point $(a, b)$ in the complex plane.',
    'Add and multiply like polynomials, replacing $i^2$ by $-1$. Powers of $i$ cycle $i, -1, -i, 1$; multiplying by $i$ rotates $90°$.',
    'To divide, multiply top and bottom by the conjugate: $(a + bi)(a - bi) = a^2 + b^2$.',
    'With complex numbers, every quadratic has solutions; when $D < 0$ they are a conjugate pair $p \\pm qi$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.4 Complex Numbers',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-4-complex-numbers',
      source: 'openstax',
      note: 'Arithmetic, conjugates, division and powers of $i$, with exercises and answers.',
    },
    {
      title: "Paul's Online Notes — Complex Numbers",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/ComplexNumbers.aspx',
      source: 'paul',
      note: 'A concise college-level treatment, including the $\\sqrt{a}\\sqrt{b}$ pitfall.',
    },
    {
      title: 'Wikipedia — Complex number',
      url: 'https://en.wikipedia.org/wiki/Complex_number',
      source: 'wikipedia',
      note: 'History, the complex plane, and where complex numbers are used in science and engineering.',
    },
  ],
};
