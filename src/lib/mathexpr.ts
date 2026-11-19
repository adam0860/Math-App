/*
 * A small, safe math expression language used by graphs and answer checking.
 *
 *   parse('3x^2 + 2sin(x)')     → AST
 *   compile(ast)(env)           → number (NaN outside the domain)
 *   toTex(ast)                  → TeX for a live preview of what the learner typed
 *   equivalent(a, b, opts)      → do two expressions agree at random sample points?
 *
 * Syntax: + - * / ^ ! ( ) |x|, implicit multiplication (2x, x(x+1), 3sin x),
 * constants pi π e, functions sin cos tan sec csc cot arcsin arccos arctan
 * (asin…), sinh cosh tanh, ln, log (base 10), log_b(x), sqrt √ cbrt, abs, exp,
 * floor, ceil, root(x, n). Unicode − × · ÷ ² ³ θ are normalised.
 * Statistics: gamma(x), lgamma(x), erf(x), normpdf(z), normcdf(z) (standard
 * normal Φ), invnorm(p) (Φ⁻¹); nCr/nPr and n! also work for large n.
 */

export type Node =
  | { t: 'num'; v: number; s: string }
  | { t: 'var'; name: string }
  | { t: 'neg'; a: Node }
  | { t: 'bin'; op: '+' | '-' | '*' | '/'; a: Node; b: Node; implicit?: boolean }
  | { t: 'pow'; a: Node; b: Node }
  | { t: 'fact'; a: Node }
  | { t: 'call'; fn: string; args: Node[]; base?: Node };

const FUNCS: Record<string, { arity: number; f: (...a: number[]) => number }> = {
  sin: { arity: 1, f: Math.sin },
  cos: { arity: 1, f: Math.cos },
  tan: { arity: 1, f: Math.tan },
  sec: { arity: 1, f: (x) => 1 / Math.cos(x) },
  csc: { arity: 1, f: (x) => 1 / Math.sin(x) },
  cot: { arity: 1, f: (x) => Math.cos(x) / Math.sin(x) },
  arcsin: { arity: 1, f: Math.asin },
  arccos: { arity: 1, f: Math.acos },
  arctan: { arity: 1, f: Math.atan },
  arcsec: { arity: 1, f: (x) => Math.acos(1 / x) },
  arccsc: { arity: 1, f: (x) => Math.asin(1 / x) },
  arccot: { arity: 1, f: (x) => Math.PI / 2 - Math.atan(x) },
  sinh: { arity: 1, f: Math.sinh },
  cosh: { arity: 1, f: Math.cosh },
  tanh: { arity: 1, f: Math.tanh },
  ln: { arity: 1, f: Math.log },
  log: { arity: 1, f: Math.log10 },
  sqrt: { arity: 1, f: Math.sqrt },
  cbrt: { arity: 1, f: Math.cbrt },
  abs: { arity: 1, f: Math.abs },
  exp: { arity: 1, f: Math.exp },
  floor: { arity: 1, f: Math.floor },
  ceil: { arity: 1, f: Math.ceil },
  sign: { arity: 1, f: Math.sign },
  root: { arity: 2, f: (x, n) => nthRoot(x, n) },
  atan2: { arity: 2, f: Math.atan2 },
  min: { arity: 2, f: Math.min },
  max: { arity: 2, f: Math.max },
  nCr: { arity: 2, f: (n, r) => choose(n, r) },
  nPr: { arity: 2, f: (n, r) => (Number.isInteger(n) && Number.isInteger(r) && r >= 0 && r <= n ? Math.round(Math.exp(lgamma(n + 1) - lgamma(n - r + 1))) || factorial(n) / factorial(n - r) : NaN) },
  gamma: { arity: 1, f: (x) => gamma(x) },
  lgamma: { arity: 1, f: (x) => lgamma(x) },
  erf: { arity: 1, f: (x) => erf(x) },
  normpdf: { arity: 1, f: (z) => Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI) },
  normcdf: { arity: 1, f: (z) => 0.5 * (1 + erf(z / Math.SQRT2)) },
  invnorm: { arity: 1, f: (p) => invNorm(p) },
};
const ALIASES: Record<string, string> = { asin: 'arcsin', acos: 'arccos', atan: 'arctan', arcsine: 'arcsin', arccosine: 'arccos' };
const CONSTS: Record<string, number> = { pi: Math.PI, e: Math.E };
const GREEK = ['theta', 'alpha', 'beta', 'phi', 'omega', 'lambda', 'mu', 'sigma', 'tau', 'rho'];
// Longest names first so "arcsin" wins over "sin" and "sinh" over "sin".
const NAMES = [...Object.keys(FUNCS), ...Object.keys(ALIASES), 'pi', ...GREEK].sort((a, b) => b.length - a.length);

