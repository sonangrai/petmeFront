import styled from "styled-components";

/**
 * Choose image
 */
export const ChooseImage = styled.div`
  padding: 1em;
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
  text-align: center;
  label {
    color: ${({ theme }) => theme.primaryColor};
    font-weight: ${({ theme }) => theme.fntWgtBold};
  }
  input {
    display: none;
  }
`;
