import { PRIMARY_COLOR } from './../../../styles/colors';
import styled, { css } from "styled-components";

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

    // glass effect
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

  > div, form {
    width: 50%;
    display: grid;
  }
`
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

  transition: border-color 0.2s ease, opacity 0.2s ease;

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