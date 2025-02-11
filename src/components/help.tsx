import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button } from './ui/button';

interface HelpProps {
  helpContent: {
    basics: { symbol: string; description: string; }[];
    quantifiers: { symbol: string; description: string; }[];
    examples: { pattern: string; description: string; }[];
  };
  onClose: () => void;
}

export const Help = ({ helpContent, onClose }: HelpProps) => (
  <div className="help-content">
    <h2 className="help-title">
      <HelpOutlineIcon />
      ヘルプ
    </h2>

    <div className="help-sections">
      <section>
        <h3>基本的な記号</h3>
        <div className="help-grid">
          {helpContent.basics.map((item, index) => (
            <div key={index} className="help-item">
              <code>{item.symbol}</code>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>繰り返しの記号</h3>
        <div className="help-grid">
          {helpContent.quantifiers.map((item, index) => (
            <div key={index} className="help-item">
              <code>{item.symbol}</code>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>例</h3>
        <div className="help-grid">
          {helpContent.examples.map((item, index) => (
            <div key={index} className="help-item">
              <code>{item.pattern}</code>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

    <Button
      className="help-close-button"
      onClick={onClose}
    >
      ヘルプを閉じる
    </Button>
  </div>
); 