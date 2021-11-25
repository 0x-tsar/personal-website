import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Home from "../pages/Home";
import Bookshelf from "../pages/Bookshelf";
import Projects from "../pages/Projects";
import Quotes from "../pages/Quotes";

const BasicCss = styled.div`
  margin: 0;
  font-family: "Anonymous Pro", monospace, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(249, 238, 227);
  font-size: 23px;
`;

export const Container = styled(BasicCss)`
  width: 100vw;
  height: 100vh;
  /* padding-top: 70px; */

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px;
  grid-template-areas:
    "header"
    "main";
`;

const Layout = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  document.title = "Gustavo Fernandes";

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    console.log(`new Page: ${newPage}`);
  };

  if (currentPage === "Home") {
    return (
      <Container>
        <Header changePage={changePage}></Header>
        <Home></Home>
      </Container>
    );
  } else if (currentPage === "Quotes") {
    return (
      <Container>
        <Header changePage={changePage}></Header>
        <Quotes></Quotes>
      </Container>
    );
  } else if (currentPage === "Bookshelf") {
    return (
      <Container>
        <Header changePage={changePage}></Header>
        <Bookshelf></Bookshelf>
      </Container>
    );
  } else if (currentPage === "Projects") {
    return (
      <Container>
        <Header changePage={changePage}></Header>
        <Projects></Projects>
      </Container>
    );
  }
};

export default Layout;

// return (
//   <Container>
//     <Header changePage={changePage}></Header>
//     {/* <Main></Main> */}
//     <Home></Home>
//   </Container>
// );
