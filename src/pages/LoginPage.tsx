import { useAuth } from '../modules/auth/hooks/useAuth';

export function LoginPage() {
  const { login, status } = useAuth();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login('mfa@user.com', '123')}>
        Login com MFA
      </button>
      <button onClick={() => login('user@test.com', '123')}>
        Login sem MFA
      </button>

      {status === 'loading' && <p>Loading...</p>}
    </div>
  );
}
