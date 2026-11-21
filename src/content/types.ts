/*
 * Content model for Math Forge.
 *
 * Every lesson in the app is plain data that conforms to these types. The UI
 * renders it and the validator (scripts/validate-content.ts) checks it: every
 * piece of TeX must compile with KaTeX, every graph expression must parse and
 * every numeric / expression answer must evaluate.
 *
 * INLINE TEXT FORMAT (used by every `text`, `prompt`, `explanation`, list item,
 * table cell, takeaway, glossary definition, option, chip, etc.):
 *   $x^2 + 1$           inline math (KaTeX). Write a literal dollar sign as \$.
 *   `code`              inline code
 *   **bold**            strong emphasis
 *   *italic*            emphasis
 *   [label](https://…)  external link (opens in the system browser)
 *   [[glossary-id]]     glossary term; shows the term name and a tap-to-define popover
 *   [[glossary-id|text]] glossary term with custom display text
 * Chemistry: inside $…$ (and every TeX field) use mhchem, e.g. $\ce{2H2 + O2 -> 2H2O}$,
 * $\ce{SO4^2-}$, $\ce{Fe^3+}$, $\pu{6.02e23 mol-1}$.
 * Paragraph breaks inside a single string: use "\n\n".
 */

export type CourseId = 'algebra' | 'trig' | 'calc1' | 'calc2' | 'calc3' | 'linalg' | 'discrete' | 'stats' | 'dsa' | 'phys1' | 'chem' | 'genchem' | 'orgo';

export type CodeLang = 'cpp' | 'text' | 'shell' | 'csharp' | 'ini' | 'json' | 'cmake';

export interface ReadingRef {
  title: string;
  url: string;
  /** Where the link points, shown as a small badge. */
  source: 'openstax' | 'khan' | 'paul' | 'libretexts' | 'wikipedia' | 'desmos' | 'video' | 'book' | 'article' | 'other';
  /** One sentence on why it's worth reading / what to look for. */
  note?: string;
}

/** Explains specific lines of a code block. Line numbers are 1-based. */
export interface Annotation {
  /** A single line (3), an inclusive range ("3-5") or a list ([2, 6]). */
  lines: number | string | number[];
  text: string;
}

export interface CodeBlock {
  type: 'code';
  code: string;
  lang?: CodeLang; // default 'cpp'
  /** File name or caption shown in the code header, e.g. "main.cpp". */
  title?: string;
  /** Expected program output, shown in a console panel under the code. */
  output?: string;
  annotations?: Annotation[];
  highlight?: number[];
  /**
   * true => a complete C++ program; the build check compiles it with
   * `g++ -std=c++20 -Wall -Wextra` and compares stdout with `output`.
   */
  runnable?: boolean;
  stdin?: string;
  std?: 'c++17' | 'c++20' | 'c++23';
}

/** One line of a worked solution: the math, plus the reason for the step. */
export interface DerivationStep {
  /** TeX for this line (display style, no surrounding $). */
  tex: string;
  /** Why this step is allowed / what was done (inline format). Tap to reveal. */
  why?: string;
}

// ---------------------------------------------------------------------------
// Graphs
// ---------------------------------------------------------------------------

/**
 * Expressions (`expr`, coordinates…) use the calculator syntax from
 * src/lib/mathexpr.ts: `x^2 - 3x + 2`, `2sin(x - pi/4)`, `sqrt(x)`, `e^(-x)`,
 * `ln(x)`, `abs(x)`, `log_2(x)`. They may use the graph's slider names as
 * parameters. Numbers anywhere a coordinate is expected may also be expressions
 * given as strings ("pi/2", "a").
 */
export type GraphColor = 'blue' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'gray';
export type NumOrExpr = number | string;

