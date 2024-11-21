import { useContext } from "react";
import { Button, Wrapper } from "./Controls.styled";
import { AppDataContext } from "../../contexts/AppData.context";

const Controls: React.FC = () => {
  const { character, setCurrentCharacterId } = useContext(AppDataContext);

  const handlePrevious = () => {
    if (character) {
      setCurrentCharacterId(character.id - 1);
    }
  };

  const handleNext = () => {
    if (character) {
      setCurrentCharacterId(character.id + 1);
    }
  };

  return (
    <Wrapper>
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </Wrapper>
  );
};

export default Controls;
