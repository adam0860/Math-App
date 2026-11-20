import type { AlgoBlock, Lesson } from '../../types';

// Generated blocks: frames come from scratch scripts that run the algorithms; code is compiled and run.
/*gen:algo:topoDfs*/ const ALGO_topoDfs: AlgoBlock = {"type": "algo", "view": "graph", "nodes": [{"id": "B", "x": 40, "y": 70}, {"id": "E", "x": 40, "y": 200}, {"id": "A", "x": 150, "y": 70}, {"id": "F", "x": 150, "y": 200}, {"id": "C", "x": 260, "y": 70}, {"id": "G", "x": 260, "y": 200}, {"id": "D", "x": 380, "y": 135}], "edges": [{"from": "B", "to": "A", "directed": true}, {"from": "E", "to": "A", "directed": true}, {"from": "E", "to": "F", "directed": true}, {"from": "A", "to": "C", "directed": true}, {"from": "F", "to": "C", "directed": true}, {"from": "F", "to": "G", "directed": true}, {"from": "C", "to": "D", "directed": true}, {"from": "G", "to": "D", "directed": true}], "width": 420, "height": 260, "code": "void visit(int u) {\n    state[u] = GRAY;\n    for (int v : adj[u])\n        if (state[v] == WHITE) visit(v);\n    state[u] = BLACK;\n    order.push_back(u);      // finished\n}\n// for every white u: visit(u); then reverse(order)", "interval": 1100, "frames": [{"note": "Run DFS from every white vertex in alphabetical order, appending each vertex when it **finishes**.", "nodeColors": [], "nodeNotes": [], "vars": [["stack", "(empty)"], ["finished", "–"], ["topological order", "–"]]}, {"note": "Visit $A$ (gray).", "nodeColors": [{"id": "A", "color": "orange"}], "nodeNotes": [], "lines": [2], "vars": [["stack", "A"], ["finished", "–"], ["topological order", "–"]]}, {"note": "Follow $A \\to C$ to white $C$.", "nodeColors": [{"id": "A", "color": "blue"}, {"id": "C", "color": "orange"}], "nodeNotes": [], "edgeColors": [{"from": "A", "to": "C", "color": "blue"}], "lines": [2], "vars": [["stack", "A → C"], ["finished", "–"], ["topological order", "–"]]}, {"note": "Follow $C \\to D$ to white $D$.", "nodeColors": [{"id": "A", "color": "blue"}, {"id": "C", "color": "blue"}, {"id": "D", "color": "orange"}], "nodeNotes": [], "edgeColors": [{"from": "C", "to": "D", "color": "blue"}], "lines": [2], "vars": [["stack", "A → C → D"], ["finished", "–"], ["topological order", "–"]]}, {"note": "$D$ finishes: everything reachable from $D$ is already in the list, so $D$ can go **in front of** all of it.", "nodeColors": [{"id": "A", "color": "blue"}, {"id": "C", "color": "orange"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}], "lines": [5, 6], "vars": [["stack", "A → C"], ["finished", "D"], ["topological order", "D"]]}, {"note": "$C$ finishes: everything reachable from $C$ is already in the list, so $C$ can go **in front of** all of it.", "nodeColors": [{"id": "A", "color": "orange"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}], "lines": [5, 6], "vars": [["stack", "A"], ["finished", "D, C"], ["topological order", "C, D"]]}, {"note": "$A$ finishes: everything reachable from $A$ is already in the list, so $A$ can go **in front of** all of it.", "nodeColors": [{"id": "A", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}], "lines": [5, 6], "vars": [["stack", "(empty)"], ["finished", "D, C, A"], ["topological order", "A, C, D"]]}, {"note": "Visit $B$ (gray).", "nodeColors": [{"id": "B", "color": "orange"}, {"id": "A", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}], "lines": [2], "vars": [["stack", "B"], ["finished", "D, C, A"], ["topological order", "A, C, D"]]}, {"note": "$B \\to A$: $A$ is already finished (black), so it is already in the list. Skip.", "nodeColors": [{"id": "B", "color": "orange"}, {"id": "A", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}], "edgeColors": [{"from": "B", "to": "A", "color": "gray"}], "lines": [3, 4], "vars": [["stack", "B"], ["finished", "D, C, A"], ["topological order", "A, C, D"]]}, {"note": "$B$ finishes: everything reachable from $B$ is already in the list, so $B$ can go **in front of** all of it.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "A", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}], "lines": [5, 6], "vars": [["stack", "(empty)"], ["finished", "D, C, A, B"], ["topological order", "B, A, C, D"]]}, {"note": "Visit $E$ (gray).", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "orange"}, {"id": "A", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}], "lines": [2], "vars": [["stack", "E"], ["finished", "D, C, A, B"], ["topological order", "B, A, C, D"]]}, {"note": "$E \\to A$: $A$ is already finished (black), so it is already in the list. Skip.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "orange"}, {"id": "A", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}], "edgeColors": [{"from": "E", "to": "A", "color": "gray"}], "lines": [3, 4], "vars": [["stack", "E"], ["finished", "D, C, A, B"], ["topological order", "B, A, C, D"]]}, {"note": "Follow $E \\to F$ to white $F$.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "blue"}, {"id": "A", "color": "green"}, {"id": "F", "color": "orange"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}], "edgeColors": [{"from": "E", "to": "F", "color": "blue"}], "lines": [2], "vars": [["stack", "E → F"], ["finished", "D, C, A, B"], ["topological order", "B, A, C, D"]]}, {"note": "$F \\to C$: $C$ is already finished (black), so it is already in the list. Skip.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "blue"}, {"id": "A", "color": "green"}, {"id": "F", "color": "orange"}, {"id": "C", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}], "edgeColors": [{"from": "F", "to": "C", "color": "gray"}], "lines": [3, 4], "vars": [["stack", "E → F"], ["finished", "D, C, A, B"], ["topological order", "B, A, C, D"]]}, {"note": "Follow $F \\to G$ to white $G$.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "blue"}, {"id": "A", "color": "green"}, {"id": "F", "color": "blue"}, {"id": "C", "color": "green"}, {"id": "G", "color": "orange"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}], "edgeColors": [{"from": "F", "to": "G", "color": "blue"}], "lines": [2], "vars": [["stack", "E → F → G"], ["finished", "D, C, A, B"], ["topological order", "B, A, C, D"]]}, {"note": "$G \\to D$: $D$ is already finished (black), so it is already in the list. Skip.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "blue"}, {"id": "A", "color": "green"}, {"id": "F", "color": "blue"}, {"id": "C", "color": "green"}, {"id": "G", "color": "orange"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}], "edgeColors": [{"from": "G", "to": "D", "color": "gray"}], "lines": [3, 4], "vars": [["stack", "E → F → G"], ["finished", "D, C, A, B"], ["topological order", "B, A, C, D"]]}, {"note": "$G$ finishes: everything reachable from $G$ is already in the list, so $G$ can go **in front of** all of it.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "blue"}, {"id": "A", "color": "green"}, {"id": "F", "color": "orange"}, {"id": "C", "color": "green"}, {"id": "G", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}, {"id": "G", "text": "f=5"}], "lines": [5, 6], "vars": [["stack", "E → F"], ["finished", "D, C, A, B, G"], ["topological order", "G, B, A, C, D"]]}, {"note": "$F$ finishes: everything reachable from $F$ is already in the list, so $F$ can go **in front of** all of it.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "orange"}, {"id": "A", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "G", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}, {"id": "G", "text": "f=5"}, {"id": "F", "text": "f=6"}], "lines": [5, 6], "vars": [["stack", "E"], ["finished", "D, C, A, B, G, F"], ["topological order", "F, G, B, A, C, D"]]}, {"note": "$E$ finishes: everything reachable from $E$ is already in the list, so $E$ can go **in front of** all of it.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "G", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}, {"id": "G", "text": "f=5"}, {"id": "F", "text": "f=6"}, {"id": "E", "text": "f=7"}], "lines": [5, 6], "vars": [["stack", "(empty)"], ["finished", "D, C, A, B, G, F, E"], ["topological order", "E, F, G, B, A, C, D"]]}, {"note": "Reverse the finish order: every edge now points from an earlier vertex to a later one.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "G", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "D", "text": "f=1"}, {"id": "C", "text": "f=2"}, {"id": "A", "text": "f=3"}, {"id": "B", "text": "f=4"}, {"id": "G", "text": "f=5"}, {"id": "F", "text": "f=6"}, {"id": "E", "text": "f=7"}], "lines": [8], "vars": [["stack", "(empty)"], ["finished", "D, C, A, B, G, F, E"], ["topological order", "E, F, G, B, A, C, D"]]}], "caption": "Topological sort by DFS finish times. Blue/orange: on the recursion stack; green: finished. The order builds up from the right as vertices finish."};
/*gen:algo:kahn*/ const ALGO_kahn: AlgoBlock = {"type": "algo", "view": "graph", "nodes": [{"id": "B", "x": 40, "y": 70}, {"id": "E", "x": 40, "y": 200}, {"id": "A", "x": 150, "y": 70}, {"id": "F", "x": 150, "y": 200}, {"id": "C", "x": 260, "y": 70}, {"id": "G", "x": 260, "y": 200}, {"id": "D", "x": 380, "y": 135}], "edges": [{"from": "B", "to": "A", "directed": true}, {"from": "E", "to": "A", "directed": true}, {"from": "E", "to": "F", "directed": true}, {"from": "A", "to": "C", "directed": true}, {"from": "F", "to": "C", "directed": true}, {"from": "F", "to": "G", "directed": true}, {"from": "C", "to": "D", "directed": true}, {"from": "G", "to": "D", "directed": true}], "width": 420, "height": 260, "code": "for (int v = 0; v < n; ++v)\n    if (indeg[v] == 0) ready.push(v);\nwhile (!ready.empty()) {\n    int u = ready.front(); ready.pop();\n    order.push_back(u);\n    for (int v : adj[u])\n        if (--indeg[v] == 0) ready.push(v);\n}\n// order.size() < n  <=>  there is a cycle", "interval": 1100, "frames": [{"note": "Count in-degrees: how many prerequisites each vertex is still waiting for.", "nodeColors": [], "nodeNotes": [{"id": "B", "text": "in=0"}, {"id": "E", "text": "in=0"}, {"id": "A", "text": "in=2"}, {"id": "F", "text": "in=1"}, {"id": "C", "text": "in=2"}, {"id": "G", "text": "in=1"}, {"id": "D", "text": "in=2"}], "edgeColors": [], "vars": [["queue", "(empty)"], ["order", "–"]]}, {"note": "Vertices with in-degree $0$ (B, E) have no prerequisites: they go in the queue.", "nodeColors": [{"id": "B", "color": "blue"}, {"id": "E", "color": "blue"}], "nodeNotes": [{"id": "B", "text": "in=0"}, {"id": "E", "text": "in=0"}, {"id": "A", "text": "in=2"}, {"id": "F", "text": "in=1"}, {"id": "C", "text": "in=2"}, {"id": "G", "text": "in=1"}, {"id": "D", "text": "in=2"}], "edgeColors": [], "lines": [1, 2], "vars": [["queue", "B, E"], ["order", "–"]]}, {"note": "Output $B$ and delete its out-edges, lowering each target's in-degree. Nothing reaches $0$ yet.", "nodeColors": [{"id": "E", "color": "blue"}, {"id": "B", "color": "orange"}], "nodeNotes": [{"id": "E", "text": "in=0"}, {"id": "A", "text": "in=1"}, {"id": "F", "text": "in=1"}, {"id": "C", "text": "in=2"}, {"id": "G", "text": "in=1"}, {"id": "D", "text": "in=2"}], "edgeColors": [{"from": "B", "to": "A", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["queue", "E"], ["order", "B"]]}, {"note": "Output $E$ and delete its out-edges, lowering each target's in-degree. $A$ and $F$ drop to $0$: enqueue.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "A", "color": "blue"}, {"id": "F", "color": "blue"}, {"id": "E", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "in=0"}, {"id": "F", "text": "in=0"}, {"id": "C", "text": "in=2"}, {"id": "G", "text": "in=1"}, {"id": "D", "text": "in=2"}], "edgeColors": [{"from": "B", "to": "A", "color": "gray"}, {"from": "E", "to": "A", "color": "orange"}, {"from": "E", "to": "F", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["queue", "A, F"], ["order", "B, E"]]}, {"note": "Output $A$ and delete its out-edges, lowering each target's in-degree. Nothing reaches $0$ yet.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "F", "color": "blue"}, {"id": "A", "color": "orange"}], "nodeNotes": [{"id": "F", "text": "in=0"}, {"id": "C", "text": "in=1"}, {"id": "G", "text": "in=1"}, {"id": "D", "text": "in=2"}], "edgeColors": [{"from": "B", "to": "A", "color": "gray"}, {"from": "E", "to": "A", "color": "gray"}, {"from": "E", "to": "F", "color": "gray"}, {"from": "A", "to": "C", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["queue", "F"], ["order", "B, E, A"]]}, {"note": "Output $F$ and delete its out-edges, lowering each target's in-degree. $C$ and $G$ drop to $0$: enqueue.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "green"}, {"id": "C", "color": "blue"}, {"id": "G", "color": "blue"}, {"id": "F", "color": "orange"}], "nodeNotes": [{"id": "C", "text": "in=0"}, {"id": "G", "text": "in=0"}, {"id": "D", "text": "in=2"}], "edgeColors": [{"from": "B", "to": "A", "color": "gray"}, {"from": "E", "to": "A", "color": "gray"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "E", "to": "F", "color": "gray"}, {"from": "F", "to": "C", "color": "orange"}, {"from": "F", "to": "G", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["queue", "C, G"], ["order", "B, E, A, F"]]}, {"note": "Output $C$ and delete its out-edges, lowering each target's in-degree. Nothing reaches $0$ yet.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "green"}, {"id": "F", "color": "green"}, {"id": "G", "color": "blue"}, {"id": "C", "color": "orange"}], "nodeNotes": [{"id": "G", "text": "in=0"}, {"id": "D", "text": "in=1"}], "edgeColors": [{"from": "E", "to": "A", "color": "gray"}, {"from": "F", "to": "G", "color": "gray"}, {"from": "F", "to": "C", "color": "gray"}, {"from": "B", "to": "A", "color": "gray"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "E", "to": "F", "color": "gray"}, {"from": "C", "to": "D", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["queue", "G"], ["order", "B, E, A, F, C"]]}, {"note": "Output $G$ and delete its out-edges, lowering each target's in-degree. $D$ drops to $0$: enqueue.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "D", "color": "blue"}, {"id": "G", "color": "orange"}], "nodeNotes": [{"id": "D", "text": "in=0"}], "edgeColors": [{"from": "C", "to": "D", "color": "gray"}, {"from": "E", "to": "A", "color": "gray"}, {"from": "F", "to": "G", "color": "gray"}, {"from": "F", "to": "C", "color": "gray"}, {"from": "B", "to": "A", "color": "gray"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "E", "to": "F", "color": "gray"}, {"from": "G", "to": "D", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["queue", "D"], ["order", "B, E, A, F, C, G"]]}, {"note": "Output $D$ and delete its out-edges, lowering each target's in-degree.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "G", "color": "green"}, {"id": "D", "color": "orange"}], "nodeNotes": [], "edgeColors": [{"from": "C", "to": "D", "color": "gray"}, {"from": "E", "to": "A", "color": "gray"}, {"from": "F", "to": "G", "color": "gray"}, {"from": "F", "to": "C", "color": "gray"}, {"from": "G", "to": "D", "color": "gray"}, {"from": "B", "to": "A", "color": "gray"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "E", "to": "F", "color": "gray"}], "lines": [4, 5, 6, 7], "vars": [["queue", "(empty)"], ["order", "B, E, A, F, C, G, D"]]}, {"note": "Queue empty and all $7$ vertices output: a valid order, and a proof that the graph has no cycle.", "nodeColors": [{"id": "B", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "G", "color": "green"}, {"id": "D", "color": "green"}], "nodeNotes": [], "edgeColors": [{"from": "C", "to": "D", "color": "gray"}, {"from": "E", "to": "A", "color": "gray"}, {"from": "F", "to": "G", "color": "gray"}, {"from": "F", "to": "C", "color": "gray"}, {"from": "G", "to": "D", "color": "gray"}, {"from": "B", "to": "A", "color": "gray"}, {"from": "A", "to": "C", "color": "gray"}, {"from": "E", "to": "F", "color": "gray"}], "lines": [9], "vars": [["queue", "(empty)"], ["order", "B, E, A, F, C, G, D"]]}], "caption": "Kahn's algorithm on the same DAG. Notes show remaining in-degrees; blue vertices wait in the queue, orange is being output, gray edges are deleted."};
/*gen:algo:kosaraju1*/ const ALGO_kosaraju1: AlgoBlock = {"type": "algo", "view": "graph", "nodes": [{"id": "A", "x": 40, "y": 60}, {"id": "B", "x": 150, "y": 60}, {"id": "C", "x": 95, "y": 180}, {"id": "D", "x": 240, "y": 60}, {"id": "E", "x": 340, "y": 60}, {"id": "F", "x": 290, "y": 180}, {"id": "G", "x": 380, "y": 200}, {"id": "H", "x": 200, "y": 245}], "edges": [{"from": "A", "to": "B", "directed": true}, {"from": "B", "to": "C", "directed": true}, {"from": "C", "to": "A", "directed": true}, {"from": "B", "to": "D", "directed": true}, {"from": "C", "to": "F", "directed": true}, {"from": "D", "to": "E", "directed": true}, {"from": "E", "to": "F", "directed": true}, {"from": "F", "to": "D", "directed": true}, {"from": "E", "to": "G", "directed": true}, {"from": "F", "to": "H", "directed": true}, {"from": "G", "to": "H", "directed": true}], "width": 420, "height": 280, "interval": 900, "frames": [{"note": "Pass 1: ordinary DFS on $G$ from $A$ (neighbors alphabetical), recording only the order in which vertices **finish**.", "nodeColors": [], "nodeNotes": [], "vars": [["stack", "(empty)"], ["finish order", "–"]]}, {"note": "$H$ finishes (1st). Stack: A → B → C → F → D → E → G.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "blue"}, {"id": "C", "color": "blue"}, {"id": "F", "color": "blue"}, {"id": "D", "color": "blue"}, {"id": "E", "color": "blue"}, {"id": "G", "color": "blue"}], "nodeNotes": [{"id": "H", "text": "#1"}], "vars": [["stack", "A → B → C → F → D → E → G"], ["finish order", "H"]]}, {"note": "$G$ finishes (2nd). Stack: A → B → C → F → D → E.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "blue"}, {"id": "C", "color": "blue"}, {"id": "F", "color": "blue"}, {"id": "D", "color": "blue"}, {"id": "E", "color": "blue"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}], "vars": [["stack", "A → B → C → F → D → E"], ["finish order", "H, G"]]}, {"note": "$E$ finishes (3rd). Stack: A → B → C → F → D.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "E", "color": "green"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "blue"}, {"id": "C", "color": "blue"}, {"id": "F", "color": "blue"}, {"id": "D", "color": "blue"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}, {"id": "E", "text": "#3"}], "vars": [["stack", "A → B → C → F → D"], ["finish order", "H, G, E"]]}, {"note": "$D$ finishes (4th). Stack: A → B → C → F.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "E", "color": "green"}, {"id": "D", "color": "green"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "blue"}, {"id": "C", "color": "blue"}, {"id": "F", "color": "blue"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}, {"id": "E", "text": "#3"}, {"id": "D", "text": "#4"}], "vars": [["stack", "A → B → C → F"], ["finish order", "H, G, E, D"]]}, {"note": "$F$ finishes (5th). Stack: A → B → C.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "E", "color": "green"}, {"id": "D", "color": "green"}, {"id": "F", "color": "green"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "blue"}, {"id": "C", "color": "blue"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}, {"id": "E", "text": "#3"}, {"id": "D", "text": "#4"}, {"id": "F", "text": "#5"}], "vars": [["stack", "A → B → C"], ["finish order", "H, G, E, D, F"]]}, {"note": "$C$ finishes (6th). Stack: A → B.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "E", "color": "green"}, {"id": "D", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "blue"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}, {"id": "E", "text": "#3"}, {"id": "D", "text": "#4"}, {"id": "F", "text": "#5"}, {"id": "C", "text": "#6"}], "vars": [["stack", "A → B"], ["finish order", "H, G, E, D, F, C"]]}, {"note": "$B$ finishes (7th). Stack: A.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "E", "color": "green"}, {"id": "D", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "B", "color": "green"}, {"id": "A", "color": "blue"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}, {"id": "E", "text": "#3"}, {"id": "D", "text": "#4"}, {"id": "F", "text": "#5"}, {"id": "C", "text": "#6"}, {"id": "B", "text": "#7"}], "vars": [["stack", "A"], ["finish order", "H, G, E, D, F, C, B"]]}, {"note": "$A$ finishes (8th).", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "E", "color": "green"}, {"id": "D", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "B", "color": "green"}, {"id": "A", "color": "green"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}, {"id": "E", "text": "#3"}, {"id": "D", "text": "#4"}, {"id": "F", "text": "#5"}, {"id": "C", "text": "#6"}, {"id": "B", "text": "#7"}, {"id": "A", "text": "#8"}], "vars": [["stack", "(empty)"], ["finish order", "H, G, E, D, F, C, B, A"]]}, {"note": "Pass 1 done. The last to finish, $A$, lies in a **source** component of the condensation.", "nodeColors": [{"id": "H", "color": "green"}, {"id": "G", "color": "green"}, {"id": "E", "color": "green"}, {"id": "D", "color": "green"}, {"id": "F", "color": "green"}, {"id": "C", "color": "green"}, {"id": "B", "color": "green"}, {"id": "A", "color": "green"}], "nodeNotes": [{"id": "H", "text": "#1"}, {"id": "G", "text": "#2"}, {"id": "E", "text": "#3"}, {"id": "D", "text": "#4"}, {"id": "F", "text": "#5"}, {"id": "C", "text": "#6"}, {"id": "B", "text": "#7"}, {"id": "A", "text": "#8"}], "vars": [["stack", "(empty)"], ["finish order", "H, G, E, D, F, C, B, A"]]}], "caption": "Kosaraju, pass 1: DFS on $G$. The note under each vertex is its finishing rank."};
/*gen:algo:kosaraju2*/ const ALGO_kosaraju2: AlgoBlock = {"type": "algo", "view": "graph", "nodes": [{"id": "A", "x": 40, "y": 60}, {"id": "B", "x": 150, "y": 60}, {"id": "C", "x": 95, "y": 180}, {"id": "D", "x": 240, "y": 60}, {"id": "E", "x": 340, "y": 60}, {"id": "F", "x": 290, "y": 180}, {"id": "G", "x": 380, "y": 200}, {"id": "H", "x": 200, "y": 245}], "edges": [{"from": "B", "to": "A", "directed": true}, {"from": "C", "to": "B", "directed": true}, {"from": "A", "to": "C", "directed": true}, {"from": "D", "to": "B", "directed": true}, {"from": "F", "to": "C", "directed": true}, {"from": "E", "to": "D", "directed": true}, {"from": "F", "to": "E", "directed": true}, {"from": "D", "to": "F", "directed": true}, {"from": "G", "to": "E", "directed": true}, {"from": "H", "to": "F", "directed": true}, {"from": "H", "to": "G", "directed": true}], "width": 420, "height": 280, "interval": 1300, "frames": [{"note": "Pass 2 runs on the **transpose** $G^T$ (every arrow reversed), starting vertices in **decreasing** finish time.", "nodeColors": [], "nodeNotes": [], "vars": [["process in order", "A, B, C, F, D, E, G, H"], ["SCCs found", "0"]]}, {"note": "Start at $A$: DFS in $G^T$ reaches $A$, $C$, $B$. That is SCC 1.", "nodeColors": [{"id": "A", "color": "purple"}, {"id": "C", "color": "purple"}, {"id": "B", "color": "purple"}], "nodeNotes": [{"id": "A", "text": "SCC 1"}, {"id": "C", "text": "SCC 1"}, {"id": "B", "text": "SCC 1"}], "vars": [["process in order", "A, B, C, F, D, E, G, H"], ["SCCs found", "1"]]}, {"note": "Start at $F$: DFS in $G^T$ reaches $F$, $E$, $D$. That is SCC 2. Edges to $B$, $C$ lead into SCCs already found, so they are ignored.", "nodeColors": [{"id": "A", "color": "purple"}, {"id": "C", "color": "purple"}, {"id": "B", "color": "purple"}, {"id": "F", "color": "teal"}, {"id": "E", "color": "teal"}, {"id": "D", "color": "teal"}], "nodeNotes": [{"id": "A", "text": "SCC 1"}, {"id": "C", "text": "SCC 1"}, {"id": "B", "text": "SCC 1"}, {"id": "F", "text": "SCC 2"}, {"id": "E", "text": "SCC 2"}, {"id": "D", "text": "SCC 2"}], "vars": [["process in order", "A, B, C, F, D, E, G, H"], ["SCCs found", "2"]]}, {"note": "Start at $G$: DFS in $G^T$ reaches $G$. That is SCC 3. Edges to $E$ lead into SCCs already found, so they are ignored.", "nodeColors": [{"id": "A", "color": "purple"}, {"id": "C", "color": "purple"}, {"id": "B", "color": "purple"}, {"id": "F", "color": "teal"}, {"id": "E", "color": "teal"}, {"id": "D", "color": "teal"}, {"id": "G", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "SCC 1"}, {"id": "C", "text": "SCC 1"}, {"id": "B", "text": "SCC 1"}, {"id": "F", "text": "SCC 2"}, {"id": "E", "text": "SCC 2"}, {"id": "D", "text": "SCC 2"}, {"id": "G", "text": "SCC 3"}], "vars": [["process in order", "A, B, C, F, D, E, G, H"], ["SCCs found", "3"]]}, {"note": "Start at $H$: DFS in $G^T$ reaches $H$. That is SCC 4. Edges to $F$, $G$ lead into SCCs already found, so they are ignored.", "nodeColors": [{"id": "A", "color": "purple"}, {"id": "C", "color": "purple"}, {"id": "B", "color": "purple"}, {"id": "F", "color": "teal"}, {"id": "E", "color": "teal"}, {"id": "D", "color": "teal"}, {"id": "G", "color": "orange"}, {"id": "H", "color": "red"}], "nodeNotes": [{"id": "A", "text": "SCC 1"}, {"id": "C", "text": "SCC 1"}, {"id": "B", "text": "SCC 1"}, {"id": "F", "text": "SCC 2"}, {"id": "E", "text": "SCC 2"}, {"id": "D", "text": "SCC 2"}, {"id": "G", "text": "SCC 3"}, {"id": "H", "text": "SCC 4"}], "vars": [["process in order", "A, B, C, F, D, E, G, H"], ["SCCs found", "4"]]}, {"note": "4 strongly connected components, found in topological order of the condensation.", "nodeColors": [{"id": "A", "color": "purple"}, {"id": "C", "color": "purple"}, {"id": "B", "color": "purple"}, {"id": "F", "color": "teal"}, {"id": "E", "color": "teal"}, {"id": "D", "color": "teal"}, {"id": "G", "color": "orange"}, {"id": "H", "color": "red"}], "nodeNotes": [{"id": "A", "text": "SCC 1"}, {"id": "C", "text": "SCC 1"}, {"id": "B", "text": "SCC 1"}, {"id": "F", "text": "SCC 2"}, {"id": "E", "text": "SCC 2"}, {"id": "D", "text": "SCC 2"}, {"id": "G", "text": "SCC 3"}, {"id": "H", "text": "SCC 4"}], "vars": [["process in order", "A, B, C, F, D, E, G, H"], ["SCCs found", "4"]]}], "caption": "Kosaraju, pass 2: the same vertices with every edge **reversed** ($G^T$). Each DFS tree is exactly one strongly connected component."};
/*gen:code:topo_dfs*/ const CODE_topo_dfs = "#include <algorithm>\n#include <cstdio>\n#include <string>\n#include <vector>\n\n// Engine modules and \"must be built before\" edges: an edge u -> v means u is a prerequisite of v.\nconst std::vector<std::string> name{\"core\", \"math\", \"memory\", \"render\", \"physics\", \"audio\", \"ai\", \"game\"};\nenum { CORE, MATH, MEMORY, RENDER, PHYSICS, AUDIO, AI, GAME };\n\nstruct TopoDfs {\n    const std::vector<std::vector<int>>& adj;\n    std::vector<int> state;          // 0 = white, 1 = gray (on stack), 2 = black (finished)\n    std::vector<int> order;          // vertices in order of FINISH time\n    bool cycle = false;\n\n    explicit TopoDfs(const std::vector<std::vector<int>>& g) : adj(g), state(g.size(), 0) {}\n\n    void visit(int u) {\n        state[u] = 1;\n        for (int v : adj[u]) {\n            if (state[v] == 1) cycle = true;          // back edge: no topological order exists\n            else if (state[v] == 0) visit(v);\n        }\n        state[u] = 2;\n        order.push_back(u);                           // u finishes after everything it leads to\n    }\n    std::vector<int> run() {\n        for (int u = 0; u < static_cast<int>(adj.size()); ++u)\n            if (state[u] == 0) visit(u);\n        std::reverse(order.begin(), order.end());     // decreasing finish time\n        return order;\n    }\n};\n\nint main() {\n    std::vector<std::vector<int>> adj(8);\n    auto need = [&](int before, int after) { adj[before].push_back(after); };\n    need(CORE, MATH);    need(CORE, MEMORY);\n    need(MATH, PHYSICS); need(MATH, RENDER);   need(MEMORY, RENDER); need(MEMORY, AUDIO);\n    need(PHYSICS, AI);   need(PHYSICS, GAME);  need(RENDER, GAME);   need(AUDIO, GAME); need(AI, GAME);\n\n    TopoDfs t(adj);\n    std::vector<int> order = t.run();\n    std::printf(\"build order:\");\n    for (int u : order) std::printf(\" %s\", name[u].c_str());\n    std::printf(\"\\ncycle: %s\\n\", t.cycle ? \"yes\" : \"no\");\n\n    need(GAME, CORE);                                 // someone adds a bad dependency\n    TopoDfs t2(adj);\n    t2.run();\n    std::printf(\"after game -> core, cycle: %s\\n\", t2.cycle ? \"yes\" : \"no\");\n}";
/*gen:out:topo_dfs*/ const OUT_topo_dfs = "build order: core memory audio math render physics ai game\ncycle: no\nafter game -> core, cycle: yes";
/*gen:code:kahn*/ const CODE_kahn = "#include <algorithm>\n#include <cstdio>\n#include <functional>\n#include <queue>\n#include <string>\n#include <vector>\n\nconst std::vector<std::string> tech{\"mining\", \"archery\", \"wheel\", \"bronze\", \"riding\", \"iron\", \"chariots\", \"knights\"};\n\n// Kahn's algorithm. Returns the order; it is shorter than n exactly when there is a cycle.\n// stage[v] = 1 + the latest stage among v's prerequisites (the earliest \"turn\" v can be researched).\nstd::vector<int> kahn(const std::vector<std::vector<int>>& adj, std::vector<int>& stage) {\n    const int n = static_cast<int>(adj.size());\n    std::vector<int> indeg(n, 0);\n    for (const auto& out : adj)\n        for (int v : out) ++indeg[v];\n    std::queue<int> ready;                                  // prerequisites all done\n    stage.assign(n, 1);\n    for (int v = 0; v < n; ++v)\n        if (indeg[v] == 0) ready.push(v);\n    std::vector<int> order;\n    while (!ready.empty()) {\n        int u = ready.front(); ready.pop();\n        order.push_back(u);\n        for (int v : adj[u]) {\n            stage[v] = std::max(stage[v], stage[u] + 1);\n            if (--indeg[v] == 0) ready.push(v);             // last prerequisite just finished\n        }\n    }\n    return order;\n}\n\n// Same algorithm with a min-heap instead of a FIFO queue: the lexicographically smallest order\n// (here: smallest index first), a deterministic choice when many orders are valid.\nstd::vector<int> kahn_smallest_first(const std::vector<std::vector<int>>& adj) {\n    std::vector<int> indeg(adj.size(), 0);\n    for (const auto& out : adj)\n        for (int v : out) ++indeg[v];\n    std::priority_queue<int, std::vector<int>, std::greater<int>> ready;\n    for (int v = 0; v < static_cast<int>(adj.size()); ++v)\n        if (indeg[v] == 0) ready.push(v);\n    std::vector<int> order;\n    while (!ready.empty()) {\n        int u = ready.top(); ready.pop();\n        order.push_back(u);\n        for (int v : adj[u])\n            if (--indeg[v] == 0) ready.push(v);\n    }\n    return order;\n}\n\nint main() {\n    enum { MINING, ARCHERY, WHEEL, BRONZE, RIDING, IRON, CHARIOTS, KNIGHTS };\n    std::vector<std::vector<int>> adj(8);\n    auto req = [&](int before, int after) { adj[before].push_back(after); };\n    req(MINING, BRONZE); req(BRONZE, IRON);   req(WHEEL, CHARIOTS); req(RIDING, CHARIOTS);\n    req(ARCHERY, CHARIOTS); req(RIDING, KNIGHTS); req(IRON, KNIGHTS);\n\n    std::vector<int> stage;\n    std::vector<int> order = kahn(adj, stage);\n    std::printf(\"fifo order:\");\n    for (int v : order) std::printf(\" %s(%d)\", tech[v].c_str(), stage[v]);\n    std::printf(\"\\nsmallest-first:\");\n    for (int v : kahn_smallest_first(adj)) std::printf(\" %s\", tech[v].c_str());\n    std::printf(\"\\n\");\n\n    req(KNIGHTS, MINING);                                   // a designer typo creates a cycle\n    order = kahn(adj, stage);\n    std::printf(\"with knights -> mining: %zu of 8 researched; stuck:\", order.size());\n    std::vector<bool> done(8, false);\n    for (int v : order) done[v] = true;\n    for (int v = 0; v < 8; ++v)\n        if (!done[v]) std::printf(\" %s\", tech[v].c_str());\n    std::printf(\"\\n\");\n}";
/*gen:out:kahn*/ const OUT_kahn = "fifo order: mining(1) archery(1) wheel(1) riding(1) bronze(2) chariots(2) iron(3) knights(4)\nsmallest-first: mining archery wheel bronze riding iron chariots knights\nwith knights -> mining: 4 of 8 researched; stuck: mining bronze iron knights";
/*gen:code:cycle_find*/ const CODE_cycle_find = "#include <algorithm>\n#include <cstdio>\n#include <string>\n#include <vector>\n\n// Find a directed cycle (if any) and return it as a list of vertices.\nstruct CycleFinder {\n    const std::vector<std::vector<int>>& adj;\n    std::vector<int> color, parent;   // 0 white, 1 gray, 2 black\n    std::vector<int> cycle;\n\n    explicit CycleFinder(const std::vector<std::vector<int>>& g)\n        : adj(g), color(g.size(), 0), parent(g.size(), -1) {}\n\n    bool dfs(int u) {\n        color[u] = 1;\n        for (int v : adj[u]) {\n            if (color[v] == 1) {                       // back edge u -> v: v ... u -> v is a cycle\n                for (int x = u; x != v; x = parent[x]) cycle.push_back(x);\n                cycle.push_back(v);\n                std::reverse(cycle.begin(), cycle.end());\n                return true;\n            }\n            if (color[v] == 0) {\n                parent[v] = u;\n                if (dfs(v)) return true;\n            }\n        }\n        color[u] = 2;                                  // finished: no cycle through u's subtree\n        return false;\n    }\n    bool find() {\n        for (int u = 0; u < static_cast<int>(adj.size()); ++u)\n            if (color[u] == 0 && dfs(u)) return true;\n        return false;\n    }\n};\n\nint main() {\n    // Quest prerequisites: an edge u -> v means \"finish u before v becomes available\".\n    std::vector<std::string> quest{\"Tutorial\", \"Find the Map\", \"Meet the Smith\", \"Forge the Key\",\n                                   \"Open the Vault\", \"Rescue the Scout\"};\n    std::vector<std::vector<int>> adj{{1, 2}, {3}, {3}, {4}, {}, {}};\n    CycleFinder ok(adj);\n    std::printf(\"cycle? %s\\n\", ok.find() ? \"yes\" : \"no\");\n\n    adj[4].push_back(5);\n    adj[5].push_back(1);                               // the scout gives you the map... loop!\n    CycleFinder bad(adj);\n    if (bad.find()) {\n        std::printf(\"cycle:\");\n        for (int v : bad.cycle) std::printf(\" %s ->\", quest[v].c_str());\n        std::printf(\" %s\\n\", quest[bad.cycle.front()].c_str());\n    }\n}";
/*gen:out:cycle_find*/ const OUT_cycle_find = "cycle? no\ncycle: Find the Map -> Forge the Key -> Open the Vault -> Rescue the Scout -> Find the Map";
/*gen:code:components_bipartite*/ const CODE_components_bipartite = "#include <cstdio>\n#include <queue>\n#include <utility>\n#include <vector>\n\nusing Graph = std::vector<std::vector<int>>;\n\nGraph undirected(int n, const std::vector<std::pair<int, int>>& edges) {\n    Graph g(n);\n    for (auto [u, v] : edges) { g[u].push_back(v); g[v].push_back(u); }\n    return g;\n}\n\n// Label connected components: comp[v] = 0, 1, 2, ...; returns the number of components.\nint components(const Graph& g, std::vector<int>& comp) {\n    comp.assign(g.size(), -1);\n    int count = 0;\n    for (int s = 0; s < static_cast<int>(g.size()); ++s) {\n        if (comp[s] != -1) continue;\n        std::queue<int> q;\n        comp[s] = count;\n        q.push(s);\n        while (!q.empty()) {\n            int v = q.front(); q.pop();\n            for (int w : g[v])\n                if (comp[w] == -1) { comp[w] = count; q.push(w); }\n        }\n        ++count;\n    }\n    return count;\n}\n\n// 2-color by BFS layer parity. Returns false (and the offending edge) if some edge\n// joins two vertices of the same color: then the graph contains an odd cycle.\nbool bipartite(const Graph& g, std::vector<int>& side, std::pair<int, int>& conflict) {\n    side.assign(g.size(), -1);\n    for (int s = 0; s < static_cast<int>(g.size()); ++s) {\n        if (side[s] != -1) continue;                  // every component needs its own start\n        std::queue<int> q;\n        side[s] = 0;\n        q.push(s);\n        while (!q.empty()) {\n            int v = q.front(); q.pop();\n            for (int w : g[v]) {\n                if (side[w] == -1) { side[w] = 1 - side[v]; q.push(w); }\n                else if (side[w] == side[v]) { conflict = {v, w}; return false; }\n            }\n        }\n    }\n    return true;\n}\n\nint main() {\n    // Factions 0..6; an edge means \"rivals: must be in different camps\".\n    Graph rivals = undirected(7, {{0, 1}, {1, 2}, {2, 3}, {3, 0}, {4, 5}});\n    std::vector<int> comp, side;\n    std::pair<int, int> bad;\n    std::printf(\"components: %d\\n\", components(rivals, comp));\n    if (bipartite(rivals, side, bad)) {\n        std::printf(\"two camps:\");\n        for (int v = 0; v < 7; ++v) std::printf(\" %d:%c\", v, side[v] ? 'B' : 'A');\n        std::printf(\"\\n\");\n    }\n    rivals = undirected(7, {{0, 1}, {1, 2}, {2, 3}, {3, 0}, {4, 5}, {5, 6}, {6, 4}});\n    std::printf(\"components: %d\\n\", components(rivals, comp));\n    if (!bipartite(rivals, side, bad))\n        std::printf(\"no split possible: %d and %d are rivals on the same side (odd cycle)\\n\", bad.first, bad.second);\n}";
/*gen:out:components_bipartite*/ const OUT_components_bipartite = "components: 3\ntwo camps: 0:A 1:B 2:A 3:B 4:A 5:B 6:A\ncomponents: 2\nno split possible: 5 and 6 are rivals on the same side (odd cycle)";
/*gen:code:scc*/ const CODE_scc = "#include <algorithm>\n#include <cstdio>\n#include <string>\n#include <vector>\n\nusing Graph = std::vector<std::vector<int>>;\n\n// ---- Kosaraju: two DFS passes. Returns comp[v]; components are numbered in\n// topological order of the condensation (a source component gets 0).\nstruct Kosaraju {\n    const Graph& g;\n    Graph rev;\n    std::vector<bool> seen;\n    std::vector<int> order, comp;\n\n    explicit Kosaraju(const Graph& graph) : g(graph), rev(graph.size()), seen(graph.size(), false), comp(graph.size(), -1) {\n        for (int u = 0; u < static_cast<int>(g.size()); ++u)\n            for (int v : g[u]) rev[v].push_back(u);          // transpose: reverse every edge\n    }\n    void dfs1(int u) {                                       // pass 1 on G: record finish order\n        seen[u] = true;\n        for (int v : g[u]) if (!seen[v]) dfs1(v);\n        order.push_back(u);\n    }\n    void dfs2(int u, int c) {                                // pass 2 on G^T: collect one SCC\n        comp[u] = c;\n        for (int v : rev[u]) if (comp[v] == -1) dfs2(v, c);\n    }\n    int run() {\n        for (int u = 0; u < static_cast<int>(g.size()); ++u) if (!seen[u]) dfs1(u);\n        int c = 0;\n        for (int i = static_cast<int>(order.size()) - 1; i >= 0; --i)   // decreasing finish time\n            if (comp[order[i]] == -1) dfs2(order[i], c++);\n        return c;\n    }\n};\n\n// ---- Tarjan: one DFS with low-links. Emits SCCs in REVERSE topological order.\nstruct Tarjan {\n    const Graph& g;\n    std::vector<int> index, low, comp, stack;\n    std::vector<bool> on_stack;\n    int timer = 0, count = 0;\n\n    explicit Tarjan(const Graph& graph)\n        : g(graph), index(graph.size(), -1), low(graph.size(), 0), comp(graph.size(), -1), on_stack(graph.size(), false) {}\n\n    void dfs(int u) {\n        index[u] = low[u] = timer++;\n        stack.push_back(u); on_stack[u] = true;\n        for (int v : g[u]) {\n            if (index[v] == -1) { dfs(v); low[u] = std::min(low[u], low[v]); }\n            else if (on_stack[v]) low[u] = std::min(low[u], index[v]);\n        }\n        if (low[u] == index[u]) {                            // u is the root of an SCC: pop it\n            int v;\n            do { v = stack.back(); stack.pop_back(); on_stack[v] = false; comp[v] = count; } while (v != u);\n            ++count;\n        }\n    }\n    int run() {\n        for (int u = 0; u < static_cast<int>(g.size()); ++u) if (index[u] == -1) dfs(u);\n        return count;\n    }\n};\n\nint main() {\n    std::vector<std::string> room{\"Entrance\", \"Hall\", \"Armory\", \"Pit\", \"Cellar\", \"Tunnel\", \"Shrine\", \"Exit\", \"Vault\"};\n    Graph g(9);\n    auto both = [&](int a, int b) { g[a].push_back(b); g[b].push_back(a); };   // corridor\n    auto drop = [&](int a, int b) { g[a].push_back(b); };                      // one-way\n    both(0, 1); both(1, 2); drop(1, 3); both(3, 4); drop(4, 5); both(5, 6); drop(6, 7); drop(2, 8);\n\n    Kosaraju k(g);\n    int nk = k.run();\n    std::printf(\"Kosaraju: %d SCCs\\n\", nk);\n    for (int c = 0; c < nk; ++c) {\n        std::printf(\"  #%d:\", c);\n        for (int v = 0; v < 9; ++v) if (k.comp[v] == c) std::printf(\" %s\", room[v].c_str());\n        std::printf(\"\\n\");\n    }\n    Tarjan t(g);\n    int nt = t.run();\n    std::printf(\"Tarjan:   %d SCCs, Exit is #%d, Entrance is #%d (reverse topological numbering)\\n\",\n                nt, t.comp[7], t.comp[0]);\n\n    // Softlock check: a component with no edge leaving it is a trap unless it holds the exit.\n    std::vector<bool> leaves(nk, false);\n    for (int u = 0; u < 9; ++u)\n        for (int v : g[u]) if (k.comp[u] != k.comp[v]) leaves[k.comp[u]] = true;\n    for (int c = 0; c < nk; ++c)\n        if (!leaves[c] && c != k.comp[7]) {\n            std::printf(\"softlock: once in\");\n            for (int v = 0; v < 9; ++v) if (k.comp[v] == c) std::printf(\" %s\", room[v].c_str());\n            std::printf(\", the player can never reach the Exit\\n\");\n        }\n}";
/*gen:out:scc*/ const OUT_scc = "Kosaraju: 5 SCCs\n  #0: Entrance Hall Armory\n  #1: Pit Cellar\n  #2: Tunnel Shrine\n  #3: Exit\n  #4: Vault\nTarjan:   5 SCCs, Exit is #1, Entrance is #4 (reverse topological numbering)\nsoftlock: once in Vault, the player can never reach the Exit";

export const lesson: Lesson = {
  id: 'dsa-dfs-applications',
  title: 'Topological Sort, Cycles and Components',
  summary: 'What DFS finish times and in-degree counts buy you: topological sort two ways, cycle detection that reports the cycle, connected components, bipartiteness, and strongly connected components with Kosaraju and Tarjan — applied to build systems, tech trees, quest graphs and softlock detection.',
  minutes: 22,
  objectives: [
    'Compute a topological order by reverse DFS finish time and by Kahn\'s algorithm, and prove the DFS method correct',
    'Detect and report cycles in directed graphs with three colors, and in undirected graphs with a parent check',
    'Label connected components and test bipartiteness by BFS 2-coloring, explaining why a conflict means an odd cycle',
    'Find strongly connected components with Kosaraju\'s two passes or Tarjan\'s low-links, and use the condensation DAG',
    'Model build dependencies, tech trees, quest prerequisites and level connectivity as graph problems',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'DAGs and topological order by DFS',
      blocks: [
        {
          type: 'p',
          text: 'A build system must compile `core` before `math`, and `math` before `physics`. A strategy game\'s tech tree must not offer Knights before Iron. Model each "X must come before Y" as an edge $X \\to Y$. A [[dm-topological-sort|topological order]] lists the vertices so that every edge points forward. One exists exactly when the graph is a [[dsa-dag|directed acyclic graph (DAG)]]: a cycle $X \\to \\cdots \\to X$ would require $X$ to come before itself.',
        },
        {
          type: 'p',
          text: 'Discrete Math built the order by repeatedly removing a vertex with no incoming edges. DFS gives a second, elegant method: run DFS over the whole graph and list the vertices in **decreasing finish time**. Watch the list grow from the right:',
        },
        ALGO_topoDfs,
        {
          type: 'theorem',
          name: 'Reverse finish order is topological',
          text: 'In a DAG, every edge $u \\to v$ satisfies $f(v) < f(u)$. So sorting by decreasing finish time puts $u$ before $v$ for every edge.',
        },
        {
          type: 'derivation',
          title: 'Proof: look at $v$\'s color when DFS examines the edge $u \\to v$',
          steps: [
            { tex: '\\text{$u$ is gray at that moment}', why: 'DFS scans $u$\'s edges between discovering and finishing $u$.' },
            { tex: '\\text{Case gray: } v \\text{ is an ancestor of } u \\implies v \\leadsto u \\to v \\text{ is a cycle}', why: 'Gray vertices are exactly those on the current recursion path. A DAG has no cycle, so this case cannot happen.' },
            { tex: '\\text{Case white: } v \\text{ becomes a descendant of } u \\implies [d(v), f(v)] \\subset [d(u), f(u)]', why: 'DFS visits $v$ from inside $u$\'s call and must finish $v$ first (parenthesis theorem). So $f(v) < f(u)$.' },
            { tex: '\\text{Case black: } v \\text{ already finished, } u \\text{ not yet} \\implies f(v) < f(u)', why: '$u$ is still gray, so it will finish later.' },
          ],
          result: 'In every possible case $f(v) < f(u)$. The same case analysis shows that a **gray** neighbor means a cycle, so one DFS both sorts and detects cycles in $O(n + m)$.',
        },
        {
          type: 'code',
          title: 'build_order.cpp',
          runnable: true,
          code: CODE_topo_dfs,
          output: OUT_topo_dfs,
          annotations: [
            { lines: '12', text: 'Three states. Two are not enough: you must distinguish "on the current path" (gray) from "done" (black).' },
            { lines: '21', text: 'A gray neighbor is a back edge: the dependencies are circular and no build order exists.' },
            { lines: '25', text: 'Append on **finish**, after every module that depends on $u$ has been appended.' },
            { lines: '28-30', text: 'Start a DFS from every unvisited vertex (the graph need not be connected), then reverse: decreasing finish time.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Reverse finish order, not discovery order',
          text: 'Discovery (preorder) order is **not** topological. In the animation, DFS discovers $A$ before $B$, yet $B \\to A$ is an edge, so $A$ must come after $B$. Only finish times carry the guarantee, because a vertex finishes only after everything reachable from it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Complete the two recipes for a topological order of a DAG.',
      template: 'DFS method: list the vertices in decreasing ___ time. Kahn\'s method: start with the vertices whose in-degree is ___, and output a vertex only when all of its ___ have been output.',
      blanks: [{ answers: ['finish'] }, { answers: ['$0$'] }, { answers: ['prerequisites'] }],
      wordBank: ['finish', 'discovery', '$0$', '$1$', 'prerequisites', 'successors'],
      hint: 'Which DFS timestamp guarantees that everything reachable from $u$ is done?',
      explanation: 'A vertex **finishes** only after every vertex reachable from it has finished, so decreasing finish time puts each vertex before everything that depends on it. Kahn\'s algorithm works from the other end: a vertex with in-degree $0$ has no unmet **prerequisites** (in-edges), so it can go next; outputting it removes its out-edges and may free up others. Discovery time does not work: DFS can discover a vertex before one of its prerequisites.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Kahn\'s algorithm: in-degrees and a queue',
      blocks: [
        {
          type: 'p',
          text: 'Kahn\'s algorithm is the "remove a minimal element" idea made efficient. Count every vertex\'s in-degree once. Vertices with in-degree $0$ are **ready**. Repeatedly output a ready vertex and delete its out-edges by decrementing its successors\' in-degrees; any successor that drops to $0$ becomes ready. Each edge is decremented once: $O(n + m)$.',
        },
        ALGO_kahn,
        {
          type: 'p',
          text: 'The two methods gave different orders for the same DAG — $B, E, A, F, C, G, D$ from Kahn and $E, F, G, B, A, C, D$ from DFS. Both are valid. A DAG usually has many topological orders, and which one you get depends on tie-breaking.',
        },
        {
          type: 'code',
          title: 'tech_tree.cpp',
          runnable: true,
          code: CODE_kahn,
          output: OUT_kahn,
          annotations: [
            { lines: '14-16', text: 'One pass over all edges computes every in-degree.' },
            { lines: '26', text: 'The **stage** of a tech: one more than its latest prerequisite. Techs in the same stage can be researched in parallel; the number of stages is the length of the longest chain, the critical path.' },
            { lines: '27', text: 'Decrement, and the moment the count hits $0$ the vertex is ready.' },
            { lines: '39', text: 'Swap the FIFO queue for a min-heap and Kahn outputs the lexicographically smallest order in $O((n + m) \\log n)$: deterministic across platforms and runs, which keeps build logs and save files stable.' },
            { lines: '67-73', text: 'With a cycle, the vertices on it never reach in-degree $0$, and neither does anything downstream. Kahn stops early, and the leftovers point a designer straight at the problem.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where you meet this',
          text: 'Build tools (Make, CMake, Unreal Build Tool) order compilation units this way and run every stage\'s jobs in parallel. Engines initialize subsystems in dependency order and shut them down in reverse. Job systems schedule a frame\'s tasks (animation before physics before rendering) as a DAG. Spreadsheets recompute cells in topological order of their formulas, and report a "circular reference" when Kahn gets stuck. Quest and tech-tree editors validate designer data the same way.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Military connection: scheduling an operation',
          text: 'Planning a deployment is a dependency graph of tasks (secure the airfield before landing supplies, clear the route before moving the convoy). A topological order is a feasible sequence; the stage computation finds which tasks can run simultaneously; and the longest chain of durations is the critical path that sets the minimum time for the whole operation (the critical path method).',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'A DAG has edges $D \\to A$, $D \\to B$, $C \\to B$, $B \\to E$, $A \\to E$, $F \\to C$. Run Kahn\'s algorithm with a **min-heap** (always take the alphabetically smallest ready vertex). Put the output in order.',
      lines: ['$D$', '$A$', '$F$', '$C$', '$B$', '$E$'],
      hint: 'In-degrees: $A{:}1, B{:}2, C{:}1, D{:}0, E{:}2, F{:}0$. Ready at the start: $D$ and $F$.',
      explanation: 'Ready $\\{D, F\\}$: take $D$; $A$ drops to $0$, $B$ to $1$. Ready $\\{A, F\\}$: take $A$; $E$ drops to $1$. Ready $\\{F\\}$: take $F$; $C$ drops to $0$. Take $C$; $B$ drops to $0$. Take $B$; $E$ drops to $0$. Take $E$. Output: $D, A, F, C, B, E$, the lexicographically smallest of all valid topological orders. A FIFO queue would have produced $D, F, A, C, B, E$ instead: still valid, different tie-breaking.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Build tasks $A$ to $H$ have dependencies $A \\to C$, $B \\to C$, $B \\to D$, $C \\to E$, $D \\to E$, $E \\to F$, $D \\to G$, $F \\to H$, $G \\to H$ (an edge means "must finish before"). With unlimited parallel workers and every task taking one stage, what is the minimum number of stages?',
      answer: '5',
      hint: 'Use Kahn\'s stage rule: stage$(v) = 1 + \\max$ stage of its prerequisites, with sources at stage $1$.',
      explanation: 'Stage 1: $A, B$ (no prerequisites). Stage 2: $C$ (after $A, B$) and $D$ (after $B$). Stage 3: $E$ (after $C, D$) and $G$ (after $D$). Stage 4: $F$ (after $E$). Stage 5: $H$ (after $F$ and $G$). So **5** stages: the longest chain, e.g. $B \\to C \\to E \\to F \\to H$, has 5 tasks, and no amount of parallelism can shorten a chain of dependencies.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Cycle detection, directed and undirected',
      blocks: [
        {
          type: 'p',
          text: 'Detecting that a cycle exists is not enough for a designer staring at 400 quests; you want to **print it**. In a directed graph, DFS with three colors finds a back edge $u \\to v$ to a gray $v$. Because gray vertices form the current recursion path, following parent pointers from $u$ back up to $v$ spells out the cycle.',
        },
        {
          type: 'code',
          title: 'quest_cycles.cpp',
          runnable: true,
          code: CODE_cycle_find,
          output: OUT_cycle_find,
          annotations: [
            { lines: '18-22', text: 'Back edge found: walk parents from $u$ up to $v$, then reverse, giving the cycle in edge direction.' },
            { lines: '24-27', text: 'Recurse only into white vertices. Black ones are finished and provably not on any cycle through the current path.' },
            { lines: '29', text: 'Black = "fully explored, no cycle reachable from here that passes through the current path". This is what makes the check $O(n + m)$ rather than exponential.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Why "already visited" is not enough in a directed graph',
          steps: [
            { tex: '\\text{edges } A \\to B,\\ A \\to C,\\ C \\to B', why: 'A small DAG: two routes to $B$, but no cycle.' },
            { tex: '\\text{DFS: } A \\to B \\text{ (}B\\text{ finishes)}, \\text{ then } A \\to C', why: 'Neighbors in alphabetical order. $B$ has no out-edges and turns black.' },
            { tex: 'C \\to B: B \\text{ is visited, but black}', why: 'A two-color check ("visited?") would shout "cycle!" here.' },
            { tex: 'B \\text{ is not on the path } A \\to C \\implies \\text{cross edge, no cycle}', why: 'Only an edge back to a **gray** vertex closes a loop, because only gray vertices can reach the current vertex.' },
          ],
          result: 'Directed cycle detection needs three states. A diamond of dependencies is perfectly legal.',
        },
        {
          type: 'heading',
          text: 'Undirected graphs',
        },
        {
          type: 'p',
          text: 'In an undirected graph every edge is stored both ways, so DFS from $u$ to $v$ will see the edge $v - u$ again from the other side. The rule becomes: a cycle exists iff DFS meets an already-visited vertex **other than the parent it came from**. (With parallel edges, compare edge ids instead of vertex ids, since two edges between the same pair do form a cycle.) A second method needs no DFS at all: add edges one by one to a union–find structure, and an edge whose endpoints are already connected closes a cycle — the next lesson.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Deadlock detection',
          text: 'Operating systems and job systems detect deadlock with the same test. Build a **wait-for graph** with an edge $T_1 \\to T_2$ when thread $T_1$ waits for a lock that $T_2$ holds. A directed cycle means every thread on it is waiting for the next, forever. Debug builds of engines run this check to turn a silent hang into a report naming the threads and locks involved.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'This function is meant to detect a cycle in a **directed** graph (call it on every unvisited vertex). Which line is wrong?',
      lines: [
        '`bool has_cycle(int u) {`',
        '`    visited[u] = true;`',
        '`    on_stack[u] = true;`',
        '`    for (int v : adj[u]) {`',
        '`        if (visited[v]) return true;`',
        '`        if (!visited[v] && has_cycle(v)) return true;`',
        '`    }`',
        '`    on_stack[u] = false;`',
        '`    return false;`',
        '`}`',
      ],
      errorLines: [5],
      hint: 'Think of the diamond $A \\to B$, $A \\to C$, $C \\to B$.',
      explanation: 'Line 5 reports a cycle whenever the neighbor was **ever** visited. In the diamond $A \\to B, A \\to C, C \\to B$, DFS finishes $B$, then reaches it again from $C$ and wrongly reports a cycle. Only a neighbor that is still on the recursion stack (gray) closes a cycle, so line 5 must be `if (on_stack[v]) return true;`. The function already maintains `on_stack` correctly (lines 3 and 8); it just tests the wrong array.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Connected components and bipartite graphs',
      blocks: [
        {
          type: 'p',
          text: 'In an undirected graph the [[dm-connected-graph|connected components]] are found by the loop you have already seen in flood fill: scan the vertices, and from each one not yet labeled start a BFS or DFS that stamps its whole component with a new label. Every vertex and edge is touched once, so all components cost $O(n + m)$ together. After that, "are $u$ and $v$ connected?" is an $O(1)$ label comparison.',
        },
        {
          type: 'p',
          text: 'A graph is [[dm-bipartite-graph|bipartite]] if its vertices split into two sides with every edge crossing between them — in Discrete Math you proved this happens exactly when there is no odd cycle. BFS turns the theorem into an algorithm: color the start vertex $0$, give each newly discovered vertex the opposite color of its parent (that is, color by distance parity), and check every edge. One edge with equal colors at both ends means no 2-coloring exists.',
        },
        {
          type: 'code',
          title: 'factions.cpp',
          runnable: true,
          code: CODE_components_bipartite,
          output: OUT_components_bipartite,
          annotations: [
            { lines: '18-29', text: 'One BFS per unlabeled vertex; `count` becomes that component\'s label.' },
            { lines: '38', text: 'A disconnected graph is bipartite iff each component is, so the coloring restarts in every component.' },
            { lines: '45-46', text: 'Discovery gives the opposite side; an already-colored neighbor on the **same** side is a conflict.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a conflict proves an odd cycle',
          text: 'BFS colors by distance parity: side$(x) = d(x) \\bmod 2$. A conflicting edge $v - w$ has $d(v) \\equiv d(w) \\pmod 2$. Follow the BFS tree from $v$ and from $w$ up to their deepest common ancestor $a$; the two tree paths have lengths $d(v) - d(a)$ and $d(w) - d(a)$, whose sum has the same parity as $d(v) + d(w)$, which is even. Adding the edge $v - w$ closes a cycle of length (even) $+ 1$: **odd**. So the algorithm never rejects a bipartite graph, and when it accepts, the coloring it built is a valid split.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bipartite checks in games',
          text: 'Splitting players into two teams so that no two who reported each other are on the same team; checking that a board or map can be checkerboard-colored (hex grids cannot: three hexes meet at each corner, forming triangles); verifying that a dialogue or matching structure really has two sides before running a matching algorithm.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'During BFS 2-coloring of an undirected graph, you find an edge $v - w$ with `side[v] == side[w]`. What can you conclude?',
      options: [
        { text: 'The graph contains a cycle of odd length, so it is not bipartite under any coloring', correct: true, why: 'Right. Equal colors mean equal distance parity, and the two BFS tree paths plus this edge form an odd cycle. An odd cycle cannot be 2-colored, whatever you try.' },
        { text: 'BFS started from an unlucky vertex; restarting from another vertex may succeed', why: 'Within a component, BFS coloring is forced up to swapping the two colors. If it fails from one start, the odd cycle is still there from any other start.' },
        { text: 'The graph is disconnected', why: 'Disconnection is handled by restarting BFS in each component and never causes a conflict by itself.' },
        { text: 'The graph contains a cycle of even length', why: 'Even cycles are perfectly 2-colorable (a square is bipartite). The conflict comes from odd parity.' },
      ],
      explanation: 'BFS coloring makes no real choices: in each component, the color of every vertex is fixed by its distance parity from the start. So a conflict is a certificate, not bad luck: the two tree paths to the common ancestor plus the conflicting edge form an odd cycle, and by the theorem from Discrete Math no graph with an odd cycle is bipartite.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Strongly connected components',
      blocks: [
        {
          type: 'p',
          text: 'In a directed graph, "connected" splits in two. Vertices $u$ and $v$ are **strongly connected** if each can reach the other. That relation is an equivalence relation, and its classes are the [[dsa-scc|strongly connected components]] (SCCs). Contract each SCC to a single vertex and you get the **condensation**, which is always a DAG: if two components could reach each other, they would be one component.',
        },
        {
          type: 'p',
          text: '**Kosaraju\'s algorithm** finds all SCCs with two DFS passes. Pass 1 runs DFS on $G$ and records the finish order. Pass 2 runs DFS on the **transpose** $G^T$ (all edges reversed), starting each new search from the unvisited vertex with the latest finish time. Each search in pass 2 collects exactly one SCC.',
        },
        ALGO_kosaraju1,
        ALGO_kosaraju2,
        {
          type: 'callout',
          variant: 'why',
          title: 'Why pass 2 never leaks into another component',
          text: 'Key lemma: if there is an edge from component $C$ to component $C\'$, then the latest finish time in $C$ is larger than the latest in $C\'$. (If DFS entered $C$ first, it reached all of $C\'$ before finishing the first vertex of $C$; if it entered $C\'$ first, it could not reach $C$ at all and finished all of $C\'$ first.) So the vertex with the latest finish time lies in a **source** component of the condensation. In $G^T$ every edge is reversed, so that source component has no edges **leaving** it toward unvisited components: the search from it stays inside it. Remove it and repeat — the next latest finisher is in a source of what remains.',
        },
        {
          type: 'code',
          title: 'level_sccs.cpp',
          runnable: true,
          code: CODE_scc,
          output: OUT_scc,
          annotations: [
            { lines: '16-19', text: 'Build $G^T$ once: every edge $u \\to v$ becomes $v \\to u$.' },
            { lines: '32-33', text: 'Pass 2 in decreasing finish order; each `dfs2` call labels one SCC.' },
            { lines: '48-60', text: 'Tarjan\'s algorithm: one DFS. `low[u]` is the smallest index reachable from $u$\'s subtree through at most one back edge to a vertex still on the stack. When `low[u] == index[u]`, nothing below $u$ escapes above it, so $u$ roots an SCC: pop it off.' },
            { lines: '87-96', text: 'Softlock detection: a sink component of the condensation (no edge leaves it) that does not contain the exit traps the player forever.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'SCCs in level design',
          text: 'Treat rooms as vertices and passable connections as edges, with one-way drops, ledges and doors that lock behind you as single directed edges. Every room in an SCC can reach every other, so the condensation is the level\'s "point of no return" structure. A sink component without an exit or a save point is a softlock bug, found automatically before a tester ever falls into the Vault. The same analysis applies to state machines in dialogue or AI: a sink SCC without a terminal state is a loop the character can never leave.',
        },
        {
          type: 'deepdive',
          title: 'Kosaraju or Tarjan?',
          blocks: [
            {
              type: 'p',
              text: 'Both run in $O(n + m)$. Kosaraju is easier to remember and to prove, but needs the transpose (double the edge memory) and two passes. Tarjan does one pass with no transpose and outputs SCCs in reverse topological order of the condensation, which is often what you want next (for example, in 2-SAT solving, where SCCs of the implication graph decide satisfiability). In production, either should be written iteratively for large graphs, for the same stack-depth reasons as plain DFS.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A directed graph on vertices $1$ to $9$ has edges $1 \\to 2$, $2 \\to 3$, $3 \\to 1$, $3 \\to 4$, $4 \\to 5$, $5 \\to 4$, $5 \\to 6$, $6 \\to 7$, $7 \\to 8$, $8 \\to 6$, $2 \\to 8$, $9 \\to 1$. How many strongly connected components does it have?',
      answer: '4',
      hint: 'Find the cycles first, then check whether any two cycles can reach each other both ways.',
      explanation: 'The cycles $1 \\to 2 \\to 3 \\to 1$, $4 \\to 5 \\to 4$ and $6 \\to 7 \\to 8 \\to 6$ each form an SCC. Edges between them only go "forward": $\\{1,2,3\\} \\to \\{4,5\\}$ (via $3 \\to 4$), $\\{4,5\\} \\to \\{6,7,8\\}$ (via $5 \\to 6$), $\\{1,2,3\\} \\to \\{6,7,8\\}$ (via $2 \\to 8$), and nothing comes back, so they stay separate. Vertex $9$ reaches $1$ but nothing reaches $9$: it is an SCC by itself. Total: **4** SCCs, and the condensation is the DAG $\\{9\\} \\to \\{1,2,3\\} \\to \\{4,5\\} \\to \\{6,7,8\\}$ plus the shortcut $\\{1,2,3\\} \\to \\{6,7,8\\}$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'In the second pass of Kosaraju\'s algorithm, it does not matter in which order you pick start vertices, as long as the DFS runs on the transpose $G^T$.',
      answer: false,
      explanation: 'False. The order is the whole trick. Start pass 2 at a vertex in a **sink** component of $G$\'s condensation (say the Exit in the level graph) and in $G^T$ its edges point backward to everything upstream: the search would swallow several components at once. Starting from the latest finisher guarantees you begin in a source component of $G$, which in $G^T$ has no way out to unvisited components. (Symmetrically, you may run pass 1 on $G^T$ and pass 2 on $G$, again taking start vertices in decreasing finish order.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Choosing the right tool',
      blocks: [
        {
          type: 'table',
          headers: ['Question', 'Algorithm', 'Cost'],
          rows: [
            ['In what order can these tasks run?', 'Kahn (or reverse DFS finish order)', '$O(n + m)$'],
            ['Same, but deterministic / smallest first', 'Kahn with a min-heap', '$O((n + m) \\log n)$'],
            ['How many parallel stages? Critical path?', 'Kahn with stage = $1 + \\max$ over prerequisites (longest path in a DAG)', '$O(n + m)$'],
            ['Is there a circular dependency? Which one?', '3-color DFS, report the back edge\'s cycle', '$O(n + m)$'],
            ['Which pieces is this undirected network in?', 'BFS/DFS component labeling (or union–find)', '$O(n + m)$'],
            ['Can it be split into two sides?', 'BFS 2-coloring', '$O(n + m)$'],
            ['Which groups can all reach each other? Where are the traps?', 'Kosaraju or Tarjan, then the condensation DAG', '$O(n + m)$'],
          ],
          caption: 'Every algorithm in this lesson is a linear-time DFS or BFS with a little bookkeeping.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Interview recognition',
          text: '"Course schedule", "alien dictionary" (derive letter order from sorted words), "build order", "parallel courses" (minimum semesters = number of stages), "sequence reconstruction" → topological sort, usually Kahn. "Is the graph a valid tree?" → $m = n - 1$ and connected (or no cycle). "Possible bipartition", "is graph bipartite" → 2-coloring. "Critical connections" (bridges) → DFS with low-links, a cousin of Tarjan.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Kahn or DFS for topological sort?',
          text: 'Kahn is iterative (no stack-depth risk), reports the leftover vertices on a cycle, computes stages for free, and controls tie-breaking with the queue type. DFS-based sorting comes for free when you are already doing DFS (for SCCs or cycle reporting) and works in the "reverse" direction naturally. In engine and tools code, Kahn is a common default.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'You contract every strongly connected component of a directed graph to a single vertex (keeping one edge between components whenever any edge joins them). Which statement is **always** true of the result?',
      options: [
        { text: 'It is a directed acyclic graph', correct: true, why: 'Right. A cycle through two components would let each reach the other, so they would have been one component.' },
        { text: 'It is a tree', why: 'The condensation can have several sources and diamonds (component $X$ reaching $Z$ along two different routes), so it need not be a tree.' },
        { text: 'It has exactly one source component', why: 'There can be many sources, e.g. a graph with no edges at all has $n$ singleton components, all sources.' },
        { text: 'Each component, before contraction, is a single directed cycle', why: 'An SCC can be any strongly connected subgraph: a cycle, a complete digraph, two cycles sharing a vertex, or a single vertex.' },
      ],
      explanation: 'The condensation is always a DAG, which is why SCC algorithms are so useful: they turn any directed graph into a DAG of "blobs" where topological sort, longest-path and reachability reasoning apply again. Kosaraju even produces the components in topological order of that DAG.',
    },
  ],
  takeaways: [
    'A topological order exists iff the graph is a DAG. Reverse DFS finish order is one (proof: every edge $u \\to v$ has $f(v) < f(u)$ in a DAG); Kahn\'s in-degree queue is another. Both are $O(n + m)$.',
    'Kahn reports cycles (fewer than $n$ vertices output), computes parallel stages and the critical path, and gives the lexicographically smallest order with a min-heap.',
    'Directed cycle detection needs three colors: only an edge to a **gray** vertex closes a cycle; parent pointers then print it. Undirected graphs: a visited neighbor that is not the parent.',
    'Component labeling and BFS 2-coloring are both one linear pass; a 2-coloring conflict certifies an odd cycle.',
    'SCCs partition a digraph into mutually reachable groups; the condensation is a DAG. Kosaraju uses two passes (finish order on $G$, then searches on $G^T$); Tarjan uses one pass with low-links.',
    'Applications: build and init order, tech trees and quest prerequisites, circular-reference and deadlock detection, and softlock detection via sink components of a level graph.',
  ],
  reading: [
    { title: 'Jeff Erickson, Algorithms — Chapter 6 (Depth-First Search)', url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/', source: 'book', note: 'Topological sort, the proof via finish times, and strong components with both Kosaraju–Sharir and Tarjan.' },
    { title: 'Sedgewick & Wayne, Algorithms 4th ed. — Section 4.2 Directed Graphs', url: 'https://algs4.cs.princeton.edu/42digraph/', source: 'book', note: 'Directed cycle detection, depth-first orders, topological sort and Kosaraju–Sharir, with clean Java implementations.' },
    { title: 'Topological sorting (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Topological_sorting', source: 'wikipedia', note: 'Kahn\'s algorithm, the DFS algorithm, uniqueness conditions and applications such as scheduling.' },
    { title: 'Tarjan\'s strongly connected components algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm', source: 'wikipedia', note: 'Pseudocode and a walkthrough of index and low-link values.' },
  ],
};
