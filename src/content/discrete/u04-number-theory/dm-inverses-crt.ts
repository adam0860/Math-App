import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  crt_buckets: "<svg viewBox=\"0 0 520 204\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"24\" font-size=\"13\">table size 12: 6 of 12 buckets used</text><rect x=\"10\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"27\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">0</text><rect x=\"48\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">1</text><rect x=\"86\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"103\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">2</text><rect x=\"124\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"141\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">3</text><rect x=\"162\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"179\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">4</text><rect x=\"200\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"217\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">5</text><rect x=\"238\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"255\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">6</text><rect x=\"276\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"293\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">7</text><rect x=\"314\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"331\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">8</text><rect x=\"352\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"369\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">9</text><rect x=\"390\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"407\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">10</text><rect x=\"428\" y=\"34\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"445\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">11</text><text x=\"10\" y=\"106\" font-size=\"13\">table size 13: 13 of 13 buckets used</text><rect x=\"10\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"27\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">0</text><rect x=\"48\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"65\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">1</text><rect x=\"86\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"103\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">2</text><rect x=\"124\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"141\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">3</text><rect x=\"162\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"179\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">4</text><rect x=\"200\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"217\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">5</text><rect x=\"238\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"255\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">6</text><rect x=\"276\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"293\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">7</text><rect x=\"314\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"331\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">8</text><rect x=\"352\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"369\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">9</text><rect x=\"390\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"407\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">10</text><rect x=\"428\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"445\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">11</text><rect x=\"466\" y=\"116\" width=\"34\" height=\"30\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\" stroke=\"currentColor\" stroke-width=\"0.8\"/><text x=\"483\" y=\"136\" text-anchor=\"middle\" font-size=\"12\">12</text><text x=\"10\" y=\"194\" font-size=\"12\" class=\"t-gray\">keys 0, 10, 20, …, 990 hashed by k mod size</text></svg>",
  crt_fermat: "<svg viewBox=\"0 0 520 292\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"170\" cy=\"143.0\" rx=\"24\" ry=\"117.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"340\" cy=\"143.0\" rx=\"24\" ry=\"117.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"170\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">a</text><text x=\"340\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">3a mod 7</text><circle cx=\"170\" cy=\"41.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"161\" y=\"46.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"170\" cy=\"81.8\" r=\"3.5\" fill=\"currentColor\"/><text x=\"161\" y=\"86.8\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"170\" cy=\"122.6\" r=\"3.5\" fill=\"currentColor\"/><text x=\"161\" y=\"127.6\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"170\" cy=\"163.39999999999998\" r=\"3.5\" fill=\"currentColor\"/><text x=\"161\" y=\"168.39999999999998\" text-anchor=\"end\" font-size=\"13\">4</text><circle cx=\"170\" cy=\"204.2\" r=\"3.5\" fill=\"currentColor\"/><text x=\"161\" y=\"209.2\" text-anchor=\"end\" font-size=\"13\">5</text><circle cx=\"170\" cy=\"245.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"161\" y=\"250.0\" text-anchor=\"end\" font-size=\"13\">6</text><circle cx=\"340\" cy=\"41.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"349\" y=\"46.0\" text-anchor=\"start\" font-size=\"13\">1</text><circle cx=\"340\" cy=\"81.8\" r=\"3.5\" fill=\"currentColor\"/><text x=\"349\" y=\"86.8\" text-anchor=\"start\" font-size=\"13\">2</text><circle cx=\"340\" cy=\"122.6\" r=\"3.5\" fill=\"currentColor\"/><text x=\"349\" y=\"127.6\" text-anchor=\"start\" font-size=\"13\">3</text><circle cx=\"340\" cy=\"163.39999999999998\" r=\"3.5\" fill=\"currentColor\"/><text x=\"349\" y=\"168.39999999999998\" text-anchor=\"start\" font-size=\"13\">4</text><circle cx=\"340\" cy=\"204.2\" r=\"3.5\" fill=\"currentColor\"/><text x=\"349\" y=\"209.2\" text-anchor=\"start\" font-size=\"13\">5</text><circle cx=\"340\" cy=\"245.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"349\" y=\"250.0\" text-anchor=\"start\" font-size=\"13\">6</text><line x1=\"175.4\" y1=\"43.6\" x2=\"333.7\" y2=\"119.6\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M333.7,119.6 L325.7,119.8 L328.8,113.2 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"174.3\" y1=\"86.0\" x2=\"335.0\" y2=\"240.2\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M335.0,240.2 L327.3,237.8 L332.3,232.6 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"175.8\" y1=\"121.2\" x2=\"333.2\" y2=\"83.4\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M333.2,83.4 L327.1,88.6 L325.4,81.6 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"175.8\" y1=\"164.8\" x2=\"333.2\" y2=\"202.6\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M333.2,202.6 L325.4,204.4 L327.1,197.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"174.3\" y1=\"200.0\" x2=\"335.0\" y2=\"45.8\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M335.0,45.8 L332.3,53.4 L327.3,48.2 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"175.4\" y1=\"242.4\" x2=\"333.7\" y2=\"166.4\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M333.7,166.4 L328.8,172.8 L325.7,166.2 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"255.0\" y=\"282\" text-anchor=\"middle\" font-size=\"13\">× 3 (mod 7) rearranges 1, 2, …, 6</text></svg>",
  crt_grid: "<svg viewBox=\"0 0 520 210\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"146.0\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">x mod 5 = 0</text><text x=\"218.0\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">1</text><text x=\"290.0\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">2</text><text x=\"362.0\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">3</text><text x=\"434.0\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">4</text><text x=\"100\" y=\"67.0\" text-anchor=\"end\" font-size=\"13\" class=\"t-red\">x mod 3 = 0</text><rect x=\"112\" y=\"42\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"146.0\" y=\"68.0\" text-anchor=\"middle\" font-size=\"17\">0</text><rect x=\"184\" y=\"42\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"218.0\" y=\"68.0\" text-anchor=\"middle\" font-size=\"17\">6</text><rect x=\"256\" y=\"42\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"290.0\" y=\"68.0\" text-anchor=\"middle\" font-size=\"17\">12</text><rect x=\"328\" y=\"42\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"362.0\" y=\"68.0\" text-anchor=\"middle\" font-size=\"17\">3</text><rect x=\"400\" y=\"42\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"434.0\" y=\"68.0\" text-anchor=\"middle\" font-size=\"17\">9</text><text x=\"100\" y=\"111.0\" text-anchor=\"end\" font-size=\"13\" class=\"t-red\">x mod 3 = 1</text><rect x=\"112\" y=\"86\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"146.0\" y=\"112.0\" text-anchor=\"middle\" font-size=\"17\">10</text><rect x=\"184\" y=\"86\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"218.0\" y=\"112.0\" text-anchor=\"middle\" font-size=\"17\">1</text><rect x=\"256\" y=\"86\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"290.0\" y=\"112.0\" text-anchor=\"middle\" font-size=\"17\">7</text><rect x=\"328\" y=\"86\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"362.0\" y=\"112.0\" text-anchor=\"middle\" font-size=\"17\">13</text><rect x=\"400\" y=\"86\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"434.0\" y=\"112.0\" text-anchor=\"middle\" font-size=\"17\">4</text><text x=\"100\" y=\"155.0\" text-anchor=\"end\" font-size=\"13\" class=\"t-red\">x mod 3 = 2</text><rect x=\"112\" y=\"130\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"146.0\" y=\"156.0\" text-anchor=\"middle\" font-size=\"17\">5</text><rect x=\"184\" y=\"130\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"218.0\" y=\"156.0\" text-anchor=\"middle\" font-size=\"17\">11</text><rect x=\"256\" y=\"130\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"290.0\" y=\"156.0\" text-anchor=\"middle\" font-size=\"17\">2</text><rect x=\"328\" y=\"130\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"362.0\" y=\"156.0\" text-anchor=\"middle\" font-size=\"17\">8</text><rect x=\"400\" y=\"130\" width=\"68\" height=\"40\" rx=\"6\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"434.0\" y=\"156.0\" text-anchor=\"middle\" font-size=\"17\">14</text><text x=\"260\" y=\"198\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">each of 0–14 lands in its own cell: 8 ↔ (8 mod 3, 8 mod 5) = (2, 3)</text></svg>",
};
// </figures>

