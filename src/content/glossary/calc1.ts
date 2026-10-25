import type { GlossaryEntry } from '../types';

/*
 * Core Calculus I glossary. One entry per id in CALC1_GLOSSARY_IDS
 * (scripts/glossary-master.ts). Prose strings are double-quoted so that
 * primes (f'(x)) and apostrophes need no escaping; every TeX backslash is doubled.
 */
export const calc1Glossary: GlossaryEntry[] = [
  // ------------------------------------------------------------------ Limits
  {
    id: 'limit',
    term: 'Limit',
    aliases: ['limit of a function', 'two-sided limit'],
    course: 'calc1',
    category: 'Limits',
    short:
      "$\\lim_{x \\to a} f(x) = L$ means the values $f(x)$ can be made as close to $L$ as we like by taking $x$ close enough to $a$ (but not equal to $a$).",
    long:
      "A limit describes where a function is *heading*, not where it is. The value $f(a)$ itself is irrelevant: $f$ need not even be defined at $a$. That is exactly what lets calculus talk about the slope of a curve at a point, where the naive slope formula would be $0/0$.\n\n" +
      "Precisely, the two-sided limit exists and equals $L$ when both [[one-sided-limit|one-sided limits]] exist and equal $L$; the rigorous version is the [[epsilon-delta-definition]]. Most limits are computed with the [[limit-laws]], algebraic simplification, or the [[squeeze-theorem]].\n\n" +
      "**Pitfall:** plugging in numbers close to $a$ suggests a limit but does not prove one — $\\sin(\\pi/x)$ evaluated at $x = 0.1, 0.01, 0.001$ gives $0$ every time, yet $\\lim_{x \\to 0}\\sin(\\pi/x)$ does not exist. Floating-point evaluation near $a$ can also lose all its accuracy to rounding.",
    tex: '\\lim_{x \\to a} f(x) = L',
    see: ['one-sided-limit', 'epsilon-delta-definition', 'limit-laws', 'continuity'],
  },
  {
    id: 'one-sided-limit',
    term: 'One-Sided Limit',
    aliases: ['left-hand limit', 'right-hand limit'],
    course: 'calc1',
    category: 'Limits',
    short:
      "A limit taken as $x$ approaches $a$ from only one side: $\\lim_{x \\to a^-} f(x)$ uses $x < a$, and $\\lim_{x \\to a^+} f(x)$ uses $x > a$.",
    long:
      "Some functions behave differently on each side of a point — piecewise functions, $\\lfloor x \\rfloor$, $|x|/x$, or $\\sqrt{x}$ at $0$, which only has a right side. One-sided limits let you describe each side separately.\n\n" +
      "The two-sided [[limit]] exists if and only if both one-sided limits exist **and** are equal. If they exist but differ, the graph has a [[jump-discontinuity]] there.\n\n" +
      "In code, this is the classic boundary bug: a collision test that uses `<` on one side and `<=` on the other is effectively choosing which one-sided limit the object belongs to.",
    tex: '\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = L = \\lim_{x \\to a^+} f(x)',
    see: ['limit', 'jump-discontinuity', 'infinite-limit'],
  },
  {
    id: 'infinite-limit',
    term: 'Infinite Limit',
    aliases: ['vertical asymptote', 'limit equals infinity'],
    course: 'calc1',
    category: 'Limits',
    short:
      "$\\lim_{x \\to a} f(x) = \\infty$ means $f(x)$ grows without bound as $x \\to a$; the line $x = a$ is then a vertical asymptote.",
    long:
      "Writing $\\lim_{x \\to a} f(x) = \\infty$ is a precise way of saying *how* a limit fails to exist: the values become arbitrarily large (for every $M$ there is a $\\delta > 0$ with $f(x) > M$ whenever $0 < |x - a| < \\delta$). Similarly for $-\\infty$ and for one-sided versions.\n\n" +
      "If at least one one-sided limit at $a$ is $\\pm\\infty$, then $x = a$ is a vertical asymptote and $f$ has an [[infinite-discontinuity]]. Typical sources: a denominator tending to $0$ while the numerator does not, $\\ln x$ as $x \\to 0^+$, $\\tan x$ at $\\pi/2$.\n\n" +
      "**Pitfall:** $\\infty$ is not a number, so the [[limit-laws]] do not apply to it directly; $\\infty - \\infty$ and $\\infty/\\infty$ are [[indeterminate-form|indeterminate forms]]. Also check signs on each side: $\\lim_{x \\to 0^-} 1/x = -\\infty$ but $\\lim_{x \\to 0^+} 1/x = +\\infty$, so $\\lim_{x \\to 0} 1/x$ is neither.",
    tex: '\\lim_{x \\to 0} \\frac{1}{x^2} = \\infty, \\qquad \\lim_{x \\to 0^+} \\ln x = -\\infty',
    see: ['limit', 'one-sided-limit', 'infinite-discontinuity', 'limit-at-infinity'],
  },
  {
    id: 'limit-at-infinity',
    term: 'Limit at Infinity',
    aliases: ['horizontal asymptote', 'end behavior'],
    course: 'calc1',
    category: 'Limits',
    short:
      "$\\lim_{x \\to \\infty} f(x) = L$ means $f(x)$ gets arbitrarily close to $L$ as $x$ grows without bound; the line $y = L$ is then a horizontal asymptote.",
    long:
      "Limits at infinity describe long-run behavior: where a cooling cup of coffee, a damped spring, or a smoothed camera ends up. Key facts: $\\lim_{x \\to \\infty} 1/x^r = 0$ for $r > 0$, and $\\lim_{x \\to \\infty} e^{-x} = 0$.\n\n" +
      "For a rational function, divide numerator and denominator by the highest power of $x$ in the denominator. If the degrees are equal the limit is the ratio of leading coefficients; if the numerator's degree is smaller the limit is $0$; if larger, the function is unbounded (no horizontal asymptote).\n\n" +
      "A graph *can* cross its horizontal asymptote (e.g. $\\sin(x)/x$ crosses $y = 0$ infinitely often). In games, frame-rate-independent smoothing $p \\leftarrow p + (T - p)(1 - e^{-k\\,\\Delta t})$ makes the position approach the target $T$ as a limit at infinity: it gets arbitrarily close but never exactly arrives.",
    tex: '\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{2x^2 - x} = \\frac{3}{2}',
    example:
      '#include <cmath>\n\n// Exponential smoothing: pos -> target as time -> infinity,\n// independent of frame rate (k = 1/seconds).\nfloat smoothTowards(float pos, float target, float k, float dt) {\n    return pos + (target - pos) * (1.0f - std::exp(-k * dt));\n}',
    exampleLang: 'cpp',
    see: ['limit', 'infinite-limit', 'lhopitals-rule'],
  },
  {
    id: 'limit-laws',
    term: 'Limit Laws',
    aliases: ['limit properties', 'direct substitution'],
    course: 'calc1',
    category: 'Limits',
    short:
      "Rules saying that limits respect sums, differences, constant multiples, products, quotients (when the denominator's limit is not $0$), powers and roots — **provided the individual limits exist**.",
    long:
      "If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$ both exist, then the limit of $f \\pm g$ is $L \\pm M$, of $cf$ is $cL$, of $fg$ is $LM$, of $f/g$ is $L/M$ if $M \\ne 0$, and of $[f]^n$ is $L^n$. Together these give **direct substitution**: for polynomials, rational functions (where the denominator is nonzero), and any function [[continuity|continuous]] at $a$, $\\lim_{x \\to a} f(x) = f(a)$.\n\n" +
      "**Pitfall:** the hypotheses matter. You cannot split $\\lim_{x \\to 0} x \\sin(1/x)$ into $(\\lim x)(\\lim \\sin(1/x))$ because the second limit does not exist — use the [[squeeze-theorem]] instead. When substitution gives $0/0$, the quotient law does not apply: you have an [[indeterminate-form]], and must simplify first (factor, rationalize, use a trig identity, or [[lhopitals-rule]]).",
    tex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)} \\quad \\text{if } \\lim_{x \\to a} g(x) \\ne 0',
    see: ['limit', 'indeterminate-form', 'continuity', 'squeeze-theorem'],
  },
  {
    id: 'indeterminate-form',
    term: 'Indeterminate Form',
    aliases: ['0/0', 'infinity over infinity'],
    course: 'calc1',
    category: 'Limits',
    short:
      "A limit whose naive substitution gives $\\tfrac{0}{0}$, $\\tfrac{\\infty}{\\infty}$, $0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$ or $\\infty^0$ — forms that by themselves say nothing about the answer.",
    long:
      "\"Indeterminate\" means the form alone cannot determine the limit: $\\frac{x^2}{x} \\to 0$, $\\frac{x}{x} \\to 1$ and $\\frac{x}{x^2} \\to \\infty$ as $x \\to 0$ are all $\\tfrac{0}{0}$ forms. It is a signal to do more work, never an answer.\n\n" +
      "Standard tools: factor and cancel, multiply by a conjugate, combine fractions, divide by the dominant power, or apply [[lhopitals-rule]] (directly for $\\tfrac{0}{0}$ and $\\tfrac{\\infty}{\\infty}$; after rewriting for $0\\cdot\\infty$ and $\\infty - \\infty$; after taking a logarithm for the exponent forms $0^0$, $1^\\infty$, $\\infty^0$).\n\n" +
      "**Not indeterminate:** $\\tfrac{1}{0}$-type forms (nonzero over something tending to $0$) give an [[infinite-limit]] or no limit, and $0^\\infty = 0$, $\\infty \\cdot \\infty = \\infty$. In IEEE floating point, `0.0/0.0` and `inf - inf` produce `NaN` for exactly this reason.",
    tex: '\\frac{0}{0},\\; \\frac{\\infty}{\\infty},\\; 0\\cdot\\infty,\\; \\infty-\\infty,\\; 0^0,\\; 1^\\infty,\\; \\infty^0',
    see: ['lhopitals-rule', 'limit-laws', 'limit'],
  },
  {
    id: 'squeeze-theorem',
    term: 'Squeeze Theorem',
    aliases: ['sandwich theorem', 'pinching theorem'],
    course: 'calc1',
    category: 'Limits',
    short:
      "If $g(x) \\le f(x) \\le h(x)$ for $x$ near $a$ (except possibly at $a$) and $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} f(x) = L$.",
    long:
      "If a function is trapped between two others that both head to the same value, it has nowhere else to go. This handles oscillating functions that the [[limit-laws]] cannot split apart.\n\n" +
      "Classic use: since $-1 \\le \\sin(1/x) \\le 1$, we have $-x^2 \\le x^2\\sin(1/x) \\le x^2$, and both bounds tend to $0$, so $\\lim_{x \\to 0} x^2 \\sin(1/x) = 0$. A geometric squeeze on the unit circle proves the fundamental trig limit $\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1$, which is what makes $\\frac{d}{dx}\\sin x = \\cos x$ work.\n\n" +
      "**Pitfall:** both bounds must have the **same** limit; and the inequality only needs to hold near $a$, not everywhere. The theorem also works for $x \\to \\pm\\infty$.",
    tex: 'g(x) \\le f(x) \\le h(x),\\;\\; \\lim_{x\\to a} g(x) = \\lim_{x\\to a} h(x) = L \\implies \\lim_{x \\to a} f(x) = L',
    see: ['limit', 'limit-laws'],
  },
  {
    id: 'epsilon-delta-definition',
    term: 'Epsilon-Delta Definition',
    aliases: ['ε-δ definition', 'precise definition of a limit', 'epsilon-delta'],
    course: 'calc1',
    category: 'Limits',
    short:
      "$\\lim_{x \\to a} f(x) = L$ means: for every $\\varepsilon > 0$ there is a $\\delta > 0$ such that $0 < |x - a| < \\delta$ implies $|f(x) - L| < \\varepsilon$.",
    long:
      "Think of it as a challenge game. A skeptic names an output tolerance $\\varepsilon$ (\"get within $0.001$ of $L$\"); you must answer with an input tolerance $\\delta$ that guarantees it. The limit is $L$ exactly when you can win for **every** $\\varepsilon$, however small.\n\n" +
      "The condition $0 < |x - a|$ excludes $x = a$ itself, which is why $f(a)$ does not affect the [[limit]]. For $f(x) = 3x + 1$ at $a = 2$, $|f(x) - 7| = 3|x - 2|$, so $\\delta = \\varepsilon/3$ always works.\n\n" +
      "This is the same idea as a tolerance in engineering or a unit test with an `epsilon` comparison: \"close enough\" is made precise by saying how close the input must be to guarantee a given output accuracy. Every limit law and theorem in calculus is ultimately proved from this definition.",
    tex: '\\forall \\varepsilon > 0\\; \\exists \\delta > 0:\\; 0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon',
    see: ['limit', 'continuity', 'limit-laws'],
  },

  // -------------------------------------------------------------- Continuity
  {
    id: 'continuity',
    term: 'Continuity',
    aliases: ['continuous', 'continuous function', 'continuous at a point'],
    course: 'calc1',
    category: 'Continuity',
    short:
      "$f$ is continuous at $a$ if $f(a)$ is defined, $\\lim_{x \\to a} f(x)$ exists, and the two are equal: $\\lim_{x \\to a} f(x) = f(a)$.",
    long:
      "Intuitively, a continuous function has no breaks, holes or jumps: small changes in input produce small changes in output. Precisely, all **three** conditions must hold at $a$; the way one fails classifies the discontinuity as a [[removable-discontinuity]], [[jump-discontinuity]] or [[infinite-discontinuity]]. A function is continuous on an interval if it is continuous at every point (one-sided at closed endpoints).\n\n" +
      "Polynomials, rational functions, roots, exponentials, logarithms and trig functions are continuous on their domains, and sums, products, quotients (denominator $\\ne 0$) and compositions of continuous functions are continuous. That is why direct substitution works for them.\n\n" +
      "Continuity is the hypothesis behind the [[intermediate-value-theorem]] and the [[extreme-value-theorem]]. Note that $1/x$ *is* continuous on its domain — it is discontinuous at $0$ only in the sense that it is undefined there.",
    tex: '\\lim_{x \\to a} f(x) = f(a)',
    see: ['limit', 'removable-discontinuity', 'jump-discontinuity', 'infinite-discontinuity', 'intermediate-value-theorem', 'differentiable'],
  },
  {
    id: 'removable-discontinuity',
    term: 'Removable Discontinuity',
    aliases: ['hole', 'point discontinuity'],
    course: 'calc1',
    category: 'Continuity',
    short:
      "A discontinuity at $a$ where $\\lim_{x \\to a} f(x)$ exists but $f(a)$ is undefined or different from it — a hole that redefining one value would fill.",
    long:
      "The graph has a single missing (or misplaced) point. Example: $f(x) = \\frac{x^2 - 1}{x - 1}$ equals $x + 1$ for $x \\ne 1$, so $\\lim_{x \\to 1} f(x) = 2$ even though $f(1)$ is undefined. Defining $f(1) = 2$ removes the discontinuity.\n\n" +
      "Removable discontinuities usually come from a common factor that cancels, and they are exactly the $\\tfrac{0}{0}$ [[indeterminate-form|indeterminate forms]] whose limits are finite. The [[derivative]] itself is defined as the limit at such a hole: the [[difference-quotient]] is undefined at $h = 0$, and the derivative is the value that fills it.\n\n" +
      "In code, `sin(x)/x` returns `NaN` at `x == 0`; numerical libraries define `sinc(0) = 1` precisely to remove this discontinuity.",
    tex: '\\frac{x^2 - 1}{x - 1} = x + 1 \\;\\; (x \\ne 1) \\implies \\lim_{x \\to 1} \\frac{x^2-1}{x-1} = 2',
    see: ['continuity', 'jump-discontinuity', 'infinite-discontinuity', 'indeterminate-form'],
  },
  {
    id: 'jump-discontinuity',
    term: 'Jump Discontinuity',
    aliases: ['jump', 'step discontinuity'],
    course: 'calc1',
    category: 'Continuity',
    short:
      "A discontinuity at $a$ where both one-sided limits exist (finite) but are different, so the graph jumps from one value to another.",
    long:
      "Step functions show this: $\\lfloor x \\rfloor$ jumps by $1$ at every integer, and a shipping cost that changes at a weight threshold jumps at that weight. Since $\\lim_{x \\to a^-} f(x) \\ne \\lim_{x \\to a^+} f(x)$, the two-sided [[limit]] does not exist, and no choice of $f(a)$ can make $f$ continuous.\n\n" +
      "A function with a jump is not [[differentiable]] there. However, a bounded function with finitely many jumps on $[a, b]$ is still integrable: the [[definite-integral]] simply adds up the pieces.\n\n" +
      "In games, quantizing positions to a grid (`floor(x / tile)`) creates jump discontinuities — the reason snapped movement looks choppy unless it is smoothed.",
    tex: '\\lim_{x \\to a^-} f(x) \\ne \\lim_{x \\to a^+} f(x) \\quad \\text{(both finite)}',
    see: ['one-sided-limit', 'continuity', 'removable-discontinuity'],
  },
  {
    id: 'infinite-discontinuity',
    term: 'Infinite Discontinuity',
    aliases: ['essential discontinuity at an asymptote'],
    course: 'calc1',
    category: 'Continuity',
    short:
      "A discontinuity at $a$ where at least one one-sided limit is $\\infty$ or $-\\infty$; the graph has a vertical asymptote at $x = a$.",
    long:
      "Examples: $1/x$ at $0$, $1/(x-2)^2$ at $2$, $\\tan x$ at $\\pi/2$. The function blows up near $a$, so it cannot be repaired by redefining a single value.\n\n" +
      "To detect one in a rational function, cancel common factors first: a zero of the denominator that survives cancellation is a vertical asymptote (an [[infinite-limit]]); one that cancels is only a [[removable-discontinuity]].\n\n" +
      "**Pitfall:** never integrate straight across an infinite discontinuity with the [[fundamental-theorem-of-calculus]]. $\\int_{-1}^{1} \\frac{dx}{x^2}$ is *not* $\\left[-\\frac{1}{x}\\right]_{-1}^{1} = -2$ (a positive function cannot have negative area); the FTC requires continuity on $[a, b]$, and the integral actually diverges.",
    tex: '\\lim_{x \\to a^{\\pm}} f(x) = \\pm\\infty \\;\\text{(at least one side)}',
    see: ['infinite-limit', 'continuity', 'removable-discontinuity'],
  },
  {
    id: 'intermediate-value-theorem',
    term: 'Intermediate Value Theorem',
    aliases: ['IVT'],
    course: 'calc1',
    category: 'Continuity',
    short:
      "If $f$ is continuous on $[a, b]$ and $N$ is any number strictly between $f(a)$ and $f(b)$, then there is a $c$ in $(a, b)$ with $f(c) = N$.",
    long:
      "A continuous function cannot skip values: to get from $f(a)$ to $f(b)$ its graph must cross every horizontal line in between. The most common use is root-finding — if $f(a)$ and $f(b)$ have opposite signs, $f$ has a zero in $(a, b)$.\n\n" +
      "The hypothesis of [[continuity]] on the **closed** interval is essential: $f(x) = 1/x$ has $f(-1) < 0 < f(1)$ but no zero. The theorem guarantees existence only — it does not say where $c$ is or how many such $c$ there are.\n\n" +
      "The IVT is the theory behind the **bisection method**: repeatedly halve an interval on which $f$ changes sign. It is slower than [[newtons-method]] but cannot fail, which is why robust root-finders (and ray-marching against signed distance fields) often bracket a root before refining it.",
    tex: 'f \\in C[a,b],\\; f(a) < N < f(b) \\implies \\exists\\, c \\in (a,b):\\; f(c) = N',
    see: ['continuity', 'extreme-value-theorem', 'newtons-method'],
  },

  // ------------------------------------------------------------- Derivatives
  {
    id: 'secant-line',
    term: 'Secant Line',
    aliases: ['secant'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The line through two points $(a, f(a))$ and $(b, f(b))$ on a graph; its slope $\\frac{f(b) - f(a)}{b - a}$ is the average rate of change of $f$ on $[a, b]$.",
    long:
      "A secant line connects two points on a curve. Its slope is the [[average-rate-of-change]] — the average velocity if $f$ is position.\n\n" +
      "Letting the second point slide toward the first, $b = a + h$ with $h \\to 0$, the secant lines rotate toward the [[tangent-line]], and their slopes (the [[difference-quotient]]) approach the [[derivative]] $f'(a)$. This limiting process is the entire geometric idea of differential calculus.\n\n" +
      "The [[mean-value-theorem]] says that for a smooth enough function, some tangent line is parallel to the secant line. (The word comes from Latin *secare*, \"to cut\" — unrelated to the secant *function* $\\sec x$.)",
    tex: 'm_{\\text{sec}} = \\frac{f(b) - f(a)}{b - a}',
    see: ['tangent-line', 'average-rate-of-change', 'difference-quotient', 'mean-value-theorem'],
  },
  {
    id: 'tangent-line',
    term: 'Tangent Line',
    aliases: ['tangent', 'line tangent to a curve'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The line through $(a, f(a))$ with slope $f'(a)$: $y = f(a) + f'(a)(x - a)$. It is the limit of secant lines and the best straight-line fit to the graph near $a$.",
    long:
      "Zoom in far enough on a differentiable function and its graph looks straight; the tangent line is that straight line. It is defined as the limit of [[secant-line|secant lines]], so its slope is the [[derivative]] $f'(a)$.\n\n" +
      "Point-slope form gives the equation directly: $y - f(a) = f'(a)(x - a)$. The same function $L(x) = f(a) + f'(a)(x - a)$ is the [[linearization]] used for estimates and by [[newtons-method]].\n\n" +
      "**Pitfalls:** a tangent line can cross the curve (at an [[inflection-point]], like $y = x^3$ at $0$) and can touch the curve elsewhere too — \"touches once\" is not the definition. A vertical tangent (e.g. $\\sqrt[3]{x}$ at $0$) has no finite slope, so the function is not differentiable there.",
    tex: 'y = f(a) + f\'(a)(x - a)',
    see: ['secant-line', 'derivative', 'linearization'],
  },
  {
    id: 'derivative',
    term: 'Derivative',
    aliases: ["f'(x)", 'dy/dx', 'derivative function'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The derivative of $f$ at $a$ is $f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$, if this limit exists: the slope of the tangent line and the instantaneous rate of change.",
    long:
      "The derivative measures how fast $f$ changes per unit change in input, right at a point. Geometrically it is the slope of the [[tangent-line]]; physically it is [[velocity]] when $f$ is position. Letting $a$ vary gives a new function $f'(x)$, the derivative function.\n\n" +
      "It is defined as the limit of the [[difference-quotient]] — a $\\tfrac{0}{0}$ form that must be simplified before taking the limit. In practice you rarely use the definition: the [[power-rule]], [[product-rule]], [[quotient-rule]] and [[chain-rule]] are all proved from it once and then reused.\n\n" +
      "**Numerically**, a computer cannot take $h \\to 0$. The forward difference $\\frac{f(x+h) - f(x)}{h}$ has error proportional to $h$, while the central difference $\\frac{f(x+h) - f(x-h)}{2h}$ has error proportional to $h^2$. But making $h$ too small causes catastrophic cancellation in floating point; for doubles, $h \\approx 10^{-5}$ is a good choice for central differences.",
    tex: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}',
    example:
      '#include <functional>\n\n// Central-difference derivative: error ~ h^2 (plus rounding ~ eps/h).\ndouble derivative(const std::function<double(double)>& f, double x,\n                  double h = 1e-5) {\n    return (f(x + h) - f(x - h)) / (2.0 * h);\n}',
    exampleLang: 'cpp',
    see: ['difference-quotient', 'tangent-line', 'differentiable', 'instantaneous-rate-of-change', 'leibniz-notation'],
  },
  {
    id: 'difference-quotient',
    term: 'Difference Quotient',
    aliases: ['Newton quotient'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The expression $\\frac{f(x + h) - f(x)}{h}$ ($h \\ne 0$): the slope of the secant line from $x$ to $x + h$. Its limit as $h \\to 0$ is the derivative.",
    long:
      "The difference quotient is \"change in output over change in input\" for a step of size $h$. It is an [[average-rate-of-change]], the slope of a [[secant-line]].\n\n" +
      "Computing a [[derivative]] from the definition means: expand $f(x+h)$, simplify the numerator until a factor of $h$ appears, cancel it, then let $h \\to 0$. For $f(x) = x^2$: $\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h \\to 2x$. Cancelling is legal because $h \\ne 0$ inside the limit.\n\n" +
      "**Pitfall:** the expansion of $f(x + h)$ means substituting $x + h$ everywhere — $(x + h)^2$, not $x^2 + h$. In code, the difference quotient with a small fixed $h$ *is* the finite-difference derivative used in physics engines and gradient checks.",
    tex: '\\frac{f(x+h) - f(x)}{h}',
    see: ['derivative', 'secant-line', 'average-rate-of-change'],
  },
  {
    id: 'differentiable',
    term: 'Differentiable',
    aliases: ['differentiability', 'smooth'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "$f$ is differentiable at $a$ if $f'(a)$ exists (the limit of the difference quotient is a finite number); differentiable on an open interval if this holds at every point of it.",
    long:
      "Graphically, a differentiable function is locally straight: zooming in at $a$ the graph looks like a non-vertical line. Differentiability fails at **corners** ($|x|$ at $0$, where the one-sided slopes are $-1$ and $1$), **cusps** ($x^{2/3}$ at $0$), **vertical tangents** ($\\sqrt[3]{x}$ at $0$), and at any discontinuity.\n\n" +
      "**Theorem:** if $f$ is differentiable at $a$, then $f$ is continuous at $a$. The converse is false — $|x|$ is continuous but not differentiable at $0$. So differentiability is the stronger condition.\n\n" +
      "Many theorems ([[rolles-theorem]], the [[mean-value-theorem]], [[lhopitals-rule]], [[newtons-method]]) require differentiability on an open interval. In games, an animation curve that is continuous but not differentiable produces a visible \"kink\" — sudden changes in velocity — which is why easing curves are designed to have matching derivatives at the joints.",
    tex: '\\text{differentiable at } a \\implies \\text{continuous at } a',
    see: ['derivative', 'continuity', 'tangent-line'],
  },
  {
    id: 'instantaneous-rate-of-change',
    term: 'Instantaneous Rate of Change',
    aliases: ['rate of change at a point'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The rate at which $f$ is changing at a single input $a$, defined as the limit of average rates of change over shrinking intervals: it equals $f'(a)$.",
    long:
      "A speedometer reading is an instantaneous rate: not miles divided by hours over a trip, but how fast you are going *now*. Since \"change over zero time\" is $\\tfrac{0}{0}$, it is defined as the [[limit]] of [[average-rate-of-change|average rates]] over the interval $[a, a + h]$ as $h \\to 0$.\n\n" +
      "Its units are output units per input unit (meters per second, dollars per item). Interpreting $f'(a)$ in context is a common exam question: $C'(100) = 3$ means the cost is increasing at about \\$3 per item when $100$ items are produced.\n\n" +
      "[[velocity|Velocity]], marginal cost, current, and the slope of the [[tangent-line]] are all instantaneous rates of change.",
    tex: '\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} = f\'(a)',
    see: ['average-rate-of-change', 'derivative', 'velocity'],
  },
  {
    id: 'average-rate-of-change',
    term: 'Average Rate of Change',
    aliases: ['average velocity'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The change in output divided by the change in input over an interval: $\\frac{f(b) - f(a)}{b - a}$, the slope of the secant line.",
    long:
      "Average rate of change answers \"on average, how fast did $f$ change from $a$ to $b$?\" — total distance over total time gives average speed, for example. It is the slope of the [[secant-line]].\n\n" +
      "It only uses the endpoints: a car that goes 60 miles in an hour has average velocity 60 mph whether it cruised steadily or sped and stopped. The [[mean-value-theorem]] guarantees that (for a differentiable function) the instantaneous rate equals the average rate at some moment.\n\n" +
      "Shrinking the interval turns the average rate into the [[instantaneous-rate-of-change]]. Don't confuse it with the [[average-value]] of a function, which averages the *outputs* using an integral.",
    tex: '\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}',
    see: ['secant-line', 'instantaneous-rate-of-change', 'mean-value-theorem', 'average-value'],
  },
  {
    id: 'leibniz-notation',
    term: 'Leibniz Notation',
    aliases: ['dy/dx', 'd/dx'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "Writing the derivative of $y = f(x)$ as $\\frac{dy}{dx}$ (and the operator as $\\frac{d}{dx}$), suggesting a ratio of tiny changes in $y$ and $x$.",
    long:
      "$\\frac{dy}{dx}$ is not literally a fraction — it is the limit of $\\frac{\\Delta y}{\\Delta x}$ — but it behaves like one in many useful ways. The [[chain-rule]] reads $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$, and [[u-substitution]] writes $du = g'(x)\\,dx$. Evaluation at a point is written $\\frac{dy}{dx}\\Big|_{x=a}$; higher derivatives are $\\frac{d^2y}{dx^2}$.\n\n" +
      "Leibniz notation names the variables explicitly, which matters in [[related-rates]] and [[implicit-differentiation]] where several quantities depend on time $t$: $\\frac{dV}{dt}$ is unambiguous where $V'$ is not.\n\n" +
      "Lagrange's prime notation $f'(x)$ and Newton's dot notation $\\dot{x}$ (common in physics for time derivatives) mean the same thing. The separate symbols $dx$ and $dy$ also have a meaning on their own: see [[differential]].",
    tex: '\\frac{dy}{dx} = f\'(x), \\qquad \\frac{d^2y}{dx^2} = f\'\'(x)',
    see: ['derivative', 'chain-rule', 'differential', 'higher-order-derivative'],
  },
  {
    id: 'velocity',
    term: 'Velocity',
    aliases: ['instantaneous velocity', 'speed'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "For a position function $s(t)$, the velocity is $v(t) = s'(t)$, the instantaneous rate of change of position. Its sign gives the direction; speed is $|v(t)|$.",
    long:
      "Velocity is the derivative of position with respect to time. Positive velocity means moving in the positive direction, negative means the opposite direction, and $v = 0$ means momentarily at rest (often a turning point).\n\n" +
      "**Speed** is $|v(t)|$, which has no direction. An object is speeding up when $v$ and [[acceleration]] have the same sign, and slowing down when they have opposite signs — not simply when $a > 0$.\n\n" +
      "Going backwards, the integral of velocity gives [[displacement]]: $\\int_{t_1}^{t_2} v(t)\\,dt = s(t_2) - s(t_1)$, while the integral of speed gives total distance traveled. A game loop's `position += velocity * dt` is a Riemann-sum approximation of exactly this integral.",
    tex: 'v(t) = s\'(t) = \\frac{ds}{dt}, \\qquad \\text{speed} = |v(t)|',
    see: ['acceleration', 'displacement', 'derivative', 'instantaneous-rate-of-change'],
  },
  {
    id: 'acceleration',
    term: 'Acceleration',
    aliases: ['instantaneous acceleration'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The rate of change of velocity: $a(t) = v'(t) = s''(t)$, the second derivative of position.",
    long:
      "Acceleration says how quickly velocity changes. Near Earth's surface, a falling object has constant acceleration $a = -9.8\\ \\text{m/s}^2$; integrating twice gives $v(t) = v_0 - 9.8t$ and $s(t) = s_0 + v_0 t - 4.9t^2$.\n\n" +
      "Since $a = s''$, it is a [[higher-order-derivative]]. Its sign relative to [[velocity]] determines speeding up (same sign) versus slowing down (opposite signs). Geometrically, $s'' > 0$ means the position graph is [[concavity|concave up]].\n\n" +
      "Game physics runs this calculus backwards each frame: forces give acceleration, acceleration updates velocity, velocity updates position. Updating velocity *first* and then using the new velocity for position (semi-implicit Euler) is far more stable for springs and orbits than the naive order.",
    tex: 'a(t) = v\'(t) = s\'\'(t) = \\frac{d^2 s}{dt^2}',
    example:
      'struct Body { float pos, vel; };\n\n// Semi-implicit (symplectic) Euler step: v += a*dt, then x += v*dt.\nvoid step(Body& b, float accel, float dt) {\n    b.vel += accel * dt;   // integrate acceleration -> velocity\n    b.pos += b.vel * dt;   // integrate (new) velocity -> position\n}',
    exampleLang: 'cpp',
    see: ['velocity', 'higher-order-derivative', 'concavity', 'antiderivative'],
  },
  {
    id: 'higher-order-derivative',
    term: 'Higher-Order Derivative',
    aliases: ['second derivative', 'third derivative', "f''(x)", 'nth derivative'],
    course: 'calc1',
    category: 'Derivatives',
    short:
      "The derivative of a derivative: $f'' = (f')'$, $f''' = (f'')'$, and in general $f^{(n)}$, the result of differentiating $n$ times.",
    long:
      "Each derivative measures the rate of change of the previous one. For position $s$: $s'$ is [[velocity]], $s''$ is [[acceleration]], and $s'''$ is *jerk* — the quantity camera and animation systems try to keep smooth.\n\n" +
      "The second derivative describes the shape of a graph: $f'' > 0$ means [[concavity|concave up]], $f'' < 0$ concave down, used in the [[second-derivative-test]]. Notation: $f''(x)$, $\\frac{d^2y}{dx^2}$, $f^{(4)}(x)$ (parentheses, so it's not read as a power).\n\n" +
      "Patterns are worth spotting: the derivatives of $\\sin x$ cycle with period 4, $\\frac{d^n}{dx^n}e^{x} = e^x$, and the $(n{+}1)$st derivative of a degree-$n$ polynomial is $0$. Higher derivatives at a point build Taylor polynomials, a Calculus II topic.",
    tex: 'f\'\'(x) = \\frac{d^2y}{dx^2}, \\qquad f^{(n)}(x) = \\frac{d^n y}{dx^n}',
    see: ['derivative', 'acceleration', 'concavity', 'second-derivative-test'],
  },

  // -------------------------------------------------- Differentiation Rules
  {
    id: 'power-rule',
    term: 'Power Rule',
    aliases: ['power rule for derivatives'],
    course: 'calc1',
    category: 'Differentiation Rules',
    short:
      "$\\frac{d}{dx} x^n = n x^{n-1}$ for every real exponent $n$ (wherever $x^n$ is defined and differentiable).",
    long:
      "Bring the exponent down as a coefficient and lower the exponent by one: $\\frac{d}{dx}x^5 = 5x^4$. For positive integers it follows from the binomial expansion of $(x + h)^n$ in the [[difference-quotient]]; it extends to all real $n$ using [[logarithmic-differentiation]].\n\n" +
      "Rewrite roots and reciprocals as powers first: $\\sqrt{x} = x^{1/2}$ gives $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$, and $\\frac{1}{x^3} = x^{-3}$ gives $-3x^{-4}$. The special case $n = 0$ says constants have derivative $0$.\n\n" +
      "**Pitfalls:** the power rule is for *variable base, constant exponent*. $\\frac{d}{dx}2^x \\ne x\\,2^{x-1}$ — exponentials need $\\frac{d}{dx}a^x = a^x \\ln a$, and $x^x$ needs logarithmic differentiation. And $(3x+1)^5$ needs the [[chain-rule]] too.",
    tex: '\\frac{d}{dx}\\, x^n = n\\,x^{n-1}',
    see: ['derivative', 'chain-rule', 'logarithmic-differentiation', 'antiderivative'],
  },
  {
    id: 'product-rule',
    term: 'Product Rule',
    aliases: ['Leibniz rule'],
    course: 'calc1',
    category: 'Differentiation Rules',
    short:
      "If $f$ and $g$ are differentiable, then $(fg)' = f'g + fg'$: derivative of the first times the second, plus the first times the derivative of the second.",
    long:
      "Picture a rectangle with sides $f$ and $g$. When both grow a little, the area gains a strip $f'g\\,\\Delta x$ along one side and $fg'\\,\\Delta x$ along the other; the tiny corner piece is of order $(\\Delta x)^2$ and vanishes in the limit.\n\n" +
      "**The classic mistake** is $(fg)' = f'g'$. Check: $(x \\cdot x)' = 2x$, but $f'g' = 1$. Example: $\\frac{d}{dx}[x^2 \\sin x] = 2x\\sin x + x^2 \\cos x$.\n\n" +
      "For three factors: $(fgh)' = f'gh + fg'h + fgh'$. Sometimes simplifying first avoids the rule entirely — expand $(x^2 + 1)(x - 3)$ before differentiating if that's easier.",
    tex: '\\frac{d}{dx}\\big[f(x)\\,g(x)\\big] = f\'(x)\\,g(x) + f(x)\\,g\'(x)',
    see: ['quotient-rule', 'chain-rule', 'derivative'],
  },
  {
    id: 'quotient-rule',
    term: 'Quotient Rule',
    aliases: ['low d-high minus high d-low'],
    course: 'calc1',
    category: 'Differentiation Rules',
    short:
      "If $f$ and $g$ are differentiable and $g(x) \\ne 0$, then $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$.",
    long:
      "Mnemonic: \"low d-high minus high d-low, over the square of what's below.\" The **order in the numerator matters** because of the minus sign — swapping it flips the sign of the answer.\n\n" +
      "Example: $\\frac{d}{dx}\\tan x = \\frac{d}{dx}\\frac{\\sin x}{\\cos x} = \\frac{\\cos x\\cos x - \\sin x(-\\sin x)}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$. It can be derived from the [[product-rule]] and [[chain-rule]] applied to $f \\cdot g^{-1}$.\n\n" +
      "**Tip:** don't use it when the denominator is a constant or a single power. $\\frac{x^3 + 1}{5} = \\frac{1}{5}(x^3 + 1)$ and $\\frac{3}{x^2} = 3x^{-2}$ are quicker with the [[power-rule]].",
    tex: '\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f\'(x)\\,g(x) - f(x)\\,g\'(x)}{\\big[g(x)\\big]^2}',
    see: ['product-rule', 'chain-rule', 'derivative'],
  },
  {
    id: 'chain-rule',
    term: 'Chain Rule',
    aliases: ['composite function rule', 'outside-inside rule'],
    course: 'calc1',
    category: 'Differentiation Rules',
    short:
      "If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then $(f \\circ g)'(x) = f'(g(x))\\,g'(x)$; in Leibniz form, $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$.",
    long:
      "Rates multiply through a chain: if $u$ changes 3 times as fast as $x$, and $y$ changes 2 times as fast as $u$, then $y$ changes $6$ times as fast as $x$. Differentiate the outside function (leaving the inside alone), then multiply by the derivative of the inside.\n\n" +
      "Example: $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2)\\cdot 2x$, and $\\frac{d}{dx}(3x+1)^5 = 5(3x+1)^4 \\cdot 3$. Nested compositions just extend the chain: $\\frac{d}{dx}e^{\\sin(2x)} = e^{\\sin(2x)}\\cos(2x)\\cdot 2$.\n\n" +
      "**The most common calculus error** is forgetting the inner derivative. The chain rule underlies [[implicit-differentiation]], [[related-rates]] and [[u-substitution]] — and, in CS, *backpropagation*: training a neural network is the chain rule applied through many layers of composed functions.",
    tex: '\\frac{d}{dx} f\\big(g(x)\\big) = f\'\\big(g(x)\\big)\\, g\'(x)',
    see: ['leibniz-notation', 'implicit-differentiation', 'related-rates', 'u-substitution'],
  },
  {
    id: 'implicit-differentiation',
    term: 'Implicit Differentiation',
    aliases: ['differentiating implicitly'],
    course: 'calc1',
    category: 'Differentiation Rules',
    short:
      "Finding $\\frac{dy}{dx}$ from an equation relating $x$ and $y$ (not solved for $y$) by differentiating both sides with respect to $x$, treating $y$ as a function of $x$, then solving for $\\frac{dy}{dx}$.",
    long:
      "Curves like the circle $x^2 + y^2 = 25$ are not graphs of a single function, but near most points they are. Differentiate both sides with respect to $x$, using the [[chain-rule]] on every $y$ term: $\\frac{d}{dx}y^2 = 2y\\frac{dy}{dx}$. For the circle: $2x + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{y}$ (valid where $y \\ne 0$).\n\n" +
      "**Pitfalls:** forgetting the $\\frac{dy}{dx}$ factor on $y$ terms; forgetting the [[product-rule]] on mixed terms like $xy$, whose derivative is $y + x\\frac{dy}{dx}$. The answer usually involves both $x$ and $y$ — that's expected.\n\n" +
      "Implicit differentiation gives derivatives of inverse functions (e.g. $\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}$) and is the engine of [[related-rates]]. In graphics, the normal to an implicit surface $F(x,y,z) = 0$ (like a signed distance field) is found by the same idea.",
    tex: 'x^2 + y^2 = 25 \\implies 2x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x}{y}',
    see: ['chain-rule', 'related-rates', 'logarithmic-differentiation'],
  },
  {
    id: 'logarithmic-differentiation',
    term: 'Logarithmic Differentiation',
    aliases: ['log differentiation'],
    course: 'calc1',
    category: 'Differentiation Rules',
    short:
      "Differentiating $y = f(x)$ by first taking $\\ln$ of both sides, simplifying with log laws, differentiating implicitly, then multiplying by $y$.",
    long:
      "Logarithms turn products into sums, quotients into differences, and powers into multiples — all of which are easier to differentiate. Since $\\frac{d}{dx}\\ln y = \\frac{y'}{y}$, you solve for $y'$ at the end.\n\n" +
      "It is the standard method for **variable base and variable exponent**: for $y = x^x$ ($x > 0$), $\\ln y = x\\ln x$, so $\\frac{y'}{y} = \\ln x + 1$ and $y' = x^x(\\ln x + 1)$. Neither the [[power-rule]] nor the exponential rule applies here. It also tames messy products like $\\frac{x^3\\sqrt{x+1}}{(2x-1)^4}$.\n\n" +
      "**Pitfall:** don't forget to multiply back by $y$ (and substitute the original expression for it). If $y$ can be negative, use $\\ln|y|$; the result $\\frac{y'}{y}$ is the same.",
    tex: 'y = x^x \\implies \\ln y = x \\ln x \\implies y\' = x^x(\\ln x + 1)',
    see: ['implicit-differentiation', 'power-rule', 'chain-rule'],
  },

  // ------------------------------------------------------------ Applications
  {
    id: 'related-rates',
    term: 'Related Rates',
    aliases: ['related rates problem'],
    course: 'calc1',
    category: 'Applications',
    short:
      "Problems where several quantities change over time and are linked by an equation; differentiating that equation with respect to $t$ relates their rates of change.",
    long:
      "Recipe: draw and label a picture; write an equation relating the quantities that holds **at all times**; differentiate both sides with respect to $t$ using the [[chain-rule]] (and [[implicit-differentiation]]); only then substitute the values at the instant of interest and solve for the unknown rate.\n\n" +
      "Example: a 10 ft ladder slides down a wall. With base distance $x$ and height $y$, $x^2 + y^2 = 100$, so $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$. If $x = 6$ and $\\frac{dx}{dt} = 2$ ft/s, then $y = 8$ and $\\frac{dy}{dt} = -\\frac{6 \\cdot 2}{8} = -1.5$ ft/s.\n\n" +
      "**Pitfall:** substituting a changing quantity's value *before* differentiating turns it into a constant and loses its rate. Also watch signs: a decreasing quantity has a negative rate.",
    tex: 'x^2 + y^2 = 100 \\implies x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0',
    see: ['chain-rule', 'implicit-differentiation', 'leibniz-notation'],
  },
  {
    id: 'linear-approximation',
    term: 'Linear Approximation',
    aliases: ['tangent line approximation'],
    course: 'calc1',
    category: 'Applications',
    short:
      "Estimating $f(x)$ near $a$ by the tangent line: $f(x) \\approx f(a) + f'(a)(x - a)$ when $x$ is close to $a$.",
    long:
      "A differentiable function looks straight up close, so its [[tangent-line]] gives good estimates nearby. Example: $\\sqrt{4.1} \\approx \\sqrt{4} + \\frac{1}{2\\sqrt{4}}(0.1) = 2.025$ (true value $2.02485\\ldots$).\n\n" +
      "The error is small when $x$ is near $a$ and shrinks like $(x - a)^2$; its size depends on $f''$. The sign of $f''$ tells you the direction: if $f$ is [[concavity|concave up]], the tangent line lies below the graph and the estimate is too low; concave down (like $\\sqrt{x}$), too high.\n\n" +
      "Physics and games use this constantly: the small-angle approximation $\\sin\\theta \\approx \\theta$ (the [[linearization]] of $\\sin$ at $0$) simplifies pendulums, and one step of Euler integration, $x(t + \\Delta t) \\approx x(t) + x'(t)\\Delta t$, *is* a linear approximation.",
    tex: 'f(x) \\approx f(a) + f\'(a)(x - a)',
    see: ['linearization', 'differential', 'tangent-line', 'newtons-method'],
  },
  {
    id: 'linearization',
    term: 'Linearization',
    aliases: ['L(x)', 'local linearization'],
    course: 'calc1',
    category: 'Applications',
    short:
      "The linearization of $f$ at $a$ is the linear function $L(x) = f(a) + f'(a)(x - a)$, whose graph is the tangent line at $a$.",
    long:
      "$L$ is the unique linear function that matches $f$ in both value and slope at $a$: $L(a) = f(a)$ and $L'(a) = f'(a)$. Using $L(x)$ in place of $f(x)$ is the [[linear-approximation]].\n\n" +
      "Common linearizations at $0$: $\\sin x \\approx x$, $\\cos x \\approx 1$, $e^x \\approx 1 + x$, $\\ln(1 + x) \\approx x$, and $(1 + x)^k \\approx 1 + kx$. These explain many \"rules of thumb\", like the rule of 72 for doubling time.\n\n" +
      "[[newtons-method|Newton's method]] works by repeatedly replacing $f$ with its linearization and solving $L(x) = 0$. Linearization is also the idea behind gradient descent and Jacobians in physics solvers: replace a hard nonlinear problem with a linear one that is accurate nearby.",
    tex: 'L(x) = f(a) + f\'(a)(x - a)',
    see: ['linear-approximation', 'tangent-line', 'differential', 'newtons-method'],
  },
  {
    id: 'differential',
    term: 'Differential',
    aliases: ['dy', 'dx'],
    course: 'calc1',
    category: 'Applications',
    short:
      "For $y = f(x)$, the differential $dx$ is an independent increment in $x$ and $dy = f'(x)\\,dx$; $dy$ approximates the actual change $\\Delta y = f(x + dx) - f(x)$.",
    long:
      "Differentials give [[leibniz-notation]] a meaning of its own: $dy$ is the change along the [[tangent-line]], while $\\Delta y$ is the change along the curve. For small $dx$, $\\Delta y \\approx dy$ — this is the [[linear-approximation]] in increment form.\n\n" +
      "**Error propagation:** if a sphere's radius is measured as $r = 10$ cm with error $dr = \\pm 0.1$ cm, then $V = \\frac{4}{3}\\pi r^3$ gives $dV = 4\\pi r^2\\,dr = \\pm 40\\pi \\approx \\pm 126\\ \\text{cm}^3$. The relative error $\\frac{dV}{V} = 3\\frac{dr}{r}$ is three times the relative error in $r$.\n\n" +
      "Differentials are also how [[u-substitution]] is carried out: from $u = g(x)$ write $du = g'(x)\\,dx$ and replace that piece of the integrand.",
    tex: 'dy = f\'(x)\\,dx, \\qquad \\Delta y \\approx dy',
    see: ['linear-approximation', 'leibniz-notation', 'u-substitution'],
  },
  {
    id: 'newtons-method',
    term: "Newton's Method",
    aliases: ['Newton-Raphson method', 'Newton-Raphson'],
    course: 'calc1',
    category: 'Applications',
    short:
      "An iterative root-finding method: from a guess $x_n$, follow the tangent line to the $x$-axis, giving $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ (requires $f'(x_n) \\ne 0$).",
    long:
      "Each step replaces $f$ by its [[linearization]] at $x_n$ and solves that linear equation exactly. Near a simple root (where $f' \\ne 0$) with a good starting guess, convergence is **quadratic**: the number of correct digits roughly doubles each step. For $f(x) = x^2 - 2$ from $x_0 = 1$: $1.5,\\ 1.41\\overline{6},\\ 1.414215\\ldots$\n\n" +
      "**It can fail:** if $f'(x_n) = 0$ (horizontal tangent, division by zero), if the guess is far from the root (iterates jump away or cycle — $f(x) = x^3 - 2x + 2$ from $x_0 = 0$ cycles $0, 1, 0, 1, \\ldots$), or if $f'$ is unavailable. Robust code caps the iteration count, checks for tiny $f'$, and may fall back to bisection (see [[intermediate-value-theorem]]).\n\n" +
      "Newton's method is everywhere in computing: hardware and libraries refine square roots and reciprocals with it (the famous Quake III fast inverse square root ends with one Newton step), ray tracers use it to intersect implicit surfaces, and physics engines use it to solve constraints.",
    tex: 'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}',
    example:
      '#include <cmath>\n\n// Solve f(x) = x*x - a = 0, i.e. compute sqrt(a) for a > 0.\ndouble newtonSqrt(double a, double x0 = 1.0) {\n    double x = x0;\n    for (int i = 0; i < 50; ++i) {\n        double fx = x * x - a, dfx = 2.0 * x;\n        if (std::fabs(dfx) < 1e-300) break;   // horizontal tangent: give up\n        double next = x - fx / dfx;\n        if (std::fabs(next - x) < 1e-15 * std::fabs(next)) return next;\n        x = next;\n    }\n    return x;\n}',
    exampleLang: 'cpp',
    see: ['linearization', 'tangent-line', 'intermediate-value-theorem', 'derivative'],
  },
  {
    id: 'critical-number',
    term: 'Critical Number',
    aliases: ['critical point', 'critical value', 'stationary point'],
    course: 'calc1',
    category: 'Applications',
    short:
      "A number $c$ **in the domain of** $f$ where $f'(c) = 0$ or $f'(c)$ does not exist.",
    long:
      "Critical numbers are the candidates for [[local-extremum|local extrema]]. **Fermat's theorem**: if $f$ has a local extremum at $c$ and $f'(c)$ exists, then $f'(c) = 0$. So interior maxima and minima can only occur where the derivative is zero or undefined.\n\n" +
      "Examples: $f(x) = x^3 - 3x$ has $f'(x) = 3(x-1)(x+1)$, critical numbers $\\pm 1$. $f(x) = |x|$ has critical number $0$ (corner, $f'$ undefined). For $f(x) = 1/x$, $x = 0$ is **not** critical — it isn't in the domain.\n\n" +
      "**Pitfall:** a critical number need not be an extremum: $x^3$ has $f'(0) = 0$ but keeps increasing. Classify critical numbers with the [[first-derivative-test]] or [[second-derivative-test]], or compare values with the [[closed-interval-method]].",
    tex: 'f\'(c) = 0 \\;\\text{ or }\\; f\'(c) \\text{ undefined}, \\quad c \\in \\operatorname{dom} f',
    see: ['local-extremum', 'first-derivative-test', 'second-derivative-test', 'closed-interval-method'],
  },
  {
    id: 'absolute-extremum',
    term: 'Absolute Extremum',
    aliases: ['absolute maximum', 'absolute minimum', 'global maximum', 'global minimum', 'global extremum'],
    course: 'calc1',
    category: 'Applications',
    short:
      "$f(c)$ is the absolute maximum of $f$ on a set $D$ if $f(c) \\ge f(x)$ for all $x$ in $D$ (absolute minimum: $f(c) \\le f(x)$ for all $x$ in $D$).",
    long:
      "The absolute (global) max is the single highest value $f$ takes over its whole domain or a chosen interval. It may occur at several points, at an endpoint, or not at all: $f(x) = x$ on $(0, 1)$ has no max, and $\\arctan x$ on $\\mathbb{R}$ approaches $\\frac{\\pi}{2}$ without reaching it.\n\n" +
      "The [[extreme-value-theorem]] guarantees both absolute extrema exist when $f$ is continuous on a **closed, bounded** interval, and the [[closed-interval-method]] finds them: they occur at [[critical-number|critical numbers]] or endpoints.\n\n" +
      "Distinguish the extreme **value** $f(c)$ (\"the max is 5\") from its **location** $c$ (\"at $x = 2$\") — exam questions often ask for one specifically. [[optimization]] problems are absolute-extremum problems in disguise.",
    tex: 'f(c) \\ge f(x) \\;\\text{ for all } x \\in D',
    see: ['local-extremum', 'extreme-value-theorem', 'closed-interval-method', 'optimization'],
  },
  {
    id: 'local-extremum',
    term: 'Local Extremum',
    aliases: ['local maximum', 'local minimum', 'relative extremum', 'relative maximum', 'relative minimum'],
    course: 'calc1',
    category: 'Applications',
    short:
      "$f(c)$ is a local maximum if $f(c) \\ge f(x)$ for all $x$ in some open interval around $c$ (local minimum: $f(c) \\le f(x)$ there).",
    long:
      "A local max is a hilltop compared with its immediate neighborhood, not necessarily the highest point overall. Because the definition needs an open interval around $c$, many textbooks (including Stewart) do not count endpoints of a closed interval as local extrema — they can still be [[absolute-extremum|absolute extrema]].\n\n" +
      "By Fermat's theorem, local extrema occur only at [[critical-number|critical numbers]]. To decide whether a critical number is a max, min, or neither, use the [[first-derivative-test]] (sign change of $f'$) or the [[second-derivative-test]] (sign of $f''$).\n\n" +
      "In optimization and machine learning, gradient-based methods can get stuck at a local minimum that is not the global one — the reason for random restarts and other tricks.",
    tex: 'f(c) \\ge f(x) \\;\\text{ for all } x \\text{ near } c',
    see: ['critical-number', 'absolute-extremum', 'first-derivative-test', 'second-derivative-test'],
  },
  {
    id: 'closed-interval-method',
    term: 'Closed Interval Method',
    aliases: ['candidates test'],
    course: 'calc1',
    category: 'Applications',
    short:
      "To find the absolute max and min of a continuous $f$ on $[a, b]$: evaluate $f$ at every critical number in $(a, b)$ and at the endpoints $a$, $b$; the largest value is the max, the smallest the min.",
    long:
      "The [[extreme-value-theorem]] guarantees the absolute extrema exist; Fermat's theorem says interior ones occur at [[critical-number|critical numbers]]. So the extrema are among a short list of candidates — just compare the values. No derivative tests are needed.\n\n" +
      "Example: $f(x) = x^3 - 3x$ on $[0, 3]$: critical number $1$ (and $-1$, which is outside the interval — discard it). Values: $f(0) = 0$, $f(1) = -2$, $f(3) = 18$. Absolute min $-2$ at $x = 1$; absolute max $18$ at $x = 3$.\n\n" +
      "**Pitfalls:** forgetting the endpoints, including critical numbers outside $[a, b]$, or applying the method when $f$ is discontinuous or the interval is open (then extrema may not exist).",
    tex: '\\max_{[a,b]} f = \\max\\{ f(a),\\, f(b),\\, f(c_1), \\ldots, f(c_k) \\}',
    see: ['extreme-value-theorem', 'critical-number', 'absolute-extremum', 'optimization'],
  },
  {
    id: 'first-derivative-test',
    term: 'First Derivative Test',
    aliases: ['first derivative test for local extrema'],
    course: 'calc1',
    category: 'Applications',
    short:
      "Let $c$ be a critical number of $f$, with $f$ continuous at $c$. If $f'$ changes from $+$ to $-$ at $c$, $f(c)$ is a local max; from $-$ to $+$, a local min; if $f'$ does not change sign, neither.",
    long:
      "The idea: if $f$ rises up to $c$ and falls after it, $c$ is a hilltop. Where $f' > 0$ on an interval, $f$ is increasing there; where $f' < 0$, decreasing (a consequence of the [[mean-value-theorem]]).\n\n" +
      "Method: find the [[critical-number|critical numbers]] (and any points where $f$ is undefined), mark them on a number line, test the sign of $f'$ in each interval, and read off the behavior. Example: $f(x) = x^3 - 3x$: $f' > 0$ on $(-\\infty, -1)$, $< 0$ on $(-1, 1)$, $> 0$ on $(1, \\infty)$, so local max at $-1$, local min at $1$.\n\n" +
      "Unlike the [[second-derivative-test]], this test never fails to give an answer, and it works where $f'$ is undefined (e.g. $|x|$ at $0$).",
    tex: 'f\'\\colon\\; + \\to - \\;\\Rightarrow\\; \\text{local max}, \\qquad - \\to + \\;\\Rightarrow\\; \\text{local min}',
    see: ['critical-number', 'local-extremum', 'second-derivative-test', 'mean-value-theorem'],
  },
  {
    id: 'second-derivative-test',
    term: 'Second Derivative Test',
    aliases: ['second derivative test for local extrema'],
    course: 'calc1',
    category: 'Applications',
    short:
      "Suppose $f''$ is continuous near $c$ and $f'(c) = 0$. If $f''(c) > 0$, $f$ has a local min at $c$; if $f''(c) < 0$, a local max; if $f''(c) = 0$, the test is inconclusive.",
    long:
      "At a horizontal tangent, [[concavity]] decides the shape: concave up (like a cup, $f'' > 0$) means a valley; concave down ($f'' < 0$) means a hilltop.\n\n" +
      "**Inconclusive case:** $f''(c) = 0$ tells you nothing. $x^4$ (min), $-x^4$ (max) and $x^3$ (neither) all have $f'(0) = f''(0) = 0$. Fall back on the [[first-derivative-test]]. The test also does not apply where $f'(c)$ is undefined.\n\n" +
      "In optimization code, the second derivative (or its multi-variable cousin, the Hessian) tells you whether a stationary point is a minimum — and Newton's method for optimization uses it to choose step sizes.",
    tex: 'f\'(c) = 0,\\; f\'\'(c) > 0 \\Rightarrow \\text{local min}; \\quad f\'(c) = 0,\\; f\'\'(c) < 0 \\Rightarrow \\text{local max}',
    see: ['first-derivative-test', 'concavity', 'critical-number', 'higher-order-derivative'],
  },
  {
    id: 'concavity',
    term: 'Concavity',
    aliases: ['concave up', 'concave down', 'convex'],
    course: 'calc1',
    category: 'Applications',
    short:
      "$f$ is concave up on an interval if $f'$ is increasing there (graph bends upward, lies above its tangent lines) and concave down if $f'$ is decreasing. Test: $f'' > 0 \\Rightarrow$ concave up, $f'' < 0 \\Rightarrow$ concave down.",
    long:
      "Concavity describes how the graph bends: concave up holds water like a cup ($x^2$), concave down spills it like a cap ($-x^2$). Equivalently, concave up means slopes are increasing.\n\n" +
      "**Concavity test** (from the [[mean-value-theorem]] applied to $f'$): if $f''(x) > 0$ for all $x$ in an interval, $f$ is concave up there; if $f''(x) < 0$, concave down. A point where concavity changes is an [[inflection-point]].\n\n" +
      "**Pitfall:** concavity is independent of increasing/decreasing — $e^{-x}$ is decreasing yet concave up. Concavity also tells you whether a [[linear-approximation]] over- or under-estimates. (\"Convex\" in optimization and graphics means concave up.)",
    tex: 'f\'\'(x) > 0 \\Rightarrow \\text{concave up}, \\qquad f\'\'(x) < 0 \\Rightarrow \\text{concave down}',
    see: ['inflection-point', 'second-derivative-test', 'higher-order-derivative'],
  },
  {
    id: 'inflection-point',
    term: 'Inflection Point',
    aliases: ['point of inflection'],
    course: 'calc1',
    category: 'Applications',
    short:
      "A point on the graph where $f$ is continuous and the concavity changes (from up to down or down to up).",
    long:
      "At an inflection point the graph switches from bending one way to the other, and the [[tangent-line]] crosses the curve. Example: $x^3$ at $(0, 0)$. On a position-time graph it marks the moment of greatest (or least) velocity.\n\n" +
      "Candidates are where $f''(x) = 0$ or $f''$ is undefined; then **check that $f''$ actually changes sign** there. $f(x) = x^4$ has $f''(0) = 0$ but is concave up on both sides, so $0$ is *not* an inflection point.\n\n" +
      "Also check that the point is in the domain: $1/x$ changes concavity at $0$ but has no inflection point, because $f(0)$ is undefined.",
    tex: 'f\'\' \\text{ changes sign at } c \\text{ and } f \\text{ is continuous at } c',
    see: ['concavity', 'second-derivative-test'],
  },
  {
    id: 'lhopitals-rule',
    term: "L'Hôpital's Rule",
    aliases: ["L'Hospital's Rule", 'lhopital'],
    course: 'calc1',
    category: 'Limits',
    short:
      "If $\\lim \\frac{f(x)}{g(x)}$ is of the form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$, $f$ and $g$ are differentiable near $a$ and $g'(x) \\ne 0$ near $a$ (except possibly at $a$), then $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$, provided the right side exists or is $\\pm\\infty$.",
    long:
      "Near a $\\tfrac{0}{0}$ point, $f$ and $g$ are both close to their [[linearization|linearizations]], so their ratio is close to the ratio of their slopes. Example: $\\lim_{x \\to 0}\\frac{\\sin x}{x} \\to \\lim_{x\\to 0}\\frac{\\cos x}{1} = 1$; $\\lim_{x \\to \\infty}\\frac{\\ln x}{x} = \\lim_{x\\to\\infty}\\frac{1/x}{1} = 0$. It also works for one-sided limits and $x \\to \\pm\\infty$.\n\n" +
      "Other [[indeterminate-form|indeterminate forms]] must be rewritten first: $0\\cdot\\infty$ as a quotient, $\\infty - \\infty$ by combining fractions, and $1^\\infty$, $0^0$, $\\infty^0$ by taking $\\ln$ (then exponentiating at the end). Example: $\\lim_{x\\to\\infty}\\left(1 + \\frac{1}{x}\\right)^x = e$.\n\n" +
      "**Pitfalls:** (1) differentiate numerator and denominator *separately* — this is **not** the [[quotient-rule]]; (2) check the form every time — on $\\lim_{x \\to 0}\\frac{x + 1}{x + 2} = \\frac{1}{2}$, blindly applying the rule gives the wrong answer $1$; (3) if $\\lim \\frac{f'}{g'}$ doesn't exist, the rule says nothing (e.g. $\\frac{x + \\sin x}{x}$ as $x \\to \\infty$ has limit $1$).",
    tex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} \\quad \\left(\\tfrac{0}{0} \\text{ or } \\tfrac{\\infty}{\\infty}\\right)',
    see: ['indeterminate-form', 'limit', 'limit-at-infinity', 'linearization'],
  },
  {
    id: 'optimization',
    term: 'Optimization',
    aliases: ['optimization problem', 'applied max/min'],
    course: 'calc1',
    category: 'Applications',
    short:
      "Finding the largest or smallest value of a quantity subject to constraints, by writing it as a function of one variable and locating its absolute extremum on the feasible domain.",
    long:
      "Recipe: (1) draw and name variables; (2) write the quantity to optimize; (3) use the constraint to eliminate all but one variable; (4) determine the feasible domain; (5) find [[critical-number|critical numbers]]; (6) justify the absolute max/min with the [[closed-interval-method]] or a [[first-derivative-test]] argument; (7) answer the question asked, with units.\n\n" +
      "Example: fencing 100 m to enclose the largest rectangle. With sides $x$ and $50 - x$, $A(x) = x(50 - x)$ on $[0, 50]$; $A'(x) = 50 - 2x = 0$ gives $x = 25$, so the square $25 \\times 25$ with area $625\\ \\text{m}^2$ is best.\n\n" +
      "**Pitfalls:** skipping the domain (it often contains the answer at an endpoint), and not justifying that a critical number is the *absolute* extremum. Optimization is everywhere in CS — minimizing loss in machine learning, choosing the best launch angle for an AI-controlled projectile, or minimizing energy in a physics solver.",
    tex: 'A(x) = x(50 - x),\\quad A\'(x) = 50 - 2x = 0 \\implies x = 25',
    see: ['absolute-extremum', 'closed-interval-method', 'critical-number', 'extreme-value-theorem'],
  },

  // --------------------------------------------------------------- Analysis
  {
    id: 'extreme-value-theorem',
    term: 'Extreme Value Theorem',
    aliases: ['EVT'],
    course: 'calc1',
    category: 'Analysis',
    short:
      "If $f$ is continuous on a closed interval $[a, b]$, then $f$ attains an absolute maximum value $f(c)$ and an absolute minimum value $f(d)$ for some $c, d$ in $[a, b]$.",
    long:
      "On a closed, bounded interval, a continuous function cannot escape to infinity or approach a value without reaching it, so a highest and lowest point must exist. This is what justifies the [[closed-interval-method]].\n\n" +
      "**Both hypotheses are needed.** Open interval: $f(x) = x$ on $(0, 1)$ has no max or min. Discontinuity: $f(x) = 1/x$ on $[-1, 1]$ (undefined at $0$) is unbounded; a function with a jump can also miss its supremum. Unbounded interval: $f(x) = x$ on $[0, \\infty)$ has no max.\n\n" +
      "Like the [[intermediate-value-theorem]], the EVT is an existence theorem: it tells you the extrema exist, not where. Its proof relies on the completeness of the real numbers.",
    tex: 'f \\in C[a,b] \\implies \\exists\\, c, d \\in [a,b]:\\; f(d) \\le f(x) \\le f(c) \\;\\; \\forall x \\in [a,b]',
    see: ['absolute-extremum', 'closed-interval-method', 'continuity', 'intermediate-value-theorem'],
  },
  {
    id: 'rolles-theorem',
    term: "Rolle's Theorem",
    aliases: ['Rolle'],
    course: 'calc1',
    category: 'Analysis',
    short:
      "If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there is a $c$ in $(a, b)$ with $f'(c) = 0$.",
    long:
      "If you start and end at the same height, somewhere in between you must be momentarily level — at the top of a hill or the bottom of a valley. Proof sketch: by the [[extreme-value-theorem]], $f$ has a max and min on $[a, b]$; if both are at the endpoints, $f$ is constant and $f' = 0$ everywhere; otherwise one is interior, and Fermat's theorem gives $f'(c) = 0$.\n\n" +
      "**All three hypotheses matter.** $f(x) = |x|$ on $[-1, 1]$ has equal endpoint values but no horizontal tangent (not differentiable at $0$).\n\n" +
      "Rolle's theorem is the special case of the [[mean-value-theorem]] where the secant line is horizontal, and it is used to prove the MVT. It also limits roots: if $f'$ is never $0$, then $f$ has at most one real root.",
    tex: 'f(a) = f(b) \\implies \\exists\\, c \\in (a,b):\\; f\'(c) = 0',
    see: ['mean-value-theorem', 'extreme-value-theorem', 'critical-number'],
  },
  {
    id: 'mean-value-theorem',
    term: 'Mean Value Theorem',
    aliases: ['MVT', 'Lagrange mean value theorem'],
    course: 'calc1',
    category: 'Analysis',
    short:
      "If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there is a $c$ in $(a, b)$ with $f'(c) = \\frac{f(b) - f(a)}{b - a}$.",
    long:
      "At some moment, the instantaneous rate of change equals the average rate of change: the [[tangent-line]] at $c$ is parallel to the [[secant-line]] from $a$ to $b$. If you drive 120 miles in 2 hours, at some instant your speedometer read exactly 60 mph — the logic behind average-speed traffic cameras.\n\n" +
      "It is [[rolles-theorem]] applied to $f$ minus its secant line. Hypotheses: [[continuity]] on the closed interval and [[differentiable|differentiability]] on the open one ($|x|$ on $[-1, 2]$ fails it). The theorem says $c$ exists, not where.\n\n" +
      "**Why it matters:** the MVT is the bridge from derivatives to global behavior. It proves that $f' > 0$ implies increasing, $f' = 0$ on an interval implies constant, and hence that two [[antiderivative|antiderivatives]] of the same function differ by a constant — the foundation of the [[constant-of-integration]] and the [[fundamental-theorem-of-calculus]].",
    tex: 'f\'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for some } c \\in (a, b)',
    see: ['rolles-theorem', 'secant-line', 'average-rate-of-change', 'differentiable'],
  },

  // --------------------------------------------------------------- Integrals
  {
    id: 'antiderivative',
    term: 'Antiderivative',
    aliases: ['primitive', 'antidifferentiation'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "A function $F$ is an antiderivative of $f$ on an interval $I$ if $F'(x) = f(x)$ for every $x$ in $I$.",
    long:
      "Antidifferentiation reverses differentiation: given a [[velocity]], recover position; given a rate, recover the amount. Since $\\frac{d}{dx}x^3 = 3x^2$, $x^3$ is an antiderivative of $3x^2$ — and so is $x^3 + 7$.\n\n" +
      "**Key theorem** (from the [[mean-value-theorem]]): if $F$ is one antiderivative of $f$ on an interval, every antiderivative is $F(x) + C$. This family is the [[indefinite-integral]]. Initial conditions such as $s(0) = 5$ pick out one member.\n\n" +
      "Always check an antiderivative by differentiating it. Unlike derivatives, some elementary functions have no elementary antiderivative ($e^{-x^2}$, $\\frac{\\sin x}{x}$) — then numerical methods like a [[riemann-sum]] take over.",
    tex: 'F\'(x) = f(x) \\implies \\int f(x)\\,dx = F(x) + C',
    see: ['indefinite-integral', 'constant-of-integration', 'fundamental-theorem-of-calculus'],
  },
  {
    id: 'indefinite-integral',
    term: 'Indefinite Integral',
    aliases: ['∫ f(x) dx', 'general antiderivative'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The notation $\\int f(x)\\,dx = F(x) + C$ for the family of all antiderivatives of $f$ (on an interval), where $F' = f$ and $C$ is an arbitrary constant.",
    long:
      "An indefinite integral is a **family of functions**, while a [[definite-integral]] is a **number**. They are linked by the [[fundamental-theorem-of-calculus]]: to evaluate $\\int_a^b f(x)\\,dx$, find any antiderivative and subtract.\n\n" +
      "It is linear: $\\int [af(x) + bg(x)]\\,dx = a\\int f\\,dx + b\\int g\\,dx$. But there is **no** product or quotient rule that works term-by-term: $\\int x\\cos x\\,dx \\ne \\int x\\,dx \\cdot \\int \\cos x\\,dx$. Products often need [[u-substitution]] (or integration by parts, in Calculus II).\n\n" +
      "Every derivative formula read backwards gives an integral formula, e.g. $\\int \\sec^2 x\\,dx = \\tan x + C$. Don't forget the [[constant-of-integration]].",
    tex: '\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\ne -1)',
    see: ['antiderivative', 'constant-of-integration', 'definite-integral', 'integrand'],
  },
  {
    id: 'constant-of-integration',
    term: 'Constant of Integration',
    aliases: ['+ C', 'arbitrary constant'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The arbitrary constant $C$ in $\\int f(x)\\,dx = F(x) + C$, accounting for the fact that antiderivatives on an interval are determined only up to an added constant.",
    long:
      "Differentiation destroys constant terms, so integration cannot recover them: $x^2$, $x^2 + 1$ and $x^2 - \\pi$ all have derivative $2x$. The $+C$ records that whole family. Two antiderivatives differing by a constant is guaranteed by the [[mean-value-theorem]].\n\n" +
      "An **initial condition** determines $C$: if $s'(t) = 3t^2$ and $s(0) = 5$, then $s(t) = t^3 + C$ and $5 = 0 + C$, so $s(t) = t^3 + 5$. In physics, the constants from integrating [[acceleration]] twice are the initial velocity and initial position.\n\n" +
      "**Pitfall:** \"different-looking\" answers can both be right. $\\int 2\\sin x\\cos x\\,dx$ is $\\sin^2 x + C$ or $-\\cos^2 x + C$ (they differ by $1$). For [[definite-integral|definite integrals]] the constant cancels, so you may drop it.",
    tex: '\\frac{d}{dx}\\big[F(x) + C\\big] = f(x)',
    see: ['antiderivative', 'indefinite-integral'],
  },
  {
    id: 'sigma-notation',
    term: 'Sigma Notation',
    aliases: ['summation notation', 'Σ'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "Compact notation for a sum: $\\sum_{i=1}^{n} a_i = a_1 + a_2 + \\cdots + a_n$, where $i$ is the index running from the lower to the upper limit.",
    long:
      "Read $\\sum_{i=1}^{n} a_i$ as a `for` loop: `for (int i = 1; i <= n; ++i) sum += a(i);`. The index name is a dummy variable — $\\sum_{k=1}^n k^2$ means the same thing.\n\n" +
      "Rules: $\\sum (a_i \\pm b_i) = \\sum a_i \\pm \\sum b_i$, $\\sum c\\,a_i = c\\sum a_i$, $\\sum_{i=1}^n c = nc$. Closed forms used for exact [[riemann-sum|Riemann sums]]: $\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$, $\\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}$, $\\sum_{i=1}^n i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$.\n\n" +
      "**Pitfall:** $\\sum a_i b_i \\ne \\left(\\sum a_i\\right)\\left(\\sum b_i\\right)$, and check the number of terms — $\\sum_{i=0}^{n}$ has $n + 1$ terms. In complexity analysis, $\\sum_{i=1}^n i = \\Theta(n^2)$ is why a nested loop over pairs is quadratic.",
    tex: '\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}, \\qquad \\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}',
    see: ['riemann-sum', 'definite-integral'],
  },
  {
    id: 'riemann-sum',
    term: 'Riemann Sum',
    aliases: ['left Riemann sum', 'right Riemann sum', 'midpoint sum'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "An approximation $\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$ of the area under $f$ on $[a, b]$, using $n$ rectangles of width $\\Delta x = \\frac{b-a}{n}$ and heights $f(x_i^*)$ at sample points $x_i^*$ in each subinterval.",
    long:
      "Chop $[a, b]$ into $n$ strips, approximate each by a rectangle, and add. Left, right and midpoint sums choose $x_i^*$ at the left end, right end, or middle of each strip; with $x_i = a + i\\,\\Delta x$, the right sum uses $x_i$ and the left uses $x_{i-1}$.\n\n" +
      "As $n \\to \\infty$ the sums approach the [[definite-integral]] (for continuous $f$, whatever the sample points). For an increasing function, left sums underestimate and right sums overestimate. The midpoint sum is usually much more accurate (error $\\propto 1/n^2$ versus $1/n$).\n\n" +
      "Every game loop computes a Riemann sum: `pos += vel * dt` each frame adds $v(t_i)\\,\\Delta t$, approximating $\\int v\\,dt$ — which is why physics with a variable or large `dt` drifts. Riemann sums are also how computers evaluate integrals with no closed form.",
    tex: '\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x, \\qquad \\Delta x = \\frac{b - a}{n}',
    example:
      '// Midpoint Riemann sum for the integral of f over [a, b].\ntemplate <class F>\ndouble midpointSum(F f, double a, double b, int n) {\n    const double dx = (b - a) / n;\n    double sum = 0.0;\n    for (int i = 0; i < n; ++i)\n        sum += f(a + (i + 0.5) * dx);   // height at midpoint of strip i\n    return sum * dx;\n}',
    exampleLang: 'cpp',
    see: ['definite-integral', 'sigma-notation', 'net-signed-area'],
  },
  {
    id: 'definite-integral',
    term: 'Definite Integral',
    aliases: ['integral from a to b'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$, the limit of Riemann sums when it exists; for continuous $f$ it always exists and equals the net signed area.",
    long:
      "The definite integral adds up infinitely many infinitely thin contributions $f(x)\\,dx$. It is a **number**, not a function, and the variable is a dummy: $\\int_0^1 x^2\\,dx = \\int_0^1 t^2\\,dt = \\frac{1}{3}$.\n\n" +
      "Integrability: continuous functions on $[a, b]$ are integrable, and so are bounded functions with finitely many jump discontinuities. Properties: linearity, $\\int_a^b f + \\int_b^c f = \\int_a^c f$, $\\int_a^a f = 0$, $\\int_b^a f = -\\int_a^b f$, and if $f \\le g$ then $\\int_a^b f \\le \\int_a^b g$.\n\n" +
      "Geometrically it is the [[net-signed-area]]; physically, the accumulated total of a rate (the [[net-change-theorem]]). The [[fundamental-theorem-of-calculus]] turns computing it into finding an [[antiderivative]].",
    tex: '\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x',
    see: ['riemann-sum', 'net-signed-area', 'fundamental-theorem-of-calculus', 'integrand', 'limits-of-integration'],
  },
  {
    id: 'integrand',
    term: 'Integrand',
    aliases: [],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The function being integrated: in $\\int_a^b f(x)\\,dx$ (or $\\int f(x)\\,dx$), the integrand is $f(x)$.",
    long:
      "The integrand sits between the integral sign and the differential $dx$; the $dx$ names the variable of integration. Parentheses matter: $\\int (x^2 + 1)\\,dx$ integrates the whole sum.\n\n" +
      "In a [[riemann-sum]] the integrand gives the heights of the rectangles, so $f(x)\\,dx$ reads as \"height times tiny width.\" In applications its units times the units of $x$ give the units of the result — a rate in m/s integrated over seconds gives meters.\n\n" +
      "Recognizing the structure of the integrand (e.g. a composite times the derivative of its inside) is the key to choosing a technique such as [[u-substitution]].",
    tex: '\\int_a^b \\underbrace{f(x)}_{\\text{integrand}}\\,dx',
    see: ['definite-integral', 'indefinite-integral', 'limits-of-integration'],
  },
  {
    id: 'limits-of-integration',
    term: 'Limits of Integration',
    aliases: ['bounds of integration', 'lower limit', 'upper limit'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The numbers $a$ (lower limit) and $b$ (upper limit) in $\\int_a^b f(x)\\,dx$, marking the interval of integration.",
    long:
      "Despite the name, these have nothing to do with the [[limit]] of a function — they are just the endpoints of the interval being integrated over.\n\n" +
      "Reversing them flips the sign: $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$, and equal limits give $0$. When the upper limit is a variable, $\\int_a^x f(t)\\,dt$ is a function of $x$, and the [[fundamental-theorem-of-calculus]] says its derivative is $f(x)$; with a function as the limit, the [[chain-rule]] applies: $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x))\\,g'(x)$.\n\n" +
      "**Pitfall:** in a definite [[u-substitution]], the limits are $x$-values and must be converted to $u$-values ($u = g(a)$ to $u = g(b)$) — or you must substitute back before evaluating.",
    tex: '\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx',
    see: ['definite-integral', 'integrand', 'u-substitution', 'fundamental-theorem-of-calculus'],
  },
  {
    id: 'net-signed-area',
    term: 'Net Signed Area',
    aliases: ['signed area', 'net area'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The area above the $x$-axis minus the area below it, between the graph of $f$ and the axis on $[a, b]$; this is what $\\int_a^b f(x)\\,dx$ measures.",
    long:
      "Where $f < 0$, the [[riemann-sum]] rectangles have negative heights, so that region counts negatively. Hence $\\int_0^{2\\pi}\\sin x\\,dx = 0$: the hump above cancels the trough below.\n\n" +
      "For the **total (geometric) area**, integrate $|f(x)|$: find where $f$ changes sign, split the interval there, and add the absolute values of the pieces. Total area of $\\sin x$ on $[0, 2\\pi]$ is $4$.\n\n" +
      "This mirrors [[displacement]] versus distance: integrating velocity gives net change in position (backward motion cancels forward), integrating speed gives total distance. See also [[area-between-curves]].",
    tex: '\\int_a^b f(x)\\,dx = A_{\\text{above}} - A_{\\text{below}}',
    see: ['definite-integral', 'displacement', 'area-between-curves'],
  },
  {
    id: 'fundamental-theorem-of-calculus',
    term: 'Fundamental Theorem of Calculus',
    aliases: ['FTC', 'FTC part 1', 'FTC part 2', 'evaluation theorem'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "If $f$ is continuous on $[a, b]$: (1) $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$; (2) $\\int_a^b f(x)\\,dx = F(b) - F(a)$ for any antiderivative $F$ of $f$.",
    long:
      "Differentiation and integration are inverse processes. **Part 1:** the accumulation function $g(x) = \\int_a^x f(t)\\,dt$ grows at rate $f(x)$ — adding a thin strip of width $h$ adds area $\\approx f(x)h$. So every continuous function has an antiderivative. **Part 2:** to compute a [[definite-integral]], find any [[antiderivative]] and subtract its endpoint values: $\\int_0^1 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}$.\n\n" +
      "Part 2 turns a limit of sums (hard) into evaluating a function twice (easy), and it explains the [[net-change-theorem]]: integrating a rate gives total change.\n\n" +
      "**Hypothesis check:** $f$ must be continuous on the whole of $[a, b]$. Ignoring an [[infinite-discontinuity]] gives nonsense like $\\int_{-1}^{1}\\frac{dx}{x^2} = -2$. For a variable upper limit $g(x)$, combine Part 1 with the [[chain-rule]]: $\\frac{d}{dx}\\int_a^{x^2}\\cos t\\,dt = 2x\\cos(x^2)$.",
    tex: '\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x), \\qquad \\int_a^b f(x)\\,dx = F(b) - F(a)',
    see: ['definite-integral', 'antiderivative', 'net-change-theorem', 'riemann-sum'],
  },
  {
    id: 'u-substitution',
    term: 'u-Substitution',
    aliases: ['substitution rule', 'change of variables', 'integration by substitution'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The chain rule in reverse: with $u = g(x)$ and $du = g'(x)\\,dx$, $\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du$.",
    long:
      "Look for a composite function whose inner part's derivative also appears (up to a constant factor). Example: $\\int 2x\\cos(x^2)\\,dx$: let $u = x^2$, $du = 2x\\,dx$, giving $\\int \\cos u\\,du = \\sin u + C = \\sin(x^2) + C$. A missing constant is fine — $x\\,dx = \\frac{1}{2}du$ — but a missing *variable* factor is not.\n\n" +
      "**Definite integrals:** either change the [[limits-of-integration]], $\\int_a^b f(g(x))g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$, or substitute back to $x$ before evaluating — never mix $u$-limits with an $x$-expression.\n\n" +
      "**Pitfalls:** leftover $x$'s after substituting (the substitution didn't work — try another $u$), forgetting to convert $dx$, and forgetting to return to $x$ in an indefinite integral. Always check by differentiating with the [[chain-rule]].",
    tex: '\\int f\\big(g(x)\\big)\\,g\'(x)\\,dx = \\int f(u)\\,du, \\qquad u = g(x)',
    see: ['chain-rule', 'differential', 'indefinite-integral', 'limits-of-integration'],
  },
  {
    id: 'net-change-theorem',
    term: 'Net Change Theorem',
    aliases: ['total change theorem'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The integral of a rate of change is the net change: $\\int_a^b F'(x)\\,dx = F(b) - F(a)$.",
    long:
      "This is Part 2 of the [[fundamental-theorem-of-calculus]] read as a statement about quantities: add up a rate over an interval and you get the total change in the quantity.\n\n" +
      "Examples: integrating [[velocity]] gives [[displacement]]; integrating a flow rate (L/min) gives the change in volume; integrating marginal cost gives the change in total cost. Note it gives the *change*, not the final value: $F(b) = F(a) + \\int_a^b F'(x)\\,dx$, so you need a starting value.\n\n" +
      "In games, this is why accumulating `health += regenRate * dt` each frame approximates the integral of the regeneration rate — and why the result depends on `dt` unless the rate is constant on each step.",
    tex: '\\int_a^b F\'(x)\\,dx = F(b) - F(a)',
    see: ['fundamental-theorem-of-calculus', 'displacement', 'definite-integral'],
  },
  {
    id: 'displacement',
    term: 'Displacement',
    aliases: ['net displacement', 'change in position'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The net change in position over a time interval, $s(t_2) - s(t_1) = \\int_{t_1}^{t_2} v(t)\\,dt$; total distance traveled is $\\int_{t_1}^{t_2} |v(t)|\\,dt$.",
    long:
      "Displacement is \"where you ended up relative to where you started\" — motion backward cancels motion forward. Distance counts every step, regardless of direction.\n\n" +
      "Example: $v(t) = t^2 - 2t$ on $[0, 3]$. Displacement $= \\int_0^3 (t^2 - 2t)\\,dt = 9 - 9 = 0$: the object returns to its start. But $v < 0$ on $(0, 2)$ and $v > 0$ on $(2, 3)$, so distance $= \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$.\n\n" +
      "To compute distance, find where $v(t) = 0$, split the interval there, and add the absolute values of the pieces. This is the motion version of [[net-signed-area]] and an instance of the [[net-change-theorem]].",
    tex: '\\Delta s = \\int_{t_1}^{t_2} v(t)\\,dt, \\qquad \\text{distance} = \\int_{t_1}^{t_2} |v(t)|\\,dt',
    see: ['velocity', 'net-change-theorem', 'net-signed-area'],
  },
  {
    id: 'area-between-curves',
    term: 'Area Between Curves',
    aliases: ['area between two curves'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "If $f(x) \\ge g(x)$ on $[a, b]$, the area of the region between them is $\\int_a^b [f(x) - g(x)]\\,dx$ (top minus bottom).",
    long:
      "Each thin vertical strip has height $f(x) - g(x)$ and width $dx$, regardless of whether the curves are above or below the $x$-axis — subtraction handles the signs.\n\n" +
      "Steps: sketch; find intersection points (often these are $a$ and $b$); identify which curve is on top; integrate top minus bottom. If the curves cross inside the interval, split there — in general the area is $\\int_a^b |f(x) - g(x)|\\,dx$. Example: between $y = x$ and $y = x^2$ on $[0, 1]$, area $= \\int_0^1 (x - x^2)\\,dx = \\frac{1}{6}$.\n\n" +
      "When the region is bounded left and right by curves $x = f(y)$, integrate in $y$: right minus left. Choose whichever direction avoids splitting.",
    tex: 'A = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx \\quad (f \\ge g)',
    see: ['net-signed-area', 'definite-integral'],
  },
  {
    id: 'average-value',
    term: 'Average Value of a Function',
    aliases: ['mean value of a function', 'f_avg'],
    course: 'calc1',
    category: 'Integrals',
    short:
      "The average value of an integrable $f$ on $[a, b]$ is $f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.",
    long:
      "It extends \"add up and divide by how many\" to infinitely many values: the integral is the continuous sum and $b - a$ is the length. Geometrically, it is the height of the rectangle on $[a, b]$ with the same [[net-signed-area]] as $f$. Example: $\\sin x$ on $[0, \\pi]$ has average value $\\frac{2}{\\pi} \\approx 0.637$.\n\n" +
      "**Mean Value Theorem for Integrals:** if $f$ is continuous on $[a, b]$, then $f(c) = f_{\\text{avg}}$ for some $c$ in $[a, b]$ — the function actually hits its average.\n\n" +
      "**Pitfall:** this averages the function's *values*; the [[average-rate-of-change]] $\\frac{f(b) - f(a)}{b - a}$ averages its *slope*. They are related: the average value of $v(t)$ (velocity) equals the average rate of change of position.",
    tex: 'f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx',
    see: ['definite-integral', 'average-rate-of-change', 'mean-value-theorem'],
  },
];
