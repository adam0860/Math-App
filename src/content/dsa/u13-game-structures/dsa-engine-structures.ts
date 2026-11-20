import type { Lesson } from '../../types';

// Algo frames come from scratch scripts that run the algorithms; every runnable program was compiled and run.
export const lesson: Lesson = {
  id: 'dsa-engine-structures',
  title: 'Data Structures in Game Engines',
  summary: 'The containers inside a game engine: object pools with free lists, generational handles and slot maps that never dangle, entity component systems built on sparse sets or archetypes, arena allocators, and double-buffered event queues.',
  minutes: 25,
  objectives: [
    'Implement an object pool whose free list lives inside the free slots, with $O(1)$ acquire and release',
    'Explain how raw pointers and indices go stale, and detect stale references with generational handles',
    'Build a slot map that keeps values packed while handles stay valid, using swap-and-pop plus a back-reference',
    'Store ECS components in sparse sets, maintain the invariant `sparse[dense[i]] == i`, and compare sparse sets with archetype tables',
    'Allocate from an arena with correct alignment, and use `std::pmr::monotonic_buffer_resource`',
    'Use a double-buffered event queue so handlers can post events safely while events are being dispatched',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Object pools and free lists',
      blocks: [
        {
          type: 'p',
          text: 'A game creates and destroys thousands of short-lived things every second: bullets, sparks, decals, sound voices, network packets. Calling `new` and `delete` for each one is a bad idea, for three reasons. A general-purpose allocator call is slow and its cost is unpredictable (it may search free blocks or take a lock). Objects end up scattered across the heap, so updating them all is a string of [[dsa-cache-miss|cache misses]]. And after hours of play the heap fragments. A frame budget of $16.7$ ms has no room for any of that.',
        },
        {
          type: 'definition',
          term: 'Object pool',
          text: 'An [[dsa-object-pool|object pool]] allocates a fixed array of objects once, up front. `acquire` hands out an unused slot and `release` gives it back; the memory itself is never freed during play. A [[dsa-free-list|free list]] makes both operations $O(1)$: it is a stack of the free slots, and each free slot stores the index of the next free slot **in its own unused bytes**.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 470 204" xmlns="http://www.w3.org/2000/svg">
<rect x="25.0" y="92.0" width="60.0" height="46.0" rx="5" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/>
<text x="55.0" y="120.0" text-anchor="middle" font-size="15" font-weight="700" class="t-blue">P7</text>
<text x="55.0" y="155.0" text-anchor="middle" font-size="12" class="t-gray">0</text>
<rect x="91.0" y="92.0" width="60.0" height="46.0" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="121.0" y="120.0" text-anchor="middle" font-size="15" font-weight="700" class="t-gray">→3</text>
<text x="121.0" y="155.0" text-anchor="middle" font-size="12" class="t-gray">1</text>
<rect x="157.0" y="92.0" width="60.0" height="46.0" rx="5" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/>
<text x="187.0" y="120.0" text-anchor="middle" font-size="15" font-weight="700" class="t-blue">P2</text>
<text x="187.0" y="155.0" text-anchor="middle" font-size="12" class="t-gray">2</text>
<rect x="223.0" y="92.0" width="60.0" height="46.0" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="253.0" y="120.0" text-anchor="middle" font-size="15" font-weight="700" class="t-gray">→5</text>
<text x="253.0" y="155.0" text-anchor="middle" font-size="12" class="t-gray">3</text>
<rect x="289.0" y="92.0" width="60.0" height="46.0" rx="5" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/>
<text x="319.0" y="120.0" text-anchor="middle" font-size="15" font-weight="700" class="t-blue">P9</text>
<text x="319.0" y="155.0" text-anchor="middle" font-size="12" class="t-gray">4</text>
<rect x="355.0" y="92.0" width="60.0" height="46.0" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="385.0" y="120.0" text-anchor="middle" font-size="15" font-weight="700" class="t-gray">→∅</text>
<text x="385.0" y="155.0" text-anchor="middle" font-size="12" class="t-gray">5</text>
<text x="21.0" y="30.0" text-anchor="start" font-size="13" font-weight="700" class="t-orange">freeHead = 1</text>
<line x1="65.0" y1="36.0" x2="111.9" y2="82.9" stroke="currentColor" stroke-width="1.8" class="s-orange"/><path d="M117.0,88.0 L109.4,85.5 L114.5,80.4 Z" fill="currentColor" class="f-orange"/>
<path d="M127.0,90 Q187.0,40 247.0,86" fill="none" stroke="currentColor" stroke-width="1.6" class="s-gray"/>
<path d="M247.0,89.0 L238.0,82.0 L245.0,77.0 Z" fill="currentColor" class="f-gray"/>
<path d="M259.0,90 Q319.0,40 379.0,86" fill="none" stroke="currentColor" stroke-width="1.6" class="s-gray"/>
<path d="M379.0,89.0 L370.0,82.0 L377.0,77.0 Z" fill="currentColor" class="f-gray"/>
<text x="25.0" y="180.0" text-anchor="start" font-size="12" class="t-gray">live particles (blue) and free slots (gray) share one array;</text>
<text x="25.0" y="196.0" text-anchor="start" font-size="12" class="t-gray">a free slot's bytes hold the index of the next free slot.</text>
</svg>`,
          alt: 'Six slots in a row. Slots 0, 2 and 4 hold live particles P7, P2 and P9 in blue. Slots 1, 3 and 5 are gray and hold arrows: slot 1 holds "to 3", slot 3 holds "to 5", slot 5 holds "to nothing". An orange label freeHead = 1 points at slot 1, and curved arrows link slot 1 to 3 and 3 to 5.',
          caption: 'Live objects and free slots share one array. The free list $1 \\to 3 \\to 5$ is threaded through the free slots themselves: an intrusive stack that costs no extra memory.',
          maxWidth: 460,
        },
        {
          type: 'derivation',
          title: 'Why acquire and release are $O(1)$',
          steps: [
            { tex: '\\text{invariant: the slots reachable from } \\texttt{freeHead} \\text{ are exactly the free slots}', why: 'Initially every slot is free and linked $0 \\to 1 \\to \\dots \\to N - 1$. Each operation below preserves the invariant.' },
            { tex: '\\texttt{acquire}: \\ i = \\texttt{freeHead}, \\ \\texttt{freeHead} = \\texttt{next}[i]', why: 'Pop the [[dsa-stack|stack]]: slot $i$ leaves the list, the rest of the list is untouched. Two assignments.' },
            { tex: '\\texttt{release}(i): \\ \\texttt{next}[i] = \\texttt{freeHead}, \\ \\texttt{freeHead} = i', why: 'Push: slot $i$ joins the list at the front. Two assignments.' },
            { tex: '\\text{no search, no loop} \\implies O(1) \\text{ worst case}', why: 'Not amortized, not expected: every call does the same constant work. That predictability is what a frame budget needs.' },
          ],
          result: 'Because the list is a stack, the most recently released slot is reused first (LIFO). That slot was touched a moment ago, so it is likely still in cache.',
        },
        {
          type: 'code',
          title: 'pool.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>

struct Particle { float x, y, vx, vy; int life; };

// Fixed-capacity pool. A free slot reuses its own bytes to store the index of the next
// free slot, so the free list costs no extra memory: it is an intrusive stack.
template <int N>
class ParticlePool {
    union Slot { Particle p; int nextFree; };
    std::array<Slot, N> slots_;
    std::array<bool, N> alive_{};
    int freeHead_ = 0;                          // -1 when the pool is full

public:
    ParticlePool() {
        for (int i = 0; i < N; ++i) slots_[i].nextFree = i + 1 < N ? i + 1 : -1;
    }
    int acquire(const Particle& init) {         // O(1): pop the free stack
        if (freeHead_ < 0) return -1;           // full: caller decides (drop, recycle oldest...)
        int i = freeHead_;
        freeHead_ = slots_[i].nextFree;
        slots_[i].p = init;                     // assignment makes p the active member
        alive_[i] = true;
        return i;
    }
    void release(int i) {                       // O(1): push onto the free stack
        alive_[i] = false;
        slots_[i].nextFree = freeHead_;
        freeHead_ = i;
    }
    Particle& operator[](int i) { return slots_[i].p; }
    bool alive(int i) const { return alive_[i]; }
    void printFreeList() const {
        std::printf("  free list:");
        for (int i = freeHead_; i >= 0; i = slots_[i].nextFree) std::printf(" %d", i);
        std::printf("\\n");
    }
};

int main() {
    ParticlePool<6> pool;
    pool.printFreeList();

    int a = pool.acquire({0, 0, 1, 0, 3});
    int b = pool.acquire({0, 0, 0, 1, 1});
    int c = pool.acquire({0, 0, -1, 0, 2});
    std::printf("acquired slots %d %d %d\\n", a, b, c);
    pool.printFreeList();

    pool.release(b);
    pool.release(a);
    std::printf("released %d, then %d\\n", b, a);
    pool.printFreeList();

    int d = pool.acquire({5, 5, 0, 0, 9});
    std::printf("next acquire gets slot %d (the most recently freed: LIFO)\\n", d);
    pool.printFreeList();

    // The danger: an old index still "works" after its particle died and the slot was reused.
    int remembered = a;                         // some system kept particle a's index
    std::printf("stale index %d now reads a particle with life %d (it was 3)\\n",
                remembered, pool[remembered].life);
}`,
          output: `  free list: 0 1 2 3 4 5
acquired slots 0 1 2
  free list: 3 4 5
released 1, then 0
  free list: 0 1 3 4 5
next acquire gets slot 0 (the most recently freed: LIFO)
  free list: 1 3 4 5
stale index 0 now reads a particle with life 9 (it was 3)`,
          annotations: [
            { lines: 10, text: 'The union lets a free slot reuse the particle\'s bytes for `nextFree`. Only the member last written is read, so this is not type punning.' },
            { lines: '19-26', text: '`acquire` pops the free stack. A full pool returns $-1$, and the caller chooses a policy: skip the effect, recycle the oldest particle, or grow by adding another fixed block.' },
            { lines: '27-31', text: '`release` pushes the slot back. No destructor call, no `delete`: the memory stays in the pool.' },
            { lines: '60-63', text: 'The catch. Slot $0$ was released and reacquired by a different particle, and the old index still "works": it silently reads the new particle. The next card fixes exactly this.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Pools in engines',
          text: 'Particle systems, projectile managers, audio voices and networking layers are almost always pools. Robert Nystrom\'s *Game Programming Patterns* has a chapter on the pattern, including the free-list trick. Engines ship pooling helpers too (Unity has `ObjectPool<T>`, Unreal pools Niagara particle components), because spawning a fresh actor or prefab per bullet costs far more than reusing one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A pool of $5$ slots starts with the free list $0 \\to 1 \\to 2 \\to 3 \\to 4$ and works like `pool.cpp` (acquire pops the head, release pushes onto the head). You acquire four objects (they get slots $0, 1, 2, 3$), then release slot $2$, then slot $0$, then slot $3$, and then acquire twice. Which slot does the **second** of those two acquires return?',
      label: 'slot $=$',
      answer: '0',
      hint: 'Write the free list after each release. Each release puts its slot at the front.',
      explanation: 'After the four acquires the free list is $4$. Release $2$: $2 \\to 4$. Release $0$: $0 \\to 2 \\to 4$. Release $3$: $3 \\to 0 \\to 2 \\to 4$. The first acquire pops $3$, the second pops $\\mathbf{0}$. Slots come back in reverse order of release (LIFO), which is exactly why an old index to slot $0$ would now silently refer to a brand-new object.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Dangling references and generational handles',
      blocks: [
        {
          type: 'p',
          text: 'A homing missile stores its target. A squad leader stores its members. A UI marker stores the enemy it tracks. If those references are raw pointers or plain indices, they go stale in several ways, each one a [[dsa-dangling-pointer|dangling pointer]] in disguise:',
        },
        {
          type: 'list',
          items: [
            '`delete` the object: the pointer now points at freed memory. Using it is undefined behavior: a crash today, corrupted data next week.',
            'The object lives in a `std::vector` that grows: `push_back` may reallocate and move every element ([[dsa-iterator-invalidation|iterator invalidation]]), so every pointer into it dangles.',
            'Removal by [[dsa-swap-and-pop|swap-and-pop]] moves the last element into the hole: anyone who stored that element\'s index now refers to the wrong slot.',
            'A pool reuses a released slot: the old pointer or index is "valid" memory, but holds a different object. This is the worst case, because nothing crashes. The missile just starts chasing a stranger.',
          ],
        },
        {
          type: 'definition',
          term: 'Generational handle',
          text: 'Refer to a pooled object by a [[dsa-generational-handle|handle]] $(\\text{index}, \\text{generation})$ instead of a pointer. Each slot keeps a generation counter that is **incremented every time its object is destroyed**. A handle is valid only if the slot is alive and its generation equals the handle\'s; otherwise `get` returns `nullptr`.',
        },
        {"type": "algo", "view": "array", "interval": 1700, "code": "Handle create(const T& v) {\n    uint32_t i = freeHead;  // pop a free slot\n    freeHead = slots[i].nextFree;\n    slots[i].value = v;\n    slots[i].alive = true;\n    return {i, slots[i].gen};\n}\nvoid destroy(Handle h) {\n    if (!valid(h)) return;  // stale or double destroy\n    slots[h.index].alive = false;\n    ++slots[h.index].gen;  // all old handles go stale\n    slots[h.index].nextFree = freeHead;  // push on the free list\n    freeHead = h.index;\n}\nbool valid(Handle h) {\n    const Slot& s = slots[h.index];\n    return s.alive && s.gen == h.gen;\n}\nT* get(Handle h) { return valid(h) ? &slots[h.index].value : nullptr; }", "frames": [{"note": "Four slots, all free. Each free slot stores the index of the next free one (`→1` …), so the free list costs no extra memory.", "array": ["→1", "→2", "→3", "→∅"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 0, "label": "free", "color": "gray"}], "lines": [], "vars": [["gen[]", "0 0 0 0"], ["freeHead", "0"], ["handles", "–"]]}, {"note": "`create(Grunt)`: pop slot $0$ from the free list. The handle is $(0, 0)$.", "array": ["Grunt", "→2", "→3", "→∅"], "marks": [{"index": 0, "color": "orange"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 1, "label": "free", "color": "gray"}, {"index": 0, "label": "grunt"}], "lines": [1, 2, 3, 4, 5, 6], "vars": [["gen[]", "0 0 0 0"], ["freeHead", "1"], ["handles", "grunt (0,0)"]]}, {"note": "`create(Sniper)`: pop slot $1$ from the free list. The handle is $(1, 0)$.", "array": ["Grunt", "Sniper", "→3", "→∅"], "marks": [{"index": 1, "color": "orange"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 2, "label": "free", "color": "gray"}, {"index": 1, "label": "sniper"}], "lines": [1, 2, 3, 4, 5, 6], "vars": [["gen[]", "0 0 0 0"], ["freeHead", "2"], ["handles", "grunt (0,0), sniper (1,0)"]]}, {"note": "`create(Tank)`: pop slot $2$ from the free list. The handle is $(2, 0)$.", "array": ["Grunt", "Sniper", "Tank", "→∅"], "marks": [{"index": 2, "color": "orange"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 3, "label": "free", "color": "gray"}, {"index": 2, "label": "tank"}], "lines": [1, 2, 3, 4, 5, 6], "vars": [["gen[]", "0 0 0 0"], ["freeHead", "3"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0)"]]}, {"note": "`destroy(sniper)` with handle $(1, 0)$: valid, so free slot $1$, bump its generation to $1$ and push it on the free list.", "array": ["Grunt", "→3", "Tank", "→∅"], "marks": [{"index": 1, "color": "red"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 1, "label": "free", "color": "gray"}], "lines": [8, 9, 10, 11, 12, 13], "vars": [["gen[]", "0 1 0 0"], ["freeHead", "1"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0)"]]}, {"note": "`destroy(grunt)` with handle $(0, 0)$: valid, so free slot $0$, bump its generation to $1$ and push it on the free list.", "array": ["→1", "→3", "Tank", "→∅"], "marks": [{"index": 0, "color": "red"}, {"index": 1, "color": "gray"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 0, "label": "free", "color": "gray"}], "lines": [8, 9, 10, 11, 12, 13], "vars": [["gen[]", "1 1 0 0"], ["freeHead", "0"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0)"]]}, {"note": "`create(Drone)`: pop slot $0$ from the free list — a reused slot, now generation $1$. The handle is $(0, 1)$.", "array": ["Drone", "→3", "Tank", "→∅"], "marks": [{"index": 0, "color": "purple"}, {"index": 1, "color": "gray"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 1, "label": "free", "color": "gray"}, {"index": 0, "label": "drone"}], "lines": [1, 2, 3, 4, 5, 6], "vars": [["gen[]", "1 1 0 0"], ["freeHead", "1"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0), drone (0,1)"]]}, {"note": "`get(grunt)` with the old handle $(0, 0)$: slot $0$ is alive but holds generation $1$, not $0$. Stale: return `nullptr`. A raw index $0$ would silently hand back the Drone.", "array": ["Drone", "→3", "Tank", "→∅"], "marks": [{"index": 0, "color": "red"}, {"index": 1, "color": "gray"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 1, "label": "free", "color": "gray"}, {"index": 0, "label": "grunt", "color": "red"}], "lines": [15, 16, 17, 18, 19], "vars": [["gen[]", "1 1 0 0"], ["freeHead", "1"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0), drone (0,1)"], ["get(grunt)", "nullptr"]]}, {"note": "`get(drone)` with $(0, 1)$: alive and generations match, so it returns the Drone.", "array": ["Drone", "→3", "Tank", "→∅"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "gray"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 1, "label": "free", "color": "gray"}, {"index": 0, "label": "drone", "color": "green"}], "lines": [15, 16, 17, 18, 19], "vars": [["gen[]", "1 1 0 0"], ["freeHead", "1"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0), drone (0,1)"], ["get(drone)", "Drone"]]}, {"note": "`destroy(sniper)` again with the old handle $(1, 0)$: slot $1$ has generation $1$, so the handle is stale and nothing happens. A raw index would have destroyed whatever lives there now.", "array": ["Drone", "→3", "Tank", "→∅"], "marks": [{"index": 1, "color": "red"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 1, "label": "sniper, free", "color": "red"}], "lines": [8, 9, 15, 16, 17, 18], "vars": [["gen[]", "1 1 0 0"], ["freeHead", "1"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0), drone (0,1)"]]}, {"note": "`create(Medic)`: pop slot $1$ from the free list — a reused slot, now generation $1$. The handle is $(1, 1)$.", "array": ["Drone", "Medic", "Tank", "→∅"], "marks": [{"index": 1, "color": "purple"}, {"index": 3, "color": "gray"}], "pointers": [{"index": 3, "label": "free", "color": "gray"}, {"index": 1, "label": "medic"}], "lines": [1, 2, 3, 4, 5, 6], "vars": [["gen[]", "1 1 0 0"], ["freeHead", "3"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0), drone (0,1), medic (1,1)"]]}, {"note": "Every operation was $O(1)$: a pop or push on the free list plus one generation compare. Handles to dead objects (`grunt`, `sniper`) stay safely stale.", "array": ["Drone", "Medic", "Tank", "→∅"], "marks": [{"index": 3, "color": "gray"}], "pointers": [{"index": 3, "label": "free", "color": "gray"}], "lines": [], "vars": [["gen[]", "1 1 0 0"], ["freeHead", "3"], ["handles", "grunt (0,0), sniper (1,0), tank (2,0), drone (0,1), medic (1,1)"]]}], "caption": "Cells hold the live object or, for a free slot (gray), the next free index. `free` marks the free-list head. The handle list keeps the dead objects' old handles to show they go stale."},
        {
          type: 'derivation',
          title: 'Why a stale handle is always caught',
          steps: [
            { tex: '\\texttt{create} \\text{ returns } (i, g) \\text{ with } g = \\texttt{gen}[i]', why: 'The handle records the slot\'s generation at the moment the object was born.' },
            { tex: '\\texttt{destroy} \\implies \\texttt{gen}[i] \\ge g + 1', why: 'Destroying that object increments the counter, and generations of a slot only ever go up.' },
            { tex: '\\text{every later occupant has } \\texttt{gen}[i] \\ne g', why: 'Anything created in slot $i$ afterwards gets the new, larger generation.' },
            { tex: '\\implies \\texttt{get}(i, g) = \\texttt{nullptr}', why: 'The comparison fails for the rest of the slot\'s life, whoever lives there now.' },
          ],
          result: 'The only escape is wrap-around: with $b$ generation bits, after $2^b$ destroys in the same slot the counter returns to $g$. With $12$ bits that takes $4096$ reuses of one slot while someone still holds the ancient handle; engines that worry about it use wider counters or retire a slot when its counter would wrap.',
        },
        {
          type: 'table',
          headers: ['Handle layout', 'Index bits', 'Max live objects', 'Generation bits', 'Reuses before wrap'],
          rows: [
            ['32-bit, 20 + 12', '$20$', '$2^{20} = 1\\,048\\,576$', '$12$', '$4096$'],
            ['32-bit, 24 + 8', '$24$', '$2^{24} \\approx 16.8$ million', '$8$', '$256$'],
            ['64-bit, 32 + 32', '$32$', '$\\approx 4.3$ billion', '$32$', '$\\approx 4.3$ billion'],
          ],
          caption: 'A handle is a plain integer: trivially copyable, hashable, and meaningful in a save file or a network message, unlike a pointer.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why not `std::weak_ptr`?',
          text: '`std::weak_ptr` also detects that an object died, but it needs a heap-allocated control block per object, atomic reference counts on every copy and lock, and a pointer chase on every access, and it ties the object\'s lifetime to whoever holds a `shared_ptr`. A handle is $4$ or $8$ bytes, costs one array read and one compare to check, and leaves ownership where it belongs: with the pool.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A pool uses generational handles. `destroy` is correct, but stale handles still reach new objects. Which line is the bug? (Handles always come from this pool, so their indices are in range.)',
      lines: [
        '`void destroy(Handle h) {`',
        '`    if (!valid(h)) return;`',
        '`    slots[h.index].alive = false;`',
        '`    ++slots[h.index].gen;`',
        '`    slots[h.index].nextFree = freeHead; freeHead = h.index;`',
        '`}`',
        '`bool valid(Handle h) {`',
        '`    return slots[h.index].alive;`',
        '`}`',
      ],
      errorLines: [8],
      explanation: 'Line 8 checks only that **something** is alive in the slot. Once the slot is reused, the new occupant is alive, so an old handle passes and reaches the wrong object: exactly the bug generations exist to prevent. The fix compares generations too: `return slots[h.index].alive && slots[h.index].gen == h.gen;`. `destroy` is fine: it validates, marks the slot dead, bumps the generation and pushes the slot on the free list.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Slot maps: stable handles over a packed array',
      blocks: [
        {
          type: 'p',
          text: 'A generational pool has holes: iterating over "all live enemies" walks every slot, dead ones included. When a system updates every object each frame, you want the values **packed**, with no holes, like a `std::vector` that you erase from by swap-and-pop. But swap-and-pop moves elements, which is what broke indices in the first place. A [[dsa-slot-map|slot map]] gets both, by adding one level of indirection.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 366" xmlns="http://www.w3.org/2000/svg">
<text x="20.0" y="26.0" text-anchor="start" font-size="12" class="t-gray">handle</text>
<rect x="20.0" y="34.0" width="92.0" height="38.0" rx="6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" class="s-orange f-orange"/>
<text x="66.0" y="58.0" text-anchor="middle" font-size="14" font-weight="700" class="t-orange">(1, gen 1)</text>
<text x="160.0" y="26.0" text-anchor="start" font-size="12" class="t-gray">slots_ (index → dense position, generation)</text>
<rect x="160.0" y="34.0" width="26.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="173.0" y="54.0" text-anchor="middle" font-size="12" class="t-gray">0</text>
<rect x="186.0" y="34.0" width="92.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="232.0" y="54.0" text-anchor="middle" font-size="13">dense 0</text>
<rect x="278.0" y="34.0" width="64.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="310.0" y="54.0" text-anchor="middle" font-size="13">gen 0</text>
<rect x="160.0" y="64.0" width="26.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="173.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray">1</text>
<rect x="186.0" y="64.0" width="92.0" height="30.0" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4" class="s-purple f-purple"/>
<text x="232.0" y="84.0" text-anchor="middle" font-size="13" font-weight="700" class="t-purple">dense 3</text>
<rect x="278.0" y="64.0" width="64.0" height="30.0" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4" class="s-purple f-purple"/>
<text x="310.0" y="84.0" text-anchor="middle" font-size="13" font-weight="700" class="t-purple">gen 1</text>
<rect x="160.0" y="94.0" width="26.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="173.0" y="114.0" text-anchor="middle" font-size="12" class="t-gray">2</text>
<rect x="186.0" y="94.0" width="92.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="232.0" y="114.0" text-anchor="middle" font-size="13">dense 2</text>
<rect x="278.0" y="94.0" width="64.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="310.0" y="114.0" text-anchor="middle" font-size="13">gen 0</text>
<rect x="160.0" y="124.0" width="26.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="173.0" y="144.0" text-anchor="middle" font-size="12" class="t-gray">3</text>
<rect x="186.0" y="124.0" width="92.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="232.0" y="144.0" text-anchor="middle" font-size="13">dense 1</text>
<rect x="278.0" y="124.0" width="64.0" height="30.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="310.0" y="144.0" text-anchor="middle" font-size="13">gen 0</text>
<line x1="112.0" y1="53.0" x2="149.8" y2="75.3" stroke="currentColor" stroke-width="1.8" class="s-orange"/><path d="M156.0,79.0 L148.0,78.5 L151.7,72.2 Z" fill="currentColor" class="f-orange"/>
<text x="20.0" y="252.0" text-anchor="start" font-size="12" class="t-gray">values_ (packed)</text>
<text x="20.0" y="306.0" text-anchor="start" font-size="12" class="t-gray">owner_ (back-refs)</text>
<rect x="160.0" y="230.0" width="76.0" height="36.0" rx="5" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/>
<text x="198.0" y="253.0" text-anchor="middle" font-size="14" font-weight="700" class="t-blue">Grunt</text>
<text x="198.0" y="224.0" text-anchor="middle" font-size="11" class="t-gray">0</text>
<rect x="160.0" y="286.0" width="76.0" height="30.0" rx="4" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="198.0" y="306.0" text-anchor="middle" font-size="12" class="t-gray">slot 0</text>
<rect x="242.0" y="230.0" width="76.0" height="36.0" rx="5" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/>
<text x="280.0" y="253.0" text-anchor="middle" font-size="14" font-weight="700" class="t-blue">Medic</text>
<text x="280.0" y="224.0" text-anchor="middle" font-size="11" class="t-gray">1</text>
<rect x="242.0" y="286.0" width="76.0" height="30.0" rx="4" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="280.0" y="306.0" text-anchor="middle" font-size="12" class="t-gray">slot 3</text>
<rect x="324.0" y="230.0" width="76.0" height="36.0" rx="5" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/>
<text x="362.0" y="253.0" text-anchor="middle" font-size="14" font-weight="700" class="t-blue">Tank</text>
<text x="362.0" y="224.0" text-anchor="middle" font-size="11" class="t-gray">2</text>
<rect x="324.0" y="286.0" width="76.0" height="30.0" rx="4" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="362.0" y="306.0" text-anchor="middle" font-size="12" class="t-gray">slot 2</text>
<rect x="406.0" y="230.0" width="76.0" height="36.0" rx="5" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/>
<text x="444.0" y="253.0" text-anchor="middle" font-size="14" font-weight="700" class="t-green">Drone</text>
<text x="444.0" y="224.0" text-anchor="middle" font-size="11" class="t-gray">3</text>
<rect x="406.0" y="286.0" width="76.0" height="30.0" rx="4" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<text x="444.0" y="306.0" text-anchor="middle" font-size="12" class="t-gray">slot 1</text>
<path d="M344.0,79.0 C408.0,79.0 440.0,150.0 442.0,208.0" fill="none" stroke="currentColor" stroke-width="1.8" class="s-purple"/>
<path d="M442.0,216.0 L437.0,206.0 L447.0,206.0 Z" fill="currentColor" class="f-purple"/>
<text x="20.0" y="342.0" text-anchor="start" font-size="12" class="t-gray">Lookup: check the generation, then follow dense. Erase: swap-and-pop values_, and</text>
<text x="20.0" y="358.0" text-anchor="start" font-size="12" class="t-gray">use owner_ to find (and repoint) the slot of the value that moved.</text>
</svg>`,
          alt: 'A handle (1, gen 1) points to row 1 of a slot table, which says dense 3, gen 1. An arrow goes from that row to position 3 of a packed values array holding Grunt, Medic, Tank, Drone. Below the values, an owner array holds slot 0, slot 3, slot 2, slot 1.',
          caption: 'The state of `slotmap.cpp` at the end. Handles index `slots_`; `slots_` points into the packed `values_`; `owner_` points back from each value to its slot.',
          maxWidth: 480,
        },
        {
          type: 'table',
          headers: ['Operation', 'How', 'Cost'],
          rows: [
            ['`insert(v)`', 'take a slot from the free list (or grow), append `v` to `values_`, record both directions', '$O(1)$ amortized'],
            ['`get(h)`', 'compare generations, then `values_[slots_[h.index].dense]`', '$O(1)$'],
            ['`erase(h)`', 'swap-and-pop `values_`, repoint the moved value\'s slot via `owner_`, bump the generation, free the slot', '$O(1)$'],
            ['iterate', 'walk `values_` from front to back', '$O(n)$, contiguous'],
          ],
        },
        {
          type: 'code',
          title: 'slotmap.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <string>
#include <utility>
#include <vector>

struct Handle { std::uint32_t index, gen; };

// Generational slot map: stable handles, O(1) insert / erase / lookup, and values packed
// densely so iteration is a straight walk through one array.
template <typename T>
class SlotMap {
    static constexpr std::uint32_t kNone = UINT32_MAX;
    struct Slot { std::uint32_t dense; std::uint32_t gen; };  // dense: position in values_,
                                                              // or the next free slot if free
    std::vector<Slot> slots_;
    std::vector<T> values_;                                    // packed, no holes
    std::vector<std::uint32_t> owner_;                         // owner_[d] = slot of values_[d]
    std::uint32_t freeHead_ = kNone;

public:
    Handle insert(T value) {
        std::uint32_t s;
        if (freeHead_ != kNone) {                              // reuse a freed slot
            s = freeHead_;
            freeHead_ = slots_[s].dense;
        } else {                                               // or grow
            s = std::uint32_t(slots_.size());
            slots_.push_back({0, 0});
        }
        slots_[s].dense = std::uint32_t(values_.size());
        values_.push_back(std::move(value));
        owner_.push_back(s);
        return {s, slots_[s].gen};
    }
    T* get(Handle h) {
        if (h.index >= slots_.size() || slots_[h.index].gen != h.gen) return nullptr;  // stale
        return &values_[slots_[h.index].dense];
    }
    bool erase(Handle h) {
        if (!get(h)) return false;
        std::uint32_t d = slots_[h.index].dense, last = std::uint32_t(values_.size() - 1);
        if (d != last) {                                       // swap-and-pop the value ...
            values_[d] = std::move(values_[last]);
            owner_[d] = owner_[last];
            slots_[owner_[d]].dense = d;                       // ... and repoint its slot
        }
        values_.pop_back();
        owner_.pop_back();
        ++slots_[h.index].gen;                                 // every old handle is now stale
        slots_[h.index].dense = freeHead_;                     // push the slot on the free list
        freeHead_ = h.index;
        return true;
    }
    auto begin() { return values_.begin(); }
    auto end() { return values_.end(); }
};

void show(const char* what, SlotMap<std::string>& m, Handle h) {
    std::string* p = m.get(h);
    std::printf("  %-22s (%u, %u) -> %s\\n", what, h.index, h.gen, p ? p->c_str() : "null (stale handle)");
}

int main() {
    SlotMap<std::string> enemies;
    Handle grunt = enemies.insert("Grunt");
    Handle sniper = enemies.insert("Sniper");
    Handle tank = enemies.insert("Tank");
    Handle medic = enemies.insert("Medic");

    enemies.erase(sniper);                                     // Medic moves into Sniper's dense spot
    Handle drone = enemies.insert("Drone");                    // reuses slot 1 with generation 1

    std::printf("lookups:\\n");
    show("grunt", enemies, grunt);
    show("sniper (destroyed)", enemies, sniper);
    show("drone (reused slot)", enemies, drone);
    show("tank", enemies, tank);
    show("medic (value moved)", enemies, medic);

    std::printf("dense iteration:");
    for (const std::string& e : enemies) std::printf(" %s", e.c_str());
    std::printf("\\n");
    std::printf("erase sniper again: %s\\n", enemies.erase(sniper) ? "erased" : "refused (stale)");
}`,
          output: `lookups:
  grunt                  (0, 0) -> Grunt
  sniper (destroyed)     (1, 0) -> null (stale handle)
  drone (reused slot)    (1, 1) -> Drone
  tank                   (2, 0) -> Tank
  medic (value moved)    (3, 0) -> Medic
dense iteration: Grunt Medic Tank Drone
erase sniper again: refused (stale)`,
          annotations: [
            { lines: '14-15', text: 'One field does double duty: for a live slot `dense` is the value\'s position; for a free slot it is the next free slot (the intrusive free list again).' },
            { lines: 18, text: '`owner_` is the back-reference that makes swap-and-pop safe: it tells `erase` whose slot to fix when a value moves.' },
            { lines: 37, text: 'The generation check. A destroyed or reused slot makes the handle stale, and the caller gets `nullptr` instead of a stranger.' },
            { lines: '43-47', text: 'Swap-and-pop the value, then repoint the moved value\'s slot. The guard skips the move when the erased value is already last.' },
            { lines: '50-52', text: 'Bump the generation and push the slot on the free list. The `medic` handle still works although Medic moved from dense position $3$ to $1$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Compared with the obvious alternatives',
          text: '`std::unordered_map<std::uint64_t, T>` with ever-increasing ids also gives stable keys, but every lookup hashes, every insert allocates a node, and iteration hops around the heap. `std::vector<std::unique_ptr<T>>` keeps objects in place, but every access chases a pointer and the objects are scattered. A slot map is one array read plus a compare per lookup and a linear walk for iteration. Engines use the idea under many names: handle tables, packed arrays, generational arenas.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'In the slot map, `erase(h)` swap-and-pops `values_`: the last value moves into dense position $d$, the position of the erased value. Which extra step is **essential** for correctness?',
      options: [
        { text: 'Set `slots_[owner_[d]].dense = d`, so the moved value\'s slot points at its new position', correct: true, why: 'Right. Handles to the moved value go through its slot, so that slot must point at where the value now lives. `owner_` is what tells you which slot that is in $O(1)$.' },
        { text: 'Increment the generation of the moved value\'s slot', why: 'That would make every handle to the moved value stale, although the value is still alive. Only the erased value\'s slot gets a new generation.' },
        { text: 'Find and update every handle to the moved value that the game is holding', why: 'Impossible in general and unnecessary: handles name the slot, not the dense position. Repointing the one slot updates all of them at once. That is the point of the indirection.' },
        { text: 'Re-sort `values_` so that it stays in insertion order', why: 'Order does not matter for a slot map; keeping it would cost $O(n)$ per erase. Swap-and-pop deliberately gives up order to make erase $O(1)$.' },
      ],
      explanation: 'The slot map\'s invariant runs both ways: `values_[slots_[s].dense]` is slot $s$\'s value, and `owner_[d]` is the slot of `values_[d]`. Swap-and-pop moves one value, so exactly one slot (found through `owner_`) and one `owner_` entry change. Then the erased slot gets a new generation and joins the free list.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Entity component systems and data-oriented design',
      blocks: [
        {
          type: 'p',
          text: 'The classic object-oriented game has a deep class tree (`GameObject` → `Actor` → `Character` → `Enemy` → `FlyingEnemy`), each object allocated separately and updated through a virtual `update()`. It reads well and runs poorly. Each update jumps to a different heap address and drags the whole fat object into cache to touch two fields. And the hierarchy fights you as soon as you want a flying, burning, *friendly* thing.',
        },
        {
          type: 'p',
          text: '[[dsa-data-oriented-design|Data-oriented design]] starts from the other end: a program exists to transform data, so design around the data and how it flows through the [[dsa-memory-hierarchy|memory hierarchy]]. Things rarely come one at a time; there are many bullets and many enemies, so process them in batches over contiguous arrays. Mike Acton\'s CppCon 2014 talk *Data-Oriented Design and C++* made this the default mindset in many studios. The [[dsa-struct-of-arrays|struct-of-arrays]] layout from the arrays lesson is its basic tool.',
        },
        {
          type: 'definition',
          term: 'Entity component system',
          text: 'An [[dsa-ecs|ECS]] has three parts. An **entity** is only an id. A **component** is plain data with no behavior (`Position`, `Velocity`, `Health`), stored per type in packed arrays. A **system** is a loop that processes every entity having a given set of components, e.g. movement over all entities with `Position` and `Velocity`. Behavior comes from which components an entity has, not from which class it is.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 470 358" xmlns="http://www.w3.org/2000/svg">
<text x="20.0" y="22.0" text-anchor="start" font-size="12" class="t-gray">Conceptually: a table, entities × components</text>
<text x="150.0" y="34.0" text-anchor="middle" font-size="12" font-weight="700">Position</text>
<text x="234.0" y="34.0" text-anchor="middle" font-size="12" font-weight="700">Velocity</text>
<text x="318.0" y="34.0" text-anchor="middle" font-size="12" font-weight="700">Health</text>
<text x="402.0" y="34.0" text-anchor="middle" font-size="12" font-weight="700">Burning</text>
<text x="20.0" y="58.0" text-anchor="start" font-size="12">0 player</text>
<rect x="110.0" y="42.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="150.0" y="58.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="194.0" y="42.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="234.0" y="58.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="278.0" y="42.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="318.0" y="58.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="362.0" y="42.0" width="80.0" height="22.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<text x="20.0" y="84.0" text-anchor="start" font-size="12">1 crate</text>
<rect x="110.0" y="68.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="150.0" y="84.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="194.0" y="68.0" width="80.0" height="22.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<rect x="278.0" y="68.0" width="80.0" height="22.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<rect x="362.0" y="68.0" width="80.0" height="22.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<text x="20.0" y="110.0" text-anchor="start" font-size="12">2 goblin</text>
<rect x="110.0" y="94.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="150.0" y="110.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="194.0" y="94.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="234.0" y="110.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="278.0" y="94.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="318.0" y="110.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="362.0" y="94.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="402.0" y="110.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<text x="20.0" y="136.0" text-anchor="start" font-size="12">3 bat</text>
<rect x="110.0" y="120.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="150.0" y="136.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="194.0" y="120.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="234.0" y="136.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="278.0" y="120.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="318.0" y="136.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<rect x="362.0" y="120.0" width="80.0" height="22.0" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="402.0" y="136.0" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">✓</text>
<text x="20.0" y="172.0" text-anchor="start" font-size="12" class="t-gray">Stored: one sparse set per component (dense arrays shown)</text>
<text x="20.0" y="203.0" text-anchor="start" font-size="12" font-weight="700">Position</text>
<rect x="108.0" y="184.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="140.0" y="202.0" text-anchor="middle" font-size="11" class="t-teal">e0 | data</text>
<rect x="178.0" y="184.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="210.0" y="202.0" text-anchor="middle" font-size="11" class="t-teal">e1 | data</text>
<rect x="248.0" y="184.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="280.0" y="202.0" text-anchor="middle" font-size="11" class="t-teal">e2 | data</text>
<rect x="318.0" y="184.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="350.0" y="202.0" text-anchor="middle" font-size="11" class="t-teal">e3 | data</text>
<text x="20.0" y="237.0" text-anchor="start" font-size="12" font-weight="700">Velocity</text>
<rect x="108.0" y="218.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="140.0" y="236.0" text-anchor="middle" font-size="11" class="t-teal">e0 | data</text>
<rect x="178.0" y="218.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="210.0" y="236.0" text-anchor="middle" font-size="11" class="t-teal">e2 | data</text>
<rect x="248.0" y="218.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="280.0" y="236.0" text-anchor="middle" font-size="11" class="t-teal">e3 | data</text>
<text x="20.0" y="271.0" text-anchor="start" font-size="12" font-weight="700">Health</text>
<rect x="108.0" y="252.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="140.0" y="270.0" text-anchor="middle" font-size="11" class="t-teal">e0 | data</text>
<rect x="178.0" y="252.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="210.0" y="270.0" text-anchor="middle" font-size="11" class="t-teal">e2 | data</text>
<rect x="248.0" y="252.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="280.0" y="270.0" text-anchor="middle" font-size="11" class="t-teal">e3 | data</text>
<text x="20.0" y="305.0" text-anchor="start" font-size="12" font-weight="700">Burning</text>
<rect x="108.0" y="286.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="140.0" y="304.0" text-anchor="middle" font-size="11" class="t-teal">e2 | data</text>
<rect x="178.0" y="286.0" width="64.0" height="26.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.3" class="s-teal f-teal"/>
<text x="210.0" y="304.0" text-anchor="middle" font-size="11" class="t-teal">e3 | data</text>
<text x="20.0" y="334.0" text-anchor="start" font-size="12" class="t-gray">A system over Velocity + Burning walks the smaller set (Burning: e2, e3)</text>
<text x="20.0" y="350.0" text-anchor="start" font-size="12" class="t-gray">and probes the other with contains(): no pointers, no virtual calls.</text>
</svg>`,
          alt: 'Top: a table with rows player, crate, goblin and bat and columns Position, Velocity, Health and Burning, with check marks: the player has the first three, the crate only Position, the goblin and bat all four. Bottom: four rows of packed boxes, one per component type, listing which entities have it: Position e0 e1 e2 e3; Velocity e0 e2 e3; Health e0 e2 e3; Burning e2 e3.',
          caption: 'An ECS is conceptually a sparse table, entities × components. It is stored by column: one packed array per component type, holding only the entities that have it.',
          maxWidth: 460,
        },
        {
          type: 'table',
          headers: ['Aspect', 'Object-oriented', 'ECS'],
          rows: [
            ['an enemy is', 'an instance of a class in a hierarchy', 'an id with some components'],
            ['data lives', 'inside each object, scattered across the heap', 'in one packed array per component type'],
            ['update', 'virtual call per object', 'one loop per system over arrays'],
            ['new behavior', 'new subclass (or multiple inheritance)', 'add a component and a system'],
            ['cache use', 'loads whole objects to touch a few fields', 'streams exactly the fields the system needs'],
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In shipped engines',
          text: 'Unity\'s Entities package (DOTS) and Unreal\'s Mass framework are archetype-based ECSs; the open-source EnTT library is built on sparse sets; flecs and Bevy use archetype tables. Blizzard described *Overwatch*\'s gameplay code as an ECS in a GDC 2017 talk. You do not need a full framework to benefit: a particle system stored as struct-of-arrays and updated by one loop already **is** data-oriented.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'True or false: in an entity component system, an entity is typically an object that owns pointers to its components and has a virtual `update()` method that calls their logic.',
      answer: false,
      explanation: 'False. That describes a component-based *object* model (common in older engines, and still in Unity\'s classic `GameObject`), not an ECS. In an ECS an entity is just an id, often an index plus a generation, exactly like a generational handle. Components are plain data in per-type arrays, and the logic lives in systems that loop over those arrays. Nothing has a virtual `update()`.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Sparse sets: O(1) component storage',
      blocks: [
        {
          type: 'p',
          text: 'Each component type needs a map from entity to component that supports $O(1)$ add, remove and lookup, **and** packed iteration. A hash map gives the first three but not the last. A [[dsa-sparse-set|sparse set]] gives all four with two arrays: `dense` holds the member entities packed in positions $0$ to $n - 1$ (with the component data in a parallel array), and `sparse[e]` holds the position of entity $e$ in `dense`.',
        },
        {
          type: 'theorem',
          name: 'Sparse set invariant',
          tex: '\\texttt{sparse}[\\texttt{dense}[i]] = i \\quad \\text{for all } 0 \\le i < n',
          text: 'Membership then needs no initialization of `sparse` at all: $e$ is a member exactly when `sparse[e] < n` and `dense[sparse[e]] == e`. A garbage or stale value in `sparse[e]` either points outside the packed part or at a different entity, and the cross-check rejects it.',
        },
        {"type": "algo", "view": "graph", "width": 430, "height": 174, "interval": 1700, "nodes": [{"id": "s0", "x": 40, "y": 46, "label": ""}, {"id": "s1", "x": 90, "y": 46, "label": ""}, {"id": "s2", "x": 140, "y": 46, "label": ""}, {"id": "s3", "x": 190, "y": 46, "label": ""}, {"id": "s4", "x": 240, "y": 46, "label": ""}, {"id": "s5", "x": 290, "y": 46, "label": ""}, {"id": "s6", "x": 340, "y": 46, "label": ""}, {"id": "s7", "x": 390, "y": 46, "label": ""}, {"id": "d0", "x": 40, "y": 132, "label": ""}, {"id": "d1", "x": 90, "y": 132, "label": ""}, {"id": "d2", "x": 140, "y": 132, "label": ""}, {"id": "d3", "x": 190, "y": 132, "label": ""}, {"id": "d4", "x": 240, "y": 132, "label": ""}], "edges": [], "code": "bool contains(uint32_t e) {\n    return sparse[e] < n && dense[sparse[e]] == e;\n}\nvoid insert(uint32_t e) {  // requires !contains(e)\n    dense[n] = e;\n    sparse[e] = n;\n    ++n;\n}\nvoid remove(uint32_t e) {  // requires contains(e)\n    uint32_t i = sparse[e], last = dense[n - 1];\n    dense[i] = last;  // move the last entry into the hole\n    sparse[last] = i;\n    --n;\n}", "frames": [{"note": "Top row: `sparse`, one cell per possible id $0$–$7$. It starts as **garbage** (gray): never initialized. Bottom row: `dense`, the packed members; $n = 0$.", "nodeLabels": [{"id": "s0", "label": "3"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "6"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "2"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "0"}], "nodeColors": [{"id": "s0", "color": "gray"}, {"id": "s1", "color": "gray"}, {"id": "s2", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s5", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "s7", "color": "gray"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}], "hidden": ["d0", "d1", "d2", "d3", "d4"], "lines": [], "vars": [["n", "0"], ["dense", "[]"]]}, {"note": "`insert(5)`: append $5$ at `dense[0]` and record `sparse[5] = 0`. Now $n = 1$.", "nodeLabels": [{"id": "s0", "label": "3"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "6"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "0"}, {"id": "d0", "label": "5"}], "nodeColors": [{"id": "s0", "color": "gray"}, {"id": "s1", "color": "gray"}, {"id": "s2", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "s7", "color": "gray"}, {"id": "s5", "color": "orange"}, {"id": "d0", "color": "orange"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}], "hidden": ["d1", "d2", "d3", "d4"], "lines": [4, 5, 6, 7], "vars": [["n", "1"], ["dense", "[5]"]]}, {"note": "`insert(2)`: append $2$ at `dense[1]` and record `sparse[2] = 1`. Now $n = 2$.", "nodeLabels": [{"id": "s0", "label": "3"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "0"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "2"}], "nodeColors": [{"id": "s0", "color": "gray"}, {"id": "s1", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "s7", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "s2", "color": "orange"}, {"id": "d1", "color": "orange"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}], "hidden": ["d2", "d3", "d4"], "lines": [4, 5, 6, 7], "vars": [["n", "2"], ["dense", "[5, 2]"]]}, {"note": "`insert(7)`: append $7$ at `dense[2]` and record `sparse[7] = 2`. Now $n = 3$.", "nodeLabels": [{"id": "s0", "label": "3"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "2"}, {"id": "d2", "label": "7"}], "nodeColors": [{"id": "s0", "color": "gray"}, {"id": "s1", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d1", "color": "green"}, {"id": "s7", "color": "orange"}, {"id": "d2", "color": "orange"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}], "hidden": ["d3", "d4"], "lines": [4, 5, 6, 7], "vars": [["n", "3"], ["dense", "[5, 2, 7]"]]}, {"note": "`contains(3)`: `sparse[3]` $= 1 < n$, but `dense[1]` $= 2 \\ne 3$ (never written: garbage). So $3$ is **not** in the set — the cross-check catches it.", "nodeLabels": [{"id": "s0", "label": "3"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "2"}, {"id": "d2", "label": "7"}], "nodeColors": [{"id": "s0", "color": "gray"}, {"id": "s1", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "s3", "color": "red"}, {"id": "d1", "color": "red"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}], "hidden": ["d3", "d4"], "lines": [1, 2], "vars": [["n", "3"], ["dense", "[5, 2, 7]"], ["contains(3)", "false"]]}, {"note": "`insert(0)`: append $0$ at `dense[3]` and record `sparse[0] = 3`. Now $n = 4$.", "nodeLabels": [{"id": "s0", "label": "3"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "2"}, {"id": "d2", "label": "7"}, {"id": "d3", "label": "0"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d1", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "s0", "color": "orange"}, {"id": "d3", "color": "orange"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}, {"id": "d3", "text": "d[3]"}], "hidden": ["d4"], "lines": [4, 5, 6, 7], "vars": [["n", "4"], ["dense", "[5, 2, 7, 0]"]]}, {"note": "`remove(2)`: its position is `sparse[2]` $= 1$; the last entry is `dense[3]` $= 0$.", "nodeLabels": [{"id": "s0", "label": "3"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "2"}, {"id": "d2", "label": "7"}, {"id": "d3", "label": "0"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "s2", "color": "orange"}, {"id": "d1", "color": "red"}, {"id": "d3", "color": "purple"}, {"id": "s0", "color": "purple"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}, {"id": "d3", "text": "d[3]"}], "hidden": ["d4"], "lines": [9, 10], "vars": [["n", "4"], ["dense", "[5, 2, 7, 0]"]]}, {"note": "Move $0$ into the hole: `dense[1] = 0`, `sparse[0] = 1`, then $n = 3$. `sparse[2]` still says $1$, but that no longer matters.", "nodeLabels": [{"id": "s0", "label": "1"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "0"}, {"id": "d2", "label": "7"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "d1", "color": "purple"}, {"id": "s0", "color": "purple"}, {"id": "s2", "color": "gray"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}], "hidden": ["d3", "d4"], "lines": [11, 12, 13], "vars": [["n", "3"], ["dense", "[5, 0, 7]"]]}, {"note": "`contains(2)`: `sparse[2]` $= 1 < n$, but `dense[1]` $= 0 \\ne 2$ (leftover from before). So $2$ is **not** in the set — the cross-check catches it.", "nodeLabels": [{"id": "s0", "label": "1"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "4"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "0"}, {"id": "d2", "label": "7"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s4", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "s2", "color": "red"}, {"id": "d1", "color": "red"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}], "hidden": ["d3", "d4"], "lines": [1, 2], "vars": [["n", "3"], ["dense", "[5, 0, 7]"], ["contains(2)", "false"]]}, {"note": "`insert(4)`: append $4$ at `dense[3]` and record `sparse[4] = 3`. Now $n = 4$.", "nodeLabels": [{"id": "s0", "label": "1"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "3"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "0"}, {"id": "d2", "label": "7"}, {"id": "d3", "label": "4"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s2", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d1", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "s4", "color": "orange"}, {"id": "d3", "color": "orange"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}, {"id": "d3", "text": "d[3]"}], "hidden": ["d4"], "lines": [4, 5, 6, 7], "vars": [["n", "4"], ["dense", "[5, 0, 7, 4]"]]}, {"note": "`remove(5)`: its position is `sparse[5]` $= 0$; the last entry is `dense[3]` $= 4$.", "nodeLabels": [{"id": "s0", "label": "1"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "3"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "5"}, {"id": "d1", "label": "0"}, {"id": "d2", "label": "7"}, {"id": "d3", "label": "4"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s2", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d1", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "s5", "color": "orange"}, {"id": "d0", "color": "red"}, {"id": "d3", "color": "purple"}, {"id": "s4", "color": "purple"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}, {"id": "d3", "text": "d[3]"}], "hidden": ["d4"], "lines": [9, 10], "vars": [["n", "4"], ["dense", "[5, 0, 7, 4]"]]}, {"note": "Move $4$ into the hole: `dense[0] = 4`, `sparse[4] = 0`, then $n = 3$. `sparse[5]` still says $0$, but that no longer matters.", "nodeLabels": [{"id": "s0", "label": "1"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "0"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "4"}, {"id": "d1", "label": "0"}, {"id": "d2", "label": "7"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s2", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d1", "color": "green"}, {"id": "d2", "color": "green"}, {"id": "d0", "color": "purple"}, {"id": "s4", "color": "purple"}, {"id": "s5", "color": "gray"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}], "hidden": ["d3", "d4"], "lines": [11, 12, 13], "vars": [["n", "3"], ["dense", "[4, 0, 7]"]]}, {"note": "The set is $\\{4, 0, 7\\}$, packed into `dense[0..2]`. Every operation was $O(1)$, and iterating touches only the $n$ members.", "nodeLabels": [{"id": "s0", "label": "1"}, {"id": "s1", "label": "0"}, {"id": "s2", "label": "1"}, {"id": "s3", "label": "1"}, {"id": "s4", "label": "0"}, {"id": "s5", "label": "0"}, {"id": "s6", "label": "5"}, {"id": "s7", "label": "2"}, {"id": "d0", "label": "4"}, {"id": "d1", "label": "0"}, {"id": "d2", "label": "7"}], "nodeColors": [{"id": "s1", "color": "gray"}, {"id": "s2", "color": "gray"}, {"id": "s3", "color": "gray"}, {"id": "s5", "color": "gray"}, {"id": "s6", "color": "gray"}, {"id": "d0", "color": "green"}, {"id": "d1", "color": "green"}, {"id": "d2", "color": "green"}], "nodeNotes": [{"id": "s0", "text": "s[0]"}, {"id": "s1", "text": "s[1]"}, {"id": "s2", "text": "s[2]"}, {"id": "s3", "text": "s[3]"}, {"id": "s4", "text": "s[4]"}, {"id": "s5", "text": "s[5]"}, {"id": "s6", "text": "s[6]"}, {"id": "s7", "text": "s[7]"}, {"id": "d0", "text": "d[0]"}, {"id": "d1", "text": "d[1]"}, {"id": "d2", "text": "d[2]"}], "hidden": ["d3", "d4"], "lines": [], "vars": [["n", "3"], ["dense", "[4, 0, 7]"]]}], "caption": "Invariant: for every $i < n$, `sparse[dense[i]] == i`. Gray sparse cells hold garbage or stale values; green dense cells are members. Orange: written now; purple: the entry that moves; red: removed or failed check."},
        {
          type: 'derivation',
          title: '`remove` keeps the invariant',
          steps: [
            { tex: 'i = \\texttt{sparse}[e], \\quad \\ell = \\texttt{dense}[n - 1]', why: 'The hole will be at position $i$; the entry that fills it is the last one, entity $\\ell$.' },
            { tex: '\\texttt{dense}[i] \\leftarrow \\ell, \\quad \\texttt{sparse}[\\ell] \\leftarrow i', why: 'Move $\\ell$ into the hole and update its back-pointer, so $\\texttt{sparse}[\\texttt{dense}[i]] = i$ holds at position $i$ again.' },
            { tex: 'n \\leftarrow n - 1', why: 'Position $n - 1$ leaves the packed part. Every other position $j \\ne i$, $j < n - 1$ was untouched, so the invariant still holds there.' },
            { tex: '\\texttt{sparse}[e] = i \\text{ is now stale, and harmless}', why: 'Either $i \\ge n$ or $\\texttt{dense}[i] = \\ell \\ne e$, so `contains(e)` is false. (If $e$ was itself the last entry, $\\ell = e$ and the same steps still work.)' },
          ],
          result: 'Two reads, two writes and a decrement: $O(1)$, and the data stays packed for the systems that iterate it.',
        },
        {
          type: 'code',
          title: 'ecs.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <utility>
#include <vector>

// An entity is just an id: low 20 bits = index, high 12 bits = generation.
using Entity = std::uint32_t;
constexpr std::uint32_t kIndexBits = 20, kIndexMask = (1u << kIndexBits) - 1;
std::uint32_t indexOf(Entity e) { return e & kIndexMask; }
std::uint32_t genOf(Entity e) { return e >> kIndexBits; }

// Storage for ONE component type. Invariant: sparse_[indexOf(dense_[i])] == i for all i.
template <typename T>
class SparseSet {
    std::vector<std::uint32_t> sparse_;                 // entity index -> position in dense_
    std::vector<Entity> dense_;                         // packed ids of the entities that have T
    std::vector<T> data_;                               // data_[i] belongs to dense_[i]
public:
    bool contains(Entity e) const {
        std::uint32_t i = indexOf(e);
        return i < sparse_.size() && sparse_[i] < dense_.size() && dense_[sparse_[i]] == e;
    }
    void add(Entity e, T value) {                       // O(1) amortized: append
        std::uint32_t i = indexOf(e);
        if (i >= sparse_.size()) sparse_.resize(i + 1);
        sparse_[i] = std::uint32_t(dense_.size());
        dense_.push_back(e);
        data_.push_back(value);
    }
    void remove(Entity e) {                             // O(1): swap-and-pop, then repair sparse_
        if (!contains(e)) return;
        std::uint32_t pos = sparse_[indexOf(e)];
        dense_[pos] = dense_.back();
        data_[pos] = data_.back();
        sparse_[indexOf(dense_[pos])] = pos;
        dense_.pop_back();
        data_.pop_back();
    }
    T& get(Entity e) { return data_[sparse_[indexOf(e)]]; }
    std::size_t size() const { return dense_.size(); }
    const std::vector<Entity>& entities() const { return dense_; }
};

struct Position { float x, y; };
struct Velocity { float dx, dy; };
struct Health { float hp; };
struct Burning { float dps, secondsLeft; };
struct Name { const char* s; };

class World {
    std::vector<std::uint32_t> gen_;                    // current generation of each index
    std::vector<std::uint32_t> freeIndices_;
public:
    SparseSet<Position> pos;
    SparseSet<Velocity> vel;
    SparseSet<Health> health;
    SparseSet<Burning> burning;
    SparseSet<Name> name;

    Entity create() {
        std::uint32_t i;
        if (!freeIndices_.empty()) { i = freeIndices_.back(); freeIndices_.pop_back(); }
        else { i = std::uint32_t(gen_.size()); gen_.push_back(0); }
        return (gen_[i] << kIndexBits) | i;
    }
    bool alive(Entity e) const { return indexOf(e) < gen_.size() && gen_[indexOf(e)] == genOf(e); }
    void destroy(Entity e) {
        if (!alive(e)) return;
        pos.remove(e); vel.remove(e); health.remove(e); burning.remove(e); name.remove(e);
        ++gen_[indexOf(e)];                             // old ids of this index go stale
        freeIndices_.push_back(indexOf(e));
    }
};

// Visit entities that have both A and B: walk the smaller set, probe the other in O(1).
template <typename A, typename B, typename F>
void each(SparseSet<A>& a, SparseSet<B>& b, F f) {
    if (a.size() <= b.size()) { for (Entity e : a.entities()) if (b.contains(e)) f(e, a.get(e), b.get(e)); }
    else                      { for (Entity e : b.entities()) if (a.contains(e)) f(e, a.get(e), b.get(e)); }
}

void movementSystem(World& w, float dt) {
    each(w.pos, w.vel, [dt](Entity, Position& p, Velocity& v) { p.x += v.dx * dt; p.y += v.dy * dt; });
}
void burningSystem(World& w, float dt) {
    std::vector<Entity> extinguished, dead;             // never add/remove while iterating a set
    each(w.health, w.burning, [&](Entity e, Health& h, Burning& b) {
        h.hp -= b.dps * dt;
        b.secondsLeft -= dt;
        if (h.hp <= 0) dead.push_back(e);
        else if (b.secondsLeft <= 0) extinguished.push_back(e);
    });
    for (Entity e : extinguished) w.burning.remove(e);
    for (Entity e : dead) { std::printf("  %s dies\\n", w.name.get(e).s); w.destroy(e); }
}
void printSystem(World& w) {
    for (Entity e : w.name.entities()) {
        std::printf("  [%u:%u] %-8s", indexOf(e), genOf(e), w.name.get(e).s);
        if (w.pos.contains(e)) std::printf(" at (%4.1f, %4.1f)", w.pos.get(e).x, w.pos.get(e).y);
        if (w.health.contains(e)) std::printf("  hp %5.1f", w.health.get(e).hp);
        if (w.burning.contains(e)) std::printf("  burning");
        std::printf("\\n");
    }
}

int main() {
    World w;
    Entity player = w.create();
    w.name.add(player, {"player"}); w.pos.add(player, {0, 0}); w.vel.add(player, {1, 0}); w.health.add(player, {100});
    Entity crate = w.create();
    w.name.add(crate, {"crate"}); w.pos.add(crate, {5, 5});                       // no velocity: never moves
    Entity goblin = w.create();
    w.name.add(goblin, {"goblin"}); w.pos.add(goblin, {10, 0}); w.vel.add(goblin, {-1, 0});
    w.health.add(goblin, {50}); w.burning.add(goblin, {30, 5});
    Entity bat = w.create();
    w.name.add(bat, {"bat"}); w.pos.add(bat, {3, 8}); w.vel.add(bat, {0, -2});
    w.health.add(bat, {10}); w.burning.add(bat, {4, 1});

    for (int frame = 1; frame <= 2; ++frame) {
        std::printf("frame %d\\n", frame);
        movementSystem(w, 1.0f);
        burningSystem(w, 1.0f);
        printSystem(w);
    }
    Entity skeleton = w.create();                                                  // reuses goblin's index
    w.name.add(skeleton, {"skeleton"}); w.pos.add(skeleton, {9, 9});
    std::printf("after spawning a skeleton:\\n");
    printSystem(w);
    std::printf("old goblin id alive? %s   skeleton alive? %s\\n",
                w.alive(goblin) ? "yes" : "no", w.alive(skeleton) ? "yes" : "no");
}`,
          output: `frame 1
  [0:0] player   at ( 1.0,  0.0)  hp 100.0
  [1:0] crate    at ( 5.0,  5.0)
  [2:0] goblin   at ( 9.0,  0.0)  hp  20.0  burning
  [3:0] bat      at ( 3.0,  6.0)  hp   6.0
frame 2
  goblin dies
  [0:0] player   at ( 2.0,  0.0)  hp 100.0
  [1:0] crate    at ( 5.0,  5.0)
  [3:0] bat      at ( 3.0,  4.0)  hp   6.0
after spawning a skeleton:
  [0:0] player   at ( 2.0,  0.0)  hp 100.0
  [1:0] crate    at ( 5.0,  5.0)
  [3:0] bat      at ( 3.0,  4.0)  hp   6.0
  [2:1] skeleton at ( 9.0,  9.0)
old goblin id alive? no   skeleton alive? yes`,
          annotations: [
            { lines: '7-10', text: 'An entity id is a generational handle packed into $32$ bits: $20$ index bits, $12$ generation bits.' },
            { lines: '19-22', text: '`contains` is the cross-check from the theorem, plus a bounds check because this `sparse_` grows on demand.' },
            { lines: '30-38', text: '`remove` is the derivation: move the last entry into the hole, repair its `sparse_` entry, pop.' },
            { lines: '67-72', text: 'Destroying an entity removes it from every pool and bumps its generation, so old ids (like `goblin` below) are no longer `alive`.' },
            { lines: '76-80', text: 'A two-component view: walk the **smaller** set and probe the other with `contains`. Burning has $2$ members and Health $3$, so the burning system touches $2$ entities, not $4$.' },
            { lines: '86-94', text: 'Removing components while `each` is iterating a dense array would move entries under its feet. Collect the changes, then apply them after the loop.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'An old trick',
          text: 'Preston Briggs and Linda Torczon published this structure in 1993 ("An Efficient Representation for Sparse Sets") for compilers, where clearing a set must be $O(1)$: just set $n = 0$. Its uninitialized `sparse` array is safe because of the cross-check. ECS libraries such as EnTT use it per component type, with `sparse` split into pages so that huge entity ids do not need one huge array.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Complete the membership test of a sparse set with $n$ members.',
      template: '`contains(e)` is true exactly when `sparse[e]` ___ `n` and `dense[sparse[e]]` ___ `e`.',
      blanks: [{ answers: ['`<`'] }, { answers: ['`==`'] }],
      wordBank: ['`<`', '`<=`', '`==`', '`!=`', '`>`'],
      explanation: 'Positions $0$ to $n - 1$ are the packed members, so a valid position satisfies `sparse[e] < n`; `<=` would accept position $n$, which is outside the set and may hold a removed entity. The second test confirms that the position really holds $e$, which rejects garbage and stale values that happen to land inside the packed range: in the animation, `sparse[3]` was garbage pointing at position $1$, which held $2$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'A sparse set\'s `dense` array is $[4, 7, 2, 9]$. Apply `remove(7)`, `insert(5)`, `remove(4)`, `insert(8)`, with removal by swap-and-pop as in the animation. Put the members in the order they appear in the final `dense` array, `dense[0]` first. Two lines do not belong.',
      lines: ['$5$', '$9$', '$2$', '$8$'],
      distractors: ['$4$', '$7$'],
      explanation: '`remove(7)`: $7$ is at position $1$; the last entry, $9$, moves there: $[4, 9, 2]$. `insert(5)` appends: $[4, 9, 2, 5]$. `remove(4)`: position $0$ is filled by the last entry, $5$: $[5, 9, 2]$. `insert(8)`: $[5, 9, 2, 8]$. The removed ids $4$ and $7$ are gone, and the order shows the price of $O(1)$ removal: members do not stay in insertion order.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Archetypes, and choosing a storage',
      blocks: [
        {
          type: 'p',
          text: 'Sparse sets store each component type separately, so a system that needs $3$ components walks one array and probes two others, and the three components of one entity sit at unrelated positions in three arrays. **Archetype** storage fixes that. An entity\'s [[dsa-archetype|archetype]] is its exact set of component types, and all entities with the same set share one table, with one packed column per component. A query for `Position` + `Velocity` visits every table whose archetype includes both and streams their columns in lockstep: perfect struct-of-arrays.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 530 304" xmlns="http://www.w3.org/2000/svg">
<text x="20.0" y="28.0" text-anchor="start" font-size="13" font-weight="700">Archetype {Position, Velocity}</text>
<text x="24.0" y="56.0" text-anchor="start" font-size="11" class="t-gray">entity</text>
<text x="140.0" y="56.0" text-anchor="middle" font-size="11" class="t-gray">Position</text>
<text x="244.0" y="56.0" text-anchor="middle" font-size="11" class="t-gray">Velocity</text>
<rect x="20.0" y="64.0" width="60.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<text x="50.0" y="81.0" text-anchor="middle" font-size="12">e0</text>
<rect x="90.0" y="64.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="140.0" y="81.0" text-anchor="middle" font-size="11" class="t-blue">pos of e0</text>
<rect x="194.0" y="64.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="244.0" y="81.0" text-anchor="middle" font-size="11" class="t-blue">vel of e0</text>
<rect x="20.0" y="90.0" width="60.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<text x="50.0" y="107.0" text-anchor="middle" font-size="12">e4</text>
<rect x="90.0" y="90.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="140.0" y="107.0" text-anchor="middle" font-size="11" class="t-blue">pos of e4</text>
<rect x="194.0" y="90.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="244.0" y="107.0" text-anchor="middle" font-size="11" class="t-blue">vel of e4</text>
<rect x="20.0" y="116.0" width="60.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<text x="50.0" y="133.0" text-anchor="middle" font-size="12">e7</text>
<rect x="90.0" y="116.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="140.0" y="133.0" text-anchor="middle" font-size="11" class="t-blue">pos of e7</text>
<rect x="194.0" y="116.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="244.0" y="133.0" text-anchor="middle" font-size="11" class="t-blue">vel of e7</text>
<text x="20.0" y="182.0" text-anchor="start" font-size="13" font-weight="700">Archetype {Position, Velocity, Health}</text>
<text x="24.0" y="210.0" text-anchor="start" font-size="11" class="t-gray">entity</text>
<text x="140.0" y="210.0" text-anchor="middle" font-size="11" class="t-gray">Position</text>
<text x="244.0" y="210.0" text-anchor="middle" font-size="11" class="t-gray">Velocity</text>
<text x="348.0" y="210.0" text-anchor="middle" font-size="11" class="t-gray">Health</text>
<rect x="20.0" y="218.0" width="60.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<text x="50.0" y="235.0" text-anchor="middle" font-size="12">e2</text>
<rect x="90.0" y="218.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="140.0" y="235.0" text-anchor="middle" font-size="11" class="t-blue">pos of e2</text>
<rect x="194.0" y="218.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="244.0" y="235.0" text-anchor="middle" font-size="11" class="t-blue">vel of e2</text>
<rect x="298.0" y="218.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-green f-green"/>
<text x="348.0" y="235.0" text-anchor="middle" font-size="11" class="t-green">hp of e2</text>
<rect x="20.0" y="244.0" width="60.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray"/>
<text x="50.0" y="261.0" text-anchor="middle" font-size="12">e3</text>
<rect x="90.0" y="244.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="140.0" y="261.0" text-anchor="middle" font-size="11" class="t-blue">pos of e3</text>
<rect x="194.0" y="244.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-blue f-blue"/>
<text x="244.0" y="261.0" text-anchor="middle" font-size="11" class="t-blue">vel of e3</text>
<rect x="298.0" y="244.0" width="100.0" height="24.0" rx="3" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.1" class="s-green f-green"/>
<text x="348.0" y="261.0" text-anchor="middle" font-size="11" class="t-green">hp of e3</text>
<path d="M300.0,102.0 C470.0,102.0 474.0,282.0 412.0,282.0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 3" class="s-orange"/>
<path d="M404.0,282.0 L414.0,277.0 L414.0,287.0 Z" fill="currentColor" class="f-orange"/>
<text x="396.0" y="146.0" text-anchor="end" font-size="12" font-weight="700" class="t-orange">add Health to e4:</text>
<text x="396.0" y="162.0" text-anchor="end" font-size="12" font-weight="700" class="t-orange">its row moves</text>
<rect x="20.0" y="270.0" width="60.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3" class="s-orange"/>
<text x="50.0" y="287.0" text-anchor="middle" font-size="12" font-weight="700" class="t-orange">e4</text>
<rect x="90.0" y="270.0" width="100.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" class="s-orange"/>
<rect x="194.0" y="270.0" width="100.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" class="s-orange"/>
<rect x="298.0" y="270.0" width="100.0" height="24.0" rx="3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" class="s-orange"/>
</svg>`,
          alt: 'Two tables. The first, for archetype Position and Velocity, has rows e0, e4 and e7. The second, for Position, Velocity and Health, has rows e2 and e3, plus an empty dashed row for e4. A dashed orange arrow from e4\'s row in the first table to the new row is labelled: add Health to e4, its row moves.',
          caption: 'Adding a component changes the archetype, so the entity\'s whole row moves to another table: every component is copied, and the old table fills its hole by swap-and-pop.',
          maxWidth: 480,
        },
        {
          type: 'table',
          headers: ['Aspect', 'Sparse sets (e.g. EnTT)', 'Archetype tables (e.g. Unity Entities, flecs)'],
          rows: [
            ['add / remove a component', '$O(1)$: touch one pool', 'move the entity\'s row to another table: copy all its components'],
            ['iterate one component', 'one packed array', 'a few packed columns (one per matching table)'],
            ['iterate several components', 'walk the smallest pool, probe the others', 'all columns aligned: purely sequential'],
            ['memory layout of one entity', 'scattered across pools', 'one row of one table'],
            ['weak spot', 'multi-component queries do random probes', 'many distinct component sets fragment into many small tables'],
          ],
          caption: 'Archetypes favor stable entities and heavy queries; sparse sets favor components that come and go.',
        },
        {
          type: 'p',
          text: 'Real engines blur the line. Unity stores archetype rows in fixed-size **chunks** ($16$ KiB), which bounds the cost of a move and keeps memory reuse simple. Bevy lets each component type choose table storage or sparse-set storage. EnTT adds "groups" that keep several pools sorted in the same order, so a common query becomes a sequential walk too. The underlying question never changes: **which accesses are hot, and which bytes do they touch?**',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A `Stunned` tag (no data) is added to and removed from thousands of entities every few frames. One system must visit exactly the stunned entities every frame. The hot `Position` + `Velocity` loop must stay fast. How should `Stunned` be stored?',
      options: [
        { text: 'As a component in an archetype ECS, so stunned entities get their own tables', why: 'Each add or remove moves the entity\'s entire row, copying all its components, thousands of times every few frames. Archetypes suit components that rarely change.' },
        { text: 'As a `bool stunned` field inside one big per-entity struct', why: 'Toggling is cheap, but the stun system must scan every entity to find the stunned ones, and the flag makes the struct the hot loop streams through bigger.' },
        { text: 'As its own sparse set', correct: true, why: 'Right. Add and remove are $O(1)$ and touch only this one pool. Its dense array is exactly the list of stunned entities, so the stun system iterates them directly, and the `Position` + `Velocity` arrays are untouched.' },
        { text: 'In a `std::unordered_map<Entity, Stunned>`', why: 'Correct, but slower on every count: hashing per lookup, node allocation per insert, and iteration that hops around the heap. A sparse set is a hash map with the hash replaced by the entity index.' },
      ],
      explanation: 'Frequently toggled tags and states (stunned, selected, burning, "needs a path") are the classic sparse-set case, and even archetype-based engines offer a sparse storage option or enableable components for them. The answer follows from the operations: count adds/removes, count iterations, and pick the layout that makes the frequent ones cheap.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Arenas: allocation by bumping a pointer',
      blocks: [
        {
          type: 'p',
          text: 'Lots of memory in a frame is temporary: the list of visible objects, path-finding scratch space, strings for the debug overlay, the command list for the renderer. All of it dies together when the frame ends. An [[dsa-arena-allocator|arena]] (also called a linear or bump allocator) exploits that shared lifetime. It owns one big block and an offset `used_`. Allocation rounds `used_` up to the required alignment and bumps it by the size; there is no per-object free. `reset()` sets `used_ = 0` and frees everything at once.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 168" xmlns="http://www.w3.org/2000/svg">
<rect x="20.0" y="50.0" width="65.0" height="40.0" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5" class="s-blue f-blue"/>
<text x="52.5" y="75.0" text-anchor="middle" font-size="12" font-weight="700" class="t-blue">char[5]</text>
<rect x="124.0" y="50.0" width="104.0" height="40.0" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5" class="s-purple f-purple"/>
<text x="176.0" y="75.0" text-anchor="middle" font-size="12" font-weight="700" class="t-purple">double</text>
<rect x="228.0" y="50.0" width="26.0" height="40.0" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5" class="s-teal f-teal"/>
<text x="241.0" y="43.0" text-anchor="middle" font-size="11" font-weight="700" class="t-teal">short</text>
<rect x="280.0" y="50.0" width="156.0" height="40.0" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5" class="s-green f-green"/>
<text x="358.0" y="75.0" text-anchor="middle" font-size="12" font-weight="700" class="t-green">Vec3</text>
<rect x="85.0" y="50.0" width="39.0" height="40.0" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" class="s-gray f-gray"/>
<text x="104.5" y="120.0" text-anchor="middle" font-size="10" class="t-gray">pad</text>
<rect x="254.0" y="50.0" width="26.0" height="40.0" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" class="s-gray f-gray"/>
<text x="267.0" y="120.0" text-anchor="middle" font-size="10" class="t-gray">pad</text>
<rect x="436.0" y="50.0" width="39.0" height="40.0" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" class="s-gray"/>
<text x="456.8" y="74.0" text-anchor="middle" font-size="14" class="t-gray">…</text>
<line x1="20.0" y1="90.0" x2="20.0" y2="96.0" stroke="currentColor" stroke-width="1" class="s-gray"/>
<text x="20.0" y="108.0" text-anchor="middle" font-size="11" class="t-gray">0</text>
<line x1="85.0" y1="90.0" x2="85.0" y2="96.0" stroke="currentColor" stroke-width="1" class="s-gray"/>
<text x="85.0" y="108.0" text-anchor="middle" font-size="11" class="t-gray">5</text>
<line x1="124.0" y1="90.0" x2="124.0" y2="96.0" stroke="currentColor" stroke-width="1" class="s-gray"/>
<text x="124.0" y="108.0" text-anchor="middle" font-size="11" class="t-gray">8</text>
<line x1="228.0" y1="90.0" x2="228.0" y2="96.0" stroke="currentColor" stroke-width="1" class="s-gray"/>
<text x="228.0" y="108.0" text-anchor="middle" font-size="11" class="t-gray">16</text>
<line x1="254.0" y1="90.0" x2="254.0" y2="96.0" stroke="currentColor" stroke-width="1" class="s-gray"/>
<text x="254.0" y="108.0" text-anchor="middle" font-size="11" class="t-gray">18</text>
<line x1="280.0" y1="90.0" x2="280.0" y2="96.0" stroke="currentColor" stroke-width="1" class="s-gray"/>
<text x="280.0" y="108.0" text-anchor="middle" font-size="11" class="t-gray">20</text>
<line x1="436.0" y1="90.0" x2="436.0" y2="96.0" stroke="currentColor" stroke-width="1" class="s-gray"/>
<text x="436.0" y="108.0" text-anchor="middle" font-size="11" class="t-gray">32</text>
<text x="436.0" y="22.0" text-anchor="middle" font-size="13" font-weight="700" class="t-orange">used_ = 32</text>
<line x1="436.0" y1="28.0" x2="436.0" y2="38.8" stroke="currentColor" stroke-width="1.8" class="s-orange"/><path d="M436.0,46.0 L432.4,38.9 L439.6,38.9 Z" fill="currentColor" class="f-orange"/>
<text x="20.0" y="144.0" text-anchor="start" font-size="12" class="t-gray">Each allocation rounds used_ up to its alignment, then bumps it by the size.</text>
<text x="20.0" y="160.0" text-anchor="start" font-size="12" class="t-gray">reset() sets used_ = 0: everything is freed at once.</text>
</svg>`,
          alt: 'A horizontal memory block with offsets. char[5] fills 0 to 5, then padding to 8, a double from 8 to 16, a short from 16 to 18, padding to 20, and a Vec3 from 20 to 32. An orange arrow marks used_ = 32.',
          caption: 'The allocations made by `arena.cpp`. Padding appears exactly where the next type needs a stricter alignment: the `double` must start at a multiple of $8$, the `Vec3` at a multiple of $4$.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Rounding up to an alignment: the `double` after `char[5]`',
          steps: [
            { tex: '\\text{start} = \\left\\lceil \\frac{\\text{used}}{a} \\right\\rceil a = \\left\\lceil \\frac{5}{8} \\right\\rceil \\cdot 8 = 8', why: 'The smallest multiple of the alignment $a = 8$ that is at least `used_` $= 5$.' },
            { tex: '\\text{start} = (\\text{used} + a - 1)\\ \\&\\ {\\sim}(a - 1)', why: 'The same thing with integer operations, valid because alignments are powers of two: adding $a - 1$ carries into the next multiple unless `used_` is one already, and the mask clears the low bits.' },
            { tex: '(5 + 7)\\ \\&\\ {\\sim}7 = 12\\ \\&\\ \\ldots11000_2 = 8', why: '$12 = 1100_2$; clearing the low three bits leaves $1000_2 = 8$.' },
            { tex: '\\text{used} \\leftarrow 8 + 8 = 16', why: 'Bump past the $8$-byte `double`. The `short` (alignment $2$) then starts right at $16$, with no padding.' },
          ],
          result: 'Allocation is an add, a mask, a compare and a store, a handful of instructions with no search and no lock.',
        },
        {
          type: 'code',
          title: 'arena.cpp',
          runnable: true,
          code: `#include <cstddef>
#include <cstdio>
#include <memory_resource>
#include <new>
#include <utility>
#include <vector>

// Linear (bump) allocator: allocation moves one offset forward; reset frees everything.
class Arena {
    std::byte* base_;
    std::size_t cap_, used_ = 0;
public:
    Arena(std::byte* buf, std::size_t cap) : base_(buf), cap_(cap) {}
    void* alloc(std::size_t size, std::size_t align) {          // align: a power of two
        std::size_t start = (used_ + align - 1) & ~(align - 1);  // round up to a multiple
        if (start + size > cap_) return nullptr;                 // out of space
        used_ = start + size;
        return base_ + start;
    }
    template <typename T, typename... Args>
    T* make(Args&&... args) {                                    // construct in place
        void* p = alloc(sizeof(T), alignof(T));
        return p ? new (p) T(std::forward<Args>(args)...) : nullptr;
    }
    void reset() { used_ = 0; }                                  // O(1), no destructors run
    std::size_t used() const { return used_; }
    std::size_t offset(const void* p) const { return std::size_t(static_cast<const std::byte*>(p) - base_); }
};

struct Vec3 { float x, y, z; };                                  // 12 bytes, alignment 4

// Counts how often a memory resource asks the real heap for memory.
struct CountingResource : std::pmr::memory_resource {
    int calls = 0;
    void* do_allocate(std::size_t n, std::size_t a) override {
        ++calls;
        return std::pmr::new_delete_resource()->allocate(n, a);
    }
    void do_deallocate(void* p, std::size_t n, std::size_t a) override {
        std::pmr::new_delete_resource()->deallocate(p, n, a);
    }
    bool do_is_equal(const std::pmr::memory_resource& o) const noexcept override { return this == &o; }
};

int main() {
    alignas(64) static std::byte buffer[1024];
    Arena frame(buffer, sizeof buffer);

    char* tag = static_cast<char*>(frame.alloc(5, 1));
    double* d = frame.make<double>(3.5);
    short* s = frame.make<short>(short(7));
    Vec3* v = frame.make<Vec3>(Vec3{1, 2, 3});
    std::printf("offsets: char[5] at %zu, double at %zu, short at %zu, Vec3 at %zu; used %zu bytes\\n",
                frame.offset(tag), frame.offset(d), frame.offset(s), frame.offset(v), frame.used());

    for (int f = 0; f < 3; ++f) {                                // per-frame scratch memory
        frame.reset();
        int n = 10 * (f + 1);
        for (int i = 0; i < n; ++i) frame.make<Vec3>(Vec3{float(i), 0, 0});
        std::printf("frame %d: %2d Vec3 temporaries, %3zu bytes used, then reset\\n", f, n, frame.used());
    }

    CountingResource heap;
    {
        std::pmr::vector<int> a(&heap);                          // grows by asking the heap
        for (int i = 0; i < 1000; ++i) a.push_back(i);
    }
    std::printf("vector on the heap:            %2d heap allocations for 1000 push_backs\\n", heap.calls);

    heap.calls = 0;
    alignas(16) static std::byte big[16384];
    {
        std::pmr::monotonic_buffer_resource mono(big, sizeof big, &heap);   // heap only if big runs out
        std::pmr::vector<int> b(&mono);
        for (int i = 0; i < 1000; ++i) b.push_back(i);
    }
    std::printf("same vector on a 16 KiB arena: %2d heap allocations\\n", heap.calls);
}`,
          output: `offsets: char[5] at 0, double at 8, short at 16, Vec3 at 20; used 32 bytes
frame 0: 10 Vec3 temporaries, 120 bytes used, then reset
frame 1: 20 Vec3 temporaries, 240 bytes used, then reset
frame 2: 30 Vec3 temporaries, 360 bytes used, then reset
vector on the heap:            11 heap allocations for 1000 push_backs
same vector on a 16 KiB arena:  0 heap allocations`,
          annotations: [
            { lines: '14-19', text: 'The whole allocator. Running out returns `nullptr`; a frame arena is sized from profiling, with an assert when it overflows.' },
            { lines: '20-24', text: 'Placement `new` constructs a `T` in arena memory. Nothing ever calls its destructor, so arenas suit trivially destructible types (or code that destroys objects explicitly).' },
            { lines: '56-61', text: 'Per-frame scratch: reset, then allocate freely. Each frame starts from offset $0$, so memory use never creeps upward.' },
            { lines: '63-68', text: 'For comparison, a `std::pmr::vector` that gets memory from the heap: with libstdc++\'s doubling growth, $1000$ `push_back`s make $11$ allocations ($1, 2, 4, \\dots, 1024$ elements).' },
            { lines: '72-76', text: '`std::pmr::monotonic_buffer_resource` is the standard arena. With a $16$ KiB buffer the same vector growth never reaches the heap. Its `deallocate` does nothing; memory returns only when the resource is destroyed.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Arena lifetimes',
          text: 'Every pointer into an arena dangles after `reset()`. Never store one in an object that outlives the frame. A common pattern for data that must survive exactly one more frame (last frame\'s visible set, a result consumed by the GPU later) is a **double-buffered** frame allocator: two arenas, used on alternating frames, so data from frame $k$ is reset only at the start of frame $k + 2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'An arena like the one in `arena.cpp` has `used_` $= 13$. You allocate, in order: a `double` (size $8$, alignment $8$), then a block of $3$ `char`s (size $3$, alignment $1$), then an `int` (size $4$, alignment $4$). At what offset does the `int` start?',
      label: 'offset $=$',
      answer: '28',
      hint: 'For each allocation: round `used_` up to the alignment, then add the size.',
      explanation: 'The `double`: round $13$ up to a multiple of $8$, giving $16$; `used_` becomes $24$. The `char`s need no rounding (alignment $1$): they occupy $24$–$26$, and `used_` becomes $27$. The `int`: round $27$ up to a multiple of $4$, giving $\\mathbf{28}$ (in bits, $(27 + 3)\\ \\&\\ {\\sim}3 = 30\\ \\&\\ {\\sim}3 = 28$). `used_` ends at $32$. The $3 + 1 = 4$ bytes of padding are the price of alignment; ordering allocations from largest alignment to smallest avoids most of it.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Double-buffered event queues',
      blocks: [
        {
          type: 'p',
          text: 'Systems talk to each other through events: an explosion damages units, damage kills a unit, a death spawns loot and plays a sound. An event queue decouples sender from receiver. But handlers post new events **while** the queue is being processed, and a single `std::vector` cannot take that. A `push_back` during a range-for may reallocate and invalidate the loop\'s iterators: undefined behavior. Even without reallocation, a chain reaction could keep the loop busy forever within one frame.',
        },
        {
          type: 'p',
          text: 'The fix is [[dsa-double-buffering|double buffering]]: keep two vectors. During dispatch, handlers **read** the front buffer and **post** into the back buffer. At the next dispatch the two swap, an $O(1)$ exchange of three pointers per vector with no events copied. Events posted this frame are handled next frame, which bounds the work per frame and makes the order deterministic.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 480 176" xmlns="http://www.w3.org/2000/svg">
<text x="70.0" y="32.0" text-anchor="start" font-size="12" font-weight="700" class="t-blue">front_ (handlers read this)</text>
<rect x="70.0" y="40.0" width="60.0" height="28.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4" class="s-blue f-blue"/>
<text x="100.0" y="59.0" text-anchor="middle" font-size="11" class="t-blue">Explode</text>
<rect x="134.0" y="40.0" width="60.0" height="28.0" rx="4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" class="s-gray"/>
<text x="70.0" y="122.0" text-anchor="start" font-size="12" font-weight="700" class="t-orange">back_ (handlers post here)</text>
<rect x="70.0" y="130.0" width="60.0" height="28.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4" class="s-orange f-orange"/>
<text x="100.0" y="149.0" text-anchor="middle" font-size="11" class="t-orange">Damage 0</text>
<rect x="134.0" y="130.0" width="60.0" height="28.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4" class="s-orange f-orange"/>
<text x="164.0" y="149.0" text-anchor="middle" font-size="11" class="t-orange">Damage 1</text>
<rect x="198.0" y="130.0" width="60.0" height="28.0" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4" class="s-orange f-orange"/>
<text x="228.0" y="149.0" text-anchor="middle" font-size="11" class="t-orange">Damage 2</text>
<rect x="262.0" y="130.0" width="60.0" height="28.0" rx="4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" class="s-gray"/>
<line x1="100.0" y1="72.0" x2="100.0" y2="98.8" stroke="currentColor" stroke-width="1.6" class="s-gray"/><path d="M100.0,106.0 L96.4,98.9 L103.6,98.9 Z" fill="currentColor" class="f-gray"/>
<text x="108.0" y="94.0" text-anchor="start" font-size="11" class="t-gray">posts</text>
<line x1="30.0" y1="60.0" x2="30.0" y2="138.0" stroke="currentColor" stroke-width="1.8" class="s-purple"/>
<path d="M30,52 L25,62 L35,62 Z" fill="currentColor" class="f-purple"/>
<path d="M30,146 L25,136 L35,136 Z" fill="currentColor" class="f-purple"/>
<text x="22.0" y="103.0" text-anchor="end" font-size="11" font-weight="700" class="t-purple" transform="rotate(-90 22 103)">swap</text>
<text x="345.0" y="46.0" text-anchor="start" font-size="12" font-weight="700">dispatch():</text>
<text x="345.0" y="66.0" text-anchor="start" font-size="12" class="t-purple">1. swap(front_, back_)</text>
<text x="345.0" y="84.0" text-anchor="start" font-size="12" class="t-gray">2. handle each event</text>
<text x="345.0" y="102.0" text-anchor="start" font-size="12" class="t-gray">    in front_</text>
<text x="345.0" y="120.0" text-anchor="start" font-size="12" class="t-gray">3. front_.clear()</text>
<text x="345.0" y="150.0" text-anchor="start" font-size="11" class="t-gray">Posting never touches</text>
<text x="345.0" y="165.0" text-anchor="start" font-size="11" class="t-gray">the vector being read.</text>
</svg>`,
          alt: 'Two rows of boxes. The front buffer, read this frame, holds Explode. The back buffer, written this frame, holds Damage 0, Damage 1 and Damage 2, with an arrow showing the handler posts them. A purple double arrow labelled swap connects the two rows. A note lists the steps of dispatch: swap front and back, handle each event in front, clear front.',
          caption: 'Frame 1 of `events.cpp`: the explosion handler posts three damage events into the back buffer; they are dispatched in frame 2.',
          maxWidth: 460,
        },
        {
          type: 'code',
          title: 'events.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <utility>
#include <vector>

enum class Type { Explosion, Damage, Death };
struct Event { Type type; int target; int amount; };

// Double-buffered queue: handlers read front_ while new events go into back_.
class EventQueue {
    std::vector<Event> front_, back_;
public:
    void post(Event e) { back_.push_back(e); }       // safe at any time, even inside a handler
    template <typename F>
    void dispatch(F handle) {
        std::swap(front_, back_);                    // O(1): swaps buffers, copies no events
        for (const Event& e : front_) handle(e);     // posts land in back_, so front_ is stable
        front_.clear();                              // keeps its capacity for reuse
    }
    std::size_t pending() const { return back_.size(); }
};

int main() {
    int hp[3] = {30, 80, 15};                        // three units near the blast
    const char* name[3] = {"soldier", "tank", "drone"};
    EventQueue q;
    q.post({Type::Explosion, -1, 40});

    for (int frame = 1; q.pending() > 0; ++frame) {
        std::printf("frame %d: %zu event(s)\\n", frame, q.pending());
        q.dispatch([&](const Event& e) {
            switch (e.type) {
            case Type::Explosion:
                std::printf("  explosion: damage every unit by %d\\n", e.amount);
                for (int u = 0; u < 3; ++u) q.post({Type::Damage, u, e.amount});
                break;
            case Type::Damage:
                hp[e.target] -= e.amount;
                std::printf("  %s takes %d, hp now %d\\n", name[e.target], e.amount, hp[e.target]);
                if (hp[e.target] <= 0) q.post({Type::Death, e.target, 0});
                break;
            case Type::Death:
                std::printf("  %s is destroyed\\n", name[e.target]);
                break;
            }
        });
    }
}`,
          output: `frame 1: 1 event(s)
  explosion: damage every unit by 40
frame 2: 3 event(s)
  soldier takes 40, hp now -10
  tank takes 40, hp now 40
  drone takes 40, hp now -25
frame 3: 2 event(s)
  soldier is destroyed
  drone is destroyed`,
          annotations: [
            { lines: 12, text: '`post` always appends to `back_`, even from inside a handler, because `back_` is never the vector being iterated.' },
            { lines: 15, text: '`std::swap` on two vectors exchanges their internal pointers: $O(1)$, no events copied, no allocation.' },
            { lines: 17, text: '`clear()` keeps the capacity, so after a few frames the queue stops allocating altogether.' },
            { lines: '28-46', text: 'The explosion is handled in frame $1$, damage in frame $2$, deaths in frame $3$: each wave of consequences waits for the next frame.' },
          ],
        },
        {
          type: 'table',
          headers: ['Structure', 'Solves', 'Key invariant or trick'],
          rows: [
            ['object pool + free list', 'allocation cost, fragmentation', 'free slots form a stack threaded through themselves'],
            ['generational handle', 'stale references', 'generation bumps on destroy; compare on access'],
            ['slot map', 'stable handles **and** packed iteration', 'two-way links: `slots_` ↔ `owner_`'],
            ['sparse set', 'O(1) component add/remove/lookup', '`sparse[dense[i]] == i`'],
            ['archetype table', 'sequential multi-component queries', 'one table per component set'],
            ['arena', 'per-frame temporaries', 'bump and reset; no individual frees'],
            ['double-buffered queue', 'posting while dispatching', 'read front, write back, swap'],
          ],
          caption: 'The engine toolkit from this lesson. Ring buffers (for input and network history) and priority queues (for timers and AI scheduling) from earlier units complete it.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'In interviews',
          text: 'Game-studio interviews love these: "implement an object pool", "how do you keep references to entities that may be destroyed?" (generational handles), "remove from an array in $O(1)$" (swap-and-pop, and what it breaks), "design component storage for an ECS" (sparse sets versus archetypes), "what happens if a handler posts an event while you iterate the queue?". Explain the invariant, then the cache behavior. That is the data-oriented answer they are listening for.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'truefalse',
      prompt: 'True or false: inside a range-for loop over `std::vector<Event> events`, a handler may safely call `events.push_back(e)`, as long as it never erases anything.',
      answer: false,
      explanation: 'False. A range-for holds iterators into the vector (and computes `end()` once). If `push_back` exceeds the capacity, the vector reallocates, the iterators dangle, and continuing the loop is undefined behavior. Even when no reallocation happens, the new events lie beyond the stored `end()` and are silently skipped. Posting into a second buffer, as the double-buffered queue does, avoids both problems; so does an index-based loop that re-reads `size()`, if you really want same-frame processing.',
    },
  ],
  takeaways: [
    'Object pools replace per-object `new`/`delete` with a fixed array; a free list threaded through the free slots makes acquire and release $O(1)$ worst case, reusing slots LIFO.',
    'Raw pointers and indices go stale through `delete`, vector reallocation, swap-and-pop and slot reuse. Generational handles $(\\text{index}, \\text{generation})$ detect staleness with one compare, until the counter wraps after $2^b$ reuses.',
    'A slot map gives stable handles plus packed values: handles → `slots_` → dense position, with an `owner_` back-reference so swap-and-pop can repoint the moved value\'s slot.',
    'An ECS stores entities as ids, components as plain data in per-type packed arrays, and logic in systems: data-oriented design applied to a whole game.',
    'A sparse set keeps `sparse[dense[i]] == i`; `contains(e)` is `sparse[e] < n && dense[sparse[e]] == e`, so `sparse` never needs initializing. Removal is swap-and-pop plus one back-pointer fix.',
    'Archetype tables make multi-component queries purely sequential but make adding or removing components a row move; sparse sets are the opposite.',
    'Arenas allocate by rounding up for alignment and bumping an offset, and free everything at once; `std::pmr::monotonic_buffer_resource` is the standard version. Double-buffered queues let handlers post while dispatching.',
  ],
  reading: [
    { title: 'Robert Nystrom, Game Programming Patterns: Object Pool', url: 'https://gameprogrammingpatterns.com/object-pool.html', source: 'book', note: 'The pattern with a free list stored in the unused particles, and a discussion of what to do when the pool is full.' },
    { title: 'Robert Nystrom, Game Programming Patterns: Data Locality', url: 'https://gameprogrammingpatterns.com/data-locality.html', source: 'book', note: 'Why contiguous arrays of components beat pointer-linked objects, with the cache explained from scratch.' },
    { title: 'Robert Nystrom, Game Programming Patterns: Event Queue', url: 'https://gameprogrammingpatterns.com/event-queue.html', source: 'book', note: 'Decoupling senders from receivers, ring-buffer queues and the feedback-loop problem that double buffering avoids.' },
    { title: 'Mike Acton, "Data-Oriented Design and C++" (CppCon 2014)', url: 'https://www.youtube.com/watch?v=rX0ItVEVjHc', source: 'video', note: 'The talk that made data-oriented design mainstream in game programming; watch for how he reasons from the data and the hardware.' },
    { title: 'Entity component system (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Entity_component_system', source: 'wikipedia', note: 'The architecture, its history in games and the main storage approaches.' },
    { title: 'cppreference: std::pmr::monotonic_buffer_resource', url: 'https://en.cppreference.com/w/cpp/memory/monotonic_buffer_resource', source: 'other', note: 'The standard library\'s arena: allocation from a buffer, no-op deallocation, and release on destruction.' },
  ],
};