export interface GraphBlock {
  type: 'graph';
  caption?: string;
  /** Visible window. */
  x: [number, number];
  /** Draw the x-axis from high to low values (left = x[1]), as in IR and NMR spectra. */
  xReversed?: boolean;
  y: [number, number];
  /** Grid / tick spacing. 'pi' places x ticks at multiples of π/2. */
  xStep?: number | 'pi';
  yStep?: number;
  /** Keep 1 unit on x the same length as 1 unit on y (circles look round). */
  equal?: boolean;
  /** y = f(x) curves. */
  functions?: {
    expr: string;
    label?: string;
    color?: GraphColor;
    dashed?: boolean;
    /** Only draw for x in this interval (inclusive). */
    domain?: [NumOrExpr, NumOrExpr];
  }[];
  /** (x(t), y(t)) curves — circles, spirals, projectile paths. */
  parametric?: { x: string; y: string; t: [NumOrExpr, NumOrExpr]; label?: string; color?: GraphColor; dashed?: boolean }[];
  /** Polar curves r = f(theta) for theta in `theta` (default [0, 2π]). Use `theta` (or `t`) in expr. */
  polar?: { expr: string; theta?: [NumOrExpr, NumOrExpr]; label?: string; color?: GraphColor; dashed?: boolean }[];
  /**
   * Implicit curves / level curves: the set where `expr` (in x and y) equals each value in
   * `levels` (default [0]). `x^2 + y^2 - 4` draws a circle; `x^2 - y^2` with levels [-2, 0, 2]
   * draws a contour map. Levels may use slider names.
   */
  implicit?: { expr: string; levels?: NumOrExpr[]; label?: string; color?: GraphColor; dashed?: boolean }[];
  /** A 2D vector field ⟨P(x, y), Q(x, y)⟩ drawn as arrows on an n × n grid (default n = 13). */
  field?: { x: string; y: string; n?: number; color?: GraphColor; normalize?: boolean; scale?: number };
  points?: { x: NumOrExpr; y: NumOrExpr; label?: string; color?: GraphColor; open?: boolean }[];
  segments?: { from: [NumOrExpr, NumOrExpr]; to: [NumOrExpr, NumOrExpr]; color?: GraphColor; dashed?: boolean; arrow?: boolean; label?: string }[];
  /** Vertical / horizontal reference lines (asymptotes, x = a). */
  vlines?: { x: NumOrExpr; label?: string; color?: GraphColor; dashed?: boolean }[];
  hlines?: { y: NumOrExpr; label?: string; color?: GraphColor; dashed?: boolean }[];
  /** Shade between `expr` and `expr2` (default 0) for x in [from, to]. */
  areas?: { expr: string; expr2?: string; from: NumOrExpr; to: NumOrExpr; color?: GraphColor }[];
  /** Riemann-sum rectangles (or trapezoids) under `expr`. `n` may be a slider name. */
  riemann?: { expr: string; from: NumOrExpr; to: NumOrExpr; n: NumOrExpr; method: 'left' | 'right' | 'mid' | 'trap'; color?: GraphColor };
  /** Tangent line to `expr` at x = `at` (slope found numerically). Optional secant through `at` and `to`. */
  tangents?: { expr: string; at: NumOrExpr; secantTo?: NumOrExpr; color?: GraphColor; label?: string }[];
  /** Interactive parameters shown as sliders under the graph. */
  sliders?: {
    name: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    label?: string;
    /** Show a ▶ button that sweeps the slider upward over time (a time slider becomes an animation). */
    play?: boolean;
    /** Units per second while playing (default: the whole range in 4 s). */
    speed?: number;
    /** Wrap back to `min` at the end instead of stopping. */
    loop?: boolean;
  }[];
  /** Live readouts under the graph, e.g. { label: 'slope', expr: '2a' } (inline TeX allowed in label). */
  readouts?: { label: string; expr: string; digits?: number }[];
  /** Height in px at full width (default 300). */
  height?: number;
}

/**
 * A rotatable 3D plot (drag sideways to turn it). Coordinates: x, y horizontal, z up.
 * Expressions use calculator syntax and may use the plot's slider names.
 */
export interface Plot3DBlock {
  type: 'plot3d';
  caption?: string;
  /** The box shown. Surfaces are clipped to the z-range. */
  x: [number, number];
  y: [number, number];
  z: [number, number];
  /** Keep one unit the same length on all three axes (default: each axis fills the cube). */
  equal?: boolean;
  /** Surfaces z = f(x, y), optionally only over part of the box. */
  surfaces?: { expr: string; label?: string; color?: GraphColor; opacity?: number; xDomain?: [NumOrExpr, NumOrExpr]; yDomain?: [NumOrExpr, NumOrExpr] }[];
  /** Parametric surfaces r(u, v) = (x, y, z) — spheres, cylinders, cones, tori. Use `u` and `v`. */
  parametricSurfaces?: { x: string; y: string; z: string; u: [NumOrExpr, NumOrExpr]; v: [NumOrExpr, NumOrExpr]; label?: string; color?: GraphColor; opacity?: number }[];
  /** Space curves r(t) = (x, y, z). Use `t`. */
  curves?: { x: string; y: string; z: string; t: [NumOrExpr, NumOrExpr]; label?: string; color?: GraphColor; dashed?: boolean }[];
  points?: { x: NumOrExpr; y: NumOrExpr; z: NumOrExpr; label?: string; color?: GraphColor }[];
  /** Straight segments (no arrowhead): polylines, edges of boxes, projections onto the floor. */
  segments?: { from: [NumOrExpr, NumOrExpr, NumOrExpr]; to: [NumOrExpr, NumOrExpr, NumOrExpr]; color?: GraphColor; dashed?: boolean }[];
  /** Arrows from `from` to `to` (vectors, normals, gradients, tangent vectors). */
  vectors?: { from: [NumOrExpr, NumOrExpr, NumOrExpr]; to: [NumOrExpr, NumOrExpr, NumOrExpr]; label?: string; color?: GraphColor }[];
  /** 3D vector field ⟨P, Q, R⟩ in x, y, z drawn as arrows on an n × n × n grid (default n = 5). */
  field?: { x: string; y: string; z: string; n?: number; color?: GraphColor };
  /** Draw level curves of the first surface on the floor of the box at these heights. */
  contours?: NumOrExpr[];
  /** Color of the floor contours (default purple). */
  contourColor?: GraphColor;
  /** Mesh cells per side for surfaces (default 26, max 50). */
  resolution?: number;
  /** Initial view, degrees: azimuth turns about the z-axis, elevation tilts toward looking down. */
  view?: { azimuth?: number; elevation?: number };
  sliders?: GraphBlock['sliders'];
  readouts?: GraphBlock['readouts'];
  /** Height in px at full width (default 360). */
  height?: number;
}

