import type { Lesson } from '../../types';

const FIG_WALL = `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="220" height="220" fill="none" stroke="currentColor" stroke-width="2"/><rect x="246" y="30" width="8" height="220" fill="currentColor" class="f-gray" fill-opacity="0.5" stroke="none"/><line x1="60" y1="210" x2="250" y2="125" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="250" y1="125" x2="80" y2="49" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="160" cy="165" r="8" class="f-purple" fill="currentColor"/><line x1="160" y1="165" x2="214" y2="141" stroke="currentColor" class="s-blue" stroke-width="2.5"/><path d="M221 138 L211 137 L215 146 Z" class="f-blue" fill="currentColor"/><text x="196" y="130" font-size="14" class="t-blue" text-anchor="middle">u</text><line x1="160" y1="190" x2="212" y2="190" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M219 190 L210 185 L210 195 Z" class="f-red" fill="currentColor"/><text x="186" y="208" font-size="13" class="t-red" text-anchor="middle">+uₓ</text><line x1="200" y1="80" x2="148" y2="80" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M141 80 L150 75 L150 85 Z" class="f-red" fill="currentColor"/><text x="174" y="70" font-size="13" class="t-red" text-anchor="middle">−uₓ after</text><line x1="30" y1="262" x2="250" y2="262" stroke="currentColor" stroke-width="1"/><line x1="30" y1="256" x2="30" y2="268" stroke="currentColor" stroke-width="1"/><line x1="250" y1="256" x2="250" y2="268" stroke="currentColor" stroke-width="1"/><text x="140" y="277" font-size="13" text-anchor="middle">L</text><text x="390" y="56" font-size="14" text-anchor="middle">one hit on the right wall:</text><text x="390" y="78" font-size="13" text-anchor="middle" class="t-red">Δpₓ(particle) = −2muₓ</text><text x="390" y="98" font-size="13" text-anchor="middle">wall receives +2muₓ</text><text x="390" y="136" font-size="14" text-anchor="middle">time between hits on</text><text x="390" y="156" font-size="14" text-anchor="middle">the same wall:</text><text x="390" y="178" font-size="13" text-anchor="middle" class="t-blue">Δt = 2L / uₓ</text><text x="390" y="216" font-size="14" text-anchor="middle">average force on wall:</text><text x="390" y="238" font-size="13" text-anchor="middle" class="t-purple">2muₓ / (2L/uₓ) = muₓ²/L</text><text x="140" y="20" font-size="12" text-anchor="middle" class="t-gray">cube of edge L (side view)</text></svg>`;
const FIG_TUBE = `<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="60" width="440" height="36" rx="18" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="44" y="64" width="36" height="28" rx="12" fill="currentColor" class="f-blue" fill-opacity="0.35"/><rect x="440" y="64" width="36" height="28" rx="12" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="62" y="46" text-anchor="middle" font-size="13" class="t-blue">NH₃</text><text x="62" y="118" text-anchor="middle" font-size="11" class="t-gray">soaked cotton</text><text x="458" y="46" text-anchor="middle" font-size="13" class="t-red">HCl</text><text x="458" y="118" text-anchor="middle" font-size="11" class="t-gray">soaked cotton</text><rect x="288" y="61" width="12" height="34" fill="currentColor" class="f-gray" fill-opacity="0.85"/><text x="294" y="46" text-anchor="middle" font-size="12">white NH₄Cl ring</text><line x1="80" y1="135" x2="288" y2="135" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M294 135 L285 130 L285 140 Z" class="f-blue" fill="currentColor"/><line x1="440" y1="135" x2="300" y2="135" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M294 135 L303 130 L303 140 Z" class="f-red" fill="currentColor"/><text x="180" y="157" text-anchor="middle" font-size="13" class="t-blue">NH₃ (17.0 g/mol) travels 59%</text><text x="372" y="157" text-anchor="middle" font-size="13" class="t-red">HCl (36.5) 41%</text></svg>`;

const BOX_SIM = `#include <cstdint>
#include <cstdio>
#include <vector>

// Tiny deterministic random number generator (xorshift32).
std::uint32_t state = 2463534242u;
double rnd() {  // uniform in [-1, 1)
    state ^= state << 13;
    state ^= state >> 17;
    state ^= state << 5;
    return state / 2147483648.0 - 1.0;
}

struct Particle {
    double x[3], v[3];
};

int main() {
    const int N = 20000;            // number of particles
    const double m = 1.0, L = 1.0;  // mass and box edge (simulation units)
    const double dt = 0.001;        // time step
    const int steps = 5000;

    std::vector<Particle> gas(N);
    double sumU2 = 0.0, sumUx2 = 0.0;
    for (auto& p : gas) {
        for (int k = 0; k < 3; ++k) {
            p.x[k] = 0.5 * (rnd() + 1.0) * L;  // random position in the box
            p.v[k] = rnd();                    // random velocity component
        }
        sumUx2 += p.v[0] * p.v[0];
        sumU2 += p.v[0] * p.v[0] + p.v[1] * p.v[1] + p.v[2] * p.v[2];
    }

    double impulse = 0.0;  // momentum delivered to the wall at x = L
    for (int s = 0; s < steps; ++s) {
        for (auto& p : gas) {
            for (int k = 0; k < 3; ++k) {
                p.x[k] += p.v[k] * dt;
                if (p.x[k] < 0.0) {
                    p.x[k] = -p.x[k];
                    p.v[k] = -p.v[k];
                }
                if (p.x[k] > L) {
                    p.x[k] = 2.0 * L - p.x[k];
                    p.v[k] = -p.v[k];
                    if (k == 0) impulse += 2.0 * m * -p.v[k];  // wall gains 2 m |u_x|
                }
            }
        }
    }

    const double V = L * L * L, area = L * L, time = steps * dt;
    const double P = impulse / time / area;  // force per area, averaged over time
    std::printf("measured  PV/N        = %.4f\\n", P * V / N);
    std::printf("m <u_x^2>             = %.4f\\n", m * sumUx2 / N);
    std::printf("(1/3) m <u^2>         = %.4f\\n", m * sumU2 / N / 3.0);
}`;

