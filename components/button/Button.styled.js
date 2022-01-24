import styled from "styled-components";

/**
 * Main button
 */
export const PrimaryBtn = styled.button`
  border: 0;
  padding: 0.6em 0.8em;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  border-radius: 2px;
  width: 100%;
  font-weight: ${({ theme }) => theme.fntWgtBold};
`;