function nthRoot(x: number, n: number) {
  if (x < 0 && Number.isInteger(n) && n % 2 === 1) return -Math.pow(-x, 1 / n);
  return Math.pow(x, 1 / n);
}
function factorial(n: number): number {
  if (Number.isInteger(n)) {
    if (n < 0 || n > 170) return NaN;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }
  return n > -1 ? gamma(n + 1) : NaN; // continuous n! = Γ(n+1), so graphs of x! are smooth
}

// Lanczos approximation (g = 7, n = 9): ~15 significant digits.
const LANCZOS = [
  0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
  12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
];
function lgamma(x: number): number {
  if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lgamma(1 - x);
  x -= 1;
  let a = LANCZOS[0];
  const t = x + 7.5;
  for (let i = 1; i < 9; i++) a += LANCZOS[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}
function gamma(x: number): number {
  if (Number.isInteger(x) && x <= 0) return NaN;
  if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
  if (Number.isInteger(x) && x <= 171) return factorial(x - 1);
  return Math.exp(lgamma(x));
}
function choose(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r) || r < 0 || r > n) return Number.isInteger(r) && r > n && n >= 0 ? 0 : NaN;
  if (n <= 170) return factorial(n) / (factorial(r) * factorial(n - r));
  const v = Math.exp(lgamma(n + 1) - lgamma(r + 1) - lgamma(n - r + 1));
  return v < 2 ** 53 ? Math.round(v) : v;
}
// erf: Maclaurin series for |x| < 2.5, erfc continued fraction beyond (~1e-15 relative).
function erf(x: number): number {
  const ax = Math.abs(x);
  if (ax < 2.5) {
    // Maclaurin series: converges fast here.
    let sum = x, term = x;
    for (let n = 1; n < 100; n++) {
      term *= (-x * x) / n;
      const add = term / (2 * n + 1);
      sum += add;
      if (Math.abs(add) < 1e-17 * Math.abs(sum)) break;
    }
    return (2 / Math.sqrt(Math.PI)) * sum;
  }
  // erfc continued fraction (Lentz) for large |x|.
  let f = ax, C = ax, D = 0;
  for (let n = 1; n < 200; n++) {
    const an = n / 2;
    D = ax + an * D;
    D = D === 0 ? 1e-300 : 1 / D;
    C = ax + an / C;
    const delta = C * D;
    f *= delta;
    if (Math.abs(delta - 1) < 1e-16) break;
  }
  const erfc = Math.exp(-ax * ax) / (f * Math.sqrt(Math.PI));
  return x >= 0 ? 1 - erfc : erfc - 1;
}
// Inverse standard normal CDF (Acklam's rational approximation + one Halley step): ~1e-15.
function invNorm(p: number): number {
  if (!(p > 0 && p < 1)) return p === 0 ? -Infinity : p === 1 ? Infinity : NaN;
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
  const pl = 0.02425;
  let x: number;
  if (p < pl) {
    const q = Math.sqrt(-2 * Math.log(p));
    x = (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  } else if (p <= 1 - pl) {
    const q = p - 0.5, r = q * q;
    x = ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  } else {
    const q = Math.sqrt(-2 * Math.log(1 - p));
    x = -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  const e = 0.5 * (1 + erf(x / Math.SQRT2)) - p;
  const u = e * Math.sqrt(2 * Math.PI) * Math.exp((x * x) / 2);
  return x - u / (1 + (x * u) / 2);
}

export class ParseError extends Error {}

type Tok = { k: 'num'; v: string } | { k: 'id'; v: string } | { k: 'op'; v: string };

export function normalizeInput(src: string): string {
  return src
    .replace(/[−–]/g, '-')
    .replace(/[×·∙⋅]/g, '*')
    .replace(/÷/g, '/')
    .replace(/°/g, '') // "30°" in a degree-valued answer means 30
    .replace(/π/g, 'pi')
    .replace(/θ/g, 'theta')
    .replace(/√/g, 'sqrt')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/\*\*/g, '^')
    .replace(/\[/g, '(')
    .replace(/\]/g, ')')
    .replace(/\{/g, '(')
    .replace(/\}/g, ')');
}

function tokenize(src: string): Tok[] {
  const s = normalizeInput(src);
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    if (/[0-9.]/.test(c)) {
      const m = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i));
      if (!m) throw new ParseError(`Unexpected "${c}"`);
      out.push({ k: 'num', v: m[1] });
      i += m[1].length;
      continue;
    }
    if (/[a-zA-Z_]/.test(c)) {
      const rest = s.slice(i);
      if (/^log_/.test(rest)) {
        out.push({ k: 'id', v: 'log_' });
        i += 4;
        continue;
      }
      const name = NAMES.find((n) => rest.startsWith(n));
      if (name) {
        out.push({ k: 'id', v: ALIASES[name] ?? name });
        i += name.length;
        continue;
      }
      if (c === '_') throw new ParseError('Unexpected "_"');
      out.push({ k: 'id', v: c }); // single-letter variable or e
      i++;
      continue;
    }
    if ('+-*/^()!|,'.includes(c)) {
      out.push({ k: 'op', v: c });
      i++;
      continue;
    }
    throw new ParseError(`Unexpected "${c}"`);
  }
  return out;
}