/**
 * A step-through algorithm animation: a sequence of frames the learner steps through
 * (◀ ▶) or plays. Each frame redraws an array (boxes or bars) or a graph/tree, with
 * colored marks, pointer labels, a note, and optionally highlighted lines of a code
 * listing shown alongside.
 */
export interface AlgoBlock {
  type: 'algo';
  caption?: string;
  /** 'array': boxes (or bars) with indices; 'graph': nodes and edges at fixed positions (trees too). */
  view: 'array' | 'graph';
  /** array view: draw values as bar heights instead of boxes (numbers only). */
  bars?: boolean;
  /** graph view: node positions in a width × height box (default 420 × 260). */
  nodes?: { id: string; x: number; y: number; label?: string }[];
  edges?: { from: string; to: string; label?: string; directed?: boolean }[];
  width?: number;
  height?: number;
  /** Code or pseudocode shown beside the picture; frames highlight lines (1-based). */
  code?: string;
  lang?: CodeLang;
  /** Autoplay speed in ms per frame (default 1000). */
  interval?: number;
  frames: AlgoFrame[];
}

export interface AlgoFrame {
  /** What happens in this frame (inline markdown + TeX). */
  note: string;
  /** array view: the array contents in this frame. Carry it forward by repeating it. */
  array?: (number | string)[];
  /** array view: index → color for highlighted cells (compare, swap, pivot, sorted…). */
  marks?: { index: number; color: GraphColor }[];
  /** array view: labelled arrows above cells (i, j, lo, hi, mid…). */
  pointers?: { index: number; label: string; color?: GraphColor }[];
  /** array view: indices drawn faded (outside the active range). */
  dim?: number[];
  /** graph view: node colors, small notes under nodes (distances…), highlighted edges. */
  nodeColors?: { id: string; color: GraphColor }[];
  nodeNotes?: { id: string; text: string }[];
  /** graph view: replace node labels in this frame (e.g. values in a heap). */
  nodeLabels?: { id: string; label: string }[];
  /** graph view: hide these nodes in this frame (tree growing as you insert). */
  hidden?: string[];
  edgeColors?: { from: string; to: string; color: GraphColor }[];
  /** graph view: hide these edges in this frame (edges that don't exist yet). */
  hiddenEdges?: { from: string; to: string }[];
  /** Highlighted lines of `code` (1-based). */
  lines?: number[];
  /** Small key–value readouts for the frame, e.g. [["comparisons", "7"], ["queue", "B, D"]]. */
  vars?: [string, string][];
}

export type CalloutVariant =
  | 'why' // explains the reasoning behind a rule, definition or method
  | 'tip' // practical advice
  | 'warning' // common mistake or trap
  | 'note' // side information
  | 'code' // how this shows up in programming, games and computer science
  | 'exam' // what instructors look for / how this is tested in college courses
  | 'history' // where the idea came from
  | 'analogy'; // real-world analogy to build intuition

