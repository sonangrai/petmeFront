import FeedCard from "components/Card/FeedCard";
import React from "react";
import styled from "styled-components";

function Feeds({ data }) {
  console.log(data);
  return (
    <FeedRow>
      {data.map((d) => (
        <FeedCard key={d._id} data={d} />
      ))}
    </FeedRow>
  );
}

export default Feeds;

const FeedRow = styled.div`
  display: flex;
  flex-direction: column;
`;
