import styled, { css } from "styled-components";

type ButtonProps = {
  $variant: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  padding: 15px 20px;
  border-radius: 50px;
  cursor: pointer;
  
  ${({ $variant }) =>
    $variant === "primary" &&
    css`
    background-color: #435f75;
    color: #fff;
  `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
    background-color: transparent;
    border: 1px solid #435f75;
    color: #435f75;
  `}
`; 