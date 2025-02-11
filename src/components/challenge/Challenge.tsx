import { ChallengeDescription } from './ChallengeDescription';
import { ChallengeInput } from './ChallengeInput';
import { ChallengeHint } from './ChallengeHint';
import { NextLevelButton } from './NextLevelButton';
import { TestCases } from '../test-cases';
import { Challenge as ChallengeType } from '../../types';

interface ChallengeProps {
  challenge: ChallengeType;
  userInput: string;
  showHint: boolean;
  testResults: Array<{ input: string; passed: boolean }>;
  successMessage: string;
  onInputChange: (value: string) => void;
  onCheck: () => void;
  onToggleHint: () => void;
  onNextLevel: () => void;
  isComplete: boolean;
  isLastLevel: boolean;
}

export const Challenge = ({
  challenge,
  userInput,
  showHint,
  testResults,
  successMessage,
  onInputChange,
  onCheck,
  onToggleHint,
  onNextLevel,
  isComplete,
  isLastLevel,
}: ChallengeProps) => (
  <div className="space-y-2">
    <ChallengeDescription
      title={challenge.title}
      description={challenge.description}
      explanation={challenge.explanation}
    />

    <div className="space-y-4">
      <ChallengeInput
        value={userInput}
        onChange={onInputChange}
        onCheck={onCheck}
      />

      <ChallengeHint
        hint={challenge.hint}
        showHint={showHint}
        onToggleHint={onToggleHint}
      />

      {successMessage && (
        <div className="regex-game__success">
          <p>{successMessage}</p>
        </div>
      )}

      <TestCases
        testResults={testResults}
        testCases={challenge.testCases}
      />

      <NextLevelButton
        isComplete={isComplete}
        isLastLevel={isLastLevel}
        onNextLevel={onNextLevel}
      />
    </div>
  </div>
); 