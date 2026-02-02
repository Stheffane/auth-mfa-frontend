import { MFACodeInput } from "../modules/auth/components/MFACodeInput";
import { useAuth } from "../modules/auth/hooks/useAuth";
import { PageBody } from "../shared/components/PageBody";

export function MFAPage() {
  const { verifyMFA } = useAuth();

  return (
    <PageBody>
      <h1>Verificação de token</h1>
      <p>Digite o código de 6 dígitos enviado para você</p>

      <MFACodeInput onSubmit={verifyMFA} />
    </PageBody>
  );
}
