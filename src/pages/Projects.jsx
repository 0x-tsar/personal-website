import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 100px;
  /* flex-direction: column; */
  margin-top: 100px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Post = styled.div`
  margin: 10px;
`;

const projects = [
  { title: "title..", description: "description.." },
  { title: "title 2..", description: "description 2.." },
  { title: "title 3..", description: "description 3.." },
];

const Projects = () => {
  return (
    <Container>
      {projects.map((item, key) => {
        return (
          <Post key={key}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img src="./logo512.png" alt="" width={100} />
          </Post>
        );
      })}
    </Container>
  );
};

export default Projects;
