import styled from "styled-components";

/**
 * Input stylings
 */
export const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  border: 1px solid ${({ theme }) => theme.lightGrey};
  padding: 0.6em 0.8em;
  border-radius: 2px;
  transition: 0.3s;
  color: ${({ theme }) => theme.grey};
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.grey};
    outline: none;
  }
`;