export function parse(src: string): Node {
  const toks = tokenize(src);
  if (toks.length === 0) throw new ParseError('Empty expression');
  let pos = 0;
  let absDepth = 0;
  const peek = () => toks[pos];
  const isOp = (v: string) => peek()?.k === 'op' && peek().v === v;
  const expectOp = (v: string) => {
    if (!isOp(v)) throw new ParseError(`Expected "${v}"`);
    pos++;
  };

  function sum(): Node {
    let a = product();
    while (isOp('+') || isOp('-')) {
      const op = toks[pos++].v as '+' | '-';
      a = { t: 'bin', op, a, b: product() };
    }
    return a;
  }
  // Can the next token start an implicitly multiplied factor?
  function startsFactor(): boolean {
    const t = peek();
    if (!t) return false;
    if (t.k === 'num' || t.k === 'id') return true;
    if (t.k === 'op' && t.v === '(') return true;
    // "|" opens an absolute value only when we are not inside one waiting to close it.
    if (t.k === 'op' && t.v === '|') return absDepth === 0;
    return false;
  }
  function product(): Node {
    let a = unary();
    for (;;) {
      if (isOp('*') || isOp('/')) {
        const op = toks[pos++].v as '*' | '/';
        a = { t: 'bin', op, a, b: unary() };
      } else if (startsFactor()) {
        a = { t: 'bin', op: '*', a, b: power(), implicit: true };
      } else break;
    }
    return a;
  }
  function unary(): Node {
    if (isOp('-')) {
      pos++;
      return { t: 'neg', a: unary() };
    }
    if (isOp('+')) {
      pos++;
      return unary();
    }
    return power();
  }
  function power(): Node {
    const base = postfix();
    if (isOp('^')) {
      pos++;
      return { t: 'pow', a: base, b: unary() };
    }
    return base;
  }
  function postfix(): Node {
    let a = primary();
    while (isOp('!')) {
      pos++;
      a = { t: 'fact', a };
    }
    return a;
  }
  // Argument of a function written without parentheses: "sin x", "sin 2x", "ln x^2".
  function bareArg(): Node {
    let a = power();
    while (peek() && (peek().k === 'id' && !FUNCS[peek().v] && peek().v !== 'log_')) {
      a = { t: 'bin', op: '*', a, b: power(), implicit: true };
    }
    return a;
  }
  function primary(): Node {
    const t = peek();
    if (!t) throw new ParseError('Unexpected end of expression');
    if (t.k === 'num') {
      pos++;
      return { t: 'num', v: Number(t.v), s: t.v };
    }
    if (t.k === 'op' && t.v === '(') {
      pos++;
      const e = sum();
      expectOp(')');
      return e;
    }
    if (t.k === 'op' && t.v === '|') {
      pos++;
      absDepth++;
      const e = sum();
      absDepth--;
      expectOp('|');
      return { t: 'call', fn: 'abs', args: [e] };
    }
    if (t.k === 'id') {
      pos++;
      if (t.v === 'log_') {
        const base = primary();
        expectOp('(');
        const arg = sum();
        expectOp(')');
        return { t: 'call', fn: 'log', args: [arg], base };
      }
      const fn = FUNCS[t.v];
      if (fn) {
        // sin^2(x) means (sin x)^2
        let exponent: Node | null = null;
        if (isOp('^')) {
          pos++;
          exponent = unary();
        }
        let args: Node[];
        if (isOp('(')) {
          pos++;
          args = [sum()];
          while (isOp(',')) {
            pos++;
            args.push(sum());
          }
          expectOp(')');
        } else {
          if (fn.arity !== 1) throw new ParseError(`${t.v} needs parentheses`);
          args = [bareArg()];
        }
        if (args.length !== fn.arity) throw new ParseError(`${t.v} takes ${fn.arity} argument${fn.arity > 1 ? 's' : ''}`);
        const call: Node = { t: 'call', fn: t.v, args };
        return exponent ? { t: 'pow', a: call, b: exponent } : call;
      }
      return { t: 'var', name: t.v };
    }
    throw new ParseError(`Unexpected "${t.v}"`);
  }

  const result = sum();
  if (pos < toks.length) throw new ParseError(`Unexpected "${toks[pos].v}"`);
  return result;
}

