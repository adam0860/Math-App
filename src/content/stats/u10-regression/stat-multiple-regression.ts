import type { Lesson } from '../../types';

// Six benchmark scenes: enemies (tens), particle emitters, frame time (ms).
// Least squares: y = 5.232 + 0.130 x1 + 1.065 x2 (exactly 1548.8/296 + 38.4/296 x1 + 315.2/296 x2).

// Overfitting demo: 12 training points from y = 2 + 3x - 2.5x^2 + N(0, 0.35^2).
const train: [number, number][] = [
  [0.09, 2.5], [0.29, 2.47], [0.69, 2.95], [0.69, 2.95], [0.91, 2.78], [1.14, 2.66],
  [1.39, 1.53], [1.44, 1.72], [1.56, 0.82], [1.63, 0.19], [1.69, -0.6], [1.95, -2.2],
];
const deg8 = [109.94389, -909.34334, 3132.5005, -5813.4775, 6267.8709, -3934.8384, 1354.6495, -218.12785, 13.648771];
const deg8Expr = deg8.map((c, i) => `(${c})*x^${8 - i}`).join(' + ');
// Mean squared error on the training data and on new data, for polynomial degree 1..8.
const trainMse = [0.879, 0.069, 0.041, 0.027, 0.023, 0.013, 0.012, 0.007];
const testMse = [0.595, 0.167, 0.175, 0.217, 0.231, 0.262, 0.3, 0.929];

// Churn data: days since last login, churned next month (1) or not (0).
const churnDays = [0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 12, 14, 15, 18, 21];
const churned = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1];

