import type { Lesson } from '../../types';

// @@FIGS@@
const FIG_PIPES =
  '<svg viewBox="0 0 520 262" xmlns="http://www.w3.org/2000/svg"><text x="130" y="20" font-size="14" font-weight="600" text-anchor="middle">Open at both ends</text><text x="390" y="20" font-size="14" font-weight="600" text-anchor="middle">Closed at one end</text><line x1="30" y1="62" x2="230" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="30" y1="106" x2="230" y2="106" stroke="currentColor" stroke-width="2.5"/><path d="M30.0 67.0 L34.0 67.0 L38.0 67.1 L42.0 67.3 L46.0 67.5 L50.0 67.8 L54.0 68.2 L58.0 68.6 L62.0 69.1 L66.0 69.6 L70.0 70.2 L74.0 70.9 L78.0 71.6 L82.0 72.4 L86.0 73.2 L90.0 74.0 L94.0 74.9 L98.0 75.8 L102.0 76.8 L106.0 77.7 L110.0 78.7 L114.0 79.8 L118.0 80.8 L122.0 81.9 L126.0 82.9 L130.0 84.0 L134.0 85.1 L138.0 86.1 L142.0 87.2 L146.0 88.2 L150.0 89.3 L154.0 90.3 L158.0 91.2 L162.0 92.2 L166.0 93.1 L170.0 94.0 L174.0 94.8 L178.0 95.6 L182.0 96.4 L186.0 97.1 L190.0 97.8 L194.0 98.4 L198.0 98.9 L202.0 99.4 L206.0 99.8 L210.0 100.2 L214.0 100.5 L218.0 100.7 L222.0 100.9 L226.0 101.0 L230.0 101.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M30.0 101.0 L34.0 101.0 L38.0 100.9 L42.0 100.7 L46.0 100.5 L50.0 100.2 L54.0 99.8 L58.0 99.4 L62.0 98.9 L66.0 98.4 L70.0 97.8 L74.0 97.1 L78.0 96.4 L82.0 95.6 L86.0 94.8 L90.0 94.0 L94.0 93.1 L98.0 92.2 L102.0 91.2 L106.0 90.3 L110.0 89.3 L114.0 88.2 L118.0 87.2 L122.0 86.1 L126.0 85.1 L130.0 84.0 L134.0 82.9 L138.0 81.9 L142.0 80.8 L146.0 79.8 L150.0 78.7 L154.0 77.7 L158.0 76.8 L162.0 75.8 L166.0 74.9 L170.0 74.0 L174.0 73.2 L178.0 72.4 L182.0 71.6 L186.0 70.9 L190.0 70.2 L194.0 69.6 L198.0 69.1 L202.0 68.6 L206.0 68.2 L210.0 67.8 L214.0 67.5 L218.0 67.3 L222.0 67.1 L226.0 67.0 L230.0 67.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2" stroke-dasharray="4 3"/><text x="130.0" y="122" font-size="11" text-anchor="middle" class="t-red">N</text><text x="30" y="52" font-size="13" font-weight="600">n = 1</text><text x="230" y="52" font-size="12" text-anchor="end" class="t-purple">L = λ/2</text><line x1="30" y1="170" x2="230" y2="170" stroke="currentColor" stroke-width="2.5"/><line x1="30" y1="214" x2="230" y2="214" stroke="currentColor" stroke-width="2.5"/><path d="M30.0 175.0 L34.0 175.1 L38.0 175.5 L42.0 176.2 L46.0 177.1 L50.0 178.2 L54.0 179.6 L58.0 181.2 L62.0 182.9 L66.0 184.8 L70.0 186.7 L74.0 188.8 L78.0 190.9 L82.0 193.1 L86.0 195.2 L90.0 197.3 L94.0 199.2 L98.0 201.1 L102.0 202.8 L106.0 204.4 L110.0 205.8 L114.0 206.9 L118.0 207.8 L122.0 208.5 L126.0 208.9 L130.0 209.0 L134.0 208.9 L138.0 208.5 L142.0 207.8 L146.0 206.9 L150.0 205.8 L154.0 204.4 L158.0 202.8 L162.0 201.1 L166.0 199.2 L170.0 197.3 L174.0 195.2 L178.0 193.1 L182.0 190.9 L186.0 188.8 L190.0 186.7 L194.0 184.8 L198.0 182.9 L202.0 181.2 L206.0 179.6 L210.0 178.2 L214.0 177.1 L218.0 176.2 L222.0 175.5 L226.0 175.1 L230.0 175.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M30.0 209.0 L34.0 208.9 L38.0 208.5 L42.0 207.8 L46.0 206.9 L50.0 205.8 L54.0 204.4 L58.0 202.8 L62.0 201.1 L66.0 199.2 L70.0 197.3 L74.0 195.2 L78.0 193.1 L82.0 190.9 L86.0 188.8 L90.0 186.7 L94.0 184.8 L98.0 182.9 L102.0 181.2 L106.0 179.6 L110.0 178.2 L114.0 177.1 L118.0 176.2 L122.0 175.5 L126.0 175.1 L130.0 175.0 L134.0 175.1 L138.0 175.5 L142.0 176.2 L146.0 177.1 L150.0 178.2 L154.0 179.6 L158.0 181.2 L162.0 182.9 L166.0 184.8 L170.0 186.7 L174.0 188.8 L178.0 190.9 L182.0 193.1 L186.0 195.2 L190.0 197.3 L194.0 199.2 L198.0 201.1 L202.0 202.8 L206.0 204.4 L210.0 205.8 L214.0 206.9 L218.0 207.8 L222.0 208.5 L226.0 208.9 L230.0 209.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2" stroke-dasharray="4 3"/><text x="80.0" y="230" font-size="11" text-anchor="middle" class="t-red">N</text><text x="180.0" y="230" font-size="11" text-anchor="middle" class="t-red">N</text><text x="30" y="160" font-size="13" font-weight="600">n = 2</text><text x="230" y="160" font-size="12" text-anchor="end" class="t-purple">L = λ</text><line x1="290" y1="62" x2="490" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="290" y1="106" x2="490" y2="106" stroke="currentColor" stroke-width="2.5"/><line x1="490" y1="61" x2="490" y2="107" stroke="currentColor" stroke-width="5"/><path d="M290.0 67.0 L294.0 67.0 L298.0 67.0 L302.0 67.1 L306.0 67.1 L310.0 67.2 L314.0 67.3 L318.0 67.4 L322.0 67.5 L326.0 67.7 L330.0 67.8 L334.0 68.0 L338.0 68.2 L342.0 68.4 L346.0 68.6 L350.0 68.9 L354.0 69.1 L358.0 69.4 L362.0 69.6 L366.0 69.9 L370.0 70.2 L374.0 70.6 L378.0 70.9 L382.0 71.2 L386.0 71.6 L390.0 72.0 L394.0 72.4 L398.0 72.8 L402.0 73.2 L406.0 73.6 L410.0 74.0 L414.0 74.4 L418.0 74.9 L422.0 75.3 L426.0 75.8 L430.0 76.3 L434.0 76.8 L438.0 77.2 L442.0 77.7 L446.0 78.2 L450.0 78.7 L454.0 79.3 L458.0 79.8 L462.0 80.3 L466.0 80.8 L470.0 81.3 L474.0 81.9 L478.0 82.4 L482.0 82.9 L486.0 83.5 L490.0 84.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M290.0 101.0 L294.0 101.0 L298.0 101.0 L302.0 100.9 L306.0 100.9 L310.0 100.8 L314.0 100.7 L318.0 100.6 L322.0 100.5 L326.0 100.3 L330.0 100.2 L334.0 100.0 L338.0 99.8 L342.0 99.6 L346.0 99.4 L350.0 99.1 L354.0 98.9 L358.0 98.6 L362.0 98.4 L366.0 98.1 L370.0 97.8 L374.0 97.4 L378.0 97.1 L382.0 96.8 L386.0 96.4 L390.0 96.0 L394.0 95.6 L398.0 95.2 L402.0 94.8 L406.0 94.4 L410.0 94.0 L414.0 93.6 L418.0 93.1 L422.0 92.7 L426.0 92.2 L430.0 91.7 L434.0 91.2 L438.0 90.8 L442.0 90.3 L446.0 89.8 L450.0 89.3 L454.0 88.7 L458.0 88.2 L462.0 87.7 L466.0 87.2 L470.0 86.7 L474.0 86.1 L478.0 85.6 L482.0 85.1 L486.0 84.5 L490.0 84.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2" stroke-dasharray="4 3"/><text x="490.0" y="122" font-size="11" text-anchor="middle" class="t-red">N</text><text x="290" y="52" font-size="13" font-weight="600">n = 1</text><text x="490" y="52" font-size="12" text-anchor="end" class="t-purple">L = λ/4</text><line x1="290" y1="170" x2="490" y2="170" stroke="currentColor" stroke-width="2.5"/><line x1="290" y1="214" x2="490" y2="214" stroke="currentColor" stroke-width="2.5"/><line x1="490" y1="169" x2="490" y2="215" stroke="currentColor" stroke-width="5"/><path d="M290.0 175.0 L294.0 175.1 L298.0 175.3 L302.0 175.7 L306.0 176.2 L310.0 176.9 L314.0 177.6 L318.0 178.6 L322.0 179.6 L326.0 180.8 L330.0 182.0 L334.0 183.3 L338.0 184.8 L342.0 186.2 L346.0 187.8 L350.0 189.3 L354.0 190.9 L358.0 192.5 L362.0 194.1 L366.0 195.7 L370.0 197.3 L374.0 198.8 L378.0 200.2 L382.0 201.6 L386.0 202.8 L390.0 204.0 L394.0 205.1 L398.0 206.1 L402.0 206.9 L406.0 207.6 L410.0 208.2 L414.0 208.6 L418.0 208.9 L422.0 209.0 L426.0 209.0 L430.0 208.8 L434.0 208.5 L438.0 208.0 L442.0 207.4 L446.0 206.6 L450.0 205.8 L454.0 204.8 L458.0 203.6 L462.0 202.4 L466.0 201.1 L470.0 199.7 L474.0 198.3 L478.0 196.7 L482.0 195.2 L486.0 193.6 L490.0 192.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><path d="M290.0 209.0 L294.0 208.9 L298.0 208.7 L302.0 208.3 L306.0 207.8 L310.0 207.1 L314.0 206.4 L318.0 205.4 L322.0 204.4 L326.0 203.2 L330.0 202.0 L334.0 200.7 L338.0 199.2 L342.0 197.8 L346.0 196.2 L350.0 194.7 L354.0 193.1 L358.0 191.5 L362.0 189.9 L366.0 188.3 L370.0 186.7 L374.0 185.2 L378.0 183.8 L382.0 182.4 L386.0 181.2 L390.0 180.0 L394.0 178.9 L398.0 177.9 L402.0 177.1 L406.0 176.4 L410.0 175.8 L414.0 175.4 L418.0 175.1 L422.0 175.0 L426.0 175.0 L430.0 175.2 L434.0 175.5 L438.0 176.0 L442.0 176.6 L446.0 177.4 L450.0 178.2 L454.0 179.2 L458.0 180.4 L462.0 181.6 L466.0 182.9 L470.0 184.3 L474.0 185.7 L478.0 187.3 L482.0 188.8 L486.0 190.4 L490.0 192.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2" stroke-dasharray="4 3"/><text x="356.7" y="230" font-size="11" text-anchor="middle" class="t-red">N</text><text x="490.0" y="230" font-size="11" text-anchor="middle" class="t-red">N</text><text x="290" y="160" font-size="13" font-weight="600">n = 3</text><text x="490" y="160" font-size="12" text-anchor="end" class="t-purple">L = 3λ/4</text><text x="260" y="240" font-size="11.5" text-anchor="middle" class="t-gray">blue: displacement amplitude of the air · N: displacement node</text><text x="260" y="256" font-size="11.5" text-anchor="middle" class="t-gray">open end: displacement antinode · closed end: displacement node</text></svg>';
