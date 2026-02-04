import styled, { keyframes } from "styled-components";

const up = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-800px) rotate(960deg);
  }
`;

export const SquaresWrapper = styled.ul`
  position: absolute;
  inset: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 0;
  background-color: #F7F6F1;
`;

type SquareProps = {
  $size: number;
  $left: number;
  $delay: number;
  $duration: number;
  $timing: string;
};

export const Square = styled.li<SquareProps>`
  position: absolute;
  bottom: ${({ $size }) => `-${$size}px`};
  left: ${({ $left }) => `${$left}%`};

  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  background-color: #a1c08a; //rgba(255, 255, 255, 0.2);
  border-radius: 100%;

  animation-name: ${up};
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: ${({ $delay }) => `${$delay}s`};
  animation-duration: ${({ $duration }) => `${$duration}s`};
  animation-timing-function: ${({ $timing }) => $timing};
`;