export type Env = Record<string, number>;
export type Compiled = (env: Env) => number;

export function compile(node: Node): Compiled {
  switch (node.t) {
    case 'num':
      return () => node.v;
    case 'var': {
      const name = node.name;
      if (name in CONSTS) {
        const c = CONSTS[name];
        return (env) => (name in env ? env[name] : c);
      }
      return (env) => {
        const v = env[name];
        if (v === undefined) throw new ParseError(`Unknown variable "${name}"`);
        return v;
      };
    }
    case 'neg': {
      const a = compile(node.a);
      return (env) => -a(env);
    }
    case 'bin': {
      const a = compile(node.a);
      const b = compile(node.b);
      switch (node.op) {
        case '+':
          return (env) => a(env) + b(env);
        case '-':
          return (env) => a(env) - b(env);
        case '*':
          return (env) => a(env) * b(env);
        case '/':
          return (env) => a(env) / b(env);
      }
      break;
    }
    case 'pow': {
      const a = compile(node.a);
      const b = compile(node.b);
      // Real odd roots of negatives: (-8)^(1/3) = -2, as students expect.
      const oddRoot = rationalOddDenominator(node.b);
      return (env) => {
        const x = a(env);
        const y = b(env);
        if (x < 0 && oddRoot) {
          const r = Math.pow(-x, y);
          return oddRoot.numeratorOdd ? -r : r;
        }
        return Math.pow(x, y);
      };
    }
    case 'fact': {
      const a = compile(node.a);
      return (env) => factorial(a(env));
    }
    case 'call': {
      const args = node.args.map(compile);
      if (node.base) {
        const base = compile(node.base);
        const arg = args[0];
        return (env) => Math.log(arg(env)) / Math.log(base(env));
      }
      const f = FUNCS[node.fn].f;
      if (args.length === 1) {
        const a0 = args[0];
        return (env) => f(a0(env));
      }
      return (env) => f(...args.map((g) => g(env)));
    }
  }
  throw new ParseError('Bad expression');
}

