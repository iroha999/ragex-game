interface ChallengeDescriptionProps {
  title: string;
  description: string;
  explanation: string;
}

export const ChallengeDescription = ({
  title,
  description,
  explanation
}: ChallengeDescriptionProps) => (
  <div className="space-y-2">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
    <div className="explanation">
      <p>{explanation}</p>
    </div>
  </div>
); 