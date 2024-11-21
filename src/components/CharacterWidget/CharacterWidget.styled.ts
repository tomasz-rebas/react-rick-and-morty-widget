import styled from "@emotion/styled";
import { Character } from "../../types/RickAndMorty.types";

export const CharacterWidgetContainer = styled.div`
  width: 360px;
  height: 120px;
  border-radius: 8px;
  border: ${(props) => `1px solid ${props.theme.colors.border}`};
  font-size: 11px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Label = styled.span`
  padding: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.label};
  margin-right: 4px;
`;

export const CharacterAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 4px;
  filter: ${(props) => `drop-shadow(0 4px 4px ${props.theme.colors.shadow})`};
`;

interface HeadingProps {
  status: Character["status"];
}

export const Heading = styled.div<HeadingProps>`
  max-height: 30px;
  padding: 8px 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  background-color: ${(props) => {
    switch (props.status) {
      case "Alive":
        return props.theme.colors.status.alive;
      case "Dead":
        return props.theme.colors.status.dead;
      default:
        return props.theme.colors.status.unknown;
    }
  }};
`;

export const CharacterName = styled.h4`
  font-weight: 700;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
`;

export const Property = styled.div`
  height: 17px;
  margin: 5px 0;
`;

export const FetchingStatus = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
