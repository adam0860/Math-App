import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-mean-value-theorem',
  title: 'The Mean Value Theorem',
  summary: 'Somewhere between two points, the instantaneous rate of change must equal the average one — and that one fact powers much of calculus.',
  minutes: 18,
  objectives: [
    'State Rolle\'s theorem and the Mean Value Theorem with all their hypotheses',
    'Find the number $c$ promised by Rolle\'s theorem or the MVT for a given function and interval',
    'Use Rolle\'s theorem to prove an equation has at most one real root',
    'Apply the MVT to real situations such as average-speed cameras',
    'Explain why $f\' = 0$ on an interval forces $f$ to be constant, and use the MVT to bound function values',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'A promise about your speedometer',
      blocks: [
        {
          type: 'p',
          text: 'You drive $120$ km in exactly $1.5$ hours. Your average speed is $\\frac{120}{1.5} = 80$ km/h. Here is a claim that sounds obvious but is surprisingly deep: at some instant during the trip, your speedometer read **exactly** $80$ km/h.',
        },
        {
          type: 'p',
          text: 'Why must it? If you were always below $80$ you could not have covered $120$ km in time; if always above, you would have covered more. Since speed changes continuously, it must pass through $80$ at some moment. In the language of calculus: the [[instantaneous-rate-of-change]] must equal the [[average-rate-of-change]] at least once.',
        },
        {
          type: 'graph',
          x: [-0.1, 1.7],
          y: [-10, 135],
          yStep: 20,
          functions: [{ expr: '120(x/1.5)^2 (3 - 2x/1.5)', label: 'position $s(t)$ (km)', domain: [0, 1.5] }],
          tangents: [
            { expr: '120(x/1.5)^2 (3 - 2x/1.5)', at: 0, secantTo: 1.5, color: 'purple', label: 'average: 80 km/h' },
            { expr: '120(x/1.5)^2 (3 - 2x/1.5)', at: 'c', color: 'orange' },
          ],
          sliders: [{ name: 'c', min: 0.02, max: 1.48, step: 0.01, value: 0.2, label: 'time $c$ (h)' }],
          readouts: [{ label: 'speedometer $s\'(c)$ (km/h) $=$', expr: '320c - 640c^2/3', digits: 1 }],
          caption: 'A trip that starts and ends at rest. The purple secant has slope $80$ (the average speed). Slide $c$ to find the instants where the orange tangent is parallel to it — here that happens twice, near $c \\approx 0.32$ h and $c \\approx 1.18$ h, while speeding up and while slowing down.',
        },
        {
          type: 'p',
          text: 'This lesson turns that intuition into a theorem — the [[mean-value-theorem|Mean Value Theorem]] — and then shows why it is one of the most useful facts in calculus. We start with a special case.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Rolle\'s theorem: what goes up must turn around',
      blocks: [
        {
          type: 'p',
          text: 'Throw a ball straight up and catch it at the same height. Its height starts and ends at the same value, so somewhere in between it stopped rising and started falling — at that instant its vertical velocity was $0$. That is the content of Rolle\'s theorem.',
        },
        {
          type: 'theorem',
          name: 'Rolle\'s Theorem',
          text: 'Suppose $f$ satisfies all three hypotheses:\n\n1. $f$ is **continuous** on the closed interval $[a, b]$;\n2. $f$ is **differentiable** on the open interval $(a, b)$;\n3. $f(a) = f(b)$.\n\nThen there is at least one number $c$ in $(a, b)$ with $f\'(c) = 0$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Rolle\'s theorem is true',
          text: 'It is a two-line consequence of the previous lesson. By the [[extreme-value-theorem]], the continuous function $f$ attains an absolute max and an absolute min on $[a, b]$.\n\n**Case 1:** both occur at the endpoints. Since $f(a) = f(b)$, the max and min are equal, so $f$ is constant and $f\'(c) = 0$ for every $c$ in $(a, b)$.\n\n**Case 2:** the max or the min occurs at some $c$ strictly inside $(a, b)$. Then it is a local extremum where $f$ is differentiable, so by Fermat\'s theorem $f\'(c) = 0$.',
        },
        {
          type: 'derivation',
          title: 'Verify Rolle\'s theorem for $f(x) = x^2 - 4x + 1$ on $[0, 4]$',
          steps: [
            { tex: '\\text{polynomial} \\implies \\text{continuous and differentiable everywhere}', why: 'Hypotheses 1 and 2 hold automatically for any polynomial.' },
            { tex: 'f(0) = 1, \\quad f(4) = 16 - 16 + 1 = 1', why: 'Hypothesis 3: the endpoint values match.' },
            { tex: "f'(x) = 2x - 4", why: 'Power rule.' },
            { tex: '2c - 4 = 0 \\implies c = 2', why: 'Solve $f\'(c) = 0$.' },
            { tex: '2 \\in (0, 4) \\;\\checkmark', why: 'The theorem promises a $c$ strictly between $a$ and $b$; ours qualifies.' },
          ],
          result: 'The horizontal tangent promised by Rolle\'s theorem is at $c = 2$, the vertex of the parabola.',
        },
        {
          type: 'graph',
          x: [-0.8, 4.8],
          y: [-4, 3],
          functions: [{ expr: 'x^2 - 4x + 1', label: '$y = x^2 - 4x + 1$' }],
          points: [
            { x: 0, y: 1, label: '(0, 1)' },
            { x: 4, y: 1, label: '(4, 1)' },
          ],
          hlines: [{ y: 1, color: 'gray' }],
          tangents: [{ expr: 'x^2 - 4x + 1', at: 2, label: 'f′(2) = 0' }],
          caption: 'Equal heights at both ends force a horizontal tangent somewhere in between.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Every hypothesis matters',
          text: '$f(x) = |x|$ on $[-1, 1]$ is continuous with $f(-1) = f(1) = 1$, but $f\'(x)$ is $-1$ or $1$ — never $0$. Rolle fails because $|x|$ is not differentiable at $0$. Likewise, a function with a jump can have equal endpoint values and no horizontal tangent at all.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'For $f(x) = x^{2/3}$ on $[-1, 1]$, we have $f(-1) = f(1) = 1$, yet $f\'(x) = \\frac{2}{3\\sqrt[3]{x}}$ is never $0$. Why doesn\'t this contradict Rolle\'s theorem?',
      options: [
        {
          text: '$f$ is not continuous on $[-1, 1]$',
          why: '$x^{2/3} = (\\sqrt[3]{x})^2$ is continuous everywhere — there is no break in its graph.',
        },
        {
          text: '$f$ is not differentiable at $x = 0$, which lies in $(-1, 1)$',
          correct: true,
          why: '$f\'(0)$ would require dividing by $\\sqrt[3]{0} = 0$; the graph has a cusp there. Hypothesis 2 fails, so Rolle promises nothing.',
        },
        {
          text: '$f(-1) \\ne f(1)$',
          why: '$(-1)^{2/3} = (\\sqrt[3]{-1})^2 = (-1)^2 = 1$, so the endpoint values do match.',
        },
        {
          text: 'It does contradict Rolle\'s theorem, so the theorem has exceptions',
          why: 'A theorem has no exceptions: if all hypotheses hold, the conclusion holds. When the conclusion fails, some hypothesis must have failed.',
        },
      ],
      explanation: 'Rolle\'s theorem needs differentiability on the *whole* open interval. $x^{2/3}$ has a cusp at $x = 0$ (its minimum), where $f\'$ does not exist. The function does turn around — just at a sharp point instead of a horizontal tangent.',
    },
    {
      kind: 'numeric',
      prompt: '$f(x) = x^3 - x$ satisfies Rolle\'s theorem on $[0, 1]$. Find the number $c$ in $(0, 1)$ with $f\'(c) = 0$.',
      label: '$c =$',
      answer: 'sqrt(3)/3',
      answerTex: '\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3} \\approx 0.577',
      hint: 'Check $f(0) = f(1)$, then solve $3c^2 - 1 = 0$ and keep the root inside $(0, 1)$.',
      explanation: '$f(0) = 0$ and $f(1) = 1 - 1 = 0$, and polynomials are continuous and differentiable, so Rolle applies. $f\'(c) = 3c^2 - 1 = 0$ gives $c = \\pm\\frac{1}{\\sqrt3}$. Only the positive root $\\frac{1}{\\sqrt3} = \\frac{\\sqrt3}{3} \\approx 0.577$ lies in $(0, 1)$.',
    },
    {
      kind: 'concept',
      title: 'Rolle as a root counter',
      blocks: [
        {
          type: 'p',
          text: 'Rolle\'s theorem has a clever use: proving an equation has **only one** solution. The [[intermediate-value-theorem]] can show a root *exists*; Rolle shows there cannot be a second one.',
        },
        {
          type: 'derivation',
          title: 'Show that $x^3 + x - 1 = 0$ has exactly one real root',
          steps: [
            { tex: 'f(x) = x^3 + x - 1, \\quad f(0) = -1 < 0, \\quad f(1) = 1 > 0', why: 'Evaluate at two convenient points to find a sign change.' },
            { tex: '\\implies \\text{at least one root in } (0, 1)', why: 'Existence: $f$ is continuous, so the IVT gives a $c$ in $(0, 1)$ with $f(c) = 0$.' },
            { tex: '\\text{Suppose } f(r_1) = f(r_2) = 0 \\text{ with } r_1 < r_2', why: 'Uniqueness, by contradiction: imagine there were two different roots.' },
            { tex: "\\implies f'(c) = 0 \\text{ for some } c \\in (r_1, r_2)", why: 'Rolle\'s theorem on $[r_1, r_2]$: $f$ is a polynomial and $f(r_1) = f(r_2)$.' },
            { tex: "\\text{but } f'(x) = 3x^2 + 1 \\ge 1 > 0 \\text{ for all } x", why: 'A square is never negative, so $f\'$ can never be $0$.' },
            { tex: '\\implies \\text{contradiction: there is only one root}', why: 'The assumption of two roots led to something impossible, so it was false.' },
          ],
          result: 'The equation $x^3 + x - 1 = 0$ has exactly one real solution (approximately $x \\approx 0.682$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why a root-finder cares',
          text: 'Before running [[newtons-method|Newton\'s method]] or bisection, it is valuable to know how many roots exist. A collision-detection routine solving for the time of impact, for example, needs to know whether the *first* root it finds is the only one. "Derivative never zero $\\implies$ at most one root" is a cheap check that rules out surprises.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'The same argument generalises: between any two roots of $f$ lies a root of $f\'$. So if $f\'$ has $k$ real roots, $f$ has at most $k + 1$.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If $f$ is differentiable everywhere and $f\'(x) \\ne 0$ for every $x$, then the equation $f(x) = 0$ has at most one real solution.',
      answer: true,
      explanation: 'If there were two solutions $r_1 < r_2$, then $f(r_1) = f(r_2) = 0$ and Rolle\'s theorem would give some $c$ between them with $f\'(c) = 0$ — contradicting $f\'(x) \\ne 0$. Note it says *at most* one: $f(x) = e^x$ has $f\'(x) = e^x \\ne 0$ and no solutions at all.',
    },
    {
      kind: 'concept',
      title: 'The Mean Value Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Rolle\'s theorem handles a level secant line (equal endpoint heights). Tilt the picture and you get the general version: somewhere, the tangent line is **parallel** to the secant line through the endpoints.',
        },
        {
          type: 'theorem',
          name: 'Mean Value Theorem (MVT)',
          tex: "f'(c) = \\frac{f(b) - f(a)}{b - a}",
          text: 'If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there is at least one number $c$ in $(a, b)$ satisfying the equation above. Equivalently, $f(b) - f(a) = f\'(c)(b - a)$.',
        },
        {
          type: 'graph',
          x: [-0.4, 2.4],
          y: [-1.5, 7],
          functions: [{ expr: 'x^3 - x', label: '$f(x) = x^3 - x$' }],
          tangents: [
            { expr: 'x^3 - x', at: 0, secantTo: 2, color: 'purple', label: 'secant slope 3' },
            { expr: 'x^3 - x', at: 'c', color: 'orange' },
          ],
          sliders: [{ name: 'c', min: 0.05, max: 1.95, step: 0.01, value: 0.4, label: '$c$' }],
          readouts: [
            { label: 'tangent slope $f\'(c) = 3c^2 - 1 =$', expr: '3c^2 - 1', digits: 3 },
            { label: 'secant slope $\\frac{f(2) - f(0)}{2 - 0} =$', expr: '3', digits: 3 },
          ],
          caption: 'Slide $c$ until the orange tangent is parallel to the purple secant through $(0, 0)$ and $(2, 6)$. It happens near $c \\approx 1.155$.',
        },
        {
          type: 'derivation',
          title: 'Find the $c$ promised by the MVT for $f(x) = x^3 - x$ on $[0, 2]$',
          steps: [
            { tex: '\\frac{f(2) - f(0)}{2 - 0} = \\frac{6 - 0}{2} = 3', why: 'Secant slope: $f(2) = 8 - 2 = 6$ and $f(0) = 0$.' },
            { tex: "f'(c) = 3c^2 - 1 = 3", why: 'Set the tangent slope equal to the secant slope.' },
            { tex: 'c^2 = \\tfrac43', why: 'Add $1$ to both sides and divide by $3$.' },
            { tex: 'c = \\tfrac{2}{\\sqrt3} \\approx 1.155', why: 'Take square roots. The negative root $-\\frac{2}{\\sqrt3}$ is not in $(0, 2)$, so it is discarded.' },
          ],
          result: 'At $c = \\frac{2}{\\sqrt3}$ the tangent slope equals the average slope $3$, matching the graph.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the MVT is true: tilt and apply Rolle',
          text: 'Let $L(x)$ be the secant line through $(a, f(a))$ and $(b, f(b))$, and define $g(x) = f(x) - L(x)$, the vertical gap between curve and secant. Then $g(a) = g(b) = 0$ (the line passes through both endpoints), and $g$ is continuous and differentiable because $f$ and $L$ are. Rolle gives $c$ in $(a, b)$ with $g\'(c) = 0$, i.e. $f\'(c) = L\'(x) = \\frac{f(b) - f(a)}{b - a}$. The MVT is just Rolle\'s theorem viewed at a slant.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Like the EVT, the MVT is an *existence* theorem. It guarantees some $c$, but in most applications we never find it — knowing it exists is enough to draw conclusions, as the rest of this lesson shows.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the number $c$ that satisfies the Mean Value Theorem for $f(x) = \\sqrt{x}$ on $[0, 4]$.',
      label: '$c =$',
      answer: '1',
      hint: 'Secant slope: $\\frac{\\sqrt4 - \\sqrt0}{4 - 0}$. Then solve $\\frac{1}{2\\sqrt{c}} = $ that slope.',
      explanation: '$\\sqrt{x}$ is continuous on $[0, 4]$ and differentiable on $(0, 4)$ (it is not differentiable at $0$, but the MVT only needs the *open* interval). The secant slope is $\\frac{2 - 0}{4} = \\frac12$. Setting $f\'(c) = \\frac{1}{2\\sqrt c} = \\frac12$ gives $\\sqrt c = 1$, so $c = 1$, which is inside $(0, 4)$.',
    },
    {
      kind: 'error',
      prompt: 'A student tries the MVT on $f(x) = \\frac{1}{x}$ over $[-1, 1]$. Tap the first line that is wrong.',
      lines: [
        '$f(-1) = -1$ and $f(1) = 1$, so the secant slope is $\\frac{1 - (-1)}{1 - (-1)} = 1$.',
        '$f$ is a rational function, so it is continuous on $[-1, 1]$ and the MVT applies.',
        '$f\'(x) = -\\frac{1}{x^2}$, so we need $-\\frac{1}{c^2} = 1$.',
        'That means $c^2 = -1$, which has no real solution, so the MVT is false.',
      ],
      errorLines: [2],
      explanation: 'Line 2 is wrong: rational functions are continuous only on their domain, and $\\frac1x$ is undefined at $x = 0$, which lies in $[-1, 1]$. The hypotheses fail, so the MVT makes no promise. Lines 3–4 compute correctly that no $c$ works — which is not a counterexample to the theorem but a demonstration of why the continuity hypothesis is needed.',
    },
    {
      kind: 'concept',
      title: 'Speed cameras and speed hacks',
      blocks: [
        {
          type: 'p',
          text: 'Many countries use **average-speed cameras**: one camera photographs your car at point A, another at point B several kilometres later, and the system divides the distance by the time. You can be ticketed even though no camera ever saw you speeding. Is that fair? The MVT says yes.',
        },
        {
          type: 'derivation',
          title: 'Cameras $12$ km apart record times $8$ minutes apart; the limit is $80$ km/h',
          steps: [
            { tex: '8 \\text{ min} = \\tfrac{8}{60} \\text{ h} = \\tfrac{2}{15} \\text{ h}', why: 'Convert to hours so the units of speed are km/h.' },
            { tex: '\\frac{s(t_B) - s(t_A)}{t_B - t_A} = \\frac{12}{2/15} = 90 \\text{ km/h}', why: 'Average speed is the slope of the secant on the position graph $s(t)$.' },
            { tex: "s'(c) = 90 \\text{ for some } c \\in (t_A, t_B)", why: 'Position is continuous and differentiable (cars do not teleport), so the MVT applies.' },
            { tex: '90 > 80', why: 'The instantaneous speed $s\'(c)$ exceeded the limit.' },
          ],
          result: 'At some instant between the cameras the car was going exactly $90$ km/h, so it certainly broke the $80$ km/h limit.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Catching speed hacks in multiplayer games',
          text: 'Game servers use the same logic for anti-cheat. Clients report positions every few hundred milliseconds. If the distance between two reports divided by the elapsed time exceeds the fastest legal movement speed, then — since real movement is continuous — the player must at some instant have moved faster than allowed. (The straight-line distance is at most the distance actually travelled, so the true average speed along the path is even higher.)',
        },
        {
          type: 'code',
          title: 'speed_check.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Sample { double t, x, y; };  // time (s), position (m)

int main() {
    const double maxSpeed = 7.0;  // fastest legal run speed, m/s
    Sample s[] = {{0.0, 0, 0}, {0.5, 3, 0}, {1.0, 6, 1}, {1.5, 12, 4}, {2.0, 14, 5}};

    for (int i = 1; i < 5; ++i) {
        double dist = std::hypot(s[i].x - s[i - 1].x, s[i].y - s[i - 1].y);
        double avg = dist / (s[i].t - s[i - 1].t);
        std::printf("t=%.1f..%.1f  avg speed %.2f m/s%s\\n", s[i - 1].t, s[i].t, avg,
                    avg > maxSpeed ? "  <-- impossible: flag!" : "");
    }
}`,
          output: `t=0.0..0.5  avg speed 6.00 m/s
t=0.5..1.0  avg speed 6.32 m/s
t=1.0..1.5  avg speed 13.42 m/s  <-- impossible: flag!
t=1.5..2.0  avg speed 4.47 m/s`,
          annotations: [
            { lines: 11, text: 'Straight-line distance between consecutive position reports.' },
            { lines: 12, text: 'A secant slope: average speed over the interval between reports.' },
            { lines: '13-14', text: 'By the MVT, an average above the maximum means the instantaneous speed exceeded it at some moment.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The logic only runs one way. An average **below** the limit does not prove you never sped — you could have raced and then crawled. The MVT guarantees the speed *equals* the average at some instant; it says nothing about the maximum speed.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Two average-speed cameras are $15$ km apart. A car passes the first at 10:04 and the second at 10:13. What speed (in km/h) does the MVT guarantee the car reached at some instant?',
      label: 'speed $=$',
      unit: 'km/h',
      answer: '100',
      hint: 'The elapsed time is $9$ minutes. Convert it to hours first.',
      explanation: 'Elapsed time $= 9$ min $= \\frac{9}{60} = 0.15$ h. Average speed $= \\frac{15}{0.15} = 100$ km/h. Position is a differentiable function of time, so by the MVT the speedometer read exactly $100$ km/h at some moment between the cameras.',
    },
    {
      kind: 'concept',
      title: 'Consequence: zero derivative means constant',
      blocks: [
        {
          type: 'p',
          text: 'Here is a fact you have probably taken for granted: if a function\'s derivative is zero everywhere on an interval, the function is constant. It feels obvious — zero velocity means you are not moving — but *proving* it requires the MVT.',
        },
        {
          type: 'theorem',
          name: 'Zero derivative theorem',
          text: 'If $f\'(x) = 0$ for all $x$ in an interval $(a, b)$, then $f$ is constant on $(a, b)$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'x_1 < x_2 \\text{ any two points in } (a, b)', why: 'To show $f$ is constant, show any two of its values are equal.' },
            { tex: 'f(x_2) - f(x_1) = f\'(c)(x_2 - x_1)', why: 'MVT on $[x_1, x_2]$: $f$ is differentiable on $(a, b)$, hence continuous on $[x_1, x_2]$ and differentiable on $(x_1, x_2)$.' },
            { tex: '= 0 \\cdot (x_2 - x_1) = 0', why: '$c$ lies in $(a, b)$, where $f\'$ is zero everywhere.' },
            { tex: 'f(x_2) = f(x_1)', why: 'Any two values agree, so $f$ is constant.' },
          ],
          result: 'Every pair of values is equal: $f$ is constant on the interval.',
        },
        {
          type: 'theorem',
          name: 'Corollary: equal derivatives differ by a constant',
          tex: "f'(x) = g'(x) \\text{ on } (a, b) \\implies f(x) = g(x) + C",
          text: 'Apply the theorem to $f - g$, whose derivative is $f\' - g\' = 0$.',
        },
        {
          type: 'p',
          text: 'This corollary is the reason every antiderivative carries a "$+ C$" in the next unit: if two functions have the same derivative, they can differ only by a constant, so knowing $f\'$ pins down $f$ up to a vertical shift. It is also a slick way to prove identities. For instance, $h(x) = \\sin^2 x + \\cos^2 x$ has $h\'(x) = 2\\sin x\\cos x - 2\\cos x\\sin x = 0$, so $h$ is constant, and $h(0) = 0 + 1 = 1$ tells us which constant.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The domain must be an interval',
          text: '$f(x) = \\frac{x}{|x|}$ has $f\'(x) = 0$ at every point of its domain, yet it equals $-1$ for $x < 0$ and $1$ for $x > 0$. No contradiction: the domain has a gap at $0$, and the MVT cannot be applied across a gap. The theorem says $f$ is constant on *each interval* of its domain.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order the steps of the proof that $f\'(x) = 0$ on $(a, b)$ implies $f$ is constant there.',
      lines: [
        'Pick any two points $x_1 < x_2$ in $(a, b)$',
        'Apply the MVT to $f$ on $[x_1, x_2]$',
        'Get $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1)$ for some $c$ in $(x_1, x_2)$',
        'Since $f\'(c) = 0$, conclude $f(x_2) = f(x_1)$',
        'Any two values are equal, so $f$ is constant',
      ],
      distractors: ['Integrate both sides of $f\'(x) = 0$'],
      explanation: 'The proof compares two arbitrary values using the MVT: the difference $f(x_2) - f(x_1)$ equals $f\'(c)$ times the run, and $f\'(c)$ is zero. Integration is not available yet — in fact this theorem is what later *justifies* the $+C$ in antiderivatives, so using integration here would be circular.',
    },
    {
      kind: 'mcq',
      prompt: 'Suppose $f\'(x) = g\'(x)$ for all real $x$, $f(0) = 5$ and $g(0) = 2$. What can you conclude?',
      options: [
        {
          text: '$f(x) = g(x)$ for all $x$',
          why: 'Equal derivatives do not force equal functions — $x^2$ and $x^2 + 1$ have the same derivative. Here $f(0) \\ne g(0)$, so they cannot be equal.',
        },
        {
          text: '$f(x) = g(x) + 3$ for all $x$',
          correct: true,
          why: 'By the corollary, $f(x) = g(x) + C$. Plugging in $x = 0$: $5 = 2 + C$, so $C = 3$.',
        },
        {
          text: '$f(x) = g(x) + 3$ only near $x = 0$',
          why: 'The domain is all of $\\mathbb{R}$, an interval, so the constant difference holds everywhere, not just locally.',
        },
        {
          text: 'Nothing: the functions could be unrelated',
          why: 'Equal derivatives on an interval is a strong condition: $(f - g)\' = 0$ forces $f - g$ to be constant.',
        },
      ],
      explanation: 'Apply the zero derivative theorem to $h = f - g$: $h\' = f\' - g\' = 0$ on $\\mathbb{R}$, so $h$ is a constant $C$. The values at $0$ determine it: $C = f(0) - g(0) = 3$. Two functions with the same derivative have parallel graphs — one is a vertical shift of the other.',
    },
    {
      kind: 'concept',
      title: 'Consequence: bounding change',
      blocks: [
        {
          type: 'p',
          text: 'Rewritten as $f(b) - f(a) = f\'(c)(b - a)$, the MVT says **total change = (some rate) × (time)**. Even when we cannot find $c$, a bound on $f\'$ gives a bound on how much $f$ can change. This is how engineers and programmers derive error bounds.',
        },
        {
          type: 'derivation',
          title: 'If $f(0) = -3$ and $f\'(x) \\le 5$ for all $x$, how large can $f(2)$ be?',
          steps: [
            { tex: 'f(2) - f(0) = f\'(c)(2 - 0) \\text{ for some } c \\in (0, 2)', why: '$f$ is differentiable everywhere, so the MVT applies on $[0, 2]$.' },
            { tex: 'f(2) = -3 + 2f\'(c)', why: 'Substitute $f(0) = -3$ and solve for $f(2)$.' },
            { tex: '\\le -3 + 2 \\cdot 5 = 7', why: 'Whatever $c$ is, $f\'(c) \\le 5$, and multiplying by the positive number $2$ preserves the inequality.' },
          ],
          result: '$f(2) \\le 7$. The bound is sharp: $f(x) = 5x - 3$ achieves it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Speed limits in code',
          text: 'Games clamp how fast values may change: a turret rotates at most $\\omega_{\\max}$ radians per second, a camera pans at most $v_{\\max}$ units per second. The MVT turns those rate limits into guarantees: over a time $\\Delta t$, the value changes by at most $\\omega_{\\max}\\,\\Delta t$. Physics engines use the same reasoning to decide how large a time step can be before an object could tunnel through a wall.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love two MVT tasks: "verify the hypotheses and find all $c$" (show continuity on $[a, b]$, differentiability on $(a, b)$, then solve $f\'(c) = $ secant slope and keep only $c$ inside the interval) and "bound $f(b)$ given a bound on $f\'$". Always state the hypotheses explicitly — that is where the marks are.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Suppose $f$ is differentiable, $f(1) = 4$, and $f\'(x) \\le 3$ for every $x$ in $[1, 5]$. What is the largest possible value of $f(5)$?',
      label: '$f(5) \\le$',
      answer: '16',
      hint: 'MVT: $f(5) - f(1) = f\'(c)(5 - 1)$.',
      explanation: 'By the MVT, $f(5) - f(1) = f\'(c) \\cdot 4$ for some $c$ in $(1, 5)$. Since $f\'(c) \\le 3$, $f(5) \\le 4 + 3 \\cdot 4 = 16$. The line $f(x) = 3x + 1$ meets every condition and has $f(5) = 16$, so the bound cannot be improved.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the statement of the Mean Value Theorem.',
      template: 'If $f$ is continuous on ___ and differentiable on ___, then $f\'(c) =$ ___ for some $c$ in $(a, b)$.',
      blanks: [{ answers: ['$[a, b]$'] }, { answers: ['$(a, b)$'] }, { answers: ['$\\frac{f(b) - f(a)}{b - a}$'] }],
      wordBank: ['$[a, b]$', '$(a, b)$', '$\\frac{f(b) - f(a)}{b - a}$', '$0$', '$\\frac{f(a) + f(b)}{2}$', '$f(b) - f(a)$'],
      explanation: 'Continuity is required on the **closed** interval (endpoints included, so the secant line connects real points of the graph), but differentiability only on the **open** interval — a vertical tangent or corner at an endpoint is fine, as $\\sqrt{x}$ on $[0, 4]$ showed. The conclusion equates the instantaneous rate $f\'(c)$ with the average rate $\\frac{f(b) - f(a)}{b - a}$. The value $0$ is the special case of Rolle\'s theorem, when $f(a) = f(b)$.',
    },
  ],
  takeaways: [
    'Rolle\'s theorem: if $f$ is continuous on $[a, b]$, differentiable on $(a, b)$ and $f(a) = f(b)$, then $f\'(c) = 0$ for some $c$ in $(a, b)$.',
    'Mean Value Theorem: under the first two hypotheses, $f\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c$ in $(a, b)$ — some tangent is parallel to the secant.',
    'If $f\'$ is never zero, $f(x) = 0$ has at most one solution (Rolle); combine with the IVT to prove exactly one.',
    'If $f\' = 0$ on an interval, $f$ is constant there; if $f\' = g\'$, then $f = g + C$ — the origin of "$+C$".',
    'Written as $f(b) - f(a) = f\'(c)(b - a)$, the MVT converts bounds on the rate $f\'$ into bounds on the change in $f$ (speed cameras, anti-cheat, error bounds).',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.4 The Mean Value Theorem',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-4-the-mean-value-theorem',
      source: 'openstax',
      note: 'Rolle\'s theorem, the MVT and its corollaries with proofs and extra examples.',
    },
    {
      title: "Paul's Online Notes — The Mean Value Theorem",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/MeanValueTheorem.aspx',
      source: 'paul',
      note: 'Worked examples of finding $c$ and using the MVT to prove facts about functions.',
    },
    {
      title: 'Wikipedia — Mean value theorem',
      url: 'https://en.wikipedia.org/wiki/Mean_value_theorem',
      source: 'wikipedia',
      note: 'History (Rolle, Cauchy) and generalisations, including the Cauchy mean value theorem used to prove L\'Hôpital\'s rule.',
    },
  ],
};
