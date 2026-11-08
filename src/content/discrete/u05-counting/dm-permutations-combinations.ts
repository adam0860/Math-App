import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-permutations-combinations',
  title: 'Permutations and Combinations',
  summary: 'Ordered arrangements $P(n,k)$ and unordered selections $\\binom{n}{k}$, why one is the other divided by $k!$, arrangements with restrictions, poker hands, combinatorial proofs, and generating every permutation and subset in C++.',
  minutes: 19,
  objectives: [
    'Count $k$-permutations with $P(n,k) = \\dfrac{n!}{(n-k)!}$ and derive it from the product rule',
    'Derive $\\binom{n}{k} = \\dfrac{P(n,k)}{k!}$ with the division rule, and decide whether order matters in a problem',
    'Count arrangements with restrictions (blocks, separations, circles) and poker hands without overcounting',
    'Write a combinatorial proof by counting one set in two ways, including $\\binom{n}{k} = \\binom{n}{n-k}$',
    'Generate permutations with `std::next_permutation` and subsets with bit masks, and trace the next-permutation algorithm by hand',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Permutations: ordered arrangements',
      blocks: [
        {
          type: 'p',
          text: 'Eight drivers finish a race. How many different podiums (gold, silver, bronze) are possible? Order matters — Ana-gold/Ben-silver is a different podium from Ben-gold/Ana-silver — and nobody can take two places. This is the most common pattern in counting: an **ordered selection without repetition**.',
        },
        {
          type: 'definition',
          term: 'Permutation',
          text: 'A [[permutation]] of a set of $n$ distinct objects is an ordered arrangement of all of them. A **$k$-permutation** is an ordered arrangement of $k$ of the $n$ objects. Their number is written $P(n, k)$ (also $_nP_k$ or $n^{\\underline{k}}$, "$n$ falling $k$").',
        },
        {
          type: 'derivation',
          title: 'Deriving $P(n, k)$ with the product rule',
          steps: [
            { tex: 'P(n, k) = n \\cdot (n-1) \\cdot (n-2) \\cdots (n - k + 1)', why: 'Fill position $1$ ($n$ choices), then position $2$ ($n - 1$ choices: anything except what was used), and so on. Position $k$ has $n - (k-1)$ choices. The *number* of options at each step does not depend on earlier choices, so the product rule applies.' },
            { tex: '= \\frac{n(n-1)\\cdots(n-k+1) \\cdot (n-k)!}{(n-k)!}', why: 'Multiply and divide by $(n-k)! = (n-k)(n-k-1)\\cdots 1$, which completes the product down to $1$.' },
            { tex: '= \\frac{n!}{(n-k)!}', why: 'The numerator is now $n(n-1)\\cdots 1 = n!$ ([[factorial]]).' },
          ],
          result: '$P(n, k) = \\dfrac{n!}{(n-k)!}$ for $0 \\le k \\le n$. In particular $P(n, n) = n!$: there are $n!$ orderings of $n$ objects.',
        },
        {
          type: 'p',
          text: 'The podium: $P(8, 3) = 8 \\cdot 7 \\cdot 6 = 336$. The turn order for $4$ players: $P(4, 4) = 4! = 24$. Note that $0! = 1$ is exactly what makes $P(n, n) = n!/0!$ work — and there is one way to arrange nothing (the empty arrangement).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Never compute $n!/(n-k)!$ literally',
          text: '$20! \\approx 2.4 \\times 10^{18}$ is the largest factorial that fits in a 64-bit integer; $21!$ overflows. But $P(100, 2) = 9900$ is tiny. Compute the **falling product** directly: `long long p = 1; for (int i = 0; i < k; ++i) p *= (n - i);` — $k$ multiplications, no huge intermediate values.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A raid team of $10$ players must assign three **different** roles: one tank, one healer and one shot-caller (three different people). In how many ways can the roles be assigned?',
      hint: 'The roles are distinguishable positions, so order matters.',
      label: 'ways $=$',
      answer: '720',
      explanation: 'Choose the tank ($10$ ways), then the healer from the remaining $9$, then the shot-caller from the remaining $8$: $P(10, 3) = 10 \\cdot 9 \\cdot 8 = 720$. The roles play the role of "positions" — exactly like gold, silver and bronze.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Combinations: unordered selections, and the division rule',
      blocks: [
        {
          type: 'p',
          text: 'Now pick a **set** of $k$ objects, where order is irrelevant: a $5$-card poker hand, a $3$-person committee, which $2$ of $4$ power-ups to equip. A $k$-element subset is called a $k$-[[combination]], and the number of them is the [[binomial-coefficient]] $\\binom{n}{k}$, read "$n$ choose $k$" (also written $C(n, k)$).',
        },
        {
          type: 'p',
          text: 'We cannot use the product rule directly — picking cards one at a time creates an order. Instead, count ordered selections and correct for the overcount.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 510 200" xmlns="http://www.w3.org/2000/svg"><text x="255" y="22" text-anchor="middle" font-size="14">12 ordered pairs from {A, B, C, D} …</text><rect x="12" y="38" width="70" height="88" rx="8" class="s-blue" fill="none" stroke-width="1.8"/><text x="47" y="70" text-anchor="middle" font-size="17">AB</text><text x="47" y="105" text-anchor="middle" font-size="17">BA</text><line x1="47" y1="130" x2="47" y2="146" stroke="currentColor" stroke-width="1.4"/><path d="M42 142 L47 150 L52 142" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="47" y="168" text-anchor="middle" font-size="15" class="t-green">{A,B}</text><rect x="95" y="38" width="70" height="88" rx="8" class="s-blue" fill="none" stroke-width="1.8"/><text x="130" y="70" text-anchor="middle" font-size="17">AC</text><text x="130" y="105" text-anchor="middle" font-size="17">CA</text><line x1="130" y1="130" x2="130" y2="146" stroke="currentColor" stroke-width="1.4"/><path d="M125 142 L130 150 L135 142" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="130" y="168" text-anchor="middle" font-size="15" class="t-green">{A,C}</text><rect x="178" y="38" width="70" height="88" rx="8" class="s-blue" fill="none" stroke-width="1.8"/><text x="213" y="70" text-anchor="middle" font-size="17">AD</text><text x="213" y="105" text-anchor="middle" font-size="17">DA</text><line x1="213" y1="130" x2="213" y2="146" stroke="currentColor" stroke-width="1.4"/><path d="M208 142 L213 150 L218 142" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="213" y="168" text-anchor="middle" font-size="15" class="t-green">{A,D}</text><rect x="261" y="38" width="70" height="88" rx="8" class="s-blue" fill="none" stroke-width="1.8"/><text x="296" y="70" text-anchor="middle" font-size="17">BC</text><text x="296" y="105" text-anchor="middle" font-size="17">CB</text><line x1="296" y1="130" x2="296" y2="146" stroke="currentColor" stroke-width="1.4"/><path d="M291 142 L296 150 L301 142" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="296" y="168" text-anchor="middle" font-size="15" class="t-green">{B,C}</text><rect x="344" y="38" width="70" height="88" rx="8" class="s-blue" fill="none" stroke-width="1.8"/><text x="379" y="70" text-anchor="middle" font-size="17">BD</text><text x="379" y="105" text-anchor="middle" font-size="17">DB</text><line x1="379" y1="130" x2="379" y2="146" stroke="currentColor" stroke-width="1.4"/><path d="M374 142 L379 150 L384 142" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="379" y="168" text-anchor="middle" font-size="15" class="t-green">{B,D}</text><rect x="427" y="38" width="70" height="88" rx="8" class="s-blue" fill="none" stroke-width="1.8"/><text x="462" y="70" text-anchor="middle" font-size="17">CD</text><text x="462" y="105" text-anchor="middle" font-size="17">DC</text><line x1="462" y1="130" x2="462" y2="146" stroke="currentColor" stroke-width="1.4"/><path d="M457 142 L462 150 L467 142" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="462" y="168" text-anchor="middle" font-size="15" class="t-green">{C,D}</text><text x="255" y="194" text-anchor="middle" font-size="14">… collapse 2! = 2 at a time into 6 subsets</text></svg>',
          alt: 'Six boxes, each containing two ordered pairs that use the same two letters, such as AB and BA. An arrow from each box points to the unordered set, such as {A,B}.',
          caption: 'Each 2-element subset of $\\{A, B, C, D\\}$ appears as exactly $2! = 2$ ordered pairs. So $\\binom{4}{2} = P(4, 2) / 2! = 12 / 2 = 6$.',
        },
        {
          type: 'theorem',
          name: 'Number of $k$-combinations',
          tex: '\\binom{n}{k} = \\frac{P(n, k)}{k!} = \\frac{n!}{k!\\,(n - k)!}, \\qquad 0 \\le k \\le n',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why divide by $k!$: the division rule',
          text: 'Count the $k$-permutations in a second way. To build one, first choose the *set* of $k$ objects ($\\binom{n}{k}$ ways), then put that set in order ($k!$ ways, by the previous card). The product rule gives $P(n, k) = \\binom{n}{k} \\cdot k!$; solve for $\\binom{n}{k}$. This is the **division rule**: if a procedure produces every object of interest exactly $d$ times, the number of objects is (number of outputs) $/ d$. The crucial word is *exactly* — every subset must be overcounted by the **same** factor.',
        },
        {
          type: 'derivation',
          title: 'How many 5-card hands come from a 52-card deck?',
          steps: [
            { tex: 'P(52, 5) = 52 \\cdot 51 \\cdot 50 \\cdot 49 \\cdot 48 = 311{,}875{,}200', why: 'Deal $5$ cards in order: the number of ordered deals.' },
            { tex: '\\binom{52}{5} = \\frac{311{,}875{,}200}{5!} = \\frac{311{,}875{,}200}{120}', why: 'Each hand is dealt in $5! = 120$ different orders, all producing the same hand.' },
            { tex: '= 2{,}598{,}960', why: 'Divide.' },
          ],
          result: 'There are $2{,}598{,}960$ poker hands.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Does order matter? Swap two items and ask',
          text: 'Take one outcome and swap two of its items. If you get a **different** outcome (gold and silver swapped), order matters: permutation. If you get the **same** outcome (two cards in a hand swapped), it does not: combination.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A squad of $4$ is chosen from $12$ soldiers, and then one squad member is named squad leader. How many different (squad, leader) outcomes are there?',
      options: [
        { text: '$\\binom{12}{4} = 495$', why: 'This counts the squads but ignores the leader. Each squad can have any of its $4$ members as leader, giving $4$ different outcomes.' },
        { text: '$P(12, 4) = 11{,}880$', why: 'This treats all four slots as distinct positions, but only the leader is special; the other three are an unordered group. It overcounts by a factor of $3! = 6$.' },
        { text: '$\\binom{12}{4} \\cdot 4 = 1980$', correct: true, why: 'Choose the squad ($495$ ways), then the leader from inside it ($4$ ways). Product rule.' },
        { text: '$\\binom{12}{4} \\cdot 12 = 5940$', why: 'The leader must be one of the $4$ chosen, not any of the $12$ soldiers.' },
      ],
      explanation: '$\\binom{12}{4} \\cdot 4 = 1980$. You can also choose the leader first ($12$ ways) and then the other $3$ members from the remaining $11$: $12 \\binom{11}{3} = 12 \\cdot 165 = 1980$. Two correct methods, same answer — that coincidence is no coincidence, and it is the seed of a combinatorial proof later in this lesson. Note that $P(12, 4) / 6 = 1980$ too.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Arrangements with restrictions',
      blocks: [
        {
          type: 'p',
          text: 'Real problems come with conditions: these items must be together, those must be apart, this one must go first. Three techniques handle almost all of them.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Handle the most restricted position first', text: 'If the first character of a code must be a letter, fill that slot first, then the unrestricted slots. Restricted slots last often leaves you with a number of options that depends on earlier choices.' },
            { title: 'Must be together: glue them into a block', text: 'Treat the items that must be adjacent as one super-item, arrange the units, then multiply by the number of orders *inside* the block (if they may be rearranged).' },
            { title: 'Must be apart: subtract, or use the gaps', text: 'Count all arrangements minus those where they are together. Or arrange the unrestricted items first and drop the restricted ones into the gaps between them.' },
          ],
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="120" height="50" rx="8" class="s-purple f-purple" fill-opacity="0.15" stroke-width="2.2"/><text x="110.0" y="72" text-anchor="middle" font-size="20" class="t-purple">ABC</text><rect x="185" y="40" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="210.0" y="72" text-anchor="middle" font-size="20">D</text><rect x="250" y="40" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="275.0" y="72" text-anchor="middle" font-size="20">E</text><rect x="315" y="40" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="340.0" y="72" text-anchor="middle" font-size="20">F</text><rect x="380" y="40" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405.0" y="72" text-anchor="middle" font-size="20">G</text><text x="110" y="25" text-anchor="middle" font-size="13" class="t-purple">one glued block</text><text x="240" y="118" text-anchor="middle" font-size="14">5 units to arrange: 5! = 120</text><text x="240" y="140" text-anchor="middle" font-size="13" class="t-gray">(× 3! = 6 if the block may be rearranged inside)</text></svg>',
          alt: 'A row of five tiles: a wide purple tile labeled ABC, then tiles D, E, F and G. Text: 5 units to arrange, 5 factorial equals 120, times 3 factorial if the block may be rearranged inside.',
          caption: 'Arrangements of $ABCDEFG$ with the string $ABC$ appearing consecutively: glue it into one unit, leaving $5$ units, so $5! = 120$. If $A, B, C$ need only be adjacent in *some* order, multiply by $3!$: $720$.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Arrangements of the letters of GAMER in which the vowels are **not** adjacent',
          steps: [
            { tex: '5! = 120', why: 'All arrangements of $5$ distinct letters.' },
            { tex: '\\text{vowels together: } 4! \\cdot 2! = 48', why: 'Glue $A$ and $E$ into a block: $4$ units ($[AE], G, M, R$) give $4!$ orders, and the block can be $AE$ or $EA$.' },
            { tex: '120 - 48 = 72', why: 'Complement: "not adjacent" is everything minus "adjacent".' },
            { tex: '\\text{check with gaps: } 3! \\cdot P(4, 2) = 6 \\cdot 12 = 72', why: 'Arrange the consonants $G, M, R$ ($3!$ ways). That creates $4$ gaps ($\\_\\,G\\,\\_\\,M\\,\\_\\,R\\,\\_$); put $A$ and $E$ in two different gaps, in order: $P(4, 2)$. Different gaps means never adjacent.' },
          ],
          result: '$72$ arrangements — two independent methods agree.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Circular arrangements',
          text: 'Seating $n$ people around a round table, where only who sits next to whom matters (rotations are the same seating), gives $n!/n = (n - 1)!$ arrangements: each seating is produced by exactly $n$ of the $n!$ linear orders (one per rotation) — the division rule again. Five players around a table: $4! = 24$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'Count the ways to seat $6$ people in a row of $6$ chairs if Alice and Bob must sit next to each other. Tap the first wrong line.',
      lines: [
        'Glue Alice and Bob into one block.',
        'Now there are $5$ units to arrange in a row: $5! = 120$ ways.',
        'Since Alice and Bob are glued together, the block has only $1$ internal order.',
        'Total: $120 \\cdot 1 = 120$ seatings.',
      ],
      errorLines: [3],
      explanation: 'Gluing guarantees adjacency, but the block can still be Alice–Bob or Bob–Alice: $2! = 2$ internal orders, giving different seatings. The correct total is $5! \\cdot 2! = 240$, which matches a brute-force check of all $720$ seatings.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Poker hands: combinations with structure',
      blocks: [
        {
          type: 'p',
          text: 'A deck has $13$ ranks (2 through ace) and $4$ suits. Counting poker hands is the classic test of counting **without overcounting**: describe a hand by a sequence of choices such that every hand of the type arises from **exactly one** sequence.',
        },
        {
          type: 'derivation',
          title: 'Full house: three cards of one rank and two of another',
          steps: [
            { tex: '13', why: 'Choose the rank of the triple.' },
            { tex: '\\binom{4}{3} = 4', why: 'Choose which $3$ of the $4$ suits of that rank — an unordered choice.' },
            { tex: '12', why: 'Choose the rank of the pair: any rank except the triple\'s. Order matters *between* the two ranks here: "three kings and two 7s" differs from "three 7s and two kings".' },
            { tex: '\\binom{4}{2} = 6', why: 'Choose the $2$ suits of the pair.' },
            { tex: '13 \\cdot 4 \\cdot 12 \\cdot 6 = 3744', why: 'Product rule.' },
          ],
          result: '$3744$ full houses, out of $2{,}598{,}960$ hands — about $0.14\\%$.',
        },
        {
          type: 'table',
          headers: ['Hand', 'Count', 'Construction'],
          rows: [
            ['Four of a kind', '$624$', '$13 \\cdot \\binom{4}{4} \\cdot 48$ (rank, then any fifth card)'],
            ['Full house', '$3744$', '$13 \\binom{4}{3} \\cdot 12 \\binom{4}{2}$'],
            ['Flush (incl. straight flushes)', '$5148$', '$4 \\binom{13}{5}$ (suit, then $5$ of its $13$ ranks)'],
            ['Three of a kind', '$54{,}912$', '$13\\binom{4}{3} \\cdot \\binom{12}{2} \\cdot 4^2$'],
            ['Two pair', '$123{,}552$', '$\\binom{13}{2}\\binom{4}{2}^2 \\cdot 44$'],
            ['One pair', '$1{,}098{,}240$', '$13 \\binom{4}{2} \\cdot \\binom{12}{3} \\cdot 4^3$'],
          ],
          caption: 'Every row was checked by enumerating all $2{,}598{,}960$ hands.',
        },
        {
          type: 'compare',
          left: {
            title: 'Two pair, overcounted',
            tone: 'bad',
            tex: ['13\\tbinom{4}{2} \\cdot 12\\tbinom{4}{2} \\cdot 44 = 247{,}104'],
            text: '"First pair rank, then second pair rank" creates an order. Kings-and-7s is produced once with kings first and once with 7s first.',
          },
          right: {
            title: 'Two pair, exactly once',
            tone: 'good',
            tex: ['\\tbinom{13}{2}\\tbinom{4}{2}^2 \\cdot 44 = 123{,}552'],
            text: 'Choose the **set** of two pair ranks, since the two pairs play identical roles. In the full house, the two ranks play *different* roles (triple vs pair), so $13 \\cdot 12$ was right there.',
          },
        },
        {
          type: 'p',
          text: 'In the two-pair count, $44$ is the number of choices for the fifth card: any card whose rank is neither pair rank ($52 - 8$). With three of a kind, the two extra cards must have **different** ranks (otherwise it is a full house), hence $\\binom{12}{2}$ ranks and $4$ suits for each.',
        },
        {
          type: 'code',
          title: 'poker_bruteforce.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <array>
#include <cstdio>
#include <map>
#include <vector>

int main() {
    // Cards 0..51: rank = card / 4 (13 ranks), suit = card % 4.
    std::map<std::vector<int>, long> byPattern;
    long hands = 0;
    for (int a = 0; a < 52; ++a)                 // a < b < c < d < e:
        for (int b = a + 1; b < 52; ++b)         // each 5-card hand is
            for (int c = b + 1; c < 52; ++c)     // visited exactly once
                for (int d = c + 1; d < 52; ++d)
                    for (int e = d + 1; e < 52; ++e) {
                        std::array<int, 13> rankCount{};
                        for (int card : {a, b, c, d, e}) ++rankCount[card / 4];
                        std::vector<int> pattern;
                        for (int k : rankCount)
                            if (k > 0) pattern.push_back(k);
                        std::sort(pattern.rbegin(), pattern.rend());
                        ++byPattern[pattern];
                        ++hands;
                    }
    std::printf("hands: %ld\\n", hands);
    std::printf("four of a kind  (4,1):   %ld\\n", byPattern[{4, 1}]);
    std::printf("full house      (3,2):   %ld\\n", byPattern[{3, 2}]);
    std::printf("three of a kind (3,1,1): %ld\\n", byPattern[{3, 1, 1}]);
    std::printf("two pair        (2,2,1): %ld\\n", byPattern[{2, 2, 1}]);
}`,
          output: `hands: 2598960
four of a kind  (4,1):   624
full house      (3,2):   3744
three of a kind (3,1,1): 54912
two pair        (2,2,1): 123552`,
          annotations: [
            { lines: '11-15', text: 'Requiring $a < b < c < d < e$ picks each **set** of $5$ cards once — this is how code enumerates combinations instead of permutations.' },
            { lines: '16-21', text: 'The sorted rank multiplicities, e.g. $(3, 2)$ for a full house, identify the hand type.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Verify one row of the table yourself: how many $5$-card hands are **three of a kind** — three cards of one rank, and the other two cards of two other, different ranks?',
      hint: 'Rank and suits of the triple; then a **set** of two other ranks; then a suit for each of those two cards.',
      label: 'hands $=$',
      answer: '54912',
      explanation: 'Triple: $13$ ranks $\\cdot \\binom{4}{3} = 4$ suit choices $= 52$. The two leftover cards need two different ranks from the remaining $12$, chosen as a set: $\\binom{12}{2} = 66$ (they play identical roles). Each gets any of $4$ suits: $4^2 = 16$. Total $52 \\cdot 66 \\cdot 16 = 54{,}912$. Using $12 \\cdot 11$ instead of $\\binom{12}{2}$ would double count, giving $109{,}824$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Combinatorial proofs: count one thing two ways',
      blocks: [
        {
          type: 'p',
          text: 'Here is a new kind of proof. To prove an identity $L = R$, find a set and show that $L$ counts it and $R$ also counts it. Then $L = R$ — no algebra needed. This is a [[dm-combinatorial-proof|combinatorial proof]] (also called *double counting*), and it often explains **why** an identity is true where algebra only confirms **that** it is.',
        },
        {
          type: 'theorem',
          name: 'Symmetry of binomial coefficients',
          tex: '\\binom{n}{k} = \\binom{n}{n-k}, \\qquad 0 \\le k \\le n',
        },
        {
          type: 'derivation',
          title: 'A combinatorial proof of symmetry',
          steps: [
            { tex: 'S = \\{\\, \\text{ways to split } n \\text{ players into a team of } k \\text{ and a bench of } n-k \\,\\}', why: 'Pick the set to count. A good choice is something both sides obviously describe.' },
            { tex: '|S| = \\binom{n}{k}', why: 'Choose the $k$ players on the team; the rest are automatically on the bench.' },
            { tex: '|S| = \\binom{n}{n-k}', why: 'Equally, choose the $n - k$ benched players; the rest are automatically the team.' },
            { tex: '\\binom{n}{k} = \\binom{n}{n-k}', why: 'Both expressions count the same finite set, so they are equal. $\\blacksquare$' },
          ],
          result: 'Choosing who is **in** is the same as choosing who is **out**. (Formally, taking complements is a bijection from $k$-subsets to $(n-k)$-subsets.)',
        },
        {
          type: 'p',
          text: 'The squad question gave a second identity for free. Count (squad of $k$, leader) pairs from $n$ soldiers: squad first gives $k\\binom{n}{k}$; leader first gives $n\\binom{n-1}{k-1}$. So',
        },
        {
          type: 'math',
          tex: 'k\\binom{n}{k} = n\\binom{n-1}{k-1}, \\qquad 1 \\le k \\le n',
          caption: 'The "committee–chair" identity. Algebraically it is a two-line factorial manipulation; combinatorially it is obvious.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What graders look for',
          text: 'A combinatorial proof must (1) **name the set** being counted precisely, (2) explain why the left side counts it, (3) explain why the right side counts it — each with a clear construction, usually via the product and sum rules — and (4) conclude equality. "Both sides count committees" with no constructions earns little credit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Arrange the steps of a combinatorial proof that $k\\binom{n}{k} = n\\binom{n-1}{k-1}$.',
      lines: [
        'Let $S$ be the set of pairs (committee of $k$ people chosen from $n$, a chair who is a member of that committee).',
        'Choose the committee in $\\binom{n}{k}$ ways, then its chair in $k$ ways: $|S| = k\\binom{n}{k}$.',
        'Now count the same set $S$ a second way: choose the chair from all $n$ people, then the other $k - 1$ members from the remaining $n - 1$, so $|S| = n\\binom{n-1}{k-1}$.',
        'Both expressions count $S$, so $k\\binom{n}{k} = n\\binom{n-1}{k-1}$. $\\blacksquare$',
      ],
      explanation: 'Define the set first (without it the counts mean nothing), count it one way (the left side), count it a second way (the right side), then conclude. Notice that neither count needs any algebra: each is a direct product-rule construction, and equality follows simply because both count the same finite set.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'Just as $\\binom{n}{k} = \\binom{n}{n-k}$, it is also true that $P(n, k) = P(n, n - k)$ for all $0 \\le k \\le n$.',
      answer: false,
      explanation: 'Counterexample: $P(5, 1) = 5$ but $P(5, 4) = 5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$. The complement trick works for **sets** because a $k$-subset determines its complement uniquely. An ordered list of $k$ items determines the *set* of the remaining $n - k$ items, but not an *order* on them, so there is no bijection. In fact $P(n, k) = \\binom{n}{k}k!$ and $P(n, n-k) = \\binom{n}{k}(n-k)!$, which differ unless $k! = (n-k)!$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Generating permutations and subsets in code',
      blocks: [
        {
          type: 'p',
          text: 'Counting tells you **how many**; often you need to **visit each one** — to brute-force a puzzle, test every turn order, or try every combination of upgrades. The C++ standard library and bit tricks make both easy.',
        },
        {
          type: 'heading',
          text: 'Permutations in lexicographic order',
        },
        {
          type: 'p',
          text: '`std::next_permutation` rearranges a sequence into the next one in dictionary order and returns `false` after the last (fully descending) one. Starting from sorted order, a `do … while` loop visits all $n!$ permutations exactly once. The algorithm behind it is short:',
        },
        {
          type: 'derivation',
          title: 'Next permutation after $1\\ 3\\ 5\\ 4\\ 2$',
          steps: [
            { tex: '1\\ \\boxed{3}\\ 5\\ 4\\ 2', why: 'Find the **pivot**: the rightmost position $i$ with $a_i < a_{i+1}$. The suffix after it ($5\\,4\\,2$) is descending — already the *last* arrangement of those values — so position $i$ must change.' },
            { tex: '1\\ 3\\ 5\\ \\boxed{4}\\ 2', why: 'In the suffix, find the **smallest value larger than the pivot**: $4$ (scan from the right for the first value $> 3$). It becomes the new value at the pivot position — the smallest possible increase.' },
            { tex: '1\\ 4\\ 5\\ 3\\ 2', why: 'Swap them. The suffix $5\\,3\\,2$ is still descending.' },
            { tex: '1\\ 4\\ 2\\ 3\\ 5', why: 'Reverse the suffix to make it ascending: the *smallest* arrangement of the suffix, so no permutation is skipped.' },
          ],
          result: 'The next permutation is $1\\ 4\\ 2\\ 3\\ 5$.',
        },
        {
          type: 'heading',
          text: 'Subsets as bit masks',
        },
        {
          type: 'p',
          text: 'A subset of $\\{0, 1, \\dots, n-1\\}$ is an $n$-bit integer: bit $i$ is $1$ exactly when $i$ is in the subset. So `for (mask = 0; mask < (1u << n); ++mask)` visits all $2^n$ subsets, and keeping only masks with exactly $k$ bits set (`std::popcount`, C++20) visits the $\\binom{n}{k}$ $k$-subsets.',
        },
        {
          type: 'code',
          title: 'generate.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <bit>
#include <cstdio>
#include <string>

int main() {
    // 1) All permutations of "ABC" in lexicographic order.
    std::string s = "ABC";                   // must start sorted
    do {
        std::printf("%s ", s.c_str());
    } while (std::next_permutation(s.begin(), s.end()));
    std::printf("\\n");

    // 2) All 2-element subsets of {0,1,2,3,4} as bit masks.
    const int n = 5, k = 2;
    int count = 0;
    for (unsigned mask = 0; mask < (1u << n); ++mask) {
        if (std::popcount(mask) != k) continue;  // keep masks with k bits set
        std::printf("{");
        for (int i = 0; i < n; ++i)
            if (mask & (1u << i)) std::printf(" %d", i);
        std::printf(" } ");
        ++count;
    }
    std::printf("\\ncount = %d = C(5,2)\\n", count);
}`,
          output: `ABC ACB BAC BCA CAB CBA
{ 0 1 } { 0 2 } { 1 2 } { 0 3 } { 1 3 } { 2 3 } { 0 4 } { 1 4 } { 2 4 } { 3 4 }
count = 10 = C(5,2)`,
          annotations: [
            { lines: '8-11', text: 'Start from the sorted string, or the loop stops early and misses permutations.' },
            { lines: '17-18', text: 'All $2^5 = 32$ masks are tried; the $\\binom{5}{2} = 10$ with two bits set survive.' },
            { lines: '20-21', text: 'Bit $i$ of the mask says whether element $i$ is in the subset.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Factorial growth is brutal',
          text: 'Enumeration is only for small $n$. $10! = 3{,}628{,}800$ permutations is instant; $15! \\approx 1.3 \\times 10^{12}$ takes hours; $20! \\approx 2.4 \\times 10^{18}$ would take decades even at a billion permutations per second. Subsets fare a little better: $2^{30} \\approx 10^9$ is about the practical limit. Knowing these counts *before* writing the loop is exactly what this unit is for.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Apply the next-permutation algorithm to $2\\ 1\\ 4\\ 3$. Type each entry of the result.',
      template: 'The permutation after $2\\ 1\\ 4\\ 3$ is ___ ___ ___ ___',
      blanks: [{ answers: ['2'] }, { answers: ['3'] }, { answers: ['1'] }, { answers: ['4'] }],
      hint: 'Pivot: rightmost $a_i < a_{i+1}$. Then swap it with the smallest larger value to its right, and reverse the suffix.',
      explanation: 'The pivot is the $1$ (since $1 < 4$, and the suffix $4\\,3$ is descending). The smallest suffix value larger than $1$ is $3$; swapping gives $2\\,3\\,4\\,1$. Reversing the suffix $4\\,1$ gives $2\\,3\\,1\\,4$. Check by listing in dictionary order: $\\dots, 2143, 2314, \\dots$ — nothing starting with $21$ comes after $2143$, and the smallest permutation starting with $23$ is $2314$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'How many integers `mask` with $0 \\le$ `mask` $< 2^6$ have exactly $3$ bits set (that is, `std::popcount(mask) == 3`)?',
      hint: 'Each such mask is a choice of which $3$ of the $6$ bit positions are $1$.',
      label: 'masks $=$',
      answer: '20',
      explanation: 'A 6-bit mask with three $1$s is determined by the **set** of positions holding $1$s, so there are $\\binom{6}{3} = \\frac{6 \\cdot 5 \\cdot 4}{3!} = 20$ of them. By symmetry, the same number of masks have exactly three $0$s — the same masks, in fact, since $6 - 3 = 3$.',
    },
  ],
  takeaways: [
    '$P(n, k) = n(n-1)\\cdots(n-k+1) = \\dfrac{n!}{(n-k)!}$ counts ordered selections without repetition; $n!$ counts orderings of $n$ objects.',
    '$\\binom{n}{k} = \\dfrac{P(n, k)}{k!}$: each $k$-subset appears as exactly $k!$ ordered lists (the division rule). Swap two items: if the outcome changes, order matters.',
    'Restrictions: fill the most restricted slot first; glue items that must be together into a block; count "apart" by complement or by gaps. Circular seatings: $(n - 1)!$.',
    'Count each object exactly once: choose interchangeable things (two pair ranks) as a set, distinguishable things (triple rank vs pair rank) in order.',
    'A combinatorial proof counts one set in two ways: $\\binom{n}{k} = \\binom{n}{n-k}$ and $k\\binom{n}{k} = n\\binom{n-1}{k-1}$.',
    '`std::next_permutation` visits all $n!$ orderings; bit masks with `std::popcount` visit all $2^n$ subsets or the $\\binom{n}{k}$ $k$-subsets.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Sections 1.3–1.5)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Combinations and permutations, and a whole section on combinatorial proofs with many practice identities.',
    },
    {
      title: 'Wikipedia — Poker probability',
      url: 'https://en.wikipedia.org/wiki/Poker_probability',
      source: 'wikipedia',
      note: 'The full table of five-card hand counts, with the combination formula behind each one.',
    },
    {
      title: 'Wikipedia — Permutation (Generation in lexicographic order)',
      url: 'https://en.wikipedia.org/wiki/Permutation',
      source: 'wikipedia',
      note: 'The next-permutation algorithm used by std::next_permutation, and other generation methods.',
    },
  ],
};