// @@END@@

/** Wavefronts emitted at t = 0, 1, …, 7 s by a source moving at m·v (v = 1). Not-yet-emitted fronts sit at the source. */
const WAVEFRONTS = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
  x: `min(s, ${i})*m - 5 + max(s - ${i}, 0)*cos(t)`,
  y: `max(s - ${i}, 0)*sin(t)`,
  t: [0, '2pi'] as [number, string],
  color: 'blue' as const,
}));

export const lesson: Lesson = {
  id: 'phys-standing-waves-sound',
  title: 'Standing Waves and Sound',
  summary: 'Waves add. Superposition gives interference, standing waves and the harmonics of strings and pipes; then sound itself: its speed, intensity and decibels, beats, and the Doppler effect your game\'s audio engine computes every frame.',
  minutes: 22,
  objectives: [
    'Apply the superposition principle and find the amplitude of two interfering waves from their phase difference',
    'Derive the standing wave $y = 2A\\sin kx\\cos\\omega t$, locate its nodes and antinodes, and find the harmonics of strings and of open and closed pipes',
    'Compute sound intensity from power and distance, and convert between intensity and decibels',
    'Explain beats and compute a beat frequency',
    'Derive and apply the Doppler formula $f\' = f\\,\\frac{v + v_o}{v - v_s}$ with correct signs',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Superposition: waves add',
      blocks: [
        {
          type: 'p',
          text: 'When two waves meet in the same medium, the displacement at each point is simply the **sum** of the displacements each wave would cause alone. This is the principle of superposition. It holds because the wave equation is linear: if $y_1$ and $y_2$ both solve $\\partial_x^2 y = \\frac{1}{v^2}\\partial_t^2 y$, so does $y_1 + y_2$ (derivatives of a sum are sums of derivatives). It is the same [[superposition-principle]] you met for linear maps.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-1.5, 2.5],
          height: 260,
          functions: [
            { expr: 'exp(-(x + 5 - 2s)^2/0.5)', label: 'pulse 1 (moving right)', color: 'red', dashed: true },
            { expr: 'b*exp(-(x - 5 + 2s)^2/0.5)', label: 'pulse 2 (moving left)', color: 'green', dashed: true },
            { expr: 'exp(-(x + 5 - 2s)^2/0.5) + b*exp(-(x - 5 + 2s)^2/0.5)', label: 'the string: their sum', color: 'blue' },
          ],
          sliders: [
            { name: 's', min: 0, max: 5, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.25 },
            { name: 'b', min: -1, max: 1, step: 0.1, value: 1, label: 'height of pulse 2' },
          ],
          caption: 'Press ▶. At $t = 2.5\\,\\text{s}$ the pulses overlap exactly. With height $+1$ the string bulges to $2$ (constructive interference); set the height to $-1$ and the string goes momentarily **flat** (destructive interference). Either way, both pulses then emerge unchanged: waves pass through each other.',
        },
        {
          type: 'p',
          text: 'The most useful case is two sinusoidal waves with the same $k$ and $\\omega$ traveling the same way, offset by a phase difference $\\phi$. This is [[phys-interference|interference]]:',
        },
        {
          type: 'derivation',
          title: 'Adding two equal waves with phase difference $\\phi$',
          steps: [
            { tex: 'y = A\\sin(kx - \\omega t) + A\\sin(kx - \\omega t + \\phi)', why: 'Superposition: add the displacements.' },
            { tex: '\\sin a + \\sin b = 2\\sin\\frac{a + b}{2}\\cos\\frac{a - b}{2}', why: 'The sum-to-product identity from trigonometry.' },
            { tex: 'y = \\left[2A\\cos\\frac{\\phi}{2}\\right]\\sin\\!\\left(kx - \\omega t + \\frac{\\phi}{2}\\right)', why: 'With $a = kx - \\omega t$ and $b = a + \\phi$: $\\frac{a + b}{2} = kx - \\omega t + \\frac{\\phi}{2}$ and $\\frac{a - b}{2} = -\\frac{\\phi}{2}$; cosine is even.' },
          ],
          result: 'The sum is a wave with the same $k$ and $\\omega$ and amplitude $2A|\\cos(\\phi/2)|$: $2A$ when in phase ($\\phi = 0$), zero when exactly out of phase ($\\phi = \\pi$).',
        },
        {
          type: 'graph',
          x: [0, 12.6],
          y: [-2.3, 2.3],
          height: 240,
          functions: [
            { expr: 'sin(x - s)', label: 'wave 1', color: 'gray', dashed: true },
            { expr: 'sin(x - s + p)', label: 'wave 2', color: 'teal', dashed: true },
            { expr: 'sin(x - s) + sin(x - s + p)', label: 'sum', color: 'blue' },
          ],
          sliders: [
            { name: 'p', min: 0, max: 6.28, step: 0.01, value: 1, label: 'phase difference $\\phi$ (rad)' },
            { name: 's', min: 0, max: 6.28, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.5, loop: true },
          ],
          readouts: [{ label: 'amplitude $2A|\\cos(\\phi/2)| =$', expr: '2abs(cos(p/2))', digits: 3 }],
          caption: 'Drag $\\phi$ from $0$ to $\\pi$: the blue sum shrinks from amplitude $2$ to nothing. Noise-cancelling headphones do exactly this: a microphone hears the noise and the speaker plays it back with $\\phi = \\pi$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Mixing audio is superposition',
          text: 'An audio engine mixes voices by adding their sample values: `out[i] = gunshot[i] + music[i] + footsteps[i]`. Two identical sounds started in phase add to double the amplitude (four times the power), which is why mixers apply gain and limiters to avoid clipping past $\\pm 1.0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Two sinusoidal waves on the same string have the same wavelength and frequency and amplitude $5.0\\,\\text{mm}$ each. They travel in the same direction with a phase difference of $\\pi/2$. What is the amplitude of the resulting wave? Give 3 significant figures.',
      label: '$A_{\\text{res}} =$',
      unit: 'mm',
      answer: '2*5*cos(pi/4)',
      answerTex: '7.07\\,\\text{mm}',
      tolerance: 0.04,
      hint: 'Use $A_{\\text{res}} = 2A|\\cos(\\phi/2)|$.',
      explanation: '$A_{\\text{res}} = 2(5.0\\,\\text{mm})\\cos(\\pi/4) = 10\\,\\text{mm} \\times 0.707 = 7.07\\,\\text{mm}$. Amplitudes don\'t simply add ($10\\,\\text{mm}$) unless the waves are in phase. Using $\\cos\\phi$ instead of $\\cos(\\phi/2)$ would give $0$, which is the result for $\\phi = \\pi$, not $\\pi/2$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Standing waves',
      blocks: [
        {
          type: 'p',
          text: 'When a wave hits the fixed end of a string, it reflects **inverted** (the C++ simulation in the last lesson showed exactly that). A steady wave sent down a string with two fixed ends therefore keeps meeting its own reflection: two identical waves moving in **opposite** directions. Their sum does not travel at all.',
        },
        {
          type: 'derivation',
          title: 'Two opposite waves make a standing wave',
          steps: [
            { tex: 'y = A\\sin(kx - \\omega t) + A\\sin(kx + \\omega t)', why: 'One wave toward $+x$, one toward $-x$, same $A$, $k$, $\\omega$.' },
            { tex: '= 2A\\sin\\frac{(kx - \\omega t) + (kx + \\omega t)}{2}\\cos\\frac{(kx - \\omega t) - (kx + \\omega t)}{2}', why: 'Sum-to-product identity again.' },
            { tex: '= 2A\\sin(kx)\\cos(-\\omega t) = 2A\\sin(kx)\\cos(\\omega t)', why: 'Simplify the half-sum and half-difference; cosine is even.' },
          ],
          result: 'A [[phys-standing-wave|standing wave]]: $y = \\big[2A\\sin kx\\big]\\cos\\omega t$. Space and time have separated. Every point oscillates in step with the factor $\\cos\\omega t$, with its own amplitude $2A|\\sin kx|$.',
        },
        {
          type: 'list',
          items: [
            '**Nodes** never move: $\\sin kx = 0$, so $kx = n\\pi$ and $x = 0, \\frac{\\lambda}{2}, \\lambda, \\frac{3\\lambda}{2}, \\dots$',
            '**Antinodes** swing with the full amplitude $2A$: $\\sin kx = \\pm 1$, so $x = \\frac{\\lambda}{4}, \\frac{3\\lambda}{4}, \\dots$',
            'Adjacent nodes are $\\lambda/2$ apart, with an antinode halfway between ([[phys-node-antinode|nodes and antinodes]]).',
          ],
        },
        {
          type: 'graph',
          x: [0, 9.42],
          y: [-2.4, 2.4],
          height: 260,
          functions: [
            { expr: 'sin(x - s)', label: 'wave toward $+x$', color: 'gray', dashed: true },
            { expr: 'sin(x + s)', label: 'wave toward $-x$', color: 'teal', dashed: true },
            { expr: '2sin(x)cos(s)', label: 'sum: standing wave', color: 'blue' },
          ],
          points: [
            { x: 3.1416, y: 0, label: 'node', color: 'red' },
            { x: 6.2832, y: 0, label: 'node', color: 'red' },
            { x: 1.5708, y: '2cos(s)', label: 'antinode', color: 'purple' },
          ],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.5, loop: true }],
          caption: 'Press ▶. The two dashed traveling waves slide through each other, but their blue sum only breathes up and down. The red nodes sit still forever; the purple antinode swings between $+2A$ and $-2A$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why no energy flows',
          text: 'Each traveling component carries power $P_{\\text{avg}}$, but in opposite directions, so the net energy flow is zero on average. Energy sloshes back and forth between kinetic (when the string is flat and fastest) and potential (when it is frozen at maximum stretch) within each half-wavelength loop, but it cannot cross a node, where the string never moves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'In a standing wave on a string, every point between two adjacent nodes oscillates with the same amplitude, $2A$.',
      answer: false,
      explanation: 'False. All points share the same frequency and are in step (they cross zero together), but the amplitude at position $x$ is $2A|\\sin kx|$: zero at the nodes, $2A$ only at the antinode halfway between, and in between everywhere else. That is why a vibrating guitar string looks like a blurred lens shape.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Harmonics of a string fixed at both ends',
      blocks: [
        {
          type: 'p',
          text: 'A guitar string is tied down at $x = 0$ and $x = L$, so both ends must be nodes. The standing wave $2A\\sin(kx)\\cos(\\omega t)$ already has a node at $x = 0$. The other end needs $\\sin kL = 0$, so only special wavelengths fit: a whole number of half-wavelengths must fill the string.',
        },
        {
          type: 'derivation',
          title: 'The allowed frequencies',
          steps: [
            { tex: '\\sin(kL) = 0 \\implies kL = n\\pi, \\quad n = 1, 2, 3, \\dots', why: 'The sine is zero only at integer multiples of $\\pi$ ($n = 0$ would mean no wave at all).' },
            { tex: '\\frac{2\\pi}{\\lambda_n}L = n\\pi \\implies \\lambda_n = \\frac{2L}{n}', why: 'Substitute $k = 2\\pi/\\lambda$. Equivalently $L = n\\,\\frac{\\lambda_n}{2}$: $n$ loops fit on the string.' },
            { tex: 'f_n = \\frac{v}{\\lambda_n} = n\\,\\frac{v}{2L} = \\frac{n}{2L}\\sqrt{\\frac{F_T}{\\mu}} = nf_1', why: 'The wave speed is fixed by the string, $v = \\sqrt{F_T/\\mu}$, so each allowed wavelength gives one allowed frequency.' },
          ],
          result: 'These are the [[phys-harmonic|harmonics]]: the fundamental $f_1 = \\frac{v}{2L}$ and its integer multiples $2f_1, 3f_1, \\dots$',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [-1.4, 1.4],
          height: 240,
          functions: [
            { expr: 'sin(n*pi*x)cos(pi*n*s/2)', label: 'string', color: 'blue' },
            { expr: 'sin(n*pi*x)', label: 'envelope $\\pm 2A\\sin(k_n x)$', color: 'gray', dashed: true },
            { expr: '-sin(n*pi*x)', color: 'gray', dashed: true },
          ],
          sliders: [
            { name: 'n', min: 1, max: 6, step: 1, value: 1, label: 'harmonic $n$' },
            { name: 's', min: 0, max: 4, step: 0.01, value: 0, label: 'time (slow motion)', play: true, speed: 1, loop: true },
          ],
          readouts: [
            { label: '$\\lambda_n / L = 2/n =$', expr: '2/n', digits: 3 },
            { label: '$f_n$ for the guitar string below (Hz) $=$', expr: '121.6n', digits: 1 },
          ],
          caption: 'Horizontal axis: position as a fraction of $L$. Step through $n$: the $n$-th harmonic has $n$ loops, $n + 1$ nodes, and vibrates $n$ times as fast as the fundamental. A real plucked string vibrates in many harmonics at once; their relative strengths give the instrument its timbre.',
        },
        {
          type: 'derivation',
          title: 'Tuning a guitar string to A₂ (110 Hz)',
          steps: [
            { tex: 'f_1 = \\frac{1}{2L}\\sqrt{\\frac{F_T}{\\mu}} \\implies F_T = \\mu(2Lf_1)^2', why: 'Solve the fundamental-frequency formula for the tension: multiply by $2L$, then square.' },
            { tex: 'F_T = (4.00 \\times 10^{-3}\\,\\text{kg/m})\\big(2(0.650\\,\\text{m})(110\\,\\text{Hz})\\big)^2', why: 'The string from the last lesson: $\\mu = 4.00\\,\\text{g/m}$, vibrating length $0.650\\,\\text{m}$.' },
            { tex: '= (4.00 \\times 10^{-3})(143\\,\\text{m/s})^2 = 81.8\\,\\text{N}', why: 'Note $2Lf_1 = 143\\,\\text{m/s}$ is the wave speed the string needs.' },
          ],
          result: 'At $100\\,\\text{N}$ the same string plays $f_1 = 158/1.30 = 122\\,\\text{Hz}$; loosening it to $81.8\\,\\text{N}$ tunes it down to $110\\,\\text{Hz}$. Pressing a fret shortens $L$ and raises every harmonic.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Physical modeling synthesis',
          text: 'The Karplus–Strong algorithm synthesizes a plucked string by circulating a burst of noise around a delay line of $N$ samples with a gentle low-pass filter. The delay line is the round trip $2L$ of a wave on the string, so the pitch is about $f_{\\text{sample}}/N$, exactly the $f_1 = v/2L$ you just derived. Games and music tools use it for cheap, convincing plucks.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A string of length $0.80\\,\\text{m}$ and linear density $5.0\\,\\text{g/m}$, fixed at both ends, is under $180\\,\\text{N}$ of tension. What is the frequency of its third harmonic? Give 3 significant figures.',
      label: '$f_3 =$',
      unit: 'Hz',
      answer: '3*sqrt(180/0.005)/(2*0.8)',
      answerTex: '356\\,\\text{Hz}',
      tolerance: 2,
      hint: '$v = \\sqrt{F_T/\\mu}$ with $\\mu$ in kg/m, then $f_n = n\\,v/(2L)$.',
      explanation: '$\\mu = 5.0 \\times 10^{-3}\\,\\text{kg/m}$, so $v = \\sqrt{180/0.0050} = 190\\,\\text{m/s}$. Then $f_3 = 3\\,\\frac{v}{2L} = 3 \\times \\frac{190}{1.60} = 356\\,\\text{Hz}$ (the fundamental is $119\\,\\text{Hz}$). Using $4L$ in the denominator (the closed-pipe formula) gives $178\\,\\text{Hz}$; leaving $\\mu$ in g/m makes $v$ about $32$ times too small.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Sound: speed and the harmonics of pipes',
      blocks: [
        {
          type: 'p',
          text: 'Sound is a longitudinal wave: a pattern of pressure and density variations in which the air moves back and forth along the direction of travel. Like the string, its speed is set by a restoring stiffness and an inertia. For a fluid the stiffness is the bulk modulus $B$ (how much [[pressure]] it takes to compress the fluid by a given fraction) and the inertia is the [[density]] $\\rho$:',
        },
        {
          type: 'math',
          tex: 'v = \\sqrt{\\frac{B}{\\rho}}, \\qquad v_{\\text{air}} \\approx (331\\,\\text{m/s})\\sqrt{\\frac{T}{273\\,\\text{K}}} \\approx 343\\,\\text{m/s at } 20\\,^{\\circ}\\text{C}',
          caption: 'Same structure as $\\sqrt{F_T/\\mu}$. For air the speed depends on temperature $T$ (in kelvins), not on pressure or on the sound\'s frequency.',
        },
        {
          type: 'table',
          headers: ['Medium', 'Speed of sound'],
          rows: [
            ['Air, $0\\,^{\\circ}\\text{C}$', '$331\\,\\text{m/s}$'],
            ['Air, $20\\,^{\\circ}\\text{C}$', '$343\\,\\text{m/s}$'],
            ['Water, $20\\,^{\\circ}\\text{C}$', '$\\approx 1480\\,\\text{m/s}$'],
            ['Steel (bulk)', '$\\approx 5900\\,\\text{m/s}$'],
          ],
          caption: 'Stiffer media carry sound faster, even though they are denser.',
        },
        {
          type: 'p',
          text: 'The air in a pipe forms standing sound waves, just like a string. The boundary conditions are different: at a **closed** end the air cannot move (a displacement node), and at an **open** end it moves freely (a displacement antinode, where the pressure stays at atmospheric).',
        },
        {
          type: 'figure',
          svg: FIG_PIPES,
          alt: 'Four pipes. Left column, open at both ends: n = 1 with antinodes at both ends and one node in the middle, L = lambda/2; n = 2 with two nodes, L = lambda. Right column, closed at the right end: n = 1 with an antinode at the open end and a node at the closed end, L = lambda/4; n = 3 with nodes at one third and at the closed end, L = 3 lambda/4.',
          caption: 'An open–open pipe fits half-wavelengths, like a string. A pipe closed at one end fits **odd** numbers of quarter-wavelengths.',
        },
        {
          type: 'table',
          headers: ['Pipe', 'Fits', 'Allowed frequencies'],
          rows: [
            ['Open at both ends', '$L = n\\,\\frac{\\lambda}{2}$', '$f_n = n\\,\\frac{v}{2L}$, $n = 1, 2, 3, \\dots$'],
            ['Closed at one end', '$L = n\\,\\frac{\\lambda}{4}$, $n$ odd', '$f_n = n\\,\\frac{v}{4L}$, $n = 1, 3, 5, \\dots$'],
          ],
        },
        {
          type: 'derivation',
          title: 'A $0.500\\,\\text{m}$ pipe at $20\\,^{\\circ}\\text{C}$',
          steps: [
            { tex: '\\text{open–open: } f_1 = \\frac{343\\,\\text{m/s}}{2(0.500\\,\\text{m})} = 343\\,\\text{Hz}; \\quad f_2 = 686\\,\\text{Hz}', why: 'Every integer multiple of the fundamental is allowed.' },
            { tex: '\\text{closed at one end: } f_1 = \\frac{343\\,\\text{m/s}}{4(0.500\\,\\text{m})} = 171.5\\,\\text{Hz}; \\quad f_3 = 514.5\\,\\text{Hz}', why: 'Closing one end halves the fundamental (it now fits only a quarter wavelength) and removes the even harmonics.' },
          ],
          result: 'Cap the end of a flute-like pipe and it drops an octave and sounds hollower: the missing even harmonics change its timbre (a clarinet behaves roughly like a closed pipe).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'An organ pipe closed at one end has a fundamental frequency of $200\\,\\text{Hz}$. What is the next higher frequency at which it resonates?',
      options: [
        { text: '$400\\,\\text{Hz}$', why: 'That would be the second harmonic, which exists for strings and open–open pipes. A closed pipe has a node at the closed end and an antinode at the open end, so only odd harmonics fit.' },
        { text: '$600\\,\\text{Hz}$', correct: true, why: 'Closed pipes support $f_n = n\\,v/4L$ with $n$ odd: $200, 600, 1000, \\dots\\,\\text{Hz}$.' },
        { text: '$300\\,\\text{Hz}$', why: 'Harmonics are integer multiples of the fundamental; $1.5\\times$ is not one.' },
        { text: '$800\\,\\text{Hz}$', why: 'This is $4f_1$, an even multiple. Even harmonics are missing in a closed pipe.' },
      ],
      explanation: 'The fundamental of a closed pipe is $f_1 = v/4L = 200\\,\\text{Hz}$ (a quarter wavelength fits). The next pattern that has a node at the closed end and an antinode at the open end fits **three** quarter-wavelengths: $f_3 = 3v/4L = 600\\,\\text{Hz}$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Intensity and decibels',
      blocks: [
        {
          type: 'p',
          text: 'The **intensity** $I$ of a wave is the power it carries per unit area perpendicular to its travel, in W/m². A small source radiating power $P$ equally in all directions spreads it over spheres of area $4\\pi r^2$, so the intensity falls as the inverse square of the distance:',
        },
        {
          type: 'math',
          tex: 'I = \\frac{P}{4\\pi r^2}, \\qquad \\beta = (10\\,\\text{dB})\\log_{10}\\frac{I}{I_0}, \\quad I_0 = 1.0 \\times 10^{-12}\\,\\text{W/m}^2',
          caption: 'Your ears respond to intensities from $10^{-12}\\,\\text{W/m}^2$ (barely audible) to about $1\\,\\text{W/m}^2$ (painful): twelve powers of ten. So we use the logarithmic [[phys-sound-intensity-level|sound intensity level]] $\\beta$, in decibels.',
        },
        {
          type: 'list',
          items: [
            'Intensity $\\times 10$ adds $10\\,\\text{dB}$; $\\times 100$ adds $20\\,\\text{dB}$.',
            'Intensity $\\times 2$ adds $10\\log_{10}2 = 3.01\\,\\text{dB}$.',
            'Distance $\\times 2$ divides $I$ by $4$, so it subtracts $10\\log_{10}4 = 6.02\\,\\text{dB}$.',
          ],
        },
        {
          type: 'derivation',
          title: 'A speaker radiating $2.0\\,\\text{W}$ of sound, heard $10\\,\\text{m}$ away',
          steps: [
            { tex: 'I = \\frac{2.0\\,\\text{W}}{4\\pi(10\\,\\text{m})^2} = 1.59 \\times 10^{-3}\\,\\text{W/m}^2', why: 'Spread the power over a sphere of radius $10\\,\\text{m}$.' },
            { tex: '\\beta = 10\\log_{10}\\frac{1.59 \\times 10^{-3}}{1.0 \\times 10^{-12}} = 10\\log_{10}(1.59 \\times 10^{9}) = 92.0\\,\\text{dB}', why: '$\\log_{10}(1.59 \\times 10^9) = 9 + \\log_{10}1.59 = 9.20$.' },
            { tex: 'r = 20\\,\\text{m}: \\ \\beta = 92.0 - 6.0 = 86.0\\,\\text{dB}', why: 'Doubling the distance quarters the intensity: $10\\log_{10}\\frac14 = -6.0\\,\\text{dB}$.' },
          ],
          result: '$2\\,\\text{W}$ of acoustic power is loud: about $92\\,\\text{dB}$ at $10\\,\\text{m}$. (A typical speaker turns only about $1\\%$ of its electrical power into sound.)',
        },
        {
          type: 'graph',
          x: [1, 100],
          y: [40, 130],
          height: 240,
          functions: [{ expr: '10*log(p/(4pi*x^2*10^-12))', label: 'level $\\beta(r)$ in dB', color: 'blue' }],
          points: [{ x: 'r', y: '10*log(p/(4pi*r^2*10^-12))', color: 'red' }],
          sliders: [
            { name: 'p', min: 0.01, max: 10, step: 0.01, value: 2, label: 'acoustic power $P$ (W)' },
            { name: 'r', min: 1, max: 100, step: 1, value: 10, label: 'distance $r$ (m)' },
          ],
          readouts: [{ label: '$\\beta$ (dB) $=$', expr: '10*log(p/(4pi*r^2*10^-12))', digits: 1 }],
          caption: 'Horizontal axis: distance in meters. The steep drop close to the source and the slow fade far away are the inverse-square law seen through a logarithm: every doubling of $r$ costs the same $6\\,\\text{dB}$. Multiplying $P$ by $10$ lifts the whole curve by $10\\,\\text{dB}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Decibels in a game\'s audio code',
          text: 'Volume sliders and attenuation curves in audio middleware are usually specified in dB. Gain multiplies the **amplitude** of the samples, and intensity goes as amplitude squared, so the conversion uses $20\\log_{10}$: `float gain = std::pow(10.0f, dB / 20.0f);` gives $-6\\,\\text{dB} \\to 0.50$ and $-20\\,\\text{dB} \\to 0.10$. Engines offer an inverse-distance rolloff that mimics $1/r^2$ intensity, plus artist-drawn curves that fade more gently so distant gunfire stays audible.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Protect your hearing',
          text: 'Sustained levels above about $85\\,\\text{dB}$ damage hearing over time, and a centerfire rifle shot peaks at roughly $160$–$175\\,\\text{dB}$ at the shooter\'s ear (even a $.22$ rimfire reaches about $140\\,\\text{dB}$), $10^4$ or more times the intensity at the threshold of pain (about $120\\,\\text{dB}$). Because the scale is logarithmic, earplugs rated at $30\\,\\text{dB}$ cut the intensity reaching your ear by a factor of $1000$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A generator is a small source radiating equally in all directions. At $5.0\\,\\text{m}$ its sound level is $85.0\\,\\text{dB}$. What is the level at $20\\,\\text{m}$? (Ignore reflections and absorption.) Give your answer to $0.1\\,\\text{dB}$.',
      label: '$\\beta =$',
      unit: 'dB',
      answer: '85 - 20*log(4)',
      answerTex: '73.0\\,\\text{dB}',
      tolerance: 0.15,
      hint: 'Going from $5\\,\\text{m}$ to $20\\,\\text{m}$ multiplies $r$ by $4$. What does that do to $I = P/4\\pi r^2$?',
      explanation: 'The intensity scales as $1/r^2$, so it drops by a factor of $4^2 = 16$. The level changes by $10\\log_{10}\\frac{1}{16} = -12.0\\,\\text{dB}$: $\\beta = 85.0 - 12.0 = 73.0\\,\\text{dB}$. (That is two doublings of distance, $2 \\times 6.0\\,\\text{dB}$.) Treating intensity as $1/r$ instead of $1/r^2$ gives $79.0\\,\\text{dB}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the decibel rules of thumb.',
      template: 'Multiplying the intensity by $100$ raises the level by ___ dB. Doubling the distance from a point source lowers it by about ___ dB. Doubling the number of identical, independent sources raises it by about ___ dB.',
      blanks: [{ answers: ['20'] }, { answers: ['6'] }, { answers: ['3'] }],
      wordBank: ['20', '6', '3', '100', '10', '2'],
      explanation: '$10\\log_{10}100 = 20\\,\\text{dB}$. Doubling $r$ divides $I$ by $4$: $10\\log_{10}4 = 6.02\\,\\text{dB}$ lower. Two independent sources (random relative phases) add their **intensities**, doubling $I$: $10\\log_{10}2 = 3.01\\,\\text{dB}$ louder, not twice as many decibels.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Beats',
      blocks: [
        {
          type: 'p',
          text: 'Superposition in **time** gives something you can hear. Play two tones of nearly equal frequency at once, $f_1$ and $f_2$, and the sound swells and fades periodically. These are [[phys-beats|beats]]. At one point in space (your ear), each sound is just a function of time:',
        },
        {
          type: 'derivation',
          title: 'Two tones at one point',
          steps: [
            { tex: 'y(t) = A\\cos(2\\pi f_1 t) + A\\cos(2\\pi f_2 t)', why: 'Superposition of two equal-amplitude tones arriving at your ear.' },
            { tex: '= \\left[2A\\cos\\!\\left(2\\pi\\,\\frac{f_1 - f_2}{2}\\,t\\right)\\right]\\cos\\!\\left(2\\pi\\,\\frac{f_1 + f_2}{2}\\,t\\right)', why: 'Sum-to-product: $\\cos a + \\cos b = 2\\cos\\frac{a - b}{2}\\cos\\frac{a + b}{2}$.' },
            { tex: 'f_{\\text{beat}} = |f_1 - f_2|', why: 'You hear a tone at the average frequency inside a slowly varying envelope. Loudness peaks whenever the envelope reaches $\\pm 2A$, which happens **twice** per cycle of the $\\frac{|f_1 - f_2|}{2}$ envelope cosine.' },
          ],
          result: 'Two tuning forks at $440$ and $443\\,\\text{Hz}$ produce a $441.5\\,\\text{Hz}$ tone that throbs $3$ times per second.',
        },
        {
          type: 'graph',
          x: [0, 2],
          y: [-2.4, 2.4],
          height: 240,
          functions: [
            { expr: 'cos(2pi*10x) + cos(2pi*g*x)', label: 'sum of the two tones', color: 'blue' },
            { expr: '2cos(pi*(g - 10)*x)', label: 'envelope', color: 'orange', dashed: true },
            { expr: '-2cos(pi*(g - 10)*x)', color: 'orange', dashed: true },
          ],
          sliders: [{ name: 'g', min: 8, max: 12, step: 0.05, value: 9, label: 'second frequency $f_2$ (Hz), first is $10\\,\\text{Hz}$', play: true, speed: 0.8 }],
          readouts: [{ label: '$f_{\\text{beat}} = |f_1 - f_2| =$', expr: 'abs(g - 10)', digits: 2 }],
          caption: 'Horizontal axis: time in seconds (frequencies scaled down so you can see the cycles). Press ▶ to sweep $f_2$ through $10\\,\\text{Hz}$: the beats slow down, vanish when the tones match, then speed up again. That is how musicians tune by ear.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Beats in game audio',
          text: 'Layer two copies of an engine loop pitched a few hertz apart and you hear a "wah-wah" throb at the difference frequency. Sound designers use slight detuning on purpose for a thick chorus effect, and avoid it by accident: two units playing the same idle hum at slightly different pitch shifts will beat audibly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A guitarist plucks a string together with a $440\\,\\text{Hz}$ tuning fork and hears $3$ beats per second. As she slowly **tightens** the string, the beats slow down. What was the string\'s original frequency?',
      options: [
        { text: '$443\\,\\text{Hz}$', why: 'Tightening raises the string\'s frequency. Starting from $443\\,\\text{Hz}$ would move it away from $440\\,\\text{Hz}$ and the beats would speed up.' },
        { text: '$437\\,\\text{Hz}$', correct: true, why: 'The beat frequency $|f - 440|$ was $3\\,\\text{Hz}$, so $f$ was $437$ or $443$. Tightening raises $f$; the beats slowing means $f$ was approaching $440$ from below.' },
        { text: '$3\\,\\text{Hz}$', why: '$3\\,\\text{Hz}$ is the **difference** between the frequencies, not the string\'s frequency.' },
        { text: 'Either $437$ or $443\\,\\text{Hz}$; the beats cannot tell them apart', why: 'The beat frequency alone cannot, but the change while tightening can: more tension means higher $f$ (since $f_1 \\propto \\sqrt{F_T}$), and only $437\\,\\text{Hz}$ gets closer to $440$.' },
      ],
      explanation: '$f_{\\text{beat}} = |f_{\\text{string}} - 440| = 3\\,\\text{Hz}$ allows $437$ or $443\\,\\text{Hz}$. Since $f_1 = \\frac{1}{2L}\\sqrt{F_T/\\mu}$, tightening raises the string\'s pitch. Fewer beats per second means the difference is shrinking, so the string started below the fork, at $437\\,\\text{Hz}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'The Doppler effect',
      blocks: [
        {
          type: 'p',
          text: 'An ambulance siren sounds higher while it approaches and drops in pitch as it passes. This is the [[phys-doppler-effect|Doppler effect]]: the frequency you hear depends on how the source and the observer move **relative to the medium**. The two motions shift the frequency for different reasons, so derive them separately.',
        },
        {
          type: 'graph',
          x: [-10, 10],
          y: [-7, 7],
          equal: true,
          height: 320,
          parametric: WAVEFRONTS,
          points: [
            { x: 'm*s - 5', y: 0, label: 'source', color: 'red' },
            { x: 9, y: 0, label: 'ahead', color: 'green' },
            { x: -9, y: 0, label: 'behind', color: 'purple' },
          ],
          sliders: [
            { name: 's', min: 0, max: 8, step: 0.01, value: 0, label: 'time', play: true, speed: 2 },
            { name: 'm', min: 0, max: 0.9, step: 0.05, value: 0.5, label: 'source speed $v_s / v$' },
          ],
          readouts: [
            { label: 'ahead: $f\'/f = \\frac{v}{v - v_s} =$', expr: '1/(1 - m)', digits: 2 },
            { label: 'behind: $f\'/f = \\frac{v}{v + v_s} =$', expr: '1/(1 + m)', digits: 2 },
          ],
          caption: 'Press ▶. The source emits one wavefront per second; each spreads at speed $v$ from the point where it was **emitted**. Ahead of the moving source the fronts bunch up (shorter $\\lambda$, higher $f$); behind it they spread out. Set the speed to $0$ and the circles become concentric.',
        },
        {
          type: 'derivation',
          title: 'Deriving the Doppler formula',
          steps: [
            { tex: '\\lambda\' = vT - v_sT = \\frac{v - v_s}{f}', why: '**Moving source**, speed $v_s$ toward you. During one period $T = 1/f$, a crest travels $vT$ toward you, but the source follows it by $v_sT$ before emitting the next crest. So crests ahead of the source are closer together.' },
            { tex: 'f\' = \\frac{v}{\\lambda\'} = f\\,\\frac{v}{v - v_s}', why: 'You are at rest in the air, so crests reach you at speed $v$; their arrival rate is speed over spacing.' },
            { tex: 'f\' = \\frac{v + v_o}{\\lambda} = f\\,\\frac{v + v_o}{v}', why: '**Moving observer**, speed $v_o$ toward a stationary source. The wavelength is the normal $\\lambda = v/f$, but you run into the crests at relative speed $v + v_o$.' },
            { tex: 'f\' = f\\,\\frac{v + v_o}{v - v_s}', why: 'Both moving: the source sets the crest spacing $\\lambda\'$, and the observer meets those crests at relative speed $v + v_o$.' },
          ],
          result: 'Count $v_o$ and $v_s$ as **positive when moving toward the other** and negative when moving away. Approaching raises the pitch; receding lowers it.',
        },
        {
          type: 'derivation',
          title: 'A $500\\,\\text{Hz}$ siren on a car moving at $30.0\\,\\text{m/s}$ ($v = 343\\,\\text{m/s}$)',
          steps: [
            { tex: '\\text{approaching: } f\' = 500\\,\\frac{343}{343 - 30.0} = 548\\,\\text{Hz}', why: 'Source moving toward you: $v_s = +30.0\\,\\text{m/s}$, you at rest.' },
            { tex: '\\text{receding: } f\' = 500\\,\\frac{343}{343 + 30.0} = 460\\,\\text{Hz}', why: 'Moving away: $v_s = -30.0\\,\\text{m/s}$.' },
          ],
          result: 'As the car passes, the pitch drops by $88\\,\\text{Hz}$, a ratio of $548/460 = 1.19$: about three semitones, a minor third. The shift is not symmetric: the approaching shift ($+48\\,\\text{Hz}$) is bigger than the receding one ($-40\\,\\text{Hz}$).',
        },
        {
          type: 'graph',
          x: [-200, 200],
          y: [400, 620],
          height: 240,
          functions: [{ expr: '500*343/(343 + u*x/sqrt(x^2 + d^2))', label: 'heard frequency (Hz)', color: 'blue' }],
          hlines: [{ y: 500, label: '500 Hz emitted', color: 'gray' }],
          sliders: [
            { name: 'u', min: 5, max: 60, step: 1, value: 30, label: 'car speed (m/s)' },
            { name: 'd', min: 2, max: 100, step: 1, value: 20, label: 'your distance from the road (m)' },
          ],
          caption: 'Horizontal axis: the car\'s position along the road in meters (you stand opposite $x = 0$). Only the velocity component **along the line of sight** counts, so the pitch slides smoothly through $500\\,\\text{Hz}$ as the car passes. Stand closer to the road and the drop gets more sudden: the "neee-yowww".',
        },
        {
          type: 'code',
          title: 'doppler.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };
Vec2 operator-(Vec2 a, Vec2 b) { return {a.x - b.x, a.y - b.y}; }
double dot(Vec2 a, Vec2 b) { return a.x * b.x + a.y * b.y; }
double length(Vec2 a) { return std::sqrt(dot(a, a)); }

// Pitch multiplier f'/f for a moving source and listener in still air.
// Velocities are projected on the line from source to listener.
double dopplerFactor(Vec2 srcPos, Vec2 srcVel, Vec2 lisPos, Vec2 lisVel, double c) {
    Vec2 d = lisPos - srcPos;
    double r = length(d);
    Vec2 u = {d.x / r, d.y / r};          // unit vector source -> listener
    double vs = dot(srcVel, u);           // source speed toward listener
    double vo = -dot(lisVel, u);          // listener speed toward source
    return (c + vo) / (c - vs);
}

int main() {
    const double c = 343.0;               // speed of sound, m/s
    const double f = 500.0;               // siren frequency, Hz
    const Vec2 listener{0.0, 20.0};       // standing 20 m from the road
    const Vec2 carVel{30.0, 0.0};         // 30 m/s along the road
    for (double t = -3.0; t <= 3.0; t += 1.0) {
        Vec2 car{carVel.x * t, 0.0};
        double fp = f * dopplerFactor(car, carVel, listener, {0.0, 0.0}, c);
        std::printf("t = %+.0f s  car at x = %+6.1f m  heard %.1f Hz\\n", t, car.x, fp);
    }
}`,
          output: `t = -3 s  car at x =  -90.0 m  heard 546.7 Hz
t = -2 s  car at x =  -60.0 m  heard 545.2 Hz
t = -1 s  car at x =  -30.0 m  heard 539.2 Hz
t = +0 s  car at x =   +0.0 m  heard 500.0 Hz
t = +1 s  car at x =  +30.0 m  heard 466.1 Hz
t = +2 s  car at x =  +60.0 m  heard 461.7 Hz
t = +3 s  car at x =  +90.0 m  heard 460.7 Hz`,
          annotations: [
            { lines: '11-18', text: 'The game-audio version of $f\' = f\\,\\frac{v + v_o}{v - v_s}$: project both velocities onto the source-to-listener direction with a [[dot-product]], counting motion toward the other as positive.' },
            { lines: '15-16', text: 'The listener moving **along** $\\hat{u}$ moves away from the source, hence the minus sign in $v_o$.' },
            { lines: '25-28', text: 'Like most game engines, this ignores the travel time of the sound: it uses where the car is now, not where it was when the sound left it.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'Sonic booms and Doppler radar',
          blocks: [
            {
              type: 'p',
              text: 'If the source moves faster than sound ($v_s > v$), the formula breaks down: the source outruns its own wavefronts, which pile up on a cone with half-angle $\\sin\\theta = v/v_s$. That cone of compressed air is a shock wave, heard on the ground as a sonic boom as it sweeps past. The ratio $v_s/v$ is the Mach number.',
            },
            {
              type: 'p',
              text: 'Radar guns and military Doppler radars use the same idea with radio waves. The wave reflected from a target moving at radial speed $u$ comes back shifted by about $\\Delta f \\approx 2uf/c$ (one shift on the way out, one on reflection, with $c$ the speed of light), which is how a radar separates a moving vehicle or aircraft from stationary ground clutter.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A police car moving at $35.0\\,\\text{m/s}$ sounds an $800\\,\\text{Hz}$ siren. You drive toward it at $20.0\\,\\text{m/s}$, so the two cars approach each other. Take $v = 343\\,\\text{m/s}$ and still air. What frequency do you hear? Give 3 significant figures.',
      label: '$f\' =$',
      unit: 'Hz',
      answer: '800*(343 + 20)/(343 - 35)',
      answerTex: '943\\,\\text{Hz}',
      tolerance: 3,
      hint: 'Both move toward each other, so $v_o = +20.0\\,\\text{m/s}$ and $v_s = +35.0\\,\\text{m/s}$ in $f\' = f\\,\\frac{v + v_o}{v - v_s}$.',
      explanation: '$f\' = 800\\,\\frac{343 + 20.0}{343 - 35.0} = 800 \\times \\frac{363}{308} = 943\\,\\text{Hz}$. With the signs flipped (as if both were receding) you would get $684\\,\\text{Hz}$; including only the source motion gives $891\\,\\text{Hz}$, and only the observer motion $847\\,\\text{Hz}$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'An ambulance with a $500\\,\\text{Hz}$ siren drives **away** from you at $30\\,\\text{m/s}$; you stand still and $v = 343\\,\\text{m/s}$. Tap the first wrong line.',
      lines: [
        'The sound reaching you is emitted from the back of the moving ambulance.',
        'Behind the source the crests are stretched apart: $\\lambda\' = \\dfrac{v + v_s}{f} = \\dfrac{373}{500} = 0.746\\,\\text{m}$.',
        'The crests are launched by a moving source, so they travel toward you at $v + v_s = 373\\,\\text{m/s}$.',
        'They arrive at the rate $f\' = \\dfrac{373\\,\\text{m/s}}{0.746\\,\\text{m}} = 500\\,\\text{Hz}$, so there is no Doppler shift.',
      ],
      errorLines: [3],
      explanation: 'Line 3 is the classic mistake of adding the source\'s velocity to the wave\'s. Once emitted, a sound wave travels at $v = 343\\,\\text{m/s}$ **relative to the air**, no matter how the source moves (the speed is set by the medium). So $f\' = v/\\lambda\' = 343/0.746 = 460\\,\\text{Hz}$, the same as $f\\,\\frac{v}{v + v_s}$. Line 2 is right: the source\'s motion changes the spacing of the crests, not their speed.',
    },
  ],
  takeaways: [
    'Superposition: overlapping waves add. Two equal waves with phase difference $\\phi$ give amplitude $2A|\\cos(\\phi/2)|$: constructive at $\\phi = 0$, destructive at $\\phi = \\pi$.',
    'Opposite traveling waves form a standing wave $2A\\sin kx\\cos\\omega t$, with nodes $\\lambda/2$ apart and antinodes midway; no net energy flows.',
    'A string fixed at both ends (and an open–open pipe) has harmonics $f_n = n\\,v/2L$; a pipe closed at one end has only odd harmonics $f_n = n\\,v/4L$.',
    'Sound in a fluid travels at $\\sqrt{B/\\rho}$, about $343\\,\\text{m/s}$ in $20\\,^{\\circ}\\text{C}$ air. A point source gives $I = P/4\\pi r^2$, and $\\beta = 10\\log_{10}(I/I_0)$ dB: $+10\\,\\text{dB}$ per factor of $10$, $-6\\,\\text{dB}$ per doubling of distance.',
    'Two close frequencies beat at $f_{\\text{beat}} = |f_1 - f_2|$.',
    'Doppler: $f\' = f\\,\\frac{v + v_o}{v - v_s}$ with speeds positive toward each other. The source changes the wavelength, the observer changes the rate of meeting crests; the wave speed stays $v$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapters 16–17',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 16.5–16.6 cover interference and standing waves; Chapter 17 covers sound, intensity, pipes, beats and the Doppler effect.',
    },
    {
      title: 'Wikipedia: Doppler effect',
      url: 'https://en.wikipedia.org/wiki/Doppler_effect',
      source: 'wikipedia',
      note: 'Derivations for moving sources and observers, plus applications from sirens to radar and astronomy.',
    },
    {
      title: 'Wikipedia: Karplus–Strong string synthesis',
      url: 'https://en.wikipedia.org/wiki/Karplus%E2%80%93Strong_string_synthesis',
      source: 'wikipedia',
      note: 'A short, codeable algorithm that turns the physics of a plucked string into sound.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "Waves Intro" and "Wave Interference" to watch sound and water waves interfere and form standing patterns.',
    },
  ],
};
