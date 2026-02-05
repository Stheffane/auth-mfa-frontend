import { MFACodeInput } from "../modules/auth/components/MFACodeInput";
import { useAuth } from "../modules/auth/hooks/useAuth";

export function MFAPage() {
  const { verifyMFA } = useAuth();

  return (
    <div className="input-block">
      <h1>Token verification</h1>
      <p>Enter the 6-digit code sent to you.</p>

      <MFACodeInput onSubmit={verifyMFA} />
    </div>
  );
}
