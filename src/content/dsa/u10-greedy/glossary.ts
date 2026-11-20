import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  // -------------------------------------------------------------- dsa-greedy
  {
    id: 'dsa-greedy-algorithm',
    term: 'Greedy algorithm',
    aliases: ['greedy method', 'greedy'],
    course: 'dsa',
    category: 'Algorithm Design',
    short: 'An algorithm that builds a solution through a sequence of irrevocable choices, each time taking the option that looks best right now.',
    long: 'It is correct when the problem has the greedy-choice property (some optimal solution contains the greedy first choice) and optimal substructure (what remains is a smaller instance of the same problem). Correctness is proved with "greedy stays ahead" or an exchange argument; otherwise a counterexample usually exists, as with 0/1 knapsack or coins $\\{1, 3, 4\\}$.',
    see: ['dsa-exchange-argument', 'dm-huffman-coding'],
  },
  {
    id: 'dsa-exchange-argument',
    term: 'Exchange argument',
    aliases: ['exchange proof', 'swap argument'],
    course: 'dsa',
    category: 'Algorithm Design',
    short: 'A proof technique for greedy algorithms: transform any optimal solution into the greedy one by swaps that keep it feasible and never make it worse.',
    long: 'Typical uses: fractional knapsack (swap weight of a lower-density item for a higher-density one), Huffman coding (swap the two rarest symbols to the deepest leaves) and the cut property for minimum spanning trees (swap the light edge into the tree).',
    see: ['dsa-greedy-algorithm', 'dsa-cut-property'],
  },
  // ----------------------------------------------------------------- dsa-mst
  {
    id: 'dsa-cut-property',
    term: 'Cut property',
    aliases: ['light edge', 'safe edge'],
    course: 'dsa',
    category: 'Minimum Spanning Trees',
    short: 'For any cut (a split of the vertices into two nonempty sides), a lightest edge crossing it belongs to some minimum spanning tree; if it is the unique lightest, it belongs to every MST.',
    long: 'It justifies Kruskal (the cut around the tree containing one endpoint), Prim (the cut around the growing tree) and Borůvka. Its mirror image, the cycle property, says the unique heaviest edge of a cycle is in no MST.',
    see: ['dm-mst', 'dm-kruskal', 'dm-prim'],
  },
  {
    id: 'dsa-perfect-maze',
    term: 'Perfect maze',
    aliases: ['spanning-tree maze'],
    course: 'dsa',
    category: 'Minimum Spanning Trees',
    short: 'A maze with exactly one route between any two cells: every cell is reachable and there are no loops. It is a spanning tree of the grid graph, so an $R \\times C$ maze has $RC - 1$ passages.',
    long: 'Randomized Kruskal (shuffle the walls, open those joining different regions) and randomized Prim (grow from one cell through random frontier walls) generate them; a depth-first "recursive backtracker" gives long winding corridors with fewer dead ends.',
    see: ['dm-spanning-tree', 'dm-union-find'],
  },
];
