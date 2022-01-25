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

/**
 * Error Label
 */
export const ErrorLabel = styled.div`
  color: ${({ theme }) => theme.danger};
  font-size: 0.8em;
  margin: 0.5em auto;
  text-align: center;
  max-width: 200px;
`;

/**
 * Success Label
 */
export const SuccessLabel = styled.div`
  color: ${({ theme }) => theme.success};
  font-size: 0.8em;
  margin: 0.5em auto;
  text-align: center;
  max-width: 200px;
`;
