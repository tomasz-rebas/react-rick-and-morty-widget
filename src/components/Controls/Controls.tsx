import { useContext, useEffect, useState } from "react";
import { Button, Wrapper } from "./Controls.styled";
import { AppDataContext } from "../../contexts/AppData.context";

/**
 * Since the response doesn't provide the maximum number of characters, I decided to hardcode it
 * based on the information from docs.
 *
 * It would be possible to get this number by fetching all the characters at once and accessing
 * the 'info' object, but in this task we're going for per-character fetching (as specified).
 */
const MAXIMUM_CHARACTER_COUNT = 826;

const Controls: React.FC = () => {
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const { isLoading, currentCharacterId, setCurrentCharacterId } =
    useContext(AppDataContext);

  useEffect(() => {
    if (currentCharacterId === 1) {
      setIsPreviousDisabled(true);
    } else if (currentCharacterId === MAXIMUM_CHARACTER_COUNT) {
      setIsNextDisabled(true);
    } else {
      setIsPreviousDisabled(false);
      setIsNextDisabled(false);
    }
  }, [currentCharacterId]);

  const fetchNextCharacter = (): void => {
    setCurrentCharacterId(currentCharacterId + 1);
  };

  const fetchPreviousCharacter = (): void => {
    setCurrentCharacterId(currentCharacterId - 1);
  };

  return (
    <Wrapper>
      <Button
        disabled={isPreviousDisabled || isLoading}
        onClick={fetchPreviousCharacter}
      >
        Previous
      </Button>
      <Button
        disabled={isNextDisabled || isLoading}
        onClick={fetchNextCharacter}
      >
        Next
      </Button>
    </Wrapper>
  );
};

export default Controls;
