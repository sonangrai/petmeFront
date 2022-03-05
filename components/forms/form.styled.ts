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

/**
 * Label form item
 */
export const FormLabel = styled.label`
  font-weight: ${({ theme }) => theme.fntWgtBold};
  display: block;
  margin-bottom: 0.4em;
`;

/**
 * Form item hint
 */
export const FormHint = styled.div`
  font-size: 0.7em;
  opacity: 0.5;
`;

/**
 * Radio Row
 */
export const RadioRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

/**
 * Radio Item
 */
export const RadioItem = styled.div`
  display: flex;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;

/**
 * Radio Input
 */
export const InputRadio = styled.input`
  padding: 0.6em 0.8em;
  border-radius: 2px;
  transition: 0.3s;
  color: ${({ theme }) => theme.grey};
  accent-color: ${({ theme }) => theme.primaryColor};
  &:focus {
    border: 1px solid ${({ theme }) => theme.grey};
    outline: none;
  }
`;

/**
 * Radio Label
 */
export const RadioLabel = styled.label`
  font-weight: ${({ theme }) => theme.fntWgtBold};
  display: block;
  font-size: 0.8em;
  color: ${({ theme }) => theme.grey};
`;