export const lesson: Lesson = {
  id: 'gchem-kinetic-theory',
  title: 'Kinetic-Molecular Theory, Speeds and Effusion',
  summary: 'Derive the ideal gas law from Newton\'s laws: pressure from wall collisions, temperature as kinetic energy, molecular speeds, the Maxwell–Boltzmann distribution and Graham\'s law.',
  minutes: 20,
  objectives: [
    'State the postulates of the kinetic-molecular theory and explain pressure as momentum transfer',
    'Derive $PV = \\tfrac{1}{3}Nm\\langle u^2\\rangle$ and, from it, $\\overline{KE} = \\tfrac{3}{2}RT$ per mole',
    'Calculate root-mean-square speeds with $u_{\\text{rms}} = \\sqrt{3RT/M}$ using SI units',
    'Read the Maxwell–Boltzmann distribution and explain how it changes with temperature and molar mass',
    'Apply Graham\'s law to effusion and diffusion rates and use it to find molar masses',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The postulates, stated precisely',
      blocks: [
        {
          type: 'p',
          text: 'Foundations described the [[chem-kinetic-molecular-theory|kinetic-molecular theory]] (KMT) in words. Now you will use it the way physicists do: as a set of assumptions from which the ideal gas law can be **derived** with nothing more than Newton\'s laws and a little algebra. Here are the assumptions, sharpened.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Point particles.** A gas consists of $N$ particles of mass $m$ whose own volume is negligible compared with the container\'s volume.',
            '**Random motion.** The particles move in straight lines in random directions, so no direction is special (the motion is *isotropic*).',
            '**No forces between particles**, except during collisions, which are brief.',
            '**Elastic collisions.** Collisions with each other and with the walls conserve kinetic energy; a wall collision simply reverses the velocity component perpendicular to the wall.',
            '**Temperature.** The average kinetic energy of the particles depends only on the absolute temperature. (You will see this one come out of the derivation as $\\overline{KE} = \\tfrac{3}{2}RT$ per mole.)',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother deriving a law you already know?',
          text: '$PV = nRT$ was discovered by experiment. Deriving it from particles proves the particle picture is right, and it delivers things experiment alone never gave: the meaning of temperature, the speed of molecules, and exactly which assumptions to fix when real gases misbehave (the next lesson). Each assumption above will reappear as an approximation that fails somewhere.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Daniel Bernoulli sketched the idea in 1738, but it was ignored for over a century. James Clerk Maxwell (1860) and Ludwig Boltzmann (1870s) turned it into a full statistical theory, and the measured speeds of molecules later confirmed it directly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A gas is compressed to half its volume at constant temperature, and its pressure doubles. What is the kinetic-molecular explanation?',
      options: [
        { text: 'The particles move faster in the smaller space', why: 'Speed depends only on temperature, which was held constant. The average speed is unchanged.' },
        { text: 'Each particle hits the walls twice as often, with the same force per hit', correct: true, why: 'With half the distance to travel between walls (and the same speeds), collisions with each square centimeter of wall are twice as frequent.' },
        { text: 'The particles are squeezed and become larger', why: 'KMT treats particles as points of fixed size; compressing the container does not change the particles.' },
        { text: 'The particles attract each other more strongly when closer', why: 'Ideal-gas particles have no attractions at all, and real attractions would *lower* the pressure, not raise it.' },
      ],
      explanation: 'Pressure is the average force per area from wall collisions: (number of hits per second) × (momentum per hit). At constant $T$ the momentum per hit is fixed, so halving the volume doubles the hit rate on each unit of wall area and doubles the pressure. That is [[boyles-law|Boyle\'s law]], explained.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Deriving the pressure: $PV = \\tfrac{1}{3}Nm\\langle u^2\\rangle$',
      blocks: [
        {
          type: 'p',
          text: 'Put $N$ particles in a cube of edge $L$ and volume $V = L^3$. Follow one particle with velocity [[vector]] $\\vec{u} = (u_x, u_y, u_z)$ and watch only the right-hand wall, perpendicular to $x$.',
        },
        {
          type: 'figure',
          svg: FIG_WALL,
          alt: 'A square box of edge L with a particle moving up and to the right. Its velocity u has an x component plus u x. It bounces off the right wall and returns with x component minus u x. Text: one hit changes the particle\'s x momentum by minus 2 m u x, the time between hits on the same wall is 2L over u x, and the average force on the wall is m u x squared over L.',
          caption: 'Only the $x$-component of velocity matters for the right wall. $u_y$ and $u_z$ are untouched by the bounce.',
        },
        {
          type: 'derivation',
          title: 'From one bounce to the pressure of the whole gas',
          steps: [
            { tex: '\\Delta p_x = m(-u_x) - m u_x = -2mu_x', why: 'An elastic bounce reverses $u_x$. By Newton\'s third law the wall receives $+2mu_x$ of momentum.' },
            { tex: '\\Delta t = \\frac{2L}{u_x}', why: 'Before hitting the same wall again the particle must cross the box and come back, a distance $2L$ at $x$-speed $u_x$.' },
            { tex: '\\bar{F}_{\\text{one}} = \\frac{2mu_x}{2L/u_x} = \\frac{mu_x^2}{L}', why: 'Average force = momentum delivered per unit time (Newton\'s second law, $F = dp/dt$, averaged over one round trip).' },
            { tex: 'F = \\frac{m}{L}\\sum_{i=1}^{N} u_{x,i}^2 = \\frac{Nm\\langle u_x^2\\rangle}{L}', why: 'Add the forces from all $N$ particles. $\\langle u_x^2\\rangle$ is the average of $u_x^2$ over the particles.' },
            { tex: 'P = \\frac{F}{L^2} = \\frac{Nm\\langle u_x^2\\rangle}{L^3} = \\frac{Nm\\langle u_x^2\\rangle}{V}', why: 'Pressure is force per area, and the wall\'s area is $L^2$.' },
            { tex: '\\langle u^2\\rangle = \\langle u_x^2\\rangle + \\langle u_y^2\\rangle + \\langle u_z^2\\rangle = 3\\langle u_x^2\\rangle', why: 'For each particle $u^2 = \\vec{u}\\cdot\\vec{u} = u_x^2 + u_y^2 + u_z^2$. Averages add, and random (isotropic) motion makes the three averages equal.' },
            { tex: 'PV = \\tfrac{1}{3}Nm\\langle u^2\\rangle', why: 'Substitute $\\langle u_x^2\\rangle = \\tfrac{1}{3}\\langle u^2\\rangle$ and multiply by $V$.' },
          ],
          result: 'The product $PV$ depends only on the number of particles and their mean square speed. Nothing about the container\'s shape survived (a cube was just convenient).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the factor $\\tfrac{1}{3}$?',
          text: 'Any one wall only "feels" motion along one axis. Space has three axes and random motion shares the kinetic energy equally among them, so each wall sees one-third of $\\langle u^2\\rangle$. Collisions between particles do not spoil this: they swap momentum between particles but keep the motion random, which is why the KMT can safely ignore them here.',
        },
        {
          type: 'deepdive',
          title: 'Is "average force = $\\Delta p/\\Delta t$" legitimate?',
          blocks: [
            {
              type: 'p',
              text: 'The real force during a bounce is a huge spike lasting a tiny time, and zero in between. Its time average over one round trip is $\\bar{F} = \\frac{1}{\\Delta t}\\int_0^{\\Delta t} F\\,dt$, and by Newton\'s second law $\\int F\\,dt = \\Delta p$ (the impulse). So $\\bar{F} = \\Delta p/\\Delta t$ exactly, whatever the shape of the spike. With roughly $10^{23}$ hits per square centimeter per second, the spikes blur into a perfectly steady pressure.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the key steps of the pressure derivation for one particle of mass $m$ in a cube of edge $L$.',
      template: 'Momentum given to the wall per hit: ___ . Time between hits on the same wall: ___ . For random motion, $\\langle u^2 \\rangle$ equals ___ times $\\langle u_x^2 \\rangle$.',
      blanks: [{ answers: ['$2mu_x$'] }, { answers: ['$2L/u_x$'] }, { answers: ['$3$'] }],
      wordBank: ['$2mu_x$', '$mu_x$', '$2L/u_x$', '$L/u_x$', '$3$', '$\\tfrac{1}{3}$'],
      explanation: 'The velocity component $u_x$ reverses, so the momentum change is $2mu_x$ (not $mu_x$: the particle goes from $+mu_x$ to $-mu_x$). The particle must travel to the far wall and back, $2L$, before it returns. Finally $\\langle u^2 \\rangle = 3\\langle u_x^2 \\rangle$ because the three directions are equivalent; that is where the $\\tfrac{1}{3}$ in $PV = \\tfrac{1}{3}Nm\\langle u^2\\rangle$ comes from.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Temperature is kinetic energy',
      blocks: [
        {
          type: 'p',
          text: 'Now compare the derived result with the experimental ideal gas law. Write the mean kinetic energy per particle as $\\overline{\\varepsilon} = \\tfrac{1}{2}m\\langle u^2\\rangle$.',
        },
        {
          type: 'derivation',
          title: 'What temperature means',
          steps: [
            { tex: 'PV = \\tfrac{1}{3}Nm\\langle u^2\\rangle = \\tfrac{2}{3}N\\left(\\tfrac{1}{2}m\\langle u^2\\rangle\\right) = \\tfrac{2}{3}N\\overline{\\varepsilon}', why: 'Rewrite $\\tfrac{1}{3}m\\langle u^2\\rangle$ as $\\tfrac{2}{3}$ of the mean kinetic energy.' },
            { tex: '\\tfrac{2}{3}N\\overline{\\varepsilon} = nRT', why: 'Experiment says $PV = nRT$. Both describe the same gas, so the right-hand sides are equal.' },
            { tex: 'N_A\\overline{\\varepsilon} = \\tfrac{3}{2}RT', why: 'Divide by $n$ and use $N/n = N_A$, [[avogadros-number|Avogadro\'s number]]. The left side is the kinetic energy of one mole.' },
            { tex: '\\overline{KE}_{\\text{per mole}} = \\tfrac{3}{2}RT, \\qquad \\overline{\\varepsilon} = \\tfrac{3}{2}k_BT', why: 'Per molecule, divide by $N_A$: $k_B = R/N_A = 1.381 \\times 10^{-23}\\ \\text{J/K}$ is Boltzmann\'s constant.' },
          ],
          result: 'The absolute temperature is a direct measure of the average translational kinetic energy of the particles, **and nothing else**: not their mass, not their identity.',
        },
        {
          type: 'derivation',
          title: 'Kinetic energy of one mole of any gas at $25\\ ^\\circ\\text{C}$',
          steps: [
            { tex: '\\overline{KE} = \\tfrac{3}{2}(8.314\\ \\text{J/(mol·K)})(298.15\\ \\text{K})', why: 'Use $R$ in joules, since we want an energy.' },
            { tex: '= 3718\\ \\text{J/mol} = 3.72\\ \\text{kJ/mol}', why: 'Kelvin cancels.' },
          ],
          result: 'The same $3.72\\ \\text{kJ/mol}$ for hydrogen, helium, nitrogen or xenon. Compare a typical bond energy of about $400\\ \\text{kJ/mol}$: room-temperature collisions are far too gentle to break most bonds.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why kelvin, at last',
          text: 'Foundations insisted that gas laws use kelvin. Here is the deep reason: $\\overline{KE} \\propto T$ only works on a scale whose zero is zero kinetic energy. At $0\\ \\text{K}$ translational motion would stop (quantum mechanics leaves a little residual motion, but the classical gas picture breaks down long before then). Doubling the kelvin temperature doubles the average kinetic energy; doubling a Celsius temperature means nothing physical.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: '$\\tfrac{3}{2}RT$ counts only motion from place to place (translation). Molecules such as $\\ce{N2}$ and $\\ce{CO2}$ also rotate and vibrate, which stores extra energy. That is why their heat capacities are larger than helium\'s, a theme the thermodynamics unit takes up.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'What is the average translational kinetic energy of one mole of gas at $100.0\\ ^\\circ\\text{C}$, in kJ/mol? Use $R = 8.314\\ \\text{J/(mol·K)}$ and give 3 significant figures.',
      hint: '$\\overline{KE} = \\tfrac{3}{2}RT$ with $T$ in kelvin; divide by 1000 for kJ.',
      label: '$\\overline{KE} =$',
      unit: 'kJ/mol',
      answer: '1.5*8.314*373.15/1000',
      answerTex: '4.65\\ \\text{kJ/mol}',
      tolerance: 0.006,
      explanation: '$\\tfrac{3}{2}(8.314)(373.15) = 4654\\ \\text{J/mol} = 4.65\\ \\text{kJ/mol}$. It does not matter which gas: the molar mass never enters. Using $100$ instead of $373.15$ would give $1.25\\ \\text{kJ/mol}$, and it would also predict that a gas at $0\\ ^\\circ\\text{C}$ has no kinetic energy at all.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'How fast are molecules? The rms speed',
      blocks: [
        {
          type: 'p',
          text: 'If every gas at the same temperature has the same average kinetic energy, lighter molecules must move faster. Solve for the speed; the result is the [[gchem-rms-speed|root-mean-square speed]].',
        },
        {
          type: 'derivation',
          title: 'Root-mean-square speed',
          steps: [
            { tex: 'N_A \\cdot \\tfrac{1}{2}m\\langle u^2\\rangle = \\tfrac{3}{2}RT', why: 'Kinetic energy per mole from the previous card.' },
            { tex: '\\tfrac{1}{2}M\\langle u^2\\rangle = \\tfrac{3}{2}RT', why: '$N_A m = M$, the molar mass, **in kg/mol** so that the units come out in joules.' },
            { tex: 'u_{\\text{rms}} = \\sqrt{\\langle u^2\\rangle} = \\sqrt{\\frac{3RT}{M}}', why: 'Solve for $\\langle u^2\\rangle$ and take the square root. "Root-mean-square" names the steps in reverse: square, average, root.' },
          ],
        },
        {
          type: 'derivation',
          title: '$u_{\\text{rms}}$ of $\\ce{N2}$ at $25\\ ^\\circ\\text{C}$',
          steps: [
            { tex: 'M = 28.014\\ \\text{g/mol} = 0.028014\\ \\text{kg/mol}', why: 'Convert to SI. This is the step everyone forgets.' },
            { tex: 'u_{\\text{rms}} = \\sqrt{\\frac{3(8.314\\ \\text{J/(mol·K)})(298.15\\ \\text{K})}{0.028014\\ \\text{kg/mol}}}', why: 'Substitute. Units: $\\text{J/kg} = \\text{(kg·m}^2\\text{/s}^2\\text{)/kg} = \\text{m}^2/\\text{s}^2$.' },
            { tex: 'u_{\\text{rms}} = \\sqrt{2.654 \\times 10^5\\ \\text{m}^2/\\text{s}^2} = 515\\ \\text{m/s}', why: 'Square root of $\\text{m}^2/\\text{s}^2$ is m/s.' },
          ],
          result: 'Nitrogen molecules in the room around you average about $515\\ \\text{m/s}$, roughly $1850\\ \\text{km/h}$, faster than the speed of sound (which is carried by these very motions).',
        },
        {
          type: 'table',
          headers: ['Gas', '$M$ (g/mol)', '$u_{\\text{rms}}$ at $25\\ ^\\circ\\text{C}$'],
          rows: [
            ['$\\ce{H2}$', '2.016', '$1921\\ \\text{m/s}$'],
            ['$\\ce{He}$', '4.003', '$1363\\ \\text{m/s}$'],
            ['$\\ce{N2}$', '28.014', '$515\\ \\text{m/s}$'],
            ['$\\ce{O2}$', '31.998', '$482\\ \\text{m/s}$'],
            ['$\\ce{CO2}$', '44.009', '$411\\ \\text{m/s}$'],
          ],
          caption: 'Speed scales as $1/\\sqrt{M}$: hydrogen is 14 times lighter than nitrogen and $\\sqrt{14} \\approx 3.7$ times faster.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Molar mass in kg/mol',
          text: 'With $R = 8.314\\ \\text{J/(mol·K)}$ you must use $M$ in **kg/mol**. Plugging in $28.014$ gives $16.3\\ \\text{m/s}$, slower than a sprinting human, a sure sign of a units error (it is off by $\\sqrt{1000} \\approx 31.6$).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Calculate the rms speed of helium atoms at $25.0\\ ^\\circ\\text{C}$. Use $M(\\ce{He}) = 4.003\\ \\text{g/mol}$ and $R = 8.314\\ \\text{J/(mol·K)}$; 3 significant figures.',
      hint: '$u_{\\text{rms}} = \\sqrt{3RT/M}$ with $M = 0.004003\\ \\text{kg/mol}$.',
      label: '$u_{\\text{rms}} =$',
      unit: 'm/s',
      answer: 'sqrt(3*8.314*298.15/0.004003)',
      answerTex: '1.36 \\times 10^{3}\\ \\text{m/s}',
      tolerance: 6,
      explanation: '$u_{\\text{rms}} = \\sqrt{\\frac{3(8.314)(298.15)}{0.004003}} = \\sqrt{1.858 \\times 10^6} = 1363\\ \\text{m/s} \\approx 1.36 \\times 10^3\\ \\text{m/s}$. That is $\\sqrt{28.014/4.003} = 2.65$ times the speed of $\\ce{N2}$ at the same temperature, and it is part of why a helium-filled voice sounds high-pitched: sound travels faster through helium.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The Maxwell–Boltzmann distribution',
      blocks: [
        {
          type: 'p',
          text: 'Collisions constantly trade energy, so at any moment some molecules are nearly stopped and a few are very fast. Maxwell worked out the probability density of speeds, now called the [[gchem-maxwell-boltzmann|Maxwell–Boltzmann distribution]]. The fraction of molecules with speeds between $u$ and $u + du$ is $f(u)\\,du$, where',
        },
        {
          type: 'theorem',
          name: 'Maxwell–Boltzmann speed distribution',
          tex: 'f(u) = 4\\pi\\left(\\frac{M}{2\\pi RT}\\right)^{3/2} u^2\\, e^{-Mu^2/2RT}, \\qquad \\int_0^\\infty f(u)\\,du = 1',
          text: 'Two competing factors: $u^2$ (there are more ways to point a velocity vector at larger speeds: the area of a sphere of radius $u$ grows as $4\\pi u^2$) and $e^{-Mu^2/2RT}$ (high kinetic energy is exponentially unlikely). Their product rises, peaks and decays.',
        },
        {
          type: 'graph',
          x: [0, 2.5],
          y: [0, 6],
          xStep: 0.5,
          yStep: 1,
          functions: [
            { expr: '1000*4pi*(m/(2000*pi*8.314*k))^(1.5)*1000000x^2*exp(-500*m*x^2/(8.314*k))', label: '$f(u)$ for your gas', color: 'blue' },
            { expr: '1000*4pi*(28.014/(2000*pi*8.314*300))^(1.5)*1000000x^2*exp(-500*28.014*x^2/(8.314*300))', label: '$\\ce{N2}$ at 300 K (reference)', color: 'gray', dashed: true },
          ],
          vlines: [
            { x: 'sqrt(2000*8.314*k/m)/1000', color: 'green' },
            { x: 'sqrt(3000*8.314*k/m)/1000', color: 'red' },
          ],
          sliders: [
            { name: 'k', min: 200, max: 1500, step: 10, value: 300, label: 'temperature $T$ (K)' },
            { name: 'm', min: 2, max: 100, step: 1, value: 28, label: 'molar mass $M$ (g/mol)' },
          ],
          readouts: [
            { label: 'most probable $u_{\\text{mp}}$ (m/s)', expr: 'sqrt(2000*8.314*k/m)', digits: 0 },
            { label: 'mean $\\bar{u}$ (m/s)', expr: 'sqrt(8000*8.314*k/(pi*m))', digits: 0 },
            { label: '$u_{\\text{rms}}$ (m/s)', expr: 'sqrt(3000*8.314*k/m)', digits: 0 },
          ],
          caption: 'Horizontal axis: speed in km/s; vertical: $f(u)$ per km/s. The green dashed line marks $u_{\\text{mp}}$, the red one $u_{\\text{rms}}$. Raise $T$ or lower $M$ and the curve slides right, spreads out and drops, because the area under it is always 1 (all the molecules). Lower $T$ or raise $M$ and it bunches up at low speeds.',
        },
        {
          type: 'derivation',
          title: 'The most probable speed, by calculus',
          steps: [
            { tex: 'f(u) = C\\,u^2 e^{-au^2}, \\quad a = \\frac{M}{2RT}', why: 'Collect the constants; only the shape matters for finding the peak.' },
            { tex: 'f\'(u) = C\\left(2u - 2au^3\\right)e^{-au^2}', why: '[[product-rule|Product rule]] and [[chain-rule|chain rule]]: $\\frac{d}{du}e^{-au^2} = -2au\\,e^{-au^2}$.' },
            { tex: 'f\'(u) = 0 \\implies 2u(1 - au^2) = 0 \\implies u^2 = \\frac{1}{a}', why: 'The exponential is never zero, and $u = 0$ is the minimum, so the peak has $au^2 = 1$.' },
            { tex: 'u_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}', why: 'Substitute $a = M/2RT$.' },
          ],
          result: 'Similar integrals give the mean speed $\\bar{u} = \\int_0^\\infty u f(u)\\,du = \\sqrt{8RT/\\pi M}$ and $u_{\\text{rms}} = \\sqrt{3RT/M}$. The three always stand in the ratio $u_{\\text{mp}} : \\bar{u} : u_{\\text{rms}} = 1 : 1.128 : 1.225$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The long tail matters',
          text: 'At $25\\ ^\\circ\\text{C}$ about $1\\%$ of $\\ce{N2}$ molecules move faster than $1000\\ \\text{m/s}$, nearly twice the rms speed. That high-speed tail is where the action is: the fastest molecules are the ones that escape a liquid surface (evaporation) and the ones with enough energy to react, which is why reaction rates climb so steeply with temperature (the kinetics unit).',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A sample of nitrogen is heated from $300\\ \\text{K}$ to $600\\ \\text{K}$. How does its Maxwell–Boltzmann curve change?',
      options: [
        { text: 'The peak moves to a higher speed and becomes taller', why: 'Taller and wider would increase the area above 1. The area must stay 1 because it counts all the molecules.' },
        { text: 'The peak moves to a higher speed and becomes lower and broader', correct: true, why: '$u_{\\text{mp}} = \\sqrt{2RT/M}$ grows by $\\sqrt{2}$, and since the total area is fixed at 1, a curve that spreads over more speeds must be lower.' },
        { text: 'The peak doubles in speed, from about $422$ to $844\\ \\text{m/s}$', why: 'Speeds scale with $\\sqrt{T}$, not $T$. Doubling $T$ multiplies $u_{\\text{mp}}$ by $\\sqrt{2} = 1.41$, giving about $597\\ \\text{m/s}$.' },
        { text: 'Nothing changes; the distribution depends only on the molar mass', why: 'Both $T$ and $M$ appear in $f(u)$, always in the ratio $T/M$.' },
      ],
      explanation: 'Every characteristic speed is proportional to $\\sqrt{T/M}$. Doubling $T$ stretches the speed axis by $\\sqrt{2}$, and because $\\int_0^\\infty f(u)\\,du = 1$, stretching horizontally by $\\sqrt{2}$ forces the curve to shrink vertically by the same factor. Try it on the graph: set $T$ to 600.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student calculates the rms speed of $\\ce{O2}$ molecules at $25\\ ^\\circ\\text{C}$. Tap the first line that is wrong.',
      lines: [
        '$u_{\\text{rms}} = \\sqrt{3RT/M}$ with $R = 8.314\\ \\text{J/(mol·K)}$',
        '$T = 25 + 273.15 = 298.15\\ \\text{K}$',
        '$M = 31.998$ for $\\ce{O2}$',
        '$u_{\\text{rms}} = \\sqrt{3(8.314)(298.15)/31.998} = 15.2\\ \\text{m/s}$',
      ],
      errorLines: [3],
      explanation: 'A joule is $\\text{kg·m}^2/\\text{s}^2$, so with $R = 8.314\\ \\text{J/(mol·K)}$ the molar mass must be in **kg/mol**: $M = 0.031998\\ \\text{kg/mol}$. Then $u_{\\text{rms}} = \\sqrt{3(8.314)(298.15)/0.031998} = 482\\ \\text{m/s}$. The answer $15.2\\ \\text{m/s}$ is $\\sqrt{1000}$ times too small, and a quick sanity check (gas molecules move hundreds of m/s) would have flagged it.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Graham\'s law: effusion and diffusion',
      blocks: [
        {
          type: 'p',
          text: '[[gchem-effusion|Effusion]] is the escape of gas through a tiny hole into a vacuum, a hole so small that molecules pass one at a time without colliding on the way. The escape rate is proportional to how often molecules hit the hole, which is proportional to their average speed. Since $\\bar{u} \\propto 1/\\sqrt{M}$ at a given temperature:',
        },
        {
          type: 'theorem',
          name: 'Graham\'s law of effusion',
          tex: '\\frac{\\text{rate}_1}{\\text{rate}_2} = \\sqrt{\\frac{M_2}{M_1}} = \\frac{t_2}{t_1}',
          text: 'For two gases at the same temperature and pressure. The lighter gas effuses faster; the time to effuse a given amount is inversely proportional to the rate.',
        },
        {
          type: 'derivation',
          title: 'Why helium balloons go flat first',
          steps: [
            { tex: '\\frac{\\text{rate}_{\\ce{He}}}{\\text{rate}_{\\ce{N2}}} = \\sqrt{\\frac{M_{\\ce{N2}}}{M_{\\ce{He}}}} = \\sqrt{\\frac{28.014}{4.003}}', why: 'Graham\'s law: put the heavier gas\'s molar mass on top to get the faster gas\'s rate on top.' },
            { tex: '= \\sqrt{6.998} = 2.65', why: 'Evaluate.' },
          ],
          result: 'Helium escapes through the tiny pores of a latex balloon about $2.7$ times faster than air would (air averages $28.97\\ \\text{g/mol}$), so a helium balloon is limp by the next morning while an air-filled one lasts for days.',
        },
        {
          type: 'p',
          text: '**Diffusion** is the spreading of one gas through another. It is much slower than the molecular speeds suggest, because each molecule travels only about $70\\ \\text{nm}$ in room air (its *mean free path*) before a collision sends it off in a new direction: a random walk, not a straight dash. Lighter gases still diffuse faster, and Graham\'s law gives a reasonable first estimate.',
        },
        {
          type: 'figure',
          svg: FIG_TUBE,
          alt: 'A long glass tube with cotton soaked in ammonia at the left end and cotton soaked in hydrochloric acid at the right end. A white ring of ammonium chloride forms 59 percent of the way from the ammonia end, 41 percent from the HCl end.',
          caption: 'Ammonia ($17.0\\ \\text{g/mol}$) outpaces hydrogen chloride ($36.5\\ \\text{g/mol}$) by $\\sqrt{36.5/17.0} = 1.46$, so the gases meet nearer the HCl end, where $\\ce{NH3(g) + HCl(g) -> NH4Cl(s)}$ forms a white ring.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Thomas Graham measured effusion rates in the 1840s. A century later the same principle was applied on an enormous industrial scale to separate the isotopes of uranium. Because the isotopes differ so little in mass, the separation achieved in each pass is tiny, which is why that history is remembered mainly for its sheer size.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Under identical conditions, a sample of an unknown gas takes $1.59$ times as long to effuse as the same amount of $\\ce{N2}$ ($28.014\\ \\text{g/mol}$). What is the molar mass of the unknown? Give 3 significant figures.',
      hint: 'Time is inversely proportional to rate, so $\\frac{t_{\\text{unk}}}{t_{\\ce{N2}}} = \\sqrt{\\frac{M_{\\text{unk}}}{M_{\\ce{N2}}}}$. Square both sides.',
      label: '$M =$',
      unit: 'g/mol',
      answer: '28.014*1.59^2',
      answerTex: '70.8\\ \\text{g/mol}',
      tolerance: 0.1,
      explanation: 'Slower effusion means a heavier gas. $\\frac{t_{\\text{unk}}}{t_{\\ce{N2}}} = \\sqrt{\\frac{M_{\\text{unk}}}{M_{\\ce{N2}}}}$, so $M_{\\text{unk}} = 28.014 \\times 1.59^2 = 28.014 \\times 2.528 = 70.8\\ \\text{g/mol}$, consistent with chlorine, $\\ce{Cl2}$ ($70.90$). Forgetting to square gives $44.5$; dividing instead of multiplying gives a gas lighter than nitrogen, which cannot be right for a slower effuser.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'A gas in a box, in code',
      blocks: [
        {
          type: 'p',
          text: 'The derivation of $PV = \\tfrac{1}{3}Nm\\langle u^2\\rangle$ is an algorithm in disguise, so you can check it numerically. The program below moves 20 000 particles with random velocities through a unit cube with simple [[eulers-method|Euler]] steps, reflects them off the walls, and adds up the momentum delivered to the wall at $x = L$. Pressure is that total impulse divided by time and wall area.',
        },
        {
          type: 'code',
          title: 'gas_box.cpp',
          code: BOX_SIM,
          runnable: true,
          output: 'measured  PV/N        = 0.3322\nm <u_x^2>             = 0.3329\n(1/3) m <u^2>         = 0.3337\n',
          annotations: [
            { lines: '5-12', text: 'A fixed-seed generator so the run is reproducible. The velocities are uniform in $[-1, 1)$ on each axis, deliberately **not** Maxwellian: the derivation never assumed a particular distribution, only random directions.' },
            { lines: '38-49', text: 'One Euler step per particle per axis. A wall bounce reflects the position and flips that velocity component, exactly the elastic collision of the derivation.' },
            { lines: 47, text: 'After the flip $v_x < 0$, so $-v_x = |u_x|$ and the wall gains $2m|u_x|$ of momentum.' },
            { lines: '53-57', text: 'Average force per area, times $V/N$, compared with the two sides of the derivation. They agree to a fraction of a percent; the small differences come from the finite run time and finite sample.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Adding collisions gives Maxwell–Boltzmann for free',
          text: 'These particles never hit each other, so they keep their initial (uniform) speed distribution forever. Add elastic particle–particle collisions, as in a 2D billiards or "hard disks" simulation, and any starting distribution relaxes on its own to the Maxwell–Boltzmann shape. Plot a histogram of speeds every few hundred frames and you can watch it happen: a nice weekend project, and the same collision code that drives physics in games.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'At the same temperature, hydrogen molecules and oxygen molecules have the same average speed.',
      answer: false,
      explanation: 'They have the same average **kinetic energy**, $\\tfrac{3}{2}k_BT$ per molecule. Since $\\tfrac{1}{2}mu^2$ is the same, the lighter molecule must move faster: $u_{\\text{rms}} \\propto 1/\\sqrt{M}$, so hydrogen ($2.016$) is $\\sqrt{31.998/2.016} = 3.98$ times faster than oxygen at any temperature, about $1921$ versus $482\\ \\text{m/s}$ at $25\\ ^\\circ\\text{C}$.',
    },
  ],
  takeaways: [
    'The KMT models a gas as point particles in random, isotropic motion with elastic collisions and no attractions.',
    'Momentum transfer at the walls gives $PV = \\tfrac{1}{3}Nm\\langle u^2\\rangle$; the $\\tfrac{1}{3}$ comes from sharing motion equally among three axes.',
    'Comparing with $PV = nRT$: the average translational kinetic energy is $\\tfrac{3}{2}RT$ per mole ($\\tfrac{3}{2}k_BT$ per molecule), the same for every gas. Temperature measures molecular motion.',
    '$u_{\\text{rms}} = \\sqrt{3RT/M}$ with $M$ in kg/mol; speeds of hundreds to thousands of m/s, scaling as $\\sqrt{T/M}$.',
    'The Maxwell–Boltzmann distribution has area 1; it shifts right and flattens as $T$ rises or $M$ falls, with $u_{\\text{mp}} : \\bar{u} : u_{\\text{rms}} = 1 : 1.128 : 1.225$.',
    'Graham\'s law: $\\text{rate}_1/\\text{rate}_2 = \\sqrt{M_2/M_1}$ for effusion (and approximately diffusion); effusion times measure molar masses.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 9: Gases',
      url: 'https://openstax.org/books/chemistry-2e/pages/9-introduction',
      source: 'openstax',
      note: 'Section 9.4 covers effusion and diffusion (Graham\'s law); section 9.5 presents the kinetic-molecular theory and the speed distribution.',
    },
    {
      title: 'Wikipedia — Kinetic theory of gases',
      url: 'https://en.wikipedia.org/wiki/Kinetic_theory_of_gases',
      source: 'wikipedia',
      note: 'The pressure derivation from this lesson, plus mean free path, viscosity and thermal conductivity from the same model.',
    },
    {
      title: 'Wikipedia — Maxwell–Boltzmann distribution',
      url: 'https://en.wikipedia.org/wiki/Maxwell%E2%80%93Boltzmann_distribution',
      source: 'wikipedia',
      note: 'Full derivations of the most probable, mean and rms speeds, and the distribution in one, two and three dimensions.',
    },
    {
      title: 'Wikipedia — Graham\'s law',
      url: 'https://en.wikipedia.org/wiki/Graham%27s_law',
      source: 'wikipedia',
      note: 'History, worked examples and the distinction between effusion and diffusion.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The free "Gas Properties" and "Diffusion" simulations show live speed histograms and let you race light against heavy particles.',
    },
  ],
};
