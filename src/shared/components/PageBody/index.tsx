import type { ReactNode } from "react";
import { Section } from "./styles";
import { BlobBackground } from "../BlobBackground";

export function PageBody({ children }: { children: ReactNode }) {
  return (
    <Section>
      <BlobBackground />
      <div className="input-block">
        {children}
      </div>
    </Section>
  )
}