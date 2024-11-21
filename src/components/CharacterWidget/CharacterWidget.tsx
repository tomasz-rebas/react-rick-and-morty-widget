import React, { useContext } from "react";
import { AppDataContext } from "../../contexts/AppData.context";
import {
  CharacterWidgetContainer,
  CharacterAvatar,
  Heading,
  Content,
  CharacterName,
  DataGrid,
  Label,
  Property,
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
          <Property>
            <Label>id</Label>
            <span>#{id}</span>
          </Property>
          <Property>
            <Label>status</Label>
            <span>{status}</span>
          </Property>
          <Property>
            <Label>gender</Label>
            <span>{gender}</span>
          </Property>
          <Property>
            <Label>episodes</Label>
            <span>{episodes}</span>
          </Property>
        </DataGrid>
        <CharacterAvatar src={imageUrl} alt="Character avatar" />
      </Content>
    </CharacterWidgetContainer>
  );
};

export default CharacterWidget;
