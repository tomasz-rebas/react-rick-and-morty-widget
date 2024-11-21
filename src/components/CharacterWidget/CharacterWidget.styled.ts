import styled from "@emotion/styled";

export const CharacterWidgetContainer = styled.div`
  width: 360px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 11px;
  background-color: #f2f2f2;
`;

export const Label = styled.span`
  padding: 4px;
  border-radius: 4px;
  background-color: #b2d0eb;
  margin-right: 4px;
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
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CharacterName = styled.h4`
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
