import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'implicit-equation',
    term: 'Implicit equation',
    aliases: ['implicit curve', 'implicitly defined function'],
    course: 'calc1',
    category: 'Derivatives',
    short: 'An equation relating $x$ and $y$, such as $x^2 + y^2 = 25$, that is not solved for $y$. Its graph is an *implicit curve*; near most points it defines $y$ as a function of $x$.',
    long: 'An explicit function has the form $y = f(x)$. An implicit equation has the form $F(x, y) = 0$ (or any equation in $x$ and $y$). Its graph may fail the vertical line test, but small pieces of it are usually graphs of functions, so $\\frac{dy}{dx}$ can be found by implicit differentiation.',
    tex: 'x^2 + y^2 = 25 \\quad\\text{vs.}\\quad y = \\sqrt{25 - x^2}',
    see: ['implicit-differentiation', 'function', 'vertical-line-test'],
  },
  {
    id: 'folium-of-descartes',
    term: 'Folium of Descartes',
    course: 'calc1',
    category: 'Derivatives',
    short: 'The curve $x^3 + y^3 = 3axy$ (for example $x^3 + y^3 = 6xy$): a loop in the first quadrant with two tails approaching the line $x + y = -a$. A classic example for implicit differentiation.',
    tex: 'x^3 + y^3 = 6xy, \\qquad \\frac{dy}{dx} = \\frac{2y - x^2}{y^2 - 2x}',
    see: ['implicit-equation', 'implicit-differentiation'],
  },
  {
    id: 'inverse-function-derivative',
    term: 'Derivative of an inverse function',
    aliases: ['inverse function rule'],
    course: 'calc1',
    category: 'Derivatives',
    short: 'If $f$ is one-to-one and differentiable with $f(a) = b$ and $f\'(a) \\neq 0$, then $f^{-1}$ is differentiable at $b$ and $(f^{-1})\'(b) = \\frac{1}{f\'(a)}$.',
    long: 'Geometrically, the graph of $f^{-1}$ is the reflection of the graph of $f$ across $y = x$; reflecting swaps rise and run, so a tangent slope $m$ becomes $\\frac{1}{m}$. Algebraically, differentiate $f(f^{-1}(x)) = x$ with the chain rule.',
    tex: '(f^{-1})\'(b) = \\frac{1}{f\'\\left(f^{-1}(b)\\right)}',
    see: ['inverse-function', 'chain-rule', 'one-to-one-function'],
  },
];
