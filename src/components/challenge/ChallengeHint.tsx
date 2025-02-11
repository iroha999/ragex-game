import { Button } from '../ui/button';

interface ChallengeHintProps {
  hint: string;
  showHint: boolean;
  onToggleHint: () => void;
}

export const ChallengeHint = ({
  hint,
  showHint,
  onToggleHint
}: ChallengeHintProps) => (
  <>
    <Button
      variant="outlined"
      onClick={onToggleHint}
      className="hint-button"
    >
      ヒントを{showHint ? '隠す' : '見る'}
    </Button>

    {showHint && (
      <div className="regex-game__hint">
        <p className="text-yellow-800">{hint}</p>
      </div>
    )}
  </>
); 