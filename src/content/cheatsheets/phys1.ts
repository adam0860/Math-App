import type { CheatSheet } from '../types';

export const phys1CheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-units-vectors',
    title: 'Units, Dimensions and Vectors',
    course: 'phys1',
    icon: '📏',
    description: 'SI units and prefixes, dimensional analysis, vector components, unit vectors, and the dot and cross products.',
    sections: [
      {
        title: 'Units and dimensions',
        items: [
          {
            label: 'SI base units (mechanics)',
            text: 'Length: meter (m). Mass: kilogram (kg). Time: second (s). Derived: $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m/s}^2$, $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$, $1\\,\\text{W} = 1\\,\\text{J/s}$, $1\\,\\text{Pa} = 1\\,\\text{N/m}^2$.',
          },
          {
            label: 'Prefixes',
            text: 'G $= 10^{9}$, M $= 10^{6}$, k $= 10^{3}$, c $= 10^{-2}$, m $= 10^{-3}$, μ $= 10^{-6}$, n $= 10^{-9}$. Convert with factors equal to $1$: $72\\,\\text{km/h} \\times \\frac{1000\\,\\text{m}}{1\\,\\text{km}} \\times \\frac{1\\,\\text{h}}{3600\\,\\text{s}} = 20\\,\\text{m/s}$.',
          },
          {
            label: '[[dimensional-analysis|Dimensional analysis]]',
            tex: '[v] = \\mathsf{L}\\,\\mathsf{T}^{-1}, \\quad [a] = \\mathsf{L}\\,\\mathsf{T}^{-2}, \\quad [F] = \\mathsf{M}\\,\\mathsf{L}\\,\\mathsf{T}^{-2}, \\quad [E] = \\mathsf{M}\\,\\mathsf{L}^2\\,\\mathsf{T}^{-2}',
            text: 'Both sides of an equation, and every term in a sum, must have the same dimensions. Arguments of $\\sin$, $\\exp$ and $\\ln$ must be dimensionless.',
          },
          {
            label: '[[significant-figures|Significant figures]]',
            text: 'Products and quotients: keep the fewest significant figures of the inputs. Sums and differences: keep the fewest decimal places. Round only the final answer.',
          },
        ],
      },
      {
        title: 'Components',
        items: [
          {
            label: '[[vector-components|Components]] from magnitude and angle',
            tex: 'A_x = A\\cos\\theta, \\qquad A_y = A\\sin\\theta',
            text: '$\\theta$ measured counterclockwise from the $+x$ axis.',
          },
          {
            label: 'Magnitude and direction from components',
            tex: 'A = \\sqrt{A_x^2 + A_y^2}, \\qquad \\theta = \\operatorname{atan2}(A_y, A_x)',
            text: 'Plain $\\arctan(A_y/A_x)$ is off by $180^\\circ$ when $A_x < 0$; `std::atan2(y, x)` handles every quadrant.',
          },
          {
            label: '[[unit-vector|Unit vectors]]',
            tex: '\\vec{A} = A_x\\hat{\\imath} + A_y\\hat{\\jmath} + A_z\\hat{k}, \\qquad \\hat{A} = \\frac{\\vec{A}}{A}',
          },
          { label: 'Adding vectors', tex: '\\vec{R} = \\vec{A} + \\vec{B} \\iff R_x = A_x + B_x,\\ R_y = A_y + B_y,\\ R_z = A_z + B_z' },
        ],
      },
      {
        title: 'Products',
        items: [
          {
            label: '[[dot-product|Dot product]]',
            tex: '\\vec{A}\\cdot\\vec{B} = AB\\cos\\phi = A_xB_x + A_yB_y + A_zB_z',
            text: 'A scalar. Zero for perpendicular vectors. Used for work $W = \\vec{F}\\cdot\\vec{d}$ and power $P = \\vec{F}\\cdot\\vec{v}$.',
          },
          {
            label: '[[vector-projection|Projection]] of $\\vec{A}$ on $\\vec{B}$',
            tex: '\\operatorname{proj}_{\\vec{B}}\\vec{A} = (\\vec{A}\\cdot\\hat{B})\\,\\hat{B}',
          },
          {
            label: '[[cross-product|Cross product]]',
            tex: '\\vec{A} \\times \\vec{B} = (A_yB_z - A_zB_y)\\hat{\\imath} + (A_zB_x - A_xB_z)\\hat{\\jmath} + (A_xB_y - A_yB_x)\\hat{k}',
            text: 'Magnitude $AB\\sin\\phi$, direction by the right-hand rule, $\\vec{B} \\times \\vec{A} = -\\vec{A} \\times \\vec{B}$. Used for torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ and angular momentum $\\vec{L} = \\vec{r} \\times \\vec{p}$.',
          },
          { label: 'Unit-vector products', tex: '\\hat{\\imath} \\times \\hat{\\jmath} = \\hat{k}, \\quad \\hat{\\jmath} \\times \\hat{k} = \\hat{\\imath}, \\quad \\hat{k} \\times \\hat{\\imath} = \\hat{\\jmath}, \\quad \\hat{\\imath}\\cdot\\hat{\\imath} = 1,\\ \\hat{\\imath}\\cdot\\hat{\\jmath} = 0' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-kinematics',
    title: 'Kinematics in 1D and 2D',
    course: 'phys1',
    icon: '🏃',
    description: 'Velocity and acceleration as derivatives, the constant-acceleration equations, free fall, projectiles, circular motion and relative velocity.',
    sections: [
      {
        title: 'Definitions',
        items: [
          {
            label: '[[velocity|Velocity]] and [[acceleration|acceleration]]',
            tex: 'v_x = \\frac{dx}{dt}, \\qquad a_x = \\frac{dv_x}{dt} = \\frac{d^2x}{dt^2}',
            text: 'Slopes of the $x(t)$ and $v_x(t)$ graphs.',
          },
          {
            label: 'Going back by integration',
            tex: 'v_x(t) = v_{0x} + \\int_0^t a_x\\,dt\', \\qquad x(t) = x_0 + \\int_0^t v_x\\,dt\'',
            text: 'Displacement is the signed area under the $v_x(t)$ graph.',
          },
          { label: '[[phys-average-velocity|Average velocity]]', tex: 'v_{\\text{avg},x} = \\frac{\\Delta x}{\\Delta t}, \\qquad \\vec{v}_{\\text{avg}} = \\frac{\\Delta\\vec{r}}{\\Delta t}' },
        ],
      },
      {
        title: 'Constant acceleration',
        items: [
          {
            label: '[[phys-kinematic-equations|Kinematic equations]]',
            tex: '\\begin{aligned} v_x &= v_{0x} + a_xt \\\\ x &= x_0 + v_{0x}t + \\tfrac12 a_xt^2 \\\\ v_x^2 &= v_{0x}^2 + 2a_x\\,\\Delta x \\\\ \\Delta x &= \\tfrac12(v_{0x} + v_x)\\,t \\end{aligned}',
            text: 'Valid **only** when $a_x$ is constant. Each equation omits one of $t$, $\\Delta x$, $v_x$, $v_{0x}$.',
          },
          {
            label: '[[phys-free-fall|Free fall]]',
            tex: 'a_y = -g, \\qquad g = 9.80\\,\\text{m/s}^2 \\ (y \\text{ up})',
            text: 'Same acceleration for every mass (no drag). At the top of a throw $v_y = 0$ but $a_y = -g$ still.',
          },
        ],
      },
      {
        title: 'Projectiles (no drag, $y$ up)',
        items: [
          {
            label: '[[projectile-motion|Position]]',
            tex: 'x = x_0 + (v_0\\cos\\theta)\\,t, \\qquad y = y_0 + (v_0\\sin\\theta)\\,t - \\tfrac12 gt^2',
            text: 'Horizontal: constant velocity. Vertical: free fall. Same $t$ in both.',
          },
          {
            label: 'Level ground: [[phys-horizontal-range|range]], height, time',
            tex: 'R = \\frac{v_0^2\\sin 2\\theta}{g}, \\qquad H = \\frac{v_0^2\\sin^2\\theta}{2g}, \\qquad t_{\\text{flight}} = \\frac{2v_0\\sin\\theta}{g}',
            text: 'Maximum range at $45^\\circ$; complementary angles give equal ranges. Real trajectories with drag fall short and come down steeper.',
          },
          { label: 'Path', tex: 'y = x\\tan\\theta - \\frac{g\\,x^2}{2v_0^2\\cos^2\\theta}', text: 'A parabola (launch from the origin).' },
        ],
      },
      {
        title: 'Circular and relative motion',
        items: [
          {
            label: '[[phys-uniform-circular-motion|Uniform circular motion]]',
            tex: 'a_c = \\frac{v^2}{r} = \\omega^2r, \\qquad v = \\omega r = \\frac{2\\pi r}{T}',
            text: 'The [[phys-centripetal-acceleration|centripetal acceleration]] points toward the center.',
          },
          {
            label: 'Nonuniform circular motion',
            tex: 'a_t = \\frac{dv}{dt}, \\qquad a = \\sqrt{a_c^2 + a_t^2}',
            text: '[[phys-tangential-acceleration|Tangential acceleration]] changes the speed; centripetal changes the direction.',
          },
          {
            label: '[[phys-relative-velocity|Relative velocity]]',
            tex: '\\vec{v}_{A/C} = \\vec{v}_{A/B} + \\vec{v}_{B/C}, \\qquad \\vec{v}_{B/A} = -\\vec{v}_{A/B}',
            text: 'Boat in a current, plane in a wind: add the velocity relative to the medium and the medium\'s velocity.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-newton',
    title: 'Newton\'s Laws, Friction and Drag',
    course: 'phys1',
    icon: '🍎',
    description: 'The three laws, weight and normal force, static and kinetic friction, inclines and pulleys, drag and terminal velocity, and the dynamics of circular motion.',
    sections: [
      {
        title: 'The laws',
        items: [
          { label: '[[phys-newtons-first-law|First law]]', text: 'If $\\sum\\vec{F} = \\vec{0}$, the velocity is constant (in an inertial frame). No force is needed to **keep** something moving.' },
          { label: '[[phys-newtons-second-law|Second law]]', tex: '\\sum\\vec{F} = m\\vec{a} \\iff \\sum F_x = ma_x,\\ \\sum F_y = ma_y' },
          {
            label: '[[phys-newtons-third-law|Third law]]',
            tex: '\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}',
            text: 'The pair acts on **different** bodies, so the forces never cancel each other.',
          },
          { label: '[[phys-weight|Weight]]', tex: 'w = mg', text: 'The [[phys-normal-force|normal force]] is whatever the surface must supply: $n = mg$ only on a level surface with no other vertical forces and no vertical acceleration.' },
          { label: '[[phys-apparent-weight|Apparent weight]] (elevator, $y$ up)', tex: 'n = m(g + a_y)' },
        ],
      },
      {
        title: 'Friction and drag',
        items: [
          {
            label: '[[phys-static-friction|Static]] and [[phys-kinetic-friction|kinetic]] friction',
            tex: 'f_s \\le \\mu_s n, \\qquad f_k = \\mu_k n',
            text: 'Static friction is only as large as needed to prevent slipping. Usually $\\mu_k < \\mu_s$.',
          },
          {
            label: 'Incline of angle $\\theta$',
            tex: 'n = mg\\cos\\theta, \\qquad a_{\\text{down}} = g(\\sin\\theta - \\mu_k\\cos\\theta)',
            text: 'A block at rest starts to slip when $\\tan\\theta > \\mu_s$. (The formula for $n$ assumes no other forces perpendicular to the surface.)',
          },
          {
            label: '[[phys-atwood-machine|Atwood machine]] (ideal pulley, $m_1 > m_2$)',
            tex: 'a = \\frac{m_1 - m_2}{m_1 + m_2}\\,g, \\qquad T = \\frac{2m_1m_2}{m_1 + m_2}\\,g',
          },
          {
            label: 'Quadratic [[phys-drag-force|drag]] and [[phys-terminal-velocity|terminal velocity]]',
            tex: 'F_D = \\tfrac12 C\\rho Av^2, \\qquad v_t = \\sqrt{\\frac{2mg}{C\\rho A}}',
          },
          {
            label: 'Linear drag $F = -bv$, falling from rest',
            tex: 'v(t) = v_t\\left(1 - e^{-t/\\tau}\\right), \\qquad v_t = \\frac{mg}{b}, \\quad \\tau = \\frac{m}{b}',
          },
        ],
      },
      {
        title: 'Circular dynamics',
        items: [
          {
            label: '[[phys-centripetal-force|Net radial force]]',
            tex: '\\sum F_r = \\frac{mv^2}{r}',
            text: 'Not a new force: tension, gravity, normal force or friction supply it. There is no outward "centrifugal" force in an inertial frame.',
          },
          { label: 'Flat curve (friction)', tex: 'v_{\\max} = \\sqrt{\\mu_s g r}' },
          { label: 'Banked curve, no friction', tex: '\\tan\\theta = \\frac{v^2}{rg}' },
          { label: 'Top of a vertical loop', tex: 'v_{\\min} = \\sqrt{gr}', text: 'At this speed gravity alone supplies the centripetal force ($n = 0$).' },
        ],
      },
      {
        title: 'Strategy',
        items: [
          {
            label: 'Solving a force problem',
            text: '(1) Choose the system and axes (one axis along the acceleration). (2) Draw a [[phys-free-body-diagram|free-body diagram]]. (3) Write $\\sum F = ma$ per axis. (4) Add constraints ($f \\le \\mu n$, shared $a$ for connected bodies). (5) Solve symbolically, then substitute. (6) Check units, signs and limits ($\\mu \\to 0$, $\\theta \\to 0$).',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-energy',
    title: 'Work, Energy and Power',
    course: 'phys1',
    icon: '⚡',
    description: 'Work as an integral, kinetic energy and the work–energy theorem, power, potential energy and conservative forces, and conservation of energy with friction.',
    sections: [
      {
        title: 'Work and kinetic energy',
        items: [
          {
            label: '[[work|Work]]',
            tex: 'W = \\int_{\\vec{r}_i}^{\\vec{r}_f} \\vec{F}\\cdot d\\vec{r}, \\qquad W = Fd\\cos\\phi \\ \\text{(constant force)}',
            text: 'Positive when the force has a component along the motion; zero for forces perpendicular to it (normal force on a level path, centripetal force).',
          },
          { label: 'Spring ([[hookes-law|Hooke\'s law]])', tex: 'F_x = -kx, \\qquad W_{\\text{spring}} = \\tfrac12 kx_i^2 - \\tfrac12 kx_f^2' },
          { label: '[[phys-kinetic-energy|Kinetic energy]]', tex: 'K = \\tfrac12 mv^2 = \\frac{p^2}{2m}' },
          { label: '[[phys-work-energy-theorem|Work–energy theorem]]', tex: 'W_{\\text{net}} = \\Delta K' },
          {
            label: '[[phys-power|Power]]',
            tex: 'P = \\frac{dW}{dt} = \\vec{F}\\cdot\\vec{v}, \\qquad P_{\\text{avg}} = \\frac{W}{\\Delta t}',
            text: '$1\\,\\text{hp} \\approx 746\\,\\text{W}$.',
          },
        ],
      },
      {
        title: 'Potential energy',
        items: [
          {
            label: '[[phys-potential-energy|Potential energy]] of a [[phys-conservative-force|conservative force]]',
            tex: '\\Delta U = -W_{\\text{cons}}, \\qquad F_x = -\\frac{dU}{dx}',
            text: 'Forces point "downhill" on the $U(x)$ graph. Equilibria where $dU/dx = 0$: stable at minima, unstable at maxima.',
          },
          { label: 'Gravity near Earth, spring', tex: 'U_g = mgy, \\qquad U_s = \\tfrac12 kx^2' },
          {
            label: '[[phys-turning-point|Turning points]]',
            tex: 'U(x) = E',
            text: 'Motion is allowed only where $U(x) \\le E$, since $K = E - U \\ge 0$.',
          },
        ],
      },
      {
        title: 'Conservation of energy',
        items: [
          {
            label: '[[phys-mechanical-energy|Mechanical energy]]',
            tex: 'K_i + U_i + W_{\\text{nc}} = K_f + U_f',
            text: 'With only conservative forces doing work, $W_{\\text{nc}} = 0$ and $E_{\\text{mech}} = K + U$ is constant.',
          },
          {
            label: 'Kinetic friction',
            tex: '\\Delta E_{\\text{th}} = f_k\\,d, \\qquad \\Delta K + \\Delta U + \\Delta E_{\\text{th}} = W_{\\text{ext}}',
            text: '[[phys-thermal-energy|Thermal energy]] produced by sliding a distance $d$.',
          },
          { label: 'Speed after a drop $h$ (frictionless)', tex: 'v = \\sqrt{v_0^2 + 2gh}', text: 'Independent of the path shape and of the mass.' },
          { label: 'Frictionless loop of radius $R$', tex: 'h_{\\min} = \\tfrac52 R', text: 'Starting height (from rest, sliding) to just make it over the top.' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-momentum',
    title: 'Momentum and Collisions',
    course: 'phys1',
    icon: '💥',
    description: 'Momentum and impulse, conservation in isolated systems, elastic and inelastic collisions, the coefficient of restitution, center of mass and rockets.',
    sections: [
      {
        title: 'Momentum and impulse',
        items: [
          { label: '[[phys-momentum|Momentum]]', tex: '\\vec{p} = m\\vec{v}, \\qquad \\sum\\vec{F} = \\frac{d\\vec{p}}{dt}' },
          {
            label: '[[phys-impulse|Impulse]] and the [[phys-impulse-momentum-theorem|impulse–momentum theorem]]',
            tex: '\\vec{J} = \\int_{t_i}^{t_f} \\vec{F}\\,dt = \\Delta\\vec{p}, \\qquad \\vec{F}_{\\text{avg}} = \\frac{\\Delta\\vec{p}}{\\Delta t}',
            text: 'Area under the $F(t)$ graph. Longer stopping time, smaller average force (airbags, rolling with a fall).',
          },
          {
            label: '[[phys-conservation-of-momentum|Conservation]]',
            tex: '\\sum\\vec{F}_{\\text{ext}} = \\vec{0} \\implies \\vec{P} = \\sum m_i\\vec{v}_i = \\text{const}',
            text: 'Holds per component. Recoil from rest: $m_bv_b = -m_rv_r$.',
          },
        ],
      },
      {
        title: 'Collisions',
        items: [
          {
            label: '[[phys-coefficient-of-restitution|Coefficient of restitution]] (1D)',
            tex: 'e = -\\frac{v_2\' - v_1\'}{v_2 - v_1}',
            text: '$e = 1$ elastic, $0 < e < 1$ inelastic, $e = 0$ perfectly inelastic (stick together).',
          },
          {
            label: '[[phys-elastic-collision|Elastic]], 1D',
            tex: 'v_1\' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 + \\frac{2m_2}{m_1 + m_2}v_2, \\qquad v_2\' = \\frac{2m_1}{m_1 + m_2}v_1 + \\frac{m_2 - m_1}{m_1 + m_2}v_2',
            text: 'Equal masses swap velocities. Kinetic energy is conserved.',
          },
          {
            label: '[[phys-inelastic-collision|Perfectly inelastic]]',
            tex: 'v\' = \\frac{m_1v_1 + m_2v_2}{m_1 + m_2}',
            text: 'Momentum is conserved, kinetic energy is not. Target at rest: fraction of $K$ lost $= \\frac{m_2}{m_1 + m_2}$.',
          },
        ],
      },
      {
        title: 'Systems',
        items: [
          {
            label: '[[calc2-center-of-mass|Center of mass]]',
            tex: '\\vec{r}_{\\text{cm}} = \\frac{\\sum m_i\\vec{r}_i}{M}, \\qquad \\vec{r}_{\\text{cm}} = \\frac{1}{M}\\int \\vec{r}\\,dm',
          },
          { label: 'Motion of the center of mass', tex: 'M\\vec{a}_{\\text{cm}} = \\sum\\vec{F}_{\\text{ext}}, \\qquad \\vec{P} = M\\vec{v}_{\\text{cm}}', text: 'Internal forces (an explosion) cannot change the motion of the center of mass.' },
          { label: '[[phys-rocket-equation|Rocket equation]]', tex: '\\Delta v = v_{\\text{ex}}\\ln\\frac{m_0}{m_f}' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-rotation',
    title: 'Rotation and Angular Momentum',
    course: 'phys1',
    icon: '🌀',
    description: 'Rotational kinematics, moments of inertia, torque and the rotational second law, rolling, angular momentum and its conservation, and static equilibrium.',
    sections: [
      {
        title: 'Rotational kinematics',
        items: [
          {
            label: '[[phys-angular-velocity|Angular velocity]] and [[phys-angular-acceleration|acceleration]]',
            tex: '\\theta = \\frac{s}{r}, \\quad \\omega = \\frac{d\\theta}{dt}, \\quad \\alpha = \\frac{d\\omega}{dt}; \\qquad v = r\\omega, \\quad a_t = r\\alpha, \\quad a_c = r\\omega^2',
            text: 'Angles in [[radian|radians]].',
          },
          {
            label: 'Constant $\\alpha$',
            tex: '\\omega = \\omega_0 + \\alpha t, \\quad \\theta = \\theta_0 + \\omega_0t + \\tfrac12\\alpha t^2, \\quad \\omega^2 = \\omega_0^2 + 2\\alpha\\,\\Delta\\theta',
          },
        ],
      },
      {
        title: 'Moment of inertia',
        items: [
          { label: '[[phys-moment-of-inertia|Definition]]', tex: 'I = \\sum m_ir_i^2 = \\int r^2\\,dm' },
          {
            label: 'Common shapes (mass $M$, about the center unless noted)',
            text: 'Hoop or thin cylindrical shell: $MR^2$. Solid disk or cylinder: $\\tfrac12 MR^2$. Solid sphere: $\\tfrac25 MR^2$. Thin spherical shell: $\\tfrac23 MR^2$. Thin rod, center: $\\tfrac{1}{12}ML^2$. Thin rod, end: $\\tfrac13 ML^2$.',
          },
          { label: '[[phys-parallel-axis-theorem|Parallel-axis theorem]]', tex: 'I = I_{\\text{cm}} + Md^2' },
          { label: '[[phys-rotational-kinetic-energy|Rotational kinetic energy]]', tex: 'K_{\\text{rot}} = \\tfrac12 I\\omega^2' },
        ],
      },
      {
        title: 'Torque and dynamics',
        items: [
          {
            label: '[[la-torque|Torque]]',
            tex: '\\vec{\\tau} = \\vec{r} \\times \\vec{F}, \\qquad \\tau = rF\\sin\\phi = r_{\\perp}F',
            text: '$r_\\perp$ is the [[phys-lever-arm|lever arm]]. Counterclockwise positive.',
          },
          { label: '[[phys-rotational-second-law|Second law for rotation]]', tex: '\\sum\\tau = I\\alpha' },
          { label: 'Rotational work and power', tex: 'W = \\int \\tau\\,d\\theta, \\qquad P = \\tau\\omega' },
          {
            label: '[[phys-rolling-without-slipping|Rolling without slipping]]',
            tex: 'v_{\\text{cm}} = R\\omega, \\quad K = \\tfrac12 Mv_{\\text{cm}}^2 + \\tfrac12 I_{\\text{cm}}\\omega^2, \\quad a_{\\text{incline}} = \\frac{g\\sin\\theta}{1 + I_{\\text{cm}}/MR^2}',
            text: 'The contact point is momentarily at rest; static friction does no work.',
          },
        ],
      },
      {
        title: 'Angular momentum and equilibrium',
        items: [
          {
            label: '[[phys-angular-momentum|Angular momentum]]',
            tex: '\\vec{L} = \\vec{r} \\times \\vec{p}, \\qquad L = I\\omega \\ \\text{(rigid body, fixed axis)}, \\qquad \\sum\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}',
          },
          {
            label: '[[phys-conservation-of-angular-momentum|Conservation]]',
            tex: '\\sum\\vec{\\tau}_{\\text{ext}} = \\vec{0} \\implies I_i\\omega_i = I_f\\omega_f',
            text: 'A skater pulling in her arms spins faster; her kinetic energy increases (she does work).',
          },
          { label: 'Gyroscope [[phys-precession|precession]]', tex: '\\Omega = \\frac{\\tau}{L} = \\frac{Mgr}{I\\omega}' },
          {
            label: '[[phys-static-equilibrium|Static equilibrium]]',
            tex: '\\sum\\vec{F} = \\vec{0}, \\qquad \\sum\\vec{\\tau} = \\vec{0} \\ \\text{(about any point)}',
            text: 'Choose the pivot where unknown forces act, to remove them from the torque equation.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-gravitation-oscillations',
    title: 'Gravitation and Oscillations',
    course: 'phys1',
    icon: '🪐',
    description: 'Universal gravitation, gravitational potential energy, orbits, escape speed and Kepler\'s laws; simple harmonic motion, pendulums, damping and resonance.',
    sections: [
      {
        title: 'Gravitation',
        items: [
          {
            label: '[[phys-newtons-law-of-gravitation|Universal gravitation]]',
            tex: 'F = \\frac{Gm_1m_2}{r^2}, \\qquad G = 6.674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2',
          },
          { label: 'Surface [[phys-gravitational-field|gravity]]', tex: 'g = \\frac{GM}{R^2}' },
          {
            label: '[[phys-universal-gravitational-potential-energy|Potential energy]]',
            tex: 'U = -\\frac{Gm_1m_2}{r}',
            text: 'Zero at infinite separation. Near the surface it reduces to $\\Delta U \\approx mg\\,\\Delta y$.',
          },
          {
            label: 'Circular [[phys-orbital-speed|orbit]]',
            tex: 'v = \\sqrt{\\frac{GM}{r}}, \\qquad T^2 = \\frac{4\\pi^2}{GM}\\,r^3, \\qquad E = -\\frac{GMm}{2r}',
          },
          { label: 'Elliptical orbit energy', tex: 'E = -\\frac{GMm}{2a}', text: '$a$ is the [[phys-semi-major-axis|semi-major axis]]; Kepler\'s third law holds with $r \\to a$.' },
          { label: '[[phys-escape-speed|Escape speed]]', tex: 'v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}' },
          {
            label: '[[phys-keplers-laws|Kepler\'s laws]]',
            text: '(1) Orbits are ellipses with the central body at a focus. (2) Equal areas in equal times (angular momentum conservation). (3) $T^2 \\propto a^3$.',
          },
        ],
      },
      {
        title: 'Simple harmonic motion',
        items: [
          {
            label: '[[phys-simple-harmonic-motion|SHM]]',
            tex: '\\frac{d^2x}{dt^2} = -\\omega^2x \\implies x = A\\cos(\\omega t + \\phi), \\qquad \\omega = \\sqrt{\\frac{k}{m}} = 2\\pi f = \\frac{2\\pi}{T}',
          },
          { label: 'Velocity and acceleration', tex: 'v_{\\max} = \\omega A, \\qquad a_{\\max} = \\omega^2A, \\qquad v = \\pm\\omega\\sqrt{A^2 - x^2}' },
          { label: 'Energy', tex: 'E = \\tfrac12 kA^2 = \\tfrac12 mv^2 + \\tfrac12 kx^2' },
          {
            label: '[[phys-simple-pendulum|Simple]] and [[phys-physical-pendulum|physical]] pendulum (small angles)',
            tex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}, \\qquad T = 2\\pi\\sqrt{\\frac{I}{mgd}}',
            text: 'From $\\sin\\theta \\approx \\theta$; $d$ is the pivot-to-center-of-mass distance.',
          },
        ],
      },
      {
        title: 'Damping and resonance',
        items: [
          {
            label: '[[damped-oscillation|Damped oscillator]]',
            tex: 'm\\ddot{x} + b\\dot{x} + kx = 0 \\implies x = Ae^{-bt/2m}\\cos(\\omega_dt + \\phi), \\quad \\omega_d = \\sqrt{\\omega_0^2 - \\left(\\frac{b}{2m}\\right)^2}',
            text: '[[phys-critical-damping|Critical damping]] at $b = 2\\sqrt{km}$: fastest return without overshoot (door closers, camera springs).',
          },
          {
            label: 'Driven oscillator, steady state',
            tex: 'A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (b\\omega/m)^2}}',
            text: 'For light damping the amplitude peaks near $\\omega = \\omega_0$: [[phys-resonance|resonance]].',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-sheet-waves-game-physics',
    title: 'Waves, Sound and Game Physics',
    course: 'phys1',
    icon: '🌊',
    description: 'Traveling and standing waves, sound intensity, beats and the Doppler effect; then numerical integrators, timestep stability and impulse-based collision response.',
    sections: [
      {
        title: 'Traveling waves',
        items: [
          {
            label: 'Sinusoidal wave',
            tex: 'y(x, t) = A\\sin(kx - \\omega t + \\phi), \\qquad k = \\frac{2\\pi}{\\lambda}, \\quad \\omega = 2\\pi f, \\quad v = f\\lambda = \\frac{\\omega}{k}',
            text: '$kx - \\omega t$ moves toward $+x$; $kx + \\omega t$ toward $-x$. [[phys-wave-number|Wave number]] $k$ in rad/m.',
          },
          { label: 'Speed on a string', tex: 'v = \\sqrt{\\frac{F_T}{\\mu}}', text: '[[phys-linear-mass-density|Linear density]] $\\mu = m/L$. The medium sets $v$; the source sets $f$.' },
          { label: '[[phys-wave-equation|Wave equation]]', tex: '\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2 y}{\\partial t^2}' },
          { label: 'Transverse velocity and power', tex: 'v_y = \\frac{\\partial y}{\\partial t}, \\qquad P_{\\text{avg}} = \\tfrac12\\mu v\\,\\omega^2A^2' },
        ],
      },
      {
        title: 'Superposition and sound',
        items: [
          { label: '[[phys-interference|Interference]]', tex: 'A_{\\text{res}} = 2A\\left|\\cos\\frac{\\phi}{2}\\right|' },
          { label: '[[phys-standing-wave|Standing wave]]', tex: 'y = 2A\\sin(kx)\\cos(\\omega t)', text: '[[phys-node-antinode|Nodes]] $\\lambda/2$ apart.' },
          {
            label: '[[phys-harmonic|Harmonics]]',
            tex: 'f_n = n\\,\\frac{v}{2L} \\ (\\text{string, open pipe}), \\qquad f_n = n\\,\\frac{v}{4L},\\ n \\text{ odd} \\ (\\text{closed pipe})',
          },
          { label: 'Speed of sound', tex: 'v = \\sqrt{\\frac{B}{\\rho}}, \\qquad v_{\\text{air}} \\approx 343\\,\\text{m/s at } 20\\,^{\\circ}\\text{C}' },
          {
            label: 'Intensity and [[phys-sound-intensity-level|decibels]]',
            tex: 'I = \\frac{P}{4\\pi r^2}, \\qquad \\beta = 10\\log_{10}\\frac{I}{I_0}\\ \\text{dB}, \\quad I_0 = 10^{-12}\\,\\text{W/m}^2',
            text: '$\\times 10$ intensity: $+10\\,\\text{dB}$. Double the distance: $-6\\,\\text{dB}$. Audio gain: $10^{\\text{dB}/20}$.',
          },
          { label: '[[phys-beats|Beats]]', tex: 'f_{\\text{beat}} = |f_1 - f_2|' },
          {
            label: '[[phys-doppler-effect|Doppler effect]]',
            tex: 'f\' = f\\,\\frac{v + v_o}{v - v_s}',
            text: '$v_o$, $v_s$ positive when moving **toward** the other.',
          },
        ],
      },
      {
        title: 'Integrating motion',
        items: [
          {
            label: 'Explicit [[eulers-method|Euler]]',
            code: 'x += v * h;\nv += a(x_old) * h;',
            lang: 'cpp',
            text: 'First order. Spring energy grows by $1 + \\omega^2h^2$ every step: unstable for any $h$.',
          },
          {
            label: '[[semi-implicit-euler|Semi-implicit Euler]]',
            code: 'v += a(x) * h;   // velocity first\nx += v * h;      // then position',
            lang: 'cpp',
            text: 'First order, [[phys-symplectic-integrator|symplectic]]: bounded energy error. Used by most game engines.',
          },
          {
            label: '[[phys-velocity-verlet|Velocity Verlet]]',
            tex: 'x_{n+1} = x_n + v_nh + \\tfrac12 a_nh^2, \\qquad v_{n+1} = v_n + \\tfrac12(a_n + a_{n+1})h',
            text: 'Second order, symplectic, exact for constant acceleration.',
          },
          {
            label: '[[phys-rk4|RK4]]',
            tex: '\\mathbf{y}_{n+1} = \\mathbf{y}_n + \\tfrac{h}{6}(\\mathbf{k}_1 + 2\\mathbf{k}_2 + 2\\mathbf{k}_3 + \\mathbf{k}_4)',
            text: 'Fourth order, four force evaluations per step.',
          },
          {
            label: 'Stability on a spring',
            tex: '\\omega h < 2 \\ \\text{(semi-implicit Euler, Verlet)}, \\qquad \\omega = \\sqrt{k/m}',
            text: 'Run physics at a [[phys-fixed-timestep|fixed timestep]] below this limit; substep stiff springs.',
          },
        ],
      },
      {
        title: 'Collisions in code',
        items: [
          {
            label: 'Detection',
            tex: '|\\vec{c}_B - \\vec{c}_A| < r_A + r_B, \\qquad \\text{AABBs: intervals overlap on every axis}',
            text: '[[phys-aabb|AABB]] tests in the [[phys-broad-phase|broad phase]], exact tests in the narrow phase.',
          },
          {
            label: '[[phys-impulse-response|Collision impulse]] (2D, with rotation)',
            tex: 'j = \\frac{-(1 + e)\\,\\vec{v}_{\\text{rel}}\\cdot\\hat{n}}{m_A^{-1} + m_B^{-1} + \\dfrac{(\\vec{r}_A \\times \\hat{n})^2}{I_A} + \\dfrac{(\\vec{r}_B \\times \\hat{n})^2}{I_B}}',
            text: 'Apply $-j\\hat{n}$ to $A$ and $+j\\hat{n}$ to $B$ (only if $\\vec{v}_{\\text{rel}}\\cdot\\hat{n} < 0$); $\\Delta\\omega = \\pm j(\\vec{r} \\times \\hat{n})/I$. Friction: $|j_t| \\le \\mu j$.',
          },
          {
            label: '[[phys-tunneling|Tunneling]] limit',
            tex: 'vh \\le w + 2r',
            text: 'Beyond it, use [[phys-ccd|continuous collision detection]] or ray casts.',
          },
        ],
      },
    ],
  },
];
