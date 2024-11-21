import styled from "@emotion/styled";

export const CharacterWidgetContainer = styled.div`
  width: 300px;
  border-radius: 4px;
  border: 1px solid darkgray;
  font-size: 11px;
`;

export const CharacterStatusLabel = styled.span<{ isAlive: boolean }>`
  color: ${(props) => (props.isAlive ? "green" : "red")};
`;

export const CharacterAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 4px;
  filter: drop-shadow(0 4px 4px #00000026);
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
  justify-content: space-between;
  padding: 10px;
`;
