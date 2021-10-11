import React from "react";
import styled from "styled-components";
import quotes from "../lib/quotes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Holder = styled.div`
  /* margin-top: 200px; */
`;

const Quotes = () => {
  return (
    <Container>
      <Holder>
        {quotes.map((item, k) => {
          return (
            <div key={k}>
              <p>{item.quote}</p>
              <strong>{item.author}</strong>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </Holder>
    </Container>
  );
};

export default Quotes;
