import { Button } from './ui/button';

interface TutorialProps {
  tutorial: {
    title: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  onStart: () => void;
}

export const Tutorial = ({ tutorial, onStart }: TutorialProps) => (
  <div className="tutorial-content">
    <h2 className="tutorial-title">{tutorial.title}</h2>
    {tutorial.sections.map((section, index) => (
      <div key={index} className="tutorial-section">
        <h3 className="tutorial-section-title">{section.title}</h3>
        <p className="tutorial-section-content">{section.content}</p>
      </div>
    ))}
    <Button
      className="tutorial-start-button"
      onClick={onStart}
    >
      ゲームを始める！
    </Button>
  </div>
); 