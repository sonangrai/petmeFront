import styled from "styled-components";

/**
 * Dp container
 */
export const Dpcontainer = styled.div`
  padding: 1em;
`;

/**
 * Dp Row
 */
export const DpRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/**
 * DpBox
 */
export const DpBox = styled.div`
  width: 50px;
`;

/**
 * Selected DP
 */
export const CurrentDp = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

/**
 * Username
 */
export const NamePart = styled.div`
  width: calc(100% - 50px - 1em);
  margin-left: 1em;
`;

/**
 * Username
 */
export const UsernameTitle = styled.div`
  font-weight: ${({ theme }) => theme.fntWgtBold};
  color: ${({ theme }) => theme.black};
  font-size: 1.1em;
`;

/**
 * Update link
 */
export const UpdateDp = styled.div`
  margin-top: 0.1em;
  span {
    font-size: 0.8em;
    font-weight: ${({ theme }) => theme.fntWgtBold};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
