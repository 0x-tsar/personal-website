import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  /* justify-content: center; */
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <div>I'm a self taught programmer </div>
      <br></br>
      <strong>in construction...</strong>
    </Container>
  );
};

export default Home;
