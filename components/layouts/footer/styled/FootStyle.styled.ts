import styled from "styled-components";

/**
 * Footer
 */
export const FootStyle = styled.footer`
  position: sticky;
  bottom: 0px;
  z-index: 1;
`;

/**
 * Nav
 */
export const FootNav = styled.div`
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
  background-color: ${({ theme }) => theme.white};
`;

/**
 * Nav item
 */
export const NavItem = styled.div`
  a {
    color: ${({ theme }) => theme.black};
  }
  svg {
    width: 30px;
    height: auto;
  }
`;
