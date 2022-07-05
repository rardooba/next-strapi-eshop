import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

//auto-fit = content auto resize
//minmax = min-width = 20rem - max-width = 1fr whatever spae you have, take it up !
