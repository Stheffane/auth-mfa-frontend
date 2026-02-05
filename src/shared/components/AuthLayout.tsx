import { Outlet } from "react-router-dom";
import { AnimatedSquares } from "./AnimatedSquares";
import { PageBody } from "./PageBody";

export function AuthLayout() {
  return (
    <>
      <AnimatedSquares />
      <PageBody>
        <Outlet />
      </PageBody>
    </>
  )
}
