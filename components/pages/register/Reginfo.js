import React from "react";
import styled from "styled-components";

const Info = styled.div`
  font-size: 0.9em;
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.fntWgtBold}
  margin: 2em 0;
`;

const Reginfo = () => {
  return <Info>Register to see the chubby cutie Pets.</Info>;
};

export default Reginfo;
