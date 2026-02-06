import { PRIMARY_COLOR } from './../../../styles/colors';
import styled, { css, keyframes } from "styled-components";


/* Animations */
const entrySlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

/* Page Layout */
export const Section = styled.section`
  position: relative;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .input-block {
    width: 40%;
    height: 65%;
    padding: 50px 25px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    z-index: 1;
    
    /* Glass effect */
    background: rgba(255, 255, 255, 0.66);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(5.1px);
  }
  
  h1 {
    padding-bottom: 28px;
    color: ${PRIMARY_COLOR};
  }
  
  p, label, span {
    color: #7e7e7e;
    padding-bottom: 20px;
  }
  
  span {
    font-size: 40px;
  }
  
  form {
    width: 50%;
    display: grid;
  }

  .animated-entry {
    animation: ${entrySlide} 300ms ease forwards;
  }

  @media (max-width: 1300px) {
    .input-block {
      width: 55%;
    }
  }
  
  @media (max-width: 850px) {
    .input-block {
      width: 70%;
    }

    form {
      width: 60%;
    }
  }

  @media (max-width: 600px) {
    .input-block {
      width: 80%;
    }

   form {
      width: 90%;
    } 
  }

  @media (max-width: 350px) {
    .input-block {
      width: 100%;
      height: auto;
    }

   form {
      width: 90%;
    } 
  }
`

/* Inputs */
export type InputProps = {
  $hasError: boolean;
  $isSubmitting: boolean;
};

export const BaseInput = styled.input<InputProps>`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: ${PRIMARY_COLOR};

  border-bottom: 2px solid #c9c9c9;
  outline: none;

  transition: 0.2s ease;
  transition-property: border-color, opacity;

  margin-bottom: 20px;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: #e53935;
    `}

  ${({ $isSubmitting }) =>
    $isSubmitting &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}

  &:focus {
    border-color: ${({ $hasError }) => $hasError ? '#e53935' : PRIMARY_COLOR};
  }
`;