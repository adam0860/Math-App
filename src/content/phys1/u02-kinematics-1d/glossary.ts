import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'phys-particle-model',
    term: 'Particle Model',
    aliases: ['point particle', 'point mass'],
    course: 'phys1',
    category: 'Kinematics',
    short:
      'Treating a moving object as a single point with no size, shape or rotation, so its motion is fully described by one position.',
    long:
      'A car, a sprinter or a planet can be modeled as a particle whenever its size and orientation do not affect the motion being studied. The model fails when rotation or deformation matters (a spinning wheel, a ragdoll), which is why later units introduce rigid bodies. Game engines make the same choice: a projectile is often a point with a position and a velocity, while a vehicle needs a full rigid body.',
    see: ['phys-motion-diagram', 'position-vector'],
  },
  {
    id: 'phys-motion-diagram',
    term: 'Motion Diagram',
    aliases: ['strobe diagram'],
    course: 'phys1',
    category: 'Kinematics',
    short:
      'A sketch showing an object\'s position at equal time intervals, like overlaid frames of a video, usually with velocity arrows between successive dots and an acceleration arrow.',
    long:
      'Growing gaps between dots mean the object is speeding up; shrinking gaps mean it is slowing down; equal gaps mean constant velocity. The acceleration arrow points the way the velocity arrows are changing. Motion diagrams are the first step of a careful kinematics solution, before any equation is written.',
    see: ['phys-particle-model', 'velocity', 'acceleration'],
  },
  {
    id: 'phys-average-velocity',
    term: 'Average Velocity',
    aliases: ['mean velocity'],
    course: 'phys1',
    category: 'Kinematics',
    short:
      'Displacement divided by elapsed time, $v_{\\text{avg}} = \\Delta x/\\Delta t$: the slope of the secant line on an $x$–$t$ graph. It is signed and ignores the route taken.',
    long:
      'Average velocity is the physics name for the [[average-rate-of-change]] of position. It is generally *not* the average of the velocities along the way (driving equal distances at 60 and 30 km/h averages 40 km/h, not 45), and it can be zero for a round trip even though the object moved. Shrinking $\\Delta t$ to zero turns it into the instantaneous [[velocity]].',
    tex: 'v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t} = \\frac{x(t_2) - x(t_1)}{t_2 - t_1}',
    see: ['phys-average-speed', 'velocity', 'displacement', 'average-rate-of-change'],
  },
  {
    id: 'phys-average-speed',
    term: 'Average Speed',
    course: 'phys1',
    category: 'Kinematics',
    short:
      'Total distance traveled divided by elapsed time. It is never negative and is at least as large as the magnitude of the average velocity.',
    long:
      'Average speed counts every leg of the route, including backtracking: $\\frac{1}{\\Delta t}\\int |v|\\,dt$. It equals $|v_{\\text{avg}}|$ only when the object never reverses direction. A runner who completes one lap of a 400 m track in 80 s has an average speed of 5 m/s but an average velocity of zero.',
    tex: '\\text{average speed} = \\frac{\\text{distance traveled}}{\\Delta t} = \\frac{1}{\\Delta t}\\int_{t_1}^{t_2} |v(t)|\\,dt',
    see: ['phys-average-velocity', 'velocity'],
  },
  {
    id: 'phys-kinematic-equations',
    term: 'Kinematic Equations',
    aliases: ['constant-acceleration equations', 'equations of motion', 'SUVAT equations'],
    course: 'phys1',
    category: 'Kinematics',
    short:
      'The four relations among $x$, $v$, $a$ and $t$ that hold when the acceleration is **constant**, obtained by integrating $a$ twice: $v = v_0 + at$, $x = x_0 + v_0t + \\tfrac12at^2$, $v^2 = v_0^2 + 2a\\,\\Delta x$, $\\Delta x = \\tfrac12(v_0 + v)t$.',
    long:
      'Each equation leaves out one of the quantities $v$, $\\Delta x$, $t$ (and the last leaves out $a$), so you pick the one that omits the quantity you neither know nor want. They are only valid for constant acceleration: free fall without air resistance, uniform braking, a jump with constant game gravity. If $a$ changes with time, integrate $a(t)$ directly instead.',
    tex: 'v = v_0 + at, \\quad x = x_0 + v_0 t + \\tfrac12 a t^2, \\quad v^2 = v_0^2 + 2a(x - x_0)',
    see: ['acceleration', 'velocity', 'antiderivative', 'phys-free-fall'],
  },
  {
    id: 'phys-stopping-distance',
    term: 'Stopping Distance',
    aliases: ['braking distance', 'reaction distance'],
    course: 'phys1',
    category: 'Kinematics',
    short:
      'The distance a vehicle covers from the moment a hazard appears until it stops: the reaction distance $v_0 t_r$ plus the braking distance $v_0^2/(2|a|)$.',
    long:
      'During the reaction time $t_r$ the driver has not yet braked, so the vehicle keeps its speed. Braking at constant deceleration $|a|$ then takes $v_0^2/(2|a|)$, from $v^2 = v_0^2 + 2a\\,\\Delta x$. Because the braking term grows with the *square* of speed, doubling the speed quadruples the braking distance.',
    tex: 'd_{\\text{stop}} = v_0\\,t_r + \\frac{v_0^2}{2|a|}',
    see: ['phys-kinematic-equations'],
  },
  {
    id: 'phys-free-fall',
    term: 'Free Fall',
    aliases: ['freely falling', 'falling body'],
    course: 'phys1',
    category: 'Kinematics',
    short:
      'Motion under the influence of gravity alone. Near Earth\'s surface every freely falling object, whatever its mass, has the same downward acceleration $g \\approx 9.80\\,\\text{m/s}^2$, whether it is moving up, down or momentarily at rest.',
    long:
      'Free fall includes the whole flight of a thrown ball, not just the falling part: on the way up, at the top and on the way down the acceleration is $g$ downward. Real objects in air also feel drag, so free fall is a model that works well for dense, slow objects over short drops and badly for feathers, parachutists or long-range bullets.',
    tex: 'a_y = -g \\quad (+y \\text{ up}), \\qquad y = y_0 + v_{0y}t - \\tfrac12 g t^2',
    see: ['phys-free-fall-acceleration', 'phys-kinematic-equations', 'projectile-motion'],
  },
  {
    id: 'phys-free-fall-acceleration',
    term: 'Free-Fall Acceleration',
    aliases: ['g', 'acceleration due to gravity', 'gravitational acceleration'],
    course: 'phys1',
    category: 'Kinematics',
    short:
      'The magnitude $g$ of the acceleration of a freely falling object near Earth\'s surface, about $9.80\\,\\text{m/s}^2$. It is always positive; the direction (down) is carried by the sign in your equations.',
    long:
      'The value varies slightly with latitude and altitude, from about $9.78\\,\\text{m/s}^2$ at the equator to $9.83\\,\\text{m/s}^2$ at the poles; $9.81$ is a common average and $9.80$ is used in this course. The Moon\'s is $1.62\\,\\text{m/s}^2$. Game designers often choose a much larger "gravity" for snappy jumps. Do not confuse $g$ (an acceleration) with $G$, the universal gravitational constant.',
    tex: 'g \\approx 9.80\\,\\text{m/s}^2',
    see: ['phys-free-fall'],
  },
];