export type Block =
  | { type: 'p'; text: string }
  | { type: 'heading'; text: string }
  /** Display equation. */
  | { type: 'math'; tex: string; caption?: string }
  /** Worked example: one line per step, each with a tappable reason. */
  | { type: 'derivation'; title?: string; steps: DerivationStep[]; result?: string }
  | GraphBlock
  | Plot3DBlock
  | AlgoBlock
  | CodeBlock
  | { type: 'callout'; variant: CalloutVariant; title?: string; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  /** Collapsible "go deeper" section for the curious. */
  | { type: 'deepdive'; title: string; blocks: Block[] }
  /** Side-by-side comparison, typically "wrong" vs "right". */
  | { type: 'compare'; left: CompareSide; right: CompareSide }
  /** A numbered process, e.g. the steps of completing the square. */
  | { type: 'steps'; items: { title: string; text: string }[] }
  /** Key term / theorem box. */
  | { type: 'definition'; term: string; text: string }
  /** A theorem, rule or formula worth remembering. */
  | { type: 'theorem'; name: string; tex?: string; text?: string }
  | FigureBlock;

/**
 * A hand-drawn diagram as inline SVG markup: Lewis structures, orbital boxes,
 * energy-level diagrams, lab setups, particle pictures. Must have a viewBox; it
 * scales to the card width (cap it with `maxWidth`). Draw with `currentColor`
 * so it follows the light/dark theme, and use the classes `s-<color>` (stroke),
 * `f-<color>` (fill) or `t-<color>` (text) with blue | red | green | purple |
 * orange | teal | gray for the theme's accent colors. `<text>` defaults to the
 * app font in currentColor. No scripts, event handlers or external images.
 */
export interface FigureBlock {
  type: 'figure';
  svg: string;
  /** Short description for screen readers. */
  alt: string;
  /** What to notice (inline text). */
  caption?: string;
  /** Maximum rendered width in px (default: full card width, up to 520). */
  maxWidth?: number;
}

export interface CompareSide {
  title: string;
  /** 'bad' renders red with ✗, 'good' renders green with ✓, 'neutral' plain. */
  tone: 'good' | 'bad' | 'neutral';
  /** Display math lines (each rendered on its own line). */
  tex?: string[];
  code?: string;
  lang?: CodeLang;
  text?: string;
}

// ---------------------------------------------------------------------------
// Steps
// ---------------------------------------------------------------------------

/** A teaching card: explanation, examples, callouts. */
export interface ConceptStep {
  kind: 'concept';
  title: string;
  blocks: Block[];
}

interface QuestionBase {
  /** Optional stable id; defaults to `${lessonId}#${stepIndex}`. */
  id?: string;
  prompt: string;
  /** Optional display math shown under the prompt. */
  tex?: string;
  /** Optional graph shown with the prompt. */
  graph?: GraphBlock;
  /** A rotatable 3D plot under the prompt. */
  plot3d?: Plot3DBlock;
  /** Optional diagram shown with the prompt (a structure to name, a reaction to complete…). */
  figure?: FigureBlock;
  /** Optional code shown with the prompt. */
  code?: string;
  lang?: CodeLang;
  /** Shown if the learner taps "Hint" before answering. */
  hint?: string;
  /**
   * The "why" behind the correct answer. Shown after every answer, right or
   * wrong. Should teach (ideally walk through the solution), not just restate.
   */
  explanation: string;
}

export interface McqOption {
  text: string;
  correct?: boolean;
  /** Why this option is right or wrong. Shown after answering. */
  why?: string;
}

/** Multiple choice. Exactly one correct option unless `multi` is true. */
export interface McqQuestion extends QuestionBase {
  kind: 'mcq';
  options: McqOption[];
  multi?: boolean;
  /** Render option text as code. */
  codeOptions?: boolean;
}

export interface TrueFalseQuestion extends QuestionBase {
  kind: 'truefalse';
  answer: boolean;
}

/**
 * Fill in the blank. Put `___` (three underscores) in `template` where each
 * blank goes. The template is inline text (so `$…$` math works around the
 * blanks) unless `templateIsCode` is true. With a `wordBank`, learners tap chips
 * (chips are inline text, so `$\pi$` renders as math); otherwise they type, and
 * typed numeric answers are compared by value (0.5 = 1/2).
 */
export interface FillQuestion extends QuestionBase {
  kind: 'fill';
  template: string;
  templateIsCode?: boolean; // default false
  blanks: { answers: string[]; caseSensitive?: boolean }[];
  wordBank?: string[];
}

/** Put the lines in the right order (e.g. the steps of a solution). `lines` is the correct order. */
export interface OrderQuestion extends QuestionBase {
  kind: 'order';
  /** Inline text (use $…$ for math), or code when `linesAreCode`. */
  lines: string[];
  distractors?: string[];
  linesAreCode?: boolean; // default false
}

/** Find the mistake: tap the line of a worked solution where it first goes wrong. */
export interface ErrorQuestion extends QuestionBase {
  kind: 'error';
  /** The worked solution, one line per step (inline text, usually a single $…$). */
  lines: string[];
  /** 1-based line numbers containing the (first) mistake. Any one counts. */
  errorLines: number[];
}

/**
 * Type a number. `answer` is an exact expression in calculator syntax ("3/4",
 * "sqrt(2)/2", "2pi/3"); give several in an array when the answer is a set of
 * values (roots) — learners type them comma-separated in any order.
 * Exact forms must match; decimals are accepted when correctly rounded to at
 * least `minDecimals` (default 2) places, or within `tolerance` if given.
 */
export interface NumericQuestion extends QuestionBase {
  kind: 'numeric';
  answer: string | string[];
  /** TeX shown as the correct answer after answering (defaults to the answer). */
  answerTex?: string;
  tolerance?: number;
  minDecimals?: number;
  /** Shown before the input, e.g. "$x =$". Inline format. */
  label?: string;
  /** Shown after the input, e.g. "cm²". */
  unit?: string;
}

/**
 * Type an expression, e.g. a derivative. Checked by evaluating both at random
 * points, so any equivalent form is accepted (2x(x+1) = 2x^2 + 2x).
 */
export interface ExprQuestion extends QuestionBase {
  kind: 'expr';
  /** Reference answer in calculator syntax: "3x^2 + 2cos(x)". */
  answer: string;
  answerTex?: string;
  /** Variables the learner may use (default ['x']). */
  variables?: string[];
  /** Sample interval used for checking (default [-3, 3]); pick one inside the domain. */
  domain?: [number, number];
  /** Antiderivatives: accept any answer that differs by a constant ("+ C" optional). */
  upToConstant?: boolean;
  /** Shown before the input, e.g. "$f'(x) =$". Inline format. */
  label?: string;
}

export type QuestionStep =
  | McqQuestion
  | TrueFalseQuestion
  | FillQuestion
  | OrderQuestion
  | ErrorQuestion
  | NumericQuestion
  | ExprQuestion;

export type Step = ConceptStep | QuestionStep;

// ---------------------------------------------------------------------------
// Structure
// ---------------------------------------------------------------------------

export interface Lesson {
  /** Globally unique, kebab-case, prefixed with course: "calc1-chain-rule". */
  id: string;
  title: string;
  /** One-line description shown on the lesson card. */
  summary: string;
  /** Estimated minutes to complete. */
  minutes: number;
  /** What the learner will be able to do afterwards. */
  objectives: string[];
  steps: Step[];
  /** Bullet-point recap shown on the completion screen. */
  takeaways: string[];
  /** Further reading shown at the end of the lesson. */
  reading: ReadingRef[];
}

export interface Unit {
  /** Unique, kebab-case: "calc1-u01-limits". */
  id: string;
  title: string;
  description: string;
  /** A single emoji used as the unit badge. */
  icon: string;
  lessons: Lesson[];
}

export interface Course {
  id: CourseId;
  title: string;
  /** Short label for tabs and badges: "Algebra", "Calc I". */
  short: string;
  subtitle: string;
  description: string;
  units: Unit[];
}

/** Which course each course builds on (shown as a gentle "start there first" hint). */
export const COURSE_PREREQ: Partial<Record<CourseId, CourseId>> = {
  trig: 'algebra',
  calc1: 'trig',
  calc2: 'calc1',
  calc3: 'calc2',
  linalg: 'calc2',
  genchem: 'chem',
  orgo: 'genchem',
  discrete: 'algebra',
  stats: 'calc2',
  dsa: 'discrete',
  phys1: 'calc1',
};

// ---------------------------------------------------------------------------
// Reference material
// ---------------------------------------------------------------------------

export interface GlossaryEntry {
  /** kebab-case id used in [[id]] links, e.g. "chain-rule". */
  id: string;
  term: string;
  aliases?: string[];
  /** The course that introduces the term; 'all' for general vocabulary. */
  course: CourseId | 'all';
  /** e.g. "Functions", "Limits", "Derivatives", "Series". */
  category: string;
  /** One or two sentence definition (inline format). */
  short: string;
  /** Longer explanation, may include "\n\n" paragraph breaks. */
  long?: string;
  /** A formula or example, as display TeX. */
  tex?: string;
  /** Optional code example (e.g. how a game computes it). */
  example?: string;
  exampleLang?: CodeLang;
  /** Related glossary ids. */
  see?: string[];
  reading?: ReadingRef[];
}

export interface CheatSheet {
  id: string;
  title: string;
  course: CourseId;
  icon: string;
  description: string;
  sections: {
    title: string;
    items: { label: string; tex?: string; code?: string; lang?: CodeLang; text?: string }[];
  }[];
}
