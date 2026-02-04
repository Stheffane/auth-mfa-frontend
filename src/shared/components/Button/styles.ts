import styled, { css } from "styled-components";
import { PRIMARY_COLOR } from "../../../styles/colors";

type ButtonProps = {
  $variant: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 15px 20px;
  border-radius: 50px;
  font-weight: bold;
  
  margin-bottom: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  ${({ $variant }) =>
    $variant === "primary" &&
    css`
    background-color: ${PRIMARY_COLOR};
    color: #fff;
  `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
    background-color: transparent;
    border: 2px solid ${PRIMARY_COLOR};
    color: ${PRIMARY_COLOR};
  `}

  &:hover {
   transform: scale(1.04);
  }

  &:disabled {
    opacity: 0.5;
  }
`; 