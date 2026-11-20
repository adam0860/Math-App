import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-dp-knapsack',
  title: 'Knapsack, Grids and DP on Trees',
  summary: 'DP beyond sequences: 0/1 and unbounded knapsack with the table and the one-row trick, path counting and cheapest routes on grids, independent sets on trees, and bitmask DP for small traveling-salesperson tours — with game loadouts and patrol routes as the running examples.',
  minutes: 22,
  objectives: [
    'Fill and trace back the 0/1 knapsack table, and explain why greedy by value-per-weight fails',
    'Compress knapsack to one row, and explain why capacities run downward for 0/1 and upward for unbounded',
    'Count lattice paths and find minimum-cost paths on a grid, and say when a grid needs Dijkstra instead of DP',
    'Solve maximum-weight independent set on a tree with two values per node computed in post-order',
    'Describe bitmask DP (Held–Karp) for the traveling salesperson problem and its $O(2^n n^2)$ cost',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The 0/1 knapsack: choosing a loadout',
      blocks: [
        {
          type: 'p',
          text: 'Your character can carry $10$ kg. Each item has a weight and a combat value, and you either take it or leave it. Which loadout maximizes total value? This is the **0/1 [[dsa-knapsack|knapsack problem]]**, and it hides inside inventory screens, mission budgets ("$1000$ credits to spend on upgrades"), cargo planning for an airlift and CPU-time budgets for AI.',
        },
        {
          type: 'p',
          text: 'Greedy by value per kilogram is tempting and wrong. With capacity $7$ and items $(w, v) = (5, 7), (3, 4), (4, 5), (1, 1)$, greedy takes the best ratio $(5, 7)$ first, then only $(1, 1)$ fits: value $8$. Taking $(3, 4)$ and $(4, 5)$ gives $9$. One early choice wastes capacity that no later choice can recover.',
        },
        {
          type: 'theorem',
          name: '0/1 knapsack recurrence',
          tex: 'K[i][w] = \\begin{cases} K[i-1][w] & w_i > w \\\\ \\max\\big(K[i-1][w],\\ K[i-1][w - w_i] + v_i\\big) & w_i \\le w \\end{cases}, \\qquad K[0][w] = 0',
          text: '$K[i][w]$ = the best value using only the first $i$ items with capacity $w$. Look at the last decision, item $i$: either skip it (the first $i - 1$ items get all of $w$) or take it (they get $w - w_i$). $(n + 1)(W + 1)$ states, $O(1)$ each: $\\Theta(nW)$.',
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "hc0", "x": 114, "y": 34, "label": "0"}, {"id": "hc1", "x": 158, "y": 34, "label": "1"}, {"id": "hc2", "x": 202, "y": 34, "label": "2"}, {"id": "hc3", "x": 246, "y": 34, "label": "3"}, {"id": "hc4", "x": 290, "y": 34, "label": "4"}, {"id": "hc5", "x": 334, "y": 34, "label": "5"}, {"id": "hr0", "x": 70, "y": 76, "label": "–"}, {"id": "c0_0", "x": 114, "y": 76, "label": ""}, {"id": "c0_1", "x": 158, "y": 76, "label": ""}, {"id": "c0_2", "x": 202, "y": 76, "label": ""}, {"id": "c0_3", "x": 246, "y": 76, "label": ""}, {"id": "c0_4", "x": 290, "y": 76, "label": ""}, {"id": "c0_5", "x": 334, "y": 76, "label": ""}, {"id": "hr1", "x": 70, "y": 118, "label": "A"}, {"id": "c1_0", "x": 114, "y": 118, "label": ""}, {"id": "c1_1", "x": 158, "y": 118, "label": ""}, {"id": "c1_2", "x": 202, "y": 118, "label": ""}, {"id": "c1_3", "x": 246, "y": 118, "label": ""}, {"id": "c1_4", "x": 290, "y": 118, "label": ""}, {"id": "c1_5", "x": 334, "y": 118, "label": ""}, {"id": "hr2", "x": 70, "y": 160, "label": "B"}, {"id": "c2_0", "x": 114, "y": 160, "label": ""}, {"id": "c2_1", "x": 158, "y": 160, "label": ""}, {"id": "c2_2", "x": 202, "y": 160, "label": ""}, {"id": "c2_3", "x": 246, "y": 160, "label": ""}, {"id": "c2_4", "x": 290, "y": 160, "label": ""}, {"id": "c2_5", "x": 334, "y": 160, "label": ""}, {"id": "hr3", "x": 70, "y": 202, "label": "C"}, {"id": "c3_0", "x": 114, "y": 202, "label": ""}, {"id": "c3_1", "x": 158, "y": 202, "label": ""}, {"id": "c3_2", "x": 202, "y": 202, "label": ""}, {"id": "c3_3", "x": 246, "y": 202, "label": ""}, {"id": "c3_4", "x": 290, "y": 202, "label": ""}, {"id": "c3_5", "x": 334, "y": 202, "label": ""}], "edges": [], "width": 388, "height": 242, "code": "for (int i = 1; i <= n; ++i)\n  for (int w = 0; w <= W; ++w) {\n    K[i][w] = K[i-1][w];              // skip\n    if (wt[i] <= w)\n      K[i][w] = std::max(K[i][w],\n          K[i-1][w - wt[i]] + val[i]);  // take\n  }", "interval": 1300, "frames": [{"note": "Items A $(w{=}2, v{=}3)$, B $(3, 4)$, C $(4, 5)$; capacity $5$. Row $0$ (no items) is all $0$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": ""}, {"id": "c1_1", "label": ""}, {"id": "c1_2", "label": ""}, {"id": "c1_3", "label": ""}, {"id": "c1_4", "label": ""}, {"id": "c1_5", "label": ""}, {"id": "c2_0", "label": ""}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}], "vars": [["items", "A(2,3) B(3,4) C(4,5)"]]}, {"note": "A weighs $2 > 0$: it cannot fit, copy $K[0][0] = 0$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": ""}, {"id": "c1_2", "label": ""}, {"id": "c1_3", "label": ""}, {"id": "c1_4", "label": ""}, {"id": "c1_5", "label": ""}, {"id": "c2_0", "label": ""}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr1", "color": "orange"}, {"id": "hc0", "color": "orange"}, {"id": "c0_0", "color": "blue"}, {"id": "c1_0", "color": "orange"}], "lines": [3], "vars": [["skip", "0"], ["take", "—"]]}, {"note": "A weighs $2 > 1$: it cannot fit, copy $K[0][1] = 0$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": ""}, {"id": "c1_3", "label": ""}, {"id": "c1_4", "label": ""}, {"id": "c1_5", "label": ""}, {"id": "c2_0", "label": ""}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr1", "color": "orange"}, {"id": "hc1", "color": "orange"}, {"id": "c0_1", "color": "blue"}, {"id": "c1_1", "color": "orange"}], "lines": [3], "vars": [["skip", "0"], ["take", "—"]]}, {"note": "A fits: $\\max(\\text{skip}\\ 0,\\ \\text{take}\\ 0 + 3 = 3) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": ""}, {"id": "c1_4", "label": ""}, {"id": "c1_5", "label": ""}, {"id": "c2_0", "label": ""}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr1", "color": "orange"}, {"id": "hc2", "color": "orange"}, {"id": "c0_2", "color": "blue"}, {"id": "c0_0", "color": "blue"}, {"id": "c1_2", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "0"], ["take", "3"]]}, {"note": "A fits: $\\max(\\text{skip}\\ 0,\\ \\text{take}\\ 0 + 3 = 3) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": ""}, {"id": "c1_5", "label": ""}, {"id": "c2_0", "label": ""}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr1", "color": "orange"}, {"id": "hc3", "color": "orange"}, {"id": "c0_3", "color": "blue"}, {"id": "c0_1", "color": "blue"}, {"id": "c1_3", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "0"], ["take", "3"]]}, {"note": "A fits: $\\max(\\text{skip}\\ 0,\\ \\text{take}\\ 0 + 3 = 3) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": ""}, {"id": "c2_0", "label": ""}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr1", "color": "orange"}, {"id": "hc4", "color": "orange"}, {"id": "c0_4", "color": "blue"}, {"id": "c0_2", "color": "blue"}, {"id": "c1_4", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "0"], ["take", "3"]]}, {"note": "A fits: $\\max(\\text{skip}\\ 0,\\ \\text{take}\\ 0 + 3 = 3) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": ""}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr1", "color": "orange"}, {"id": "hc5", "color": "orange"}, {"id": "c0_5", "color": "blue"}, {"id": "c0_3", "color": "blue"}, {"id": "c1_5", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "0"], ["take", "3"]]}, {"note": "B weighs $3 > 1$: it cannot fit, copy $K[1][1] = 0$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr2", "color": "orange"}, {"id": "hc1", "color": "orange"}, {"id": "c1_1", "color": "blue"}, {"id": "c2_1", "color": "orange"}], "lines": [3], "vars": [["skip", "0"], ["take", "—"]]}, {"note": "B weighs $3 > 2$: it cannot fit, copy $K[1][2] = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr2", "color": "orange"}, {"id": "hc2", "color": "orange"}, {"id": "c1_2", "color": "blue"}, {"id": "c2_2", "color": "orange"}], "lines": [3], "vars": [["skip", "3"], ["take", "—"]]}, {"note": "B fits: $\\max(\\text{skip}\\ 3,\\ \\text{take}\\ 0 + 4 = 4) = 4$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": ""}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr2", "color": "orange"}, {"id": "hc3", "color": "orange"}, {"id": "c1_3", "color": "blue"}, {"id": "c1_0", "color": "blue"}, {"id": "c2_3", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "3"], ["take", "4"]]}, {"note": "B fits: $\\max(\\text{skip}\\ 3,\\ \\text{take}\\ 0 + 4 = 4) = 4$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": ""}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr2", "color": "orange"}, {"id": "hc4", "color": "orange"}, {"id": "c1_4", "color": "blue"}, {"id": "c1_1", "color": "blue"}, {"id": "c2_4", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "3"], ["take", "4"]]}, {"note": "B fits: $\\max(\\text{skip}\\ 3,\\ \\text{take}\\ 3 + 4 = 7) = 7$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": "7"}, {"id": "c3_0", "label": ""}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr2", "color": "orange"}, {"id": "hc5", "color": "orange"}, {"id": "c1_5", "color": "blue"}, {"id": "c1_2", "color": "blue"}, {"id": "c2_5", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "3"], ["take", "7"]]}, {"note": "C weighs $4 > 1$: it cannot fit, copy $K[2][1] = 0$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": "7"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "0"}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "orange"}, {"id": "hc1", "color": "orange"}, {"id": "c2_1", "color": "blue"}, {"id": "c3_1", "color": "orange"}], "lines": [3], "vars": [["skip", "0"], ["take", "—"]]}, {"note": "C weighs $4 > 2$: it cannot fit, copy $K[2][2] = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": "7"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "0"}, {"id": "c3_2", "label": "3"}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "orange"}, {"id": "hc2", "color": "orange"}, {"id": "c2_2", "color": "blue"}, {"id": "c3_2", "color": "orange"}], "lines": [3], "vars": [["skip", "3"], ["take", "—"]]}, {"note": "C weighs $4 > 3$: it cannot fit, copy $K[2][3] = 4$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": "7"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "0"}, {"id": "c3_2", "label": "3"}, {"id": "c3_3", "label": "4"}, {"id": "c3_4", "label": ""}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "orange"}, {"id": "hc3", "color": "orange"}, {"id": "c2_3", "color": "blue"}, {"id": "c3_3", "color": "orange"}], "lines": [3], "vars": [["skip", "4"], ["take", "—"]]}, {"note": "C fits: $\\max(\\text{skip}\\ 4,\\ \\text{take}\\ 0 + 5 = 5) = 5$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": "7"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "0"}, {"id": "c3_2", "label": "3"}, {"id": "c3_3", "label": "4"}, {"id": "c3_4", "label": "5"}, {"id": "c3_5", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "orange"}, {"id": "hc4", "color": "orange"}, {"id": "c2_4", "color": "blue"}, {"id": "c2_0", "color": "blue"}, {"id": "c3_4", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "4"], ["take", "5"]]}, {"note": "C fits: $\\max(\\text{skip}\\ 7,\\ \\text{take}\\ 0 + 5 = 5) = 7$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": "7"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "0"}, {"id": "c3_2", "label": "3"}, {"id": "c3_3", "label": "4"}, {"id": "c3_4", "label": "5"}, {"id": "c3_5", "label": "7"}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "orange"}, {"id": "hc5", "color": "orange"}, {"id": "c2_5", "color": "blue"}, {"id": "c2_1", "color": "blue"}, {"id": "c3_5", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["skip", "7"], ["take", "5"]]}, {"note": "$K[3][5] = 7$. Walk back: a value that differs from the cell above means the item was taken. Take A and B.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c0_5", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "0"}, {"id": "c1_2", "label": "3"}, {"id": "c1_3", "label": "3"}, {"id": "c1_4", "label": "3"}, {"id": "c1_5", "label": "3"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "0"}, {"id": "c2_2", "label": "3"}, {"id": "c2_3", "label": "4"}, {"id": "c2_4", "label": "4"}, {"id": "c2_5", "label": "7"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "0"}, {"id": "c3_2", "label": "3"}, {"id": "c3_3", "label": "4"}, {"id": "c3_4", "label": "5"}, {"id": "c3_5", "label": "7"}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hc5", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "c3_5", "color": "green"}, {"id": "c2_5", "color": "green"}, {"id": "c1_2", "color": "green"}, {"id": "c0_0", "color": "green"}], "vars": [["best value", "7"], ["take", "A, B"]]}], "caption": "The 0/1 knapsack table: rows add one item at a time, columns are capacities $0$–$5$. Orange: the cell being filled; blue: the two cells it compares (skip = straight above, take = up and $w_i$ to the left)."},
        {
          type: 'derivation',
          title: 'One cell by hand: $K[2][5]$ (items A and B, capacity $5$)',
          steps: [
            { tex: '\\text{skip B: } K[1][5] = 3', why: 'Without B, the best with capacity $5$ is A alone, value $3$.' },
            { tex: '\\text{take B: } K[1][5 - 3] + 4 = K[1][2] + 4 = 3 + 4 = 7', why: 'B uses $3$ of the $5$ kg; the remaining $2$ kg go to the best choice among the earlier items, which is A.' },
            { tex: 'K[2][5] = \\max(3, 7) = 7', why: 'Optimal substructure: whatever the best loadout does with B, the rest of it must be the best for the capacity left over.' },
          ],
          result: 'Taking both A and B (weight $5$, value $7$) beats every other choice, and the last row confirms nothing involving C does better.',
        },
        {
          type: 'code',
          title: 'knapsack.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

struct Item { std::string name; int weight, value; };

// 0/1 knapsack, full table: K[i][w] = best value using the first i items with capacity w.
std::vector<int> bestLoadout(const std::vector<Item>& items, int W, int& bestValue) {
    int n = (int)items.size();
    std::vector<std::vector<int>> K(n + 1, std::vector<int>(W + 1, 0));
    for (int i = 1; i <= n; ++i) {
        const Item& it = items[i - 1];
        for (int w = 0; w <= W; ++w) {
            K[i][w] = K[i - 1][w];                                  // skip item i
            if (it.weight <= w)
                K[i][w] = std::max(K[i][w], K[i - 1][w - it.weight] + it.value);  // take it
        }
    }
    bestValue = K[n][W];
    std::vector<int> chosen;                                        // walk back up the rows
    for (int i = n, w = W; i >= 1; --i)
        if (K[i][w] != K[i - 1][w]) { chosen.push_back(i - 1); w -= items[i - 1].weight; }
    return chosen;
}

// Same value, one row: iterate capacities DOWNWARD so each item is used at most once.
int knapsack01(const std::vector<Item>& items, int W) {
    std::vector<int> dp(W + 1, 0);
    for (const Item& it : items)
        for (int w = W; w >= it.weight; --w)
            dp[w] = std::max(dp[w], dp[w - it.weight] + it.value);
    return dp[W];
}

// Unbounded knapsack (any number of copies): iterate capacities UPWARD.
int knapsackUnbounded(const std::vector<Item>& items, int W) {
    std::vector<int> dp(W + 1, 0);
    for (const Item& it : items)
        for (int w = it.weight; w <= W; ++w)
            dp[w] = std::max(dp[w], dp[w - it.weight] + it.value);
    return dp[W];
}

int main() {
    // A loadout screen: carry capacity 10 kg, maximize combat value.
    std::vector<Item> items = {
        {"rifle", 4, 9}, {"shotgun", 3, 6}, {"medkit", 1, 3},
        {"grenades", 2, 5}, {"armor", 5, 10}, {"drone", 6, 11},
    };
    int value = 0;
    std::vector<int> chosen = bestLoadout(items, 10, value);
    std::printf("best value %d:", value);
    for (int i : chosen) std::printf(" %s", items[i].name.c_str());
    std::printf("\\none-row 0/1 knapsack:  %d\\n", knapsack01(items, 10));
    std::printf("unbounded (copies ok): %d\\n", knapsackUnbounded(items, 10));
}`,
          output: `best value 23: grenades medkit shotgun rifle
one-row 0/1 knapsack:  23
unbounded (copies ok): 30`,
          annotations: [
            { lines: '12-19', text: 'The table, row by row. Row $i$ reads only row $i - 1$, which is what makes one-row compression possible.' },
            { lines: '22-23', text: 'Walk back: if a cell differs from the one directly above, item $i$ was taken, so drop to capacity $w - w_i$.' },
            { lines: '31-32', text: 'One row, capacities **downward** (next card).' },
            { lines: '40-41', text: 'One row, capacities **upward**: unbounded copies.' },
            { lines: '47-50', text: 'Six items and capacity $10$ give a $7 \\times 11$ table. Brute force would check $2^6 = 64$ subsets — fine here, hopeless for $60$ items.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Capacity $7$. Items $(w, v)$: $(1, 1)$, $(3, 4)$, $(4, 5)$, $(5, 7)$, each usable at most once. What is the maximum total value?',
      answer: '9',
      hint: 'Fill $K[i][w]$ row by row, or reason about which pairs fit in $7$.',
      explanation: 'The pairs that fit are $(1,1)+(3,4) = 5$, $(1,1)+(4,5) = 6$, $(1,1)+(5,7) = 8$, $(3,4)+(4,5) = 9$; triples: $(1,1)+(3,4)+(4,5)$ weighs $8 > 7$. So the best is $9$, taking the items of weight $3$ and $4$. Greedy by ratio would grab $(5, 7)$ first (ratio $1.4$) and end with $8$. The table gives the same: $K[4][7] = \\max(K[3][7], K[3][2] + 7) = \\max(9, 1 + 7) = 9$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'One row is enough: 0/1 vs unbounded',
      blocks: [
        {
          type: 'p',
          text: 'Row $i$ reads only row $i - 1$, so keep one array $dp[w]$ and update it in place for each item. The only question is the direction of the $w$ loop, and it decides which problem you solve.',
        },
        {"type": "algo", "view": "array", "code": "std::vector<int> dp(W + 1, 0);\nfor (const Item& it : items)\n  for (int w = W; w >= it.weight; --w)\n    dp[w] = std::max(dp[w],\n        dp[w - it.weight] + it.value);", "interval": 1200, "frames": [{"note": "One row instead of a table: $dp[w]$ = best value with capacity $w$ using the items processed so far.", "array": [0, 0, 0, 0, 0, 0], "lines": [1]}, {"note": "Item A: $dp[5] = \\max(0,\\ dp[3] + 3 = 3) = 3$. Taken.", "array": [0, 0, 0, 0, 0, 3], "marks": [{"index": 3, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "w"}, {"index": 3, "label": "w−2", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "A (w=2, v=3)"], ["direction", "w goes DOWN"]]}, {"note": "Item A: $dp[4] = \\max(0,\\ dp[2] + 3 = 3) = 3$. Taken.", "array": [0, 0, 0, 0, 3, 3], "marks": [{"index": 2, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "w"}, {"index": 2, "label": "w−2", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "A (w=2, v=3)"], ["direction", "w goes DOWN"]]}, {"note": "Item A: $dp[3] = \\max(0,\\ dp[1] + 3 = 3) = 3$. Taken.", "array": [0, 0, 0, 3, 3, 3], "marks": [{"index": 1, "color": "blue"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "w"}, {"index": 1, "label": "w−2", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "A (w=2, v=3)"], ["direction", "w goes DOWN"]]}, {"note": "Item A: $dp[2] = \\max(0,\\ dp[0] + 3 = 3) = 3$. Taken.", "array": [0, 0, 3, 3, 3, 3], "marks": [{"index": 0, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "w"}, {"index": 0, "label": "w−2", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "A (w=2, v=3)"], ["direction", "w goes DOWN"]]}, {"note": "Item B: $dp[5] = \\max(3,\\ dp[2] + 4 = 7) = 7$. Taken.", "array": [0, 0, 3, 3, 3, 7], "marks": [{"index": 2, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "w"}, {"index": 2, "label": "w−3", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "B (w=3, v=4)"], ["direction", "w goes DOWN"]]}, {"note": "Item B: $dp[4] = \\max(3,\\ dp[1] + 4 = 4) = 4$. Taken.", "array": [0, 0, 3, 3, 4, 7], "marks": [{"index": 1, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "w"}, {"index": 1, "label": "w−3", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "B (w=3, v=4)"], ["direction", "w goes DOWN"]]}, {"note": "Item B: $dp[3] = \\max(3,\\ dp[0] + 4 = 4) = 4$. Taken.", "array": [0, 0, 3, 4, 4, 7], "marks": [{"index": 0, "color": "blue"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "w"}, {"index": 0, "label": "w−3", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "B (w=3, v=4)"], ["direction", "w goes DOWN"]]}, {"note": "Item C: $dp[5] = \\max(7,\\ dp[1] + 5 = 5) = 7$.", "array": [0, 0, 3, 4, 4, 7], "marks": [{"index": 1, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "w"}, {"index": 1, "label": "w−4", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "C (w=4, v=5)"], ["direction", "w goes DOWN"]]}, {"note": "Item C: $dp[4] = \\max(4,\\ dp[0] + 5 = 5) = 5$. Taken.", "array": [0, 0, 3, 4, 5, 7], "marks": [{"index": 0, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "w"}, {"index": 0, "label": "w−4", "color": "blue"}], "lines": [3, 4, 5], "vars": [["item", "C (w=4, v=5)"], ["direction", "w goes DOWN"]]}, {"note": "$dp[5] = 7$, the same answer as the table. Going downward, $dp[w - w_i]$ still holds the **previous** item's value, so no item is used twice.", "array": [0, 0, 3, 4, 5, 7], "marks": [{"index": 5, "color": "green"}]}], "caption": "The one-row 0/1 knapsack. Orange: the capacity being updated; blue: the cell it reads, which has not been updated yet for this item because $w$ runs downward."},
        {
          type: 'compare',
          left: {
            title: '0/1 knapsack (each item once)',
            tone: 'neutral',
            code: 'for (const Item& it : items)\n    for (int w = W; w >= it.weight; --w)\n        dp[w] = std::max(dp[w],\n            dp[w - it.weight] + it.value);',
            text: 'Downward: $dp[w - w_i]$ has not been touched for this item yet, so it is still $K[i-1][w - w_i]$.',
          },
          right: {
            title: 'Unbounded knapsack (any number of copies)',
            tone: 'neutral',
            code: 'for (const Item& it : items)\n    for (int w = it.weight; w <= W; ++w)\n        dp[w] = std::max(dp[w],\n            dp[w - it.weight] + it.value);',
            text: 'Upward: $dp[w - w_i]$ may already include this item, so it can be taken again: $K[i][w - w_i] + v_i$.',
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the direction matters',
          text: 'The update reads a smaller index $w - w_i$. Going **down**, every smaller index still holds the old row (before this item), so the item is counted at most once — exactly the 0/1 recurrence. Going **up**, the smaller index was just updated in this pass and may already contain the item, which is exactly the unbounded recurrence $K[i][w] = \\max(K[i-1][w], K[i][w - w_i] + v_i)$. Same code, one character apart, two different problems: this is the knapsack version of the coin-change loop-order trap.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pseudo-polynomial, again',
          text: 'The DP is $\\Theta(nW)$, which is [[dsa-pseudo-polynomial|pseudo-polynomial]]: great for a carry weight of $100$ or a budget of $10\\,000$ credits, useless if weights are arbitrary 64-bit integers. If values are small and weights huge, flip the table: $dp[v]$ = least weight achieving value exactly $v$. If both are huge, you are in NP-hard territory; see the last lesson of the next unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'This one-row code should solve the **0/1** knapsack (each item at most once). For one item of weight $2$ and value $3$ with capacity $6$ it returns $9$ instead of $3$. Tap the buggy line.',
      lines: [
        '`std::vector<int> dp(W + 1, 0);`',
        '`for (const Item& it : items)`',
        '`    for (int w = it.weight; w <= W; ++w)`',
        '`        dp[w] = std::max(dp[w], dp[w - it.weight] + it.value);`',
        '`return dp[W];`',
      ],
      errorLines: [3],
      explanation: 'Line 3 runs the capacities **upward**, so $dp[w - 2]$ has already been updated with this same item: $dp[2] = 3$, then $dp[4] = dp[2] + 3 = 6$, then $dp[6] = dp[4] + 3 = 9$ — the item was taken three times. That is the unbounded knapsack. For 0/1, iterate `for (int w = W; w >= it.weight; --w)`, so every $dp[w - w_i]$ still holds the value from before this item, giving $dp[6] = 3$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'Complete the rule of thumb for one-row knapsack loops.',
      template: 'For 0/1 knapsack, run $w$ ___ so that $dp[w - w_i]$ still holds the value from ___ this item; for unbounded knapsack run $w$ ___.',
      blanks: [{ answers: ['downward (from $W$)'] }, { answers: ['before'] }, { answers: ['upward (from $w_i$)'] }],
      wordBank: ['downward (from $W$)', 'upward (from $w_i$)', 'before', 'after', 'in any order'],
      hint: 'The update reads a smaller capacity. Has that smaller capacity been updated in this pass yet?',
      explanation: 'Downward, smaller capacities are visited **after** the current one, so when you read $dp[w - w_i]$ it is still the previous row\'s value: the item cannot be reused. Upward, $dp[w - w_i]$ was already updated in this pass, so reading it may reuse the item, which is exactly what unbounded knapsack wants. "In any order" is wrong: the two directions solve different problems.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Grids: counting paths and cheapest routes',
      blocks: [
        {
          type: 'p',
          text: 'A grid where you may only move **right** or **down** is a DAG: every move increases $r + c$, so you can never return to a cell. That makes it a perfect DP table, filled row by row. Two classic questions:',
        },
        {
          type: 'list',
          items: [
            '**How many paths** reach the goal? $P[r][c] = P[r-1][c] + P[r][c-1]$, with $P = 0$ on blocked cells and $P[0][0] = 1$. On an open $R \\times C$ grid this is $\\binom{R + C - 2}{R - 1}$, but obstacles break the formula and not the DP.',
            '**Cheapest path** through a cost map: $dp[r][c] = \\text{cost}[r][c] + \\min(dp[r-1][c],\\ dp[r][c-1])$.',
          ],
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "g0_0", "x": 60, "y": 36, "label": ""}, {"id": "g0_1", "x": 130, "y": 36, "label": ""}, {"id": "g0_2", "x": 200, "y": 36, "label": ""}, {"id": "g0_3", "x": 270, "y": 36, "label": ""}, {"id": "g1_0", "x": 60, "y": 100, "label": ""}, {"id": "g1_1", "x": 130, "y": 100, "label": ""}, {"id": "g1_2", "x": 200, "y": 100, "label": ""}, {"id": "g1_3", "x": 270, "y": 100, "label": ""}, {"id": "g2_0", "x": 60, "y": 164, "label": ""}, {"id": "g2_1", "x": 130, "y": 164, "label": ""}, {"id": "g2_2", "x": 200, "y": 164, "label": ""}, {"id": "g2_3", "x": 270, "y": 164, "label": ""}], "edges": [], "width": 320, "height": 218, "code": "for (int r = 0; r < R; ++r)\n  for (int c = 0; c < C; ++c) {\n    int best = (r == 0 && c == 0) ? 0 : INF;\n    if (r > 0) best = std::min(best, dp[r-1][c]);\n    if (c > 0) best = std::min(best, dp[r][c-1]);\n    dp[r][c] = best + cost[r][c];\n  }", "interval": 1100, "frames": [{"note": "Each tile has an entry cost. Moving only right or down, find the cheapest route from the top-left to the bottom-right tile.", "nodeLabels": [{"id": "g0_0", "label": ""}, {"id": "g0_1", "label": ""}, {"id": "g0_2", "label": ""}, {"id": "g0_3", "label": ""}, {"id": "g1_0", "label": ""}, {"id": "g1_1", "label": ""}, {"id": "g1_2", "label": ""}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}]}, {"note": "Start: $dp = 1$, the cost of the first tile.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": ""}, {"id": "g0_2", "label": ""}, {"id": "g0_3", "label": ""}, {"id": "g1_0", "label": ""}, {"id": "g1_1", "label": ""}, {"id": "g1_2", "label": ""}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "Only reachable from the left: $dp[0][1] = 1 + 3 = 4$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": ""}, {"id": "g0_3", "label": ""}, {"id": "g1_0", "label": ""}, {"id": "g1_1", "label": ""}, {"id": "g1_2", "label": ""}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "blue"}, {"id": "g0_1", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "Only reachable from the left: $dp[0][2] = 4 + 1 = 5$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": ""}, {"id": "g1_0", "label": ""}, {"id": "g1_1", "label": ""}, {"id": "g1_2", "label": ""}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "blue"}, {"id": "g0_2", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "Only reachable from the left: $dp[0][3] = 5 + 2 = 7$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": ""}, {"id": "g1_1", "label": ""}, {"id": "g1_2", "label": ""}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "gray"}, {"id": "g0_2", "color": "blue"}, {"id": "g0_3", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "Only reachable from above: $dp[1][0] = 1 + 1 = 2$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": ""}, {"id": "g1_2", "label": ""}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_1", "color": "gray"}, {"id": "g0_2", "color": "gray"}, {"id": "g0_3", "color": "gray"}, {"id": "g0_0", "color": "blue"}, {"id": "g1_0", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "$dp[1][1] = \\min(4, 2) + 5 = 7$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": ""}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_2", "color": "gray"}, {"id": "g0_3", "color": "gray"}, {"id": "g0_1", "color": "blue"}, {"id": "g1_0", "color": "blue"}, {"id": "g1_1", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "$dp[1][2] = \\min(5, 7) + 1 = 6$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": "6"}, {"id": "g1_3", "label": ""}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "gray"}, {"id": "g0_3", "color": "gray"}, {"id": "g1_0", "color": "gray"}, {"id": "g0_2", "color": "blue"}, {"id": "g1_1", "color": "blue"}, {"id": "g1_2", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "$dp[1][3] = \\min(7, 6) + 3 = 9$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": "6"}, {"id": "g1_3", "label": "9"}, {"id": "g2_0", "label": ""}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "gray"}, {"id": "g0_2", "color": "gray"}, {"id": "g1_0", "color": "gray"}, {"id": "g1_1", "color": "gray"}, {"id": "g0_3", "color": "blue"}, {"id": "g1_2", "color": "blue"}, {"id": "g1_3", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "Only reachable from above: $dp[2][0] = 2 + 4 = 6$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": "6"}, {"id": "g1_3", "label": "9"}, {"id": "g2_0", "label": "6"}, {"id": "g2_1", "label": ""}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "gray"}, {"id": "g0_2", "color": "gray"}, {"id": "g0_3", "color": "gray"}, {"id": "g1_1", "color": "gray"}, {"id": "g1_2", "color": "gray"}, {"id": "g1_3", "color": "gray"}, {"id": "g1_0", "color": "blue"}, {"id": "g2_0", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "$dp[2][1] = \\min(7, 6) + 2 = 8$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": "6"}, {"id": "g1_3", "label": "9"}, {"id": "g2_0", "label": "6"}, {"id": "g2_1", "label": "8"}, {"id": "g2_2", "label": ""}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "gray"}, {"id": "g0_2", "color": "gray"}, {"id": "g0_3", "color": "gray"}, {"id": "g1_0", "color": "gray"}, {"id": "g1_2", "color": "gray"}, {"id": "g1_3", "color": "gray"}, {"id": "g1_1", "color": "blue"}, {"id": "g2_0", "color": "blue"}, {"id": "g2_1", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "$dp[2][2] = \\min(6, 8) + 1 = 7$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": "6"}, {"id": "g1_3", "label": "9"}, {"id": "g2_0", "label": "6"}, {"id": "g2_1", "label": "8"}, {"id": "g2_2", "label": "7"}, {"id": "g2_3", "label": ""}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "gray"}, {"id": "g0_2", "color": "gray"}, {"id": "g0_3", "color": "gray"}, {"id": "g1_0", "color": "gray"}, {"id": "g1_1", "color": "gray"}, {"id": "g1_3", "color": "gray"}, {"id": "g2_0", "color": "gray"}, {"id": "g1_2", "color": "blue"}, {"id": "g2_1", "color": "blue"}, {"id": "g2_2", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "$dp[2][3] = \\min(9, 7) + 1 = 8$.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": "6"}, {"id": "g1_3", "label": "9"}, {"id": "g2_0", "label": "6"}, {"id": "g2_1", "label": "8"}, {"id": "g2_2", "label": "7"}, {"id": "g2_3", "label": "8"}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "gray"}, {"id": "g0_1", "color": "gray"}, {"id": "g0_2", "color": "gray"}, {"id": "g0_3", "color": "gray"}, {"id": "g1_0", "color": "gray"}, {"id": "g1_1", "color": "gray"}, {"id": "g1_2", "color": "gray"}, {"id": "g2_0", "color": "gray"}, {"id": "g2_1", "color": "gray"}, {"id": "g1_3", "color": "blue"}, {"id": "g2_2", "color": "blue"}, {"id": "g2_3", "color": "orange"}], "lines": [3, 4, 5, 6]}, {"note": "Cheapest route costs $8$: walk back from the goal, always to the smaller of above/left.", "nodeLabels": [{"id": "g0_0", "label": "1"}, {"id": "g0_1", "label": "4"}, {"id": "g0_2", "label": "5"}, {"id": "g0_3", "label": "7"}, {"id": "g1_0", "label": "2"}, {"id": "g1_1", "label": "7"}, {"id": "g1_2", "label": "6"}, {"id": "g1_3", "label": "9"}, {"id": "g2_0", "label": "6"}, {"id": "g2_1", "label": "8"}, {"id": "g2_2", "label": "7"}, {"id": "g2_3", "label": "8"}], "nodeNotes": [{"id": "g0_0", "text": "cost 1"}, {"id": "g0_1", "text": "cost 3"}, {"id": "g0_2", "text": "cost 1"}, {"id": "g0_3", "text": "cost 2"}, {"id": "g1_0", "text": "cost 1"}, {"id": "g1_1", "text": "cost 5"}, {"id": "g1_2", "text": "cost 1"}, {"id": "g1_3", "text": "cost 3"}, {"id": "g2_0", "text": "cost 4"}, {"id": "g2_1", "text": "cost 2"}, {"id": "g2_2", "text": "cost 1"}, {"id": "g2_3", "text": "cost 1"}], "nodeColors": [{"id": "g0_0", "color": "green"}, {"id": "g0_1", "color": "green"}, {"id": "g0_2", "color": "green"}, {"id": "g1_2", "color": "green"}, {"id": "g2_2", "color": "green"}, {"id": "g2_3", "color": "green"}], "vars": [["route", "right, right, down, down, right"]]}], "caption": "Minimum path sum on a $3 \\times 4$ cost map. Node labels show $dp$ (cheapest cost to reach the tile, including it); notes show the tile's own cost. Moves go only right or down, so every cell depends only on cells above and to its left. Orange: the cell being filled; blue: the neighbors it compares."},
        {
          type: 'code',
          title: 'grid.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

// Count monotone (right/down) paths from top-left to bottom-right avoiding '#'.
long long countPaths(const std::vector<std::string>& g) {
    int R = (int)g.size(), C = (int)g[0].size();
    std::vector<long long> row(C, 0);          // rolling row: row[c] = paths into (r, c)
    for (int r = 0; r < R; ++r)
        for (int c = 0; c < C; ++c) {
            if (g[r][c] == '#') { row[c] = 0; continue; }
            if (r == 0 && c == 0) { row[c] = 1; continue; }
            row[c] = row[c] + (c > 0 ? row[c - 1] : 0);   // from above (old row[c]) + from left
        }
    return row[C - 1];
}

// Cheapest right/down route through a cost map; returns the cost and prints the route.
int minPathSum(const std::vector<std::vector<int>>& cost) {
    int R = (int)cost.size(), C = (int)cost[0].size();
    std::vector<std::vector<int>> dp(R, std::vector<int>(C));
    for (int r = 0; r < R; ++r)
        for (int c = 0; c < C; ++c) {
            if (r == 0 && c == 0) dp[r][c] = cost[0][0];
            else if (r == 0) dp[r][c] = dp[r][c - 1] + cost[r][c];
            else if (c == 0) dp[r][c] = dp[r - 1][c] + cost[r][c];
            else dp[r][c] = std::min(dp[r - 1][c], dp[r][c - 1]) + cost[r][c];
        }
    std::string route;                          // walk back from the goal
    for (int r = R - 1, c = C - 1; r > 0 || c > 0;) {
        if (r > 0 && (c == 0 || dp[r - 1][c] <= dp[r][c - 1])) { route += 'D'; --r; }
        else { route += 'R'; --c; }
    }
    std::reverse(route.begin(), route.end());
    std::printf("route %s  ", route.c_str());
    return dp[R - 1][C - 1];
}

int main() {
    std::printf("open 3x3 grid: %lld paths\\n", countPaths({"...", "...", "..."}));
    std::printf("with a rock:   %lld paths\\n", countPaths({"...", ".#.", "..."}));
    std::printf("open 10x10:    %lld paths\\n", countPaths(std::vector<std::string>(10, std::string(10, '.'))));
    std::vector<std::vector<int>> terrain = {{1, 3, 1, 2},
                                             {1, 5, 1, 3},
                                             {4, 2, 1, 1}};
    std::printf("cost %d\\n", minPathSum(terrain));
}`,
          output: `open 3x3 grid: 6 paths
with a rock:   2 paths
open 10x10:    48620 paths
route RRDDR  cost 8`,
          annotations: [
            { lines: 9, text: 'A single rolling row: before the update, `row[c]` still holds the count for the cell **above**.' },
            { lines: 14, text: 'Above (old `row[c]`) plus left (`row[c - 1]`, already updated this row).' },
            { lines: '25-28', text: 'First row and first column have only one way in; every other cell takes the cheaper of above and left.' },
            { lines: '31-34', text: 'The walk-back: from each cell, step to whichever neighbor produced the minimum.' },
            { lines: 43, text: '$\\binom{18}{9} = 48\\,620$ paths in an open $10 \\times 10$ grid, computed with $100$ additions.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Four directions break the DAG',
          text: 'If units may move up, down, left and right, cells can depend on each other in a cycle and there is no valid fill order. Cheapest paths on such a map are a **shortest-path** problem: run [[dm-dijkstra|Dijkstra]] (non-negative costs) or A*. Game "Dijkstra maps" and flow fields are exactly that. Right/down DP is for genuinely one-directional movement: side-scrollers, conveyor puzzles, or time-expanded grids where every move advances the clock.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'On this $4 \\times 4$ grid you start at S (top-left) and must reach G (bottom-right), moving only right or down, never entering the rock `#`. How many different paths are there?',
      code: 'S . . .\n. . # .\n. . . .\n. . . G',
      lang: 'text',
      answer: '11',
      hint: 'Fill the counts row by row; the rock cell gets $0$. Row $0$ is all $1$s.',
      explanation: 'Rows of counts: $[1, 1, 1, 1]$, $[1, 2, 0, 1]$, $[1, 3, 3, 4]$, $[1, 4, 7, 11]$. The rock forces $0$ into its cell, which then contributes nothing to the cells below and to its right. Without the rock there would be $\\binom{6}{3} = 20$ paths; $9$ of them pass through the rock: $\\binom{3}{1} = 3$ ways to reach it times $\\binom{3}{1} = 3$ ways from it to G.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'On a tile map where a unit may move in all four directions, you can find the cheapest route by filling $dp[r][c] = \\text{cost}[r][c] + \\min$ of the four neighbors row by row, as long as all costs are positive.',
      answer: false,
      explanation: 'With four directions, a cell can depend on a neighbor that depends on it (left depends on right and right on left), so the subproblem graph has cycles and no row-by-row order makes every neighbor final before it is read. A single sweep gives wrong answers for routes that need to go up or left. This is a shortest-path problem: Dijkstra (or A*) settles cells in order of distance, which is the correct evaluation order. DP needs an acyclic dependency graph.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'DP on trees: two values per node',
      blocks: [
        {
          type: 'p',
          text: 'Trees are DP-friendly because every subtree is an independent subproblem, joined to the rest only through its root. Process nodes in **post-order** (children before parents) and give each node a small state that summarizes its subtree.',
        },
        {
          type: 'p',
          text: 'Example: choose soldiers for a mission to maximize total skill, but never a soldier together with their **direct** superior. In a tree, that is a maximum-weight [[dsa-independent-set|independent set]]: no two chosen nodes adjacent. One number per node is not enough, because the parent needs to know whether the child was chosen. So keep two:',
        },
        {
          type: 'math',
          tex: '\\text{in}(u) = w_u + \\sum_{c \\text{ child of } u} \\text{out}(c), \\qquad \\text{out}(u) = \\sum_{c \\text{ child of } u} \\max\\big(\\text{in}(c),\\ \\text{out}(c)\\big)',
          caption: 'If $u$ is chosen, its children must not be. If $u$ is not chosen, each child independently takes its better option. The answer is $\\max(\\text{in}(\\text{root}), \\text{out}(\\text{root}))$.',
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "CO", "x": 200, "y": 36, "label": "CO"}, {"id": "A", "x": 110, "y": 116, "label": "A"}, {"id": "B", "x": 290, "y": 116, "label": "B"}, {"id": "C", "x": 50, "y": 196, "label": "C"}, {"id": "D", "x": 170, "y": 196, "label": "D"}, {"id": "E", "x": 230, "y": 196, "label": "E"}, {"id": "F", "x": 350, "y": 196, "label": "F"}], "edges": [{"from": "CO", "to": "A"}, {"from": "CO", "to": "B"}, {"from": "A", "to": "C"}, {"from": "A", "to": "D"}, {"from": "B", "to": "E"}, {"from": "B", "to": "F"}], "width": 400, "height": 240, "code": "// post-order: children before parent\nin[u]  = weight[u];   // u chosen\nout[u] = 0;           // u not chosen\nfor (int c : children[u]) {\n  in[u]  += out[c];\n  out[u] += std::max(in[c], out[c]);\n}", "interval": 1500, "frames": [{"note": "Pick soldiers for a mission maximizing total skill $w$, but never a soldier together with their **direct** superior (the node above).", "nodeNotes": [{"id": "CO", "text": "w=3"}, {"id": "A", "text": "w=9"}, {"id": "B", "text": "w=4"}, {"id": "C", "text": "w=2"}, {"id": "D", "text": "w=3"}, {"id": "E", "text": "w=2"}, {"id": "F", "text": "w=3"}]}, {"note": "Leaf C: in $= 2$, out $= 0$.", "nodeNotes": [{"id": "CO", "text": "w=3"}, {"id": "A", "text": "w=9"}, {"id": "B", "text": "w=4"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "w=3"}, {"id": "E", "text": "w=2"}, {"id": "F", "text": "w=3"}], "nodeColors": [{"id": "C", "color": "orange"}], "lines": [2, 3], "vars": [["notes", "in / out"]]}, {"note": "Leaf D: in $= 3$, out $= 0$.", "nodeNotes": [{"id": "CO", "text": "w=3"}, {"id": "A", "text": "w=9"}, {"id": "B", "text": "w=4"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "3/0"}, {"id": "E", "text": "w=2"}, {"id": "F", "text": "w=3"}], "nodeColors": [{"id": "C", "color": "gray"}, {"id": "D", "color": "orange"}], "lines": [2, 3], "vars": [["notes", "in / out"]]}, {"note": "A: in $= 9 + 0 + 0 = 9$ (children out); out $= 2 + 3 = 5$ (each child's better option).", "nodeNotes": [{"id": "CO", "text": "w=3"}, {"id": "A", "text": "9/5"}, {"id": "B", "text": "w=4"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "3/0"}, {"id": "E", "text": "w=2"}, {"id": "F", "text": "w=3"}], "nodeColors": [{"id": "C", "color": "blue"}, {"id": "D", "color": "blue"}, {"id": "A", "color": "orange"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["notes", "in / out"]]}, {"note": "Leaf E: in $= 2$, out $= 0$.", "nodeNotes": [{"id": "CO", "text": "w=3"}, {"id": "A", "text": "9/5"}, {"id": "B", "text": "w=4"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "3/0"}, {"id": "E", "text": "2/0"}, {"id": "F", "text": "w=3"}], "nodeColors": [{"id": "C", "color": "gray"}, {"id": "D", "color": "gray"}, {"id": "A", "color": "gray"}, {"id": "E", "color": "orange"}], "lines": [2, 3], "vars": [["notes", "in / out"]]}, {"note": "Leaf F: in $= 3$, out $= 0$.", "nodeNotes": [{"id": "CO", "text": "w=3"}, {"id": "A", "text": "9/5"}, {"id": "B", "text": "w=4"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "3/0"}, {"id": "E", "text": "2/0"}, {"id": "F", "text": "3/0"}], "nodeColors": [{"id": "C", "color": "gray"}, {"id": "D", "color": "gray"}, {"id": "A", "color": "gray"}, {"id": "E", "color": "gray"}, {"id": "F", "color": "orange"}], "lines": [2, 3], "vars": [["notes", "in / out"]]}, {"note": "B: in $= 4 + 0 + 0 = 4$ (children out); out $= 2 + 3 = 5$ (each child's better option).", "nodeNotes": [{"id": "CO", "text": "w=3"}, {"id": "A", "text": "9/5"}, {"id": "B", "text": "4/5"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "3/0"}, {"id": "E", "text": "2/0"}, {"id": "F", "text": "3/0"}], "nodeColors": [{"id": "C", "color": "gray"}, {"id": "D", "color": "gray"}, {"id": "A", "color": "gray"}, {"id": "E", "color": "blue"}, {"id": "F", "color": "blue"}, {"id": "B", "color": "orange"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["notes", "in / out"]]}, {"note": "CO: in $= 3 + 5 + 5 = 13$ (children out); out $= 9 + 5 = 14$ (each child's better option).", "nodeNotes": [{"id": "CO", "text": "13/14"}, {"id": "A", "text": "9/5"}, {"id": "B", "text": "4/5"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "3/0"}, {"id": "E", "text": "2/0"}, {"id": "F", "text": "3/0"}], "nodeColors": [{"id": "C", "color": "gray"}, {"id": "D", "color": "gray"}, {"id": "E", "color": "gray"}, {"id": "F", "color": "gray"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "blue"}, {"id": "CO", "color": "orange"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["notes", "in / out"]]}, {"note": "Root: $\\max(13, 14) = 14$. Walking down the decisions picks A, E, F (total $14$).", "nodeNotes": [{"id": "CO", "text": "13/14"}, {"id": "A", "text": "9/5"}, {"id": "B", "text": "4/5"}, {"id": "C", "text": "2/0"}, {"id": "D", "text": "3/0"}, {"id": "E", "text": "2/0"}, {"id": "F", "text": "3/0"}], "nodeColors": [{"id": "A", "color": "green"}, {"id": "E", "color": "green"}, {"id": "F", "color": "green"}], "vars": [["best total", "14"]]}], "caption": "Maximum-weight independent set on a tree, in post-order. Notes show each soldier's skill $w$ until the node is processed, then in/out: the best total for the subtree if the node is chosen / not chosen."},
        {
          type: 'code',
          title: 'tree_mis.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

// Maximum-weight independent set on a rooted tree: no node together with its parent.
struct Node { std::string name; int weight; int parent; };

int main() {
    std::vector<Node> t = {{"CO", 3, -1}, {"A", 9, 0}, {"B", 4, 0}, {"C", 2, 1},
                           {"D", 3, 1}, {"E", 2, 2}, {"F", 3, 2}};
    int n = (int)t.size();
    std::vector<std::vector<int>> kids(n);
    for (int v = 1; v < n; ++v) kids[t[v].parent].push_back(v);

    // Iterative DFS order (parents before children); reversed, it is a valid post-order.
    std::vector<int> order, stack = {0};
    while (!stack.empty()) {
        int u = stack.back(); stack.pop_back();
        order.push_back(u);
        for (int c : kids[u]) stack.push_back(c);
    }
    std::vector<long long> in(n), out(n);
    for (int k = n - 1; k >= 0; --k) {           // children are finished before their parent
        int u = order[k];
        in[u] = t[u].weight; out[u] = 0;
        for (int c : kids[u]) { in[u] += out[c]; out[u] += std::max(in[c], out[c]); }
    }
    // Walk down: choose u if its parent was not chosen and choosing it is better.
    std::vector<bool> chosen(n, false);
    for (int u : order) {                        // parents are decided before children
        bool parentChosen = t[u].parent >= 0 && chosen[t[u].parent];
        chosen[u] = !parentChosen && in[u] > out[u];
    }
    std::printf("best total %lld:", std::max(in[0], out[0]));
    for (int u = 0; u < n; ++u) if (chosen[u]) std::printf(" %s", t[u].name.c_str());
    std::printf("\\n");
}`,
          output: `best total 14: A E F`,
          annotations: [
            { lines: '17-22', text: 'An explicit stack instead of recursion: a degenerate tree (a long chain) with $10^6$ nodes would overflow the call stack.' },
            { lines: '24-28', text: 'Reverse pre-order visits every child before its parent, which is all post-order needs here.' },
            { lines: '31-34', text: 'Decisions flow top-down: a node may be chosen only if its parent was not, and only if that is better for its subtree.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The same pattern everywhere',
          text: 'On a **path** this is the interview favorite "house robber" (no two adjacent houses). Other tree DPs keep different small states: the diameter of a tree (deepest and second-deepest child path), minimum vertex cover (in/out again, with the roles swapped), or the cheapest way to place guards in a castle\'s room tree. In general graphs independent set is NP-hard; the tree structure is what makes it linear.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Six watch posts stand in a line with values $2, 7, 9, 3, 1, 8$. You may staff any set of posts, but never two **neighboring** posts. What is the maximum total value? (A line is a tree, so the in/out DP applies.)',
      answer: '19',
      hint: 'Sweep left to right keeping (best total if the current post is staffed, best if it is not).',
      explanation: 'Pairs (in, out) along the line: $(2, 0)$, $(7, 2)$, $(11, 7)$, $(10, 11)$, $(12, 11)$, $(19, 12)$. Each in $=$ value $+$ previous out; each out $= \\max$ of the previous pair. The answer is $\\max(19, 12) = 19$, from posts $2 + 9 + 8$. Taking the obvious big ones, $7$ and $9$, is not allowed (they are neighbors), and $7 + 3 + 8 = 18$ falls one short.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Bitmask DP: exact routes through a few waypoints',
      blocks: [
        {
          type: 'p',
          text: 'A patrol must leave base, visit every waypoint once and come back, as short as possible: the [[dm-tsp|traveling salesperson problem]]. Brute force tries all $(n - 1)!$ orders. DP does better by noticing that, for the future, only two things about a partial route matter: **which** waypoints it has visited and **where** it is now — not the order it visited them in.',
        },
        {
          type: 'theorem',
          name: 'Held–Karp recurrence',
          tex: 'C(S, j) = \\min_{i \\in S \\setminus \\{j\\}} \\Big( C\\big(S \\setminus \\{j\\},\\ i\\big) + d(i, j) \\Big), \\qquad C(\\{0\\}, 0) = 0',
          text: '$C(S, j)$ is the shortest path that starts at $0$, visits exactly the set $S$ and ends at $j \\in S$. The tour length is $\\min_j C(\\text{all}, j) + d(j, 0)$. The set $S$ is stored as an $n$-bit integer, a [[dm-bit-mask|bit mask]]: this is [[dsa-bitmask-dp|bitmask DP]].',
        },
        {
          type: 'p',
          text: 'There are $2^n \\cdot n$ states, each with up to $n$ transitions: $O(2^n n^2)$ time and $O(2^n n)$ memory. Still exponential, but enormously better than factorial.',
        },
        {
          type: 'table',
          headers: ['$n$', '$(n - 1)!$ tours', '$2^n n^2$ (Held–Karp)'],
          rows: [
            ['$8$', '$5\\,040$', '$16\\,384$'],
            ['$12$', '$4.0 \\times 10^{7}$', '$5.9 \\times 10^{5}$'],
            ['$16$', '$1.3 \\times 10^{12}$', '$1.7 \\times 10^{7}$'],
            ['$20$', '$1.2 \\times 10^{17}$', '$4.2 \\times 10^{8}$'],
          ],
          caption: 'At $n = 8$ the two are comparable (the program below does fewer transitions than the bound); by $n = 20$ Held–Karp is a few seconds and brute force takes years. Memory, $2^{20} \\cdot 20$ entries, is the usual limit.',
        },
        {
          type: 'code',
          title: 'tsp.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <cstdlib>
#include <numeric>
#include <vector>

struct P { int x, y; };
int dist(P a, P b) { return std::abs(a.x - b.x) + std::abs(a.y - b.y); }   // grid (Manhattan) distance

int main() {
    // A patrol: start at the base (waypoint 0), visit every waypoint once, return to base.
    std::vector<P> pts = {{0, 0}, {2, 7}, {5, 1}, {9, 4}, {4, 8}, {8, 9}, {1, 4}, {6, 5}};
    const int n = (int)pts.size(), FULL = 1 << n, INF = 1 << 29;

    // Held-Karp: C[S][j] = shortest path that starts at 0, visits exactly the set S, ends at j.
    std::vector<std::vector<int>> C(FULL, std::vector<int>(n, INF));
    C[1][0] = 0;                                         // S = {0}, standing at 0
    long long transitions = 0;
    for (int S = 1; S < FULL; S += 2)                    // only sets containing waypoint 0
        for (int j = 0; j < n; ++j) {
            if (!(S >> j & 1) || C[S][j] == INF) continue;
            for (int k = 0; k < n; ++k)                  // extend the path to an unvisited k
                if (!(S >> k & 1)) {
                    int T = S | 1 << k;
                    C[T][k] = std::min(C[T][k], C[S][j] + dist(pts[j], pts[k]));
                    ++transitions;
                }
        }
    int best = INF;
    for (int j = 1; j < n; ++j) best = std::min(best, C[FULL - 1][j] + dist(pts[j], pts[0]));

    // Brute force for comparison: every order of waypoints 1..n-1.
    std::vector<int> perm(n - 1);
    std::iota(perm.begin(), perm.end(), 1);
    int brute = INF; long long tours = 0;
    do {
        int len = dist(pts[0], pts[perm[0]]) + dist(pts[perm.back()], pts[0]);
        for (int i = 0; i + 1 < n - 1; ++i) len += dist(pts[perm[i]], pts[perm[i + 1]]);
        brute = std::min(brute, len); ++tours;
    } while (std::next_permutation(perm.begin(), perm.end()));

    std::printf("Held-Karp: shortest patrol %d using %lld transitions\\n", best, transitions);
    std::printf("brute force: shortest patrol %d after %lld tours\\n", brute, tours);
}`,
          output: `Held-Karp: shortest patrol 38 using 1351 transitions
brute force: shortest patrol 38 after 5040 tours`,
          annotations: [
            { lines: 16, text: '$2^n \\times n$ table: `C[S][j]`. With $n = 8$ that is $256 \\times 8$ ints.' },
            { lines: 19, text: 'Increasing integers $S$ are a valid order: adding a bit always makes the mask larger, so every $C[S][j]$ is final before it is extended. Odd $S$ = sets containing waypoint $0$.' },
            { lines: '21-25', text: '"Push" form of the recurrence: extend each known partial route by one unvisited waypoint $k$. `S >> j & 1` tests membership; `S | 1 << k` adds $k$.' },
            { lines: 30, text: 'Close the loop back to base.' },
            { lines: '36-40', text: '`std::next_permutation` enumerates all $7! = 5040$ orders, as a check.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'DP in game AI',
          text: 'Bitmask DP plans exact routes through up to $\\sim 20$ objectives or collectibles (a speedrun route, an AI courier\'s deliveries). Knapsack DP picks optimal loadouts and upgrade purchases under a budget, often precomputed offline for every budget and stored as a lookup table. Tree DP evaluates skill trees and squad compositions. The common limit is the state count: when it explodes, AI programmers switch to the heuristics of the NP-completeness lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'An AI courier must deliver to $n$ locations in the best order, and you have about $10^9$ simple operations to spend. Roughly the largest $n$ for which exact Held–Karp ($\\approx 2^n n^2$ operations) fits, and the reason brute force cannot match it?',
      options: [
        { text: 'About $n = 20$; brute force needs $(n - 1)! \\approx 10^{17}$ tours there.', correct: true, why: '$2^{20} \\cdot 20^2 \\approx 4.2 \\times 10^8$ fits; $2^{22} \\cdot 22^2 \\approx 2 \\times 10^9$ does not. Factorial growth is far worse.' },
        { text: 'About $n = 1000$, because the DP is polynomial.', why: 'Held–Karp is exponential: $2^{1000}$ is astronomically large. Only the factor $n^2$ is polynomial.' },
        { text: 'About $n = 12$, the same as brute force, because both are exponential.', why: 'Brute force fits about $n = 13$ ($12! \\approx 4.8 \\times 10^8$), but $2^n$ grows much more slowly than $n!$, so Held–Karp reaches about $20$.' },
        { text: 'About $n = 64$, the number of bits in a `uint64_t` mask.', why: 'The mask width is not the limit; the $2^n$ table and running time are. $2^{64}$ states is impossible.' },
      ],
      explanation: 'Plug in: $n = 20$ gives $2^{20} \\cdot 400 \\approx 4.2 \\times 10^8$ operations and $2^{20} \\cdot 20 \\approx 2 \\times 10^7$ table entries — feasible. Each extra waypoint more than doubles the work. Brute force at $n = 20$ is $19! \\approx 1.2 \\times 10^{17}$ tours. Beyond $\\sim 20$ you need branch and bound, or heuristics such as nearest neighbor and 2-opt.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Unbounded knapsack: capacity $8$, items $(w, v) = (3, 5)$ and $(5, 9)$, each available in any quantity. What is the maximum total value?',
      answer: '14',
      hint: 'Run $dp[w] = \\max(dp[w], dp[w - w_i] + v_i)$ with $w$ going upward, or list the combinations that fit in $8$.',
      explanation: 'Combinations that fit: two $3$s ($10$), one $5$ ($9$), one $3$ and one $5$ (weight $8$, value $14$), one $3$ ($5$). The best is $14$. The upward one-row DP gives $dp = [0, 0, 0, 5, 5, 9, 10, 10, 14]$ for $w = 0, \\dots, 8$. Note $dp[6] = 10$ uses the $(3, 5)$ item twice — allowed here, because the loop runs upward.',
    },
  ],
  takeaways: [
    '0/1 knapsack: $K[i][w] = \\max(K[i-1][w],\\ K[i-1][w - w_i] + v_i)$, $\\Theta(nW)$ pseudo-polynomial; greedy by ratio fails; walk back by comparing each cell with the one above.',
    'One-row knapsack: capacities downward = each item once (0/1); upward = unlimited copies (unbounded).',
    'Right/down grids are DAGs: count paths with $P[r][c] = P[r-1][c] + P[r][c-1]$ and find cheapest routes with $\\min$; with four-way movement, use Dijkstra or A* instead.',
    'Tree DP works bottom-up in post-order with a small state per node; independent set keeps (in, out), with $\\text{in} = w_u + \\sum \\text{out}(c)$ and $\\text{out} = \\sum \\max(\\text{in}(c), \\text{out}(c))$.',
    'Bitmask DP stores a subset as bits: Held–Karp solves TSP exactly in $O(2^n n^2)$, practical to about $n = 20$, versus $(n-1)!$ for brute force.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms, chapter 3 "Dynamic Programming"',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'Includes subset sum, optimal binary search trees and DP on trees, with the same "state = smallest description of what the future needs" mindset.',
    },
    {
      title: 'Wikipedia — Knapsack problem',
      url: 'https://en.wikipedia.org/wiki/Knapsack_problem',
      source: 'wikipedia',
      note: 'The 0/1, bounded and unbounded variants, the pseudo-polynomial DP, and approximation schemes.',
    },
    {
      title: 'Wikipedia — Held–Karp algorithm',
      url: 'https://en.wikipedia.org/wiki/Held%E2%80%93Karp_algorithm',
      source: 'wikipedia',
      note: 'The bitmask DP for TSP, with a worked example and its $O(2^n n^2)$ analysis.',
    },
  ],
};