/** For exponents written as p/q with odd q (1/3, 2/3, 5/3) return parity info. */
function rationalOddDenominator(n: Node): { numeratorOdd: boolean } | null {
  if (n.t === 'bin' && n.op === '/' && n.a.t === 'num' && n.b.t === 'num') {
    const p = n.a.v;
    const q = n.b.v;
    if (Number.isInteger(p) && Number.isInteger(q) && q % 2 === 1) return { numeratorOdd: p % 2 === 1 };
  }
  if (n.t === 'neg') return rationalOddDenominator(n.a);
  return null;
}

/** Variables (excluding constants) used by an expression. */
export function variablesOf(node: Node, out = new Set<string>()): Set<string> {
  switch (node.t) {
    case 'var':
      if (!(node.name in CONSTS)) out.add(node.name);
      break;
    case 'neg':
    case 'fact':
      variablesOf(node.a, out);
      break;
    case 'bin':
    case 'pow':
      variablesOf(node.a, out);
      variablesOf(node.b, out);
      break;
    case 'call':
      node.args.forEach((a) => variablesOf(a, out));
      if (node.base) variablesOf(node.base, out);
      break;
  }
  return out;
}

const cache = new Map<string, Compiled | null>();
/** Parse + compile with caching. Returns null for invalid input. */
export function compileExpr(src: string): Compiled | null {
  if (cache.has(src)) return cache.get(src)!;
  let c: Compiled | null = null;
  try {
    c = compile(parse(src));
  } catch {
    c = null;
  }
  cache.set(src, c);
  return c;
}

/** Evaluate a constant expression (no variables). NaN when invalid. */
export function evalConst(src: string, env: Env = {}): number {
  try {
    return compile(parse(src))(env);
  } catch {
    return NaN;
  }
}

// ---------------------------------------------------------------------------
// TeX rendering of a parsed expression (live preview of typed answers)
// ---------------------------------------------------------------------------

const PREC = { sum: 1, prod: 2, neg: 3, pow: 4, atom: 5 } as const;
function prec(n: Node): number {
  switch (n.t) {
    case 'bin':
      return n.op === '+' || n.op === '-' ? PREC.sum : PREC.prod;
    case 'neg':
      return PREC.neg;
    case 'pow':
      return PREC.pow;
    default:
      return PREC.atom;
  }
}
const TEX_FN: Record<string, string> = {
  sin: '\\sin', cos: '\\cos', tan: '\\tan', sec: '\\sec', csc: '\\csc', cot: '\\cot',
  arcsin: '\\arcsin', arccos: '\\arccos', arctan: '\\arctan', sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh',
  ln: '\\ln', log: '\\log', exp: '\\exp',
  gamma: '\\Gamma', lgamma: '\\ln\\Gamma', erf: '\\operatorname{erf}', normcdf: '\\Phi', normpdf: '\\varphi', invnorm: '\\Phi^{-1}',
};
const TEX_VAR: Record<string, string> = { pi: '\\pi', theta: '\\theta', alpha: '\\alpha', beta: '\\beta', phi: '\\phi', omega: '\\omega', lambda: '\\lambda', mu: '\\mu', sigma: '\\sigma', tau: '\\tau', rho: '\\rho' };

