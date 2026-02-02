
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant: 'primary' | 'secondary'
}

export function ButtonAction({ children, variant, ...props }: ButtonProps) {
  return (
    <Button $variant={variant} {...props}>
      {children}
    </Button>
  )
}