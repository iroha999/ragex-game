import { useState, useCallback, useRef } from "react";
import { Challenge } from "../types";

export function useChallenge(challenges: Challenge[], onSuccess?: () => void) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [testResults, setTestResults] = useState<
    Array<{ input: string; passed: boolean }>
  >([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // 前回のテスト結果を保持するref
  const lastResultsRef = useRef<string>("");

  const currentChallenge = challenges[currentLevel];

  const handleNextLevel = useCallback(() => {
    setSuccessMessage("");
    setCurrentLevel(currentLevel + 1);
    setUserInput("");
    setTestResults([]);
    setShowHint(false);
    setIsSuccess(false);
    lastResultsRef.current = "";
  }, [currentLevel]);

  const handleInputChange = useCallback((value: string) => {
    setUserInput(value);
    setTestResults([]);
    setSuccessMessage("");
    setIsSuccess(false);
    lastResultsRef.current = "";
  }, []);

  const checkRegex = useCallback(() => {
    if (isSuccess) return true; // 既に成功している場合は再チェックしない

    try {
      const regex = new RegExp(userInput);
      const results = currentChallenge.testCases.map((testCase) => ({
        input: testCase.input,
        passed: regex.test(testCase.input) === testCase.shouldMatch,
      }));

      const resultsString = JSON.stringify(results);
      const success = results.every((result) => result.passed);

      if (resultsString !== lastResultsRef.current) {
        lastResultsRef.current = resultsString;
        setTestResults(results);

        if (success) {
          setSuccessMessage("すごい！正解です！ 🎉");
          setIsSuccess(true);
          onSuccess?.();
        }
      }

      return success;
    } catch {
      if (lastResultsRef.current !== "") {
        setTestResults([]);
        lastResultsRef.current = "";
      }
      return false;
    }
  }, [userInput, currentChallenge, isSuccess, onSuccess]);

  const isLevelComplete = useCallback(() => {
    return (
      testResults.length > 0 && testResults.every((result) => result.passed)
    );
  }, [testResults]);

  return {
    currentLevel,
    userInput,
    showHint,
    testResults,
    successMessage,
    currentChallenge,
    handleNextLevel,
    handleInputChange,
    checkRegex,
    isLevelComplete,
    setShowHint,
  };
}