export function toTex(n: Node): string {
  const wrap = (c: Node, min: number) => (prec(c) < min ? `\\left(${toTex(c)}\\right)` : toTex(c));
  switch (n.t) {
    case 'num':
      return n.s;
    case 'var':
      return TEX_VAR[n.name] ?? n.name;
    case 'neg':
      return `-${wrap(n.a, PREC.neg)}`;
    case 'bin':
      if (n.op === '/') return `\\frac{${toTex(n.a)}}{${toTex(n.b)}}`;
      if (n.op === '*') {
        const left = wrap(n.a, PREC.prod);
        const right = wrap(n.b, PREC.prod + 1);
        // A visible dot between two numbers (2·3); juxtapose otherwise (2x, x\sin x).
        const needsDot = !n.implicit || /[0-9.]$/.test(left) && /^[0-9.]/.test(right);
        return needsDot ? `${left} \\cdot ${right}` : `${left}${/^[a-zA-Z]/.test(right) && /[a-zA-Z]$/.test(left) ? ' ' : ''}${right}`;
      }
      return `${toTex(n.a)} ${n.op} ${wrap(n.b, n.op === '-' ? PREC.sum + 1 : PREC.sum)}`;
    case 'pow':
      return `{${wrap(n.a, PREC.atom)}}^{${toTex(n.b)}}`;
    case 'fact':
      return `${wrap(n.a, PREC.atom)}!`;
    case 'call': {
      if (n.base) return `\\log_{${toTex(n.base)}}\\left(${toTex(n.args[0])}\\right)`;
      if (n.fn === 'sqrt') return `\\sqrt{${toTex(n.args[0])}}`;
      if (n.fn === 'cbrt') return `\\sqrt[3]{${toTex(n.args[0])}}`;
      if (n.fn === 'root') return `\\sqrt[${toTex(n.args[1])}]{${toTex(n.args[0])}}`;
      if (n.fn === 'abs') return `\\left|${toTex(n.args[0])}\\right|`;
      const name = TEX_FN[n.fn] ?? `\\operatorname{${n.fn}}`;
      return `${name}\\left(${n.args.map(toTex).join(', ')}\\right)`;
    }
  }
}

// ---------------------------------------------------------------------------
// Answer checking
// ---------------------------------------------------------------------------

/** Take the right-hand side of "x = 3" or "f'(x) = 2x"; drop a trailing "+ C". */
export function cleanAnswer(src: string, opts: { dropConstant?: boolean } = {}): string {
  let s = src.trim();
  const eq = s.lastIndexOf('=');
  if (eq >= 0) s = s.slice(eq + 1);
  if (opts.dropConstant) s = s.replace(/\s*\+\s*[cC]\s*$/, '');
  return s.trim();
}

/** Split "2, -3" or "2 or -3" into separate answers. */
export function splitList(src: string): string[] {
  return src
    .split(/,|;|\bor\b|\band\b/)
    .map((s) => cleanAnswer(s))
    .filter((s) => s !== '');
}

function decimals(s: string): number | null {
  const m = /^\s*-?\d*\.(\d+)\s*$/.exec(s);
  return m ? m[1].length : null;
}

/**
 * Is the typed constant `input` an acceptable value for `answer`?
 * Exact forms (3/4, sqrt(2)/2, pi/3) must match to ~1e-9. A plain decimal is
 * accepted when it is the exact value correctly rounded to at least
 * `minDecimals` places (0.71 for √2/2), or within `tolerance` when given.
 */
/**
 * Typed scientific notation for numeric answers: "6.02e23", "4.0E-11", "1.5e+3"
 * become "6.02*10^(23)". Only a digit (or decimal point) directly followed by
 * e/E and an integer exponent is rewritten, so "e^2", "2e^x" and "e - 1" keep
 * meaning Euler's number.
 */
