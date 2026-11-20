import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-arrays-memory',
  title: 'Arrays, Dynamic Arrays and Memory',
  summary: 'Contiguous memory and $O(1)$ indexing, how `std::vector` grows and why `push_back` is amortized $O(1)$, capacity and `reserve`, iterator invalidation, structs of arrays, and swap-and-pop removal.',
  minutes: 22,
  objectives: [
    'Compute the address of an element of a 1D or row-major 2D array and explain why indexing is $O(1)$',
    'Describe a dynamic array\'s size, capacity and heap block, implement one, and prove amortized $O(1)$ `push_back` with the banker\'s method',
    'Use `reserve` correctly, recognise the anti-patterns that make growth quadratic, and explain why move constructors should be `noexcept`',
    'Predict when pointers, references and iterators into a vector are invalidated, and erase safely while iterating',
    'Choose between array-of-structs and struct-of-arrays layouts by counting cache lines, and remove elements in $O(1)$ with swap-and-pop',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Static arrays: one block, constant-time indexing',
      blocks: [
        {
          type: 'p',
          text: 'An array is the simplest data structure there is: $n$ elements of the same type stored **back to back** in one contiguous block of memory. That one property gives arrays their two superpowers. Any element can be reached with a single address computation, and a walk through the array streams through memory in order, the access pattern caches love.',
        },
        {
          type: 'theorem',
          name: 'Address of an array element',
          tex: '\\&a[i] = \\text{base} + i \\cdot \\texttt{sizeof(T)}, \\qquad \\&g[r][c] = \\text{base} + (r \\cdot \\text{cols} + c) \\cdot \\texttt{sizeof(T)}',
          text: 'C and C++ store multidimensional arrays **row-major**: all of row $0$, then all of row $1$, and so on. Computing either address costs a multiply and an add, independent of $i$ or of $n$, so indexing is $O(1)$. That is what "random access" means.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"10\" y=\"18\" font-size=\"13\" font-weight=\"600\">int a[5]: five 4-byte slots, back to back</text>\n<rect x=\"40\" y=\"30\" width=\"76\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"78.0\" y=\"56\" text-anchor=\"middle\" font-size=\"15\">10</text>\n<text x=\"78.0\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">a[0]</text>\n<text x=\"78.0\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">0x1000</text>\n<rect x=\"120\" y=\"30\" width=\"76\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"158.0\" y=\"56\" text-anchor=\"middle\" font-size=\"15\">20</text>\n<text x=\"158.0\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">a[1]</text>\n<text x=\"158.0\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">0x1004</text>\n<rect x=\"200\" y=\"30\" width=\"76\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"238.0\" y=\"56\" text-anchor=\"middle\" font-size=\"15\">30</text>\n<text x=\"238.0\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">a[2]</text>\n<text x=\"238.0\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">0x1008</text>\n<rect x=\"280\" y=\"30\" width=\"76\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"318.0\" y=\"56\" text-anchor=\"middle\" font-size=\"15\">40</text>\n<text x=\"318.0\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">a[3]</text>\n<text x=\"318.0\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">0x100C</text>\n<rect x=\"360\" y=\"30\" width=\"76\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"398.0\" y=\"56\" text-anchor=\"middle\" font-size=\"15\">50</text>\n<text x=\"398.0\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">a[4]</text>\n<text x=\"398.0\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">0x1010</text>\n<text x=\"40\" y=\"126\" font-size=\"12\" class=\"t-gray\">&amp;a[i] = base + i × sizeof(int) = 0x1000 + 4i: O(1) for any i</text>\n<text x=\"10\" y=\"158\" font-size=\"13\" font-weight=\"600\">int g[3][4] is stored row-major: row 0, then row 1, then row 2</text>\n<rect x=\"40\" y=\"170\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"53\" y=\"186\" text-anchor=\"middle\" font-size=\"10\">0,0</text>\n<rect x=\"70\" y=\"170\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"83\" y=\"186\" text-anchor=\"middle\" font-size=\"10\">0,1</text>\n<rect x=\"100\" y=\"170\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"113\" y=\"186\" text-anchor=\"middle\" font-size=\"10\">0,2</text>\n<rect x=\"130\" y=\"170\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"143\" y=\"186\" text-anchor=\"middle\" font-size=\"10\">0,3</text>\n<rect x=\"40\" y=\"198\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"53\" y=\"214\" text-anchor=\"middle\" font-size=\"10\">1,0</text>\n<rect x=\"70\" y=\"198\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"83\" y=\"214\" text-anchor=\"middle\" font-size=\"10\">1,1</text>\n<rect x=\"100\" y=\"198\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"113\" y=\"214\" text-anchor=\"middle\" font-size=\"10\">1,2</text>\n<rect x=\"130\" y=\"198\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"143\" y=\"214\" text-anchor=\"middle\" font-size=\"10\">1,3</text>\n<rect x=\"40\" y=\"226\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"53\" y=\"242\" text-anchor=\"middle\" font-size=\"10\">2,0</text>\n<rect x=\"70\" y=\"226\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"83\" y=\"242\" text-anchor=\"middle\" font-size=\"10\">2,1</text>\n<rect x=\"100\" y=\"226\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"113\" y=\"242\" text-anchor=\"middle\" font-size=\"10\">2,2</text>\n<rect x=\"130\" y=\"226\" width=\"26\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"143\" y=\"242\" text-anchor=\"middle\" font-size=\"10\">2,3</text>\n<path d=\"M170.0,206.0 L197.0,206.0\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M205.0,206.0 L197.0,209.6 L197.0,202.4 Z\" fill=\"currentColor\"/>\n<rect x=\"212\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"223.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">0,0</text>\n<text x=\"223.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">0</text>\n<rect x=\"237\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"248.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">0,1</text>\n<text x=\"248.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">1</text>\n<rect x=\"262\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"273.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">0,2</text>\n<text x=\"273.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">2</text>\n<rect x=\"287\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"298.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">0,3</text>\n<text x=\"298.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">3</text>\n<rect x=\"312\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"323.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">1,0</text>\n<text x=\"323.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">4</text>\n<rect x=\"337\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"348.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">1,1</text>\n<text x=\"348.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">5</text>\n<rect x=\"362\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"373.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">1,2</text>\n<text x=\"373.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">6</text>\n<rect x=\"387\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"398.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">1,3</text>\n<text x=\"398.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">7</text>\n<rect x=\"412\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"423.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">2,0</text>\n<text x=\"423.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">8</text>\n<rect x=\"437\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"448.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">2,1</text>\n<text x=\"448.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">9</text>\n<rect x=\"462\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"473.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">2,2</text>\n<text x=\"473.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">10</text>\n<rect x=\"487\" y=\"194\" width=\"23\" height=\"24\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"498.5\" y=\"210\" text-anchor=\"middle\" font-size=\"9\">2,3</text>\n<text x=\"498.5\" y=\"230\" text-anchor=\"middle\" font-size=\"9\" class=\"t-gray\">11</text>\n<text x=\"212\" y=\"258\" font-size=\"12\" class=\"t-gray\">g[r][c] is element r × 4 + c of one flat block</text>\n</svg>",
          alt: 'Top: five int boxes holding 10 to 50 at addresses 0x1000, 0x1004, 0x1008, 0x100C, 0x1010. Bottom: a 3 by 4 grid colored by row, flattened into twelve consecutive cells, row 0 first.',
          caption: 'Indexing is arithmetic, not searching. A 2D array is really one flat block with a formula on top.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'Where is `grid[1][2]` in `double grid[3][4]`?',
          steps: [
            { tex: '\\text{flat index} = r \\cdot \\text{cols} + c = 1 \\cdot 4 + 2 = 6', why: 'Row $0$ fills flat slots $0$–$3$; row $1$ starts at slot $4$; column $2$ of it is slot $6$.' },
            { tex: '\\text{byte offset} = 6 \\cdot \\texttt{sizeof(double)} = 6 \\cdot 8 = 48', why: 'Each `double` occupies $8$ bytes, so slot $6$ begins $48$ bytes after the start.' },
          ],
          result: '`grid[1][2]` sits $48$ bytes into the block, and `grid[2][0]` at $8 \\cdot 8 = 64$, exactly one cache line in. The program below prints both.',
        },
        {
          type: 'code',
          title: 'array_layout.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>

// Byte distance from the start of an object to some part of it.
template <class T, class U>
long offset(const T& base, const U& part) {
    return reinterpret_cast<const char*>(&part) - reinterpret_cast<const char*>(&base);
}

struct Padded  { char tag; double value; char flag; };   // members in a careless order
struct Ordered { double value; char tag; char flag; };   // largest member first

int main() {
    int a[5] = {10, 20, 30, 40, 50};
    for (int i = 0; i < 5; ++i)
        std::printf("a[%d] = %d at byte offset %ld\\n", i, a[i], offset(a, a[i]));

    double grid[3][4] = {};              // 3 rows of 4 doubles, stored row after row
    std::printf("grid[1][2] at offset %ld = (1*4 + 2) * %zu\\n", offset(grid, grid[1][2]), sizeof(double));
    std::printf("grid[2][0] at offset %ld\\n", offset(grid, grid[2][0]));

    std::array<float, 4> v{1, 2, 3, 4};  // std::array: same layout, plus .size() and bounds-checked .at()
    std::printf("sizeof(std::array<float, 4>) = %zu, v.at(3) = %g\\n", sizeof(v), v.at(3));

    std::printf("sizeof(Padded) = %zu, sizeof(Ordered) = %zu\\n", sizeof(Padded), sizeof(Ordered));
}`,
          output: `a[0] = 10 at byte offset 0
a[1] = 20 at byte offset 4
a[2] = 30 at byte offset 8
a[3] = 40 at byte offset 12
a[4] = 50 at byte offset 16
grid[1][2] at offset 48 = (1*4 + 2) * 8
grid[2][0] at offset 64
sizeof(std::array<float, 4>) = 16, v.at(3) = 4
sizeof(Padded) = 24, sizeof(Ordered) = 16`,
          annotations: [
            { lines: '5-8', text: 'Converting both addresses to `const char*` makes the subtraction count **bytes**. Printing differences, not raw addresses, keeps the output identical on every run.' },
            { lines: 22, text: '`std::array<T, N>` is a zero-overhead wrapper over a C array: same bytes, but it knows its size, can be copied and returned, and offers bounds-checked `at()`.' },
            { lines: '10-11', text: 'Alignment: a `double` must start at a multiple of $8$, so the compiler pads after `tag` ($7$ bytes) and at the end ($7$ more). Ordering members from largest to smallest shrinks the struct from $24$ to $16$ bytes, which matters when you have a million of them.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'No bounds checks by default',
          text: '`a[i]` with `i` outside `[0, n)` is **undefined behaviour**: it reads or writes whatever happens to be next in memory, and the program may appear to work. Use `at()` while debugging, enable your standard library\'s debug mode or AddressSanitizer (`-fsanitize=address`) in development builds, and keep `[]` in shipping hot loops.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'numeric',
      prompt: 'In `double grid[4][5]` (row-major, $8$-byte `double`s), how many bytes after the start of `grid` does `grid[3][2]` begin?',
      label: 'offset $=$',
      unit: 'bytes',
      answer: '136',
      hint: 'First the flat index $r \\cdot \\text{cols} + c$, then multiply by the element size.',
      explanation: 'With $5$ columns, the flat index is $3 \\cdot 5 + 2 = 17$, and the byte offset is $17 \\cdot 8 = 136$. A common slip is to multiply by the number of rows ($3 \\cdot 4 + 2 = 14$, giving $112$): the stride between consecutive rows is the length of a row, which is the number of **columns**.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Dynamic arrays: size, capacity and growth',
      blocks: [
        {
          type: 'p',
          text: 'A static array\'s size is fixed when it is created. A [[dsa-dynamic-array|dynamic array]] such as `std::vector` keeps the contiguous layout but can grow. It allocates a heap block with **more slots than it currently needs**, and tracks two numbers: the **size** (slots holding live elements) and the **capacity** (slots in the block).',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"10\" y=\"18\" font-size=\"13\" font-weight=\"600\">std::vector&lt;int&gt; v: a small header pointing at a heap block</text>\n<rect x=\"10\" y=\"40\" width=\"150\" height=\"120\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"1.5\"/>\n<text x=\"85\" y=\"58\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">header (24 bytes)</text>\n<rect x=\"20\" y=\"68\" width=\"130\" height=\"24\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.2\"/>\n<text x=\"85\" y=\"84\" text-anchor=\"middle\" font-size=\"12\">begin</text>\n<rect x=\"20\" y=\"98\" width=\"130\" height=\"24\" rx=\"4\" class=\"f-green s-green\" fill-opacity=\"0.15\" stroke-width=\"1.2\"/>\n<text x=\"85\" y=\"114\" text-anchor=\"middle\" font-size=\"12\">end</text>\n<rect x=\"20\" y=\"128\" width=\"130\" height=\"24\" rx=\"4\" class=\"f-orange s-orange\" fill-opacity=\"0.15\" stroke-width=\"1.2\"/>\n<text x=\"85\" y=\"144\" text-anchor=\"middle\" font-size=\"12\">end of storage</text>\n<text x=\"230\" y=\"44\" font-size=\"12\" class=\"t-gray\">heap block: capacity 8</text>\n<rect x=\"230\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"245.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\">7</text>\n<text x=\"245.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">0</text>\n<rect x=\"264\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"279.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\">3</text>\n<text x=\"279.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text>\n<rect x=\"298\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"313.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\">9</text>\n<text x=\"313.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text>\n<rect x=\"332\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"347.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\">4</text>\n<text x=\"347.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text>\n<rect x=\"366\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.2\"/>\n<text x=\"381.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\">1</text>\n<text x=\"381.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text>\n<rect x=\"400\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\"/>\n<text x=\"415.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">5</text>\n<rect x=\"434\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\"/>\n<text x=\"449.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">6</text>\n<rect x=\"468\" y=\"70\" width=\"31\" height=\"34\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\"/>\n<text x=\"483.5\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">7</text>\n<path d=\"M150.0,80.0 L220.0,80.0\" class=\"s-blue\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M228.0,80.0 L220.0,83.6 L220.0,76.4 Z\" class=\"f-blue\"/>\n<path d=\"M150.0,110.0 L386.1,146.8\" class=\"s-green\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M394.0,148.0 L385.5,150.3 L386.6,143.2 Z\" class=\"f-green\"/>\n<path d=\"M398.5,106 L398.5,150\" class=\"s-green\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n<path d=\"M150.0,140.0 L488.0,169.3\" class=\"s-orange\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M496.0,170.0 L487.7,172.9 L488.3,165.7 Z\" class=\"f-orange\"/>\n<path d=\"M500.5,106 L500.5,172\" class=\"s-orange\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n<text x=\"10\" y=\"196\" font-size=\"12\">size() = end − begin = 5</text>\n<text x=\"10\" y=\"213\" font-size=\"12\">capacity() = end of storage − begin = 8</text>\n<text x=\"300\" y=\"196\" font-size=\"12\" class=\"t-gray\">slots 5–7: allocated, no objects</text>\n</svg>",
          alt: 'A vector header with three pointers, begin, end and end of storage, pointing into a heap block of 8 slots. Slots 0 to 4 hold 7, 3, 9, 4, 1; slots 5 to 7 are empty.',
          caption: 'The major standard libraries all store three pointers, so in a 64-bit release build `sizeof(std::vector<T>)` is typically $24$ bytes, however many elements it holds.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: '`push_back` is cheap while there is spare capacity: construct the element in the next free slot. When size reaches capacity, the vector must **reallocate**: allocate a bigger block, move every element across, and free the old block. The key design choice is how much bigger. Step through nine pushes into an empty vector that doubles:',
        },
        {"type": "algo", "view": "array", "code": "void push_back(T x) {\n    if (size_ == cap_) {\n        auto newCap = cap_ ? 2 * cap_ : 1;\n        T* fresh = allocate(newCap);\n        move_all(data_, size_, fresh);\n        deallocate(data_);\n        data_ = fresh;  cap_ = newCap;\n    }\n    construct(data_ + size_, x);\n    ++size_;\n}", "interval": 1100, "frames": [{"note": "push(1): the vector has no buffer yet, so allocate $1$ slot.", "array": [""], "pointers": [{"index": 0, "label": "end"}], "lines": [2, 3, 4], "vars": [["size", "0"], ["capacity", "1"], ["moves so far", "0"], ["bank (3 per push − cost)", "0"]]}, {"note": "Construct $1$ in slot $0$.", "array": ["1"], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 1, "label": "end"}], "lines": [9, 10], "vars": [["size", "1"], ["capacity", "1"], ["moves so far", "0"], ["bank (3 per push − cost)", "2"]]}, {"note": "push(2): full ($\\text{size} = \\text{capacity} = 1$). Allocate $2$ slots and move its only element (blue).", "array": ["1", ""], "marks": [{"index": 0, "color": "blue"}], "pointers": [{"index": 1, "label": "end"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["size", "1"], ["capacity", "2"], ["moves so far", "1"], ["bank (3 per push − cost)", "1"]]}, {"note": "Construct $2$ in slot $1$ (green).", "array": ["1", "2"], "marks": [{"index": 1, "color": "green"}], "pointers": [{"index": 2, "label": "end"}], "lines": [9, 10], "vars": [["size", "2"], ["capacity", "2"], ["moves so far", "1"], ["bank (3 per push − cost)", "3"]]}, {"note": "push(3): full ($\\text{size} = \\text{capacity} = 2$). Allocate $4$ slots and move all $2$ elements (blue).", "array": ["1", "2", "", ""], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}], "pointers": [{"index": 2, "label": "end"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["size", "2"], ["capacity", "4"], ["moves so far", "3"], ["bank (3 per push − cost)", "1"]]}, {"note": "Construct $3$ in slot $2$ (green).", "array": ["1", "2", "3", ""], "marks": [{"index": 2, "color": "green"}], "pointers": [{"index": 3, "label": "end"}], "lines": [9, 10], "vars": [["size", "3"], ["capacity", "4"], ["moves so far", "3"], ["bank (3 per push − cost)", "3"]]}, {"note": "push(4): there is room, so just construct $4$ in slot $3$: cost $1$.", "array": ["1", "2", "3", "4"], "marks": [{"index": 3, "color": "green"}], "pointers": [{"index": 4, "label": "end"}], "lines": [9, 10], "vars": [["size", "4"], ["capacity", "4"], ["moves so far", "3"], ["bank (3 per push − cost)", "5"]]}, {"note": "push(5): full ($\\text{size} = \\text{capacity} = 4$). Allocate $8$ slots and move all $4$ elements (blue).", "array": ["1", "2", "3", "4", "", "", "", ""], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}], "pointers": [{"index": 4, "label": "end"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["size", "4"], ["capacity", "8"], ["moves so far", "7"], ["bank (3 per push − cost)", "1"]]}, {"note": "Construct $5$ in slot $4$ (green).", "array": ["1", "2", "3", "4", "5", "", "", ""], "marks": [{"index": 4, "color": "green"}], "pointers": [{"index": 5, "label": "end"}], "lines": [9, 10], "vars": [["size", "5"], ["capacity", "8"], ["moves so far", "7"], ["bank (3 per push − cost)", "3"]]}, {"note": "push(6): there is room, so just construct $6$ in slot $5$: cost $1$.", "array": ["1", "2", "3", "4", "5", "6", "", ""], "marks": [{"index": 5, "color": "green"}], "pointers": [{"index": 6, "label": "end"}], "lines": [9, 10], "vars": [["size", "6"], ["capacity", "8"], ["moves so far", "7"], ["bank (3 per push − cost)", "5"]]}, {"note": "push(7): there is room, so just construct $7$ in slot $6$: cost $1$.", "array": ["1", "2", "3", "4", "5", "6", "7", ""], "marks": [{"index": 6, "color": "green"}], "pointers": [{"index": 7, "label": "end"}], "lines": [9, 10], "vars": [["size", "7"], ["capacity", "8"], ["moves so far", "7"], ["bank (3 per push − cost)", "7"]]}, {"note": "push(8): there is room, so just construct $8$ in slot $7$: cost $1$.", "array": ["1", "2", "3", "4", "5", "6", "7", "8"], "marks": [{"index": 7, "color": "green"}], "pointers": [{"index": 8, "label": "end"}], "lines": [9, 10], "vars": [["size", "8"], ["capacity", "8"], ["moves so far", "7"], ["bank (3 per push − cost)", "9"]]}, {"note": "push(9): full ($\\text{size} = \\text{capacity} = 8$). Allocate $16$ slots and move all $8$ elements (blue).", "array": ["1", "2", "3", "4", "5", "6", "7", "8", "", "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}], "pointers": [{"index": 8, "label": "end"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["size", "8"], ["capacity", "16"], ["moves so far", "15"], ["bank (3 per push − cost)", "1"]]}, {"note": "Construct $9$. Nine pushes cost $9$ writes $+ \\, 15$ moves $= 24 \\le 3 \\cdot 9$, and the bank never went negative.", "array": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", ""], "marks": [{"index": 8, "color": "green"}], "pointers": [{"index": 9, "label": "end"}], "lines": [9, 10], "vars": [["size", "9"], ["capacity", "16"], ["moves so far", "15"], ["bank (3 per push − cost)", "3"]]}], "caption": "Pushing $1, \\dots, 9$ into an empty vector that doubles. Empty boxes are capacity that is allocated but holds no element; `end` points one past the last element. The **bank** is the banker's credit if every push is charged $3$."},
        {
          type: 'p',
          text: 'Here is a working dynamic array with exactly this policy. It separates **allocating memory** from **constructing objects**, as `std::vector` does: `allocate` returns raw slots, `std::construct_at` builds an object in a slot, and `std::destroy_at` ends one. That is what lets capacity exceed size without default-constructing the spare slots.',
        },
        {
          type: 'code',
          title: 'dyn_array.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <initializer_list>
#include <memory>
#include <string>
#include <utility>

// A minimal dynamic array: the core of std::vector.
template <class T>
class DynArray {
    T* data_ = nullptr;          // start of the heap block
    std::size_t size_ = 0;       // live elements
    std::size_t cap_ = 0;        // slots in the block
    std::allocator<T> alloc_;

    void grow() {
        std::size_t newCap = cap_ ? 2 * cap_ : 1;
        T* fresh = alloc_.allocate(newCap);             // raw memory: no objects yet
        for (std::size_t i = 0; i < size_; ++i) {
            std::construct_at(fresh + i, std::move(data_[i]));
            std::destroy_at(data_ + i);
        }
        if (data_) alloc_.deallocate(data_, cap_);
        data_ = fresh;
        cap_ = newCap;
    }

public:
    DynArray() = default;
    DynArray(const DynArray&) = delete;                 // copying left out for brevity
    DynArray& operator=(const DynArray&) = delete;
    ~DynArray() {
        while (size_ > 0) pop_back();
        if (data_) alloc_.deallocate(data_, cap_);
    }

    void push_back(T x) {                               // by value: see the note
        if (size_ == cap_) grow();
        std::construct_at(data_ + size_, std::move(x));
        ++size_;
    }
    void pop_back() { std::destroy_at(data_ + --size_); }

    T& operator[](std::size_t i) { return data_[i]; }   // O(1): base + i * sizeof(T)
    std::size_t size() const { return size_; }
    std::size_t capacity() const { return cap_; }
    T* begin() { return data_; }
    T* end() { return data_ + size_; }
};

int main() {
    DynArray<std::string> names;
    for (const char* s : {"tank", "jeep", "heli", "drone"}) {
        names.push_back(s);
        std::printf("size %zu, capacity %zu\\n", names.size(), names.capacity());
    }
    names.push_back(names[0]);   // full, so this grows: safe only because x is a copy
    std::printf("size %zu, capacity %zu:", names.size(), names.capacity());
    for (const std::string& s : names) std::printf(" %s", s.c_str());
    names.pop_back();
    std::printf("\\nafter pop_back: size %zu, capacity %zu\\n", names.size(), names.capacity());
}`,
          output: `size 1, capacity 1
size 2, capacity 2
size 3, capacity 4
size 4, capacity 4
size 5, capacity 8: tank jeep heli drone tank
after pop_back: size 4, capacity 8`,
          annotations: [
            { lines: '10-12', text: 'The three pieces of state: where the block is, how many live elements, how many slots.' },
            { lines: '15-25', text: 'Reallocation: grow by a factor of $2$ (from $0$, start at $1$), move each element into the new block, destroy the original, free the old block. This is the $\\Theta(n)$ step.' },
            { lines: '36-40', text: '`x` is taken **by value**, so the argument is copied before `grow()` can free the block it came from. A `const T&` parameter here would be the classic self-aliasing bug.' },
            { lines: 56, text: '`names[0]` lives inside the block that `grow()` is about to free. Because `push_back` already made its own copy, this works; real `std::vector` implementations handle this case carefully too.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'An empty `std::vector<int>` starts with capacity $0$ and doubles its capacity whenever `push_back` finds it full (going $0 \\to 1 \\to 2 \\to 4 \\to \\cdots$). During $100$ calls to `push_back`, how many element **moves** do the reallocations perform in total?',
      label: 'moves $=$',
      answer: '127',
      hint: 'Reallocations happen on the push that finds size $=$ capacity: at sizes $0, 1, 2, 4, 8, \\dots$. Which of them occur before $100$ elements are in?',
      explanation: 'A push that finds the vector full moves all current elements. That happens when the size is $1, 2, 4, 8, 16, 32$ and $64$ (the first push only allocates, moving nothing). Total: $1 + 2 + 4 + 8 + 16 + 32 + 64 = 127$. The final capacity is $128$, and $127 < 2 \\cdot 100$, as the amortized bound promises.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Proof: push_back is amortized O(1)',
      blocks: [
        {
          type: 'p',
          text: 'One `push_back` can cost $\\Theta(n)$. Use the [[dsa-accounting-method|banker\'s method]] from the previous lesson to show that $m$ pushes cost $O(m)$ anyway. Cost model: $1$ per element written, either the new element or a move during reallocation.',
        },
        {
          type: 'derivation',
          title: 'Banker\'s method for a doubling array',
          steps: [
            { tex: '\\hat{c}(\\texttt{push\\_back}) = 3', why: 'Charge each push $3$: $1$ pays for writing the new element, $2$ are banked on that element.' },
            { tex: '\\text{invariant: each element pushed since the last reallocation holds } 2 \\text{ credits}', why: 'This is the claim to maintain. Elements already moved have spent their credit; the newcomers carry theirs.' },
            { tex: '\\text{capacity } 2k \\text{ just after a reallocation, holding } k + 1 \\text{ elements}', why: 'The last reallocation went from $k$ to $2k$ slots, moving the $k$ old elements, and then the push that triggered it added one more.' },
            { tex: '\\text{when full: } 2k - k = k \\text{ new elements} \\implies 2k \\text{ credits banked}', why: 'Between reallocations the size grows from $k$ to $2k$, so $k$ elements were pushed in this round, each depositing $2$ credits.' },
            { tex: '\\text{next reallocation moves } 2k \\text{ elements, paid by the } 2k \\text{ credits}', why: 'The bank exactly covers the copy, so the credit never goes negative. The tiny first rounds (capacity $1$ and $2$) have even more credit than they need.' },
            { tex: '\\sum_{j=1}^{m} c_j \\le 3m', why: 'By the banker\'s theorem: actual total $\\le$ charged total.' },
          ],
          result: '`push_back` is amortized $O(1)$, at most $3$ writes per push. The growth **factor** is what matters: any factor $r > 1$ works, with fewer than $\\frac{r}{r - 1}\\,m$ moves in total ($2m$ for doubling, $3m$ for $1.5\\times$).',
        },
        {"type": "graph", "x": [0, 33], "y": [-1.5, 18], "xStep": 4, "yStep": 2, "height": 280, "segments": [{"from": [1, 0], "to": [1, 1], "color": "blue"}, {"from": [2, 0], "to": [2, 2], "color": "blue"}, {"from": [3, 0], "to": [3, 3], "color": "blue"}, {"from": [4, 0], "to": [4, 1], "color": "blue"}, {"from": [5, 0], "to": [5, 5], "color": "blue"}, {"from": [6, 0], "to": [6, 1], "color": "blue"}, {"from": [7, 0], "to": [7, 1], "color": "blue"}, {"from": [8, 0], "to": [8, 1], "color": "blue"}, {"from": [9, 0], "to": [9, 9], "color": "blue"}, {"from": [10, 0], "to": [10, 1], "color": "blue"}, {"from": [11, 0], "to": [11, 1], "color": "blue"}, {"from": [12, 0], "to": [12, 1], "color": "blue"}, {"from": [13, 0], "to": [13, 1], "color": "blue"}, {"from": [14, 0], "to": [14, 1], "color": "blue"}, {"from": [15, 0], "to": [15, 1], "color": "blue"}, {"from": [16, 0], "to": [16, 1], "color": "blue"}, {"from": [17, 0], "to": [17, 17], "color": "blue"}, {"from": [18, 0], "to": [18, 1], "color": "blue"}, {"from": [19, 0], "to": [19, 1], "color": "blue"}, {"from": [20, 0], "to": [20, 1], "color": "blue"}, {"from": [21, 0], "to": [21, 1], "color": "blue"}, {"from": [22, 0], "to": [22, 1], "color": "blue"}, {"from": [23, 0], "to": [23, 1], "color": "blue"}, {"from": [24, 0], "to": [24, 1], "color": "blue"}, {"from": [25, 0], "to": [25, 1], "color": "blue"}, {"from": [26, 0], "to": [26, 1], "color": "blue"}, {"from": [27, 0], "to": [27, 1], "color": "blue"}, {"from": [28, 0], "to": [28, 1], "color": "blue"}, {"from": [29, 0], "to": [29, 1], "color": "blue"}, {"from": [30, 0], "to": [30, 1], "color": "blue"}, {"from": [31, 0], "to": [31, 1], "color": "blue"}, {"from": [32, 0], "to": [32, 1], "color": "blue"}, {"from": [1, 1.0], "to": [2, 1.5], "color": "red"}, {"from": [2, 1.5], "to": [3, 2.0], "color": "red"}, {"from": [3, 2.0], "to": [4, 1.75], "color": "red"}, {"from": [4, 1.75], "to": [5, 2.4], "color": "red"}, {"from": [5, 2.4], "to": [6, 2.1667], "color": "red"}, {"from": [6, 2.1667], "to": [7, 2.0], "color": "red"}, {"from": [7, 2.0], "to": [8, 1.875], "color": "red"}, {"from": [8, 1.875], "to": [9, 2.6667], "color": "red"}, {"from": [9, 2.6667], "to": [10, 2.5], "color": "red"}, {"from": [10, 2.5], "to": [11, 2.3636], "color": "red"}, {"from": [11, 2.3636], "to": [12, 2.25], "color": "red"}, {"from": [12, 2.25], "to": [13, 2.1538], "color": "red"}, {"from": [13, 2.1538], "to": [14, 2.0714], "color": "red"}, {"from": [14, 2.0714], "to": [15, 2.0], "color": "red"}, {"from": [15, 2.0], "to": [16, 1.9375], "color": "red"}, {"from": [16, 1.9375], "to": [17, 2.8235], "color": "red"}, {"from": [17, 2.8235], "to": [18, 2.7222], "color": "red"}, {"from": [18, 2.7222], "to": [19, 2.6316], "color": "red"}, {"from": [19, 2.6316], "to": [20, 2.55], "color": "red"}, {"from": [20, 2.55], "to": [21, 2.4762], "color": "red"}, {"from": [21, 2.4762], "to": [22, 2.4091], "color": "red"}, {"from": [22, 2.4091], "to": [23, 2.3478], "color": "red"}, {"from": [23, 2.3478], "to": [24, 2.2917], "color": "red"}, {"from": [24, 2.2917], "to": [25, 2.24], "color": "red"}, {"from": [25, 2.24], "to": [26, 2.1923], "color": "red"}, {"from": [26, 2.1923], "to": [27, 2.1481], "color": "red"}, {"from": [27, 2.1481], "to": [28, 2.1071], "color": "red"}, {"from": [28, 2.1071], "to": [29, 2.069], "color": "red"}, {"from": [29, 2.069], "to": [30, 2.0333], "color": "red"}, {"from": [30, 2.0333], "to": [31, 2.0], "color": "red"}, {"from": [31, 2.0], "to": [32, 1.9688], "color": "red"}], "hlines": [{"y": 3, "label": "banker's charge 3", "color": "green", "dashed": true}], "caption": "Blue bars: the actual cost of push number $k$ into an empty doubling vector. The spikes at $k = 2, 3, 5, 9, 17$ are reallocations moving $1, 2, 4, 8, 16$ elements. Red: total cost so far divided by $k$. It never exceeds the banker's charge of $3$ (dashed green) and sinks back toward $2$ between spikes."},
        {
          type: 'callout',
          variant: 'why',
          title: 'Why multiply, never add',
          text: 'Suppose the vector grew by a fixed $+k$ slots instead. Reallocations would happen every $k$ pushes and move $k, 2k, 3k, \\dots$ elements: about $\\frac{m^2}{2k}$ moves for $m$ pushes, $\\Theta(m^2)$ in total and $\\Theta(m)$ amortized per push. Geometric growth makes the reallocation costs a geometric series, which is dominated by its **last** term, and that last term is at most a constant times the number of pushes that came before it.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: '2 or 1.5?',
          text: 'libstdc++ (GCC) and libc++ (Clang) double; MSVC grows by $1.5\\times$. A smaller factor wastes less memory and lets the allocator reuse freed blocks: with factor $2$, the new block is always bigger than all previous blocks combined ($1 + 2 + \\cdots + 2^{k} < 2^{k+1}$), so the old ones can never be recycled for it. The price is more reallocations: about $1.7\\times$ as many ($\\ln 2 / \\ln 1.5$). The program outputs in this lesson come from GCC, so they show doubling.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'A dynamic array that grows its capacity by a fixed $1000$ slots every time it is full still gives amortized $O(1)$ `push_back`, because $1000$ is a constant.',
      answer: false,
      explanation: 'With additive growth, $m$ pushes trigger about $m/1000$ reallocations, moving $1000, 2000, 3000, \\dots$ elements: roughly $\\frac{m^2}{2000}$ moves in total. That is $\\Theta(m^2)$, so the amortized cost per push is $\\Theta(m)$. The constant $1000$ only delays the problem. Amortized $O(1)$ needs **multiplicative** growth, so that the reallocation costs form a geometric series.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Capacity versus size: reserve, resize and noexcept',
      blocks: [
        {
          type: 'p',
          text: 'Two different operations change the two numbers, and confusing them is one of the most common vector bugs:',
        },
        {
          type: 'table',
          headers: ['Call', 'Size after', 'Capacity after', 'Creates elements?'],
          rows: [
            ['`v.reserve(n)`', 'unchanged', 'at least $n$', 'no: only raw slots'],
            ['`v.resize(n)`', '$n$', 'at least $n$', 'yes: value-initializes new ones'],
            ['`v.clear()`', '$0$', 'unchanged', 'destroys all elements'],
            ['`v.shrink_to_fit()`', 'unchanged', 'a non-binding request to make it equal the size', 'no'],
          ],
        },
        {
          type: 'p',
          text: 'If you know roughly how many elements are coming (loading a level with $5000$ props, building the frame\'s draw list) call `reserve` **once, up front**: zero reallocations, one allocation, and no pointer invalidation during the fill. The program below counts element relocations three ways, using an element type that counts its own moves and copies.',
        },
        {
          type: 'code',
          title: 'vector_growth.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

static long moves = 0, copies = 0;   // how often a vector relocates its elements

struct Tracked {                      // a well-behaved element type
    int value;
    explicit Tracked(int v) : value(v) {}
    Tracked(const Tracked& o) : value(o.value) { ++copies; }
    Tracked(Tracked&& o) noexcept : value(o.value) { ++moves; }
};

struct Risky {                        // same, but the move constructor may throw
    int value;
    explicit Risky(int v) : value(v) {}
    Risky(const Risky& o) : value(o.value) { ++copies; }
    Risky(Risky&& o) : value(o.value) { ++moves; }
};

template <class T>
void run(const char* label, int mode, int n = 1000) {
    moves = copies = 0;
    std::vector<T> w;
    if (mode == 1) w.reserve(n);                     // reserve once, up front
    for (int i = 0; i < n; ++i) {
        if (mode == 2) w.reserve(w.size() + 1);      // anti-pattern: one more each time
        w.emplace_back(i);                           // built in place: never moved itself
    }
    std::printf("%-24s moves = %6ld, copies = %4ld, capacity = %zu\\n", label, moves, copies, w.capacity());
}

int main() {
    std::vector<Tracked> v;
    std::size_t lastCap = v.capacity();
    for (int i = 1; i <= 17; ++i) {
        v.emplace_back(i);
        if (v.capacity() != lastCap) {
            std::printf("push %2d: capacity %2zu -> %2zu, relocated so far %ld\\n",
                        i, lastCap, v.capacity(), moves);
            lastCap = v.capacity();
        }
    }
    run<Tracked>("doubling (default):", 0);
    run<Tracked>("reserve(n) first:", 1);
    run<Tracked>("reserve(size()+1) each:", 2);
    run<Risky>("move not noexcept:", 0);
}`,
          output: `push  1: capacity  0 ->  1, relocated so far 0
push  2: capacity  1 ->  2, relocated so far 1
push  3: capacity  2 ->  4, relocated so far 3
push  5: capacity  4 ->  8, relocated so far 7
push  9: capacity  8 -> 16, relocated so far 15
push 17: capacity 16 -> 32, relocated so far 31
doubling (default):      moves =   1023, copies =    0, capacity = 1024
reserve(n) first:        moves =      0, copies =    0, capacity = 1000
reserve(size()+1) each:  moves = 499500, copies =    0, capacity = 1000
move not noexcept:       moves =      0, copies = 1023, capacity = 1024`,
          annotations: [
            { lines: 10, text: 'A move constructor marked `noexcept` promises it cannot throw. `std::vector` relocates with moves only when it has that promise.' },
            { lines: 17, text: 'Without `noexcept`, `vector` copies instead, to keep its strong exception guarantee: if a move threw halfway, the old block would already be partly gutted. The last output line shows $1023$ copies and no moves.' },
            { lines: 24, text: 'Reserving the final size up front: no relocations at all.' },
            { lines: 26, text: 'The anti-pattern. GCC\'s `reserve` allocates exactly what you ask for, so this reallocates on **every** push: $0 + 1 + \\cdots + 999 = 499\\,500$ moves, quadratic.' },
            { lines: '35-41', text: 'Watching the capacity: $1, 2, 4, 8, 16, 32$, with relocations $1 + 2 + 4 + 8 + 16 = 31$ by push $17$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rule of thumb for game code',
          text: 'Reserve once when the count is known; otherwise let the vector grow. Never call `reserve` inside the loop that fills it. For containers rebuilt every frame (visible objects, contacts, render commands), call `clear()` and reuse the vector: `clear` keeps the capacity, so after the first few frames there are no allocations at all.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'This code should fill a vector with $100$ scores and print its size. Tap the line with the bug.',
      lines: [
        '`std::vector<int> scores;`',
        '`scores.reserve(100);`',
        '`for (int i = 0; i < 100; ++i)`',
        '`    scores[i] = i * 10;`',
        '`std::printf("%zu\\n", scores.size());`',
      ],
      errorLines: [4],
      explanation: '`reserve(100)` allocates capacity but creates **no elements**: the size is still $0$. Line 4 then writes through `operator[]` to slots that hold no objects, which is undefined behaviour (it may even seem to work), and the program prints size $0$. Fix line 4 to `scores.push_back(i * 10);`, which keeps the useful `reserve`. Alternatively replace line 2 with `scores.resize(100);`, which creates $100$ zeros that the loop then overwrites.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'A helper appends to a vector like this: `void add(std::vector<T>& v, T x) { v.reserve(v.size() + 1); v.push_back(std::move(x)); }`. With GCC\'s standard library (where `reserve` allocates exactly the requested capacity), what is the total cost of calling `add` $n$ times on an empty vector?',
      options: [
        { text: '$\\Theta(n)$: `reserve` only helps', why: 'Reserving the right amount **once** helps. Reserving one more slot each time forces a reallocation on every call, destroying the geometric growth.' },
        { text: '$\\Theta(n \\log n)$', why: 'That would need $\\log n$-sized work per call. Here call $k$ moves all $k - 1$ existing elements.' },
        { text: '$\\Theta(n^2)$', correct: true, why: 'Each call reallocates to exactly `size() + 1` slots and moves every existing element: $0 + 1 + \\cdots + (n - 1) = \\frac{n(n-1)}{2}$ moves.' },
        { text: '$\\Theta(1)$ per call in the worst case', why: 'No dynamic array can guarantee that while staying contiguous; and this one does $\\Theta(k)$ work on call $k$.' },
      ],
      explanation: 'Plain `push_back` would grow geometrically and cost $\\Theta(n)$ in total. The helper overrides that policy with exact-fit reservations, so every call reallocates and moves all $k - 1$ existing elements: $\\sum_{k=1}^{n} (k - 1) = \\Theta(n^2)$. The program above measured exactly $499\\,500$ moves for $n = 1000$. Remove the `reserve`, or reserve the final count once outside the loop.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Iterator and pointer invalidation',
      blocks: [
        {
          type: 'p',
          text: 'Reallocation moves every element to a new address. Any pointer, reference or iterator you were holding into the old block now points at freed memory. Using it is undefined behaviour, and it is one of the most common crash bugs in C++ game code. The precise rules are called [[dsa-iterator-invalidation|iterator invalidation]]:',
        },
        {
          type: 'table',
          headers: ['Operation on a `std::vector`', 'What becomes invalid'],
          rows: [
            ['`push_back` / `emplace_back` / `insert` that **reallocates** (size was equal to capacity)', 'every pointer, reference and iterator into the vector'],
            ['`push_back` / `emplace_back` without reallocation', 'only `end()`'],
            ['`insert(pos, …)` without reallocation', 'everything at or after `pos`'],
            ['`erase(pos)`', 'everything at or after `pos` (later elements shift left)'],
            ['`reserve(n)` with $n >$ capacity, `shrink_to_fit`', 'everything'],
            ['reading, writing elements, `operator[]`', 'nothing'],
          ],
        },
        {
          type: 'code',
          title: 'invalidation.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

struct Enemy { int id; int hp; };

int main() {
    std::vector<Enemy> enemies{{1, 30}, {2, 0}, {3, 15}};
    std::printf("size %zu, capacity %zu\\n", enemies.size(), enemies.capacity());

    const Enemy* before = enemies.data();
    std::size_t target = 0;                  // an index survives reallocation...
    // Enemy& target = enemies[0];          // ...a reference would dangle after the push
    enemies.push_back({4, 50});              // size == capacity, so this reallocates
    std::printf("after push: capacity %zu, buffer moved: %s\\n",
                enemies.capacity(), enemies.data() != before ? "yes" : "no");
    std::printf("enemies[target].id = %d\\n", enemies[target].id);

    // Erasing while iterating: erase returns the iterator to the next element.
    for (auto it = enemies.begin(); it != enemies.end();) {
        if (it->hp <= 0) it = enemies.erase(it);
        else ++it;
    }
    // C++20 does the same in one line: std::erase_if(enemies, [](const Enemy& e) { return e.hp <= 0; });
    for (const Enemy& e : enemies) std::printf("enemy %d hp %d\\n", e.id, e.hp);
}`,
          output: `size 3, capacity 3
after push: capacity 6, buffer moved: yes
enemies[target].id = 1
enemy 1 hp 30
enemy 3 hp 15
enemy 4 hp 50`,
          annotations: [
            { lines: '10-13', text: 'The initializer list made capacity exactly $3$, so the push must reallocate. We compare `data()` before and after instead of dereferencing an old pointer, which would be undefined behaviour.' },
            { lines: 11, text: 'An **index** is a position, not an address, so it stays meaningful when the block moves. Engines take this further with handles (an index plus a generation counter), covered in the game-engine unit.' },
            { lines: '19-22', text: 'The safe erase loop: `erase` returns an iterator to the element after the removed one. Only advance with `++it` when you did **not** erase.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The spawn-during-iteration crash',
          text: 'A classic: looping over `enemies` with a range-for while one enemy\'s update spawns a new enemy with `push_back`. If that push reallocates, the loop\'s hidden iterator dangles. Fixes: collect spawns in a separate vector and append them after the loop, or loop by index and re-read `enemies.size()` each iteration (with references re-fetched after any push).',
        },
        {
          type: 'p',
          text: 'Erasing from the middle has a second cost besides invalidation: `erase` shifts every later element one slot left, so it is $O(n)$. Erasing many elements one at a time can therefore cost $O(n^2)$. The fix is the erase–remove idiom, `std::erase_if` in C++20, which compacts the survivors in a single $O(n)$ pass. When order does not matter you can do even better, as the last card shows.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'This function should remove every enemy with `hp <= 0`. Tap the line with the bug.',
      lines: [
        '`void removeDead(std::vector<Enemy>& enemies) {`',
        '`    for (auto it = enemies.begin(); it != enemies.end(); ) {`',
        '`        if (it->hp <= 0) enemies.erase(it);`',
        '`        else ++it;`',
        '`    }`',
        '`}`',
      ],
      errorLines: [3],
      explanation: 'After `enemies.erase(it)`, the iterator `it` (and every iterator after it) is invalidated, but line 3 keeps using it on the next iteration: undefined behaviour. `erase` returns a valid iterator to the element that followed the erased one, so line 3 should be `if (it->hp <= 0) it = enemies.erase(it);`. Line 2 is already correct to leave the increment out of the loop header, and line 4 advances only when nothing was erased. Better still: `std::erase_if(enemies, [](const Enemy& e) { return e.hp <= 0; });`, which is also $O(n)$ instead of $O(n^2)$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Array of structs versus struct of arrays',
      blocks: [
        {
          type: 'p',
          text: 'Object-oriented habit puts everything about one particle in one struct and keeps a `std::vector<Particle>`: an **array of structs** (AoS). The alternative is a [[dsa-struct-of-arrays|struct of arrays]] (SoA): one array per field, `x[]`, `vx[]`, `life[]` and so on, where particle $i$ is "column" $i$ across all of them. Same data, different layout, and the layout decides how many cache lines each loop drags in.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 236\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"10\" y=\"18\" font-size=\"13\" font-weight=\"600\">Array of structs: Particle[ ] (48 bytes each)</text>\n<rect x=\"40.0\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-blue s-blue\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<text x=\"53.8\" y=\"49\" text-anchor=\"middle\" font-size=\"10\">pos</text>\n<rect x=\"67.6\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-teal s-teal\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<text x=\"81.4\" y=\"49\" text-anchor=\"middle\" font-size=\"10\">vel</text>\n<rect x=\"95.2\" y=\"30\" width=\"35.8\" height=\"30\" class=\"f-purple s-purple\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<text x=\"113.6\" y=\"49\" text-anchor=\"middle\" font-size=\"10\">color</text>\n<rect x=\"132.0\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.8\"/>\n<rect x=\"141.2\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-gray s-gray\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<text x=\"95.2\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">particle 0</text>\n<rect x=\"150.4\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-blue s-blue\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"178.0\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-teal s-teal\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"205.6\" y=\"30\" width=\"35.8\" height=\"30\" class=\"f-purple s-purple\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"242.4\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.8\"/>\n<rect x=\"251.6\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-gray s-gray\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<text x=\"205.6\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">particle 1</text>\n<rect x=\"260.8\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-blue s-blue\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"288.4\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-teal s-teal\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"316.0\" y=\"30\" width=\"35.8\" height=\"30\" class=\"f-purple s-purple\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"352.8\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.8\"/>\n<rect x=\"362.0\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-gray s-gray\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<text x=\"316.0\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">particle 2</text>\n<rect x=\"371.2\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-blue s-blue\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"398.8\" y=\"30\" width=\"26.6\" height=\"30\" class=\"f-teal s-teal\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"426.4\" y=\"30\" width=\"35.8\" height=\"30\" class=\"f-purple s-purple\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<rect x=\"463.2\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.8\"/>\n<rect x=\"472.4\" y=\"30\" width=\"8.2\" height=\"30\" class=\"f-gray s-gray\" fill-opacity=\"0.14\" stroke-width=\"0.8\"/>\n<text x=\"426.4\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">particle 3</text>\n<path d=\"M40.0,24 L40.0,66\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<path d=\"M187.2,24 L187.2,66\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<path d=\"M334.4,24 L334.4,66\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<path d=\"M481.6,24 L481.6,66\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<text x=\"40\" y=\"100\" font-size=\"12\">Counting live particles reads 4 orange bytes per 48: <tspan class=\"t-red\">3 lines</tspan> for 4 particles.</text>\n<text x=\"10\" y=\"140\" font-size=\"13\" font-weight=\"600\">Struct of arrays: life[ ] is its own contiguous array</text>\n<rect x=\"40.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"49.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"58.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"67.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"76.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"86.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"95.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"104.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"113.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"122.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"132.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"141.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"150.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"159.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"168.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"178.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"187.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"196.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"205.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"214.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"224.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"233.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"242.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"251.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"260.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"270.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"279.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"288.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"297.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"306.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"316.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"325.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"334.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"343.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"352.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"362.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"371.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"380.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"389.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"398.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"408.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"417.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"426.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"435.6\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"444.8\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"454.0\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"463.2\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<rect x=\"472.4\" y=\"152\" width=\"8.4\" height=\"30\" class=\"f-orange s-orange\" fill-opacity=\"0.55\" stroke-width=\"0.6\"/>\n<path d=\"M40.0,146 L40.0,188\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<path d=\"M187.2,146 L187.2,188\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<path d=\"M334.4,146 L334.4,188\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<path d=\"M481.6,146 L481.6,188\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<text x=\"40\" y=\"204\" font-size=\"12\">The same 3 lines now hold the life of 48 particles: every byte loaded is used.</text>\n<text x=\"40\" y=\"222\" font-size=\"11\" class=\"t-gray\">Dashed red lines: 64-byte cache-line boundaries.</text>\n</svg>",
          alt: 'Top: four 48-byte particle structs in a row, each with pos, vel, color, life and flags fields, crossed by 64-byte cache line boundaries; life is a thin orange stripe in each. Bottom: a contiguous array of life values, all orange, spanning the same three cache lines.',
          caption: 'Counting live particles only needs the orange bytes. In AoS each $64$-byte line carries about $5$ useful bytes; in SoA all $64$ are useful.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'Cache lines read to check `life` for $1024$ particles of $48$ bytes',
          steps: [
            { tex: '\\text{AoS: } \\frac{1024 \\cdot 48}{64} = 768 \\text{ lines}', why: 'The particles occupy $49\\,152$ contiguous bytes, and every line of it contains some particle\'s `life`, so every line is loaded.' },
            { tex: '\\text{SoA: } \\frac{1024 \\cdot 4}{64} = 64 \\text{ lines}', why: 'The `life` array alone is $4096$ bytes, packed with nothing else.' },
            { tex: '\\frac{768}{64} = 12', why: 'The ratio equals $\\frac{\\text{struct size}}{\\text{field size}} = \\frac{48}{4}$: AoS moves $12\\times$ more memory for this loop.' },
          ],
          result: 'For a loop that touches one field, SoA reads only that field. For a loop that touches every field of each element, the two layouts read about the same number of lines.',
        },
        {
          type: 'code',
          title: 'aos_soa.cpp',
          runnable: true,
          code: `#include <cstddef>
#include <cstdio>
#include <initializer_list>
#include <set>
#include <vector>

// Array of structs: one Particle after another.
struct Particle {
    float x, y, z;        // position
    float vx, vy, vz;     // velocity
    float r, g, b, a;     // color
    float life;           // seconds left
    int flags;
};

// Struct of arrays: one array per field.
struct Particles {
    std::vector<float> x, y, z, vx, vy, vz, r, g, b, a, life;
    std::vector<int> flags;
};

// Cache lines touched when reading \`bytes\` bytes at byte offset \`start\` (64-byte lines).
void touch(std::set<long>& lines, long start, long bytes) {
    for (long addr = start; addr < start + bytes; ++addr) lines.insert(addr / 64);
}

int main() {
    const long N = 1024;
    std::printf("sizeof(Particle) = %zu bytes\\n", sizeof(Particle));

    // Task: count live particles, which reads only \`life\`.
    std::set<long> aos, soa;
    for (long i = 0; i < N; ++i) {
        touch(aos, i * long(sizeof(Particle)) + long(offsetof(Particle, life)), sizeof(float));
        touch(soa, i * long(sizeof(float)), sizeof(float));   // the life array alone
    }
    std::printf("count live:      AoS touches %4zu lines, SoA touches %4zu lines\\n", aos.size(), soa.size());

    // Task: integrate positions, which reads x, y, z, vx, vy, vz.
    aos.clear(); soa.clear();
    for (long i = 0; i < N; ++i) {
        touch(aos, i * long(sizeof(Particle)), 6 * sizeof(float));
        for (long field = 0; field < 6; ++field)              // six arrays placed one after another
            touch(soa, field * N * 4 + i * 4, sizeof(float));
    }
    std::printf("move particles:  AoS touches %4zu lines, SoA touches %4zu lines\\n", aos.size(), soa.size());

    // The same update written both ways gives the same answer.
    std::vector<Particle> ps(N);
    Particles qs;
    for (auto* v : {&qs.x, &qs.vx}) v->assign(N, 0.0f);
    for (long i = 0; i < N; ++i) ps[i].vx = qs.vx[i] = float(i % 7);
    const float dt = 0.5f;
    for (Particle& p : ps) p.x += p.vx * dt;                  // AoS loop
    for (long i = 0; i < N; ++i) qs.x[i] += qs.vx[i] * dt;    // SoA loop
    std::printf("x[10]: AoS %.1f, SoA %.1f\\n", ps[10].x, qs.x[10]);
}`,
          output: `sizeof(Particle) = 48 bytes
count live:      AoS touches  768 lines, SoA touches   64 lines
move particles:  AoS touches  768 lines, SoA touches  384 lines
x[10]: AoS 1.5, SoA 1.5`,
          annotations: [
            { lines: '8-14', text: 'Twelve $4$-byte members: $48$ bytes, no padding needed.' },
            { lines: 34, text: '`offsetof(Particle, life)` is the byte position of `life` inside the struct ($40$); particle $i$ starts $48i$ bytes into the array.' },
            { lines: '42-44', text: 'Moving particles reads $24$ of each struct\'s $48$ bytes. AoS still loads every line ($768$); SoA reads six $4096$-byte arrays ($6 \\cdot 64 = 384$ lines): a $2\\times$ saving instead of $12\\times$.' },
            { lines: '54-55', text: 'The SoA loop reads two dense float arrays, the ideal shape for the compiler to vectorize with SIMD instructions, $4$ or $8$ particles per instruction.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where you will see this',
          text: 'Particle systems, physics solvers and animation blend trees are usually SoA, and entity component systems (ECS) such as Unity\'s DOTS, Unreal\'s Mass, EnTT and flecs are SoA by design: each component type lives in its own dense array. AoS is still the right default for objects you mostly handle one at a time, like the player or a UI widget. The question is always: **which bytes does the hot loop touch?**',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A `Unit` struct is $32$ bytes, and its `float hp` field is $4$ bytes. You have $2048$ units and a loop that reads only `hp` for every unit. With $64$-byte cache lines and arrays that start on a line boundary, how many cache lines does the loop touch if `hp` is stored in its own **struct-of-arrays** array?',
      label: 'lines $=$',
      answer: '128',
      hint: 'In SoA the `hp` values are packed together: how many bytes is that?',
      explanation: 'The `hp` array holds $2048 \\times 4 = 8192$ bytes, which is $8192 / 64 = 128$ lines. The array-of-structs version touches the whole $2048 \\times 32 = 65\\,536$-byte array, $1024$ lines, because every line contains some unit\'s `hp`. That is $8\\times$ more memory traffic, matching $\\frac{32}{4} = 8$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Swap-and-pop: O(1) removal when order does not matter',
      blocks: [
        {
          type: 'p',
          text: 'Removing element $i$ from the middle of a vector with `erase` shifts everything after it: $O(n)$. But many game lists are **unordered sets** in disguise: live projectiles, active particles, enemies in a wave. If order does not matter, there is a constant-time trick, [[dsa-swap-and-pop|swap-and-pop]]: overwrite slot $i$ with the last element, then `pop_back`. The array stays contiguous, nothing shifts, and only one element moves.',
        },
        {"type": "algo", "view": "array", "code": "for (std::size_t i = 0; i < v.size();) {\n    if (v[i].dead) {\n        v[i] = std::move(v.back());\n        v.pop_back();\n    } else {\n        ++i;\n    }\n}", "interval": 1200, "frames": [{"note": "Entities $B$, $E$ and $F$ are dead (red). Order does not matter, so each removal can be $O(1)$.", "array": ["A", "B", "C", "D", "E", "F"], "marks": [{"index": 1, "color": "red"}, {"index": 4, "color": "red"}, {"index": 5, "color": "red"}], "pointers": [{"index": 0, "label": "i"}], "lines": [1]}, {"note": "$v[0] = A$ is alive: advance $i$.", "array": ["A", "B", "C", "D", "E", "F"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "red"}, {"index": 4, "color": "red"}, {"index": 5, "color": "red"}], "pointers": [{"index": 1, "label": "i"}], "lines": [5, 6]}, {"note": "$v[1] = B$ is dead: overwrite it with the last element, $F$ (purple).", "array": ["A", "B", "C", "D", "E", "F"], "marks": [{"index": 1, "color": "red"}, {"index": 4, "color": "red"}, {"index": 5, "color": "purple"}], "pointers": [{"index": 1, "label": "i"}, {"index": 5, "label": "back", "color": "purple"}], "lines": [2, 3]}, {"note": "Pop the back. $F$ now sits in slot $1$ and has **not** been checked, so $i$ stays at $1$.", "array": ["A", "F", "C", "D", "E"], "marks": [{"index": 1, "color": "red"}, {"index": 4, "color": "red"}], "pointers": [{"index": 1, "label": "i"}], "lines": [4]}, {"note": "$v[1] = F$ is dead: overwrite it with the last element, $E$ (purple).", "array": ["A", "F", "C", "D", "E"], "marks": [{"index": 1, "color": "red"}, {"index": 4, "color": "purple"}], "pointers": [{"index": 1, "label": "i"}, {"index": 4, "label": "back", "color": "purple"}], "lines": [2, 3]}, {"note": "Pop the back. $E$ now sits in slot $1$ and has **not** been checked, so $i$ stays at $1$.", "array": ["A", "E", "C", "D"], "marks": [{"index": 1, "color": "red"}], "pointers": [{"index": 1, "label": "i"}], "lines": [4]}, {"note": "$v[1] = E$ is dead: overwrite it with the last element, $D$ (purple).", "array": ["A", "E", "C", "D"], "marks": [{"index": 1, "color": "red"}, {"index": 3, "color": "purple"}], "pointers": [{"index": 1, "label": "i"}, {"index": 3, "label": "back", "color": "purple"}], "lines": [2, 3]}, {"note": "Pop the back. $D$ now sits in slot $1$ and has **not** been checked, so $i$ stays at $1$.", "array": ["A", "D", "C"], "marks": [{"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "i"}], "lines": [4]}, {"note": "$v[1] = D$ is alive: advance $i$.", "array": ["A", "D", "C"], "marks": [{"index": 1, "color": "green"}], "pointers": [{"index": 2, "label": "i"}], "lines": [5, 6]}, {"note": "$v[2] = C$ is alive: advance $i$.", "array": ["A", "D", "C"], "marks": [{"index": 2, "color": "green"}], "pointers": [{"index": 3, "label": "i"}], "lines": [5, 6]}, {"note": "Done: $[A, D, C]$. Three removals, each $O(1)$, and no element was shifted. The order changed, which is the price.", "array": ["A", "D", "C"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}], "pointers": [{"index": 3, "label": "i"}], "lines": [1]}], "caption": "Removing dead entities with swap-and-pop. The same loop as `swap_pop.cpp` below."},
        {
          type: 'code',
          title: 'swap_pop.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>
#include <utility>
#include <vector>

struct Entity { std::string name; bool dead; };

// O(1) unordered removal: overwrite slot i with the last element, then drop the last.
void swapAndPop(std::vector<Entity>& v, std::size_t i) {
    if (i != v.size() - 1) v[i] = std::move(v.back());
    v.pop_back();
}

void print(const char* label, const std::vector<Entity>& v) {
    std::printf("%-14s", label);
    for (const Entity& e : v) std::printf(" %s", e.name.c_str());
    std::printf("\\n");
}

int main() {
    std::vector<Entity> world{{"A", false}, {"B", true}, {"C", false},
                              {"D", false}, {"E", true}, {"F", true}};
    print("start:", world);

    // Remove every dead entity. Do NOT advance i after a removal:
    // the element just moved into slot i has not been checked yet.
    for (std::size_t i = 0; i < world.size();) {
        if (world[i].dead) swapAndPop(world, i);
        else ++i;
    }
    print("swap-and-pop:", world);

    // For comparison: std::erase_if keeps the order but shifts everything after each hole.
    std::vector<Entity> ordered{{"A", false}, {"B", true}, {"C", false},
                                {"D", false}, {"E", true}, {"F", true}};
    std::erase_if(ordered, [](const Entity& e) { return e.dead; });
    print("erase_if:", ordered);
}`,
          output: `start:         A B C D E F
swap-and-pop:  A D C
erase_if:      A C D`,
          annotations: [
            { lines: '9-12', text: 'The whole trick. The guard skips moving an element onto itself when `i` is already the last slot.' },
            { lines: '27-30', text: 'Do **not** advance `i` after a removal: slot `i` now holds a different element that has not been checked. Advancing would skip it: here the dead `F`, moved into slot $1$, would survive.' },
            { lines: 36, text: '`std::erase_if` (C++20) removes all matches in one $O(n)$ pass and keeps the survivors in order: `A C D` instead of `A D C`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Moved elements change index',
          text: 'Swap-and-pop moves the last element to a new index. If anything else stored that index (a target selection, an index in a spatial grid), it now refers to the wrong entity. Engines solve this with an extra indirection: stable handles that map to the current slot, updated when an element is moved. You will build that in the game-engine unit.',
        },
        {
          type: 'table',
          headers: ['Removal', 'Cost', 'Keeps order?', 'Use when'],
          rows: [
            ['`v.erase(v.begin() + i)`', '$O(n - i)$', 'yes', 'occasional removal from an ordered list'],
            ['`std::erase_if(v, pred)`', '$O(n)$ for all removals together', 'yes', 'batch removal, order matters'],
            ['swap-and-pop', '$O(1)$ each', 'no', 'unordered pools of entities, particles, projectiles'],
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete swap-and-pop removal of element `i` from `std::vector<Bullet> v` (assume `i` is not the last index).',
      template: '`v[i] = std::move(v.`___`());` then `v.`___`();`. In a loop that removes several bullets, after a removal the index `i` must ___.',
      blanks: [{ answers: ['back'] }, { answers: ['pop_back'] }, { answers: ['stay the same'] }],
      wordBank: ['back', 'front', 'pop_back', 'erase', 'stay the same', 'increase by 1', 'reset to 0'],
      explanation: 'Move the **last** element (`v.back()`) into the hole at `i`, then drop the now-redundant last slot with `pop_back()`: $O(1)$, no shifting. After a removal, slot `i` holds the element that used to be last, which has not been examined yet, so `i` must stay put. Incrementing would skip it; resetting to $0$ would re-check everything and make the loop quadratic.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'In which situation is swap-and-pop the **wrong** way to remove an element?',
      options: [
        { text: 'Removing an expired bullet from the list of live bullets', why: 'Bullets are updated independently, so their order is irrelevant. This is the textbook use of swap-and-pop.' },
        { text: 'Removing a sprite from a list kept sorted back to front for transparent rendering', correct: true, why: 'Moving the last (front-most) sprite into the middle breaks the sorted order, so transparent objects would blend in the wrong order. Use `erase` or batch `erase_if`, which preserve order.' },
        { text: 'Removing a dead particle from a particle pool', why: 'Particles are an unordered pool, updated in any order. Swap-and-pop keeps the pool dense and removal $O(1)$.' },
        { text: 'Removing a disconnected player from a server\'s list of connections that is only ever iterated in full', why: 'If no one relies on the order or on stored indices, swap-and-pop is fine here.' },
      ],
      explanation: 'Swap-and-pop trades order for speed. It is perfect for pools whose order means nothing and wrong whenever the order carries meaning: sorted lists, queues processed first-come-first-served, UI lists, or anything another system indexes by position (unless you add handles).',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'If you hold `Enemy& e = enemies[0];` and then call `enemies.push_back(newEnemy)`, the reference `e` may be invalid afterwards even though you never erased anything.',
      answer: true,
      explanation: 'If the push finds size equal to capacity, the vector reallocates: it moves every element to a new block and frees the old one, so `e` refers to freed memory. Whether that happens depends on the current capacity, which is exactly why the bug is intermittent and nasty. Hold an index (or call `reserve` beforehand so that no reallocation can happen) instead of a reference across any operation that might grow the vector.',
    },
  ],
  takeaways: [
    'An array is one contiguous block: `&a[i] = base + i * sizeof(T)` makes indexing $O(1)$, and row-major 2D arrays put `g[r][c]` at flat index `r * cols + c`.',
    '`std::vector` is a header (begin, end, end of storage) over a heap block with size $\\le$ capacity. When full it reallocates with **multiplicative** growth, so `push_back` is amortized $O(1)$ (banker\'s charge $3$); additive growth would be quadratic.',
    '`reserve` sets capacity, not size; reserve the final count once, never one more per push. Mark move constructors `noexcept`, or reallocation copies instead of moving.',
    'Reallocation invalidates every pointer, reference and iterator into a vector; `erase` invalidates from the erase point on. Use indices or handles, `it = v.erase(it)`, or `std::erase_if`.',
    'Layout decides cache traffic: struct-of-arrays reads only the fields a loop needs (a $\\frac{\\text{struct}}{\\text{field}}$ saving), which is why particle systems and ECS are SoA.',
    'Swap-and-pop removes from an unordered vector in $O(1)$; do not advance the index after a removal, and remember the moved element changes index.',
  ],
  reading: [
    {
      title: 'cppreference — std::vector',
      url: 'https://en.cppreference.com/w/cpp/container/vector',
      source: 'other',
      note: 'The reference for every member, with complexity guarantees and the iterator invalidation table.',
    },
    {
      title: 'Game Programming Patterns — Data Locality',
      url: 'https://gameprogrammingpatterns.com/data-locality.html',
      source: 'book',
      note: 'Contiguous arrays, pointer chasing and hot/cold splitting, explained with game examples.',
    },
    {
      title: 'Wikipedia — Dynamic array',
      url: 'https://en.wikipedia.org/wiki/Dynamic_array',
      source: 'wikipedia',
      note: 'Growth factors used by real libraries and the geometric-expansion argument for amortized constant time.',
    },
    {
      title: 'Wikipedia — AoS and SoA',
      url: 'https://en.wikipedia.org/wiki/AoS_and_SoA',
      source: 'wikipedia',
      note: 'Array-of-structures versus structure-of-arrays layouts and their effect on SIMD and caching.',
    },
  ],
};
