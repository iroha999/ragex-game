import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface TestCase {
  input: string;
  shouldMatch: boolean;
}

interface TestResult {
  input: string;
  passed: boolean;
}

interface TestCasesProps {
  testResults: TestResult[];
  testCases: TestCase[];
}

export const TestCases = ({ testResults, testCases }: TestCasesProps) => (
  <div className="regex-game__test-cases">
    <h4 className="font-semibold">テスト結果:</h4>
    {testResults.map((result, index) => (
      <div
        key={index}
        className={`test-case ${result.passed ? 'test-case--success' : 'test-case--error'}`}
      >
        <span className="test-case__input">"{testCases[index].input}"</span>
        {result.passed ? (
          <div className="test-case__result" style={{ color: '#4caf50' }}>
            <CheckCircleOutlineIcon className="h-6 w-6 mr-2" />
            マッチ！
          </div>
        ) : (
          <div className="test-case__result" style={{ color: '#f44336' }}>
            <ErrorOutlineIcon className="h-6 w-6 mr-2" />
            まだだよ
          </div>
        )}
      </div>
    ))}
  </div>
); 