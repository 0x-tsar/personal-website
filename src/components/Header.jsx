import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 60vw;
  justify-self: center;

  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const Logo = styled.div`
  color: blueviolet;
  align-self: center;
  margin-left: 10px;
  font-size: 40px;
  font-weight: bolder;
`;

export const Menu = styled.div`
  color: #6b6b6b;
  /* width: 200px; */
  display: flex;
  align-self: flex-end;
  list-style-type: none;
  padding-right: 10px;

  li a {
    text-decoration: none;
    margin-right: 10px;
    color: rgb(66, 66, 66);

    :hover {
      color: blueviolet;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>Gustavo Fernandes</Logo>
      <Menu>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="bookshelf">Bookshelf</a>
        </li>
        <li>
          <a href="quotes">Quotes</a>
        </li>
        <li>
          <a href="about">My Projects</a>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
