import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'factoring-by-grouping',
    term: 'Factoring by Grouping',
    aliases: ['grouping'],
    course: 'algebra',
    category: 'Polynomials',
    short: 'Factoring a polynomial (usually four terms) by splitting it into groups, factoring each group, and then factoring out the binomial the groups share.',
    long: 'Grouping undoes the expansion $(A + B)(C + D) = AC + AD + BC + BD$. If the binomials left after factoring each pair are not identical, try reordering the terms or factoring a negative out of the second pair.',
    tex: 'x^3 + 3x^2 + 2x + 6 = x^2(x + 3) + 2(x + 3) = (x + 3)(x^2 + 2)',
    see: ['factoring', 'greatest-common-factor', 'ac-method'],
  },
  {
    id: 'ac-method',
    term: 'AC Method',
    aliases: ['splitting the middle term'],
    course: 'algebra',
    category: 'Polynomials',
    short: 'A way to factor $ax^2 + bx + c$: find two numbers whose product is $ac$ and whose sum is $b$, use them to split $bx$ into two terms, then factor by grouping.',
    long: 'It works because when $(px + q)(rx + s)$ is expanded, the outer and inner products $psx$ and $qrx$ add to the middle term, and their coefficients multiply to $ps \\cdot qr = (pr)(qs) = ac$.',
    tex: '6x^2 + 11x - 10 = 6x^2 + 15x - 4x - 10 = (2x + 5)(3x - 2)',
    see: ['factoring-by-grouping', 'trinomial', 'factoring'],
  },
  {
    id: 'sum-and-difference-of-cubes',
    term: 'Sum and Difference of Cubes',
    aliases: ['sum of cubes', 'difference of cubes'],
    course: 'algebra',
    category: 'Polynomials',
    short: 'The factoring patterns $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ and $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.',
    long: 'Mnemonic SOAP for the signs: the binomial has the **S**ame sign as the original, the middle term of the trinomial has the **O**pposite sign, and the last term is **A**lways **P**ositive. The quadratic factor does not factor further over the real numbers.',
    tex: 'x^3 - 8 = (x - 2)(x^2 + 2x + 4)',
    see: ['difference-of-squares', 'factoring'],
  },
  {
    id: 'excluded-value',
    term: 'Excluded Value',
    aliases: ['restriction', 'domain restriction'],
    course: 'algebra',
    category: 'Rational Expressions',
    short: 'A value of the variable that makes a denominator zero, so the expression is undefined there. Excluded values must be found from the original expression, before any cancelling.',
    tex: '\\frac{x + 3}{x^2 - 4} \\quad (x \\neq 2,\\ x \\neq -2)',
    see: ['rational-expression', 'domain'],
  },
];
