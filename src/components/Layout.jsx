import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

const BasicCss = styled.div`
  margin: 0;
  font-family: "Anonymous Pro", monospace, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(249, 238, 227);
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
  return (
    <Container>
      <Header></Header>
      <Main></Main>
    </Container>
  );
};

export default Layout;
