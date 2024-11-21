import React, { useContext } from "react";
import { AppDataContext } from "../../contexts/AppData.context";
import {
  CharacterWidgetContainer,
  CharacterStatusLabel,
  CharacterAvatar,
  Heading,
  Content,
  CharacterName,
  DataGrid,
} from "./CharacterWidget.styled";

const CharacterWidget: React.FC = () => {
  const { character } = useContext(AppDataContext);

  if (!character) return null;

  const { id, name, gender, status, imageUrl, episodes } = character;

  return (
    <CharacterWidgetContainer>
      <Heading>
        <CharacterName>{name}</CharacterName>
      </Heading>
      <Content>
        <DataGrid>
          <div>{id}</div>
          <CharacterStatusLabel isAlive={status === "Alive"}>
            {status}
          </CharacterStatusLabel>
          <div>{gender}</div>
          <div>{episodes}</div>
        </DataGrid>
        <CharacterAvatar src={imageUrl} alt="Character avatar" />
      </Content>
    </CharacterWidgetContainer>
  );
};

export default CharacterWidget;
