import { MFACodeInput } from "../modules/auth/components/MFACodeInput";
import { useAuth } from "../modules/auth/hooks/useAuth";

export function MFAPage() {
  const { verifyMFA } = useAuth();

  return (
    <section>
      <h1>Verificação em duas etapas</h1>
      <p>Digite o código de 6 dígitos enviado para você</p>

      <MFACodeInput onSubmit={verifyMFA} />
    </section>
  );
}
