import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  padding: 100px;
  font-size: 25px;
`;

const Home = () => {
  return (
    <Container>
      <div>
        &nbsp; I'm a self taught programmer, Currently focusing on the Crytpo
        world. Throughout the years I created Android Apps with Java, models of
        Deep Learning with Python, AI with Javascript, but currently I'm focused
        on Crypto using technologies like Web3, Ethers, Truffle, Hardhat,
        Solidity, Oracles, React, NextJS and so on. I'm now building DeFi and
        NFT DApps. I also build Backend servers with Node, made some bots with
        it.
        <br></br>
        <br></br>
        &nbsp; I speak English, French and Portuguese
        <small style={{ fontSize: "15px", fontStyle: "italic" }}>
          {" "}
          [currently learning Russian]
        </small>
        . I like learning new things related to Science or new Technologies and
        on my free time I like to watch code magicians like Daniel Shiffman, CJ
        from The Coding Garden and George Hotz.
        <br />
        &nbsp;
        <div>I'm open for hiring or collaboration.</div>
      </div>
      <br></br>

      <br />
      <div>Discord: abhadira</div>
      <div>email: contato.gustavofernandes@hotmail.com</div>
      <br />
      <div>
        Linkedin:
        <a href="https://www.linkedin.com/in/gustavo-fernandes-48a49a130/">
          Gustavo Fernandes
        </a>
      </div>
      <div>
        Github:
        <a href="https://github.com/BronzeDisc">My Projects</a>
      </div>
    </Container>
  );
};

export default Home;
