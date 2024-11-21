import styled from "@emotion/styled";

export const CharacterWidgetContainer = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid darkgray;
  font-size: 11px;
`;

export const CharacterStatusLabel = styled.span<{ isAlive: boolean }>`
  color: ${(props) => (props.isAlive ? "green" : "red")};
`;

export const CharacterAvatar = styled.img`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  border-radius: 3px;
  border: 2px solid hotpink;
`;

export const Heading = styled.div`
  max-height: 30px;
  padding: 8px 10px;
  background-color: #87c74026;
`;

export const CharacterName = styled.h4`
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
