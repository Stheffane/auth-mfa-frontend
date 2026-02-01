import { MFACodeInput } from "../MFACodeInput";

export function MFAVerifyPage() {
  async function handleVerify(code: string) {
    console.log('Mock MFA code:', code);

    // mock delay
    await new Promise((r) => setTimeout(r, 800));

    if (code !== '123456') {
      throw new Error('Invalid code');
    }

    alert('MFA validado com sucesso');
  }

  return (
    <section>
      <h1>Verificação em duas etapas</h1>
      <p>Digite o código de 6 dígitos enviado para você</p>

      <MFACodeInput onSubmit={handleVerify} />
    </section>
  );
}