export function expandSciNotation(src: string): string {
  return src.replace(/([0-9.])[eE]([+-]?\d+)(?![\d.]|\s*[\^!(])/g, '$1*10^($2)');
}

export function numericMatches(input: string, answer: string, opts: { tolerance?: number; minDecimals?: number } = {}): boolean {
  const target = evalConst(answer);
  let got: number;
  try {
    const node = parse(expandSciNotation(cleanAnswer(input)));
    if (variablesOf(node).size > 0) return false;
    got = compile(node)({});
  } catch {
    return false;
  }
  if (!Number.isFinite(got) || !Number.isFinite(target)) return false;
  if (Math.abs(got - target) <= 1e-9 * Math.max(1, Math.abs(target))) return true;
  if (opts.tolerance !== undefined) return Math.abs(got - target) <= opts.tolerance + 1e-12;
  const d = decimals(cleanAnswer(input));
  const minD = opts.minDecimals ?? 2;
  if (d !== null && d >= minD) {
    const f = Math.pow(10, d);
    return Math.abs(got - Math.round(target * f) / f) < 0.5 / f / 10;
  }
  return false;
}

/** Compare unordered lists of values ("2, -3" vs ["-3", "2"]). */
export function numericListMatches(input: string, answers: string[], opts: { tolerance?: number; minDecimals?: number } = {}): boolean {
  const parts = splitList(input);
  if (parts.length !== answers.length) return false;
  const left = [...answers];
  for (const p of parts) {
    const i = left.findIndex((a) => numericMatches(p, a, opts));
    if (i < 0) return false;
    left.splice(i, 1);
  }
  return true;
}

export interface EquivOptions {
  variables?: string[];
  /** Sampling interval for every variable. Default [-3, 3]. */
  domain?: [number, number];
  /** Antiderivatives: accept answers that differ by a constant. */
  upToConstant?: boolean;
}

/** Seeded RNG so the same check gives the same verdict. */
function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
  };
}

export type EquivResult = { ok: true } | { ok: false; reason: 'parse' | 'vars' | 'different' | 'undefined'; message?: string };

export function equivalent(input: string, answer: string, opts: EquivOptions = {}): EquivResult {
  const vars = opts.variables ?? ['x'];
  const [lo, hi] = opts.domain ?? [-3, 3];
  let user: Compiled;
  let ref: Compiled;
  try {
    const node = parse(cleanAnswer(input, { dropConstant: opts.upToConstant }));
    const extra = [...variablesOf(node)].filter((v) => !vars.includes(v));
    if (extra.length) return { ok: false, reason: 'vars', message: `Unexpected variable${extra.length > 1 ? 's' : ''}: ${extra.join(', ')}` };
    user = compile(node);
  } catch (e) {
    return { ok: false, reason: 'parse', message: (e as Error).message };
  }
  ref = compile(parse(answer));
  const rand = rng(12345);
  let valid = 0;
  let offset: number | null = null;
  for (let i = 0; i < 60 && valid < 12; i++) {
    const env: Env = {};
    for (const v of vars) env[v] = lo + (hi - lo) * rand();
    const a = ref(env);
    if (!Number.isFinite(a)) continue;
    const b = user(env);
    if (!Number.isFinite(b)) return { ok: false, reason: 'different' };
    let diff = b - a;
    if (opts.upToConstant) {
      if (offset === null) offset = diff;
      diff -= offset;
    }
    if (Math.abs(diff) > 1e-6 * Math.max(1, Math.abs(a), Math.abs(b))) return { ok: false, reason: 'different' };
    valid++;
  }
  return valid >= 4 ? { ok: true } : { ok: false, reason: 'undefined' };
}

/** Pretty TeX preview for typed input; null when it does not parse yet. */
export function previewTex(input: string): string | null {
  const s = input.trim();
  if (!s) return null;
  try {
    const eq = s.lastIndexOf('=');
    const lhs = eq >= 0 ? s.slice(0, eq).trim() : '';
    const node = parse(eq >= 0 ? s.slice(eq + 1) : s);
    return (lhs ? `${lhs.replace(/'/g, "'")} = ` : '') + toTex(node);
  } catch {
    return null;
  }
}
