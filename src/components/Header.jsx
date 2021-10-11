import React from "react";
import styled from "styled-components";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Link } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Quotes from "../pages/Quotes";
import BookShelf from "../pages/Bookshelf";

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

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to="/" style={{ textDecoration: "none", color: "blueviolet" }}>
          Gustavo Fernandes
        </Link>
      </Logo>
      <Menu>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>

        {/* <BrowserRouter>
          <Route component={Home} path="/" exact />
          <Route component={BookShelf} path="/bookshelf" />
          <Route component={Quotes} path="/quotes" />
        </BrowserRouter> */}

        {/* <li>
          <a href="about">My Projects</a>
        </li> */}
      </Menu>
    </Container>
  );
};

export default Header;
