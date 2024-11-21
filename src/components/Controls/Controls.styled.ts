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
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.background};
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.hover};
  }

  // Simple animation for the button to make clicking visible
  :active {
    transform: translateY(2px);
  }

  :disabled {
    cursor: not-allowed;
  }

  :disabled:active {
    transform: none;
  }
`;
