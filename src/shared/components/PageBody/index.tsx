import type { ReactNode } from "react";
import { Section } from "./styles";

export function PageBody({ children }: { children: ReactNode }) {
  return (
    <Section>
      {children}
    </Section>
  )
}