export const lesson: Lesson = {
  id: 'stat-multiple-regression',
  title: 'Multiple and Logistic Regression',
  summary: 'Regression with many predictors in matrix form, coefficients "holding the others fixed", adjusted $R^2$ and multicollinearity, dummy variables for categories, overfitting and train/test splits, and logistic regression for yes/no outcomes such as churn and win probability, with the bridge to machine learning.',
  minutes: 23,
  objectives: [
    'Write a multiple regression model as $\\mathbf{y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}$ and fit it with the normal equations $X^TX\\hat{\\boldsymbol{\\beta}} = X^T\\mathbf{y}$',
    'Interpret a coefficient as the effect of one predictor holding the others fixed, and explain why it can differ from a simple-regression slope',
    'Use adjusted $R^2$, recognize multicollinearity, and encode categorical predictors with dummy variables',
    'Explain overfitting and evaluate models honestly with a train/test split',
    'Fit and interpret a logistic regression: log-odds, the sigmoid, odds ratios, and predicted probabilities for churn or wins',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Many predictors: regression in matrix form',
      blocks: [
        {
          type: 'p',
          text: 'Frame time depends on more than enemy count. A rendering engineer benchmarks six scenes and records the enemies on screen (in tens), the number of active particle emitters, and the frame time. Busy scenes tend to have both more enemies and more particles, because enemies spawn effects when they attack.',
        },
        {
          type: 'table',
          headers: ['scene', '1', '2', '3', '4', '5', '6'],
          rows: [
            ['enemies (tens) $x_1$', '1', '2', '3', '4', '5', '6'],
            ['particle emitters $x_2$', '2', '3', '5', '4', '7', '8'],
            ['frame time (ms) $y$', '7.7', '8.3', '11.0', '10.1', '13.5', '14.4'],
          ],
        },
        {
          type: 'definition',
          term: 'Multiple linear regression',
          text: 'The [[stat-multiple-regression|multiple regression]] model with $p$ predictors is $Y_i = \\beta_0 + \\beta_1 x_{i1} + \\cdots + \\beta_p x_{ip} + \\varepsilon_i$, or in matrix form\n\n$$\\mathbf{y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon},$$\n\nwhere the [[la-design-matrix|design matrix]] $X$ is $n \\times (p + 1)$: a column of ones, then one column per predictor.',
        },
        {
          type: 'p',
          text: 'Least squares minimizes $\\|\\mathbf{y} - X\\boldsymbol{\\beta}\\|^2$ exactly as before: $X\\hat{\\boldsymbol{\\beta}}$ is the [[orthogonal-projection]] of $\\mathbf{y}$ onto the column space of $X$, and the residual is perpendicular to every column. That gives the [[normal-equations]], now $(p + 1) \\times (p + 1)$:',
        },
        {
          type: 'math',
          tex: 'X^TX\\,\\hat{\\boldsymbol{\\beta}} = X^T\\mathbf{y} \\quad\\implies\\quad \\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^T\\mathbf{y}',
          caption: 'The inverse exists exactly when the columns of $X$ are linearly independent: no predictor is an exact linear combination of the others.',
        },
        {
          type: 'derivation',
          title: 'Fitting the benchmark data',
          steps: [
            { tex: 'X^TX = \\begin{bmatrix} 6 & 21 & 29 \\\\ 21 & 91 & 122 \\\\ 29 & 122 & 167 \\end{bmatrix}, \\qquad X^T\\mathbf{y} = \\begin{bmatrix} 65 \\\\ 251.6 \\\\ 345.4 \\end{bmatrix}', why: 'Entry $(j, k)$ of $X^TX$ is the dot product of columns $j$ and $k$: $n = 6$, $\\sum x_1 = 21$, $\\sum x_2 = 29$, $\\sum x_1^2 = 91$, $\\sum x_1x_2 = 122$, $\\sum x_2^2 = 167$. Likewise $X^T\\mathbf{y}$ holds $\\sum y$, $\\sum x_1 y$, $\\sum x_2 y$.' },
            { tex: '\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^T\\mathbf{y} = \\begin{bmatrix} 5.232 \\\\ 0.130 \\\\ 1.065 \\end{bmatrix}', why: 'Solve the $3 \\times 3$ system (by elimination, or with a library; $\\det(X^TX) = 296$). Check one equation: $6(5.232) + 21(0.130) + 29(1.065) \\approx 65$.' },
          ],
          result: '$\\widehat{\\text{frame time}} = 5.23 + 0.13\\,x_1 + 1.06\\,x_2$ ms, with $R^2 = 0.993$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In practice',
          text: 'No one inverts $X^TX$ by hand for real data. Libraries (Eigen\'s `colPivHouseholderQr`, NumPy\'s `lstsq`) solve the least-squares problem with a QR factorization, which avoids squaring the condition number, the stability issue you met in Linear Algebra. The formula $(X^TX)^{-1}X^T\\mathbf{y}$ is for understanding, not for production code.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Using the fitted model $\\widehat{\\text{frame time}} = 5.232 + 0.130\\,x_1 + 1.065\\,x_2$, predict the frame time (ms) for a scene with $40$ enemies ($x_1 = 4$) and $6$ particle emitters. Give $2$ decimal places.',
      hint: 'Substitute $x_1 = 4$ and $x_2 = 6$.',
      label: '$\\hat{y} =$',
      answer: '5.232 + 0.130*4 + 1.065*6',
      answerTex: '\\hat{y} \\approx 12.14 \\text{ ms}',
      tolerance: 0.006,
      unit: 'ms',
      explanation: '$\\hat{y} = 5.232 + 0.130(4) + 1.065(6) = 5.232 + 0.520 + 6.390 = 12.142 \\approx 12.14$ ms. Scene 4 also has $x_1 = 4$ but only $4$ emitters (and $10.1$ ms); the two extra emitters account for about $2.1$ ms of the difference.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Holding the other predictors fixed',
      blocks: [
        {
          type: 'p',
          text: 'Regress frame time on enemies **alone** and the slope is $1.38$ ms per ten enemies, with $R^2 = 0.91$. In the multiple regression the enemy coefficient drops to $0.13$. Which number is "the cost of enemies"? They answer different questions.',
        },
        {
          type: 'compare',
          left: {
            title: 'Simple slope: 1.38',
            tone: 'neutral',
            text: 'Comparing scenes with ten more enemies, frame time is $1.38$ ms higher on average, partly because those scenes **also** have more particle emitters.',
          },
          right: {
            title: 'Multiple-regression coefficient: 0.13',
            tone: 'neutral',
            text: 'Comparing scenes with ten more enemies **and the same number of particle emitters**, frame time is only $0.13$ ms higher.',
          },
        },
        {
          type: 'p',
          text: 'Interpret $\\hat{\\beta}_j$ as the change in the mean of $y$ for a one-unit increase in $x_j$ **holding every other predictor in the model fixed**. Here the data say the enemies themselves are cheap; the particle effects they bring along cost about $1.06$ ms per emitter. The simple slope mixed the two effects, because enemies and emitters move together (their correlation is $0.95$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the coefficients change: omitted variables',
          text: 'Suppose the truth is $y = \\beta_0 + \\beta_1x_1 + \\beta_2x_2 + \\varepsilon$ and $x_2$ tends to rise with $x_1$, roughly $x_2 \\approx a + c\\,x_1$. Leave $x_2$ out and the simple slope estimates about $\\beta_1 + \\beta_2 c$: the effect of $x_1$ **plus** the effect of everything that travels with it. That is omitted-variable bias, the regression version of the [[stat-confounding-variable|confounding]] behind Simpson\'s paradox. The multiple regression separates the two only for variables you actually include.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Holding fixed" is statistical, not experimental',
          text: 'With observational data, "holding $x_2$ fixed" means comparing units that happen to have similar $x_2$; it is not the same as an experiment where you change $x_1$ alone. Unmeasured confounders still bias the coefficients. For causal claims about a feature, run an A/B test; for an engine benchmark, vary one setting at a time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A model of weekly playtime (hours) gives $\\widehat{\\text{hours}} = 3.1 + 0.9\\,(\\text{friends online}) + 0.2\\,(\\text{account level})$. Which statement correctly interprets $0.9$?',
      options: [
        {
          text: 'Among players with the same account level, each additional friend online is associated with $0.9$ more hours of play per week on average',
          correct: true,
          why: 'A multiple-regression coefficient is a comparison holding the other predictors in the model fixed, and it describes an average, associational difference.',
        },
        {
          text: 'Each additional friend online causes every player to play exactly $0.9$ more hours',
          why: 'Two errors: regression on observational data does not establish cause, and the coefficient describes an average, not every player.',
        },
        {
          text: 'Friends online explain $90\\%$ of the variation in playtime',
          why: 'A coefficient is not a share of variance. That would be an $R^2$-type statement, and it is not what $0.9$ means.',
        },
        {
          text: 'Players with one more friend online play $0.9$ more hours, regardless of whether account level changes too',
          why: 'This drops the crucial "holding account level fixed". If level also changes, the predicted change includes $0.2$ per level as well.',
        },
      ],
      explanation: 'In a model with several predictors, each coefficient is the predicted change in the mean response when that predictor increases by one unit and all other predictors in the model stay the same. Its size depends on which other predictors are included: drop account level and the friends coefficient would absorb some of level\'s effect if the two are correlated.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Adjusted R² and multicollinearity',
      blocks: [
        {
          type: 'p',
          text: '$R^2 = 1 - \\operatorname{SSE}/\\operatorname{SST}$ works for any number of predictors, but it has a flaw: adding a predictor can **never** lower it. Least squares can always set the new coefficient to $0$ and keep the old fit, so SSE can only fall. Add a column of random noise and $R^2$ creeps up anyway.',
        },
        {
          type: 'theorem',
          name: 'Adjusted $R^2$',
          tex: 'R^2_{\\text{adj}} = 1 - \\frac{\\operatorname{SSE}/(n - p - 1)}{\\operatorname{SST}/(n - 1)} = 1 - (1 - R^2)\\,\\frac{n - 1}{n - p - 1}',
          text: '[[stat-adjusted-r-squared|Adjusted $R^2$]] compares variance estimates instead of sums of squares. Each predictor costs a degree of freedom, so a predictor that does not reduce SSE enough makes $R^2_{\\text{adj}}$ go **down**.',
        },
        {
          type: 'p',
          text: 'For the benchmark: enemies alone give $R^2 = 0.906$, $R^2_{\\text{adj}} = 1 - 0.094 \\cdot \\frac54 = 0.882$; both predictors give $R^2 = 0.993$, $R^2_{\\text{adj}} = 1 - 0.007 \\cdot \\frac53 = 0.989$. The emitters earn their place.',
        },
        {
          type: 'heading',
          text: 'Multicollinearity',
        },
        {
          type: 'p',
          text: 'When predictors are strongly correlated with each other, the data cannot tell their effects apart well. This is [[stat-multicollinearity|multicollinearity]]. The columns of $X$ are nearly dependent, $X^TX$ is nearly singular ([[la-ill-conditioned|ill-conditioned]]), and the coefficient estimates become unstable: small changes in the data swing them wildly, and their standard errors balloon.',
        },
        {
          type: 'math',
          tex: '\\operatorname{SE}(\\hat{\\beta}_j) \\propto \\sqrt{\\text{VIF}_j}, \\qquad \\text{VIF}_j = \\frac{1}{1 - R_j^2}',
          caption: '$R_j^2$ is the $R^2$ from regressing $x_j$ on the other predictors. The variance inflation factor (VIF) says how much the correlation inflates $\\operatorname{Var}(\\hat{\\beta}_j)$. A common rule of thumb flags VIF above $5$ or $10$.',
        },
        {
          type: 'p',
          text: 'In the benchmark, enemies and emitters have $r = 0.946$, so $\\text{VIF} = \\frac{1}{1 - 0.946^2} \\approx 9.5$: each SE is inflated about $\\sqrt{9.5} \\approx 3.1$ times. The enemy coefficient $0.13$ has $\\operatorname{SE} = 0.21$, so with $6$ scenes we cannot even tell it from $0$. The fix is better data: benchmark scenes where enemies and particles vary **independently** (many enemies with effects off, few enemies with heavy effects).',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Multicollinearity hurts the **interpretation** of individual coefficients, not necessarily **prediction**: as long as new scenes have the same enemy–particle relationship as the old ones, the predictions stay accurate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A churn model with $p = 4$ predictors, fitted to $n = 25$ players, has $R^2 = 0.80$. Compute the adjusted $R^2$, to $2$ decimal places.',
      hint: '$R^2_{\\text{adj}} = 1 - (1 - R^2)\\frac{n - 1}{n - p - 1}$.',
      label: '$R^2_{\\text{adj}} =$',
      answer: '1 - (1 - 0.8)*24/20',
      answerTex: 'R^2_{\\text{adj}} = 0.76',
      tolerance: 0.005,
      explanation: '$R^2_{\\text{adj}} = 1 - 0.20 \\cdot \\frac{24}{20} = 1 - 0.24 = 0.76$. The penalty factor $\\frac{n - 1}{n - p - 1}$ is $1.2$ here; with $n = 250$ players it would be only $\\frac{249}{245} \\approx 1.016$. The adjustment matters most when there are many predictors relative to the data.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'Adding a predictor to a least-squares regression model can lower its (unadjusted) $R^2$.',
      answer: false,
      explanation: 'The larger model contains the smaller one as the special case where the new coefficient is $0$, so the best fit of the larger model is at least as good: SSE can only stay the same or fall, and $R^2 = 1 - \\operatorname{SSE}/\\operatorname{SST}$ can only stay the same or rise. That is exactly why adjusted $R^2$ exists; **it** can fall when the new predictor does not help enough.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Categorical predictors: dummy variables',
      blocks: [
        {
          type: 'p',
          text: 'Regression needs numbers, but many predictors are categories: platform, region, character class. You cannot code PC $= 1$, Console $= 2$, Mobile $= 3$: that would force Console to sit exactly halfway between the other two. Instead, give each category but one its own $0/1$ column.',
        },
        {
          type: 'definition',
          term: 'Dummy variables',
          text: 'For a categorical predictor with $k$ categories, create $k - 1$ [[stat-dummy-variable|dummy variables]], each equal to $1$ for one category and $0$ otherwise. The left-out category is the **baseline**; each dummy\'s coefficient is that category\'s difference from the baseline, holding the other predictors fixed.',
        },
        {
          type: 'derivation',
          title: 'Session length by platform and level',
          steps: [
            { tex: '\\widehat{\\text{minutes}} = 32 + 0.8\\,\\text{level} - 6\\,D_{\\text{Console}} - 14\\,D_{\\text{Mobile}}', why: 'PC is the baseline (both dummies $0$).' },
            { tex: '\\text{PC: } 32 + 0.8\\,\\text{level}, \\quad \\text{Console: } 26 + 0.8\\,\\text{level}, \\quad \\text{Mobile: } 18 + 0.8\\,\\text{level}', why: 'Set the dummies for each platform. The dummies shift the intercept; the slope in level is shared.' },
            { tex: '\\text{Mobile, level 10: } 32 + 8 - 14 = 26 \\text{ minutes}', why: 'Plug in level $= 10$, $D_{\\text{Console}} = 0$, $D_{\\text{Mobile}} = 1$.' },
          ],
          result: 'Three parallel lines. $-14$ means: at the same level, mobile sessions average $14$ minutes shorter than PC sessions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $k - 1$ and not $k$: the dummy-variable trap',
          text: 'Every player is on exactly one platform, so $D_{\\text{PC}} + D_{\\text{Console}} + D_{\\text{Mobile}} = 1$ for every row: the three dummy columns add up to the intercept column of ones. The columns of $X$ are then [[linear-independence|linearly dependent]], $X^TX$ is not [[invertible-matrix|invertible]], and the coefficients are not unique (you could add $5$ to the intercept and subtract $5$ from all three dummies and get identical predictions). Drop one dummy, or drop the intercept.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'One-hot encoding',
          text: 'Machine-learning code calls this **one-hot encoding**: a category becomes a vector like $(0, 1, 0)$. Neural networks usually keep all $k$ columns, which is harmless there because they have no separate intercept for each feature group and are often regularized.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'An analyst adds region (NA, EU, Asia) to a model of match length. Tap the first line that is wrong.',
      lines: [
        'Region is categorical with $3$ levels, so it needs dummy variables',
        'Create $D_{\\text{NA}}$, $D_{\\text{EU}}$ and $D_{\\text{Asia}}$, and include all three alongside the intercept',
        'Form $X^TX$ and solve the normal equations for $\\hat{\\boldsymbol{\\beta}}$',
        'Interpret $\\hat{\\beta}_{\\text{EU}}$ as the difference between EU and the average region',
      ],
      errorLines: [2],
      explanation: 'Line 2 falls into the dummy-variable trap: the three dummies sum to the intercept column, so $X^TX$ is singular and line 3 cannot produce unique coefficients. Use $k - 1 = 2$ dummies, for example $D_{\\text{EU}}$ and $D_{\\text{Asia}}$ with NA as the baseline. Then $\\hat{\\beta}_{\\text{EU}}$ is the difference between EU and **NA** (the baseline) at the same values of the other predictors, not the difference from an average region, so line 4 would need fixing too.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Overfitting and train/test splits',
      blocks: [
        {
          type: 'p',
          text: 'More predictors (or more flexible terms like $x^2, x^3, \\dots$) always fit the data in hand better. The question that matters is how well the model predicts **new** data. Twelve noisy points from a gentle curve, fitted with polynomials of degree $1$, $2$ and $8$:',
        },
        {
          type: 'graph',
          x: [0, 2],
          y: [-4, 5],
          xStep: 0.25,
          yStep: 1,
          functions: [
            { expr: '2 + 3x - 2.5x^2', label: 'true curve', color: 'gray', dashed: true },
            { expr: '3.9824471 - 2.2286091x', label: 'degree 1 (underfits)', color: 'orange' },
            { expr: '1.7988303 + 4.1198126x - 3.1336267x^2', label: 'degree 2', color: 'green' },
            { expr: deg8Expr, label: 'degree 8 (overfits)', color: 'red', domain: [0.09, 1.95] },
          ],
          points: train.map(([x, y]) => ({ x, y, color: 'blue' as const })),
          caption: 'The straight line misses the bend (underfitting). The degree-8 polynomial threads close to every point, chasing noise with wiggles that the true curve does not have (overfitting). Degree 2 matches the truth.',
        },
        {
          type: 'graph',
          x: [0.5, 8.5],
          y: [0, 1],
          xStep: 1,
          yStep: 0.2,
          height: 240,
          points: [
            ...trainMse.map((v, i) => ({ x: i + 1, y: v, color: 'blue' as const })),
            ...testMse.map((v, i) => ({ x: i + 1, y: v, color: 'red' as const })),
          ],
          segments: [
            ...trainMse.slice(1).map((v, i) => ({ from: [i + 1, trainMse[i]] as [number, number], to: [i + 2, v] as [number, number], color: 'blue' as const })),
            ...testMse.slice(1).map((v, i) => ({ from: [i + 1, testMse[i]] as [number, number], to: [i + 2, v] as [number, number], color: 'red' as const })),
          ],
          caption: 'Mean squared error against polynomial degree. Blue: on the $12$ training points, it only goes down. Red: on new data from the same process, it falls to a minimum at degree $2$ and then rises. Training error is an optimistic, biased estimate of performance.',
        },
        {
          type: 'p',
          text: 'This is [[stat-overfitting|overfitting]]. The honest check is a **train/test split**: randomly set aside part of the data (say $20\\%$) before modelling, fit and compare models only on the training part, and evaluate the final choice once on the untouched test set. [[stat-cross-validation|Cross-validation]] rotates the held-out part to use the data more efficiently.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Leaks that make a test set lie',
          text: 'If you tune the model on the test set, it stops being a test set. Splits must also respect structure: put all of one player\'s sessions on the same side (or the model memorizes players), and for telemetry that drifts over time, train on the past and test on the future.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Put the steps of an honest model-selection workflow in order.',
      lines: [
        'Randomly split the data into a training set and a test set',
        'Fit each candidate model on the training set only',
        'Compare the candidates by cross-validation within the training set',
        'Choose the best candidate and refit it on the whole training set',
        'Report its error on the test set, used exactly once',
      ],
      distractors: ['Pick the candidate with the highest $R^2$ on the full data set'],
      explanation: 'The test set must stay untouched until the very end; otherwise the reported error is optimistic. Comparing models by training-set $R^2$ (the distractor) always favours the most complex model, which is exactly how overfitting slips through.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Logistic regression for yes/no outcomes',
      blocks: [
        {
          type: 'p',
          text: 'Will a player churn (stop playing) next month? Will this team win? The response is $1$ or $0$, and we want $p(x) = P(Y = 1 \\mid x)$. A straight line fitted to $0/1$ data (the dashed line below) predicts "probabilities" below $0$ and above $1$; for the churn data it predicts $1.15$ at $21$ days away.',
        },
        {
          type: 'p',
          text: 'The fix is to model a quantity that can take any real value. The **odds** $\\frac{p}{1 - p}$ range over $(0, \\infty)$, and the [[stat-log-odds|log-odds]] $\\ln\\frac{p}{1-p}$ range over all of $\\mathbb{R}$. [[stat-logistic-regression|Logistic regression]] makes the log-odds linear:',
        },
        {
          type: 'math',
          tex: '\\ln\\frac{p}{1 - p} = \\beta_0 + \\beta_1 x \\quad\\iff\\quad p(x) = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 x)}} = \\sigma(\\beta_0 + \\beta_1 x)',
          caption: 'Solve for $p$: $\\frac{p}{1-p} = e^{z}$ gives $p = \\frac{e^z}{1 + e^z} = \\frac{1}{1 + e^{-z}}$, the [[stat-sigmoid-function|sigmoid]] $\\sigma(z)$.',
        },
        {
          type: 'graph',
          x: [-1, 25],
          y: [-0.15, 1.25],
          xStep: 5,
          yStep: 0.25,
          functions: [
            { expr: '1/(1 + exp(-(a + b*x)))', label: 'logistic model $p(x) = \\sigma(a + bx)$', color: 'blue' },
            { expr: '0.0756 + 0.0513x', label: 'straight-line fit', color: 'gray', dashed: true },
          ],
          points: churnDays.map((d, i) => ({ x: d, y: churned[i], color: (churned[i] ? 'red' : 'green') as 'red' | 'green' })),
          hlines: [{ y: 0 }, { y: 1 }],
          vlines: [{ x: '-a/b', label: 'p = 0.5', color: 'gray' }],
          sliders: [
            { name: 'a', min: -6, max: 2, step: 0.01, value: -2.35, label: 'intercept $a$ ($\\beta_0$)' },
            { name: 'b', min: 0.02, max: 1.5, step: 0.01, value: 0.31, label: 'slope $b$ ($\\beta_1$)' },
          ],
          readouts: [
            { label: '$p(7) =$', expr: '1/(1 + exp(-(a + 7b)))', digits: 3 },
            { label: 'odds ratio per day $e^{b} =$', expr: 'exp(b)', digits: 3 },
            { label: '$p = 0.5$ at $x = -a/b =$', expr: '-a/b', digits: 1 },
          ],
          caption: 'Days since last login (horizontal) and churn next month (red $= 1$, green $= 0$) for $20$ players. The default sliders are the maximum-likelihood fit $a = -2.35$, $b = 0.31$. A larger $b$ makes the S steeper; changing $a$ slides it sideways. The curve never leaves $[0, 1]$.',
        },
        {
          type: 'derivation',
          title: 'Interpreting the fitted churn model',
          steps: [
            { tex: '\\ln\\frac{\\hat{p}}{1 - \\hat{p}} = -2.347 + 0.306\\,x', why: 'The maximum-likelihood fit (computed by the program below).' },
            { tex: '\\frac{\\text{odds}(x + 1)}{\\text{odds}(x)} = \\frac{e^{\\beta_0 + \\beta_1(x+1)}}{e^{\\beta_0 + \\beta_1 x}} = e^{\\beta_1} = e^{0.306} = 1.358', why: 'Odds $= e^{\\text{log-odds}}$, and the $\\beta_0 + \\beta_1x$ parts cancel. So each extra day away multiplies the odds of churning by $1.36$: a $36\\%$ increase in the **odds**, whatever $x$ is.' },
            { tex: '\\hat{p}(7) = \\frac{1}{1 + e^{-(-2.347 + 0.306 \\cdot 7)}} = \\frac{1}{1 + e^{0.205}} \\approx 0.45', why: 'Plug the log-odds $-0.205$ into the sigmoid.' },
          ],
          result: 'The change in **probability** per day is not constant: it is largest near $p = 0.5$ (around $7.7$ days) and tiny near $0$ or $1$. That is why logistic coefficients are reported as odds ratios.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Elo is a logistic regression',
          text: 'The [[stat-elo-rating|Elo]] expected score for a player rated $D$ points above the opponent is $\\frac{1}{1 + 10^{-D/400}} = \\sigma\\!\\left(\\frac{\\ln 10}{400}D\\right)$: a logistic model with $\\beta_0 = 0$ and $\\beta_1 = \\frac{\\ln 10}{400} \\approx 0.00576$ per rating point. Every $100$ points multiplies the odds of winning by $10^{1/4} \\approx 1.78$. Matchmaking systems fit exactly this kind of model to predict win probability.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A churn model has log-odds $= -3 + 0.25x$, where $x$ is days since last login. What is the predicted churn probability for a player who has been away $8$ days? Give $3$ decimal places.',
      hint: 'First the log-odds: $-3 + 0.25 \\cdot 8$. Then $p = 1/(1 + e^{-\\text{log-odds}})$.',
      label: '$\\hat{p} =$',
      answer: '1/(1 + exp(1))',
      answerTex: '\\hat{p} = \\frac{1}{1 + e^{1}} \\approx 0.269',
      tolerance: 0.0006,
      explanation: 'Log-odds $= -3 + 2 = -1$, so the odds are $e^{-1} \\approx 0.368$ and $\\hat{p} = \\frac{1}{1 + e^{1}} = \\frac{0.368}{1.368} \\approx 0.269$. A common slip is to plug $x$ into the line and stop: $-1$ is a **log-odds**, not a probability.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Fitting logistic regression, and the bridge to machine learning',
      blocks: [
        {
          type: 'p',
          text: 'There is no closed-form least-squares solution here. Instead we choose the coefficients that make the observed outcomes most probable: [[stat-maximum-likelihood|maximum likelihood]]. Each player contributes $p_i$ if they churned and $1 - p_i$ if not.',
        },
        {
          type: 'derivation',
          title: 'The gradient of the log-likelihood',
          steps: [
            { tex: '\\ell(\\boldsymbol{\\beta}) = \\sum_i \\big[y_i \\ln p_i + (1 - y_i)\\ln(1 - p_i)\\big], \\quad p_i = \\sigma(z_i), \\; z_i = \\beta_0 + \\beta_1 x_i', why: 'The log of $\\prod p_i^{y_i}(1 - p_i)^{1 - y_i}$. Its negative is the [[stat-cross-entropy|cross-entropy]] loss of machine learning.' },
            { tex: '\\sigma\'(z) = \\frac{e^{-z}}{(1 + e^{-z})^2} = \\sigma(z)\\,(1 - \\sigma(z))', why: 'Differentiate $(1 + e^{-z})^{-1}$ with the chain rule, then split $\\frac{e^{-z}}{1 + e^{-z}} = 1 - \\sigma(z)$.' },
            { tex: '\\frac{\\partial \\ell}{\\partial z_i} = y_i\\frac{\\sigma\'}{\\sigma} - (1 - y_i)\\frac{\\sigma\'}{1 - \\sigma} = y_i(1 - p_i) - (1 - y_i)p_i = y_i - p_i', why: 'The sigmoid derivative cancels beautifully.' },
            { tex: '\\frac{\\partial \\ell}{\\partial \\beta_0} = \\sum (y_i - p_i), \\qquad \\frac{\\partial \\ell}{\\partial \\beta_1} = \\sum (y_i - p_i)\\,x_i', why: 'Chain rule with $\\partial z_i/\\partial\\beta_0 = 1$ and $\\partial z_i/\\partial\\beta_1 = x_i$. In matrix form: $\\nabla \\ell = X^T(\\mathbf{y} - \\mathbf{p})$.' },
          ],
          result: 'Setting the gradient to $0$ gives equations like the normal equations, $X^T(\\mathbf{y} - \\mathbf{p}) = \\mathbf{0}$ (the residuals are orthogonal to the columns again), but they are nonlinear in $\\boldsymbol{\\beta}$, so we solve them iteratively.',
        },
        {
          type: 'code',
          title: 'logistic_churn.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

double sigmoid(double z) { return 1.0 / (1.0 + std::exp(-z)); }

int main() {
    // Days since a player's last login, and whether they churned (1) in the following month.
    const std::vector<double> days    = {0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 12, 14, 15, 18, 21};
    const std::vector<int>    churned = {0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1,  0,  1,  1,  1,  1};

    // Maximize the log-likelihood with Newton's method: beta <- beta + (X^T W X)^{-1} * gradient.
    double b0 = 0, b1 = 0;
    for (int iter = 0; iter < 25; ++iter) {
        double g0 = 0, g1 = 0, h00 = 0, h01 = 0, h11 = 0;
        for (std::size_t i = 0; i < days.size(); ++i) {
            double p = sigmoid(b0 + b1 * days[i]);
            double w = p * (1 - p);                  // derivative of the sigmoid
            g0 += churned[i] - p;                    // gradient of the log-likelihood
            g1 += (churned[i] - p) * days[i];
            h00 += w;                                // minus the Hessian: X^T W X
            h01 += w * days[i];
            h11 += w * days[i] * days[i];
        }
        double det = h00 * h11 - h01 * h01;          // solve the 2x2 system by Cramer's rule
        b0 += (h11 * g0 - h01 * g1) / det;
        b1 += (h00 * g1 - h01 * g0) / det;
    }
    std::printf("log-odds of churn = %.3f + %.3f * days\\n", b0, b1);
    std::printf("odds ratio per extra day: %.3f\\n", std::exp(b1));
    for (double d : {0.0, 7.0, 14.0, 21.0})
        std::printf("P(churn | %2.0f days away) = %.3f\\n", d, sigmoid(b0 + b1 * d));
}`,
          output: `log-odds of churn = -2.347 + 0.306 * days
odds ratio per extra day: 1.358
P(churn |  0 days away) = 0.087
P(churn |  7 days away) = 0.450
P(churn | 14 days away) = 0.875
P(churn | 21 days away) = 0.983`,
          annotations: [
            { lines: '16-24', text: 'One pass over the data accumulates the gradient $X^T(\\mathbf{y} - \\mathbf{p})$ and the matrix $X^TWX$ with weights $w_i = p_i(1 - p_i)$, which is minus the Hessian of $\\ell$.' },
            { lines: '25-27', text: 'A [[newtons-method|Newton]] step in two dimensions. Newton\'s method converges in a handful of iterations here; $25$ is generous. (Gradient descent, $\\boldsymbol{\\beta} \\leftarrow \\boldsymbol{\\beta} + \\eta\\nabla\\ell$, also works but needs many more steps.)' },
          ],
        },
        {
          type: 'heading',
          text: 'From regression to machine learning',
        },
        {
          type: 'list',
          items: [
            '**Linear regression** is a linear model trained by minimizing mean squared error. **Logistic regression** is a single artificial neuron: a weighted sum followed by a sigmoid, trained by minimizing cross-entropy. A neural network stacks many of them.',
            '**Classification**: predict "will churn" when $\\hat{p} > 0.5$ (or another threshold chosen from the costs of each mistake), and evaluate with a [[stat-confusion-matrix|confusion matrix]] on test data.',
            '**Regularization** fights overfitting and multicollinearity by penalizing large coefficients. Ridge regression minimizes $\\|\\mathbf{y} - X\\boldsymbol{\\beta}\\|^2 + \\lambda\\|\\boldsymbol{\\beta}\\|^2$, whose solution $(X^TX + \\lambda I)^{-1}X^T\\mathbf{y}$ is always invertible for $\\lambda > 0$.',
            'What statistics adds to ML: standard errors, intervals and diagnostics tell you **how much to trust** a coefficient, not just how well the model predicts.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect three logistic-regression skills: convert log-odds to a probability with the sigmoid, interpret $e^{\\beta_j}$ as an odds ratio ("multiplies the odds by"), and explain why a straight line is a poor model for a $0/1$ outcome.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Under the Elo model, the probability that a player beats an opponent rated $D$ points lower is $\\frac{1}{1 + 10^{-D/400}}$. What is the win probability for a $200$-point rating advantage? Give $3$ decimal places.',
      hint: '$10^{-200/400} = 10^{-0.5} \\approx 0.316$.',
      label: '$P(\\text{win}) =$',
      answer: '1/(1 + 10^(-0.5))',
      answerTex: '\\frac{1}{1 + 10^{-1/2}} \\approx 0.760',
      tolerance: 0.0006,
      explanation: '$10^{-0.5} = 0.3162$, so $P = \\frac{1}{1.3162} \\approx 0.760$. In logistic-regression terms the log-odds are $\\frac{\\ln 10}{400} \\cdot 200 = 1.151$, and the odds are $e^{1.151} = 10^{0.5} \\approx 3.16$: a $200$-point favourite wins about $3$ games for every $1$ lost.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the interpretation of a logistic regression coefficient.',
      template: 'In $\\ln\\frac{p}{1-p} = \\beta_0 + \\beta_1 x$ with $\\beta_1 = 0.4$, increasing $x$ by one unit adds ___ to the log-odds and multiplies the odds by ___.',
      blanks: [{ answers: ['$0.4$'] }, { answers: ['$e^{0.4}$'] }],
      wordBank: ['$0.4$', '$e^{0.4}$', '$1.4$', '$\\sigma(0.4)$', '$40\\%$ of $p$'],
      explanation: 'The log-odds are linear in $x$, so a one-unit increase adds $\\beta_1 = 0.4$. Exponentiating, the odds are multiplied by $e^{0.4} \\approx 1.49$, a $49\\%$ increase in the odds. The change in the probability $p$ itself depends on where you start, so "$40\\%$ of $p$" and $\\sigma(0.4)$ are not the interpretation.',
    },
  ],
  takeaways: [
    'Multiple regression $\\mathbf{y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}$ is fitted by the normal equations $X^TX\\hat{\\boldsymbol{\\beta}} = X^T\\mathbf{y}$, the projection of $\\mathbf{y}$ onto the column space of $X$.',
    'Each coefficient is the effect of its predictor **holding the others fixed**; it can differ sharply from a simple slope when predictors are correlated (omitted-variable bias).',
    '$R^2$ never falls when predictors are added, so use adjusted $R^2$; multicollinearity (high VIF) inflates standard errors and destabilizes coefficients. Encode a $k$-level category with $k - 1$ dummies.',
    'Training error always improves with complexity; judge models on held-out data (train/test split, cross-validation) to catch overfitting.',
    'Logistic regression models the log-odds as linear, $p = \\sigma(\\beta_0 + \\beta_1x)$; $e^{\\beta_1}$ is the odds ratio. It is fitted by maximum likelihood, it is a single neuron, and Elo is an example.',
  ],
  reading: [
    {
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Chapter 12 reviews the regression foundations this lesson extends to several predictors.',
    },
    {
      title: 'Wikipedia: Logistic regression',
      url: 'https://en.wikipedia.org/wiki/Logistic_regression',
      source: 'wikipedia',
      note: 'The model, odds ratios, maximum-likelihood fitting and the connection to neural networks, with worked examples.',
    },
    {
      title: 'Wikipedia: Multicollinearity',
      url: 'https://en.wikipedia.org/wiki/Multicollinearity',
      source: 'wikipedia',
      note: 'Variance inflation factors, consequences for coefficient estimates, and remedies including ridge regression.',
    },
    {
      title: 'MIT OCW 18.05 Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The linear regression reading covers fitting with several predictors and the overfitting trade-off.',
    },
  ],
};
