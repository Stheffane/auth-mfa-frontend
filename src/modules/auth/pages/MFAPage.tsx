import { useAuth } from '../hooks/useAuth';

export function MFAPage() {
  const { verifyMFA, status } = useAuth();

  return (
    <div>
      <h1>MFA</h1>
      <button onClick={() => verifyMFA('123456')}>
        Verify Code
      </button>

      {status === 'loading' && <p>Verifying...</p>}
    </div>
  );
}
