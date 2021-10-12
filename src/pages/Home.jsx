import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* justify-content: center; */
  align-items: center;
  padding: 100px;
  font-size: 20px;
`;

const Home = () => {
  return (
    <Container>
      <div>
        &nbsp; I'm a self taught programmer, Currently focusing on the Crytpo
        world. Throughout the years I created Android Apps with Java, models of
        Deep Learning with Python, AI with Javascript, but currently I'm focused
        on Cryptos using technologies like Web3, Ethers, Truffle, Solidity,
        React, NextJS and so on. I'm now building DeFi and NFTs DApps. I also
        create Backend servers with Node, made some bots with it.
        <br></br>
        <br></br>
        &nbsp;
      </div>
      <br></br>
      <strong>in construction...</strong>
    </Container>
  );
};

export default Home;
