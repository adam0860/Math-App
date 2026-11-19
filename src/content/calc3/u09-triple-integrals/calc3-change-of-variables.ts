import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-change-of-variables',
  title: 'Change of Variables and the Jacobian',
  summary: 'Every substitution in a multiple integral stretches area or volume by a local factor: the Jacobian determinant. Derive it, use it on parallelograms and ellipses, and see polar and spherical coordinates as special cases.',
  minutes: 20,
  objectives: [
    'Describe a transformation $T(u, v) = (x(u, v), y(u, v))$ and find the image of a simple region',
    'Compute the Jacobian $\\frac{\\partial(x, y)}{\\partial(u, v)}$ and explain it as a local area-scaling factor',
    'Apply the change-of-variables formula $\\iint_R f\\,dA = \\iint_S f\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|du\\,dv$, choosing $u$ and $v$ from the region or the integrand',
    'Integrate over ellipses and ellipsoids by stretching a disk or a ball',
    'Compute $3 \\times 3$ Jacobians and recover $dV = r\\,dz\\,dr\\,d\\theta$ and $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Transformations: maps from a uv-plane to the xy-plane',
      blocks: [
        {
          type: 'p',
          text: 'In single-variable calculus, substitution $x = g(u)$ turns $\\int f(x)\\,dx$ into $\\int f(g(u))\\,g\'(u)\\,du$. The factor $g\'(u)$ says how much a little interval $du$ is stretched when it is mapped to the $x$-axis. Polar and spherical coordinates did the same job in two and three dimensions, with stretch factors $r$ and $\\rho^2\\sin\\phi$. This lesson finds the stretch factor for **any** substitution.',
        },
        {
          type: 'p',
          text: 'A [[transformation]] of the plane is a function $T(u, v) = (x(u, v), y(u, v))$ that sends points of a $uv$-plane to points of the $xy$-plane. A region $S$ in the $uv$-plane is carried to its **image** $R = T(S)$. We will assume $T$ has continuous first partial derivatives and is **one-to-one** on the interior of $S$, so no two points of $S$ land on the same point of $R$.',
        },
        {
          type: 'p',
          text: 'Start with the simplest case, a [[linear-transformation]] $T(u, v) = (au + bv,\\ cu + dv)$. It sends the unit square to the parallelogram spanned by its columns $\\langle a, c \\rangle$ and $\\langle b, d \\rangle$, and from Linear Algebra you know that every area is multiplied by $|\\det|$:',
        },
        {
          type: 'graph',
          x: [-3, 4],
          y: [-2, 4],
          equal: true,
          height: 320,
          segments: [
            { from: [0, 0], to: [1, 0], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, 1], color: 'gray', dashed: true },
            { from: [1, 1], to: [0, 1], color: 'gray', dashed: true },
            { from: [0, 1], to: [0, 0], color: 'gray', dashed: true },
            { from: [0, 0], to: ['a', 'c'], color: 'red', arrow: true, label: 'T(1, 0)' },
            { from: [0, 0], to: ['b', 'd'], color: 'green', arrow: true, label: 'T(0, 1)' },
            { from: ['a', 'c'], to: ['a + b', 'c + d'], color: 'blue' },
            { from: ['b', 'd'], to: ['a + b', 'c + d'], color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: -2, max: 3, step: 0.1, value: 2, label: '$a$' },
            { name: 'b', min: -2, max: 3, step: 0.1, value: 1, label: '$b$' },
            { name: 'c', min: -2, max: 3, step: 0.1, value: 0.5, label: '$c$' },
            { name: 'd', min: -2, max: 3, step: 0.1, value: 1.5, label: '$d$' },
          ],
          readouts: [
            { label: '$\\det = ad - bc =$', expr: 'a d - b c', digits: 3 },
            { label: 'area of the image $= |ad - bc| =$', expr: 'abs(a d - b c)', digits: 3 },
          ],
          caption: 'The dashed unit square (area $1$) and its image under $T(u, v) = (au + bv, cu + dv)$. Every region\'s area is multiplied by $|ad - bc|$. Make the red and green arrows line up: the determinant hits $0$ and the parallelogram collapses. Swap their order around the origin: the determinant turns negative, meaning the image is **flipped**, but the area is still $|\\det|$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why linear maps are the key',
          text: 'A curvy transformation is not linear, but by [[linearization]] it is *almost* linear on a tiny patch. So on a tiny patch it multiplies area by the absolute determinant of its best linear approximation. Adding up all those tiny patches is the change-of-variables formula. The rest of this lesson makes that sentence precise.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'The linear transformation $T(u, v) = (3u + v,\\ u + 2v)$ maps the unit square $[0, 1] \\times [0, 1]$ in the $uv$-plane to a parallelogram in the $xy$-plane. What is the area of that parallelogram?',
      answer: '5',
      hint: 'The area is $|\\det|$ of the matrix $\\begin{bmatrix} 3 & 1 \\\\ 1 & 2 \\end{bmatrix}$ whose columns are $T(1, 0)$ and $T(0, 1)$.',
      explanation: '$\\det\\begin{bmatrix} 3 & 1 \\\\ 1 & 2 \\end{bmatrix} = 3 \\cdot 2 - 1 \\cdot 1 = 5$, so the area is $5$. The parallelogram has vertices $(0, 0)$, $(3, 1)$, $(4, 3)$ and $(1, 2)$; you can confirm with the shoelace formula or the cross product $|\\langle 3, 1, 0 \\rangle \\times \\langle 1, 2, 0 \\rangle| = 5$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The Jacobian: the local area-scaling factor',
      blocks: [
        {
          type: 'p',
          text: 'Now let $T$ be any smooth transformation. Take a tiny rectangle in the $uv$-plane with corner $(u_0, v_0)$ and sides $\\Delta u$, $\\Delta v$. Its image is a slightly curved quadrilateral. How big is it?',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><line x1="40.0" y1="250.0" x2="221.6" y2="250.0" stroke="currentColor" stroke-width="1.3"/><path d="M227.0 250.0 L218.7 253.5 L218.7 246.5 Z" fill="currentColor"/><line x1="40.0" y1="250.0" x2="40.0" y2="57.4" stroke="currentColor" stroke-width="1.3"/><path d="M40.0 52.0 L43.5 60.3 L36.5 60.3 Z" fill="currentColor"/><text x="229.8" y="250.0" font-size="15" font-style="italic" dy="5">u</text><text x="40.0" y="49.2" font-size="15" font-style="italic" dx="-4">v</text><line x1="300.0" y1="250.0" x2="499.6" y2="250.0" stroke="currentColor" stroke-width="1.3"/><path d="M505.0 250.0 L496.7 253.5 L496.7 246.5 Z" fill="currentColor"/><line x1="300.0" y1="250.0" x2="300.0" y2="66.8" stroke="currentColor" stroke-width="1.3"/><path d="M300.0 61.4 L303.5 69.7 L296.5 69.7 Z" fill="currentColor"/><text x="507.0" y="250.0" font-size="15" font-style="italic" dy="5">x</text><text x="300.0" y="59.3" font-size="15" font-style="italic" dx="-4">y</text><polyline points="40.0,250.0 40.0,245.9 40.0,241.8 40.0,237.6 40.0,233.5 40.0,229.4 40.0,225.2 40.0,221.1 40.0,217.0 40.0,212.9 40.0,208.8 40.0,204.6 40.0,200.5 40.0,196.4 40.0,192.2 40.0,188.1 40.0,184.0 40.0,179.9 40.0,175.8 40.0,171.6 40.0,167.5 40.0,163.4 40.0,159.2 40.0,155.1 40.0,151.0 40.0,146.9 40.0,142.8 40.0,138.6 40.0,134.5 40.0,130.4 40.0,126.2 40.0,122.1 40.0,118.0 40.0,113.9 40.0,109.8 40.0,105.6 40.0,101.5 40.0,97.4 40.0,93.2 40.0,89.1 40.0,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="40.0,250.0 44.1,250.0 48.2,250.0 52.4,250.0 56.5,250.0 60.6,250.0 64.8,250.0 68.9,250.0 73.0,250.0 77.1,250.0 81.2,250.0 85.4,250.0 89.5,250.0 93.6,250.0 97.8,250.0 101.9,250.0 106.0,250.0 110.1,250.0 114.2,250.0 118.4,250.0 122.5,250.0 126.6,250.0 130.8,250.0 134.9,250.0 139.0,250.0 143.1,250.0 147.2,250.0 151.4,250.0 155.5,250.0 159.6,250.0 163.8,250.0 167.9,250.0 172.0,250.0 176.1,250.0 180.2,250.0 184.4,250.0 188.5,250.0 192.6,250.0 196.8,250.0 200.9,250.0 205.0,250.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="349.2,241.8 349.2,239.0 349.1,236.3 349.0,233.5 348.8,230.7 348.5,228.0 348.2,225.2 347.8,222.4 347.4,219.7 347.0,216.9 346.4,214.1 345.9,211.4 345.2,208.6 344.5,205.8 343.8,203.1 343.0,200.3 342.1,197.5 341.2,194.8 340.2,192.0 339.2,189.2 338.1,186.4 337.0,183.7 335.8,180.9 334.6,178.1 333.3,175.4 331.9,172.6 330.5,169.8 329.0,167.1 327.5,164.3 325.9,161.5 324.3,158.8 322.6,156.0 320.9,153.2 319.1,150.5 317.2,147.7 315.3,144.9 313.3,142.2 311.3,139.4 309.2,136.6 307.1,133.9 304.9,131.1" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="349.2,241.8 352.6,241.8 356.0,241.7 359.3,241.5 362.7,241.3 366.1,241.0 369.5,240.6 372.9,240.2 376.3,239.7 379.6,239.2 383.0,238.6 386.4,237.9 389.8,237.2 393.2,236.3 396.6,235.5 399.9,234.5 403.3,233.5 406.7,232.5 410.1,231.3 413.5,230.1 416.9,228.9 420.2,227.6 423.6,226.2 427.0,224.7 430.4,223.2 433.8,221.6 437.1,220.0 440.5,218.3 443.9,216.5 447.3,214.6 450.7,212.7 454.1,210.8 457.4,208.7 460.8,206.6 464.2,204.5 467.6,202.2 471.0,200.0 474.4,197.6 477.7,195.2 481.1,192.7 484.5,190.1" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="67.5,250.0 67.5,245.9 67.5,241.8 67.5,237.6 67.5,233.5 67.5,229.4 67.5,225.2 67.5,221.1 67.5,217.0 67.5,212.9 67.5,208.8 67.5,204.6 67.5,200.5 67.5,196.4 67.5,192.2 67.5,188.1 67.5,184.0 67.5,179.9 67.5,175.8 67.5,171.6 67.5,167.5 67.5,163.4 67.5,159.2 67.5,155.1 67.5,151.0 67.5,146.9 67.5,142.8 67.5,138.6 67.5,134.5 67.5,130.4 67.5,126.2 67.5,122.1 67.5,118.0 67.5,113.9 67.5,109.8 67.5,105.6 67.5,101.5 67.5,97.4 67.5,93.2 67.5,89.1 67.5,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="40.0,222.5 44.1,222.5 48.2,222.5 52.4,222.5 56.5,222.5 60.6,222.5 64.8,222.5 68.9,222.5 73.0,222.5 77.1,222.5 81.2,222.5 85.4,222.5 89.5,222.5 93.6,222.5 97.8,222.5 101.9,222.5 106.0,222.5 110.1,222.5 114.2,222.5 118.4,222.5 122.5,222.5 126.6,222.5 130.8,222.5 134.9,222.5 139.0,222.5 143.1,222.5 147.2,222.5 151.4,222.5 155.5,222.5 159.6,222.5 163.8,222.5 167.9,222.5 172.0,222.5 176.1,222.5 180.2,222.5 184.4,222.5 188.5,222.5 192.6,222.5 196.8,222.5 200.9,222.5 205.0,222.5" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="371.8,240.4 371.7,237.6 371.6,234.8 371.5,232.1 371.3,229.3 371.1,226.5 370.8,223.8 370.4,221.0 370.0,218.2 369.5,215.5 369.0,212.7 368.4,209.9 367.8,207.2 367.1,204.4 366.3,201.6 365.5,198.9 364.7,196.1 363.8,193.3 362.8,190.6 361.8,187.8 360.7,185.0 359.5,182.2 358.4,179.5 357.1,176.7 355.8,173.9 354.5,171.2 353.0,168.4 351.6,165.6 350.1,162.9 348.5,160.1 346.8,157.3 345.2,154.6 343.4,151.8 341.6,149.0 339.8,146.3 337.8,143.5 335.9,140.7 333.9,138.0 331.8,135.2 329.7,132.4 327.5,129.7" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="348.0,223.3 351.4,223.3 354.7,223.2 358.1,223.1 361.5,222.8 364.9,222.5 368.3,222.2 371.6,221.8 375.0,221.3 378.4,220.7 381.8,220.1 385.2,219.4 388.6,218.7 391.9,217.9 395.3,217.0 398.7,216.1 402.1,215.1 405.5,214.0 408.9,212.9 412.2,211.7 415.6,210.4 419.0,209.1 422.4,207.7 425.8,206.3 429.1,204.8 432.5,203.2 435.9,201.5 439.3,199.8 442.7,198.0 446.1,196.2 449.4,194.3 452.8,192.3 456.2,190.3 459.6,188.2 463.0,186.0 466.4,183.8 469.7,181.5 473.1,179.1 476.5,176.7 479.9,174.2 483.3,171.7" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="95.0,250.0 95.0,245.9 95.0,241.8 95.0,237.6 95.0,233.5 95.0,229.4 95.0,225.2 95.0,221.1 95.0,217.0 95.0,212.9 95.0,208.8 95.0,204.6 95.0,200.5 95.0,196.4 95.0,192.2 95.0,188.1 95.0,184.0 95.0,179.9 95.0,175.8 95.0,171.6 95.0,167.5 95.0,163.4 95.0,159.2 95.0,155.1 95.0,151.0 95.0,146.9 95.0,142.8 95.0,138.6 95.0,134.5 95.0,130.4 95.0,126.2 95.0,122.1 95.0,118.0 95.0,113.9 95.0,109.8 95.0,105.6 95.0,101.5 95.0,97.4 95.0,93.2 95.0,89.1 95.0,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="40.0,195.0 44.1,195.0 48.2,195.0 52.4,195.0 56.5,195.0 60.6,195.0 64.8,195.0 68.9,195.0 73.0,195.0 77.1,195.0 81.2,195.0 85.4,195.0 89.5,195.0 93.6,195.0 97.8,195.0 101.9,195.0 106.0,195.0 110.1,195.0 114.2,195.0 118.4,195.0 122.5,195.0 126.6,195.0 130.8,195.0 134.9,195.0 139.0,195.0 143.1,195.0 147.2,195.0 151.4,195.0 155.5,195.0 159.6,195.0 163.8,195.0 167.9,195.0 172.0,195.0 176.1,195.0 180.2,195.0 184.4,195.0 188.5,195.0 192.6,195.0 196.8,195.0 200.9,195.0 205.0,195.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="394.3,236.1 394.3,233.3 394.2,230.5 394.1,227.8 393.9,225.0 393.6,222.2 393.3,219.5 392.9,216.7 392.5,213.9 392.1,211.2 391.5,208.4 391.0,205.6 390.3,202.8 389.6,200.1 388.9,197.3 388.1,194.5 387.2,191.8 386.3,189.0 385.3,186.2 384.3,183.5 383.2,180.7 382.1,177.9 380.9,175.2 379.7,172.4 378.4,169.6 377.0,166.9 375.6,164.1 374.1,161.3 372.6,158.6 371.0,155.8 369.4,153.0 367.7,150.3 366.0,147.5 364.2,144.7 362.3,142.0 360.4,139.2 358.4,136.4 356.4,133.7 354.3,130.9 352.2,128.1 350.0,125.4" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="344.3,204.9 347.7,204.9 351.0,204.8 354.4,204.6 357.8,204.4 361.2,204.1 364.6,203.7 368.0,203.3 371.3,202.8 374.7,202.3 378.1,201.7 381.5,201.0 384.9,200.3 388.3,199.4 391.6,198.6 395.0,197.6 398.4,196.6 401.8,195.6 405.2,194.4 408.5,193.2 411.9,192.0 415.3,190.7 418.7,189.3 422.1,187.8 425.5,186.3 428.8,184.7 432.2,183.1 435.6,181.4 439.0,179.6 442.4,177.7 445.8,175.8 449.1,173.9 452.5,171.8 455.9,169.7 459.3,167.6 462.7,165.3 466.1,163.1 469.4,160.7 472.8,158.3 476.2,155.8 479.6,153.2" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="122.5,250.0 122.5,245.9 122.5,241.8 122.5,237.6 122.5,233.5 122.5,229.4 122.5,225.2 122.5,221.1 122.5,217.0 122.5,212.9 122.5,208.8 122.5,204.6 122.5,200.5 122.5,196.4 122.5,192.2 122.5,188.1 122.5,184.0 122.5,179.9 122.5,175.8 122.5,171.6 122.5,167.5 122.5,163.4 122.5,159.2 122.5,155.1 122.5,151.0 122.5,146.9 122.5,142.8 122.5,138.6 122.5,134.5 122.5,130.4 122.5,126.2 122.5,122.1 122.5,118.0 122.5,113.9 122.5,109.8 122.5,105.6 122.5,101.5 122.5,97.4 122.5,93.2 122.5,89.1 122.5,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="40.0,167.5 44.1,167.5 48.2,167.5 52.4,167.5 56.5,167.5 60.6,167.5 64.8,167.5 68.9,167.5 73.0,167.5 77.1,167.5 81.2,167.5 85.4,167.5 89.5,167.5 93.6,167.5 97.8,167.5 101.9,167.5 106.0,167.5 110.1,167.5 114.2,167.5 118.4,167.5 122.5,167.5 126.6,167.5 130.8,167.5 134.9,167.5 139.0,167.5 143.1,167.5 147.2,167.5 151.4,167.5 155.5,167.5 159.6,167.5 163.8,167.5 167.9,167.5 172.0,167.5 176.1,167.5 180.2,167.5 184.4,167.5 188.5,167.5 192.6,167.5 196.8,167.5 200.9,167.5 205.0,167.5" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="416.9,228.9 416.8,226.1 416.7,223.3 416.6,220.6 416.4,217.8 416.2,215.0 415.9,212.3 415.5,209.5 415.1,206.7 414.6,204.0 414.1,201.2 413.5,198.4 412.9,195.7 412.2,192.9 411.4,190.1 410.6,187.4 409.8,184.6 408.9,181.8 407.9,179.1 406.9,176.3 405.8,173.5 404.6,170.8 403.5,168.0 402.2,165.2 400.9,162.5 399.6,159.7 398.1,156.9 396.7,154.2 395.2,151.4 393.6,148.6 391.9,145.9 390.3,143.1 388.5,140.3 386.7,137.6 384.9,134.8 382.9,132.0 381.0,129.3 379.0,126.5 376.9,123.7 374.8,121.0 372.6,118.2" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="338.1,186.4 341.5,186.4 344.9,186.3 348.3,186.2 351.7,185.9 355.0,185.6 358.4,185.3 361.8,184.9 365.2,184.4 368.6,183.8 372.0,183.2 375.3,182.5 378.7,181.8 382.1,181.0 385.5,180.1 388.9,179.2 392.2,178.2 395.6,177.1 399.0,176.0 402.4,174.8 405.8,173.5 409.2,172.2 412.5,170.8 415.9,169.4 419.3,167.9 422.7,166.3 426.1,164.6 429.5,162.9 432.8,161.1 436.2,159.3 439.6,157.4 443.0,155.4 446.4,153.4 449.8,151.3 453.1,149.1 456.5,146.9 459.9,144.6 463.3,142.2 466.7,139.8 470.0,137.3 473.4,134.8" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="150.0,250.0 150.0,245.9 150.0,241.8 150.0,237.6 150.0,233.5 150.0,229.4 150.0,225.2 150.0,221.1 150.0,217.0 150.0,212.9 150.0,208.8 150.0,204.6 150.0,200.5 150.0,196.4 150.0,192.2 150.0,188.1 150.0,184.0 150.0,179.9 150.0,175.8 150.0,171.6 150.0,167.5 150.0,163.4 150.0,159.2 150.0,155.1 150.0,151.0 150.0,146.9 150.0,142.8 150.0,138.6 150.0,134.5 150.0,130.4 150.0,126.2 150.0,122.1 150.0,118.0 150.0,113.9 150.0,109.8 150.0,105.6 150.0,101.5 150.0,97.4 150.0,93.2 150.0,89.1 150.0,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="40.0,140.0 44.1,140.0 48.2,140.0 52.4,140.0 56.5,140.0 60.6,140.0 64.8,140.0 68.9,140.0 73.0,140.0 77.1,140.0 81.2,140.0 85.4,140.0 89.5,140.0 93.6,140.0 97.8,140.0 101.9,140.0 106.0,140.0 110.1,140.0 114.2,140.0 118.4,140.0 122.5,140.0 126.6,140.0 130.8,140.0 134.9,140.0 139.0,140.0 143.1,140.0 147.2,140.0 151.4,140.0 155.5,140.0 159.6,140.0 163.8,140.0 167.9,140.0 172.0,140.0 176.1,140.0 180.2,140.0 184.4,140.0 188.5,140.0 192.6,140.0 196.8,140.0 200.9,140.0 205.0,140.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="439.4,218.8 439.4,216.1 439.3,213.3 439.2,210.5 439.0,207.8 438.7,205.0 438.4,202.2 438.0,199.5 437.6,196.7 437.2,193.9 436.6,191.2 436.1,188.4 435.4,185.6 434.7,182.9 434.0,180.1 433.2,177.3 432.3,174.6 431.4,171.8 430.4,169.0 429.4,166.3 428.3,163.5 427.2,160.7 426.0,158.0 424.8,155.2 423.5,152.4 422.1,149.7 420.7,146.9 419.2,144.1 417.7,141.3 416.1,138.6 414.5,135.8 412.8,133.0 411.1,130.3 409.3,127.5 407.4,124.7 405.5,122.0 403.5,119.2 401.5,116.4 399.4,113.7 397.3,110.9 395.1,108.1" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="329.5,168.0 332.9,168.0 336.3,167.9 339.7,167.7 343.1,167.5 346.4,167.2 349.8,166.8 353.2,166.4 356.6,165.9 360.0,165.4 363.3,164.8 366.7,164.1 370.1,163.4 373.5,162.5 376.9,161.7 380.3,160.7 383.6,159.7 387.0,158.7 390.4,157.5 393.8,156.3 397.2,155.1 400.6,153.8 403.9,152.4 407.3,150.9 410.7,149.4 414.1,147.8 417.5,146.2 420.8,144.5 424.2,142.7 427.6,140.8 431.0,138.9 434.4,137.0 437.8,134.9 441.1,132.8 444.5,130.7 447.9,128.4 451.3,126.2 454.7,123.8 458.1,121.4 461.4,118.9 464.8,116.3" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="177.5,250.0 177.5,245.9 177.5,241.8 177.5,237.6 177.5,233.5 177.5,229.4 177.5,225.2 177.5,221.1 177.5,217.0 177.5,212.9 177.5,208.8 177.5,204.6 177.5,200.5 177.5,196.4 177.5,192.2 177.5,188.1 177.5,184.0 177.5,179.9 177.5,175.8 177.5,171.6 177.5,167.5 177.5,163.4 177.5,159.2 177.5,155.1 177.5,151.0 177.5,146.9 177.5,142.8 177.5,138.6 177.5,134.5 177.5,130.4 177.5,126.2 177.5,122.1 177.5,118.0 177.5,113.9 177.5,109.8 177.5,105.6 177.5,101.5 177.5,97.4 177.5,93.2 177.5,89.1 177.5,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="40.0,112.5 44.1,112.5 48.2,112.5 52.4,112.5 56.5,112.5 60.6,112.5 64.8,112.5 68.9,112.5 73.0,112.5 77.1,112.5 81.2,112.5 85.4,112.5 89.5,112.5 93.6,112.5 97.8,112.5 101.9,112.5 106.0,112.5 110.1,112.5 114.2,112.5 118.4,112.5 122.5,112.5 126.6,112.5 130.8,112.5 134.9,112.5 139.0,112.5 143.1,112.5 147.2,112.5 151.4,112.5 155.5,112.5 159.6,112.5 163.8,112.5 167.9,112.5 172.0,112.5 176.1,112.5 180.2,112.5 184.4,112.5 188.5,112.5 192.6,112.5 196.8,112.5 200.9,112.5 205.0,112.5" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="462.0,205.9 461.9,203.2 461.8,200.4 461.7,197.6 461.5,194.9 461.3,192.1 461.0,189.3 460.6,186.6 460.2,183.8 459.7,181.0 459.2,178.2 458.6,175.5 458.0,172.7 457.3,169.9 456.5,167.2 455.7,164.4 454.9,161.6 454.0,158.9 453.0,156.1 452.0,153.3 450.9,150.6 449.7,147.8 448.6,145.0 447.3,142.3 446.0,139.5 444.7,136.7 443.2,134.0 441.8,131.2 440.3,128.4 438.7,125.7 437.0,122.9 435.4,120.1 433.6,117.4 431.8,114.6 430.0,111.8 428.0,109.1 426.1,106.3 424.1,103.5 422.0,100.8 419.9,98.0 417.7,95.2" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="318.4,149.6 321.8,149.5 325.2,149.4 328.6,149.3 332.0,149.0 335.4,148.7 338.7,148.4 342.1,148.0 345.5,147.5 348.9,146.9 352.3,146.3 355.7,145.6 359.0,144.9 362.4,144.1 365.8,143.2 369.2,142.3 372.6,141.3 376.0,140.2 379.3,139.1 382.7,137.9 386.1,136.6 389.5,135.3 392.9,133.9 396.2,132.5 399.6,131.0 403.0,129.4 406.4,127.7 409.8,126.0 413.2,124.2 416.5,122.4 419.9,120.5 423.3,118.5 426.7,116.5 430.1,114.4 433.5,112.2 436.8,110.0 440.2,107.7 443.6,105.3 447.0,102.9 450.4,100.4 453.8,97.9" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="205.0,250.0 205.0,245.9 205.0,241.8 205.0,237.6 205.0,233.5 205.0,229.4 205.0,225.2 205.0,221.1 205.0,217.0 205.0,212.9 205.0,208.8 205.0,204.6 205.0,200.5 205.0,196.4 205.0,192.2 205.0,188.1 205.0,184.0 205.0,179.9 205.0,175.8 205.0,171.6 205.0,167.5 205.0,163.4 205.0,159.2 205.0,155.1 205.0,151.0 205.0,146.9 205.0,142.8 205.0,138.6 205.0,134.5 205.0,130.4 205.0,126.2 205.0,122.1 205.0,118.0 205.0,113.9 205.0,109.8 205.0,105.6 205.0,101.5 205.0,97.4 205.0,93.2 205.0,89.1 205.0,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="40.0,85.0 44.1,85.0 48.2,85.0 52.4,85.0 56.5,85.0 60.6,85.0 64.8,85.0 68.9,85.0 73.0,85.0 77.1,85.0 81.2,85.0 85.4,85.0 89.5,85.0 93.6,85.0 97.8,85.0 101.9,85.0 106.0,85.0 110.1,85.0 114.2,85.0 118.4,85.0 122.5,85.0 126.6,85.0 130.8,85.0 134.9,85.0 139.0,85.0 143.1,85.0 147.2,85.0 151.4,85.0 155.5,85.0 159.6,85.0 163.8,85.0 167.9,85.0 172.0,85.0 176.1,85.0 180.2,85.0 184.4,85.0 188.5,85.0 192.6,85.0 196.8,85.0 200.9,85.0 205.0,85.0" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="484.5,190.1 484.5,187.4 484.4,184.6 484.3,181.8 484.1,179.1 483.8,176.3 483.5,173.5 483.1,170.8 482.7,168.0 482.3,165.2 481.7,162.5 481.2,159.7 480.5,156.9 479.8,154.2 479.1,151.4 478.3,148.6 477.4,145.9 476.5,143.1 475.5,140.3 474.5,137.6 473.4,134.8 472.3,132.0 471.1,129.3 469.9,126.5 468.6,123.7 467.2,121.0 465.8,118.2 464.3,115.4 462.8,112.6 461.2,109.9 459.6,107.1 457.9,104.3 456.2,101.6 454.4,98.8 452.5,96.0 450.6,93.3 448.6,90.5 446.6,87.7 444.5,85.0 442.4,82.2 440.2,79.4" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polyline points="304.9,131.1 308.3,131.1 311.7,131.0 315.1,130.8 318.4,130.6 321.8,130.3 325.2,129.9 328.6,129.5 332.0,129.0 335.4,128.5 338.7,127.9 342.1,127.2 345.5,126.5 348.9,125.6 352.3,124.8 355.7,123.8 359.0,122.8 362.4,121.8 365.8,120.6 369.2,119.4 372.6,118.2 376.0,116.9 379.3,115.5 382.7,114.0 386.1,112.5 389.5,110.9 392.9,109.3 396.2,107.6 399.6,105.8 403.0,103.9 406.4,102.0 409.8,100.1 413.2,98.0 416.5,95.9 419.9,93.8 423.3,91.5 426.7,89.3 430.1,86.9 433.5,84.5 436.8,82.0 440.2,79.4" class="s-gray" stroke-width="1" fill="none" stroke-opacity="0.55"/><polygon points="122.5,195.0 150.0,195.0 150.0,167.5 122.5,167.5" class="f-blue s-blue" fill-opacity="0.35" stroke-width="2"/><polygon points="411.9,192.0 413.8,191.3 415.7,190.5 417.6,189.7 419.4,189.0 421.3,188.1 423.2,187.3 425.1,186.5 427.0,185.6 428.8,184.7 430.7,183.8 432.6,182.9 434.5,181.9 434.5,181.9 434.1,180.4 433.6,178.9 433.2,177.3 432.7,175.8 432.2,174.3 431.7,172.7 431.2,171.2 430.7,169.6 430.1,168.1 429.5,166.6 428.9,165.0 428.3,163.5 428.3,163.5 426.5,164.4 424.6,165.4 422.7,166.3 420.8,167.2 418.9,168.0 417.1,168.9 415.2,169.7 413.3,170.5 411.4,171.3 409.5,172.1 407.7,172.8 405.8,173.5 405.8,173.5 406.4,175.1 407.0,176.6 407.5,178.1 408.1,179.7 408.6,181.2 409.2,182.8 409.7,184.3 410.2,185.8 410.6,187.4 411.1,188.9 411.5,190.4 411.9,192.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="2"/><polyline points="434.5,183.4 429.6,164.9 407.0,173.5" class="s-red" stroke-width="1.4" stroke-dasharray="4 3" fill="none"/><line x1="411.9" y1="192.0" x2="429.4" y2="185.3" class="s-red" stroke-width="2.2"/><path d="M434.5 183.4 L428.0 189.6 L425.5 183.1 Z" class="f-red"/><line x1="411.9" y1="192.0" x2="408.4" y2="178.8" class="s-red" stroke-width="2.2"/><path d="M407.0 173.5 L412.5 180.6 L405.8 182.4 Z" class="f-red"/><text x="126.5" y="213.0" font-size="14" class="t-blue">Δu</text><text x="96.5" y="186.2" font-size="14" class="t-blue">Δv</text><text x="436.5" y="203.4" font-size="14" class="t-red">𝐫ᵤ Δu</text><text x="357.0" y="169.5" font-size="14" class="t-red">𝐫ᵥ Δv</text><path d="M222 100 Q252 78 282 100" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M284 102 L273 100 L279 92 Z" fill="currentColor"/><text x="245.0" y="74.0" font-size="17" font-style="italic">T</text><text x="70.0" y="282.0" font-size="13" class="t-gray">uv-plane: a tiny rectangle</text><text x="318.0" y="282.0" font-size="13" class="t-gray">xy-plane: its curved image</text></svg>',
          alt: 'Left: a square grid in the uv-plane with one small rectangle shaded, its sides labeled delta u and delta v. A curved arrow labeled T points to the right panel: the image of the grid in the xy-plane, a curved, stretched grid. The image of the shaded rectangle is a slightly curved quadrilateral, and two red arrows from its corner, labeled r sub u delta u and r sub v delta v, span a dashed parallelogram that almost matches it.',
          caption: 'The grid lines $v = \\text{const}$ and $u = \\text{const}$ map to curves. Near one corner, the image of the little rectangle is almost the parallelogram spanned by $\\vec{r}_u\\,\\Delta u$ and $\\vec{r}_v\\,\\Delta v$.',
          maxWidth: 500,
        },
        {
          type: 'derivation',
          title: 'Area of the image of a tiny rectangle',
          steps: [
            { tex: '\\vec{r}(u, v) = \\langle x(u, v),\\ y(u, v) \\rangle', why: 'Think of $T$ as a vector function: $\\vec{r}(u, v)$ is the [[position-vector|position vector]] of the image point.' },
            { tex: '\\vec{r}(u_0 + \\Delta u, v_0) - \\vec{r}(u_0, v_0) \\approx \\vec{r}_u\\,\\Delta u = \\langle x_u, y_u \\rangle\\,\\Delta u', why: 'Moving along the bottom edge changes only $u$, so the image moves by about the partial derivative times $\\Delta u$ (linear approximation).' },
            { tex: '\\vec{r}(u_0, v_0 + \\Delta v) - \\vec{r}(u_0, v_0) \\approx \\vec{r}_v\\,\\Delta v = \\langle x_v, y_v \\rangle\\,\\Delta v', why: 'Same along the left edge, which changes only $v$.' },
            { tex: '\\Delta A \\approx \\left|\\det\\begin{bmatrix} x_u\\,\\Delta u & x_v\\,\\Delta v \\\\ y_u\\,\\Delta u & y_v\\,\\Delta v \\end{bmatrix}\\right| = \\left|x_u y_v - x_v y_u\\right|\\Delta u\\,\\Delta v', why: 'The image is nearly the parallelogram spanned by those two vectors, and a parallelogram\'s area is the absolute [[determinant]] of its edge vectors. Pull $\\Delta u$ and $\\Delta v$ out of the columns.' },
          ],
          result: 'A tiny rectangle of area $\\Delta u\\,\\Delta v$ maps to a region of area about $|x_u y_v - x_v y_u|\\,\\Delta u\\,\\Delta v$. That multiplier gets a name.',
        },
        {
          type: 'definition',
          term: 'Jacobian',
          text: 'The [[calc3-jacobian]] of the transformation $x = x(u, v)$, $y = y(u, v)$ is the determinant\n\n$$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\det\\begin{bmatrix} \\dfrac{\\partial x}{\\partial u} & \\dfrac{\\partial x}{\\partial v} \\\\[2mm] \\dfrac{\\partial y}{\\partial u} & \\dfrac{\\partial y}{\\partial v} \\end{bmatrix} = \\frac{\\partial x}{\\partial u}\\frac{\\partial y}{\\partial v} - \\frac{\\partial x}{\\partial v}\\frac{\\partial y}{\\partial u}.$$\n\nIts absolute value is the local factor by which $T$ scales area; its sign says whether $T$ preserves or flips orientation.',
        },
        {
          type: 'derivation',
          title: 'Polar coordinates: $x = r\\cos\\theta$, $y = r\\sin\\theta$',
          steps: [
            { tex: '\\frac{\\partial(x, y)}{\\partial(r, \\theta)} = \\det\\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix}', why: 'Columns: derivatives with respect to $r$, then with respect to $\\theta$.' },
            { tex: '= r\\cos^2\\theta + r\\sin^2\\theta = r', why: 'Pythagorean identity.' },
          ],
          result: 'The famous $r$ in $dA = r\\,dr\\,d\\theta$ is just a Jacobian. Polar coordinates are one special case of the general formula.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'Find the Jacobian $\\dfrac{\\partial(x, y)}{\\partial(u, v)}$ of the transformation $x = u^2 - v^2$, $y = 2uv$.',
      variables: ['u', 'v'],
      label: '$\\dfrac{\\partial(x, y)}{\\partial(u, v)} =$',
      answer: '4u^2 + 4v^2',
      answerTex: '4(u^2 + v^2)',
      hint: 'The matrix is $\\begin{bmatrix} x_u & x_v \\\\ y_u & y_v \\end{bmatrix} = \\begin{bmatrix} 2u & -2v \\\\ 2v & 2u \\end{bmatrix}$.',
      explanation: '$\\det\\begin{bmatrix} 2u & -2v \\\\ 2v & 2u \\end{bmatrix} = (2u)(2u) - (-2v)(2v) = 4u^2 + 4v^2$. This map is the complex squaring $w \\mapsto w^2$ in disguise: at distance $\\sqrt{u^2 + v^2}$ from the origin it scales area by $4(u^2 + v^2)$, the square of its stretch factor $2\\sqrt{u^2 + v^2}$, since it stretches equally in every direction.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The change-of-variables formula',
      blocks: [
        {
          type: 'theorem',
          name: 'Change of variables in a double integral',
          tex: '\\iint_R f(x, y)\\,dA = \\iint_S f\\big(x(u, v),\\, y(u, v)\\big)\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|du\\,dv',
          text: 'Hypotheses: $T$ is $C^1$ (continuous first partials), $T$ maps $S$ onto $R$ and is one-to-one on the interior of $S$, the Jacobian is nonzero there, and $f$ is continuous on $R$. Then $dA = \\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|du\\,dv$. This is the [[calc3-change-of-variables-formula]].',
        },
        {
          type: 'p',
          text: 'In practice you usually choose the *new* variables first: $u$ and $v$ as functions of $x$ and $y$, picked so that the boundary of $R$ becomes $u = \\text{const}$ and $v = \\text{const}$, or so that the integrand simplifies. Then you need the Jacobian of the **inverse** map, and there is a shortcut:',
        },
        {
          type: 'math',
          tex: '\\frac{\\partial(x, y)}{\\partial(u, v)} = \\frac{1}{\\dfrac{\\partial(u, v)}{\\partial(x, y)}}',
          caption: 'The derivative matrices of a map and its inverse are inverse matrices, and $\\det(A^{-1}) = \\tfrac{1}{\\det A}$. No need to solve for $x$ and $y$.',
        },
        {
          type: 'graph',
          x: [-0.5, 2.5],
          y: [-2.5, 0.5],
          equal: true,
          height: 300,
          areas: [{ expr: 'min(0, x - 1)', expr2: 'x - 2', from: 0, to: 2, color: 'blue' }],
          implicit: [{ expr: 'x - y', levels: [1, 2], color: 'red', label: '$v = x - y = 1$ and $2$' }],
          functions: [
            { expr: '-x', color: 'green', dashed: true, label: 'level lines $u = x + y = -1, 0, 1$' },
            { expr: '-1 - x', color: 'green', dashed: true },
            { expr: '1 - x', color: 'green', dashed: true },
          ],
          points: [
            { x: 1, y: 0, label: '(1, 0)' },
            { x: 2, y: 0, label: '(2, 0)' },
            { x: 0, y: -1, label: '(0, −1)' },
            { x: 0, y: -2, label: '(0, −2)' },
          ],
          caption: 'The trapezoid $R$. Its slanted sides are the lines $x - y = 1$ and $x - y = 2$ (red), so $v = x - y$ is a natural new variable. The other two sides, $y = 0$ and $x = 0$, become $u = v$ and $u = -v$ when $u = x + y$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\iint_R e^{(x+y)/(x-y)}\\,dA$ over the trapezoid with vertices $(1, 0)$, $(2, 0)$, $(0, -2)$, $(0, -1)$',
          steps: [
            { tex: 'u = x + y, \\qquad v = x - y', why: 'The integrand is impossible as it stands, but it is simply $e^{u/v}$ in these variables, and two sides of $R$ lie on $v = 1$ and $v = 2$.' },
            { tex: 'y = 0 \\;\\Rightarrow\\; u = v, \\qquad x = 0 \\;\\Rightarrow\\; u = -v', why: 'Translate the other two sides: on $y = 0$, $u = x = v$; on $x = 0$, $u = y = -v$.' },
            { tex: 'S: \\ 1 \\le v \\le 2, \\quad -v \\le u \\le v', why: 'In the $uv$-plane the trapezoid becomes a simpler trapezoid with $u$-limits depending on $v$.' },
            { tex: '\\frac{\\partial(u, v)}{\\partial(x, y)} = \\det\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix} = -2 \\;\\Rightarrow\\; \\frac{\\partial(x, y)}{\\partial(u, v)} = -\\frac{1}{2}', why: 'Use the reciprocal shortcut. The formula needs the absolute value, $\\tfrac{1}{2}$.' },
            { tex: '\\iint_R e^{(x+y)/(x-y)}\\,dA = \\int_1^2\\int_{-v}^{v} e^{u/v}\\cdot\\tfrac{1}{2}\\,du\\,dv', why: 'Substitute the integrand, the limits and $dA = \\tfrac{1}{2}\\,du\\,dv$.' },
            { tex: '= \\tfrac{1}{2}\\int_1^2 v\\left(e - e^{-1}\\right)dv = \\tfrac{1}{2}\\left(e - e^{-1}\\right)\\cdot\\tfrac{3}{2} = \\tfrac{3}{4}\\left(e - e^{-1}\\right)', why: 'Inner: $\\left[v\\,e^{u/v}\\right]_{u=-v}^{u=v} = v(e - e^{-1})$. Outer: $\\int_1^2 v\\,dv = \\tfrac{3}{2}$.' },
          ],
          result: 'The value is $\\tfrac{3}{4}(e - e^{-1}) \\approx 1.7628$, confirmed by a numerical double integral over the original trapezoid.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Three places this goes wrong',
          text: 'Using $\\frac{\\partial(u, v)}{\\partial(x, y)}$ itself instead of its reciprocal (here, $2$ instead of $\\tfrac{1}{2}$). Forgetting the absolute value, which can make an area negative. And forgetting to transform the **limits**: the region $S$ in the $uv$-plane must be found by translating every boundary curve of $R$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'With the substitution $u = x + y$, $v = x - y$, what does $dA = dx\\,dy$ become?',
      options: [
        { text: '$\\tfrac{1}{2}\\,du\\,dv$', correct: true, why: '$\\frac{\\partial(u, v)}{\\partial(x, y)} = -2$, so $\\frac{\\partial(x, y)}{\\partial(u, v)} = -\\tfrac{1}{2}$ and its absolute value is $\\tfrac{1}{2}$.' },
        { text: '$2\\,du\\,dv$', why: 'That is the Jacobian of the map from $(x, y)$ to $(u, v)$. The formula needs the Jacobian of $(u, v) \\mapsto (x, y)$, which is the reciprocal.' },
        { text: '$-\\tfrac{1}{2}\\,du\\,dv$', why: 'The formula uses the **absolute value** of the Jacobian. Area elements are never negative.' },
        { text: '$du\\,dv$', why: 'This substitution rotates by $45^\\circ$ *and* scales by $\\sqrt{2}$ in each direction, so it does change area.' },
      ],
      explanation: 'Solve for $x$ and $y$ to double-check: $x = \\tfrac{u + v}{2}$, $y = \\tfrac{u - v}{2}$, so $\\frac{\\partial(x, y)}{\\partial(u, v)} = \\det\\begin{bmatrix} \\tfrac{1}{2} & \\tfrac{1}{2} \\\\ \\tfrac{1}{2} & -\\tfrac{1}{2} \\end{bmatrix} = -\\tfrac{1}{4} - \\tfrac{1}{4} = -\\tfrac{1}{2}$. Geometrically, the map $(x, y) \\mapsto (u, v)$ doubles areas, so going back halves them.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student evaluates $\\iint_R (x + y)\\,dA$, where $R$ is the square bounded by the lines $x + y = 0$, $x + y = 2$, $x - y = 0$ and $x - y = 4$. Tap the first line that is wrong.',
      lines: [
        'Let $u = x + y$, $v = x - y$. Then $R$ becomes $S$: $0 \\le u \\le 2$, $0 \\le v \\le 4$.',
        '$\\dfrac{\\partial(u, v)}{\\partial(x, y)} = \\det\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix} = -2$',
        'So $dA = |-2|\\,du\\,dv = 2\\,du\\,dv$.',
        '$\\iint_R (x + y)\\,dA = \\displaystyle\\int_0^4\\int_0^2 u \\cdot 2\\,du\\,dv = 16$',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses the Jacobian of the wrong map. The formula needs $\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right| = \\tfrac{1}{|-2|} = \\tfrac{1}{2}$, so $dA = \\tfrac{1}{2}\\,du\\,dv$. Then $\\iint_R (x + y)\\,dA = \\int_0^4\\int_0^2 \\tfrac{u}{2}\\,du\\,dv = 4$. A size check catches it: the map $(x, y) \\mapsto (u, v)$ doubles areas, so $R$ has half the area of $S$, namely $\\tfrac{8}{2} = 4$. Going from $du\\,dv$ back to $dA$ must therefore halve areas, not double them.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Ellipses and ellipsoids: stretch a circle',
      blocks: [
        {
          type: 'p',
          text: 'An ellipse $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} \\le 1$ is a unit disk stretched by $a$ horizontally and $b$ vertically. So substitute $x = au$, $y = bv$: the ellipse becomes the unit disk $u^2 + v^2 \\le 1$, and the Jacobian is $\\det\\begin{bmatrix} a & 0 \\\\ 0 & b \\end{bmatrix} = ab$. Every area scales by $ab$; in particular, the area of the ellipse is $ab \\cdot \\pi = \\pi ab$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 3],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true, label: 'unit disk $u^2 + v^2 = 1$' },
            { x: 'a cos(t)', y: 'b sin(t)', t: [0, '2pi'], color: 'blue', label: 'ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$' },
          ],
          segments: [
            { from: [0, 0], to: ['a', 0], color: 'red', arrow: true, label: 'a' },
            { from: [0, 0], to: [0, 'b'], color: 'green', arrow: true, label: 'b' },
          ],
          sliders: [
            { name: 'a', min: 0.5, max: 3.5, step: 0.1, value: 3, label: '$a$' },
            { name: 'b', min: 0.5, max: 2.8, step: 0.1, value: 2, label: '$b$' },
          ],
          readouts: [{ label: 'area $= \\pi ab =$', expr: 'pi a b', digits: 4 }],
          caption: 'The substitution $x = au$, $y = bv$ stretches the dashed unit disk into the ellipse. Every little patch is stretched the same way, so the Jacobian $ab$ is constant.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\iint_E x^2\\,dA$ over the ellipse $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} \\le 1$',
          steps: [
            { tex: 'x = 3u, \\quad y = 2v, \\quad \\frac{\\partial(x, y)}{\\partial(u, v)} = 6', why: 'Stretch the unit disk $D$: $u^2 + v^2 \\le 1$ by $3$ and $2$.' },
            { tex: '\\iint_E x^2\\,dA = \\iint_D (3u)^2 \\cdot 6\\,du\\,dv = 54\\iint_D u^2\\,du\\,dv', why: 'Change of variables: integrand, then the constant Jacobian.' },
            { tex: '\\iint_D u^2\\,du\\,dv = \\int_0^{2\\pi}\\int_0^1 r^2\\cos^2\\theta \\cdot r\\,dr\\,d\\theta = \\frac{1}{4}\\cdot\\pi', why: 'A second change of variables, to polar coordinates on the disk: $\\int_0^1 r^3\\,dr = \\tfrac{1}{4}$ and $\\int_0^{2\\pi}\\cos^2\\theta\\,d\\theta = \\pi$.' },
            { tex: '\\iint_E x^2\\,dA = 54 \\cdot \\frac{\\pi}{4} = \\frac{27\\pi}{2}', why: 'Multiply.' },
          ],
          result: '$\\iint_E x^2\\,dA = \\tfrac{27\\pi}{2} \\approx 42.41$. Composing the two substitutions is the same as using "elliptical polar coordinates" $x = 3r\\cos\\theta$, $y = 2r\\sin\\theta$, whose Jacobian is $6r$.',
        },
        {
          type: 'p',
          text: 'The same trick works in three dimensions. The ellipsoid $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} \\le 1$ is the unit ball stretched by $x = au$, $y = bv$, $z = cw$, whose Jacobian is $abc$. So its volume is $abc \\cdot \\tfrac{4}{3}\\pi = \\tfrac{4}{3}\\pi abc$. Collision shapes, explosion volumes and character bounding volumes in games are often ellipsoids for exactly this reason: they are spheres in a stretched coordinate system.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\iint_E x^2\\,dA$ over the ellipse $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} \\le 1$ without looking back: set up $x = 3u$, $y = 2v$ yourself. An exact answer like `27pi/2` or a decimal to two places is accepted.',
      answer: '27pi/2',
      answerTex: '\\tfrac{27\\pi}{2}',
      hint: 'The integrand becomes $9u^2$, the Jacobian is $6$, and over the unit disk $\\iint u^2\\,dA = \\tfrac{\\pi}{4}$.',
      explanation: '$\\iint_E x^2\\,dA = \\iint_{u^2 + v^2 \\le 1} 9u^2 \\cdot 6\\,du\\,dv = 54 \\cdot \\tfrac{\\pi}{4} = \\tfrac{27\\pi}{2} \\approx 42.41$. The value $\\iint_D u^2\\,dA = \\tfrac{\\pi}{4}$ follows from symmetry: $\\iint_D (u^2 + v^2)\\,dA = \\int_0^{2\\pi}\\int_0^1 r^3\\,dr\\,d\\theta = \\tfrac{\\pi}{2}$, split equally between $u^2$ and $v^2$. Forgetting the Jacobian would give only $\\tfrac{9\\pi}{4}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Jacobians in three dimensions',
      blocks: [
        {
          type: 'p',
          text: 'For a transformation $T(u, v, w) = (x, y, z)$ of space, a tiny box $\\Delta u\\,\\Delta v\\,\\Delta w$ maps to an almost-parallelepiped spanned by $\\vec{r}_u\\,\\Delta u$, $\\vec{r}_v\\,\\Delta v$, $\\vec{r}_w\\,\\Delta w$. Its volume is the absolute value of the [[la-scalar-triple-product|scalar triple product]], which is a $3 \\times 3$ determinant:',
        },
        {
          type: 'theorem',
          name: 'Change of variables in a triple integral',
          tex: '\\frac{\\partial(x, y, z)}{\\partial(u, v, w)} = \\det\\begin{bmatrix} x_u & x_v & x_w \\\\ y_u & y_v & y_w \\\\ z_u & z_v & z_w \\end{bmatrix}, \\qquad \\iiint_R f\\,dV = \\iiint_S f\\big(T(u, v, w)\\big)\\left|\\frac{\\partial(x, y, z)}{\\partial(u, v, w)}\\right|du\\,dv\\,dw',
          text: 'Same hypotheses as in two dimensions: $T$ is $C^1$ and one-to-one on the interior of $S$ with nonzero Jacobian there.',
        },
        {
          type: 'derivation',
          title: 'The spherical Jacobian',
          steps: [
            { tex: 'x = \\rho\\sin\\phi\\cos\\theta, \\quad y = \\rho\\sin\\phi\\sin\\theta, \\quad z = \\rho\\cos\\phi', why: 'Variables in the order $(\\rho, \\phi, \\theta)$.' },
            { tex: '\\frac{\\partial(x, y, z)}{\\partial(\\rho, \\phi, \\theta)} = \\det\\begin{bmatrix} \\sin\\phi\\cos\\theta & \\rho\\cos\\phi\\cos\\theta & -\\rho\\sin\\phi\\sin\\theta \\\\ \\sin\\phi\\sin\\theta & \\rho\\cos\\phi\\sin\\theta & \\rho\\sin\\phi\\cos\\theta \\\\ \\cos\\phi & -\\rho\\sin\\phi & 0 \\end{bmatrix}', why: 'Columns are the partial derivatives with respect to $\\rho$, $\\phi$, $\\theta$.' },
            { tex: '= \\cos\\phi\\,(\\rho^2\\sin\\phi\\cos\\phi\\cos^2\\theta + \\rho^2\\sin\\phi\\cos\\phi\\sin^2\\theta) + \\rho\\sin\\phi\\,(\\rho\\sin^2\\phi\\cos^2\\theta + \\rho\\sin^2\\phi\\sin^2\\theta)', why: 'Expand along the bottom row (it has a zero). The entry $-\\rho\\sin\\phi$ sits in position $(3, 2)$, whose cofactor sign is $-$, so it contributes $+\\rho\\sin\\phi$ times its minor.' },
            { tex: '= \\rho^2\\sin\\phi\\cos^2\\phi + \\rho^2\\sin^3\\phi', why: 'Inside each bracket, $\\cos^2\\theta + \\sin^2\\theta = 1$.' },
            { tex: '= \\rho^2\\sin\\phi\\,(\\cos^2\\phi + \\sin^2\\phi) = \\rho^2\\sin\\phi', why: 'Factor and use the identity again.' },
          ],
          result: 'The determinant reproduces the $\\rho^2\\sin\\phi$ you found from the wedge picture. Listing the variables as $(\\rho, \\theta, \\phi)$ instead swaps two columns and gives $-\\rho^2\\sin\\phi$; the absolute value makes the order irrelevant.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why polar, cylindrical and spherical are special cases',
          text: 'Each is just a particular transformation. Polar: $\\frac{\\partial(x, y)}{\\partial(r, \\theta)} = r$. Cylindrical: the matrix is the polar one with an extra row and column for $z$ (a $1$ on the diagonal), so the Jacobian is again $r$. Spherical: $\\rho^2\\sin\\phi$. One theorem, three familiar formulas, and infinitely many custom substitutions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Find the volume of the ellipsoid $\\dfrac{x^2}{4} + \\dfrac{y^2}{9} + z^2 \\le 1$. An exact answer like `8pi` or a decimal to two places is accepted.',
      label: '$V =$',
      answer: '8pi',
      answerTex: '8\\pi',
      hint: 'Use $x = 2u$, $y = 3v$, $z = w$. The Jacobian is constant, and the unit ball has volume $\\tfrac{4}{3}\\pi$.',
      explanation: 'The semi-axes are $a = 2$, $b = 3$, $c = 1$. With $x = 2u$, $y = 3v$, $z = w$ the ellipsoid becomes the unit ball and $\\frac{\\partial(x, y, z)}{\\partial(u, v, w)} = 2 \\cdot 3 \\cdot 1 = 6$. So $V = 6 \\cdot \\tfrac{4}{3}\\pi = 8\\pi \\approx 25.13$. A common slip is using the squares $4$ and $9$ as the stretch factors; the stretch is by the semi-axis lengths $2$ and $3$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If a one-to-one transformation $T$ has a negative Jacobian everywhere on $S$, then $\\iint_{T(S)} 1\\,dA$ computed with the change-of-variables formula comes out negative.',
      answer: false,
      explanation: 'The formula uses $\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|$, so areas always come out positive. A negative Jacobian means $T$ **reverses orientation**, like a mirror: a counterclockwise loop in the $uv$-plane maps to a clockwise loop. It does not mean negative area. (In one variable the same fact hides inside the limits: a decreasing substitution flips the limits of integration, which absorbs the minus sign of $g\'(u)$.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Jacobians in games and graphics',
      blocks: [
        {
          type: 'p',
          text: 'Jacobians appear wherever a program maps one space onto another and cares about density. A classic case: you want to scatter particles, bullet-spread points, or grass blades **uniformly** over a disk of radius $1$. The tempting code picks $r$ and $\\theta$ uniformly: $r = u$, $\\theta = 2\\pi v$ with $u, v$ uniform in $[0, 1]$. The result clumps in the middle. The Jacobian explains why.',
        },
        {
          type: 'derivation',
          title: 'Why $r = \\sqrt{u}$ samples a disk uniformly',
          steps: [
            { tex: 'x = u\\cos 2\\pi v,\\ y = u\\sin 2\\pi v: \\quad \\frac{\\partial(x, y)}{\\partial(u, v)} = 2\\pi u', why: 'This is polar coordinates with $r = u$ and $\\theta = 2\\pi v$, so the Jacobian is $r \\cdot 2\\pi$ (chain rule for the $2\\pi$ stretch).' },
            { tex: '\\text{density in the disk} \\propto \\frac{1}{2\\pi u}', why: 'Equal patches $du\\,dv$ of the unit square carry equal numbers of samples, but they are spread over areas $2\\pi u\\,du\\,dv$: tiny near the center, so samples pile up there.' },
            { tex: 'x = \\sqrt{u}\\cos 2\\pi v,\\ y = \\sqrt{u}\\sin 2\\pi v: \\quad \\frac{\\partial(x, y)}{\\partial(u, v)} = \\sqrt{u} \\cdot \\frac{1}{2\\sqrt{u}} \\cdot 2\\pi = \\pi', why: 'Now $r = \\sqrt{u}$ with $\\frac{dr}{du} = \\frac{1}{2\\sqrt{u}}$, so $dA = r\\,dr\\,d\\theta = \\sqrt{u} \\cdot \\frac{du}{2\\sqrt{u}} \\cdot 2\\pi\\,dv = \\pi\\,du\\,dv$.' },
          ],
          result: 'A constant Jacobian means every patch of the square is stretched equally, so the samples are uniform. The disk of radius $\\tfrac{1}{2}$ has a quarter of the area, so it should receive a quarter of the samples, not half.',
        },
        {
          type: 'code',
          title: 'disk_sampling.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

struct P2 { double x, y; };

// (u, v) uniform in the unit square  ->  a point in the unit disk.
P2 naive(double u, double v) {            // r = u:       dA = 2*pi*u du dv
    const double th = 2 * std::acos(-1.0) * v;
    return {u * std::cos(th), u * std::sin(th)};
}
P2 uniform(double u, double v) {          // r = sqrt(u): dA = pi du dv
    const double th = 2 * std::acos(-1.0) * v, r = std::sqrt(u);
    return {r * std::cos(th), r * std::sin(th)};
}

int main() {
    std::mt19937 gen(7);
    auto unit = [&] { return gen() / 4294967296.0; };
    const int N = 200000;
    int innerNaive = 0, innerUniform = 0;     // samples with r < 1/2
    for (int i = 0; i < N; ++i) {
        double u = unit(), v = unit();
        P2 a = naive(u, v), b = uniform(u, v);
        if (std::hypot(a.x, a.y) < 0.5) ++innerNaive;
        if (std::hypot(b.x, b.y) < 0.5) ++innerUniform;
    }
    std::printf("inner disk is %.4f of the area\\n", 0.25);
    std::printf("naive   r = u      : %.4f of the samples\\n", double(innerNaive) / N);
    std::printf("uniform r = sqrt(u): %.4f of the samples\\n", double(innerUniform) / N);
}`,
          output: `inner disk is 0.2500 of the area
naive   r = u      : 0.4991 of the samples
uniform r = sqrt(u): 0.2495 of the samples`,
          annotations: [
            { lines: '8-11', text: 'Uniform $r$: the Jacobian $2\\pi u$ is small near the center, so equal patches of $(u, v)$ get squeezed into small areas there.' },
            { lines: '12-15', text: 'Taking $r = \\sqrt{u}$ makes the Jacobian the constant $\\pi$: uniform density.' },
            { lines: '25-26', text: 'Count samples landing in the inner disk $r < \\tfrac{1}{2}$, which is $\\tfrac{1}{4}$ of the area.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'More places the Jacobian shows up',
          text: 'In **texture mapping**, the Jacobian of the map from texture space $(u, v)$ to the screen tells the GPU how many texels fall under one pixel; GPUs estimate it from neighboring pixels to choose a mipmap level. In **mesh deformation** and soft-body physics, the determinant of each element\'s deformation matrix is its volume change: a value near $0$ means the element is crushed, and a **negative** value means it has turned inside out, a bug the solver must detect and fix.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps of a change of variables in a double integral in order.',
      lines: [
        'Choose $u$ and $v$ so that the boundary of $R$ or the integrand becomes simple',
        'Translate every boundary curve of $R$ to find $S$, and compute $\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|$ (a reciprocal if you differentiated $u$, $v$ with respect to $x$, $y$)',
        'Rewrite $f$ in terms of $u$ and $v$, multiply by the absolute Jacobian, and integrate over $S$',
        'Sanity-check: with $f = 1$, the area of $S$ times the Jacobian should match the area of $R$',
      ],
      distractors: ['Replace $dx\\,dy$ by $du\\,dv$'],
      explanation: 'The choice of variables drives everything else, so it comes first. Then find the new region and the scale factor (independent calculations, so they share a step), and only then assemble and integrate. A quick area check at the end catches a missing or inverted Jacobian. The distractor drops the Jacobian, the error that turns $\\tfrac{3}{4}(e - e^{-1})$ into a wrong number.',
    },
  ],
  takeaways: [
    'A transformation $T(u, v) = (x, y)$ scales area near each point by $\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|$, the absolute determinant of its matrix of partial derivatives.',
    '$\\iint_R f\\,dA = \\iint_S f(x(u, v), y(u, v))\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right|du\\,dv$, provided $T$ is $C^1$ and one-to-one on the interior with nonzero Jacobian.',
    'If you define $u$, $v$ in terms of $x$, $y$, use $\\frac{\\partial(x, y)}{\\partial(u, v)} = 1 \\Big/ \\frac{\\partial(u, v)}{\\partial(x, y)}$.',
    'Ellipses and ellipsoids are stretched disks and balls: Jacobians $ab$ and $abc$, areas $\\pi ab$ and volumes $\\tfrac{4}{3}\\pi abc$.',
    'Polar ($r$), cylindrical ($r$) and spherical ($\\rho^2\\sin\\phi$) volume elements are all Jacobians; a negative Jacobian means orientation is reversed, never negative area.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 5.7 Change of Variables in Multiple Integrals',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 5.7 works through the trapezoid example and several other regions where the right substitution makes the integral easy.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'The "Change of Variables" session in Unit 3 explains the Jacobian as an area-scaling factor with clear pictures.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The "Jacobian" videos animate how a nonlinear map looks locally linear when you zoom in.',
    },
    {
      title: 'Wikipedia — Jacobian matrix and determinant',
      url: 'https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant',
      source: 'wikipedia',
      note: 'The general $n$-dimensional definition, the inverse function theorem, and the spherical and cylindrical examples.',
    },
  ],
};
