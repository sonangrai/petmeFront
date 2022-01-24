import React from "react";
import { Input } from "./form.styled";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Fitem = styled.div`
  position: relative;
  &:before {
    position: absolute;
    content: "${(props) => props.placeholder}";
    top: -0.6em;
    left: 0.8em;
    color: ${({ theme }) => theme.grey};
    font-size: 0.7em;
    background-color: #fff;
    padding: 0 0.1em;
    transition: 0.3s;
  }
`;

/**
 *
 * @param {} param0
 * @returns A form item with input, It will also return data
 */
const FormItem = ({ placeholder, getData }) => {
  const [data, setData] = useState("");

  const onchange = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    if (data) getData(data);

    return () => {};
  }, [data]);

  return (
    <Fitem placeholder={data.length > 0 ? placeholder : ""}>
      <Input placeholder="Email or Username" value={data} onChange={onchange} />
    </Fitem>
  );
};

export default FormItem;
