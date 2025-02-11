import { Input } from '../ui/input';
import { Button } from '../ui/button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface ChallengeInputProps {
  value: string;
  onChange: (value: string) => void;
  onCheck: () => void;
}

export const ChallengeInput = ({
  value,
  onChange,
  onCheck
}: ChallengeInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // カーソル位置を保持したまま値を更新
    const target = e.target;
    const newValue = e.target.value;
    onChange(newValue);

    // 次のレンダリングサイクルでカーソル位置を復元
    requestAnimationFrame(() => {
      target.selectionStart = target.selectionEnd = newValue.length;
    });
  };

  return (
    <div className="regex-game__input-section">
      <Input
        value={value}
        onChange={handleChange}
        placeholder="ここに正規表現を入力してね！"
        className="font-mono text-lg"
      />
      <Button onClick={onCheck} size="large">
        チャレンジ！ <ChevronRightIcon sx={{ ml: 1 }} />
      </Button>
    </div>
  );
}; 