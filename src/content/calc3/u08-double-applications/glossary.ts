import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'calc3-lamina',
    term: 'Lamina',
    aliases: ['thin plate', 'laminae', 'area density'],
    course: 'calc3',
    category: 'Multiple Integrals',
    short: 'A flat plate so thin that it is modeled as a region $D$ of the plane with an **area density** $\\rho(x, y)$ (mass per unit area). Its mass is $m = \\iint_D \\rho\\,dA$.',
    long: 'Moments $M_x = \\iint_D y\\rho\\,dA$ and $M_y = \\iint_D x\\rho\\,dA$ give the center of mass $\\left(\\frac{M_y}{m}, \\frac{M_x}{m}\\right)$; moments of inertia use squared distances, e.g. $I_0 = \\iint_D (x^2 + y^2)\\rho\\,dA$. With constant density the center of mass is the centroid.',
    tex: 'm = \\iint_D \\rho(x, y)\\,dA, \\qquad (\\bar x, \\bar y) = \\left(\\frac{M_y}{m}, \\frac{M_x}{m}\\right)',
    see: ['calc2-center-of-mass', 'calc2-centroid', 'phys-moment-of-inertia'],
  },
  {
    id: 'calc3-radius-of-gyration',
    term: 'Radius of Gyration',
    course: 'calc3',
    category: 'Multiple Integrals',
    short: 'The distance $R = \\sqrt{I/m}$ at which the whole mass $m$ of a body, concentrated at a single radius, would have the same moment of inertia $I$ about the given axis.',
    long: 'For a uniform disk about its center $I = \\frac12 ma^2$, so $R = \\frac{a}{\\sqrt2} \\approx 0.71a$; for a thin ring $R = a$. Engineers use it to compare how "spread out" the mass of different cross-sections is.',
    tex: 'R = \\sqrt{\\frac{I}{m}}',
    see: ['phys-moment-of-inertia', 'calc3-lamina'],
  },
  {
    id: 'calc3-circular-error-probable',
    term: 'Circular Error Probable',
    aliases: ['CEP', 'circular error probability'],
    course: 'calc3',
    category: 'Multiple Integrals',
    short: 'The radius of the circle, centered on the aim point, that contains half of the impacts of a weapon or half of the position fixes of a navigation system.',
    long: 'If the horizontal and vertical errors are independent normal variables with mean $0$ and standard deviation $\\sigma$, a polar double integral gives $P(r \\le R) = 1 - e^{-R^2/(2\\sigma^2)}$, so $\\text{CEP} = \\sigma\\sqrt{2\\ln 2} \\approx 1.1774\\,\\sigma$.',
    tex: '\\text{CEP} = \\sigma\\sqrt{2\\ln 2}',
    see: ['stat-normal-distribution', 'stat-joint-distribution'],
  },
  {
    id: 'calc3-surface-area-graph',
    term: 'Surface Area of a Graph',
    aliases: ['surface area of z = f(x, y)', 'area of a surface'],
    course: 'calc3',
    category: 'Multiple Integrals',
    short: 'The area of the part of the surface $z = f(x, y)$ lying over a region $D$: $A(S) = \\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\,dA$, for $f$ with continuous partial derivatives.',
    long: 'Over a small rectangle of area $\\Delta A$ the surface is nearly its tangent plane, a parallelogram spanned by $\\langle \\Delta x, 0, f_x\\,\\Delta x\\rangle$ and $\\langle 0, \\Delta y, f_y\\,\\Delta y\\rangle$, whose area is the length of their cross product, $\\sqrt{1 + f_x^2 + f_y^2}\\,\\Delta A$. The factor is $\\frac{1}{\\cos\\gamma}$, where $\\gamma$ is the angle between the upward normal $\\langle -f_x, -f_y, 1\\rangle$ and $\\mathbf{k}$.',
    tex: 'A(S) = \\iint_D \\sqrt{1 + \\left(\\frac{\\partial z}{\\partial x}\\right)^2 + \\left(\\frac{\\partial z}{\\partial y}\\right)^2}\\,dA',
    see: ['cross-product', 'surface-area-of-revolution', 'arc-length-integral'],
  },
];
