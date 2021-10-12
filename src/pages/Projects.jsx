import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* justify-content: center; */
  align-items: center;
`;

export const Post = styled.div``;

const projects = [{ title: "title..", description: "description.." }];

const Projects = () => {
  return (
    <Container>
      {projects.map((item, key) => {
        return <Post key={key}></Post>;
      })}
    </Container>
  );
};

export default Projects;
