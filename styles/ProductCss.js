import styled from "styled-components";

export const ProductCss = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  .product-img_container {
    height: 30vh;
    overflow: hidden;
  }

  img {
    width: 100%;
    cursor: pointer;
    object-fit: cover;
  }

  h2 {
    padding: 0.5rem 0rem;
  }
`;
