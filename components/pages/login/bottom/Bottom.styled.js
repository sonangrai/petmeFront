import styled from "styled-components";

export const BottomPart = styled.div``;

export const Or = styled.div`
  position: relative;
  text-align: center;
  &:after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.lightGrey};
    z-index: 1;
  }
  span {
    position: relative;
    z-index: 2;
    display: inline-block;
    background-color: #fff;
    padding: 0.5em;
    font-size: 0.9em;
    font-weight: ${({ theme }) => theme.fntWgtBold};
    color: ${({ theme }) => theme.lightGrey};
  }
`;

export const Forgot = styled.div`
  padding: 2em;
  text-align: center;
  a {
    font-size: 0.8em;
    color: ${({ theme }) => theme.grey};
    text-decoration: none;
  }
`;

export const Signuplink = styled.div`
  text-align: center;
  font-size: 0.9em;
  color: ${({ theme }) => theme.grey};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    font-weight: ${({ theme }) => theme.fntWgtBold};
  }
`;
