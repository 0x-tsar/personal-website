import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* justify-content: center; */
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <div>salut des amis</div>
      <br></br>
      <strong>in construction</strong>
    </Container>
  );
};

export default Home;
