import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Bookshelf = () => {
  return (
    <Container>
      <h2>Books I read</h2>
      <br></br>
      <div>
        <p>Robinson Crusoé</p>
        <strong>- Daniel Defoe</strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>Elon Musk: Tesla, Spacex, and the Quest for a Fantastic Future</p>
        <strong>- Ashlee Vance</strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>
          Surely You're Joking, Mr. Feynman: Adventures of a Curious Character
        </p>
        <strong>- Richard Phillips Feynman </strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>How to DeFi (Beginner)</p>
        <strong>- Darren Lau </strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>Império Dos Apps</p>
        <strong>- Chad Mureta</strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>JavaScript - Guia do Programador</p>
        <strong>- Maurício Samy Silva</strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>Google Android</p>
        <strong>- Ricardo R. Lecheta</strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>Deep Learning with Python</p>
        <strong>- François Chollet</strong>
        <br></br>
        <br></br>
      </div>
      <div>
        <p>Deep Learning</p>
        <strong>- Ian Goodfellow</strong>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ marginBottom: "100px" }}>
        [in construction...]
        <br></br>
        <br></br>
      </div>
    </Container>
  );
};

export default Bookshelf;
