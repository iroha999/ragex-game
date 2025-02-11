import { Button } from '../ui/button';

interface NextLevelButtonProps {
  isComplete: boolean;
  isLastLevel: boolean;
  onNextLevel: () => void;
}

export const NextLevelButton = ({
  isComplete,
  isLastLevel,
  onNextLevel
}: NextLevelButtonProps) => {
  if (!isComplete || isLastLevel) return null;

  return (
    <Button
      className="regex-game__next-level"
      onClick={onNextLevel}
    >
      次のレベルへ進む！
    </Button>
  );
}; 