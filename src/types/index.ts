export interface Challenge {
  id: number;
  title: string;
  description: string;
  explanation: string;
  testCases: {
    input: string;
    shouldMatch: boolean;
  }[];
  hint: string;
  solution: string;
  lessonPoint: string;
}
