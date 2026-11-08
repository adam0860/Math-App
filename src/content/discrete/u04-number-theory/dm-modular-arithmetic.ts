import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  mod_clock: "<svg viewBox=\"0 0 470 230\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"130.0\" y=\"35.0\" text-anchor=\"middle\" font-size=\"15\">0</text><text x=\"172.5\" y=\"46.4\" text-anchor=\"middle\" font-size=\"15\">1</text><text x=\"203.6\" y=\"77.5\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">2</text><text x=\"215.0\" y=\"120.0\" text-anchor=\"middle\" font-size=\"15\">3</text><text x=\"203.6\" y=\"162.5\" text-anchor=\"middle\" font-size=\"15\">4</text><text x=\"172.5\" y=\"193.6\" text-anchor=\"middle\" font-size=\"15\">5</text><text x=\"130.0\" y=\"205.0\" text-anchor=\"middle\" font-size=\"15\">6</text><text x=\"87.5\" y=\"193.6\" text-anchor=\"middle\" font-size=\"15\">7</text><text x=\"56.4\" y=\"162.5\" text-anchor=\"middle\" font-size=\"15\">8</text><text x=\"45.0\" y=\"120.0\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">9</text><text x=\"56.4\" y=\"77.5\" text-anchor=\"middle\" font-size=\"15\">10</text><text x=\"87.5\" y=\"46.4\" text-anchor=\"middle\" font-size=\"15\">11</text><circle cx=\"130\" cy=\"115\" r=\"103\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polyline points=\"71.0,115.0 71.1,111.1 71.5,107.3 72.1,103.5 73.0,99.7 74.1,96.0 75.5,92.4 77.1,88.9 78.9,85.5 80.9,82.2 83.2,79.1 85.6,76.1 88.3,73.3 91.1,70.6 94.1,68.2 97.2,65.9 100.5,63.9 103.9,62.1 107.4,60.5 111.0,59.1 114.7,58.0 118.5,57.1 122.3,56.5 126.1,56.1 130.0,56.0 133.9,56.1 137.7,56.5 141.5,57.1 145.3,58.0 149.0,59.1 152.6,60.5 156.1,62.1 159.5,63.9 162.8,65.9 165.9,68.2 168.9,70.6 171.7,73.3 174.4,76.1 176.8,79.1\" fill=\"none\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"2.4\"/><path d=\"M181.1,85.5 L173.4,80.9 L179.8,76.6 Z\" fill=\"currentColor\" class=\"f-orange\"/><text x=\"130\" y=\"120\" text-anchor=\"middle\" font-size=\"13\" class=\"t-orange\">+5</text><text x=\"270\" y=\"80\" font-size=\"15\">9 + 5 = 14</text><text x=\"270\" y=\"108\" font-size=\"15\">14 = 12·1 + 2</text><text x=\"270\" y=\"136\" font-size=\"15\" class=\"t-red\">9 + 5 ≡ 2 (mod 12)</text><text x=\"270\" y=\"170\" font-size=\"12\" class=\"t-gray\">Hours wrap around: 12 ≡ 0.</text></svg>",
  mod_divalgo: "<svg viewBox=\"0 0 500 145\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"8.5\" y1=\"70\" x2=\"491.5\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"20.0\" y1=\"63\" x2=\"20.0\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"20.0\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">−20</text><line x1=\"31.5\" y1=\"67\" x2=\"31.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"43.0\" y1=\"67\" x2=\"43.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"54.5\" y1=\"67\" x2=\"54.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"66.0\" y1=\"67\" x2=\"66.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"77.5\" y1=\"63\" x2=\"77.5\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"77.5\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">−15</text><line x1=\"89.0\" y1=\"67\" x2=\"89.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"100.5\" y1=\"67\" x2=\"100.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"112.0\" y1=\"67\" x2=\"112.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"123.5\" y1=\"67\" x2=\"123.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"135.0\" y1=\"63\" x2=\"135.0\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"135.0\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">−10</text><line x1=\"146.5\" y1=\"67\" x2=\"146.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"158.0\" y1=\"67\" x2=\"158.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"169.5\" y1=\"67\" x2=\"169.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"181.0\" y1=\"67\" x2=\"181.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"192.5\" y1=\"63\" x2=\"192.5\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"192.5\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">−5</text><line x1=\"204.0\" y1=\"67\" x2=\"204.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"215.5\" y1=\"67\" x2=\"215.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"227.0\" y1=\"67\" x2=\"227.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"238.5\" y1=\"67\" x2=\"238.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"250.0\" y1=\"63\" x2=\"250.0\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"250.0\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">0</text><line x1=\"261.5\" y1=\"67\" x2=\"261.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"273.0\" y1=\"67\" x2=\"273.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"284.5\" y1=\"67\" x2=\"284.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"296.0\" y1=\"67\" x2=\"296.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"307.5\" y1=\"63\" x2=\"307.5\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"307.5\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">5</text><line x1=\"319.0\" y1=\"67\" x2=\"319.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"330.5\" y1=\"67\" x2=\"330.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"342.0\" y1=\"67\" x2=\"342.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"353.5\" y1=\"67\" x2=\"353.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"365.0\" y1=\"63\" x2=\"365.0\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"365.0\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">10</text><line x1=\"376.5\" y1=\"67\" x2=\"376.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"388.0\" y1=\"67\" x2=\"388.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"399.5\" y1=\"67\" x2=\"399.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"411.0\" y1=\"67\" x2=\"411.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"422.5\" y1=\"63\" x2=\"422.5\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"422.5\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">15</text><line x1=\"434.0\" y1=\"67\" x2=\"434.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"445.5\" y1=\"67\" x2=\"445.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"457.0\" y1=\"67\" x2=\"457.0\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"468.5\" y1=\"67\" x2=\"468.5\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"0.8\"/><line x1=\"480.0\" y1=\"63\" x2=\"480.0\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"480.0\" y=\"94\" text-anchor=\"middle\" font-size=\"12\">20</text><circle cx=\"445.5\" cy=\"70\" r=\"6\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"445.5\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">a = 17</text><line x1=\"422.5\" y1=\"54\" x2=\"442.5\" y2=\"54.0\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"2\"/><path d=\"M445.5,54 L438.4,57.6 L438.4,50.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"434.0\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">r = 2</text><text x=\"422.5\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">5·3</text><circle cx=\"54.5\" cy=\"70\" r=\"6\" fill=\"currentColor\" class=\"f-red\"/><text x=\"54.5\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">a = −17</text><line x1=\"20.0\" y1=\"54\" x2=\"51.5\" y2=\"54.0\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"2\"/><path d=\"M54.5,54 L47.4,57.6 L47.4,50.4 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"37.25\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" class=\"t-red\">r = 3</text><text x=\"20.0\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">5·(−4)</text><text x=\"77.5\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" class=\"t-orange\">C++: 5·(−3)</text><line x1=\"77.5\" y1=\"120\" x2=\"57.5\" y2=\"120.0\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"2\"/><path d=\"M54.5,120 L61.6,116.4 L61.6,123.6 Z\" fill=\"currentColor\" class=\"f-orange\"/><text x=\"106.0\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" class=\"t-orange\">C++ % gives −2</text></svg>",
  mod_hex: "<svg viewBox=\"0 0 500 164\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"110\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"125.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">1</text><text x=\"125.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">128</text><rect x=\"144\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"159.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">0</text><text x=\"159.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">64</text><rect x=\"178\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"193.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">0</text><text x=\"193.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">32</text><rect x=\"212\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"227.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">1</text><text x=\"227.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">16</text><rect x=\"260\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"275.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">1</text><text x=\"275.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">8</text><rect x=\"294\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"309.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">1</text><text x=\"309.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><rect x=\"328\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"343.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">0</text><text x=\"343.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><rect x=\"362\" y=\"30\" width=\"30\" height=\"34\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"377.0\" y=\"53\" text-anchor=\"middle\" font-size=\"16\" font-family=\"monospace\">0</text><text x=\"377.0\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"96\" y=\"53\" text-anchor=\"end\" font-size=\"15\">156 =</text><path d=\"M110,74 q0,10 10,10 h46 q10,0 10,10 q0,-10 10,-10 h46 q10,0 10,-10\" fill=\"none\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.4\"/><path d=\"M260,74 q0,10 10,10 h46 q10,0 10,10 q0,-10 10,-10 h46 q10,0 10,-10\" fill=\"none\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.4\"/><text x=\"176\" y=\"120\" text-anchor=\"middle\" font-size=\"16\" class=\"t-blue\">1001₂ = 9</text><text x=\"326\" y=\"120\" text-anchor=\"middle\" font-size=\"16\" class=\"t-green\">1100₂ = 12 = C</text><text x=\"251.0\" y=\"152\" text-anchor=\"middle\" font-size=\"16\">156 = 0x9C = 9·16 + 12</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'dm-modular-arithmetic',
  title: 'Divisibility and Modular Arithmetic',
  summary: 'Divisibility, the division algorithm (and what C++\'s % really does with negatives), congruences, clock arithmetic, fast modular exponentiation and number bases.',
  minutes: 19,
  objectives: [
    'Use the definition of $a \\mid b$ to prove divisibility facts',
    'Find the quotient and remainder of the division algorithm for any integers, including negatives, and compare them with C++\'s `/` and `%`',
    'Work with congruences mod $n$, reducing early in sums and products, and read Cayley tables of $\\mathbb{Z}_n$',
    'Compute $a^e \\bmod n$ by square-and-multiply in $O(\\log e)$ multiplications',
    'Convert between decimal, binary and hexadecimal',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Divisibility',
      blocks: [
        {
          type: 'p',
          text: 'Number theory studies the [[integer|integers]], where division does not always work: $12 \\div 4 = 3$ stays in $\\mathbb{Z}$, but $12 \\div 5$ does not. Divisibility is the yes/no question "does it come out even?", and it is the foundation of everything in this unit — from clock arithmetic to RSA.',
        },
        {
          type: 'definition',
          term: 'Divides',
          text: 'For integers $a \\ne 0$ and $b$, $a$ **[[dm-divides|divides]]** $b$, written $a \\mid b$, if $b = ak$ for some integer $k$. Then $a$ is a **divisor** (or factor) of $b$ and $b$ is a **multiple** of $a$. Otherwise $a \\nmid b$.',
        },
        {
          type: 'list',
          items: [
            '$3 \\mid 12$ (since $12 = 3 \\cdot 4$), $3 \\nmid 13$, $-4 \\mid 20$, and $a \\mid 0$ for every $a \\ne 0$ (since $0 = a \\cdot 0$).',
            '$a \\mid b$ is a **statement** (true or false); $a / b$ is a **number**. Writing "$3 \\mid 12 = 4$" mixes the two and is always wrong.',
          ],
        },
        {
          type: 'theorem',
          name: 'Properties of divisibility',
          text: 'For integers $a \\ne 0$, $b$, $c$: (1) if $a \\mid b$ and $a \\mid c$, then $a \\mid (mb + nc)$ for all integers $m, n$; (2) if $a \\mid b$, then $a \\mid bc$; (3) if $a \\mid b$ and $b \\mid c$ (with $b \\ne 0$), then $a \\mid c$.',
        },
        {
          type: 'derivation',
          title: 'Proof of property (1): divisors of $b$ and $c$ divide every combination',
          steps: [
            { tex: 'a \\mid b,\\; a \\mid c \\implies b = ak,\\; c = a\\ell', why: 'Unpack the definition, with integers $k$ and $\\ell$.' },
            { tex: 'mb + nc = m(ak) + n(a\\ell)', why: 'Substitute into the combination.' },
            { tex: '= a(mk + n\\ell)', why: 'Factor out $a$ (distributive law).' },
            { tex: 'mk + n\\ell \\in \\mathbb{Z} \\implies a \\mid (mb + nc)', why: 'Sums and products of integers are integers, so the combination is an integer multiple of $a$.' },
          ],
          result: 'This one-line idea — anything dividing $b$ and $c$ divides $mb + nc$ — is the engine of the Euclidean algorithm in the next lesson.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every proof here starts the same way',
          text: 'The definition turns "$a \\mid b$" into an *equation* $b = ak$, and equations can be manipulated with algebra. Almost every divisibility proof is: unpack each hypothesis into an equation, do algebra, and repackage the result as "$= a \\cdot (\\text{integer})$".',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: for all positive integers $a, b, c$, if $a \\mid bc$ then $a \\mid b$ or $a \\mid c$.',
      answer: false,
      explanation: 'Counterexample: $6 \\mid 4 \\cdot 9 = 36$, but $6 \\nmid 4$ and $6 \\nmid 9$. The factor $6 = 2 \\cdot 3$ got its $2$ from $4$ and its $3$ from $9$. The statement **is** true when $a$ is prime — that is Euclid\'s lemma, proved in the next lesson, and it is the key to unique prime factorization.',
    },
    {
      kind: 'concept',
      title: 'The division algorithm',
      blocks: [
        {
          type: 'p',
          text: 'When $d \\nmid a$, there is a remainder. You have known since elementary school that $17 \\div 5$ is "$3$ remainder $2$". The precise version, valid for negative $a$ too, is the [[dm-division-algorithm|division algorithm]] — a theorem with a misleading name — it is not an algorithm, it is a guarantee.',
        },
        {
          type: 'theorem',
          name: 'The division algorithm',
          tex: 'a = dq + r, \\qquad 0 \\le r < d',
          text: 'For every integer $a$ and positive integer $d$ there are **unique** integers $q$ (the quotient) and $r$ (the remainder) with this property. In fact $q = \\lfloor a/d \\rfloor$, and we write $r = a \\bmod d$.',
        },
        {
          type: 'figure',
          svg: FIG.mod_divalgo,
          alt: 'A number line from −20 to 20 with multiples of 5 marked. 17 is 2 to the right of 15 = 5·3. −17 is 3 to the right of −20 = 5·(−4); C++ instead measures −2 back from −15.',
          caption: 'The multiples of $d$ chop the number line into intervals of length $d$. $dq$ is the multiple at or to the **left** of $a$, and $r$ is the distance from it — so $0 \\le r < d$, even when $a$ is negative.',
        },
        {
          type: 'derivation',
          title: 'Divide $a = -17$ by $d = 5$',
          steps: [
            { tex: '\\frac{-17}{5} = -3.4 \\implies q = \\lfloor -3.4 \\rfloor = -4', why: 'The quotient is the **floor**, which rounds toward $-\\infty$: the multiple $5 \\cdot (-4) = -20$ lies to the left of $-17$.' },
            { tex: 'r = a - dq = -17 - 5(-4) = 3', why: 'The remainder is whatever is left over.' },
            { tex: '-17 = 5 \\cdot (-4) + 3, \\quad 0 \\le 3 < 5 \\;\\checkmark', why: 'Check both conditions. Writing $-17 = 5 \\cdot (-3) - 2$ is a true equation but not the division algorithm, because $-2 < 0$.' },
          ],
          result: '$-17 \\bmod 5 = 3$. The remainder is never negative in mathematics.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $q$ and $r$ exist and are unique',
          text: '**Existence:** take $q = \\lfloor a/d \\rfloor$. Then $q \\le a/d < q + 1$; multiply by $d > 0$ to get $dq \\le a < dq + d$, i.e. $0 \\le a - dq < d$. **Uniqueness:** if $a = dq + r = dq\' + r\'$ with both remainders in $[0, d)$, then $d(q - q\') = r\' - r$. The right side lies strictly between $-d$ and $d$ but is a multiple of $d$, so it is $0$: $r = r\'$ and $q = q\'$.',
        },
      ],
    },
    {
      kind: 'concept',
      title: "C++'s % is not mod",
      blocks: [
        {
          type: 'p',
          text: 'Since C++11, integer division **truncates toward zero**, and `%` is defined so that `(a / b) * b + a % b == a` always holds. For non-negative operands that matches the division algorithm. For a negative dividend it does not: the remainder takes the sign of `a`.',
        },
        {
          type: 'table',
          headers: ['$a$', '$n$', '$\\lfloor a/n \\rfloor$', '$a \\bmod n$', 'C++ `a / n`', 'C++ `a % n`'],
          rows: [
            ['$17$', '$5$', '$3$', '$2$', '`3`', '`2`'],
            ['$-17$', '$5$', '$-4$', '$3$', '`-3`', '`-2`'],
            ['$-23$', '$7$', '$-4$', '$5$', '`-3`', '`-2`'],
            ['$-1$', '$8$', '$-1$', '$7$', '`0`', '`-1`'],
          ],
          caption: 'When $a < 0$ and $n \\nmid a$, C++ gives a remainder exactly $n$ too small.',
        },
        {
          type: 'code',
          title: 'mod.cpp',
          runnable: true,
          code: `#include <cstdio>

// Mathematical a mod n for n > 0: always in 0..n-1.
int mod(int a, int n) {
    int r = a % n;              // C++: sign of r follows a
    return r < 0 ? r + n : r;
}

int main() {
    std::printf(" a    n   a / n   a %% n   mod(a, n)\\n");
    const int cases[][2] = {{17, 5}, {-17, 5}, {-23, 7}, {-1, 8}};
    for (auto [a, n] : cases)
        std::printf("%3d  %3d  %5d  %6d  %9d\\n", a, n, a / n, a % n, mod(a, n));

    // Wrapping a tile index on a looping map 8 tiles wide:
    int x = 2;
    for (int step = 0; step < 4; ++step) {
        x = mod(x - 1, 8);      // walk left
        std::printf("x = %d\\n", x);
    }
}`,
          output: ` a    n   a / n   a % n   mod(a, n)
 17    5      3       2          2
-17    5     -3      -2          3
-23    7     -3      -2          5
 -1    8      0      -1          7
x = 1
x = 0
x = 7
x = 6`,
          annotations: [
            { lines: '4-7', text: 'The fix: if C++ returns a negative remainder, add $n$ once. (The one-liner `((a % n) + n) % n` does the same.)' },
            { lines: 18, text: 'Walking left off tile $0$ must wrap to tile $7$. With plain `(x - 1) % 8` you would get $-1$ and index outside the array.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Where this bites in games',
          text: 'Wrapping indices (circular buffers, looping maps, cycling through weapons with the previous-weapon key), wrapping angles, and mapping negative world coordinates to chunks all need the mathematical mod. `index = (index - 1) % size` silently produces $-1$. Python\'s `%` follows the mathematical convention; C, C++, Java, C# and JavaScript do not.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Compute $-23 \\bmod 7$ (the remainder of the division algorithm).',
      hint: 'Find the multiple of $7$ at or just **below** $-23$, then measure the distance up to $-23$.',
      label: '$-23 \\bmod 7 =$',
      answer: '5',
      explanation: '$-23/7 \\approx -3.29$, so $q = \\lfloor -3.29 \\rfloor = -4$ and $r = -23 - 7(-4) = -23 + 28 = 5$. Check: $-23 = 7 \\cdot (-4) + 5$ with $0 \\le 5 < 7$. C++\'s `-23 % 7` would give $-2$, which is $5 - 7$.',
    },
    {
      kind: 'fill',
      prompt: 'Evaluate each expression for $a = -38$, $n = 9$.',
      template: 'In C++, `-38 / 9` is ___ and `-38 % 9` is ___. Mathematically, $-38 \\bmod 9 =$ ___.',
      blanks: [{ answers: ['$-4$'] }, { answers: ['$-2$'] }, { answers: ['$7$'] }],
      wordBank: ['$-4$', '$-2$', '$7$', '$-5$', '$2$', '$4$'],
      explanation: '$-38/9 \\approx -4.22$. C++ truncates toward zero: quotient $-4$, and then `%` must satisfy $(-4)(9) + r = -38$, so $r = -2$. The division algorithm uses the floor, $q = -5$, giving $r = -38 + 45 = 7$. The two remainders differ by exactly $9$: $7 = -2 + 9$.',
    },
    {
      kind: 'concept',
      title: 'Congruence mod $n$',
      blocks: [
        {
          type: 'p',
          text: 'Often we care only about remainders: the hour on a clock, the day of the week, the last digit of a number, whether a value is even. Congruence makes "equal up to multiples of $n$" into a precise relation.',
        },
        {
          type: 'definition',
          term: 'Congruence',
          text: 'For a positive integer $n$, $a$ is [[dm-congruence|congruent]] to $b$ modulo $n$, written $a \\equiv b \\pmod{n}$, if $n \\mid (a - b)$. Equivalently, $a$ and $b$ have the same remainder: $a \\bmod n = b \\bmod n$.',
        },
        {
          type: 'p',
          text: 'Mind the notation: $a \\bmod n$ (an operation) is a **number** in $\\{0, \\dots, n-1\\}$, while $a \\equiv b \\pmod{n}$ (a relation) is a **statement**. $38 \\equiv 14 \\pmod{12}$ is true, and $38 \\bmod 12 = 2$. Congruence mod $n$ is an equivalence relation (shown in the previous unit), and its $n$ classes are what we compute with.',
        },
        {
          type: 'figure',
          svg: FIG.mod_clock,
          alt: 'A clock face numbered 0 to 11 with an orange arrow moving 5 steps clockwise from 9 to 2, and the equations 9 + 5 = 14 = 12·1 + 2, so 9 + 5 ≡ 2 (mod 12).',
          caption: 'Clock arithmetic is arithmetic mod $12$: five hours after $9$ o\'clock is $2$ o\'clock.',
        },
        {
          type: 'theorem',
          name: 'Congruences can be added and multiplied',
          tex: 'a \\equiv b,\\; c \\equiv d \\pmod{n} \\implies a + c \\equiv b + d \\;\\text{ and }\\; ac \\equiv bd \\pmod{n}',
        },
        {
          type: 'derivation',
          title: 'Proof for products',
          steps: [
            { tex: 'a = b + kn,\\quad c = d + \\ell n', why: 'Unpack: $n \\mid (a - b)$ and $n \\mid (c - d)$.' },
            { tex: 'ac = (b + kn)(d + \\ell n) = bd + n(b\\ell + dk + k\\ell n)', why: 'Expand; every term except $bd$ contains a factor of $n$.' },
            { tex: 'ac - bd = n \\cdot (\\text{integer}) \\implies ac \\equiv bd \\pmod{n}', why: 'Repackage as divisibility. The sum is the same argument without the expansion.' },
          ],
          result: 'You may replace any number by anything congruent to it before adding or multiplying. Reduce early, keep numbers small.',
        },
        {
          type: 'derivation',
          title: 'Compute $(47 \\cdot 58 + 13) \\bmod 9$ without a calculator',
          steps: [
            { tex: '47 \\equiv 2,\\quad 58 \\equiv 4,\\quad 13 \\equiv 4 \\pmod{9}', why: 'Reduce each number first: $47 = 45 + 2$, $58 = 54 + 4$, $13 = 9 + 4$.' },
            { tex: '47 \\cdot 58 + 13 \\equiv 2 \\cdot 4 + 4 = 12 \\pmod{9}', why: 'Congruences respect $\\times$ and $+$.' },
            { tex: '12 \\equiv 3 \\pmod{9}', why: 'Reduce once more. (Check: $47 \\cdot 58 + 13 = 2739 = 9 \\cdot 304 + 3$.)' },
          ],
          result: 'The answer is $3$ — and the largest number we touched was $12$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'You cannot cancel freely',
          text: '$2 \\cdot 3 \\equiv 2 \\cdot 8 \\pmod{10}$ (both are $6 \\bmod 10$), but $3 \\not\\equiv 8 \\pmod{10}$. Division is not automatically allowed: you may cancel a factor $c$ only when $\\gcd(c, n) = 1$. Exactly when division works is the subject of the Modular Inverses lesson.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Arithmetic in $\\mathbb{Z}_n$ and Cayley tables',
      blocks: [
        {
          type: 'p',
          text: 'Since only remainders matter, we can do arithmetic on the set $\\mathbb{Z}_n = \\{0, 1, \\dots, n-1\\}$ directly: add or multiply as usual, then reduce mod $n$. This is exactly how fixed-width integers behave — `uint8_t` arithmetic is arithmetic in $\\mathbb{Z}_{256}$, and `uint32_t` is $\\mathbb{Z}_{2^{32}}$.',
        },
        {
          type: 'p',
          text: 'A **Cayley table** lists every sum or product. Here are addition and multiplication in $\\mathbb{Z}_6$:',
        },
        {
          type: 'table',
          headers: ['$+$', '$0$', '$1$', '$2$', '$3$', '$4$', '$5$'],
          rows: [
            ['$0$', '0', '1', '2', '3', '4', '5'],
            ['$1$', '1', '2', '3', '4', '5', '0'],
            ['$2$', '2', '3', '4', '5', '0', '1'],
            ['$3$', '3', '4', '5', '0', '1', '2'],
            ['$4$', '4', '5', '0', '1', '2', '3'],
            ['$5$', '5', '0', '1', '2', '3', '4'],
          ],
          caption: 'Addition mod 6: every row is a shift of the one above, and every row contains a $0$ — every element has an additive inverse ($-a \\equiv 6 - a$).',
        },
        {
          type: 'table',
          headers: ['$\\times$', '$0$', '$1$', '$2$', '$3$', '$4$', '$5$'],
          rows: [
            ['$0$', '0', '0', '0', '0', '0', '0'],
            ['$1$', '0', '1', '2', '3', '4', '5'],
            ['$2$', '0', '2', '4', '**0**', '2', '4'],
            ['$3$', '0', '3', '**0**', '3', '0', '3'],
            ['$4$', '0', '4', '2', '0', '4', '2'],
            ['$5$', '0', '5', '4', '3', '2', '**1**'],
          ],
          caption: 'Multiplication mod 6. $2 \\cdot 3 \\equiv 0$ although neither factor is $0$ ("zero divisors"). Only rows $1$ and $5$ contain a $1$, so only $1$ and $5$ have multiplicative inverses.',
        },
        {
          type: 'table',
          headers: ['$\\times$', '$1$', '$2$', '$3$', '$4$'],
          rows: [
            ['$1$', '1', '2', '3', '4'],
            ['$2$', '2', '4', '1', '3'],
            ['$3$', '3', '1', '4', '2'],
            ['$4$', '4', '3', '2', '1'],
          ],
          caption: 'Multiplication of the nonzero elements mod 5 (a prime). Every row is a rearrangement of $1, 2, 3, 4$, so every nonzero element has an inverse: $2 \\cdot 3 \\equiv 1$, $4 \\cdot 4 \\equiv 1$.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'The contrast between $\\mathbb{Z}_6$ and $\\mathbb{Z}_5$ is the whole story of the next two lessons: $a$ has an inverse mod $n$ exactly when $a$ and $n$ share no common factor, so when $n$ is prime, **every** nonzero element is invertible.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Using the multiplication table for $\\mathbb{Z}_6$, which element $a \\ne 1$ has a multiplicative inverse (some $b$ with $ab \\equiv 1 \\pmod{6}$)?',
      options: [
        { text: '$5$', correct: true, why: '$5 \\cdot 5 = 25 = 4 \\cdot 6 + 1$, so $5$ is its own inverse.' },
        { text: '$2$', why: 'Row $2$ is $0, 2, 4, 0, 2, 4$: only even results, never $1$. Since $\\gcd(2, 6) = 2$, $2a$ is always even mod 6.' },
        { text: '$3$', why: 'Row $3$ is $0, 3, 0, 3, 0, 3$ — never $1$.' },
        { text: '$4$', why: 'Row $4$ is $0, 4, 2, 0, 4, 2$ — never $1$.' },
      ],
      explanation: 'Look for a $1$ in each row. Only rows $1$ and $5$ have one. The pattern: $2, 3, 4$ share a factor with $6$, and any multiple of them mod $6$ keeps that factor, so it can never be $1$. $5$ shares no factor with $6$ — the condition $\\gcd(a, n) = 1$ you will prove is exactly right.',
    },
    {
      kind: 'numeric',
      prompt: 'Compute $(123 \\cdot 456) \\bmod 10$ by reducing each factor first.',
      hint: 'Mod $10$, only the last digit of each factor matters.',
      label: '$(123 \\cdot 456) \\bmod 10 =$',
      answer: '8',
      explanation: '$123 \\equiv 3$ and $456 \\equiv 6 \\pmod{10}$, so the product is $\\equiv 3 \\cdot 6 = 18 \\equiv 8$. The last digit of $123 \\cdot 456 = 56\\,088$ is indeed $8$. "The last digit of a product depends only on the last digits" is congruence mod $10$ in action.',
    },
    {
      kind: 'concept',
      title: 'Fast modular exponentiation',
      blocks: [
        {
          type: 'p',
          text: 'Cryptography needs numbers like $m^e \\bmod n$ where $e$ has hundreds of digits. Two obstacles: $m^e$ itself is astronomically large, and multiplying $e$ times would take longer than the age of the universe. Congruence solves the first (reduce after **every** multiplication); binary solves the second.',
        },
        {
          type: 'p',
          text: '**Square-and-multiply** ([[dm-modular-exponentiation]]). Write $e$ in binary. Repeated squaring produces $a, a^2, a^4, a^8, \\dots$, each from the previous one with a single multiplication. Then $a^e$ is the product of the powers whose bits are $1$.',
        },
        {
          type: 'derivation',
          title: 'Compute $3^{13} \\bmod 7$',
          steps: [
            { tex: '13 = 8 + 4 + 1 = 1101_2', why: 'Binary expansion of the exponent: bits $8, 4, 1$ are set.' },
            { tex: '3^1 \\equiv 3,\\; 3^2 \\equiv 9 \\equiv 2,\\; 3^4 \\equiv 2^2 = 4,\\; 3^8 \\equiv 4^2 = 16 \\equiv 2', why: 'Square repeatedly, reducing mod $7$ each time. Each power costs one multiplication.' },
            { tex: '3^{13} = 3^8 \\cdot 3^4 \\cdot 3^1 \\equiv 2 \\cdot 4 \\cdot 3', why: 'Exponents add when powers multiply, so pick the powers for the $1$ bits.' },
            { tex: '= 24 \\equiv 3 \\pmod{7}', why: 'Reduce. Five multiplications instead of twelve.' },
          ],
          result: '$3^{13} \\bmod 7 = 3$. For an exponent with $k$ bits, at most $2k$ multiplications are needed.',
        },
        {
          type: 'graph',
          x: [0, 1000],
          y: [0, 1000],
          functions: [
            { expr: 'x - 1', label: 'naive: $e - 1$ multiplications', color: 'red' },
            { expr: '2 log_2(x)', label: 'square-and-multiply: $\\le 2\\log_2 e$', color: 'blue' },
          ],
          points: [{ x: 'a', y: 'a - 1', color: 'red' }, { x: 'a', y: '2 log_2(a)', color: 'blue' }],
          sliders: [{ name: 'a', min: 2, max: 1000, step: 1, value: 500, label: 'exponent $e$' }],
          readouts: [
            { label: 'naive', expr: 'a - 1', digits: 0 },
            { label: 'square-and-multiply $\\le$', expr: '2 floor(log_2(a)) + 1', digits: 0 },
          ],
          caption: 'The blue curve hugs the axis. For a 2048-bit RSA exponent, naive multiplication needs about $2^{2048}$ steps; square-and-multiply needs at most about $4096$.',
        },
        {
          type: 'code',
          title: 'modpow.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>

// Computes base^exp mod m by square-and-multiply. Requires m < 2^32,
// so every product of two residues fits in 64 bits.
std::uint64_t modpow(std::uint64_t base, std::uint64_t exp, std::uint64_t m) {
    std::uint64_t result = 1 % m;
    base %= m;
    while (exp > 0) {
        if (exp & 1) result = result * base % m;   // this bit of exp is 1: multiply
        base = base * base % m;                    // square for the next bit
        exp >>= 1;
    }
    return result;
}

int main() {
    std::printf("3^13 mod 7        = %llu\\n", (unsigned long long)modpow(3, 13, 7));
    std::printf("2^10 mod 11       = %llu\\n", (unsigned long long)modpow(2, 10, 11));
    std::printf("7^1000000 mod 13  = %llu\\n", (unsigned long long)modpow(7, 1000000, 13));
    std::printf("5^(10^18) mod 1000000007 = %llu\\n",
                (unsigned long long)modpow(5, 1000000000000000000ULL, 1000000007));
}`,
          output: `3^13 mod 7        = 3
2^10 mod 11       = 1
7^1000000 mod 13  = 9
5^(10^18) mod 1000000007 = 921116510`,
          annotations: [
            { lines: 7, text: '`1 % m` handles the corner case $m = 1$, where every result is $0$.' },
            { lines: '9-13', text: 'Read the exponent\'s bits from least significant up. `base` holds $a^{2^i}$ at step $i$; multiply it in when bit $i$ is $1$.' },
            { lines: 21, text: 'An exponent of $10^{18}$ takes only $60$ loop iterations, because $10^{18} < 2^{60}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Overflow is the classic bug: if $m \\ge 2^{32}$, then `base * base` can exceed $2^{64}$ and silently wrap. Real cryptographic code uses big-integer libraries; for 64-bit moduli, `unsigned __int128` (a GCC/Clang extension) holds the product safely.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use square-and-multiply to compute $3^{20} \\bmod 7$.',
      hint: '$20 = 16 + 4$. Find $3^2, 3^4, 3^8, 3^{16} \\bmod 7$ by repeated squaring.',
      answer: '2',
      explanation: '$3^2 = 9 \\equiv 2$, $3^4 \\equiv 2^2 = 4$, $3^8 \\equiv 4^2 = 16 \\equiv 2$, $3^{16} \\equiv 2^2 = 4$. Since $20 = 16 + 4$, $3^{20} = 3^{16} \\cdot 3^4 \\equiv 4 \\cdot 4 = 16 \\equiv 2 \\pmod 7$. (Python\'s `pow(3, 20, 7)` agrees.)',
    },
    {
      kind: 'error',
      prompt: 'A student computes $2^{10} \\bmod 11$. Tap the first wrong line.',
      lines: [
        '$2^{10} = (2^5)^2$',
        '$2^5 = 32 = 2 \\cdot 11 + 10$, so $2^5 \\equiv 10 \\pmod{11}$',
        '$2^{10} \\equiv 10 \\cdot 2 = 20 \\pmod{11}$',
        '$20 \\equiv 9$, so $2^{10} \\bmod 11 = 9$',
      ],
      errorLines: [3],
      explanation: 'Line 3 should **square** $2^5 \\equiv 10$, not multiply it by $2$: $(2^5)^2 \\equiv 10^2 = 100 = 9 \\cdot 11 + 1 \\equiv 1$. So $2^{10} \\bmod 11 = 1$. (A slicker route: $10 \\equiv -1 \\pmod{11}$, so $(2^5)^2 \\equiv (-1)^2 = 1$. This is no coincidence — it is Fermat\'s little theorem, coming up two lessons from now.)',
    },
    {
      kind: 'concept',
      title: 'Number bases: binary and hexadecimal',
      blocks: [
        {
          type: 'p',
          text: 'Writing $156$ means $1 \\cdot 10^2 + 5 \\cdot 10 + 6$. Nothing is special about $10$: for any base $b \\ge 2$, every positive integer has a unique **base-$b$ expansion** ([[dm-number-base]]) $n = d_k b^k + \\cdots + d_1 b + d_0$ with digits $0 \\le d_i < b$. Computers use base $2$ (binary); programmers read it in base $16$ (hexadecimal, digits $0$–$9$ then $A$–$F$ for $10$–$15$).',
        },
        {
          type: 'p',
          text: '**Converting to base $b$ is the division algorithm, repeated.** Dividing $n$ by $b$ gives $n = bq + r$: the remainder $r$ is the last digit $d_0$, and the quotient $q$ holds the remaining digits. Repeat on $q$ until it reaches $0$, then read the remainders from last to first.',
        },
        {
          type: 'derivation',
          title: 'Convert $156$ to binary',
          steps: [
            { tex: '156 = 2 \\cdot 78 + 0', why: 'Remainder $0$: the last binary digit $d_0$.' },
            { tex: '78 = 2 \\cdot 39 + 0', why: '$d_1 = 0$.' },
            { tex: '39 = 2 \\cdot 19 + 1', why: '$d_2 = 1$.' },
            { tex: '19 = 2 \\cdot 9 + 1,\\quad 9 = 2 \\cdot 4 + 1', why: '$d_3 = 1$, $d_4 = 1$.' },
            { tex: '4 = 2 \\cdot 2 + 0,\\quad 2 = 2 \\cdot 1 + 0,\\quad 1 = 2 \\cdot 0 + 1', why: '$d_5 = 0$, $d_6 = 0$, $d_7 = 1$; the quotient hit $0$, so stop.' },
            { tex: '156 = 10011100_2', why: 'Read the remainders bottom to top. Check: $128 + 16 + 8 + 4 = 156$.' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.mod_hex,
          alt: 'The eight bits 1001 1100 of 156, with place values 128 down to 1. The left group of four bits, 1001, is 9; the right group, 1100, is 12, written C. So 156 = 0x9C.',
          caption: 'Because $16 = 2^4$, each hex digit is exactly four bits (a **nibble**). Converting between binary and hex is just grouping from the right.',
        },
        {
          type: 'code',
          title: 'bases.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>

// Repeated division: the remainders are the digits, least significant first.
std::string toBase(unsigned n, unsigned b) {
    const char* digits = "0123456789ABCDEF";
    if (n == 0) return "0";
    std::string s;
    while (n > 0) {
        s.insert(s.begin(), digits[n % b]);   // remainder = next digit
        n /= b;                               // quotient carries on
    }
    return s;
}

int main() {
    for (unsigned n : {156u, 255u, 4096u})
        std::printf("%5u = %s (bin) = %s (oct) = %s (hex)\\n", n,
                    toBase(n, 2).c_str(), toBase(n, 8).c_str(), toBase(n, 16).c_str());
    unsigned color = 0xFF8800;                // RGB: R = FF, G = 88, B = 00
    std::printf("red = %u, green = %u, blue = %u\\n",
                (color >> 16) & 0xFF, (color >> 8) & 0xFF, color & 0xFF);
}`,
          output: `  156 = 10011100 (bin) = 234 (oct) = 9C (hex)
  255 = 11111111 (bin) = 377 (oct) = FF (hex)
 4096 = 1000000000000 (bin) = 10000 (oct) = 1000 (hex)
red = 255, green = 136, blue = 0`,
          annotations: [
            { lines: '9-12', text: 'Exactly the derivation above: `n % b` is the next digit (from the right), `n / b` is what is left.' },
            { lines: '20-22', text: 'Hex shines for packed data: each pair of hex digits of a 24-bit color is one byte. Shifting right by $8$ is dividing by $2^8 = 256$; `& 0xFF` is `mod 256`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Shifts and masks are division and mod',
          text: 'For unsigned integers, `x >> k` is $\\lfloor x / 2^k \\rfloor$ and `x & (2^k - 1)` is $x \\bmod 2^k$. That is why hash tables with power-of-two sizes compute the bucket as `h & (size - 1)` — fast, but it keeps only the low bits of the hash, a weakness the Modular Inverses lesson revisits.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Convert $37$ to binary by repeated division. Put the steps in order.',
      lines: [
        '$37 = 2 \\cdot 18 + 1$',
        '$18 = 2 \\cdot 9 + 0$',
        '$9 = 2 \\cdot 4 + 1$',
        '$4 = 2 \\cdot 2 + 0$',
        '$2 = 2 \\cdot 1 + 0$',
        '$1 = 2 \\cdot 0 + 1$',
        'Read the remainders from last to first: $37 = 100101_2$',
      ],
      explanation: 'Each line divides the previous **quotient** by $2$, so the order is forced. The first remainder is the least significant bit, which is why the remainders are read bottom to top. Check: $100101_2 = 32 + 4 + 1 = 37$.',
    },
    {
      kind: 'numeric',
      prompt: 'Convert the hexadecimal number `0x2F` to decimal.',
      hint: 'The digits are $2$ and $F = 15$; place values are $16$ and $1$.',
      answer: '47',
      explanation: '$\\texttt{0x2F} = 2 \\cdot 16 + 15 = 47$. In binary that is $0010\\,1111_2$: each hex digit becomes one nibble ($2 = 0010$, $F = 1111$), and $32 + 8 + 4 + 2 + 1 = 47$.',
    },
  ],
  takeaways: [
    '$a \\mid b$ means $b = ak$ for an integer $k$. If $a$ divides $b$ and $c$, it divides every combination $mb + nc$.',
    'Division algorithm: $a = dq + r$ with $0 \\le r < d$, where $q = \\lfloor a/d \\rfloor$ and $r = a \\bmod d$ — never negative.',
    'C++ `/` truncates toward zero and `%` takes the sign of the dividend; use `r < 0 ? r + n : r` for the mathematical mod.',
    '$a \\equiv b \\pmod{n}$ iff $n \\mid (a - b)$. Congruences can be added and multiplied, so reduce early — but you cannot cancel a factor sharing a divisor with $n$.',
    'Square-and-multiply computes $a^e \\bmod n$ with $O(\\log e)$ multiplications, reducing after each one.',
    'Base-$b$ digits are the remainders of repeated division by $b$; one hex digit is exactly four bits.',
  ],
  reading: [
    {
      title: 'Wikipedia — Modular arithmetic',
      url: 'https://en.wikipedia.org/wiki/Modular_arithmetic',
      source: 'wikipedia',
      note: 'Congruence classes, the ring $\\mathbb{Z}_n$, and applications from clocks to cryptography.',
    },
    {
      title: 'Wikipedia — Modulo (operation)',
      url: 'https://en.wikipedia.org/wiki/Modulo',
      source: 'wikipedia',
      note: 'A table of how dozens of programming languages define `%` for negative operands — truncated, floored or Euclidean.',
    },
    {
      title: 'Khan Academy — Computer science: cryptography and modular arithmetic',
      url: 'https://www.khanacademy.org/computing/computer-science',
      source: 'khan',
      note: 'The cryptography unit has short interactive lessons on modular arithmetic and fast modular exponentiation.',
    },
    {
      title: 'MIT 6.042J Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The number theory lectures develop divisibility and congruences with proofs, building toward RSA.',
    },
  ],
};
