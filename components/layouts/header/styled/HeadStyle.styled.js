import styled from "styled-components";

/**
 * Main header container
 */
export const HeadStyle = styled.header`
  position: sticky;
  top: 0px;
  padding: 0.3em 0.5em;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  z-index: 1;
`;

/**
 * Head row
 */
export const HeadRow = styled.div`
  min-height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
 * Website logo
 */
export const SiteLogo = styled.h1`
  font-size: 1.2em;
  margin: 0;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
    font-size: 1.5em;
    font-family: ${({ theme }) => theme.brandFont};
  }
`;

/**
 * Create post
 */
export const CreatePost = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    height: auto;
  }
`;

/**
 * Chat
 */
export const ChatNav = styled.div`
  a {
    display: flex;
    align-items: center;
    svg {
      width: 30px;
      height: auto;
    }
  }
`;
