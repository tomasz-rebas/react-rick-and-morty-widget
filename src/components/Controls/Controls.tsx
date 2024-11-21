import { useContext, useEffect, useState } from "react";
import { Button, Wrapper } from "./Controls.styled";
import { AppDataContext } from "../../contexts/AppData.context";

/**
 * Since the response doesn't provide the maximum number of characters, I decided to hardcode it
 * based on the information from the docs.
 *
 * It's possible to get this number by fetching all the characters at once and accessing
 * the 'info' object, but in this task we're going for per-character fetching (as specified).
 */
const MAXIMUM_CHARACTER_COUNT = 826;

const Controls: React.FC = () => {
  const [isFirstCharacter, setIsFirstCharacter] = useState(true);
  const [isLastCharacter, setIsLastCharacter] = useState(false);
  const { isLoading, currentCharacterId, setCurrentCharacterId } =
    useContext(AppDataContext);

  useEffect(() => {
    if (currentCharacterId === 1) {
      setIsFirstCharacter(true);
    } else if (currentCharacterId === MAXIMUM_CHARACTER_COUNT) {
      setIsLastCharacter(true);
    } else {
      if (isFirstCharacter) {
        setIsFirstCharacter(false);
      }

      if (isLastCharacter) {
        setIsLastCharacter(false);
      }
    }
  }, [currentCharacterId]);

  const fetchNextCharacter = (): void => {
    setCurrentCharacterId((previousId) => previousId + 1);
  };

  const fetchPreviousCharacter = (): void => {
    setCurrentCharacterId((previousId) => previousId - 1);
  };

  return (
    <Wrapper>
      <Button
        disabled={isFirstCharacter || isLoading}
        onClick={fetchPreviousCharacter}
      >
        Previous
      </Button>
      <Button
        disabled={isLastCharacter || isLoading}
        onClick={fetchNextCharacter}
      >
        Next
      </Button>
    </Wrapper>
  );
};

export default Controls;
