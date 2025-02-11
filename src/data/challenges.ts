export const challenges = [
  {
    id: 0,
    title: "はじめの一歩：文字を見つけよう",
    description: '文字 "a" を見つけてみよう！',
    explanation:
      '正規表現の基本は文字そのものです。"a" を見つけたいときは、そのまま "a" と書きます。',
    testCases: [
      { input: "a", shouldMatch: true },
      { input: "b", shouldMatch: false },
      { input: "abc", shouldMatch: true },
    ],
    hint: 'そのまま "a" と入力してみよう！',
    solution: "a",
    lessonPoint: "文字をそのまま書くと、その文字を見つけることができます。",
  },
  {
    id: 1,
    title: "文字クラス：数字を見つけよう",
    description: "任意の数字（0-9）を見つけてみよう！",
    explanation:
      "文字クラス [] を使うと、その中の任意の1文字にマッチします。数字の場合は [0-9] と書きます。複数の数字が並んでいても、そのうちの1文字にマッチすれば成功です。",
    testCases: [
      { input: "1", shouldMatch: true },
      { input: "9", shouldMatch: true },
      { input: "a", shouldMatch: false },
      { input: "123", shouldMatch: true },
    ],
    hint: "[0-9] を使ってみよう！",
    solution: "[0-9]",
    lessonPoint:
      "文字クラス [] を使うと、指定した範囲の任意の1文字にマッチします。",
  },
  {
    id: 2,
    title: "文字クラスの省略形：\\d",
    description: "数字を見つけるための省略形 \\d を使ってみよう！",
    explanation:
      "[0-9] の代わりに \\d と書くことができます。これは「任意の数字1文字」を表す省略形です。",
    testCases: [
      { input: "5", shouldMatch: true },
      { input: "a", shouldMatch: false },
      { input: "42", shouldMatch: true },
    ],
    hint: "\\d を使ってみよう！",
    solution: "\\d",
    lessonPoint:
      "\\d は [0-9] の省略形です。よく使う文字クラスには省略形があります。",
  },
  {
    id: 3,
    title: "文字クラス：複数の文字から選ぶ",
    description: "母音（a, i, u, e, o）のいずれかを見つけよう！",
    explanation:
      "文字クラスの中に複数の文字を直接書くこともできます。[aiueo] と書くと、これらの文字のいずれか1文字にマッチします。",
    testCases: [
      { input: "a", shouldMatch: true },
      { input: "i", shouldMatch: true },
      { input: "k", shouldMatch: false },
      { input: "hello", shouldMatch: true },
    ],
    hint: "[aiueo] と書いてみよう！",
    solution: "[aiueo]",
    lessonPoint:
      "文字クラスの中に、マッチさせたい文字を直接並べて書くことができます。",
  },
  {
    id: 4,
    title: "量指定子：1回以上の繰り返し",
    description: "1つ以上の数字を見つけよう！",
    explanation:
      "量指定子 + を使うと、直前のパターンが1回以上繰り返すものにマッチします。\\d+ は「1文字以上の数字」を表します。",
    testCases: [
      { input: "1", shouldMatch: true },
      { input: "42", shouldMatch: true },
      { input: "abc", shouldMatch: false },
      { input: "123", shouldMatch: true },
    ],
    hint: "\\d+ を使ってみよう！",
    solution: "\\d+",
    lessonPoint: "+ を使うと、1回以上の繰り返しを表現できます。",
  },
  {
    id: 5,
    title: "量指定子：0回または1回",
    description: "ハイフンがあってもなくても良い電話番号を見つけよう！",
    explanation:
      "? は直前のパターンが0回または1回出現することを表します。\\d\\d-?\\d\\d は「数字2つ、ハイフン（あってもなくてもOK）、数字2つ」を表します。",
    testCases: [
      { input: "1234", shouldMatch: true },
      { input: "12-34", shouldMatch: true },
      { input: "12--34", shouldMatch: false },
      { input: "abc", shouldMatch: false },
    ],
    hint: "\\d\\d-?\\d\\d を使ってみよう！",
    solution: "\\d\\d-?\\d\\d",
    lessonPoint: "? を使うと、あってもなくても良いパターンを表現できます。",
  },
];
