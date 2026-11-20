import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-np-completeness',
  title: 'NP-Completeness and Coping with Hard Problems',
  summary: 'P, NP, NP-hard and NP-complete stated precisely, polynomial-time reductions (independent set and vertex cover), the classic hard problems and their easy cousins — and what to do when your problem is one of them: approximation algorithms, local search, simulated annealing and exact search for small inputs.',
  minutes: 22,
  objectives: [
    'Define decision problems, P, NP (via certificates and verifiers), NP-hard and NP-complete precisely',
    'Explain polynomial-time reductions, which direction proves hardness, and carry out the independent set ↔ vertex cover reduction',
    'Recognize classic NP-complete problems and their polynomial-time cousins, including pseudo-polynomial cases',
    'Analyze the matching-based 2-approximation for vertex cover and compare TSP heuristics (nearest neighbor, 2-opt, simulated annealing) with exact algorithms',
    'Choose a practical strategy for a hard problem in a game or engine: exact for small $n$, approximation, heuristics with a time budget, or a reformulation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'P and NP, precisely',
      blocks: [
        {
          type: 'p',
          text: 'Discrete Math introduced [[dm-p-np|P and NP]] informally. To use the theory you need the precise version, because almost every misunderstanding of NP-completeness comes from a fuzzy definition.',
        },
        {
          type: 'list',
          items: [
            'A **decision problem** asks a yes/no question about an input. Optimization problems get a decision version by adding a threshold: "is there a tour of length $\\le k$?", "is there an independent set of size $\\ge k$?". If you could solve the decision version fast, binary search on $k$ would give the optimum value fast too.',
            '**Input size** $n$ is the number of **bits** needed to write the input. A graph with $V$ vertices and $E$ edges takes about $V + E$ words; a number $W$ takes $\\log_2 W$ bits — which is why $\\Theta(nW)$ knapsack is only [[dsa-pseudo-polynomial|pseudo-polynomial]].',
          ],
        },
        {
          type: 'theorem',
          name: 'The classes P and NP',
          text: '**P**: decision problems solvable by an algorithm in time $O(n^c)$ for some constant $c$.\n\n**NP**: decision problems for which a **yes**-instance has a **certificate** of polynomial length that a polynomial-time **verifier** can check. Formally: there is a polynomial-time $V(x, y)$ with $x$ a yes-instance $\\iff$ some short $y$ makes $V(x, y)$ accept.',
        },
        {
          type: 'table',
          headers: ['Problem (decision version)', 'Certificate', 'Verification'],
          rows: [
            ['SAT: can this formula be made true?', 'a true/false value for each variable', 'evaluate the formula, $O(\\text{size})$'],
            ['Independent set of size $\\ge k$?', 'the $k$ vertices', 'check every pair is non-adjacent, $O(k^2)$ with a matrix'],
            ['Tour of length $\\le k$ through all cities?', 'the order of cities', 'check it is a permutation and add up lengths, $O(n)$'],
            ['Subset of numbers summing to exactly $T$?', 'the subset', 'add it up, $O(n)$'],
          ],
          caption: 'Every one of these is in NP. None is known to be in P.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'NP does not mean "not polynomial"',
          text: 'NP stands for **nondeterministic polynomial time**: a machine that could guess the certificate would run in polynomial time. Every problem in P is also in NP (the verifier can ignore the certificate and just solve the problem), so sorting and shortest paths are in NP too. Whether $\\mathrm{P} = \\mathrm{NP}$ is open; nearly everyone believes $\\mathrm{P} \\ne \\mathrm{NP}$. Note also the asymmetry: NP only demands short proofs of **yes** answers. "Is there **no** tour of length $\\le k$?" is not obviously in NP.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'Because NP stands for a class of hard problems, no problem in NP can be solved in polynomial time.',
      answer: false,
      explanation: 'NP is the class of problems whose yes-answers can be **checked** in polynomial time. Every problem in P is in NP: shortest paths, sorting and MST are all in NP. The *hardest* problems in NP (the NP-complete ones) are believed not to be in P, but nobody has proved it — that is the P vs NP question. "NP" means *nondeterministic* polynomial, not *non*-polynomial.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Reductions: independent set and vertex cover',
      blocks: [
        {
          type: 'p',
          text: 'Hardness is always **relative**. A [[dsa-polynomial-reduction|polynomial-time reduction]] from $A$ to $B$, written $A \\le_p B$, is a polynomial-time function $f$ turning each instance $x$ of $A$ into an instance $f(x)$ of $B$ with the same answer. Then a fast algorithm for $B$ gives a fast algorithm for $A$: compute $f(x)$, solve it. So $A \\le_p B$ means "$A$ is no harder than $B$".',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the reduction must be polynomial, and why direction matters',
          text: 'If $f$ runs in time $O(n^a)$, its output has size $O(n^a)$, and a $O(N^b)$ algorithm for $B$ on that output takes $O(n^{ab})$: still polynomial. So $A \\le_p B$ and $B \\in \\mathrm{P}$ give $A \\in \\mathrm{P}$. Read backward, the same implication says: if $A$ is hard, then $B$ must be hard too. Hardness flows **along** the arrow, from $A$ to $B$; easiness flows against it.',
        },
        {
          type: 'p',
          text: 'Here is a reduction in action. An [[dsa-independent-set|independent set]] $S$ has no edge inside it. A [[dsa-vertex-cover|vertex cover]] $C$ touches every edge. They are two views of the same thing:',
        },
        {
          type: 'theorem',
          name: 'Independent set ↔ vertex cover',
          tex: 'S \\text{ is independent in } G = (V, E) \\iff V \\setminus S \\text{ is a vertex cover of } G',
          text: 'So $G$ has an independent set of size $\\ge k$ if and only if it has a vertex cover of size $\\le |V| - k$. The reduction is $f(G, k) = (G, |V| - k)$: linear time.',
        },
        {
          type: 'derivation',
          title: 'Proof of the equivalence',
          steps: [
            { tex: 'S \\text{ independent} \\iff \\text{no edge } uv \\text{ has } u \\in S \\text{ and } v \\in S', why: 'The definition of independent set.' },
            { tex: '\\iff \\text{every edge } uv \\text{ has } u \\notin S \\text{ or } v \\notin S', why: 'De Morgan: "not (both in $S$)" is "at least one outside $S$".' },
            { tex: '\\iff \\text{every edge } uv \\text{ has } u \\in V \\setminus S \\text{ or } v \\in V \\setminus S', why: 'Being outside $S$ is being in the complement.' },
            { tex: '\\iff V \\setminus S \\text{ is a vertex cover}', why: 'That is the definition of a vertex cover: every edge has an endpoint in the set.' },
          ],
          result: 'Maximum independent set and minimum vertex cover always satisfy $\\alpha(G) + \\tau(G) = |V|$. Each problem reduces to the other, so they are equally hard.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg"><line x1="72.5" y1="118.5" x2="127.5" y2="67.5" stroke="currentColor" stroke-width="1.6"/><line x1="72.5" y1="141.5" x2="127.5" y2="192.5" stroke="currentColor" stroke-width="1.6"/><line x1="152.5" y1="67.5" x2="207.5" y2="118.5" stroke="currentColor" stroke-width="1.6"/><line x1="152.5" y1="192.5" x2="207.5" y2="141.5" stroke="currentColor" stroke-width="1.6"/><line x1="237.0" y1="130.0" x2="283.0" y2="130.0" stroke="currentColor" stroke-width="1.6"/><line x1="312.5" y1="118.5" x2="367.5" y2="67.5" stroke="currentColor" stroke-width="1.6"/><line x1="312.5" y1="141.5" x2="367.5" y2="192.5" stroke="currentColor" stroke-width="1.6"/><line x1="380.0" y1="73.0" x2="380.0" y2="187.0" stroke="currentColor" stroke-width="1.6"/><circle cx="60" cy="130" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="60" y="135" text-anchor="middle" font-size="14" class="t-orange">A</text><circle cx="140" cy="56" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="140" y="61" text-anchor="middle" font-size="14" class="t-green">B</text><circle cx="140" cy="204" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="140" y="209" text-anchor="middle" font-size="14" class="t-green">C</text><circle cx="220" cy="130" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="220" y="135" text-anchor="middle" font-size="14" class="t-orange">D</text><circle cx="300" cy="130" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="300" y="135" text-anchor="middle" font-size="14" class="t-orange">E</text><circle cx="380" cy="56" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="380" y="61" text-anchor="middle" font-size="14" class="t-orange">F</text><circle cx="380" cy="204" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="380" y="209" text-anchor="middle" font-size="14" class="t-green">G</text><text x="220" y="30" text-anchor="middle" font-size="13" class="t-green">independent set S = {B, C, G}</text><text x="220" y="240" text-anchor="middle" font-size="13" class="t-orange">vertex cover V − S = {A, D, E, F}</text></svg>`,
          alt: 'A graph on vertices A to G with edges AB, AC, BD, CD, DE, EF, EG, FG. B, C and G are green (an independent set); A, D, E and F are orange (a vertex cover).',
          caption: 'Green vertices $\\{B, C, G\\}$ have no edges among them; the orange rest $\\{A, D, E, F\\}$ touches every edge. Three plus four is all seven vertices.',
          maxWidth: 440,
        },
        {
          type: 'p',
          text: 'A second classic: $S$ is independent in $G$ exactly when $S$ is a **clique** (every pair adjacent) in the complement graph $\\overline{G}$, which has an edge wherever $G$ does not. So Independent Set $\\le_p$ Clique by building $\\overline{G}$ in $O(V^2)$.',
        },
        {
          type: 'code',
          title: 'vc.cpp',
          runnable: true,
          code: `#include <bit>
#include <cstdio>
#include <random>
#include <utility>
#include <vector>

using Edge = std::pair<int, int>;

// Exact answers by trying all 2^n vertex subsets (fine for n <= 20).
bool isCover(unsigned S, const std::vector<Edge>& E) {
    for (auto [u, v] : E) if (!(S >> u & 1) && !(S >> v & 1)) return false;
    return true;
}
bool isIndependent(unsigned S, const std::vector<Edge>& E) {
    for (auto [u, v] : E) if ((S >> u & 1) && (S >> v & 1)) return false;
    return true;
}

// The 2-approximation: take both ends of every edge that is still uncovered.
int approxCover(int n, const std::vector<Edge>& E) {
    std::vector<bool> in(n, false);
    int size = 0;
    for (auto [u, v] : E)
        if (!in[u] && !in[v]) { in[u] = in[v] = true; size += 2; }
    return size;
}

int main() {
    std::mt19937 rng(7);
    double worst = 0;
    int identityHolds = 0;
    for (int trial = 0; trial < 200; ++trial) {
        int n = 6 + (int)(rng() % 9);                       // 6..14 vertices
        std::vector<Edge> E;
        for (int u = 0; u < n; ++u)
            for (int v = u + 1; v < n; ++v)
                if (rng() % 100 < 30) E.push_back({u, v});  // each edge with probability 0.3
        int minCover = n, maxIndep = 0;
        for (unsigned S = 0; S < (1u << n); ++S) {
            int k = std::popcount(S);
            if (k < minCover && isCover(S, E)) minCover = k;
            if (k > maxIndep && isIndependent(S, E)) maxIndep = k;
        }
        if (minCover + maxIndep == n) ++identityHolds;
        if (minCover > 0) {
            double ratio = (double)approxCover(n, E) / minCover;
            if (ratio > worst) worst = ratio;
        }
        if (trial < 3)
            std::printf("n=%2d  edges=%2zu  min cover=%d  max independent set=%d  approx cover=%d\\n",
                        n, E.size(), minCover, maxIndep, approxCover(n, E));
    }
    std::printf("min cover + max independent set == n in %d of 200 graphs\\n", identityHolds);
    std::printf("worst approx/optimal ratio seen: %.2f (guaranteed <= 2)\\n", worst);
}`,
          output: `n= 6  edges= 3  min cover=2  max independent set=4  approx cover=4
n= 6  edges= 3  min cover=2  max independent set=4  approx cover=4
n= 9  edges=13  min cover=5  max independent set=4  approx cover=6
min cover + max independent set == n in 200 of 200 graphs
worst approx/optimal ratio seen: 2.00 (guaranteed <= 2)`,
          annotations: [
            { lines: '10-17', text: 'Both properties are cheap to *check* for a given set: that is the NP verifier.' },
            { lines: '20-26', text: 'The approximation from later in the lesson, for comparison.' },
            { lines: '39-43', text: 'Exact answers by brute force over all $2^n$ subsets: exponential, fine for $n \\le 14$ here.' },
            { lines: 44, text: 'The theorem, tested on $200$ random graphs.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A graph has $12$ vertices, and its largest independent set has $5$ vertices. How many vertices does its smallest vertex cover have?',
      answer: '7',
      hint: 'Complements of independent sets are exactly the vertex covers.',
      explanation: 'By the theorem, $\\alpha(G) + \\tau(G) = |V|$, so $\\tau(G) = 12 - 5 = 7$. Why exactly: the complement of a maximum independent set is a cover of size $7$, so $\\tau \\le 7$; and if a cover of size $6$ existed, its complement would be an independent set of size $6 > 5$, a contradiction.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'You suspect that your game\'s "Loot Packing" problem is NP-hard. You know 3-SAT is NP-complete. Which reduction do you need to construct?',
      options: [
        { text: 'Loot Packing $\\le_p$ 3-SAT: translate any packing instance into a formula.', why: 'That shows Loot Packing is *no harder* than 3-SAT (you could solve it with a SAT solver). It says nothing about Loot Packing being hard.' },
        { text: '3-SAT $\\le_p$ Loot Packing: translate any formula into a packing instance with the same yes/no answer.', correct: true, why: 'Then a fast Loot Packing algorithm would solve 3-SAT fast, and hence all of NP. So Loot Packing is at least as hard as every NP problem: NP-hard.' },
        { text: 'Either direction works, because reductions are symmetric.', why: 'Reductions are not symmetric: $A \\le_p B$ transfers *easiness* from $B$ to $A$ and *hardness* from $A$ to $B$.' },
        { text: 'No reduction is needed: show that the brute-force algorithm takes exponential time.', why: 'A slow algorithm proves nothing; there might be a fast one you haven\'t found. Hardness proofs must be relative to known hard problems.' },
      ],
      explanation: 'Remember the arrow as "is no harder than". To prove $X$ hard, show a known hard problem is no harder than $X$: $\\text{3-SAT} \\le_p X$. If $X$ is also in NP (a packing can be checked fast), then $X$ is NP-complete. The reverse direction is still useful in practice — it is exactly how you hand a problem to an industrial SAT solver — but it is not a hardness proof.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'NP-hard, NP-complete, and the usual suspects',
      blocks: [
        {
          type: 'definition',
          term: 'NP-hard and NP-complete',
          text: 'A problem $X$ is **NP-hard** if every problem in NP reduces to it: $A \\le_p X$ for all $A \\in \\mathrm{NP}$. It is **[[dm-np-complete|NP-complete]]** if, in addition, $X \\in \\mathrm{NP}$. Because reductions compose, it is enough to reduce **one** known NP-complete problem to $X$.',
        },
        {
          type: 'p',
          text: 'The first NP-complete problem needed a direct proof: the **Cook–Levin theorem** (1971) shows that [[dm-satisfiability|SAT]] is NP-complete by encoding any polynomial-time verifier\'s computation as a Boolean formula. Karp (1972) then reduced SAT to 21 more problems, and today there are thousands. NP-hard problems need not be in NP at all: optimization versions ("find the shortest tour") and even undecidable problems such as halting are NP-hard.',
        },
        {
          type: 'table',
          headers: ['NP-complete', 'Deceptively similar, but in P'],
          rows: [
            ['3-SAT (clauses of 3 literals)', '2-SAT (clauses of 2 literals): linear time via strongly connected components'],
            ['[[dm-hamilton-circuit|Hamilton cycle]]: visit every **vertex** once', 'Euler circuit: use every **edge** once (check degrees)'],
            ['[[dm-tsp|TSP]] (decision): tour of length $\\le k$', 'Shortest path between two points; MST'],
            ['Longest simple path', 'Longest path in a DAG (DP in topological order)'],
            ['3-coloring a graph', '2-coloring (is it bipartite? BFS)'],
            ['Independent set, vertex cover, clique', 'The same on trees or bipartite graphs (tree DP, matching)'],
            ['0/1 knapsack, subset sum, partition', 'Fractional knapsack (greedy); small numbers (pseudo-polynomial DP)'],
            ['Bin packing, graph coloring, set cover', 'Interval scheduling (greedy by end time)'],
          ],
          caption: 'A small change in a problem statement can cross the line. Learning these pairs is how you recognize which side of it you are on.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Weakly vs strongly NP-hard',
          text: 'Knapsack and subset sum are NP-hard only because their **numbers** can be exponentially large; with numbers bounded by a polynomial, the $\\Theta(nW)$ DP is polynomial. They are *weakly* NP-hard. Bin packing, TSP and 3-partition stay hard even with small numbers: *strongly* NP-hard. That distinction tells you whether a DP over values can save you.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the precise definitions.',
      template: 'A problem $X$ is NP-hard if ___ reduces to $X$ in polynomial time. It is NP-complete if it is NP-hard **and** ___. To prove a new problem NP-hard, reduce ___.',
      blanks: [{ answers: ['every problem in NP'] }, { answers: ['$X$ is in NP'] }, { answers: ['a known NP-complete problem to $X$'] }],
      wordBank: ['every problem in NP', 'some problem in P', '$X$ is in NP', '$X$ is not in P', 'a known NP-complete problem to $X$', '$X$ to a known NP-complete problem'],
      hint: 'NP-complete = in NP + NP-hard. The reduction carries hardness *into* the new problem.',
      explanation: 'NP-hard: every NP problem reduces to $X$ (so $X$ is at least as hard as all of them). NP-complete: NP-hard and itself in NP (its yes-answers have short checkable certificates). "Not in P" is not part of either definition — nobody can prove that for any NP problem. The proof technique reduces a known NP-complete problem *to* $X$; the other direction only shows $X$ is no harder than that problem.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A designer "proves" that Loot Packing (pack items into a grid inventory, decision version) is NP-complete. Tap the first line that is wrong.',
      lines: [
        'Loot Packing is in NP: given a proposed placement, we can check in polynomial time that items fit without overlapping.',
        'We give a polynomial-time translation of every Loot Packing instance into a SAT formula that is satisfiable exactly when the packing exists.',
        'SAT is NP-complete by the Cook–Levin theorem.',
        'Therefore Loot Packing is NP-hard, and since it is in NP, it is NP-complete.',
      ],
      errorLines: [2],
      explanation: 'Line 1 is a correct membership argument. Line 2 reduces in the wrong direction: Loot Packing $\\le_p$ SAT only shows Loot Packing is **no harder** than SAT — every NP problem reduces to SAT, including easy ones like sorting-based checks. For hardness you need SAT (or 3-SAT, or bin packing, …) $\\le_p$ Loot Packing: turn any instance of the known hard problem into a packing instance. Line 4\'s conclusion then would follow; as written, it does not.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Approximation algorithms: guaranteed close',
      blocks: [
        {
          type: 'p',
          text: 'If you need an answer in polynomial time for an NP-hard optimization problem, give up exactness but keep a **guarantee**. An [[dsa-approximation-algorithm|approximation algorithm]] with ratio $\\rho$ always returns a solution of cost at most $\\rho \\cdot \\text{OPT}$ (for minimization), even though it never knows OPT. The trick is always the same: compare the answer with a **lower bound** on OPT that you can compute.',
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "A", "x": 60, "y": 130}, {"id": "B", "x": 140, "y": 56}, {"id": "C", "x": 140, "y": 204}, {"id": "D", "x": 220, "y": 130}, {"id": "E", "x": 300, "y": 130}, {"id": "F", "x": 380, "y": 56}, {"id": "G", "x": 380, "y": 204}], "edges": [{"from": "A", "to": "B"}, {"from": "A", "to": "C"}, {"from": "B", "to": "D"}, {"from": "C", "to": "D"}, {"from": "D", "to": "E"}, {"from": "E", "to": "F"}, {"from": "E", "to": "G"}, {"from": "F", "to": "G"}], "width": 440, "height": 250, "code": "std::vector<bool> in(n, false);\nfor (auto [u, v] : edges)       // any order\n  if (!in[u] && !in[v])         // uncovered\n    in[u] = in[v] = true;       // take BOTH", "interval": 1300, "frames": [{"note": "Find a small **vertex cover**: a set of vertices touching every edge. Scan the edges in the order AB, AC, BD, CD, DE, EF, EG, FG.", "nodeColors": [], "edgeColors": [], "vars": [["cover", "{}"], ["size", "0"], ["matched edges", "0"]], "lines": [1]}, {"note": "Edge AB is uncovered: add **both** A and B. Any cover must contain at least one of them.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}], "edgeColors": [{"from": "A", "to": "C", "color": "gray"}, {"from": "B", "to": "D", "color": "gray"}, {"from": "A", "to": "B", "color": "orange"}], "vars": [["cover", "{A, B}"], ["size", "2"], ["matched edges", "1"]], "lines": [3, 4]}, {"note": "Edge AC is already covered by A: skip it.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "B", "to": "D", "color": "gray"}, {"from": "A", "to": "C", "color": "orange"}], "vars": [["cover", "{A, B}"], ["size", "2"], ["matched edges", "1"]], "lines": [3]}, {"note": "Edge BD is already covered by B: skip it.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "B", "to": "D", "color": "orange"}], "vars": [["cover", "{A, B}"], ["size", "2"], ["matched edges", "1"]], "lines": [3]}, {"note": "Edge CD is uncovered: add **both** C and D. Any cover must contain at least one of them.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "B", "to": "D", "color": "gray"}, {"from": "D", "to": "E", "color": "gray"}, {"from": "C", "to": "D", "color": "orange"}], "vars": [["cover", "{A, B, C, D}"], ["size", "4"], ["matched edges", "2"]], "lines": [3, 4]}, {"note": "Edge DE is already covered by D: skip it.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "B", "to": "D", "color": "gray"}, {"from": "C", "to": "D", "color": "blue"}, {"from": "D", "to": "E", "color": "orange"}], "vars": [["cover", "{A, B, C, D}"], ["size", "4"], ["matched edges", "2"]], "lines": [3]}, {"note": "Edge EF is uncovered: add **both** E and F. Any cover must contain at least one of them.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}, {"id": "E", "color": "green"}, {"id": "F", "color": "green"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "B", "to": "D", "color": "gray"}, {"from": "C", "to": "D", "color": "blue"}, {"from": "D", "to": "E", "color": "gray"}, {"from": "E", "to": "G", "color": "gray"}, {"from": "F", "to": "G", "color": "gray"}, {"from": "E", "to": "F", "color": "orange"}], "vars": [["cover", "{A, B, C, D, E, F}"], ["size", "6"], ["matched edges", "3"]], "lines": [3, 4]}, {"note": "Edge EG is already covered by E: skip it.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}, {"id": "E", "color": "green"}, {"id": "F", "color": "green"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "B", "to": "D", "color": "gray"}, {"from": "C", "to": "D", "color": "blue"}, {"from": "D", "to": "E", "color": "gray"}, {"from": "E", "to": "F", "color": "blue"}, {"from": "F", "to": "G", "color": "gray"}, {"from": "E", "to": "G", "color": "orange"}], "vars": [["cover", "{A, B, C, D, E, F}"], ["size", "6"], ["matched edges", "3"]], "lines": [3]}, {"note": "Edge FG is already covered by F: skip it.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "B", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}, {"id": "E", "color": "green"}, {"id": "F", "color": "green"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "B", "to": "D", "color": "gray"}, {"from": "C", "to": "D", "color": "blue"}, {"from": "D", "to": "E", "color": "gray"}, {"from": "E", "to": "F", "color": "blue"}, {"from": "E", "to": "G", "color": "gray"}, {"from": "F", "to": "G", "color": "orange"}], "vars": [["cover", "{A, B, C, D, E, F}"], ["size", "6"], ["matched edges", "3"]], "lines": [3]}, {"note": "Approximate cover: 6 vertices. The 3 blue edges share no endpoints (a matching), so **every** cover needs $\\ge 3$ vertices; the optimum here is 4, for example A, D, E, F.", "nodeColors": [{"id": "A", "color": "purple"}, {"id": "D", "color": "purple"}, {"id": "E", "color": "purple"}, {"id": "F", "color": "purple"}], "edgeColors": [{"from": "A", "to": "B", "color": "blue"}, {"from": "C", "to": "D", "color": "blue"}, {"from": "E", "to": "F", "color": "blue"}], "vars": [["approx", "6"], ["optimum", "4"], ["lower bound (matching)", "3"]]}], "caption": "The matching-based 2-approximation for vertex cover. Orange: the edge being examined; blue: edges whose both endpoints were taken; gray: edges already covered; green: vertices in the cover. Last frame, purple: an optimal cover."},
        {
          type: 'theorem',
          name: 'Matching-based vertex cover is a 2-approximation',
          text: 'The picked edges $M$ share no endpoints (each was uncovered when picked), so they form a matching. Any vertex cover must contain **a different vertex for each edge of $M$**, hence $\\text{OPT} \\ge |M|$. The algorithm returns $2|M| \\le 2 \\cdot \\text{OPT}$ vertices, and it is a cover because every edge was either picked or already covered. Running time $O(V + E)$.',
        },
        {
          type: 'p',
          text: 'The bound is tight: on a graph that is a perfect matching ($k$ disjoint edges) the algorithm takes $2k$ vertices but $k$ suffice. Surprisingly, nobody knows a polynomial-time algorithm with ratio $2 - \\varepsilon$ for any constant $\\varepsilon > 0$.',
        },
        {
          type: 'heading',
          text: 'TSP: it depends on the distances',
        },
        {
          type: 'list',
          items: [
            '**Metric TSP** (distances obey the triangle inequality, like real map distances): walk around a [[dm-mst|minimum spanning tree]] and skip repeated cities. Since removing one edge from the optimal tour leaves a spanning tree, $\\text{MST} \\le \\text{OPT}$, and the walk costs $\\le 2\\,\\text{MST} \\le 2\\,\\text{OPT}$. Christofides\' algorithm improves the ratio to $1.5$.',
            '**Nearest neighbor** ("always go to the closest unvisited city") is fast and simple, but has no constant guarantee: on metric instances it can be $\\Theta(\\log n)$ times optimal. In practice it is often 15–25% above optimal on random points.',
            '**General TSP** (arbitrary distances) has **no** constant-ratio approximation unless $\\mathrm{P} = \\mathrm{NP}$: such an algorithm could decide Hamilton cycle.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'The matching-based vertex-cover algorithm returns a cover of $10$ vertices on some graph. What is the **smallest** size the optimal cover could possibly have?',
      answer: '5',
      hint: 'How many edges did the algorithm pick, and what does each one force on any cover?',
      explanation: 'The algorithm adds vertices in pairs, so it picked $10 / 2 = 5$ edges, and those edges form a matching. Each needs its own cover vertex, so $\\text{OPT} \\ge 5$. It can be exactly $5$ (for example if the graph is just those $5$ disjoint edges). So the true optimum is somewhere in $[5, 10]$ — the factor-2 guarantee seen from the other side.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Heuristics: local search and simulated annealing',
      blocks: [
        {
          type: 'p',
          text: 'Heuristics drop the guarantee and aim for "very good, fast". The workhorse is [[dsa-local-search|local search]]: start from any complete solution and apply small improving moves until none helps. For TSP the classic move is **2-opt**: remove two edges of the tour and reconnect the two paths the other way, which reverses a segment. Every crossing in a Euclidean tour can be removed this way, so a 2-opt-optimal tour has no crossings.',
        },
        {
          type: 'p',
          text: 'Local search stops at a **local optimum**: no single move improves it, but a better tour may be several moves away. [[dsa-simulated-annealing|Simulated annealing]] escapes by sometimes accepting a worse move, with a probability that shrinks as a "temperature" $T$ cools:',
        },
        {
          type: 'theorem',
          name: 'Metropolis acceptance rule',
          tex: 'P(\\text{accept a move that changes the cost by } \\Delta) = \\begin{cases} 1 & \\Delta \\le 0 \\\\ e^{-\\Delta / T} & \\Delta > 0 \\end{cases}',
          text: 'Hot: almost anything is accepted and the search roams widely. Cold: only improvements survive, and it behaves like plain local search. A typical schedule multiplies $T$ by $0.99$–$0.9999$ each step.',
        },
        {
          type: 'graph',
          x: [0, 30],
          y: [0, 1.05],
          yStep: 0.25,
          functions: [{ expr: 'e^(-x/T)', label: '$e^{-\\Delta/T}$', color: 'blue' }],
          points: [{ x: 10, y: 'e^(-10/T)', label: 'Δ = 10', color: 'red' }],
          sliders: [{ name: 'T', min: 0.5, max: 40, step: 0.5, value: 10, label: 'temperature $T$' }],
          readouts: [{ label: 'P(accept a move $10$ worse) $=$', expr: 'e^(-10/T)', digits: 3 }],
          caption: 'Horizontal axis: how much worse the move makes the tour ($\\Delta$). Slide $T$ down and watch the curve collapse toward $0$: late in the run, even small worsening moves are almost always rejected.',
        },
        {
          type: 'code',
          title: 'tsp_heur.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <random>
#include <vector>

struct P { double x, y; };
std::vector<P> pts;
double d(int a, int b) { return std::hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y); }
double length(const std::vector<int>& t) {
    double L = 0;
    for (size_t i = 0; i < t.size(); ++i) L += d(t[i], t[(i + 1) % t.size()]);
    return L;
}

// Exact: Held-Karp bitmask DP, O(2^n n^2).
double heldKarp(int n) {
    std::vector<std::vector<double>> C(1 << n, std::vector<double>(n, 1e18));
    C[1][0] = 0;
    for (int S = 1; S < (1 << n); S += 2)
        for (int j = 0; j < n; ++j)
            if ((S >> j & 1) && C[S][j] < 1e18)
                for (int k = 0; k < n; ++k)
                    if (!(S >> k & 1)) C[S | 1 << k][k] = std::min(C[S | 1 << k][k], C[S][j] + d(j, k));
    double best = 1e18;
    for (int j = 1; j < n; ++j) best = std::min(best, C[(1 << n) - 1][j] + d(j, 0));
    return best;
}

// Greedy construction: always go to the nearest unvisited point.
std::vector<int> nearestNeighbor(int n) {
    std::vector<int> tour = {0};
    std::vector<bool> seen(n, false); seen[0] = true;
    for (int step = 1; step < n; ++step) {
        int cur = tour.back(), next = -1;
        for (int k = 0; k < n; ++k)
            if (!seen[k] && (next < 0 || d(cur, k) < d(cur, next))) next = k;
        seen[next] = true; tour.push_back(next);
    }
    return tour;
}

// Local search: 2-opt reverses a segment whenever that removes a crossing / shortens the tour.
void twoOpt(std::vector<int>& t) {
    int n = (int)t.size();
    for (bool improved = true; improved;) {
        improved = false;
        for (int i = 0; i + 1 < n; ++i)
            for (int j = i + 2; j < n; ++j) {
                int a = t[i], b = t[i + 1], c = t[j], e = t[(j + 1) % n];
                if (a == e) continue;
                if (d(a, c) + d(b, e) < d(a, b) + d(c, e) - 1e-9) {
                    std::reverse(t.begin() + i + 1, t.begin() + j + 1);
                    improved = true;
                }
            }
    }
}

// Simulated annealing: random segment reversals; accept a worse tour with probability e^(-delta/T).
std::vector<int> anneal(std::vector<int> t, std::mt19937& rng) {
    auto uniform = [&] { return (rng() >> 8) * (1.0 / 16777216.0); };   // [0, 1), 24 random bits
    int n = (int)t.size();
    double cur = length(t);
    std::vector<int> best = t; double bestLen = cur;
    for (double T = 100; T > 0.01; T *= 0.999) {
        int i = 1 + (int)(rng() % (n - 1)), j = 1 + (int)(rng() % (n - 1));
        if (i > j) std::swap(i, j);
        std::reverse(t.begin() + i, t.begin() + j + 1);
        double next = length(t), delta = next - cur;
        if (delta <= 0 || uniform() < std::exp(-delta / T)) {
            cur = next;
            if (cur < bestLen) { bestLen = cur; best = t; }
        } else {
            std::reverse(t.begin() + i, t.begin() + j + 1);   // reject: undo the move
        }
    }
    return best;
}

int main() {
    std::mt19937 rng(11);
    const int n = 13;
    for (int i = 0; i < n; ++i) pts.push_back({(double)(rng() % 100), (double)(rng() % 100)});

    double opt = heldKarp(n);
    std::vector<int> nn = nearestNeighbor(n);
    double nnLen = length(nn);
    std::vector<int> improved = nn;
    twoOpt(improved);
    std::vector<int> sa = anneal(nn, rng);
    std::printf("optimal (Held-Karp):       %.1f\\n", opt);
    std::printf("nearest neighbor:          %.1f  (+%.1f%%)\\n", nnLen, 100 * (nnLen / opt - 1));
    std::printf("nearest neighbor + 2-opt:  %.1f  (+%.1f%%)\\n", length(improved), 100 * (length(improved) / opt - 1));
    std::printf("simulated annealing:       %.1f  (+%.1f%%)\\n", length(sa), 100 * (length(sa) / opt - 1));
}`,
          output: `optimal (Held-Karp):       318.6
nearest neighbor:          421.5  (+32.3%)
nearest neighbor + 2-opt:  330.9  (+3.9%)
simulated annealing:       319.0  (+0.1%)`,
          annotations: [
            { lines: '17-28', text: 'The exact answer for comparison: Held–Karp from the knapsack lesson, fine at $n = 13$.' },
            { lines: '31-41', text: 'Nearest neighbor: $O(n^2)$, greedy, no guarantee.' },
            { lines: '44-58', text: '2-opt: if reconnecting $a\\!-\\!c$ and $b\\!-\\!e$ is shorter than $a\\!-\\!b$ and $c\\!-\\!e$, reverse the segment between them. Repeat until no improving pair exists.' },
            { lines: 62, text: 'A uniform number in $[0, 1)$ built from the raw generator bits, so the output is identical on every standard library.' },
            { lines: '66-76', text: 'Annealing: propose a random reversal, accept by the Metropolis rule, undo if rejected, and remember the best tour ever seen.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Reading the output',
          text: 'Nearest neighbor is $32\\%$ above optimal here; 2-opt repairs most of that (to $3.9\\%$) but gets stuck in a local optimum; annealing, started from the same tour, ends $0.1\\%$ above optimal. Exact Held–Karp is affordable only because $n = 13$. At $n = 1000$ only the heuristics remain — and for game AI they are usually run with a **time budget**, returning the best tour found so far when time is up (an *anytime* algorithm).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Simulated annealing at temperature $T = 5$ proposes a move that makes the tour $10$ units longer. With what probability is the move accepted? (Give a decimal.)',
      answer: 'e^(-2)',
      answerTex: 'e^{-2} \\approx 0.135',
      hint: 'Use $e^{-\\Delta/T}$ with $\\Delta = 10$.',
      explanation: '$P = e^{-10/5} = e^{-2} \\approx 0.135$: roughly one such move in seven is accepted. At $T = 20$ it would be $e^{-0.5} \\approx 0.61$, and at $T = 1$ only $e^{-10} \\approx 0.00005$. That is the whole schedule in three numbers: explore while hot, settle while cold.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Exact algorithms for small $n$, and how games cope',
      blocks: [
        {
          type: 'p',
          text: '"NP-hard" describes the worst case as $n$ grows. Your instance may be small or friendly, and exponential algorithms with a small base are often perfectly practical:',
        },
        {
          type: 'table',
          headers: ['Technique', 'Example', 'Practical reach'],
          rows: [
            ['Bitmask DP', 'Held–Karp TSP, $O(2^n n^2)$', '$n \\approx 20$'],
            ['Branch and bound', 'knapsack, TSP with good bounds', 'often hundreds of items'],
            ['Parameterized (FPT)', 'vertex cover of size $k$ in $O(2^k (V + E))$ by branching on an uncovered edge', 'huge graphs, small $k$'],
            ['SAT / ILP solvers', 'encode the problem, let a solver search', 'thousands to millions of variables in practice'],
            ['Exploit structure', 'independent set on a tree, coloring an interval graph', 'polynomial: the hard case never occurs'],
          ],
        },
        {
          type: 'p',
          text: 'Games run into this boundary all the time, and it pays to know which side a problem is on:',
        },
        {
          type: 'list',
          items: [
            '**In P, solve it exactly**: shortest paths and pathfinding (Dijkstra, A*), flow fields, MSTs for procedural road networks, matching players by skill brackets, sorting draw calls.',
            '**NP-hard, approximate or use heuristics**: optimal packing of a grid inventory or texture atlas (bin packing), scheduling builds and jobs across worker threads, routing a courier through every objective (TSP), choosing an optimal squad or loadout with many interacting constraints, generating levels or puzzles with unique solutions. Generalized versions of Tetris, Minesweeper, Lemmings and Candy Crush are NP-hard.',
            '**Change the question**: let designers add constraints that make the instance easy, cap $n$ (at most 8 objectives), precompute offline, spread the search over frames with a budget, or accept "good enough" — players notice a stutter long before they notice a tour that is $3\\%$ too long.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Military logistics, same math',
          text: 'Load planning for aircraft (bin packing with balance constraints), convoy routing through checkpoints (vehicle routing, a TSP generalization) and duty rosters (constraint satisfaction) are all NP-hard. Real planning tools combine an ILP or constraint solver for the core with greedy construction and local search for scale — exactly the toolbox of this unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'For an input of size $n = 20$, order these operation counts from **smallest** to **largest**.',
      lines: ['$n^3$', '$2^n$', '$n^2\\, 2^n$', '$n^{10}$', '$n!$'],
      explanation: 'At $n = 20$: $n^3 = 8000$; $2^n \\approx 1.05 \\times 10^6$; $n^2 2^n \\approx 4.2 \\times 10^8$ (Held–Karp); $n^{10} \\approx 1.0 \\times 10^{13}$; $n! \\approx 2.4 \\times 10^{18}$ (brute-force tours). Two lessons in one: a polynomial with a big exponent can be slower than an exponential at practical sizes (though $2^n$ overtakes $n^{10}$ around $n = 59$), and the base matters enormously among exponential algorithms — $2^n n^2$ is feasible where $n!$ is hopeless.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Which of these game-engine tasks has a known polynomial-time algorithm that finds an **optimal** answer?',
      options: [
        { text: 'Packing irregular item shapes into a fixed grid inventory using as few pages as possible', why: 'This generalizes bin packing, which is strongly NP-hard. Engines use greedy placement (largest first) or let the player do it.' },
        { text: 'Finding the shortest path for a unit across a weighted navigation graph', correct: true, why: 'Shortest paths with non-negative weights are solved exactly by Dijkstra or A* in $O((V + E)\\log V)$.' },
        { text: 'Ordering 40 delivery objectives so the courier\'s total route is shortest', why: 'That is TSP. Held–Karp would need about $2^{40} \\cdot 1600$ steps; use heuristics (nearest neighbor + 2-opt) instead.' },
        { text: 'Assigning colors to 200 map regions so neighbors differ, using as few colors as possible', why: 'Minimum graph coloring is NP-hard (even deciding 3-colorability). Greedy coloring in a good order is the practical answer.' },
      ],
      explanation: 'Pathfinding is the happy case: it sounds like "search over all routes", but optimal substructure plus non-negative weights lets Dijkstra and A* settle it in near-linear time. Packing, ordering every stop and minimum coloring look similar but are NP-hard, so engines use heuristics, budgets and designer constraints for them.',
    },
  ],
  takeaways: [
    'Decision problems, sized in bits. P = solvable in polynomial time; NP = yes-answers have polynomial-size certificates checkable in polynomial time; $\\mathrm{P} \\subseteq \\mathrm{NP}$, and NP does not mean "not polynomial".',
    '$A \\le_p B$ means $A$ is no harder than $B$. To prove $X$ NP-hard, reduce a known NP-complete problem **to** $X$; NP-complete = NP-hard and in NP.',
    '$S$ is independent iff $V \\setminus S$ is a vertex cover, so $\\alpha(G) + \\tau(G) = |V|$; independent set is also clique in the complement graph.',
    'Approximation algorithms prove a ratio against a lower bound on OPT: taking both ends of a maximal matching is a 2-approximation for vertex cover; MST-doubling is a 2-approximation for metric TSP; general TSP has no constant ratio unless P = NP.',
    'Heuristics (nearest neighbor, 2-opt local search, simulated annealing with acceptance $e^{-\\Delta/T}$) trade guarantees for speed; exact methods (bitmask DP, branch and bound, SAT/ILP solvers, FPT) handle small or structured instances. Games solve pathfinding exactly and budget their way around packing, scheduling and routing.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms, chapter 12 "NP-Hardness"',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'Careful definitions and many worked reductions (SAT, independent set, clique, vertex cover, Hamiltonian cycle), with the common mistakes called out.',
    },
    {
      title: 'Wikipedia — Karp\'s 21 NP-complete problems',
      url: 'https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems',
      source: 'wikipedia',
      note: 'The 1972 tree of reductions from SAT that launched the catalog of NP-complete problems.',
    },
    {
      title: 'Wikipedia — Vertex cover',
      url: 'https://en.wikipedia.org/wiki/Vertex_cover',
      source: 'wikipedia',
      note: 'The matching-based 2-approximation, the FPT algorithm and the relationship with independent sets.',
    },
    {
      title: 'Wikipedia — Simulated annealing',
      url: 'https://en.wikipedia.org/wiki/Simulated_annealing',
      source: 'wikipedia',
      note: 'The Metropolis acceptance rule, cooling schedules and applications to TSP.',
    },
  ],
};
