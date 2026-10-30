import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'leading-entry',
    term: 'Leading Entry',
    course: 'linalg',
    category: 'Systems',
    short: 'The leftmost nonzero entry of a nonzero row of a matrix.',
    long: 'Echelon form is defined through leading entries: each one must lie strictly to the right of the leading entry in the row above. In reduced echelon form every leading entry is $1$ and is the only nonzero entry in its column; its location is a pivot position.',
    tex: '\\begin{bmatrix} 0 & \\mathbf{3} & 1 & 2 \\\\ 0 & 0 & 0 & \\mathbf{5} \\end{bmatrix}',
    see: ['echelon-form', 'pivot', 'reduced-echelon-form'],
  },
  {
    id: 'partial-pivoting',
    term: 'Partial Pivoting',
    course: 'linalg',
    category: 'Systems',
    short: 'In floating-point elimination, choosing as pivot the entry of **largest absolute value** in the current column (below the rows already used), and swapping its row into place.',
    long: 'It keeps every multiplier at most $1$ in absolute value, so rounding errors are not amplified. Without it, a tiny pivot such as $10^{-20}$ produces multipliers like $10^{20}$ that wipe out the other digits and can return a completely wrong answer. Standard libraries (LAPACK, Eigen, NumPy) use partial pivoting by default.',
    see: ['pivot', 'gaussian-elimination'],
  },
  {
    id: 'nontrivial-solution',
    term: 'Nontrivial Solution',
    course: 'linalg',
    category: 'Systems',
    short: 'A solution of a homogeneous system $A\\mathbf{x} = \\mathbf{0}$ other than $\\mathbf{x} = \\mathbf{0}$.',
    long: 'A homogeneous system has a nontrivial solution exactly when it has at least one free variable — in particular whenever it has more unknowns than equations. Then it has infinitely many.',
    see: ['trivial-solution', 'homogeneous-system', 'free-variable'],
  },
  {
    id: 'la-particular-solution',
    term: 'Particular Solution (of a Linear System)',
    course: 'linalg',
    category: 'Systems',
    short: 'Any one fixed solution $\\mathbf{p}$ of a consistent system $A\\mathbf{x} = \\mathbf{b}$.',
    long: 'Every solution of $A\\mathbf{x} = \\mathbf{b}$ has the form $\\mathbf{p} + \\mathbf{v}_h$, where $\\mathbf{v}_h$ solves the homogeneous system $A\\mathbf{x} = \\mathbf{0}$. Geometrically, the solution set is the solution set of $A\\mathbf{x} = \\mathbf{0}$ translated by $\\mathbf{p}$. The choice of $\\mathbf{p}$ is not unique; setting all free variables to $0$ gives a convenient one.',
    tex: '\\mathbf{x} = \\mathbf{p} + s\\mathbf{u} + t\\mathbf{v}',
    see: ['parametric-vector-form', 'homogeneous-system'],
  },
];
