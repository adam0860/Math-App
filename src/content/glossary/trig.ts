import type { GlossaryEntry } from '../types';

export const trigGlossary: GlossaryEntry[] = [
  // ---------------------------------------------------------------- Angles
  {
    id: 'angle',
    term: 'Angle',
    course: 'trig',
    category: 'Angles',
    aliases: ['rotation'],
    short: "An angle is the amount of rotation that carries a ray (the initial side) onto another ray (the terminal side) about their common endpoint, the vertex.",
    long: "In geometry an angle is a static corner between $0^\\circ$ and $360^\\circ$. Trigonometry upgrades it to a **rotation**: it has a size and a direction, so angles can be negative (clockwise) or larger than a full turn. A wheel that spins two and a half times has turned through $900^\\circ$, even though it ends up pointing the same way as $180^\\circ$.\n\nAngles are measured in [[degree-measure|degrees]] or [[radian|radians]]. By convention a counterclockwise rotation is positive and a clockwise rotation is negative, and we usually draw angles in [[standard-position]].\n\nWhy it matters: games store an object's heading as an angle, and every rotation matrix, camera yaw and turret aim is built from one. Remember that two different angle values can describe the same final direction (see [[coterminal-angles]]) — comparing headings with `==` is a classic bug.",
    tex: '\\theta = \\text{rotation from initial side to terminal side}',
    see: ['standard-position', 'initial-side', 'terminal-side', 'radian', 'degree-measure'],
  },
  {
    id: 'standard-position',
    term: 'Standard Position',
    course: 'trig',
    category: 'Angles',
    short: "An angle is in standard position when its vertex is at the origin and its initial side lies along the positive $x$-axis.",
    long: "Standard position gives every angle the same starting line, so the angle is completely described by where its [[terminal-side]] ends up. Positive angles rotate counterclockwise from the positive $x$-axis; negative angles rotate clockwise.\n\nOnce angles are in standard position you can talk about which [[quadrant]] an angle lies in, measure its [[reference-angle]], and read $\\cos\\theta$ and $\\sin\\theta$ off the [[unit-circle]] as the $x$- and $y$-coordinates of the point where the terminal side meets the circle.\n\nGame engines use the same convention for 2D headings (angle 0 points along $+x$), but watch out: many screen coordinate systems have $y$ pointing **down**, which turns counterclockwise into clockwise on screen.",
    see: ['angle', 'initial-side', 'terminal-side', 'quadrant', 'unit-circle'],
  },
  {
    id: 'initial-side',
    term: 'Initial Side',
    course: 'trig',
    category: 'Angles',
    short: "The ray where an angle's rotation begins; for an angle in standard position it is the positive $x$-axis.",
    long: "Think of the initial side as the hand of a clock before it moves. The angle measures how far, and in which direction, it turns to reach the [[terminal-side]].\n\nIn [[standard-position]] the initial side is always the positive $x$-axis, which is why all angles in standard position can be compared directly.",
    see: ['terminal-side', 'standard-position', 'angle'],
  },
  {
    id: 'terminal-side',
    term: 'Terminal Side',
    course: 'trig',
    category: 'Angles',
    short: "The ray where an angle's rotation ends. Its position determines the quadrant and the signs of the trig functions.",
    long: "The terminal side is where the rotating ray stops. For an angle in [[standard-position]], it meets the [[unit-circle]] at the point $(\\cos\\theta, \\sin\\theta)$, so every trig value of $\\theta$ is really a fact about the terminal side.\n\nDifferent angles can share a terminal side — they are [[coterminal-angles]] and have identical trig values. That is why trig functions are periodic.\n\nIf a point $(x, y) \\ne (0,0)$ lies on the terminal side at distance $r = \\sqrt{x^2 + y^2}$ from the origin, then $\\cos\\theta = x/r$ and $\\sin\\theta = y/r$ — no unit circle required.",
    tex: '\\cos\\theta = \\frac{x}{r}, \\quad \\sin\\theta = \\frac{y}{r}, \\quad r = \\sqrt{x^2 + y^2}',
    see: ['initial-side', 'standard-position', 'coterminal-angles', 'quadrant'],
  },
  {
    id: 'degree-measure',
    term: 'Degree',
    course: 'trig',
    category: 'Angles',
    aliases: ['degrees', 'degree measure', '°'],
    short: "A unit of angle measure in which one full rotation is $360^\\circ$; so $1^\\circ$ is $\\tfrac{1}{360}$ of a turn.",
    long: "The number 360 is a historical choice (it has many divisors, which made Babylonian astronomy easy), not a mathematical one. Degrees are convenient for people: right angles are $90^\\circ$, a straight angle is $180^\\circ$.\n\nTo convert, use $180^\\circ = \\pi$ radians: multiply degrees by $\\tfrac{\\pi}{180}$ to get [[radian|radians]], and multiply radians by $\\tfrac{180}{\\pi}$ to get degrees.\n\nPitfall: calculus formulas such as $\\frac{d}{dx}\\sin x = \\cos x$ are only true in radians, and C++ `std::sin`, `std::cos` and `std::atan2` all use radians. Designers and editors often show degrees, so convert at the boundary and keep radians inside your math.",
    tex: '360^\\circ = 2\\pi \\text{ rad}, \\qquad 1^\\circ = \\frac{\\pi}{180} \\text{ rad} \\approx 0.01745 \\text{ rad}',
    example: `#include <numbers>

constexpr double degToRad(double deg) { return deg * std::numbers::pi / 180.0; }
constexpr double radToDeg(double rad) { return rad * 180.0 / std::numbers::pi; }

// std::sin expects radians: sin(90 degrees) = 1
double s = std::sin(degToRad(90.0));`,
    exampleLang: 'cpp',
    see: ['radian', 'angle', 'arc-length'],
  },
  {
    id: 'radian',
    term: 'Radian',
    course: 'trig',
    category: 'Angles',
    aliases: ['rad', 'radians', 'radian measure'],
    short: "The radian measure of a central angle is the arc length it cuts off divided by the radius: $\\theta = s/r$. One full turn is $2\\pi$ radians.",
    long: "One radian is the angle whose arc on a circle is exactly as long as the radius (about $57.3^\\circ$). Because it is a ratio of two lengths, a radian is really a pure number — that is why it fits so naturally into formulas.\n\nRadians make the key formulas clean: [[arc-length]] is $s = r\\theta$, [[sector-area]] is $A = \\tfrac12 r^2\\theta$, [[linear-speed]] is $v = r\\omega$, and in calculus $\\frac{d}{dx}\\sin x = \\cos x$. Each of these picks up an ugly factor of $\\tfrac{\\pi}{180}$ in degrees.\n\nPitfall: every standard math library (C++ `<cmath>`, GLSL, Python `math`) works in radians. Passing degrees gives silently wrong answers: `std::sin(90)` is about $0.894$, not $1$.",
    tex: '\\theta = \\frac{s}{r}, \\qquad \\pi \\text{ rad} = 180^\\circ',
    example: `#include <cmath>
#include <numbers>

double bad  = std::sin(90.0);                          // 0.894 -- 90 radians!
double good = std::sin(90.0 * std::numbers::pi / 180); // 1.0`,
    exampleLang: 'cpp',
    see: ['degree-measure', 'arc-length', 'sector-area', 'unit-circle'],
  },
  {
    id: 'coterminal-angles',
    term: 'Coterminal Angles',
    course: 'trig',
    category: 'Angles',
    short: "Angles in standard position that share the same terminal side. They differ by a whole number of full turns: $\\theta + 360^\\circ k$ or $\\theta + 2\\pi k$ for an integer $k$.",
    long: "$30^\\circ$, $390^\\circ$ and $-330^\\circ$ all end in the same place, so they are coterminal. Because the trig functions depend only on the [[terminal-side]], coterminal angles have identical sine, cosine and tangent values.\n\nTo find the coterminal angle in $[0, 2\\pi)$, add or subtract $2\\pi$ until you land in that interval (in code: `fmod`, then add $2\\pi$ if the result is negative).\n\nWhy it matters: in games, headings drift past $2\\pi$ or below $0$ as objects keep turning. Normalizing to $[0, 2\\pi)$ or $(-\\pi, \\pi]$ keeps comparisons and interpolation sane — otherwise turning from $350^\\circ$ to $10^\\circ$ may spin the long way round.",
    tex: '\\theta \\sim \\theta + 2\\pi k, \\quad k \\in \\mathbb{Z}',
    example: `#include <cmath>
#include <numbers>

// Wrap any angle (radians) into [0, 2*pi)
double wrapAngle(double a) {
    constexpr double twoPi = 2.0 * std::numbers::pi;
    a = std::fmod(a, twoPi);
    return a < 0 ? a + twoPi : a;
}`,
    exampleLang: 'cpp',
    see: ['terminal-side', 'standard-position', 'periodic-function', 'reference-angle'],
  },
  {
    id: 'arc-length',
    term: 'Arc Length',
    course: 'trig',
    category: 'Angles',
    short: "The length of the arc cut off by a central angle $\\theta$ (in radians) on a circle of radius $r$ is $s = r\\theta$.",
    long: "Arc length is proportional to the angle: half the angle, half the arc. With radians the constant of proportionality is just the radius, which is the whole point of the [[radian]].\n\nIn degrees the formula becomes $s = \\frac{\\pi}{180} r\\theta$. Forgetting to convert is the most common error on arc-length problems.\n\nGame use: the distance a rolling wheel travels is $r\\theta$ — rotate a wheel sprite by $\\theta = d/r$ radians when the car moves $d$ units and the wheel will not appear to slide.",
    tex: 's = r\\theta \\quad (\\theta \\text{ in radians})',
    see: ['radian', 'sector-area', 'linear-speed'],
  },
  {
    id: 'sector-area',
    term: 'Area of a Sector',
    course: 'trig',
    category: 'Angles',
    aliases: ['sector', 'circular sector'],
    short: "A sector with central angle $\\theta$ (radians) in a circle of radius $r$ has area $A = \\tfrac12 r^2\\theta$.",
    long: "A sector is a pizza-slice region. It is the fraction $\\frac{\\theta}{2\\pi}$ of the whole disk, so its area is $\\frac{\\theta}{2\\pi}\\cdot \\pi r^2 = \\tfrac12 r^2\\theta$.\n\nIn degrees the formula is $A = \\frac{\\theta}{360}\\pi r^2$. Like [[arc-length]], the clean form needs radians.\n\nYou'll see this again in calculus, where the area of a polar region is built from thin sectors: $A = \\int \\tfrac12 r^2\\,d\\theta$.",
    tex: 'A = \\tfrac12 r^2\\theta = \\tfrac12 r s',
    see: ['arc-length', 'radian', 'polar-coordinates'],
  },
  {
    id: 'angular-speed',
    term: 'Angular Speed',
    course: 'trig',
    category: 'Angles',
    aliases: ['angular velocity', 'omega', 'ω'],
    short: "The rate at which an angle changes: $\\omega = \\theta / t$, usually in radians per second (or revolutions per minute).",
    long: "Angular speed says how fast something rotates, regardless of size: every point on a spinning disk has the same angular speed, even though outer points move faster.\n\nTo convert rpm to rad/s multiply by $2\\pi$ (radians per revolution) and divide by 60 (seconds per minute). The link to ordinary speed is [[linear-speed]] $v = r\\omega$, which requires $\\omega$ in radians per unit time.\n\nIn a game loop, rotation is integrated each frame: `angle += omega * dt`. Using a per-frame angle step instead of $\\omega \\cdot dt$ makes rotation speed depend on frame rate.",
    tex: '\\omega = \\frac{\\theta}{t}, \\qquad 1 \\text{ rpm} = \\frac{2\\pi}{60} \\text{ rad/s}',
    example: `// Frame-rate independent spin
float omega = 3.14159f;     // half a turn per second (rad/s)
void update(float dt) {
    angle += omega * dt;    // dt in seconds
}`,
    exampleLang: 'cpp',
    see: ['linear-speed', 'radian', 'arc-length'],
  },
  {
    id: 'linear-speed',
    term: 'Linear Speed',
    course: 'trig',
    category: 'Angles',
    aliases: ['tangential speed'],
    short: "The distance per unit time travelled along the circle by a point moving in a circle: $v = s/t = r\\omega$ with $\\omega$ in radians per unit time.",
    long: "Divide the [[arc-length]] formula $s = r\\theta$ by time and you get $v = r\\omega$. A point twice as far from the axle covers twice the distance per turn, so it moves twice as fast.\n\nPitfall: $v = r\\omega$ only works when [[angular-speed]] is in **radians** per unit time. If you are given rpm, convert first.\n\nThis is why the tip of a long sword swing or a helicopter blade moves so much faster than the hilt or hub, and why orbiting objects in a game with the same $\\omega$ but larger radius need bigger collision checks per frame.",
    tex: 'v = r\\omega',
    see: ['angular-speed', 'arc-length', 'radian'],
  },

  // ------------------------------------------------------- Right triangles
  {
    id: 'hypotenuse',
    term: 'Hypotenuse',
    course: 'trig',
    category: 'Right Triangles',
    short: "The side of a right triangle opposite the right angle. It is always the longest side.",
    long: "In a right triangle the two shorter sides (the legs) meet at the right angle, and the hypotenuse connects their far ends. By the [[pythagorean-theorem]] $c^2 = a^2 + b^2$, so $c$ is longer than either leg.\n\nThe hypotenuse appears in the denominator of [[sine]] and [[cosine]], which is why $|\\sin\\theta| \\le 1$ and $|\\cos\\theta| \\le 1$. On the [[unit-circle]], the hypotenuse is the radius of length 1.\n\nIn code, the length of a 2D vector $(x, y)$ is the hypotenuse of the triangle with legs $|x|$ and $|y|$; `std::hypot(x, y)` computes it without overflow.",
    tex: 'c = \\sqrt{a^2 + b^2}',
    see: ['pythagorean-theorem', 'opposite-side', 'adjacent-side', 'soh-cah-toa'],
  },
  {
    id: 'opposite-side',
    term: 'Opposite Side',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['opposite'],
    short: "In a right triangle, the leg across from the acute angle $\\theta$ you are working with — the one leg that does not touch $\\theta$.",
    long: "\"Opposite\" is always relative to a chosen angle. The same leg is opposite one acute angle and adjacent to the other, so label sides **after** you decide which angle is $\\theta$.\n\nIt appears in $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$ and $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$ (see [[soh-cah-toa]]). On the [[unit-circle]] the opposite side corresponds to the $y$-coordinate.",
    see: ['adjacent-side', 'hypotenuse', 'soh-cah-toa'],
  },
  {
    id: 'adjacent-side',
    term: 'Adjacent Side',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['adjacent'],
    short: "In a right triangle, the leg that forms the acute angle $\\theta$ together with the hypotenuse.",
    long: "Two sides touch $\\theta$: the [[hypotenuse]] and one leg. That leg is the adjacent side. Like the [[opposite-side]], it depends on which acute angle you chose.\n\nIt appears in $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$ and $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$. On the [[unit-circle]] the adjacent side corresponds to the $x$-coordinate.",
    see: ['opposite-side', 'hypotenuse', 'soh-cah-toa'],
  },
  {
    id: 'pythagorean-theorem',
    term: 'Pythagorean Theorem',
    course: 'trig',
    category: 'Right Triangles',
    short: "In a right triangle with legs $a, b$ and hypotenuse $c$: $a^2 + b^2 = c^2$. Conversely, if $a^2 + b^2 = c^2$ the triangle has a right angle opposite $c$.",
    long: "The theorem says the square on the hypotenuse has the same area as the squares on the two legs combined. It holds **only** for right triangles; for any triangle the [[law-of-cosines]] $c^2 = a^2 + b^2 - 2ab\\cos C$ is the generalization (with $C = 90^\\circ$ the extra term vanishes).\n\nApplied to the [[unit-circle]] it gives the most important trig identity, $\\sin^2\\theta + \\cos^2\\theta = 1$ (see [[pythagorean-identities]]). The [[distance-formula]] from algebra is the same theorem in coordinates.\n\nGame tip: to compare distances (e.g. \"is the enemy within range $R$?\"), compare $dx^2 + dy^2$ with $R^2$ and skip the square root.",
    tex: 'a^2 + b^2 = c^2',
    example: `// Range check without sqrt
bool inRange(Vec2 a, Vec2 b, float r) {
    float dx = b.x - a.x, dy = b.y - a.y;
    return dx * dx + dy * dy <= r * r;
}`,
    exampleLang: 'cpp',
    see: ['hypotenuse', 'pythagorean-identities', 'law-of-cosines', 'magnitude'],
  },
  {
    id: 'sine',
    term: 'Sine',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['sin'],
    short: "For an acute angle in a right triangle, $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$. For any angle, $\\sin\\theta$ is the $y$-coordinate of the point at angle $\\theta$ on the unit circle.",
    long: "The right-triangle definition works for $0 < \\theta < 90^\\circ$. The [[unit-circle]] definition extends it to every real number, so sine can be negative (in quadrants III and IV) and is [[periodic-function|periodic]] with [[period]] $2\\pi$. Its range is $[-1, 1]$ and it is an odd function: $\\sin(-\\theta) = -\\sin\\theta$.\n\nThe graph of $y = \\sin x$ is the basic [[sinusoid]] — the shape of every smooth oscillation, from springs to sound waves.\n\nIn games, `std::sin(t)` drives bobbing, pulsing and waving animations, and $(\\cos\\theta, \\sin\\theta)$ turns a heading into a direction vector. Notation trap: $\\sin^{-1} x$ means [[inverse-sine|arcsin]], not $1/\\sin x$.",
    tex: '\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{y}{r}',
    see: ['cosine', 'soh-cah-toa', 'unit-circle', 'cosecant', 'inverse-sine', 'sinusoid'],
  },
  {
    id: 'cosine',
    term: 'Cosine',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['cos'],
    short: "For an acute angle in a right triangle, $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$. For any angle, $\\cos\\theta$ is the $x$-coordinate of the point at angle $\\theta$ on the unit circle.",
    long: "Cosine is the \"co-sine\": the sine of the complementary angle, $\\cos\\theta = \\sin(90^\\circ - \\theta)$. Its graph is the sine graph shifted left by $\\frac{\\pi}{2}$. Its range is $[-1, 1]$, its [[period]] is $2\\pi$, and it is even: $\\cos(-\\theta) = \\cos\\theta$.\n\nOn the [[unit-circle]], the point at angle $\\theta$ is $(\\cos\\theta, \\sin\\theta)$, so cosine is the horizontal component of a unit direction.\n\nIt powers the [[dot-product]] ($\\mathbf u \\cdot \\mathbf v = |\\mathbf u||\\mathbf v|\\cos\\theta$) and the [[law-of-cosines]] — and in graphics, Lambert lighting brightness is the cosine of the angle between the surface normal and the light direction.",
    tex: '\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{x}{r}',
    see: ['sine', 'soh-cah-toa', 'unit-circle', 'secant-function', 'inverse-cosine', 'dot-product'],
  },
  {
    id: 'tangent-function',
    term: 'Tangent',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['tan'],
    short: "$\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\sin\\theta}{\\cos\\theta}$, defined whenever $\\cos\\theta \\ne 0$.",
    long: "Tangent is the slope of the terminal side: a line through the origin at angle $\\theta$ has slope $\\tan\\theta$. It is undefined where $\\cos\\theta = 0$, i.e. at $\\theta = \\frac{\\pi}{2} + k\\pi$, where its graph has vertical asymptotes.\n\nUnlike sine and cosine, tangent has [[period]] $\\pi$ and range all real numbers. It is odd: $\\tan(-\\theta) = -\\tan\\theta$.\n\nPitfall: because $\\tan\\theta$ only knows the ratio $y/x$, it cannot tell $(1, 1)$ from $(-1, -1)$. That is why games use [[atan2]] instead of [[inverse-tangent|arctan]] to recover an angle. (Don't confuse this function with the [[tangent-line]] of calculus.)",
    tex: '\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{y}{x}',
    see: ['sine', 'cosine', 'cotangent', 'inverse-tangent', 'atan2', 'quotient-identities'],
  },
  {
    id: 'secant-function',
    term: 'Secant',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['sec'],
    short: "The reciprocal of cosine: $\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{\\text{hyp}}{\\text{adj}}$, defined when $\\cos\\theta \\ne 0$.",
    long: "Secant has the same [[period]] ($2\\pi$) and sign pattern as cosine, but where $|\\cos\\theta|$ is small, $|\\sec\\theta|$ is large. Its range is $(-\\infty, -1] \\cup [1, \\infty)$ and it has vertical asymptotes where $\\cos\\theta = 0$.\n\nIt appears in the identity $1 + \\tan^2\\theta = \\sec^2\\theta$ and in calculus: $\\frac{d}{dx}\\tan x = \\sec^2 x$. Pitfall: $\\sec\\theta$ is $1/\\cos\\theta$, **not** $\\cos^{-1}\\theta$ (which means arccos).",
    tex: '\\sec\\theta = \\frac{1}{\\cos\\theta}',
    see: ['cosine', 'reciprocal-identities', 'pythagorean-identities'],
  },
  {
    id: 'cosecant',
    term: 'Cosecant',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['csc', 'cosec'],
    short: "The reciprocal of sine: $\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{\\text{hyp}}{\\text{opp}}$, defined when $\\sin\\theta \\ne 0$.",
    long: "Cosecant has vertical asymptotes at multiples of $\\pi$ (where sine is zero), [[period]] $2\\pi$, and range $(-\\infty, -1] \\cup [1, \\infty)$. It shares sine's signs in each [[quadrant]].\n\nIt appears in $1 + \\cot^2\\theta = \\csc^2\\theta$. Pitfall: $\\csc\\theta = 1/\\sin\\theta$, which is not the same as $\\sin^{-1}\\theta$ (arcsin).",
    tex: '\\csc\\theta = \\frac{1}{\\sin\\theta}',
    see: ['sine', 'reciprocal-identities', 'pythagorean-identities'],
  },
  {
    id: 'cotangent',
    term: 'Cotangent',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['cot'],
    short: "$\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\text{adj}}{\\text{opp}}$, the reciprocal of tangent where both are defined; defined whenever $\\sin\\theta \\ne 0$.",
    long: "Cotangent has [[period]] $\\pi$, vertical asymptotes at $\\theta = k\\pi$, and zeros where $\\cos\\theta = 0$. Note that $\\cot\\frac{\\pi}{2} = 0$ even though $\\tan\\frac{\\pi}{2}$ is undefined, so writing $\\cot\\theta = 1/\\tan\\theta$ is only safe where $\\tan\\theta$ is defined and nonzero; $\\cos\\theta/\\sin\\theta$ is the better definition.\n\nIt appears in the identity $1 + \\cot^2\\theta = \\csc^2\\theta$.",
    tex: '\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}',
    see: ['tangent-function', 'reciprocal-identities', 'quotient-identities'],
  },
  {
    id: 'soh-cah-toa',
    term: 'SOH CAH TOA',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['SOHCAHTOA'],
    short: "A mnemonic for the right-triangle ratios: **S**ine = **O**pposite/**H**ypotenuse, **C**osine = **A**djacent/**H**ypotenuse, **T**angent = **O**pposite/**A**djacent.",
    long: "These ratios depend only on the angle, not on the triangle's size, because all right triangles with the same acute angle are similar. That is the fact that makes trigonometry work.\n\nUse it to find a missing side (set up the ratio that involves the side you know and the side you want) or a missing angle (use an inverse function such as $\\theta = \\tan^{-1}(\\text{opp}/\\text{adj})$).\n\nPitfall: SOH CAH TOA only applies to **right** triangles and acute angles. For other triangles use the [[law-of-sines]] or [[law-of-cosines]]; for angles beyond $90^\\circ$ use the [[unit-circle]].",
    tex: '\\sin\\theta = \\frac{O}{H}, \\quad \\cos\\theta = \\frac{A}{H}, \\quad \\tan\\theta = \\frac{O}{A}',
    see: ['sine', 'cosine', 'tangent-function', 'opposite-side', 'adjacent-side', 'hypotenuse'],
  },
  {
    id: 'special-right-triangles',
    term: 'Special Right Triangles',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['30-60-90 triangle', '45-45-90 triangle'],
    short: "The $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle (sides $1 : 1 : \\sqrt2$) and the $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle (sides $1 : \\sqrt3 : 2$), which give exact trig values.",
    long: "The 45-45-90 triangle is half a square: legs 1, hypotenuse $\\sqrt2$ by the [[pythagorean-theorem]]. So $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt2} = \\frac{\\sqrt2}{2}$.\n\nThe 30-60-90 triangle is half an equilateral triangle of side 2: short leg 1 (opposite $30^\\circ$), long leg $\\sqrt3$ (opposite $60^\\circ$), hypotenuse 2. So $\\sin 30^\\circ = \\frac12$, $\\cos 30^\\circ = \\frac{\\sqrt3}{2}$, $\\tan 30^\\circ = \\frac{1}{\\sqrt3}$.\n\nCombined with [[reference-angle|reference angles]] these two triangles produce every exact value on the [[unit-circle]]. Remember: the shortest side is opposite the smallest angle — mixing up $\\frac12$ and $\\frac{\\sqrt3}{2}$ is the most common error.",
    tex: '45^\\circ\\!: \\; 1 : 1 : \\sqrt2 \\qquad 30^\\circ\\text{-}60^\\circ\\!: \\; 1 : \\sqrt3 : 2',
    see: ['unit-circle', 'reference-angle', 'pythagorean-theorem'],
  },
  {
    id: 'angle-of-elevation',
    term: 'Angle of Elevation',
    course: 'trig',
    category: 'Right Triangles',
    short: "The angle between the horizontal and the line of sight **up** to an object above the observer.",
    long: "Picture standing on level ground looking up at the top of a tree: the angle your gaze is raised above horizontal is the angle of elevation. With the horizontal distance $d$ and height difference $h$, $\\tan\\theta = h/d$.\n\nThe angle of elevation from A to B equals the [[angle-of-depression]] from B to A (alternate interior angles with parallel horizontals). Always measure from the **horizontal**, never from the vertical.\n\nIn games, a turret or camera pitch is an angle of elevation: `pitch = atan2(dy, horizontalDist)`.",
    tex: '\\tan\\theta = \\frac{\\text{height}}{\\text{horizontal distance}}',
    see: ['angle-of-depression', 'tangent-function', 'soh-cah-toa'],
  },
  {
    id: 'angle-of-depression',
    term: 'Angle of Depression',
    course: 'trig',
    category: 'Right Triangles',
    short: "The angle between the horizontal and the line of sight **down** to an object below the observer.",
    long: "From a cliff looking down at a boat, the angle of depression is measured downward from the horizontal through your eye.\n\nThe classic trap is placing this angle at the bottom of the triangle against the vertical cliff. It is measured from the horizontal, and it equals the [[angle-of-elevation]] from the boat up to you, which is usually the angle you put in the triangle.",
    tex: '\\text{angle of depression from } A \\text{ to } B = \\text{angle of elevation from } B \\text{ to } A',
    see: ['angle-of-elevation', 'tangent-function'],
  },

  // ----------------------------------------------------------- Unit circle
  {
    id: 'unit-circle',
    term: 'Unit Circle',
    course: 'trig',
    category: 'Unit Circle',
    short: "The circle $x^2 + y^2 = 1$ of radius 1 centred at the origin. The point at angle $\\theta$ (standard position) is $(\\cos\\theta, \\sin\\theta)$.",
    long: "The unit circle turns trigonometry from \"ratios in a triangle\" into functions defined for **every** real angle: $\\cos\\theta$ is the $x$-coordinate and $\\sin\\theta$ the $y$-coordinate of the point where the [[terminal-side]] meets the circle. Since radius = arc length per radian, the angle $\\theta$ in [[radian|radians]] is also the distance walked along the circle.\n\nEverything follows from the picture: signs by [[quadrant]], $\\sin^2\\theta + \\cos^2\\theta = 1$ (the circle's equation), periodicity (walking $2\\pi$ brings you back), and $\\tan\\theta = y/x$.\n\nIn games, $(\\cos\\theta, \\sin\\theta)$ is the unit direction vector for heading $\\theta$ — multiply by speed to get velocity, or by a radius to place an object on a circle.",
    tex: '(x, y) = (\\cos\\theta, \\sin\\theta), \\qquad x^2 + y^2 = 1',
    example: `#include <cmath>

// Heading angle (radians) -> velocity vector
Vec2 velocity(float heading, float speed) {
    return { speed * std::cos(heading), speed * std::sin(heading) };
}`,
    exampleLang: 'cpp',
    see: ['sine', 'cosine', 'reference-angle', 'quadrant', 'pythagorean-identities'],
  },
  {
    id: 'reference-angle',
    term: 'Reference Angle',
    course: 'trig',
    category: 'Unit Circle',
    short: "The acute angle $\\theta'$ between the terminal side of $\\theta$ and the $x$-axis. Trig values of $\\theta$ equal those of $\\theta'$ up to sign.",
    long: "The reference angle reduces any angle to the first quadrant. For $\\theta$ in $[0, 2\\pi)$: in QI $\\theta' = \\theta$; in QII $\\theta' = \\pi - \\theta$; in QIII $\\theta' = \\theta - \\pi$; in QIV $\\theta' = 2\\pi - \\theta$.\n\nRecipe: find the [[quadrant]], find $\\theta'$, look up the value of $\\theta'$ (often from the [[special-right-triangles]]), then attach the sign for that quadrant. For example $\\sin 210^\\circ$: QIII, $\\theta' = 30^\\circ$, sine negative there, so $\\sin 210^\\circ = -\\frac12$.\n\nPitfall: the reference angle is always measured to the $x$-axis, never the $y$-axis. First reduce angles outside $[0, 2\\pi)$ to a [[coterminal-angles|coterminal]] one.",
    tex: '\\theta\' = \\begin{cases} \\theta & \\text{QI} \\\\ \\pi - \\theta & \\text{QII} \\\\ \\theta - \\pi & \\text{QIII} \\\\ 2\\pi - \\theta & \\text{QIV} \\end{cases}',
    see: ['quadrant', 'unit-circle', 'special-right-triangles', 'coterminal-angles'],
  },
  {
    id: 'quadrant',
    term: 'Quadrant',
    course: 'trig',
    category: 'Unit Circle',
    aliases: ['ASTC', 'All Students Take Calculus'],
    short: "One of the four regions the axes divide the plane into, numbered I–IV counterclockwise from the upper right. The quadrant of the terminal side fixes the signs of the trig functions.",
    long: "Since $\\cos\\theta = x$ and $\\sin\\theta = y$ on the [[unit-circle]], the signs follow from the coordinates. Mnemonic **ASTC** (\"All Students Take Calculus\"): in QI **A**ll are positive, in QII only **S**ine (and csc), in QIII only **T**angent (and cot), in QIV only **C**osine (and sec).\n\nAngles whose terminal side lies on an axis ($0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$) are quadrantal and belong to no quadrant.\n\nThe quadrant is exactly the information [[inverse-tangent|arctan]] loses and [[atan2]] keeps.",
    tex: '\\text{I: all} + \\quad \\text{II: } \\sin + \\quad \\text{III: } \\tan + \\quad \\text{IV: } \\cos +',
    see: ['reference-angle', 'unit-circle', 'atan2'],
  },

  // ---------------------------------------------------------------- Graphs
  {
    id: 'periodic-function',
    term: 'Periodic Function',
    course: 'trig',
    category: 'Graphs',
    short: "A function $f$ is periodic if there is a positive number $p$ with $f(x + p) = f(x)$ for every $x$ in its domain. The smallest such $p$ is the period.",
    long: "Periodic functions repeat forever: the graph on one period, copied side by side, is the whole graph. Sine and cosine are periodic because adding $2\\pi$ to an angle brings you back to the same point on the [[unit-circle]].\n\nPeriodicity means equations like $\\sin x = \\frac12$ have infinitely many solutions — see [[general-solution]] — and that inverse trig functions need restricted domains.\n\nAnything cyclic in a game (day/night, idle animations, patrol routes, flicker) is modelled with periodic functions.",
    tex: 'f(x + p) = f(x) \\text{ for all } x',
    see: ['period', 'sinusoid', 'coterminal-angles', 'general-solution'],
  },
  {
    id: 'period',
    term: 'Period',
    course: 'trig',
    category: 'Graphs',
    short: "The length of one complete cycle of a periodic function — the smallest $p > 0$ with $f(x + p) = f(x)$. For $y = A\\sin(Bx)$ or $A\\cos(Bx)$ it is $\\frac{2\\pi}{|B|}$.",
    long: "$\\sin$, $\\cos$, $\\sec$, $\\csc$ have period $2\\pi$; $\\tan$ and $\\cot$ have period $\\pi$. Multiplying the input by $B$ speeds up the cycle, so $\\sin(Bx)$ repeats after $\\frac{2\\pi}{|B|}$ and $\\tan(Bx)$ after $\\frac{\\pi}{|B|}$.\n\nThe period is the reciprocal of the [[frequency]]. Pitfall: a larger $B$ means a **shorter** period, and the period depends only on $B$, not on [[amplitude]], [[phase-shift]] or [[midline]].\n\nGame example: to make a light pulse every 2 seconds, use $\\sin\\left(\\frac{2\\pi}{2} t\\right) = \\sin(\\pi t)$.",
    tex: 'P = \\frac{2\\pi}{|B|} \\;(\\sin, \\cos), \\qquad P = \\frac{\\pi}{|B|} \\;(\\tan, \\cot)',
    see: ['periodic-function', 'frequency', 'sinusoid', 'amplitude'],
  },
  {
    id: 'amplitude',
    term: 'Amplitude',
    course: 'trig',
    category: 'Graphs',
    short: "For a sinusoid $y = A\\sin(B(x - C)) + D$, the amplitude is $|A|$: the distance from the midline to a maximum (half the max-to-min height).",
    long: "Amplitude measures how strong an oscillation is. Since $\\sin$ ranges over $[-1, 1]$, $A\\sin(\\ldots)$ ranges over $[-|A|, |A|]$, and adding $D$ moves that band to $[D - |A|, D + |A|]$.\n\nFrom a graph: amplitude $= \\frac{\\max - \\min}{2}$. A negative $A$ is a reflection across the [[midline]], not a negative amplitude.\n\nTangent and cotangent have no amplitude (they are unbounded). In audio, amplitude is loudness; in a game's camera shake, it's how far the camera moves.",
    tex: '|A| = \\frac{y_{\\max} - y_{\\min}}{2}',
    see: ['sinusoid', 'midline', 'period', 'phase-shift'],
  },
  {
    id: 'phase-shift',
    term: 'Phase Shift',
    course: 'trig',
    category: 'Graphs',
    aliases: ['horizontal shift'],
    short: "The horizontal shift $C$ of a sinusoid written as $y = A\\sin(B(x - C)) + D$. Positive $C$ shifts right.",
    long: "Replacing $x$ with $x - C$ shifts any graph right by $C$ (a [[translation]]). For sinusoids this shift is called the phase shift: the cycle that started at $x = 0$ now starts at $x = C$.\n\nPitfall: in the form $y = \\sin(Bx - c)$ the shift is **not** $c$. Factor first: $\\sin(Bx - c) = \\sin\\left(B\\left(x - \\frac{c}{B}\\right)\\right)$, so the shift is $\\frac{c}{B}$. For example $\\sin(2x - \\pi)$ shifts right by $\\frac{\\pi}{2}$, not $\\pi$.\n\nIn games, giving each blade of grass or each enemy a different phase makes identical animations look natural instead of perfectly synchronized.",
    tex: 'y = A\\sin(Bx - c) + D = A\\sin\\!\\left(B\\left(x - \\tfrac{c}{B}\\right)\\right) + D',
    see: ['sinusoid', 'period', 'amplitude', 'midline'],
  },
  {
    id: 'midline',
    term: 'Midline',
    course: 'trig',
    category: 'Graphs',
    short: "The horizontal line $y = D$ about which a sinusoid $y = A\\sin(B(x - C)) + D$ oscillates, halfway between its maximum and minimum.",
    long: "The midline is the \"resting level\" of the oscillation: $D = \\frac{\\max + \\min}{2}$. Adding $D$ shifts the whole graph vertically without changing its shape.\n\nWhen sketching, draw the midline first, then mark the peaks and troughs at a distance of the [[amplitude]] above and below it. A bobbing pickup in a game sits on a midline at its base height: `y = baseY + A * sin(omega * t)`.",
    tex: 'D = \\frac{y_{\\max} + y_{\\min}}{2}',
    see: ['amplitude', 'sinusoid', 'phase-shift'],
  },
  {
    id: 'frequency',
    term: 'Frequency',
    course: 'trig',
    category: 'Graphs',
    short: "The number of cycles a periodic function completes per unit of input: $f = \\frac{1}{P} = \\frac{|B|}{2\\pi}$ for $y = A\\sin(Bx)$.",
    long: "Frequency is the reciprocal of the [[period]]: a period of $0.25$ s means $4$ cycles per second, or 4 Hz. The coefficient $B$ is called the angular frequency, $B = 2\\pi f$, measured in radians per unit time (compare [[angular-speed]]).\n\nPitfall: some books use \"frequency\" for $B$ itself. Check whether you need cycles per unit ($f$) or radians per unit ($B = 2\\pi f$).\n\nIn code, `sin(2 * pi * f * t)` oscillates $f$ times per second — the basis of audio synthesis and of rhythmic game effects.",
    tex: 'f = \\frac{1}{P} = \\frac{|B|}{2\\pi}, \\qquad B = 2\\pi f',
    see: ['period', 'angular-speed', 'sinusoid'],
  },
  {
    id: 'sinusoid',
    term: 'Sinusoid',
    course: 'trig',
    category: 'Graphs',
    aliases: ['sinusoidal function', 'sine wave'],
    short: "Any function of the form $y = A\\sin(B(x - C)) + D$ (or the cosine version): a sine wave stretched, shifted and moved.",
    long: "The four parameters each control one feature: $|A|$ the [[amplitude]], $\\frac{2\\pi}{|B|}$ the [[period]], $C$ the [[phase-shift]], and $D$ the [[midline]]. A cosine curve is itself a sinusoid, since $\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$.\n\nSinusoids model anything that oscillates smoothly: tides, daylight hours, springs, AC current, sound. In calculus they are the solutions of $y'' = -k^2 y$, the equation of simple harmonic motion.\n\nGame use: smooth bobbing, breathing, swaying and pulsing effects are almost always a sinusoid of time.",
    tex: 'y = A\\sin\\big(B(x - C)\\big) + D',
    example: `#include <cmath>
#include <numbers>

// Floating pickup: bobs 0.25 units around baseY, once per 2 seconds
float bobY(float baseY, float t) {
    constexpr float A = 0.25f;
    constexpr float period = 2.0f;
    constexpr float B = 2.0f * std::numbers::pi_v<float> / period;
    return baseY + A * std::sin(B * t);
}`,
    exampleLang: 'cpp',
    see: ['amplitude', 'period', 'phase-shift', 'midline', 'frequency', 'sine'],
  },

  // ----------------------------------------------------- Inverse functions
  {
    id: 'inverse-sine',
    term: 'Inverse Sine (arcsin)',
    course: 'trig',
    category: 'Inverse Functions',
    aliases: ['arcsin', 'asin', 'sin⁻¹'],
    short: "$\\arcsin x$ (also $\\sin^{-1} x$) is the unique angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ whose sine is $x$, defined for $-1 \\le x \\le 1$.",
    long: "Sine is not [[one-to-one-function|one-to-one]], so to build an [[inverse-function]] we restrict it to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, where it is increasing and hits every value in $[-1, 1]$ exactly once.\n\nConsequently $\\sin(\\arcsin x) = x$ for all $x \\in [-1, 1]$, but $\\arcsin(\\sin\\theta) = \\theta$ **only** when $\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. E.g. $\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) = \\frac{\\pi}{6}$.\n\nWhen solving $\\sin x = k$, arcsin gives just one solution; the other in each cycle is $\\pi - \\arcsin k$ (see [[general-solution]]). And $\\sin^{-1} x \\ne \\frac{1}{\\sin x}$ — that is [[cosecant]].",
    tex: 'y = \\arcsin x \\iff \\sin y = x \\text{ and } -\\tfrac{\\pi}{2} \\le y \\le \\tfrac{\\pi}{2}',
    see: ['sine', 'inverse-cosine', 'inverse-tangent', 'general-solution'],
  },
  {
    id: 'inverse-cosine',
    term: 'Inverse Cosine (arccos)',
    course: 'trig',
    category: 'Inverse Functions',
    aliases: ['arccos', 'acos', 'cos⁻¹'],
    short: "$\\arccos x$ (also $\\cos^{-1} x$) is the unique angle in $[0, \\pi]$ whose cosine is $x$, defined for $-1 \\le x \\le 1$.",
    long: "Cosine is restricted to $[0, \\pi]$, where it decreases from $1$ to $-1$, so each value is hit once. Therefore $\\arccos(\\cos\\theta) = \\theta$ only for $\\theta \\in [0, \\pi]$.\n\nThe most common use in games is finding the angle between two vectors from the [[dot-product]]: $\\theta = \\arccos\\left(\\frac{\\mathbf u\\cdot\\mathbf v}{|\\mathbf u||\\mathbf v|}\\right)$, which always gives an angle in $[0, \\pi]$ (unsigned).\n\nPitfall: floating-point rounding can make that ratio $1.0000001$, and `std::acos` then returns NaN. Clamp the argument to $[-1, 1]$ first.",
    tex: 'y = \\arccos x \\iff \\cos y = x \\text{ and } 0 \\le y \\le \\pi',
    example: `#include <algorithm>
#include <cmath>

// Unsigned angle between two non-zero vectors, in [0, pi]
float angleBetween(Vec2 u, Vec2 v) {
    float c = dot(u, v) / (length(u) * length(v));
    return std::acos(std::clamp(c, -1.0f, 1.0f)); // clamp avoids NaN
}`,
    exampleLang: 'cpp',
    see: ['cosine', 'inverse-sine', 'dot-product', 'atan2'],
  },
  {
    id: 'inverse-tangent',
    term: 'Inverse Tangent (arctan)',
    course: 'trig',
    category: 'Inverse Functions',
    aliases: ['arctan', 'atan', 'tan⁻¹'],
    short: "$\\arctan x$ (also $\\tan^{-1} x$) is the unique angle in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ whose tangent is $x$, defined for all real $x$.",
    long: "Tangent restricted to $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ is increasing and takes every real value once, so arctan is defined everywhere. Its graph has horizontal asymptotes $y = \\pm\\frac{\\pi}{2}$.\n\nWhen solving $\\tan x = k$ the solutions are $x = \\arctan k + n\\pi$, since tangent has period $\\pi$.\n\nPitfall for programmers: $\\arctan(y/x)$ only returns angles in quadrants I and IV, so the direction $(-1, -1)$ comes out as $\\frac{\\pi}{4}$ instead of $-\\frac{3\\pi}{4}$, and $x = 0$ divides by zero. Use [[atan2]] to get a direction's angle.",
    tex: 'y = \\arctan x \\iff \\tan y = x \\text{ and } -\\tfrac{\\pi}{2} < y < \\tfrac{\\pi}{2}',
    see: ['tangent-function', 'atan2', 'inverse-sine', 'direction-angle'],
  },
  {
    id: 'atan2',
    term: 'atan2',
    course: 'trig',
    category: 'Inverse Functions',
    aliases: ['two-argument arctangent', 'std::atan2'],
    short: "`atan2(y, x)` returns the angle in $(-\\pi, \\pi]$ of the point $(x, y)$ measured from the positive $x$-axis — the quadrant-correct version of $\\arctan(y/x)$.",
    long: "Because it receives $y$ and $x$ separately, atan2 knows their signs and therefore the [[quadrant]]. It handles $x = 0$ without dividing by zero and returns, for example, $\\frac{\\pi}{2}$ for $(0, 1)$ and $-\\frac{3\\pi}{4}$ for $(-1, -1)$.\n\nFor $x > 0$ it equals $\\arctan(y/x)$; for $x < 0$ it adds or subtracts $\\pi$ depending on the sign of $y$. Note the argument order: **y first**. The result is in $(-\\pi, \\pi]$; add $2\\pi$ to negative results if you want $[0, 2\\pi)$.\n\nIt is everywhere in game code: aiming at a target, rotating a sprite to face its velocity, converting to [[polar-coordinates]], and finding the signed angle between two vectors: `atan2(cross(u, v), dot(u, v))`.",
    tex: '\\operatorname{atan2}(y, x) = \\theta \\in (-\\pi, \\pi] \\text{ with } (x, y) = r(\\cos\\theta, \\sin\\theta),\\; r > 0',
    example: `#include <cmath>

// Rotate a turret to face a target (radians, 0 = +x axis)
float aimAngle(Vec2 turret, Vec2 target) {
    return std::atan2(target.y - turret.y,   // y first!
                      target.x - turret.x);
}`,
    exampleLang: 'cpp',
    see: ['inverse-tangent', 'quadrant', 'direction-angle', 'polar-coordinates'],
  },

  // ------------------------------------------------------------- Identities
  {
    id: 'trig-identity',
    term: 'Trigonometric Identity',
    course: 'trig',
    category: 'Identities',
    aliases: ['trig identity', 'identity'],
    short: "An equation involving trig functions that is true for **every** value of the variable for which both sides are defined, such as $\\sin^2\\theta + \\cos^2\\theta = 1$.",
    long: "An identity is different from a conditional equation like $\\sin x = \\frac12$, which is true only for certain $x$. Identities are rewriting tools: they let you replace an expression with an equivalent one that is easier to simplify, integrate or compute.\n\nTo **prove** an identity, transform one side into the other (usually the more complicated side) using known identities and algebra. Do not \"cross-multiply both sides\" or treat it as an equation to solve — that assumes what you are proving. To **disprove** one, a single counterexample suffices.\n\nThe core families: [[reciprocal-identities]], [[quotient-identities]], [[pythagorean-identities]], [[even-odd-identities]], [[sum-and-difference-formulas]], [[double-angle-formulas]], [[half-angle-formulas]].",
    tex: '\\sin^2\\theta + \\cos^2\\theta = 1 \\quad \\text{for all } \\theta',
    see: ['pythagorean-identities', 'reciprocal-identities', 'quotient-identities', 'sum-and-difference-formulas'],
  },
  {
    id: 'pythagorean-identities',
    term: 'Pythagorean Identities',
    course: 'trig',
    category: 'Identities',
    short: "$\\sin^2\\theta + \\cos^2\\theta = 1$, together with $1 + \\tan^2\\theta = \\sec^2\\theta$ and $1 + \\cot^2\\theta = \\csc^2\\theta$ obtained by dividing it by $\\cos^2\\theta$ or $\\sin^2\\theta$.",
    long: "The first identity is the [[pythagorean-theorem]] on the [[unit-circle]]: the point $(\\cos\\theta, \\sin\\theta)$ lies on $x^2 + y^2 = 1$. Dividing by $\\cos^2\\theta$ gives the tangent-secant version; dividing by $\\sin^2\\theta$ gives the cotangent-cosecant version.\n\nUse them to find one trig value from another: if $\\sin\\theta = \\frac35$ then $\\cos\\theta = \\pm\\frac45$, with the sign chosen by the [[quadrant]]. Forgetting the $\\pm$ is the classic mistake.\n\nThey are essential in calculus for integrals like $\\int \\sin^2 x\\,dx$ and for trigonometric substitution. Note $\\sin^2\\theta$ means $(\\sin\\theta)^2$.",
    tex: '\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta, \\quad 1 + \\cot^2\\theta = \\csc^2\\theta',
    see: ['trig-identity', 'pythagorean-theorem', 'unit-circle', 'double-angle-formulas'],
  },
  {
    id: 'reciprocal-identities',
    term: 'Reciprocal Identities',
    course: 'trig',
    category: 'Identities',
    short: "$\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$, valid wherever the denominators are nonzero.",
    long: "These identities define the three \"co\"-functions in terms of the basic three. A useful strategy for verifying identities is to rewrite everything in terms of sine and cosine using these and the [[quotient-identities]], then simplify the resulting fractions.\n\nPairing tip: each function pairs with one that begins differently — **s**ine with **c**osecant, **c**osine with **s**ecant. Remember also that $\\sin^{-1}$ means arcsin, not the reciprocal.",
    tex: '\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}',
    see: ['cosecant', 'secant-function', 'cotangent', 'quotient-identities'],
  },
  {
    id: 'quotient-identities',
    term: 'Quotient Identities',
    course: 'trig',
    category: 'Identities',
    short: "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ and $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$, wherever the denominators are nonzero.",
    long: "On the [[unit-circle]], $\\tan\\theta = \\frac{y}{x}$, which is exactly $\\frac{\\sin\\theta}{\\cos\\theta}$. Geometrically, tangent is the slope of the terminal side.\n\nTogether with the [[reciprocal-identities]], these let you express any trig expression using only sine and cosine — the standard first move when simplifying.",
    tex: '\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}',
    see: ['tangent-function', 'cotangent', 'reciprocal-identities'],
  },
  {
    id: 'even-odd-identities',
    term: 'Even-Odd Identities',
    course: 'trig',
    category: 'Identities',
    aliases: ['negative angle identities'],
    short: "Cosine and secant are even; sine, tangent, cosecant and cotangent are odd: $\\cos(-\\theta) = \\cos\\theta$, $\\sin(-\\theta) = -\\sin\\theta$, $\\tan(-\\theta) = -\\tan\\theta$.",
    long: "Reflecting the angle $\\theta$ across the $x$-axis gives $-\\theta$: the point $(x, y)$ on the [[unit-circle]] becomes $(x, -y)$. So the $x$-coordinate (cosine) is unchanged and the $y$-coordinate (sine) flips sign. Tangent $= y/x$ flips sign too.\n\nThis matches the graphs: cosine is symmetric about the $y$-axis ([[even-function]]), sine about the origin ([[odd-function]]).\n\nUse them to simplify expressions like $\\sin(-x)\\cos(-x) = -\\sin x\\cos x$ and to derive the difference formulas from the sum formulas.",
    tex: '\\cos(-\\theta) = \\cos\\theta, \\quad \\sin(-\\theta) = -\\sin\\theta, \\quad \\tan(-\\theta) = -\\tan\\theta',
    see: ['sine', 'cosine', 'even-function', 'odd-function', 'sum-and-difference-formulas'],
  },
  {
    id: 'sum-and-difference-formulas',
    term: 'Sum and Difference Formulas',
    course: 'trig',
    category: 'Identities',
    aliases: ['angle addition formulas', 'compound angle formulas'],
    short: "Formulas for the trig functions of $\\alpha \\pm \\beta$: $\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$ and $\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$.",
    long: "Trig functions are not linear: $\\sin(\\alpha + \\beta) \\ne \\sin\\alpha + \\sin\\beta$ (try $\\alpha = \\beta = \\frac{\\pi}{2}$). These formulas give the correct expansion. Note the sign flip in the cosine formula. For tangent: $\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$.\n\nThey produce exact values such as $\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\frac{\\sqrt6 - \\sqrt2}{4}$, and the [[double-angle-formulas]] are the special case $\\alpha = \\beta$.\n\nWhy it matters in games: rotating the point $(r\\cos\\alpha, r\\sin\\alpha)$ by $\\beta$ gives $(r\\cos(\\alpha + \\beta), r\\sin(\\alpha + \\beta))$; expanding with these formulas yields the 2D rotation formula $x\' = x\\cos\\beta - y\\sin\\beta$, $y\' = x\\sin\\beta + y\\cos\\beta$ — the rotation matrix.",
    tex: '\\begin{aligned} \\sin(\\alpha \\pm \\beta) &= \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta \\\\ \\cos(\\alpha \\pm \\beta) &= \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta \\\\ \\tan(\\alpha \\pm \\beta) &= \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta} \\end{aligned}',
    example: `#include <cmath>

// Rotate point p about the origin by angle b (radians, counterclockwise).
// Derived from cos(a+b) and sin(a+b).
Vec2 rotate(Vec2 p, float b) {
    float c = std::cos(b), s = std::sin(b);
    return { p.x * c - p.y * s,
             p.x * s + p.y * c };
}`,
    exampleLang: 'cpp',
    see: ['double-angle-formulas', 'half-angle-formulas', 'trig-identity', 'even-odd-identities'],
  },
  {
    id: 'double-angle-formulas',
    term: 'Double-Angle Formulas',
    course: 'trig',
    category: 'Identities',
    short: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ and $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$.",
    long: "Set $\\alpha = \\beta = \\theta$ in the [[sum-and-difference-formulas]] to get these. The three forms of $\\cos 2\\theta$ come from substituting the [[pythagorean-identities]]; choose the one that matches the rest of your problem. Also $\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$.\n\nPitfall: $\\sin 2\\theta \\ne 2\\sin\\theta$. Doubling the angle does not double the sine.\n\nSolving $\\cos 2\\theta = 2\\cos^2\\theta - 1$ for $\\cos^2\\theta$ gives the power-reducing formulas $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$ and $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$, which you will use constantly to integrate $\\sin^2 x$ and $\\cos^2 x$ in calculus.",
    tex: '\\begin{aligned} \\sin 2\\theta &= 2\\sin\\theta\\cos\\theta \\\\ \\cos 2\\theta &= \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta \\\\ \\tan 2\\theta &= \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} \\end{aligned}',
    see: ['sum-and-difference-formulas', 'half-angle-formulas', 'pythagorean-identities'],
  },
  {
    id: 'half-angle-formulas',
    term: 'Half-Angle Formulas',
    course: 'trig',
    category: 'Identities',
    short: "$\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$ and $\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$, with the sign set by the quadrant of $\\frac{\\theta}{2}$.",
    long: "Replace $\\theta$ by $\\frac{\\theta}{2}$ in the power-reducing forms of the [[double-angle-formulas]] and take square roots. The $\\pm$ is not a choice of two answers: pick the one sign that matches the [[quadrant]] where $\\frac{\\theta}{2}$ lies.\n\nTangent has sign-free versions: $\\tan\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}$.\n\nExample: $\\cos 15^\\circ = \\sqrt{\\frac{1 + \\cos 30^\\circ}{2}} = \\frac{\\sqrt{2 + \\sqrt3}}{2}$ (positive, since $15^\\circ$ is in QI). The tangent half-angle substitution reappears in calculus as a way to integrate rational functions of sine and cosine.",
    tex: '\\sin\\tfrac{\\theta}{2} = \\pm\\sqrt{\\tfrac{1 - \\cos\\theta}{2}}, \\quad \\cos\\tfrac{\\theta}{2} = \\pm\\sqrt{\\tfrac{1 + \\cos\\theta}{2}}, \\quad \\tan\\tfrac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta}',
    see: ['double-angle-formulas', 'sum-and-difference-formulas', 'quadrant'],
  },

  // -------------------------------------------------------------- Equations
  {
    id: 'general-solution',
    term: 'General Solution',
    course: 'trig',
    category: 'Equations',
    short: "The complete set of solutions of a trig equation, written with an integer parameter $n$ to capture every period, e.g. $\\sin x = \\frac12 \\iff x = \\frac{\\pi}{6} + 2\\pi n$ or $x = \\frac{5\\pi}{6} + 2\\pi n$.",
    long: "Because trig functions are [[periodic-function|periodic]], an equation that has one solution has infinitely many. Find all solutions in one period, then add multiples of the period.\n\nTemplates (for $|k| \\le 1$ where needed, $n \\in \\mathbb{Z}$): $\\sin x = k \\Rightarrow x = \\arcsin k + 2\\pi n$ or $x = \\pi - \\arcsin k + 2\\pi n$; $\\cos x = k \\Rightarrow x = \\pm\\arccos k + 2\\pi n$; $\\tan x = k \\Rightarrow x = \\arctan k + \\pi n$.\n\nPitfalls: forgetting the second sine/cosine solution in each cycle; with $\\sin(2x) = k$, solve for $2x$ first and only then divide by 2 (which halves the period to $\\pi$); and dividing both sides by $\\sin x$, which loses the solutions where $\\sin x = 0$ — factor instead.",
    tex: '\\sin x = k \\iff x = \\arcsin k + 2\\pi n \\;\\text{ or }\\; x = \\pi - \\arcsin k + 2\\pi n',
    see: ['periodic-function', 'inverse-sine', 'inverse-cosine', 'inverse-tangent'],
  },

  // -------------------------------------------------------------- Triangles
  {
    id: 'oblique-triangle',
    term: 'Oblique Triangle',
    course: 'trig',
    category: 'Triangles',
    short: "A triangle with no right angle — either all three angles acute, or one angle obtuse.",
    long: "SOH CAH TOA does not apply directly to oblique triangles. Instead use the [[law-of-sines]] (when you know an angle and its opposite side) and the [[law-of-cosines]] (for SAS and SSS). The standard labelling puts side $a$ opposite angle $A$, $b$ opposite $B$, $c$ opposite $C$, and $A + B + C = 180^\\circ$.\n\nWhich law to use depends on what is given: AAS/ASA → law of sines; SAS/SSS → law of cosines; SSA → law of sines, but beware the [[ambiguous-case]].",
    tex: 'A + B + C = 180^\\circ',
    see: ['law-of-sines', 'law-of-cosines', 'ambiguous-case', 'herons-formula'],
  },
  {
    id: 'law-of-sines',
    term: 'Law of Sines',
    course: 'trig',
    category: 'Triangles',
    aliases: ['sine rule'],
    short: "In any triangle, $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$: each side is proportional to the sine of its opposite angle.",
    long: "Drop an altitude $h$ from $C$: then $h = b\\sin A = a\\sin B$, which rearranges to $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. The common ratio equals $2R$, the diameter of the circumscribed circle.\n\nUse it when you know a side and its opposite angle plus one more piece (AAS, ASA, SSA). Larger sides face larger angles.\n\nPitfall: solving for an angle via $\\sin B = \\ldots$ gives two candidates, $B$ and $180^\\circ - B$, because sine is positive in QI and QII. Your calculator only shows the acute one — check the other (see [[ambiguous-case]]).",
    tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
    see: ['oblique-triangle', 'ambiguous-case', 'law-of-cosines'],
  },
  {
    id: 'ambiguous-case',
    term: 'Ambiguous Case (SSA)',
    course: 'trig',
    category: 'Triangles',
    aliases: ['SSA'],
    short: "When two sides and a non-included angle (SSA) are given, there may be zero, one, or two triangles that fit the data.",
    long: "Given angle $A$, its opposite side $a$, and another side $b$: side $a$ swings from the end of $b$ and may miss the base, touch it once, or cross it twice. Let $h = b\\sin A$ be the height.\n\nIf $A$ is acute: $a < h$ → no triangle; $a = h$ → one right triangle; $h < a < b$ → **two** triangles; $a \\ge b$ → one triangle. If $A$ is right or obtuse: $a \\le b$ → no triangle; $a > b$ → one triangle.\n\nIn practice: solve $\\sin B = \\frac{b\\sin A}{a}$. If this is $> 1$, no triangle. Otherwise try both $B_1 = \\arcsin(\\ldots)$ and $B_2 = 180^\\circ - B_1$, keeping each one for which $A + B < 180^\\circ$.",
    tex: 'h = b\\sin A: \\quad a < h \\Rightarrow 0, \\quad a = h \\Rightarrow 1, \\quad h < a < b \\Rightarrow 2, \\quad a \\ge b \\Rightarrow 1',
    see: ['law-of-sines', 'oblique-triangle', 'inverse-sine'],
  },
  {
    id: 'law-of-cosines',
    term: 'Law of Cosines',
    course: 'trig',
    category: 'Triangles',
    aliases: ['cosine rule'],
    short: "In any triangle, $c^2 = a^2 + b^2 - 2ab\\cos C$ (and similarly for the other sides). It generalizes the Pythagorean theorem.",
    long: "When $C = 90^\\circ$, $\\cos C = 0$ and it becomes the [[pythagorean-theorem]]. The correction term $-2ab\\cos C$ makes $c$ longer than the right-triangle value when $C$ is obtuse ($\\cos C < 0$) and shorter when $C$ is acute.\n\nUse it for SAS (find the third side) and SSS (find an angle via $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$). Solving for an angle with arccos is never ambiguous, because arccos covers $[0^\\circ, 180^\\circ]$ — so find the largest angle with the law of cosines first.\n\nIn vector form it is $|\\mathbf u - \\mathbf v|^2 = |\\mathbf u|^2 + |\\mathbf v|^2 - 2\\,\\mathbf u\\cdot\\mathbf v$, which is how the [[dot-product]] formula is derived. It also solves two-bone inverse kinematics (elbow angle of an arm reaching a target).",
    tex: 'c^2 = a^2 + b^2 - 2ab\\cos C, \\qquad \\cos C = \\frac{a^2 + b^2 - c^2}{2ab}',
    see: ['pythagorean-theorem', 'law-of-sines', 'oblique-triangle', 'dot-product'],
  },
  {
    id: 'herons-formula',
    term: "Heron's Formula",
    course: 'trig',
    category: 'Triangles',
    short: "The area of a triangle with sides $a, b, c$ is $\\sqrt{s(s - a)(s - b)(s - c)}$, where $s = \\frac{a + b + c}{2}$ is the semiperimeter.",
    long: "Heron's formula needs only the three side lengths — no angles or heights. It can be derived from the area formula $\\text{Area} = \\tfrac12 ab\\sin C$ combined with the [[law-of-cosines]].\n\nIf you know two sides and the included angle, $\\tfrac12 ab\\sin C$ is quicker. Pitfall: $s$ is **half** the perimeter. If any factor $s - a$ is negative or zero, the sides cannot form a triangle (triangle inequality).",
    tex: '\\text{Area} = \\sqrt{s(s - a)(s - b)(s - c)}, \\qquad s = \\frac{a + b + c}{2}',
    see: ['law-of-cosines', 'oblique-triangle'],
  },

  // ---------------------------------------------------------------- Vectors
  {
    id: 'vector',
    term: 'Vector',
    course: 'trig',
    category: 'Vectors',
    short: "A quantity with both magnitude (size) and direction, drawn as an arrow and written in components as $\\langle a, b \\rangle$.",
    long: "Displacement, velocity, force and acceleration are vectors; mass, time and temperature are [[scalar|scalars]]. Two vectors are equal if they have the same magnitude and direction, regardless of where the arrow is drawn.\n\nVectors add tip-to-tail (componentwise: $\\langle a, b\\rangle + \\langle c, d\\rangle = \\langle a + c, b + d\\rangle$) and can be scaled by a number. A vector with [[magnitude]] $|\\mathbf v|$ and [[direction-angle]] $\\theta$ has [[vector-components|components]] $\\langle |\\mathbf v|\\cos\\theta, |\\mathbf v|\\sin\\theta \\rangle$.\n\nIn game engines, `Vec2`/`Vec3` is the most used type: positions, velocities, forces, normals. Distinguishing points (locations) from vectors (displacements) avoids many logic bugs.",
    tex: '\\mathbf v = \\langle a, b \\rangle = a\\,\\mathbf i + b\\,\\mathbf j',
    see: ['scalar', 'magnitude', 'direction-angle', 'vector-components', 'unit-vector'],
  },
  {
    id: 'scalar',
    term: 'Scalar',
    course: 'trig',
    category: 'Vectors',
    short: "A plain real number (magnitude only, no direction). Multiplying a vector by a scalar $k$ scales its length by $|k|$ and reverses its direction if $k < 0$.",
    long: "Speed (a scalar) is the magnitude of velocity (a [[vector]]). Scalar multiplication works componentwise: $k\\langle a, b\\rangle = \\langle ka, kb \\rangle$, and $|k\\mathbf v| = |k|\\,|\\mathbf v|$.\n\nThe [[dot-product]] of two vectors produces a scalar — hence its other name, the scalar product.",
    tex: 'k\\langle a, b \\rangle = \\langle ka, kb \\rangle, \\qquad |k\\mathbf v| = |k|\\,|\\mathbf v|',
    see: ['vector', 'magnitude', 'dot-product'],
  },
  {
    id: 'magnitude',
    term: 'Magnitude',
    course: 'trig',
    category: 'Vectors',
    aliases: ['length', 'norm', '|v|'],
    short: "The length of a vector: $|\\langle a, b \\rangle| = \\sqrt{a^2 + b^2}$.",
    long: "The magnitude comes straight from the [[pythagorean-theorem]]: the components are the legs and the vector is the [[hypotenuse]]. It is never negative, and it is zero only for the zero vector.\n\nSpeed is the magnitude of velocity. Dividing a vector by its magnitude gives a [[unit-vector]].\n\nPerformance tip: a square root is relatively expensive, so engines provide a `lengthSquared()` for comparisons. Also note $|\\mathbf u + \\mathbf v| \\le |\\mathbf u| + |\\mathbf v|$ (triangle inequality), not equality.",
    tex: '|\\mathbf v| = \\sqrt{a^2 + b^2}',
    example: `#include <cmath>

float length(Vec2 v)        { return std::hypot(v.x, v.y); }
float lengthSquared(Vec2 v) { return v.x * v.x + v.y * v.y; } // no sqrt`,
    exampleLang: 'cpp',
    see: ['vector', 'unit-vector', 'pythagorean-theorem', 'direction-angle'],
  },
  {
    id: 'direction-angle',
    term: 'Direction Angle',
    course: 'trig',
    category: 'Vectors',
    aliases: ['heading'],
    short: "The angle $\\theta$ a vector makes with the positive $x$-axis, measured counterclockwise, so that $\\mathbf v = |\\mathbf v|\\langle \\cos\\theta, \\sin\\theta \\rangle$.",
    long: "Together with the [[magnitude]], the direction angle describes a vector completely; converting between this form and [[vector-components]] is the same as converting between polar and rectangular coordinates.\n\nTo find $\\theta$ from $\\langle a, b \\rangle$: $\\tan\\theta = \\frac{b}{a}$, but you must place $\\theta$ in the correct [[quadrant]]. $\\arctan(b/a)$ is wrong whenever $a < 0$; use [[atan2]] or add $180^\\circ$ by hand.\n\nPitfall: navigation bearings are measured clockwise from north, not counterclockwise from east. Convert before using the formulas.",
    tex: '\\mathbf v = |\\mathbf v|\\langle \\cos\\theta, \\sin\\theta \\rangle, \\qquad \\theta = \\operatorname{atan2}(b, a)',
    see: ['magnitude', 'vector-components', 'atan2', 'polar-coordinates'],
  },
  {
    id: 'unit-vector',
    term: 'Unit Vector',
    course: 'trig',
    category: 'Vectors',
    aliases: ['normalized vector', 'direction vector'],
    short: "A vector of magnitude 1. The unit vector in the direction of $\\mathbf v \\ne \\mathbf 0$ is $\\hat{\\mathbf v} = \\frac{\\mathbf v}{|\\mathbf v|}$.",
    long: "A unit vector carries only direction. Every unit vector in the plane has the form $\\langle\\cos\\theta, \\sin\\theta\\rangle$ — a point on the [[unit-circle]]. The standard unit vectors are $\\mathbf i = \\langle 1, 0\\rangle$ and $\\mathbf j = \\langle 0, 1\\rangle$.\n\nIn games you normalize to separate direction from speed: `velocity = normalize(target - pos) * speed`. Without normalizing, diagonal movement from combining two key presses is $\\sqrt2$ times faster.\n\nPitfall: the zero vector has no direction, and normalizing it divides by zero (NaN). Guard against it.",
    tex: '\\hat{\\mathbf v} = \\frac{\\mathbf v}{|\\mathbf v|}, \\qquad |\\hat{\\mathbf v}| = 1',
    example: `#include <cmath>

Vec2 normalize(Vec2 v) {
    float len = std::hypot(v.x, v.y);
    if (len < 1e-6f) return {0.0f, 0.0f};   // zero vector: no direction
    return { v.x / len, v.y / len };
}`,
    exampleLang: 'cpp',
    see: ['magnitude', 'vector', 'unit-circle', 'direction-angle'],
  },
  {
    id: 'vector-components',
    term: 'Vector Components',
    course: 'trig',
    category: 'Vectors',
    aliases: ['component form', 'resolving a vector'],
    short: "The horizontal and vertical parts $\\langle a, b \\rangle$ of a vector. A vector of magnitude $|\\mathbf v|$ and direction angle $\\theta$ has components $a = |\\mathbf v|\\cos\\theta$, $b = |\\mathbf v|\\sin\\theta$.",
    long: "Resolving a vector into components turns geometry into arithmetic: to add forces or velocities, add their components separately. A vector from point $P(x_1, y_1)$ to $Q(x_2, y_2)$ has components $\\langle x_2 - x_1, y_2 - y_1 \\rangle$ (\"tip minus tail\").\n\nGoing back: [[magnitude]] $\\sqrt{a^2 + b^2}$ and [[direction-angle]] from [[atan2]].\n\nProjectile motion in games is the classic example: launch speed $v$ at angle $\\theta$ gives $v_x = v\\cos\\theta$ (constant) and $v_y = v\\sin\\theta$ (changed by gravity each frame).",
    tex: '\\mathbf v = \\langle |\\mathbf v|\\cos\\theta, \\; |\\mathbf v|\\sin\\theta \\rangle',
    see: ['vector', 'magnitude', 'direction-angle', 'polar-coordinates'],
  },
  {
    id: 'dot-product',
    term: 'Dot Product',
    course: 'trig',
    category: 'Vectors',
    aliases: ['scalar product', 'inner product'],
    short: "For $\\mathbf u = \\langle u_1, u_2\\rangle$ and $\\mathbf v = \\langle v_1, v_2\\rangle$, $\\mathbf u \\cdot \\mathbf v = u_1v_1 + u_2v_2 = |\\mathbf u||\\mathbf v|\\cos\\theta$, where $\\theta$ is the angle between them.",
    long: "The algebraic formula (multiply matching components, add) and the geometric formula agree — a fact proved with the [[law-of-cosines]]. The result is a [[scalar]]. Its sign tells you the angle: positive if acute, zero if perpendicular (orthogonal), negative if obtuse.\n\nUses: the angle between vectors $\\theta = \\arccos\\frac{\\mathbf u\\cdot\\mathbf v}{|\\mathbf u||\\mathbf v|}$; the projection of $\\mathbf u$ onto $\\mathbf v$, $\\frac{\\mathbf u\\cdot\\mathbf v}{|\\mathbf v|^2}\\mathbf v$; and work $W = \\mathbf F\\cdot\\mathbf d$.\n\nIn games it answers \"is the enemy in front of me?\" (`dot(forward, toEnemy) > 0`), checks field-of-view cones, computes diffuse lighting and slides characters along walls. Also $\\mathbf v\\cdot\\mathbf v = |\\mathbf v|^2$.",
    tex: '\\mathbf u \\cdot \\mathbf v = u_1v_1 + u_2v_2 = |\\mathbf u|\\,|\\mathbf v|\\cos\\theta',
    example: `// Is the target inside a 90-degree vision cone (45 degrees each side)?
bool canSee(Vec2 pos, Vec2 forward /* unit */, Vec2 target) {
    Vec2 to = normalize(target - pos);
    return dot(forward, to) >= std::cos(0.785398f); // cos(45 deg)
}`,
    exampleLang: 'cpp',
    see: ['vector', 'inverse-cosine', 'law-of-cosines', 'magnitude', 'cosine'],
  },

  // ------------------------------------------------------------------ Polar
  {
    id: 'polar-coordinates',
    term: 'Polar Coordinates',
    course: 'trig',
    category: 'Polar',
    short: "A point is described by $(r, \\theta)$: its distance $r$ from the origin and the angle $\\theta$ from the positive $x$-axis. Then $x = r\\cos\\theta$, $y = r\\sin\\theta$.",
    long: "Polar coordinates suit anything circular or rotational: orbits, radar sweeps, spirals, radial menus. Converting back: $r^2 = x^2 + y^2$ and $\\tan\\theta = \\frac{y}{x}$, with the quadrant chosen correctly — exactly what [[atan2]] does.\n\nUnlike rectangular coordinates, polar coordinates are not unique: $(r, \\theta)$, $(r, \\theta + 2\\pi)$ and $(-r, \\theta + \\pi)$ all name the same point, and the origin is $(0, \\theta)$ for any $\\theta$.\n\nIn games, spawning enemies evenly around the player or making a moon orbit a planet is easiest in polar form, then converted with `x = cx + r*cos(t)`, `y = cy + r*sin(t)`.",
    tex: 'x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad r^2 = x^2 + y^2, \\quad \\tan\\theta = \\frac{y}{x}',
    example: `#include <cmath>
#include <numbers>

// Place n enemies evenly on a circle of radius r around center c
for (int k = 0; k < n; ++k) {
    float theta = 2.0f * std::numbers::pi_v<float> * k / n;
    spawn({ c.x + r * std::cos(theta), c.y + r * std::sin(theta) });
}`,
    exampleLang: 'cpp',
    see: ['atan2', 'unit-circle', 'polar-form-complex', 'direction-angle'],
  },
  {
    id: 'polar-form-complex',
    term: 'Polar Form of a Complex Number',
    course: 'trig',
    category: 'Polar',
    aliases: ['trigonometric form', 'cis form', 'modulus-argument form'],
    short: "Writing $z = a + bi$ as $z = r(\\cos\\theta + i\\sin\\theta)$, where $r = |z| = \\sqrt{a^2 + b^2}$ is the modulus and $\\theta$ is an argument of $z$.",
    long: "Plot $a + bi$ as the point $(a, b)$; its [[polar-coordinates]] give the modulus $r$ and argument $\\theta$ (found with [[atan2]]$(b, a)$). Shorthand: $r\\operatorname{cis}\\theta$, or $re^{i\\theta}$ by [[eulers-formula]].\n\nThe payoff is multiplication: multiply the moduli and **add** the arguments, $r_1e^{i\\theta_1}\\cdot r_2e^{i\\theta_2} = r_1r_2e^{i(\\theta_1 + \\theta_2)}$. This follows from the [[sum-and-difference-formulas]].\n\nSo multiplying by a complex number of modulus 1 is a pure rotation — the 2D version of what quaternions do for 3D rotations in game engines.",
    tex: 'z = a + bi = r(\\cos\\theta + i\\sin\\theta), \\quad r = \\sqrt{a^2 + b^2}, \\quad \\tan\\theta = \\frac{b}{a}',
    see: ['complex-number', 'polar-coordinates', 'de-moivres-theorem', 'eulers-formula'],
  },
  {
    id: 'de-moivres-theorem',
    term: "De Moivre's Theorem",
    course: 'trig',
    category: 'Polar',
    short: "For any integer $n$: $[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)$.",
    long: "Since multiplying complex numbers in [[polar-form-complex|polar form]] multiplies moduli and adds angles, raising to the $n$th power raises the modulus to the $n$th power and multiplies the angle by $n$. Computing $(1 + i)^{10}$ this way takes one line instead of ten multiplications: $(\\sqrt2)^{10}\\left(\\cos\\frac{10\\pi}{4} + i\\sin\\frac{10\\pi}{4}\\right) = 32i$.\n\nRunning it backwards gives the $n$th roots: $z^n = re^{i\\theta}$ has exactly $n$ solutions $r^{1/n}\\left(\\cos\\frac{\\theta + 2\\pi k}{n} + i\\sin\\frac{\\theta + 2\\pi k}{n}\\right)$, $k = 0, 1, \\ldots, n-1$, equally spaced around a circle.\n\nPitfall: forgetting the $+2\\pi k$ and finding only one root.",
    tex: '\\big[r(\\cos\\theta + i\\sin\\theta)\\big]^n = r^n(\\cos n\\theta + i\\sin n\\theta)',
    see: ['polar-form-complex', 'eulers-formula', 'complex-number'],
  },
  {
    id: 'eulers-formula',
    term: "Euler's Formula",
    course: 'trig',
    category: 'Polar',
    short: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ for every real $\\theta$. With $\\theta = \\pi$ it gives Euler's identity $e^{i\\pi} + 1 = 0$.",
    long: "Euler's formula says $e^{i\\theta}$ is the point at angle $\\theta$ on the [[unit-circle]] in the complex plane. It explains why multiplying complex numbers adds angles: $e^{i\\alpha}e^{i\\beta} = e^{i(\\alpha + \\beta)}$ is just the exponent law, and comparing real and imaginary parts recovers the [[sum-and-difference-formulas]].\n\nIt also makes [[de-moivres-theorem]] obvious: $(e^{i\\theta})^n = e^{in\\theta}$. You will see why it is true in Calculus II, by comparing the Taylor series of $e^x$, $\\cos x$ and $\\sin x$.\n\nIn computing it underlies the Fourier transform (audio, image compression) and is the cleanest way to think about 2D rotations.",
    tex: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\qquad e^{i\\pi} + 1 = 0',
    see: ['polar-form-complex', 'de-moivres-theorem', 'eulers-number', 'unit-circle'],
  },
];
