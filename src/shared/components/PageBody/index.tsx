import type { ReactNode } from "react";
import { Section } from "./styles";
import { AnimatedSquares } from "../AnimatedSquares";

export function PageBody({ children }: { children: ReactNode }) {
  return (
    <Section>
      <AnimatedSquares />
      <div className="input-block">
        {children}
      </div>
    </Section>
  )
}