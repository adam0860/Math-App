import type { AlgoBlock, Lesson } from '../../types';

// Generated blocks: frames come from scratch scripts that run the algorithms; code is compiled and run.
/*gen:algo:ufUnion*/ const ALGO_ufUnion: AlgoBlock = {"type": "algo", "view": "graph", "nodes": [{"id": "v0_0", "x": 26.2, "y": 40, "label": "0"}, {"id": "v1_1", "x": 78.8, "y": 40, "label": "1"}, {"id": "v2_2", "x": 131.2, "y": 40, "label": "2"}, {"id": "v3_3", "x": 183.8, "y": 40, "label": "3"}, {"id": "v4_4", "x": 236.2, "y": 40, "label": "4"}, {"id": "v5_5", "x": 288.8, "y": 40, "label": "5"}, {"id": "v6_6", "x": 341.2, "y": 40, "label": "6"}, {"id": "v7_7", "x": 393.8, "y": 40, "label": "7"}, {"id": "v0_8", "x": 30.0, "y": 40, "label": "0"}, {"id": "v1_9", "x": 30.0, "y": 102, "label": "1"}, {"id": "v2_10", "x": 90.0, "y": 40, "label": "2"}, {"id": "v3_11", "x": 150.0, "y": 40, "label": "3"}, {"id": "v4_12", "x": 210.0, "y": 40, "label": "4"}, {"id": "v5_13", "x": 270.0, "y": 40, "label": "5"}, {"id": "v6_14", "x": 330.0, "y": 40, "label": "6"}, {"id": "v7_15", "x": 390.0, "y": 40, "label": "7"}, {"id": "v0_16", "x": 35.0, "y": 40, "label": "0"}, {"id": "v1_17", "x": 35.0, "y": 102, "label": "1"}, {"id": "v2_18", "x": 105.0, "y": 40, "label": "2"}, {"id": "v3_19", "x": 105.0, "y": 102, "label": "3"}, {"id": "v4_20", "x": 175.0, "y": 40, "label": "4"}, {"id": "v5_21", "x": 245.0, "y": 40, "label": "5"}, {"id": "v6_22", "x": 315.0, "y": 40, "label": "6"}, {"id": "v7_23", "x": 385.0, "y": 40, "label": "7"}, {"id": "v0_24", "x": 42.0, "y": 40, "label": "0"}, {"id": "v1_25", "x": 42.0, "y": 102, "label": "1"}, {"id": "v2_26", "x": 126.0, "y": 40, "label": "2"}, {"id": "v3_27", "x": 126.0, "y": 102, "label": "3"}, {"id": "v5_28", "x": 210.0, "y": 102, "label": "5"}, {"id": "v6_29", "x": 294.0, "y": 40, "label": "6"}, {"id": "v7_30", "x": 378.0, "y": 40, "label": "7"}, {"id": "v0_31", "x": 52.5, "y": 40, "label": "0"}, {"id": "v1_32", "x": 52.5, "y": 102, "label": "1"}, {"id": "v2_33", "x": 157.5, "y": 40, "label": "2"}, {"id": "v3_34", "x": 157.5, "y": 102, "label": "3"}, {"id": "v4_35", "x": 262.5, "y": 40, "label": "4"}, {"id": "v5_36", "x": 262.5, "y": 102, "label": "5"}, {"id": "v6_37", "x": 367.5, "y": 40, "label": "6"}, {"id": "v7_38", "x": 367.5, "y": 102, "label": "7"}, {"id": "v0_39", "x": 105.0, "y": 40, "label": "0"}, {"id": "v2_40", "x": 157.5, "y": 102, "label": "2"}, {"id": "v3_41", "x": 157.5, "y": 164, "label": "3"}, {"id": "v4_42", "x": 315.0, "y": 40, "label": "4"}, {"id": "v6_43", "x": 367.5, "y": 102, "label": "6"}, {"id": "v7_44", "x": 367.5, "y": 164, "label": "7"}, {"id": "v0_45", "x": 210.0, "y": 40, "label": "0"}, {"id": "v4_46", "x": 315.0, "y": 102, "label": "4"}, {"id": "v5_47", "x": 262.5, "y": 164, "label": "5"}, {"id": "v6_48", "x": 367.5, "y": 164, "label": "6"}, {"id": "v7_49", "x": 367.5, "y": 226, "label": "7"}], "edges": [{"from": "v1_17", "to": "v0_16", "directed": true}, {"from": "v1_25", "to": "v0_24", "directed": true}, {"from": "v1_32", "to": "v0_31", "directed": true}, {"from": "v1_32", "to": "v0_39", "directed": true}, {"from": "v1_32", "to": "v0_45", "directed": true}, {"from": "v1_9", "to": "v0_8", "directed": true}, {"from": "v2_40", "to": "v0_39", "directed": true}, {"from": "v2_40", "to": "v0_45", "directed": true}, {"from": "v3_19", "to": "v2_18", "directed": true}, {"from": "v3_27", "to": "v2_26", "directed": true}, {"from": "v3_34", "to": "v2_33", "directed": true}, {"from": "v3_41", "to": "v2_40", "directed": true}, {"from": "v4_46", "to": "v0_45", "directed": true}, {"from": "v5_28", "to": "v4_12", "directed": true}, {"from": "v5_36", "to": "v4_35", "directed": true}, {"from": "v5_36", "to": "v4_42", "directed": true}, {"from": "v5_47", "to": "v4_46", "directed": true}, {"from": "v6_43", "to": "v4_42", "directed": true}, {"from": "v6_48", "to": "v4_46", "directed": true}, {"from": "v7_38", "to": "v6_37", "directed": true}, {"from": "v7_44", "to": "v6_43", "directed": true}, {"from": "v7_49", "to": "v6_48", "directed": true}], "width": 420, "height": 270, "frames": [{"note": "Eight singleton sets: every element is its own root (`parent[x] == x`).", "lines": [2], "vars": [["parent[]", "0 1 2 3 4 5 6 7"], ["root (size)", "0 (1), 1 (1), 2 (1), 3 (1), 4 (1), 5 (1), 6 (1), 7 (1)"]], "hidden": ["v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v1_32", "v2_33", "v3_34", "v4_35", "v5_36", "v6_37", "v7_38", "v0_39", "v2_40", "v3_41", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(0, 1)`: link root $1$ below root $0$. Equal sizes, so either way works; the second root goes under the first.", "nodeColors": [{"id": "v0_8", "color": "green"}, {"id": "v1_9", "color": "orange"}], "edgeColors": [{"from": "v1_9", "to": "v0_8", "color": "orange"}], "lines": [8, 9, 10], "vars": [["parent[]", "0 0 2 3 4 5 6 7"], ["root (size)", "0 (2), 2 (1), 3 (1), 4 (1), 5 (1), 6 (1), 7 (1)"], ["sets", "7"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v1_32", "v2_33", "v3_34", "v4_35", "v5_36", "v6_37", "v7_38", "v0_39", "v2_40", "v3_41", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(2, 3)`: link root $3$ below root $2$. Equal sizes, so either way works; the second root goes under the first.", "nodeColors": [{"id": "v2_18", "color": "green"}, {"id": "v3_19", "color": "orange"}], "edgeColors": [{"from": "v3_19", "to": "v2_18", "color": "orange"}], "lines": [8, 9, 10], "vars": [["parent[]", "0 0 2 2 4 5 6 7"], ["root (size)", "0 (2), 2 (2), 4 (1), 5 (1), 6 (1), 7 (1)"], ["sets", "6"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v1_32", "v2_33", "v3_34", "v4_35", "v5_36", "v6_37", "v7_38", "v0_39", "v2_40", "v3_41", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(4, 5)`: link root $5$ below root $4$. Equal sizes, so either way works; the second root goes under the first.", "nodeColors": [{"id": "v4_12", "color": "green"}, {"id": "v5_28", "color": "orange"}], "edgeColors": [{"from": "v5_28", "to": "v4_12", "color": "orange"}], "lines": [8, 9, 10], "vars": [["parent[]", "0 0 2 2 4 4 6 7"], ["root (size)", "0 (2), 2 (2), 4 (2), 6 (1), 7 (1)"], ["sets", "5"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_31", "v1_32", "v2_33", "v3_34", "v4_35", "v5_36", "v6_37", "v7_38", "v0_39", "v2_40", "v3_41", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(6, 7)`: link root $7$ below root $6$. Equal sizes, so either way works; the second root goes under the first.", "nodeColors": [{"id": "v6_37", "color": "green"}, {"id": "v7_38", "color": "orange"}], "edgeColors": [{"from": "v7_38", "to": "v6_37", "color": "orange"}], "lines": [8, 9, 10], "vars": [["parent[]", "0 0 2 2 4 4 6 6"], ["root (size)", "0 (2), 2 (2), 4 (2), 6 (2)"], ["sets", "4"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_39", "v2_40", "v3_41", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(1, 3)`: climb to the roots: `find(1) = 0`, `find(3) = 2`.", "nodeColors": [{"id": "v1_32", "color": "blue"}, {"id": "v0_31", "color": "orange"}, {"id": "v3_34", "color": "blue"}, {"id": "v2_33", "color": "orange"}], "edgeColors": [{"from": "v1_32", "to": "v0_31", "color": "blue"}, {"from": "v3_34", "to": "v2_33", "color": "blue"}], "lines": [6], "vars": [["parent[]", "0 0 2 2 4 4 6 6"], ["root (size)", "0 (2), 2 (2), 4 (2), 6 (2)"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_39", "v2_40", "v3_41", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(1, 3)`: link root $2$ below root $0$. Equal sizes, so either way works; the second root goes under the first.", "nodeColors": [{"id": "v0_39", "color": "green"}, {"id": "v2_40", "color": "orange"}], "edgeColors": [{"from": "v2_40", "to": "v0_39", "color": "orange"}], "lines": [8, 9, 10], "vars": [["parent[]", "0 0 0 2 4 4 6 6"], ["root (size)", "0 (4), 4 (2), 6 (2)"], ["sets", "3"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v2_33", "v3_34", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(5, 7)`: climb to the roots: `find(5) = 4`, `find(7) = 6`.", "nodeColors": [{"id": "v5_36", "color": "blue"}, {"id": "v4_35", "color": "orange"}, {"id": "v7_38", "color": "blue"}, {"id": "v6_37", "color": "orange"}], "edgeColors": [{"from": "v5_36", "to": "v4_35", "color": "blue"}, {"from": "v7_38", "to": "v6_37", "color": "blue"}], "lines": [6], "vars": [["parent[]", "0 0 0 2 4 4 6 6"], ["root (size)", "0 (4), 4 (2), 6 (2)"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v2_33", "v3_34", "v4_42", "v6_43", "v7_44", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(5, 7)`: link root $6$ below root $4$. Equal sizes, so either way works; the second root goes under the first.", "nodeColors": [{"id": "v4_42", "color": "green"}, {"id": "v6_43", "color": "orange"}], "edgeColors": [{"from": "v6_43", "to": "v4_42", "color": "orange"}], "lines": [8, 9, 10], "vars": [["parent[]", "0 0 0 2 4 4 4 6"], ["root (size)", "0 (4), 4 (4)"], ["sets", "2"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v2_33", "v3_34", "v4_35", "v6_37", "v7_38", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(3, 7)`: climb to the roots: `find(3) = 0`, `find(7) = 4`.", "nodeColors": [{"id": "v3_41", "color": "blue"}, {"id": "v2_40", "color": "blue"}, {"id": "v0_39", "color": "orange"}, {"id": "v7_44", "color": "blue"}, {"id": "v6_43", "color": "blue"}, {"id": "v4_42", "color": "orange"}], "edgeColors": [{"from": "v3_41", "to": "v2_40", "color": "blue"}, {"from": "v2_40", "to": "v0_39", "color": "blue"}, {"from": "v7_44", "to": "v6_43", "color": "blue"}, {"from": "v6_43", "to": "v4_42", "color": "blue"}], "lines": [6], "vars": [["parent[]", "0 0 0 2 4 4 4 6"], ["root (size)", "0 (4), 4 (4)"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v2_33", "v3_34", "v4_35", "v6_37", "v7_38", "v0_45", "v4_46", "v5_47", "v6_48", "v7_49"]}, {"note": "`unite(3, 7)`: link root $4$ below root $0$. Equal sizes, so either way works; the second root goes under the first.", "nodeColors": [{"id": "v0_45", "color": "green"}, {"id": "v4_46", "color": "orange"}], "edgeColors": [{"from": "v4_46", "to": "v0_45", "color": "orange"}], "lines": [8, 9, 10], "vars": [["parent[]", "0 0 0 2 0 4 4 6"], ["root (size)", "0 (8)"], ["sets", "1"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v2_33", "v3_34", "v4_35", "v5_36", "v6_37", "v7_38", "v0_39", "v4_42", "v6_43", "v7_44"]}, {"note": "One set. The tallest path, $7 \\to 6 \\to 4 \\to 0$, has $3 = \\log_2 8$ links: union by size never does worse.", "vars": [["parent[]", "0 0 0 2 0 4 4 6"], ["root (size)", "0 (8)"]], "hidden": ["v0_0", "v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v0_8", "v1_9", "v2_10", "v3_11", "v4_12", "v5_13", "v6_14", "v7_15", "v0_16", "v1_17", "v2_18", "v3_19", "v4_20", "v5_21", "v6_22", "v7_23", "v0_24", "v1_25", "v2_26", "v3_27", "v5_28", "v6_29", "v7_30", "v0_31", "v2_33", "v3_34", "v4_35", "v5_36", "v6_37", "v7_38", "v0_39", "v4_42", "v6_43", "v7_44"]}], "code": "int find(int x) {\n    while (parent[x] != x) x = parent[x];\n    return x;\n}\nvoid unite(int a, int b) {\n    a = find(a); b = find(b);\n    if (a == b) return;\n    if (size[a] < size[b]) std::swap(a, b);\n    parent[b] = a;            // smaller under larger\n    size[a] += size[b];\n}", "interval": 1300, "caption": "Union by size, drawn as a forest of parent pointers (arrows point to the parent). The array `parent[]` below the picture is the real data structure."};
/*gen:algo:ufCompress*/ const ALGO_ufCompress: AlgoBlock = {"type": "algo", "view": "graph", "nodes": [{"id": "v0_0", "x": 210.0, "y": 40, "label": "0"}, {"id": "v1_1", "x": 140.0, "y": 80, "label": "1"}, {"id": "v2_2", "x": 140.0, "y": 120, "label": "2"}, {"id": "v3_3", "x": 70.0, "y": 160, "label": "3"}, {"id": "v4_4", "x": 70.0, "y": 200, "label": "4"}, {"id": "v5_5", "x": 70.0, "y": 240, "label": "5"}, {"id": "v6_6", "x": 210.0, "y": 160, "label": "6"}, {"id": "v7_7", "x": 350.0, "y": 80, "label": "7"}, {"id": "v1_8", "x": 105.0, "y": 80, "label": "1"}, {"id": "v2_9", "x": 105.0, "y": 120, "label": "2"}, {"id": "v3_10", "x": 52.5, "y": 160, "label": "3"}, {"id": "v4_11", "x": 52.5, "y": 200, "label": "4"}, {"id": "v5_12", "x": 262.5, "y": 80, "label": "5"}, {"id": "v6_13", "x": 157.5, "y": 160, "label": "6"}, {"id": "v7_14", "x": 367.5, "y": 80, "label": "7"}, {"id": "v1_15", "x": 84.0, "y": 80, "label": "1"}, {"id": "v2_16", "x": 84.0, "y": 120, "label": "2"}, {"id": "v3_17", "x": 42.0, "y": 160, "label": "3"}, {"id": "v4_18", "x": 210.0, "y": 80, "label": "4"}, {"id": "v5_19", "x": 294.0, "y": 80, "label": "5"}, {"id": "v6_20", "x": 126.0, "y": 160, "label": "6"}, {"id": "v7_21", "x": 378.0, "y": 80, "label": "7"}, {"id": "v1_22", "x": 42.0, "y": 80, "label": "1"}, {"id": "v2_23", "x": 42.0, "y": 120, "label": "2"}, {"id": "v3_24", "x": 126.0, "y": 80, "label": "3"}, {"id": "v6_25", "x": 42.0, "y": 160, "label": "6"}, {"id": "v1_26", "x": 35.0, "y": 80, "label": "1"}, {"id": "v2_27", "x": 105.0, "y": 80, "label": "2"}, {"id": "v3_28", "x": 175.0, "y": 80, "label": "3"}, {"id": "v4_29", "x": 245.0, "y": 80, "label": "4"}, {"id": "v5_30", "x": 315.0, "y": 80, "label": "5"}, {"id": "v6_31", "x": 105.0, "y": 120, "label": "6"}, {"id": "v7_32", "x": 385.0, "y": 80, "label": "7"}], "edges": [{"from": "v1_1", "to": "v0_0", "directed": true}, {"from": "v1_15", "to": "v0_0", "directed": true}, {"from": "v1_22", "to": "v0_0", "directed": true}, {"from": "v1_26", "to": "v0_0", "directed": true}, {"from": "v1_8", "to": "v0_0", "directed": true}, {"from": "v2_16", "to": "v1_15", "directed": true}, {"from": "v2_2", "to": "v1_1", "directed": true}, {"from": "v2_23", "to": "v1_22", "directed": true}, {"from": "v2_27", "to": "v0_0", "directed": true}, {"from": "v2_9", "to": "v1_8", "directed": true}, {"from": "v3_10", "to": "v2_9", "directed": true}, {"from": "v3_17", "to": "v2_16", "directed": true}, {"from": "v3_24", "to": "v0_0", "directed": true}, {"from": "v3_28", "to": "v0_0", "directed": true}, {"from": "v3_3", "to": "v2_2", "directed": true}, {"from": "v4_11", "to": "v3_10", "directed": true}, {"from": "v4_18", "to": "v0_0", "directed": true}, {"from": "v4_29", "to": "v0_0", "directed": true}, {"from": "v4_4", "to": "v3_3", "directed": true}, {"from": "v5_12", "to": "v0_0", "directed": true}, {"from": "v5_19", "to": "v0_0", "directed": true}, {"from": "v5_30", "to": "v0_0", "directed": true}, {"from": "v5_5", "to": "v4_4", "directed": true}, {"from": "v6_13", "to": "v2_9", "directed": true}, {"from": "v6_20", "to": "v2_16", "directed": true}, {"from": "v6_25", "to": "v2_23", "directed": true}, {"from": "v6_31", "to": "v2_27", "directed": true}, {"from": "v6_6", "to": "v2_2", "directed": true}, {"from": "v7_14", "to": "v0_0", "directed": true}, {"from": "v7_21", "to": "v0_0", "directed": true}, {"from": "v7_32", "to": "v0_0", "directed": true}, {"from": "v7_7", "to": "v0_0", "directed": true}], "width": 420, "height": 270, "frames": [{"note": "A tall tree, as naive linking can produce. `find(5)` must climb $5$ links.", "lines": [1], "vars": [["parent[]", "0 0 1 2 3 4 2 0"], ["root (size)", "0 (8)"]], "hidden": ["v1_8", "v2_9", "v3_10", "v4_11", "v5_12", "v6_13", "v7_14", "v1_15", "v2_16", "v3_17", "v4_18", "v5_19", "v6_20", "v7_21", "v1_22", "v2_23", "v3_24", "v6_25", "v1_26", "v2_27", "v3_28", "v4_29", "v5_30", "v6_31", "v7_32"]}, {"note": "Pass 1: climb from $5$ to the root $0$, remembering nothing but the root.", "nodeColors": [{"id": "v5_5", "color": "blue"}, {"id": "v4_4", "color": "blue"}, {"id": "v3_3", "color": "blue"}, {"id": "v2_2", "color": "blue"}, {"id": "v1_1", "color": "blue"}, {"id": "v0_0", "color": "green"}], "edgeColors": [{"from": "v5_5", "to": "v4_4", "color": "blue"}, {"from": "v4_4", "to": "v3_3", "color": "blue"}, {"from": "v3_3", "to": "v2_2", "color": "blue"}, {"from": "v2_2", "to": "v1_1", "color": "blue"}, {"from": "v1_1", "to": "v0_0", "color": "blue"}], "lines": [2, 3], "vars": [["parent[]", "0 0 1 2 3 4 2 0"], ["root (size)", "0 (8)"], ["path", "5 → 4 → 3 → 2 → 1 → 0"]], "hidden": ["v1_8", "v2_9", "v3_10", "v4_11", "v5_12", "v6_13", "v7_14", "v1_15", "v2_16", "v3_17", "v4_18", "v5_19", "v6_20", "v7_21", "v1_22", "v2_23", "v3_24", "v6_25", "v1_26", "v2_27", "v3_28", "v4_29", "v5_30", "v6_31", "v7_32"]}, {"note": "Pass 2: re-point $5$ (was under $4$) directly at the root, then continue from $4$.", "nodeColors": [{"id": "v5_12", "color": "orange"}, {"id": "v0_0", "color": "green"}], "edgeColors": [{"from": "v5_12", "to": "v0_0", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["parent[]", "0 0 1 2 3 0 2 0"], ["root (size)", "0 (8)"]], "hidden": ["v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v1_15", "v2_16", "v3_17", "v4_18", "v5_19", "v6_20", "v7_21", "v1_22", "v2_23", "v3_24", "v6_25", "v1_26", "v2_27", "v3_28", "v4_29", "v5_30", "v6_31", "v7_32"]}, {"note": "Pass 2: re-point $4$ (was under $3$) directly at the root, then continue from $3$.", "nodeColors": [{"id": "v4_18", "color": "orange"}, {"id": "v0_0", "color": "green"}], "edgeColors": [{"from": "v4_18", "to": "v0_0", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["parent[]", "0 0 1 2 0 0 2 0"], ["root (size)", "0 (8)"]], "hidden": ["v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v1_8", "v2_9", "v3_10", "v4_11", "v5_12", "v6_13", "v7_14", "v1_22", "v2_23", "v3_24", "v6_25", "v1_26", "v2_27", "v3_28", "v4_29", "v5_30", "v6_31", "v7_32"]}, {"note": "Pass 2: re-point $3$ (was under $2$) directly at the root, then continue from $2$.", "nodeColors": [{"id": "v3_24", "color": "orange"}, {"id": "v0_0", "color": "green"}], "edgeColors": [{"from": "v3_24", "to": "v0_0", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["parent[]", "0 0 1 0 0 0 2 0"], ["root (size)", "0 (8)"]], "hidden": ["v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v1_8", "v2_9", "v3_10", "v4_11", "v5_12", "v6_13", "v7_14", "v1_15", "v2_16", "v3_17", "v6_20", "v1_26", "v2_27", "v3_28", "v4_29", "v5_30", "v6_31", "v7_32"]}, {"note": "Pass 2: re-point $2$ (was under $1$) directly at the root, then continue from $1$.", "nodeColors": [{"id": "v2_27", "color": "orange"}, {"id": "v0_0", "color": "green"}], "edgeColors": [{"from": "v2_27", "to": "v0_0", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["parent[]", "0 0 0 0 0 0 2 0"], ["root (size)", "0 (8)"]], "hidden": ["v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v1_8", "v2_9", "v3_10", "v4_11", "v5_12", "v6_13", "v7_14", "v1_15", "v2_16", "v3_17", "v4_18", "v5_19", "v6_20", "v7_21", "v1_22", "v2_23", "v3_24", "v6_25"]}, {"note": "After one `find`, every node on the path hangs directly off the root: the next `find` on any of them takes $1$ step. Node $6$, not on the path, keeps its parent.", "nodeColors": [{"id": "v5_30", "color": "green"}, {"id": "v4_29", "color": "green"}, {"id": "v3_28", "color": "green"}, {"id": "v2_27", "color": "green"}, {"id": "v1_26", "color": "green"}, {"id": "v0_0", "color": "green"}], "lines": [9], "vars": [["parent[]", "0 0 0 0 0 0 2 0"], ["root (size)", "0 (8)"]], "hidden": ["v1_1", "v2_2", "v3_3", "v4_4", "v5_5", "v6_6", "v7_7", "v1_8", "v2_9", "v3_10", "v4_11", "v5_12", "v6_13", "v7_14", "v1_15", "v2_16", "v3_17", "v4_18", "v5_19", "v6_20", "v7_21", "v1_22", "v2_23", "v3_24", "v6_25"]}], "code": "int find(int x) {\n    int root = x;\n    while (parent[root] != root) root = parent[root];\n    while (parent[x] != root) {      // second pass\n        int next = parent[x];\n        parent[x] = root;            // point straight at the root\n        x = next;\n    }\n    return root;\n}", "interval": 1300, "caption": "Path compression: the expensive `find` pays to flatten the path it walked, so later operations are cheap."};
/*gen:code:uf_compare*/ const CODE_uf_compare = "#include <algorithm>\n#include <cstdio>\n#include <numeric>\n#include <random>\n#include <utility>\n#include <vector>\n\n// Three union-find variants on the same operations; we count parent-pointer hops in find.\nstruct UF {\n    bool by_size, compress;\n    std::vector<int> parent, size;\n    long long hops = 0;\n\n    UF(int n, bool s, bool c) : by_size(s), compress(c), parent(n), size(n, 1) {\n        std::iota(parent.begin(), parent.end(), 0);   // every element is its own root\n    }\n    int find(int x) {\n        int root = x;\n        while (parent[root] != root) { root = parent[root]; ++hops; }\n        if (compress)                                  // second pass: point the path at the root\n            while (parent[x] != root) { int next = parent[x]; parent[x] = root; x = next; }\n        return root;\n    }\n    void unite(int a, int b) {\n        a = find(a); b = find(b);\n        if (a == b) return;\n        if (by_size && size[a] < size[b]) std::swap(a, b);   // a = root of the larger tree\n        parent[b] = a;                                       // hang the other root below it\n        size[a] += size[b];\n    }\n    int height() {                                     // longest path to a root (no compression)\n        int h = 0;\n        for (int x = 0; x < static_cast<int>(parent.size()); ++x) {\n            int d = 0;\n            for (int y = x; parent[y] != y; y = parent[y]) ++d;\n            h = std::max(h, d);\n        }\n        return h;\n    }\n};\n\nint main() {\n    const int n = 1 << 14;                                           // 16384 elements\n    std::mt19937 rng(7);\n    // Workload 1: every union hangs the existing tree below a fresh element, then random finds.\n    std::vector<std::pair<int, int>> chain;\n    for (int i = 1; i < n; ++i) chain.push_back({i, 0});\n    // Workload 2: merge equal-size trees (pairs, then pairs of pairs, ...), then random finds.\n    std::vector<std::pair<int, int>> pairs;\n    for (int step = 1; step < n; step *= 2)\n        for (int i = 0; i + step < n; i += 2 * step) pairs.push_back({i, i + step});\n    for (auto* w : {&chain, &pairs})\n        for (int i = 0; i < n; ++i) w->push_back({static_cast<int>(rng() % n), -1});   // -1 = find\n\n    const char* label[] = {\"naive linking\", \"union by size\", \"size + compression\"};\n    bool cfg[3][2] = {{false, false}, {true, false}, {true, true}};\n    for (auto* w : {&chain, &pairs}) {\n        std::printf(\"%s workload:\\n\", w == &chain ? \"chain\" : \"pairs\");\n        for (int k = 0; k < 3; ++k) {\n            UF uf(n, cfg[k][0], cfg[k][1]);\n            for (auto [a, b] : *w) {\n                if (b >= 0) uf.unite(a, b);\n                else uf.find(a);\n            }\n            std::printf(\"  %-19s final height %5d   find hops %10lld\\n\", label[k], uf.height(), uf.hops);\n        }\n    }\n}";
/*gen:out:uf_compare*/ const OUT_uf_compare = "chain workload:\n  naive linking       final height 16383   find hops  270087771\n  union by size       final height     1   find hops      32765\n  size + compression  final height     1   find hops      32765\npairs workload:\n  naive linking       final height    14   find hops     114628\n  union by size       final height    14   find hops     114628\n  size + compression  final height     4   find hops      29113";
/*gen:code:dsu_dungeon*/ const CODE_dsu_dungeon = "#include <algorithm>\n#include <cstdlib>\n#include <cstdio>\n#include <numeric>\n#include <random>\n#include <string>\n#include <utility>\n#include <vector>\n\n// Union-find with union by size and path halving. Near-constant amortized time per operation.\nclass DisjointSets {\npublic:\n    explicit DisjointSets(int n) : parent_(n), size_(n, 1), sets_(n) {\n        std::iota(parent_.begin(), parent_.end(), 0);\n    }\n    int find(int x) {\n        while (parent_[x] != x) {\n            parent_[x] = parent_[parent_[x]];     // path halving: skip a level as we climb\n            x = parent_[x];\n        }\n        return x;\n    }\n    bool unite(int a, int b) {                    // false if already in the same set\n        a = find(a); b = find(b);\n        if (a == b) return false;\n        if (size_[a] < size_[b]) std::swap(a, b);\n        parent_[b] = a;\n        size_[a] += size_[b];\n        --sets_;\n        return true;\n    }\n    bool connected(int a, int b) { return find(a) == find(b); }\n    int sets() const { return sets_; }\n\nprivate:\n    std::vector<int> parent_, size_;\n    int sets_;\n};\n\nint main() {\n    // 1. Dungeon: connect rooms with corridors, shortest candidates first (Kruskal),\n    //    skipping any corridor whose rooms are already connected.\n    struct Room { const char* name; int x, y; };\n    std::vector<Room> rooms{{\"Gate\", 0, 0}, {\"Barracks\", 4, 1}, {\"Well\", 1, 4}, {\"Forge\", 6, 4},\n                            {\"Chapel\", 3, 7}, {\"Crypt\", 8, 8}};\n    struct Corridor { int len, a, b; };\n    std::vector<Corridor> cand;\n    for (int a = 0; a < 6; ++a)\n        for (int b = a + 1; b < 6; ++b)\n            cand.push_back({std::abs(rooms[a].x - rooms[b].x) + std::abs(rooms[a].y - rooms[b].y), a, b});\n    std::sort(cand.begin(), cand.end(), [](const Corridor& p, const Corridor& q) {\n        return p.len != q.len ? p.len < q.len : std::make_pair(p.a, p.b) < std::make_pair(q.a, q.b);\n    });\n    DisjointSets rooms_ds(6);\n    int total = 0;\n    for (auto [len, a, b] : cand)\n        if (rooms_ds.unite(a, b)) {\n            std::printf(\"corridor %-8s - %-8s length %d\\n\", rooms[a].name, rooms[b].name, len);\n            total += len;\n        }\n    std::printf(\"all %d rooms connected, total corridor length %d\\n\\n\", 6, total);\n\n    // 2. Maze: knock down walls between grid cells in RANDOM order, keeping only\n    //    walls that join two different regions (randomized Kruskal).\n    const int W = 10, H = 5;\n    std::vector<std::pair<int, int>> walls;                      // pairs of adjacent cells\n    for (int r = 0; r < H; ++r)\n        for (int c = 0; c < W; ++c) {\n            if (c + 1 < W) walls.push_back({r * W + c, r * W + c + 1});\n            if (r + 1 < H) walls.push_back({r * W + c, (r + 1) * W + c});\n        }\n    std::mt19937 rng(42);\n    for (int i = static_cast<int>(walls.size()) - 1; i > 0; --i)   // Fisher-Yates shuffle\n        std::swap(walls[i], walls[rng() % (i + 1)]);\n    DisjointSets cells(W * H);\n    std::vector<std::string> grid(2 * H + 1, std::string(2 * W + 1, '#'));\n    for (int v = 0; v < W * H; ++v) grid[2 * (v / W) + 1][2 * (v % W) + 1] = ' ';\n    int removed = 0;\n    for (auto [u, v] : walls)\n        if (cells.unite(u, v)) {                                 // different regions: open the wall\n            grid[(v / W) + (u / W) + 1][(v % W) + (u % W) + 1] = ' ';\n            ++removed;\n        }\n    for (const auto& row : grid) std::printf(\"%s\\n\", row.c_str());\n    std::printf(\"walls removed: %d, regions left: %d\\n\", removed, cells.sets());\n}";
/*gen:out:dsu_dungeon*/ const OUT_dsu_dungeon = "corridor Gate     - Barracks length 5\ncorridor Gate     - Well     length 5\ncorridor Barracks - Forge    length 5\ncorridor Well     - Chapel   length 5\ncorridor Forge    - Crypt    length 6\nall 6 rooms connected, total corridor length 26\n\n#####################\n#   # #   #         #\n# ### # ####### # ###\n#     #   #   # # # #\n### # # ##### # # # #\n# # # #       # #   #\n# ### # ####### ### #\n# #     # #       # #\n# ### ### # ### #####\n#           #       #\n#####################\nwalls removed: 49, regions left: 1";
/*gen:code:percolation*/ const CODE_percolation = "#include <cstdio>\n#include <numeric>\n#include <random>\n#include <utility>\n#include <vector>\n\nstruct DSU {\n    std::vector<int> p, sz;\n    explicit DSU(int n) : p(n), sz(n, 1) { std::iota(p.begin(), p.end(), 0); }\n    int find(int x) { while (p[x] != x) x = p[x] = p[p[x]]; return x; }   // path halving\n    void unite(int a, int b) {\n        a = find(a); b = find(b);\n        if (a == b) return;\n        if (sz[a] < sz[b]) std::swap(a, b);\n        p[b] = a; sz[a] += sz[b];\n    }\n};\n\n// Open random sites of an N x N grid until water can flow from the top row to the bottom row.\n// Two virtual sites, TOP and BOTTOM, turn \"any top cell connects to any bottom cell\" into one query.\ndouble percolation_threshold(int N, std::mt19937& rng) {\n    const int TOP = N * N, BOTTOM = N * N + 1;\n    DSU dsu(N * N + 2);\n    std::vector<bool> open(N * N, false);\n    std::vector<int> order(N * N);\n    std::iota(order.begin(), order.end(), 0);\n    for (int i = N * N - 1; i > 0; --i) std::swap(order[i], order[rng() % (i + 1)]);\n    int opened = 0;\n    for (int s : order) {\n        open[s] = true;\n        ++opened;\n        int r = s / N, c = s % N;\n        if (r == 0) dsu.unite(s, TOP);\n        if (r == N - 1) dsu.unite(s, BOTTOM);\n        const int dr[4] = {-1, 1, 0, 0}, dc[4] = {0, 0, -1, 1};\n        for (int k = 0; k < 4; ++k) {\n            int nr = r + dr[k], nc = c + dc[k];\n            if (nr >= 0 && nr < N && nc >= 0 && nc < N && open[nr * N + nc]) dsu.unite(s, nr * N + nc);\n        }\n        if (dsu.find(TOP) == dsu.find(BOTTOM)) break;\n    }\n    return static_cast<double>(opened) / (N * N);\n}\n\nint main() {\n    std::mt19937 rng(2026);\n    for (int N : {10, 50, 200}) {\n        const int trials = 100;\n        double sum = 0;\n        for (int t = 0; t < trials; ++t) sum += percolation_threshold(N, rng);\n        std::printf(\"N = %3d: average fraction open at percolation %.3f\\n\", N, sum / trials);\n    }\n}";
/*gen:out:percolation*/ const OUT_percolation = "N =  10: average fraction open at percolation 0.593\nN =  50: average fraction open at percolation 0.595\nN = 200: average fraction open at percolation 0.594";

export const lesson: Lesson = {
  id: 'dsa-union-find',
  title: 'Union–Find',
  summary: 'Disjoint sets as forests of parent pointers: why naive linking degenerates, how union by size bounds the height by log n, how path compression flattens it, and the inverse-Ackermann bound — with dungeon and maze generation, Kruskal and percolation.',
  minutes: 20,
  objectives: [
    'Implement disjoint sets with `find` and `unite` over a parent array, and explain why naive linking can cost $\\Theta(n)$ per operation',
    'Prove that union by size (or rank) keeps every tree\'s height at most $\\lfloor \\log_2 n \\rfloor$',
    'Implement path compression and path halving, and state the $O(m\\,\\alpha(n))$ amortized bound with the inverse Ackermann function',
    'Apply union–find to dynamic connectivity, undirected cycle detection, Kruskal\'s algorithm, procedural dungeons and mazes, and percolation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Dynamic connectivity and the parent forest',
      blocks: [
        {
          type: 'p',
          text: 'A level generator adds corridors one at a time and keeps asking: "are these two rooms already connected?" A network monitor brings links up and asks whether two sites can talk. BFS answers one such question in $O(n + m)$, which is far too slow to repeat after every new edge. [[dm-union-find|Union–find]] (also called a *disjoint-set* structure) answers it in nearly constant time, as long as edges are only **added**.',
        },
        {
          type: 'definition',
          term: 'Disjoint-set ADT',
          text: 'Maintain a partition of the elements $0, \\dots, n-1$ into disjoint sets. `find(x)` returns a **representative** of $x$\'s set, the same element for every member, so `find(a) == find(b)` tests whether $a$ and $b$ are in the same set. `unite(a, b)` merges the two sets containing $a$ and $b$. Initially every element is alone.',
        },
        {
          type: 'p',
          text: 'The classic representation is a **forest of parent pointers** stored in one array: `parent[x]` is $x$\'s parent, and a root has `parent[x] == x`. Each tree is one set and its root is the representative. `find` climbs to the root; `unite` finds both roots and makes one the child of the other. Nothing else is stored — no child lists, no element lists, just one `int` per element.',
        },
        {
          type: 'table',
          headers: ['Version', '`find`', '`unite`', 'Problem'],
          rows: [
            ['quick-find: `id[x]` = set label', '$O(1)$', '$O(n)$: relabel a whole set', '$n$ unions cost $\\Theta(n^2)$'],
            ['quick-union, naive linking', '$O(\\text{height})$', '$O(\\text{height})$', 'height can reach $n - 1$'],
            ['union by size or rank', '$O(\\log n)$', '$O(\\log n)$', 'none serious'],
            ['by size + path compression', '$O(\\alpha(n))$ amortized', '$O(\\alpha(n))$ amortized', 'none: effectively constant'],
          ],
          caption: 'The rest of this lesson climbs this table.',
        },
        {
          type: 'derivation',
          title: 'How naive linking builds a chain',
          steps: [
            { tex: '\\texttt{unite}(a, b): \\ \\texttt{parent[find}(b)\\texttt{]} = \\texttt{find}(a)', why: 'Naive rule: always hang $b$\'s root under $a$\'s root, ignoring the trees\' shapes.' },
            { tex: '\\texttt{unite}(1, 0),\\ \\texttt{unite}(2, 0),\\ \\dots,\\ \\texttt{unite}(n - 1, 0)', why: 'An innocent sequence: each new element joins the group that contains $0$.' },
            { tex: '\\text{after } \\texttt{unite}(k, 0): \\ 0 \\to 1 \\to 2 \\to \\cdots \\to k', why: 'Each call hangs the old root $k - 1$ under the singleton $k$, so the chain grows by one at the top.' },
            { tex: '\\texttt{find}(0) \\text{ inside } \\texttt{unite}(k, 0) \\text{ costs } k - 1 \\text{ hops}', why: 'Element $0$ sits at the bottom of a chain of length $k - 1$.' },
            { tex: '\\sum_{k=1}^{n-1} (k - 1) = \\frac{(n-1)(n-2)}{2} = \\Theta(n^2)', why: 'Sum of an arithmetic series. And any later `find(0)` costs $n - 1$.' },
          ],
          result: 'Naive linking can make union–find as slow as a linked list. The fix is to choose which root goes on top.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'With naive linking (`parent[find(b)] = find(a)`), start from six singletons $0, \\dots, 5$ and call `unite(1, 0)`, `unite(2, 0)`, `unite(3, 0)`, `unite(4, 0)`, `unite(5, 0)`. How many parent links does a following `find(0)` follow to reach its root?',
      answer: '5',
      hint: 'Track where each call hangs the root of $0$\'s tree.',
      explanation: '`unite(1, 0)` hangs root $0$ under $1$. `unite(2, 0)`: `find(0)` is now $1$, so $1$ goes under $2$. Then $2$ under $3$, $3$ under $4$, $4$ under $5$. The tree is the chain $0 \\to 1 \\to 2 \\to 3 \\to 4 \\to 5$ and `find(0)` follows **5** links: the height is $n - 1$. With union by size, every call would have hung the singleton under the big tree instead, and `find(0)` would take at most $1$ link.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Union by size: height at most log n',
      blocks: [
        {
          type: 'p',
          text: 'The fix is one comparison: in `unite`, hang the root of the **smaller** tree (fewer elements) below the root of the larger one. This is [[dsa-union-by-rank|union by size]]. A close cousin, union by **rank**, compares an upper bound on the height instead of the size; both give the same guarantees. Watch eight singletons merge:',
        },
        ALGO_ufUnion,
        {
          type: 'theorem',
          name: 'Union by size keeps trees shallow',
          tex: '\\text{depth}(x) \\le \\log_2 \\big(\\text{size of } x\\text{\'s set}\\big) \\le \\log_2 n',
          text: 'So every tree has height at most $\\lfloor \\log_2 n \\rfloor$, and `find` and `unite` cost $O(\\log n)$ in the worst case.',
        },
        {
          type: 'derivation',
          title: 'Proof by following one element $x$',
          steps: [
            { tex: '\\text{depth}(x) \\text{ changes only when } x\\text{\'s root } r \\text{ is linked below another root } r\'', why: '`unite` only rewrites the parent of a root. Everything in $r$\'s tree, $x$ included, gets one level deeper; nothing else moves.' },
            { tex: '\\text{union by size} \\implies \\text{size}(r\') \\ge \\text{size}(r)', why: 'The smaller (or equal) tree is the one that goes underneath.' },
            { tex: '\\text{new size of } x\\text{\'s set} = \\text{size}(r) + \\text{size}(r\') \\ge 2\\,\\text{size}(r)', why: 'So each time $x$ gets deeper by one, the size of its set at least **doubles**.' },
            { tex: '\\text{size starts at } 1, \\text{ never exceeds } n \\implies \\text{at most } \\log_2 n \\text{ doublings}', why: 'After $k$ doublings the set has at least $2^k$ elements, so $2^k \\le n$.' },
          ],
          result: 'Every element\'s depth is at most $\\log_2 n$, so with $n = 10^6$ no `find` ever takes more than $19$ hops. The animation hit the bound exactly: $8$ elements, height $3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why size and not just "any rule"',
          text: 'The proof needs exactly one property: whoever gets deeper must at least double the size of their set. Linking the larger tree under the smaller would violate it — and the chain example shows the damage. Union by rank works for the same reason with "rank" in place of $\\log_2$ size: a root of rank $k$ has at least $2^k$ elements. Size has the practical bonus that `size[find(x)]` tells you how big $x$\'s group is (how many rooms in this region, how many players in this party).',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Start with singletons $0, \\dots, 7$ and use union by size (`if (size[a] < size[b]) swap(a, b); parent[b] = a;` after replacing $a, b$ by their roots, so on a tie the second root goes under the first). Perform `unite(0,1)`, `unite(1,2)`, `unite(3,4)`, `unite(4,5)`, `unite(2,5)`, `unite(6,7)`, `unite(0,7)`. What is the height of the final tree (the most links from any element to the root)?',
      answer: '2',
      hint: 'Draw the forest after each call. Only roots ever get new parents.',
      explanation: '`unite(0,1)`: $1 \\to 0$. `unite(1,2)`: roots $0$ (size 2) and $2$ (size 1), so $2 \\to 0$. `unite(3,4)`: $4 \\to 3$. `unite(4,5)`: $5 \\to 3$. `unite(2,5)`: roots $0$ and $3$, both size 3, tie: $3 \\to 0$. `unite(6,7)`: $7 \\to 6$. `unite(0,7)`: roots $0$ (size 6) and $6$ (size 2): $6 \\to 0$. Deepest elements: $4 \\to 3 \\to 0$, $5 \\to 3 \\to 0$, $7 \\to 6 \\to 0$, so the height is **2**, within the bound $\\lfloor \\log_2 8 \\rfloor = 3$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Path compression and the inverse Ackermann bound',
      blocks: [
        {
          type: 'p',
          text: '`find(x)` walks the whole path from $x$ to the root anyway. [[dsa-path-compression|Path compression]] makes that walk pay for itself: once the root is known, re-point every node on the path **directly at the root**. The walk costs the same as before, but every later `find` on those nodes, and on everything below them, gets shorter.',
        },
        ALGO_ufCompress,
        {
          type: 'p',
          text: 'Path compression needs two passes (or recursion: `return parent[x] = find(parent[x]);`, which risks deep recursion on a tall tree). **Path halving** gets most of the benefit in one pass and no extra memory: while climbing, point each node at its grandparent, `parent[x] = parent[parent[x]]`, then jump there. Every path shrinks to about half its length each time it is walked.',
        },
        {
          type: 'theorem',
          name: 'Tarjan (1975): union by rank or size + path compression',
          tex: 'T(m \\text{ operations on } n \\text{ elements}) = O\\big(m\\, \\alpha(n)\\big)',
          text: 'Here $\\alpha$ is the [[dsa-inverse-ackermann|inverse Ackermann function]], which grows so slowly that $\\alpha(n) \\le 4$ for every $n$ up to a number vastly larger than the count of atoms in the observable universe (about $10^{80}$). Path halving or splitting in place of full compression gives the same bound (Tarjan and van Leeuwen, 1984), and Fredman and Saks (1989) proved that **no** disjoint-set structure can do better in general: the $\\alpha$ is really there, but it is at most $4$ in practice.',
        },
        {
          type: 'code',
          title: 'union_find_compare.cpp',
          runnable: true,
          code: CODE_uf_compare,
          output: OUT_uf_compare,
          annotations: [
            { lines: '17-23', text: 'Two-pass `find`: locate the root, then re-point the path. Hops are counted only in the first pass, the part every variant must do.' },
            { lines: '27-28', text: 'Union by size: the larger root stays on top. Without it (`by_size == false`) the second argument\'s root always goes under the first\'s — naive linking.' },
            { lines: '46-47', text: 'The chain workload from the derivation: naive linking builds a path of length $n - 1$ and pays $\\Theta(n^2)$ hops, $270$ million here.' },
            { lines: '49-51', text: 'Merging equal sizes is the worst case for union by size: binomial-tree-like shapes of height exactly $\\log_2 n = 14$. Compression then cuts the random finds\' cost by about $4\\times$ and leaves height $4$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Each heuristic alone',
          text: 'Union by size alone: $O(\\log n)$ worst case per operation, as proved above. Path compression alone (naive linking): logarithmic **amortized** cost per operation, but an individual `find` can still be slow. Together: $O(\\alpha(n))$ amortized. In practice, use both — they are three lines of code.',
        },
        {
          type: 'deepdive',
          title: 'What is the inverse Ackermann function?',
          blocks: [
            {
              type: 'p',
              text: 'Define a tower of ever-faster functions: $A_0(j) = j + 1$, and $A_{k}(j)$ applies $A_{k-1}$ to $j$ repeatedly, $j + 1$ times. So $A_1(j) = 2j + 1$, $A_2(j) = 2^{j+1}(j + 1) - 1$, and $A_3$ is a tower of exponentials. $A_4(1)$ already exceeds $10^{80}$ by an absurd margin (CLRS shows it is far larger than $16^{512}$). The inverse $\\alpha(n)$ is the smallest $k$ with $A_k(1) \\ge n$: since $A_0(1) = 2$, $A_1(1) = 3$, $A_2(1) = 7$, $A_3(1) = 2047$, we get $\\alpha(n) = 4$ for every $n$ from $2048$ to beyond anything a computer will ever store.',
            },
            {
              type: 'p',
              text: 'The amortized proof (Tarjan; Seidel and Sharir gave a shorter one in 2005) is a potential-function argument charging the cost of long paths to future savings, as in [[dm-amortized-analysis|amortized analysis]] of dynamic arrays — but considerably deeper. Erickson\'s notes and CLRS (the disjoint-sets chapter) present it in full.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'With union by size alone (no path compression), `find` runs in $O(1)$ worst-case time.',
      answer: false,
      explanation: 'False. Union by size bounds the height by $\\lfloor \\log_2 n \\rfloor$, so `find` is $O(\\log n)$ worst case, and that bound is reached: merging equal-size trees repeatedly (the "pairs" workload above) builds trees of height exactly $\\log_2 n$, $14$ for $n = 16{,}384$. Even with both heuristics the bound is $O(\\alpha(n))$ **amortized**, not $O(1)$ worst case: a single `find` can still walk a long path, it just leaves the path short for everyone after it.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the one-pass `find` with path halving.',
      template: '`while (parent[x] != x) { parent[x] = ` ___ `; x = ` ___ `; } return x;`',
      blanks: [{ answers: ['`parent[parent[x]]`'] }, { answers: ['`parent[x]`'] }],
      wordBank: ['`parent[parent[x]]`', '`parent[x]`', '`x`', '`find(x)`', '`size[x]`'],
      hint: 'First skip a level, then step to where you now point.',
      explanation: 'Point $x$ at its grandparent (`parent[x] = parent[parent[x]]`, safe because the root is its own parent), then move to that grandparent (`x = parent[x]`). Each climb halves the path it walks, in one pass, with no recursion and no second loop. Writing `x = find(x)` would recurse forever, and moving `x = parent[x]` *before* updating would skip the halving.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Applications: connectivity, cycles and Kruskal',
      blocks: [
        {
          type: 'list',
          items: [
            '**Online connectivity.** Edges arrive over time (players form parties, network links come up, terrain pieces fuse); each new edge is a `unite`, each query a `find` comparison. Counting `sets` gives the number of connected components at every moment.',
            '**Cycle detection in undirected graphs.** Process the edges one by one: if `find(u) == find(v)` before uniting, the edge $u - v$ closes a cycle, because $u$ and $v$ were already connected some other way.',
            '**[[dm-kruskal|Kruskal\'s]] minimum spanning tree.** Sort the edges by weight and keep each edge whose endpoints are in different sets. Union–find makes the "would this close a cycle?" test nearly free, so the sort dominates: $O(m \\log m)$. The proof that this greedy choice is optimal (the [[dsa-cut-property|cut property]]) is in the MST lesson.',
            '**Grouping and clustering.** Merge any two objects closer than a threshold (particles into fluid blobs, enemies into squads, pixels into connected regions in image labeling).',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Union–find cannot un-unite',
          text: 'There is no efficient `split` or "delete edge". If links can **fail** — a bridge is destroyed, a player leaves a party — the structure cannot simply undo a union, because the forest does not record which edge caused which link (and compression has rewritten the paths anyway). Options: rebuild from the current edge set, process deletions offline in reverse as additions, or use a heavier dynamic-connectivity structure. For a destructible game world, plan the rebuild.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Network reliability, the other way round',
          text: 'Asking "after which link failure does the network split?" is a deletion problem, but reversing time turns it into additions: start from the final state with all failing links removed, add them back in reverse order, and watch with union–find when the components merge. The same trick answers "when does this island first get cut off?" in a terrain-destruction sequence.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A teammate\'s union–find gives wrong answers: elements that were united sometimes report different roots. The `find` is correct. Which line of `unite` is wrong?',
      lines: [
        '`void unite(int a, int b) {`',
        '`    int ra = find(a), rb = find(b);`',
        '`    if (ra == rb) return;`',
        '`    if (size[ra] < size[rb]) std::swap(ra, rb);`',
        '`    parent[b] = ra;`',
        '`    size[ra] += size[rb];`',
        '`}`',
      ],
      errorLines: [5],
      hint: 'Which element\'s parent pointer must change for two **trees** to merge?',
      explanation: 'Line 5 re-points the element `b` instead of its root `rb`. If `b` is not a root, it is torn out of its tree and attached to `ra`, while `rb` and everything else in $b$\'s old set stay behind under `rb`: the sets are not merged, and $b$ has silently changed groups. Only a root\'s parent may change: `parent[rb] = ra;`. The size update on line 6 already uses the roots correctly.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Procedural dungeons and mazes',
      blocks: [
        {
          type: 'p',
          text: 'A procedural level must be **connected**: every room reachable from the entrance. Union–find gives a simple recipe. Generate candidate corridors between rooms, consider them in some order, and accept a corridor only if it joins two rooms that are not yet connected. Stop when one set remains. The accepted corridors form a [[dm-spanning-tree|spanning tree]] of the rooms: connected, with no redundant loops. The order is your design knob.',
        },
        {
          type: 'list',
          items: [
            '**Shortest corridors first** (Kruskal): the minimum total corridor length, compact and efficient.',
            '**Random order** (randomized Kruskal): a random spanning tree. On a grid of cells with walls between neighbors, this is the classic [[dsa-perfect-maze|perfect maze]] generator: exactly one path between any two cells.',
            '**Then add loops on purpose**: re-add a few rejected corridors (say 10–15%) so the player is not stuck backtracking down dead ends. Union–find told you which ones are redundant.',
          ],
        },
        {
          type: 'code',
          title: 'dungeon_and_maze.cpp',
          runnable: true,
          code: CODE_dsu_dungeon,
          output: OUT_dsu_dungeon,
          annotations: [
            { lines: '16-22', text: 'Path halving: one pass, no recursion, no extra storage.' },
            { lines: '23-31', text: '`unite` reports whether it merged anything — exactly the "would this corridor be redundant?" test.' },
            { lines: '51-60', text: 'Kruskal on rooms: sort candidates by length (ties broken by room ids so the output is deterministic) and keep the useful ones.' },
            { lines: '73-74', text: 'Fisher–Yates shuffle with our own `rng() % (i + 1)` (slightly biased for huge ranges, fine here), so the maze is identical on every compiler.' },
            { lines: '79-83', text: 'Randomized Kruskal: knock down a wall only if the two cells are still in different regions. The wall sits halfway between the two cells in the doubled ASCII grid.' },
          ],
        },
        {
          type: 'derivation',
          title: 'How many walls does a perfect maze remove?',
          steps: [
            { tex: '\\text{cells} = W \\cdot H = 10 \\cdot 5 = 50', why: 'Each cell is a vertex of the graph; each knocked-down wall is an edge.' },
            { tex: '\\text{each accepted wall merges two regions: sets} \\to \\text{sets} - 1', why: 'That is the only time `unite` returns true.' },
            { tex: '50 \\text{ sets} \\to 1 \\text{ set} \\implies 50 - 1 = 49 \\text{ walls removed}', why: 'A spanning tree on $V$ vertices always has $V - 1$ edges.' },
          ],
          result: 'Whatever the shuffle, the maze removes exactly $WH - 1$ walls, matching the program\'s output.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Randomized Kruskal builds a perfect maze on a grid of $12 \\times 8$ cells (walls between all 4-neighbors to start). How many walls does it knock down?',
      answer: '95',
      hint: 'The opened walls form a spanning tree of the cells.',
      explanation: 'There are $12 \\cdot 8 = 96$ cells, all in separate sets at the start. Every knocked-down wall merges two sets, and the maze is done when one set remains, so exactly $96 - 1 = $ **95** walls come down, whatever the random order. Of the $11 \\cdot 8 + 12 \\cdot 7 = 172$ interior walls, the other $77$ stay up.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Percolation, and engineering notes',
      blocks: [
        {
          type: 'p',
          text: 'Percolation is the textbook union–find simulation (Sedgewick and Wayne use it as their running example). Open the sites of an $N \\times N$ grid one at a time in random order. When does water first flow from the top row to the bottom through open sites? The trick that makes it cheap: add two **virtual sites**, TOP joined to every top-row site and BOTTOM to every bottom-row site. "Does the system percolate?" becomes the single query `find(TOP) == find(BOTTOM)`.',
        },
        {
          type: 'code',
          title: 'percolation.cpp',
          runnable: true,
          code: CODE_percolation,
          output: OUT_percolation,
          annotations: [
            { lines: '22-23', text: 'Two extra elements at indices $N^2$ and $N^2 + 1$ stand for the top and bottom edges.' },
            { lines: '33-39', text: 'Opening a site unites it with each open neighbor (and with TOP or BOTTOM on the boundary rows): at most 5 near-constant operations.' },
            { lines: '40', text: 'One comparison of two roots answers "is there an open path from any top site to any bottom site?"' },
          ],
        },
        {
          type: 'p',
          text: 'The estimate settles near $0.593$, the site-percolation threshold of the square lattice (about $0.5927$), a number known only from simulation. The same model describes fire spreading through a forest, fluid through porous rock, and a destructible wall crumbling until a hole opens through it.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Engineering checklist',
          text: 'Use plain `int` indices in flat `std::vector`s (8 bytes per element with sizes), not node objects with pointers. Write `find` iteratively. Map arbitrary keys (room names, entity ids) to dense indices once, up front. If you need "who is in this set?", keep a separate linked list per root and splice the lists on union. And store `size`, not rank, when the group size is useful to gameplay.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which bound is the tight worst-case total cost of $m$ `find`/`unite` operations on $n$ elements with union by rank and path compression?',
      options: [
        { text: '$\\Theta(m)$: constant time per operation', why: 'Close in practice, but not true asymptotically: $\\alpha(n)$ is unbounded, and Fredman and Saks proved no disjoint-set structure can achieve $O(1)$ amortized per operation in general.' },
        { text: '$\\Theta(m \\log n)$', why: 'That is the bound for union by rank **without** compression. Adding path compression brings it all the way down to $\\alpha$.' },
        { text: '$\\Theta(m\\, \\alpha(n))$, with $\\alpha$ the inverse Ackermann function', correct: true, why: 'Right: Tarjan\'s upper bound, matched by the Fredman–Saks lower bound. Since $\\alpha(n) \\le 4$ for any realistic $n$, it behaves like a constant.' },
        { text: '$\\Theta(m \\log^* n)$', why: '$O(m \\log^* n)$ is a valid upper bound (proved earlier by Hopcroft and Ullman), but it is not tight: $\\alpha(n)$ grows even more slowly than the iterated logarithm $\\log^* n$.' },
      ],
      explanation: 'The history in one line: union by rank gives $O(\\log n)$ per operation; adding path compression gives $O(\\log^* n)$ amortized (Hopcroft–Ullman, 1973), then $O(\\alpha(n))$ (Tarjan, 1975), which is optimal (Fredman–Saks, 1989). For engineering purposes: nearly constant.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A strategy game lets players build and **destroy** bridges between islands, and the AI frequently asks whether two islands are connected. Why is a plain union–find structure a poor fit on its own?',
      options: [
        { text: 'Its `find` is $O(n)$ with union by size', why: 'Union by size makes `find` $O(\\log n)$ worst case, and with compression nearly constant. Speed of queries is not the problem.' },
        { text: 'It supports merging sets but not splitting them, so destroying a bridge cannot be undone cheaply', correct: true, why: 'Right. The forest does not remember which bridge caused which link, and compression rewrites paths. Deletions need a rebuild, offline processing in reverse, or a fully dynamic connectivity structure.' },
        { text: 'It only works on grids', why: 'Union–find works on any set of elements and any sequence of unions; grids are just one application.' },
        { text: 'It cannot answer whether two islands are connected, only how many sets exist', why: 'That is exactly what `find(a) == find(b)` answers.' },
      ],
      explanation: 'Union–find is an incremental structure: perfect when connections only ever appear (corridor generation, Kruskal, percolation, merging groups), awkward when they disappear. A common game compromise is to rebuild the structure (one linear pass over the current bridges) only on the frame a bridge is destroyed, and answer every query in between in near-constant time.',
    },
  ],
  takeaways: [
    'Union–find stores a partition as a forest in one `parent` array; a root is its set\'s representative. `find` climbs to the root, `unite` links one root under the other.',
    'Naive linking can build a chain and cost $\\Theta(n)$ per operation. Union by size (or rank) puts the smaller tree below, and every depth increase at least doubles the set, so height $\\le \\log_2 n$.',
    'Path compression (or one-pass path halving) re-points walked paths at the root. With union by size or rank, $m$ operations cost $\\Theta(m\\,\\alpha(n))$, where $\\alpha(n) \\le 4$ for any practical $n$.',
    'Only `parent[root]` may change in `unite`; re-pointing a non-root element tears it out of its set.',
    'Applications: online connectivity, undirected cycle detection, Kruskal\'s MST, connected procedural dungeons and perfect mazes ($WH - 1$ walls removed), clustering, and percolation with virtual top and bottom sites.',
    'Union–find cannot split sets; handle deletions by rebuilding or by processing them offline in reverse.',
  ],
  reading: [
    { title: 'Sedgewick & Wayne, Algorithms 4th ed. — Section 1.5 Case Study: Union-Find', url: 'https://algs4.cs.princeton.edu/15uf/', source: 'book', note: 'Quick-find, quick-union, weighting and path compression, measured step by step, plus the percolation application.' },
    { title: 'Jeff Erickson, Algorithms — notes on disjoint sets', url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/', source: 'book', note: 'The supplementary lecture notes on data structures include union–find with a readable proof of the inverse-Ackermann bound.' },
    { title: 'Disjoint-set data structure (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Disjoint-set_data_structure', source: 'wikipedia', note: 'Path halving and splitting, the history of the bounds, and applications.' },
    { title: 'Maze generation algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Maze_generation_algorithm', source: 'wikipedia', note: 'Randomized Kruskal next to the recursive backtracker and Prim\'s method, with animations of each.' },
  ],
};
