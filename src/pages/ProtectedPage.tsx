import { useState } from "react";
import { useAuth } from "../modules/auth/hooks/useAuth";
import { CountdownTimer } from "../shared/components/CountdownTimer";
import { PageBody } from "../shared/components/PageBody";

export function ProtectedPage() {
  const { logout } = useAuth()
  const [isLogout, setIsLogin] = useState(false);


  return (
    <PageBody>
      <h1>Protected Area</h1>
      <CountdownTimer onExpire={logout} onEnd={setIsLogin} />
      {isLogout ? <p>Logout...</p> : <p></p>}
    </PageBody>
  )
}