const phi = [1, 1, 2, 2, 4, 2, 6, 4, 6, 4, 10, 4, 12, 6, 8, 8, 16, 6, 18, 8, 12, 10, 22, 8, 20, 12, 18, 12, 28, 8];
const primesTo30 = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

export const lesson: Lesson = {
  id: 'dm-inverses-crt',
  title: 'Modular Inverses and the Chinese Remainder Theorem',
  summary: 'When you can divide mod $n$, how to solve $ax \\equiv b$, Fermat\'s and Euler\'s theorems, recovering a number from its remainders, and why hash tables and check digits love primes.',
  minutes: 20,
  objectives: [
    'Decide when $a$ has an inverse mod $n$ and compute it with the extended Euclidean algorithm',
    'Solve linear congruences $ax \\equiv b \\pmod{n}$, including when $\\gcd(a, n) > 1$',
    'Apply Fermat\'s little theorem and Euler\'s theorem to reduce huge exponents',
    'Solve systems of congruences with the Chinese remainder theorem by explicit construction',
    'Explain why prime moduli help hash tables and check-digit schemes such as ISBN and Luhn',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Division mod $n$ means multiplying by an inverse',
      blocks: [
        {
          type: 'p',
          text: 'In ordinary arithmetic you solve $3x = 4$ by dividing: $x = \\frac{4}{3}$. Mod $7$ there are no fractions — only $0, 1, \\dots, 6$. But dividing by $3$ is really multiplying by a number that undoes $3$, and such a number can exist in $\\mathbb{Z}_7$.',
        },
        {
          type: 'definition',
          term: 'Modular inverse',
          text: 'An [[dm-modular-inverse|inverse]] of $a$ modulo $n$ is an integer $\\bar{a}$ (also written $a^{-1}$) with $a\\bar{a} \\equiv 1 \\pmod{n}$.',
        },
        {
          type: 'derivation',
          title: 'Solve $3x \\equiv 4 \\pmod{7}$',
          steps: [
            { tex: '3 \\cdot 5 = 15 \\equiv 1 \\pmod{7}', why: 'Search the row of $3$ in the multiplication table mod 7: $3 \\cdot 5$ is the one that gives $1$. So $\\bar{3} = 5$.' },
            { tex: '5 \\cdot 3x \\equiv 5 \\cdot 4 \\pmod{7}', why: 'Multiply both sides by the inverse. Multiplying congruences is always allowed.' },
            { tex: 'x \\equiv 20 \\equiv 6 \\pmod{7}', why: 'The left side is $15x \\equiv x$. Reduce $20 = 2 \\cdot 7 + 6$.' },
            { tex: '3 \\cdot 6 = 18 = 2 \\cdot 7 + 4 \\;\\checkmark', why: 'Always check by substituting back.' },
          ],
          result: 'The solutions are all $x \\equiv 6 \\pmod{7}$: $\\dots, -1, 6, 13, 20, \\dots$',
        },
        {
          type: 'theorem',
          name: 'When inverses exist',
          text: '$a$ has an inverse modulo $n$ **if and only if** $\\gcd(a, n) = 1$. The inverse is then unique mod $n$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why exactly $\\gcd(a, n) = 1$',
          text: '**If $\\gcd(a, n) = 1$:** Bézout gives $sa + tn = 1$, so $sa \\equiv 1 \\pmod{n}$ — the coefficient $s$ *is* the inverse. **If $d = \\gcd(a, n) > 1$:** every $ax + ny$ is a multiple of $d$, so $ax - 1$ can never be a multiple of $n$; no inverse. **Uniqueness:** if $a\\bar{a} \\equiv a\\tilde{a} \\equiv 1$, then $\\bar{a} \\equiv \\bar{a}(a\\tilde{a}) = (\\bar{a}a)\\tilde{a} \\equiv \\tilde{a}$.',
        },
        {
          type: 'derivation',
          title: 'Inverse of $7$ modulo $26$ with the extended Euclidean algorithm',
          steps: [
            { tex: '26 = 3 \\cdot 7 + 5,\\quad 7 = 1 \\cdot 5 + 2,\\quad 5 = 2 \\cdot 2 + 1', why: 'Euclid: the last nonzero remainder is $1$, so $\\gcd(7, 26) = 1$ and an inverse exists.' },
            { tex: '1 = 5 - 2 \\cdot 2 = 5 - 2(7 - 5) = 3 \\cdot 5 - 2 \\cdot 7', why: 'Back-substitute $2 = 7 - 5$.' },
            { tex: '= 3(26 - 3 \\cdot 7) - 2 \\cdot 7 = 3 \\cdot 26 - 11 \\cdot 7', why: 'Back-substitute $5 = 26 - 3 \\cdot 7$.' },
            { tex: '-11 \\cdot 7 \\equiv 1 \\pmod{26} \\implies \\bar{7} \\equiv -11 \\equiv 15', why: 'Reduce the coefficient of $7$ into $\\{0, \\dots, 25\\}$. Check: $7 \\cdot 15 = 105 = 4 \\cdot 26 + 1$. ✓' },
          ],
          result: '$7^{-1} \\equiv 15 \\pmod{26}$ — the key you need to decrypt the affine cipher in the next lesson.',
        },
        {
          type: 'code',
          title: 'crt.cpp',
          runnable: true,
          code: `#include <cstdio>

long long extgcd(long long a, long long b, long long& s, long long& t) {
    if (b == 0) { s = 1; t = 0; return a; }
    long long s1, t1;
    long long g = extgcd(b, a % b, s1, t1);   // s1*b + t1*(a % b) = g
    s = t1;
    t = s1 - (a / b) * t1;                    // rewrite a % b = a - (a/b)*b
    return g;
}

// Inverse of a mod n, or -1 if gcd(a, n) != 1.
long long inverse(long long a, long long n) {
    long long s, t;
    if (extgcd(((a % n) + n) % n, n, s, t) != 1) return -1;
    return ((s % n) + n) % n;
}

// Solve x = r[i] (mod m[i]) for pairwise coprime moduli.
long long crt(const long long r[], const long long m[], int k) {
    long long M = 1;
    for (int i = 0; i < k; ++i) M *= m[i];
    long long x = 0;
    for (int i = 0; i < k; ++i) {
        long long Mi = M / m[i];                  // divisible by every other modulus
        long long yi = inverse(Mi % m[i], m[i]);  // Mi * yi = 1 (mod m[i])
        x = (x + r[i] * Mi % M * yi) % M;
    }
    return x;
}

int main() {
    std::printf("inverse of 3 mod 7   = %lld\\n", inverse(3, 7));
    std::printf("inverse of 7 mod 26  = %lld\\n", inverse(7, 26));
    std::printf("inverse of 4 mod 6   = %lld  (none)\\n", inverse(4, 6));
    const long long r[] = {2, 3, 2}, m[] = {3, 5, 7};
    std::printf("x = 2 (mod 3), 3 (mod 5), 2 (mod 7)  ->  x = %lld (mod 105)\\n", crt(r, m, 3));
}`,
          output: `inverse of 3 mod 7   = 5
inverse of 7 mod 26  = 15
inverse of 4 mod 6   = -1  (none)
x = 2 (mod 3), 3 (mod 5), 2 (mod 7)  ->  x = 23 (mod 105)`,
          annotations: [
            { lines: '3-10', text: 'Recursive extended Euclid: solve the smaller problem $(b, a \\bmod b)$, then convert its coefficients using $a \\bmod b = a - \\lfloor a/b \\rfloor b$.' },
            { lines: '13-17', text: 'If the gcd is not $1$ there is no inverse. Otherwise reduce the Bézout coefficient into $0..n-1$ (it is often negative).' },
            { lines: '20-30', text: 'The Chinese remainder construction, explained later in this lesson.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the inverse of $5$ modulo $17$: the number $\\bar{5} \\in \\{0, \\dots, 16\\}$ with $5\\bar{5} \\equiv 1 \\pmod{17}$.',
      hint: 'Look for a multiple of $17$ plus $1$ that is divisible by $5$: $18, 35, 52, \\dots$',
      answer: '7',
      explanation: '$5 \\cdot 7 = 35 = 2 \\cdot 17 + 1$, so $\\bar{5} = 7$. With Euclid: $17 = 3 \\cdot 5 + 2$, $5 = 2 \\cdot 2 + 1$, so $1 = 5 - 2 \\cdot 2 = 5 - 2(17 - 3 \\cdot 5) = 7 \\cdot 5 - 2 \\cdot 17$, and the coefficient of $5$ is $7$.',
    },
    {
      kind: 'concept',
      title: 'Linear congruences',
      blocks: [
        {
          type: 'p',
          text: 'A **linear congruence** is $ax \\equiv b \\pmod{n}$. When $\\gcd(a, n) = 1$ there is exactly one solution mod $n$: $x \\equiv \\bar{a}b$. When $d = \\gcd(a, n) > 1$, the picture changes.',
        },
        {
          type: 'theorem',
          name: 'Solving $ax \\equiv b \\pmod{n}$',
          text: 'Let $d = \\gcd(a, n)$. If $d \\nmid b$, there is **no** solution. If $d \\mid b$, there are exactly $d$ solutions mod $n$, found by dividing everything by $d$: solve $\\frac{a}{d}x \\equiv \\frac{b}{d} \\pmod{\\frac{n}{d}}$, then list the solution plus multiples of $\\frac{n}{d}$.',
        },
        {
          type: 'derivation',
          title: 'Solve $6x \\equiv 4 \\pmod{10}$',
          steps: [
            { tex: 'd = \\gcd(6, 10) = 2,\\quad 2 \\mid 4', why: 'A solution means $6x - 4 = 10k$, so $2 \\mid 4$ is necessary. It holds, so there are $2$ solutions mod $10$.' },
            { tex: '3x \\equiv 2 \\pmod{5}', why: 'Divide $6x - 4 = 10k$ by $2$: $3x - 2 = 5k$. Now $\\gcd(3, 5) = 1$.' },
            { tex: 'x \\equiv \\bar{3} \\cdot 2 = 2 \\cdot 2 = 4 \\pmod{5}', why: '$\\bar{3} = 2$ mod $5$ since $3 \\cdot 2 = 6 \\equiv 1$.' },
            { tex: 'x \\equiv 4 \\text{ or } 9 \\pmod{10}', why: 'Lift back: the numbers in $\\{0, \\dots, 9\\}$ that are $\\equiv 4 \\pmod 5$. Check: $24 \\equiv 4$ and $54 \\equiv 4 \\pmod{10}$. ✓' },
          ],
          result: 'By contrast $6x \\equiv 3 \\pmod{10}$ has no solution: $6x - 10k$ is always even and $3$ is odd.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Do not "divide by $6$" or cancel blindly: from $6x \\equiv 4 \\pmod{10}$ you may **not** conclude $3x \\equiv 2 \\pmod{10}$ (that would give $x \\equiv 4$ only, losing $x = 9$, since $3 \\cdot 9 = 27 \\not\\equiv 2 \\pmod{10}$). When you divide by a common factor, divide the modulus too.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Solve $4x \\equiv 3 \\pmod{9}$. Give the solution in $\\{0, 1, \\dots, 8\\}$.',
      hint: 'First find $\\bar{4}$ mod $9$, then multiply both sides by it.',
      label: '$x =$',
      answer: '3',
      explanation: '$\\gcd(4, 9) = 1$, so there is a unique solution. $4 \\cdot 7 = 28 = 3 \\cdot 9 + 1$, so $\\bar{4} = 7$. Then $x \\equiv 7 \\cdot 3 = 21 \\equiv 3 \\pmod{9}$. Check: $4 \\cdot 3 = 12 = 9 + 3$. ✓',
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: the congruence $6x \\equiv 3 \\pmod{9}$ has no solutions, because $6$ has no inverse modulo $9$.',
      answer: false,
      explanation: 'No inverse means no *unique* solution, not no solution. $d = \\gcd(6, 9) = 3$ divides $3$, so there are exactly $3$ solutions mod $9$: divide by $3$ to get $2x \\equiv 1 \\pmod 3$, so $x \\equiv 2 \\pmod 3$, i.e. $x \\in \\{2, 5, 8\\}$. Check: $6 \\cdot 2 = 12 \\equiv 3$, $6 \\cdot 5 = 30 \\equiv 3$, $6 \\cdot 8 = 48 \\equiv 3 \\pmod 9$.',
    },
    {
      kind: 'concept',
      title: "Fermat's little theorem",
      blocks: [
        {
          type: 'p',
          text: 'Powers mod a prime cycle back to $1$ with a period that is always a divisor of $p - 1$. This one theorem gives a shortcut for huge exponents, a second way to find inverses, and a fast primality test.',
        },
        {
          type: 'theorem',
          name: "Fermat's little theorem",
          tex: 'p \\text{ prime},\\; p \\nmid a \\implies a^{p-1} \\equiv 1 \\pmod{p}',
          text: 'Equivalently, $a^p \\equiv a \\pmod{p}$ for every integer $a$.',
        },
        {
          type: 'figure',
          svg: FIG.crt_fermat,
          alt: 'An arrow diagram from 1 through 6 to 3a mod 7: 1 goes to 3, 2 to 6, 3 to 2, 4 to 5, 5 to 1 and 6 to 4. Every output is hit exactly once.',
          caption: 'Multiplying by $3$ mod $7$ is a bijection on $\\{1, \\dots, 6\\}$ — it only shuffles the nonzero residues. That shuffle is the whole proof.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'a \\cdot 1,\\; a \\cdot 2,\\; \\dots,\\; a(p-1) \\pmod{p}', why: 'Multiply each nonzero residue by $a$.' },
            { tex: 'ai \\equiv aj \\implies i \\equiv j', why: 'Since $p \\nmid a$, $a$ is invertible mod $p$, so we may cancel it. The $p - 1$ products are distinct and nonzero: a rearrangement of $1, 2, \\dots, p-1$.' },
            { tex: 'a^{p-1}(p-1)! \\equiv (p-1)! \\pmod{p}', why: 'The product of a list does not depend on its order: multiply all $p - 1$ congruences together.' },
            { tex: 'a^{p-1} \\equiv 1 \\pmod{p}', why: '$(p-1)!$ is a product of numbers coprime to $p$, so it is invertible mod $p$; cancel it.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Compute $3^{100} \\bmod 7$',
          steps: [
            { tex: '3^6 \\equiv 1 \\pmod{7}', why: 'Fermat with $p = 7$, since $7 \\nmid 3$.' },
            { tex: '100 = 6 \\cdot 16 + 4', why: 'Only the exponent mod $6$ matters.' },
            { tex: '3^{100} = (3^6)^{16} \\cdot 3^4 \\equiv 1^{16} \\cdot 81', why: 'Split the exponent and apply Fermat to the big part.' },
            { tex: '81 = 11 \\cdot 7 + 4 \\implies 3^{100} \\equiv 4 \\pmod{7}', why: 'Reduce. (`pow(3, 100, 7)` in Python agrees.)' },
          ],
          result: 'Rule of thumb: mod a prime $p$, reduce exponents mod $p - 1$ (when the base is not a multiple of $p$).',
        },
        {
          type: 'list',
          items: [
            '**Inverses:** $a \\cdot a^{p-2} = a^{p-1} \\equiv 1$, so $\\bar{a} \\equiv a^{p-2} \\pmod{p}$ — one modular exponentiation.',
            '**Primality testing:** if $a^{n-1} \\not\\equiv 1 \\pmod{n}$ for some $a$ with $\\gcd(a, n) = 1$, then $n$ is certainly composite. The converse fails: the Carmichael number $561 = 3 \\cdot 11 \\cdot 17$ satisfies $a^{560} \\equiv 1$ for every $a$ coprime to it. Practical tests (Miller–Rabin) strengthen this idea.',
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use Fermat\'s little theorem to compute $2^{100} \\bmod 13$.',
      hint: '$2^{12} \\equiv 1 \\pmod{13}$. Write $100 = 12q + r$.',
      answer: '3',
      explanation: '$13$ is prime and $13 \\nmid 2$, so $2^{12} \\equiv 1$. $100 = 12 \\cdot 8 + 4$, so $2^{100} = (2^{12})^8 \\cdot 2^4 \\equiv 16 \\equiv 3 \\pmod{13}$.',
    },
    {
      kind: 'concept',
      title: "Euler's totient and Euler's theorem",
      blocks: [
        {
          type: 'p',
          text: 'Fermat\'s theorem needs a prime modulus. RSA works mod $n = pq$, so we need the generalisation. The key is to count the residues that *are* invertible.',
        },
        {
          type: 'definition',
          term: "Euler's totient function",
          text: '[[dm-euler-totient|Euler\'s totient]] $\\varphi(n)$ is the number of integers in $\\{1, 2, \\dots, n\\}$ that are coprime to $n$ — exactly the number of invertible residues mod $n$.',
        },
        {
          type: 'table',
          headers: ['$n$', 'formula', 'example'],
          rows: [
            ['prime $p$', '$\\varphi(p) = p - 1$', '$\\varphi(7) = 6$'],
            ['prime power $p^k$', '$\\varphi(p^k) = p^k - p^{k-1}$', '$\\varphi(8) = 8 - 4 = 4$'],
            ['$pq$, distinct primes', '$\\varphi(pq) = (p-1)(q-1)$', '$\\varphi(15) = 2 \\cdot 4 = 8$'],
            ['$\\gcd(m, n) = 1$', '$\\varphi(mn) = \\varphi(m)\\varphi(n)$', '$\\varphi(36) = \\varphi(4)\\varphi(9) = 2 \\cdot 6 = 12$'],
          ],
          caption: 'For $p^k$, the non-coprime numbers are the $p^{k-1}$ multiples of $p$. For $pq$, remove the $q$ multiples of $p$ and the $p$ multiples of $q$, but $pq$ itself was removed twice: $pq - q - p + 1 = (p-1)(q-1)$.',
        },
        {
          type: 'graph',
          x: [0, 31],
          y: [0, 31],
          equal: true,
          functions: [{ expr: 'x - 1', label: '$y = n - 1$', color: 'gray', dashed: true }],
          points: phi.map((v, i) => ({ x: i + 1, y: v, color: primesTo30.has(i + 1) ? ('red' as const) : ('blue' as const) })),
          caption: '$\\varphi(n)$ for $n = 1, \\dots, 30$. Red dots (primes) sit exactly on the line $y = n - 1$: every smaller number is coprime to a prime. Numbers with many small prime factors, like $30$ ($\\varphi = 8$), sit far below.',
        },
        {
          type: 'theorem',
          name: "Euler's theorem",
          tex: '\\gcd(a, n) = 1 \\implies a^{\\varphi(n)} \\equiv 1 \\pmod{n}',
          text: 'Same proof as Fermat: multiplying the $\\varphi(n)$ invertible residues by $a$ just shuffles them. With $n = p$ prime it *is* Fermat\'s theorem.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Compute $\\varphi(36)$, the number of integers in $\\{1, \\dots, 36\\}$ coprime to $36$.',
      hint: '$36 = 2^2 \\cdot 3^2$. Use $\\varphi(p^k) = p^k - p^{k-1}$ and multiplicativity, or remove multiples of $2$ and $3$.',
      answer: '12',
      explanation: '$\\varphi(36) = \\varphi(4)\\varphi(9) = (4 - 2)(9 - 3) = 2 \\cdot 6 = 12$. Directly: of the $36$ numbers, $18$ are even and $12$ are multiples of $3$, with $6$ multiples of $6$ counted twice; $36 - 18 - 12 + 6 = 12$. They are $1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35$.',
    },
    {
      kind: 'error',
      prompt: 'A student computes $7^{10} \\bmod 10$. Tap the first wrong line.',
      lines: [
        'We want $7^{10} \\bmod 10$, and $\\gcd(7, 10) = 1$.',
        'By Fermat\'s little theorem with $p = 10$, $7^{9} \\equiv 1 \\pmod{10}$.',
        'So $7^{10} = 7^9 \\cdot 7 \\equiv 7 \\pmod{10}$.',
        'The last digit of $7^{10}$ is $7$.',
      ],
      errorLines: [2],
      explanation: 'Fermat\'s theorem requires a **prime** modulus, and $10$ is not prime. Use Euler instead: $\\varphi(10) = 4$, so $7^4 \\equiv 1$ and $7^{10} = (7^4)^2 \\cdot 7^2 \\equiv 49 \\equiv 9 \\pmod{10}$. Indeed $7^{10} = 282\\,475\\,249$ ends in $9$.',
    },
    {
      kind: 'concept',
      title: 'The Chinese remainder theorem',
      blocks: [
        {
          type: 'p',
          text: 'A puzzle from the Chinese mathematician Sunzi (around the 4th century): *a number leaves remainder $2$ when divided by $3$, remainder $3$ when divided by $5$, and remainder $2$ when divided by $7$. What is it?* Knowing a number\'s remainders by several coprime moduli pins it down completely.',
        },
        {
          type: 'theorem',
          name: 'Chinese remainder theorem',
          text: 'If $m_1, \\dots, m_k$ are **pairwise coprime** and $M = m_1 m_2 \\cdots m_k$, then the system $x \\equiv a_i \\pmod{m_i}$ ($i = 1, \\dots, k$) has a solution, and it is unique modulo $M$.',
        },
        {
          type: 'figure',
          svg: FIG.crt_grid,
          alt: 'A 3 by 5 grid indexed by x mod 3 (rows) and x mod 5 (columns) holding each number from 0 to 14 exactly once; 8 is highlighted in the cell for remainders 2 and 3.',
          caption: 'Why it works for $3$ and $5$: the map $x \\mapsto (x \\bmod 3, x \\bmod 5)$ sends the $15$ numbers $0, \\dots, 14$ to the $15$ cells with no collisions, so it is a bijection — every pair of remainders comes from exactly one $x$.',
        },
        {
          type: 'derivation',
          title: 'Sunzi\'s puzzle: $x \\equiv 2 \\pmod 3$, $x \\equiv 3 \\pmod 5$, $x \\equiv 2 \\pmod 7$',
          steps: [
            { tex: 'M = 105,\\quad M_1 = 35,\\; M_2 = 21,\\; M_3 = 15', why: '$M_i = M / m_i$ is divisible by every modulus **except** $m_i$.' },
            { tex: 'y_1 = \\overline{35} \\bmod 3 = \\overline{2} = 2,\\;\\; y_2 = \\overline{21} \\bmod 5 = \\overline{1} = 1,\\;\\; y_3 = \\overline{15} \\bmod 7 = \\overline{1} = 1', why: 'Find each inverse $y_i$ with $M_i y_i \\equiv 1 \\pmod{m_i}$; it exists because $\\gcd(M_i, m_i) = 1$. ($35 \\equiv 2$, $2 \\cdot 2 = 4 \\equiv 1 \\pmod 3$.)' },
            { tex: 'x = a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3 = 2 \\cdot 35 \\cdot 2 + 3 \\cdot 21 \\cdot 1 + 2 \\cdot 15 \\cdot 1', why: 'Mod $m_1$, the second and third terms vanish and the first is $a_1 \\cdot 1$; likewise for the other moduli. Each term is a "switch" that is on for exactly one modulus.' },
            { tex: '= 140 + 63 + 30 = 233 \\equiv 23 \\pmod{105}', why: 'Reduce mod $M$. Check: $23 = 7 \\cdot 3 + 2 = 4 \\cdot 5 + 3 = 3 \\cdot 7 + 2$. ✓' },
          ],
          result: 'All solutions: $x \\equiv 23 \\pmod{105}$. The program `crt.cpp` above performs exactly these steps.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why uniqueness holds',
          text: 'If $x$ and $x\'$ both solve the system, then every $m_i$ divides $x - x\'$. Since the $m_i$ share no prime factors, their product $M$ divides $x - x\'$ (by unique factorization). So $x \\equiv x\' \\pmod{M}$. Without coprimality this fails: $x \\equiv 0 \\pmod 4$ and $x \\equiv 1 \\pmod 6$ has no solution at all.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'CRT in code and games',
          text: 'RSA implementations decrypt about $4\\times$ faster by working mod $p$ and mod $q$ separately and combining with CRT. Big-integer libraries do arithmetic in several small prime moduli in parallel. In a game, three looping cycles of lengths $3$, $5$ and $7$ frames (say, a blinking light, an animation and a sound) return to a given combination of phases exactly once every $105$ frames.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for solving $x \\equiv a_i \\pmod{m_i}$ (pairwise coprime $m_i$) by the CRT construction in order.',
      lines: [
        'Compute $M = m_1 m_2 \\cdots m_k$.',
        'For each $i$, compute $M_i = M / m_i$.',
        'For each $i$, find $y_i$ with $M_i y_i \\equiv 1 \\pmod{m_i}$ (extended Euclid).',
        'Form $x = \\sum_i a_i M_i y_i$.',
        'Reduce $x$ modulo $M$ and check it against each congruence.',
      ],
      explanation: 'Each step needs the previous one: $M_i$ needs $M$; the inverse $y_i$ needs $M_i$; the sum needs all $y_i$. The construction works because $M_i y_i$ is $\\equiv 1 \\pmod{m_i}$ and $\\equiv 0$ modulo every other $m_j$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the smallest non-negative $x$ with $x \\equiv 1 \\pmod{3}$, $x \\equiv 2 \\pmod{4}$ and $x \\equiv 3 \\pmod{5}$.',
      hint: '$M = 60$. You can use the construction, or list numbers $\\equiv 3 \\pmod 5$ ($3, 8, 13, \\dots$) and test the other two conditions.',
      answer: '58',
      explanation: 'Sieving: numbers $\\equiv 3 \\pmod 5$ that are also $\\equiv 2 \\pmod 4$: $18, 38, 58$ (step $20$). Among these, $58 = 19 \\cdot 3 + 1$ is $\\equiv 1 \\pmod 3$. Construction: $M_1 = 20, y_1 = 2$; $M_2 = 15, y_2 = 3$; $M_3 = 12, y_3 = 3$; $x = 1 \\cdot 40 + 2 \\cdot 45 + 3 \\cdot 36 = 238 \\equiv 58 \\pmod{60}$.',
    },
    {
      kind: 'concept',
      title: 'Applications: hash tables and check digits',
      blocks: [
        {
          type: 'p',
          text: '**Prime-sized hash tables.** A simple hash table stores key $k$ in bucket $k \\bmod m$. Real keys often share structure — IDs that are all multiples of $10$, pointers aligned to $16$ bytes. If keys are multiples of $s$, they can only reach $m / \\gcd(s, m)$ buckets, because $sk \\bmod m$ is always a multiple of $\\gcd(s, m)$.',
        },
        {
          type: 'figure',
          svg: FIG.crt_buckets,
          alt: 'Two rows of buckets. With table size 12, keys 0, 10, 20 and so on only reach the even buckets 0, 2, 4, 6, 8, 10. With table size 13, they reach all 13 buckets.',
          caption: 'Keys that are multiples of $10$: with $m = 12$, $\\gcd(10, 12) = 2$ wastes half the table; with prime $m = 13$, $\\gcd(10, 13) = 1$ and all buckets are used. Prime sizes are safe against **every** stride that is not a multiple of $m$.',
        },
        {
          type: 'p',
          text: 'The same reason appears in **double hashing**: probing slots $h, h + s, h + 2s, \\dots \\pmod{m}$ visits every slot only if $\\gcd(s, m) = 1$; with $m$ prime, any step $1 \\le s < m$ works.',
        },
        {
          type: 'p',
          text: '**Check digits.** A [[dm-check-digit]] lets a computer catch typing errors. ISBN-10 chooses the last digit so that $\\sum_{i=1}^{10} (11 - i)\\,d_i \\equiv 0 \\pmod{11}$ (the digit "X" stands for $10$). Because $11$ is prime, changing one digit by $e \\ne 0$ changes the sum by $we$ with weight $1 \\le w \\le 10$, which is never $\\equiv 0$; swapping two adjacent digits changes it by $\\pm(d_i - d_{i+1})$, also never $0$ unless the digits are equal. **Every** single-digit error and every adjacent transposition is detected.',
        },
        {
          type: 'p',
          text: 'Credit cards use the **Luhn algorithm** mod $10$: from the right, double every second digit (subtracting $9$ if the result exceeds $9$), add everything, and require a multiple of $10$. It catches all single-digit errors and most adjacent swaps (not $09 \\leftrightarrow 90$) — weaker than ISBN because $10$ is not prime, but it works with ordinary decimal digits.',
        },
        {
          type: 'code',
          title: 'checksum.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <set>
#include <string>

// Luhn: from the right, double every second digit (subtract 9 if > 9); sum must be 0 mod 10.
bool luhnValid(const std::string& digits) {
    int sum = 0;
    bool doubleIt = false;
    for (int i = static_cast<int>(digits.size()) - 1; i >= 0; --i) {
        int d = digits[i] - '0';
        if (doubleIt) { d *= 2; if (d > 9) d -= 9; }
        sum += d;
        doubleIt = !doubleIt;
    }
    return sum % 10 == 0;
}

// ISBN-10: sum of (10 - i) * d_i over all 10 digits must be 0 mod 11 ('X' = 10).
bool isbnValid(const std::string& s) {
    int sum = 0;
    for (int i = 0; i < 10; ++i) {
        int d = (s[i] == 'X') ? 10 : s[i] - '0';
        sum += (10 - i) * d;
    }
    return sum % 11 == 0;
}

int main() {
    std::printf("Luhn 79927398713: %s\\n", luhnValid("79927398713") ? "valid" : "invalid");
    std::printf("Luhn 79927398731: %s\\n", luhnValid("79927398731") ? "valid" : "invalid");
    std::printf("ISBN 0306406152:  %s\\n", isbnValid("0306406152") ? "valid" : "invalid");
    std::printf("ISBN 0306406125:  %s\\n", isbnValid("0306406125") ? "valid" : "invalid");

    // Keys that are all multiples of 10 (IDs 0, 10, 20, ...) hashed by k mod size:
    for (int size : {12, 13}) {
        std::set<int> used;
        for (int k = 0; k < 1000; k += 10) used.insert(k % size);
        std::printf("table size %d: %zu buckets used\\n", size, used.size());
    }
}`,
          output: `Luhn 79927398713: valid
Luhn 79927398731: invalid
ISBN 0306406152:  valid
ISBN 0306406125:  invalid
table size 12: 6 buckets used
table size 13: 13 buckets used`,
          annotations: [
            { lines: 30, text: 'Swapping the last two digits (`13` → `31`) is caught.' },
            { lines: 32, text: 'Swapping `52` → `25` in the ISBN is caught too: the weighted sum changes by $2 - 5 = -3 \\not\\equiv 0 \\pmod{11}$.' },
            { lines: '35-39', text: 'The bucket experiment from the figure.' },
          ],
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find the ISBN-10 check digit for `0-306-40615-?`.',
      template: 'The weighted sum of the first nine digits, $10 \\cdot 0 + 9 \\cdot 3 + 8 \\cdot 0 + 7 \\cdot 6 + 6 \\cdot 4 + 5 \\cdot 0 + 4 \\cdot 6 + 3 \\cdot 1 + 2 \\cdot 5$, is ___. The check digit $d$ (weight $1$) must make the total $\\equiv 0 \\pmod{11}$, so $d =$ ___.',
      blanks: [{ answers: ['$130$'] }, { answers: ['$2$'] }],
      wordBank: ['$130$', '$2$', '$9$', '$128$', '$0$', '$X$'],
      explanation: '$0 + 27 + 0 + 42 + 24 + 0 + 24 + 3 + 10 = 130 = 11 \\cdot 11 + 9$. We need $130 + d \\equiv 0$, i.e. $d \\equiv -9 \\equiv 2 \\pmod{11}$. Total $132 = 12 \\cdot 11$. ✓ The full ISBN is 0-306-40615-2, exactly what `checksum.cpp` validates.',
    },
    {
      kind: 'mcq',
      prompt: 'A hash table uses bucket $= k \\bmod m$, and the keys are memory addresses, all multiples of $8$. Which table size spreads them over the most buckets?',
      options: [
        { text: '$m = 1009$ (prime)', correct: true, why: '$\\gcd(8, 1009) = 1$, so multiples of $8$ reach all $1009$ buckets.' },
        { text: '$m = 1024$', why: '$\\gcd(8, 1024) = 8$: only $1024 / 8 = 128$ buckets are ever used.' },
        { text: '$m = 1000$', why: '$\\gcd(8, 1000) = 8$: only $125$ buckets are used.' },
        { text: '$m = 1008$', why: '$1008 = 8 \\cdot 126$, so $\\gcd = 8$ and only $126$ buckets are used.' },
      ],
      explanation: 'Multiples of $s$ hit exactly $m / \\gcd(s, m)$ buckets. Power-of-two sizes are the worst choice here: they keep only the low bits, which are all zero for aligned addresses. A prime size is coprime to every stride. (Libraries that use power-of-two tables for speed compensate by scrambling the hash bits first.)',
    },
  ],
  takeaways: [
    '$a$ is invertible mod $n$ iff $\\gcd(a, n) = 1$; the extended Euclidean algorithm finds the inverse as a Bézout coefficient.',
    '$ax \\equiv b \\pmod{n}$ with $d = \\gcd(a, n)$: no solution if $d \\nmid b$, otherwise exactly $d$ solutions — divide $a$, $b$ **and** $n$ by $d$.',
    'Fermat: $a^{p-1} \\equiv 1 \\pmod{p}$ for prime $p \\nmid a$. Euler: $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$ when $\\gcd(a, n) = 1$, with $\\varphi(pq) = (p-1)(q-1)$.',
    'CRT: pairwise coprime moduli determine $x$ uniquely mod their product; construct it as $\\sum a_i M_i y_i$.',
    'Prime moduli make strides coprime to the table size (hash tables, double hashing) and make weighted check digits catch every single error and transposition.',
  ],
  reading: [
    {
      title: 'Wikipedia — Chinese remainder theorem',
      url: 'https://en.wikipedia.org/wiki/Chinese_remainder_theorem',
      source: 'wikipedia',
      note: 'History from Sunzi onwards, several constructions, and applications in computing.',
    },
    {
      title: "Wikipedia — Fermat's little theorem",
      url: 'https://en.wikipedia.org/wiki/Fermat%27s_little_theorem',
      source: 'wikipedia',
      note: 'Several proofs, the Fermat primality test, and Carmichael numbers.',
    },
    {
      title: 'Wikipedia — Luhn algorithm',
      url: 'https://en.wikipedia.org/wiki/Luhn_algorithm',
      source: 'wikipedia',
      note: 'The credit-card checksum step by step, with the errors it can and cannot detect.',
    },
    {
      title: 'MIT 6.042J Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The number theory lectures cover inverses, Euler\'s theorem and the road to RSA.',
    },
  ],
};
