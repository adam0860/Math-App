import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'angular-frequency',
    term: 'Angular Frequency',
    aliases: ['ω', 'omega'],
    course: 'trig',
    category: 'Trig Graphs',
    short: 'How fast a sinusoid\'s input angle advances, in radians per unit of time: $\\omega = 2\\pi f = \\frac{2\\pi}{P}$. It is the $B$ in $y = A\\sin(B(x - C)) + D$.',
    long: 'Frequency $f$ counts cycles per unit time; angular frequency counts *radians* per unit time. Since one cycle is $2\\pi$ radians, $\\omega = 2\\pi f$.\n\nIn code, `std::sin(omega * t)` with $t$ in seconds oscillates $\\frac{\\omega}{2\\pi}$ times per second.',
    tex: '\\omega = 2\\pi f = \\frac{2\\pi}{P}',
    example: '// bob twice per second\nconst float omega = 2.0f * 3.14159265f * 2.0f;\nfloat y = baseY + 0.25f * std::sin(omega * t);',
    exampleLang: 'cpp',
    see: ['frequency', 'period', 'sinusoid'],
  },
  {
    id: 'trig-asymptote-spacing',
    term: 'Asymptotes of Tangent and Secant',
    course: 'trig',
    category: 'Trig Graphs',
    short: '$\\tan x$ and $\\sec x$ have vertical asymptotes where $\\cos x = 0$, at $x = \\frac{\\pi}{2} + k\\pi$; $\\cot x$ and $\\csc x$ have them where $\\sin x = 0$, at $x = k\\pi$.',
    long: 'Each of these functions is a fraction with $\\sin x$ or $\\cos x$ in the denominator, so it is undefined — and blows up toward $\\pm\\infty$ — exactly at the zeros of that denominator. For $y = \\tan(Bx)$ the asymptotes are at $Bx = \\frac{\\pi}{2} + k\\pi$, spaced $\\frac{\\pi}{|B|}$ apart.',
    see: ['vertical-asymptote', 'tangent-function', 'secant-function', 'cotangent', 'cosecant'],
  },
  {
    id: 'damped-oscillation',
    term: 'Damped Oscillation',
    aliases: ['damped sinusoid', 'damped harmonic motion'],
    course: 'trig',
    category: 'Trig Graphs',
    short: 'A wave whose amplitude shrinks over time, such as $y = A e^{-kt}\\cos(\\omega t)$ with $k > 0$; the curves $y = \\pm A e^{-kt}$ form its envelope.',
    long: 'Real springs, pendulums and guitar strings lose energy, so their swings die out. Multiplying a sinusoid by a decaying exponential models this.\n\nGames use damped oscillations for screen shake, springy UI and wobbling objects that settle down.',
    tex: 'y = A e^{-kt}\\cos(\\omega t)',
    see: ['amplitude', 'exponential-decay', 'sinusoid'],
  },
];
