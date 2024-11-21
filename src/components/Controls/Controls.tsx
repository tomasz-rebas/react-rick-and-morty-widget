import { useContext } from "react";
import { Button, Wrapper } from "./Controls.styled";
import { AppDataContext } from "../../contexts/AppData.context";

const Controls: React.FC = () => {
  const { fetchNextCharacter, fetchPreviousCharacter } =
    useContext(AppDataContext);

  return (
    <Wrapper>
      <Button onClick={fetchPreviousCharacter}>Previous</Button>
      <Button onClick={fetchNextCharacter}>Next</Button>
    </Wrapper>
  );
};

export default Controls;
