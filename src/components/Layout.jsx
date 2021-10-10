import React from 'react'
import styled from 'styled-components';
import Header from './Header'

const BasicCss = styled.div`
   margin: 0;
  font-family: "Anonymous Pro", monospace, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(254, 239, 225);
`

export const Container = styled(BasicCss)`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px calc(100vh - 60px);
  grid-template-areas: "header"
                       "main";
`;


const Layout = () => {
  return (
    <Container>
      <Header></Header>
    </Container>
  )
}

export default Layout
