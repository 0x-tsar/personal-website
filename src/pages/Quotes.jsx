import React, { useEffect, useState } from "react";
import styled from "styled-components";
import quotes from "../lib/quotes";
import FetchData from "../api/FetchData";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Holder = styled.div`
  /* margin-top: 200px; */
`;

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState();

  useEffect(() => {
    (async () => {
      const quote = await FetchData();
      setRandomQuote(quote);
      console.log(quote);
      console.log(quote.text);
    })();
  }, []);

  return (
    <Container>
      <Holder>
        <br></br>
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

        <div style={{ left: 200, top: 700, position: "absolute" }}>
          {randomQuote ? (
            <div>
              `{randomQuote.text}` <br></br>
              <strong>- {randomQuote.author}</strong> <br></br>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Holder>
    </Container>
  );
};

export default Quotes;
