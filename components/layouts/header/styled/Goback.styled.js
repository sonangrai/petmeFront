import styled from "styled-components";

/**
 * GOback container
 */
export const GobackBox = styled.div`
  padding: 0.5em;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

/**
 * FLex
 */
export const BackFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
 * BackButton
 */
export const BackBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    height: auto;
    width: 40px;
  }
`;

/**
 * Title Bar
 */
export const TItlebar = styled.div`
  width: 100%;
  text-align: center;
  font-weight: ${({ theme }) => theme.fntWgtBold};
`;
