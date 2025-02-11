import { useState } from 'react';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tutorial } from './tutorial';
import { Help } from './help';
import { Challenge } from './challenge/Challenge';
import { ControlBar } from './control-bar';
import { useChallenge } from '../hooks/useChallenge';
import { challenges } from '../data/challenges';

import '../styles/main.scss';

const RegexGame = () => {
  const [showTutorial, setShowTutorial] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const tutorial = {
    title: "正規表現とは？",
    sections: [
      {
        title: "正規表現って何？",
        content: "正規表現（せいきひょうげん）は、文字列のパターンを表現する方法です。例えば、「電話番号っぽい文字列」や「メールアドレスっぽい文字列」を見つけることができます。"
      },
      {
        title: "どんなときに使うの？",
        content: "例えば、以下のようなときに使います：\n・入力フォームのチェック\n・文章から特定のパターンを見つける\n・プログラミングでの文字列の処理"
      },
      {
        title: "このゲームの進め方",
        content: "1. まずは簡単な文字マッチから始めます\n2. 少しずつ新しい記号や機能を学んでいきます\n3. 実際に使えるパターンを作れるようになります"
      }
    ]
  };

  const helpContent = {
    basics: [
      { symbol: "a, b, c...", description: "普通の文字：その文字そのものにマッチします" },
      { symbol: ".", description: "任意の1文字にマッチします" },
      { symbol: "[abc]", description: "カッコ内のいずれか1文字にマッチします（例：[abc]はaかbかc）" },
      { symbol: "[0-9]", description: "0から9までの任意の1文字にマッチします" },
      { symbol: "\\d", description: "任意の数字（0-9）にマッチします（[0-9]と同じ）" },
      { symbol: "|", description: "「または」を表します（例：a|b は a または b）" }
    ],
    quantifiers: [
      { symbol: "*", description: "直前の文字が0回以上繰り返し（例：a* は空文字、a、aa、aaa...）" },
      { symbol: "+", description: "直前の文字が1回以上繰り返し（例：a+ は a、aa、aaa...）" },
      { symbol: "?", description: "直前の文字が0回または1回（例：a? は空文字またはa）" },
      { symbol: "{n}", description: "直前の文字がちょうどn回繰り返し（例：a{3} は aaa）" },
      { symbol: "{n,m}", description: "直前の文字がn回以上m回以下繰り返し" }
    ],
    anchors: [
      { symbol: "^", description: "行の先頭にマッチ（例：^a は行頭のaにマッチ）" },
      { symbol: "$", description: "行の末尾にマッチ（例：a$ は行末のaにマッチ）" }
    ],
    special: [
      { symbol: "\\", description: "特殊文字をエスケープ（例：\\. は「.」という文字そのもの）" },
      { symbol: "()", description: "グループ化（例：(ab)+ は ab が1回以上繰り返し）" }
    ],
    examples: [
      { pattern: "cat", description: "「cat」という文字列にマッチ" },
      { pattern: "a|b", description: "「a」または「b」にマッチ" },
      { pattern: "\\d+", description: "1つ以上の数字にマッチ" },
      { pattern: "[A-Za-z]", description: "任意の英字1文字にマッチ" },
      { pattern: "\\d{3}-\\d{4}", description: "「123-4567」のような3桁-4桁の数字にマッチ" },
      { pattern: "^[A-Z].*$", description: "大文字で始まる任意の文字列にマッチ" }
    ]
  };

  const {
    currentLevel,
    userInput,
    showHint,
    testResults,
    successMessage,
    currentChallenge,
    handleNextLevel,
    handleInputChange,
    checkRegex,
    isLevelComplete,
    setShowHint,
  } = useChallenge(challenges);

  const handleCheck = () => {
    if (isLevelComplete()) {
      return;
    }

    checkRegex();
  };

  const handleLevelComplete = () => {
    handleNextLevel();
  };

  const handleGameStart = () => {
    setShowTutorial(false);
    setGameStarted(true);
  };

  const MainGame = () => (
    <div className="space-y-4">
      <ControlBar
        onShowHelp={() => setShowHelp(true)}
        onShowTutorial={() => setShowTutorial(true)}
      />

      <Challenge
        challenge={currentChallenge}
        userInput={userInput}
        showHint={showHint}
        testResults={testResults}
        successMessage={successMessage}
        onInputChange={handleInputChange}
        onCheck={handleCheck}
        onToggleHint={() => setShowHint(!showHint)}
        onNextLevel={handleLevelComplete}
        isComplete={isLevelComplete()}
        isLastLevel={currentLevel >= challenges.length - 1}
      />
    </div>
  );

  return (
    <Card className="regex-game">
      <CardHeader className="regex-game__header">
        <CardTitle className="regex-game__header-title">
          <span>正規表現を学ぼう！</span>
          {gameStarted && (
            <Badge variant="secondary" className="level-badge">
              <StarBorderIcon />
              <span>{currentLevel + 1} / {challenges.length}</span>
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="regex-game__content">
        {showTutorial && <Tutorial tutorial={tutorial} onStart={handleGameStart} />}
        {showHelp && <Help helpContent={helpContent} onClose={() => setShowHelp(false)} />}
        {!showTutorial && !showHelp && <MainGame />}
      </CardContent>
    </Card>
  );
};

export default RegexGame;