import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-atan2',
  title: 'Direction Angles and atan2',
  summary: 'Why arctan(y/x) points the wrong way half the time, and how atan2(y, x) gives every game the true direction to a target.',
  minutes: 17,
  objectives: [
    'Find the direction angle of a vector or point from its components',
    'Explain why $\\arctan\\frac{y}{x}$ cannot distinguish opposite directions',
    'Correct the quadrant by hand and compute $\\operatorname{atan2}(y, x)$ exactly for special angles',
    'Use `std::atan2(dy, dx)` to aim at a target, and convert its output to $[0, 2\\pi)$ or degrees',
    'Wrap an angle difference into $(-\\pi, \\pi]$ so an object turns the short way',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Which way is the target?',
      blocks: [
        {
          type: 'p',
          text: 'A turret sits at the origin and an enemy is at $(x, y)$. To rotate the turret\'s sprite, the game needs one number: the angle $\\theta$ of the line from turret to enemy, measured counterclockwise from the positive $x$-axis. That is the [[direction-angle]] of the [[vector]] $\\langle x, y \\rangle$.',
        },
        {
          type: 'p',
          text: 'From the unit circle, a point at distance $r = \\sqrt{x^2 + y^2}$ and angle $\\theta$ has coordinates $x = r\\cos\\theta$ and $y = r\\sin\\theta$. Dividing, $\\frac{y}{x} = \\tan\\theta$. So it seems the answer is simply $\\theta = \\arctan\\frac{y}{x}$. Drag the point around and compare the two readouts below.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 5],
          equal: true,
          segments: [{ from: [0, 0], to: ['a', 'b'], arrow: true, color: 'blue' }],
          points: [{ x: 'a', y: 'b', label: 'enemy' }],
          sliders: [
            { name: 'a', min: -4.5, max: 4.5, step: 0.1, value: -3, label: '$x$' },
            { name: 'b', min: -4.5, max: 4.5, step: 0.1, value: 2, label: '$y$' },
          ],
          readouts: [
            { label: '$\\arctan(y/x)$ in degrees $\\approx$', expr: 'arctan(b/a)*180/pi', digits: 1 },
            { label: '$\\operatorname{atan2}(y, x)$ in degrees $\\approx$', expr: 'atan2(b, a)*180/pi', digits: 1 },
          ],
          caption: 'In Quadrants I and IV the two readouts agree. Move the point to the left half-plane and $\\arctan(y/x)$ is off by exactly $180^\\circ$: it points the turret directly *away* from the enemy.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'This shows up everywhere',
          text: 'Aiming turrets and cameras, rotating a character to face its velocity, finding the angle of a mouse cursor around the player, steering AI toward waypoints, drawing an arrow along a line: every one of them turns components $(dx, dy)$ into an angle. Getting it right is the topic of this lesson.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Why $\\arctan\\frac{y}{x}$ loses the quadrant',
      blocks: [
        {
          type: 'p',
          text: 'The trouble is in the division. The points $(1, 1)$ and $(-1, -1)$ point in opposite directions, yet $\\frac{1}{1} = \\frac{-1}{-1} = 1$. Once you divide, the information "both coordinates were negative" is gone. Tangent has period $\\pi$, so opposite directions always share a tangent.',
        },
        {
          type: 'p',
          text: 'And [[inverse-tangent|arctan]] can only return angles in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ — the right half of the plane. It is literally incapable of answering "up and to the left". On top of that, $x = 0$ (straight up or down) makes $\\frac{y}{x}$ a division by zero.',
        },
        {
          type: 'table',
          headers: ['point $(x, y)$', '$\\frac{y}{x}$', '$\\arctan\\frac{y}{x}$', 'true direction'],
          rows: [
            ['$(\\sqrt{3}, 1)$', '$\\frac{1}{\\sqrt{3}}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{6}$ ✓'],
            ['$(-\\sqrt{3}, 1)$', '$-\\frac{1}{\\sqrt{3}}$', '$-\\frac{\\pi}{6}$', '$\\frac{5\\pi}{6}$ ✗'],
            ['$(-\\sqrt{3}, -1)$', '$\\frac{1}{\\sqrt{3}}$', '$\\frac{\\pi}{6}$', '$-\\frac{5\\pi}{6}$ ✗'],
            ['$(\\sqrt{3}, -1)$', '$-\\frac{1}{\\sqrt{3}}$', '$-\\frac{\\pi}{6}$', '$-\\frac{\\pi}{6}$ ✓'],
          ],
          caption: 'Four directions, only two distinct answers from arctan. Whenever $x < 0$ it is off by exactly $\\pi$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why exactly $\\pi$?',
          text: 'Opposite directions differ by a half turn, and $\\tan(\\theta + \\pi) = \\tan\\theta$ because both $\\sin$ and $\\cos$ change sign when you add $\\pi$, so their ratio does not. For a point with $x < 0$, the true angle and the value of $\\arctan\\frac{y}{x}$ are therefore half a turn apart. That makes the fix easy: add or subtract $\\pi$.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A student computes the direction of the vector $\\langle -2, 2 \\rangle$ as $\\arctan\\frac{2}{-2}$. What do they get, and what is the true direction angle in $(-\\pi, \\pi]$?',
      options: [
        { text: 'They get $-\\frac{\\pi}{4}$; the true direction is $\\frac{3\\pi}{4}$', correct: true, why: '$\\arctan(-1) = -\\frac{\\pi}{4}$, which points down-right. The vector points up-left (Quadrant II), so the true angle is $-\\frac{\\pi}{4} + \\pi = \\frac{3\\pi}{4}$.' },
        { text: 'They get $-\\frac{\\pi}{4}$, which is correct', why: '$-\\frac{\\pi}{4}$ points into Quadrant IV, but $\\langle -2, 2 \\rangle$ has negative $x$ and positive $y$: Quadrant II.' },
        { text: 'They get $\\frac{3\\pi}{4}$, which is correct', why: 'Arctan can never return $\\frac{3\\pi}{4}$: its range is $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.' },
        { text: 'They get $-\\frac{\\pi}{4}$; the true direction is $-\\frac{3\\pi}{4}$', why: 'Subtracting $\\pi$ gives $-\\frac{5\\pi}{4}$, not $-\\frac{3\\pi}{4}$; and $-\\frac{3\\pi}{4}$ points down-left (Quadrant III), the wrong way.' },
      ],
      explanation: '$\\frac{y}{x} = -1$ and $\\arctan(-1) = -\\frac{\\pi}{4}$, an angle in Quadrant IV. But the vector has $x < 0$, $y > 0$, so it lies in Quadrant II, exactly opposite. Adding $\\pi$ fixes it: $\\frac{3\\pi}{4}$. Check with the unit circle: $\\cos\\frac{3\\pi}{4} < 0$ and $\\sin\\frac{3\\pi}{4} > 0$.',
    },
    {
      kind: 'concept',
      title: 'The fix: atan2(y, x)',
      blocks: [
        {
          type: 'p',
          text: 'The cure is to never throw away the signs of $x$ and $y$ in the first place. The two-argument function [[atan2]] takes them separately, so it knows the quadrant, and it handles $x = 0$ without dividing by zero.',
        },
        {
          type: 'definition',
          term: 'atan2',
          text: '$\\operatorname{atan2}(y, x)$ is the angle $\\theta \\in (-\\pi, \\pi]$ such that $x = r\\cos\\theta$ and $y = r\\sin\\theta$, where $r = \\sqrt{x^2 + y^2} > 0$. **The $y$-coordinate comes first**, mirroring $\\tan\\theta = \\frac{y}{x}$.',
        },
        {
          type: 'math',
          tex: '\\operatorname{atan2}(y, x) = \\begin{cases} \\arctan\\frac{y}{x} & x > 0 \\\\ \\arctan\\frac{y}{x} + \\pi & x < 0,\\ y \\ge 0 \\\\ \\arctan\\frac{y}{x} - \\pi & x < 0,\\ y < 0 \\\\ \\frac{\\pi}{2} & x = 0,\\ y > 0 \\\\ -\\frac{\\pi}{2} & x = 0,\\ y < 0 \\end{cases}',
          caption: 'Right half-plane: arctan already works. Left half-plane: shift by half a turn, upward for Quadrant II and downward for Quadrant III so the result stays in $(-\\pi, \\pi]$.',
        },
        {
          type: 'derivation',
          title: 'Find $\\operatorname{atan2}(-3\\sqrt{3}, -3)$, the direction of $\\langle -3, -3\\sqrt{3} \\rangle$',
          steps: [
            { tex: 'x = -3 < 0,\\ \\ y = -3\\sqrt{3} < 0', why: 'Both negative: the vector points into Quadrant III, so we will need the "$-\\pi$" case.' },
            { tex: '\\frac{y}{x} = \\frac{-3\\sqrt{3}}{-3} = \\sqrt{3}', why: 'The ratio is positive — the signs cancelled, which is exactly the information arctan loses.' },
            { tex: '\\arctan\\sqrt{3} = \\tfrac{\\pi}{3}', why: 'Special value from the 30-60-90 triangle. This points into Quadrant I: wrong way.' },
            { tex: '\\operatorname{atan2}(-3\\sqrt{3}, -3) = \\tfrac{\\pi}{3} - \\pi = -\\tfrac{2\\pi}{3}', why: 'Rotate half a turn. Subtracting (not adding) keeps the answer in $(-\\pi, \\pi]$.' },
            { tex: '6\\cos\\left(-\\tfrac{2\\pi}{3}\\right) = -3,\\ \\ 6\\sin\\left(-\\tfrac{2\\pi}{3}\\right) = -3\\sqrt{3}\\ \\checkmark', why: 'Check: $r = \\sqrt{9 + 27} = 6$, and the polar form reproduces the original components.' },
          ],
          result: 'The direction angle is $-\\frac{2\\pi}{3}$ ($-120^\\circ$), or equivalently $\\frac{4\\pi}{3}$ if you prefer $[0, 2\\pi)$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sanity-check with a sketch',
          text: 'Before trusting any angle, plot the point roughly. If the point is up-left, the answer must be between $\\frac{\\pi}{2}$ and $\\pi$ ($90^\\circ$ to $180^\\circ$); down-left means between $-\\pi$ and $-\\frac{\\pi}{2}$. A five-second sketch catches nearly every quadrant mistake.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order the steps for finding the direction angle of $\\langle x, y \\rangle$ by hand when $x \\ne 0$.',
      lines: [
        'Note the signs of $x$ and $y$ to identify the quadrant',
        'Compute the ratio $\\frac{y}{x}$',
        'Find $\\alpha = \\arctan\\frac{y}{x}$',
        'If $x < 0$, add $\\pi$ (when $y \\ge 0$) or subtract $\\pi$ (when $y < 0$)',
        'Check that the angle points into the quadrant you identified',
      ],
      distractors: ['Divide by $x$ first, then decide the quadrant from the sign of $\\frac{y}{x}$'],
      explanation: 'The quadrant must be recorded *before* dividing, because $\\frac{y}{x}$ alone cannot tell Quadrant I from III or II from IV — that is the distractor\'s flaw. Then arctan gives an angle in the right half-plane, which you shift by $\\pi$ if the point is actually in the left half-plane, and finally verify.',
    },
    {
      kind: 'numeric',
      prompt: 'The player is at $(1, 2)$ and an enemy is at $(-3, -2)$. What angle does $\\operatorname{atan2}(dy, dx)$ return for the direction from the player to the enemy? Give an exact answer in radians.',
      hint: 'First find $dx = x_{\\text{enemy}} - x_{\\text{player}}$ and $dy$. Which quadrant does $\\langle dx, dy \\rangle$ point into?',
      answer: '-3pi/4',
      answerTex: '-\\frac{3\\pi}{4}',
      explanation: '$dx = -3 - 1 = -4$ and $dy = -2 - 2 = -4$, so the vector $\\langle -4, -4 \\rangle$ points down-left (Quadrant III). $\\arctan\\frac{-4}{-4} = \\arctan 1 = \\frac{\\pi}{4}$, and since $x < 0$, $y < 0$ we subtract $\\pi$: $\\frac{\\pi}{4} - \\pi = -\\frac{3\\pi}{4}$. ($\\frac{5\\pi}{4}$ is the same direction, but atan2 returns values in $(-\\pi, \\pi]$.) You can type `atan2(-4, -4)` to check.',
    },
    {
      kind: 'concept',
      title: 'atan2 in code: aiming a turret',
      blocks: [
        {
          type: 'p',
          text: 'Every serious math library has atan2, and they all use the same order: **y first**. C and C++ have `std::atan2(y, x)`; Unity has `Mathf.Atan2(y, x)`; Unreal has `FMath::Atan2(Y, X)`; JavaScript has `Math.atan2(y, x)`. The result is in radians, in $(-\\pi, \\pi]$.',
        },
        {
          type: 'code',
          title: 'aim.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

struct Vec2 { double x, y; };

int main() {
    const double toDeg = 180.0 / std::numbers::pi;
    Vec2 turret{2.0, 1.0};
    Vec2 enemies[] = {{5.0, 4.0}, {-1.0, 4.0}, {-1.0, -2.0}, {5.0, -2.0}};
    for (Vec2 e : enemies) {
        double dx = e.x - turret.x;
        double dy = e.y - turret.y;
        double naive = std::atan(dy / dx) * toDeg;   // loses the quadrant
        double aim = std::atan2(dy, dx) * toDeg;      // correct
        std::printf("enemy (%4.1f, %4.1f): atan = %7.2f  atan2 = %7.2f\\n", e.x, e.y, naive, aim);
    }
}`,
          output: `enemy ( 5.0,  4.0): atan =   45.00  atan2 =   45.00
enemy (-1.0,  4.0): atan =  -45.00  atan2 =  135.00
enemy (-1.0, -2.0): atan =   45.00  atan2 = -135.00
enemy ( 5.0, -2.0): atan =  -45.00  atan2 =  -45.00`,
          annotations: [
            { lines: '12-13', text: 'The vector from the turret to the enemy: target position minus own position.' },
            { lines: 14, text: 'Dividing first destroys the signs. For the two enemies on the left this aims $180^\\circ$ the wrong way.' },
            { lines: 15, text: '`atan2(dy, dx)` — $y$ first! Correct in all four quadrants.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Argument order traps',
          text: 'Swapping the arguments, `atan2(dx, dy)`, does not crash — it silently returns $\\frac{\\pi}{2} - \\theta$ (wrapped into $(-\\pi, \\pi]$), the angle measured *clockwise from the $y$-axis*. To make things worse, spreadsheets (Excel\'s and Google Sheets\' `ATAN2(x, y)`) put $x$ first. Always check the documentation.',
        },
        {
          type: 'p',
          text: 'Two conversions come up constantly. For degrees, multiply by $\\frac{180}{\\pi}$. For an angle in $[0, 2\\pi)$ (some engines and compass headings want that), add $2\\pi$ when the result is negative: `if (a < 0) a += 2 * pi;`.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Screen coordinates',
          text: 'Many 2D engines put the $y$-axis pointing **down** the screen. atan2 still works, but positive angles then rotate clockwise on screen. Whatever the convention, use the same one for atan2 and for drawing the sprite, and it all lines up.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the line that computes the angle from `me` to `target`, where `dx = target.x - me.x` and `dy = target.y - me.y`.',
      template: 'double angle = std::atan2(___, ___);',
      templateIsCode: true,
      blanks: [{ answers: ['dy'] }, { answers: ['dx'] }],
      wordBank: ['dy', 'dx', 'dy / dx', 'dx / dy'],
      explanation: 'atan2 takes the $y$-component first and the $x$-component second, just like $\\tan\\theta = \\frac{y}{x}$ has $y$ on top. Passing the ratio `dy / dx` would defeat the purpose — the signs are lost in the division (and `dx = 0` would divide by zero).',
    },
    {
      kind: 'numeric',
      prompt: 'A radar display wants headings in $[0, 2\\pi)$. The vector to a blip is $\\langle -3, -3\\sqrt{3} \\rangle$. What heading should be displayed? Give an exact answer in radians.',
      hint: 'First find $\\operatorname{atan2}(-3\\sqrt{3}, -3)$ (it was a worked example). If it is negative, add $2\\pi$.',
      answer: '4pi/3',
      answerTex: '\\frac{4\\pi}{3}',
      explanation: 'atan2 gives $\\frac{\\pi}{3} - \\pi = -\\frac{2\\pi}{3}$, a negative angle. Adding a full turn gives the [[coterminal-angles|coterminal]] angle $-\\frac{2\\pi}{3} + 2\\pi = \\frac{4\\pi}{3}$ ($240^\\circ$), which lies in $[0, 2\\pi)$ and still points into Quadrant III.',
    },
    {
      kind: 'concept',
      title: 'Turning toward a target the short way',
      blocks: [
        {
          type: 'p',
          text: 'A tank faces heading $h$ and wants to face angle $g$ (found with atan2). The obvious turn is $g - h$. But suppose $h = 170^\\circ$ and $g = -170^\\circ$. Then $g - h = -340^\\circ$: the tank swings almost a full circle clockwise, when a $20^\\circ$ counterclockwise turn would do.',
        },
        {
          type: 'p',
          text: 'The fix is [[angle-wrapping]]: replace the difference by the coterminal angle in $(-\\pi, \\pi]$, i.e. add or subtract $2\\pi$ until it lands there. The sign then tells you which way to turn (positive = counterclockwise) and the size is never more than half a turn.',
        },
        {
          type: 'derivation',
          title: 'Wrap the turn from $h = 170^\\circ$ to $g = -170^\\circ$',
          steps: [
            { tex: 'd = g - h = -170^\\circ - 170^\\circ = -340^\\circ', why: 'The raw difference.' },
            { tex: '-340^\\circ \\le -180^\\circ', why: 'It is outside $(-180^\\circ, 180^\\circ]$, so it is not the shortest turn.' },
            { tex: 'd = -340^\\circ + 360^\\circ = 20^\\circ', why: 'Adding a full turn gives a coterminal angle — the same final orientation — inside the interval.' },
          ],
          result: 'Turn $20^\\circ$ counterclockwise, not $340^\\circ$ clockwise.',
        },
        {
          type: 'p',
          text: 'There is a neat one-line way to wrap any angle $d$: $\\operatorname{atan2}(\\sin d, \\cos d)$. The point $(\\cos d, \\sin d)$ is on the unit circle at angle $d$, and atan2 reports that same direction as a principal value in $(-\\pi, \\pi]$.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: ['cos(h)', 'sin(h)'], arrow: true, color: 'blue', label: 'heading' },
            { from: [0, 0], to: ['cos(g)', 'sin(g)'], arrow: true, color: 'red', label: 'target' },
          ],
          sliders: [
            { name: 'h', min: -3.14, max: 3.14, step: 0.02, value: 2.97, label: 'heading $h$' },
            { name: 'g', min: -3.14, max: 3.14, step: 0.02, value: -2.97, label: 'target $g$' },
          ],
          readouts: [
            { label: 'raw $g - h$ (deg) $\\approx$', expr: '(g - h)*180/pi', digits: 1 },
            { label: 'wrapped turn (deg) $\\approx$', expr: 'atan2(sin(g - h), cos(g - h))*180/pi', digits: 1 },
          ],
          caption: 'Whenever the raw difference passes $\\pm 180^\\circ$, the wrapped value flips sign: the short way round has switched direction.',
        },
        {
          type: 'code',
          title: 'turn.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <numbers>

const double PI = std::numbers::pi;

// Angle coterminal with d, in (-pi, pi].
double wrapAngle(double d) { return std::atan2(std::sin(d), std::cos(d)); }

int main() {
    const double toRad = PI / 180.0;
    double heading = 170.0 * toRad;          // facing almost due west
    double target = -170.0 * toRad;          // target is just past west
    const double maxTurn = 8.0 * toRad;      // turn rate per frame

    for (int frame = 1; frame <= 3; ++frame) {
        double diff = wrapAngle(target - heading);        // shortest signed turn
        double step = std::clamp(diff, -maxTurn, maxTurn);
        heading = wrapAngle(heading + step);
        std::printf("frame %d: turn %+5.1f deg, heading %6.1f deg\\n",
                    frame, step / toRad, heading / toRad);
    }
}`,
          output: `frame 1: turn  +8.0 deg, heading  178.0 deg
frame 2: turn  +8.0 deg, heading -174.0 deg
frame 3: turn  +4.0 deg, heading -170.0 deg`,
          annotations: [
            { lines: 9, text: 'The atan2 wrapping trick from above.' },
            { lines: 18, text: 'Wrapped difference: $+20^\\circ$ on the first frame, so the tank turns counterclockwise.' },
            { lines: 19, text: 'Limit the turn to the tank\'s turn rate this frame.' },
            { lines: 20, text: 'Keep the heading itself in $(-\\pi, \\pi]$: $178^\\circ + 8^\\circ = 186^\\circ$ becomes $-174^\\circ$.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A spaceship has heading $h = \\frac{3\\pi}{4}$ and its target is at direction $g = -\\frac{3\\pi}{4}$. What is the wrapped turn angle $d \\in (-\\pi, \\pi]$ it should rotate by? (Positive means counterclockwise.)',
      label: '$d =$',
      hint: 'Compute $g - h$, then add or subtract $2\\pi$ to land in $(-\\pi, \\pi]$.',
      answer: 'pi/2',
      answerTex: '\\frac{\\pi}{2}',
      explanation: 'The raw difference is $-\\frac{3\\pi}{4} - \\frac{3\\pi}{4} = -\\frac{3\\pi}{2}$, which is less than $-\\pi$. Adding $2\\pi$ gives $\\frac{\\pi}{2}$. So the ship turns a quarter turn counterclockwise — through the direction $\\pi$ (due west) — instead of three quarters of a turn clockwise.',
    },
    {
      kind: 'concept',
      title: 'Edge cases and the bigger picture',
      blocks: [
        {
          type: 'p',
          text: 'atan2 is defined for every input pair except one: $(0, 0)$. A zero vector has no direction, so the math gives no answer. C++ still returns a value (usually $0$) rather than failing — which means a target sitting exactly on top of the turret would silently snap the turret to face east. Guard for it.',
        },
        {
          type: 'list',
          items: [
            '**On the negative $x$-axis**, $\\operatorname{atan2}(0, x) = \\pi$ for $x < 0$. That is why the range is $(-\\pi, \\pi]$: $\\pi$ is included, $-\\pi$ is not. (Floating point has a "negative zero", and `std::atan2(-0.0, -1.0)` returns $-\\pi$ — harmless, since it is the same direction.)',
            '**On the $y$-axis**, atan2 returns $\\pm\\frac{\\pi}{2}$ with no division by zero, because it never forms $\\frac{y}{x}$.',
            '**Scale does not matter**: $\\operatorname{atan2}(ky, kx) = \\operatorname{atan2}(y, x)$ for any $k > 0$. You do not need to normalize the vector first.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Going the other way',
          text: 'atan2 turns a vector into an angle; $\\langle \\cos\\theta, \\sin\\theta \\rangle$ turns an angle back into a unit vector. Together they let you store a facing as one number but move with vectors: `velocity = speed * Vec2{cos(angle), sin(angle)}`.',
        },
        {
          type: 'deepdive',
          title: 'Why not use arccos or arcsin instead?',
          blocks: [
            {
              type: 'p',
              text: 'You could compute $\\theta = \\arccos\\frac{x}{r}$, but $\\arccos$ only returns angles in $[0, \\pi]$, so it cannot tell up from down — you would need to fix the sign of $\\theta$ using $y$. Similarly $\\arcsin\\frac{y}{r}$ cannot tell left from right. Each single-argument inverse sees only half the circle; atan2 sees both coordinates and therefore the whole circle.',
            },
            {
              type: 'p',
              text: 'There is also a numerical reason: near $x = \\pm r$ the function $\\arccos$ is extremely steep, so tiny rounding errors in $\\frac{x}{r}$ become large angle errors, and a value like $1.0000001$ gives NaN. atan2 is accurate everywhere.',
            },
          ],
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student finds $\\operatorname{atan2}(5\\sqrt{3}, -5)$ by hand. Tap the first line that is wrong.',
      lines: [
        '$\\frac{y}{x} = \\frac{5\\sqrt{3}}{-5} = -\\sqrt{3}$',
        '$\\arctan(-\\sqrt{3}) = -\\frac{\\pi}{3}$',
        'Since $x < 0$ and $y > 0$, subtract $\\pi$: $\\theta = -\\frac{\\pi}{3} - \\pi = -\\frac{4\\pi}{3}$',
        'So $\\operatorname{atan2}(5\\sqrt{3}, -5) = -\\frac{4\\pi}{3}$',
      ],
      errorLines: [3],
      explanation: 'For $x < 0$ and $y \\ge 0$ (Quadrant II) the rule is to **add** $\\pi$: $-\\frac{\\pi}{3} + \\pi = \\frac{2\\pi}{3}$. The student\'s $-\\frac{4\\pi}{3}$ happens to be coterminal with $\\frac{2\\pi}{3}$, so it points the right way, but it is outside $(-\\pi, \\pi]$, so it is not the value atan2 returns. Correct answer: $\\frac{2\\pi}{3}$ ($120^\\circ$).',
    },
    {
      kind: 'truefalse',
      prompt: '`std::atan2(y, x)` returns angles in the interval $[0, 2\\pi)$.',
      answer: false,
      explanation: 'atan2 returns values in $(-\\pi, \\pi]$: positive for points above the $x$-axis, negative for points below it. If you need $[0, 2\\pi)$ — for a compass heading, say — add $2\\pi$ to negative results. Forgetting this is a classic bug when comparing angles or indexing an 8-direction sprite sheet.',
    },
  ],
  takeaways: [
    'The direction angle of $\\langle x, y \\rangle$ satisfies $\\tan\\theta = \\frac{y}{x}$, but $\\arctan\\frac{y}{x}$ only returns angles in the right half-plane.',
    'Dividing $y$ by $x$ erases the signs, so opposite directions look identical; for $x < 0$ arctan is off by exactly $\\pi$.',
    '$\\operatorname{atan2}(y, x)$ takes the components separately and returns the true direction in $(-\\pi, \\pi]$ — **y first**.',
    'To aim at a target, use `atan2(target.y - me.y, target.x - me.x)`; add $2\\pi$ to negative results if you need $[0, 2\\pi)$.',
    'Wrap angle differences into $(-\\pi, \\pi]$ (for example with `atan2(sin d, cos d)`) so objects turn the short way.',
    'atan2 is undefined at $(0, 0)$: guard against zero-length vectors in code.',
  ],
  reading: [
    {
      title: 'Wikipedia — atan2',
      url: 'https://en.wikipedia.org/wiki/Atan2',
      source: 'wikipedia',
      note: 'The piecewise definition, a quadrant diagram, and the history of atan2 in programming languages.',
    },
    {
      title: 'cppreference — std::atan2',
      url: 'https://en.cppreference.com/w/cpp/numeric/math/atan2',
      source: 'other',
      note: 'The exact C++ behaviour, including the signed-zero edge cases mentioned in this lesson.',
    },
    {
      title: 'OpenStax Precalculus 2e — 6.3 Inverse Trigonometric Functions',
      url: 'https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions',
      source: 'openstax',
      note: 'Review the range of arctan here — the root cause of the quadrant problem.',
    },
  ],
};
