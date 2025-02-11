import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { Button } from './ui/button';

interface ControlBarProps {
  onShowHelp: () => void;
  onShowTutorial: () => void;
}

export const ControlBar = ({ onShowHelp, onShowTutorial }: ControlBarProps) => (
  <div className="regex-game__controls">
    <Button
      variant="outlined"
      size="small"
      onClick={onShowHelp}
      className="flex items-center gap-2"
    >
      <HelpOutlineIcon sx={{ fontSize: 20 }} />
      ヘルプを見る
    </Button>
    <Button
      variant="outlined"
      size="small"
      onClick={onShowTutorial}
      className="flex items-center gap-2"
    >
      <BookOutlinedIcon sx={{ fontSize: 20 }} />
      チュートリアルを見る
    </Button>
  </div>
); 