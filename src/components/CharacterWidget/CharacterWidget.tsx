import React, { useContext } from "react";
import { AppDataContext } from "../../contexts/AppData.context";
import {
  CharacterWidgetContainer,
  CharacterStatusLabel,
  CharacterAvatar,
  Heading,
  Content,
  CharacterName,
} from "./CharacterWidget.styled";

const CharacterWidget: React.FC = () => {
  const { character } = useContext(AppDataContext);

  if (!character) return null;
  return (
    <CharacterWidgetContainer>
      <Heading>
        <CharacterName>{character.name}</CharacterName>
      </Heading>
      <Content>
        <p>
          Status:{" "}
          <CharacterStatusLabel isAlive={character.status === "Alive"}>
            {character.status}
          </CharacterStatusLabel>
        </p>
        <CharacterAvatar src={character.imageUrl} alt="Character avatar" />
      </Content>
    </CharacterWidgetContainer>
  );
};

export default CharacterWidget;
