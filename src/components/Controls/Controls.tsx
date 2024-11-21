import { useContext, useEffect, useState } from "react";
import { Button, Wrapper } from "./Controls.styled";
import { AppDataContext } from "../../contexts/AppData.context";

const Controls: React.FC = () => {
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const { currentCharacterId, setCurrentCharacterId } =
    useContext(AppDataContext);

  useEffect(() => {
    if (currentCharacterId === 1) {
      setIsPreviousDisabled(true);

      return;
    }

    setIsPreviousDisabled(false);
  }, [currentCharacterId]);

  const fetchNextCharacter = (): void => {
    setCurrentCharacterId(currentCharacterId + 1);
  };

  const fetchPreviousCharacter = (): void => {
    setCurrentCharacterId(currentCharacterId - 1);
  };

  return (
    <Wrapper>
      <Button disabled={isPreviousDisabled} onClick={fetchPreviousCharacter}>
        Previous
      </Button>
      <Button onClick={fetchNextCharacter}>Next</Button>
    </Wrapper>
  );
};

export default Controls;
