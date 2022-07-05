import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartCss = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;
export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyCss = styled(motion.div)`
  position: absolute;
  top: 0;
  /* left: 50%; */
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;

  h1 {
    font-size: 2rem;
    padding: 2rem;
  }

  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
`;

export const CheckoutBtn = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
    width: 100%;
  }
`;

export const Cards = styled(motion.div)``;