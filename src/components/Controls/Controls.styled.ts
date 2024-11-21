import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 90px;
  height: 30px;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f2f2f2;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: #e8e8e8;
  }

  :active {
    transform: translateY(2px);
  }

  :disabled {
    cursor: not-allowed;
  }
`;
