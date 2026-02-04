import { MFACodeInput } from "../modules/auth/components/MFACodeInput";
import { useAuth } from "../modules/auth/hooks/useAuth";
import { PageBody } from "../shared/components/PageBody";

export function MFAPage() {
  const { verifyMFA } = useAuth();

  return (
    <PageBody>
      <h1>Token verification</h1>
      <p>Enter the 6-digit code sent to you.</p>

      <MFACodeInput onSubmit={verifyMFA} />
    </PageBody>
  );
}
