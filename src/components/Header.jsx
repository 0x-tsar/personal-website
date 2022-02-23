import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

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
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
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

const Header = ({ changePage }) => {
  return (
    <Container>
      <Logo>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            //  color: "blueviolet"
          }}
        >
          Gustavo Fernandes
        </Link>
      </Logo>
      <Menu>
        <li>
          <Link to="/home" onClick={() => changePage("Home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/quotes" onClick={() => changePage("Quotes")}>
            Quotes
          </Link>
        </li>

        <li>
          <Link to="/bookshelf" onClick={() => changePage("Bookshelf")}>
            Bookshelf
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={() => changePage("Projects")}>
            My Projects
          </Link>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
